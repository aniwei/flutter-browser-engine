define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__widgets__dual_transition_builder_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  var dual_transition_builder = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DualTransitionBuilder",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/dual_transition_builder.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_Enum__name]: "dismissed",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_Enum__name]: "completed",
        [_Enum_index]: 3
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_Enum__name]: "forward",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_Enum__name]: "reverse",
        [_Enum_index]: 2
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/dual_transition_builder.dart",
    "package:flutter/src/widgets/dual_transition_builder.dart"
  ];
  var animation$ = dart.privateName(dual_transition_builder, "DualTransitionBuilder.animation");
  var forwardBuilder$ = dart.privateName(dual_transition_builder, "DualTransitionBuilder.forwardBuilder");
  var reverseBuilder$ = dart.privateName(dual_transition_builder, "DualTransitionBuilder.reverseBuilder");
  var child$ = dart.privateName(dual_transition_builder, "DualTransitionBuilder.child");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  dual_transition_builder.DualTransitionBuilder = class DualTransitionBuilder extends framework.StatefulWidget {
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    get forwardBuilder() {
      return this[forwardBuilder$];
    }
    set forwardBuilder(value) {
      super.forwardBuilder = value;
    }
    get reverseBuilder() {
      return this[reverseBuilder$];
    }
    set reverseBuilder(value) {
      super.reverseBuilder = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let animation = opts && 'animation' in opts ? opts.animation : null;
      let forwardBuilder = opts && 'forwardBuilder' in opts ? opts.forwardBuilder : null;
      let reverseBuilder = opts && 'reverseBuilder' in opts ? opts.reverseBuilder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new dual_transition_builder.DualTransitionBuilder.new({key: key, animation: animation, forwardBuilder: forwardBuilder, reverseBuilder: reverseBuilder, child: child, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createState() {
      return new dual_transition_builder._DualTransitionBuilderState.new();
    }
  };
  (dual_transition_builder.DualTransitionBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let forwardBuilder = opts && 'forwardBuilder' in opts ? opts.forwardBuilder : null;
    let reverseBuilder = opts && 'reverseBuilder' in opts ? opts.reverseBuilder : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[animation$] = animation;
    this[forwardBuilder$] = forwardBuilder;
    this[reverseBuilder$] = reverseBuilder;
    this[child$] = child;
    if (!(animation !== null)) dart.assertFailed(null, I[0], 44, 15, "animation != null");
    if (!(forwardBuilder !== null)) dart.assertFailed(null, I[0], 45, 15, "forwardBuilder != null");
    if (!(reverseBuilder !== null)) dart.assertFailed(null, I[0], 46, 15, "reverseBuilder != null");
    dual_transition_builder.DualTransitionBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dual_transition_builder.DualTransitionBuilder.prototype;
  dart.addTypeTests(dual_transition_builder.DualTransitionBuilder);
  dart.addTypeCaches(dual_transition_builder.DualTransitionBuilder);
  dart.setMethodSignature(dual_transition_builder.DualTransitionBuilder, () => ({
    __proto__: dart.getMethods(dual_transition_builder.DualTransitionBuilder.__proto__),
    createState: dart.fnType(framework.State$(dual_transition_builder.DualTransitionBuilder), [])
  }));
  dart.setLibraryUri(dual_transition_builder.DualTransitionBuilder, I[1]);
  dart.setFieldSignature(dual_transition_builder.DualTransitionBuilder, () => ({
    __proto__: dart.getFields(dual_transition_builder.DualTransitionBuilder.__proto__),
    animation: dart.finalFieldType(animation.Animation$(core.double)),
    forwardBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, animation.Animation$(core.double), dart.nullable(framework.Widget)])),
    reverseBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, animation.Animation$(core.double), dart.nullable(framework.Widget)])),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  var ___DualTransitionBuilderState__effectiveAnimationStatus = dart.privateName(dual_transition_builder, "_#_DualTransitionBuilderState#_effectiveAnimationStatus");
  var _forwardAnimation = dart.privateName(dual_transition_builder, "_forwardAnimation");
  var _reverseAnimation = dart.privateName(dual_transition_builder, "_reverseAnimation");
  var _effectiveAnimationStatus = dart.privateName(dual_transition_builder, "_effectiveAnimationStatus");
  var _animationListener = dart.privateName(dual_transition_builder, "_animationListener");
  var _updateAnimations = dart.privateName(dual_transition_builder, "_updateAnimations");
  var _calculateEffectiveAnimationStatus = dart.privateName(dual_transition_builder, "_calculateEffectiveAnimationStatus");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  dual_transition_builder._DualTransitionBuilderState = class _DualTransitionBuilderState extends framework.State$(dual_transition_builder.DualTransitionBuilder) {
    get [_effectiveAnimationStatus]() {
      let t0;
      t0 = this[___DualTransitionBuilderState__effectiveAnimationStatus];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_effectiveAnimationStatus")) : t0;
    }
    set [_effectiveAnimationStatus](t0) {
      this[___DualTransitionBuilderState__effectiveAnimationStatus] = t0;
    }
    initState() {
      super.initState();
      this[_effectiveAnimationStatus] = this.widget.animation.status;
      this.widget.animation.addStatusListener(dart.bind(this, _animationListener));
      this[_updateAnimations]();
    }
    [_animationListener](animationStatus) {
      let oldEffective = this[_effectiveAnimationStatus];
      this[_effectiveAnimationStatus] = this[_calculateEffectiveAnimationStatus]({lastEffective: this[_effectiveAnimationStatus], current: animationStatus});
      if (oldEffective !== this[_effectiveAnimationStatus]) {
        this[_updateAnimations]();
      }
    }
    didUpdateWidget(oldWidget) {
      dual_transition_builder.DualTransitionBuilder.as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!oldWidget.animation[$_equals](this.widget.animation)) {
        oldWidget.animation.removeStatusListener(dart.bind(this, _animationListener));
        this.widget.animation.addStatusListener(dart.bind(this, _animationListener));
        this[_animationListener](this.widget.animation.status);
      }
    }
    [_calculateEffectiveAnimationStatus](opts) {
      let lastEffective = opts && 'lastEffective' in opts ? opts.lastEffective : null;
      let current = opts && 'current' in opts ? opts.current : null;
      if (!(current !== null)) dart.assertFailed(null, I[0], 138, 12, "current != null");
      if (!(lastEffective !== null)) dart.assertFailed(null, I[0], 139, 12, "lastEffective != null");
      switch (current) {
        case C[1] || CT.C1:
        case C[2] || CT.C2:
        {
          return current;
        }
        case C[3] || CT.C3:
        {
          switch (lastEffective) {
            case C[1] || CT.C1:
            case C[2] || CT.C2:
            case C[3] || CT.C3:
            {
              return current;
            }
            case C[4] || CT.C4:
            {
              return lastEffective;
            }
          }
        }
        case C[4] || CT.C4:
        {
          switch (lastEffective) {
            case C[1] || CT.C1:
            case C[2] || CT.C2:
            case C[4] || CT.C4:
            {
              return current;
            }
            case C[3] || CT.C3:
            {
              return lastEffective;
            }
          }
        }
      }
    }
    [_updateAnimations]() {
      switch (this[_effectiveAnimationStatus]) {
        case C[1] || CT.C1:
        case C[3] || CT.C3:
        {
          this[_forwardAnimation].parent = this.widget.animation;
          this[_reverseAnimation].parent = animations.kAlwaysDismissedAnimation;
          break;
        }
        case C[4] || CT.C4:
        case C[2] || CT.C2:
        {
          this[_forwardAnimation].parent = animations.kAlwaysCompleteAnimation;
          this[_reverseAnimation].parent = new animations.ReverseAnimation.new(this.widget.animation);
          break;
        }
      }
    }
    dispose() {
      this.widget.animation.removeStatusListener(dart.bind(this, _animationListener));
      super.dispose();
    }
    build(context) {
      let t4, t3, t2, t1, t4$, t3$, t2$, t1$;
      t1$ = this.widget;
      t2$ = context;
      t3$ = this[_forwardAnimation];
      t4$ = (t1 = this.widget, t2 = context, t3 = this[_reverseAnimation], t4 = this.widget.child, t1.reverseBuilder(t2, t3, t4));
      return t1$.forwardBuilder(t2$, t3$, t4$);
    }
    static ['_#new#tearOff']() {
      return new dual_transition_builder._DualTransitionBuilderState.new();
    }
  };
  (dual_transition_builder._DualTransitionBuilderState.new = function() {
    this[___DualTransitionBuilderState__effectiveAnimationStatus] = null;
    this[_forwardAnimation] = new animations.ProxyAnimation.new();
    this[_reverseAnimation] = new animations.ProxyAnimation.new();
    dual_transition_builder._DualTransitionBuilderState.__proto__.new.call(this);
    ;
  }).prototype = dual_transition_builder._DualTransitionBuilderState.prototype;
  dart.addTypeTests(dual_transition_builder._DualTransitionBuilderState);
  dart.addTypeCaches(dual_transition_builder._DualTransitionBuilderState);
  dart.setMethodSignature(dual_transition_builder._DualTransitionBuilderState, () => ({
    __proto__: dart.getMethods(dual_transition_builder._DualTransitionBuilderState.__proto__),
    [_animationListener]: dart.fnType(dart.void, [animation.AnimationStatus]),
    [_calculateEffectiveAnimationStatus]: dart.fnType(animation.AnimationStatus, [], {}, {current: animation.AnimationStatus, lastEffective: animation.AnimationStatus}),
    [_updateAnimations]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(dual_transition_builder._DualTransitionBuilderState, () => ({
    __proto__: dart.getGetters(dual_transition_builder._DualTransitionBuilderState.__proto__),
    [_effectiveAnimationStatus]: animation.AnimationStatus
  }));
  dart.setSetterSignature(dual_transition_builder._DualTransitionBuilderState, () => ({
    __proto__: dart.getSetters(dual_transition_builder._DualTransitionBuilderState.__proto__),
    [_effectiveAnimationStatus]: animation.AnimationStatus
  }));
  dart.setLibraryUri(dual_transition_builder._DualTransitionBuilderState, I[1]);
  dart.setFieldSignature(dual_transition_builder._DualTransitionBuilderState, () => ({
    __proto__: dart.getFields(dual_transition_builder._DualTransitionBuilderState.__proto__),
    [___DualTransitionBuilderState__effectiveAnimationStatus]: dart.fieldType(dart.nullable(animation.AnimationStatus)),
    [_forwardAnimation]: dart.finalFieldType(animations.ProxyAnimation),
    [_reverseAnimation]: dart.finalFieldType(animations.ProxyAnimation)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/dual_transition_builder.dart", {
    "package:flutter/src/widgets/dual_transition_builder.dart": dual_transition_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dual_transition_builder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqD0B;;;;;;IAeQ;;;;;;IAeA;;;;;;IAMlB;;;;;;;;;;;;;;;AAGgC;IAA6B;;;QAtDpE;QACS;QACA;QACA;QACT;;IAHS;IACA;IACA;IACT;UACK,AAAU,SAAD;UACT,AAAe,cAAD;UACd,AAAe,cAAD;AACrB,iFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkDC;;IAAyB;;AAAzB;IAAyB;;AAM3B,MAAX;AAC6C,MAAnD,kCAA4B,AAAO,AAAU;AACS,MAAtD,AAAO,AAAU,kDAAkB;AAChB,MAAnB;IACF;yBAEwC;AAChB,yBAAe;AAIpC,MAHD,kCAA4B,yDACX,0CACN,eAAe;AAE1B,UAAI,YAAY,KAAI;AACC,QAAnB;;IAEJ;oBAG2C;;AACT,MAA1B,sBAAgB,SAAS;AAC/B,WAAI,AAAU,SAAD,qBAAc,AAAO;AAC4B,QAA5D,AAAU,AAAU,SAAX,0CAAgC;AACa,QAAtD,AAAO,AAAU,kDAAkB;AACQ,QAA3C,yBAAmB,AAAO,AAAU;;IAExC;;UAO2B;UACA;AAEzB,YAAO,AAAQ,OAAD;AACd,YAAO,AAAc,aAAD;AACpB,cAAQ,OAAO;;;;AAGX,gBAAO,QAAO;;;;AAEd,kBAAQ,aAAa;;;;;AAIjB,oBAAO,QAAO;;;;AAEd,oBAAO,cAAa;;;;;;AAGxB,kBAAQ,aAAa;;;;;AAIjB,oBAAO,QAAO;;;;AAEd,oBAAO,cAAa;;;;;IAG9B;;AAGE,cAAQ;;;;AAGuC,UAA3C,AAAkB,iCAAS,AAAO;AACkB,UAApD,AAAkB,iCAAS;AAC3B;;;;;AAGmD,UAAnD,AAAkB,iCAAS;AACkC,UAA7D,AAAkB,iCAAS,oCAAiB,AAAO;AACnD;;;IAEN;;AAI2D,MAAzD,AAAO,AAAU,qDAAqB;AACvB,MAAT;IACR;UAG0B;;AACxB,YAAO;YACL,OAAO;YACP;kBACA,kBACE,OAAO,OACP,8BACA,AAAO,mBAHY;YAHK;IAS9B;;;;;;oEApGqB;IACA,0BAAoB;IACpB,0BAAoB;;;EAmG3C","file":"../../../../../../../../../../packages/flutter/src/widgets/dual_transition_builder.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__dual_transition_builder: dual_transition_builder
  };
}));

//# sourceMappingURL=dual_transition_builder.dart.lib.js.map
