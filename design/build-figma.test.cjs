// Contract tests for the construction script in a small Figma API model.
// Run: node --test design/build-figma.test.cjs
// These checks do not execute the real Figma renderer or verify live file parity.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, 'build-figma.js'), 'utf8');

function createFigma() {
  let next = 0;
  let writes = 0;
  const ids = new Map();
  const collections = [];
  const variables = [];
  const styles = [];
  function node(type, name = '') {
    const n = {
      id: `${type}:${++next}`, type, name, children: [], parent: null,
      width: 100, height: 100, x: 0, y: 0, reactions: [],
      appendChild(child) { child.parent = this; this.children.push(child); writes++; },
      resize(width, height) { this.width = width; this.height = height; writes++; },
      setBoundVariable() { writes++; },
      addComponentProperty(name) {
        const key = `${name}#test`; this.componentPropertyDefinitions[key] = {}; writes++; return key;
      },
      findOne(predicate) { return descendants(this).find(predicate) || null; },
      findAllWithCriteria({ types }) { return descendants(this).filter(child => types.includes(child.type)); },
      getStyledTextSegments() { return [{ fontName: { family: 'Inter', style: 'Regular' } }]; },
      setProperties(values) { this.properties = values; writes++; },
      async setReactionsAsync(reactions) { this.reactions = reactions; writes++; },
      createInstance() {
        const instance = node('INSTANCE', this.name);
        instance.componentPropertyDefinitions = this.componentPropertyDefinitions;
        instance.appendChild(node('TEXT', 'Label'));
        writes++;
        return instance;
      },
      componentPropertyDefinitions: { 'Label#test': {}, 'Has Icon#test': {} },
    };
    ids.set(n.id, n);
    return n;
  }
  const page = node('PAGE', 'Test page');
  page.flowStartingPoints = [];
  const library = node('COMPONENT_SET', 'Button');
  for (const name of ['Variant=Primary, State=Default, Size=Medium', 'Variant=Neutral, State=Default, Size=Medium']) {
    library.appendChild(node('COMPONENT', name));
  }
  writes = 0;
  const figma = {
    currentPage: page,
    async listAvailableFontsAsync() { return ['Regular', 'Bold'].map(style => ({fontName: {family:'Inter', style}})); },
    async loadFontAsync() {},
    async getLocalTextStylesAsync() { return styles; },
    createTextStyle() { const s = {id:`style:${++next}`}; styles.push(s); writes++; return s; },
    createText() { writes++; return node('TEXT'); },
    createAutoLayout() { writes++; return node('FRAME'); },
    createComponent() { writes++; return node('COMPONENT'); },
    async importComponentSetByKeyAsync() { return library; },
    variables: {
      async getLocalVariableCollectionsAsync() { return collections; },
      async getLocalVariablesAsync() { return variables; },
      createVariableCollection(name) {
        const c = { id:`collection:${++next}`, name, defaultModeId:'mode', renameMode() {} };
        collections.push(c); writes++; return c;
      },
      createVariable(name, collection) {
        const v = {id:`variable:${++next}`, name, variableCollectionId:collection.id,
          setValueForMode() {}, setVariableCodeSyntax() {}};
        variables.push(v); writes++; return v;
      },
      setBoundVariableForPaint(paint) { return paint; },
    },
  };
  return {figma, page, ids, makeNode: node, get writes() { return writes; }};
}

function descendants(root) {
  const found = [];
  for (const child of root.children || []) found.push(child, ...descendants(child));
  return found;
}
function content(frame) {
  return descendants(frame).filter(n => n.type === 'TEXT').map(n => n.characters || '').join('\n');
}
function buttons(frame) {
  return descendants(frame).filter(n => n.type === 'INSTANCE').map(n => ({
    node:n, label:Object.entries(n.properties || {}).find(([k]) => k.startsWith('Label#'))?.[1] || '',
  }));
}
function run(harness) {
  // The Figma executor accepts top-level await/return; emulate that wrapper.
  return vm.runInNewContext(`(async () => {\n${source}\n})()`, {figma:harness.figma, console});
}
function destination(frame, label, harness) {
  const matches = buttons(frame).filter(b => b.label === label);
  assert.equal(matches.length, 1, `Expected one ${label} button in ${frame.name}, got ${matches.length}`);
  const action = matches[0].node.reactions[0]?.actions?.[0];
  assert.ok(action?.destinationId, `${frame.name}: ${label} has no destination`);
  const target = harness.ids.get(action.destinationId);
  assert.ok(target, `${frame.name}: ${label} points to an unknown node`);
  return target;
}

test('fresh build has current map, expiry and reward interactions at both widths', async () => {
  const h = createFigma();
  const result = await run(h);
  assert.equal(Object.keys(result.frames).length, 32, 'Expected 16 generated screen states per width');
  assert.equal(h.page.flowStartingPoints.length, 2, 'Both responsive flows need starting points');
  const frame = (width, key) => {
    const id = result.frames[`${width}:${key}`]?.id;
    assert.ok(id, `Missing ${width}:${key}`);
    return h.ids.get(id);
  };
  for (const width of [1280, 360]) {
    const map = frame(width, 'map'), filtered = frame(width, 'filtered');
    const floor2 = frame(width, 'floor2'), floor2Filtered = frame(width, 'floor2Filtered');
    const report = frame(width, 'report'), expired = frame(width, 'expired');
    const pending = frame(width, 'rewards'), approved = frame(width, 'rewardsApproved');
    const rejected = frame(width, 'rewardsRejected');
    assert.equal(destination(map, 'Quiet + available outlet', h), filtered);
    assert.equal(destination(filtered, 'Floor 2', h), floor2Filtered);
    assert.equal(destination(floor2, 'Quiet + available outlet', h), floor2Filtered);
    assert.equal(destination(floor2Filtered, 'Floor 1', h), filtered);
    assert.equal(destination(floor2Filtered, 'Clear filters · Floor 2', h), floor2);
    assert.equal(descendants(floor2Filtered).filter(n => /^Z\d\d\s/.test(n.name)).length, 0,
      'Filtered Floor 2 must show the empty state, not zone cards');
    for (const mapState of [map, filtered, floor2, floor2Filtered]) {
      assert.equal(destination(mapState, 'Open Z01 example report', h), report);
    }
    for (const mapState of [map, filtered, floor2])
      assert.match(content(mapState), /Illustrative campus zones and example observations; no live data\./);
    assert.match(content(floor2Filtered), /Clear the filter to browse Floor 2\./);
    for (const [id, mapState, label, expected] of [
      ['Z01', map, 'View zone', frame(width, 'details')],
      ['Z02', map, 'Open report demo (Z01)', report],
      ['Z03', map, 'Open report demo (Z01)', report],
      ['Z04', map, 'Open expiry demo (Z01)', expired],
      ['Z05', map, 'Open report demo (Z01)', report],
      ...['Z06', 'Z07', 'Z08', 'Z09', 'Z10'].map(id => [id, floor2, 'Open expiry demo (Z01)', expired]),
    ]) {
      const card = descendants(mapState).find(n => n.type === 'FRAME' && n.name.startsWith(`${id} `));
      assert.ok(card, `${mapState.name}: missing ${id} card`);
      assert.equal(destination(card, label, h), expected, `${id}: unexpected example destination`);
    }
    assert.match(content(expired), /30 minutes/);
    assert.match(content(expired), /29:59/);
    assert.match(content(expired), /30:00/);
    assert.doesNotMatch(content(expired), /45.minute/i);
    for (const [state, name] of [[pending, 'Pending'], [approved, 'Approved'], [rejected, 'Rejected']]) {
      assert.match(content(state), new RegExp(name, 'i'));
      assert.match(content(state), /simulat/i);
      assert.match(content(state), /university approval/i);
      assert.equal(buttons(state).find(b => b.label === 'Rewards').node.reactions.length, 0,
        `${name}: the current-section Rewards control should stay on this screen`);
    }
    assert.equal(destination(pending, 'Next example: Approved', h), approved);
    assert.equal(destination(approved, 'Next example: Rejected', h), rejected);
    assert.equal(destination(rejected, 'Next example: Pending', h), pending);
  }
  for (const n of descendants(h.page)) for (const r of n.reactions || []) for (const a of r.actions || []) {
    assert.ok(h.ids.has(a.destinationId), `Broken reaction destination ${a.destinationId}`);
    let root = n;
    while (root.parent && root.parent.type !== 'PAGE') root = root.parent;
    const dest = h.ids.get(a.destinationId);
    assert.equal(root.width, dest.width, `${root.name}: reaction crosses the layout widths`);
  }
});

test('rerun on an existing prototype is refused before changing it', async () => {
  const h = createFigma();
  await run(h);
  const before = JSON.stringify(h.page, (k,v) => k === 'parent' ? undefined : v);
  const writesBefore = h.writes;
  await assert.rejects(run(h), /not empty/i);
  assert.equal(h.writes, writesBefore, 'Rerun made API mutations before refusal');
  assert.equal(JSON.stringify(h.page, (k,v) => k === 'parent' ? undefined : v), before);
});

test('any preexisting page content is refused before any new variables, styles, or nodes', async () => {
  for (const [type, name] of [
    ['FRAME', 'Mobile web / 01 Landing Page'],
    ['FRAME', 'Renamed prototype screen'],
    ['TEXT', 'Unrelated page content'],
  ]) {
    const h = createFigma();
    h.page.appendChild(h.makeNode(type, name));
    const before = JSON.stringify(h.page, (k,v) => k === 'parent' ? undefined : v);
    const writesBefore = h.writes;
    await assert.rejects(run(h), /not empty/i);
    assert.equal(h.writes, writesBefore, `${name}: mutated before refusal`);
    assert.equal(JSON.stringify(h.page, (k,v) => k === 'parent' ? undefined : v), before);
  }
});
