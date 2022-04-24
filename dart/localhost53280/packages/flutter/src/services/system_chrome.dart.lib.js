define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/services/restoration.dart'], (function load__packages__flutter__src__services__system_chrome_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__services__restoration$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const system_channels = packages__flutter__src__services__restoration$46dart.src__services__system_channels;
  const binding = packages__flutter__src__services__restoration$46dart.src__services__binding;
  var system_chrome = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_Enum__name]: "portraitUp",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_Enum__name]: "landscapeLeft",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_Enum__name]: "portraitDown",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_Enum__name]: "landscapeRight",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], system_chrome.DeviceOrientation);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_Enum__name]: "top",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_Enum__name]: "bottom",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.constList([C[5] || CT.C5, C[6] || CT.C6], system_chrome.SystemUiOverlay);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: system_chrome.SystemUiMode.prototype,
        [_Enum__name]: "leanBack",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: system_chrome.SystemUiMode.prototype,
        [_Enum__name]: "immersive",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: system_chrome.SystemUiMode.prototype,
        [_Enum__name]: "immersiveSticky",
        [_Enum_index]: 2
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: system_chrome.SystemUiMode.prototype,
        [_Enum__name]: "edgeToEdge",
        [_Enum_index]: 3
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: system_chrome.SystemUiMode.prototype,
        [_Enum__name]: "manual",
        [_Enum_index]: 4
      });
    },
    get C13() {
      return C[13] = dart.constList([C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12], system_chrome.SystemUiMode);
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "dark",
        [_Enum_index]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        [systemStatusBarContrastEnforced$]: null,
        [statusBarIconBrightness$]: C[15] || CT.C15,
        [statusBarBrightness$]: C[16] || CT.C16,
        [statusBarColor$]: null,
        [systemNavigationBarContrastEnforced$]: null,
        [systemNavigationBarIconBrightness$]: C[15] || CT.C15,
        [systemNavigationBarDividerColor$]: null,
        [systemNavigationBarColor$]: C[17] || CT.C17
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        [systemStatusBarContrastEnforced$]: null,
        [statusBarIconBrightness$]: C[16] || CT.C16,
        [statusBarBrightness$]: C[15] || CT.C15,
        [statusBarColor$]: null,
        [systemNavigationBarContrastEnforced$]: null,
        [systemNavigationBarIconBrightness$]: C[15] || CT.C15,
        [systemNavigationBarDividerColor$]: null,
        [systemNavigationBarColor$]: C[17] || CT.C17
      });
    }
  }, false);
  var C = Array(19).fill(void 0);
  var I = [
    "package:flutter/src/services/system_chrome.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/system_chrome.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  system_chrome.DeviceOrientation = class DeviceOrientation extends core._Enum {
    toString() {
      return "DeviceOrientation." + this[_name];
    }
  };
  (system_chrome.DeviceOrientation.new = function(index, name) {
    system_chrome.DeviceOrientation.__proto__.new.call(this, index, name);
    ;
  }).prototype = system_chrome.DeviceOrientation.prototype;
  dart.addTypeTests(system_chrome.DeviceOrientation);
  dart.addTypeCaches(system_chrome.DeviceOrientation);
  dart.setLibraryUri(system_chrome.DeviceOrientation, I[0]);
  dart.setStaticFieldSignature(system_chrome.DeviceOrientation, () => ['values', 'portraitUp', 'landscapeLeft', 'portraitDown', 'landscapeRight']);
  dart.defineExtensionMethods(system_chrome.DeviceOrientation, ['toString']);
  system_chrome.DeviceOrientation.portraitUp = C[0] || CT.C0;
  system_chrome.DeviceOrientation.landscapeLeft = C[1] || CT.C1;
  system_chrome.DeviceOrientation.portraitDown = C[2] || CT.C2;
  system_chrome.DeviceOrientation.landscapeRight = C[3] || CT.C3;
  system_chrome.DeviceOrientation.values = C[4] || CT.C4;
  var label$ = dart.privateName(system_chrome, "ApplicationSwitcherDescription.label");
  var primaryColor$ = dart.privateName(system_chrome, "ApplicationSwitcherDescription.primaryColor");
  system_chrome.ApplicationSwitcherDescription = class ApplicationSwitcherDescription extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
    static ['_#new#tearOff'](opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      return new system_chrome.ApplicationSwitcherDescription.new({label: label, primaryColor: primaryColor});
    }
  };
  (system_chrome.ApplicationSwitcherDescription.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    this[label$] = label;
    this[primaryColor$] = primaryColor;
    ;
  }).prototype = system_chrome.ApplicationSwitcherDescription.prototype;
  dart.addTypeTests(system_chrome.ApplicationSwitcherDescription);
  dart.addTypeCaches(system_chrome.ApplicationSwitcherDescription);
  dart.setLibraryUri(system_chrome.ApplicationSwitcherDescription, I[0]);
  dart.setFieldSignature(system_chrome.ApplicationSwitcherDescription, () => ({
    __proto__: dart.getFields(system_chrome.ApplicationSwitcherDescription.__proto__),
    label: dart.finalFieldType(dart.nullable(core.String)),
    primaryColor: dart.finalFieldType(dart.nullable(core.int))
  }));
  system_chrome.SystemUiOverlay = class SystemUiOverlay extends core._Enum {
    toString() {
      return "SystemUiOverlay." + this[_name];
    }
  };
  (system_chrome.SystemUiOverlay.new = function(index, name) {
    system_chrome.SystemUiOverlay.__proto__.new.call(this, index, name);
    ;
  }).prototype = system_chrome.SystemUiOverlay.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlay);
  dart.addTypeCaches(system_chrome.SystemUiOverlay);
  dart.setLibraryUri(system_chrome.SystemUiOverlay, I[0]);
  dart.setStaticFieldSignature(system_chrome.SystemUiOverlay, () => ['values', 'top', 'bottom']);
  dart.defineExtensionMethods(system_chrome.SystemUiOverlay, ['toString']);
  system_chrome.SystemUiOverlay.top = C[5] || CT.C5;
  system_chrome.SystemUiOverlay.bottom = C[6] || CT.C6;
  system_chrome.SystemUiOverlay.values = C[7] || CT.C7;
  system_chrome.SystemUiMode = class SystemUiMode extends core._Enum {
    toString() {
      return "SystemUiMode." + this[_name];
    }
  };
  (system_chrome.SystemUiMode.new = function(index, name) {
    system_chrome.SystemUiMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = system_chrome.SystemUiMode.prototype;
  dart.addTypeTests(system_chrome.SystemUiMode);
  dart.addTypeCaches(system_chrome.SystemUiMode);
  dart.setLibraryUri(system_chrome.SystemUiMode, I[0]);
  dart.setStaticFieldSignature(system_chrome.SystemUiMode, () => ['values', 'leanBack', 'immersive', 'immersiveSticky', 'edgeToEdge', 'manual']);
  dart.defineExtensionMethods(system_chrome.SystemUiMode, ['toString']);
  system_chrome.SystemUiMode.leanBack = C[8] || CT.C8;
  system_chrome.SystemUiMode.immersive = C[9] || CT.C9;
  system_chrome.SystemUiMode.immersiveSticky = C[10] || CT.C10;
  system_chrome.SystemUiMode.edgeToEdge = C[11] || CT.C11;
  system_chrome.SystemUiMode.manual = C[12] || CT.C12;
  system_chrome.SystemUiMode.values = C[13] || CT.C13;
  var systemNavigationBarColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarColor");
  var systemNavigationBarDividerColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarDividerColor");
  var systemNavigationBarIconBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarIconBrightness");
  var systemNavigationBarContrastEnforced$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemNavigationBarContrastEnforced");
  var statusBarColor$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarColor");
  var statusBarBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarBrightness");
  var statusBarIconBrightness$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.statusBarIconBrightness");
  var systemStatusBarContrastEnforced$ = dart.privateName(system_chrome, "SystemUiOverlayStyle.systemStatusBarContrastEnforced");
  var _toMap = dart.privateName(system_chrome, "_toMap");
  var Color_value = dart.privateName(ui, "Color.value");
  system_chrome.SystemUiOverlayStyle = class SystemUiOverlayStyle extends core.Object {
    get systemNavigationBarColor() {
      return this[systemNavigationBarColor$];
    }
    set systemNavigationBarColor(value) {
      super.systemNavigationBarColor = value;
    }
    get systemNavigationBarDividerColor() {
      return this[systemNavigationBarDividerColor$];
    }
    set systemNavigationBarDividerColor(value) {
      super.systemNavigationBarDividerColor = value;
    }
    get systemNavigationBarIconBrightness() {
      return this[systemNavigationBarIconBrightness$];
    }
    set systemNavigationBarIconBrightness(value) {
      super.systemNavigationBarIconBrightness = value;
    }
    get systemNavigationBarContrastEnforced() {
      return this[systemNavigationBarContrastEnforced$];
    }
    set systemNavigationBarContrastEnforced(value) {
      super.systemNavigationBarContrastEnforced = value;
    }
    get statusBarColor() {
      return this[statusBarColor$];
    }
    set statusBarColor(value) {
      super.statusBarColor = value;
    }
    get statusBarBrightness() {
      return this[statusBarBrightness$];
    }
    set statusBarBrightness(value) {
      super.statusBarBrightness = value;
    }
    get statusBarIconBrightness() {
      return this[statusBarIconBrightness$];
    }
    set statusBarIconBrightness(value) {
      super.statusBarIconBrightness = value;
    }
    get systemStatusBarContrastEnforced() {
      return this[systemStatusBarContrastEnforced$];
    }
    set systemStatusBarContrastEnforced(value) {
      super.systemStatusBarContrastEnforced = value;
    }
    static ['_#new#tearOff'](opts) {
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
      let systemNavigationBarContrastEnforced = opts && 'systemNavigationBarContrastEnforced' in opts ? opts.systemNavigationBarContrastEnforced : null;
      let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
      let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
      let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
      let systemStatusBarContrastEnforced = opts && 'systemStatusBarContrastEnforced' in opts ? opts.systemStatusBarContrastEnforced : null;
      return new system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: systemNavigationBarColor, systemNavigationBarDividerColor: systemNavigationBarDividerColor, systemNavigationBarIconBrightness: systemNavigationBarIconBrightness, systemNavigationBarContrastEnforced: systemNavigationBarContrastEnforced, statusBarColor: statusBarColor, statusBarBrightness: statusBarBrightness, statusBarIconBrightness: statusBarIconBrightness, systemStatusBarContrastEnforced: systemStatusBarContrastEnforced});
    }
    [_toMap]() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      return new (T.IdentityMapOfString$dynamic()).from(["systemNavigationBarColor", (t0 = this.systemNavigationBarColor, t0 == null ? null : t0.value), "systemNavigationBarDividerColor", (t0$ = this.systemNavigationBarDividerColor, t0$ == null ? null : t0$.value), "systemStatusBarContrastEnforced", this.systemStatusBarContrastEnforced, "statusBarColor", (t0$0 = this.statusBarColor, t0$0 == null ? null : t0$0.value), "statusBarBrightness", (t0$1 = this.statusBarBrightness, t0$1 == null ? null : dart.toString(t0$1)), "statusBarIconBrightness", (t0$2 = this.statusBarIconBrightness, t0$2 == null ? null : dart.toString(t0$2)), "systemNavigationBarIconBrightness", (t0$3 = this.systemNavigationBarIconBrightness, t0$3 == null ? null : dart.toString(t0$3)), "systemNavigationBarContrastEnforced", this.systemNavigationBarContrastEnforced]);
    }
    toString() {
      return object.objectRuntimeType(this, "SystemUiOverlayStyle") + "(" + dart.str(this[_toMap]()) + ")";
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let systemNavigationBarContrastEnforced = opts && 'systemNavigationBarContrastEnforced' in opts ? opts.systemNavigationBarContrastEnforced : null;
      let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
      let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
      let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
      let systemStatusBarContrastEnforced = opts && 'systemStatusBarContrastEnforced' in opts ? opts.systemStatusBarContrastEnforced : null;
      let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
      return new system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: (t0 = systemNavigationBarColor, t0 == null ? this.systemNavigationBarColor : t0), systemNavigationBarDividerColor: (t0$ = systemNavigationBarDividerColor, t0$ == null ? this.systemNavigationBarDividerColor : t0$), systemNavigationBarContrastEnforced: (t0$0 = systemNavigationBarContrastEnforced, t0$0 == null ? this.systemNavigationBarContrastEnforced : t0$0), statusBarColor: (t0$1 = statusBarColor, t0$1 == null ? this.statusBarColor : t0$1), statusBarIconBrightness: (t0$2 = statusBarIconBrightness, t0$2 == null ? this.statusBarIconBrightness : t0$2), statusBarBrightness: (t0$3 = statusBarBrightness, t0$3 == null ? this.statusBarBrightness : t0$3), systemStatusBarContrastEnforced: (t0$4 = systemStatusBarContrastEnforced, t0$4 == null ? this.systemStatusBarContrastEnforced : t0$4), systemNavigationBarIconBrightness: (t0$5 = systemNavigationBarIconBrightness, t0$5 == null ? this.systemNavigationBarIconBrightness : t0$5)});
    }
    get hashCode() {
      return ui.hashValues(this.systemNavigationBarColor, this.systemNavigationBarDividerColor, this.systemNavigationBarContrastEnforced, this.statusBarColor, this.statusBarBrightness, this.statusBarIconBrightness, this.systemStatusBarContrastEnforced, this.systemNavigationBarIconBrightness);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return system_chrome.SystemUiOverlayStyle.is(other) && dart.equals(other.systemNavigationBarColor, this.systemNavigationBarColor) && dart.equals(other.systemNavigationBarDividerColor, this.systemNavigationBarDividerColor) && other.systemNavigationBarContrastEnforced == this.systemNavigationBarContrastEnforced && dart.equals(other.statusBarColor, this.statusBarColor) && other.statusBarIconBrightness == this.statusBarIconBrightness && other.statusBarBrightness == this.statusBarBrightness && other.systemStatusBarContrastEnforced == this.systemStatusBarContrastEnforced && other.systemNavigationBarIconBrightness == this.systemNavigationBarIconBrightness;
    }
  };
  (system_chrome.SystemUiOverlayStyle.new = function(opts) {
    let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
    let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
    let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
    let systemNavigationBarContrastEnforced = opts && 'systemNavigationBarContrastEnforced' in opts ? opts.systemNavigationBarContrastEnforced : null;
    let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
    let systemStatusBarContrastEnforced = opts && 'systemStatusBarContrastEnforced' in opts ? opts.systemStatusBarContrastEnforced : null;
    this[systemNavigationBarColor$] = systemNavigationBarColor;
    this[systemNavigationBarDividerColor$] = systemNavigationBarDividerColor;
    this[systemNavigationBarIconBrightness$] = systemNavigationBarIconBrightness;
    this[systemNavigationBarContrastEnforced$] = systemNavigationBarContrastEnforced;
    this[statusBarColor$] = statusBarColor;
    this[statusBarBrightness$] = statusBarBrightness;
    this[statusBarIconBrightness$] = statusBarIconBrightness;
    this[systemStatusBarContrastEnforced$] = systemStatusBarContrastEnforced;
    ;
  }).prototype = system_chrome.SystemUiOverlayStyle.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlayStyle);
  dart.addTypeCaches(system_chrome.SystemUiOverlayStyle);
  dart.setMethodSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getMethods(system_chrome.SystemUiOverlayStyle.__proto__),
    [_toMap]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(system_chrome.SystemUiOverlayStyle, [], {statusBarBrightness: dart.nullable(ui.Brightness), statusBarColor: dart.nullable(ui.Color), statusBarIconBrightness: dart.nullable(ui.Brightness), systemNavigationBarColor: dart.nullable(ui.Color), systemNavigationBarContrastEnforced: dart.nullable(core.bool), systemNavigationBarDividerColor: dart.nullable(ui.Color), systemNavigationBarIconBrightness: dart.nullable(ui.Brightness), systemStatusBarContrastEnforced: dart.nullable(core.bool)}, {})
  }));
  dart.setLibraryUri(system_chrome.SystemUiOverlayStyle, I[0]);
  dart.setFieldSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlayStyle.__proto__),
    systemNavigationBarColor: dart.finalFieldType(dart.nullable(ui.Color)),
    systemNavigationBarDividerColor: dart.finalFieldType(dart.nullable(ui.Color)),
    systemNavigationBarIconBrightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    systemNavigationBarContrastEnforced: dart.finalFieldType(dart.nullable(core.bool)),
    statusBarColor: dart.finalFieldType(dart.nullable(ui.Color)),
    statusBarBrightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    statusBarIconBrightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    systemStatusBarContrastEnforced: dart.finalFieldType(dart.nullable(core.bool))
  }));
  dart.setStaticFieldSignature(system_chrome.SystemUiOverlayStyle, () => ['light', 'dark']);
  dart.defineExtensionMethods(system_chrome.SystemUiOverlayStyle, ['toString', '_equals']);
  dart.defineExtensionAccessors(system_chrome.SystemUiOverlayStyle, ['hashCode']);
  dart.defineLazy(system_chrome.SystemUiOverlayStyle, {
    /*system_chrome.SystemUiOverlayStyle.light*/get light() {
      return C[14] || CT.C14;
    },
    /*system_chrome.SystemUiOverlayStyle.dark*/get dark() {
      return C[18] || CT.C18;
    }
  }, false);
  system_chrome.SystemChrome = class SystemChrome extends core.Object {
    static ['_#_#tearOff']() {
      return new system_chrome.SystemChrome.__();
    }
    static setPreferredOrientations(orientations) {
      return async.async(dart.void, function* setPreferredOrientations() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setPreferredOrientations", system_chrome._stringify(orientations));
      });
    }
    static setApplicationSwitcherDescription(description) {
      return async.async(dart.void, function* setApplicationSwitcherDescription() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setApplicationSwitcherDescription", new (T.IdentityMapOfString$dynamic()).from(["label", description.label, "primaryColor", description.primaryColor]));
      });
    }
    static setEnabledSystemUIOverlays(overlays) {
      return async.async(dart.void, function* setEnabledSystemUIOverlays() {
        yield system_chrome.SystemChrome.setEnabledSystemUIMode(system_chrome.SystemUiMode.manual, {overlays: overlays});
      });
    }
    static setEnabledSystemUIMode(mode, opts) {
      let overlays = opts && 'overlays' in opts ? opts.overlays : null;
      return async.async(dart.void, function* setEnabledSystemUIMode() {
        if (mode !== system_chrome.SystemUiMode.manual) {
          yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setEnabledSystemUIMode", mode.toString());
        } else {
          if (!(mode === system_chrome.SystemUiMode.manual && overlays != null)) dart.assertFailed(null, I[1], 472, 14, "mode == SystemUiMode.manual && overlays != null");
          yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setEnabledSystemUIOverlays", system_chrome._stringify(dart.nullCheck(overlays)));
        }
      });
    }
    static setSystemUIChangeCallback(callback) {
      return async.async(dart.void, function* setSystemUIChangeCallback() {
        dart.nullCheck(binding.ServicesBinding.instance).setSystemUiChangeCallback(callback);
        if (callback != null) {
          yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setSystemUIChangeListener", null);
        }
      });
    }
    static restoreSystemUIOverlays() {
      return async.async(dart.void, function* restoreSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.restoreSystemUIOverlays", null);
      });
    }
    static setSystemUIOverlayStyle(style) {
      if (!(style !== null)) dart.assertFailed(null, I[1], 576, 12, "style != null");
      if (system_chrome.SystemChrome._pendingStyle != null) {
        system_chrome.SystemChrome._pendingStyle = style;
        return;
      }
      if (style._equals(system_chrome.SystemChrome._latestStyle)) {
        return;
      }
      system_chrome.SystemChrome._pendingStyle = style;
      async.scheduleMicrotask(dart.fn(() => {
        if (!(system_chrome.SystemChrome._pendingStyle != null)) dart.assertFailed(null, I[1], 589, 14, "_pendingStyle != null");
        if (!dart.equals(system_chrome.SystemChrome._pendingStyle, system_chrome.SystemChrome._latestStyle)) {
          system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setSystemUIOverlayStyle", dart.nullCheck(system_chrome.SystemChrome._pendingStyle)[_toMap]());
          system_chrome.SystemChrome._latestStyle = system_chrome.SystemChrome._pendingStyle;
        }
        system_chrome.SystemChrome._pendingStyle = null;
      }, T.VoidTovoid()));
    }
    static get latestStyle() {
      return system_chrome.SystemChrome._latestStyle;
    }
  };
  (system_chrome.SystemChrome.__ = function() {
    ;
  }).prototype = system_chrome.SystemChrome.prototype;
  dart.addTypeTests(system_chrome.SystemChrome);
  dart.addTypeCaches(system_chrome.SystemChrome);
  dart.setStaticMethodSignature(system_chrome.SystemChrome, () => ['setPreferredOrientations', 'setApplicationSwitcherDescription', 'setEnabledSystemUIOverlays', 'setEnabledSystemUIMode', 'setSystemUIChangeCallback', 'restoreSystemUIOverlays', 'setSystemUIOverlayStyle']);
  dart.setStaticGetterSignature(system_chrome.SystemChrome, () => ['latestStyle']);
  dart.setLibraryUri(system_chrome.SystemChrome, I[0]);
  dart.setStaticFieldSignature(system_chrome.SystemChrome, () => ['_pendingStyle', '_latestStyle']);
  dart.defineLazy(system_chrome.SystemChrome, {
    /*system_chrome.SystemChrome._pendingStyle*/get _pendingStyle() {
      return null;
    },
    set _pendingStyle(_) {},
    /*system_chrome.SystemChrome._latestStyle*/get _latestStyle() {
      return null;
    },
    set _latestStyle(_) {}
  }, false);
  system_chrome._stringify = function _stringify(list) {
    return (() => {
      let t0 = T.JSArrayOfString().of([]);
      for (let item of list)
        t0.push(dart.toString(item));
      return t0;
    })();
  };
  dart.trackLibraries("packages/flutter/src/services/system_chrome.dart", {
    "package:flutter/src/services/system_chrome.dart": system_chrome
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["system_chrome.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiDA;;yDAlBK;;;EAkBL;;;;;;;;;;;;;;IAagB;;;;;;IAMH;;;;;;;;;;;;;QATiC;QAAY;IAAZ;IAAY;;EAAe;;;;;;;;;;;;IAuBzE;;uDARK;;;EAQL;;;;;;;;;;;;IAiGA;;oDA1FK;;;EA0FL;;;;;;;;;;;;;;;;;;;;;;;IAsBe;;;;;;IAKA;;;;;;IAOK;;;;;;IAiBN;;;;;;IAKC;;;;;;IAKK;;;;;;IAKA;;;;;;IAiBN;;;;;;;;;;;;;;;;;;;AAsBV,YAAwB,6CACtB,8EAA4B,OAA0B,WACtD,8FAAmC,OAAiC,YACpE,mCAAmC,sCACnC,8DAAkB,OAAgB,aAClC,wEAAuB,OAAqB,sBAC5C,gFAA2B,OAAyB,sBACpD,oGAAqC,OAAmC,sBACxE,uCAAuC;IAE3C;;AAGqB,YAAG,AAA8D,0BAA5C,MAAM,0BAAwB,eAAG,kBAAS;IAAE;;;UAI7E;UACA;UACD;UACC;UACK;UACA;UACN;UACM;AAEZ,YAAO,wEAC8C,KAAzB,wBAAwB,EAAxB,aAAiC,uEACM,MAAhC,+BAA+B,EAA/B,cAAwC,mFACA,OAApC,mCAAmC,EAAnC,eAA4C,mEAClD,OAAf,cAAc,EAAd,eAAuB,uDACU,OAAxB,uBAAuB,EAAvB,eAAgC,4DAChB,OAApB,mBAAmB,EAAnB,eAA4B,oEACgB,OAAhC,+BAA+B,EAA/B,eAAwC,kFACJ,OAAlC,iCAAiC,EAAjC,eAA0C;IAEjF;;AAIE,YAAO,eACL,+BACA,sCACA,0CACA,qBACA,0BACA,8BACA,sCACA;IAEJ;YAGwB;;AACtB,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAQT,uCARG,KAAK,KAC0B,YAA/B,AAAM,KAAD,2BAA6B,kCACI,YAAtC,AAAM,KAAD,kCAAoC,yCACzC,AAAM,AAAoC,KAArC,wCAAwC,4CACxB,YAArB,AAAM,KAAD,iBAAmB,wBACxB,AAAM,AAAwB,KAAzB,4BAA4B,gCACjC,AAAM,AAAoB,KAArB,wBAAwB,4BAC7B,AAAM,AAAgC,KAAjC,oCAAoC,wCACzC,AAAM,AAAkC,KAAnC,sCAAsC;IACpD;;;QAjKO;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAPA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;MAsEgC,wCAAK;;;MASL,uCAAI;;;;;;;;oCAyG+B;AAAzB;AAIzC,QAHD,MAAqB,AAAS,gEAC5B,yCACA,yBAAW,YAAY;MAE3B;;6CAOqF;AAAhC;AAOlD,QAND,MAAqB,AAAS,gEAC5B,kDACiB,4CACf,SAAS,AAAY,WAAD,QACpB,gBAAgB,AAAY,WAAD;MAGjC;;sCA4BqE;AAAvB;AACyB,QAArE,MAAM,kDAAoC,8CAAkB,QAAQ;MACtE;;kCAkCwD;UAA+B;AAA7C;AACxC,YAAI,IAAI,KAAiB;AAItB,UAHD,MAAqB,AAAS,gEAC5B,uCACA,AAAK,IAAD;;AAGN,gBAAO,AAAK,AAAuB,IAAxB,KAAiB,qCAAU,QAAQ;AAI7C,UAHD,MAAqB,AAAS,gEAC5B,2CACA,yBAAmB,eAAR,QAAQ;;MAGzB;;qCAsBsE;AAAzB;AACkB,QAArC,AAAE,eAAV,4DAAoC,QAAQ;AAE5D,YAAI,QAAQ;AAIT,UAHD,MAAqB,AAAS,gEAC5B,0CACA;;MAGN;;;AAW2C;AAIxC,QAHD,MAAqB,AAAS,gEAC5B,wCACA;MAEJ;;mCAkDyD;AACvD,YAAO,AAAM,KAAD;AACZ,UAAI;AAEmB,QAArB,2CAAgB,KAAK;AACrB;;AAEF,UAAI,AAAM,KAAD,SAAI;AAGX;;AAEmB,MAArB,2CAAgB,KAAK;AAWnB,MAVF,wBAAkB;AAChB,cAAO,AAAc;AACrB,yBAAI,0CAAiB;AAIlB,UAHc,AAAS,gEACtB,wCACa,AAAE,eAAf;AAE0B,UAA5B,0CAAe;;AAEG,QAApB,2CAAgB;;IAEpB;;AAMgD;IAAY;;;;EAnP5C;;;;;;;;MA+Oa,wCAAa;;;;MAKb,uCAAY;;;;;iDA7PL;AAAS,UAAQ;;AACrD,eAAmB,OAAQ,KAAI;AAAO,8BAAL,IAAI;;;EACtC","file":"../../../../../../../../../../packages/flutter/src/services/system_chrome.dart.lib.js"}');
  // Exports:
  return {
    src__services__system_chrome: system_chrome
  };
}));

//# sourceMappingURL=system_chrome.dart.lib.js.map
