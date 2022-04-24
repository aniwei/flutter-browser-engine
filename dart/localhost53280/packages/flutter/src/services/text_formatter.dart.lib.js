define(['dart_sdk', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/characters/src/characters_impl.dart', 'packages/characters/src/extensions.dart', 'packages/flutter/src/foundation/object.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/services/restoration.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__services__text_formatter_dart(dart_sdk, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__characters__src__characters_impl$46dart, packages__characters__src__extensions$46dart, packages__flutter__src__foundation__object$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__services__restoration$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const io = dart_sdk.io;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const platform$ = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const characters_impl = packages__characters__src__characters_impl$46dart.src__characters_impl;
  const extensions = packages__characters__src__extensions$46dart.src__extensions;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const system_channels = packages__flutter__src__services__restoration$46dart.src__services__system_channels;
  const message_codec = packages__flutter__src__services__restoration$46dart.src__services__message_codec;
  const platform_channel = packages__flutter__src__services__restoration$46dart.src__services__platform_channel;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var text_formatter = Object.create(dart.library);
  var text_editing_delta = Object.create(dart.library);
  var text_input = Object.create(dart.library);
  var autofill = Object.create(dart.library);
  var services = Object.create(dart.library);
  var $allMatches = dartx.allMatches;
  var $substring = dartx.substring;
  var $clamp = dartx.clamp;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $isEmpty = dartx.isEmpty;
  var $_set = dartx._set;
  var $toString = dartx.toString;
  var $replaceRange = dartx.replaceRange;
  var $hashCode = dartx.hashCode;
  var $contains = dartx.contains;
  var $keys = dartx.keys;
  var $add = dartx.add;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $any = dartx.any;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    JSArrayOfTextEditingDelta: () => (T.JSArrayOfTextEditingDelta = dart.constFn(_interceptors.JSArray$(text_editing_delta.TextEditingDelta)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    TextInputConfigurationToMapOfString$dynamic: () => (T.TextInputConfigurationToMapOfString$dynamic = dart.constFn(dart.fnType(T.MapOfString$dynamic(), [text_input.TextInputConfiguration])))(),
    AutofillClientTobool: () => (T.AutofillClientTobool = dart.constFn(dart.fnType(core.bool, [autofill.AutofillClient])))(),
    AutofillClientToTextInputConfiguration: () => (T.AutofillClientToTextInputConfiguration = dart.constFn(dart.fnType(text_input.TextInputConfiguration, [autofill.AutofillClient])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: text_formatter.MaxLengthEnforcement.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text_formatter.MaxLengthEnforcement.prototype,
        [_Enum__name]: "enforced",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text_formatter.MaxLengthEnforcement.prototype,
        [_Enum__name]: "truncateAfterCompositionEnds",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], text_formatter.MaxLengthEnforcement);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_Enum__name]: "downstream",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1,
        [TextSelection_isDirectional]: false,
        [TextSelection_affinity]: C[5] || CT.C5,
        [TextSelection_extentOffset]: -1,
        [TextSelection_baseOffset]: -1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: platform$.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: platform$.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: platform$.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: platform$.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: platform$.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: platform$.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: text_input.SmartDashesType.prototype,
        [_Enum__name]: "disabled",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: text_input.SmartDashesType.prototype,
        [_Enum__name]: "enabled",
        [_Enum_index]: 1
      });
    },
    get C14() {
      return C[14] = dart.constList([C[12] || CT.C12, C[13] || CT.C13], text_input.SmartDashesType);
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text_input.SmartQuotesType.prototype,
        [_Enum__name]: "disabled",
        [_Enum_index]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: text_input.SmartQuotesType.prototype,
        [_Enum__name]: "enabled",
        [_Enum_index]: 1
      });
    },
    get C17() {
      return C[17] = dart.constList([C[15] || CT.C15, C[16] || CT.C16], text_input.SmartQuotesType);
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 1
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: false,
        [signed$]: false,
        [index$]: 2
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 3
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 4
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 5
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 6
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 7
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 8
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 9
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: text_input.TextInputType.prototype,
        [decimal$]: null,
        [signed$]: null,
        [index$]: 10
      });
    },
    get C29() {
      return C[29] = dart.constList([C[18] || CT.C18, C[19] || CT.C19, C[20] || CT.C20, C[21] || CT.C21, C[22] || CT.C22, C[23] || CT.C23, C[24] || CT.C24, C[25] || CT.C25, C[26] || CT.C26, C[27] || CT.C27, C[28] || CT.C28], text_input.TextInputType);
    },
    get C30() {
      return C[30] = dart.constList(["text", "multiline", "number", "phone", "datetime", "emailAddress", "url", "visiblePassword", "name", "address", "none"], core.String);
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "unspecified",
        [_Enum_index]: 1
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "done",
        [_Enum_index]: 2
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "go",
        [_Enum_index]: 3
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "search",
        [_Enum_index]: 4
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "send",
        [_Enum_index]: 5
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "next",
        [_Enum_index]: 6
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "previous",
        [_Enum_index]: 7
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "continueAction",
        [_Enum_index]: 8
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "join",
        [_Enum_index]: 9
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "route",
        [_Enum_index]: 10
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "emergencyCall",
        [_Enum_index]: 11
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_Enum__name]: "newline",
        [_Enum_index]: 12
      });
    },
    get C44() {
      return C[44] = dart.constList([C[31] || CT.C31, C[32] || CT.C32, C[33] || CT.C33, C[34] || CT.C34, C[35] || CT.C35, C[36] || CT.C36, C[37] || CT.C37, C[38] || CT.C38, C[39] || CT.C39, C[40] || CT.C40, C[41] || CT.C41, C[42] || CT.C42, C[43] || CT.C43], text_input.TextInputAction);
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "words",
        [_Enum_index]: 0
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "sentences",
        [_Enum_index]: 1
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "characters",
        [_Enum_index]: 2
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 3
      });
    },
    get C49() {
      return C[49] = dart.constList([C[45] || CT.C45, C[46] || CT.C46, C[47] || CT.C47, C[48] || CT.C48], text_input.TextCapitalization);
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: ui.TextRange.prototype,
        [TextRange_end]: -1,
        [TextRange_start]: -1
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: text_input.TextEditingValue.prototype,
        [TextEditingValue_composing]: C[53] || CT.C53,
        [TextEditingValue_selection]: C[4] || CT.C4,
        [TextEditingValue_text]: ""
      });
    },
    get C54() {
      return C[54] = dart.constList([], core.String);
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: autofill.AutofillConfiguration.prototype,
        [AutofillConfiguration_hintText]: null,
        [AutofillConfiguration_currentEditingValue]: C[52] || CT.C52,
        [AutofillConfiguration_autofillHints]: C[54] || CT.C54,
        [AutofillConfiguration_uniqueIdentifier]: "",
        [AutofillConfiguration_enabled]: false
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_Enum__name]: "Start",
        [_Enum_index]: 0
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_Enum__name]: "Update",
        [_Enum_index]: 1
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_Enum__name]: "End",
        [_Enum_index]: 2
      });
    },
    get C58() {
      return C[58] = dart.constList([C[55] || CT.C55, C[56] || CT.C56, C[57] || CT.C57], text_input.FloatingCursorDragState);
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "tap",
        [_Enum_index]: 0
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "doubleTap",
        [_Enum_index]: 1
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "longPress",
        [_Enum_index]: 2
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "forcePress",
        [_Enum_index]: 3
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "keyboard",
        [_Enum_index]: 4
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "toolbar",
        [_Enum_index]: 5
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: text_input.SelectionChangedCause.prototype,
        [_Enum__name]: "drag",
        [_Enum_index]: 6
      });
    },
    get C66() {
      return C[66] = dart.constList([C[59] || CT.C59, C[60] || CT.C60, C[61] || CT.C61, C[62] || CT.C62, C[63] || CT.C63, C[64] || CT.C64, C[65] || CT.C65], text_input.SelectionChangedCause);
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: -1,
        [OffsetBase__dx]: -1
      });
    },
    get C68() {
      return C[68] = dart.constList([C[31] || CT.C31, C[32] || CT.C32, C[33] || CT.C33, C[36] || CT.C36, C[34] || CT.C34, C[35] || CT.C35, C[37] || CT.C37, C[38] || CT.C38, C[43] || CT.C43], text_input.TextInputAction);
    },
    get C69() {
      return C[69] = dart.constList([C[32] || CT.C32, C[33] || CT.C33, C[36] || CT.C36, C[34] || CT.C34, C[35] || CT.C35, C[37] || CT.C37, C[43] || CT.C43, C[39] || CT.C39, C[40] || CT.C40, C[41] || CT.C41, C[42] || CT.C42], text_input.TextInputAction);
    }
  }, false);
  var C = Array(70).fill(void 0);
  var I = [
    "package:flutter/src/services/text_formatter.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/text_formatter.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/text_editing_delta.dart",
    "package:flutter/src/services/text_editing_delta.dart",
    "package:flutter/src/services/text_input.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/text_input.dart",
    "package:flutter/src/services/autofill.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/autofill.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  text_formatter.MaxLengthEnforcement = class MaxLengthEnforcement extends core._Enum {
    toString() {
      return "MaxLengthEnforcement." + this[_name];
    }
  };
  (text_formatter.MaxLengthEnforcement.new = function(index, name) {
    text_formatter.MaxLengthEnforcement.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_formatter.MaxLengthEnforcement.prototype;
  dart.addTypeTests(text_formatter.MaxLengthEnforcement);
  dart.addTypeCaches(text_formatter.MaxLengthEnforcement);
  dart.setLibraryUri(text_formatter.MaxLengthEnforcement, I[0]);
  dart.setStaticFieldSignature(text_formatter.MaxLengthEnforcement, () => ['values', 'none', 'enforced', 'truncateAfterCompositionEnds']);
  dart.defineExtensionMethods(text_formatter.MaxLengthEnforcement, ['toString']);
  text_formatter.MaxLengthEnforcement.none = C[0] || CT.C0;
  text_formatter.MaxLengthEnforcement.enforced = C[1] || CT.C1;
  text_formatter.MaxLengthEnforcement.truncateAfterCompositionEnds = C[2] || CT.C2;
  text_formatter.MaxLengthEnforcement.values = C[3] || CT.C3;
  text_formatter.TextInputFormatter = class TextInputFormatter extends core.Object {
    static withFunction(formatFunction) {
      return new text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
  };
  (text_formatter.TextInputFormatter.new = function() {
    ;
  }).prototype = text_formatter.TextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.TextInputFormatter);
  dart.addTypeCaches(text_formatter.TextInputFormatter);
  dart.setStaticMethodSignature(text_formatter.TextInputFormatter, () => ['withFunction']);
  dart.setLibraryUri(text_formatter.TextInputFormatter, I[0]);
  text_formatter._SimpleTextInputFormatter = class _SimpleTextInputFormatter extends text_formatter.TextInputFormatter {
    static ['_#new#tearOff'](formatFunction) {
      return new text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
    formatEditUpdate(oldValue, newValue) {
      let t1, t0;
      t0 = oldValue;
      t1 = newValue;
      return this.formatFunction(t0, t1);
    }
  };
  (text_formatter._SimpleTextInputFormatter.new = function(formatFunction) {
    this.formatFunction = formatFunction;
    if (!(formatFunction !== null)) dart.assertFailed(null, I[1], 111, 14, "formatFunction != null");
    ;
  }).prototype = text_formatter._SimpleTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter._SimpleTextInputFormatter);
  dart.addTypeCaches(text_formatter._SimpleTextInputFormatter);
  dart.setMethodSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter._SimpleTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter._SimpleTextInputFormatter, I[0]);
  dart.setFieldSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter._SimpleTextInputFormatter.__proto__),
    formatFunction: dart.finalFieldType(dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue]))
  }));
  text_formatter._MutableTextRange = class _MutableTextRange extends core.Object {
    static ['_#new#tearOff'](base, extent) {
      return new text_formatter._MutableTextRange.new(base, extent);
    }
    static fromComposingRange(range) {
      return range.isValid && !range.isCollapsed ? new text_formatter._MutableTextRange.new(range.start, range.end) : null;
    }
    static fromTextSelection(selection) {
      return selection.isValid ? new text_formatter._MutableTextRange.new(selection.baseOffset, selection.extentOffset) : null;
    }
  };
  (text_formatter._MutableTextRange.new = function(base, extent) {
    this.base = base;
    this.extent = extent;
    ;
  }).prototype = text_formatter._MutableTextRange.prototype;
  dart.addTypeTests(text_formatter._MutableTextRange);
  dart.addTypeCaches(text_formatter._MutableTextRange);
  dart.setStaticMethodSignature(text_formatter._MutableTextRange, () => ['fromComposingRange', 'fromTextSelection']);
  dart.setLibraryUri(text_formatter._MutableTextRange, I[0]);
  dart.setFieldSignature(text_formatter._MutableTextRange, () => ({
    __proto__: dart.getFields(text_formatter._MutableTextRange.__proto__),
    base: dart.fieldType(core.int),
    extent: dart.fieldType(core.int)
  }));
  var TextRange_end = dart.privateName(ui, "TextRange.end");
  var TextRange_start = dart.privateName(ui, "TextRange.start");
  var TextSelection_isDirectional = dart.privateName(text_editing, "TextSelection.isDirectional");
  var TextSelection_affinity = dart.privateName(text_editing, "TextSelection.affinity");
  var TextSelection_extentOffset = dart.privateName(text_editing, "TextSelection.extentOffset");
  var TextSelection_baseOffset = dart.privateName(text_editing, "TextSelection.baseOffset");
  text_formatter._TextEditingValueAccumulator = class _TextEditingValueAccumulator extends core.Object {
    static ['_#new#tearOff'](inputValue) {
      return new text_formatter._TextEditingValueAccumulator.new(inputValue);
    }
    finalize() {
      this.debugFinalized = true;
      let selection = this.selection;
      let composingRegion = this.composingRegion;
      return new text_input.TextEditingValue.new({text: this.stringBuffer.toString(), composing: composingRegion == null || composingRegion.base === composingRegion.extent ? ui.TextRange.empty : new ui.TextRange.new({start: composingRegion.base, end: composingRegion.extent}), selection: selection == null ? C[4] || CT.C4 : new text_editing.TextSelection.new({baseOffset: selection.base, extentOffset: selection.extent, affinity: this.inputValue.selection.affinity, isDirectional: this.inputValue.selection.isDirectional})});
    }
  };
  (text_formatter._TextEditingValueAccumulator.new = function(inputValue) {
    this.stringBuffer = new core.StringBuffer.new();
    this.debugFinalized = false;
    this.inputValue = inputValue;
    this.selection = text_formatter._MutableTextRange.fromTextSelection(inputValue.selection);
    this.composingRegion = text_formatter._MutableTextRange.fromComposingRange(inputValue.composing);
    ;
  }).prototype = text_formatter._TextEditingValueAccumulator.prototype;
  dart.addTypeTests(text_formatter._TextEditingValueAccumulator);
  dart.addTypeCaches(text_formatter._TextEditingValueAccumulator);
  dart.setMethodSignature(text_formatter._TextEditingValueAccumulator, () => ({
    __proto__: dart.getMethods(text_formatter._TextEditingValueAccumulator.__proto__),
    finalize: dart.fnType(text_input.TextEditingValue, [])
  }));
  dart.setLibraryUri(text_formatter._TextEditingValueAccumulator, I[0]);
  dart.setFieldSignature(text_formatter._TextEditingValueAccumulator, () => ({
    __proto__: dart.getFields(text_formatter._TextEditingValueAccumulator.__proto__),
    inputValue: dart.finalFieldType(text_input.TextEditingValue),
    stringBuffer: dart.finalFieldType(core.StringBuffer),
    selection: dart.finalFieldType(dart.nullable(text_formatter._MutableTextRange)),
    composingRegion: dart.finalFieldType(dart.nullable(text_formatter._MutableTextRange)),
    debugFinalized: dart.fieldType(core.bool)
  }));
  var filterPattern$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.filterPattern");
  var allow$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.allow");
  var replacementString$ = dart.privateName(text_formatter, "FilteringTextInputFormatter.replacementString");
  var _processRegion = dart.privateName(text_formatter, "_processRegion");
  text_formatter.FilteringTextInputFormatter = class FilteringTextInputFormatter extends text_formatter.TextInputFormatter {
    get filterPattern() {
      return this[filterPattern$];
    }
    set filterPattern(value) {
      super.filterPattern = value;
    }
    get allow() {
      return this[allow$];
    }
    set allow(value) {
      super.allow = value;
    }
    get replacementString() {
      return this[replacementString$];
    }
    set replacementString(value) {
      super.replacementString = value;
    }
    static ['_#new#tearOff'](filterPattern, opts) {
      let allow = opts && 'allow' in opts ? opts.allow : null;
      let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
      return new text_formatter.FilteringTextInputFormatter.new(filterPattern, {allow: allow, replacementString: replacementString});
    }
    static ['_#allow#tearOff'](filterPattern, opts) {
      let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
      return new text_formatter.FilteringTextInputFormatter.allow(filterPattern, {replacementString: replacementString});
    }
    static ['_#deny#tearOff'](filterPattern, opts) {
      let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
      return new text_formatter.FilteringTextInputFormatter.deny(filterPattern, {replacementString: replacementString});
    }
    formatEditUpdate(oldValue, newValue) {
      let t0, t0$, t0$0, t0$1;
      let formatState = new text_formatter._TextEditingValueAccumulator.new(newValue);
      if (!!formatState.debugFinalized) dart.assertFailed(null, I[1], 350, 12, "!formatState.debugFinalized");
      let matches = this.filterPattern[$allMatches](newValue.text);
      let previousMatch = null;
      for (let match of matches) {
        if (!(match.end >= match.start)) dart.assertFailed(null, I[1], 355, 14, "match.end >= match.start");
        this[_processRegion](this.allow, (t0$ = (t0 = previousMatch, t0 == null ? null : t0.end), t0$ == null ? 0 : t0$), match.start, formatState);
        if (!!formatState.debugFinalized) dart.assertFailed(null, I[1], 362, 14, "!formatState.debugFinalized");
        this[_processRegion](!this.allow, match.start, match.end, formatState);
        if (!!formatState.debugFinalized) dart.assertFailed(null, I[1], 365, 14, "!formatState.debugFinalized");
        previousMatch = match;
      }
      this[_processRegion](this.allow, (t0$1 = (t0$0 = previousMatch, t0$0 == null ? null : t0$0.end), t0$1 == null ? 0 : t0$1), newValue.text.length, formatState);
      if (!!formatState.debugFinalized) dart.assertFailed(null, I[1], 373, 12, "!formatState.debugFinalized");
      return formatState.finalize();
    }
    [_processRegion](isBannedRegion, regionStart, regionEnd, state) {
      let t0, t0$, t0$0, t0$1;
      let replacementString = isBannedRegion ? regionStart === regionEnd ? "" : this.replacementString : state.inputValue.text[$substring](regionStart, regionEnd);
      state.stringBuffer.write(replacementString);
      if (replacementString.length === regionEnd - regionStart) {
        return;
      }
      function adjustIndex(originalIndex) {
        let replacedLength = originalIndex <= regionStart && originalIndex < regionEnd ? 0 : replacementString.length;
        let removedLength = originalIndex[$clamp](regionStart, regionEnd) - regionStart;
        return replacedLength - removedLength;
      }
      dart.fn(adjustIndex, T.intToint());
      t0 = state.selection;
      t0 == null ? null : t0.base = t0.base + adjustIndex(state.inputValue.selection.baseOffset);
      t0$ = state.selection;
      t0$ == null ? null : t0$.extent = t0$.extent + adjustIndex(state.inputValue.selection.extentOffset);
      t0$0 = state.composingRegion;
      t0$0 == null ? null : t0$0.base = t0$0.base + adjustIndex(state.inputValue.composing.start);
      t0$1 = state.composingRegion;
      t0$1 == null ? null : t0$1.extent = t0$1.extent + adjustIndex(state.inputValue.composing.end);
    }
  };
  (text_formatter.FilteringTextInputFormatter.new = function(filterPattern, opts) {
    let allow = opts && 'allow' in opts ? opts.allow : null;
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    this[filterPattern$] = filterPattern;
    this[allow$] = allow;
    this[replacementString$] = replacementString;
    if (!(filterPattern !== null)) dart.assertFailed(null, I[1], 241, 15, "filterPattern != null");
    if (!(allow !== null)) dart.assertFailed(null, I[1], 242, 15, "allow != null");
    if (!(replacementString !== null)) dart.assertFailed(null, I[1], 243, 15, "replacementString != null");
    ;
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  (text_formatter.FilteringTextInputFormatter.allow = function(filterPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    text_formatter.FilteringTextInputFormatter.new.call(this, filterPattern, {allow: true, replacementString: replacementString});
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  (text_formatter.FilteringTextInputFormatter.deny = function(filterPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    text_formatter.FilteringTextInputFormatter.new.call(this, filterPattern, {allow: false, replacementString: replacementString});
  }).prototype = text_formatter.FilteringTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.FilteringTextInputFormatter);
  dart.addTypeCaches(text_formatter.FilteringTextInputFormatter);
  dart.setMethodSignature(text_formatter.FilteringTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.FilteringTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue]),
    [_processRegion]: dart.fnType(dart.void, [core.bool, core.int, core.int, text_formatter._TextEditingValueAccumulator])
  }));
  dart.setLibraryUri(text_formatter.FilteringTextInputFormatter, I[0]);
  dart.setFieldSignature(text_formatter.FilteringTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.FilteringTextInputFormatter.__proto__),
    filterPattern: dart.finalFieldType(core.Pattern),
    allow: dart.finalFieldType(core.bool),
    replacementString: dart.finalFieldType(core.String)
  }));
  dart.setStaticFieldSignature(text_formatter.FilteringTextInputFormatter, () => ['singleLineFormatter', 'digitsOnly']);
  dart.defineLazy(text_formatter.FilteringTextInputFormatter, {
    /*text_formatter.FilteringTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new text_formatter.FilteringTextInputFormatter.deny("\n");
    },
    /*text_formatter.FilteringTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new text_formatter.FilteringTextInputFormatter.allow(core.RegExp.new("[0-9]"));
    }
  }, false);
  var maxLength$ = dart.privateName(text_formatter, "LengthLimitingTextInputFormatter.maxLength");
  var maxLengthEnforcement$ = dart.privateName(text_formatter, "LengthLimitingTextInputFormatter.maxLengthEnforcement");
  text_formatter.LengthLimitingTextInputFormatter = class LengthLimitingTextInputFormatter extends text_formatter.TextInputFormatter {
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    get maxLengthEnforcement() {
      return this[maxLengthEnforcement$];
    }
    set maxLengthEnforcement(value) {
      super.maxLengthEnforcement = value;
    }
    static ['_#new#tearOff'](maxLength, opts) {
      let maxLengthEnforcement = opts && 'maxLengthEnforcement' in opts ? opts.maxLengthEnforcement : null;
      return new text_formatter.LengthLimitingTextInputFormatter.new(maxLength, {maxLengthEnforcement: maxLengthEnforcement});
    }
    static getDefaultMaxLengthEnforcement(platform = null) {
      let t0;
      if (true) {
        return text_formatter.MaxLengthEnforcement.truncateAfterCompositionEnds;
      } else {
        switch (t0 = platform, t0 == null ? platform$.defaultTargetPlatform : t0) {
          case C[6] || CT.C6:
          case C[7] || CT.C7:
          {
            return text_formatter.MaxLengthEnforcement.enforced;
          }
          case C[8] || CT.C8:
          case C[9] || CT.C9:
          case C[10] || CT.C10:
          case C[11] || CT.C11:
          {
            return text_formatter.MaxLengthEnforcement.truncateAfterCompositionEnds;
          }
        }
      }
    }
    static truncate(value, maxLength) {
      let iterator = new characters_impl.StringCharacterRange.new(value.text);
      if (extensions['StringCharacters|get#characters'](value.text)[$length] > maxLength) {
        iterator.expandNext(maxLength);
      }
      let truncated = iterator.current;
      return new text_input.TextEditingValue.new({text: truncated, selection: value.selection.copyWith({baseOffset: math.min(core.int, value.selection.start, truncated.length), extentOffset: math.min(core.int, value.selection.end, truncated.length)}), composing: !value.composing.isCollapsed && truncated.length > value.composing.start ? new ui.TextRange.new({start: value.composing.start, end: math.min(core.int, value.composing.end, truncated.length)}) : ui.TextRange.empty});
    }
    formatEditUpdate(oldValue, newValue) {
      let t0;
      let maxLength = this.maxLength;
      if (maxLength == null || maxLength === -1 || extensions['StringCharacters|get#characters'](newValue.text)[$length] <= dart.notNull(maxLength)) {
        return newValue;
      }
      if (!(dart.notNull(maxLength) > 0)) dart.assertFailed(null, I[1], 560, 12, "maxLength > 0");
      switch (t0 = this.maxLengthEnforcement, t0 == null ? text_formatter.LengthLimitingTextInputFormatter.getDefaultMaxLengthEnforcement() : t0) {
        case C[0] || CT.C0:
        {
          return newValue;
        }
        case C[1] || CT.C1:
        {
          if (extensions['StringCharacters|get#characters'](oldValue.text)[$length] === maxLength && oldValue.selection.isCollapsed) {
            return oldValue;
          }
          return text_formatter.LengthLimitingTextInputFormatter.truncate(newValue, maxLength);
        }
        case C[2] || CT.C2:
        {
          if (extensions['StringCharacters|get#characters'](oldValue.text)[$length] === maxLength && !oldValue.composing.isValid) {
            return oldValue;
          }
          if (newValue.composing.isValid) {
            return newValue;
          }
          return text_formatter.LengthLimitingTextInputFormatter.truncate(newValue, maxLength);
        }
      }
    }
  };
  (text_formatter.LengthLimitingTextInputFormatter.new = function(maxLength, opts) {
    let maxLengthEnforcement = opts && 'maxLengthEnforcement' in opts ? opts.maxLengthEnforcement : null;
    this[maxLength$] = maxLength;
    this[maxLengthEnforcement$] = maxLengthEnforcement;
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, I[1], 434, 15, "maxLength == null || maxLength == -1 || maxLength > 0");
    ;
  }).prototype = text_formatter.LengthLimitingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.LengthLimitingTextInputFormatter);
  dart.addTypeCaches(text_formatter.LengthLimitingTextInputFormatter);
  dart.setMethodSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setStaticMethodSignature(text_formatter.LengthLimitingTextInputFormatter, () => ['getDefaultMaxLengthEnforcement', 'truncate']);
  dart.setLibraryUri(text_formatter.LengthLimitingTextInputFormatter, I[0]);
  dart.setFieldSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    maxLength: dart.finalFieldType(dart.nullable(core.int)),
    maxLengthEnforcement: dart.finalFieldType(dart.nullable(text_formatter.MaxLengthEnforcement))
  }));
  var oldText$ = dart.privateName(text_editing_delta, "TextEditingDelta.oldText");
  var selection$ = dart.privateName(text_editing_delta, "TextEditingDelta.selection");
  var composing$ = dart.privateName(text_editing_delta, "TextEditingDelta.composing");
  text_editing_delta.TextEditingDelta = class TextEditingDelta extends core.Object {
    get oldText() {
      return this[oldText$];
    }
    set oldText(value) {
      super.oldText = value;
    }
    get selection() {
      return this[selection$];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$];
    }
    set composing(value) {
      super.composing = value;
    }
    static fromJSON(encoded) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let oldText = core.String.as(encoded[$_get]("oldText"));
      let replacementDestinationStart = core.int.as(encoded[$_get]("deltaStart"));
      let replacementDestinationEnd = core.int.as(encoded[$_get]("deltaEnd"));
      let replacementSource = core.String.as(encoded[$_get]("deltaText"));
      let replacementSourceEnd = replacementSource.length;
      let isNonTextUpdate = replacementDestinationStart === -1 && replacementDestinationStart === replacementDestinationEnd;
      let newComposing = new ui.TextRange.new({start: (t0 = T.intN().as(encoded[$_get]("composingBase")), t0 == null ? -1 : t0), end: (t0$ = T.intN().as(encoded[$_get]("composingExtent")), t0$ == null ? -1 : t0$)});
      let newSelection = new text_editing.TextSelection.new({baseOffset: (t0$0 = T.intN().as(encoded[$_get]("selectionBase")), t0$0 == null ? -1 : t0$0), extentOffset: (t0$1 = T.intN().as(encoded[$_get]("selectionExtent")), t0$1 == null ? -1 : t0$1), affinity: (t0$2 = text_editing_delta._toTextAffinity(T.StringN().as(encoded[$_get]("selectionAffinity"))), t0$2 == null ? ui.TextAffinity.downstream : t0$2), isDirectional: (t0$3 = T.boolN().as(encoded[$_get]("selectionIsDirectional")), t0$3 == null ? false : t0$3)});
      if (isNonTextUpdate) {
        return new text_editing_delta.TextEditingDeltaNonTextUpdate.new({oldText: oldText, selection: newSelection, composing: newComposing});
      }
      let newText = text_editing_delta._replace(oldText, replacementSource, replacementDestinationStart, replacementDestinationEnd);
      let isEqual = oldText === newText;
      let isDeletionGreaterThanOne = replacementDestinationEnd - replacementDestinationStart - (replacementSourceEnd - 0) > 1;
      let isDeletingByReplacingWithEmpty = replacementSource[$isEmpty] && 0 === 0 && 0 === replacementSourceEnd;
      let isReplacedByShorter = isDeletionGreaterThanOne && replacementSourceEnd - 0 < replacementDestinationEnd - replacementDestinationStart;
      let isReplacedByLonger = replacementSourceEnd - 0 > replacementDestinationEnd - replacementDestinationStart;
      let isReplacedBySame = replacementSourceEnd - 0 === replacementDestinationEnd - replacementDestinationStart;
      let isInsertingInsideComposingRegion = replacementDestinationStart + replacementSourceEnd > replacementDestinationEnd;
      let isDeletingInsideComposingRegion = !isReplacedByShorter && !isDeletingByReplacingWithEmpty && replacementDestinationStart + replacementSourceEnd < replacementDestinationEnd;
      let newComposingText = null;
      let originalComposingText = null;
      if (isDeletingByReplacingWithEmpty || isDeletingInsideComposingRegion || isReplacedByShorter) {
        newComposingText = replacementSource[$substring](0, replacementSourceEnd);
        originalComposingText = oldText[$substring](replacementDestinationStart, replacementDestinationStart + replacementSourceEnd);
      } else {
        newComposingText = replacementSource[$substring](0, 0 + (replacementDestinationEnd - replacementDestinationStart));
        originalComposingText = oldText[$substring](replacementDestinationStart, replacementDestinationEnd);
      }
      let isOriginalComposingRegionTextChanged = originalComposingText !== newComposingText;
      let isReplaced = isOriginalComposingRegionTextChanged || isReplacedByLonger || isReplacedByShorter || isReplacedBySame;
      if (isEqual) {
        return new text_editing_delta.TextEditingDeltaNonTextUpdate.new({oldText: oldText, selection: newSelection, composing: newComposing});
      } else if ((isDeletingByReplacingWithEmpty || isDeletingInsideComposingRegion) && !isOriginalComposingRegionTextChanged) {
        let actualStart = replacementDestinationStart;
        if (!isDeletionGreaterThanOne) {
          actualStart = replacementDestinationEnd - 1;
        }
        return new text_editing_delta.TextEditingDeltaDeletion.new({oldText: oldText, deletedRange: new ui.TextRange.new({start: actualStart, end: replacementDestinationEnd}), selection: newSelection, composing: newComposing});
      } else if ((replacementDestinationStart === replacementDestinationEnd || isInsertingInsideComposingRegion) && !isOriginalComposingRegionTextChanged) {
        return new text_editing_delta.TextEditingDeltaInsertion.new({oldText: oldText, textInserted: replacementSource[$substring](replacementDestinationEnd - replacementDestinationStart, replacementDestinationEnd - replacementDestinationStart + (replacementSource.length - (replacementDestinationEnd - replacementDestinationStart))), insertionOffset: replacementDestinationEnd, selection: newSelection, composing: newComposing});
      } else if (isReplaced) {
        return new text_editing_delta.TextEditingDeltaReplacement.new({oldText: oldText, replacementText: replacementSource, replacedRange: new ui.TextRange.new({start: replacementDestinationStart, end: replacementDestinationEnd}), selection: newSelection, composing: newComposing});
      }
      if (!false) dart.assertFailed(null, I[2], 202, 12, "false");
      return new text_editing_delta.TextEditingDeltaNonTextUpdate.new({oldText: oldText, selection: newSelection, composing: newComposing});
    }
    static ['_#fromJSON#tearOff'](encoded) {
      return text_editing_delta.TextEditingDelta.fromJSON(encoded);
    }
  };
  (text_editing_delta.TextEditingDelta.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    this[oldText$] = oldText;
    this[selection$] = selection;
    this[composing$] = composing;
    if (!(oldText !== null)) dart.assertFailed(null, I[2], 52, 15, "oldText != null");
    if (!(selection !== null)) dart.assertFailed(null, I[2], 53, 15, "selection != null");
    if (!(composing !== null)) dart.assertFailed(null, I[2], 54, 15, "composing != null");
    ;
  }).prototype = text_editing_delta.TextEditingDelta.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDelta);
  dart.addTypeCaches(text_editing_delta.TextEditingDelta);
  dart.setStaticMethodSignature(text_editing_delta.TextEditingDelta, () => ['fromJSON']);
  dart.setLibraryUri(text_editing_delta.TextEditingDelta, I[3]);
  dart.setFieldSignature(text_editing_delta.TextEditingDelta, () => ({
    __proto__: dart.getFields(text_editing_delta.TextEditingDelta.__proto__),
    oldText: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(text_editing.TextSelection),
    composing: dart.finalFieldType(ui.TextRange)
  }));
  var textInserted$ = dart.privateName(text_editing_delta, "TextEditingDeltaInsertion.textInserted");
  var insertionOffset$ = dart.privateName(text_editing_delta, "TextEditingDeltaInsertion.insertionOffset");
  text_editing_delta.TextEditingDeltaInsertion = class TextEditingDeltaInsertion extends text_editing_delta.TextEditingDelta {
    get textInserted() {
      return this[textInserted$];
    }
    set textInserted(value) {
      super.textInserted = value;
    }
    get insertionOffset() {
      return this[insertionOffset$];
    }
    set insertionOffset(value) {
      super.insertionOffset = value;
    }
    static ['_#new#tearOff'](opts) {
      let oldText = opts && 'oldText' in opts ? opts.oldText : null;
      let textInserted = opts && 'textInserted' in opts ? opts.textInserted : null;
      let insertionOffset = opts && 'insertionOffset' in opts ? opts.insertionOffset : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_editing_delta.TextEditingDeltaInsertion.new({oldText: oldText, textInserted: textInserted, insertionOffset: insertionOffset, selection: selection, composing: composing});
    }
    apply(value) {
      let newText = this.oldText;
      newText = text_editing_delta._replace(newText, this.textInserted, this.insertionOffset, this.insertionOffset);
      return value.copyWith({text: newText, selection: this.selection, composing: this.composing});
    }
  };
  (text_editing_delta.TextEditingDeltaInsertion.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let textInserted = opts && 'textInserted' in opts ? opts.textInserted : null;
    let insertionOffset = opts && 'insertionOffset' in opts ? opts.insertionOffset : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    this[textInserted$] = textInserted;
    this[insertionOffset$] = insertionOffset;
    text_editing_delta.TextEditingDeltaInsertion.__proto__.new.call(this, {oldText: oldText, selection: selection, composing: composing});
    ;
  }).prototype = text_editing_delta.TextEditingDeltaInsertion.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDeltaInsertion);
  dart.addTypeCaches(text_editing_delta.TextEditingDeltaInsertion);
  dart.setMethodSignature(text_editing_delta.TextEditingDeltaInsertion, () => ({
    __proto__: dart.getMethods(text_editing_delta.TextEditingDeltaInsertion.__proto__),
    apply: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_editing_delta.TextEditingDeltaInsertion, I[3]);
  dart.setFieldSignature(text_editing_delta.TextEditingDeltaInsertion, () => ({
    __proto__: dart.getFields(text_editing_delta.TextEditingDeltaInsertion.__proto__),
    textInserted: dart.finalFieldType(core.String),
    insertionOffset: dart.finalFieldType(core.int)
  }));
  var deletedRange$ = dart.privateName(text_editing_delta, "TextEditingDeltaDeletion.deletedRange");
  text_editing_delta.TextEditingDeltaDeletion = class TextEditingDeltaDeletion extends text_editing_delta.TextEditingDelta {
    get deletedRange() {
      return this[deletedRange$];
    }
    set deletedRange(value) {
      super.deletedRange = value;
    }
    static ['_#new#tearOff'](opts) {
      let oldText = opts && 'oldText' in opts ? opts.oldText : null;
      let deletedRange = opts && 'deletedRange' in opts ? opts.deletedRange : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_editing_delta.TextEditingDeltaDeletion.new({oldText: oldText, deletedRange: deletedRange, selection: selection, composing: composing});
    }
    get textDeleted() {
      return this.oldText[$substring](this.deletedRange.start, this.deletedRange.end);
    }
    apply(value) {
      let newText = this.oldText;
      newText = text_editing_delta._replace(newText, "", this.deletedRange.start, this.deletedRange.end);
      return value.copyWith({text: newText, selection: this.selection, composing: this.composing});
    }
  };
  (text_editing_delta.TextEditingDeltaDeletion.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let deletedRange = opts && 'deletedRange' in opts ? opts.deletedRange : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    this[deletedRange$] = deletedRange;
    text_editing_delta.TextEditingDeltaDeletion.__proto__.new.call(this, {oldText: oldText, selection: selection, composing: composing});
    ;
  }).prototype = text_editing_delta.TextEditingDeltaDeletion.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDeltaDeletion);
  dart.addTypeCaches(text_editing_delta.TextEditingDeltaDeletion);
  dart.setMethodSignature(text_editing_delta.TextEditingDeltaDeletion, () => ({
    __proto__: dart.getMethods(text_editing_delta.TextEditingDeltaDeletion.__proto__),
    apply: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue])
  }));
  dart.setGetterSignature(text_editing_delta.TextEditingDeltaDeletion, () => ({
    __proto__: dart.getGetters(text_editing_delta.TextEditingDeltaDeletion.__proto__),
    textDeleted: core.String
  }));
  dart.setLibraryUri(text_editing_delta.TextEditingDeltaDeletion, I[3]);
  dart.setFieldSignature(text_editing_delta.TextEditingDeltaDeletion, () => ({
    __proto__: dart.getFields(text_editing_delta.TextEditingDeltaDeletion.__proto__),
    deletedRange: dart.finalFieldType(ui.TextRange)
  }));
  var replacementText$ = dart.privateName(text_editing_delta, "TextEditingDeltaReplacement.replacementText");
  var replacedRange$ = dart.privateName(text_editing_delta, "TextEditingDeltaReplacement.replacedRange");
  text_editing_delta.TextEditingDeltaReplacement = class TextEditingDeltaReplacement extends text_editing_delta.TextEditingDelta {
    get replacementText() {
      return this[replacementText$];
    }
    set replacementText(value) {
      super.replacementText = value;
    }
    get replacedRange() {
      return this[replacedRange$];
    }
    set replacedRange(value) {
      super.replacedRange = value;
    }
    static ['_#new#tearOff'](opts) {
      let oldText = opts && 'oldText' in opts ? opts.oldText : null;
      let replacementText = opts && 'replacementText' in opts ? opts.replacementText : null;
      let replacedRange = opts && 'replacedRange' in opts ? opts.replacedRange : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_editing_delta.TextEditingDeltaReplacement.new({oldText: oldText, replacementText: replacementText, replacedRange: replacedRange, selection: selection, composing: composing});
    }
    get textReplaced() {
      return this.oldText[$substring](this.replacedRange.start, this.replacedRange.end);
    }
    apply(value) {
      let newText = this.oldText;
      newText = text_editing_delta._replace(newText, this.replacementText, this.replacedRange.start, this.replacedRange.end);
      return value.copyWith({text: newText, selection: this.selection, composing: this.composing});
    }
  };
  (text_editing_delta.TextEditingDeltaReplacement.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let replacementText = opts && 'replacementText' in opts ? opts.replacementText : null;
    let replacedRange = opts && 'replacedRange' in opts ? opts.replacedRange : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    this[replacementText$] = replacementText;
    this[replacedRange$] = replacedRange;
    text_editing_delta.TextEditingDeltaReplacement.__proto__.new.call(this, {oldText: oldText, selection: selection, composing: composing});
    ;
  }).prototype = text_editing_delta.TextEditingDeltaReplacement.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDeltaReplacement);
  dart.addTypeCaches(text_editing_delta.TextEditingDeltaReplacement);
  dart.setMethodSignature(text_editing_delta.TextEditingDeltaReplacement, () => ({
    __proto__: dart.getMethods(text_editing_delta.TextEditingDeltaReplacement.__proto__),
    apply: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue])
  }));
  dart.setGetterSignature(text_editing_delta.TextEditingDeltaReplacement, () => ({
    __proto__: dart.getGetters(text_editing_delta.TextEditingDeltaReplacement.__proto__),
    textReplaced: core.String
  }));
  dart.setLibraryUri(text_editing_delta.TextEditingDeltaReplacement, I[3]);
  dart.setFieldSignature(text_editing_delta.TextEditingDeltaReplacement, () => ({
    __proto__: dart.getFields(text_editing_delta.TextEditingDeltaReplacement.__proto__),
    replacementText: dart.finalFieldType(core.String),
    replacedRange: dart.finalFieldType(ui.TextRange)
  }));
  text_editing_delta.TextEditingDeltaNonTextUpdate = class TextEditingDeltaNonTextUpdate extends text_editing_delta.TextEditingDelta {
    static ['_#new#tearOff'](opts) {
      let oldText = opts && 'oldText' in opts ? opts.oldText : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_editing_delta.TextEditingDeltaNonTextUpdate.new({oldText: oldText, selection: selection, composing: composing});
    }
    apply(value) {
      return new text_input.TextEditingValue.new({text: this.oldText, selection: this.selection, composing: this.composing});
    }
  };
  (text_editing_delta.TextEditingDeltaNonTextUpdate.new = function(opts) {
    let oldText = opts && 'oldText' in opts ? opts.oldText : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let composing = opts && 'composing' in opts ? opts.composing : null;
    text_editing_delta.TextEditingDeltaNonTextUpdate.__proto__.new.call(this, {oldText: oldText, selection: selection, composing: composing});
    ;
  }).prototype = text_editing_delta.TextEditingDeltaNonTextUpdate.prototype;
  dart.addTypeTests(text_editing_delta.TextEditingDeltaNonTextUpdate);
  dart.addTypeCaches(text_editing_delta.TextEditingDeltaNonTextUpdate);
  dart.setMethodSignature(text_editing_delta.TextEditingDeltaNonTextUpdate, () => ({
    __proto__: dart.getMethods(text_editing_delta.TextEditingDeltaNonTextUpdate.__proto__),
    apply: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_editing_delta.TextEditingDeltaNonTextUpdate, I[3]);
  text_editing_delta._toTextAffinity = function _toTextAffinity(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
      {
        return ui.TextAffinity.downstream;
      }
      case "TextAffinity.upstream":
      {
        return ui.TextAffinity.upstream;
      }
    }
    return null;
  };
  text_editing_delta._replace = function _replace(originalText, replacementText, start, end) {
    let textStart = originalText[$substring](0, start);
    let textEnd = originalText[$substring](end, originalText.length);
    let newText = textStart + replacementText + textEnd;
    return newText;
  };
  text_input.SmartDashesType = class SmartDashesType extends core._Enum {
    toString() {
      return "SmartDashesType." + this[_name];
    }
  };
  (text_input.SmartDashesType.new = function(index, name) {
    text_input.SmartDashesType.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.SmartDashesType.prototype;
  dart.addTypeTests(text_input.SmartDashesType);
  dart.addTypeCaches(text_input.SmartDashesType);
  dart.setLibraryUri(text_input.SmartDashesType, I[4]);
  dart.setStaticFieldSignature(text_input.SmartDashesType, () => ['values', 'disabled', 'enabled']);
  dart.defineExtensionMethods(text_input.SmartDashesType, ['toString']);
  text_input.SmartDashesType.disabled = C[12] || CT.C12;
  text_input.SmartDashesType.enabled = C[13] || CT.C13;
  text_input.SmartDashesType.values = C[14] || CT.C14;
  text_input.SmartQuotesType = class SmartQuotesType extends core._Enum {
    toString() {
      return "SmartQuotesType." + this[_name];
    }
  };
  (text_input.SmartQuotesType.new = function(index, name) {
    text_input.SmartQuotesType.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.SmartQuotesType.prototype;
  dart.addTypeTests(text_input.SmartQuotesType);
  dart.addTypeCaches(text_input.SmartQuotesType);
  dart.setLibraryUri(text_input.SmartQuotesType, I[4]);
  dart.setStaticFieldSignature(text_input.SmartQuotesType, () => ['values', 'disabled', 'enabled']);
  dart.defineExtensionMethods(text_input.SmartQuotesType, ['toString']);
  text_input.SmartQuotesType.disabled = C[15] || CT.C15;
  text_input.SmartQuotesType.enabled = C[16] || CT.C16;
  text_input.SmartQuotesType.values = C[17] || CT.C17;
  var index$ = dart.privateName(text_input, "TextInputType.index");
  var signed$ = dart.privateName(text_input, "TextInputType.signed");
  var decimal$ = dart.privateName(text_input, "TextInputType.decimal");
  var _name$ = dart.privateName(text_input, "_name");
  text_input.TextInputType = class TextInputType extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get signed() {
      return this[signed$];
    }
    set signed(value) {
      super.signed = value;
    }
    get decimal() {
      return this[decimal$];
    }
    set decimal(value) {
      super.decimal = value;
    }
    static ['_#_#tearOff'](index) {
      return new text_input.TextInputType.__(index);
    }
    static ['_#numberWithOptions#tearOff'](opts) {
      let signed = opts && 'signed' in opts ? opts.signed : false;
      let decimal = opts && 'decimal' in opts ? opts.decimal : false;
      return new text_input.TextInputType.numberWithOptions({signed: signed, decimal: decimal});
    }
    get [_name$]() {
      return "TextInputType." + text_input.TextInputType._names[$_get](this.index);
    }
    toJson() {
      return new (T.IdentityMapOfString$dynamic()).from(["name", this[_name$], "signed", this.signed, "decimal", this.decimal]);
    }
    toString() {
      return object.objectRuntimeType(this, "TextInputType") + "(" + "name: " + this[_name$] + ", " + "signed: " + dart.str(this.signed) + ", " + "decimal: " + dart.str(this.decimal) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      return text_input.TextInputType.is(other) && other.index === this.index && other.signed == this.signed && other.decimal == this.decimal;
    }
    get hashCode() {
      return ui.hashValues(this.index, this.signed, this.decimal);
    }
  };
  (text_input.TextInputType.__ = function(index) {
    this[index$] = index;
    this[signed$] = null;
    this[decimal$] = null;
    ;
  }).prototype = text_input.TextInputType.prototype;
  (text_input.TextInputType.numberWithOptions = function(opts) {
    let signed = opts && 'signed' in opts ? opts.signed : false;
    let decimal = opts && 'decimal' in opts ? opts.decimal : false;
    this[signed$] = signed;
    this[decimal$] = decimal;
    this[index$] = 2;
    ;
  }).prototype = text_input.TextInputType.prototype;
  dart.addTypeTests(text_input.TextInputType);
  dart.addTypeCaches(text_input.TextInputType);
  dart.setMethodSignature(text_input.TextInputType, () => ({
    __proto__: dart.getMethods(text_input.TextInputType.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(text_input.TextInputType, () => ({
    __proto__: dart.getGetters(text_input.TextInputType.__proto__),
    [_name$]: core.String
  }));
  dart.setLibraryUri(text_input.TextInputType, I[4]);
  dart.setFieldSignature(text_input.TextInputType, () => ({
    __proto__: dart.getFields(text_input.TextInputType.__proto__),
    index: dart.finalFieldType(core.int),
    signed: dart.finalFieldType(dart.nullable(core.bool)),
    decimal: dart.finalFieldType(dart.nullable(core.bool))
  }));
  dart.setStaticFieldSignature(text_input.TextInputType, () => ['text', 'multiline', 'number', 'phone', 'datetime', 'emailAddress', 'url', 'visiblePassword', 'name_', 'streetAddress', 'none', 'values', '_names']);
  dart.defineExtensionMethods(text_input.TextInputType, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextInputType, ['hashCode']);
  dart.defineLazy(text_input.TextInputType, {
    /*text_input.TextInputType.text*/get text() {
      return C[18] || CT.C18;
    },
    /*text_input.TextInputType.multiline*/get multiline() {
      return C[19] || CT.C19;
    },
    /*text_input.TextInputType.number*/get number() {
      return C[20] || CT.C20;
    },
    /*text_input.TextInputType.phone*/get phone() {
      return C[21] || CT.C21;
    },
    /*text_input.TextInputType.datetime*/get datetime() {
      return C[22] || CT.C22;
    },
    /*text_input.TextInputType.emailAddress*/get emailAddress() {
      return C[23] || CT.C23;
    },
    /*text_input.TextInputType.url*/get url() {
      return C[24] || CT.C24;
    },
    /*text_input.TextInputType.visiblePassword*/get visiblePassword() {
      return C[25] || CT.C25;
    },
    /*text_input.TextInputType.name_*/get name_() {
      return C[26] || CT.C26;
    },
    /*text_input.TextInputType.streetAddress*/get streetAddress() {
      return C[27] || CT.C27;
    },
    /*text_input.TextInputType.none*/get none() {
      return C[28] || CT.C28;
    },
    /*text_input.TextInputType.values*/get values() {
      return C[29] || CT.C29;
    },
    /*text_input.TextInputType._names*/get _names() {
      return C[30] || CT.C30;
    }
  }, false);
  text_input.TextInputAction = class TextInputAction extends core._Enum {
    toString() {
      return "TextInputAction." + this[_name];
    }
  };
  (text_input.TextInputAction.new = function(index, name) {
    text_input.TextInputAction.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.TextInputAction.prototype;
  dart.addTypeTests(text_input.TextInputAction);
  dart.addTypeCaches(text_input.TextInputAction);
  dart.setLibraryUri(text_input.TextInputAction, I[4]);
  dart.setStaticFieldSignature(text_input.TextInputAction, () => ['values', 'none', 'unspecified', 'done', 'go', 'search', 'send', 'next', 'previous', 'continueAction', 'join', 'route', 'emergencyCall', 'newline']);
  dart.defineExtensionMethods(text_input.TextInputAction, ['toString']);
  text_input.TextInputAction.none = C[31] || CT.C31;
  text_input.TextInputAction.unspecified = C[32] || CT.C32;
  text_input.TextInputAction.done = C[33] || CT.C33;
  text_input.TextInputAction.go = C[34] || CT.C34;
  text_input.TextInputAction.search = C[35] || CT.C35;
  text_input.TextInputAction.send = C[36] || CT.C36;
  text_input.TextInputAction.next = C[37] || CT.C37;
  text_input.TextInputAction.previous = C[38] || CT.C38;
  text_input.TextInputAction.continueAction = C[39] || CT.C39;
  text_input.TextInputAction.join = C[40] || CT.C40;
  text_input.TextInputAction.route = C[41] || CT.C41;
  text_input.TextInputAction.emergencyCall = C[42] || CT.C42;
  text_input.TextInputAction.newline = C[43] || CT.C43;
  text_input.TextInputAction.values = C[44] || CT.C44;
  text_input.TextCapitalization = class TextCapitalization extends core._Enum {
    toString() {
      return "TextCapitalization." + this[_name];
    }
  };
  (text_input.TextCapitalization.new = function(index, name) {
    text_input.TextCapitalization.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.TextCapitalization.prototype;
  dart.addTypeTests(text_input.TextCapitalization);
  dart.addTypeCaches(text_input.TextCapitalization);
  dart.setLibraryUri(text_input.TextCapitalization, I[4]);
  dart.setStaticFieldSignature(text_input.TextCapitalization, () => ['values', 'words', 'sentences', 'characters', 'none']);
  dart.defineExtensionMethods(text_input.TextCapitalization, ['toString']);
  text_input.TextCapitalization.words = C[45] || CT.C45;
  text_input.TextCapitalization.sentences = C[46] || CT.C46;
  text_input.TextCapitalization.characters = C[47] || CT.C47;
  text_input.TextCapitalization.none = C[48] || CT.C48;
  text_input.TextCapitalization.values = C[49] || CT.C49;
  var inputType$ = dart.privateName(text_input, "TextInputConfiguration.inputType");
  var readOnly$ = dart.privateName(text_input, "TextInputConfiguration.readOnly");
  var obscureText$ = dart.privateName(text_input, "TextInputConfiguration.obscureText");
  var autocorrect$ = dart.privateName(text_input, "TextInputConfiguration.autocorrect");
  var autofillConfiguration$ = dart.privateName(text_input, "TextInputConfiguration.autofillConfiguration");
  var smartDashesType$ = dart.privateName(text_input, "TextInputConfiguration.smartDashesType");
  var smartQuotesType$ = dart.privateName(text_input, "TextInputConfiguration.smartQuotesType");
  var enableSuggestions$ = dart.privateName(text_input, "TextInputConfiguration.enableSuggestions");
  var actionLabel$ = dart.privateName(text_input, "TextInputConfiguration.actionLabel");
  var inputAction$ = dart.privateName(text_input, "TextInputConfiguration.inputAction");
  var textCapitalization$ = dart.privateName(text_input, "TextInputConfiguration.textCapitalization");
  var keyboardAppearance$ = dart.privateName(text_input, "TextInputConfiguration.keyboardAppearance");
  var enableIMEPersonalizedLearning$ = dart.privateName(text_input, "TextInputConfiguration.enableIMEPersonalizedLearning");
  var enableDeltaModel$ = dart.privateName(text_input, "TextInputConfiguration.enableDeltaModel");
  var AutofillConfiguration_hintText = dart.privateName(autofill, "AutofillConfiguration.hintText");
  var TextEditingValue_composing = dart.privateName(text_input, "TextEditingValue.composing");
  var TextEditingValue_selection = dart.privateName(text_input, "TextEditingValue.selection");
  var TextEditingValue_text = dart.privateName(text_input, "TextEditingValue.text");
  var AutofillConfiguration_currentEditingValue = dart.privateName(autofill, "AutofillConfiguration.currentEditingValue");
  var AutofillConfiguration_autofillHints = dart.privateName(autofill, "AutofillConfiguration.autofillHints");
  var AutofillConfiguration_uniqueIdentifier = dart.privateName(autofill, "AutofillConfiguration.uniqueIdentifier");
  var AutofillConfiguration_enabled = dart.privateName(autofill, "AutofillConfiguration.enabled");
  text_input.TextInputConfiguration = class TextInputConfiguration extends core.Object {
    get inputType() {
      return this[inputType$];
    }
    set inputType(value) {
      super.inputType = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get autofillConfiguration() {
      return this[autofillConfiguration$];
    }
    set autofillConfiguration(value) {
      super.autofillConfiguration = value;
    }
    get smartDashesType() {
      return this[smartDashesType$];
    }
    set smartDashesType(value) {
      super.smartDashesType = value;
    }
    get smartQuotesType() {
      return this[smartQuotesType$];
    }
    set smartQuotesType(value) {
      super.smartQuotesType = value;
    }
    get enableSuggestions() {
      return this[enableSuggestions$];
    }
    set enableSuggestions(value) {
      super.enableSuggestions = value;
    }
    get actionLabel() {
      return this[actionLabel$];
    }
    set actionLabel(value) {
      super.actionLabel = value;
    }
    get inputAction() {
      return this[inputAction$];
    }
    set inputAction(value) {
      super.inputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    get enableIMEPersonalizedLearning() {
      return this[enableIMEPersonalizedLearning$];
    }
    set enableIMEPersonalizedLearning(value) {
      super.enableIMEPersonalizedLearning = value;
    }
    get enableDeltaModel() {
      return this[enableDeltaModel$];
    }
    set enableDeltaModel(value) {
      super.enableDeltaModel = value;
    }
    static ['_#new#tearOff'](opts) {
      let inputType = opts && 'inputType' in opts ? opts.inputType : C[18] || CT.C18;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
      let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
      let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
      let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
      let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
      let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
      let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
      let inputAction = opts && 'inputAction' in opts ? opts.inputAction : C[33] || CT.C33;
      let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C[50] || CT.C50;
      let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C[48] || CT.C48;
      let autofillConfiguration = opts && 'autofillConfiguration' in opts ? opts.autofillConfiguration : C[51] || CT.C51;
      let enableIMEPersonalizedLearning = opts && 'enableIMEPersonalizedLearning' in opts ? opts.enableIMEPersonalizedLearning : true;
      let enableDeltaModel = opts && 'enableDeltaModel' in opts ? opts.enableDeltaModel : false;
      return new text_input.TextInputConfiguration.new({inputType: inputType, readOnly: readOnly, obscureText: obscureText, autocorrect: autocorrect, smartDashesType: smartDashesType, smartQuotesType: smartQuotesType, enableSuggestions: enableSuggestions, actionLabel: actionLabel, inputAction: inputAction, keyboardAppearance: keyboardAppearance, textCapitalization: textCapitalization, autofillConfiguration: autofillConfiguration, enableIMEPersonalizedLearning: enableIMEPersonalizedLearning, enableDeltaModel: enableDeltaModel});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10;
      let inputType = opts && 'inputType' in opts ? opts.inputType : null;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
      let obscureText = opts && 'obscureText' in opts ? opts.obscureText : null;
      let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : null;
      let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
      let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
      let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : null;
      let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
      let inputAction = opts && 'inputAction' in opts ? opts.inputAction : null;
      let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : null;
      let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : null;
      let enableIMEPersonalizedLearning = opts && 'enableIMEPersonalizedLearning' in opts ? opts.enableIMEPersonalizedLearning : null;
      let autofillConfiguration = opts && 'autofillConfiguration' in opts ? opts.autofillConfiguration : null;
      let enableDeltaModel = opts && 'enableDeltaModel' in opts ? opts.enableDeltaModel : null;
      return new text_input.TextInputConfiguration.new({inputType: (t0 = inputType, t0 == null ? this.inputType : t0), readOnly: (t0$ = readOnly, t0$ == null ? this.readOnly : t0$), obscureText: (t0$0 = obscureText, t0$0 == null ? this.obscureText : t0$0), autocorrect: (t0$1 = autocorrect, t0$1 == null ? this.autocorrect : t0$1), smartDashesType: (t0$2 = smartDashesType, t0$2 == null ? this.smartDashesType : t0$2), smartQuotesType: (t0$3 = smartQuotesType, t0$3 == null ? this.smartQuotesType : t0$3), enableSuggestions: (t0$4 = enableSuggestions, t0$4 == null ? this.enableSuggestions : t0$4), inputAction: (t0$5 = inputAction, t0$5 == null ? this.inputAction : t0$5), textCapitalization: (t0$6 = textCapitalization, t0$6 == null ? this.textCapitalization : t0$6), keyboardAppearance: (t0$7 = keyboardAppearance, t0$7 == null ? this.keyboardAppearance : t0$7), enableIMEPersonalizedLearning: (t0$8 = enableIMEPersonalizedLearning, t0$8 == null ? this.enableIMEPersonalizedLearning : t0$8), autofillConfiguration: (t0$9 = autofillConfiguration, t0$9 == null ? this.autofillConfiguration : t0$9), enableDeltaModel: (t0$10 = enableDeltaModel, t0$10 == null ? this.enableDeltaModel : t0$10)});
    }
    toJson() {
      let autofill = this.autofillConfiguration.toJson();
      return (() => {
        let t0 = new (T.IdentityMapOfString$dynamic()).new();
        t0[$_set]("inputType", this.inputType.toJson());
        t0[$_set]("readOnly", this.readOnly);
        t0[$_set]("obscureText", this.obscureText);
        t0[$_set]("autocorrect", this.autocorrect);
        t0[$_set]("smartDashesType", this.smartDashesType.index[$toString]());
        t0[$_set]("smartQuotesType", this.smartQuotesType.index[$toString]());
        t0[$_set]("enableSuggestions", this.enableSuggestions);
        t0[$_set]("actionLabel", this.actionLabel);
        t0[$_set]("inputAction", this.inputAction.toString());
        t0[$_set]("textCapitalization", this.textCapitalization.toString());
        t0[$_set]("keyboardAppearance", this.keyboardAppearance.toString());
        t0[$_set]("enableIMEPersonalizedLearning", this.enableIMEPersonalizedLearning);
        if (autofill != null) t0[$_set]("autofill", autofill);
        t0[$_set]("enableDeltaModel", this.enableDeltaModel);
        return t0;
      })();
    }
  };
  (text_input.TextInputConfiguration.new = function(opts) {
    let t0, t0$;
    let inputType = opts && 'inputType' in opts ? opts.inputType : C[18] || CT.C18;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let smartDashesType = opts && 'smartDashesType' in opts ? opts.smartDashesType : null;
    let smartQuotesType = opts && 'smartQuotesType' in opts ? opts.smartQuotesType : null;
    let enableSuggestions = opts && 'enableSuggestions' in opts ? opts.enableSuggestions : true;
    let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
    let inputAction = opts && 'inputAction' in opts ? opts.inputAction : C[33] || CT.C33;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C[50] || CT.C50;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C[48] || CT.C48;
    let autofillConfiguration = opts && 'autofillConfiguration' in opts ? opts.autofillConfiguration : C[51] || CT.C51;
    let enableIMEPersonalizedLearning = opts && 'enableIMEPersonalizedLearning' in opts ? opts.enableIMEPersonalizedLearning : true;
    let enableDeltaModel = opts && 'enableDeltaModel' in opts ? opts.enableDeltaModel : false;
    this[inputType$] = inputType;
    this[readOnly$] = readOnly;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[enableSuggestions$] = enableSuggestions;
    this[actionLabel$] = actionLabel;
    this[inputAction$] = inputAction;
    this[keyboardAppearance$] = keyboardAppearance;
    this[textCapitalization$] = textCapitalization;
    this[autofillConfiguration$] = autofillConfiguration;
    this[enableIMEPersonalizedLearning$] = enableIMEPersonalizedLearning;
    this[enableDeltaModel$] = enableDeltaModel;
    if (!(inputType !== null)) dart.assertFailed(null, I[5], 472, 15, "inputType != null");
    if (!(obscureText !== null)) dart.assertFailed(null, I[5], 473, 15, "obscureText != null");
    this[smartDashesType$] = (t0 = smartDashesType, t0 == null ? obscureText ? text_input.SmartDashesType.disabled : text_input.SmartDashesType.enabled : t0);
    this[smartQuotesType$] = (t0$ = smartQuotesType, t0$ == null ? obscureText ? text_input.SmartQuotesType.disabled : text_input.SmartQuotesType.enabled : t0$);
    if (!(autocorrect !== null)) dart.assertFailed(null, I[5], 476, 15, "autocorrect != null");
    if (!(enableSuggestions !== null)) dart.assertFailed(null, I[5], 477, 15, "enableSuggestions != null");
    if (!(keyboardAppearance !== null)) dart.assertFailed(null, I[5], 478, 15, "keyboardAppearance != null");
    if (!(inputAction !== null)) dart.assertFailed(null, I[5], 479, 15, "inputAction != null");
    if (!(textCapitalization !== null)) dart.assertFailed(null, I[5], 480, 15, "textCapitalization != null");
    if (!(enableIMEPersonalizedLearning !== null)) dart.assertFailed(null, I[5], 481, 15, "enableIMEPersonalizedLearning != null");
    if (!(enableDeltaModel !== null)) dart.assertFailed(null, I[5], 482, 15, "enableDeltaModel != null");
    ;
  }).prototype = text_input.TextInputConfiguration.prototype;
  dart.addTypeTests(text_input.TextInputConfiguration);
  dart.addTypeCaches(text_input.TextInputConfiguration);
  dart.setMethodSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getMethods(text_input.TextInputConfiguration.__proto__),
    copyWith: dart.fnType(text_input.TextInputConfiguration, [], {actionLabel: dart.nullable(core.String), autocorrect: dart.nullable(core.bool), autofillConfiguration: dart.nullable(autofill.AutofillConfiguration), enableDeltaModel: dart.nullable(core.bool), enableIMEPersonalizedLearning: dart.nullable(core.bool), enableSuggestions: dart.nullable(core.bool), inputAction: dart.nullable(text_input.TextInputAction), inputType: dart.nullable(text_input.TextInputType), keyboardAppearance: dart.nullable(ui.Brightness), obscureText: dart.nullable(core.bool), readOnly: dart.nullable(core.bool), smartDashesType: dart.nullable(text_input.SmartDashesType), smartQuotesType: dart.nullable(text_input.SmartQuotesType), textCapitalization: dart.nullable(text_input.TextCapitalization)}, {}),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(text_input.TextInputConfiguration, I[4]);
  dart.setFieldSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getFields(text_input.TextInputConfiguration.__proto__),
    inputType: dart.finalFieldType(text_input.TextInputType),
    readOnly: dart.finalFieldType(core.bool),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    autofillConfiguration: dart.finalFieldType(autofill.AutofillConfiguration),
    smartDashesType: dart.finalFieldType(text_input.SmartDashesType),
    smartQuotesType: dart.finalFieldType(text_input.SmartQuotesType),
    enableSuggestions: dart.finalFieldType(core.bool),
    actionLabel: dart.finalFieldType(dart.nullable(core.String)),
    inputAction: dart.finalFieldType(text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    keyboardAppearance: dart.finalFieldType(ui.Brightness),
    enableIMEPersonalizedLearning: dart.finalFieldType(core.bool),
    enableDeltaModel: dart.finalFieldType(core.bool)
  }));
  text_input.FloatingCursorDragState = class FloatingCursorDragState extends core._Enum {
    toString() {
      return "FloatingCursorDragState." + this[_name];
    }
  };
  (text_input.FloatingCursorDragState.new = function(index, name) {
    text_input.FloatingCursorDragState.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.FloatingCursorDragState.prototype;
  dart.addTypeTests(text_input.FloatingCursorDragState);
  dart.addTypeCaches(text_input.FloatingCursorDragState);
  dart.setLibraryUri(text_input.FloatingCursorDragState, I[4]);
  dart.setStaticFieldSignature(text_input.FloatingCursorDragState, () => ['values', 'Start', 'Update', 'End']);
  dart.defineExtensionMethods(text_input.FloatingCursorDragState, ['toString']);
  text_input.FloatingCursorDragState.Start = C[55] || CT.C55;
  text_input.FloatingCursorDragState.Update = C[56] || CT.C56;
  text_input.FloatingCursorDragState.End = C[57] || CT.C57;
  text_input.FloatingCursorDragState.values = C[58] || CT.C58;
  var offset$ = dart.privateName(text_input, "RawFloatingCursorPoint.offset");
  var state$ = dart.privateName(text_input, "RawFloatingCursorPoint.state");
  text_input.RawFloatingCursorPoint = class RawFloatingCursorPoint extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
    static ['_#new#tearOff'](opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let state = opts && 'state' in opts ? opts.state : null;
      return new text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
    }
  };
  (text_input.RawFloatingCursorPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let state = opts && 'state' in opts ? opts.state : null;
    this[offset$] = offset;
    this[state$] = state;
    if (!(state !== null)) dart.assertFailed(null, I[5], 728, 15, "state != null");
    if (!(state !== text_input.FloatingCursorDragState.Update || offset != null)) dart.assertFailed(null, I[5], 729, 15, "state != FloatingCursorDragState.Update || offset != null");
    ;
  }).prototype = text_input.RawFloatingCursorPoint.prototype;
  dart.addTypeTests(text_input.RawFloatingCursorPoint);
  dart.addTypeCaches(text_input.RawFloatingCursorPoint);
  dart.setLibraryUri(text_input.RawFloatingCursorPoint, I[4]);
  dart.setFieldSignature(text_input.RawFloatingCursorPoint, () => ({
    __proto__: dart.getFields(text_input.RawFloatingCursorPoint.__proto__),
    offset: dart.finalFieldType(dart.nullable(ui.Offset)),
    state: dart.finalFieldType(text_input.FloatingCursorDragState)
  }));
  const text$ = TextEditingValue_text;
  const selection$0 = TextEditingValue_selection;
  const composing$0 = TextEditingValue_composing;
  text_input.TextEditingValue = class TextEditingValue extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get selection() {
      return this[selection$0];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$0];
    }
    set composing(value) {
      super.composing = value;
    }
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : "";
      let selection = opts && 'selection' in opts ? opts.selection : C[4] || CT.C4;
      let composing = opts && 'composing' in opts ? opts.composing : C[53] || CT.C53;
      return new text_input.TextEditingValue.new({text: text, selection: selection, composing: composing});
    }
    static fromJSON(encoded) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3;
      return new text_input.TextEditingValue.new({text: core.String.as(encoded[$_get]("text")), selection: new text_editing.TextSelection.new({baseOffset: (t1 = T.intN().as(encoded[$_get]("selectionBase")), t1 == null ? -1 : t1), extentOffset: (t1$ = T.intN().as(encoded[$_get]("selectionExtent")), t1$ == null ? -1 : t1$), affinity: (t1$0 = text_input._toTextAffinity(T.StringN().as(encoded[$_get]("selectionAffinity"))), t1$0 == null ? ui.TextAffinity.downstream : t1$0), isDirectional: (t1$1 = T.boolN().as(encoded[$_get]("selectionIsDirectional")), t1$1 == null ? false : t1$1)}), composing: new ui.TextRange.new({start: (t1$2 = T.intN().as(encoded[$_get]("composingBase")), t1$2 == null ? -1 : t1$2), end: (t1$3 = T.intN().as(encoded[$_get]("composingExtent")), t1$3 == null ? -1 : t1$3)})});
    }
    static ['_#fromJSON#tearOff'](encoded) {
      return text_input.TextEditingValue.fromJSON(encoded);
    }
    copyWith(opts) {
      let t1, t1$, t1$0;
      let text = opts && 'text' in opts ? opts.text : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_input.TextEditingValue.new({text: (t1 = text, t1 == null ? this.text : t1), selection: (t1$ = selection, t1$ == null ? this.selection : t1$), composing: (t1$0 = composing, t1$0 == null ? this.composing : t1$0)});
    }
    get isComposingRangeValid() {
      return this.composing.isValid && this.composing.isNormalized && this.composing.end <= this.text.length;
    }
    replaced(replacementRange, replacementString) {
      if (!replacementRange.isValid) {
        return this;
      }
      let newText = this.text[$replaceRange](replacementRange.start, replacementRange.end, replacementString);
      if (replacementRange.end - replacementRange.start === replacementString.length) {
        return this.copyWith({text: newText});
      }
      function adjustIndex(originalIndex) {
        let replacedLength = originalIndex <= replacementRange.start && originalIndex < replacementRange.end ? 0 : replacementString.length;
        let removedLength = originalIndex[$clamp](replacementRange.start, replacementRange.end) - replacementRange.start;
        return originalIndex + replacedLength - removedLength;
      }
      dart.fn(adjustIndex, T.intToint());
      return new text_input.TextEditingValue.new({text: newText, selection: new text_editing.TextSelection.new({baseOffset: adjustIndex(this.selection.baseOffset), extentOffset: adjustIndex(this.selection.extentOffset)}), composing: new ui.TextRange.new({start: adjustIndex(this.composing.start), end: adjustIndex(this.composing.end)})});
    }
    toJSON() {
      return new (T.IdentityMapOfString$dynamic()).from(["text", this.text, "selectionBase", this.selection.baseOffset, "selectionExtent", this.selection.extentOffset, "selectionAffinity", this.selection.affinity.toString(), "selectionIsDirectional", this.selection.isDirectional, "composingBase", this.composing.start, "composingExtent", this.composing.end]);
    }
    toString() {
      return object.objectRuntimeType(this, "TextEditingValue") + "(text: ┤" + this.text + "├, selection: " + dart.str(this.selection) + ", composing: " + dart.str(this.composing) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return text_input.TextEditingValue.is(other) && other.text === this.text && other.selection._equals(this.selection) && other.composing._equals(this.composing);
    }
    get hashCode() {
      return ui.hashValues(this.text[$hashCode], this.selection.hashCode, this.composing.hashCode);
    }
  };
  (text_input.TextEditingValue.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    let selection = opts && 'selection' in opts ? opts.selection : C[4] || CT.C4;
    let composing = opts && 'composing' in opts ? opts.composing : C[53] || CT.C53;
    this[text$] = text;
    this[selection$0] = selection;
    this[composing$0] = composing;
    if (!(text !== null)) dart.assertFailed(null, I[5], 751, 15, "text != null");
    if (!(selection !== null)) dart.assertFailed(null, I[5], 752, 15, "selection != null");
    if (!(composing !== null)) dart.assertFailed(null, I[5], 753, 15, "composing != null");
    ;
  }).prototype = text_input.TextEditingValue.prototype;
  dart.addTypeTests(text_input.TextEditingValue);
  dart.addTypeCaches(text_input.TextEditingValue);
  dart.setMethodSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getMethods(text_input.TextEditingValue.__proto__),
    copyWith: dart.fnType(text_input.TextEditingValue, [], {composing: dart.nullable(ui.TextRange), selection: dart.nullable(text_editing.TextSelection), text: dart.nullable(core.String)}, {}),
    replaced: dart.fnType(text_input.TextEditingValue, [ui.TextRange, core.String]),
    toJSON: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setStaticMethodSignature(text_input.TextEditingValue, () => ['fromJSON']);
  dart.setGetterSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getGetters(text_input.TextEditingValue.__proto__),
    isComposingRangeValid: core.bool
  }));
  dart.setLibraryUri(text_input.TextEditingValue, I[4]);
  dart.setFieldSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getFields(text_input.TextEditingValue.__proto__),
    text: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(text_editing.TextSelection),
    composing: dart.finalFieldType(ui.TextRange)
  }));
  dart.setStaticFieldSignature(text_input.TextEditingValue, () => ['empty']);
  dart.defineExtensionMethods(text_input.TextEditingValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextEditingValue, ['hashCode']);
  dart.defineLazy(text_input.TextEditingValue, {
    /*text_input.TextEditingValue.empty*/get empty() {
      return C[52] || CT.C52;
    }
  }, false);
  text_input.SelectionChangedCause = class SelectionChangedCause extends core._Enum {
    toString() {
      return "SelectionChangedCause." + this[_name];
    }
  };
  (text_input.SelectionChangedCause.new = function(index, name) {
    text_input.SelectionChangedCause.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_input.SelectionChangedCause.prototype;
  dart.addTypeTests(text_input.SelectionChangedCause);
  dart.addTypeCaches(text_input.SelectionChangedCause);
  dart.setLibraryUri(text_input.SelectionChangedCause, I[4]);
  dart.setStaticFieldSignature(text_input.SelectionChangedCause, () => ['values', 'tap', 'doubleTap', 'longPress', 'forcePress', 'keyboard', 'toolbar', 'drag']);
  dart.defineExtensionMethods(text_input.SelectionChangedCause, ['toString']);
  text_input.SelectionChangedCause.tap = C[59] || CT.C59;
  text_input.SelectionChangedCause.doubleTap = C[60] || CT.C60;
  text_input.SelectionChangedCause.longPress = C[61] || CT.C61;
  text_input.SelectionChangedCause.forcePress = C[62] || CT.C62;
  text_input.SelectionChangedCause.keyboard = C[63] || CT.C63;
  text_input.SelectionChangedCause.toolbar = C[64] || CT.C64;
  text_input.SelectionChangedCause.drag = C[65] || CT.C65;
  text_input.SelectionChangedCause.values = C[66] || CT.C66;
  text_input.TextSelectionDelegate = class TextSelectionDelegate extends core.Object {};
  text_input.TextSelectionDelegate[dart.mixinOn] = Object => class TextSelectionDelegate extends Object {
    set textEditingValue(value) {
    }
    get cutEnabled() {
      return true;
    }
    get copyEnabled() {
      return true;
    }
    get pasteEnabled() {
      return true;
    }
    get selectAllEnabled() {
      return true;
    }
  };
  (text_input.TextSelectionDelegate[dart.mixinNew] = function() {
  }).prototype = text_input.TextSelectionDelegate.prototype;
  dart.addTypeTests(text_input.TextSelectionDelegate);
  dart.addTypeCaches(text_input.TextSelectionDelegate);
  text_input.TextSelectionDelegate[dart.implements] = () => [core.Object];
  dart.setGetterSignature(text_input.TextSelectionDelegate, () => ({
    __proto__: dart.getGetters(text_input.TextSelectionDelegate.__proto__),
    cutEnabled: core.bool,
    copyEnabled: core.bool,
    pasteEnabled: core.bool,
    selectAllEnabled: core.bool
  }));
  dart.setSetterSignature(text_input.TextSelectionDelegate, () => ({
    __proto__: dart.getSetters(text_input.TextSelectionDelegate.__proto__),
    textEditingValue: text_input.TextEditingValue
  }));
  dart.setLibraryUri(text_input.TextSelectionDelegate, I[4]);
  text_input.TextInputClient = class TextInputClient extends core.Object {};
  (text_input.TextInputClient.new = function() {
    ;
  }).prototype = text_input.TextInputClient.prototype;
  dart.addTypeTests(text_input.TextInputClient);
  dart.addTypeCaches(text_input.TextInputClient);
  dart.setLibraryUri(text_input.TextInputClient, I[4]);
  text_input.DeltaTextInputClient = class DeltaTextInputClient extends text_input.TextInputClient {};
  (text_input.DeltaTextInputClient.new = function() {
    text_input.DeltaTextInputClient.__proto__.new.call(this);
    ;
  }).prototype = text_input.DeltaTextInputClient.prototype;
  dart.addTypeTests(text_input.DeltaTextInputClient);
  dart.addTypeCaches(text_input.DeltaTextInputClient);
  dart.setLibraryUri(text_input.DeltaTextInputClient, I[4]);
  var _cachedSize = dart.privateName(text_input, "_cachedSize");
  var _cachedTransform = dart.privateName(text_input, "_cachedTransform");
  var _cachedRect = dart.privateName(text_input, "_cachedRect");
  var _cachedCaretRect = dart.privateName(text_input, "_cachedCaretRect");
  var _client$ = dart.privateName(text_input, "_client");
  var _id = dart.privateName(text_input, "_id");
  var _currentConnection = dart.privateName(text_input, "_currentConnection");
  var _show = dart.privateName(text_input, "_show");
  var _requestAutofill = dart.privateName(text_input, "_requestAutofill");
  var _updateConfig = dart.privateName(text_input, "_updateConfig");
  var _setEditingState = dart.privateName(text_input, "_setEditingState");
  var _setEditableSizeAndTransform = dart.privateName(text_input, "_setEditableSizeAndTransform");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var _setComposingTextRect = dart.privateName(text_input, "_setComposingTextRect");
  var _setCaretRect = dart.privateName(text_input, "_setCaretRect");
  var _setStyle = dart.privateName(text_input, "_setStyle");
  var _clearClient = dart.privateName(text_input, "_clearClient");
  text_input.TextInputConnection = class TextInputConnection extends core.Object {
    static ['_#_#tearOff'](_client) {
      return new text_input.TextInputConnection.__(_client);
    }
    static debugResetId(opts) {
      let to = opts && 'to' in opts ? opts.to : 1;
      if (!(to !== null)) dart.assertFailed(null, I[5], 1164, 12, "to != null");
      if (!dart.fn(() => {
        text_input.TextInputConnection._nextId = to;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[5], 1165, 12, "() {\n      _nextId = to;\n      return true;\n    }()");
    }
    get attached() {
      return dart.equals(text_input.TextInput._instance[_currentConnection], this);
    }
    show() {
      if (!this.attached) dart.assertFailed(null, I[5], 1178, 12, "attached");
      text_input.TextInput._instance[_show]();
    }
    requestAutofill() {
      if (!this.attached) dart.assertFailed(null, I[5], 1191, 12, "attached");
      text_input.TextInput._instance[_requestAutofill]();
    }
    updateConfig(configuration) {
      if (!this.attached) dart.assertFailed(null, I[5], 1198, 12, "attached");
      text_input.TextInput._instance[_updateConfig](configuration);
    }
    setEditingState(value) {
      if (!this.attached) dart.assertFailed(null, I[5], 1205, 12, "attached");
      text_input.TextInput._instance[_setEditingState](value);
    }
    setEditableSizeAndTransform(editableBoxSize, transform) {
      if (!editableBoxSize._equals(this[_cachedSize]) || !transform._equals(this[_cachedTransform])) {
        this[_cachedSize] = editableBoxSize;
        this[_cachedTransform] = transform;
        text_input.TextInput._instance[_setEditableSizeAndTransform](new (T.IdentityMapOfString$dynamic()).from(["width", editableBoxSize.width, "height", editableBoxSize.height, "transform", transform.storage]));
      }
    }
    setComposingRect(rect) {
      if (!(rect !== null)) dart.assertFailed(null, I[5], 1241, 12, "rect != null");
      if (rect._equals(this[_cachedRect])) return;
      this[_cachedRect] = rect;
      let validRect = rect.isFinite ? rect : ui.Offset.zero['&'](C[67] || CT.C67);
      text_input.TextInput._instance[_setComposingTextRect](new (T.IdentityMapOfString$dynamic()).from(["width", validRect.width, "height", validRect.height, "x", validRect.left, "y", validRect.top]));
    }
    setCaretRect(rect) {
      if (!(rect !== null)) dart.assertFailed(null, I[5], 1259, 12, "rect != null");
      if (rect._equals(this[_cachedCaretRect])) return;
      this[_cachedCaretRect] = rect;
      let validRect = rect.isFinite ? rect : ui.Offset.zero['&'](C[67] || CT.C67);
      text_input.TextInput._instance[_setCaretRect](new (T.IdentityMapOfString$dynamic()).from(["width", validRect.width, "height", validRect.height, "x", validRect.left, "y", validRect.top]));
    }
    setStyle(opts) {
      let t1;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      if (!this.attached) dart.assertFailed(null, I[5], 1286, 12, "attached");
      text_input.TextInput._instance[_setStyle](new (T.IdentityMapOfString$dynamic()).from(["fontFamily", fontFamily, "fontSize", fontSize, "fontWeightIndex", (t1 = fontWeight, t1 == null ? null : t1.index), "textAlignIndex", textAlign.index, "textDirectionIndex", textDirection.index]));
    }
    close() {
      if (this.attached) {
        text_input.TextInput._instance[_clearClient]();
      }
      if (!!this.attached) dart.assertFailed(null, I[5], 1307, 12, "!attached");
    }
    connectionClosedReceived() {
      text_input.TextInput._instance[_currentConnection] = null;
      if (!!this.attached) dart.assertFailed(null, I[5], 1315, 12, "!attached");
    }
  };
  (text_input.TextInputConnection.__ = function(_client) {
    let t1;
    this[_cachedSize] = null;
    this[_cachedTransform] = null;
    this[_cachedRect] = null;
    this[_cachedCaretRect] = null;
    this[_client$] = _client;
    if (!(_client !== null)) dart.assertFailed(null, I[5], 1147, 16, "_client != null");
    this[_id] = (t1 = text_input.TextInputConnection._nextId, text_input.TextInputConnection._nextId = dart.notNull(t1) + 1, t1);
    ;
  }).prototype = text_input.TextInputConnection.prototype;
  dart.addTypeTests(text_input.TextInputConnection);
  dart.addTypeCaches(text_input.TextInputConnection);
  dart.setMethodSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getMethods(text_input.TextInputConnection.__proto__),
    show: dart.fnType(dart.void, []),
    requestAutofill: dart.fnType(dart.void, []),
    updateConfig: dart.fnType(dart.void, [text_input.TextInputConfiguration]),
    setEditingState: dart.fnType(dart.void, [text_input.TextEditingValue]),
    setEditableSizeAndTransform: dart.fnType(dart.void, [ui.Size, vector_math_64.Matrix4]),
    setComposingRect: dart.fnType(dart.void, [ui.Rect]),
    setCaretRect: dart.fnType(dart.void, [ui.Rect]),
    setStyle: dart.fnType(dart.void, [], {}, {fontFamily: dart.nullable(core.String), fontSize: dart.nullable(core.double), fontWeight: dart.nullable(ui.FontWeight), textAlign: ui.TextAlign, textDirection: ui.TextDirection}),
    close: dart.fnType(dart.void, []),
    connectionClosedReceived: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(text_input.TextInputConnection, () => ['debugResetId']);
  dart.setGetterSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getGetters(text_input.TextInputConnection.__proto__),
    attached: core.bool
  }));
  dart.setLibraryUri(text_input.TextInputConnection, I[4]);
  dart.setFieldSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getFields(text_input.TextInputConnection.__proto__),
    [_cachedSize]: dart.fieldType(dart.nullable(ui.Size)),
    [_cachedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_cachedRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_cachedCaretRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_id]: dart.finalFieldType(core.int),
    [_client$]: dart.finalFieldType(text_input.TextInputClient)
  }));
  dart.setStaticFieldSignature(text_input.TextInputConnection, () => ['_nextId']);
  dart.defineLazy(text_input.TextInputConnection, {
    /*text_input.TextInputConnection._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  }, false);
  var __TextInput__channel = dart.privateName(text_input, "_#TextInput#_channel");
  var __TextInput__currentConfiguration = dart.privateName(text_input, "_#TextInput#_currentConfiguration");
  var _hidePending = dart.privateName(text_input, "_hidePending");
  var _channel = dart.privateName(text_input, "_channel");
  var _handleTextInputInvocation = dart.privateName(text_input, "_handleTextInputInvocation");
  var _attach = dart.privateName(text_input, "_attach");
  var _currentConfiguration = dart.privateName(text_input, "_currentConfiguration");
  var _scheduleHide = dart.privateName(text_input, "_scheduleHide");
  text_input.TextInput = class TextInput extends core.Object {
    static ['_#_#tearOff']() {
      return new text_input.TextInput.__();
    }
    static setChannel(newChannel) {
      if (!dart.fn(() => {
        let t1;
        text_input.TextInput._instance[_channel] = (t1 = newChannel, (() => {
          t1.setMethodCallHandler(dart.bind(text_input.TextInput._instance, _handleTextInputInvocation));
          return t1;
        })());
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[5], 1440, 12, "() {\n      _instance._channel = newChannel..setMethodCallHandler(_instance._handleTextInputInvocation);\n      return true;\n    }()");
    }
    static attach(client, configuration) {
      if (!(client !== null)) dart.assertFailed(null, I[5], 1485, 12, "client != null");
      if (!(configuration !== null)) dart.assertFailed(null, I[5], 1486, 12, "configuration != null");
      let connection = new text_input.TextInputConnection.__(client);
      text_input.TextInput._instance[_attach](connection, configuration);
      return connection;
    }
    [_attach](connection, configuration) {
      if (!(connection !== null)) dart.assertFailed(null, I[5], 1496, 12, "connection != null");
      if (!(connection[_client$] !== null)) dart.assertFailed(null, I[5], 1497, 12, "connection._client != null");
      if (!(configuration !== null)) dart.assertFailed(null, I[5], 1498, 12, "configuration != null");
      if (!text_input.TextInput._debugEnsureInputActionWorksOnPlatform(configuration.inputAction)) dart.assertFailed(null, I[5], 1499, 12, "_debugEnsureInputActionWorksOnPlatform(configuration.inputAction)");
      this[_channel].invokeMethod(dart.void, "TextInput.setClient", [connection[_id], configuration.toJson()]);
      this[_currentConnection] = connection;
      this[_currentConfiguration] = configuration;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction) {
      if (!dart.fn(() => {
        if (true) {
          return true;
        }
        if (io.Platform.isIOS) {
          if (!text_input.TextInput._iOSSupportedInputActions[$contains](inputAction)) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on iOS.", I[5], 1516, 11, "_iOSSupportedInputActions.contains(inputAction)");
        } else if (io.Platform.isAndroid) {
          if (!text_input.TextInput._androidSupportedInputActions[$contains](inputAction)) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on Android.", I[5], 1521, 11, "_androidSupportedInputActions.contains(inputAction)");
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[5], 1509, 12, "() {\n      if (kIsWeb) {\n        // TODO(flutterweb): what makes sense here?\n        return true;\n      }\n      if (Platform.isIOS) {\n        assert(\n          _iOSSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on iOS.',\n        );\n      } else if (Platform.isAndroid) {\n        assert(\n          _androidSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on Android.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    get [_channel]() {
      let t1;
      t1 = this[__TextInput__channel];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_channel")) : t1;
    }
    set [_channel](t1) {
      this[__TextInput__channel] = t1;
    }
    get [_currentConfiguration]() {
      let t2;
      t2 = this[__TextInput__currentConfiguration];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_currentConfiguration")) : t2;
    }
    set [_currentConfiguration](t2) {
      this[__TextInput__currentConfiguration] = t2;
    }
    [_handleTextInputInvocation](methodCall) {
      return async.async(dart.dynamic, (function* _handleTextInputInvocation() {
        let t3;
        if (this[_currentConnection] == null) return;
        let method = methodCall.method;
        if (method === "TextInputClient.requestExistingInputState") {
          if (!(dart.nullCheck(this[_currentConnection])[_client$] !== null)) dart.assertFailed(null, I[5], 1543, 14, "_currentConnection!._client != null");
          this[_attach](dart.nullCheck(this[_currentConnection]), this[_currentConfiguration]);
          let editingValue = dart.nullCheck(this[_currentConnection])[_client$].currentTextEditingValue;
          if (editingValue != null) {
            this[_setEditingState](editingValue);
          }
          return;
        }
        let args = core.List.as(methodCall.arguments);
        if (method === "TextInputClient.updateEditingStateWithTag") {
          if (!(dart.nullCheck(this[_currentConnection])[_client$] !== null)) dart.assertFailed(null, I[5], 1557, 14, "_currentConnection!._client != null");
          let client = dart.nullCheck(this[_currentConnection])[_client$];
          let scope = client.currentAutofillScope;
          let editingValue = T.MapOfString$dynamic().as(args[$_get](1));
          for (let tag of editingValue[$keys]) {
            let textEditingValue = text_input.TextEditingValue.fromJSON(T.MapOfString$dynamic().as(editingValue[$_get](tag)));
            let client = (t3 = scope, t3 == null ? null : t3.getAutofillClient(tag));
            if (client != null && client.textInputConfiguration.autofillConfiguration.enabled) {
              client.autofill(textEditingValue);
            }
          }
          return;
        }
        let client = core.int.as(args[$_get](0));
        if (client !== dart.nullCheck(this[_currentConnection])[_id]) {
          let debugAllowAnyway = false;
          if (!dart.fn(() => {
            if (client === -1) debugAllowAnyway = true;
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[5], 1579, 14, "() {\n        // In debug builds we allow \"-1\" as a magical client ID that ignores\n        // this verification step so that tests can always get through, even\n        // when they are not mocking the engine side of text input.\n        if (client == -1)\n          debugAllowAnyway = true;\n        return true;\n      }()");
          if (!debugAllowAnyway) return;
        }
        switch (method) {
          case "TextInputClient.updateEditingState":
          {
            dart.nullCheck(this[_currentConnection])[_client$].updateEditingValue(text_input.TextEditingValue.fromJSON(T.MapOfString$dynamic().as(args[$_get](1))));
            break;
          }
          case "TextInputClient.updateEditingStateWithDeltas":
          {
            if (!text_input.DeltaTextInputClient.is(dart.nullCheck(this[_currentConnection])[_client$])) dart.assertFailed("You must be using a DeltaTextInputClient if TextInputConfiguration.enableDeltaModel is set to true", I[5], 1596, 16, "_currentConnection!._client is DeltaTextInputClient");
            let deltas = T.JSArrayOfTextEditingDelta().of([]);
            let encoded = T.MapOfString$dynamic().as(args[$_get](1));
            for (let encodedDelta of core.Iterable.as(encoded[$_get]("deltas"))) {
              let delta = text_editing_delta.TextEditingDelta.fromJSON(T.MapOfString$dynamic().as(encodedDelta));
              deltas[$add](delta);
            }
            text_input.DeltaTextInputClient.as(dart.nullCheck(this[_currentConnection])[_client$]).updateEditingValueWithDeltas(deltas);
            break;
          }
          case "TextInputClient.performAction":
          {
            dart.nullCheck(this[_currentConnection])[_client$].performAction(text_input._toTextInputAction(core.String.as(args[$_get](1))));
            break;
          }
          case "TextInputClient.performPrivateCommand":
          {
            let firstArg = T.MapOfString$dynamic().as(args[$_get](1));
            dart.nullCheck(this[_currentConnection])[_client$].performPrivateCommand(core.String.as(firstArg[$_get]("action")), T.MapOfString$dynamic().as(firstArg[$_get]("data")));
            break;
          }
          case "TextInputClient.updateFloatingCursor":
          {
            dart.nullCheck(this[_currentConnection])[_client$].updateFloatingCursor(text_input._toTextPoint(text_input._toTextCursorAction(core.String.as(args[$_get](1))), T.MapOfString$dynamic().as(args[$_get](2))));
            break;
          }
          case "TextInputClient.onConnectionClosed":
          {
            dart.nullCheck(this[_currentConnection])[_client$].connectionClosed();
            break;
          }
          case "TextInputClient.showAutocorrectionPromptRect":
          {
            dart.nullCheck(this[_currentConnection])[_client$].showAutocorrectionPromptRect(core.int.as(args[$_get](1)), core.int.as(args[$_get](2)));
            break;
          }
          default:
          {
            dart.throw(new message_codec.MissingPluginException.new());
          }
        }
      }).bind(this));
    }
    [_scheduleHide]() {
      if (this[_hidePending]) return;
      this[_hidePending] = true;
      async.scheduleMicrotask(dart.fn(() => {
        this[_hidePending] = false;
        if (this[_currentConnection] == null) this[_channel].invokeMethod(dart.void, "TextInput.hide");
      }, T.VoidTovoid()));
    }
    [_clearClient]() {
      this[_channel].invokeMethod(dart.void, "TextInput.clearClient");
      this[_currentConnection] = null;
      this[_scheduleHide]();
    }
    [_updateConfig](configuration) {
      if (!(configuration !== null)) dart.assertFailed(null, I[5], 1659, 12, "configuration != null");
      this[_channel].invokeMethod(dart.void, "TextInput.updateConfig", configuration.toJson());
    }
    [_setEditingState](value) {
      if (!(value !== null)) dart.assertFailed(null, I[5], 1667, 12, "value != null");
      this[_channel].invokeMethod(dart.void, "TextInput.setEditingState", value.toJSON());
    }
    [_show]() {
      this[_channel].invokeMethod(dart.void, "TextInput.show");
    }
    [_requestAutofill]() {
      this[_channel].invokeMethod(dart.void, "TextInput.requestAutofill");
    }
    [_setEditableSizeAndTransform](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setEditableSizeAndTransform", args);
    }
    [_setComposingTextRect](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setMarkedTextRect", args);
    }
    [_setCaretRect](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setCaretRect", args);
    }
    [_setStyle](args) {
      this[_channel].invokeMethod(dart.void, "TextInput.setStyle", args);
    }
    static finishAutofillContext(opts) {
      let shouldSave = opts && 'shouldSave' in opts ? opts.shouldSave : true;
      if (!(shouldSave !== null)) dart.assertFailed(null, I[5], 1759, 12, "shouldSave != null");
      text_input.TextInput._instance[_channel].invokeMethod(dart.void, "TextInput.finishAutofillContext", shouldSave);
    }
  };
  (text_input.TextInput.__ = function() {
    this[__TextInput__channel] = null;
    this[_currentConnection] = null;
    this[__TextInput__currentConfiguration] = null;
    this[_hidePending] = false;
    this[_channel] = system_channels.SystemChannels.textInput;
    this[_channel].setMethodCallHandler(dart.bind(this, _handleTextInputInvocation));
  }).prototype = text_input.TextInput.prototype;
  dart.addTypeTests(text_input.TextInput);
  dart.addTypeCaches(text_input.TextInput);
  dart.setMethodSignature(text_input.TextInput, () => ({
    __proto__: dart.getMethods(text_input.TextInput.__proto__),
    [_attach]: dart.fnType(dart.void, [text_input.TextInputConnection, text_input.TextInputConfiguration]),
    [_handleTextInputInvocation]: dart.fnType(async.Future, [message_codec.MethodCall]),
    [_scheduleHide]: dart.fnType(dart.void, []),
    [_clearClient]: dart.fnType(dart.void, []),
    [_updateConfig]: dart.fnType(dart.void, [text_input.TextInputConfiguration]),
    [_setEditingState]: dart.fnType(dart.void, [text_input.TextEditingValue]),
    [_show]: dart.fnType(dart.void, []),
    [_requestAutofill]: dart.fnType(dart.void, []),
    [_setEditableSizeAndTransform]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setComposingTextRect]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setCaretRect]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)]),
    [_setStyle]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setStaticMethodSignature(text_input.TextInput, () => ['setChannel', 'attach', '_debugEnsureInputActionWorksOnPlatform', 'finishAutofillContext']);
  dart.setGetterSignature(text_input.TextInput, () => ({
    __proto__: dart.getGetters(text_input.TextInput.__proto__),
    [_channel]: platform_channel.MethodChannel,
    [_currentConfiguration]: text_input.TextInputConfiguration
  }));
  dart.setSetterSignature(text_input.TextInput, () => ({
    __proto__: dart.getSetters(text_input.TextInput.__proto__),
    [_channel]: platform_channel.MethodChannel,
    [_currentConfiguration]: text_input.TextInputConfiguration
  }));
  dart.setLibraryUri(text_input.TextInput, I[4]);
  dart.setFieldSignature(text_input.TextInput, () => ({
    __proto__: dart.getFields(text_input.TextInput.__proto__),
    [__TextInput__channel]: dart.fieldType(dart.nullable(platform_channel.MethodChannel)),
    [_currentConnection]: dart.fieldType(dart.nullable(text_input.TextInputConnection)),
    [__TextInput__currentConfiguration]: dart.fieldType(dart.nullable(text_input.TextInputConfiguration)),
    [_hidePending]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(text_input.TextInput, () => ['_instance', '_androidSupportedInputActions', '_iOSSupportedInputActions']);
  dart.defineLazy(text_input.TextInput, {
    /*text_input.TextInput._instance*/get _instance() {
      return new text_input.TextInput.__();
    },
    /*text_input.TextInput._androidSupportedInputActions*/get _androidSupportedInputActions() {
      return C[68] || CT.C68;
    },
    /*text_input.TextInput._iOSSupportedInputActions*/get _iOSSupportedInputActions() {
      return C[69] || CT.C69;
    }
  }, false);
  text_input._toTextAffinity = function _toTextAffinity$(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
      {
        return ui.TextAffinity.downstream;
      }
      case "TextAffinity.upstream":
      {
        return ui.TextAffinity.upstream;
      }
    }
    return null;
  };
  text_input._toTextInputAction = function _toTextInputAction(action) {
    switch (action) {
      case "TextInputAction.none":
      {
        return text_input.TextInputAction.none;
      }
      case "TextInputAction.unspecified":
      {
        return text_input.TextInputAction.unspecified;
      }
      case "TextInputAction.go":
      {
        return text_input.TextInputAction.go;
      }
      case "TextInputAction.search":
      {
        return text_input.TextInputAction.search;
      }
      case "TextInputAction.send":
      {
        return text_input.TextInputAction.send;
      }
      case "TextInputAction.next":
      {
        return text_input.TextInputAction.next;
      }
      case "TextInputAction.previous":
      {
        return text_input.TextInputAction.previous;
      }
      case "TextInputAction.continue_action":
      {
        return text_input.TextInputAction.continueAction;
      }
      case "TextInputAction.join":
      {
        return text_input.TextInputAction.join;
      }
      case "TextInputAction.route":
      {
        return text_input.TextInputAction.route;
      }
      case "TextInputAction.emergencyCall":
      {
        return text_input.TextInputAction.emergencyCall;
      }
      case "TextInputAction.done":
      {
        return text_input.TextInputAction.done;
      }
      case "TextInputAction.newline":
      {
        return text_input.TextInputAction.newline;
      }
    }
    dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unknown text input action: " + action)])));
  };
  text_input._toTextCursorAction = function _toTextCursorAction(state) {
    switch (state) {
      case "FloatingCursorDragState.start":
      {
        return text_input.FloatingCursorDragState.Start;
      }
      case "FloatingCursorDragState.update":
      {
        return text_input.FloatingCursorDragState.Update;
      }
      case "FloatingCursorDragState.end":
      {
        return text_input.FloatingCursorDragState.End;
      }
    }
    dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unknown text cursor action: " + state)])));
  };
  text_input._toTextPoint = function _toTextPoint(state, encoded) {
    if (!(state !== null)) dart.assertFailed("You must provide a state to set a new editing point.", I[5], 1364, 10, "state != null");
    if (!(encoded[$_get]("X") != null)) dart.assertFailed("You must provide a value for the horizontal location of the floating cursor.", I[5], 1365, 10, "encoded['X'] != null");
    if (!(encoded[$_get]("Y") != null)) dart.assertFailed("You must provide a value for the vertical location of the floating cursor.", I[5], 1366, 10, "encoded['Y'] != null");
    let offset = state === text_input.FloatingCursorDragState.Update ? new ui.Offset.new(core.double.as(encoded[$_get]("X")), core.double.as(encoded[$_get]("Y"))) : ui.Offset.zero;
    return new text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
  };
  autofill.AutofillHints = class AutofillHints extends core.Object {
    static ['_#_#tearOff']() {
      return new autofill.AutofillHints.__();
    }
  };
  (autofill.AutofillHints.__ = function() {
    ;
  }).prototype = autofill.AutofillHints.prototype;
  dart.addTypeTests(autofill.AutofillHints);
  dart.addTypeCaches(autofill.AutofillHints);
  dart.setLibraryUri(autofill.AutofillHints, I[6]);
  dart.setStaticFieldSignature(autofill.AutofillHints, () => ['addressCity', 'addressCityAndState', 'addressState', 'birthday', 'birthdayDay', 'birthdayMonth', 'birthdayYear', 'countryCode', 'countryName', 'creditCardExpirationDate', 'creditCardExpirationDay', 'creditCardExpirationMonth', 'creditCardExpirationYear', 'creditCardFamilyName', 'creditCardGivenName', 'creditCardMiddleName', 'creditCardName', 'creditCardNumber', 'creditCardSecurityCode', 'creditCardType', 'email', 'familyName', 'fullStreetAddress', 'gender', 'givenName', 'impp', 'jobTitle', 'language', 'location', 'middleInitial', 'middleName', 'name_', 'namePrefix', 'nameSuffix', 'newPassword', 'newUsername', 'nickname', 'oneTimeCode', 'organizationName', 'password', 'photo', 'postalAddress', 'postalAddressExtended', 'postalAddressExtendedPostalCode', 'postalCode', 'streetAddressLevel1', 'streetAddressLevel2', 'streetAddressLevel3', 'streetAddressLevel4', 'streetAddressLine1', 'streetAddressLine2', 'streetAddressLine3', 'sublocality', 'telephoneNumber', 'telephoneNumberAreaCode', 'telephoneNumberCountryCode', 'telephoneNumberDevice', 'telephoneNumberExtension', 'telephoneNumberLocal', 'telephoneNumberLocalPrefix', 'telephoneNumberLocalSuffix', 'telephoneNumberNational', 'transactionAmount', 'transactionCurrency', 'url', 'username']);
  dart.defineLazy(autofill.AutofillHints, {
    /*autofill.AutofillHints.addressCity*/get addressCity() {
      return "addressCity";
    },
    /*autofill.AutofillHints.addressCityAndState*/get addressCityAndState() {
      return "addressCityAndState";
    },
    /*autofill.AutofillHints.addressState*/get addressState() {
      return "addressState";
    },
    /*autofill.AutofillHints.birthday*/get birthday() {
      return "birthday";
    },
    /*autofill.AutofillHints.birthdayDay*/get birthdayDay() {
      return "birthdayDay";
    },
    /*autofill.AutofillHints.birthdayMonth*/get birthdayMonth() {
      return "birthdayMonth";
    },
    /*autofill.AutofillHints.birthdayYear*/get birthdayYear() {
      return "birthdayYear";
    },
    /*autofill.AutofillHints.countryCode*/get countryCode() {
      return "countryCode";
    },
    /*autofill.AutofillHints.countryName*/get countryName() {
      return "countryName";
    },
    /*autofill.AutofillHints.creditCardExpirationDate*/get creditCardExpirationDate() {
      return "creditCardExpirationDate";
    },
    /*autofill.AutofillHints.creditCardExpirationDay*/get creditCardExpirationDay() {
      return "creditCardExpirationDay";
    },
    /*autofill.AutofillHints.creditCardExpirationMonth*/get creditCardExpirationMonth() {
      return "creditCardExpirationMonth";
    },
    /*autofill.AutofillHints.creditCardExpirationYear*/get creditCardExpirationYear() {
      return "creditCardExpirationYear";
    },
    /*autofill.AutofillHints.creditCardFamilyName*/get creditCardFamilyName() {
      return "creditCardFamilyName";
    },
    /*autofill.AutofillHints.creditCardGivenName*/get creditCardGivenName() {
      return "creditCardGivenName";
    },
    /*autofill.AutofillHints.creditCardMiddleName*/get creditCardMiddleName() {
      return "creditCardMiddleName";
    },
    /*autofill.AutofillHints.creditCardName*/get creditCardName() {
      return "creditCardName";
    },
    /*autofill.AutofillHints.creditCardNumber*/get creditCardNumber() {
      return "creditCardNumber";
    },
    /*autofill.AutofillHints.creditCardSecurityCode*/get creditCardSecurityCode() {
      return "creditCardSecurityCode";
    },
    /*autofill.AutofillHints.creditCardType*/get creditCardType() {
      return "creditCardType";
    },
    /*autofill.AutofillHints.email*/get email() {
      return "email";
    },
    /*autofill.AutofillHints.familyName*/get familyName() {
      return "familyName";
    },
    /*autofill.AutofillHints.fullStreetAddress*/get fullStreetAddress() {
      return "fullStreetAddress";
    },
    /*autofill.AutofillHints.gender*/get gender() {
      return "gender";
    },
    /*autofill.AutofillHints.givenName*/get givenName() {
      return "givenName";
    },
    /*autofill.AutofillHints.impp*/get impp() {
      return "impp";
    },
    /*autofill.AutofillHints.jobTitle*/get jobTitle() {
      return "jobTitle";
    },
    /*autofill.AutofillHints.language*/get language() {
      return "language";
    },
    /*autofill.AutofillHints.location*/get location() {
      return "location";
    },
    /*autofill.AutofillHints.middleInitial*/get middleInitial() {
      return "middleInitial";
    },
    /*autofill.AutofillHints.middleName*/get middleName() {
      return "middleName";
    },
    /*autofill.AutofillHints.name_*/get name_() {
      return "name";
    },
    /*autofill.AutofillHints.namePrefix*/get namePrefix() {
      return "namePrefix";
    },
    /*autofill.AutofillHints.nameSuffix*/get nameSuffix() {
      return "nameSuffix";
    },
    /*autofill.AutofillHints.newPassword*/get newPassword() {
      return "newPassword";
    },
    /*autofill.AutofillHints.newUsername*/get newUsername() {
      return "newUsername";
    },
    /*autofill.AutofillHints.nickname*/get nickname() {
      return "nickname";
    },
    /*autofill.AutofillHints.oneTimeCode*/get oneTimeCode() {
      return "oneTimeCode";
    },
    /*autofill.AutofillHints.organizationName*/get organizationName() {
      return "organizationName";
    },
    /*autofill.AutofillHints.password*/get password() {
      return "password";
    },
    /*autofill.AutofillHints.photo*/get photo() {
      return "photo";
    },
    /*autofill.AutofillHints.postalAddress*/get postalAddress() {
      return "postalAddress";
    },
    /*autofill.AutofillHints.postalAddressExtended*/get postalAddressExtended() {
      return "postalAddressExtended";
    },
    /*autofill.AutofillHints.postalAddressExtendedPostalCode*/get postalAddressExtendedPostalCode() {
      return "postalAddressExtendedPostalCode";
    },
    /*autofill.AutofillHints.postalCode*/get postalCode() {
      return "postalCode";
    },
    /*autofill.AutofillHints.streetAddressLevel1*/get streetAddressLevel1() {
      return "streetAddressLevel1";
    },
    /*autofill.AutofillHints.streetAddressLevel2*/get streetAddressLevel2() {
      return "streetAddressLevel2";
    },
    /*autofill.AutofillHints.streetAddressLevel3*/get streetAddressLevel3() {
      return "streetAddressLevel3";
    },
    /*autofill.AutofillHints.streetAddressLevel4*/get streetAddressLevel4() {
      return "streetAddressLevel4";
    },
    /*autofill.AutofillHints.streetAddressLine1*/get streetAddressLine1() {
      return "streetAddressLine1";
    },
    /*autofill.AutofillHints.streetAddressLine2*/get streetAddressLine2() {
      return "streetAddressLine2";
    },
    /*autofill.AutofillHints.streetAddressLine3*/get streetAddressLine3() {
      return "streetAddressLine3";
    },
    /*autofill.AutofillHints.sublocality*/get sublocality() {
      return "sublocality";
    },
    /*autofill.AutofillHints.telephoneNumber*/get telephoneNumber() {
      return "telephoneNumber";
    },
    /*autofill.AutofillHints.telephoneNumberAreaCode*/get telephoneNumberAreaCode() {
      return "telephoneNumberAreaCode";
    },
    /*autofill.AutofillHints.telephoneNumberCountryCode*/get telephoneNumberCountryCode() {
      return "telephoneNumberCountryCode";
    },
    /*autofill.AutofillHints.telephoneNumberDevice*/get telephoneNumberDevice() {
      return "telephoneNumberDevice";
    },
    /*autofill.AutofillHints.telephoneNumberExtension*/get telephoneNumberExtension() {
      return "telephoneNumberExtension";
    },
    /*autofill.AutofillHints.telephoneNumberLocal*/get telephoneNumberLocal() {
      return "telephoneNumberLocal";
    },
    /*autofill.AutofillHints.telephoneNumberLocalPrefix*/get telephoneNumberLocalPrefix() {
      return "telephoneNumberLocalPrefix";
    },
    /*autofill.AutofillHints.telephoneNumberLocalSuffix*/get telephoneNumberLocalSuffix() {
      return "telephoneNumberLocalSuffix";
    },
    /*autofill.AutofillHints.telephoneNumberNational*/get telephoneNumberNational() {
      return "telephoneNumberNational";
    },
    /*autofill.AutofillHints.transactionAmount*/get transactionAmount() {
      return "transactionAmount";
    },
    /*autofill.AutofillHints.transactionCurrency*/get transactionCurrency() {
      return "transactionCurrency";
    },
    /*autofill.AutofillHints.url*/get url() {
      return "url";
    },
    /*autofill.AutofillHints.username*/get username() {
      return "username";
    }
  }, false);
  const enabled$ = AutofillConfiguration_enabled;
  const uniqueIdentifier$ = AutofillConfiguration_uniqueIdentifier;
  const autofillHints$ = AutofillConfiguration_autofillHints;
  const currentEditingValue$ = AutofillConfiguration_currentEditingValue;
  const hintText$ = AutofillConfiguration_hintText;
  autofill.AutofillConfiguration = class AutofillConfiguration extends core.Object {
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get uniqueIdentifier() {
      return this[uniqueIdentifier$];
    }
    set uniqueIdentifier(value) {
      super.uniqueIdentifier = value;
    }
    get autofillHints() {
      return this[autofillHints$];
    }
    set autofillHints(value) {
      super.autofillHints = value;
    }
    get currentEditingValue() {
      return this[currentEditingValue$];
    }
    set currentEditingValue(value) {
      super.currentEditingValue = value;
    }
    get hintText() {
      return this[hintText$];
    }
    set hintText(value) {
      super.hintText = value;
    }
    static ['_#new#tearOff'](opts) {
      let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
      let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : null;
      let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
      let hintText = opts && 'hintText' in opts ? opts.hintText : null;
      return new autofill.AutofillConfiguration.new({uniqueIdentifier: uniqueIdentifier, autofillHints: autofillHints, currentEditingValue: currentEditingValue, hintText: hintText});
    }
    static ['_#_#tearOff'](opts) {
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
      let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : C[54] || CT.C54;
      let hintText = opts && 'hintText' in opts ? opts.hintText : null;
      let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
      return new autofill.AutofillConfiguration.__({enabled: enabled, uniqueIdentifier: uniqueIdentifier, autofillHints: autofillHints, hintText: hintText, currentEditingValue: currentEditingValue});
    }
    toJson() {
      return this.enabled ? (() => {
        let t3 = new (T.IdentityMapOfString$dynamic()).new();
        t3[$_set]("uniqueIdentifier", this.uniqueIdentifier);
        t3[$_set]("hints", this.autofillHints);
        t3[$_set]("editingValue", this.currentEditingValue.toJSON());
        if (this.hintText != null) t3[$_set]("hintText", this.hintText);
        return t3;
      })() : null;
    }
  };
  (autofill.AutofillConfiguration.new = function(opts) {
    let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
    let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : null;
    let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
    let hintText = opts && 'hintText' in opts ? opts.hintText : null;
    autofill.AutofillConfiguration.__.call(this, {enabled: true, uniqueIdentifier: uniqueIdentifier, autofillHints: autofillHints, currentEditingValue: currentEditingValue, hintText: hintText});
  }).prototype = autofill.AutofillConfiguration.prototype;
  (autofill.AutofillConfiguration.__ = function(opts) {
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let uniqueIdentifier = opts && 'uniqueIdentifier' in opts ? opts.uniqueIdentifier : null;
    let autofillHints = opts && 'autofillHints' in opts ? opts.autofillHints : C[54] || CT.C54;
    let hintText = opts && 'hintText' in opts ? opts.hintText : null;
    let currentEditingValue = opts && 'currentEditingValue' in opts ? opts.currentEditingValue : null;
    this[enabled$] = enabled;
    this[uniqueIdentifier$] = uniqueIdentifier;
    this[autofillHints$] = autofillHints;
    this[hintText$] = hintText;
    this[currentEditingValue$] = currentEditingValue;
    if (!(uniqueIdentifier !== null)) dart.assertFailed(null, I[7], 651, 15, "uniqueIdentifier != null");
    if (!(autofillHints !== null)) dart.assertFailed(null, I[7], 652, 15, "autofillHints != null");
    ;
  }).prototype = autofill.AutofillConfiguration.prototype;
  dart.addTypeTests(autofill.AutofillConfiguration);
  dart.addTypeCaches(autofill.AutofillConfiguration);
  dart.setMethodSignature(autofill.AutofillConfiguration, () => ({
    __proto__: dart.getMethods(autofill.AutofillConfiguration.__proto__),
    toJson: dart.fnType(dart.nullable(core.Map$(core.String, dart.dynamic)), [])
  }));
  dart.setLibraryUri(autofill.AutofillConfiguration, I[6]);
  dart.setFieldSignature(autofill.AutofillConfiguration, () => ({
    __proto__: dart.getFields(autofill.AutofillConfiguration.__proto__),
    enabled: dart.finalFieldType(core.bool),
    uniqueIdentifier: dart.finalFieldType(core.String),
    autofillHints: dart.finalFieldType(core.List$(core.String)),
    currentEditingValue: dart.finalFieldType(text_input.TextEditingValue),
    hintText: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(autofill.AutofillConfiguration, () => ['disabled']);
  dart.defineLazy(autofill.AutofillConfiguration, {
    /*autofill.AutofillConfiguration.disabled*/get disabled() {
      return C[51] || CT.C51;
    }
  }, false);
  autofill.AutofillClient = class AutofillClient extends core.Object {};
  (autofill.AutofillClient.new = function() {
    ;
  }).prototype = autofill.AutofillClient.prototype;
  dart.addTypeTests(autofill.AutofillClient);
  dart.addTypeCaches(autofill.AutofillClient);
  dart.setLibraryUri(autofill.AutofillClient, I[6]);
  autofill.AutofillScope = class AutofillScope extends core.Object {};
  (autofill.AutofillScope.new = function() {
    ;
  }).prototype = autofill.AutofillScope.prototype;
  dart.addTypeTests(autofill.AutofillScope);
  dart.addTypeCaches(autofill.AutofillScope);
  dart.setLibraryUri(autofill.AutofillScope, I[6]);
  autofill._AutofillScopeTextInputConfiguration = class _AutofillScopeTextInputConfiguration extends text_input.TextInputConfiguration {
    static ['_#new#tearOff'](opts) {
      let allConfigurations = opts && 'allConfigurations' in opts ? opts.allConfigurations : null;
      let currentClientConfiguration = opts && 'currentClientConfiguration' in opts ? opts.currentClientConfiguration : null;
      return new autofill._AutofillScopeTextInputConfiguration.new({allConfigurations: allConfigurations, currentClientConfiguration: currentClientConfiguration});
    }
    toJson() {
      let result = super.toJson();
      result[$_set]("fields", this.allConfigurations[$map](T.MapOfString$dynamic(), dart.fn(configuration => configuration.toJson(), T.TextInputConfigurationToMapOfString$dynamic()))[$toList]({growable: false}));
      return result;
    }
  };
  (autofill._AutofillScopeTextInputConfiguration.new = function(opts) {
    let allConfigurations = opts && 'allConfigurations' in opts ? opts.allConfigurations : null;
    let currentClientConfiguration = opts && 'currentClientConfiguration' in opts ? opts.currentClientConfiguration : null;
    this.allConfigurations = allConfigurations;
    if (!(allConfigurations !== null)) dart.assertFailed(null, I[7], 810, 15, "allConfigurations != null");
    if (!(currentClientConfiguration !== null)) dart.assertFailed(null, I[7], 811, 15, "currentClientConfiguration != null");
    autofill._AutofillScopeTextInputConfiguration.__proto__.new.call(this, {inputType: currentClientConfiguration.inputType, obscureText: currentClientConfiguration.obscureText, autocorrect: currentClientConfiguration.autocorrect, smartDashesType: currentClientConfiguration.smartDashesType, smartQuotesType: currentClientConfiguration.smartQuotesType, enableSuggestions: currentClientConfiguration.enableSuggestions, inputAction: currentClientConfiguration.inputAction, textCapitalization: currentClientConfiguration.textCapitalization, keyboardAppearance: currentClientConfiguration.keyboardAppearance, actionLabel: currentClientConfiguration.actionLabel, autofillConfiguration: currentClientConfiguration.autofillConfiguration});
    ;
  }).prototype = autofill._AutofillScopeTextInputConfiguration.prototype;
  dart.addTypeTests(autofill._AutofillScopeTextInputConfiguration);
  dart.addTypeCaches(autofill._AutofillScopeTextInputConfiguration);
  dart.setLibraryUri(autofill._AutofillScopeTextInputConfiguration, I[6]);
  dart.setFieldSignature(autofill._AutofillScopeTextInputConfiguration, () => ({
    __proto__: dart.getFields(autofill._AutofillScopeTextInputConfiguration.__proto__),
    allConfigurations: dart.finalFieldType(core.Iterable$(text_input.TextInputConfiguration))
  }));
  autofill.AutofillScopeMixin = class AutofillScopeMixin extends core.Object {};
  autofill.AutofillScopeMixin[dart.mixinOn] = Object => class AutofillScopeMixin extends Object {
    attach(trigger, configuration) {
      if (!(trigger !== null)) dart.assertFailed(null, I[7], 843, 12, "trigger != null");
      if (!!this.autofillClients[$any](dart.fn(client => !client.textInputConfiguration.autofillConfiguration.enabled, T.AutofillClientTobool()))) dart.assertFailed("Every client in AutofillScope.autofillClients must enable autofill", I[7], 845, 7, "!autofillClients.any((AutofillClient client) => !client.textInputConfiguration.autofillConfiguration.enabled)");
      let inputConfiguration = new autofill._AutofillScopeTextInputConfiguration.new({allConfigurations: this.autofillClients[$map](text_input.TextInputConfiguration, dart.fn(client => client.textInputConfiguration, T.AutofillClientToTextInputConfiguration())), currentClientConfiguration: configuration});
      return text_input.TextInput.attach(trigger, inputConfiguration);
    }
  };
  (autofill.AutofillScopeMixin[dart.mixinNew] = function() {
  }).prototype = autofill.AutofillScopeMixin.prototype;
  dart.addTypeTests(autofill.AutofillScopeMixin);
  dart.addTypeCaches(autofill.AutofillScopeMixin);
  autofill.AutofillScopeMixin[dart.implements] = () => [autofill.AutofillScope, core.Object];
  dart.setMethodSignature(autofill.AutofillScopeMixin, () => ({
    __proto__: dart.getMethods(autofill.AutofillScopeMixin.__proto__),
    attach: dart.fnType(text_input.TextInputConnection, [text_input.TextInputClient, text_input.TextInputConfiguration])
  }));
  dart.setLibraryUri(autofill.AutofillScopeMixin, I[6]);
  dart.trackLibraries("packages/flutter/src/services/text_formatter.dart", {
    "package:flutter/src/services/text_formatter.dart": text_formatter,
    "package:flutter/src/services/text_editing_delta.dart": text_editing_delta,
    "package:flutter/src/services/text_input.dart": text_input,
    "package:flutter/src/services/autofill.dart": autofill,
    "package:flutter/services.dart": services
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_formatter.dart","text_editing_delta.dart","text_input.dart","autofill.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/services/text_formatter.dart.lib.js"}');
  // Exports:
  return {
    src__services__text_formatter: text_formatter,
    src__services__text_editing_delta: text_editing_delta,
    src__services__text_input: text_input,
    src__services__autofill: autofill,
    services: services
  };
}));

//# sourceMappingURL=text_formatter.dart.lib.js.map
