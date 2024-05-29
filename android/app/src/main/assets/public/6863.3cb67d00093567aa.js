"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6863],{37188:(L,d,i)=>{i.d(d,{A:()=>D});var c=i(3248),n=i(69473),f=i(54382),u=i(89298),v=i(99065);const P=(o,r)=>o.key.level-r.key.level!=0?o.key.level-r.key.level:o.key.row-r.key.row!=0?o.key.row-r.key.row:o.key.col-r.key.col;class D extends f.A{constructor(r){super(),this._tileInfoView=r}renderChildren(r){this.sortChildren(P),this.setStencilReference(r),super.renderChildren(r)}createRenderParams(r){const{state:l}=r,a=super.createRenderParams(r);return a.requiredLevel=this._tileInfoView.getClosestInfoForScale(l.scale).level,a.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(l.scale),a}prepareRenderPasses(r){const l=super.prepareRenderPasses(r);return l.push(r.registerRenderPass({name:"stencil",brushes:[u.A],drawPhase:n.S5.DEBUG|n.S5.MAP|n.S5.HIGHLIGHT|n.S5.LABEL,target:()=>this.getStencilTarget()})),(0,c.A)("esri-tiles-debug")&&l.push(r.registerRenderPass({name:"tileInfo",brushes:[v.A],drawPhase:n.S5.DEBUG,target:()=>this.children})),l}getStencilTarget(){return this.children}setStencilReference(r){let l=1;for(const a of this.children)a.stencilRef=l++}}},57216:(L,d,i)=>{i.r(d),i.d(d,{default:()=>K});var c=i(10467),n=i(8189),f=i(35150),u=i(56492),v=i(85211),o=(i(3248),i(40707),i(76576)),r=i(58701),l=i(96604),a=i(29459),y=i(86131),M=i(54290),R=i(74847),m=i(67347),C=i(77031),U=i(41474),S=i(96081);const B=new Set([102113,102100,3857,3785,900913]),W=[0,0];let I=class extends((0,S.A)((0,l.Y)((0,a.e)(U.A)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var e;const s=null===(e=this.tileMatrixSet)||void 0===e?void 0:e.tileInfo;s&&(this._tileInfoView=new M.A(s),this._fetchQueue=new m.A({tileInfoView:this._tileInfoView,concurrency:16,process:(t,h)=>this.fetchTile(t,h)}),this._tileStrategy=new C.A({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var t;return[null===(t=this.layer)||void 0===t||null===(t=t.activeLayer)||void 0===t?void 0:t.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var e,s;super.detach(),null!==(e=this._tileStrategy)&&void 0!==e&&e.destroy(),null!==(s=this._fetchQueue)&&void 0!==s&&s.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var s,t;return null!==(s=null===(t=this.layer.activeLayer.tileMatrixSets)||void 0===t?void 0:t.some(h=>{var _;return(0,r.aI)(null===(_=h.tileInfo)||void 0===_?void 0:_.spatialReference,e)}))&&void 0!==s&&s}doRefresh(){var e=this;return(0,c.A)(function*(){if(e.attached){if(e.suspended)return e._tileStrategy.clear(),void e.requestUpdate();e._fetchQueue.reset(),e._tileStrategy.refresh(s=>e._updatingHandles.addPromise(e._enqueueTileFetch(s)))}})()}acquireTile(e){const s=this._bitmapView.createTile(e),t=s.bitmap;return[t.x,t.y]=this._tileInfoView.getTileCoords(W,s.key),t.resolution=this._tileInfoView.getTileResolution(s.key),[t.width,t.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(s)),this._bitmapView.addChild(s),this.requestUpdate(),s}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}fetchTile(e,s={}){var t=this;return(0,c.A)(function*(){const h="tilemapCache"in t.layer?t.layer.tilemapCache:null,{signal:_,resamplingLevel:E=0}=s;if(!h)return t._fetchImage(e,_);const O=new R.A(0,0,0,0);let g;try{yield h.fetchAvailabilityUpsample(e.level,e.row,e.col,O,{signal:_}),g=yield t._fetchImage(O,_)}catch(T){if((0,u.zf)(T))throw T;if(E<3){const p=t._tileInfoView.getTileParentId(e.id);if(p){const A=new R.A(p),j=yield t.fetchTile(A,{...s,resamplingLevel:E+1});return(0,y.t)(t._tileInfoView,j,A,e)}}throw T}return(0,y.t)(t._tileInfoView,g,O,e)})()}canResume(){return super.canResume()&&null!==this.tileMatrixSet}_enqueueTileFetch(e){var s=this;return(0,c.A)(function*(){if(!s._fetchQueue.has(e.key.id)){try{const t=yield s._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=s._tileInfoView.tileInfo.size[0],e.bitmap.height=s._tileInfoView.tileInfo.size[1],e.once("attach",()=>s.requestUpdate())}catch(t){(0,u.zf)(t)||f.A.getLogger(s).error(t)}s.requestUpdate()}})()}_fetchImage(e,s){var t=this;return(0,c.A)(function*(){return t.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:s})})()}_getTileMatrixSetBySpatialReference(e){const s=this.view.spatialReference;if(!e.tileMatrixSets)return null;let t=e.tileMatrixSets.find(h=>{var _;return(0,r.aI)(null===(_=h.tileInfo)||void 0===_?void 0:_.spatialReference,s)});return!t&&s.isWebMercator&&(t=e.tileMatrixSets.find(h=>{var _,E;return B.has(null!==(_=null===(E=h.tileInfo)||void 0===E?void 0:E.spatialReference.wkid)&&void 0!==_?_:-1)})),t}};(0,n._)([(0,v.MZ)({readOnly:!0})],I.prototype,"tileMatrixSet",null),I=(0,n._)([(0,o.$)("esri.views.2d.layers.WMTSLayerView2D")],I);const K=I},96081:(L,d,i)=>{i.d(d,{A:()=>r});var c=i(8189),n=i(35150),f=i(56492),u=i(48900),o=(i(3248),i(40707),i(5922),i(76576));const r=l=>{let a=class extends l{initialize(){this.addHandles((0,u.on)(()=>this.layer,"refresh",y=>{this.doRefresh(y.dataChanged).catch(M=>{(0,f.zf)(M)||n.A.getLogger(this).error(M)})}),"RefreshableLayerView")}};return a=(0,c._)([(0,o.$)("esri.layers.mixins.RefreshableLayerView")],a),a}}}]);