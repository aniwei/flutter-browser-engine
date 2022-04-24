define(['dart_sdk'], (function load__packages__material_color_utilities__utils__math_utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var math_utils = Object.create(dart.library);
  var $modulo = dartx['%'];
  var $abs = dartx.abs;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:material_color_utilities/utils/math_utils.dart"];
  math_utils.MathUtils = class MathUtils extends core.Object {
    static signum(num) {
      if (num < 0) {
        return -1;
      } else {
        if (num === 0) {
          return 0;
        } else {
          return 1;
        }
      }
    }
    static lerp(start, stop, amount) {
      return (1.0 - amount) * start + amount * stop;
    }
    static clampInt(min, max, input) {
      if (input < min) {
        return min;
      } else {
        if (input > max) {
          return max;
        }
      }
      return input;
    }
    static clampDouble(min, max, input) {
      if (input < min) {
        return min;
      } else {
        if (input > max) {
          return max;
        }
      }
      return input;
    }
    static sanitizeDegreesInt(degrees) {
      degrees = degrees[$modulo](360);
      if (degrees < 0) {
        degrees = degrees + 360;
      }
      return degrees;
    }
    static sanitizeDegreesDouble(degrees) {
      degrees = degrees[$modulo](360.0);
      if (degrees < 0) {
        degrees = degrees + 360.0;
      }
      return degrees;
    }
    static differenceDegrees(a, b) {
      return 180.0 - ((a - b)[$abs]() - 180.0)[$abs]();
    }
    static matrixMultiply(row, matrix) {
      let a = row[$_get](0) * matrix[$_get](0)[$_get](0) + row[$_get](1) * matrix[$_get](0)[$_get](1) + row[$_get](2) * matrix[$_get](0)[$_get](2);
      let b = row[$_get](0) * matrix[$_get](1)[$_get](0) + row[$_get](1) * matrix[$_get](1)[$_get](1) + row[$_get](2) * matrix[$_get](1)[$_get](2);
      let c = row[$_get](0) * matrix[$_get](2)[$_get](0) + row[$_get](1) * matrix[$_get](2)[$_get](1) + row[$_get](2) * matrix[$_get](2)[$_get](2);
      return T.JSArrayOfdouble().of([a, b, c]);
    }
    static ['_#new#tearOff']() {
      return new math_utils.MathUtils.new();
    }
  };
  (math_utils.MathUtils.new = function() {
    ;
  }).prototype = math_utils.MathUtils.prototype;
  dart.addTypeTests(math_utils.MathUtils);
  dart.addTypeCaches(math_utils.MathUtils);
  dart.setStaticMethodSignature(math_utils.MathUtils, () => ['signum', 'lerp', 'clampInt', 'clampDouble', 'sanitizeDegreesInt', 'sanitizeDegreesDouble', 'differenceDegrees', 'matrixMultiply']);
  dart.setLibraryUri(math_utils.MathUtils, I[0]);
  dart.trackLibraries("packages/material_color_utilities/utils/math_utils.dart", {
    "package:material_color_utilities/utils/math_utils.dart": math_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["math_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;kBAsB2B;AACvB,UAAI,AAAI,GAAD,GAAG;AACR,cAAO,EAAC;;AAER,YAAI,AAAI,GAAD,KAAI;AACT,gBAAO;;AAEP,gBAAO;;;IAGb;gBAM0B,OAAc,MAAa;AACnD,YAAsB,AAAQ,EAAtB,AAAI,MAAE,MAAM,IAAI,KAAK,GAAG,AAAO,MAAD,GAAG,IAAI;IAC/C;oBAOwB,KAAS,KAAS;AACxC,UAAI,AAAM,KAAD,GAAG,GAAG;AACb,cAAO,IAAG;;AAEV,YAAI,AAAM,KAAD,GAAG,GAAG;AACb,gBAAO,IAAG;;;AAGd,YAAO,MAAK;IACd;uBAOiC,KAAY,KAAY;AACvD,UAAI,AAAM,KAAD,GAAG,GAAG;AACb,cAAO,IAAG;;AAEV,YAAI,AAAM,KAAD,GAAG,GAAG;AACb,gBAAO,IAAG;;;AAGd,YAAO,MAAK;IACd;8BAOkC;AACT,MAAvB,UAAU,AAAQ,OAAD,UAAG;AACpB,UAAI,AAAQ,OAAD,GAAG;AACW,QAAvB,UAAU,AAAQ,OAAD,GAAG;;AAEtB,YAAO,QAAO;IAChB;iCAO2C;AAChB,MAAzB,UAAU,AAAQ,OAAD,UAAG;AACpB,UAAI,AAAQ,OAAD,GAAG;AACa,QAAzB,UAAU,AAAQ,OAAD,GAAG;;AAEtB,YAAO,QAAO;IAChB;6BAGuC,GAAU;AAC/C,YAAO,AAAM,SAA0B,CAAf,AAAM,CAAb,AAAE,CAAD,GAAG,CAAC,YAAU;IAClC;0BAIiB,KAAwB;AACjC,cACF,AAAG,AAAI,AAAe,AAAwB,GAA3C,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG,KAAK,AAAG,AAAI,GAAJ,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG,KAAK,AAAG,AAAI,GAAJ,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG;AACjE,cACF,AAAG,AAAI,AAAe,AAAwB,GAA3C,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG,KAAK,AAAG,AAAI,GAAJ,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG,KAAK,AAAG,AAAI,GAAJ,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG;AACjE,cACF,AAAG,AAAI,AAAe,AAAwB,GAA3C,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG,KAAK,AAAG,AAAI,GAAJ,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG,KAAK,AAAG,AAAI,GAAJ,QAAC,KAAK,AAAM,AAAG,MAAH,QAAC,UAAG;AACvE,YAAO,yBAAC,CAAC,EAAE,CAAC,EAAE,CAAC;IACjB;;;;;;;EACF","file":"../../../../../../../../../../../packages/material_color_utilities/utils/math_utils.dart.lib.js"}');
  // Exports:
  return {
    utils__math_utils: math_utils
  };
}));

//# sourceMappingURL=math_utils.dart.lib.js.map
