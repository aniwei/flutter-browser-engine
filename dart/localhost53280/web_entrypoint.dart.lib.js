define(['dart_sdk', 'packages/web/main.dart'], (function load__web_entrypoint_dart(dart_sdk, packages__web__main$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const main = packages__web__main$46dart.main;
  var web_entrypoint = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  web_entrypoint.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyInitializePlatform();
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        return T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      }
      return (C[0] || CT.C0)();
    });
  };
  dart.trackLibraries("web_entrypoint.dart", {
    "org-dartlang-app:/web_entrypoint.dart": web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAUiB;AACqB,MAApC,MAAS;AACT,UAAoB,6BAGI;AAFtB,cAAwB,AAAkB,8BAEpB,eAF6B;;AAErD,YAA4C,EAApB;IAC1B","file":"web_entrypoint.dart.lib.js"}');
  // Exports:
  return {
    web_entrypoint: web_entrypoint
  };
}));

//# sourceMappingURL=web_entrypoint.dart.lib.js.map
