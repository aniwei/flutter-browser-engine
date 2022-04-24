define(['dart_sdk'], (function load__packages__flutter__src__foundation__licenses_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var licenses = Object.create(dart.library);
  var $substring = dartx.substring;
  var $add = dartx.add;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  var $trimLeft = dartx.trimLeft;
  var $clear = dartx.clear;
  var $_get = dartx._get;
  var $truncate = dartx.truncate;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    JSArrayOfLicenseParagraph: () => (T.JSArrayOfLicenseParagraph = dart.constFn(_interceptors.JSArray$(licenses.LicenseParagraph)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidToLicenseParagraph: () => (T.VoidToLicenseParagraph = dart.constFn(dart.fnType(licenses.LicenseParagraph, [])))(),
    StreamOfLicenseEntry: () => (T.StreamOfLicenseEntry = dart.constFn(async.Stream$(licenses.LicenseEntry)))(),
    VoidToStreamOfLicenseEntry: () => (T.VoidToStreamOfLicenseEntry = dart.constFn(dart.fnType(T.StreamOfLicenseEntry(), [])))(),
    JSArrayOfVoidToStreamOfLicenseEntry: () => (T.JSArrayOfVoidToStreamOfLicenseEntry = dart.constFn(_interceptors.JSArray$(T.VoidToStreamOfLicenseEntry())))(),
    _EmptyStreamOfLicenseEntry: () => (T._EmptyStreamOfLicenseEntry = dart.constFn(async._EmptyStream$(licenses.LicenseEntry)))(),
    StreamControllerOfLicenseEntry: () => (T.StreamControllerOfLicenseEntry = dart.constFn(async.StreamController$(licenses.LicenseEntry)))(),
    VoidToStreamControllerOfLicenseEntry: () => (T.VoidToStreamControllerOfLicenseEntry = dart.constFn(dart.fnType(T.StreamControllerOfLicenseEntry(), [])))(),
    StreamControllerOfLicenseEntryTodynamic: () => (T.StreamControllerOfLicenseEntryTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.StreamControllerOfLicenseEntry()])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: licenses._LicenseEntryWithLineBreaksParserState.prototype,
        [_Enum__name]: "beforeParagraph",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: licenses._LicenseEntryWithLineBreaksParserState.prototype,
        [_Enum__name]: "inParagraph",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.constList([C[0] || CT.C0, C[1] || CT.C1], licenses._LicenseEntryWithLineBreaksParserState);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: T._EmptyStreamOfLicenseEntry().prototype
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "package:flutter/src/foundation/licenses.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/licenses.dart"
  ];
  var text$ = dart.privateName(licenses, "LicenseParagraph.text");
  var indent$ = dart.privateName(licenses, "LicenseParagraph.indent");
  licenses.LicenseParagraph = class LicenseParagraph extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
    static ['_#new#tearOff'](text, indent) {
      return new licenses.LicenseParagraph.new(text, indent);
    }
  };
  (licenses.LicenseParagraph.new = function(text, indent) {
    this[text$] = text;
    this[indent$] = indent;
    ;
  }).prototype = licenses.LicenseParagraph.prototype;
  dart.addTypeTests(licenses.LicenseParagraph);
  dart.addTypeCaches(licenses.LicenseParagraph);
  dart.setLibraryUri(licenses.LicenseParagraph, I[0]);
  dart.setFieldSignature(licenses.LicenseParagraph, () => ({
    __proto__: dart.getFields(licenses.LicenseParagraph.__proto__),
    text: dart.finalFieldType(core.String),
    indent: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(licenses.LicenseParagraph, () => ['centeredIndent']);
  dart.defineLazy(licenses.LicenseParagraph, {
    /*licenses.LicenseParagraph.centeredIndent*/get centeredIndent() {
      return -1;
    }
  }, false);
  licenses.LicenseEntry = class LicenseEntry extends core.Object {};
  (licenses.LicenseEntry.new = function() {
    ;
  }).prototype = licenses.LicenseEntry.prototype;
  dart.addTypeTests(licenses.LicenseEntry);
  dart.addTypeCaches(licenses.LicenseEntry);
  dart.setLibraryUri(licenses.LicenseEntry, I[0]);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  licenses._LicenseEntryWithLineBreaksParserState = class _LicenseEntryWithLineBreaksParserState extends core._Enum {
    toString() {
      return "_LicenseEntryWithLineBreaksParserState." + this[_name];
    }
  };
  (licenses._LicenseEntryWithLineBreaksParserState.new = function(index, name) {
    licenses._LicenseEntryWithLineBreaksParserState.__proto__.new.call(this, index, name);
    ;
  }).prototype = licenses._LicenseEntryWithLineBreaksParserState.prototype;
  dart.addTypeTests(licenses._LicenseEntryWithLineBreaksParserState);
  dart.addTypeCaches(licenses._LicenseEntryWithLineBreaksParserState);
  dart.setLibraryUri(licenses._LicenseEntryWithLineBreaksParserState, I[0]);
  dart.setStaticFieldSignature(licenses._LicenseEntryWithLineBreaksParserState, () => ['values', 'beforeParagraph', 'inParagraph']);
  dart.defineExtensionMethods(licenses._LicenseEntryWithLineBreaksParserState, ['toString']);
  licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph = C[0] || CT.C0;
  licenses._LicenseEntryWithLineBreaksParserState.inParagraph = C[1] || CT.C1;
  licenses._LicenseEntryWithLineBreaksParserState.values = C[2] || CT.C2;
  var packages$ = dart.privateName(licenses, "LicenseEntryWithLineBreaks.packages");
  var text$0 = dart.privateName(licenses, "LicenseEntryWithLineBreaks.text");
  licenses.LicenseEntryWithLineBreaks = class LicenseEntryWithLineBreaks extends licenses.LicenseEntry {
    get packages() {
      return this[packages$];
    }
    set packages(value) {
      super.packages = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    static ['_#new#tearOff'](packages, text) {
      return new licenses.LicenseEntryWithLineBreaks.new(packages, text);
    }
    get paragraphs() {
      let lineStart = 0;
      let currentPosition = 0;
      let lastLineIndent = 0;
      let currentLineIndent = 0;
      let currentParagraphIndentation = null;
      let state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
      let lines = T.JSArrayOfString().of([]);
      let result = T.JSArrayOfLicenseParagraph().of([]);
      const addLine = () => {
        if (!(lineStart < currentPosition)) dart.assertFailed(null, I[1], 156, 14, "lineStart < currentPosition");
        lines[$add](this.text[$substring](lineStart, currentPosition));
      };
      dart.fn(addLine, T.VoidTovoid());
      function getParagraph() {
        if (!lines[$isNotEmpty]) dart.assertFailed(null, I[1], 161, 14, "lines.isNotEmpty");
        if (!(currentParagraphIndentation != null)) dart.assertFailed(null, I[1], 162, 14, "currentParagraphIndentation != null");
        let result = new licenses.LicenseParagraph.new(lines[$join](" "), dart.nullCheck(currentParagraphIndentation));
        if (!(result.text[$trimLeft]() === result.text)) dart.assertFailed(null, I[1], 164, 14, "result.text.trimLeft() == result.text");
        if (!result.text[$isNotEmpty]) dart.assertFailed(null, I[1], 165, 14, "result.text.isNotEmpty");
        lines[$clear]();
        return result;
      }
      dart.fn(getParagraph, T.VoidToLicenseParagraph());
      while (currentPosition < this.text.length) {
        switch (state) {
          case C[0] || CT.C0:
          {
            if (!(lineStart === currentPosition)) dart.assertFailed(null, I[1], 173, 18, "lineStart == currentPosition");
            let labelState = this.text[$_get](currentPosition);
            SL0:
              while (true) {
                switch (labelState) {
                  case " ":
                  {
                    lineStart = currentPosition + 1;
                    currentLineIndent = currentLineIndent + 1;
                    state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                    break SL0;
                  }
                  case "\t":
                  {
                    lineStart = currentPosition + 1;
                    currentLineIndent = currentLineIndent + 8;
                    state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                    break SL0;
                  }
                  case "\r":
                  case "\n":
                  case "\f":
                  {
                    if (lines[$isNotEmpty]) {
                      result[$add](getParagraph());
                    }
                    if (this.text[$_get](currentPosition) === "\r" && currentPosition < this.text.length - 1 && this.text[$_get](currentPosition + 1) === "\n") {
                      currentPosition = currentPosition + 1;
                    }
                    lastLineIndent = 0;
                    currentLineIndent = 0;
                    currentParagraphIndentation = null;
                    lineStart = currentPosition + 1;
                    state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                    break SL0;
                  }
                  case "[":
                  {
                    currentLineIndent = currentLineIndent + 1;
                    labelState = Symbol('_default');
                    continue SL0;
                  }
                  default:
                  {
                    if (lines[$isNotEmpty] && currentLineIndent > lastLineIndent) {
                      result[$add](getParagraph());
                      currentParagraphIndentation = null;
                    }
                    if (currentParagraphIndentation == null) {
                      if (currentLineIndent > 10)
                        currentParagraphIndentation = -1;
                      else
                        currentParagraphIndentation = (currentLineIndent / 3)[$truncate]();
                    }
                    state = licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                    break SL0;
                  }
                }
                break;
              }
            break;
          }
          case C[1] || CT.C1:
          {
            switch (this.text[$_get](currentPosition)) {
              case "\n":
              {
                addLine();
                lastLineIndent = currentLineIndent;
                currentLineIndent = 0;
                lineStart = currentPosition + 1;
                state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                break;
              }
              case "\f":
              {
                addLine();
                result[$add](getParagraph());
                lastLineIndent = 0;
                currentLineIndent = 0;
                currentParagraphIndentation = null;
                lineStart = currentPosition + 1;
                state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                break;
              }
              default:
              {
                state = licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
              }
            }
            break;
          }
        }
        currentPosition = currentPosition + 1;
      }
      switch (state) {
        case C[0] || CT.C0:
        {
          if (lines[$isNotEmpty]) {
            result[$add](getParagraph());
          }
          break;
        }
        case C[1] || CT.C1:
        {
          addLine();
          result[$add](getParagraph());
          break;
        }
      }
      return result;
    }
  };
  (licenses.LicenseEntryWithLineBreaks.new = function(packages, text) {
    this[packages$] = packages;
    this[text$0] = text;
    licenses.LicenseEntryWithLineBreaks.__proto__.new.call(this);
    ;
  }).prototype = licenses.LicenseEntryWithLineBreaks.prototype;
  dart.addTypeTests(licenses.LicenseEntryWithLineBreaks);
  dart.addTypeCaches(licenses.LicenseEntryWithLineBreaks);
  dart.setGetterSignature(licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getGetters(licenses.LicenseEntryWithLineBreaks.__proto__),
    paragraphs: core.Iterable$(licenses.LicenseParagraph)
  }));
  dart.setLibraryUri(licenses.LicenseEntryWithLineBreaks, I[0]);
  dart.setFieldSignature(licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getFields(licenses.LicenseEntryWithLineBreaks.__proto__),
    packages: dart.finalFieldType(core.List$(core.String)),
    text: dart.finalFieldType(core.String)
  }));
  licenses.LicenseRegistry = class LicenseRegistry extends core.Object {
    static ['_#_#tearOff']() {
      return new licenses.LicenseRegistry.__();
    }
    static addLicense(collector) {
      licenses.LicenseRegistry._collectors == null ? licenses.LicenseRegistry._collectors = T.JSArrayOfVoidToStreamOfLicenseEntry().of([]) : null;
      dart.nullCheck(licenses.LicenseRegistry._collectors)[$add](collector);
    }
    static get licenses() {
      if (licenses.LicenseRegistry._collectors == null) return C[3] || CT.C3;
      let controller = null;
      function controller$35get() {
        let t1;
        t1 = controller;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("controller")) : t1;
      }
      dart.fn(controller$35get, T.VoidToStreamControllerOfLicenseEntry());
      function controller$35set(t2) {
        if (controller == null)
          return controller = t2;
        else
          dart.throw(new _internal.LateError.localAI("controller"));
      }
      dart.fn(controller$35set, T.StreamControllerOfLicenseEntryTodynamic());
      controller$35set(T.StreamControllerOfLicenseEntry().new({onListen: dart.fn(() => async.async(dart.void, function*() {
          for (let collector of dart.nullCheck(licenses.LicenseRegistry._collectors))
            yield controller$35get().addStream(collector());
          yield controller$35get().close();
        }), T.VoidToFutureOfvoid())}));
      return controller$35get().stream;
    }
    static reset() {
      licenses.LicenseRegistry._collectors = null;
    }
  };
  (licenses.LicenseRegistry.__ = function() {
    ;
  }).prototype = licenses.LicenseRegistry.prototype;
  dart.addTypeTests(licenses.LicenseRegistry);
  dart.addTypeCaches(licenses.LicenseRegistry);
  dart.setStaticMethodSignature(licenses.LicenseRegistry, () => ['addLicense', 'reset']);
  dart.setStaticGetterSignature(licenses.LicenseRegistry, () => ['licenses']);
  dart.setLibraryUri(licenses.LicenseRegistry, I[0]);
  dart.setStaticFieldSignature(licenses.LicenseRegistry, () => ['_collectors']);
  dart.defineLazy(licenses.LicenseRegistry, {
    /*licenses.LicenseRegistry._collectors*/get _collectors() {
      return null;
    },
    set _collectors(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/licenses.dart", {
    "package:flutter/src/foundation/licenses.dart": licenses
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["licenses.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/licenses.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__licenses: licenses
  };
}));

//# sourceMappingURL=licenses.dart.lib.js.map
