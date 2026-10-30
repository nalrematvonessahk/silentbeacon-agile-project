// Execute in the Figma Plugin API context after inspecting the destination file.
// Intended for use_figma, which supplies top-level await and return.
// This creates editable native nodes; no screenshots, remote assets, backend or microphone.
// Safe fresh build only: never mutate, move, or duplicate existing page content.
if (figma.currentPage.children.length) {
  throw new Error('The current page is not empty. Build stopped before any changes; use a separate empty page and reconcile manually.');
}
const createdNodeIds = [];
const mutatedNodeIds = [];
const keep = n => { createdNodeIds.push(n.id); return n; };
const page = figma.currentPage;
const available = await figma.listAvailableFontsAsync();
const regular = available.find(x => x.fontName.family === 'Inter' && x.fontName.style === 'Regular');
const bold = available.find(x => x.fontName.family === 'Inter' && x.fontName.style === 'Bold');
if (!regular || !bold) throw new Error('Inter Regular and Bold required; no canvas changed.');
await Promise.all([figma.loadFontAsync(regular.fontName), figma.loadFontAsync(bold.fontName)]);
const hex = h => ({r:parseInt(h.slice(1,3),16)/255,g:parseInt(h.slice(3,5),16)/255,b:parseInt(h.slice(5,7),16)/255});
const colors = {canvas:'#F7F8F4',white:'#FFFFFF',ink:'#142C32',muted:'#53666B',line:'#DCE5DF',teal:'#0D6956',soft:'#DDEEE6',amber:'#956313',amberSoft:'#FAEDD2',red:'#A34038',redSoft:'#F6E5DF',unknown:'#596570',unknownSoft:'#EBEEF0'};
const collections = await figma.variables.getLocalVariableCollectionsAsync();
let primitive = collections.find(c=>c.name==='SilentBeacon primitives');
if (!primitive) { primitive=figma.variables.createVariableCollection('SilentBeacon primitives'); primitive.renameMode(primitive.defaultModeId,'Value'); }
let semantic = collections.find(c=>c.name==='SilentBeacon semantic');
if (!semantic) { semantic=figma.variables.createVariableCollection('SilentBeacon semantic'); semantic.renameMode(semantic.defaultModeId,'Light'); }
const vars = await figma.variables.getLocalVariablesAsync();
const tokens={};
for (const [name,value] of Object.entries(colors)) {
  let base=vars.find(v=>v.variableCollectionId===primitive.id && v.name===name);
  if(!base) {base=figma.variables.createVariable(name,primitive,'COLOR');base.scopes=[];base.setValueForMode(primitive.defaultModeId,hex(value));}
  let token=vars.find(v=>v.variableCollectionId===semantic.id && v.name==='color/'+name);
  if(!token){token=figma.variables.createVariable('color/'+name,semantic,'COLOR');token.scopes=['FRAME_FILL','SHAPE_FILL','TEXT_FILL','STROKE_COLOR'];token.setValueForMode(semantic.defaultModeId,{type:'VARIABLE_ALIAS',id:base.id});token.setVariableCodeSyntax('WEB','var(--sb-'+name+')');}
  tokens[name]=token;
}
for(const [name,value,scope] of [['gap',16,'GAP'],['pad',24,'GAP'],['radius',16,'CORNER_RADIUS']]) {
  let v=vars.find(v=>v.variableCollectionId===semantic.id&&v.name===name);
  if(!v){v=figma.variables.createVariable(name,semantic,'FLOAT');v.scopes=[scope];v.setValueForMode(semantic.defaultModeId,value);v.setVariableCodeSyntax('WEB','var(--sb-'+name+')');} tokens[name]=v;
}
const paint = key => figma.variables.setBoundVariableForPaint({type:'SOLID',color:hex(colors[key])},'color',tokens[key]);
const localStyles=await figma.getLocalTextStylesAsync(), textStyles={};
for(const size of [11,12,14,16,20,22,28,30,46])for(const weight of ['Regular','Bold']){const name='SilentBeacon/'+weight+'/'+size;let s=localStyles.find(x=>x.name===name);if(!s){s=figma.createTextStyle();s.name=name;s.fontName=weight==='Bold'?bold.fontName:regular.fontName;s.fontSize=size;s.lineHeight={unit:'PERCENT',value:145};}textStyles[size+'/'+weight]=s;}
function text(parent, str, size=16, weight='Regular', color='ink', width) {
  const n=keep(figma.createText());n.name=str.slice(0,70);n.fontName=weight==='Bold'?bold.fontName:regular.fontName;n.fontSize=size;n.lineHeight={unit:'PERCENT',value:145};n.textStyleId=textStyles[size+'/'+weight].id;n.characters=str;n.fills=[paint(color)];parent.appendChild(n);
  if(width){n.resize(width,n.height);n.textAutoResize='HEIGHT';} return n;
}
function box(parent,name,width,bg='white',direction='VERTICAL',padding=24,gap=16) {
  const n=keep(figma.createAutoLayout(direction));n.name=name;n.fills=bg?[paint(bg)]:[];n.resize(width,100);n.layoutSizingHorizontal='FIXED';n.layoutSizingVertical='HUG';n.itemSpacing=gap;n.paddingLeft=n.paddingRight=n.paddingTop=n.paddingBottom=padding;n.setBoundVariable('cornerRadius',tokens.radius);parent.appendChild(n);return n;
}
function line(parent,title,body,width,color='white'){const c=box(parent,title,width,color);text(c,title,20,'Bold','ink',width-48);text(c,body,14,'Regular','muted',width-48);return c;}
let ui=page.children.find(n=>n.name==='SilentBeacon components');
if(!ui){ui=box(page,'SilentBeacon components',1000,'white','HORIZONTAL');ui.x=200;ui.y=-700;}
const components={};
const libraryButtons=await figma.importComponentSetByKeyAsync('cc8b558dc7d9684011b6b99ce8e6509399bc836b');
if(!libraryButtons || libraryButtons.type!=='COMPONENT_SET')throw new Error('Previously imported SDS Button set missing');
components.Primary=libraryButtons.children.find(c=>c.name==='Variant=Primary, State=Default, Size=Medium');
components.Secondary=libraryButtons.children.find(c=>c.name==='Variant=Neutral, State=Default, Size=Medium');
const libraryFonts=new Map();for(const t of libraryButtons.findAllWithCriteria({types:['TEXT']})){for(const seg of t.getStyledTextSegments(['fontName']))libraryFonts.set(JSON.stringify(seg.fontName),seg.fontName);}await Promise.all([...libraryFonts.values()].map(f=>figma.loadFontAsync(f)));
for(const [key,bg,fg] of [['Quiet','soft','teal'],['Moderate','amberSoft','amber'],['Loud','redSoft','red'],['Unknown','unknownSoft','unknown']]) {
  let c=ui.findOne(n=>n.type==='COMPONENT'&&n.name==='SB/'+key);
  if(!c){c=keep(figma.createComponent());c.name='SB/'+key;c.layoutMode='HORIZONTAL';c.primaryAxisSizingMode='AUTO';c.counterAxisSizingMode='AUTO';c.paddingLeft=c.paddingRight=16;c.paddingTop=c.paddingBottom=12;c.itemSpacing=8;c.fills=[paint(bg)];c.setBoundVariable('cornerRadius',tokens.radius);ui.appendChild(c);const t=text(c,key,14,'Bold',fg);const p=c.addComponentProperty('Label','TEXT',key);t.componentPropertyReferences={characters:p};c.description='Reusable '+key+' control or labeled state. Color is always accompanied by text.';} components[key]=c;
}
const links=[];
function button(parent,label,target,style='Primary',width){const n=keep(components[style].createInstance());const props=components[style].componentPropertyDefinitions;const prop=Object.keys(props).find(k=>k.startsWith('Label#'));const values={[prop]:label};for(const k of Object.keys(props))if(k.startsWith('Has Icon'))values[k]=false;n.setProperties(values);parent.appendChild(n);if(style==='Primary'||style==='Secondary'){n.fills=[paint(style==='Primary'?'teal':'white')];for(const t of n.findAllWithCriteria({types:['TEXT']}))t.fills=[paint(style==='Primary'?'white':'ink')];}if(width)n.resize(width,n.height);if(target)links.push({node:n,target});return n;}
function badge(parent,value){return button(parent,value,null,components[value]?value:'Secondary');}
const definitions=[
 ['landing','01 Landing Page'],['map','02 Campus Floor Map'],['details','03 Study Zone Details'],['report','04 Submit Noise and Outlet Report'],['verification','05 Report Verification Status'],['rewards','06 Proposed Social GPA Rewards'],['analytics','07 Campus Analytics Dashboard'],['expired','08 Report Expired / Unknown State'],
 ['filtered','09 Map / Quiet and outlet filter'],['floor2','10 Map / Floor 2 empty results'],['floor2Filtered','14 Map / Floor 2 filtered empty'],['blocked','11 Verification / Blocked'],['sampling','12 Optional sampling / Consent and fallback'],['updated','13 Zone / Submitted example'],['rewardsApproved','15 Rewards / Approved'],['rewardsRejected','16 Rewards / Rejected']
];
const frames={};
// Set to [1280] or [360] only when building one layout on an otherwise empty page.
const widths=typeof SB_WIDTHS==='undefined'?[1280,360]:SB_WIDTHS;
for(const width of widths) {
 const mobile=width===360,pad=mobile?20:48,inner=width-pad*2,pre=mobile?'Mobile web / ':'Desktop web / ';
 for(let idx=0;idx<definitions.length;idx++) {
  const [key,name]=definitions[idx],identity=pre+name;
  let f=box(page,identity,width,'canvas','VERTICAL',pad,24);f.x=200+(idx%4)*(width+100);f.y=(mobile?8000:0)+Math.floor(idx/4)*1700;frames[width+':'+key]=f;
  const nav=box(f,'Web navigation',inner,null,mobile?'VERTICAL':'HORIZONTAL',0,16);text(nav,'SilentBeacon',22,'Bold');button(nav,'Campus map',width+':map','Secondary');button(nav,'Rewards',['rewards','rewardsApproved','rewardsRejected'].includes(key)?null:width+':rewards','Secondary');button(nav,'Campus insights',width+':analytics','Secondary');
  text(f,'AITU  /  SE-2416  /  INTERACTIVE WEB PROTOTYPE',11,'Bold','muted',inner);
  const banner=box(f,'Demonstration notice',inner,'soft','VERTICAL',16,0);text(banner,'Demonstration data • schematic campus layout • no live campus information',12,'Bold','teal',inner-32);
  const title=(str,desc)=>{text(f,str,mobile?30:46,'Bold','ink',inner);text(f,desc,16,'Regular','muted',inner);};
  const row=(name)=>box(f,name,inner,null,mobile?'VERTICAL':'HORIZONTAL',0,16);
  if(key==='landing') {
   title('Find your space.\nKeep your focus.','A quieter study spot. A reported free outlet. Recent observations from students, in one campus map.');
   button(f,'Explore the campus map',width+':map');
   const r=row('How it works');const cw=mobile?inner:(inner-32)/3;
   line(r,'01  Choose a zone','Browse two schematic floors and compare Quiet, Moderate, Loud and Unknown reports.',cw);
   line(r,'02  Check freshness','Noise and outlet observations expire independently after 30 minutes.',cw);
   line(r,'03  Help the next student','Report what you observe. Community reports guide choices; they do not guarantee conditions.',cw);
   line(f,'Made for campus life','For independent study, online interviews and group work. No seat reservations, indoor navigation or physical IoT sensors.',inner);
  }
  if(['map','filtered','floor2','floor2Filtered'].includes(key)) {
   title('A good place to begin.','Choose a zone to see its latest community report. The schematic is illustrative, not an approved floor plan.');
   const floor2=key==='floor2'||key==='floor2Filtered', filtered=key==='filtered'||key==='floor2Filtered';
   const controls=row('Map controls');button(controls,'Floor 1',width+':'+(filtered?'filtered':'map'),floor2?'Secondary':'Primary');button(controls,'Floor 2',width+':'+(filtered?'floor2Filtered':'floor2'),floor2?'Primary':'Secondary');button(controls,'Quiet + available outlet',width+':'+(floor2?'floor2Filtered':'filtered'),filtered?'Primary':'Secondary');
   const legend=row('Noise legend');['Quiet','Moderate','Loud','Unknown'].forEach(v=>badge(legend,v));
   if(key==='floor2Filtered') {line(f,'No matching zones on Floor 2','No current demo zone satisfies Quiet + Available. Unknown is not Quiet. Clear the filter to browse Floor 2.',inner,'unknownSoft');button(f,'Clear filters · Floor 2',width+':floor2','Secondary');}
   if(key!=='floor2Filtered') {
    const areas=key==='floor2'?[['Z06','Upper study corner','Unknown','Unknown','expired'],['Z07','Open workspace','Unknown','Unknown','expired'],['Z08','Group tables','Unknown','Unknown','expired'],['Z09','Window alcove','Unknown','Unknown','expired'],['Z10','East study nook','Unknown','Unknown','expired']]:key==='filtered'?[['Z01','North study corner','Quiet','Available','details']]:[['Z01','North study corner','Quiet','Available','details'],['Z02','Collaboration tables','Moderate','None available','report'],['Z03','Atrium study area','Loud','None available','report'],['Z04','Window workspace','Unknown','Unknown','expired'],['Z05','Corridor nook','Quiet','None available','report']];
    text(f,key==='filtered'?'1 zone matches Quiet + Available':key==='floor2'?'Floor 2 · schematic zone map':'Floor 1 · schematic zone map',20,'Bold','ink',inner);
    for(let j=0;j<areas.length;j+=mobile?1:3){if(j>0){const corridor=box(f,'Schematic circulation corridor',inner,'line','HORIZONTAL',12,0);text(corridor,'SHARED CORRIDOR  /  illustrative circulation',12,'Bold','muted',inner-24);}const r=row('Schematic area row');for(const z of areas.slice(j,j+(mobile?1:3))){const cw=mobile?inner:(inner-32)/3;const c=box(r,z[0]+' '+z[1],cw,z[2]==='Unknown'?'unknownSoft':'white');text(c,z[0],12,'Bold','muted');text(c,z[1],20,'Bold','ink',cw-48);badge(c,z[2]);text(c,'Outlets: '+z[3],14,'Regular','ink',cw-48);text(c,z[2]==='Unknown'?'No fresh report':'Demo report · 8 min ago',12,'Regular','muted',cw-48);button(c,z[0]==='Z01'?'View zone':z[4]==='expired'?'Open expiry demo (Z01)':'Open report demo (Z01)',width+':'+z[4],'Secondary');}}
   }
   if(key!=='floor2Filtered')text(f,'Illustrative campus zones and example observations; no live data.',12,'Regular','muted',inner);button(f,'Open Z01 example report',width+':report');
  }
  if(['details','updated'].includes(key)){
   const updated=key==='updated';title(updated?'Z01 · Your example report':'Z01 · North study corner','Floor 1 • schematic study zone • community observations');
   const r=row('Independent observations'),cw=mobile?inner:(inner-16)/2;
   const a=box(r,'Noise observation',cw);text(a,'NOISE',12,'Bold','muted');badge(a,updated?'Moderate':'Quiet');text(a,updated?'Observed 14:20 · expires 14:50':'Observed 14:12 · expires 14:42',14,'Regular','muted',cw-48);
   const b=box(r,'Outlet observation',cw);text(b,'OUTLETS',12,'Bold','muted');text(b,updated?'None available':'Available',28,'Bold','ink',cw-48);text(b,updated?'Observed 14:20 · expires 14:50':'Observed 14:15 · expires 14:45',14,'Regular','muted',cw-48);
   line(f,'What this report means',updated?'Example comment: Conversation is getting louder and all outlets are occupied. Simulated submission; no campus report was sent.':'Example comment: Quiet individual study; a free outlet was reported. Reports may change before you arrive.',inner);
   button(f,'Update this zone',width+':report');button(f,updated?'Open separate expiry scenario':'See 30-minute expiry example',width+':expired','Secondary');
  }
  if(key==='report'){
   title('Share what you notice.','A quick observation helps another student choose a study space. This walkthrough submits only a simulated example.');
   line(f,'Location','Floor 1  /  Z01 North study corner',inner);
   const r=row('Report categories'),cw=mobile?inner:(inner-16)/2;
   line(r,'Noise · Moderate selected','Quiet · Moderate · Loud\nExample: nearby conversation is audible.',cw,'amberSoft');
   line(r,'Outlets · None available selected','Available · None available · Unknown\nExample: all visible outlets are occupied.',cw);
   line(f,'Example comment','Conversation is getting louder and all outlets are occupied.',inner);
   text(f,'Category choices are preset for this prototype walkthrough. No real personal information or audio is collected.',12,'Regular','muted',inner);
   button(f,'Submit example report',width+':verification');button(f,'Preview optional 3-second estimate',width+':sampling','Secondary');button(f,'Preview blocked submission',width+':blocked','Secondary');
  }
  if(key==='verification'){
   title('Example report accepted.','Simulation only: no real campus-network verification or submission has occurred.');
   line(f,'Receipt DEMO-001','Z01 North study corner\nNoise: Moderate · Outlets: None available\nDemo time: 14:20 · expires at 14:50',inner,'soft');
   line(f,'Eligibility is not accuracy','A future campus eligibility check would limit who can contribute. It would not confirm a person’s exact zone or prove a report true.',inner);
   button(f,'View updated example zone',width+':updated');button(f,'Explore proposed rewards',width+':rewards','Secondary');
  }
  if(key==='blocked'){
   title('Unable to submit this example.','Simulated blocked state. The prototype does not inspect your network.');
   line(f,'Campus eligibility could not be confirmed','In a future implementation, use an approved campus network and retry. Your manual report remains available; browsing stays open.',inner,'redSoft');
   line(f,'Other errors to explain','Invalid category: select one of the listed values.\nRate limit: wait before sending another update.\nDuplicate request: show the existing receipt, not a second report.',inner);
   button(f,'Return to manual report',width+':report');button(f,'Browse the map',width+':map','Secondary');
  }
  if(['rewards','rewardsApproved','rewardsRejected'].includes(key)){
   title('A little help.\nA better campus.','Proposed Social GPA rewards — simulated and subject to university approval.');
   line(f,'No academic credit is awarded','This screen explores recognition for useful contributions. No university policy, reward rate or eligibility decision has been approved.',inner,'amberSoft');
   const rewardText=key==='rewards'?'PENDING — Example report awaits verification.':key==='rewardsApproved'?'APPROVED — The example report is verified.':'REJECTED — Duplicate or unverified example; no reward.';
   line(f,'Your demonstration activity',rewardText+'\nSimulated reward, subject to university approval. No real Social GPA credit is awarded.',inner);
   line(f,'A proposal to discuss','Recognize useful reporting without encouraging spam. University staff would need to approve eligibility, limits, moderation and any relationship to Social GPA.',inner);
   button(f,'Contribute an example report',width+':report');
   const nextReward=key==='rewards'?['Approved','rewardsApproved']:key==='rewardsApproved'?['Rejected','rewardsRejected']:['Pending','rewards'];
   button(f,'Next example: '+nextReward[0],width+':'+nextReward[1],'Secondary');
  }
  if(key==='analytics'){
   title('Listen to campus needs.','Administrative campus insights • entirely demonstration data • no measured findings.');
   const r=row('Summary metrics'),cw=mobile?inner:(inner-32)/3;line(r,'24','Synthetic reports in illustrative dataset',cw);line(r,'9','Synthetic reports of no available outlets',cw);line(r,'6','Synthetic Loud reports',cw);
   line(f,'Illustrative improvement signals','Atrium: 6 Loud reports → investigate study-space separation.\nCollaboration area: 5 no-outlet reports → review outlet access.\nWindow workspace: sparse reports → seek more observations.',inner);
   const chart=box(f,'Demonstration report distribution',inner);text(chart,'Noise categories · synthetic count',20,'Bold','ink',inner-48);for(const [name,count]of [['Quiet',8],['Moderate',6],['Loud',6],['Unknown',4]]){text(chart,name+'  '+count+' / 24',14,'Bold','ink',inner-48);const bar=box(chart,name+' bar',Math.max(40,(inner-48)*count/8),name==='Quiet'?'soft':name==='Loud'?'redSoft':name==='Moderate'?'amberSoft':'unknownSoft','HORIZONTAL',8,0);}
   text(f,'Patterns suggest questions for review, not conclusions about actual campus conditions or students.',12,'Regular','muted',inner);
   button(f,'Explore example zones',width+':map');
  }
  if(key==='expired'){
   title('This observation has expired.','At exactly 30 minutes, the expired field becomes Unknown and stops qualifying for filters.');
   const r=row('Independent field expiry'),cw=mobile?inner:(inner-16)/2;const a=line(r,'Noise · Unknown','Observed 14:12\nDemo now 14:42:00\nAge 30:00 · expired',cw,'unknownSoft');const b=line(r,'Outlets · Available','Observed 14:15\nDemo now 14:42:00\nAge 27:00 · fresh until 14:45',cw,'soft');
   line(f,'Freshness is tracked separately','This zone is excluded from Quiet + Available because its noise is Unknown. An outlet report never becomes fresh just because noise is updated.',inner);
   text(f,'Boundary comparison: at 14:41:59 (age 29:59), the noise report is fresh. At 14:42:00 (age 30:00), it is Unknown.',12,'Regular','muted',inner);
   button(f,'Add a fresh example report',width+':report');button(f,'Restart demo · fresh zones',width+':filtered','Secondary');
  }
  if(key==='sampling'){
   title('An estimate, only with consent.','Optional three-second sampling concept. No microphone is activated in this prototype.');
   line(f,'Before sampling','A future browser implementation would request permission after an explicit action, process locally for three seconds and stop every microphone track. No audio file or upload.',inner);
   line(f,'Uncalibrated estimate','Moderate — illustrative result, not measured dB SPL. Confirm manually before reporting. Device comparison and privacy testing remain unperformed.',inner,'amberSoft');
   button(f,'Confirm category · continue manually',width+':report');button(f,'Deny or cancel · manual fallback',width+':report','Secondary');
  }
  const footer=box(f,'Footer',inner,null,'VERTICAL',0,8);text(footer,'SilentBeacon NoiseMap · Astana IT University',12,'Bold','muted',inner);text(footer,'Academic prototype • prepared 29 October 2026 • defense 13 November 2026',11,'Regular','muted',inner);button(footer,'Home',width+':landing','Secondary');
 }
}
let interactionCount=0;
for(const link of links){const dest=frames[link.target];if(!dest)throw new Error('Missing prototype target '+link.target);let root=link.node;while(root.parent&&root.parent.type!=='PAGE')root=root.parent;if(root.id===dest.id)continue;await link.node.setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId:dest.id,navigation:'NAVIGATE',transition:null,resetScrollPosition:true}]}]);mutatedNodeIds.push(link.node.id);interactionCount++;}
const flows=Object.entries(frames).filter(([key])=>key.endsWith(':landing')).map(([key,n])=>({nodeId:n.id,name:key.startsWith('360')?'Responsive web · 360px':'Desktop web · 1280px'}));
page.flowStartingPoints=[...page.flowStartingPoints.filter(f=>!flows.some(n=>n.nodeId===f.nodeId)),...flows];mutatedNodeIds.push(page.id);
// Arrange only screens created by this build; never move unrelated page content.
const allScreens=Object.values(frames);
let nextY=0;
for(const width of [1280,360]){const group=allScreens.filter(f=>f.width===width);let y=nextY;for(let i=0;i<group.length;i+=4){const row=group.slice(i,i+4);row.forEach((f,j)=>{f.x=200+j*(width+100);f.y=y;mutatedNodeIds.push(f.id);});y+=Math.max(...row.map(f=>f.height))+160;}nextY=y+300;}
page.name='SilentBeacon Web Prototype';
return {createdNodeIds,mutatedNodeIds,frames:Object.fromEntries(Object.entries(frames).map(([key,n])=>[key,{id:n.id,name:n.name,width:n.width,height:n.height}])),interactionCount,components:Object.fromEntries(Object.entries(components).map(([k,n])=>[k,n.id])),tokenCount:Object.keys(tokens).length};

