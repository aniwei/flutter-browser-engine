define(['dart_sdk', 'packages/flutter/src/gestures/lsq_solver.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__velocity_tracker_dart(dart_sdk, packages__flutter__src__gestures__lsq_solver$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lsq_solver = packages__flutter__src__gestures__lsq_solver$46dart.src__gestures__lsq_solver;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var velocity_tracker = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $toDouble = dartx.toDouble;
  var $abs = dartx.abs;
  var $add = dartx.add;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  var T = {
    _PointAtTimeN: () => (T._PointAtTimeN = dart.constFn(dart.nullable(velocity_tracker._PointAtTime)))(),
    ListOf_PointAtTimeN: () => (T.ListOf_PointAtTimeN = dart.constFn(core.List$(T._PointAtTimeN())))(),
    JSArrayOfdouble: () => (T.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [pixelsPerSecond$]: C[1] || CT.C1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_Enum__name]: "touch",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: velocity_tracker.VelocityEstimate.prototype,
        [offset$]: C[1] || CT.C1,
        [duration$]: C[4] || CT.C4,
        [confidence$]: 0,
        [pixelsPerSecond$0]: C[1] || CT.C1
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/velocity_tracker.dart",
    "package:flutter/src/gestures/velocity_tracker.dart"
  ];
  var pixelsPerSecond$ = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  velocity_tracker.Velocity = class Velocity extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    static ['_#new#tearOff'](opts) {
      let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
      return new velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond});
    }
    _negate() {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond._negate()});
    }
    ['-'](other) {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['-'](other.pixelsPerSecond)});
    }
    ['+'](other) {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['+'](other.pixelsPerSecond)});
    }
    clampMagnitude(minValue, maxValue) {
      if (!(minValue !== null && minValue >= 0.0)) dart.assertFailed(null, I[0], 53, 12, "minValue != null && minValue >= 0.0");
      if (!(maxValue !== null && maxValue >= 0.0 && maxValue >= minValue)) dart.assertFailed(null, I[0], 54, 12, "maxValue != null && maxValue >= 0.0 && maxValue >= minValue");
      let valueSquared = this.pixelsPerSecond.distanceSquared;
      if (valueSquared > maxValue * maxValue) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](maxValue)});
      if (valueSquared < minValue * minValue) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](minValue)});
      return this;
    }
    _equals(other) {
      if (other == null) return false;
      return velocity_tracker.Velocity.is(other) && other.pixelsPerSecond._equals(this.pixelsPerSecond);
    }
    get hashCode() {
      return this.pixelsPerSecond.hashCode;
    }
    toString() {
      return "Velocity(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.Velocity.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    this[pixelsPerSecond$] = pixelsPerSecond;
    if (!(pixelsPerSecond !== null)) dart.assertFailed(null, I[0], 21, 15, "pixelsPerSecond != null");
    ;
  }).prototype = velocity_tracker.Velocity.prototype;
  dart.addTypeTests(velocity_tracker.Velocity);
  dart.addTypeCaches(velocity_tracker.Velocity);
  dart.setMethodSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getMethods(velocity_tracker.Velocity.__proto__),
    _negate: dart.fnType(velocity_tracker.Velocity, []),
    '-': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    '+': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    clampMagnitude: dart.fnType(velocity_tracker.Velocity, [core.double, core.double])
  }));
  dart.setLibraryUri(velocity_tracker.Velocity, I[1]);
  dart.setFieldSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getFields(velocity_tracker.Velocity.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset)
  }));
  dart.setStaticFieldSignature(velocity_tracker.Velocity, () => ['zero']);
  dart.defineExtensionMethods(velocity_tracker.Velocity, ['_equals', 'toString']);
  dart.defineExtensionAccessors(velocity_tracker.Velocity, ['hashCode']);
  dart.defineLazy(velocity_tracker.Velocity, {
    /*velocity_tracker.Velocity.zero*/get zero() {
      return C[0] || CT.C0;
    }
  }, false);
  var pixelsPerSecond$0 = dart.privateName(velocity_tracker, "VelocityEstimate.pixelsPerSecond");
  var confidence$ = dart.privateName(velocity_tracker, "VelocityEstimate.confidence");
  var duration$ = dart.privateName(velocity_tracker, "VelocityEstimate.duration");
  var offset$ = dart.privateName(velocity_tracker, "VelocityEstimate.offset");
  velocity_tracker.VelocityEstimate = class VelocityEstimate extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$0];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    get confidence() {
      return this[confidence$];
    }
    set confidence(value) {
      super.confidence = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    static ['_#new#tearOff'](opts) {
      let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
      let confidence = opts && 'confidence' in opts ? opts.confidence : null;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: pixelsPerSecond, confidence: confidence, duration: duration, offset: offset});
    }
    toString() {
      return "VelocityEstimate(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + "; offset: " + dart.str(this.offset) + ", duration: " + dart.str(this.duration) + ", confidence: " + this.confidence[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.VelocityEstimate.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    let confidence = opts && 'confidence' in opts ? opts.confidence : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    this[pixelsPerSecond$0] = pixelsPerSecond;
    this[confidence$] = confidence;
    this[duration$] = duration;
    this[offset$] = offset;
    if (!(pixelsPerSecond !== null)) dart.assertFailed(null, I[0], 98, 15, "pixelsPerSecond != null");
    if (!(confidence !== null)) dart.assertFailed(null, I[0], 99, 15, "confidence != null");
    if (!(duration !== null)) dart.assertFailed(null, I[0], 100, 15, "duration != null");
    if (!(offset !== null)) dart.assertFailed(null, I[0], 101, 15, "offset != null");
    ;
  }).prototype = velocity_tracker.VelocityEstimate.prototype;
  dart.addTypeTests(velocity_tracker.VelocityEstimate);
  dart.addTypeCaches(velocity_tracker.VelocityEstimate);
  dart.setLibraryUri(velocity_tracker.VelocityEstimate, I[1]);
  dart.setFieldSignature(velocity_tracker.VelocityEstimate, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityEstimate.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset),
    confidence: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    offset: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.VelocityEstimate, ['toString']);
  var time$ = dart.privateName(velocity_tracker, "_PointAtTime.time");
  var point$ = dart.privateName(velocity_tracker, "_PointAtTime.point");
  velocity_tracker._PointAtTime = class _PointAtTime extends core.Object {
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get point() {
      return this[point$];
    }
    set point(value) {
      super.point = value;
    }
    static ['_#new#tearOff'](point, time) {
      return new velocity_tracker._PointAtTime.new(point, time);
    }
    toString() {
      return "_PointAtTime(" + dart.str(this.point) + " at " + dart.str(this.time) + ")";
    }
  };
  (velocity_tracker._PointAtTime.new = function(point, time) {
    this[point$] = point;
    this[time$] = time;
    if (!(point !== null)) dart.assertFailed(null, I[0], 126, 14, "point != null");
    if (!(time !== null)) dart.assertFailed(null, I[0], 127, 14, "time != null");
    ;
  }).prototype = velocity_tracker._PointAtTime.prototype;
  dart.addTypeTests(velocity_tracker._PointAtTime);
  dart.addTypeCaches(velocity_tracker._PointAtTime);
  dart.setLibraryUri(velocity_tracker._PointAtTime, I[1]);
  dart.setFieldSignature(velocity_tracker._PointAtTime, () => ({
    __proto__: dart.getFields(velocity_tracker._PointAtTime.__proto__),
    time: dart.finalFieldType(core.Duration),
    point: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker._PointAtTime, ['toString']);
  var kind$ = dart.privateName(velocity_tracker, "VelocityTracker.kind");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _samples = dart.privateName(velocity_tracker, "_samples");
  var _index = dart.privateName(velocity_tracker, "_index");
  velocity_tracker.VelocityTracker = class VelocityTracker extends core.Object {
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    static ['_#new#tearOff'](kind = C[2] || CT.C2) {
      return new velocity_tracker.VelocityTracker.new(kind);
    }
    static ['_#withKind#tearOff'](kind) {
      return new velocity_tracker.VelocityTracker.withKind(kind);
    }
    addPosition(time, position) {
      this[_index] = this[_index] + 1;
      if (this[_index] === 20) this[_index] = 0;
      this[_samples][$_set](this[_index], new velocity_tracker._PointAtTime.new(position, time));
    }
    getVelocityEstimate() {
      let x = T.JSArrayOfdouble().of([]);
      let y = T.JSArrayOfdouble().of([]);
      let w = T.JSArrayOfdouble().of([]);
      let time = T.JSArrayOfdouble().of([]);
      let sampleCount = 0;
      let index = this[_index];
      let newestSample = this[_samples][$_get](index);
      if (newestSample == null) return null;
      let previousSample = newestSample;
      let oldestSample = newestSample;
      do {
        let sample = this[_samples][$_get](index);
        if (sample == null) break;
        let age = newestSample.time['-'](sample.time).inMicroseconds[$toDouble]() / 1000;
        let delta = sample.time['-'](previousSample.time).inMicroseconds[$abs]()[$toDouble]() / 1000;
        previousSample = sample;
        if (age > 100 || delta > 40) break;
        oldestSample = sample;
        let position = sample.point;
        x[$add](position.dx);
        y[$add](position.dy);
        w[$add](1.0);
        time[$add](-age);
        index = (index === 0 ? 20 : index) - 1;
        sampleCount = sampleCount + 1;
      } while (sampleCount < 20);
      if (sampleCount >= 3) {
        let xSolver = new lsq_solver.LeastSquaresSolver.new(time, x, w);
        let xFit = xSolver.solve(2);
        if (xFit != null) {
          let ySolver = new lsq_solver.LeastSquaresSolver.new(time, y, w);
          let yFit = ySolver.solve(2);
          if (yFit != null) {
            return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: new ui.Offset.new(xFit.coefficients[$_get](1) * 1000, yFit.coefficients[$_get](1) * 1000), confidence: xFit.confidence * yFit.confidence, duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
          }
        }
      }
      return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: ui.Offset.zero, confidence: 1.0, duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
    }
    getVelocity() {
      let estimate = this.getVelocityEstimate();
      if (estimate == null || estimate.pixelsPerSecond._equals(ui.Offset.zero)) return velocity_tracker.Velocity.zero;
      return new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
    }
  };
  (velocity_tracker.VelocityTracker.new = function(kind = C[2] || CT.C2) {
    this[_samples] = T.ListOf_PointAtTimeN().filled(20, null);
    this[_index] = 0;
    this[kind$] = kind;
    ;
  }).prototype = velocity_tracker.VelocityTracker.prototype;
  (velocity_tracker.VelocityTracker.withKind = function(kind) {
    this[_samples] = T.ListOf_PointAtTimeN().filled(20, null);
    this[_index] = 0;
    this[kind$] = kind;
    ;
  }).prototype = velocity_tracker.VelocityTracker.prototype;
  dart.addTypeTests(velocity_tracker.VelocityTracker);
  dart.addTypeCaches(velocity_tracker.VelocityTracker);
  dart.setMethodSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getMethods(velocity_tracker.VelocityTracker.__proto__),
    addPosition: dart.fnType(dart.void, [core.Duration, ui.Offset]),
    getVelocityEstimate: dart.fnType(dart.nullable(velocity_tracker.VelocityEstimate), []),
    getVelocity: dart.fnType(velocity_tracker.Velocity, [])
  }));
  dart.setLibraryUri(velocity_tracker.VelocityTracker, I[1]);
  dart.setFieldSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityTracker.__proto__),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    [_samples]: dart.finalFieldType(core.List$(dart.nullable(velocity_tracker._PointAtTime))),
    [_index]: dart.fieldType(core.int)
  }));
  dart.setStaticFieldSignature(velocity_tracker.VelocityTracker, () => ['_assumePointerMoveStoppedMilliseconds', '_historySize', '_horizonMilliseconds', '_minSampleSize']);
  dart.defineLazy(velocity_tracker.VelocityTracker, {
    /*velocity_tracker.VelocityTracker._assumePointerMoveStoppedMilliseconds*/get _assumePointerMoveStoppedMilliseconds() {
      return 40;
    },
    /*velocity_tracker.VelocityTracker._historySize*/get _historySize() {
      return 20;
    },
    /*velocity_tracker.VelocityTracker._horizonMilliseconds*/get _horizonMilliseconds() {
      return 100;
    },
    /*velocity_tracker.VelocityTracker._minSampleSize*/get _minSampleSize() {
      return 3;
    }
  }, false);
  var _touchSamples = dart.privateName(velocity_tracker, "_touchSamples");
  var _previousVelocityAt = dart.privateName(velocity_tracker, "_previousVelocityAt");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  velocity_tracker.IOSScrollViewFlingVelocityTracker = class IOSScrollViewFlingVelocityTracker extends velocity_tracker.VelocityTracker {
    static ['_#new#tearOff'](kind) {
      return new velocity_tracker.IOSScrollViewFlingVelocityTracker.new(kind);
    }
    addPosition(time, position) {
      if (!dart.fn(() => {
        let previousPoint = this[_touchSamples][$_get](this[_index]);
        if (previousPoint == null || previousPoint.time['<='](time)) return true;
        dart.throw(assertions.FlutterError.new("The position being added (" + dart.str(position) + ") has a smaller timestamp (" + dart.str(time) + ") " + "than its predecessor: " + dart.str(previousPoint) + "."));
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 299, 12, "() {\n      final _PointAtTime? previousPoint = _touchSamples[_index];\n      if (previousPoint == null || previousPoint.time <= time)\n        return true;\n      throw FlutterError(\n        'The position being added ($position) has a smaller timestamp ($time) '\n        'than its predecessor: $previousPoint.',\n      );\n    }()");
      this[_index] = (this[_index] + 1)[$modulo](20);
      this[_touchSamples][$_set](this[_index], new velocity_tracker._PointAtTime.new(position, time));
    }
    [_previousVelocityAt](index) {
      let endIndex = (this[_index] + index)[$modulo](20);
      let startIndex = (this[_index] + index - 1)[$modulo](20);
      let end = this[_touchSamples][$_get](endIndex);
      let start = this[_touchSamples][$_get](startIndex);
      if (end == null || start == null) {
        return ui.Offset.zero;
      }
      let dt = end.time['-'](start.time).inMicroseconds;
      if (!(dt >= 0)) dart.assertFailed(null, I[0], 326, 12, "dt >= 0");
      return dt > 0 ? end.point['-'](start.point)['*'](1000.0)['/'](dt[$toDouble]() / 1000) : ui.Offset.zero;
    }
    getVelocityEstimate() {
      let estimatedVelocity = this[_previousVelocityAt](-2)['*'](0.6)['+'](this[_previousVelocityAt](-1)['*'](0.35))['+'](this[_previousVelocityAt](0)['*'](0.05));
      let newestSample = this[_touchSamples][$_get](this[_index]);
      let oldestNonNullSample = null;
      for (let i = 1; i <= 20; i = i + 1) {
        oldestNonNullSample = this[_touchSamples][$_get]((this[_index] + i)[$modulo](20));
        if (oldestNonNullSample != null) break;
      }
      if (oldestNonNullSample == null || newestSample == null) {
        if (!false) dart.assertFailed("There must be at least 1 point in _touchSamples: " + dart.str(this[_touchSamples]), I[0], 356, 14, "false");
        return C[3] || CT.C3;
      } else {
        return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: estimatedVelocity, confidence: 1.0, duration: newestSample.time['-'](oldestNonNullSample.time), offset: newestSample.point['-'](oldestNonNullSample.point)});
      }
    }
  };
  (velocity_tracker.IOSScrollViewFlingVelocityTracker.new = function(kind) {
    this[_touchSamples] = T.ListOf_PointAtTimeN().filled(20, null);
    velocity_tracker.IOSScrollViewFlingVelocityTracker.__proto__.withKind.call(this, kind);
    ;
  }).prototype = velocity_tracker.IOSScrollViewFlingVelocityTracker.prototype;
  dart.addTypeTests(velocity_tracker.IOSScrollViewFlingVelocityTracker);
  dart.addTypeCaches(velocity_tracker.IOSScrollViewFlingVelocityTracker);
  dart.setMethodSignature(velocity_tracker.IOSScrollViewFlingVelocityTracker, () => ({
    __proto__: dart.getMethods(velocity_tracker.IOSScrollViewFlingVelocityTracker.__proto__),
    [_previousVelocityAt]: dart.fnType(ui.Offset, [core.int]),
    getVelocityEstimate: dart.fnType(velocity_tracker.VelocityEstimate, [])
  }));
  dart.setLibraryUri(velocity_tracker.IOSScrollViewFlingVelocityTracker, I[1]);
  dart.setFieldSignature(velocity_tracker.IOSScrollViewFlingVelocityTracker, () => ({
    __proto__: dart.getFields(velocity_tracker.IOSScrollViewFlingVelocityTracker.__proto__),
    [_touchSamples]: dart.finalFieldType(core.List$(dart.nullable(velocity_tracker._PointAtTime)))
  }));
  dart.setStaticFieldSignature(velocity_tracker.IOSScrollViewFlingVelocityTracker, () => ['_sampleSize']);
  dart.defineLazy(velocity_tracker.IOSScrollViewFlingVelocityTracker, {
    /*velocity_tracker.IOSScrollViewFlingVelocityTracker._sampleSize*/get _sampleSize() {
      return 20;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/velocity_tracker.dart", {
    "package:flutter/src/gestures/velocity_tracker.dart": velocity_tracker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["velocity_tracker.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/velocity_tracker.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__velocity_tracker: velocity_tracker
  };
}));

//# sourceMappingURL=velocity_tracker.dart.lib.js.map
