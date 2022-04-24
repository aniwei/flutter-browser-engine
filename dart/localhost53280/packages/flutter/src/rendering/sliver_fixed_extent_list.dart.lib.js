define(['dart_sdk', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/rendering/sliver_multi_box_adaptor.dart'], (function load__packages__flutter__src__rendering__sliver_fixed_extent_list_dart(dart_sdk, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const sliver_multi_box_adaptor = packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart.src__rendering__sliver_multi_box_adaptor;
  var sliver_fixed_extent_list = Object.create(dart.library);
  var $round = dartx.round;
  var $abs = dartx.abs;
  var $floor = dartx.floor;
  var $ceil = dartx.ceil;
  var $isFinite = dartx.isFinite;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/sliver_fixed_extent_list.dart",
    "package:flutter/src/rendering/sliver_fixed_extent_list.dart"
  ];
  var _calculateLeadingGarbage = dart.privateName(sliver_fixed_extent_list, "_calculateLeadingGarbage");
  var _calculateTrailingGarbage = dart.privateName(sliver_fixed_extent_list, "_calculateTrailingGarbage");
  sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor = class RenderSliverFixedExtentBoxAdaptor extends sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor {
    indexToLayoutOffset(itemExtent, index) {
      return itemExtent * index;
    }
    getMinChildIndexForScrollOffset(scrollOffset, itemExtent) {
      if (itemExtent > 0.0) {
        let actual = scrollOffset / itemExtent;
        let round = actual[$round]();
        if ((actual * itemExtent - round * itemExtent)[$abs]() < 1e-10) {
          return round;
        }
        return actual[$floor]();
      }
      return 0;
    }
    getMaxChildIndexForScrollOffset(scrollOffset, itemExtent) {
      if (itemExtent > 0.0) {
        let actual = scrollOffset / itemExtent - 1;
        let round = actual[$round]();
        if ((actual * itemExtent - round * itemExtent)[$abs]() < 1e-10) {
          return math.max(core.int, 0, round);
        }
        return math.max(core.int, 0, actual[$ceil]());
      }
      return 0;
    }
    estimateMaxScrollOffset(constraints, opts) {
      let firstIndex = opts && 'firstIndex' in opts ? opts.firstIndex : null;
      let lastIndex = opts && 'lastIndex' in opts ? opts.lastIndex : null;
      let leadingScrollOffset = opts && 'leadingScrollOffset' in opts ? opts.leadingScrollOffset : null;
      let trailingScrollOffset = opts && 'trailingScrollOffset' in opts ? opts.trailingScrollOffset : null;
      return this.childManager.estimateMaxScrollOffset(constraints, {firstIndex: firstIndex, lastIndex: lastIndex, leadingScrollOffset: leadingScrollOffset, trailingScrollOffset: trailingScrollOffset});
    }
    computeMaxScrollOffset(constraints, itemExtent) {
      return this.childManager.childCount * itemExtent;
    }
    [_calculateLeadingGarbage](firstIndex) {
      let walker = this.firstChild;
      let leadingGarbage = 0;
      while (walker != null && this.indexOf(walker) < firstIndex) {
        leadingGarbage = leadingGarbage + 1;
        walker = this.childAfter(walker);
      }
      return leadingGarbage;
    }
    [_calculateTrailingGarbage](targetLastIndex) {
      let walker = this.lastChild;
      let trailingGarbage = 0;
      while (walker != null && this.indexOf(walker) > targetLastIndex) {
        trailingGarbage = trailingGarbage + 1;
        walker = this.childBefore(walker);
      }
      return trailingGarbage;
    }
    performLayout() {
      let constraints = this.constraints;
      this.childManager.didStartLayout();
      this.childManager.setDidUnderflow(false);
      let itemExtent = this.itemExtent;
      let scrollOffset = constraints.scrollOffset + constraints.cacheOrigin;
      if (!(scrollOffset >= 0.0)) dart.assertFailed(null, I[0], 182, 12, "scrollOffset >= 0.0");
      let remainingExtent = constraints.remainingCacheExtent;
      if (!(remainingExtent >= 0.0)) dart.assertFailed(null, I[0], 184, 12, "remainingExtent >= 0.0");
      let targetEndScrollOffset = scrollOffset + remainingExtent;
      let childConstraints = constraints.asBoxConstraints({minExtent: itemExtent, maxExtent: itemExtent});
      let firstIndex = this.getMinChildIndexForScrollOffset(scrollOffset, itemExtent);
      let targetLastIndex = targetEndScrollOffset[$isFinite] ? this.getMaxChildIndexForScrollOffset(targetEndScrollOffset, itemExtent) : null;
      if (this.firstChild != null) {
        let leadingGarbage = this[_calculateLeadingGarbage](firstIndex);
        let trailingGarbage = targetLastIndex != null ? this[_calculateTrailingGarbage](targetLastIndex) : 0;
        this.collectGarbage(leadingGarbage, trailingGarbage);
      } else {
        this.collectGarbage(0, 0);
      }
      if (this.firstChild == null) {
        if (!this.addInitialChild({index: firstIndex, layoutOffset: this.indexToLayoutOffset(itemExtent, firstIndex)})) {
          let max = null;
          if (firstIndex <= 0) {
            max = 0.0;
          } else {
            max = this.computeMaxScrollOffset(constraints, itemExtent);
          }
          this.geometry = new sliver.SliverGeometry.new({scrollExtent: max, maxPaintExtent: max});
          this.childManager.didFinishLayout();
          return;
        }
      }
      let trailingChildWithLayout = null;
      for (let index = this.indexOf(dart.nullCheck(this.firstChild)) - 1; index >= firstIndex; index = index - 1) {
        let child = this.insertAndLayoutLeadingChild(childConstraints);
        if (child == null) {
          this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: index * itemExtent});
          return;
        }
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
        childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent, index);
        if (!(childParentData.index === index)) dart.assertFailed(null, I[0], 235, 14, "childParentData.index == index");
        trailingChildWithLayout == null ? trailingChildWithLayout = child : null;
      }
      if (trailingChildWithLayout == null) {
        dart.nullCheck(this.firstChild).layout(childConstraints);
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(dart.nullCheck(this.firstChild).parentData));
        childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent, firstIndex);
        trailingChildWithLayout = this.firstChild;
      }
      let estimatedMaxScrollOffset = 1 / 0;
      for (let index = this.indexOf(dart.nullCheck(trailingChildWithLayout)) + 1; targetLastIndex == null || index <= dart.notNull(targetLastIndex); index = index + 1) {
        let child = this.childAfter(dart.nullCheck(trailingChildWithLayout));
        if (child == null || this.indexOf(child) !== index) {
          child = this.insertAndLayoutChild(childConstraints, {after: trailingChildWithLayout});
          if (child == null) {
            estimatedMaxScrollOffset = index * itemExtent;
            break;
          }
        } else {
          child.layout(childConstraints);
        }
        trailingChildWithLayout = child;
        if (!(child != null)) dart.assertFailed(null, I[0], 260, 14, "child != null");
        let childParentData = sliver_multi_box_adaptor.SliverMultiBoxAdaptorParentData.as(dart.nullCheck(child.parentData));
        if (!(childParentData.index === index)) dart.assertFailed(null, I[0], 262, 14, "childParentData.index == index");
        childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent, dart.nullCheck(childParentData.index));
      }
      let lastIndex = this.indexOf(dart.nullCheck(this.lastChild));
      let leadingScrollOffset = this.indexToLayoutOffset(itemExtent, firstIndex);
      let trailingScrollOffset = this.indexToLayoutOffset(itemExtent, lastIndex + 1);
      if (!(firstIndex === 0 || dart.nullCheck(this.childScrollOffset(dart.nullCheck(this.firstChild))) - scrollOffset <= 1e-10)) dart.assertFailed(null, I[0], 270, 12, "firstIndex == 0 || childScrollOffset(firstChild!)! - scrollOffset <= precisionErrorTolerance");
      if (!this.debugAssertChildListIsNonEmptyAndContiguous()) dart.assertFailed(null, I[0], 271, 12, "debugAssertChildListIsNonEmptyAndContiguous()");
      if (!(this.indexOf(dart.nullCheck(this.firstChild)) === firstIndex)) dart.assertFailed(null, I[0], 272, 12, "indexOf(firstChild!) == firstIndex");
      if (!(targetLastIndex == null || lastIndex <= dart.notNull(targetLastIndex))) dart.assertFailed(null, I[0], 273, 12, "targetLastIndex == null || lastIndex <= targetLastIndex");
      estimatedMaxScrollOffset = math.min(core.double, estimatedMaxScrollOffset, this.estimateMaxScrollOffset(constraints, {firstIndex: firstIndex, lastIndex: lastIndex, leadingScrollOffset: leadingScrollOffset, trailingScrollOffset: trailingScrollOffset}));
      let paintExtent = this.calculatePaintOffset(constraints, {from: leadingScrollOffset, to: trailingScrollOffset});
      let cacheExtent = this.calculateCacheOffset(constraints, {from: leadingScrollOffset, to: trailingScrollOffset});
      let targetEndScrollOffsetForPaint = constraints.scrollOffset + constraints.remainingPaintExtent;
      let targetLastIndexForPaint = targetEndScrollOffsetForPaint[$isFinite] ? this.getMaxChildIndexForScrollOffset(targetEndScrollOffsetForPaint, itemExtent) : null;
      this.geometry = new sliver.SliverGeometry.new({scrollExtent: estimatedMaxScrollOffset, paintExtent: paintExtent, cacheExtent: cacheExtent, maxPaintExtent: estimatedMaxScrollOffset, hasVisualOverflow: targetLastIndexForPaint != null && lastIndex >= dart.notNull(targetLastIndexForPaint) || constraints.scrollOffset > 0.0});
      if (estimatedMaxScrollOffset === trailingScrollOffset) this.childManager.setDidUnderflow(true);
      this.childManager.didFinishLayout();
    }
  };
  (sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor.prototype;
  dart.addTypeTests(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor);
  dart.addTypeCaches(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor);
  dart.setMethodSignature(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor, () => ({
    __proto__: dart.getMethods(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor.__proto__),
    indexToLayoutOffset: dart.fnType(core.double, [core.double, core.int]),
    getMinChildIndexForScrollOffset: dart.fnType(core.int, [core.double, core.double]),
    getMaxChildIndexForScrollOffset: dart.fnType(core.int, [core.double, core.double]),
    estimateMaxScrollOffset: dart.fnType(core.double, [sliver.SliverConstraints], {firstIndex: dart.nullable(core.int), lastIndex: dart.nullable(core.int), leadingScrollOffset: dart.nullable(core.double), trailingScrollOffset: dart.nullable(core.double)}, {}),
    computeMaxScrollOffset: dart.fnType(core.double, [sliver.SliverConstraints, core.double]),
    [_calculateLeadingGarbage]: dart.fnType(core.int, [core.int]),
    [_calculateTrailingGarbage]: dart.fnType(core.int, [core.int]),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor, I[1]);
  var _itemExtent = dart.privateName(sliver_fixed_extent_list, "_itemExtent");
  sliver_fixed_extent_list.RenderSliverFixedExtentList = class RenderSliverFixedExtentList extends sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor {
    static ['_#new#tearOff'](opts) {
      let childManager = opts && 'childManager' in opts ? opts.childManager : null;
      let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
      return new sliver_fixed_extent_list.RenderSliverFixedExtentList.new({childManager: childManager, itemExtent: itemExtent});
    }
    get itemExtent() {
      return this[_itemExtent];
    }
    set itemExtent(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 354, 12, "value != null");
      if (this[_itemExtent] === value) return;
      this[_itemExtent] = value;
      this.markNeedsLayout();
    }
  };
  (sliver_fixed_extent_list.RenderSliverFixedExtentList.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    let itemExtent = opts && 'itemExtent' in opts ? opts.itemExtent : null;
    this[_itemExtent] = itemExtent;
    sliver_fixed_extent_list.RenderSliverFixedExtentList.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_fixed_extent_list.RenderSliverFixedExtentList.prototype;
  dart.addTypeTests(sliver_fixed_extent_list.RenderSliverFixedExtentList);
  dart.addTypeCaches(sliver_fixed_extent_list.RenderSliverFixedExtentList);
  dart.setGetterSignature(sliver_fixed_extent_list.RenderSliverFixedExtentList, () => ({
    __proto__: dart.getGetters(sliver_fixed_extent_list.RenderSliverFixedExtentList.__proto__),
    itemExtent: core.double
  }));
  dart.setSetterSignature(sliver_fixed_extent_list.RenderSliverFixedExtentList, () => ({
    __proto__: dart.getSetters(sliver_fixed_extent_list.RenderSliverFixedExtentList.__proto__),
    itemExtent: core.double
  }));
  dart.setLibraryUri(sliver_fixed_extent_list.RenderSliverFixedExtentList, I[1]);
  dart.setFieldSignature(sliver_fixed_extent_list.RenderSliverFixedExtentList, () => ({
    __proto__: dart.getFields(sliver_fixed_extent_list.RenderSliverFixedExtentList.__proto__),
    [_itemExtent]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver_fixed_extent_list.dart", {
    "package:flutter/src/rendering/sliver_fixed_extent_list.dart": sliver_fixed_extent_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_fixed_extent_list.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_fixed_extent_list.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_fixed_extent_list: sliver_fixed_extent_list
  };
}));

//# sourceMappingURL=sliver_fixed_extent_list.dart.lib.js.map
