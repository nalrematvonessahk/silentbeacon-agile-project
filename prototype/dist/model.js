(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.SBModel=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const TTL=45*60*1000;
  const initial=[
    ['Z01','North study corner',1,'Quiet','Available',8,5,'Individual study'],
    ['Z02','Collaboration tables',1,'Moderate','None available',12,10,'Group work'],
    ['Z03','Atrium study area',1,'Loud','None available',6,15,'Open atrium'],
    ['Z04','Window workspace',1,'Unknown','Unknown',null,null,'Individual study'],
    ['Z05','Corridor nook',1,'Quiet','None available',24,18,'Open workspace'],
    ['Z06','Upper study corner',2,'Quiet','Available',20,32,'Individual study'],
    ['Z07','Open workspace',2,'Moderate','Available',22,17,'Open workspace'],
    ['Z08','Group tables',2,'Loud','None available',4,7,'Group work'],
    ['Z09','Window alcove',2,'Unknown','Available',null,9,'Individual study'],
    ['Z10','East study nook',2,'Quiet','Unknown',15,null,'Individual study']
  ];
  function createZones(now){return initial.map(([id,name,floor,noise,outlet,noiseAge,outletAge,type])=>({id,name,floor,type,noise:{value:noise,at:noiseAge===null?null:now-noiseAge*60000},outlet:{value:outlet,at:outletAge===null?null:now-outletAge*60000}}));}
  function observation(field,now){const future=field.at!==null&&field.at>now;const age=field.at===null||future?null:now-field.at;const expired=age!==null&&age>=TTL;return {value:expired||future?'Unknown':field.value,age,expired,future};}
  function status(zone,now){return {noise:observation(zone.noise,now),outlet:observation(zone.outlet,now)};}
  function matches(zone,now,filters){const s=status(zone,now);return (!filters.quiet||s.noise.value==='Quiet')&&(!filters.power||s.outlet.value==='Available');}
  function submit(zone,noise,outlet,now){if(!['Quiet','Moderate','Loud'].includes(noise)||!['Available','None available','Unknown'].includes(outlet))throw new Error('Choose valid noise and outlet categories.');zone.noise={value:noise,at:now};zone.outlet={value:outlet,at:now};}
  return {TTL,createZones,observation,status,matches,submit};
});
