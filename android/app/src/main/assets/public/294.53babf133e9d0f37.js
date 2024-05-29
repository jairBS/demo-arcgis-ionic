"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[294,9927,4098,3258],{24098:(Q,Z,o)=>{o.d(Z,{GB:()=>c,Qo:()=>B,Y4:()=>N});var M=o(44549);class c{}function N(m){return m instanceof M.bo?m===c.instance:"unknown"===(null==m?void 0:m.toString().toLowerCase())}function B(m){return N(m)?c.instance:m}c.instance=new M.oh("Etc/UTC")},1852:(Q,Z,o)=>{o.r(Z),o.d(Z,{default:()=>ye});var M=o(10467),c=o(8189),N=o(92165),B=o(89563),b=o(5922),m=o(77806),P=o(35150),S=o(39693),O=o(89221),g=o(56492),A=o(45272),E=o(85211),J=(o(3248),o(17221)),z=o(76576),C=o(50305),R=o(95478),h=o(94376),p=o(25936),y=o(23e3),j=o(17049),w=o(85551),I=o(33036),x=o(46406),Y=o(55739),U=o(15463),d=o(71065);o(40707);let i=class extends d.oY{constructor(v){super(v),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,c._)([(0,E.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"field",void 0),(0,c._)([(0,E.MZ)({readOnly:!0,nonNullable:!0,json:{read:!1}})],i.prototype,"type",void 0),i=(0,c._)([(0,z.$)("esri.layers.pointCloudFilters.PointCloudFilter")],i);const u=i;var f;let _=f=class extends u{constructor(v){super(v),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new f({field:this.field,requiredClearBits:(0,m.o8)(this.requiredClearBits),requiredSetBits:(0,m.o8)(this.requiredSetBits)})}};(0,c._)([(0,E.MZ)({type:[Y.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],_.prototype,"requiredClearBits",void 0),(0,c._)([(0,E.MZ)({type:[Y.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],_.prototype,"requiredSetBits",void 0),(0,c._)([(0,U.e)({pointCloudBitfieldFilter:"bitfield"})],_.prototype,"type",void 0),_=f=(0,c._)([(0,z.$)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],_);const L=_;var F;let $=F=class extends u{constructor(v){super(v),this.includedReturns=[],this.type="return"}clone(){return new F({field:this.field,includedReturns:(0,m.o8)(this.includedReturns)})}};(0,c._)([(0,E.MZ)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"includedReturns",void 0),(0,c._)([(0,U.e)({pointCloudReturnFilter:"return"})],$.prototype,"type",void 0),$=F=(0,c._)([(0,z.$)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],$);const V=$;var T;let X=T=class extends u{constructor(v){super(v),this.mode="exclude",this.type="value",this.values=[]}clone(){return new T({field:this.field,mode:this.mode,values:(0,m.o8)(this.values)})}};(0,c._)([(0,E.MZ)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],X.prototype,"mode",void 0),(0,c._)([(0,U.e)({pointCloudValueFilter:"value"})],X.prototype,"type",void 0),(0,c._)([(0,E.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],X.prototype,"values",void 0),X=T=(0,c._)([(0,z.$)("esri.layers.pointCloudFilters.PointCloudValueFilter")],X);const ue={key:"type",base:u,typeMap:{value:X,bitfield:L,return:V}};var oe,ne=o(81687),re=o(29141),ce=o(3404),se=o(26025),pe=o(49873),le=o(63115);let q=oe=class extends le.A{constructor(v){super(v),this.type="point-cloud-rgb",this.field=null}clone(){return new oe({...this.cloneProperties(),field:(0,m.o8)(this.field)})}};(0,c._)([(0,U.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],q.prototype,"type",void 0),(0,c._)([(0,E.MZ)({type:String,json:{write:!0}})],q.prototype,"field",void 0),q=oe=(0,c._)([(0,z.$)("esri.renderers.PointCloudRGBRenderer")],q);const _e=q;var ve=o(87862),fe=o(87701);const ae={key:"type",base:le.A,typeMap:{"point-cloud-class-breaks":pe.A,"point-cloud-rgb":_e,"point-cloud-stretch":ve.A,"point-cloud-unique-value":fe.A},errorContext:"renderer"};var te=o(73812),me=o(41843);const de=(0,ce.p)();let G=class extends((0,x.w6)((0,p.b)((0,j.q)((0,w.A)((0,I.j)((0,S.P)((0,y.d)((0,h.p)(R.A))))))))){constructor(...v){super(...v),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(v,D){return"string"==typeof v?{url:v,...D}:v}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(v){const D=this.fieldsIndex.get(v);return null!=D&&D.domain?D.domain:null}readServiceFields(v,D,K){return Array.isArray(v)?v.map(H=>{const k=new re.A;return"FieldTypeInteger"===H.type&&((H=(0,m.o8)(H)).type="esriFieldTypeInteger"),k.read(H,K),k}):Array.isArray(D.attributeStorageInfo)?D.attributeStorageInfo.map(H=>new re.A({name:H.name,type:"ELEVATION"===H.name?"double":"integer"})):null}set elevationInfo(v){this._set("elevationInfo",v),this._validateElevationInfo()}writeRenderer(v,D,K,H){(0,O.sM)("layerDefinition.drawingInfo.renderer",v.write({},H),D)}load(v){const D=null!=v?v.signal:null,K=this.loadFromPortal({supportedTypes:["Scene Service"]},v).catch(g.QP).then(()=>this._fetchService(D));return this.addResolvingPromise(K),Promise.resolve(this)}createPopupTemplate(v){const D=(0,me.tn)(this,v);return D&&(this._formatPopupTemplateReturnsField(D),this._formatPopupTemplateRGBField(D)),D}_formatPopupTemplateReturnsField(v){var D;const K=this.fieldsIndex.get("RETURNS");if(!K)return;const H=null===(D=v.fieldInfos)||void 0===D?void 0:D.find(ee=>ee.fieldName===K.name);if(!H)return;const k=new se.A({name:"pcl-returns-decoded",title:K.alias||K.name,expression:`\n        var returnValue = $feature.${K.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});v.expressionInfos=[...v.expressionInfos||[],k],H.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(v){var D;const K=this.fieldsIndex.get("RGB");if(!K)return;const H=null===(D=v.fieldInfos)||void 0===D?void 0:D.find(ee=>ee.fieldName===K.name);if(!H)return;const k=new se.A({name:"pcl-rgb-decoded",title:K.alias||K.name,expression:`\n        var rgb = $feature.${K.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});v.expressionInfos=[...v.expressionInfos||[],k],H.fieldName="expression/pcl-rgb-decoded"}queryCachedStatistics(v,D){var K=this;return(0,M.A)(function*(){if(yield K.load(D),!K.attributeStorageInfo)throw new b.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const H=K.fieldsIndex.get(v);if(!H)throw new b.A("pointcloudlayer:field-unexisting",`Field '${v}' does not exist on the layer`);for(const k of K.attributeStorageInfo)if(k.name===H.name){const ee=(0,A.fj)(K.parsedUrl.path,`./statistics/${k.key}`);return(0,B.A)(ee,{query:{f:"json",...K.customParameters,token:K.apiKey},responseType:"json",signal:D?D.signal:null}).then(Ee=>Ee.data)}throw new b.A("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(v,D){var K=this;return(0,M.A)(function*(){return K._debouncedSaveOperations(x.Xh.SAVE_AS,{...D,getTypeKeywords:()=>K._getTypeKeywords(),portalItemLayerType:"point-cloud"},v)})()}save(){var v=this;return(0,M.A)(function*(){const D={getTypeKeywords:()=>v._getTypeKeywords(),portalItemLayerType:"point-cloud"};return v._debouncedSaveOperations(x.Xh.SAVE,D)})()}validateLayer(v){if(v.layerType&&"PointCloud"!==v.layerType)throw new b.A("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:v.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new b.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new b.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(v){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(D=>D.name===v)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const v=this.elevationInfo;(0,te.XF)(P.A.getLogger(this),(0,te.B)("Point cloud layers","absolute-height",v)),(0,te.XF)(P.A.getLogger(this),(0,te.tW)("Point cloud layers",v))}};(0,c._)([(0,E.MZ)({type:["PointCloudLayer"]})],G.prototype,"operationalLayerType",void 0),(0,c._)([(0,E.MZ)(ne.M6)],G.prototype,"popupEnabled",void 0),(0,c._)([(0,E.MZ)({type:N.A,json:{name:"popupInfo",write:!0}})],G.prototype,"popupTemplate",void 0),(0,c._)([(0,E.MZ)({readOnly:!0,json:{read:!1}})],G.prototype,"defaultPopupTemplate",null),(0,c._)([(0,E.MZ)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],G.prototype,"opacity",void 0),(0,c._)([(0,E.MZ)({type:["show","hide"]})],G.prototype,"listMode",void 0),(0,c._)([(0,E.MZ)({types:[ue],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],G.prototype,"filters",void 0),(0,c._)([(0,E.MZ)({type:[re.A]})],G.prototype,"fields",void 0),(0,c._)([(0,E.MZ)(de.fieldsIndex)],G.prototype,"fieldsIndex",void 0),(0,c._)([(0,J.w)("service","fields",["fields","attributeStorageInfo"])],G.prototype,"readServiceFields",null),(0,c._)([(0,E.MZ)(de.outFields)],G.prototype,"outFields",void 0),(0,c._)([(0,E.MZ)({readOnly:!0})],G.prototype,"attributeStorageInfo",void 0),(0,c._)([(0,E.MZ)(ne.Yj)],G.prototype,"elevationInfo",null),(0,c._)([(0,E.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],G.prototype,"path",void 0),(0,c._)([(0,E.MZ)(ne.fV)],G.prototype,"legendEnabled",void 0),(0,c._)([(0,E.MZ)({types:ae,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:ae},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],G.prototype,"renderer",void 0),(0,c._)([(0,C.K)("renderer")],G.prototype,"writeRenderer",null),(0,c._)([(0,E.MZ)({json:{read:!1},readOnly:!0})],G.prototype,"type",void 0),G=(0,c._)([(0,z.$)("esri.layers.PointCloudLayer")],G);const ye=G},23e3:(Q,Z,o)=>{o.d(Z,{d:()=>P});var M=o(8189),c=o(85211),m=(o(3248),o(35150),o(40707),o(76576));const P=S=>{let O=class extends S{constructor(){super(...arguments),this.customParameters=null}};return(0,M._)([(0,c.MZ)({type:Object,json:{write:{overridePolicy:g=>({enabled:!!(g&&Object.keys(g).length>0)})}}})],O.prototype,"customParameters",void 0),O=(0,M._)([(0,m.$)("esri.layers.mixins.CustomParametersMixin")],O),O}},85551:(Q,Z,o)=>{o.d(Z,{A:()=>I});var M=o(10467),c=o(8189),N=o(23098),B=o(77469),b=o(89563),m=o(89447),P=o(5922),S=o(35150),O=o(11432),g=o(56492),A=o(45272),E=o(85211),z=(o(3248),o(40707),o(17221)),C=o(76576),R=o(50305),h=o(58443),p=o(73874),y=o(46577),j=o(52606),w=o(69927);const I=Y=>{let U=class extends Y{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,O.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(d){d!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",d))}readPortalItem(d,r,i){if(r.itemId)return new y.default({id:r.itemId,portal:null==i?void 0:i.portal})}writePortalItem(d,r){null!=d&&d.id&&(r.itemId=d.id)}loadFromPortal(d,r){var i=this;return(0,M.A)(function*(){var u;if(null!==(u=i.portalItem)&&void 0!==u&&u.id)try{const{load:f}=yield Promise.all([o.e(5565),o.e(2076),o.e(6180)]).then(o.bind(o,56180));return(0,g.Te)(r),yield f({instance:i,supportedTypes:d.supportedTypes,validateItem:d.validateItem,supportsData:d.supportsData,layerModuleTypeMap:d.layerModuleTypeMap},r)}catch(f){throw(0,g.zf)(f)||S.A.getLogger(i).warn(`Failed to load layer (${i.title}, ${i.id}) portal item (${i.portalItem.id})\n  ${f}`),f}})()}finishLoadEditablePortalLayer(d){var r=this;return(0,M.A)(function*(){r._set("userHasEditingPrivileges",yield r._fetchUserHasEditingPrivileges(d).catch(i=>((0,g.QP)(i),!0)))})()}setUserPrivileges(d,r){var i=this;return(0,M.A)(function*(){if(!N.A.userPrivilegesApplied)return i.finishLoadEditablePortalLayer(r);if(i.url)try{const{features:{edit:u,fullEdit:f},content:{updateItem:_}}=yield i._fetchUserPrivileges(d,r);i._set("userHasEditingPrivileges",u),i._set("userHasFullEditingPrivileges",f),i._set("userHasUpdateItemPrivileges",_)}catch(u){(0,g.QP)(u)}})()}_fetchUserPrivileges(d,r){var i=this;return(0,M.A)(function*(){let u=i.portalItem;if(!d||!u||!u.loaded||u.sourceUrl)return i._fetchFallbackUserPrivileges(r);const f=d===u.id;if(f&&u.portal.user)return(0,w.It)(u);let _,L;if(f)_=u.portal.url;else try{_=yield(0,h.wI)(i.url,r)}catch(T){(0,g.QP)(T)}if(!_||!(0,A.b8)(_,u.portal.url))return i._fetchFallbackUserPrivileges(r);try{const T=null!=r?r.signal:null;L=yield null==B.id?void 0:B.id.getCredential(`${_}/sharing`,{prompt:!1,signal:T})}catch(T){(0,g.QP)(T)}if(!L)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(f?yield u.reload():(u=new y.default({id:d,portal:{url:_}}),yield u.load(r)),u.portal.user)return(0,w.It)(u)}catch(T){(0,g.QP)(T)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}})()}_fetchFallbackUserPrivileges(d){var r=this;return(0,M.A)(function*(){let i=!0;try{i=yield r._fetchUserHasEditingPrivileges(d)}catch(u){(0,g.QP)(u)}return{features:{edit:i,fullEdit:!1},content:{updateItem:!1}}})()}_fetchUserHasEditingPrivileges(d){var r=this;return(0,M.A)(function*(){const i=r.url?null==B.id?void 0:B.id.findCredential(r.url):null;if(!i)return!0;const u=x.credential===i?x.user:yield r._fetchEditingUser(d);return x.credential=i,x.user=u,null==(null==u?void 0:u.privileges)||u.privileges.includes("features:user:edit")})()}_fetchEditingUser(d){var r=this;return(0,M.A)(function*(){var i,u;const f=null===(i=r.portalItem)||void 0===i||null===(i=i.portal)||void 0===i?void 0:i.user;if(f)return f;const _=B.id.findServerInfo(null!==(u=r.url)&&void 0!==u?u:"");if(null==_||!_.owningSystemUrl)return null;const L=`${_.owningSystemUrl}/sharing/rest`,F=p.A.getDefault();if(F&&F.loaded&&(0,A.S8)(F.restUrl)===(0,A.S8)(L))return F.user;const $=`${L}/community/self`,V=null!=d?d.signal:null,T=yield(0,m.Ke)((0,b.A)($,{authMode:"no-prompt",query:{f:"json"},signal:V}));return T.ok?j.A.fromJSON(T.value.data):null})()}read(d,r){r&&(r.layer=this),super.read(d,r)}write(d,r){var i;const u=null==r?void 0:r.portal,f=(null===(i=this.portalItem)||void 0===i?void 0:i.id)&&(this.portalItem.portal||p.A.getDefault());return u&&f&&!(0,A.ut)(f.restUrl,u.restUrl)?(r.messages&&r.messages.push(new P.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(d,{...r,layer:this})}};return(0,c._)([(0,E.MZ)({type:y.default})],U.prototype,"portalItem",null),(0,c._)([(0,z.w)("web-document","portalItem",["itemId"])],U.prototype,"readPortalItem",null),(0,c._)([(0,R.K)("web-document","portalItem",{itemId:{type:String}})],U.prototype,"writePortalItem",null),(0,c._)([(0,E.MZ)({clonable:!1})],U.prototype,"resourceReferences",void 0),(0,c._)([(0,E.MZ)({type:Boolean,readOnly:!0})],U.prototype,"userHasEditingPrivileges",void 0),(0,c._)([(0,E.MZ)({type:Boolean,readOnly:!0})],U.prototype,"userHasFullEditingPrivileges",void 0),(0,c._)([(0,E.MZ)({type:Boolean,readOnly:!0})],U.prototype,"userHasUpdateItemPrivileges",void 0),U=(0,c._)([(0,C.$)("esri.layers.mixins.PortalLayer")],U),U},x={credential:null,user:null}},33036:(Q,Z,o)=>{o.d(Z,{j:()=>P});var M=o(8189),c=o(85211),m=(o(3248),o(35150),o(40707),o(76576));const P=O=>{let g=class extends O{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const A={minScale:this.minScale,maxScale:this.maxScale},E=this.parent;E&&"effectiveScaleRange"in E&&function S(O,g){O.minScale=O.minScale>0?g.minScale>0?Math.min(O.minScale,g.minScale):O.minScale:g.minScale,O.maxScale=O.maxScale>0?g.maxScale>0?Math.max(O.maxScale,g.maxScale):O.maxScale:g.maxScale}(A,E.effectiveScaleRange);const W=this._get("effectiveScaleRange");return W&&W.minScale===A.minScale&&W.maxScale===A.maxScale?W:A}};return(0,M._)([(0,c.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"minScale",void 0),(0,M._)([(0,c.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"maxScale",void 0),(0,M._)([(0,c.MZ)({readOnly:!0})],g.prototype,"effectiveScaleRange",null),g=(0,M._)([(0,m.$)("esri.layers.mixins.ScaleRangeLayer")],g),g}},73258:(Q,Z,o)=>{o.d(Z,{A:()=>W});var M=o(5922),c=o(71065),N=o(35150),B=o(60797),b=o(24098),m=o(86300),P=o(22639),S=o(44549);const E=new Map;class W{static fromJSON(p){return new W(p.fields,p.timeZoneByFieldName)}static fromLayer(p){var y;return new W(null!==(y=p.fields)&&void 0!==y?y:[],R(p))}static fromLayerJSON(p){var y;return new W(null!==(y=p.fields)&&void 0!==y?y:[],R(p))}constructor(p=[],y){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=p||[],this._timeZoneByFieldName=y?new Map(y):null;const j=[];for(const I of this.fields){const x=null==I?void 0:I.name,Y=z(x);if(x&&Y){var w;const U=J(x);this._fieldsMap.set(x,I),this._fieldsMap.set(U,I),this._normalizedFieldsMap.set(Y,I),j.push(`${U}:${I.type}:${null===(w=this._timeZoneByFieldName)||void 0===w?void 0:w.get(x)}`),(0,m.vE)(I)?(this.dateFields.push(I),this._dateFieldsSet.add(I)):(0,m.WA)(I)&&(this._numericFieldsSet.add(I),this.numericFields.push(I)),(0,m.te)(I)||(0,m.Xz)(I)||(I.editable=null==I.editable||!!I.editable,I.nullable=null==I.nullable||!!I.nullable)}}j.sort(),this.uid=j.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const p of this.fields)(0,m.te)(p)||(0,m.Xz)(p)||p.nullable||void 0!==(0,m.lD)(p)||this._requiredFields.push(p)}return this._requiredFields}equals(p){return this.uid===(null==p?void 0:p.uid)}has(p){return null!=this.get(p)}get(p){var y;if(!p)return;let j=this._fieldsMap.get(p);return j||(j=null!==(y=this._fieldsMap.get(J(p)))&&void 0!==y?y:this._normalizedFieldsMap.get(z(p)),j&&this._fieldsMap.set(p,j),j)}getTimeZone(p){const y=this.get(p&&"string"!=typeof p?p.name:p);return y?this._timeZoneByFieldName?this._timeZoneByFieldName.get(y.name):"date"===y.type||"esriFieldTypeDate"===y.type?(N.A.getLogger("esri.layers.support.FieldsIndex").error(new M.A("getTimeZone:no-timezone-information",`no time zone information for field '${y.name}'`)),P.n$):C.has(y.type)?P.L5:null:null}getLuxonTimeZone(p){const y=this.getTimeZone(p);return y?y===P.L5?b.GB.instance:y===P.n$?S.mQ.utcInstance:(0,B.tE)(E,y,()=>S.oh.create(y)):null}isDateField(p){return this._dateFieldsSet.has(this.get(p))}isTimeOnlyField(p){return(0,m.OH)(this.get(p))}isNumericField(p){return this._numericFieldsSet.has(this.get(p))}normalizeFieldName(p){var y,j;return null!==(y=null===(j=this.get(p))||void 0===j?void 0:j.name)&&void 0!==y?y:void 0}toJSON(){return{fields:this.fields.map(p=>(0,c.Wj)(p)?p.toJSON():p),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function J(h){return h.trim().toLowerCase()}function z(h){var p,y;return null!==(p=null===(y=(0,m.rS)(h))||void 0===y?void 0:y.toLowerCase())&&void 0!==p?p:""}const C=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function R(h){var p,y,j,w,I,x,Y;const U=new Map;if(!h.fields)return U;const d=!0===h.datesInUnknownTimezone,{timeInfo:r,editFieldsInfo:i}=h,u=null!==(p=r?"startField"in r?r.startField:r.startTimeField:"")&&void 0!==p?p:"",f=null!==(y=r?"endField"in r?r.endField:r.endTimeField:"")&&void 0!==y?y:"",_=function A(h){return"dateFieldsTimeZone"in h}(h)?null!==(j=h.dateFieldsTimeZone)&&void 0!==j?j:null:h.dateFieldsTimeReference?(0,P.ZS)(h.dateFieldsTimeReference):null,L=i?function O(h){return"timeZone"in h}(i)?null!==(w=i.timeZone)&&void 0!==w?w:_:i.dateFieldsTimeReference?(0,P.ZS)(i.dateFieldsTimeReference):null!=_?_:P.n$:null,F=r?function g(h){return"timeZone"in h}(r)?null!==(I=r.timeZone)&&void 0!==I?I:_:r.timeReference?(0,P.ZS)(r.timeReference):_:null,$=new Map([[J(null!==(x=null==i?void 0:i.creationDateField)&&void 0!==x?x:""),L],[J(null!==(Y=null==i?void 0:i.editDateField)&&void 0!==Y?Y:""),L],[J(u),F],[J(f),F]]);for(const{name:T,type:X}of h.fields)if(C.has(X))U.set(T,P.L5);else if("date"!==X&&"esriFieldTypeDate"!==X)U.set(T,null);else if(d)U.set(T,P.L5);else{var V;const ie=null!==(V=$.get(J(null!=T?T:"")))&&void 0!==V?V:_;U.set(T,ie)}return U}},3404:(Q,Z,o)=>{o.d(Z,{p:()=>m});var M=o(3248),c=o(35150),N=o(29141),B=o(73258),b=o(86300);function m(){return{fields:{type:[N.A],value:null,set:function(P){if(P&&(0,M.A)("big-integer-warning-enabled")){const g=P.filter(A=>"big-integer"===A.type||"oid"===A.type&&(A.length||0)>=8);if(g.length){var S,O;const A=g.map(E=>`'${E.name}'`).join(", ");c.A.getLogger(this).warn("#fields",`Layer (title: '${null!==(S=this.title)&&void 0!==S?S:"no title"}', id: '${null!==(O=this.id)&&void 0!==O?O:"no id"}') references big-integer field(s): ${A}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",P)}},fieldsIndex:{readOnly:!0,get(){return B.A.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(P){this._userOutFields=P,this.notifyChange("outFields")},get:function(){const P=this._userOutFields;if(null==P||!P.length)return null;if(P.includes("*"))return["*"];if(!this.fields)return P;for(const O of P){var S;(null===(S=this.fieldsIndex)||void 0===S?void 0:S.has(O))||c.A.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${O} found in outFields`,{layer:this,outFields:P})}return(0,b.DB)(this.fieldsIndex,P)}}}}},69927:(Q,Z,o)=>{o.d(Z,{It:()=>z,LG:()=>P,OM:()=>g,Sm:()=>A,Y:()=>S,bK:()=>O,mm:()=>J,sQ:()=>E});var M=o(10467),c=o(11817),N=o(32034),B=o(55039);function m(){return(m=(0,M.A)(function*(C){const R=C.spatialReference;if(R.isWGS84)return C.clone();if(R.isWebMercator)return(0,B.ci)(C);const h=N.A.WGS84;return yield(0,c.initializeProjection)(R,h),(0,c.project)(C,h)})).apply(this,arguments)}function P(C,R){if(!S(C,R)){const h=C.typeKeywords;h?h.push(R):C.typeKeywords=[R]}}function S(C,R){var h;return!(null===(h=C.typeKeywords)||void 0===h||!h.includes(R))}function O(C){return S(C,J.HOSTED_SERVICE)}function g(C,R){const h=C.typeKeywords;if(h){const p=h.indexOf(R);p>-1&&h.splice(p,1)}}function A(C,R,h){h?P(C,R):g(C,R)}function E(C){return W.apply(this,arguments)}function W(){return W=(0,M.A)(function*(C){const R=C.clone().normalize();let h;if(R.length>1)for(const p of R)h?p.width>h.width&&(h=p):h=p;else h=R[0];return function b(C){return m.apply(this,arguments)}(h)}),W.apply(this,arguments)}const J={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function z(C){var R;const{portal:h,isOrgItem:p,itemControl:y}=C,j=null===(R=h.user)||void 0===R?void 0:R.privileges;let w=!j||j.includes("features:user:edit"),I=!!p&&!(null==j||!j.includes("features:user:fullEdit"));const x="update"===y||"admin"===y;return x?I=w=!0:I&&(w=!0),{features:{edit:w,fullEdit:I},content:{updateItem:x}}}},26768:(Q,Z,o)=>{o.d(Z,{q:()=>O});var S,M=o(8189),c=o(71065),N=o(85211),P=(o(3248),o(35150),o(40707),o(76576));let O=S=class extends c.oY{constructor(){super(...arguments),this.title=null}clone(){return new S({title:this.title})}};(0,M._)([(0,N.MZ)({type:String,json:{write:!0}})],O.prototype,"title",void 0),O=S=(0,M._)([(0,P.$)("esri.renderers.support.LegendOptions")],O)},5236:(Q,Z,o)=>{o.d(Z,{A:()=>E});var g,M=o(8189),c=o(68677),N=o(71065),B=o(85211),b=o(55739),S=(o(40707),o(3248),o(76576)),O=o(50305);let A=g=class extends N.oY{constructor(W){super(W),this.color=null,this.label=null,this.value=null}writeValue(W,J,z){J[z]=null!=W?W:0}clone(){return new g({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,M._)([(0,B.MZ)({type:c.A,json:{type:[b.jz],write:!0}})],A.prototype,"color",void 0),(0,M._)([(0,B.MZ)({type:String,json:{write:!0}})],A.prototype,"label",void 0),(0,M._)([(0,B.MZ)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],A.prototype,"value",void 0),(0,M._)([(0,O.K)("value")],A.prototype,"writeValue",null),A=g=(0,M._)([(0,S.$)("esri.renderers.visualVariables.support.ColorStop")],A);const E=A},73812:(Q,Z,o)=>{function m(d,r){return function B(d,r){return null!=r&&r.mode?r.mode:function N(d){return d?Y:U}(d).mode}(null!=d&&d.hasZ,r)}function y(d,r,i){return i&&i.mode!==r?`${d} only support ${r} elevation mode`:null}function j(d,r,i){return(null==i?void 0:i.mode)===r?`${d} do not support ${r} elevation mode`:null}function w(d,r){return null!=(null==r?void 0:r.featureExpressionInfo)&&"0"!==r.featureExpressionInfo.expression?`${d} do not support featureExpressionInfo`:null}function I(d,r){r&&d.warn(".elevationInfo=",r)}o.d(Z,{$7:()=>j,B:()=>y,XF:()=>I,tW:()=>w,w7:()=>m}),o(82663),o(82575);const Y={mode:"absolute-height",offset:0},U={mode:"on-the-ground",offset:null}},41843:(Q,Z,o)=>{o.d(Z,{tn:()=>W});var M=o(92165),c=o(86300),N=o(54042),P=(o(75432),o(65121),o(558),o(8975)),A=(o(90792),o(83902),o(98089),o(61099)),E=o(17580);function W({displayField:r,editFieldsInfo:i,fields:u,objectIdField:f,title:_},L){if(!u)return null;const F=function p(r,i){var u;const f=null==i?void 0:i.visibleFieldNames;return function C(r,i){const u=r;return i&&(r=r.filter(f=>!i.includes(f.type))),r===u&&(r=r.slice()),r.sort(R),r}(null!==(u=r.fields)&&void 0!==u?u:[],(null==i?void 0:i.ignoreFieldTypes)||d).map(_=>new A.A({fieldName:_.name,isEditable:(0,c.R$)(_,r),label:_.alias,format:w(_),visible:z(_,{...r,visibleFieldNames:f})}))}({editFieldsInfo:i,fields:u,objectIdField:f},L);if(!F.length)return null;const $=function Y(r){const i=(0,c.mB)(r),{titleBase:u}=r;return i?`${u}: {${i.trim()}}`:null!=u?u:""}({titleBase:_,fields:u,displayField:r}),V=function I(){return[new P.A,new N.A]}();return new M.A({title:$,content:V,fieldInfos:F})}const z=(r,i)=>i.visibleFieldNames?i.visibleFieldNames.has(r.name):(0,c.Bz)(r,i);function R(r,i){return"oid"===r.type?-1:"oid"===i.type?1:U(r)?-1:U(i)?1:(r.alias||r.name).toLocaleLowerCase().localeCompare((i.alias||i.name).toLocaleLowerCase())}function w(r){switch(r.type){case"small-integer":case"integer":case"single":return new E.A({digitSeparator:!0,places:0});case"double":return new E.A({digitSeparator:!0,places:2});case"string":return(0,c.JL)(r.name)?new E.A({digitSeparator:!0,places:0}):null;default:return null}}function U(r){return"name"===(r.name&&r.name.toLowerCase())||"name"===(r.alias&&r.alias.toLowerCase())}const d=["geometry","blob","raster","guid","xml"]}}]);