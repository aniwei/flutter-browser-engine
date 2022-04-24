define(['dart_sdk', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/gestures/monodrag.dart', 'packages/flutter/src/rendering/stack.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/widgets/implicit_animations.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/cupertino/text_theme.dart', 'packages/flutter/src/cupertino/interface_level.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/cupertino/debug.dart'], (function load__packages__flutter__src__cupertino__route_dart(dart_sdk, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__gestures__monodrag$46dart, packages__flutter__src__rendering__stack$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__widgets__implicit_animations$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__cupertino__text_theme$46dart, packages__flutter__src__cupertino__interface_level$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__cupertino__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const animation$ = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const pages = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__pages;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__navigator;
  const debug = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__debug;
  const transitions = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__transitions;
  const media_query = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__media_query;
  const routes = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__routes;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const monodrag = packages__flutter__src__gestures__monodrag$46dart.src__gestures__monodrag;
  const stack = packages__flutter__src__rendering__stack$46dart.src__rendering__stack;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const implicit_animations = packages__flutter__src__widgets__implicit_animations$46dart.src__widgets__implicit_animations;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const colors = packages__flutter__src__cupertino__text_theme$46dart.src__cupertino__colors;
  const interface_level = packages__flutter__src__cupertino__interface_level$46dart.src__cupertino__interface_level;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const localizations = packages__flutter__src__cupertino__debug$46dart.src__cupertino__localizations;
  var route$ = Object.create(dart.library);
  var $abs = dartx.abs;
  var $floor = dartx.floor;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  var $truncate = dartx.truncate;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    ValueNotifierOfStringN: () => (T$.ValueNotifierOfStringN = dart.constFn(change_notifier.ValueNotifier$(T$.StringN())))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfWidget: () => (T$.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    AnimationStatusTovoid: () => (T$.AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation$.AnimationStatus])))(),
    VoidToFn: () => (T$.VoidToFn = dart.constFn(dart.fnType(T$.AnimationStatusTovoid(), [])))(),
    FnTodynamic: () => (T$.FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.AnimationStatusTovoid()])))(),
    ColorToColor: () => (T$.ColorToColor = dart.constFn(dart.fnType(ui.Color, [ui.Color])))(),
    JSArrayOfColor: () => (T$.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    IterablePropertyOfColor: () => (T$.IterablePropertyOfColor = dart.constFn(diagnostics.IterableProperty$(ui.Color)))(),
    TweenOfOffset: () => (T$.TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))(),
    AnimationOfdouble: () => (T$.AnimationOfdouble = dart.constFn(animation$.Animation$(core.double)))(),
    BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget: () => (T$.BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T$.AnimationOfdouble(), T$.AnimationOfdouble(), framework.Widget])))(),
    BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget: () => (T$.BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T$.AnimationOfdouble(), T$.AnimationOfdouble()])))(),
    TweenOfdouble: () => (T$.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 400000
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 27,
        [_Location_line]: 208,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoFullscreenDialogTransition",
        [_Location_column]: 14,
        [_Location_line]: 265,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoBackGestureDetector",
        [_Location_column]: 16,
        [_Location_line]: 276,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoPageTransition",
        [_Location_column]: 14,
        [_Location_line]: 272,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoPageTransition",
        [_Location_column]: 3,
        [_Location_line]: 441,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DecoratedBoxTransition",
        [_Location_column]: 16,
        [_Location_line]: 502,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SlideTransition",
        [_Location_column]: 14,
        [_Location_line]: 499,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SlideTransition",
        [_Location_column]: 12,
        [_Location_line]: 495,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoFullscreenDialogTransition",
        [_Location_column]: 3,
        [_Location_line]: 524,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SlideTransition",
        [_Location_column]: 14,
        [_Location_line]: 563,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SlideTransition",
        [_Location_column]: 12,
        [_Location_line]: 559,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_CupertinoBackGestureDetector",
        [_Location_column]: 9,
        [_Location_line]: 583,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Listener",
        [_Location_column]: 18,
        [_Location_line]: 683,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PositionedDirectional",
        [_Location_column]: 9,
        [_Location_line]: 678,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Stack",
        [_Location_column]: 12,
        [_Location_line]: 674,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.04,
        [Cubic_b]: 1,
        [Cubic_a]: 0.18
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: route$._CupertinoEdgeShadowDecoration.prototype,
        [_colors$]: null
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 939524096
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 301989888
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 67108864
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C21() {
      return C[21] = dart.constList([C[22] || CT.C22, C[23] || CT.C23, C[24] || CT.C24, C[25] || CT.C25], ui.Color);
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: route$._CupertinoEdgeShadowDecoration.prototype,
        [_colors$]: C[21] || CT.C21
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2046820352
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 855638016
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: colors.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[27] || CT.C27,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[28] || CT.C28,
        [CupertinoDynamicColor_darkElevatedColor]: C[27] || CT.C27,
        [CupertinoDynamicColor_elevatedColor]: C[28] || CT.C28,
        [CupertinoDynamicColor_darkHighContrastColor]: C[27] || CT.C27,
        [CupertinoDynamicColor_highContrastColor]: C[28] || CT.C28,
        [CupertinoDynamicColor_darkColor]: C[27] || CT.C27,
        [CupertinoDynamicColor_color]: C[28] || CT.C28,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C[28] || CT.C28
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Builder",
        [_Location_column]: 14,
        [_Location_line]: 1070,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoUserInterfaceLevel",
        [_Location_column]: 12,
        [_Location_line]: 1068,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FractionalTranslation",
        [_Location_column]: 14,
        [_Location_line]: 1078,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 12,
        [_Location_line]: 1076,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 250000
      });
    },
    get C35() {
      return C[35] = dart.fn(route$._buildCupertinoDialogTransitions, T$.BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget());
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeTransition",
        [_Location_column]: 12,
        [_Location_line]: 1181,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ScaleTransition",
        [_Location_column]: 12,
        [_Location_line]: 1188,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeTransition",
        [_Location_column]: 10,
        [_Location_line]: 1186,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 335000
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: -0.3333333333333333
      });
    }
  }, false);
  var C = Array(42).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/route.dart",
    "package:flutter/src/cupertino/route.dart"
  ];
  var _previousTitle = dart.privateName(route$, "CupertinoRouteTransitionMixin._previousTitle");
  var _previousTitle$ = dart.privateName(route$, "_previousTitle");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  const _is_CupertinoRouteTransitionMixin_default = Symbol('_is_CupertinoRouteTransitionMixin_default');
  route$.CupertinoRouteTransitionMixin$ = dart.generic(T => {
    class CupertinoRouteTransitionMixin extends pages.PageRoute$(T) {
      static isPopGestureInProgress(route) {
        return dart.nullCheck(route.navigator).userGestureInProgress;
      }
      static _isPopGestureEnabled(T, route) {
        if (route.isFirst) return false;
        if (route.willHandlePopInternally) return false;
        if (route.hasScopedWillPopCallback) return false;
        if (route.fullscreenDialog) return false;
        if (dart.nullCheck(route.animation).status !== animation$.AnimationStatus.completed) return false;
        if (dart.nullCheck(route.secondaryAnimation).status !== animation$.AnimationStatus.dismissed) return false;
        if (route$.CupertinoRouteTransitionMixin.isPopGestureInProgress(route)) return false;
        return true;
      }
      static _startPopGesture(T, route) {
        if (!route$.CupertinoRouteTransitionMixin._isPopGestureEnabled(T, route)) dart.assertFailed(null, I[0], 229, 12, "_isPopGestureEnabled(route)");
        return new (route$._CupertinoBackGestureController$(T)).new({navigator: dart.nullCheck(route.navigator), controller: dart.nullCheck(route.controller)});
      }
      static buildPageTransitions(T, route, context, animation, secondaryAnimation, child) {
        let linearTransition = route$.CupertinoRouteTransitionMixin.isPopGestureInProgress(route);
        if (route.fullscreenDialog) {
          return new route$.CupertinoFullscreenDialogTransition.new({primaryRouteAnimation: animation, secondaryRouteAnimation: secondaryAnimation, linearTransition: linearTransition, child: child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
        } else {
          return new route$.CupertinoPageTransition.new({primaryRouteAnimation: animation, secondaryRouteAnimation: secondaryAnimation, linearTransition: linearTransition, child: new (route$._CupertinoBackGestureDetector$(T)).new({enabledCallback: dart.fn(() => route$.CupertinoRouteTransitionMixin._isPopGestureEnabled(T, route), T$.VoidTobool()), onStartPopGesture: dart.fn(() => route$.CupertinoRouteTransitionMixin._startPopGesture(T, route), dart.fnType(route$._CupertinoBackGestureController$(T), [])), child: child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
        }
      }
    }
    CupertinoRouteTransitionMixin[dart.mixinOn] = PageRoute => class CupertinoRouteTransitionMixin extends PageRoute {
      get [_previousTitle$]() {
        return this[_previousTitle];
      }
      set [_previousTitle$](value) {
        this[_previousTitle] = value;
      }
      get previousTitle() {
        if (!(this[_previousTitle$] != null)) dart.assertFailed("Cannot read the previousTitle for a route that has not yet been installed", I[0], 105, 7, "_previousTitle != null");
        return dart.nullCheck(this[_previousTitle$]);
      }
      didChangePrevious(previousRoute) {
        let previousTitleString = route$.CupertinoRouteTransitionMixin.is(previousRoute) ? previousRoute.title : null;
        if (this[_previousTitle$] == null) {
          this[_previousTitle$] = new (T$.ValueNotifierOfStringN()).new(previousTitleString);
        } else {
          dart.nullCheck(this[_previousTitle$]).value = previousTitleString;
        }
        super.didChangePrevious(previousRoute);
      }
      get transitionDuration() {
        return C[0] || CT.C0;
      }
      get barrierColor() {
        return null;
      }
      get barrierLabel() {
        return null;
      }
      canTransitionTo(nextRoute) {
        return route$.CupertinoRouteTransitionMixin.is(nextRoute) && !nextRoute.fullscreenDialog;
      }
      get popGestureInProgress() {
        return route$.CupertinoRouteTransitionMixin.isPopGestureInProgress(this);
      }
      get popGestureEnabled() {
        return route$.CupertinoRouteTransitionMixin._isPopGestureEnabled(T, this);
      }
      buildPage(context, animation, secondaryAnimation) {
        let child = this.buildContent(context);
        let result = new basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
        if (!dart.fn(() => {
          if (child === null) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The builder for route \"" + dart.str(this.settings.name) + "\" returned null."), new assertions.ErrorDescription.new("Route builders must never return null.")])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 213, 12, "() {\n      if (child == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The builder for route \"${settings.name}\" returned null.'),\n          ErrorDescription('Route builders must never return null.'),\n        ]);\n      }\n      return true;\n    }()");
        return result;
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        return route$.CupertinoRouteTransitionMixin.buildPageTransitions(T, this, context, animation, secondaryAnimation, child);
      }
    };
    (CupertinoRouteTransitionMixin[dart.mixinNew] = function() {
      this[_previousTitle] = null;
    }).prototype = CupertinoRouteTransitionMixin.prototype;
    dart.addTypeTests(CupertinoRouteTransitionMixin);
    CupertinoRouteTransitionMixin.prototype[_is_CupertinoRouteTransitionMixin_default] = true;
    dart.addTypeCaches(CupertinoRouteTransitionMixin);
    CupertinoRouteTransitionMixin[dart.implements] = () => [pages.PageRoute$(T)];
    dart.setMethodSignature(CupertinoRouteTransitionMixin, () => ({
      __proto__: dart.getMethods(CupertinoRouteTransitionMixin.__proto__),
      buildPage: dart.fnType(framework.Widget, [framework.BuildContext, animation$.Animation$(core.double), animation$.Animation$(core.double)])
    }));
    dart.setStaticMethodSignature(CupertinoRouteTransitionMixin, () => ['isPopGestureInProgress', '_isPopGestureEnabled', '_startPopGesture', 'buildPageTransitions']);
    dart.setGetterSignature(CupertinoRouteTransitionMixin, () => ({
      __proto__: dart.getGetters(CupertinoRouteTransitionMixin.__proto__),
      previousTitle: change_notifier.ValueListenable$(dart.nullable(core.String)),
      transitionDuration: core.Duration,
      barrierColor: dart.nullable(ui.Color),
      barrierLabel: dart.nullable(core.String),
      popGestureInProgress: core.bool,
      popGestureEnabled: core.bool
    }));
    dart.setLibraryUri(CupertinoRouteTransitionMixin, I[1]);
    dart.setFieldSignature(CupertinoRouteTransitionMixin, () => ({
      __proto__: dart.getFields(CupertinoRouteTransitionMixin.__proto__),
      [_previousTitle$]: dart.fieldType(dart.nullable(change_notifier.ValueNotifier$(dart.nullable(core.String))))
    }));
    return CupertinoRouteTransitionMixin;
  });
  route$.CupertinoRouteTransitionMixin = route$.CupertinoRouteTransitionMixin$();
  dart.addTypeTests(route$.CupertinoRouteTransitionMixin, _is_CupertinoRouteTransitionMixin_default);
  var builder$ = dart.privateName(route$, "CupertinoPageRoute.builder");
  var title$ = dart.privateName(route$, "CupertinoPageRoute.title");
  var maintainState$ = dart.privateName(route$, "CupertinoPageRoute.maintainState");
  const _is_CupertinoPageRoute_default = Symbol('_is_CupertinoPageRoute_default');
  route$.CupertinoPageRoute$ = dart.generic(T => {
    const PageRoute_CupertinoRouteTransitionMixin$36 = class PageRoute_CupertinoRouteTransitionMixin extends pages.PageRoute$(T) {};
    (PageRoute_CupertinoRouteTransitionMixin$36.new = function(opts) {
      route$.CupertinoRouteTransitionMixin$(T)[dart.mixinNew].call(this);
      PageRoute_CupertinoRouteTransitionMixin$36.__proto__.new.call(this, opts);
    }).prototype = PageRoute_CupertinoRouteTransitionMixin$36.prototype;
    dart.applyMixin(PageRoute_CupertinoRouteTransitionMixin$36, route$.CupertinoRouteTransitionMixin$(T));
    class CupertinoPageRoute extends PageRoute_CupertinoRouteTransitionMixin$36 {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get title() {
        return this[title$];
      }
      set title(value) {
        super.title = value;
      }
      get maintainState() {
        return this[maintainState$];
      }
      set maintainState(value) {
        super.maintainState = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let title = opts && 'title' in opts ? opts.title : null;
        let settings = opts && 'settings' in opts ? opts.settings : null;
        let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
        let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
        return new (route$.CupertinoPageRoute$(T)).new({builder: builder, title: title, settings: settings, maintainState: maintainState, fullscreenDialog: fullscreenDialog});
      }
      buildContent(context) {
        let t0;
        t0 = context;
        return this.builder(t0);
      }
      get debugLabel() {
        return super.debugLabel + "(" + dart.str(this.settings.name) + ")";
      }
    }
    (CupertinoPageRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
      let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
      this[builder$] = builder;
      this[title$] = title;
      this[maintainState$] = maintainState;
      if (!(builder !== null)) dart.assertFailed(null, I[0], 325, 15, "builder != null");
      if (!(maintainState !== null)) dart.assertFailed(null, I[0], 326, 15, "maintainState != null");
      if (!(fullscreenDialog !== null)) dart.assertFailed(null, I[0], 327, 15, "fullscreenDialog != null");
      CupertinoPageRoute.__proto__.new.call(this, {settings: settings, fullscreenDialog: fullscreenDialog});
      if (!this.opaque) dart.assertFailed(null, I[0], 329, 12, "opaque");
    }).prototype = CupertinoPageRoute.prototype;
    dart.addTypeTests(CupertinoPageRoute);
    CupertinoPageRoute.prototype[_is_CupertinoPageRoute_default] = true;
    dart.addTypeCaches(CupertinoPageRoute);
    dart.setMethodSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getMethods(CupertinoPageRoute.__proto__),
      buildContent: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(CupertinoPageRoute, I[1]);
    dart.setFieldSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getFields(CupertinoPageRoute.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
      title: dart.finalFieldType(dart.nullable(core.String)),
      maintainState: dart.finalFieldType(core.bool)
    }));
    return CupertinoPageRoute;
  });
  route$.CupertinoPageRoute = route$.CupertinoPageRoute$();
  dart.addTypeTests(route$.CupertinoPageRoute, _is_CupertinoPageRoute_default);
  var _page = dart.privateName(route$, "_page");
  const _is__PageBasedCupertinoPageRoute_default = Symbol('_is__PageBasedCupertinoPageRoute_default');
  route$._PageBasedCupertinoPageRoute$ = dart.generic(T => {
    var __t$CupertinoPageOfT = () => (__t$CupertinoPageOfT = dart.constFn(route$.CupertinoPage$(T)))();
    const PageRoute_CupertinoRouteTransitionMixin$36 = class PageRoute_CupertinoRouteTransitionMixin extends pages.PageRoute$(T) {};
    (PageRoute_CupertinoRouteTransitionMixin$36.new = function(opts) {
      route$.CupertinoRouteTransitionMixin$(T)[dart.mixinNew].call(this);
      PageRoute_CupertinoRouteTransitionMixin$36.__proto__.new.call(this, opts);
    }).prototype = PageRoute_CupertinoRouteTransitionMixin$36.prototype;
    dart.applyMixin(PageRoute_CupertinoRouteTransitionMixin$36, route$.CupertinoRouteTransitionMixin$(T));
    class _PageBasedCupertinoPageRoute extends PageRoute_CupertinoRouteTransitionMixin$36 {
      static ['_#new#tearOff'](T, opts) {
        let page = opts && 'page' in opts ? opts.page : null;
        return new (route$._PageBasedCupertinoPageRoute$(T)).new({page: page});
      }
      get [_page]() {
        return __t$CupertinoPageOfT().as(this.settings);
      }
      buildContent(context) {
        return this[_page].child;
      }
      get title() {
        return this[_page].title;
      }
      get maintainState() {
        return this[_page].maintainState;
      }
      get fullscreenDialog() {
        return this[_page].fullscreenDialog;
      }
      get debugLabel() {
        return super.debugLabel + "(" + dart.str(this[_page].name) + ")";
      }
    }
    (_PageBasedCupertinoPageRoute.new = function(opts) {
      let page = opts && 'page' in opts ? opts.page : null;
      if (!(page !== null)) dart.assertFailed(null, I[0], 355, 15, "page != null");
      _PageBasedCupertinoPageRoute.__proto__.new.call(this, {settings: page});
      if (!this.opaque) dart.assertFailed(null, I[0], 357, 12, "opaque");
    }).prototype = _PageBasedCupertinoPageRoute.prototype;
    dart.addTypeTests(_PageBasedCupertinoPageRoute);
    _PageBasedCupertinoPageRoute.prototype[_is__PageBasedCupertinoPageRoute_default] = true;
    dart.addTypeCaches(_PageBasedCupertinoPageRoute);
    dart.setMethodSignature(_PageBasedCupertinoPageRoute, () => ({
      __proto__: dart.getMethods(_PageBasedCupertinoPageRoute.__proto__),
      buildContent: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setGetterSignature(_PageBasedCupertinoPageRoute, () => ({
      __proto__: dart.getGetters(_PageBasedCupertinoPageRoute.__proto__),
      [_page]: route$.CupertinoPage$(T),
      title: dart.nullable(core.String),
      maintainState: core.bool,
      fullscreenDialog: core.bool
    }));
    dart.setLibraryUri(_PageBasedCupertinoPageRoute, I[1]);
    return _PageBasedCupertinoPageRoute;
  });
  route$._PageBasedCupertinoPageRoute = route$._PageBasedCupertinoPageRoute$();
  dart.addTypeTests(route$._PageBasedCupertinoPageRoute, _is__PageBasedCupertinoPageRoute_default);
  var child$ = dart.privateName(route$, "CupertinoPage.child");
  var title$0 = dart.privateName(route$, "CupertinoPage.title");
  var maintainState$0 = dart.privateName(route$, "CupertinoPage.maintainState");
  var fullscreenDialog$ = dart.privateName(route$, "CupertinoPage.fullscreenDialog");
  const _is_CupertinoPage_default = Symbol('_is_CupertinoPage_default');
  route$.CupertinoPage$ = dart.generic(T => {
    var __t$_PageBasedCupertinoPageRouteOfT = () => (__t$_PageBasedCupertinoPageRouteOfT = dart.constFn(route$._PageBasedCupertinoPageRoute$(T)))();
    class CupertinoPage extends navigator.Page$(T) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get title() {
        return this[title$0];
      }
      set title(value) {
        super.title = value;
      }
      get maintainState() {
        return this[maintainState$0];
      }
      set maintainState(value) {
        super.maintainState = value;
      }
      get fullscreenDialog() {
        return this[fullscreenDialog$];
      }
      set fullscreenDialog(value) {
        super.fullscreenDialog = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let child = opts && 'child' in opts ? opts.child : null;
        let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
        let title = opts && 'title' in opts ? opts.title : null;
        let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
        let key = opts && 'key' in opts ? opts.key : null;
        let name = opts && 'name' in opts ? opts.name : null;
        let $arguments = opts && 'arguments' in opts ? opts.arguments : null;
        let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
        return new (route$.CupertinoPage$(T)).new({child: child, maintainState: maintainState, title: title, fullscreenDialog: fullscreenDialog, key: key, name: name, arguments: $arguments, restorationId: restorationId});
      }
      createRoute(context) {
        return new (__t$_PageBasedCupertinoPageRouteOfT()).new({page: this});
      }
    }
    (CupertinoPage.new = function(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
      let title = opts && 'title' in opts ? opts.title : null;
      let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
      let key = opts && 'key' in opts ? opts.key : null;
      let name = opts && 'name' in opts ? opts.name : null;
      let $arguments = opts && 'arguments' in opts ? opts.arguments : null;
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      this[child$] = child;
      this[maintainState$0] = maintainState;
      this[title$0] = title;
      this[fullscreenDialog$] = fullscreenDialog;
      if (!(child !== null)) dart.assertFailed(null, I[0], 405, 15, "child != null");
      if (!(maintainState !== null)) dart.assertFailed(null, I[0], 406, 15, "maintainState != null");
      if (!(fullscreenDialog !== null)) dart.assertFailed(null, I[0], 407, 15, "fullscreenDialog != null");
      CupertinoPage.__proto__.new.call(this, {key: key, name: name, arguments: $arguments, restorationId: restorationId});
      ;
    }).prototype = CupertinoPage.prototype;
    dart.addTypeTests(CupertinoPage);
    CupertinoPage.prototype[_is_CupertinoPage_default] = true;
    dart.addTypeCaches(CupertinoPage);
    dart.setMethodSignature(CupertinoPage, () => ({
      __proto__: dart.getMethods(CupertinoPage.__proto__),
      createRoute: dart.fnType(navigator.Route$(T), [framework.BuildContext])
    }));
    dart.setLibraryUri(CupertinoPage, I[1]);
    dart.setFieldSignature(CupertinoPage, () => ({
      __proto__: dart.getFields(CupertinoPage.__proto__),
      child: dart.finalFieldType(framework.Widget),
      title: dart.finalFieldType(dart.nullable(core.String)),
      maintainState: dart.finalFieldType(core.bool),
      fullscreenDialog: dart.finalFieldType(core.bool)
    }));
    return CupertinoPage;
  });
  route$.CupertinoPage = route$.CupertinoPage$();
  dart.addTypeTests(route$.CupertinoPage, _is_CupertinoPage_default);
  var child$0 = dart.privateName(route$, "CupertinoPageTransition.child");
  var _primaryPositionAnimation = dart.privateName(route$, "_primaryPositionAnimation");
  var _secondaryPositionAnimation = dart.privateName(route$, "_secondaryPositionAnimation");
  var _primaryShadowAnimation = dart.privateName(route$, "_primaryShadowAnimation");
  route$.CupertinoPageTransition = class CupertinoPageTransition extends framework.StatelessWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
      let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
      return new route$.CupertinoPageTransition.new({key: key, primaryRouteAnimation: primaryRouteAnimation, secondaryRouteAnimation: secondaryRouteAnimation, child: child, linearTransition: linearTransition, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    build(context) {
      if (!debug.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[0], 493, 12, "debugCheckHasDirectionality(context)");
      let textDirection = basic.Directionality.of(context);
      return new transitions.SlideTransition.new({position: this[_secondaryPositionAnimation], textDirection: textDirection, transformHitTests: false, child: new transitions.SlideTransition.new({position: this[_primaryPositionAnimation], textDirection: textDirection, child: new transitions.DecoratedBoxTransition.new({decoration: this[_primaryShadowAnimation], child: this.child, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}), $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
  };
  (route$.CupertinoPageTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
    let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$0] = child;
    if (!(linearTransition !== null)) dart.assertFailed(null, I[0], 447, 15, "linearTransition != null");
    this[_primaryPositionAnimation] = (linearTransition ? primaryRouteAnimation : new animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.easeInToLinear})).drive(ui.Offset, route$._kRightMiddleTween);
    this[_secondaryPositionAnimation] = (linearTransition ? secondaryRouteAnimation : new animations.CurvedAnimation.new({parent: secondaryRouteAnimation, curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.easeInToLinear})).drive(ui.Offset, route$._kMiddleLeftTween);
    this[_primaryShadowAnimation] = (linearTransition ? primaryRouteAnimation : new animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: curves.Curves.linearToEaseOut})).drive(decoration.Decoration, route$._CupertinoEdgeShadowDecoration.kTween);
    route$.CupertinoPageTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = route$.CupertinoPageTransition.prototype;
  dart.addTypeTests(route$.CupertinoPageTransition);
  dart.addTypeCaches(route$.CupertinoPageTransition);
  dart.setMethodSignature(route$.CupertinoPageTransition, () => ({
    __proto__: dart.getMethods(route$.CupertinoPageTransition.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(route$.CupertinoPageTransition, I[1]);
  dart.setFieldSignature(route$.CupertinoPageTransition, () => ({
    __proto__: dart.getFields(route$.CupertinoPageTransition.__proto__),
    [_primaryPositionAnimation]: dart.finalFieldType(animation$.Animation$(ui.Offset)),
    [_secondaryPositionAnimation]: dart.finalFieldType(animation$.Animation$(ui.Offset)),
    [_primaryShadowAnimation]: dart.finalFieldType(animation$.Animation$(decoration.Decoration)),
    child: dart.finalFieldType(framework.Widget)
  }));
  var child$1 = dart.privateName(route$, "CupertinoFullscreenDialogTransition.child");
  var _positionAnimation = dart.privateName(route$, "_positionAnimation");
  route$.CupertinoFullscreenDialogTransition = class CupertinoFullscreenDialogTransition extends framework.StatelessWidget {
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
      let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
      return new route$.CupertinoFullscreenDialogTransition.new({key: key, primaryRouteAnimation: primaryRouteAnimation, secondaryRouteAnimation: secondaryRouteAnimation, child: child, linearTransition: linearTransition, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    build(context) {
      if (!debug.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[0], 557, 12, "debugCheckHasDirectionality(context)");
      let textDirection = basic.Directionality.of(context);
      return new transitions.SlideTransition.new({position: this[_secondaryPositionAnimation], textDirection: textDirection, transformHitTests: false, child: new transitions.SlideTransition.new({position: this[_positionAnimation], child: this.child, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10}), $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
  };
  (route$.CupertinoFullscreenDialogTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
    let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$1] = child;
    this[_positionAnimation] = new animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.linearToEaseOut.flipped}).drive(ui.Offset, route$._kBottomUpTween);
    this[_secondaryPositionAnimation] = (linearTransition ? secondaryRouteAnimation : new animations.CurvedAnimation.new({parent: secondaryRouteAnimation, curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.easeInToLinear})).drive(ui.Offset, route$._kMiddleLeftTween);
    route$.CupertinoFullscreenDialogTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = route$.CupertinoFullscreenDialogTransition.prototype;
  dart.addTypeTests(route$.CupertinoFullscreenDialogTransition);
  dart.addTypeCaches(route$.CupertinoFullscreenDialogTransition);
  dart.setMethodSignature(route$.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getMethods(route$.CupertinoFullscreenDialogTransition.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(route$.CupertinoFullscreenDialogTransition, I[1]);
  dart.setFieldSignature(route$.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getFields(route$.CupertinoFullscreenDialogTransition.__proto__),
    [_positionAnimation]: dart.finalFieldType(animation$.Animation$(ui.Offset)),
    [_secondaryPositionAnimation]: dart.finalFieldType(animation$.Animation$(ui.Offset)),
    child: dart.finalFieldType(framework.Widget)
  }));
  var child$2 = dart.privateName(route$, "_CupertinoBackGestureDetector.child");
  var enabledCallback$ = dart.privateName(route$, "_CupertinoBackGestureDetector.enabledCallback");
  var onStartPopGesture$ = dart.privateName(route$, "_CupertinoBackGestureDetector.onStartPopGesture");
  const _is__CupertinoBackGestureDetector_default = Symbol('_is__CupertinoBackGestureDetector_default');
  route$._CupertinoBackGestureDetector$ = dart.generic(T => {
    var __t$_CupertinoBackGestureDetectorStateOfT = () => (__t$_CupertinoBackGestureDetectorStateOfT = dart.constFn(route$._CupertinoBackGestureDetectorState$(T)))();
    class _CupertinoBackGestureDetector extends framework.StatefulWidget {
      get child() {
        return this[child$2];
      }
      set child(value) {
        super.child = value;
      }
      get enabledCallback() {
        return this[enabledCallback$];
      }
      set enabledCallback(value) {
        super.enabledCallback = value;
      }
      get onStartPopGesture() {
        return this[onStartPopGesture$];
      }
      set onStartPopGesture(value) {
        super.onStartPopGesture = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let enabledCallback = opts && 'enabledCallback' in opts ? opts.enabledCallback : null;
        let onStartPopGesture = opts && 'onStartPopGesture' in opts ? opts.onStartPopGesture : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (route$._CupertinoBackGestureDetector$(T)).new({key: key, enabledCallback: enabledCallback, onStartPopGesture: onStartPopGesture, child: child, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
      }
      createState() {
        return new (__t$_CupertinoBackGestureDetectorStateOfT()).new();
      }
    }
    (_CupertinoBackGestureDetector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let enabledCallback = opts && 'enabledCallback' in opts ? opts.enabledCallback : null;
      let onStartPopGesture = opts && 'onStartPopGesture' in opts ? opts.onStartPopGesture : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[enabledCallback$] = enabledCallback;
      this[onStartPopGesture$] = onStartPopGesture;
      this[child$2] = child;
      if (!(enabledCallback !== null)) dart.assertFailed(null, I[0], 588, 15, "enabledCallback != null");
      if (!(onStartPopGesture !== null)) dart.assertFailed(null, I[0], 589, 15, "onStartPopGesture != null");
      if (!(child !== null)) dart.assertFailed(null, I[0], 590, 15, "child != null");
      _CupertinoBackGestureDetector.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _CupertinoBackGestureDetector.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetector);
    _CupertinoBackGestureDetector.prototype[_is__CupertinoBackGestureDetector_default] = true;
    dart.addTypeCaches(_CupertinoBackGestureDetector);
    dart.setMethodSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetector.__proto__),
      createState: dart.fnType(route$._CupertinoBackGestureDetectorState$(T), [])
    }));
    dart.setLibraryUri(_CupertinoBackGestureDetector, I[1]);
    dart.setFieldSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetector.__proto__),
      child: dart.finalFieldType(framework.Widget),
      enabledCallback: dart.finalFieldType(dart.fnType(core.bool, [])),
      onStartPopGesture: dart.finalFieldType(dart.fnType(route$._CupertinoBackGestureController$(T), []))
    }));
    return _CupertinoBackGestureDetector;
  });
  route$._CupertinoBackGestureDetector = route$._CupertinoBackGestureDetector$();
  dart.addTypeTests(route$._CupertinoBackGestureDetector, _is__CupertinoBackGestureDetector_default);
  var _backGestureController = dart.privateName(route$, "_backGestureController");
  var ___CupertinoBackGestureDetectorState__recognizer = dart.privateName(route$, "_#_CupertinoBackGestureDetectorState#_recognizer");
  var _recognizer = dart.privateName(route$, "_recognizer");
  var _handleDragStart = dart.privateName(route$, "_handleDragStart");
  var _handleDragUpdate = dart.privateName(route$, "_handleDragUpdate");
  var _handleDragEnd = dart.privateName(route$, "_handleDragEnd");
  var _handleDragCancel = dart.privateName(route$, "_handleDragCancel");
  var _convertToLogical = dart.privateName(route$, "_convertToLogical");
  var _handlePointerDown = dart.privateName(route$, "_handlePointerDown");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  const _is__CupertinoBackGestureDetectorState_default = Symbol('_is__CupertinoBackGestureDetectorState_default');
  route$._CupertinoBackGestureDetectorState$ = dart.generic(T => {
    class _CupertinoBackGestureDetectorState extends framework.State$(route$._CupertinoBackGestureDetector$(T)) {
      get [_recognizer]() {
        let t0;
        t0 = this[___CupertinoBackGestureDetectorState__recognizer];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_recognizer")) : t0;
      }
      set [_recognizer](t0) {
        this[___CupertinoBackGestureDetectorState__recognizer] = t0;
      }
      initState() {
        let t1;
        super.initState();
        this[_recognizer] = (t1 = new monodrag.HorizontalDragGestureRecognizer.new({debugOwner: this}), (() => {
          t1.onStart = dart.bind(this, _handleDragStart);
          t1.onUpdate = dart.bind(this, _handleDragUpdate);
          t1.onEnd = dart.bind(this, _handleDragEnd);
          t1.onCancel = dart.bind(this, _handleDragCancel);
          return t1;
        })());
      }
      dispose() {
        this[_recognizer].dispose();
        super.dispose();
      }
      [_handleDragStart](details) {
        if (!this.mounted) dart.assertFailed(null, I[0], 625, 12, "mounted");
        if (!(this[_backGestureController] == null)) dart.assertFailed(null, I[0], 626, 12, "_backGestureController == null");
        this[_backGestureController] = this.widget.onStartPopGesture();
      }
      [_handleDragUpdate](details) {
        if (!this.mounted) dart.assertFailed(null, I[0], 631, 12, "mounted");
        if (!(this[_backGestureController] != null)) dart.assertFailed(null, I[0], 632, 12, "_backGestureController != null");
        dart.nullCheck(this[_backGestureController]).dragUpdate(this[_convertToLogical](dart.nullCheck(details.primaryDelta) / dart.nullCheck(this.context.size).width));
      }
      [_handleDragEnd](details) {
        if (!this.mounted) dart.assertFailed(null, I[0], 637, 12, "mounted");
        if (!(this[_backGestureController] != null)) dart.assertFailed(null, I[0], 638, 12, "_backGestureController != null");
        dart.nullCheck(this[_backGestureController]).dragEnd(this[_convertToLogical](details.velocity.pixelsPerSecond.dx / dart.nullCheck(this.context.size).width));
        this[_backGestureController] = null;
      }
      [_handleDragCancel]() {
        let t1;
        if (!this.mounted) dart.assertFailed(null, I[0], 644, 12, "mounted");
        t1 = this[_backGestureController];
        t1 == null ? null : t1.dragEnd(0.0);
        this[_backGestureController] = null;
      }
      [_handlePointerDown](event) {
        if (this.widget.enabledCallback()) this[_recognizer].addPointer(event);
      }
      [_convertToLogical](value) {
        switch (basic.Directionality.of(this.context)) {
          case C[13] || CT.C13:
          {
            return -value;
          }
          case C[14] || CT.C14:
          {
            return value;
          }
        }
      }
      build(context) {
        if (!debug.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[0], 667, 12, "debugCheckHasDirectionality(context)");
        let dragAreaWidth = basic.Directionality.of(context) === ui.TextDirection.ltr ? media_query.MediaQuery.of(context).padding.left : media_query.MediaQuery.of(context).padding.right;
        dragAreaWidth = math.max(core.double, dragAreaWidth, 20);
        return new basic.Stack.new({fit: stack.StackFit.passthrough, children: T$.JSArrayOfWidget().of([this.widget.child, new basic.PositionedDirectional.new({start: 0.0, width: dragAreaWidth, top: 0.0, bottom: 0.0, child: new basic.Listener.new({onPointerDown: dart.bind(this, _handlePointerDown), behavior: proxy_box.HitTestBehavior.translucent, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15}), $creationLocationd_0dea112b090073317d4: C[16] || CT.C16})]), $creationLocationd_0dea112b090073317d4: C[17] || CT.C17});
      }
      static ['_#new#tearOff'](T) {
        return new (route$._CupertinoBackGestureDetectorState$(T)).new();
      }
    }
    (_CupertinoBackGestureDetectorState.new = function() {
      this[_backGestureController] = null;
      this[___CupertinoBackGestureDetectorState__recognizer] = null;
      _CupertinoBackGestureDetectorState.__proto__.new.call(this);
      ;
    }).prototype = _CupertinoBackGestureDetectorState.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetectorState);
    _CupertinoBackGestureDetectorState.prototype[_is__CupertinoBackGestureDetectorState_default] = true;
    dart.addTypeCaches(_CupertinoBackGestureDetectorState);
    dart.setMethodSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetectorState.__proto__),
      [_handleDragStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
      [_handleDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
      [_handleDragEnd]: dart.fnType(dart.void, [drag_details.DragEndDetails]),
      [_handleDragCancel]: dart.fnType(dart.void, []),
      [_handlePointerDown]: dart.fnType(dart.void, [events.PointerDownEvent]),
      [_convertToLogical]: dart.fnType(core.double, [core.double]),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setGetterSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getGetters(_CupertinoBackGestureDetectorState.__proto__),
      [_recognizer]: monodrag.HorizontalDragGestureRecognizer
    }));
    dart.setSetterSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getSetters(_CupertinoBackGestureDetectorState.__proto__),
      [_recognizer]: monodrag.HorizontalDragGestureRecognizer
    }));
    dart.setLibraryUri(_CupertinoBackGestureDetectorState, I[1]);
    dart.setFieldSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetectorState.__proto__),
      [_backGestureController]: dart.fieldType(dart.nullable(route$._CupertinoBackGestureController$(T))),
      [___CupertinoBackGestureDetectorState__recognizer]: dart.fieldType(dart.nullable(monodrag.HorizontalDragGestureRecognizer))
    }));
    return _CupertinoBackGestureDetectorState;
  });
  route$._CupertinoBackGestureDetectorState = route$._CupertinoBackGestureDetectorState$();
  dart.addTypeTests(route$._CupertinoBackGestureDetectorState, _is__CupertinoBackGestureDetectorState_default);
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  const _is__CupertinoBackGestureController_default = Symbol('_is__CupertinoBackGestureController_default');
  route$._CupertinoBackGestureController$ = dart.generic(T => {
    class _CupertinoBackGestureController extends core.Object {
      static ['_#new#tearOff'](T, opts) {
        let navigator = opts && 'navigator' in opts ? opts.navigator : null;
        let controller = opts && 'controller' in opts ? opts.controller : null;
        return new (route$._CupertinoBackGestureController$(T)).new({navigator: navigator, controller: controller});
      }
      dragUpdate(delta) {
        let t1;
        t1 = this.controller;
        t1.value = t1.value - delta;
      }
      dragEnd(velocity) {
        let animationCurve = C[18] || CT.C18;
        let animateForward = null;
        if (velocity[$abs]() >= 1)
          animateForward = velocity <= 0;
        else
          animateForward = this.controller.value > 0.5;
        if (animateForward) {
          let droppedPageForwardAnimationTime = math.min(core.int, dart.nullCheck(ui.lerpDouble(800, 0, this.controller.value))[$floor](), 300);
          this.controller.animateTo(1.0, {duration: new core.Duration.new({milliseconds: droppedPageForwardAnimationTime}), curve: animationCurve});
        } else {
          this.navigator.pop(T$.ObjectN());
          if (this.controller.isAnimating) {
            let droppedPageBackAnimationTime = dart.nullCheck(ui.lerpDouble(0, 800, this.controller.value))[$floor]();
            this.controller.animateBack(0.0, {duration: new core.Duration.new({milliseconds: droppedPageBackAnimationTime}), curve: animationCurve});
          }
        }
        if (this.controller.isAnimating) {
          let animationStatusCallback = null;
          function animationStatusCallback$35get() {
            let t2;
            t2 = animationStatusCallback;
            return t2 == null ? dart.throw(new _internal.LateError.localNI("animationStatusCallback")) : t2;
          }
          dart.fn(animationStatusCallback$35get, T$.VoidToFn());
          function animationStatusCallback$35set(t3) {
            return animationStatusCallback = t3;
          }
          dart.fn(animationStatusCallback$35set, T$.FnTodynamic());
          animationStatusCallback$35set(dart.fn(status => {
            this.navigator.didStopUserGesture();
            this.controller.removeStatusListener(animationStatusCallback$35get());
          }, T$.AnimationStatusTovoid()));
          this.controller.addStatusListener(animationStatusCallback$35get());
        } else {
          this.navigator.didStopUserGesture();
        }
      }
    }
    (_CupertinoBackGestureController.new = function(opts) {
      let navigator = opts && 'navigator' in opts ? opts.navigator : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      this.navigator = navigator;
      this.controller = controller;
      if (!(navigator !== null)) dart.assertFailed(null, I[0], 712, 15, "navigator != null");
      if (!(controller !== null)) dart.assertFailed(null, I[0], 713, 15, "controller != null");
      this.navigator.didStartUserGesture();
    }).prototype = _CupertinoBackGestureController.prototype;
    dart.addTypeTests(_CupertinoBackGestureController);
    _CupertinoBackGestureController.prototype[_is__CupertinoBackGestureController_default] = true;
    dart.addTypeCaches(_CupertinoBackGestureController);
    dart.setMethodSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureController.__proto__),
      dragUpdate: dart.fnType(dart.void, [core.double]),
      dragEnd: dart.fnType(dart.void, [core.double])
    }));
    dart.setLibraryUri(_CupertinoBackGestureController, I[1]);
    dart.setFieldSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureController.__proto__),
      controller: dart.finalFieldType(animation_controller.AnimationController),
      navigator: dart.finalFieldType(navigator.NavigatorState)
    }));
    return _CupertinoBackGestureController;
  });
  route$._CupertinoBackGestureController = route$._CupertinoBackGestureController$();
  dart.addTypeTests(route$._CupertinoBackGestureController, _is__CupertinoBackGestureController_default);
  var _colors$ = dart.privateName(route$, "_CupertinoEdgeShadowDecoration._colors");
  var _colors = dart.privateName(route$, "_colors");
  var Color_value = dart.privateName(ui, "Color.value");
  route$._CupertinoEdgeShadowDecoration = class _CupertinoEdgeShadowDecoration extends decoration.Decoration {
    get [_colors]() {
      return this[_colors$];
    }
    set [_colors](value) {
      super[_colors] = value;
    }
    static ['_#_#tearOff'](_colors = null) {
      return new route$._CupertinoEdgeShadowDecoration.__(_colors);
    }
    static lerp(a, b, t) {
      let t6, t6$;
      if (!(t !== null)) dart.assertFailed(null, I[0], 836, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)[_colors] == null ? b : new route$._CupertinoEdgeShadowDecoration.__(dart.nullCheck(b[_colors])[$map](ui.Color, dart.fn(color => dart.nullCheck(ui.Color.lerp(null, color, t)), T$.ColorToColor()))[$toList]());
      if (b == null) return a[_colors] == null ? a : new route$._CupertinoEdgeShadowDecoration.__(dart.nullCheck(a[_colors])[$map](ui.Color, dart.fn(color => dart.nullCheck(ui.Color.lerp(null, color, 1.0 - t)), T$.ColorToColor()))[$toList]());
      if (!(b[_colors] != null || a[_colors] != null)) dart.assertFailed(null, I[0], 843, 12, "b._colors != null || a._colors != null");
      if (!(b[_colors] == null || a[_colors] == null || dart.nullCheck(a[_colors])[$length] === dart.nullCheck(b[_colors])[$length])) dart.assertFailed(null, I[0], 846, 12, "b._colors == null || a._colors == null || a._colors!.length == b._colors!.length");
      return new route$._CupertinoEdgeShadowDecoration.__((() => {
        let t5 = T$.JSArrayOfColor().of([]);
        for (let i = 0; i < dart.nullCheck(b[_colors])[$length]; i = i + 1)
          t5.push(dart.nullCheck(ui.Color.lerp((t6 = a[_colors], t6 == null ? null : t6[$_get](i)), (t6$ = b[_colors], t6$ == null ? null : t6$[$_get](i)), t)));
        return t5;
      })());
    }
    lerpFrom(a, t) {
      if (route$._CupertinoEdgeShadowDecoration.is(a)) return dart.nullCheck(route$._CupertinoEdgeShadowDecoration.lerp(a, this, t));
      return dart.nullCheck(route$._CupertinoEdgeShadowDecoration.lerp(null, this, t));
    }
    lerpTo(b, t) {
      if (route$._CupertinoEdgeShadowDecoration.is(b)) return dart.nullCheck(route$._CupertinoEdgeShadowDecoration.lerp(this, b, t));
      return dart.nullCheck(route$._CupertinoEdgeShadowDecoration.lerp(this, null, t));
    }
    createBoxPainter(onChanged = null) {
      return new route$._CupertinoEdgeShadowPainter.new(this, onChanged);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return route$._CupertinoEdgeShadowDecoration.is(other) && dart.equals(other[_colors], this[_colors]);
    }
    get hashCode() {
      return dart.hashCode(this[_colors]);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.IterablePropertyOfColor()).new("colors", this[_colors]));
    }
  };
  (route$._CupertinoEdgeShadowDecoration.__ = function(_colors = null) {
    this[_colors$] = _colors;
    route$._CupertinoEdgeShadowDecoration.__proto__.new.call(this);
    ;
  }).prototype = route$._CupertinoEdgeShadowDecoration.prototype;
  dart.addTypeTests(route$._CupertinoEdgeShadowDecoration);
  dart.addTypeCaches(route$._CupertinoEdgeShadowDecoration);
  dart.setMethodSignature(route$._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getMethods(route$._CupertinoEdgeShadowDecoration.__proto__),
    lerpFrom: dart.fnType(route$._CupertinoEdgeShadowDecoration, [dart.nullable(decoration.Decoration), core.double]),
    lerpTo: dart.fnType(route$._CupertinoEdgeShadowDecoration, [dart.nullable(decoration.Decoration), core.double]),
    createBoxPainter: dart.fnType(route$._CupertinoEdgeShadowPainter, [], [dart.nullable(dart.fnType(dart.void, []))])
  }));
  dart.setStaticMethodSignature(route$._CupertinoEdgeShadowDecoration, () => ['lerp']);
  dart.setLibraryUri(route$._CupertinoEdgeShadowDecoration, I[1]);
  dart.setFieldSignature(route$._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getFields(route$._CupertinoEdgeShadowDecoration.__proto__),
    [_colors]: dart.finalFieldType(dart.nullable(core.List$(ui.Color)))
  }));
  dart.setStaticFieldSignature(route$._CupertinoEdgeShadowDecoration, () => ['kTween']);
  dart.defineExtensionMethods(route$._CupertinoEdgeShadowDecoration, ['_equals']);
  dart.defineExtensionAccessors(route$._CupertinoEdgeShadowDecoration, ['hashCode']);
  dart.defineLazy(route$._CupertinoEdgeShadowDecoration, {
    /*route$._CupertinoEdgeShadowDecoration.kTween*/get kTween() {
      return new implicit_animations.DecorationTween.new({begin: C[19] || CT.C19, end: C[20] || CT.C20});
    },
    set kTween(_) {}
  }, false);
  var _decoration$ = dart.privateName(route$, "_decoration");
  route$._CupertinoEdgeShadowPainter = class _CupertinoEdgeShadowPainter extends decoration.BoxPainter {
    static ['_#new#tearOff'](_decoration, onChange) {
      return new route$._CupertinoEdgeShadowPainter.new(_decoration, onChange);
    }
    paint(canvas, offset, configuration) {
      let t6;
      let colors = this[_decoration$][_colors];
      if (colors == null) {
        return;
      }
      let shadowWidth = 0.05 * dart.nullCheck(configuration.size).width;
      let shadowHeight = dart.nullCheck(configuration.size).height;
      let bandWidth = shadowWidth / (colors[$length] - 1);
      let textDirection = configuration.textDirection;
      if (!(textDirection != null)) dart.assertFailed(null, I[0], 939, 12, "textDirection != null");
      let start = null;
      let shadowDirection = null;
      switch (dart.nullCheck(textDirection)) {
        case C[13] || CT.C13:
        {
          start = offset.dx + dart.nullCheck(configuration.size).width;
          shadowDirection = 1.0;
          break;
        }
        case C[14] || CT.C14:
        {
          start = offset.dx;
          shadowDirection = -1.0;
          break;
        }
      }
      let bandColorIndex = 0;
      for (let dx = 0; dx < shadowWidth; dx = dx + 1) {
        if ((dx / bandWidth)[$truncate]() !== bandColorIndex) {
          bandColorIndex = bandColorIndex + 1;
        }
        let paint = (t6 = ui.Paint.new(), (() => {
          t6.color = dart.nullCheck(ui.Color.lerp(colors[$_get](bandColorIndex), colors[$_get](bandColorIndex + 1), dx[$modulo](bandWidth) / bandWidth));
          return t6;
        })());
        let x = start + shadowDirection * dx;
        canvas.drawRect(new ui.Rect.fromLTWH(x - 1.0, offset.dy, 1.0, shadowHeight), paint);
      }
    }
  };
  (route$._CupertinoEdgeShadowPainter.new = function(_decoration, onChange) {
    this[_decoration$] = _decoration;
    if (!(_decoration !== null)) dart.assertFailed(null, I[0], 897, 14, "_decoration != null");
    if (!(_decoration[_colors] == null || dart.nullCheck(_decoration[_colors])[$length] > 1)) dart.assertFailed(null, I[0], 898, 14, "_decoration._colors == null || _decoration._colors!.length > 1");
    route$._CupertinoEdgeShadowPainter.__proto__.new.call(this, onChange);
    ;
  }).prototype = route$._CupertinoEdgeShadowPainter.prototype;
  dart.addTypeTests(route$._CupertinoEdgeShadowPainter);
  dart.addTypeCaches(route$._CupertinoEdgeShadowPainter);
  dart.setMethodSignature(route$._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getMethods(route$._CupertinoEdgeShadowPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(route$._CupertinoEdgeShadowPainter, I[1]);
  dart.setFieldSignature(route$._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getFields(route$._CupertinoEdgeShadowPainter.__proto__),
    [_decoration$]: dart.finalFieldType(route$._CupertinoEdgeShadowDecoration)
  }));
  var builder$0 = dart.privateName(route$, "CupertinoModalPopupRoute.builder");
  var barrierLabel$ = dart.privateName(route$, "CupertinoModalPopupRoute.barrierLabel");
  var barrierColor$ = dart.privateName(route$, "CupertinoModalPopupRoute.barrierColor");
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastElevatedColor");
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors, "CupertinoDynamicColor.darkElevatedColor");
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors, "CupertinoDynamicColor._effectiveColor");
  var _barrierDismissible = dart.privateName(route$, "_barrierDismissible");
  var _semanticsDismissible = dart.privateName(route$, "_semanticsDismissible");
  var _animation = dart.privateName(route$, "_animation");
  var __CupertinoModalPopupRoute__offsetTween = dart.privateName(route$, "_#CupertinoModalPopupRoute#_offsetTween");
  var _offsetTween = dart.privateName(route$, "_offsetTween");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  const _is_CupertinoModalPopupRoute_default = Symbol('_is_CupertinoModalPopupRoute_default');
  route$.CupertinoModalPopupRoute$ = dart.generic(T => {
    class CupertinoModalPopupRoute extends routes.PopupRoute$(T) {
      get builder() {
        return this[builder$0];
      }
      set builder(value) {
        super.builder = value;
      }
      get barrierLabel() {
        return this[barrierLabel$];
      }
      set barrierLabel(value) {
        super.barrierLabel = value;
      }
      get barrierColor() {
        return this[barrierColor$];
      }
      set barrierColor(value) {
        super.barrierColor = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : "Dismiss";
        let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : C[26] || CT.C26;
        let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
        let semanticsDismissible = opts && 'semanticsDismissible' in opts ? opts.semanticsDismissible : null;
        let filter = opts && 'filter' in opts ? opts.filter : null;
        let settings = opts && 'settings' in opts ? opts.settings : null;
        return new (route$.CupertinoModalPopupRoute$(T)).new({builder: builder, barrierLabel: barrierLabel, barrierColor: barrierColor, barrierDismissible: barrierDismissible, semanticsDismissible: semanticsDismissible, filter: filter, settings: settings});
      }
      get barrierDismissible() {
        let t6;
        t6 = this[_barrierDismissible];
        return t6 == null ? true : t6;
      }
      get semanticsDismissible() {
        let t6;
        t6 = this[_semanticsDismissible];
        return t6 == null ? false : t6;
      }
      get transitionDuration() {
        return route$._kModalPopupTransitionDuration;
      }
      get [_offsetTween]() {
        let t6;
        t6 = this[__CupertinoModalPopupRoute__offsetTween];
        return t6 == null ? dart.throw(new _internal.LateError.fieldNI("_offsetTween")) : t6;
      }
      set [_offsetTween](t6) {
        this[__CupertinoModalPopupRoute__offsetTween] = t6;
      }
      createAnimation() {
        if (!(this[_animation] == null)) dart.assertFailed(null, I[0], 1050, 12, "_animation == null");
        this[_animation] = new animations.CurvedAnimation.new({parent: super.createAnimation(), curve: curves.Curves.linearToEaseOut, reverseCurve: curves.Curves.linearToEaseOut.flipped});
        this[_offsetTween] = new (T$.TweenOfOffset()).new({begin: C[29] || CT.C29, end: ui.Offset.zero});
        return dart.nullCheck(this[_animation]);
      }
      buildPage(context, animation, secondaryAnimation) {
        return new interface_level.CupertinoUserInterfaceLevel.new({data: interface_level.CupertinoUserInterfaceLevelData.elevated, child: new basic.Builder.new({builder: this.builder, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31});
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        return new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new basic.FractionalTranslation.new({translation: this[_offsetTween].evaluate(dart.nullCheck(this[_animation])), child: child, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32}), $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
      }
    }
    (CupertinoModalPopupRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : "Dismiss";
      let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : C[26] || CT.C26;
      let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
      let semanticsDismissible = opts && 'semanticsDismissible' in opts ? opts.semanticsDismissible : null;
      let filter = opts && 'filter' in opts ? opts.filter : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      this[_barrierDismissible] = null;
      this[_semanticsDismissible] = null;
      this[_animation] = null;
      this[__CupertinoModalPopupRoute__offsetTween] = null;
      this[builder$0] = builder;
      this[barrierLabel$] = barrierLabel;
      this[barrierColor$] = barrierColor;
      CupertinoModalPopupRoute.__proto__.new.call(this, {filter: filter, settings: settings});
      this[_barrierDismissible] = barrierDismissible;
      this[_semanticsDismissible] = semanticsDismissible;
    }).prototype = CupertinoModalPopupRoute.prototype;
    dart.addTypeTests(CupertinoModalPopupRoute);
    CupertinoModalPopupRoute.prototype[_is_CupertinoModalPopupRoute_default] = true;
    dart.addTypeCaches(CupertinoModalPopupRoute);
    dart.setMethodSignature(CupertinoModalPopupRoute, () => ({
      __proto__: dart.getMethods(CupertinoModalPopupRoute.__proto__),
      buildPage: dart.fnType(framework.Widget, [framework.BuildContext, animation$.Animation$(core.double), animation$.Animation$(core.double)])
    }));
    dart.setGetterSignature(CupertinoModalPopupRoute, () => ({
      __proto__: dart.getGetters(CupertinoModalPopupRoute.__proto__),
      barrierDismissible: core.bool,
      transitionDuration: core.Duration,
      [_offsetTween]: tween.Tween$(ui.Offset)
    }));
    dart.setSetterSignature(CupertinoModalPopupRoute, () => ({
      __proto__: dart.getSetters(CupertinoModalPopupRoute.__proto__),
      [_offsetTween]: tween.Tween$(ui.Offset)
    }));
    dart.setLibraryUri(CupertinoModalPopupRoute, I[1]);
    dart.setFieldSignature(CupertinoModalPopupRoute, () => ({
      __proto__: dart.getFields(CupertinoModalPopupRoute.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
      [_barrierDismissible]: dart.fieldType(dart.nullable(core.bool)),
      [_semanticsDismissible]: dart.fieldType(dart.nullable(core.bool)),
      barrierLabel: dart.finalFieldType(core.String),
      barrierColor: dart.finalFieldType(dart.nullable(ui.Color)),
      [_animation]: dart.fieldType(dart.nullable(animation$.Animation$(core.double))),
      [__CupertinoModalPopupRoute__offsetTween]: dart.fieldType(dart.nullable(tween.Tween$(ui.Offset)))
    }));
    return CupertinoModalPopupRoute;
  });
  route$.CupertinoModalPopupRoute = route$.CupertinoModalPopupRoute$();
  dart.addTypeTests(route$.CupertinoModalPopupRoute, _is_CupertinoModalPopupRoute_default);
  const _is_CupertinoDialogRoute_default = Symbol('_is_CupertinoDialogRoute_default');
  route$.CupertinoDialogRoute$ = dart.generic(T => {
    class CupertinoDialogRoute extends routes.RawDialogRoute$(T) {
      static ['_#new#tearOff'](T, opts) {
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let context = opts && 'context' in opts ? opts.context : null;
        let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
        let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : null;
        let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
        let transitionDuration = opts && 'transitionDuration' in opts ? opts.transitionDuration : C[34] || CT.C34;
        let transitionBuilder = opts && 'transitionBuilder' in opts ? opts.transitionBuilder : C[35] || CT.C35;
        let settings = opts && 'settings' in opts ? opts.settings : null;
        return new (route$.CupertinoDialogRoute$(T)).new({builder: builder, context: context, barrierDismissible: barrierDismissible, barrierColor: barrierColor, barrierLabel: barrierLabel, transitionDuration: transitionDuration, transitionBuilder: transitionBuilder, settings: settings});
      }
    }
    (CupertinoDialogRoute.new = function(opts) {
      let t7, t7$;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let context = opts && 'context' in opts ? opts.context : null;
      let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
      let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : null;
      let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
      let transitionDuration = opts && 'transitionDuration' in opts ? opts.transitionDuration : C[34] || CT.C34;
      let transitionBuilder = opts && 'transitionBuilder' in opts ? opts.transitionBuilder : C[35] || CT.C35;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      if (!(barrierDismissible !== null)) dart.assertFailed(null, I[0], 1313, 15, "barrierDismissible != null");
      CupertinoDialogRoute.__proto__.new.call(this, {pageBuilder: dart.fn((context, animation, secondaryAnimation) => builder(context), T$.BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), barrierDismissible: barrierDismissible, barrierLabel: (t7 = barrierLabel, t7 == null ? localizations.CupertinoLocalizations.of(context).modalBarrierDismissLabel : t7), barrierColor: (t7$ = barrierColor, t7$ == null ? colors.CupertinoDynamicColor.resolve(route$.kCupertinoModalBarrierColor, context) : t7$), transitionDuration: transitionDuration, transitionBuilder: transitionBuilder, settings: settings});
      ;
    }).prototype = CupertinoDialogRoute.prototype;
    dart.addTypeTests(CupertinoDialogRoute);
    CupertinoDialogRoute.prototype[_is_CupertinoDialogRoute_default] = true;
    dart.addTypeCaches(CupertinoDialogRoute);
    dart.setLibraryUri(CupertinoDialogRoute, I[1]);
    return CupertinoDialogRoute;
  });
  route$.CupertinoDialogRoute = route$.CupertinoDialogRoute$();
  dart.addTypeTests(route$.CupertinoDialogRoute, _is_CupertinoDialogRoute_default);
  route$.showCupertinoModalPopup = function showCupertinoModalPopup(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let filter = opts && 'filter' in opts ? opts.filter : null;
    let barrierColor = opts && 'barrierColor' in opts ? opts.barrierColor : C[26] || CT.C26;
    let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : true;
    let useRootNavigator = opts && 'useRootNavigator' in opts ? opts.useRootNavigator : true;
    let semanticsDismissible = opts && 'semanticsDismissible' in opts ? opts.semanticsDismissible : null;
    let routeSettings = opts && 'routeSettings' in opts ? opts.routeSettings : null;
    if (!(useRootNavigator !== null)) dart.assertFailed(null, I[0], 1156, 10, "useRootNavigator != null");
    return navigator.Navigator.of(context, {rootNavigator: useRootNavigator}).push(T, new (route$.CupertinoModalPopupRoute$(T)).new({builder: builder, filter: filter, barrierColor: colors.CupertinoDynamicColor.resolve(barrierColor, context), barrierDismissible: barrierDismissible, semanticsDismissible: semanticsDismissible, settings: routeSettings}));
  };
  route$._buildCupertinoDialogTransitions = function _buildCupertinoDialogTransitions(context, animation, secondaryAnimation, child) {
    let fadeAnimation = new animations.CurvedAnimation.new({parent: animation, curve: curves.Curves.easeInOut});
    if (animation.status === animation$.AnimationStatus.reverse) {
      return new transitions.FadeTransition.new({opacity: fadeAnimation, child: child, $creationLocationd_0dea112b090073317d4: C[36] || CT.C36});
    }
    return new transitions.FadeTransition.new({opacity: fadeAnimation, child: new transitions.ScaleTransition.new({scale: animation.drive(core.double, route$._dialogScaleTween), child: child, $creationLocationd_0dea112b090073317d4: C[37] || CT.C37}), $creationLocationd_0dea112b090073317d4: C[38] || CT.C38});
  };
  route$.showCupertinoDialog = function showCupertinoDialog(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
    let useRootNavigator = opts && 'useRootNavigator' in opts ? opts.useRootNavigator : true;
    let barrierDismissible = opts && 'barrierDismissible' in opts ? opts.barrierDismissible : false;
    let routeSettings = opts && 'routeSettings' in opts ? opts.routeSettings : null;
    if (!(builder !== null)) dart.assertFailed(null, I[0], 1255, 10, "builder != null");
    if (!(useRootNavigator !== null)) dart.assertFailed(null, I[0], 1256, 10, "useRootNavigator != null");
    return navigator.Navigator.of(context, {rootNavigator: useRootNavigator}).push(T, new (route$.CupertinoDialogRoute$(T)).new({builder: builder, context: context, barrierDismissible: barrierDismissible, barrierLabel: barrierLabel, barrierColor: colors.CupertinoDynamicColor.resolve(route$.kCupertinoModalBarrierColor, context), settings: routeSettings}));
  };
  dart.defineLazy(route$, {
    /*route$._kBackGestureWidth*/get _kBackGestureWidth() {
      return 20;
    },
    /*route$._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 1;
    },
    /*route$._kMaxDroppedSwipePageForwardAnimationTime*/get _kMaxDroppedSwipePageForwardAnimationTime() {
      return 800;
    },
    /*route$._kMaxPageBackAnimationTime*/get _kMaxPageBackAnimationTime() {
      return 300;
    },
    /*route$.kCupertinoModalBarrierColor*/get kCupertinoModalBarrierColor() {
      return C[26] || CT.C26;
    },
    /*route$._kModalPopupTransitionDuration*/get _kModalPopupTransitionDuration() {
      return C[39] || CT.C39;
    },
    /*route$._kRightMiddleTween*/get _kRightMiddleTween() {
      return new (T$.TweenOfOffset()).new({begin: C[40] || CT.C40, end: ui.Offset.zero});
    },
    /*route$._kMiddleLeftTween*/get _kMiddleLeftTween() {
      return new (T$.TweenOfOffset()).new({begin: ui.Offset.zero, end: C[41] || CT.C41});
    },
    /*route$._kBottomUpTween*/get _kBottomUpTween() {
      return new (T$.TweenOfOffset()).new({begin: C[29] || CT.C29, end: ui.Offset.zero});
    },
    /*route$._dialogScaleTween*/get _dialogScaleTween() {
      return new (T$.TweenOfdouble()).new({begin: 1.3, end: 1.0}).chain(new tween.CurveTween.new({curve: curves.Curves.linearToEaseOut}));
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/cupertino/route.dart", {
    "package:flutter/src/cupertino/route.dart": route$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["route.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/cupertino/route.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__route: route$
  };
}));

//# sourceMappingURL=route.dart.lib.js.map
