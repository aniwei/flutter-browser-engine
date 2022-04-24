define(['dart_sdk', 'packages/flutter/src/material/constants.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/widgets/widget_inspector.dart'], (function load__packages__flutter__src__material__tab_controller_dart(dart_sdk, packages__flutter__src__material__constants$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__widgets__widget_inspector$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const constants = packages__flutter__src__material__constants$46dart.src__material__constants;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const ticker_provider = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__ticker_provider;
  var tab_controller = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TabControllerScope",
        [_Location_column]: 9,
        [_Location_line]: 273,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/tab_controller.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTabController",
        [_Location_column]: 9,
        [_Location_line]: 342,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/tab_controller.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TabControllerScope",
        [_Location_column]: 12,
        [_Location_line]: 416,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/tab_controller.dart"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/tab_controller.dart",
    "package:flutter/src/material/tab_controller.dart"
  ];
  var length$ = dart.privateName(tab_controller, "TabController.length");
  var _indexIsChangingCount = dart.privateName(tab_controller, "_indexIsChangingCount");
  var _index = dart.privateName(tab_controller, "_index");
  var _previousIndex = dart.privateName(tab_controller, "_previousIndex");
  var _animationDuration = dart.privateName(tab_controller, "_animationDuration");
  var _animationController = dart.privateName(tab_controller, "_animationController");
  var _copyWith = dart.privateName(tab_controller, "_copyWith");
  var _changeIndex = dart.privateName(tab_controller, "_changeIndex");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  tab_controller.TabController = class TabController extends change_notifier.ChangeNotifier {
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    static ['_#new#tearOff'](opts) {
      let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
      let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
      let length = opts && 'length' in opts ? opts.length : null;
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      return new tab_controller.TabController.new({initialIndex: initialIndex, animationDuration: animationDuration, length: length, vsync: vsync});
    }
    static ['_#_#tearOff'](opts) {
      let index = opts && 'index' in opts ? opts.index : null;
      let previousIndex = opts && 'previousIndex' in opts ? opts.previousIndex : null;
      let animationController = opts && 'animationController' in opts ? opts.animationController : null;
      let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
      let length = opts && 'length' in opts ? opts.length : null;
      return new tab_controller.TabController.__({index: index, previousIndex: previousIndex, animationController: animationController, animationDuration: animationDuration, length: length});
    }
    [_copyWith](opts) {
      let t0, t0$, t0$0, t0$1;
      let index = opts && 'index' in opts ? opts.index : null;
      let length = opts && 'length' in opts ? opts.length : null;
      let previousIndex = opts && 'previousIndex' in opts ? opts.previousIndex : null;
      let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
      if (index != null) {
        dart.nullCheck(this[_animationController]).value = index[$toDouble]();
      }
      return new tab_controller.TabController.__({index: (t0 = index, t0 == null ? this[_index] : t0), length: (t0$ = length, t0$ == null ? this.length : t0$), animationController: this[_animationController], previousIndex: (t0$0 = previousIndex, t0$0 == null ? this[_previousIndex] : t0$0), animationDuration: (t0$1 = animationDuration, t0$1 == null ? this[_animationDuration] : t0$1)});
    }
    get animation() {
      let t0;
      t0 = this[_animationController];
      return t0 == null ? null : t0.view;
    }
    get animationDuration() {
      return this[_animationDuration];
    }
    [_changeIndex](value, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      if (!(value !== null)) dart.assertFailed(null, I[0], 180, 12, "value != null");
      if (!(value >= 0 && (value < this.length || this.length === 0))) dart.assertFailed(null, I[0], 181, 12, "value >= 0 && (value < length || length == 0)");
      if (!(duration != null || curve == null)) dart.assertFailed(null, I[0], 182, 12, "duration != null || curve == null");
      if (!(this[_indexIsChangingCount] >= 0)) dart.assertFailed(null, I[0], 183, 12, "_indexIsChangingCount >= 0");
      if (value === this[_index] || this.length < 2) return;
      this[_previousIndex] = this.index;
      this[_index] = value;
      if (duration != null && duration['>'](core.Duration.zero)) {
        this[_indexIsChangingCount] = this[_indexIsChangingCount] + 1;
        this.notifyListeners();
        dart.nullCheck(this[_animationController]).animateTo(this[_index][$toDouble](), {duration: duration, curve: dart.nullCheck(curve)}).whenCompleteOrCancel(dart.fn(() => {
          if (this[_animationController] != null) {
            this[_indexIsChangingCount] = this[_indexIsChangingCount] - 1;
            this.notifyListeners();
          }
        }, T.VoidTovoid()));
      } else {
        this[_indexIsChangingCount] = this[_indexIsChangingCount] + 1;
        dart.nullCheck(this[_animationController]).value = this[_index][$toDouble]();
        this[_indexIsChangingCount] = this[_indexIsChangingCount] - 1;
        this.notifyListeners();
      }
    }
    get index() {
      return this[_index];
    }
    set index(value) {
      this[_changeIndex](value);
    }
    get previousIndex() {
      return this[_previousIndex];
    }
    get indexIsChanging() {
      return this[_indexIsChangingCount] !== 0;
    }
    animateTo(value, opts) {
      let t0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      this[_changeIndex](value, {duration: (t0 = duration, t0 == null ? this[_animationDuration] : t0), curve: curve});
    }
    get offset() {
      return dart.nullCheck(this[_animationController]).value - this[_index][$toDouble]();
    }
    set offset(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 256, 12, "value != null");
      if (!(value >= -1.0 && value <= 1.0)) dart.assertFailed(null, I[0], 257, 12, "value >= -1.0 && value <= 1.0");
      if (!!this.indexIsChanging) dart.assertFailed(null, I[0], 258, 12, "!indexIsChanging");
      if (value === this.offset) return;
      dart.nullCheck(this[_animationController]).value = value + this[_index][$toDouble]();
    }
    dispose() {
      let t0;
      t0 = this[_animationController];
      t0 == null ? null : t0.dispose();
      this[_animationController] = null;
      super.dispose();
    }
  };
  (tab_controller.TabController.new = function(opts) {
    let t0;
    let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let length = opts && 'length' in opts ? opts.length : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    this[_indexIsChangingCount] = 0;
    this[length$] = length;
    if (!(length !== null && length >= 0)) dart.assertFailed(null, I[0], 105, 14, "length != null && length >= 0");
    if (!(initialIndex !== null && initialIndex >= 0 && (length === 0 || initialIndex < length))) dart.assertFailed(null, I[0], 106, 14, "initialIndex != null && initialIndex >= 0 && (length == 0 || initialIndex < length)");
    this[_index] = initialIndex;
    this[_previousIndex] = initialIndex;
    this[_animationDuration] = (t0 = animationDuration, t0 == null ? constants.kTabScrollDuration : t0);
    this[_animationController] = new animation_controller.AnimationController.unbounded({value: initialIndex[$toDouble](), vsync: vsync});
    tab_controller.TabController.__proto__.new.call(this);
    ;
  }).prototype = tab_controller.TabController.prototype;
  (tab_controller.TabController.__ = function(opts) {
    let index = opts && 'index' in opts ? opts.index : null;
    let previousIndex = opts && 'previousIndex' in opts ? opts.previousIndex : null;
    let animationController = opts && 'animationController' in opts ? opts.animationController : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let length = opts && 'length' in opts ? opts.length : null;
    this[_indexIsChangingCount] = 0;
    this[length$] = length;
    this[_index] = index;
    this[_previousIndex] = previousIndex;
    this[_animationController] = animationController;
    this[_animationDuration] = animationDuration;
    tab_controller.TabController.__proto__.new.call(this);
    ;
  }).prototype = tab_controller.TabController.prototype;
  dart.addTypeTests(tab_controller.TabController);
  dart.addTypeCaches(tab_controller.TabController);
  dart.setMethodSignature(tab_controller.TabController, () => ({
    __proto__: dart.getMethods(tab_controller.TabController.__proto__),
    [_copyWith]: dart.fnType(tab_controller.TabController, [], {}, {animationDuration: dart.nullable(core.Duration), index: dart.nullable(core.int), length: dart.nullable(core.int), previousIndex: dart.nullable(core.int)}),
    [_changeIndex]: dart.fnType(dart.void, [core.int], {curve: dart.nullable(curves.Curve), duration: dart.nullable(core.Duration)}, {}),
    animateTo: dart.fnType(dart.void, [core.int], {curve: curves.Curve, duration: dart.nullable(core.Duration)}, {})
  }));
  dart.setGetterSignature(tab_controller.TabController, () => ({
    __proto__: dart.getGetters(tab_controller.TabController.__proto__),
    animation: dart.nullable(animation.Animation$(core.double)),
    animationDuration: core.Duration,
    index: core.int,
    previousIndex: core.int,
    indexIsChanging: core.bool,
    offset: core.double
  }));
  dart.setSetterSignature(tab_controller.TabController, () => ({
    __proto__: dart.getSetters(tab_controller.TabController.__proto__),
    index: core.int,
    offset: core.double
  }));
  dart.setLibraryUri(tab_controller.TabController, I[1]);
  dart.setFieldSignature(tab_controller.TabController, () => ({
    __proto__: dart.getFields(tab_controller.TabController.__proto__),
    [_animationController]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
    [_animationDuration]: dart.finalFieldType(core.Duration),
    length: dart.finalFieldType(core.int),
    [_index]: dart.fieldType(core.int),
    [_previousIndex]: dart.fieldType(core.int),
    [_indexIsChangingCount]: dart.fieldType(core.int)
  }));
  var controller$ = dart.privateName(tab_controller, "_TabControllerScope.controller");
  var enabled$ = dart.privateName(tab_controller, "_TabControllerScope.enabled");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  tab_controller._TabControllerScope = class _TabControllerScope extends framework.InheritedWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new tab_controller._TabControllerScope.new({key: key, controller: controller, enabled: enabled, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    updateShouldNotify(old) {
      tab_controller._TabControllerScope.as(old);
      return this.enabled !== old.enabled || !this.controller[$_equals](old.controller);
    }
  };
  (tab_controller._TabControllerScope.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[enabled$] = enabled;
    tab_controller._TabControllerScope.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tab_controller._TabControllerScope.prototype;
  dart.addTypeTests(tab_controller._TabControllerScope);
  dart.addTypeCaches(tab_controller._TabControllerScope);
  dart.setMethodSignature(tab_controller._TabControllerScope, () => ({
    __proto__: dart.getMethods(tab_controller._TabControllerScope.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(tab_controller._TabControllerScope, I[1]);
  dart.setFieldSignature(tab_controller._TabControllerScope, () => ({
    __proto__: dart.getFields(tab_controller._TabControllerScope.__proto__),
    controller: dart.finalFieldType(tab_controller.TabController),
    enabled: dart.finalFieldType(core.bool)
  }));
  var length$0 = dart.privateName(tab_controller, "DefaultTabController.length");
  var initialIndex$ = dart.privateName(tab_controller, "DefaultTabController.initialIndex");
  var animationDuration$ = dart.privateName(tab_controller, "DefaultTabController.animationDuration");
  var child$ = dart.privateName(tab_controller, "DefaultTabController.child");
  tab_controller.DefaultTabController = class DefaultTabController extends framework.StatefulWidget {
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    get initialIndex() {
      return this[initialIndex$];
    }
    set initialIndex(value) {
      super.initialIndex = value;
    }
    get animationDuration() {
      return this[animationDuration$];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let length = opts && 'length' in opts ? opts.length : null;
      let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
      let child = opts && 'child' in opts ? opts.child : null;
      let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
      return new tab_controller.DefaultTabController.new({key: key, length: length, initialIndex: initialIndex, child: child, animationDuration: animationDuration, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    static of(context) {
      let t0;
      let scope = context.dependOnInheritedWidgetOfExactType(tab_controller._TabControllerScope);
      t0 = scope;
      return t0 == null ? null : t0.controller;
    }
    createState() {
      return new tab_controller._DefaultTabControllerState.new();
    }
  };
  (tab_controller.DefaultTabController.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let length = opts && 'length' in opts ? opts.length : null;
    let initialIndex = opts && 'initialIndex' in opts ? opts.initialIndex : 0;
    let child = opts && 'child' in opts ? opts.child : null;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[length$0] = length;
    this[initialIndex$] = initialIndex;
    this[child$] = child;
    this[animationDuration$] = animationDuration;
    if (!(initialIndex !== null)) dart.assertFailed(null, I[0], 348, 15, "initialIndex != null");
    if (!(length >= 0)) dart.assertFailed(null, I[0], 349, 15, "length >= 0");
    if (!(length === 0 || initialIndex >= 0 && initialIndex < length)) dart.assertFailed(null, I[0], 350, 15, "length == 0 || (initialIndex >= 0 && initialIndex < length)");
    tab_controller.DefaultTabController.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tab_controller.DefaultTabController.prototype;
  dart.addTypeTests(tab_controller.DefaultTabController);
  dart.addTypeCaches(tab_controller.DefaultTabController);
  dart.setMethodSignature(tab_controller.DefaultTabController, () => ({
    __proto__: dart.getMethods(tab_controller.DefaultTabController.__proto__),
    createState: dart.fnType(framework.State$(tab_controller.DefaultTabController), [])
  }));
  dart.setStaticMethodSignature(tab_controller.DefaultTabController, () => ['of']);
  dart.setLibraryUri(tab_controller.DefaultTabController, I[1]);
  dart.setFieldSignature(tab_controller.DefaultTabController, () => ({
    __proto__: dart.getFields(tab_controller.DefaultTabController.__proto__),
    length: dart.finalFieldType(core.int),
    initialIndex: dart.finalFieldType(core.int),
    animationDuration: dart.finalFieldType(dart.nullable(core.Duration)),
    child: dart.finalFieldType(framework.Widget)
  }));
  var ___DefaultTabControllerState__controller = dart.privateName(tab_controller, "_#_DefaultTabControllerState#_controller");
  var _controller = dart.privateName(tab_controller, "_controller");
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(tab_controller.DefaultTabController) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(tab_controller.DefaultTabController)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(tab_controller.DefaultTabController));
  tab_controller._DefaultTabControllerState = class _DefaultTabControllerState extends State_SingleTickerProviderStateMixin$36 {
    get [_controller]() {
      let t0;
      t0 = this[___DefaultTabControllerState__controller];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_controller")) : t0;
    }
    set [_controller](t0) {
      this[___DefaultTabControllerState__controller] = t0;
    }
    initState() {
      super.initState();
      this[_controller] = new tab_controller.TabController.new({vsync: this, length: this.widget.length, initialIndex: this.widget.initialIndex, animationDuration: this.widget.animationDuration});
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new tab_controller._TabControllerScope.new({controller: this[_controller], enabled: ticker_provider.TickerMode.of(context), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    didUpdateWidget(oldWidget) {
      tab_controller.DefaultTabController.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (oldWidget.length !== this.widget.length) {
        let newIndex = null;
        let previousIndex = this[_controller].previousIndex;
        if (this[_controller].index >= this.widget.length) {
          newIndex = math.max(core.int, 0, this.widget.length - 1);
          previousIndex = this[_controller].index;
        }
        this[_controller] = this[_controller][_copyWith]({length: this.widget.length, animationDuration: this.widget.animationDuration, index: newIndex, previousIndex: previousIndex});
      }
      if (!dart.equals(oldWidget.animationDuration, this.widget.animationDuration)) {
        this[_controller] = this[_controller][_copyWith]({length: this.widget.length, animationDuration: this.widget.animationDuration, index: this[_controller].index, previousIndex: this[_controller].previousIndex});
      }
    }
    static ['_#new#tearOff']() {
      return new tab_controller._DefaultTabControllerState.new();
    }
  };
  (tab_controller._DefaultTabControllerState.new = function() {
    this[___DefaultTabControllerState__controller] = null;
    tab_controller._DefaultTabControllerState.__proto__.new.call(this);
    ;
  }).prototype = tab_controller._DefaultTabControllerState.prototype;
  dart.addTypeTests(tab_controller._DefaultTabControllerState);
  dart.addTypeCaches(tab_controller._DefaultTabControllerState);
  dart.setMethodSignature(tab_controller._DefaultTabControllerState, () => ({
    __proto__: dart.getMethods(tab_controller._DefaultTabControllerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(tab_controller._DefaultTabControllerState, () => ({
    __proto__: dart.getGetters(tab_controller._DefaultTabControllerState.__proto__),
    [_controller]: tab_controller.TabController
  }));
  dart.setSetterSignature(tab_controller._DefaultTabControllerState, () => ({
    __proto__: dart.getSetters(tab_controller._DefaultTabControllerState.__proto__),
    [_controller]: tab_controller.TabController
  }));
  dart.setLibraryUri(tab_controller._DefaultTabControllerState, I[1]);
  dart.setFieldSignature(tab_controller._DefaultTabControllerState, () => ({
    __proto__: dart.getFields(tab_controller._DefaultTabControllerState.__proto__),
    [___DefaultTabControllerState__controller]: dart.fieldType(dart.nullable(tab_controller.TabController))
  }));
  dart.trackLibraries("packages/flutter/src/material/tab_controller.dart", {
    "package:flutter/src/material/tab_controller.dart": tab_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tab_controller.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/tab_controller.dart.lib.js"}');
  // Exports:
  return {
    src__material__tab_controller: tab_controller
  };
}));

//# sourceMappingURL=tab_controller.dart.lib.js.map
