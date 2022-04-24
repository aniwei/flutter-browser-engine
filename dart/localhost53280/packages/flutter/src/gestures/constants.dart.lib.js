define(['dart_sdk'], (function load__packages__flutter__src__gestures__constants_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var constants = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 150000
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 40000
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 3000000
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var Duration__duration = dart.privateName(core, "Duration._duration");
  dart.defineLazy(constants, {
    /*constants.kPressTimeout*/get kPressTimeout() {
      return C[0] || CT.C0;
    },
    /*constants.kHoverTapTimeout*/get kHoverTapTimeout() {
      return C[1] || CT.C1;
    },
    /*constants.kHoverTapSlop*/get kHoverTapSlop() {
      return 20;
    },
    /*constants.kLongPressTimeout*/get kLongPressTimeout() {
      return C[2] || CT.C2;
    },
    /*constants.kDoubleTapTimeout*/get kDoubleTapTimeout() {
      return C[3] || CT.C3;
    },
    /*constants.kDoubleTapMinTime*/get kDoubleTapMinTime() {
      return C[4] || CT.C4;
    },
    /*constants.kDoubleTapTouchSlop*/get kDoubleTapTouchSlop() {
      return 18;
    },
    /*constants.kDoubleTapSlop*/get kDoubleTapSlop() {
      return 100;
    },
    /*constants.kZoomControlsTimeout*/get kZoomControlsTimeout() {
      return C[5] || CT.C5;
    },
    /*constants.kTouchSlop*/get kTouchSlop() {
      return 18;
    },
    /*constants.kPagingTouchSlop*/get kPagingTouchSlop() {
      return 36;
    },
    /*constants.kPanSlop*/get kPanSlop() {
      return 36;
    },
    /*constants.kScaleSlop*/get kScaleSlop() {
      return 18;
    },
    /*constants.kWindowTouchSlop*/get kWindowTouchSlop() {
      return 16;
    },
    /*constants.kMinFlingVelocity*/get kMinFlingVelocity() {
      return 50;
    },
    /*constants.kMaxFlingVelocity*/get kMaxFlingVelocity() {
      return 8000;
    },
    /*constants.kJumpTapTimeout*/get kJumpTapTimeout() {
      return C[2] || CT.C2;
    },
    /*constants.kPrecisePointerHitSlop*/get kPrecisePointerHitSlop() {
      return 1;
    },
    /*constants.kPrecisePointerPanSlop*/get kPrecisePointerPanSlop() {
      return 2;
    },
    /*constants.kPrecisePointerScaleSlop*/get kPrecisePointerScaleSlop() {
      return 1;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/constants.dart", {
    "package:flutter/src/gestures/constants.dart": constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MASe,uBAAa;;;MAMb,0BAAgB;;;MAMlB,uBAAa;;;MAGX,2BAAiB;;;MAMjB,2BAAiB;;;MAIjB,2BAAiB;;;MAKnB,6BAAmB;;;MAKnB,wBAAc;;;MAIZ,8BAAoB;;;MAYtB,oBAAU;;;MAOV,0BAAgB;;;MAIhB,kBAAQ;;;MAIR,oBAAU;;;MAKV,0BAAgB;;;MAKhB,2BAAiB;;;MAKjB,2BAAiB;;;MAKf,yBAAe;;;MAGjB,gCAAsB;;;MAGtB,gCAAsB;;;MAGtB,kCAAwB","file":"../../../../../../../../../../packages/flutter/src/gestures/constants.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__constants: constants
  };
}));

//# sourceMappingURL=constants.dart.lib.js.map
