define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/layout_helper.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/debug_overflow_indicator.dart'], (function load__packages__flutter__src__rendering__flex_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__layout_helper$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__debug_overflow_indicator$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const debug_overflow_indicator = packages__flutter__src__rendering__debug_overflow_indicator$46dart.src__rendering__debug_overflow_indicator;
  var flex$ = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    VoidTodouble: () => (T.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    doubleTodynamic: () => (T.doubleTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.double])))(),
    RenderBoxAnddoubleTodouble: () => (T.RenderBoxAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [box.RenderBox, core.double])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    RenderBoxAndBoxConstraintsToSize: () => (T.RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    EnumPropertyOfAxis: () => (T.EnumPropertyOfAxis = dart.constFn(diagnostics.EnumProperty$(basic_types.Axis)))(),
    EnumPropertyOfMainAxisAlignment: () => (T.EnumPropertyOfMainAxisAlignment = dart.constFn(diagnostics.EnumProperty$(flex$.MainAxisAlignment)))(),
    EnumPropertyOfMainAxisSize: () => (T.EnumPropertyOfMainAxisSize = dart.constFn(diagnostics.EnumProperty$(flex$.MainAxisSize)))(),
    EnumPropertyOfCrossAxisAlignment: () => (T.EnumPropertyOfCrossAxisAlignment = dart.constFn(diagnostics.EnumProperty$(flex$.CrossAxisAlignment)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    EnumPropertyOfVerticalDirection: () => (T.EnumPropertyOfVerticalDirection = dart.constFn(diagnostics.EnumProperty$(basic_types.VerticalDirection)))(),
    EnumPropertyOfTextBaseline: () => (T.EnumPropertyOfTextBaseline = dart.constFn(diagnostics.EnumProperty$(ui.TextBaseline)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: flex$.FlexFit.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: flex$.FlexFit.prototype,
        [_Enum__name]: "loose",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.constList([C[0] || CT.C0, C[1] || CT.C1], flex$.FlexFit);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: flex$.MainAxisSize.prototype,
        [_Enum__name]: "min",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: flex$.MainAxisSize.prototype,
        [_Enum__name]: "max",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.constList([C[3] || CT.C3, C[4] || CT.C4], flex$.MainAxisSize);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_Enum__name]: "spaceBetween",
        [_Enum_index]: 3
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_Enum__name]: "spaceAround",
        [_Enum_index]: 4
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: flex$.MainAxisAlignment.prototype,
        [_Enum__name]: "spaceEvenly",
        [_Enum_index]: 5
      });
    },
    get C12() {
      return C[12] = dart.constList([C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11], flex$.MainAxisAlignment);
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 1
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_Enum__name]: "stretch",
        [_Enum_index]: 3
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: flex$.CrossAxisAlignment.prototype,
        [_Enum__name]: "baseline",
        [_Enum_index]: 4
      });
    },
    get C18() {
      return C[18] = dart.constList([C[13] || CT.C13, C[14] || CT.C14, C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17], flex$.CrossAxisAlignment);
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 1
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C23() {
      return C[23] = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, T.RenderBoxAndBoxConstraintsToSize());
    },
    get C24() {
      return C[24] = dart.fn(layout_helper.ChildLayoutHelper.layoutChild, T.RenderBoxAndBoxConstraintsToSize());
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: basic_types.VerticalDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(28).fill(void 0);
  var I = [
    "package:flutter/src/rendering/flex.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/flex.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  flex$.FlexFit = class FlexFit extends core._Enum {
    toString() {
      return "FlexFit." + this[_name];
    }
  };
  (flex$.FlexFit.new = function(index, name) {
    flex$.FlexFit.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex$.FlexFit.prototype;
  dart.addTypeTests(flex$.FlexFit);
  dart.addTypeCaches(flex$.FlexFit);
  dart.setLibraryUri(flex$.FlexFit, I[0]);
  dart.setStaticFieldSignature(flex$.FlexFit, () => ['values', 'tight', 'loose']);
  dart.defineExtensionMethods(flex$.FlexFit, ['toString']);
  flex$.FlexFit.tight = C[0] || CT.C0;
  flex$.FlexFit.loose = C[1] || CT.C1;
  flex$.FlexFit.values = C[2] || CT.C2;
  var flex = dart.privateName(flex$, "FlexParentData.flex");
  var fit = dart.privateName(flex$, "FlexParentData.fit");
  flex$.FlexParentData = class FlexParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    get flex() {
      return this[flex];
    }
    set flex(value) {
      this[flex] = value;
    }
    get fit() {
      return this[fit];
    }
    set fit(value) {
      this[fit] = value;
    }
    toString() {
      return super.toString() + "; flex=" + dart.str(this.flex) + "; fit=" + dart.str(this.fit);
    }
    static ['_#new#tearOff']() {
      return new flex$.FlexParentData.new();
    }
  };
  (flex$.FlexParentData.new = function() {
    this[flex] = null;
    this[fit] = null;
    flex$.FlexParentData.__proto__.new.call(this);
    ;
  }).prototype = flex$.FlexParentData.prototype;
  dart.addTypeTests(flex$.FlexParentData);
  dart.addTypeCaches(flex$.FlexParentData);
  dart.setLibraryUri(flex$.FlexParentData, I[0]);
  dart.setFieldSignature(flex$.FlexParentData, () => ({
    __proto__: dart.getFields(flex$.FlexParentData.__proto__),
    flex: dart.fieldType(dart.nullable(core.int)),
    fit: dart.fieldType(dart.nullable(flex$.FlexFit))
  }));
  dart.defineExtensionMethods(flex$.FlexParentData, ['toString']);
  flex$.MainAxisSize = class MainAxisSize extends core._Enum {
    toString() {
      return "MainAxisSize." + this[_name];
    }
  };
  (flex$.MainAxisSize.new = function(index, name) {
    flex$.MainAxisSize.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex$.MainAxisSize.prototype;
  dart.addTypeTests(flex$.MainAxisSize);
  dart.addTypeCaches(flex$.MainAxisSize);
  dart.setLibraryUri(flex$.MainAxisSize, I[0]);
  dart.setStaticFieldSignature(flex$.MainAxisSize, () => ['values', 'min', 'max']);
  dart.defineExtensionMethods(flex$.MainAxisSize, ['toString']);
  flex$.MainAxisSize.min = C[3] || CT.C3;
  flex$.MainAxisSize.max = C[4] || CT.C4;
  flex$.MainAxisSize.values = C[5] || CT.C5;
  flex$.MainAxisAlignment = class MainAxisAlignment extends core._Enum {
    toString() {
      return "MainAxisAlignment." + this[_name];
    }
  };
  (flex$.MainAxisAlignment.new = function(index, name) {
    flex$.MainAxisAlignment.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex$.MainAxisAlignment.prototype;
  dart.addTypeTests(flex$.MainAxisAlignment);
  dart.addTypeCaches(flex$.MainAxisAlignment);
  dart.setLibraryUri(flex$.MainAxisAlignment, I[0]);
  dart.setStaticFieldSignature(flex$.MainAxisAlignment, () => ['values', 'start', 'end', 'center', 'spaceBetween', 'spaceAround', 'spaceEvenly']);
  dart.defineExtensionMethods(flex$.MainAxisAlignment, ['toString']);
  flex$.MainAxisAlignment.start = C[6] || CT.C6;
  flex$.MainAxisAlignment.end = C[7] || CT.C7;
  flex$.MainAxisAlignment.center = C[8] || CT.C8;
  flex$.MainAxisAlignment.spaceBetween = C[9] || CT.C9;
  flex$.MainAxisAlignment.spaceAround = C[10] || CT.C10;
  flex$.MainAxisAlignment.spaceEvenly = C[11] || CT.C11;
  flex$.MainAxisAlignment.values = C[12] || CT.C12;
  flex$.CrossAxisAlignment = class CrossAxisAlignment extends core._Enum {
    toString() {
      return "CrossAxisAlignment." + this[_name];
    }
  };
  (flex$.CrossAxisAlignment.new = function(index, name) {
    flex$.CrossAxisAlignment.__proto__.new.call(this, index, name);
    ;
  }).prototype = flex$.CrossAxisAlignment.prototype;
  dart.addTypeTests(flex$.CrossAxisAlignment);
  dart.addTypeCaches(flex$.CrossAxisAlignment);
  dart.setLibraryUri(flex$.CrossAxisAlignment, I[0]);
  dart.setStaticFieldSignature(flex$.CrossAxisAlignment, () => ['values', 'start', 'end', 'center', 'stretch', 'baseline']);
  dart.defineExtensionMethods(flex$.CrossAxisAlignment, ['toString']);
  flex$.CrossAxisAlignment.start = C[13] || CT.C13;
  flex$.CrossAxisAlignment.end = C[14] || CT.C14;
  flex$.CrossAxisAlignment.center = C[15] || CT.C15;
  flex$.CrossAxisAlignment.stretch = C[16] || CT.C16;
  flex$.CrossAxisAlignment.baseline = C[17] || CT.C17;
  flex$.CrossAxisAlignment.values = C[18] || CT.C18;
  var _overflow = dart.privateName(flex$, "_overflow");
  var _clipBehavior = dart.privateName(flex$, "_clipBehavior");
  var _clipRectLayer = dart.privateName(flex$, "_clipRectLayer");
  var _direction = dart.privateName(flex$, "_direction");
  var _mainAxisAlignment = dart.privateName(flex$, "_mainAxisAlignment");
  var _mainAxisSize = dart.privateName(flex$, "_mainAxisSize");
  var _crossAxisAlignment = dart.privateName(flex$, "_crossAxisAlignment");
  var _textDirection = dart.privateName(flex$, "_textDirection");
  var _verticalDirection = dart.privateName(flex$, "_verticalDirection");
  var _textBaseline = dart.privateName(flex$, "_textBaseline");
  var _debugHasNecessaryDirections = dart.privateName(flex$, "_debugHasNecessaryDirections");
  var _hasOverflow = dart.privateName(flex$, "_hasOverflow");
  var _canComputeIntrinsics = dart.privateName(flex$, "_canComputeIntrinsics");
  var _getFlex = dart.privateName(flex$, "_getFlex");
  var _getIntrinsicSize = dart.privateName(flex$, "_getIntrinsicSize");
  var _getFit = dart.privateName(flex$, "_getFit");
  var _getCrossSize = dart.privateName(flex$, "_getCrossSize");
  var _getMainSize = dart.privateName(flex$, "_getMainSize");
  var _debugCheckConstraints = dart.privateName(flex$, "_debugCheckConstraints");
  var _computeSizes = dart.privateName(flex$, "_computeSizes");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, flex$.FlexParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, flex$.FlexParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, flex$.FlexParentData));
  const RenderBox_DebugOverflowIndicatorMixin$36 = class RenderBox_DebugOverflowIndicatorMixin extends RenderBox_RenderBoxContainerDefaultsMixin$36 {};
  (RenderBox_DebugOverflowIndicatorMixin$36.new = function() {
    debug_overflow_indicator.DebugOverflowIndicatorMixin[dart.mixinNew].call(this);
    RenderBox_DebugOverflowIndicatorMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_DebugOverflowIndicatorMixin$36.prototype;
  dart.applyMixin(RenderBox_DebugOverflowIndicatorMixin$36, debug_overflow_indicator.DebugOverflowIndicatorMixin);
  flex$.RenderFlex = class RenderFlex extends RenderBox_DebugOverflowIndicatorMixin$36 {
    static ['_#new#tearOff'](opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let direction = opts && 'direction' in opts ? opts.direction : C[19] || CT.C19;
      let mainAxisSize = opts && 'mainAxisSize' in opts ? opts.mainAxisSize : C[4] || CT.C4;
      let mainAxisAlignment = opts && 'mainAxisAlignment' in opts ? opts.mainAxisAlignment : C[6] || CT.C6;
      let crossAxisAlignment = opts && 'crossAxisAlignment' in opts ? opts.crossAxisAlignment : C[15] || CT.C15;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let verticalDirection = opts && 'verticalDirection' in opts ? opts.verticalDirection : C[20] || CT.C20;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[21] || CT.C21;
      return new flex$.RenderFlex.new({children: children, direction: direction, mainAxisSize: mainAxisSize, mainAxisAlignment: mainAxisAlignment, crossAxisAlignment: crossAxisAlignment, textDirection: textDirection, verticalDirection: verticalDirection, textBaseline: textBaseline, clipBehavior: clipBehavior});
    }
    get direction() {
      return this[_direction];
    }
    set direction(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 312, 12, "value != null");
      if (this[_direction] !== value) {
        this[_direction] = value;
        this.markNeedsLayout();
      }
    }
    get mainAxisAlignment() {
      return this[_mainAxisAlignment];
    }
    set mainAxisAlignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 331, 12, "value != null");
      if (this[_mainAxisAlignment] !== value) {
        this[_mainAxisAlignment] = value;
        this.markNeedsLayout();
      }
    }
    get mainAxisSize() {
      return this[_mainAxisSize];
    }
    set mainAxisSize(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 351, 12, "value != null");
      if (this[_mainAxisSize] !== value) {
        this[_mainAxisSize] = value;
        this.markNeedsLayout();
      }
    }
    get crossAxisAlignment() {
      return this[_crossAxisAlignment];
    }
    set crossAxisAlignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 370, 12, "value != null");
      if (this[_crossAxisAlignment] !== value) {
        this[_crossAxisAlignment] = value;
        this.markNeedsLayout();
      }
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] != value) {
        this[_textDirection] = value;
        this.markNeedsLayout();
      }
    }
    get verticalDirection() {
      return this[_verticalDirection];
    }
    set verticalDirection(value) {
      if (this[_verticalDirection] !== value) {
        this[_verticalDirection] = value;
        this.markNeedsLayout();
      }
    }
    get textBaseline() {
      return this[_textBaseline];
    }
    set textBaseline(value) {
      if (!(this[_crossAxisAlignment] !== flex$.CrossAxisAlignment.baseline || value != null)) dart.assertFailed(null, I[1], 439, 12, "_crossAxisAlignment != CrossAxisAlignment.baseline || value != null");
      if (this[_textBaseline] != value) {
        this[_textBaseline] = value;
        this.markNeedsLayout();
      }
    }
    get [_debugHasNecessaryDirections]() {
      if (!(this.direction !== null)) dart.assertFailed(null, I[1], 447, 12, "direction != null");
      if (!(this.crossAxisAlignment !== null)) dart.assertFailed(null, I[1], 448, 12, "crossAxisAlignment != null");
      if (this.firstChild != null && !dart.equals(this.lastChild, this.firstChild)) {
        switch (this.direction) {
          case C[19] || CT.C19:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with multiple children has a null textDirection, so the layout order is undefined.", I[1], 453, 18, "textDirection != null");
            break;
          }
          case C[22] || CT.C22:
          {
            if (!(this.verticalDirection !== null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with multiple children has a null verticalDirection, so the layout order is undefined.", I[1], 456, 18, "verticalDirection != null");
            break;
          }
        }
      }
      if (this.mainAxisAlignment === flex$.MainAxisAlignment.start || this.mainAxisAlignment === flex$.MainAxisAlignment.end) {
        switch (this.direction) {
          case C[19] || CT.C19:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with " + dart.str(this.mainAxisAlignment) + " has a null textDirection, so the alignment cannot be resolved.", I[1], 464, 18, "textDirection != null");
            break;
          }
          case C[22] || CT.C22:
          {
            if (!(this.verticalDirection !== null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with " + dart.str(this.mainAxisAlignment) + " has a null verticalDirection, so the alignment cannot be resolved.", I[1], 467, 18, "verticalDirection != null");
            break;
          }
        }
      }
      if (this.crossAxisAlignment === flex$.CrossAxisAlignment.start || this.crossAxisAlignment === flex$.CrossAxisAlignment.end) {
        switch (this.direction) {
          case C[19] || CT.C19:
          {
            if (!(this.verticalDirection !== null)) dart.assertFailed("Horizontal " + dart.str(this[$runtimeType]) + " with " + dart.str(this.crossAxisAlignment) + " has a null verticalDirection, so the alignment cannot be resolved.", I[1], 475, 18, "verticalDirection != null");
            break;
          }
          case C[22] || CT.C22:
          {
            if (!(this.textDirection != null)) dart.assertFailed("Vertical " + dart.str(this[$runtimeType]) + " with " + dart.str(this.crossAxisAlignment) + " has a null textDirection, so the alignment cannot be resolved.", I[1], 478, 18, "textDirection != null");
            break;
          }
        }
      }
      return true;
    }
    get [_hasOverflow]() {
      return this[_overflow] > 1e-10;
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 497, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!flex$.FlexParentData.is(child.parentData)) child.parentData = new flex$.FlexParentData.new();
    }
    get [_canComputeIntrinsics]() {
      return this.crossAxisAlignment !== flex$.CrossAxisAlignment.baseline;
    }
    [_getIntrinsicSize](opts) {
      let sizingDirection = opts && 'sizingDirection' in opts ? opts.sizingDirection : null;
      let extent = opts && 'extent' in opts ? opts.extent : null;
      let childSize = opts && 'childSize' in opts ? opts.childSize : null;
      if (!this[_canComputeIntrinsics]) {
        if (!object.RenderObject.debugCheckingIntrinsics) dart.assertFailed("Intrinsics are not available for CrossAxisAlignment.baseline.", I[1], 523, 9, "RenderObject.debugCheckingIntrinsics");
        return 0.0;
      }
      if (this[_direction] === sizingDirection) {
        let totalFlex = 0.0;
        let inflexibleSpace = 0.0;
        let maxFlexFractionSoFar = 0.0;
        let child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          totalFlex = totalFlex + flex;
          if (flex > 0) {
            let flexFraction = childSize(child, extent) / this[_getFlex](child);
            maxFlexFractionSoFar = math.max(core.double, maxFlexFractionSoFar, flexFraction);
          } else {
            inflexibleSpace = inflexibleSpace + childSize(child, extent);
          }
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
        return maxFlexFractionSoFar * totalFlex + inflexibleSpace;
      } else {
        let availableMainSpace = extent;
        let totalFlex = 0;
        let inflexibleSpace = 0.0;
        let maxCrossSize = 0.0;
        let child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          totalFlex = totalFlex + flex;
          let mainSize = null;
          function mainSize$35get() {
            let t1;
            t1 = mainSize;
            return t1 == null ? dart.throw(new _internal.LateError.localNI("mainSize")) : t1;
          }
          dart.fn(mainSize$35get, T.VoidTodouble());
          function mainSize$35set(t2) {
            if (mainSize == null)
              return mainSize = t2;
            else
              dart.throw(new _internal.LateError.localAI("mainSize"));
          }
          dart.fn(mainSize$35set, T.doubleTodynamic());
          let crossSize = null;
          function crossSize$35get() {
            let t5;
            t5 = crossSize;
            return t5 == null ? dart.throw(new _internal.LateError.localNI("crossSize")) : t5;
          }
          dart.fn(crossSize$35get, T.VoidTodouble());
          function crossSize$35set(t6) {
            if (crossSize == null)
              return crossSize = t6;
            else
              dart.throw(new _internal.LateError.localAI("crossSize"));
          }
          dart.fn(crossSize$35set, T.doubleTodynamic());
          if (flex === 0) {
            switch (this[_direction]) {
              case C[19] || CT.C19:
              {
                mainSize$35set(child.getMaxIntrinsicWidth(1 / 0));
                crossSize$35set(childSize(child, mainSize$35get()));
                break;
              }
              case C[22] || CT.C22:
              {
                mainSize$35set(child.getMaxIntrinsicHeight(1 / 0));
                crossSize$35set(childSize(child, mainSize$35get()));
                break;
              }
            }
            inflexibleSpace = inflexibleSpace + mainSize$35get();
            maxCrossSize = math.max(core.double, maxCrossSize, crossSize$35get());
          }
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
        let spacePerFlex = math.max(core.double, 0.0, (availableMainSpace - inflexibleSpace) / totalFlex);
        child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          if (flex > 0) maxCrossSize = math.max(core.double, maxCrossSize, childSize(child, spacePerFlex * flex));
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
        return maxCrossSize;
      }
    }
    computeMinIntrinsicWidth(height) {
      return this[_getIntrinsicSize]({sizingDirection: basic_types.Axis.horizontal, extent: height, childSize: dart.fn((child, extent) => child.getMinIntrinsicWidth(extent), T.RenderBoxAnddoubleTodouble())});
    }
    computeMaxIntrinsicWidth(height) {
      return this[_getIntrinsicSize]({sizingDirection: basic_types.Axis.horizontal, extent: height, childSize: dart.fn((child, extent) => child.getMaxIntrinsicWidth(extent), T.RenderBoxAnddoubleTodouble())});
    }
    computeMinIntrinsicHeight(width) {
      return this[_getIntrinsicSize]({sizingDirection: basic_types.Axis.vertical, extent: width, childSize: dart.fn((child, extent) => child.getMinIntrinsicHeight(extent), T.RenderBoxAnddoubleTodouble())});
    }
    computeMaxIntrinsicHeight(width) {
      return this[_getIntrinsicSize]({sizingDirection: basic_types.Axis.vertical, extent: width, childSize: dart.fn((child, extent) => child.getMaxIntrinsicHeight(extent), T.RenderBoxAnddoubleTodouble())});
    }
    computeDistanceToActualBaseline(baseline) {
      if (this[_direction] === basic_types.Axis.horizontal) return this.defaultComputeDistanceToHighestActualBaseline(baseline);
      return this.defaultComputeDistanceToFirstActualBaseline(baseline);
    }
    [_getFlex](child) {
      let t8;
      let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
      t8 = childParentData.flex;
      return t8 == null ? 0 : t8;
    }
    [_getFit](child) {
      let t8;
      let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
      t8 = childParentData.fit;
      return t8 == null ? flex$.FlexFit.tight : t8;
    }
    [_getCrossSize](size) {
      switch (this[_direction]) {
        case C[19] || CT.C19:
        {
          return size.height;
        }
        case C[22] || CT.C22:
        {
          return size.width;
        }
      }
    }
    [_getMainSize](size) {
      switch (this[_direction]) {
        case C[19] || CT.C19:
        {
          return size.width;
        }
        case C[22] || CT.C22:
        {
          return size.height;
        }
      }
    }
    computeDryLayout(constraints) {
      if (!this[_canComputeIntrinsics]) {
        if (!this.debugCannotComputeDryLayout({reason: "Dry layout cannot be computed for CrossAxisAlignment.baseline, which requires a full layout."})) dart.assertFailed(null, I[1], 676, 14, "debugCannotComputeDryLayout(\n        reason: 'Dry layout cannot be computed for CrossAxisAlignment.baseline, which requires a full layout.',\n      )");
        return ui.Size.zero;
      }
      let constraintsError = null;
      if (!dart.fn(() => {
        constraintsError = this[_debugCheckConstraints]({constraints: constraints, reportParentConstraints: false});
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 682, 12, "() {\n      constraintsError = _debugCheckConstraints(\n        constraints: constraints,\n        reportParentConstraints: false,\n      );\n      return true;\n    }()");
      if (constraintsError != null) {
        if (!this.debugCannotComputeDryLayout({error: constraintsError})) dart.assertFailed(null, I[1], 690, 14, "debugCannotComputeDryLayout(error: constraintsError)");
        return ui.Size.zero;
      }
      let sizes = this[_computeSizes]({layoutChild: C[23] || CT.C23, constraints: constraints});
      switch (this[_direction]) {
        case C[19] || CT.C19:
        {
          return constraints.constrain(new ui.Size.new(sizes.mainSize, sizes.crossSize));
        }
        case C[22] || CT.C22:
        {
          return constraints.constrain(new ui.Size.new(sizes.crossSize, sizes.mainSize));
        }
      }
    }
    [_debugCheckConstraints](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      let reportParentConstraints = opts && 'reportParentConstraints' in opts ? opts.reportParentConstraints : null;
      let result = null;
      if (!dart.fn(() => {
        let maxMainSize = this[_direction] === basic_types.Axis.horizontal ? constraints.maxWidth : constraints.maxHeight;
        let canFlex = maxMainSize < 1 / 0;
        let child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          if (flex > 0) {
            let identity = this[_direction] === basic_types.Axis.horizontal ? "row" : "column";
            let axis = this[_direction] === basic_types.Axis.horizontal ? "horizontal" : "vertical";
            let dimension = this[_direction] === basic_types.Axis.horizontal ? "width" : "height";
            let error = null;
            let message = null;
            let addendum = T.JSArrayOfDiagnosticsNode().of([]);
            if (!canFlex && (this.mainAxisSize === flex$.MainAxisSize.max || this[_getFit](child) === flex$.FlexFit.tight)) {
              error = new assertions.ErrorSummary.new("RenderFlex children have non-zero flex but incoming " + dimension + " constraints are unbounded.");
              message = new assertions.ErrorDescription.new("When a " + identity + " is in a parent that does not provide a finite " + dimension + " constraint, for example " + "if it is in a " + axis + " scrollable, it will try to shrink-wrap its children along the " + axis + " " + "axis. Setting a flex on a child (e.g. using Expanded) indicates that the child is to " + "expand to fill the remaining space in the " + axis + " direction.");
              if (reportParentConstraints) {
                let node = this;
                switch (this[_direction]) {
                  case C[19] || CT.C19:
                  {
                    while (!dart.nullCheck(node).constraints.hasBoundedWidth && box.RenderBox.is(node.parent))
                      node = box.RenderBox.as(dart.nullCheck(node.parent));
                    if (!node.constraints.hasBoundedWidth) node = null;
                    break;
                  }
                  case C[22] || CT.C22:
                  {
                    while (!dart.nullCheck(node).constraints.hasBoundedHeight && box.RenderBox.is(node.parent))
                      node = box.RenderBox.as(dart.nullCheck(node.parent));
                    if (!node.constraints.hasBoundedHeight) node = null;
                    break;
                  }
                }
                if (node != null) {
                  addendum[$add](node.describeForError("The nearest ancestor providing an unbounded width constraint is"));
                }
              }
              addendum[$add](new assertions.ErrorHint.new("See also: https://flutter.dev/layout/"));
            } else {
              return true;
            }
            result = new assertions.FlutterError.fromParts((() => {
              let t8 = T.JSArrayOfDiagnosticsNode().of([error, message, new assertions.ErrorDescription.new("These two directives are mutually exclusive. If a parent is to shrink-wrap its child, the child " + "cannot simultaneously expand to fit its parent."), new assertions.ErrorHint.new("Consider setting mainAxisSize to MainAxisSize.min and using FlexFit.loose fits for the flexible " + "children (using Flexible rather than Expanded). This will allow the flexible children " + "to size themselves to less than the infinite remaining space they would otherwise be " + "forced to take, and then will cause the RenderFlex to shrink-wrap the children " + "rather than expanding to fit the maximum constraints provided by the parent."), new assertions.ErrorDescription.new("If this message did not help you determine the problem, consider using debugDumpRenderTree():\n" + "  https://flutter.dev/debugging/#rendering-layer\n" + "  http://api.flutter.dev/flutter/rendering/debugDumpRenderTree.html"), this.describeForError("The affected RenderFlex is", {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new diagnostics.DiagnosticsProperty.new("The creator information is set to", this.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]);
              t8[$addAll](addendum);
              t8.push(new assertions.ErrorDescription.new("If none of the above helps enough to fix this problem, please don't hesitate to file a bug:\n" + "  https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
              return t8;
            })());
            return true;
          }
          child = this.childAfter(child);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 709, 12, "() {\n      final double maxMainSize = _direction == Axis.horizontal ? constraints.maxWidth : constraints.maxHeight;\n      final bool canFlex = maxMainSize < double.infinity;\n      RenderBox? child = firstChild;\n      while (child != null) {\n        final int flex = _getFlex(child);\n        if (flex > 0) {\n          final String identity = _direction == Axis.horizontal ? 'row' : 'column';\n          final String axis = _direction == Axis.horizontal ? 'horizontal' : 'vertical';\n          final String dimension = _direction == Axis.horizontal ? 'width' : 'height';\n          DiagnosticsNode error, message;\n          final List<DiagnosticsNode> addendum = <DiagnosticsNode>[];\n          if (!canFlex && (mainAxisSize == MainAxisSize.max || _getFit(child) == FlexFit.tight)) {\n            error = ErrorSummary('RenderFlex children have non-zero flex but incoming $dimension constraints are unbounded.');\n            message = ErrorDescription(\n              'When a $identity is in a parent that does not provide a finite $dimension constraint, for example '\n              'if it is in a $axis scrollable, it will try to shrink-wrap its children along the $axis '\n              'axis. Setting a flex on a child (e.g. using Expanded) indicates that the child is to '\n              'expand to fill the remaining space in the $axis direction.',\n            );\n            if (reportParentConstraints) { // Constraints of parents are unavailable in dry layout.\n              RenderBox? node = this;\n              switch (_direction) {\n                case Axis.horizontal:\n                  while (!node!.constraints.hasBoundedWidth && node.parent is RenderBox)\n                    node = node.parent! as RenderBox;\n                  if (!node.constraints.hasBoundedWidth)\n                    node = null;\n                  break;\n                case Axis.vertical:\n                  while (!node!.constraints.hasBoundedHeight && node.parent is RenderBox)\n                    node = node.parent! as RenderBox;\n                  if (!node.constraints.hasBoundedHeight)\n                    node = null;\n                  break;\n              }\n              if (node != null) {\n                addendum.add(node.describeForError('The nearest ancestor providing an unbounded width constraint is'));\n              }\n            }\n            addendum.add(ErrorHint('See also: https://flutter.dev/layout/'));\n          } else {\n            return true;\n          }\n          result = FlutterError.fromParts(<DiagnosticsNode>[\n            error,\n            message,\n            ErrorDescription(\n              'These two directives are mutually exclusive. If a parent is to shrink-wrap its child, the child '\n              'cannot simultaneously expand to fit its parent.',\n            ),\n            ErrorHint(\n              'Consider setting mainAxisSize to MainAxisSize.min and using FlexFit.loose fits for the flexible '\n              'children (using Flexible rather than Expanded). This will allow the flexible children '\n              'to size themselves to less than the infinite remaining space they would otherwise be '\n              'forced to take, and then will cause the RenderFlex to shrink-wrap the children '\n              'rather than expanding to fit the maximum constraints provided by the parent.',\n            ),\n            ErrorDescription(\n              'If this message did not help you determine the problem, consider using debugDumpRenderTree():\\n'\n              '  https://flutter.dev/debugging/#rendering-layer\\n'\n              '  http://api.flutter.dev/flutter/rendering/debugDumpRenderTree.html',\n            ),\n            describeForError('The affected RenderFlex is', style: DiagnosticsTreeStyle.errorProperty),\n            DiagnosticsProperty<dynamic>('The creator information is set to', debugCreator, style: DiagnosticsTreeStyle.errorProperty),\n            ...addendum,\n            ErrorDescription(\n              \"If none of the above helps enough to fix this problem, please don't hesitate to file a bug:\\n\"\n              '  https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n            ),\n          ]);\n          return true;\n        }\n        child = childAfter(child);\n      }\n      return true;\n    }()");
      return result;
    }
    [_computeSizes](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      if (!this[_debugHasNecessaryDirections]) dart.assertFailed(null, I[1], 790, 12, "_debugHasNecessaryDirections");
      if (!(constraints !== null)) dart.assertFailed(null, I[1], 791, 12, "constraints != null");
      let totalFlex = 0;
      let maxMainSize = this[_direction] === basic_types.Axis.horizontal ? constraints.maxWidth : constraints.maxHeight;
      let canFlex = maxMainSize < 1 / 0;
      let crossSize = 0.0;
      let allocatedSize = 0.0;
      let child = this.firstChild;
      let lastFlexChild = null;
      while (child != null) {
        let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
        let flex = this[_getFlex](child);
        if (flex > 0) {
          totalFlex = totalFlex + flex;
          lastFlexChild = child;
        } else {
          let innerConstraints = null;
          if (this.crossAxisAlignment === flex$.CrossAxisAlignment.stretch) {
            switch (this[_direction]) {
              case C[19] || CT.C19:
              {
                innerConstraints = new box.BoxConstraints.tightFor({height: constraints.maxHeight});
                break;
              }
              case C[22] || CT.C22:
              {
                innerConstraints = new box.BoxConstraints.tightFor({width: constraints.maxWidth});
                break;
              }
            }
          } else {
            switch (this[_direction]) {
              case C[19] || CT.C19:
              {
                innerConstraints = new box.BoxConstraints.new({maxHeight: constraints.maxHeight});
                break;
              }
              case C[22] || CT.C22:
              {
                innerConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
                break;
              }
            }
          }
          let childSize = layoutChild(child, innerConstraints);
          allocatedSize = allocatedSize + this[_getMainSize](childSize);
          crossSize = math.max(core.double, crossSize, this[_getCrossSize](childSize));
        }
        if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[1], 833, 14, "child.parentData == childParentData");
        child = childParentData.nextSibling;
      }
      let freeSpace = math.max(core.double, 0.0, (canFlex ? maxMainSize : 0.0) - allocatedSize);
      let allocatedFlexSpace = 0.0;
      if (totalFlex > 0) {
        let spacePerFlex = canFlex ? freeSpace / totalFlex : 0 / 0;
        child = this.firstChild;
        while (child != null) {
          let flex = this[_getFlex](child);
          if (flex > 0) {
            let maxChildExtent = canFlex ? dart.equals(child, lastFlexChild) ? freeSpace - allocatedFlexSpace : spacePerFlex * flex : 1 / 0;
            let minChildExtent = null;
            function minChildExtent$35get() {
              let t10;
              t10 = minChildExtent;
              return t10 == null ? dart.throw(new _internal.LateError.localNI("minChildExtent")) : t10;
            }
            dart.fn(minChildExtent$35get, T.VoidTodouble());
            function minChildExtent$35set(t11) {
              if (minChildExtent == null)
                return minChildExtent = t11;
              else
                dart.throw(new _internal.LateError.localAI("minChildExtent"));
            }
            dart.fn(minChildExtent$35set, T.doubleTodynamic());
            switch (this[_getFit](child)) {
              case C[0] || CT.C0:
              {
                if (!(maxChildExtent < 1 / 0)) dart.assertFailed(null, I[1], 850, 22, "maxChildExtent < double.infinity");
                minChildExtent$35set(maxChildExtent);
                break;
              }
              case C[1] || CT.C1:
              {
                minChildExtent$35set(0.0);
                break;
              }
            }
            if (!(minChildExtent$35get() !== null)) dart.assertFailed(null, I[1], 857, 18, "minChildExtent != null");
            let innerConstraints = null;
            if (this.crossAxisAlignment === flex$.CrossAxisAlignment.stretch) {
              switch (this[_direction]) {
                case C[19] || CT.C19:
                {
                  innerConstraints = new box.BoxConstraints.new({minWidth: minChildExtent$35get(), maxWidth: maxChildExtent, minHeight: constraints.maxHeight, maxHeight: constraints.maxHeight});
                  break;
                }
                case C[22] || CT.C22:
                {
                  innerConstraints = new box.BoxConstraints.new({minWidth: constraints.maxWidth, maxWidth: constraints.maxWidth, minHeight: minChildExtent$35get(), maxHeight: maxChildExtent});
                  break;
                }
              }
            } else {
              switch (this[_direction]) {
                case C[19] || CT.C19:
                {
                  innerConstraints = new box.BoxConstraints.new({minWidth: minChildExtent$35get(), maxWidth: maxChildExtent, maxHeight: constraints.maxHeight});
                  break;
                }
                case C[22] || CT.C22:
                {
                  innerConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth, minHeight: minChildExtent$35get(), maxHeight: maxChildExtent});
                  break;
                }
              }
            }
            let childSize = layoutChild(child, innerConstraints);
            let childMainSize = this[_getMainSize](childSize);
            if (!(childMainSize <= maxChildExtent)) dart.assertFailed(null, I[1], 898, 18, "childMainSize <= maxChildExtent");
            allocatedSize = allocatedSize + childMainSize;
            allocatedFlexSpace = allocatedFlexSpace + maxChildExtent;
            crossSize = math.max(core.double, crossSize, this[_getCrossSize](childSize));
          }
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      let idealSize = canFlex && this.mainAxisSize === flex$.MainAxisSize.max ? maxMainSize : allocatedSize;
      return new flex$._LayoutSizes.new({mainSize: idealSize, crossSize: crossSize, allocatedSize: allocatedSize});
    }
    performLayout() {
      let t21;
      if (!this[_debugHasNecessaryDirections]) dart.assertFailed(null, I[1], 918, 12, "_debugHasNecessaryDirections");
      let constraints = this.constraints;
      if (!dart.fn(() => {
        let constraintsError = this[_debugCheckConstraints]({constraints: constraints, reportParentConstraints: true});
        if (constraintsError != null) {
          dart.throw(constraintsError);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 920, 12, "() {\n      final FlutterError? constraintsError = _debugCheckConstraints(\n        constraints: constraints,\n        reportParentConstraints: true,\n      );\n      if (constraintsError != null) {\n        throw constraintsError;\n      }\n      return true;\n    }()");
      let sizes = this[_computeSizes]({layoutChild: C[24] || CT.C24, constraints: constraints});
      let allocatedSize = sizes.allocatedSize;
      let actualSize = sizes.mainSize;
      let crossSize = sizes.crossSize;
      let maxBaselineDistance = 0.0;
      if (this.crossAxisAlignment === flex$.CrossAxisAlignment.baseline) {
        let child = this.firstChild;
        let maxSizeAboveBaseline = 0.0;
        let maxSizeBelowBaseline = 0.0;
        while (child != null) {
          if (!dart.fn(() => {
            if (this.textBaseline == null) dart.throw(assertions.FlutterError.new("To use FlexAlignItems.baseline, you must also specify which baseline to use using the \"baseline\" argument."));
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[1], 945, 16, "() {\n          if (textBaseline == null)\n            throw FlutterError('To use FlexAlignItems.baseline, you must also specify which baseline to use using the \"baseline\" argument.');\n          return true;\n        }()");
          let distance = child.getDistanceToBaseline(dart.nullCheck(this.textBaseline), {onlyReal: true});
          if (distance != null) {
            maxBaselineDistance = math.max(core.double, maxBaselineDistance, distance);
            maxSizeAboveBaseline = math.max(core.double, distance, maxSizeAboveBaseline);
            maxSizeBelowBaseline = math.max(core.double, child.size.height - dart.notNull(distance), maxSizeBelowBaseline);
            crossSize = math.max(core.double, maxSizeAboveBaseline + maxSizeBelowBaseline, crossSize);
          }
          let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      switch (this[_direction]) {
        case C[19] || CT.C19:
        {
          this.size = constraints.constrain(new ui.Size.new(actualSize, crossSize));
          actualSize = this.size.width;
          crossSize = this.size.height;
          break;
        }
        case C[22] || CT.C22:
        {
          this.size = constraints.constrain(new ui.Size.new(crossSize, actualSize));
          actualSize = this.size.height;
          crossSize = this.size.width;
          break;
        }
      }
      let actualSizeDelta = actualSize - allocatedSize;
      this[_overflow] = math.max(core.double, 0.0, -actualSizeDelta);
      let remainingSpace = math.max(core.double, 0.0, actualSizeDelta);
      let leadingSpace = null;
      function leadingSpace$35get() {
        let t14;
        t14 = leadingSpace;
        return t14 == null ? dart.throw(new _internal.LateError.localNI("leadingSpace")) : t14;
      }
      dart.fn(leadingSpace$35get, T.VoidTodouble());
      function leadingSpace$35set(t15) {
        if (leadingSpace == null)
          return leadingSpace = t15;
        else
          dart.throw(new _internal.LateError.localAI("leadingSpace"));
      }
      dart.fn(leadingSpace$35set, T.doubleTodynamic());
      let betweenSpace = null;
      function betweenSpace$35get() {
        let t18;
        t18 = betweenSpace;
        return t18 == null ? dart.throw(new _internal.LateError.localNI("betweenSpace")) : t18;
      }
      dart.fn(betweenSpace$35get, T.VoidTodouble());
      function betweenSpace$35set(t19) {
        if (betweenSpace == null)
          return betweenSpace = t19;
        else
          dart.throw(new _internal.LateError.localAI("betweenSpace"));
      }
      dart.fn(betweenSpace$35set, T.doubleTodynamic());
      let flipMainAxis = !dart.test((t21 = flex$._startIsTopLeft(this.direction, this.textDirection, this.verticalDirection), t21 == null ? true : t21));
      switch (this[_mainAxisAlignment]) {
        case C[6] || CT.C6:
        {
          leadingSpace$35set(0.0);
          betweenSpace$35set(0.0);
          break;
        }
        case C[7] || CT.C7:
        {
          leadingSpace$35set(remainingSpace);
          betweenSpace$35set(0.0);
          break;
        }
        case C[8] || CT.C8:
        {
          leadingSpace$35set(remainingSpace / 2.0);
          betweenSpace$35set(0.0);
          break;
        }
        case C[9] || CT.C9:
        {
          leadingSpace$35set(0.0);
          betweenSpace$35set(this.childCount > 1 ? remainingSpace / (this.childCount - 1) : 0.0);
          break;
        }
        case C[10] || CT.C10:
        {
          betweenSpace$35set(this.childCount > 0 ? remainingSpace / this.childCount : 0.0);
          leadingSpace$35set(betweenSpace$35get() / 2.0);
          break;
        }
        case C[11] || CT.C11:
        {
          betweenSpace$35set(this.childCount > 0 ? remainingSpace / (this.childCount + 1) : 0.0);
          leadingSpace$35set(betweenSpace$35get());
          break;
        }
      }
      let childMainPosition = flipMainAxis ? actualSize - leadingSpace$35get() : leadingSpace$35get();
      let child = this.firstChild;
      while (child != null) {
        let childParentData = flex$.FlexParentData.as(dart.nullCheck(child.parentData));
        let childCrossPosition = null;
        switch (this[_crossAxisAlignment]) {
          case C[13] || CT.C13:
          case C[14] || CT.C14:
          {
            childCrossPosition = flex$._startIsTopLeft(basic_types.flipAxis(this.direction), this.textDirection, this.verticalDirection) === (this[_crossAxisAlignment] === flex$.CrossAxisAlignment.start) ? 0.0 : crossSize - this[_getCrossSize](child.size);
            break;
          }
          case C[15] || CT.C15:
          {
            childCrossPosition = crossSize / 2.0 - this[_getCrossSize](child.size) / 2.0;
            break;
          }
          case C[16] || CT.C16:
          {
            childCrossPosition = 0.0;
            break;
          }
          case C[17] || CT.C17:
          {
            if (this[_direction] === basic_types.Axis.horizontal) {
              if (!(this.textBaseline != null)) dart.assertFailed(null, I[1], 1040, 20, "textBaseline != null");
              let distance = child.getDistanceToBaseline(dart.nullCheck(this.textBaseline), {onlyReal: true});
              if (distance != null)
                childCrossPosition = maxBaselineDistance - dart.notNull(distance);
              else
                childCrossPosition = 0.0;
            } else {
              childCrossPosition = 0.0;
            }
            break;
          }
        }
        if (flipMainAxis) childMainPosition = childMainPosition - this[_getMainSize](child.size);
        switch (this[_direction]) {
          case C[19] || CT.C19:
          {
            childParentData.offset = new ui.Offset.new(childMainPosition, childCrossPosition);
            break;
          }
          case C[22] || CT.C22:
          {
            childParentData.offset = new ui.Offset.new(childCrossPosition, childMainPosition);
            break;
          }
        }
        if (flipMainAxis) {
          childMainPosition = childMainPosition - betweenSpace$35get();
        } else {
          childMainPosition = childMainPosition + (this[_getMainSize](child.size) + betweenSpace$35get());
        }
        child = childParentData.nextSibling;
      }
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.defaultHitTestChildren(result, {position: position});
    }
    paint(context, offset) {
      if (!this[_hasOverflow]) {
        this.defaultPaint(context, offset);
        return;
      }
      if (this.size.isEmpty) return;
      if (this.clipBehavior === ui.Clip.none) {
        this[_clipRectLayer].layer = null;
        this.defaultPaint(context, offset);
      } else {
        this[_clipRectLayer].layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, 'defaultPaint'), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
      }
      if (!dart.fn(() => {
        let debugOverflowHints = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new("The overflowing " + dart.str(this[$runtimeType]) + " has an orientation of " + dart.str(this[_direction]) + "."), new assertions.ErrorDescription.new("The edge of the " + dart.str(this[$runtimeType]) + " that is overflowing has been marked " + "in the rendering with a yellow and black striped pattern. This is " + "usually caused by the contents being too big for the " + dart.str(this[$runtimeType]) + "."), new assertions.ErrorHint.new("Consider applying a flex factor (e.g. using an Expanded widget) to " + "force the children of the " + dart.str(this[$runtimeType]) + " to fit within the available " + "space instead of being sized to their natural size."), new assertions.ErrorHint.new("This is considered an error condition because it indicates that there " + "is content that cannot be seen. If the content is legitimately bigger " + "than the available space, consider clipping it with a ClipRect widget " + "before putting it in the flex, or using a scrollable container rather " + "than a Flex, like a ListView.")]);
        let overflowChildRect = null;
        switch (this[_direction]) {
          case C[19] || CT.C19:
          {
            overflowChildRect = new ui.Rect.fromLTWH(0.0, 0.0, this.size.width + this[_overflow], 0.0);
            break;
          }
          case C[22] || CT.C22:
          {
            overflowChildRect = new ui.Rect.fromLTWH(0.0, 0.0, 0.0, this.size.height + this[_overflow]);
            break;
          }
        }
        this.paintOverflowIndicator(context, offset, ui.Offset.zero['&'](this.size), overflowChildRect, {overflowHints: debugOverflowHints});
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 1101, 12, "() {\n      // Only set this if it's null to save work. It gets reset to null if the\n      // _direction changes.\n      final List<DiagnosticsNode> debugOverflowHints = <DiagnosticsNode>[\n        ErrorDescription(\n          'The overflowing $runtimeType has an orientation of $_direction.',\n        ),\n        ErrorDescription(\n          'The edge of the $runtimeType that is overflowing has been marked '\n          'in the rendering with a yellow and black striped pattern. This is '\n          'usually caused by the contents being too big for the $runtimeType.',\n        ),\n        ErrorHint(\n          'Consider applying a flex factor (e.g. using an Expanded widget) to '\n          'force the children of the $runtimeType to fit within the available '\n          'space instead of being sized to their natural size.',\n        ),\n        ErrorHint(\n          'This is considered an error condition because it indicates that there '\n          'is content that cannot be seen. If the content is legitimately bigger '\n          'than the available space, consider clipping it with a ClipRect widget '\n          'before putting it in the flex, or using a scrollable container rather '\n          'than a Flex, like a ListView.',\n        ),\n      ];\n\n      // Simulate a child rect that overflows by the right amount. This child\n      // rect is never used for drawing, just for determining the overflow\n      // location and amount.\n      final Rect overflowChildRect;\n      switch (_direction) {\n        case Axis.horizontal:\n          overflowChildRect = Rect.fromLTWH(0.0, 0.0, size.width + _overflow, 0.0);\n          break;\n        case Axis.vertical:\n          overflowChildRect = Rect.fromLTWH(0.0, 0.0, 0.0, size.height + _overflow);\n          break;\n      }\n      paintOverflowIndicator(context, offset, Offset.zero & size, overflowChildRect, overflowHints: debugOverflowHints);\n      return true;\n    }()");
    }
    dispose() {
      this[_clipRectLayer].layer = null;
      super.dispose();
    }
    describeApproximatePaintClip(child) {
      object.RenderObject.as(child);
      return this[_hasOverflow] ? ui.Offset.zero['&'](this.size) : null;
    }
    toStringShort() {
      let header = super.toStringShort();
      if (!false) {
        if (this[_hasOverflow]) header = header + " OVERFLOWING";
      }
      return header;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfAxis()).new("direction", this.direction));
      properties.add(new (T.EnumPropertyOfMainAxisAlignment()).new("mainAxisAlignment", this.mainAxisAlignment));
      properties.add(new (T.EnumPropertyOfMainAxisSize()).new("mainAxisSize", this.mainAxisSize));
      properties.add(new (T.EnumPropertyOfCrossAxisAlignment()).new("crossAxisAlignment", this.crossAxisAlignment));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfVerticalDirection()).new("verticalDirection", this.verticalDirection, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfTextBaseline()).new("textBaseline", this.textBaseline, {defaultValue: null}));
    }
  };
  (flex$.RenderFlex.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let direction = opts && 'direction' in opts ? opts.direction : C[19] || CT.C19;
    let mainAxisSize = opts && 'mainAxisSize' in opts ? opts.mainAxisSize : C[4] || CT.C4;
    let mainAxisAlignment = opts && 'mainAxisAlignment' in opts ? opts.mainAxisAlignment : C[6] || CT.C6;
    let crossAxisAlignment = opts && 'crossAxisAlignment' in opts ? opts.crossAxisAlignment : C[15] || CT.C15;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let verticalDirection = opts && 'verticalDirection' in opts ? opts.verticalDirection : C[20] || CT.C20;
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[21] || CT.C21;
    this[_overflow] = 0.0;
    this[_clipBehavior] = ui.Clip.none;
    this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
    if (!(direction !== null)) dart.assertFailed(null, I[1], 292, 15, "direction != null");
    if (!(mainAxisAlignment !== null)) dart.assertFailed(null, I[1], 293, 15, "mainAxisAlignment != null");
    if (!(mainAxisSize !== null)) dart.assertFailed(null, I[1], 294, 15, "mainAxisSize != null");
    if (!(crossAxisAlignment !== null)) dart.assertFailed(null, I[1], 295, 15, "crossAxisAlignment != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 296, 15, "clipBehavior != null");
    this[_direction] = direction;
    this[_mainAxisAlignment] = mainAxisAlignment;
    this[_mainAxisSize] = mainAxisSize;
    this[_crossAxisAlignment] = crossAxisAlignment;
    this[_textDirection] = textDirection;
    this[_verticalDirection] = verticalDirection;
    this[_textBaseline] = textBaseline;
    this[_clipBehavior] = clipBehavior;
    flex$.RenderFlex.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = flex$.RenderFlex.prototype;
  dart.addTypeTests(flex$.RenderFlex);
  dart.addTypeCaches(flex$.RenderFlex);
  dart.setMethodSignature(flex$.RenderFlex, () => ({
    __proto__: dart.getMethods(flex$.RenderFlex.__proto__),
    [_getIntrinsicSize]: dart.fnType(core.double, [], {}, {childSize: dart.fnType(core.double, [box.RenderBox, core.double]), extent: core.double, sizingDirection: basic_types.Axis}),
    [_getFlex]: dart.fnType(core.int, [box.RenderBox]),
    [_getFit]: dart.fnType(flex$.FlexFit, [box.RenderBox]),
    [_getCrossSize]: dart.fnType(core.double, [ui.Size]),
    [_getMainSize]: dart.fnType(core.double, [ui.Size]),
    [_debugCheckConstraints]: dart.fnType(dart.nullable(assertions.FlutterError), [], {}, {constraints: box.BoxConstraints, reportParentConstraints: core.bool}),
    [_computeSizes]: dart.fnType(flex$._LayoutSizes, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setGetterSignature(flex$.RenderFlex, () => ({
    __proto__: dart.getGetters(flex$.RenderFlex.__proto__),
    direction: basic_types.Axis,
    mainAxisAlignment: flex$.MainAxisAlignment,
    mainAxisSize: flex$.MainAxisSize,
    crossAxisAlignment: flex$.CrossAxisAlignment,
    textDirection: dart.nullable(ui.TextDirection),
    verticalDirection: basic_types.VerticalDirection,
    textBaseline: dart.nullable(ui.TextBaseline),
    [_debugHasNecessaryDirections]: core.bool,
    [_hasOverflow]: core.bool,
    clipBehavior: ui.Clip,
    [_canComputeIntrinsics]: core.bool
  }));
  dart.setSetterSignature(flex$.RenderFlex, () => ({
    __proto__: dart.getSetters(flex$.RenderFlex.__proto__),
    direction: basic_types.Axis,
    mainAxisAlignment: flex$.MainAxisAlignment,
    mainAxisSize: flex$.MainAxisSize,
    crossAxisAlignment: flex$.CrossAxisAlignment,
    textDirection: dart.nullable(ui.TextDirection),
    verticalDirection: basic_types.VerticalDirection,
    textBaseline: dart.nullable(ui.TextBaseline),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(flex$.RenderFlex, I[0]);
  dart.setFieldSignature(flex$.RenderFlex, () => ({
    __proto__: dart.getFields(flex$.RenderFlex.__proto__),
    [_direction]: dart.fieldType(basic_types.Axis),
    [_mainAxisAlignment]: dart.fieldType(flex$.MainAxisAlignment),
    [_mainAxisSize]: dart.fieldType(flex$.MainAxisSize),
    [_crossAxisAlignment]: dart.fieldType(flex$.CrossAxisAlignment),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_verticalDirection]: dart.fieldType(basic_types.VerticalDirection),
    [_textBaseline]: dart.fieldType(dart.nullable(ui.TextBaseline)),
    [_overflow]: dart.fieldType(core.double),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
  }));
  var mainSize$ = dart.privateName(flex$, "_LayoutSizes.mainSize");
  var crossSize$ = dart.privateName(flex$, "_LayoutSizes.crossSize");
  var allocatedSize$ = dart.privateName(flex$, "_LayoutSizes.allocatedSize");
  flex$._LayoutSizes = class _LayoutSizes extends core.Object {
    get mainSize() {
      return this[mainSize$];
    }
    set mainSize(value) {
      super.mainSize = value;
    }
    get crossSize() {
      return this[crossSize$];
    }
    set crossSize(value) {
      super.crossSize = value;
    }
    get allocatedSize() {
      return this[allocatedSize$];
    }
    set allocatedSize(value) {
      super.allocatedSize = value;
    }
    static ['_#new#tearOff'](opts) {
      let mainSize = opts && 'mainSize' in opts ? opts.mainSize : null;
      let crossSize = opts && 'crossSize' in opts ? opts.crossSize : null;
      let allocatedSize = opts && 'allocatedSize' in opts ? opts.allocatedSize : null;
      return new flex$._LayoutSizes.new({mainSize: mainSize, crossSize: crossSize, allocatedSize: allocatedSize});
    }
  };
  (flex$._LayoutSizes.new = function(opts) {
    let mainSize = opts && 'mainSize' in opts ? opts.mainSize : null;
    let crossSize = opts && 'crossSize' in opts ? opts.crossSize : null;
    let allocatedSize = opts && 'allocatedSize' in opts ? opts.allocatedSize : null;
    this[mainSize$] = mainSize;
    this[crossSize$] = crossSize;
    this[allocatedSize$] = allocatedSize;
    ;
  }).prototype = flex$._LayoutSizes.prototype;
  dart.addTypeTests(flex$._LayoutSizes);
  dart.addTypeCaches(flex$._LayoutSizes);
  dart.setLibraryUri(flex$._LayoutSizes, I[0]);
  dart.setFieldSignature(flex$._LayoutSizes, () => ({
    __proto__: dart.getFields(flex$._LayoutSizes.__proto__),
    mainSize: dart.finalFieldType(core.double),
    crossSize: dart.finalFieldType(core.double),
    allocatedSize: dart.finalFieldType(core.double)
  }));
  flex$._startIsTopLeft = function _startIsTopLeft(direction, textDirection, verticalDirection) {
    if (!(direction !== null)) dart.assertFailed(null, I[1], 202, 10, "direction != null");
    switch (direction) {
      case C[19] || CT.C19:
      {
        switch (textDirection) {
          case C[25] || CT.C25:
          {
            return true;
          }
          case C[26] || CT.C26:
          {
            return false;
          }
          case null:
          {
            return null;
          }
        }
      }
      case C[22] || CT.C22:
      {
        switch (verticalDirection) {
          case C[20] || CT.C20:
          {
            return true;
          }
          case C[27] || CT.C27:
          {
            return false;
          }
          case null:
          {
            return null;
          }
        }
      }
    }
  };
  dart.trackLibraries("packages/flutter/src/rendering/flex.dart", {
    "package:flutter/src/rendering/flex.dart": flex$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flex.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/flex.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__flex: flex$
  };
}));

//# sourceMappingURL=flex.dart.lib.js.map
