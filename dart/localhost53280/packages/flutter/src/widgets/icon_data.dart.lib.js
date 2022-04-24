define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__icon_data_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var icon_data = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toRadixString = dartx.toRadixString;
  var $toUpperCase = dartx.toUpperCase;
  var $padLeft = dartx.padLeft;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$Object: () => (T.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "singleLine",
        [_Enum_index]: 8
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "info",
        [_Enum_index]: 3
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "package:flutter/src/widgets/icon_data.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon_data.dart"
  ];
  var codePoint$ = dart.privateName(icon_data, "IconData.codePoint");
  var fontFamily$ = dart.privateName(icon_data, "IconData.fontFamily");
  var fontPackage$ = dart.privateName(icon_data, "IconData.fontPackage");
  var matchTextDirection$ = dart.privateName(icon_data, "IconData.matchTextDirection");
  icon_data.IconData = class IconData extends core.Object {
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get fontPackage() {
      return this[fontPackage$];
    }
    set fontPackage(value) {
      super.fontPackage = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    static ['_#new#tearOff'](codePoint, opts) {
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontPackage = opts && 'fontPackage' in opts ? opts.fontPackage : null;
      let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
      return new icon_data.IconData.new(codePoint, {fontFamily: fontFamily, fontPackage: fontPackage, matchTextDirection: matchTextDirection});
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return icon_data.IconData.is(other) && other.codePoint === this.codePoint && other.fontFamily == this.fontFamily && other.fontPackage == this.fontPackage && other.matchTextDirection === this.matchTextDirection;
    }
    get hashCode() {
      return ui.hashValues(this.codePoint, this.fontFamily, this.fontPackage, this.matchTextDirection);
    }
    toString() {
      return "IconData(U+" + this.codePoint[$toRadixString](16)[$toUpperCase]()[$padLeft](5, "0") + ")";
    }
  };
  (icon_data.IconData.new = function(codePoint, opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontPackage = opts && 'fontPackage' in opts ? opts.fontPackage : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    this[codePoint$] = codePoint;
    this[fontFamily$] = fontFamily;
    this[fontPackage$] = fontPackage;
    this[matchTextDirection$] = matchTextDirection;
    ;
  }).prototype = icon_data.IconData.prototype;
  dart.addTypeTests(icon_data.IconData);
  dart.addTypeCaches(icon_data.IconData);
  dart.setLibraryUri(icon_data.IconData, I[0]);
  dart.setFieldSignature(icon_data.IconData, () => ({
    __proto__: dart.getFields(icon_data.IconData.__proto__),
    codePoint: dart.finalFieldType(core.int),
    fontFamily: dart.finalFieldType(dart.nullable(core.String)),
    fontPackage: dart.finalFieldType(dart.nullable(core.String)),
    matchTextDirection: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(icon_data.IconData, ['_equals', 'toString']);
  dart.defineExtensionAccessors(icon_data.IconData, ['hashCode']);
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  icon_data.IconDataProperty = class IconDataProperty extends diagnostics.DiagnosticsProperty$(icon_data.IconData) {
    static ['_#new#tearOff'](name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let style = opts && 'style' in opts ? opts.style : C[0] || CT.C0;
      let level = opts && 'level' in opts ? opts.level : C[1] || CT.C1;
      return new icon_data.IconDataProperty.new(name, value, {ifNull: ifNull, showName: showName, style: style, level: level});
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      if (this.value != null) {
        json[$_set]("valueProperties", new (T.IdentityMapOfString$Object()).from(["codePoint", dart.nullCheck(this.value).codePoint]));
      }
      return json;
    }
  };
  (icon_data.IconDataProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let style = opts && 'style' in opts ? opts.style : C[0] || CT.C0;
    let level = opts && 'level' in opts ? opts.level : C[1] || CT.C1;
    if (!(showName !== null)) dart.assertFailed(null, I[1], 82, 15, "showName != null");
    if (!(style !== null)) dart.assertFailed(null, I[1], 83, 15, "style != null");
    if (!(level !== null)) dart.assertFailed(null, I[1], 84, 15, "level != null");
    icon_data.IconDataProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, style: style, level: level});
    ;
  }).prototype = icon_data.IconDataProperty.prototype;
  dart.addTypeTests(icon_data.IconDataProperty);
  dart.addTypeCaches(icon_data.IconDataProperty);
  dart.setLibraryUri(icon_data.IconDataProperty, I[0]);
  dart.trackLibraries("packages/flutter/src/widgets/icon_data.dart", {
    "package:flutter/src/widgets/icon_data.dart": icon_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6BY;;;;;;IAGI;;;;;;IAUA;;;;;;IAOH;;;;;;;;;;;;YAGa;;AACtB,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAIT,uBAJG,KAAK,KACL,AAAM,AAAU,KAAX,eAAc,kBACnB,AAAM,AAAW,KAAZ,eAAe,mBACpB,AAAM,AAAY,KAAb,gBAAgB,oBACrB,AAAM,AAAmB,KAApB,wBAAuB;IACrC;;AAGoB,2BAAW,gBAAW,iBAAY,kBAAa;IAAmB;;AAGjE,YAAA,AAA0E,iBAA5D,AAAU,AAAkB,AAAc,+BAAlB,8BAA0B,GAAG,OAAK;IAAE;;qCA5CxF;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;cAkE8D;AACnC,iBAAa,gBAAU,QAAQ;AAC1D,UAAI;AAGD,QAFD,AAAI,IAAA,QAAC,mBAAqC,2CACxC,aAAkB,AAAE,eAAP;;AAGjB,YAAO,KAAI;IACb;;6CAzBS,MACG;QACF;QACH;QACgB;QACL;UACN,AAAS,QAAD;UACR,AAAM,KAAD;UACL,AAAM,KAAD;AACZ,wDAAM,IAAI,EAAE,KAAK,aACL,QAAQ,UACV,MAAM,SACP,KAAK,SACL,KAAK;;EACb","file":"../../../../../../../../../../packages/flutter/src/widgets/icon_data.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__icon_data: icon_data
  };
}));

//# sourceMappingURL=icon_data.dart.lib.js.map
