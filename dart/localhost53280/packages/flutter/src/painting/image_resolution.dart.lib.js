define(['dart_sdk', 'packages/flutter/src/services/restoration.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/foundation/synchronous_future.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__image_resolution_dart(dart_sdk, packages__flutter__src__services__restoration$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__foundation__synchronous_future$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const asset_bundle = packages__flutter__src__services__restoration$46dart.src__services__asset_bundle;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const synchronous_future = packages__flutter__src__foundation__synchronous_future$46dart.src__foundation__synchronous_future;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var image_resolution = Object.create(dart.library);
  var $_get = dartx._get;
  var $keys = dartx.keys;
  var $_set = dartx._set;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    MapOfString$ListOfString: () => (T.MapOfString$ListOfString = dart.constFn(core.Map$(core.String, T.ListOfString())))(),
    MapNOfString$ListOfString: () => (T.MapNOfString$ListOfString = dart.constFn(dart.nullable(T.MapOfString$ListOfString())))(),
    FutureOfMapNOfString$ListOfString: () => (T.FutureOfMapNOfString$ListOfString = dart.constFn(async.Future$(T.MapNOfString$ListOfString())))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToFutureOfMapNOfString$ListOfString: () => (T.StringNToFutureOfMapNOfString$ListOfString = dart.constFn(dart.fnType(T.FutureOfMapNOfString$ListOfString(), [T.StringN()])))(),
    SynchronousFutureOfAssetBundleImageKey: () => (T.SynchronousFutureOfAssetBundleImageKey = dart.constFn(synchronous_future.SynchronousFuture$(image_provider.AssetBundleImageKey)))(),
    MapNOfString$ListOfStringToNull: () => (T.MapNOfString$ListOfStringToNull = dart.constFn(dart.fnType(core.Null, [T.MapNOfString$ListOfString()])))(),
    ObjectAndStackTraceToNull: () => (T.ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))(),
    CompleterOfAssetBundleImageKey: () => (T.CompleterOfAssetBundleImageKey = dart.constFn(async.Completer$(image_provider.AssetBundleImageKey)))(),
    SynchronousFutureOfMapNOfString$ListOfString: () => (T.SynchronousFutureOfMapNOfString$ListOfString = dart.constFn(synchronous_future.SynchronousFuture$(T.MapNOfString$ListOfString())))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    IdentityMapOfString$ListOfString: () => (T.IdentityMapOfString$ListOfString = dart.constFn(_js_helper.IdentityMap$(core.String, T.ListOfString())))(),
    SplayTreeMapOfdouble$String: () => (T.SplayTreeMapOfdouble$String = dart.constFn(collection.SplayTreeMap$(core.double, core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(image_resolution.AssetImage._manifestParser, T.StringNToFutureOfMapNOfString$ListOfString());
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/image_resolution.dart",
    "package:flutter/src/painting/image_resolution.dart"
  ];
  var assetName$ = dart.privateName(image_resolution, "AssetImage.assetName");
  var bundle$ = dart.privateName(image_resolution, "AssetImage.bundle");
  var $package$ = dart.privateName(image_resolution, "AssetImage.package");
  var _chooseVariant = dart.privateName(image_resolution, "_chooseVariant");
  var _parseScale = dart.privateName(image_resolution, "_parseScale");
  var _findBestVariant = dart.privateName(image_resolution, "_findBestVariant");
  image_resolution.AssetImage = class AssetImage extends image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[$package$];
    }
    set package(value) {
      super.package = value;
    }
    static ['_#new#tearOff'](assetName, opts) {
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      return new image_resolution.AssetImage.new(assetName, {bundle: bundle, package: $package});
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + this.assetName;
    }
    obtainKey(configuration) {
      let t0, t0$;
      let chosenBundle = (t0$ = (t0 = this.bundle, t0 == null ? configuration.bundle : t0), t0$ == null ? asset_bundle.rootBundle : t0$);
      let completer = null;
      let result = null;
      chosenBundle.loadStructuredData(T.MapNOfString$ListOfString(), "AssetManifest.json", C[0] || CT.C0).then(dart.void, dart.fn(manifest => {
        let chosenName = dart.nullCheck(this[_chooseVariant](this.keyName, configuration, manifest == null ? null : manifest[$_get](this.keyName)));
        let chosenScale = this[_parseScale](chosenName);
        let key = new image_provider.AssetBundleImageKey.new({bundle: chosenBundle, name: chosenName, scale: chosenScale});
        if (completer != null) {
          completer.complete(key);
        } else {
          result = new (T.SynchronousFutureOfAssetBundleImageKey()).new(key);
        }
      }, T.MapNOfString$ListOfStringToNull())).catchError(dart.fn((error, stack) => {
        if (!(completer != null)) dart.assertFailed(null, I[0], 324, 14, "completer != null");
        if (!(result == null)) dart.assertFailed(null, I[0], 325, 14, "result == null");
        dart.nullCheck(completer).completeError(error, stack);
      }, T.ObjectAndStackTraceToNull()));
      if (result != null) {
        return dart.nullCheck(result);
      }
      completer = T.CompleterOfAssetBundleImageKey().new();
      return completer.future;
    }
    static _manifestParser(jsonData) {
      if (jsonData == null) return new (T.SynchronousFutureOfMapNOfString$ListOfString()).new(null);
      let parsedJson = T.MapOfString$dynamic().as(convert.json.decode(jsonData));
      let keys = parsedJson[$keys];
      let parsedManifest = (() => {
        let t0 = new (T.IdentityMapOfString$ListOfString()).new();
        for (let key of keys)
          t0[$_set](key, T.ListOfString().from(core.List.as(parsedJson[$_get](key))));
        return t0;
      })();
      return new (T.SynchronousFutureOfMapNOfString$ListOfString()).new(parsedManifest);
    }
    [_chooseVariant](main, config, candidates) {
      if (config.devicePixelRatio == null || candidates == null || candidates[$isEmpty]) return main;
      let mapping = new (T.SplayTreeMapOfdouble$String()).new();
      for (let candidate of candidates)
        mapping._set(this[_parseScale](candidate), candidate);
      return this[_findBestVariant](mapping, dart.nullCheck(config.devicePixelRatio));
    }
    [_findBestVariant](candidates, value) {
      if (candidates.containsKey(value)) return dart.nullCheck(candidates._get(value));
      let lower = candidates.lastKeyBefore(value);
      let upper = candidates.firstKeyAfter(value);
      if (lower == null) return candidates._get(upper);
      if (upper == null) return candidates._get(lower);
      if (value < 2 || value > (dart.notNull(lower) + dart.notNull(upper)) / 2)
        return candidates._get(upper);
      else
        return candidates._get(lower);
    }
    [_parseScale](key) {
      if (key === this.assetName) {
        return 1;
      }
      let assetUri = core.Uri.parse(key);
      let directoryPath = "";
      if (assetUri.pathSegments[$length] > 1) {
        directoryPath = assetUri.pathSegments[$_get](assetUri.pathSegments[$length] - 2);
      }
      let match = image_resolution.AssetImage._extractRatioRegExp.firstMatch(directoryPath);
      if (match != null && match.groupCount > 0) return core.double.parse(dart.nullCheck(match.group(1)));
      return 1;
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return image_resolution.AssetImage.is(other) && other.keyName === this.keyName && dart.equals(other.bundle, this.bundle);
    }
    get hashCode() {
      return ui.hashValues(this.keyName, this.bundle);
    }
    toString() {
      return object.objectRuntimeType(this, "AssetImage") + "(bundle: " + dart.str(this.bundle) + ", name: \"" + this.keyName + "\")";
    }
  };
  (image_resolution.AssetImage.new = function(assetName, opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[assetName$] = assetName;
    this[bundle$] = bundle;
    this[$package$] = $package;
    if (!(assetName !== null)) dart.assertFailed(null, I[0], 255, 15, "assetName != null");
    image_resolution.AssetImage.__proto__.new.call(this);
    ;
  }).prototype = image_resolution.AssetImage.prototype;
  dart.addTypeTests(image_resolution.AssetImage);
  dart.addTypeCaches(image_resolution.AssetImage);
  dart.setMethodSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getMethods(image_resolution.AssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(image_provider.AssetBundleImageKey), [image_provider.ImageConfiguration]),
    [_chooseVariant]: dart.fnType(dart.nullable(core.String), [core.String, image_provider.ImageConfiguration, dart.nullable(core.List$(core.String))]),
    [_findBestVariant]: dart.fnType(dart.nullable(core.String), [collection.SplayTreeMap$(core.double, core.String), core.double]),
    [_parseScale]: dart.fnType(core.double, [core.String])
  }));
  dart.setStaticMethodSignature(image_resolution.AssetImage, () => ['_manifestParser']);
  dart.setGetterSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getGetters(image_resolution.AssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(image_resolution.AssetImage, I[1]);
  dart.setFieldSignature(image_resolution.AssetImage, () => ({
    __proto__: dart.getFields(image_resolution.AssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    bundle: dart.finalFieldType(dart.nullable(asset_bundle.AssetBundle)),
    package: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(image_resolution.AssetImage, () => ['_naturalResolution', '_extractRatioRegExp']);
  dart.defineExtensionMethods(image_resolution.AssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_resolution.AssetImage, ['hashCode']);
  dart.defineLazy(image_resolution.AssetImage, {
    /*image_resolution.AssetImage._naturalResolution*/get _naturalResolution() {
      return 1;
    },
    /*image_resolution.AssetImage._extractRatioRegExp*/get _extractRatioRegExp() {
      return core.RegExp.new("/?(\\d+(\\.\\d*)?)x$");
    }
  }, false);
  dart.defineLazy(image_resolution, {
    /*image_resolution._kAssetManifestFileName*/get _kAssetManifestFileName() {
      return "AssetManifest.json";
    },
    /*image_resolution._kLowDprLimit*/get _kLowDprLimit() {
      return 2;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/image_resolution.dart", {
    "package:flutter/src/painting/image_resolution.dart": image_resolution
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_resolution.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkQe;;;;;;IAeM;;;;;;IAIL;;;;;;;;;;;;AAdQ,YAAA,AAAQ,wBAAU,iBAAY,AAA8B,uBAAnB,gBAAO,MAAE;IAAU;cAoBzB;;AAOrC,0BAA8C,OAAxB,kBAAP,aAAU,AAAc,aAAD,eAAhB,cAA2B;AACnC;AACH;AAkC3B,MAhCF,AAAa,AAAyF,AA0BpG,YA1BU,wGACV,QAA4B;AACb,yBAIZ,eAJyB,qBACxB,cACA,aAAa,EACb,AAAS,QAAD,WAAW,OAAO,AAAQ,QAAA,QAAC;AAExB,0BAAc,kBAAY,UAAU;AACvB,kBAAM,oDACtB,YAAY,QACd,UAAU,SACT,WAAW;AAEpB,YAAI,SAAS;AAIY,UAAvB,AAAU,SAAD,UAAU,GAAG;;AAM8B,UAApD,SAAS,qDAAuC,GAAG;;0DAG5C,SAAQ,OAAkB;AAGrC,cAAO,AAAU,SAAD;AAChB,cAAO,AAAO,MAAD;AACyB,QAA7B,AAAE,eAAX,SAAS,gBAAgB,KAAK,EAAE,KAAK;;AAEvC,UAAI,MAAM;AAGR,cAAa,gBAAN,MAAM;;AAI6B,MAA5C,YAAY;AACZ,YAAO,AAAU,UAAD;IAClB;2BAEkE;AAChE,UAAI,AAAS,QAAD,UACV,MAAO,4DAA8C;AAE5B,uBAAmC,2BAAtB,AAAK,oBAAO,QAAQ;AACrC,iBAAO,AAAW,UAAD;AACR,2BAAwC;;AACtE,iBAAkB,MAAO,KAAI;AAAK,oBAAH,GAAG,EAAE,sBAAkC,aAAhB,AAAU,UAAA,QAAC,GAAG;;;AAGtE,YAAO,4DAA8C,cAAc;IACrE;qBAE8B,MAAyB,QAAsB;AAC3E,UAAI,AAAO,AAAiB,MAAlB,6BAA6B,AAAW,UAAD,YAAY,AAAW,UAAD,YACrE,MAAO,KAAI;AAEsB,oBAAU;AAC7C,eAAkB,YAAa,WAAU;AACI,QAA3C,AAAO,OAAA,MAAC,kBAAY,SAAS,GAAK,SAAS;AAI7C,YAAO,wBAAiB,OAAO,EAAyB,eAAvB,AAAO,MAAD;IACzC;uBAcsD,YAAmB;AACvE,UAAI,AAAW,UAAD,aAAa,KAAK,GAC9B,MAAwB,gBAAjB,AAAU,UAAA,MAAC,KAAK;AACX,kBAAQ,AAAW,UAAD,eAAe,KAAK;AACtC,kBAAQ,AAAW,UAAD,eAAe,KAAK;AACpD,UAAI,AAAM,KAAD,UACP,MAAO,AAAU,WAAA,MAAC,KAAK;AACzB,UAAI,AAAM,KAAD,UACP,MAAO,AAAU,WAAA,MAAC,KAAK;AAMzB,UAAI,AAAM,KAAD,QAAoB,AAAM,KAAD,GAAmB,CAAT,aAAN,KAAK,iBAAG,KAAK,KAAI;AACrD,cAAO,AAAU,WAAA,MAAC,KAAK;;AAEvB,cAAO,AAAU,WAAA,MAAC,KAAK;IAC3B;kBAI0B;AACxB,UAAI,AAAI,GAAD,KAAI;AACT;;AAGQ,qBAAe,eAAM,GAAG;AAC3B,0BAAgB;AACvB,UAAI,AAAS,AAAa,AAAO,QAArB,yBAAuB;AACsC,QAAvE,gBAAgB,AAAS,AAAY,QAAb,qBAAc,AAAS,AAAa,AAAO,QAArB,yBAAuB;;AAG1D,kBAAQ,AAAoB,2DAAW,aAAa;AACjE,UAAI,KAAK,YAAY,AAAM,AAAW,KAAZ,cAAc,GACtC,MAAc,mBAAoB,eAAd,AAAM,KAAD,OAAO;AAClC;IACF;YAGwB;;AACtB,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAET,gCAFG,KAAK,KACL,AAAM,AAAQ,KAAT,aAAY,gBACJ,YAAb,AAAM,KAAD,SAAW;IACzB;;AAGoB,2BAAW,cAAS;IAAO;;AAG1B,YAAG,AAA0E,0BAAxD,MAAM,gBAAc,uBAAU,eAAM,eAAU,eAAO;IAAG;;8CAjL3F;QACA;QACA;IAFA;IACA;IACA;UACK,AAAU,SAAD;AAJf;;EAIwB;;;;;;;;;;;;;;;;;;;;;;;;;;MA0BV,8CAAkB;;;MAoHlB,+CAAmB;YAAG,iBAAO;;;;MA9XtC,wCAAuB;;;MAKvB,8BAAa","file":"../../../../../../../../../../packages/flutter/src/painting/image_resolution.dart.lib.js"}');
  // Exports:
  return {
    src__painting__image_resolution: image_resolution
  };
}));

//# sourceMappingURL=image_resolution.dart.lib.js.map
