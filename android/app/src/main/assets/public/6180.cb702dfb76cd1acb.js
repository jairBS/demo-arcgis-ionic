"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6180],{15764:(J,I,_)=>{_.d(I,{m:()=>D,v:()=>M});var d=_(45272),g=_(73874);function M(y,v){return{...E(y,v),readResourcePaths:[]}}function D(y,v,c){const h=(0,d.An)(y.itemUrl);return{...E(y,v),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:h?{rootPath:h.path,writtenUrls:[]}:null,resources:c?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function E(y,v){return{origin:v,url:(0,d.An)(y.itemUrl),portal:y.portal||g.A.getDefault(),portalItem:y}}},56180:(J,I,_)=>{_.r(I),_.d(I,{load:()=>Q});var d=_(10467),g=_(5922),M=_(68438),D=_(23154),E=_(61597),y=_(66323),v=_(64833),c=_(73874),h=_(15764),p=_(43092),C=_(69927),x=_(8691),X=_(56151);function Q(e,r){return U.apply(this,arguments)}function U(){return U=(0,d.A)(function*(e,r){const n=e.instance.portalItem;if(null!=n&&n.id)return yield n.load(r),function V(e){const r=e.instance.portalItem;if(null==r||!r.type||!e.supportedTypes.includes(r.type))throw new g.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null==r?void 0:r.type,expectedType:e.supportedTypes.join(", ")})}(e),e.validateItem&&e.validateItem(n),function Z(e,r){return R.apply(this,arguments)}(e,r)}),U.apply(this,arguments)}function R(){return R=(0,d.A)(function*(e,r){var n;const t=e.instance,a=t.portalItem;if(!a)return;const{url:l,title:i}=a,o=(0,h.v)(a,"portal-item");if("group"===t.type)return function k(e,r,n){return j.apply(this,arguments)}(t,o,e);l&&"media"!==t.type&&t.read({url:l},o);const s=new E.v,u=yield z(e,s,r);return u&&t.read(u,o),t.resourceReferences={portalItem:a,paths:null!==(n=o.readResourcePaths)&&void 0!==n?n:[]},"subtype-group"!==t.type&&t.read({title:i},o),(0,x.L)(t,o)}),R.apply(this,arguments)}function j(){return j=(0,d.A)(function*(e,r,n){const t=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:a,type:l}=t;if("Group Layer"===l){if(!(0,C.Y)(t,"Map"))throw new g.A("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return function q(e){return b.apply(this,arguments)}(e)}return e.read({title:a},r),function ee(e,r){return $.apply(this,arguments)}(e,n)}),j.apply(this,arguments)}function b(){return(b=(0,d.A)(function*(e){var r;const n=e.portalItem,t=yield n.fetchData("json");if(!t)return;const a=(0,h.v)(n,"web-map");e.read(t,a),yield(0,y.populateGroupLayer)(e,t,{context:a}),e.resourceReferences={portalItem:n,paths:null!==(r=a.readResourcePaths)&&void 0!==r?r:[]}})).apply(this,arguments)}function $(){return $=(0,d.A)(function*(e,r){let n;const{portalItem:t}=e;if(!t)return;const a=t.type,l=r.layerModuleTypeMap;switch(a){case"Feature Service":case"Feature Collection":n=l.FeatureLayer;break;case"Stream Service":n=l.StreamLayer;break;case"Scene Service":n=l.SceneLayer;break;default:throw new g.A("portal:unsupported-item-type-as-group",`The item type '${a}' is not supported as a 'IGroupLayer'`)}const i=new E.v;let[o,s]=yield Promise.all([n(),z(r,i)]),u=()=>o;if("Feature Service"===a){var f;const L=null===(f=(0,p.pJ)(s))||void 0===f?void 0:f.customParameters;s=t.url?yield(0,p.bO)(s,t.url,i):{};const T=(0,p.z8)(s),m=(0,p.ay)(s),G=(0,p.PC)(s),A=[];if(T.length||null!=m&&m.length){T.length&&A.push("SubtypeGroupLayer"),null!=m&&m.length&&A.push("OrientedImageryLayer"),null!=G&&G.length&&A.push("CatalogLayer");const Y=[];for(const O of A)Y.push((0,l[O])());const ie=yield Promise.all(Y),H=new Map;A.forEach((O,P)=>{H.set(O,ie[P])}),u=O=>{var P;return O.layerType&&null!==(P=H.get(O.layerType))&&void 0!==P?P:o}}const se=yield function ae(e,r){return F.apply(this,arguments)}(t.url,{customParameters:L,loadContext:i});return yield S(e,u,s,se)}return"Scene Service"===a&&t.url&&(s=yield(0,p.nu)(t,s,i)),(0,p.XH)(s)>0?yield S(e,u,s):yield function te(e,r){return K.apply(this,arguments)}(e,u)}),$.apply(this,arguments)}function K(){return(K=(0,d.A)(function*(e,r){var n,t;const{portalItem:a}=e;if(null==a||!a.url)return;const l=yield(0,X.V)(a.url);l&&S(e,r,{layers:null===(n=l.layers)||void 0===n?void 0:n.map(p._r),tables:null===(t=l.tables)||void 0===t?void 0:t.map(p._r)})})).apply(this,arguments)}function S(e,r,n,t){return W.apply(this,arguments)}function W(){return(W=(0,d.A)(function*(e,r,n,t){var a;let l=n.layers||[];const i=n.tables||[];if("Feature Collection"===(null===(a=e.portalItem)||void 0===a?void 0:a.type)?(l.forEach((o,s)=>{var u;o.id=s,"Table"===(null==o||null===(u=o.layerDefinition)||void 0===u?void 0:u.type)&&i.push(o)}),l=l.filter(o=>{var s;return"Table"!==(null==o||null===(s=o.layerDefinition)||void 0===s?void 0:s.type)})):(l.reverse(),i.reverse()),l.forEach(o=>{const s=null==t?void 0:t(o);if(s||!t){const u=N(e,r(o),n,o,s);e.add(u)}}),i.length){const o=yield v.S.FeatureLayer();i.forEach(s=>{const u=null==t?void 0:t(s);if(u||!t){const f=N(e,o,n,s,u);e.tables.add(f)}})}})).apply(this,arguments)}function N(e,r,n,t,a){const l=e.portalItem,i={portalItem:l.clone(),layerId:t.id};null!=t.url&&(i.url=t.url);const o=new r(i);if("sourceJSON"in o&&(o.sourceJSON=a),"subtype-group"!==o.type&&"catalog"!==o.type&&(o.sublayerTitleMode="service-name"),"Feature Collection"===l.type){const s={origin:"portal-item",portal:l.portal||c.A.getDefault()};o.read(t,s);const u=n.showLegend;null!=u&&o.read({showLegend:u},s)}return o}function z(e,r,n){return B.apply(this,arguments)}function B(){return B=(0,d.A)(function*(e,r,n){if(!1===e.supportsData)return;const t=e.instance,a=t.portalItem;if(!a)return;let l=null;try{l=yield a.fetchData("json",n)}catch{}if(function le(e){return"stream"!==e.type&&"layerId"in e}(t)){var i,o;let s=null;const u=yield function re(e,r,n){return w.apply(this,arguments)}(a,l,r);if((null!==(i=l)&&void 0!==i&&i.layers||null!==(o=l)&&void 0!==o&&o.tables)&&u>0){if(null==t.layerId){const f=(0,p.z8)(l);t.layerId="subtype-group"===t.type?null==f?void 0:f[0]:(0,p.WZ)(l)}s=function ne(e,r){var n,t;const{layerId:a}=r,l=(null===(n=e.layers)||void 0===n?void 0:n.find(i=>i.id===a))||(null===(t=e.tables)||void 0===t?void 0:t.find(i=>i.id===a));return l&&function oe(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(l,r)?l:null}(l,t),s&&null!=l.showLegend&&(s.showLegend=l.showLegend)}return u>1&&"sublayerTitleMode"in t&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),s}return l}),B.apply(this,arguments)}function w(){return(w=(0,d.A)(function*(e,r,n){var t,a,l,i,o,s,u,f,L;if(null!=r&&r.layers&&null!=r&&r.tables)return(0,p.XH)(r);const T=(0,M.qg)(e.url);if(!T)return 1;const m=yield n.fetchServiceMetadata(T.url.path,{customParameters:null===(t=(0,p.pJ)(r))||void 0===t?void 0:t.customParameters}).catch(()=>null);return(null!==(a=null!==(l=null==r||null===(i=r.layers)||void 0===i?void 0:i.length)&&void 0!==l?l:null==m||null===(o=m.layers)||void 0===o?void 0:o.length)&&void 0!==a?a:0)+(null!==(s=null!==(u=null==r||null===(f=r.tables)||void 0===f?void 0:f.length)&&void 0!==u?u:null==m||null===(L=m.tables)||void 0===L?void 0:L.length)&&void 0!==s?s:0)})).apply(this,arguments)}function F(){return(F=(0,d.A)(function*(e,r){const{layersJSON:n}=yield(0,D.Q)(e,r);if(!n)return null;const t=[...n.layers,...n.tables];return a=>t.find(l=>l.id===a.id)})).apply(this,arguments)}},8691:(J,I,_)=>{_.d(I,{L:()=>E});var d=_(10467),g=_(89447),M=_(56492),D=_(96996);function E(v,c,h){return y.apply(this,arguments)}function y(){return(y=(0,d.A)(function*(v,c,h){const p=v&&v.getAtOrigin&&v.getAtOrigin("renderer",c.origin);if(p&&"unique-value"===p.type&&p.styleOrigin){const C=yield(0,g.Ke)(p.populateFromStyle());if((0,M.Te)(h),!1===C.ok){const x=C.error;null!=c&&c.messages&&c.messages.push(new D.A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${x.message}`,{error:x,context:c})),v.clear("renderer",null==c?void 0:c.origin)}}})).apply(this,arguments)}}}]);