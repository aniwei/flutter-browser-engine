define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/layout_helper.dart'], (function load__packages__flutter__src__rendering__stack_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__layout_helper$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  var stack = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    RenderBoxTodouble: () => (T.RenderBoxTodouble = dart.constFn(dart.fnType(core.double, [box.RenderBox])))(),
    RenderBoxAndBoxConstraintsToSize: () => (T.RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))(),
    DiagnosticsPropertyOfAlignmentGeometry: () => (T.DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    EnumPropertyOfStackFit: () => (T.EnumPropertyOfStackFit = dart.constFn(diagnostics.EnumProperty$(stack.StackFit)))(),
    EnumPropertyOfClip: () => (T.EnumPropertyOfClip = dart.constFn(diagnostics.EnumProperty$(ui.Clip)))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: stack.RelativeRect.prototype,
        [bottom$]: 0,
        [right$]: 0,
        [top$]: 0,
        [left$]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: stack.StackFit.prototype,
        [_Enum__name]: "loose",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: stack.StackFit.prototype,
        [_Enum__name]: "expand",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: stack.StackFit.prototype,
        [_Enum__name]: "passthrough",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], stack.StackFit);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: stack.Overflow.prototype,
        [_Enum__name]: "visible",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: stack.Overflow.prototype,
        [_Enum__name]: "clip",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.constList([C[5] || CT.C5, C[6] || CT.C6], stack.Overflow);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [AlignmentDirectional_y]: -1,
        [AlignmentDirectional_start]: -1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C11() {
      return C[11] = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, T.RenderBoxAndBoxConstraintsToSize());
    },
    get C12() {
      return C[12] = dart.fn(layout_helper.ChildLayoutHelper.layoutChild, T.RenderBoxAndBoxConstraintsToSize());
    }
  }, false);
  var C = Array(13).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/stack.dart",
    "package:flutter/src/rendering/stack.dart"
  ];
  var left$ = dart.privateName(stack, "RelativeRect.left");
  var top$ = dart.privateName(stack, "RelativeRect.top");
  var right$ = dart.privateName(stack, "RelativeRect.right");
  var bottom$ = dart.privateName(stack, "RelativeRect.bottom");
  stack.RelativeRect = class RelativeRect extends core.Object {
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    static ['_#fromLTRB#tearOff'](left, top, right, bottom) {
      return new stack.RelativeRect.fromLTRB(left, top, right, bottom);
    }
    static fromSize(rect, container) {
      return new stack.RelativeRect.fromLTRB(rect.left, rect.top, container.width - rect.right, container.height - rect.bottom);
    }
    static ['_#fromSize#tearOff'](rect, container) {
      return stack.RelativeRect.fromSize(rect, container);
    }
    static fromRect(rect, container) {
      return new stack.RelativeRect.fromLTRB(rect.left - container.left, rect.top - container.top, container.right - rect.right, container.bottom - rect.bottom);
    }
    static ['_#fromRect#tearOff'](rect, container) {
      return stack.RelativeRect.fromRect(rect, container);
    }
    get hasInsets() {
      return this.left > 0.0 || this.top > 0.0 || this.right > 0.0 || this.bottom > 0.0;
    }
    shift(offset) {
      return new stack.RelativeRect.fromLTRB(this.left + offset.dx, this.top + offset.dy, this.right - offset.dx, this.bottom - offset.dy);
    }
    inflate(delta) {
      return new stack.RelativeRect.fromLTRB(this.left - delta, this.top - delta, this.right - delta, this.bottom - delta);
    }
    deflate(delta) {
      return this.inflate(-delta);
    }
    intersect(other) {
      return new stack.RelativeRect.fromLTRB(math.max(core.double, this.left, other.left), math.max(core.double, this.top, other.top), math.max(core.double, this.right, other.right), math.max(core.double, this.bottom, other.bottom));
    }
    toRect(container) {
      return new ui.Rect.fromLTRB(this.left, this.top, container.width - this.right, container.height - this.bottom);
    }
    toSize(container) {
      return new ui.Size.new(container.width - this.left - this.right, container.height - this.top - this.bottom);
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 138, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new stack.RelativeRect.fromLTRB(dart.nullCheck(b).left * t, b.top * t, b.right * t, b.bottom * t);
      if (b == null) {
        let k = 1.0 - t;
        return new stack.RelativeRect.fromLTRB(dart.nullCheck(b).left * k, b.top * k, b.right * k, b.bottom * k);
      }
      return new stack.RelativeRect.fromLTRB(dart.nullCheck(ui.lerpDouble(a.left, b.left, t)), dart.nullCheck(ui.lerpDouble(a.top, b.top, t)), dart.nullCheck(ui.lerpDouble(a.right, b.right, t)), dart.nullCheck(ui.lerpDouble(a.bottom, b.bottom, t)));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return stack.RelativeRect.is(other) && other.left === this.left && other.top === this.top && other.right === this.right && other.bottom === this.bottom;
    }
    get hashCode() {
      return ui.hashValues(this.left, this.top, this.right, this.bottom);
    }
    toString() {
      return "RelativeRect.fromLTRB(" + this.left[$toStringAsFixed](1) + ", " + this.top[$toStringAsFixed](1) + ", " + this.right[$toStringAsFixed](1) + ", " + this.bottom[$toStringAsFixed](1) + ")";
    }
  };
  (stack.RelativeRect.fromLTRB = function(left, top, right, bottom) {
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    if (!(left !== null && top !== null && right !== null && bottom !== null)) dart.assertFailed(null, I[0], 29, 14, "left != null && top != null && right != null && bottom != null");
    ;
  }).prototype = stack.RelativeRect.prototype;
  dart.addTypeTests(stack.RelativeRect);
  dart.addTypeCaches(stack.RelativeRect);
  dart.setMethodSignature(stack.RelativeRect, () => ({
    __proto__: dart.getMethods(stack.RelativeRect.__proto__),
    shift: dart.fnType(stack.RelativeRect, [ui.Offset]),
    inflate: dart.fnType(stack.RelativeRect, [core.double]),
    deflate: dart.fnType(stack.RelativeRect, [core.double]),
    intersect: dart.fnType(stack.RelativeRect, [stack.RelativeRect]),
    toRect: dart.fnType(ui.Rect, [ui.Rect]),
    toSize: dart.fnType(ui.Size, [ui.Size])
  }));
  dart.setStaticMethodSignature(stack.RelativeRect, () => ['fromSize', 'fromRect', 'lerp']);
  dart.setGetterSignature(stack.RelativeRect, () => ({
    __proto__: dart.getGetters(stack.RelativeRect.__proto__),
    hasInsets: core.bool
  }));
  dart.setLibraryUri(stack.RelativeRect, I[1]);
  dart.setFieldSignature(stack.RelativeRect, () => ({
    __proto__: dart.getFields(stack.RelativeRect.__proto__),
    left: dart.finalFieldType(core.double),
    top: dart.finalFieldType(core.double),
    right: dart.finalFieldType(core.double),
    bottom: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(stack.RelativeRect, () => ['fill']);
  dart.defineExtensionMethods(stack.RelativeRect, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stack.RelativeRect, ['hashCode']);
  dart.defineLazy(stack.RelativeRect, {
    /*stack.RelativeRect.fill*/get fill() {
      return C[0] || CT.C0;
    }
  }, false);
  var top = dart.privateName(stack, "StackParentData.top");
  var right = dart.privateName(stack, "StackParentData.right");
  var bottom = dart.privateName(stack, "StackParentData.bottom");
  var left = dart.privateName(stack, "StackParentData.left");
  var width = dart.privateName(stack, "StackParentData.width");
  var height = dart.privateName(stack, "StackParentData.height");
  stack.StackParentData = class StackParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    get top() {
      return this[top];
    }
    set top(value) {
      this[top] = value;
    }
    get right() {
      return this[right];
    }
    set right(value) {
      this[right] = value;
    }
    get bottom() {
      return this[bottom];
    }
    set bottom(value) {
      this[bottom] = value;
    }
    get left() {
      return this[left];
    }
    set left(value) {
      this[left] = value;
    }
    get width() {
      return this[width];
    }
    set width(value) {
      this[width] = value;
    }
    get height() {
      return this[height];
    }
    set height(value) {
      this[height] = value;
    }
    get rect() {
      return new stack.RelativeRect.fromLTRB(dart.nullCheck(this.left), dart.nullCheck(this.top), dart.nullCheck(this.right), dart.nullCheck(this.bottom));
    }
    set rect(value) {
      this.top = value.top;
      this.right = value.right;
      this.bottom = value.bottom;
      this.left = value.left;
    }
    get isPositioned() {
      return this.top != null || this.right != null || this.bottom != null || this.left != null || this.width != null || this.height != null;
    }
    toString() {
      let values = (() => {
        let t0 = T.JSArrayOfString().of([]);
        if (this.top != null) t0.push("top=" + debug.debugFormatDouble(this.top));
        if (this.right != null) t0.push("right=" + debug.debugFormatDouble(this.right));
        if (this.bottom != null) t0.push("bottom=" + debug.debugFormatDouble(this.bottom));
        if (this.left != null) t0.push("left=" + debug.debugFormatDouble(this.left));
        if (this.width != null) t0.push("width=" + debug.debugFormatDouble(this.width));
        if (this.height != null) t0.push("height=" + debug.debugFormatDouble(this.height));
        return t0;
      })();
      if (values[$isEmpty]) values[$add]("not positioned");
      values[$add](super.toString());
      return values[$join]("; ");
    }
    static ['_#new#tearOff']() {
      return new stack.StackParentData.new();
    }
  };
  (stack.StackParentData.new = function() {
    this[top] = null;
    this[right] = null;
    this[bottom] = null;
    this[left] = null;
    this[width] = null;
    this[height] = null;
    stack.StackParentData.__proto__.new.call(this);
    ;
  }).prototype = stack.StackParentData.prototype;
  dart.addTypeTests(stack.StackParentData);
  dart.addTypeCaches(stack.StackParentData);
  dart.setGetterSignature(stack.StackParentData, () => ({
    __proto__: dart.getGetters(stack.StackParentData.__proto__),
    rect: stack.RelativeRect,
    isPositioned: core.bool
  }));
  dart.setSetterSignature(stack.StackParentData, () => ({
    __proto__: dart.getSetters(stack.StackParentData.__proto__),
    rect: stack.RelativeRect
  }));
  dart.setLibraryUri(stack.StackParentData, I[1]);
  dart.setFieldSignature(stack.StackParentData, () => ({
    __proto__: dart.getFields(stack.StackParentData.__proto__),
    top: dart.fieldType(dart.nullable(core.double)),
    right: dart.fieldType(dart.nullable(core.double)),
    bottom: dart.fieldType(dart.nullable(core.double)),
    left: dart.fieldType(dart.nullable(core.double)),
    width: dart.fieldType(dart.nullable(core.double)),
    height: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(stack.StackParentData, ['toString']);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  stack.StackFit = class StackFit extends core._Enum {
    toString() {
      return "StackFit." + this[_name];
    }
  };
  (stack.StackFit.new = function(index, name) {
    stack.StackFit.__proto__.new.call(this, index, name);
    ;
  }).prototype = stack.StackFit.prototype;
  dart.addTypeTests(stack.StackFit);
  dart.addTypeCaches(stack.StackFit);
  dart.setLibraryUri(stack.StackFit, I[1]);
  dart.setStaticFieldSignature(stack.StackFit, () => ['values', 'loose', 'expand', 'passthrough']);
  dart.defineExtensionMethods(stack.StackFit, ['toString']);
  stack.StackFit.loose = C[1] || CT.C1;
  stack.StackFit.expand = C[2] || CT.C2;
  stack.StackFit.passthrough = C[3] || CT.C3;
  stack.StackFit.values = C[4] || CT.C4;
  stack.Overflow = class Overflow extends core._Enum {
    toString() {
      return "Overflow." + this[_name];
    }
  };
  (stack.Overflow.new = function(index, name) {
    stack.Overflow.__proto__.new.call(this, index, name);
    ;
  }).prototype = stack.Overflow.prototype;
  dart.addTypeTests(stack.Overflow);
  dart.addTypeCaches(stack.Overflow);
  dart.setLibraryUri(stack.Overflow, I[1]);
  dart.setStaticFieldSignature(stack.Overflow, () => ['values', 'visible', 'clip']);
  dart.defineExtensionMethods(stack.Overflow, ['toString']);
  stack.Overflow.visible = C[5] || CT.C5;
  stack.Overflow.clip = C[6] || CT.C6;
  stack.Overflow.values = C[7] || CT.C7;
  var AlignmentDirectional_y = dart.privateName(alignment, "AlignmentDirectional.y");
  var AlignmentDirectional_start = dart.privateName(alignment, "AlignmentDirectional.start");
  var _hasVisualOverflow = dart.privateName(stack, "_hasVisualOverflow");
  var _resolvedAlignment = dart.privateName(stack, "_resolvedAlignment");
  var _clipBehavior = dart.privateName(stack, "_clipBehavior");
  var _clipRectLayer = dart.privateName(stack, "_clipRectLayer");
  var _alignment = dart.privateName(stack, "_alignment");
  var _textDirection = dart.privateName(stack, "_textDirection");
  var _fit = dart.privateName(stack, "_fit");
  var _resolve = dart.privateName(stack, "_resolve");
  var _markNeedResolution = dart.privateName(stack, "_markNeedResolution");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var _computeSize = dart.privateName(stack, "_computeSize");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, stack.StackParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, stack.StackParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, stack.StackParentData));
  stack.RenderStack = class RenderStack extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[8] || CT.C8;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let fit = opts && 'fit' in opts ? opts.fit : C[1] || CT.C1;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
      return new stack.RenderStack.new({children: children, alignment: alignment, textDirection: textDirection, fit: fit, clipBehavior: clipBehavior});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!stack.StackParentData.is(child.parentData)) child.parentData = new stack.StackParentData.new();
    }
    [_resolve]() {
      if (this[_resolvedAlignment] != null) return;
      this[_resolvedAlignment] = this.alignment.resolve(this.textDirection);
    }
    [_markNeedResolution]() {
      this[_resolvedAlignment] = null;
      this.markNeedsLayout();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 389, 12, "value != null");
      if (this[_alignment]._equals(value)) return;
      this[_alignment] = value;
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) return;
      this[_textDirection] = value;
      this[_markNeedResolution]();
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 417, 12, "value != null");
      if (this[_fit] !== value) {
        this[_fit] = value;
        this.markNeedsLayout();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 430, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    static getIntrinsicDimension(firstChild, mainChildSizeGetter) {
      let extent = 0.0;
      let child = firstChild;
      while (child != null) {
        let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
        if (!childParentData.isPositioned) extent = math.max(core.double, extent, mainChildSizeGetter(child));
        if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[0], 446, 14, "child.parentData == childParentData");
        child = childParentData.nextSibling;
      }
      return extent;
    }
    computeMinIntrinsicWidth(height) {
      return stack.RenderStack.getIntrinsicDimension(this.firstChild, dart.fn(child => child.getMinIntrinsicWidth(height), T.RenderBoxTodouble()));
    }
    computeMaxIntrinsicWidth(height) {
      return stack.RenderStack.getIntrinsicDimension(this.firstChild, dart.fn(child => child.getMaxIntrinsicWidth(height), T.RenderBoxTodouble()));
    }
    computeMinIntrinsicHeight(width) {
      return stack.RenderStack.getIntrinsicDimension(this.firstChild, dart.fn(child => child.getMinIntrinsicHeight(width), T.RenderBoxTodouble()));
    }
    computeMaxIntrinsicHeight(width) {
      return stack.RenderStack.getIntrinsicDimension(this.firstChild, dart.fn(child => child.getMaxIntrinsicHeight(width), T.RenderBoxTodouble()));
    }
    computeDistanceToActualBaseline(baseline) {
      return this.defaultComputeDistanceToHighestActualBaseline(baseline);
    }
    static layoutPositionedChild(child, childParentData, size, alignment) {
      if (!childParentData.isPositioned) dart.assertFailed(null, I[0], 481, 12, "childParentData.isPositioned");
      if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[0], 482, 12, "child.parentData == childParentData");
      let hasVisualOverflow = false;
      let childConstraints = C[10] || CT.C10;
      if (childParentData.left != null && childParentData.right != null)
        childConstraints = childConstraints.tighten({width: size.width - dart.nullCheck(childParentData.right) - dart.nullCheck(childParentData.left)});
      else if (childParentData.width != null) childConstraints = childConstraints.tighten({width: childParentData.width});
      if (childParentData.top != null && childParentData.bottom != null)
        childConstraints = childConstraints.tighten({height: size.height - dart.nullCheck(childParentData.bottom) - dart.nullCheck(childParentData.top)});
      else if (childParentData.height != null) childConstraints = childConstraints.tighten({height: childParentData.height});
      child.layout(childConstraints, {parentUsesSize: true});
      let x = null;
      if (childParentData.left != null) {
        x = dart.nullCheck(childParentData.left);
      } else if (childParentData.right != null) {
        x = size.width - dart.nullCheck(childParentData.right) - child.size.width;
      } else {
        x = alignment.alongOffset(ui.Offset.as(size['-'](child.size))).dx;
      }
      if (x < 0.0 || x + child.size.width > size.width) hasVisualOverflow = true;
      let y = null;
      if (childParentData.top != null) {
        y = dart.nullCheck(childParentData.top);
      } else if (childParentData.bottom != null) {
        y = size.height - dart.nullCheck(childParentData.bottom) - child.size.height;
      } else {
        y = alignment.alongOffset(ui.Offset.as(size['-'](child.size))).dy;
      }
      if (y < 0.0 || y + child.size.height > size.height) hasVisualOverflow = true;
      childParentData.offset = new ui.Offset.new(x, y);
      return hasVisualOverflow;
    }
    computeDryLayout(constraints) {
      return this[_computeSize]({constraints: constraints, layoutChild: C[11] || CT.C11});
    }
    [_computeSize](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      this[_resolve]();
      if (!(this[_resolvedAlignment] != null)) dart.assertFailed(null, I[0], 538, 12, "_resolvedAlignment != null");
      let hasNonPositionedChildren = false;
      if (this.childCount === 0) {
        if (!constraints.biggest.isFinite) dart.assertFailed(null, I[0], 541, 14, "constraints.biggest.isFinite");
        return constraints.biggest;
      }
      let width = constraints.minWidth;
      let height = constraints.minHeight;
      let nonPositionedConstraints = null;
      if (!(this.fit !== null)) dart.assertFailed(null, I[0], 549, 12, "fit != null");
      switch (this.fit) {
        case C[1] || CT.C1:
        {
          nonPositionedConstraints = constraints.loosen();
          break;
        }
        case C[2] || CT.C2:
        {
          nonPositionedConstraints = new box.BoxConstraints.tight(constraints.biggest);
          break;
        }
        case C[3] || CT.C3:
        {
          nonPositionedConstraints = constraints;
          break;
        }
      }
      if (!(nonPositionedConstraints !== null)) dart.assertFailed(null, I[0], 561, 12, "nonPositionedConstraints != null");
      let child = this.firstChild;
      while (child != null) {
        let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
        if (!childParentData.isPositioned) {
          hasNonPositionedChildren = true;
          let childSize = layoutChild(child, nonPositionedConstraints);
          width = math.max(core.double, width, childSize.width);
          height = math.max(core.double, height, childSize.height);
        }
        child = childParentData.nextSibling;
      }
      let size = null;
      if (hasNonPositionedChildren) {
        size = new ui.Size.new(width, height);
        if (!(size.width === constraints.constrainWidth(width))) dart.assertFailed(null, I[0], 582, 14, "size.width == constraints.constrainWidth(width)");
        if (!(size.height === constraints.constrainHeight(height))) dart.assertFailed(null, I[0], 583, 14, "size.height == constraints.constrainHeight(height)");
      } else {
        size = constraints.biggest;
      }
      if (!size.isFinite) dart.assertFailed(null, I[0], 588, 12, "size.isFinite");
      return size;
    }
    performLayout() {
      let constraints = this.constraints;
      this[_hasVisualOverflow] = false;
      this.size = this[_computeSize]({constraints: constraints, layoutChild: C[12] || CT.C12});
      if (!(this[_resolvedAlignment] != null)) dart.assertFailed(null, I[0], 602, 12, "_resolvedAlignment != null");
      let child = this.firstChild;
      while (child != null) {
        let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
        if (!childParentData.isPositioned) {
          childParentData.offset = dart.nullCheck(this[_resolvedAlignment]).alongOffset(ui.Offset.as(this.size['-'](child.size)));
        } else {
          this[_hasVisualOverflow] = stack.RenderStack.layoutPositionedChild(child, childParentData, this.size, dart.nullCheck(this[_resolvedAlignment])) || this[_hasVisualOverflow];
        }
        if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[0], 613, 14, "child.parentData == childParentData");
        child = childParentData.nextSibling;
      }
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.defaultHitTestChildren(result, {position: position});
    }
    paintStack(context, offset) {
      this.defaultPaint(context, offset);
    }
    paint(context, offset) {
      if (this.clipBehavior !== ui.Clip.none && this[_hasVisualOverflow]) {
        this[_clipRectLayer].layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, 'paintStack'), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
      } else {
        this[_clipRectLayer].layer = null;
        this.paintStack(context, offset);
      }
    }
    dispose() {
      this[_clipRectLayer].layer = null;
      super.dispose();
    }
    describeApproximatePaintClip(child) {
      object.RenderObject.as(child);
      return this[_hasVisualOverflow] ? ui.Offset.zero['&'](this.size) : null;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection));
      properties.add(new (T.EnumPropertyOfStackFit()).new("fit", this.fit));
      properties.add(new (T.EnumPropertyOfClip()).new("clipBehavior", this.clipBehavior, {defaultValue: ui.Clip.hardEdge}));
    }
  };
  (stack.RenderStack.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[8] || CT.C8;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let fit = opts && 'fit' in opts ? opts.fit : C[1] || CT.C1;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
    this[_hasVisualOverflow] = false;
    this[_resolvedAlignment] = null;
    this[_clipBehavior] = ui.Clip.hardEdge;
    this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 340, 15, "alignment != null");
    if (!(fit !== null)) dart.assertFailed(null, I[0], 341, 15, "fit != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 342, 15, "clipBehavior != null");
    this[_alignment] = alignment;
    this[_textDirection] = textDirection;
    this[_fit] = fit;
    this[_clipBehavior] = clipBehavior;
    stack.RenderStack.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = stack.RenderStack.prototype;
  dart.addTypeTests(stack.RenderStack);
  dart.addTypeCaches(stack.RenderStack);
  dart.setMethodSignature(stack.RenderStack, () => ({
    __proto__: dart.getMethods(stack.RenderStack.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, []),
    [_computeSize]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])}),
    paintStack: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
  }));
  dart.setStaticMethodSignature(stack.RenderStack, () => ['getIntrinsicDimension', 'layoutPositionedChild']);
  dart.setGetterSignature(stack.RenderStack, () => ({
    __proto__: dart.getGetters(stack.RenderStack.__proto__),
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection),
    fit: stack.StackFit,
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(stack.RenderStack, () => ({
    __proto__: dart.getSetters(stack.RenderStack.__proto__),
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection),
    fit: stack.StackFit,
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(stack.RenderStack, I[1]);
  dart.setFieldSignature(stack.RenderStack, () => ({
    __proto__: dart.getFields(stack.RenderStack.__proto__),
    [_hasVisualOverflow]: dart.fieldType(core.bool),
    [_resolvedAlignment]: dart.fieldType(dart.nullable(alignment.Alignment)),
    [_alignment]: dart.fieldType(alignment.AlignmentGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_fit]: dart.fieldType(stack.StackFit),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
  }));
  var _index = dart.privateName(stack, "_index");
  var _childAtIndex = dart.privateName(stack, "_childAtIndex");
  stack.RenderIndexedStack = class RenderIndexedStack extends stack.RenderStack {
    static ['_#new#tearOff'](opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[8] || CT.C8;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let index = opts && 'index' in opts ? opts.index : 0;
      return new stack.RenderIndexedStack.new({children: children, alignment: alignment, textDirection: textDirection, index: index});
    }
    visitChildrenForSemantics(visitor) {
      if (this.index != null && this.firstChild != null) visitor(this[_childAtIndex]());
    }
    get index() {
      return this[_index];
    }
    set index(value) {
      if (this[_index] != value) {
        this[_index] = value;
        this.markNeedsLayout();
      }
    }
    [_childAtIndex]() {
      if (!(this.index != null)) dart.assertFailed(null, I[0], 708, 12, "index != null");
      let child = this.firstChild;
      let i = 0;
      while (child != null && i < dart.nullCheck(this.index)) {
        let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
        child = childParentData.nextSibling;
        i = i + 1;
      }
      if (!(i === this.index)) dart.assertFailed(null, I[0], 716, 12, "i == index");
      if (!(child != null)) dart.assertFailed(null, I[0], 717, 12, "child != null");
      return dart.nullCheck(child);
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this.firstChild == null || this.index == null) return false;
      if (!(position !== null)) dart.assertFailed(null, I[0], 725, 12, "position != null");
      let child = this[_childAtIndex]();
      let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
      return result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
          if (!transformed._equals(position['-'](childParentData.offset))) dart.assertFailed(null, I[0], 732, 16, "transformed == position - childParentData.offset");
          return child.hitTest(result, {position: transformed});
        }, T.BoxHitTestResultAndOffsetTobool())});
    }
    paintStack(context, offset) {
      if (this.firstChild == null || this.index == null) return;
      let child = this[_childAtIndex]();
      let childParentData = stack.StackParentData.as(dart.nullCheck(child.parentData));
      context.paintChild(child, childParentData.offset['+'](offset));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("index", this.index));
    }
  };
  (stack.RenderIndexedStack.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[8] || CT.C8;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let index = opts && 'index' in opts ? opts.index : 0;
    this[_index] = index;
    stack.RenderIndexedStack.__proto__.new.call(this, {children: children, alignment: alignment, textDirection: textDirection});
    ;
  }).prototype = stack.RenderIndexedStack.prototype;
  dart.addTypeTests(stack.RenderIndexedStack);
  dart.addTypeCaches(stack.RenderIndexedStack);
  dart.setMethodSignature(stack.RenderIndexedStack, () => ({
    __proto__: dart.getMethods(stack.RenderIndexedStack.__proto__),
    [_childAtIndex]: dart.fnType(box.RenderBox, [])
  }));
  dart.setGetterSignature(stack.RenderIndexedStack, () => ({
    __proto__: dart.getGetters(stack.RenderIndexedStack.__proto__),
    index: dart.nullable(core.int)
  }));
  dart.setSetterSignature(stack.RenderIndexedStack, () => ({
    __proto__: dart.getSetters(stack.RenderIndexedStack.__proto__),
    index: dart.nullable(core.int)
  }));
  dart.setLibraryUri(stack.RenderIndexedStack, I[1]);
  dart.setFieldSignature(stack.RenderIndexedStack, () => ({
    __proto__: dart.getFields(stack.RenderIndexedStack.__proto__),
    [_index]: dart.fieldType(dart.nullable(core.int))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/stack.dart", {
    "package:flutter/src/rendering/stack.dart": stack
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stack.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/stack.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__stack: stack
  };
}));

//# sourceMappingURL=stack.dart.lib.js.map
