define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__rendering__sliver_padding_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var sliver_padding = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfEdgeInsetsGeometry: () => (T.DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/sliver_padding.dart",
    "package:flutter/src/rendering/sliver_padding.dart"
  ];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  const RenderSliver_RenderObjectWithChildMixin$36 = class RenderSliver_RenderObjectWithChildMixin extends sliver.RenderSliver {};
  (RenderSliver_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(sliver.RenderSliver)[dart.mixinNew].call(this);
    RenderSliver_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(sliver.RenderSliver));
  sliver_padding.RenderSliverEdgeInsetsPadding = class RenderSliverEdgeInsetsPadding extends RenderSliver_RenderObjectWithChildMixin$36 {
    get beforePadding() {
      if (!(this.constraints !== null)) dart.assertFailed(null, I[0], 38, 12, "constraints != null");
      if (!(this.constraints.axisDirection !== null)) dart.assertFailed(null, I[0], 39, 12, "constraints.axisDirection != null");
      if (!(this.constraints.growthDirection !== null)) dart.assertFailed(null, I[0], 40, 12, "constraints.growthDirection != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, I[0], 41, 12, "resolvedPadding != null");
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C[0] || CT.C0:
        {
          return dart.nullCheck(this.resolvedPadding).bottom;
        }
        case C[1] || CT.C1:
        {
          return dart.nullCheck(this.resolvedPadding).left;
        }
        case C[2] || CT.C2:
        {
          return dart.nullCheck(this.resolvedPadding).top;
        }
        case C[3] || CT.C3:
        {
          return dart.nullCheck(this.resolvedPadding).right;
        }
      }
    }
    get afterPadding() {
      if (!(this.constraints !== null)) dart.assertFailed(null, I[0], 59, 12, "constraints != null");
      if (!(this.constraints.axisDirection !== null)) dart.assertFailed(null, I[0], 60, 12, "constraints.axisDirection != null");
      if (!(this.constraints.growthDirection !== null)) dart.assertFailed(null, I[0], 61, 12, "constraints.growthDirection != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, I[0], 62, 12, "resolvedPadding != null");
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C[0] || CT.C0:
        {
          return dart.nullCheck(this.resolvedPadding).top;
        }
        case C[1] || CT.C1:
        {
          return dart.nullCheck(this.resolvedPadding).right;
        }
        case C[2] || CT.C2:
        {
          return dart.nullCheck(this.resolvedPadding).bottom;
        }
        case C[3] || CT.C3:
        {
          return dart.nullCheck(this.resolvedPadding).left;
        }
      }
    }
    get mainAxisPadding() {
      if (!(this.constraints !== null)) dart.assertFailed(null, I[0], 82, 12, "constraints != null");
      if (!(this.constraints.axis !== null)) dart.assertFailed(null, I[0], 83, 12, "constraints.axis != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, I[0], 84, 12, "resolvedPadding != null");
      return dart.nullCheck(this.resolvedPadding).along(this.constraints.axis);
    }
    get crossAxisPadding() {
      if (!(this.constraints !== null)) dart.assertFailed(null, I[0], 95, 12, "constraints != null");
      if (!(this.constraints.axis !== null)) dart.assertFailed(null, I[0], 96, 12, "constraints.axis != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, I[0], 97, 12, "resolvedPadding != null");
      switch (this.constraints.axis) {
        case C[4] || CT.C4:
        {
          return dart.nullCheck(this.resolvedPadding).vertical;
        }
        case C[5] || CT.C5:
        {
          return dart.nullCheck(this.resolvedPadding).horizontal;
        }
      }
    }
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!sliver.SliverPhysicalParentData.is(child.parentData)) child.parentData = new sliver.SliverPhysicalParentData.new();
    }
    performLayout() {
      let constraints = this.constraints;
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, I[0], 115, 12, "resolvedPadding != null");
      let beforePadding = this.beforePadding;
      let afterPadding = this.afterPadding;
      let mainAxisPadding = this.mainAxisPadding;
      let crossAxisPadding = this.crossAxisPadding;
      if (this.child == null) {
        this.geometry = new sliver.SliverGeometry.new({scrollExtent: mainAxisPadding, paintExtent: math.min(core.double, mainAxisPadding, constraints.remainingPaintExtent), maxPaintExtent: mainAxisPadding});
        return;
      }
      let beforePaddingPaintExtent = this.calculatePaintOffset(constraints, {from: 0.0, to: beforePadding});
      let overlap = constraints.overlap;
      if (overlap > 0) {
        overlap = math.max(core.double, 0.0, constraints.overlap - beforePaddingPaintExtent);
      }
      dart.nullCheck(this.child).layout(constraints.copyWith({scrollOffset: math.max(core.double, 0.0, constraints.scrollOffset - beforePadding), cacheOrigin: math.min(core.double, 0.0, constraints.cacheOrigin + beforePadding), overlap: overlap, remainingPaintExtent: constraints.remainingPaintExtent - this.calculatePaintOffset(constraints, {from: 0.0, to: beforePadding}), remainingCacheExtent: constraints.remainingCacheExtent - this.calculateCacheOffset(constraints, {from: 0.0, to: beforePadding}), crossAxisExtent: math.max(core.double, 0.0, constraints.crossAxisExtent - crossAxisPadding), precedingScrollExtent: beforePadding + constraints.precedingScrollExtent}), {parentUsesSize: true});
      let childLayoutGeometry = dart.nullCheck(dart.nullCheck(this.child).geometry);
      if (childLayoutGeometry.scrollOffsetCorrection != null) {
        this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: childLayoutGeometry.scrollOffsetCorrection});
        return;
      }
      let afterPaddingPaintExtent = this.calculatePaintOffset(constraints, {from: beforePadding + childLayoutGeometry.scrollExtent, to: mainAxisPadding + childLayoutGeometry.scrollExtent});
      let mainAxisPaddingPaintExtent = beforePaddingPaintExtent + afterPaddingPaintExtent;
      let beforePaddingCacheExtent = this.calculateCacheOffset(constraints, {from: 0.0, to: beforePadding});
      let afterPaddingCacheExtent = this.calculateCacheOffset(constraints, {from: beforePadding + childLayoutGeometry.scrollExtent, to: mainAxisPadding + childLayoutGeometry.scrollExtent});
      let mainAxisPaddingCacheExtent = afterPaddingCacheExtent + beforePaddingCacheExtent;
      let paintExtent = math.min(core.double, beforePaddingPaintExtent + math.max(core.num, childLayoutGeometry.paintExtent, childLayoutGeometry.layoutExtent + afterPaddingPaintExtent), constraints.remainingPaintExtent);
      this.geometry = new sliver.SliverGeometry.new({paintOrigin: childLayoutGeometry.paintOrigin, scrollExtent: mainAxisPadding + childLayoutGeometry.scrollExtent, paintExtent: paintExtent, layoutExtent: math.min(core.double, mainAxisPaddingPaintExtent + childLayoutGeometry.layoutExtent, paintExtent), cacheExtent: math.min(core.double, mainAxisPaddingCacheExtent + childLayoutGeometry.cacheExtent, constraints.remainingCacheExtent), maxPaintExtent: mainAxisPadding + childLayoutGeometry.maxPaintExtent, hitTestExtent: math.max(core.double, mainAxisPaddingPaintExtent + childLayoutGeometry.paintExtent, beforePaddingPaintExtent + childLayoutGeometry.hitTestExtent), hasVisualOverflow: childLayoutGeometry.hasVisualOverflow});
      let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
      if (!(constraints.axisDirection !== null)) dart.assertFailed(null, I[0], 192, 12, "constraints.axisDirection != null");
      if (!(constraints.growthDirection !== null)) dart.assertFailed(null, I[0], 193, 12, "constraints.growthDirection != null");
      switch (sliver.applyGrowthDirectionToAxisDirection(constraints.axisDirection, constraints.growthDirection)) {
        case C[0] || CT.C0:
        {
          childParentData.paintOffset = new ui.Offset.new(dart.nullCheck(this.resolvedPadding).left, this.calculatePaintOffset(constraints, {from: dart.nullCheck(this.resolvedPadding).bottom + childLayoutGeometry.scrollExtent, to: dart.nullCheck(this.resolvedPadding).bottom + childLayoutGeometry.scrollExtent + dart.nullCheck(this.resolvedPadding).top}));
          break;
        }
        case C[1] || CT.C1:
        {
          childParentData.paintOffset = new ui.Offset.new(this.calculatePaintOffset(constraints, {from: 0.0, to: dart.nullCheck(this.resolvedPadding).left}), dart.nullCheck(this.resolvedPadding).top);
          break;
        }
        case C[2] || CT.C2:
        {
          childParentData.paintOffset = new ui.Offset.new(dart.nullCheck(this.resolvedPadding).left, this.calculatePaintOffset(constraints, {from: 0.0, to: dart.nullCheck(this.resolvedPadding).top}));
          break;
        }
        case C[3] || CT.C3:
        {
          childParentData.paintOffset = new ui.Offset.new(this.calculatePaintOffset(constraints, {from: dart.nullCheck(this.resolvedPadding).right + childLayoutGeometry.scrollExtent, to: dart.nullCheck(this.resolvedPadding).right + childLayoutGeometry.scrollExtent + dart.nullCheck(this.resolvedPadding).left}), dart.nullCheck(this.resolvedPadding).top);
          break;
        }
      }
      if (!(childParentData.paintOffset !== null)) dart.assertFailed(null, I[0], 208, 12, "childParentData.paintOffset != null");
      if (!(beforePadding === this.beforePadding)) dart.assertFailed(null, I[0], 209, 12, "beforePadding == this.beforePadding");
      if (!(afterPadding === this.afterPadding)) dart.assertFailed(null, I[0], 210, 12, "afterPadding == this.afterPadding");
      if (!(mainAxisPadding === this.mainAxisPadding)) dart.assertFailed(null, I[0], 211, 12, "mainAxisPadding == this.mainAxisPadding");
      if (!(crossAxisPadding === this.crossAxisPadding)) dart.assertFailed(null, I[0], 212, 12, "crossAxisPadding == this.crossAxisPadding");
    }
    hitTestChildren(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      if (this.child != null && dart.nullCheck(dart.nullCheck(this.child).geometry).hitTestExtent > 0.0) {
        let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        result.addWithAxisOffset({mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition, mainAxisOffset: this.childMainAxisPosition(dart.nullCheck(this.child)), crossAxisOffset: this.childCrossAxisPosition(dart.nullCheck(this.child)), paintOffset: childParentData.paintOffset, hitTest: dart.bind(dart.nullCheck(this.child), 'hitTest')});
      }
      return false;
    }
    childMainAxisPosition(child) {
      sliver.RenderSliver.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[0], 233, 12, "child != null");
      if (!child[$_equals](this.child)) dart.assertFailed(null, I[0], 234, 12, "child == this.child");
      return this.calculatePaintOffset(this.constraints, {from: 0.0, to: this.beforePadding});
    }
    childCrossAxisPosition(child) {
      sliver.RenderSliver.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[0], 240, 12, "child != null");
      if (!child[$_equals](this.child)) dart.assertFailed(null, I[0], 241, 12, "child == this.child");
      if (!(this.constraints !== null)) dart.assertFailed(null, I[0], 242, 12, "constraints != null");
      if (!(this.constraints.axisDirection !== null)) dart.assertFailed(null, I[0], 243, 12, "constraints.axisDirection != null");
      if (!(this.constraints.growthDirection !== null)) dart.assertFailed(null, I[0], 244, 12, "constraints.growthDirection != null");
      if (!(this.resolvedPadding != null)) dart.assertFailed(null, I[0], 245, 12, "resolvedPadding != null");
      switch (sliver.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection, this.constraints.growthDirection)) {
        case C[0] || CT.C0:
        case C[2] || CT.C2:
        {
          return dart.nullCheck(this.resolvedPadding).left;
        }
        case C[3] || CT.C3:
        case C[1] || CT.C1:
        {
          return dart.nullCheck(this.resolvedPadding).top;
        }
      }
    }
    childScrollOffset(child) {
      object.RenderObject.as(child);
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[0], 258, 12, "child.parent == this");
      return this.beforePadding;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[0], 264, 12, "child != null");
      if (!child[$_equals](this.child)) dart.assertFailed(null, I[0], 265, 12, "child == this.child");
      let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.applyPaintTransform(transform);
    }
    paint(context, offset) {
      if (this.child != null && dart.nullCheck(dart.nullCheck(this.child).geometry).visible) {
        let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
        context.paintChild(dart.nullCheck(this.child), offset['+'](childParentData.paintOffset));
      }
    }
    debugPaint(context, offset) {
      super.debugPaint(context, offset);
      if (!dart.fn(() => {
        if (debug.debugPaintSizeEnabled) {
          let parentSize = this.getAbsoluteSize();
          let outerRect = offset['&'](parentSize);
          let innerRect = null;
          if (this.child != null) {
            let childSize = dart.nullCheck(this.child).getAbsoluteSize();
            let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(dart.nullCheck(this.child).parentData));
            innerRect = offset['+'](childParentData.paintOffset)['&'](childSize);
            if (!(innerRect.top >= outerRect.top)) dart.assertFailed(null, I[0], 290, 18, "innerRect.top >= outerRect.top");
            if (!(innerRect.left >= outerRect.left)) dart.assertFailed(null, I[0], 291, 18, "innerRect.left >= outerRect.left");
            if (!(innerRect.right <= outerRect.right)) dart.assertFailed(null, I[0], 292, 18, "innerRect.right <= outerRect.right");
            if (!(innerRect.bottom <= outerRect.bottom)) dart.assertFailed(null, I[0], 293, 18, "innerRect.bottom <= outerRect.bottom");
          }
          debug.debugPaintPadding(context.canvas, outerRect, innerRect);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 281, 12, "() {\n      if (debugPaintSizeEnabled) {\n        final Size parentSize = getAbsoluteSize();\n        final Rect outerRect = offset & parentSize;\n        Rect? innerRect;\n        if (child != null) {\n          final Size childSize = child!.getAbsoluteSize();\n          final SliverPhysicalParentData childParentData = child!.parentData! as SliverPhysicalParentData;\n          innerRect = (offset + childParentData.paintOffset) & childSize;\n          assert(innerRect.top >= outerRect.top);\n          assert(innerRect.left >= outerRect.left);\n          assert(innerRect.right <= outerRect.right);\n          assert(innerRect.bottom <= outerRect.bottom);\n        }\n        debugPaintPadding(context.canvas, outerRect, innerRect);\n      }\n      return true;\n    }()");
    }
  };
  (sliver_padding.RenderSliverEdgeInsetsPadding.new = function() {
    sliver_padding.RenderSliverEdgeInsetsPadding.__proto__.new.call(this);
    ;
  }).prototype = sliver_padding.RenderSliverEdgeInsetsPadding.prototype;
  dart.addTypeTests(sliver_padding.RenderSliverEdgeInsetsPadding);
  dart.addTypeCaches(sliver_padding.RenderSliverEdgeInsetsPadding);
  dart.setMethodSignature(sliver_padding.RenderSliverEdgeInsetsPadding, () => ({
    __proto__: dart.getMethods(sliver_padding.RenderSliverEdgeInsetsPadding.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_padding.RenderSliverEdgeInsetsPadding, () => ({
    __proto__: dart.getGetters(sliver_padding.RenderSliverEdgeInsetsPadding.__proto__),
    beforePadding: core.double,
    afterPadding: core.double,
    mainAxisPadding: core.double,
    crossAxisPadding: core.double
  }));
  dart.setLibraryUri(sliver_padding.RenderSliverEdgeInsetsPadding, I[1]);
  var _resolvedPadding = dart.privateName(sliver_padding, "_resolvedPadding");
  var _padding = dart.privateName(sliver_padding, "_padding");
  var _textDirection = dart.privateName(sliver_padding, "_textDirection");
  var _resolve = dart.privateName(sliver_padding, "_resolve");
  var _markNeedsResolution = dart.privateName(sliver_padding, "_markNeedsResolution");
  sliver_padding.RenderSliverPadding = class RenderSliverPadding extends sliver_padding.RenderSliverEdgeInsetsPadding {
    static ['_#new#tearOff'](opts) {
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new sliver_padding.RenderSliverPadding.new({padding: padding, textDirection: textDirection, child: child});
    }
    get resolvedPadding() {
      return this[_resolvedPadding];
    }
    [_resolve]() {
      if (this.resolvedPadding != null) return;
      this[_resolvedPadding] = this.padding.resolve(this.textDirection);
      if (!dart.nullCheck(this.resolvedPadding).isNonNegative) dart.assertFailed(null, I[0], 332, 12, "resolvedPadding!.isNonNegative");
    }
    [_markNeedsResolution]() {
      this[_resolvedPadding] = null;
      this.markNeedsLayout();
    }
    get padding() {
      return this[_padding];
    }
    set padding(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 347, 12, "value != null");
      if (!this.padding.isNonNegative) dart.assertFailed(null, I[0], 348, 12, "padding.isNonNegative");
      if (this[_padding]._equals(value)) return;
      this[_padding] = value;
      this[_markNeedsResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) return;
      this[_textDirection] = value;
      this[_markNeedsResolution]();
    }
    performLayout() {
      this[_resolve]();
      super.performLayout();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (sliver_padding.RenderSliverPadding.new = function(opts) {
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_resolvedPadding] = null;
    if (!(padding !== null)) dart.assertFailed(null, I[0], 317, 15, "padding != null");
    if (!padding.isNonNegative) dart.assertFailed(null, I[0], 318, 15, "padding.isNonNegative");
    this[_padding] = padding;
    this[_textDirection] = textDirection;
    sliver_padding.RenderSliverPadding.__proto__.new.call(this);
    this.child = child;
  }).prototype = sliver_padding.RenderSliverPadding.prototype;
  dart.addTypeTests(sliver_padding.RenderSliverPadding);
  dart.addTypeCaches(sliver_padding.RenderSliverPadding);
  dart.setMethodSignature(sliver_padding.RenderSliverPadding, () => ({
    __proto__: dart.getMethods(sliver_padding.RenderSliverPadding.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedsResolution]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_padding.RenderSliverPadding, () => ({
    __proto__: dart.getGetters(sliver_padding.RenderSliverPadding.__proto__),
    resolvedPadding: dart.nullable(edge_insets.EdgeInsets),
    padding: edge_insets.EdgeInsetsGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setSetterSignature(sliver_padding.RenderSliverPadding, () => ({
    __proto__: dart.getSetters(sliver_padding.RenderSliverPadding.__proto__),
    padding: edge_insets.EdgeInsetsGeometry,
    textDirection: dart.nullable(ui.TextDirection)
  }));
  dart.setLibraryUri(sliver_padding.RenderSliverPadding, I[1]);
  dart.setFieldSignature(sliver_padding.RenderSliverPadding, () => ({
    __proto__: dart.getFields(sliver_padding.RenderSliverPadding.__proto__),
    [_resolvedPadding]: dart.fieldType(dart.nullable(edge_insets.EdgeInsets)),
    [_padding]: dart.fieldType(edge_insets.EdgeInsetsGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/sliver_padding.dart", {
    "package:flutter/src/rendering/sliver_padding.dart": sliver_padding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_padding.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/sliver_padding.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__sliver_padding: sliver_padding
  };
}));

//# sourceMappingURL=sliver_padding.dart.lib.js.map
