define(['dart_sdk', 'packages/flutter/src/physics/tolerance.dart', 'packages/flutter/src/physics/friction_simulation.dart', 'packages/flutter/src/physics/spring_simulation.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/physics/simulation.dart'], (function load__packages__flutter__src__widgets__scroll_simulation_dart(dart_sdk, packages__flutter__src__physics__tolerance$46dart, packages__flutter__src__physics__friction_simulation$46dart, packages__flutter__src__physics__spring_simulation$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__physics__simulation$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  const friction_simulation = packages__flutter__src__physics__friction_simulation$46dart.src__physics__friction_simulation;
  const spring_simulation = packages__flutter__src__physics__spring_simulation$46dart.src__physics__spring_simulation;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const simulation = packages__flutter__src__physics__simulation$46dart.src__physics__simulation;
  var scroll_simulation = Object.create(dart.library);
  var $isFinite = dartx.isFinite;
  var $abs = dartx.abs;
  var $clamp = dartx.clamp;
  var $sign = dartx.sign;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 0.001,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.001
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/scroll_simulation.dart",
    "package:flutter/src/widgets/scroll_simulation.dart"
  ];
  var leadingExtent$ = dart.privateName(scroll_simulation, "BouncingScrollSimulation.leadingExtent");
  var trailingExtent$ = dart.privateName(scroll_simulation, "BouncingScrollSimulation.trailingExtent");
  var spring$ = dart.privateName(scroll_simulation, "BouncingScrollSimulation.spring");
  var Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  var Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  var Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  var __BouncingScrollSimulation__frictionSimulation = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_frictionSimulation");
  var __BouncingScrollSimulation__springSimulation = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_springSimulation");
  var __BouncingScrollSimulation__springTime = dart.privateName(scroll_simulation, "_#BouncingScrollSimulation#_springTime");
  var _timeOffset = dart.privateName(scroll_simulation, "_timeOffset");
  var _springSimulation = dart.privateName(scroll_simulation, "_springSimulation");
  var _underscrollSimulation = dart.privateName(scroll_simulation, "_underscrollSimulation");
  var _springTime = dart.privateName(scroll_simulation, "_springTime");
  var _overscrollSimulation = dart.privateName(scroll_simulation, "_overscrollSimulation");
  var _frictionSimulation = dart.privateName(scroll_simulation, "_frictionSimulation");
  var _simulation = dart.privateName(scroll_simulation, "_simulation");
  scroll_simulation.BouncingScrollSimulation = class BouncingScrollSimulation extends simulation.Simulation {
    get leadingExtent() {
      return this[leadingExtent$];
    }
    set leadingExtent(value) {
      super.leadingExtent = value;
    }
    get trailingExtent() {
      return this[trailingExtent$];
    }
    set trailingExtent(value) {
      super.trailingExtent = value;
    }
    get spring() {
      return this[spring$];
    }
    set spring(value) {
      super.spring = value;
    }
    static ['_#new#tearOff'](opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let velocity = opts && 'velocity' in opts ? opts.velocity : null;
      let leadingExtent = opts && 'leadingExtent' in opts ? opts.leadingExtent : null;
      let trailingExtent = opts && 'trailingExtent' in opts ? opts.trailingExtent : null;
      let spring = opts && 'spring' in opts ? opts.spring : null;
      let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C[0] || CT.C0;
      return new scroll_simulation.BouncingScrollSimulation.new({position: position, velocity: velocity, leadingExtent: leadingExtent, trailingExtent: trailingExtent, spring: spring, tolerance: tolerance});
    }
    get [_frictionSimulation]() {
      let t0;
      t0 = this[__BouncingScrollSimulation__frictionSimulation];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_frictionSimulation")) : t0;
    }
    set [_frictionSimulation](t0) {
      this[__BouncingScrollSimulation__frictionSimulation] = t0;
    }
    get [_springSimulation]() {
      let t1;
      t1 = this[__BouncingScrollSimulation__springSimulation];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_springSimulation")) : t1;
    }
    set [_springSimulation](t1) {
      this[__BouncingScrollSimulation__springSimulation] = t1;
    }
    get [_springTime]() {
      let t2;
      t2 = this[__BouncingScrollSimulation__springTime];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_springTime")) : t2;
    }
    set [_springTime](t2) {
      this[__BouncingScrollSimulation__springTime] = t2;
    }
    [_underscrollSimulation](x, dx) {
      return new spring_simulation.ScrollSpringSimulation.new(this.spring, x, this.leadingExtent, dx);
    }
    [_overscrollSimulation](x, dx) {
      return new spring_simulation.ScrollSpringSimulation.new(this.spring, x, this.trailingExtent, dx);
    }
    [_simulation](time) {
      let t3;
      let simulation = null;
      if (time > this[_springTime]) {
        this[_timeOffset] = this[_springTime][$isFinite] ? this[_springTime] : 0.0;
        simulation = this[_springSimulation];
      } else {
        this[_timeOffset] = 0.0;
        simulation = this[_frictionSimulation];
      }
      t3 = simulation;
      return (() => {
        t3.tolerance = this.tolerance;
        return t3;
      })();
    }
    x(time) {
      return this[_simulation](time).x(time - this[_timeOffset]);
    }
    dx(time) {
      return this[_simulation](time).dx(time - this[_timeOffset]);
    }
    isDone(time) {
      return this[_simulation](time).isDone(time - this[_timeOffset]);
    }
    toString() {
      return object.objectRuntimeType(this, "BouncingScrollSimulation") + "(leadingExtent: " + dart.str(this.leadingExtent) + ", trailingExtent: " + dart.str(this.trailingExtent) + ")";
    }
  };
  (scroll_simulation.BouncingScrollSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : null;
    let leadingExtent = opts && 'leadingExtent' in opts ? opts.leadingExtent : null;
    let trailingExtent = opts && 'trailingExtent' in opts ? opts.trailingExtent : null;
    let spring = opts && 'spring' in opts ? opts.spring : null;
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C[0] || CT.C0;
    this[__BouncingScrollSimulation__frictionSimulation] = null;
    this[__BouncingScrollSimulation__springSimulation] = null;
    this[__BouncingScrollSimulation__springTime] = null;
    this[_timeOffset] = 0.0;
    this[leadingExtent$] = leadingExtent;
    this[trailingExtent$] = trailingExtent;
    this[spring$] = spring;
    if (!(position !== null)) dart.assertFailed(null, I[0], 38, 15, "position != null");
    if (!(velocity !== null)) dart.assertFailed(null, I[0], 39, 15, "velocity != null");
    if (!(leadingExtent !== null)) dart.assertFailed(null, I[0], 40, 15, "leadingExtent != null");
    if (!(trailingExtent !== null)) dart.assertFailed(null, I[0], 41, 15, "trailingExtent != null");
    if (!(leadingExtent <= trailingExtent)) dart.assertFailed(null, I[0], 42, 15, "leadingExtent <= trailingExtent");
    if (!(spring !== null)) dart.assertFailed(null, I[0], 43, 15, "spring != null");
    scroll_simulation.BouncingScrollSimulation.__proto__.new.call(this, {tolerance: tolerance});
    if (position < this.leadingExtent) {
      this[_springSimulation] = this[_underscrollSimulation](position, velocity);
      this[_springTime] = -1 / 0;
    } else if (position > this.trailingExtent) {
      this[_springSimulation] = this[_overscrollSimulation](position, velocity);
      this[_springTime] = -1 / 0;
    } else {
      this[_frictionSimulation] = new friction_simulation.FrictionSimulation.new(0.135, position, velocity);
      let finalX = this[_frictionSimulation].finalX;
      if (velocity > 0.0 && finalX > this.trailingExtent) {
        this[_springTime] = this[_frictionSimulation].timeAtX(this.trailingExtent);
        this[_springSimulation] = this[_overscrollSimulation](this.trailingExtent, math.min(core.double, this[_frictionSimulation].dx(this[_springTime]), 5000));
        if (!this[_springTime][$isFinite]) dart.assertFailed(null, I[0], 62, 16, "_springTime.isFinite");
      } else if (velocity < 0.0 && finalX < this.leadingExtent) {
        this[_springTime] = this[_frictionSimulation].timeAtX(this.leadingExtent);
        this[_springSimulation] = this[_underscrollSimulation](this.leadingExtent, math.min(core.double, this[_frictionSimulation].dx(this[_springTime]), 5000));
        if (!this[_springTime][$isFinite]) dart.assertFailed(null, I[0], 69, 16, "_springTime.isFinite");
      } else {
        this[_springTime] = 1 / 0;
      }
    }
    if (!(this[_springTime] !== null)) dart.assertFailed(null, I[0], 74, 12, "_springTime != null");
  }).prototype = scroll_simulation.BouncingScrollSimulation.prototype;
  dart.addTypeTests(scroll_simulation.BouncingScrollSimulation);
  dart.addTypeCaches(scroll_simulation.BouncingScrollSimulation);
  dart.setMethodSignature(scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getMethods(scroll_simulation.BouncingScrollSimulation.__proto__),
    [_underscrollSimulation]: dart.fnType(simulation.Simulation, [core.double, core.double]),
    [_overscrollSimulation]: dart.fnType(simulation.Simulation, [core.double, core.double]),
    [_simulation]: dart.fnType(simulation.Simulation, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getGetters(scroll_simulation.BouncingScrollSimulation.__proto__),
    [_frictionSimulation]: friction_simulation.FrictionSimulation,
    [_springSimulation]: simulation.Simulation,
    [_springTime]: core.double
  }));
  dart.setSetterSignature(scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getSetters(scroll_simulation.BouncingScrollSimulation.__proto__),
    [_frictionSimulation]: friction_simulation.FrictionSimulation,
    [_springSimulation]: simulation.Simulation,
    [_springTime]: core.double
  }));
  dart.setLibraryUri(scroll_simulation.BouncingScrollSimulation, I[1]);
  dart.setFieldSignature(scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getFields(scroll_simulation.BouncingScrollSimulation.__proto__),
    leadingExtent: dart.finalFieldType(core.double),
    trailingExtent: dart.finalFieldType(core.double),
    spring: dart.finalFieldType(spring_simulation.SpringDescription),
    [__BouncingScrollSimulation__frictionSimulation]: dart.fieldType(dart.nullable(friction_simulation.FrictionSimulation)),
    [__BouncingScrollSimulation__springSimulation]: dart.fieldType(dart.nullable(simulation.Simulation)),
    [__BouncingScrollSimulation__springTime]: dart.fieldType(dart.nullable(core.double)),
    [_timeOffset]: dart.fieldType(core.double)
  }));
  dart.setStaticFieldSignature(scroll_simulation.BouncingScrollSimulation, () => ['maxSpringTransferVelocity']);
  dart.defineExtensionMethods(scroll_simulation.BouncingScrollSimulation, ['toString']);
  dart.defineLazy(scroll_simulation.BouncingScrollSimulation, {
    /*scroll_simulation.BouncingScrollSimulation.maxSpringTransferVelocity*/get maxSpringTransferVelocity() {
      return 5000;
    }
  }, false);
  var position$ = dart.privateName(scroll_simulation, "ClampingScrollSimulation.position");
  var velocity$ = dart.privateName(scroll_simulation, "ClampingScrollSimulation.velocity");
  var friction$ = dart.privateName(scroll_simulation, "ClampingScrollSimulation.friction");
  var __ClampingScrollSimulation__duration = dart.privateName(scroll_simulation, "_#ClampingScrollSimulation#_duration");
  var __ClampingScrollSimulation__distance = dart.privateName(scroll_simulation, "_#ClampingScrollSimulation#_distance");
  var _duration = dart.privateName(scroll_simulation, "_duration");
  var _flingDuration = dart.privateName(scroll_simulation, "_flingDuration");
  var _distance = dart.privateName(scroll_simulation, "_distance");
  scroll_simulation.ClampingScrollSimulation = class ClampingScrollSimulation extends simulation.Simulation {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get friction() {
      return this[friction$];
    }
    set friction(value) {
      super.friction = value;
    }
    static ['_#new#tearOff'](opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let velocity = opts && 'velocity' in opts ? opts.velocity : null;
      let friction = opts && 'friction' in opts ? opts.friction : 0.015;
      let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C[0] || CT.C0;
      return new scroll_simulation.ClampingScrollSimulation.new({position: position, velocity: velocity, friction: friction, tolerance: tolerance});
    }
    get [_duration]() {
      let t3;
      t3 = this[__ClampingScrollSimulation__duration];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_duration")) : t3;
    }
    set [_duration](t3) {
      this[__ClampingScrollSimulation__duration] = t3;
    }
    get [_distance]() {
      let t4;
      t4 = this[__ClampingScrollSimulation__distance];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_distance")) : t4;
    }
    set [_distance](t4) {
      this[__ClampingScrollSimulation__distance] = t4;
    }
    static _decelerationForFriction(friction) {
      return friction * 61774.04968;
    }
    [_flingDuration](velocity) {
      let scaledFriction = this.friction * scroll_simulation.ClampingScrollSimulation._decelerationForFriction(0.84);
      let deceleration = math.log(0.35 * velocity[$abs]() / scaledFriction);
      return math.exp(deceleration / (scroll_simulation.ClampingScrollSimulation._kDecelerationRate - 1.0));
    }
    static _flingDistancePenetration(t) {
      return 1.2 * t * t * t - 3.27 * t * t + 3.065 * t;
    }
    static _flingVelocityPenetration(t) {
      return 3.6 * t * t - 6.54 * t + 3.065;
    }
    x(time) {
      let t = (time / this[_duration])[$clamp](0.0, 1.0);
      return this.position + this[_distance] * scroll_simulation.ClampingScrollSimulation._flingDistancePenetration(t) * this.velocity[$sign];
    }
    dx(time) {
      let t = (time / this[_duration])[$clamp](0.0, 1.0);
      return this[_distance] * scroll_simulation.ClampingScrollSimulation._flingVelocityPenetration(t) * this.velocity[$sign] / this[_duration];
    }
    isDone(time) {
      return time >= this[_duration];
    }
  };
  (scroll_simulation.ClampingScrollSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : null;
    let friction = opts && 'friction' in opts ? opts.friction : 0.015;
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C[0] || CT.C0;
    this[__ClampingScrollSimulation__duration] = null;
    this[__ClampingScrollSimulation__distance] = null;
    this[position$] = position;
    this[velocity$] = velocity;
    this[friction$] = friction;
    if (!(scroll_simulation.ClampingScrollSimulation._flingVelocityPenetration(0.0) === 3.065)) dart.assertFailed(null, I[0], 150, 15, "_flingVelocityPenetration(0.0) == _initialVelocityPenetration");
    scroll_simulation.ClampingScrollSimulation.__proto__.new.call(this, {tolerance: tolerance});
    this[_duration] = this[_flingDuration](this.velocity);
    this[_distance] = (this.velocity * this[_duration] / 3.065)[$abs]();
  }).prototype = scroll_simulation.ClampingScrollSimulation.prototype;
  dart.addTypeTests(scroll_simulation.ClampingScrollSimulation);
  dart.addTypeCaches(scroll_simulation.ClampingScrollSimulation);
  dart.setMethodSignature(scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getMethods(scroll_simulation.ClampingScrollSimulation.__proto__),
    [_flingDuration]: dart.fnType(core.double, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setStaticMethodSignature(scroll_simulation.ClampingScrollSimulation, () => ['_decelerationForFriction', '_flingDistancePenetration', '_flingVelocityPenetration']);
  dart.setGetterSignature(scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getGetters(scroll_simulation.ClampingScrollSimulation.__proto__),
    [_duration]: core.double,
    [_distance]: core.double
  }));
  dart.setSetterSignature(scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getSetters(scroll_simulation.ClampingScrollSimulation.__proto__),
    [_duration]: core.double,
    [_distance]: core.double
  }));
  dart.setLibraryUri(scroll_simulation.ClampingScrollSimulation, I[1]);
  dart.setFieldSignature(scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getFields(scroll_simulation.ClampingScrollSimulation.__proto__),
    position: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double),
    friction: dart.finalFieldType(core.double),
    [__ClampingScrollSimulation__duration]: dart.fieldType(dart.nullable(core.double)),
    [__ClampingScrollSimulation__distance]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.setStaticFieldSignature(scroll_simulation.ClampingScrollSimulation, () => ['_kDecelerationRate', '_initialVelocityPenetration']);
  dart.defineLazy(scroll_simulation.ClampingScrollSimulation, {
    /*scroll_simulation.ClampingScrollSimulation._kDecelerationRate*/get _kDecelerationRate() {
      return math.log(0.78) / math.log(0.9);
    },
    /*scroll_simulation.ClampingScrollSimulation._initialVelocityPenetration*/get _initialVelocityPenetration() {
      return 3.065;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/widgets/scroll_simulation.dart", {
    "package:flutter/src/widgets/scroll_simulation.dart": scroll_simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_simulation.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/scroll_simulation.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__scroll_simulation: scroll_simulation
  };
}));

//# sourceMappingURL=scroll_simulation.dart.lib.js.map
