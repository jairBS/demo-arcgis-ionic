"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[542],{40856:(j,O,t)=>{t.d(O,{X_:()=>P,i1:()=>_,zx:()=>C});var r=t(69287),g=t(82663);const M=96;function P(l,o){const c=o||l.extent,s=l.width,d=(0,g.GA)(null==c?void 0:c.spatialReference);return c&&s?c.width/s*d*g.dy*M:0}function _(l,o){return l/((0,g.GA)(o)*g.dy*M)}function C(l,o,c){return function D(l,o){return 0===o||(0,r.Sp)(l,o)||l<o}(l,o)&&function R(l,o){return 0===o||(0,r.Sp)(l,o)||l>o}(l,c)}},70542:(j,O,t)=>{t.r(O),t.d(O,{default:()=>d});var r=t(10467),g=t(8189),M=t(31178),P=t(35150),_=t(56492),p=t(48900),m=t(63484),R=(t(3248),t(40707),t(5922),t(76576)),l=t(29459),o=t(41474);const c=Symbol();let s=class extends((0,l.e)(o.A)){constructor(){var i;super(...arguments),i=this,this.layerViews=new M.A,this._debouncedUpdate=(0,_.sg)((0,r.A)(function*(){const{layer:y,parent:{footprintLayerView:A}}=i;let I=[];if(A){const U=i._createQuery(),{features:S}=yield A.queryFeatures(U);i.suspended||(I=S.map(f=>y.acquireLayer(f)))}i.removeHandles(c),i.addHandles(I,c)}))}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0}),(0,p.z7)(()=>{var i;return!1===(null===(i=this.parent.footprintLayerView)||void 0===i?void 0:i.dataUpdating)},()=>this._updateLayers()),(0,p.wB)(()=>{var i;return[this.layer.maximumVisibleSublayers,this.suspended,null===(i=this.parent.footprintLayerView)||void 0===i?void 0:i.filter]},()=>this._updateLayers())])}detach(){this.container.removeAllChildren(),this.removeHandles(c)}update(i){}moveStart(){}viewChange(){}moveEnd(){}isUpdating(){return this.layerViews.some(i=>i.updating)}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,y)=>this.container.addChildAt(i.container,y))}_updateLayers(){this.suspended?this.removeHandles(c):this._updatingHandles.addPromise(this._debouncedUpdate().catch(i=>{P.A.getLogger(this).error(i)}))}_createQuery(){const{parent:{footprintLayerView:i},layer:{maximumVisibleSublayers:y,parent:{itemTypeField:A,itemSourceField:I,objectIdField:U,orderBy:S}}}=this,f=`${A} <> 'Scene Service'`,u=i.createQuery();u.returnGeometry=!1,u.num=y,u.outFields=[U,I],u.where=(0,m.m)(u.where,f);const a=null==S?void 0:S.find(E=>E.field&&!E.valueExpression);return null!=a&&a.field&&(u.orderByFields=[`${a.field} ${"descending"===a.order?"DESC":"ASC"}`]),u}};s=(0,g._)([(0,R.$)("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],s);const d=s},29459:(j,O,t)=>{t.d(O,{e:()=>S});var s,r=t(8189),g=t(31178),M=t(5605),P=t(5922),_=t(48900),p=t(85211),D=(t(3248),t(35150),t(40707),t(76576)),R=t(40856),l=t(88766),o=t(60746),c=t(66727);let d=s=class extends c.A{constructor(f){super(f),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],d.prototype,"left",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],d.prototype,"right",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],d.prototype,"top",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],d.prototype,"bottom",void 0),d=s=(0,r._)([(0,D.$)("esri.views.layers.support.ClipRect")],d);const i=d;var y=t(75644);let A=class extends c.A{constructor(f){super(f),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,p.MZ)({type:[[[Number]]],json:{write:!0}})],A.prototype,"path",void 0),A=(0,r._)([(0,D.$)("esri.views.layers.support.Path")],A);const U=g.A.ofType({key:"type",base:null,typeMap:{rect:i,path:A,geometry:y.A}}),S=f=>{let u=class extends f{constructor(){super(...arguments),this.attached=!1,this.clips=new U,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var a,E,L,T;const K=null===(a=null===(E=this.view)||void 0===E?void 0:E.spatialReferenceLocked)||void 0===a||a;(null===(L=this.view)||void 0===L?void 0:L.spatialReference)&&K&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new P.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new l.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,_.wB)(()=>this.suspended,h=>{this.container&&(this.container.visible=!h)},_.pc),(0,_.wB)(()=>this.updateSuspended,h=>{this.view&&!h&&this.updateRequested&&this.view.requestUpdate()},_.pc),(0,_.wB)(()=>{var h,B;return null!==(h=null===(B=this.layer)||void 0===B?void 0:B.opacity)&&void 0!==h?h:1},h=>{this.container&&(this.container.opacity=h)},_.pc),(0,_.wB)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",h=>{this.container&&(this.container.blendMode=h)},_.pc),(0,_.wB)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,h=>{this.container&&(this.container.effect=h)},_.pc),(0,_.wB)(()=>this.highlightOptions,h=>this.container.highlightOptions=h,_.pc),(0,_.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},_.pc),(0,_.wB)(()=>{var h;return{scale:null===(h=this.view)||void 0===h?void 0:h.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:h})=>{const B=null!=h&&this.isVisibleAtScale(h);B!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",B)},_.pc)],"constructor"),null!==(T=this.view)&&void 0!==T&&T.whenLayerView?this.view.whenLayerView(this.layer).then(h=>{h===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var a;const E=null===(a=this.view)||void 0===a?void 0:a.spatialReference;return null==E||this.supportsSpatialReference(E)}get updateSuspended(){return this.suspended}get updating(){var a;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(a=this._updatingHandles)||void 0===a||!a.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(a){const E=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!E)return!0;const{minScale:L,maxScale:T}=E;return(0,R.zx)(a,L,T)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(a){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",a),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(a))):this.updateRequested=!1}hitTest(a,E){return Promise.resolve(null)}supportsSpatialReference(a){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const a=super.getSuspendInfo(),E=!this.spatialReferenceSupported,L=this.visibleAtCurrentScale;return E&&(a.spatialReferenceNotSupported=E),L&&(a.outsideScaleRange=L),a}addAttachHandles(a){this.addHandles(a,"attach")}};return(0,r._)([(0,p.MZ)()],u.prototype,"attached",void 0),(0,r._)([(0,p.MZ)({type:U,set(a){const E=(0,M.V)(a,this._get("clips"),U);this._set("clips",E)}})],u.prototype,"clips",void 0),(0,r._)([(0,p.MZ)()],u.prototype,"container",void 0),(0,r._)([(0,p.MZ)()],u.prototype,"moving",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],u.prototype,"spatialReferenceSupported",null),(0,r._)([(0,p.MZ)({readOnly:!0})],u.prototype,"updateParameters",void 0),(0,r._)([(0,p.MZ)()],u.prototype,"updateRequested",void 0),(0,r._)([(0,p.MZ)()],u.prototype,"updateSuspended",null),(0,r._)([(0,p.MZ)()],u.prototype,"updating",null),(0,r._)([(0,p.MZ)()],u.prototype,"view",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],u.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,p.MZ)({type:o.A})],u.prototype,"highlightOptions",void 0),u=(0,r._)([(0,D.$)("esri.views.2d.layers.LayerView2D")],u),u}},41474:(j,O,t)=>{t.d(O,{A:()=>c});var r=t(8189),g=t(98877),M=t(42425),P=t(3046),_=t(35150),p=t(11432),m=t(64261),v=t(85211),R=(t(3248),t(40707),t(76576)),l=t(56985);let o=class extends((0,P.sA)((0,m.g)(M.A.EventedMixin(g.A)))){constructor(s){super(s),this._updatingHandles=new l.U,this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if("layerview:create-error"!==s.name){var d;const i=this.layer&&this.layer.id||"no id",y=(null===(d=this.layer)||void 0===d?void 0:d.title)||"no title";_.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${y}', id: '${i}')`,s)}})}destroy(){this._updatingHandles=(0,p.pR)(this._updatingHandles)}get fullOpacity(){var s,d,i,y;return(null!==(s=null===(d=this.layer)||void 0===d?void 0:d.opacity)&&void 0!==s?s:1)*(null!==(i=null===(y=this.parent)||void 0===y?void 0:y.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var s;return!this.suspended&&!0===(null===(s=this.layer)||void 0===s?void 0:s.legendEnabled)}get updating(){var s;return!!(null!==(s=this._updatingHandles)&&void 0!==s&&s.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var s;return!0===(null===(s=this.layer)||void 0===s?void 0:s.visible)}set visible(s){this._overrideIfSome("visible",s)}canResume(){var s,d,i;return this.visible&&(null===(s=this.layer)||void 0===s?void 0:s.loaded)&&!(null!==(d=this.parent)&&void 0!==d&&d.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var s,d;const i=null!==(s=this.parent)&&void 0!==s&&s.suspended?this.parent.suspendInfo:{};return null!==(d=this.view)&&void 0!==d&&d.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,r._)([(0,v.MZ)()],o.prototype,"fullOpacity",null),(0,r._)([(0,v.MZ)()],o.prototype,"layer",void 0),(0,r._)([(0,v.MZ)()],o.prototype,"parent",void 0),(0,r._)([(0,v.MZ)({readOnly:!0})],o.prototype,"suspended",null),(0,r._)([(0,v.MZ)({readOnly:!0})],o.prototype,"suspendInfo",null),(0,r._)([(0,v.MZ)({readOnly:!0})],o.prototype,"legendEnabled",null),(0,r._)([(0,v.MZ)({type:Boolean,readOnly:!0})],o.prototype,"updating",null),(0,r._)([(0,v.MZ)({readOnly:!0})],o.prototype,"updatingProgress",null),(0,r._)([(0,v.MZ)()],o.prototype,"visible",null),(0,r._)([(0,v.MZ)()],o.prototype,"view",void 0),o=(0,r._)([(0,R.$)("esri.views.layers.LayerView")],o);const c=o},66727:(j,O,t)=>{t.d(O,{A:()=>C});var r=t(8189),g=t(71065),M=t(85211),m=(t(3248),t(35150),t(40707),t(76576));let v=class extends g.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,r._)([(0,M.MZ)({readOnly:!0})],v.prototype,"version",null),v=(0,r._)([(0,m.$)("esri.views.layers.support.ClipArea")],v);const C=v},75644:(j,O,t)=>{t.d(O,{A:()=>d});var o,r=t(8189),M=(t(21152),t(85211)),m=(t(3248),t(35150),t(40707),t(76576)),v=t(68643),C=t(61320),D=t(66727),R=t(28067),l=t(55861);const c={base:v.A,key:"type",typeMap:{extent:R.A,polygon:l.A}};let s=o=class extends D.A{constructor(i){super(i),this.type="geometry",this.geometry=null}clone(){var i,y;return new o({geometry:null!==(i=null===(y=this.geometry)||void 0===y?void 0:y.clone())&&void 0!==i?i:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,M.MZ)({types:c,json:{read:C.rS,write:!0}})],s.prototype,"geometry",void 0),s=o=(0,r._)([(0,m.$)("esri.views.layers.support.Geometry")],s);const d=s}}]);