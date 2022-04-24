define(['dart_sdk', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/widgets/layout_builder.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/physics/simulation.dart', 'packages/flutter/src/widgets/scroll_simulation.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/physics/tolerance.dart'], (function load__packages__flutter__src__widgets__draggable_scrollable_sheet_dart(dart_sdk, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__widgets__layout_builder$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__physics__simulation$46dart, packages__flutter__src__widgets__scroll_simulation$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__physics__tolerance$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const scroll_controller = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_controller;
  const notification_listener = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__notification_listener;
  const scroll_notification = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_notification;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const binding = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__binding;
  const scroll_physics = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_physics;
  const scroll_context = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_context;
  const scroll_position = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_position;
  const scroll_position_with_single_context = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_position_with_single_context;
  const inherited_notifier = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__inherited_notifier;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const layout_builder = packages__flutter__src__widgets__layout_builder$46dart.src__widgets__layout_builder;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const simulation = packages__flutter__src__physics__simulation$46dart.src__physics__simulation;
  const scroll_simulation = packages__flutter__src__widgets__scroll_simulation$46dart.src__widgets__scroll_simulation;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  var draggable_scrollable_sheet = Object.create(dart.library);
  var $add = dartx.add;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $clamp = dartx.clamp;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $addAll = dartx.addAll;
  var $last = dartx.last;
  var $keys = dartx.keys;
  var $asMap = dartx.asMap;
  var $toString = dartx.toString;
  var $abs = dartx.abs;
  var $any = dartx.any;
  var $sign = dartx.sign;
  var $indexWhere = dartx.indexWhere;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ValueNotifierOfdouble: () => (T.ValueNotifierOfdouble = dart.constFn(change_notifier.ValueNotifier$(core.double)))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    BuildContextAndBoxConstraintsToWidget: () => (T.BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))(),
    DurationTovoid: () => (T.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    intToString: () => (T.intToString = dart.constFn(dart.fnType(core.String, [core.int])))(),
    VoidTo_DraggableSheetExtent: () => (T.VoidTo_DraggableSheetExtent = dart.constFn(dart.fnType(draggable_scrollable_sheet._DraggableSheetExtent, [])))(),
    doubleTobool: () => (T.doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))(),
    VoidToSimulation: () => (T.VoidToSimulation = dart.constFn(dart.fnType(simulation.Simulation, [])))(),
    SimulationTodynamic: () => (T.SimulationTodynamic = dart.constFn(dart.fnType(dart.dynamic, [simulation.Simulation])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DraggableScrollableSheet",
        [_Location_column]: 9,
        [_Location_line]: 246,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FractionallySizedBox",
        [_Location_column]: 30,
        [_Location_line]: 619,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 41,
        [_Location_line]: 624,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutBuilder",
        [_Location_column]: 12,
        [_Location_line]: 616,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DraggableScrollableActuator",
        [_Location_column]: 3,
        [_Location_line]: 920,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InheritedResetNotifier",
        [_Location_column]: 12,
        [_Location_line]: 949,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InheritedResetNotifier",
        [_Location_column]: 9,
        [_Location_line]: 979,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 0.001,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.001
      });
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/draggable_scrollable_sheet.dart",
    "package:flutter/src/widgets/draggable_scrollable_sheet.dart"
  ];
  var _attachedController = dart.privateName(draggable_scrollable_sheet, "_attachedController");
  var _assertAttached = dart.privateName(draggable_scrollable_sheet, "_assertAttached");
  var _attach = dart.privateName(draggable_scrollable_sheet, "_attach");
  var _detach = dart.privateName(draggable_scrollable_sheet, "_detach");
  draggable_scrollable_sheet.DraggableScrollableController = class DraggableScrollableController extends core.Object {
    get size() {
      this[_assertAttached]();
      return dart.nullCheck(this[_attachedController]).extent.currentSize;
    }
    get pixels() {
      this[_assertAttached]();
      return dart.nullCheck(this[_attachedController]).extent.currentPixels;
    }
    sizeToPixels(size) {
      this[_assertAttached]();
      return dart.nullCheck(this[_attachedController]).extent.sizeToPixels(size);
    }
    pixelsToSize(pixels) {
      this[_assertAttached]();
      return dart.nullCheck(this[_attachedController]).extent.pixelsToSize(pixels);
    }
    animateTo(size, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return async.async(dart.void, (function* animateTo() {
        this[_assertAttached]();
        if (!(size >= 0 && size <= 1)) dart.assertFailed(null, I[0], 98, 12, "size >= 0 && size <= 1");
        if (!!duration._equals(core.Duration.zero)) dart.assertFailed(null, I[0], 99, 12, "duration != Duration.zero");
        let animationController = new animation_controller.AnimationController.unbounded({vsync: dart.nullCheck(this[_attachedController]).position.context.vsync, value: dart.nullCheck(this[_attachedController]).extent.currentSize});
        dart.nullCheck(this[_attachedController]).position.goIdle();
        dart.nullCheck(this[_attachedController]).extent.hasDragged = false;
        dart.nullCheck(this[_attachedController]).extent.startActivity({onCanceled: dart.fn(() => {
            if (animationController.isAnimating) {
              animationController.stop();
            }
          }, T.VoidTovoid())});
        new animations.CurvedAnimation.new({parent: animationController, curve: curve}).addListener(dart.fn(() => {
          dart.nullCheck(this[_attachedController]).extent.updateSize(animationController.value, dart.nullCheck(dart.nullCheck(this[_attachedController]).position.context.notificationContext));
          if (animationController.value > dart.nullCheck(this[_attachedController]).extent.maxSize || animationController.value < dart.nullCheck(this[_attachedController]).extent.minSize) {
            animationController.stop({canceled: false});
          }
        }, T.VoidTovoid()));
        yield animationController.animateTo(size, {duration: duration});
      }).bind(this));
    }
    jumpTo(size) {
      this[_assertAttached]();
      if (!(size >= 0 && size <= 1)) dart.assertFailed(null, I[0], 138, 12, "size >= 0 && size <= 1");
      dart.nullCheck(this[_attachedController]).extent.startActivity({onCanceled: dart.fn(() => {
        }, T.VoidTovoid())});
      dart.nullCheck(this[_attachedController]).position.goIdle();
      dart.nullCheck(this[_attachedController]).extent.hasDragged = false;
      dart.nullCheck(this[_attachedController]).extent.updateSize(size, dart.nullCheck(dart.nullCheck(this[_attachedController]).position.context.notificationContext));
    }
    reset() {
      this[_assertAttached]();
      dart.nullCheck(this[_attachedController]).reset();
    }
    [_assertAttached]() {
      if (!(this[_attachedController] != null)) dart.assertFailed("DraggableScrollableController is not attached to a sheet. A DraggableScrollableController " + "must be used in a DraggableScrollableSheet before any of its methods are called.", I[0], 154, 7, "_attachedController != null");
    }
    [_attach](scrollController) {
      if (!(this[_attachedController] == null)) dart.assertFailed("Draggable scrollable controller is already attached to a sheet.", I[0], 161, 12, "_attachedController == null");
      this[_attachedController] = scrollController;
    }
    [_detach]() {
      this[_attachedController] = null;
    }
    static ['_#new#tearOff']() {
      return new draggable_scrollable_sheet.DraggableScrollableController.new();
    }
  };
  (draggable_scrollable_sheet.DraggableScrollableController.new = function() {
    this[_attachedController] = null;
    ;
  }).prototype = draggable_scrollable_sheet.DraggableScrollableController.prototype;
  dart.addTypeTests(draggable_scrollable_sheet.DraggableScrollableController);
  dart.addTypeCaches(draggable_scrollable_sheet.DraggableScrollableController);
  dart.setMethodSignature(draggable_scrollable_sheet.DraggableScrollableController, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet.DraggableScrollableController.__proto__),
    sizeToPixels: dart.fnType(core.double, [core.double]),
    pixelsToSize: dart.fnType(core.double, [core.double]),
    animateTo: dart.fnType(async.Future$(dart.void), [core.double], {}, {curve: curves.Curve, duration: core.Duration}),
    jumpTo: dart.fnType(dart.void, [core.double]),
    reset: dart.fnType(dart.void, []),
    [_assertAttached]: dart.fnType(dart.void, []),
    [_attach]: dart.fnType(dart.void, [draggable_scrollable_sheet._DraggableScrollableSheetScrollController]),
    [_detach]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(draggable_scrollable_sheet.DraggableScrollableController, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet.DraggableScrollableController.__proto__),
    size: core.double,
    pixels: core.double
  }));
  dart.setLibraryUri(draggable_scrollable_sheet.DraggableScrollableController, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet.DraggableScrollableController, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet.DraggableScrollableController.__proto__),
    [_attachedController]: dart.fieldType(dart.nullable(draggable_scrollable_sheet._DraggableScrollableSheetScrollController))
  }));
  var initialChildSize$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.initialChildSize");
  var minChildSize$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.minChildSize");
  var maxChildSize$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.maxChildSize");
  var expand$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.expand");
  var snap$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.snap");
  var snapSizes$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.snapSizes");
  var controller$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.controller");
  var builder$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableSheet.builder");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  draggable_scrollable_sheet.DraggableScrollableSheet = class DraggableScrollableSheet extends framework.StatefulWidget {
    get initialChildSize() {
      return this[initialChildSize$];
    }
    set initialChildSize(value) {
      super.initialChildSize = value;
    }
    get minChildSize() {
      return this[minChildSize$];
    }
    set minChildSize(value) {
      super.minChildSize = value;
    }
    get maxChildSize() {
      return this[maxChildSize$];
    }
    set maxChildSize(value) {
      super.maxChildSize = value;
    }
    get expand() {
      return this[expand$];
    }
    set expand(value) {
      super.expand = value;
    }
    get snap() {
      return this[snap$];
    }
    set snap(value) {
      super.snap = value;
    }
    get snapSizes() {
      return this[snapSizes$];
    }
    set snapSizes(value) {
      super.snapSizes = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialChildSize = opts && 'initialChildSize' in opts ? opts.initialChildSize : 0.5;
      let minChildSize = opts && 'minChildSize' in opts ? opts.minChildSize : 0.25;
      let maxChildSize = opts && 'maxChildSize' in opts ? opts.maxChildSize : 1;
      let expand = opts && 'expand' in opts ? opts.expand : true;
      let snap = opts && 'snap' in opts ? opts.snap : false;
      let snapSizes = opts && 'snapSizes' in opts ? opts.snapSizes : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      return new draggable_scrollable_sheet.DraggableScrollableSheet.new({key: key, initialChildSize: initialChildSize, minChildSize: minChildSize, maxChildSize: maxChildSize, expand: expand, snap: snap, snapSizes: snapSizes, controller: controller, builder: builder, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new draggable_scrollable_sheet._DraggableScrollableSheetState.new();
    }
  };
  (draggable_scrollable_sheet.DraggableScrollableSheet.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let initialChildSize = opts && 'initialChildSize' in opts ? opts.initialChildSize : 0.5;
    let minChildSize = opts && 'minChildSize' in opts ? opts.minChildSize : 0.25;
    let maxChildSize = opts && 'maxChildSize' in opts ? opts.maxChildSize : 1;
    let expand = opts && 'expand' in opts ? opts.expand : true;
    let snap = opts && 'snap' in opts ? opts.snap : false;
    let snapSizes = opts && 'snapSizes' in opts ? opts.snapSizes : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[initialChildSize$] = initialChildSize;
    this[minChildSize$] = minChildSize;
    this[maxChildSize$] = maxChildSize;
    this[expand$] = expand;
    this[snap$] = snap;
    this[snapSizes$] = snapSizes;
    this[controller$] = controller;
    this[builder$] = builder;
    if (!(initialChildSize !== null)) dart.assertFailed(null, I[0], 256, 16, "initialChildSize != null");
    if (!(minChildSize !== null)) dart.assertFailed(null, I[0], 257, 16, "minChildSize != null");
    if (!(maxChildSize !== null)) dart.assertFailed(null, I[0], 258, 16, "maxChildSize != null");
    if (!(minChildSize >= 0.0)) dart.assertFailed(null, I[0], 259, 16, "minChildSize >= 0.0");
    if (!(maxChildSize <= 1.0)) dart.assertFailed(null, I[0], 260, 16, "maxChildSize <= 1.0");
    if (!(minChildSize <= initialChildSize)) dart.assertFailed(null, I[0], 261, 16, "minChildSize <= initialChildSize");
    if (!(initialChildSize <= maxChildSize)) dart.assertFailed(null, I[0], 262, 16, "initialChildSize <= maxChildSize");
    if (!(expand !== null)) dart.assertFailed(null, I[0], 263, 16, "expand != null");
    if (!(builder !== null)) dart.assertFailed(null, I[0], 264, 16, "builder != null");
    draggable_scrollable_sheet.DraggableScrollableSheet.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollable_sheet.DraggableScrollableSheet.prototype;
  dart.addTypeTests(draggable_scrollable_sheet.DraggableScrollableSheet);
  dart.addTypeCaches(draggable_scrollable_sheet.DraggableScrollableSheet);
  dart.setMethodSignature(draggable_scrollable_sheet.DraggableScrollableSheet, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet.DraggableScrollableSheet.__proto__),
    createState: dart.fnType(framework.State$(draggable_scrollable_sheet.DraggableScrollableSheet), [])
  }));
  dart.setLibraryUri(draggable_scrollable_sheet.DraggableScrollableSheet, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet.DraggableScrollableSheet, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet.DraggableScrollableSheet.__proto__),
    initialChildSize: dart.finalFieldType(core.double),
    minChildSize: dart.finalFieldType(core.double),
    maxChildSize: dart.finalFieldType(core.double),
    expand: dart.finalFieldType(core.bool),
    snap: dart.finalFieldType(core.bool),
    snapSizes: dart.finalFieldType(dart.nullable(core.List$(core.double))),
    controller: dart.finalFieldType(dart.nullable(draggable_scrollable_sheet.DraggableScrollableController)),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, scroll_controller.ScrollController]))
  }));
  var extent$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.extent");
  var minExtent$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.minExtent");
  var maxExtent$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.maxExtent");
  var initialExtent$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.initialExtent");
  var context$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableNotification.context");
  const Notification_ViewportNotificationMixin$36 = class Notification_ViewportNotificationMixin extends notification_listener.Notification {};
  (Notification_ViewportNotificationMixin$36.new = function() {
    scroll_notification.ViewportNotificationMixin[dart.mixinNew].call(this);
    Notification_ViewportNotificationMixin$36.__proto__.new.call(this);
  }).prototype = Notification_ViewportNotificationMixin$36.prototype;
  dart.applyMixin(Notification_ViewportNotificationMixin$36, scroll_notification.ViewportNotificationMixin);
  draggable_scrollable_sheet.DraggableScrollableNotification = class DraggableScrollableNotification extends Notification_ViewportNotificationMixin$36 {
    get extent() {
      return this[extent$];
    }
    set extent(value) {
      super.extent = value;
    }
    get minExtent() {
      return this[minExtent$];
    }
    set minExtent(value) {
      super.minExtent = value;
    }
    get maxExtent() {
      return this[maxExtent$];
    }
    set maxExtent(value) {
      super.maxExtent = value;
    }
    get initialExtent() {
      return this[initialExtent$];
    }
    set initialExtent(value) {
      super.initialExtent = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    static ['_#new#tearOff'](opts) {
      let extent = opts && 'extent' in opts ? opts.extent : null;
      let minExtent = opts && 'minExtent' in opts ? opts.minExtent : null;
      let maxExtent = opts && 'maxExtent' in opts ? opts.maxExtent : null;
      let initialExtent = opts && 'initialExtent' in opts ? opts.initialExtent : null;
      let context = opts && 'context' in opts ? opts.context : null;
      return new draggable_scrollable_sheet.DraggableScrollableNotification.new({extent: extent, minExtent: minExtent, maxExtent: maxExtent, initialExtent: initialExtent, context: context});
    }
    debugFillDescription(description) {
      super.debugFillDescription(description);
      description[$add]("minExtent: " + dart.str(this.minExtent) + ", extent: " + dart.str(this.extent) + ", maxExtent: " + dart.str(this.maxExtent) + ", initialExtent: " + dart.str(this.initialExtent));
    }
  };
  (draggable_scrollable_sheet.DraggableScrollableNotification.new = function(opts) {
    let extent = opts && 'extent' in opts ? opts.extent : null;
    let minExtent = opts && 'minExtent' in opts ? opts.minExtent : null;
    let maxExtent = opts && 'maxExtent' in opts ? opts.maxExtent : null;
    let initialExtent = opts && 'initialExtent' in opts ? opts.initialExtent : null;
    let context = opts && 'context' in opts ? opts.context : null;
    this[extent$] = extent;
    this[minExtent$] = minExtent;
    this[maxExtent$] = maxExtent;
    this[initialExtent$] = initialExtent;
    this[context$] = context;
    if (!(extent !== null)) dart.assertFailed(null, I[0], 375, 15, "extent != null");
    if (!(initialExtent !== null)) dart.assertFailed(null, I[0], 376, 15, "initialExtent != null");
    if (!(minExtent !== null)) dart.assertFailed(null, I[0], 377, 15, "minExtent != null");
    if (!(maxExtent !== null)) dart.assertFailed(null, I[0], 378, 15, "maxExtent != null");
    if (!(0.0 <= minExtent)) dart.assertFailed(null, I[0], 379, 15, "0.0 <= minExtent");
    if (!(maxExtent <= 1.0)) dart.assertFailed(null, I[0], 380, 15, "maxExtent <= 1.0");
    if (!(minExtent <= extent)) dart.assertFailed(null, I[0], 381, 15, "minExtent <= extent");
    if (!(minExtent <= initialExtent)) dart.assertFailed(null, I[0], 382, 15, "minExtent <= initialExtent");
    if (!(extent <= maxExtent)) dart.assertFailed(null, I[0], 383, 15, "extent <= maxExtent");
    if (!(initialExtent <= maxExtent)) dart.assertFailed(null, I[0], 384, 15, "initialExtent <= maxExtent");
    if (!(context !== null)) dart.assertFailed(null, I[0], 385, 15, "context != null");
    draggable_scrollable_sheet.DraggableScrollableNotification.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollable_sheet.DraggableScrollableNotification.prototype;
  dart.addTypeTests(draggable_scrollable_sheet.DraggableScrollableNotification);
  dart.addTypeCaches(draggable_scrollable_sheet.DraggableScrollableNotification);
  dart.setLibraryUri(draggable_scrollable_sheet.DraggableScrollableNotification, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet.DraggableScrollableNotification, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet.DraggableScrollableNotification.__proto__),
    extent: dart.finalFieldType(core.double),
    minExtent: dart.finalFieldType(core.double),
    maxExtent: dart.finalFieldType(core.double),
    initialExtent: dart.finalFieldType(core.double),
    context: dart.finalFieldType(framework.BuildContext)
  }));
  var _cancelActivity = dart.privateName(draggable_scrollable_sheet, "_cancelActivity");
  var _currentSize = dart.privateName(draggable_scrollable_sheet, "_currentSize");
  draggable_scrollable_sheet._DraggableSheetExtent = class _DraggableSheetExtent extends core.Object {
    static ['_#new#tearOff'](opts) {
      let minSize = opts && 'minSize' in opts ? opts.minSize : null;
      let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
      let snap = opts && 'snap' in opts ? opts.snap : null;
      let snapSizes = opts && 'snapSizes' in opts ? opts.snapSizes : null;
      let initialSize = opts && 'initialSize' in opts ? opts.initialSize : null;
      let onSizeChanged = opts && 'onSizeChanged' in opts ? opts.onSizeChanged : null;
      let currentSize = opts && 'currentSize' in opts ? opts.currentSize : null;
      let hasDragged = opts && 'hasDragged' in opts ? opts.hasDragged : null;
      return new draggable_scrollable_sheet._DraggableSheetExtent.new({minSize: minSize, maxSize: maxSize, snap: snap, snapSizes: snapSizes, initialSize: initialSize, onSizeChanged: onSizeChanged, currentSize: currentSize, hasDragged: hasDragged});
    }
    get isAtMin() {
      return this.minSize >= this[_currentSize].value;
    }
    get isAtMax() {
      return this.maxSize <= this[_currentSize].value;
    }
    get currentSize() {
      return this[_currentSize].value;
    }
    get currentPixels() {
      return this.sizeToPixels(this[_currentSize].value);
    }
    get additionalMinSize() {
      return this.isAtMin ? 0.0 : 1.0;
    }
    get additionalMaxSize() {
      return this.isAtMax ? 0.0 : 1.0;
    }
    get pixelSnapSizes() {
      return this.snapSizes[$map](core.double, dart.bind(this, 'sizeToPixels'))[$toList]();
    }
    startActivity(opts) {
      let t0;
      let onCanceled = opts && 'onCanceled' in opts ? opts.onCanceled : null;
      t0 = this[_cancelActivity];
      t0 == null ? null : t0();
      this[_cancelActivity] = onCanceled;
    }
    addPixelDelta(delta, context) {
      let t0;
      t0 = this[_cancelActivity];
      t0 == null ? null : t0();
      this[_cancelActivity] = null;
      this.hasDragged = true;
      if (this.availablePixels === 0) {
        return;
      }
      this.updateSize(this.currentSize + this.pixelsToSize(delta), context);
    }
    updateSize(newSize, context) {
      if (!(newSize !== null)) dart.assertFailed(null, I[0], 506, 12, "newSize != null");
      this[_currentSize].value = newSize[$clamp](this.minSize, this.maxSize);
      new draggable_scrollable_sheet.DraggableScrollableNotification.new({minExtent: this.minSize, maxExtent: this.maxSize, extent: this.currentSize, initialExtent: this.initialSize, context: context}).dispatch(context);
    }
    pixelsToSize(pixels) {
      return pixels / this.availablePixels * this.maxSize;
    }
    sizeToPixels(size) {
      return size / this.maxSize * this.availablePixels;
    }
    dispose() {
      this[_currentSize].removeListener(this.onSizeChanged);
    }
    copyWith(opts) {
      let minSize = opts && 'minSize' in opts ? opts.minSize : null;
      let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
      let snap = opts && 'snap' in opts ? opts.snap : null;
      let snapSizes = opts && 'snapSizes' in opts ? opts.snapSizes : null;
      let initialSize = opts && 'initialSize' in opts ? opts.initialSize : null;
      let onSizeChanged = opts && 'onSizeChanged' in opts ? opts.onSizeChanged : null;
      return new draggable_scrollable_sheet._DraggableSheetExtent.new({minSize: minSize, maxSize: maxSize, snap: snap, snapSizes: snapSizes, initialSize: initialSize, onSizeChanged: onSizeChanged, currentSize: new (T.ValueNotifierOfdouble()).new(this.hasDragged ? this[_currentSize].value[$clamp](minSize, maxSize) : initialSize), hasDragged: this.hasDragged});
    }
  };
  (draggable_scrollable_sheet._DraggableSheetExtent.new = function(opts) {
    let t0, t0$, t0$0;
    let minSize = opts && 'minSize' in opts ? opts.minSize : null;
    let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
    let snap = opts && 'snap' in opts ? opts.snap : null;
    let snapSizes = opts && 'snapSizes' in opts ? opts.snapSizes : null;
    let initialSize = opts && 'initialSize' in opts ? opts.initialSize : null;
    let onSizeChanged = opts && 'onSizeChanged' in opts ? opts.onSizeChanged : null;
    let currentSize = opts && 'currentSize' in opts ? opts.currentSize : null;
    let hasDragged = opts && 'hasDragged' in opts ? opts.hasDragged : null;
    this[_cancelActivity] = null;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.snap = snap;
    this.snapSizes = snapSizes;
    this.initialSize = initialSize;
    this.onSizeChanged = onSizeChanged;
    if (!(minSize !== null)) dart.assertFailed(null, I[0], 434, 16, "minSize != null");
    if (!(maxSize !== null)) dart.assertFailed(null, I[0], 435, 16, "maxSize != null");
    if (!(initialSize !== null)) dart.assertFailed(null, I[0], 436, 16, "initialSize != null");
    if (!(minSize >= 0)) dart.assertFailed(null, I[0], 437, 16, "minSize >= 0");
    if (!(maxSize <= 1)) dart.assertFailed(null, I[0], 438, 16, "maxSize <= 1");
    if (!(minSize <= initialSize)) dart.assertFailed(null, I[0], 439, 16, "minSize <= initialSize");
    if (!(initialSize <= maxSize)) dart.assertFailed(null, I[0], 440, 16, "initialSize <= maxSize");
    this[_currentSize] = (t0$ = (t0 = currentSize, t0 == null ? new (T.ValueNotifierOfdouble()).new(initialSize) : t0), (() => {
      t0$.addListener(onSizeChanged);
      return t0$;
    })());
    this.availablePixels = 1 / 0;
    this.hasDragged = (t0$0 = hasDragged, t0$0 == null ? false : t0$0);
    ;
  }).prototype = draggable_scrollable_sheet._DraggableSheetExtent.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._DraggableSheetExtent);
  dart.addTypeCaches(draggable_scrollable_sheet._DraggableSheetExtent);
  dart.setMethodSignature(draggable_scrollable_sheet._DraggableSheetExtent, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._DraggableSheetExtent.__proto__),
    startActivity: dart.fnType(dart.void, [], {}, {onCanceled: dart.fnType(dart.void, [])}),
    addPixelDelta: dart.fnType(dart.void, [core.double, framework.BuildContext]),
    updateSize: dart.fnType(dart.void, [core.double, framework.BuildContext]),
    pixelsToSize: dart.fnType(core.double, [core.double]),
    sizeToPixels: dart.fnType(core.double, [core.double]),
    dispose: dart.fnType(dart.void, []),
    copyWith: dart.fnType(draggable_scrollable_sheet._DraggableSheetExtent, [], {}, {initialSize: core.double, maxSize: core.double, minSize: core.double, onSizeChanged: dart.fnType(dart.void, []), snap: core.bool, snapSizes: core.List$(core.double)})
  }));
  dart.setGetterSignature(draggable_scrollable_sheet._DraggableSheetExtent, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet._DraggableSheetExtent.__proto__),
    isAtMin: core.bool,
    isAtMax: core.bool,
    currentSize: core.double,
    currentPixels: core.double,
    additionalMinSize: core.double,
    additionalMaxSize: core.double,
    pixelSnapSizes: core.List$(core.double)
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._DraggableSheetExtent, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet._DraggableSheetExtent, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._DraggableSheetExtent.__proto__),
    [_cancelActivity]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    minSize: dart.finalFieldType(core.double),
    maxSize: dart.finalFieldType(core.double),
    snap: dart.finalFieldType(core.bool),
    snapSizes: dart.finalFieldType(core.List$(core.double)),
    initialSize: dart.finalFieldType(core.double),
    [_currentSize]: dart.finalFieldType(change_notifier.ValueNotifier$(core.double)),
    onSizeChanged: dart.finalFieldType(dart.fnType(dart.void, [])),
    availablePixels: dart.fieldType(core.double),
    hasDragged: dart.fieldType(core.bool)
  }));
  var ___DraggableScrollableSheetState__scrollController = dart.privateName(draggable_scrollable_sheet, "_#_DraggableScrollableSheetState#_scrollController");
  var ___DraggableScrollableSheetState__extent = dart.privateName(draggable_scrollable_sheet, "_#_DraggableScrollableSheetState#_extent");
  var _scrollController = dart.privateName(draggable_scrollable_sheet, "_scrollController");
  var _extent = dart.privateName(draggable_scrollable_sheet, "_extent");
  var _impliedSnapSizes = dart.privateName(draggable_scrollable_sheet, "_impliedSnapSizes");
  var _setExtent = dart.privateName(draggable_scrollable_sheet, "_setExtent");
  var _snapSizeErrorMessage = dart.privateName(draggable_scrollable_sheet, "_snapSizeErrorMessage");
  var _replaceExtent = dart.privateName(draggable_scrollable_sheet, "_replaceExtent");
  draggable_scrollable_sheet._DraggableScrollableSheetState = class _DraggableScrollableSheetState extends framework.State$(draggable_scrollable_sheet.DraggableScrollableSheet) {
    get [_scrollController]() {
      let t0;
      t0 = this[___DraggableScrollableSheetState__scrollController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_scrollController")) : t0;
    }
    set [_scrollController](t0) {
      this[___DraggableScrollableSheetState__scrollController] = t0;
    }
    get [_extent]() {
      let t1;
      t1 = this[___DraggableScrollableSheetState__extent];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_extent")) : t1;
    }
    set [_extent](t1) {
      this[___DraggableScrollableSheetState__extent] = t1;
    }
    initState() {
      let t2;
      super.initState();
      this[_extent] = new draggable_scrollable_sheet._DraggableSheetExtent.new({minSize: this.widget.minChildSize, maxSize: this.widget.maxChildSize, snap: this.widget.snap, snapSizes: this[_impliedSnapSizes](), initialSize: this.widget.initialChildSize, onSizeChanged: dart.bind(this, _setExtent)});
      this[_scrollController] = new draggable_scrollable_sheet._DraggableScrollableSheetScrollController.new({extent: this[_extent]});
      t2 = this.widget.controller;
      t2 == null ? null : t2[_attach](this[_scrollController]);
    }
    [_impliedSnapSizes]() {
      let t2, t2$;
      for (let index = 0; index < dart.notNull((t2$ = (t2 = this.widget.snapSizes, t2 == null ? null : t2[$length]), t2$ == null ? 0 : t2$)); index = index + 1) {
        let snapSize = dart.nullCheck(this.widget.snapSizes)[$_get](index);
        if (!(snapSize >= this.widget.minChildSize && snapSize <= this.widget.maxChildSize)) dart.assertFailed(this[_snapSizeErrorMessage](index) + "\nSnap sizes must be between `minChildSize` and `maxChildSize`. ", I[0], 575, 14, "snapSize >= widget.minChildSize && snapSize <= widget.maxChildSize");
        if (!(index === 0 || snapSize > dart.nullCheck(this.widget.snapSizes)[$_get](index - 1))) dart.assertFailed(this[_snapSizeErrorMessage](index) + "\nSnap sizes must be in ascending order. ", I[0], 577, 14, "index == 0 || snapSize > widget.snapSizes![index - 1]");
      }
      if (this.widget.snapSizes == null || dart.nullCheck(this.widget.snapSizes)[$isEmpty]) {
        return T.JSArrayOfdouble().of([this.widget.minChildSize, this.widget.maxChildSize]);
      }
      return (() => {
        let t2 = T.JSArrayOfdouble().of([]);
        if (dart.nullCheck(this.widget.snapSizes)[$first] !== this.widget.minChildSize) t2.push(this.widget.minChildSize);
        t2[$addAll](dart.nullCheck(this.widget.snapSizes));
        if (dart.nullCheck(this.widget.snapSizes)[$last] !== this.widget.maxChildSize) t2.push(this.widget.maxChildSize);
        return t2;
      })();
    }
    didUpdateWidget(oldWidget) {
      draggable_scrollable_sheet.DraggableScrollableSheet.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      this[_replaceExtent]();
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      if (draggable_scrollable_sheet._InheritedResetNotifier.shouldReset(this.context)) {
        this[_scrollController].reset();
      }
    }
    [_setExtent]() {
      this.setState(dart.fn(() => {
      }, T.VoidTovoid()));
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t5, t4, t3;
          this[_extent].availablePixels = this.widget.maxChildSize * constraints.biggest.height;
          let sheet = new basic.FractionallySizedBox.new({heightFactor: this[_extent].currentSize, alignment: alignment.Alignment.bottomCenter, child: (t3 = this.widget, t4 = context, t5 = this[_scrollController], t3.builder(t4, t5)), $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
          return this.widget.expand ? new basic.SizedBox.expand({child: sheet, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}) : sheet;
        }, T.BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    dispose() {
      let t3;
      t3 = this.widget.controller;
      t3 == null ? null : t3[_detach]();
      this[_scrollController].dispose();
      this[_extent].dispose();
      super.dispose();
    }
    [_replaceExtent]() {
      this[_extent].dispose();
      this[_extent] = this[_extent].copyWith({minSize: this.widget.minChildSize, maxSize: this.widget.maxChildSize, snap: this.widget.snap, snapSizes: this[_impliedSnapSizes](), initialSize: this.widget.initialChildSize, onSizeChanged: dart.bind(this, _setExtent)});
      this[_scrollController].extent = this[_extent];
      if (this.widget.snap) {
        dart.nullCheck(binding.WidgetsBinding.instance).addPostFrameCallback(dart.fn(timeStamp => {
          this[_scrollController].position.goBallistic(0.0);
        }, T.DurationTovoid()));
      }
    }
    [_snapSizeErrorMessage](invalidIndex) {
      let snapSizesWithIndicator = dart.nullCheck(this.widget.snapSizes)[$asMap]()[$keys][$map](core.String, dart.fn(index => {
        let snapSizeString = dart.nullCheck(this.widget.snapSizes)[$_get](index)[$toString]();
        if (index === invalidIndex) {
          return ">>> " + snapSizeString + " <<<";
        }
        return snapSizeString;
      }, T.intToString()))[$toList]();
      return "Invalid snapSize '" + dart.str(dart.nullCheck(this.widget.snapSizes)[$_get](invalidIndex)) + "' at index " + dart.str(invalidIndex) + " of:\n" + "  " + dart.str(snapSizesWithIndicator);
    }
    static ['_#new#tearOff']() {
      return new draggable_scrollable_sheet._DraggableScrollableSheetState.new();
    }
  };
  (draggable_scrollable_sheet._DraggableScrollableSheetState.new = function() {
    this[___DraggableScrollableSheetState__scrollController] = null;
    this[___DraggableScrollableSheetState__extent] = null;
    draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollable_sheet._DraggableScrollableSheetState.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._DraggableScrollableSheetState);
  dart.addTypeCaches(draggable_scrollable_sheet._DraggableScrollableSheetState);
  dart.setMethodSignature(draggable_scrollable_sheet._DraggableScrollableSheetState, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__),
    [_impliedSnapSizes]: dart.fnType(core.List$(core.double), []),
    [_setExtent]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_replaceExtent]: dart.fnType(dart.void, []),
    [_snapSizeErrorMessage]: dart.fnType(core.String, [core.int])
  }));
  dart.setGetterSignature(draggable_scrollable_sheet._DraggableScrollableSheetState, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__),
    [_scrollController]: draggable_scrollable_sheet._DraggableScrollableSheetScrollController,
    [_extent]: draggable_scrollable_sheet._DraggableSheetExtent
  }));
  dart.setSetterSignature(draggable_scrollable_sheet._DraggableScrollableSheetState, () => ({
    __proto__: dart.getSetters(draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__),
    [_scrollController]: draggable_scrollable_sheet._DraggableScrollableSheetScrollController,
    [_extent]: draggable_scrollable_sheet._DraggableSheetExtent
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._DraggableScrollableSheetState, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet._DraggableScrollableSheetState, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._DraggableScrollableSheetState.__proto__),
    [___DraggableScrollableSheetState__scrollController]: dart.fieldType(dart.nullable(draggable_scrollable_sheet._DraggableScrollableSheetScrollController)),
    [___DraggableScrollableSheetState__extent]: dart.fieldType(dart.nullable(draggable_scrollable_sheet._DraggableSheetExtent))
  }));
  var Duration__duration = dart.privateName(core, "Duration._duration");
  draggable_scrollable_sheet._DraggableScrollableSheetScrollController = class _DraggableScrollableSheetScrollController extends scroll_controller.ScrollController {
    static ['_#new#tearOff'](opts) {
      let initialScrollOffset = opts && 'initialScrollOffset' in opts ? opts.initialScrollOffset : 0;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let extent = opts && 'extent' in opts ? opts.extent : null;
      return new draggable_scrollable_sheet._DraggableScrollableSheetScrollController.new({initialScrollOffset: initialScrollOffset, debugLabel: debugLabel, extent: extent});
    }
    createScrollPosition(physics, context, oldPosition) {
      return new draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.new({physics: physics, context: context, oldPosition: oldPosition, getExtent: dart.fn(() => this.extent, T.VoidTo_DraggableSheetExtent())});
    }
    debugFillDescription(description) {
      super.debugFillDescription(description);
      description[$add]("extent: " + dart.str(this.extent));
    }
    get position() {
      return draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.as(super.position);
    }
    reset() {
      let t3;
      t3 = this.extent[_cancelActivity];
      t3 == null ? null : t3();
      this.extent.hasDragged = false;
      if (this.offset !== 0.0) {
        this.animateTo(0.0, {duration: C[4] || CT.C4, curve: curves.Curves.linear});
      }
      this.extent.updateSize(this.extent.initialSize, dart.nullCheck(this.position.context.notificationContext));
    }
  };
  (draggable_scrollable_sheet._DraggableScrollableSheetScrollController.new = function(opts) {
    let initialScrollOffset = opts && 'initialScrollOffset' in opts ? opts.initialScrollOffset : 0;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let extent = opts && 'extent' in opts ? opts.extent : null;
    this.extent = extent;
    if (!(extent !== null)) dart.assertFailed(null, I[0], 695, 15, "extent != null");
    draggable_scrollable_sheet._DraggableScrollableSheetScrollController.__proto__.new.call(this, {debugLabel: debugLabel, initialScrollOffset: initialScrollOffset});
    ;
  }).prototype = draggable_scrollable_sheet._DraggableScrollableSheetScrollController.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._DraggableScrollableSheetScrollController);
  dart.addTypeCaches(draggable_scrollable_sheet._DraggableScrollableSheetScrollController);
  dart.setMethodSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollController, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._DraggableScrollableSheetScrollController.__proto__),
    createScrollPosition: dart.fnType(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition, [scroll_physics.ScrollPhysics, scroll_context.ScrollContext, dart.nullable(scroll_position.ScrollPosition)]),
    reset: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollController, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet._DraggableScrollableSheetScrollController.__proto__),
    position: draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._DraggableScrollableSheetScrollController, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollController, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._DraggableScrollableSheetScrollController.__proto__),
    extent: dart.fieldType(draggable_scrollable_sheet._DraggableSheetExtent)
  }));
  var _dragCancelCallback = dart.privateName(draggable_scrollable_sheet, "_dragCancelCallback");
  var _ballisticCancelCallback = dart.privateName(draggable_scrollable_sheet, "_ballisticCancelCallback");
  var _isAtSnapSize = dart.privateName(draggable_scrollable_sheet, "_isAtSnapSize");
  var _shouldSnap = dart.privateName(draggable_scrollable_sheet, "_shouldSnap");
  draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition = class _DraggableScrollableSheetScrollPosition extends scroll_position_with_single_context.ScrollPositionWithSingleContext {
    static ['_#new#tearOff'](opts) {
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let context = opts && 'context' in opts ? opts.context : null;
      let initialPixels = opts && 'initialPixels' in opts ? opts.initialPixels : 0;
      let keepScrollOffset = opts && 'keepScrollOffset' in opts ? opts.keepScrollOffset : true;
      let oldPosition = opts && 'oldPosition' in opts ? opts.oldPosition : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let getExtent = opts && 'getExtent' in opts ? opts.getExtent : null;
      return new draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.new({physics: physics, context: context, initialPixels: initialPixels, keepScrollOffset: keepScrollOffset, oldPosition: oldPosition, debugLabel: debugLabel, getExtent: getExtent});
    }
    get listShouldScroll() {
      return this.pixels > 0.0;
    }
    get extent() {
      return this.getExtent();
    }
    beginActivity(newActivity) {
      let t3;
      t3 = this[_ballisticCancelCallback];
      t3 == null ? null : t3();
      super.beginActivity(newActivity);
    }
    applyContentDimensions(minScrollSize, maxScrollSize) {
      return super.applyContentDimensions(minScrollSize - this.extent.additionalMinSize, maxScrollSize + this.extent.additionalMaxSize);
    }
    applyUserOffset(delta) {
      if (!this.listShouldScroll && (!(this.extent.isAtMin || this.extent.isAtMax) || this.extent.isAtMin && delta < 0 || this.extent.isAtMax && delta > 0)) {
        this.extent.addPixelDelta(-delta, dart.nullCheck(this.context.notificationContext));
      } else {
        super.applyUserOffset(delta);
      }
    }
    get [_isAtSnapSize]() {
      return this.extent.snapSizes[$any](dart.fn(snapSize => (this.extent.currentSize - snapSize)[$abs]() <= this.extent.pixelsToSize(this.physics.tolerance.distance), T.doubleTobool()));
    }
    get [_shouldSnap]() {
      return this.extent.snap && this.extent.hasDragged && !this[_isAtSnapSize];
    }
    dispose() {
      let t3;
      t3 = this[_ballisticCancelCallback];
      t3 == null ? null : t3();
      super.dispose();
    }
    goBallistic(velocity) {
      let t3, t7;
      if (velocity === 0.0 && !this[_shouldSnap] || velocity < 0.0 && this.listShouldScroll || velocity > 0.0 && this.extent.isAtMax) {
        super.goBallistic(velocity);
        return;
      }
      t3 = this[_dragCancelCallback];
      t3 == null ? null : t3();
      this[_dragCancelCallback] = null;
      let simulation = null;
      function simulation$35get() {
        let t4;
        t4 = simulation;
        return t4 == null ? dart.throw(new _internal.LateError.localNI("simulation")) : t4;
      }
      dart.fn(simulation$35get, T.VoidToSimulation());
      function simulation$35set(t5) {
        if (simulation == null)
          return simulation = t5;
        else
          dart.throw(new _internal.LateError.localAI("simulation"));
      }
      dart.fn(simulation$35set, T.SimulationTodynamic());
      if (this.extent.snap) {
        simulation$35set(new draggable_scrollable_sheet._SnappingSimulation.new({position: this.extent.currentPixels, initialVelocity: velocity, pixelSnapSize: this.extent.pixelSnapSizes, tolerance: this.physics.tolerance}));
      } else {
        simulation$35set(new scroll_simulation.ClampingScrollSimulation.new({position: this.extent.currentPixels, velocity: velocity, tolerance: this.physics.tolerance}));
      }
      let ballisticController = new animation_controller.AnimationController.unbounded({debugLabel: object.objectRuntimeType(this, "_DraggableScrollableSheetPosition"), vsync: this.context.vsync});
      this[_ballisticCancelCallback] = dart.bind(ballisticController, 'stop');
      let lastPosition = this.extent.currentPixels;
      const _tick = () => {
        let delta = ballisticController.value - lastPosition;
        lastPosition = ballisticController.value;
        this.extent.addPixelDelta(delta, dart.nullCheck(this.context.notificationContext));
        if (velocity > 0 && this.extent.isAtMax || velocity < 0 && this.extent.isAtMin) {
          velocity = ballisticController.velocity + this.physics.tolerance.velocity * ballisticController.velocity[$sign];
          super.goBallistic(velocity);
          ballisticController.stop();
        } else if (ballisticController.isCompleted) {
          super.goBallistic(0.0);
        }
      };
      dart.fn(_tick, T.VoidTovoid());
      t7 = ballisticController;
      (() => {
        t7.addListener(_tick);
        t7.animateWith(simulation$35get()).whenCompleteOrCancel(dart.fn(() => {
          this[_ballisticCancelCallback] = null;
          ballisticController.dispose();
        }, T.VoidTovoid()));
        return t7;
      })();
    }
    drag(details, dragCancelCallback) {
      this[_dragCancelCallback] = dragCancelCallback;
      return super.drag(details, dragCancelCallback);
    }
  };
  (draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.new = function(opts) {
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let initialPixels = opts && 'initialPixels' in opts ? opts.initialPixels : 0;
    let keepScrollOffset = opts && 'keepScrollOffset' in opts ? opts.keepScrollOffset : true;
    let oldPosition = opts && 'oldPosition' in opts ? opts.oldPosition : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let getExtent = opts && 'getExtent' in opts ? opts.getExtent : null;
    this[_dragCancelCallback] = null;
    this[_ballisticCancelCallback] = null;
    this.getExtent = getExtent;
    draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.__proto__.new.call(this, {physics: physics, context: context, initialPixels: initialPixels, keepScrollOffset: keepScrollOffset, oldPosition: oldPosition, debugLabel: debugLabel});
    ;
  }).prototype = draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition);
  dart.addTypeCaches(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition);
  dart.setGetterSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.__proto__),
    listShouldScroll: core.bool,
    extent: draggable_scrollable_sheet._DraggableSheetExtent,
    [_isAtSnapSize]: core.bool,
    [_shouldSnap]: core.bool
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._DraggableScrollableSheetScrollPosition.__proto__),
    [_dragCancelCallback]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_ballisticCancelCallback]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    getExtent: dart.finalFieldType(dart.fnType(draggable_scrollable_sheet._DraggableSheetExtent, []))
  }));
  var child$ = dart.privateName(draggable_scrollable_sheet, "DraggableScrollableActuator.child");
  var _notifier = dart.privateName(draggable_scrollable_sheet, "_notifier");
  var _sendReset = dart.privateName(draggable_scrollable_sheet, "_sendReset");
  draggable_scrollable_sheet.DraggableScrollableActuator = class DraggableScrollableActuator extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new draggable_scrollable_sheet.DraggableScrollableActuator.new({key: key, child: child, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    static reset(context) {
      let notifier = context.dependOnInheritedWidgetOfExactType(draggable_scrollable_sheet._InheritedResetNotifier);
      if (notifier == null) {
        return false;
      }
      return notifier[_sendReset]();
    }
    build(context) {
      return new draggable_scrollable_sheet._InheritedResetNotifier.new({notifier: this[_notifier], child: this.child, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
  };
  (draggable_scrollable_sheet.DraggableScrollableActuator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_notifier] = new draggable_scrollable_sheet._ResetNotifier.new();
    this[child$] = child;
    draggable_scrollable_sheet.DraggableScrollableActuator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollable_sheet.DraggableScrollableActuator.prototype;
  dart.addTypeTests(draggable_scrollable_sheet.DraggableScrollableActuator);
  dart.addTypeCaches(draggable_scrollable_sheet.DraggableScrollableActuator);
  dart.setMethodSignature(draggable_scrollable_sheet.DraggableScrollableActuator, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet.DraggableScrollableActuator.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(draggable_scrollable_sheet.DraggableScrollableActuator, () => ['reset']);
  dart.setLibraryUri(draggable_scrollable_sheet.DraggableScrollableActuator, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet.DraggableScrollableActuator, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet.DraggableScrollableActuator.__proto__),
    child: dart.finalFieldType(framework.Widget),
    [_notifier]: dart.finalFieldType(draggable_scrollable_sheet._ResetNotifier)
  }));
  var _wasCalled = dart.privateName(draggable_scrollable_sheet, "_wasCalled");
  draggable_scrollable_sheet._ResetNotifier = class _ResetNotifier extends change_notifier.ChangeNotifier {
    sendReset() {
      if (!this.hasListeners) {
        return false;
      }
      this[_wasCalled] = true;
      this.notifyListeners();
      return true;
    }
    static ['_#new#tearOff']() {
      return new draggable_scrollable_sheet._ResetNotifier.new();
    }
  };
  (draggable_scrollable_sheet._ResetNotifier.new = function() {
    this[_wasCalled] = false;
    draggable_scrollable_sheet._ResetNotifier.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollable_sheet._ResetNotifier.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._ResetNotifier);
  dart.addTypeCaches(draggable_scrollable_sheet._ResetNotifier);
  dart.setMethodSignature(draggable_scrollable_sheet._ResetNotifier, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._ResetNotifier.__proto__),
    sendReset: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._ResetNotifier, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet._ResetNotifier, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._ResetNotifier.__proto__),
    [_wasCalled]: dart.fieldType(core.bool)
  }));
  draggable_scrollable_sheet._InheritedResetNotifier = class _InheritedResetNotifier extends inherited_notifier.InheritedNotifier$(draggable_scrollable_sheet._ResetNotifier) {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let notifier = opts && 'notifier' in opts ? opts.notifier : null;
      return new draggable_scrollable_sheet._InheritedResetNotifier.new({key: key, child: child, notifier: notifier, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    [_sendReset]() {
      return dart.nullCheck(this.notifier).sendReset();
    }
    static shouldReset(context) {
      let widget = context.dependOnInheritedWidgetOfExactType(draggable_scrollable_sheet._InheritedResetNotifier);
      if (widget == null) {
        return false;
      }
      if (!draggable_scrollable_sheet._InheritedResetNotifier.is(widget)) dart.assertFailed(null, I[0], 996, 12, "widget is _InheritedResetNotifier");
      let inheritedNotifier = draggable_scrollable_sheet._InheritedResetNotifier.as(widget);
      let wasCalled = dart.nullCheck(inheritedNotifier.notifier)[_wasCalled];
      dart.nullCheck(inheritedNotifier.notifier)[_wasCalled] = false;
      return wasCalled;
    }
  };
  (draggable_scrollable_sheet._InheritedResetNotifier.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let notifier = opts && 'notifier' in opts ? opts.notifier : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    draggable_scrollable_sheet._InheritedResetNotifier.__proto__.new.call(this, {key: key, child: child, notifier: notifier, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollable_sheet._InheritedResetNotifier.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._InheritedResetNotifier);
  dart.addTypeCaches(draggable_scrollable_sheet._InheritedResetNotifier);
  dart.setMethodSignature(draggable_scrollable_sheet._InheritedResetNotifier, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._InheritedResetNotifier.__proto__),
    [_sendReset]: dart.fnType(core.bool, [])
  }));
  dart.setStaticMethodSignature(draggable_scrollable_sheet._InheritedResetNotifier, () => ['shouldReset']);
  dart.setLibraryUri(draggable_scrollable_sheet._InheritedResetNotifier, I[1]);
  var Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  var Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  var Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  var ___SnappingSimulation_velocity = dart.privateName(draggable_scrollable_sheet, "_#_SnappingSimulation#velocity");
  var ___SnappingSimulation__pixelSnapSize = dart.privateName(draggable_scrollable_sheet, "_#_SnappingSimulation#_pixelSnapSize");
  var _pixelSnapSize = dart.privateName(draggable_scrollable_sheet, "_pixelSnapSize");
  var _getSnapSize = dart.privateName(draggable_scrollable_sheet, "_getSnapSize");
  draggable_scrollable_sheet._SnappingSimulation = class _SnappingSimulation extends simulation.Simulation {
    static ['_#new#tearOff'](opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let initialVelocity = opts && 'initialVelocity' in opts ? opts.initialVelocity : null;
      let pixelSnapSize = opts && 'pixelSnapSize' in opts ? opts.pixelSnapSize : null;
      let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C[8] || CT.C8;
      return new draggable_scrollable_sheet._SnappingSimulation.new({position: position, initialVelocity: initialVelocity, pixelSnapSize: pixelSnapSize, tolerance: tolerance});
    }
    get velocity() {
      let t7;
      t7 = this[___SnappingSimulation_velocity];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("velocity")) : t7;
    }
    set velocity(t7) {
      if (this[___SnappingSimulation_velocity] == null)
        this[___SnappingSimulation_velocity] = t7;
      else
        dart.throw(new _internal.LateError.fieldAI("velocity"));
    }
    get [_pixelSnapSize]() {
      let t8;
      t8 = this[___SnappingSimulation__pixelSnapSize];
      return t8 == null ? dart.throw(new _internal.LateError.fieldNI("_pixelSnapSize")) : t8;
    }
    set [_pixelSnapSize](t8) {
      if (this[___SnappingSimulation__pixelSnapSize] == null)
        this[___SnappingSimulation__pixelSnapSize] = t8;
      else
        dart.throw(new _internal.LateError.fieldAI("_pixelSnapSize"));
    }
    dx(time) {
      if (this.isDone(time)) {
        return 0.0;
      }
      return this.velocity;
    }
    isDone(time) {
      return this.x(time) === this[_pixelSnapSize];
    }
    x(time) {
      let newPosition = this.position + this.velocity * time;
      if (this.velocity >= 0 && newPosition > this[_pixelSnapSize] || this.velocity < 0 && newPosition < this[_pixelSnapSize]) {
        return this[_pixelSnapSize];
      }
      return newPosition;
    }
    [_getSnapSize](initialVelocity, pixelSnapSizes) {
      let indexOfNextSize = pixelSnapSizes[$indexWhere](dart.fn(size => size >= this.position, T.doubleTobool()));
      if (indexOfNextSize === 0) {
        return pixelSnapSizes[$first];
      }
      let nextSize = pixelSnapSizes[$_get](indexOfNextSize);
      let previousSize = pixelSnapSizes[$_get](indexOfNextSize - 1);
      if (initialVelocity[$abs]() <= this.tolerance.velocity) {
        if (this.position - previousSize < nextSize - this.position) {
          return previousSize;
        } else {
          return nextSize;
        }
      }
      if (initialVelocity < 0.0) {
        return pixelSnapSizes[$_get](indexOfNextSize - 1);
      }
      return pixelSnapSizes[$_get](indexOfNextSize);
    }
  };
  (draggable_scrollable_sheet._SnappingSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let initialVelocity = opts && 'initialVelocity' in opts ? opts.initialVelocity : null;
    let pixelSnapSize = opts && 'pixelSnapSize' in opts ? opts.pixelSnapSize : null;
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C[8] || CT.C8;
    this[___SnappingSimulation_velocity] = null;
    this[___SnappingSimulation__pixelSnapSize] = null;
    this.position = position;
    draggable_scrollable_sheet._SnappingSimulation.__proto__.new.call(this, {tolerance: tolerance});
    this[_pixelSnapSize] = this[_getSnapSize](initialVelocity, pixelSnapSize);
    if (this[_pixelSnapSize] < this.position) {
      this.velocity = math.min(core.double, -1600, initialVelocity);
    } else {
      this.velocity = math.max(core.double, 1600, initialVelocity);
    }
  }).prototype = draggable_scrollable_sheet._SnappingSimulation.prototype;
  dart.addTypeTests(draggable_scrollable_sheet._SnappingSimulation);
  dart.addTypeCaches(draggable_scrollable_sheet._SnappingSimulation);
  dart.setMethodSignature(draggable_scrollable_sheet._SnappingSimulation, () => ({
    __proto__: dart.getMethods(draggable_scrollable_sheet._SnappingSimulation.__proto__),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    [_getSnapSize]: dart.fnType(core.double, [core.double, core.List$(core.double)])
  }));
  dart.setGetterSignature(draggable_scrollable_sheet._SnappingSimulation, () => ({
    __proto__: dart.getGetters(draggable_scrollable_sheet._SnappingSimulation.__proto__),
    velocity: core.double,
    [_pixelSnapSize]: core.double
  }));
  dart.setSetterSignature(draggable_scrollable_sheet._SnappingSimulation, () => ({
    __proto__: dart.getSetters(draggable_scrollable_sheet._SnappingSimulation.__proto__),
    velocity: core.double,
    [_pixelSnapSize]: core.double
  }));
  dart.setLibraryUri(draggable_scrollable_sheet._SnappingSimulation, I[1]);
  dart.setFieldSignature(draggable_scrollable_sheet._SnappingSimulation, () => ({
    __proto__: dart.getFields(draggable_scrollable_sheet._SnappingSimulation.__proto__),
    position: dart.finalFieldType(core.double),
    [___SnappingSimulation_velocity]: dart.fieldType(dart.nullable(core.double)),
    [___SnappingSimulation__pixelSnapSize]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(draggable_scrollable_sheet._SnappingSimulation, () => ['minimumSpeed']);
  dart.defineLazy(draggable_scrollable_sheet._SnappingSimulation, {
    /*draggable_scrollable_sheet._SnappingSimulation.minimumSpeed*/get minimumSpeed() {
      return 1600;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/widgets/draggable_scrollable_sheet.dart", {
    "package:flutter/src/widgets/draggable_scrollable_sheet.dart": draggable_scrollable_sheet
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["draggable_scrollable_sheet.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/draggable_scrollable_sheet.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__draggable_scrollable_sheet: draggable_scrollable_sheet
  };
}));

//# sourceMappingURL=draggable_scrollable_sheet.dart.lib.js.map
