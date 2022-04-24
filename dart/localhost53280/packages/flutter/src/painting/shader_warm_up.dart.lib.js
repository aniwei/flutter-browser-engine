define(['dart_sdk', 'packages/flutter/src/painting/debug.dart'], (function load__packages__flutter__src__painting__shader_warm_up_dart(dart_sdk, packages__flutter__src__painting__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const developer = dart_sdk.developer;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  var shader_warm_up = Object.create(dart.library);
  var $ceil = dartx.ceil;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 100,
        [OffsetBase__dx]: 100
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/shader_warm_up.dart",
    "package:flutter/src/painting/shader_warm_up.dart"
  ];
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  shader_warm_up.ShaderWarmUp = class ShaderWarmUp extends core.Object {
    get size() {
      return C[0] || CT.C0;
    }
    execute() {
      return async.async(dart.void, (function* execute() {
        let recorder = ui.PictureRecorder.new();
        let canvas = ui.Canvas.new(recorder);
        yield this.warmUpOnCanvas(canvas);
        let picture = recorder.endRecording();
        if (!debug.debugCaptureShaderWarmUpPicture(picture)) dart.assertFailed(null, I[0], 89, 12, "debugCaptureShaderWarmUpPicture(picture)");
        if (!true) {
          let shaderWarmUpTask = new developer.TimelineTask.new();
          shaderWarmUpTask.start("Warm-up shader");
          try {
            let image = (yield picture.toImage(this.size.width[$ceil](), this.size.height[$ceil]()));
            if (!debug.debugCaptureShaderWarmUpImage(image)) dart.assertFailed(null, I[0], 95, 16, "debugCaptureShaderWarmUpImage(image)");
            image.dispose();
          } finally {
            shaderWarmUpTask.finish();
          }
        }
        picture.dispose();
      }).bind(this));
    }
  };
  (shader_warm_up.ShaderWarmUp.new = function() {
    ;
  }).prototype = shader_warm_up.ShaderWarmUp.prototype;
  dart.addTypeTests(shader_warm_up.ShaderWarmUp);
  dart.addTypeCaches(shader_warm_up.ShaderWarmUp);
  dart.setMethodSignature(shader_warm_up.ShaderWarmUp, () => ({
    __proto__: dart.getMethods(shader_warm_up.ShaderWarmUp.__proto__),
    execute: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(shader_warm_up.ShaderWarmUp, () => ({
    __proto__: dart.getGetters(shader_warm_up.ShaderWarmUp.__proto__),
    size: ui.Size
  }));
  dart.setLibraryUri(shader_warm_up.ShaderWarmUp, I[1]);
  dart.trackLibraries("packages/flutter/src/painting/shader_warm_up.dart", {
    "package:flutter/src/painting/shader_warm_up.dart": shader_warm_up
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shader_warm_up.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgEsB;IAA2B;;AAmB3B;AACO,uBAAc;AACvB,qBAAY,cAAO,QAAQ;AACf,QAA5B,MAAM,oBAAe,MAAM;AACV,sBAAU,AAAS,QAAD;AACnC,aAAO,AAA+B,sCAAC,OAAO;AAC9C;AACqB,iCAAmB;AACE,UAAxC,AAAiB,gBAAD,OAAO;AACvB;AACiB,yBAAQ,MAAM,AAAQ,OAAD,SAAS,AAAK,AAAM,0BAAQ,AAAK,AAAO;AAC5E,iBAAO,AAA6B,oCAAC,KAAK;AAC3B,YAAf,AAAM,KAAD;;AAEoB,YAAzB,AAAiB,gBAAD;;;AAGH,QAAjB,AAAQ,OAAD;MACT;;;;;EA9CoB","file":"../../../../../../../../../../packages/flutter/src/painting/shader_warm_up.dart.lib.js"}');
  // Exports:
  return {
    src__painting__shader_warm_up: shader_warm_up
  };
}));

//# sourceMappingURL=shader_warm_up.dart.lib.js.map
