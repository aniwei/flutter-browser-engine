define(['dart_sdk', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/flex.dart'], (function load__packages__flutter__src__widgets__overflow_bar_dart(dart_sdk, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__flex$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const flex = packages__flutter__src__rendering__flex$46dart.src__rendering__flex;
  var overflow_bar = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EnumPropertyOfMainAxisAlignment: () => (T.EnumPropertyOfMainAxisAlignment = dart.constFn(diagnostics.EnumProperty$(flex.MainAxisAlignment)))(),
    EnumPropertyOfOverflowBarAlignment: () => (T.EnumPropertyOfOverflowBarAlignment = dart.constFn(diagnostics.EnumProperty$(overflow_bar.OverflowBarAlignment)))(),
    EnumPropertyOfVerticalDirection: () => (T.EnumPropertyOfVerticalDirection = dart.constFn(diagnostics.EnumProperty$(basic_types.VerticalDirection)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    RenderBoxN: () => (T.RenderBoxN = dart.constFn(dart.nullable(box.RenderBox)))(),
    VoidToRenderBoxN: () => (T.VoidToRenderBoxN = dart.constFn(dart.fnType(T.RenderBoxN(), [])))(),
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    doubleTodynamic: () => (T.doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: overflow_bar.OverflowBarAlignment.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: overflow_bar.OverflowBarAlignment.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: overflow_bar.OverflowBarAlignment.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], overflow_bar.OverflowBarAlignment);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.constList([], framework.Widget);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "OverflowBar",
        [_Location_column]: 3,
        [_Location_line]: 63,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/overflow_bar.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: flex.MainAxisAlignment.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: flex.MainAxisAlignment.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: flex.MainAxisAlignment.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 1
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: flex.MainAxisAlignment.prototype,
        [_Enum__name]: "spaceBetween",
        [_Enum_index]: 3
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: flex.MainAxisAlignment.prototype,
        [_Enum__name]: "spaceAround",
        [_Enum_index]: 4
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: flex.MainAxisAlignment.prototype,
        [_Enum__name]: "spaceEvenly",
        [_Enum_index]: 5
      });
    }
  }, false);
  var C = Array(14).fill(void 0);
  var I = [
    "package:flutter/src/widgets/overflow_bar.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/overflow_bar.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  overflow_bar.OverflowBarAlignment = class OverflowBarAlignment extends core._Enum {
    toString() {
      return "OverflowBarAlignment." + this[_name];
    }
  };
  (overflow_bar.OverflowBarAlignment.new = function(index, name) {
    overflow_bar.OverflowBarAlignment.__proto__.new.call(this, index, name);
    ;
  }).prototype = overflow_bar.OverflowBarAlignment.prototype;
  dart.addTypeTests(overflow_bar.OverflowBarAlignment);
  dart.addTypeCaches(overflow_bar.OverflowBarAlignment);
  dart.setLibraryUri(overflow_bar.OverflowBarAlignment, I[0]);
  dart.setStaticFieldSignature(overflow_bar.OverflowBarAlignment, () => ['values', 'start', 'end', 'center']);
  dart.defineExtensionMethods(overflow_bar.OverflowBarAlignment, ['toString']);
  overflow_bar.OverflowBarAlignment.start = C[0] || CT.C0;
  overflow_bar.OverflowBarAlignment.end = C[1] || CT.C1;
  overflow_bar.OverflowBarAlignment.center = C[2] || CT.C2;
  overflow_bar.OverflowBarAlignment.values = C[3] || CT.C3;
  var spacing$ = dart.privateName(overflow_bar, "OverflowBar.spacing");
  var alignment$ = dart.privateName(overflow_bar, "OverflowBar.alignment");
  var overflowSpacing$ = dart.privateName(overflow_bar, "OverflowBar.overflowSpacing");
  var overflowAlignment$ = dart.privateName(overflow_bar, "OverflowBar.overflowAlignment");
  var overflowDirection$ = dart.privateName(overflow_bar, "OverflowBar.overflowDirection");
  var textDirection$ = dart.privateName(overflow_bar, "OverflowBar.textDirection");
  var clipBehavior$ = dart.privateName(overflow_bar, "OverflowBar.clipBehavior");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  overflow_bar.OverflowBar = class OverflowBar extends framework.MultiChildRenderObjectWidget {
    get spacing() {
      return this[spacing$];
    }
    set spacing(value) {
      super.spacing = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get overflowSpacing() {
      return this[overflowSpacing$];
    }
    set overflowSpacing(value) {
      super.overflowSpacing = value;
    }
    get overflowAlignment() {
      return this[overflowAlignment$];
    }
    set overflowAlignment(value) {
      super.overflowAlignment = value;
    }
    get overflowDirection() {
      return this[overflowDirection$];
    }
    set overflowDirection(value) {
      super.overflowDirection = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let spacing = opts && 'spacing' in opts ? opts.spacing : 0;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let overflowSpacing = opts && 'overflowSpacing' in opts ? opts.overflowSpacing : 0;
      let overflowAlignment = opts && 'overflowAlignment' in opts ? opts.overflowAlignment : C[0] || CT.C0;
      let overflowDirection = opts && 'overflowDirection' in opts ? opts.overflowDirection : C[4] || CT.C4;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
      let children = opts && 'children' in opts ? opts.children : C[6] || CT.C6;
      return new overflow_bar.OverflowBar.new({key: key, spacing: spacing, alignment: alignment, overflowSpacing: overflowSpacing, overflowAlignment: overflowAlignment, overflowDirection: overflowDirection, textDirection: textDirection, clipBehavior: clipBehavior, children: children, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    createRenderObject(context) {
      let t0;
      return new overflow_bar._RenderOverflowBar.new({spacing: this.spacing, alignment: this.alignment, overflowSpacing: this.overflowSpacing, overflowAlignment: this.overflowAlignment, overflowDirection: this.overflowDirection, textDirection: (t0 = this.textDirection, t0 == null ? basic.Directionality.of(context) : t0), clipBehavior: this.clipBehavior});
    }
    updateRenderObject(context, renderObject) {
      let t1, t0;
      object.RenderObject.as(renderObject);
      t0 = overflow_bar._RenderOverflowBar.as(renderObject);
      (() => {
        t0.spacing = this.spacing;
        t0.alignment = this.alignment;
        t0.overflowSpacing = this.overflowSpacing;
        t0.overflowAlignment = this.overflowAlignment;
        t0.overflowDirection = this.overflowDirection;
        t0.textDirection = (t1 = this.textDirection, t1 == null ? basic.Directionality.of(context) : t1);
        t0.clipBehavior = this.clipBehavior;
        return t0;
      })();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("spacing", this.spacing, {defaultValue: 0}));
      properties.add(new (T.EnumPropertyOfMainAxisAlignment()).new("alignment", this.alignment, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("overflowSpacing", this.overflowSpacing, {defaultValue: 0}));
      properties.add(new (T.EnumPropertyOfOverflowBarAlignment()).new("overflowAlignment", this.overflowAlignment, {defaultValue: overflow_bar.OverflowBarAlignment.start}));
      properties.add(new (T.EnumPropertyOfVerticalDirection()).new("overflowDirection", this.overflowDirection, {defaultValue: basic_types.VerticalDirection.down}));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (overflow_bar.OverflowBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let spacing = opts && 'spacing' in opts ? opts.spacing : 0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let overflowSpacing = opts && 'overflowSpacing' in opts ? opts.overflowSpacing : 0;
    let overflowAlignment = opts && 'overflowAlignment' in opts ? opts.overflowAlignment : C[0] || CT.C0;
    let overflowDirection = opts && 'overflowDirection' in opts ? opts.overflowDirection : C[4] || CT.C4;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let children = opts && 'children' in opts ? opts.children : C[6] || CT.C6;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[spacing$] = spacing;
    this[alignment$] = alignment;
    this[overflowSpacing$] = overflowSpacing;
    this[overflowAlignment$] = overflowAlignment;
    this[overflowDirection$] = overflowDirection;
    this[textDirection$] = textDirection;
    this[clipBehavior$] = clipBehavior;
    if (!(spacing !== null)) dart.assertFailed(null, I[1], 73, 15, "spacing != null");
    if (!(overflowSpacing !== null)) dart.assertFailed(null, I[1], 74, 15, "overflowSpacing != null");
    if (!(overflowAlignment !== null)) dart.assertFailed(null, I[1], 75, 15, "overflowAlignment != null");
    if (!(overflowDirection !== null)) dart.assertFailed(null, I[1], 76, 15, "overflowDirection != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 77, 15, "clipBehavior != null");
    overflow_bar.OverflowBar.__proto__.new.call(this, {key: key, children: children, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = overflow_bar.OverflowBar.prototype;
  dart.addTypeTests(overflow_bar.OverflowBar);
  dart.addTypeCaches(overflow_bar.OverflowBar);
  dart.setMethodSignature(overflow_bar.OverflowBar, () => ({
    __proto__: dart.getMethods(overflow_bar.OverflowBar.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(overflow_bar.OverflowBar, I[0]);
  dart.setFieldSignature(overflow_bar.OverflowBar, () => ({
    __proto__: dart.getFields(overflow_bar.OverflowBar.__proto__),
    spacing: dart.finalFieldType(core.double),
    alignment: dart.finalFieldType(dart.nullable(flex.MainAxisAlignment)),
    overflowSpacing: dart.finalFieldType(core.double),
    overflowAlignment: dart.finalFieldType(overflow_bar.OverflowBarAlignment),
    overflowDirection: dart.finalFieldType(basic_types.VerticalDirection),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection)),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  overflow_bar._OverflowBarParentData = class _OverflowBarParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    static ['_#new#tearOff']() {
      return new overflow_bar._OverflowBarParentData.new();
    }
  };
  (overflow_bar._OverflowBarParentData.new = function() {
    overflow_bar._OverflowBarParentData.__proto__.new.call(this);
    ;
  }).prototype = overflow_bar._OverflowBarParentData.prototype;
  dart.addTypeTests(overflow_bar._OverflowBarParentData);
  dart.addTypeCaches(overflow_bar._OverflowBarParentData);
  dart.setLibraryUri(overflow_bar._OverflowBarParentData, I[0]);
  var _clipBehavior = dart.privateName(overflow_bar, "_clipBehavior");
  var _spacing = dart.privateName(overflow_bar, "_spacing");
  var _alignment = dart.privateName(overflow_bar, "_alignment");
  var _overflowSpacing = dart.privateName(overflow_bar, "_overflowSpacing");
  var _overflowAlignment = dart.privateName(overflow_bar, "_overflowAlignment");
  var _overflowDirection = dart.privateName(overflow_bar, "_overflowDirection");
  var _textDirection = dart.privateName(overflow_bar, "_textDirection");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, overflow_bar._OverflowBarParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, overflow_bar._OverflowBarParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, overflow_bar._OverflowBarParentData));
  overflow_bar._RenderOverflowBar = class _RenderOverflowBar extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let spacing = opts && 'spacing' in opts ? opts.spacing : 0;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let overflowSpacing = opts && 'overflowSpacing' in opts ? opts.overflowSpacing : 0;
      let overflowAlignment = opts && 'overflowAlignment' in opts ? opts.overflowAlignment : C[0] || CT.C0;
      let overflowDirection = opts && 'overflowDirection' in opts ? opts.overflowDirection : C[4] || CT.C4;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
      return new overflow_bar._RenderOverflowBar.new({children: children, spacing: spacing, alignment: alignment, overflowSpacing: overflowSpacing, overflowAlignment: overflowAlignment, overflowDirection: overflowDirection, textDirection: textDirection, clipBehavior: clipBehavior});
    }
    get spacing() {
      return this[_spacing];
    }
    set spacing(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 280, 12, "value != null");
      if (this[_spacing] === value) return;
      this[_spacing] = value;
      this.markNeedsLayout();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (this[_alignment] == value) return;
      this[_alignment] = value;
      this.markNeedsLayout();
    }
    get overflowSpacing() {
      return this[_overflowSpacing];
    }
    set overflowSpacing(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 299, 12, "value != null");
      if (this[_overflowSpacing] === value) return;
      this[_overflowSpacing] = value;
      this.markNeedsLayout();
    }
    get overflowAlignment() {
      return this[_overflowAlignment];
    }
    set overflowAlignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 309, 12, "value != null");
      if (this[_overflowAlignment] === value) return;
      this[_overflowAlignment] = value;
      this.markNeedsLayout();
    }
    get overflowDirection() {
      return this[_overflowDirection];
    }
    set overflowDirection(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 319, 12, "value != null");
      if (this[_overflowDirection] === value) return;
      this[_overflowDirection] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] === value) return;
      this[_textDirection] = value;
      this.markNeedsLayout();
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 338, 12, "value != null");
      if (value === this[_clipBehavior]) return;
      this[_clipBehavior] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!overflow_bar._OverflowBarParentData.is(child.parentData)) child.parentData = new overflow_bar._OverflowBarParentData.new();
    }
    computeMinIntrinsicHeight(width) {
      let child = this.firstChild;
      if (child == null) return 0.0;
      let barWidth = 0.0;
      while (child != null) {
        barWidth = barWidth + child.getMinIntrinsicWidth(1 / 0);
        child = this.childAfter(child);
      }
      barWidth = barWidth + this.spacing * (this.childCount - 1);
      let height = 0.0;
      if (barWidth > width) {
        child = this.firstChild;
        while (child != null) {
          height = height + child.getMinIntrinsicHeight(width);
          child = this.childAfter(child);
        }
        return height + this.overflowSpacing * (this.childCount - 1);
      } else {
        child = this.firstChild;
        while (child != null) {
          height = math.max(core.double, height, child.getMinIntrinsicHeight(width));
          child = this.childAfter(child);
        }
        return height;
      }
    }
    computeMaxIntrinsicHeight(width) {
      let child = this.firstChild;
      if (child == null) return 0.0;
      let barWidth = 0.0;
      while (child != null) {
        barWidth = barWidth + child.getMinIntrinsicWidth(1 / 0);
        child = this.childAfter(child);
      }
      barWidth = barWidth + this.spacing * (this.childCount - 1);
      let height = 0.0;
      if (barWidth > width) {
        child = this.firstChild;
        while (child != null) {
          height = height + child.getMaxIntrinsicHeight(width);
          child = this.childAfter(child);
        }
        return height + this.overflowSpacing * (this.childCount - 1);
      } else {
        child = this.firstChild;
        while (child != null) {
          height = math.max(core.double, height, child.getMaxIntrinsicHeight(width));
          child = this.childAfter(child);
        }
        return height;
      }
    }
    computeMinIntrinsicWidth(height) {
      let child = this.firstChild;
      if (child == null) return 0.0;
      let width = 0.0;
      while (child != null) {
        width = width + child.getMinIntrinsicWidth(1 / 0);
        child = this.childAfter(child);
      }
      return width + this.spacing * (this.childCount - 1);
    }
    computeMaxIntrinsicWidth(height) {
      let child = this.firstChild;
      if (child == null) return 0.0;
      let width = 0.0;
      while (child != null) {
        width = width + child.getMaxIntrinsicWidth(1 / 0);
        child = this.childAfter(child);
      }
      return width + this.spacing * (this.childCount - 1);
    }
    computeDistanceToActualBaseline(baseline) {
      return this.defaultComputeDistanceToHighestActualBaseline(baseline);
    }
    computeDryLayout(constraints) {
      let child = this.firstChild;
      if (child == null) {
        return constraints.smallest;
      }
      let childConstraints = constraints.loosen();
      let childrenWidth = 0.0;
      let maxChildHeight = 0.0;
      let y = 0.0;
      while (child != null) {
        let childSize = child.getDryLayout(childConstraints);
        childrenWidth = childrenWidth + childSize.width;
        maxChildHeight = math.max(core.double, maxChildHeight, childSize.height);
        y = y + (childSize.height + this.overflowSpacing);
        child = this.childAfter(child);
      }
      let actualWidth = childrenWidth + this.spacing * (this.childCount - 1);
      if (actualWidth > constraints.maxWidth) {
        return constraints.constrain(new ui.Size.new(constraints.maxWidth, y - this.overflowSpacing));
      } else {
        let overallWidth = this.alignment == null ? actualWidth : constraints.maxWidth;
        return constraints.constrain(new ui.Size.new(overallWidth, maxChildHeight));
      }
    }
    performLayout() {
      let child = this.firstChild;
      if (child == null) {
        this.size = this.constraints.smallest;
        return;
      }
      let childConstraints = this.constraints.loosen();
      let childrenWidth = 0.0;
      let maxChildHeight = 0.0;
      let maxChildWidth = 0.0;
      while (child != null) {
        child.layout(childConstraints, {parentUsesSize: true});
        childrenWidth = childrenWidth + child.size.width;
        maxChildHeight = math.max(core.double, maxChildHeight, child.size.height);
        maxChildWidth = math.max(core.double, maxChildWidth, child.size.width);
        child = this.childAfter(child);
      }
      let rtl = this.textDirection === ui.TextDirection.rtl;
      let actualWidth = childrenWidth + this.spacing * (this.childCount - 1);
      if (actualWidth > this.constraints.maxWidth) {
        child = this.overflowDirection === basic_types.VerticalDirection.down ? this.firstChild : this.lastChild;
        const nextChild = () => {
          return this.overflowDirection === basic_types.VerticalDirection.down ? this.childAfter(dart.nullCheck(child)) : this.childBefore(dart.nullCheck(child));
        };
        dart.fn(nextChild, T.VoidToRenderBoxN());
        let y = 0.0;
        while (child != null) {
          let childParentData = overflow_bar._OverflowBarParentData.as(dart.nullCheck(child.parentData));
          let x = 0.0;
          switch (this.overflowAlignment) {
            case C[0] || CT.C0:
            {
              x = rtl ? this.constraints.maxWidth - child.size.width : 0.0;
              break;
            }
            case C[2] || CT.C2:
            {
              x = (this.constraints.maxWidth - child.size.width) / 2;
              break;
            }
            case C[1] || CT.C1:
            {
              x = rtl ? 0.0 : this.constraints.maxWidth - child.size.width;
              break;
            }
          }
          if (!(x !== null)) dart.assertFailed(null, I[1], 512, 16, "x != null");
          childParentData.offset = new ui.Offset.new(x, y);
          y = y + (child.size.height + this.overflowSpacing);
          child = nextChild();
        }
        this.size = this.constraints.constrain(new ui.Size.new(this.constraints.maxWidth, y - this.overflowSpacing));
      } else {
        child = this.firstChild;
        let firstChildWidth = dart.nullCheck(child).size.width;
        let overallWidth = this.alignment == null ? actualWidth : this.constraints.maxWidth;
        this.size = this.constraints.constrain(new ui.Size.new(overallWidth, maxChildHeight));
        let x$ = null;
        function x$35get() {
          let t1;
          t1 = x$;
          return t1 == null ? dart.throw(new _internal.LateError.localNI("x")) : t1;
        }
        dart.fn(x$35get, T.VoidTodouble());
        function x$35set(t2) {
          return x$ = t2;
        }
        dart.fn(x$35set, T.doubleTodynamic());
        let layoutSpacing = this.spacing;
        switch (this.alignment) {
          case null:
          {
            x$35set(rtl ? this.size.width - firstChildWidth : 0.0);
            break;
          }
          case C[8] || CT.C8:
          {
            x$35set(rtl ? this.size.width - firstChildWidth : 0.0);
            break;
          }
          case C[9] || CT.C9:
          {
            let halfRemainingWidth = (this.size.width - actualWidth) / 2;
            x$35set(rtl ? this.size.width - halfRemainingWidth - firstChildWidth : halfRemainingWidth);
            break;
          }
          case C[10] || CT.C10:
          {
            x$35set(rtl ? actualWidth - firstChildWidth : this.size.width - actualWidth);
            break;
          }
          case C[11] || CT.C11:
          {
            layoutSpacing = (this.size.width - childrenWidth) / (this.childCount - 1);
            x$35set(rtl ? this.size.width - firstChildWidth : 0.0);
            break;
          }
          case C[12] || CT.C12:
          {
            layoutSpacing = this.childCount > 0 ? (this.size.width - childrenWidth) / this.childCount : 0.0;
            x$35set(rtl ? this.size.width - layoutSpacing / 2 - firstChildWidth : layoutSpacing / 2);
            break;
          }
          case C[13] || CT.C13:
          {
            layoutSpacing = (this.size.width - childrenWidth) / (this.childCount + 1);
            x$35set(rtl ? this.size.width - layoutSpacing - firstChildWidth : layoutSpacing);
            break;
          }
        }
        while (child != null) {
          let childParentData = overflow_bar._OverflowBarParentData.as(dart.nullCheck(child.parentData));
          childParentData.offset = new ui.Offset.new(x$35get(), (maxChildHeight - child.size.height) / 2);
          if (!rtl) {
            x$35set(x$35get() + (child.size.width + layoutSpacing));
          }
          child = this.childAfter(child);
          if (rtl && child != null) {
            x$35set(x$35get() - (child.size.width + layoutSpacing));
          }
        }
      }
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.defaultHitTestChildren(result, {position: position});
    }
    paint(context, offset) {
      this.defaultPaint(context, offset);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("spacing", this.spacing, {defaultValue: 0}));
      properties.add(new diagnostics.DoubleProperty.new("overflowSpacing", this.overflowSpacing, {defaultValue: 0}));
      properties.add(new (T.EnumPropertyOfOverflowBarAlignment()).new("overflowAlignment", this.overflowAlignment, {defaultValue: overflow_bar.OverflowBarAlignment.start}));
      properties.add(new (T.EnumPropertyOfVerticalDirection()).new("overflowDirection", this.overflowDirection, {defaultValue: basic_types.VerticalDirection.down}));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (overflow_bar._RenderOverflowBar.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let spacing = opts && 'spacing' in opts ? opts.spacing : 0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let overflowSpacing = opts && 'overflowSpacing' in opts ? opts.overflowSpacing : 0;
    let overflowAlignment = opts && 'overflowAlignment' in opts ? opts.overflowAlignment : C[0] || CT.C0;
    let overflowDirection = opts && 'overflowDirection' in opts ? opts.overflowDirection : C[4] || CT.C4;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    this[_clipBehavior] = ui.Clip.none;
    if (!(spacing !== null)) dart.assertFailed(null, I[1], 262, 15, "spacing != null");
    if (!(overflowSpacing !== null)) dart.assertFailed(null, I[1], 263, 15, "overflowSpacing != null");
    if (!(overflowAlignment !== null)) dart.assertFailed(null, I[1], 264, 15, "overflowAlignment != null");
    if (!(textDirection !== null)) dart.assertFailed(null, I[1], 265, 15, "textDirection != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 266, 15, "clipBehavior != null");
    this[_spacing] = spacing;
    this[_alignment] = alignment;
    this[_overflowSpacing] = overflowSpacing;
    this[_overflowAlignment] = overflowAlignment;
    this[_overflowDirection] = overflowDirection;
    this[_textDirection] = textDirection;
    this[_clipBehavior] = clipBehavior;
    overflow_bar._RenderOverflowBar.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = overflow_bar._RenderOverflowBar.prototype;
  dart.addTypeTests(overflow_bar._RenderOverflowBar);
  dart.addTypeCaches(overflow_bar._RenderOverflowBar);
  dart.setGetterSignature(overflow_bar._RenderOverflowBar, () => ({
    __proto__: dart.getGetters(overflow_bar._RenderOverflowBar.__proto__),
    spacing: core.double,
    alignment: dart.nullable(flex.MainAxisAlignment),
    overflowSpacing: core.double,
    overflowAlignment: overflow_bar.OverflowBarAlignment,
    overflowDirection: basic_types.VerticalDirection,
    textDirection: ui.TextDirection,
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(overflow_bar._RenderOverflowBar, () => ({
    __proto__: dart.getSetters(overflow_bar._RenderOverflowBar.__proto__),
    spacing: core.double,
    alignment: dart.nullable(flex.MainAxisAlignment),
    overflowSpacing: core.double,
    overflowAlignment: overflow_bar.OverflowBarAlignment,
    overflowDirection: basic_types.VerticalDirection,
    textDirection: ui.TextDirection,
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(overflow_bar._RenderOverflowBar, I[0]);
  dart.setFieldSignature(overflow_bar._RenderOverflowBar, () => ({
    __proto__: dart.getFields(overflow_bar._RenderOverflowBar.__proto__),
    [_spacing]: dart.fieldType(core.double),
    [_alignment]: dart.fieldType(dart.nullable(flex.MainAxisAlignment)),
    [_overflowSpacing]: dart.fieldType(core.double),
    [_overflowAlignment]: dart.fieldType(overflow_bar.OverflowBarAlignment),
    [_overflowDirection]: dart.fieldType(basic_types.VerticalDirection),
    [_textDirection]: dart.fieldType(ui.TextDirection),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/overflow_bar.dart", {
    "package:flutter/src/widgets/overflow_bar.dart": overflow_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["overflow_bar.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/overflow_bar.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__overflow_bar: overflow_bar
  };
}));

//# sourceMappingURL=overflow_bar.dart.lib.js.map
