define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__debug_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
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
  var I = ["file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/debug.dart"];
  debug.debugAssertAllGesturesVarsUnset = function debugAssertAllGesturesVarsUnset(reason) {
    if (!dart.fn(() => {
      if (debug.debugPrintHitTestResults || debug.debugPrintGestureArenaDiagnostics || debug.debugPrintRecognizerCallbacksTrace || debug.debugPrintResamplingMargin) dart.throw(assertions.FlutterError.new(reason));
      return true;
    }, T.VoidTobool())()) dart.assertFailed(null, I[0], 75, 10, "() {\n    if (debugPrintHitTestResults ||\n        debugPrintGestureArenaDiagnostics ||\n        debugPrintRecognizerCallbacksTrace ||\n        debugPrintResamplingMargin)\n      throw FlutterError(reason);\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugPrintHitTestResults*/get debugPrintHitTestResults() {
      return false;
    },
    set debugPrintHitTestResults(_) {},
    /*debug.debugPrintMouseHoverEvents*/get debugPrintMouseHoverEvents() {
      return false;
    },
    set debugPrintMouseHoverEvents(_) {},
    /*debug.debugPrintGestureArenaDiagnostics*/get debugPrintGestureArenaDiagnostics() {
      return false;
    },
    set debugPrintGestureArenaDiagnostics(_) {},
    /*debug.debugPrintRecognizerCallbacksTrace*/get debugPrintRecognizerCallbacksTrace() {
      return false;
    },
    set debugPrintRecognizerCallbacksTrace(_) {},
    /*debug.debugPrintResamplingMargin*/get debugPrintResamplingMargin() {
      return false;
    },
    set debugPrintResamplingMargin(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/debug.dart", {
    "package:flutter/src/gestures/debug.dart": debug
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;mFAyE4C;AAC1C,SAAO,AAON;AANC,UAAI,kCACA,2CACA,4CACA,kCACF,AAA0B,WAApB,4BAAa,MAAM;AAC3B,YAAO;;AAET,UAAO;EACT;;MAnEK,8BAAwB;YAAG;;;MAS3B,gCAA0B;YAAG;;;MAW7B,uCAAiC;YAAG;;;MAcpC,wCAAkC;YAAG;;;MAcrC,gCAA0B;YAAG","file":"../../../../../../../../../../packages/flutter/src/gestures/debug.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__debug: debug
  };
}));

//# sourceMappingURL=debug.dart.lib.js.map
