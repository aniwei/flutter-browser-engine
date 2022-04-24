define(['dart_sdk', 'packages/flutter/src/services/restoration.dart'], (function load__packages__flutter__src__services__system_sound_dart(dart_sdk, packages__flutter__src__services__restoration$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__restoration$46dart.src__services__system_channels;
  var system_sound = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: system_sound.SystemSoundType.prototype,
        [_Enum__name]: "click",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: system_sound.SystemSoundType.prototype,
        [_Enum__name]: "alert",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.constList([C[0] || CT.C0, C[1] || CT.C1], system_sound.SystemSoundType);
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:flutter/src/services/system_sound.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  system_sound.SystemSoundType = class SystemSoundType extends core._Enum {
    toString() {
      return "SystemSoundType." + this[_name];
    }
  };
  (system_sound.SystemSoundType.new = function(index, name) {
    system_sound.SystemSoundType.__proto__.new.call(this, index, name);
    ;
  }).prototype = system_sound.SystemSoundType.prototype;
  dart.addTypeTests(system_sound.SystemSoundType);
  dart.addTypeCaches(system_sound.SystemSoundType);
  dart.setLibraryUri(system_sound.SystemSoundType, I[0]);
  dart.setStaticFieldSignature(system_sound.SystemSoundType, () => ['values', 'click', 'alert']);
  dart.defineExtensionMethods(system_sound.SystemSoundType, ['toString']);
  system_sound.SystemSoundType.click = C[0] || CT.C0;
  system_sound.SystemSoundType.alert = C[1] || CT.C1;
  system_sound.SystemSoundType.values = C[2] || CT.C2;
  system_sound.SystemSound = class SystemSound extends core.Object {
    static ['_#_#tearOff']() {
      return new system_sound.SystemSound.__();
    }
    static play(type) {
      return async.async(dart.void, function* play() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemSound.play", type.toString());
      });
    }
  };
  (system_sound.SystemSound.__ = function() {
    ;
  }).prototype = system_sound.SystemSound.prototype;
  dart.addTypeTests(system_sound.SystemSound);
  dart.addTypeCaches(system_sound.SystemSound);
  dart.setStaticMethodSignature(system_sound.SystemSound, () => ['play']);
  dart.setLibraryUri(system_sound.SystemSound, I[0]);
  dart.trackLibraries("packages/flutter/src/services/system_sound.dart", {
    "package:flutter/src/services/system_sound.dart": system_sound
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["system_sound.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBA;;sDAdK;;;EAcL;;;;;;;;;;;;;gBAc2C;AAAjB;AAIrB,QAHD,MAAqB,AAAS,gEAC5B,oBACA,AAAK,IAAD;MAER;;;;;EAZe","file":"../../../../../../../../../../packages/flutter/src/services/system_sound.dart.lib.js"}');
  // Exports:
  return {
    src__services__system_sound: system_sound
  };
}));

//# sourceMappingURL=system_sound.dart.lib.js.map
