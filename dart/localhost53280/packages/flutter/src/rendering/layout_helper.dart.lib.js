define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__rendering__layout_helper_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  var layout_helper = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/rendering/layout_helper.dart"];
  layout_helper.ChildLayoutHelper = class ChildLayoutHelper extends core.Object {
    static ['_#_#tearOff']() {
      return new layout_helper.ChildLayoutHelper.__();
    }
    static dryLayoutChild(child, constraints) {
      return child.getDryLayout(constraints);
    }
    static layoutChild(child, constraints) {
      child.layout(constraints, {parentUsesSize: true});
      return child.size;
    }
  };
  (layout_helper.ChildLayoutHelper.__ = function() {
    ;
  }).prototype = layout_helper.ChildLayoutHelper.prototype;
  dart.addTypeTests(layout_helper.ChildLayoutHelper);
  dart.addTypeCaches(layout_helper.ChildLayoutHelper);
  dart.setStaticMethodSignature(layout_helper.ChildLayoutHelper, () => ['dryLayoutChild', 'layoutChild']);
  dart.setLibraryUri(layout_helper.ChildLayoutHelper, I[0]);
  dart.trackLibraries("packages/flutter/src/rendering/layout_helper.dart", {
    "package:flutter/src/rendering/layout_helper.dart": layout_helper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["layout_helper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;0BAqCuC,OAAsB;AACzD,YAAO,AAAM,MAAD,cAAc,WAAW;IACvC;uBAekC,OAAsB;AACP,MAA/C,AAAM,KAAD,QAAQ,WAAW,mBAAkB;AAC1C,YAAO,AAAM,MAAD;IACd;;;;EAnC2B","file":"../../../../../../../../../../packages/flutter/src/rendering/layout_helper.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__layout_helper: layout_helper
  };
}));

//# sourceMappingURL=layout_helper.dart.lib.js.map
