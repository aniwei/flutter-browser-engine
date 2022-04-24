define(['dart_sdk', 'packages/flutter/src/physics/tolerance.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/physics/simulation.dart'], (function load__packages__flutter__src__physics__friction_simulation_dart(dart_sdk, packages__flutter__src__physics__tolerance$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__physics__simulation$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tolerance = packages__flutter__src__physics__tolerance$46dart.src__physics__tolerance;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const simulation = packages__flutter__src__physics__simulation$46dart.src__physics__simulation;
  var friction_simulation = Object.create(dart.library);
  var $sign = dartx.sign;
  var $abs = dartx.abs;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $clamp = dartx.clamp;
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
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/physics/friction_simulation.dart",
    "package:flutter/src/physics/friction_simulation.dart"
  ];
  var Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  var Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  var Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  var _drag = dart.privateName(friction_simulation, "_drag");
  var _dragLog = dart.privateName(friction_simulation, "_dragLog");
  var _x = dart.privateName(friction_simulation, "_x");
  var _v = dart.privateName(friction_simulation, "_v");
  friction_simulation.FrictionSimulation = class FrictionSimulation extends simulation.Simulation {
    static ['_#new#tearOff'](drag, position, velocity, opts) {
      let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C[0] || CT.C0;
      return new friction_simulation.FrictionSimulation.new(drag, position, velocity, {tolerance: tolerance});
    }
    static through(startPosition, endPosition, startVelocity, endVelocity) {
      if (!(startVelocity === 0.0 || endVelocity === 0.0 || startVelocity[$sign] === endVelocity[$sign])) dart.assertFailed(null, I[0], 46, 12, "startVelocity == 0.0 || endVelocity == 0.0 || startVelocity.sign == endVelocity.sign");
      if (!(startVelocity[$abs]() >= endVelocity[$abs]())) dart.assertFailed(null, I[0], 47, 12, "startVelocity.abs() >= endVelocity.abs()");
      if (!((endPosition - startPosition)[$sign] === startVelocity[$sign])) dart.assertFailed(null, I[0], 48, 12, "(endPosition - startPosition).sign == startVelocity.sign");
      return new friction_simulation.FrictionSimulation.new(friction_simulation.FrictionSimulation._dragFor(startPosition, endPosition, startVelocity, endVelocity), startPosition, startVelocity, {tolerance: new tolerance.Tolerance.new({velocity: endVelocity[$abs]()})});
    }
    static ['_#through#tearOff'](startPosition, endPosition, startVelocity, endVelocity) {
      return friction_simulation.FrictionSimulation.through(startPosition, endPosition, startVelocity, endVelocity);
    }
    static _dragFor(startPosition, endPosition, startVelocity, endVelocity) {
      return math.pow(2.718281828459045, (startVelocity - endVelocity) / (startPosition - endPosition));
    }
    x(time) {
      return this[_x] + this[_v] * math.pow(this[_drag], time) / this[_dragLog] - this[_v] / this[_dragLog];
    }
    dx(time) {
      return this[_v] * math.pow(this[_drag], time);
    }
    get finalX() {
      return this[_x] - this[_v] / this[_dragLog];
    }
    timeAtX(x) {
      if (x === this[_x]) return 0.0;
      if (this[_v] === 0.0 || (this[_v] > 0 ? x < this[_x] || x > this.finalX : x > this[_x] || x < this.finalX)) return 1 / 0;
      return math.log(this[_dragLog] * (x - this[_x]) / this[_v] + 1.0) / this[_dragLog];
    }
    isDone(time) {
      return this.dx(time)[$abs]() < this.tolerance.velocity;
    }
    toString() {
      return object.objectRuntimeType(this, "FrictionSimulation") + "(cₓ: " + this[_drag][$toStringAsFixed](1) + ", x₀: " + this[_x][$toStringAsFixed](1) + ", dx₀: " + this[_v][$toStringAsFixed](1) + ")";
    }
  };
  (friction_simulation.FrictionSimulation.new = function(drag, position, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C[0] || CT.C0;
    this[_drag] = drag;
    this[_dragLog] = math.log(drag);
    this[_x] = position;
    this[_v] = velocity;
    friction_simulation.FrictionSimulation.__proto__.new.call(this, {tolerance: tolerance});
    ;
  }).prototype = friction_simulation.FrictionSimulation.prototype;
  dart.addTypeTests(friction_simulation.FrictionSimulation);
  dart.addTypeCaches(friction_simulation.FrictionSimulation);
  dart.setMethodSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getMethods(friction_simulation.FrictionSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    timeAtX: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setStaticMethodSignature(friction_simulation.FrictionSimulation, () => ['through', '_dragFor']);
  dart.setGetterSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getGetters(friction_simulation.FrictionSimulation.__proto__),
    finalX: core.double
  }));
  dart.setLibraryUri(friction_simulation.FrictionSimulation, I[1]);
  dart.setFieldSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getFields(friction_simulation.FrictionSimulation.__proto__),
    [_drag]: dart.finalFieldType(core.double),
    [_dragLog]: dart.finalFieldType(core.double),
    [_x]: dart.finalFieldType(core.double),
    [_v]: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(friction_simulation.FrictionSimulation, ['toString']);
  var _minX$ = dart.privateName(friction_simulation, "_minX");
  var _maxX$ = dart.privateName(friction_simulation, "_maxX");
  friction_simulation.BoundedFrictionSimulation = class BoundedFrictionSimulation extends friction_simulation.FrictionSimulation {
    static ['_#new#tearOff'](drag, position, velocity, _minX, _maxX) {
      return new friction_simulation.BoundedFrictionSimulation.new(drag, position, velocity, _minX, _maxX);
    }
    x(time) {
      return super.x(time)[$clamp](this[_minX$], this[_maxX$]);
    }
    isDone(time) {
      return super.isDone(time) || (this.x(time) - this[_minX$])[$abs]() < this.tolerance.distance || (this.x(time) - this[_maxX$])[$abs]() < this.tolerance.distance;
    }
    toString() {
      return object.objectRuntimeType(this, "BoundedFrictionSimulation") + "(cₓ: " + this[_drag][$toStringAsFixed](1) + ", x₀: " + this[_x][$toStringAsFixed](1) + ", dx₀: " + this[_v][$toStringAsFixed](1) + ", x: " + this[_minX$][$toStringAsFixed](1) + ".." + this[_maxX$][$toStringAsFixed](1) + ")";
    }
  };
  (friction_simulation.BoundedFrictionSimulation.new = function(drag, position, velocity, _minX, _maxX) {
    this[_minX$] = _minX;
    this[_maxX$] = _maxX;
    if (!(position[$clamp](_minX, _maxX) === position)) dart.assertFailed(null, I[0], 119, 14, "position.clamp(_minX, _maxX) == position");
    friction_simulation.BoundedFrictionSimulation.__proto__.new.call(this, drag, position, velocity);
    ;
  }).prototype = friction_simulation.BoundedFrictionSimulation.prototype;
  dart.addTypeTests(friction_simulation.BoundedFrictionSimulation);
  dart.addTypeCaches(friction_simulation.BoundedFrictionSimulation);
  dart.setLibraryUri(friction_simulation.BoundedFrictionSimulation, I[1]);
  dart.setFieldSignature(friction_simulation.BoundedFrictionSimulation, () => ({
    __proto__: dart.getFields(friction_simulation.BoundedFrictionSimulation.__proto__),
    [_minX$]: dart.finalFieldType(core.double),
    [_maxX$]: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(friction_simulation.BoundedFrictionSimulation, ['toString']);
  dart.trackLibraries("packages/flutter/src/physics/friction_simulation.dart", {
    "package:flutter/src/physics/friction_simulation.dart": friction_simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["friction_simulation.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBA4C4C,eAAsB,aAAoB,eAAsB;AACxG,YAAO,AAAc,AAA6B,aAA9B,KAAI,OAAO,AAAY,WAAD,KAAI,OAAO,AAAc,AAAK,aAAN,YAAS,AAAY,WAAD;AACtF,YAAO,AAAc,AAAM,aAAP,YAAU,AAAY,WAAD;AACzC,YAAqC,AAAK,CAAlC,AAAY,WAAD,GAAG,aAAa,aAAU,AAAc,aAAD;AAC1D,YAAO,gDACL,gDAAS,aAAa,EAAE,WAAW,EAAE,aAAa,EAAE,WAAW,GAC/D,aAAa,EACb,aAAa,cACF,uCAAoB,AAAY,WAAD;IAE9C;;;;oBAc8B,eAAsB,aAAoB,eAAsB;AAC5F,YAAY,6BAA0C,CAA7B,AAAc,aAAD,GAAG,WAAW,KAAK,AAAc,aAAD,GAAG,WAAW;IACtF;MAGgB;AAAS,YAAA,AAAG,AAAwC,YAAtC,AAAG,AAAwB,WAAjB,SAAI,aAAO,IAAI,IAAI,iBAAW,AAAG,WAAE;IAAQ;OAGlE;AAAS,YAAA,AAAG,YAAO,SAAI,aAAO,IAAI;IAAC;;AAG/B,YAAA,AAAG,YAAE,AAAG,WAAE;IAAQ;YAKjB;AACpB,UAAI,AAAE,CAAD,KAAI,UACP,MAAO;AACT,UAAI,AAAG,aAAG,QAAQ,AAAG,WAAE,IAAK,AAAE,AAAK,CAAN,GAAG,YAAM,AAAE,CAAD,GAAG,cAAW,AAAE,AAAK,CAAN,GAAG,YAAM,AAAE,CAAD,GAAG,cACjE;AACF,YAAY,AAAoC,UAAhC,AAAS,AAAW,AAAK,kBAAb,AAAE,CAAD,GAAG,YAAM,WAAK,OAAO;IACpD;WAGmB;AAAS,YAAA,AAAS,AAAM,SAAZ,IAAI,YAAU,AAAU;IAAQ;;AAG1C,YAAG,AAA6I,0BAA3H,MAAM,wBAAsB,UAAO,AAAM,8BAAgB,KAAG,WAAQ,AAAG,2BAAgB,KAAG,YAAS,AAAG,2BAAgB,KAAG;IAAE;;yDAzE5J,MACA,UACA;QACG;IACD,cAAE,IAAI;IACH,iBAAO,SAAI,IAAI;IACrB,WAAE,QAAQ;IACV,WAAE,QAAQ;AACb,gFAAiB,SAAS;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA8FhB;AACd,YAAa,AAAQ,SAAN,IAAI,UAAQ,cAAO;IACpC;WAGmB;AACjB,YAAa,AACkC,cAD3B,IAAI,KACJ,AAAM,CAAvB,AAAQ,OAAN,IAAI,IAAI,wBAAe,AAAU,2BAClB,AAAM,CAAvB,AAAQ,OAAN,IAAI,IAAI,wBAAe,AAAU;IACxC;;AAGqB,YAAG,AAAiN,0BAA/L,MAAM,+BAA6B,UAAO,AAAM,8BAAgB,KAAG,WAAQ,AAAG,2BAAgB,KAAG,YAAS,AAAG,2BAAgB,KAAG,UAAO,AAAM,+BAAgB,KAAG,OAAI,AAAM,+BAAgB,KAAG;IAAE;;gEAxBhO,MACA,UACA,UACF,OACA;IADA;IACA;UACI,AAAS,AAAoB,QAArB,SAAO,KAAK,EAAE,KAAK,MAAK,QAAQ;AAC/C,2EAAM,IAAI,EAAE,QAAQ,EAAE,QAAQ;;EAAC","file":"../../../../../../../../../../packages/flutter/src/physics/friction_simulation.dart.lib.js"}');
  // Exports:
  return {
    src__physics__friction_simulation: friction_simulation
  };
}));

//# sourceMappingURL=friction_simulation.dart.lib.js.map
