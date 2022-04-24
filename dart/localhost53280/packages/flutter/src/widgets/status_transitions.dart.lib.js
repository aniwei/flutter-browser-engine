define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__widgets__status_transitions_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  var status_transitions = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/status_transitions.dart",
    "package:flutter/src/widgets/status_transitions.dart"
  ];
  var animation$ = dart.privateName(status_transitions, "StatusTransitionWidget.animation");
  status_transitions.StatusTransitionWidget = class StatusTransitionWidget extends framework.StatefulWidget {
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    createState() {
      return new status_transitions._StatusTransitionState.new();
    }
  };
  (status_transitions.StatusTransitionWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[animation$] = animation;
    if (!(animation !== null)) dart.assertFailed(null, I[0], 16, 15, "animation != null");
    status_transitions.StatusTransitionWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = status_transitions.StatusTransitionWidget.prototype;
  dart.addTypeTests(status_transitions.StatusTransitionWidget);
  dart.addTypeCaches(status_transitions.StatusTransitionWidget);
  dart.setMethodSignature(status_transitions.StatusTransitionWidget, () => ({
    __proto__: dart.getMethods(status_transitions.StatusTransitionWidget.__proto__),
    createState: dart.fnType(framework.State$(status_transitions.StatusTransitionWidget), [])
  }));
  dart.setLibraryUri(status_transitions.StatusTransitionWidget, I[1]);
  dart.setFieldSignature(status_transitions.StatusTransitionWidget, () => ({
    __proto__: dart.getFields(status_transitions.StatusTransitionWidget.__proto__),
    animation: dart.finalFieldType(animation.Animation$(core.double))
  }));
  var _animationStatusChanged = dart.privateName(status_transitions, "_animationStatusChanged");
  status_transitions._StatusTransitionState = class _StatusTransitionState extends framework.State$(status_transitions.StatusTransitionWidget) {
    initState() {
      super.initState();
      this.widget.animation.addStatusListener(dart.bind(this, _animationStatusChanged));
    }
    didUpdateWidget(oldWidget) {
      status_transitions.StatusTransitionWidget.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!this.widget.animation[$_equals](oldWidget.animation)) {
        oldWidget.animation.removeStatusListener(dart.bind(this, _animationStatusChanged));
        this.widget.animation.addStatusListener(dart.bind(this, _animationStatusChanged));
      }
    }
    dispose() {
      this.widget.animation.removeStatusListener(dart.bind(this, _animationStatusChanged));
      super.dispose();
    }
    [_animationStatusChanged](status) {
      this.setState(dart.fn(() => {
      }, T.VoidTovoid()));
    }
    build(context) {
      return this.widget.build(context);
    }
    static ['_#new#tearOff']() {
      return new status_transitions._StatusTransitionState.new();
    }
  };
  (status_transitions._StatusTransitionState.new = function() {
    status_transitions._StatusTransitionState.__proto__.new.call(this);
    ;
  }).prototype = status_transitions._StatusTransitionState.prototype;
  dart.addTypeTests(status_transitions._StatusTransitionState);
  dart.addTypeCaches(status_transitions._StatusTransitionState);
  dart.setMethodSignature(status_transitions._StatusTransitionState, () => ({
    __proto__: dart.getMethods(status_transitions._StatusTransitionState.__proto__),
    [_animationStatusChanged]: dart.fnType(dart.void, [animation.AnimationStatus]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(status_transitions._StatusTransitionState, I[1]);
  dart.trackLibraries("packages/flutter/src/widgets/status_transitions.dart", {
    "package:flutter/src/widgets/status_transitions.dart": status_transitions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["status_transitions.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAmB0B;;;;;;;AAOuB;IAAwB;;;QAbhE;QACS;;;UACJ,AAAU,SAAD;AAChB,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;AAgBD,MAAX;AACqD,MAA3D,AAAO,AAAU,kDAAkB;IACrC;oBAG4C;;AACV,MAA1B,sBAAgB,SAAS;AAC/B,WAAI,AAAO,gCAAa,AAAU,SAAD;AACkC,QAAjE,AAAU,AAAU,SAAX,0CAAgC;AACkB,QAA3D,AAAO,AAAU,kDAAkB;;IAEvC;;AAIgE,MAA9D,AAAO,AAAU,qDAAqB;AACvB,MAAT;IACR;8BAE6C;AAGzC,MAFF,cAAS;;IAGX;UAG0B;AACxB,YAAO,AAAO,mBAAM,OAAO;IAC7B;;;;;;;;EACF","file":"../../../../../../../../../../packages/flutter/src/widgets/status_transitions.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__status_transitions: status_transitions
  };
}));

//# sourceMappingURL=status_transitions.dart.lib.js.map
