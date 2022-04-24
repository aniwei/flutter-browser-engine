define(['dart_sdk', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__painting__box_shadow_dart(dart_sdk, packages__flutter__src__painting__debug$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const debug$ = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  var box_shadow = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfBoxShadow: () => (T.JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.BlurStyle.prototype,
        [_Enum__name]: "normal",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/box_shadow.dart",
    "package:flutter/src/painting/box_shadow.dart"
  ];
  var spreadRadius$ = dart.privateName(box_shadow, "BoxShadow.spreadRadius");
  var blurStyle$ = dart.privateName(box_shadow, "BoxShadow.blurStyle");
  var Color_value = dart.privateName(ui, "Color.value");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  box_shadow.BoxShadow = class BoxShadow extends ui.Shadow {
    get spreadRadius() {
      return this[spreadRadius$];
    }
    set spreadRadius(value) {
      super.spreadRadius = value;
    }
    get blurStyle() {
      return this[blurStyle$];
    }
    set blurStyle(value) {
      super.blurStyle = value;
    }
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : C[0] || CT.C0;
      let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
      let blurRadius = opts && 'blurRadius' in opts ? opts.blurRadius : 0;
      let spreadRadius = opts && 'spreadRadius' in opts ? opts.spreadRadius : 0;
      let blurStyle = opts && 'blurStyle' in opts ? opts.blurStyle : C[2] || CT.C2;
      return new box_shadow.BoxShadow.new({color: color, offset: offset, blurRadius: blurRadius, spreadRadius: spreadRadius, blurStyle: blurStyle});
    }
    toPaint() {
      let t0;
      let result = (t0 = ui.Paint.new(), (() => {
        t0.color = this.color;
        t0.maskFilter = new ui.MaskFilter.blur(this.blurStyle, this.blurSigma);
        return t0;
      })());
      if (!dart.fn(() => {
        if (debug.debugDisableShadows) result.maskFilter = null;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 61, 12, "() {\n      if (debugDisableShadows)\n        result.maskFilter = null;\n      return true;\n    }()");
      return result;
    }
    scale(factor) {
      return new box_shadow.BoxShadow.new({color: this.color, offset: this.offset['*'](factor), blurRadius: this.blurRadius * factor, spreadRadius: this.spreadRadius * factor, blurStyle: this.blurStyle});
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 89, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - t);
      return new box_shadow.BoxShadow.new({color: dart.nullCheck(ui.Color.lerp(a.color, b.color, t)), offset: dart.nullCheck(ui.Offset.lerp(a.offset, b.offset, t)), blurRadius: dart.nullCheck(ui.lerpDouble(a.blurRadius, b.blurRadius, t)), spreadRadius: dart.nullCheck(ui.lerpDouble(a.spreadRadius, b.spreadRadius, t)), blurStyle: a.blurStyle === ui.BlurStyle.normal ? b.blurStyle : a.blurStyle});
    }
    static lerpList(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 111, 12, "t != null");
      if (a == null && b == null) return null;
      a == null ? a = T.JSArrayOfBoxShadow().of([]) : null;
      b == null ? b = T.JSArrayOfBoxShadow().of([]) : null;
      let commonLength = math.min(core.int, a[$length], b[$length]);
      return (() => {
        let t0 = T.JSArrayOfBoxShadow().of([]);
        for (let i = 0; i < commonLength; i = i + 1)
          t0.push(dart.nullCheck(box_shadow.BoxShadow.lerp(a[$_get](i), b[$_get](i), t)));
        for (let i = commonLength; i < a[$length]; i = i + 1)
          t0.push(a[$_get](i).scale(1.0 - t));
        for (let i = commonLength; i < b[$length]; i = i + 1)
          t0.push(b[$_get](i).scale(t));
        return t0;
      })();
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return box_shadow.BoxShadow.is(other) && other.color._equals(this.color) && other.offset._equals(this.offset) && other.blurRadius === this.blurRadius && other.spreadRadius === this.spreadRadius && other.blurStyle === this.blurStyle;
    }
    get hashCode() {
      return ui.hashValues(this.color, this.offset, this.blurRadius, this.spreadRadius, this.blurStyle);
    }
    toString() {
      return "BoxShadow(" + dart.str(this.color) + ", " + dart.str(this.offset) + ", " + debug$.debugFormatDouble(this.blurRadius) + ", " + debug$.debugFormatDouble(this.spreadRadius) + "), " + dart.str(this.blurStyle);
    }
  };
  (box_shadow.BoxShadow.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : C[0] || CT.C0;
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    let blurRadius = opts && 'blurRadius' in opts ? opts.blurRadius : 0;
    let spreadRadius = opts && 'spreadRadius' in opts ? opts.spreadRadius : 0;
    let blurStyle = opts && 'blurStyle' in opts ? opts.blurStyle : C[2] || CT.C2;
    this[spreadRadius$] = spreadRadius;
    this[blurStyle$] = blurStyle;
    box_shadow.BoxShadow.__proto__.new.call(this, {color: color, offset: offset, blurRadius: blurRadius});
    ;
  }).prototype = box_shadow.BoxShadow.prototype;
  dart.addTypeTests(box_shadow.BoxShadow);
  dart.addTypeCaches(box_shadow.BoxShadow);
  dart.setMethodSignature(box_shadow.BoxShadow, () => ({
    __proto__: dart.getMethods(box_shadow.BoxShadow.__proto__),
    scale: dart.fnType(box_shadow.BoxShadow, [core.double])
  }));
  dart.setStaticMethodSignature(box_shadow.BoxShadow, () => ['lerp', 'lerpList']);
  dart.setLibraryUri(box_shadow.BoxShadow, I[1]);
  dart.setFieldSignature(box_shadow.BoxShadow, () => ({
    __proto__: dart.getFields(box_shadow.BoxShadow.__proto__),
    spreadRadius: dart.finalFieldType(core.double),
    blurStyle: dart.finalFieldType(ui.BlurStyle)
  }));
  dart.defineExtensionMethods(box_shadow.BoxShadow, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_shadow.BoxShadow, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/box_shadow.dart", {
    "package:flutter/src/painting/box_shadow.dart": box_shadow
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box_shadow.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0Ce;;;;;;IAKG;;;;;;;;;;;;;;;;AAUF,yCAAS;AACjB,mBAAQ;AACR,wBAAwB,uBAAK,gBAAW;;;AAC5C,WAAO,AAIN;AAHC,YAAI,2BACF,AAAO,AAAiB,MAAlB,cAAc;AACtB,cAAO;;AAET,YAAO,OAAM;IACf;UAIuB;AACrB,YAAO,sCACE,oBACC,AAAO,iBAAE,MAAM,eACX,AAAW,kBAAE,MAAM,gBACjB,AAAa,oBAAE,MAAM,aACxB;IAEf;gBASkC,GAAc,GAAU;AACxD,YAAO,AAAE,CAAD;AACR,UAAI,AAAE,CAAD,YAAY,AAAE,CAAD,UAChB,MAAO;AACT,UAAI,AAAE,CAAD,UACH,MAAQ,AAAE,gBAAH,CAAC,QAAQ,CAAC;AACnB,UAAI,AAAE,CAAD,UACH,MAAO,AAAE,EAAD,OAAO,AAAI,MAAE,CAAC;AACxB,YAAO,sCACiC,eAAzB,cAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,YACK,eAA3B,eAAK,AAAE,CAAD,SAAS,AAAE,CAAD,SAAS,CAAC,gBACe,eAAzC,cAAW,AAAE,CAAD,aAAa,AAAE,CAAD,aAAa,CAAC,kBACO,eAA7C,cAAW,AAAE,CAAD,eAAe,AAAE,CAAD,eAAe,CAAC,eAClD,AAAE,AAAU,CAAX,eAAwB,sBAAS,AAAE,CAAD,aAAa,AAAE,CAAD;IAEhE;oBAOkD,GAAoB,GAAU;AAC9E,YAAO,AAAE,CAAD;AACR,UAAI,AAAE,CAAD,YAAY,AAAE,CAAD,UAChB,MAAO;AACU,MAAnB,AAAE,CAAD,WAAD,IAAiB,gCAAf;AACiB,MAAnB,AAAE,CAAD,WAAD,IAAiB,gCAAf;AACQ,yBAAoB,mBAAI,AAAE,CAAD,WAAS,AAAE,CAAD;AAC7C,YAAkB;;AAChB,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,YAAY,EAAE,IAAA,AAAE,CAAD,GAAI;AAAgC,iCAAnB,0BAAK,AAAC,CAAA,QAAC,CAAC,GAAG,AAAC,CAAA,QAAC,CAAC,GAAG,CAAC;AACtE,iBAAS,IAAI,YAAY,EAAE,AAAE,CAAD,GAAG,AAAE,CAAD,WAAS,IAAA,AAAE,CAAD,GAAI;AAAQ,kBAAL,AAAC,CAAA,QAAC,CAAC,QAAQ,AAAI,MAAE,CAAC;AACnE,iBAAS,IAAI,YAAY,EAAE,AAAE,CAAD,GAAG,AAAE,CAAD,WAAS,IAAA,AAAE,CAAD,GAAI;AAAQ,kBAAL,AAAC,CAAA,QAAC,CAAC,QAAQ,CAAC;;;IAEjE;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAKT,yBALG,KAAK,KACL,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAO,KAAR,gBAAW,gBAChB,AAAM,AAAW,KAAZ,gBAAe,mBACpB,AAAM,AAAa,KAAd,kBAAiB,qBACtB,AAAM,AAAU,KAAX,eAAc;IAC5B;;AAGoB,2BAAW,YAAO,aAAQ,iBAAY,mBAAc;IAAU;;AAG7D,YAAA,AAA8G,yBAAlG,cAAK,gBAAG,eAAM,OAAI,yBAAkB,mBAAY,OAAI,yBAAkB,qBAAc,iBAAI;IAAU;;;QA3G3H;QACC;QACA;QACF;QACA;IADA;IACA;AACF,0DAAa,KAAK,UAAU,MAAM,cAAc,UAAU;;EAAC","file":"../../../../../../../../../../packages/flutter/src/painting/box_shadow.dart.lib.js"}');
  // Exports:
  return {
    src__painting__box_shadow: box_shadow
  };
}));

//# sourceMappingURL=box_shadow.dart.lib.js.map
