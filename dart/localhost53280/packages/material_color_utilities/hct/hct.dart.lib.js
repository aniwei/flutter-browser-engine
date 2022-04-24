define(['dart_sdk', 'packages/material_color_utilities/utils/math_utils.dart', 'packages/material_color_utilities/hct/cam16.dart', 'packages/material_color_utilities/utils/color_utils.dart', 'packages/material_color_utilities/hct/viewing_conditions.dart'], (function load__packages__material_color_utilities__hct__hct_dart(dart_sdk, packages__material_color_utilities__utils__math_utils$46dart, packages__material_color_utilities__hct__cam16$46dart, packages__material_color_utilities__utils__color_utils$46dart, packages__material_color_utilities__hct__viewing_conditions$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const math_utils = packages__material_color_utilities__utils__math_utils$46dart.utils__math_utils;
  const cam16 = packages__material_color_utilities__hct__cam16$46dart.hct__cam16;
  const color_utils = packages__material_color_utilities__utils__color_utils$46dart.utils__color_utils;
  const viewing_conditions = packages__material_color_utilities__hct__viewing_conditions$46dart.hct__viewing_conditions;
  var hct = Object.create(dart.library);
  var $round = dartx.round;
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:material_color_utilities/hct/hct.dart"];
  var _hue = dart.privateName(hct, "_hue");
  var _chroma = dart.privateName(hct, "_chroma");
  var _tone = dart.privateName(hct, "_tone");
  var _setInternalState = dart.privateName(hct, "_setInternalState");
  hct.HctColor = class HctColor extends core.Object {
    static from(hue, chroma, tone) {
      return new hct.HctColor.__(hue, chroma, tone);
    }
    static fromInt(argb) {
      let cam = cam16.Cam16.fromInt(argb);
      let tone = color_utils.ColorUtils.lstarFromArgb(argb);
      return new hct.HctColor.__(cam.hue, cam.chroma, tone);
    }
    toInt() {
      return hct.getInt(this[_hue], this[_chroma], this[_tone]);
    }
    get hue() {
      return this[_hue];
    }
    set hue(newHue) {
      this[_setInternalState](hct.getInt(math_utils.MathUtils.sanitizeDegreesDouble(newHue), this[_chroma], this[_tone]));
    }
    get chroma() {
      return this[_chroma];
    }
    set chroma(newChroma) {
      this[_setInternalState](hct.getInt(this[_hue], newChroma, this[_tone]));
    }
    get tone() {
      return this[_tone];
    }
    set tone(newTone) {
      this[_setInternalState](hct.getInt(this[_hue], this[_chroma], math_utils.MathUtils.clampDouble(0.0, 100.0, newTone)));
    }
    static ['_#_#tearOff'](hue, chroma, tone) {
      return new hct.HctColor.__(hue, chroma, tone);
    }
    [_setInternalState](argb) {
      let cam = cam16.Cam16.fromInt(argb);
      let tone = color_utils.ColorUtils.lstarFromArgb(argb);
      this[_hue] = cam.hue;
      this[_chroma] = cam.chroma;
      this[_tone] = tone;
    }
  };
  (hct.HctColor.__ = function(hue, chroma, tone) {
    this[_hue] = math_utils.MathUtils.sanitizeDegreesDouble(hue);
    this[_chroma] = chroma;
    this[_tone] = math_utils.MathUtils.clampDouble(0.0, 100.0, tone);
    this[_setInternalState](this.toInt());
  }).prototype = hct.HctColor.prototype;
  dart.addTypeTests(hct.HctColor);
  dart.addTypeCaches(hct.HctColor);
  dart.setMethodSignature(hct.HctColor, () => ({
    __proto__: dart.getMethods(hct.HctColor.__proto__),
    toInt: dart.fnType(core.int, []),
    [_setInternalState]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(hct.HctColor, () => ['from', 'fromInt']);
  dart.setGetterSignature(hct.HctColor, () => ({
    __proto__: dart.getGetters(hct.HctColor.__proto__),
    hue: core.double,
    chroma: core.double,
    tone: core.double
  }));
  dart.setSetterSignature(hct.HctColor, () => ({
    __proto__: dart.getSetters(hct.HctColor.__proto__),
    hue: core.double,
    chroma: core.double,
    tone: core.double
  }));
  dart.setLibraryUri(hct.HctColor, I[0]);
  dart.setFieldSignature(hct.HctColor, () => ({
    __proto__: dart.getFields(hct.HctColor.__proto__),
    [_hue]: dart.fieldType(core.double),
    [_chroma]: dart.fieldType(core.double),
    [_tone]: dart.fieldType(core.double)
  }));
  hct.getInt = function getInt(hue, chroma, lstar) {
    return hct.getIntInViewingConditions({hue: hue, chroma: chroma, lstar: lstar, frame: viewing_conditions.ViewingConditions.sRgb});
  };
  hct.getIntInViewingConditions = function getIntInViewingConditions(opts) {
    let hue = opts && 'hue' in opts ? opts.hue : null;
    let chroma = opts && 'chroma' in opts ? opts.chroma : null;
    let lstar = opts && 'lstar' in opts ? opts.lstar : null;
    let frame = opts && 'frame' in opts ? opts.frame : null;
    if (chroma < 1.0 || lstar[$round]() <= 0.0 || lstar[$round]() >= 100.0) {
      return color_utils.ColorUtils.argbFromLstar(lstar);
    }
    hue = hue < 0 ? 0.0 : hue > 360 ? 360.0 : hue;
    let high = chroma;
    let mid = chroma;
    let low = 0.0;
    let isFirstLoop = true;
    let answer = null;
    while ((low - high)[$abs]() >= 0.4) {
      let possibleAnswer = hct.findCamByJ(hue, mid, lstar, frame);
      if (isFirstLoop) {
        if (possibleAnswer != null) {
          return possibleAnswer.viewed(frame);
        } else {
          isFirstLoop = false;
          mid = low + (high - low) / 2.0;
          continue;
        }
      }
      if (possibleAnswer == null) {
        high = mid;
      } else {
        answer = possibleAnswer;
        low = mid;
      }
      mid = low + (high - low) / 2.0;
    }
    if (answer == null) {
      return color_utils.ColorUtils.argbFromLstar(lstar);
    }
    return answer.viewed(frame);
  };
  hct.findCamByJ = function findCamByJ(hue, chroma, lstar, frame) {
    let low = 0.0;
    let high = 100.0;
    let mid = 0.0;
    let bestdL = 1.7976931348623157e+308;
    let bestdE = 1.7976931348623157e+308;
    let bestCam = null;
    while ((low - high)[$abs]() > 0.01) {
      mid = low + (high - low) / 2;
      let camBeforeClip = cam16.Cam16.fromJchInViewingConditions(mid, chroma, hue, frame);
      let clipped = camBeforeClip.viewed(frame);
      let clippedLstar = color_utils.ColorUtils.lstarFromArgb(clipped);
      let dL = (lstar - clippedLstar)[$abs]();
      if (dL < 0.2) {
        let camClipped = cam16.Cam16.fromIntInViewingConditions(clipped, frame);
        let dE = camClipped.distance(cam16.Cam16.fromJchInViewingConditions(camClipped.j, camClipped.chroma, hue, frame));
        if (dE <= 1 && dE < bestdE && dL < 0.2) {
          bestdL = dL;
          bestdE = dE;
          bestCam = camClipped;
        }
      }
      if (bestdL === 0 && bestdE < 1e-9) {
        break;
      }
      if (clippedLstar < lstar) {
        low = mid;
      } else {
        high = mid;
      }
    }
    return bestCam;
  };
  dart.defineLazy(hct, {
    /*hct._chromaSearchEndpoint*/get _chromaSearchEndpoint() {
      return 0.4;
    },
    /*hct._deMax*/get _deMax() {
      return 1;
    },
    /*hct._dlMax*/get _dlMax() {
      return 0.2;
    },
    /*hct._deMaxError*/get _deMaxError() {
      return 1e-9;
    },
    /*hct.lightnessSearchEndpoint*/get lightnessSearchEndpoint() {
      return 0.01;
    }
  }, false);
  dart.trackLibraries("packages/material_color_utilities/hct/hct.dart", {
    "package:material_color_utilities/hct/hct.dart": hct
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hct.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/material_color_utilities/hct/hct.dart.lib.js"}');
  // Exports:
  return {
    hct__hct: hct
  };
}));

//# sourceMappingURL=hct.dart.lib.js.map
