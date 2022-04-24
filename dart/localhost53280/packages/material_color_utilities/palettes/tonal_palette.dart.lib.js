define(['dart_sdk', 'packages/material_color_utilities/hct/hct.dart'], (function load__packages__material_color_utilities__palettes__tonal_palette_dart(dart_sdk, packages__material_color_utilities__hct__hct$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hct = packages__material_color_utilities__hct__hct$46dart.hct__hct;
  var tonal_palette = Object.create(dart.library);
  var $length = dartx.length;
  var $asMap = dartx.asMap;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $containsKey = dartx.containsKey;
  var $toDouble = dartx.toDouble;
  var $putIfAbsent = dartx.putIfAbsent;
  var $values = dartx.values;
  var $toSet = dartx.toSet;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfint$int: () => (T.IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))(),
    intAndintTovoid: () => (T.intAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int])))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    VoidToint: () => (T.VoidToint = dart.constFn(dart.fnType(core.int, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100], core.int);
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/.pub-cache/hosted/pub.dartlang.org/material_color_utilities-0.1.3/lib/palettes/tonal_palette.dart",
    "package:material_color_utilities/palettes/tonal_palette.dart"
  ];
  var _cache = dart.privateName(tonal_palette, "_cache");
  var _hue = dart.privateName(tonal_palette, "_hue");
  var _chroma = dart.privateName(tonal_palette, "_chroma");
  tonal_palette.TonalPalette = class TonalPalette extends core.Object {
    static ['_#_fromHueAndChroma#tearOff'](hue, chroma) {
      return new tonal_palette.TonalPalette._fromHueAndChroma(hue, chroma);
    }
    static ['_#_fromCache#tearOff'](cache) {
      return new tonal_palette.TonalPalette._fromCache(cache);
    }
    static of(hue, chroma) {
      return new tonal_palette.TonalPalette._fromHueAndChroma(hue, chroma);
    }
    static fromList(colors) {
      if (!(colors[$length] === tonal_palette.TonalPalette.commonSize)) dart.assertFailed(null, I[0], 71, 12, "colors.length == commonSize");
      let cache = new (T.IdentityMapOfint$int()).new();
      tonal_palette.TonalPalette.commonTones[$asMap]()[$forEach](dart.fn((index, toneValue) => {
        let t2, t1, t0;
        t0 = cache;
        t1 = toneValue;
        t2 = colors[$_get](index);
        t0[$_set](t1, t2);
        return t2;
      }, T.intAndintTovoid()));
      return new tonal_palette.TonalPalette._fromCache(cache);
    }
    get asList() {
      return tonal_palette.TonalPalette.commonTones[$map](core.int, dart.fn(tone => this.get(tone), T.intToint()))[$toList]();
    }
    get(tone) {
      if (this[_hue] == null || this[_chroma] == null) {
        if (!this[_cache][$containsKey](tone)) {
          dart.throw(new core.ArgumentError.value(tone, "tone", "When a TonalPalette is created with fromList, tone must be one of " + dart.str(tonal_palette.TonalPalette.commonTones)));
        } else {
          return dart.nullCheck(this[_cache][$_get](tone));
        }
      }
      let chroma = tone >= 90.0 ? math.min(core.double, dart.nullCheck(this[_chroma]), 40.0) : dart.nullCheck(this[_chroma]);
      return this[_cache][$putIfAbsent](tone, dart.fn(() => hct.HctColor.from(dart.nullCheck(this[_hue]), chroma, tone[$toDouble]()).toInt(), T.VoidToint()));
    }
    _equals(other) {
      if (other == null) return false;
      if (tonal_palette.TonalPalette.is(other)) {
        if (this[_hue] != null && this[_chroma] != null) {
          return this[_hue] == other[_hue] && this[_chroma] == other[_chroma];
        } else {
          return this[_cache][$values][$toSet]().containsAll(other[_cache][$values]);
        }
      }
      return false;
    }
    get hashCode() {
      return (core.Object.hash(this[_hue], this[_chroma]) ^ core.Object.hashAll(this[_cache][$values])) >>> 0;
    }
    toString() {
      if (this[_hue] != null && this[_chroma] != null) {
        return "TonalPalette.of(" + dart.str(this[_hue]) + ", " + dart.str(this[_chroma]) + ")";
      } else {
        return "TonalPalette.fromList(" + dart.str(this[_cache]) + ")";
      }
    }
  };
  (tonal_palette.TonalPalette._fromHueAndChroma = function(hue, chroma) {
    this[_cache] = new (T.IdentityMapOfint$int()).new();
    this[_hue] = hue;
    this[_chroma] = chroma;
    ;
  }).prototype = tonal_palette.TonalPalette.prototype;
  (tonal_palette.TonalPalette._fromCache = function(cache) {
    this[_cache] = cache;
    this[_hue] = null;
    this[_chroma] = null;
    ;
  }).prototype = tonal_palette.TonalPalette.prototype;
  dart.addTypeTests(tonal_palette.TonalPalette);
  dart.addTypeCaches(tonal_palette.TonalPalette);
  dart.setMethodSignature(tonal_palette.TonalPalette, () => ({
    __proto__: dart.getMethods(tonal_palette.TonalPalette.__proto__),
    get: dart.fnType(core.int, [core.int])
  }));
  dart.setStaticMethodSignature(tonal_palette.TonalPalette, () => ['of', 'fromList']);
  dart.setGetterSignature(tonal_palette.TonalPalette, () => ({
    __proto__: dart.getGetters(tonal_palette.TonalPalette.__proto__),
    asList: core.List$(core.int)
  }));
  dart.setLibraryUri(tonal_palette.TonalPalette, I[1]);
  dart.setFieldSignature(tonal_palette.TonalPalette, () => ({
    __proto__: dart.getFields(tonal_palette.TonalPalette.__proto__),
    [_hue]: dart.finalFieldType(dart.nullable(core.double)),
    [_chroma]: dart.finalFieldType(dart.nullable(core.double)),
    [_cache]: dart.finalFieldType(core.Map$(core.int, core.int))
  }));
  dart.setStaticFieldSignature(tonal_palette.TonalPalette, () => ['commonTones', 'commonSize']);
  dart.defineExtensionMethods(tonal_palette.TonalPalette, ['_equals', 'toString']);
  dart.defineExtensionAccessors(tonal_palette.TonalPalette, ['hashCode']);
  dart.defineLazy(tonal_palette.TonalPalette, {
    /*tonal_palette.TonalPalette.commonTones*/get commonTones() {
      return C[0] || CT.C0;
    },
    /*tonal_palette.TonalPalette.commonSize*/get commonSize() {
      return tonal_palette.TonalPalette.commonTones[$length];
    }
  }, false);
  dart.trackLibraries("packages/material_color_utilities/palettes/tonal_palette.dart", {
    "package:material_color_utilities/palettes/tonal_palette.dart": tonal_palette
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tonal_palette.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cA8DgC,KAAY;AACxC,YAAoB,kDAAkB,GAAG,EAAE,MAAM;IACnD;oBAKuC;AACrC,YAAO,AAAO,AAAO,MAAR,cAAW;AACpB,kBAAkB;AAE6C,MADnE,AAAY,AAAQ,2DAChB,SAAK,OAAW;;AAAc,kBAAK;aAAC,SAAS;aAAI,AAAM,MAAA,QAAC,KAAK;QAA1B;;;AACvC,YAAoB,2CAAW,KAAK;IACtC;;AAKwB,YAAA,AAAY,AAA6B,wDAAzB,QAAK,QAAS,SAAI,IAAI;IAAW;QAQ7D;AACV,UAAI,AAAK,sBAAW,AAAQ;AAC1B,aAAK,AAAO,2BAAY,IAAI;AAMxB,UALF,WAAqB,6BACnB,IAAI,EACJ,QAAM,AACN,gFACM;;AAGR,gBAAmB,gBAAZ,AAAM,oBAAC,IAAI;;;AAGhB,mBAAU,AAAK,IAAD,IAAI,OAAa,sBAAW,eAAP,gBAAU,QAAe,eAAP;AAC3D,YAAO,AAAO,4BACV,IAAI,EAAE,cAAe,AAAqC,kBAA5B,eAAJ,aAAO,MAAM,EAAE,AAAK,IAAD;IACnD;YAGwB;;AACtB,UAAU,8BAAN,KAAK;AACP,YAAI,sBAAgB;AAClB,gBAAO,AAAK,AAAc,eAAX,AAAM,KAAD,UAAS,AAAQ,iBAAG,AAAM,KAAD;;AAE7C,gBAAO,AAAO,AAAO,AAAQ,6CAAY,AAAM,AAAO,KAAR;;;AAGlD,YAAO;IACT;;AAII,YAA2B,EAApB,iBAAK,YAAM,iBAAkB,oBAAQ,AAAO;IAAO;;AAI5D,UAAI,sBAAgB;AAClB,cAAO,AAAkC,+BAAhB,cAAI,gBAAG,iBAAO;;AAEvC,cAAO,AAAgC,qCAAR,gBAAM;;IAEzC;;2DA9EsC,KAAY;IACrC,eAAE;IACJ,aAAE,GAAG;IACF,gBAAE,MAAM;;;oDAEgB;IACzB,eAAE,KAAK;IACT,aAAE;IACC,gBAAE;;EAAI;;;;;;;;;;;;;;;;;;;;;;;MA9BG,sCAAW;;;MAgBrB,qCAAU;YAAG,AAAY","file":"../../../../../../../../../../../packages/material_color_utilities/palettes/tonal_palette.dart.lib.js"}');
  // Exports:
  return {
    palettes__tonal_palette: tonal_palette
  };
}));

//# sourceMappingURL=tonal_palette.dart.lib.js.map
