define(['dart_sdk', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/characters/src/extensions.dart', 'packages/flutter/src/rendering/paragraph.dart', 'packages/flutter/src/services/text_editing.dart', 'packages/flutter/src/services/text_formatter.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/multitap.dart', 'packages/flutter/src/gestures/long_press.dart', 'packages/flutter/src/services/text_layout_metrics.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/viewport_offset.dart'], (function load__packages__flutter__src__rendering__editable_dart(dart_sdk, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__rendering__layer$46dart, packages__characters__src__extensions$46dart, packages__flutter__src__rendering__paragraph$46dart, packages__flutter__src__services__text_editing$46dart, packages__flutter__src__services__text_formatter$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__multitap$46dart, packages__flutter__src__gestures__long_press$46dart, packages__flutter__src__services__text_layout_metrics$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__viewport_offset$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const placeholder_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__placeholder_span;
  const inline_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__inline_span;
  const strut_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__strut_style;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const extensions = packages__characters__src__extensions$46dart.src__extensions;
  const paragraph = packages__flutter__src__rendering__paragraph$46dart.src__rendering__paragraph;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  const text_input = packages__flutter__src__services__text_formatter$46dart.src__services__text_input;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const multitap = packages__flutter__src__gestures__multitap$46dart.src__gestures__multitap;
  const long_press = packages__flutter__src__gestures__long_press$46dart.src__gestures__long_press;
  const text_layout_metrics = packages__flutter__src__services__text_layout_metrics$46dart.src__services__text_layout_metrics;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const viewport_offset = packages__flutter__src__rendering__viewport_offset$46dart.src__rendering__viewport_offset;
  var editable = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $add = dartx.add;
  var $_equals = dartx._equals;
  var $any = dartx.any;
  var $times = dartx['*'];
  var $isNotEmpty = dartx.isNotEmpty;
  var $elementAt = dartx.elementAt;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $skip = dartx.skip;
  var $floorToDouble = dartx.floorToDouble;
  var $ceilToDouble = dartx.ceilToDouble;
  var $runtimeType = dartx.runtimeType;
  var $clamp = dartx.clamp;
  var $last = dartx.last;
  var $fold = dartx.fold;
  var $codeUnitAt = dartx.codeUnitAt;
  var $abs = dartx.abs;
  var $isFinite = dartx.isFinite;
  var $round = dartx.round;
  var $iterator = dartx.iterator;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    MapEntryOfOffset$TextPosition: () => (T.MapEntryOfOffset$TextPosition = dart.constFn(core.MapEntry$(ui.Offset, ui.TextPosition)))(),
    IdentityMapOfint$MapEntryOfOffset$TextPosition: () => (T.IdentityMapOfint$MapEntryOfOffset$TextPosition = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapEntryOfOffset$TextPosition())))(),
    ValueNotifierOfbool: () => (T.ValueNotifierOfbool = dart.constFn(change_notifier.ValueNotifier$(core.bool)))(),
    LayerHandleOfClipRectLayer: () => (T.LayerHandleOfClipRectLayer = dart.constFn(layer.LayerHandle$(layer.ClipRectLayer)))(),
    JSArrayOfRenderEditablePainter: () => (T.JSArrayOfRenderEditablePainter = dart.constFn(_interceptors.JSArray$(editable.RenderEditablePainter)))(),
    JSArrayOfPlaceholderSpan: () => (T.JSArrayOfPlaceholderSpan = dart.constFn(_interceptors.JSArray$(placeholder_span.PlaceholderSpan)))(),
    InlineSpanTobool: () => (T.InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))(),
    InlineSpanSemanticsInformationTobool: () => (T.InlineSpanSemanticsInformationTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpanSemanticsInformation])))(),
    JSArrayOfStringAttribute: () => (T.JSArrayOfStringAttribute = dart.constFn(_interceptors.JSArray$(ui.StringAttribute)))(),
    JSArrayOfSemanticsNode: () => (T.JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))(),
    ListQueueOfSemanticsNode: () => (T.ListQueueOfSemanticsNode = dart.constFn(collection.ListQueue$(semantics.SemanticsNode)))(),
    JSArrayOfTextBox: () => (T.JSArrayOfTextBox = dart.constFn(_interceptors.JSArray$(ui.TextBox)))(),
    JSArrayOfTextSelectionPoint: () => (T.JSArrayOfTextSelectionPoint = dart.constFn(_interceptors.JSArray$(editable.TextSelectionPoint)))(),
    RectN: () => (T.RectN = dart.constFn(dart.nullable(ui.Rect)))(),
    RectNAndTextBoxToRect: () => (T.RectNAndTextBoxToRect = dart.constFn(dart.fnType(ui.Rect, [T.RectN(), ui.TextBox])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    VoidToTextSelection: () => (T.VoidToTextSelection = dart.constFn(dart.fnType(text_editing.TextSelection, [])))(),
    TextSelectionTodynamic: () => (T.TextSelectionTodynamic = dart.constFn(dart.fnType(dart.dynamic, [text_editing.TextSelection])))(),
    JSArrayOfPlaceholderDimensions: () => (T.JSArrayOfPlaceholderDimensions = dart.constFn(_interceptors.JSArray$(text_painter.PlaceholderDimensions)))(),
    ListOfPlaceholderDimensions: () => (T.ListOfPlaceholderDimensions = dart.constFn(core.List$(text_painter.PlaceholderDimensions)))(),
    MapEntryOfint$Offset: () => (T.MapEntryOfint$Offset = dart.constFn(core.MapEntry$(core.int, ui.Offset)))(),
    PaintingContextAndOffsetTovoid: () => (T.PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))(),
    DiagnosticsPropertyOfValueNotifierOfbool: () => (T.DiagnosticsPropertyOfValueNotifierOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(T.ValueNotifierOfbool())))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    DiagnosticsPropertyOfLocale: () => (T.DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))(),
    DiagnosticsPropertyOfTextSelection: () => (T.DiagnosticsPropertyOfTextSelection = dart.constFn(diagnostics.DiagnosticsProperty$(text_editing.TextSelection)))(),
    DiagnosticsPropertyOfViewportOffset: () => (T.DiagnosticsPropertyOfViewportOffset = dart.constFn(diagnostics.DiagnosticsProperty$(viewport_offset.ViewportOffset)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    RenderEditableN: () => (T.RenderEditableN = dart.constFn(dart.nullable(editable.RenderEditable)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 4
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_Enum__name]: "parent",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.BoxHeightStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.BoxWidthStyle.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 5,
        [EdgeInsets_right]: 4,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 4
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "baseline",
        [_Enum_index]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "aboveBaseline",
        [_Enum_index]: 1
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "belowBaseline",
        [_Enum_index]: 2
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "bottom",
        [_Enum_index]: 4
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "middle",
        [_Enum_index]: 5
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_Enum__name]: "top",
        [_Enum_index]: 3
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 1,
        [EdgeInsets_right]: 0.5,
        [EdgeInsets_top]: 1,
        [EdgeInsets_left]: 0.5
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 1,
        [Radius_x]: 1
      });
    }
  }, false);
  var C = Array(25).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/editable.dart",
    "package:flutter/src/rendering/editable.dart"
  ];
  var point$ = dart.privateName(editable, "TextSelectionPoint.point");
  var direction$ = dart.privateName(editable, "TextSelectionPoint.direction");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  editable.TextSelectionPoint = class TextSelectionPoint extends core.Object {
    get point() {
      return this[point$];
    }
    set point(value) {
      super.point = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    static ['_#new#tearOff'](point, direction) {
      return new editable.TextSelectionPoint.new(point, direction);
    }
    toString() {
      switch (this.direction) {
        case C[0] || CT.C0:
        {
          return dart.str(this.point) + "-ltr";
        }
        case C[1] || CT.C1:
        {
          return dart.str(this.point) + "-rtl";
        }
        case null:
        {
          return dart.str(this.point);
        }
      }
    }
  };
  (editable.TextSelectionPoint.new = function(point, direction) {
    this[point$] = point;
    this[direction$] = direction;
    if (!(point !== null)) dart.assertFailed(null, I[0], 58, 14, "point != null");
    ;
  }).prototype = editable.TextSelectionPoint.prototype;
  dart.addTypeTests(editable.TextSelectionPoint);
  dart.addTypeCaches(editable.TextSelectionPoint);
  dart.setLibraryUri(editable.TextSelectionPoint, I[1]);
  dart.setFieldSignature(editable.TextSelectionPoint, () => ({
    __proto__: dart.getFields(editable.TextSelectionPoint.__proto__),
    point: dart.finalFieldType(ui.Offset),
    direction: dart.finalFieldType(dart.nullable(ui.TextDirection))
  }));
  dart.defineExtensionMethods(editable.TextSelectionPoint, ['toString']);
  var _isValid = dart.privateName(editable, "_isValid");
  var _positionCache = dart.privateName(editable, "_positionCache");
  var _editable$ = dart.privateName(editable, "_editable");
  var _lineMetrics$ = dart.privateName(editable, "_lineMetrics");
  var _currentTextPosition$ = dart.privateName(editable, "_currentTextPosition");
  var _currentLine$ = dart.privateName(editable, "_currentLine");
  var _currentOffset$ = dart.privateName(editable, "_currentOffset");
  var _textPainter = dart.privateName(editable, "_textPainter");
  var _getTextPositionForLine = dart.privateName(editable, "_getTextPositionForLine");
  editable.VerticalCaretMovementRun = class VerticalCaretMovementRun extends core.BidirectionalIterator$(ui.TextPosition) {
    static ['_#_#tearOff'](_editable, _lineMetrics, _currentTextPosition, _currentLine, _currentOffset) {
      return new editable.VerticalCaretMovementRun.__(_editable, _lineMetrics, _currentTextPosition, _currentLine, _currentOffset);
    }
    get isValid() {
      if (!this[_isValid]) {
        return false;
      }
      let newLineMetrics = this[_editable$][_textPainter].computeLineMetrics();
      if (newLineMetrics !== this[_lineMetrics$]) {
        this[_isValid] = false;
      }
      return this[_isValid];
    }
    [_getTextPositionForLine](lineNumber) {
      if (!this.isValid) dart.assertFailed(null, I[0], 167, 12, "isValid");
      if (!(lineNumber >= 0)) dart.assertFailed(null, I[0], 168, 12, "lineNumber >= 0");
      let cachedPosition = this[_positionCache][$_get](lineNumber);
      if (cachedPosition != null) {
        return cachedPosition;
      }
      if (!(lineNumber !== this[_currentLine$])) dart.assertFailed(null, I[0], 173, 12, "lineNumber != _currentLine");
      let newOffset = new ui.Offset.new(this[_currentOffset$].dx, this[_lineMetrics$][$_get](lineNumber).baseline);
      let closestPosition = this[_editable$][_textPainter].getPositionForOffset(newOffset);
      let position = new (T.MapEntryOfOffset$TextPosition()).__(newOffset, closestPosition);
      this[_positionCache][$_set](lineNumber, position);
      return position;
    }
    get current() {
      if (!this.isValid) dart.assertFailed(null, I[0], 184, 12, "isValid");
      return this[_currentTextPosition$];
    }
    moveNext() {
      if (!this.isValid) dart.assertFailed(null, I[0], 190, 12, "isValid");
      if (this[_currentLine$] + 1 >= this[_lineMetrics$][$length]) {
        return false;
      }
      let position = this[_getTextPositionForLine](this[_currentLine$] + 1);
      this[_currentLine$] = this[_currentLine$] + 1;
      this[_currentOffset$] = position.key;
      this[_currentTextPosition$] = position.value;
      return true;
    }
    movePrevious() {
      if (!this.isValid) dart.assertFailed(null, I[0], 203, 12, "isValid");
      if (this[_currentLine$] <= 0) {
        return false;
      }
      let position = this[_getTextPositionForLine](this[_currentLine$] - 1);
      this[_currentLine$] = this[_currentLine$] - 1;
      this[_currentOffset$] = position.key;
      this[_currentTextPosition$] = position.value;
      return true;
    }
  };
  (editable.VerticalCaretMovementRun.__ = function(_editable, _lineMetrics, _currentTextPosition, _currentLine, _currentOffset) {
    this[_isValid] = true;
    this[_positionCache] = new (T.IdentityMapOfint$MapEntryOfOffset$TextPosition()).new();
    this[_editable$] = _editable;
    this[_lineMetrics$] = _lineMetrics;
    this[_currentTextPosition$] = _currentTextPosition;
    this[_currentLine$] = _currentLine;
    this[_currentOffset$] = _currentOffset;
    ;
  }).prototype = editable.VerticalCaretMovementRun.prototype;
  dart.addTypeTests(editable.VerticalCaretMovementRun);
  dart.addTypeCaches(editable.VerticalCaretMovementRun);
  dart.setMethodSignature(editable.VerticalCaretMovementRun, () => ({
    __proto__: dart.getMethods(editable.VerticalCaretMovementRun.__proto__),
    [_getTextPositionForLine]: dart.fnType(core.MapEntry$(ui.Offset, ui.TextPosition), [core.int]),
    moveNext: dart.fnType(core.bool, []),
    movePrevious: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(editable.VerticalCaretMovementRun, () => ({
    __proto__: dart.getGetters(editable.VerticalCaretMovementRun.__proto__),
    isValid: core.bool,
    current: ui.TextPosition
  }));
  dart.setLibraryUri(editable.VerticalCaretMovementRun, I[1]);
  dart.setFieldSignature(editable.VerticalCaretMovementRun, () => ({
    __proto__: dart.getFields(editable.VerticalCaretMovementRun.__proto__),
    [_currentOffset$]: dart.fieldType(ui.Offset),
    [_currentLine$]: dart.fieldType(core.int),
    [_currentTextPosition$]: dart.fieldType(ui.TextPosition),
    [_lineMetrics$]: dart.finalFieldType(core.List$(ui.LineMetrics)),
    [_editable$]: dart.finalFieldType(editable.RenderEditable),
    [_isValid]: dart.fieldType(core.bool),
    [_positionCache]: dart.finalFieldType(core.Map$(core.int, core.MapEntry$(ui.Offset, ui.TextPosition)))
  }));
  var onSelectionChanged$ = dart.privateName(editable, "RenderEditable.onSelectionChanged");
  var onCaretChanged$ = dart.privateName(editable, "RenderEditable.onCaretChanged");
  var ignorePointer$ = dart.privateName(editable, "RenderEditable.ignorePointer");
  var textSelectionDelegate$ = dart.privateName(editable, "RenderEditable.textSelectionDelegate");
  var floatingCursorAddedMargin$ = dart.privateName(editable, "RenderEditable.floatingCursorAddedMargin");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _foregroundRenderObject = dart.privateName(editable, "_foregroundRenderObject");
  var _backgroundRenderObject = dart.privateName(editable, "_backgroundRenderObject");
  var __RenderEditable__placeholderSpans = dart.privateName(editable, "_#RenderEditable#_placeholderSpans");
  var _foregroundPainter = dart.privateName(editable, "_foregroundPainter");
  var _painter = dart.privateName(editable, "_painter");
  var __RenderEditable__caretPainter = dart.privateName(editable, "_#RenderEditable#_caretPainter");
  var _selectionPainter = dart.privateName(editable, "_selectionPainter");
  var _autocorrectHighlightPainter = dart.privateName(editable, "_autocorrectHighlightPainter");
  var _cachedBuiltInForegroundPainters = dart.privateName(editable, "_cachedBuiltInForegroundPainters");
  var _cachedBuiltInPainters = dart.privateName(editable, "_cachedBuiltInPainters");
  var _textLayoutLastMaxWidth = dart.privateName(editable, "_textLayoutLastMaxWidth");
  var _textLayoutLastMinWidth = dart.privateName(editable, "_textLayoutLastMinWidth");
  var _lastCaretRect = dart.privateName(editable, "_lastCaretRect");
  var _selectionStartInViewport = dart.privateName(editable, "_selectionStartInViewport");
  var _selectionEndInViewport = dart.privateName(editable, "_selectionEndInViewport");
  var _cachedPlainText = dart.privateName(editable, "_cachedPlainText");
  var _cachedAttributedValue = dart.privateName(editable, "_cachedAttributedValue");
  var _cachedCombinedSemanticsInfos = dart.privateName(editable, "_cachedCombinedSemanticsInfos");
  var _hasFocus = dart.privateName(editable, "_hasFocus");
  var _forceLine = dart.privateName(editable, "_forceLine");
  var _readOnly = dart.privateName(editable, "_readOnly");
  var _cursorWidth = dart.privateName(editable, "_cursorWidth");
  var _floatingCursorOn = dart.privateName(editable, "_floatingCursorOn");
  var __RenderEditable__floatingCursorTextPosition = dart.privateName(editable, "_#RenderEditable#_floatingCursorTextPosition");
  var _maxScrollExtent = dart.privateName(editable, "_maxScrollExtent");
  var _clipBehavior = dart.privateName(editable, "_clipBehavior");
  var _semanticsInfo = dart.privateName(editable, "_semanticsInfo");
  var _cachedChildNodes = dart.privateName(editable, "_cachedChildNodes");
  var __RenderEditable__tap = dart.privateName(editable, "_#RenderEditable#_tap");
  var __RenderEditable__longPress = dart.privateName(editable, "_#RenderEditable#_longPress");
  var _lastTapDownPosition = dart.privateName(editable, "_lastTapDownPosition");
  var _lastSecondaryTapDownPosition = dart.privateName(editable, "_lastSecondaryTapDownPosition");
  var _placeholderDimensions = dart.privateName(editable, "_placeholderDimensions");
  var __RenderEditable__caretPrototype = dart.privateName(editable, "_#RenderEditable#_caretPrototype");
  var _relativeOrigin = dart.privateName(editable, "_relativeOrigin");
  var _previousOffset = dart.privateName(editable, "_previousOffset");
  var _resetOriginOnLeft = dart.privateName(editable, "_resetOriginOnLeft");
  var _resetOriginOnRight = dart.privateName(editable, "_resetOriginOnRight");
  var _resetOriginOnTop = dart.privateName(editable, "_resetOriginOnTop");
  var _resetOriginOnBottom = dart.privateName(editable, "_resetOriginOnBottom");
  var _resetFloatingCursorAnimationValue = dart.privateName(editable, "_resetFloatingCursorAnimationValue");
  var _clipRectLayer = dart.privateName(editable, "_clipRectLayer");
  var _showCursor = dart.privateName(editable, "_showCursor");
  var _maxLines = dart.privateName(editable, "_maxLines");
  var _minLines = dart.privateName(editable, "_minLines");
  var _expands = dart.privateName(editable, "_expands");
  var _selection = dart.privateName(editable, "_selection");
  var _offset = dart.privateName(editable, "_offset");
  var _cursorHeight = dart.privateName(editable, "_cursorHeight");
  var _paintCursorOnTop = dart.privateName(editable, "_paintCursorOnTop");
  var _enableInteractiveSelection = dart.privateName(editable, "_enableInteractiveSelection");
  var _devicePixelRatio = dart.privateName(editable, "_devicePixelRatio");
  var _startHandleLayerLink = dart.privateName(editable, "_startHandleLayerLink");
  var _endHandleLayerLink = dart.privateName(editable, "_endHandleLayerLink");
  var _obscuringCharacter = dart.privateName(editable, "_obscuringCharacter");
  var _obscureText = dart.privateName(editable, "_obscureText");
  var _caretPainter = dart.privateName(editable, "_caretPainter");
  var _updateForegroundPainter = dart.privateName(editable, "_updateForegroundPainter");
  var _updatePainter = dart.privateName(editable, "_updatePainter");
  var _extractPlaceholderSpans = dart.privateName(editable, "_extractPlaceholderSpans");
  var _builtInForegroundPainters = dart.privateName(editable, "_builtInForegroundPainters");
  var _placeholderSpans = dart.privateName(editable, "_placeholderSpans");
  var _builtInPainters = dart.privateName(editable, "_builtInPainters");
  var _onCaretChanged = dart.privateName(editable, "_onCaretChanged");
  var _createBuiltInForegroundPainters = dart.privateName(editable, "_createBuiltInForegroundPainters");
  var _createBuiltInPainters = dart.privateName(editable, "_createBuiltInPainters");
  var _caretPrototype = dart.privateName(editable, "_caretPrototype");
  var _getTextPositionVertical = dart.privateName(editable, "_getTextPositionVertical");
  var _plainText = dart.privateName(editable, "_plainText");
  var _updateSelectionExtentsVisibility = dart.privateName(editable, "_updateSelectionExtentsVisibility");
  var _setTextEditingValue = dart.privateName(editable, "_setTextEditingValue");
  var _handleSelectionChange = dart.privateName(editable, "_handleSelectionChange");
  var _setSelection = dart.privateName(editable, "_setSelection");
  var _showHideCursor = dart.privateName(editable, "_showHideCursor");
  var _floatingCursorTextPosition = dart.privateName(editable, "_floatingCursorTextPosition");
  var _caretMargin = dart.privateName(editable, "_caretMargin");
  var _isMultiline = dart.privateName(editable, "_isMultiline");
  var _handleSetSelection = dart.privateName(editable, "_handleSetSelection");
  var _handleSetText = dart.privateName(editable, "_handleSetText");
  var _handleMoveCursorBackwardByWord = dart.privateName(editable, "_handleMoveCursorBackwardByWord");
  var _handleMoveCursorBackwardByCharacter = dart.privateName(editable, "_handleMoveCursorBackwardByCharacter");
  var _handleMoveCursorForwardByWord = dart.privateName(editable, "_handleMoveCursorForwardByWord");
  var _handleMoveCursorForwardByCharacter = dart.privateName(editable, "_handleMoveCursorForwardByCharacter");
  var _getNextWord = dart.privateName(editable, "_getNextWord");
  var _getPreviousWord = dart.privateName(editable, "_getPreviousWord");
  var _onlyWhitespace = dart.privateName(editable, "_onlyWhitespace");
  var _tap = dart.privateName(editable, "_tap");
  var _handleTapDown = dart.privateName(editable, "_handleTapDown");
  var _handleTap = dart.privateName(editable, "_handleTap");
  var _longPress = dart.privateName(editable, "_longPress");
  var _handleLongPress = dart.privateName(editable, "_handleLongPress");
  var _viewportAxis = dart.privateName(editable, "_viewportAxis");
  var _paintOffset = dart.privateName(editable, "_paintOffset");
  var _viewportExtent = dart.privateName(editable, "_viewportExtent");
  var _getMaxScrollExtent = dart.privateName(editable, "_getMaxScrollExtent");
  var _hasVisualOverflow = dart.privateName(editable, "_hasVisualOverflow");
  var _computeTextMetricsIfNeeded = dart.privateName(editable, "_computeTextMetricsIfNeeded");
  var _snapToPhysicalPixel = dart.privateName(editable, "_snapToPhysicalPixel");
  var _layoutText = dart.privateName(editable, "_layoutText");
  var _preferredHeight = dart.privateName(editable, "_preferredHeight");
  var _getWordAtOffset = dart.privateName(editable, "_getWordAtOffset");
  var _layoutChildren = dart.privateName(editable, "_layoutChildren");
  var _setParentData = dart.privateName(editable, "_setParentData");
  var _computeCaretPrototype = dart.privateName(editable, "_computeCaretPrototype");
  var _canComputeDryLayout = dart.privateName(editable, "_canComputeDryLayout");
  var _lineNumberFor = dart.privateName(editable, "_lineNumberFor");
  var _paintContents = dart.privateName(editable, "_paintContents");
  var _paintHandleLayers = dart.privateName(editable, "_paintHandleLayers");
  const RenderBox_RelayoutWhenSystemFontsChangeMixin$36 = class RenderBox_RelayoutWhenSystemFontsChangeMixin extends box.RenderBox {};
  (RenderBox_RelayoutWhenSystemFontsChangeMixin$36.new = function() {
    RenderBox_RelayoutWhenSystemFontsChangeMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RelayoutWhenSystemFontsChangeMixin$36.prototype;
  dart.applyMixin(RenderBox_RelayoutWhenSystemFontsChangeMixin$36, object.RelayoutWhenSystemFontsChangeMixin);
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends RenderBox_RelayoutWhenSystemFontsChangeMixin$36 {};
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
  editable.RenderEditable = class RenderEditable extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    get onSelectionChanged() {
      return this[onSelectionChanged$];
    }
    set onSelectionChanged(value) {
      this[onSelectionChanged$] = value;
    }
    get onCaretChanged() {
      return this[onCaretChanged$];
    }
    set onCaretChanged(value) {
      this[onCaretChanged$] = value;
    }
    get ignorePointer() {
      return this[ignorePointer$];
    }
    set ignorePointer(value) {
      this[ignorePointer$] = value;
    }
    get textSelectionDelegate() {
      return this[textSelectionDelegate$];
    }
    set textSelectionDelegate(value) {
      this[textSelectionDelegate$] = value;
    }
    get floatingCursorAddedMargin() {
      return this[floatingCursorAddedMargin$];
    }
    set floatingCursorAddedMargin(value) {
      this[floatingCursorAddedMargin$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[2] || CT.C2;
      let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
      let backgroundCursorColor = opts && 'backgroundCursorColor' in opts ? opts.backgroundCursorColor : null;
      let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
      let hasFocus = opts && 'hasFocus' in opts ? opts.hasFocus : null;
      let startHandleLayerLink = opts && 'startHandleLayerLink' in opts ? opts.startHandleLayerLink : null;
      let endHandleLayerLink = opts && 'endHandleLayerLink' in opts ? opts.endHandleLayerLink : null;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
      let minLines = opts && 'minLines' in opts ? opts.minLines : null;
      let expands = opts && 'expands' in opts ? opts.expands : false;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      let selectionColor = opts && 'selectionColor' in opts ? opts.selectionColor : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let onSelectionChanged = opts && 'onSelectionChanged' in opts ? opts.onSelectionChanged : null;
      let onCaretChanged = opts && 'onCaretChanged' in opts ? opts.onCaretChanged : null;
      let ignorePointer = opts && 'ignorePointer' in opts ? opts.ignorePointer : false;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
      let forceLine = opts && 'forceLine' in opts ? opts.forceLine : true;
      let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
      let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[3] || CT.C3;
      let obscuringCharacter = opts && 'obscuringCharacter' in opts ? opts.obscuringCharacter : "•";
      let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 1;
      let cursorHeight = opts && 'cursorHeight' in opts ? opts.cursorHeight : null;
      let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
      let paintCursorAboveText = opts && 'paintCursorAboveText' in opts ? opts.paintCursorAboveText : false;
      let cursorOffset = opts && 'cursorOffset' in opts ? opts.cursorOffset : C[4] || CT.C4;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
      let selectionHeightStyle = opts && 'selectionHeightStyle' in opts ? opts.selectionHeightStyle : C[5] || CT.C5;
      let selectionWidthStyle = opts && 'selectionWidthStyle' in opts ? opts.selectionWidthStyle : C[6] || CT.C6;
      let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
      let floatingCursorAddedMargin = opts && 'floatingCursorAddedMargin' in opts ? opts.floatingCursorAddedMargin : C[7] || CT.C7;
      let promptRectRange = opts && 'promptRectRange' in opts ? opts.promptRectRange : null;
      let promptRectColor = opts && 'promptRectColor' in opts ? opts.promptRectColor : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[8] || CT.C8;
      let textSelectionDelegate = opts && 'textSelectionDelegate' in opts ? opts.textSelectionDelegate : null;
      let painter = opts && 'painter' in opts ? opts.painter : null;
      let foregroundPainter = opts && 'foregroundPainter' in opts ? opts.foregroundPainter : null;
      let children = opts && 'children' in opts ? opts.children : null;
      return new editable.RenderEditable.new({text: text, textDirection: textDirection, textAlign: textAlign, cursorColor: cursorColor, backgroundCursorColor: backgroundCursorColor, showCursor: showCursor, hasFocus: hasFocus, startHandleLayerLink: startHandleLayerLink, endHandleLayerLink: endHandleLayerLink, maxLines: maxLines, minLines: minLines, expands: expands, strutStyle: strutStyle, selectionColor: selectionColor, textScaleFactor: textScaleFactor, selection: selection, offset: offset, onSelectionChanged: onSelectionChanged, onCaretChanged: onCaretChanged, ignorePointer: ignorePointer, readOnly: readOnly, forceLine: forceLine, textHeightBehavior: textHeightBehavior, textWidthBasis: textWidthBasis, obscuringCharacter: obscuringCharacter, obscureText: obscureText, locale: locale, cursorWidth: cursorWidth, cursorHeight: cursorHeight, cursorRadius: cursorRadius, paintCursorAboveText: paintCursorAboveText, cursorOffset: cursorOffset, devicePixelRatio: devicePixelRatio, selectionHeightStyle: selectionHeightStyle, selectionWidthStyle: selectionWidthStyle, enableInteractiveSelection: enableInteractiveSelection, floatingCursorAddedMargin: floatingCursorAddedMargin, promptRectRange: promptRectRange, promptRectColor: promptRectColor, clipBehavior: clipBehavior, textSelectionDelegate: textSelectionDelegate, painter: painter, foregroundPainter: foregroundPainter, children: children});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!paragraph.TextParentData.is(child.parentData)) child.parentData = new paragraph.TextParentData.new();
    }
    dispose() {
      let t0, t0$, t0$0, t0$1;
      t0 = this[_foregroundRenderObject];
      t0 == null ? null : t0.dispose();
      this[_foregroundRenderObject] = null;
      t0$ = this[_backgroundRenderObject];
      t0$ == null ? null : t0$.dispose();
      this[_backgroundRenderObject] = null;
      this[_clipRectLayer].layer = null;
      t0$0 = this[_cachedBuiltInForegroundPainters];
      t0$0 == null ? null : t0$0.dispose();
      t0$1 = this[_cachedBuiltInPainters];
      t0$1 == null ? null : t0$1.dispose();
      super.dispose();
    }
    [_updateForegroundPainter](newPainter) {
      let t0;
      let effectivePainter = newPainter == null ? this[_builtInForegroundPainters] : new editable._CompositeRenderEditablePainter.new({painters: T.JSArrayOfRenderEditablePainter().of([this[_builtInForegroundPainters], newPainter])});
      if (this[_foregroundRenderObject] == null) {
        let foregroundRenderObject = new editable._RenderEditableCustomPaint.new({painter: effectivePainter});
        this.adoptChild(foregroundRenderObject);
        this[_foregroundRenderObject] = foregroundRenderObject;
      } else {
        t0 = this[_foregroundRenderObject];
        t0 == null ? null : t0.painter = effectivePainter;
      }
      this[_foregroundPainter] = newPainter;
    }
    get [_placeholderSpans]() {
      let t0;
      t0 = this[__RenderEditable__placeholderSpans];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_placeholderSpans")) : t0;
    }
    set [_placeholderSpans](t0) {
      this[__RenderEditable__placeholderSpans] = t0;
    }
    [_extractPlaceholderSpans](span) {
      let t1;
      this[_placeholderSpans] = T.JSArrayOfPlaceholderSpan().of([]);
      t1 = span;
      t1 == null ? null : t1.visitChildren(dart.fn(span => {
        if (placeholder_span.PlaceholderSpan.is(span)) {
          this[_placeholderSpans][$add](span);
        }
        return true;
      }, T.InlineSpanTobool()));
    }
    get foregroundPainter() {
      return this[_foregroundPainter];
    }
    set foregroundPainter(newPainter) {
      if (dart.equals(newPainter, this[_foregroundPainter])) return;
      this[_updateForegroundPainter](newPainter);
    }
    [_updatePainter](newPainter) {
      let t1;
      let effectivePainter = newPainter == null ? this[_builtInPainters] : new editable._CompositeRenderEditablePainter.new({painters: T.JSArrayOfRenderEditablePainter().of([this[_builtInPainters], newPainter])});
      if (this[_backgroundRenderObject] == null) {
        let backgroundRenderObject = new editable._RenderEditableCustomPaint.new({painter: effectivePainter});
        this.adoptChild(backgroundRenderObject);
        this[_backgroundRenderObject] = backgroundRenderObject;
      } else {
        t1 = this[_backgroundRenderObject];
        t1 == null ? null : t1.painter = effectivePainter;
      }
      this[_painter] = newPainter;
    }
    get painter() {
      return this[_painter];
    }
    set painter(newPainter) {
      if (dart.equals(newPainter, this[_painter])) return;
      this[_updatePainter](newPainter);
    }
    get [_caretPainter]() {
      let t2, t1;
      t1 = this[__RenderEditable__caretPainter];
      return t1 == null ? (t2 = new editable._FloatingCursorPainter.new(dart.bind(this, _onCaretChanged)), this[__RenderEditable__caretPainter] == null ? this[__RenderEditable__caretPainter] = t2 : dart.throw(new _internal.LateError.fieldADI("_caretPainter"))) : t1;
    }
    get [_builtInForegroundPainters]() {
      let t1;
      t1 = this[_cachedBuiltInForegroundPainters];
      return t1 == null ? this[_cachedBuiltInForegroundPainters] = this[_createBuiltInForegroundPainters]() : t1;
    }
    [_createBuiltInForegroundPainters]() {
      return new editable._CompositeRenderEditablePainter.new({painters: (() => {
          let t1 = T.JSArrayOfRenderEditablePainter().of([]);
          if (this.paintCursorAboveText) t1.push(this[_caretPainter]);
          return t1;
        })()});
    }
    get [_builtInPainters]() {
      let t2;
      t2 = this[_cachedBuiltInPainters];
      return t2 == null ? this[_cachedBuiltInPainters] = this[_createBuiltInPainters]() : t2;
    }
    [_createBuiltInPainters]() {
      return new editable._CompositeRenderEditablePainter.new({painters: (() => {
          let t2 = T.JSArrayOfRenderEditablePainter().of([this[_autocorrectHighlightPainter], this[_selectionPainter]]);
          if (!this.paintCursorAboveText) t2.push(this[_caretPainter]);
          return t2;
        })()});
    }
    debugAssertLayoutUpToDate() {
      if (!(this[_textLayoutLastMaxWidth] === this.constraints.maxWidth && this[_textLayoutLastMinWidth] === this.constraints.minWidth)) dart.assertFailed("Last width (" + dart.str(this[_textLayoutLastMinWidth]) + ", " + dart.str(this[_textLayoutLastMaxWidth]) + ") not the same as max width constraint (" + dart.str(this.constraints.minWidth) + ", " + dart.str(this.constraints.maxWidth) + ").", I[0], 519, 7, "_textLayoutLastMaxWidth == constraints.maxWidth &&\n      _textLayoutLastMinWidth == constraints.minWidth");
    }
    [_onCaretChanged](caretRect) {
      let t3;
      if (!dart.equals(this[_lastCaretRect], caretRect)) {
        t3 = this.onCaretChanged;
        t3 == null ? null : t3(caretRect);
      }
      this[_lastCaretRect] = this.onCaretChanged == null ? null : caretRect;
    }
    get textHeightBehavior() {
      return this[_textPainter].textHeightBehavior;
    }
    set textHeightBehavior(value) {
      if (dart.equals(this[_textPainter].textHeightBehavior, value)) return;
      this[_textPainter].textHeightBehavior = value;
      this.markNeedsTextLayout();
    }
    get textWidthBasis() {
      return this[_textPainter].textWidthBasis;
    }
    set textWidthBasis(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 562, 12, "value != null");
      if (this[_textPainter].textWidthBasis === value) return;
      this[_textPainter].textWidthBasis = value;
      this.markNeedsTextLayout();
    }
    get devicePixelRatio() {
      return this[_devicePixelRatio];
    }
    set devicePixelRatio(value) {
      if (this.devicePixelRatio === value) return;
      this[_devicePixelRatio] = value;
      this.markNeedsTextLayout();
    }
    get obscuringCharacter() {
      return this[_obscuringCharacter];
    }
    set obscuringCharacter(value) {
      if (this[_obscuringCharacter] === value) {
        return;
      }
      if (!(value !== null && extensions['StringCharacters|get#characters'](value)[$length] === 1)) dart.assertFailed(null, I[0], 590, 12, "value != null && value.characters.length == 1");
      this[_obscuringCharacter] = value;
      this.markNeedsLayout();
    }
    get obscureText() {
      return this[_obscureText];
    }
    set obscureText(value) {
      if (this[_obscureText] === value) return;
      this[_obscureText] = value;
      this.markNeedsSemanticsUpdate();
    }
    get selectionHeightStyle() {
      return this[_selectionPainter].selectionHeightStyle;
    }
    set selectionHeightStyle(value) {
      this[_selectionPainter].selectionHeightStyle = value;
    }
    get selectionWidthStyle() {
      return this[_selectionPainter].selectionWidthStyle;
    }
    set selectionWidthStyle(value) {
      this[_selectionPainter].selectionWidthStyle = value;
    }
    get selectionStartInViewport() {
      return this[_selectionStartInViewport];
    }
    get selectionEndInViewport() {
      return this[_selectionEndInViewport];
    }
    [_getTextPositionVertical](position, verticalOffset) {
      let caretOffset = this[_textPainter].getOffsetForCaret(position, this[_caretPrototype]);
      let caretOffsetTranslated = caretOffset.translate(0.0, verticalOffset);
      return this[_textPainter].getPositionForOffset(caretOffsetTranslated);
    }
    getLineAtOffset(position) {
      this.debugAssertLayoutUpToDate();
      let line = this[_textPainter].getLineBoundary(position);
      if (this.obscureText) {
        return new text_editing.TextSelection.new({baseOffset: 0, extentOffset: this[_plainText].length});
      }
      return new text_editing.TextSelection.new({baseOffset: line.start, extentOffset: line.end});
    }
    getWordBoundary(position) {
      return this[_textPainter].getWordBoundary(position);
    }
    getTextPositionAbove(position) {
      let preferredLineHeight = this[_textPainter].preferredLineHeight;
      let verticalOffset = -0.5 * preferredLineHeight;
      return this[_getTextPositionVertical](position, verticalOffset);
    }
    getTextPositionBelow(position) {
      let preferredLineHeight = this[_textPainter].preferredLineHeight;
      let verticalOffset = 1.5 * preferredLineHeight;
      return this[_getTextPositionVertical](position, verticalOffset);
    }
    [_updateSelectionExtentsVisibility](effectiveOffset) {
      if (!(this.selection != null)) dart.assertFailed(null, I[0], 706, 12, "selection != null");
      let visibleRegion = ui.Offset.zero['&'](this.size);
      let startOffset = this[_textPainter].getOffsetForCaret(new ui.TextPosition.new({offset: dart.nullCheck(this.selection).start, affinity: dart.nullCheck(this.selection).affinity}), this[_caretPrototype]);
      this[_selectionStartInViewport].value = visibleRegion.inflate(0.5).contains(startOffset['+'](effectiveOffset));
      let endOffset = this[_textPainter].getOffsetForCaret(new ui.TextPosition.new({offset: dart.nullCheck(this.selection).end, affinity: dart.nullCheck(this.selection).affinity}), this[_caretPrototype]);
      this[_selectionEndInViewport].value = visibleRegion.inflate(0.5).contains(endOffset['+'](effectiveOffset));
    }
    [_setTextEditingValue](newValue, cause) {
      this.textSelectionDelegate.textEditingValue = newValue;
      this.textSelectionDelegate.userUpdateTextEditingValue(newValue, cause);
    }
    [_setSelection](nextSelection, cause) {
      if (nextSelection.isValid) {
        let textLength = this.textSelectionDelegate.textEditingValue.text.length;
        nextSelection = nextSelection.copyWith({baseOffset: math.min(core.int, nextSelection.baseOffset, textLength), extentOffset: math.min(core.int, nextSelection.extentOffset, textLength)});
      }
      this[_handleSelectionChange](nextSelection, cause);
      this[_setTextEditingValue](this.textSelectionDelegate.textEditingValue.copyWith({selection: nextSelection}), cause);
    }
    [_handleSelectionChange](nextSelection, cause) {
      let t3;
      let focusingEmpty = nextSelection.baseOffset === 0 && nextSelection.extentOffset === 0 && !this.hasFocus;
      if (nextSelection._equals(this.selection) && cause !== text_input.SelectionChangedCause.keyboard && !focusingEmpty) {
        return;
      }
      t3 = this.onSelectionChanged;
      t3 == null ? null : t3(nextSelection, this, cause);
    }
    markNeedsPaint() {
      let t3, t3$;
      super.markNeedsPaint();
      t3 = this[_foregroundRenderObject];
      t3 == null ? null : t3.markNeedsPaint();
      t3$ = this[_backgroundRenderObject];
      t3$ == null ? null : t3$.markNeedsPaint();
    }
    markNeedsTextLayout() {
      this[_textLayoutLastMaxWidth] = null;
      this[_textLayoutLastMinWidth] = null;
      this.markNeedsLayout();
    }
    systemFontsDidChange() {
      super.systemFontsDidChange();
      this[_textPainter].markNeedsLayout();
      this[_textLayoutLastMaxWidth] = null;
      this[_textLayoutLastMinWidth] = null;
    }
    get [_plainText]() {
      this[_cachedPlainText] == null ? this[_cachedPlainText] = dart.nullCheck(this[_textPainter].text).toPlainText({includeSemanticsLabels: false}) : null;
      return dart.nullCheck(this[_cachedPlainText]);
    }
    get text() {
      return this[_textPainter].text;
    }
    set text(value) {
      if (dart.equals(this[_textPainter].text, value)) return;
      this[_textPainter].text = value;
      this[_cachedPlainText] = null;
      this[_cachedAttributedValue] = null;
      this[_cachedCombinedSemanticsInfos] = null;
      this[_extractPlaceholderSpans](value);
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get textAlign() {
      return this[_textPainter].textAlign;
    }
    set textAlign(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 835, 12, "value != null");
      if (this[_textPainter].textAlign === value) return;
      this[_textPainter].textAlign = value;
      this.markNeedsTextLayout();
    }
    get textDirection() {
      return dart.nullCheck(this[_textPainter].textDirection);
    }
    set textDirection(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 860, 12, "value != null");
      if (this[_textPainter].textDirection === value) return;
      this[_textPainter].textDirection = value;
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get locale() {
      return this[_textPainter].locale;
    }
    set locale(value) {
      if (dart.equals(this[_textPainter].locale, value)) return;
      this[_textPainter].locale = value;
      this.markNeedsTextLayout();
    }
    get strutStyle() {
      return this[_textPainter].strutStyle;
    }
    set strutStyle(value) {
      if (dart.equals(this[_textPainter].strutStyle, value)) return;
      this[_textPainter].strutStyle = value;
      this.markNeedsTextLayout();
    }
    get cursorColor() {
      return this[_caretPainter].caretColor;
    }
    set cursorColor(value) {
      this[_caretPainter].caretColor = value;
    }
    get backgroundCursorColor() {
      return this[_caretPainter].backgroundCursorColor;
    }
    set backgroundCursorColor(value) {
      this[_caretPainter].backgroundCursorColor = value;
    }
    get showCursor() {
      return this[_showCursor];
    }
    set showCursor(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 915, 12, "value != null");
      if (this[_showCursor][$_equals](value)) return;
      if (this.attached) this[_showCursor].removeListener(dart.bind(this, _showHideCursor));
      this[_showCursor] = value;
      if (this.attached) {
        this[_showHideCursor]();
        this[_showCursor].addListener(dart.bind(this, _showHideCursor));
      }
    }
    [_showHideCursor]() {
      this[_caretPainter].shouldPaint = this.showCursor.value;
    }
    get hasFocus() {
      return this[_hasFocus];
    }
    set hasFocus(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 935, 12, "value != null");
      if (this[_hasFocus] === value) return;
      this[_hasFocus] = value;
      this.markNeedsSemanticsUpdate();
    }
    get forceLine() {
      return this[_forceLine];
    }
    set forceLine(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 946, 12, "value != null");
      if (this[_forceLine] === value) return;
      this[_forceLine] = value;
      this.markNeedsLayout();
    }
    get readOnly() {
      return this[_readOnly];
    }
    set readOnly(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 957, 12, "value != null");
      if (this[_readOnly] === value) return;
      this[_readOnly] = value;
      this.markNeedsSemanticsUpdate();
    }
    get maxLines() {
      return this[_maxLines];
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, I[0], 978, 12, "value == null || value > 0");
      if (this.maxLines == value) return;
      this[_maxLines] = value;
      this.markNeedsTextLayout();
    }
    get minLines() {
      return this[_minLines];
    }
    set minLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, I[0], 990, 12, "value == null || value > 0");
      if (this.minLines == value) return;
      this[_minLines] = value;
      this.markNeedsTextLayout();
    }
    get expands() {
      return this[_expands];
    }
    set expands(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1001, 12, "value != null");
      if (this.expands === value) return;
      this[_expands] = value;
      this.markNeedsTextLayout();
    }
    get selectionColor() {
      return this[_selectionPainter].highlightColor;
    }
    set selectionColor(value) {
      this[_selectionPainter].highlightColor = value;
    }
    get textScaleFactor() {
      return this[_textPainter].textScaleFactor;
    }
    set textScaleFactor(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1020, 12, "value != null");
      if (this[_textPainter].textScaleFactor === value) return;
      this[_textPainter].textScaleFactor = value;
      this.markNeedsTextLayout();
    }
    get selection() {
      return this[_selection];
    }
    set selection(value) {
      if (dart.equals(this[_selection], value)) return;
      this[_selection] = value;
      this[_selectionPainter].highlightedRange = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1052, 12, "value != null");
      if (this[_offset][$_equals](value)) return;
      if (this.attached) this[_offset].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_offset] = value;
      if (this.attached) this[_offset].addListener(dart.bind(this, 'markNeedsPaint'));
      this.markNeedsLayout();
    }
    get cursorWidth() {
      return this[_cursorWidth];
    }
    set cursorWidth(value) {
      if (this[_cursorWidth] === value) return;
      this[_cursorWidth] = value;
      this.markNeedsLayout();
    }
    get cursorHeight() {
      let t3;
      t3 = this[_cursorHeight];
      return t3 == null ? this.preferredLineHeight : t3;
    }
    set cursorHeight(value) {
      if (this[_cursorHeight] == value) return;
      this[_cursorHeight] = value;
      this.markNeedsLayout();
    }
    get paintCursorAboveText() {
      return this[_paintCursorOnTop];
    }
    set paintCursorAboveText(value) {
      if (this[_paintCursorOnTop] === value) return;
      this[_paintCursorOnTop] = value;
      this[_cachedBuiltInForegroundPainters] = null;
      this[_cachedBuiltInPainters] = null;
      this[_updateForegroundPainter](this[_foregroundPainter]);
      this[_updatePainter](this[_painter]);
    }
    get cursorOffset() {
      return this[_caretPainter].cursorOffset;
    }
    set cursorOffset(value) {
      this[_caretPainter].cursorOffset = value;
    }
    get cursorRadius() {
      return this[_caretPainter].cursorRadius;
    }
    set cursorRadius(value) {
      this[_caretPainter].cursorRadius = value;
    }
    get startHandleLayerLink() {
      return this[_startHandleLayerLink];
    }
    set startHandleLayerLink(value) {
      if (this[_startHandleLayerLink][$_equals](value)) return;
      this[_startHandleLayerLink] = value;
      this.markNeedsPaint();
    }
    get endHandleLayerLink() {
      return this[_endHandleLayerLink];
    }
    set endHandleLayerLink(value) {
      if (this[_endHandleLayerLink][$_equals](value)) return;
      this[_endHandleLayerLink] = value;
      this.markNeedsPaint();
    }
    get [_floatingCursorTextPosition]() {
      let t3;
      t3 = this[__RenderEditable__floatingCursorTextPosition];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_floatingCursorTextPosition")) : t3;
    }
    set [_floatingCursorTextPosition](t3) {
      this[__RenderEditable__floatingCursorTextPosition] = t3;
    }
    get enableInteractiveSelection() {
      return this[_enableInteractiveSelection];
    }
    set enableInteractiveSelection(value) {
      if (this[_enableInteractiveSelection] == value) return;
      this[_enableInteractiveSelection] = value;
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get selectionEnabled() {
      let t4;
      t4 = this.enableInteractiveSelection;
      return t4 == null ? !this.obscureText : t4;
    }
    get promptRectColor() {
      return this[_autocorrectHighlightPainter].highlightColor;
    }
    set promptRectColor(newValue) {
      this[_autocorrectHighlightPainter].highlightColor = newValue;
    }
    setPromptRectRange(newRange) {
      this[_autocorrectHighlightPainter].highlightedRange = newRange;
    }
    get maxScrollExtent() {
      return this[_maxScrollExtent];
    }
    get [_caretMargin]() {
      return 1 + this.cursorWidth;
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1250, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    describeSemanticsConfiguration(config) {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3;
      super.describeSemanticsConfiguration(config);
      this[_semanticsInfo] = dart.nullCheck(this[_textPainter].text).getSemanticsInformation();
      if (dart.nullCheck(this[_semanticsInfo])[$any](dart.fn(info => info.recognizer != null, T.InlineSpanSemanticsInformationTobool())) && platform.defaultTargetPlatform !== platform.TargetPlatform.macOS) {
        if (!(this.readOnly && !this.obscureText)) dart.assertFailed(null, I[0], 1278, 14, "readOnly && !obscureText");
        t4 = config;
        (() => {
          t4.isSemanticBoundary = true;
          t4.explicitChildNodes = true;
          return t4;
        })();
        return;
      }
      if (this[_cachedAttributedValue] == null) {
        if (this.obscureText) {
          this[_cachedAttributedValue] = new semantics.AttributedString.new(this.obscuringCharacter[$times](this[_plainText].length));
        } else {
          let buffer = new core.StringBuffer.new();
          let offset = 0;
          let attributes = T.JSArrayOfStringAttribute().of([]);
          for (let info of dart.nullCheck(this[_semanticsInfo])) {
            let label = (t4$ = info.semanticsLabel, t4$ == null ? info.text : t4$);
            for (let infoAttribute of info.stringAttributes) {
              let originalRange = infoAttribute.range;
              attributes[$add](infoAttribute.copy({range: new ui.TextRange.new({start: offset + originalRange.start, end: offset + originalRange.end})}));
            }
            buffer.write(label);
            offset = offset + label.length;
          }
          this[_cachedAttributedValue] = new semantics.AttributedString.new(buffer.toString(), {attributes: attributes});
        }
      }
      t4$0 = config;
      (() => {
        t4$0.attributedValue = dart.nullCheck(this[_cachedAttributedValue]);
        t4$0.isObscured = this.obscureText;
        t4$0.isMultiline = this[_isMultiline];
        t4$0.textDirection = this.textDirection;
        t4$0.isFocused = this.hasFocus;
        t4$0.isTextField = true;
        t4$0.isReadOnly = this.readOnly;
        return t4$0;
      })();
      if (this.hasFocus && this.selectionEnabled) config.onSetSelection = dart.bind(this, _handleSetSelection);
      if (this.hasFocus && !this.readOnly) config.onSetText = dart.bind(this, _handleSetText);
      if (this.selectionEnabled && (t4$1 = this.selection, t4$1 == null ? null : t4$1.isValid) === true) {
        config.textSelection = this.selection;
        if (this[_textPainter].getOffsetBefore(dart.nullCheck(this.selection).extentOffset) != null) {
          t4$2 = config;
          (() => {
            t4$2.onMoveCursorBackwardByWord = dart.bind(this, _handleMoveCursorBackwardByWord);
            t4$2.onMoveCursorBackwardByCharacter = dart.bind(this, _handleMoveCursorBackwardByCharacter);
            return t4$2;
          })();
        }
        if (this[_textPainter].getOffsetAfter(dart.nullCheck(this.selection).extentOffset) != null) {
          t4$3 = config;
          (() => {
            t4$3.onMoveCursorForwardByWord = dart.bind(this, _handleMoveCursorForwardByWord);
            t4$3.onMoveCursorForwardByCharacter = dart.bind(this, _handleMoveCursorForwardByCharacter);
            return t4$3;
          })();
        }
      }
    }
    [_handleSetText](text) {
      this.textSelectionDelegate.userUpdateTextEditingValue(new text_input.TextEditingValue.new({text: text, selection: new text_editing.TextSelection.collapsed({offset: text.length})}), text_input.SelectionChangedCause.keyboard);
    }
    assembleSemanticsNode(node, config, children) {
      let t5, t5$, t4, t4$, t4$0;
      if (!(this[_semanticsInfo] != null && dart.nullCheck(this[_semanticsInfo])[$isNotEmpty])) dart.assertFailed(null, I[0], 1351, 12, "_semanticsInfo != null && _semanticsInfo!.isNotEmpty");
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
            if (!(parentData.scale != null)) dart.assertFailed(null, I[0], 1376, 18, "parentData.scale != null");
            childNode.rect = new ui.Rect.fromLTWH(childNode.rect.left, childNode.rect.top, childNode.rect.width * dart.nullCheck(parentData.scale), childNode.rect.height * dart.nullCheck(parentData.scale));
            newChildren[$add](childNode);
            childIndex = childIndex + 1;
          }
          child = this.childAfter(dart.nullCheck(child));
          placeholderIndex = placeholderIndex + 1;
        } else {
          let initialDirection = currentDirection;
          let rects = this[_textPainter].getBoxesForSelection(selection);
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
          let configuration = (t4 = new semantics.SemanticsConfiguration.new(), (() => {
            t4.sortKey = new semantics.OrdinalSortKey.new((t5 = ordinal, ordinal = t5 + 1, t5));
            t4.textDirection = initialDirection;
            t4.attributedLabel = new semantics.AttributedString.new((t5$ = info.semanticsLabel, t5$ == null ? info.text : t5$), {attributes: info.stringAttributes});
            return t4;
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
              if (!false) dart.assertFailed(dart.str(dart.runtimeType(recognizer)) + " is not supported.", I[0], 1437, 20, "false");
            }
          }
          let newChild = (t4$ = this[_cachedChildNodes], t4$ == null ? null : t4$[$isNotEmpty]) === true ? dart.nullCheck(this[_cachedChildNodes]).removeFirst() : new semantics.SemanticsNode.new();
          t4$0 = newChild;
          (() => {
            t4$0.updateWith({config: configuration});
            t4$0.rect = currentRect;
            return t4$0;
          })();
          newChildCache.addLast(newChild);
          newChildren[$add](newChild);
        }
      }
      this[_cachedChildNodes] = newChildCache;
      node.updateWith({config: config, childrenInInversePaintOrder: newChildren});
    }
    [_handleSetSelection](selection) {
      this[_setSelection](selection, text_input.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorForwardByCharacter](extentSelection) {
      if (!(this.selection != null)) dart.assertFailed(null, I[0], 1463, 12, "selection != null");
      let extentOffset = this[_textPainter].getOffsetAfter(dart.nullCheck(this.selection).extentOffset);
      if (extentOffset == null) return;
      let baseOffset = !extentSelection ? extentOffset : dart.nullCheck(this.selection).baseOffset;
      this[_setSelection](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset}), text_input.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorBackwardByCharacter](extentSelection) {
      if (!(this.selection != null)) dart.assertFailed(null, I[0], 1475, 12, "selection != null");
      let extentOffset = this[_textPainter].getOffsetBefore(dart.nullCheck(this.selection).extentOffset);
      if (extentOffset == null) return;
      let baseOffset = !extentSelection ? extentOffset : dart.nullCheck(this.selection).baseOffset;
      this[_setSelection](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset}), text_input.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorForwardByWord](extentSelection) {
      if (!(this.selection != null)) dart.assertFailed(null, I[0], 1487, 12, "selection != null");
      let currentWord = this[_textPainter].getWordBoundary(dart.nullCheck(this.selection).extent);
      let nextWord = this[_getNextWord](currentWord.end);
      if (nextWord == null) return;
      let baseOffset = extentSelection ? dart.nullCheck(this.selection).baseOffset : nextWord.start;
      this[_setSelection](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: nextWord.start}), text_input.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorBackwardByWord](extentSelection) {
      if (!(this.selection != null)) dart.assertFailed(null, I[0], 1503, 12, "selection != null");
      let currentWord = this[_textPainter].getWordBoundary(dart.nullCheck(this.selection).extent);
      let previousWord = this[_getPreviousWord](currentWord.start - 1);
      if (previousWord == null) return;
      let baseOffset = extentSelection ? dart.nullCheck(this.selection).baseOffset : previousWord.start;
      this[_setSelection](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: previousWord.start}), text_input.SelectionChangedCause.keyboard);
    }
    [_getNextWord](offset) {
      while (true) {
        let range = this[_textPainter].getWordBoundary(new ui.TextPosition.new({offset: offset}));
        if (range === null || !range.isValid || range.isCollapsed) return null;
        if (!this[_onlyWhitespace](range)) return range;
        offset = range.end;
      }
    }
    [_getPreviousWord](offset) {
      while (offset >= 0) {
        let range = this[_textPainter].getWordBoundary(new ui.TextPosition.new({offset: offset}));
        if (range === null || !range.isValid || range.isCollapsed) return null;
        if (!this[_onlyWhitespace](range)) return range;
        offset = range.start - 1;
      }
      return null;
    }
    [_onlyWhitespace](range) {
      for (let i = range.start; i < range.end; i = i + 1) {
        let codeUnit = dart.nullCheck(dart.nullCheck(this.text).codeUnitAt(i));
        if (!text_layout_metrics.TextLayoutMetrics.isWhitespace(codeUnit)) {
          return false;
        }
      }
      return true;
    }
    attach(owner) {
      let t4, t4$, t4$0, t4$1;
      object.PipelineOwner.as(owner);
      super.attach(owner);
      t4 = this[_foregroundRenderObject];
      t4 == null ? null : t4.attach(owner);
      t4$ = this[_backgroundRenderObject];
      t4$ == null ? null : t4$.attach(owner);
      this[_tap] = (t4$0 = new tap.TapGestureRecognizer.new({debugOwner: this}), (() => {
        t4$0.onTapDown = dart.bind(this, _handleTapDown);
        t4$0.onTap = dart.bind(this, _handleTap);
        return t4$0;
      })());
      this[_longPress] = (t4$1 = new long_press.LongPressGestureRecognizer.new({debugOwner: this}), (() => {
        t4$1.onLongPress = dart.bind(this, _handleLongPress);
        return t4$1;
      })());
      this[_offset].addListener(dart.bind(this, 'markNeedsPaint'));
      this[_showHideCursor]();
      this[_showCursor].addListener(dart.bind(this, _showHideCursor));
    }
    detach() {
      let t4, t4$;
      this[_tap].dispose();
      this[_longPress].dispose();
      this[_offset].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_showCursor].removeListener(dart.bind(this, _showHideCursor));
      super.detach();
      t4 = this[_foregroundRenderObject];
      t4 == null ? null : t4.detach();
      t4$ = this[_backgroundRenderObject];
      t4$ == null ? null : t4$.detach();
    }
    redepthChildren() {
      let foregroundChild = this[_foregroundRenderObject];
      let backgroundChild = this[_backgroundRenderObject];
      if (foregroundChild != null) this.redepthChild(foregroundChild);
      if (backgroundChild != null) this.redepthChild(backgroundChild);
      super.redepthChildren();
    }
    visitChildren(visitor) {
      let foregroundChild = this[_foregroundRenderObject];
      let backgroundChild = this[_backgroundRenderObject];
      if (foregroundChild != null) visitor(foregroundChild);
      if (backgroundChild != null) visitor(backgroundChild);
      super.visitChildren(visitor);
    }
    get [_isMultiline]() {
      return this.maxLines !== 1;
    }
    get [_viewportAxis]() {
      return this[_isMultiline] ? basic_types.Axis.vertical : basic_types.Axis.horizontal;
    }
    get [_paintOffset]() {
      switch (this[_viewportAxis]) {
        case C[9] || CT.C9:
        {
          return new ui.Offset.new(-this.offset.pixels, 0.0);
        }
        case C[10] || CT.C10:
        {
          return new ui.Offset.new(0.0, -this.offset.pixels);
        }
      }
    }
    get [_viewportExtent]() {
      if (!this.hasSize) dart.assertFailed(null, I[0], 1619, 12, "hasSize");
      switch (this[_viewportAxis]) {
        case C[9] || CT.C9:
        {
          return this.size.width;
        }
        case C[10] || CT.C10:
        {
          return this.size.height;
        }
      }
    }
    [_getMaxScrollExtent](contentSize) {
      if (!this.hasSize) dart.assertFailed(null, I[0], 1629, 12, "hasSize");
      switch (this[_viewportAxis]) {
        case C[9] || CT.C9:
        {
          return math.max(core.double, 0.0, contentSize.width - this.size.width);
        }
        case C[10] || CT.C10:
        {
          return math.max(core.double, 0.0, contentSize.height - this.size.height);
        }
      }
    }
    get [_hasVisualOverflow]() {
      return this[_maxScrollExtent] > 0 || !this[_paintOffset]._equals(ui.Offset.zero);
    }
    getEndpointsForSelection(selection) {
      this[_computeTextMetricsIfNeeded]();
      let paintOffset = this[_paintOffset];
      let boxes = selection.isCollapsed ? T.JSArrayOfTextBox().of([]) : this[_textPainter].getBoxesForSelection(selection, {boxHeightStyle: this.selectionHeightStyle, boxWidthStyle: this.selectionWidthStyle});
      if (boxes[$isEmpty]) {
        let caretOffset = this[_textPainter].getOffsetForCaret(selection.extent, this[_caretPrototype]);
        let start = new ui.Offset.new(0.0, this.preferredLineHeight)['+'](caretOffset)['+'](paintOffset);
        return T.JSArrayOfTextSelectionPoint().of([new editable.TextSelectionPoint.new(start, null)]);
      } else {
        let start = new ui.Offset.new(boxes[$first].start[$clamp](0.0, this[_textPainter].size.width), boxes[$first].bottom)['+'](paintOffset);
        let end = new ui.Offset.new(boxes[$last].end[$clamp](0.0, this[_textPainter].size.width), boxes[$last].bottom)['+'](paintOffset);
        return T.JSArrayOfTextSelectionPoint().of([new editable.TextSelectionPoint.new(start, boxes[$first].direction), new editable.TextSelectionPoint.new(end, boxes[$last].direction)]);
      }
    }
    getRectForComposingRange(range) {
      let t4;
      if (!range.isValid || range.isCollapsed) return null;
      this[_computeTextMetricsIfNeeded]();
      let boxes = this[_textPainter].getBoxesForSelection(new text_editing.TextSelection.new({baseOffset: range.start, extentOffset: range.end}), {boxHeightStyle: this.selectionHeightStyle, boxWidthStyle: this.selectionWidthStyle});
      t4 = boxes[$fold](T.RectN(), null, dart.fn((accum, incoming) => {
        let t4, t4$;
        t4$ = (t4 = accum, t4 == null ? null : t4.expandToInclude(incoming.toRect()));
        return t4$ == null ? incoming.toRect() : t4$;
      }, T.RectNAndTextBoxToRect()));
      return t4 == null ? null : t4.shift(this[_paintOffset]);
    }
    getPositionForPoint(globalPosition) {
      this[_computeTextMetricsIfNeeded]();
      globalPosition = globalPosition['+'](this[_paintOffset]._negate());
      return this[_textPainter].getPositionForOffset(this.globalToLocal(globalPosition));
    }
    getLocalRectForCaret(caretPosition) {
      this[_computeTextMetricsIfNeeded]();
      let caretOffset = this[_textPainter].getOffsetForCaret(caretPosition, this[_caretPrototype]);
      let rect = new ui.Rect.fromLTWH(0.0, 0.0, this.cursorWidth, this.cursorHeight).shift(caretOffset['+'](this[_paintOffset])['+'](this.cursorOffset));
      return rect.shift(this[_snapToPhysicalPixel](rect.topLeft));
    }
    computeMinIntrinsicWidth(height) {
      this[_layoutText]();
      return this[_textPainter].minIntrinsicWidth;
    }
    computeMaxIntrinsicWidth(height) {
      this[_layoutText]();
      return this[_textPainter].maxIntrinsicWidth + this[_caretMargin];
    }
    get preferredLineHeight() {
      return this[_textPainter].preferredLineHeight;
    }
    [_preferredHeight](width) {
      let lockedMax = this.maxLines != null && this.minLines == null;
      let lockedBoth = this.minLines != null && this.minLines == this.maxLines;
      let singleLine = this.maxLines === 1;
      if (singleLine || lockedMax || lockedBoth) {
        return this.preferredLineHeight * dart.nullCheck(this.maxLines);
      }
      let minLimited = this.minLines != null && dart.nullCheck(this.minLines) > 1;
      let maxLimited = this.maxLines != null;
      if (minLimited || maxLimited) {
        this[_layoutText]({maxWidth: width});
        if (minLimited && this[_textPainter].height < this.preferredLineHeight * dart.nullCheck(this.minLines)) {
          return this.preferredLineHeight * dart.nullCheck(this.minLines);
        }
        if (maxLimited && this[_textPainter].height > this.preferredLineHeight * dart.nullCheck(this.maxLines)) {
          return this.preferredLineHeight * dart.nullCheck(this.maxLines);
        }
      }
      if (width === 1 / 0) {
        let text = this[_plainText];
        let lines = 1;
        for (let index = 0; index < text.length; index = index + 1) {
          if (text[$codeUnitAt](index) === 10) lines = lines + 1;
        }
        return this.preferredLineHeight * lines;
      }
      this[_layoutText]({maxWidth: width});
      return math.max(core.double, this.preferredLineHeight, this[_textPainter].height);
    }
    computeMinIntrinsicHeight(width) {
      return this[_preferredHeight](width);
    }
    computeMaxIntrinsicHeight(width) {
      return this[_preferredHeight](width);
    }
    computeDistanceToActualBaseline(baseline) {
      this[_computeTextMetricsIfNeeded]();
      return this[_textPainter].computeDistanceToActualBaseline(baseline);
    }
    hitTestSelf(position) {
      return true;
    }
    hitTestChildren(result, opts) {
      let t4;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitText = false;
      let effectivePosition = position['-'](this[_paintOffset]);
      let textPosition = this[_textPainter].getPositionForOffset(effectivePosition);
      let span = dart.nullCheck(this[_textPainter].text).getSpanForPosition(textPosition);
      if (span != null && hit_test.HitTestTarget.is(span)) {
        result.add(new hit_test.HitTestEntry.new(hit_test.HitTestTarget.as(span)));
        hitText = true;
      }
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length]) {
        let textParentData = paragraph.TextParentData.as(dart.nullCheck(child.parentData));
        let transform = (t4 = vector_math_64.Matrix4.translationValues(textParentData.offset.dx, textParentData.offset.dy, 0.0), (() => {
          t4.scale(textParentData.scale, textParentData.scale, textParentData.scale);
          return t4;
        })());
        let isHit = result.addWithPaintTransform({transform: transform, position: position, hitTest: dart.fn((result, transformed) => {
            if (!dart.fn(() => {
              let manualPosition = position['-'](textParentData.offset)['/'](dart.nullCheck(textParentData.scale));
              return (transformed.dx - manualPosition.dx)[$abs]() < 1e-10 && (transformed.dy - manualPosition.dy)[$abs]() < 1e-10;
            }, T.VoidTobool())()) dart.assertFailed(null, I[0], 1837, 18, "() {\n            final Offset manualPosition = (position - textParentData.offset) / textParentData.scale!;\n            return (transformed.dx - manualPosition.dx).abs() < precisionErrorTolerance\n              && (transformed.dy - manualPosition.dy).abs() < precisionErrorTolerance;\n          }()");
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
    set [_tap](t4) {
      this[__RenderEditable__tap] = t4;
    }
    get [_tap]() {
      let t5;
      t5 = this[__RenderEditable__tap];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_tap")) : t5;
    }
    set [_longPress](t5) {
      this[__RenderEditable__longPress] = t5;
    }
    get [_longPress]() {
      let t6;
      t6 = this[__RenderEditable__longPress];
      return t6 == null ? dart.throw(new _internal.LateError.fieldNI("_longPress")) : t6;
    }
    handleEvent(event, entry) {
      box.BoxHitTestEntry.as(entry);
      if (!this.debugHandleEvent(event, entry)) dart.assertFailed(null, I[0], 1859, 12, "debugHandleEvent(event, entry)");
      if (events.PointerDownEvent.is(event)) {
        if (!!this.debugNeedsLayout) dart.assertFailed(null, I[0], 1861, 14, "!debugNeedsLayout");
        if (!this.ignorePointer) {
          this[_tap].addPointer(event);
          this[_longPress].addPointer(event);
        }
      }
    }
    get lastSecondaryTapDownPosition() {
      return this[_lastSecondaryTapDownPosition];
    }
    handleSecondaryTapDown(details) {
      this[_lastTapDownPosition] = details.globalPosition;
      this[_lastSecondaryTapDownPosition] = details.globalPosition;
    }
    handleTapDown(details) {
      this[_lastTapDownPosition] = details.globalPosition;
    }
    [_handleTapDown](details) {
      if (!!this.ignorePointer) dart.assertFailed(null, I[0], 1897, 12, "!ignorePointer");
      this.handleTapDown(details);
    }
    handleTap() {
      this.selectPosition({cause: text_input.SelectionChangedCause.tap});
    }
    [_handleTap]() {
      if (!!this.ignorePointer) dart.assertFailed(null, I[0], 1911, 12, "!ignorePointer");
      this.handleTap();
    }
    handleDoubleTap() {
      this.selectWord({cause: text_input.SelectionChangedCause.doubleTap});
    }
    handleLongPress() {
      this.selectWord({cause: text_input.SelectionChangedCause.longPress});
    }
    [_handleLongPress]() {
      if (!!this.ignorePointer) dart.assertFailed(null, I[0], 1935, 12, "!ignorePointer");
      this.handleLongPress();
    }
    selectPosition(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      this.selectPositionAt({from: dart.nullCheck(this[_lastTapDownPosition]), cause: cause});
    }
    selectPositionAt(opts) {
      let t6, t6$;
      let from = opts && 'from' in opts ? opts.from : null;
      let to = opts && 'to' in opts ? opts.to : null;
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (!(cause !== null)) dart.assertFailed(null, I[0], 1958, 12, "cause != null");
      if (!(from !== null)) dart.assertFailed(null, I[0], 1959, 12, "from != null");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
      let fromPosition = this[_textPainter].getPositionForOffset(this.globalToLocal(from['-'](this[_paintOffset])));
      let toPosition = to == null ? null : this[_textPainter].getPositionForOffset(this.globalToLocal(to['-'](this[_paintOffset])));
      let baseOffset = fromPosition.offset;
      let extentOffset = (t6$ = (t6 = toPosition, t6 == null ? null : t6.offset), t6$ == null ? fromPosition.offset : t6$);
      let newSelection = new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset, affinity: fromPosition.affinity});
      this[_setSelection](newSelection, cause);
    }
    selectWord(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      this.selectWordsInRange({from: dart.nullCheck(this[_lastTapDownPosition]), cause: cause});
    }
    selectWordsInRange(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let to = opts && 'to' in opts ? opts.to : null;
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (!(cause !== null)) dart.assertFailed(null, I[0], 1991, 12, "cause != null");
      if (!(from !== null)) dart.assertFailed(null, I[0], 1992, 12, "from != null");
      this[_computeTextMetricsIfNeeded]();
      let firstPosition = this[_textPainter].getPositionForOffset(this.globalToLocal(from['-'](this[_paintOffset])));
      let firstWord = this[_getWordAtOffset](firstPosition);
      let lastWord = to == null ? firstWord : this[_getWordAtOffset](this[_textPainter].getPositionForOffset(this.globalToLocal(to['-'](this[_paintOffset]))));
      this[_setSelection](new text_editing.TextSelection.new({baseOffset: firstWord.base.offset, extentOffset: lastWord.extent.offset, affinity: firstWord.affinity}), cause);
    }
    selectWordEdge(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (!(cause !== null)) dart.assertFailed(null, I[0], 2013, 12, "cause != null");
      this[_computeTextMetricsIfNeeded]();
      if (!(this[_lastTapDownPosition] != null)) dart.assertFailed(null, I[0], 2015, 12, "_lastTapDownPosition != null");
      let position = this[_textPainter].getPositionForOffset(this.globalToLocal(dart.nullCheck(this[_lastTapDownPosition])['-'](this[_paintOffset])));
      let word = this[_textPainter].getWordBoundary(position);
      let newSelection = null;
      function newSelection$35get() {
        let t7;
        t7 = newSelection;
        return t7 == null ? dart.throw(new _internal.LateError.localNI("newSelection")) : t7;
      }
      dart.fn(newSelection$35get, T.VoidToTextSelection());
      function newSelection$35set(t8) {
        return newSelection = t8;
      }
      dart.fn(newSelection$35set, T.TextSelectionTodynamic());
      if (position.offset - word.start <= 1) {
        newSelection$35set(new text_editing.TextSelection.collapsed({offset: word.start}));
      } else {
        newSelection$35set(new text_editing.TextSelection.collapsed({offset: word.end, affinity: ui.TextAffinity.upstream}));
      }
      this[_setSelection](newSelection$35get(), cause);
    }
    [_getWordAtOffset](position) {
      this.debugAssertLayoutUpToDate();
      let word = this[_textPainter].getWordBoundary(position);
      if (position.offset >= word.end) return new text_editing.TextSelection.fromPosition(position);
      if (this.obscureText) {
        return new text_editing.TextSelection.new({baseOffset: 0, extentOffset: this[_plainText].length});
      } else if (text_layout_metrics.TextLayoutMetrics.isWhitespace(this[_plainText][$codeUnitAt](position.offset)) && position.offset > 0) {
        if (!(platform.defaultTargetPlatform !== null)) dart.assertFailed(null, I[0], 2045, 14, "defaultTargetPlatform != null");
        let previousWord = this[_getPreviousWord](word.start);
        switch (platform.defaultTargetPlatform) {
          case C[11] || CT.C11:
          {
            if (previousWord == null) {
              let nextWord = this[_getNextWord](word.start);
              if (nextWord == null) {
                return new text_editing.TextSelection.collapsed({offset: position.offset});
              }
              return new text_editing.TextSelection.new({baseOffset: position.offset, extentOffset: nextWord.end});
            }
            return new text_editing.TextSelection.new({baseOffset: previousWord.start, extentOffset: position.offset});
          }
          case C[12] || CT.C12:
          {
            if (this.readOnly) {
              if (previousWord == null) {
                return new text_editing.TextSelection.new({baseOffset: position.offset, extentOffset: position.offset + 1});
              }
              return new text_editing.TextSelection.new({baseOffset: previousWord.start, extentOffset: position.offset});
            }
            break;
          }
          case C[13] || CT.C13:
          case C[14] || CT.C14:
          case C[15] || CT.C15:
          case C[16] || CT.C16:
          {
            break;
          }
        }
      }
      return new text_editing.TextSelection.new({baseOffset: word.start, extentOffset: word.end});
    }
    [_layoutChildren](constraints, opts) {
      let dry = opts && 'dry' in opts ? opts.dry : false;
      if (this.childCount === 0) {
        this[_textPainter].setPlaceholderDimensions(T.JSArrayOfPlaceholderDimensions().of([]));
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
            case C[17] || CT.C17:
            {
              baselineOffset = child.getDistanceToBaseline(dart.nullCheck(this[_placeholderSpans][$_get](childIndex).baseline));
              break;
            }
            case C[18] || CT.C18:
            case C[19] || CT.C19:
            case C[20] || CT.C20:
            case C[21] || CT.C21:
            case C[22] || CT.C22:
            {
              baselineOffset = null;
              break;
            }
          }
        } else {
          if (!(this[_placeholderSpans][$_get](childIndex).alignment !== ui.PlaceholderAlignment.baseline)) dart.assertFailed(null, I[0], 2138, 16, "_placeholderSpans[childIndex].alignment != ui.PlaceholderAlignment.baseline");
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
    [_layoutText](opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      if (!(maxWidth !== null && minWidth !== null)) dart.assertFailed(null, I[0], 2169, 12, "maxWidth != null && minWidth != null");
      let availableMaxWidth = math.max(core.double, 0.0, maxWidth - this[_caretMargin]);
      let availableMinWidth = math.min(core.double, minWidth, availableMaxWidth);
      let textMaxWidth = this[_isMultiline] ? availableMaxWidth : 1 / 0;
      let textMinWidth = this.forceLine ? availableMaxWidth : availableMinWidth;
      this[_textPainter].layout({minWidth: textMinWidth, maxWidth: textMaxWidth});
      this[_textLayoutLastMinWidth] = minWidth;
      this[_textLayoutLastMaxWidth] = maxWidth;
    }
    [_computeTextMetricsIfNeeded]() {
      if (!(this.constraints !== null)) dart.assertFailed(null, I[0], 2202, 12, "constraints != null");
      this[_layoutText]({minWidth: this.constraints.minWidth, maxWidth: this.constraints.maxWidth});
    }
    set [_caretPrototype](t10) {
      this[__RenderEditable__caretPrototype] = t10;
    }
    get [_caretPrototype]() {
      let t11;
      t11 = this[__RenderEditable__caretPrototype];
      return t11 == null ? dart.throw(new _internal.LateError.fieldNI("_caretPrototype")) : t11;
    }
    [_computeCaretPrototype]() {
      if (!(platform.defaultTargetPlatform !== null)) dart.assertFailed(null, I[0], 2220, 12, "defaultTargetPlatform != null");
      switch (platform.defaultTargetPlatform) {
        case C[11] || CT.C11:
        case C[14] || CT.C14:
        {
          this[_caretPrototype] = new ui.Rect.fromLTWH(0.0, 0.0, this.cursorWidth, this.cursorHeight + 2);
          break;
        }
        case C[12] || CT.C12:
        case C[13] || CT.C13:
        case C[15] || CT.C15:
        case C[16] || CT.C16:
        {
          this[_caretPrototype] = new ui.Rect.fromLTWH(0.0, 2, this.cursorWidth, this.cursorHeight - 2.0 * 2);
          break;
        }
      }
    }
    [_snapToPhysicalPixel](sourceOffset) {
      let globalOffset = this.localToGlobal(sourceOffset);
      let pixelMultiple = 1.0 / this[_devicePixelRatio];
      return new ui.Offset.new(globalOffset.dx[$isFinite] ? (globalOffset.dx / pixelMultiple)[$round]() * pixelMultiple - globalOffset.dx : 0.0, globalOffset.dy[$isFinite] ? (globalOffset.dy / pixelMultiple)[$round]() * pixelMultiple - globalOffset.dy : 0.0);
    }
    [_canComputeDryLayout]() {
      for (let span of this[_placeholderSpans]) {
        switch (span.alignment) {
          case C[17] || CT.C17:
          case C[18] || CT.C18:
          case C[19] || CT.C19:
          {
            return false;
          }
          case C[22] || CT.C22:
          case C[21] || CT.C21:
          case C[20] || CT.C20:
          {
            continue;
          }
        }
      }
      return true;
    }
    computeDryLayout(constraints) {
      if (!this[_canComputeDryLayout]()) {
        if (!this.debugCannotComputeDryLayout({reason: "Dry layout not available for alignments that require baseline."})) dart.assertFailed(null, I[0], 2272, 14, "debugCannotComputeDryLayout(\n        reason: 'Dry layout not available for alignments that require baseline.',\n      )");
        return ui.Size.zero;
      }
      this[_textPainter].setPlaceholderDimensions(this[_layoutChildren](constraints, {dry: true}));
      this[_layoutText]({minWidth: constraints.minWidth, maxWidth: constraints.maxWidth});
      let width = this.forceLine ? constraints.maxWidth : constraints.constrainWidth(this[_textPainter].size.width + this[_caretMargin]);
      return new ui.Size.new(width, constraints.constrainHeight(this[_preferredHeight](constraints.maxWidth)));
    }
    performLayout() {
      let t11, t11$;
      let constraints = this.constraints;
      this[_placeholderDimensions] = this[_layoutChildren](constraints);
      this[_textPainter].setPlaceholderDimensions(this[_placeholderDimensions]);
      this[_computeTextMetricsIfNeeded]();
      this[_setParentData]();
      this[_computeCaretPrototype]();
      let textPainterSize = this[_textPainter].size;
      let width = this.forceLine ? constraints.maxWidth : constraints.constrainWidth(this[_textPainter].size.width + this[_caretMargin]);
      this.size = new ui.Size.new(width, constraints.constrainHeight(this[_preferredHeight](constraints.maxWidth)));
      let contentSize = new ui.Size.new(textPainterSize.width + this[_caretMargin], textPainterSize.height);
      let painterConstraints = new box.BoxConstraints.tight(contentSize);
      t11 = this[_foregroundRenderObject];
      t11 == null ? null : t11.layout(painterConstraints);
      t11$ = this[_backgroundRenderObject];
      t11$ == null ? null : t11$.layout(painterConstraints);
      this[_maxScrollExtent] = this[_getMaxScrollExtent](contentSize);
      this.offset.applyViewportDimension(this[_viewportExtent]);
      this.offset.applyContentDimensions(0.0, this[_maxScrollExtent]);
    }
    calculateBoundedFloatingCursorOffset(rawCursorOffset) {
      let deltaPosition = ui.Offset.zero;
      let topBound = -this.floatingCursorAddedMargin.top;
      let bottomBound = this[_textPainter].height - this.preferredLineHeight + this.floatingCursorAddedMargin.bottom;
      let leftBound = -this.floatingCursorAddedMargin.left;
      let rightBound = this[_textPainter].width + this.floatingCursorAddedMargin.right;
      if (this[_previousOffset] != null) deltaPosition = rawCursorOffset['-'](dart.nullCheck(this[_previousOffset]));
      if (this[_resetOriginOnLeft] && deltaPosition.dx > 0) {
        this[_relativeOrigin] = new ui.Offset.new(rawCursorOffset.dx - leftBound, this[_relativeOrigin].dy);
        this[_resetOriginOnLeft] = false;
      } else if (this[_resetOriginOnRight] && deltaPosition.dx < 0) {
        this[_relativeOrigin] = new ui.Offset.new(rawCursorOffset.dx - rightBound, this[_relativeOrigin].dy);
        this[_resetOriginOnRight] = false;
      }
      if (this[_resetOriginOnTop] && deltaPosition.dy > 0) {
        this[_relativeOrigin] = new ui.Offset.new(this[_relativeOrigin].dx, rawCursorOffset.dy - topBound);
        this[_resetOriginOnTop] = false;
      } else if (this[_resetOriginOnBottom] && deltaPosition.dy < 0) {
        this[_relativeOrigin] = new ui.Offset.new(this[_relativeOrigin].dx, rawCursorOffset.dy - bottomBound);
        this[_resetOriginOnBottom] = false;
      }
      let currentX = rawCursorOffset.dx - this[_relativeOrigin].dx;
      let currentY = rawCursorOffset.dy - this[_relativeOrigin].dy;
      let adjustedX = math.min(core.double, math.max(core.double, currentX, leftBound), rightBound);
      let adjustedY = math.min(core.double, math.max(core.double, currentY, topBound), bottomBound);
      let adjustedOffset = new ui.Offset.new(adjustedX, adjustedY);
      if (currentX < leftBound && deltaPosition.dx < 0)
        this[_resetOriginOnLeft] = true;
      else if (currentX > rightBound && deltaPosition.dx > 0) this[_resetOriginOnRight] = true;
      if (currentY < topBound && deltaPosition.dy < 0)
        this[_resetOriginOnTop] = true;
      else if (currentY > bottomBound && deltaPosition.dy > 0) this[_resetOriginOnBottom] = true;
      this[_previousOffset] = rawCursorOffset;
      return adjustedOffset;
    }
    setFloatingCursor(state, boundedOffset, lastTextPosition, opts) {
      let resetLerpValue = opts && 'resetLerpValue' in opts ? opts.resetLerpValue : null;
      if (!(state !== null)) dart.assertFailed(null, I[0], 2378, 12, "state != null");
      if (!(boundedOffset !== null)) dart.assertFailed(null, I[0], 2379, 12, "boundedOffset != null");
      if (!(lastTextPosition !== null)) dart.assertFailed(null, I[0], 2380, 12, "lastTextPosition != null");
      if (state === text_input.FloatingCursorDragState.Start) {
        this[_relativeOrigin] = ui.Offset.zero;
        this[_previousOffset] = null;
        this[_resetOriginOnBottom] = false;
        this[_resetOriginOnTop] = false;
        this[_resetOriginOnRight] = false;
        this[_resetOriginOnBottom] = false;
      }
      this[_floatingCursorOn] = state !== text_input.FloatingCursorDragState.End;
      this[_resetFloatingCursorAnimationValue] = resetLerpValue;
      if (this[_floatingCursorOn]) {
        this[_floatingCursorTextPosition] = lastTextPosition;
        let animationValue = this[_resetFloatingCursorAnimationValue];
        let sizeAdjustment = animationValue != null ? dart.nullCheck(edge_insets.EdgeInsets.lerp(editable._kFloatingCaretSizeIncrease, edge_insets.EdgeInsets.zero, animationValue)) : editable._kFloatingCaretSizeIncrease;
        this[_caretPainter].floatingCursorRect = sizeAdjustment.inflateRect(this[_caretPrototype]).shift(boundedOffset);
      } else {
        this[_caretPainter].floatingCursorRect = null;
      }
      this[_caretPainter].showRegularCaret = this[_resetFloatingCursorAnimationValue] == null;
    }
    [_lineNumberFor](startPosition, metrics) {
      let offset = this[_textPainter].getOffsetForCaret(startPosition, ui.Rect.zero);
      for (let lineMetrics of metrics) {
        if (lineMetrics.baseline + lineMetrics.descent > offset.dy) {
          return new (T.MapEntryOfint$Offset()).__(lineMetrics.lineNumber, new ui.Offset.new(offset.dx, lineMetrics.baseline));
        }
      }
      if (!(startPosition.offset === 0)) dart.assertFailed("unable to find the line for " + dart.str(startPosition), I[0], 2413, 12, "startPosition.offset == 0");
      return new (T.MapEntryOfint$Offset()).__(math.max(core.int, 0, metrics[$length] - 1), new ui.Offset.new(offset.dx, metrics[$isNotEmpty] ? metrics[$last].baseline + metrics[$last].descent : 0.0));
    }
    startVerticalCaretMovement(startPosition) {
      let metrics = this[_textPainter].computeLineMetrics();
      let currentLine = this[_lineNumberFor](startPosition, metrics);
      return new editable.VerticalCaretMovementRun.__(this, metrics, startPosition, currentLine.key, currentLine.value);
    }
    [_paintContents](context, offset) {
      this.debugAssertLayoutUpToDate();
      let effectiveOffset = offset['+'](this[_paintOffset]);
      if (this.selection != null && !this[_floatingCursorOn]) {
        this[_updateSelectionExtentsVisibility](effectiveOffset);
      }
      let foregroundChild = this[_foregroundRenderObject];
      let backgroundChild = this[_backgroundRenderObject];
      if (backgroundChild != null) context.paintChild(backgroundChild, offset);
      this[_textPainter].paint(context.canvas, effectiveOffset);
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.nullCheck(this[_textPainter].inlinePlaceholderBoxes)[$length]) {
        let textParentData = paragraph.TextParentData.as(dart.nullCheck(child.parentData));
        let scale = dart.nullCheck(textParentData.scale);
        context.pushTransform(this.needsCompositing, effectiveOffset['+'](textParentData.offset), vector_math_64.Matrix4.diagonal3Values(scale, scale, scale), dart.fn((context, offset) => {
          context.paintChild(dart.nullCheck(child), offset);
        }, T.PaintingContextAndOffsetTovoid()));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      if (foregroundChild != null) context.paintChild(foregroundChild, offset);
    }
    [_paintHandleLayers](context, endpoints) {
      let startPoint = endpoints[$_get](0).point;
      startPoint = new ui.Offset.new(startPoint.dx[$clamp](0.0, this.size.width), startPoint.dy[$clamp](0.0, this.size.height));
      context.pushLayer(new layer.LeaderLayer.new({link: this.startHandleLayerLink, offset: startPoint}), dart.bind(this, 'paint', super.paint), ui.Offset.zero);
      if (endpoints[$length] === 2) {
        let endPoint = endpoints[$_get](1).point;
        endPoint = new ui.Offset.new(endPoint.dx[$clamp](0.0, this.size.width), endPoint.dy[$clamp](0.0, this.size.height));
        context.pushLayer(new layer.LeaderLayer.new({link: this.endHandleLayerLink, offset: endPoint}), dart.bind(this, 'paint', super.paint), ui.Offset.zero);
      }
    }
    paint(context, offset) {
      this[_computeTextMetricsIfNeeded]();
      if (this[_hasVisualOverflow] && this.clipBehavior !== ui.Clip.none) {
        this[_clipRectLayer].layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, _paintContents), {clipBehavior: this.clipBehavior, oldLayer: this[_clipRectLayer].layer});
      } else {
        this[_clipRectLayer].layer = null;
        this[_paintContents](context, offset);
      }
      if (dart.nullCheck(this.selection).isValid) {
        this[_paintHandleLayers](context, this.getEndpointsForSelection(dart.nullCheck(this.selection)));
      }
    }
    describeApproximatePaintClip(child) {
      object.RenderObject.as(child);
      return this[_hasVisualOverflow] ? ui.Offset.zero['&'](this.size) : null;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new colors.ColorProperty.new("cursorColor", this.cursorColor));
      properties.add(new (T.DiagnosticsPropertyOfValueNotifierOfbool()).new("showCursor", this.showCursor));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines));
      properties.add(new diagnostics.IntProperty.new("minLines", this.minLines));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("expands", this.expands, {defaultValue: false}));
      properties.add(new colors.ColorProperty.new("selectionColor", this.selectionColor));
      properties.add(new diagnostics.DoubleProperty.new("textScaleFactor", this.textScaleFactor));
      properties.add(new (T.DiagnosticsPropertyOfLocale()).new("locale", this.locale, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfTextSelection()).new("selection", this.selection));
      properties.add(new (T.DiagnosticsPropertyOfViewportOffset()).new("offset", this.offset));
    }
    debugDescribeChildren() {
      return (() => {
        let t11 = T.JSArrayOfDiagnosticsNode().of([]);
        if (this.text != null) t11.push(dart.nullCheck(this.text).toDiagnosticsNode({name: "text", style: diagnostics.DiagnosticsTreeStyle.transition}));
        return t11;
      })();
    }
  };
  (editable.RenderEditable.new = function(opts) {
    let t0, t0$;
    let text = opts && 'text' in opts ? opts.text : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C[2] || CT.C2;
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let backgroundCursorColor = opts && 'backgroundCursorColor' in opts ? opts.backgroundCursorColor : null;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let hasFocus = opts && 'hasFocus' in opts ? opts.hasFocus : null;
    let startHandleLayerLink = opts && 'startHandleLayerLink' in opts ? opts.startHandleLayerLink : null;
    let endHandleLayerLink = opts && 'endHandleLayerLink' in opts ? opts.endHandleLayerLink : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : false;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let selectionColor = opts && 'selectionColor' in opts ? opts.selectionColor : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let onSelectionChanged = opts && 'onSelectionChanged' in opts ? opts.onSelectionChanged : null;
    let onCaretChanged = opts && 'onCaretChanged' in opts ? opts.onCaretChanged : null;
    let ignorePointer = opts && 'ignorePointer' in opts ? opts.ignorePointer : false;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    let forceLine = opts && 'forceLine' in opts ? opts.forceLine : true;
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[3] || CT.C3;
    let obscuringCharacter = opts && 'obscuringCharacter' in opts ? opts.obscuringCharacter : "•";
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 1;
    let cursorHeight = opts && 'cursorHeight' in opts ? opts.cursorHeight : null;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let paintCursorAboveText = opts && 'paintCursorAboveText' in opts ? opts.paintCursorAboveText : false;
    let cursorOffset = opts && 'cursorOffset' in opts ? opts.cursorOffset : C[4] || CT.C4;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
    let selectionHeightStyle = opts && 'selectionHeightStyle' in opts ? opts.selectionHeightStyle : C[5] || CT.C5;
    let selectionWidthStyle = opts && 'selectionWidthStyle' in opts ? opts.selectionWidthStyle : C[6] || CT.C6;
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
    let floatingCursorAddedMargin = opts && 'floatingCursorAddedMargin' in opts ? opts.floatingCursorAddedMargin : C[7] || CT.C7;
    let promptRectRange = opts && 'promptRectRange' in opts ? opts.promptRectRange : null;
    let promptRectColor = opts && 'promptRectColor' in opts ? opts.promptRectColor : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[8] || CT.C8;
    let textSelectionDelegate = opts && 'textSelectionDelegate' in opts ? opts.textSelectionDelegate : null;
    let painter = opts && 'painter' in opts ? opts.painter : null;
    let foregroundPainter = opts && 'foregroundPainter' in opts ? opts.foregroundPainter : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this[_foregroundRenderObject] = null;
    this[_backgroundRenderObject] = null;
    this[__RenderEditable__placeholderSpans] = null;
    this[_foregroundPainter] = null;
    this[_painter] = null;
    this[__RenderEditable__caretPainter] = null;
    this[_selectionPainter] = new editable._TextHighlightPainter.new();
    this[_autocorrectHighlightPainter] = new editable._TextHighlightPainter.new();
    this[_cachedBuiltInForegroundPainters] = null;
    this[_cachedBuiltInPainters] = null;
    this[_textLayoutLastMaxWidth] = null;
    this[_textLayoutLastMinWidth] = null;
    this[_lastCaretRect] = null;
    this[_selectionStartInViewport] = new (T.ValueNotifierOfbool()).new(true);
    this[_selectionEndInViewport] = new (T.ValueNotifierOfbool()).new(true);
    this[_cachedPlainText] = null;
    this[_cachedAttributedValue] = null;
    this[_cachedCombinedSemanticsInfos] = null;
    this[_hasFocus] = false;
    this[_forceLine] = false;
    this[_readOnly] = false;
    this[_cursorWidth] = 1.0;
    this[_floatingCursorOn] = false;
    this[__RenderEditable__floatingCursorTextPosition] = null;
    this[_maxScrollExtent] = 0.0;
    this[_clipBehavior] = ui.Clip.hardEdge;
    this[_semanticsInfo] = null;
    this[_cachedChildNodes] = null;
    this[__RenderEditable__tap] = null;
    this[__RenderEditable__longPress] = null;
    this[_lastTapDownPosition] = null;
    this[_lastSecondaryTapDownPosition] = null;
    this[_placeholderDimensions] = null;
    this[__RenderEditable__caretPrototype] = null;
    this[_relativeOrigin] = ui.Offset.zero;
    this[_previousOffset] = null;
    this[_resetOriginOnLeft] = false;
    this[_resetOriginOnRight] = false;
    this[_resetOriginOnTop] = false;
    this[_resetOriginOnBottom] = false;
    this[_resetFloatingCursorAnimationValue] = null;
    this[_clipRectLayer] = new (T.LayerHandleOfClipRectLayer()).new();
    this[onSelectionChanged$] = onSelectionChanged;
    this[onCaretChanged$] = onCaretChanged;
    this[ignorePointer$] = ignorePointer;
    this[floatingCursorAddedMargin$] = floatingCursorAddedMargin;
    this[textSelectionDelegate$] = textSelectionDelegate;
    if (!(textAlign !== null)) dart.assertFailed(null, I[0], 299, 15, "textAlign != null");
    if (!(textDirection !== null)) dart.assertFailed("RenderEditable created without a textDirection.", I[0], 300, 15, "textDirection != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, I[0], 301, 15, "maxLines == null || maxLines > 0");
    if (!(minLines == null || dart.notNull(minLines) > 0)) dart.assertFailed(null, I[0], 302, 15, "minLines == null || minLines > 0");
    if (!(startHandleLayerLink !== null)) dart.assertFailed(null, I[0], 303, 15, "startHandleLayerLink != null");
    if (!(endHandleLayerLink !== null)) dart.assertFailed(null, I[0], 304, 15, "endHandleLayerLink != null");
    if (!(maxLines == null || minLines == null || dart.notNull(maxLines) >= dart.notNull(minLines))) dart.assertFailed("minLines can't be greater than maxLines", I[0], 306, 10, "(maxLines == null) || (minLines == null) || (maxLines >= minLines)");
    if (!(expands !== null)) dart.assertFailed(null, I[0], 309, 15, "expands != null");
    if (!(!expands || maxLines == null && minLines == null)) dart.assertFailed("minLines and maxLines must be null when expands is true.", I[0], 311, 10, "!expands || (maxLines == null && minLines == null)");
    if (!(textScaleFactor !== null)) dart.assertFailed(null, I[0], 314, 15, "textScaleFactor != null");
    if (!(offset !== null)) dart.assertFailed(null, I[0], 315, 15, "offset != null");
    if (!(ignorePointer !== null)) dart.assertFailed(null, I[0], 316, 15, "ignorePointer != null");
    if (!(textWidthBasis !== null)) dart.assertFailed(null, I[0], 317, 15, "textWidthBasis != null");
    if (!(paintCursorAboveText !== null)) dart.assertFailed(null, I[0], 318, 15, "paintCursorAboveText != null");
    if (!(obscuringCharacter !== null && extensions['StringCharacters|get#characters'](obscuringCharacter)[$length] === 1)) dart.assertFailed(null, I[0], 319, 15, "obscuringCharacter != null && obscuringCharacter.characters.length == 1");
    if (!(obscureText !== null)) dart.assertFailed(null, I[0], 320, 15, "obscureText != null");
    if (!(textSelectionDelegate !== null)) dart.assertFailed(null, I[0], 321, 15, "textSelectionDelegate != null");
    if (!(cursorWidth !== null && cursorWidth >= 0.0)) dart.assertFailed(null, I[0], 322, 15, "cursorWidth != null && cursorWidth >= 0.0");
    if (!(cursorHeight == null || dart.notNull(cursorHeight) >= 0.0)) dart.assertFailed(null, I[0], 323, 15, "cursorHeight == null || cursorHeight >= 0.0");
    if (!(readOnly !== null)) dart.assertFailed(null, I[0], 324, 15, "readOnly != null");
    if (!(forceLine !== null)) dart.assertFailed(null, I[0], 325, 15, "forceLine != null");
    if (!(devicePixelRatio !== null)) dart.assertFailed(null, I[0], 326, 15, "devicePixelRatio != null");
    if (!(selectionHeightStyle !== null)) dart.assertFailed(null, I[0], 327, 15, "selectionHeightStyle != null");
    if (!(selectionWidthStyle !== null)) dart.assertFailed(null, I[0], 328, 15, "selectionWidthStyle != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 329, 15, "clipBehavior != null");
    this[_textPainter] = new text_painter.TextPainter.new({text: text, textAlign: textAlign, textDirection: textDirection, textScaleFactor: textScaleFactor, locale: locale, strutStyle: strutStyle, textHeightBehavior: textHeightBehavior, textWidthBasis: textWidthBasis});
    this[_showCursor] = (t0 = showCursor, t0 == null ? new (T.ValueNotifierOfbool()).new(false) : t0);
    this[_maxLines] = maxLines;
    this[_minLines] = minLines;
    this[_expands] = expands;
    this[_selection] = selection;
    this[_offset] = offset;
    this[_cursorWidth] = cursorWidth;
    this[_cursorHeight] = cursorHeight;
    this[_paintCursorOnTop] = paintCursorAboveText;
    this[_enableInteractiveSelection] = enableInteractiveSelection;
    this[_devicePixelRatio] = devicePixelRatio;
    this[_startHandleLayerLink] = startHandleLayerLink;
    this[_endHandleLayerLink] = endHandleLayerLink;
    this[_obscuringCharacter] = obscuringCharacter;
    this[_obscureText] = obscureText;
    this[_readOnly] = readOnly;
    this[_forceLine] = forceLine;
    this[_clipBehavior] = clipBehavior;
    this[_hasFocus] = (t0$ = hasFocus, t0$ == null ? false : t0$);
    editable.RenderEditable.__proto__.new.call(this);
    if (!(this[_showCursor] !== null)) dart.assertFailed(null, I[0], 359, 12, "_showCursor != null");
    if (!(!this[_showCursor].value || cursorColor != null)) dart.assertFailed(null, I[0], 360, 12, "!_showCursor.value || cursorColor != null");
    this[_selectionPainter].highlightColor = selectionColor;
    this[_selectionPainter].highlightedRange = selection;
    this[_selectionPainter].selectionHeightStyle = selectionHeightStyle;
    this[_selectionPainter].selectionWidthStyle = selectionWidthStyle;
    this[_autocorrectHighlightPainter].highlightColor = promptRectColor;
    this[_autocorrectHighlightPainter].highlightedRange = promptRectRange;
    this[_caretPainter].caretColor = cursorColor;
    this[_caretPainter].cursorRadius = cursorRadius;
    this[_caretPainter].cursorOffset = cursorOffset;
    this[_caretPainter].backgroundCursorColor = backgroundCursorColor;
    this[_updateForegroundPainter](foregroundPainter);
    this[_updatePainter](painter);
    this.addAll(children);
    this[_extractPlaceholderSpans](text);
  }).prototype = editable.RenderEditable.prototype;
  dart.addTypeTests(editable.RenderEditable);
  dart.addTypeCaches(editable.RenderEditable);
  editable.RenderEditable[dart.implements] = () => [text_layout_metrics.TextLayoutMetrics];
  dart.setMethodSignature(editable.RenderEditable, () => ({
    __proto__: dart.getMethods(editable.RenderEditable.__proto__),
    [_updateForegroundPainter]: dart.fnType(dart.void, [dart.nullable(editable.RenderEditablePainter)]),
    [_extractPlaceholderSpans]: dart.fnType(dart.void, [dart.nullable(inline_span.InlineSpan)]),
    [_updatePainter]: dart.fnType(dart.void, [dart.nullable(editable.RenderEditablePainter)]),
    [_createBuiltInForegroundPainters]: dart.fnType(editable._CompositeRenderEditablePainter, []),
    [_createBuiltInPainters]: dart.fnType(editable._CompositeRenderEditablePainter, []),
    debugAssertLayoutUpToDate: dart.fnType(dart.void, []),
    [_onCaretChanged]: dart.fnType(dart.void, [ui.Rect]),
    [_getTextPositionVertical]: dart.fnType(ui.TextPosition, [ui.TextPosition, core.double]),
    getLineAtOffset: dart.fnType(text_editing.TextSelection, [ui.TextPosition]),
    getWordBoundary: dart.fnType(ui.TextRange, [ui.TextPosition]),
    getTextPositionAbove: dart.fnType(ui.TextPosition, [ui.TextPosition]),
    getTextPositionBelow: dart.fnType(ui.TextPosition, [ui.TextPosition]),
    [_updateSelectionExtentsVisibility]: dart.fnType(dart.void, [ui.Offset]),
    [_setTextEditingValue]: dart.fnType(dart.void, [text_input.TextEditingValue, text_input.SelectionChangedCause]),
    [_setSelection]: dart.fnType(dart.void, [text_editing.TextSelection, text_input.SelectionChangedCause]),
    [_handleSelectionChange]: dart.fnType(dart.void, [text_editing.TextSelection, text_input.SelectionChangedCause]),
    markNeedsTextLayout: dart.fnType(dart.void, []),
    [_showHideCursor]: dart.fnType(dart.void, []),
    setPromptRectRange: dart.fnType(dart.void, [dart.nullable(ui.TextRange)]),
    [_handleSetText]: dart.fnType(dart.void, [core.String]),
    [_handleSetSelection]: dart.fnType(dart.void, [text_editing.TextSelection]),
    [_handleMoveCursorForwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorBackwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorForwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorBackwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_getNextWord]: dart.fnType(dart.nullable(ui.TextRange), [core.int]),
    [_getPreviousWord]: dart.fnType(dart.nullable(ui.TextRange), [core.int]),
    [_onlyWhitespace]: dart.fnType(core.bool, [ui.TextRange]),
    [_getMaxScrollExtent]: dart.fnType(core.double, [ui.Size]),
    getEndpointsForSelection: dart.fnType(core.List$(editable.TextSelectionPoint), [text_editing.TextSelection]),
    getRectForComposingRange: dart.fnType(dart.nullable(ui.Rect), [ui.TextRange]),
    getPositionForPoint: dart.fnType(ui.TextPosition, [ui.Offset]),
    getLocalRectForCaret: dart.fnType(ui.Rect, [ui.TextPosition]),
    [_preferredHeight]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui.TextBaseline]),
    handleSecondaryTapDown: dart.fnType(dart.void, [tap.TapDownDetails]),
    handleTapDown: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleTapDown]: dart.fnType(dart.void, [tap.TapDownDetails]),
    handleTap: dart.fnType(dart.void, []),
    [_handleTap]: dart.fnType(dart.void, []),
    handleDoubleTap: dart.fnType(dart.void, []),
    handleLongPress: dart.fnType(dart.void, []),
    [_handleLongPress]: dart.fnType(dart.void, []),
    selectPosition: dart.fnType(dart.void, [], {}, {cause: text_input.SelectionChangedCause}),
    selectPositionAt: dart.fnType(dart.void, [], {to: dart.nullable(ui.Offset)}, {cause: text_input.SelectionChangedCause, from: ui.Offset}),
    selectWord: dart.fnType(dart.void, [], {}, {cause: text_input.SelectionChangedCause}),
    selectWordsInRange: dart.fnType(dart.void, [], {to: dart.nullable(ui.Offset)}, {cause: text_input.SelectionChangedCause, from: ui.Offset}),
    selectWordEdge: dart.fnType(dart.void, [], {}, {cause: text_input.SelectionChangedCause}),
    [_getWordAtOffset]: dart.fnType(text_editing.TextSelection, [ui.TextPosition]),
    [_layoutChildren]: dart.fnType(core.List$(text_painter.PlaceholderDimensions), [box.BoxConstraints], {dry: core.bool}, {}),
    [_setParentData]: dart.fnType(dart.void, []),
    [_layoutText]: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}, {}),
    [_computeTextMetricsIfNeeded]: dart.fnType(dart.void, []),
    [_computeCaretPrototype]: dart.fnType(dart.void, []),
    [_snapToPhysicalPixel]: dart.fnType(ui.Offset, [ui.Offset]),
    [_canComputeDryLayout]: dart.fnType(core.bool, []),
    calculateBoundedFloatingCursorOffset: dart.fnType(ui.Offset, [ui.Offset]),
    setFloatingCursor: dart.fnType(dart.void, [text_input.FloatingCursorDragState, ui.Offset, ui.TextPosition], {resetLerpValue: dart.nullable(core.double)}, {}),
    [_lineNumberFor]: dart.fnType(core.MapEntry$(core.int, ui.Offset), [ui.TextPosition, core.List$(ui.LineMetrics)]),
    startVerticalCaretMovement: dart.fnType(editable.VerticalCaretMovementRun, [ui.TextPosition]),
    [_paintContents]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    [_paintHandleLayers]: dart.fnType(dart.void, [object.PaintingContext, core.List$(editable.TextSelectionPoint)])
  }));
  dart.setGetterSignature(editable.RenderEditable, () => ({
    __proto__: dart.getGetters(editable.RenderEditable.__proto__),
    [_placeholderSpans]: core.List$(placeholder_span.PlaceholderSpan),
    foregroundPainter: dart.nullable(editable.RenderEditablePainter),
    painter: dart.nullable(editable.RenderEditablePainter),
    [_caretPainter]: editable._FloatingCursorPainter,
    [_builtInForegroundPainters]: editable._CompositeRenderEditablePainter,
    [_builtInPainters]: editable._CompositeRenderEditablePainter,
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    textWidthBasis: text_painter.TextWidthBasis,
    devicePixelRatio: core.double,
    obscuringCharacter: core.String,
    obscureText: core.bool,
    selectionHeightStyle: ui.BoxHeightStyle,
    selectionWidthStyle: ui.BoxWidthStyle,
    selectionStartInViewport: change_notifier.ValueListenable$(core.bool),
    selectionEndInViewport: change_notifier.ValueListenable$(core.bool),
    [_plainText]: core.String,
    text: dart.nullable(inline_span.InlineSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    cursorColor: dart.nullable(ui.Color),
    backgroundCursorColor: dart.nullable(ui.Color),
    showCursor: change_notifier.ValueNotifier$(core.bool),
    hasFocus: core.bool,
    forceLine: core.bool,
    readOnly: core.bool,
    maxLines: dart.nullable(core.int),
    minLines: dart.nullable(core.int),
    expands: core.bool,
    selectionColor: dart.nullable(ui.Color),
    textScaleFactor: core.double,
    selection: dart.nullable(text_editing.TextSelection),
    offset: viewport_offset.ViewportOffset,
    cursorWidth: core.double,
    cursorHeight: core.double,
    paintCursorAboveText: core.bool,
    cursorOffset: ui.Offset,
    cursorRadius: dart.nullable(ui.Radius),
    startHandleLayerLink: layer.LayerLink,
    endHandleLayerLink: layer.LayerLink,
    [_floatingCursorTextPosition]: ui.TextPosition,
    enableInteractiveSelection: dart.nullable(core.bool),
    selectionEnabled: core.bool,
    promptRectColor: dart.nullable(ui.Color),
    maxScrollExtent: core.double,
    [_caretMargin]: core.double,
    clipBehavior: ui.Clip,
    [_isMultiline]: core.bool,
    [_viewportAxis]: basic_types.Axis,
    [_paintOffset]: ui.Offset,
    [_viewportExtent]: core.double,
    [_hasVisualOverflow]: core.bool,
    preferredLineHeight: core.double,
    [_tap]: tap.TapGestureRecognizer,
    [_longPress]: long_press.LongPressGestureRecognizer,
    lastSecondaryTapDownPosition: dart.nullable(ui.Offset),
    [_caretPrototype]: ui.Rect
  }));
  dart.setSetterSignature(editable.RenderEditable, () => ({
    __proto__: dart.getSetters(editable.RenderEditable.__proto__),
    [_placeholderSpans]: core.List$(placeholder_span.PlaceholderSpan),
    foregroundPainter: dart.nullable(editable.RenderEditablePainter),
    painter: dart.nullable(editable.RenderEditablePainter),
    textHeightBehavior: dart.nullable(ui.TextHeightBehavior),
    textWidthBasis: text_painter.TextWidthBasis,
    devicePixelRatio: core.double,
    obscuringCharacter: core.String,
    obscureText: core.bool,
    selectionHeightStyle: ui.BoxHeightStyle,
    selectionWidthStyle: ui.BoxWidthStyle,
    text: dart.nullable(inline_span.InlineSpan),
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    locale: dart.nullable(ui.Locale),
    strutStyle: dart.nullable(strut_style.StrutStyle),
    cursorColor: dart.nullable(ui.Color),
    backgroundCursorColor: dart.nullable(ui.Color),
    showCursor: change_notifier.ValueNotifier$(core.bool),
    hasFocus: core.bool,
    forceLine: core.bool,
    readOnly: core.bool,
    maxLines: dart.nullable(core.int),
    minLines: dart.nullable(core.int),
    expands: core.bool,
    selectionColor: dart.nullable(ui.Color),
    textScaleFactor: core.double,
    selection: dart.nullable(text_editing.TextSelection),
    offset: viewport_offset.ViewportOffset,
    cursorWidth: core.double,
    cursorHeight: dart.nullable(core.double),
    paintCursorAboveText: core.bool,
    cursorOffset: ui.Offset,
    cursorRadius: dart.nullable(ui.Radius),
    startHandleLayerLink: layer.LayerLink,
    endHandleLayerLink: layer.LayerLink,
    [_floatingCursorTextPosition]: ui.TextPosition,
    enableInteractiveSelection: dart.nullable(core.bool),
    promptRectColor: dart.nullable(ui.Color),
    clipBehavior: ui.Clip,
    [_tap]: tap.TapGestureRecognizer,
    [_longPress]: long_press.LongPressGestureRecognizer,
    [_caretPrototype]: ui.Rect
  }));
  dart.setLibraryUri(editable.RenderEditable, I[1]);
  dart.setFieldSignature(editable.RenderEditable, () => ({
    __proto__: dart.getFields(editable.RenderEditable.__proto__),
    [_foregroundRenderObject]: dart.fieldType(dart.nullable(editable._RenderEditableCustomPaint)),
    [_backgroundRenderObject]: dart.fieldType(dart.nullable(editable._RenderEditableCustomPaint)),
    [__RenderEditable__placeholderSpans]: dart.fieldType(dart.nullable(core.List$(placeholder_span.PlaceholderSpan))),
    [_foregroundPainter]: dart.fieldType(dart.nullable(editable.RenderEditablePainter)),
    [_painter]: dart.fieldType(dart.nullable(editable.RenderEditablePainter)),
    [__RenderEditable__caretPainter]: dart.fieldType(dart.nullable(editable._FloatingCursorPainter)),
    [_selectionPainter]: dart.finalFieldType(editable._TextHighlightPainter),
    [_autocorrectHighlightPainter]: dart.finalFieldType(editable._TextHighlightPainter),
    [_cachedBuiltInForegroundPainters]: dart.fieldType(dart.nullable(editable._CompositeRenderEditablePainter)),
    [_cachedBuiltInPainters]: dart.fieldType(dart.nullable(editable._CompositeRenderEditablePainter)),
    onSelectionChanged: dart.fieldType(dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection, editable.RenderEditable, text_input.SelectionChangedCause]))),
    [_textLayoutLastMaxWidth]: dart.fieldType(dart.nullable(core.double)),
    [_textLayoutLastMinWidth]: dart.fieldType(dart.nullable(core.double)),
    [_lastCaretRect]: dart.fieldType(dart.nullable(ui.Rect)),
    onCaretChanged: dart.fieldType(dart.nullable(dart.fnType(dart.void, [ui.Rect]))),
    ignorePointer: dart.fieldType(core.bool),
    [_devicePixelRatio]: dart.fieldType(core.double),
    [_obscuringCharacter]: dart.fieldType(core.String),
    [_obscureText]: dart.fieldType(core.bool),
    textSelectionDelegate: dart.fieldType(text_input.TextSelectionDelegate),
    [_selectionStartInViewport]: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    [_selectionEndInViewport]: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    [_cachedPlainText]: dart.fieldType(dart.nullable(core.String)),
    [_textPainter]: dart.finalFieldType(text_painter.TextPainter),
    [_cachedAttributedValue]: dart.fieldType(dart.nullable(semantics.AttributedString)),
    [_cachedCombinedSemanticsInfos]: dart.fieldType(dart.nullable(core.List$(inline_span.InlineSpanSemanticsInformation))),
    [_showCursor]: dart.fieldType(change_notifier.ValueNotifier$(core.bool)),
    [_hasFocus]: dart.fieldType(core.bool),
    [_forceLine]: dart.fieldType(core.bool),
    [_readOnly]: dart.fieldType(core.bool),
    [_maxLines]: dart.fieldType(dart.nullable(core.int)),
    [_minLines]: dart.fieldType(dart.nullable(core.int)),
    [_expands]: dart.fieldType(core.bool),
    [_selection]: dart.fieldType(dart.nullable(text_editing.TextSelection)),
    [_offset]: dart.fieldType(viewport_offset.ViewportOffset),
    [_cursorWidth]: dart.fieldType(core.double),
    [_cursorHeight]: dart.fieldType(dart.nullable(core.double)),
    [_paintCursorOnTop]: dart.fieldType(core.bool),
    [_startHandleLayerLink]: dart.fieldType(layer.LayerLink),
    [_endHandleLayerLink]: dart.fieldType(layer.LayerLink),
    floatingCursorAddedMargin: dart.fieldType(edge_insets.EdgeInsets),
    [_floatingCursorOn]: dart.fieldType(core.bool),
    [__RenderEditable__floatingCursorTextPosition]: dart.fieldType(dart.nullable(ui.TextPosition)),
    [_enableInteractiveSelection]: dart.fieldType(dart.nullable(core.bool)),
    [_maxScrollExtent]: dart.fieldType(core.double),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_semanticsInfo]: dart.fieldType(dart.nullable(core.List$(inline_span.InlineSpanSemanticsInformation))),
    [_cachedChildNodes]: dart.fieldType(dart.nullable(collection.Queue$(semantics.SemanticsNode))),
    [__RenderEditable__tap]: dart.fieldType(dart.nullable(tap.TapGestureRecognizer)),
    [__RenderEditable__longPress]: dart.fieldType(dart.nullable(long_press.LongPressGestureRecognizer)),
    [_lastTapDownPosition]: dart.fieldType(dart.nullable(ui.Offset)),
    [_lastSecondaryTapDownPosition]: dart.fieldType(dart.nullable(ui.Offset)),
    [_placeholderDimensions]: dart.fieldType(dart.nullable(core.List$(text_painter.PlaceholderDimensions))),
    [__RenderEditable__caretPrototype]: dart.fieldType(dart.nullable(ui.Rect)),
    [_relativeOrigin]: dart.fieldType(ui.Offset),
    [_previousOffset]: dart.fieldType(dart.nullable(ui.Offset)),
    [_resetOriginOnLeft]: dart.fieldType(core.bool),
    [_resetOriginOnRight]: dart.fieldType(core.bool),
    [_resetOriginOnTop]: dart.fieldType(core.bool),
    [_resetOriginOnBottom]: dart.fieldType(core.bool),
    [_resetFloatingCursorAnimationValue]: dart.fieldType(dart.nullable(core.double)),
    [_clipRectLayer]: dart.finalFieldType(layer.LayerHandle$(layer.ClipRectLayer))
  }));
  editable._RenderEditableCustomPaint = class _RenderEditableCustomPaint extends box.RenderBox {
    static ['_#new#tearOff'](opts) {
      let painter = opts && 'painter' in opts ? opts.painter : null;
      return new editable._RenderEditableCustomPaint.new({painter: painter});
    }
    get parent() {
      return T.RenderEditableN().as(super.parent);
    }
    get isRepaintBoundary() {
      return true;
    }
    get sizedByParent() {
      return true;
    }
    get painter() {
      return this[_painter];
    }
    set painter(newValue) {
      let t12, t12$, t12$0, t12$1;
      if (dart.equals(newValue, this.painter)) return;
      let oldPainter = this.painter;
      this[_painter] = newValue;
      if (dart.test((t12$ = (t12 = newValue, t12 == null ? null : t12.shouldRepaint(oldPainter)), t12$ == null ? true : t12$))) this.markNeedsPaint();
      if (this.attached) {
        t12$0 = oldPainter;
        t12$0 == null ? null : t12$0.removeListener(dart.bind(this, 'markNeedsPaint'));
        t12$1 = newValue;
        t12$1 == null ? null : t12$1.addListener(dart.bind(this, 'markNeedsPaint'));
      }
    }
    paint(context, offset) {
      let parent = this.parent;
      if (!(parent != null)) dart.assertFailed(null, I[0], 2607, 12, "parent != null");
      let painter = this.painter;
      if (painter != null && parent != null) {
        parent[_computeTextMetricsIfNeeded]();
        painter.paint(context.canvas, this.size, parent);
      }
    }
    attach(owner) {
      let t12;
      object.PipelineOwner.as(owner);
      super.attach(owner);
      t12 = this[_painter];
      t12 == null ? null : t12.addListener(dart.bind(this, 'markNeedsPaint'));
    }
    detach() {
      let t12;
      t12 = this[_painter];
      t12 == null ? null : t12.removeListener(dart.bind(this, 'markNeedsPaint'));
      super.detach();
    }
    computeDryLayout(constraints) {
      return constraints.biggest;
    }
  };
  (editable._RenderEditableCustomPaint.new = function(opts) {
    let painter = opts && 'painter' in opts ? opts.painter : null;
    this[_painter] = painter;
    editable._RenderEditableCustomPaint.__proto__.new.call(this);
    ;
  }).prototype = editable._RenderEditableCustomPaint.prototype;
  dart.addTypeTests(editable._RenderEditableCustomPaint);
  dart.addTypeCaches(editable._RenderEditableCustomPaint);
  dart.setGetterSignature(editable._RenderEditableCustomPaint, () => ({
    __proto__: dart.getGetters(editable._RenderEditableCustomPaint.__proto__),
    parent: dart.nullable(editable.RenderEditable),
    painter: dart.nullable(editable.RenderEditablePainter)
  }));
  dart.setSetterSignature(editable._RenderEditableCustomPaint, () => ({
    __proto__: dart.getSetters(editable._RenderEditableCustomPaint.__proto__),
    painter: dart.nullable(editable.RenderEditablePainter)
  }));
  dart.setLibraryUri(editable._RenderEditableCustomPaint, I[1]);
  dart.setFieldSignature(editable._RenderEditableCustomPaint, () => ({
    __proto__: dart.getFields(editable._RenderEditableCustomPaint.__proto__),
    [_painter]: dart.fieldType(dart.nullable(editable.RenderEditablePainter))
  }));
  editable.RenderEditablePainter = class RenderEditablePainter extends change_notifier.ChangeNotifier {};
  (editable.RenderEditablePainter.new = function() {
    editable.RenderEditablePainter.__proto__.new.call(this);
    ;
  }).prototype = editable.RenderEditablePainter.prototype;
  dart.addTypeTests(editable.RenderEditablePainter);
  dart.addTypeCaches(editable.RenderEditablePainter);
  dart.setLibraryUri(editable.RenderEditablePainter, I[1]);
  var _selectionHeightStyle = dart.privateName(editable, "_selectionHeightStyle");
  var _selectionWidthStyle = dart.privateName(editable, "_selectionWidthStyle");
  var _highlightedRange = dart.privateName(editable, "_highlightedRange");
  var _highlightColor = dart.privateName(editable, "_highlightColor");
  editable._TextHighlightPainter = class _TextHighlightPainter extends editable.RenderEditablePainter {
    static ['_#new#tearOff'](opts) {
      let highlightedRange = opts && 'highlightedRange' in opts ? opts.highlightedRange : null;
      let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : null;
      return new editable._TextHighlightPainter.new({highlightedRange: highlightedRange, highlightColor: highlightColor});
    }
    get highlightColor() {
      return this[_highlightColor];
    }
    set highlightColor(newValue) {
      if (dart.equals(newValue, this[_highlightColor])) return;
      this[_highlightColor] = newValue;
      this.notifyListeners();
    }
    get highlightedRange() {
      return this[_highlightedRange];
    }
    set highlightedRange(newValue) {
      if (dart.equals(newValue, this[_highlightedRange])) return;
      this[_highlightedRange] = newValue;
      this.notifyListeners();
    }
    get selectionHeightStyle() {
      return this[_selectionHeightStyle];
    }
    set selectionHeightStyle(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2715, 12, "value != null");
      if (this[_selectionHeightStyle] === value) return;
      this[_selectionHeightStyle] = value;
      this.notifyListeners();
    }
    get selectionWidthStyle() {
      return this[_selectionWidthStyle];
    }
    set selectionWidthStyle(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2728, 12, "value != null");
      if (this[_selectionWidthStyle] === value) return;
      this[_selectionWidthStyle] = value;
      this.notifyListeners();
    }
    paint(canvas, size, renderEditable) {
      let range = this.highlightedRange;
      let color = this.highlightColor;
      if (range == null || color == null || range.isCollapsed) {
        return;
      }
      this.highlightPaint.color = color;
      let textPainter = renderEditable[_textPainter];
      let boxes = textPainter.getBoxesForSelection(new text_editing.TextSelection.new({baseOffset: range.start, extentOffset: range.end}), {boxHeightStyle: this.selectionHeightStyle, boxWidthStyle: this.selectionWidthStyle});
      for (let box of boxes)
        canvas.drawRect(box.toRect().shift(renderEditable[_paintOffset]).intersect(new ui.Rect.fromLTWH(0.0, 0.0, textPainter.width, textPainter.height)), this.highlightPaint);
    }
    shouldRepaint(oldDelegate) {
      if (oldDelegate === this) return false;
      if (oldDelegate == null) return this.highlightColor != null && this.highlightedRange != null;
      return !editable._TextHighlightPainter.is(oldDelegate) || !dart.equals(oldDelegate.highlightColor, this.highlightColor) || !dart.equals(oldDelegate.highlightedRange, this.highlightedRange) || oldDelegate.selectionHeightStyle !== this.selectionHeightStyle || oldDelegate.selectionWidthStyle !== this.selectionWidthStyle;
    }
  };
  (editable._TextHighlightPainter.new = function(opts) {
    let highlightedRange = opts && 'highlightedRange' in opts ? opts.highlightedRange : null;
    let highlightColor = opts && 'highlightColor' in opts ? opts.highlightColor : null;
    this.highlightPaint = ui.Paint.new();
    this[_selectionHeightStyle] = ui.BoxHeightStyle.tight;
    this[_selectionWidthStyle] = ui.BoxWidthStyle.tight;
    this[_highlightedRange] = highlightedRange;
    this[_highlightColor] = highlightColor;
    editable._TextHighlightPainter.__proto__.new.call(this);
    ;
  }).prototype = editable._TextHighlightPainter.prototype;
  dart.addTypeTests(editable._TextHighlightPainter);
  dart.addTypeCaches(editable._TextHighlightPainter);
  dart.setMethodSignature(editable._TextHighlightPainter, () => ({
    __proto__: dart.getMethods(editable._TextHighlightPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size, editable.RenderEditable]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(editable.RenderEditablePainter)])
  }));
  dart.setGetterSignature(editable._TextHighlightPainter, () => ({
    __proto__: dart.getGetters(editable._TextHighlightPainter.__proto__),
    highlightColor: dart.nullable(ui.Color),
    highlightedRange: dart.nullable(ui.TextRange),
    selectionHeightStyle: ui.BoxHeightStyle,
    selectionWidthStyle: ui.BoxWidthStyle
  }));
  dart.setSetterSignature(editable._TextHighlightPainter, () => ({
    __proto__: dart.getSetters(editable._TextHighlightPainter.__proto__),
    highlightColor: dart.nullable(ui.Color),
    highlightedRange: dart.nullable(ui.TextRange),
    selectionHeightStyle: ui.BoxHeightStyle,
    selectionWidthStyle: ui.BoxWidthStyle
  }));
  dart.setLibraryUri(editable._TextHighlightPainter, I[1]);
  dart.setFieldSignature(editable._TextHighlightPainter, () => ({
    __proto__: dart.getFields(editable._TextHighlightPainter.__proto__),
    highlightPaint: dart.finalFieldType(ui.Paint),
    [_highlightColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_highlightedRange]: dart.fieldType(dart.nullable(ui.TextRange)),
    [_selectionHeightStyle]: dart.fieldType(ui.BoxHeightStyle),
    [_selectionWidthStyle]: dart.fieldType(ui.BoxWidthStyle)
  }));
  var _shouldPaint = dart.privateName(editable, "_shouldPaint");
  var ___FloatingCursorPainter_floatingCursorPaint = dart.privateName(editable, "_#_FloatingCursorPainter#floatingCursorPaint");
  var _caretColor = dart.privateName(editable, "_caretColor");
  var _cursorRadius = dart.privateName(editable, "_cursorRadius");
  var _cursorOffset = dart.privateName(editable, "_cursorOffset");
  var _backgroundCursorColor = dart.privateName(editable, "_backgroundCursorColor");
  var _floatingCursorRect = dart.privateName(editable, "_floatingCursorRect");
  editable._FloatingCursorPainter = class _FloatingCursorPainter extends editable.RenderEditablePainter {
    static ['_#new#tearOff'](caretPaintCallback) {
      return new editable._FloatingCursorPainter.new(caretPaintCallback);
    }
    get shouldPaint() {
      return this[_shouldPaint];
    }
    set shouldPaint(value) {
      if (this.shouldPaint === value) return;
      this[_shouldPaint] = value;
      this.notifyListeners();
    }
    get floatingCursorPaint() {
      let t13, t12;
      t12 = this[___FloatingCursorPainter_floatingCursorPaint];
      return t12 == null ? (t13 = ui.Paint.new(), this[___FloatingCursorPainter_floatingCursorPaint] == null ? this[___FloatingCursorPainter_floatingCursorPaint] = t13 : dart.throw(new _internal.LateError.fieldADI("floatingCursorPaint"))) : t12;
    }
    get caretColor() {
      return this[_caretColor];
    }
    set caretColor(value) {
      let t12, t12$;
      if ((t12 = this.caretColor, t12 == null ? null : t12.value) == (t12$ = value, t12$ == null ? null : t12$.value)) return;
      this[_caretColor] = value;
      this.notifyListeners();
    }
    get cursorRadius() {
      return this[_cursorRadius];
    }
    set cursorRadius(value) {
      if (dart.equals(this[_cursorRadius], value)) return;
      this[_cursorRadius] = value;
      this.notifyListeners();
    }
    get cursorOffset() {
      return this[_cursorOffset];
    }
    set cursorOffset(value) {
      if (this[_cursorOffset]._equals(value)) return;
      this[_cursorOffset] = value;
      this.notifyListeners();
    }
    get backgroundCursorColor() {
      return this[_backgroundCursorColor];
    }
    set backgroundCursorColor(value) {
      let t12, t12$;
      if ((t12 = this.backgroundCursorColor, t12 == null ? null : t12.value) == (t12$ = value, t12$ == null ? null : t12$.value)) return;
      this[_backgroundCursorColor] = value;
      if (this.showRegularCaret) this.notifyListeners();
    }
    get floatingCursorRect() {
      return this[_floatingCursorRect];
    }
    set floatingCursorRect(value) {
      if (dart.equals(this[_floatingCursorRect], value)) return;
      this[_floatingCursorRect] = value;
      this.notifyListeners();
    }
    paintRegularCursor(canvas, renderEditable, caretColor, textPosition) {
      let t12;
      let caretPrototype = renderEditable[_caretPrototype];
      let caretOffset = renderEditable[_textPainter].getOffsetForCaret(textPosition, caretPrototype);
      let caretRect = caretPrototype.shift(caretOffset['+'](this.cursorOffset));
      let caretHeight = renderEditable[_textPainter].getFullHeightForCaret(textPosition, caretPrototype);
      if (caretHeight != null) {
        switch (platform.defaultTargetPlatform) {
          case C[11] || CT.C11:
          case C[14] || CT.C14:
          {
            let heightDiff = dart.notNull(caretHeight) - caretRect.height;
            caretRect = new ui.Rect.fromLTWH(caretRect.left, caretRect.top + heightDiff / 2, caretRect.width, caretRect.height);
            break;
          }
          case C[12] || CT.C12:
          case C[13] || CT.C13:
          case C[15] || CT.C15:
          case C[16] || CT.C16:
          {
            caretRect = new ui.Rect.fromLTWH(caretRect.left, caretRect.top - 2, caretRect.width, caretHeight);
            break;
          }
        }
      }
      caretRect = caretRect.shift(renderEditable[_paintOffset]);
      let integralRect = caretRect.shift(renderEditable[_snapToPhysicalPixel](caretRect.topLeft));
      if (this.shouldPaint) {
        let radius = this.cursorRadius;
        this.caretPaint.color = caretColor;
        if (radius == null) {
          canvas.drawRect(integralRect, this.caretPaint);
        } else {
          let caretRRect = new ui.RRect.fromRectAndRadius(integralRect, radius);
          canvas.drawRRect(caretRRect, this.caretPaint);
        }
      }
      t12 = integralRect;
      this.caretPaintCallback(t12);
    }
    paint(canvas, size, renderEditable) {
      let t12, t12$;
      if (!(renderEditable !== null)) dart.assertFailed(null, I[0], 2896, 12, "renderEditable != null");
      let selection = renderEditable.selection;
      if (selection == null || !selection.isCollapsed) return;
      let floatingCursorRect = this.floatingCursorRect;
      let caretColor = floatingCursorRect == null ? this.caretColor : this.showRegularCaret ? this.backgroundCursorColor : null;
      let caretTextPosition = floatingCursorRect == null ? selection.extent : renderEditable[_floatingCursorTextPosition];
      if (caretColor != null) {
        this.paintRegularCursor(canvas, renderEditable, caretColor, caretTextPosition);
      }
      let floatingCursorColor = (t12 = this.caretColor, t12 == null ? null : t12.withOpacity(0.75));
      if (floatingCursorRect == null || floatingCursorColor == null || !this.shouldPaint) return;
      canvas.drawRRect(new ui.RRect.fromRectAndRadius(floatingCursorRect.shift(renderEditable[_paintOffset]), editable._kFloatingCaretRadius), (t12$ = this.floatingCursorPaint, (() => {
        t12$.color = floatingCursorColor;
        return t12$;
      })()));
    }
    shouldRepaint(oldDelegate) {
      if (this === oldDelegate) return false;
      if (oldDelegate == null) return this.shouldPaint;
      return !editable._FloatingCursorPainter.is(oldDelegate) || oldDelegate.shouldPaint !== this.shouldPaint || oldDelegate.showRegularCaret !== this.showRegularCaret || !dart.equals(oldDelegate.caretColor, this.caretColor) || !dart.equals(oldDelegate.cursorRadius, this.cursorRadius) || !oldDelegate.cursorOffset._equals(this.cursorOffset) || !dart.equals(oldDelegate.backgroundCursorColor, this.backgroundCursorColor) || !dart.equals(oldDelegate.floatingCursorRect, this.floatingCursorRect);
    }
  };
  (editable._FloatingCursorPainter.new = function(caretPaintCallback) {
    this[_shouldPaint] = true;
    this.showRegularCaret = false;
    this.caretPaint = ui.Paint.new();
    this[___FloatingCursorPainter_floatingCursorPaint] = null;
    this[_caretColor] = null;
    this[_cursorRadius] = null;
    this[_cursorOffset] = ui.Offset.zero;
    this[_backgroundCursorColor] = null;
    this[_floatingCursorRect] = null;
    this.caretPaintCallback = caretPaintCallback;
    editable._FloatingCursorPainter.__proto__.new.call(this);
    ;
  }).prototype = editable._FloatingCursorPainter.prototype;
  dart.addTypeTests(editable._FloatingCursorPainter);
  dart.addTypeCaches(editable._FloatingCursorPainter);
  dart.setMethodSignature(editable._FloatingCursorPainter, () => ({
    __proto__: dart.getMethods(editable._FloatingCursorPainter.__proto__),
    paintRegularCursor: dart.fnType(dart.void, [ui.Canvas, editable.RenderEditable, ui.Color, ui.TextPosition]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size, editable.RenderEditable]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(editable.RenderEditablePainter)])
  }));
  dart.setGetterSignature(editable._FloatingCursorPainter, () => ({
    __proto__: dart.getGetters(editable._FloatingCursorPainter.__proto__),
    shouldPaint: core.bool,
    floatingCursorPaint: ui.Paint,
    caretColor: dart.nullable(ui.Color),
    cursorRadius: dart.nullable(ui.Radius),
    cursorOffset: ui.Offset,
    backgroundCursorColor: dart.nullable(ui.Color),
    floatingCursorRect: dart.nullable(ui.Rect)
  }));
  dart.setSetterSignature(editable._FloatingCursorPainter, () => ({
    __proto__: dart.getSetters(editable._FloatingCursorPainter.__proto__),
    shouldPaint: core.bool,
    caretColor: dart.nullable(ui.Color),
    cursorRadius: dart.nullable(ui.Radius),
    cursorOffset: ui.Offset,
    backgroundCursorColor: dart.nullable(ui.Color),
    floatingCursorRect: dart.nullable(ui.Rect)
  }));
  dart.setLibraryUri(editable._FloatingCursorPainter, I[1]);
  dart.setFieldSignature(editable._FloatingCursorPainter, () => ({
    __proto__: dart.getFields(editable._FloatingCursorPainter.__proto__),
    [_shouldPaint]: dart.fieldType(core.bool),
    caretPaintCallback: dart.fieldType(dart.fnType(dart.void, [ui.Rect])),
    showRegularCaret: dart.fieldType(core.bool),
    caretPaint: dart.finalFieldType(ui.Paint),
    [___FloatingCursorPainter_floatingCursorPaint]: dart.fieldType(dart.nullable(ui.Paint)),
    [_caretColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_cursorRadius]: dart.fieldType(dart.nullable(ui.Radius)),
    [_cursorOffset]: dart.fieldType(ui.Offset),
    [_backgroundCursorColor]: dart.fieldType(dart.nullable(ui.Color)),
    [_floatingCursorRect]: dart.fieldType(dart.nullable(ui.Rect))
  }));
  editable._CompositeRenderEditablePainter = class _CompositeRenderEditablePainter extends editable.RenderEditablePainter {
    static ['_#new#tearOff'](opts) {
      let painters = opts && 'painters' in opts ? opts.painters : null;
      return new editable._CompositeRenderEditablePainter.new({painters: painters});
    }
    addListener(listener) {
      for (let painter of this.painters)
        painter.addListener(listener);
    }
    removeListener(listener) {
      for (let painter of this.painters)
        painter.removeListener(listener);
    }
    paint(canvas, size, renderEditable) {
      for (let painter of this.painters)
        painter.paint(canvas, size, renderEditable);
    }
    shouldRepaint(oldDelegate) {
      if (oldDelegate === this) return false;
      if (!editable._CompositeRenderEditablePainter.is(oldDelegate) || oldDelegate.painters[$length] !== this.painters[$length]) return true;
      let oldPainters = oldDelegate.painters[$iterator];
      let newPainters = this.painters[$iterator];
      while (oldPainters.moveNext() && newPainters.moveNext())
        if (newPainters.current.shouldRepaint(oldPainters.current)) return true;
      return false;
    }
  };
  (editable._CompositeRenderEditablePainter.new = function(opts) {
    let painters = opts && 'painters' in opts ? opts.painters : null;
    this.painters = painters;
    editable._CompositeRenderEditablePainter.__proto__.new.call(this);
    ;
  }).prototype = editable._CompositeRenderEditablePainter.prototype;
  dart.addTypeTests(editable._CompositeRenderEditablePainter);
  dart.addTypeCaches(editable._CompositeRenderEditablePainter);
  dart.setMethodSignature(editable._CompositeRenderEditablePainter, () => ({
    __proto__: dart.getMethods(editable._CompositeRenderEditablePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size, editable.RenderEditable]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(editable.RenderEditablePainter)])
  }));
  dart.setLibraryUri(editable._CompositeRenderEditablePainter, I[1]);
  dart.setFieldSignature(editable._CompositeRenderEditablePainter, () => ({
    __proto__: dart.getFields(editable._CompositeRenderEditablePainter.__proto__),
    painters: dart.finalFieldType(core.List$(editable.RenderEditablePainter))
  }));
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  dart.defineLazy(editable, {
    /*editable._kCaretGap*/get _kCaretGap() {
      return 1;
    },
    /*editable._kCaretHeightOffset*/get _kCaretHeightOffset() {
      return 2;
    },
    /*editable._kFloatingCaretSizeIncrease*/get _kFloatingCaretSizeIncrease() {
      return C[23] || CT.C23;
    },
    /*editable._kFloatingCaretRadius*/get _kFloatingCaretRadius() {
      return C[24] || CT.C24;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/editable.dart", {
    "package:flutter/src/rendering/editable.dart": editable
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["editable.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/editable.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__editable: editable
  };
}));

//# sourceMappingURL=editable.dart.lib.js.map
