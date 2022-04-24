define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__scheduler__debug_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var debug = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/scheduler/debug.dart"];
  debug.debugAssertAllSchedulerVarsUnset = function debugAssertAllSchedulerVarsUnset(reason) {
    if (!dart.fn(() => {
      if (debug.debugPrintBeginFrameBanner || debug.debugPrintEndFrameBanner) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, T.VoidTobool())()) dart.assertFailed(null, I[0], 59, 10, "() {\n    if (debugPrintBeginFrameBanner ||\n        debugPrintEndFrameBanner) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugPrintBeginFrameBanner*/get debugPrintBeginFrameBanner() {
      return false;
    },
    set debugPrintBeginFrameBanner(_) {},
    /*debug.debugPrintEndFrameBanner*/get debugPrintEndFrameBanner() {
      return false;
    },
    set debugPrintEndFrameBanner(_) {},
    /*debug.debugPrintScheduleFrameStacks*/get debugPrintScheduleFrameStacks() {
      return false;
    },
    set debugPrintScheduleFrameStacks(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/scheduler/debug.dart", {
    "package:flutter/src/scheduler/debug.dart": debug
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;qFAyD6C;AAC3C,SAAO,AAMN;AALC,UAAI,oCACA;AACwB,QAA1B,WAAM,4BAAa,MAAM;;AAE3B,YAAO;;AAET,UAAO;EACT;;MAnCK,gCAA0B;YAAG;;;MAM7B,8BAAwB;YAAG;;;MAW3B,mCAA6B;YAAG","file":"../../../../../../../../../../packages/flutter/src/scheduler/debug.dart.lib.js"}');
  // Exports:
  return {
    src__scheduler__debug: debug
  };
}));

//# sourceMappingURL=debug.dart.lib.js.map
