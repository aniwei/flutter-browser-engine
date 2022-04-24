define(['dart_sdk', 'packages/material_color_utilities/utils/color_utils.dart', 'packages/material_color_utilities/utils/math_utils.dart'], (function load__packages__material_color_utilities__hct__viewing_conditions_dart(dart_sdk, packages__material_color_utilities__utils__color_utils$46dart, packages__material_color_utilities__utils__math_utils$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const color_utils = packages__material_color_utilities__utils__color_utils$46dart.utils__color_utils;
  const math_utils = packages__material_color_utilities__utils__math_utils$46dart.utils__math_utils;
  var viewing_conditions = Object.create(dart.library);
  var $_get = dartx._get;
  var $toDouble = dartx.toDouble;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    JSArrayOfnum: () => (T.JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core.num)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/.pub-cache/hosted/pub.dartlang.org/material_color_utilities-0.1.3/lib/hct/viewing_conditions.dart",
    "package:material_color_utilities/hct/viewing_conditions.dart"
  ];
  var whitePoint$ = dart.privateName(viewing_conditions, "ViewingConditions.whitePoint");
  var adaptingLuminance$ = dart.privateName(viewing_conditions, "ViewingConditions.adaptingLuminance");
  var backgroundLstar$ = dart.privateName(viewing_conditions, "ViewingConditions.backgroundLstar");
  var surround$ = dart.privateName(viewing_conditions, "ViewingConditions.surround");
  var discountingIlluminant$ = dart.privateName(viewing_conditions, "ViewingConditions.discountingIlluminant");
  var backgroundYTowhitePointY$ = dart.privateName(viewing_conditions, "ViewingConditions.backgroundYTowhitePointY");
  var aw$ = dart.privateName(viewing_conditions, "ViewingConditions.aw");
  var nbb$ = dart.privateName(viewing_conditions, "ViewingConditions.nbb");
  var ncb$ = dart.privateName(viewing_conditions, "ViewingConditions.ncb");
  var c$ = dart.privateName(viewing_conditions, "ViewingConditions.c");
  var nC$ = dart.privateName(viewing_conditions, "ViewingConditions.nC");
  var drgbInverse$ = dart.privateName(viewing_conditions, "ViewingConditions.drgbInverse");
  var rgbD$ = dart.privateName(viewing_conditions, "ViewingConditions.rgbD");
  var fl$ = dart.privateName(viewing_conditions, "ViewingConditions.fl");
  var fLRoot$ = dart.privateName(viewing_conditions, "ViewingConditions.fLRoot");
  var z$ = dart.privateName(viewing_conditions, "ViewingConditions.z");
  viewing_conditions.ViewingConditions = class ViewingConditions extends core.Object {
    get whitePoint() {
      return this[whitePoint$];
    }
    set whitePoint(value) {
      super.whitePoint = value;
    }
    get adaptingLuminance() {
      return this[adaptingLuminance$];
    }
    set adaptingLuminance(value) {
      super.adaptingLuminance = value;
    }
    get backgroundLstar() {
      return this[backgroundLstar$];
    }
    set backgroundLstar(value) {
      super.backgroundLstar = value;
    }
    get surround() {
      return this[surround$];
    }
    set surround(value) {
      super.surround = value;
    }
    get discountingIlluminant() {
      return this[discountingIlluminant$];
    }
    set discountingIlluminant(value) {
      super.discountingIlluminant = value;
    }
    get backgroundYTowhitePointY() {
      return this[backgroundYTowhitePointY$];
    }
    set backgroundYTowhitePointY(value) {
      super.backgroundYTowhitePointY = value;
    }
    get aw() {
      return this[aw$];
    }
    set aw(value) {
      super.aw = value;
    }
    get nbb() {
      return this[nbb$];
    }
    set nbb(value) {
      super.nbb = value;
    }
    get ncb() {
      return this[ncb$];
    }
    set ncb(value) {
      super.ncb = value;
    }
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get nC() {
      return this[nC$];
    }
    set nC(value) {
      super.nC = value;
    }
    get drgbInverse() {
      return this[drgbInverse$];
    }
    set drgbInverse(value) {
      super.drgbInverse = value;
    }
    get rgbD() {
      return this[rgbD$];
    }
    set rgbD(value) {
      super.rgbD = value;
    }
    get fl() {
      return this[fl$];
    }
    set fl(value) {
      super.fl = value;
    }
    get fLRoot() {
      return this[fLRoot$];
    }
    set fLRoot(value) {
      super.fLRoot = value;
    }
    get z() {
      return this[z$];
    }
    set z(value) {
      super.z = value;
    }
    static ['_#new#tearOff'](opts) {
      let whitePoint = opts && 'whitePoint' in opts ? opts.whitePoint : null;
      let adaptingLuminance = opts && 'adaptingLuminance' in opts ? opts.adaptingLuminance : null;
      let backgroundLstar = opts && 'backgroundLstar' in opts ? opts.backgroundLstar : null;
      let surround = opts && 'surround' in opts ? opts.surround : null;
      let discountingIlluminant = opts && 'discountingIlluminant' in opts ? opts.discountingIlluminant : null;
      let backgroundYTowhitePointY = opts && 'backgroundYTowhitePointY' in opts ? opts.backgroundYTowhitePointY : null;
      let aw = opts && 'aw' in opts ? opts.aw : null;
      let nbb = opts && 'nbb' in opts ? opts.nbb : null;
      let ncb = opts && 'ncb' in opts ? opts.ncb : null;
      let c = opts && 'c' in opts ? opts.c : null;
      let nC = opts && 'nC' in opts ? opts.nC : null;
      let drgbInverse = opts && 'drgbInverse' in opts ? opts.drgbInverse : null;
      let rgbD = opts && 'rgbD' in opts ? opts.rgbD : null;
      let fl = opts && 'fl' in opts ? opts.fl : null;
      let fLRoot = opts && 'fLRoot' in opts ? opts.fLRoot : null;
      let z = opts && 'z' in opts ? opts.z : null;
      return new viewing_conditions.ViewingConditions.new({whitePoint: whitePoint, adaptingLuminance: adaptingLuminance, backgroundLstar: backgroundLstar, surround: surround, discountingIlluminant: discountingIlluminant, backgroundYTowhitePointY: backgroundYTowhitePointY, aw: aw, nbb: nbb, ncb: ncb, c: c, nC: nC, drgbInverse: drgbInverse, rgbD: rgbD, fl: fl, fLRoot: fLRoot, z: z});
    }
    static make(opts) {
      let whitePoint = opts && 'whitePoint' in opts ? opts.whitePoint : null;
      let adaptingLuminance = opts && 'adaptingLuminance' in opts ? opts.adaptingLuminance : -1;
      let backgroundLstar = opts && 'backgroundLstar' in opts ? opts.backgroundLstar : 50;
      let surround = opts && 'surround' in opts ? opts.surround : 2;
      let discountingIlluminant = opts && 'discountingIlluminant' in opts ? opts.discountingIlluminant : false;
      whitePoint == null ? whitePoint = color_utils.ColorUtils.whitePointD65() : null;
      adaptingLuminance = adaptingLuminance > 0.0 ? adaptingLuminance : 200.0 / 3.141592653589793 * color_utils.ColorUtils.yFromLstar(50.0) / 100.0;
      backgroundLstar = math.max(core.double, 30.0, backgroundLstar);
      let xyz = whitePoint;
      let rW = xyz[$_get](0) * 0.401288 + xyz[$_get](1) * 0.650173 + xyz[$_get](2) * -0.051461;
      let gW = xyz[$_get](0) * -0.250268 + xyz[$_get](1) * 1.204414 + xyz[$_get](2) * 0.045854;
      let bW = xyz[$_get](0) * -0.002079 + xyz[$_get](1) * 0.048952 + xyz[$_get](2) * 0.953127;
      if (!(surround >= 0.0 && surround <= 2.0)) dart.assertFailed(null, I[0], 90, 12, "surround >= 0.0 && surround <= 2.0");
      let f = 0.8 + surround / 10.0;
      let c = f >= 0.9 ? math_utils.MathUtils.lerp(0.59, 0.69, (f - 0.9) * 10.0) : math_utils.MathUtils.lerp(0.525, 0.59, (f - 0.8) * 10.0);
      let d = discountingIlluminant ? 1.0 : f * (1.0 - 1.0 / 3.6 * math.exp((-adaptingLuminance - 42.0) / 92.0));
      d = d > 1.0 ? 1.0 : d < 0.0 ? 0.0 : d;
      let nc = f;
      let rgbD = T.JSArrayOfdouble().of([d * (100.0 / rW) + 1.0 - d, d * (100.0 / gW) + 1.0 - d, d * (100.0 / bW) + 1.0 - d]);
      let k = 1.0 / (5.0 * adaptingLuminance + 1.0);
      let k4 = k * k * k * k;
      let k4F = 1.0 - k4;
      let fl = k4 * adaptingLuminance + 0.1 * k4F * k4F * math.pow(5.0 * adaptingLuminance, 1.0 / 3.0);
      let n = color_utils.ColorUtils.yFromLstar(backgroundLstar) / whitePoint[$_get](1);
      let z = 1.48 + math.sqrt(n);
      let nbb = 0.725 / math.pow(n, 0.2);
      let ncb = nbb;
      let rgbAFactors = T.JSArrayOfnum().of([math.pow(fl * rgbD[$_get](0) * rW / 100.0, 0.42), math.pow(fl * rgbD[$_get](1) * gW / 100.0, 0.42), math.pow(fl * rgbD[$_get](2) * bW / 100.0, 0.42)]);
      let rgbA = T.JSArrayOfdouble().of([400.0 * rgbAFactors[$_get](0) / (rgbAFactors[$_get](0) + 27.13), 400.0 * rgbAFactors[$_get](1) / (rgbAFactors[$_get](1) + 27.13), 400.0 * rgbAFactors[$_get](2) / (rgbAFactors[$_get](2) + 27.13)]);
      let aw = (40.0 * rgbA[$_get](0) + 20.0 * rgbA[$_get](1) + rgbA[$_get](2)) / 20.0 * nbb;
      return new viewing_conditions.ViewingConditions.new({whitePoint: whitePoint, adaptingLuminance: adaptingLuminance, backgroundLstar: backgroundLstar, surround: surround, discountingIlluminant: discountingIlluminant, backgroundYTowhitePointY: n, aw: aw, nbb: nbb, ncb: ncb, c: c, nC: nc, drgbInverse: T.JSArrayOfdouble().of([0.0, 0.0, 0.0]), rgbD: rgbD, fl: fl, fLRoot: math.pow(fl, 0.25)[$toDouble](), z: z});
    }
    static ['_#make#tearOff'](opts) {
      let whitePoint = opts && 'whitePoint' in opts ? opts.whitePoint : null;
      let adaptingLuminance = opts && 'adaptingLuminance' in opts ? opts.adaptingLuminance : -1;
      let backgroundLstar = opts && 'backgroundLstar' in opts ? opts.backgroundLstar : 50;
      let surround = opts && 'surround' in opts ? opts.surround : 2;
      let discountingIlluminant = opts && 'discountingIlluminant' in opts ? opts.discountingIlluminant : false;
      return viewing_conditions.ViewingConditions.make({whitePoint: whitePoint, adaptingLuminance: adaptingLuminance, backgroundLstar: backgroundLstar, surround: surround, discountingIlluminant: discountingIlluminant});
    }
  };
  (viewing_conditions.ViewingConditions.new = function(opts) {
    let whitePoint = opts && 'whitePoint' in opts ? opts.whitePoint : null;
    let adaptingLuminance = opts && 'adaptingLuminance' in opts ? opts.adaptingLuminance : null;
    let backgroundLstar = opts && 'backgroundLstar' in opts ? opts.backgroundLstar : null;
    let surround = opts && 'surround' in opts ? opts.surround : null;
    let discountingIlluminant = opts && 'discountingIlluminant' in opts ? opts.discountingIlluminant : null;
    let backgroundYTowhitePointY = opts && 'backgroundYTowhitePointY' in opts ? opts.backgroundYTowhitePointY : null;
    let aw = opts && 'aw' in opts ? opts.aw : null;
    let nbb = opts && 'nbb' in opts ? opts.nbb : null;
    let ncb = opts && 'ncb' in opts ? opts.ncb : null;
    let c = opts && 'c' in opts ? opts.c : null;
    let nC = opts && 'nC' in opts ? opts.nC : null;
    let drgbInverse = opts && 'drgbInverse' in opts ? opts.drgbInverse : null;
    let rgbD = opts && 'rgbD' in opts ? opts.rgbD : null;
    let fl = opts && 'fl' in opts ? opts.fl : null;
    let fLRoot = opts && 'fLRoot' in opts ? opts.fLRoot : null;
    let z = opts && 'z' in opts ? opts.z : null;
    this[whitePoint$] = whitePoint;
    this[adaptingLuminance$] = adaptingLuminance;
    this[backgroundLstar$] = backgroundLstar;
    this[surround$] = surround;
    this[discountingIlluminant$] = discountingIlluminant;
    this[backgroundYTowhitePointY$] = backgroundYTowhitePointY;
    this[aw$] = aw;
    this[nbb$] = nbb;
    this[ncb$] = ncb;
    this[c$] = c;
    this[nC$] = nC;
    this[drgbInverse$] = drgbInverse;
    this[rgbD$] = rgbD;
    this[fl$] = fl;
    this[fLRoot$] = fLRoot;
    this[z$] = z;
    ;
  }).prototype = viewing_conditions.ViewingConditions.prototype;
  dart.addTypeTests(viewing_conditions.ViewingConditions);
  dart.addTypeCaches(viewing_conditions.ViewingConditions);
  dart.setStaticMethodSignature(viewing_conditions.ViewingConditions, () => ['make']);
  dart.setLibraryUri(viewing_conditions.ViewingConditions, I[1]);
  dart.setFieldSignature(viewing_conditions.ViewingConditions, () => ({
    __proto__: dart.getFields(viewing_conditions.ViewingConditions.__proto__),
    whitePoint: dart.finalFieldType(core.List$(core.double)),
    adaptingLuminance: dart.finalFieldType(core.double),
    backgroundLstar: dart.finalFieldType(core.double),
    surround: dart.finalFieldType(core.double),
    discountingIlluminant: dart.finalFieldType(core.bool),
    backgroundYTowhitePointY: dart.finalFieldType(core.double),
    aw: dart.finalFieldType(core.double),
    nbb: dart.finalFieldType(core.double),
    ncb: dart.finalFieldType(core.double),
    c: dart.finalFieldType(core.double),
    nC: dart.finalFieldType(core.double),
    drgbInverse: dart.finalFieldType(core.List$(core.double)),
    rgbD: dart.finalFieldType(core.List$(core.double)),
    fl: dart.finalFieldType(core.double),
    fLRoot: dart.finalFieldType(core.double),
    z: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(viewing_conditions.ViewingConditions, () => ['standard', 'sRgb']);
  dart.defineLazy(viewing_conditions.ViewingConditions, {
    /*viewing_conditions.ViewingConditions.standard*/get standard() {
      return viewing_conditions.ViewingConditions.sRgb;
    },
    /*viewing_conditions.ViewingConditions.sRgb*/get sRgb() {
      return viewing_conditions.ViewingConditions.make();
    }
  }, false);
  dart.trackLibraries("packages/material_color_utilities/hct/viewing_conditions.dart", {
    "package:material_color_utilities/hct/viewing_conditions.dart": viewing_conditions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["viewing_conditions.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/material_color_utilities/hct/viewing_conditions.dart.lib.js"}');
  // Exports:
  return {
    hct__viewing_conditions: viewing_conditions
  };
}));

//# sourceMappingURL=viewing_conditions.dart.lib.js.map
