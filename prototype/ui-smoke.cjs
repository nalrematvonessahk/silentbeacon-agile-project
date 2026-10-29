const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const model=require('./dist/model.js');
const main={innerHTML:'',focus(){}},announce={textContent:''},error={textContent:''},events={},windowEvents={};
const doc={title:'',querySelector(s){return s==='#content'?main:s==='#announce'?announce:s==='#form-error'?error:null;},addEventListener(type,cb){events[type]=cb;}};
const loc={hash:''},win={SBModel:model,addEventListener(type,cb){windowEvents[type]=cb;},scrollTo(){}};
class FormDataStub{constructor(form){this.data=form.entries;}get(key){return this.data[key];}}
const ctx={document:doc,window:win,location:loc,FormData:FormDataStub,Intl,Date,console};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'dist','app.js'),'utf8'),ctx);
function go(hash){loc.hash=hash;windowEvents.hashchange();}
function click(data){events.click({target:{closest(){return {dataset:data};}}});}
assert.match(main.innerHTML,/Find your space/);
go('#map');click({floor:'2'});assert.match(main.innerHTML,/href="#zone\/Z10"/);
go('#report/Z10');let prevented=false;
events.submit({target:{id:'report-form',entries:{zone:'Z10',noise:'Loud',outlet:'None available'}},preventDefault(){prevented=true;}});
assert.equal(prevented,true);assert.equal(loc.hash,'verification');windowEvents.hashchange();
assert.match(main.innerHTML,/East study nook/);assert.match(main.innerHTML,/Loud/);
go('#expired/Z01');click({action:'boundary'});assert.match(main.innerHTML,/44m 59s ago/);
click({action:'plus1'});assert.match(main.innerHTML,/Expired · 45m 00s ago/);
assert.match(main.innerHTML,/<div class="value">Unknown<\/div>/);
assert.match(main.innerHTML,/<div class="value">Available<\/div>/);
go('#map');events.change({target:{id:'quiet',checked:true}});events.change({target:{id:'power',checked:true}});
click({action:'advance45'});assert.match(main.innerHTML,/No matching zones/);
console.log('PASS: simulated navigation, Z10 report, 44:59/45:00 independent expiry, and empty filter state (DOM stubs; not browser QA).');
