define(['dart_sdk', 'packages/flutter/src/services/restoration.dart'], (function load__packages__flutter__src__services__system_navigator_dart(dart_sdk, packages__flutter__src__services__restoration$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__restoration$46dart.src__services__system_channels;
  var system_navigator = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/services/system_navigator.dart"];
  system_navigator.SystemNavigator = class SystemNavigator extends core.Object {
    static ['_#_#tearOff']() {
      return new system_navigator.SystemNavigator.__();
    }
    static pop(opts) {
      let animated = opts && 'animated' in opts ? opts.animated : null;
      return async.async(dart.void, function* pop() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemNavigator.pop", animated);
      });
    }
    static selectSingleEntryHistory() {
      return system_channels.SystemChannels.navigation.invokeMethod(dart.void, "selectSingleEntryHistory");
    }
    static selectMultiEntryHistory() {
      return system_channels.SystemChannels.navigation.invokeMethod(dart.void, "selectMultiEntryHistory");
    }
    static routeInformationUpdated(opts) {
      let location = opts && 'location' in opts ? opts.location : null;
      let state = opts && 'state' in opts ? opts.state : null;
      let replace = opts && 'replace' in opts ? opts.replace : false;
      return system_channels.SystemChannels.navigation.invokeMethod(dart.void, "routeInformationUpdated", new (T.IdentityMapOfString$dynamic()).from(["location", location, "state", state, "replace", replace]));
    }
    static routeUpdated(opts) {
      let routeName = opts && 'routeName' in opts ? opts.routeName : null;
      let previousRouteName = opts && 'previousRouteName' in opts ? opts.previousRouteName : null;
      return system_channels.SystemChannels.navigation.invokeMethod(dart.void, "routeUpdated", new (T.IdentityMapOfString$dynamic()).from(["previousRouteName", previousRouteName, "routeName", routeName]));
    }
  };
  (system_navigator.SystemNavigator.__ = function() {
    ;
  }).prototype = system_navigator.SystemNavigator.prototype;
  dart.addTypeTests(system_navigator.SystemNavigator);
  dart.addTypeCaches(system_navigator.SystemNavigator);
  dart.setStaticMethodSignature(system_navigator.SystemNavigator, () => ['pop', 'selectSingleEntryHistory', 'selectMultiEntryHistory', 'routeInformationUpdated', 'routeUpdated']);
  dart.setLibraryUri(system_navigator.SystemNavigator, I[0]);
  dart.trackLibraries("packages/flutter/src/services/system_navigator.dart", {
    "package:flutter/src/services/system_navigator.dart": system_navigator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["system_navigator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;UA+BiC;AAAR;AAC4D,QAAjF,MAAqB,AAAS,gEAAmB,uBAAuB,QAAQ;MAClF;;;AAeE,YAAsB,AAAW,mEAAmB;IACtD;;AAeE,YAAsB,AAAW,mEAAmB;IACtD;;UAsBkB;UACR;UACH;AAEL,YAAsB,AAAW,mEAC/B,2BACiB,4CACf,YAAY,QAAQ,EACpB,SAAS,KAAK,EACd,WAAW,OAAO;IAGxB;;UAcU;UACA;AAER,YAAsB,AAAW,mEAC/B,gBACiB,4CACf,qBAAqB,iBAAiB,EACtC,aAAa,SAAS;IAG5B;;;;EAhHmB","file":"../../../../../../../../../../packages/flutter/src/services/system_navigator.dart.lib.js"}');
  // Exports:
  return {
    src__services__system_navigator: system_navigator
  };
}));

//# sourceMappingURL=system_navigator.dart.lib.js.map
