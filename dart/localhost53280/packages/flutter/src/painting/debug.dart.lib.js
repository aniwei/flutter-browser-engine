define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__painting__debug_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  var debug = Object.create(dart.library);
  var $toInt = dartx.toInt;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$ObjectN: () => (T.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T.ObjectN())))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    PictureTobool: () => (T.PictureTobool = dart.constFn(dart.fnType(core.bool, [ui.Picture])))(),
    ImageTobool: () => (T.ImageTobool = dart.constFn(dart.fnType(core.bool, [ui.Image])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(debug._defaultPictureCapture, T.PictureTobool());
    },
    get C1() {
      return C[1] = dart.fn(debug._defaultImageCapture, T.ImageTobool());
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "package:flutter/src/painting/debug.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/debug.dart"
  ];
  var source$ = dart.privateName(debug, "ImageSizeInfo.source");
  var displaySize$ = dart.privateName(debug, "ImageSizeInfo.displaySize");
  var imageSize$ = dart.privateName(debug, "ImageSizeInfo.imageSize");
  var _sizeToBytes = dart.privateName(debug, "_sizeToBytes");
  debug.ImageSizeInfo = class ImageSizeInfo extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get displaySize() {
      return this[displaySize$];
    }
    set displaySize(value) {
      super.displaySize = value;
    }
    get imageSize() {
      return this[imageSize$];
    }
    set imageSize(value) {
      super.imageSize = value;
    }
    static ['_#new#tearOff'](opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let displaySize = opts && 'displaySize' in opts ? opts.displaySize : null;
      let imageSize = opts && 'imageSize' in opts ? opts.imageSize : null;
      return new debug.ImageSizeInfo.new({source: source, displaySize: displaySize, imageSize: imageSize});
    }
    get displaySizeInBytes() {
      return this[_sizeToBytes](this.displaySize);
    }
    get decodedSizeInBytes() {
      return this[_sizeToBytes](this.imageSize);
    }
    [_sizeToBytes](size) {
      return (size.width * size.height * 4 * (4 / 3))[$toInt]();
    }
    toJson() {
      return new (T.IdentityMapOfString$ObjectN()).from(["source", this.source, "displaySize", new (T.IdentityMapOfString$ObjectN()).from(["width", this.displaySize.width, "height", this.displaySize.height]), "imageSize", new (T.IdentityMapOfString$ObjectN()).from(["width", this.imageSize.width, "height", this.imageSize.height]), "displaySizeInBytes", this.displaySizeInBytes, "decodedSizeInBytes", this.decodedSizeInBytes]);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return debug.ImageSizeInfo.is(other) && other.source == this.source && other.imageSize._equals(this.imageSize) && other.displaySize._equals(this.displaySize);
    }
    get hashCode() {
      return ui.hashValues(this.source, this.displaySize, this.imageSize);
    }
    toString() {
      return "ImageSizeInfo(" + dart.str(this.source) + ", imageSize: " + dart.str(this.imageSize) + ", displaySize: " + dart.str(this.displaySize) + ")";
    }
  };
  (debug.ImageSizeInfo.new = function(opts) {
    let source = opts && 'source' in opts ? opts.source : null;
    let displaySize = opts && 'displaySize' in opts ? opts.displaySize : null;
    let imageSize = opts && 'imageSize' in opts ? opts.imageSize : null;
    this[source$] = source;
    this[displaySize$] = displaySize;
    this[imageSize$] = imageSize;
    ;
  }).prototype = debug.ImageSizeInfo.prototype;
  dart.addTypeTests(debug.ImageSizeInfo);
  dart.addTypeCaches(debug.ImageSizeInfo);
  dart.setMethodSignature(debug.ImageSizeInfo, () => ({
    __proto__: dart.getMethods(debug.ImageSizeInfo.__proto__),
    [_sizeToBytes]: dart.fnType(core.int, [ui.Size]),
    toJson: dart.fnType(core.Map$(core.String, dart.nullable(core.Object)), [])
  }));
  dart.setGetterSignature(debug.ImageSizeInfo, () => ({
    __proto__: dart.getGetters(debug.ImageSizeInfo.__proto__),
    displaySizeInBytes: core.int,
    decodedSizeInBytes: core.int
  }));
  dart.setLibraryUri(debug.ImageSizeInfo, I[0]);
  dart.setFieldSignature(debug.ImageSizeInfo, () => ({
    __proto__: dart.getFields(debug.ImageSizeInfo.__proto__),
    source: dart.finalFieldType(dart.nullable(core.String)),
    displaySize: dart.finalFieldType(ui.Size),
    imageSize: dart.finalFieldType(ui.Size)
  }));
  dart.defineExtensionMethods(debug.ImageSizeInfo, ['_equals', 'toString']);
  dart.defineExtensionAccessors(debug.ImageSizeInfo, ['hashCode']);
  debug.debugAssertAllPaintingVarsUnset = function debugAssertAllPaintingVarsUnset(reason, opts) {
    let debugDisableShadowsOverride = opts && 'debugDisableShadowsOverride' in opts ? opts.debugDisableShadowsOverride : false;
    if (!dart.fn(() => {
      if (debug.debugDisableShadows !== debugDisableShadowsOverride || debug.debugNetworkImageHttpClientProvider != null || debug.debugOnPaintImage != null || debug.debugInvertOversizedImages === true || debug.debugImageOverheadAllowance !== 131072) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, T.VoidTobool())()) dart.assertFailed(null, I[1], 185, 10, "() {\n    if (debugDisableShadows != debugDisableShadowsOverride ||\n        debugNetworkImageHttpClientProvider != null ||\n        debugOnPaintImage != null ||\n        debugInvertOversizedImages == true ||\n        debugImageOverheadAllowance != _imageOverheadAllowanceDefault) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  debug._defaultPictureCapture = function _defaultPictureCapture(picture) {
    return true;
  };
  debug._defaultImageCapture = function _defaultImageCapture(image) {
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugDisableShadows*/get debugDisableShadows() {
      return false;
    },
    set debugDisableShadows(_) {},
    /*debug.debugNetworkImageHttpClientProvider*/get debugNetworkImageHttpClientProvider() {
      return null;
    },
    set debugNetworkImageHttpClientProvider(_) {},
    /*debug.debugOnPaintImage*/get debugOnPaintImage() {
      return null;
    },
    set debugOnPaintImage(_) {},
    /*debug.debugInvertOversizedImages*/get debugInvertOversizedImages() {
      return false;
    },
    set debugInvertOversizedImages(_) {},
    /*debug._imageOverheadAllowanceDefault*/get _imageOverheadAllowanceDefault() {
      return 131072;
    },
    /*debug.debugImageOverheadAllowance*/get debugImageOverheadAllowance() {
      return 131072;
    },
    set debugImageOverheadAllowance(_) {},
    /*debug.debugCaptureShaderWarmUpPicture*/get debugCaptureShaderWarmUpPicture() {
      return C[0] || CT.C0;
    },
    set debugCaptureShaderWarmUpPicture(_) {},
    /*debug.debugCaptureShaderWarmUpImage*/get debugCaptureShaderWarmUpImage() {
      return C[1] || CT.C1;
    },
    set debugCaptureShaderWarmUpImage(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/debug.dart", {
    "package:flutter/src/painting/debug.dart": debug
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4DgB;;;;;;IAGH;;;;;;IAGA;;;;;;;;;;;;;AAGmB,gCAAa;IAAY;;AAGzB,gCAAa;IAAU;mBAE/B;AAGpB,YAA8C,EAAtC,AAAK,AAAM,AAAc,AAAI,IAAzB,SAAS,AAAK,IAAD,UAAU,KAAK,AAAC,IAAC;IAC5C;;AAIE,YAAwB,6CACtB,UAAU,aACV,eAAgC,4CAC9B,SAAS,AAAY,wBACrB,UAAU,AAAY,2BAExB,aAA8B,4CAC5B,SAAS,AAAU,sBACnB,UAAU,AAAU,yBAEtB,sBAAsB,yBACtB,sBAAsB;IAE1B;YAGwB;;AACtB,WAAI,AAAM,KAAD,uBAAgB;AACvB,cAAO;;AAET,YAAa,AAGT,wBAHG,KAAK,KACL,AAAM,AAAO,KAAR,WAAW,eAChB,AAAM,AAAU,KAAX,mBAAc,mBACnB,AAAM,AAAY,KAAb,qBAAgB;IAC9B;;AAGoB,2BAAW,aAAQ,kBAAa;IAAU;;AAGzC,YAAA,AAA0E,6BAA1D,eAAM,2BAAc,kBAAS,6BAAgB,oBAAW;IAAE;;;QAxDrE;QAAsB;QAA2B;IAAjD;IAAsB;IAA2B;;EAAW;;;;;;;;;;;;;;;;;;;;;;mFA+H5C;QAAe;AACzD,SAAO,AASN;AARC,UAAI,8BAAuB,2BAA2B,IAClD,qDACA,mCACA,AAA2B,qCAAG,QAC9B;AACwB,QAA1B,WAAM,4BAAa,MAAM;;AAE3B,YAAO;;AAET,UAAO;EACT;iEAoBoC;AAAY;EAAI;6DAMpB;AAAU;EAAI;;MAxMzC,yBAAmB;YAAG;;;MAgBP,yCAAmC;;;;MAoGnC,uBAAiB;;;;MAyBhC,gCAA0B;YAAG;;;MAExB,oCAA8B;;;MAMpC,iCAA2B;;;;MA4CH,qCAA+B;;;;MAMjC,mCAA6B","file":"../../../../../../../../../../packages/flutter/src/painting/debug.dart.lib.js"}');
  // Exports:
  return {
    src__painting__debug: debug
  };
}));

//# sourceMappingURL=debug.dart.lib.js.map
