define(['dart_sdk', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__semantics__semantics_event_dart(dart_sdk, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var semantics_event = Object.create(dart.library);
  var $_set = dartx._set;
  var $keys = dartx.keys;
  var $toList = dartx.toList;
  var $sort = dartx.sort;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constMap(core.String, dart.dynamic, []);
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:flutter/src/semantics/semantics_event.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/semantics/semantics_event.dart"
  ];
  var type$ = dart.privateName(semantics_event, "SemanticsEvent.type");
  semantics_event.SemanticsEvent = class SemanticsEvent extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    toMap(opts) {
      let nodeId = opts && 'nodeId' in opts ? opts.nodeId : null;
      let event = new (T.IdentityMapOfString$dynamic()).from(["type", this.type, "data", this.getDataMap()]);
      if (nodeId != null) event[$_set]("nodeId", nodeId);
      return event;
    }
    toString() {
      let t0;
      let pairs = T.JSArrayOfString().of([]);
      let dataMap = this.getDataMap();
      let sortedKeys = (t0 = dataMap[$keys][$toList](), (() => {
        t0[$sort]();
        return t0;
      })());
      for (let key of sortedKeys)
        pairs[$add](key + ": " + dart.str(dataMap[$_get](key)));
      return object.objectRuntimeType(this, "SemanticsEvent") + "(" + pairs[$join](", ") + ")";
    }
  };
  (semantics_event.SemanticsEvent.new = function(type) {
    this[type$] = type;
    ;
  }).prototype = semantics_event.SemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.SemanticsEvent);
  dart.addTypeCaches(semantics_event.SemanticsEvent);
  dart.setMethodSignature(semantics_event.SemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.SemanticsEvent.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), [], {nodeId: dart.nullable(core.int)}, {})
  }));
  dart.setLibraryUri(semantics_event.SemanticsEvent, I[0]);
  dart.setFieldSignature(semantics_event.SemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.SemanticsEvent.__proto__),
    type: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics_event.SemanticsEvent, ['toString']);
  var message$ = dart.privateName(semantics_event, "AnnounceSemanticsEvent.message");
  var textDirection$ = dart.privateName(semantics_event, "AnnounceSemanticsEvent.textDirection");
  semantics_event.AnnounceSemanticsEvent = class AnnounceSemanticsEvent extends semantics_event.SemanticsEvent {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    static ['_#new#tearOff'](message, textDirection) {
      return new semantics_event.AnnounceSemanticsEvent.new(message, textDirection);
    }
    getDataMap() {
      return new (T.IdentityMapOfString$dynamic()).from(["message", this.message, "textDirection", this.textDirection.index]);
    }
  };
  (semantics_event.AnnounceSemanticsEvent.new = function(message, textDirection) {
    this[message$] = message;
    this[textDirection$] = textDirection;
    if (!(message !== null)) dart.assertFailed(null, I[1], 71, 14, "message != null");
    if (!(textDirection !== null)) dart.assertFailed(null, I[1], 72, 14, "textDirection != null");
    semantics_event.AnnounceSemanticsEvent.__proto__.new.call(this, "announce");
    ;
  }).prototype = semantics_event.AnnounceSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.AnnounceSemanticsEvent);
  dart.addTypeCaches(semantics_event.AnnounceSemanticsEvent);
  dart.setMethodSignature(semantics_event.AnnounceSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.AnnounceSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.AnnounceSemanticsEvent, I[0]);
  dart.setFieldSignature(semantics_event.AnnounceSemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.AnnounceSemanticsEvent.__proto__),
    message: dart.finalFieldType(core.String),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  var message$0 = dart.privateName(semantics_event, "TooltipSemanticsEvent.message");
  semantics_event.TooltipSemanticsEvent = class TooltipSemanticsEvent extends semantics_event.SemanticsEvent {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    static ['_#new#tearOff'](message) {
      return new semantics_event.TooltipSemanticsEvent.new(message);
    }
    getDataMap() {
      return new (T.IdentityMapOfString$dynamic()).from(["message", this.message]);
    }
  };
  (semantics_event.TooltipSemanticsEvent.new = function(message) {
    this[message$0] = message;
    semantics_event.TooltipSemanticsEvent.__proto__.new.call(this, "tooltip");
    ;
  }).prototype = semantics_event.TooltipSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.TooltipSemanticsEvent);
  dart.addTypeCaches(semantics_event.TooltipSemanticsEvent);
  dart.setMethodSignature(semantics_event.TooltipSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.TooltipSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.TooltipSemanticsEvent, I[0]);
  dart.setFieldSignature(semantics_event.TooltipSemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.TooltipSemanticsEvent.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  semantics_event.LongPressSemanticsEvent = class LongPressSemanticsEvent extends semantics_event.SemanticsEvent {
    static ['_#new#tearOff']() {
      return new semantics_event.LongPressSemanticsEvent.new();
    }
    getDataMap() {
      return C[0] || CT.C0;
    }
  };
  (semantics_event.LongPressSemanticsEvent.new = function() {
    semantics_event.LongPressSemanticsEvent.__proto__.new.call(this, "longPress");
    ;
  }).prototype = semantics_event.LongPressSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.LongPressSemanticsEvent);
  dart.addTypeCaches(semantics_event.LongPressSemanticsEvent);
  dart.setMethodSignature(semantics_event.LongPressSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.LongPressSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.LongPressSemanticsEvent, I[0]);
  semantics_event.TapSemanticEvent = class TapSemanticEvent extends semantics_event.SemanticsEvent {
    static ['_#new#tearOff']() {
      return new semantics_event.TapSemanticEvent.new();
    }
    getDataMap() {
      return C[0] || CT.C0;
    }
  };
  (semantics_event.TapSemanticEvent.new = function() {
    semantics_event.TapSemanticEvent.__proto__.new.call(this, "tap");
    ;
  }).prototype = semantics_event.TapSemanticEvent.prototype;
  dart.addTypeTests(semantics_event.TapSemanticEvent);
  dart.addTypeCaches(semantics_event.TapSemanticEvent);
  dart.setMethodSignature(semantics_event.TapSemanticEvent, () => ({
    __proto__: dart.getMethods(semantics_event.TapSemanticEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.TapSemanticEvent, I[0]);
  semantics_event.UpdateLiveRegionEvent = class UpdateLiveRegionEvent extends semantics_event.SemanticsEvent {
    static ['_#new#tearOff']() {
      return new semantics_event.UpdateLiveRegionEvent.new();
    }
    getDataMap() {
      return C[0] || CT.C0;
    }
  };
  (semantics_event.UpdateLiveRegionEvent.new = function() {
    semantics_event.UpdateLiveRegionEvent.__proto__.new.call(this, "updateLiveRegion");
    ;
  }).prototype = semantics_event.UpdateLiveRegionEvent.prototype;
  dart.addTypeTests(semantics_event.UpdateLiveRegionEvent);
  dart.addTypeCaches(semantics_event.UpdateLiveRegionEvent);
  dart.setMethodSignature(semantics_event.UpdateLiveRegionEvent, () => ({
    __proto__: dart.getMethods(semantics_event.UpdateLiveRegionEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.UpdateLiveRegionEvent, I[0]);
  dart.trackLibraries("packages/flutter/src/semantics/semantics_event.dart", {
    "package:flutter/src/semantics/semantics_event.dart": semantics_event
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["semantics_event.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBe;;;;;;;UAOqB;AACL,kBAAyB,4CAClD,QAAQ,WACR,QAAQ;AAEV,UAAI,MAAM,UACR,AAAK,AAAmB,KAAnB,QAAC,UAAY,MAAM;AAE1B,YAAO,MAAK;IACd;;;AAOqB,kBAAgB;AACR,oBAAU;AAClB,6BAAa,AAAQ,AAAK,OAAN,oBAAM;AAAU;;;AACvD,eAAkB,MAAO,WAAU;AACC,QAAlC,AAAM,KAAD,OAAO,AAAqB,GAAlB,mBAAI,AAAO,OAAA,QAAC,GAAG;AAChC,YAAU,AAAgE,0BAA9C,MAAM,oBAAkB,MAAG,AAAM,KAAD,QAAM,QAAM;IAC1E;;;IApC0B;;EAAK;;;;;;;;;;;;;;;;IA4DlB;;;;;;IAKO;;;;;;;;;;AAIlB,YAAwB,6CACtB,WAAW,cACX,iBAAiB,AAAc;IAEnC;;yDArBkC,SAAc;IAAd;IAAc;UACrC,AAAQ,OAAD;UACP,AAAc,aAAD;AACpB,oEAAM;;EAAW;;;;;;;;;;;;;;;IA6BR;;;;;;;;;;AAIX,YAAwB,6CACtB,WAAW;IAEf;;;IAViC;AAAW,mEAAM;;EAAU;;;;;;;;;;;;;;;;;AAsBvB;IAAyB;;;AAH5B,qEAAM;;EAAY;;;;;;;;;;;;;AAef;IAAyB;;;AAHnC,8DAAM;;EAAM;;;;;;;;;;;;;AAiCF;IAAyB;;;AAH9B,mEAAM;;EAAmB","file":"../../../../../../../../../../packages/flutter/src/semantics/semantics_event.dart.lib.js"}');
  // Exports:
  return {
    src__semantics__semantics_event: semantics_event
  };
}));

//# sourceMappingURL=semantics_event.dart.lib.js.map
