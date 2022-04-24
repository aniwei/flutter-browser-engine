define(['dart_sdk', 'packages/flutter/src/painting/fractional_offset.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/painting/alignment.dart'], (function load__packages__flutter__src__rendering__tweens_dart(dart_sdk, packages__flutter__src__painting__fractional_offset$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__painting__alignment$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fractional_offset = packages__flutter__src__painting__fractional_offset$46dart.src__painting__fractional_offset;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  var tweens = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/rendering/tweens.dart"];
  tweens.FractionalOffsetTween = class FractionalOffsetTween extends tween.Tween$(dart.nullable(fractional_offset.FractionalOffset)) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new tweens.FractionalOffsetTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return fractional_offset.FractionalOffset.lerp(this.begin, this.end, t);
    }
  };
  (tweens.FractionalOffsetTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tweens.FractionalOffsetTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tweens.FractionalOffsetTween.prototype;
  dart.addTypeTests(tweens.FractionalOffsetTween);
  dart.addTypeCaches(tweens.FractionalOffsetTween);
  dart.setLibraryUri(tweens.FractionalOffsetTween, I[0]);
  tweens.AlignmentTween = class AlignmentTween extends tween.Tween$(alignment.Alignment) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new tweens.AlignmentTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return dart.nullCheck(alignment.Alignment.lerp(this.begin, this.end, t));
    }
  };
  (tweens.AlignmentTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tweens.AlignmentTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tweens.AlignmentTween.prototype;
  dart.addTypeTests(tweens.AlignmentTween);
  dart.addTypeCaches(tweens.AlignmentTween);
  dart.setLibraryUri(tweens.AlignmentTween, I[0]);
  tweens.AlignmentGeometryTween = class AlignmentGeometryTween extends tween.Tween$(dart.nullable(alignment.AlignmentGeometry)) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new tweens.AlignmentGeometryTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return alignment.AlignmentGeometry.lerp(this.begin, this.end, t);
    }
  };
  (tweens.AlignmentGeometryTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tweens.AlignmentGeometryTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tweens.AlignmentGeometryTween.prototype;
  dart.addTypeTests(tweens.AlignmentGeometryTween);
  dart.addTypeCaches(tweens.AlignmentGeometryTween);
  dart.setLibraryUri(tweens.AlignmentGeometryTween, I[0]);
  dart.trackLibraries("packages/flutter/src/rendering/tweens.dart", {
    "package:flutter/src/rendering/tweens.dart": tweens
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tweens.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;SA2BgC;AAAM,YAAiB,yCAAK,YAAO,UAAK,CAAC;IAAC;;;QAL9B;QAAyB;AAC/D,kEAAa,KAAK,OAAO,GAAG;;EAAC;;;;;;;;;;SA4BX;AAAM,YAA6B,gBAAnB,yBAAK,YAAO,UAAK,CAAC;IAAE;;;QAL9B;QAAkB;AAC1C,2DAAa,KAAK,OAAO,GAAG;;EAAC;;;;;;;;;;SA6BF;AAAM,YAAkB,kCAAK,YAAO,UAAK,CAAC;IAAC;;;QANrD;QACA;AAChB,mEAAa,KAAK,OAAO,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/rendering/tweens.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__tweens: tweens
  };
}));

//# sourceMappingURL=tweens.dart.lib.js.map
