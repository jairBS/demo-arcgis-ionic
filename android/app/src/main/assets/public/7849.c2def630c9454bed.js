"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7849],{12225:(be,ue,y)=>{function T(){return new Float32Array(3)}function A(C){const F=new Float32Array(3);return F[0]=C[0],F[1]=C[1],F[2]=C[2],F}function N(C,F,B){const P=new Float32Array(3);return P[0]=C,P[1]=F,P[2]=B,P}function w(){return T()}function Z(){return N(1,1,1)}function te(){return N(1,0,0)}function se(){return N(0,1,0)}function ne(){return N(0,0,1)}y.d(ue,{fA:()=>N,o8:()=>A,vt:()=>T});const O=w(),fe=Z(),oe=te(),j=se(),$=ne();Object.freeze(Object.defineProperty({__proto__:null,ONES:fe,UNIT_X:oe,UNIT_Y:j,UNIT_Z:$,ZEROS:O,clone:A,create:T,createView:function de(C,F){return new Float32Array(C,F,3)},fromValues:N,ones:Z,unitX:te,unitY:se,unitZ:ne,zeros:w},Symbol.toStringTag,{value:"Module"}))},15584:(be,ue,y)=>{y.d(ue,{b3:()=>ne,jZ:()=>se});var T=y(71065),A=y(51995),N=y(83065),de=y(15268),w=y(61320),Z=y(20914),te=y(58701);function se(f){return O(f,!0)}function ne(f){return O(f,!1)}function O(f,d){if(null==f)return null;const p=f.spatialReference,c=(0,te.Vp)(p),g=(0,T.Wj)(f)?f.toJSON():f;if(!c)return g;const _=(0,te.K8)(p)?102100:4326,M=Z.j7[_].maxX,D=Z.j7[_].minX;if((0,w.fT)(g))return oe(g,M,D);if((0,w.U9)(g))return g.points=g.points.map(U=>oe(U,M,D)),g;if((0,w.ZC)(g))return function fe(f,d){if(!d)return f;const p=function j(f,d){const p=[],{ymin:c,ymax:g,xmin:_,xmax:M}=f,D=f.xmax-f.xmin,[U,G]=d.valid,{x:z,frameId:L}=$(f.xmin,d),{x:Q,frameId:W}=$(f.xmax,d),X=z===Q&&D>0;if(D>2*G){const ce={xmin:_<M?z:Q,ymin:c,xmax:G,ymax:g},Y={xmin:U,ymin:c,xmax:_<M?Q:z,ymax:g},K={xmin:0,ymin:c,xmax:G,ymax:g},me={xmin:U,ymin:c,xmax:0,ymax:g},ae=[],he=[];ie(ce,K)&&ae.push(L),ie(ce,me)&&he.push(L),ie(Y,K)&&ae.push(W),ie(Y,me)&&he.push(W);for(let le=L+1;le<W;le++)ae.push(le),he.push(le);p.push(new B(ce,[L]),new B(Y,[W]),new B(K,ae),new B(me,he))}else z>Q||X?p.push(new B({xmin:z,ymin:c,xmax:G,ymax:g},[L]),new B({xmin:U,ymin:c,xmax:Q,ymax:g},[W])):p.push(new B({xmin:z,ymin:c,xmax:Q,ymax:g},[L]));return p}(f,d).map(c=>c.extent);return p.length<2?p[0]||f:p.length>2?(f.xmin=d.valid[0],f.xmax=d.valid[1],f):{rings:p.map(c=>[[c.xmin,c.ymin],[c.xmin,c.ymax],[c.xmax,c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]])}}(g,c);if((0,w.Bi)(g)||(0,w.Rg)(g)){const U=(0,N.Rg)(P,g),G={xmin:U[0],ymin:U[1],xmax:U[2],ymax:U[3]},z=(0,Z.kd)(G.xmin,D)*(2*M),L=0===z?g:(0,Z.kS)(g,z);return G.xmin+=z,G.xmax+=z,G.xmax>M?F(L,M,d):G.xmin<D?F(L,D,d):L}return g}function oe(f,d,p){if(Array.isArray(f)){const c=f[0];if(c>d){const g=(0,Z.kd)(c,d);f[0]=c+g*(-2*d)}else if(c<p){const g=(0,Z.kd)(c,p);f[0]=c+g*(-2*p)}}else{const c=f.x;if(c>d){const g=(0,Z.kd)(c,d);f.x+=g*(-2*d)}else if(c<p){const g=(0,Z.kd)(c,p);f.x+=g*(-2*p)}}return f}function $(f,d){const[p,c]=d.valid,g=2*c;let _,M=0;return f>c?(_=Math.ceil(Math.abs(f-c)/g),f-=_*g,M=_):f<p&&(_=Math.ceil(Math.abs(f-p)/g),f+=_*g,M=-_),{x:f,frameId:M}}function ie(f,d){const{xmin:p,ymin:c,xmax:g,ymax:_}=d;return C(f,p,c)&&C(f,p,_)&&C(f,g,_)&&C(f,g,c)}function C(f,d,p){return d>=f.xmin&&d<=f.xmax&&p>=f.ymin&&p<=f.ymax}function F(f,d,p=!0){const c=!(0,w.Rg)(f);if(c&&(0,de.m3)(f),p)return(new ge).cut(f,d);const g=c?f.rings:f.paths,_=c?4:2,M=g.length,D=-2*d;for(let U=0;U<M;U++){const G=g[U];if(G&&G.length>=_){const z=[];for(const L of G)z.push([L[0]+D,L[1]]);g.push(z)}}return c?f.rings=g:f.paths=g,f}class B{constructor(d,p){this.extent=d,this.frameIds=p}}const P=(0,A.vt)();class ge{constructor(){this._linesIn=[],this._linesOut=[]}cut(d,p){let c;if(this._xCut=p,d.rings)this._closed=!0,c=d.rings,this._minPts=4;else{if(!d.paths)return null;this._closed=!1,c=d.paths,this._minPts=2}for(const _ of c){if(!_||_.length<this._minPts)continue;let M=!0;for(const D of _)M?(this.moveTo(D),M=!1):this.lineTo(D);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),c=[];for(const _ of this._linesIn)_&&_.length>=this._minPts&&c.push(_);const g=-2*this._xCut;for(const _ of this._linesOut)if(_&&_.length>=this._minPts){for(const M of _)M[0]+=g;c.push(_)}return this._closed?d.rings=c:d.paths=c,d}moveTo(d){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(d[0]),this._moveTo(d[0],d[1],this._prevSide),this._prevPt=d,this._firstPt=d}lineTo(d){const p=this._side(d[0]);if(p*this._prevSide==-1){const c=this._intersect(this._prevPt,d);this._lineTo(this._xCut,c,0),this._prevSide=0,this._lineTo(d[0],d[1],p)}else this._lineTo(d[0],d[1],p);this._prevSide=p,this._prevPt=d}close(){const d=this._firstPt,p=this._prevPt;d[0]===p[0]&&d[1]===p[1]||this.lineTo(d),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(d,p,c){this._closed?(this._lineIn.push([c<=0?d:this._xCut,p]),this._lineOut.push([c>=0?d:this._xCut,p])):(c<=0&&this._lineIn.push([d,p]),c>=0&&this._lineOut.push([d,p]))}_lineTo(d,p,c){this._closed?(this._addPolyVertex(this._lineIn,c<=0?d:this._xCut,p),this._addPolyVertex(this._lineOut,c>=0?d:this._xCut,p)):c<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([d,p])):c>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([d,p])):this._prevSide<0?(this._lineIn.push([d,p]),this._lineOut.push([d,p])):this._prevSide>0&&(this._lineOut.push([d,p]),this._lineIn.push([d,p]))}_addPolyVertex(d,p,c){const g=d.length;g>1&&d[g-1][0]===p&&d[g-2][0]===p?d[g-1][1]=c:d.push([p,c])}_checkClosingPt(d){const p=d.length;p>3&&d[0][0]===this._xCut&&d[p-2][0]===this._xCut&&d[1][0]===this._xCut&&(d[0][1]=d[p-2][1],d.pop())}_side(d){return d<this._xCut?-1:d>this._xCut?1:0}_intersect(d,p){return d[1]+(this._xCut-d[0])/(p[0]-d[0])*(p[1]-d[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}},80745:(be,ue,y)=>{y.d(ue,{A:()=>Ee});var T=y(10467),A=y(8189),N=y(98877),de=y(89952),w=y(3248),Z=y(3046),te=y(11432),se=y(56492),ne=y(48900),O=y(85211),oe=(y(35150),y(76576)),j=y(51995),$=y(61320),ie=y(73258),C=y(26747),F=y(1684),B=y(91644),P=y(47669),ge=y(81406),f=y(6690),d=y(86220),p=y(13220),c=y(34155);function _(){return(_=(0,T.A)(function*(a,n,h){const l=[],u={scaleInfo:(0,c.TY)(a),scaleExpression:null};for(const m of n)switch(m.type){case"marker":l.push(...(0,c.Zi)(h.instances.marker,m,p.Dk,u));break;case"fill":null==m.spriteRasterizationParam?l.push(...(0,c.Gn)(h.instances.fill,m,u)):l.push(...(0,c.oF)(h.instances.complexFill,m,!1,u));break;case"line":m.spriteRasterizationParam?l.push(...(0,c.EM)(h.instances.texturedLine,m,!1,u)):l.push(...(0,c.NZ)(h.instances.line,m,!1,u));break;case"text":l.push(...(0,c.IQ)(h.instances.text,m,p.Dk,u))}return l})).apply(this,arguments)}var M=y(77190),D=y(69522),U=y(84836),G=y(10903),z=y(85452),L=y(34650),Q=y(39239),W=y(31732),X=y(13682),ce=y(27420);class Y extends ce.Y{static from(n,h,l){return new Y(n,h,l)}constructor(n,h,l){super(l),this._items=n,this._tile=h,this._index=-1,this._cachedGeometry=null;const u=h.lod;u.wrap&&(this._wrappingInfo={worldSizeX:u.worldSize[0]})}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){var n,h;return null!==(n=null===(h=this._current.symbolResource)||void 0===h?void 0:h.symbolInfo.meshWriters)&&void 0!==n?n:[]}hasField(n){return null!=this._current.attributes[n]}field(n){return this.readAttribute(n)}get geometryType(){const n=(0,$.$B)(this._current.geometry);return"esriGeometryPoint"===n?"esriGeometryMultipoint":n}getCursor(){return this.copy()}copy(){const n=new Y(this._items,this._tile,this.metadata);return this.copyInto(n),n}copyInto(n){super.copyInto(n),n._cachedGeometry=this._cachedGeometry,n._index=this._index}get fields(){throw new Error("Fields reading not supported to graphics.")}get hasFeatures(){return!!this._items.length}get hasNext(){return this._index+1<this._items.length}get exceededTransferLimit(){throw new Error("InternalError: exceededTransferLimit not implemented for graphics.")}get hasZ(){return!1}get hasM(){return!1}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let n="";for(const h in this._current.attributes)n+=this._current.attributes[h];return n}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(n){throw new Error("InternalError: Setting displayId not supported for graphics.")}setIndex(n){this._index=n}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw new Error("InternalError: readGeometryArea not supported for graphics.")}_readGeometry(){if(!this._cachedGeometry){let n=(0,W.Ux)(this._current.projectedGeometry,this.hasZ,this.hasM);if("esriGeometryPolyline"===this.geometryType&&(n=(0,W.kz)(new X.A,n,this.hasZ,this.hasM,this.geometryType,this._tile.transform.scale[0])),this._cachedGeometry=(0,W.Nl)(new X.A,n,this.hasZ,this.hasM,this.geometryType,this._tile.transform),!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry)}return this._cachedGeometry}_wrapGeometry(n){if(!this._wrappingInfo)return;const{worldSizeX:h}=this._wrappingInfo;if(n.isPoint)return 1===h?(n.coords.push(P.CQ,0),n.coords.push(2*-P.CQ,0),void n.lengths.push(3)):2===h?(n.coords.push(2*P.CQ,0),n.coords.push(4*-P.CQ,0),void n.lengths.push(3)):void this._wrapVertex(n.coords,0,2,h);if("esriGeometryMultipoint"===this.geometryType){if(1===h){const l=n.coords.slice();l[0]-=512;const u=n.coords.slice();u[0]+=512,n.coords.push(...l,...u);const m=n.lengths[0];return void n.lengths.push(m,m)}this._wrapVertex(n.coords,0,2,h)}}_wrapVertex(n,h,l,u){const m=h*l,v=n[m];v<-P.CQ*(u-2)?n[m]=v+P.CQ*u:v>P.CQ*(u-1)&&(n[m]=v-P.CQ*u)}_readX(){const n=this._readGeometry();return null!=n?n.coords[0]:0}_readY(){const n=this._readGeometry();return null!=n?n.coords[1]:0}_readServerCentroid(){switch(this.geometryType){case"esriGeometryPolygon":{const n=(0,Q.l8)(this._current.projectedGeometry),h=new X.A([],n);return(0,W.Nl)(new X.A,h,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}case"esriGeometryPolyline":{const h=(0,Q.S8)(this._current.projectedGeometry.paths,this.hasZ),l=new X.A([],h);return(0,W.Nl)(new X.A,l,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}}return null}_readAttribute(n,h){const l=this._current.attributes[n];if(void 0!==l)return l;const u=n.toLowerCase();for(const m in this._current.attributes)if(m.toLowerCase()===u)return this._current.attributes[m]}_readAttributes(){return this._current.attributes}}var K=y(67685),me=y(77413),ae=y(83065),he=y(77098),le=y(58701),Te=y(91767),Re=y(15268),Ae=y(15584),Se=y(88840),Ce=y(55861);function we(a){if(!a)return null;const{xmin:n,ymin:h,xmax:l,ymax:u,spatialReference:m}=a;return new Ce.A({rings:[[[n,h],[n,u],[l,u],[l,h],[n,h]]],spatialReference:m})}y(42058);class _e{static fromGraphic(n,h,l,u){return new _e(n.geometry,h,n.attributes,n.visible,n.uid,l,u)}constructor(n,h,l,u,m,v,I){this.geometry=n,this.symbol=h,this.attributes=l,this.visible=u,this.objectId=m,this.zOrder=v,this.displayId=I,this.bounds=(0,j.vt)(),this.prevBounds=(0,j.vt)(),this.size=[0,0,0,0]}get linearCIM(){var n;return null===(n=this.symbolResource)||void 0===n?void 0:n.symbolInfo.linearCIM}update(n,h,l){return(this.geometry!==n.geometry||this.attributes!==n.attributes||this.symbol!==h||this.zOrder!==l||this.visible!==n.visible)&&(this.prevBounds=this.bounds,this.bounds=(0,j.vt)(),this.zOrder=l,this.geometry=n.geometry,this.attributes=n.attributes,this.symbol=h,this.visible=n.visible,this.symbolResource=null,this.projectedGeometry=null,!0)}projectAndNormalize(n){var h=this;return(0,T.A)(function*(){let l=h.geometry;if(!l||!l.spatialReference||"mesh"===l.type)return;"extent"===l.type&&(l=we(l)),yield(0,Se.Nk)(l.spatialReference,n);const u=(0,Ae.b3)(l);if(!u)return;const m=(0,Se.Cv)(u,l.spatialReference,n);m&&(0,Re.uC)(m),h.projectedGeometry=(0,$.ZC)(m)?we(m):m})()}}class Oe{constructor(n,h,l){this.added=n,this.updated=h,this.removed=l}hasAnyUpdate(){return!!(this.added.length||this.updated.length||this.removed.length)}}function Pe(a,n){return n.zOrder-a.zOrder}class Ue{constructor(n,h,l,u,m){this._items=new Map,this._boundsDirty=!1,this._outSpatialReference=n,this._cimResourceManager=h,this._hittestDrawHelper=new Te.CK(h),this._tileInfoView=l,this._store=m;const v=l.getClosestInfoForScale(u);this._resolution=this._tileInfoView.getTileResolution(v.level)}items(){return this._items.values()}getItem(n){return this._items.get(n)}update(n,h,l){var u=this;return(0,T.A)(function*(){const m=[],v=[],I=[],x=new Set,R=[];let S=0;for(const b of n.items){S++;const E=b.uid,H=u._items.get(E),k=h(b);if(x.add(E),H){H.update(b,k,S)&&(v.push(H),R.push(u._updateItem(H,l)));continue}const q=u._store.createDisplayIdForObjectId(E),re=_e.fromGraphic(b,k,S,q);R.push(u._updateItem(re,l)),u._items.set(re.objectId,re),m.push(re)}for(const[b,E]of u._items.entries())x.has(b)||(u._store.releaseDisplayIdForObjectId(b),u._items.delete(b),I.push(E));return yield Promise.all(R),u._index=null,new Oe(m,v,I)})()}updateLevel(n){this._resolution!==n&&(this._index=null,this._boundsDirty=!0,this._resolution=n)}hitTest(n,h,l,u,m){const v=(0,w.A)("esri-mobile"),I=(0,w.A)(v?"hittest-2d-mobile-tolerance":"hittest-2d-desktop-tolerance"),x=I+(v?0:(0,w.A)("hittest-2d-small-symbol-tolerance"));n=(0,he.mT)(n,this._tileInfoView.spatialReference);const R=u*window.devicePixelRatio*x,S=(0,j.vt)();S[0]=n-R,S[1]=h-R,S[2]=n+R,S[3]=h+R;const b=u*window.devicePixelRatio*I,E=(0,j.vt)();E[0]=n-b,E[1]=h-b,E[2]=n+b,E[3]=h+b;const H=.5*u*(x+50),k=this._searchIndex(n-H,h-H,n+H,h+H);if(!k||0===k.length)return[];const q=[],re=(0,j.vt)(),pe=(0,j.vt)();for(const ee of k){if(!ee.visible)continue;const{projectedGeometry:Ie,symbolResource:ye}=ee;this._getSymbolBounds(re,ye,Ie,pe,m),pe[3]=pe[2]=pe[1]=pe[0]=0,(0,j.HY)(re,S)&&q.push(ee)}if(0===q.length)return[];const je=this._hittestDrawHelper,xe=[];for(const ee of q){const{projectedGeometry:Ie,symbolResource:ye}=ee;if(!ye)continue;const{textInfo:De,symbolInfo:Le}=ye;je.hitTest(E,Le.cimSymbol.symbol,Ie,De,m,u)&&xe.push(ee)}return xe.sort(Pe),xe.map(ee=>ee.objectId)}queryItems(n){return 0===this._items.size?[]:this._searchForItems(n)}clear(){this._items.clear(),this._index=null}_updateItem(n,h){var l=this;return(0,T.A)(function*(){yield n.projectAndNormalize(l._outSpatialReference),yield h(n);const{size:u}=n;u[0]=u[1]=u[2]=u[3]=0,l._getSymbolBounds(n.bounds,n.symbolResource,n.projectedGeometry,n.size,0)})()}_searchIndex(n,h,l,u){return this._boundsDirty&&(this._items.forEach(m=>this._getSymbolBounds(m.bounds,m.symbolResource,m.projectedGeometry,m.size,0)),this._boundsDirty=!1),this._index||(this._index=(0,me.r)(9,m=>({minX:m.bounds[0],minY:m.bounds[1],maxX:m.bounds[2],maxY:m.bounds[3]})),this._index.load(Array.from(this._items.values()))),this._index.search({minX:n,minY:h,maxX:l,maxY:u})}_searchForItems(n){const h=this._tileInfoView.spatialReference,l=n.bounds,u=(0,le.Vp)(h);if(u&&h.isWrappable){const[m,v]=u.valid,I=Math.abs(l[2]-v)<1e-5,x=Math.abs(l[0]-m)<1e-5;if((!I||!x)&&(I||x)){const R=n.resolution;let S;S=(0,j.vt)(I?[m,l[1],m+50*R,l[3]]:[v-50*R,l[1],v,l[3]]);const b=this._searchIndex(l[0],l[1],l[2],l[3]),E=this._searchIndex(S[0],S[1],S[2],S[3]);return[...new Set([...b,...E])]}}return this._searchIndex(l[0],l[1],l[2],l[3])}_getSymbolBounds(n,h,l,u,m){if(!h||!h.symbolInfo.linearCIM||!l)return null;if(n||(n=(0,j.vt)()),(0,ae.Rg)(n,l),!u||0===u[0]&&0===u[1]&&0===u[2]&&0===u[3]){const{textInfo:x,symbolInfo:R}=h;u||(u=[0,0,0,0]);const b=C.Sc.getSymbolInflateSize(u,R.cimSymbol.symbol,this._cimResourceManager,m,x);u[0]=(0,K.Lz)(b[0]),u[1]=(0,K.Lz)(b[1]),u[2]=(0,K.Lz)(b[2]),u[3]=(0,K.Lz)(b[3])}const v=this._resolution,I=C.Sc.safeSize(u);return n[0]-=I*v,n[1]-=I*v,n[2]+=I*v,n[3]+=I*v,n}}var Ge=y(31411),ze=y(35547);class J{static getOrCreate(n,h,l){let u=h.get(n.id);return u||(u=new J(n,l),h.set(n.id,u)),u}static fromItems(n,h,l){const u=new J(n,l);return u.addedOrModified.push(...h),u}constructor(n,h){this.tile=n,this.metadata=h,this.addedOrModified=[],this.removed=[]}get reader(){return this._reader||(this._reader=Y.from(this.addedOrModified,this.tile,this.metadata)),this._reader}}let V=class extends((0,Z.sA)(N.A)){constructor(a){super(a),this._attached=!1,this._tiles=new Map,this._controller=new AbortController,this._hashToSymbolInfo=new Map,this._lastCleanup=performance.now(),this._cleanupRequired=!0,this.lastUpdateId=-1,this.renderer=null,this._updateTracking=new ze.F({debugName:"GraphicsView2D"}),this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this._commandQueue=new Ge.A({process:n=>{switch(n.type){case"processed-edit":throw new Error("InternalError: Unsupported command");case"update":return this._update()}}}),this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy(),this.view=null,this.renderer=null,this._set("graphics",null),this._controller.abort(),this._graphicStore.clear(),this._attributeStore=null,this._hashToSymbolInfo.clear(),this._updateTracking.destroy(),this._commandQueue.destroy()}_initAttributeStore(){var h,a=this;this._storage=new z.l({spatialReference:this.view.spatialReference,fields:new ie.A}),this._attributeStore=new G.K({isLocal:!0,update:(h=(0,T.A)(function*(l){(0,w.A)("esri-2d-update-debug")&&console.debug(`[Id: ${a.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:l});const u=a.container.attributeView.requestUpdate(l);a.container.requestRender(),yield u,(0,w.A)("esri-2d-update-debug")&&console.debug(`[Id: ${a.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:l})}),function(u){return h.apply(this,arguments)})});const n=(0,U.T9)(null,[]);this._attributeStore.update(n,this._storage,null),this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore(),this._metadata=L.h.create(this.view.spatialReference),this._resourceProxy=new d.J({fetch:n=>Promise.all(n.map(h=>this.view.stage.textureManager.rasterizeItem(h))),fetchDictionary:n=>{throw new Error("InternalError: Graphics do not support Dictionary requests")}}),this.addHandles([(0,ne.wB)(()=>this._effectiveRenderer,()=>this._pushUpdate()),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{this.addHandles([this.graphics.on("change",()=>this._pushUpdate())]),this._graphicStore=new Ue(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore),this._attached=!0,this.requestUpdate(),this._pushUpdate()})]),this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking),this._onTileUpdate({added:this.view.graphicsTileStore.tiles,removed:[]})}get _effectiveRenderer(){return"function"==typeof this.renderer?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const a=!this._attached||this._updateTracking.updating;return(0,w.A)("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${a}\n  -> attaching ${!this._attached}\n  -> updateTracking ${this._updateTracking.updating}`),a}hitTest(a){if(!this.view||this.view.suspended)return[];const{resolution:n,rotation:h}=this.view.state,l=this._graphicStore.hitTest(a.x,a.y,2,n,h),u=new Set(l),m=this.graphics.items.reduce((v,I)=>(u.has(I.uid)&&v.set(I.uid,I),v),new Map);return l.map(v=>m.get(v)).filter(de.Ru)}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback()),this.notifyChange("updating")}processUpdate(a){this.updateRequested&&(this.updateRequested=!1,this.update(a))}viewChange(){this.requestUpdate()}setHighlight(a){const n=[];for(const{objectId:l,highlightFlags:u}of a){var h;const m=null===(h=this._graphicStore.getItem(l))||void 0===h?void 0:h.displayId;n.push({objectId:l,highlightFlags:u,displayId:m})}this._attributeStore.setHighlight(n,a),this._pushUpdate()}graphicUpdateHandler(a){this._pushUpdate()}update(a){this.updateRequested=!1,this._attached&&this._graphicStore.updateLevel(a.state.resolution)}_pushUpdate(){(0,se.QZ)(this._commandQueue.push({type:"update"}))}_update(){var a=this;return(0,T.A)(function*(){try{(0,w.A)("esri-2d-update-debug")&&console.debug(`[Id: ${a.layerId}] GraphicsView._update start`);const n=yield a._graphicStore.update(a.graphics,l=>a._getSymbolForGraphic(l),l=>a._ensureSymbolResource(l));if(!n.hasAnyUpdate())return void(yield a._attributeStore.sendUpdates());n.removed.length&&(a._cleanupRequired=!0),(0,w.A)("esri-2d-update-debug")&&console.debug(`[Id: ${a.layerId}] GraphicsView updateMessage`,n);const h=a._createTileMessages(n);yield a._fetchResources(h),a._write(h);for(const l of n.added)a._setFilterState(l);for(const l of n.updated)a._setFilterState(l);(0,w.A)("esri-2d-update-debug")&&console.debug(`[Id: ${a.layerId}] GraphicsView sendUpdate`,n),yield a._attributeStore.sendUpdates(),(0,w.A)("esri-2d-update-debug")&&console.debug(`[Id: ${a.layerId}] GraphicsView sendUpdate.await`,n)}catch{}a._cleanupSharedResources()})()}_createTileMessages(a){const n=new Map;for(const h of a.added){const l=this.view.graphicsTileStore.getIntersectingTiles(h.bounds);for(const u of l)J.getOrCreate(u,n,this._metadata).addedOrModified.push(h)}for(const h of a.updated){const l=this.view.graphicsTileStore.getIntersectingTiles(h.prevBounds),u=this.view.graphicsTileStore.getIntersectingTiles(h.bounds);for(const m of l)J.getOrCreate(m,n,this._metadata).removed.push(h.displayId);for(const m of u)J.getOrCreate(m,n,this._metadata).addedOrModified.push(h)}for(const h of a.removed){const l=this.view.graphicsTileStore.getIntersectingTiles(h.bounds);for(const u of l)J.getOrCreate(u,n,this._metadata).removed.push(h.displayId)}return Array.from(n.values())}_fetchResources(a){var n=this;return(0,T.A)(function*(){for(const{tile:h,reader:l}of a){(0,w.A)("esri-2d-update-debug")&&console.debug(`Id[${n.layerId}] Tile[${h.id}] GraphicsView fetchResources`,a);const u=l.getCursor();for(;u.next();)for(const m of u.getMeshWriters())m.enqueueRequest(n._resourceProxy,u,h.createArcadeEvaluationOptions(n.view.timeZone))}yield n._resourceProxy.fetchEnqueuedResources()})()}_write(a){for(const n of a){(0,w.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${n.tile.id}] GraphicsView write`,n);const h=this._writeMeshes(n);let l=this._tiles.get(n.tile.key);l||(l=this._createFeatureTile(n.tile.key)),(0,w.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${n.tile.id}] GraphicsView onTileData`,n),this.container.onTileData(l,{type:"update",modify:h,remove:n.removed,end:!1,attributeEpoch:this._attributeStore.epoch}),this.container.requestRender()}}_writeMeshes(a){const n=new f.U(a.tile.id),h=a.reader.getCursor();for(;h.next();){n.entityStart(h.getDisplayId(),h.getZOrder());for(const l of h.getMeshWriters())l.write(n,this._resourceProxy,h,a.tile.createArcadeEvaluationOptions(this.view.timeZone),a.tile.level);n.entityEnd()}return{...n.serialize().message,tileId:a.tile.id}}_setFilterState(a){const n=a.displayId,h=this._attributeStore.getHighlightFlags(a.objectId);this._attributeStore.setData(n,0,0,h|(a.visible?P.LY:0))}_getSymbolForGraphic(a){return null!=a.symbol?a.symbol:null!=this._effectiveRenderer?this._effectiveRenderer.getSymbol(a):this._getNullSymbol(a)}_ensureSymbolResource(a){var n=this;return(0,T.A)(function*(){if(!a.symbol)return;const h=yield n._getSymbolInfo(a.symbol);if(!h)return;const l=h.linearCIM.filter(u=>"text"===u.type);if(l.length>0){const u=yield n._getTextResources(a,l);a.symbolResource={symbolInfo:h,textInfo:u}}else a.symbolResource={symbolInfo:h}})()}_getSymbolInfo(a){const n=a.hash();return this._hashToSymbolInfo.has(n)||this._hashToSymbolInfo.set(n,this._createSymbolInfo(n,a).catch(h=>null)),this._hashToSymbolInfo.get(n)}_createSymbolInfo(a,n){var h=this;return(0,T.A)(function*(){const l=yield h._convertToCIMSymbol(n),u=yield h._createLinearCIM(l);if("text"===n.type)for(const m of u)"text"===m.type&&(m.lineWidth=n.lineWidth);return{hash:a,cimSymbol:l,linearCIM:u,meshWriters:yield h._createMeshWriters(l,u)}})()}_convertToCIMSymbol(a){return(0,T.A)(function*(){const n=(0,C.Vb)(a);return"web-style"===n.type?(yield n.fetchCIMSymbol()).data:n})()}_createLinearCIM(a){var n=this;return(0,T.A)(function*(){return yield Promise.all(C.wp.fetchResources(a.symbol,n._cimResourceManager,[])),n.view.stage.cimAnalyzer.analyzeSymbolReference(a,!1)})()}_createMeshWriters(a,n){var h=this;return(0,T.A)(function*(){(0,se.Te)(h._controller.signal);const l=h.container.instanceStore,u=yield function g(a,n,h){return _.apply(this,arguments)}(a,n,l);return Promise.all(u.map(m=>(0,M.hZ)(h._storage,h._resourceProxy,m.meshWriterName,(0,D.P)(m.id),m.options,{tileInfo:h.view.featuresTilingScheme.tileInfo},m.optionalAttributes)))})()}_onTileUpdate(a){if(a.added&&a.added.length>0)for(const n of a.added)this._updateTracking.addPromise(this._addTile(n));if(a.removed&&a.removed.length>0)for(const n of a.removed)this._removeTile(n.key)}_createFeatureTile(a){const n=this.view.featuresTilingScheme.getTileBounds((0,j.vt)(),a),h=this.view.featuresTilingScheme.getTileResolution(a.level),l=new ge.R(a,h,n[0],n[3]);return this._tiles.set(a,l),this.container.addChild(l),l}_addTile(a){var n=this;return(0,T.A)(function*(){if(!n._attached)return;const h=n._graphicStore.queryItems(a);if(!h.length)return;const l=n._createFeatureTile(a.key),u=J.fromItems(a,h,n._metadata);yield n._fetchResources([u]);const m=n._writeMeshes(u);l.onMessage({type:"append",append:m,clear:!1,end:!0,attributeEpoch:n._attributeStore.epoch})})()}_removeTile(a){if(!this._tiles.has(a))return;const n=this._tiles.get(a);this.container.removeChild(n),n.destroy(),this._tiles.delete(a)}_getNullSymbol(a){const n=a.geometry;return(0,$.Rg)(n)?B.x3:(0,$.Bi)(n)||(0,$.ZC)(n)?B.JJ:this.defaultPointSymbolEnabled?B.jM:null}_getTextResources(a,n){var h=this;return(0,T.A)(function*(){const l=new Array,u=new Array;for(let x=0;x<n.length;x++){const R=n[x],{resource:S,overrides:b}=R.textRasterizationParam;if((null==b?void 0:b.length)>0){const E=F.$.resolveSymbolOverrides({type:"CIMSymbolReference",primitiveOverrides:b,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:S.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:S.symbol,textString:S.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},a,h.view.spatialReference,null,(0,$.$B)(a.projectedGeometry),null,null);E.then(H=>{const k=H.symbolLayers[0],{textString:q}=k.markerGraphics[0];u.push({type:"cim-rasterization-info",resource:{type:"text",textString:q||"",font:S.font}}),R.text=S.textString=q||""}),l.push(E)}else u.push({type:"cim-rasterization-info",resource:S})}l.length>0&&(yield Promise.all(l));const m=u.map(x=>h.view.stage.textureManager.rasterizeItem(x)),v=yield Promise.all(m);(0,te.Lw)(v);const I=new Map;for(let x=0;x<n.length;x++){const R=n[x];I.set(R.textRasterizationParam.resource.symbol,{text:R.text,glyphMosaicItems:v[x]})}return I})()}_cleanupSharedResources(){if(!this._cleanupRequired)return;const a=performance.now();if(a-this._lastCleanup<5e3)return;this._cleanupRequired=!1,this._lastCleanup=a;const n=new Set;for(const u of this._graphicStore.items()){var h;const m=null===(h=u.symbolResource)||void 0===h?void 0:h.symbolInfo.hash;n.add(m)}const l=new Set(this._hashToSymbolInfo.keys());for(const u of l.values())n.has(u)||this._hashToSymbolInfo.delete(u)}};(0,A._)([(0,O.MZ)()],V.prototype,"_effectiveRenderer",null),(0,A._)([(0,O.MZ)({constructOnly:!0})],V.prototype,"layerId",void 0),(0,A._)([(0,O.MZ)({constructOnly:!0})],V.prototype,"requestUpdateCallback",void 0),(0,A._)([(0,O.MZ)()],V.prototype,"container",void 0),(0,A._)([(0,O.MZ)({constructOnly:!0})],V.prototype,"graphics",void 0),(0,A._)([(0,O.MZ)()],V.prototype,"renderer",void 0),(0,A._)([(0,O.MZ)()],V.prototype,"_updateTracking",void 0),(0,A._)([(0,O.MZ)()],V.prototype,"updating",null),(0,A._)([(0,O.MZ)()],V.prototype,"view",void 0),(0,A._)([(0,O.MZ)()],V.prototype,"updateRequested",void 0),(0,A._)([(0,O.MZ)()],V.prototype,"defaultPointSymbolEnabled",void 0),V=(0,A._)([(0,oe.$)("esri.views.2d.layers.support.GraphicsView2D")],V);const Ee=V}}]);