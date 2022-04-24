define(['dart_sdk'], (function load__packages__flutter__src__foundation___platform_web_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var _platform_web = Object.create(dart.library);
  var platform = Object.create(dart.library);
  var $navigator = dartx.navigator;
  var $toLowerCase = dartx.toLowerCase;
  var $startsWith = dartx.startsWith;
  var $contains = dartx.contains;
  var $matches = dartx.matches;
  var $matchMedia = dartx.matchMedia;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    TargetPlatformN: () => (T.TargetPlatformN = dart.constFn(dart.nullable(platform.TargetPlatform)))(),
    VoidToTargetPlatformN: () => (T.VoidToTargetPlatformN = dart.constFn(dart.fnType(T.TargetPlatformN(), [])))(),
    VoidToTargetPlatform: () => (T.VoidToTargetPlatform = dart.constFn(dart.fnType(platform.TargetPlatform, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C6() {
      return C[6] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5], platform.TargetPlatform);
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/_platform_web.dart",
    "package:flutter/src/foundation/platform.dart"
  ];
  dart.copyProperties(_platform_web, {
    get defaultTargetPlatform() {
      let t0, t0$;
      t0$ = (t0 = platform.debugDefaultTargetPlatformOverride, t0 == null ? _platform_web._testPlatform : t0);
      return t0$ == null ? _platform_web._browserPlatform : t0$;
    }
  });
  dart.defineLazy(_platform_web, {
    /*_platform_web._testPlatform*/get _testPlatform() {
      return dart.fn(() => {
        let result = null;
        if (!dart.fn(() => {
          if (ui.debugEmulateFlutterTesterEnvironment) {
            result = platform.TargetPlatform.android;
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[0], 22, 10, "() {\n    // This member is only available in the web's dart:ui implementation.\n    // ignore: undefined_prefixed_name\n    if (ui.debugEmulateFlutterTesterEnvironment as bool) {\n      result = platform.TargetPlatform.android;\n    }\n    return true;\n  }()");
        return result;
      }, T.VoidToTargetPlatformN())();
    },
    /*_platform_web._browserPlatform*/get _browserPlatform() {
      return dart.fn(() => {
        let t0, t0$;
        let navigatorPlatform = (t0$ = (t0 = html.window[$navigator].platform, t0 == null ? null : t0[$toLowerCase]()), t0$ == null ? "" : t0$);
        if (navigatorPlatform[$startsWith]("mac")) {
          return platform.TargetPlatform.macOS;
        }
        if (navigatorPlatform[$startsWith]("win")) {
          return platform.TargetPlatform.windows;
        }
        if (navigatorPlatform[$contains]("iphone") || navigatorPlatform[$contains]("ipad") || navigatorPlatform[$contains]("ipod")) {
          return platform.TargetPlatform.iOS;
        }
        if (navigatorPlatform[$contains]("android")) {
          return platform.TargetPlatform.android;
        }
        if (html.window[$matchMedia]("only screen and (pointer: fine)")[$matches]) {
          return platform.TargetPlatform.linux;
        }
        return platform.TargetPlatform.android;
      }, T.VoidToTargetPlatform())();
    }
  }, false);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  platform.TargetPlatform = class TargetPlatform extends core._Enum {
    toString() {
      return "TargetPlatform." + this[_name];
    }
  };
  (platform.TargetPlatform.new = function(index, name) {
    platform.TargetPlatform.__proto__.new.call(this, index, name);
    ;
  }).prototype = platform.TargetPlatform.prototype;
  dart.addTypeTests(platform.TargetPlatform);
  dart.addTypeCaches(platform.TargetPlatform);
  dart.setLibraryUri(platform.TargetPlatform, I[1]);
  dart.setStaticFieldSignature(platform.TargetPlatform, () => ['values', 'android', 'fuchsia', 'iOS', 'linux', 'macOS', 'windows']);
  dart.defineExtensionMethods(platform.TargetPlatform, ['toString']);
  platform.TargetPlatform.android = C[0] || CT.C0;
  platform.TargetPlatform.fuchsia = C[1] || CT.C1;
  platform.TargetPlatform.iOS = C[2] || CT.C2;
  platform.TargetPlatform.linux = C[3] || CT.C3;
  platform.TargetPlatform.macOS = C[4] || CT.C4;
  platform.TargetPlatform.windows = C[5] || CT.C5;
  platform.TargetPlatform.values = C[6] || CT.C6;
  dart.copyProperties(platform, {
    get defaultTargetPlatform() {
      return _platform_web.defaultTargetPlatform;
    }
  });
  dart.defineLazy(platform, {
    /*platform.debugDefaultTargetPlatformOverride*/get debugDefaultTargetPlatformOverride() {
      return null;
    },
    set debugDefaultTargetPlatformOverride(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/_platform_web.dart", {
    "package:flutter/src/foundation/_platform_web.dart": _platform_web,
    "package:flutter/src/foundation/platform.dart": platform
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["_platform_web.dart","platform.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcE,aAAmD,kDAAnC,aACZ;YAD+C,eAE/C;IACN;;;MAE+B,2BAAa;YAAG,AAW9C;AAV0B;AACzB,aAAO,AAON;AAJC,cAAO;AACmC,YAAxC,SAAiC;;AAEnC,gBAAO;;AAET,cAAO,OAAM;;;MASe,8BAAgB;YAAG,AAyBhD;;AAxBc,iCAAkE,YAAzC,AAAO,AAAU,+CAAA,OAAU,qBAAV,cAA2B;AAClF,YAAI,AAAkB,iBAAD,cAAY;AAC/B,gBAA+B;;AAEjC,YAAI,AAAkB,iBAAD,cAAY;AAC/B,gBAA+B;;AAEjC,YAAI,AAAkB,iBAAD,YAAU,aAC3B,AAAkB,iBAAD,YAAU,WAC3B,AAAkB,iBAAD,YAAU;AAC7B,gBAA+B;;AAEjC,YAAI,AAAkB,iBAAD,YAAU;AAC7B,gBAA+B;;AAOjC,YAAS,AAAO,AAA8C,yBAAnC;AACzB,gBAA+B;;AAEjC,cAA+B;;;;;;;;;;ICDjC;;iDAlBK;;;EAkBL;;;;;;;;;;;;;;;AAvB4C,YAAU;IAAqB;;;MA4C3D,2CAAkC","file":"../../../../../../../../../../packages/flutter/src/foundation/_platform_web.dart.lib.js"}');
  // Exports:
  return {
    src__foundation___platform_web: _platform_web,
    src__foundation__platform: platform
  };
}));

//# sourceMappingURL=_platform_web.dart.lib.js.map
