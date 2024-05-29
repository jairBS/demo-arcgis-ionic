"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[751,9927],{90751:(W,L,e)=>{e.r(L),e.d(L,{default:()=>S});var h=e(10467),r=e(8189),R=e(2993),I=e(4879),C=e(35150),D=e(39693),O=e(56492),P=e(48900),u=e(85211),g=(e(3248),e(40707),e(74220)),s=e(17221),_=e(76576),i=e(50305),n=e(26514),v=e(95478),E=e(93410),U=e(17049),B=e(85551),b=e(33036),K=e(64833),x=e(46577),j=e(76227),G=e(74613),T=e(93480);const m=Symbol("WebScene");var o=e(71655),l=e(95945),c=e(85263);let y=class extends((0,E.d)((0,b.j)((0,U.q)((0,B.A)((0,T.l)((0,G.Q)((0,D.P)(v.A)))))))){constructor(t){var a;super(t),a=this,this.allLayers=new R.A({getCollections:()=>[this.layers],getChildrenFunction:f=>"layers"in f?f.layers:null}),this.allTables=(0,j.Z)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,O.sg)(function(){var f=(0,h.A)(function*(A,M,H){const{save:$,saveAs:V}=yield Promise.all([e.e(2076),e.e(9238)]).then(e.bind(e,54814));switch(A){case o.X.SAVE:return $(a,M);case o.X.SAVE_AS:return V(a,H,M)}});return function(A,M,H){return f.apply(this,arguments)}}())}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,P.wB)(()=>{let t=this.parent;for(;t&&"parent"in t&&t.parent;)t=t.parent;return t&&m in t},t=>{const a="prevent-adding-tables";this.removeHandles(a),t&&(this.tables.removeAll(),this.addHandles((0,P.on)(()=>this.tables,"before-add",f=>{f.preventDefault(),C.A.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),a))},P.pc),(0,P.wB)(()=>this.visible,this._onVisibilityChange.bind(this),P.OH)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===n.Gr.USER}_writeLayers(t,a,f,A){const M=[];if(!t)return M;t.forEach(H=>{const $=(0,c.CJ)(H,A.webmap?A.webmap.getLayerJSONFromResourceInfo(H):null,A);null!=$&&$.layerType&&M.push($)}),a.layers=M}set portalItem(t){this._set("portalItem",t)}readPortalItem(t,a,f){const{itemId:A,layerType:M}=a;if("GroupLayer"===M&&A)return new x.default({id:A,portal:null==f?void 0:f.portal})}writePortalItem(t,a){null!=t&&t.id&&(a.itemId=t.id)}set visibilityMode(t){const a=this._get("visibilityMode")!==t;this._set("visibilityMode",t),a&&this._enforceVisibility(t,this.visible)}beforeSave(){var t=this;return(0,h.A)(function*(){return(0,l.d)(t)})()}load(t){const a=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:K.S},t).catch(f=>{if((0,O.QP)(f),this.sourceIsPortalItem)throw f});return this.addResolvingPromise(a),Promise.resolve(this)}loadAll(){var t=this;return(0,h.A)(function*(){return(0,I.g)(t,a=>{a(t.layers,t.tables)})})()}save(t){var a=this;return(0,h.A)(function*(){return a._debouncedSaveOperations(o.X.SAVE,t)})()}saveAs(t,a){var f=this;return(0,h.A)(function*(){return f._debouncedSaveOperations(o.X.SAVE_AS,a,t)})()}layerAdded(t){t.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(t):"inherited"===this.visibilityMode&&(t.visible=this.visible),this.hasHandles(t.uid)?console.error(`Layer read to Grouplayer: uid=${t.uid}`):this.addHandles((0,P.wB)(()=>t.visible,a=>this._onChildVisibilityChange(t,a),P.OH),t.uid)}layerRemoved(t){this.removeHandles(t.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(t){this.layers.forEach(a=>{a!==t&&(a.visible=!1)})}_enforceVisibility(t,a){if(!(0,g.oY)(this).initialized)return;const f=this.layers;let A=f.find(M=>M.visible);switch(t){case"exclusive":f.length&&!A&&(A=f.at(0),A.visible=!0),this._turnOffOtherLayers(A);break;case"inherited":f.forEach(M=>{M.visible=a})}}_onVisibilityChange(t){"inherited"===this.visibilityMode&&this.layers.forEach(a=>{a.visible=t})}_onChildVisibilityChange(t,a){switch(this.visibilityMode){case"exclusive":a?this._turnOffOtherLayers(t):this._isAnyLayerVisible()||(t.visible=!0);break;case"inherited":t.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(t=>t.visible)}};(0,r._)([(0,u.MZ)({readOnly:!0,dependsOn:[]})],y.prototype,"allLayers",void 0),(0,r._)([(0,u.MZ)({readOnly:!0})],y.prototype,"allTables",void 0),(0,r._)([(0,u.MZ)({json:{read:!0,write:!0}})],y.prototype,"blendMode",void 0),(0,r._)([(0,u.MZ)()],y.prototype,"fullExtent",void 0),(0,r._)([(0,u.MZ)({readOnly:!0})],y.prototype,"sourceIsPortalItem",null),(0,r._)([(0,u.MZ)({json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"layers",void 0),(0,r._)([(0,i.K)("layers")],y.prototype,"_writeLayers",null),(0,r._)([(0,u.MZ)({type:["GroupLayer"]})],y.prototype,"operationalLayerType",void 0),(0,r._)([(0,u.MZ)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(t,a,f){return{enabled:"Group Layer"===(null==t?void 0:t.type)&&(null==f?void 0:f.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],y.prototype,"portalItem",null),(0,r._)([(0,s.w)("web-map","portalItem",["itemId"])],y.prototype,"readPortalItem",null),(0,r._)([(0,i.K)("web-map","portalItem",{itemId:{type:String}})],y.prototype,"writePortalItem",null),(0,r._)([(0,u.MZ)()],y.prototype,"spatialReference",void 0),(0,r._)([(0,u.MZ)({json:{read:!1},readOnly:!0,value:"group"})],y.prototype,"type",void 0),(0,r._)([(0,u.MZ)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(t,a,f)=>{"inherited"!==t&&(a[f]=t)}}}}})],y.prototype,"visibilityMode",null),y=(0,r._)([(0,_.$)("esri.layers.GroupLayer")],y);const S=y},72211:(W,L,e)=>{e.d(L,{LF:()=>C,M9:()=>D,zu:()=>d});var h=e(5922),r=e(89221),R=e(79845),I=e(26073);function C(s,_,i){try{return function P(s){if(!s||0===s.length)return null;if(function u(s){const _=s[0];return!!_&&"scale"in _}(s)){const _=[];for(const i of s)_.push({scale:i.scale,value:d(i.value)});return _}return d(s)}(s)}catch(v){var n;null==i||null===(n=i.messages)||void 0===n||n.push(v)}return null}function D(s,_,i,n){try{const v=function O(s){const _=(0,R.q)(s);return _?(0,I.dw)(_)?_.map(i=>i.toJSON()):_.map(({scale:i,effects:n})=>({scale:i,value:n.map(v=>v.toJSON())})):null}(s);(0,r.sM)(i,v,_)}catch(v){n.messages&&n.messages.push(v)}}function d(s){if(null==s||!s.length)return"";const _=[];for(const i of s){let n=[];switch(i.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":n=[p(i,"amount")];break;case"blur":n=[p(i,"radius","pt")];break;case"hue-rotate":n=[p(i,"angle","deg")];break;case"drop-shadow":n=[p(i,"xoffset","pt"),p(i,"yoffset","pt"),p(i,"blurRadius","pt"),g(i,"color")];break;case"bloom":n=[p(i,"strength"),p(i,"radius","pt"),p(i,"threshold")]}const v=`${i.type}(${n.filter(Boolean).join(" ")})`;(0,R.q)(v),_.push(v)}return _.join(" ")}function p(s,_,i){if(null==s[_])throw new h.A("effect:missing-parameter",`Missing parameter '${_}' in ${s.type} effect`,{effect:s});return i?s[_]+i:""+s[_]}function g(s,_){if(null==s[_])throw new h.A("effect:missing-parameter",`Missing parameter '${_}' in ${s.type} effect`,{effect:s});const i=s[_];return`rgba(${i[0]||0}, ${i[1]||0}, ${i[2]||0}, ${i[3]/255||0})`}},93410:(W,L,e)=>{e.d(L,{d:()=>u});var h=e(8189),r=e(85211),D=(e(3248),e(35150),e(40707),e(76576)),O=e(72211);const P={read:{reader:O.LF},write:{allowNull:!0,writer:O.M9}},u=d=>{let p=class extends d{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,h._)([(0,r.MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],p.prototype,"blendMode",void 0),(0,h._)([(0,r.MZ)({json:{read:!1,write:!1,origins:{"web-map":P,"portal-item":P}}})],p.prototype,"effect",void 0),p=(0,h._)([(0,D.$)("esri.layers.mixins.BlendLayer")],p),p}},85551:(W,L,e)=>{e.d(L,{A:()=>x});var h=e(10467),r=e(8189),R=e(23098),I=e(77469),C=e(89563),D=e(89447),O=e(5922),P=e(35150),u=e(11432),d=e(56492),p=e(45272),g=e(85211),i=(e(3248),e(40707),e(17221)),n=e(76576),v=e(50305),E=e(58443),U=e(73874),B=e(46577),b=e(52606),K=e(69927);const x=G=>{let T=class extends G{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(m){m!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",m))}readPortalItem(m,o,l){if(o.itemId)return new B.default({id:o.itemId,portal:null==l?void 0:l.portal})}writePortalItem(m,o){null!=m&&m.id&&(o.itemId=m.id)}loadFromPortal(m,o){var l=this;return(0,h.A)(function*(){var c;if(null!==(c=l.portalItem)&&void 0!==c&&c.id)try{const{load:y}=yield Promise.all([e.e(5565),e.e(2076),e.e(6180)]).then(e.bind(e,56180));return(0,d.Te)(o),yield y({instance:l,supportedTypes:m.supportedTypes,validateItem:m.validateItem,supportsData:m.supportsData,layerModuleTypeMap:m.layerModuleTypeMap},o)}catch(y){throw(0,d.zf)(y)||P.A.getLogger(l).warn(`Failed to load layer (${l.title}, ${l.id}) portal item (${l.portalItem.id})\n  ${y}`),y}})()}finishLoadEditablePortalLayer(m){var o=this;return(0,h.A)(function*(){o._set("userHasEditingPrivileges",yield o._fetchUserHasEditingPrivileges(m).catch(l=>((0,d.QP)(l),!0)))})()}setUserPrivileges(m,o){var l=this;return(0,h.A)(function*(){if(!R.A.userPrivilegesApplied)return l.finishLoadEditablePortalLayer(o);if(l.url)try{const{features:{edit:c,fullEdit:y},content:{updateItem:S}}=yield l._fetchUserPrivileges(m,o);l._set("userHasEditingPrivileges",c),l._set("userHasFullEditingPrivileges",y),l._set("userHasUpdateItemPrivileges",S)}catch(c){(0,d.QP)(c)}})()}_fetchUserPrivileges(m,o){var l=this;return(0,h.A)(function*(){let c=l.portalItem;if(!m||!c||!c.loaded||c.sourceUrl)return l._fetchFallbackUserPrivileges(o);const y=m===c.id;if(y&&c.portal.user)return(0,K.It)(c);let S,t;if(y)S=c.portal.url;else try{S=yield(0,E.wI)(l.url,o)}catch(M){(0,d.QP)(M)}if(!S||!(0,p.b8)(S,c.portal.url))return l._fetchFallbackUserPrivileges(o);try{const M=null!=o?o.signal:null;t=yield null==I.id?void 0:I.id.getCredential(`${S}/sharing`,{prompt:!1,signal:M})}catch(M){(0,d.QP)(M)}if(!t)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(y?yield c.reload():(c=new B.default({id:m,portal:{url:S}}),yield c.load(o)),c.portal.user)return(0,K.It)(c)}catch(M){(0,d.QP)(M)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}})()}_fetchFallbackUserPrivileges(m){var o=this;return(0,h.A)(function*(){let l=!0;try{l=yield o._fetchUserHasEditingPrivileges(m)}catch(c){(0,d.QP)(c)}return{features:{edit:l,fullEdit:!1},content:{updateItem:!1}}})()}_fetchUserHasEditingPrivileges(m){var o=this;return(0,h.A)(function*(){const l=o.url?null==I.id?void 0:I.id.findCredential(o.url):null;if(!l)return!0;const c=j.credential===l?j.user:yield o._fetchEditingUser(m);return j.credential=l,j.user=c,null==(null==c?void 0:c.privileges)||c.privileges.includes("features:user:edit")})()}_fetchEditingUser(m){var o=this;return(0,h.A)(function*(){var l,c;const y=null===(l=o.portalItem)||void 0===l||null===(l=l.portal)||void 0===l?void 0:l.user;if(y)return y;const S=I.id.findServerInfo(null!==(c=o.url)&&void 0!==c?c:"");if(null==S||!S.owningSystemUrl)return null;const t=`${S.owningSystemUrl}/sharing/rest`,a=U.A.getDefault();if(a&&a.loaded&&(0,p.S8)(a.restUrl)===(0,p.S8)(t))return a.user;const f=`${t}/community/self`,A=null!=m?m.signal:null,M=yield(0,D.Ke)((0,C.A)(f,{authMode:"no-prompt",query:{f:"json"},signal:A}));return M.ok?b.A.fromJSON(M.value.data):null})()}read(m,o){o&&(o.layer=this),super.read(m,o)}write(m,o){var l;const c=null==o?void 0:o.portal,y=(null===(l=this.portalItem)||void 0===l?void 0:l.id)&&(this.portalItem.portal||U.A.getDefault());return c&&y&&!(0,p.ut)(y.restUrl,c.restUrl)?(o.messages&&o.messages.push(new O.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(m,{...o,layer:this})}};return(0,r._)([(0,g.MZ)({type:B.default})],T.prototype,"portalItem",null),(0,r._)([(0,i.w)("web-document","portalItem",["itemId"])],T.prototype,"readPortalItem",null),(0,r._)([(0,v.K)("web-document","portalItem",{itemId:{type:String}})],T.prototype,"writePortalItem",null),(0,r._)([(0,g.MZ)({clonable:!1})],T.prototype,"resourceReferences",void 0),(0,r._)([(0,g.MZ)({type:Boolean,readOnly:!0})],T.prototype,"userHasEditingPrivileges",void 0),(0,r._)([(0,g.MZ)({type:Boolean,readOnly:!0})],T.prototype,"userHasFullEditingPrivileges",void 0),(0,r._)([(0,g.MZ)({type:Boolean,readOnly:!0})],T.prototype,"userHasUpdateItemPrivileges",void 0),T=(0,r._)([(0,n.$)("esri.layers.mixins.PortalLayer")],T),T},j={credential:null,user:null}},33036:(W,L,e)=>{e.d(L,{j:()=>O});var h=e(8189),r=e(85211),D=(e(3248),e(35150),e(40707),e(76576));const O=u=>{let d=class extends u{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const p={minScale:this.minScale,maxScale:this.maxScale},g=this.parent;g&&"effectiveScaleRange"in g&&function P(u,d){u.minScale=u.minScale>0?d.minScale>0?Math.min(u.minScale,d.minScale):u.minScale:d.minScale,u.maxScale=u.maxScale>0?d.maxScale>0?Math.max(u.maxScale,d.maxScale):u.maxScale:d.maxScale}(p,g.effectiveScaleRange);const s=this._get("effectiveScaleRange");return s&&s.minScale===p.minScale&&s.maxScale===p.maxScale?s:p}};return(0,h._)([(0,r.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"minScale",void 0),(0,h._)([(0,r.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"maxScale",void 0),(0,h._)([(0,r.MZ)({readOnly:!0})],d.prototype,"effectiveScaleRange",null),d=(0,h._)([(0,D.$)("esri.layers.mixins.ScaleRangeLayer")],d),d}},69927:(W,L,e)=>{e.d(L,{It:()=>i,LG:()=>O,OM:()=>d,Sm:()=>p,Y:()=>P,bK:()=>u,mm:()=>_,sQ:()=>g});var h=e(10467),r=e(11817),R=e(32034),I=e(55039);function D(){return(D=(0,h.A)(function*(n){const v=n.spatialReference;if(v.isWGS84)return n.clone();if(v.isWebMercator)return(0,I.ci)(n);const E=R.A.WGS84;return yield(0,r.initializeProjection)(v,E),(0,r.project)(n,E)})).apply(this,arguments)}function O(n,v){if(!P(n,v)){const E=n.typeKeywords;E?E.push(v):n.typeKeywords=[v]}}function P(n,v){var E;return!(null===(E=n.typeKeywords)||void 0===E||!E.includes(v))}function u(n){return P(n,_.HOSTED_SERVICE)}function d(n,v){const E=n.typeKeywords;if(E){const U=E.indexOf(v);U>-1&&E.splice(U,1)}}function p(n,v,E){E?O(n,v):d(n,v)}function g(n){return s.apply(this,arguments)}function s(){return s=(0,h.A)(function*(n){const v=n.clone().normalize();let E;if(v.length>1)for(const U of v)E?U.width>E.width&&(E=U):E=U;else E=v[0];return function C(n){return D.apply(this,arguments)}(E)}),s.apply(this,arguments)}const _={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function i(n){var v;const{portal:E,isOrgItem:U,itemControl:B}=n,b=null===(v=E.user)||void 0===v?void 0:v.privileges;let K=!b||b.includes("features:user:edit"),x=!!U&&!(null==b||!b.includes("features:user:fullEdit"));const j="update"===B||"admin"===B;return j?x=K=!0:x&&(K=!0),{features:{edit:K,fullEdit:x},content:{updateItem:j}}}},71655:(W,L,e)=>{var h,r;e.d(L,{X:()=>h}),(r=h||(h={}))[r.SAVE=0]="SAVE",r[r.SAVE_AS=1]="SAVE_AS"},95945:(W,L,e)=>{e.d(L,{c:()=>D,d:()=>R});var h=e(10467),r=e(5922);function R(O){return I.apply(this,arguments)}function I(){return(I=(0,h.A)(function*(O){const P=[];for(const u of O.allLayers)if("beforeSave"in u&&"function"==typeof u.beforeSave){const d=u.beforeSave();d&&P.push(d)}yield Promise.allSettled(P)})).apply(this,arguments)}const C=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function D(O,P,u){var d;let p=(null!==(d=O.messages)&&void 0!==d?d:[]).filter(({type:g})=>"error"===g).map(({name:g,message:s,details:_})=>new r.A(g,s,_));if(O.blockedRelativeUrls&&(p=p.concat(O.blockedRelativeUrls.map(g=>new r.A("url:unsupported",`Relative url '${g}' is not supported`)))),u){const{ignoreUnsupported:g,supplementalUnsupportedErrors:s=[],requiredPropertyChecksDisabled:_}=u;g&&(p=p.filter(({name:i})=>!(C.has(i)||s.includes(i)))),_&&(p=p.filter(i=>"web-document-write:property-required"!==i.name))}if(p.length>0)throw new r.A(P.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:p})}}}]);