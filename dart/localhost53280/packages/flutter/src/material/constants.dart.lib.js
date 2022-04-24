define(['dart_sdk', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__material__constants_dart(dart_sdk, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var constants = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 0
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  dart.defineLazy(constants, {
    /*constants.kMinInteractiveDimension*/get kMinInteractiveDimension() {
      return 48;
    },
    /*constants.kToolbarHeight*/get kToolbarHeight() {
      return 56;
    },
    /*constants.kBottomNavigationBarHeight*/get kBottomNavigationBarHeight() {
      return 56;
    },
    /*constants.kTextTabBarHeight*/get kTextTabBarHeight() {
      return 48;
    },
    /*constants.kThemeChangeDuration*/get kThemeChangeDuration() {
      return C[0] || CT.C0;
    },
    /*constants.kRadialReactionRadius*/get kRadialReactionRadius() {
      return 20;
    },
    /*constants.kRadialReactionDuration*/get kRadialReactionDuration() {
      return C[1] || CT.C1;
    },
    /*constants.kRadialReactionAlpha*/get kRadialReactionAlpha() {
      return 31;
    },
    /*constants.kTabScrollDuration*/get kTabScrollDuration() {
      return C[2] || CT.C2;
    },
    /*constants.kTabLabelPadding*/get kTabLabelPadding() {
      return C[3] || CT.C3;
    },
    /*constants.kMaterialListPadding*/get kMaterialListPadding() {
      return C[4] || CT.C4;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/constants.dart", {
    "package:flutter/src/material/constants.dart": constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAkBa,kCAAwB;;;MAGxB,wBAAc;;;MAGd,oCAA0B;;;MAG1B,2BAAiB;;;MAGf,8BAAoB;;;MAGtB,+BAAqB;;;MAGnB,iCAAuB;;;MAG5B,8BAAoB;;;MAGf,4BAAkB;;;MAGhB,0BAAgB;;;MAGhB,8BAAoB","file":"../../../../../../../../../../packages/flutter/src/material/constants.dart.lib.js"}');
  // Exports:
  return {
    src__material__constants: constants
  };
}));

//# sourceMappingURL=constants.dart.lib.js.map
