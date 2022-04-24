define(['dart_sdk', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__physics__tolerance_dart(dart_sdk, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var tolerance = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [velocity$]: 0.001,
        [time$]: 0.001,
        [distance$]: 0.001
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:flutter/src/physics/tolerance.dart"];
  var distance$ = dart.privateName(tolerance, "Tolerance.distance");
  var time$ = dart.privateName(tolerance, "Tolerance.time");
  var velocity$ = dart.privateName(tolerance, "Tolerance.velocity");
  tolerance.Tolerance = class Tolerance extends core.Object {
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    static ['_#new#tearOff'](opts) {
      let distance = opts && 'distance' in opts ? opts.distance : 0.001;
      let time = opts && 'time' in opts ? opts.time : 0.001;
      let velocity = opts && 'velocity' in opts ? opts.velocity : 0.001;
      return new tolerance.Tolerance.new({distance: distance, time: time, velocity: velocity});
    }
    toString() {
      return object.objectRuntimeType(this, "Tolerance") + "(distance: ±" + dart.str(this.distance) + ", time: ±" + dart.str(this.time) + ", velocity: ±" + dart.str(this.velocity) + ")";
    }
  };
  (tolerance.Tolerance.new = function(opts) {
    let distance = opts && 'distance' in opts ? opts.distance : 0.001;
    let time = opts && 'time' in opts ? opts.time : 0.001;
    let velocity = opts && 'velocity' in opts ? opts.velocity : 0.001;
    this[distance$] = distance;
    this[time$] = time;
    this[velocity$] = velocity;
    ;
  }).prototype = tolerance.Tolerance.prototype;
  dart.addTypeTests(tolerance.Tolerance);
  dart.addTypeCaches(tolerance.Tolerance);
  dart.setLibraryUri(tolerance.Tolerance, I[0]);
  dart.setFieldSignature(tolerance.Tolerance, () => ({
    __proto__: dart.getFields(tolerance.Tolerance.__proto__),
    distance: dart.finalFieldType(core.double),
    time: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(tolerance.Tolerance, () => ['_epsilonDefault', 'defaultTolerance']);
  dart.defineExtensionMethods(tolerance.Tolerance, ['toString']);
  dart.defineLazy(tolerance.Tolerance, {
    /*tolerance.Tolerance._epsilonDefault*/get _epsilonDefault() {
      return 0.001;
    },
    /*tolerance.Tolerance.defaultTolerance*/get defaultTolerance() {
      return C[0] || CT.C0;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/physics/tolerance.dart", {
    "package:flutter/src/physics/tolerance.dart": tolerance
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tolerance.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IA6Be;;;;;;IAOA;;;;;;IAOA;;;;;;;;;;;;;AAGQ,YAAG,AAAgG,0BAA9E,MAAM,eAAa,0BAAa,iBAAQ,uBAAU,aAAI,2BAAc,iBAAQ;IAAE;;;QAhCjH;QACA;QACA;IAFA;IACA;IACA;;EACL;;;;;;;;;;;;;MAEkB,mCAAe;;;MAGZ,oCAAgB","file":"../../../../../../../../../../packages/flutter/src/physics/tolerance.dart.lib.js"}');
  // Exports:
  return {
    src__physics__tolerance: tolerance
  };
}));

//# sourceMappingURL=tolerance.dart.lib.js.map
