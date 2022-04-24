define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver_multi_box_adaptor.dart'], (function load__packages__flutter__src__rendering__sliver_grid_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver_multi_box_adaptor = packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart.src__rendering__sliver_multi_box_adaptor;
  var sliver_grid = Object.create(dart.library);
  var $join = dartx.join;
  var $truncate = dartx.truncate;
  var $ceil = dartx.ceil;
  var $modulo = dartx['%'];
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  var $isFinite = dartx.isFinite;
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flutter/src/rendering/sliver_grid.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/sliver_grid.dart"
  ];
  var scrollOffset$ = dart.privateName(sliver_grid, "SliverGridGeometry.scrollOffset");
  var crossAxisOffset$ = dart.privateName(sliver_grid, "SliverGridGeometry.crossAxisOffset");
  var mainAxisExtent$ = dart.privateName(sliver_grid, "SliverGridGeometry.mainAxisExtent");
  var crossAxisExtent$ = dart.privateName(sliver_grid, "SliverGridGeometry.crossAxisExtent");
  sliver_grid.SliverGridGeometry = class SliverGridGeometry extends core.Object {
    get scrollOffset() {
      return this[scrollOffset$];
    }
    set scrollOffset(value) {
      super.scrollOffset = value;
    }
    get crossAxisOffset() {
      return this[crossAxisOffset$];
    }
    set crossAxisOffset(value) {
      super.crossAxisOffset = value;
    }
    get mainAxisExtent() {
      return this[mainAxisExtent$];
    }
    set mainAxisExtent(value) {
      super.mainAxisExtent = value;
    }
    get crossAxisExtent() {
      return this[crossAxisExtent$];
    }
    set crossAxisExtent(value) {
      super.crossAxisExtent = value;
    }
    static ['_#new#tearOff'](opts) {
      let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
      let crossAxisOffset = opts && 'crossAxisOffset' in opts ? opts.crossAxisOffset : null;
      let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
      let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
      return new sliver_grid.SliverGridGeometry.new({scrollOffset: scrollOffset, crossAxisOffset: crossAxisOffset, mainAxisExtent: mainAxisExtent, crossAxisExtent: crossAxisExtent});
    }
    get trailingScrollOffset() {
      return this.scrollOffset + this.mainAxisExtent;
    }
    getBoxConstraints(constraints) {
      return constraints.asBoxConstraints({minExtent: this.mainAxisExtent, maxExtent: this.mainAxisExtent, crossAxisExtent: this.crossAxisExtent});
    }
    toString() {
      let properties = T.JSArrayOfString().of(["scrollOffset: " + dart.str(this.scrollOffset), "crossAxisOffset: " + dart.str(this.crossAxisOffset), "mainAxisExtent: " + dart.str(this.mainAxisExtent), "crossAxisExtent: " + dart.str(this.crossAxisExtent)]);
      return "SliverGridGeometry(" + properties[$join](", ") + ")";
    }
  };
  (sliver_grid.SliverGridGeometry.new = function(opts) {
    let scrollOffset = opts && 'scrollOffset' in opts ? opts.scrollOffset : null;
    let crossAxisOffset = opts && 'crossAxisOffset' in opts ? opts.crossAxisOffset : null;
    let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
    let crossAxisExtent = opts && 'crossAxisExtent' in opts ? opts.crossAxisExtent : null;
    this[scrollOffset$] = scrollOffset;
    this[crossAxisOffset$] = crossAxisOffset;
    this[mainAxisExtent$] = mainAxisExtent;
    this[crossAxisExtent$] = crossAxisExtent;
    ;
  }).prototype = sliver_grid.SliverGridGeometry.prototype;
  dart.addTypeTests(sliver_grid.SliverGridGeometry);
  dart.addTypeCaches(sliver_grid.SliverGridGeometry);
  dart.setMethodSignature(sliver_grid.SliverGridGeometry, () => ({
    __proto__: dart.getMethods(sliver_grid.SliverGridGeometry.__proto__),
    getBoxConstraints: dart.fnType(box.BoxConstraints, [sliver.SliverConstraints])
  }));
  dart.setGetterSignature(sliver_grid.SliverGridGeometry, () => ({
    __proto__: dart.getGetters(sliver_grid.SliverGridGeometry.__proto__),
    trailingScrollOffset: core.double
  }));
  dart.setLibraryUri(sliver_grid.SliverGridGeometry, I[0]);
  dart.setFieldSignature(sliver_grid.SliverGridGeometry, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridGeometry.__proto__),
    scrollOffset: dart.finalFieldType(core.double),
    crossAxisOffset: dart.finalFieldType(core.double),
    mainAxisExtent: dart.finalFieldType(core.double),
    crossAxisExtent: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(sliver_grid.SliverGridGeometry, ['toString']);
  sliver_grid.SliverGridLayout = class SliverGridLayout extends core.Object {};
  (sliver_grid.SliverGridLayout.new = function() {
    ;
  }).prototype = sliver_grid.SliverGridLayout.prototype;
  dart.addTypeTests(sliver_grid.SliverGridLayout);
  dart.addTypeCaches(sliver_grid.SliverGridLayout);
  dart.setLibraryUri(sliver_grid.SliverGridLayout, I[0]);
  var crossAxisCount$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.crossAxisCount");
  var mainAxisStride$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.mainAxisStride");
  var crossAxisStride$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.crossAxisStride");
  var childMainAxisExtent$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.childMainAxisExtent");
  var childCrossAxisExtent$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.childCrossAxisExtent");
  var reverseCrossAxis$ = dart.privateName(sliver_grid, "SliverGridRegularTileLayout.reverseCrossAxis");
  var _getOffsetFromStartInCrossAxis = dart.privateName(sliver_grid, "_getOffsetFromStartInCrossAxis");
  sliver_grid.SliverGridRegularTileLayout = class SliverGridRegularTileLayout extends sliver_grid.SliverGridLayout {
    get crossAxisCount() {
      return this[crossAxisCount$];
    }
    set crossAxisCount(value) {
      super.crossAxisCount = value;
    }
    get mainAxisStride() {
      return this[mainAxisStride$];
    }
    set mainAxisStride(value) {
      super.mainAxisStride = value;
    }
    get crossAxisStride() {
      return this[crossAxisStride$];
    }
    set crossAxisStride(value) {
      super.crossAxisStride = value;
    }
    get childMainAxisExtent() {
      return this[childMainAxisExtent$];
    }
    set childMainAxisExtent(value) {
      super.childMainAxisExtent = value;
    }
    get childCrossAxisExtent() {
      return this[childCrossAxisExtent$];
    }
    set childCrossAxisExtent(value) {
      super.childCrossAxisExtent = value;
    }
    get reverseCrossAxis() {
      return this[reverseCrossAxis$];
    }
    set reverseCrossAxis(value) {
      super.reverseCrossAxis = value;
    }
    static ['_#new#tearOff'](opts) {
      let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
      let mainAxisStride = opts && 'mainAxisStride' in opts ? opts.mainAxisStride : null;
      let crossAxisStride = opts && 'crossAxisStride' in opts ? opts.crossAxisStride : null;
      let childMainAxisExtent = opts && 'childMainAxisExtent' in opts ? opts.childMainAxisExtent : null;
      let childCrossAxisExtent = opts && 'childCrossAxisExtent' in opts ? opts.childCrossAxisExtent : null;
      let reverseCrossAxis = opts && 'reverseCrossAxis' in opts ? opts.reverseCrossAxis : null;
      return new sliver_grid.SliverGridRegularTileLayout.new({crossAxisCount: crossAxisCount, mainAxisStride: mainAxisStride, crossAxisStride: crossAxisStride, childMainAxisExtent: childMainAxisExtent, childCrossAxisExtent: childCrossAxisExtent, reverseCrossAxis: reverseCrossAxis});
    }
    getMinChildIndexForScrollOffset(scrollOffset) {
      return this.mainAxisStride > 1e-10 ? this.crossAxisCount * (scrollOffset / this.mainAxisStride)[$truncate]() : 0;
    }
    getMaxChildIndexForScrollOffset(scrollOffset) {
      if (this.mainAxisStride > 0.0) {
        let mainAxisCount = (scrollOffset / this.mainAxisStride)[$ceil]();
        return math.max(core.int, 0, this.crossAxisCount * mainAxisCount - 1);
      }
      return 0;
    }
    [_getOffsetFromStartInCrossAxis](crossAxisStart) {
      if (this.reverseCrossAxis) return this.crossAxisCount * this.crossAxisStride - crossAxisStart - this.childCrossAxisExtent - (this.crossAxisStride - this.childCrossAxisExtent);
      return crossAxisStart;
    }
    getGeometryForChildIndex(index) {
      let crossAxisStart = index[$modulo](this.crossAxisCount) * this.crossAxisStride;
      return new sliver_grid.SliverGridGeometry.new({scrollOffset: (index / this.crossAxisCount)[$truncate]() * this.mainAxisStride, crossAxisOffset: this[_getOffsetFromStartInCrossAxis](crossAxisStart), mainAxisExtent: this.childMainAxisExtent, crossAxisExtent: this.childCrossAxisExtent});
    }
    computeMaxScrollOffset(childCount) {
      if (!(childCount !== null)) dart.assertFailed(null, I[1], 228, 12, "childCount != null");
      let mainAxisCount = ((childCount - 1) / this.crossAxisCount)[$truncate]() + 1;
      let mainAxisSpacing = this.mainAxisStride - this.childMainAxisExtent;
      return this.mainAxisStride * mainAxisCount - mainAxisSpacing;
    }
  };
  (sliver_grid.SliverGridRegularTileLayout.new = function(opts) {
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let mainAxisStride = opts && 'mainAxisStride' in opts ? opts.mainAxisStride : null;
    let crossAxisStride = opts && 'crossAxisStride' in opts ? opts.crossAxisStride : null;
    let childMainAxisExtent = opts && 'childMainAxisExtent' in opts ? opts.childMainAxisExtent : null;
    let childCrossAxisExtent = opts && 'childCrossAxisExtent' in opts ? opts.childCrossAxisExtent : null;
    let reverseCrossAxis = opts && 'reverseCrossAxis' in opts ? opts.reverseCrossAxis : null;
    this[crossAxisCount$] = crossAxisCount;
    this[mainAxisStride$] = mainAxisStride;
    this[crossAxisStride$] = crossAxisStride;
    this[childMainAxisExtent$] = childMainAxisExtent;
    this[childCrossAxisExtent$] = childCrossAxisExtent;
    this[reverseCrossAxis$] = reverseCrossAxis;
    if (!(crossAxisCount !== null && crossAxisCount > 0)) dart.assertFailed(null, I[1], 158, 15, "crossAxisCount != null && crossAxisCount > 0");
    if (!(mainAxisStride !== null && mainAxisStride >= 0)) dart.assertFailed(null, I[1], 159, 15, "mainAxisStride != null && mainAxisStride >= 0");
    if (!(crossAxisStride !== null && crossAxisStride >= 0)) dart.assertFailed(null, I[1], 160, 15, "crossAxisStride != null && crossAxisStride >= 0");
    if (!(childMainAxisExtent !== null && childMainAxisExtent >= 0)) dart.assertFailed(null, I[1], 161, 15, "childMainAxisExtent != null && childMainAxisExtent >= 0");
    if (!(childCrossAxisExtent !== null && childCrossAxisExtent >= 0)) dart.assertFailed(null, I[1], 162, 15, "childCrossAxisExtent != null && childCrossAxisExtent >= 0");
    if (!(reverseCrossAxis !== null)) dart.assertFailed(null, I[1], 163, 15, "reverseCrossAxis != null");
    sliver_grid.SliverGridRegularTileLayout.__proto__.new.call(this);
    ;
  }).prototype = sliver_grid.SliverGridRegularTileLayout.prototype;
  dart.addTypeTests(sliver_grid.SliverGridRegularTileLayout);
  dart.addTypeCaches(sliver_grid.SliverGridRegularTileLayout);
  dart.setMethodSignature(sliver_grid.SliverGridRegularTileLayout, () => ({
    __proto__: dart.getMethods(sliver_grid.SliverGridRegularTileLayout.__proto__),
    getMinChildIndexForScrollOffset: dart.fnType(core.int, [core.double]),
    getMaxChildIndexForScrollOffset: dart.fnType(core.int, [core.double]),
    [_getOffsetFromStartInCrossAxis]: dart.fnType(core.double, [core.double]),
    getGeometryForChildIndex: dart.fnType(sliver_grid.SliverGridGeometry, [core.int]),
    computeMaxScrollOffset: dart.fnType(core.double, [core.int])
  }));
  dart.setLibraryUri(sliver_grid.SliverGridRegularTileLayout, I[0]);
  dart.setFieldSignature(sliver_grid.SliverGridRegularTileLayout, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridRegularTileLayout.__proto__),
    crossAxisCount: dart.finalFieldType(core.int),
    mainAxisStride: dart.finalFieldType(core.double),
    crossAxisStride: dart.finalFieldType(core.double),
    childMainAxisExtent: dart.finalFieldType(core.double),
    childCrossAxisExtent: dart.finalFieldType(core.double),
    reverseCrossAxis: dart.finalFieldType(core.bool)
  }));
  sliver_grid.SliverGridDelegate = class SliverGridDelegate extends core.Object {};
  (sliver_grid.SliverGridDelegate.new = function() {
    ;
  }).prototype = sliver_grid.SliverGridDelegate.prototype;
  dart.addTypeTests(sliver_grid.SliverGridDelegate);
  dart.addTypeCaches(sliver_grid.SliverGridDelegate);
  dart.setLibraryUri(sliver_grid.SliverGridDelegate, I[0]);
  var crossAxisCount$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.crossAxisCount");
  var mainAxisSpacing$ = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.mainAxisSpacing");
  var crossAxisSpacing$ = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.crossAxisSpacing");
  var childAspectRatio$ = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.childAspectRatio");
  var mainAxisExtent$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithFixedCrossAxisCount.mainAxisExtent");
  var _debugAssertIsValid = dart.privateName(sliver_grid, "_debugAssertIsValid");
  sliver_grid.SliverGridDelegateWithFixedCrossAxisCount = class SliverGridDelegateWithFixedCrossAxisCount extends sliver_grid.SliverGridDelegate {
    get crossAxisCount() {
      return this[crossAxisCount$0];
    }
    set crossAxisCount(value) {
      super.crossAxisCount = value;
    }
    get mainAxisSpacing() {
      return this[mainAxisSpacing$];
    }
    set mainAxisSpacing(value) {
      super.mainAxisSpacing = value;
    }
    get crossAxisSpacing() {
      return this[crossAxisSpacing$];
    }
    set crossAxisSpacing(value) {
      super.crossAxisSpacing = value;
    }
    get childAspectRatio() {
      return this[childAspectRatio$];
    }
    set childAspectRatio(value) {
      super.childAspectRatio = value;
    }
    get mainAxisExtent() {
      return this[mainAxisExtent$0];
    }
    set mainAxisExtent(value) {
      super.mainAxisExtent = value;
    }
    static ['_#new#tearOff'](opts) {
      let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
      let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
      let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
      let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
      let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
      return new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: crossAxisCount, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, childAspectRatio: childAspectRatio, mainAxisExtent: mainAxisExtent});
    }
    [_debugAssertIsValid]() {
      if (!(this.crossAxisCount > 0)) dart.assertFailed(null, I[1], 343, 12, "crossAxisCount > 0");
      if (!(this.mainAxisSpacing >= 0.0)) dart.assertFailed(null, I[1], 344, 12, "mainAxisSpacing >= 0.0");
      if (!(this.crossAxisSpacing >= 0.0)) dart.assertFailed(null, I[1], 345, 12, "crossAxisSpacing >= 0.0");
      if (!(this.childAspectRatio > 0.0)) dart.assertFailed(null, I[1], 346, 12, "childAspectRatio > 0.0");
      return true;
    }
    getLayout(constraints) {
      let t0;
      if (!this[_debugAssertIsValid]()) dart.assertFailed(null, I[1], 352, 12, "_debugAssertIsValid()");
      let usableCrossAxisExtent = math.max(core.double, 0.0, constraints.crossAxisExtent - this.crossAxisSpacing * (this.crossAxisCount - 1));
      let childCrossAxisExtent = usableCrossAxisExtent / this.crossAxisCount;
      let childMainAxisExtent = (t0 = this.mainAxisExtent, t0 == null ? childCrossAxisExtent / this.childAspectRatio : t0);
      return new sliver_grid.SliverGridRegularTileLayout.new({crossAxisCount: this.crossAxisCount, mainAxisStride: childMainAxisExtent + this.mainAxisSpacing, crossAxisStride: childCrossAxisExtent + this.crossAxisSpacing, childMainAxisExtent: childMainAxisExtent, childCrossAxisExtent: childCrossAxisExtent, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.as(oldDelegate);
      return oldDelegate.crossAxisCount !== this.crossAxisCount || oldDelegate.mainAxisSpacing !== this.mainAxisSpacing || oldDelegate.crossAxisSpacing !== this.crossAxisSpacing || oldDelegate.childAspectRatio !== this.childAspectRatio || oldDelegate.mainAxisExtent != this.mainAxisExtent;
    }
  };
  (sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new = function(opts) {
    let crossAxisCount = opts && 'crossAxisCount' in opts ? opts.crossAxisCount : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
    let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
    this[crossAxisCount$0] = crossAxisCount;
    this[mainAxisSpacing$] = mainAxisSpacing;
    this[crossAxisSpacing$] = crossAxisSpacing;
    this[childAspectRatio$] = childAspectRatio;
    this[mainAxisExtent$0] = mainAxisExtent;
    if (!(crossAxisCount !== null && crossAxisCount > 0)) dart.assertFailed(null, I[1], 319, 15, "crossAxisCount != null && crossAxisCount > 0");
    if (!(mainAxisSpacing !== null && mainAxisSpacing >= 0)) dart.assertFailed(null, I[1], 320, 15, "mainAxisSpacing != null && mainAxisSpacing >= 0");
    if (!(crossAxisSpacing !== null && crossAxisSpacing >= 0)) dart.assertFailed(null, I[1], 321, 15, "crossAxisSpacing != null && crossAxisSpacing >= 0");
    if (!(childAspectRatio !== null && childAspectRatio > 0)) dart.assertFailed(null, I[1], 322, 15, "childAspectRatio != null && childAspectRatio > 0");
    sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.__proto__.new.call(this);
    ;
  }).prototype = sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.prototype;
  dart.addTypeTests(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount);
  dart.addTypeCaches(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount);
  dart.setMethodSignature(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount, () => ({
    __proto__: dart.getMethods(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.__proto__),
    [_debugAssertIsValid]: dart.fnType(core.bool, []),
    getLayout: dart.fnType(sliver_grid.SliverGridLayout, [sliver.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount, I[0]);
  dart.setFieldSignature(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.__proto__),
    crossAxisCount: dart.finalFieldType(core.int),
    mainAxisSpacing: dart.finalFieldType(core.double),
    crossAxisSpacing: dart.finalFieldType(core.double),
    childAspectRatio: dart.finalFieldType(core.double),
    mainAxisExtent: dart.finalFieldType(dart.nullable(core.double))
  }));
  var maxCrossAxisExtent$ = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.maxCrossAxisExtent");
  var mainAxisSpacing$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.mainAxisSpacing");
  var crossAxisSpacing$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.crossAxisSpacing");
  var childAspectRatio$0 = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.childAspectRatio");
  var mainAxisExtent$1 = dart.privateName(sliver_grid, "SliverGridDelegateWithMaxCrossAxisExtent.mainAxisExtent");
  sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent = class SliverGridDelegateWithMaxCrossAxisExtent extends sliver_grid.SliverGridDelegate {
    get maxCrossAxisExtent() {
      return this[maxCrossAxisExtent$];
    }
    set maxCrossAxisExtent(value) {
      super.maxCrossAxisExtent = value;
    }
    get mainAxisSpacing() {
      return this[mainAxisSpacing$0];
    }
    set mainAxisSpacing(value) {
      super.mainAxisSpacing = value;
    }
    get crossAxisSpacing() {
      return this[crossAxisSpacing$0];
    }
    set crossAxisSpacing(value) {
      super.crossAxisSpacing = value;
    }
    get childAspectRatio() {
      return this[childAspectRatio$0];
    }
    set childAspectRatio(value) {
      super.childAspectRatio = value;
    }
    get mainAxisExtent() {
      return this[mainAxisExtent$1];
    }
    set mainAxisExtent(value) {
      super.mainAxisExtent = value;
    }
    static ['_#new#tearOff'](opts) {
      let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
      let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
      let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
      let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
      let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
      return new sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.new({maxCrossAxisExtent: maxCrossAxisExtent, mainAxisSpacing: mainAxisSpacing, crossAxisSpacing: crossAxisSpacing, childAspectRatio: childAspectRatio, mainAxisExtent: mainAxisExtent});
    }
    [_debugAssertIsValid](crossAxisExtent) {
      if (!(crossAxisExtent > 0.0)) dart.assertFailed(null, I[1], 452, 12, "crossAxisExtent > 0.0");
      if (!(this.maxCrossAxisExtent > 0.0)) dart.assertFailed(null, I[1], 453, 12, "maxCrossAxisExtent > 0.0");
      if (!(this.mainAxisSpacing >= 0.0)) dart.assertFailed(null, I[1], 454, 12, "mainAxisSpacing >= 0.0");
      if (!(this.crossAxisSpacing >= 0.0)) dart.assertFailed(null, I[1], 455, 12, "crossAxisSpacing >= 0.0");
      if (!(this.childAspectRatio > 0.0)) dart.assertFailed(null, I[1], 456, 12, "childAspectRatio > 0.0");
      return true;
    }
    getLayout(constraints) {
      let t0;
      if (!this[_debugAssertIsValid](constraints.crossAxisExtent)) dart.assertFailed(null, I[1], 462, 12, "_debugAssertIsValid(constraints.crossAxisExtent)");
      let crossAxisCount = (constraints.crossAxisExtent / (this.maxCrossAxisExtent + this.crossAxisSpacing))[$ceil]();
      let usableCrossAxisExtent = math.max(core.double, 0.0, constraints.crossAxisExtent - this.crossAxisSpacing * (crossAxisCount - 1));
      let childCrossAxisExtent = usableCrossAxisExtent / crossAxisCount;
      let childMainAxisExtent = (t0 = this.mainAxisExtent, t0 == null ? childCrossAxisExtent / this.childAspectRatio : t0);
      return new sliver_grid.SliverGridRegularTileLayout.new({crossAxisCount: crossAxisCount, mainAxisStride: childMainAxisExtent + this.mainAxisSpacing, crossAxisStride: childCrossAxisExtent + this.crossAxisSpacing, childMainAxisExtent: childMainAxisExtent, childCrossAxisExtent: childCrossAxisExtent, reverseCrossAxis: basic_types.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    shouldRelayout(oldDelegate) {
      sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.as(oldDelegate);
      return oldDelegate.maxCrossAxisExtent !== this.maxCrossAxisExtent || oldDelegate.mainAxisSpacing !== this.mainAxisSpacing || oldDelegate.crossAxisSpacing !== this.crossAxisSpacing || oldDelegate.childAspectRatio !== this.childAspectRatio || oldDelegate.mainAxisExtent != this.mainAxisExtent;
    }
  };
  (sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.new = function(opts) {
    let maxCrossAxisExtent = opts && 'maxCrossAxisExtent' in opts ? opts.maxCrossAxisExtent : null;
    let mainAxisSpacing = opts && 'mainAxisSpacing' in opts ? opts.mainAxisSpacing : 0;
    let crossAxisSpacing = opts && 'crossAxisSpacing' in opts ? opts.crossAxisSpacing : 0;
    let childAspectRatio = opts && 'childAspectRatio' in opts ? opts.childAspectRatio : 1;
    let mainAxisExtent = opts && 'mainAxisExtent' in opts ? opts.mainAxisExtent : null;
    this[maxCrossAxisExtent$] = maxCrossAxisExtent;
    this[mainAxisSpacing$0] = mainAxisSpacing;
    this[crossAxisSpacing$0] = crossAxisSpacing;
    this[childAspectRatio$0] = childAspectRatio;
    this[mainAxisExtent$1] = mainAxisExtent;
    if (!(maxCrossAxisExtent !== null && maxCrossAxisExtent > 0)) dart.assertFailed(null, I[1], 418, 15, "maxCrossAxisExtent != null && maxCrossAxisExtent > 0");
    if (!(mainAxisSpacing !== null && mainAxisSpacing >= 0)) dart.assertFailed(null, I[1], 419, 15, "mainAxisSpacing != null && mainAxisSpacing >= 0");
    if (!(crossAxisSpacing !== null && crossAxisSpacing >= 0)) dart.assertFailed(null, I[1], 420, 15, "crossAxisSpacing != null && crossAxisSpacing >= 0");
    if (!(childAspectRatio !== null && childAspectRatio > 0)) dart.assertFailed(null, I[1], 421, 15, "childAspectRatio != null && childAspectRatio > 0");
    sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.__proto__.new.call(this);
    ;
  }).prototype = sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.prototype;
  dart.addTypeTests(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent);
  dart.addTypeCaches(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent);
  dart.setMethodSignature(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent, () => ({
    __proto__: dart.getMethods(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.__proto__),
    [_debugAssertIsValid]: dart.fnType(core.bool, [core.double]),
    getLayout: dart.fnType(sliver_grid.SliverGridLayout, [sliver.SliverConstraints]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent, I[0]);
  dart.setFieldSignature(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridDelegateWithMaxCrossAxisExtent.__proto__),
    maxCrossAxisExtent: dart.finalFieldType(core.double),
    mainAxisSpacing: dart.finalFieldType(core.double),
    crossAxisSpacing: dart.finalFieldType(core.double),
    childAspectRatio: dart.finalFieldType(core.double),
    mainAxisExtent: dart.finalFieldType(dart.nullable(core.double))
  }));
  var crossAxisOffset = dart.privateName(sliver_grid, "SliverGridParentData.crossAxisOffset");
  sliver_grid.SliverGridParentData = class SliverGridParentData extends sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData {
    get crossAxisOffset() {
      return this[crossAxisOffset];
    }
    set crossAxisOffset(value) {
      this[crossAxisOffset] = value;
    }
    toString() {
      return "crossAxisOffset=" + dart.str(this.crossAxisOffset) + "; " + super.toString();
    }
    static ['_#new#tearOff']() {
      return new sliver_grid.SliverGridParentData.new();
    }
  };
  (sliver_grid.SliverGridParentData.new = function() {
    this[crossAxisOffset] = null;
    sliver_grid.SliverGridParentData.__proto__.new.call(this);
    ;
  }).prototype = sliver_grid.SliverGridParentData.prototype;
  dart.addTypeTests(sliver_grid.SliverGridParentData);
  dart.addTypeCaches(sliver_grid.SliverGridParentData);
  dart.setLibraryUri(sliver_grid.SliverGridParentData, I[0]);
  dart.setFieldSignature(sliver_grid.SliverGridParentData, () => ({
    __proto__: dart.getFields(sliver_grid.SliverGridParentData.__proto__),
    crossAxisOffset: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(sliver_grid.SliverGridParentData, ['toString']);
  var _gridDelegate = dart.privateName(sliver_grid, "_gridDelegate");
  sliver_grid.RenderSliverGrid = class RenderSliverGrid extends sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor {
    static ['_#new#tearOff'](opts) {
      let childManager = opts && 'childManager' in opts ? opts.childManager : null;
      let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
      return new sliver_grid.RenderSliverGrid.new({childManager: childManager, gridDelegate: gridDelegate});
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!sliver_grid.SliverGridParentData.is(child.parentData)) child.parentData = new sliver_grid.SliverGridParentData.new();
    }
    get gridDelegate() {
      return this[_gridDelegate];
    }
    set gridDelegate(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 538, 12, "value != null");
      if (this[_gridDelegate][$_equals](value)) return;
      if (!value[$runtimeType]._equals(this[_gridDelegate][$runtimeType]) || value.shouldRelayout(this[_gridDelegate])) this.markNeedsLayout();
      this[_gridDelegate] = value;
    }
    childCrossAxisPosition(child) {
      box.RenderBox.as(child);
      let childParentData = sliver_grid.SliverGridParentData.as(dart.nullCheck(child.parentData));
      return dart.nullCheck(childParentData.crossAxisOffset);
    }
    performLayout() {
      let constraints = this.constraints;
      this.childManager.didStartLayout();
      this.childManager.setDidUnderflow(false);
      let scrollOffset = constraints.scrollOffset + constraints.cacheOrigin;
      if (!(scrollOffset >= 0.0)) dart.assertFailed(null, I[1], 560, 12, "scrollOffset >= 0.0");
      let remainingExtent = constraints.remainingCacheExtent;
      if (!(remainingExtent >= 0.0)) dart.assertFailed(null, I[1], 562, 12, "remainingExtent >= 0.0");
      let targetEndScrollOffset = scrollOffset + remainingExtent;
      let layout = this[_gridDelegate].getLayout(constraints);
      let firstIndex = layout.getMinChildIndexForScrollOffset(scrollOffset);
      let targetLastIndex = targetEndScrollOffset[$isFinite] ? layout.getMaxChildIndexForScrollOffset(targetEndScrollOffset) : null;
      if (this.firstChild != null) {
        let oldFirstIndex = this.indexOf(dart.nullCheck(this.firstChild));
        let oldLastIndex = this.indexOf(dart.nullCheck(this.lastChild));
        let leadingGarbage = (firstIndex - oldFirstIndex)[$clamp](0, this.childCount);
        let trailingGarbage = targetLastIndex == null ? 0 : (oldLastIndex - dart.notNull(targetLastIndex))[$clamp](0, this.childCount);
        this.collectGarbage(leadingGarbage, trailingGarbage);
      } else {
        this.collectGarbage(0, 0);
      }
      let firstChildGridGeometry = layout.getGeometryForChildIndex(firstIndex);
      let leadingScrollOffset = firstChildGridGeometry.scrollOffset;
      let trailingScrollOffset = firstChildGridGeometry.trailingScrollOffset;
      if (this.firstChild == null) {
        if (!this.addInitialChild({index: firstIndex, layoutOffset: firstChildGridGeometry.scrollOffset})) {
          let max = layout.computeMaxScrollOffset(this.childManager.childCount);
          this.geometry = new sliver.SliverGeometry.new({scrollExtent: max, maxPaintExtent: max});
          this.childManager.didFinishLayout();
          return;
        }
      }
      let trailingChildWithLayout = null;
      for (let index = this.indexOf(dart.nullCheck(this.firstChild)) - 1; index >= firstIndex; index = index - 1) {
        let gridGeometry = layout.getGeometryForChildIndex(index);
        let child = dart.nullCheck(this.insertAndLayoutLeadingChild(gridGeometry.getBoxConstraints(constraints)));
        let childParentData = sliver_grid.SliverGridParentData.as(dart.nullCheck(child.parentData));
        childParentData.layoutOffset = gridGeometry.scrollOffset;
        childParentData.crossAxisOffset = gridGeometry.crossAxisOffset;
        if (!(childParentData.index === index)) dart.assertFailed(null, I[1], 610, 14, "childParentData.index == index");
        trailingChildWithLayout == null ? trailingChildWithLayout = child : null;
        trailingScrollOffset = math.max(core.double, trailingScrollOffset, gridGeometry.trailingScrollOffset);
      }
      if (trailingChildWithLayout == null) {
        dart.nullCheck(this.firstChild).layout(firstChildGridGeometry.getBoxConstraints(constraints));
        let childParentData = sliver_grid.SliverGridParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
        childParentData.layoutOffset = firstChildGridGeometry.scrollOffset;
        childParentData.crossAxisOffset = firstChildGridGeometry.crossAxisOffset;
        trailingChildWithLayout = this.firstChild;
      }
      for (let index = this.indexOf(dart.nullCheck(trailingChildWithLayout)) + 1; targetLastIndex == null || index <= dart.notNull(targetLastIndex); index = index + 1) {
        let gridGeometry = layout.getGeometryForChildIndex(index);
        let childConstraints = gridGeometry.getBoxConstraints(constraints);
        let child = this.childAfter(dart.nullCheck(trailingChildWithLayout));
        if (child == null || this.indexOf(child) !== index) {
          child = this.insertAndLayoutChild(childConstraints, {after: trailingChildWithLayout});
          if (child == null) {
            break;
          }
        } else {
          child.layout(childConstraints);
        }
        trailingChildWithLayout = child;
        if (!(child != null)) dart.assertFailed(null, I[1], 637, 14, "child != null");
        let childParentData = sliver_grid.SliverGridParentData.as(dart.nullCheck(child.parentData));
        childParentData.layoutOffset = gridGeometry.scrollOffset;
        childParentData.crossAxisOffset = gridGeometry.crossAxisOffset;
        if (!(childParentData.index === index)) dart.assertFailed(null, I[1], 641, 14, "childParentData.index == index");
        trailingScrollOffset = math.max(core.double, trailingScrollOffset, gridGeometry.trailingScrollOffset);
      }
      let lastIndex = this.indexOf(dart.nullCheck(this.lastChild));
      if (!this.debugAssertChildListIsNonEmptyAndContiguous()) dart.assertFailed(null, I[1], 647, 12, "debugAssertChildListIsNonEmptyAndContiguous()");
      if (!(this.indexOf(dart.nullCheck(this.firstChild)) === firstIndex)) dart.assertFailed(null, I[1], 648, 12, "indexOf(firstChild!) == firstIndex");
      if (!(targetLastIndex == null || lastIndex <= dart.notNull(targetLastIndex))) dart.assertFailed(null, I[1], 649, 12, "targetLastIndex == null || lastIndex <= targetLastIndex");
      let estimatedTotalExtent = this.childManager.estimateMaxScrollOffset(constraints, {firstIndex: firstIndex, lastIndex: lastIndex, leadingScrollOffset: leadingScrollOffset, trailingScrollOffset: trailingScrollOffset});
      let paintExtent = this.calculatePaintOffset(constraints, {from: math.min(core.double, constraints.scrollOffset, leadingScrollOffset), to: trailingScrollOffset});
      let cacheExtent = this.calculateCacheOffset(constraints, {from: leadingScrollOffset, to: trailingScrollOffset});
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: estimatedTotalExtent, paintExtent: paintExtent, maxPaintExtent: estimatedTotalExtent, cacheExtent: cacheExtent, hasVisualOverflow: true});
      if (estimatedTotalExtent === trailingScrollOffset) this.childManager.setDidUnderflow(true);
      this.childManager.didFinishLayout();
    }
  };
  (sliver_grid.RenderSliverGrid.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    let gridDelegate = opts && 'gridDelegate' in opts ? opts.gridDelegate : null;
    if (!(gridDelegate !== null)) dart.assertFailed(null, I[1], 524, 15, "gridDelegate != null");
    this[_gridDelegate] = gridDelegate;
    sliver_grid.RenderSliverGrid.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_grid.RenderSliverGrid.prototype;
  dart.addTypeTests(sliver_grid.RenderSliverGrid);
  dart.addTypeCaches(sliver_grid.RenderSliverGrid);
  dart.setMethodSignature(sliver_grid.RenderSliverGrid, () => ({
    __proto__: dart.getMethods(sliver_grid.RenderSliverGrid.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_grid.RenderSliverGrid, () => ({
    __proto__: dart.getGetters(sliver_grid.RenderSliverGrid.__proto__),
    gridDelegate: sliver_grid.SliverGridDelegate
  }));
  dart.setSetterSignature(sliver_grid.RenderSliverGrid, () => ({
    __proto__: dart.getSetters(sliver_grid.RenderSliverGrid.__proto__),
    gridDelegate: sliver_grid.SliverGridDelegate
  }));
  dart.setLibraryUri(sliver_grid.RenderSliverGrid, I[0]);
  dart.setFieldSignature(sliver_grid.RenderSliverGrid, () => ({
    __proto__: dart.getFields(sliver_grid.RenderSliverGrid.__proto__),
    [_gridDelegate]: dart.fieldType(sliver_grid.SliverGridDelegate)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver_grid.dart", {
    "package:flutter/src/rendering/sliver_grid.dart": sliver_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_grid.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_grid.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_grid: sliver_grid
  };
}));

//# sourceMappingURL=sliver_grid.dart.lib.js.map
