define(['dart_sdk', 'packages/material_color_utilities/hct/viewing_conditions.dart', 'packages/material_color_utilities/utils/color_utils.dart', 'packages/material_color_utilities/utils/math_utils.dart'], (function load__packages__material_color_utilities__hct__cam16_dart(dart_sdk, packages__material_color_utilities__hct__viewing_conditions$46dart, packages__material_color_utilities__utils__color_utils$46dart, packages__material_color_utilities__utils__math_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const viewing_conditions = packages__material_color_utilities__hct__viewing_conditions$46dart.hct__viewing_conditions;
  const color_utils = packages__material_color_utilities__utils__color_utils$46dart.utils__color_utils;
  const math_utils = packages__material_color_utilities__utils__math_utils$46dart.utils__math_utils;
  var cam16 = Object.create(dart.library);
  var $_get = dartx._get;
  var $abs = dartx.abs;
  var $toDouble = dartx.toDouble;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/.pub-cache/hosted/pub.dartlang.org/material_color_utilities-0.1.3/lib/hct/cam16.dart",
    "package:material_color_utilities/hct/cam16.dart"
  ];
  var hue$ = dart.privateName(cam16, "Cam16.hue");
  var chroma$ = dart.privateName(cam16, "Cam16.chroma");
  var j$ = dart.privateName(cam16, "Cam16.j");
  var q$ = dart.privateName(cam16, "Cam16.q");
  var m$ = dart.privateName(cam16, "Cam16.m");
  var s$ = dart.privateName(cam16, "Cam16.s");
  var jstar$ = dart.privateName(cam16, "Cam16.jstar");
  var astar$ = dart.privateName(cam16, "Cam16.astar");
  var bstar$ = dart.privateName(cam16, "Cam16.bstar");
  cam16.Cam16 = class Cam16 extends core.Object {
    get hue() {
      return this[hue$];
    }
    set hue(value) {
      super.hue = value;
    }
    get chroma() {
      return this[chroma$];
    }
    set chroma(value) {
      super.chroma = value;
    }
    get j() {
      return this[j$];
    }
    set j(value) {
      super.j = value;
    }
    get q() {
      return this[q$];
    }
    set q(value) {
      super.q = value;
    }
    get m() {
      return this[m$];
    }
    set m(value) {
      super.m = value;
    }
    get s() {
      return this[s$];
    }
    set s(value) {
      super.s = value;
    }
    get jstar() {
      return this[jstar$];
    }
    set jstar(value) {
      super.jstar = value;
    }
    get astar() {
      return this[astar$];
    }
    set astar(value) {
      super.astar = value;
    }
    get bstar() {
      return this[bstar$];
    }
    set bstar(value) {
      super.bstar = value;
    }
    static ['_#new#tearOff'](hue, chroma, j, q, m, s, jstar, astar, bstar) {
      return new cam16.Cam16.new(hue, chroma, j, q, m, s, jstar, astar, bstar);
    }
    distance(other) {
      let dJ = this.jstar - other.jstar;
      let dA = this.astar - other.astar;
      let dB = this.bstar - other.bstar;
      let dEPrime = math.sqrt(dJ * dJ + dA * dA + dB * dB);
      let dE = 1.41 * math.pow(dEPrime, 0.63);
      return dE;
    }
    static fromInt(argb) {
      return cam16.Cam16.fromIntInViewingConditions(argb, viewing_conditions.ViewingConditions.sRgb);
    }
    static fromIntInViewingConditions(argb, viewingConditions) {
      let xyz = color_utils.ColorUtils.xyzFromArgb(argb);
      let x = xyz[$_get](0);
      let y = xyz[$_get](1);
      let z = xyz[$_get](2);
      let rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
      let gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
      let bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
      let rD = viewingConditions.rgbD[$_get](0) * rC;
      let gD = viewingConditions.rgbD[$_get](1) * gC;
      let bD = viewingConditions.rgbD[$_get](2) * bC;
      let rAF = math.pow(viewingConditions.fl * rD[$abs]() / 100.0, 0.42)[$toDouble]();
      let gAF = math.pow(viewingConditions.fl * gD[$abs]() / 100.0, 0.42)[$toDouble]();
      let bAF = math.pow(viewingConditions.fl * bD[$abs]() / 100.0, 0.42)[$toDouble]();
      let rA = math_utils.MathUtils.signum(rD) * 400.0 * rAF / (rAF + 27.13);
      let gA = math_utils.MathUtils.signum(gD) * 400.0 * gAF / (gAF + 27.13);
      let bA = math_utils.MathUtils.signum(bD) * 400.0 * bAF / (bAF + 27.13);
      let a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
      let b = (rA + gA - 2.0 * bA) / 9.0;
      let u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
      let p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
      let atan2 = math.atan2(b, a);
      let atanDegrees = atan2 * 180.0 / 3.141592653589793;
      let hue = atanDegrees < 0 ? atanDegrees + 360.0 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
      let hueRadians = hue * 3.141592653589793 / 180.0;
      if (!(hue >= 0 && hue < 360)) dart.assertFailed("hue was really " + dart.str(hue), I[0], 159, 12, "hue >= 0 && hue < 360");
      let ac = p2 * viewingConditions.nbb;
      let J = 100.0 * math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
      let Q = 4.0 / viewingConditions.c * math.sqrt(J / 100.0) * (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
      let huePrime = hue < 20.14 ? hue + 360 : hue;
      let eHue = 1.0 / 4.0 * (math.cos(huePrime * 3.141592653589793 / 180.0 + 2.0) + 3.8);
      let p1 = 50000.0 / 13.0 * eHue * viewingConditions.nC * viewingConditions.ncb;
      let t = p1 * math.sqrt(a * a + b * b) / (u + 0.305);
      let alpha = math.pow(t, 0.9) * math.pow(1.64 - math.pow(0.29, viewingConditions.backgroundYTowhitePointY), 0.73);
      let C = alpha * math.sqrt(J / 100.0);
      let M = C * viewingConditions.fLRoot;
      let s = 50.0 * math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4.0));
      let jstar = (1.0 + 100.0 * 0.007) * J / (1.0 + 0.007 * J);
      let mstar = math.log(1.0 + 0.0228 * M) / 0.0228;
      let astar = mstar * math.cos(hueRadians);
      let bstar = mstar * math.sin(hueRadians);
      return new cam16.Cam16.new(hue, C, J, Q, M, s, jstar, astar, bstar);
    }
    static fromJch(j, c, h) {
      return cam16.Cam16.fromJchInViewingConditions(j, c, h, viewing_conditions.ViewingConditions.sRgb);
    }
    static fromJchInViewingConditions(J, C, h, viewingConditions) {
      let Q = 4.0 / viewingConditions.c * math.sqrt(J / 100.0) * (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
      let M = C * viewingConditions.fLRoot;
      let alpha = C / math.sqrt(J / 100.0);
      let s = 50.0 * math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4.0));
      let hueRadians = h * 3.141592653589793 / 180.0;
      let jstar = (1.0 + 100.0 * 0.007) * J / (1.0 + 0.007 * J);
      let mstar = 1.0 / 0.0228 * math.log(1.0 + 0.0228 * M);
      let astar = mstar * math.cos(hueRadians);
      let bstar = mstar * math.sin(hueRadians);
      return new cam16.Cam16.new(h, C, J, Q, M, s, jstar, astar, bstar);
    }
    static fromUcs(jstar, astar, bstar) {
      return cam16.Cam16.fromUcsInViewingConditions(jstar, astar, bstar, viewing_conditions.ViewingConditions.standard);
    }
    static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
      let a = astar;
      let b = bstar;
      let m = math.sqrt(a * a + b * b);
      let M = (math.exp(m * 0.0228) - 1.0) / 0.0228;
      let c = M / viewingConditions.fLRoot;
      let h = math.atan2(b, a) * (180.0 / 3.141592653589793);
      if (h < 0.0) {
        h = h + 360.0;
      }
      let j = jstar / (1 - (jstar - 100) * 0.007);
      return cam16.Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
    }
    get viewedInSRgb() {
      return this.viewed(viewing_conditions.ViewingConditions.sRgb);
    }
    viewed(viewingConditions) {
      let alpha = this.chroma === 0.0 || this.j === 0.0 ? 0.0 : this.chroma / math.sqrt(this.j / 100.0);
      let t = math.pow(alpha / math.pow(1.64 - math.pow(0.29, viewingConditions.backgroundYTowhitePointY), 0.73), 1.0 / 0.9);
      let hRad = this.hue * 3.141592653589793 / 180.0;
      let eHue = 0.25 * (math.cos(hRad + 2.0) + 3.8);
      let ac = viewingConditions.aw * math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
      let p1 = eHue * (50000.0 / 13.0) * viewingConditions.nC * viewingConditions.ncb;
      let p2 = ac / viewingConditions.nbb;
      let hSin = math.sin(hRad);
      let hCos = math.cos(hRad);
      let gamma = 23.0 * (p2 + 0.305) * t / (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
      let a = gamma * hCos;
      let b = gamma * hSin;
      let rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
      let gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
      let bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
      let rCBase = math.max(core.num, 0, 27.13 * rA[$abs]() / (400.0 - rA[$abs]()));
      let rC = math_utils.MathUtils.signum(rA) * (100.0 / viewingConditions.fl) * math.pow(rCBase, 1.0 / 0.42);
      let gCBase = math.max(core.num, 0, 27.13 * gA[$abs]() / (400.0 - gA[$abs]()));
      let gC = math_utils.MathUtils.signum(gA) * (100.0 / viewingConditions.fl) * math.pow(gCBase, 1.0 / 0.42);
      let bCBase = math.max(core.num, 0, 27.13 * bA[$abs]() / (400.0 - bA[$abs]()));
      let bC = math_utils.MathUtils.signum(bA) * (100.0 / viewingConditions.fl) * math.pow(bCBase, 1.0 / 0.42);
      let rF = rC / viewingConditions.rgbD[$_get](0);
      let gF = gC / viewingConditions.rgbD[$_get](1);
      let bF = bC / viewingConditions.rgbD[$_get](2);
      let x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
      let y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
      let z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
      let argb = color_utils.ColorUtils.argbFromXyz(x, y, z);
      return argb;
    }
  };
  (cam16.Cam16.new = function(hue, chroma, j, q, m, s, jstar, astar, bstar) {
    this[hue$] = hue;
    this[chroma$] = chroma;
    this[j$] = j;
    this[q$] = q;
    this[m$] = m;
    this[s$] = s;
    this[jstar$] = jstar;
    this[astar$] = astar;
    this[bstar$] = bstar;
    ;
  }).prototype = cam16.Cam16.prototype;
  dart.addTypeTests(cam16.Cam16);
  dart.addTypeCaches(cam16.Cam16);
  dart.setMethodSignature(cam16.Cam16, () => ({
    __proto__: dart.getMethods(cam16.Cam16.__proto__),
    distance: dart.fnType(core.double, [cam16.Cam16]),
    viewed: dart.fnType(core.int, [viewing_conditions.ViewingConditions])
  }));
  dart.setStaticMethodSignature(cam16.Cam16, () => ['fromInt', 'fromIntInViewingConditions', 'fromJch', 'fromJchInViewingConditions', 'fromUcs', 'fromUcsInViewingConditions']);
  dart.setGetterSignature(cam16.Cam16, () => ({
    __proto__: dart.getGetters(cam16.Cam16.__proto__),
    viewedInSRgb: core.int
  }));
  dart.setLibraryUri(cam16.Cam16, I[1]);
  dart.setFieldSignature(cam16.Cam16, () => ({
    __proto__: dart.getFields(cam16.Cam16.__proto__),
    hue: dart.finalFieldType(core.double),
    chroma: dart.finalFieldType(core.double),
    j: dart.finalFieldType(core.double),
    q: dart.finalFieldType(core.double),
    m: dart.finalFieldType(core.double),
    s: dart.finalFieldType(core.double),
    jstar: dart.finalFieldType(core.double),
    astar: dart.finalFieldType(core.double),
    bstar: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/material_color_utilities/hct/cam16.dart", {
    "package:material_color_utilities/hct/cam16.dart": cam16
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cam16.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/material_color_utilities/hct/cam16.dart.lib.js"}');
  // Exports:
  return {
    hct__cam16: cam16
  };
}));

//# sourceMappingURL=cam16.dart.lib.js.map
