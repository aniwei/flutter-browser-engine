define(['dart_sdk', 'packages/flutter/src/services/restoration.dart'], (function load__packages__flutter__src__services__haptic_feedback_dart(dart_sdk, packages__flutter__src__services__restoration$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__restoration$46dart.src__services__system_channels;
  var haptic_feedback = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/services/haptic_feedback.dart"];
  haptic_feedback.HapticFeedback = class HapticFeedback extends core.Object {
    static ['_#_#tearOff']() {
      return new haptic_feedback.HapticFeedback.__();
    }
    static vibrate() {
      return async.async(dart.void, function* vibrate() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate");
      });
    }
    static lightImpact() {
      return async.async(dart.void, function* lightImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.lightImpact");
      });
    }
    static mediumImpact() {
      return async.async(dart.void, function* mediumImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.mediumImpact");
      });
    }
    static heavyImpact() {
      return async.async(dart.void, function* heavyImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.heavyImpact");
      });
    }
    static selectionClick() {
      return async.async(dart.void, function* selectionClick() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.selectionClick");
      });
    }
  };
  (haptic_feedback.HapticFeedback.__ = function() {
    ;
  }).prototype = haptic_feedback.HapticFeedback.prototype;
  dart.addTypeTests(haptic_feedback.HapticFeedback);
  dart.addTypeCaches(haptic_feedback.HapticFeedback);
  dart.setStaticMethodSignature(haptic_feedback.HapticFeedback, () => ['vibrate', 'lightImpact', 'mediumImpact', 'heavyImpact', 'selectionClick']);
  dart.setLibraryUri(haptic_feedback.HapticFeedback, I[0]);
  dart.trackLibraries("packages/flutter/src/services/haptic_feedback.dart", {
    "package:flutter/src/services/haptic_feedback.dart": haptic_feedback
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["haptic_feedback.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AAuB6B;AACiD,QAA1E,MAAqB,AAAS,gEAAmB;MACnD;;;AAS+B;AAI5B,QAHD,MAAqB,AAAS,gEAC5B,0BACA;MAEJ;;;AASgC;AAI7B,QAHD,MAAqB,AAAS,gEAC5B,0BACA;MAEJ;;;AAU+B;AAI5B,QAHD,MAAqB,AAAS,gEAC5B,0BACA;MAEJ;;;AAQkC;AAI/B,QAHD,MAAqB,AAAS,gEAC5B,0BACA;MAEJ;;;;;EAnEkB","file":"../../../../../../../../../../packages/flutter/src/services/haptic_feedback.dart.lib.js"}');
  // Exports:
  return {
    src__services__haptic_feedback: haptic_feedback
  };
}));

//# sourceMappingURL=haptic_feedback.dart.lib.js.map
