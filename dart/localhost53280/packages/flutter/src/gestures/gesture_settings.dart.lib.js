define(['dart_sdk'], (function load__packages__flutter__src__gestures__gesture_settings_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var gesture_settings = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/gestures/gesture_settings.dart"];
  var touchSlop$ = dart.privateName(gesture_settings, "DeviceGestureSettings.touchSlop");
  gesture_settings.DeviceGestureSettings = class DeviceGestureSettings extends core.Object {
    get touchSlop() {
      return this[touchSlop$];
    }
    set touchSlop(value) {
      super.touchSlop = value;
    }
    static ['_#new#tearOff'](opts) {
      let touchSlop = opts && 'touchSlop' in opts ? opts.touchSlop : null;
      return new gesture_settings.DeviceGestureSettings.new({touchSlop: touchSlop});
    }
    static fromWindow(window) {
      let physicalTouchSlop = window.viewConfiguration.gestureSettings.physicalTouchSlop;
      return new gesture_settings.DeviceGestureSettings.new({touchSlop: physicalTouchSlop == null ? null : dart.notNull(physicalTouchSlop) / window.devicePixelRatio});
    }
    static ['_#fromWindow#tearOff'](window) {
      return gesture_settings.DeviceGestureSettings.fromWindow(window);
    }
    get panSlop() {
      return this.touchSlop != null ? dart.nullCheck(this.touchSlop) * 2 : null;
    }
    get hashCode() {
      return ui.hashValues(this.touchSlop, 23);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return gesture_settings.DeviceGestureSettings.is(other) && other.touchSlop == this.touchSlop;
    }
    toString() {
      return "DeviceGestureSettings(touchSlop: " + dart.str(this.touchSlop) + ")";
    }
  };
  (gesture_settings.DeviceGestureSettings.new = function(opts) {
    let touchSlop = opts && 'touchSlop' in opts ? opts.touchSlop : null;
    this[touchSlop$] = touchSlop;
    ;
  }).prototype = gesture_settings.DeviceGestureSettings.prototype;
  dart.addTypeTests(gesture_settings.DeviceGestureSettings);
  dart.addTypeCaches(gesture_settings.DeviceGestureSettings);
  dart.setStaticMethodSignature(gesture_settings.DeviceGestureSettings, () => ['fromWindow']);
  dart.setGetterSignature(gesture_settings.DeviceGestureSettings, () => ({
    __proto__: dart.getGetters(gesture_settings.DeviceGestureSettings.__proto__),
    panSlop: dart.nullable(core.double)
  }));
  dart.setLibraryUri(gesture_settings.DeviceGestureSettings, I[0]);
  dart.setFieldSignature(gesture_settings.DeviceGestureSettings, () => ({
    __proto__: dart.getFields(gesture_settings.DeviceGestureSettings.__proto__),
    touchSlop: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(gesture_settings.DeviceGestureSettings, ['_equals', 'toString']);
  dart.defineExtensionAccessors(gesture_settings.DeviceGestureSettings, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/gestures/gesture_settings.dart", {
    "package:flutter/src/gestures/gesture_settings.dart": gesture_settings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["gesture_settings.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAgCgB;;;;;;;;;;sBARqD;AACnD,8BAAoB,AAAO,AAAkB,AAAgB,MAAnC;AACxC,YAAO,4DACM,AAAkB,iBAAD,WAAW,OAAyB,aAAlB,iBAAiB,IAAG,AAAO,MAAD;IAE5E;;;;;AAOuB,YAAA,AAAU,0BAAoB,AAAE,eAAX,kBAAa,IAAK;IAAI;;AAG9C,YAAG,eAAW,gBAAW;IAAG;YAGxB;;AACtB,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AACX,2CADK,KAAK,KACP,AAAM,AAAU,KAAX,cAAc;IAC1B;;AAGqB,YAAA,AAA8C,gDAAX,kBAAS;IAAE;;;QA9B5D;;;EACL","file":"../../../../../../../../../../packages/flutter/src/gestures/gesture_settings.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__gesture_settings: gesture_settings
  };
}));

//# sourceMappingURL=gesture_settings.dart.lib.js.map
