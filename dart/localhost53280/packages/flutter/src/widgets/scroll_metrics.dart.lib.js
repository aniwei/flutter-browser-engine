define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__widgets__scroll_metrics_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var scroll_metrics = Object.create(dart.library);
  var $clamp = dartx.clamp;
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/scroll_metrics.dart",
    "package:flutter/src/widgets/scroll_metrics.dart"
  ];
  scroll_metrics.ScrollMetrics = class ScrollMetrics extends core.Object {};
  scroll_metrics.ScrollMetrics[dart.mixinOn] = Object => class ScrollMetrics extends Object {
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2;
      let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
      let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
      let pixels = opts && 'pixels' in opts ? opts.pixels : null;
      let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      return new scroll_metrics.FixedScrollMetrics.new({minScrollExtent: (t0 = minScrollExtent, t0 == null ? this.hasContentDimensions ? this.minScrollExtent : null : t0), maxScrollExtent: (t0$ = maxScrollExtent, t0$ == null ? this.hasContentDimensions ? this.maxScrollExtent : null : t0$), pixels: (t0$0 = pixels, t0$0 == null ? this.hasPixels ? this.pixels : null : t0$0), viewportDimension: (t0$1 = viewportDimension, t0$1 == null ? this.hasViewportDimension ? this.viewportDimension : null : t0$1), axisDirection: (t0$2 = axisDirection, t0$2 == null ? this.axisDirection : t0$2)});
    }
    get axis() {
      return basic_types.axisDirectionToAxis(this.axisDirection);
    }
    get outOfRange() {
      return this.pixels < this.minScrollExtent || this.pixels > this.maxScrollExtent;
    }
    get atEdge() {
      return this.pixels === this.minScrollExtent || this.pixels === this.maxScrollExtent;
    }
    get extentBefore() {
      return math.max(core.double, this.pixels - this.minScrollExtent, 0.0);
    }
    get extentInside() {
      if (!(this.minScrollExtent <= this.maxScrollExtent)) dart.assertFailed(null, I[0], 116, 12, "minScrollExtent <= maxScrollExtent");
      return this.viewportDimension - (this.minScrollExtent - this.pixels)[$clamp](0, this.viewportDimension) - (this.pixels - this.maxScrollExtent)[$clamp](0, this.viewportDimension);
    }
    get extentAfter() {
      return math.max(core.double, this.maxScrollExtent - this.pixels, 0.0);
    }
  };
  (scroll_metrics.ScrollMetrics[dart.mixinNew] = function() {
  }).prototype = scroll_metrics.ScrollMetrics.prototype;
  dart.addTypeTests(scroll_metrics.ScrollMetrics);
  dart.addTypeCaches(scroll_metrics.ScrollMetrics);
  scroll_metrics.ScrollMetrics[dart.implements] = () => [core.Object];
  dart.setMethodSignature(scroll_metrics.ScrollMetrics, () => ({
    __proto__: dart.getMethods(scroll_metrics.ScrollMetrics.__proto__),
    copyWith: dart.fnType(scroll_metrics.ScrollMetrics, [], {axisDirection: dart.nullable(basic_types.AxisDirection), maxScrollExtent: dart.nullable(core.double), minScrollExtent: dart.nullable(core.double), pixels: dart.nullable(core.double), viewportDimension: dart.nullable(core.double)}, {})
  }));
  dart.setGetterSignature(scroll_metrics.ScrollMetrics, () => ({
    __proto__: dart.getGetters(scroll_metrics.ScrollMetrics.__proto__),
    axis: basic_types.Axis,
    outOfRange: core.bool,
    atEdge: core.bool,
    extentBefore: core.double,
    extentInside: core.double,
    extentAfter: core.double
  }));
  dart.setLibraryUri(scroll_metrics.ScrollMetrics, I[1]);
  var axisDirection$ = dart.privateName(scroll_metrics, "FixedScrollMetrics.axisDirection");
  var _minScrollExtent = dart.privateName(scroll_metrics, "_minScrollExtent");
  var _maxScrollExtent = dart.privateName(scroll_metrics, "_maxScrollExtent");
  var _pixels = dart.privateName(scroll_metrics, "_pixels");
  var _viewportDimension = dart.privateName(scroll_metrics, "_viewportDimension");
  const Object_ScrollMetrics$36 = class Object_ScrollMetrics extends core.Object {};
  (Object_ScrollMetrics$36.new = function() {
  }).prototype = Object_ScrollMetrics$36.prototype;
  dart.applyMixin(Object_ScrollMetrics$36, scroll_metrics.ScrollMetrics);
  scroll_metrics.FixedScrollMetrics = class FixedScrollMetrics extends Object_ScrollMetrics$36 {
    get axisDirection() {
      return this[axisDirection$];
    }
    set axisDirection(value) {
      super.axisDirection = value;
    }
    static ['_#new#tearOff'](opts) {
      let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
      let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
      let pixels = opts && 'pixels' in opts ? opts.pixels : null;
      let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      return new scroll_metrics.FixedScrollMetrics.new({minScrollExtent: minScrollExtent, maxScrollExtent: maxScrollExtent, pixels: pixels, viewportDimension: viewportDimension, axisDirection: axisDirection});
    }
    get minScrollExtent() {
      return dart.nullCheck(this[_minScrollExtent]);
    }
    get maxScrollExtent() {
      return dart.nullCheck(this[_maxScrollExtent]);
    }
    get hasContentDimensions() {
      return this[_minScrollExtent] != null && this[_maxScrollExtent] != null;
    }
    get pixels() {
      return dart.nullCheck(this[_pixels]);
    }
    get hasPixels() {
      return this[_pixels] != null;
    }
    get viewportDimension() {
      return dart.nullCheck(this[_viewportDimension]);
    }
    get hasViewportDimension() {
      return this[_viewportDimension] != null;
    }
    toString() {
      return object.objectRuntimeType(this, "FixedScrollMetrics") + "(" + this.extentBefore[$toStringAsFixed](1) + "..[" + this.extentInside[$toStringAsFixed](1) + "].." + this.extentAfter[$toStringAsFixed](1) + ")";
    }
  };
  (scroll_metrics.FixedScrollMetrics.new = function(opts) {
    let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
    let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
    let pixels = opts && 'pixels' in opts ? opts.pixels : null;
    let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
    this[axisDirection$] = axisDirection;
    this[_minScrollExtent] = minScrollExtent;
    this[_maxScrollExtent] = maxScrollExtent;
    this[_pixels] = pixels;
    this[_viewportDimension] = viewportDimension;
    ;
  }).prototype = scroll_metrics.FixedScrollMetrics.prototype;
  dart.addTypeTests(scroll_metrics.FixedScrollMetrics);
  dart.addTypeCaches(scroll_metrics.FixedScrollMetrics);
  dart.setGetterSignature(scroll_metrics.FixedScrollMetrics, () => ({
    __proto__: dart.getGetters(scroll_metrics.FixedScrollMetrics.__proto__),
    minScrollExtent: core.double,
    maxScrollExtent: core.double,
    hasContentDimensions: core.bool,
    pixels: core.double,
    hasPixels: core.bool,
    viewportDimension: core.double,
    hasViewportDimension: core.bool
  }));
  dart.setLibraryUri(scroll_metrics.FixedScrollMetrics, I[1]);
  dart.setFieldSignature(scroll_metrics.FixedScrollMetrics, () => ({
    __proto__: dart.getFields(scroll_metrics.FixedScrollMetrics.__proto__),
    [_minScrollExtent]: dart.finalFieldType(dart.nullable(core.double)),
    [_maxScrollExtent]: dart.finalFieldType(dart.nullable(core.double)),
    [_pixels]: dart.finalFieldType(dart.nullable(core.double)),
    [_viewportDimension]: dart.finalFieldType(dart.nullable(core.double)),
    axisDirection: dart.finalFieldType(basic_types.AxisDirection)
  }));
  dart.defineExtensionMethods(scroll_metrics.FixedScrollMetrics, ['toString']);
  dart.trackLibraries("packages/flutter/src/widgets/scroll_metrics.dart", {
    "package:flutter/src/widgets/scroll_metrics.dart": scroll_metrics
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_metrics.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;UA2CY;UACA;UACA;UACA;UACO;AAEf,YAAO,8DAC4B,KAAhB,eAAe,EAAf,aAAoB,4BAA4B,uBAAkB,8BAClD,MAAhB,eAAe,EAAf,cAAoB,4BAA4B,uBAAkB,sBACpE,OAAP,MAAM,EAAN,eAAW,iBAAiB,cAAS,kCACR,OAAlB,iBAAiB,EAAjB,eAAsB,4BAA4B,yBAAoB,8BAC5D,OAAd,aAAa,EAAb,eAAsB;IAEzC;;AAqCiB,6CAAoB;IAAc;;AAI5B,YAAA,AAAO,AAAkB,eAAhB,wBAAmB,AAAO,cAAE;IAAe;;AAIxD,YAAA,AAAO,AAAmB,iBAAhB,wBAAmB,AAAO,gBAAG;IAAe;;AAI9C,YAAK,uBAAI,AAAO,cAAE,sBAAiB;IAAI;;AAUhE,YAAO,AAAgB,wBAAG;AAC1B,YAAO,AAEL,AAEA,0BAF6B,CAA1B,AAAgB,uBAAE,qBAAc,GAAG,0BAET,CAA1B,AAAO,cAAE,8BAAuB,GAAG;IAC1C;;AAI0B,YAAK,uBAAI,AAAgB,uBAAE,aAAQ;IAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6C7C;;;;;;;;;;;;;;;AAzBU,YAAgB,gBAAhB;IAAiB;;AAIjB,YAAgB,gBAAhB;IAAiB;;AAId,YAAA,AAAyB,mCAAG;IAAwB;;AAGhE,YAAO,gBAAP;IAAQ;;AAIP,YAAA,AAAQ;IAAO;;AAGL,YAAkB,gBAAlB;IAAmB;;AAIlB,YAAA,AAAmB;IAAO;;AAOzD,YAAU,AAA4J,0BAA1I,MAAM,wBAAsB,MAAG,AAAa,oCAAgB,KAAG,QAAK,AAAa,oCAAgB,KAAG,QAAK,AAAY,mCAAgB,KAAG;IACtK;;;QAzCmB;QACA;QACA;QACA;QACH;;IACM,yBAAE,eAAe;IACjB,yBAAE,eAAe;IAC1B,gBAAE,MAAM;IACG,2BAAE,iBAAiB","file":"../../../../../../../../../../packages/flutter/src/widgets/scroll_metrics.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__scroll_metrics: scroll_metrics
  };
}));

//# sourceMappingURL=scroll_metrics.dart.lib.js.map
