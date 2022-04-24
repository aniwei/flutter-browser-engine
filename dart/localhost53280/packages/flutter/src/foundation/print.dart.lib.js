define(['dart_sdk'], (function load__packages__flutter__src__foundation__print_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var print = Object.create(dart.library);
  var $split = dartx.split;
  var $expand = dartx.expand;
  var $join = dartx.join;
  var $isNotEmpty = dartx.isNotEmpty;
  var $trimLeft = dartx.trimLeft;
  var $_get = dartx._get;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $times = dartx['*'];
  var $substring = dartx.substring;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IterableOfString: () => (T.IterableOfString = dart.constFn(core.Iterable$(core.String)))(),
    StringToIterableOfString: () => (T.StringToIterableOfString = dart.constFn(dart.fnType(T.IterableOfString(), [core.String])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    CompleterOfvoid: () => (T.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    VoidToint: () => (T.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    intTodynamic: () => (T.intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    StringN__Tovoid: () => (T.StringN__Tovoid = dart.constFn(dart.fnType(dart.void, [T.StringN()], {wrapWidth: T.intN()}, {})))(),
    ListQueueOfString: () => (T.ListQueueOfString = dart.constFn(collection.ListQueue$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_Enum__name]: "inSpace",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_Enum__name]: "inWord",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_Enum__name]: "atBreak",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], print._WordWrapParseMode);
    },
    get C4() {
      return C[4] = dart.fn(print._debugPrintTask, T.VoidTovoid());
    },
    get C5() {
      return C[5] = dart.fn(print.debugPrintThrottled, T.StringN__Tovoid());
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "package:flutter/src/foundation/print.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/print.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  print._WordWrapParseMode = class _WordWrapParseMode extends core._Enum {
    toString() {
      return "_WordWrapParseMode." + this[_name];
    }
  };
  (print._WordWrapParseMode.new = function(index, name) {
    print._WordWrapParseMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = print._WordWrapParseMode.prototype;
  dart.addTypeTests(print._WordWrapParseMode);
  dart.addTypeCaches(print._WordWrapParseMode);
  dart.setLibraryUri(print._WordWrapParseMode, I[0]);
  dart.setStaticFieldSignature(print._WordWrapParseMode, () => ['values', 'inSpace', 'inWord', 'atBreak']);
  dart.defineExtensionMethods(print._WordWrapParseMode, ['toString']);
  print._WordWrapParseMode.inSpace = C[0] || CT.C0;
  print._WordWrapParseMode.inWord = C[1] || CT.C1;
  print._WordWrapParseMode.atBreak = C[2] || CT.C2;
  print._WordWrapParseMode.values = C[3] || CT.C3;
  print.debugPrintSynchronously = function debugPrintSynchronously(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    if (message != null && wrapWidth != null) {
      core.print(message[$split]("\n")[$expand](core.String, dart.fn(line => print.debugWordWrap(line, wrapWidth), T.StringToIterableOfString()))[$join]("\n"));
    } else {
      core.print(message);
    }
  };
  print.debugPrintThrottled = function debugPrintThrottled(message, opts) {
    let t0, t0$;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    let messageLines = (t0$ = (t0 = message, t0 == null ? null : t0[$split]("\n")), t0$ == null ? T.JSArrayOfString().of(["null"]) : t0$);
    if (wrapWidth != null) {
      print._debugPrintBuffer.addAll(messageLines[$expand](core.String, dart.fn(line => print.debugWordWrap(line, wrapWidth), T.StringToIterableOfString())));
    } else {
      print._debugPrintBuffer.addAll(messageLines);
    }
    if (!print._debugPrintScheduled) print._debugPrintTask();
  };
  print._debugPrintTask = function _debugPrintTask() {
    let t0;
    print._debugPrintScheduled = false;
    if (print._debugPrintStopwatch.elapsed['>'](print._kDebugPrintPauseTime)) {
      print._debugPrintStopwatch.stop();
      print._debugPrintStopwatch.reset();
      print._debugPrintedCharacters = 0;
    }
    while (print._debugPrintedCharacters < 12288 && print._debugPrintBuffer[$isNotEmpty]) {
      let line = print._debugPrintBuffer.removeFirst();
      print._debugPrintedCharacters = print._debugPrintedCharacters + line.length;
      core.print(line);
    }
    if (print._debugPrintBuffer[$isNotEmpty]) {
      print._debugPrintScheduled = true;
      print._debugPrintedCharacters = 0;
      async.Timer.new(print._kDebugPrintPauseTime, C[4] || CT.C4);
      print._debugPrintCompleter == null ? print._debugPrintCompleter = T.CompleterOfvoid().new() : null;
    } else {
      print._debugPrintStopwatch.start();
      t0 = print._debugPrintCompleter;
      t0 == null ? null : t0.complete();
      print._debugPrintCompleter = null;
    }
  };
  print.debugWordWrap = function debugWordWrap(message, width, opts) {
    let wrapIndent = opts && 'wrapIndent' in opts ? opts.wrapIndent : "";
    if (message.length < width || message[$trimLeft]()[$_get](0) === "#") {
      return T.JSArrayOfString().of([message]);
    }
    let wrapped = T.JSArrayOfString().of([]);
    let prefixMatch = dart.nullCheck(print._indentPattern[$matchAsPrefix](message));
    let prefix = wrapIndent + " "[$times](dart.nullCheck(prefixMatch.group(0)).length);
    let start = 0;
    let startForLengthCalculations = 0;
    let addPrefix = false;
    let index = prefix.length;
    let mode = print._WordWrapParseMode.inSpace;
    let lastWordStart = null;
    function lastWordStart$35get() {
      let t1;
      t1 = lastWordStart;
      return t1 == null ? dart.throw(new _internal.LateError.localNI("lastWordStart")) : t1;
    }
    dart.fn(lastWordStart$35get, T.VoidToint());
    function lastWordStart$35set(t2) {
      return lastWordStart = t2;
    }
    dart.fn(lastWordStart$35set, T.intTodynamic());
    let lastWordEnd = null;
    while (true) {
      switch (mode) {
        case C[0] || CT.C0:
        {
          while (index < message.length && message[$_get](index) === " ")
            index = index + 1;
          lastWordStart$35set(index);
          mode = print._WordWrapParseMode.inWord;
          break;
        }
        case C[1] || CT.C1:
        {
          while (index < message.length && message[$_get](index) !== " ")
            index = index + 1;
          mode = print._WordWrapParseMode.atBreak;
          break;
        }
        case C[2] || CT.C2:
        {
          if (index - startForLengthCalculations > width || index === message.length) {
            if (index - startForLengthCalculations <= width || lastWordEnd == null) {
              lastWordEnd = index;
            }
            if (addPrefix) {
              wrapped[$add](prefix + message[$substring](start, lastWordEnd));
            } else {
              wrapped[$add](message[$substring](start, lastWordEnd));
              addPrefix = true;
            }
            if (dart.notNull(lastWordEnd) >= message.length) return wrapped;
            if (lastWordEnd === index) {
              while (index < message.length && message[$_get](index) === " ")
                index = index + 1;
              start = index;
              mode = print._WordWrapParseMode.inWord;
            } else {
              if (!(lastWordStart$35get() > dart.notNull(lastWordEnd))) dart.assertFailed(null, I[1], 169, 20, "lastWordStart > lastWordEnd");
              start = lastWordStart$35get();
              mode = print._WordWrapParseMode.atBreak;
            }
            startForLengthCalculations = start - prefix.length;
            if (!addPrefix) dart.assertFailed(null, I[1], 174, 18, "addPrefix");
            lastWordEnd = null;
          } else {
            lastWordEnd = index;
            mode = print._WordWrapParseMode.inSpace;
          }
          break;
        }
      }
    }
  };
  dart.copyProperties(print, {
    get debugPrintDone() {
      let t4, t4$;
      t4$ = (t4 = print._debugPrintCompleter, t4 == null ? null : t4.future);
      return t4$ == null ? T.FutureOfvoid().value() : t4$;
    }
  });
  var Duration__duration = dart.privateName(core, "Duration._duration");
  dart.defineLazy(print, {
    /*print.debugPrint*/get debugPrint() {
      return C[5] || CT.C5;
    },
    set debugPrint(_) {},
    /*print._debugPrintedCharacters*/get _debugPrintedCharacters() {
      return 0;
    },
    set _debugPrintedCharacters(_) {},
    /*print._kDebugPrintCapacity*/get _kDebugPrintCapacity() {
      return 12288;
    },
    /*print._kDebugPrintPauseTime*/get _kDebugPrintPauseTime() {
      return C[6] || CT.C6;
    },
    /*print._debugPrintBuffer*/get _debugPrintBuffer() {
      return new (T.ListQueueOfString()).new();
    },
    /*print._debugPrintStopwatch*/get _debugPrintStopwatch() {
      return new core.Stopwatch.new();
    },
    /*print._debugPrintCompleter*/get _debugPrintCompleter() {
      return null;
    },
    set _debugPrintCompleter(_) {},
    /*print._debugPrintScheduled*/get _debugPrintScheduled() {
      return false;
    },
    set _debugPrintScheduled(_) {},
    /*print._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^ *(?:[-+*] |[0-9]+[.):] )?");
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/print.dart", {
    "package:flutter/src/foundation/print.dart": print
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["print.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/print.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__print: print
  };
}));

//# sourceMappingURL=print.dart.lib.js.map
