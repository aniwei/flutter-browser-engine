define(['dart_sdk'], (function load__packages__flutter__src__foundation___isolates_web_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var _isolates_web = Object.create(dart.library);
  var isolates = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    FnAndQ__ToFutureOfR: () => (T.FnAndQ__ToFutureOfR = dart.constFn(dart.gFnType((Q, R) => [async.Future$(R), [dart.fnType(async.FutureOr$(R), [Q]), Q], {debugLabel: T.StringN()}, {}], (Q, R) => [T.ObjectN(), T.ObjectN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(_isolates_web.compute, T.FnAndQ__ToFutureOfR());
    }
  }, false);
  var C = [void 0];
  _isolates_web.compute = function compute(Q, R, callback, message, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    return async.async(R, function* compute() {
      yield null;
      return callback(message);
    });
  };
  dart.defineLazy(isolates, {
    /*isolates.compute*/get compute() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/_isolates_web.dart", {
    "package:flutter/src/foundation/_isolates_web.dart": _isolates_web,
    "package:flutter/src/foundation/isolates.dart": isolates
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["_isolates_web.dart","isolates.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;iDAOuD,UAAY;QAAmB;AAA/D;AAIX,MAAV,MAAM;AACN,YAAO,AAAQ,SAAA,CAAC,OAAO;IACzB;;;MCsCkB,gBAAO","file":"../../../../../../../../../../packages/flutter/src/foundation/_isolates_web.dart.lib.js"}');
  // Exports:
  return {
    src__foundation___isolates_web: _isolates_web,
    src__foundation__isolates: isolates
  };
}));

//# sourceMappingURL=_isolates_web.dart.lib.js.map
