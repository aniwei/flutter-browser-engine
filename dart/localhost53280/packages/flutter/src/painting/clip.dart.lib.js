define(['dart_sdk'], (function load__packages__flutter__src__painting__clip_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var clip = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    boolTovoid: () => (T.boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAlias",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAliasWithSaveLayer",
        [_Enum_index]: 3
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/clip.dart",
    "package:flutter/src/painting/clip.dart"
  ];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _clipAndPaint = dart.privateName(clip, "_clipAndPaint");
  clip.ClipContext = class ClipContext extends core.Object {
    [_clipAndPaint](canvasClipCall, clipBehavior, bounds, painter) {
      if (!(canvasClipCall !== null)) dart.assertFailed(null, I[0], 14, 12, "canvasClipCall != null");
      this.canvas.save();
      switch (clipBehavior) {
        case C[0] || CT.C0:
        {
          break;
        }
        case C[1] || CT.C1:
        {
          canvasClipCall(false);
          break;
        }
        case C[2] || CT.C2:
        {
          canvasClipCall(true);
          break;
        }
        case C[3] || CT.C3:
        {
          canvasClipCall(true);
          this.canvas.saveLayer(bounds, ui.Paint.new());
          break;
        }
      }
      painter();
      if (clipBehavior === ui.Clip.antiAliasWithSaveLayer) {
        this.canvas.restore();
      }
      this.canvas.restore();
    }
    clipPathAndPaint(path, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAlias => this.canvas.clipPath(path, {doAntiAlias: doAntiAlias}), T.boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRRectAndPaint(rrect, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAlias => this.canvas.clipRRect(rrect, {doAntiAlias: doAntiAlias}), T.boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRectAndPaint(rect, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAlias => this.canvas.clipRect(rect, {doAntiAlias: doAntiAlias}), T.boolTovoid()), clipBehavior, bounds, painter);
    }
  };
  (clip.ClipContext.new = function() {
    ;
  }).prototype = clip.ClipContext.prototype;
  dart.addTypeTests(clip.ClipContext);
  dart.addTypeCaches(clip.ClipContext);
  dart.setMethodSignature(clip.ClipContext, () => ({
    __proto__: dart.getMethods(clip.ClipContext.__proto__),
    [_clipAndPaint]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.bool]), ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipPathAndPaint: dart.fnType(dart.void, [ui.Path, ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipRRectAndPaint: dart.fnType(dart.void, [ui.RRect, ui.Clip, ui.Rect, dart.fnType(dart.void, [])]),
    clipRectAndPaint: dart.fnType(dart.void, [ui.Rect, ui.Clip, ui.Rect, dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(clip.ClipContext, I[1]);
  dart.trackLibraries("packages/flutter/src/painting/clip.dart", {
    "package:flutter/src/painting/clip.dart": clip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAYqD,gBAAqB,cAAmB,QAAqB;AAC9G,YAAO,AAAe,cAAD;AACR,MAAb,AAAO;AACP,cAAQ,YAAY;;;AAEhB;;;;AAEqB,UAArB,AAAc,cAAA,CAAC;AACf;;;;AAEoB,UAApB,AAAc,cAAA,CAAC;AACf;;;;AAEoB,UAApB,AAAc,cAAA,CAAC;AACkB,UAAjC,AAAO,sBAAU,MAAM,EAAE;AACzB;;;AAEK,MAAT,AAAO,OAAA;AACP,UAAI,AAAa,YAAD,KAAS;AACP,QAAhB,AAAO;;AAEO,MAAhB,AAAO;IACT;qBAM2B,MAAW,cAAmB,QAAqB;AACuC,MAAnH,oBAAc,QAAM,eAAgB,AAAO,qBAAS,IAAI,gBAAe,WAAW,qBAAG,YAAY,EAAE,MAAM,EAAE,OAAO;IACpH;sBAM6B,OAAY,cAAmB,QAAqB;AACsC,MAArH,oBAAc,QAAM,eAAgB,AAAO,sBAAU,KAAK,gBAAe,WAAW,qBAAG,YAAY,EAAE,MAAM,EAAE,OAAO;IACtH;qBAM2B,MAAW,cAAmB,QAAqB;AACuC,MAAnH,oBAAc,QAAM,eAAgB,AAAO,qBAAS,IAAI,gBAAe,WAAW,qBAAG,YAAY,EAAE,MAAM,EAAE,OAAO;IACpH;;;;EACF","file":"../../../../../../../../../../packages/flutter/src/painting/clip.dart.lib.js"}');
  // Exports:
  return {
    src__painting__clip: clip
  };
}));

//# sourceMappingURL=clip.dart.lib.js.map
