"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8463,4098,3258,2296],{24098:(te,X,M)=>{M.d(X,{GB:()=>b,Qo:()=>Z,Y4:()=>z});var j=M(44549);class b{}function z(T){return T instanceof j.bo?T===b.instance:"unknown"===(null==T?void 0:T.toString().toLowerCase())}function Z(T){return z(T)?b.instance:T}b.instance=new j.oh("Etc/UTC")},79915:(te,X,M)=>{M.d(X,{g:()=>j});const j={convertToGEGeometry:function b(l,c){return null==c?null:l.convertJSONToGeometry(c)},exportPoint:function Z(l,c,p){const I=new z(l.getPointX(c),l.getPointY(c),p),x=l.hasZ(c),O=l.hasM(c);return x&&(I.z=l.getPointZ(c)),O&&(I.m=l.getPointM(c)),I},exportPolygon:function T(l,c,p){return new w(l.exportPaths(c),p,l.hasZ(c),l.hasM(c))},exportPolyline:function A(l,c,p){return new G(l.exportPaths(c),p,l.hasZ(c),l.hasM(c))},exportMultipoint:function E(l,c,p){return new g(l.exportPoints(c),p,l.hasZ(c),l.hasM(c))},exportExtent:function v(l,c,p){const I=l.hasZ(c),x=l.hasM(c),O=new P(l.getXMin(c),l.getYMin(c),l.getXMax(c),l.getYMax(c),p);if(I){const h=l.getZExtent(c);O.zmin=h.vmin,O.zmax=h.vmax}if(x){const h=l.getMExtent(c);O.mmin=h.vmin,O.mmax=h.vmax}return O}};class z{constructor(c,p,I){this.x=c,this.y=p,this.spatialReference=I,this.z=void 0,this.m=void 0}}class w{constructor(c,p,I,x){this.rings=c,this.spatialReference=p,this.hasZ=void 0,this.hasM=void 0,I&&(this.hasZ=I),x&&(this.hasM=x)}}class G{constructor(c,p,I,x){this.paths=c,this.spatialReference=p,this.hasZ=void 0,this.hasM=void 0,I&&(this.hasZ=I),x&&(this.hasM=x)}}class g{constructor(c,p,I,x){this.points=c,this.spatialReference=p,this.hasZ=void 0,this.hasM=void 0,I&&(this.hasZ=I),x&&(this.hasM=x)}}class P{constructor(c,p,I,x,O){this.xmin=c,this.ymin=p,this.xmax=I,this.ymax=x,this.spatialReference=O,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},721:(te,X,M)=>{M.d(X,{$X:()=>J,Gy:()=>U,P5:()=>H,SW:()=>k,Tr:()=>Q,VV:()=>T}),M(61320);const z=(s,i,a)=>[i,a],Z=(s,i,a)=>[i,a,s[2]],w=(s,i,a)=>[i,a,s[2],s[3]];function T(s){return s?{originPosition:"upper-left"===s.originPosition?"upperLeft":"lower-left"===s.originPosition?"lowerLeft":s.originPosition,scale:s.tolerance?[s.tolerance,s.tolerance]:[1,1],translate:null!=s.extent?[s.extent.xmin,s.extent.ymax]:[0,0]}:null}function p({scale:s,translate:i},a){return a*s[0]+i[0]}function I({scale:s,translate:i},a){return i[1]-a*s[1]}function x(s,i,a){const R=new Array(a.length);if(!a.length)return R;const[F,K]=s.scale;let Y=p(s,a[0][0]),V=I(s,a[0][1]);R[0]=i(a[0],Y,V);for(let ee=1;ee<a.length;ee++){const q=a[ee];Y+=q[0]*F,V-=q[1]*K,R[ee]=i(q,Y,V)}return R}function O(s,i,a){const R=new Array(a.length);for(let F=0;F<a.length;F++)R[F]=x(s,i,a[F]);return R}function U(s,i,a,R,F){return i.x=function A({scale:s,translate:i},a){return Math.round((a-i[0])/s[0])}(s,a.x),i.y=function g({scale:s,translate:i},a){return Math.round((i[1]-a)/s[1])}(s,a.y),i!==a&&(R&&(i.z=a.z),F&&(i.m=a.m)),i}function k(s,i,a,R,F){return null!=a&&(i.points=function f(s,i,a,R){return x(s,a?R?w:Z:R?Z:z,i)}(s,a.points,R,F)),i}function Q(s,i,a,R,F){return null==a||(i.x=p(s,a.x),i.y=I(s,a.y),i!==a&&(R&&(i.z=a.z),F&&(i.m=a.m))),i}function J(s,i,a,R,F){return null!=a&&(i.rings=function o(s,i,a,R){return O(s,a?R?w:Z:R?Z:z,i)}(s,a.rings,R,F)),i}function H(s,i,a,R,F){return null!=a&&(i.paths=function m(s,i,a,R){return O(s,a?R?w:Z:R?Z:z,i)}(s,a.paths,R,F)),i}},27999:(te,X,M)=>{function j(g,E){return g?E?4:3:E?3:2}function b(g,E,P,v){if(null==E||!E.lengths.length)return null;g.lengths.length&&(g.lengths.length=0),g.coords.length&&(g.coords.length=0);const l=g.coords,c=[],p=P?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:I,coords:x}=E,O=j(P,v);let h=0;for(const f of I){const m=z(p,x,h,f,P,v);m&&c.push(m),h+=f*O}if(c.sort((f,m)=>{let o=f[2]-m[2];return 0===o&&P&&(o=f[4]-m[4]),o}),c.length){let f=6*c[0][2];l[0]=c[0][0]/f,l[1]=c[0][1]/f,P&&(f=6*c[0][4],l[2]=0!==f?c[0][3]/f:0),(l[0]<p[0]||l[0]>p[1]||l[1]<p[2]||l[1]>p[3]||P&&(l[2]<p[4]||l[2]>p[5]))&&(l.length=0)}if(!l.length){const f=E.lengths[0]?function Z(g,E,P,v,l){const c=j(v,l);let p=E,I=E+c,x=0,O=0,h=0,f=0;for(let m=0,o=P-1;m<o;m++,p+=c,I+=c){const y=g[p],N=g[p+1],D=g[p+2],S=g[I],C=g[I+1],_=g[I+2],d=v?T(y,N,D,S,C,_):w(y,N,S,C);if(d)if(x+=d,v){const U=A(y,N,D,S,C,_);O+=d*U[0],h+=d*U[1],f+=d*U[2]}else{const U=G(y,N,S,C);O+=d*U[0],h+=d*U[1]}}return x>0?v?[O/x,h/x,f/x]:[O/x,h/x]:P>0?v?[g[E],g[E+1],g[E+2]]:[g[E],g[E+1]]:null}(x,0,I[0],P,v):null;if(!f)return null;l[0]=f[0],l[1]=f[1],P&&f.length>2&&(l[2]=f[2])}return g}function z(g,E,P,v,l,c){const p=j(l,c);let I=P,x=P+p,O=0,h=0,f=0,m=0,o=0;for(let N=0,D=v-1;N<D;N++,I+=p,x+=p){const S=E[I],C=E[I+1],_=E[I+2],d=E[x],U=E[x+1],W=E[x+2];let L=S*U-d*C;m+=L,O+=(S+d)*L,h+=(C+U)*L,l&&(L=S*W-d*_,f+=(_+W)*L,o+=L),S<g[0]&&(g[0]=S),S>g[1]&&(g[1]=S),C<g[2]&&(g[2]=C),C>g[3]&&(g[3]=C),l&&(_<g[4]&&(g[4]=_),_>g[5]&&(g[5]=_))}if(m>0&&(m*=-1),o>0&&(o*=-1),!m)return null;const y=[O,h,.5*m];return l&&(y[3]=f,y[4]=.5*o),y}function w(g,E,P,v){const l=P-g,c=v-E;return Math.sqrt(l*l+c*c)}function T(g,E,P,v,l,c){const p=v-g,I=l-E,x=c-P;return Math.sqrt(p*p+I*I+x*x)}function G(g,E,P,v){return[g+.5*(P-g),E+.5*(v-E)]}function A(g,E,P,v,l,c){return[g+.5*(v-g),E+.5*(l-E),P+.5*(c-P)]}M.d(X,{Q:()=>b})},95985:(te,X,M)=>{M.d(X,{LQ:()=>G,ag:()=>g,pL:()=>A});var j=M(31732),b=M(13682);const z=new b.A,Z=new b.A,w=new b.A,T={esriGeometryPoint:j.DF,esriGeometryPolyline:j.BW,esriGeometryPolygon:j.z5,esriGeometryMultipoint:j.qK};function G(v,l,c,p=v.hasZ,I=v.hasM){if(null==l)return null;const x=v.hasZ&&p,O=v.hasM&&I;if(c){const h=(0,j.Nl)(w,l,v.hasZ,v.hasM,"esriGeometryPoint",c,p,I);return(0,j.DF)(h,x,O)}return(0,j.DF)(l,x,O)}function A(v,l,c,p,I,x,O=l,h=c){var f,m;const o=l&&O,y=c&&h,N=null!=p?"coords"in p?p:p.geometry:null;if(null==N)return null;if(I){var D,S;let d=(0,j.kz)(Z,N,l,c,v,I,O,h);return x&&(d=(0,j.Nl)(w,d,o,y,v,x)),null!==(D=null===(S=T[v])||void 0===S?void 0:S.call(T,d,o,y))&&void 0!==D?D:null}if(x){var C,_;const d=(0,j.Nl)(w,N,l,c,v,x,O,h);return null!==(C=null===(_=T[v])||void 0===_?void 0:_.call(T,d,o,y))&&void 0!==C?C:null}return(0,j.Q4)(z,N,l,c,O,h),null!==(f=null===(m=T[v])||void 0===m?void 0:m.call(T,z,o,y))&&void 0!==f?f:null}function g(v){return v&&E in v?JSON.parse(JSON.stringify(v,P)):v}const E="_geVersion",P=(v,l)=>v!==E?l:void 0},88840:(te,X,M)=>{M.d(X,{Cv:()=>I,Nk:()=>v,lK:()=>h});var j=M(10467),b=M(89952),z=M(56492),Z=M(11817),w=M(79915),T=M(58701),G=M(55039);const A=[0,0];function g(f,m){if(!m)return null;if("x"in m){const o={x:0,y:0};return[o.x,o.y]=f(m.x,m.y,A),null!=m.z&&(o.z=m.z),null!=m.m&&(o.m=m.m),o}if("xmin"in m){const o={xmin:0,ymin:0,xmax:0,ymax:0};return[o.xmin,o.ymin]=f(m.xmin,m.ymin,A),[o.xmax,o.ymax]=f(m.xmax,m.ymax,A),m.hasZ&&(o.zmin=m.zmin,o.zmax=m.zmax,o.hasZ=!0),m.hasM&&(o.mmin=m.mmin,o.mmax=m.mmax,o.hasM=!0),o}return"rings"in m?{rings:E(m.rings,f),hasM:m.hasM,hasZ:m.hasZ}:"paths"in m?{paths:E(m.paths,f),hasM:m.hasM,hasZ:m.hasZ}:"points"in m?{points:P(m.points,f),hasM:m.hasM,hasZ:m.hasZ}:null}function E(f,m){const o=[];for(const y of f)o.push(P(y,m));return o}function P(f,m){const o=[];for(const y of f){const N=m(y[0],y[1],[0,0]);o.push(N),y.length>2&&N.push(y[2]),y.length>3&&N.push(y[3])}return o}function v(f,m){return l.apply(this,arguments)}function l(){return(l=(0,j.A)(function*(f,m){if(!f||!m)return;const o=Array.isArray(f)?f.map(y=>null!=y.geometry?y.geometry.spatialReference:null).filter(b.Ru):[f];yield(0,Z.initializeProjection)(o.map(y=>({source:y,dest:m})))})).apply(this,arguments)}const c=g.bind(null,G.je),p=g.bind(null,G.tD);function I(f,m,o,y){if(!f||(o||(o=m,m=f.spatialReference),!(0,T.fn)(m)||!(0,T.fn)(o)||(0,T.aI)(m,o)))return f;if((0,G.y7)(m,o)){const N=(0,T.K8)(o)?c(f):p(f);return N.spatialReference=o,N}return(0,Z.projectMany)(w.g,[f],m,o,null,y)[0]}const O=new class x{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}push(m,o,y,N){var D=this;return(0,j.A)(function*(){var S;if(null==m||!m.length||!o||!y||(0,T.aI)(o,y))return m;const C={geometries:m,inSpatialReference:o,outSpatialReference:y,geographicTransformation:N,resolve:(0,z.Tw)()};return D._jobs.push(C),null!==(S=D._timer)&&void 0!==S||(D._timer=setTimeout(D._process,10)),C.resolve.promise})()}_process(){this._timer=null;const m=this._jobs.shift();if(!m)return;const{geometries:o,inSpatialReference:y,outSpatialReference:N,resolve:D,geographicTransformation:S}=m;(0,G.y7)(y,N)?(0,T.K8)(N)?D(o.map(c)):D(o.map(p)):D((0,Z.projectMany)(w.g,o,y,N,S,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function h(f,m,o,y){return O.push(f,m,o,y)}},871:(te,X,M)=>{M.d(X,{GC:()=>v,T2:()=>c,v8:()=>P});var j=M(10467),b=M(49976),z=M(82663),Z=M(11817),w=M(22442),T=M(61320),G=M(77098),A=M(58701),g=M(88840);const E=new b.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),P=Object.freeze({});function v(o,y,N){return l.apply(this,arguments)}function l(){return(l=(0,j.A)(function*(o,y,N){const{outFields:D,orderByFields:S,groupByFieldsForStatistics:C,outStatistics:_}=o;if(D)for(let d=0;d<D.length;d++)D[d]=D[d].trim();if(S)for(let d=0;d<S.length;d++)S[d]=S[d].trim();if(C)for(let d=0;d<C.length;d++)C[d]=C[d].trim();if(_)for(let d=0;d<_.length;d++)_[d].onStatisticField&&(_[d].onStatisticField=_[d].onStatisticField.trim());return o.geometry&&!o.outSR&&(o.outSR=o.geometry.spatialReference),c(o,y,N)})).apply(this,arguments)}function c(o,y,N){return p.apply(this,arguments)}function p(){return p=(0,j.A)(function*(o,y,N){var D;if(!o)return null;let{where:S}=o;if(o.where=S=null===(D=S)||void 0===D?void 0:D.trim(),(!S||/^1 *= *1$/.test(S)||y&&y===S)&&(o.where=null),!o.geometry)return o;let C=yield function O(o){return h.apply(this,arguments)}(o);if(o.distance=0,o.units=null,"esriSpatialRelEnvelopeIntersects"===o.spatialRel){const{spatialReference:d}=o.geometry;C=(0,w.HA)(C),C.spatialReference=d}if(C){var _;yield(0,g.Nk)(C.spatialReference,N),C=function x(o,y){const N=o.spatialReference;return I(o,y)&&(0,T.ZC)(o)?{spatialReference:N,rings:[[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]]]}:o}(C,N);const d=(yield(0,G.el)((0,T.rS)(C)))[0];if(null==d)throw P;const U="quantizationParameters"in o&&(null===(_=o.quantizationParameters)||void 0===_?void 0:_.tolerance)||"maxAllowableOffset"in o&&o.maxAllowableOffset||0,W=U&&I(C,N)?{densificationStep:8*U}:void 0,L=d.toJSON(),B=(0,g.Cv)(L,L.spatialReference,N,W);if(!B)throw P;B.spatialReference=N,o.geometry=B}return o}),p.apply(this,arguments)}function I(o,y){if(!o)return!1;const N=o.spatialReference;return((0,T.ZC)(o)||(0,T.Bi)(o)||(0,T.Rg)(o))&&!(0,A.aI)(N,y)&&!(0,Z.canProjectWithoutEngine)(N,y)}function h(){return h=(0,j.A)(function*(o){const{distance:y,units:N}=o,D=o.geometry;if(null==y||"vertexAttributes"in D)return D;const S=D.spatialReference,C=N?E.fromJSON(N):(0,z.Ij)(S),_=S&&((0,A.EA)(S)||(0,A.K8)(S))?D:yield(0,g.Nk)(S,A.KK).then(()=>(0,g.Cv)(D,A.KK));return(yield function f(){return m.apply(this,arguments)}())(_.spatialReference,_,y,C)}),h.apply(this,arguments)}function m(){return(m=(0,j.A)(function*(){return(yield Promise.all([M.e(3930),M.e(2076)]).then(M.bind(M,27815))).geodesicBuffer})).apply(this,arguments)}},18633:(te,X,M)=>{M.d(X,{tC:()=>C,c0:()=>D,xt:()=>N});var j=M(10467),b=M(5922),z=M(8190),Z=M(62928),T=M(61320),G=M(58701);function A(_,d){return _?d?4:3:d?3:2}function P(_,d,U,W,L){if(!_)return!1;const B=A(d,U),{coords:$,lengths:k}=_;let Q=!1,J=0;for(const H of k)Q=v(Q,$,B,J,H,W,L),J+=H*B;return Q}function v(_,d,U,W,L,B,$){let k=_,Q=W;for(let J=W,H=W+L*U;J<H;J+=U){Q=J+U,Q===H&&(Q=W);const s=d[J],i=d[J+1],R=d[Q+1];(i<$&&R>=$||R<$&&i>=$)&&s+($-i)/(R-i)*(d[Q]-s)<B&&(k=!k)}return k}var l=M(31732),c=M(13682),p=M(95985),I=M(88840);const x="unsupported-query",O={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},h={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function N(_,d,U,W,L){if((0,T.Bi)(d)&&"esriGeometryPoint"===U&&("esriSpatialRelIntersects"===_||"esriSpatialRelContains"===_)){const B=(0,l.Ye)(new c.A,d,!1,!1);return Promise.resolve($=>function g(_,d,U,W){return P(_,d,U,W.coords[0],W.coords[1])}(B,!1,!1,$))}if((0,T.Bi)(d)&&"esriGeometryMultipoint"===U){const B=(0,l.Ye)(new c.A,d,!1,!1);if("esriSpatialRelContains"===_)return Promise.resolve($=>function E(_,d,U,W,L,B){const $=A(L,B),{coords:k,lengths:Q}=W;if(!Q)return!1;for(let J=0,H=0;J<Q.length;J++,H+=$)if(!P(_,d,U,k[H],k[H+1]))return!1;return!0}(B,!1,!1,$,W,L))}if((0,T.ZC)(d)&&"esriGeometryPoint"===U&&("esriSpatialRelIntersects"===_||"esriSpatialRelContains"===_))return Promise.resolve(B=>(0,z.qz)(d,(0,p.pL)(U,W,L,B)));if((0,T.ZC)(d)&&"esriGeometryMultipoint"===U&&"esriSpatialRelContains"===_)return Promise.resolve(B=>(0,z.rL)(d,(0,p.pL)(U,W,L,B)));if((0,T.ZC)(d)&&"esriSpatialRelIntersects"===_){const B=function w(_){return"mesh"===_?Z.xB:(0,Z.xK)(_)}(U);return Promise.resolve($=>B(d,(0,p.pL)(U,W,L,$)))}return function y(){return Promise.all([M.e(3930),M.e(2076)]).then(M.bind(M,27815))}().then(B=>{const $=B[O[_]].bind(null,d.spatialReference,d);return k=>$((0,p.pL)(U,W,L,k))})}function D(_,d,U){return S.apply(this,arguments)}function S(){return(S=(0,j.A)(function*(_,d,U){const{spatialRel:W,geometry:L}=_;if(L){if(!function f(_){return null!=_&&!0===h.spatialRelationship[_]}(W))throw new b.A(x,"Unsupported query spatial relationship",{query:_});if((0,G.fn)(L.spatialReference)&&(0,G.fn)(U)){var B;if(!function m(_){return null!=_&&!0===h.queryGeometry[(0,T.$B)(_)]}(L))throw new b.A(x,"Unsupported query geometry type",{query:_});if(!function o(_){return null!=_&&!0===h.layerGeometry[_]}(d))throw new b.A(x,"Unsupported layer geometry type",{query:_});if(_.outSR)return(0,I.Nk)(null===(B=_.geometry)||void 0===B?void 0:B.spatialReference,_.outSR)}}})).apply(this,arguments)}function C(_){if((0,T.ZC)(_))return!0;if((0,T.Bi)(_)){for(const d of _.rings)if(5!==d.length||d[0][0]!==d[1][0]||d[0][0]!==d[4][0]||d[2][0]!==d[3][0]||d[0][1]!==d[3][1]||d[0][1]!==d[4][1]||d[1][1]!==d[2][1])return!1;return!0}return!1}},76980:(te,X,M)=>{M.d(X,{I:()=>Z,W:()=>b});var j=M(10467);function b(A,g){return z.apply(this,arguments)}function z(){return(z=(0,j.A)(function*(A,g){if(!A)return null;const E=g.featureAdapter,{startTimeField:P,endTimeField:v}=A;let l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(P&&v)yield g.forEach(p=>{const I=E.getAttribute(p,P),x=E.getAttribute(p,v);null==I||isNaN(I)||(l=Math.min(l,I)),null==x||isNaN(x)||(c=Math.max(c,x))});else{const p=P||v;yield g.forEach(I=>{const x=E.getAttribute(I,p);null==x||isNaN(x)||(l=Math.min(l,x),c=Math.max(c,x))})}return{start:l,end:c}})).apply(this,arguments)}function Z(A,g,E){var P,v;if(!g||!A)return null;const{startTimeField:l,endTimeField:c}=A;if(!l&&!c)return null;const{start:p,end:I}=g;if(null===p&&null===I)return null;if(void 0===p&&void 0===I)return()=>!1;const x=null!==(P=null===(v=E.getAttributeAsTimestamp)||void 0===v?void 0:v.bind(E))&&void 0!==P?P:E.getAttribute.bind(E);return l&&c?function w(A,g,E,P,v){return null!=P&&null!=v?l=>{const c=A(l,g),p=A(l,E);return(null==c||c<=v)&&(null==p||p>=P)}:null!=P?l=>{const c=A(l,E);return null==c||c>=P}:null!=v?l=>{const c=A(l,g);return null==c||c<=v}:void 0}(x,l,c,p,I):function T(A,g,E,P){return null!=E&&null!=P&&E===P?v=>A(v,g)===E:null!=E&&null!=P?v=>{const l=A(v,g);return null!=l&&l>=E&&l<=P}:null!=E?v=>{const l=A(v,g);return null!=l&&l>=E}:null!=P?v=>{const l=A(v,g);return null!=l&&l<=P}:void 0}(x,l||c,p,I)}},73258:(te,X,M)=>{M.d(X,{A:()=>l});var j=M(5922),b=M(71065),z=M(35150),Z=M(60797),w=M(24098),T=M(86300),G=M(22639),A=M(44549);const v=new Map;class l{static fromJSON(h){return new l(h.fields,h.timeZoneByFieldName)}static fromLayer(h){var f;return new l(null!==(f=h.fields)&&void 0!==f?f:[],x(h))}static fromLayerJSON(h){var f;return new l(null!==(f=h.fields)&&void 0!==f?f:[],x(h))}constructor(h=[],f){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=h||[],this._timeZoneByFieldName=f?new Map(f):null;const m=[];for(const y of this.fields){const N=null==y?void 0:y.name,D=p(N);if(N&&D){var o;const S=c(N);this._fieldsMap.set(N,y),this._fieldsMap.set(S,y),this._normalizedFieldsMap.set(D,y),m.push(`${S}:${y.type}:${null===(o=this._timeZoneByFieldName)||void 0===o?void 0:o.get(N)}`),(0,T.vE)(y)?(this.dateFields.push(y),this._dateFieldsSet.add(y)):(0,T.WA)(y)&&(this._numericFieldsSet.add(y),this.numericFields.push(y)),(0,T.te)(y)||(0,T.Xz)(y)||(y.editable=null==y.editable||!!y.editable,y.nullable=null==y.nullable||!!y.nullable)}}m.sort(),this.uid=m.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const h of this.fields)(0,T.te)(h)||(0,T.Xz)(h)||h.nullable||void 0!==(0,T.lD)(h)||this._requiredFields.push(h)}return this._requiredFields}equals(h){return this.uid===(null==h?void 0:h.uid)}has(h){return null!=this.get(h)}get(h){var f;if(!h)return;let m=this._fieldsMap.get(h);return m||(m=null!==(f=this._fieldsMap.get(c(h)))&&void 0!==f?f:this._normalizedFieldsMap.get(p(h)),m&&this._fieldsMap.set(h,m),m)}getTimeZone(h){const f=this.get(h&&"string"!=typeof h?h.name:h);return f?this._timeZoneByFieldName?this._timeZoneByFieldName.get(f.name):"date"===f.type||"esriFieldTypeDate"===f.type?(z.A.getLogger("esri.layers.support.FieldsIndex").error(new j.A("getTimeZone:no-timezone-information",`no time zone information for field '${f.name}'`)),G.n$):I.has(f.type)?G.L5:null:null}getLuxonTimeZone(h){const f=this.getTimeZone(h);return f?f===G.L5?w.GB.instance:f===G.n$?A.mQ.utcInstance:(0,Z.tE)(v,f,()=>A.oh.create(f)):null}isDateField(h){return this._dateFieldsSet.has(this.get(h))}isTimeOnlyField(h){return(0,T.OH)(this.get(h))}isNumericField(h){return this._numericFieldsSet.has(this.get(h))}normalizeFieldName(h){var f,m;return null!==(f=null===(m=this.get(h))||void 0===m?void 0:m.name)&&void 0!==f?f:void 0}toJSON(){return{fields:this.fields.map(h=>(0,b.Wj)(h)?h.toJSON():h),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function c(O){return O.trim().toLowerCase()}function p(O){var h,f;return null!==(h=null===(f=(0,T.rS)(O))||void 0===f?void 0:f.toLowerCase())&&void 0!==h?h:""}const I=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function x(O){var h,f,m,o,y,N,D;const S=new Map;if(!O.fields)return S;const C=!0===O.datesInUnknownTimezone,{timeInfo:_,editFieldsInfo:d}=O,U=null!==(h=_?"startField"in _?_.startField:_.startTimeField:"")&&void 0!==h?h:"",W=null!==(f=_?"endField"in _?_.endField:_.endTimeField:"")&&void 0!==f?f:"",L=function P(O){return"dateFieldsTimeZone"in O}(O)?null!==(m=O.dateFieldsTimeZone)&&void 0!==m?m:null:O.dateFieldsTimeReference?(0,G.ZS)(O.dateFieldsTimeReference):null,B=d?function g(O){return"timeZone"in O}(d)?null!==(o=d.timeZone)&&void 0!==o?o:L:d.dateFieldsTimeReference?(0,G.ZS)(d.dateFieldsTimeReference):null!=L?L:G.n$:null,$=_?function E(O){return"timeZone"in O}(_)?null!==(y=_.timeZone)&&void 0!==y?y:L:_.timeReference?(0,G.ZS)(_.timeReference):L:null,k=new Map([[c(null!==(N=null==d?void 0:d.creationDateField)&&void 0!==N?N:""),B],[c(null!==(D=null==d?void 0:d.editDateField)&&void 0!==D?D:""),B],[c(U),$],[c(W),$]]);for(const{name:J,type:H}of O.fields)if(I.has(H))S.set(J,G.L5);else if("date"!==H&&"esriFieldTypeDate"!==H)S.set(J,null);else if(C)S.set(J,G.L5);else{var Q;const s=null!==(Q=k.get(c(null!=J?J:"")))&&void 0!==Q?Q:L;S.set(J,s)}return S}}}]);