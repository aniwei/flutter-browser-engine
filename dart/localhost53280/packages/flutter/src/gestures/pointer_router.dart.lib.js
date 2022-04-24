define(['dart_sdk', 'packages/flutter/src/gestures/events.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__pointer_router_dart(dart_sdk, packages__flutter__src__gestures__events$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var pointer_router = Object.create(dart.library);
  var $putIfAbsent = dartx.putIfAbsent;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    PointerEventTovoid: () => (T.PointerEventTovoid = dart.constFn(dart.fnType(dart.void, [events.PointerEvent])))(),
    Matrix4N: () => (T.Matrix4N = dart.constFn(dart.nullable(vector_math_64.Matrix4)))(),
    MapOfPointerEventTovoid$Matrix4N: () => (T.MapOfPointerEventTovoid$Matrix4N = dart.constFn(core.Map$(T.PointerEventTovoid(), T.Matrix4N())))(),
    IdentityMapOfint$MapOfPointerEventTovoid$Matrix4N: () => (T.IdentityMapOfint$MapOfPointerEventTovoid$Matrix4N = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapOfPointerEventTovoid$Matrix4N())))(),
    LinkedMapOfPointerEventTovoid$Matrix4N: () => (T.LinkedMapOfPointerEventTovoid$Matrix4N = dart.constFn(_js_helper.LinkedMap$(T.PointerEventTovoid(), T.Matrix4N())))(),
    VoidToMapOfPointerEventTovoid$Matrix4N: () => (T.VoidToMapOfPointerEventTovoid$Matrix4N = dart.constFn(dart.fnType(T.MapOfPointerEventTovoid$Matrix4N(), [])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfPointerRouter: () => (T.DiagnosticsPropertyOfPointerRouter = dart.constFn(diagnostics.DiagnosticsProperty$(pointer_router.PointerRouter)))(),
    DiagnosticsPropertyOfPointerEventTovoid: () => (T.DiagnosticsPropertyOfPointerEventTovoid = dart.constFn(diagnostics.DiagnosticsProperty$(T.PointerEventTovoid())))(),
    DiagnosticsPropertyOfPointerEvent: () => (T.DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T.ListOfDiagnosticsNode(), [])))(),
    LinkedHashMapOfPointerEventTovoid$Matrix4N: () => (T.LinkedHashMapOfPointerEventTovoid$Matrix4N = dart.constFn(collection.LinkedHashMap$(T.PointerEventTovoid(), T.Matrix4N())))(),
    FnAndMatrix4NTovoid: () => (T.FnAndMatrix4NTovoid = dart.constFn(dart.fnType(dart.void, [T.PointerEventTovoid(), T.Matrix4N()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/pointer_router.dart",
    "package:flutter/src/gestures/pointer_router.dart"
  ];
  var _routeMap = dart.privateName(pointer_router, "_routeMap");
  var _globalRoutes = dart.privateName(pointer_router, "_globalRoutes");
  var _dispatch = dart.privateName(pointer_router, "_dispatch");
  var _dispatchEventToRoutes = dart.privateName(pointer_router, "_dispatchEventToRoutes");
  pointer_router.PointerRouter = class PointerRouter extends core.Object {
    addRoute(pointer, route, transform = null) {
      let routes = this[_routeMap][$putIfAbsent](pointer, dart.fn(() => new (T.LinkedMapOfPointerEventTovoid$Matrix4N()).new(), T.VoidToMapOfPointerEventTovoid$Matrix4N()));
      if (!!routes[$containsKey](route)) dart.assertFailed(null, I[0], 31, 12, "!routes.containsKey(route)");
      routes[$_set](route, transform);
    }
    removeRoute(pointer, route) {
      if (!this[_routeMap][$containsKey](pointer)) dart.assertFailed(null, I[0], 43, 12, "_routeMap.containsKey(pointer)");
      let routes = dart.nullCheck(this[_routeMap][$_get](pointer));
      if (!routes[$containsKey](route)) dart.assertFailed(null, I[0], 45, 12, "routes.containsKey(route)");
      routes[$remove](route);
      if (routes[$isEmpty]) this[_routeMap][$remove](pointer);
    }
    addGlobalRoute(route, transform = null) {
      if (!!this[_globalRoutes][$containsKey](route)) dart.assertFailed(null, I[0], 58, 12, "!_globalRoutes.containsKey(route)");
      this[_globalRoutes][$_set](route, transform);
    }
    removeGlobalRoute(route) {
      if (!this[_globalRoutes][$containsKey](route)) dart.assertFailed(null, I[0], 70, 12, "_globalRoutes.containsKey(route)");
      this[_globalRoutes][$remove](route);
    }
    get debugGlobalRouteCount() {
      let count = null;
      if (!dart.fn(() => {
        count = this[_globalRoutes][$length];
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 80, 12, "() {\n      count = _globalRoutes.length;\n      return true;\n    }()");
      if (count != null) {
        return dart.nullCheck(count);
      }
      dart.throw(new core.UnsupportedError.new("debugGlobalRouteCount is not supported in release builds"));
    }
    [_dispatch](event, route, transform) {
      try {
        event = event.transformed(transform);
        route(event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        if (core.Object.is(exception)) {
          let collector = null;
          if (!dart.fn(() => {
            collector = dart.fn(() => T.JSArrayOfDiagnosticsNode().of([new (T.DiagnosticsPropertyOfPointerRouter()).new("router", this, {level: diagnostics.DiagnosticLevel.debug}), new (T.DiagnosticsPropertyOfPointerEventTovoid()).new("route", route, {level: diagnostics.DiagnosticLevel.debug}), new (T.DiagnosticsPropertyOfPointerEvent()).new("event", event, {level: diagnostics.DiagnosticLevel.debug})]), T.VoidToListOfDiagnosticsNode());
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[0], 97, 14, "() {\n        collector = () => <DiagnosticsNode>[\n          DiagnosticsProperty<PointerRouter>('router', this, level: DiagnosticLevel.debug),\n          DiagnosticsProperty<PointerRoute>('route', route, level: DiagnosticLevel.debug),\n          DiagnosticsProperty<PointerEvent>('event', event, level: DiagnosticLevel.debug),\n        ];\n        return true;\n      }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while routing a pointer event"), informationCollector: collector}));
        } else
          throw e;
      }
    }
    route(event) {
      let routes = this[_routeMap][$_get](event.pointer);
      let copiedGlobalRoutes = T.LinkedHashMapOfPointerEventTovoid$Matrix4N().of(this[_globalRoutes]);
      if (routes != null) {
        this[_dispatchEventToRoutes](event, routes, T.LinkedHashMapOfPointerEventTovoid$Matrix4N().of(routes));
      }
      this[_dispatchEventToRoutes](event, this[_globalRoutes], copiedGlobalRoutes);
    }
    [_dispatchEventToRoutes](event, referenceRoutes, copiedRoutes) {
      copiedRoutes[$forEach](dart.fn((route, transform) => {
        if (referenceRoutes[$containsKey](route)) {
          this[_dispatch](event, route, transform);
        }
      }, T.FnAndMatrix4NTovoid()));
    }
    static ['_#new#tearOff']() {
      return new pointer_router.PointerRouter.new();
    }
  };
  (pointer_router.PointerRouter.new = function() {
    this[_routeMap] = new (T.IdentityMapOfint$MapOfPointerEventTovoid$Matrix4N()).new();
    this[_globalRoutes] = new (T.LinkedMapOfPointerEventTovoid$Matrix4N()).new();
    ;
  }).prototype = pointer_router.PointerRouter.prototype;
  dart.addTypeTests(pointer_router.PointerRouter);
  dart.addTypeCaches(pointer_router.PointerRouter);
  dart.setMethodSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getMethods(pointer_router.PointerRouter.__proto__),
    addRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])], [dart.nullable(vector_math_64.Matrix4)]),
    removeRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])]),
    addGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])], [dart.nullable(vector_math_64.Matrix4)]),
    removeGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    [_dispatch]: dart.fnType(dart.void, [events.PointerEvent, dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)]),
    route: dart.fnType(dart.void, [events.PointerEvent]),
    [_dispatchEventToRoutes]: dart.fnType(dart.void, [events.PointerEvent, core.Map$(dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)), core.Map$(dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4))])
  }));
  dart.setGetterSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getGetters(pointer_router.PointerRouter.__proto__),
    debugGlobalRouteCount: core.int
  }));
  dart.setLibraryUri(pointer_router.PointerRouter, I[1]);
  dart.setFieldSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getFields(pointer_router.PointerRouter.__proto__),
    [_routeMap]: dart.finalFieldType(core.Map$(core.int, core.Map$(dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)))),
    [_globalRoutes]: dart.finalFieldType(core.Map$(dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/pointer_router.dart", {
    "package:flutter/src/gestures/pointer_router.dart": pointer_router
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pointer_router.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;aAyBoB,SAAsB,OAAiB;AACrB,mBAAS,AAAU,8BACnD,OAAO,EACP,cAA8B;AAEhC,YAAQ,AAAO,MAAD,eAAa,KAAK;AACP,MAAzB,AAAM,MAAA,QAAC,KAAK,EAAI,SAAS;IAC3B;gBASqB,SAAsB;AACzC,WAAO,AAAU,8BAAY,OAAO;AACF,mBAA2B,eAAlB,AAAS,uBAAC,OAAO;AAC5D,WAAO,AAAO,MAAD,eAAa,KAAK;AACX,MAApB,AAAO,MAAD,UAAQ,KAAK;AACnB,UAAI,AAAO,MAAD,YACR,AAAU,AAAe,yBAAR,OAAO;IAC5B;mBAQiC,OAAiB;AAChD,YAAQ,AAAc,kCAAY,KAAK;AACP,MAAhC,AAAa,2BAAC,KAAK,EAAI,SAAS;IAClC;sBASoC;AAClC,WAAO,AAAc,kCAAY,KAAK;AACX,MAA3B,AAAc,6BAAO,KAAK;IAC5B;;AAOO;AACL,WAAO,AAGN;AAF6B,QAA5B,QAAQ,AAAc;AACtB,cAAO;;AAET,UAAI,KAAK;AACP,cAAY,gBAAL,KAAK;;AAEoE,MAAlF,WAAM,8BAAiB;IACzB;gBAG4B,OAAoB,OAAgB;AAC9D;AACsC,QAApC,QAAQ,AAAM,KAAD,aAAa,SAAS;AACvB,QAAZ,AAAK,KAAA,CAAC,KAAK;;YACJ;YAAW;AAAlB;AACsB;AACtB,eAAO,AAON;AAFE,YAJD,YAAY,cAAuB,iCACjC,iDAAmC,UAAU,cAA6B,qCAC1E,sDAAkC,SAAS,KAAK,UAAyB,qCACzE,gDAAkC,SAAS,KAAK,UAAyB;AAE3E,kBAAO;;AAQP,UANW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,4BACA,oCAAiB,wDACJ,SAAS;;;;IAGrC;UAMwB;AACa,mBAAS,AAAS,uBAAC,AAAM,KAAD;AACzB,+BAAqB,kDAA+B;AACtF,UAAI,MAAM;AAKP,QAJD,6BACE,KAAK,EACL,MAAM,EACN,kDAA+B,MAAM;;AAGuB,MAAhE,6BAAuB,KAAK,EAAE,qBAAe,kBAAkB;IACjE;6BAGe,OACe,iBACA;AAM1B,MAJF,AAAa,YAAD,WAAS,SAAc,OAAgB;AACjD,YAAI,AAAgB,eAAD,eAAa,KAAK;AACD,UAAlC,gBAAU,KAAK,EAAE,KAAK,EAAE,SAAS;;;IAGvC;;;;;;IA9H4C,kBAA8C;IACxD,sBAAwC;;EA8H5E","file":"../../../../../../../../../../packages/flutter/src/gestures/pointer_router.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__pointer_router: pointer_router
  };
}));

//# sourceMappingURL=pointer_router.dart.lib.js.map
