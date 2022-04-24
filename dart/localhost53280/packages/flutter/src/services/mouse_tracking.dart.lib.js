define(['dart_sdk', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/events.dart'], (function load__packages__flutter__src__services__mouse_tracking_dart(dart_sdk, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__events$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  var mouse_tracking = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    FunctionN: () => (T.FunctionN = dart.constFn(dart.nullable(core.Function)))(),
    FlagsSummaryOfFunctionN: () => (T.FlagsSummaryOfFunctionN = dart.constFn(diagnostics.FlagsSummary$(T.FunctionN())))(),
    IdentityMapOfString$FunctionN: () => (T.IdentityMapOfString$FunctionN = dart.constFn(_js_helper.IdentityMap$(core.String, T.FunctionN())))(),
    DiagnosticsPropertyOfMouseCursor: () => (T.DiagnosticsPropertyOfMouseCursor = dart.constFn(diagnostics.DiagnosticsProperty$(mouse_cursor.MouseCursor)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: mouse_cursor._DeferringMouseCursor.prototype
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/mouse_tracking.dart",
    "package:flutter/src/services/mouse_tracking.dart"
  ];
  var onEnter$ = dart.privateName(mouse_tracking, "MouseTrackerAnnotation.onEnter");
  var onExit$ = dart.privateName(mouse_tracking, "MouseTrackerAnnotation.onExit");
  var cursor$ = dart.privateName(mouse_tracking, "MouseTrackerAnnotation.cursor");
  var validForMouseTracker$ = dart.privateName(mouse_tracking, "MouseTrackerAnnotation.validForMouseTracker");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  mouse_tracking.MouseTrackerAnnotation = class MouseTrackerAnnotation extends Object_Diagnosticable$36 {
    get onEnter() {
      return this[onEnter$];
    }
    set onEnter(value) {
      super.onEnter = value;
    }
    get onExit() {
      return this[onExit$];
    }
    set onExit(value) {
      super.onExit = value;
    }
    get cursor() {
      return this[cursor$];
    }
    set cursor(value) {
      super.cursor = value;
    }
    get validForMouseTracker() {
      return this[validForMouseTracker$];
    }
    set validForMouseTracker(value) {
      super.validForMouseTracker = value;
    }
    static ['_#new#tearOff'](opts) {
      let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
      let onExit = opts && 'onExit' in opts ? opts.onExit : null;
      let cursor = opts && 'cursor' in opts ? opts.cursor : C[0] || CT.C0;
      let validForMouseTracker = opts && 'validForMouseTracker' in opts ? opts.validForMouseTracker : true;
      return new mouse_tracking.MouseTrackerAnnotation.new({onEnter: onEnter, onExit: onExit, cursor: cursor, validForMouseTracker: validForMouseTracker});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.FlagsSummaryOfFunctionN()).new("callbacks", new (T.IdentityMapOfString$FunctionN()).from(["enter", this.onEnter, "exit", this.onExit]), {ifEmpty: "<none>"}));
      properties.add(new (T.DiagnosticsPropertyOfMouseCursor()).new("cursor", this.cursor, {defaultValue: mouse_cursor.MouseCursor.defer}));
    }
  };
  (mouse_tracking.MouseTrackerAnnotation.new = function(opts) {
    let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
    let onExit = opts && 'onExit' in opts ? opts.onExit : null;
    let cursor = opts && 'cursor' in opts ? opts.cursor : C[0] || CT.C0;
    let validForMouseTracker = opts && 'validForMouseTracker' in opts ? opts.validForMouseTracker : true;
    this[onEnter$] = onEnter;
    this[onExit$] = onExit;
    this[cursor$] = cursor;
    this[validForMouseTracker$] = validForMouseTracker;
    if (!(cursor !== null)) dart.assertFailed(null, I[0], 49, 15, "cursor != null");
    ;
  }).prototype = mouse_tracking.MouseTrackerAnnotation.prototype;
  dart.addTypeTests(mouse_tracking.MouseTrackerAnnotation);
  dart.addTypeCaches(mouse_tracking.MouseTrackerAnnotation);
  dart.setLibraryUri(mouse_tracking.MouseTrackerAnnotation, I[1]);
  dart.setFieldSignature(mouse_tracking.MouseTrackerAnnotation, () => ({
    __proto__: dart.getFields(mouse_tracking.MouseTrackerAnnotation.__proto__),
    onEnter: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerEnterEvent]))),
    onExit: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerExitEvent]))),
    cursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    validForMouseTracker: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/services/mouse_tracking.dart", {
    "package:flutter/src/services/mouse_tracking.dart": mouse_tracking
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mouse_tracking.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8DmC;;;;;;IAeD;;;;;;IAcd;;;;;;IAYP;;;;;;;;;;;;;wBAG0C;AACd,MAA/B,0BAAoB,UAAU;AAQlC,MAPF,AAAW,UAAD,KAAK,sCACb,aACoB,8CAClB,SAAS,cACT,QAAQ,yBAED;AAEwF,MAAnG,AAAW,UAAD,KAAK,+CAAiC,UAAU,4BAAkC;IAC9F;;;QAzEO;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;UACK,AAAO,MAAD;;EAAS","file":"../../../../../../../../../../packages/flutter/src/services/mouse_tracking.dart.lib.js"}');
  // Exports:
  return {
    src__services__mouse_tracking: mouse_tracking
  };
}));

//# sourceMappingURL=mouse_tracking.dart.lib.js.map
