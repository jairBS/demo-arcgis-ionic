"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5096],{53781:(Et,j,_)=>{_.d(j,{a:()=>z,b:()=>s,c:()=>Y,e:()=>q,f:()=>G,g:()=>m,i:()=>S,j:()=>B,l:()=>b,n:()=>P,s:()=>U,t:()=>V});var N=_(85952);function Y(A,E){return A[0]=E[0],A[1]=E[1],A[2]=E[2],A[3]=E[3],A}function U(A,E,i,c,O){return A[0]=E,A[1]=i,A[2]=c,A[3]=O,A}function G(A,E,i){return A[0]=E[0]+i[0],A[1]=E[1]+i[1],A[2]=E[2]+i[2],A[3]=E[3]+i[3],A}function M(A,E,i){return A[0]=E[0]-i[0],A[1]=E[1]-i[1],A[2]=E[2]-i[2],A[3]=E[3]-i[3],A}function g(A,E,i){return A[0]=E[0]*i[0],A[1]=E[1]*i[1],A[2]=E[2]*i[2],A[3]=E[3]*i[3],A}function y(A,E,i){return A[0]=E[0]/i[0],A[1]=E[1]/i[1],A[2]=E[2]/i[2],A[3]=E[3]/i[3],A}function s(A,E,i){return A[0]=E[0]*i,A[1]=E[1]*i,A[2]=E[2]*i,A[3]=E[3]*i,A}function I(A,E){const i=E[0]-A[0],c=E[1]-A[1],O=E[2]-A[2],f=E[3]-A[3];return Math.sqrt(i*i+c*c+O*O+f*f)}function D(A,E){const i=E[0]-A[0],c=E[1]-A[1],O=E[2]-A[2],f=E[3]-A[3];return i*i+c*c+O*O+f*f}function S(A){const E=A[0],i=A[1],c=A[2],O=A[3];return Math.sqrt(E*E+i*i+c*c+O*O)}function B(A){const E=A[0],i=A[1],c=A[2],O=A[3];return E*E+i*i+c*c+O*O}function P(A,E){const i=E[0],c=E[1],O=E[2],f=E[3];let l=i*i+c*c+O*O+f*f;return l>0&&(l=1/Math.sqrt(l),A[0]=i*l,A[1]=c*l,A[2]=O*l,A[3]=f*l),A}function m(A,E){return A[0]*E[0]+A[1]*E[1]+A[2]*E[2]+A[3]*E[3]}function b(A,E,i,c){const O=E[0],f=E[1],l=E[2],v=E[3];return A[0]=O+c*(i[0]-O),A[1]=f+c*(i[1]-f),A[2]=l+c*(i[2]-l),A[3]=v+c*(i[3]-v),A}function V(A,E,i){const c=E[0],O=E[1],f=E[2],l=E[3];return A[0]=i[0]*c+i[4]*O+i[8]*f+i[12]*l,A[1]=i[1]*c+i[5]*O+i[9]*f+i[13]*l,A[2]=i[2]*c+i[6]*O+i[10]*f+i[14]*l,A[3]=i[3]*c+i[7]*O+i[11]*f+i[15]*l,A}function z(A,E){return A[0]===E[0]&&A[1]===E[1]&&A[2]===E[2]&&A[3]===E[3]}function q(A,E){const i=A[0],c=A[1],O=A[2],f=A[3],l=E[0],v=E[1],W=E[2],K=E[3],w=(0,N.FD)();return Math.abs(i-l)<=w*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(c-v)<=w*Math.max(1,Math.abs(c),Math.abs(v))&&Math.abs(O-W)<=w*Math.max(1,Math.abs(O),Math.abs(W))&&Math.abs(f-K)<=w*Math.max(1,Math.abs(f),Math.abs(K))}Object.freeze(Object.defineProperty({__proto__:null,add:G,ceil:function p(A,E){return A[0]=Math.ceil(E[0]),A[1]=Math.ceil(E[1]),A[2]=Math.ceil(E[2]),A[3]=Math.ceil(E[3]),A},copy:Y,copyVec3:function T(A,E){return A[0]=E[0],A[1]=E[1],A[2]=E[2],A},dist:I,distance:I,div:y,divide:y,dot:m,equals:q,exactEquals:z,floor:function H(A,E){return A[0]=Math.floor(E[0]),A[1]=Math.floor(E[1]),A[2]=Math.floor(E[2]),A[3]=Math.floor(E[3]),A},inverse:function d(A,E){return A[0]=1/E[0],A[1]=1/E[1],A[2]=1/E[2],A[3]=1/E[3],A},len:S,length:S,lerp:b,max:function u(A,E,i){return A[0]=Math.max(E[0],i[0]),A[1]=Math.max(E[1],i[1]),A[2]=Math.max(E[2],i[2]),A[3]=Math.max(E[3],i[3]),A},min:function x(A,E,i){return A[0]=Math.min(E[0],i[0]),A[1]=Math.min(E[1],i[1]),A[2]=Math.min(E[2],i[2]),A[3]=Math.min(E[3],i[3]),A},mul:g,multiply:g,negate:function L(A,E){return A[0]=-E[0],A[1]=-E[1],A[2]=-E[2],A[3]=-E[3],A},normalize:P,random:function et(A,E){const i=N.Ov;let c,O,f,l,v,W;E=E||1;do{c=2*i()-1,O=2*i()-1,v=c*c+O*O}while(v>=1);do{f=2*i()-1,l=2*i()-1,W=f*f+l*l}while(W>=1);const K=Math.sqrt((1-v)/W);return A[0]=E*c,A[1]=E*O,A[2]=E*f*K,A[3]=E*l*K,A},round:function R(A,E){return A[0]=Math.round(E[0]),A[1]=Math.round(E[1]),A[2]=Math.round(E[2]),A[3]=Math.round(E[3]),A},scale:s,scaleAndAdd:function C(A,E,i,c){return A[0]=E[0]+i[0]*c,A[1]=E[1]+i[1]*c,A[2]=E[2]+i[2]*c,A[3]=E[3]+i[3]*c,A},set:U,sqrDist:D,sqrLen:B,squaredDistance:D,squaredLength:B,str:function Q(A){return"vec4("+A[0]+", "+A[1]+", "+A[2]+", "+A[3]+")"},sub:M,subtract:M,transformMat4:V,transformQuat:function J(A,E,i){const c=E[0],O=E[1],f=E[2],l=i[0],v=i[1],W=i[2],K=i[3],w=K*c+v*f-W*O,nt=K*O+W*c-l*f,At=K*f+l*O-v*c,ot=-l*c-v*O-W*f;return A[0]=w*K+ot*-l+nt*-W-At*-v,A[1]=nt*K+ot*-v+At*-l-w*-W,A[2]=At*K+ot*-W+w*-v-nt*-l,A[3]=E[3],A}},Symbol.toStringTag,{value:"Module"}))},89141:(Et,j,_)=>{function N(){return[0,0,0,0]}function T(B,L,d,P){return[B,L,d,P]}function g(){return T(1,1,1,1)}function y(){return T(1,0,0,0)}function p(){return T(0,1,0,0)}function H(){return T(0,0,1,0)}function x(){return T(0,0,0,1)}_.d(j,{fA:()=>T,vt:()=>N});const R=g(),s=y(),C=p(),I=H(),D=x();Object.freeze(Object.defineProperty({__proto__:null,ONES:R,UNIT_W:D,UNIT_X:s,UNIT_Y:C,UNIT_Z:I,ZEROS:[0,0,0,0],clone:function Y(B){return[B[0],B[1],B[2],B[3]]},create:N,createView:function G(B,L){return new Float64Array(B,L,4)},fromArray:function U(B,L=[0,0,0,0]){const d=Math.min(4,B.length);for(let P=0;P<d;++P)L[P]=B[P];return L},fromValues:T,ones:g,unitW:x,unitX:y,unitY:p,unitZ:H,zeros:function M(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},81596:(Et,j,_)=>{_.d(j,{oe:()=>Y});var N=_(79139);function Y(M,g=!1){return M<=N.y9?g?new Array(M).fill(0):new Array(M):new Float32Array(M)}},83034:(Et,j,_)=>{_.d(j,{Dg:()=>Y,my:()=>U,tM:()=>p});var N=_(79139);function Y(u){if((0,N.cy)(u)){if(u.length<N.y9)return u}else if(u.length<N.y9)return Array.from(u);let R=!0,s=!0;return u.some((C,I)=>(R=R&&0===C,s=s&&C===I,!R&&!s)),R?function x(u){if(1===u)return g;if(u<N.y9)return new Array(u).fill(0);if(u>H.length){const R=Math.max(2*H.length,u);H=new Uint8Array(R)}return new Uint8Array(H.buffer,0,u)}(u.length):s?p(u.length):(0,N.cy)(u)||u.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function T(u){let R=!0;for(const s of u){if(s>=65536)return(0,N.cy)(u)?new Uint32Array(u):u;s>=256&&(R=!1)}return R?new Uint8Array(u):new Uint16Array(u)}(u):u}function U(u){return u<=N.y9?new Array(u):u<=65536?new Uint16Array(u):new Uint32Array(u)}let M=(()=>{const u=new Uint32Array(131072);for(let R=0;R<u.length;++R)u[R]=R;return u})();const g=[0],y=(()=>{const u=new Uint16Array(65536);for(let R=0;R<u.length;++R)u[R]=R;return u})();function p(u){if(1===u)return g;if(u<N.y9)return Array.from(new Uint16Array(y.buffer,0,u));if(u<y.length)return new Uint16Array(y.buffer,0,u);if(u>M.length){const R=Math.max(2*M.length,u);M=new Uint32Array(R);for(let s=0;s<M.length;s++)M[s]=s}return new Uint32Array(M.buffer,0,u)}let H=new Uint8Array(65536)},44703:(Et,j,_)=>{function N(G){switch(G){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}_.d(j,{GJ:()=>N})},38118:(Et,j,_)=>{_.d(j,{b:()=>T});var N=_(69287),Y=_(83034);function T(y,p,H){var x;const u=Array.isArray(y),R=u?y.length/p:y.byteLength/(4*p),s=u?y:new Uint32Array(y,0,R*p),C=null!==(x=null==H?void 0:H.minReduction)&&void 0!==x?x:0,I=(null==H?void 0:H.originalIndices)||null,D=I?I.length:0,S=(null==H?void 0:H.componentOffsets)||null;let B=0;if(S)for(let F=0;F<S.length-1;F++){const $=S[F+1]-S[F];$>B&&(B=$)}else B=R;const L=Math.floor(1.1*B)+1;(null==g||g.length<2*L)&&(g=new Uint32Array((0,N.cU)(2*L)));for(let F=0;F<2*L;F++)g[F]=0;let d=0;const P=!!S&&!!I,m=P?D:R;let b=(0,Y.my)(R);const et=new Uint32Array(D),V=1.96;let J=0!==C?Math.ceil(4*V*V/(C*C)*C*(1-C)):m,Q=1,z=S?S[1]:m;for(let F=0;F<m;F++){if(F===J){const tt=1-d/F;if(tt+V*Math.sqrt(tt*(1-tt)/F)<C)return null;J*=2}if(F===z){for(let tt=0;tt<2*L;tt++)g[tt]=0;if(I)for(let tt=S[Q-1];tt<S[Q];tt++)et[tt]=b[I[tt]];z=S[++Q]}const $=P?I[F]:F,e=$*p,it=M(s,e,p);let rt=it%L,st=d;for(;0!==g[2*rt+1];){if(g[2*rt]===it){const tt=g[2*rt+1]-1;if(U(s,e,tt*p,p)){st=b[tt];break}}rt++,rt>=L&&(rt-=L)}st===d&&(g[2*rt]=it,g[2*rt+1]=$+1,d++),b[$]=st}if(0!==C&&1-d/R<C)return null;if(P){for(let F=S[Q-1];F<et.length;F++)et[F]=b[I[F]];b=(0,Y.Dg)(et)}const q=u?new Array(d):new Uint32Array(d*p);d=0;for(let F=0;F<m;F++)b[F]===d&&(G(s,(P?I[F]:F)*p,q,d*p,p),d++);if(I&&!P){const F=new Uint32Array(D);for(let $=0;$<F.length;$++)F[$]=b[I[$]];b=(0,Y.Dg)(F)}return{buffer:Array.isArray(q)?q:q.buffer,indices:b,uniqueCount:d}}function U(y,p,H,x){for(let u=0;u<x;u++)if(y[p+u]!==y[H+u])return!1;return!0}function G(y,p,H,x,u){for(let R=0;R<u;R++)H[x+R]=y[p+R]}function M(y,p,H){let x=0;for(let u=0;u<H;u++)x=y[p+u]+x|0,x=x+(x<<11)+(x>>>2)|0;return x>>>0}let g=null},48499:(Et,j,_)=>{_.d(j,{BP:()=>M,l5:()=>g});var N=_(45434),Y=_(44703),T=_(65388);class U{constructor(R,s){this.layout=R,this.buffer="number"==typeof s?new ArrayBuffer(s*R.stride):s;for(const C of R.fields.keys()){const I=R.fields.get(C);this[C]=new I.constructor(this.buffer,I.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(R,s){const C=this[R];return C&&C.elementCount===s.ElementCount&&C.elementType===s.ElementType?C:null}slice(R,s){return new U(this.layout,this.buffer.slice(R*this.stride,s*this.stride))}copyFrom(R,s=0,C=0,I=R.count){const D=this.stride;if(D%4==0){const S=new Uint32Array(R.buffer,s*D,I*D/4);new Uint32Array(this.buffer,C*D,I*D/4).set(S)}else{const S=new Uint8Array(R.buffer,s*D,I*D);new Uint8Array(this.buffer,C*D,I*D).set(S)}return this}get usedMemory(){return this.byteLength}dispose(){}}class G{constructor(R=null){this._stride=0,this._lastAligned=0,this._fields=new Map,R&&(this._stride=R.stride,R.fields.forEach(s=>{return this._fields.set(s[0],{...s[1],constructor:(u=s[1].constructor,x.get(u))});var u}))}vec2f(R,s){return this._appendField(R,N.gH,s),this}vec2f64(R,s){return this._appendField(R,N.si,s),this}vec3f(R,s){return this._appendField(R,N.xs,s),this}vec3f64(R,s){return this._appendField(R,N.Xm,s),this}vec4f(R,s){return this._appendField(R,N.Eq,s),this}vec4f64(R,s){return this._appendField(R,N.Aj,s),this}mat3f(R,s){return this._appendField(R,N.jZ,s),this}mat3f64(R,s){return this._appendField(R,N.j0,s),this}mat4f(R,s){return this._appendField(R,N.Sx,s),this}mat4f64(R,s){return this._appendField(R,N.E$,s),this}vec4u8(R,s){return this._appendField(R,N.XP,s),this}f32(R,s){return this._appendField(R,N.Y$,s),this}f64(R,s){return this._appendField(R,N.qB,s),this}u8(R,s){return this._appendField(R,N.SL,s),this}u16(R,s){return this._appendField(R,N.h,s),this}i8(R,s){return this._appendField(R,N.bf,s),this}vec2i8(R,s){return this._appendField(R,N.D6,s),this}vec2i16(R,s){return this._appendField(R,N.mJ,s),this}vec2u8(R,s){return this._appendField(R,N.LC,s),this}vec4u16(R,s){return this._appendField(R,N.Uz,s),this}u32(R,s){return this._appendField(R,N.P,s),this}_appendField(R,s,C){if(this._fields.has(R))return void(0,T.vA)(!1,`${R} already added to vertex buffer layout`);const I=s.ElementCount*(0,Y.GJ)(s.ElementType),D=this._stride;this._stride+=I,this._fields.set(R,{size:I,constructor:s,offset:D,optional:C})}createBuffer(R){return new U(this,R)}createView(R){return new U(this,R)}clone(){const R=new G;return R._stride=this._stride,R._fields=new Map,this._fields.forEach((s,C)=>R._fields.set(C,s)),R.BufferType=this.BufferType,R}get stride(){if(this._lastAligned!==this._fields.size){let R=1;this._fields.forEach(s=>R=Math.max(R,(0,Y.GJ)(s.constructor.ElementType))),this._stride=Math.floor((this._stride+R-1)/R)*R,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function M(){return new G}class g{constructor(R){this.fields=new Array,R.fields.forEach((s,C)=>{const I={...s,constructor:p(s.constructor)};this.fields.push([C,I])}),this.stride=R.stride}}const y=[N.Y$,N.gH,N.xs,N.Eq,N.jZ,N.Sx,N.qB,N.si,N.Xm,N.Aj,N.j0,N.E$,N.SL,N.LC,N.eI,N.XP,N.h,N.Yi,N.nS,N.Uz,N.P,N.An,N.H$,N.ml,N.bf,N.D6,N.m8,N.TX,N.Qt,N.mJ,N.Vp,N.E7,N.My,N.UL,N.zD,N.Y4];function p(u){return`${u.ElementType}_${u.ElementCount}`}const x=new Map;y.forEach(u=>x.set(p(u),u))},79439:(Et,j,_)=>{_.d(j,{U:()=>T});var N=_(50915),Y=_(30454);function T(M,g=0){const y=M.stride;return Array.from(M.fields.keys()).map(p=>{const H=M.fields.get(p),x=H.constructor.ElementCount,u=function U(M){const g=G[M];if(g)return g;throw new Error("BufferType not supported in WebGL")}(H.constructor.ElementType);return new Y._(p,x,u,H.offset,y,!(!H.optional||!H.optional.glNormalized),g)})}const G={u8:N.pe.UNSIGNED_BYTE,u16:N.pe.UNSIGNED_SHORT,u32:N.pe.UNSIGNED_INT,i8:N.pe.BYTE,i16:N.pe.SHORT,i32:N.pe.INT,f32:N.pe.FLOAT}},65388:(Et,j,_)=>{_.d(j,{O_:()=>y,vA:()=>M}),_(45475),_(53781),(0,_(89141).vt)();class G{constructor(C){this.message=C}toString(){return`AssertException: ${this.message}`}}function M(s,C){if(!s){C=C||"Assertion";const I=new Error(C).stack;throw new G(`${C} at ${I}`)}}function y(s,C,I,D){let S,B=(I[0]-s[0])/C[0],L=(D[0]-s[0])/C[0];B>L&&(S=B,B=L,L=S);let d=(I[1]-s[1])/C[1],P=(D[1]-s[1])/C[1];if(d>P&&(S=d,d=P,P=S),B>P||d>L)return!1;d>B&&(B=d),P<L&&(L=P);let m=(I[2]-s[2])/C[2],b=(D[2]-s[2])/C[2];return m>b&&(S=m,m=b,b=S),!(B>b||m>L||(b<L&&(L=b),L<0))}},40972:(Et,j,_)=>{var N,T;_.d(j,{r:()=>N}),(T=N||(N={})).POSITION="position",T.NORMAL="normal",T.NORMALCOMPRESSED="normalCompressed",T.UV0="uv0",T.COLOR="color",T.SYMBOLCOLOR="symbolColor",T.SIZE="size",T.TANGENT="tangent",T.OFFSET="offset",T.PERSPECTIVEDIVIDE="perspectiveDivide",T.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",T.LENGTH="length",T.PREVPOSITION="prevPosition",T.NEXTPOSITION="nextPosition",T.SUBDIVISIONFACTOR="subdivisionFactor",T.COLORFEATUREATTRIBUTE="colorFeatureAttribute",T.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",T.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",T.DISTANCETOSTART="distanceToStart",T.UVMAPSPACE="uvMapSpace",T.BOUNDINGRECT="boundingRect",T.UVREGION="uvRegion",T.PROFILERIGHT="profileRight",T.PROFILEUP="profileUp",T.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",T.FEATUREVALUE="featureValue",T.INSTANCEMODELORIGINHI="instanceModelOriginHi",T.INSTANCEMODELORIGINLO="instanceModelOriginLo",T.INSTANCEMODEL="instanceModel",T.INSTANCEMODELNORMAL="instanceModelNormal",T.INSTANCECOLOR="instanceColor",T.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",T.LOCALTRANSFORM="localTransform",T.GLOBALTRANSFORM="globalTransform",T.BOUNDINGSPHERE="boundingSphere",T.MODELORIGIN="modelOrigin",T.MODELSCALEFACTORS="modelScaleFactors",T.FEATUREATTRIBUTE="featureAttribute",T.STATE="state",T.LODLEVEL="lodLevel",T.POSITION0="position0",T.POSITION1="position1",T.NORMAL2COMPRESSED="normal2Compressed",T.COMPONENTINDEX="componentIndex",T.VARIANTOFFSET="variantOffset",T.VARIANTSTROKE="variantStroke",T.VARIANTEXTENSION="variantExtension",T.SIDENESS="sideness",T.START="start",T.END="end",T.UP="up",T.EXTRUDE="extrude",T.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",T.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"},62447:(Et,j,_)=>{_.d(j,{I$:()=>U,In:()=>y,gr:()=>g});var N=_(79439),Y=_(48499),T=_(40972);const U=(0,Y.BP)().vec3f(T.r.POSITION).u16(T.r.COMPONENTINDEX),G=(0,Y.BP)().vec2u8(T.r.SIDENESS),g=((0,N.U)(G),(0,Y.BP)().vec3f(T.r.POSITION0).vec3f(T.r.POSITION1).vec2i16(T.r.NORMALCOMPRESSED).u16(T.r.COMPONENTINDEX).u8(T.r.VARIANTOFFSET,{glNormalized:!0}).u8(T.r.VARIANTSTROKE).u8(T.r.VARIANTEXTENSION,{glNormalized:!0})),y=(0,Y.BP)().vec3f(T.r.POSITION0).vec3f(T.r.POSITION1).vec2i16(T.r.NORMALCOMPRESSED).vec2i16(T.r.NORMAL2COMPRESSED).u16(T.r.COMPONENTINDEX).u8(T.r.VARIANTOFFSET,{glNormalized:!0}).u8(T.r.VARIANTSTROKE).u8(T.r.VARIANTEXTENSION,{glNormalized:!0})},21795:(Et,j,_)=>{_.d(j,{K:()=>g});var N=_(89952),Y=_(69287),T=_(28714),U=_(25866);const G=-1;var M,I;function g(I,D,S,B=C){const L=I.vertices.position,d=I.vertices.componentIndex,P=(0,Y.kU)(B.anglePlanar),m=(0,Y.kU)(B.angleSignificantEdge),b=Math.cos(m),et=Math.cos(P),V=R.edge,J=V.position0,Q=V.position1,z=V.faceNormal0,q=V.faceNormal1,F=function u(I){const D=I.faces.length/3,S=I.vertices.position,B=I.faces,L=s.v0,d=s.v1,P=s.v2,m=new Float32Array(3*D);for(let b=0;b<D;b++){const V=B[3*b+1],J=B[3*b+2];S.getVec(B[3*b],L),S.getVec(V,d),S.getVec(J,P),(0,T.f)(d,d,L),(0,T.f)(P,P,L),(0,T.b)(L,d,P),(0,T.n)(L,L),m[3*b]=L[0],m[3*b+1]=L[1],m[3*b+2]=L[2]}return m}(I),$=function x(I){const D=I.faces.length/3,S=I.faces,B=I.neighbors;let L=0;for(let m=0;m<D;m++){const J=S[3*m],Q=S[3*m+1],z=S[3*m+2];L+=B[3*m]===G||J<Q?1:0,L+=B[3*m+1]===G||Q<z?1:0,L+=B[3*m+2]===G||z<J?1:0}const d=new Int32Array(4*L);let P=0;for(let m=0;m<D;m++){const b=B[3*m],et=B[3*m+1],V=B[3*m+2],J=S[3*m],Q=S[3*m+1],z=S[3*m+2];(b===G||J<Q)&&(d[P++]=J,d[P++]=Q,d[P++]=m,d[P++]=b),(et===G||Q<z)&&(d[P++]=Q,d[P++]=z,d[P++]=m,d[P++]=et),(V===G||z<J)&&(d[P++]=z,d[P++]=J,d[P++]=m,d[P++]=V)}return d}(I),e=$.length/4,it=D.allocate(e);let rt=0;const tt=S.allocate(e);let Ot=0,A=0,E=0;const i=(0,N.y1)(0,e),c=new Float32Array(e);c.forEach((W,K,w)=>{L.getVec($[4*K],J),L.getVec($[4*K+1],Q),w[K]=(0,T.q)(J,Q)}),i.sort((W,K)=>c[K]-c[W]);const O=new Array,f=new Array;for(let W=0;W<e;W++){const K=i[W],w=c[K],nt=$[4*K],At=$[4*K+1],ot=$[4*K+2],Rt=$[4*K+3],ut=Rt===G;if(L.getVec(nt,J),L.getVec(At,Q),ut)(0,T.s)(z,F[3*ot],F[3*ot+1],F[3*ot+2]),(0,T.c)(q,z),V.componentIndex=d.get(nt),V.cosAngle=(0,T.k)(z,q);else{if((0,T.s)(z,F[3*ot],F[3*ot+1],F[3*ot+2]),(0,T.s)(q,F[3*Rt],F[3*Rt+1],F[3*Rt+2]),V.componentIndex=d.get(nt),V.cosAngle=(0,T.k)(z,q),p(V,et))continue;V.cosAngle<-.9999&&(0,T.c)(q,z)}A+=w,E++,ut||y(V,b)?(D.write(it,rt++,V),O.push(w)):H(V,P)&&(S.write(tt,Ot++,V),f.push(w))}const l=new Float32Array(O.reverse()),v=new Float32Array(f.reverse());return{regular:{instancesData:D.trim(it,rt),lodInfo:{lengths:l}},silhouette:{instancesData:S.trim(tt,Ot),lodInfo:{lengths:v}},averageEdgeLength:A/E}}function y(I,D){return I.cosAngle<D}function p(I,D){return I.cosAngle>D}function H(I,D){const S=(0,Y.XM)(I.cosAngle),B=R.fwd,L=R.ortho;return(0,T.E)(B,I.position1,I.position0),S*((0,T.k)((0,T.b)(L,I.faceNormal0,I.faceNormal1),B)>0?-1:1)>D}(I=M||(M={}))[I.SOLID=0]="SOLID",I[I.SKETCH=1]="SKETCH";const R={edge:{position0:(0,U.vt)(),position1:(0,U.vt)(),faceNormal0:(0,U.vt)(),faceNormal1:(0,U.vt)(),componentIndex:0,cosAngle:0},ortho:(0,U.vt)(),fwd:(0,U.vt)()},s={v0:(0,U.vt)(),v1:(0,U.vt)(),v2:(0,U.vt)()},C={anglePlanar:4,angleSignificantEdge:35}},15096:(Et,j,_)=>{_.d(j,{o6:()=>e,HY:()=>A,hx:()=>it,Jb:()=>Ot});var N=_(38118);function Y(E,i,c){const O=i/3,f=new Uint32Array(c+1),l=new Uint32Array(c+1),v=(h,X)=>{h<X?f[h+1]++:l[X+1]++};for(let h=0;h<O;h++){const X=E[3*h],Z=E[3*h+1],k=E[3*h+2];v(X,Z),v(Z,k),v(k,X)}let W=0,K=0;for(let h=0;h<c;h++){const X=f[h+1],Z=l[h+1];f[h+1]=W,l[h+1]=K,W+=X,K+=Z}const w=new Uint32Array(6*O),nt=f[c],At=(h,X,Z)=>{if(h<X){const k=f[h+1]++;w[2*k]=X,w[2*k+1]=Z}else{const k=l[X+1]++;w[2*nt+2*k]=h,w[2*nt+2*k+1]=Z}};for(let h=0;h<O;h++){const X=E[3*h],Z=E[3*h+1],k=E[3*h+2];At(X,Z,h),At(Z,k,h),At(k,X,h)}const ot=(h,X)=>{const Z=2*h,k=X-h;for(let Tt=1;Tt<k;Tt++){const Nt=w[Z+2*Tt],at=w[Z+2*Tt+1];let ct=Tt-1;for(;ct>=0&&w[Z+2*ct]>Nt;ct--)w[Z+2*ct+2]=w[Z+2*ct],w[Z+2*ct+3]=w[Z+2*ct+1];w[Z+2*ct+2]=Nt,w[Z+2*ct+3]=at}};for(let h=0;h<c;h++)ot(f[h],f[h+1]),ot(nt+l[h],nt+l[h+1]);const Rt=new Int32Array(3*O),ut=(h,X)=>h===E[3*X]?0:h===E[3*X+1]?1:h===E[3*X+2]?2:-1,It=(h,X)=>{const Z=ut(h,X);Rt[3*X+Z]=-1},ft=(h,X,Z,k)=>{const Tt=ut(h,X);Rt[3*X+Tt]=k;const Nt=ut(Z,k);Rt[3*k+Nt]=X};for(let h=0;h<c;h++){let X=f[h];const Z=f[h+1];let k=l[h];const Tt=l[h+1];for(;X<Z&&k<Tt;){const Nt=w[2*X],at=w[2*nt+2*k];Nt===at?(ft(h,w[2*X+1],at,w[2*nt+2*k+1]),X++,k++):Nt<at?(It(h,w[2*X+1]),X++):(It(at,w[2*nt+2*k+1]),k++)}for(;X<Z;)It(h,w[2*X+1]),X++;for(;k<Tt;)It(w[2*nt+2*k],w[2*nt+2*k+1]),k++}return Rt}var T=_(48499),U=_(40972),G=_(62447),M=_(40707),g=_(28714),y=_(25866),p=_(79439),H=_(69287);function u(E,i,c,O,f,l=2){const v=1/(Math.abs(c)+Math.abs(O)+Math.abs(f)),W=c*v,K=O*v,w=f<=0?(W>=0?1:-1)*(1-Math.abs(K)):W,nt=f<=0?(K>=0?1:-1)*(1-Math.abs(W)):K,At=i*l;E[At]=D(w),E[At+1]=D(nt)}function D(E){return(0,H.qE)(Math.round(32767*E),-32767,32767)}_(81596);class B{updateSettings(i){this.settings=i,this._edgeHashFunction=i.reducedPrecision?b:m}write(i,c,O){const f=this._edgeHashFunction(O);F.seed=f;const l=F.getIntRange(0,255),v=F.getIntRange(0,this.settings.variants-1),K=F.getFloat(),w=255*(.5*function J(E,i){const c=E<0?-1:1;return Math.abs(E)**i*c}(-(1-Math.min(K/.7,1))+Math.max(0,K-.7)/(1-.7),1.2)+.5);i.position0.setVec(c,O.position0),i.position1.setVec(c,O.position1),i.componentIndex.set(c,O.componentIndex),i.variantOffset.set(c,l),i.variantStroke.set(c,v),i.variantExtension.set(c,w)}trim(i,c){return i.slice(0,c)}}const L=new Float32Array(6),d=new Uint32Array(L.buffer),P=new Uint32Array(1);function m(E){const i=L;i[0]=E.position0[0],i[1]=E.position0[1],i[2]=E.position0[2],i[3]=E.position1[0],i[4]=E.position1[1],i[5]=E.position1[2],P[0]=5381;for(let c=0;c<d.length;c++)P[0]=31*P[0]+d[c];return P[0]}function b(E){const i=L;i[0]=V(E.position0[0]),i[1]=V(E.position0[1]),i[2]=V(E.position0[2]),i[3]=V(E.position1[0]),i[4]=V(E.position1[1]),i[5]=V(E.position1[2]),P[0]=5381;for(let c=0;c<d.length;c++)P[0]=31*P[0]+d[c];return P[0]}const et=1e4;function V(E){return Math.round(E*et)/et}class Q{constructor(){this._commonWriter=new B}updateSettings(i){this._commonWriter.updateSettings(i)}allocate(i){return G.gr.createBuffer(i)}write(i,c,O){this._commonWriter.write(i,c,O),(0,g.g)(q,O.faceNormal0,O.faceNormal1),(0,g.n)(q,q);const{typedBuffer:f,typedBufferStride:l}=i.normalCompressed;u(f,c,q[0],q[1],q[2],l)}trim(i,c){return this._commonWriter.trim(i,c)}}Q.Layout=G.gr,Q.glLayout=(0,p.U)(G.gr,1);class z{constructor(){this._commonWriter=new B}updateSettings(i){this._commonWriter.updateSettings(i)}allocate(i){return G.In.createBuffer(i)}write(i,c,O){this._commonWriter.write(i,c,O);{const{typedBuffer:f,typedBufferStride:l}=i.normalCompressed;u(f,c,O.faceNormal0[0],O.faceNormal0[1],O.faceNormal0[2],l)}{const{typedBuffer:f,typedBufferStride:l}=i.normal2Compressed;u(f,c,O.faceNormal1[0],O.faceNormal1[1],O.faceNormal1[2],l)}}trim(i,c){return this._commonWriter.trim(i,c)}}z.Layout=G.In,z.glLayout=(0,p.U)(G.In,1);const q=(0,y.vt)(),F=new M.A;var $=_(21795);function e(E){const i=it(E.data,E.skipDeduplicate,E.indices,E.indicesLength);return st.updateSettings(E.writerSettings),tt.updateSettings(E.writerSettings),(0,$.K)(i,st,tt)}function it(E,i,c,O){if(i){const v=Y(c,O,E.count);return new rt(c,O,v,E)}const f=(0,N.b)(E.buffer,E.stride/4,{originalIndices:c,originalIndicesLength:O}),l=Y(f.indices,O,f.uniqueCount);return{faces:f.indices,facesLength:f.indices.length,neighbors:l,vertices:G.I$.createView(f.buffer)}}class rt{constructor(i,c,O,f){this.faces=i,this.facesLength=c,this.neighbors=O,this.vertices=f}}const st=new Q,tt=new z,Ot=(0,T.BP)().vec3f(U.r.POSITION0).vec3f(U.r.POSITION1),A=(0,T.BP)().vec3f(U.r.POSITION0).vec3f(U.r.POSITION1).u16(U.r.COMPONENTINDEX)},30454:(Et,j,_)=>{_.d(j,{_:()=>N});class N{constructor(T,U,G,M,g,y=!1,p=0){this.name=T,this.count=U,this.type=G,this.offset=M,this.stride=g,this.normalized=y,this.divisor=p}}},50915:(Et,j,_)=>{var N,Y,T,U,G,M,g,y,p,H,x,u,R,s,C,I,D,S,B,L,e;_.d(j,{Ab:()=>s,Ac:()=>g,Ap:()=>R,CQ:()=>V,Cj:()=>x,Co:()=>B,H0:()=>C,Hr:()=>b,MT:()=>p,NZ:()=>G,Nm:()=>m,R:()=>L,Tb:()=>U,WR:()=>Y,Y7:()=>M,_U:()=>S,dn:()=>T,eA:()=>H,hn:()=>N,ld:()=>I,nI:()=>et,pF:()=>u,pe:()=>y,sS:()=>q,tx:()=>F,vt:()=>P,xM:()=>d,xV:()=>J,yQ:()=>D}),(e=N||(N={}))[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(Y||(Y={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(e){e[e.ADD=32774]="ADD",e[e.MIN=32775]="MIN",e[e.MAX=32776]="MAX",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(U||(U={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",e[e.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(G||(G={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(M||(M={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(g||(g={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(y||(y={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(p||(p={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(H||(H={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(x||(x={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(u||(u={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(R||(R={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(s||(s={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(C||(C={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(I||(I={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(D||(D={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(S||(S={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(B||(B={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(L||(L={}));const d=33984;var P,m,b;(function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.TransformFeedback=7]="TransformFeedback",e[e.Sync=8]="Sync",e[e.UNCOUNTED=9]="UNCOUNTED",e[e.LinesOfCode=9]="LinesOfCode",e[e.Uniform=10]="Uniform",e[e.COUNT=11]="COUNT"})(P||(P={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(m||(m={})),function(e){e[e.NONE=0]="NONE",e[e.BACK=1029]="BACK"}(b||(b={}));const et=33306;var V,J,Q,z,q,F,$;(function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"})(V||(V={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(J||(J={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(Q||(Q={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(z||(z={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(q||(q={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(F||(F={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}($||($={}))}}]);