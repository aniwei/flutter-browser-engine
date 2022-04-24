define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__rendering__list_body_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var list_body = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    EnumPropertyOfAxisDirection: () => (T.EnumPropertyOfAxisDirection = dart.constFn(diagnostics.EnumProperty$(basic_types.AxisDirection)))(),
    RenderBoxTodouble: () => (T.RenderBoxTodouble = dart.constFn(dart.fnType(core.double, [box.RenderBox])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 2
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
        [_Enum__name]: "left",
        [_Enum_index]: 3
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
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
    "package:flutter/src/rendering/list_body.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/list_body.dart"
  ];
  list_body.ListBodyParentData = class ListBodyParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    static ['_#new#tearOff']() {
      return new list_body.ListBodyParentData.new();
    }
  };
  (list_body.ListBodyParentData.new = function() {
    list_body.ListBodyParentData.__proto__.new.call(this);
    ;
  }).prototype = list_body.ListBodyParentData.prototype;
  dart.addTypeTests(list_body.ListBodyParentData);
  dart.addTypeCaches(list_body.ListBodyParentData);
  dart.setLibraryUri(list_body.ListBodyParentData, I[0]);
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _axisDirection = dart.privateName(list_body, "_axisDirection");
  var _debugCheckConstraints = dart.privateName(list_body, "_debugCheckConstraints");
  var _getIntrinsicCrossAxis = dart.privateName(list_body, "_getIntrinsicCrossAxis");
  var _getIntrinsicMainAxis = dart.privateName(list_body, "_getIntrinsicMainAxis");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, list_body.ListBodyParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, list_body.ListBodyParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, list_body.ListBodyParentData));
  list_body.RenderListBody = class RenderListBody extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[0] || CT.C0;
      return new list_body.RenderListBody.new({children: children, axisDirection: axisDirection});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!list_body.ListBodyParentData.is(child.parentData)) child.parentData = new list_body.ListBodyParentData.new();
    }
    get axisDirection() {
      return this[_axisDirection];
    }
    set axisDirection(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 53, 12, "value != null");
      if (this[_axisDirection] === value) return;
      this[_axisDirection] = value;
      this.markNeedsLayout();
    }
    get mainAxis() {
      return basic_types.axisDirectionToAxis(this.axisDirection);
    }
    computeDryLayout(constraints) {
      if (!this[_debugCheckConstraints](constraints)) dart.assertFailed(null, I[1], 66, 12, "_debugCheckConstraints(constraints)");
      let mainAxisExtent = 0.0;
      let child = this.firstChild;
      switch (this.axisDirection) {
        case C[1] || CT.C1:
        case C[2] || CT.C2:
        {
          let innerConstraints = new box.BoxConstraints.tightFor({height: constraints.maxHeight});
          while (child != null) {
            let childSize = child.getDryLayout(innerConstraints);
            mainAxisExtent = mainAxisExtent + childSize.width;
            child = this.childAfter(child);
          }
          return constraints.constrain(new ui.Size.new(mainAxisExtent, constraints.maxHeight));
        }
        case C[3] || CT.C3:
        case C[0] || CT.C0:
        {
          let innerConstraints = new box.BoxConstraints.tightFor({width: constraints.maxWidth});
          while (child != null) {
            let childSize = child.getDryLayout(innerConstraints);
            mainAxisExtent = mainAxisExtent + childSize.height;
            child = this.childAfter(child);
          }
          return constraints.constrain(new ui.Size.new(constraints.maxWidth, mainAxisExtent));
        }
      }
    }
    [_debugCheckConstraints](constraints) {
      if (!dart.fn(() => {
        switch (this.mainAxis) {
          case C[4] || CT.C4:
          {
            if (!constraints.hasBoundedWidth) return true;
            break;
          }
          case C[5] || CT.C5:
          {
            if (!constraints.hasBoundedHeight) return true;
            break;
          }
        }
        dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderListBody must have unlimited space along its main axis."), new assertions.ErrorDescription.new("RenderListBody does not clip or resize its children, so it must be " + "placed in a parent that does not constrain the main " + "axis."), new assertions.ErrorHint.new("You probably want to put the RenderListBody inside a " + "RenderViewport with a matching main axis.")])));
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 92, 12, "() {\n      switch (mainAxis) {\n        case Axis.horizontal:\n          if (!constraints.hasBoundedWidth)\n            return true;\n          break;\n        case Axis.vertical:\n          if (!constraints.hasBoundedHeight)\n            return true;\n          break;\n      }\n      throw FlutterError.fromParts(<DiagnosticsNode>[\n        ErrorSummary('RenderListBody must have unlimited space along its main axis.'),\n        ErrorDescription(\n          'RenderListBody does not clip or resize its children, so it must be '\n          'placed in a parent that does not constrain the main '\n          'axis.',\n        ),\n        ErrorHint(\n          'You probably want to put the RenderListBody inside a '\n          'RenderViewport with a matching main axis.',\n        ),\n      ]);\n    }()");
      if (!dart.fn(() => {
        switch (this.mainAxis) {
          case C[4] || CT.C4:
          {
            if (constraints.hasBoundedHeight) return true;
            break;
          }
          case C[5] || CT.C5:
          {
            if (constraints.hasBoundedWidth) return true;
            break;
          }
        }
        dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderListBody must have a bounded constraint for its cross axis."), new assertions.ErrorDescription.new("RenderListBody forces its children to expand to fit the RenderListBody's container, " + "so it must be placed in a parent that constrains the cross " + "axis to a finite dimension."), new assertions.ErrorHint.new("If you are attempting to nest a RenderListBody with " + "one direction inside one of another direction, you will want to " + "wrap the inner one inside a box that fixes the dimension in that direction, " + "for example, a RenderIntrinsicWidth or RenderIntrinsicHeight object. " + "This is relatively expensive, however.")])));
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 116, 12, "() {\n      switch (mainAxis) {\n        case Axis.horizontal:\n          if (constraints.hasBoundedHeight)\n            return true;\n          break;\n        case Axis.vertical:\n          if (constraints.hasBoundedWidth)\n            return true;\n          break;\n      }\n      // TODO(ianh): Detect if we're actually nested blocks and say something\n      // more specific to the exact situation in that case, and don't mention\n      // nesting blocks in the negative case.\n      throw FlutterError.fromParts(<DiagnosticsNode>[\n        ErrorSummary('RenderListBody must have a bounded constraint for its cross axis.'),\n        ErrorDescription(\n          \"RenderListBody forces its children to expand to fit the RenderListBody's container, \"\n          'so it must be placed in a parent that constrains the cross '\n          'axis to a finite dimension.',\n        ),\n        // TODO(jacobr): this hint is a great candidate to promote to being an\n        // automated quick fix in the future.\n        ErrorHint(\n          'If you are attempting to nest a RenderListBody with '\n          'one direction inside one of another direction, you will want to '\n          'wrap the inner one inside a box that fixes the dimension in that direction, '\n          'for example, a RenderIntrinsicWidth or RenderIntrinsicHeight object. '\n          'This is relatively expensive, however.', // (that's why we don't do it automatically)\n        ),\n      ]);\n    }()");
      return true;
    }
    performLayout() {
      let constraints = this.constraints;
      if (!this[_debugCheckConstraints](constraints)) dart.assertFailed(null, I[1], 154, 12, "_debugCheckConstraints(constraints)");
      let mainAxisExtent = 0.0;
      let child = this.firstChild;
      switch (this.axisDirection) {
        case C[1] || CT.C1:
        {
          let innerConstraints = new box.BoxConstraints.tightFor({height: constraints.maxHeight});
          while (child != null) {
            child.layout(innerConstraints, {parentUsesSize: true});
            let childParentData = list_body.ListBodyParentData.as(dart.nullCheck(child.parentData));
            childParentData.offset = new ui.Offset.new(mainAxisExtent, 0.0);
            mainAxisExtent = mainAxisExtent + child.size.width;
            if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[1], 165, 18, "child.parentData == childParentData");
            child = childParentData.nextSibling;
          }
          this.size = constraints.constrain(new ui.Size.new(mainAxisExtent, constraints.maxHeight));
          break;
        }
        case C[2] || CT.C2:
        {
          let innerConstraints = new box.BoxConstraints.tightFor({height: constraints.maxHeight});
          while (child != null) {
            child.layout(innerConstraints, {parentUsesSize: true});
            let childParentData = list_body.ListBodyParentData.as(dart.nullCheck(child.parentData));
            mainAxisExtent = mainAxisExtent + child.size.width;
            if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[1], 176, 18, "child.parentData == childParentData");
            child = childParentData.nextSibling;
          }
          let position = 0.0;
          child = this.firstChild;
          while (child != null) {
            let childParentData = list_body.ListBodyParentData.as(dart.nullCheck(child.parentData));
            position = position + child.size.width;
            childParentData.offset = new ui.Offset.new(mainAxisExtent - position, 0.0);
            if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[1], 185, 18, "child.parentData == childParentData");
            child = childParentData.nextSibling;
          }
          this.size = constraints.constrain(new ui.Size.new(mainAxisExtent, constraints.maxHeight));
          break;
        }
        case C[0] || CT.C0:
        {
          let innerConstraints = new box.BoxConstraints.tightFor({width: constraints.maxWidth});
          while (child != null) {
            child.layout(innerConstraints, {parentUsesSize: true});
            let childParentData = list_body.ListBodyParentData.as(dart.nullCheck(child.parentData));
            childParentData.offset = new ui.Offset.new(0.0, mainAxisExtent);
            mainAxisExtent = mainAxisExtent + child.size.height;
            if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[1], 197, 18, "child.parentData == childParentData");
            child = childParentData.nextSibling;
          }
          this.size = constraints.constrain(new ui.Size.new(constraints.maxWidth, mainAxisExtent));
          break;
        }
        case C[3] || CT.C3:
        {
          let innerConstraints = new box.BoxConstraints.tightFor({width: constraints.maxWidth});
          while (child != null) {
            child.layout(innerConstraints, {parentUsesSize: true});
            let childParentData = list_body.ListBodyParentData.as(dart.nullCheck(child.parentData));
            mainAxisExtent = mainAxisExtent + child.size.height;
            if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[1], 208, 18, "child.parentData == childParentData");
            child = childParentData.nextSibling;
          }
          let position = 0.0;
          child = this.firstChild;
          while (child != null) {
            let childParentData = list_body.ListBodyParentData.as(dart.nullCheck(child.parentData));
            position = position + child.size.height;
            childParentData.offset = new ui.Offset.new(0.0, mainAxisExtent - position);
            if (!dart.equals(child.parentData, childParentData)) dart.assertFailed(null, I[1], 217, 18, "child.parentData == childParentData");
            child = childParentData.nextSibling;
          }
          this.size = constraints.constrain(new ui.Size.new(constraints.maxWidth, mainAxisExtent));
          break;
        }
      }
      if (!this.size.isFinite) dart.assertFailed(null, I[1], 223, 12, "size.isFinite");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfAxisDirection()).new("axisDirection", this.axisDirection));
    }
    [_getIntrinsicCrossAxis](childSize) {
      let extent = 0.0;
      let child = this.firstChild;
      while (child != null) {
        extent = math.max(core.double, extent, childSize(child));
        let childParentData = list_body.ListBodyParentData.as(dart.nullCheck(child.parentData));
        child = childParentData.nextSibling;
      }
      return extent;
    }
    [_getIntrinsicMainAxis](childSize) {
      let extent = 0.0;
      let child = this.firstChild;
      while (child != null) {
        extent = extent + childSize(child);
        let childParentData = list_body.ListBodyParentData.as(dart.nullCheck(child.parentData));
        child = childParentData.nextSibling;
      }
      return extent;
    }
    computeMinIntrinsicWidth(height) {
      if (!(this.mainAxis !== null)) dart.assertFailed(null, I[1], 256, 12, "mainAxis != null");
      switch (this.mainAxis) {
        case C[4] || CT.C4:
        {
          return this[_getIntrinsicMainAxis](dart.fn(child => child.getMinIntrinsicWidth(height), T.RenderBoxTodouble()));
        }
        case C[5] || CT.C5:
        {
          return this[_getIntrinsicCrossAxis](dart.fn(child => child.getMinIntrinsicWidth(height), T.RenderBoxTodouble()));
        }
      }
    }
    computeMaxIntrinsicWidth(height) {
      if (!(this.mainAxis !== null)) dart.assertFailed(null, I[1], 267, 12, "mainAxis != null");
      switch (this.mainAxis) {
        case C[4] || CT.C4:
        {
          return this[_getIntrinsicMainAxis](dart.fn(child => child.getMaxIntrinsicWidth(height), T.RenderBoxTodouble()));
        }
        case C[5] || CT.C5:
        {
          return this[_getIntrinsicCrossAxis](dart.fn(child => child.getMaxIntrinsicWidth(height), T.RenderBoxTodouble()));
        }
      }
    }
    computeMinIntrinsicHeight(width) {
      if (!(this.mainAxis !== null)) dart.assertFailed(null, I[1], 278, 12, "mainAxis != null");
      switch (this.mainAxis) {
        case C[4] || CT.C4:
        {
          return this[_getIntrinsicMainAxis](dart.fn(child => child.getMinIntrinsicHeight(width), T.RenderBoxTodouble()));
        }
        case C[5] || CT.C5:
        {
          return this[_getIntrinsicCrossAxis](dart.fn(child => child.getMinIntrinsicHeight(width), T.RenderBoxTodouble()));
        }
      }
    }
    computeMaxIntrinsicHeight(width) {
      if (!(this.mainAxis !== null)) dart.assertFailed(null, I[1], 289, 12, "mainAxis != null");
      switch (this.mainAxis) {
        case C[4] || CT.C4:
        {
          return this[_getIntrinsicMainAxis](dart.fn(child => child.getMaxIntrinsicHeight(width), T.RenderBoxTodouble()));
        }
        case C[5] || CT.C5:
        {
          return this[_getIntrinsicCrossAxis](dart.fn(child => child.getMaxIntrinsicHeight(width), T.RenderBoxTodouble()));
        }
      }
    }
    computeDistanceToActualBaseline(baseline) {
      return this.defaultComputeDistanceToFirstActualBaseline(baseline);
    }
    paint(context, offset) {
      this.defaultPaint(context, offset);
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.defaultHitTestChildren(result, {position: position});
    }
  };
  (list_body.RenderListBody.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : C[0] || CT.C0;
    if (!(axisDirection !== null)) dart.assertFailed(null, I[1], 35, 15, "axisDirection != null");
    this[_axisDirection] = axisDirection;
    list_body.RenderListBody.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = list_body.RenderListBody.prototype;
  dart.addTypeTests(list_body.RenderListBody);
  dart.addTypeCaches(list_body.RenderListBody);
  dart.setMethodSignature(list_body.RenderListBody, () => ({
    __proto__: dart.getMethods(list_body.RenderListBody.__proto__),
    [_debugCheckConstraints]: dart.fnType(core.bool, [box.BoxConstraints]),
    [_getIntrinsicCrossAxis]: dart.fnType(core.double, [dart.fnType(core.double, [box.RenderBox])]),
    [_getIntrinsicMainAxis]: dart.fnType(core.double, [dart.fnType(core.double, [box.RenderBox])])
  }));
  dart.setGetterSignature(list_body.RenderListBody, () => ({
    __proto__: dart.getGetters(list_body.RenderListBody.__proto__),
    axisDirection: basic_types.AxisDirection,
    mainAxis: basic_types.Axis
  }));
  dart.setSetterSignature(list_body.RenderListBody, () => ({
    __proto__: dart.getSetters(list_body.RenderListBody.__proto__),
    axisDirection: basic_types.AxisDirection
  }));
  dart.setLibraryUri(list_body.RenderListBody, I[0]);
  dart.setFieldSignature(list_body.RenderListBody, () => ({
    __proto__: dart.getFields(list_body.RenderListBody.__proto__),
    [_axisDirection]: dart.fieldType(basic_types.AxisDirection)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/list_body.dart", {
    "package:flutter/src/rendering/list_body.dart": list_body
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["list_body.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/list_body.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__list_body: list_body
  };
}));

//# sourceMappingURL=list_body.dart.lib.js.map
