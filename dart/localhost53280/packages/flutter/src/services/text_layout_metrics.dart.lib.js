define(['dart_sdk'], (function load__packages__flutter__src__services__text_layout_metrics_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var text_layout_metrics = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/services/text_layout_metrics.dart"];
  text_layout_metrics.TextLayoutMetrics = class TextLayoutMetrics extends core.Object {
    static isWhitespace(codeUnit) {
      switch (codeUnit) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 160:
        case 5760:
        case 8192:
        case 8193:
        case 8194:
        case 8195:
        case 8196:
        case 8197:
        case 8198:
        case 8199:
        case 8200:
        case 8201:
        case 8202:
        case 8239:
        case 8287:
        case 12288:
        {
          break;
        }
        default:
        {
          return false;
        }
      }
      return true;
    }
  };
  (text_layout_metrics.TextLayoutMetrics.new = function() {
    ;
  }).prototype = text_layout_metrics.TextLayoutMetrics.prototype;
  dart.addTypeTests(text_layout_metrics.TextLayoutMetrics);
  dart.addTypeCaches(text_layout_metrics.TextLayoutMetrics);
  dart.setStaticMethodSignature(text_layout_metrics.TextLayoutMetrics, () => ['isWhitespace']);
  dart.setLibraryUri(text_layout_metrics.TextLayoutMetrics, I[0]);
  dart.trackLibraries("packages/flutter/src/services/text_layout_metrics.dart", {
    "package:flutter/src/services/text_layout_metrics.dart": text_layout_metrics
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_layout_metrics.dart"],"names":[],"mappings":";;;;;;;;;;;;wBAe+B;AAC3B,cAAQ,QAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2BZ;;;;AAEA,gBAAO;;;AAEX,YAAO;IACT;;;;EAyBF","file":"../../../../../../../../../../packages/flutter/src/services/text_layout_metrics.dart.lib.js"}');
  // Exports:
  return {
    src__services__text_layout_metrics: text_layout_metrics
  };
}));

//# sourceMappingURL=text_layout_metrics.dart.lib.js.map
