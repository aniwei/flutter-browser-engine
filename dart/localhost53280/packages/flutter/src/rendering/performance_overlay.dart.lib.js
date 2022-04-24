define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__rendering__performance_overlay_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  var performance_overlay = Object.create(dart.library);
  var $leftShift = dartx['<<'];
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: performance_overlay.PerformanceOverlayOption.prototype,
        [_Enum__name]: "displayRasterizerStatistics",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: performance_overlay.PerformanceOverlayOption.prototype,
        [_Enum__name]: "visualizeRasterizerStatistics",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: performance_overlay.PerformanceOverlayOption.prototype,
        [_Enum__name]: "displayEngineStatistics",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: performance_overlay.PerformanceOverlayOption.prototype,
        [_Enum__name]: "visualizeEngineStatistics",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], performance_overlay.PerformanceOverlayOption);
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "package:flutter/src/rendering/performance_overlay.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/performance_overlay.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  performance_overlay.PerformanceOverlayOption = class PerformanceOverlayOption extends core._Enum {
    toString() {
      return "PerformanceOverlayOption." + this[_name];
    }
  };
  (performance_overlay.PerformanceOverlayOption.new = function(index, name) {
    performance_overlay.PerformanceOverlayOption.__proto__.new.call(this, index, name);
    ;
  }).prototype = performance_overlay.PerformanceOverlayOption.prototype;
  dart.addTypeTests(performance_overlay.PerformanceOverlayOption);
  dart.addTypeCaches(performance_overlay.PerformanceOverlayOption);
  dart.setLibraryUri(performance_overlay.PerformanceOverlayOption, I[0]);
  dart.setStaticFieldSignature(performance_overlay.PerformanceOverlayOption, () => ['values', 'displayRasterizerStatistics', 'visualizeRasterizerStatistics', 'displayEngineStatistics', 'visualizeEngineStatistics']);
  dart.defineExtensionMethods(performance_overlay.PerformanceOverlayOption, ['toString']);
  performance_overlay.PerformanceOverlayOption.displayRasterizerStatistics = C[0] || CT.C0;
  performance_overlay.PerformanceOverlayOption.visualizeRasterizerStatistics = C[1] || CT.C1;
  performance_overlay.PerformanceOverlayOption.displayEngineStatistics = C[2] || CT.C2;
  performance_overlay.PerformanceOverlayOption.visualizeEngineStatistics = C[3] || CT.C3;
  performance_overlay.PerformanceOverlayOption.values = C[4] || CT.C4;
  var _optionsMask = dart.privateName(performance_overlay, "_optionsMask");
  var _rasterizerThreshold = dart.privateName(performance_overlay, "_rasterizerThreshold");
  var _checkerboardRasterCacheImages = dart.privateName(performance_overlay, "_checkerboardRasterCacheImages");
  var _checkerboardOffscreenLayers = dart.privateName(performance_overlay, "_checkerboardOffscreenLayers");
  var _intrinsicHeight = dart.privateName(performance_overlay, "_intrinsicHeight");
  performance_overlay.RenderPerformanceOverlay = class RenderPerformanceOverlay extends box.RenderBox {
    static ['_#new#tearOff'](opts) {
      let optionsMask = opts && 'optionsMask' in opts ? opts.optionsMask : 0;
      let rasterizerThreshold = opts && 'rasterizerThreshold' in opts ? opts.rasterizerThreshold : 0;
      let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
      let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
      return new performance_overlay.RenderPerformanceOverlay.new({optionsMask: optionsMask, rasterizerThreshold: rasterizerThreshold, checkerboardRasterCacheImages: checkerboardRasterCacheImages, checkerboardOffscreenLayers: checkerboardOffscreenLayers});
    }
    get optionsMask() {
      return this[_optionsMask];
    }
    set optionsMask(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 84, 12, "value != null");
      if (value === this[_optionsMask]) return;
      this[_optionsMask] = value;
      this.markNeedsPaint();
    }
    get rasterizerThreshold() {
      return this[_rasterizerThreshold];
    }
    set rasterizerThreshold(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 97, 12, "value != null");
      if (value === this[_rasterizerThreshold]) return;
      this[_rasterizerThreshold] = value;
      this.markNeedsPaint();
    }
    get checkerboardRasterCacheImages() {
      return this[_checkerboardRasterCacheImages];
    }
    set checkerboardRasterCacheImages(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 108, 12, "value != null");
      if (value === this[_checkerboardRasterCacheImages]) return;
      this[_checkerboardRasterCacheImages] = value;
      this.markNeedsPaint();
    }
    get checkerboardOffscreenLayers() {
      return this[_checkerboardOffscreenLayers];
    }
    set checkerboardOffscreenLayers(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 119, 12, "value != null");
      if (value === this[_checkerboardOffscreenLayers]) return;
      this[_checkerboardOffscreenLayers] = value;
      this.markNeedsPaint();
    }
    get sizedByParent() {
      return true;
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    computeMinIntrinsicWidth(height) {
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      return 0.0;
    }
    get [_intrinsicHeight]() {
      let result = 0.0;
      if ((this.optionsMask | (1)[$leftShift](performance_overlay.PerformanceOverlayOption.displayRasterizerStatistics.index)) >>> 0 > 0 || (this.optionsMask | (1)[$leftShift](performance_overlay.PerformanceOverlayOption.visualizeRasterizerStatistics.index)) >>> 0 > 0) result = result + 80;
      if ((this.optionsMask | (1)[$leftShift](performance_overlay.PerformanceOverlayOption.displayEngineStatistics.index)) >>> 0 > 0 || (this.optionsMask | (1)[$leftShift](performance_overlay.PerformanceOverlayOption.visualizeEngineStatistics.index)) >>> 0 > 0) result = result + 80;
      return result;
    }
    computeMinIntrinsicHeight(width) {
      return this[_intrinsicHeight];
    }
    computeMaxIntrinsicHeight(width) {
      return this[_intrinsicHeight];
    }
    computeDryLayout(constraints) {
      return constraints.constrain(new ui.Size.new(1 / 0, this[_intrinsicHeight]));
    }
    paint(context, offset) {
      if (!this.needsCompositing) dart.assertFailed(null, I[1], 171, 12, "needsCompositing");
      context.addLayer(new layer.PerformanceOverlayLayer.new({overlayRect: new ui.Rect.fromLTWH(offset.dx, offset.dy, this.size.width, this.size.height), optionsMask: this.optionsMask, rasterizerThreshold: this.rasterizerThreshold, checkerboardRasterCacheImages: this.checkerboardRasterCacheImages, checkerboardOffscreenLayers: this.checkerboardOffscreenLayers}));
    }
  };
  (performance_overlay.RenderPerformanceOverlay.new = function(opts) {
    let optionsMask = opts && 'optionsMask' in opts ? opts.optionsMask : 0;
    let rasterizerThreshold = opts && 'rasterizerThreshold' in opts ? opts.rasterizerThreshold : 0;
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
    if (!(optionsMask !== null)) dart.assertFailed(null, I[1], 70, 15, "optionsMask != null");
    if (!(rasterizerThreshold !== null)) dart.assertFailed(null, I[1], 71, 15, "rasterizerThreshold != null");
    if (!(checkerboardRasterCacheImages !== null)) dart.assertFailed(null, I[1], 72, 15, "checkerboardRasterCacheImages != null");
    if (!(checkerboardOffscreenLayers !== null)) dart.assertFailed(null, I[1], 73, 15, "checkerboardOffscreenLayers != null");
    this[_optionsMask] = optionsMask;
    this[_rasterizerThreshold] = rasterizerThreshold;
    this[_checkerboardRasterCacheImages] = checkerboardRasterCacheImages;
    this[_checkerboardOffscreenLayers] = checkerboardOffscreenLayers;
    performance_overlay.RenderPerformanceOverlay.__proto__.new.call(this);
    ;
  }).prototype = performance_overlay.RenderPerformanceOverlay.prototype;
  dart.addTypeTests(performance_overlay.RenderPerformanceOverlay);
  dart.addTypeCaches(performance_overlay.RenderPerformanceOverlay);
  dart.setGetterSignature(performance_overlay.RenderPerformanceOverlay, () => ({
    __proto__: dart.getGetters(performance_overlay.RenderPerformanceOverlay.__proto__),
    optionsMask: core.int,
    rasterizerThreshold: core.int,
    checkerboardRasterCacheImages: core.bool,
    checkerboardOffscreenLayers: core.bool,
    [_intrinsicHeight]: core.double
  }));
  dart.setSetterSignature(performance_overlay.RenderPerformanceOverlay, () => ({
    __proto__: dart.getSetters(performance_overlay.RenderPerformanceOverlay.__proto__),
    optionsMask: core.int,
    rasterizerThreshold: core.int,
    checkerboardRasterCacheImages: core.bool,
    checkerboardOffscreenLayers: core.bool
  }));
  dart.setLibraryUri(performance_overlay.RenderPerformanceOverlay, I[0]);
  dart.setFieldSignature(performance_overlay.RenderPerformanceOverlay, () => ({
    __proto__: dart.getFields(performance_overlay.RenderPerformanceOverlay.__proto__),
    [_optionsMask]: dart.fieldType(core.int),
    [_rasterizerThreshold]: dart.fieldType(core.int),
    [_checkerboardRasterCacheImages]: dart.fieldType(core.bool),
    [_checkerboardOffscreenLayers]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/performance_overlay.dart", {
    "package:flutter/src/rendering/performance_overlay.dart": performance_overlay
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["performance_overlay.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0CA;;sEAhCK;;;EAgCL;;;;;;;;;;;;;;;;;;;;;;;;;AAsCyB;IAAY;oBAEf;AAClB,YAAO,AAAM,KAAD;AACZ,UAAI,AAAM,KAAD,KAAI,oBACX;AACkB,MAApB,qBAAe,KAAK;AACJ,MAAhB;IACF;;AAK+B;IAAoB;4BAEvB;AAC1B,YAAO,AAAM,KAAD;AACZ,UAAI,AAAM,KAAD,KAAI,4BACX;AAC0B,MAA5B,6BAAuB,KAAK;AACZ,MAAhB;IACF;;AAG0C;IAA8B;sCAEjC;AACrC,YAAO,AAAM,KAAD;AACZ,UAAI,AAAM,KAAD,KAAI,sCACX;AACoC,MAAtC,uCAAiC,KAAK;AACtB,MAAhB;IACF;;AAGwC;IAA4B;oCAE/B;AACnC,YAAO,AAAM,KAAD;AACZ,UAAI,AAAM,KAAD,KAAI,oCACX;AACkC,MAApC,qCAA+B,KAAK;AACpB,MAAhB;IACF;;AAG0B;IAAI;;AAGK;IAAI;6BAGA;AACrC,YAAO;IACT;6BAGuC;AACrC,YAAO;IACT;;AAIS,mBAAS;AAChB,UAAiB,AAAoE,CAAhF,mBAAiB,CAAF,eAA8B,AAA4B,yFAAS,KACtE,AAAsE,CAAlF,mBAAiB,CAAF,eAA8B,AAA8B,2FAAS,GACvF,AAA6B,SAA7B,AAAO,MAAD;AACR,UAAiB,AAAgE,CAA5E,mBAAiB,CAAF,eAA8B,AAAwB,qFAAS,KAClE,AAAkE,CAA9E,mBAAiB,CAAF,eAA8B,AAA0B,uFAAS,GACnF,AAA6B,SAA7B,AAAO,MAAD;AACR,YAAO,OAAM;IACf;8BAGwC;AACtC,YAAO;IACT;8BAGwC;AACtC,YAAO;IACT;qBAGqC;AACnC,YAAO,AAAY,YAAD,WAAW,uBAAsB;IACrD;UAG2B,SAAgB;AACzC,WAAO;AAOL,MANF,AAAQ,OAAD,UAAU,oDACG,qBAAS,AAAO,MAAD,KAAK,AAAO,MAAD,KAAK,AAAK,iBAAO,AAAK,gCACrD,uCACQ,yDACU,iEACF;IAEjC;;;QAjHM;QACA;QACC;QACA;UACK,AAAY,WAAD;UACX,AAAoB,mBAAD;UACnB,AAA8B,6BAAD;UAC7B,AAA4B,2BAAD;IACrB,qBAAE,WAAW;IACL,6BAAE,mBAAmB;IACX,uCAAE,6BAA6B;IACjC,qCAAE,2BAA2B;AAZ/D;;EAY+D","file":"../../../../../../../../../../packages/flutter/src/rendering/performance_overlay.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__performance_overlay: performance_overlay
  };
}));

//# sourceMappingURL=performance_overlay.dart.lib.js.map
