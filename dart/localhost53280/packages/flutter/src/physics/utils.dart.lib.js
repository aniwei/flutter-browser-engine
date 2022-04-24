define(['dart_sdk'], (function load__packages__flutter__src__physics__utils_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/physics/utils.dart"];
  utils.nearEqual = function nearEqual(a, b, epsilon) {
    if (!(epsilon !== null)) dart.assertFailed(null, I[0], 11, 10, "epsilon != null");
    if (!(epsilon >= 0.0)) dart.assertFailed(null, I[0], 12, 10, "epsilon >= 0.0");
    if (a == null || b == null) return a == b;
    return dart.notNull(a) > dart.notNull(b) - epsilon && dart.notNull(a) < dart.notNull(b) + epsilon || a == b;
  };
  utils.nearZero = function nearZero(a, epsilon) {
    return utils.nearEqual(a, 0.0, epsilon);
  };
  dart.trackLibraries("packages/flutter/src/physics/utils.dart", {
    "package:flutter/src/physics/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;uCASuB,GAAW,GAAU;AAC1C,UAAO,AAAQ,OAAD;AACd,UAAO,AAAQ,OAAD,IAAI;AAClB,QAAI,AAAE,CAAD,YAAY,AAAE,CAAD,UAChB,MAAO,AAAE,EAAD,IAAI,CAAC;AACf,UAAU,AAAwC,cAA1C,CAAC,IAAM,aAAF,CAAC,IAAG,OAAO,IAAS,aAAF,CAAC,IAAM,aAAF,CAAC,IAAG,OAAO,IAAM,AAAE,CAAD,IAAI,CAAC;EAC7D;qCAKqB,GAAU;AAAY,2BAAU,CAAC,EAAE,KAAK,OAAO;EAAC","file":"../../../../../../../../../../packages/flutter/src/physics/utils.dart.lib.js"}');
  // Exports:
  return {
    src__physics__utils: utils
  };
}));

//# sourceMappingURL=utils.dart.lib.js.map
