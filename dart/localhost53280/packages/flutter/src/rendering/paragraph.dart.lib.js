define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/multitap.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__rendering__paragraph_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__multitap$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const debug = packages__flutter__src__rendering__layer$46dart.src__rendering__debug;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const placeholder_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__placeholder_span;
  const inline_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__inline_span;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const strut_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__strut_style;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const multitap = packages__flutter__src__gestures__multitap$46dart.src__gestures__multitap;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var paragraph = Object.create(dart.library);
  var $join = dartx.join;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $abs = dartx.abs;
  var $any = dartx.any;
  var $isNotEmpty = dartx.isNotEmpty;
  var $elementAt = dartx.elementAt;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $skip = dartx.skip;
  var $floorToDouble = dartx.floorToDouble;
  var $ceilToDouble = dartx.ceilToDouble;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    JSArrayOfPlaceholderSpan: () => (T.JSArrayOfPlaceholderSpan = dart.constFn(_interceptors.JSArray$(placeholder_span.PlaceholderSpan)))(),
    InlineSpanTobool: () => (T.InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))(),
    ListOfPlaceholderDimensions: () => (T.ListOfPlaceholderDimensions = dart.constFn(core.List$(text_painter.PlaceholderDimensions)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    JSArrayOfPlaceholderDimensions: () => (T.JSArrayOfPlaceholderDimensions = dart.constFn(_interceptors.JSArray$(text_painter.PlaceholderDimensions)))(),
    JSArrayOfColor: () => (T.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    PaintingContextAndOffsetTovoid: () => (T.PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))(),
    InlineSpanSemanticsInformationTobool: () => (T.InlineSpanSemanticsInformationTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpanSemanticsInformation])))(),
    JSArrayOfStringAttribute: () => (T.JSArrayOfStringAttribute = dart.constFn(_interceptors.JSArray$(ui.StringAttribute)))(),
    JSArrayOfSemanticsNode: () => (T.JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))(),
    ListQueueOfSemanticsNode: () => (T.ListQueueOfSemanticsNode = dart.constFn(collection.ListQueue$(semantics.SemanticsNode)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    EnumPropertyOfTextAlign: () => (T.EnumPropertyOfTextAlign = dart.constFn(diagnostics.EnumProperty$(ui.TextAlign)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    EnumPropertyOfTextOverflow: () => (T.EnumPropertyOfTextOverflow = dart.constFn(diagnostics.EnumProperty$(text_painter.TextOverflow)))(),
    DiagnosticsPropertyOfLocale: () => (T.DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 4
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "clip",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_Enum__name]: "parent",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "identical",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "metadata",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "paint",
        [_Enum_index]: 2
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic_types.RenderComparison.prototype,
        [_Enum__name]: "layout",
        [_Enum_index]: 3
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "baseline",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "aboveBaseline",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "belowBaseline",
        [_Enum_index]: 2
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "top",
        [_Enum_index]: 3
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "middle",
        [_Enum_index]: 5
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "bottom",
        [_Enum_index]: 4
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "visible",
        [_Enum_index]: 3
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "ellipsis",
        [_Enum_index]: 2
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 16777215
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "fade",
        [_Enum_index]: 1
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(22).fill(void 0);
  var I = [
    "package:flutter/src/rendering/paragraph.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/paragraph.dart"
  ];
  var scale = dart.privateName(paragraph, "TextParentData.scale");
  paragraph.TextParentData = class TextParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    get scale() {
      return this[scale];
    }
    set scale(value) {
      this[scale] = value;
    }
    toString() {
      let values = (() => {
        let t0 = T.JSArrayOfString().of(["offset=" + dart.str(this.offset)]);
        if (this.scale != null) t0.push("scale=" + dart.str(this.scale));
        t0.push(super.toString());
        return t0;
      })();
      return values[$join]("; ");
    }
    static ['_#new#tearOff']() {
      return new paragraph.TextParentData.new();
    }
  };
  (paragraph.TextParentData.new = function() {
    this[scale] = null;
    paragraph.TextParentData.__proto__.new.call(this);
    ;
  }).prototype = paragraph.TextParentData.prototype;
  dart.addTypeTests(paragraph.TextParentData);
  dart.addTypeCaches(paragraph.TextParentData);
  dart.setLibraryUri(paragraph.TextParentData, I[0]);
  dart.setFieldSignature(paragraph.TextParentData, () => ({
    __proto__: dart.getFields(paragraph.TextParentData.__proto__),
    scale: dart.fieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(paragraph.TextParentData, ['toString']);
  var index$ = dart.privateName(paragraph, "PlaceholderSpanIndexSemanticsTag.index");
  paragraph.PlaceholderSpanIndexSemanticsTag = class PlaceholderSpanIndexSemanticsTag extends semantics.SemanticsTag {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    static ['_#new#tearOff'](index) {
      return new paragraph.PlaceholderSpanIndexSemanticsTag.new(index);
    }
    _equals(other) {
      if (other == null) return false;
      return paragraph.PlaceholderSpanIndexSemanticsTag.is(other) && other.index === this.index;
    }
    get hashCode() {
      return ui.hashValues(dart.wrapType(paragraph.PlaceholderSpanIndexSemanticsTag), this.index);
    }
  };
  (paragraph.PlaceholderSpanIndexSemanticsTag.new = function(index) {
    this[index$] = index;
    paragraph.PlaceholderSpanIndexSemanticsTag.__proto__.new.call(this, "PlaceholderSpanIndexSemanticsTag(" + dart.str(index) + ")");
    ;
  }).prototype = paragraph.PlaceholderSpanIndexSemanticsTag.prototype;
  dart.addTypeTests(paragraph.PlaceholderSpanIndexSemanticsTag);
  dart.addTypeCaches(paragraph.PlaceholderSpanIndexSemanticsTag);
  dart.setLibraryUri(paragraph.PlaceholderSpanIndexSemanticsTag, I[0]);
  dart.setFieldSignature(paragraph.PlaceholderSpanIndexSemanticsTag, () => ({
    __proto__: dart.getFields(paragraph.PlaceholderSpanIndexSemanticsTag.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(paragraph.PlaceholderSpanIndexSemanticsTag, ['_equals']);
  dart.defineExtensionAccessors(paragraph.PlaceholderSpanIndexSemanticsTag, ['hashCode']);
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _cachedAttributedLabel = dart.privateName(paragraph, "_cachedAttributedLabel");
  var _cachedCombinedSemanticsInfos = dart.privateName(paragraph, "_cachedCombinedSemanticsInfos");
  var __RenderParagraph__placeholderSpans = dart.privateName(paragraph, "_#RenderParagraph#_placeholderSpans");
  var _needsClipping = dart.privateName(paragraph, "_needsClipping");
  var _overflowShader = dart.privateName(paragraph, "_overflowShader");
  var _placeholderDimensions = dart.privateName(paragraph, "_placeholderDimensions");
  var _semanticsInfo = dart.privateName(paragraph, "_semanticsInfo");
  var _cachedChildNodes = dart.privateName(paragraph, "_cachedChildNodes");
  var _softWrap = dart.privateName(paragraph, "_softWrap");
  var _overflow = dart.privateName(paragraph, "_overflow");
  var _textPainter = dart.privateName(paragraph, "_textPainter");
  var _extractPlaceholderSpans = dart.privateName(paragraph, "_extractPlaceholderSpans");
  var _placeholderSpans = dart.privateName(paragraph, "_placeholderSpans");
  var _canComputeIntrinsics = dart.privateName(paragraph, "_canComputeIntrinsics");
  var _computeChildrenWidthWithMinIntrinsics = dart.privateName(paragraph, "_computeChildrenWidthWithMinIntrinsics");
  var _layoutText = dart.privateName(paragraph, "_layoutText");
  var _computeChildrenWidthWithMaxIntrinsics = dart.privateName(paragraph, "_computeChildrenWidthWithMaxIntrinsics");
  var _computeChildrenHeightWithMinIntrinsics = dart.privateName(paragraph, "_computeChildrenHeightWithMinIntrinsics");
  var _computeIntrinsicHeight = dart.privateName(paragraph, "_computeIntrinsicHeight");
  var _layoutTextWithConstraints = dart.privateName(paragraph, "_layoutTextWithConstraints");
  var _layoutChildren = dart.privateName(paragraph, "_layoutChildren");
  var _setParentData = dart.privateName(paragraph, "_setParentData");
  var _canComputeDryLayout = dart.privateName(paragraph, "_canComputeDryLayout");
  var Color_value = dart.privateName(ui, "Color.value");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, paragraph.TextParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, paragraph.TextParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, paragraph.TextParentData));
  const RenderBox_RelayoutWhenSystemFontsChangeMixin$36 = class RenderBox_RelayoutWhenSystemFontsChangeMixin extends RenderBox_RenderBoxContainerDefaultsMixin$36 {};
  (RenderBox_RelayoutWhenSystemFontsChangeMixin$36.new = function() {
    RenderBox_RelayoutWhenSystemFontsChangeMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RelayoutWhenSystemFontsChangeMixin$36.prototype;
  dart.applyMixin(RenderBox_RelayoutWhenSystemFontsChangeMixin$36, object.RelayoutWhenSystemFontsChangeMixin);
  paragraph.RenderParagraph = class RenderParagraph extends RenderBox_RelayoutWhenSystemFontsChangeMixin$36 {
    static ['_#new#tearOff'](text, opts) {
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[0] || CT.C0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let softWrap = opts && 'softWrap' in opts ? opts.softWrap : true;
      let overflow = opts && 'overflow' in opts ? opts.overflow : C[1] || CT.C1;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[2] || CT.C2;
      let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
      let children = opts && 'children' in opts ? opts.children : null;
      return new paragraph.RenderParagraph.new(text, {textAlign: textAlign, textDirection: textDirection, softWrap: softWrap, overflow: overflow, textScaleFactor: textScaleFactor, maxLines: maxLines, locale: locale, strutStyle: strutStyle, textWidthBasis: textWidthBasis, textHeightBehavior: textHeightBehavior, children: children});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!paragraph.TextParentData.is(child.parentData)) child.parentData = new paragraph.TextParentData.new();
    }
    get text() {
      return dart.nullCheck(this[_textPainter].text);
    }
    set text(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 127, 12, "value != null");
      switch (dart.nullCheck(this[_textPainter].text).compareTo(value)) {
        case C[3] || CT.C3:
        case C[4] || CT.C4:
        {
          return;
        }
        case C[5] || CT.C5:
        {
          this[_textPainter].text = value;
          this[_cachedAttributedLabel] = null;
          this[_cachedCombinedSemanticsInfos] = null;
          this[_extractPlaceholderSpans](value);
          this.markNeedsPaint();
          this.markNeedsSemanticsUpdate();
          break;
        }
        case C[6] || CT.C6:
        {
          this[_textPainter].text = value;
          this[_overflowShader] = null;
          this[_cachedAttributedLabel] = null;
          this[_cachedCombinedSemanticsInfos] = null;
          this[_extractPlaceholderSpans](value);
          this.markNeedsLayout();
          break;
        }
      }
    }
    get [_placeholderSpans]() {
      let t1;
      t1 = this[__RenderParagraph__placeholderSpans];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_placeholderSpans")) : t1;
    }
    set [_placeholderSpans](t1) {
      this[__RenderParagraph__placeholderSpans] = t1;
    }
    [_extractPlaceholderSpans](span) {
      this[_placeholderSpans] = T.JSArrayOfPlaceholderSpan().of([]);
      span.visitChildren(dart.fn(span => {
        if (placeholder_span.PlaceholderSpan.is(span)) {
          this[_placeholderSpans][$add](span);
        }
        return true;
      }, T.InlineSpanTobool()));
    }
    get textAlign() {
      return this[_textPainter].textAlign;
    }
    set textAlign(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 165, 12, "value != null");
      if (this[_textPainter].textAlign === value) return;
      this[_textPainter].textAlign = value;
      this.markNeedsPaint();
    }
    get textDirection() {
      return dart.nullCheck(this[_textPainter].textDirection);
    }
    set textDirection(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 187, 12, "value != null");
      if (this[_textPainter].textDirection === value) return;
      this[_textPainter].textDirection = value;
      this.markNeedsLayout();
    }
    get softWrap() {
      return this[_softWrap];
    }
    set softWrap(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 204, 12, "value != null");
      if (this[_softWrap] === value) return;
      this[_softWrap] = value;
      this.markNeedsLayout();
    }
    get overflow() {
      return this[_overflow];
    }
    set overflow(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 215, 12, "value != null");
      if (this[_overflow] === value) return;
      this[_overflow] = value;
      this[_textPainter].ellipsis = value === text_painter.TextOverflow.ellipsis ? "…" : null;
      this.markNeedsLayout();
    }
    get textScaleFactor() {
      return this[_textPainter].textScaleFactor;
    }
    set textScaleFactor(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 229, 12, "value != null");
      if (this[_textPainter].textScaleFactor === value) return;
      this[_textPainter].textScaleFactor = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get maxLines() {
      return this[_textPainter].maxLines;
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, I[1], 244, 12, "value == null || value > 0");
      if (this[_textPainter].maxLines == value) return;
      this[_textPainter].maxLines = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get locale() {
      return this[_textPainter].locale;
    }
    set locale(value) {
      if (dart.equals(this[_textPainter].locale, value)) return;
      this[_textPainter].locale = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get strutStyle() {
      return this[_textPainter].strutStyle;
    }
    set strutStyle(value) {
      if (dart.equals(this[_textPainter].strutStyle, value)) return;
      this[_textPainter].strutStyle = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get textWidthBasis() {
      return this[_textPainter].textWidthBasis;
    }
    set textWidthBasis(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 283, 12, "value != null");
      if (this[_textPainter].textWidthBasis === value) return;
      this[_textPainter].textWidthBasis = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    get textHeightBehavior() {
      return this[_textPainter].textHeightBehavior;
    }
    set textHeightBehavior(value) {
      if (dart.equals(this[_textPainter].textHeightBehavior, value)) return;
      this[_textPainter].textHeightBehavior = value;
      this[_overflowShader] = null;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (!this[_canComputeIntrinsics]()) {
        return 0.0;
      }
      this[_computeChildrenWidthWithMinIntrinsics](height);
      this[_layoutText]();
      return this[_textPainter].minIntrinsicWidth;
    }
    computeMaxIntrinsicWidth(height) {
      if (!this[_canComputeIntrinsics]()) {
        return 0.0;
      }
      this[_computeChildrenWidthWithMaxIntrinsics](height);
      this[_layoutText]();
      return this[_textPainter].maxIntrinsicWidth;
    }
    [_computeIntrinsicHeight](width) {
      if (!this[_canComputeIntrinsics]()) {
        return 0.0;
      }
      this[_computeChildrenHeightWithMinIntrinsics](width);
      this[_layoutText]({minWidth: width, maxWidth: width});
      return this[_textPainter].height;
    }
    computeMinIntrinsicHeight(width) {
      return this[_computeIntrinsicHeight](width);
    }
    computeMaxIntrinsicHeight(width) {
      return this[_computeIntrinsicHeight](width);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 342, 12, "!debugNeedsLayout");
      if (!(this.constraints !== null)) dart.assertFailed(null, I[1], 343, 12, "constraints != null");
      if (!this.constraints.debugAssertIsValid()) dart.assertFailed(null, I[1], 344, 12, "constraints.debugAssertIsValid()");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].computeDistanceToActualBaseline(ui.TextBaseline.alphabetic);
    }
    [_canComputeIntrinsics]() {
      for (let span of this[_placeholderSpans]) {
        switch (span.alignment) {
          case C[7] || CT.C7:
          case C[8] || CT.C8:
          case C[9] || CT.C9:
          {
            {
              if (!object.RenderObject.debugCheckingIntrinsics) dart.assertFailed("Intrinsics are not available for PlaceholderAlignment.baseline, " + "PlaceholderAlignment.aboveBaseline, or PlaceholderAlignment.belowBaseline.", I[1], 365, 13, "RenderObject.debugCheckingIntrinsics");
              return false;
            }
          }
          case C[10] || CT.C10:
          case C[11] || CT.C11:
          case C[12] || CT.C12:
          {
            {
              continue;
            }
          }
        }
      }
      return true;
    }
    [_computeChildrenWidthWithMaxIntrinsics](height) {
      let child = this.firstChild;
      let placeholderDimensions = T.ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty);
      let childIndex = 0;
      while (child != null) {
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(child.getMaxIntrinsicWidth(1 / 0), 0.0), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeChildrenWidthWithMinIntrinsics](height) {
      let child = this.firstChild;
      let placeholderDimensions = T.ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty);
      let childIndex = 0;
      while (child != null) {
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(child.getMinIntrinsicWidth(1 / 0), 0.0), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeChildrenHeightWithMinIntrinsics](width) {
      let child = this.firstChild;
      let placeholderDimensions = T.ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty);
      let childIndex = 0;
      width = width / this.textScaleFactor;
      while (child != null) {
        let size = child.getDryLayout(new box.BoxConstraints.new({maxWidth: width}));
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: size, alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this[_textPainter].setPlaceholderDimensions(placeholderDimensions);
    }
    hitTestSelf(position) {
      return true;
    }
    hitTestChildren(result, opts) {
      let t2;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitText = false;
      let textPosition = this[_textPainter].getPositionForOffset(position);
      let span = dart.nullCheck(this[_textPainter].text).getSpanForPosition(textPosition);
      if (span != null && hit_test.HitTestTarget.is(span)) {
        result.add(new hit_test.HitTestEntry.new(hit_test.HitTestTarget.as(span)));
        hitText = true;
      }
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length]) {
        let textParentData = paragraph.TextParentData.as(dart.nullCheck(child.parentData));
        let transform = (t2 = vector_math_64.Matrix4.translationValues(textParentData.offset.dx, textParentData.offset.dy, 0.0), (() => {
          t2.scale(textParentData.scale, textParentData.scale, textParentData.scale);
          return t2;
        })());
        let isHit = result.addWithPaintTransform({transform: transform, position: position, hitTest: dart.fn((result, transformed) => {
            if (!dart.fn(() => {
              let manualPosition = position['-'](textParentData.offset)['/'](dart.nullCheck(textParentData.scale));
              return (transformed.dx - manualPosition.dx)[$abs]() < 1e-10 && (transformed.dy - manualPosition.dy)[$abs]() < 1e-10;
            }, T.VoidTobool())()) dart.assertFailed(null, I[1], 469, 18, "() {\n            final Offset manualPosition = (position - textParentData.offset) / textParentData.scale!;\n            return (transformed.dx - manualPosition.dx).abs() < precisionErrorTolerance\n              && (transformed.dy - manualPosition.dy).abs() < precisionErrorTolerance;\n          }()");
            return dart.nullCheck(child).hitTest(result, {position: transformed});
          }, T.BoxHitTestResultAndOffsetTobool())});
        if (isHit) {
          return true;
        }
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      return hitText;
    }
    get debugHasOverflowShader() {
      return this[_overflowShader] != null;
    }
    [_layoutText](opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      let widthMatters = this.softWrap || this.overflow === text_painter.TextOverflow.ellipsis;
      this[_textPainter].layout({minWidth: minWidth, maxWidth: widthMatters ? maxWidth : 1 / 0});
    }
    systemFontsDidChange() {
      super.systemFontsDidChange();
      this[_textPainter].markNeedsLayout();
    }
    [_layoutTextWithConstraints](constraints) {
      this[_textPainter].setPlaceholderDimensions(this[_placeholderDimensions]);
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
    }
    [_layoutChildren](constraints, opts) {
      let dry = opts && 'dry' in opts ? opts.dry : false;
      if (this.childCount === 0) {
        return T.JSArrayOfPlaceholderDimensions().of([]);
      }
      let child = this.firstChild;
      let placeholderDimensions = T.ListOfPlaceholderDimensions().filled(this.childCount, text_painter.PlaceholderDimensions.empty);
      let childIndex = 0;
      let boxConstraints = new box.BoxConstraints.new({maxWidth: constraints.maxWidth});
      boxConstraints = boxConstraints['/'](this.textScaleFactor);
      while (child != null) {
        let baselineOffset = null;
        let childSize = null;
        if (!dry) {
          child.layout(boxConstraints, {parentUsesSize: true});
          childSize = child.size;
          switch (this[_placeholderSpans][$_get](childIndex).alignment) {
            case C[7] || CT.C7:
            {
              baselineOffset = child.getDistanceToBaseline(dart.nullCheck(this[_placeholderSpans][$_get](childIndex).baseline));
              break;
            }
            case C[8] || CT.C8:
            case C[9] || CT.C9:
            case C[12] || CT.C12:
            case C[11] || CT.C11:
            case C[10] || CT.C10:
            {
              baselineOffset = null;
              break;
            }
          }
        } else {
          if (!(this[_placeholderSpans][$_get](childIndex).alignment !== ui.PlaceholderAlignment.baseline)) dart.assertFailed(null, I[1], 566, 16, "_placeholderSpans[childIndex].alignment != ui.PlaceholderAlignment.baseline");
          childSize = child.getDryLayout(boxConstraints);
        }
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: childSize, alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline, baselineOffset: baselineOffset}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      return placeholderDimensions;
    }
    [_setParentData]() {
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length]) {
        let textParentData = paragraph.TextParentData.as(dart.nullCheck(child.parentData));
        textParentData.offset = new ui.Offset.new(dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$_get](childIndex).left, dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$_get](childIndex).top);
        textParentData.scale = dart.nullCheck(this[_textPainter].inlinePlaceholderScales)[$_get](childIndex);
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
    }
    [_canComputeDryLayout]() {
      for (let span of this[_placeholderSpans]) {
        switch (span.alignment) {
          case C[7] || CT.C7:
          case C[8] || CT.C8:
          case C[9] || CT.C9:
          {
            return false;
          }
          case C[10] || CT.C10:
          case C[11] || CT.C11:
          case C[12] || CT.C12:
          {
            continue;
          }
        }
      }
      return true;
    }
    computeDryLayout(constraints) {
      if (!this[_canComputeDryLayout]()) {
        if (!this.debugCannotComputeDryLayout({reason: "Dry layout not available for alignments that require baseline."})) dart.assertFailed(null, I[1], 620, 14, "debugCannotComputeDryLayout(\n        reason: 'Dry layout not available for alignments that require baseline.',\n      )");
        return ui.Size.zero;
      }
      this[_textPainter].setPlaceholderDimensions(this[_layoutChildren](constraints, {dry: true}));
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
      return constraints.constrain(this[_textPainter].size);
    }
    performLayout() {
      let t2;
      let constraints = this.constraints;
      this[_placeholderDimensions] = this[_layoutChildren](constraints);
      this[_layoutTextWithConstraints](constraints);
      this[_setParentData]();
      let textSize = this[_textPainter].size;
      let textDidExceedMaxLines = this[_textPainter].didExceedMaxLines;
      this.size = constraints.constrain(textSize);
      let didOverflowHeight = this.size.height < textSize.height || textDidExceedMaxLines;
      let didOverflowWidth = this.size.width < textSize.width;
      let hasVisualOverflow = didOverflowWidth || didOverflowHeight;
      if (hasVisualOverflow) {
        switch (this[_overflow]) {
          case C[13] || CT.C13:
          {
            this[_needsClipping] = false;
            this[_overflowShader] = null;
            break;
          }
          case C[1] || CT.C1:
          case C[14] || CT.C14:
          {
            this[_needsClipping] = true;
            this[_overflowShader] = null;
            break;
          }
          case C[19] || CT.C19:
          {
            if (!(this.textDirection !== null)) dart.assertFailed(null, I[1], 666, 18, "textDirection != null");
            this[_needsClipping] = true;
            let fadeSizePainter = (t2 = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({style: dart.nullCheck(this[_textPainter].text).style, text: "…"}), textDirection: this.textDirection, textScaleFactor: this.textScaleFactor, locale: this.locale}), (() => {
              t2.layout();
              return t2;
            })());
            if (didOverflowWidth) {
              let fadeEnd = null;
              let fadeStart = null;
              switch (this.textDirection) {
                case C[15] || CT.C15:
                {
                  fadeEnd = 0.0;
                  fadeStart = fadeSizePainter.width;
                  break;
                }
                case C[16] || CT.C16:
                {
                  fadeEnd = this.size.width;
                  fadeStart = fadeEnd - fadeSizePainter.width;
                  break;
                }
              }
              this[_overflowShader] = ui.Gradient.linear(new ui.Offset.new(fadeStart, 0.0), new ui.Offset.new(fadeEnd, 0.0), T.JSArrayOfColor().of([C[17] || CT.C17, C[18] || CT.C18]));
            } else {
              let fadeEnd = this.size.height;
              let fadeStart = fadeEnd - fadeSizePainter.height / 2.0;
              this[_overflowShader] = ui.Gradient.linear(new ui.Offset.new(0.0, fadeStart), new ui.Offset.new(0.0, fadeEnd), T.JSArrayOfColor().of([C[17] || CT.C17, C[18] || CT.C18]));
            }
            break;
          }
        }
      } else {
        this[_needsClipping] = false;
        this[_overflowShader] = null;
      }
    }
    paint(context, offset) {
      let t2;
      this[_layoutTextWithConstraints](this.constraints);
      if (!dart.fn(() => {
        let t2;
        if (debug.debugRepaintTextRainbowEnabled) {
          let paint = (t2 = ui.Paint.new(), (() => {
            t2.color = debug.debugCurrentRepaintColor.toColor();
            return t2;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 722, 12, "() {\n      if (debugRepaintTextRainbowEnabled) {\n        final Paint paint = Paint()\n          ..color = debugCurrentRepaintColor.toColor();\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
      if (this[_needsClipping]) {
        let bounds = offset['&'](this.size);
        if (this[_overflowShader] != null) {
          context.canvas.saveLayer(bounds, ui.Paint.new());
        } else {
          context.canvas.save();
        }
        context.canvas.clipRect(bounds);
      }
      this[_textPainter].paint(context.canvas, offset);
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length]) {
        let textParentData = paragraph.TextParentData.as(dart.nullCheck(child.parentData));
        let scale = dart.nullCheck(textParentData.scale);
        context.pushTransform(this.needsCompositing, offset['+'](textParentData.offset), vector_math_64.Matrix4.diagonal3Values(scale, scale, scale), dart.fn((context, offset) => {
          context.paintChild(dart.nullCheck(child), offset);
        }, T.PaintingContextAndOffsetTovoid()));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      if (this[_needsClipping]) {
        if (this[_overflowShader] != null) {
          context.canvas.translate(offset.dx, offset.dy);
          let paint = (t2 = ui.Paint.new(), (() => {
            t2.blendMode = ui.BlendMode.modulate;
            t2.shader = this[_overflowShader];
            return t2;
          })());
          context.canvas.drawRect(ui.Offset.zero['&'](this.size), paint);
        }
        context.canvas.restore();
      }
    }
    getOffsetForCaret(position, caretPrototype) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 784, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getOffsetForCaret(position, caretPrototype);
    }
    getFullHeightForCaret(position) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 793, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getFullHeightForCaret(position, ui.Rect.zero);
    }
    getBoxesForSelection(selection, opts) {
      let boxHeightStyle = opts && 'boxHeightStyle' in opts ? opts.boxHeightStyle : C[20] || CT.C20;
      let boxWidthStyle = opts && 'boxWidthStyle' in opts ? opts.boxWidthStyle : C[21] || CT.C21;
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 820, 12, "!debugNeedsLayout");
      if (!(boxHeightStyle !== null)) dart.assertFailed(null, I[1], 821, 12, "boxHeightStyle != null");
      if (!(boxWidthStyle !== null)) dart.assertFailed(null, I[1], 822, 12, "boxWidthStyle != null");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getBoxesForSelection(selection, {boxHeightStyle: boxHeightStyle, boxWidthStyle: boxWidthStyle});
    }
    getPositionForOffset(offset) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 835, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getPositionForOffset(offset);
    }
    getWordBoundary(position) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 850, 12, "!debugNeedsLayout");
      this[_layoutTextWithConstraints](this.constraints);
      return this[_textPainter].getWordBoundary(position);
    }
    get textSize() {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 865, 12, "!debugNeedsLayout");
      return this[_textPainter].size;
    }
    describeSemanticsConfiguration(config) {
      let t2;
      super.describeSemanticsConfiguration(config);
      this[_semanticsInfo] = this.text.getSemanticsInformation();
      if (dart.nullCheck(this[_semanticsInfo])[$any](dart.fn(info => info.recognizer != null, T.InlineSpanSemanticsInformationTobool()))) {
        config.explicitChildNodes = true;
        config.isSemanticBoundary = true;
      } else {
        if (this[_cachedAttributedLabel] == null) {
          let buffer = new core.StringBuffer.new();
          let offset = 0;
          let attributes = T.JSArrayOfStringAttribute().of([]);
          for (let info of dart.nullCheck(this[_semanticsInfo])) {
            let label = (t2 = info.semanticsLabel, t2 == null ? info.text : t2);
            for (let infoAttribute of info.stringAttributes) {
              let originalRange = infoAttribute.range;
              attributes[$add](infoAttribute.copy({range: new ui.TextRange.new({start: offset + originalRange.start, end: offset + originalRange.end})}));
            }
            buffer.write(label);
            offset = offset + label.length;
          }
          this[_cachedAttributedLabel] = new semantics.AttributedString.new(buffer.toString(), {attributes: attributes});
        }
        config.attributedLabel = dart.nullCheck(this[_cachedAttributedLabel]);
        config.textDirection = this.textDirection;
      }
    }
    assembleSemanticsNode(node, config, children) {
      let t3, t3$, t2, t2$, t2$0;
      if (!(this[_semanticsInfo] != null && dart.nullCheck(this[_semanticsInfo])[$isNotEmpty])) dart.assertFailed(null, I[1], 915, 12, "_semanticsInfo != null && _semanticsInfo!.isNotEmpty");
      let newChildren = T.JSArrayOfSemanticsNode().of([]);
      let currentDirection = this.textDirection;
      let currentRect = null;
      let ordinal = 0.0;
      let start = 0;
      let placeholderIndex = 0;
      let childIndex = 0;
      let child = this.firstChild;
      let newChildCache = new (T.ListQueueOfSemanticsNode()).new();
      this[_cachedCombinedSemanticsInfos] == null ? this[_cachedCombinedSemanticsInfos] = inline_span.combineSemanticsInfo(dart.nullCheck(this[_semanticsInfo])) : null;
      for (let info of dart.nullCheck(this[_cachedCombinedSemanticsInfos])) {
        let selection = new text_editing.TextSelection.new({baseOffset: start, extentOffset: start + info.text.length});
        start = start + info.text.length;
        if (info.isPlaceholder) {
          while (children[$length] > childIndex && children[$elementAt](childIndex).isTagged(new paragraph.PlaceholderSpanIndexSemanticsTag.new(placeholderIndex))) {
            let childNode = children[$elementAt](childIndex);
            let parentData = paragraph.TextParentData.as(dart.nullCheck(dart.nullCheck(child).parentData));
            if (!(parentData.scale != null || parentData.offset._equals(ui.Offset.zero))) dart.assertFailed(null, I[1], 940, 18, "parentData.scale != null || parentData.offset == Offset.zero");
            if (parentData.scale != null) {
              childNode.rect = new ui.Rect.fromLTWH(childNode.rect.left, childNode.rect.top, childNode.rect.width * dart.nullCheck(parentData.scale), childNode.rect.height * dart.nullCheck(parentData.scale));
              newChildren[$add](childNode);
            }
            childIndex = childIndex + 1;
          }
          child = this.childAfter(dart.nullCheck(child));
          placeholderIndex = placeholderIndex + 1;
        } else {
          let initialDirection = currentDirection;
          let rects = this.getBoxesForSelection(selection);
          if (rects[$isEmpty]) {
            continue;
          }
          let rect = rects[$first].toRect();
          currentDirection = rects[$first].direction;
          for (let textBox of rects[$skip](1)) {
            rect = rect.expandToInclude(textBox.toRect());
            currentDirection = textBox.direction;
          }
          rect = new ui.Rect.fromLTWH(math.max(core.double, 0.0, rect.left), math.max(core.double, 0.0, rect.top), math.min(core.double, rect.width, this.constraints.maxWidth), math.min(core.double, rect.height, this.constraints.maxHeight));
          currentRect = new ui.Rect.fromLTRB(rect.left[$floorToDouble]() - 4.0, rect.top[$floorToDouble]() - 4.0, rect.right[$ceilToDouble]() + 4.0, rect.bottom[$ceilToDouble]() + 4.0);
          let configuration = (t2 = new semantics.SemanticsConfiguration.new(), (() => {
            t2.sortKey = new semantics.OrdinalSortKey.new((t3 = ordinal, ordinal = t3 + 1, t3));
            t2.textDirection = initialDirection;
            t2.attributedLabel = new semantics.AttributedString.new((t3$ = info.semanticsLabel, t3$ == null ? info.text : t3$), {attributes: info.stringAttributes});
            return t2;
          })());
          let recognizer = info.recognizer;
          if (recognizer != null) {
            if (tap.TapGestureRecognizer.is(recognizer)) {
              if (recognizer.onTap != null) {
                configuration.onTap = recognizer.onTap;
                configuration.isLink = true;
              }
            } else if (multitap.DoubleTapGestureRecognizer.is(recognizer)) {
              if (recognizer.onDoubleTap != null) {
                configuration.onTap = recognizer.onDoubleTap;
                configuration.isLink = true;
              }
            } else if (long_press.LongPressGestureRecognizer.is(recognizer)) {
              if (recognizer.onLongPress != null) {
                configuration.onLongPress = recognizer.onLongPress;
              }
            } else {
              if (!false) dart.assertFailed(dart.str(dart.runtimeType(recognizer)) + " is not supported.", I[1], 1004, 20, "false");
            }
          }
          let newChild = (t2$ = this[_cachedChildNodes], t2$ == null ? null : t2$[$isNotEmpty]) === true ? dart.nullCheck(this[_cachedChildNodes]).removeFirst() : new semantics.SemanticsNode.new();
          t2$0 = newChild;
          (() => {
            t2$0.updateWith({config: configuration});
            t2$0.rect = currentRect;
            return t2$0;
          })();
          newChildCache.addLast(newChild);
          newChildren[$add](newChild);
        }
      }
      if (!(childIndex === children[$length])) dart.assertFailed(null, I[1], 1018, 12, "childIndex == children.length");
      if (!(child == null)) dart.assertFailed(null, I[1], 1019, 12, "child == null");
      this[_cachedChildNodes] = newChildCache;
      node.updateWith({config: config, childrenInInversePaintOrder: newChildren});
    }
    clearSemantics() {
      super.clearSemantics();
      this[_cachedChildNodes] = null;
    }
    debugDescribeChildren() {
      return T.JSArrayOfDiagnosticsNode().of([this.text.toDiagnosticsNode({name: "text", style: diagnostics.DiagnosticsTreeStyle.transition})]);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfTextAlign()).new("textAlign", this.textAlign));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection));
      properties.add(new diagnostics.FlagProperty.new("softWrap", {value: this.softWrap, ifTrue: "wrapping at box width", ifFalse: "no wrapping except at line break characters", showName: true}));
      properties.add(new (T.EnumPropertyOfTextOverflow()).new("overflow", this.overflow));
      properties.add(new diagnostics.DoubleProperty.new("textScaleFactor", this.textScaleFactor, {defaultValue: 1.0}));
      properties.add(new (T.DiagnosticsPropertyOfLocale()).new("locale", this.locale, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {ifNull: "unlimited"}));
    }
  };
  (paragraph.RenderParagraph.new = function(text, opts) {
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[0] || CT.C0;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : true;
    let overflow = opts && 'overflow' in opts ? opts.overflow : C[1] || CT.C1;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[2] || CT.C2;
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this[_cachedAttributedLabel] = null;
    this[_cachedCombinedSemanticsInfos] = null;
    this[__RenderParagraph__placeholderSpans] = null;
    this[_needsClipping] = false;
    this[_overflowShader] = null;
    this[_placeholderDimensions] = null;
    this[_semanticsInfo] = null;
    this[_cachedChildNodes] = null;
    if (!(text !== null)) dart.assertFailed(null, I[1], 87, 15, "text != null");
    if (!text.debugAssertIsValid()) dart.assertFailed(null, I[1], 88, 15, "text.debugAssertIsValid()");
    if (!(textAlign !== null)) dart.assertFailed(null, I[1], 89, 15, "textAlign != null");
    if (!(textDirection !== null)) dart.assertFailed(null, I[1], 90, 15, "textDirection != null");
    if (!(softWrap !== null)) dart.assertFailed(null, I[1], 91, 15, "softWrap != null");
    if (!(overflow !== null)) dart.assertFailed(null, I[1], 92, 15, "overflow != null");
    if (!(textScaleFactor !== null)) dart.assertFailed(null, I[1], 93, 15, "textScaleFactor != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, I[1], 94, 15, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis !== null)) dart.assertFailed(null, I[1], 95, 15, "textWidthBasis != null");
    this[_softWrap] = softWrap;
    this[_overflow] = overflow;
    this[_textPainter] = new text_painter.TextPainter.new({text: text, textAlign: textAlign, textDirection: textDirection, textScaleFactor: textScaleFactor, maxLines: maxLines, ellipsis: overflow === text_painter.TextOverflow.ellipsis ? "…" : null, locale: locale, strutStyle: strutStyle, textWidthBasis: textWidthBasis, textHeightBehavior: textHeightBehavior});
    paragraph.RenderParagraph.__proto__.new.call(this);
    this.addAll(children);
    this[_extractPlaceholderSpans](text);
  }).prototype = paragraph.RenderParagraph.prototype;
  dart.addTypeTests(paragraph.RenderParagraph);
  dart.addTypeCaches(paragraph.RenderParagraph);
  dart.setMethodSignature(paragraph.RenderParagraph, () => ({
    __proto__: dart.getMethods(paragraph.RenderParagraph.__proto__),
    [_extractPlaceholderSpans]: dart.fnType(dart.void, [inline_span.InlineSpan]),
    [_computeIntrinsicHeight]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui.TextBaseline]),
    [_canComputeIntrinsics]: dart.fnType(core.bool, []),
    [_computeChildrenWidthWithMaxIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeChildrenWidthWithMinIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeChildrenHeightWithMinIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_layoutText]: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}, {}),
    [_layoutTextWithConstraints]: dart.fnType(dart.void, [box.BoxConstraints]),
    [_layoutChildren]: dart.fnType(core.List$(text_painter.PlaceholderDimensions), [box.BoxConstraints], {dry: core.bool}, {}),
    [_setParentData]: dart.fnType(dart.void, []),
    [_canComputeDryLayout]: dart.fnType(core.bool, []),
    getOffsetForCaret: dart.fnType(ui.Offset, [ui.TextPosition, ui.Rect]),
    getFullHeightForCaret: dart.fnType(dart.nullable(core.double), [ui.TextPosition]),
    getBoxesForSelection: dart.fnType(core.List$(ui.TextBox), [text_editing.TextSelection], {boxHeightStyle: ui.BoxHeightStyle, boxWidthStyle: ui.BoxWidthStyle}, {}),
    getPositionForOffset: dart.fnType(ui.TextPosition, [ui.Offset]),
    getWordBoundary: dart.fnType(ui.TextRange, [ui.TextPosition])
  }));
  dart.setGetterSignature(paragraph.RenderParagraph, () => ({
    __proto__: dart.getGetters(paragraph.RenderParagraph.__proto__),
    text: inline_span.InlineSpan,
    [_placeholderSpans]: core.List$(placeholder_span.PlaceholderSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    softWrap: core.bool,
    overflow: text_painter.TextOverflow,
    textScaleFactor: core.double,
    maxLines: dart.nullable(core.int),
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    debugHasOverflowShader: core.bool,
    textSize: ui.Size
  }));
  dart.setSetterSignature(paragraph.RenderParagraph, () => ({
    __proto__: dart.getSetters(paragraph.RenderParagraph.__proto__),
    text: inline_span.InlineSpan,
    [_placeholderSpans]: core.List$(placeholder_span.PlaceholderSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    softWrap: core.bool,
    overflow: text_painter.TextOverflow,
    textScaleFactor: core.double,
    maxLines: dart.nullable(core.int),
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    textWidthBasis: text_painter.TextWidthBasis,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior)
  }));
  dart.setLibraryUri(paragraph.RenderParagraph, I[0]);
  dart.setFieldSignature(paragraph.RenderParagraph, () => ({
    __proto__: dart.getFields(paragraph.RenderParagraph.__proto__),
    [_textPainter]: dart.finalFieldType(text_painter.TextPainter),
    [_cachedAttributedLabel]: dart.fieldType(dart.nullable(semantics.AttributedString)),
    [_cachedCombinedSemanticsInfos]: dart.fieldType(dart.nullable(core.List$(inline_span.InlineSpanSemanticsInformation))),
    [__RenderParagraph__placeholderSpans]: dart.fieldType(dart.nullable(core.List$(placeholder_span.PlaceholderSpan))),
    [_softWrap]: dart.fieldType(core.bool),
    [_overflow]: dart.fieldType(text_painter.TextOverflow),
    [_needsClipping]: dart.fieldType(core.bool),
    [_overflowShader]: dart.fieldType(dart.nullable(ui.Shader)),
    [_placeholderDimensions]: dart.fieldType(dart.nullable(core.List$(text_painter.PlaceholderDimensions))),
    [_semanticsInfo]: dart.fieldType(dart.nullable(core.List$(inline_span.InlineSpanSemanticsInformation))),
    [_cachedChildNodes]: dart.fieldType(dart.nullable(collection.Queue$(semantics.SemanticsNode)))
  }));
  dart.defineLazy(paragraph, {
    /*paragraph._kEllipsis*/get _kEllipsis() {
      return "…";
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/paragraph.dart", {
    "package:flutter/src/rendering/paragraph.dart": paragraph
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["paragraph.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/paragraph.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__paragraph: paragraph
  };
}));

//# sourceMappingURL=paragraph.dart.lib.js.map
