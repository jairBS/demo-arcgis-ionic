"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5931],{5931:(_,I,n)=>{n.d(I,{A:()=>h});var v=n(10467),O=n(8189),C=n(98877),F=n(5922),E=n(3248),p=n(56492),A=n(45272),g=n(85211),S=(n(35150),n(40707),n(76576)),M=n(6829),j=n(93164),T=n(68800),G=n(33063),W=(n(21152),n(1277)),V=n(87086),f=n(28067);function c(){return(c=(0,v.A)(function*(s,t,u){const m=(0,T.Dl)(s),x=yield(0,W.Jf)(m,V.A.from(t),{...u}),D=x.data.extent;return!D||isNaN(D.xmin)||isNaN(D.ymin)||isNaN(D.xmax)||isNaN(D.ymax)?{count:x.data.count,extent:null}:{count:x.data.count,extent:f.A.fromJSON(D)}})).apply(this,arguments)}var e=n(87342),r=n(34687),d=n(11170),l=n(93327);let i=class extends C.A{constructor(s){super(s),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,A.An)(this.url)}execute(s,t){var u=this;return(0,v.A)(function*(){const m=yield u.executeJSON(s,t);return u.featureSetFromJSON(s,m,t)})()}executeJSON(s,t){var u=this;return(0,v.A)(function*(){var m;const x=u._normalizeQuery(s),D=null!=(null===(m=s.outStatistics)||void 0===m?void 0:m[0]),N=(0,E.A)("featurelayer-pbf-statistics"),U=!D||N;let B;if(u.pbfSupported&&U)try{B=yield(0,d.S)(u.url,x,t)}catch(J){if("query:parsing-pbf"!==J.name)throw J;u.pbfSupported=!1}return u.pbfSupported&&U||(B=yield(0,r.e)(u.url,x,t)),u._normalizeFields(B.fields),B})()}featureSetFromJSON(s,t,u){var m=this;return(0,v.A)(function*(){if(!m._queryIs3DObjectFormat(s)||null==m.infoFor3D||!t.features)return l.A.fromJSON(t);const{meshFeatureSetFromJSON:x}=yield(0,p.qr)(Promise.all([n.e(5434),n.e(3647),n.e(9750),n.e(3051),n.e(8864),n.e(6443)]).then(n.bind(n,71698)),u);return x(s,m.infoFor3D,t)})()}executeForCount(s,t){return(0,G.I)(this.url,this._normalizeQuery(s),t)}executeForExtent(s,t){return function y(s,t,u){return c.apply(this,arguments)}(this.url,this._normalizeQuery(s),t)}executeForIds(s,t){return(0,e.V)(this.url,this._normalizeQuery(s),t)}executeRelationshipQuery(s,t){var u=this;return(0,v.A)(function*(){const[{default:m},{executeRelationshipQuery:x}]=yield(0,p.qr)(Promise.all([n.e(9487).then(n.bind(n,59487)),n.e(5345).then(n.bind(n,65345))]),t);return s=m.from(s),(u.gdbVersion||u.dynamicDataSource)&&((s=s.clone()).gdbVersion=s.gdbVersion||u.gdbVersion,s.dynamicDataSource=s.dynamicDataSource||u.dynamicDataSource),x(u.url,s,t)})()}executeRelationshipQueryForCount(s,t){var u=this;return(0,v.A)(function*(){const[{default:m},{executeRelationshipQueryForCount:x}]=yield(0,p.qr)(Promise.all([n.e(9487).then(n.bind(n,59487)),n.e(5345).then(n.bind(n,65345))]),t);return s=m.from(s),(u.gdbVersion||u.dynamicDataSource)&&((s=s.clone()).gdbVersion=s.gdbVersion||u.gdbVersion,s.dynamicDataSource=s.dynamicDataSource||u.dynamicDataSource),x(u.url,s,t)})()}executeAttachmentQuery(s,t){var u=this;return(0,v.A)(function*(){const{executeAttachmentQuery:m,fetchAttachments:x,processAttachmentQueryResult:D}=yield(0,p.qr)(n.e(3083).then(n.bind(n,43083)),t),N=(0,T.Dl)(u.url);return D(N,yield u.queryAttachmentsSupported?m(N,s,t):x(N,s,t))})()}executeTopFeaturesQuery(s,t){var u=this;return(0,v.A)(function*(){const{executeTopFeaturesQuery:m}=yield(0,p.qr)(Promise.all([n.e(2076),n.e(8041)]).then(n.bind(n,8041)),t);return m(u.parsedUrl,s,u.sourceSpatialReference,t)})()}executeForTopIds(s,t){var u=this;return(0,v.A)(function*(){const{executeForTopIds:m}=yield(0,p.qr)(Promise.all([n.e(2076),n.e(5021)]).then(n.bind(n,5021)),t);return m(u.parsedUrl,s,t)})()}executeForTopExtents(s,t){var u=this;return(0,v.A)(function*(){const{executeForTopExtents:m}=yield(0,p.qr)(Promise.all([n.e(2076),n.e(7058)]).then(n.bind(n,7058)),t);return m(u.parsedUrl,s,t)})()}executeForTopCount(s,t){var u=this;return(0,v.A)(function*(){const{executeForTopCount:m}=yield(0,p.qr)(Promise.all([n.e(2076),n.e(6436)]).then(n.bind(n,6436)),t);return m(u.parsedUrl,s,t)})()}_normalizeQuery(s){let t=V.A.from(s);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===s?t.clone():t,t.gdbVersion=s.gdbVersion||this.gdbVersion,t.dynamicDataSource=s.dynamicDataSource?j.L.from(s.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:u}=this;if(null!=u&&this._queryIs3DObjectFormat(s)){var m,x;t=t===s?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:D,queryFormats:N}=u,U=null!==(m=(0,M.R_)("model/gltf-binary",D))&&void 0!==m?m:(0,M.E1)("glb",D),B=null!==(x=(0,M.R_)("model/gltf+json",D))&&void 0!==x?x:(0,M.E1)("gltf",D);for(const J of N){if(J===U){t.formatOf3DObjects=J;break}J!==B||t.formatOf3DObjects||(t.formatOf3DObjects=J)}if(!t.formatOf3DObjects)throw new F.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==t.outFields||!t.outFields.includes("*")){t=t===s?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:J,originY:z,originZ:Q,translationX:Z,translationY:K,translationZ:$,scaleX:b,scaleY:Y,scaleZ:X,rotationX:H,rotationY:q,rotationZ:w,rotationDeg:k}=u.transformFieldRoles;t.outFields.push(J,z,Q,Z,K,$,b,Y,X,H,q,w,k)}}return t}_normalizeFields(s){if(null!=this.fieldsIndex&&null!=s)for(const t of s){const u=this.fieldsIndex.get(t.name);u&&Object.assign(t,u.toJSON())}}_queryIs3DObjectFormat(s){return null!=this.infoFor3D&&!0===s.returnGeometry&&"xyFootprint"!==s.multipatchOption&&!s.outStatistics}};(0,O._)([(0,g.MZ)({type:j.L})],i.prototype,"dynamicDataSource",void 0),(0,O._)([(0,g.MZ)()],i.prototype,"fieldsIndex",void 0),(0,O._)([(0,g.MZ)()],i.prototype,"gdbVersion",void 0),(0,O._)([(0,g.MZ)()],i.prototype,"infoFor3D",void 0),(0,O._)([(0,g.MZ)({readOnly:!0})],i.prototype,"parsedUrl",null),(0,O._)([(0,g.MZ)()],i.prototype,"pbfSupported",void 0),(0,O._)([(0,g.MZ)()],i.prototype,"queryAttachmentsSupported",void 0),(0,O._)([(0,g.MZ)()],i.prototype,"sourceSpatialReference",void 0),(0,O._)([(0,g.MZ)({type:String})],i.prototype,"url",void 0),i=(0,O._)([(0,S.$)("esri.tasks.QueryTask")],i);const h=i},6829:(_,I,n)=>{n.d(I,{E1:()=>A,Fm:()=>g,JZ:()=>V,R_:()=>p,fu:()=>O,oF:()=>C,rq:()=>R});const v=[["binary","application/octet-stream","bin",""]];function O(f,y){var c;return null!=j(y.name,null!==(c=null==f?void 0:f.supportedFormats)&&void 0!==c?c:[])}function C(f,y){var c;if(!f)return!1;const e=R(y,null!==(c=f.supportedFormats)&&void 0!==c?c:[]);return null!=e&&f.editFormats.includes(e)}function p(f,y){return T(function M(f,y){const c=f.toLowerCase();return P(y).find(e=>G(e)===c)}(f,y))}function A(f,y){return T(j(f,y))}function g(f,y){return G(function S(f,y){return P(y).find(c=>T(c)===f)}(f,y))}function R(f,y){var c;return null!==(c=A(f.name,y))&&void 0!==c?c:p(f.type,y)}function P(f){return[...v,...f]}function j(f,y){const c=f.toLowerCase();return P(y).find(e=>function L(f){var y;return null!==(y=null==f?void 0:f[2].split(",").map(c=>c.toLowerCase()))&&void 0!==y?y:[]}(e).some(r=>c.endsWith(r)))}function T(f){return null==f?void 0:f[0]}function G(f){return null==f?void 0:f[1].toLowerCase()}function V(f){var y;return null===(y=f.tables)||void 0===y?void 0:y.find(c=>"assetMaps"===c.role)}},1832:(_,I,n)=>{function v(O){const C={};for(const F in O){if("declaredClass"===F)continue;const E=O[F];if(null!=E&&"function"!=typeof E)if(Array.isArray(E)){C[F]=[];for(let p=0;p<E.length;p++)C[F][p]=v(E[p])}else"object"==typeof E?E.toJSON&&(C[F]=JSON.stringify(E)):C[F]=E}return C}n.d(I,{z:()=>v})},33063:(_,I,n)=>{n.d(I,{I:()=>E});var v=n(10467),O=n(68800),C=n(1277),F=n(87086);function E(A,g,R){return p.apply(this,arguments)}function p(){return(p=(0,v.A)(function*(A,g,R){const P=(0,O.Dl)(A);return(0,C.gW)(P,F.A.from(g),{...R}).then(S=>S.data.count)})).apply(this,arguments)}},87342:(_,I,n)=>{n.d(I,{V:()=>E});var v=n(10467),O=n(68800),C=n(1277),F=n(87086);function E(A,g,R){return p.apply(this,arguments)}function p(){return(p=(0,v.A)(function*(A,g,R){const P=(0,O.Dl)(A);return(0,C.Pk)(P,F.A.from(g),{...R}).then(S=>S.data.objectIds)})).apply(this,arguments)}},34687:(_,I,n)=>{n.d(I,{e:()=>g,s:()=>p});var v=n(10467),O=n(68800),C=n(1277),F=n(93327),E=n(87086);function p(P,S,M){return A.apply(this,arguments)}function A(){return(A=(0,v.A)(function*(P,S,M){const j=yield g(P,S,M);return F.A.fromJSON(j)})).apply(this,arguments)}function g(P,S,M){return R.apply(this,arguments)}function R(){return(R=(0,v.A)(function*(P,S,M){const j=(0,O.Dl)(P),T={...M},G=E.A.from(S),{data:L}=yield(0,C.eW)(j,G,G.sourceSpatialReference,T);return L})).apply(this,arguments)}},11170:(_,I,n)=>{n.d(I,{S:()=>f});var v=n(10467),O=n(68800),C=n(11432),F=n(23743),E=n(31732);function p(c,e){return e}function A(c,e,r,d){switch(r){case 0:return S(c,e+d,0);case 1:return"lowerLeft"===c.originPosition?S(c,e+d,1):function M({translate:c,scale:e},r,d){return c[d]-r*e[d]}(c,e+d,1)}}function g(c,e,r,d){return 2===r?S(c,e,2):A(c,e,r,d)}function R(c,e,r,d){return 2===r?0===e?0:S(c,e,3):A(c,e,r,d)}function P(c,e,r,d){return 3===r?0===e?0:S(c,e,3):g(c,e,r,d)}function S({translate:c,scale:e},r,d){return c[d]+r*e[d]}class j{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=p,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const r=(0,F.N)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=r)for(const d of e.features)r(d.geometry)}createSpatialReference(){return{}}addField(e,r){const d=e.fields;(0,C.Lw)(d),d.push(r);const l=d.map(i=>i.name);this._attributesConstructor=function(){for(const i of l)this[i]=null}}addFeature(e,r){e.features.push(r)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._mValueOffset=null,this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),e.geometryType){case"esriGeometryPoint":this.addCoordinate=(r,d,l)=>this.addCoordinatePoint(r,d,l),this.createGeometry=r=>this.createPointGeometry(r);break;case"esriGeometryPolygon":this.addCoordinate=(r,d,l)=>this._addCoordinatePolygon(r,d,l),this.createGeometry=r=>this._createPolygonGeometry(r);break;case"esriGeometryPolyline":this.addCoordinate=(r,d,l)=>this._addCoordinatePolyline(r,d,l),this.createGeometry=r=>this._createPolylineGeometry(r);break;case"esriGeometryMultipoint":this.addCoordinate=(r,d,l)=>this._addCoordinateMultipoint(r,d,l),this.createGeometry=r=>this._createMultipointGeometry(r)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,r,d){0===this._lengths.length&&(this._toAddInCurrentPath=r),this._lengths.push(r)}addQueryGeometry(e,r){const{queryGeometry:d,queryGeometryType:l}=r,i=(0,E.Ch)(d.clone(),d,!1,!1,this._transform),h=(0,E.zv)(i,l,!1,!1);e.queryGeometryType=l,e.queryGeometry={...h}}createPointGeometry(e){const r={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(r.z=0),e.hasM&&(r.m=0),r}addCoordinatePoint(e,r,d){switch(r=this._applyTransform(this._transform,r,d,0),d){case 0:e.x=r;break;case 1:e.y=r;break;case 2:"z"in e?e.z=r:e.m=r;break;case 3:e.m=r}}_transformPathLikeValue(e,r){let d=0;return r<=1&&(d=this._previousCoordinate[r],this._previousCoordinate[r]+=e),null===this._mValueOffset||0!==e||r%this._mValueOffset?this._applyTransform(this._transform,e,r,d):0}_addCoordinatePolyline(e,r,d){this._dehydratedAddPointsCoordinate(e.paths,r,d)}_addCoordinatePolygon(e,r,d){this._dehydratedAddPointsCoordinate(e.rings,r,d)}_addCoordinateMultipoint(e,r,d){0===d&&e.points.push([]);const l=this._transformPathLikeValue(r,d);e.points[e.points.length-1].push(l)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,r,d){0===d&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const l=this._transformPathLikeValue(r,d),i=e[e.length-1];0===d&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),i.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=l}_deriveApplyTransform(e){const{hasZ:r,hasM:d}=e;return r&&d?P:r?g:d?R:A}}var T=n(1277),L=(n(93327),n(87086));function f(c,e,r){return y.apply(this,arguments)}function y(){return(y=(0,v.A)(function*(c,e,r){const d=(0,O.Dl)(c),l={...r},i=L.A.from(e),h=!i.quantizationParameters,{data:s}=yield(0,T.IJ)(d,i,new j({sourceSpatialReference:i.sourceSpatialReference,applyTransform:h}),l);return s})).apply(this,arguments)}},1277:(_,I,n)=>{n.d(I,{IJ:()=>G,Jf:()=>y,Pk:()=>V,eW:()=>j,gW:()=>f,kS:()=>W});var v=n(10467),O=n(89563),C=n(45272),F=n(61320),E=n(77098),p=n(58701),A=n(1832),g=n(78304),R=n(98789);const P="Layer does not support extent calculation.";function M(l,i){var h;const s=l.geometry,t=l.toJSON();delete t.compactGeometryEnabled,delete t.defaultSpatialReferenceEnabled;const u=t;let m,x,D;if(null!=s&&(x=s.spatialReference,D=(0,p.YX)(x),u.geometryType=(0,F.$B)(s),u.geometry=function S(l,i){if(i&&"extent"===l.type)return`${l.xmin},${l.ymin},${l.xmax},${l.ymax}`;if(i&&"point"===l.type)return`${l.x},${l.y}`;const h=l.toJSON();return delete h.spatialReference,JSON.stringify(h)}(s,l.compactGeometryEnabled),u.inSR=D),t.groupByFieldsForStatistics&&(u.groupByFieldsForStatistics=t.groupByFieldsForStatistics.join(",")),t.objectIds&&(u.objectIds=t.objectIds.join(",")),t.orderByFields&&(u.orderByFields=t.orderByFields.join(",")),!t.outFields||!t.returnDistinctValues&&(null!=i&&i.returnCountOnly||null!=i&&i.returnExtentOnly||null!=i&&i.returnIdsOnly)?delete u.outFields:u.outFields=t.outFields.includes("*")?"*":t.outFields.join(","),t.outSR?(u.outSR=(0,p.YX)(t.outSR),m=l.outSpatialReference):s&&(t.returnGeometry||t.returnCentroid)&&(u.outSR=u.inSR,m=x),t.returnGeometry&&delete t.returnGeometry,t.outStatistics&&(u.outStatistics=JSON.stringify(t.outStatistics)),t.fullText&&(u.fullText=JSON.stringify(t.fullText)),t.pixelSize&&(u.pixelSize=JSON.stringify(t.pixelSize)),t.quantizationParameters&&(l.defaultSpatialReferenceEnabled&&null!=x&&null!=(null===(h=l.quantizationParameters)||void 0===h?void 0:h.extent)&&x.equals(l.quantizationParameters.extent.spatialReference)&&delete t.quantizationParameters.extent.spatialReference,u.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.parameterValues&&(u.parameterValues=JSON.stringify(t.parameterValues)),t.rangeValues&&(u.rangeValues=JSON.stringify(t.rangeValues)),t.dynamicDataSource&&(u.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t.timeExtent){const N=t.timeExtent,{start:U,end:B}=N;null==U&&null==B||(u.time=U===B?U:`${null!=U?U:"null"},${null!=B?B:"null"}`),delete t.timeExtent}return l.defaultSpatialReferenceEnabled&&null!=x&&null!=m&&x.equals(m)&&(u.defaultSR=u.inSR,delete u.inSR,delete u.outSR),u}function j(l,i,h,s){return T.apply(this,arguments)}function T(){return(T=(0,v.A)(function*(l,i,h,s){const t=null!=i.timeExtent&&i.timeExtent.isEmpty?{data:{features:[]}}:yield e(l,i,"json",s);return(0,R.q)(i,h,t.data),t})).apply(this,arguments)}function G(l,i,h,s){return L.apply(this,arguments)}function L(){return(L=(0,v.A)(function*(l,i,h,s){if(null!=i.timeExtent&&i.timeExtent.isEmpty)return{data:h.createFeatureResult()};const t=yield W(l,i,s),u=t;return u.data=(0,g.m)(t.data,h),u})).apply(this,arguments)}function W(l,i,h){return e(l,i,"pbf",h)}function V(l,i,h){return null!=i.timeExtent&&i.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):e(l,i,"json",h,{returnIdsOnly:!0})}function f(l,i,h){return null!=i.timeExtent&&i.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):e(l,i,"json",h,{returnIdsOnly:!0,returnCountOnly:!0})}function y(l,i,h){return c.apply(this,arguments)}function c(){return(c=(0,v.A)(function*(l,i,h){if(null!=i.timeExtent&&i.timeExtent.isEmpty)return{data:{count:0,extent:null}};const s=yield e(l,i,"json",h,{returnExtentOnly:!0,returnCountOnly:!0}),t=s.data;if(t.hasOwnProperty("extent"))return s;if(t.features)throw new Error(P);if(t.hasOwnProperty("count"))throw new Error(P);return s})).apply(this,arguments)}function e(l,i,h){return r.apply(this,arguments)}function r(){return(r=(0,v.A)(function*(l,i,h,s={},t={}){const u="string"==typeof l?(0,C.An)(l):l,m=i.geometry?[i.geometry]:[],x=yield(0,E.el)(m,null,{signal:s.signal}),D=null==x?void 0:x[0];null!=D&&((i=i.clone()).geometry=D);const N=(0,A.z)({...u.query,f:h,...t,...M(i,t)});return(0,O.A)((0,C.fj)(u.path,function d(l,i){return null!=l.formatOf3DObjects&&!(i.returnCountOnly||i.returnExtentOnly||i.returnIdsOnly)}(i,t)?"query3d":"query"),{...s,responseType:"pbf"===h?"array-buffer":"json",query:{...N,...s.query}})})).apply(this,arguments)}}}]);