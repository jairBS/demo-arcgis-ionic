"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6999],{86468:(U,T,s)=>{s.d(T,{T:()=>m,U:()=>r});var f=s(69287);function r(y,I,e=0){const A=(0,f.qE)(y,0,o);for(let w=0;w<4;w++)I[e+w]=Math.floor(256*h(A*g[w]))}function m(y,I=0){let e=0;for(let A=0;A<4;A++)e+=y[I+A]*v[A];return e}const g=[1,256,65536,16777216],v=[1/256,1/65536,1/16777216,1/4294967296],o=m(new Uint8ClampedArray([255,255,255,255]));function h(y){return y-Math.floor(y)}},11393:(U,T,s)=>{s.r(T),s.d(T,{default:()=>ut});var f=s(10467),r=s(8189),m=s(77469),g=s(31178),v=s(11432),o=s(48900),h=s(45272),y=s(85211),w=(s(3248),s(35150),s(40707),s(76576)),p=s(28067),D=s(11817),j=s(32034),L=s(70264),k=s(68800),B=s(27641),F=s(76582),C=s(72663),O=s(29459),K=s(57052),G=s(80745),H=s(41474),Q=s(89563),tt=s(13303),Y=s(40018),lt=s(91837),et=s(3276),ot=s(61189),W=s(50915),ht=s(79061),it=s(31071),dt=s(42835),nt=s(26136),st=s(4931);let at=(()=>{class a{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(a._instance)return a._instanceRefCount++,a._instance;a._instanceRefCount=1,a._instance=this,this._ownsRctx=!0;const l=document.createElement("canvas"),c=(0,ot.q)(l);c.getExtension("OES_texture_float"),this._rctx=new dt.e(c,{})}const _=(0,et.p)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(_.shaders.vertexShader,_.shaders.fragmentShader,_.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new lt.A(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,i,_=!1){const l=(0,D.project)(t.extent,i),c=new tt.A({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:E,y:x}=(0,Y.Wo)(c,i,t.extent);let b=(E+x)/2;const M=Math.round((l.xmax-l.xmin)/b),S=Math.round((l.ymax-l.ymin)/b);b=(l.width/M+l.height/S)/2;const ct=new tt.A({x:b,y:b,spatialReference:l.spatialReference}),z=(0,Y.l0)({projectedExtent:l,srcBufferExtent:t.extent,pixelSize:ct,hasWrapAround:!0,spacing:[16,16]}),$=(0,it.kc)(this._rctx,z),J=new st.R(M,S);J.wrapMode=W.pF.CLAMP_TO_EDGE;const P=new ht.H(this._rctx,J);this._rctx.bindFramebuffer(P),this._rctx.setViewport(0,0,M,S),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture($,1),this._quad.bind();const{width:Z=0,height:q=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",Z,q),this._program.setUniform2fv("u_transformSpacing",z.spacing),this._program.setUniform2fv("u_transformGridSize",z.size),this._program.setUniform2f("u_targetImageSize",M,S),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),$.dispose(),_){const{width:N,height:V}=P,_t=new ImageData(null!=N?N:0,null!=V?V:0);P.readPixels(0,0,null!=N?N:0,null!=V?V:0,W.Ab.RGBA,W.ld.UNSIGNED_BYTE,_t.data);const pt=P.detachColorTexture(W.Nm.COLOR_ATTACHMENT0);return P.dispose(),{texture:pt,extent:l,imageData:_t}}const X=P.detachColorTexture(W.Nm.COLOR_ATTACHMENT0);return P.dispose(),{texture:X,extent:l}}reprojectBitmapData(t,i){const _=(0,F.LG)(t.bitmapData)?(0,F.yr)(t.bitmapData):t.bitmapData,l=new st.R;l.wrapMode=W.pF.CLAMP_TO_EDGE,l.width=t.bitmapData.width,l.height=t.bitmapData.height;const c=new nt.g(this._rctx,l,_),E=this.reprojectTexture({texture:c,extent:t.extent},i,!0);E.texture.dispose();const x=document.createElement("canvas"),b=E.imageData;return x.width=b.width,x.height=b.height,x.getContext("2d").putImageData(b,0,0),{bitmapData:x,extent:E.extent}}loadAndReprojectBitmapData(t,i,_){var l=this;return(0,f.A)(function*(){const c=(yield(0,Q.A)(t,{responseType:"image"})).data,E=document.createElement("canvas");E.width=c.width,E.height=c.height;const x=E.getContext("2d");x.drawImage(c,0,0);const b=x.getImageData(0,0,E.width,E.height);if(i.spatialReference.equals(_))return{bitmapData:b,extent:i};const M=l.reprojectBitmapData({bitmapData:b,extent:i},_);return{bitmapData:M.bitmapData,extent:M.extent}})()}destroy(){this._ownsRctx?(a._instanceRefCount--,0===a._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),a._instance=null)):(this._quad.dispose(),this._program.dispose())}}return a._instanceRefCount=0,a})();class rt{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let R=class extends((0,O.e)(H.A)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new C.l,this._kmlVisualData=new rt,this._fetchController=null,this.allVisiblePoints=new B.Y,this.allVisiblePolylines=new B.Y,this.allVisiblePolygons=new B.Y,this.allVisibleMapImages=new g.A}hitTest(a,d){var t=this;return(0,f.A)(function*(){var i,_,l;const c=t.layer;return[null===(i=t._pointsView)||void 0===i?void 0:i.hitTest(a),null===(_=t._polylinesView)||void 0===_?void 0:_.hitTest(a),null===(l=t._polygonsView)||void 0===l?void 0:l.hitTest(a)].flat().filter(Boolean).map(E=>(E.layer=c,E.sourceLayer=c,{type:"graphic",graphic:E,layer:c,mapPoint:a}))})()}update(a){this._polygonsView&&this._polygonsView.processUpdate(a),this._polylinesView&&this._polylinesView.processUpdate(a),this._pointsView&&this._pointsView.processUpdate(a)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new G.A({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new K.A(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new G.A({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new K.A(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new G.A({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new K.A(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",a=>{a.added.forEach(d=>this._addMapImage(d)),a.removed.forEach(d=>this._removeMapImage(d))}),(0,o.wB)(()=>this.layer.visibleSublayers,a=>{for(const[d,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const d of a){const t=this._kmlVisualData.allSublayers.get(d.id);t&&(t.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new at}detach(){this._fetchController=(0,v.DC)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,v.pR)(this._polygonsView),this._polylinesView=(0,v.pR)(this._polylinesView),this._pointsView=(0,v.pR)(this._pointsView),this._imageReprojector=(0,v.pR)(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(a){var d,t;(null!==(d=this.view.spatialReference)&&void 0!==d&&d.isWGS84||null!==(t=this.view.spatialReference)&&void 0!==t&&t.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(a.href,p.A.fromJSON(a.extent),this.view.spatialReference).then(i=>{const _=new F.mb(i.bitmapData);_.x=i.extent.xmin,_.y=i.extent.ymax,_.resolution=i.extent.width/i.bitmapData.width,_.rotation=a.rotation,this._mapImageContainer.addChild(_),this._bitmapIndex.set(a,_)})}_getViewDependentUrl(a,d){return(0,f.A)(function*(){const{viewFormat:t,viewBoundScale:i,httpQuery:_}=a;if(null!=t){if(null==d)throw new Error("Loading this network link requires a view state.");let l;if(yield(0,D.load)(),null!=i&&1!==i){const X=new p.A(d.extent);X.expand(i),l=X}else l=d.extent;l=(0,D.project)(l,j.A.WGS84);const c=(0,D.project)(l,j.A.WebMercator),E=l.xmin,x=l.xmax,b=l.ymin,M=l.ymax,S=d.size[0]*d.pixelRatio,ct=d.size[1]*d.pixelRatio,z=Math.max(c.width,c.height),$={"[bboxWest]":E.toString(),"[bboxEast]":x.toString(),"[bboxSouth]":b.toString(),"[bboxNorth]":M.toString(),"[lookatLon]":l.center.x.toString(),"[lookatLat]":l.center.y.toString(),"[lookatRange]":z.toString(),"[lookatTilt]":"0","[lookatHeading]":d.rotation.toString(),"[lookatTerrainLon]":l.center.x.toString(),"[lookatTerrainLat]":l.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":l.center.x.toString(),"[cameraLat]":l.center.y.toString(),"[cameraAlt]":z.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":S.toString(),"[vertPixels]":ct.toString(),"[terrainEnabled]":"0","[clientVersion]":m.rE,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},J=X=>{for(const N in X){let V;for(V in $)X[N]=X[N].replace(V,$[V])}},P=(0,h.zf)(t);J(P);let Z={};null!=_&&(Z=(0,h.zf)(_),J(Z));const q=(0,k.Dl)(a.href);return q.query={...q.query,...P,...Z},`${q.path}?${(0,h.x0)(P)}`}return a.href})()}_fetchService(a){var d=this;return(0,f.A)(function*(){const t=new rt;yield d._loadVisualData(d.layer.url,t,a),d._kmlVisualData=t,d._refreshCollections()})()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(a=>this._isSublayerVisible(a.sublayerId)).map(({item:a})=>a))}_isSublayerVisible(a){const d=this._kmlVisualData.allSublayers.get(a);return!(null==d||!d.visibility)&&(-1===d.parentFolderId||this._isSublayerVisible(d.parentFolderId))}_loadVisualData(a,d,t){var i=this;return this._fetchParsedKML(a,t).then(function(){var _=(0,f.A)(function*(l){for(const c of l.sublayers){d.allSublayers.set(c.id,c);const E=c.points?yield(0,L.Sp)(c.points):[],x=c.polylines?yield(0,L.Sp)(c.polylines):[],b=c.polygons?yield(0,L.Sp)(c.polygons):[],M=c.mapImages||[];if(d.allPoints.push(...E.map(S=>({item:S,sublayerId:c.id}))),d.allPolylines.push(...x.map(S=>({item:S,sublayerId:c.id}))),d.allPolygons.push(...b.map(S=>({item:S,sublayerId:c.id}))),d.allMapImages.push(...M.map(S=>({item:S,sublayerId:c.id}))),c.networkLink){const S=yield i._getViewDependentUrl(c.networkLink,i.view.state);yield i._loadVisualData(S,d,t)}}});return function(l){return _.apply(this,arguments)}}())}_fetchParsedKML(a,d){return(0,L.Ox)(a,this.layer.spatialReference,this.layer.refreshInterval,d).then(t=>(0,L._4)(t.data))}_removeMapImage(a){const d=this._bitmapIndex.get(a);d&&(this._mapImageContainer.removeChild(d),this._bitmapIndex.delete(a))}};(0,r._)([(0,y.MZ)()],R.prototype,"_pointsView",void 0),(0,r._)([(0,y.MZ)()],R.prototype,"_polylinesView",void 0),(0,r._)([(0,y.MZ)()],R.prototype,"_polygonsView",void 0),(0,r._)([(0,y.MZ)()],R.prototype,"updating",void 0),R=(0,r._)([(0,w.$)("esri.views.2d.layers.KMLLayerView2D")],R);const ut=R},93093:(U,T,s)=>{s.d(T,{H:()=>m,Y:()=>r});const r=class f{};function m(g,...v){let o="";for(let h=0;h<v.length;h++)o+=g[h]+v[h];return o+=g[g.length-1],o}var g;(g=m||(m={})).int=function v(h){return Math.round(h).toString()},g.float=function o(h){return h.toPrecision(8)}},14356:(U,T,s)=>{s.d(T,{AJ:()=>o,K_:()=>w,V0:()=>g,aB:()=>A,ez:()=>h,xt:()=>I});var f=s(83415),r=s(50915),m=s(41396);const g=(0,m.p3)(r.dn.SRC_ALPHA,r.dn.ONE,r.dn.ONE_MINUS_SRC_ALPHA,r.dn.ONE_MINUS_SRC_ALPHA),v=(0,m.ox)(r.dn.ONE,r.dn.ONE),o=(0,m.ox)(r.dn.ZERO,r.dn.ONE_MINUS_SRC_ALPHA);function h(p){return p===f.y.FrontFace?null:p===f.y.Alpha?o:v}const I=5e5,e={factor:-1,units:-2};function A(p){return p?e:null}function w(p,D=r.MT.LESS){return p===f.y.NONE||p===f.y.FrontFace?D:r.MT.LEQUAL}},83415:(U,T,s)=>{var f,r;s.d(T,{y:()=>f}),(r=f||(f={}))[r.Color=0]="Color",r[r.Alpha=1]="Alpha",r[r.FrontFace=2]="FrontFace",r[r.NONE=3]="NONE",r[r.COUNT=4]="COUNT"},67496:(U,T,s)=>{var f,r,m,g,v,o,h,y,I,e;s.d(T,{Am:()=>g,ID:()=>y,JS:()=>I,Mg:()=>o,dd:()=>v,it:()=>r,s2:()=>f,sf:()=>h}),(e=f||(f={}))[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT",function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(r||(r={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(m||(m={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(g||(g={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(v||(v={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(h||(h={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(y||(y={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(I||(I={}))},52274:(U,T,s)=>{s.d(T,{_:()=>r});var f=s(11432);class r{constructor(){this._result=!1}dispose(){this._program=(0,f.WD)(this._program)}get result(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}},54949:(U,T,s)=>{s.d(T,{_R:()=>m});class f{constructor(v,o,h,y,I,e,A,w,p){this.createQuery=v,this.deleteQuery=o,this.resultAvailable=h,this.getResult=y,this.disjoint=I,this.beginTimeElapsed=e,this.endTimeElapsed=A,this.createTimestamp=w,this.timestampBits=p}}let r=!1;function m(g,v){if(v.disjointTimerQuery)return null;let o=g.getExtension("EXT_disjoint_timer_query_webgl2");return o?new f(()=>g.createQuery(),h=>{g.deleteQuery(h),r=!1},h=>g.getQueryParameter(h,g.QUERY_RESULT_AVAILABLE),h=>g.getQueryParameter(h,g.QUERY_RESULT),()=>g.getParameter(o.GPU_DISJOINT_EXT),h=>{r||(r=!0,g.beginQuery(o.TIME_ELAPSED_EXT,h))},()=>{g.endQuery(o.TIME_ELAPSED_EXT),r=!1},h=>o.queryCounterEXT(h,o.TIMESTAMP_EXT),()=>g.getQuery(o.TIMESTAMP_EXT,o.QUERY_COUNTER_BITS_EXT)):(o=g.getExtension("EXT_disjoint_timer_query"),o?new f(()=>o.createQueryEXT(),h=>{o.deleteQueryEXT(h),r=!1},h=>o.getQueryObjectEXT(h,o.QUERY_RESULT_AVAILABLE_EXT),h=>o.getQueryObjectEXT(h,o.QUERY_RESULT_EXT),()=>g.getParameter(o.GPU_DISJOINT_EXT),h=>{r||(r=!0,o.beginQueryEXT(o.TIME_ELAPSED_EXT,h))},()=>{o.endQueryEXT(o.TIME_ELAPSED_EXT),r=!1},h=>o.queryCounterEXT(h,o.TIMESTAMP_EXT),()=>o.getQueryEXT(o.TIMESTAMP_EXT,o.QUERY_COUNTER_BITS_EXT)):null)}},41396:(U,T,s)=>{s.d(T,{Ey:()=>F,Ms:()=>d,Xt:()=>h,kn:()=>y,ox:()=>m,p3:()=>g,wE:()=>I});var f=s(67496),r=s(50915);function m(t,i,_=r.Tb.ADD,l=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:i,dstAlpha:i,opRgb:_,opAlpha:_,color:{r:l[0],g:l[1],b:l[2],a:l[3]}}}function g(t,i,_,l,c=r.Tb.ADD,E=r.Tb.ADD,x=[0,0,0,0]){return{srcRgb:t,srcAlpha:i,dstRgb:_,dstAlpha:l,opRgb:c,opAlpha:E,color:{r:x[0],g:x[1],b:x[2],a:x[3]}}}const v={face:r.Y7.BACK,mode:r.Ac.CCW},o={face:r.Y7.FRONT,mode:r.Ac.CCW},h=t=>t===f.s2.Back?v:t===f.s2.Front?o:null,y={zNear:0,zFar:1},I={r:!0,g:!0,b:!0,a:!0};function e(t){return K.intern(t)}function A(t){return H.intern(t)}function w(t){return tt.intern(t)}function p(t){return lt.intern(t)}function D(t){return ot.intern(t)}function j(t){return ht.intern(t)}function L(t){return dt.intern(t)}function k(t){return st.intern(t)}function B(t){return rt.intern(t)}function F(t){return ut.intern(t)}class C{constructor(i,_){this._makeKey=i,this._makeRef=_,this._interns=new Map}intern(i){var _;if(!i)return null;const l=this._makeKey(i),c=this._interns;return c.has(l)||c.set(l,this._makeRef(i)),null!==(_=c.get(l))&&void 0!==_?_:null}}function O(t){return"["+t.join(",")+"]"}const K=new C(G,t=>({__tag:"Blending",...t}));function G(t){return t?O([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const H=new C(Q,t=>({__tag:"Culling",...t}));function Q(t){return t?O([t.face,t.mode]):null}const tt=new C(Y,t=>({__tag:"PolygonOffset",...t}));function Y(t){return t?O([t.factor,t.units]):null}const lt=new C(et,t=>({__tag:"DepthTest",...t}));function et(t){return t?O([t.func]):null}const ot=new C(W,t=>({__tag:"StencilTest",...t}));function W(t){return t?O([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const ht=new C(it,t=>({__tag:"DepthWrite",...t}));function it(t){return t?O([t.zNear,t.zFar]):null}const dt=new C(nt,t=>({__tag:"ColorWrite",...t}));function nt(t){return t?O([t.r,t.g,t.b,t.a]):null}const st=new C(at,t=>({__tag:"StencilWrite",...t}));function at(t){return t?O([t.mask]):null}const rt=new C(R,t=>({__tag:"DrawBuffers",...t}));function R(t){return t?O(t.buffers):null}const ut=new C(function a(t){return t?O([G(t.blending),Q(t.culling),Y(t.polygonOffset),et(t.depthTest),W(t.stencilTest),it(t.depthWrite),nt(t.colorWrite),at(t.stencilWrite),R(t.drawBuffers)]):null},t=>({blending:e(t.blending),culling:A(t.culling),polygonOffset:w(t.polygonOffset),depthTest:p(t.depthTest),stencilTest:D(t.stencilTest),depthWrite:j(t.depthWrite),colorWrite:L(t.colorWrite),stencilWrite:k(t.stencilWrite),drawBuffers:B(t.drawBuffers)}));class d{constructor(i){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=i}setPipeline(i){(this._pipelineInvalid||i!==this._pipeline)&&(this._setBlending(i.blending),this._setCulling(i.culling),this._setPolygonOffset(i.polygonOffset),this._setDepthTest(i.depthTest),this._setStencilTest(i.stencilTest),this._setDepthWrite(i.depthWrite),this._setColorWrite(i.colorWrite),this._setStencilWrite(i.stencilWrite),this._setDrawBuffers(i.drawBuffers),this._pipeline=i),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(i){this._blending=this._setSubState(i,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(i){this._culling=this._setSubState(i,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(i){this._polygonOffset=this._setSubState(i,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(i){this._depthTest=this._setSubState(i,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(i){this._stencilTest=this._setSubState(i,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(i){this._depthWrite=this._setSubState(i,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(i){this._colorWrite=this._setSubState(i,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(i){this._stencilWrite=this._setSubState(i,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(i){this._drawBuffers=this._setSubState(i,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(i,_,l,c){return(l||i!==_)&&(c(i),this._pipelineInvalid=!0),i}}},20047:(U,T,s)=>{s.d(T,{H:()=>I});var f=s(9599),r=s(32788),m=s(50915),g=s(79061),v=s(26136),o=s(4931),h=s(45513),y=s(52274);class I extends y._{constructor(w){super(),this._rctx=w,this._program=w.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(w){const p=this._rctx;if(!p.gl)return w.dispose(),!0;const D=new o.R(1);D.wrapMode=m.pF.CLAMP_TO_EDGE,D.samplingMode=m.Cj.NEAREST;const j=new g.H(p,D),L=r.g.createVertex(p,m._U.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),k=new h.Z(p,new Map([["a_pos",0]]),f.VS,{geometry:L}),B=new o.R;B.samplingMode=m.Cj.LINEAR,B.wrapMode=m.pF.CLAMP_TO_EDGE;const F=new v.g(p,B,e);p.useProgram(w),p.bindTexture(F,0),w.setUniform1i("u_texture",0);const C=p.getBoundFramebufferObject(),{x:O,y:K,width:G,height:H}=p.getViewport();p.bindFramebuffer(j),p.setViewport(0,0,1,1),p.setClearColor(0,0,0,0),p.setBlendingEnabled(!1),p.clearSafe(m.hn.COLOR_BUFFER_BIT),p.bindVAO(k),p.drawArrays(m.WR.TRIANGLE_STRIP,0,4);const Q=new Uint8Array(4);return j.readPixels(0,0,1,1,m.Ab.RGBA,m.ld.UNSIGNED_BYTE,Q),k.dispose(),j.dispose(),F.dispose(),p.setViewport(O,K,G,H),p.bindFramebuffer(C),255!==Q[0]}}const e=new Image;e.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",e.width=5,e.height=5,e.decode()}}]);