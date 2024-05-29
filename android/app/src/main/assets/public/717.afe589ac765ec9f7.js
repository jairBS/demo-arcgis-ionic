"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[717],{75915:(Ae,Y,_)=>{_.d(Y,{D:()=>$e,b:()=>We});var A=_(18238),y=_(43208),R=_(74567),b=_(29359),D=_(93877),x=_(20367),B=_(34416),N=_(79052),I=_(49378),oe=_(66874),he=_(23388),G=_(17304),C=_(81077),w=_(27961),X=_(28799),ae=_(35670),ie=_(62770),K=_(44987),$=_(94031),se=_(6698),q=_(87522),ce=_(9933),fe=_(55189),te=_(41377),_e=_(98541),ye=_(21589),Ve=_(79110),Le=_(19213),Se=_(3906),at=_(88791),xt=_(18356),dt=_(65840),we=_(93093),lt=_(56857),st=_(35089),Te=_(83415),Me=_(40972);function We(pe){const De=new lt.N5,{vertex:tt,fragment:ee,varyings:re}=De;if((0,Se.NB)(tt,pe),De.include(N.I),re.add("vpos","vec3"),De.include(_e.A,pe),De.include(x.BK,pe),De.include(C.G,pe),De.include(te.q2,pe),pe.output===R.V.Color||pe.output===R.V.Alpha){De.include(te.Sx,pe),De.include(te.MU,pe),De.include(te.O1,pe),De.include(te.QM,pe),(0,Se.yu)(tt,pe),De.include(B.Y,pe),De.include(D.d,pe);const le=pe.normalType===B.W.Attribute||pe.normalType===B.W.Compressed;le&&pe.offsetBackfaces&&De.include(y.M),De.include(X.W,pe),De.include(G.Mh,pe),pe.instancedColor&&De.attributes.add(Me.r.INSTANCECOLOR,"vec4"),re.add("vPositionLocal","vec3"),De.include(oe.U,pe),De.include(A.oD,pe),De.include(I.K,pe),De.include(he.c,pe),tt.uniforms.add(new xt.E("externalColor",ve=>ve.externalColor)),re.add("vcolorExt","vec4"),pe.multipassEnabled&&re.add("depth","float"),tt.code.add(we.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${pe.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${we.H.float(ye.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${le?we.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${pe.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${le&&pe.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${pe.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(pe.output){case R.V.Alpha:De.include(b.HQ,pe),De.include(Ve.S,pe),De.include($.Q,pe),ee.uniforms.add(new dt.m("opacity",le=>le.opacity),new dt.m("layerOpacity",le=>le.layerOpacity)),pe.hasColorTexture&&ee.uniforms.add(new st.N("tex",le=>le.texture)),ee.include(Le.N),ee.code.add(we.H`
      void main() {
        discardBySlice(vpos);
        ${pe.multipassEnabled?"terrainDepthTest(depth);":""}
        ${pe.hasColorTexture?we.H`
                vec4 texColor = texture(tex, ${pe.hasColorTextureTransform?we.H`colorUV`:we.H`vuv0`});
                ${pe.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:we.H`vec4 texColor = vec4(1.0);`}
        ${pe.hasVertexColors?we.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:we.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case R.V.Color:De.include(b.HQ,pe),De.include(ie.kA,pe),De.include(ae.n,pe),De.include(Ve.S,pe),De.include(pe.instancedDoublePrecision?fe.G:fe.Bz,pe),De.include($.Q,pe),(0,Se.yu)(ee,pe),ee.uniforms.add(tt.uniforms.get("localOrigin"),new at.t("ambient",le=>le.ambient),new at.t("diffuse",le=>le.diffuse),new dt.m("opacity",le=>le.opacity),new dt.m("layerOpacity",le=>le.layerOpacity)),pe.hasColorTexture&&ee.uniforms.add(new st.N("tex",le=>le.texture)),De.include(ce._Z,pe),De.include(q.c,pe),ee.include(Le.N),De.include(se.r,pe),(0,ie.a8)(ee),(0,ie.eU)(ee),(0,K.O4)(ee),ee.code.add(we.H`
      void main() {
        discardBySlice(vpos);
        ${pe.multipassEnabled?"terrainDepthTest(depth);":""}
        ${pe.hasColorTexture?we.H`
                vec4 texColor = texture(tex, ${pe.hasColorTextureTransform?we.H`colorUV`:we.H`vuv0`});
                ${pe.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:we.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${pe.normalType===B.W.ScreenDerivative?we.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:we.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${pe.pbrMode===ce.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${pe.receiveShadows?"readShadowMap(vpos, linearDepth)":pe.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${pe.hasVertexColors?we.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:we.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${pe.hasNormalTexture?we.H`
                mat3 tangentSpace = ${pe.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${pe.hasNormalTextureTransform?we.H`normalUV`:"vuv0"});`:we.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${pe.spherical?we.H`normalize(posWorld);`:we.H`vec3(0.0, 0.0, 1.0);`}

        ${pe.snowCover?we.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${pe.pbrMode===ce.A9.Normal||pe.pbrMode===ce.A9.Schematic?we.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${pe.snowCover?we.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:we.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${pe.transparencyPassType===Te.y.Color?we.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return De.include(w.E,pe),De}const $e=Object.freeze(Object.defineProperty({__proto__:null,build:We},Symbol.toStringTag,{value:"Module"}))},34187:(Ae,Y,_)=>{_.d(Y,{R:()=>st,b:()=>lt});var A=_(18238),y=_(43208),R=_(74567),b=_(29359),D=_(93877),x=_(20367),B=_(34416),N=_(79052),I=_(49378),oe=_(66874),he=_(23388),G=_(81077),C=_(27961),w=_(35670),X=_(62770),ae=_(44987),ie=_(94031),K=_(87522),$=_(9933),se=_(55189),q=_(98541),ce=_(21589),fe=_(79110),te=_(19213),_e=_(3906),ye=_(88791),Ve=_(18356),Le=_(65840),Se=_(93093),at=_(56857),xt=_(35089),dt=_(83415),we=_(40972);function lt(Te){const Me=new at.N5,{vertex:We,fragment:$e,varyings:pe}=Me;return(0,_e.NB)(We,Te),Me.include(N.I),pe.add("vpos","vec3"),Me.include(q.A,Te),Me.include(x.BK,Te),Me.include(G.G,Te),Te.output!==R.V.Color&&Te.output!==R.V.Alpha||((0,_e.yu)(Me.vertex,Te),Me.include(B.Y,Te),Me.include(D.d,Te),Te.offsetBackfaces&&Me.include(y.M),Te.instancedColor&&Me.attributes.add(we.r.INSTANCECOLOR,"vec4"),pe.add("vNormalWorld","vec3"),pe.add("localvpos","vec3"),Te.multipassEnabled&&pe.add("depth","float"),Me.include(oe.U,Te),Me.include(A.oD,Te),Me.include(I.K,Te),Me.include(he.c,Te),We.uniforms.add(new Ve.E("externalColor",De=>De.externalColor)),pe.add("vcolorExt","vec4"),We.code.add(Se.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${Te.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Se.H.float(ce.y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${Te.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${Te.multipassEnabled?Se.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),Te.output===R.V.Alpha&&(Me.include(b.HQ,Te),Me.include(fe.S,Te),Me.include(ie.Q,Te),$e.uniforms.add(new Le.m("opacity",De=>De.opacity),new Le.m("layerOpacity",De=>De.layerOpacity)),Te.hasColorTexture&&$e.uniforms.add(new xt.N("tex",De=>De.texture)),$e.include(te.N),$e.code.add(Se.H`
      void main() {
        discardBySlice(vpos);
        ${Te.multipassEnabled?Se.H`terrainDepthTest(depth);`:""}
        ${Te.hasColorTexture?Se.H`
                vec4 texColor = texture(tex, ${Te.hasColorTextureTransform?Se.H`colorUV`:Se.H`vuv0`});
                ${Te.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Se.H`vec4 texColor = vec4(1.0);`}
        ${Te.hasVertexColors?Se.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Se.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),Te.output===R.V.Color&&(Me.include(b.HQ,Te),Me.include(X.kA,Te),Me.include(w.n,Te),Me.include(fe.S,Te),Me.include(Te.instancedDoublePrecision?se.G:se.Bz,Te),Me.include(ie.Q,Te),(0,_e.yu)(Me.fragment,Te),(0,ae.Gc)($e),(0,X.a8)($e),(0,X.eU)($e),$e.uniforms.add(We.uniforms.get("localOrigin"),We.uniforms.get("view"),new ye.t("ambient",De=>De.ambient),new ye.t("diffuse",De=>De.diffuse),new Le.m("opacity",De=>De.opacity),new Le.m("layerOpacity",De=>De.layerOpacity)),Te.hasColorTexture&&$e.uniforms.add(new xt.N("tex",De=>De.texture)),Me.include($._Z,Te),Me.include(K.c,Te),$e.include(te.N),(0,ae.O4)($e),$e.code.add(Se.H`
      void main() {
        discardBySlice(vpos);
        ${Te.multipassEnabled?Se.H`terrainDepthTest(depth);`:""}
        ${Te.hasColorTexture?Se.H`
                vec4 texColor = texture(tex, ${Te.hasColorTextureTransform?Se.H`colorUV`:Se.H`vuv0`});
                ${Te.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Se.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${Te.pbrMode===$.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${Te.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":Te.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${Te.hasVertexColors?Se.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Se.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${Te.snowCover?Se.H`albedo = mix(albedo, vec3(1), 0.9);`:Se.H``}
        ${Se.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${Te.pbrMode===$.A9.Normal||Te.pbrMode===$.A9.Schematic?Te.spherical?Se.H`vec3 normalGround = normalize(vpos + localOrigin);`:Se.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Se.H``}
        ${Te.pbrMode===$.A9.Normal||Te.pbrMode===$.A9.Schematic?Se.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${Te.snowCover?Se.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Se.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${Te.transparencyPassType===dt.y.Color?Se.H`fragColor = premultiplyAlpha(fragColor);`:Se.H``}
      }
    `)),Me.include(C.E,Te),Me}const st=Object.freeze(Object.defineProperty({__proto__:null,build:lt},Symbol.toStringTag,{value:"Module"}))},30493:(Ae,Y,_)=>{_.d(Y,{S:()=>X,b:()=>G,g:()=>C});var A=_(83953),y=_(45475),R=_(65152),b=_(85340),D=_(8733),x=_(99286),B=_(65840),N=_(93093),I=_(56857),oe=_(35089);const he=16;function G(){const ae=new I.N5,ie=ae.fragment;return ae.include(R.c),ae.include(D.Ir),ie.include(b.E),ie.uniforms.add(new B.m("radius",(K,$)=>C($.camera))),ie.code.add(N.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),ie.code.add(N.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),ie.uniforms.add(new x.G("nearFar",(K,$)=>$.camera.nearFar),new oe.N("normalMap",K=>K.normalTexture),new oe.N("depthMap",K=>K.depthTexture),new B.m("projScale",K=>K.projScale),new oe.N("rnm",K=>K.noiseTexture),new x.G("rnmScale",(K,$)=>(0,A.hZ)(w,$.camera.fullWidth/K.noiseTexture.descriptor.width,$.camera.fullHeight/K.noiseTexture.descriptor.height)),new B.m("intensity",K=>K.intensity),new x.G("screenSize",(K,$)=>(0,A.hZ)(w,$.camera.fullWidth,$.camera.fullHeight))),ae.outputs.add("fragOcclusion","float"),ie.code.add(N.H`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${N.H.int(he)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${N.H.int(he)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),ae}function C(ae){return Math.max(10,20*ae.computeScreenPixelSizeAtDist(Math.abs(4*ae.relativeElevation)))}const w=(0,y.vt)(),X=Object.freeze(Object.defineProperty({__proto__:null,build:G,getRadius:C},Symbol.toStringTag,{value:"Module"}))},84254:(Ae,Y,_)=>{_.d(Y,{S:()=>C,b:()=>G});var A=_(28714),y=_(65152),R=_(85340),b=_(15683),D=_(99286),x=_(65840),B=_(93093),N=_(56857),I=_(91784),oe=_(35089);const he=4;function G(){const w=new N.N5,X=w.fragment;w.include(y.c);const ae=(he+1)/2,ie=1/(2*ae*ae);return X.include(R.E),X.uniforms.add(new oe.N("depthMap",K=>K.depthTexture),new I.o("tex",K=>K.colorTexture),new b.t("blurSize",K=>K.blurSize),new x.m("projScale",(K,$)=>{const se=(0,A.q)($.camera.eye,$.camera.center);return se>5e4?Math.max(0,K.projScale-(se-5e4)):K.projScale}),new D.G("nearFar",(K,$)=>$.camera.nearFar)),X.code.add(B.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${B.H.float(ie)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),w.outputs.add("fragBlur","float"),X.code.add(B.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${B.H.int(he)}; r <= ${B.H.int(he)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),w}const C=Object.freeze(Object.defineProperty({__proto__:null,build:G},Symbol.toStringTag,{value:"Module"}))},94268:(Ae,Y,_)=>{_.d(Y,{a:()=>K,b:()=>fe,c:()=>X,f:()=>_e,g:()=>te,j:()=>we,n:()=>re}),_(3248);var y=_(35150),R=_(69287),b=_(92771),D=_(28714),x=_(25866),B=_(53781),N=_(89141),I=_(85952),oe=_(41510),he=_(55703),G=_(99608),C=_(19741);const w=X();function X(){return(0,N.vt)()}const ae=B.e,ie=B.e;function K(S,V){return(0,B.c)(V,S)}function fe(S){return S[3]}function te(S){return S}function _e(S,V,Z,Q){return(0,N.fA)(S,V,Z,Q)}function Le(S,V,Z){if(null==V||!xt(S,V,at))return!1;let{t0:Q,t1:J}=at;if((Q<0||J<Q&&J>0)&&(Q=J),Q<0)return!1;if(Z){const{origin:Oe,direction:Ie}=V;Z[0]=Oe[0]+Ie[0]*Q,Z[1]=Oe[1]+Ie[1]*Q,Z[2]=Oe[2]+Ie[2]*Q}return!0}const at={t0:0,t1:0};function xt(S,V,Z){const{origin:Q,direction:J}=V,Oe=dt;Oe[0]=Q[0]-S[0],Oe[1]=Q[1]-S[1],Oe[2]=Q[2]-S[2];const Ie=J[0]*J[0]+J[1]*J[1]+J[2]*J[2];if(0===Ie)return!1;const Ue=2*(J[0]*Oe[0]+J[1]*Oe[1]+J[2]*Oe[2]),ut=Ue*Ue-4*Ie*(Oe[0]*Oe[0]+Oe[1]*Oe[1]+Oe[2]*Oe[2]-S[3]*S[3]);if(ut<0)return!1;const mt=Math.sqrt(ut);return Z.t0=(-Ue-mt)/(2*Ie),Z.t1=(-Ue+mt)/(2*Ie),!0}const dt=(0,x.vt)();function we(S,V){return Le(S,V,null)}function st(S,V,Z){const Q=C.rq.get(),J=C.Rc.get();(0,D.b)(Q,V.origin,V.direction);const Oe=fe(S);(0,D.b)(Z,Q,V.origin),(0,D.h)(Z,Z,1/(0,D.l)(Z)*Oe);const Ie=$e(S,V.origin),Ue=(0,G.g7)(V.origin,Z);return(0,b.$0)(J,Ue+Ie,Q),(0,D.e)(Z,Z,J),Z}function Me(S,V,Z){const Q=(0,D.f)(C.rq.get(),V,S),J=(0,D.h)(C.rq.get(),Q,S[3]/(0,D.l)(Q));return(0,D.g)(Z,J,S)}function $e(S,V){const Z=(0,D.f)(C.rq.get(),V,S),Q=(0,D.l)(Z),J=fe(S),Oe=J+Math.abs(J-Q);return(0,R.XM)(J/Oe)}const pe=(0,x.vt)();function De(S,V,Z,Q){const J=(0,D.f)(pe,V,S);switch(Z){case oe._.X:{const Oe=(0,R.jU)(J,pe)[2];return(0,D.s)(Q,-Math.sin(Oe),Math.cos(Oe),0)}case oe._.Y:{const Oe=(0,R.jU)(J,pe),Ie=Oe[1],Ue=Oe[2],ut=Math.sin(Ie);return(0,D.s)(Q,-ut*Math.cos(Ue),-ut*Math.sin(Ue),Math.cos(Ie))}case oe._.Z:return(0,D.n)(Q,J);default:return}}function tt(S,V){const Z=(0,D.f)(ve,V,S);return(0,D.l)(Z)-S[3]}function re(S,V){const Z=(0,D.a)(S,V),Q=fe(S);return Z<=Q*Q}const ve=(0,x.vt)(),Ee=X();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:w,altitudeAt:tt,angleToSilhouette:$e,axisAt:De,clear:function q(S){S[0]=S[1]=S[2]=S[3]=0},closestPoint:function Te(S,V,Z){return Le(S,V,Z)?Z:((0,he.oC)(V,S,Z),Me(S,Z,Z))},closestPointOnSilhouette:st,containsPoint:re,copy:K,create:X,distanceToSilhouette:function We(S,V){const Z=(0,D.f)(C.rq.get(),V,S),Q=(0,D.p)(Z);return Math.sqrt(Math.abs(Q-S[3]*S[3]))},elevate:function ye(S,V,Z){return S!==Z&&(Z[0]=S[0],Z[1]=S[1],Z[2]=S[2]),Z[3]=S[3]+V,Z},equals:ie,exactEquals:ae,fromCenterAndRadius:function $(S,V){return(0,N.fA)(S[0],S[1],S[2],V)},fromRadius:function ce(S,V){return S[0]=S[1]=S[2]=0,S[3]=V,S},fromValues:_e,getCenter:te,getRadius:fe,intersectLine:function Se(S,V,Z){const Q=(0,he.Cr)(V,Z);if(!xt(S,Q,at))return[];const{origin:J,direction:Oe}=Q,{t0:Ie,t1:Ue}=at,ut=mt=>{const xe=(0,x.vt)();return(0,D.r)(xe,J,Oe,mt),Me(S,xe,xe)};return Math.abs(Ie-Ue)<(0,I.FD)()?[ut(Ie)]:[ut(Ie),ut(Ue)]},intersectRay:Le,intersectRayClosestSilhouette:function lt(S,V,Z){if(Le(S,V,Z))return Z;const Q=st(S,V,C.rq.get());return(0,D.g)(Z,V.origin,(0,D.h)(C.rq.get(),V.direction,(0,D.q)(V.origin,Q)/(0,D.l)(V.direction))),Z},intersectsRay:we,projectPoint:Me,setAltitudeAt:function ee(S,V,Z,Q){const J=tt(S,V),Oe=De(S,V,oe._.Z,ve),Ie=(0,D.h)(ve,Oe,Z-J);return(0,D.g)(Q,V,Ie)},setExtent:function Ve(S,V,Z){return y.A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),S!==Z&&K(S,Z),Z},tmpSphere:Ee,union:function le(S,V,Z=(0,N.vt)()){const Q=(0,D.q)(S,V),J=S[3],Oe=V[3];return Q+Oe<J?((0,B.c)(Z,S),Z):Q+J<Oe?((0,B.c)(Z,V),Z):((0,D.m)(Z,S,V,(Q+Oe-J)/(2*Q)),Z[3]=(Q+J+Oe)/2,Z)},wrap:function se(S){return S}},Symbol.toStringTag,{value:"Module"}))},67571:(Ae,Y,_)=>{_.d(Y,{O:()=>A});class A{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(R,b){var D;return null===(D=this._outer.get(R))||void 0===D?void 0:D.get(b)}set(R,b,D){const x=this._outer.get(R);x?x.set(b,D):this._outer.set(R,new Map([[b,D]]))}delete(R,b){const D=this._outer.get(R);D&&(D.delete(b),0===D.size&&this._outer.delete(R))}forEach(R){this._outer.forEach((b,D)=>R(b,D))}}},84149:(Ae,Y,_)=>{_.d(Y,{I:()=>y});var A=_(64662);class y{constructor(D){this._allocator=D,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,A.d)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const D=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*R);this._items.length=Math.min(D,this._items.length),this._itemsPtr=0}_grow(){for(let D=0;D<Math.max(8,Math.min(this._items.length,R));D++)this._items.push(this._allocator())}}const R=1024},43420:(Ae,Y,_)=>{_.d(Y,{R:()=>y});var A=_(5922);let y=class Ar{constructor(b,D,x=""){this.major=b,this.minor=D,this._context=x}lessThan(b,D){return this.major<b||b===this.major&&this.minor<D}since(b,D){return!this.lessThan(b,D)}validate(b){if(this.major!==b.major)throw new A.A((this._context&&this._context+":")+"unsupported-version",`Required major ${this._context&&this._context+" "}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:b})}clone(){return new Ar(this.major,this.minor,this._context)}static parse(b,D=""){const[x,B]=b.split("."),N=/^\s*\d+\s*$/;if(null==x||!x.match||!N.test(x))throw new A.A((D&&D+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:b});if(null==B||!B.match||!N.test(B))throw new A.A((D&&D+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:b});const I=parseInt(x,10),oe=parseInt(B,10);return new Ar(I,oe,D)}}},81596:(Ae,Y,_)=>{_.d(Y,{oe:()=>y});var A=_(79139);function y(x,B=!1){return x<=A.y9?B?new Array(x).fill(0):new Array(x):new Float32Array(x)}},55703:(Ae,Y,_)=>{_.d(Y,{Cr:()=>he,LV:()=>I,oC:()=>w,vt:()=>x}),_(89952);var y=_(84149),R=_(28714),b=_(25866);function x(ae){return ae?B((0,b.o8)(ae.origin),(0,b.o8)(ae.direction)):B((0,b.vt)(),(0,b.vt)())}function B(ae,ie){return{origin:ae,direction:ie}}function I(ae,ie){const K=X.get();return K.origin=ae,K.direction=ie,K}function he(ae,ie,K=x()){return(0,R.c)(K.origin,ae),(0,R.f)(K.direction,ie,ae),K}function w(ae,ie,K){const $=(0,R.k)(ae.direction,(0,R.f)(K,ie,ae.origin));return(0,R.g)(K,ae.origin,(0,R.h)(K,ae.direction,$)),K}_(19741);const X=new y.I(()=>x())},10717:(Ae,Y,_)=>{_.r(Y),_.d(Y,{fetch:()=>Zn,gltfToEngineResources:()=>Kr,parseUrl:()=>Gr});var A=_(10467),y=_(7201),R=_(31610),b=_(32954),D=_(92771),x=_(62789),B=_(45475),N=_(28714),I=_(25866),oe=_(2296),he=_(81596),G=_(45434),C=_(10442),w=_(30483),X=_(23225),ae=_(18201),ie=_(25590),K=_(85303),$=_(52867),se=_(61362),q=_(39690),ce=_(88532);function fe(O){if(null==O)return null;const T=null!=O.offset?O.offset:ce.uY,M=null!=O.rotation?O.rotation:0,P=null!=O.scale?O.scale:ce.Un,H=(0,b.fA)(1,0,0,0,1,0,T[0],T[1],1),W=(0,b.fA)(Math.cos(M),-Math.sin(M),0,Math.sin(M),Math.cos(M),0,0,0,1),F=(0,b.fA)(P[0],0,0,0,P[1],0,0,0,1),z=(0,b.vt)();return(0,R.lw)(z,W,F),(0,R.lw)(z,H,z),z}class te{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class _e{constructor(T,M,P){this.name=T,this.lodThreshold=M,this.pivotOffset=P,this.stageResources=new te,this.numberOfVertices=0}}var ye=_(89563),Ve=_(89447),Le=_(4277),Se=_(5922),at=_(35150),xt=_(67571),dt=_(56492),we=_(43420),lt=_(83034),st=_(96797),Te=_(83346),Me=_(67496),We=_(21674),$e=_(3248),pe=_(42425),De=_(11432),tt=_(79139),ee=_(45272),re=_(3450),le=_(90261);let Ee;var ge,O;(O=ge||(ge={}))[O.ETC1_RGB=0]="ETC1_RGB",O[O.ETC2_RGBA=1]="ETC2_RGBA",O[O.BC1_RGB=2]="BC1_RGB",O[O.BC3_RGBA=3]="BC3_RGBA",O[O.BC4_R=4]="BC4_R",O[O.BC5_RG=5]="BC5_RG",O[O.BC7_M6_RGB=6]="BC7_M6_RGB",O[O.BC7_M5_RGBA=7]="BC7_M5_RGBA",O[O.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",O[O.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",O[O.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",O[O.ATC_RGB=11]="ATC_RGB",O[O.ATC_RGBA=12]="ATC_RGBA",O[O.FXT1_RGB=17]="FXT1_RGB",O[O.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",O[O.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",O[O.ETC2_EAC_R11=20]="ETC2_EAC_R11",O[O.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",O[O.RGBA32=13]="RGBA32",O[O.RGB565=14]="RGB565",O[O.BGR565=15]="BGR565",O[O.RGBA4444=16]="RGBA4444";var S=_(50915),V=_(26136),Z=_(84757);let Q=null,J=null;function Oe(){return Ie.apply(this,arguments)}function Ie(){return Ie=(0,A.A)(function*(){return null==J&&(J=function ve(){if(null==Ee){const O=T=>(0,le.s)(`esri/libs/basisu/${T}`);Ee=_.e(8905).then(_.bind(_,68905)).then(T=>T.b).then(({default:T})=>T({locateFile:O}).then(M=>(M.initializeBasis(),delete M.then,M)))}return Ee}(),Q=yield J),J}),Ie.apply(this,arguments)}function mt(O,T,M,P,H){const W=(0,Z.IB)(T?S.CQ.COMPRESSED_RGBA8_ETC2_EAC:S.CQ.COMPRESSED_RGB8_ETC2);return Math.ceil(M*P*W*(H&&O>1?(4**O-1)/(3*4**(O-1)):1))}function xe(O){return O.getNumImages()>=1&&!O.isUASTC()}function ze(O){return O.getFaces()>=1&&O.isETC1S()}function ct(){return ct=(0,A.A)(function*(O,T,M){null==Q&&(Q=yield Oe());const P=new Q.BasisFile(new Uint8Array(M));if(!xe(P))return null;P.startTranscoding();const H=ft(O,T,P.getNumLevels(0),P.getHasAlpha(),P.getImageWidth(0,0),P.getImageHeight(0,0),(W,F)=>P.getImageTranscodedSizeInBytes(0,W,F),(W,F,z)=>P.transcodeImage(z,0,W,F,0,0));return P.close(),P.delete(),H}),ct.apply(this,arguments)}function it(){return it=(0,A.A)(function*(O,T,M){null==Q&&(Q=yield Oe());const P=new Q.KTX2File(new Uint8Array(M));if(!ze(P))return null;P.startTranscoding();const H=ft(O,T,P.getLevels(),P.getHasAlpha(),P.getWidth(),P.getHeight(),(W,F)=>P.getImageTranscodedSizeInBytes(W,0,0,F),(W,F,z)=>P.transcodeImage(z,W,0,0,F,0,-1,-1));return P.close(),P.delete(),H}),it.apply(this,arguments)}function ft(O,T,M,P,H,W,F,z){const{compressedTextureETC:L,compressedTextureS3TC:de}=O.capabilities,[ue,Pe]=L?P?[ge.ETC2_RGBA,S.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[ge.ETC1_RGB,S.CQ.COMPRESSED_RGB8_ETC2]:de?P?[ge.BC3_RGBA,S.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[ge.BC1_RGB,S.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[ge.RGBA32,S.Ab.RGBA],Fe=T.hasMipmap?M:Math.min(1,M),Ke=[];for(let Ge=0;Ge<Fe;Ge++)Ke.push(new Uint8Array(F(Ge,ue))),z(Ge,ue,Ke[Ge]);return T.internalFormat=Pe,T.hasMipmap=Ke.length>1,T.samplingMode=T.hasMipmap?S.Cj.LINEAR_MIPMAP_LINEAR:S.Cj.LINEAR,T.width=H,T.height=W,new V.g(O,T,{type:"compressed",levels:Ke})}var Xe=_(43448),U=_(98176);const j=()=>at.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Ce(O){return O.charCodeAt(0)+(O.charCodeAt(1)<<8)+(O.charCodeAt(2)<<16)+(O.charCodeAt(3)<<24)}const ht=Ce("DXT1"),Ot=Ce("DXT3"),St=Ce("DXT5");function _r(O,T,M){if(O instanceof ImageData)return _r(Pr(O),T,M);const P=document.createElement("canvas");return P.width=T,P.height=M,P.getContext("2d").drawImage(O,0,0,P.width,P.height),P}function Pr(O){const T=document.createElement("canvas");T.width=O.width,T.height=O.height;const M=T.getContext("2d");if(null==M)throw new Se.A("Failed to create 2d context from HTMLCanvasElement");return M.putImageData(O,0,0),T}var qt,yt=_(65388),Yr=_(4931);class yr extends Xe.J{get parameters(){return this._parameters}constructor(T,M){super(),this._data=T,this.type=U.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new pe.A,this._parameters={...Zr,...M},this._startPreload(T)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(T){null!=T&&(T instanceof HTMLVideoElement?(this.frameUpdate=M=>this._frameUpdate(T,M),this._startPreloadVideoElement(T)):T instanceof HTMLImageElement&&this._startPreloadImageElement(T))}_startPreloadVideoElement(T){if(!((0,ee.w8)(T.src)||"auto"===T.preload&&T.crossOrigin)){T.preload="auto",T.crossOrigin="anonymous";const M=!T.paused;if(T.src=T.src,M&&T.autoplay){const P=()=>{T.removeEventListener("canplay",P),T.play()};T.addEventListener("canplay",P)}}}_startPreloadImageElement(T){(0,ee.DB)(T.src)||(0,ee.w8)(T.src)||T.crossOrigin||(T.crossOrigin="anonymous",T.src=T.src)}_createDescriptor(T){var M,P;const H=new Yr.R;return H.wrapMode=null!==(M=this._parameters.wrap)&&void 0!==M?M:S.pF.REPEAT,H.flipped=!this._parameters.noUnpackFlip,H.samplingMode=this._parameters.mipmap?S.Cj.LINEAR_MIPMAP_LINEAR:S.Cj.LINEAR,H.hasMipmap=!!this._parameters.mipmap,H.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,H.maxAnisotropy=null!==(P=this._parameters.maxAnisotropy)&&void 0!==P?P:this._parameters.mipmap?T.parameters.maxMaxAnisotropy:1,H}get glTexture(){return this._glTexture}get memoryEstimate(){var T;return(null===(T=this._glTexture)||void 0===T?void 0:T.usedMemory)||function Xr(O,T){if(null==O)return 0;if((0,tt.mw)(O)||(0,tt.mg)(O))return T.encoding===Me.JS.KTX2_ENCODING?function ut(O,T){if(null==Q)return O.byteLength;const M=new Q.KTX2File(new Uint8Array(O)),P=ze(M)?mt(M.getLevels(),M.getHasAlpha(),M.getWidth(),M.getHeight(),T):0;return M.close(),M.delete(),P}(O,!!T.mipmap):T.encoding===Me.JS.BASIS_ENCODING?function Ue(O,T){if(null==Q)return O.byteLength;const M=new Q.BasisFile(new Uint8Array(O)),P=xe(M)?mt(M.getNumLevels(0),M.getHasAlpha(),M.getImageWidth(0,0),M.getImageHeight(0,0),T):0;return M.close(),M.delete(),P}(O,!!T.mipmap):O.byteLength;const{width:M,height:P}=O instanceof Image||O instanceof ImageData||O instanceof HTMLCanvasElement||O instanceof HTMLVideoElement?Dr(O):T;return(T.mipmap?4/3:1)*M*P*(T.components||4)||0}(this._data,this._parameters)}load(T){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const M=this._data;return null==M?(this._glTexture=new V.g(T,this._createDescriptor(T),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof M?this._loadFromURL(T,M):M instanceof Image?this._loadFromImageElement(T,M):M instanceof HTMLVideoElement?this._loadFromVideoElement(T,M):M instanceof ImageData||M instanceof HTMLCanvasElement?this._loadFromImage(T,M):((0,tt.mw)(M)||(0,tt.mg)(M))&&this._parameters.encoding===Me.JS.DDS_ENCODING?this._loadFromDDSData(T,M):((0,tt.mw)(M)||(0,tt.mg)(M))&&this._parameters.encoding===Me.JS.KTX2_ENCODING?this._loadFromKTX2(T,M):((0,tt.mw)(M)||(0,tt.mg)(M))&&this._parameters.encoding===Me.JS.BASIS_ENCODING?this._loadFromBasis(T,M):(0,tt.mg)(M)?this._loadFromPixelData(T,M):(0,tt.mw)(M)?this._loadFromPixelData(T,new Uint8Array(M)):null)}_frameUpdate(T,M){return null==this._glTexture||T.readyState<qt.HAVE_CURRENT_DATA||M===T.currentTime?M:(this._glTexture.setData(T),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),T.currentTime)}_loadFromDDSData(T,M){return this._glTexture=function Bt(O,T,M){var P;const H=function Nt(O,T){const M=new Int32Array(O,0,31);if(542327876!==M[0])return j().error("Invalid magic number in DDS header"),null;if(!(4&M[20]))return j().error("Unsupported format, must contain a FourCC code"),null;const P=M[21];let H,W;switch(P){case ht:H=8,W=S.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ot:H=16,W=S.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case St:H=16,W=S.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return j().error("Unsupported FourCC code:",function ke(O){return String.fromCharCode(255&O,O>>8&255,O>>16&255,O>>24&255)}(P)),null}let F=1,z=M[4],L=M[3];!(3&z)&&!(3&L)||(j().warn("Rounding up compressed texture size to nearest multiple of 4."),z=z+3&-4,L=L+3&-4);const de=z,ue=L;let Pe,Fe;131072&M[2]&&!1!==T&&(F=Math.max(1,M[7]));let Ke=M[1]+4;const Ge=[];for(let Ze=0;Ze<F;++Ze)Fe=(z+3>>2)*(L+3>>2)*H,Pe=new Uint8Array(O,Ke,Fe),Ge.push(Pe),Ke+=Fe,z=Math.max(1,z>>1),L=Math.max(1,L>>1);return{textureData:{type:"compressed",levels:Ge},internalFormat:W,width:de,height:ue}}(M,null!==(P=T.hasMipmap)&&void 0!==P&&P);if(null==H)throw new Error("DDS texture data is null");const{textureData:W,internalFormat:F,width:z,height:L}=H;return T.samplingMode=W.levels.length>1?S.Cj.LINEAR_MIPMAP_LINEAR:S.Cj.LINEAR,T.hasMipmap=W.levels.length>1,T.internalFormat=F,T.width=z,T.height=L,new V.g(O,T,W)}(T,this._createDescriptor(T),M),this._glTexture}_loadFromKTX2(T,M){return this._loadAsync(()=>function ot(O,T,M){return it.apply(this,arguments)}(T,this._createDescriptor(T),M).then(P=>(this._glTexture=P,P)))}_loadFromBasis(T,M){return this._loadAsync(()=>function je(O,T,M){return ct.apply(this,arguments)}(T,this._createDescriptor(T),M).then(P=>(this._glTexture=P,P)))}_loadFromPixelData(T,M){var P,H;(0,yt.vA)(this._parameters.width>0&&this._parameters.height>0);const W=this._createDescriptor(T);return W.pixelFormat=1===this._parameters.components?S.Ab.LUMINANCE:3===this._parameters.components?S.Ab.RGB:S.Ab.RGBA,W.width=null!==(P=this._parameters.width)&&void 0!==P?P:0,W.height=null!==(H=this._parameters.height)&&void 0!==H?H:0,this._glTexture=new V.g(T,W,M),this._glTexture}_loadFromURL(T,M){var P=this;return this._loadAsync(function(){var H=(0,A.A)(function*(W){const F=yield(0,st.D)(M,{signal:W});return(0,dt.Te)(W),P._loadFromImage(T,F)});return function(W){return H.apply(this,arguments)}}())}_loadFromImageElement(T,M){var P=this;return M.complete?this._loadFromImage(T,M):this._loadAsync(function(){var H=(0,A.A)(function*(W){const F=yield(0,re.Sx)(M,M.src,!1,W);return(0,dt.Te)(W),P._loadFromImage(T,F)});return function(W){return H.apply(this,arguments)}}())}_loadFromVideoElement(T,M){return M.readyState>=qt.HAVE_CURRENT_DATA?this._loadFromImage(T,M):this._loadFromVideoElementAsync(T,M)}_loadFromVideoElementAsync(T,M){return this._loadAsync(P=>new Promise((H,W)=>{const F=()=>{M.removeEventListener("loadeddata",z),M.removeEventListener("error",L),(0,De.xt)(de)},z=()=>{M.readyState>=qt.HAVE_CURRENT_DATA&&(F(),H(this._loadFromImage(T,M)))},L=ue=>{F(),W(ue||new Se.A("Failed to load video"))};M.addEventListener("loadeddata",z),M.addEventListener("error",L);const de=(0,dt.u7)(P,()=>L((0,dt.NK)()))}))}_loadFromImage(T,M){let P=M;if(!(P instanceof HTMLVideoElement)){const{maxTextureSize:F}=T.parameters;P=this._parameters.downsampleUncompressed?function Vt(O,T){let W=O.width*O.height;if(W<4096)return O instanceof ImageData?Pr(O):O;let F=O.width,z=O.height;do{F=Math.ceil(F/2),z=Math.ceil(z/2),W=F*z}while(W>1048576||null!=T&&(F>T||z>T));return _r(O,F,z)}(P,F):function nr(O,T){const M=Math.max(O.width,O.height);if(M<=T)return O;const P=T/M;return _r(O,Math.round(O.width*P),Math.round(O.height*P))}(P,F)}const H=Dr(P);this._parameters.width=H.width,this._parameters.height=H.height;const W=this._createDescriptor(T);return W.pixelFormat=3===this._parameters.components?S.Ab.RGB:S.Ab.RGBA,W.width=H.width,W.height=H.height,this._glTexture=new V.g(T,W,P),this._glTexture}_loadAsync(T){const M=new AbortController;this._loadingController=M;const P=T(M.signal);this._loadingPromise=P;const H=()=>{this._loadingController===M&&(this._loadingController=null),this._loadingPromise===P&&(this._loadingPromise=null)};return P.then(H,H),P}unload(){if(this._glTexture=(0,De.WD)(this._glTexture),null!=this._loadingController){const T=this._loadingController;this._loadingController=null,this._loadingPromise=null,T.abort()}this.events.emit("unloaded")}}function Dr(O){return O instanceof HTMLVideoElement?{width:O.videoWidth,height:O.videoHeight}:O}!function(O){O[O.HAVE_NOTHING=0]="HAVE_NOTHING",O[O.HAVE_METADATA=1]="HAVE_METADATA",O[O.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",O[O.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",O[O.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(qt||(qt={}));const Zr={wrap:{s:S.pF.REPEAT,t:S.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var rt=_(40972),ir=_(23191),Jr=_(48499),Dt=_(74567),Zt=_(34416),Jt=_(6698),er=_(9933),Qr=_(2284),Cr=_(43087),tr=_(14356),mr=_(55128),Ft=_(94268),Sr=_(19641);const br=new class en{constructor(T=0){this.offset=T,this.sphere=(0,Ft.c)(),this.tmpVertex=(0,I.vt)()}applyToVertex(T,M,P){const H=this.objectTransform.transform,W=(0,N.s)(fr,T,M,P),F=(0,N.e)(W,W,H),z=this.offset/(0,N.l)(F);return(0,N.r)(F,F,F,z),(0,N.e)(this.tmpVertex,F,this.objectTransform.inverse),this.tmpVertex}applyToMinMax(T,M){const P=this.offset/(0,N.l)(T);(0,N.r)(T,T,T,P);const H=this.offset/(0,N.l)(M);(0,N.r)(M,M,M,H)}applyToAabb(T){const M=this.offset/Math.sqrt(T[0]*T[0]+T[1]*T[1]+T[2]*T[2]);T[0]+=T[0]*M,T[1]+=T[1]*M,T[2]+=T[2]*M;const P=this.offset/Math.sqrt(T[3]*T[3]+T[4]*T[4]+T[5]*T[5]);return T[3]+=T[3]*P,T[4]+=T[4]*P,T[5]+=T[5]*P,T}applyToBoundingSphere(T){const M=(0,N.l)((0,Ft.g)(T)),P=this.offset/M;return(0,N.r)((0,Ft.g)(this.sphere),(0,Ft.g)(T),(0,Ft.g)(T),P),this.sphere[3]=T[3]+T[3]*this.offset/M,this.sphere}};new class qr{constructor(T=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,I.vt)(),this._tmpMbs=(0,Ft.c)(),this._tmpObb=new Sr.ab,this._resetOffset(T)}_resetOffset(T){this._offset=T,this._totalOffset=T}set offset(T){this._resetOffset(T)}get offset(){return this._offset}set componentOffset(T){this._totalOffset=this._offset+T}set localOrigin(T){this.componentLocalOriginLength=(0,N.l)(T)}applyToVertex(T,M,P){const H=(0,N.s)(fr,T,M,P),W=(0,N.s)(Ir,T,M,P+this.componentLocalOriginLength),F=this._totalOffset/(0,N.l)(W);return(0,N.r)(this._tmpVertex,H,W,F),this._tmpVertex}applyToAabb(T){const M=this.componentLocalOriginLength,P=T[0],H=T[1],W=T[2]+M,F=T[3],z=T[4],L=T[5]+M,de=Math.abs(P),ue=Math.abs(H),Pe=Math.abs(W),Fe=Math.abs(F),Ke=Math.abs(z),Ge=Math.abs(L),Ze=.5*(1+Math.sign(P*F))*Math.min(de,Fe),nt=.5*(1+Math.sign(H*z))*Math.min(ue,Ke),vt=.5*(1+Math.sign(W*L))*Math.min(Pe,Ge),_t=Math.max(de,Fe),pt=Math.max(ue,Ke),At=Math.max(Pe,Ge),gt=Math.sqrt(Ze*Ze+nt*nt+vt*vt),Et=Math.sign(de+P),Je=Math.sign(ue+H),Ye=Math.sign(Pe+W),qe=Math.sign(Fe+F),Qe=Math.sign(Ke+z),He=Math.sign(Ge+L),Ne=this._totalOffset;if(gt<Ne)return T[0]-=(1-Et)*Ne,T[1]-=(1-Je)*Ne,T[2]-=(1-Ye)*Ne,T[3]+=qe*Ne,T[4]+=Qe*Ne,T[5]+=He*Ne,T;const et=Ne/Math.sqrt(_t*_t+pt*pt+At*At),Tt=Ne/gt,Pt=Tt-et,Mt=-Pt;return T[0]+=P*(Et*Mt+Tt),T[1]+=H*(Je*Mt+Tt),T[2]+=W*(Ye*Mt+Tt),T[3]+=F*(qe*Pt+et),T[4]+=z*(Qe*Pt+et),T[5]+=L*(He*Pt+et),T}applyToMbs(T){const M=(0,N.l)((0,Ft.g)(T)),P=this._totalOffset/M;return(0,N.r)((0,Ft.g)(this._tmpMbs),(0,Ft.g)(T),(0,Ft.g)(T),P),this._tmpMbs[3]=T[3]+T[3]*this._totalOffset/M,this._tmpMbs}applyToObb(T){return(0,Sr.gm)(T,this._totalOffset,this._totalOffset,ir.RT.Global,this._tmpObb),this._tmpObb}},new class kr{constructor(T=0){this.offset=T,this.tmpVertex=(0,I.vt)()}applyToVertex(T,M,P){const H=(0,N.s)(fr,T,M,P),W=(0,N.g)(Ir,H,this.localOrigin),F=this.offset/(0,N.l)(W);return(0,N.r)(this.tmpVertex,H,W,F),this.tmpVertex}applyToAabb(T){const M=rn,P=nn,H=on;for(let L=0;L<3;++L)M[L]=T[0+L]+this.localOrigin[L],P[L]=T[3+L]+this.localOrigin[L],H[L]=M[L];const W=this.applyToVertex(M[0],M[1],M[2]);for(let L=0;L<3;++L)T[L]=W[L],T[L+3]=W[L];const F=L=>{const de=this.applyToVertex(L[0],L[1],L[2]);for(let ue=0;ue<3;++ue)T[ue]=Math.min(T[ue],de[ue]),T[ue+3]=Math.max(T[ue+3],de[ue])};for(let L=1;L<8;++L){for(let de=0;de<3;++de)H[de]=L&1<<de?P[de]:M[de];F(H)}let z=0;for(let L=0;L<3;++L)M[L]*P[L]<0&&(z|=1<<L);if(0!==z&&7!==z)for(let L=0;L<8;++L)if(!(z&L)){for(let de=0;de<3;++de)H[de]=z&1<<de?0:L&1<<de?M[de]:P[de];F(H)}for(let L=0;L<3;++L)T[L]-=this.localOrigin[L],T[L+3]-=this.localOrigin[L];return T}};const fr=(0,I.vt)(),Ir=(0,I.vt)(),rn=(0,I.vt)(),nn=(0,I.vt)(),on=(0,I.vt)();function Ur(O,T,M){const{data:P,indices:H}=O,W=T.typedBuffer,F=T.typedBufferStride,z=H.length;M*=F;for(let L=0;L<z;++L){const de=2*H[L];W[M]=P[de],W[M+1]=P[de+1],M+=F}}function Br(O,T,M,P){const{data:H,indices:W}=O,F=T.typedBuffer,z=T.typedBufferStride,L=W.length;if(M*=z,null==P||1===P)for(let de=0;de<L;++de){const ue=3*W[de];F[M]=H[ue],F[M+1]=H[ue+1],F[M+2]=H[ue+2],M+=z}else for(let de=0;de<L;++de){const ue=3*W[de];for(let Pe=0;Pe<P;++Pe)F[M]=H[ue],F[M+1]=H[ue+1],F[M+2]=H[ue+2],M+=z}}function wr(O,T,M,P=1){const{data:H,indices:W}=O,F=T.typedBuffer,z=T.typedBufferStride,L=W.length;if(M*=z,1===P)for(let de=0;de<L;++de){const ue=4*W[de];F[M]=H[ue],F[M+1]=H[ue+1],F[M+2]=H[ue+2],F[M+3]=H[ue+3],M+=z}else for(let de=0;de<L;++de){const ue=4*W[de];for(let Pe=0;Pe<P;++Pe)F[M]=H[ue],F[M+1]=H[ue+1],F[M+2]=H[ue+2],F[M+3]=H[ue+3],M+=z}}function un(O,T,M,P,H=1){const W=T.typedBuffer,F=T.typedBufferStride;if(P*=F,1===H)for(let z=0;z<M;++z)W[P]=O[0],W[P+1]=O[1],W[P+2]=O[2],W[P+3]=O[3],P+=F;else for(let z=0;z<M;++z)for(let L=0;L<H;++L)W[P]=O[0],W[P+1]=O[1],W[P+2]=O[2],W[P+3]=O[3],P+=F}function _n(O,T,M,P,H,W){switch(O){case rt.r.POSITION:{(0,yt.vA)(3===T.size);const F=H.getField(O,G.xs);(0,yt.vA)(!!F,`No buffer view for ${O}`),F&&function sn(O,T,M,P,H=1){if(!T)return void Br(O,M,P,H);const{data:W,indices:F}=O,z=M.typedBuffer,L=M.typedBufferStride,de=F.length,ue=T[0],Pe=T[1],Fe=T[2],Ke=T[4],Ge=T[5],Ze=T[6],nt=T[8],vt=T[9],_t=T[10],pt=T[12],At=T[13],gt=T[14];P*=L;let Et=0,Je=0,Ye=0;const qe=(0,D.tZ)(T)?Qe=>{Et=W[Qe]+pt,Je=W[Qe+1]+At,Ye=W[Qe+2]+gt}:Qe=>{const He=W[Qe],Ne=W[Qe+1],et=W[Qe+2];Et=ue*He+Ke*Ne+nt*et+pt,Je=Pe*He+Ge*Ne+vt*et+At,Ye=Fe*He+Ze*Ne+_t*et+gt};if(1===H)for(let Qe=0;Qe<de;++Qe)qe(3*F[Qe]),z[P]=Et,z[P+1]=Je,z[P+2]=Ye,P+=L;else for(let Qe=0;Qe<de;++Qe){qe(3*F[Qe]);for(let He=0;He<H;++He)z[P]=Et,z[P+1]=Je,z[P+2]=Ye,P+=L}}(T,M,F,W);break}case rt.r.NORMAL:{(0,yt.vA)(3===T.size);const F=H.getField(O,G.xs);(0,yt.vA)(!!F,`No buffer view for ${O}`),F&&function an(O,T,M,P,H=1){if(!T)return void Br(O,M,P,H);const{data:W,indices:F}=O,z=T,L=M.typedBuffer,de=M.typedBufferStride,ue=F.length,Pe=z[0],Fe=z[1],Ke=z[2],Ge=z[4],Ze=z[5],nt=z[6],vt=z[8],_t=z[9],pt=z[10],At=!(0,D.ut)(z);P*=de;let Je=0,Ye=0,qe=0;const Qe=(0,D.tZ)(z)?He=>{Je=W[He],Ye=W[He+1],qe=W[He+2]}:He=>{const Ne=W[He],et=W[He+1],Tt=W[He+2];Je=Pe*Ne+Ge*et+vt*Tt,Ye=Fe*Ne+Ze*et+_t*Tt,qe=Ke*Ne+nt*et+pt*Tt};if(1===H)if(At)for(let He=0;He<ue;++He){Qe(3*F[He]);const Ne=Je*Je+Ye*Ye+qe*qe;if(Ne<.999999&&Ne>1e-6){const et=1/Math.sqrt(Ne);L[P]=Je*et,L[P+1]=Ye*et,L[P+2]=qe*et}else L[P]=Je,L[P+1]=Ye,L[P+2]=qe;P+=de}else for(let He=0;He<ue;++He)Qe(3*F[He]),L[P]=Je,L[P+1]=Ye,L[P+2]=qe,P+=de;else for(let He=0;He<ue;++He){if(Qe(3*F[He]),At){const Ne=Je*Je+Ye*Ye+qe*qe;if(Ne<.999999&&Ne>1e-6){const et=1/Math.sqrt(Ne);Je*=et,Ye*=et,qe*=et}}for(let Ne=0;Ne<H;++Ne)L[P]=Je,L[P+1]=Ye,L[P+2]=qe,P+=de}}(T,P,F,W);break}case rt.r.NORMALCOMPRESSED:{(0,yt.vA)(2===T.size);const F=H.getField(O,G.mJ);(0,yt.vA)(!!F,`No buffer view for ${O}`),F&&Ur(T,F,W);break}case rt.r.UV0:{(0,yt.vA)(2===T.size);const F=H.getField(O,G.gH);(0,yt.vA)(!!F,`No buffer view for ${O}`),F&&Ur(T,F,W);break}case rt.r.COLOR:case rt.r.SYMBOLCOLOR:{const F=H.getField(O,G.XP);(0,yt.vA)(!!F,`No buffer view for ${O}`),(0,yt.vA)(3===T.size||4===T.size),!F||3!==T.size&&4!==T.size||function cn(O,T,M,P,H=1){const{data:W,indices:F}=O,z=M.typedBuffer,L=M.typedBufferStride,de=F.length;if(P*=L,T!==W.length||4!==T)if(1!==H)if(4!==T)for(let ue=0;ue<de;++ue){const Pe=3*F[ue];for(let Fe=0;Fe<H;++Fe)z[P]=W[Pe],z[P+1]=W[Pe+1],z[P+2]=W[Pe+2],z[P+3]=255,P+=L}else for(let ue=0;ue<de;++ue){const Pe=4*F[ue];for(let Fe=0;Fe<H;++Fe)z[P]=W[Pe],z[P+1]=W[Pe+1],z[P+2]=W[Pe+2],z[P+3]=W[Pe+3],P+=L}else{if(4===T){for(let ue=0;ue<de;++ue){const Pe=4*F[ue];z[P]=W[Pe],z[P+1]=W[Pe+1],z[P+2]=W[Pe+2],z[P+3]=W[Pe+3],P+=L}return}for(let ue=0;ue<de;++ue){const Pe=3*F[ue];z[P]=W[Pe],z[P+1]=W[Pe+1],z[P+2]=W[Pe+2],z[P+3]=255,P+=L}}else{z[P]=W[0],z[P+1]=W[1],z[P+2]=W[2],z[P+3]=W[3];const ue=new Uint32Array(M.typedBuffer.buffer,M.start),Pe=L/4,Fe=ue[P/=4];P+=Pe;const Ke=de*H;for(let Ge=1;Ge<Ke;++Ge)ue[P]=Fe,P+=Pe}}(T,T.size,F,W);break}case rt.r.COLORFEATUREATTRIBUTE:{const F=H.getField(O,G.Y$);(0,yt.vA)(!!F,`No buffer view for ${O}`),(0,yt.vA)(1===T.size),F&&1===T.size&&function dn(O,T,M){const{data:P,indices:H}=O,W=T.typedBuffer,F=T.typedBufferStride,z=H.length,L=P[0];M*=F;for(let de=0;de<z;++de)W[M]=L,M+=F}(T,F,W);break}case rt.r.TANGENT:{(0,yt.vA)(4===T.size);const F=H.getField(O,G.Eq);(0,yt.vA)(!!F,`No buffer view for ${O}`),F&&function ln(O,T,M,P,H=1){if(!T)return void wr(O,M,P,H);const{data:W,indices:F}=O,L=M.typedBuffer,de=M.typedBufferStride,ue=F.length,Pe=T[0],Fe=T[1],Ke=T[2],Ge=T[4],Ze=T[5],nt=T[6],vt=T[8],_t=T[9],pt=T[10],At=!(0,D.ut)(T);if(P*=de,1===H)for(let Je=0;Je<ue;++Je){const Ye=4*F[Je],qe=W[Ye],Qe=W[Ye+1],He=W[Ye+2],Ne=W[Ye+3];let et=Pe*qe+Ge*Qe+vt*He,Tt=Fe*qe+Ze*Qe+_t*He,Pt=Ke*qe+nt*Qe+pt*He;if(At){const Mt=et*et+Tt*Tt+Pt*Pt;if(Mt<.999999&&Mt>1e-6){const Kt=1/Math.sqrt(Mt);et*=Kt,Tt*=Kt,Pt*=Kt}}L[P]=et,L[P+1]=Tt,L[P+2]=Pt,L[P+3]=Ne,P+=de}else for(let Je=0;Je<ue;++Je){const Ye=4*F[Je],qe=W[Ye],Qe=W[Ye+1],He=W[Ye+2],Ne=W[Ye+3];let et=Pe*qe+Ge*Qe+vt*He,Tt=Fe*qe+Ze*Qe+_t*He,Pt=Ke*qe+nt*Qe+pt*He;if(At){const Mt=et*et+Tt*Tt+Pt*Pt;if(Mt<.999999&&Mt>1e-6){const Kt=1/Math.sqrt(Mt);et*=Kt,Tt*=Kt,Pt*=Kt}}for(let Mt=0;Mt<H;++Mt)L[P]=et,L[P+1]=Tt,L[P+2]=Pt,L[P+3]=Ne,P+=de}}(T,P,F,W);break}case rt.r.PROFILERIGHT:case rt.r.PROFILEUP:case rt.r.PROFILEVERTEXANDNORMAL:case rt.r.FEATUREVALUE:{(0,yt.vA)(4===T.size);const F=H.getField(O,G.Eq);(0,yt.vA)(!!F,`No buffer view for ${O}`),F&&wr(T,F,W)}}}class mn{constructor(T){this.vertexBufferLayout=T}elementCount(T){return T.attributes.get(rt.r.POSITION).indices.length}write(T,M,P,H,W){!function hn(O,T,M,P,H,W){for(const z of T.fields.keys()){const L=O.attributes.get(z);if(L&&(null==L?void 0:L.indices))_n(z,L,M,P,H,W);else if(z===rt.r.OBJECTANDLAYERIDCOLOR&&null!=O.objectAndLayerIdColor){var F;const ue=null===(F=O.attributes.get(rt.r.POSITION))||void 0===F?void 0:F.indices;if(ue){const Pe=ue.length,Fe=H.getField(z,G.XP);un(O.objectAndLayerIdColor,Fe,Pe,W)}}}}(P,this.vertexBufferLayout,T,M,H,W)}}var Nr=_(94417),fn=_(89141),sr=_(66874),Wr=_(17304),vn=_(21589),Fr=_(11556),gn=_(66307),pn=_(14253),En=_(50758);const Tn={mask:255},Mn={function:{func:S.MT.ALWAYS,ref:Me.dd.OutlineVisualElementMask,mask:Me.dd.OutlineVisualElementMask},operation:{fail:S.eA.KEEP,zFail:S.eA.KEEP,zPass:S.eA.ZERO}},xn={function:{func:S.MT.ALWAYS,ref:Me.dd.OutlineVisualElementMask,mask:Me.dd.OutlineVisualElementMask},operation:{fail:S.eA.KEEP,zFail:S.eA.KEEP,zPass:S.eA.REPLACE}};var ar=_(83415);const Hr=[1,1,.5],An=[0,.6,.2],Pn=[0,1,.2];var yn=_(75915),lr=_(41396);class Dn extends Wr.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,I.ci)(Hr),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Me.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,I.fA)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Zt.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,I.fA)(.2,.2,.2),this.diffuse=(0,I.fA)(.8,.8,.8),this.externalColor=(0,fn.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,I.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Me.it.Less,this.textureAlphaMode=Me.sf.Blend,this.textureAlphaCutoff=vn.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Cr.m$.Occlude,this.isDecoration=!1}}class rr extends gn.w{initializeConfiguration(T,M){M.spherical=T.viewingMode===ir.RT.Global,M.doublePrecisionRequiresObfuscation=T.rctx.driverTest.doublePrecisionRequiresObfuscation.result,M.textureCoordinateType=M.hasColorTexture||M.hasMetallicRoughnessTexture||M.hasEmissionTexture||M.hasOcclusionTexture||M.hasNormalTexture?sr.q.Default:sr.q.None,M.objectAndLayerIdColorInstanced=M.instanced}initializeProgram(T){return this._initializeProgram(T,rr.shader)}_initializeProgram(T,M){return new En.B(T.rctx,M.get().build(this.configuration),pn.D)}_convertDepthTestFunction(T){return T===Me.it.Lequal?S.MT.LEQUAL:S.MT.LESS}_makePipeline(T,M){const P=this.configuration,H=T===ar.y.NONE,W=T===ar.y.FrontFace;return(0,lr.Ey)({blending:P.output!==Dt.V.Color&&P.output!==Dt.V.Alpha||!P.transparent?null:H?tr.V0:(0,tr.ez)(T),culling:Cn(P)?(0,lr.Xt)(P.cullFace):null,depthTest:{func:(0,tr.K_)(T,this._convertDepthTestFunction(P.customDepthTest))},depthWrite:(H||W)&&P.writeDepth?lr.kn:null,colorWrite:lr.wE,stencilWrite:P.hasOccludees?Tn:null,stencilTest:P.hasOccludees?M?xn:Mn:null,polygonOffset:H||W?null:(0,tr.aB)(P.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(T){return T?this._occludeePipelineState:super.getPipeline()}}function Cn(O){return O.cullFace!==Me.s2.None||!O.hasSlicePlane&&!O.transparent&&!O.doubleSidedMode}rr.shader=new Fr.$(yn.D,()=>_.e(5301).then(_.bind(_,45301)));var be=_(8189),Re=_(58041),Sn=_(20367),bn=_(20951);class cr extends Sn.nW{}(0,be._)([(0,Re.W)({constValue:!0})],cr.prototype,"hasSliceHighlight",void 0),(0,be._)([(0,Re.W)({constValue:!1})],cr.prototype,"hasSliceInVertexProgram",void 0),(0,be._)([(0,Re.W)({constValue:bn.c.Pass})],cr.prototype,"pbrTextureBindType",void 0);class Be extends cr{constructor(){super(...arguments),this.output=Dt.V.Color,this.alphaDiscardMode=Me.sf.Opaque,this.doubleSidedMode=Jt.W.None,this.pbrMode=er.A9.Disabled,this.cullFace=Me.s2.None,this.transparencyPassType=ar.y.NONE,this.normalType=Zt.W.Attribute,this.textureCoordinateType=sr.q.None,this.customDepthTest=Me.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,be._)([(0,Re.W)({count:Dt.V.COUNT})],Be.prototype,"output",void 0),(0,be._)([(0,Re.W)({count:Me.sf.COUNT})],Be.prototype,"alphaDiscardMode",void 0),(0,be._)([(0,Re.W)({count:Jt.W.COUNT})],Be.prototype,"doubleSidedMode",void 0),(0,be._)([(0,Re.W)({count:er.A9.COUNT})],Be.prototype,"pbrMode",void 0),(0,be._)([(0,Re.W)({count:Me.s2.COUNT})],Be.prototype,"cullFace",void 0),(0,be._)([(0,Re.W)({count:ar.y.COUNT})],Be.prototype,"transparencyPassType",void 0),(0,be._)([(0,Re.W)({count:Zt.W.COUNT})],Be.prototype,"normalType",void 0),(0,be._)([(0,Re.W)({count:sr.q.COUNT})],Be.prototype,"textureCoordinateType",void 0),(0,be._)([(0,Re.W)({count:Me.it.COUNT})],Be.prototype,"customDepthTest",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"spherical",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasVertexColors",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasSymbolColors",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasVerticalOffset",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasSlicePlane",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasSliceHighlight",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasColorTexture",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasMetallicRoughnessTexture",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasEmissionTexture",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasOcclusionTexture",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasNormalTexture",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasScreenSizePerspective",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasVertexTangents",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasOccludees",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"multipassEnabled",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasModelTransformation",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"offsetBackfaces",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"vvSize",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"vvColor",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"receiveShadows",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"receiveAmbientOcclusion",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"textureAlphaPremultiplied",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"instanced",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"instancedColor",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"objectAndLayerIdColorInstanced",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"instancedDoublePrecision",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"writeDepth",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"transparent",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"enableOffset",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"cullAboveGround",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"snowCover",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasColorTextureTransform",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasEmissionTextureTransform",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasNormalTextureTransform",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasOcclusionTextureTransform",void 0),(0,be._)([(0,Re.W)()],Be.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,be._)([(0,Re.W)({constValue:!1})],Be.prototype,"occlusionPass",void 0),(0,be._)([(0,Re.W)({constValue:!0})],Be.prototype,"hasVvInstancing",void 0),(0,be._)([(0,Re.W)({constValue:!1})],Be.prototype,"useCustomDTRExponentForWater",void 0),(0,be._)([(0,Re.W)({constValue:!1})],Be.prototype,"supportsTextureAtlas",void 0),(0,be._)([(0,Re.W)({constValue:!0})],Be.prototype,"useFillLights",void 0);var Rn=_(34187);class dr extends rr{initializeConfiguration(T,M){super.initializeConfiguration(T,M),M.hasMetallicRoughnessTexture=!1,M.hasEmissionTexture=!1,M.hasOcclusionTexture=!1,M.hasNormalTexture=!1,M.hasModelTransformation=!1,M.normalType=Zt.W.Attribute,M.doubleSidedMode=Jt.W.WindingOrder,M.hasVertexTangents=!1}initializeProgram(T){return this._initializeProgram(T,dr.shader)}}dr.shader=new Fr.$(Rn.R,()=>_.e(8093).then(_.bind(_,88093)));class ur extends Cr.im{constructor(T){super(T,Un),this.supportsEdges=!0,this.produces=new Map([[mr.N.OPAQUE_MATERIAL,M=>((0,Dt.XY)(M)||(0,Dt.PJ)(M))&&!this.parameters.transparent],[mr.N.TRANSPARENT_MATERIAL,M=>((0,Dt.XY)(M)||(0,Dt.PJ)(M))&&this.parameters.transparent&&this.parameters.writeDepth],[mr.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,M=>((0,Dt.XY)(M)||(0,Dt.PJ)(M))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new Be,this._vertexBufferLayout=function Bn(O){const T=(0,Jr.BP)().vec3f(rt.r.POSITION);return O.normalType===Zt.W.Compressed?T.vec2i16(rt.r.NORMALCOMPRESSED,{glNormalized:!0}):T.vec3f(rt.r.NORMAL),O.hasVertexTangents&&T.vec4f(rt.r.TANGENT),(O.textureId||O.normalTextureId||O.metallicRoughnessTextureId||O.emissiveTextureId||O.occlusionTextureId)&&T.vec2f(rt.r.UV0),O.hasVertexColors&&T.vec4u8(rt.r.COLOR),O.hasSymbolColors&&T.vec4u8(rt.r.SYMBOLCOLOR),(0,$e.A)("enable-feature:objectAndLayerId-rendering")&&T.vec4u8(rt.r.OBJECTANDLAYERIDCOLOR),T}(this.parameters)}isVisibleForOutput(T){return T!==Dt.V.Shadow&&T!==Dt.V.ShadowExcludeHighlight&&T!==Dt.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const T=this.parameters;if(!super.isVisible()||0===T.layerOpacity)return!1;const{hasInstancedColor:M,hasVertexColors:P,hasSymbolColors:H,vvColor:W}=T,F="replace"===T.colorMixMode,z=T.opacity>0,L=T.externalColor&&T.externalColor[3]>0,de=M||W||H;return P&&de?F||z:P?F?L:z:de?F||z:F?L:z}getConfiguration(T,M){return this._configuration.output=T,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Me.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=M.multipassEnabled,this._configuration.cullAboveGround=M.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,T!==Dt.V.Color&&T!==Dt.V.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this._configuration.doubleSidedMode=this.parameters.treeRendering?Jt.W.WindingOrder:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Jt.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Jt.W.WindingOrder:Jt.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=M.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?er.A9.Schematic:er.A9.Normal:er.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=M.transparencyPassType,this._configuration.enableOffset=M.camera.relativeElevation<tr.xt,this._configuration.snowCover=this.hasSnowCover(M),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(T){return null!=T.weather&&T.weatherVisible&&"snowy"===T.weather.type&&"enabled"===T.weather.snowCover}intersect(T,M,P,H,W,F){if(null!=this.parameters.verticalOffset){var z;const L=P.camera;(0,N.s)(gr,M[12],M[13],M[14]);let de=null;switch(P.viewingMode){case ir.RT.Global:de=(0,N.n)(jr,gr);break;case ir.RT.Local:de=(0,N.c)(jr,Wn)}let ue=0;const Pe=(0,N.f)(Fn,gr,L.eye),Fe=(0,N.l)(Pe),Ke=(0,N.h)(Pe,Pe,1/Fe);let Ge=null;this.parameters.screenSizePerspective&&(Ge=(0,N.k)(de,Ke)),ue+=(0,Nr.kE)(L,Fe,this.parameters.verticalOffset,null!==(z=Ge)&&void 0!==z?z:0,this.parameters.screenSizePerspective),(0,N.h)(de,de,ue),(0,N.t)(vr,de,P.transform.inverseRotation),H=(0,N.f)(wn,H,vr),W=(0,N.f)(Nn,W,vr)}(0,Nr.Uy)(T,P,H,W,function tn(O){return null!=O?(br.offset=O,br):null}(P.verticalOffset),F)}createGLMaterial(T){return new Ln(T)}createBufferWriter(){return new mn(this._vertexBufferLayout)}}class Ln extends Qr.m{constructor(T){super({...T,...T.material.parameters})}_updateShadowState(T){T.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:T.shadowMap.enabled})}_updateOccludeeState(T){T.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:T.hasOccludees})}beginSlot(T){this._output!==Dt.V.Color&&this._output!==Dt.V.Alpha||(this._updateShadowState(T),this._updateOccludeeState(T));const M=this._material.parameters;this.updateTexture(M.textureId);const P=T.camera.viewInverseTransposeMatrix;return(0,N.s)(M.origin,P[3],P[7],P[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(M.treeRendering?dr:rr,T)}}const Un=new class In extends Dn{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},wn=(0,I.vt)(),Nn=(0,I.vt)(),Wn=(0,I.fA)(0,0,1),jr=(0,I.vt)(),vr=(0,I.vt)(),gr=(0,I.vt)(),Fn=(0,I.vt)(),Gt=()=>at.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function pr(){return pr=(0,A.A)(function*(O,T){var M;const P=yield function jn(O,T){return Er.apply(this,arguments)}(O,T),H=yield function $n(O,T){return Mr.apply(this,arguments)}(null!==(M=P.textureDefinitions)&&void 0!==M?M:{},T);let W=0;for(const F in H)if(H.hasOwnProperty(F)){const z=H[F];W+=null!=z&&z.image?z.image.width*z.image.height*4:0}return{resource:P,textures:H,size:W+(0,Le.iL)(P)}}),pr.apply(this,arguments)}function Er(){return Er=(0,A.A)(function*(O,T){const M=null==T?void 0:T.streamDataRequester;if(M)return function zn(O,T,M){return Tr.apply(this,arguments)}(O,M,T);const P=yield(0,Ve.Ke)((0,ye.A)(O,T));if(!0===P.ok)return P.value.data;(0,dt.QP)(P.error),zr(P.error)}),Er.apply(this,arguments)}function Tr(){return Tr=(0,A.A)(function*(O,T,M){const P=yield(0,Ve.Ke)(T.request(O,"json",M));if(!0===P.ok)return P.value;(0,dt.QP)(P.error),zr(P.error.details.url)}),Tr.apply(this,arguments)}function zr(O){throw new Se.A("",`Request for object resource failed: ${O}`)}function Vn(O){const T=O.params,M=T.topology;let P=!0;switch(T.vertexAttributes||(Gt().warn("Geometry must specify vertex attributes"),P=!1),T.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const W=T.faces;if(W){if(T.vertexAttributes)for(const F in T.vertexAttributes){const z=W[F];null!=z&&z.values?(null!=z.valueType&&"UInt32"!==z.valueType&&(Gt().warn(`Unsupported indexed geometry indices type '${z.valueType}', only UInt32 is currently supported`),P=!1),null!=z.valuesPerElement&&1!==z.valuesPerElement&&(Gt().warn(`Unsupported indexed geometry values per element '${z.valuesPerElement}', only 1 is currently supported`),P=!1)):(Gt().warn(`Indexed geometry does not specify face indices for '${F}' attribute`),P=!1)}}else Gt().warn("Indexed geometries must specify faces"),P=!1;break}default:Gt().warn(`Unsupported topology '${M}'`),P=!1}O.params.material||(Gt().warn("Geometry requires material"),P=!1);const H=O.params.vertexAttributes;for(const W in H)H[W].values||(Gt().warn("Geometries with externally defined attributes are not yet supported"),P=!1);return P}function Kn(O){const T=(0,oe.Ie)();return O.forEach(M=>{const P=M.boundingInfo;null!=P&&((0,oe.iT)(T,P.bbMin),(0,oe.iT)(T,P.bbMax))}),T}function Mr(){return Mr=(0,A.A)(function*(O,T){const M=new Array;for(const W in O){const F=O[W],z=F.images[0].data;if(!z){Gt().warn("Externally referenced texture data is not yet supported");continue}const L=F.encoding+";base64,"+z,de="/textureDefinitions/"+W,ue="rgba"===F.channels?F.alphaChannelUsage||"transparency":"none",Pe={noUnpackFlip:!0,wrap:{s:S.pF.REPEAT,t:S.pF.REPEAT},preMultiplyAlpha:Vr(ue)!==Me.sf.Opaque},Fe=null!=T&&T.disableTextures?Promise.resolve(null):(0,st.D)(L,T);M.push(Fe.then(Ke=>({refId:de,image:Ke,parameters:Pe,alphaChannelUsage:ue})))}const P=yield Promise.all(M),H={};for(const W of P)H[W.refId]=W;return H}),Mr.apply(this,arguments)}function Vr(O){switch(O){case"mask":return Me.sf.Mask;case"maskAndTransparency":return Me.sf.MaskBlend;case"none":return Me.sf.Opaque;default:return Me.sf.Blend}}function Yn(O){const T=O.params;return{id:1,material:T.material,texture:T.texture,region:T.texture}}const Xn=new we.R(1,2,"wosr");var kt=_(61605);function Zn(O,T){return xr.apply(this,arguments)}function xr(){return xr=(0,A.A)(function*(O,T){var M;const P=Gr((0,y.EM)(O));if("wosr"===P.fileType){const Fe=yield T.cache?T.cache.loadWOSR(P.url,T):function Hn(O,T){return pr.apply(this,arguments)}(P.url,T),{engineResources:Ke,referenceBoundingBox:Ge}=function Gn(O,T){var M;const P=new Array,H=new Array,W=new Array,F=new xt.O,z=O.resource,L=we.R.parse(z.version||"1.0","wosr");Xn.validate(L);const de=z.model.name,ue=z.model.geometries,Pe=null!==(M=z.materialDefinitions)&&void 0!==M?M:{},Fe=O.textures;let Ke=0;const Ge=new Map;for(let pt=0;pt<ue.length;pt++){var Ze,nt;const At=ue[pt];if(!Vn(At))continue;const gt=Yn(At),Et=At.params.vertexAttributes,Je=[],Ye=Ct=>{if("PerAttributeArray"===At.params.topology)return null;const Ht=At.params.faces;for(const $t in Ht)if($t===Ct)return Ht[$t].values;return null},qe=Et[rt.r.POSITION],Qe=qe.values.length/qe.valuesPerElement;for(const Ct in Et){var vt;const Ht=Et[Ct],$t=Ht.values,Or=null!==(vt=Ye(Ct))&&void 0!==vt?vt:(0,lt.tM)(Qe);Je.push([Ct,new Te.n($t,Or,Ht.valuesPerElement,!0)])}const He=gt.texture,Ne=Fe&&Fe[He];if(Ne&&!Ge.has(He)){const{image:Ct,parameters:Ht}=Ne,$t=new yr(Ct,Ht);H.push($t),Ge.set(He,$t)}const et=Ge.get(He),Tt=et?et.id:void 0,Pt=gt.material;let Mt=F.get(Pt,He);if(null==Mt){var _t;const Ct=Pe[Pt.substring(Pt.lastIndexOf("/")+1)].params;1===Ct.transparency&&(Ct.transparency=0);const Ht=Ne&&Ne.alphaChannelUsage,$t=Ct.transparency>0||"transparency"===Ht||"maskAndTransparency"===Ht,Or=Ne?Vr(Ne.alphaChannelUsage):void 0,$r={ambient:(0,I.ci)(Ct.diffuse),diffuse:(0,I.ci)(Ct.diffuse),opacity:1-(Ct.transparency||0),transparent:$t,textureAlphaMode:Or,textureAlphaCutoff:.33,textureId:Tt,initTextureTransparent:!0,doubleSided:!0,cullFace:Me.s2.None,colorMixMode:Ct.externalColorMixMode||"tint",textureAlphaPremultiplied:null!==(_t=null==Ne?void 0:Ne.parameters.preMultiplyAlpha)&&void 0!==_t&&_t};null!=T&&T.materialParameters&&Object.assign($r,T.materialParameters),Mt=new ur($r),F.set(Pt,He,Mt)}W.push(Mt);const Kt=new We.V(Mt,Je);Ke+=null!==(Ze=null===(nt=Je.find(Ct=>Ct[0]===rt.r.POSITION))||void 0===nt||null===(nt=nt[1])||void 0===nt?void 0:nt.indices.length)&&void 0!==Ze?Ze:0,P.push(Kt)}return{engineResources:[{name:de,stageResources:{textures:H,materials:W,geometries:P},pivotOffset:z.model.pivotOffset,numberOfVertices:Ke,lodThreshold:null}],referenceBoundingBox:Kn(P)}}(Fe,T);return{lods:Ke,referenceBoundingBox:Ge,isEsriSymbolResource:!1,isWosr:!0}}const H=yield T.cache?T.cache.loadGLTF(P.url,T,!!T.usePBR):(0,$.y)(new K.R(T.streamDataRequester),P.url,T,T.usePBR),W=null===(M=H.model.meta)||void 0===M?void 0:M.ESRI_proxyEllipsoid,F=H.meta.isEsriSymbolResource&&null!=W&&"EsriRealisticTreesStyle"===H.meta.ESRI_webstyle;F&&!H.customMeta.esriTreeRendering&&(H.customMeta.esriTreeRendering=!0,function qn(O,T){for(let M=0;M<O.model.lods.length;++M){const P=O.model.lods[M];for(const H of P.parts){const W=H.attributes.normal;if(null==W)return;const F=H.attributes.position,z=F.count,L=(0,I.vt)(),de=(0,I.vt)(),ue=(0,I.vt)(),Pe=new Uint8Array(4*z),Fe=new Float64Array(3*z),Ke=(0,D.B8)((0,x.vt)(),H.transform);let Ge=0,Ze=0;for(let nt=0;nt<z;nt++){F.getVec(nt,de),W.getVec(nt,L),(0,N.e)(de,de,H.transform),(0,N.f)(ue,de,T.center),(0,N.D)(ue,ue,T.radius);const vt=ue[2],_t=(0,N.l)(ue),pt=Math.min(.45+.55*_t*_t,1);(0,N.D)(ue,ue,T.radius),null!==Ke&&(0,N.e)(ue,ue,Ke),(0,N.n)(ue,ue),M+1!==O.model.lods.length&&O.model.lods.length>1&&(0,N.m)(ue,ue,L,vt>-1?.2:Math.min(-4*vt-3.8,1)),Fe[Ge]=ue[0],Fe[Ge+1]=ue[1],Fe[Ge+2]=ue[2],Ge+=3,Pe[Ze]=255*pt,Pe[Ze+1]=255*pt,Pe[Ze+2]=255*pt,Pe[Ze+3]=255,Ze+=4}H.attributes.normal=new G.xs(Fe),H.attributes.color=new G.XP(Pe)}}}(H,W));const z=!!T.usePBR,L=H.meta.isEsriSymbolResource?{usePBR:z,isSchematic:!1,treeRendering:F,mrrFactors:[...Pn]}:{usePBR:z,isSchematic:!1,treeRendering:!1,mrrFactors:[...Hr]},de={...T.materialParameters,treeRendering:F},{engineResources:ue,referenceBoundingBox:Pe}=Kr(H,L,de,T.skipHighLods&&null==P.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:P.specifiedLodIndex});return{lods:ue,referenceBoundingBox:Pe,isEsriSymbolResource:H.meta.isEsriSymbolResource,isWosr:!1}}),xr.apply(this,arguments)}function Gr(O){const T=O.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return T?{fileType:"gltf",url:T[1],specifiedLodIndex:null!=T[4]?Number(T[4]):null}:O.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:O,specifiedLodIndex:null}:{fileType:"unknown",url:O,specifiedLodIndex:null}}function Kr(O,T,M,P){const H=O.model,W=new Array,F=new Map,z=new Map,L=H.lods.length,de=(0,oe.Ie)();return H.lods.forEach((ue,Pe)=>{const Fe=!0===P.skipHighLods&&(L>1&&0===Pe||L>3&&1===Pe)||!1===P.skipHighLods&&null!=P.singleLodIndex&&Pe!==P.singleLodIndex;if(Fe&&0!==Pe)return;const Ke=new _e(ue.name,ue.lodThreshold,[0,0,0]);ue.parts.forEach(Ge=>{const Ze=Fe?new ur({}):function Jn(O,T,M,P,H,W,F){const z=T.material+(T.attributes.normal?"_normal":"")+(T.attributes.color?"_color":"")+(T.attributes.texCoord0?"_texCoord0":"")+(T.attributes.tangent?"_tangent":""),L=O.materials.get(T.material),de=null!=T.attributes.texCoord0,ue=null!=T.attributes.normal;if(null==L)return null;const Pe=function kn(O){switch(O){case"BLEND":return Me.sf.Blend;case"MASK":return Me.sf.Mask;case"OPAQUE":case null:case void 0:return Me.sf.Opaque}}(L.alphaMode);if(!W.has(z)){var Fe,Ke;if(de){const Ye=(qe,Qe=!1)=>{if(null!=qe&&!F.has(qe)){const He=O.textures.get(qe);if(null!=He){const Ne=He.data;F.set(qe,new yr((0,q.x3)(Ne)?Ne.data:Ne,{...He.parameters,preMultiplyAlpha:!(0,q.x3)(Ne)&&Qe,encoding:(0,q.x3)(Ne)&&null!=Ne.encoding?Ne.encoding:void 0}))}}};Ye(L.textureColor,Pe!==Me.sf.Opaque),Ye(L.textureNormal),Ye(L.textureOcclusion),Ye(L.textureEmissive),Ye(L.textureMetallicRoughness)}const Ze=L.color[0]**(1/kt.T),nt=L.color[1]**(1/kt.T),vt=L.color[2]**(1/kt.T),_t=L.emissiveFactor[0]**(1/kt.T),pt=L.emissiveFactor[1]**(1/kt.T),At=L.emissiveFactor[2]**(1/kt.T),gt=null!=L.textureColor&&de?F.get(L.textureColor):null,Et=function On({normalTexture:O,metallicRoughnessTexture:T,metallicFactor:M,roughnessFactor:P,emissiveTexture:H,emissiveFactor:W,occlusionTexture:F}){return null==O&&null==T&&null==H&&(null==W||(0,N.j)(W,I.uY))&&null==F&&(null==P||1===P)&&(null==M||1===M)}({normalTexture:L.textureNormal,metallicRoughnessTexture:L.textureMetallicRoughness,metallicFactor:L.metallicFactor,roughnessFactor:L.roughnessFactor,emissiveTexture:L.textureEmissive,emissiveFactor:L.emissiveFactor,occlusionTexture:L.textureOcclusion}),Je=null!=(null===(Fe=L.normalTextureTransform)||void 0===Fe?void 0:Fe.scale)?null===(Ke=L.normalTextureTransform)||void 0===Ke?void 0:Ke.scale:B.Un;W.set(z,new ur({...P,transparent:Pe===Me.sf.Blend,customDepthTest:Me.it.Lequal,textureAlphaMode:Pe,textureAlphaCutoff:L.alphaCutoff,diffuse:[Ze,nt,vt],ambient:[Ze,nt,vt],opacity:L.opacity,doubleSided:L.doubleSided,doubleSidedType:"winding-order",cullFace:L.doubleSided?Me.s2.None:Me.s2.Back,hasVertexColors:!!T.attributes.color,hasVertexTangents:!!T.attributes.tangent,normalType:ue?Zt.W.Attribute:Zt.W.ScreenDerivative,castShadows:!0,receiveShadows:L.receiveShadows,receiveAmbientOcclusion:L.receiveAmbientOcclustion,textureId:null!=gt?gt.id:void 0,colorMixMode:L.colorMixMode,normalTextureId:null!=L.textureNormal&&de?F.get(L.textureNormal).id:void 0,textureAlphaPremultiplied:null!=gt&&!!gt.parameters.preMultiplyAlpha,occlusionTextureId:null!=L.textureOcclusion&&de?F.get(L.textureOcclusion).id:void 0,emissiveTextureId:null!=L.textureEmissive&&de?F.get(L.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=L.textureMetallicRoughness&&de?F.get(L.textureMetallicRoughness).id:void 0,emissiveFactor:[_t,pt,At],mrrFactors:Et?[...An]:[L.metallicFactor,L.roughnessFactor,P.mrrFactors[2]],isSchematic:Et,colorTextureTransformMatrix:fe(L.colorTextureTransform),normalTextureTransformMatrix:fe(L.normalTextureTransform),scale:[Je[0],Je[1]],occlusionTextureTransformMatrix:fe(L.occlusionTextureTransform),emissiveTextureTransformMatrix:fe(L.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:fe(L.metallicRoughnessTextureTransform),...H}))}const Ge=W.get(z);if(M.stageResources.materials.push(Ge),de){const Ze=nt=>{null!=nt&&M.stageResources.textures.push(F.get(nt))};Ze(L.textureColor),Ze(L.textureNormal),Ze(L.textureOcclusion),Ze(L.textureEmissive),Ze(L.textureMetallicRoughness)}return Ge}(H,Ge,Ke,T,M,F,z),{geometry:nt,vertexCount:vt}=function Qn(O,T){const M=O.attributes.position.count,P=(0,se.x)(O.indices||M,O.primitiveType),H=(0,he.oe)(3*M),{typedBuffer:W,typedBufferStride:F}=O.attributes.position;(0,C.a)(H,W,O.transform,3,F);const z=[[rt.r.POSITION,new Te.n(H,P,3,!0)]];if(null!=O.attributes.normal){const L=(0,he.oe)(3*M),{typedBuffer:de,typedBufferStride:ue}=O.attributes.normal;(0,R.Ge)(hr,O.transform),(0,C.b)(L,de,hr,3,ue),z.push([rt.r.NORMAL,new Te.n(L,P,3,!0)])}if(null!=O.attributes.tangent){const L=(0,he.oe)(4*M),{typedBuffer:de,typedBufferStride:ue}=O.attributes.tangent;(0,R.Ge)(hr,O.transform),(0,w.t)(L,de,hr,4,ue),z.push([rt.r.TANGENT,new Te.n(L,P,4,!0)])}if(null!=O.attributes.texCoord0){const L=(0,he.oe)(2*M),{typedBuffer:de,typedBufferStride:ue}=O.attributes.texCoord0;(0,X.n)(L,de,2,ue),z.push([rt.r.UV0,new Te.n(L,P,2,!0)])}if(null!=O.attributes.color){const L=new Uint8Array(4*M);4===O.attributes.color.elementCount?O.attributes.color instanceof G.Eq?(0,w.s)(L,O.attributes.color,255):O.attributes.color instanceof G.XP?(0,ie.c)(L,O.attributes.color):O.attributes.color instanceof G.Uz&&(0,w.s)(L,O.attributes.color,1/256):(L.fill(255),O.attributes.color instanceof G.xs?(0,C.s)(L,O.attributes.color,255,4):O.attributes.color instanceof G.eI?(0,ae.c)(L,O.attributes.color.typedBuffer,4,O.attributes.color.typedBufferStride):O.attributes.color instanceof G.nS&&(0,C.s)(L,O.attributes.color,1/256,4)),z.push([rt.r.COLOR,new Te.n(L,P,4,!0)])}return{geometry:new We.V(T,z),vertexCount:M}}(Ge,null!=Ze?Ze:new ur({})),_t=nt.boundingInfo;null!=_t&&0===Pe&&((0,oe.iT)(de,_t.bbMin),(0,oe.iT)(de,_t.bbMax)),null!=Ze&&(Ke.stageResources.geometries.push(nt),Ke.numberOfVertices+=vt)}),Fe||W.push(Ke)}),{engineResources:W,referenceBoundingBox:de}}const hr=(0,b.vt)()},10136:(Ae,Y,_)=>{var y,I;_.d(Y,{k5:()=>y}),_(69287),(I=y||(y={}))[I.Multiply=1]="Multiply",I[I.Ignore=2]="Ignore",I[I.Replace=3]="Replace",I[I.Tint=4]="Tint"},48499:(Ae,Y,_)=>{_.d(Y,{BP:()=>x,l5:()=>B});var A=_(45434),y=_(44703),R=_(65388);class b{constructor(C,w){this.layout=C,this.buffer="number"==typeof w?new ArrayBuffer(w*C.stride):w;for(const X of C.fields.keys()){const ae=C.fields.get(X);this[X]=new ae.constructor(this.buffer,ae.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(C,w){const X=this[C];return X&&X.elementCount===w.ElementCount&&X.elementType===w.ElementType?X:null}slice(C,w){return new b(this.layout,this.buffer.slice(C*this.stride,w*this.stride))}copyFrom(C,w=0,X=0,ae=C.count){const ie=this.stride;if(ie%4==0){const K=new Uint32Array(C.buffer,w*ie,ae*ie/4);new Uint32Array(this.buffer,X*ie,ae*ie/4).set(K)}else{const K=new Uint8Array(C.buffer,w*ie,ae*ie);new Uint8Array(this.buffer,X*ie,ae*ie).set(K)}return this}get usedMemory(){return this.byteLength}dispose(){}}class D{constructor(C=null){this._stride=0,this._lastAligned=0,this._fields=new Map,C&&(this._stride=C.stride,C.fields.forEach(w=>{return this._fields.set(w[0],{...w[1],constructor:(G=w[1].constructor,he.get(G))});var G}))}vec2f(C,w){return this._appendField(C,A.gH,w),this}vec2f64(C,w){return this._appendField(C,A.si,w),this}vec3f(C,w){return this._appendField(C,A.xs,w),this}vec3f64(C,w){return this._appendField(C,A.Xm,w),this}vec4f(C,w){return this._appendField(C,A.Eq,w),this}vec4f64(C,w){return this._appendField(C,A.Aj,w),this}mat3f(C,w){return this._appendField(C,A.jZ,w),this}mat3f64(C,w){return this._appendField(C,A.j0,w),this}mat4f(C,w){return this._appendField(C,A.Sx,w),this}mat4f64(C,w){return this._appendField(C,A.E$,w),this}vec4u8(C,w){return this._appendField(C,A.XP,w),this}f32(C,w){return this._appendField(C,A.Y$,w),this}f64(C,w){return this._appendField(C,A.qB,w),this}u8(C,w){return this._appendField(C,A.SL,w),this}u16(C,w){return this._appendField(C,A.h,w),this}i8(C,w){return this._appendField(C,A.bf,w),this}vec2i8(C,w){return this._appendField(C,A.D6,w),this}vec2i16(C,w){return this._appendField(C,A.mJ,w),this}vec2u8(C,w){return this._appendField(C,A.LC,w),this}vec4u16(C,w){return this._appendField(C,A.Uz,w),this}u32(C,w){return this._appendField(C,A.P,w),this}_appendField(C,w,X){if(this._fields.has(C))return void(0,R.vA)(!1,`${C} already added to vertex buffer layout`);const ae=w.ElementCount*(0,y.GJ)(w.ElementType),ie=this._stride;this._stride+=ae,this._fields.set(C,{size:ae,constructor:w,offset:ie,optional:X})}createBuffer(C){return new b(this,C)}createView(C){return new b(this,C)}clone(){const C=new D;return C._stride=this._stride,C._fields=new Map,this._fields.forEach((w,X)=>C._fields.set(X,w)),C.BufferType=this.BufferType,C}get stride(){if(this._lastAligned!==this._fields.size){let C=1;this._fields.forEach(w=>C=Math.max(C,(0,y.GJ)(w.constructor.ElementType))),this._stride=Math.floor((this._stride+C-1)/C)*C,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function x(){return new D}class B{constructor(C){this.fields=new Array,C.fields.forEach((w,X)=>{const ae={...w,constructor:I(w.constructor)};this.fields.push([X,ae])}),this.stride=C.stride}}const N=[A.Y$,A.gH,A.xs,A.Eq,A.jZ,A.Sx,A.qB,A.si,A.Xm,A.Aj,A.j0,A.E$,A.SL,A.LC,A.eI,A.XP,A.h,A.Yi,A.nS,A.Uz,A.P,A.An,A.H$,A.ml,A.bf,A.D6,A.m8,A.TX,A.Qt,A.mJ,A.Vp,A.E7,A.My,A.UL,A.zD,A.Y4];function I(G){return`${G.ElementType}_${G.ElementCount}`}const he=new Map;N.forEach(G=>he.set(I(G),G))},18238:(Ae,Y,_)=>{_.d(Y,{i$:()=>B,oD:()=>N,xJ:()=>x});var A=_(74567),y=_(83224),R=_(99286),b=_(93093);function D(I){I.varyings.add("linearDepth","float")}function x(I){I.vertex.uniforms.add(new R.G("nearFar",(oe,he)=>he.camera.nearFar))}function B(I){I.vertex.code.add(b.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function N(I,oe){const{vertex:he}=I;switch(oe.output){case A.V.Color:if(oe.receiveShadows)return D(I),void he.code.add(b.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case A.V.LinearDepth:case A.V.Shadow:case A.V.ShadowHighlight:case A.V.ShadowExcludeHighlight:return I.include(y.em,oe),D(I),x(I),B(I),void he.code.add(b.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}he.code.add(b.H`void forwardLinearDepth() {}`)}},43208:(Ae,Y,_)=>{_.d(Y,{M:()=>y});var A=_(93093);function y(R){R.vertex.code.add(A.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},65152:(Ae,Y,_)=>{_.d(Y,{c:()=>R});var A=_(93093),y=_(40972);function R(b,D=!0){b.attributes.add(y.r.POSITION,"vec2"),D&&b.varyings.add("uv","vec2"),b.vertex.code.add(A.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${D?A.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},74567:(Ae,Y,_)=>{var A,C;function R(C){return C===A.Shadow||C===A.ShadowHighlight||C===A.ShadowExcludeHighlight}function b(C){return function G(C){return function he(C){return function B(C){return C===A.Color||C===A.Alpha}(C)||function D(C){return C===A.Highlight||C===A.ObjectAndLayerIdColor}(C)}(C)||C===A.LinearDepth}(C)||C===A.Normal}_.d(Y,{PJ:()=>R,V:()=>A,XY:()=>b}),(C=A||(A={}))[C.Color=0]="Color",C[C.LinearDepth=1]="LinearDepth",C[C.Depth=2]="Depth",C[C.Normal=3]="Normal",C[C.Shadow=4]="Shadow",C[C.ShadowHighlight=5]="ShadowHighlight",C[C.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",C[C.Highlight=7]="Highlight",C[C.Alpha=8]="Alpha",C[C.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",C[C.CompositeColor=10]="CompositeColor",C[C.COUNT=11]="COUNT"},29359:(Ae,Y,_)=>{_.d(Y,{HQ:()=>oe});var A=_(92771),y=_(62789),R=_(28714),b=_(25866),D=_(41030),B=(_(88791),_(93093));function oe(q,ce){!function he(q,ce,...fe){if(!ce.hasSlicePlane){const Ve=B.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return ce.hasSliceInVertexProgram&&q.vertex.code.add(Ve),void q.fragment.code.add(Ve)}ce.hasSliceInVertexProgram&&q.vertex.uniforms.add(...fe),q.fragment.uniforms.add(...fe);const te=B.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,_e=B.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,ye=ce.hasSliceHighlight?B.H`
        ${_e}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:B.H`#define highlightSlice(_color_, _pos_) (_color_)`;ce.hasSliceInVertexProgram&&q.vertex.code.add(te),q.fragment.code.add(te),q.fragment.code.add(ye)}(q,ce,new D.W("slicePlaneOrigin",(fe,te)=>function X(q,ce,fe){if(null==fe.slicePlane)return b.uY;const te=G(q,ce,fe),_e=C(te,fe.slicePlane),ye=w(q,te,fe);return null!=ye?(0,R.e)(K,_e,ye):_e}(ce,fe,te)),new D.W("slicePlaneBasis1",(fe,te)=>{var _e;return ae(ce,fe,te,null===(_e=te.slicePlane)||void 0===_e?void 0:_e.basis1)}),new D.W("slicePlaneBasis2",(fe,te)=>{var _e;return ae(ce,fe,te,null===(_e=te.slicePlane)||void 0===_e?void 0:_e.basis2)}))}function G(q,ce,fe){return q.instancedDoublePrecision?(0,R.s)(ie,fe.camera.viewInverseTransposeMatrix[3],fe.camera.viewInverseTransposeMatrix[7],fe.camera.viewInverseTransposeMatrix[11]):ce.slicePlaneLocalOrigin}function C(q,ce){return null!=q?(0,R.f)(K,ce.origin,q):ce.origin}function w(q,ce,fe){return q.hasSliceTranslatedView?null!=ce?(0,A.Tl)(se,fe.camera.viewMatrix,ce):fe.camera.viewMatrix:null}function ae(q,ce,fe,te){if(null==te||null==fe.slicePlane)return b.uY;const _e=G(q,ce,fe),ye=C(_e,fe.slicePlane),Ve=w(q,_e,fe);return null!=Ve?((0,R.g)($,te,ye),(0,R.e)(K,ye,Ve),(0,R.e)($,$,Ve),(0,R.f)($,$,K)):te}const ie=(0,b.vt)(),K=(0,b.vt)(),$=(0,b.vt)(),se=(0,y.vt)()},93877:(Ae,Y,_)=>{_.d(Y,{d:()=>R});var A=_(18238),y=_(93093);function R(b){(0,A.i$)(b),b.vertex.code.add(y.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),b.vertex.code.add(y.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},20367:(Ae,Y,_)=>{_.d(Y,{BK:()=>se,nW:()=>ie});var A=_(8189),y=_(31610),R=_(32954),b=_(62789),D=_(28714),x=_(25866),B=_(74567),N=_(28825),I=_(3906),oe=_(41030),he=_(93093),G=_(33724),C=_(57887),w=_(58041),X=_(40972),ae=_(45825);class ie extends w.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,A._)([(0,w.W)()],ie.prototype,"instancedDoublePrecision",void 0),(0,A._)([(0,w.W)()],ie.prototype,"hasModelTransformation",void 0);const $=(0,R.vt)();function se(ce,fe){const te=fe.hasModelTransformation,_e=fe.instancedDoublePrecision;te&&(ce.vertex.uniforms.add(new C.X("model",Ve=>{var Le;return null!==(Le=Ve.modelTransformation)&&void 0!==Le?Le:b.zK})),ce.vertex.uniforms.add(new G.k("normalLocalOriginFromModel",Ve=>{var Le;return(0,y.Ge)($,null!==(Le=Ve.modelTransformation)&&void 0!==Le?Le:b.zK),$}))),fe.instanced&&_e&&(ce.attributes.add(X.r.INSTANCEMODELORIGINHI,"vec3"),ce.attributes.add(X.r.INSTANCEMODELORIGINLO,"vec3"),ce.attributes.add(X.r.INSTANCEMODEL,"mat3"),ce.attributes.add(X.r.INSTANCEMODELNORMAL,"mat3"));const ye=ce.vertex;_e&&(ye.include(N.u,fe),ye.uniforms.add(new oe.W("viewOriginHi",(Ve,Le)=>(0,ae.Zo)((0,D.s)(q,Le.camera.viewInverseTransposeMatrix[3],Le.camera.viewInverseTransposeMatrix[7],Le.camera.viewInverseTransposeMatrix[11]),q)),new oe.W("viewOriginLo",(Ve,Le)=>(0,ae.jA)((0,D.s)(q,Le.camera.viewInverseTransposeMatrix[3],Le.camera.viewInverseTransposeMatrix[7],Le.camera.viewInverseTransposeMatrix[11]),q)))),ye.code.add(he.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${te?_e?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":_e?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${_e?he.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),ye.code.add(he.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${te?_e?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":_e?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),fe.output===B.V.Normal&&((0,I.S7)(ye),ye.code.add(he.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${te?_e?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":_e?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),fe.hasVertexTangents&&ye.code.add(he.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${te?_e?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":_e?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const q=(0,x.vt)()},34416:(Ae,Y,_)=>{_.d(Y,{W:()=>D,Y:()=>b});var D,x,A=_(69690),y=_(93093),R=_(40972);function b(x,B){switch(B.normalType){case D.Compressed:x.attributes.add(R.r.NORMALCOMPRESSED,"vec2"),x.vertex.code.add(y.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case D.Attribute:x.attributes.add(R.r.NORMAL,"vec3"),x.vertex.code.add(y.H`vec3 normalModel() {
return normal;
}`);break;case D.ScreenDerivative:x.fragment.code.add(y.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,A.Xb)(B.normalType);case D.COUNT:case D.Ground:}}(x=D||(D={}))[x.Attribute=0]="Attribute",x[x.Compressed=1]="Compressed",x[x.Ground=2]="Ground",x[x.ScreenDerivative=3]="ScreenDerivative",x[x.COUNT=4]="COUNT"},79052:(Ae,Y,_)=>{_.d(Y,{I:()=>R});var A=_(93093),y=_(40972);function R(b){b.attributes.add(y.r.POSITION,"vec3"),b.vertex.code.add(A.H`vec3 positionModel() { return position; }`)}},49378:(Ae,Y,_)=>{_.d(Y,{K:()=>B});var A=_(10136),y=_(93093);function R(N){N.vertex.code.add(y.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${y.H.int(A.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${y.H.int(A.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${y.H.int(A.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${y.H.int(A.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var b=_(41204),D=_(40972),x=_(94417);function B(N,I){I.hasSymbolColors?(N.include(R),N.attributes.add(D.r.SYMBOLCOLOR,"vec4"),N.varyings.add("colorMixMode","mediump float"),N.vertex.code.add(y.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(N.fragment.uniforms.add(new b.c("colorMixMode",oe=>x.Um[oe.colorMixMode])),N.vertex.code.add(y.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},66874:(Ae,Y,_)=>{_.d(Y,{U:()=>D,q:()=>b});var b,x,A=_(69690),y=_(93093),R=_(40972);function D(x,B){switch(B.textureCoordinateType){case b.Default:return x.attributes.add(R.r.UV0,"vec2"),x.varyings.add("vuv0","vec2"),void x.vertex.code.add(y.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case b.Compressed:return x.attributes.add(R.r.UV0,"vec2"),x.varyings.add("vuv0","vec2"),void x.vertex.code.add(y.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case b.Atlas:return x.attributes.add(R.r.UV0,"vec2"),x.varyings.add("vuv0","vec2"),x.attributes.add(R.r.UVREGION,"vec4"),x.varyings.add("vuvRegion","vec4"),void x.vertex.code.add(y.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,A.Xb)(B.textureCoordinateType);case b.None:return void x.vertex.code.add(y.H`void forwardTextureCoordinates() {}`);case b.COUNT:return}}(x=b||(b={}))[x.None=0]="None",x[x.Default=1]="Default",x[x.Atlas=2]="Atlas",x[x.Compressed=3]="Compressed",x[x.COUNT=4]="COUNT"},23388:(Ae,Y,_)=>{_.d(Y,{c:()=>R});var A=_(93093),y=_(40972);function R(b,D){D.hasVertexColors?(b.attributes.add(y.r.COLOR,"vec4"),b.varyings.add("vColor","vec4"),b.vertex.code.add(A.H`void forwardVertexColor() { vColor = color; }`),b.vertex.code.add(A.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):b.vertex.code.add(A.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},17304:(Ae,Y,_)=>{_.d(Y,{Mh:()=>I,Zo:()=>oe,gy:()=>he});var A=_(69690),y=_(32954),R=_(89141),b=_(34416),D=_(83224),x=_(93093),B=_(14705),N=_(33724);function I(G,C){switch(C.normalType){case b.W.Attribute:case b.W.Compressed:G.include(b.Y,C),G.varyings.add("vNormalWorld","vec3"),G.varyings.add("vNormalView","vec3"),G.vertex.uniforms.add(new B.h("transformNormalGlobalFromModel",w=>w.transformNormalGlobalFromModel),new N.k("transformNormalViewFromGlobal",w=>w.transformNormalViewFromGlobal)),G.vertex.code.add(x.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case b.W.Ground:G.include(D.em,C),G.varyings.add("vNormalWorld","vec3"),G.vertex.code.add(x.H`
        void forwardNormal() {
          vNormalWorld = ${C.spherical?x.H`normalize(vPositionWorldCameraRelative);`:x.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case b.W.ScreenDerivative:G.vertex.code.add(x.H`void forwardNormal() {}`);break;default:(0,A.Xb)(C.normalType);case b.W.COUNT:}}class oe extends D.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,y.vt)()}}class he extends D.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,y.vt)(),this.toMapSpace=(0,R.vt)()}}},83224:(Ae,Y,_)=>{_.d(Y,{EM:()=>w,dO:()=>C,em:()=>G});var A=_(32954),y=_(62789),R=_(25866),b=_(79052),D=_(28825),x=_(41030),B=_(88791),N=_(93093),I=_(14705),oe=_(33724),he=_(57887);function G(X,ae){X.include(b.I);const ie=X.vertex;ie.include(D.u,ae),X.varyings.add("vPositionWorldCameraRelative","vec3"),X.varyings.add("vPosition_view","vec3"),ie.uniforms.add(new B.t("transformWorldFromViewTH",K=>K.transformWorldFromViewTH),new B.t("transformWorldFromViewTL",K=>K.transformWorldFromViewTL),new oe.k("transformViewFromCameraRelativeRS",K=>K.transformViewFromCameraRelativeRS),new he.X("transformProjFromView",K=>K.transformProjFromView),new I.h("transformWorldFromModelRS",K=>K.transformWorldFromModelRS),new x.W("transformWorldFromModelTH",K=>K.transformWorldFromModelTH),new x.W("transformWorldFromModelTL",K=>K.transformWorldFromModelTL)),ie.code.add(N.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),ie.code.add(N.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${ae.spherical?N.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:N.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),X.fragment.uniforms.add(new B.t("transformWorldFromViewTL",K=>K.transformWorldFromViewTL)),ie.code.add(N.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),X.fragment.code.add(N.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class C extends N.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,R.vt)(),this.transformWorldFromViewTL=(0,R.vt)(),this.transformViewFromCameraRelativeRS=(0,A.vt)(),this.transformProjFromView=(0,y.vt)()}}class w extends N.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,A.vt)(),this.transformWorldFromModelTH=(0,R.vt)(),this.transformWorldFromModelTL=(0,R.vt)()}}},10728:(Ae,Y,_)=>{_.d(Y,{r:()=>D});var A=_(69690),y=_(66874),R=_(93093);function b(x){x.fragment.code.add(R.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function D(x,B){switch(x.include(y.U,B),B.textureCoordinateType){case y.q.Default:case y.q.Compressed:return void x.fragment.code.add(R.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case y.q.Atlas:return x.include(b),void x.fragment.code.add(R.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,A.Xb)(B.textureCoordinateType);case y.q.None:case y.q.COUNT:return}}},81077:(Ae,Y,_)=>{_.d(Y,{G:()=>w});var A=_(53781),y=_(89141),R=_(28714),b=_(25866),D=_(88791),x=_(93093);function B(ie){ie.vertex.code.add(x.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),ie.vertex.code.add(x.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),ie.vertex.code.add(x.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),ie.vertex.code.add(x.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),ie.vertex.code.add(x.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),ie.vertex.code.add(x.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const he=(0,b.vt)();var G=_(3906),C=_(18356);function w(ie,K){const $=ie.vertex;K.hasVerticalOffset?(function ae(ie){ie.uniforms.add(new C.E("verticalOffset",(K,$)=>{const{minWorldLength:se,maxWorldLength:q,screenLength:ce}=K.verticalOffset,fe=Math.tan(.5*$.camera.fovY)/(.5*$.camera.fullViewport[3]);return(0,A.s)(X,ce*($.camera.pixelRatio||1),fe,se,q)}))}($),K.hasScreenSizePerspective&&(ie.include(B),function I(ie){ie.uniforms.add(new D.t("screenSizePerspectiveAlignment",K=>function oe(ie){return(0,R.s)(he,ie.parameters.divisor,ie.parameters.offset,ie.minScaleFactor)}(K.screenSizePerspectiveAlignment||K.screenSizePerspective)))}($),(0,G.yu)(ie.vertex,K)),$.code.add(x.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${K.spherical?x.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:x.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${K.hasScreenSizePerspective?x.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:x.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):$.code.add(x.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const X=(0,y.vt)()},27961:(Ae,Y,_)=>{_.d(Y,{E:()=>fe});var A=_(18238),y=_(74567),R=_(29359),b=_(93877),D=_(34416),x=_(93093),B=_(40972);function N(te,_e){const ye=_e.output===y.V.ObjectAndLayerIdColor,Ve=_e.objectAndLayerIdColorInstanced;ye&&(te.varyings.add("objectAndLayerIdColorVarying","vec4"),te.attributes.add(Ve?B.r.INSTANCEOBJECTANDLAYERIDCOLOR:B.r.OBJECTANDLAYERIDCOLOR,"vec4")),te.vertex.code.add(x.H`
     void forwardObjectAndLayerIdColor() {
      ${ye?Ve?x.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:x.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:x.H``} }`),te.fragment.code.add(x.H`
      void outputObjectAndLayerIdColor() {
        ${ye?x.H`fragColor = objectAndLayerIdColorVarying;`:x.H``} }`)}var I=_(66874),oe=_(17304),he=_(91322),G=_(35955);function C(te,_e){switch(_e.output){case y.V.Shadow:case y.V.ShadowHighlight:case y.V.ShadowExcludeHighlight:te.fragment.include(he.U),te.fragment.code.add(x.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case y.V.LinearDepth:te.fragment.include(G.W),te.fragment.code.add(x.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var w=_(89141),X=_(35089);const ae=(0,w.fA)(1,1,0,1),ie=(0,w.fA)(1,0,1,1);function K(te){te.fragment.uniforms.add(new X.N("depthTexture",(_e,ye)=>ye.mainDepth)),te.fragment.constants.add("occludedHighlightFlag","vec4",ae).add("unoccludedHighlightFlag","vec4",ie),te.fragment.code.add(x.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var $=_(98541),se=_(79110),q=_(3906),ce=_(67496);function fe(te,_e){const{vertex:ye,fragment:Ve}=te,Le=_e.hasColorTexture&&_e.alphaDiscardMode!==ce.sf.Opaque;switch(_e.output){case y.V.LinearDepth:case y.V.Shadow:case y.V.ShadowHighlight:case y.V.ShadowExcludeHighlight:case y.V.ObjectAndLayerIdColor:(0,q.NB)(ye,_e),te.include(b.d,_e),te.include(I.U,_e),te.include($.A,_e),te.include(C,_e),te.include(R.HQ,_e),te.include(N,_e),(0,A.xJ)(te),te.varyings.add("depth","float"),Le&&Ve.uniforms.add(new X.N("tex",Se=>Se.texture)),ye.code.add(x.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),te.include(se.S,_e),Ve.code.add(x.H`
          void main(void) {
            discardBySlice(vpos);
            ${Le?x.H`
                    vec4 texColor = texture(tex, ${_e.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${_e.output===y.V.ObjectAndLayerIdColor?x.H`outputObjectAndLayerIdColor();`:x.H`outputDepth(depth);`}
          }
        `);break;case y.V.Normal:(0,q.NB)(ye,_e),te.include(b.d,_e),te.include(D.Y,_e),te.include(oe.Mh,_e),te.include(I.U,_e),te.include($.A,_e),Le&&Ve.uniforms.add(new X.N("tex",at=>at.texture)),_e.normalType===D.W.ScreenDerivative&&te.varyings.add("vPositionView","vec3"),ye.code.add(x.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${_e.normalType===D.W.Attribute||_e.normalType===D.W.Compressed?x.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:x.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),te.include(R.HQ,_e),te.include(se.S,_e),Ve.code.add(x.H`
          void main() {
            discardBySlice(vpos);
            ${Le?x.H`
                    vec4 texColor = texture(tex, ${_e.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${_e.normalType===D.W.ScreenDerivative?x.H`vec3 normal = screenDerivativeNormal(vPositionView);`:x.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break;case y.V.Highlight:(0,q.NB)(ye,_e),te.include(b.d,_e),te.include(I.U,_e),te.include($.A,_e),Le&&Ve.uniforms.add(new X.N("tex",Se=>Se.texture)),ye.code.add(x.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),te.include(R.HQ,_e),te.include(se.S,_e),te.include(K,_e),Ve.code.add(x.H`
          void main() {
            discardBySlice(vpos);
            ${Le?x.H`
                    vec4 texColor = texture(tex, ${_e.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},85340:(Ae,Y,_)=>{_.d(Y,{D:()=>R,E:()=>b});var A=_(35955),y=_(93093);function R(D){D.include(A.W),D.code.add(y.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function b(D){D.code.add(y.H`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}},28799:(Ae,Y,_)=>{_.d(Y,{W:()=>C});var A=_(32954),y=_(45475),R=_(66874),b=_(10728),D=_(6698),x=_(99286),B=_(93093),N=_(33724),I=_(91784),oe=_(35089),he=_(20951),G=_(40972);function C(w,X){const ae=w.fragment;X.hasVertexTangents?(w.attributes.add(G.r.TANGENT,"vec4"),w.varyings.add("vTangent","vec4"),ae.code.add(X.doubleSidedMode===D.W.WindingOrder?B.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:B.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):ae.code.add(B.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),X.textureCoordinateType!==R.q.None&&(w.include(b.r,X),ae.uniforms.add(X.pbrTextureBindType===he.c.Pass?new oe.N("normalTexture",ie=>ie.textureNormal):new I.o("normalTexture",ie=>ie.textureNormal)),X.hasNormalTextureTransform&&(ae.uniforms.add(new x.G("scale",ie=>{var K;return null!==(K=ie.scale)&&void 0!==K?K:y.Un})),ae.uniforms.add(new N.k("normalTextureTransformMatrix",ie=>{var K;return null!==(K=ie.normalTextureTransformMatrix)&&void 0!==K?K:A.zK}))),ae.code.add(B.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),X.hasNormalTextureTransform&&ae.code.add(B.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),ae.code.add(B.H`return tangentSpace * rawNormal;
}`))}},35670:(Ae,Y,_)=>{_.d(Y,{n:()=>mt});var w,X,xe,A=_(93093),y=_(35089),R=_(8189),b=_(69287),D=_(11432),x=_(48900),B=_(82595),N=_(85211),G=(_(3248),_(35150),_(40707),_(76576)),C=_(83953);(xe=w||(w={}))[xe.RED=0]="RED",xe[xe.RG=1]="RG",xe[xe.RGBA4=2]="RGBA4",xe[xe.RGBA=3]="RGBA",xe[xe.RGBA_MIPMAP=4]="RGBA_MIPMAP",xe[xe.R16F=5]="R16F",xe[xe.RGBA16F=6]="RGBA16F",function(xe){xe[xe.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",xe[xe.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(X||(X={}));var K=_(98877),$=_(74567);const se={required:[]},te={required:[$.V.Depth,$.V.Normal]};class _e extends K.A{consumes(){return se}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(ze){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(ze){return!1}}class ye extends _e{}var we=_(11556),lt=_(66307),st=_(14253),Te=_(50758),Me=_(84254),We=_(41396);class $e extends lt.w{initializeProgram(ze){return new Te.B(ze.rctx,$e.shader.get().build(),st.D)}initializePipeline(){return(0,We.Ey)({colorWrite:We.wE})}}$e.shader=new we.$(Me.S,()=>_.e(7496).then(_.bind(_,77496)));var De=_(45475);class tt extends A.Y{constructor(){super(...arguments),this.projScale=1}}class ee extends tt{constructor(){super(...arguments),this.intensity=1}}class re extends A.Y{}class le extends re{constructor(){super(...arguments),this.blurSize=(0,De.vt)()}}var S,ve=_(30493);class Ee extends lt.w{initializeProgram(ze){return new Te.B(ze.rctx,Ee.shader.get().build(),st.D)}initializePipeline(){return(0,We.Ey)({colorWrite:We.wE})}}Ee.shader=new we.$(ve.S,()=>_.e(2863).then(_.bind(_,42863))),_(40830),function(xe){xe[xe.Antialiasing=0]="Antialiasing",xe[xe.HighQualityTransparency=1]="HighQualityTransparency",xe[xe.HighResolutionVoxel=2]="HighResolutionVoxel",xe[xe.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",xe[xe.SSAO=4]="SSAO",xe[xe.WaterReflection=5]="WaterReflection",xe[xe.HighResolutionShadows=6]="HighResolutionShadows",xe[xe.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(S||(S={}));var Z=_(55128),Q=_(50915),J=_(26136),Oe=_(4931);const Ie=2;let Ue=class extends ye{constructor(xe){super(xe),this._context=null,this._passParameters=new ee,this._drawParameters=new le,this.produces=new Map([[Z.N.SSAO,()=>this._produces()]])}_getCameraElevation(){var xe,ze;return null!==(xe=null===(ze=this._context)||void 0===ze?void 0:ze.renderContext.bindParameters.camera.relativeElevation)&&void 0!==xe?xe:1/0}_produces(){return null!=this._enableTime&&null!=this._context&&this._getCameraElevation()<5e5}consumes(){return this._produces()?te:se}initializeRenderContext(xe){this._context=xe,this.addHandles([(0,x.wB)(()=>{var ze;return this.view.qualitySettings.ambientOcclusion||(null===(ze=this._context)||void 0===ze?void 0:ze.isFeatureEnabled(S.SSAO))},ze=>ze?this._enable():this._disable(),x.pc)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,D.WD)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){var xe;if(null!=this._enableTime||!this._context)return;const ze=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),ct=>ct.charCodeAt(0)),je=new Oe.R;je.wrapMode=Q.pF.CLAMP_TO_EDGE,je.pixelFormat=Q.Ab.RGB,je.wrapMode=Q.pF.REPEAT,je.hasMipmap=!0,je.width=32,je.height=32,this._passParameters.noiseTexture=new J.g(this._context.renderContext.rctx,je,ze),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ee)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire($e)),this._enableTime=(0,B.l5)(0),null===(xe=this._context)||void 0===xe||xe.requestRender()}renderNode(xe,ze,je){const ct=xe.bindParameters,ot=null==je?void 0:je.get("normals"),it=null==ot?void 0:ot.getTexture(),ft=null==ot?void 0:ot.getTexture(Q.nI);if(null==this._enableTime||null==this._context||!it||!ft)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=xe.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=xe.time);const Xe=xe.rctx,U=ct.camera,j=this.view.qualitySettings.fadeDuration,me=(0,b.qE)((5e5-U.relativeElevation)/2e5,0,1),k=j>0?Math.min(j,xe.time-this._enableTime)/j:1,Ce=k*me;this._passParameters.normalTexture=it,this._passParameters.depthTexture=ft,this._passParameters.projScale=1/U.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*ut/(0,ve.g)(U)**6*Ce;const ke=U.fullViewport[2],ht=U.fullViewport[3],Ot=Math.round(ke/Ie),St=Math.round(ht/Ie),Rt=this._context.fbos,bt=Rt.acquire(ke,ht,"ssao input",w.RG);Xe.unbindTexture(bt.fbo.colorTexture),Xe.bindFramebuffer(bt.fbo),Xe.setViewport(0,0,ke,ht),Xe.bindTechnique(this._ssaoTechnique,ct,this._passParameters,this._drawParameters),Xe.screen.draw();const Lt=Rt.acquire(Ot,St,"ssao blur",w.RED);Xe.unbindTexture(Lt.fbo.colorTexture),Xe.bindFramebuffer(Lt.fbo),this._drawParameters.colorTexture=bt.getTexture(),(0,C.hZ)(this._drawParameters.blurSize,0,Ie/ht),Xe.bindTechnique(this._blurTechnique,ct,this._passParameters,this._drawParameters),Xe.setViewport(0,0,Ot,St),Xe.screen.draw(),bt.release();const wt=Rt.acquire(Ot,St,"ssao",w.RED);return Xe.unbindTexture(wt.fbo.colorTexture),Xe.bindFramebuffer(wt.fbo),Xe.setViewport(0,0,ke,ht),Xe.setClearColor(1,1,1,0),Xe.clear(Q.hn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=Lt.getTexture(),(0,C.hZ)(this._drawParameters.blurSize,Ie/ke,0),Xe.bindTechnique(this._blurTechnique,ct,this._passParameters,this._drawParameters),Xe.setViewport(0,0,Ot,St),Xe.screen.draw(),Xe.setViewport4fv(U.fullViewport),Lt.release(),k<1&&this._context.requestRender(),wt}};(0,R._)([(0,N.MZ)({constructOnly:!0})],Ue.prototype,"view",void 0),(0,R._)([(0,N.MZ)()],Ue.prototype,"_context",void 0),Ue=(0,R._)([(0,G.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Ue);const ut=.5;function mt(xe,ze){const je=xe.fragment;ze.receiveAmbientOcclusion?(je.uniforms.add(new y.N("ssaoTex",(ct,ot)=>{var it;return null===(it=ot.ssao)||void 0===it?void 0:it.getTexture()})),je.constants.add("blurSizePixelsInverse","float",1/Ie),je.code.add(A.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):je.code.add(A.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},62770:(Ae,Y,_)=>{_.d(Y,{kA:()=>Ee,a8:()=>le,eU:()=>ve});var A=_(69690),y=_(28714),R=_(25866),b=_(53781),D=_(89141),x=_(9933),B=_(88791),N=_(18356),I=_(93093);function oe(ge,S){const V=ge.fragment,Z=void 0!==S.lightingSphericalHarmonicsOrder?S.lightingSphericalHarmonicsOrder:2;0===Z?(V.uniforms.add(new B.t("lightingAmbientSH0",(Q,J)=>(0,y.s)(he,J.lighting.sh.r[0],J.lighting.sh.g[0],J.lighting.sh.b[0]))),V.code.add(I.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===Z?(V.uniforms.add(new N.E("lightingAmbientSH_R",(Q,J)=>(0,b.s)(G,J.lighting.sh.r[0],J.lighting.sh.r[1],J.lighting.sh.r[2],J.lighting.sh.r[3])),new N.E("lightingAmbientSH_G",(Q,J)=>(0,b.s)(G,J.lighting.sh.g[0],J.lighting.sh.g[1],J.lighting.sh.g[2],J.lighting.sh.g[3])),new N.E("lightingAmbientSH_B",(Q,J)=>(0,b.s)(G,J.lighting.sh.b[0],J.lighting.sh.b[1],J.lighting.sh.b[2],J.lighting.sh.b[3]))),V.code.add(I.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===Z&&(V.uniforms.add(new B.t("lightingAmbientSH0",(Q,J)=>(0,y.s)(he,J.lighting.sh.r[0],J.lighting.sh.g[0],J.lighting.sh.b[0])),new N.E("lightingAmbientSH_R1",(Q,J)=>(0,b.s)(G,J.lighting.sh.r[1],J.lighting.sh.r[2],J.lighting.sh.r[3],J.lighting.sh.r[4])),new N.E("lightingAmbientSH_G1",(Q,J)=>(0,b.s)(G,J.lighting.sh.g[1],J.lighting.sh.g[2],J.lighting.sh.g[3],J.lighting.sh.g[4])),new N.E("lightingAmbientSH_B1",(Q,J)=>(0,b.s)(G,J.lighting.sh.b[1],J.lighting.sh.b[2],J.lighting.sh.b[3],J.lighting.sh.b[4])),new N.E("lightingAmbientSH_R2",(Q,J)=>(0,b.s)(G,J.lighting.sh.r[5],J.lighting.sh.r[6],J.lighting.sh.r[7],J.lighting.sh.r[8])),new N.E("lightingAmbientSH_G2",(Q,J)=>(0,b.s)(G,J.lighting.sh.g[5],J.lighting.sh.g[6],J.lighting.sh.g[7],J.lighting.sh.g[8])),new N.E("lightingAmbientSH_B2",(Q,J)=>(0,b.s)(G,J.lighting.sh.b[5],J.lighting.sh.b[6],J.lighting.sh.b[7],J.lighting.sh.b[8]))),V.code.add(I.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),S.pbrMode!==x.A9.Normal&&S.pbrMode!==x.A9.Schematic||V.code.add(I.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const he=(0,R.vt)(),G=(0,D.vt)();var C=_(35670),w=_(44987),X=_(87522),ae=_(64570),ie=_(35589),K=_(20951);class $ extends ie.n{constructor(S,V){super(S,"bool",K.c.Pass,(Z,Q,J)=>Z.setUniform1b(S,V(Q,J)))}}var se=_(65840);_(69287),(0,R.vt)();const tt=.4;function le(ge){ge.constants.add("ambientBoostFactor","float",tt)}function ve(ge){ge.uniforms.add(new se.m("lightingGlobalFactor",(S,V)=>V.lighting.globalFactor))}function Ee(ge,S){const V=ge.fragment;switch(ge.include(C.n,S),S.pbrMode!==x.A9.Disabled&&ge.include(X.c,S),ge.include(oe,S),ge.include(ae.p),V.code.add(I.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${S.pbrMode===x.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),le(V),ve(V),(0,w.Gc)(V),V.code.add(I.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${S.spherical?I.H`normalize(vPosWorld)`:I.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,w.O4)(V),V.code.add(I.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),S.pbrMode){case x.A9.Disabled:case x.A9.WaterOnIntegratedMesh:case x.A9.Water:ge.include(w.qU),V.code.add(I.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case x.A9.Normal:case x.A9.Schematic:V.code.add(I.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),V.code.add(I.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),S.useFillLights?V.uniforms.add(new $("hasFillLights",(Z,Q)=>Q.enableFillLights)):V.constants.add("hasFillLights","bool",!1),V.code.add(I.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),V.uniforms.add(new se.m("lightingSpecularStrength",(Z,Q)=>Q.lighting.mainLight.specularStrength),new se.m("lightingEnvironmentStrength",(Z,Q)=>Q.lighting.mainLight.environmentStrength)),V.code.add(I.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),V.code.add(I.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${S.pbrMode!==x.A9.Schematic||S.hasColorTexture?I.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:I.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case x.A9.Simplified:case x.A9.TerrainWithWater:ge.include(w.qU),V.code.add(I.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,A.Xb)(S.pbrMode);case x.A9.COUNT:}}(0,R.vt)()},44987:(Ae,Y,_)=>{_.d(Y,{Gc:()=>R,O4:()=>b,qU:()=>D});var A=_(88791),y=_(93093);function R(x){x.uniforms.add(new A.t("mainLightDirection",(B,N)=>N.lighting.mainLight.direction))}function b(x){x.uniforms.add(new A.t("mainLightIntensity",(B,N)=>N.lighting.mainLight.intensity))}function D(x){R(x.fragment),b(x.fragment),x.fragment.code.add(y.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},94031:(Ae,Y,_)=>{_.d(Y,{Q:()=>D});var A=_(85340),y=_(99286),R=_(93093),b=_(35089);function D(B,N){if(!N.multipassEnabled)return;B.fragment.include(A.D),B.fragment.uniforms.add(new b.N("terrainDepthTexture",(oe,he)=>{var G;return null===(G=he.multipassTerrain.linearDepth)||void 0===G?void 0:G.getTexture()}),new y.G("nearFar",(oe,he)=>he.camera.nearFar));const I=N.occlusionPass;B.fragment.code.add(R.H`
   ${I?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${I?R.H`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:R.H`
          if(fragmentDepth ${N.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},6698:(Ae,Y,_)=>{_.d(Y,{W:()=>b,r:()=>R});var b,D,A=_(69690),y=_(93093);function R(D,x){const B=D.fragment;switch(B.code.add(y.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),x.doubleSidedMode){case b.None:B.code.add(y.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case b.View:B.code.add(y.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case b.WindingOrder:B.code.add(y.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,A.Xb)(x.doubleSidedMode);case b.COUNT:}}(D=b||(b={}))[D.None=0]="None",D[D.View=1]="View",D[D.WindingOrder=2]="WindingOrder",D[D.COUNT=3]="COUNT"},87522:(Ae,Y,_)=>{_.d(Y,{c:()=>D});var A=_(93093);function y(B){const N=B.fragment.code;N.add(A.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),N.add(A.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),N.add(A.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var R=_(9933),b=_(64570);function D(B,N){const I=B.fragment.code;B.include(b.p),N.pbrMode!==R.A9.Normal&&N.pbrMode!==R.A9.Schematic&&N.pbrMode!==R.A9.Simplified&&N.pbrMode!==R.A9.TerrainWithWater||(I.add(A.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),I.add(A.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),N.pbrMode!==R.A9.Normal&&N.pbrMode!==R.A9.Schematic||(B.include(y),I.add(A.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),I.add(A.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),I.add(A.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),I.add(A.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},9933:(Ae,Y,_)=>{_.d(Y,{A9:()=>I,_Z:()=>he});var I,G,A=_(10728),y=_(41030),R=_(88791),b=_(93093),D=_(91784),x=_(35089),B=_(20951);function he(G,C){const w=G.fragment;if(C.pbrMode===I.Normal&&(C.hasMetallicRoughnessTexture||C.hasEmissionTexture||C.hasOcclusionTexture)&&G.include(A.r,C),C.pbrMode!==I.Schematic)if(C.pbrMode!==I.Disabled){if(C.pbrMode===I.Normal){w.code.add(b.H`vec3 mrr;
vec3 emission;
float occlusion;`);const ae=C.pbrTextureBindType;C.hasMetallicRoughnessTexture&&(w.uniforms.add(ae===B.c.Pass?new x.N("texMetallicRoughness",ie=>ie.textureMetallicRoughness):new D.o("texMetallicRoughness",ie=>ie.textureMetallicRoughness)),w.code.add(b.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),C.hasEmissionTexture&&(w.uniforms.add(ae===B.c.Pass?new x.N("texEmission",ie=>ie.textureEmissive):new D.o("texEmission",ie=>ie.textureEmissive)),w.code.add(b.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),C.hasOcclusionTexture?(w.uniforms.add(ae===B.c.Pass?new x.N("texOcclusion",ie=>ie.textureOcclusion):new D.o("texOcclusion",ie=>ie.textureOcclusion)),w.code.add(b.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):w.code.add(b.H`float getBakedOcclusion() { return 1.0; }`),ae===B.c.Pass?w.uniforms.add(new R.t("emissionFactor",ie=>ie.emissiveFactor),new R.t("mrrFactors",ie=>ie.mrrFactors)):w.uniforms.add(new y.W("emissionFactor",ie=>ie.emissiveFactor),new y.W("mrrFactors",ie=>ie.mrrFactors)),w.code.add(b.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${C.hasMetallicRoughnessTexture?b.H`applyMetallnessAndRoughness(${C.hasMetallicRoughnessTextureTransform?b.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${C.hasEmissionTexture?b.H`applyEmission(${C.hasEmissiveTextureTransform?b.H`emissiveUV`:"vuv0"});`:""}

      ${C.hasOcclusionTexture?b.H`applyOcclusion(${C.hasOcclusionTextureTransform?b.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else w.code.add(b.H`float getBakedOcclusion() { return 1.0; }`);else w.code.add(b.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}_(2284),(G=I||(I={}))[G.Disabled=0]="Disabled",G[G.Normal=1]="Normal",G[G.Schematic=2]="Schematic",G[G.Water=3]="Water",G[G.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",G[G.Simplified=5]="Simplified",G[G.TerrainWithWater=6]="TerrainWithWater",G[G.COUNT=7]="COUNT"},64570:(Ae,Y,_)=>{_.d(Y,{p:()=>y});var A=_(93093);function y(R){R.vertex.code.add(A.H`const float PI = 3.141592653589793;`),R.fragment.code.add(A.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},55189:(Ae,Y,_)=>{_.d(Y,{Bz:()=>ie,G:()=>ae}),_(62789),_(25866);var R=_(91322),b=_(18356),D=_(41204),x=_(93093),B=_(35589),N=_(20951);class I extends B.n{constructor(se,q,ce){super(se,"mat4",N.c.Draw,(fe,te,_e,ye)=>fe.setUniformMatrix4fv(se,q(te,_e,ye)),ce)}}class oe extends B.n{constructor(se,q,ce){super(se,"mat4",N.c.Pass,(fe,te,_e)=>fe.setUniformMatrix4fv(se,q(te,_e)),ce)}}var he=_(35089);function ae($,se){se.receiveShadows&&($.fragment.uniforms.add(new oe("shadowMapMatrix",(q,ce)=>ce.shadowMap.getShadowMapMatrices(q.origin),4)),K($))}function ie($,se){se.receiveShadows&&($.fragment.uniforms.add(new I("shadowMapMatrix",(q,ce)=>ce.shadowMap.getShadowMapMatrices(q.origin),4)),K($))}function K($){const se=$.fragment;se.include(R.U),se.uniforms.add(new he.N("shadowMap",(q,ce)=>ce.shadowMap.depthTexture),new D.c("numCascades",(q,ce)=>ce.shadowMap.numCascades),new b.E("cascadeDistances",(q,ce)=>ce.shadowMap.cascadeDistances)),se.code.add(x.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}},41377:(Ae,Y,_)=>{_.d(Y,{MU:()=>B,O1:()=>N,QM:()=>I,Sx:()=>x,q2:()=>D});var A=_(32954),y=_(66874),R=_(93093),b=_(33724);function D(oe,he){he.hasColorTextureTransform?(oe.vertex.uniforms.add(new b.k("colorTextureTransformMatrix",G=>{var C;return null!==(C=G.colorTextureTransformMatrix)&&void 0!==C?C:A.zK})),oe.varyings.add("colorUV","vec2"),oe.vertex.code.add(R.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):oe.vertex.code.add(R.H`void forwardColorUV(){}`)}function x(oe,he){he.hasNormalTextureTransform&&he.textureCoordinateType!==y.q.None?(oe.vertex.uniforms.add(new b.k("normalTextureTransformMatrix",G=>{var C;return null!==(C=G.normalTextureTransformMatrix)&&void 0!==C?C:A.zK})),oe.varyings.add("normalUV","vec2"),oe.vertex.code.add(R.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):oe.vertex.code.add(R.H`void forwardNormalUV(){}`)}function B(oe,he){he.hasEmissionTextureTransform&&he.textureCoordinateType!==y.q.None?(oe.vertex.uniforms.add(new b.k("emissiveTextureTransformMatrix",G=>{var C;return null!==(C=G.emissiveTextureTransformMatrix)&&void 0!==C?C:A.zK})),oe.varyings.add("emissiveUV","vec2"),oe.vertex.code.add(R.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):oe.vertex.code.add(R.H`void forwardEmissiveUV(){}`)}function N(oe,he){he.hasOcclusionTextureTransform&&he.textureCoordinateType!==y.q.None?(oe.vertex.uniforms.add(new b.k("occlusionTextureTransformMatrix",G=>{var C;return null!==(C=G.occlusionTextureTransformMatrix)&&void 0!==C?C:A.zK})),oe.varyings.add("occlusionUV","vec2"),oe.vertex.code.add(R.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):oe.vertex.code.add(R.H`void forwardOcclusionUV(){}`)}function I(oe,he){he.hasMetallicRoughnessTextureTransform&&he.textureCoordinateType!==y.q.None?(oe.vertex.uniforms.add(new b.k("metallicRoughnessTextureTransformMatrix",G=>{var C;return null!==(C=G.metallicRoughnessTextureTransformMatrix)&&void 0!==C?C:A.zK})),oe.varyings.add("metallicRoughnessUV","vec2"),oe.vertex.code.add(R.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):oe.vertex.code.add(R.H`void forwardMetallicRoughnessUV(){}`)}},98541:(Ae,Y,_)=>{_.d(Y,{A:()=>Xe});var A=_(88791),y=_(35589),R=_(20951);class b extends y.n{constructor(j,ne,me){super(j,"vec4",R.c.Pass,(k,Ce,ke)=>k.setUniform4fv(j,ne(Ce,ke)),me)}}class D extends y.n{constructor(j,ne,me){super(j,"float",R.c.Pass,(k,Ce,ke)=>k.setUniform1fv(j,ne(Ce,ke)),me)}}var x=_(93093),B=_(33724),N=_(40972),w=(_(3248),_(69287),_(31610),_(32954),_(92771),_(62789)),ae=(_(28714),_(25866)),K=(_(48716),_(8189)),$=_(98877),se=_(85211),fe=(_(35150),_(40707),_(76576));let te=class extends $.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var ye,Ve,U;(0,K._)([(0,se.MZ)()],te.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"LABELS_SHOW_BORDER",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"TEXT_SHOW_BASELINE",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"TEXT_SHOW_BORDER",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"SHOW_POI",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,K._)([(0,se.MZ)()],te.prototype,"LINE_WIREFRAMES",void 0),te=(0,K._)([(0,fe.$)("esri.views.3d.support.DebugFlags")],te),new te,(U=ye||(ye={}))[U.Undefined=0]="Undefined",U[U.DefinedSize=1]="DefinedSize",U[U.DefinedScale=2]="DefinedScale",function(U){U[U.Undefined=0]="Undefined",U[U.DefinedAngle=1]="DefinedAngle"}(Ve||(Ve={})),(0,w.vt)(),(0,ae.vt)(),(0,w.vt)(),_(43087);const ft=8;function Xe(U,j){const{vertex:ne,attributes:me}=U;j.hasVvInstancing&&(j.vvSize||j.vvColor)&&me.add(N.r.INSTANCEFEATUREATTRIBUTE,"vec4"),j.vvSize?(ne.uniforms.add(new A.t("vvSizeMinSize",k=>k.vvSize.minSize)),ne.uniforms.add(new A.t("vvSizeMaxSize",k=>k.vvSize.maxSize)),ne.uniforms.add(new A.t("vvSizeOffset",k=>k.vvSize.offset)),ne.uniforms.add(new A.t("vvSizeFactor",k=>k.vvSize.factor)),ne.uniforms.add(new B.k("vvSymbolRotationMatrix",k=>k.vvSymbolRotationMatrix)),ne.uniforms.add(new A.t("vvSymbolAnchor",k=>k.vvSymbolAnchor)),ne.code.add(x.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),ne.code.add(x.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${j.hasVvInstancing?x.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):ne.code.add(x.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),j.vvColor?(ne.constants.add("vvColorNumber","int",ft),ne.uniforms.add(new D("vvColorValues",k=>k.vvColor.values,ft),new b("vvColorColors",k=>k.vvColor.colors,ft)),ne.code.add(x.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${j.hasVvInstancing?x.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):ne.code.add(x.H`vec4 vvColor() { return vec4(1.0); }`)}},21589:(Ae,Y,_)=>{_.d(Y,{H:()=>A,y:()=>y});const A=.1,y=.001},79110:(Ae,Y,_)=>{_.d(Y,{S:()=>I});var A=_(21589),y=_(93093);function R(G){G.fragment.code.add(y.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${y.H.float(A.y)}) { discard; } }
  `)}_(35589),_(20951);var B=_(65840),N=_(67496);function I(G,C){!function he(G,C,w){const X=G.fragment;switch(C.alphaDiscardMode!==N.sf.Mask&&C.alphaDiscardMode!==N.sf.MaskBlend||X.uniforms.add(w),C.alphaDiscardMode){case N.sf.Blend:return G.include(R);case N.sf.Opaque:X.code.add(y.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case N.sf.Mask:X.code.add(y.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case N.sf.MaskBlend:G.fragment.code.add(y.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(G,C,new B.m("textureAlphaCutoff",w=>w.textureAlphaCutoff))}},8733:(Ae,Y,_)=>{_.d(Y,{Ir:()=>N});var A=_(83953),y=_(45475),R=_(53781),b=_(89141),D=_(99286),x=_(18356),B=_(93093);function N(C){C.fragment.uniforms.add(new x.E("projInfo",(w,X)=>function I(C){const w=C.projectionMatrix;return 0===w[11]?(0,R.s)(oe,2/(C.fullWidth*w[0]),2/(C.fullHeight*w[5]),(1+w[12])/w[0],(1+w[13])/w[5]):(0,R.s)(oe,-2/(C.fullWidth*w[0]),-2/(C.fullHeight*w[5]),(1-w[8])/w[0],(1-w[9])/w[5])}(X.camera))),C.fragment.uniforms.add(new D.G("zScale",(w,X)=>function he(C){return 0===C.projectionMatrix[11]?(0,A.hZ)(G,0,1):(0,A.hZ)(G,1,0)}(X.camera))),C.fragment.code.add(B.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const oe=(0,b.vt)(),G=(0,y.vt)()},28825:(Ae,Y,_)=>{_.d(Y,{u:()=>y});var A=_(93093);function y({code:R},b){R.add(b.doublePrecisionRequiresObfuscation?A.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:A.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},19213:(Ae,Y,_)=>{_.d(Y,{N:()=>b});var A=_(10136),y=_(93093);function R(D){D.code.add(y.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function b(D){D.include(R),D.code.add(y.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${y.H.int(A.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${y.H.int(A.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${y.H.int(A.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${y.H.int(A.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${y.H.int(A.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},91322:(Ae,Y,_)=>{_.d(Y,{U:()=>y});var A=_(93093);function y(R){R.code.add(A.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},35955:(Ae,Y,_)=>{_.d(Y,{W:()=>y});var A=_(93093);function y(R){R.code.add(A.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},3906:(Ae,Y,_)=>{_.d(Y,{yu:()=>G,NB:()=>C,S7:()=>ae});var A=_(92771),y=_(62789),R=_(28714),b=_(25866),D=_(41030),x=_(88791),N=(_(65840),_(35589)),I=_(20951);class oe extends N.n{constructor($,se){super($,"mat4",I.c.Draw,(q,ce,fe)=>q.setUniformMatrix4fv($,se(ce,fe)))}}var he=_(57887);function G(K,$){$.instancedDoublePrecision?K.constants.add("cameraPosition","vec3",b.uY):K.uniforms.add(new D.W("cameraPosition",(se,q)=>(0,R.s)(X,q.camera.viewInverseTransposeMatrix[3]-se.origin[0],q.camera.viewInverseTransposeMatrix[7]-se.origin[1],q.camera.viewInverseTransposeMatrix[11]-se.origin[2])))}function C(K,$){if(!$.instancedDoublePrecision)return void K.uniforms.add(new he.X("proj",(q,ce)=>ce.camera.projectionMatrix),new oe("view",(q,ce)=>(0,A.Tl)(w,ce.camera.viewMatrix,q.origin)),new D.W("localOrigin",q=>q.origin));const se=q=>(0,R.s)(X,q.camera.viewInverseTransposeMatrix[3],q.camera.viewInverseTransposeMatrix[7],q.camera.viewInverseTransposeMatrix[11]);K.uniforms.add(new he.X("proj",(q,ce)=>ce.camera.projectionMatrix),new he.X("view",(q,ce)=>(0,A.Tl)(w,ce.camera.viewMatrix,se(ce))),new x.t("localOrigin",(q,ce)=>se(ce)))}const w=(0,y.vt)(),X=(0,b.vt)();function ae(K){K.uniforms.add(new he.X("viewNormal",($,se)=>se.camera.viewInverseTransposeMatrix))}},15683:(Ae,Y,_)=>{_.d(Y,{t:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"vec2",y.c.Draw,(B,N,I,oe)=>B.setUniform2fv(D,x(N,I,oe)))}}},99286:(Ae,Y,_)=>{_.d(Y,{G:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"vec2",y.c.Pass,(B,N,I)=>B.setUniform2fv(D,x(N,I)))}}},41030:(Ae,Y,_)=>{_.d(Y,{W:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"vec3",y.c.Draw,(B,N,I,oe)=>B.setUniform3fv(D,x(N,I,oe)))}}},88791:(Ae,Y,_)=>{_.d(Y,{t:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"vec3",y.c.Pass,(B,N,I)=>B.setUniform3fv(D,x(N,I)))}}},18356:(Ae,Y,_)=>{_.d(Y,{E:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"vec4",y.c.Pass,(B,N,I)=>B.setUniform4fv(D,x(N,I)))}}},65840:(Ae,Y,_)=>{_.d(Y,{m:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"float",y.c.Pass,(B,N,I)=>B.setUniform1f(D,x(N,I)))}}},41204:(Ae,Y,_)=>{_.d(Y,{c:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"int",y.c.Pass,(B,N,I)=>B.setUniform1i(D,x(N,I)))}}},14705:(Ae,Y,_)=>{_.d(Y,{h:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"mat3",y.c.Draw,(B,N,I)=>B.setUniformMatrix3fv(D,x(N,I)))}}},33724:(Ae,Y,_)=>{_.d(Y,{k:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"mat3",y.c.Pass,(B,N,I)=>B.setUniformMatrix3fv(D,x(N,I)))}}},57887:(Ae,Y,_)=>{_.d(Y,{X:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"mat4",y.c.Pass,(B,N,I)=>B.setUniformMatrix4fv(D,x(N,I)))}}},56857:(Ae,Y,_)=>{_.d(Y,{N5:()=>B});var A=_(5922),y=_(35150),R=_(20951),b=_(65388);const D=()=>y.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class x{constructor(){this._includedModules=new Map}include($,se){if(this._includedModules.has($)){const q=this._includedModules.get($);if(q!==se){D().error("Shader module included multiple times with different configuration.");const ce=new Set;for(const fe of Object.keys(q))q[fe]!==$[fe]&&ce.add(fe);for(const fe of Object.keys($))q[fe]!==$[fe]&&ce.add(fe);ce.forEach(fe=>console.error(`  ${fe}: current ${q[fe]} new ${$[fe]}`))}}else this._includedModules.set($,se),$(this.builder,se)}}class B extends x{constructor(){super(...arguments),this.vertex=new oe,this.fragment=new oe,this.attributes=new he,this.varyings=new G,this.extensions=new C,this.constants=new X,this.outputs=new w}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate($){const se=this.extensions.generateSource($),q=this.attributes.generateSource($),ce=this.varyings.generateSource($),fe="vertex"===$?this.vertex:this.fragment,te=fe.uniforms.generateSource(),_e=fe.code.generateSource(),ye="vertex"===$?ie:ae,Ve=this.constants.generateSource().concat(fe.constants.generateSource()),Le=this.outputs.generateSource($);return`#version 300 es\n${se.join("\n")}\n\n${ye}\n\n${Ve.join("\n")}\n\n${te.join("\n")}\n\n${q.join("\n")}\n\n${ce.join("\n")}\n\n${Le.join("\n")}\n\n${_e.join("\n")}`}generateBindPass($){const se=new Map;this.vertex.uniforms.entries.forEach(fe=>{const te=fe.bind[R.c.Pass];te&&se.set(fe.name,te)}),this.fragment.uniforms.entries.forEach(fe=>{const te=fe.bind[R.c.Pass];te&&se.set(fe.name,te)});const q=Array.from(se.values()),ce=q.length;return(fe,te)=>{for(let _e=0;_e<ce;++_e)q[_e]($,fe,te)}}generateBindDraw($){const se=new Map;this.vertex.uniforms.entries.forEach(fe=>{const te=fe.bind[R.c.Draw];te&&se.set(fe.name,te)}),this.fragment.uniforms.entries.forEach(fe=>{const te=fe.bind[R.c.Draw];te&&se.set(fe.name,te)});const q=Array.from(se.values()),ce=q.length;return(fe,te,_e)=>{for(let ye=0;ye<ce;++ye)q[ye]($,fe,te,_e)}}}class N{constructor(){this._entries=new Map}add(...$){for(const se of $)this._add(se)}get($){return this._entries.get($)}_add($){if(null!=$){if(this._entries.has($.name)&&!this._entries.get($.name).equals($))throw new A.A(`Duplicate uniform name ${$.name} for different uniform type`);this._entries.set($.name,$)}else D().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map($=>null!=$.arraySize?`uniform ${$.type} ${$.name}[${$.arraySize}];`:`uniform ${$.type} ${$.name};`)}get entries(){return Array.from(this._entries.values())}}class I{constructor(){this._entries=new Array}add($){this._entries.push($)}generateSource(){return this._entries}}class oe extends x{constructor(){super(...arguments),this.uniforms=new N,this.code=new I,this.constants=new X}get builder(){return this}}class he{constructor(){this._entries=new Array}add($,se){this._entries.push([$,se])}generateSource($){return"fragment"===$?[]:this._entries.map(se=>`in ${se[1]} ${se[0]};`)}}class G{constructor(){this._entries=new Map}add($,se){this._entries.has($)&&(0,b.vA)(this._entries.get($)===se),this._entries.set($,se)}generateSource($){const se=new Array;return this._entries.forEach((q,ce)=>se.push("vertex"===$?`out ${q} ${ce};`:`in ${q} ${ce};`)),se}}class C{constructor(){this._entries=new Set}add($){this._entries.add($)}generateSource($){const se="vertex"===$?C.ALLOWLIST_VERTEX:C.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(q=>se.includes(q)).map(q=>`#extension ${q} : enable`)}}C.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],C.ALLOWLIST_VERTEX=[];class w{constructor(){this._entries=new Map}add($,se,q=0){const ce=this._entries.get(q);ce?(0,b.vA)(ce.name===$&&ce.type===se,`Fragment shader output location ${q} occupied`):this._entries.set(q,{name:$,type:se})}generateSource($){if("vertex"===$)return[];0===this._entries.size&&this._entries.set(0,{name:w.DEFAULT_NAME,type:w.DEFAULT_TYPE});const se=new Array;return this._entries.forEach((q,ce)=>se.push(`layout(location = ${ce}) out ${q.type} ${q.name};`)),se}}w.DEFAULT_TYPE="vec4",w.DEFAULT_NAME="fragColor";class X{constructor(){this._entries=new Set}add($,se,q){let ce="ERROR_CONSTRUCTOR_STRING";switch(se){case"float":ce=X._numberToFloatStr(q);break;case"int":ce=X._numberToIntStr(q);break;case"bool":ce=q.toString();break;case"vec2":ce=`vec2(${X._numberToFloatStr(q[0])},                            ${X._numberToFloatStr(q[1])})`;break;case"vec3":ce=`vec3(${X._numberToFloatStr(q[0])},                            ${X._numberToFloatStr(q[1])},                            ${X._numberToFloatStr(q[2])})`;break;case"vec4":ce=`vec4(${X._numberToFloatStr(q[0])},                            ${X._numberToFloatStr(q[1])},                            ${X._numberToFloatStr(q[2])},                            ${X._numberToFloatStr(q[3])})`;break;case"ivec2":ce=`ivec2(${X._numberToIntStr(q[0])},                             ${X._numberToIntStr(q[1])})`;break;case"ivec3":ce=`ivec3(${X._numberToIntStr(q[0])},                             ${X._numberToIntStr(q[1])},                             ${X._numberToIntStr(q[2])})`;break;case"ivec4":ce=`ivec4(${X._numberToIntStr(q[0])},                             ${X._numberToIntStr(q[1])},                             ${X._numberToIntStr(q[2])},                             ${X._numberToIntStr(q[3])})`;break;case"mat2":case"mat3":case"mat4":ce=`${se}(${Array.prototype.map.call(q,fe=>X._numberToFloatStr(fe)).join(", ")})`}return this._entries.add(`const ${se} ${$} = ${ce};`),this}static _numberToIntStr($){return $.toFixed(0)}static _numberToFloatStr($){return Number.isInteger($)?$.toFixed(1):$.toString()}generateSource(){return Array.from(this._entries)}}const ae="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",ie="precision highp float;\nprecision highp sampler2D;"},91784:(Ae,Y,_)=>{_.d(Y,{o:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"sampler2D",y.c.Draw,(B,N,I)=>B.bindTexture(D,x(N,I)))}}},35089:(Ae,Y,_)=>{_.d(Y,{N:()=>R});var A=_(35589),y=_(20951);class R extends A.n{constructor(D,x){super(D,"sampler2D",y.c.Pass,(B,N,I)=>B.bindTexture(D,x(N,I)))}}},35589:(Ae,Y,_)=>{_.d(Y,{n:()=>y});var A=_(20951);class y{constructor(b,D,x,B,N=null){if(this.name=b,this.type=D,this.arraySize=N,this.bind={[A.c.Pass]:null,[A.c.Draw]:null},B)switch(x){case A.c.Pass:this.bind[A.c.Pass]=B;break;case A.c.Draw:this.bind[A.c.Draw]=B}}equals(b){return this.type===b.type&&this.name===b.name&&this.arraySize===b.arraySize}}},93093:(Ae,Y,_)=>{_.d(Y,{H:()=>R,Y:()=>y});const y=class A{};function R(b,...D){let x="";for(let B=0;B<D.length;B++)x+=b[B]+D[B];return x+=b[b.length-1],x}var b;(b=R||(R={})).int=function D(B){return Math.round(B).toString()},b.float=function x(B){return B.toPrecision(8)}},20951:(Ae,Y,_)=>{var A,y;_.d(Y,{c:()=>A}),(y=A||(A={}))[y.Pass=0]="Pass",y[y.Draw=1]="Draw"},11556:(Ae,Y,_)=>{_.d(Y,{$:()=>y});var A=_(10467);class y{constructor(b,D){this._module=b,this._loadModule=D}get(){return this._module}reload(){var b=this;return(0,A.A)(function*(){return b._module=yield b._loadModule(),b._module})()}}},66307:(Ae,Y,_)=>{_.d(Y,{w:()=>R});var A=_(11432),y=_(50915);class R{constructor(D,x,B){this.release=B,this.initializeConfiguration(D,x),this._configuration=x.snapshot(),this._program=this.initializeProgram(D),this._pipeline=this.initializePipeline(D)}destroy(){this._program=(0,A.WD)(this._program),this._pipeline=this._configuration=null}reload(D){(0,A.WD)(this._program),this._program=this.initializeProgram(D),this._pipeline=this.initializePipeline(D)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(D){this.program.assertCompatibleVertexAttributeLocations(D)}get primitiveType(){return y.WR.TRIANGLES}getPipeline(D,x,B){return this._pipeline}initializeConfiguration(D,x){}}},58041:(Ae,Y,_)=>{_.d(Y,{K:()=>y,W:()=>R});var A=_(93093);class y extends A.Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const D=this._parameterNames,x={key:this.key};for(const B of D)x[B]=this[B];return x}}function R(b={}){return(D,x)=>{var B;if(D._parameterNames=null!==(B=D._parameterNames)&&void 0!==B?B:[],D._parameterNames.push(x),null!=b.constValue)Object.defineProperty(D,x,{get:()=>b.constValue});else{var N;const I=D._parameterNames.length-1,he=Math.ceil(Math.log2(b.count||2)),G=null!==(N=D._parameterBits)&&void 0!==N?N:[0];let C=0;for(;G[C]+he>16;)C++,C>=G.length&&G.push(0);D._parameterBits=G;const w=G[C],X=(1<<he)-1<<w;G[C]+=he,Object.defineProperty(D,x,{get(){return this[I]},set(ae){if(this[I]!==ae&&(this[I]=ae,this._keyDirty=!0,this._parameterBits[C]=this._parameterBits[C]&~X|+ae<<w&X,"number"!=typeof ae&&"boolean"!=typeof ae))throw new Error("Configuration value for "+x+" must be boolean or number, got "+typeof ae)}})}}}},14253:(Ae,Y,_)=>{_.d(Y,{D:()=>y});var A=_(40972);const y=new Map([[A.r.POSITION,0],[A.r.NORMAL,1],[A.r.NORMALCOMPRESSED,1],[A.r.UV0,2],[A.r.COLOR,3],[A.r.COLORFEATUREATTRIBUTE,3],[A.r.SIZE,4],[A.r.TANGENT,4],[A.r.CENTEROFFSETANDDISTANCE,5],[A.r.SYMBOLCOLOR,5],[A.r.FEATUREATTRIBUTE,6],[A.r.INSTANCEFEATUREATTRIBUTE,6],[A.r.INSTANCECOLOR,7],[A.r.OBJECTANDLAYERIDCOLOR,7],[A.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[A.r.INSTANCEMODEL,8],[A.r.INSTANCEMODELNORMAL,12],[A.r.INSTANCEMODELORIGINHI,11],[A.r.INSTANCEMODELORIGINLO,15]])},2284:(Ae,Y,_)=>{_.d(Y,{m:()=>x});var A=_(11432),y=_(56492),R=_(93093),b=_(67496);class D{constructor(I){this._material=I.material,this._techniqueRepository=I.techniqueRep,this._output=I.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(I,oe){return this._technique=this._techniqueRepository.releaseAndAcquire(I,this._material.getConfiguration(this._output,oe),this._technique),this._technique}ensureResources(I){return b.Am.LOADED}}class x extends D{constructor(I){super(I),this._numLoading=0,this._disposed=!1,this._textureRepository=I.textureRepository,this._textureId=I.textureId,this._acquire(I.textureId,oe=>this._texture=oe),this._acquire(I.normalTextureId,oe=>this._textureNormal=oe),this._acquire(I.emissiveTextureId,oe=>this._textureEmissive=oe),this._acquire(I.occlusionTextureId,oe=>this._textureOcclusion=oe),this._acquire(I.metallicRoughnessTextureId,oe=>this._textureMetallicRoughness=oe)}dispose(){this._texture=(0,A.Gz)(this._texture),this._textureNormal=(0,A.Gz)(this._textureNormal),this._textureEmissive=(0,A.Gz)(this._textureEmissive),this._textureOcclusion=(0,A.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,A.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(I){return 0===this._numLoading?b.Am.LOADED:b.Am.LOADING}get textureBindParameters(){return new B(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(I){null!=this._texture&&I===this._texture.id||(this._texture=(0,A.Gz)(this._texture),this._textureId=I,this._acquire(this._textureId,oe=>this._texture=oe))}_acquire(I,oe){if(null==I)return void oe(null);const he=this._textureRepository.acquire(I);if((0,y.$X)(he))return++this._numLoading,void he.then(G=>{if(this._disposed)return(0,A.Gz)(G),void oe(null);oe(G)}).finally(()=>--this._numLoading);oe(he)}}class B extends R.Y{constructor(I=null,oe=null,he=null,G=null,C=null,w,X){super(),this.texture=I,this.textureNormal=oe,this.textureEmissive=he,this.textureOcclusion=G,this.textureMetallicRoughness=C,this.scale=w,this.normalTextureTransformMatrix=X}}},43087:(Ae,Y,_)=>{_.d(Y,{im:()=>oe,m$:()=>G});var A=_(25866);_(93093);var G,w,D=_(67496),x=_(43448),B=_(98176),N=_(14253),I=_(94417);class oe extends x.J{constructor(X,ae){super(),this.type=B.X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=N.D,this._pp0=(0,A.fA)(0,0,1),this._pp1=(0,A.fA)(0,0,0),this._parameters=(0,I.qu)(X,ae),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(X){return!1}setParameters(X,ae=!0){(0,I.MB)(this._parameters,X)&&(this.validateParameters(this._parameters),ae&&this.parametersChanged())}validateParameters(X){}get visible(){return this._visible}set visible(X){X!==this._visible&&(this._visible=X,this.parametersChanged())}shouldRender(X){return this.isVisible()&&this.isVisibleForOutput(X.output)&&(!this.parameters.isDecoration||X.bindParameters.decorations===D.ID.ON)&&!!(this.parameters.renderOccluded&X.renderOccludedMask)}isVisibleForOutput(X){return!0}get renderPriority(){return this._renderPriority}set renderPriority(X){X!==this._renderPriority&&(this._renderPriority=X,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){var X;null===(X=this.repository)||void 0===X||X.materialChanged(this)}queryRenderOccludedState(X){return this.isVisible()&&this.parameters.renderOccluded===X}intersectDraped(X,ae,ie,K,$,se){return this._pp0[0]=this._pp1[0]=K[0],this._pp0[1]=this._pp1[1]=K[1],this.intersect(X,ae,ie,this._pp0,this._pp1,$)}}(w=G||(G={}))[w.None=0]="None",w[w.Occlude=1]="Occlude",w[w.Transparent=2]="Transparent",w[w.OccludeAndTransparent=4]="OccludeAndTransparent",w[w.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",w[w.Opaque=16]="Opaque"},14356:(Ae,Y,_)=>{_.d(Y,{AJ:()=>x,K_:()=>G,V0:()=>b,aB:()=>he,ez:()=>B,xt:()=>I});var A=_(83415),y=_(50915),R=_(41396);const b=(0,R.p3)(y.dn.SRC_ALPHA,y.dn.ONE,y.dn.ONE_MINUS_SRC_ALPHA,y.dn.ONE_MINUS_SRC_ALPHA),D=(0,R.ox)(y.dn.ONE,y.dn.ONE),x=(0,R.ox)(y.dn.ZERO,y.dn.ONE_MINUS_SRC_ALPHA);function B(C){return C===A.y.FrontFace?null:C===A.y.Alpha?x:D}const I=5e5,oe={factor:-1,units:-2};function he(C){return C?oe:null}function G(C,w=y.MT.LESS){return C===A.y.NONE||C===A.y.FrontFace?w:y.MT.LEQUAL}},50758:(Ae,Y,_)=>{_.d(Y,{B:()=>R});var A=_(12438),y=_(77440);class R{constructor(D,x,B){this._context=D,this._locations=B,this._textures=new Map,this._freeTextureUnits=new A.A({deallocator:null}),this._glProgram=D.programCache.acquire(x.generate("vertex"),x.generate("fragment"),B),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=x.generateBindPass(this),this.bindDraw=x.generateBindDraw(this),this._fragmentUniforms=(0,y.en)()?x.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(D,x){this._glProgram.setUniform1i(D,x?1:0)}setUniform1i(D,x){this._glProgram.setUniform1i(D,x)}setUniform1f(D,x){this._glProgram.setUniform1f(D,x)}setUniform2fv(D,x){this._glProgram.setUniform2fv(D,x)}setUniform3fv(D,x){this._glProgram.setUniform3fv(D,x)}setUniform4fv(D,x){this._glProgram.setUniform4fv(D,x)}setUniformMatrix3fv(D,x){this._glProgram.setUniformMatrix3fv(D,x)}setUniformMatrix4fv(D,x){this._glProgram.setUniformMatrix4fv(D,x)}setUniform1fv(D,x){this._glProgram.setUniform1fv(D,x)}setUniform1iv(D,x){this._glProgram.setUniform1iv(D,x)}setUniform2iv(D,x){this._glProgram.setUniform3iv(D,x)}setUniform3iv(D,x){this._glProgram.setUniform3iv(D,x)}setUniform4iv(D,x){this._glProgram.setUniform4iv(D,x)}assertCompatibleVertexAttributeLocations(D){D.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(D,x){if(null==(null==x?void 0:x.glName)){const N=this._textures.get(D);return N&&(this._context.bindTexture(null,N.unit),this._freeTextureUnit(N),this._textures.delete(D)),null}let B=this._textures.get(D);return null==B?(B=this._allocTextureUnit(x),this._textures.set(D,B)):B.texture=x,this._context.useProgram(this),this.setUniform1i(D,B.unit),this._context.bindTexture(x,B.unit),B.unit}rebindTextures(){var D;this._context.useProgram(this),this._textures.forEach((x,B)=>{this._context.bindTexture(x.texture,x.unit),this.setUniform1i(B,x.unit)}),null===(D=this._fragmentUniforms)||void 0===D||D.forEach(x=>{"sampler2D"!==x.type&&"samplerCube"!==x.type||this._textures.has(x.name)||console.error(`Texture sampler ${x.name} has no bound texture`)})}_allocTextureUnit(D){return{texture:D,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(D){this._freeTextureUnits.push(D.unit)}}},55128:(Ae,Y,_)=>{var A,y;_.d(Y,{N:()=>A}),(y=A||(A={}))[y.INTEGRATED_MESH=0]="INTEGRATED_MESH",y[y.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",y[y.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",y[y.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",y[y.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",y[y.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",y[y.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",y[y.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",y[y.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",y[y.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",y[y.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",y[y.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",y[y.ANTIALIASING=12]="ANTIALIASING",y[y.COMPOSITE=13]="COMPOSITE",y[y.BLIT=14]="BLIT",y[y.SSAO=15]="SSAO",y[y.HIGHLIGHT=16]="HIGHLIGHT",y[y.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",y[y.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",y[y.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",y[y.LASERLINES=20]="LASERLINES",y[y.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",y[y.HUD_MATERIAL=22]="HUD_MATERIAL",y[y.LABEL_MATERIAL=23]="LABEL_MATERIAL",y[y.LINE_CALLOUTS=24]="LINE_CALLOUTS",y[y.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",y[y.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",y[y.DRAPED_WATER=27]="DRAPED_WATER",y[y.VOXEL=28]="VOXEL",y[y.MAX_SLOTS=29]="MAX_SLOTS"},83415:(Ae,Y,_)=>{var A,y;_.d(Y,{y:()=>A}),(y=A||(A={}))[y.Color=0]="Color",y[y.Alpha=1]="Alpha",y[y.FrontFace=2]="FrontFace",y[y.NONE=3]="NONE",y[y.COUNT=4]="COUNT"},94417:(Ae,Y,_)=>{_.d(Y,{Um:()=>tt,qu:()=>$e,Uy:()=>ye,MB:()=>pe,kE:()=>We});var A=_(89952),y=_(69287),R=_(28714),b=_(25866),D=_(2296),x=_(98176);_(23191),(0,y.kU)(10),(0,y.kU)(12),(0,y.kU)(70),(0,y.kU)(40);const q={scale:0,factor:0,minScaleFactor:0};var fe=_(65388),te=_(40972);const _e=(0,D.vt)();function ye(re,le,ve,Ee,ge,S){if(re.visible)if(re.boundingInfo)(0,fe.vA)(re.type===x.X.Mesh),Le(re.boundingInfo,ve,Ee,le.tolerance,ge,S);else{const V=re.attributes.get(te.r.POSITION),Z=V.indices;at(ve,Ee,0,Z.length/3,Z,V,void 0,ge,S)}}const Ve=(0,b.vt)();function Le(re,le,ve,Ee,ge,S){if(null==re)return;const V=function st(re,le,ve){return(0,R.s)(ve,1/(le[0]-re[0]),1/(le[1]-re[1]),1/(le[2]-re[2]))}(le,ve,Ve);if((0,D.Ne)(_e,re.bbMin),(0,D.vI)(_e,re.bbMax),null!=ge&&ge.applyToAabb(_e),function Te(re,le,ve,Ee){return function Me(re,le,ve,Ee,ge){const S=(re[0]-Ee-le[0])*ve[0],V=(re[3]+Ee-le[0])*ve[0];let Z=Math.min(S,V),Q=Math.max(S,V);const J=(re[1]-Ee-le[1])*ve[1],Oe=(re[4]+Ee-le[1])*ve[1];if(Q=Math.min(Q,Math.max(J,Oe)),Q<0||(Z=Math.max(Z,Math.min(J,Oe)),Z>Q))return!1;const Ie=(re[2]-Ee-le[2])*ve[2],Ue=(re[5]+Ee-le[2])*ve[2];return Q=Math.min(Q,Math.max(Ie,Ue)),!(Q<0)&&(Z=Math.max(Z,Math.min(Ie,Ue)),!(Z>Q)&&Z<ge)}(re,le,ve,Ee,1/0)}(_e,le,V,Ee)){const{primitiveIndices:Z,position:Q}=re,J=Z?Z.length:Q.indices.length/3;if(J>ee){const Oe=re.getChildren();if(void 0!==Oe){for(const Ie of Oe)Le(Ie,le,ve,Ee,ge,S);return}}at(le,ve,0,J,Q.indices,Q,Z,ge,S)}}const Se=(0,b.vt)();function at(re,le,ve,Ee,ge,S,V,Z,Q){if(V)return function xt(re,le,ve,Ee,ge,S,V,Z,Q){const{data:J,stride:Oe}=S,Ie=re[0],Ue=re[1],ut=re[2],mt=le[0]-Ie,xe=le[1]-Ue,ze=le[2]-ut;for(let je=ve;je<Ee;++je){const ct=V[je];let ot=3*ct,it=Oe*ge[ot++],ft=J[it++],Xe=J[it++],U=J[it];it=Oe*ge[ot++];let j=J[it++],ne=J[it++],me=J[it];it=Oe*ge[ot];let k=J[it++],Ce=J[it++],ke=J[it];null!=Z&&([ft,Xe,U]=Z.applyToVertex(ft,Xe,U,je),[j,ne,me]=Z.applyToVertex(j,ne,me,je),[k,Ce,ke]=Z.applyToVertex(k,Ce,ke,je));const ht=j-ft,Ot=ne-Xe,St=me-U,Rt=k-ft,bt=Ce-Xe,Lt=ke-U,wt=xe*Lt-bt*ze,Xt=ze*Rt-Lt*mt,Ut=mt*bt-Rt*xe,It=ht*wt+Ot*Xt+St*Ut;if(Math.abs(It)<=Number.EPSILON)continue;const jt=Ie-ft,zt=Ue-Xe,Bt=ut-U,Nt=jt*wt+zt*Xt+Bt*Ut;if(It>0){if(Nt<0||Nt>It)continue}else if(Nt>0||Nt<It)continue;const Wt=zt*St-Ot*Bt,Qt=Bt*ht-St*jt,Yt=jt*Ot-ht*zt,Vt=mt*Wt+xe*Qt+ze*Yt;if(It>0){if(Vt<0||Nt+Vt>It)continue}else if(Vt>0||Nt+Vt<It)continue;const nr=(Rt*Wt+bt*Qt+Lt*Yt)/It;nr>=0&&Q(nr,lt(ht,Ot,St,Rt,bt,Lt,Se),ct,!1)}}(re,le,ve,Ee,ge,S,V,Z,Q);const{data:J,stride:Oe}=S,Ie=re[0],Ue=re[1],ut=re[2],mt=le[0]-Ie,xe=le[1]-Ue,ze=le[2]-ut;for(let je=ve,ct=3*ve;je<Ee;++je){let ot=Oe*ge[ct++],it=J[ot++],ft=J[ot++],Xe=J[ot];ot=Oe*ge[ct++];let U=J[ot++],j=J[ot++],ne=J[ot];ot=Oe*ge[ct++];let me=J[ot++],k=J[ot++],Ce=J[ot];null!=Z&&([it,ft,Xe]=Z.applyToVertex(it,ft,Xe,je),[U,j,ne]=Z.applyToVertex(U,j,ne,je),[me,k,Ce]=Z.applyToVertex(me,k,Ce,je));const ke=U-it,ht=j-ft,Ot=ne-Xe,St=me-it,Rt=k-ft,bt=Ce-Xe,Lt=xe*bt-Rt*ze,wt=ze*St-bt*mt,Xt=mt*Rt-St*xe,Ut=ke*Lt+ht*wt+Ot*Xt;if(Math.abs(Ut)<=Number.EPSILON)continue;const It=Ie-it,jt=Ue-ft,zt=ut-Xe,Bt=It*Lt+jt*wt+zt*Xt;if(Ut>0){if(Bt<0||Bt>Ut)continue}else if(Bt>0||Bt<Ut)continue;const Nt=jt*Ot-ht*zt,Wt=zt*ke-Ot*It,Qt=It*ht-ke*jt,Yt=mt*Nt+xe*Wt+ze*Qt;if(Ut>0){if(Yt<0||Bt+Yt>Ut)continue}else if(Yt>0||Bt+Yt<Ut)continue;const Vt=(St*Nt+Rt*Wt+bt*Qt)/Ut;Vt>=0&&Q(Vt,lt(ke,ht,Ot,St,Rt,bt,Se),je,!1)}}const dt=(0,b.vt)(),we=(0,b.vt)();function lt(re,le,ve,Ee,ge,S,V){return(0,R.s)(dt,re,le,ve),(0,R.s)(we,Ee,ge,S),(0,R.b)(V,dt,we),(0,R.n)(V,V),V}function We(re,le,ve,Ee,ge){let S=(ve.screenLength||0)*re.pixelRatio;null!=ge&&(S=function ae(re,le,ve,Ee){return function G(re,le){return(0,y.Cc)(re*Math.max(le.scale,le.minScaleFactor),re,le.factor)}(re,function he(re,le,ve){const Ee=ve.parameters;return q.scale=Math.min(Ee.divisor/(le-Ee.offset),1),q.factor=function oe(re){return Math.abs(re*re*re)}(re),q}(le,ve,Ee))}(S,Ee,le,ge));const V=S*Math.tan(.5*re.fovY)/(.5*re.fullHeight);return(0,y.qE)(V*le,ve.minWorldLength||0,null!=ve.maxWorldLength?ve.maxWorldLength:1/0)}function $e(re,le){const ve=le?$e(le):{};for(const ge in re){var Ee;let S=re[ge];null!==(Ee=S)&&void 0!==Ee&&Ee.forEach&&(S=De(S)),null==S&&ge in ve||(ve[ge]=S)}return ve}function pe(re,le){let ve=!1;for(const Ee in le){const ge=le[Ee];void 0!==ge&&(Array.isArray(ge)?null===re[Ee]?(re[Ee]=ge.slice(),ve=!0):(0,A.yo)(re[Ee],ge)&&(ve=!0):re[Ee]!==ge&&(ve=!0,re[Ee]=ge))}return ve}function De(re){const le=[];return re.forEach(ve=>le.push(ve)),le}const tt={multiply:1,ignore:2,replace:3,tint:4},ee=1e3},40830:(Ae,Y,_)=>{var A,y;_.d(Y,{M:()=>A}),(y=A||(A={}))[y.ANIMATING=0]="ANIMATING",y[y.INTERACTING=1]="INTERACTING",y[y.IDLE=2]="IDLE"},41396:(Ae,Y,_)=>{_.d(Y,{Ey:()=>$,Ms:()=>tt,Xt:()=>B,kn:()=>N,ox:()=>R,p3:()=>b,wE:()=>I});var A=_(67496),y=_(50915);function R(ee,re,le=y.Tb.ADD,ve=[0,0,0,0]){return{srcRgb:ee,srcAlpha:ee,dstRgb:re,dstAlpha:re,opRgb:le,opAlpha:le,color:{r:ve[0],g:ve[1],b:ve[2],a:ve[3]}}}function b(ee,re,le,ve,Ee=y.Tb.ADD,ge=y.Tb.ADD,S=[0,0,0,0]){return{srcRgb:ee,srcAlpha:re,dstRgb:le,dstAlpha:ve,opRgb:Ee,opAlpha:ge,color:{r:S[0],g:S[1],b:S[2],a:S[3]}}}const D={face:y.Y7.BACK,mode:y.Ac.CCW},x={face:y.Y7.FRONT,mode:y.Ac.CCW},B=ee=>ee===A.s2.Back?D:ee===A.s2.Front?x:null,N={zNear:0,zFar:1},I={r:!0,g:!0,b:!0,a:!0};function oe(ee){return ce.intern(ee)}function he(ee){return te.intern(ee)}function G(ee){return ye.intern(ee)}function C(ee){return Le.intern(ee)}function w(ee){return at.intern(ee)}function X(ee){return dt.intern(ee)}function ae(ee){return lt.intern(ee)}function ie(ee){return Te.intern(ee)}function K(ee){return We.intern(ee)}function $(ee){return pe.intern(ee)}class se{constructor(re,le){this._makeKey=re,this._makeRef=le,this._interns=new Map}intern(re){var le;if(!re)return null;const ve=this._makeKey(re),Ee=this._interns;return Ee.has(ve)||Ee.set(ve,this._makeRef(re)),null!==(le=Ee.get(ve))&&void 0!==le?le:null}}function q(ee){return"["+ee.join(",")+"]"}const ce=new se(fe,ee=>({__tag:"Blending",...ee}));function fe(ee){return ee?q([ee.srcRgb,ee.srcAlpha,ee.dstRgb,ee.dstAlpha,ee.opRgb,ee.opAlpha,ee.color.r,ee.color.g,ee.color.b,ee.color.a]):null}const te=new se(_e,ee=>({__tag:"Culling",...ee}));function _e(ee){return ee?q([ee.face,ee.mode]):null}const ye=new se(Ve,ee=>({__tag:"PolygonOffset",...ee}));function Ve(ee){return ee?q([ee.factor,ee.units]):null}const Le=new se(Se,ee=>({__tag:"DepthTest",...ee}));function Se(ee){return ee?q([ee.func]):null}const at=new se(xt,ee=>({__tag:"StencilTest",...ee}));function xt(ee){return ee?q([ee.function.func,ee.function.ref,ee.function.mask,ee.operation.fail,ee.operation.zFail,ee.operation.zPass]):null}const dt=new se(we,ee=>({__tag:"DepthWrite",...ee}));function we(ee){return ee?q([ee.zNear,ee.zFar]):null}const lt=new se(st,ee=>({__tag:"ColorWrite",...ee}));function st(ee){return ee?q([ee.r,ee.g,ee.b,ee.a]):null}const Te=new se(Me,ee=>({__tag:"StencilWrite",...ee}));function Me(ee){return ee?q([ee.mask]):null}const We=new se($e,ee=>({__tag:"DrawBuffers",...ee}));function $e(ee){return ee?q(ee.buffers):null}const pe=new se(function De(ee){return ee?q([fe(ee.blending),_e(ee.culling),Ve(ee.polygonOffset),Se(ee.depthTest),xt(ee.stencilTest),we(ee.depthWrite),st(ee.colorWrite),Me(ee.stencilWrite),$e(ee.drawBuffers)]):null},ee=>({blending:oe(ee.blending),culling:he(ee.culling),polygonOffset:G(ee.polygonOffset),depthTest:C(ee.depthTest),stencilTest:w(ee.stencilTest),depthWrite:X(ee.depthWrite),colorWrite:ae(ee.colorWrite),stencilWrite:ie(ee.stencilWrite),drawBuffers:K(ee.drawBuffers)}));class tt{constructor(re){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=re}setPipeline(re){(this._pipelineInvalid||re!==this._pipeline)&&(this._setBlending(re.blending),this._setCulling(re.culling),this._setPolygonOffset(re.polygonOffset),this._setDepthTest(re.depthTest),this._setStencilTest(re.stencilTest),this._setDepthWrite(re.depthWrite),this._setColorWrite(re.colorWrite),this._setStencilWrite(re.stencilWrite),this._setDrawBuffers(re.drawBuffers),this._pipeline=re),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(re){this._blending=this._setSubState(re,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(re){this._culling=this._setSubState(re,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(re){this._polygonOffset=this._setSubState(re,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(re){this._depthTest=this._setSubState(re,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(re){this._stencilTest=this._setSubState(re,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(re){this._depthWrite=this._setSubState(re,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(re){this._colorWrite=this._setSubState(re,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(re){this._stencilWrite=this._setSubState(re,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(re){this._drawBuffers=this._setSubState(re,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(re,le,ve,Ee){return(ve||re!==le)&&(Ee(re),this._pipelineInvalid=!0),re}}}}]);