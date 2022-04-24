define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/widgets/scroll_metrics.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/physics/spring_simulation.dart', 'packages/flutter/src/physics/tolerance.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/widgets/sliver_fill.dart', 'packages/flutter/src/rendering/viewport_offset.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__page_view_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__widgets__scroll_metrics$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__physics__spring_simulation$46dart, packages__flutter__src__physics__tolerance$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__widgets__sliver_fill$46dart, packages__flutter__src__rendering__viewport_offset$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scroll_controller = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_controller;
  const scroll_position = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_position;
  const page_storage = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__page_storage;
  const scroll_position_with_single_context = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_position_with_single_context;
  const scroll_physics = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_physics;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const sliver = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__sliver;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const scroll_configuration = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_configuration;
  const debug = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const notification_listener = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__notification_listener;
  const scroll_notification = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_notification;
  const scrollable = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scrollable;
  const viewport = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__viewport;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const scroll_metrics = packages__flutter__src__widgets__scroll_metrics$46dart.src__widgets__scroll_metrics;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const spring_simulation = packages__flutter__src__physics__spring_simulation$46dart.src__physics__spring_simulation;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const viewport$ = packages__flutter__src__rendering__sliver$46dart.src__rendering__viewport;
  const sliver_fill = packages__flutter__src__widgets__sliver_fill$46dart.src__widgets__sliver_fill;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var page_view = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $toDouble = dartx.toDouble;
  var $round = dartx.round;
  var $clamp = dartx.clamp;
  var $roundToDouble = dartx.roundToDouble;
  var $abs = dartx.abs;
  var $noSuchMethod = dartx.noSuchMethod;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    NotificationListenerOfScrollNotification: () => (T.NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))(),
    ScrollNotificationTobool: () => (T.ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextAndViewportOffsetToViewport: () => (T.BuildContextAndViewportOffsetToViewport = dart.constFn(dart.fnType(viewport.Viewport, [framework.BuildContext, viewport_offset.ViewportOffset])))(),
    EnumPropertyOfAxis: () => (T.EnumPropertyOfAxis = dart.constFn(diagnostics.EnumProperty$(basic_types.Axis)))(),
    DiagnosticsPropertyOfPageController: () => (T.DiagnosticsPropertyOfPageController = dart.constFn(diagnostics.DiagnosticsProperty$(page_view.PageController)))(),
    DiagnosticsPropertyOfScrollPhysics: () => (T.DiagnosticsPropertyOfScrollPhysics = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_physics.ScrollPhysics)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: scroll_position.ScrollPositionAlignmentPolicy.prototype,
        [_Enum__name]: "explicit",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const(new _js_helper.PrivateSymbol.new('_maxScrollExtent', _maxScrollExtent));
    },
    get C4() {
      return C[4] = dart.const(new _js_helper.PrivateSymbol.new('_minScrollExtent', _minScrollExtent));
    },
    get C5() {
      return C[5] = dart.const(new _js_helper.PrivateSymbol.new('_viewportDimension', _viewportDimension));
    },
    get C6() {
      return C[6] = dart.const(new _js_helper.PrivateSymbol.new('_pixels', _pixels));
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.constList([], framework.Widget);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PageView",
        [_Location_column]: 3,
        [_Location_line]: 632,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PageView",
        [_Location_column]: 3,
        [_Location_line]: 671,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PageView",
        [_Location_column]: 3,
        [_Location_line]: 777,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverFillViewport",
        [_Location_column]: 15,
        [_Location_line]: 966,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Viewport",
        [_Location_column]: 18,
        [_Location_line]: 956,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scrollable",
        [_Location_column]: 14,
        [_Location_line]: 948,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NotificationListener",
        [_Location_column]: 12,
        [_Location_line]: 936,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/page_view.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: page_view.PageScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    }
  }, false);
  var C = Array(20).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/page_view.dart",
    "package:flutter/src/widgets/page_view.dart"
  ];
  var initialPage$ = dart.privateName(page_view, "PageController.initialPage");
  var keepPage$ = dart.privateName(page_view, "PageController.keepPage");
  var viewportFraction$ = dart.privateName(page_view, "PageController.viewportFraction");
  var _cachedPage = dart.privateName(page_view, "_cachedPage");
  page_view.PageController = class PageController extends scroll_controller.ScrollController {
    get initialPage() {
      return this[initialPage$];
    }
    set initialPage(value) {
      super.initialPage = value;
    }
    get keepPage() {
      return this[keepPage$];
    }
    set keepPage(value) {
      super.keepPage = value;
    }
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    static ['_#new#tearOff'](opts) {
      let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
      let keepPage = opts && 'keepPage' in opts ? opts.keepPage : true;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
      return new page_view.PageController.new({initialPage: initialPage, keepPage: keepPage, viewportFraction: viewportFraction});
    }
    get page() {
      if (!this.positions[$isNotEmpty]) dart.assertFailed("PageController.page cannot be accessed before a PageView is built with it.", I[0], 172, 7, "positions.isNotEmpty");
      if (!(this.positions[$length] === 1)) dart.assertFailed("The page property cannot be read when multiple PageViews are attached to " + "the same PageController.", I[0], 176, 7, "positions.length == 1");
      let position = page_view._PagePosition.as(this.position);
      return position.page;
    }
    animateToPage(page, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      let position = page_view._PagePosition.as(this.position);
      if (position[_cachedPage] != null) {
        position[_cachedPage] = page[$toDouble]();
        return T.FutureOfvoid().value();
      }
      return position.animateTo(position.getPixelsFromPage(page[$toDouble]()), {duration: duration, curve: curve});
    }
    jumpToPage(page) {
      let position = page_view._PagePosition.as(this.position);
      if (position[_cachedPage] != null) {
        position[_cachedPage] = page[$toDouble]();
        return;
      }
      position.jumpTo(position.getPixelsFromPage(page[$toDouble]()));
    }
    nextPage(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return this.animateToPage(dart.nullCheck(this.page)[$round]() + 1, {duration: duration, curve: curve});
    }
    previousPage(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return this.animateToPage(dart.nullCheck(this.page)[$round]() - 1, {duration: duration, curve: curve});
    }
    createScrollPosition(physics, context, oldPosition) {
      return new page_view._PagePosition.new({physics: physics, context: context, initialPage: this.initialPage, keepPage: this.keepPage, viewportFraction: this.viewportFraction, oldPosition: oldPosition});
    }
    attach(position) {
      super.attach(position);
      let pagePosition = page_view._PagePosition.as(position);
      pagePosition.viewportFraction = this.viewportFraction;
    }
  };
  (page_view.PageController.new = function(opts) {
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
    let keepPage = opts && 'keepPage' in opts ? opts.keepPage : true;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    this[initialPage$] = initialPage;
    this[keepPage$] = keepPage;
    this[viewportFraction$] = viewportFraction;
    if (!(initialPage !== null)) dart.assertFailed(null, I[0], 122, 15, "initialPage != null");
    if (!(keepPage !== null)) dart.assertFailed(null, I[0], 123, 15, "keepPage != null");
    if (!(viewportFraction !== null)) dart.assertFailed(null, I[0], 124, 15, "viewportFraction != null");
    if (!(viewportFraction > 0.0)) dart.assertFailed(null, I[0], 125, 15, "viewportFraction > 0.0");
    page_view.PageController.__proto__.new.call(this);
    ;
  }).prototype = page_view.PageController.prototype;
  dart.addTypeTests(page_view.PageController);
  dart.addTypeCaches(page_view.PageController);
  dart.setMethodSignature(page_view.PageController, () => ({
    __proto__: dart.getMethods(page_view.PageController.__proto__),
    animateToPage: dart.fnType(async.Future$(dart.void), [core.int], {}, {curve: curves.Curve, duration: core.Duration}),
    jumpToPage: dart.fnType(dart.void, [core.int]),
    nextPage: dart.fnType(async.Future$(dart.void), [], {}, {curve: curves.Curve, duration: core.Duration}),
    previousPage: dart.fnType(async.Future$(dart.void), [], {}, {curve: curves.Curve, duration: core.Duration})
  }));
  dart.setGetterSignature(page_view.PageController, () => ({
    __proto__: dart.getGetters(page_view.PageController.__proto__),
    page: dart.nullable(core.double)
  }));
  dart.setLibraryUri(page_view.PageController, I[1]);
  dart.setFieldSignature(page_view.PageController, () => ({
    __proto__: dart.getFields(page_view.PageController.__proto__),
    initialPage: dart.finalFieldType(core.int),
    keepPage: dart.finalFieldType(core.bool),
    viewportFraction: dart.finalFieldType(core.double)
  }));
  var viewportFraction$0 = dart.privateName(page_view, "PageMetrics.viewportFraction");
  page_view.PageMetrics = class PageMetrics extends scroll_metrics.FixedScrollMetrics {
    get viewportFraction() {
      return this[viewportFraction$0];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    static ['_#new#tearOff'](opts) {
      let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
      let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
      let pixels = opts && 'pixels' in opts ? opts.pixels : null;
      let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
      return new page_view.PageMetrics.new({minScrollExtent: minScrollExtent, maxScrollExtent: maxScrollExtent, pixels: pixels, viewportDimension: viewportDimension, axisDirection: axisDirection, viewportFraction: viewportFraction});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
      let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
      let pixels = opts && 'pixels' in opts ? opts.pixels : null;
      let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
      return new page_view.PageMetrics.new({minScrollExtent: (t0 = minScrollExtent, t0 == null ? this.hasContentDimensions ? this.minScrollExtent : null : t0), maxScrollExtent: (t0$ = maxScrollExtent, t0$ == null ? this.hasContentDimensions ? this.maxScrollExtent : null : t0$), pixels: (t0$0 = pixels, t0$0 == null ? this.hasPixels ? this.pixels : null : t0$0), viewportDimension: (t0$1 = viewportDimension, t0$1 == null ? this.hasViewportDimension ? this.viewportDimension : null : t0$1), axisDirection: (t0$2 = axisDirection, t0$2 == null ? this.axisDirection : t0$2), viewportFraction: (t0$3 = viewportFraction, t0$3 == null ? this.viewportFraction : t0$3)});
    }
    get page() {
      return math.max(core.double, 0.0, this.pixels[$clamp](this.minScrollExtent, this.maxScrollExtent)) / math.max(core.num, 1.0, this.viewportDimension * this.viewportFraction);
    }
  };
  (page_view.PageMetrics.new = function(opts) {
    let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
    let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
    let pixels = opts && 'pixels' in opts ? opts.pixels : null;
    let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
    this[viewportFraction$0] = viewportFraction;
    page_view.PageMetrics.__proto__.new.call(this, {minScrollExtent: minScrollExtent, maxScrollExtent: maxScrollExtent, pixels: pixels, viewportDimension: viewportDimension, axisDirection: axisDirection});
    ;
  }).prototype = page_view.PageMetrics.prototype;
  dart.addTypeTests(page_view.PageMetrics);
  dart.addTypeCaches(page_view.PageMetrics);
  dart.setMethodSignature(page_view.PageMetrics, () => ({
    __proto__: dart.getMethods(page_view.PageMetrics.__proto__),
    copyWith: dart.fnType(page_view.PageMetrics, [], {axisDirection: dart.nullable(basic_types.AxisDirection), maxScrollExtent: dart.nullable(core.double), minScrollExtent: dart.nullable(core.double), pixels: dart.nullable(core.double), viewportDimension: dart.nullable(core.double), viewportFraction: dart.nullable(core.double)}, {})
  }));
  dart.setGetterSignature(page_view.PageMetrics, () => ({
    __proto__: dart.getGetters(page_view.PageMetrics.__proto__),
    page: dart.nullable(core.double)
  }));
  dart.setLibraryUri(page_view.PageMetrics, I[1]);
  dart.setFieldSignature(page_view.PageMetrics, () => ({
    __proto__: dart.getFields(page_view.PageMetrics.__proto__),
    viewportFraction: dart.finalFieldType(core.double)
  }));
  var _viewportFraction = dart.privateName(page_view, "_viewportFraction");
  var _pageToUseOnStartup = dart.privateName(page_view, "_pageToUseOnStartup");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _initialPageOffset = dart.privateName(page_view, "_initialPageOffset");
  var _maxScrollExtent = dart.privateName(page_view, "_maxScrollExtent");
  var _maxScrollExtent$ = dart.privateName(scroll_metrics, "_maxScrollExtent");
  var _minScrollExtent = dart.privateName(page_view, "_minScrollExtent");
  var _minScrollExtent$ = dart.privateName(scroll_metrics, "_minScrollExtent");
  var _viewportDimension = dart.privateName(page_view, "_viewportDimension");
  var _viewportDimension$ = dart.privateName(scroll_metrics, "_viewportDimension");
  var _pixels = dart.privateName(page_view, "_pixels");
  var _pixels$ = dart.privateName(scroll_metrics, "_pixels");
  page_view._PagePosition = class _PagePosition extends scroll_position_with_single_context.ScrollPositionWithSingleContext {
    static ['_#new#tearOff'](opts) {
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let context = opts && 'context' in opts ? opts.context : null;
      let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
      let keepPage = opts && 'keepPage' in opts ? opts.keepPage : true;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
      let oldPosition = opts && 'oldPosition' in opts ? opts.oldPosition : null;
      return new page_view._PagePosition.new({physics: physics, context: context, initialPage: initialPage, keepPage: keepPage, viewportFraction: viewportFraction, oldPosition: oldPosition});
    }
    ensureVisible(object, opts) {
      let alignment = opts && 'alignment' in opts ? opts.alignment : 0;
      let duration = opts && 'duration' in opts ? opts.duration : C[0] || CT.C0;
      let curve = opts && 'curve' in opts ? opts.curve : C[1] || CT.C1;
      let alignmentPolicy = opts && 'alignmentPolicy' in opts ? opts.alignmentPolicy : C[2] || CT.C2;
      let targetRenderObject = opts && 'targetRenderObject' in opts ? opts.targetRenderObject : null;
      return super.ensureVisible(object, {alignment: alignment, duration: duration, curve: curve, alignmentPolicy: alignmentPolicy});
    }
    get viewportFraction() {
      return this[_viewportFraction];
    }
    set viewportFraction(value) {
      if (this[_viewportFraction] === value) return;
      let oldPage = this.page;
      this[_viewportFraction] = value;
      if (oldPage != null) this.forcePixels(this.getPixelsFromPage(oldPage));
    }
    get [_initialPageOffset]() {
      return math.max(core.double, 0.0, this.viewportDimension * (this.viewportFraction - 1) / 2);
    }
    getPageFromPixels(pixels, viewportDimension) {
      if (!(viewportDimension > 0.0)) dart.assertFailed(null, I[0], 386, 12, "viewportDimension > 0.0");
      let actual = math.max(core.double, 0.0, pixels - this[_initialPageOffset]) / (viewportDimension * this.viewportFraction);
      let round = actual[$roundToDouble]();
      if ((actual - round)[$abs]() < 1e-10) {
        return round;
      }
      return actual;
    }
    getPixelsFromPage(page) {
      return page * this.viewportDimension * this.viewportFraction + this[_initialPageOffset];
    }
    get page() {
      let t0;
      if (!(!this.hasPixels || this.hasContentDimensions)) dart.assertFailed("Page value is only available after content dimensions are established.", I[0], 402, 7, "!hasPixels || hasContentDimensions");
      return !this.hasPixels || !this.hasContentDimensions ? null : (t0 = this[_cachedPage], t0 == null ? this.getPageFromPixels(this.pixels[$clamp](this.minScrollExtent, this.maxScrollExtent), this.viewportDimension) : t0);
    }
    saveScrollOffset() {
      let t1, t0;
      t0 = page_storage.PageStorage.of(this.context.storageContext);
      t0 == null ? null : t0.writeState(this.context.storageContext, (t1 = this[_cachedPage], t1 == null ? this.getPageFromPixels(this.pixels, this.viewportDimension) : t1));
    }
    restoreScrollOffset() {
      let t0;
      if (!this.hasPixels) {
        let value = T.doubleN().as((t0 = page_storage.PageStorage.of(this.context.storageContext), t0 == null ? null : t0.readState(this.context.storageContext)));
        if (value != null) this[_pageToUseOnStartup] = value;
      }
    }
    saveOffset() {
      let t0;
      this.context.saveOffset((t0 = this[_cachedPage], t0 == null ? this.getPageFromPixels(this.pixels, this.viewportDimension) : t0));
    }
    restoreOffset(offset, opts) {
      let initialRestore = opts && 'initialRestore' in opts ? opts.initialRestore : false;
      if (!(initialRestore !== null)) dart.assertFailed(null, I[0], 431, 12, "initialRestore != null");
      if (!(offset !== null)) dart.assertFailed(null, I[0], 432, 12, "offset != null");
      if (initialRestore) {
        this[_pageToUseOnStartup] = offset;
      } else {
        this.jumpTo(this.getPixelsFromPage(offset));
      }
    }
    applyViewportDimension(viewportDimension) {
      let oldViewportDimensions = this.hasViewportDimension ? this.viewportDimension : null;
      if (viewportDimension === oldViewportDimensions) {
        return true;
      }
      let result = super.applyViewportDimension(viewportDimension);
      let oldPixels = this.hasPixels ? this.pixels : null;
      let page = null;
      if (oldPixels == null) {
        page = this[_pageToUseOnStartup];
      } else if (oldViewportDimensions === 0.0) {
        page = dart.nullCheck(this[_cachedPage]);
      } else {
        page = this.getPageFromPixels(oldPixels, dart.nullCheck(oldViewportDimensions));
      }
      let newPixels = this.getPixelsFromPage(page);
      this[_cachedPage] = viewportDimension === 0.0 ? page : null;
      if (newPixels !== oldPixels) {
        this.correctPixels(newPixels);
        return false;
      }
      return result;
    }
    applyContentDimensions(minScrollExtent, maxScrollExtent) {
      let newMinScrollExtent = minScrollExtent + this[_initialPageOffset];
      return super.applyContentDimensions(newMinScrollExtent, math.max(core.double, newMinScrollExtent, maxScrollExtent - this[_initialPageOffset]));
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let minScrollExtent = opts && 'minScrollExtent' in opts ? opts.minScrollExtent : null;
      let maxScrollExtent = opts && 'maxScrollExtent' in opts ? opts.maxScrollExtent : null;
      let pixels = opts && 'pixels' in opts ? opts.pixels : null;
      let viewportDimension = opts && 'viewportDimension' in opts ? opts.viewportDimension : null;
      let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
      return new page_view.PageMetrics.new({minScrollExtent: (t0 = minScrollExtent, t0 == null ? this.hasContentDimensions ? this.minScrollExtent : null : t0), maxScrollExtent: (t0$ = maxScrollExtent, t0$ == null ? this.hasContentDimensions ? this.maxScrollExtent : null : t0$), pixels: (t0$0 = pixels, t0$0 == null ? this.hasPixels ? this.pixels : null : t0$0), viewportDimension: (t0$1 = viewportDimension, t0$1 == null ? this.hasViewportDimension ? this.viewportDimension : null : t0$1), axisDirection: (t0$2 = axisDirection, t0$2 == null ? this.axisDirection : t0$2), viewportFraction: (t0$3 = viewportFraction, t0$3 == null ? this.viewportFraction : t0$3)});
    }
    get [_maxScrollExtent$]() {
      return T.doubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[3] || CT.C3)));
    }
    get [_minScrollExtent$]() {
      return T.doubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_viewportDimension$]() {
      return T.doubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    get [_pixels$]() {
      return T.doubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[6] || CT.C6)));
    }
  };
  (page_view._PagePosition.new = function(opts) {
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
    let keepPage = opts && 'keepPage' in opts ? opts.keepPage : true;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    let oldPosition = opts && 'oldPosition' in opts ? opts.oldPosition : null;
    this[_cachedPage] = null;
    this.initialPage = initialPage;
    if (!(initialPage !== null)) dart.assertFailed(null, I[0], 322, 15, "initialPage != null");
    if (!(keepPage !== null)) dart.assertFailed(null, I[0], 323, 15, "keepPage != null");
    if (!(viewportFraction !== null)) dart.assertFailed(null, I[0], 324, 15, "viewportFraction != null");
    if (!(viewportFraction > 0.0)) dart.assertFailed(null, I[0], 325, 15, "viewportFraction > 0.0");
    this[_viewportFraction] = viewportFraction;
    this[_pageToUseOnStartup] = initialPage[$toDouble]();
    page_view._PagePosition.__proto__.new.call(this, {physics: physics, context: context, initialPixels: null, keepScrollOffset: keepPage, oldPosition: oldPosition});
    ;
  }).prototype = page_view._PagePosition.prototype;
  dart.addTypeTests(page_view._PagePosition);
  dart.addTypeCaches(page_view._PagePosition);
  page_view._PagePosition[dart.implements] = () => [page_view.PageMetrics];
  dart.setMethodSignature(page_view._PagePosition, () => ({
    __proto__: dart.getMethods(page_view._PagePosition.__proto__),
    getPageFromPixels: dart.fnType(core.double, [core.double, core.double]),
    getPixelsFromPage: dart.fnType(core.double, [core.double]),
    copyWith: dart.fnType(page_view.PageMetrics, [], {axisDirection: dart.nullable(basic_types.AxisDirection), maxScrollExtent: dart.nullable(core.double), minScrollExtent: dart.nullable(core.double), pixels: dart.nullable(core.double), viewportDimension: dart.nullable(core.double), viewportFraction: dart.nullable(core.double)}, {})
  }));
  dart.setGetterSignature(page_view._PagePosition, () => ({
    __proto__: dart.getGetters(page_view._PagePosition.__proto__),
    viewportFraction: core.double,
    [_initialPageOffset]: core.double,
    page: dart.nullable(core.double),
    [_maxScrollExtent$]: dart.nullable(core.double),
    [_minScrollExtent$]: dart.nullable(core.double),
    [_viewportDimension$]: dart.nullable(core.double),
    [_pixels$]: dart.nullable(core.double)
  }));
  dart.setSetterSignature(page_view._PagePosition, () => ({
    __proto__: dart.getSetters(page_view._PagePosition.__proto__),
    viewportFraction: core.double
  }));
  dart.setLibraryUri(page_view._PagePosition, I[1]);
  dart.setFieldSignature(page_view._PagePosition, () => ({
    __proto__: dart.getFields(page_view._PagePosition.__proto__),
    initialPage: dart.finalFieldType(core.int),
    [_pageToUseOnStartup]: dart.fieldType(core.double),
    [_cachedPage]: dart.fieldType(dart.nullable(core.double)),
    [_viewportFraction]: dart.fieldType(core.double)
  }));
  var allowImplicitScrolling$ = dart.privateName(page_view, "_ForceImplicitScrollPhysics.allowImplicitScrolling");
  page_view._ForceImplicitScrollPhysics = class _ForceImplicitScrollPhysics extends scroll_physics.ScrollPhysics {
    get allowImplicitScrolling() {
      return this[allowImplicitScrolling$];
    }
    set allowImplicitScrolling(value) {
      super.allowImplicitScrolling = value;
    }
    static ['_#new#tearOff'](opts) {
      let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : null;
      let parent = opts && 'parent' in opts ? opts.parent : null;
      return new page_view._ForceImplicitScrollPhysics.new({allowImplicitScrolling: allowImplicitScrolling, parent: parent});
    }
    applyTo(ancestor) {
      return new page_view._ForceImplicitScrollPhysics.new({allowImplicitScrolling: this.allowImplicitScrolling, parent: this.buildParent(ancestor)});
    }
  };
  (page_view._ForceImplicitScrollPhysics.new = function(opts) {
    let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    this[allowImplicitScrolling$] = allowImplicitScrolling;
    if (!(allowImplicitScrolling !== null)) dart.assertFailed(null, I[0], 503, 15, "allowImplicitScrolling != null");
    page_view._ForceImplicitScrollPhysics.__proto__.new.call(this, {parent: parent});
    ;
  }).prototype = page_view._ForceImplicitScrollPhysics.prototype;
  dart.addTypeTests(page_view._ForceImplicitScrollPhysics);
  dart.addTypeCaches(page_view._ForceImplicitScrollPhysics);
  dart.setMethodSignature(page_view._ForceImplicitScrollPhysics, () => ({
    __proto__: dart.getMethods(page_view._ForceImplicitScrollPhysics.__proto__),
    applyTo: dart.fnType(page_view._ForceImplicitScrollPhysics, [dart.nullable(scroll_physics.ScrollPhysics)])
  }));
  dart.setLibraryUri(page_view._ForceImplicitScrollPhysics, I[1]);
  dart.setFieldSignature(page_view._ForceImplicitScrollPhysics, () => ({
    __proto__: dart.getFields(page_view._ForceImplicitScrollPhysics.__proto__),
    allowImplicitScrolling: dart.finalFieldType(core.bool)
  }));
  var _getPage = dart.privateName(page_view, "_getPage");
  var _getPixels = dart.privateName(page_view, "_getPixels");
  var _getTargetPixels = dart.privateName(page_view, "_getTargetPixels");
  page_view.PageScrollPhysics = class PageScrollPhysics extends scroll_physics.ScrollPhysics {
    static ['_#new#tearOff'](opts) {
      let parent = opts && 'parent' in opts ? opts.parent : null;
      return new page_view.PageScrollPhysics.new({parent: parent});
    }
    applyTo(ancestor) {
      return new page_view.PageScrollPhysics.new({parent: this.buildParent(ancestor)});
    }
    [_getPage](position) {
      if (page_view._PagePosition.is(position)) return dart.nullCheck(position.page);
      return position.pixels / position.viewportDimension;
    }
    [_getPixels](position, page) {
      if (page_view._PagePosition.is(position)) return position.getPixelsFromPage(page);
      return page * position.viewportDimension;
    }
    [_getTargetPixels](position, tolerance, velocity) {
      let page = this[_getPage](position);
      if (velocity < -tolerance.velocity)
        page = page - 0.5;
      else if (velocity > tolerance.velocity) page = page + 0.5;
      return this[_getPixels](position, page[$roundToDouble]());
    }
    createBallisticSimulation(position, velocity) {
      if (velocity <= 0.0 && position.pixels <= position.minScrollExtent || velocity >= 0.0 && position.pixels >= position.maxScrollExtent) return super.createBallisticSimulation(position, velocity);
      let tolerance = this.tolerance;
      let target = this[_getTargetPixels](position, tolerance, velocity);
      if (target !== position.pixels) return new spring_simulation.ScrollSpringSimulation.new(this.spring, position.pixels, target, velocity, {tolerance: tolerance});
      return null;
    }
    get allowImplicitScrolling() {
      return false;
    }
  };
  (page_view.PageScrollPhysics.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    page_view.PageScrollPhysics.__proto__.new.call(this, {parent: parent});
    ;
  }).prototype = page_view.PageScrollPhysics.prototype;
  dart.addTypeTests(page_view.PageScrollPhysics);
  dart.addTypeCaches(page_view.PageScrollPhysics);
  dart.setMethodSignature(page_view.PageScrollPhysics, () => ({
    __proto__: dart.getMethods(page_view.PageScrollPhysics.__proto__),
    applyTo: dart.fnType(page_view.PageScrollPhysics, [dart.nullable(scroll_physics.ScrollPhysics)]),
    [_getPage]: dart.fnType(core.double, [scroll_metrics.ScrollMetrics]),
    [_getPixels]: dart.fnType(core.double, [scroll_metrics.ScrollMetrics, core.double]),
    [_getTargetPixels]: dart.fnType(core.double, [scroll_metrics.ScrollMetrics, tolerance.Tolerance, core.double])
  }));
  dart.setLibraryUri(page_view.PageScrollPhysics, I[1]);
  var allowImplicitScrolling$0 = dart.privateName(page_view, "PageView.allowImplicitScrolling");
  var restorationId$ = dart.privateName(page_view, "PageView.restorationId");
  var scrollDirection$ = dart.privateName(page_view, "PageView.scrollDirection");
  var reverse$ = dart.privateName(page_view, "PageView.reverse");
  var controller$ = dart.privateName(page_view, "PageView.controller");
  var physics$ = dart.privateName(page_view, "PageView.physics");
  var pageSnapping$ = dart.privateName(page_view, "PageView.pageSnapping");
  var onPageChanged$ = dart.privateName(page_view, "PageView.onPageChanged");
  var childrenDelegate$ = dart.privateName(page_view, "PageView.childrenDelegate");
  var dragStartBehavior$ = dart.privateName(page_view, "PageView.dragStartBehavior");
  var clipBehavior$ = dart.privateName(page_view, "PageView.clipBehavior");
  var scrollBehavior$ = dart.privateName(page_view, "PageView.scrollBehavior");
  var padEnds$ = dart.privateName(page_view, "PageView.padEnds");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  page_view.PageView = class PageView extends framework.StatefulWidget {
    get allowImplicitScrolling() {
      return this[allowImplicitScrolling$0];
    }
    set allowImplicitScrolling(value) {
      super.allowImplicitScrolling = value;
    }
    get restorationId() {
      return this[restorationId$];
    }
    set restorationId(value) {
      super.restorationId = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get pageSnapping() {
      return this[pageSnapping$];
    }
    set pageSnapping(value) {
      super.pageSnapping = value;
    }
    get onPageChanged() {
      return this[onPageChanged$];
    }
    set onPageChanged(value) {
      super.onPageChanged = value;
    }
    get childrenDelegate() {
      return this[childrenDelegate$];
    }
    set childrenDelegate(value) {
      super.childrenDelegate = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get scrollBehavior() {
      return this[scrollBehavior$];
    }
    set scrollBehavior(value) {
      super.scrollBehavior = value;
    }
    get padEnds() {
      return this[padEnds$];
    }
    set padEnds(value) {
      super.padEnds = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[7] || CT.C7;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
      let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
      let children = opts && 'children' in opts ? opts.children : C[8] || CT.C8;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[9] || CT.C9;
      let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[10] || CT.C10;
      let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
      let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
      return new page_view.PageView.new({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, physics: physics, pageSnapping: pageSnapping, onPageChanged: onPageChanged, children: children, dragStartBehavior: dragStartBehavior, allowImplicitScrolling: allowImplicitScrolling, restorationId: restorationId, clipBehavior: clipBehavior, scrollBehavior: scrollBehavior, padEnds: padEnds, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    static ['_#builder#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[7] || CT.C7;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
      let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
      let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[9] || CT.C9;
      let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[10] || CT.C10;
      let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
      let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
      return new page_view.PageView.builder({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, physics: physics, pageSnapping: pageSnapping, onPageChanged: onPageChanged, itemBuilder: itemBuilder, itemCount: itemCount, dragStartBehavior: dragStartBehavior, allowImplicitScrolling: allowImplicitScrolling, restorationId: restorationId, clipBehavior: clipBehavior, scrollBehavior: scrollBehavior, padEnds: padEnds, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    static ['_#custom#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[7] || CT.C7;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
      let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
      let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[9] || CT.C9;
      let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[10] || CT.C10;
      let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
      let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
      return new page_view.PageView.custom({key: key, scrollDirection: scrollDirection, reverse: reverse, controller: controller, physics: physics, pageSnapping: pageSnapping, onPageChanged: onPageChanged, childrenDelegate: childrenDelegate, dragStartBehavior: dragStartBehavior, allowImplicitScrolling: allowImplicitScrolling, restorationId: restorationId, clipBehavior: clipBehavior, scrollBehavior: scrollBehavior, padEnds: padEnds, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    createState() {
      return new page_view._PageViewState.new();
    }
  };
  (page_view.PageView.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[7] || CT.C7;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let children = opts && 'children' in opts ? opts.children : C[8] || CT.C8;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[9] || CT.C9;
    let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[10] || CT.C10;
    let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
    let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[physics$] = physics;
    this[pageSnapping$] = pageSnapping;
    this[onPageChanged$] = onPageChanged;
    this[dragStartBehavior$] = dragStartBehavior;
    this[allowImplicitScrolling$0] = allowImplicitScrolling;
    this[restorationId$] = restorationId;
    this[clipBehavior$] = clipBehavior;
    this[scrollBehavior$] = scrollBehavior;
    this[padEnds$] = padEnds;
    if (!(allowImplicitScrolling !== null)) dart.assertFailed(null, I[0], 647, 15, "allowImplicitScrolling != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 648, 15, "clipBehavior != null");
    this[controller$] = (t0 = controller, t0 == null ? page_view._defaultPageController : t0);
    this[childrenDelegate$] = new sliver.SliverChildListDelegate.new(children);
    page_view.PageView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_view.PageView.prototype;
  (page_view.PageView.builder = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[7] || CT.C7;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[9] || CT.C9;
    let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[10] || CT.C10;
    let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
    let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[physics$] = physics;
    this[pageSnapping$] = pageSnapping;
    this[onPageChanged$] = onPageChanged;
    this[dragStartBehavior$] = dragStartBehavior;
    this[allowImplicitScrolling$0] = allowImplicitScrolling;
    this[restorationId$] = restorationId;
    this[clipBehavior$] = clipBehavior;
    this[scrollBehavior$] = scrollBehavior;
    this[padEnds$] = padEnds;
    if (!(allowImplicitScrolling !== null)) dart.assertFailed(null, I[0], 687, 15, "allowImplicitScrolling != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 688, 15, "clipBehavior != null");
    this[controller$] = (t0 = controller, t0 == null ? page_view._defaultPageController : t0);
    this[childrenDelegate$] = new sliver.SliverChildBuilderDelegate.new(itemBuilder, {childCount: itemCount});
    page_view.PageView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_view.PageView.prototype;
  (page_view.PageView.custom = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C[7] || CT.C7;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let childrenDelegate = opts && 'childrenDelegate' in opts ? opts.childrenDelegate : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[9] || CT.C9;
    let allowImplicitScrolling = opts && 'allowImplicitScrolling' in opts ? opts.allowImplicitScrolling : false;
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[10] || CT.C10;
    let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
    let padEnds = opts && 'padEnds' in opts ? opts.padEnds : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[physics$] = physics;
    this[pageSnapping$] = pageSnapping;
    this[onPageChanged$] = onPageChanged;
    this[childrenDelegate$] = childrenDelegate;
    this[dragStartBehavior$] = dragStartBehavior;
    this[allowImplicitScrolling$0] = allowImplicitScrolling;
    this[restorationId$] = restorationId;
    this[clipBehavior$] = clipBehavior;
    this[scrollBehavior$] = scrollBehavior;
    this[padEnds$] = padEnds;
    if (!(childrenDelegate !== null)) dart.assertFailed(null, I[0], 792, 15, "childrenDelegate != null");
    if (!(allowImplicitScrolling !== null)) dart.assertFailed(null, I[0], 793, 15, "allowImplicitScrolling != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 794, 15, "clipBehavior != null");
    this[controller$] = (t0 = controller, t0 == null ? page_view._defaultPageController : t0);
    page_view.PageView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = page_view.PageView.prototype;
  dart.addTypeTests(page_view.PageView);
  dart.addTypeCaches(page_view.PageView);
  dart.setMethodSignature(page_view.PageView, () => ({
    __proto__: dart.getMethods(page_view.PageView.__proto__),
    createState: dart.fnType(framework.State$(page_view.PageView), [])
  }));
  dart.setLibraryUri(page_view.PageView, I[1]);
  dart.setFieldSignature(page_view.PageView, () => ({
    __proto__: dart.getFields(page_view.PageView.__proto__),
    allowImplicitScrolling: dart.finalFieldType(core.bool),
    restorationId: dart.finalFieldType(dart.nullable(core.String)),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    reverse: dart.finalFieldType(core.bool),
    controller: dart.finalFieldType(page_view.PageController),
    physics: dart.finalFieldType(dart.nullable(scroll_physics.ScrollPhysics)),
    pageSnapping: dart.finalFieldType(core.bool),
    onPageChanged: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [core.int]))),
    childrenDelegate: dart.finalFieldType(sliver.SliverChildDelegate),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    clipBehavior: dart.finalFieldType(ui.Clip),
    scrollBehavior: dart.finalFieldType(dart.nullable(scroll_configuration.ScrollBehavior)),
    padEnds: dart.finalFieldType(core.bool)
  }));
  var _lastReportedPage = dart.privateName(page_view, "_lastReportedPage");
  var _getDirection = dart.privateName(page_view, "_getDirection");
  page_view._PageViewState = class _PageViewState extends framework.State$(page_view.PageView) {
    initState() {
      super.initState();
      this[_lastReportedPage] = this.widget.controller.initialPage;
    }
    [_getDirection](context) {
      switch (this.widget.scrollDirection) {
        case C[7] || CT.C7:
        {
          if (!debug.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[0], 916, 16, "debugCheckHasDirectionality(context)");
          let textDirection = basic.Directionality.of(context);
          let axisDirection = basic_types.textDirectionToAxisDirection(textDirection);
          return this.widget.reverse ? basic_types.flipAxisDirection(axisDirection) : axisDirection;
        }
        case C[14] || CT.C14:
        {
          return this.widget.reverse ? basic_types.AxisDirection.up : basic_types.AxisDirection.down;
        }
      }
    }
    build(context) {
      let t1, t0, t1$, t0$, t0$0;
      let axisDirection = this[_getDirection](context);
      let physics = new page_view._ForceImplicitScrollPhysics.new({allowImplicitScrolling: this.widget.allowImplicitScrolling}).applyTo(this.widget.pageSnapping ? page_view._kPagePhysics.applyTo((t0 = this.widget.physics, t0 == null ? (t1 = this.widget.scrollBehavior, t1 == null ? null : t1.getScrollPhysics(context)) : t0)) : (t0$ = this.widget.physics, t0$ == null ? (t1$ = this.widget.scrollBehavior, t1$ == null ? null : t1$.getScrollPhysics(context)) : t0$));
      return new (T.NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => {
          if (notification.depth === 0 && this.widget.onPageChanged != null && scroll_notification.ScrollUpdateNotification.is(notification)) {
            let metrics = page_view.PageMetrics.as(notification.metrics);
            let currentPage = dart.nullCheck(metrics.page)[$round]();
            if (currentPage !== this[_lastReportedPage]) {
              this[_lastReportedPage] = currentPage;
              dart.nullCheck(this.widget.onPageChanged)(currentPage);
            }
          }
          return false;
        }, T.ScrollNotificationTobool()), child: new scrollable.Scrollable.new({dragStartBehavior: this.widget.dragStartBehavior, axisDirection: axisDirection, controller: this.widget.controller, physics: physics, restorationId: this.widget.restorationId, scrollBehavior: (t0$0 = this.widget.scrollBehavior, t0$0 == null ? scroll_configuration.ScrollConfiguration.of(context).copyWith({scrollbars: false}) : t0$0), viewportBuilder: dart.fn((context, position) => new viewport.Viewport.new({cacheExtent: this.widget.allowImplicitScrolling ? 1.0 : 0.0, cacheExtentStyle: viewport$.CacheExtentStyle.viewport, axisDirection: axisDirection, offset: position, clipBehavior: this.widget.clipBehavior, slivers: T.JSArrayOfWidget().of([new sliver_fill.SliverFillViewport.new({viewportFraction: this.widget.controller.viewportFraction, delegate: this.widget.childrenDelegate, padEnds: this.widget.padEnds, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15})]), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16}), T.BuildContextAndViewportOffsetToViewport()), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17}), $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T.EnumPropertyOfAxis()).new("scrollDirection", this.widget.scrollDirection));
      description.add(new diagnostics.FlagProperty.new("reverse", {value: this.widget.reverse, ifTrue: "reversed"}));
      description.add(new (T.DiagnosticsPropertyOfPageController()).new("controller", this.widget.controller, {showName: false}));
      description.add(new (T.DiagnosticsPropertyOfScrollPhysics()).new("physics", this.widget.physics, {showName: false}));
      description.add(new diagnostics.FlagProperty.new("pageSnapping", {value: this.widget.pageSnapping, ifFalse: "snapping disabled"}));
      description.add(new diagnostics.FlagProperty.new("allowImplicitScrolling", {value: this.widget.allowImplicitScrolling, ifTrue: "allow implicit scrolling"}));
    }
    static ['_#new#tearOff']() {
      return new page_view._PageViewState.new();
    }
  };
  (page_view._PageViewState.new = function() {
    this[_lastReportedPage] = 0;
    page_view._PageViewState.__proto__.new.call(this);
    ;
  }).prototype = page_view._PageViewState.prototype;
  dart.addTypeTests(page_view._PageViewState);
  dart.addTypeCaches(page_view._PageViewState);
  dart.setMethodSignature(page_view._PageViewState, () => ({
    __proto__: dart.getMethods(page_view._PageViewState.__proto__),
    [_getDirection]: dart.fnType(basic_types.AxisDirection, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(page_view._PageViewState, I[1]);
  dart.setFieldSignature(page_view._PageViewState, () => ({
    __proto__: dart.getFields(page_view._PageViewState.__proto__),
    [_lastReportedPage]: dart.fieldType(core.int)
  }));
  var ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  dart.defineLazy(page_view, {
    /*page_view._defaultPageController*/get _defaultPageController() {
      return new page_view.PageController.new();
    },
    /*page_view._kPagePhysics*/get _kPagePhysics() {
      return C[19] || CT.C19;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/widgets/page_view.dart", {
    "package:flutter/src/widgets/page_view.dart": page_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["page_view.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/page_view.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__page_view: page_view
  };
}));

//# sourceMappingURL=page_view.dart.lib.js.map
