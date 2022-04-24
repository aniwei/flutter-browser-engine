define(['dart_sdk'], (function load__packages__flutter__src__foundation__consolidate_response_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const _http = dart_sdk._http;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var consolidate_response = Object.create(dart.library);
  var $add = dartx.add;
  var $length = dartx.length;
  var $setRange = dartx.setRange;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    JSArrayOfListOfint: () => (T.JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(T.ListOfint())))(),
    CompleterOfUint8List: () => (T.CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))(),
    StreamSubscriptionOfListOfint: () => (T.StreamSubscriptionOfListOfint = dart.constFn(async.StreamSubscription$(T.ListOfint())))(),
    VoidToStreamSubscriptionOfListOfint: () => (T.VoidToStreamSubscriptionOfListOfint = dart.constFn(dart.fnType(T.StreamSubscriptionOfListOfint(), [])))(),
    StreamSubscriptionOfListOfintTodynamic: () => (T.StreamSubscriptionOfListOfintTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.StreamSubscriptionOfListOfint()])))(),
    ListOfintTovoid: () => (T.ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [T.ListOfint()])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_Enum__name]: "compressed",
        [_Enum_index]: 2
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_Enum__name]: "decompressed",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: _http.HttpClientResponseCompressionState.prototype,
        [_Enum__name]: "notCompressed",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/consolidate_response.dart",
    "package:flutter/src/foundation/consolidate_response.dart"
  ];
  var _chunks = dart.privateName(consolidate_response, "_chunks");
  var _contentLength = dart.privateName(consolidate_response, "_contentLength");
  var _bytes = dart.privateName(consolidate_response, "_bytes");
  consolidate_response._OutputBuffer = class _OutputBuffer extends convert.ByteConversionSinkBase {
    add(chunk) {
      T.ListOfint().as(chunk);
      if (!(this[_bytes] == null)) dart.assertFailed(null, I[0], 105, 12, "_bytes == null");
      dart.nullCheck(this[_chunks])[$add](chunk);
      this[_contentLength] = this[_contentLength] + chunk[$length];
    }
    close() {
      if (this[_bytes] != null) {
        return;
      }
      this[_bytes] = _native_typed_data.NativeUint8List.new(this[_contentLength]);
      let offset = 0;
      for (let chunk of dart.nullCheck(this[_chunks])) {
        dart.nullCheck(this[_bytes])[$setRange](offset, offset + chunk[$length], chunk);
        offset = offset + chunk[$length];
      }
      this[_chunks] = null;
    }
    get bytes() {
      if (!(this[_bytes] != null)) dart.assertFailed(null, I[0], 126, 12, "_bytes != null");
      return dart.nullCheck(this[_bytes]);
    }
    static ['_#new#tearOff']() {
      return new consolidate_response._OutputBuffer.new();
    }
  };
  (consolidate_response._OutputBuffer.new = function() {
    this[_chunks] = T.JSArrayOfListOfint().of([]);
    this[_contentLength] = 0;
    this[_bytes] = null;
    consolidate_response._OutputBuffer.__proto__.new.call(this);
    ;
  }).prototype = consolidate_response._OutputBuffer.prototype;
  dart.addTypeTests(consolidate_response._OutputBuffer);
  dart.addTypeCaches(consolidate_response._OutputBuffer);
  dart.setMethodSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getMethods(consolidate_response._OutputBuffer.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getGetters(consolidate_response._OutputBuffer.__proto__),
    bytes: typed_data.Uint8List
  }));
  dart.setLibraryUri(consolidate_response._OutputBuffer, I[1]);
  dart.setFieldSignature(consolidate_response._OutputBuffer, () => ({
    __proto__: dart.getFields(consolidate_response._OutputBuffer.__proto__),
    [_chunks]: dart.fieldType(dart.nullable(core.List$(core.List$(core.int)))),
    [_contentLength]: dart.fieldType(core.int),
    [_bytes]: dart.fieldType(dart.nullable(typed_data.Uint8List))
  }));
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  consolidate_response.consolidateHttpClientResponseBytes = function consolidateHttpClientResponseBytes(response, opts) {
    let autoUncompress = opts && 'autoUncompress' in opts ? opts.autoUncompress : true;
    let onBytesReceived = opts && 'onBytesReceived' in opts ? opts.onBytesReceived : null;
    if (!(autoUncompress !== null)) dart.assertFailed(null, I[0], 51, 10, "autoUncompress != null");
    let completer = T.CompleterOfUint8List().sync();
    let output = new consolidate_response._OutputBuffer.new();
    let sink = output;
    let expectedContentLength = response.contentLength;
    if (expectedContentLength === -1) expectedContentLength = null;
    switch (response.compressionState) {
      case C[0] || CT.C0:
      {
        if (autoUncompress) {
          sink = io.gzip.decoder.startChunkedConversion(output);
        }
        break;
      }
      case C[1] || CT.C1:
      {
        expectedContentLength = null;
        break;
      }
      case C[2] || CT.C2:
      {
        break;
      }
    }
    let bytesReceived = 0;
    let subscription = null;
    function subscription$35get() {
      let t1;
      t1 = subscription;
      return t1 == null ? dart.throw(new _internal.LateError.localNI("subscription")) : t1;
    }
    dart.fn(subscription$35get, T.VoidToStreamSubscriptionOfListOfint());
    function subscription$35set(t2) {
      if (subscription == null)
        return subscription = t2;
      else
        dart.throw(new _internal.LateError.localAI("subscription"));
    }
    dart.fn(subscription$35set, T.StreamSubscriptionOfListOfintTodynamic());
    subscription$35set(response.listen(dart.fn(chunk => {
      sink.add(chunk);
      if (onBytesReceived != null) {
        bytesReceived = bytesReceived + chunk[$length];
        try {
          onBytesReceived(bytesReceived, expectedContentLength);
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          if (core.Object.is(error)) {
            completer.completeError(error, stackTrace);
            subscription$35get().cancel();
            return;
          } else
            throw e;
        }
      }
    }, T.ListOfintTovoid()), {onDone: dart.fn(() => {
        sink.close();
        completer.complete(output.bytes);
      }, T.VoidTovoid()), onError: dart.bind(completer, 'completeError'), cancelOnError: true}));
    return completer.future;
  };
  dart.trackLibraries("packages/flutter/src/foundation/consolidate_response.dart", {
    "package:flutter/src/foundation/consolidate_response.dart": consolidate_response
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["consolidate_response.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAuGqB;;AACjB,YAAO,AAAO;AACK,MAAZ,AAAE,eAAT,qBAAa,KAAK;AACY,MAA9B,uBAAA,AAAe,uBAAG,AAAM,KAAD;IACzB;;AAIE,UAAI;AAEF;;AAEgC,MAAlC,eAAS,uCAAU;AACf,mBAAS;AACb,eAAqB,QAAgB,gBAAP;AAC0B,QAAhD,AAAE,eAAR,yBAAiB,MAAM,EAAE,AAAO,MAAD,GAAG,AAAM,KAAD,WAAS,KAAK;AAC/B,QAAtB,SAAA,AAAO,MAAD,GAAI,AAAM,KAAD;;AAEH,MAAd,gBAAU;IACZ;;AAGE,YAAO,AAAO;AACd,YAAa,gBAAN;IACT;;;;;;IA7BiB,gBAAqB;IAClC,uBAAiB;IACV;;;EA4Bb;;;;;;;;;;;;;;;;;;;;;wGAlFqB;QACd;QACkB;AAEvB,UAAO,AAAe,cAAD;AACM,oBAAY;AAEnB,iBAAS;AACV,eAAO,MAAM;AAC3B,gCAAwB,AAAS,QAAD;AACrC,QAAI,AAAsB,qBAAD,KAAI,CAAC,GAC5B,AAA4B,wBAAJ;AAC1B,YAAQ,AAAS,QAAD;;;AAEZ,YAAI,cAAc;AAEkC,UAAlD,OAAO,AAAK,AAAQ,uCAAuB,MAAM;;AAEnD;;;;AAI4B,QAA5B,wBAAwB;AACxB;;;;AAGA;;;AAGA,wBAAgB;AACqB;;;;;;;;;;;;;;AAgBgB,IAfzD,mBAAe,AAAS,QAAD,QAAQ,QAAW;AACzB,MAAf,AAAK,IAAD,KAAK,KAAK;AACd,UAAI,eAAe;AACY,QAA7B,gBAAA,AAAc,aAAD,GAAI,AAAM,KAAD;AACtB;AACuD,UAArD,AAAe,eAAA,CAAC,aAAa,EAAE,qBAAqB;;cAC7C;cAAO;AAAd;AAC0C,YAA1C,AAAU,SAAD,eAAe,KAAK,EAAE,UAAU;AACpB,YAArB,AAAa;AACb;;;;;sCAGK;AACG,QAAZ,AAAK,IAAD;AAC4B,QAAhC,AAAU,SAAD,UAAU,AAAO,MAAD;mCACL,UAAV,SAAS,mCAA+B;AAEpD,UAAO,AAAU,UAAD;EAClB","file":"../../../../../../../../../../packages/flutter/src/foundation/consolidate_response.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__consolidate_response: consolidate_response
  };
}));

//# sourceMappingURL=consolidate_response.dart.lib.js.map
