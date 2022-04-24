define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/events.dart'], (function load__packages__flutter__src__gestures__pointer_signal_resolver_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__events$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  var pointer_signal_resolver = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    DiagnosticsPropertyOfPointerSignalEvent: () => (T.DiagnosticsPropertyOfPointerSignalEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerSignalEvent)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T.ListOfDiagnosticsNode(), [])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/pointer_signal_resolver.dart",
    "package:flutter/src/gestures/pointer_signal_resolver.dart"
  ];
  var _firstRegisteredCallback = dart.privateName(pointer_signal_resolver, "_firstRegisteredCallback");
  var _currentEvent = dart.privateName(pointer_signal_resolver, "_currentEvent");
  pointer_signal_resolver.PointerSignalResolver = class PointerSignalResolver extends core.Object {
    register(event, callback) {
      if (!(event !== null)) dart.assertFailed(null, I[0], 65, 12, "event != null");
      if (!(callback !== null)) dart.assertFailed(null, I[0], 66, 12, "callback != null");
      if (!(this[_currentEvent] == null || pointer_signal_resolver._isSameEvent(dart.nullCheck(this[_currentEvent]), event))) dart.assertFailed(null, I[0], 67, 12, "_currentEvent == null || _isSameEvent(_currentEvent!, event)");
      if (this[_firstRegisteredCallback] != null) {
        return;
      }
      this[_currentEvent] = event;
      this[_firstRegisteredCallback] = callback;
    }
    resolve(event) {
      if (this[_firstRegisteredCallback] == null) {
        if (!(this[_currentEvent] == null)) dart.assertFailed(null, I[0], 83, 14, "_currentEvent == null");
        return;
      }
      if (!pointer_signal_resolver._isSameEvent(dart.nullCheck(this[_currentEvent]), event)) dart.assertFailed(null, I[0], 86, 12, "_isSameEvent(_currentEvent!, event)");
      try {
        dart.nullCheck(this[_firstRegisteredCallback])(dart.nullCheck(this[_currentEvent]));
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        if (core.Object.is(exception)) {
          let collector = null;
          if (!dart.fn(() => {
            collector = dart.fn(() => T.JSArrayOfDiagnosticsNode().of([new (T.DiagnosticsPropertyOfPointerSignalEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]), T.VoidToListOfDiagnosticsNode());
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[0], 91, 14, "() {\n        collector = () => <DiagnosticsNode>[\n          DiagnosticsProperty<PointerSignalEvent>('Event', event, style: DiagnosticsTreeStyle.errorProperty),\n        ];\n        return true;\n      }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while resolving a PointerSignalEvent"), informationCollector: collector}));
        } else
          throw e;
      }
      this[_firstRegisteredCallback] = null;
      this[_currentEvent] = null;
    }
    static ['_#new#tearOff']() {
      return new pointer_signal_resolver.PointerSignalResolver.new();
    }
  };
  (pointer_signal_resolver.PointerSignalResolver.new = function() {
    this[_firstRegisteredCallback] = null;
    this[_currentEvent] = null;
    ;
  }).prototype = pointer_signal_resolver.PointerSignalResolver.prototype;
  dart.addTypeTests(pointer_signal_resolver.PointerSignalResolver);
  dart.addTypeCaches(pointer_signal_resolver.PointerSignalResolver);
  dart.setMethodSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getMethods(pointer_signal_resolver.PointerSignalResolver.__proto__),
    register: dart.fnType(dart.void, [events.PointerSignalEvent, dart.fnType(dart.void, [events.PointerSignalEvent])]),
    resolve: dart.fnType(dart.void, [events.PointerSignalEvent])
  }));
  dart.setLibraryUri(pointer_signal_resolver.PointerSignalResolver, I[1]);
  dart.setFieldSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getFields(pointer_signal_resolver.PointerSignalResolver.__proto__),
    [_firstRegisteredCallback]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerSignalEvent]))),
    [_currentEvent]: dart.fieldType(dart.nullable(events.PointerSignalEvent))
  }));
  pointer_signal_resolver._isSameEvent = function _isSameEvent(event1, event2) {
    let t1, t1$;
    return dart.equals((t1 = event1.original, t1 == null ? event1 : t1), (t1$ = event2.original, t1$ == null ? event2 : t1$));
  };
  dart.trackLibraries("packages/flutter/src/gestures/pointer_signal_resolver.dart", {
    "package:flutter/src/gestures/pointer_signal_resolver.dart": pointer_signal_resolver
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pointer_signal_resolver.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;aA+DmC,OAAqC;AACpE,YAAO,AAAM,KAAD;AACZ,YAAO,AAAS,QAAD;AACf,YAAO,AAAc,AAAQ,+BAAG,qCAA0B,eAAb,sBAAgB,KAAK;AAClE,UAAI;AACF;;AAEmB,MAArB,sBAAgB,KAAK;AACc,MAAnC,iCAA2B,QAAQ;IACrC;YAQgC;AAC9B,UAAI,AAAyB;AAC3B,cAAO,AAAc;AACrB;;AAEF,WAAO,qCAA0B,eAAb,sBAAgB,KAAK;AACzC;AAC2C,QAAjB,AAAC,eAAzB,gCAAuC,eAAb;;YACnB;YAAW;AAAlB;AACsB;AACtB,eAAO,AAKN;AAFE,YAFD,YAAY,cAAuB,iCACjC,sDAAwC,SAAS,KAAK,UAA8B;AAEtF,kBAAO;;AAQP,UANW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,4BACA,oCAAiB,+DACJ,SAAS;;;;AAGJ,MAA/B,iCAA2B;AACP,MAApB,sBAAgB;IAClB;;;;;;IAnD+B;IAEX;;EAkDtB;;;;;;;;;;;;;;+DA/FqC,QAA2B;;AAC9D,UAAmC,cAAX,KAAhB,AAAO,MAAD,WAAC,aAAY,MAAM,SAAsB,MAAhB,AAAO,MAAD,WAAC,cAAY,MAAM;EAClE","file":"../../../../../../../../../../packages/flutter/src/gestures/pointer_signal_resolver.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__pointer_signal_resolver: pointer_signal_resolver
  };
}));

//# sourceMappingURL=pointer_signal_resolver.dart.lib.js.map
