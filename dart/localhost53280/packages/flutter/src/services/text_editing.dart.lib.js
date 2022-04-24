define(['dart_sdk', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__services__text_editing_dart(dart_sdk, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var text_editing = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_Enum__name]: "downstream",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:flutter/src/services/text_editing.dart"];
  var baseOffset$ = dart.privateName(text_editing, "TextSelection.baseOffset");
  var extentOffset$ = dart.privateName(text_editing, "TextSelection.extentOffset");
  var affinity$ = dart.privateName(text_editing, "TextSelection.affinity");
  var isDirectional$ = dart.privateName(text_editing, "TextSelection.isDirectional");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  text_editing.TextSelection = class TextSelection extends ui.TextRange {
    get baseOffset() {
      return this[baseOffset$];
    }
    set baseOffset(value) {
      super.baseOffset = value;
    }
    get extentOffset() {
      return this[extentOffset$];
    }
    set extentOffset(value) {
      super.extentOffset = value;
    }
    get affinity() {
      return this[affinity$];
    }
    set affinity(value) {
      super.affinity = value;
    }
    get isDirectional() {
      return this[isDirectional$];
    }
    set isDirectional(value) {
      super.isDirectional = value;
    }
    static ['_#new#tearOff'](opts) {
      let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
      let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : C[0] || CT.C0;
      let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : false;
      return new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset, affinity: affinity, isDirectional: isDirectional});
    }
    static ['_#collapsed#tearOff'](opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : C[0] || CT.C0;
      return new text_editing.TextSelection.collapsed({offset: offset, affinity: affinity});
    }
    static ['_#fromPosition#tearOff'](position) {
      return new text_editing.TextSelection.fromPosition(position);
    }
    get base() {
      let affinity = null;
      if (!this.isValid || this.baseOffset === this.extentOffset) {
        affinity = this.affinity;
      } else if (this.baseOffset < this.extentOffset) {
        affinity = ui.TextAffinity.downstream;
      } else {
        affinity = ui.TextAffinity.upstream;
      }
      return new ui.TextPosition.new({offset: this.baseOffset, affinity: affinity});
    }
    get extent() {
      let affinity = null;
      if (!this.isValid || this.baseOffset === this.extentOffset) {
        affinity = this.affinity;
      } else if (this.baseOffset < this.extentOffset) {
        affinity = ui.TextAffinity.upstream;
      } else {
        affinity = ui.TextAffinity.downstream;
      }
      return new ui.TextPosition.new({offset: this.extentOffset, affinity: affinity});
    }
    toString() {
      let typeName = object.objectRuntimeType(this, "TextSelection");
      if (!this.isValid) {
        return typeName + ".invalid";
      }
      return this.isCollapsed ? typeName + ".collapsed(offset: " + dart.str(this.baseOffset) + ", affinity: " + dart.str(this.affinity) + ", isDirectional: " + dart.str(this.isDirectional) + ")" : typeName + "(baseOffset: " + dart.str(this.baseOffset) + ", extentOffset: " + dart.str(this.extentOffset) + ", isDirectional: " + dart.str(this.isDirectional) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_editing.TextSelection.is(other)) return false;
      if (!this.isValid) {
        return !other.isValid;
      }
      return other.baseOffset === this.baseOffset && other.extentOffset === this.extentOffset && (!this.isCollapsed || other.affinity === this.affinity) && other.isDirectional === this.isDirectional;
    }
    get hashCode() {
      if (!this.isValid) {
        return ui.hashValues(-(1)[$hashCode], -(1)[$hashCode], ui.TextAffinity.downstream[$hashCode]);
      }
      let affinityHash = this.isCollapsed ? this.affinity[$hashCode] : ui.TextAffinity.downstream[$hashCode];
      return ui.hashValues(this.baseOffset[$hashCode], this.extentOffset[$hashCode], affinityHash, this.isDirectional[$hashCode]);
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
      let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : null;
      let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : null;
      return new text_editing.TextSelection.new({baseOffset: (t0 = baseOffset, t0 == null ? this.baseOffset : t0), extentOffset: (t0$ = extentOffset, t0$ == null ? this.extentOffset : t0$), affinity: (t0$0 = affinity, t0$0 == null ? this.affinity : t0$0), isDirectional: (t0$1 = isDirectional, t0$1 == null ? this.isDirectional : t0$1)});
    }
    expandTo(position, extentAtIndex = false) {
      if (position.offset >= this.start && position.offset <= this.end) {
        return this;
      }
      let normalized = this.baseOffset <= this.extentOffset;
      if (position.offset <= this.start) {
        if (extentAtIndex) {
          return this.copyWith({baseOffset: this.end, extentOffset: position.offset, affinity: position.affinity});
        }
        return this.copyWith({baseOffset: normalized ? position.offset : this.baseOffset, extentOffset: normalized ? this.extentOffset : position.offset});
      }
      if (extentAtIndex) {
        return this.copyWith({baseOffset: this.start, extentOffset: position.offset, affinity: position.affinity});
      }
      return this.copyWith({baseOffset: normalized ? this.baseOffset : position.offset, extentOffset: normalized ? position.offset : this.extentOffset});
    }
    extendTo(position) {
      if (this.extent._equals(position)) {
        return this;
      }
      return this.copyWith({extentOffset: position.offset, affinity: position.affinity});
    }
  };
  (text_editing.TextSelection.new = function(opts) {
    let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
    let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : C[0] || CT.C0;
    let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : false;
    this[baseOffset$] = baseOffset;
    this[extentOffset$] = extentOffset;
    this[affinity$] = affinity;
    this[isDirectional$] = isDirectional;
    text_editing.TextSelection.__proto__.new.call(this, {start: baseOffset < extentOffset ? baseOffset : extentOffset, end: baseOffset < extentOffset ? extentOffset : baseOffset});
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.collapsed = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : C[0] || CT.C0;
    this[affinity$] = affinity;
    this[baseOffset$] = offset;
    this[extentOffset$] = offset;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.fromPosition = function(position) {
    this[baseOffset$] = position.offset;
    this[extentOffset$] = position.offset;
    this[affinity$] = position.affinity;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, position.offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  dart.addTypeTests(text_editing.TextSelection);
  dart.addTypeCaches(text_editing.TextSelection);
  dart.setMethodSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getMethods(text_editing.TextSelection.__proto__),
    copyWith: dart.fnType(text_editing.TextSelection, [], {affinity: dart.nullable(ui.TextAffinity), baseOffset: dart.nullable(core.int), extentOffset: dart.nullable(core.int), isDirectional: dart.nullable(core.bool)}, {}),
    expandTo: dart.fnType(text_editing.TextSelection, [ui.TextPosition], [core.bool]),
    extendTo: dart.fnType(text_editing.TextSelection, [ui.TextPosition])
  }));
  dart.setGetterSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getGetters(text_editing.TextSelection.__proto__),
    base: ui.TextPosition,
    extent: ui.TextPosition
  }));
  dart.setLibraryUri(text_editing.TextSelection, I[0]);
  dart.setFieldSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getFields(text_editing.TextSelection.__proto__),
    baseOffset: dart.finalFieldType(core.int),
    extentOffset: dart.finalFieldType(core.int),
    affinity: dart.finalFieldType(ui.TextAffinity),
    isDirectional: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(text_editing.TextSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_editing.TextSelection, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/services/text_editing.dart", {
    "package:flutter/src/services/text_editing.dart": text_editing
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_editing.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwDY;;;;;;IASA;;;;;;IAKS;;;;;;IAQR;;;;;;;;;;;;;;;;;;;;;;AAmBU;AACnB,WAAK,gBAAW,AAAW,oBAAG;AACJ,QAAxB,WAAgB;YACX,KAAI,AAAW,kBAAE;AACY,QAAlC,WAAwB;;AAEQ,QAAhC,WAAwB;;AAE1B,YAAO,kCAAqB,2BAAsB,QAAQ;IAC5D;;AAYqB;AACnB,WAAK,gBAAW,AAAW,oBAAG;AACJ,QAAxB,WAAgB;YACX,KAAI,AAAW,kBAAE;AACU,QAAhC,WAAwB;;AAEU,QAAlC,WAAwB;;AAE1B,YAAO,kCAAqB,6BAAwB,QAAQ;IAC9D;;AAIe,qBAAW,yBAAkB,MAAM;AAChD,WAAK;AACH,cAAS,AAAiB,SAAT;;AAEnB,YAAO,oBACD,AACJ,QADY,oCAAoB,mBAAU,0BAAa,iBAAQ,+BAAkB,sBAAa,MAC1F,AAA8F,QAAtF,8BAAc,mBAAU,8BAAiB,qBAAY,+BAAkB,sBAAa;IACpG;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,WAAU,8BAAN,KAAK,GACP,MAAO;AACT,WAAK;AACH,gBAAQ,AAAM,KAAD;;AAEf,YAAO,AAAM,AAAW,AAGpB,MAHQ,gBAAe,mBACpB,AAAM,AAAa,KAAd,kBAAiB,uBACpB,oBAAe,AAAM,AAAS,KAAV,cAAa,kBACnC,AAAM,AAAc,KAAf,mBAAkB;IAChC;;AAIE,WAAK;AACH,cAAO,eAAW,CAAG,CAAF,eAAY,CAAG,CAAF,eAAyB,AAAW;;AAG5D,yBAAe,mBAAc,AAAS,2BAAwB,AAAW;AACnF,YAAO,eAAW,AAAW,4BAAU,AAAa,8BAAU,YAAY,EAAE,AAAc;IAC5F;;;UAMO;UACA;UACS;UACR;AAEN,YAAO,kDACkB,KAAX,UAAU,EAAV,aAAmB,sCACJ,MAAb,YAAY,EAAZ,cAAqB,qCAChB,OAAT,QAAQ,EAAR,eAAiB,uCACE,OAAd,aAAa,EAAb,eAAsB;IAEzC;aAqBoC,UAAgB;AAElD,UAAI,AAAS,AAAO,QAAR,WAAW,cAAS,AAAS,AAAO,QAAR,WAAW;AACjD,cAAO;;AAGE,uBAAa,AAAW,mBAAG;AACtC,UAAI,AAAS,AAAO,QAAR,WAAW;AAErB,YAAI,aAAa;AACf,gBAAO,4BACO,wBACE,AAAS,QAAD,mBACZ,AAAS,QAAD;;AAGtB,cAAO,4BACO,UAAU,GAAG,AAAS,QAAD,UAAU,eAArB,gBACR,UAAU,GAAG,oBAAe,AAAS,QAAD,OAA1B;;AAI5B,UAAI,aAAa;AACf,cAAO,4BACO,0BACE,AAAS,QAAD,mBACZ,AAAS,QAAD;;AAGtB,YAAO,4BACO,UAAU,GAAG,kBAAa,AAAS,QAAD,OAAxB,gBACR,UAAU,GAAG,AAAS,QAAD,UAAU,iBAArB;IAE5B;aAaoC;AAGlC,UAAI,AAAO,oBAAG,QAAQ;AACpB,cAAO;;AAGT,YAAO,8BACS,AAAS,QAAD,mBACZ,AAAS,QAAD;IAEtB;;;QAjPgB;QACA;QACT;QACA;IAHS;IACA;IACT;IACA;AACF,gEACS,AAAW,UAAD,GAAG,YAAY,GAAG,UAAU,GAAG,YAAY,OACvD,AAAW,UAAD,GAAG,YAAY,GAAG,YAAY,GAAG,UAAU;;EAC3D;;QAUS;QACR;;IACS,oBAAE,MAAM;IACN,sBAAE,MAAM;IACP,uBAAE;AACV,8DAAU,MAAM;;EAAC;sDAOY;IACzB,oBAAE,AAAS,QAAD;IACR,sBAAE,AAAS,QAAD;IACd,kBAAE,AAAS,QAAD;IACL,uBAAE;AACV,8DAAU,AAAS,QAAD;;EAAQ","file":"../../../../../../../../../../packages/flutter/src/services/text_editing.dart.lib.js"}');
  // Exports:
  return {
    src__services__text_editing: text_editing
  };
}));

//# sourceMappingURL=text_editing.dart.lib.js.map
