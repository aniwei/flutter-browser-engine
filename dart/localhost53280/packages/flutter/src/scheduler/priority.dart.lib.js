define(['dart_sdk'], (function load__packages__flutter__src__scheduler__priority_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var priority = Object.create(dart.library);
  var $abs = dartx.abs;
  var $sign = dartx.sign;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 100000
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 200000
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:flutter/src/scheduler/priority.dart"];
  var _value$ = dart.privateName(priority, "Priority._value");
  var _value = dart.privateName(priority, "_value");
  priority.Priority = class Priority extends core.Object {
    get [_value]() {
      return this[_value$];
    }
    set [_value](value) {
      super[_value] = value;
    }
    static ['_#_#tearOff'](_value) {
      return new priority.Priority.__(_value);
    }
    get value() {
      return this[_value];
    }
    ['+'](offset) {
      if (offset[$abs]() > 10000) {
        offset = 10000 * offset[$sign];
      }
      return new priority.Priority.__(this[_value] + offset);
    }
    ['-'](offset) {
      return this['+'](-offset);
    }
  };
  (priority.Priority.__ = function(_value) {
    this[_value$] = _value;
    ;
  }).prototype = priority.Priority.prototype;
  dart.addTypeTests(priority.Priority);
  dart.addTypeCaches(priority.Priority);
  dart.setMethodSignature(priority.Priority, () => ({
    __proto__: dart.getMethods(priority.Priority.__proto__),
    '+': dart.fnType(priority.Priority, [core.int]),
    '-': dart.fnType(priority.Priority, [core.int])
  }));
  dart.setGetterSignature(priority.Priority, () => ({
    __proto__: dart.getGetters(priority.Priority.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(priority.Priority, I[0]);
  dart.setFieldSignature(priority.Priority, () => ({
    __proto__: dart.getFields(priority.Priority.__proto__),
    [_value]: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(priority.Priority, () => ['idle', 'animation', 'touch', 'kMaxOffset']);
  dart.defineLazy(priority.Priority, {
    /*priority.Priority.idle*/get idle() {
      return C[0] || CT.C0;
    },
    /*priority.Priority.animation*/get animation() {
      return C[1] || CT.C1;
    },
    /*priority.Priority.touch*/get touch() {
      return C[2] || CT.C2;
    },
    /*priority.Priority.kMaxOffset*/get kMaxOffset() {
      return 10000;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/scheduler/priority.dart", {
    "package:flutter/src/scheduler/priority.dart": priority
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["priority.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaY;;;;;;;;;;AADO;IAAM;UAwBC;AACtB,UAAI,AAAO,AAAM,MAAP;AAEyB,QAAjC,SAAoB,QAAE,AAAO,MAAD;;AAE9B,YAAgB,0BAAE,AAAO,eAAE,MAAM;IACnC;UAOwB;AAAW,YAAA,AAAK,WAAG,CAAC,MAAM;IAAC;;;IAxC7B;;EAAO;;;;;;;;;;;;;;;;;;;MAOP,sBAAI;;;MAGJ,2BAAS;;;MAGT,uBAAK;;;MAOV,4BAAU","file":"../../../../../../../../../../packages/flutter/src/scheduler/priority.dart.lib.js"}');
  // Exports:
  return {
    src__scheduler__priority: priority
  };
}));

//# sourceMappingURL=priority.dart.lib.js.map
