const {test}=require('node:test');
const assert=require('node:assert/strict');
const model=require('./dist/model.js');
test('30-minute boundary expires each field independently',()=>{
  const zone={noise:{value:'Quiet',at:0},outlet:{value:'Available',at:60000}};
  assert.equal(model.status(zone,1799000).noise.value,'Quiet');
  assert.equal(model.status(zone,1800000).noise.value,'Unknown');
  assert.equal(model.status(zone,1800000).outlet.value,'Available');
  assert.equal(model.status(zone,1860000).outlet.value,'Unknown');
});
test('combined filter excludes expired and unknown fields',()=>{
  const filters={quiet:true,power:true},zone={noise:{value:'Quiet',at:0},outlet:{value:'Available',at:60000}};
  assert.equal(model.matches(zone,1799000,filters),true);
  assert.equal(model.matches(zone,1800000,filters),false);
  assert.equal(model.matches({noise:{value:'Unknown',at:null},outlet:{value:'Available',at:0}},1000,filters),false);
});
test('valid simulation updates both observation times; invalid input does not mutate',()=>{
  const zone=model.createZones(1000000)[0],before=JSON.stringify(zone);
  assert.throws(()=>model.submit(zone,'Extreme','Available',1000000));
  assert.equal(JSON.stringify(zone),before);
  model.submit(zone,'Loud','None available',1000000);
  assert.equal(zone.noise.at,1000000);assert.equal(zone.outlet.at,1000000);
  assert.equal(model.status(zone,1000000).noise.value,'Loud');
});
test('two schematic floors contain ten zones with unique identifiers',()=>{
  const zones=model.createZones(1000000);
  assert.equal(zones.length,10);assert.equal(new Set(zones.map(z=>z.id)).size,10);
  assert.equal(zones.filter(z=>z.floor===1).length,5);
  assert.equal(zones.filter(z=>z.floor===2).length,5);
});
test('every selected zone receives the simulated update independently',()=>{
  for(let i=0;i<10;i++){
    const zones=model.createZones(10000000), target=zones[i];
    model.submit(target,'Moderate','None available',10001000);
    assert.equal(zones.filter(z=>z.noise.at===10001000).length,1);
    assert.equal(target.noise.value,'Moderate');
    assert.equal(target.outlet.value,'None available');
  }
});
test('after 30 minutes combined quiet and available results can be empty',()=>{
  const zones=model.createZones(10000000), later=10000000+model.TTL;
  assert.equal(zones.filter(z=>model.matches(z,later,{quiet:true,power:true})).length,0);
});
test('a report later than the demo clock is not displayed as a fresh report',()=>{
  const future={value:'Quiet',at:1001};
  assert.equal(model.observation(future,1000).value,'Unknown');
  assert.equal(model.observation(future,1000).future,true);
});
