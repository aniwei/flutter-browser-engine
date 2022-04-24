define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__rendering__flow_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const object$ = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var flow = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  var $isFinite = dartx.isFinite;
  var $clear = dartx.clear;
  var $add = dartx.add;
  var $length = dartx.length;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfRenderBox: () => (T.JSArrayOfRenderBox = dart.constFn(_interceptors.JSArray$(box.RenderBox)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    PaintingContextAndOffsetTovoid: () => (T.PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:flutter/src/rendering/flow.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/flow.dart"
  ];
  flow.FlowPaintingContext = class FlowPaintingContext extends core.Object {};
  (flow.FlowPaintingContext.new = function() {
    ;
  }).prototype = flow.FlowPaintingContext.prototype;
  dart.addTypeTests(flow.FlowPaintingContext);
  dart.addTypeCaches(flow.FlowPaintingContext);
  dart.setLibraryUri(flow.FlowPaintingContext, I[0]);
  var _repaint = dart.privateName(flow, "FlowDelegate._repaint");
  var _repaint$ = dart.privateName(flow, "_repaint");
  flow.FlowDelegate = class FlowDelegate extends core.Object {
    get [_repaint$]() {
      return this[_repaint];
    }
    set [_repaint$](value) {
      super[_repaint$] = value;
    }
    getSize(constraints) {
      return constraints.biggest;
    }
    getConstraintsForChild(i, constraints) {
      return constraints;
    }
    shouldRelayout(oldDelegate) {
      flow.FlowDelegate.as(oldDelegate);
      return false;
    }
    toString() {
      return object.objectRuntimeType(this, "FlowDelegate");
    }
  };
  (flow.FlowDelegate.new = function(opts) {
    let repaint = opts && 'repaint' in opts ? opts.repaint : null;
    this[_repaint] = repaint;
    ;
  }).prototype = flow.FlowDelegate.prototype;
  dart.addTypeTests(flow.FlowDelegate);
  dart.addTypeCaches(flow.FlowDelegate);
  dart.setMethodSignature(flow.FlowDelegate, () => ({
    __proto__: dart.getMethods(flow.FlowDelegate.__proto__),
    getSize: dart.fnType(ui.Size, [box.BoxConstraints]),
    getConstraintsForChild: dart.fnType(box.BoxConstraints, [core.int, box.BoxConstraints]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(flow.FlowDelegate, I[0]);
  dart.setFieldSignature(flow.FlowDelegate, () => ({
    __proto__: dart.getFields(flow.FlowDelegate.__proto__),
    [_repaint$]: dart.finalFieldType(dart.nullable(change_notifier.Listenable))
  }));
  dart.defineExtensionMethods(flow.FlowDelegate, ['toString']);
  var _transform = dart.privateName(flow, "_transform");
  flow.FlowParentData = class FlowParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    static ['_#new#tearOff']() {
      return new flow.FlowParentData.new();
    }
  };
  (flow.FlowParentData.new = function() {
    this[_transform] = null;
    flow.FlowParentData.__proto__.new.call(this);
    ;
  }).prototype = flow.FlowParentData.prototype;
  dart.addTypeTests(flow.FlowParentData);
  dart.addTypeCaches(flow.FlowParentData);
  dart.setLibraryUri(flow.FlowParentData, I[0]);
  dart.setFieldSignature(flow.FlowParentData, () => ({
    __proto__: dart.getFields(flow.FlowParentData.__proto__),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4))
  }));
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _clipBehavior = dart.privateName(flow, "_clipBehavior");
  var _randomAccessChildren = dart.privateName(flow, "_randomAccessChildren");
  var _lastPaintOrder = dart.privateName(flow, "_lastPaintOrder");
  var _paintingContext = dart.privateName(flow, "_paintingContext");
  var _paintingOffset = dart.privateName(flow, "_paintingOffset");
  var _clipRectLayer = dart.privateName(flow, "_clipRectLayer");
  var _delegate = dart.privateName(flow, "_delegate");
  var _getSize = dart.privateName(flow, "_getSize");
  var _paintWithDelegate = dart.privateName(flow, "_paintWithDelegate");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object$.ContainerRenderObjectMixin$(box.RenderBox, flow.FlowParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object$.ContainerRenderObjectMixin$(box.RenderBox, flow.FlowParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, flow.FlowParentData));
  flow.RenderFlow = class RenderFlow extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[0] || CT.C0;
      return new flow.RenderFlow.new({children: children, delegate: delegate, clipBehavior: clipBehavior});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      let childParentData = child.parentData;
      if (flow.FlowParentData.is(childParentData))
        childParentData[_transform] = null;
      else
        child.parentData = new flow.FlowParentData.new();
    }
    get delegate() {
      return this[_delegate];
    }
    set delegate(newDelegate) {
      let t0, t0$;
      if (!(newDelegate !== null)) dart.assertFailed(null, I[1], 211, 12, "newDelegate != null");
      if (this[_delegate][$_equals](newDelegate)) return;
      let oldDelegate = this[_delegate];
      this[_delegate] = newDelegate;
      if (!newDelegate[$runtimeType]._equals(oldDelegate[$runtimeType]) || newDelegate.shouldRelayout(oldDelegate))
        this.markNeedsLayout();
      else if (newDelegate.shouldRepaint(oldDelegate)) this.markNeedsPaint();
      if (this.attached) {
        t0 = oldDelegate[_repaint$];
        t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsPaint'));
        t0$ = newDelegate[_repaint$];
        t0$ == null ? null : t0$.addListener(dart.bind(this, 'markNeedsPaint'));
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 234, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    attach(owner) {
      let t0;
      object$.PipelineOwner.as(owner);
      super.attach(owner);
      t0 = this[_delegate][_repaint$];
      t0 == null ? null : t0.addListener(dart.bind(this, 'markNeedsPaint'));
    }
    detach() {
      let t0;
      t0 = this[_delegate][_repaint$];
      t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsPaint'));
      super.detach();
    }
    [_getSize](constraints) {
      if (!constraints.debugAssertIsValid()) dart.assertFailed(null, I[1], 255, 12, "constraints.debugAssertIsValid()");
      return constraints.constrain(this[_delegate].getSize(constraints));
    }
    get isRepaintBoundary() {
      return true;
    }
    computeMinIntrinsicWidth(height) {
      let width = this[_getSize](new box.BoxConstraints.tightForFinite({height: height})).width;
      if (width[$isFinite]) return width;
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      let width = this[_getSize](new box.BoxConstraints.tightForFinite({height: height})).width;
      if (width[$isFinite]) return width;
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      let height = this[_getSize](new box.BoxConstraints.tightForFinite({width: width})).height;
      if (height[$isFinite]) return height;
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      let height = this[_getSize](new box.BoxConstraints.tightForFinite({width: width})).height;
      if (height[$isFinite]) return height;
      return 0.0;
    }
    computeDryLayout(constraints) {
      return this[_getSize](constraints);
    }
    performLayout() {
      let constraints = this.constraints;
      this.size = this[_getSize](constraints);
      let i = 0;
      this[_randomAccessChildren][$clear]();
      let child = this.firstChild;
      while (child != null) {
        this[_randomAccessChildren][$add](child);
        let innerConstraints = this[_delegate].getConstraintsForChild(i, constraints);
        child.layout(innerConstraints, {parentUsesSize: true});
        let childParentData = flow.FlowParentData.as(dart.nullCheck(child.parentData));
        childParentData.offset = ui.Offset.zero;
        child = childParentData.nextSibling;
        i = i + 1;
      }
    }
    getChildSize(i) {
      if (i < 0 || i >= this[_randomAccessChildren][$length]) return null;
      return this[_randomAccessChildren][$_get](i).size;
    }
    paintChild(i, opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      transform == null ? transform = vector_math_64.Matrix4.identity() : null;
      let child = this[_randomAccessChildren][$_get](i);
      let childParentData = flow.FlowParentData.as(dart.nullCheck(child.parentData));
      if (!dart.fn(() => {
        if (childParentData[_transform] != null) {
          dart.throw(assertions.FlutterError.new("Cannot call paintChild twice for the same child.\n" + "The flow delegate of type " + dart.str(this[_delegate][$runtimeType]) + " attempted to " + "paint child " + dart.str(i) + " multiple times, which is not permitted."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 343, 12, "() {\n      if (childParentData._transform != null) {\n        throw FlutterError(\n          'Cannot call paintChild twice for the same child.\\n'\n          'The flow delegate of type ${_delegate.runtimeType} attempted to '\n          'paint child $i multiple times, which is not permitted.',\n        );\n      }\n      return true;\n    }()");
      this[_lastPaintOrder][$add](i);
      childParentData[_transform] = transform;
      if (opacity === 0.0) return;
      function painter(context, offset) {
        context.paintChild(child, offset);
      }
      dart.fn(painter, T.PaintingContextAndOffsetTovoid());
      if (opacity === 1.0) {
        dart.nullCheck(this[_paintingContext]).pushTransform(this.needsCompositing, dart.nullCheck(this[_paintingOffset]), transform, painter);
      } else {
        dart.nullCheck(this[_paintingContext]).pushOpacity(dart.nullCheck(this[_paintingOffset]), ui.Color.getAlphaFromOpacity(opacity), dart.fn((context, offset) => {
          context.pushTransform(this.needsCompositing, offset, dart.nullCheck(transform), painter);
        }, T.PaintingContextAndOffsetTovoid()));
      }
    }
    [_paintWithDelegate](context, offset) {
      this[_lastPaintOrder][$clear]();
      this[_paintingContext] = context;
      this[_paintingOffset] = offset;
      for (let child of this[_randomAccessChildren]) {
        let childParentData = flow.FlowParentData.as(dart.nullCheck(child.parentData));
        childParentData[_transform] = null;
      }
      try {
        this[_delegate].paintChildren(this);
      } finally {
        this[_paintingContext] = null;
        this[_paintingOffset] = null;
      }
    }
    paint(context, offset) {
      if (this.clipBehavior === ui.Clip.none) {
        this[_clipRectLayer].layer = null;
        this[_paintWithDelegate](context, offset);
      } else {
        this[_clipRectLayer].layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, _paintWithDelegate), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
      }
    }
    dispose() {
      this[_clipRectLayer].layer = null;
      super.dispose();
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let children = this.getChildrenAsList();
      for (let i = this[_lastPaintOrder][$length] - 1; i >= 0; i = i - 1) {
        let childIndex = this[_lastPaintOrder][$_get](i);
        if (childIndex >= children[$length]) continue;
        let child = children[$_get](childIndex);
        let childParentData = flow.FlowParentData.as(dart.nullCheck(child.parentData));
        let transform = childParentData[_transform];
        if (transform == null) continue;
        let absorbed = result.addWithPaintTransform({transform: transform, position: position, hitTest: dart.fn((result, position) => child.hitTest(result, {position: position}), T.BoxHitTestResultAndOffsetTobool())});
        if (absorbed) return true;
      }
      return false;
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      let childParentData = flow.FlowParentData.as(dart.nullCheck(child.parentData));
      if (childParentData[_transform] != null) transform.multiply(dart.nullCheck(childParentData[_transform]));
      super.applyPaintTransform(child, transform);
    }
  };
  (flow.RenderFlow.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[0] || CT.C0;
    this[_clipBehavior] = ui.Clip.hardEdge;
    this[_randomAccessChildren] = T.JSArrayOfRenderBox().of([]);
    this[_lastPaintOrder] = T.JSArrayOfint().of([]);
    this[_paintingContext] = null;
    this[_paintingOffset] = null;
    this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
    if (!(delegate !== null)) dart.assertFailed(null, I[1], 186, 15, "delegate != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 187, 15, "clipBehavior != null");
    this[_delegate] = delegate;
    this[_clipBehavior] = clipBehavior;
    flow.RenderFlow.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = flow.RenderFlow.prototype;
  dart.addTypeTests(flow.RenderFlow);
  dart.addTypeCaches(flow.RenderFlow);
  flow.RenderFlow[dart.implements] = () => [flow.FlowPaintingContext];
  dart.setMethodSignature(flow.RenderFlow, () => ({
    __proto__: dart.getMethods(flow.RenderFlow.__proto__),
    [_getSize]: dart.fnType(ui.Size, [box.BoxConstraints]),
    getChildSize: dart.fnType(dart.nullable(ui.Size), [core.int]),
    paintChild: dart.fnType(dart.void, [core.int], {opacity: core.double, transform: dart.nullable(vector_math_64.Matrix4)}, {}),
    [_paintWithDelegate]: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])
  }));
  dart.setGetterSignature(flow.RenderFlow, () => ({
    __proto__: dart.getGetters(flow.RenderFlow.__proto__),
    delegate: flow.FlowDelegate,
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(flow.RenderFlow, () => ({
    __proto__: dart.getSetters(flow.RenderFlow.__proto__),
    delegate: flow.FlowDelegate,
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(flow.RenderFlow, I[0]);
  dart.setFieldSignature(flow.RenderFlow, () => ({
    __proto__: dart.getFields(flow.RenderFlow.__proto__),
    [_delegate]: dart.fieldType(flow.FlowDelegate),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_randomAccessChildren]: dart.finalFieldType(core.List$(box.RenderBox)),
    [_lastPaintOrder]: dart.finalFieldType(core.List$(core.int)),
    [_paintingContext]: dart.fieldType(dart.nullable(object$.PaintingContext)),
    [_paintingOffset]: dart.fieldType(dart.nullable(ui.Offset)),
    [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
  }));
  dart.trackLibraries("packages/flutter/src/rendering/flow.dart", {
    "package:flutter/src/rendering/flow.dart": flow
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flow.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/flow.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__flow: flow
  };
}));

//# sourceMappingURL=flow.dart.lib.js.map
