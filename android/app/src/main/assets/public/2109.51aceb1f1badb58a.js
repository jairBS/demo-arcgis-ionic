"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2109],{62109:(ue,K,f)=>{f.r(K),f.d(K,{toBinaryGLTF:()=>me});var G,i,H=f(45272),V=f(10467),y=f(13303);(i=G||(G={}))[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN";class d{constructor(t,s){if(!t)throw new Error("GLB requires a JSON gltf chunk");this._length=d.HEADER_SIZE,this._length+=d.CHUNK_HEADER_SIZE;const n=this._textToArrayBuffer(t);if(this._length+=this._alignTo(n.byteLength,4),s&&(this._length+=d.CHUNK_HEADER_SIZE,this._length+=s.byteLength,s.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(n,12,G.JSON,32);s&&this._writeChunk(s,r,G.BIN)}_writeHeader(){this._outView.setUint32(0,d.MAGIC,!0),this._outView.setUint32(4,d.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,s,n,r=0){const o=this._alignTo(t.byteLength,4);for(this._outView.setUint32(s,o,!0),this._outView.setUint32(s+=4,n,!0),this._writeArrayBuffer(this._outView.buffer,t,s+=4,0,t.byteLength),s+=t.byteLength;s%4;)r&&this._outView.setUint8(s,r),s++;return s}_writeArrayBuffer(t,s,n,r,o){new Uint8Array(t,n,o).set(new Uint8Array(s,r,o),0)}_textToArrayBuffer(t){return(new TextEncoder).encode(t).buffer}_alignTo(t,s){return s*Math.ceil(t/s)}}d.HEADER_SIZE=12,d.CHUNK_HEADER_SIZE=8,d.MAGIC=1179937895,d.VERSION=2;var D,m,P,O,j,Z,J,z=f(5922),x=f(35150),X=f(60797),w=f(69287),_=f(82663),U=f(92771),F=f(62789),g=f(19890),L=f(14214),M=f(28714),C=f(25866),v=f(38352),Y=f(73490),b=f(99750);(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(D||(D={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(m||(m={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(P||(P={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(O||(O={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(j||(j={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(Z||(Z={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(J||(J={}));var T=f(50915);class ne{constructor(t,s,n,r,o){this._buffer=t,this._componentType=n,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:o};const E=this._getElementSize();E>=4&&o!==P.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=E),s.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const s=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const n=s%this._numComponentsForDataType,r=this._accessorMin[n];this._accessorMin[n]="number"!=typeof r?t:Math.min(r,t);const o=this._accessorMax[n];this._accessorMax[n]="number"!=typeof o?t:Math.max(o,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return function t(s,n){return n*Math.ceil(s/n)}(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,s){switch(this._componentType){case T.pe.BYTE:return new Int8Array(t,s);case T.pe.FLOAT:return new Float32Array(t,s);case T.pe.SHORT:return new Int16Array(t,s);case T.pe.UNSIGNED_BYTE:return new Uint8Array(t,s);case T.pe.UNSIGNED_INT:return new Uint32Array(t,s);case T.pe.UNSIGNED_SHORT:return new Uint16Array(t,s)}}writeOutToBuffer(t,s){this._createTypedArray(t,s).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(s=>{const n=new Uint8Array(s);for(let r=0;r<n.length;++r)this._data.push(n[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const s=this._numComponentsForDataType;this._accessorMin=new Array(s),this._accessorMax=new Array(s)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),s=this._numComponentsForDataType,n=(this._data.length-this._accessorIndex)/s;if(n%1)throw new Error("An accessor was ended with missing component values");for(let o=0;o<this._accessorMin.length;++o)"number"!=typeof this._accessorMin[o]&&(this._accessorMin[o]=0),"number"!=typeof this._accessorMax[o]&&(this._accessorMax[o]=0);const r={byteOffset:t*(this._accessorIndex/s),componentType:this._componentType,count:n,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case T.pe.UNSIGNED_BYTE:case T.pe.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._finalizedPromise=this._isFinalized?Promise.resolve():new Promise(t=>this._finalizedPromiseResolve=t)}finalize(){var t=this;return(0,V.A)(function*(){const s=t._bufferView,n=t._buffer.getViewFinalizePromises(t);t._asyncWritePromise&&n.push(t._asyncWritePromise),yield Promise.allSettled(n),t._isFinalized=!0,s.byteOffset=t.getByteOffset(),s.byteLength=t.dataSize,t._finalizedPromiseResolve&&t._finalizedPromiseResolve()})()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case T.pe.BYTE:case T.pe.UNSIGNED_BYTE:return 1;case T.pe.SHORT:case T.pe.UNSIGNED_SHORT:return 2;case T.pe.UNSIGNED_INT:case T.pe.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case O.SCALAR:return 1;case O.VEC2:return 2;case O.VEC3:return 3;case O.VEC4:case O.MAT2:return 4;case O.MAT3:return 9;case O.MAT4:return 16}}}class k{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const s={byteLength:-1};t.buffers.push(s),this._buffer=s}addBufferView(t,s,n){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new ne(this,this._gltf,t,s,n);return this._bufferViews.push(r),r}getByteOffset(t){let s=0;for(const n of this._bufferViews){if(n===t)return s;s+=n.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const s=[];for(const n of this._bufferViews){if(t&&n===t)return s;s.push(n.finalized)}return s}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),s=new ArrayBuffer(t);let n=0;for(const r of this._bufferViews)r.writeOutToBuffer(s,n),n+=r.byteSize;return s}finalize(){var t;if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const s=this.getArrayBuffer();this._buffer.byteLength=s.byteLength,this._buffer.uri=s}),null!==(t=this._gltf.extras)&&void 0!==t&&t.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const s of this._bufferViews)t+=s.byteSize;return t}}function q(i,t){null==t.normal&&(t.normal=new Float32Array(t.position.length));const s=i.faces,{position:n,normal:r}=t,o=s.length/3;for(let E=0;E<o;++E){const a=3*s[3*E],R=3*s[3*E+1],l=3*s[3*E+2],A=(0,M.s)(re,n[a],n[a+1],n[a+2]),N=(0,M.s)(e,n[R],n[R+1],n[R+2]),p=(0,M.s)(Ce,n[l],n[l+1],n[l+2]),I=(0,M.f)(N,N,A),u=(0,M.f)(p,p,A),h=(0,M.b)(I,I,u);r[a]+=h[0],r[a+1]+=h[1],r[a+2]+=h[2],r[R]+=h[0],r[R+1]+=h[1],r[R+2]+=h[2],r[l]+=h[0],r[l+1]+=h[1],r[l+2]+=h[2]}for(let E=0;E<r.length;E+=3)(0,M.s)(Q,r[E],r[E+1],r[E+2]),(0,M.n)(Q,Q),r[E]=Q[0],r[E+1]=Q[1],r[E+2]=Q[2]}const re=(0,C.vt)(),e=(0,C.vt)(),Ce=(0,C.vt)(),Q=(0,C.vt)();var ee=f(87567),Ee=f(39690);const ae=()=>x.A.getLogger("gltf");class de{constructor(t,s,n){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:s,binChunkBuffer:null,promises:[]}},n&&(this.params=n),this._addScenes(t)}_addScenes(t){this.gltf.scene=t.defaultScene;const s=this.gltf.extras,n=s.options.bufferOutputType===D.GLB||s.options.imageOutputType===m.GLB;n&&(s.binChunkBuffer=new k(this.gltf)),t.forEachScene(r=>{this._addScene(r)}),n&&s.binChunkBuffer.finalize()}_addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const s={};t.name&&(s.name=t.name),t.forEachNode(n=>{s.nodes||(s.nodes=[]),s.nodes.push(...this._addNodes(n))}),this.gltf.scenes.push(s)}_addNodes(t){this.gltf.nodes||(this.gltf.nodes=[]);const s={};t.name&&(s.name=t.name);const n=t.translation;(0,M.j)(n,C.uY)||(s.translation=(0,C.o8)(n));const r=t.rotation;(0,g.t2)(r,L.zK)||(s.rotation=(0,L.o8)(r));const o=t.scale;(0,M.j)(o,C.Un)||(s.scale=(0,C.o8)(o));const E=this.gltf.nodes.length;if(this.gltf.nodes.push(s),t.mesh&&t.mesh.vertexAttributes.position){const a=this._createMeshes(t.mesh),R=[E];if(1===a.length)this._addMesh(s,a[0]);else for(const l of a){const A={};this._addMesh(A,l),R.push(this.gltf.nodes.length),this.gltf.nodes.push(A)}return R}return t.forEachNode(a=>{s.children||(s.children=[]),s.children.push(...this._addNodes(a))}),[E]}_addMesh(t,s){var n,r;null!==(r=(n=this.gltf).meshes)&&void 0!==r||(n.meshes=[]);const o=this.gltf.meshes.length;this.gltf.meshes.push(s),t.mesh=o}_createMeshes(t){const s=this.gltf.extras,n=s.options.bufferOutputType===D.GLB;let r;r=n?s.binChunkBuffer:new k(this.gltf),this.params.origin||(this.params.origin=t.anchor);const{ignoreLocalTransform:o}=this.params,E=o?null:t.transform,{vertexSpace:a,spatialReference:R}=t,l=a.origin,A=t.vertexAttributes;let N=null;if("local"===a.type){var p;const c=(0,_.KX)(R);(0,U.hs)(Se,null!==(p=null==E?void 0:E.localMatrix)&&void 0!==p?p:F.zK,[c,c,c]),N=(0,b.applyTransform)(A,Se)}else{const c=o?new v.A({origin:l?(0,C.o8)(l):null}):a;N=(0,b.ungeoreferenceByTransform)(A,c,E,this.params.origin,{geographic:this.params.geographic,unit:"meters"})}if(null==N)throw new z.A("Error during gltf export.");A.position&&N.position===A.position&&(N.position=A.position.slice()),A.normal&&N.normal===A.normal&&(N.normal=A.normal.slice()),A.tangent&&N.tangent===A.tangent&&(N.tangent=A.tangent.slice()),function $(i,t){if(i.components)for(const s of i.components)s.faces&&"smooth"===s.shading&&q(s,t)}(t,N),this._flipYZAxis(N);const I=r.addBufferView(T.pe.FLOAT,O.VEC3,P.ARRAY_BUFFER);let u,h,B,S;N.normal&&(u=r.addBufferView(T.pe.FLOAT,O.VEC3,P.ARRAY_BUFFER)),A.uv&&(h=r.addBufferView(T.pe.FLOAT,O.VEC2,P.ARRAY_BUFFER)),N.tangent&&(B=r.addBufferView(T.pe.FLOAT,O.VEC4,P.ARRAY_BUFFER)),A.color&&(S=r.addBufferView(T.pe.UNSIGNED_BYTE,O.VEC4,P.ARRAY_BUFFER)),I.startAccessor("POSITION"),u&&u.startAccessor("NORMAL"),h&&h.startAccessor("TEXCOORD_0"),B&&B.startAccessor("TANGENT"),S&&S.startAccessor("COLOR_0");const W=N.position.length/3,{position:Ae,normal:ie,tangent:te}=N,{color:se,uv:Re}=A;for(let c=0;c<W;++c)I.push(Ae[3*c]),I.push(Ae[3*c+1]),I.push(Ae[3*c+2]),u&&null!=ie&&(u.push(ie[3*c]),u.push(ie[3*c+1]),u.push(ie[3*c+2])),h&&null!=Re&&(h.push(Re[2*c]),h.push(Re[2*c+1])),B&&null!=te&&(B.push(te[4*c]),B.push(te[4*c+1]),B.push(te[4*c+2]),B.push(te[4*c+3])),S&&null!=se&&(S.push(se[4*c]),S.push(se[4*c+1]),S.push(se[4*c+2]),S.push(se[4*c+3]));const Ge=I.endAccessor(),Ie=this._addAccessor(I.index,Ge);let ce,fe,le,he,oe;if(u){const c=u.endAccessor();ce=this._addAccessor(u.index,c)}if(h){const c=h.endAccessor();fe=this._addAccessor(h.index,c)}if(B){const c=B.endAccessor();le=this._addAccessor(B.index,c)}if(S){const c=S.endAccessor();he=this._addAccessor(S.index,c)}const Ne=[];return t.components&&t.components.length>0&&t.components[0].faces?(oe=r.addBufferView(T.pe.UNSIGNED_INT,O.SCALAR,P.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(oe,t.components,Ne,Ie,ce,fe,le,he)):this._addMeshVertexNonIndexed(t.components,Ne,Ie,ce,fe,le,he),I.finalize(),u&&u.finalize(),h&&h.finalize(),B&&B.finalize(),oe&&oe.finalize(),S&&S.finalize(),n||r.finalize(),Ne}_flipYZAxis({position:t,normal:s,tangent:n}){this._flipYZBuffer(t,3),this._flipYZBuffer(s,3),this._flipYZBuffer(n,4)}_flipYZBuffer(t,s){if(null!=t)for(let n=1,r=2;n<t.length;n+=s,r+=s){const o=t[n];t[n]=t[r],t[r]=-o}}_addMaterial(t){if(null===t)return;const s=this._materialMap.indexOf(t);if(-1!==s)return s;this.gltf.materials||(this.gltf.materials=[]);const n={};switch(t.alphaMode){case"mask":n.alphaMode=Z.MASK;break;case"auto":case"blend":n.alphaMode=Z.BLEND}.5!==t.alphaCutoff&&(n.alphaCutoff=t.alphaCutoff),t.doubleSided&&(n.doubleSided=t.doubleSided),n.pbrMetallicRoughness={};const r=a=>a**2.1,o=a=>{const R=a.toRgba();return R[0]=r(R[0]/255),R[1]=r(R[1]/255),R[2]=r(R[2]/255),R};if(null!=t.color&&(n.pbrMetallicRoughness.baseColorFactor=o(t.color)),null!=t.colorTexture&&(n.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(t.colorTexture,t.colorTextureTransform)),null!=t.normalTexture&&(n.normalTexture=this._createTextureInfo(t.normalTexture,t.normalTextureTransform)),t instanceof Y.A){if(null!=t.emissiveTexture&&(n.emissiveTexture=this._createTextureInfo(t.emissiveTexture,t.emissiveTextureTransform)),null!=t.emissiveColor){const a=o(t.emissiveColor);n.emissiveFactor=[a[0],a[1],a[2]]}null!=t.occlusionTexture&&(n.occlusionTexture=this._createTextureInfo(t.occlusionTexture,t.occlusionTextureTransform)),null!=t.metallicRoughnessTexture&&(n.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(t.metallicRoughnessTexture,t.metallicRoughnessTextureTransform)),n.pbrMetallicRoughness.metallicFactor=t.metallic,n.pbrMetallicRoughness.roughnessFactor=t.roughness}else n.pbrMetallicRoughness.metallicFactor=1,n.pbrMetallicRoughness.roughnessFactor=1,ae().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const E=this.gltf.materials.length;return this.gltf.materials.push(n),this._materialMap.push(t),E}_createTextureInfo(t,s){const n={index:this._addTexture(t)};return s&&(n.extensions||(n.extensions={}),n.extensions.KHR_texture_transform={scale:s.scale,offset:s.offset,rotation:(0,w.kU)(s.rotation)}),n}_addTexture(t){var s;const n=null!==(s=this.gltf.textures)&&void 0!==s?s:[];return this.gltf.textures=n,(0,X.tE)(this._textureMap,t,()=>{const r={sampler:this._addSampler(t),source:this._addImage(t)},o=n.length;return n.push(r),o})}_addImage(t){const s=this._imageMap.get(t);if(null!=s)return s;this.gltf.images||(this.gltf.images=[]);const n={};if(t.url)n.uri=t.url;else{const o=t.data;n.extras=o;for(let a=0;a<this.gltf.images.length;++a)if(o===this.gltf.images[a].extras)return a;const E=this.gltf.extras;switch(E.options.imageOutputType){case m.GLB:{const a=E.binChunkBuffer.addBufferView(T.pe.UNSIGNED_BYTE,O.SCALAR);if((0,Ee.x3)(o))null!=o.data&&a.writeOutToBuffer(o.data,0);else{const R=(0,ee.ip)(o).then(({data:l,type:A})=>(n.mimeType=A,l));a.writeAsync(R).then(()=>{a.finalize()})}n.bufferView=a.index;break}case m.DataURI:if((0,Ee.x3)(o)){ae().warnOnce("Image export for basis compressed textures not available.");break}n.uri=(0,ee.NH)(o);break;default:if((0,Ee.x3)(o)){ae().warnOnce("Image export for basis compressed textures not available.");break}E.promises.push((0,ee.ip)(o).then(({data:a,type:R})=>{n.uri=a,n.mimeType=R}))}}const r=this.gltf.images.length;return this.gltf.images.push(n),this._imageMap.set(t,r),r}_addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let s=T.pF.REPEAT,n=T.pF.REPEAT;if("string"==typeof t.wrap)switch(t.wrap){case"clamp":s=T.pF.CLAMP_TO_EDGE,n=T.pF.CLAMP_TO_EDGE;break;case"mirror":s=T.pF.MIRRORED_REPEAT,n=T.pF.MIRRORED_REPEAT}else{switch(t.wrap.vertical){case"clamp":n=T.pF.CLAMP_TO_EDGE;break;case"mirror":n=T.pF.MIRRORED_REPEAT}switch(t.wrap.horizontal){case"clamp":s=T.pF.CLAMP_TO_EDGE;break;case"mirror":s=T.pF.MIRRORED_REPEAT}}const r={wrapS:s,wrapT:n};for(let E=0;E<this.gltf.samplers.length;++E)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[E]))return E;const o=this.gltf.samplers.length;return this.gltf.samplers.push(r),o}_addAccessor(t,s){this.gltf.accessors||(this.gltf.accessors=[]);const n={bufferView:t,byteOffset:s.byteOffset,componentType:s.componentType,count:s.count,type:s.type,min:s.min,max:s.max,name:s.name};s.normalized&&(n.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(n),r}_addMeshVertexIndexed(t,s,n,r,o,E,a,R){const l=new Map;for(const A of s){t.startAccessor("INDICES");for(let u=0;u<A.faces.length;++u)t.push(A.faces[u]);const N=t.endAccessor(),p={attributes:{POSITION:r},indices:this._addAccessor(t.index,N),material:this._addMaterial(A.material)};o&&"flat"!==A.shading&&(p.attributes.NORMAL=o),E&&(p.attributes.TEXCOORD_0=E),a&&"flat"!==A.shading&&(p.attributes.TANGENT=a),R&&(p.attributes.COLOR_0=R);const I=l.get(A.name);if(I)I.primitives.push(p);else{const u={name:A.name,primitives:[p]};l.set(A.name,u),n.push(u)}}}_addMeshVertexNonIndexed(t,s,n,r,o,E,a){const R={primitives:[]};s.push(R);const l={attributes:{POSITION:n}};r&&(l.attributes.NORMAL=r),o&&(l.attributes.TEXCOORD_0=o),E&&(l.attributes.TANGENT=E),a&&(l.attributes.COLOR_0=a),t&&(l.material=this._addMaterial(t[0].material)),R.primitives.push(l)}}const Se=(0,F.vt)();var _e=f(89952);class Le{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.includes(t))throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){(0,_e.TF)(this._scenes,t)}forEachScene(t){this._scenes.forEach(t)}}class Me{constructor(t){this.mesh=t,this.name="",this.translation=(0,C.vt)(),this.rotation=(0,L.vt)(),this.scale=(0,C.o8)(C.Un),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(t){(0,g.A6)(this.rotation,t[0],t[1],t[2])}}const pe="model.gltf",Oe="model.glb";function Te(){return Te=(0,V.A)(function*(i,t,s){var n,r;const o=new de(i,t=t||{},s);let E=o.params;E?E.origin||(E.origin=new y.A({x:-1,y:-1,z:-1})):E={origin:new y.A({x:-1,y:-1,z:-1})};const a=E.origin,R=o.gltf,l=null!==(n=null===(r=R.extras)||void 0===r?void 0:r.promises)&&void 0!==n?n:[];let A=1,N=1,p=null;yield Promise.allSettled(l);const I={origin:a};delete R.extras;const h=JSON.stringify(R,(B,S)=>{if("extras"!==B){if(S instanceof ArrayBuffer){if((0,ee.vG)(S))switch(t.imageOutputType){case m.DataURI:case m.GLB:break;default:{const W=`img${N}.png`;return N++,I[W]=S,W}}switch(t.bufferOutputType){case D.DataURI:return(0,ee.sU)(S);case D.GLB:if(p)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(p=S);default:{const W=`data${A}.bin`;return A++,I[W]=S,W}}}return S}},"number"==typeof t.jsonSpacing?t.jsonSpacing:4);return t.bufferOutputType===D.GLB||t.imageOutputType===m.GLB?I[Oe]=new d(h,p).buffer:I[pe]=h,I}),Te.apply(this,arguments)}class Ue{constructor(){this.name="",this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}}class Pe{constructor(t,s){this._file={type:"model/gltf-binary",data:t},this.origin=s}buffer(){return Promise.resolve(this._file)}download(t){(0,H.IZ)(new Blob([this._file.data],{type:this._file.type}),t)}}function me(i,t){const s=new Le,n=new Ue;return s.addScene(n),n.addNode(new Me(i)),function Be(i,t){return function De(i,t,s){return Te.apply(this,arguments)}(i,{bufferOutputType:D.GLB,imageOutputType:m.GLB,jsonSpacing:0},t)}(s,t).then(r=>new Pe(r[Oe],r.origin))}},39690:(ue,K,f)=>{f.d(K,{KB:()=>z,Xi:()=>G,pn:()=>X,x3:()=>d});var H=f(10467),V=f(3248),y=f(67496);class G{constructor(U){this.data=U,this.type="encoded-mesh-texture",this.encoding=y.JS.KTX2_ENCODING}}function d(_){return"encoded-mesh-texture"===(null==_?void 0:_.type)}function z(_){return x.apply(this,arguments)}function x(){return(x=(0,H.A)(function*(_){const U=new Blob([_]),F=yield U.text();return JSON.parse(F)})).apply(this,arguments)}function X(_,U){return w.apply(this,arguments)}function w(){return(w=(0,H.A)(function*(_,U){if(U===y.JS.KTX2_ENCODING)return new G(_);const F=new Blob([_],{type:U}),g=URL.createObjectURL(F),L=new Image;if((0,V.A)("esri-iPhone"))return new Promise((M,C)=>{const v=()=>{b(),M(L)},Y=D=>{b(),C(D)},b=()=>{URL.revokeObjectURL(g),L.removeEventListener("load",v),L.removeEventListener("error",Y)};L.addEventListener("load",v),L.addEventListener("error",Y),L.src=g});try{L.src=g,yield L.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(g),L})).apply(this,arguments)}},50915:(ue,K,f)=>{var H,V,y,G,d,z,x,X,w,_,U,F,g,L,M,C,v,Y,b,D,e;f.d(K,{Ab:()=>L,Ac:()=>x,Ap:()=>g,CQ:()=>J,Cj:()=>U,Co:()=>b,H0:()=>M,Hr:()=>j,MT:()=>w,NZ:()=>d,Nm:()=>O,R:()=>D,Tb:()=>G,WR:()=>V,Y7:()=>z,_U:()=>Y,dn:()=>y,eA:()=>_,hn:()=>H,ld:()=>C,nI:()=>Z,pF:()=>F,pe:()=>X,sS:()=>$,tx:()=>q,vt:()=>P,xM:()=>m,xV:()=>T,yQ:()=>v}),(e=H||(H={}))[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(V||(V={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(y||(y={})),function(e){e[e.ADD=32774]="ADD",e[e.MIN=32775]="MIN",e[e.MAX=32776]="MAX",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(G||(G={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",e[e.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(d||(d={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(z||(z={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(x||(x={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(X||(X={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(w||(w={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(_||(_={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(U||(U={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(F||(F={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(g||(g={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(L||(L={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(M||(M={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(C||(C={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(v||(v={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(Y||(Y={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(b||(b={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(D||(D={}));const m=33984;var P,O,j;(function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.TransformFeedback=7]="TransformFeedback",e[e.Sync=8]="Sync",e[e.UNCOUNTED=9]="UNCOUNTED",e[e.LinesOfCode=9]="LinesOfCode",e[e.Uniform=10]="Uniform",e[e.COUNT=11]="COUNT"})(P||(P={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(O||(O={})),function(e){e[e.NONE=0]="NONE",e[e.BACK=1029]="BACK"}(j||(j={}));const Z=33306;var J,T,ne,k,$,q,re;(function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"})(J||(J={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(T||(T={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(ne||(ne={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(k||(k={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}($||($={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(q||(q={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(re||(re={}))}}]);