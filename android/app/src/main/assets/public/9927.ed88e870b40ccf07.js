"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9927],{69927:(T,m,i)=>{i.d(m,{It:()=>R,LG:()=>E,OM:()=>d,Sm:()=>P,Y:()=>_,bK:()=>L,mm:()=>f,sQ:()=>S});var c=i(10467),p=i(11817),M=i(32034),I=i(55039);function s(){return(s=(0,c.A)(function*(t){const n=t.spatialReference;if(n.isWGS84)return t.clone();if(n.isWebMercator)return(0,I.ci)(t);const e=M.A.WGS84;return yield(0,p.initializeProjection)(n,e),(0,p.project)(t,e)})).apply(this,arguments)}function E(t,n){if(!_(t,n)){const e=t.typeKeywords;e?e.push(n):t.typeKeywords=[n]}}function _(t,n){var e;return!(null===(e=t.typeKeywords)||void 0===e||!e.includes(n))}function L(t){return _(t,f.HOSTED_SERVICE)}function d(t,n){const e=t.typeKeywords;if(e){const r=e.indexOf(n);r>-1&&e.splice(r,1)}}function P(t,n,e){e?E(t,n):d(t,n)}function S(t){return u.apply(this,arguments)}function u(){return u=(0,c.A)(function*(t){const n=t.clone().normalize();let e;if(n.length>1)for(const r of n)e?r.width>e.width&&(e=r):e=r;else e=n[0];return function O(t){return s.apply(this,arguments)}(e)}),u.apply(this,arguments)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function R(t){var n;const{portal:e,isOrgItem:r,itemControl:y}=t,o=null===(n=e.user)||void 0===n?void 0:n.privileges;let l=!o||o.includes("features:user:edit"),a=!!r&&!(null==o||!o.includes("features:user:fullEdit"));const A="update"===y||"admin"===y;return A?a=l=!0:a&&(l=!0),{features:{edit:l,fullEdit:a},content:{updateItem:A}}}}}]);