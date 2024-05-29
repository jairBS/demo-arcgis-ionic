"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6337,9927],{66337:(Z,L,e)=>{e.r(L),e.d(L,{default:()=>G});var y=e(10467),n=e(8189),j=e(23098),O=e(89563),g=(e(47280),e(39693)),C=e(56492),D=e(45272),c=e(85211),a=(e(3248),e(35150),e(40707),e(17221)),f=e(76576),i=e(28067),s=e(58701),o=e(95478),p=e(93410),A=e(17049),W=e(85551),K=e(1151),U=e(33036),R=e(81687),S=e(84986),F=e(55417),T=e(65824),_=e(46602),l=e(88521);const t=["atom","xml"],r={base:S.A,key:"type",typeMap:{"simple-line":F.A},errorContext:"symbol"},d={base:S.A,key:"type",typeMap:{"picture-marker":T.A,"simple-marker":_.A},errorContext:"symbol"},u={base:S.A,key:"type",typeMap:{"simple-fill":l.A},errorContext:"symbol"};let h=class extends((0,p.d)((0,K.J)((0,A.q)((0,W.A)((0,U.j)((0,g.P)(o.A))))))){constructor(...m){super(...m),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(m,M){return"string"==typeof m?{url:m,...M}:m}readFeatureCollections(m,M){return M.featureCollection.layers.forEach(P=>{var x;const $=P.layerDefinition.drawingInfo.renderer.symbol;$&&"esriSFS"===$.type&&null!==(x=$.outline)&&void 0!==x&&x.style.includes("esriSFS")&&($.outline.style="esriSLSSolid")}),M.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const m=this._get("title");return m&&"defaults"!==this.originOf("title")?m:this.url?(0,D.e7)(this.url,t)||"GeoRSS":m||""}set title(m){this._set("title",m)}load(m){const M=null!=m?m.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},m).catch(C.QP).then(()=>this._fetchService(M)).then(P=>{this.read(P,{origin:"service"})})),Promise.resolve(this)}hasDataChanged(){var m=this;return(0,y.A)(function*(){const M=yield m._fetchService();return m.read(M,{origin:"service",ignoreDefaults:!0}),!0})()}_fetchService(m){var M=this;return(0,y.A)(function*(){var P;const x=M.spatialReference,{data:$}=yield(0,O.A)(j.A.geoRSSServiceUrl,{query:{url:M.url,refresh:!!M.loaded||void 0,outSR:(0,s.oT)(x)?void 0:null!==(P=x.wkid)&&void 0!==P?P:JSON.stringify(x)},signal:m});return $})()}_hasGeometry(m){var M,P;return null!==(M=null===(P=this.featureCollections)||void 0===P?void 0:P.some(x=>{var $,N;return(null===($=x.featureSet)||void 0===$?void 0:$.geometryType)===m&&(null===(N=x.featureSet.features)||void 0===N?void 0:N.length)>0}))&&void 0!==M&&M}};(0,n._)([(0,c.MZ)()],h.prototype,"description",void 0),(0,n._)([(0,c.MZ)()],h.prototype,"featureCollections",void 0),(0,n._)([(0,a.w)("service","featureCollections",["featureCollection.layers"])],h.prototype,"readFeatureCollections",null),(0,n._)([(0,c.MZ)({type:i.A,json:{name:"lookAtExtent"}})],h.prototype,"fullExtent",void 0),(0,n._)([(0,c.MZ)(R.id)],h.prototype,"id",void 0),(0,n._)([(0,c.MZ)(R.fV)],h.prototype,"legendEnabled",void 0),(0,n._)([(0,c.MZ)({types:r,json:{write:!0}})],h.prototype,"lineSymbol",void 0),(0,n._)([(0,c.MZ)({type:["show","hide"]})],h.prototype,"listMode",void 0),(0,n._)([(0,c.MZ)({types:d,json:{write:!0}})],h.prototype,"pointSymbol",void 0),(0,n._)([(0,c.MZ)({types:u,json:{write:!0}})],h.prototype,"polygonSymbol",void 0),(0,n._)([(0,c.MZ)({type:["GeoRSS"]})],h.prototype,"operationalLayerType",void 0),(0,n._)([(0,c.MZ)(R.OZ)],h.prototype,"url",void 0),(0,n._)([(0,c.MZ)({json:{origins:{service:{read:{source:"name",reader:m=>m||void 0}}}}})],h.prototype,"title",null),(0,n._)([(0,c.MZ)({readOnly:!0,json:{read:!1},value:"geo-rss"})],h.prototype,"type",void 0),h=(0,n._)([(0,f.$)("esri.layers.GeoRSSLayer")],h);const G=h},72211:(Z,L,e)=>{e.d(L,{LF:()=>B,M9:()=>g,zu:()=>E});var y=e(5922),n=e(89221),j=e(79845),O=e(26073);function B(a,f,i){try{return function D(a){if(!a||0===a.length)return null;if(function c(a){const f=a[0];return!!f&&"scale"in f}(a)){const f=[];for(const i of a)f.push({scale:i.scale,value:E(i.value)});return f}return E(a)}(a)}catch(o){var s;null==i||null===(s=i.messages)||void 0===s||s.push(o)}return null}function g(a,f,i,s){try{const o=function C(a){const f=(0,j.q)(a);return f?(0,O.dw)(f)?f.map(i=>i.toJSON()):f.map(({scale:i,effects:s})=>({scale:i,value:s.map(o=>o.toJSON())})):null}(a);(0,n.sM)(i,o,f)}catch(o){s.messages&&s.messages.push(o)}}function E(a){if(null==a||!a.length)return"";const f=[];for(const i of a){let s=[];switch(i.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":s=[v(i,"amount")];break;case"blur":s=[v(i,"radius","pt")];break;case"hue-rotate":s=[v(i,"angle","deg")];break;case"drop-shadow":s=[v(i,"xoffset","pt"),v(i,"yoffset","pt"),v(i,"blurRadius","pt"),I(i,"color")];break;case"bloom":s=[v(i,"strength"),v(i,"radius","pt"),v(i,"threshold")]}const o=`${i.type}(${s.filter(Boolean).join(" ")})`;(0,j.q)(o),f.push(o)}return f.join(" ")}function v(a,f,i){if(null==a[f])throw new y.A("effect:missing-parameter",`Missing parameter '${f}' in ${a.type} effect`,{effect:a});return i?a[f]+i:""+a[f]}function I(a,f){if(null==a[f])throw new y.A("effect:missing-parameter",`Missing parameter '${f}' in ${a.type} effect`,{effect:a});const i=a[f];return`rgba(${i[0]||0}, ${i[1]||0}, ${i[2]||0}, ${i[3]/255||0})`}},93410:(Z,L,e)=>{e.d(L,{d:()=>c});var y=e(8189),n=e(85211),g=(e(3248),e(35150),e(40707),e(76576)),C=e(72211);const D={read:{reader:C.LF},write:{allowNull:!0,writer:C.M9}},c=E=>{let v=class extends E{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,y._)([(0,n.MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],v.prototype,"blendMode",void 0),(0,y._)([(0,n.MZ)({json:{read:!1,write:!1,origins:{"web-map":D,"portal-item":D}}})],v.prototype,"effect",void 0),v=(0,y._)([(0,g.$)("esri.layers.mixins.BlendLayer")],v),v}},85551:(Z,L,e)=>{e.d(L,{A:()=>R});var y=e(10467),n=e(8189),j=e(23098),O=e(77469),B=e(89563),g=e(89447),C=e(5922),D=e(35150),c=e(11432),E=e(56492),v=e(45272),I=e(85211),i=(e(3248),e(40707),e(17221)),s=e(76576),o=e(50305),p=e(58443),A=e(73874),W=e(46577),K=e(52606),U=e(69927);const R=F=>{let T=class extends F{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,c.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(_){_!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",_))}readPortalItem(_,l,t){if(l.itemId)return new W.default({id:l.itemId,portal:null==t?void 0:t.portal})}writePortalItem(_,l){null!=_&&_.id&&(l.itemId=_.id)}loadFromPortal(_,l){var t=this;return(0,y.A)(function*(){var r;if(null!==(r=t.portalItem)&&void 0!==r&&r.id)try{const{load:d}=yield Promise.all([e.e(5565),e.e(2076),e.e(6180)]).then(e.bind(e,56180));return(0,E.Te)(l),yield d({instance:t,supportedTypes:_.supportedTypes,validateItem:_.validateItem,supportsData:_.supportsData,layerModuleTypeMap:_.layerModuleTypeMap},l)}catch(d){throw(0,E.zf)(d)||D.A.getLogger(t).warn(`Failed to load layer (${t.title}, ${t.id}) portal item (${t.portalItem.id})\n  ${d}`),d}})()}finishLoadEditablePortalLayer(_){var l=this;return(0,y.A)(function*(){l._set("userHasEditingPrivileges",yield l._fetchUserHasEditingPrivileges(_).catch(t=>((0,E.QP)(t),!0)))})()}setUserPrivileges(_,l){var t=this;return(0,y.A)(function*(){if(!j.A.userPrivilegesApplied)return t.finishLoadEditablePortalLayer(l);if(t.url)try{const{features:{edit:r,fullEdit:d},content:{updateItem:u}}=yield t._fetchUserPrivileges(_,l);t._set("userHasEditingPrivileges",r),t._set("userHasFullEditingPrivileges",d),t._set("userHasUpdateItemPrivileges",u)}catch(r){(0,E.QP)(r)}})()}_fetchUserPrivileges(_,l){var t=this;return(0,y.A)(function*(){let r=t.portalItem;if(!_||!r||!r.loaded||r.sourceUrl)return t._fetchFallbackUserPrivileges(l);const d=_===r.id;if(d&&r.portal.user)return(0,U.It)(r);let u,h;if(d)u=r.portal.url;else try{u=yield(0,p.wI)(t.url,l)}catch(P){(0,E.QP)(P)}if(!u||!(0,v.b8)(u,r.portal.url))return t._fetchFallbackUserPrivileges(l);try{const P=null!=l?l.signal:null;h=yield null==O.id?void 0:O.id.getCredential(`${u}/sharing`,{prompt:!1,signal:P})}catch(P){(0,E.QP)(P)}if(!h)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(d?yield r.reload():(r=new W.default({id:_,portal:{url:u}}),yield r.load(l)),r.portal.user)return(0,U.It)(r)}catch(P){(0,E.QP)(P)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}})()}_fetchFallbackUserPrivileges(_){var l=this;return(0,y.A)(function*(){let t=!0;try{t=yield l._fetchUserHasEditingPrivileges(_)}catch(r){(0,E.QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}})()}_fetchUserHasEditingPrivileges(_){var l=this;return(0,y.A)(function*(){const t=l.url?null==O.id?void 0:O.id.findCredential(l.url):null;if(!t)return!0;const r=S.credential===t?S.user:yield l._fetchEditingUser(_);return S.credential=t,S.user=r,null==(null==r?void 0:r.privileges)||r.privileges.includes("features:user:edit")})()}_fetchEditingUser(_){var l=this;return(0,y.A)(function*(){var t,r;const d=null===(t=l.portalItem)||void 0===t||null===(t=t.portal)||void 0===t?void 0:t.user;if(d)return d;const u=O.id.findServerInfo(null!==(r=l.url)&&void 0!==r?r:"");if(null==u||!u.owningSystemUrl)return null;const h=`${u.owningSystemUrl}/sharing/rest`,G=A.A.getDefault();if(G&&G.loaded&&(0,v.S8)(G.restUrl)===(0,v.S8)(h))return G.user;const m=`${h}/community/self`,M=null!=_?_.signal:null,P=yield(0,g.Ke)((0,B.A)(m,{authMode:"no-prompt",query:{f:"json"},signal:M}));return P.ok?K.A.fromJSON(P.value.data):null})()}read(_,l){l&&(l.layer=this),super.read(_,l)}write(_,l){var t;const r=null==l?void 0:l.portal,d=(null===(t=this.portalItem)||void 0===t?void 0:t.id)&&(this.portalItem.portal||A.A.getDefault());return r&&d&&!(0,v.ut)(d.restUrl,r.restUrl)?(l.messages&&l.messages.push(new C.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(_,{...l,layer:this})}};return(0,n._)([(0,I.MZ)({type:W.default})],T.prototype,"portalItem",null),(0,n._)([(0,i.w)("web-document","portalItem",["itemId"])],T.prototype,"readPortalItem",null),(0,n._)([(0,o.K)("web-document","portalItem",{itemId:{type:String}})],T.prototype,"writePortalItem",null),(0,n._)([(0,I.MZ)({clonable:!1})],T.prototype,"resourceReferences",void 0),(0,n._)([(0,I.MZ)({type:Boolean,readOnly:!0})],T.prototype,"userHasEditingPrivileges",void 0),(0,n._)([(0,I.MZ)({type:Boolean,readOnly:!0})],T.prototype,"userHasFullEditingPrivileges",void 0),(0,n._)([(0,I.MZ)({type:Boolean,readOnly:!0})],T.prototype,"userHasUpdateItemPrivileges",void 0),T=(0,n._)([(0,s.$)("esri.layers.mixins.PortalLayer")],T),T},S={credential:null,user:null}},1151:(Z,L,e)=>{e.d(L,{J:()=>l});var y=e(10467),n=e(8189),j=e(35150),O=e(56492),B=e(85211),g=e(48669),c=(e(40707),e(3248),e(76576)),E=e(50501),v=e(31178),i=(e(89447),e(5922),e(76410),e(34703));const s=new v.A,o=new WeakMap;function K(t,r){return Number.isFinite(t)&&Number.isFinite(r)?r<=0?t:K(r,t%r):0}let U=0,R=0;function S(){const t=Date.now();let r=!1;for(const u of s){const h=u.deref();var d;h?h.refreshInterval&&t-(null!==(d=o.get(h))&&void 0!==d?d:0)+5>=6e4*h.refreshInterval&&(o.set(h,t),h.refresh(t)):r=!0}if(r)for(let u=s.length-1;u>=0;u--)s.at(u).deref()||s.removeAt(u)}(0,i.fm)(()=>{const t=Date.now();let r=0;for(const d of s){const u=d.deref();u&&(r=K(Math.round(6e4*u.refreshInterval),r),u.refreshInterval?o.get(u)||o.set(u,t):o.delete(u))}if(r!==R){if(R=r,clearInterval(U),0===R)return void(U=0);U=setInterval(S,R)}});const l=t=>{let r=class extends t{constructor(...d){super(...d),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,O.sg)(()=>this.hasDataChanged()),this.when().then(()=>{this.destroyed||function p(t){(function W(t){return null!=t&&"object"==typeof t&&"refreshInterval"in t&&"refresh"in t})(t)&&s.push(new WeakRef(t))}(this)},()=>{})}destroy(){!function A(t){const r=s.find(d=>d.deref()===t);r&&s.remove(r)}(this)}castRefreshInterval(d){return d>=.1?d:d<=0?0:.1}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(d=Date.now()){(0,O.QZ)(this._debounceHasDataChanged()).then(u=>{u&&this._set("refreshTimestamp",d),this.emit("refresh",{dataChanged:u})},u=>{j.A.getLogger(this).error(u),this.emit("refresh",{dataChanged:!1,error:u})})}hasDataChanged(){return(0,y.A)(function*(){return!0})()}get test(){const d=this;return{set refreshInterval(u){d._set("refreshInterval",u)}}}};return(0,n._)([(0,B.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:E.K}}}}})],r.prototype,"refreshInterval",void 0),(0,n._)([(0,g.w)("refreshInterval")],r.prototype,"castRefreshInterval",null),(0,n._)([(0,B.MZ)({readOnly:!0})],r.prototype,"refreshTimestamp",void 0),(0,n._)([(0,B.MZ)({readOnly:!0})],r.prototype,"refreshParameters",null),r=(0,n._)([(0,c.$)("esri.layers.mixins.RefreshableLayer")],r),r}},33036:(Z,L,e)=>{e.d(L,{j:()=>C});var y=e(8189),n=e(85211),g=(e(3248),e(35150),e(40707),e(76576));const C=c=>{let E=class extends c{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const v={minScale:this.minScale,maxScale:this.maxScale},I=this.parent;I&&"effectiveScaleRange"in I&&function D(c,E){c.minScale=c.minScale>0?E.minScale>0?Math.min(c.minScale,E.minScale):c.minScale:E.minScale,c.maxScale=c.maxScale>0?E.maxScale>0?Math.max(c.maxScale,E.maxScale):c.maxScale:E.maxScale}(v,I.effectiveScaleRange);const a=this._get("effectiveScaleRange");return a&&a.minScale===v.minScale&&a.maxScale===v.maxScale?a:v}};return(0,y._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],E.prototype,"minScale",void 0),(0,y._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],E.prototype,"maxScale",void 0),(0,y._)([(0,n.MZ)({readOnly:!0})],E.prototype,"effectiveScaleRange",null),E=(0,y._)([(0,g.$)("esri.layers.mixins.ScaleRangeLayer")],E),E}},69927:(Z,L,e)=>{e.d(L,{It:()=>i,LG:()=>C,OM:()=>E,Sm:()=>v,Y:()=>D,bK:()=>c,mm:()=>f,sQ:()=>I});var y=e(10467),n=e(11817),j=e(32034),O=e(55039);function g(){return(g=(0,y.A)(function*(s){const o=s.spatialReference;if(o.isWGS84)return s.clone();if(o.isWebMercator)return(0,O.ci)(s);const p=j.A.WGS84;return yield(0,n.initializeProjection)(o,p),(0,n.project)(s,p)})).apply(this,arguments)}function C(s,o){if(!D(s,o)){const p=s.typeKeywords;p?p.push(o):s.typeKeywords=[o]}}function D(s,o){var p;return!(null===(p=s.typeKeywords)||void 0===p||!p.includes(o))}function c(s){return D(s,f.HOSTED_SERVICE)}function E(s,o){const p=s.typeKeywords;if(p){const A=p.indexOf(o);A>-1&&p.splice(A,1)}}function v(s,o,p){p?C(s,o):E(s,o)}function I(s){return a.apply(this,arguments)}function a(){return a=(0,y.A)(function*(s){const o=s.clone().normalize();let p;if(o.length>1)for(const A of o)p?A.width>p.width&&(p=A):p=A;else p=o[0];return function B(s){return g.apply(this,arguments)}(p)}),a.apply(this,arguments)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function i(s){var o;const{portal:p,isOrgItem:A,itemControl:W}=s,K=null===(o=p.user)||void 0===o?void 0:o.privileges;let U=!K||K.includes("features:user:edit"),R=!!A&&!(null==K||!K.includes("features:user:fullEdit"));const S="update"===W||"admin"===W;return S?R=U=!0:R&&(U=!0),{features:{edit:U,fullEdit:R},content:{updateItem:S}}}}}]);