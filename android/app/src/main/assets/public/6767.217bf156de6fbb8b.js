"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6767],{16767:(K,R,e)=>{e.r(R),e.d(R,{default:()=>U});var j,M=e(10467),r=e(8189),S=(e(21152),e(89563)),f=e(5922),D=e(49976),O=e(39693),l=e(85211),E=(e(3248),e(35150),e(40707),e(76576)),t=e(32034),c=e(28067),a=e(51995),d=e(95478),m=e(93410),_=e(1151),$=e(33036),W=e(63014),C=e(11333);const I=new(e(25858).U)("0/0/0",0,0,0,void 0);let x=j=class extends((0,m.d)((0,$.j)((0,_.J)(d.A)))){constructor(){super(...arguments),this.tileInfo=C.A.create({spatialReference:t.A.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new c.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,t.A.WebMercator),this.spatialReference=t.A.WebMercator}getTileBounds(h,p,v,T){const b=T||(0,a.vt)();return I.level=h,I.row=p,I.col=v,I.extent=b,this.tileInfo.updateTileInfo(I),I.extent=void 0,b}fetchTile(h,p,v,T={}){const{signal:b}=T,P=this.getTileUrl(h,p,v),B={responseType:"image",signal:b,query:{...this.refreshParameters}};return(0,S.A)(null!=P?P:"",B).then(N=>N.data)}fetchImageBitmapTile(h,p,v,T={}){var b=this;return(0,M.A)(function*(){var P;const{signal:B}=T;if(b.fetchTile!==j.prototype.fetchTile){const F=yield b.fetchTile(h,p,v,T);return(0,W.C)(F,h,p,v,B)}const N=null!==(P=b.getTileUrl(h,p,v))&&void 0!==P?P:"",G={responseType:"blob",signal:B,query:{...b.refreshParameters}},{data:J}=yield(0,S.A)(N,G);return(0,W.C)(J,h,p,v,B)})()}getTileUrl(){throw new f.A("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,r._)([(0,l.MZ)({type:C.A})],x.prototype,"tileInfo",void 0),(0,r._)([(0,l.MZ)({type:["show","hide"]})],x.prototype,"listMode",void 0),(0,r._)([(0,l.MZ)({readOnly:!0,value:"base-tile"})],x.prototype,"type",void 0),(0,r._)([(0,l.MZ)({nonNullable:!0})],x.prototype,"fullExtent",void 0),(0,r._)([(0,l.MZ)()],x.prototype,"spatialReference",void 0),x=j=(0,r._)([(0,E.$)("esri.layers.BaseTileLayer")],x);const z=x;var Z=e(17049),y=e(29598),s=e(13303);const o=new D.J({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let n=class extends((0,m.d)((0,Z.q)((0,O.P)(z)))){constructor(h){super(h),this.type="bing-maps",this.tileInfo=new C.A({size:[256,256],dpi:96,origin:new s.A({x:-20037508.342787,y:20037508.342787,spatialReference:t.A.WebMercator}),spatialReference:t.A.WebMercator,lods:[new y.A({level:1,resolution:78271.5169639999,scale:295828763.795777}),new y.A({level:2,resolution:39135.7584820001,scale:147914381.897889}),new y.A({level:3,resolution:19567.8792409999,scale:73957190.948944}),new y.A({level:4,resolution:9783.93962049996,scale:36978595.474472}),new y.A({level:5,resolution:4891.96981024998,scale:18489297.737236}),new y.A({level:6,resolution:2445.98490512499,scale:9244648.868618}),new y.A({level:7,resolution:1222.99245256249,scale:4622324.434309}),new y.A({level:8,resolution:611.49622628138,scale:2311162.217155}),new y.A({level:9,resolution:305.748113140558,scale:1155581.108577}),new y.A({level:10,resolution:152.874056570411,scale:577790.554289}),new y.A({level:11,resolution:76.4370282850732,scale:288895.277144}),new y.A({level:12,resolution:38.2185141425366,scale:144447.638572}),new y.A({level:13,resolution:19.1092570712683,scale:72223.819286}),new y.A({level:14,resolution:9.55462853563415,scale:36111.909643}),new y.A({level:15,resolution:4.77731426794937,scale:18055.954822}),new y.A({level:16,resolution:2.38865713397468,scale:9027.977411}),new y.A({level:17,resolution:1.19432856685505,scale:4513.988705}),new y.A({level:18,resolution:.597164283559817,scale:2256.994353}),new y.A({level:19,resolution:.298582141647617,scale:1128.497176}),new y.A({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(h){this._set("bingMetadata",h)}get copyright(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}get operationalLayerType(){return o.toJSON(this.style)}get bingLogo(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}load(h){return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then(()=>this._getMetadata()):Promise.reject(new f.A("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(h,p,v){if(!this.loaded||null==this.bingMetadata)return null;const T=this.bingMetadata.resourceSets[0].resources[0],b=T.imageUrlSubdomains[p%T.imageUrlSubdomains.length],P=this._getQuadKey(h,p,v);return T.imageUrl.replace("{subdomain}",b).replace("{quadkey}",P)}fetchAttributionData(){var h=this;return(0,M.A)(function*(){return h.load().then(()=>null==h.bingMetadata?null:{contributors:h.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(p=>({attribution:p.attribution,coverageAreas:p.coverageAreas.map(v=>({zoomMin:v.zoomMin,zoomMax:v.zoomMax,score:1,bbox:[v.bbox[0],v.bbox[1],v.bbox[2],v.bbox[3]]}))}))})})()}_getMetadata(){return(0,S.A)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(p=>{const v=p.data;if(200!==v.statusCode)throw new f.A("bingmapslayer:getmetadata",v.statusDescription);if(this.bingMetadata=v,0===this.bingMetadata.resourceSets.length)throw new f.A("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new f.A("bingmapslayer:getmetadata","no bing resources")}).catch(p=>{throw new f.A("bingmapslayer:getmetadata",p.message)})}_getPortalBingKey(){var h;return(0,S.A)(null!==(h=this.portalUrl)&&void 0!==h?h:"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(p=>{if(!p.data.bingKey)throw new f.A("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=p.data.bingKey}).catch(p=>{throw new f.A("bingmapslayer:getportalbingkey",p.message)})}_getQuadKey(h,p,v){let T="";for(let b=h;b>0;b--){let P=0;const B=1<<b-1;v&B&&(P+=1),p&B&&(P+=2),T+=P.toString()}return T}};(0,r._)([(0,l.MZ)({json:{read:!1,write:!1},value:null})],n.prototype,"bingMetadata",null),(0,r._)([(0,l.MZ)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],n.prototype,"type",void 0),(0,r._)([(0,l.MZ)({type:C.A})],n.prototype,"tileInfo",void 0),(0,r._)([(0,l.MZ)({type:String,readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"copyright",null),(0,r._)([(0,l.MZ)({type:String,json:{write:!1,read:!1}})],n.prototype,"key",void 0),(0,r._)([(0,l.MZ)({type:o.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:o.read}}})],n.prototype,"style",void 0),(0,r._)([(0,l.MZ)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],n.prototype,"operationalLayerType",null),(0,r._)([(0,l.MZ)({type:String,json:{write:!1,read:!1}})],n.prototype,"culture",void 0),(0,r._)([(0,l.MZ)({type:String,json:{write:!1,read:!1}})],n.prototype,"region",void 0),(0,r._)([(0,l.MZ)({type:String,json:{write:!0,read:!0}})],n.prototype,"portalUrl",void 0),(0,r._)([(0,l.MZ)({type:Boolean,json:{write:!1,read:!1}})],n.prototype,"hasAttributionData",void 0),(0,r._)([(0,l.MZ)({type:String,readOnly:!0})],n.prototype,"bingLogo",null),n=(0,r._)([(0,E.$)("esri.layers.BingMapsLayer")],n);const U=n},72211:(K,R,e)=>{e.d(R,{LF:()=>f,M9:()=>D,zu:()=>u});var M=e(5922),r=e(89221),L=e(79845),S=e(26073);function f(t,c,a){try{return function l(t){if(!t||0===t.length)return null;if(function g(t){const c=t[0];return!!c&&"scale"in c}(t)){const c=[];for(const a of t)c.push({scale:a.scale,value:u(a.value)});return c}return u(t)}(t)}catch(m){var d;null==a||null===(d=a.messages)||void 0===d||d.push(m)}return null}function D(t,c,a,d){try{const m=function O(t){const c=(0,L.q)(t);return c?(0,S.dw)(c)?c.map(a=>a.toJSON()):c.map(({scale:a,effects:d})=>({scale:a,value:d.map(m=>m.toJSON())})):null}(t);(0,r.sM)(a,m,c)}catch(m){d.messages&&d.messages.push(m)}}function u(t){if(null==t||!t.length)return"";const c=[];for(const a of t){let d=[];switch(a.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":d=[i(a,"amount")];break;case"blur":d=[i(a,"radius","pt")];break;case"hue-rotate":d=[i(a,"angle","deg")];break;case"drop-shadow":d=[i(a,"xoffset","pt"),i(a,"yoffset","pt"),i(a,"blurRadius","pt"),E(a,"color")];break;case"bloom":d=[i(a,"strength"),i(a,"radius","pt"),i(a,"threshold")]}const m=`${a.type}(${d.filter(Boolean).join(" ")})`;(0,L.q)(m),c.push(m)}return c.join(" ")}function i(t,c,a){if(null==t[c])throw new M.A("effect:missing-parameter",`Missing parameter '${c}' in ${t.type} effect`,{effect:t});return a?t[c]+a:""+t[c]}function E(t,c){if(null==t[c])throw new M.A("effect:missing-parameter",`Missing parameter '${c}' in ${t.type} effect`,{effect:t});const a=t[c];return`rgba(${a[0]||0}, ${a[1]||0}, ${a[2]||0}, ${a[3]/255||0})`}},93410:(K,R,e)=>{e.d(R,{d:()=>g});var M=e(8189),r=e(85211),D=(e(3248),e(35150),e(40707),e(76576)),O=e(72211);const l={read:{reader:O.LF},write:{allowNull:!0,writer:O.M9}},g=u=>{let i=class extends u{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,M._)([(0,r.MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],i.prototype,"blendMode",void 0),(0,M._)([(0,r.MZ)({json:{read:!1,write:!1,origins:{"web-map":l,"portal-item":l}}})],i.prototype,"effect",void 0),i=(0,M._)([(0,D.$)("esri.layers.mixins.BlendLayer")],i),i}},1151:(K,R,e)=>{e.d(R,{J:()=>y});var M=e(10467),r=e(8189),L=e(35150),S=e(56492),f=e(85211),D=e(48669),g=(e(40707),e(3248),e(76576)),u=e(50501),i=e(31178),a=(e(89447),e(5922),e(76410),e(34703));const d=new i.A,m=new WeakMap;function C(s,o){return Number.isFinite(s)&&Number.isFinite(o)?o<=0?s:C(o,s%o):0}let w=0,j=0;function I(){const s=Date.now();let o=!1;for(const n of d){const U=n.deref();var A;U?U.refreshInterval&&s-(null!==(A=m.get(U))&&void 0!==A?A:0)+5>=6e4*U.refreshInterval&&(m.set(U,s),U.refresh(s)):o=!0}if(o)for(let n=d.length-1;n>=0;n--)d.at(n).deref()||d.removeAt(n)}(0,a.fm)(()=>{const s=Date.now();let o=0;for(const A of d){const n=A.deref();n&&(o=C(Math.round(6e4*n.refreshInterval),o),n.refreshInterval?m.get(n)||m.set(n,s):m.delete(n))}if(o!==j){if(j=o,clearInterval(w),0===j)return void(w=0);w=setInterval(I,j)}});const y=s=>{let o=class extends s{constructor(...A){super(...A),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,S.sg)(()=>this.hasDataChanged()),this.when().then(()=>{this.destroyed||function _(s){(function W(s){return null!=s&&"object"==typeof s&&"refreshInterval"in s&&"refresh"in s})(s)&&d.push(new WeakRef(s))}(this)},()=>{})}destroy(){!function $(s){const o=d.find(A=>A.deref()===s);o&&d.remove(o)}(this)}castRefreshInterval(A){return A>=.1?A:A<=0?0:.1}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(A=Date.now()){(0,S.QZ)(this._debounceHasDataChanged()).then(n=>{n&&this._set("refreshTimestamp",A),this.emit("refresh",{dataChanged:n})},n=>{L.A.getLogger(this).error(n),this.emit("refresh",{dataChanged:!1,error:n})})}hasDataChanged(){return(0,M.A)(function*(){return!0})()}get test(){const A=this;return{set refreshInterval(n){A._set("refreshInterval",n)}}}};return(0,r._)([(0,f.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:u.K}}}}})],o.prototype,"refreshInterval",void 0),(0,r._)([(0,D.w)("refreshInterval")],o.prototype,"castRefreshInterval",null),(0,r._)([(0,f.MZ)({readOnly:!0})],o.prototype,"refreshTimestamp",void 0),(0,r._)([(0,f.MZ)({readOnly:!0})],o.prototype,"refreshParameters",null),o=(0,r._)([(0,g.$)("esri.layers.mixins.RefreshableLayer")],o),o}},33036:(K,R,e)=>{e.d(R,{j:()=>O});var M=e(8189),r=e(85211),D=(e(3248),e(35150),e(40707),e(76576));const O=g=>{let u=class extends g{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const i={minScale:this.minScale,maxScale:this.maxScale},E=this.parent;E&&"effectiveScaleRange"in E&&function l(g,u){g.minScale=g.minScale>0?u.minScale>0?Math.min(g.minScale,u.minScale):g.minScale:u.minScale,g.maxScale=g.maxScale>0?u.maxScale>0?Math.max(g.maxScale,u.maxScale):g.maxScale:u.maxScale}(i,E.effectiveScaleRange);const t=this._get("effectiveScaleRange");return t&&t.minScale===i.minScale&&t.maxScale===i.maxScale?t:i}};return(0,M._)([(0,r.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minScale",void 0),(0,M._)([(0,r.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxScale",void 0),(0,M._)([(0,r.MZ)({readOnly:!0})],u.prototype,"effectiveScaleRange",null),u=(0,M._)([(0,D.$)("esri.layers.mixins.ScaleRangeLayer")],u),u}},63014:(K,R,e)=>{e.d(R,{C:()=>D,m:()=>S});var M=e(10467),r=e(5922),L=e(56492);function S(l,g,u){return f.apply(this,arguments)}function f(){return(f=(0,M.A)(function*(l,g,u){let i;try{i=yield createImageBitmap(l)}catch(E){throw new r.A("request:server",`Unable to load ${g}`,{url:g,error:E})}return(0,L.Te)(u),i})).apply(this,arguments)}function D(l,g,u,i,E){return O.apply(this,arguments)}function O(){return(O=(0,M.A)(function*(l,g,u,i,E){let t;try{t=yield createImageBitmap(l)}catch(c){throw new r.A("request:server",`Unable to load tile ${g}/${u}/${i}`,{error:c,level:g,row:u,col:i})}return(0,L.Te)(E),t})).apply(this,arguments)}}}]);