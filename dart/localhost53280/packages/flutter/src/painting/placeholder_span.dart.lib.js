define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/services/mouse_tracking.dart', 'packages/flutter/src/services/text_editing.dart'], (function load__packages__flutter__src__painting__placeholder_span_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__services__mouse_tracking$46dart, packages__flutter__src__services__text_editing$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const mouse_tracking = packages__flutter__src__services__mouse_tracking$46dart.src__services__mouse_tracking;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  var placeholder_span = Object.create(dart.library);
  var strut_style = Object.create(dart.library);
  var text_style = Object.create(dart.library);
  var text_span = Object.create(dart.library);
  var inline_span = Object.create(dart.library);
  var text_painter = Object.create(dart.library);
  var $add = dartx.add;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $any = dartx.any;
  var $forEach = dartx.forEach;
  var $startsWith = dartx.startsWith;
  var $substring = dartx.substring;
  var $length = dartx.length;
  var $clamp = dartx.clamp;
  var $_get = dartx._get;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $isNotEmpty = dartx.isNotEmpty;
  var $join = dartx.join;
  var $codeUnitAt = dartx.codeUnitAt;
  var $_equals = dartx._equals;
  var $isEmpty = dartx.isEmpty;
  var $ceilToDouble = dartx.ceilToDouble;
  var $first = dartx.first;
  var $last = dartx.last;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    EnumPropertyOfPlaceholderAlignment: () => (T.EnumPropertyOfPlaceholderAlignment = dart.constFn(diagnostics.EnumProperty$(ui.PlaceholderAlignment)))(),
    EnumPropertyOfTextBaseline: () => (T.EnumPropertyOfTextBaseline = dart.constFn(diagnostics.EnumProperty$(ui.TextBaseline)))(),
    InlineSpanTobool: () => (T.InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))(),
    JSArrayOfInlineSpanSemanticsInformation: () => (T.JSArrayOfInlineSpanSemanticsInformation = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpanSemanticsInformation)))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    IterablePropertyOfString: () => (T.IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    DiagnosticsPropertyOfFontWeight: () => (T.DiagnosticsPropertyOfFontWeight = dart.constFn(diagnostics.DiagnosticsProperty$(ui.FontWeight)))(),
    EnumPropertyOfFontStyle: () => (T.EnumPropertyOfFontStyle = dart.constFn(diagnostics.EnumProperty$(ui.FontStyle)))(),
    DiagnosticsNodeTobool: () => (T.DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [diagnostics.DiagnosticsNode])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    JSArrayOfObjectN: () => (T.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T.ObjectN())))(),
    EnumPropertyOfTextLeadingDistribution: () => (T.EnumPropertyOfTextLeadingDistribution = dart.constFn(diagnostics.EnumProperty$(ui.TextLeadingDistribution)))(),
    DiagnosticsPropertyOfLocale: () => (T.DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))(),
    DiagnosticsPropertyOfPaint: () => (T.DiagnosticsPropertyOfPaint = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Paint)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    DiagnosticsPropertyOfTextDecoration: () => (T.DiagnosticsPropertyOfTextDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(ui.TextDecoration)))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    EnumPropertyOfTextOverflow: () => (T.EnumPropertyOfTextOverflow = dart.constFn(diagnostics.EnumProperty$(text_painter.TextOverflow)))(),
    JSArrayOfStringAttribute: () => (T.JSArrayOfStringAttribute = dart.constFn(_interceptors.JSArray$(ui.StringAttribute)))(),
    DiagnosticsPropertyOfGestureRecognizer: () => (T.DiagnosticsPropertyOfGestureRecognizer = dart.constFn(diagnostics.DiagnosticsProperty$(recognizer.GestureRecognizer)))(),
    FunctionN: () => (T.FunctionN = dart.constFn(dart.nullable(core.Function)))(),
    FlagsSummaryOfFunctionN: () => (T.FlagsSummaryOfFunctionN = dart.constFn(diagnostics.FlagsSummary$(T.FunctionN())))(),
    IdentityMapOfString$FunctionN: () => (T.IdentityMapOfString$FunctionN = dart.constFn(_js_helper.IdentityMap$(core.String, T.FunctionN())))(),
    DiagnosticsPropertyOfMouseCursor: () => (T.DiagnosticsPropertyOfMouseCursor = dart.constFn(diagnostics.DiagnosticsProperty$(mouse_cursor.MouseCursor)))(),
    InlineSpanToDiagnosticsNode: () => (T.InlineSpanToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics.DiagnosticsNode, [inline_span.InlineSpan])))(),
    VoidToint: () => (T.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    JSArrayOfTextBox: () => (T.JSArrayOfTextBox = dart.constFn(_interceptors.JSArray$(ui.TextBox)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "bottom",
        [_Enum_index]: 4
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: strut_style.StrutStyle.prototype,
        [debugLabel$]: null,
        [forceStrutHeight$]: null,
        [leading$]: 0,
        [fontStyle$]: null,
        [fontWeight$]: null,
        [leadingDistribution$]: null,
        [height$]: 0,
        [fontSize$]: null,
        [_package]: null,
        [_fontFamilyFallback]: null,
        [fontFamily$]: null
      });
    },
    get C2() {
      return C[2] = dart.constList([], diagnostics.DiagnosticsNode);
    },
    get C3() {
      return C[3] = dart.constList([], ui.StringAttribute);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: inline_span.InlineSpanSemanticsInformation.prototype,
        [stringAttributes$]: C[3] || CT.C3,
        [requiresOwnNode]: true,
        [isPlaceholder$]: true,
        [recognizer$0]: null,
        [semanticsLabel$0]: null,
        [text$0]: "￼"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "clip",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "fade",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "ellipsis",
        [_Enum_index]: 2
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "visible",
        [_Enum_index]: 3
      });
    },
    get C9() {
      return C[9] = dart.constList([C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8], text_painter.TextOverflow);
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text_painter.PlaceholderDimensions.prototype,
        [baseline$0]: null,
        [baselineOffset$]: null,
        [alignment$0]: C[0] || CT.C0,
        [size$]: C[11] || CT.C11
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_Enum__name]: "parent",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_Enum__name]: "longestLine",
        [_Enum_index]: 1
      });
    },
    get C14() {
      return C[14] = dart.constList([C[12] || CT.C12, C[13] || CT.C13], text_painter.TextWidthBasis);
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 4
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.ParagraphConstraints.prototype,
        [ParagraphConstraints_width]: 1 / 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_Enum__name]: "alphabetic",
        [_Enum_index]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_Enum__name]: "ideographic",
        [_Enum_index]: 1
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 1
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "center",
        [_Enum_index]: 2
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "justify",
        [_Enum_index]: 3
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "end",
        [_Enum_index]: 5
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_Enum__name]: "upstream",
        [_Enum_index]: 0
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_Enum__name]: "downstream",
        [_Enum_index]: 1
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(30).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/inline_span.dart",
    "package:flutter/src/painting/inline_span.dart",
    "package:flutter/src/painting/placeholder_span.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/strut_style.dart",
    "package:flutter/src/painting/strut_style.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/text_style.dart",
    "package:flutter/src/painting/text_style.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/text_span.dart",
    "package:flutter/src/painting/text_span.dart",
    "package:flutter/src/painting/text_painter.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/text_painter.dart"
  ];
  var alignment$ = dart.privateName(placeholder_span, "PlaceholderSpan.alignment");
  var baseline$ = dart.privateName(placeholder_span, "PlaceholderSpan.baseline");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var style$ = dart.privateName(inline_span, "InlineSpan.style");
  inline_span.InlineSpan = class InlineSpan extends diagnostics.DiagnosticableTree {
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    getSpanForPosition(position) {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[0], 232, 12, "debugAssertIsValid()");
      let offset = new inline_span.Accumulator.new();
      let result = null;
      this.visitChildren(dart.fn(span => {
        result = span.getSpanForPositionVisitor(position, offset);
        return result == null;
      }, T.InlineSpanTobool()));
      return result;
    }
    toPlainText(opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      let buffer = new core.StringBuffer.new();
      this.computeToPlainText(buffer, {includeSemanticsLabels: includeSemanticsLabels, includePlaceholders: includePlaceholders});
      return buffer.toString();
    }
    getSemanticsInformation() {
      let collector = T.JSArrayOfInlineSpanSemanticsInformation().of([]);
      this.computeSemanticsInformation(collector);
      return collector;
    }
    codeUnitAt(index) {
      if (index < 0) return null;
      let offset = new inline_span.Accumulator.new();
      let result = null;
      this.visitChildren(dart.fn(span => {
        result = span.codeUnitAtVisitor(index, offset);
        return result == null;
      }, T.InlineSpanTobool()));
      return result;
    }
    debugAssertIsValid() {
      return true;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return inline_span.InlineSpan.is(other) && dart.equals(other.style, this.style);
    }
    get hashCode() {
      return dart.hashCode(this.style);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.defaultDiagnosticsTreeStyle = diagnostics.DiagnosticsTreeStyle.whitespace;
      if (this.style != null) {
        dart.nullCheck(this.style).debugFillProperties(properties);
      }
    }
  };
  (inline_span.InlineSpan.new = function(opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    this[style$] = style;
    inline_span.InlineSpan.__proto__.new.call(this);
    ;
  }).prototype = inline_span.InlineSpan.prototype;
  dart.addTypeTests(inline_span.InlineSpan);
  dart.addTypeCaches(inline_span.InlineSpan);
  dart.setMethodSignature(inline_span.InlineSpan, () => ({
    __proto__: dart.getMethods(inline_span.InlineSpan.__proto__),
    getSpanForPosition: dart.fnType(dart.nullable(inline_span.InlineSpan), [ui.TextPosition]),
    toPlainText: dart.fnType(core.String, [], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    getSemanticsInformation: dart.fnType(core.List$(inline_span.InlineSpanSemanticsInformation), []),
    codeUnitAt: dart.fnType(dart.nullable(core.int), [core.int]),
    debugAssertIsValid: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(inline_span.InlineSpan, I[1]);
  dart.setFieldSignature(inline_span.InlineSpan, () => ({
    __proto__: dart.getFields(inline_span.InlineSpan.__proto__),
    style: dart.finalFieldType(dart.nullable(text_style.TextStyle))
  }));
  dart.defineExtensionMethods(inline_span.InlineSpan, ['_equals']);
  dart.defineExtensionAccessors(inline_span.InlineSpan, ['hashCode']);
  placeholder_span.PlaceholderSpan = class PlaceholderSpan extends inline_span.InlineSpan {
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get baseline() {
      return this[baseline$];
    }
    set baseline(value) {
      super.baseline = value;
    }
    computeToPlainText(buffer, opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      if (includePlaceholders) {
        buffer.write("￼");
      }
    }
    computeSemanticsInformation(collector) {
      collector[$add](inline_span.InlineSpanSemanticsInformation.placeholder);
    }
    describeSemantics(offset, semanticsOffsets, semanticsElements) {
      semanticsOffsets[$add](offset.value);
      semanticsOffsets[$add](offset.value + 1);
      semanticsElements[$add](null);
      offset.increment(1);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfPlaceholderAlignment()).new("alignment", this.alignment, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfTextBaseline()).new("baseline", this.baseline, {defaultValue: null}));
    }
  };
  (placeholder_span.PlaceholderSpan.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let style = opts && 'style' in opts ? opts.style : null;
    this[alignment$] = alignment;
    this[baseline$] = baseline;
    placeholder_span.PlaceholderSpan.__proto__.new.call(this, {style: style});
    ;
  }).prototype = placeholder_span.PlaceholderSpan.prototype;
  dart.addTypeTests(placeholder_span.PlaceholderSpan);
  dart.addTypeCaches(placeholder_span.PlaceholderSpan);
  dart.setMethodSignature(placeholder_span.PlaceholderSpan, () => ({
    __proto__: dart.getMethods(placeholder_span.PlaceholderSpan.__proto__),
    computeToPlainText: dart.fnType(dart.void, [core.StringBuffer], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    computeSemanticsInformation: dart.fnType(dart.void, [core.List$(inline_span.InlineSpanSemanticsInformation)]),
    describeSemantics: dart.fnType(dart.void, [inline_span.Accumulator, core.List$(core.int), core.List])
  }));
  dart.setLibraryUri(placeholder_span.PlaceholderSpan, I[2]);
  dart.setFieldSignature(placeholder_span.PlaceholderSpan, () => ({
    __proto__: dart.getFields(placeholder_span.PlaceholderSpan.__proto__),
    alignment: dart.finalFieldType(ui.PlaceholderAlignment),
    baseline: dart.finalFieldType(dart.nullable(ui.TextBaseline))
  }));
  var fontFamily$ = dart.privateName(strut_style, "StrutStyle.fontFamily");
  var _fontFamilyFallback = dart.privateName(strut_style, "StrutStyle._fontFamilyFallback");
  var _package = dart.privateName(strut_style, "StrutStyle._package");
  var fontSize$ = dart.privateName(strut_style, "StrutStyle.fontSize");
  var height$ = dart.privateName(strut_style, "StrutStyle.height");
  var leadingDistribution$ = dart.privateName(strut_style, "StrutStyle.leadingDistribution");
  var fontWeight$ = dart.privateName(strut_style, "StrutStyle.fontWeight");
  var fontStyle$ = dart.privateName(strut_style, "StrutStyle.fontStyle");
  var leading$ = dart.privateName(strut_style, "StrutStyle.leading");
  var forceStrutHeight$ = dart.privateName(strut_style, "StrutStyle.forceStrutHeight");
  var debugLabel$ = dart.privateName(strut_style, "StrutStyle.debugLabel");
  var _fontFamilyFallback$ = dart.privateName(strut_style, "_fontFamilyFallback");
  var _package$ = dart.privateName(strut_style, "_package");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  strut_style.StrutStyle = class StrutStyle extends Object_Diagnosticable$36 {
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get [_fontFamilyFallback$]() {
      return this[_fontFamilyFallback];
    }
    set [_fontFamilyFallback$](value) {
      super[_fontFamilyFallback$] = value;
    }
    get [_package$]() {
      return this[_package];
    }
    set [_package$](value) {
      super[_package$] = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get leadingDistribution() {
      return this[leadingDistribution$];
    }
    set leadingDistribution(value) {
      super.leadingDistribution = value;
    }
    get fontWeight() {
      return this[fontWeight$];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get forceStrutHeight() {
      return this[forceStrutHeight$];
    }
    set forceStrutHeight(value) {
      super.forceStrutHeight = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    static ['_#new#tearOff'](opts) {
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let leadingDistribution = opts && 'leadingDistribution' in opts ? opts.leadingDistribution : null;
      let leading = opts && 'leading' in opts ? opts.leading : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      return new strut_style.StrutStyle.new({fontFamily: fontFamily, fontFamilyFallback: fontFamilyFallback, fontSize: fontSize, height: height, leadingDistribution: leadingDistribution, leading: leading, fontWeight: fontWeight, fontStyle: fontStyle, forceStrutHeight: forceStrutHeight, debugLabel: debugLabel, package: $package});
    }
    static ['_#fromTextStyle#tearOff'](textStyle, opts) {
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let leadingDistribution = opts && 'leadingDistribution' in opts ? opts.leadingDistribution : null;
      let leading = opts && 'leading' in opts ? opts.leading : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      return new strut_style.StrutStyle.fromTextStyle(textStyle, {fontFamily: fontFamily, fontFamilyFallback: fontFamilyFallback, fontSize: fontSize, height: height, leadingDistribution: leadingDistribution, leading: leading, fontWeight: fontWeight, fontStyle: fontStyle, forceStrutHeight: forceStrutHeight, debugLabel: debugLabel, package: $package});
    }
    get fontFamilyFallback() {
      if (this[_package$] != null && this[_fontFamilyFallback$] != null) return dart.nullCheck(this[_fontFamilyFallback$])[$map](core.String, dart.fn(family => "packages/" + dart.str(this[_package$]) + "/" + family, T.StringToString()))[$toList]();
      return this[_fontFamilyFallback$];
    }
    compareTo(other) {
      if (this === other) return basic_types.RenderComparison.identical;
      if (this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || this.fontStyle != other.fontStyle || this.height != other.height || this.leading != other.leading || this.forceStrutHeight != other.forceStrutHeight || !collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback)) return basic_types.RenderComparison.layout;
      return basic_types.RenderComparison.identical;
    }
    inheritFromTextStyle(other) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      if (other == null) return this;
      return new strut_style.StrutStyle.new({fontFamily: (t0 = this.fontFamily, t0 == null ? other.fontFamily : t0), fontFamilyFallback: (t0$ = this.fontFamilyFallback, t0$ == null ? other.fontFamilyFallback : t0$), fontSize: (t0$0 = this.fontSize, t0$0 == null ? other.fontSize : t0$0), height: (t0$1 = this.height, t0$1 == null ? other.height : t0$1), leading: this.leading, fontWeight: (t0$2 = this.fontWeight, t0$2 == null ? other.fontWeight : t0$2), fontStyle: (t0$3 = this.fontStyle, t0$3 == null ? other.fontStyle : t0$3), forceStrutHeight: this.forceStrutHeight, debugLabel: (t0$4 = this.debugLabel, t0$4 == null ? other.debugLabel : t0$4)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return strut_style.StrutStyle.is(other) && other.fontFamily == this.fontFamily && other.fontSize == this.fontSize && dart.equals(other.fontWeight, this.fontWeight) && other.fontStyle == this.fontStyle && other.height == this.height && other.leading == this.leading && other.forceStrutHeight == this.forceStrutHeight;
    }
    get hashCode() {
      return ui.hashValues(this.fontFamily, this.fontSize, this.fontWeight, this.fontStyle, this.height, this.leading, this.forceStrutHeight);
    }
    toStringShort() {
      return object.objectRuntimeType(this, "StrutStyle");
    }
    debugFillProperties(properties, opts) {
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new diagnostics.MessageProperty.new(prefix + "debugLabel", dart.nullCheck(this.debugLabel)));
      let styles = T.JSArrayOfDiagnosticsNode().of([new diagnostics.StringProperty.new(prefix + "family", this.fontFamily, {defaultValue: null, quoted: false}), new (T.IterablePropertyOfString()).new(prefix + "familyFallback", this.fontFamilyFallback, {defaultValue: null}), new diagnostics.DoubleProperty.new(prefix + "size", this.fontSize, {defaultValue: null})]);
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = "w" + dart.str(dart.nullCheck(this.fontWeight).index + 1) + "00";
      }
      styles[$add](new (T.DiagnosticsPropertyOfFontWeight()).new(prefix + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (T.EnumPropertyOfFontStyle()).new(prefix + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(prefix + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new diagnostics.FlagProperty.new(prefix + "forceStrutHeight", {value: this.forceStrutHeight, ifTrue: prefix + "<strut height forced>", ifFalse: prefix + "<strut height normal>"}));
      let styleSpecified = styles[$any](dart.fn(n => !n.isFiltered(diagnostics.DiagnosticLevel.info), T.DiagnosticsNodeTobool()));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!styleSpecified) properties.add(new diagnostics.FlagProperty.new("forceStrutHeight", {value: this.forceStrutHeight, ifTrue: prefix + "<strut height forced>", ifFalse: prefix + "<strut height normal>"}));
    }
  };
  (strut_style.StrutStyle.new = function(opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leadingDistribution = opts && 'leadingDistribution' in opts ? opts.leadingDistribution : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[fontSize$] = fontSize;
    this[height$] = height;
    this[leadingDistribution$] = leadingDistribution;
    this[leading$] = leading;
    this[fontWeight$] = fontWeight;
    this[fontStyle$] = fontStyle;
    this[forceStrutHeight$] = forceStrutHeight;
    this[debugLabel$] = debugLabel;
    this[fontFamily$] = $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback] = fontFamilyFallback;
    this[_package] = $package;
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, I[3], 314, 15, "fontSize == null || fontSize > 0");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, I[3], 315, 15, "leading == null || leading >= 0");
    if (!($package == null || fontFamily != null || fontFamilyFallback != null)) dart.assertFailed(null, I[3], 316, 15, "package == null || (fontFamily != null || fontFamilyFallback != null)");
    ;
  }).prototype = strut_style.StrutStyle.prototype;
  (strut_style.StrutStyle.fromTextStyle = function(textStyle, opts) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leadingDistribution = opts && 'leadingDistribution' in opts ? opts.leadingDistribution : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    this[leading$] = leading;
    this[forceStrutHeight$] = forceStrutHeight;
    if (!(textStyle !== null)) dart.assertFailed(null, I[3], 350, 15, "textStyle != null");
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, I[3], 351, 15, "fontSize == null || fontSize > 0");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, I[3], 352, 15, "leading == null || leading >= 0");
    if (!($package == null || fontFamily != null || fontFamilyFallback != null)) dart.assertFailed(null, I[3], 353, 15, "package == null || fontFamily != null || fontFamilyFallback != null");
    this[fontFamily$] = fontFamily != null ? $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily) : textStyle.fontFamily;
    this[_fontFamilyFallback] = (t0 = fontFamilyFallback, t0 == null ? textStyle.fontFamilyFallback : t0);
    this[height$] = (t0$ = height, t0$ == null ? textStyle.height : t0$);
    this[leadingDistribution$] = (t0$0 = leadingDistribution, t0$0 == null ? textStyle.leadingDistribution : t0$0);
    this[fontSize$] = (t0$1 = fontSize, t0$1 == null ? textStyle.fontSize : t0$1);
    this[fontWeight$] = (t0$2 = fontWeight, t0$2 == null ? textStyle.fontWeight : t0$2);
    this[fontStyle$] = (t0$3 = fontStyle, t0$3 == null ? textStyle.fontStyle : t0$3);
    this[debugLabel$] = (t0$4 = debugLabel, t0$4 == null ? textStyle.debugLabel : t0$4);
    this[_package] = $package;
    ;
  }).prototype = strut_style.StrutStyle.prototype;
  dart.addTypeTests(strut_style.StrutStyle);
  dart.addTypeCaches(strut_style.StrutStyle);
  dart.setMethodSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getMethods(strut_style.StrutStyle.__proto__),
    compareTo: dart.fnType(basic_types.RenderComparison, [strut_style.StrutStyle]),
    inheritFromTextStyle: dart.fnType(strut_style.StrutStyle, [dart.nullable(text_style.TextStyle)]),
    debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String}, {})
  }));
  dart.setGetterSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getGetters(strut_style.StrutStyle.__proto__),
    fontFamilyFallback: dart.nullable(core.List$(core.String))
  }));
  dart.setLibraryUri(strut_style.StrutStyle, I[4]);
  dart.setFieldSignature(strut_style.StrutStyle, () => ({
    __proto__: dart.getFields(strut_style.StrutStyle.__proto__),
    fontFamily: dart.finalFieldType(dart.nullable(core.String)),
    [_fontFamilyFallback$]: dart.finalFieldType(dart.nullable(core.List$(core.String))),
    [_package$]: dart.finalFieldType(dart.nullable(core.String)),
    fontSize: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double)),
    leadingDistribution: dart.finalFieldType(dart.nullable(ui.TextLeadingDistribution)),
    fontWeight: dart.finalFieldType(dart.nullable(ui.FontWeight)),
    fontStyle: dart.finalFieldType(dart.nullable(ui.FontStyle)),
    leading: dart.finalFieldType(dart.nullable(core.double)),
    forceStrutHeight: dart.finalFieldType(dart.nullable(core.bool)),
    debugLabel: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.setStaticFieldSignature(strut_style.StrutStyle, () => ['disabled']);
  dart.defineExtensionMethods(strut_style.StrutStyle, ['_equals']);
  dart.defineExtensionAccessors(strut_style.StrutStyle, ['hashCode']);
  dart.defineLazy(strut_style.StrutStyle, {
    /*strut_style.StrutStyle.disabled*/get disabled() {
      return C[1] || CT.C1;
    }
  }, false);
  var inherit$ = dart.privateName(text_style, "TextStyle.inherit");
  var color$ = dart.privateName(text_style, "TextStyle.color");
  var backgroundColor$ = dart.privateName(text_style, "TextStyle.backgroundColor");
  var fontFamily$0 = dart.privateName(text_style, "TextStyle.fontFamily");
  var _fontFamilyFallback$0 = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var _package$0 = dart.privateName(text_style, "TextStyle._package");
  var fontSize$0 = dart.privateName(text_style, "TextStyle.fontSize");
  var fontWeight$0 = dart.privateName(text_style, "TextStyle.fontWeight");
  var fontStyle$0 = dart.privateName(text_style, "TextStyle.fontStyle");
  var letterSpacing$ = dart.privateName(text_style, "TextStyle.letterSpacing");
  var wordSpacing$ = dart.privateName(text_style, "TextStyle.wordSpacing");
  var textBaseline$ = dart.privateName(text_style, "TextStyle.textBaseline");
  var height$0 = dart.privateName(text_style, "TextStyle.height");
  var leadingDistribution$0 = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var locale$ = dart.privateName(text_style, "TextStyle.locale");
  var foreground$ = dart.privateName(text_style, "TextStyle.foreground");
  var background$ = dart.privateName(text_style, "TextStyle.background");
  var decoration$ = dart.privateName(text_style, "TextStyle.decoration");
  var decorationColor$ = dart.privateName(text_style, "TextStyle.decorationColor");
  var decorationStyle$ = dart.privateName(text_style, "TextStyle.decorationStyle");
  var decorationThickness$ = dart.privateName(text_style, "TextStyle.decorationThickness");
  var debugLabel$0 = dart.privateName(text_style, "TextStyle.debugLabel");
  var shadows$ = dart.privateName(text_style, "TextStyle.shadows");
  var fontFeatures$ = dart.privateName(text_style, "TextStyle.fontFeatures");
  var overflow$ = dart.privateName(text_style, "TextStyle.overflow");
  var _fontFamilyFallback$1 = dart.privateName(text_style, "_fontFamilyFallback");
  var _package$1 = dart.privateName(text_style, "_package");
  var _fontFamily = dart.privateName(text_style, "_fontFamily");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  text_style.TextStyle = class TextStyle extends Object_Diagnosticable$36$ {
    get inherit() {
      return this[inherit$];
    }
    set inherit(value) {
      super.inherit = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get fontFamily() {
      return this[fontFamily$0];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get [_fontFamilyFallback$1]() {
      return this[_fontFamilyFallback$0];
    }
    set [_fontFamilyFallback$1](value) {
      super[_fontFamilyFallback$1] = value;
    }
    get [_package$1]() {
      return this[_package$0];
    }
    set [_package$1](value) {
      super[_package$1] = value;
    }
    get fontSize() {
      return this[fontSize$0];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get fontWeight() {
      return this[fontWeight$0];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$0];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get letterSpacing() {
      return this[letterSpacing$];
    }
    set letterSpacing(value) {
      super.letterSpacing = value;
    }
    get wordSpacing() {
      return this[wordSpacing$];
    }
    set wordSpacing(value) {
      super.wordSpacing = value;
    }
    get textBaseline() {
      return this[textBaseline$];
    }
    set textBaseline(value) {
      super.textBaseline = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    get leadingDistribution() {
      return this[leadingDistribution$0];
    }
    set leadingDistribution(value) {
      super.leadingDistribution = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get foreground() {
      return this[foreground$];
    }
    set foreground(value) {
      super.foreground = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get decorationColor() {
      return this[decorationColor$];
    }
    set decorationColor(value) {
      super.decorationColor = value;
    }
    get decorationStyle() {
      return this[decorationStyle$];
    }
    set decorationStyle(value) {
      super.decorationStyle = value;
    }
    get decorationThickness() {
      return this[decorationThickness$];
    }
    set decorationThickness(value) {
      super.decorationThickness = value;
    }
    get debugLabel() {
      return this[debugLabel$0];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get shadows() {
      return this[shadows$];
    }
    set shadows(value) {
      super.shadows = value;
    }
    get fontFeatures() {
      return this[fontFeatures$];
    }
    set fontFeatures(value) {
      super.fontFeatures = value;
    }
    get overflow() {
      return this[overflow$];
    }
    set overflow(value) {
      super.overflow = value;
    }
    static ['_#new#tearOff'](opts) {
      let inherit = opts && 'inherit' in opts ? opts.inherit : true;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
      let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let leadingDistribution = opts && 'leadingDistribution' in opts ? opts.leadingDistribution : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let foreground = opts && 'foreground' in opts ? opts.foreground : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      let overflow = opts && 'overflow' in opts ? opts.overflow : null;
      return new text_style.TextStyle.new({inherit: inherit, color: color, backgroundColor: backgroundColor, fontSize: fontSize, fontWeight: fontWeight, fontStyle: fontStyle, letterSpacing: letterSpacing, wordSpacing: wordSpacing, textBaseline: textBaseline, height: height, leadingDistribution: leadingDistribution, locale: locale, foreground: foreground, background: background, shadows: shadows, fontFeatures: fontFeatures, decoration: decoration, decorationColor: decorationColor, decorationStyle: decorationStyle, decorationThickness: decorationThickness, debugLabel: debugLabel, fontFamily: fontFamily, fontFamilyFallback: fontFamilyFallback, package: $package, overflow: overflow});
    }
    get fontFamilyFallback() {
      return this[_package$1] != null && this[_fontFamilyFallback$1] != null ? dart.nullCheck(this[_fontFamilyFallback$1])[$map](core.String, dart.fn(str => "packages/" + dart.str(this[_package$1]) + "/" + str, T.StringToString()))[$toList]() : this[_fontFamilyFallback$1];
    }
    get [_fontFamily]() {
      if (this[_package$1] != null && this.fontFamily != null) {
        let fontFamilyPrefix = "packages/" + dart.str(this[_package$1]) + "/";
        if (!dart.nullCheck(this.fontFamily)[$startsWith](fontFamilyPrefix)) dart.assertFailed(null, I[5], 781, 14, "fontFamily!.startsWith(fontFamilyPrefix)");
        return dart.nullCheck(this.fontFamily)[$substring](fontFamilyPrefix.length);
      }
      return this.fontFamily;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21;
      let inherit = opts && 'inherit' in opts ? opts.inherit : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
      let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let leadingDistribution = opts && 'leadingDistribution' in opts ? opts.leadingDistribution : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let foreground = opts && 'foreground' in opts ? opts.foreground : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      let overflow = opts && 'overflow' in opts ? opts.overflow : null;
      if (!(color == null || foreground == null)) dart.assertFailed(text_style._kColorForegroundWarning, I[5], 823, 12, "color == null || foreground == null");
      if (!(backgroundColor == null || background == null)) dart.assertFailed(text_style._kColorBackgroundWarning, I[5], 824, 12, "backgroundColor == null || background == null");
      let newDebugLabel = null;
      if (!dart.fn(() => {
        let t0;
        if (this.debugLabel != null) newDebugLabel = (t0 = debugLabel, t0 == null ? "(" + dart.str(this.debugLabel) + ").copyWith" : t0);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[5], 826, 12, "() {\n      if (this.debugLabel != null)\n        newDebugLabel = debugLabel ?? '(${this.debugLabel}).copyWith';\n      return true;\n    }()");
      return new text_style.TextStyle.new({inherit: (t0 = inherit, t0 == null ? this.inherit : t0), color: this.foreground == null && foreground == null ? (t0$ = color, t0$ == null ? this.color : t0$) : null, backgroundColor: this.background == null && background == null ? (t0$0 = backgroundColor, t0$0 == null ? this.backgroundColor : t0$0) : null, fontSize: (t0$1 = fontSize, t0$1 == null ? this.fontSize : t0$1), fontWeight: (t0$2 = fontWeight, t0$2 == null ? this.fontWeight : t0$2), fontStyle: (t0$3 = fontStyle, t0$3 == null ? this.fontStyle : t0$3), letterSpacing: (t0$4 = letterSpacing, t0$4 == null ? this.letterSpacing : t0$4), wordSpacing: (t0$5 = wordSpacing, t0$5 == null ? this.wordSpacing : t0$5), textBaseline: (t0$6 = textBaseline, t0$6 == null ? this.textBaseline : t0$6), height: (t0$7 = height, t0$7 == null ? this.height : t0$7), leadingDistribution: (t0$8 = leadingDistribution, t0$8 == null ? this.leadingDistribution : t0$8), locale: (t0$9 = locale, t0$9 == null ? this.locale : t0$9), foreground: (t0$10 = foreground, t0$10 == null ? this.foreground : t0$10), background: (t0$11 = background, t0$11 == null ? this.background : t0$11), shadows: (t0$12 = shadows, t0$12 == null ? this.shadows : t0$12), fontFeatures: (t0$13 = fontFeatures, t0$13 == null ? this.fontFeatures : t0$13), decoration: (t0$14 = decoration, t0$14 == null ? this.decoration : t0$14), decorationColor: (t0$15 = decorationColor, t0$15 == null ? this.decorationColor : t0$15), decorationStyle: (t0$16 = decorationStyle, t0$16 == null ? this.decorationStyle : t0$16), decorationThickness: (t0$17 = decorationThickness, t0$17 == null ? this.decorationThickness : t0$17), debugLabel: newDebugLabel, fontFamily: (t0$18 = fontFamily, t0$18 == null ? this[_fontFamily] : t0$18), fontFamilyFallback: (t0$19 = fontFamilyFallback, t0$19 == null ? this.fontFamilyFallback : t0$19), package: (t0$20 = $package, t0$20 == null ? this[_package$1] : t0$20), overflow: (t0$21 = overflow, t0$21 == null ? this.overflow : t0$21)});
    }
    apply(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThicknessFactor = opts && 'decorationThicknessFactor' in opts ? opts.decorationThicknessFactor : 1;
      let decorationThicknessDelta = opts && 'decorationThicknessDelta' in opts ? opts.decorationThicknessDelta : 0;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSizeFactor = opts && 'fontSizeFactor' in opts ? opts.fontSizeFactor : 1;
      let fontSizeDelta = opts && 'fontSizeDelta' in opts ? opts.fontSizeDelta : 0;
      let fontWeightDelta = opts && 'fontWeightDelta' in opts ? opts.fontWeightDelta : 0;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let letterSpacingFactor = opts && 'letterSpacingFactor' in opts ? opts.letterSpacingFactor : 1;
      let letterSpacingDelta = opts && 'letterSpacingDelta' in opts ? opts.letterSpacingDelta : 0;
      let wordSpacingFactor = opts && 'wordSpacingFactor' in opts ? opts.wordSpacingFactor : 1;
      let wordSpacingDelta = opts && 'wordSpacingDelta' in opts ? opts.wordSpacingDelta : 0;
      let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : 1;
      let heightDelta = opts && 'heightDelta' in opts ? opts.heightDelta : 0;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let leadingDistribution = opts && 'leadingDistribution' in opts ? opts.leadingDistribution : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
      let $package = opts && 'package' in opts ? opts.package : null;
      let overflow = opts && 'overflow' in opts ? opts.overflow : null;
      if (!(fontSizeFactor !== null)) dart.assertFailed(null, I[5], 918, 12, "fontSizeFactor != null");
      if (!(fontSizeDelta !== null)) dart.assertFailed(null, I[5], 919, 12, "fontSizeDelta != null");
      if (!(this.fontSize != null || fontSizeFactor === 1.0 && fontSizeDelta === 0.0)) dart.assertFailed(null, I[5], 920, 12, "fontSize != null || (fontSizeFactor == 1.0 && fontSizeDelta == 0.0)");
      if (!(fontWeightDelta !== null)) dart.assertFailed(null, I[5], 921, 12, "fontWeightDelta != null");
      if (!(this.fontWeight != null || fontWeightDelta === 0.0)) dart.assertFailed(null, I[5], 922, 12, "fontWeight != null || fontWeightDelta == 0.0");
      if (!(letterSpacingFactor !== null)) dart.assertFailed(null, I[5], 923, 12, "letterSpacingFactor != null");
      if (!(letterSpacingDelta !== null)) dart.assertFailed(null, I[5], 924, 12, "letterSpacingDelta != null");
      if (!(this.letterSpacing != null || letterSpacingFactor === 1.0 && letterSpacingDelta === 0.0)) dart.assertFailed(null, I[5], 925, 12, "letterSpacing != null || (letterSpacingFactor == 1.0 && letterSpacingDelta == 0.0)");
      if (!(wordSpacingFactor !== null)) dart.assertFailed(null, I[5], 926, 12, "wordSpacingFactor != null");
      if (!(wordSpacingDelta !== null)) dart.assertFailed(null, I[5], 927, 12, "wordSpacingDelta != null");
      if (!(this.wordSpacing != null || wordSpacingFactor === 1.0 && wordSpacingDelta === 0.0)) dart.assertFailed(null, I[5], 928, 12, "wordSpacing != null || (wordSpacingFactor == 1.0 && wordSpacingDelta == 0.0)");
      if (!(heightFactor !== null)) dart.assertFailed(null, I[5], 929, 12, "heightFactor != null");
      if (!(heightDelta !== null)) dart.assertFailed(null, I[5], 930, 12, "heightDelta != null");
      if (!(decorationThicknessFactor !== null)) dart.assertFailed(null, I[5], 931, 12, "decorationThicknessFactor != null");
      if (!(decorationThicknessDelta !== null)) dart.assertFailed(null, I[5], 932, 12, "decorationThicknessDelta != null");
      if (!(this.decorationThickness != null || decorationThicknessFactor === 1.0 && decorationThicknessDelta === 0.0)) dart.assertFailed(null, I[5], 933, 12, "decorationThickness != null || (decorationThicknessFactor == 1.0 && decorationThicknessDelta == 0.0)");
      let modifiedDebugLabel = null;
      if (!dart.fn(() => {
        if (this.debugLabel != null) modifiedDebugLabel = "(" + dart.str(this.debugLabel) + ").apply";
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[5], 936, 12, "() {\n      if (debugLabel != null)\n        modifiedDebugLabel = '($debugLabel).apply';\n      return true;\n    }()");
      return new text_style.TextStyle.new({inherit: this.inherit, color: this.foreground == null ? (t0 = color, t0 == null ? this.color : t0) : null, backgroundColor: this.background == null ? (t0$ = backgroundColor, t0$ == null ? this.backgroundColor : t0$) : null, fontFamily: (t0$0 = fontFamily, t0$0 == null ? this[_fontFamily] : t0$0), fontFamilyFallback: (t0$1 = fontFamilyFallback, t0$1 == null ? this.fontFamilyFallback : t0$1), fontSize: this.fontSize == null ? null : dart.nullCheck(this.fontSize) * fontSizeFactor + fontSizeDelta, fontWeight: this.fontWeight == null ? null : ui.FontWeight.values[$_get]((dart.nullCheck(this.fontWeight).index + fontWeightDelta)[$clamp](0, ui.FontWeight.values[$length] - 1)), fontStyle: (t0$2 = fontStyle, t0$2 == null ? this.fontStyle : t0$2), letterSpacing: this.letterSpacing == null ? null : dart.nullCheck(this.letterSpacing) * letterSpacingFactor + letterSpacingDelta, wordSpacing: this.wordSpacing == null ? null : dart.nullCheck(this.wordSpacing) * wordSpacingFactor + wordSpacingDelta, textBaseline: (t0$3 = textBaseline, t0$3 == null ? this.textBaseline : t0$3), height: this.height == null ? null : dart.nullCheck(this.height) * heightFactor + heightDelta, leadingDistribution: (t0$4 = leadingDistribution, t0$4 == null ? this.leadingDistribution : t0$4), locale: (t0$5 = locale, t0$5 == null ? this.locale : t0$5), foreground: this.foreground, background: this.background, shadows: (t0$6 = shadows, t0$6 == null ? this.shadows : t0$6), fontFeatures: (t0$7 = fontFeatures, t0$7 == null ? this.fontFeatures : t0$7), decoration: (t0$8 = decoration, t0$8 == null ? this.decoration : t0$8), decorationColor: (t0$9 = decorationColor, t0$9 == null ? this.decorationColor : t0$9), decorationStyle: (t0$10 = decorationStyle, t0$10 == null ? this.decorationStyle : t0$10), decorationThickness: this.decorationThickness == null ? null : dart.nullCheck(this.decorationThickness) * decorationThicknessFactor + decorationThicknessDelta, overflow: (t0$11 = overflow, t0$11 == null ? this.overflow : t0$11), package: (t0$12 = $package, t0$12 == null ? this[_package$1] : t0$12), debugLabel: modifiedDebugLabel});
    }
    merge(other) {
      if (other == null) return this;
      if (!other.inherit) return other;
      let mergedDebugLabel = null;
      if (!dart.fn(() => {
        let t0, t0$;
        if (other.debugLabel != null || this.debugLabel != null) mergedDebugLabel = "(" + dart.str((t0 = this.debugLabel, t0 == null ? "unknown" : t0)) + ").merge(" + dart.str((t0$ = other.debugLabel, t0$ == null ? "unknown" : t0$)) + ")";
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[5], 999, 12, "() {\n      if (other.debugLabel != null || debugLabel != null)\n        mergedDebugLabel = '(${debugLabel ?? _kDefaultDebugLabel}).merge(${other.debugLabel ?? _kDefaultDebugLabel})';\n      return true;\n    }()");
      return this.copyWith({color: other.color, backgroundColor: other.backgroundColor, fontSize: other.fontSize, fontWeight: other.fontWeight, fontStyle: other.fontStyle, letterSpacing: other.letterSpacing, wordSpacing: other.wordSpacing, textBaseline: other.textBaseline, height: other.height, leadingDistribution: other.leadingDistribution, locale: other.locale, foreground: other.foreground, background: other.background, shadows: other.shadows, fontFeatures: other.fontFeatures, decoration: other.decoration, decorationColor: other.decorationColor, decorationStyle: other.decorationStyle, decorationThickness: other.decorationThickness, debugLabel: mergedDebugLabel, fontFamily: other[_fontFamily], fontFamilyFallback: other.fontFamilyFallback, package: other[_package$1], overflow: other.overflow});
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t1, t0$6, t1$, t0$7, t1$0, t0$8, t1$1, t0$9, t0$10, t0$11;
      if (!(t !== null)) dart.assertFailed(null, I[5], 1047, 12, "t != null");
      if (!(a == null || b == null || a.inherit === b.inherit)) dart.assertFailed(null, I[5], 1048, 12, "a == null || b == null || a.inherit == b.inherit");
      if (a == null && b == null) {
        return null;
      }
      let lerpDebugLabel = null;
      if (!dart.fn(() => {
        let t0, t0$, t0$0, t0$1;
        lerpDebugLabel = "lerp(" + dart.str((t0$ = (t0 = a, t0 == null ? null : t0.debugLabel), t0$ == null ? "unknown" : t0$)) + " ⎯" + t[$toStringAsFixed](1) + "→ " + dart.str((t0$1 = (t0$0 = b, t0$0 == null ? null : t0$0.debugLabel), t0$1 == null ? "unknown" : t0$1)) + ")";
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[5], 1054, 12, "() {\n      lerpDebugLabel = 'lerp(${a?.debugLabel ?? _kDefaultDebugLabel} ⎯${t.toStringAsFixed(1)}→ ${b?.debugLabel ?? _kDefaultDebugLabel})';\n      return true;\n    }()");
      if (a == null) {
        return new text_style.TextStyle.new({inherit: dart.nullCheck(b).inherit, color: ui.Color.lerp(null, b.color, t), backgroundColor: ui.Color.lerp(null, b.backgroundColor, t), fontSize: t < 0.5 ? null : b.fontSize, fontWeight: ui.FontWeight.lerp(null, b.fontWeight, t), fontStyle: t < 0.5 ? null : b.fontStyle, letterSpacing: t < 0.5 ? null : b.letterSpacing, wordSpacing: t < 0.5 ? null : b.wordSpacing, textBaseline: t < 0.5 ? null : b.textBaseline, height: t < 0.5 ? null : b.height, leadingDistribution: t < 0.5 ? null : b.leadingDistribution, locale: t < 0.5 ? null : b.locale, foreground: t < 0.5 ? null : b.foreground, background: t < 0.5 ? null : b.background, shadows: t < 0.5 ? null : b.shadows, fontFeatures: t < 0.5 ? null : b.fontFeatures, decoration: t < 0.5 ? null : b.decoration, decorationColor: ui.Color.lerp(null, b.decorationColor, t), decorationStyle: t < 0.5 ? null : b.decorationStyle, decorationThickness: t < 0.5 ? null : b.decorationThickness, debugLabel: lerpDebugLabel, fontFamily: t < 0.5 ? null : b[_fontFamily], fontFamilyFallback: t < 0.5 ? null : b.fontFamilyFallback, package: t < 0.5 ? null : b[_package$1], overflow: t < 0.5 ? null : b.overflow});
      }
      if (b == null) {
        return new text_style.TextStyle.new({inherit: a.inherit, color: ui.Color.lerp(a.color, null, t), backgroundColor: ui.Color.lerp(null, a.backgroundColor, t), fontSize: t < 0.5 ? a.fontSize : null, fontWeight: ui.FontWeight.lerp(a.fontWeight, null, t), fontStyle: t < 0.5 ? a.fontStyle : null, letterSpacing: t < 0.5 ? a.letterSpacing : null, wordSpacing: t < 0.5 ? a.wordSpacing : null, textBaseline: t < 0.5 ? a.textBaseline : null, height: t < 0.5 ? a.height : null, leadingDistribution: t < 0.5 ? a.leadingDistribution : null, locale: t < 0.5 ? a.locale : null, foreground: t < 0.5 ? a.foreground : null, background: t < 0.5 ? a.background : null, shadows: t < 0.5 ? a.shadows : null, fontFeatures: t < 0.5 ? a.fontFeatures : null, decoration: t < 0.5 ? a.decoration : null, decorationColor: ui.Color.lerp(a.decorationColor, null, t), decorationStyle: t < 0.5 ? a.decorationStyle : null, decorationThickness: t < 0.5 ? a.decorationThickness : null, debugLabel: lerpDebugLabel, fontFamily: t < 0.5 ? a[_fontFamily] : null, fontFamilyFallback: t < 0.5 ? a.fontFamilyFallback : null, package: t < 0.5 ? a[_package$1] : null, overflow: t < 0.5 ? a.overflow : null});
      }
      return new text_style.TextStyle.new({inherit: b.inherit, color: a.foreground == null && b.foreground == null ? ui.Color.lerp(a.color, b.color, t) : null, backgroundColor: a.background == null && b.background == null ? ui.Color.lerp(a.backgroundColor, b.backgroundColor, t) : null, fontSize: ui.lerpDouble((t0 = a.fontSize, t0 == null ? b.fontSize : t0), (t0$ = b.fontSize, t0$ == null ? a.fontSize : t0$), t), fontWeight: ui.FontWeight.lerp(a.fontWeight, b.fontWeight, t), fontStyle: t < 0.5 ? a.fontStyle : b.fontStyle, letterSpacing: ui.lerpDouble((t0$0 = a.letterSpacing, t0$0 == null ? b.letterSpacing : t0$0), (t0$1 = b.letterSpacing, t0$1 == null ? a.letterSpacing : t0$1), t), wordSpacing: ui.lerpDouble((t0$2 = a.wordSpacing, t0$2 == null ? b.wordSpacing : t0$2), (t0$3 = b.wordSpacing, t0$3 == null ? a.wordSpacing : t0$3), t), textBaseline: t < 0.5 ? a.textBaseline : b.textBaseline, height: ui.lerpDouble((t0$4 = a.height, t0$4 == null ? b.height : t0$4), (t0$5 = b.height, t0$5 == null ? a.height : t0$5), t), leadingDistribution: t < 0.5 ? a.leadingDistribution : b.leadingDistribution, locale: t < 0.5 ? a.locale : b.locale, foreground: a.foreground != null || b.foreground != null ? t < 0.5 ? (t0$6 = a.foreground, t0$6 == null ? (t1 = ui.Paint.new(), (() => {
          t1.color = dart.nullCheck(a.color);
          return t1;
        })()) : t0$6) : (t0$7 = b.foreground, t0$7 == null ? (t1$ = ui.Paint.new(), (() => {
          t1$.color = dart.nullCheck(b.color);
          return t1$;
        })()) : t0$7) : null, background: a.background != null || b.background != null ? t < 0.5 ? (t0$8 = a.background, t0$8 == null ? (t1$0 = ui.Paint.new(), (() => {
          t1$0.color = dart.nullCheck(a.backgroundColor);
          return t1$0;
        })()) : t0$8) : (t0$9 = b.background, t0$9 == null ? (t1$1 = ui.Paint.new(), (() => {
          t1$1.color = dart.nullCheck(b.backgroundColor);
          return t1$1;
        })()) : t0$9) : null, shadows: t < 0.5 ? a.shadows : b.shadows, fontFeatures: t < 0.5 ? a.fontFeatures : b.fontFeatures, decoration: t < 0.5 ? a.decoration : b.decoration, decorationColor: ui.Color.lerp(a.decorationColor, b.decorationColor, t), decorationStyle: t < 0.5 ? a.decorationStyle : b.decorationStyle, decorationThickness: ui.lerpDouble((t0$10 = a.decorationThickness, t0$10 == null ? b.decorationThickness : t0$10), (t0$11 = b.decorationThickness, t0$11 == null ? a.decorationThickness : t0$11), t), debugLabel: lerpDebugLabel, fontFamily: t < 0.5 ? a[_fontFamily] : b[_fontFamily], fontFamilyFallback: t < 0.5 ? a.fontFamilyFallback : b.fontFamilyFallback, package: t < 0.5 ? a[_package$1] : b[_package$1], overflow: t < 0.5 ? a.overflow : b.overflow});
    }
    getTextStyle(opts) {
      let t1, t0;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      return ui.TextStyle.new({color: this.color, decoration: this.decoration, decorationColor: this.decorationColor, decorationStyle: this.decorationStyle, decorationThickness: this.decorationThickness, fontWeight: this.fontWeight, fontStyle: this.fontStyle, textBaseline: this.textBaseline, leadingDistribution: this.leadingDistribution, fontFamily: this.fontFamily, fontFamilyFallback: this.fontFamilyFallback, fontSize: this.fontSize == null ? null : dart.nullCheck(this.fontSize) * textScaleFactor, letterSpacing: this.letterSpacing, wordSpacing: this.wordSpacing, height: this.height, locale: this.locale, foreground: this.foreground, background: (t0 = this.background, t0 == null ? this.backgroundColor != null ? (t1 = ui.Paint.new(), (() => {
          t1.color = dart.nullCheck(this.backgroundColor);
          return t1;
        })()) : null : t0), shadows: this.shadows, fontFeatures: this.fontFeatures});
    }
    getParagraphStyle(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      if (!(textScaleFactor !== null)) dart.assertFailed(null, I[5], 1208, 12, "textScaleFactor != null");
      if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, I[5], 1209, 12, "maxLines == null || maxLines > 0");
      let leadingDistribution = this.leadingDistribution;
      let effectiveTextHeightBehavior = (t0 = textHeightBehavior, t0 == null ? leadingDistribution == null ? null : new ui.TextHeightBehavior.new({leadingDistribution: leadingDistribution}) : t0);
      return ui.ParagraphStyle.new({textAlign: textAlign, textDirection: textDirection, fontWeight: (t0$ = fontWeight, t0$ == null ? this.fontWeight : t0$), fontStyle: (t0$0 = fontStyle, t0$0 == null ? this.fontStyle : t0$0), fontFamily: (t0$1 = fontFamily, t0$1 == null ? this.fontFamily : t0$1), fontSize: dart.notNull((t0$3 = (t0$2 = fontSize, t0$2 == null ? this.fontSize : t0$2), t0$3 == null ? 14 : t0$3)) * textScaleFactor, height: (t0$4 = height, t0$4 == null ? this.height : t0$4), textHeightBehavior: effectiveTextHeightBehavior, strutStyle: strutStyle == null ? null : ui.StrutStyle.new({fontFamily: strutStyle.fontFamily, fontFamilyFallback: strutStyle.fontFamilyFallback, fontSize: strutStyle.fontSize == null ? null : dart.nullCheck(strutStyle.fontSize) * textScaleFactor, height: strutStyle.height, leading: strutStyle.leading, fontWeight: strutStyle.fontWeight, fontStyle: strutStyle.fontStyle, forceStrutHeight: strutStyle.forceStrutHeight}), maxLines: maxLines, ellipsis: ellipsis, locale: locale});
    }
    compareTo(other) {
      if (this === other) return basic_types.RenderComparison.identical;
      if (this.inherit !== other.inherit || this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || this.fontStyle != other.fontStyle || this.letterSpacing != other.letterSpacing || this.wordSpacing != other.wordSpacing || this.textBaseline != other.textBaseline || this.height != other.height || this.leadingDistribution != other.leadingDistribution || !dart.equals(this.locale, other.locale) || !dart.equals(this.foreground, other.foreground) || !dart.equals(this.background, other.background) || !collections.listEquals(ui.Shadow, this.shadows, other.shadows) || !collections.listEquals(ui.FontFeature, this.fontFeatures, other.fontFeatures) || !collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback) || this.overflow != other.overflow) return basic_types.RenderComparison.layout;
      if (!dart.equals(this.color, other.color) || !dart.equals(this.backgroundColor, other.backgroundColor) || !dart.equals(this.decoration, other.decoration) || !dart.equals(this.decorationColor, other.decorationColor) || this.decorationStyle != other.decorationStyle || this.decorationThickness != other.decorationThickness) return basic_types.RenderComparison.paint;
      return basic_types.RenderComparison.identical;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return text_style.TextStyle.is(other) && other.inherit === this.inherit && dart.equals(other.color, this.color) && dart.equals(other.backgroundColor, this.backgroundColor) && other.fontSize == this.fontSize && dart.equals(other.fontWeight, this.fontWeight) && other.fontStyle == this.fontStyle && other.letterSpacing == this.letterSpacing && other.wordSpacing == this.wordSpacing && other.textBaseline == this.textBaseline && other.height == this.height && other.leadingDistribution == this.leadingDistribution && dart.equals(other.locale, this.locale) && dart.equals(other.foreground, this.foreground) && dart.equals(other.background, this.background) && collections.listEquals(ui.Shadow, other.shadows, this.shadows) && collections.listEquals(ui.FontFeature, other.fontFeatures, this.fontFeatures) && dart.equals(other.decoration, this.decoration) && dart.equals(other.decorationColor, this.decorationColor) && other.decorationStyle == this.decorationStyle && other.decorationThickness == this.decorationThickness && other.fontFamily == this.fontFamily && collections.listEquals(core.String, other.fontFamilyFallback, this.fontFamilyFallback) && other[_package$1] == this[_package$1] && other.overflow == this.overflow;
    }
    get hashCode() {
      return ui.hashList(T.JSArrayOfObjectN().of([this.inherit, this.color, this.backgroundColor, this.fontSize, this.fontWeight, this.fontStyle, this.letterSpacing, this.wordSpacing, this.textBaseline, this.height, this.leadingDistribution, this.locale, this.foreground, this.background, ui.hashList(this.shadows), ui.hashList(this.fontFeatures), this.decoration, this.decorationColor, this.decorationStyle, this.decorationThickness, this.fontFamily, ui.hashList(this.fontFamilyFallback), this[_package$1], this.overflow]));
    }
    toStringShort() {
      return object.objectRuntimeType(this, "TextStyle");
    }
    debugFillProperties(properties, opts) {
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new diagnostics.MessageProperty.new(prefix + "debugLabel", dart.nullCheck(this.debugLabel)));
      let styles = T.JSArrayOfDiagnosticsNode().of([new colors.ColorProperty.new(prefix + "color", this.color, {defaultValue: null}), new colors.ColorProperty.new(prefix + "backgroundColor", this.backgroundColor, {defaultValue: null}), new diagnostics.StringProperty.new(prefix + "family", this.fontFamily, {defaultValue: null, quoted: false}), new (T.IterablePropertyOfString()).new(prefix + "familyFallback", this.fontFamilyFallback, {defaultValue: null}), new diagnostics.DoubleProperty.new(prefix + "size", this.fontSize, {defaultValue: null})]);
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = dart.str(dart.nullCheck(this.fontWeight).index + 1) + "00";
      }
      styles[$add](new (T.DiagnosticsPropertyOfFontWeight()).new(prefix + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (T.EnumPropertyOfFontStyle()).new(prefix + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(prefix + "letterSpacing", this.letterSpacing, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(prefix + "wordSpacing", this.wordSpacing, {defaultValue: null}));
      styles[$add](new (T.EnumPropertyOfTextBaseline()).new(prefix + "baseline", this.textBaseline, {defaultValue: null}));
      styles[$add](new diagnostics.DoubleProperty.new(prefix + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new (T.EnumPropertyOfTextLeadingDistribution()).new(prefix + "leadingDistribution", this.leadingDistribution, {defaultValue: null}));
      styles[$add](new (T.DiagnosticsPropertyOfLocale()).new(prefix + "locale", this.locale, {defaultValue: null}));
      styles[$add](new (T.DiagnosticsPropertyOfPaint()).new(prefix + "foreground", this.foreground, {defaultValue: null}));
      styles[$add](new (T.DiagnosticsPropertyOfPaint()).new(prefix + "background", this.background, {defaultValue: null}));
      if (this.decoration != null || this.decorationColor != null || this.decorationStyle != null || this.decorationThickness != null) {
        let decorationDescription = T.JSArrayOfString().of([]);
        if (this.decorationStyle != null) decorationDescription[$add](core['EnumName|get#name'](dart.nullCheck(this.decorationStyle)));
        styles[$add](new colors.ColorProperty.new(prefix + "decorationColor", this.decorationColor, {defaultValue: null, level: diagnostics.DiagnosticLevel.fine}));
        if (this.decorationColor != null) decorationDescription[$add](dart.str(this.decorationColor));
        styles[$add](new (T.DiagnosticsPropertyOfTextDecoration()).new(prefix + "decoration", this.decoration, {defaultValue: null, level: diagnostics.DiagnosticLevel.hidden}));
        if (this.decoration != null) decorationDescription[$add](dart.str(this.decoration));
        if (!decorationDescription[$isNotEmpty]) dart.assertFailed(null, I[5], 1396, 14, "decorationDescription.isNotEmpty");
        styles[$add](new diagnostics.MessageProperty.new(prefix + "decoration", decorationDescription[$join](" ")));
        styles[$add](new diagnostics.DoubleProperty.new(prefix + "decorationThickness", this.decorationThickness, {unit: "x", defaultValue: null}));
      }
      let styleSpecified = styles[$any](dart.fn(n => !n.isFiltered(diagnostics.DiagnosticLevel.info), T.DiagnosticsNodeTobool()));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new(prefix + "inherit", this.inherit, {level: !styleSpecified && this.inherit ? diagnostics.DiagnosticLevel.fine : diagnostics.DiagnosticLevel.info}));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!styleSpecified) properties.add(new diagnostics.FlagProperty.new("inherit", {value: this.inherit, ifTrue: prefix + "<all styles inherited>", ifFalse: prefix + "<no style specified>"}));
      styles[$add](new (T.EnumPropertyOfTextOverflow()).new(prefix + "overflow", this.overflow, {defaultValue: null}));
    }
  };
  (text_style.TextStyle.new = function(opts) {
    let inherit = opts && 'inherit' in opts ? opts.inherit : true;
    let color = opts && 'color' in opts ? opts.color : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
    let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leadingDistribution = opts && 'leadingDistribution' in opts ? opts.leadingDistribution : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let foreground = opts && 'foreground' in opts ? opts.foreground : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    let fontFeatures = opts && 'fontFeatures' in opts ? opts.fontFeatures : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
    let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
    let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let $package = opts && 'package' in opts ? opts.package : null;
    let overflow = opts && 'overflow' in opts ? opts.overflow : null;
    this[inherit$] = inherit;
    this[color$] = color;
    this[backgroundColor$] = backgroundColor;
    this[fontSize$0] = fontSize;
    this[fontWeight$0] = fontWeight;
    this[fontStyle$0] = fontStyle;
    this[letterSpacing$] = letterSpacing;
    this[wordSpacing$] = wordSpacing;
    this[textBaseline$] = textBaseline;
    this[height$0] = height;
    this[leadingDistribution$0] = leadingDistribution;
    this[locale$] = locale;
    this[foreground$] = foreground;
    this[background$] = background;
    this[shadows$] = shadows;
    this[fontFeatures$] = fontFeatures;
    this[decoration$] = decoration;
    this[decorationColor$] = decorationColor;
    this[decorationStyle$] = decorationStyle;
    this[decorationThickness$] = decorationThickness;
    this[debugLabel$0] = debugLabel;
    this[overflow$] = overflow;
    this[fontFamily$0] = $package == null ? fontFamily : "packages/" + dart.str($package) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback$0] = fontFamilyFallback;
    this[_package$0] = $package;
    if (!(inherit !== null)) dart.assertFailed(null, I[5], 498, 15, "inherit != null");
    if (!(color == null || foreground == null)) dart.assertFailed(text_style._kColorForegroundWarning, I[5], 499, 15, "color == null || foreground == null");
    if (!(backgroundColor == null || background == null)) dart.assertFailed(text_style._kColorBackgroundWarning, I[5], 500, 15, "backgroundColor == null || background == null");
    ;
  }).prototype = text_style.TextStyle.prototype;
  dart.addTypeTests(text_style.TextStyle);
  dart.addTypeCaches(text_style.TextStyle);
  dart.setMethodSignature(text_style.TextStyle, () => ({
    __proto__: dart.getMethods(text_style.TextStyle.__proto__),
    copyWith: dart.fnType(text_style.TextStyle, [], {background: dart.nullable(ui.Paint), backgroundColor: dart.nullable(ui.Color), color: dart.nullable(ui.Color), debugLabel: dart.nullable(core.String), decoration: dart.nullable(ui.TextDecoration), decorationColor: dart.nullable(ui.Color), decorationStyle: dart.nullable(ui.TextDecorationStyle), decorationThickness: dart.nullable(core.double), fontFamily: dart.nullable(core.String), fontFamilyFallback: dart.nullable(core.List$(core.String)), fontFeatures: dart.nullable(core.List$(ui.FontFeature)), fontSize: dart.nullable(core.double), fontStyle: dart.nullable(ui.FontStyle), fontWeight: dart.nullable(ui.FontWeight), foreground: dart.nullable(ui.Paint), height: dart.nullable(core.double), inherit: dart.nullable(core.bool), leadingDistribution: dart.nullable(ui.TextLeadingDistribution), letterSpacing: dart.nullable(core.double), locale: dart.nullable(ui.Locale), overflow: dart.nullable(text_painter.TextOverflow), package: dart.nullable(core.String), shadows: dart.nullable(core.List$(ui.Shadow)), textBaseline: dart.nullable(ui.TextBaseline), wordSpacing: dart.nullable(core.double)}, {}),
    apply: dart.fnType(text_style.TextStyle, [], {backgroundColor: dart.nullable(ui.Color), color: dart.nullable(ui.Color), decoration: dart.nullable(ui.TextDecoration), decorationColor: dart.nullable(ui.Color), decorationStyle: dart.nullable(ui.TextDecorationStyle), decorationThicknessDelta: core.double, decorationThicknessFactor: core.double, fontFamily: dart.nullable(core.String), fontFamilyFallback: dart.nullable(core.List$(core.String)), fontFeatures: dart.nullable(core.List$(ui.FontFeature)), fontSizeDelta: core.double, fontSizeFactor: core.double, fontStyle: dart.nullable(ui.FontStyle), fontWeightDelta: core.int, heightDelta: core.double, heightFactor: core.double, leadingDistribution: dart.nullable(ui.TextLeadingDistribution), letterSpacingDelta: core.double, letterSpacingFactor: core.double, locale: dart.nullable(ui.Locale), overflow: dart.nullable(text_painter.TextOverflow), package: dart.nullable(core.String), shadows: dart.nullable(core.List$(ui.Shadow)), textBaseline: dart.nullable(ui.TextBaseline), wordSpacingDelta: core.double, wordSpacingFactor: core.double}, {}),
    merge: dart.fnType(text_style.TextStyle, [dart.nullable(text_style.TextStyle)]),
    getTextStyle: dart.fnType(ui.TextStyle, [], {textScaleFactor: core.double}, {}),
    getParagraphStyle: dart.fnType(ui.ParagraphStyle, [], {ellipsis: dart.nullable(core.String), fontFamily: dart.nullable(core.String), fontSize: dart.nullable(core.double), fontStyle: dart.nullable(ui.FontStyle), fontWeight: dart.nullable(ui.FontWeight), height: dart.nullable(core.double), locale: dart.nullable(ui.Locale), maxLines: dart.nullable(core.int), strutStyle: dart.nullable(strut_style.StrutStyle), textAlign: dart.nullable(ui.TextAlign), textDirection: dart.nullable(ui.TextDirection), textHeightBehavior: dart.nullable(ui.TextHeightBehavior), textScaleFactor: core.double}, {}),
    compareTo: dart.fnType(basic_types.RenderComparison, [text_style.TextStyle]),
    debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String}, {})
  }));
  dart.setStaticMethodSignature(text_style.TextStyle, () => ['lerp']);
  dart.setGetterSignature(text_style.TextStyle, () => ({
    __proto__: dart.getGetters(text_style.TextStyle.__proto__),
    fontFamilyFallback: dart.nullable(core.List$(core.String)),
    [_fontFamily]: dart.nullable(core.String)
  }));
  dart.setLibraryUri(text_style.TextStyle, I[6]);
  dart.setFieldSignature(text_style.TextStyle, () => ({
    __proto__: dart.getFields(text_style.TextStyle.__proto__),
    inherit: dart.finalFieldType(core.bool),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    fontFamily: dart.finalFieldType(dart.nullable(core.String)),
    [_fontFamilyFallback$1]: dart.finalFieldType(dart.nullable(core.List$(core.String))),
    [_package$1]: dart.finalFieldType(dart.nullable(core.String)),
    fontSize: dart.finalFieldType(dart.nullable(core.double)),
    fontWeight: dart.finalFieldType(dart.nullable(ui.FontWeight)),
    fontStyle: dart.finalFieldType(dart.nullable(ui.FontStyle)),
    letterSpacing: dart.finalFieldType(dart.nullable(core.double)),
    wordSpacing: dart.finalFieldType(dart.nullable(core.double)),
    textBaseline: dart.finalFieldType(dart.nullable(ui.TextBaseline)),
    height: dart.finalFieldType(dart.nullable(core.double)),
    leadingDistribution: dart.finalFieldType(dart.nullable(ui.TextLeadingDistribution)),
    locale: dart.finalFieldType(dart.nullable(ui.Locale)),
    foreground: dart.finalFieldType(dart.nullable(ui.Paint)),
    background: dart.finalFieldType(dart.nullable(ui.Paint)),
    decoration: dart.finalFieldType(dart.nullable(ui.TextDecoration)),
    decorationColor: dart.finalFieldType(dart.nullable(ui.Color)),
    decorationStyle: dart.finalFieldType(dart.nullable(ui.TextDecorationStyle)),
    decorationThickness: dart.finalFieldType(dart.nullable(core.double)),
    debugLabel: dart.finalFieldType(dart.nullable(core.String)),
    shadows: dart.finalFieldType(dart.nullable(core.List$(ui.Shadow))),
    fontFeatures: dart.finalFieldType(dart.nullable(core.List$(ui.FontFeature))),
    overflow: dart.finalFieldType(dart.nullable(text_painter.TextOverflow))
  }));
  dart.defineExtensionMethods(text_style.TextStyle, ['_equals']);
  dart.defineExtensionAccessors(text_style.TextStyle, ['hashCode']);
  dart.defineLazy(text_style, {
    /*text_style._kDefaultDebugLabel*/get _kDefaultDebugLabel() {
      return "unknown";
    },
    /*text_style._kColorForegroundWarning*/get _kColorForegroundWarning() {
      return "Cannot provide both a color and a foreground\nThe color argument is just a shorthand for \"foreground: new Paint()..color = color\".";
    },
    /*text_style._kColorBackgroundWarning*/get _kColorBackgroundWarning() {
      return "Cannot provide both a backgroundColor and a background\nThe backgroundColor argument is just a shorthand for \"background: new Paint()..color = color\".";
    },
    /*text_style._kDefaultFontSize*/get _kDefaultFontSize() {
      return 14;
    }
  }, false);
  var text$ = dart.privateName(text_span, "TextSpan.text");
  var children$ = dart.privateName(text_span, "TextSpan.children");
  var recognizer$ = dart.privateName(text_span, "TextSpan.recognizer");
  var mouseCursor$ = dart.privateName(text_span, "TextSpan.mouseCursor");
  var onEnter$ = dart.privateName(text_span, "TextSpan.onEnter");
  var onExit$ = dart.privateName(text_span, "TextSpan.onExit");
  var semanticsLabel$ = dart.privateName(text_span, "TextSpan.semanticsLabel");
  var locale$0 = dart.privateName(text_span, "TextSpan.locale");
  var spellOut$ = dart.privateName(text_span, "TextSpan.spellOut");
  text_span.TextSpan = class TextSpan extends inline_span.InlineSpan {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get recognizer() {
      return this[recognizer$];
    }
    set recognizer(value) {
      super.recognizer = value;
    }
    get mouseCursor() {
      return this[mouseCursor$];
    }
    set mouseCursor(value) {
      super.mouseCursor = value;
    }
    get onEnter() {
      return this[onEnter$];
    }
    set onEnter(value) {
      super.onEnter = value;
    }
    get onExit() {
      return this[onExit$];
    }
    set onExit(value) {
      super.onExit = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    get locale() {
      return this[locale$0];
    }
    set locale(value) {
      super.locale = value;
    }
    get spellOut() {
      return this[spellOut$];
    }
    set spellOut(value) {
      super.spellOut = value;
    }
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
      let mouseCursor = opts && 'mouseCursor' in opts ? opts.mouseCursor : null;
      let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
      let onExit = opts && 'onExit' in opts ? opts.onExit : null;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let spellOut = opts && 'spellOut' in opts ? opts.spellOut : null;
      return new text_span.TextSpan.new({text: text, children: children, style: style, recognizer: recognizer, mouseCursor: mouseCursor, onEnter: onEnter, onExit: onExit, semanticsLabel: semanticsLabel, locale: locale, spellOut: spellOut});
    }
    get cursor() {
      return this.mouseCursor;
    }
    get validForMouseTracker() {
      return true;
    }
    handleEvent(event, entry) {
      let t0;
      if (events.PointerDownEvent.is(event)) {
        t0 = this.recognizer;
        t0 == null ? null : t0.addPointer(event);
      }
    }
    build(builder, opts) {
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let dimensions = opts && 'dimensions' in opts ? opts.dimensions : null;
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[7], 271, 12, "debugAssertIsValid()");
      let hasStyle = this.style != null;
      if (hasStyle) builder.pushStyle(dart.nullCheck(this.style).getTextStyle({textScaleFactor: textScaleFactor}));
      if (this.text != null) {
        try {
          builder.addText(dart.nullCheck(this.text));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.ArgumentError.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "painting library", context: new assertions.ErrorDescription.new("while building a TextSpan")}));
            builder.addText("�");
          } else
            throw e;
        }
      }
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          if (!(child !== null)) dart.assertFailed(null, I[7], 291, 16, "child != null");
          child.build(builder, {textScaleFactor: textScaleFactor, dimensions: dimensions});
        }
      }
      if (hasStyle) builder.pop();
    }
    visitChildren(visitor) {
      if (this.text != null) {
        if (!visitor(this)) return false;
      }
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          if (!child.visitChildren(visitor)) return false;
        }
      }
      return true;
    }
    getSpanForPositionVisitor(position, offset) {
      if (this.text == null) {
        return null;
      }
      let affinity = position.affinity;
      let targetOffset = position.offset;
      let endOffset = offset.value + dart.nullCheck(this.text).length;
      if (offset.value === targetOffset && affinity === ui.TextAffinity.downstream || offset.value < targetOffset && targetOffset < endOffset || endOffset === targetOffset && affinity === ui.TextAffinity.upstream) {
        return this;
      }
      offset.increment(dart.nullCheck(this.text).length);
      return null;
    }
    computeToPlainText(buffer, opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      let includePlaceholders = opts && 'includePlaceholders' in opts ? opts.includePlaceholders : true;
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[7], 347, 12, "debugAssertIsValid()");
      if (this.semanticsLabel != null && includeSemanticsLabels) {
        buffer.write(this.semanticsLabel);
      } else if (this.text != null) {
        buffer.write(this.text);
      }
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          child.computeToPlainText(buffer, {includeSemanticsLabels: includeSemanticsLabels, includePlaceholders: includePlaceholders});
        }
      }
    }
    computeSemanticsInformation(collector, opts) {
      let t1, t1$, t1$0, t1$1;
      let inheritedLocale = opts && 'inheritedLocale' in opts ? opts.inheritedLocale : null;
      let inheritedSpellOut = opts && 'inheritedSpellOut' in opts ? opts.inheritedSpellOut : false;
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[7], 369, 12, "debugAssertIsValid()");
      let effectiveLocale = (t1 = this.locale, t1 == null ? inheritedLocale : t1);
      let effectiveSpellOut = (t1$ = this.spellOut, t1$ == null ? inheritedSpellOut : t1$);
      if (this.text != null) {
        let textLength = (t1$1 = (t1$0 = this.semanticsLabel, t1$0 == null ? null : t1$0.length), t1$1 == null ? dart.nullCheck(this.text).length : t1$1);
        collector[$add](new inline_span.InlineSpanSemanticsInformation.new(dart.nullCheck(this.text), {stringAttributes: (() => {
            let t1 = T.JSArrayOfStringAttribute().of([]);
            if (effectiveSpellOut && textLength > 0) t1.push(new ui.SpellOutStringAttribute.new({range: new ui.TextRange.new({start: 0, end: textLength})}));
            if (effectiveLocale != null && textLength > 0) t1.push(new ui.LocaleStringAttribute.new({locale: effectiveLocale, range: new ui.TextRange.new({start: 0, end: textLength})}));
            return t1;
          })(), semanticsLabel: this.semanticsLabel, recognizer: this.recognizer}));
      }
      if (this.children != null) {
        for (let child of dart.nullCheck(this.children)) {
          if (text_span.TextSpan.is(child)) {
            child.computeSemanticsInformation(collector, {inheritedLocale: effectiveLocale, inheritedSpellOut: effectiveSpellOut});
          } else {
            child.computeSemanticsInformation(collector);
          }
        }
      }
    }
    codeUnitAtVisitor(index, offset) {
      if (this.text == null) {
        return null;
      }
      if (index - offset.value < dart.nullCheck(this.text).length) {
        return dart.nullCheck(this.text)[$codeUnitAt](index - offset.value);
      }
      offset.increment(dart.nullCheck(this.text).length);
      return null;
    }
    describeSemantics(offset, semanticsOffsets, semanticsElements) {
      let t2, t2$;
      if (this.recognizer != null && (tap.TapGestureRecognizer.is(this.recognizer) || long_press.LongPressGestureRecognizer.is(this.recognizer))) {
        let length = (t2$ = (t2 = this.semanticsLabel, t2 == null ? null : t2.length), t2$ == null ? dart.nullCheck(this.text).length : t2$);
        semanticsOffsets[$add](offset.value);
        semanticsOffsets[$add](offset.value + length);
        semanticsElements[$add](this.recognizer);
      }
      offset.increment(this.text != null ? dart.nullCheck(this.text).length : 0);
    }
    debugAssertIsValid() {
      if (!dart.fn(() => {
        if (this.children != null) {
          for (let child of dart.nullCheck(this.children)) {
            if (child === null) {
              dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("TextSpan contains a null child."), new assertions.ErrorDescription.new("A TextSpan object with a non-null child list should not have any nulls in its child list."), this.toDiagnosticsNode({name: "The full text in question was", style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
            }
            if (!child.debugAssertIsValid()) dart.assertFailed(null, I[7], 461, 18, "child.debugAssertIsValid()");
          }
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[7], 446, 12, "() {\n      if (children != null) {\n        for (final InlineSpan child in children!) {\n          if (child == null) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('TextSpan contains a null child.'),\n              ErrorDescription(\n                'A TextSpan object with a non-null child list should not have any nulls in its child list.',\n              ),\n              toDiagnosticsNode(\n                name: 'The full text in question was',\n                style: DiagnosticsTreeStyle.errorProperty,\n              ),\n            ]);\n          }\n          assert(child.debugAssertIsValid());\n        }\n      }\n      return true;\n    }()");
      return super.debugAssertIsValid();
    }
    compareTo(other) {
      let t2, t2$;
      if (this === other) return basic_types.RenderComparison.identical;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return basic_types.RenderComparison.layout;
      let textSpan = text_span.TextSpan.as(other);
      if (textSpan.text != this.text || (t2 = this.children, t2 == null ? null : t2[$length]) != (t2$ = textSpan.children, t2$ == null ? null : t2$[$length]) || this.style == null !== (textSpan.style == null)) return basic_types.RenderComparison.layout;
      let result = dart.equals(this.recognizer, textSpan.recognizer) ? basic_types.RenderComparison.identical : basic_types.RenderComparison.metadata;
      if (this.style != null) {
        let candidate = dart.nullCheck(this.style).compareTo(dart.nullCheck(textSpan.style));
        if (candidate.index > result.index) result = candidate;
        if (result === basic_types.RenderComparison.layout) return result;
      }
      if (this.children != null) {
        for (let index = 0; index < dart.nullCheck(this.children)[$length]; index = index + 1) {
          let candidate = dart.nullCheck(this.children)[$_get](index).compareTo(dart.nullCheck(textSpan.children)[$_get](index));
          if (candidate.index > result.index) result = candidate;
          if (result === basic_types.RenderComparison.layout) return result;
        }
      }
      return result;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      if (!super._equals(other)) return false;
      return text_span.TextSpan.is(other) && other.text == this.text && dart.equals(other.recognizer, this.recognizer) && other.semanticsLabel == this.semanticsLabel && dart.equals(this.onEnter, other.onEnter) && dart.equals(this.onExit, other.onExit) && this.mouseCursor[$_equals](other.mouseCursor) && collections.listEquals(inline_span.InlineSpan, other.children, this.children);
    }
    get hashCode() {
      return ui.hashValues(super.hashCode, this.text, this.recognizer, this.semanticsLabel, this.onEnter, this.onExit, this.mouseCursor, ui.hashList(this.children));
    }
    toStringShort() {
      return object.objectRuntimeType(this, "TextSpan");
    }
    debugFillProperties(properties) {
      let t2;
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("text", this.text, {showName: false, defaultValue: null}));
      if (this.style == null && this.text == null && this.children == null) properties.add(diagnostics.DiagnosticsNode.message("(empty)"));
      properties.add(new (T.DiagnosticsPropertyOfGestureRecognizer()).new("recognizer", this.recognizer, {description: (t2 = this.recognizer, t2 == null ? null : dart.runtimeType(t2).toString()), defaultValue: null}));
      properties.add(new (T.FlagsSummaryOfFunctionN()).new("callbacks", new (T.IdentityMapOfString$FunctionN()).from(["enter", this.onEnter, "exit", this.onExit])));
      properties.add(new (T.DiagnosticsPropertyOfMouseCursor()).new("mouseCursor", this.cursor, {defaultValue: mouse_cursor.MouseCursor.defer}));
      if (this.semanticsLabel != null) {
        properties.add(new diagnostics.StringProperty.new("semanticsLabel", this.semanticsLabel));
      }
    }
    debugDescribeChildren() {
      if (this.children == null) return C[2] || CT.C2;
      return dart.nullCheck(this.children)[$map](diagnostics.DiagnosticsNode, dart.fn(child => {
        if (child !== null) {
          return child.toDiagnosticsNode();
        } else {
          return diagnostics.DiagnosticsNode.message("<null child>");
        }
      }, T.InlineSpanToDiagnosticsNode()))[$toList]();
    }
  };
  (text_span.TextSpan.new = function(opts) {
    let t0;
    let text = opts && 'text' in opts ? opts.text : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    let mouseCursor = opts && 'mouseCursor' in opts ? opts.mouseCursor : null;
    let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
    let onExit = opts && 'onExit' in opts ? opts.onExit : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let spellOut = opts && 'spellOut' in opts ? opts.spellOut : null;
    this[text$] = text;
    this[children$] = children;
    this[recognizer$] = recognizer;
    this[onEnter$] = onEnter;
    this[onExit$] = onExit;
    this[semanticsLabel$] = semanticsLabel;
    this[locale$0] = locale;
    this[spellOut$] = spellOut;
    this[mouseCursor$] = (t0 = mouseCursor, t0 == null ? recognizer == null ? mouse_cursor.MouseCursor.defer : mouse_cursor.SystemMouseCursors.click : t0);
    if (!!(text == null && semanticsLabel != null)) dart.assertFailed(null, I[7], 81, 15, "!(text == null && semanticsLabel != null)");
    text_span.TextSpan.__proto__.new.call(this, {style: style});
    ;
  }).prototype = text_span.TextSpan.prototype;
  dart.addTypeTests(text_span.TextSpan);
  dart.addTypeCaches(text_span.TextSpan);
  text_span.TextSpan[dart.implements] = () => [hit_test.HitTestTarget, mouse_tracking.MouseTrackerAnnotation];
  dart.setMethodSignature(text_span.TextSpan, () => ({
    __proto__: dart.getMethods(text_span.TextSpan.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestEntry]),
    build: dart.fnType(dart.void, [ui.ParagraphBuilder], {dimensions: dart.nullable(core.List$(text_painter.PlaceholderDimensions)), textScaleFactor: core.double}, {}),
    visitChildren: dart.fnType(core.bool, [dart.fnType(core.bool, [inline_span.InlineSpan])]),
    getSpanForPositionVisitor: dart.fnType(dart.nullable(inline_span.InlineSpan), [ui.TextPosition, inline_span.Accumulator]),
    computeToPlainText: dart.fnType(dart.void, [core.StringBuffer], {includePlaceholders: core.bool, includeSemanticsLabels: core.bool}, {}),
    computeSemanticsInformation: dart.fnType(dart.void, [core.List$(inline_span.InlineSpanSemanticsInformation)], {inheritedLocale: dart.nullable(ui.Locale), inheritedSpellOut: core.bool}, {}),
    codeUnitAtVisitor: dart.fnType(dart.nullable(core.int), [core.int, inline_span.Accumulator]),
    describeSemantics: dart.fnType(dart.void, [inline_span.Accumulator, core.List$(core.int), core.List]),
    compareTo: dart.fnType(basic_types.RenderComparison, [inline_span.InlineSpan])
  }));
  dart.setGetterSignature(text_span.TextSpan, () => ({
    __proto__: dart.getGetters(text_span.TextSpan.__proto__),
    cursor: mouse_cursor.MouseCursor,
    validForMouseTracker: core.bool
  }));
  dart.setLibraryUri(text_span.TextSpan, I[8]);
  dart.setFieldSignature(text_span.TextSpan, () => ({
    __proto__: dart.getFields(text_span.TextSpan.__proto__),
    text: dart.finalFieldType(dart.nullable(core.String)),
    children: dart.finalFieldType(dart.nullable(core.List$(inline_span.InlineSpan))),
    recognizer: dart.finalFieldType(dart.nullable(recognizer.GestureRecognizer)),
    mouseCursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    onEnter: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerEnterEvent]))),
    onExit: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [events.PointerExitEvent]))),
    semanticsLabel: dart.finalFieldType(dart.nullable(core.String)),
    locale: dart.finalFieldType(dart.nullable(ui.Locale)),
    spellOut: dart.finalFieldType(dart.nullable(core.bool))
  }));
  dart.defineExtensionMethods(text_span.TextSpan, ['_equals']);
  dart.defineExtensionAccessors(text_span.TextSpan, ['hashCode']);
  var _value$ = dart.privateName(inline_span, "_value");
  inline_span.Accumulator = class Accumulator extends core.Object {
    static ['_#new#tearOff'](_value = 0) {
      return new inline_span.Accumulator.new(_value);
    }
    get value() {
      return this[_value$];
    }
    increment(addend) {
      if (!(addend >= 0)) dart.assertFailed(null, I[0], 29, 12, "addend >= 0");
      this[_value$] = this[_value$] + addend;
    }
  };
  (inline_span.Accumulator.new = function(_value = 0) {
    this[_value$] = _value;
    ;
  }).prototype = inline_span.Accumulator.prototype;
  dart.addTypeTests(inline_span.Accumulator);
  dart.addTypeCaches(inline_span.Accumulator);
  dart.setMethodSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getMethods(inline_span.Accumulator.__proto__),
    increment: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getGetters(inline_span.Accumulator.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(inline_span.Accumulator, I[1]);
  dart.setFieldSignature(inline_span.Accumulator, () => ({
    __proto__: dart.getFields(inline_span.Accumulator.__proto__),
    [_value$]: dart.fieldType(core.int)
  }));
  var text$0 = dart.privateName(inline_span, "InlineSpanSemanticsInformation.text");
  var semanticsLabel$0 = dart.privateName(inline_span, "InlineSpanSemanticsInformation.semanticsLabel");
  var recognizer$0 = dart.privateName(inline_span, "InlineSpanSemanticsInformation.recognizer");
  var isPlaceholder$ = dart.privateName(inline_span, "InlineSpanSemanticsInformation.isPlaceholder");
  var requiresOwnNode = dart.privateName(inline_span, "InlineSpanSemanticsInformation.requiresOwnNode");
  var stringAttributes$ = dart.privateName(inline_span, "InlineSpanSemanticsInformation.stringAttributes");
  inline_span.InlineSpanSemanticsInformation = class InlineSpanSemanticsInformation extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$0];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    get recognizer() {
      return this[recognizer$0];
    }
    set recognizer(value) {
      super.recognizer = value;
    }
    get isPlaceholder() {
      return this[isPlaceholder$];
    }
    set isPlaceholder(value) {
      super.isPlaceholder = value;
    }
    get requiresOwnNode() {
      return this[requiresOwnNode];
    }
    set requiresOwnNode(value) {
      super.requiresOwnNode = value;
    }
    get stringAttributes() {
      return this[stringAttributes$];
    }
    set stringAttributes(value) {
      super.stringAttributes = value;
    }
    static ['_#new#tearOff'](text, opts) {
      let isPlaceholder = opts && 'isPlaceholder' in opts ? opts.isPlaceholder : false;
      let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
      let stringAttributes = opts && 'stringAttributes' in opts ? opts.stringAttributes : C[3] || CT.C3;
      let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
      return new inline_span.InlineSpanSemanticsInformation.new(text, {isPlaceholder: isPlaceholder, semanticsLabel: semanticsLabel, stringAttributes: stringAttributes, recognizer: recognizer});
    }
    _equals(other) {
      if (other == null) return false;
      return inline_span.InlineSpanSemanticsInformation.is(other) && other.text === this.text && other.semanticsLabel == this.semanticsLabel && dart.equals(other.recognizer, this.recognizer) && other.isPlaceholder === this.isPlaceholder && collections.listEquals(ui.StringAttribute, other.stringAttributes, this.stringAttributes);
    }
    get hashCode() {
      return ui.hashValues(this.text, this.semanticsLabel, this.recognizer, this.isPlaceholder);
    }
    toString() {
      return object.objectRuntimeType(this, "InlineSpanSemanticsInformation") + "{text: " + this.text + ", semanticsLabel: " + dart.str(this.semanticsLabel) + ", recognizer: " + dart.str(this.recognizer) + "}";
    }
  };
  (inline_span.InlineSpanSemanticsInformation.new = function(text, opts) {
    let isPlaceholder = opts && 'isPlaceholder' in opts ? opts.isPlaceholder : false;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let stringAttributes = opts && 'stringAttributes' in opts ? opts.stringAttributes : C[3] || CT.C3;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    this[text$0] = text;
    this[isPlaceholder$] = isPlaceholder;
    this[semanticsLabel$0] = semanticsLabel;
    this[stringAttributes$] = stringAttributes;
    this[recognizer$0] = recognizer;
    if (!(text !== null)) dart.assertFailed(null, I[0], 61, 15, "text != null");
    if (!(isPlaceholder !== null)) dart.assertFailed(null, I[0], 62, 15, "isPlaceholder != null");
    if (!(isPlaceholder === false || text === "￼" && semanticsLabel == null && recognizer == null)) dart.assertFailed(null, I[0], 63, 15, "isPlaceholder == false || (text == '\\uFFFC' && semanticsLabel == null && recognizer == null)");
    this[requiresOwnNode] = isPlaceholder || recognizer != null;
    ;
  }).prototype = inline_span.InlineSpanSemanticsInformation.prototype;
  dart.addTypeTests(inline_span.InlineSpanSemanticsInformation);
  dart.addTypeCaches(inline_span.InlineSpanSemanticsInformation);
  dart.setLibraryUri(inline_span.InlineSpanSemanticsInformation, I[1]);
  dart.setFieldSignature(inline_span.InlineSpanSemanticsInformation, () => ({
    __proto__: dart.getFields(inline_span.InlineSpanSemanticsInformation.__proto__),
    text: dart.finalFieldType(core.String),
    semanticsLabel: dart.finalFieldType(dart.nullable(core.String)),
    recognizer: dart.finalFieldType(dart.nullable(recognizer.GestureRecognizer)),
    isPlaceholder: dart.finalFieldType(core.bool),
    requiresOwnNode: dart.finalFieldType(core.bool),
    stringAttributes: dart.finalFieldType(core.List$(ui.StringAttribute))
  }));
  dart.setStaticFieldSignature(inline_span.InlineSpanSemanticsInformation, () => ['placeholder']);
  dart.defineExtensionMethods(inline_span.InlineSpanSemanticsInformation, ['_equals', 'toString']);
  dart.defineExtensionAccessors(inline_span.InlineSpanSemanticsInformation, ['hashCode']);
  dart.defineLazy(inline_span.InlineSpanSemanticsInformation, {
    /*inline_span.InlineSpanSemanticsInformation.placeholder*/get placeholder() {
      return C[4] || CT.C4;
    }
  }, false);
  inline_span.combineSemanticsInfo = function combineSemanticsInfo(infoList) {
    let t2;
    let combined = T.JSArrayOfInlineSpanSemanticsInformation().of([]);
    let workingText = "";
    let workingLabel = "";
    let workingAttributes = T.JSArrayOfStringAttribute().of([]);
    for (let info of infoList) {
      if (info.requiresOwnNode) {
        combined[$add](new inline_span.InlineSpanSemanticsInformation.new(workingText, {semanticsLabel: workingLabel, stringAttributes: workingAttributes}));
        workingText = "";
        workingLabel = "";
        workingAttributes = T.JSArrayOfStringAttribute().of([]);
        combined[$add](info);
      } else {
        workingText = workingText + info.text;
        let effectiveLabel = (t2 = info.semanticsLabel, t2 == null ? info.text : t2);
        for (let infoAttribute of info.stringAttributes) {
          workingAttributes[$add](infoAttribute.copy({range: new ui.TextRange.new({start: infoAttribute.range.start + workingLabel.length, end: infoAttribute.range.end + workingLabel.length})}));
        }
        workingLabel = workingLabel + effectiveLabel;
      }
    }
    combined[$add](new inline_span.InlineSpanSemanticsInformation.new(workingText, {semanticsLabel: workingLabel, stringAttributes: workingAttributes}));
    return combined;
  };
  var _name = dart.privateName(core, "_name");
  text_painter.TextOverflow = class TextOverflow extends core._Enum {
    toString() {
      return "TextOverflow." + this[_name];
    }
  };
  (text_painter.TextOverflow.new = function(index, name) {
    text_painter.TextOverflow.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_painter.TextOverflow.prototype;
  dart.addTypeTests(text_painter.TextOverflow);
  dart.addTypeCaches(text_painter.TextOverflow);
  dart.setLibraryUri(text_painter.TextOverflow, I[9]);
  dart.setStaticFieldSignature(text_painter.TextOverflow, () => ['values', 'clip', 'fade', 'ellipsis', 'visible']);
  dart.defineExtensionMethods(text_painter.TextOverflow, ['toString']);
  text_painter.TextOverflow.clip = C[5] || CT.C5;
  text_painter.TextOverflow.fade = C[6] || CT.C6;
  text_painter.TextOverflow.ellipsis = C[7] || CT.C7;
  text_painter.TextOverflow.visible = C[8] || CT.C8;
  text_painter.TextOverflow.values = C[9] || CT.C9;
  var size$ = dart.privateName(text_painter, "PlaceholderDimensions.size");
  var alignment$0 = dart.privateName(text_painter, "PlaceholderDimensions.alignment");
  var baselineOffset$ = dart.privateName(text_painter, "PlaceholderDimensions.baselineOffset");
  var baseline$0 = dart.privateName(text_painter, "PlaceholderDimensions.baseline");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  text_painter.PlaceholderDimensions = class PlaceholderDimensions extends core.Object {
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get baselineOffset() {
      return this[baselineOffset$];
    }
    set baselineOffset(value) {
      super.baselineOffset = value;
    }
    get baseline() {
      return this[baseline$0];
    }
    set baseline(value) {
      super.baseline = value;
    }
    static ['_#new#tearOff'](opts) {
      let size = opts && 'size' in opts ? opts.size : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let baseline = opts && 'baseline' in opts ? opts.baseline : null;
      let baselineOffset = opts && 'baselineOffset' in opts ? opts.baselineOffset : null;
      return new text_painter.PlaceholderDimensions.new({size: size, alignment: alignment, baseline: baseline, baselineOffset: baselineOffset});
    }
    toString() {
      return "PlaceholderDimensions(" + dart.str(this.size) + ", " + dart.str(this.baseline) + ")";
    }
  };
  (text_painter.PlaceholderDimensions.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let baselineOffset = opts && 'baselineOffset' in opts ? opts.baselineOffset : null;
    this[size$] = size;
    this[alignment$0] = alignment;
    this[baseline$0] = baseline;
    this[baselineOffset$] = baselineOffset;
    if (!(size !== null)) dart.assertFailed(null, I[10], 67, 15, "size != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[10], 68, 15, "alignment != null");
    ;
  }).prototype = text_painter.PlaceholderDimensions.prototype;
  dart.addTypeTests(text_painter.PlaceholderDimensions);
  dart.addTypeCaches(text_painter.PlaceholderDimensions);
  dart.setLibraryUri(text_painter.PlaceholderDimensions, I[9]);
  dart.setFieldSignature(text_painter.PlaceholderDimensions, () => ({
    __proto__: dart.getFields(text_painter.PlaceholderDimensions.__proto__),
    size: dart.finalFieldType(ui.Size),
    alignment: dart.finalFieldType(ui.PlaceholderAlignment),
    baselineOffset: dart.finalFieldType(dart.nullable(core.double)),
    baseline: dart.finalFieldType(dart.nullable(ui.TextBaseline))
  }));
  dart.setStaticFieldSignature(text_painter.PlaceholderDimensions, () => ['empty']);
  dart.defineExtensionMethods(text_painter.PlaceholderDimensions, ['toString']);
  dart.defineLazy(text_painter.PlaceholderDimensions, {
    /*text_painter.PlaceholderDimensions.empty*/get empty() {
      return C[10] || CT.C10;
    }
  }, false);
  text_painter.TextWidthBasis = class TextWidthBasis extends core._Enum {
    toString() {
      return "TextWidthBasis." + this[_name];
    }
  };
  (text_painter.TextWidthBasis.new = function(index, name) {
    text_painter.TextWidthBasis.__proto__.new.call(this, index, name);
    ;
  }).prototype = text_painter.TextWidthBasis.prototype;
  dart.addTypeTests(text_painter.TextWidthBasis);
  dart.addTypeCaches(text_painter.TextWidthBasis);
  dart.setLibraryUri(text_painter.TextWidthBasis, I[9]);
  dart.setStaticFieldSignature(text_painter.TextWidthBasis, () => ['values', 'parent', 'longestLine']);
  dart.defineExtensionMethods(text_painter.TextWidthBasis, ['toString']);
  text_painter.TextWidthBasis.parent = C[12] || CT.C12;
  text_painter.TextWidthBasis.longestLine = C[13] || CT.C13;
  text_painter.TextWidthBasis.values = C[14] || CT.C14;
  var offset$ = dart.privateName(text_painter, "_CaretMetrics.offset");
  var fullHeight$ = dart.privateName(text_painter, "_CaretMetrics.fullHeight");
  text_painter._CaretMetrics = class _CaretMetrics extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get fullHeight() {
      return this[fullHeight$];
    }
    set fullHeight(value) {
      super.fullHeight = value;
    }
    static ['_#new#tearOff'](opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let fullHeight = opts && 'fullHeight' in opts ? opts.fullHeight : null;
      return new text_painter._CaretMetrics.new({offset: offset, fullHeight: fullHeight});
    }
  };
  (text_painter._CaretMetrics.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let fullHeight = opts && 'fullHeight' in opts ? opts.fullHeight : null;
    this[offset$] = offset;
    this[fullHeight$] = fullHeight;
    ;
  }).prototype = text_painter._CaretMetrics.prototype;
  dart.addTypeTests(text_painter._CaretMetrics);
  dart.addTypeCaches(text_painter._CaretMetrics);
  dart.setLibraryUri(text_painter._CaretMetrics, I[9]);
  dart.setFieldSignature(text_painter._CaretMetrics, () => ({
    __proto__: dart.getFields(text_painter._CaretMetrics.__proto__),
    offset: dart.finalFieldType(ui.Offset),
    fullHeight: dart.finalFieldType(dart.nullable(core.double))
  }));
  var _paragraph = dart.privateName(text_painter, "_paragraph");
  var _rebuildParagraphForPaint = dart.privateName(text_painter, "_rebuildParagraphForPaint");
  var _inlinePlaceholderBoxes = dart.privateName(text_painter, "_inlinePlaceholderBoxes");
  var _inlinePlaceholderScales = dart.privateName(text_painter, "_inlinePlaceholderScales");
  var _placeholderDimensions = dart.privateName(text_painter, "_placeholderDimensions");
  var _layoutTemplate = dart.privateName(text_painter, "_layoutTemplate");
  var _lastMinWidth = dart.privateName(text_painter, "_lastMinWidth");
  var _lastMaxWidth = dart.privateName(text_painter, "_lastMaxWidth");
  var __TextPainter__caretMetrics = dart.privateName(text_painter, "_#TextPainter#_caretMetrics");
  var _previousCaretPosition = dart.privateName(text_painter, "_previousCaretPosition");
  var _previousCaretPrototype = dart.privateName(text_painter, "_previousCaretPrototype");
  var _lineMetricsCache = dart.privateName(text_painter, "_lineMetricsCache");
  var _text = dart.privateName(text_painter, "_text");
  var _textAlign = dart.privateName(text_painter, "_textAlign");
  var _textDirection = dart.privateName(text_painter, "_textDirection");
  var _textScaleFactor = dart.privateName(text_painter, "_textScaleFactor");
  var _maxLines = dart.privateName(text_painter, "_maxLines");
  var _ellipsis = dart.privateName(text_painter, "_ellipsis");
  var _locale = dart.privateName(text_painter, "_locale");
  var _strutStyle = dart.privateName(text_painter, "_strutStyle");
  var _textWidthBasis = dart.privateName(text_painter, "_textWidthBasis");
  var _textHeightBehavior = dart.privateName(text_painter, "_textHeightBehavior");
  var _debugNeedsLayout = dart.privateName(text_painter, "_debugNeedsLayout");
  var _createParagraphStyle = dart.privateName(text_painter, "_createParagraphStyle");
  var ParagraphConstraints_width = dart.privateName(ui, "ParagraphConstraints.width");
  var _createLayoutTemplate = dart.privateName(text_painter, "_createLayoutTemplate");
  var _applyFloatingPointHack = dart.privateName(text_painter, "_applyFloatingPointHack");
  var _createParagraph = dart.privateName(text_painter, "_createParagraph");
  var _layoutParagraph = dart.privateName(text_painter, "_layoutParagraph");
  var _emptyOffset = dart.privateName(text_painter, "_emptyOffset");
  var _getRectFromUpstream = dart.privateName(text_painter, "_getRectFromUpstream");
  var _getRectFromDownstream = dart.privateName(text_painter, "_getRectFromDownstream");
  var _computeCaretMetrics = dart.privateName(text_painter, "_computeCaretMetrics");
  var _caretMetrics = dart.privateName(text_painter, "_caretMetrics");
  text_painter.TextPainter = class TextPainter extends core.Object {
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[15] || CT.C15;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[12] || CT.C12;
      let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
      return new text_painter.TextPainter.new({text: text, textAlign: textAlign, textDirection: textDirection, textScaleFactor: textScaleFactor, maxLines: maxLines, ellipsis: ellipsis, locale: locale, strutStyle: strutStyle, textWidthBasis: textWidthBasis, textHeightBehavior: textHeightBehavior});
    }
    get [_debugNeedsLayout]() {
      return this[_paragraph] == null;
    }
    markNeedsLayout() {
      this[_paragraph] = null;
      this[_lineMetricsCache] = null;
      this[_previousCaretPosition] = null;
      this[_previousCaretPrototype] = null;
    }
    get text() {
      return this[_text];
    }
    set text(value) {
      let t2, t2$, t2$0, t2$1;
      if (!(value == null || value.debugAssertIsValid())) dart.assertFailed(null, I[10], 227, 12, "value == null || value.debugAssertIsValid()");
      if (dart.equals(this[_text], value)) return;
      if (!dart.equals((t2 = this[_text], t2 == null ? null : t2.style), (t2$ = value, t2$ == null ? null : t2$.style))) this[_layoutTemplate] = null;
      let comparison = value == null ? basic_types.RenderComparison.layout : (t2$1 = (t2$0 = this[_text], t2$0 == null ? null : t2$0.compareTo(value)), t2$1 == null ? basic_types.RenderComparison.layout : t2$1);
      this[_text] = value;
      if (comparison.index >= basic_types.RenderComparison.layout.index) {
        this.markNeedsLayout();
      } else if (comparison.index >= basic_types.RenderComparison.paint.index) {
        this[_rebuildParagraphForPaint] = true;
      }
    }
    get textAlign() {
      return this[_textAlign];
    }
    set textAlign(value) {
      if (!(value !== null)) dart.assertFailed(null, I[10], 257, 12, "value != null");
      if (this[_textAlign] === value) return;
      this[_textAlign] = value;
      this.markNeedsLayout();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) return;
      this[_textDirection] = value;
      this.markNeedsLayout();
      this[_layoutTemplate] = null;
    }
    get textScaleFactor() {
      return this[_textScaleFactor];
    }
    set textScaleFactor(value) {
      if (!(value !== null)) dart.assertFailed(null, I[10], 298, 12, "value != null");
      if (this[_textScaleFactor] === value) return;
      this[_textScaleFactor] = value;
      this.markNeedsLayout();
      this[_layoutTemplate] = null;
    }
    get ellipsis() {
      return this[_ellipsis];
    }
    set ellipsis(value) {
      if (!(value == null || value[$isNotEmpty])) dart.assertFailed(null, I[10], 325, 12, "value == null || value.isNotEmpty");
      if (this[_ellipsis] == value) return;
      this[_ellipsis] = value;
      this.markNeedsLayout();
    }
    get locale() {
      return this[_locale];
    }
    set locale(value) {
      if (dart.equals(this[_locale], value)) return;
      this[_locale] = value;
      this.markNeedsLayout();
    }
    get maxLines() {
      return this[_maxLines];
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, I[10], 353, 12, "value == null || value > 0");
      if (this[_maxLines] == value) return;
      this[_maxLines] = value;
      this.markNeedsLayout();
    }
    get strutStyle() {
      return this[_strutStyle];
    }
    set strutStyle(value) {
      if (dart.equals(this[_strutStyle], value)) return;
      this[_strutStyle] = value;
      this.markNeedsLayout();
    }
    get textWidthBasis() {
      return this[_textWidthBasis];
    }
    set textWidthBasis(value) {
      if (!(value !== null)) dart.assertFailed(null, I[10], 387, 12, "value != null");
      if (this[_textWidthBasis] === value) return;
      this[_textWidthBasis] = value;
      this.markNeedsLayout();
    }
    get textHeightBehavior() {
      return this[_textHeightBehavior];
    }
    set textHeightBehavior(value) {
      if (dart.equals(this[_textHeightBehavior], value)) return;
      this[_textHeightBehavior] = value;
      this.markNeedsLayout();
    }
    get inlinePlaceholderBoxes() {
      return this[_inlinePlaceholderBoxes];
    }
    get inlinePlaceholderScales() {
      return this[_inlinePlaceholderScales];
    }
    setPlaceholderDimensions(value) {
      if (value == null || value[$isEmpty] || collections.listEquals(text_painter.PlaceholderDimensions, value, this[_placeholderDimensions])) {
        return;
      }
      if (!(dart.fn(() => {
        let placeholderCount = 0;
        dart.nullCheck(this.text).visitChildren(dart.fn(span => {
          if (placeholder_span.PlaceholderSpan.is(span)) {
            placeholderCount = placeholderCount + 1;
          }
          return true;
        }, T.InlineSpanTobool()));
        return placeholderCount;
      }, T.VoidToint())() === value[$length])) dart.assertFailed(null, I[10], 435, 12, "() {\n      int placeholderCount = 0;\n      text!.visitChildren((InlineSpan span) {\n        if (span is PlaceholderSpan) {\n          placeholderCount += 1;\n        }\n        return true;\n      });\n      return placeholderCount;\n    }() == value.length");
      this[_placeholderDimensions] = value;
      this.markNeedsLayout();
    }
    [_createParagraphStyle](defaultTextDirection = null) {
      let t3, t2, t3$, t2$;
      if (!(this.textAlign !== null)) dart.assertFailed(null, I[10], 453, 12, "textAlign != null");
      if (!(this.textDirection != null || defaultTextDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", I[10], 454, 12, "textDirection != null || defaultTextDirection != null");
      t2$ = (t2 = dart.nullCheck(this[_text]).style, t2 == null ? null : t2.getParagraphStyle({textAlign: this.textAlign, textDirection: (t3 = this.textDirection, t3 == null ? defaultTextDirection : t3), textScaleFactor: this.textScaleFactor, maxLines: this[_maxLines], textHeightBehavior: this[_textHeightBehavior], ellipsis: this[_ellipsis], locale: this[_locale], strutStyle: this[_strutStyle]}));
      return t2$ == null ? ui.ParagraphStyle.new({textAlign: this.textAlign, textDirection: (t3$ = this.textDirection, t3$ == null ? defaultTextDirection : t3$), fontSize: 14 * this.textScaleFactor, maxLines: this.maxLines, textHeightBehavior: this[_textHeightBehavior], ellipsis: this.ellipsis, locale: this.locale}) : t2$;
    }
    [_createLayoutTemplate]() {
      let t3, t2, t2$;
      let builder = ui.ParagraphBuilder.new(this[_createParagraphStyle](ui.TextDirection.rtl));
      let textStyle = (t2 = this.text, t2 == null ? null : (t3 = t2.style, t3 == null ? null : t3.getTextStyle({textScaleFactor: this.textScaleFactor})));
      if (textStyle != null) builder.pushStyle(textStyle);
      builder.addText(" ");
      t2$ = builder.build();
      return (() => {
        t2$.layout(C[16] || CT.C16);
        return t2$;
      })();
    }
    get preferredLineHeight() {
      let t2;
      return (t2 = this[_layoutTemplate], t2 == null ? this[_layoutTemplate] = this[_createLayoutTemplate]() : t2).height;
    }
    [_applyFloatingPointHack](layoutValue) {
      return layoutValue[$ceilToDouble]();
    }
    get minIntrinsicWidth() {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 520, 12, "!_debugNeedsLayout");
      return this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).minIntrinsicWidth);
    }
    get maxIntrinsicWidth() {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 528, 12, "!_debugNeedsLayout");
      return this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).maxIntrinsicWidth);
    }
    get width() {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 536, 12, "!_debugNeedsLayout");
      return this[_applyFloatingPointHack](this.textWidthBasis === text_painter.TextWidthBasis.longestLine ? dart.nullCheck(this[_paragraph]).longestLine : dart.nullCheck(this[_paragraph]).width);
    }
    get height() {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 546, 12, "!_debugNeedsLayout");
      return this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).height);
    }
    get size() {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 554, 12, "!_debugNeedsLayout");
      return new ui.Size.new(this.width, this.height);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 563, 12, "!_debugNeedsLayout");
      if (!(baseline !== null)) dart.assertFailed(null, I[10], 564, 12, "baseline != null");
      switch (baseline) {
        case C[17] || CT.C17:
        {
          return dart.nullCheck(this[_paragraph]).alphabeticBaseline;
        }
        case C[18] || CT.C18:
        {
          return dart.nullCheck(this[_paragraph]).ideographicBaseline;
        }
      }
    }
    get didExceedMaxLines() {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 585, 12, "!_debugNeedsLayout");
      return dart.nullCheck(this[_paragraph]).didExceedMaxLines;
    }
    [_createParagraph]() {
      if (!(this[_paragraph] == null || this[_rebuildParagraphForPaint])) dart.assertFailed(null, I[10], 595, 12, "_paragraph == null || _rebuildParagraphForPaint");
      let text = this.text;
      if (text == null) {
        dart.throw(new core.StateError.new("TextPainter.text must be set to a non-null value before using the TextPainter."));
      }
      let builder = ui.ParagraphBuilder.new(this[_createParagraphStyle]());
      text.build(builder, {textScaleFactor: this.textScaleFactor, dimensions: this[_placeholderDimensions]});
      this[_inlinePlaceholderScales] = builder.placeholderScales;
      this[_paragraph] = builder.build();
      this[_rebuildParagraphForPaint] = false;
    }
    [_layoutParagraph](minWidth, maxWidth) {
      dart.nullCheck(this[_paragraph]).layout(new ui.ParagraphConstraints.new({width: maxWidth}));
      if (minWidth !== maxWidth) {
        let newWidth = null;
        switch (this.textWidthBasis) {
          case C[13] || CT.C13:
          {
            newWidth = this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).longestLine);
            break;
          }
          case C[12] || CT.C12:
          {
            newWidth = this.maxIntrinsicWidth;
            break;
          }
        }
        newWidth = newWidth[$clamp](minWidth, maxWidth);
        if (newWidth !== this[_applyFloatingPointHack](dart.nullCheck(this[_paragraph]).width)) {
          dart.nullCheck(this[_paragraph]).layout(new ui.ParagraphConstraints.new({width: newWidth}));
        }
      }
    }
    layout(opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      if (!(this.text != null)) dart.assertFailed("TextPainter.text must be set to a non-null value before using the TextPainter.", I[10], 640, 12, "text != null");
      if (!(this.textDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", I[10], 641, 12, "textDirection != null");
      if (this[_paragraph] != null && minWidth === this[_lastMinWidth] && maxWidth === this[_lastMaxWidth]) return;
      if (this[_rebuildParagraphForPaint] || this[_paragraph] == null) this[_createParagraph]();
      this[_lastMinWidth] = minWidth;
      this[_lastMaxWidth] = maxWidth;
      this[_previousCaretPosition] = null;
      this[_previousCaretPrototype] = null;
      this[_layoutParagraph](minWidth, maxWidth);
      this[_inlinePlaceholderBoxes] = dart.nullCheck(this[_paragraph]).getBoxesForPlaceholders();
    }
    paint(canvas, offset) {
      let minWidth = this[_lastMinWidth];
      let maxWidth = this[_lastMaxWidth];
      if (this[_paragraph] == null || minWidth == null || maxWidth == null) {
        dart.throw(new core.StateError.new("TextPainter.paint called when text geometry was not yet calculated.\n" + "Please call layout() before paint() to position the text before painting it."));
      }
      if (this[_rebuildParagraphForPaint]) {
        let debugSize = null;
        if (!dart.fn(() => {
          debugSize = this.size;
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[10], 682, 14, "() {\n        debugSize = size;\n        return true;\n      }()");
        this[_createParagraph]();
        this[_layoutParagraph](minWidth, maxWidth);
        if (!dart.equals(debugSize, this.size)) dart.assertFailed(null, I[10], 693, 14, "debugSize == size");
      }
      canvas.drawParagraph(dart.nullCheck(this[_paragraph]), offset);
    }
    static _isUtf16Surrogate(value) {
      return (value & 63488) === 55296;
    }
    static _isUnicodeDirectionality(value) {
      return value === 8207 || value === 8206;
    }
    getOffsetAfter(offset) {
      let nextCodeUnit = dart.nullCheck(this[_text]).codeUnitAt(offset);
      if (nextCodeUnit == null) return null;
      return text_painter.TextPainter._isUtf16Surrogate(nextCodeUnit) ? offset + 2 : offset + 1;
    }
    getOffsetBefore(offset) {
      let prevCodeUnit = dart.nullCheck(this[_text]).codeUnitAt(offset - 1);
      if (prevCodeUnit == null) return null;
      return text_painter.TextPainter._isUtf16Surrogate(prevCodeUnit) ? offset - 2 : offset - 1;
    }
    [_getRectFromUpstream](offset, caretPrototype) {
      let flattenedText = dart.nullCheck(this[_text]).toPlainText({includePlaceholders: false});
      let prevCodeUnit = dart.nullCheck(this[_text]).codeUnitAt(math.max(core.int, 0, offset - 1));
      if (prevCodeUnit == null) return null;
      let needsSearch = text_painter.TextPainter._isUtf16Surrogate(prevCodeUnit) || dart.nullCheck(this[_text]).codeUnitAt(offset) === 8205 || text_painter.TextPainter._isUnicodeDirectionality(prevCodeUnit);
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = T.JSArrayOfTextBox().of([]);
      while (boxes[$isEmpty]) {
        let prevRuneOffset = offset - graphemeClusterLength;
        boxes = dart.nullCheck(this[_paragraph]).getBoxesForRange(prevRuneOffset, offset, {boxHeightStyle: ui.BoxHeightStyle.strut});
        if (boxes[$isEmpty]) {
          if (!needsSearch && prevCodeUnit === 10) {
            break;
          }
          if (prevRuneOffset < -flattenedText.length) {
            break;
          }
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$first];
        if (prevCodeUnit === 10) {
          return new ui.Rect.fromLTRB(this[_emptyOffset].dx, box.bottom, this[_emptyOffset].dx, box.bottom + box.bottom - box.top);
        }
        let caretEnd = box.end;
        let dx = box.direction === ui.TextDirection.rtl ? caretEnd - caretPrototype.width : caretEnd;
        return new ui.Rect.fromLTRB(dx[$clamp](0.0, dart.nullCheck(this[_paragraph]).width), box.top, dx[$clamp](0.0, dart.nullCheck(this[_paragraph]).width), box.bottom);
      }
      return null;
    }
    [_getRectFromDownstream](offset, caretPrototype) {
      let flattenedText = dart.nullCheck(this[_text]).toPlainText({includePlaceholders: false});
      let nextCodeUnit = dart.nullCheck(this[_text]).codeUnitAt(math.min(core.int, offset, flattenedText.length - 1));
      if (nextCodeUnit == null) return null;
      let needsSearch = text_painter.TextPainter._isUtf16Surrogate(nextCodeUnit) || nextCodeUnit === 8205 || text_painter.TextPainter._isUnicodeDirectionality(nextCodeUnit);
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = T.JSArrayOfTextBox().of([]);
      while (boxes[$isEmpty]) {
        let nextRuneOffset = offset + graphemeClusterLength;
        boxes = dart.nullCheck(this[_paragraph]).getBoxesForRange(offset, nextRuneOffset, {boxHeightStyle: ui.BoxHeightStyle.strut});
        if (boxes[$isEmpty]) {
          if (!needsSearch) {
            break;
          }
          if (nextRuneOffset >= flattenedText.length << 1 >>> 0) {
            break;
          }
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$last];
        let caretStart = box.start;
        let dx = box.direction === ui.TextDirection.rtl ? caretStart - caretPrototype.width : caretStart;
        return new ui.Rect.fromLTRB(dx[$clamp](0.0, dart.nullCheck(this[_paragraph]).width), box.top, dx[$clamp](0.0, dart.nullCheck(this[_paragraph]).width), box.bottom);
      }
      return null;
    }
    get [_emptyOffset]() {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 831, 12, "!_debugNeedsLayout");
      if (!(this.textAlign !== null)) dart.assertFailed(null, I[10], 832, 12, "textAlign != null");
      switch (this.textAlign) {
        case C[19] || CT.C19:
        {
          return ui.Offset.zero;
        }
        case C[20] || CT.C20:
        {
          return new ui.Offset.new(this.width, 0.0);
        }
        case C[21] || CT.C21:
        {
          return new ui.Offset.new(this.width / 2.0, 0.0);
        }
        case C[24] || CT.C24:
        case C[15] || CT.C15:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, I[10], 842, 16, "textDirection != null");
          switch (dart.nullCheck(this.textDirection)) {
            case C[22] || CT.C22:
            {
              return new ui.Offset.new(this.width, 0.0);
            }
            case C[23] || CT.C23:
            {
              return ui.Offset.zero;
            }
          }
        }
        case C[25] || CT.C25:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, I[10], 850, 16, "textDirection != null");
          switch (dart.nullCheck(this.textDirection)) {
            case C[22] || CT.C22:
            {
              return ui.Offset.zero;
            }
            case C[23] || CT.C23:
            {
              return new ui.Offset.new(this.width, 0.0);
            }
          }
        }
      }
    }
    getOffsetForCaret(position, caretPrototype) {
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].offset;
    }
    getFullHeightForCaret(position, caretPrototype) {
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].fullHeight;
    }
    set [_caretMetrics](t2) {
      this[__TextPainter__caretMetrics] = t2;
    }
    get [_caretMetrics]() {
      let t3;
      t3 = this[__TextPainter__caretMetrics];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_caretMetrics")) : t3;
    }
    [_computeCaretMetrics](position, caretPrototype) {
      let t3, t3$;
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 892, 12, "!_debugNeedsLayout");
      if (position._equals(this[_previousCaretPosition]) && caretPrototype._equals(this[_previousCaretPrototype])) return;
      let offset = position.offset;
      if (!(position.affinity !== null)) dart.assertFailed(null, I[10], 896, 12, "position.affinity != null");
      let rect = null;
      switch (position.affinity) {
        case C[26] || CT.C26:
        {
          {
            rect = (t3 = this[_getRectFromUpstream](offset, caretPrototype), t3 == null ? this[_getRectFromDownstream](offset, caretPrototype) : t3);
            break;
          }
        }
        case C[27] || CT.C27:
        {
          {
            rect = (t3$ = this[_getRectFromDownstream](offset, caretPrototype), t3$ == null ? this[_getRectFromUpstream](offset, caretPrototype) : t3$);
            break;
          }
        }
      }
      this[_caretMetrics] = new text_painter._CaretMetrics.new({offset: rect != null ? new ui.Offset.new(rect.left, rect.top) : this[_emptyOffset], fullHeight: rect != null ? rect.bottom - rect.top : null});
      this[_previousCaretPosition] = position;
      this[_previousCaretPrototype] = caretPrototype;
    }
    getBoxesForSelection(selection, opts) {
      let boxHeightStyle = opts && 'boxHeightStyle' in opts ? opts.boxHeightStyle : C[28] || CT.C28;
      let boxWidthStyle = opts && 'boxWidthStyle' in opts ? opts.boxWidthStyle : C[29] || CT.C29;
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 940, 12, "!_debugNeedsLayout");
      if (!(boxHeightStyle !== null)) dart.assertFailed(null, I[10], 941, 12, "boxHeightStyle != null");
      if (!(boxWidthStyle !== null)) dart.assertFailed(null, I[10], 942, 12, "boxWidthStyle != null");
      return dart.nullCheck(this[_paragraph]).getBoxesForRange(selection.start, selection.end, {boxHeightStyle: boxHeightStyle, boxWidthStyle: boxWidthStyle});
    }
    getPositionForOffset(offset) {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 953, 12, "!_debugNeedsLayout");
      return dart.nullCheck(this[_paragraph]).getPositionForOffset(offset);
    }
    getWordBoundary(position) {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 967, 12, "!_debugNeedsLayout");
      return dart.nullCheck(this[_paragraph]).getWordBoundary(position);
    }
    getLineBoundary(position) {
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 975, 12, "!_debugNeedsLayout");
      return dart.nullCheck(this[_paragraph]).getLineBoundary(position);
    }
    computeLineMetrics() {
      let t3;
      if (!!this[_debugNeedsLayout]) dart.assertFailed(null, I[10], 992, 12, "!_debugNeedsLayout");
      t3 = this[_lineMetricsCache];
      return t3 == null ? this[_lineMetricsCache] = dart.nullCheck(this[_paragraph]).computeLineMetrics() : t3;
    }
  };
  (text_painter.TextPainter.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[15] || CT.C15;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[12] || CT.C12;
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    this[_paragraph] = null;
    this[_rebuildParagraphForPaint] = true;
    this[_inlinePlaceholderBoxes] = null;
    this[_inlinePlaceholderScales] = null;
    this[_placeholderDimensions] = null;
    this[_layoutTemplate] = null;
    this[_lastMinWidth] = null;
    this[_lastMaxWidth] = null;
    this[__TextPainter__caretMetrics] = null;
    this[_previousCaretPosition] = null;
    this[_previousCaretPrototype] = null;
    this[_lineMetricsCache] = null;
    if (!(text == null || text.debugAssertIsValid())) dart.assertFailed(null, I[10], 172, 15, "text == null || text.debugAssertIsValid()");
    if (!(textAlign !== null)) dart.assertFailed(null, I[10], 173, 15, "textAlign != null");
    if (!(textScaleFactor !== null)) dart.assertFailed(null, I[10], 174, 15, "textScaleFactor != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, I[10], 175, 15, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis !== null)) dart.assertFailed(null, I[10], 176, 15, "textWidthBasis != null");
    this[_text] = text;
    this[_textAlign] = textAlign;
    this[_textDirection] = textDirection;
    this[_textScaleFactor] = textScaleFactor;
    this[_maxLines] = maxLines;
    this[_ellipsis] = ellipsis;
    this[_locale] = locale;
    this[_strutStyle] = strutStyle;
    this[_textWidthBasis] = textWidthBasis;
    this[_textHeightBehavior] = textHeightBehavior;
    ;
  }).prototype = text_painter.TextPainter.prototype;
  dart.addTypeTests(text_painter.TextPainter);
  dart.addTypeCaches(text_painter.TextPainter);
  dart.setMethodSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getMethods(text_painter.TextPainter.__proto__),
    markNeedsLayout: dart.fnType(dart.void, []),
    setPlaceholderDimensions: dart.fnType(dart.void, [dart.nullable(core.List$(text_painter.PlaceholderDimensions))]),
    [_createParagraphStyle]: dart.fnType(ui.ParagraphStyle, [], [dart.nullable(ui.TextDirection)]),
    [_createLayoutTemplate]: dart.fnType(ui.Paragraph, []),
    [_applyFloatingPointHack]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui.TextBaseline]),
    [_createParagraph]: dart.fnType(dart.void, []),
    [_layoutParagraph]: dart.fnType(dart.void, [core.double, core.double]),
    layout: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    getOffsetAfter: dart.fnType(dart.nullable(core.int), [core.int]),
    getOffsetBefore: dart.fnType(dart.nullable(core.int), [core.int]),
    [_getRectFromUpstream]: dart.fnType(dart.nullable(ui.Rect), [core.int, ui.Rect]),
    [_getRectFromDownstream]: dart.fnType(dart.nullable(ui.Rect), [core.int, ui.Rect]),
    getOffsetForCaret: dart.fnType(ui.Offset, [ui.TextPosition, ui.Rect]),
    getFullHeightForCaret: dart.fnType(dart.nullable(core.double), [ui.TextPosition, ui.Rect]),
    [_computeCaretMetrics]: dart.fnType(dart.void, [ui.TextPosition, ui.Rect]),
    getBoxesForSelection: dart.fnType(core.List$(ui.TextBox), [text_editing.TextSelection], {boxHeightStyle: ui.BoxHeightStyle, boxWidthStyle: ui.BoxWidthStyle}, {}),
    getPositionForOffset: dart.fnType(ui.TextPosition, [ui.Offset]),
    getWordBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    getLineBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    computeLineMetrics: dart.fnType(core.List$(ui.LineMetrics), [])
  }));
  dart.setStaticMethodSignature(text_painter.TextPainter, () => ['_isUtf16Surrogate', '_isUnicodeDirectionality']);
  dart.setGetterSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getGetters(text_painter.TextPainter.__proto__),
    [_debugNeedsLayout]: core.bool,
    text: dart.nullable(inline_span.InlineSpan),
    textAlign: ui.TextAlign,
    textDirection: dart.nullable(ui.TextDirection),
    textScaleFactor: core.double,
    ellipsis: dart.nullable(core.String),
    locale: dart.nullable(ui.Locale),
    maxLines: dart.nullable(core.int),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    inlinePlaceholderBoxes: dart.nullable(core.List$(ui.TextBox)),
    inlinePlaceholderScales: dart.nullable(core.List$(core.double)),
    preferredLineHeight: core.double,
    minIntrinsicWidth: core.double,
    maxIntrinsicWidth: core.double,
    width: core.double,
    height: core.double,
    size: ui.Size,
    didExceedMaxLines: core.bool,
    [_emptyOffset]: ui.Offset,
    [_caretMetrics]: text_painter._CaretMetrics
  }));
  dart.setSetterSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getSetters(text_painter.TextPainter.__proto__),
    text: dart.nullable(inline_span.InlineSpan),
    textAlign: ui.TextAlign,
    textDirection: dart.nullable(ui.TextDirection),
    textScaleFactor: core.double,
    ellipsis: dart.nullable(core.String),
    locale: dart.nullable(ui.Locale),
    maxLines: dart.nullable(core.int),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    [_caretMetrics]: text_painter._CaretMetrics
  }));
  dart.setLibraryUri(text_painter.TextPainter, I[9]);
  dart.setFieldSignature(text_painter.TextPainter, () => ({
    __proto__: dart.getFields(text_painter.TextPainter.__proto__),
    [_paragraph]: dart.fieldType(dart.nullable(ui.Paragraph)),
    [_rebuildParagraphForPaint]: dart.fieldType(core.bool),
    [_text]: dart.fieldType(dart.nullable(inline_span.InlineSpan)),
    [_textAlign]: dart.fieldType(ui.TextAlign),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_textScaleFactor]: dart.fieldType(core.double),
    [_ellipsis]: dart.fieldType(dart.nullable(core.String)),
    [_locale]: dart.fieldType(dart.nullable(ui.Locale)),
    [_maxLines]: dart.fieldType(dart.nullable(core.int)),
    [_strutStyle]: dart.fieldType(dart.nullable(strut_style.StrutStyle)),
    [_textWidthBasis]: dart.fieldType(text_painter.TextWidthBasis),
    [_textHeightBehavior]: dart.fieldType(dart.nullable(ui.TextHeightBehavior)),
    [_inlinePlaceholderBoxes]: dart.fieldType(dart.nullable(core.List$(ui.TextBox))),
    [_inlinePlaceholderScales]: dart.fieldType(dart.nullable(core.List$(core.double))),
    [_placeholderDimensions]: dart.fieldType(dart.nullable(core.List$(text_painter.PlaceholderDimensions))),
    [_layoutTemplate]: dart.fieldType(dart.nullable(ui.Paragraph)),
    [_lastMinWidth]: dart.fieldType(dart.nullable(core.double)),
    [_lastMaxWidth]: dart.fieldType(dart.nullable(core.double)),
    [__TextPainter__caretMetrics]: dart.fieldType(dart.nullable(text_painter._CaretMetrics)),
    [_previousCaretPosition]: dart.fieldType(dart.nullable(ui.TextPosition)),
    [_previousCaretPrototype]: dart.fieldType(dart.nullable(ui.Rect)),
    [_lineMetricsCache]: dart.fieldType(dart.nullable(core.List$(ui.LineMetrics)))
  }));
  dart.setStaticFieldSignature(text_painter.TextPainter, () => ['_zwjUtf16']);
  dart.defineLazy(text_painter.TextPainter, {
    /*text_painter.TextPainter._zwjUtf16*/get _zwjUtf16() {
      return 8205;
    }
  }, false);
  dart.defineLazy(text_painter, {
    /*text_painter._kDefaultFontSize*/get _kDefaultFontSize() {
      return 14;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/placeholder_span.dart", {
    "package:flutter/src/painting/placeholder_span.dart": placeholder_span,
    "package:flutter/src/painting/strut_style.dart": strut_style,
    "package:flutter/src/painting/text_style.dart": text_style,
    "package:flutter/src/painting/text_span.dart": text_span,
    "package:flutter/src/painting/inline_span.dart": inline_span,
    "package:flutter/src/painting/text_painter.dart": text_painter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["inline_span.dart","placeholder_span.dart","strut_style.dart","text_style.dart","text_span.dart","text_painter.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/placeholder_span.dart.lib.js"}');
  // Exports:
  return {
    src__painting__placeholder_span: placeholder_span,
    src__painting__strut_style: strut_style,
    src__painting__text_style: text_style,
    src__painting__text_span: text_span,
    src__painting__inline_span: inline_span,
    src__painting__text_painter: text_painter
  };
}));

//# sourceMappingURL=placeholder_span.dart.lib.js.map
