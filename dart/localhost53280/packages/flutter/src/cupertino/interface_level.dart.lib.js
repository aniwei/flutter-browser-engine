define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__cupertino__interface_level_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var interface_level = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EnumPropertyOfCupertinoUserInterfaceLevelData: () => (T.EnumPropertyOfCupertinoUserInterfaceLevelData = dart.constFn(diagnostics.EnumProperty$(interface_level.CupertinoUserInterfaceLevelData)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: interface_level.CupertinoUserInterfaceLevelData.prototype,
        [_Enum__name]: "base",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: interface_level.CupertinoUserInterfaceLevelData.prototype,
        [_Enum__name]: "elevated",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.constList([C[0] || CT.C0, C[1] || CT.C1], interface_level.CupertinoUserInterfaceLevelData);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoUserInterfaceLevel",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/interface_level.dart"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "package:flutter/src/cupertino/interface_level.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/interface_level.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  interface_level.CupertinoUserInterfaceLevelData = class CupertinoUserInterfaceLevelData extends core._Enum {
    toString() {
      return "CupertinoUserInterfaceLevelData." + this[_name];
    }
  };
  (interface_level.CupertinoUserInterfaceLevelData.new = function(index, name) {
    interface_level.CupertinoUserInterfaceLevelData.__proto__.new.call(this, index, name);
    ;
  }).prototype = interface_level.CupertinoUserInterfaceLevelData.prototype;
  dart.addTypeTests(interface_level.CupertinoUserInterfaceLevelData);
  dart.addTypeCaches(interface_level.CupertinoUserInterfaceLevelData);
  dart.setLibraryUri(interface_level.CupertinoUserInterfaceLevelData, I[0]);
  dart.setStaticFieldSignature(interface_level.CupertinoUserInterfaceLevelData, () => ['values', 'base', 'elevated']);
  dart.defineExtensionMethods(interface_level.CupertinoUserInterfaceLevelData, ['toString']);
  interface_level.CupertinoUserInterfaceLevelData.base = C[0] || CT.C0;
  interface_level.CupertinoUserInterfaceLevelData.elevated = C[1] || CT.C1;
  interface_level.CupertinoUserInterfaceLevelData.values = C[2] || CT.C2;
  var _data = dart.privateName(interface_level, "CupertinoUserInterfaceLevel._data");
  var _data$ = dart.privateName(interface_level, "_data");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  interface_level.CupertinoUserInterfaceLevel = class CupertinoUserInterfaceLevel extends framework.InheritedWidget {
    get [_data$]() {
      return this[_data];
    }
    set [_data$](value) {
      super[_data$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let data = opts && 'data' in opts ? opts.data : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new interface_level.CupertinoUserInterfaceLevel.new({key: key, data: data, child: child, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    updateShouldNotify(oldWidget) {
      interface_level.CupertinoUserInterfaceLevel.as(oldWidget);
      return oldWidget[_data$] !== this[_data$];
    }
    static of(context) {
      if (!(context !== null)) dart.assertFailed(null, I[1], 68, 12, "context != null");
      let query = context.dependOnInheritedWidgetOfExactType(interface_level.CupertinoUserInterfaceLevel);
      if (query != null) return query[_data$];
      dart.throw(assertions.FlutterError.new("CupertinoUserInterfaceLevel.of() called with a context that does not contain a CupertinoUserInterfaceLevel.\n" + "No CupertinoUserInterfaceLevel ancestor could be found starting from the context that was passed " + "to CupertinoUserInterfaceLevel.of(). This can happen because you do not have a WidgetsApp or " + "MaterialApp widget (those widgets introduce a CupertinoUserInterfaceLevel), or it can happen " + "if the context you use comes from a widget above those widgets.\n" + "The context used was:\n" + "  " + dart.str(context)));
    }
    static maybeOf(context) {
      if (!(context !== null)) dart.assertFailed(null, I[1], 97, 12, "context != null");
      let query = context.dependOnInheritedWidgetOfExactType(interface_level.CupertinoUserInterfaceLevel);
      if (query != null) return query[_data$];
      return null;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfCupertinoUserInterfaceLevelData()).new("user interface level", this[_data$]));
    }
  };
  (interface_level.CupertinoUserInterfaceLevel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(data !== null)) dart.assertFailed(null, I[1], 47, 15, "data != null");
    this[_data] = data;
    interface_level.CupertinoUserInterfaceLevel.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = interface_level.CupertinoUserInterfaceLevel.prototype;
  dart.addTypeTests(interface_level.CupertinoUserInterfaceLevel);
  dart.addTypeCaches(interface_level.CupertinoUserInterfaceLevel);
  dart.setMethodSignature(interface_level.CupertinoUserInterfaceLevel, () => ({
    __proto__: dart.getMethods(interface_level.CupertinoUserInterfaceLevel.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setStaticMethodSignature(interface_level.CupertinoUserInterfaceLevel, () => ['of', 'maybeOf']);
  dart.setLibraryUri(interface_level.CupertinoUserInterfaceLevel, I[0]);
  dart.setFieldSignature(interface_level.CupertinoUserInterfaceLevel, () => ({
    __proto__: dart.getFields(interface_level.CupertinoUserInterfaceLevel.__proto__),
    [_data$]: dart.finalFieldType(interface_level.CupertinoUserInterfaceLevelData)
  }));
  dart.trackLibraries("packages/flutter/src/cupertino/interface_level.dart", {
    "package:flutter/src/cupertino/interface_level.dart": interface_level
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interface_level.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBA;;yEANK;;;EAML;;;;;;;;;;;;;;;;IA8BwC;;;;;;;;;;;;uBAGc;;AAAc,YAAA,AAAU,AAAM,UAAP,aAAU;IAAK;cAanC;AACrD,YAAO,AAAQ,OAAD;AACqB,kBAAQ,AAAQ,OAAD;AAClD,UAAI,KAAK,UACP,MAAO,AAAM,MAAD;AASb,MARD,WAAM,4BAAY,AAChB,kHACA,sGACA,kGACA,kGACA,sEACA,4BACA,gBAAI,OAAO;IAEf;mBAe6D;AAC3D,YAAO,AAAQ,OAAD;AACqB,kBAAQ,AAAQ,OAAD;AAClD,UAAI,KAAK,UACP,MAAO,AAAM,MAAD;AACd,YAAO;IACT;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACwD,MAA5F,AAAW,UAAD,KAAK,4DAA8C,wBAAwB;IACvF;;;QAhEO;QACoC;QACzB;;UACN,AAAK,IAAD;IACN,cAAE,IAAI;AACZ,+EAAW,GAAG,SAAS,KAAK;;EAAC","file":"../../../../../../../../../../packages/flutter/src/cupertino/interface_level.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__interface_level: interface_level
  };
}));

//# sourceMappingURL=interface_level.dart.lib.js.map
