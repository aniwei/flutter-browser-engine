define(['dart_sdk', 'packages/material_color_utilities/palettes/tonal_palette.dart', 'packages/material_color_utilities/hct/cam16.dart'], (function load__packages__material_color_utilities__palettes__core_palette_dart(dart_sdk, packages__material_color_utilities__palettes__tonal_palette$46dart, packages__material_color_utilities__hct__cam16$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tonal_palette = packages__material_color_utilities__palettes__tonal_palette$46dart.palettes__tonal_palette;
  const cam16 = packages__material_color_utilities__hct__cam16$46dart.hct__cam16;
  var core_palette = Object.create(dart.library);
  var $length = dartx.length;
  var $addAll = dartx.addAll;
  var $sublist = dartx.sublist;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/.pub-cache/hosted/pub.dartlang.org/material_color_utilities-0.1.3/lib/palettes/core_palette.dart",
    "package:material_color_utilities/palettes/core_palette.dart"
  ];
  var primary = dart.privateName(core_palette, "CorePalette.primary");
  var secondary = dart.privateName(core_palette, "CorePalette.secondary");
  var tertiary = dart.privateName(core_palette, "CorePalette.tertiary");
  var neutral = dart.privateName(core_palette, "CorePalette.neutral");
  var neutralVariant = dart.privateName(core_palette, "CorePalette.neutralVariant");
  var error = dart.privateName(core_palette, "CorePalette.error");
  core_palette.CorePalette = class CorePalette extends core.Object {
    get primary() {
      return this[primary];
    }
    set primary(value) {
      super.primary = value;
    }
    get secondary() {
      return this[secondary];
    }
    set secondary(value) {
      super.secondary = value;
    }
    get tertiary() {
      return this[tertiary];
    }
    set tertiary(value) {
      super.tertiary = value;
    }
    get neutral() {
      return this[neutral];
    }
    set neutral(value) {
      super.neutral = value;
    }
    get neutralVariant() {
      return this[neutralVariant];
    }
    set neutralVariant(value) {
      super.neutralVariant = value;
    }
    get error() {
      return this[error];
    }
    set error(value) {
      super.error = value;
    }
    static of(argb) {
      let cam = cam16.Cam16.fromInt(argb);
      return new core_palette.CorePalette.__(cam.hue, cam.chroma);
    }
    static ['_#_#tearOff'](hue, chroma) {
      return new core_palette.CorePalette.__(hue, chroma);
    }
    static ['_#fromList#tearOff'](colors) {
      return new core_palette.CorePalette.fromList(colors);
    }
    asList() {
      return (() => {
        let t0 = T.ListOfint().of(this.primary.asList);
        t0[$addAll](this.secondary.asList);
        t0[$addAll](this.tertiary.asList);
        t0[$addAll](this.neutral.asList);
        t0[$addAll](this.neutralVariant.asList);
        return t0;
      })();
    }
    _equals(other) {
      if (other == null) return false;
      return core_palette.CorePalette.is(other) && this.primary._equals(other.primary) && this.secondary._equals(other.secondary) && this.tertiary._equals(other.tertiary) && this.neutral._equals(other.neutral) && this.neutralVariant._equals(other.neutralVariant) && this.error._equals(other.error);
    }
    get hashCode() {
      return core.Object.hash(this.primary, this.secondary, this.tertiary, this.neutral, this.neutralVariant, this.error);
    }
    toString() {
      return "primary: " + dart.str(this.primary) + "\n" + "secondary: " + dart.str(this.secondary) + "\n" + "tertiary: " + dart.str(this.tertiary) + "\n" + "neutral: " + dart.str(this.neutral) + "\n" + "neutralVariant: " + dart.str(this.neutralVariant) + "\n" + "error: " + dart.str(this.error) + "\n";
    }
  };
  (core_palette.CorePalette.__ = function(hue, chroma) {
    this[error] = tonal_palette.TonalPalette.of(25.0, 84.0);
    this[primary] = tonal_palette.TonalPalette.of(hue, math.max(core.double, 48.0, chroma));
    this[secondary] = tonal_palette.TonalPalette.of(hue, 16.0);
    this[tertiary] = tonal_palette.TonalPalette.of(hue + 60, 24.0);
    this[neutral] = tonal_palette.TonalPalette.of(hue, 4.0);
    this[neutralVariant] = tonal_palette.TonalPalette.of(hue, 8.0);
    ;
  }).prototype = core_palette.CorePalette.prototype;
  (core_palette.CorePalette.fromList = function(colors) {
    this[error] = tonal_palette.TonalPalette.of(25.0, 84.0);
    if (!(colors[$length] === 5 * tonal_palette.TonalPalette.commonSize)) dart.assertFailed(null, I[0], 52, 16, "colors.length == size * TonalPalette.commonSize");
    this[primary] = tonal_palette.TonalPalette.fromList(core_palette._getPartition(colors, 0, tonal_palette.TonalPalette.commonSize));
    this[secondary] = tonal_palette.TonalPalette.fromList(core_palette._getPartition(colors, 1, tonal_palette.TonalPalette.commonSize));
    this[tertiary] = tonal_palette.TonalPalette.fromList(core_palette._getPartition(colors, 2, tonal_palette.TonalPalette.commonSize));
    this[neutral] = tonal_palette.TonalPalette.fromList(core_palette._getPartition(colors, 3, tonal_palette.TonalPalette.commonSize));
    this[neutralVariant] = tonal_palette.TonalPalette.fromList(core_palette._getPartition(colors, 4, tonal_palette.TonalPalette.commonSize));
    ;
  }).prototype = core_palette.CorePalette.prototype;
  dart.addTypeTests(core_palette.CorePalette);
  dart.addTypeCaches(core_palette.CorePalette);
  dart.setMethodSignature(core_palette.CorePalette, () => ({
    __proto__: dart.getMethods(core_palette.CorePalette.__proto__),
    asList: dart.fnType(core.List$(core.int), [])
  }));
  dart.setStaticMethodSignature(core_palette.CorePalette, () => ['of']);
  dart.setLibraryUri(core_palette.CorePalette, I[1]);
  dart.setFieldSignature(core_palette.CorePalette, () => ({
    __proto__: dart.getFields(core_palette.CorePalette.__proto__),
    primary: dart.finalFieldType(tonal_palette.TonalPalette),
    secondary: dart.finalFieldType(tonal_palette.TonalPalette),
    tertiary: dart.finalFieldType(tonal_palette.TonalPalette),
    neutral: dart.finalFieldType(tonal_palette.TonalPalette),
    neutralVariant: dart.finalFieldType(tonal_palette.TonalPalette),
    error: dart.finalFieldType(tonal_palette.TonalPalette)
  }));
  dart.setStaticFieldSignature(core_palette.CorePalette, () => ['size']);
  dart.defineExtensionMethods(core_palette.CorePalette, ['_equals', 'toString']);
  dart.defineExtensionAccessors(core_palette.CorePalette, ['hashCode']);
  dart.defineLazy(core_palette.CorePalette, {
    /*core_palette.CorePalette.size*/get size() {
      return 5;
    }
  }, false);
  core_palette._getPartition = function _getPartition(list, partitionNumber, partitionSize) {
    return list[$sublist](partitionNumber * partitionSize, (partitionNumber + 1) * partitionSize);
  };
  dart.trackLibraries("packages/material_color_utilities/palettes/core_palette.dart", {
    "package:material_color_utilities/palettes/core_palette.dart": core_palette
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["core_palette.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0BqB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;cAGO;AAClB,gBAAY,oBAAQ,IAAI;AAC9B,YAAmB,iCAAE,AAAI,GAAD,MAAM,AAAI,GAAD;IACnC;;;;;;;;AA6BsB;kCACb,AAAQ;AACE,oBAAV;AACS,oBAAT;AACQ,oBAAR;AACe,oBAAf;;;IACJ;YAGmB;;AACpB,YAAM,AAKiC,6BALvC,KAAK,KACL,AAAQ,qBAAG,AAAM,KAAD,aAChB,AAAU,uBAAG,AAAM,KAAD,eAClB,AAAS,sBAAG,AAAM,KAAD,cACjB,AAAQ,qBAAG,AAAM,KAAD,aAChB,AAAe,4BAAG,AAAM,KAAD,oBACvB,AAAM,mBAAG,AAAM,KAAD;IAAM;;AAGJ,YAAO,kBACrB,cACA,gBACA,eACA,cACA,qBACA;IACD;;AAIH,YAAO,wBAAW,gBAAO,OACrB,yBAAa,kBAAS,OACtB,wBAAY,iBAAQ,OACpB,uBAAW,gBAAO,OAClB,8BAAkB,uBAAc,OAChC,qBAAS,cAAK;IACpB;;0CA/DqB,KAAY;IARd,cAAqB,8BAAG,MAAI;IASjC,gBAAe,8BAAG,GAAG,EAAO,sBAAI,MAAI,MAAM;IACxC,kBAAe,8BAAG,GAAG,EAAE;IACxB,iBAAe,8BAAG,AAAI,GAAD,GAAG,IAAI;IAC7B,gBAAe,8BAAG,GAAG,EAAE;IAChB,uBAAe,8BAAG,GAAG,EAAE;;EAAE;gDAMf;IAnBZ,cAAqB,8BAAG,MAAI;UAoBlC,AAAO,AAAO,MAAR,cAAgB,IAAe;IACpC,gBAAe,oCACnB,2BAAc,MAAM,EAAE,GAAgB;IAChC,kBAAe,oCACrB,2BAAc,MAAM,EAAE,GAAgB;IACjC,iBAAe,oCACpB,2BAAc,MAAM,EAAE,GAAgB;IAClC,gBAAe,oCACnB,2BAAc,MAAM,EAAE,GAAgB;IAC3B,uBAAe,oCAC1B,2BAAc,MAAM,EAAE,GAAgB;;EAAY;;;;;;;;;;;;;;;;;;;;;;MArC/C,6BAAI;;;;sDAyFL,MAAU,iBAAqB;AAC3C,UAAO,AAAK,KAAD,WACT,AAAgB,eAAD,GAAG,aAAa,EACT,CAArB,AAAgB,eAAD,GAAG,KAAK,aAAa;EAEzC","file":"../../../../../../../../../../../packages/material_color_utilities/palettes/core_palette.dart.lib.js"}');
  // Exports:
  return {
    palettes__core_palette: core_palette
  };
}));

//# sourceMappingURL=core_palette.dart.lib.js.map
