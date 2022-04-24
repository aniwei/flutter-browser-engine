define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__layout_builder_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const debug = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__debug;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var layout_builder = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T.ListOfDiagnosticsNode(), [])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutBuilder",
        [_Location_column]: 9,
        [_Location_line]: 269,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/layout_builder.dart"
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/layout_builder.dart",
    "package:flutter/src/widgets/layout_builder.dart"
  ];
  var builder$ = dart.privateName(layout_builder, "ConstrainedLayoutBuilder.builder");
  const _is_ConstrainedLayoutBuilder_default = Symbol('_is_ConstrainedLayoutBuilder_default');
  layout_builder.ConstrainedLayoutBuilder$ = dart.generic(ConstraintType => {
    var __t$_LayoutBuilderElementOfConstraintType = () => (__t$_LayoutBuilderElementOfConstraintType = dart.constFn(layout_builder._LayoutBuilderElement$(ConstraintType)))();
    class ConstrainedLayoutBuilder extends framework.RenderObjectWidget {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      createElement() {
        return new (__t$_LayoutBuilderElementOfConstraintType()).new(this);
      }
    }
    (ConstrainedLayoutBuilder.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      if (!(builder !== null)) dart.assertFailed(null, I[0], 43, 15, "builder != null");
      ConstrainedLayoutBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ConstrainedLayoutBuilder.prototype;
    dart.addTypeTests(ConstrainedLayoutBuilder);
    ConstrainedLayoutBuilder.prototype[_is_ConstrainedLayoutBuilder_default] = true;
    dart.addTypeCaches(ConstrainedLayoutBuilder);
    dart.setMethodSignature(ConstrainedLayoutBuilder, () => ({
      __proto__: dart.getMethods(ConstrainedLayoutBuilder.__proto__),
      createElement: dart.fnType(framework.RenderObjectElement, [])
    }));
    dart.setLibraryUri(ConstrainedLayoutBuilder, I[1]);
    dart.setFieldSignature(ConstrainedLayoutBuilder, () => ({
      __proto__: dart.getFields(ConstrainedLayoutBuilder.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, ConstraintType]))
    }));
    return ConstrainedLayoutBuilder;
  });
  layout_builder.ConstrainedLayoutBuilder = layout_builder.ConstrainedLayoutBuilder$();
  dart.addTypeTests(layout_builder.ConstrainedLayoutBuilder, _is_ConstrainedLayoutBuilder_default);
  var _child = dart.privateName(layout_builder, "_child");
  var _layout = dart.privateName(layout_builder, "_layout");
  const _is__LayoutBuilderElement_default = Symbol('_is__LayoutBuilderElement_default');
  layout_builder._LayoutBuilderElement$ = dart.generic(ConstraintType => {
    var __t$ConstrainedLayoutBuilderOfConstraintType = () => (__t$ConstrainedLayoutBuilderOfConstraintType = dart.constFn(layout_builder.ConstrainedLayoutBuilder$(ConstraintType)))();
    var __t$RenderConstrainedLayoutBuilderOfConstraintType$RenderObject = () => (__t$RenderConstrainedLayoutBuilderOfConstraintType$RenderObject = dart.constFn(layout_builder.RenderConstrainedLayoutBuilder$(ConstraintType, object.RenderObject)))();
    var __t$BuildContextAndConstraintTypeToWidget = () => (__t$BuildContextAndConstraintTypeToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, ConstraintType])))();
    class _LayoutBuilderElement extends framework.RenderObjectElement {
      static ['_#new#tearOff'](ConstraintType, widget) {
        return new (layout_builder._LayoutBuilderElement$(ConstraintType)).new(widget);
      }
      get widget() {
        return __t$ConstrainedLayoutBuilderOfConstraintType().as(super.widget);
      }
      get renderObject() {
        return __t$RenderConstrainedLayoutBuilderOfConstraintType$RenderObject().as(super.renderObject);
      }
      visitChildren(visitor) {
        if (this[_child] != null) visitor(dart.nullCheck(this[_child]));
      }
      forgetChild(child) {
        if (!child._equals(this[_child])) dart.assertFailed(null, I[0], 76, 12, "child == _child");
        this[_child] = null;
        super.forgetChild(child);
      }
      mount(parent, newSlot) {
        super.mount(parent, newSlot);
        this.renderObject.updateCallback(dart.bind(this, _layout));
      }
      update(newWidget) {
        __t$ConstrainedLayoutBuilderOfConstraintType().as(newWidget);
        if (!!this.widget._equals(newWidget)) dart.assertFailed(null, I[0], 89, 12, "widget != newWidget");
        super.update(newWidget);
        if (!this.widget._equals(newWidget)) dart.assertFailed(null, I[0], 91, 12, "widget == newWidget");
        this.renderObject.updateCallback(dart.bind(this, _layout));
        this.renderObject.markNeedsBuild();
      }
      performRebuild() {
        this.renderObject.markNeedsBuild();
        super.performRebuild();
      }
      unmount() {
        this.renderObject.updateCallback(null);
        super.unmount();
      }
      [_layout](constraints) {
        ConstraintType.as(constraints);
        const layoutCallback = () => {
          let t1, t0;
          let built = null;
          try {
            built = (t0 = this.widget, t1 = constraints, __t$BuildContextAndConstraintTypeToWidget().as(t0.builder)(this, t1));
            debug.debugWidgetBuilderValue(this.widget, built);
          } catch (e$) {
            let e = dart.getThrown(e$);
            let stack = dart.stackTrace(e$);
            if (core.Object.is(e)) {
              built = framework.ErrorWidget.builder(layout_builder._debugReportException(new assertions.ErrorDescription.new("building " + dart.str(this.widget)), e, stack, {informationCollector: dart.fn(() => (() => {
                  let t1 = T.JSArrayOfDiagnosticsNode().of([]);
                  if (true) t1.push(new object.DiagnosticsDebugCreator.new(new framework.DebugCreator.new(this)));
                  return t1;
                })(), T.VoidToListOfDiagnosticsNode())}));
            } else
              throw e$;
          }
          try {
            this[_child] = this.updateChild(this[_child], built, null);
            if (!(this[_child] != null)) dart.assertFailed(null, I[0], 139, 16, "_child != null");
          } catch (e$0) {
            let e = dart.getThrown(e$0);
            let stack = dart.stackTrace(e$0);
            if (core.Object.is(e)) {
              built = framework.ErrorWidget.builder(layout_builder._debugReportException(new assertions.ErrorDescription.new("building " + dart.str(this.widget)), e, stack, {informationCollector: dart.fn(() => (() => {
                  let t3 = T.JSArrayOfDiagnosticsNode().of([]);
                  if (true) t3.push(new object.DiagnosticsDebugCreator.new(new framework.DebugCreator.new(this)));
                  return t3;
                })(), T.VoidToListOfDiagnosticsNode())}));
              this[_child] = this.updateChild(null, built, this.slot);
            } else
              throw e$0;
          }
        };
        dart.fn(layoutCallback, T.VoidTovoid());
        dart.nullCheck(this.owner).buildScope(this, layoutCallback);
      }
      insertRenderObjectChild(child, slot) {
        object.RenderObject.as(child);
        let renderObject = this.renderObject;
        if (!(slot == null)) dart.assertFailed(null, I[0], 162, 12, "slot == null");
        if (!renderObject.debugValidateChild(child)) dart.assertFailed(null, I[0], 163, 12, "renderObject.debugValidateChild(child)");
        renderObject.child = child;
        if (!renderObject[$_equals](this.renderObject)) dart.assertFailed(null, I[0], 165, 12, "renderObject == this.renderObject");
      }
      moveRenderObjectChild(child, oldSlot, newSlot) {
        object.RenderObject.as(child);
        if (!false) dart.assertFailed(null, I[0], 170, 12, "false");
      }
      removeRenderObjectChild(child, slot) {
        object.RenderObject.as(child);
        let renderObject = this.renderObject;
        if (!dart.equals(renderObject.child, child)) dart.assertFailed(null, I[0], 176, 12, "renderObject.child == child");
        renderObject.child = null;
        if (!renderObject[$_equals](this.renderObject)) dart.assertFailed(null, I[0], 178, 12, "renderObject == this.renderObject");
      }
    }
    (_LayoutBuilderElement.new = function(widget) {
      this[_child] = null;
      _LayoutBuilderElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _LayoutBuilderElement.prototype;
    dart.addTypeTests(_LayoutBuilderElement);
    _LayoutBuilderElement.prototype[_is__LayoutBuilderElement_default] = true;
    dart.addTypeCaches(_LayoutBuilderElement);
    dart.setMethodSignature(_LayoutBuilderElement, () => ({
      __proto__: dart.getMethods(_LayoutBuilderElement.__proto__),
      [_layout]: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(_LayoutBuilderElement, () => ({
      __proto__: dart.getGetters(_LayoutBuilderElement.__proto__),
      widget: layout_builder.ConstrainedLayoutBuilder$(ConstraintType),
      renderObject: layout_builder.RenderConstrainedLayoutBuilder$(ConstraintType, object.RenderObject)
    }));
    dart.setLibraryUri(_LayoutBuilderElement, I[1]);
    dart.setFieldSignature(_LayoutBuilderElement, () => ({
      __proto__: dart.getFields(_LayoutBuilderElement.__proto__),
      [_child]: dart.fieldType(dart.nullable(framework.Element))
    }));
    return _LayoutBuilderElement;
  });
  layout_builder._LayoutBuilderElement = layout_builder._LayoutBuilderElement$();
  dart.addTypeTests(layout_builder._LayoutBuilderElement, _is__LayoutBuilderElement_default);
  var _callback = dart.privateName(layout_builder, "RenderConstrainedLayoutBuilder._callback");
  var _needsBuild = dart.privateName(layout_builder, "RenderConstrainedLayoutBuilder._needsBuild");
  var _previousConstraints = dart.privateName(layout_builder, "RenderConstrainedLayoutBuilder._previousConstraints");
  var _callback$ = dart.privateName(layout_builder, "_callback");
  var _needsBuild$ = dart.privateName(layout_builder, "_needsBuild");
  var _previousConstraints$ = dart.privateName(layout_builder, "_previousConstraints");
  const _is_RenderConstrainedLayoutBuilder_default = Symbol('_is_RenderConstrainedLayoutBuilder_default');
  layout_builder.RenderConstrainedLayoutBuilder$ = dart.generic((ConstraintType, ChildType) => {
    class RenderConstrainedLayoutBuilder extends object.RenderObjectWithChildMixin$(ChildType) {}
    RenderConstrainedLayoutBuilder[dart.mixinOn] = RenderObjectWithChildMixin => class RenderConstrainedLayoutBuilder extends RenderObjectWithChildMixin {
      get [_callback$]() {
        return this[_callback];
      }
      set [_callback$](value) {
        this[_callback] = value;
      }
      get [_needsBuild$]() {
        return this[_needsBuild];
      }
      set [_needsBuild$](value) {
        this[_needsBuild] = value;
      }
      get [_previousConstraints$]() {
        return this[_previousConstraints];
      }
      set [_previousConstraints$](value) {
        this[_previousConstraints] = value;
      }
      updateCallback(value) {
        if (dart.equals(value, this[_callback$])) return;
        this[_callback$] = value;
        this.markNeedsLayout();
      }
      markNeedsBuild() {
        this[_needsBuild$] = true;
        this.markNeedsLayout();
      }
      rebuildIfNecessary() {
        if (!(this[_callback$] != null)) dart.assertFailed(null, I[0], 226, 12, "_callback != null");
        if (this[_needsBuild$] || !this.constraints[$_equals](this[_previousConstraints$])) {
          this[_previousConstraints$] = this.constraints;
          this[_needsBuild$] = false;
          this.invokeLayoutCallback(ConstraintType, dart.nullCheck(this[_callback$]));
        }
      }
    };
    (RenderConstrainedLayoutBuilder[dart.mixinNew] = function() {
      this[_callback] = null;
      this[_needsBuild] = true;
      this[_previousConstraints] = null;
    }).prototype = RenderConstrainedLayoutBuilder.prototype;
    dart.addTypeTests(RenderConstrainedLayoutBuilder);
    RenderConstrainedLayoutBuilder.prototype[_is_RenderConstrainedLayoutBuilder_default] = true;
    dart.addTypeCaches(RenderConstrainedLayoutBuilder);
    RenderConstrainedLayoutBuilder[dart.implements] = () => [object.RenderObjectWithChildMixin$(ChildType)];
    dart.setMethodSignature(RenderConstrainedLayoutBuilder, () => ({
      __proto__: dart.getMethods(RenderConstrainedLayoutBuilder.__proto__),
      updateCallback: dart.fnType(dart.void, [dart.nullable(dart.fnType(dart.void, [ConstraintType]))]),
      markNeedsBuild: dart.fnType(dart.void, []),
      rebuildIfNecessary: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RenderConstrainedLayoutBuilder, I[1]);
    dart.setFieldSignature(RenderConstrainedLayoutBuilder, () => ({
      __proto__: dart.getFields(RenderConstrainedLayoutBuilder.__proto__),
      [_callback$]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [ConstraintType]))),
      [_needsBuild$]: dart.fieldType(core.bool),
      [_previousConstraints$]: dart.fieldType(dart.nullable(object.Constraints))
    }));
    return RenderConstrainedLayoutBuilder;
  });
  layout_builder.RenderConstrainedLayoutBuilder = layout_builder.RenderConstrainedLayoutBuilder$();
  dart.addTypeTests(layout_builder.RenderConstrainedLayoutBuilder, _is_RenderConstrainedLayoutBuilder_default);
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  layout_builder.LayoutBuilder = class LayoutBuilder extends layout_builder.ConstrainedLayoutBuilder$(box.BoxConstraints) {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      return new layout_builder.LayoutBuilder.new({key: key, builder: builder, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    get builder() {
      return super.builder;
    }
    createRenderObject(context) {
      return new layout_builder._RenderLayoutBuilder.new();
    }
  };
  (layout_builder.LayoutBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(builder !== null)) dart.assertFailed(null, I[0], 272, 15, "builder != null");
    layout_builder.LayoutBuilder.__proto__.new.call(this, {key: key, builder: builder, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = layout_builder.LayoutBuilder.prototype;
  dart.addTypeTests(layout_builder.LayoutBuilder);
  dart.addTypeCaches(layout_builder.LayoutBuilder);
  dart.setMethodSignature(layout_builder.LayoutBuilder, () => ({
    __proto__: dart.getMethods(layout_builder.LayoutBuilder.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setGetterSignature(layout_builder.LayoutBuilder, () => ({
    __proto__: dart.getGetters(layout_builder.LayoutBuilder.__proto__),
    builder: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])
  }));
  dart.setLibraryUri(layout_builder.LayoutBuilder, I[1]);
  var _debugThrowIfNotCheckingIntrinsics = dart.privateName(layout_builder, "_debugThrowIfNotCheckingIntrinsics");
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  const RenderBox_RenderConstrainedLayoutBuilder$36 = class RenderBox_RenderConstrainedLayoutBuilder extends RenderBox_RenderObjectWithChildMixin$36 {};
  (RenderBox_RenderConstrainedLayoutBuilder$36.new = function() {
    layout_builder.RenderConstrainedLayoutBuilder$(box.BoxConstraints, box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderConstrainedLayoutBuilder$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderConstrainedLayoutBuilder$36.prototype;
  dart.applyMixin(RenderBox_RenderConstrainedLayoutBuilder$36, layout_builder.RenderConstrainedLayoutBuilder$(box.BoxConstraints, box.RenderBox));
  layout_builder._RenderLayoutBuilder = class _RenderLayoutBuilder extends RenderBox_RenderConstrainedLayoutBuilder$36 {
    computeMinIntrinsicWidth(height) {
      if (!this[_debugThrowIfNotCheckingIntrinsics]()) dart.assertFailed(null, I[0], 285, 12, "_debugThrowIfNotCheckingIntrinsics()");
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (!this[_debugThrowIfNotCheckingIntrinsics]()) dart.assertFailed(null, I[0], 291, 12, "_debugThrowIfNotCheckingIntrinsics()");
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (!this[_debugThrowIfNotCheckingIntrinsics]()) dart.assertFailed(null, I[0], 297, 12, "_debugThrowIfNotCheckingIntrinsics()");
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (!this[_debugThrowIfNotCheckingIntrinsics]()) dart.assertFailed(null, I[0], 303, 12, "_debugThrowIfNotCheckingIntrinsics()");
      return 0.0;
    }
    computeDryLayout(constraints) {
      if (!this.debugCannotComputeDryLayout({reason: "Calculating the dry layout would require running the layout callback " + "speculatively, which might mutate the live render object tree."})) dart.assertFailed(null, I[0], 309, 12, "debugCannotComputeDryLayout(reason:\n      'Calculating the dry layout would require running the layout callback '\n      'speculatively, which might mutate the live render object tree.',\n    )");
      return ui.Size.zero;
    }
    performLayout() {
      let constraints = this.constraints;
      this.rebuildIfNecessary();
      if (this.child != null) {
        dart.nullCheck(this.child).layout(constraints, {parentUsesSize: true});
        this.size = constraints.constrain(dart.nullCheck(this.child).size);
      } else {
        this.size = constraints.biggest;
      }
    }
    computeDistanceToActualBaseline(baseline) {
      if (this.child != null) return dart.nullCheck(this.child).getDistanceToActualBaseline(baseline);
      return super.computeDistanceToActualBaseline(baseline);
    }
    hitTestChildren(result, opts) {
      let t4, t4$;
      let position = opts && 'position' in opts ? opts.position : null;
      t4$ = (t4 = this.child, t4 == null ? null : t4.hitTest(result, {position: position}));
      return t4$ == null ? false : t4$;
    }
    paint(context, offset) {
      if (this.child != null) context.paintChild(dart.nullCheck(this.child), offset);
    }
    [_debugThrowIfNotCheckingIntrinsics]() {
      if (!dart.fn(() => {
        if (!object.RenderObject.debugCheckingIntrinsics) {
          dart.throw(assertions.FlutterError.new("LayoutBuilder does not support returning intrinsic dimensions.\n" + "Calculating the intrinsic dimensions would require running the layout " + "callback speculatively, which might mutate the live render object tree."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 347, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        throw FlutterError(\n          'LayoutBuilder does not support returning intrinsic dimensions.\\n'\n          'Calculating the intrinsic dimensions would require running the layout '\n          'callback speculatively, which might mutate the live render object tree.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    static ['_#new#tearOff']() {
      return new layout_builder._RenderLayoutBuilder.new();
    }
  };
  (layout_builder._RenderLayoutBuilder.new = function() {
    layout_builder._RenderLayoutBuilder.__proto__.new.call(this);
    ;
  }).prototype = layout_builder._RenderLayoutBuilder.prototype;
  dart.addTypeTests(layout_builder._RenderLayoutBuilder);
  dart.addTypeCaches(layout_builder._RenderLayoutBuilder);
  dart.setMethodSignature(layout_builder._RenderLayoutBuilder, () => ({
    __proto__: dart.getMethods(layout_builder._RenderLayoutBuilder.__proto__),
    [_debugThrowIfNotCheckingIntrinsics]: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(layout_builder._RenderLayoutBuilder, I[1]);
  layout_builder._debugReportException = function _debugReportException(context, exception, stack, opts) {
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let details = new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "widgets library", context: context, informationCollector: informationCollector});
    assertions.FlutterError.reportError(details);
    return details;
  };
  dart.trackLibraries("packages/flutter/src/widgets/layout_builder.dart", {
    "package:flutter/src/widgets/layout_builder.dart": layout_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["layout_builder.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/layout_builder.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__layout_builder: layout_builder
  };
}));

//# sourceMappingURL=layout_builder.dart.lib.js.map
