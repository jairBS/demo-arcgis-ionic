"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4784],{33087:(G,C,m)=>{m.d(C,{q:()=>T});var O=m(60611);class T{constructor(P,I){this._storage=new O.F,this.id="",this.name="",this.size=0,this._storage.maxSize=P,this._storage.register(this),I&&this._storage.registerRemoveFunc("",I)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(P,I,j=1){this._storage.put(this,P,I,j,1)}pop(P){return this._storage.pop(this,P)}get(P){return this._storage.get(this,P)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(P){this._storage.maxSize=P}resetHitRate(){}}},60611:(G,C,m)=>{m.d(C,{F:()=>j,Mn:()=>I});var P,S,O=m(12438);(S=P||(P={}))[S.ALL=0]="ALL",S[S.SOME=1]="SOME";class I{constructor(s,e,r){this.name=s,this._storage=e,this.id=x+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),r&&(this._storage.registerRemoveFunc(this.id,r),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(s){return this._storage.getSize(this,s)}resetHitRate(){this._hit=this._miss=0}put(s,e,r,h=0){this._storage.put(this,s,e,r,h)}pop(s){const e=this._storage.pop(this,s);return void 0===e?++this._miss:++this._hit,e}get(s){const e=this._storage.get(this,s);return void 0===e?++this._miss:++this._hit,e}peek(s){return this._storage.peek(this,s)}updateSize(s,e,r){this._storage.updateSize(this,s,e,r)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class j{get size(){return this._size}constructor(s=10485760){this._maxSize=s,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new O.A,this._users=new O.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(s){this._users.push(s)}deregister(s){this._users.removeUnordered(s)}registerRemoveFunc(s,e){this._removeFuncs.push([s,e])}deregisterRemoveFunc(s){this._removeFuncs.filterInPlace(e=>e[0]!==s)}get maxSize(){return this._maxSize}set maxSize(s){this._maxSize=Math.max(s,-1),this._checkSize()}getSize(s,e){var r;const h=this._db.get(s.id+e);return null!==(r=null==h?void 0:h.size)&&void 0!==r?r:0}put(s,e,r,h,g){const u=this._db.get(e=s.id+e);if(u&&(this._size-=u.size,s.size-=u.size,this._db.delete(e),u.entry!==r&&this._notifyRemove(e,u.entry,u.size,P.ALL)),h>this._maxSize)return void this._notifyRemove(e,r,h,P.ALL);if(void 0===r)return void console.warn("Refusing to cache undefined entry ");if(!h||h<0)return console.warn(`Refusing to cache entry with size ${h} for key ${e}`),void this._notifyRemove(e,r,0,P.ALL);const M=1+Math.max(g,-4)- -3;this._db.set(e,new F(r,h,M)),this._size+=h,s.size+=h,this._checkSize()}updateSize(s,e,r,h){const g=this._db.get(e=s.id+e);if(g&&g.entry===r){for(this._size-=g.size,s.size-=g.size;h>this._maxSize;){const u=this._notifyRemove(e,r,h,P.SOME);if(!(null!=u&&u>0))return void this._db.delete(e);h=u}g.size=h,this._size+=h,s.size+=h,this._checkSize()}}pop(s,e){const r=this._db.get(e=s.id+e);if(r)return this._size-=r.size,s.size-=r.size,this._db.delete(e),++this._hit,r.entry;++this._miss}get(s,e){const r=this._db.get(e=s.id+e);if(void 0!==r)return this._db.delete(e),r.lives=r.lifetime,this._db.set(e,r),++this._hit,r.entry;++this._miss}peek(s,e){const r=this._db.get(s.id+e);return r?++this._hit:++this._miss,null==r?void 0:r.entry}get performanceInfo(){const s={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},r=new Array;this._db.forEach((u,M)=>{const A=u.lifetime;r[A]=(r[A]||0)+u.size,this._users.forAll(z=>{const{id:R,name:l}=z;M.startsWith(R)&&(e[l]=(e[l]||0)+u.size)})});const h={};this._users.forAll(u=>{const M=u.name;"hitRate"in u&&"number"==typeof u.hitRate&&!isNaN(u.hitRate)&&u.hitRate>0?(e[M]=e[M]||0,h[M]=Math.round(100*u.hitRate)+"%"):h[M]="0%"});const g=Object.keys(e);g.sort((u,M)=>e[M]-e[u]),g.forEach(u=>s[u]=Math.round(e[u]/2**20)+"MB / "+h[u]);for(let u=r.length-1;u>=0;--u){const M=r[u];M&&(s["Priority "+(u+-3-1)]=Math.round(M/this._size*100)+"%")}return s}resetStats(){this._hit=this._miss=0,this._users.forAll(s=>s.resetHitRate())}clear(s){const e=s.id;this._db.forEach((r,h)=>{h.startsWith(e)&&(this._size-=r.size,this._db.delete(h),this._notifyRemove(h,r.entry,r.size,P.ALL))}),s.size=0}clearAll(){this._db.forEach((s,e)=>this._notifyRemove(e,s.entry,s.size,P.ALL)),this._users.forAll(s=>s.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(s,e,r,h){let g;return this._removeFuncs.some(u=>{if(s.startsWith(u[0])){const M=u[1](e,h,r);return"number"==typeof M&&(g=M),!0}return!1}),g}_checkSize(){this._users.forAll(s=>this._checkSizeLimits(s)),this._checkSizeLimits()}_checkSizeLimits(s){const e=null!=s?s:this;if(e.maxSize<0||e.size<=e.maxSize)return;const r=null==s?void 0:s.id;let h=!0;for(;h;){h=!1;for(const[g,u]of this._db)if(0===u.lifetime&&(!r||g.startsWith(r))){if(this._purgeItem(g,u,s),e.size<=.9*e.maxSize)return;h||(h=this._db.has(g))}}for(const[g,u]of this._db)if((!r||g.startsWith(r))&&(this._purgeItem(g,u,s),e.size<=.9*e.maxSize))return}_purgeItem(s,e,r=this._users.find(h=>s.startsWith(h.id))){if(this._db.delete(s),e.lives<=1){this._size-=e.size,r&&(r.size-=e.size);const h=this._notifyRemove(s,e.entry,e.size,P.SOME);null!=h&&h>0&&(this._size+=h,r&&(r.size+=h),e.lives=e.lifetime,e.size=h,this._db.set(s,e))}else--e.lives,this._db.set(s,e)}}let x=0;class F{constructor(s,e,r){this.entry=s,this.size=e,this.lifetime=r,this.lives=r}}},70264:(G,C,m)=>{m.d(C,{Jy:()=>M,Ox:()=>u,Qm:()=>v,Sp:()=>l,_4:()=>g});var O=m(10467),T=m(23098),U=m(77469),P=m(92165),I=m(89563),j=m(77806),x=m(45272),F=m(32034),S=m(2296),s=m(83065),e=m(85718),r=m(93327);const h={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function g(t){var o;const i=t.folders||[],a=i.slice(),f=new Map,p=new Map,n=new Map,d=new Map,c=new Map,E={esriGeometryPoint:p,esriGeometryPolyline:n,esriGeometryPolygon:d};((null===(o=t.featureCollection)||void 0===o?void 0:o.layers)||[]).forEach(_=>{const B=(0,j.o8)(_);B.featureSet.features=[];const L=_.featureSet.geometryType;f.set(L,B);const W=_.layerDefinition.objectIdField;"esriGeometryPoint"===L?A(p,W,_.featureSet.features):"esriGeometryPolyline"===L?A(n,W,_.featureSet.features):"esriGeometryPolygon"===L&&A(d,W,_.featureSet.features)}),t.groundOverlays&&t.groundOverlays.forEach(_=>{c.set(_.id,_)}),i.forEach(_=>{_.networkLinkIds.forEach(B=>{const L=function R(t,o,i){const a=function z(t,o){let i;return o.some(a=>a.id===t&&(i=a,!0)),i}(t,i);return a&&(a.parentFolderId=o,a.networkLink=a),a}(B,_.id,t.networkLinks);L&&a.push(L)})}),a.forEach(_=>{if(_.featureInfos){_.points=(0,j.o8)(f.get("esriGeometryPoint")),_.polylines=(0,j.o8)(f.get("esriGeometryPolyline")),_.polygons=(0,j.o8)(f.get("esriGeometryPolygon")),_.mapImages=[];for(const L of _.featureInfos)switch(L.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{var B;const W=E[L.type].get(L.id);W&&(null===(B=_[h[L.type]])||void 0===B||B.featureSet.features.push(W));break}case"GroundOverlay":{const W=c.get(L.id);W&&_.mapImages.push(W);break}}_.fullExtent=v([_])}});const D=v(a);return{folders:i,sublayers:a,extent:D}}function u(t,o,i,a){const f=null==U.id?void 0:U.id.findCredential(t);return t=(0,x.a6)(t,{token:null==f?void 0:f.token}),(0,I.A)(T.A.kmlServiceUrl,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(o)},responseType:"json",signal:a})}function M(t,o,i=null,a=[]){const f=[],p={},n=o.sublayers,d=new Set(o.folders.map(c=>c.id));return n.forEach(c=>{const E=new t;if(i?E.read(c,i):E.read(c),a.length&&d.has(E.id)&&(E.visible=a.includes(E.id)),p[c.id]=E,null!=c.parentFolderId&&-1!==c.parentFolderId){var D;const _=p[c.parentFolderId];_.sublayers||(_.sublayers=[]),null===(D=_.sublayers)||void 0===D||D.unshift(E)}else f.unshift(E)}),f}function A(t,o,i){i.forEach(a=>{t.set(a.attributes[o],a)})}function l(t){return y.apply(this,arguments)}function y(){return(y=(0,O.A)(function*(t){const o=r.A.fromJSON(t.featureSet).features,a=(0,e.r)(t.layerDefinition.drawingInfo.renderer),f=P.A.fromJSON(t.popupInfo),p=[];for(const n of o){const d=yield a.getSymbolAsync(n);n.symbol=d,n.popupTemplate=f,n.visible=!0,p.push(n)}return p})).apply(this,arguments)}function v(t){const o=(0,S.vt)(S.qv),i=(0,S.vt)(S.qv);for(const n of t){var a,f,p;if(null!==(a=n.polygons)&&void 0!==a&&null!==(a=a.featureSet)&&void 0!==a&&a.features)for(const d of n.polygons.featureSet.features)(0,s.LJ)(o,d.geometry),(0,S.RF)(i,o);if(null!==(f=n.polylines)&&void 0!==f&&null!==(f=f.featureSet)&&void 0!==f&&f.features)for(const d of n.polylines.featureSet.features)(0,s.LJ)(o,d.geometry),(0,S.RF)(i,o);if(null!==(p=n.points)&&void 0!==p&&null!==(p=p.featureSet)&&void 0!==p&&p.features)for(const d of n.points.featureSet.features)(0,s.LJ)(o,d.geometry),(0,S.RF)(i,o);if(n.mapImages)for(const d of n.mapImages)(0,s.LJ)(o,d.extent),(0,S.RF)(i,o)}return(0,S.aI)(i,S.qv)?void 0:{xmin:i[0],ymin:i[1],zmin:i[2],xmax:i[3],ymax:i[4],zmax:i[5],spatialReference:F.A.WGS84}}},78592:(G,C,m)=>{m.d(C,{O3:()=>S,PU:()=>x,YW:()=>e,ex:()=>I,hv:()=>s,zp:()=>j});var O=m(69287),T=m(67685),U=m(53781),P=m(89141);const I=2.4;function j(r){return(0,T.PN)(r*I)}function x(r){return(0,T.Lz)(r)/I}function F(r,h,g,u){let{color:M,ratio:A}=h,{color:z,ratio:R}=g;R===A&&(1===R?A-=1e-6:R+=1e-6);const l=(0,O.qE)((u-A)/(R-A),0,1);(0,U.l)(r,M.toArray(),z.toArray(),l)}function S(r){const g=new Uint8ClampedArray(2048);if((r=r.filter(({ratio:R})=>R>=0&&R<=1).sort((R,l)=>R.ratio-l.ratio).map(({color:R,ratio:l})=>({color:R,ratio:Math.max(l,.001)}))).length<1)return g;let u=r[0],M=r[0],A=1;const z=(0,P.vt)();for(let R=0;R<512;R++){const l=(R+.5)/512;for(;l>M.ratio&&A<r.length;)u=M,M=r[A++];F(z,u,M,l),g.set(z,4*R)}return g}function s(r,h,g){const u=Math.sqrt(r**2+h**2)/g;return u>1?0:3/(Math.PI*g**2)*(1-u**2)**2}function e(r){return"function"==typeof r?r:r?h=>+h[r]:()=>1}},93327:(G,C,m)=>{m.d(C,{A:()=>R});var M,O=m(8189),T=m(21152),U=m(81098),P=m(49976),I=m(71065),j=m(77806),x=m(85211),s=(m(3248),m(35150),m(17221)),e=m(76576),r=m(50305),h=m(32034),g=m(61320),u=m(29141);const A=new P.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let z=M=class extends I.oY{constructor(l){super(l),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(l,y){const v=h.A.fromJSON(y.spatialReference),t=[];for(let i=0;i<l.length;i++){var o;const a=l[i],f=U.A.fromJSON(a),p=null===(o=a.geometry)||void 0===o?void 0:o.spatialReference;null==f.geometry||p||(f.geometry.spatialReference=v);const n=a.aggregateGeometries,d=f.aggregateGeometries;if(n&&null!=d)for(const c in d){const E=d[c],D=n[c];null==E||(null==D?void 0:D.spatialReference)||(E.spatialReference=v)}t.push(f)}return t}writeGeometryType(l,y,v,t){if(l)return void A.write(l,y,v,t);const{features:o}=this;if(o)for(const i of o)if(null!=(null==i?void 0:i.geometry))return void A.write(i.geometry.type,y,v,t)}readQueryGeometry(l,y){if(!l)return null;const v=!!l.spatialReference,t=(0,g.rS)(l);return t&&!v&&y.spatialReference&&(t.spatialReference=h.A.fromJSON(y.spatialReference)),t}writeSpatialReference(l,y){if(l)return void(y.spatialReference=l.toJSON());const{features:v}=this;if(v)for(const t of v)if(t&&null!=t.geometry&&t.geometry.spatialReference)return void(y.spatialReference=t.geometry.spatialReference.toJSON())}clone(){return new M(this.cloneProperties())}cloneProperties(){return(0,j.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(l){const y=this.write();if(y.features&&Array.isArray(l)&&l.length>0)for(let v=0;v<y.features.length;v++){const t=y.features[v];if(t.geometry){const o=null==l?void 0:l[v];t.geometry=(null==o?void 0:o.toJSON())||t.geometry}}return y}quantize(l){const{scale:[y,v],translate:[t,o]}=l,f=this.features,p=this._getQuantizationFunction(this.geometryType,n=>Math.round((n-t)/y),n=>Math.round((o-n)/v));for(let n=0,d=f.length;n<d;n++)null!=p&&p(f[n].geometry)||(f.splice(n,1),n--,d--);return this.transform=l,this}unquantize(){var l,y;const{geometryType:v,features:t,transform:o}=this;if(!o)return this;const{translate:[i,a],scale:[f,p]}=o;let c=null,E=null;if(this.hasZ&&null!=(null==o||null===(l=o.scale)||void 0===l?void 0:l[2])){const{translate:[,,_],scale:[,,B]}=o;c=L=>L*B+_}if(this.hasM&&null!=(null==o||null===(y=o.scale)||void 0===y?void 0:y[3])){const{translate:[,,,_],scale:[,,,B]}=o;E=L=>null==L?L:L*B+_}const D=this._getHydrationFunction(v,_=>_*f+i,_=>a-_*p,c,E);for(const{geometry:_}of t)null!=_&&D&&D(_);return this.transform=null,this}_quantizePoints(l,y,v){let t,o;const i=[];for(let a=0,f=l.length;a<f;a++){const p=l[a];if(a>0){const n=y(p[0]),d=v(p[1]);n===t&&d===o||(i.push([n-t,d-o]),t=n,o=d)}else t=y(p[0]),o=v(p[1]),i.push([t,o])}return i.length>0?i:null}_getQuantizationFunction(l,y,v){return"point"===l?t=>(t.x=y(t.x),t.y=v(t.y),t):"polyline"===l||"polygon"===l?t=>{const o=(0,g.Bi)(t)?t.rings:t.paths,i=[];for(let a=0,f=o.length;a<f;a++){const n=this._quantizePoints(o[a],y,v);n&&i.push(n)}return i.length>0?((0,g.Bi)(t)?t.rings=i:t.paths=i,t):null}:"multipoint"===l?t=>{const o=this._quantizePoints(t.points,y,v);return o&&o.length>0?(t.points=o,t):null}:"extent"===l?t=>t:null}_getHydrationFunction(l,y,v,t,o){return"point"===l?i=>{i.x=y(i.x),i.y=v(i.y),t&&(i.z=t(i.z))}:"polyline"===l||"polygon"===l?i=>{const a=(0,g.Bi)(i)?i.rings:i.paths;let f,p;for(let n=0,d=a.length;n<d;n++){const c=a[n];for(let E=0,D=c.length;E<D;E++){const _=c[E];E>0?(f+=_[0],p+=_[1]):(f=_[0],p=_[1]),_[0]=y(f),_[1]=v(p)}}if(t&&o)for(let n=0,d=a.length;n<d;n++){const c=a[n];for(let E=0,D=c.length;E<D;E++){const _=c[E];_[2]=t(_[2]),_[3]=o(_[3])}}else if(t)for(let n=0,d=a.length;n<d;n++){const c=a[n];for(let E=0,D=c.length;E<D;E++){const _=c[E];_[2]=t(_[2])}}else if(o)for(let n=0,d=a.length;n<d;n++){const c=a[n];for(let E=0,D=c.length;E<D;E++){const _=c[E];_[2]=o(_[2])}}}:"extent"===l?i=>{i.xmin=y(i.xmin),i.ymin=v(i.ymin),i.xmax=y(i.xmax),i.ymax=v(i.ymax),t&&null!=i.zmax&&null!=i.zmin&&(i.zmax=t(i.zmax),i.zmin=t(i.zmin)),o&&null!=i.mmax&&null!=i.mmin&&(i.mmax=o(i.mmax),i.mmin=o(i.mmin))}:"multipoint"===l?i=>{const a=i.points;let f,p;for(let n=0,d=a.length;n<d;n++){const c=a[n];n>0?(f+=c[0],p+=c[1]):(f=c[0],p=c[1]),c[0]=y(f),c[1]=v(p)}if(t&&o)for(let n=0,d=a.length;n<d;n++){const c=a[n];c[2]=t(c[2]),c[3]=o(c[3])}else if(t)for(let n=0,d=a.length;n<d;n++){const c=a[n];c[2]=t(c[2])}else if(o)for(let n=0,d=a.length;n<d;n++){const c=a[n];c[2]=o(c[2])}}:null}};(0,O._)([(0,x.MZ)({type:String,json:{write:!0}})],z.prototype,"displayFieldName",void 0),(0,O._)([(0,x.MZ)({type:Boolean,json:{write:{overridePolicy:l=>({enabled:l})}}})],z.prototype,"exceededTransferLimit",void 0),(0,O._)([(0,x.MZ)({type:[U.A],json:{write:!0}})],z.prototype,"features",void 0),(0,O._)([(0,s.w)("features")],z.prototype,"readFeatures",null),(0,O._)([(0,x.MZ)({type:[u.A],json:{write:!0}})],z.prototype,"fields",void 0),(0,O._)([(0,x.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:A.read}}})],z.prototype,"geometryType",void 0),(0,O._)([(0,r.K)("geometryType")],z.prototype,"writeGeometryType",null),(0,O._)([(0,x.MZ)({type:Boolean,json:{write:{overridePolicy:l=>({enabled:l})}}})],z.prototype,"hasM",void 0),(0,O._)([(0,x.MZ)({type:Boolean,json:{write:{overridePolicy:l=>({enabled:l})}}})],z.prototype,"hasZ",void 0),(0,O._)([(0,x.MZ)({types:T.yR,json:{write:!0}})],z.prototype,"queryGeometry",void 0),(0,O._)([(0,s.w)("queryGeometry")],z.prototype,"readQueryGeometry",null),(0,O._)([(0,x.MZ)({type:h.A,json:{write:!0}})],z.prototype,"spatialReference",void 0),(0,O._)([(0,r.K)("spatialReference")],z.prototype,"writeSpatialReference",null),(0,O._)([(0,x.MZ)({json:{write:!0}})],z.prototype,"transform",void 0),z=M=(0,O._)([(0,e.$)("esri.rest.support.FeatureSet")],z),z.prototype.toJSON.isDefaultToJSON=!0;const R=z}}]);