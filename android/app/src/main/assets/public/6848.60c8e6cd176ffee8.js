"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6848],{96848:(ue,L,f)=>{f.r(L),f.d(L,{ElevationQuery:()=>ae,GeometryDescriptor:()=>g,getFinestLodIndex:()=>z});var m=f(10467),Y=f(89447),x=f(5922),O=f(11432),w=f(56492),D=f(82663),C=f(21870),M=f(13303),H=f(93615),R=f(11817),A=f(51995),J=(f(21152),f(3248),f(17715)),X=f(35150),ee=f(55039);const q=()=>X.A.getLogger("esri.layers.support.ElevationSampler");class P{queryElevation(e){return function ne(c,e){const t=$(c,e.spatialReference);if(!t)return null;switch(c.type){case"point":!function ie(c,e,t){c.z=t.elevationAt(e.x,e.y)}(c,t,e);break;case"polyline":!function le(c,e,t){T.spatialReference=e.spatialReference;const n=c.hasM&&!c.hasZ;for(let i=0;i<c.paths.length;i++){const s=c.paths[i],l=e.paths[i];for(let o=0;o<s.length;o++){const a=s[o],r=l[o];T.x=r[0],T.y=r[1],n&&(a[3]=a[2]),a[2]=t.elevationAt(T.x,T.y)}}c.hasZ=!0}(c,t,e);break;case"multipoint":!function se(c,e,t){T.spatialReference=e.spatialReference;const n=c.hasM&&!c.hasZ;for(let i=0;i<c.points.length;i++){const s=c.points[i],l=e.points[i];T.x=l[0],T.y=l[1],n&&(s[3]=s[2]),s[2]=t.elevationAt(T.x,T.y)}c.hasZ=!0}(c,t,e)}return c}(e.clone(),this)}on(){return(0,J.hA)()}projectIfRequired(e,t){return $(e,t)}}class te extends P{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){super(),this.tile=e,this.noDataValue=n;const i=e.tile.extent;this.extent=(0,A.w1)(i,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=i;const s=(0,D.GA)(t.spatialReference),l=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:l,max:l}}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return null!=t&&this.containsAt(t.x,t.y)}containsAt(e,t){return(0,A.Rj)(this._aaExtent,e,t)}elevationAt(e,t){var n;if(!this.containsAt(e,t)){const i=this.extent,s=`${i.xmin}, ${i.ymin}, ${i.xmax}, ${i.ymax}`;return q().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${s})`),this.noDataValue}return null!==(n=this.tile.sample(e,t))&&void 0!==n?n:this.noDataValue}}class j extends P{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){let i;super(),"number"==typeof t?(this.noDataValue=t,i=null):(i=t,this.noDataValue=n),this.samplers=i?e.map(l=>new te(l,i,this.noDataValue)):e;const s=this.samplers[0];if(s){this.extent=s.extent.clone();const{min:l,max:o}=s.demResolution;this.demResolution={min:l,max:o};for(let a=1;a<this.samplers.length;a++){const r=this.samplers[a];this.extent.union(r.extent),this.demResolution.min=Math.min(this.demResolution.min,r.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,r.demResolution.max)}}else this.extent=(0,A.w1)((0,A.vt)(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){let n,i=!1;for(const s of this.samplers)if(s.containsAt(e,t)&&(i=!0,n=s.elevationAt(e,t),n!==s.noDataValue))return n;return null!=n?n:(i||q().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue)}}function $(c,e){if(null==c)return null;const t=c.spatialReference;if(t.equals(e))return c;const n=(0,ee.Cv)(c,e);return n||q().error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),n}const T=new M.A;class oe{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}}class G{constructor(e,t=null){this.tile=e,null!=t&&null!=e&&(this._samplerData=new oe(t,e.extent))}get zmin(){return null!=this._samplerData?this._samplerData.data.minValue:0}get zmax(){return null!=this._samplerData?this._samplerData.data.maxValue:0}get hasNoDataValues(){var e;return!(null===(e=this._samplerData)||void 0===e||!e.data.hasNoDataValues)}sample(e,t){if(null==this._samplerData)return;const{safeWidth:n,data:i,dx:s,dy:l,y1:o,x0:a}=this._samplerData,{width:r,values:u,noDataValue:p}=i,y=U(l*(o-t),0,n),h=U(s*(e-a),0,n),v=Math.floor(y),Q=Math.floor(h),V=v*r+Q,b=V+r,_=u[V],S=u[b],k=u[V+1],W=u[b+1];if(_!==p&&S!==p&&k!==p&&W!==p){const K=h-Q,B=_+(k-_)*K;return B+(S+(W-S)*K-B)*(y-v)}}}function U(c,e,t){return c<e?e:c>t?t:c}var Z=f(25858);class ae{queryAll(e,t,n){var i=this;return(0,m.A)(function*(){if(!(e=n&&n.ignoreInvisibleLayers?e.filter(u=>u.visible):e.slice()).length)throw new x.A("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s=g.fromGeometry(t);let l=!1;n&&n.returnSampleInfo||(l=!0);const o={...I,...n,returnSampleInfo:!0},a=yield i.query(e[e.length-1],s,o),r=yield i._queryAllContinue(e,a,o);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r})()}query(e,t,n){var i=this;return(0,m.A)(function*(){if(!e)throw new x.A("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof g)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new x.A("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s={...I,...n},l=new re(e,t.spatialReference,s),o=s.signal;return yield e.load({signal:o}),yield i._createGeometryDescriptor(l,t,o),yield i._selectTiles(l,o),yield i._populateElevationTiles(l,o),i._sampleGeometryWithElevation(l),i._createQueryResult(l,o)})()}createSampler(e,t,n){var i=this;return(0,m.A)(function*(){if(!e)throw new x.A("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new x.A("elevation-query:invalid-extent","Invalid or undefined extent");const s={...I,...n};return i._createSampler(e,t,s)})()}createSamplerAll(e,t,n){var i=this;return(0,m.A)(function*(){if(!(e=n&&n.ignoreInvisibleLayers?e.filter(o=>o.visible):e.slice()).length)throw new x.A("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new x.A("elevation-query:invalid-extent","Invalid or undefined extent");const s={...I,...n,returnSampleInfo:!0},l=yield i._createSampler(e[e.length-1],t,s);return i._createSamplerAllContinue(e,t,l,s)})()}_createSampler(e,t,n,i){var s=this;return(0,m.A)(function*(){const l=n.signal;yield e.load({signal:l});const o=t.spatialReference,a=e.tileInfo.spatialReference;o.equals(a)||(yield(0,R.initializeProjection)([{source:o,dest:a}],{signal:l}),t=(0,R.project)(t,a));const r=new ce(e,t,n,i);return yield s._selectTiles(r,l),yield s._populateElevationTiles(r,l),new j(r.elevationTiles,r.layer.tileInfo,r.options.noDataValue)})()}_createSamplerAllContinue(e,t,n,i){var s=this;return(0,m.A)(function*(){if(e.pop(),!e.length)return n;const l=n.samplers.filter(u=>!u.tile.hasNoDataValues).map(u=>(0,A.VY)(u.extent)),o=yield s._createSampler(e[e.length-1],t,i,l);if(0===o.samplers.length)return n;const a=n.samplers.concat(o.samplers),r=new j(a,i.noDataValue);return s._createSamplerAllContinue(e,t,r,i)})()}_queryAllContinue(e,t,n){var i=this;return(0,m.A)(function*(){const s=e.pop(),l=t.geometry.coordinates,o=t.sampleInfo;(0,O.Lw)(o);const a=[],r=[];for(let h=0;h<l.length;h++){const v=o[h];v.demResolution>=0?v.source||(v.source=s):e.length&&(a.push(l[h]),r.push(h))}if(!e.length||0===a.length)return t;const u=t.geometry.clone(a),p=yield i.query(e[e.length-1],u,n),y=p.sampleInfo;if(!y)throw new Error("no sampleInfo");return r.forEach((h,v)=>{l[h].z=p.geometry.coordinates[v].z,o[h].demResolution=y[v].demResolution}),i._queryAllContinue(e,t,n)})()}_createQueryResult(e,t){var n=this;return(0,m.A)(function*(){const i=yield e.geometry.project(e.outSpatialReference,t);(0,O.Lw)(i);const s={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(s.sampleInfo=n._extractSampleInfo(e)),e.geometry.coordinates.forEach(l=>{l.tile=null,l.elevationTile=null}),s})()}_createGeometryDescriptor(e,t,n){return(0,m.A)(function*(){let i;const s=e.layer.tileInfo.spatialReference;if(t instanceof g?i=yield t.project(s,n):(yield(0,R.initializeProjection)([{source:t.spatialReference,dest:s}],{signal:n}),i=(0,R.project)(t,s)),!i)throw new x.A("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);e.geometry=g.fromGeometry(i)})()}_selectTiles(e,t){var n=this;return(0,m.A)(function*(){"geometry"===e.type&&n._preselectOutsideLayerExtent(e);const i=e.options.demResolution;if("number"==typeof i)n._selectTilesClosestResolution(e,i);else if("finest-contiguous"===i)yield n._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new x.A("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);yield n._selectTilesAuto(e,t)}})()}_preselectOutsideLayerExtent(e){if(null==e.layer.fullExtent)return;const t=new G(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const n=e.layer.fullExtent;e.geometry.coordinates.forEach(i=>{const s=i.x,l=i.y;(s<n.xmin||s>n.xmax||l<n.ymin||l>n.ymax)&&(i.elevationTile=t)})}_selectTilesClosestResolution(e,t){const n=this._findNearestDemResolutionLODIndex(e,t);e.selectTilesAtLOD(n)}_findNearestDemResolutionLODIndex(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,s=t/(0,D.GA)(n.spatialReference),l=E(n,i);let o=l[0],a=0;for(let r=1;r<l.length;r++){const u=l[r];Math.abs(u.resolution-s)<Math.abs(o.resolution-s)&&(o=u,a=r)}return a}_selectTilesFinestContiguous(e,t){var n=this;return(0,m.A)(function*(){const{tileInfo:i,tilemapCache:s}=e.layer,l=z(i,s,e.options.minDemResolution);yield n._selectTilesFinestContiguousAt(e,l,t)})()}_selectTilesFinestContiguousAt(e,t,n){var i=this;return(0,m.A)(function*(){const s=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const l=s.tilemapCache,o=e.getTilesToFetch();try{if(l&&!F(l))yield(0,w.qr)(Promise.all(o.map(a=>l.fetchAvailability(a.level,a.row,a.col,{signal:n}))),n);else if(yield i._populateElevationTiles(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new x.A("elevation-query:has-unavailable-tiles")}catch(a){(0,w.QP)(a),yield i._selectTilesFinestContiguousAt(e,t-1,n)}})()}_populateElevationTiles(e,t){return(0,m.A)(function*(){const n=e.getTilesToFetch(),i={},s=e.options.cache,l=e.options.noDataValue,o=n.map(function(){var a=(0,m.A)(function*(r){if(null==r.id)return;const u=`${e.layer.uid}:${r.id}:${l}`,p=null!=s?s.get(u):null,y=null!=p?p:yield e.layer.fetchTile(r.level,r.row,r.col,{noDataValue:l,signal:t});null!=s&&s.put(u,y),i[r.id]=new G(r,y)});return function(r){return a.apply(this,arguments)}}());yield(0,w.qr)(Promise.allSettled(o),t),e.populateElevationTiles(i)})()}_selectTilesAuto(e,t){var n=this;return(0,m.A)(function*(){n._selectTilesAutoFinest(e),n._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i||F(i))return n._selectTilesAutoPrefetchUpsample(e,t);const s=e.getTilesToFetch(),l={},o=s.map(function(){var a=(0,m.A)(function*(r){const u=new Z.U(null,0,0,0,(0,A.vt)()),p=yield(0,Y.Ke)(i.fetchAvailabilityUpsample(r.level,r.row,r.col,u,{signal:t}));!1!==p.ok?null!=r.id&&(l[r.id]=u):(0,w.QP)(p.error)});return function(r){return a.apply(this,arguments)}}());yield(0,w.qr)(Promise.all(o),t),e.remapTiles(l)})()}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let n=0;const i={},s=a=>{null!=a.id&&(a.id in i?i[a.id]++:(i[a.id]=1,n++))},l=a=>{if(null==a.id)return;const r=i[a.id];1===r?(delete i[a.id],n--):i[a.id]=r-1};e.forEachTileToFetch(s,l);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch(a=>{n<=e.options.maximumAutoTileRequests||(l(a),t.upsampleTile(a)&&(o=!0),s(a))},l),o););}_selectTilesAutoFinest(e){const{tileInfo:t,tilemapCache:n}=e.layer,i=z(t,n,e.options.minDemResolution);e.selectTilesAtLOD(i,e.options.maximumAutoTileRequests)}_selectTilesAutoPrefetchUpsample(e,t){var n=this;return(0,m.A)(function*(){const i=e.layer.tileInfo;yield n._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch((l,o)=>{i.upsampleTile(l)?s=!0:o()}),s&&(yield n._selectTilesAutoPrefetchUpsample(e,t))})()}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const n=t.elevationTile;let i=e.options.noDataValue;if(n){const s=n.sample(t.x,t.y);null!=s?i=s:t.elevationTile=null}t.z=i})}_extractSampleInfo(e){const t=e.layer.tileInfo,n=(0,D.GA)(t.spatialReference);return e.geometry.coordinates.map(i=>{let s=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(i.elevationTile.tile.level).resolution*n),{demResolution:s}})}}class g{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new g;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(n=>n.clone()),t._exporter=this._exporter,t}project(e,t){var n=this;return(0,m.A)(function*(){if(n.spatialReference.equals(e))return n.clone();yield(0,R.initializeProjection)([{source:n.spatialReference,dest:e}],{signal:t});const i=new C.A({spatialReference:n.spatialReference,points:n.coordinates.map(a=>[a.x,a.y])}),s=(0,R.project)(i,e);if(!s)return null;const l=n.coordinates.map((a,r)=>{const u=a.clone(),p=s.points[r];return u.x=p[0],u.y=p[1],u}),o=n.clone(l);return o.spatialReference=e,o})()}static fromGeometry(e){const t=new g;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof g)t.coordinates=e.coordinates.map(n=>n.clone()),t._exporter=(n,i)=>{const s=e.clone(n);return s.spatialReference=i,s};else switch(e.type){case"point":{const n=e,{hasZ:i,hasM:s}=n;t.coordinates=i&&s?[new d(n.x,n.y,n.z,n.m)]:i?[new d(n.x,n.y,n.z)]:s?[new d(n.x,n.y,null,n.m)]:[new d(n.x,n.y)],t._exporter=(l,o)=>e.hasM?new M.A(l[0].x,l[0].y,l[0].z,l[0].m,o):new M.A(l[0].x,l[0].y,l[0].z,o);break}case"multipoint":{const n=e,{hasZ:i,hasM:s}=n;t.coordinates=n.points.map(i&&s?l=>new d(l[0],l[1],l[2],l[3]):i?l=>new d(l[0],l[1],l[2]):s?l=>new d(l[0],l[1],null,l[2]):l=>new d(l[0],l[1])),t._exporter=(l,o)=>e.hasM?new C.A({points:l.map(a=>[a.x,a.y,a.z,a.m]),hasZ:!0,hasM:!0,spatialReference:o}):new C.A(l.map(a=>[a.x,a.y,a.z]),o);break}case"polyline":{const n=e,i=[],s=[],{hasZ:l,hasM:o}=e;let a=0;for(const r of n.paths)if(s.push([a,a+r.length]),a+=r.length,l&&o)for(const u of r)i.push(new d(u[0],u[1],u[2],u[3]));else if(l)for(const u of r)i.push(new d(u[0],u[1],u[2]));else if(o)for(const u of r)i.push(new d(u[0],u[1],null,u[2]));else for(const u of r)i.push(new d(u[0],u[1]));t.coordinates=i,t._exporter=(r,u)=>{const p=r.map(e.hasM?h=>[h.x,h.y,h.z,h.m]:h=>[h.x,h.y,h.z]),y=s.map(h=>p.slice(h[0],h[1]));return new H.A({paths:y,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class d{constructor(e,t,n=null,i=null,s=null,l=null){this.x=e,this.y=t,this.z=n,this.m=i,this.tile=s,this.elevationTile=l}clone(){return new d(this.x,this.y,this.z,this.m)}}class N{constructor(e,t){this.layer=e,this.options=t}}class re extends N{constructor(e,t,n){super(e,n),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>t.tile=null);else{const{tileInfo:t,tilemapCache:n}=this.layer,i=E(t,n)[e].level;this.geometry.coordinates.forEach(s=>s.tile=t.tileAt(i,s.x,s.y))}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const n of this.geometry.coordinates){var t;!n.elevationTile&&null!==(t=n.tile)&&void 0!==t&&t.id&&(n.elevationTile=e[n.tile.id])}}remapTiles(e){for(const n of this.geometry.coordinates){var t;const i=null===(t=n.tile)||void 0===t?void 0:t.id;n.tile=i?e[i]:null}}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){var n;const s=i.tile;if(!s)continue;const l=null===(n=i.tile)||void 0===n?void 0:n.id;i.elevationTile||!l||e[l]||(e[l]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class ce extends N{constructor(e,t,n,i){super(e,n),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.clone().intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:n}=this.layer,i=E(t,n);if(!e)return i.length-1;const s=this.extent;if(null==s)return-1;for(let l=i.length-1;l>=0;l--){const o=i[l],r=o.resolution*t.size[1];if(Math.ceil(s.width/(o.resolution*t.size[0]))*Math.ceil(s.height/r)<=e)return l}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const n=t.id&&e[t.id];n&&(this._fetchedCandidates.add(t),this.elevationTiles.push(n))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const n=this._candidateTiles;this._candidateTiles=[],n.forEach(i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,()=>s=!0),s?t&&t(i):this._candidateTiles.push(i)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const n={},i=[];for(const l of e){const o=l.id;o&&!n[o]?(n[o]=l,i.push(l)):t&&t(l)}const s=i.sort((l,o)=>l.level-o.level);return s.filter((l,o)=>{for(let a=0;a<o;a++){const r=s[a].extent;if(r&&l.extent&&(0,A.gR)(r,l.extent))return t&&t(l),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(null==t)return;const{tileInfo:n,tilemapCache:i}=this.layer,s=E(n,i)[e],l=n.tileAt(s.level,t.xmin,t.ymin),o=l.extent;if(null==o)return;const r=s.resolution*n.size[1],u=Math.ceil((t.xmax-o[0])/(s.resolution*n.size[0])),p=Math.ceil((t.ymax-o[1])/r);for(let y=0;y<p;y++)for(let h=0;h<u;h++){const v=new Z.U(null,l.level,l.row-y,l.col+h);n.updateTileInfo(v),this._tileIsMasked(v)||this._candidateTiles.push(v)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&(0,A.gR)(t,e.extent))}}function z(c,e,t=0){const n=E(c,e);let i=n.length-1;if(t>0){const s=t/(0,D.GA)(c.spatialReference),l=n.findIndex(o=>o.resolution<s);0===l?i=0:l>0&&(i=l-1)}return i}const I={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function E(c,e){const t=c.lods;if(F(e)){const{effectiveMinLOD:n,effectiveMaxLOD:i}=e;return t.filter(s=>s.level>=n&&s.level<=i)}return t}function F(c){return null!=(null==c?void 0:c.tileInfo)}}}]);