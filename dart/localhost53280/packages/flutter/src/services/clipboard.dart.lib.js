define(['dart_sdk', 'packages/flutter/src/services/restoration.dart'], (function load__packages__flutter__src__services__clipboard_dart(dart_sdk, packages__flutter__src__services__restoration$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const system_channels = packages__flutter__src__services__restoration$46dart.src__services__system_channels;
  var clipboard = Object.create(dart.library);
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    ClipboardDataN: () => (T.ClipboardDataN = dart.constFn(dart.nullable(clipboard.ClipboardData)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/services/clipboard.dart"];
  var text$ = dart.privateName(clipboard, "ClipboardData.text");
  clipboard.ClipboardData = class ClipboardData extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      return new clipboard.ClipboardData.new({text: text});
    }
  };
  (clipboard.ClipboardData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$] = text;
    ;
  }).prototype = clipboard.ClipboardData.prototype;
  dart.addTypeTests(clipboard.ClipboardData);
  dart.addTypeCaches(clipboard.ClipboardData);
  dart.setLibraryUri(clipboard.ClipboardData, I[0]);
  dart.setFieldSignature(clipboard.ClipboardData, () => ({
    __proto__: dart.getFields(clipboard.ClipboardData.__proto__),
    text: dart.finalFieldType(dart.nullable(core.String))
  }));
  clipboard.Clipboard = class Clipboard extends core.Object {
    static ['_#_#tearOff']() {
      return new clipboard.Clipboard.__();
    }
    static setData(data) {
      return async.async(dart.void, function* setData() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "Clipboard.setData", new (T.IdentityMapOfString$dynamic()).from(["text", data.text]));
      });
    }
    static getData(format) {
      return async.async(T.ClipboardDataN(), function* getData() {
        let result = (yield system_channels.SystemChannels.platform.invokeMethod(T.MapOfString$dynamic(), "Clipboard.getData", format));
        if (result == null) return null;
        return new clipboard.ClipboardData.new({text: T.StringN().as(result[$_get]("text"))});
      });
    }
    static hasStrings() {
      return async.async(core.bool, function* hasStrings() {
        let result = (yield system_channels.SystemChannels.platform.invokeMethod(T.MapOfString$dynamic(), "Clipboard.hasStrings", "text/plain"));
        if (result == null) {
          return false;
        }
        return core.bool.as(result[$_get]("value"));
      });
    }
  };
  (clipboard.Clipboard.__ = function() {
    ;
  }).prototype = clipboard.Clipboard.prototype;
  dart.addTypeTests(clipboard.Clipboard);
  dart.addTypeCaches(clipboard.Clipboard);
  dart.setStaticMethodSignature(clipboard.Clipboard, () => ['setData', 'getData', 'hasStrings']);
  dart.setLibraryUri(clipboard.Clipboard, I[0]);
  dart.setStaticFieldSignature(clipboard.Clipboard, () => ['kTextPlain']);
  dart.defineLazy(clipboard.Clipboard, {
    /*clipboard.Clipboard.kTextPlain*/get kTextPlain() {
      return "text/plain";
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/services/clipboard.dart", {
    "package:flutter/src/services/clipboard.dart": clipboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clipboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAmBgB;;;;;;;;;;;;QAHa;;;EAAO;;;;;;;;;;;;mBAoBQ;AAAf;AAMxB,QALD,MAAqB,AAAS,gEAC5B,qBACiB,4CACf,QAAQ,AAAK,IAAD;MAGlB;;mBAS6C;AAAR;AACP,sBAAS,MAAqB,AAAS,8EACjE,qBACA,MAAM;AAER,YAAI,AAAO,MAAD,UACR,MAAO;AACT,cAAO,wCAAmC,eAAf,AAAM,MAAA,QAAC;MACpC;;;AAO8B;AACA,sBAAS,MAAqB,AAAS,8EACjE;AAGF,YAAI,AAAO,MAAD;AACR,gBAAO;;AAET,cAAuB,cAAhB,AAAM,MAAA,QAAC;MAChB;;;;;EAlDa;;;;;;;MAOO,8BAAU","file":"../../../../../../../../../../packages/flutter/src/services/clipboard.dart.lib.js"}');
  // Exports:
  return {
    src__services__clipboard: clipboard
  };
}));

//# sourceMappingURL=clipboard.dart.lib.js.map
