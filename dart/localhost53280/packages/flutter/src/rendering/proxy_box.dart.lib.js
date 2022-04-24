define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layout_helper.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/painting/_network_image_web.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/box_fit.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/services/mouse_tracking.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/services/text_editing.dart'], (function load__packages__flutter__src__rendering__proxy_box_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layout_helper$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__debug$46dart, packages__flutter__src__painting___network_image_web$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__box_fit$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__services__mouse_tracking$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__services__text_editing$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const layout_helper = packages__flutter__src__rendering__layout_helper$46dart.src__rendering__layout_helper;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const inline_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__inline_span;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const debug = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const mouse_tracking = packages__flutter__src__services__mouse_tracking$46dart.src__services__mouse_tracking;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const text_editing = packages__flutter__src__services__text_editing$46dart.src__services__text_editing;
  var proxy_box = Object.create(dart.library);
  var $isFinite = dartx.isFinite;
  var $runtimeType = dartx.runtimeType;
  var $ceil = dartx.ceil;
  var $_equals = dartx._equals;
  var $every = dartx.every;
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    EnumPropertyOfHitTestBehavior: () => (T$.EnumPropertyOfHitTestBehavior = dart.constFn(diagnostics.EnumProperty$(proxy_box.HitTestBehavior)))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfBoxConstraints: () => (T$.DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))(),
    RenderBoxAndBoxConstraintsToSize: () => (T$.RenderBoxAndBoxConstraintsToSize = dart.constFn(dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])))(),
    OpacityLayerN: () => (T$.OpacityLayerN = dart.constFn(dart.nullable(layer.OpacityLayer)))(),
    AnimationOfdouble: () => (T$.AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))(),
    DiagnosticsPropertyOfAnimationOfdouble: () => (T$.DiagnosticsPropertyOfAnimationOfdouble = dart.constFn(diagnostics.DiagnosticsProperty$(T$.AnimationOfdouble())))(),
    ShaderMaskLayerN: () => (T$.ShaderMaskLayerN = dart.constFn(dart.nullable(layer.ShaderMaskLayer)))(),
    BackdropFilterLayerN: () => (T$.BackdropFilterLayerN = dart.constFn(dart.nullable(layer.BackdropFilterLayer)))(),
    CustomClipperOfPath: () => (T$.CustomClipperOfPath = dart.constFn(proxy_box.CustomClipper$(ui.Path)))(),
    JSArrayOfColor: () => (T$.JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))(),
    JSArrayOfdouble: () => (T$.JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))(),
    ClipRectLayerN: () => (T$.ClipRectLayerN = dart.constFn(dart.nullable(layer.ClipRectLayer)))(),
    ClipRRectLayerN: () => (T$.ClipRRectLayerN = dart.constFn(dart.nullable(layer.ClipRRectLayer)))(),
    ClipPathLayerN: () => (T$.ClipPathLayerN = dart.constFn(dart.nullable(layer.ClipPathLayer)))(),
    PhysicalModelLayerN: () => (T$.PhysicalModelLayerN = dart.constFn(dart.nullable(layer.PhysicalModelLayer)))(),
    DiagnosticsPropertyOfBoxShape: () => (T$.DiagnosticsPropertyOfBoxShape = dart.constFn(diagnostics.DiagnosticsProperty$(box_border.BoxShape)))(),
    DiagnosticsPropertyOfBorderRadius: () => (T$.DiagnosticsPropertyOfBorderRadius = dart.constFn(diagnostics.DiagnosticsProperty$(border_radius.BorderRadius)))(),
    DiagnosticsPropertyOfCustomClipperOfPath: () => (T$.DiagnosticsPropertyOfCustomClipperOfPath = dart.constFn(diagnostics.DiagnosticsProperty$(T$.CustomClipperOfPath())))(),
    DiagnosticsPropertyOfDecoration: () => (T$.DiagnosticsPropertyOfDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(decoration.Decoration)))(),
    DiagnosticsPropertyOfBoxPainter: () => (T$.DiagnosticsPropertyOfBoxPainter = dart.constFn(diagnostics.DiagnosticsProperty$(decoration.BoxPainter)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    DiagnosticsPropertyOfImageConfiguration: () => (T$.DiagnosticsPropertyOfImageConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(image_provider.ImageConfiguration)))(),
    BoxHitTestResultAndOffsetTobool: () => (T$.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))(),
    TransformLayerN: () => (T$.TransformLayerN = dart.constFn(dart.nullable(layer.TransformLayer)))(),
    DiagnosticsPropertyOfOffset: () => (T$.DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))(),
    DiagnosticsPropertyOfAlignmentGeometry: () => (T$.DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))(),
    EnumPropertyOfTextDirection: () => (T$.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    DiagnosticsPropertyOfbool: () => (T$.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    doubleTobool: () => (T$.doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))(),
    EnumPropertyOfBoxFit: () => (T$.EnumPropertyOfBoxFit = dart.constFn(diagnostics.EnumProperty$(box_fit.BoxFit)))(),
    FunctionN: () => (T$.FunctionN = dart.constFn(dart.nullable(core.Function)))(),
    FlagsSummaryOfFunctionN: () => (T$.FlagsSummaryOfFunctionN = dart.constFn(diagnostics.FlagsSummary$(T$.FunctionN())))(),
    IdentityMapOfString$FunctionN: () => (T$.IdentityMapOfString$FunctionN = dart.constFn(_js_helper.IdentityMap$(core.String, T$.FunctionN())))(),
    DiagnosticsPropertyOfMouseCursor: () => (T$.DiagnosticsPropertyOfMouseCursor = dart.constFn(diagnostics.DiagnosticsProperty$(mouse_cursor.MouseCursor)))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    IterablePropertyOfString: () => (T$.IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))(),
    DiagnosticsPropertyOfint: () => (T$.DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))(),
    DiagnosticsPropertyOfLayerLink: () => (T$.DiagnosticsPropertyOfLayerLink = dart.constFn(diagnostics.DiagnosticsProperty$(layer.LayerLink)))(),
    FollowerLayerN: () => (T$.FollowerLayerN = dart.constFn(dart.nullable(layer.FollowerLayer)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_Enum__name]: "deferToChild",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_Enum__name]: "opaque",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_Enum__name]: "translucent",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], proxy_box.HitTestBehavior);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2425393296.0
      });
    },
    get C5() {
      return C[5] = dart.fn(layout_helper.ChildLayoutHelper.dryLayoutChild, T$.RenderBoxAndBoxConstraintsToSize());
    },
    get C6() {
      return C[6] = dart.fn(layout_helper.ChildLayoutHelper.layoutChild, T$.RenderBoxAndBoxConstraintsToSize());
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.BlendMode.prototype,
        [_Enum__name]: "modulate",
        [_Enum_index]: 13
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.BlendMode.prototype,
        [_Enum__name]: "srcOver",
        [_Enum_index]: 3
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAlias",
        [_Enum_index]: 2
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 10,
        [OffsetBase__dx]: 10
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294902015.0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[12] || CT.C12,
        [TextStyle_inherit]: true
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: mouse_cursor._DeferringMouseCursor.prototype
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: text_span.TextSpan.prototype,
        [InlineSpan_style]: C[14] || CT.C14,
        [TextSpan_spellOut]: null,
        [TextSpan_locale]: null,
        [TextSpan_semanticsLabel]: null,
        [TextSpan_onExit]: null,
        [TextSpan_onEnter]: null,
        [TextSpan_mouseCursor]: C[15] || CT.C15,
        [TextSpan_recognizer]: null,
        [TextSpan_children]: null,
        [TextSpan_text]: "✂"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[17] || CT.C17,
        [BorderRadius_bottomLeft]: C[17] || CT.C17,
        [BorderRadius_topRight]: C[17] || CT.C17,
        [BorderRadius_topLeft]: C[17] || CT.C17
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "rectangle",
        [_Enum_index]: 0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "circle",
        [_Enum_index]: 1
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: proxy_box.DecorationPosition.prototype,
        [_Enum__name]: "background",
        [_Enum_index]: 0
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: proxy_box.DecorationPosition.prototype,
        [_Enum__name]: "foreground",
        [_Enum_index]: 1
      });
    },
    get C24() {
      return C[24] = dart.constList([C[22] || CT.C22, C[23] || CT.C23], proxy_box.DecorationPosition);
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: image_provider.ImageConfiguration.prototype,
        [ImageConfiguration_platform]: null,
        [ImageConfiguration_size]: null,
        [ImageConfiguration_textDirection]: null,
        [ImageConfiguration_locale]: null,
        [ImageConfiguration_devicePixelRatio]: null,
        [ImageConfiguration_bundle]: null
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "contain",
        [_Enum_index]: 1
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "scaleDown",
        [_Enum_index]: 6
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "cover",
        [_Enum_index]: 2
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fill",
        [_Enum_index]: 0
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fitHeight",
        [_Enum_index]: 4
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "fitWidth",
        [_Enum_index]: 3
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 5
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 1 / 0,
        [BoxConstraints_minHeight]: 0,
        [BoxConstraints_maxWidth]: 1 / 0,
        [BoxConstraints_minWidth]: 0
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: -1
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: ui.Rect.prototype,
        [Rect_bottom]: 1 / 0,
        [Rect_right]: 1 / 0,
        [Rect_top]: -1 / 0,
        [Rect_left]: -1 / 0
      });
    }
  }, false);
  var C = Array(38).fill(void 0);
  var I = [
    "package:flutter/src/rendering/proxy_box.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/proxy_box.dart"
  ];
  const _is_RenderProxyBoxMixin_default = Symbol('_is_RenderProxyBoxMixin_default');
  proxy_box.RenderProxyBoxMixin$ = dart.generic(T => {
    class RenderProxyBoxMixin extends core.Object {}
    RenderProxyBoxMixin[dart.mixinOn] = _RenderProxyBoxMixin$36RenderBox$36RenderObjectWithChildMixin => class RenderProxyBoxMixin extends _RenderProxyBoxMixin$36RenderBox$36RenderObjectWithChildMixin {
      setupParentData(child) {
        object.RenderObject.as(child);
        if (!object.ParentData.is(child.parentData)) child.parentData = new object.ParentData.new();
      }
      computeMinIntrinsicWidth(height) {
        if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
        return 0.0;
      }
      computeMaxIntrinsicWidth(height) {
        if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
        return 0.0;
      }
      computeMinIntrinsicHeight(width) {
        if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicHeight(width);
        return 0.0;
      }
      computeMaxIntrinsicHeight(width) {
        if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
        return 0.0;
      }
      computeDistanceToActualBaseline(baseline) {
        if (this.child != null) return dart.nullCheck(this.child).getDistanceToActualBaseline(baseline);
        return super.computeDistanceToActualBaseline(baseline);
      }
      computeDryLayout(constraints) {
        if (this.child != null) {
          return dart.nullCheck(this.child).getDryLayout(constraints);
        }
        return this.computeSizeForNoChild(constraints);
      }
      performLayout() {
        if (this.child != null) {
          dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
          this.size = dart.nullCheck(this.child).size;
        } else {
          this.size = this.computeSizeForNoChild(this.constraints);
        }
      }
      computeSizeForNoChild(constraints) {
        return constraints.smallest;
      }
      hitTestChildren(result, opts) {
        let t0, t0$;
        let position = opts && 'position' in opts ? opts.position : null;
        t0$ = (t0 = this.child, t0 == null ? null : t0.hitTest(result, {position: position}));
        return t0$ == null ? false : t0$;
      }
      applyPaintTransform(child, transform) {
        object.RenderObject.as(child);
      }
      paint(context, offset) {
        if (this.child != null) context.paintChild(dart.nullCheck(this.child), offset);
      }
    };
    dart.addTypeTests(RenderProxyBoxMixin);
    RenderProxyBoxMixin.prototype[_is_RenderProxyBoxMixin_default] = true;
    dart.addTypeCaches(RenderProxyBoxMixin);
    RenderProxyBoxMixin[dart.implements] = () => [object.RenderObjectWithChildMixin$(T), box.RenderBox];
    dart.setMethodSignature(RenderProxyBoxMixin, () => ({
      __proto__: dart.getMethods(RenderProxyBoxMixin.__proto__),
      setupParentData: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      computeMinIntrinsicWidth: dart.fnType(core.double, [core.double]),
      computeMaxIntrinsicWidth: dart.fnType(core.double, [core.double]),
      computeMinIntrinsicHeight: dart.fnType(core.double, [core.double]),
      computeMaxIntrinsicHeight: dart.fnType(core.double, [core.double]),
      computeDistanceToActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
      computeDryLayout: dart.fnType(ui.Size, [box.BoxConstraints]),
      performLayout: dart.fnType(dart.void, []),
      computeSizeForNoChild: dart.fnType(ui.Size, [box.BoxConstraints]),
      hitTestChildren: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
      applyPaintTransform: dart.fnType(dart.void, [dart.nullable(core.Object), vector_math_64.Matrix4]),
      paint: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
    }));
    dart.setLibraryUri(RenderProxyBoxMixin, I[0]);
    return RenderProxyBoxMixin;
  });
  proxy_box.RenderProxyBoxMixin = proxy_box.RenderProxyBoxMixin$();
  dart.addTypeTests(proxy_box.RenderProxyBoxMixin, _is_RenderProxyBoxMixin_default);
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  const RenderBox_RenderProxyBoxMixin$36 = class RenderBox_RenderProxyBoxMixin extends RenderBox_RenderObjectWithChildMixin$36 {};
  (RenderBox_RenderProxyBoxMixin$36.new = function() {
    RenderBox_RenderProxyBoxMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderProxyBoxMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderProxyBoxMixin$36, proxy_box.RenderProxyBoxMixin$(box.RenderBox));
  proxy_box.RenderProxyBox = class RenderProxyBox extends RenderBox_RenderProxyBoxMixin$36 {
    static ['_#new#tearOff'](child = null) {
      return new proxy_box.RenderProxyBox.new(child);
    }
  };
  (proxy_box.RenderProxyBox.new = function(child = null) {
    proxy_box.RenderProxyBox.__proto__.new.call(this);
    this.child = child;
  }).prototype = proxy_box.RenderProxyBox.prototype;
  dart.addTypeTests(proxy_box.RenderProxyBox);
  dart.addTypeCaches(proxy_box.RenderProxyBox);
  dart.setLibraryUri(proxy_box.RenderProxyBox, I[0]);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  proxy_box.HitTestBehavior = class HitTestBehavior extends core._Enum {
    toString() {
      return "HitTestBehavior." + this[_name];
    }
  };
  (proxy_box.HitTestBehavior.new = function(index, name) {
    proxy_box.HitTestBehavior.__proto__.new.call(this, index, name);
    ;
  }).prototype = proxy_box.HitTestBehavior.prototype;
  dart.addTypeTests(proxy_box.HitTestBehavior);
  dart.addTypeCaches(proxy_box.HitTestBehavior);
  dart.setLibraryUri(proxy_box.HitTestBehavior, I[0]);
  dart.setStaticFieldSignature(proxy_box.HitTestBehavior, () => ['values', 'deferToChild', 'opaque', 'translucent']);
  dart.defineExtensionMethods(proxy_box.HitTestBehavior, ['toString']);
  proxy_box.HitTestBehavior.deferToChild = C[0] || CT.C0;
  proxy_box.HitTestBehavior.opaque = C[1] || CT.C1;
  proxy_box.HitTestBehavior.translucent = C[2] || CT.C2;
  proxy_box.HitTestBehavior.values = C[3] || CT.C3;
  var behavior$ = dart.privateName(proxy_box, "RenderProxyBoxWithHitTestBehavior.behavior");
  proxy_box.RenderProxyBoxWithHitTestBehavior = class RenderProxyBoxWithHitTestBehavior extends proxy_box.RenderProxyBox {
    get behavior() {
      return this[behavior$];
    }
    set behavior(value) {
      this[behavior$] = value;
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let hitTarget = false;
      if (this.size.contains(position)) {
        hitTarget = this.hitTestChildren(result, {position: position}) || this.hitTestSelf(position);
        if (hitTarget || this.behavior === proxy_box.HitTestBehavior.translucent) result.add(new box.BoxHitTestEntry.new(this, position));
      }
      return hitTarget;
    }
    hitTestSelf(position) {
      return this.behavior === proxy_box.HitTestBehavior.opaque;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.EnumPropertyOfHitTestBehavior()).new("behavior", this.behavior, {defaultValue: null}));
    }
  };
  (proxy_box.RenderProxyBoxWithHitTestBehavior.new = function(opts) {
    let behavior = opts && 'behavior' in opts ? opts.behavior : C[0] || CT.C0;
    let child = opts && 'child' in opts ? opts.child : null;
    this[behavior$] = behavior;
    proxy_box.RenderProxyBoxWithHitTestBehavior.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderProxyBoxWithHitTestBehavior.prototype;
  dart.addTypeTests(proxy_box.RenderProxyBoxWithHitTestBehavior);
  dart.addTypeCaches(proxy_box.RenderProxyBoxWithHitTestBehavior);
  dart.setLibraryUri(proxy_box.RenderProxyBoxWithHitTestBehavior, I[0]);
  dart.setFieldSignature(proxy_box.RenderProxyBoxWithHitTestBehavior, () => ({
    __proto__: dart.getFields(proxy_box.RenderProxyBoxWithHitTestBehavior.__proto__),
    behavior: dart.fieldType(proxy_box.HitTestBehavior)
  }));
  var _additionalConstraints = dart.privateName(proxy_box, "_additionalConstraints");
  var Color_value = dart.privateName(ui, "Color.value");
  proxy_box.RenderConstrainedBox = class RenderConstrainedBox extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let additionalConstraints = opts && 'additionalConstraints' in opts ? opts.additionalConstraints : null;
      return new proxy_box.RenderConstrainedBox.new({child: child, additionalConstraints: additionalConstraints});
    }
    get additionalConstraints() {
      return this[_additionalConstraints];
    }
    set additionalConstraints(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 221, 12, "value != null");
      if (!value.debugAssertIsValid()) dart.assertFailed(null, I[1], 222, 12, "value.debugAssertIsValid()");
      if (this[_additionalConstraints]._equals(value)) return;
      this[_additionalConstraints] = value;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (this[_additionalConstraints].hasBoundedWidth && this[_additionalConstraints].hasTightWidth) return this[_additionalConstraints].minWidth;
      let width = super.computeMinIntrinsicWidth(height);
      if (!width[$isFinite]) dart.assertFailed(null, I[1], 234, 12, "width.isFinite");
      if (!this[_additionalConstraints].hasInfiniteWidth) return this[_additionalConstraints].constrainWidth(width);
      return width;
    }
    computeMaxIntrinsicWidth(height) {
      if (this[_additionalConstraints].hasBoundedWidth && this[_additionalConstraints].hasTightWidth) return this[_additionalConstraints].minWidth;
      let width = super.computeMaxIntrinsicWidth(height);
      if (!width[$isFinite]) dart.assertFailed(null, I[1], 245, 12, "width.isFinite");
      if (!this[_additionalConstraints].hasInfiniteWidth) return this[_additionalConstraints].constrainWidth(width);
      return width;
    }
    computeMinIntrinsicHeight(width) {
      if (this[_additionalConstraints].hasBoundedHeight && this[_additionalConstraints].hasTightHeight) return this[_additionalConstraints].minHeight;
      let height = super.computeMinIntrinsicHeight(width);
      if (!height[$isFinite]) dart.assertFailed(null, I[1], 256, 12, "height.isFinite");
      if (!this[_additionalConstraints].hasInfiniteHeight) return this[_additionalConstraints].constrainHeight(height);
      return height;
    }
    computeMaxIntrinsicHeight(width) {
      if (this[_additionalConstraints].hasBoundedHeight && this[_additionalConstraints].hasTightHeight) return this[_additionalConstraints].minHeight;
      let height = super.computeMaxIntrinsicHeight(width);
      if (!height[$isFinite]) dart.assertFailed(null, I[1], 267, 12, "height.isFinite");
      if (!this[_additionalConstraints].hasInfiniteHeight) return this[_additionalConstraints].constrainHeight(height);
      return height;
    }
    performLayout() {
      let constraints = this.constraints;
      if (this.child != null) {
        dart.nullCheck(this.child).layout(this[_additionalConstraints].enforce(constraints), {parentUsesSize: true});
        this.size = dart.nullCheck(this.child).size;
      } else {
        this.size = this[_additionalConstraints].enforce(constraints).constrain(ui.Size.zero);
      }
    }
    computeDryLayout(constraints) {
      if (this.child != null) {
        return dart.nullCheck(this.child).getDryLayout(this[_additionalConstraints].enforce(constraints));
      } else {
        return this[_additionalConstraints].enforce(constraints).constrain(ui.Size.zero);
      }
    }
    debugPaintSize(context, offset) {
      super.debugPaintSize(context, offset);
      if (!dart.fn(() => {
        let t0;
        let paint = null;
        if (this.child == null || dart.nullCheck(this.child).size.isEmpty) {
          paint = (t0 = ui.Paint.new(), (() => {
            t0.color = C[4] || CT.C4;
            return t0;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 296, 12, "() {\n      final Paint paint;\n      if (child == null || child!.size.isEmpty) {\n        paint = Paint()\n          ..color = const Color(0x90909090);\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfBoxConstraints()).new("additionalConstraints", this.additionalConstraints));
    }
  };
  (proxy_box.RenderConstrainedBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let additionalConstraints = opts && 'additionalConstraints' in opts ? opts.additionalConstraints : null;
    if (!(additionalConstraints !== null)) dart.assertFailed(null, I[1], 212, 15, "additionalConstraints != null");
    if (!additionalConstraints.debugAssertIsValid()) dart.assertFailed(null, I[1], 213, 15, "additionalConstraints.debugAssertIsValid()");
    this[_additionalConstraints] = additionalConstraints;
    proxy_box.RenderConstrainedBox.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderConstrainedBox.prototype;
  dart.addTypeTests(proxy_box.RenderConstrainedBox);
  dart.addTypeCaches(proxy_box.RenderConstrainedBox);
  dart.setGetterSignature(proxy_box.RenderConstrainedBox, () => ({
    __proto__: dart.getGetters(proxy_box.RenderConstrainedBox.__proto__),
    additionalConstraints: box.BoxConstraints
  }));
  dart.setSetterSignature(proxy_box.RenderConstrainedBox, () => ({
    __proto__: dart.getSetters(proxy_box.RenderConstrainedBox.__proto__),
    additionalConstraints: box.BoxConstraints
  }));
  dart.setLibraryUri(proxy_box.RenderConstrainedBox, I[0]);
  dart.setFieldSignature(proxy_box.RenderConstrainedBox, () => ({
    __proto__: dart.getFields(proxy_box.RenderConstrainedBox.__proto__),
    [_additionalConstraints]: dart.fieldType(box.BoxConstraints)
  }));
  var _maxWidth = dart.privateName(proxy_box, "_maxWidth");
  var _maxHeight = dart.privateName(proxy_box, "_maxHeight");
  var _limitConstraints = dart.privateName(proxy_box, "_limitConstraints");
  var _computeSize = dart.privateName(proxy_box, "_computeSize");
  proxy_box.RenderLimitedBox = class RenderLimitedBox extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : 1 / 0;
      return new proxy_box.RenderLimitedBox.new({child: child, maxWidth: maxWidth, maxHeight: maxHeight});
    }
    get maxWidth() {
      return this[_maxWidth];
    }
    set maxWidth(value) {
      if (!(value !== null && value >= 0.0)) dart.assertFailed(null, I[1], 346, 12, "value != null && value >= 0.0");
      if (this[_maxWidth] === value) return;
      this[_maxWidth] = value;
      this.markNeedsLayout();
    }
    get maxHeight() {
      return this[_maxHeight];
    }
    set maxHeight(value) {
      if (!(value !== null && value >= 0.0)) dart.assertFailed(null, I[1], 357, 12, "value != null && value >= 0.0");
      if (this[_maxHeight] === value) return;
      this[_maxHeight] = value;
      this.markNeedsLayout();
    }
    [_limitConstraints](constraints) {
      return new box.BoxConstraints.new({minWidth: constraints.minWidth, maxWidth: constraints.hasBoundedWidth ? constraints.maxWidth : constraints.constrainWidth(this.maxWidth), minHeight: constraints.minHeight, maxHeight: constraints.hasBoundedHeight ? constraints.maxHeight : constraints.constrainHeight(this.maxHeight)});
    }
    [_computeSize](opts) {
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      if (this.child != null) {
        let childSize = layoutChild(dart.nullCheck(this.child), this[_limitConstraints](constraints));
        return constraints.constrain(childSize);
      }
      return this[_limitConstraints](constraints).constrain(ui.Size.zero);
    }
    computeDryLayout(constraints) {
      return this[_computeSize]({constraints: constraints, layoutChild: C[5] || CT.C5});
    }
    performLayout() {
      this.size = this[_computeSize]({constraints: this.constraints, layoutChild: C[6] || CT.C6});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("maxWidth", this.maxWidth, {defaultValue: 1 / 0}));
      properties.add(new diagnostics.DoubleProperty.new("maxHeight", this.maxHeight, {defaultValue: 1 / 0}));
    }
  };
  (proxy_box.RenderLimitedBox.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : 1 / 0;
    if (!(maxWidth !== null && maxWidth >= 0.0)) dart.assertFailed(null, I[1], 336, 15, "maxWidth != null && maxWidth >= 0.0");
    if (!(maxHeight !== null && maxHeight >= 0.0)) dart.assertFailed(null, I[1], 337, 15, "maxHeight != null && maxHeight >= 0.0");
    this[_maxWidth] = maxWidth;
    this[_maxHeight] = maxHeight;
    proxy_box.RenderLimitedBox.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderLimitedBox.prototype;
  dart.addTypeTests(proxy_box.RenderLimitedBox);
  dart.addTypeCaches(proxy_box.RenderLimitedBox);
  dart.setMethodSignature(proxy_box.RenderLimitedBox, () => ({
    __proto__: dart.getMethods(proxy_box.RenderLimitedBox.__proto__),
    [_limitConstraints]: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    [_computeSize]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setGetterSignature(proxy_box.RenderLimitedBox, () => ({
    __proto__: dart.getGetters(proxy_box.RenderLimitedBox.__proto__),
    maxWidth: core.double,
    maxHeight: core.double
  }));
  dart.setSetterSignature(proxy_box.RenderLimitedBox, () => ({
    __proto__: dart.getSetters(proxy_box.RenderLimitedBox.__proto__),
    maxWidth: core.double,
    maxHeight: core.double
  }));
  dart.setLibraryUri(proxy_box.RenderLimitedBox, I[0]);
  dart.setFieldSignature(proxy_box.RenderLimitedBox, () => ({
    __proto__: dart.getFields(proxy_box.RenderLimitedBox.__proto__),
    [_maxWidth]: dart.fieldType(core.double),
    [_maxHeight]: dart.fieldType(core.double)
  }));
  var _aspectRatio = dart.privateName(proxy_box, "_aspectRatio");
  var _applyAspectRatio = dart.privateName(proxy_box, "_applyAspectRatio");
  proxy_box.RenderAspectRatio = class RenderAspectRatio extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let aspectRatio = opts && 'aspectRatio' in opts ? opts.aspectRatio : null;
      return new proxy_box.RenderAspectRatio.new({child: child, aspectRatio: aspectRatio});
    }
    get aspectRatio() {
      return this[_aspectRatio];
    }
    set aspectRatio(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 451, 12, "value != null");
      if (!(value > 0.0)) dart.assertFailed(null, I[1], 452, 12, "value > 0.0");
      if (!value[$isFinite]) dart.assertFailed(null, I[1], 453, 12, "value.isFinite");
      if (this[_aspectRatio] === value) return;
      this[_aspectRatio] = value;
      this.markNeedsLayout();
    }
    computeMinIntrinsicWidth(height) {
      if (height[$isFinite]) return height * this[_aspectRatio];
      if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      if (height[$isFinite]) return height * this[_aspectRatio];
      if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      if (width[$isFinite]) return width / this[_aspectRatio];
      if (this.child != null) return dart.nullCheck(this.child).getMinIntrinsicHeight(width);
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      if (width[$isFinite]) return width / this[_aspectRatio];
      if (this.child != null) return dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
      return 0.0;
    }
    [_applyAspectRatio](constraints) {
      if (!constraints.debugAssertIsValid()) dart.assertFailed(null, I[1], 497, 12, "constraints.debugAssertIsValid()");
      if (!dart.fn(() => {
        if (!constraints.hasBoundedWidth && !constraints.hasBoundedHeight) {
          dart.throw(assertions.FlutterError.new(dart.str(this[$runtimeType]) + " has unbounded constraints.\n" + "This " + dart.str(this[$runtimeType]) + " was given an aspect ratio of " + dart.str(this.aspectRatio) + " but was given " + "both unbounded width and unbounded height constraints. Because both " + "constraints were unbounded, this render object doesn't know how much " + "size to consume."));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 498, 12, "() {\n      if (!constraints.hasBoundedWidth && !constraints.hasBoundedHeight) {\n        throw FlutterError(\n          '$runtimeType has unbounded constraints.\\n'\n          'This $runtimeType was given an aspect ratio of $aspectRatio but was given '\n          'both unbounded width and unbounded height constraints. Because both '\n          \"constraints were unbounded, this render object doesn't know how much \"\n          'size to consume.',\n        );\n      }\n      return true;\n    }()");
      if (constraints.isTight) return constraints.smallest;
      let width = constraints.maxWidth;
      let height = null;
      if (width[$isFinite]) {
        height = width / this[_aspectRatio];
      } else {
        height = constraints.maxHeight;
        width = height * this[_aspectRatio];
      }
      if (width > constraints.maxWidth) {
        width = constraints.maxWidth;
        height = width / this[_aspectRatio];
      }
      if (height > constraints.maxHeight) {
        height = constraints.maxHeight;
        width = height * this[_aspectRatio];
      }
      if (width < constraints.minWidth) {
        width = constraints.minWidth;
        height = width / this[_aspectRatio];
      }
      if (height < constraints.minHeight) {
        height = constraints.minHeight;
        width = height * this[_aspectRatio];
      }
      return constraints.constrain(new ui.Size.new(width, height));
    }
    computeDryLayout(constraints) {
      return this[_applyAspectRatio](constraints);
    }
    performLayout() {
      this.size = this.computeDryLayout(this.constraints);
      if (this.child != null) dart.nullCheck(this.child).layout(new box.BoxConstraints.tight(this.size));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("aspectRatio", this.aspectRatio));
    }
  };
  (proxy_box.RenderAspectRatio.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let aspectRatio = opts && 'aspectRatio' in opts ? opts.aspectRatio : null;
    if (!(aspectRatio !== null)) dart.assertFailed(null, I[1], 438, 15, "aspectRatio != null");
    if (!(aspectRatio > 0.0)) dart.assertFailed(null, I[1], 439, 15, "aspectRatio > 0.0");
    if (!aspectRatio[$isFinite]) dart.assertFailed(null, I[1], 440, 15, "aspectRatio.isFinite");
    this[_aspectRatio] = aspectRatio;
    proxy_box.RenderAspectRatio.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderAspectRatio.prototype;
  dart.addTypeTests(proxy_box.RenderAspectRatio);
  dart.addTypeCaches(proxy_box.RenderAspectRatio);
  dart.setMethodSignature(proxy_box.RenderAspectRatio, () => ({
    __proto__: dart.getMethods(proxy_box.RenderAspectRatio.__proto__),
    [_applyAspectRatio]: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setGetterSignature(proxy_box.RenderAspectRatio, () => ({
    __proto__: dart.getGetters(proxy_box.RenderAspectRatio.__proto__),
    aspectRatio: core.double
  }));
  dart.setSetterSignature(proxy_box.RenderAspectRatio, () => ({
    __proto__: dart.getSetters(proxy_box.RenderAspectRatio.__proto__),
    aspectRatio: core.double
  }));
  dart.setLibraryUri(proxy_box.RenderAspectRatio, I[0]);
  dart.setFieldSignature(proxy_box.RenderAspectRatio, () => ({
    __proto__: dart.getFields(proxy_box.RenderAspectRatio.__proto__),
    [_aspectRatio]: dart.fieldType(core.double)
  }));
  var _stepWidth = dart.privateName(proxy_box, "_stepWidth");
  var _stepHeight = dart.privateName(proxy_box, "_stepHeight");
  proxy_box.RenderIntrinsicWidth = class RenderIntrinsicWidth extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let stepWidth = opts && 'stepWidth' in opts ? opts.stepWidth : null;
      let stepHeight = opts && 'stepHeight' in opts ? opts.stepHeight : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderIntrinsicWidth.new({stepWidth: stepWidth, stepHeight: stepHeight, child: child});
    }
    get stepWidth() {
      return this[_stepWidth];
    }
    set stepWidth(value) {
      if (!(value == null || dart.notNull(value) > 0.0)) dart.assertFailed(null, I[1], 627, 12, "value == null || value > 0.0");
      if (value == this[_stepWidth]) return;
      this[_stepWidth] = value;
      this.markNeedsLayout();
    }
    get stepHeight() {
      return this[_stepHeight];
    }
    set stepHeight(value) {
      if (!(value == null || dart.notNull(value) > 0.0)) dart.assertFailed(null, I[1], 640, 12, "value == null || value > 0.0");
      if (value == this[_stepHeight]) return;
      this[_stepHeight] = value;
      this.markNeedsLayout();
    }
    static _applyStep(input, step) {
      if (!input[$isFinite]) dart.assertFailed(null, I[1], 648, 12, "input.isFinite");
      if (step == null) return input;
      return (input / dart.notNull(step))[$ceil]() * dart.notNull(step);
    }
    computeMinIntrinsicWidth(height) {
      return this.computeMaxIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (this.child == null) return 0.0;
      let width = dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
      return proxy_box.RenderIntrinsicWidth._applyStep(width, this[_stepWidth]);
    }
    computeMinIntrinsicHeight(width) {
      if (this.child == null) return 0.0;
      if (!width[$isFinite]) width = this.computeMaxIntrinsicWidth(1 / 0);
      if (!width[$isFinite]) dart.assertFailed(null, I[1], 673, 12, "width.isFinite");
      let height = dart.nullCheck(this.child).getMinIntrinsicHeight(width);
      return proxy_box.RenderIntrinsicWidth._applyStep(height, this[_stepHeight]);
    }
    computeMaxIntrinsicHeight(width) {
      if (this.child == null) return 0.0;
      if (!width[$isFinite]) width = this.computeMaxIntrinsicWidth(1 / 0);
      if (!width[$isFinite]) dart.assertFailed(null, I[1], 684, 12, "width.isFinite");
      let height = dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
      return proxy_box.RenderIntrinsicWidth._applyStep(height, this[_stepHeight]);
    }
    [_computeSize](opts) {
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (this.child != null) {
        if (!constraints.hasTightWidth) {
          let width = dart.nullCheck(this.child).getMaxIntrinsicWidth(constraints.maxHeight);
          if (!width[$isFinite]) dart.assertFailed(null, I[1], 693, 16, "width.isFinite");
          constraints = constraints.tighten({width: proxy_box.RenderIntrinsicWidth._applyStep(width, this[_stepWidth])});
        }
        if (this[_stepHeight] != null) {
          let height = dart.nullCheck(this.child).getMaxIntrinsicHeight(constraints.maxWidth);
          if (!height[$isFinite]) dart.assertFailed(null, I[1], 698, 16, "height.isFinite");
          constraints = constraints.tighten({height: proxy_box.RenderIntrinsicWidth._applyStep(height, this[_stepHeight])});
        }
        return layoutChild(dart.nullCheck(this.child), constraints);
      } else {
        return constraints.smallest;
      }
    }
    computeDryLayout(constraints) {
      return this[_computeSize]({layoutChild: C[5] || CT.C5, constraints: constraints});
    }
    performLayout() {
      this.size = this[_computeSize]({layoutChild: C[6] || CT.C6, constraints: this.constraints});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("stepWidth", this.stepWidth));
      properties.add(new diagnostics.DoubleProperty.new("stepHeight", this.stepHeight));
    }
  };
  (proxy_box.RenderIntrinsicWidth.new = function(opts) {
    let stepWidth = opts && 'stepWidth' in opts ? opts.stepWidth : null;
    let stepHeight = opts && 'stepHeight' in opts ? opts.stepHeight : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(stepWidth == null || dart.notNull(stepWidth) > 0.0)) dart.assertFailed(null, I[1], 615, 15, "stepWidth == null || stepWidth > 0.0");
    if (!(stepHeight == null || dart.notNull(stepHeight) > 0.0)) dart.assertFailed(null, I[1], 616, 15, "stepHeight == null || stepHeight > 0.0");
    this[_stepWidth] = stepWidth;
    this[_stepHeight] = stepHeight;
    proxy_box.RenderIntrinsicWidth.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderIntrinsicWidth.prototype;
  dart.addTypeTests(proxy_box.RenderIntrinsicWidth);
  dart.addTypeCaches(proxy_box.RenderIntrinsicWidth);
  dart.setMethodSignature(proxy_box.RenderIntrinsicWidth, () => ({
    __proto__: dart.getMethods(proxy_box.RenderIntrinsicWidth.__proto__),
    [_computeSize]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setStaticMethodSignature(proxy_box.RenderIntrinsicWidth, () => ['_applyStep']);
  dart.setGetterSignature(proxy_box.RenderIntrinsicWidth, () => ({
    __proto__: dart.getGetters(proxy_box.RenderIntrinsicWidth.__proto__),
    stepWidth: dart.nullable(core.double),
    stepHeight: dart.nullable(core.double)
  }));
  dart.setSetterSignature(proxy_box.RenderIntrinsicWidth, () => ({
    __proto__: dart.getSetters(proxy_box.RenderIntrinsicWidth.__proto__),
    stepWidth: dart.nullable(core.double),
    stepHeight: dart.nullable(core.double)
  }));
  dart.setLibraryUri(proxy_box.RenderIntrinsicWidth, I[0]);
  dart.setFieldSignature(proxy_box.RenderIntrinsicWidth, () => ({
    __proto__: dart.getFields(proxy_box.RenderIntrinsicWidth.__proto__),
    [_stepWidth]: dart.fieldType(dart.nullable(core.double)),
    [_stepHeight]: dart.fieldType(dart.nullable(core.double))
  }));
  proxy_box.RenderIntrinsicHeight = class RenderIntrinsicHeight extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderIntrinsicHeight.new({child: child});
    }
    computeMinIntrinsicWidth(height) {
      if (this.child == null) return 0.0;
      if (!height[$isFinite]) height = dart.nullCheck(this.child).getMaxIntrinsicHeight(1 / 0);
      if (!height[$isFinite]) dart.assertFailed(null, I[1], 771, 12, "height.isFinite");
      return dart.nullCheck(this.child).getMinIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (this.child == null) return 0.0;
      if (!height[$isFinite]) height = dart.nullCheck(this.child).getMaxIntrinsicHeight(1 / 0);
      if (!height[$isFinite]) dart.assertFailed(null, I[1], 781, 12, "height.isFinite");
      return dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
    }
    computeMinIntrinsicHeight(width) {
      return this.computeMaxIntrinsicHeight(width);
    }
    [_computeSize](opts) {
      let layoutChild = opts && 'layoutChild' in opts ? opts.layoutChild : null;
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      if (this.child != null) {
        if (!constraints.hasTightHeight) {
          let height = dart.nullCheck(this.child).getMaxIntrinsicHeight(constraints.maxWidth);
          if (!height[$isFinite]) dart.assertFailed(null, I[1], 794, 16, "height.isFinite");
          constraints = constraints.tighten({height: height});
        }
        return layoutChild(dart.nullCheck(this.child), constraints);
      } else {
        return constraints.smallest;
      }
    }
    computeDryLayout(constraints) {
      return this[_computeSize]({layoutChild: C[5] || CT.C5, constraints: constraints});
    }
    performLayout() {
      this.size = this[_computeSize]({layoutChild: C[6] || CT.C6, constraints: this.constraints});
    }
  };
  (proxy_box.RenderIntrinsicHeight.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    proxy_box.RenderIntrinsicHeight.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderIntrinsicHeight.prototype;
  dart.addTypeTests(proxy_box.RenderIntrinsicHeight);
  dart.addTypeCaches(proxy_box.RenderIntrinsicHeight);
  dart.setMethodSignature(proxy_box.RenderIntrinsicHeight, () => ({
    __proto__: dart.getMethods(proxy_box.RenderIntrinsicHeight.__proto__),
    [_computeSize]: dart.fnType(ui.Size, [], {}, {constraints: box.BoxConstraints, layoutChild: dart.fnType(ui.Size, [box.RenderBox, box.BoxConstraints])})
  }));
  dart.setLibraryUri(proxy_box.RenderIntrinsicHeight, I[0]);
  var _opacity = dart.privateName(proxy_box, "_opacity");
  var _alwaysIncludeSemantics = dart.privateName(proxy_box, "_alwaysIncludeSemantics");
  var _alpha = dart.privateName(proxy_box, "_alpha");
  proxy_box.RenderOpacity = class RenderOpacity extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderOpacity.new({opacity: opacity, alwaysIncludeSemantics: alwaysIncludeSemantics, child: child});
    }
    get alwaysNeedsCompositing() {
      return this.child != null && this[_alpha] > 0;
    }
    get opacity() {
      return this[_opacity];
    }
    set opacity(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 863, 12, "value != null");
      if (!(value >= 0.0 && value <= 1.0)) dart.assertFailed(null, I[1], 864, 12, "value >= 0.0 && value <= 1.0");
      if (this[_opacity] === value) return;
      let didNeedCompositing = this.alwaysNeedsCompositing;
      let wasVisible = this[_alpha] !== 0;
      this[_opacity] = value;
      this[_alpha] = ui.Color.getAlphaFromOpacity(this[_opacity]);
      if (didNeedCompositing !== this.alwaysNeedsCompositing) this.markNeedsCompositingBitsUpdate();
      this.markNeedsPaint();
      if (wasVisible !== (this[_alpha] !== 0) && !this.alwaysIncludeSemantics) this.markNeedsSemanticsUpdate();
    }
    get alwaysIncludeSemantics() {
      return this[_alwaysIncludeSemantics];
    }
    set alwaysIncludeSemantics(value) {
      if (value === this[_alwaysIncludeSemantics]) return;
      this[_alwaysIncludeSemantics] = value;
      this.markNeedsSemanticsUpdate();
    }
    paint(context, offset) {
      if (this.child != null) {
        if (this[_alpha] === 0) {
          this.layer = null;
          return;
        }
        if (!this.needsCompositing) dart.assertFailed(null, I[1], 900, 14, "needsCompositing");
        this.layer = context.pushOpacity(offset, this[_alpha], dart.bind(this, 'paint', super.paint), {oldLayer: T$.OpacityLayerN().as(this.layer)});
      }
    }
    visitChildrenForSemantics(visitor) {
      if (this.child != null && (this[_alpha] !== 0 || this.alwaysIncludeSemantics)) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity));
      properties.add(new diagnostics.FlagProperty.new("alwaysIncludeSemantics", {value: this.alwaysIncludeSemantics, ifTrue: "alwaysIncludeSemantics"}));
    }
  };
  (proxy_box.RenderOpacity.new = function(opts) {
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(opacity !== null)) dart.assertFailed(null, I[1], 837, 15, "opacity != null");
    if (!(opacity >= 0.0 && opacity <= 1.0)) dart.assertFailed(null, I[1], 838, 15, "opacity >= 0.0 && opacity <= 1.0");
    if (!(alwaysIncludeSemantics !== null)) dart.assertFailed(null, I[1], 839, 15, "alwaysIncludeSemantics != null");
    this[_opacity] = opacity;
    this[_alwaysIncludeSemantics] = alwaysIncludeSemantics;
    this[_alpha] = ui.Color.getAlphaFromOpacity(opacity);
    proxy_box.RenderOpacity.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderOpacity.prototype;
  dart.addTypeTests(proxy_box.RenderOpacity);
  dart.addTypeCaches(proxy_box.RenderOpacity);
  dart.setGetterSignature(proxy_box.RenderOpacity, () => ({
    __proto__: dart.getGetters(proxy_box.RenderOpacity.__proto__),
    opacity: core.double,
    alwaysIncludeSemantics: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderOpacity, () => ({
    __proto__: dart.getSetters(proxy_box.RenderOpacity.__proto__),
    opacity: core.double,
    alwaysIncludeSemantics: core.bool
  }));
  dart.setLibraryUri(proxy_box.RenderOpacity, I[0]);
  dart.setFieldSignature(proxy_box.RenderOpacity, () => ({
    __proto__: dart.getFields(proxy_box.RenderOpacity.__proto__),
    [_alpha]: dart.fieldType(core.int),
    [_opacity]: dart.fieldType(core.double),
    [_alwaysIncludeSemantics]: dart.fieldType(core.bool)
  }));
  var _alpha$ = dart.privateName(proxy_box, "RenderAnimatedOpacityMixin._alpha");
  var _currentlyNeedsCompositing = dart.privateName(proxy_box, "RenderAnimatedOpacityMixin._currentlyNeedsCompositing");
  var _opacity$ = dart.privateName(proxy_box, "RenderAnimatedOpacityMixin._opacity");
  var _alwaysIncludeSemantics$ = dart.privateName(proxy_box, "RenderAnimatedOpacityMixin._alwaysIncludeSemantics");
  var _currentlyNeedsCompositing$ = dart.privateName(proxy_box, "_currentlyNeedsCompositing");
  var _updateOpacity = dart.privateName(proxy_box, "_updateOpacity");
  const _is_RenderAnimatedOpacityMixin_default = Symbol('_is_RenderAnimatedOpacityMixin_default');
  proxy_box.RenderAnimatedOpacityMixin$ = dart.generic(T => {
    class RenderAnimatedOpacityMixin extends object.RenderObjectWithChildMixin$(T) {}
    RenderAnimatedOpacityMixin[dart.mixinOn] = RenderObjectWithChildMixin => class RenderAnimatedOpacityMixin extends RenderObjectWithChildMixin {
      get [_alpha]() {
        return this[_alpha$];
      }
      set [_alpha](value) {
        this[_alpha$] = value;
      }
      get [_currentlyNeedsCompositing$]() {
        return this[_currentlyNeedsCompositing];
      }
      set [_currentlyNeedsCompositing$](value) {
        this[_currentlyNeedsCompositing] = value;
      }
      get [_opacity]() {
        return this[_opacity$];
      }
      set [_opacity](value) {
        this[_opacity$] = value;
      }
      get [_alwaysIncludeSemantics]() {
        return this[_alwaysIncludeSemantics$];
      }
      set [_alwaysIncludeSemantics](value) {
        this[_alwaysIncludeSemantics$] = value;
      }
      get alwaysNeedsCompositing() {
        return this.child != null && dart.nullCheck(this[_currentlyNeedsCompositing$]);
      }
      get opacity() {
        return dart.nullCheck(this[_opacity]);
      }
      set opacity(value) {
        if (!(value !== null)) dart.assertFailed(null, I[1], 944, 12, "value != null");
        if (dart.equals(this[_opacity], value)) return;
        if (this.attached && this[_opacity] != null) this.opacity.removeListener(dart.bind(this, _updateOpacity));
        this[_opacity] = value;
        if (this.attached) this.opacity.addListener(dart.bind(this, _updateOpacity));
        this[_updateOpacity]();
      }
      get alwaysIncludeSemantics() {
        return dart.nullCheck(this[_alwaysIncludeSemantics]);
      }
      set alwaysIncludeSemantics(value) {
        if (value === this[_alwaysIncludeSemantics]) return;
        this[_alwaysIncludeSemantics] = value;
        this.markNeedsSemanticsUpdate();
      }
      attach(owner) {
        object.PipelineOwner.as(owner);
        super.attach(owner);
        this.opacity.addListener(dart.bind(this, _updateOpacity));
        this[_updateOpacity]();
      }
      detach() {
        this.opacity.removeListener(dart.bind(this, _updateOpacity));
        super.detach();
      }
      [_updateOpacity]() {
        let oldAlpha = this[_alpha];
        this[_alpha] = ui.Color.getAlphaFromOpacity(this.opacity.value);
        if (oldAlpha != this[_alpha]) {
          let didNeedCompositing = this[_currentlyNeedsCompositing$];
          this[_currentlyNeedsCompositing$] = dart.nullCheck(this[_alpha]) > 0;
          if (this.child != null && didNeedCompositing != this[_currentlyNeedsCompositing$]) this.markNeedsCompositingBitsUpdate();
          this.markNeedsPaint();
          if (oldAlpha === 0 || this[_alpha] === 0) this.markNeedsSemanticsUpdate();
        }
      }
      paint(context, offset) {
        if (this.child != null) {
          if (this[_alpha] === 0) {
            this.layer = null;
            return;
          }
          if (!this.needsCompositing) dart.assertFailed(null, I[1], 1007, 14, "needsCompositing");
          this.layer = context.pushOpacity(offset, dart.nullCheck(this[_alpha]), dart.bind(this, 'paint', super.paint), {oldLayer: T$.OpacityLayerN().as(this.layer)});
        }
      }
      visitChildrenForSemantics(visitor) {
        if (this.child != null && (this[_alpha] !== 0 || this.alwaysIncludeSemantics)) visitor(dart.nullCheck(this.child));
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (T$.DiagnosticsPropertyOfAnimationOfdouble()).new("opacity", this.opacity));
        properties.add(new diagnostics.FlagProperty.new("alwaysIncludeSemantics", {value: this.alwaysIncludeSemantics, ifTrue: "alwaysIncludeSemantics"}));
      }
    };
    (RenderAnimatedOpacityMixin[dart.mixinNew] = function() {
      this[_alpha$] = null;
      this[_currentlyNeedsCompositing] = null;
      this[_opacity$] = null;
      this[_alwaysIncludeSemantics$] = null;
    }).prototype = RenderAnimatedOpacityMixin.prototype;
    dart.addTypeTests(RenderAnimatedOpacityMixin);
    RenderAnimatedOpacityMixin.prototype[_is_RenderAnimatedOpacityMixin_default] = true;
    dart.addTypeCaches(RenderAnimatedOpacityMixin);
    RenderAnimatedOpacityMixin[dart.implements] = () => [object.RenderObjectWithChildMixin$(T)];
    dart.setMethodSignature(RenderAnimatedOpacityMixin, () => ({
      __proto__: dart.getMethods(RenderAnimatedOpacityMixin.__proto__),
      [_updateOpacity]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(RenderAnimatedOpacityMixin, () => ({
      __proto__: dart.getGetters(RenderAnimatedOpacityMixin.__proto__),
      opacity: animation.Animation$(core.double),
      alwaysIncludeSemantics: core.bool
    }));
    dart.setSetterSignature(RenderAnimatedOpacityMixin, () => ({
      __proto__: dart.getSetters(RenderAnimatedOpacityMixin.__proto__),
      opacity: animation.Animation$(core.double),
      alwaysIncludeSemantics: core.bool
    }));
    dart.setLibraryUri(RenderAnimatedOpacityMixin, I[0]);
    dart.setFieldSignature(RenderAnimatedOpacityMixin, () => ({
      __proto__: dart.getFields(RenderAnimatedOpacityMixin.__proto__),
      [_alpha]: dart.fieldType(dart.nullable(core.int)),
      [_currentlyNeedsCompositing$]: dart.fieldType(dart.nullable(core.bool)),
      [_opacity]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
      [_alwaysIncludeSemantics]: dart.fieldType(dart.nullable(core.bool))
    }));
    return RenderAnimatedOpacityMixin;
  });
  proxy_box.RenderAnimatedOpacityMixin = proxy_box.RenderAnimatedOpacityMixin$();
  dart.addTypeTests(proxy_box.RenderAnimatedOpacityMixin, _is_RenderAnimatedOpacityMixin_default);
  const RenderProxyBox_RenderProxyBoxMixin$36 = class RenderProxyBox_RenderProxyBoxMixin extends proxy_box.RenderProxyBox {};
  (RenderProxyBox_RenderProxyBoxMixin$36.new = function(child) {
    RenderProxyBox_RenderProxyBoxMixin$36.__proto__.new.call(this, child);
  }).prototype = RenderProxyBox_RenderProxyBoxMixin$36.prototype;
  dart.applyMixin(RenderProxyBox_RenderProxyBoxMixin$36, proxy_box.RenderProxyBoxMixin$(box.RenderBox));
  const RenderProxyBox_RenderAnimatedOpacityMixin$36 = class RenderProxyBox_RenderAnimatedOpacityMixin extends RenderProxyBox_RenderProxyBoxMixin$36 {};
  (RenderProxyBox_RenderAnimatedOpacityMixin$36.new = function(child) {
    proxy_box.RenderAnimatedOpacityMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderProxyBox_RenderAnimatedOpacityMixin$36.__proto__.new.call(this, child);
  }).prototype = RenderProxyBox_RenderAnimatedOpacityMixin$36.prototype;
  dart.applyMixin(RenderProxyBox_RenderAnimatedOpacityMixin$36, proxy_box.RenderAnimatedOpacityMixin$(box.RenderBox));
  proxy_box.RenderAnimatedOpacity = class RenderAnimatedOpacity extends RenderProxyBox_RenderAnimatedOpacityMixin$36 {
    static ['_#new#tearOff'](opts) {
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderAnimatedOpacity.new({opacity: opacity, alwaysIncludeSemantics: alwaysIncludeSemantics, child: child});
    }
  };
  (proxy_box.RenderAnimatedOpacity.new = function(opts) {
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(opacity !== null)) dart.assertFailed(null, I[1], 1038, 15, "opacity != null");
    if (!(alwaysIncludeSemantics !== null)) dart.assertFailed(null, I[1], 1039, 15, "alwaysIncludeSemantics != null");
    proxy_box.RenderAnimatedOpacity.__proto__.new.call(this, child);
    this.opacity = opacity;
    this.alwaysIncludeSemantics = alwaysIncludeSemantics;
  }).prototype = proxy_box.RenderAnimatedOpacity.prototype;
  dart.addTypeTests(proxy_box.RenderAnimatedOpacity);
  dart.addTypeCaches(proxy_box.RenderAnimatedOpacity);
  dart.setLibraryUri(proxy_box.RenderAnimatedOpacity, I[0]);
  var _shaderCallback = dart.privateName(proxy_box, "_shaderCallback");
  var _blendMode = dart.privateName(proxy_box, "_blendMode");
  proxy_box.RenderShaderMask = class RenderShaderMask extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let shaderCallback = opts && 'shaderCallback' in opts ? opts.shaderCallback : null;
      let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C[7] || CT.C7;
      return new proxy_box.RenderShaderMask.new({child: child, shaderCallback: shaderCallback, blendMode: blendMode});
    }
    get layer() {
      return T$.ShaderMaskLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    get shaderCallback() {
      return this[_shaderCallback];
    }
    set shaderCallback(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 1084, 12, "value != null");
      if (this[_shaderCallback][$_equals](value)) return;
      this[_shaderCallback] = value;
      this.markNeedsPaint();
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 1098, 12, "value != null");
      if (this[_blendMode] === value) return;
      this[_blendMode] = value;
      this.markNeedsPaint();
    }
    get alwaysNeedsCompositing() {
      return this.child != null;
    }
    paint(context, offset) {
      let t1, t0;
      if (this.child != null) {
        if (!this.needsCompositing) dart.assertFailed(null, I[1], 1111, 14, "needsCompositing");
        this.layer == null ? this.layer = new layer.ShaderMaskLayer.new() : null;
        t0 = dart.nullCheck(this.layer);
        (() => {
          t0.shader = (t1 = ui.Offset.zero['&'](this.size), this[_shaderCallback](t1));
          t0.maskRect = offset['&'](this.size);
          t0.blendMode = this[_blendMode];
          return t0;
        })();
        context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset);
      } else {
        this.layer = null;
      }
    }
  };
  (proxy_box.RenderShaderMask.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let shaderCallback = opts && 'shaderCallback' in opts ? opts.shaderCallback : null;
    let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C[7] || CT.C7;
    if (!(shaderCallback !== null)) dart.assertFailed(null, I[1], 1063, 15, "shaderCallback != null");
    if (!(blendMode !== null)) dart.assertFailed(null, I[1], 1064, 15, "blendMode != null");
    this[_shaderCallback] = shaderCallback;
    this[_blendMode] = blendMode;
    proxy_box.RenderShaderMask.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderShaderMask.prototype;
  dart.addTypeTests(proxy_box.RenderShaderMask);
  dart.addTypeCaches(proxy_box.RenderShaderMask);
  dart.setGetterSignature(proxy_box.RenderShaderMask, () => ({
    __proto__: dart.getGetters(proxy_box.RenderShaderMask.__proto__),
    layer: dart.nullable(layer.ShaderMaskLayer),
    shaderCallback: dart.fnType(ui.Shader, [ui.Rect]),
    blendMode: ui.BlendMode
  }));
  dart.setSetterSignature(proxy_box.RenderShaderMask, () => ({
    __proto__: dart.getSetters(proxy_box.RenderShaderMask.__proto__),
    shaderCallback: dart.fnType(ui.Shader, [ui.Rect]),
    blendMode: ui.BlendMode
  }));
  dart.setLibraryUri(proxy_box.RenderShaderMask, I[0]);
  dart.setFieldSignature(proxy_box.RenderShaderMask, () => ({
    __proto__: dart.getFields(proxy_box.RenderShaderMask.__proto__),
    [_shaderCallback]: dart.fieldType(dart.fnType(ui.Shader, [ui.Rect])),
    [_blendMode]: dart.fieldType(ui.BlendMode)
  }));
  var _filter = dart.privateName(proxy_box, "_filter");
  proxy_box.RenderBackdropFilter = class RenderBackdropFilter extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let filter = opts && 'filter' in opts ? opts.filter : null;
      let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C[8] || CT.C8;
      return new proxy_box.RenderBackdropFilter.new({child: child, filter: filter, blendMode: blendMode});
    }
    get layer() {
      return T$.BackdropFilterLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    get filter() {
      return this[_filter];
    }
    set filter(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 1152, 12, "value != null");
      if (this[_filter][$_equals](value)) return;
      this[_filter] = value;
      this.markNeedsPaint();
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 1166, 12, "value != null");
      if (this[_blendMode] === value) return;
      this[_blendMode] = value;
      this.markNeedsPaint();
    }
    get alwaysNeedsCompositing() {
      return this.child != null;
    }
    paint(context, offset) {
      if (this.child != null) {
        if (!this.needsCompositing) dart.assertFailed(null, I[1], 1179, 14, "needsCompositing");
        this.layer == null ? this.layer = new layer.BackdropFilterLayer.new() : null;
        dart.nullCheck(this.layer).filter = this[_filter];
        dart.nullCheck(this.layer).blendMode = this[_blendMode];
        context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset);
      } else {
        this.layer = null;
      }
    }
  };
  (proxy_box.RenderBackdropFilter.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let filter = opts && 'filter' in opts ? opts.filter : null;
    let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C[8] || CT.C8;
    if (!(filter !== null)) dart.assertFailed(null, I[1], 1135, 14, "filter != null");
    if (!(blendMode !== null)) dart.assertFailed(null, I[1], 1136, 14, "blendMode != null");
    this[_filter] = filter;
    this[_blendMode] = blendMode;
    proxy_box.RenderBackdropFilter.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderBackdropFilter.prototype;
  dart.addTypeTests(proxy_box.RenderBackdropFilter);
  dart.addTypeCaches(proxy_box.RenderBackdropFilter);
  dart.setGetterSignature(proxy_box.RenderBackdropFilter, () => ({
    __proto__: dart.getGetters(proxy_box.RenderBackdropFilter.__proto__),
    layer: dart.nullable(layer.BackdropFilterLayer),
    filter: ui.ImageFilter,
    blendMode: ui.BlendMode
  }));
  dart.setSetterSignature(proxy_box.RenderBackdropFilter, () => ({
    __proto__: dart.getSetters(proxy_box.RenderBackdropFilter.__proto__),
    filter: ui.ImageFilter,
    blendMode: ui.BlendMode
  }));
  dart.setLibraryUri(proxy_box.RenderBackdropFilter, I[0]);
  dart.setFieldSignature(proxy_box.RenderBackdropFilter, () => ({
    __proto__: dart.getFields(proxy_box.RenderBackdropFilter.__proto__),
    [_filter]: dart.fieldType(ui.ImageFilter),
    [_blendMode]: dart.fieldType(ui.BlendMode)
  }));
  var _reclip = dart.privateName(proxy_box, "CustomClipper._reclip");
  var _reclip$ = dart.privateName(proxy_box, "_reclip");
  const _is_CustomClipper_default = Symbol('_is_CustomClipper_default');
  proxy_box.CustomClipper$ = dart.generic(T => {
    class CustomClipper extends change_notifier.Listenable {
      get [_reclip$]() {
        return this[_reclip];
      }
      set [_reclip$](value) {
        super[_reclip$] = value;
      }
      addListener(listener) {
        let t0;
        t0 = this[_reclip$];
        return t0 == null ? null : t0.addListener(listener);
      }
      removeListener(listener) {
        let t0;
        t0 = this[_reclip$];
        return t0 == null ? null : t0.removeListener(listener);
      }
      getApproximateClipRect(size) {
        return ui.Offset.zero['&'](size);
      }
      toString() {
        return object$.objectRuntimeType(this, "CustomClipper");
      }
    }
    (CustomClipper.new = function(opts) {
      let reclip = opts && 'reclip' in opts ? opts.reclip : null;
      this[_reclip] = reclip;
      CustomClipper.__proto__.new.call(this);
      ;
    }).prototype = CustomClipper.prototype;
    dart.addTypeTests(CustomClipper);
    CustomClipper.prototype[_is_CustomClipper_default] = true;
    dart.addTypeCaches(CustomClipper);
    dart.setMethodSignature(CustomClipper, () => ({
      __proto__: dart.getMethods(CustomClipper.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      getApproximateClipRect: dart.fnType(ui.Rect, [ui.Size])
    }));
    dart.setLibraryUri(CustomClipper, I[0]);
    dart.setFieldSignature(CustomClipper, () => ({
      __proto__: dart.getFields(CustomClipper.__proto__),
      [_reclip$]: dart.finalFieldType(dart.nullable(change_notifier.Listenable))
    }));
    dart.defineExtensionMethods(CustomClipper, ['toString']);
    return CustomClipper;
  });
  proxy_box.CustomClipper = proxy_box.CustomClipper$();
  dart.addTypeTests(proxy_box.CustomClipper, _is_CustomClipper_default);
  var shape$ = dart.privateName(proxy_box, "ShapeBorderClipper.shape");
  var textDirection$ = dart.privateName(proxy_box, "ShapeBorderClipper.textDirection");
  proxy_box.ShapeBorderClipper = class ShapeBorderClipper extends proxy_box.CustomClipper$(ui.Path) {
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    static ['_#new#tearOff'](opts) {
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new proxy_box.ShapeBorderClipper.new({shape: shape, textDirection: textDirection});
    }
    getClip(size) {
      return this.shape.getOuterPath(ui.Offset.zero['&'](size), {textDirection: this.textDirection});
    }
    shouldReclip(oldClipper) {
      T$.CustomClipperOfPath().as(oldClipper);
      if (!oldClipper[$runtimeType]._equals(dart.wrapType(proxy_box.ShapeBorderClipper))) return true;
      let typedOldClipper = proxy_box.ShapeBorderClipper.as(oldClipper);
      return !typedOldClipper.shape[$_equals](this.shape) || typedOldClipper.textDirection != this.textDirection;
    }
  };
  (proxy_box.ShapeBorderClipper.new = function(opts) {
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this[shape$] = shape;
    this[textDirection$] = textDirection;
    if (!(shape !== null)) dart.assertFailed(null, I[1], 1286, 15, "shape != null");
    proxy_box.ShapeBorderClipper.__proto__.new.call(this);
    ;
  }).prototype = proxy_box.ShapeBorderClipper.prototype;
  dart.addTypeTests(proxy_box.ShapeBorderClipper);
  dart.addTypeCaches(proxy_box.ShapeBorderClipper);
  dart.setMethodSignature(proxy_box.ShapeBorderClipper, () => ({
    __proto__: dart.getMethods(proxy_box.ShapeBorderClipper.__proto__),
    getClip: dart.fnType(ui.Path, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(proxy_box.ShapeBorderClipper, I[0]);
  dart.setFieldSignature(proxy_box.ShapeBorderClipper, () => ({
    __proto__: dart.getFields(proxy_box.ShapeBorderClipper.__proto__),
    shape: dart.finalFieldType(borders.ShapeBorder),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection))
  }));
  var _clip = dart.privateName(proxy_box, "_clip");
  var _debugPaint = dart.privateName(proxy_box, "_debugPaint");
  var _debugText = dart.privateName(proxy_box, "_debugText");
  var _clipper = dart.privateName(proxy_box, "_clipper");
  var _clipBehavior = dart.privateName(proxy_box, "_clipBehavior");
  var _markNeedsClip = dart.privateName(proxy_box, "_markNeedsClip");
  var _defaultClip = dart.privateName(proxy_box, "_defaultClip");
  var _updateClip = dart.privateName(proxy_box, "_updateClip");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var InlineSpan_style = dart.privateName(inline_span, "InlineSpan.style");
  var TextSpan_spellOut = dart.privateName(text_span, "TextSpan.spellOut");
  var TextSpan_locale = dart.privateName(text_span, "TextSpan.locale");
  var TextSpan_semanticsLabel = dart.privateName(text_span, "TextSpan.semanticsLabel");
  var TextSpan_onExit = dart.privateName(text_span, "TextSpan.onExit");
  var TextSpan_onEnter = dart.privateName(text_span, "TextSpan.onEnter");
  var TextSpan_mouseCursor = dart.privateName(text_span, "TextSpan.mouseCursor");
  var TextSpan_recognizer = dart.privateName(text_span, "TextSpan.recognizer");
  var TextSpan_children = dart.privateName(text_span, "TextSpan.children");
  var TextSpan_text = dart.privateName(text_span, "TextSpan.text");
  const _is__RenderCustomClip_default = Symbol('_is__RenderCustomClip_default');
  proxy_box._RenderCustomClip$ = dart.generic(T => {
    var __t$CustomClipperOfT = () => (__t$CustomClipperOfT = dart.constFn(proxy_box.CustomClipper$(T)))();
    var __t$CustomClipperNOfT = () => (__t$CustomClipperNOfT = dart.constFn(dart.nullable(__t$CustomClipperOfT())))();
    class _RenderCustomClip extends proxy_box.RenderProxyBox {
      get clipper() {
        return this[_clipper];
      }
      set clipper(newClipper) {
        let t0, t0$;
        __t$CustomClipperNOfT().as(newClipper);
        if (dart.equals(this[_clipper], newClipper)) return;
        let oldClipper = this[_clipper];
        this[_clipper] = newClipper;
        if (!(newClipper != null || oldClipper != null)) dart.assertFailed(null, I[1], 1331, 12, "newClipper != null || oldClipper != null");
        if (newClipper == null || oldClipper == null || !dart.runtimeType(newClipper)._equals(dart.runtimeType(oldClipper)) || newClipper.shouldReclip(oldClipper)) {
          this[_markNeedsClip]();
        }
        if (this.attached) {
          t0 = oldClipper;
          t0 == null ? null : t0.removeListener(dart.bind(this, _markNeedsClip));
          t0$ = newClipper;
          t0$ == null ? null : t0$.addListener(dart.bind(this, _markNeedsClip));
        }
      }
      attach(owner) {
        let t0;
        object.PipelineOwner.as(owner);
        super.attach(owner);
        t0 = this[_clipper];
        t0 == null ? null : t0.addListener(dart.bind(this, _markNeedsClip));
      }
      detach() {
        let t0;
        t0 = this[_clipper];
        t0 == null ? null : t0.removeListener(dart.bind(this, _markNeedsClip));
        super.detach();
      }
      [_markNeedsClip]() {
        this[_clip] = null;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
      get clipBehavior() {
        return this[_clipBehavior];
      }
      set clipBehavior(value) {
        if (value !== this[_clipBehavior]) {
          this[_clipBehavior] = value;
          this.markNeedsPaint();
        }
      }
      performLayout() {
        let oldSize = this.hasSize ? this.size : null;
        super.performLayout();
        if (!dart.equals(oldSize, this.size)) this[_clip] = null;
      }
      [_updateClip]() {
        let t0, t0$;
        this[_clip] == null ? this[_clip] = (t0$ = (t0 = this[_clipper], t0 == null ? null : t0.getClip(this.size)), t0$ == null ? this[_defaultClip] : t0$) : null;
      }
      describeApproximatePaintClip(child) {
        let t0, t0$;
        object.RenderObject.as(child);
        t0$ = (t0 = this[_clipper], t0 == null ? null : t0.getApproximateClipRect(this.size));
        return t0$ == null ? ui.Offset.zero['&'](this.size) : t0$;
      }
      debugPaintSize(context, offset) {
        if (!dart.fn(() => {
          let t0, t0$;
          this[_debugPaint] == null ? this[_debugPaint] = (t0 = ui.Paint.new(), (() => {
            t0.shader = ui.Gradient.linear(ui.Offset.zero, C[10] || CT.C10, T$.JSArrayOfColor().of([C[11] || CT.C11, C[12] || CT.C12, C[12] || CT.C12, C[11] || CT.C11]), T$.JSArrayOfdouble().of([0.25, 0.25, 0.75, 0.75]), ui.TileMode.repeated);
            t0.strokeWidth = 2.0;
            t0.style = ui.PaintingStyle.stroke;
            return t0;
          })()) : null;
          this[_debugText] == null ? this[_debugText] = (t0$ = new text_painter.TextPainter.new({text: C[13] || CT.C13, textDirection: ui.TextDirection.rtl}), (() => {
            t0$.layout();
            return t0$;
          })()) : null;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 1394, 12, "() {\n      _debugPaint ??= Paint()\n        ..shader = ui.Gradient.linear(\n          Offset.zero,\n          const Offset(10.0, 10.0),\n          <Color>[const Color(0x00000000), const Color(0xFFFF00FF), const Color(0xFFFF00FF), const Color(0x00000000)],\n          <double>[0.25, 0.25, 0.75, 0.75],\n          TileMode.repeated,\n        )\n        ..strokeWidth = 2.0\n        ..style = PaintingStyle.stroke;\n      _debugText ??= TextPainter(\n        text: const TextSpan(\n          text: '✂',\n          style: TextStyle(\n            color: Color(0xFFFF00FF),\n              fontSize: 14.0,\n            ),\n          ),\n          textDirection: TextDirection.rtl, // doesn't matter, it's one character\n        )\n        ..layout();\n      return true;\n    }()");
      }
    }
    (_RenderCustomClip.new = function(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
      this[_clip] = null;
      this[_debugPaint] = null;
      this[_debugText] = null;
      if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 1318, 15, "clipBehavior != null");
      this[_clipper] = clipper;
      this[_clipBehavior] = clipBehavior;
      _RenderCustomClip.__proto__.new.call(this, child);
      ;
    }).prototype = _RenderCustomClip.prototype;
    dart.addTypeTests(_RenderCustomClip);
    _RenderCustomClip.prototype[_is__RenderCustomClip_default] = true;
    dart.addTypeCaches(_RenderCustomClip);
    dart.setMethodSignature(_RenderCustomClip, () => ({
      __proto__: dart.getMethods(_RenderCustomClip.__proto__),
      [_markNeedsClip]: dart.fnType(dart.void, []),
      [_updateClip]: dart.fnType(dart.void, []),
      describeApproximatePaintClip: dart.fnType(ui.Rect, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(_RenderCustomClip, () => ({
      __proto__: dart.getGetters(_RenderCustomClip.__proto__),
      clipper: dart.nullable(proxy_box.CustomClipper$(T)),
      clipBehavior: ui.Clip
    }));
    dart.setSetterSignature(_RenderCustomClip, () => ({
      __proto__: dart.getSetters(_RenderCustomClip.__proto__),
      clipper: dart.nullable(core.Object),
      clipBehavior: ui.Clip
    }));
    dart.setLibraryUri(_RenderCustomClip, I[0]);
    dart.setFieldSignature(_RenderCustomClip, () => ({
      __proto__: dart.getFields(_RenderCustomClip.__proto__),
      [_clipper]: dart.fieldType(dart.nullable(proxy_box.CustomClipper$(T))),
      [_clip]: dart.fieldType(dart.nullable(T)),
      [_clipBehavior]: dart.fieldType(ui.Clip),
      [_debugPaint]: dart.fieldType(dart.nullable(ui.Paint)),
      [_debugText]: dart.fieldType(dart.nullable(text_painter.TextPainter))
    }));
    return _RenderCustomClip;
  });
  proxy_box._RenderCustomClip = proxy_box._RenderCustomClip$();
  dart.addTypeTests(proxy_box._RenderCustomClip, _is__RenderCustomClip_default);
  proxy_box.RenderClipRect = class RenderClipRect extends proxy_box._RenderCustomClip$(ui.Rect) {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
      return new proxy_box.RenderClipRect.new({child: child, clipper: clipper, clipBehavior: clipBehavior});
    }
    get [_defaultClip]() {
      return ui.Offset.zero['&'](this.size);
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, I[1], 1448, 14, "_clip != null");
        if (!dart.nullCheck(this[_clip]).contains(position)) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (this.child != null) {
        this[_updateClip]();
        this.layer = context.pushClipRect(this.needsCompositing, offset, dart.nullCheck(this[_clip]), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipRectLayerN().as(this.layer)});
      } else {
        this.layer = null;
      }
    }
    debugPaintSize(context, offset) {
      if (!dart.fn(() => {
        if (this.child != null) {
          super.debugPaintSize(context, offset);
          context.canvas.drawRect(dart.nullCheck(this[_clip]).shift(offset), dart.nullCheck(this[_debugPaint]));
          dart.nullCheck(this[_debugText]).paint(context.canvas, offset['+'](new ui.Offset.new(dart.nullCheck(this[_clip]).width / 8.0, -dart.nullCheck(dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_debugText]).text).style).fontSize) * 1.1)));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 1474, 12, "() {\n      if (child != null) {\n        super.debugPaintSize(context, offset);\n        context.canvas.drawRect(_clip!.shift(offset), _debugPaint!);\n        _debugText!.paint(context.canvas, offset + Offset(_clip!.width / 8.0, -_debugText!.text!.style!.fontSize! * 1.1));\n      }\n      return true;\n    }()");
    }
  };
  (proxy_box.RenderClipRect.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 1437, 15, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[1], 1438, 15, "clipBehavior != Clip.none");
    proxy_box.RenderClipRect.__proto__.new.call(this, {child: child, clipper: clipper, clipBehavior: clipBehavior});
    ;
  }).prototype = proxy_box.RenderClipRect.prototype;
  dart.addTypeTests(proxy_box.RenderClipRect);
  dart.addTypeCaches(proxy_box.RenderClipRect);
  dart.setGetterSignature(proxy_box.RenderClipRect, () => ({
    __proto__: dart.getGetters(proxy_box.RenderClipRect.__proto__),
    [_defaultClip]: ui.Rect
  }));
  dart.setLibraryUri(proxy_box.RenderClipRect, I[0]);
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var _borderRadius = dart.privateName(proxy_box, "_borderRadius");
  proxy_box.RenderClipRRect = class RenderClipRRect extends proxy_box._RenderCustomClip$(ui.RRect) {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[16] || CT.C16;
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
      return new proxy_box.RenderClipRRect.new({child: child, borderRadius: borderRadius, clipper: clipper, clipBehavior: clipBehavior});
    }
    get borderRadius() {
      return this[_borderRadius];
    }
    set borderRadius(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 1520, 12, "value != null");
      if (this[_borderRadius]._equals(value)) return;
      this[_borderRadius] = value;
      this[_markNeedsClip]();
    }
    get [_defaultClip]() {
      return this[_borderRadius].toRRect(ui.Offset.zero['&'](this.size));
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, I[1], 1534, 14, "_clip != null");
        if (!dart.nullCheck(this[_clip]).contains(position)) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (this.child != null) {
        this[_updateClip]();
        this.layer = context.pushClipRRect(this.needsCompositing, offset, dart.nullCheck(this[_clip]).outerRect, dart.nullCheck(this[_clip]), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipRRectLayerN().as(this.layer)});
      } else {
        this.layer = null;
      }
    }
    debugPaintSize(context, offset) {
      if (!dart.fn(() => {
        if (this.child != null) {
          super.debugPaintSize(context, offset);
          context.canvas.drawRRect(dart.nullCheck(this[_clip]).shift(offset), dart.nullCheck(this[_debugPaint]));
          dart.nullCheck(this[_debugText]).paint(context.canvas, offset['+'](new ui.Offset.new(dart.nullCheck(this[_clip]).tlRadiusX, -dart.nullCheck(dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_debugText]).text).style).fontSize) * 1.1)));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 1559, 12, "() {\n      if (child != null) {\n        super.debugPaintSize(context, offset);\n        context.canvas.drawRRect(_clip!.shift(offset), _debugPaint!);\n        _debugText!.paint(context.canvas, offset + Offset(_clip!.tlRadiusX, -_debugText!.text!.style!.fontSize! * 1.1));\n      }\n      return true;\n    }()");
    }
  };
  (proxy_box.RenderClipRRect.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[16] || CT.C16;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 1504, 15, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[1], 1505, 15, "clipBehavior != Clip.none");
    this[_borderRadius] = borderRadius;
    proxy_box.RenderClipRRect.__proto__.new.call(this, {child: child, clipper: clipper, clipBehavior: clipBehavior});
    if (!(this[_borderRadius] !== null || clipper != null)) dart.assertFailed(null, I[1], 1508, 12, "_borderRadius != null || clipper != null");
  }).prototype = proxy_box.RenderClipRRect.prototype;
  dart.addTypeTests(proxy_box.RenderClipRRect);
  dart.addTypeCaches(proxy_box.RenderClipRRect);
  dart.setGetterSignature(proxy_box.RenderClipRRect, () => ({
    __proto__: dart.getGetters(proxy_box.RenderClipRRect.__proto__),
    borderRadius: border_radius.BorderRadius,
    [_defaultClip]: ui.RRect
  }));
  dart.setSetterSignature(proxy_box.RenderClipRRect, () => ({
    __proto__: dart.getSetters(proxy_box.RenderClipRRect.__proto__),
    borderRadius: border_radius.BorderRadius
  }));
  dart.setLibraryUri(proxy_box.RenderClipRRect, I[0]);
  dart.setFieldSignature(proxy_box.RenderClipRRect, () => ({
    __proto__: dart.getFields(proxy_box.RenderClipRRect.__proto__),
    [_borderRadius]: dart.fieldType(border_radius.BorderRadius)
  }));
  var _cachedRect = dart.privateName(proxy_box, "_cachedRect");
  var __RenderClipOval__cachedPath = dart.privateName(proxy_box, "_#RenderClipOval#_cachedPath");
  var _cachedPath = dart.privateName(proxy_box, "_cachedPath");
  var _getClipPath = dart.privateName(proxy_box, "_getClipPath");
  proxy_box.RenderClipOval = class RenderClipOval extends proxy_box._RenderCustomClip$(ui.Rect) {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
      return new proxy_box.RenderClipOval.new({child: child, clipper: clipper, clipBehavior: clipBehavior});
    }
    get [_cachedPath]() {
      let t0;
      t0 = this[__RenderClipOval__cachedPath];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_cachedPath")) : t0;
    }
    set [_cachedPath](t0) {
      this[__RenderClipOval__cachedPath] = t0;
    }
    [_getClipPath](rect) {
      let t1;
      if (!rect._equals(this[_cachedRect])) {
        this[_cachedRect] = rect;
        this[_cachedPath] = (t1 = ui.Path.new(), (() => {
          t1.addOval(dart.nullCheck(this[_cachedRect]));
          return t1;
        })());
      }
      return this[_cachedPath];
    }
    get [_defaultClip]() {
      return ui.Offset.zero['&'](this.size);
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      this[_updateClip]();
      if (!(this[_clip] != null)) dart.assertFailed(null, I[1], 1607, 12, "_clip != null");
      let center = dart.nullCheck(this[_clip]).center;
      let offset = new ui.Offset.new((position.dx - center.dx) / dart.nullCheck(this[_clip]).width, (position.dy - center.dy) / dart.nullCheck(this[_clip]).height);
      if (offset.distanceSquared > 0.25) return false;
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (this.child != null) {
        this[_updateClip]();
        this.layer = context.pushClipPath(this.needsCompositing, offset, dart.nullCheck(this[_clip]), this[_getClipPath](dart.nullCheck(this[_clip])), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipPathLayerN().as(this.layer)});
      } else {
        this.layer = null;
      }
    }
    debugPaintSize(context, offset) {
      if (!dart.fn(() => {
        if (this.child != null) {
          super.debugPaintSize(context, offset);
          context.canvas.drawPath(this[_getClipPath](dart.nullCheck(this[_clip])).shift(offset), dart.nullCheck(this[_debugPaint]));
          dart.nullCheck(this[_debugText]).paint(context.canvas, offset['+'](new ui.Offset.new((dart.nullCheck(this[_clip]).width - dart.nullCheck(this[_debugText]).width) / 2.0, -dart.nullCheck(dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_debugText]).text).style).fontSize) * 1.1)));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 1640, 12, "() {\n      if (child != null) {\n        super.debugPaintSize(context, offset);\n        context.canvas.drawPath(_getClipPath(_clip!).shift(offset), _debugPaint!);\n        _debugText!.paint(context.canvas, offset + Offset((_clip!.width - _debugText!.width) / 2.0, -_debugText!.text!.style!.fontSize! * 1.1));\n      }\n      return true;\n    }()");
    }
  };
  (proxy_box.RenderClipOval.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
    this[_cachedRect] = null;
    this[__RenderClipOval__cachedPath] = null;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 1586, 15, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[1], 1587, 15, "clipBehavior != Clip.none");
    proxy_box.RenderClipOval.__proto__.new.call(this, {child: child, clipper: clipper, clipBehavior: clipBehavior});
    ;
  }).prototype = proxy_box.RenderClipOval.prototype;
  dart.addTypeTests(proxy_box.RenderClipOval);
  dart.addTypeCaches(proxy_box.RenderClipOval);
  dart.setMethodSignature(proxy_box.RenderClipOval, () => ({
    __proto__: dart.getMethods(proxy_box.RenderClipOval.__proto__),
    [_getClipPath]: dart.fnType(ui.Path, [ui.Rect])
  }));
  dart.setGetterSignature(proxy_box.RenderClipOval, () => ({
    __proto__: dart.getGetters(proxy_box.RenderClipOval.__proto__),
    [_cachedPath]: ui.Path,
    [_defaultClip]: ui.Rect
  }));
  dart.setSetterSignature(proxy_box.RenderClipOval, () => ({
    __proto__: dart.getSetters(proxy_box.RenderClipOval.__proto__),
    [_cachedPath]: ui.Path
  }));
  dart.setLibraryUri(proxy_box.RenderClipOval, I[0]);
  dart.setFieldSignature(proxy_box.RenderClipOval, () => ({
    __proto__: dart.getFields(proxy_box.RenderClipOval.__proto__),
    [_cachedRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [__RenderClipOval__cachedPath]: dart.fieldType(dart.nullable(ui.Path))
  }));
  proxy_box.RenderClipPath = class RenderClipPath extends proxy_box._RenderCustomClip$(ui.Path) {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
      return new proxy_box.RenderClipPath.new({child: child, clipper: clipper, clipBehavior: clipBehavior});
    }
    get [_defaultClip]() {
      let t1;
      t1 = ui.Path.new();
      return (() => {
        t1.addRect(ui.Offset.zero['&'](this.size));
        return t1;
      })();
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, I[1], 1686, 14, "_clip != null");
        if (!dart.nullCheck(this[_clip]).contains(position)) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (this.child != null) {
        this[_updateClip]();
        this.layer = context.pushClipPath(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.nullCheck(this[_clip]), dart.bind(this, 'paint', super.paint), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipPathLayerN().as(this.layer)});
      } else {
        this.layer = null;
      }
    }
    debugPaintSize(context, offset) {
      if (!dart.fn(() => {
        if (this.child != null) {
          super.debugPaintSize(context, offset);
          context.canvas.drawPath(dart.nullCheck(this[_clip]).shift(offset), dart.nullCheck(this[_debugPaint]));
          dart.nullCheck(this[_debugText]).paint(context.canvas, offset);
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 1713, 12, "() {\n      if (child != null) {\n        super.debugPaintSize(context, offset);\n        context.canvas.drawPath(_clip!.shift(offset), _debugPaint!);\n        _debugText!.paint(context.canvas, offset);\n      }\n      return true;\n    }()");
    }
  };
  (proxy_box.RenderClipPath.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[9] || CT.C9;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 1675, 15, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[1], 1676, 15, "clipBehavior != Clip.none");
    proxy_box.RenderClipPath.__proto__.new.call(this, {child: child, clipper: clipper, clipBehavior: clipBehavior});
    ;
  }).prototype = proxy_box.RenderClipPath.prototype;
  dart.addTypeTests(proxy_box.RenderClipPath);
  dart.addTypeCaches(proxy_box.RenderClipPath);
  dart.setGetterSignature(proxy_box.RenderClipPath, () => ({
    __proto__: dart.getGetters(proxy_box.RenderClipPath.__proto__),
    [_defaultClip]: ui.Path
  }));
  dart.setLibraryUri(proxy_box.RenderClipPath, I[0]);
  var _elevation = dart.privateName(proxy_box, "_elevation");
  var _color = dart.privateName(proxy_box, "_color");
  var _shadowColor = dart.privateName(proxy_box, "_shadowColor");
  const _is__RenderPhysicalModelBase_default = Symbol('_is__RenderPhysicalModelBase_default');
  proxy_box._RenderPhysicalModelBase$ = dart.generic(T => {
    class _RenderPhysicalModelBase extends proxy_box._RenderCustomClip$(T) {
      get elevation() {
        return this[_elevation];
      }
      set elevation(value) {
        if (!(value !== null && value >= 0.0)) dart.assertFailed(null, I[1], 1756, 12, "value != null && value >= 0.0");
        if (this.elevation === value) return;
        let didNeedCompositing = this.alwaysNeedsCompositing;
        this[_elevation] = value;
        if (didNeedCompositing !== this.alwaysNeedsCompositing) this.markNeedsCompositingBitsUpdate();
        this.markNeedsPaint();
      }
      get shadowColor() {
        return this[_shadowColor];
      }
      set shadowColor(value) {
        if (!(value !== null)) dart.assertFailed(null, I[1], 1770, 12, "value != null");
        if (this.shadowColor._equals(value)) return;
        this[_shadowColor] = value;
        this.markNeedsPaint();
      }
      get color() {
        return this[_color];
      }
      set color(value) {
        if (!(value !== null)) dart.assertFailed(null, I[1], 1781, 12, "value != null");
        if (this.color._equals(value)) return;
        this[_color] = value;
        this.markNeedsPaint();
      }
      get alwaysNeedsCompositing() {
        return true;
      }
      describeSemanticsConfiguration(config) {
        super.describeSemanticsConfiguration(config);
        config.elevation = this.elevation;
      }
      debugFillProperties(description) {
        super.debugFillProperties(description);
        description.add(new diagnostics.DoubleProperty.new("elevation", this.elevation));
        description.add(new colors.ColorProperty.new("color", this.color));
        description.add(new colors.ColorProperty.new("shadowColor", this.color));
      }
    }
    (_RenderPhysicalModelBase.new = function(opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[18] || CT.C18;
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      if (!(elevation !== null && elevation >= 0.0)) dart.assertFailed(null, I[1], 1738, 15, "elevation != null && elevation >= 0.0");
      if (!(color !== null)) dart.assertFailed(null, I[1], 1739, 15, "color != null");
      if (!(shadowColor !== null)) dart.assertFailed(null, I[1], 1740, 15, "shadowColor != null");
      if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 1741, 15, "clipBehavior != null");
      this[_elevation] = elevation;
      this[_color] = color;
      this[_shadowColor] = shadowColor;
      _RenderPhysicalModelBase.__proto__.new.call(this, {child: child, clipBehavior: clipBehavior, clipper: clipper});
      ;
    }).prototype = _RenderPhysicalModelBase.prototype;
    dart.addTypeTests(_RenderPhysicalModelBase);
    _RenderPhysicalModelBase.prototype[_is__RenderPhysicalModelBase_default] = true;
    dart.addTypeCaches(_RenderPhysicalModelBase);
    dart.setGetterSignature(_RenderPhysicalModelBase, () => ({
      __proto__: dart.getGetters(_RenderPhysicalModelBase.__proto__),
      elevation: core.double,
      shadowColor: ui.Color,
      color: ui.Color
    }));
    dart.setSetterSignature(_RenderPhysicalModelBase, () => ({
      __proto__: dart.getSetters(_RenderPhysicalModelBase.__proto__),
      elevation: core.double,
      shadowColor: ui.Color,
      color: ui.Color
    }));
    dart.setLibraryUri(_RenderPhysicalModelBase, I[0]);
    dart.setFieldSignature(_RenderPhysicalModelBase, () => ({
      __proto__: dart.getFields(_RenderPhysicalModelBase.__proto__),
      [_elevation]: dart.fieldType(core.double),
      [_shadowColor]: dart.fieldType(ui.Color),
      [_color]: dart.fieldType(ui.Color)
    }));
    return _RenderPhysicalModelBase;
  });
  proxy_box._RenderPhysicalModelBase = proxy_box._RenderPhysicalModelBase$();
  dart.addTypeTests(proxy_box._RenderPhysicalModelBase, _is__RenderPhysicalModelBase_default);
  var _shape = dart.privateName(proxy_box, "_shape");
  proxy_box.RenderPhysicalModel = class RenderPhysicalModel extends proxy_box._RenderPhysicalModelBase$(ui.RRect) {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let shape = opts && 'shape' in opts ? opts.shape : C[19] || CT.C19;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[18] || CT.C18;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
      let color = opts && 'color' in opts ? opts.color : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : C[20] || CT.C20;
      return new proxy_box.RenderPhysicalModel.new({child: child, shape: shape, clipBehavior: clipBehavior, borderRadius: borderRadius, elevation: elevation, color: color, shadowColor: shadowColor});
    }
    get layer() {
      return T$.PhysicalModelLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    get shape() {
      return this[_shape];
    }
    set shape(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 1851, 12, "value != null");
      if (this.shape === value) return;
      this[_shape] = value;
      this[_markNeedsClip]();
    }
    get borderRadius() {
      return this[_borderRadius];
    }
    set borderRadius(value) {
      if (dart.equals(this.borderRadius, value)) return;
      this[_borderRadius] = value;
      this[_markNeedsClip]();
    }
    get [_defaultClip]() {
      let t1;
      if (!this.hasSize) dart.assertFailed(null, I[1], 1877, 12, "hasSize");
      if (!(this[_shape] !== null)) dart.assertFailed(null, I[1], 1878, 12, "_shape != null");
      switch (this[_shape]) {
        case C[19] || CT.C19:
        {
          return (t1 = this.borderRadius, t1 == null ? border_radius.BorderRadius.zero : t1).toRRect(ui.Offset.zero['&'](this.size));
        }
        case C[21] || CT.C21:
        {
          let rect = ui.Offset.zero['&'](this.size);
          return new ui.RRect.fromRectXY(rect, rect.width / 2, rect.height / 2);
        }
      }
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, I[1], 1892, 14, "_clip != null");
        if (!dart.nullCheck(this[_clip]).contains(position)) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      let t1, t1$;
      if (this.child != null) {
        this[_updateClip]();
        let offsetRRect = dart.nullCheck(this[_clip]).shift(offset);
        let offsetBounds = offsetRRect.outerRect;
        let offsetRRectAsPath = (t1 = ui.Path.new(), (() => {
          t1.addRRect(offsetRRect);
          return t1;
        })());
        let paintShadows = true;
        if (!dart.fn(() => {
          let t1;
          if (debug.debugDisableShadows) {
            if (this.elevation > 0.0) {
              context.canvas.drawRRect(offsetRRect, (t1 = ui.Paint.new(), (() => {
                t1.color = this.shadowColor;
                t1.style = ui.PaintingStyle.stroke;
                t1.strokeWidth = this.elevation * 2.0;
                return t1;
              })()));
            }
            paintShadows = false;
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 1907, 14, "() {\n        if (debugDisableShadows) {\n          if (elevation > 0.0) {\n            context.canvas.drawRRect(\n              offsetRRect,\n              Paint()\n                ..color = shadowColor\n                ..style = PaintingStyle.stroke\n                ..strokeWidth = elevation * 2.0,\n            );\n          }\n          paintShadows = false;\n        }\n        return true;\n      }()");
        this.layer == null ? this.layer = new layer.PhysicalModelLayer.new() : null;
        t1$ = dart.nullCheck(this.layer);
        (() => {
          t1$.clipPath = offsetRRectAsPath;
          t1$.clipBehavior = this.clipBehavior;
          t1$.elevation = paintShadows ? this.elevation : 0.0;
          t1$.color = this.color;
          t1$.shadowColor = this.shadowColor;
          return t1$;
        })();
        context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset, {childPaintBounds: offsetBounds});
        if (!dart.fn(() => {
          dart.nullCheck(this.layer).debugCreator = this.debugCreator;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 1930, 14, "() {\n        layer!.debugCreator = debugCreator;\n        return true;\n      }()");
      } else {
        this.layer = null;
      }
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T$.DiagnosticsPropertyOfBoxShape()).new("shape", this.shape));
      description.add(new (T$.DiagnosticsPropertyOfBorderRadius()).new("borderRadius", this.borderRadius));
    }
  };
  (proxy_box.RenderPhysicalModel.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let shape = opts && 'shape' in opts ? opts.shape : C[19] || CT.C19;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[18] || CT.C18;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
    let color = opts && 'color' in opts ? opts.color : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : C[20] || CT.C20;
    if (!(shape !== null)) dart.assertFailed(null, I[1], 1826, 15, "shape != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 1827, 15, "clipBehavior != null");
    if (!(elevation !== null && elevation >= 0.0)) dart.assertFailed(null, I[1], 1828, 15, "elevation != null && elevation >= 0.0");
    if (!(color !== null)) dart.assertFailed(null, I[1], 1829, 15, "color != null");
    if (!(shadowColor !== null)) dart.assertFailed(null, I[1], 1830, 15, "shadowColor != null");
    this[_shape] = shape;
    this[_borderRadius] = borderRadius;
    proxy_box.RenderPhysicalModel.__proto__.new.call(this, {clipBehavior: clipBehavior, child: child, elevation: elevation, color: color, shadowColor: shadowColor});
    ;
  }).prototype = proxy_box.RenderPhysicalModel.prototype;
  dart.addTypeTests(proxy_box.RenderPhysicalModel);
  dart.addTypeCaches(proxy_box.RenderPhysicalModel);
  dart.setGetterSignature(proxy_box.RenderPhysicalModel, () => ({
    __proto__: dart.getGetters(proxy_box.RenderPhysicalModel.__proto__),
    layer: dart.nullable(layer.PhysicalModelLayer),
    shape: box_border.BoxShape,
    borderRadius: dart.nullable(border_radius.BorderRadius),
    [_defaultClip]: ui.RRect
  }));
  dart.setSetterSignature(proxy_box.RenderPhysicalModel, () => ({
    __proto__: dart.getSetters(proxy_box.RenderPhysicalModel.__proto__),
    shape: box_border.BoxShape,
    borderRadius: dart.nullable(border_radius.BorderRadius)
  }));
  dart.setLibraryUri(proxy_box.RenderPhysicalModel, I[0]);
  dart.setFieldSignature(proxy_box.RenderPhysicalModel, () => ({
    __proto__: dart.getFields(proxy_box.RenderPhysicalModel.__proto__),
    [_shape]: dart.fieldType(box_border.BoxShape),
    [_borderRadius]: dart.fieldType(dart.nullable(border_radius.BorderRadius))
  }));
  proxy_box.RenderPhysicalShape = class RenderPhysicalShape extends proxy_box._RenderPhysicalModelBase$(ui.Path) {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let clipper = opts && 'clipper' in opts ? opts.clipper : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[18] || CT.C18;
      let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
      let color = opts && 'color' in opts ? opts.color : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : C[20] || CT.C20;
      return new proxy_box.RenderPhysicalShape.new({child: child, clipper: clipper, clipBehavior: clipBehavior, elevation: elevation, color: color, shadowColor: shadowColor});
    }
    get layer() {
      return T$.PhysicalModelLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    get [_defaultClip]() {
      let t1;
      t1 = ui.Path.new();
      return (() => {
        t1.addRect(ui.Offset.zero['&'](this.size));
        return t1;
      })();
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this[_clipper] != null) {
        this[_updateClip]();
        if (!(this[_clip] != null)) dart.assertFailed(null, I[1], 1992, 14, "_clip != null");
        if (!dart.nullCheck(this[_clip]).contains(position)) return false;
      }
      return super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      let t1;
      if (this.child != null) {
        this[_updateClip]();
        let offsetBounds = offset['&'](this.size);
        let offsetPath = dart.nullCheck(this[_clip]).shift(offset);
        let paintShadows = true;
        if (!dart.fn(() => {
          let t1;
          if (debug.debugDisableShadows) {
            if (this.elevation > 0.0) {
              context.canvas.drawPath(offsetPath, (t1 = ui.Paint.new(), (() => {
                t1.color = this.shadowColor;
                t1.style = ui.PaintingStyle.stroke;
                t1.strokeWidth = this.elevation * 2.0;
                return t1;
              })()));
            }
            paintShadows = false;
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 2006, 14, "() {\n        if (debugDisableShadows) {\n          if (elevation > 0.0) {\n            context.canvas.drawPath(\n              offsetPath,\n              Paint()\n                ..color = shadowColor\n                ..style = PaintingStyle.stroke\n                ..strokeWidth = elevation * 2.0,\n            );\n          }\n          paintShadows = false;\n        }\n        return true;\n      }()");
        this.layer == null ? this.layer = new layer.PhysicalModelLayer.new() : null;
        t1 = dart.nullCheck(this.layer);
        (() => {
          t1.clipPath = offsetPath;
          t1.clipBehavior = this.clipBehavior;
          t1.elevation = paintShadows ? this.elevation : 0.0;
          t1.color = this.color;
          t1.shadowColor = this.shadowColor;
          return t1;
        })();
        context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset, {childPaintBounds: offsetBounds});
        if (!dart.fn(() => {
          dart.nullCheck(this.layer).debugCreator = this.debugCreator;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 2029, 14, "() {\n        layer!.debugCreator = debugCreator;\n        return true;\n      }()");
      } else {
        this.layer = null;
      }
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T$.DiagnosticsPropertyOfCustomClipperOfPath()).new("clipper", this.clipper));
    }
  };
  (proxy_box.RenderPhysicalShape.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let clipper = opts && 'clipper' in opts ? opts.clipper : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[18] || CT.C18;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 0;
    let color = opts && 'color' in opts ? opts.color : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : C[20] || CT.C20;
    if (!(clipper !== null)) dart.assertFailed(null, I[1], 1969, 15, "clipper != null");
    if (!(elevation !== null && elevation >= 0.0)) dart.assertFailed(null, I[1], 1970, 15, "elevation != null && elevation >= 0.0");
    if (!(color !== null)) dart.assertFailed(null, I[1], 1971, 15, "color != null");
    if (!(shadowColor !== null)) dart.assertFailed(null, I[1], 1972, 15, "shadowColor != null");
    proxy_box.RenderPhysicalShape.__proto__.new.call(this, {child: child, elevation: elevation, color: color, shadowColor: shadowColor, clipper: clipper, clipBehavior: clipBehavior});
    ;
  }).prototype = proxy_box.RenderPhysicalShape.prototype;
  dart.addTypeTests(proxy_box.RenderPhysicalShape);
  dart.addTypeCaches(proxy_box.RenderPhysicalShape);
  dart.setGetterSignature(proxy_box.RenderPhysicalShape, () => ({
    __proto__: dart.getGetters(proxy_box.RenderPhysicalShape.__proto__),
    layer: dart.nullable(layer.PhysicalModelLayer),
    [_defaultClip]: ui.Path
  }));
  dart.setLibraryUri(proxy_box.RenderPhysicalShape, I[0]);
  proxy_box.DecorationPosition = class DecorationPosition extends core._Enum {
    toString() {
      return "DecorationPosition." + this[_name];
    }
  };
  (proxy_box.DecorationPosition.new = function(index, name) {
    proxy_box.DecorationPosition.__proto__.new.call(this, index, name);
    ;
  }).prototype = proxy_box.DecorationPosition.prototype;
  dart.addTypeTests(proxy_box.DecorationPosition);
  dart.addTypeCaches(proxy_box.DecorationPosition);
  dart.setLibraryUri(proxy_box.DecorationPosition, I[0]);
  dart.setStaticFieldSignature(proxy_box.DecorationPosition, () => ['values', 'background', 'foreground']);
  dart.defineExtensionMethods(proxy_box.DecorationPosition, ['toString']);
  proxy_box.DecorationPosition.background = C[22] || CT.C22;
  proxy_box.DecorationPosition.foreground = C[23] || CT.C23;
  proxy_box.DecorationPosition.values = C[24] || CT.C24;
  var ImageConfiguration_platform = dart.privateName(image_provider, "ImageConfiguration.platform");
  var ImageConfiguration_size = dart.privateName(image_provider, "ImageConfiguration.size");
  var ImageConfiguration_textDirection = dart.privateName(image_provider, "ImageConfiguration.textDirection");
  var ImageConfiguration_locale = dart.privateName(image_provider, "ImageConfiguration.locale");
  var ImageConfiguration_devicePixelRatio = dart.privateName(image_provider, "ImageConfiguration.devicePixelRatio");
  var ImageConfiguration_bundle = dart.privateName(image_provider, "ImageConfiguration.bundle");
  var _painter = dart.privateName(proxy_box, "_painter");
  var _decoration = dart.privateName(proxy_box, "_decoration");
  var _position = dart.privateName(proxy_box, "_position");
  var _configuration = dart.privateName(proxy_box, "_configuration");
  proxy_box.RenderDecoratedBox = class RenderDecoratedBox extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let position = opts && 'position' in opts ? opts.position : C[22] || CT.C22;
      let configuration = opts && 'configuration' in opts ? opts.configuration : C[25] || CT.C25;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderDecoratedBox.new({decoration: decoration, position: position, configuration: configuration, child: child});
    }
    get decoration() {
      return this[_decoration];
    }
    set decoration(value) {
      let t1;
      if (!(value !== null)) dart.assertFailed(null, I[1], 2084, 12, "value != null");
      if (value[$_equals](this[_decoration])) return;
      t1 = this[_painter];
      t1 == null ? null : t1.dispose();
      this[_painter] = null;
      this[_decoration] = value;
      this.markNeedsPaint();
    }
    get position() {
      return this[_position];
    }
    set position(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 2097, 12, "value != null");
      if (value === this[_position]) return;
      this[_position] = value;
      this.markNeedsPaint();
    }
    get configuration() {
      return this[_configuration];
    }
    set configuration(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 2113, 12, "value != null");
      if (value._equals(this[_configuration])) return;
      this[_configuration] = value;
      this.markNeedsPaint();
    }
    detach() {
      let t1;
      t1 = this[_painter];
      t1 == null ? null : t1.dispose();
      this[_painter] = null;
      super.detach();
      this.markNeedsPaint();
    }
    hitTestSelf(position) {
      return this[_decoration].hitTest(this.size, position, {textDirection: this.configuration.textDirection});
    }
    paint(context, offset) {
      if (!(this.size.width !== null)) dart.assertFailed(null, I[1], 2140, 12, "size.width != null");
      if (!(this.size.height !== null)) dart.assertFailed(null, I[1], 2141, 12, "size.height != null");
      this[_painter] == null ? this[_painter] = this[_decoration].createBoxPainter(dart.bind(this, 'markNeedsPaint')) : null;
      let filledConfiguration = this.configuration.copyWith({size: this.size});
      if (this.position === proxy_box.DecorationPosition.background) {
        let debugSaveCount = null;
        if (!dart.fn(() => {
          debugSaveCount = context.canvas.getSaveCount();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 2146, 14, "() {\n        debugSaveCount = context.canvas.getSaveCount();\n        return true;\n      }()");
        dart.nullCheck(this[_painter]).paint(context.canvas, offset, filledConfiguration);
        if (!dart.fn(() => {
          if (debugSaveCount !== context.canvas.getSaveCount()) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[_decoration][$runtimeType]) + " painter had mismatching save and restore calls."), new assertions.ErrorDescription.new("Before painting the decoration, the canvas save count was " + dart.str(debugSaveCount) + ". " + "After painting it, the canvas save count was " + dart.str(context.canvas.getSaveCount()) + ". " + "Every call to save() or saveLayer() must be matched by a call to restore()."), new (T$.DiagnosticsPropertyOfDecoration()).new("The decoration was", this.decoration, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (T$.DiagnosticsPropertyOfBoxPainter()).new("The painter was", this[_painter], {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 2151, 14, "() {\n        if (debugSaveCount != context.canvas.getSaveCount()) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('${_decoration.runtimeType} painter had mismatching save and restore calls.'),\n            ErrorDescription(\n              'Before painting the decoration, the canvas save count was $debugSaveCount. '\n              'After painting it, the canvas save count was ${context.canvas.getSaveCount()}. '\n              'Every call to save() or saveLayer() must be matched by a call to restore().',\n            ),\n            DiagnosticsProperty<Decoration>('The decoration was', decoration, style: DiagnosticsTreeStyle.errorProperty),\n            DiagnosticsProperty<BoxPainter>('The painter was', _painter, style: DiagnosticsTreeStyle.errorProperty),\n          ]);\n        }\n        return true;\n      }()");
        if (this.decoration.isComplex) context.setIsComplexHint();
      }
      super.paint(context, offset);
      if (this.position === proxy_box.DecorationPosition.foreground) {
        dart.nullCheck(this[_painter]).paint(context.canvas, offset, filledConfiguration);
        if (this.decoration.isComplex) context.setIsComplexHint();
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(this[_decoration].toDiagnosticsNode({name: "decoration"}));
      properties.add(new (T$.DiagnosticsPropertyOfImageConfiguration()).new("configuration", this.configuration));
    }
  };
  (proxy_box.RenderDecoratedBox.new = function(opts) {
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let position = opts && 'position' in opts ? opts.position : C[22] || CT.C22;
    let configuration = opts && 'configuration' in opts ? opts.configuration : C[25] || CT.C25;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_painter] = null;
    if (!(decoration !== null)) dart.assertFailed(null, I[1], 2068, 15, "decoration != null");
    if (!(position !== null)) dart.assertFailed(null, I[1], 2069, 15, "position != null");
    if (!(configuration !== null)) dart.assertFailed(null, I[1], 2070, 15, "configuration != null");
    this[_decoration] = decoration;
    this[_position] = position;
    this[_configuration] = configuration;
    proxy_box.RenderDecoratedBox.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderDecoratedBox.prototype;
  dart.addTypeTests(proxy_box.RenderDecoratedBox);
  dart.addTypeCaches(proxy_box.RenderDecoratedBox);
  dart.setGetterSignature(proxy_box.RenderDecoratedBox, () => ({
    __proto__: dart.getGetters(proxy_box.RenderDecoratedBox.__proto__),
    decoration: decoration.Decoration,
    position: proxy_box.DecorationPosition,
    configuration: image_provider.ImageConfiguration
  }));
  dart.setSetterSignature(proxy_box.RenderDecoratedBox, () => ({
    __proto__: dart.getSetters(proxy_box.RenderDecoratedBox.__proto__),
    decoration: decoration.Decoration,
    position: proxy_box.DecorationPosition,
    configuration: image_provider.ImageConfiguration
  }));
  dart.setLibraryUri(proxy_box.RenderDecoratedBox, I[0]);
  dart.setFieldSignature(proxy_box.RenderDecoratedBox, () => ({
    __proto__: dart.getFields(proxy_box.RenderDecoratedBox.__proto__),
    [_painter]: dart.fieldType(dart.nullable(decoration.BoxPainter)),
    [_decoration]: dart.fieldType(decoration.Decoration),
    [_position]: dart.fieldType(proxy_box.DecorationPosition),
    [_configuration]: dart.fieldType(image_provider.ImageConfiguration)
  }));
  var transformHitTests$ = dart.privateName(proxy_box, "RenderTransform.transformHitTests");
  var _origin = dart.privateName(proxy_box, "_origin");
  var _alignment = dart.privateName(proxy_box, "_alignment");
  var _textDirection = dart.privateName(proxy_box, "_textDirection");
  var _transform = dart.privateName(proxy_box, "_transform");
  var _filterQuality = dart.privateName(proxy_box, "_filterQuality");
  var _effectiveTransform = dart.privateName(proxy_box, "_effectiveTransform");
  proxy_box.RenderTransform = class RenderTransform extends proxy_box.RenderProxyBox {
    get transformHitTests() {
      return this[transformHitTests$];
    }
    set transformHitTests(value) {
      this[transformHitTests$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let origin = opts && 'origin' in opts ? opts.origin : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let transformHitTests = opts && 'transformHitTests' in opts ? opts.transformHitTests : true;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderTransform.new({transform: transform, origin: origin, alignment: alignment, textDirection: textDirection, transformHitTests: transformHitTests, filterQuality: filterQuality, child: child});
    }
    get origin() {
      return this[_origin];
    }
    set origin(value) {
      if (dart.equals(this[_origin], value)) return;
      this[_origin] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (dart.equals(this[_alignment], value)) return;
      this[_alignment] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) return;
      this[_textDirection] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get alwaysNeedsCompositing() {
      return this.child != null && this[_filterQuality] != null;
    }
    set transform(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 2276, 12, "value != null");
      if (dart.equals(this[_transform], value)) return;
      this[_transform] = vector_math_64.Matrix4.copy(value);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get filterQuality() {
      return this[_filterQuality];
    }
    set filterQuality(value) {
      if (this[_filterQuality] == value) return;
      let didNeedCompositing = this.alwaysNeedsCompositing;
      this[_filterQuality] = value;
      if (didNeedCompositing !== this.alwaysNeedsCompositing) this.markNeedsCompositingBitsUpdate();
      this.markNeedsPaint();
    }
    setIdentity() {
      dart.nullCheck(this[_transform]).setIdentity();
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    rotateX(radians) {
      dart.nullCheck(this[_transform]).rotateX(radians);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    rotateY(radians) {
      dart.nullCheck(this[_transform]).rotateY(radians);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    rotateZ(radians) {
      dart.nullCheck(this[_transform]).rotateZ(radians);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    translate(x, y = 0, z = 0) {
      dart.nullCheck(this[_transform]).translate(x, y, z);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    scale(x, y = null, z = null) {
      dart.nullCheck(this[_transform]).scale(x, y, z);
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get [_effectiveTransform]() {
      let t1;
      let resolvedAlignment = (t1 = this.alignment, t1 == null ? null : t1.resolve(this.textDirection));
      if (this[_origin] == null && resolvedAlignment == null) return this[_transform];
      let result = vector_math_64.Matrix4.identity();
      if (this[_origin] != null) result.translate(dart.nullCheck(this[_origin]).dx, dart.nullCheck(this[_origin]).dy);
      let translation = null;
      if (resolvedAlignment != null) {
        translation = resolvedAlignment.alongSize(this.size);
        result.translate(translation.dx, translation.dy);
      }
      result.multiply(dart.nullCheck(this[_transform]));
      if (resolvedAlignment != null) result.translate(-dart.nullCheck(translation).dx, -translation.dy);
      if (this[_origin] != null) result.translate(-dart.nullCheck(this[_origin]).dx, -dart.nullCheck(this[_origin]).dy);
      return result;
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.hitTestChildren(result, {position: position});
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (!(!this.transformHitTests || this[_effectiveTransform] != null)) dart.assertFailed(null, I[1], 2372, 12, "!transformHitTests || _effectiveTransform != null");
      return result.addWithPaintTransform({transform: this.transformHitTests ? this[_effectiveTransform] : null, position: position, hitTest: dart.fn((result, position) => super.hitTestChildren(result, {position: position}), T$.BoxHitTestResultAndOffsetTobool())});
    }
    paint(context, offset) {
      let t1;
      if (this.child != null) {
        let transform = dart.nullCheck(this[_effectiveTransform]);
        if (this.filterQuality == null) {
          let childOffset = matrix_utils.MatrixUtils.getAsTranslation(transform);
          if (childOffset == null) {
            this.layer = context.pushTransform(this.needsCompositing, offset, transform, dart.bind(this, 'paint', super.paint), {oldLayer: layer.TransformLayer.is(this.layer) ? T$.TransformLayerN().as(this.layer) : null});
          } else {
            super.paint(context, offset['+'](childOffset));
            this.layer = null;
          }
        } else {
          let effectiveTransform = (t1 = vector_math_64.Matrix4.translationValues(offset.dx, offset.dy, 0.0), (() => {
            t1.multiply(transform);
            t1.translate(-offset.dx, -offset.dy);
            return t1;
          })());
          let filter = ui.ImageFilter.matrix(effectiveTransform.storage, {filterQuality: dart.nullCheck(this.filterQuality)});
          if (layer.ImageFilterLayer.is(this.layer)) {
            let filterLayer = layer.ImageFilterLayer.as(dart.nullCheck(this.layer));
            filterLayer.imageFilter = filter;
          } else {
            this.layer = new layer.ImageFilterLayer.new({imageFilter: filter});
          }
          context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), offset);
        }
      }
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      transform.multiply(dart.nullCheck(this[_effectiveTransform]));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new matrix_utils.TransformProperty.new("transform matrix", this[_transform]));
      properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("origin", this.origin));
      properties.add(new (T$.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
      properties.add(new (T$.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("transformHitTests", this.transformHitTests));
    }
  };
  (proxy_box.RenderTransform.new = function(opts) {
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let origin = opts && 'origin' in opts ? opts.origin : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let transformHitTests = opts && 'transformHitTests' in opts ? opts.transformHitTests : true;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_origin] = null;
    this[_alignment] = null;
    this[_textDirection] = null;
    this[_transform] = null;
    this[_filterQuality] = null;
    this[transformHitTests$] = transformHitTests;
    if (!(transform !== null)) dart.assertFailed(null, I[1], 2198, 15, "transform != null");
    proxy_box.RenderTransform.__proto__.new.call(this, child);
    this.transform = transform;
    this.alignment = alignment;
    this.textDirection = textDirection;
    this.filterQuality = filterQuality;
    this.origin = origin;
  }).prototype = proxy_box.RenderTransform.prototype;
  dart.addTypeTests(proxy_box.RenderTransform);
  dart.addTypeCaches(proxy_box.RenderTransform);
  dart.setMethodSignature(proxy_box.RenderTransform, () => ({
    __proto__: dart.getMethods(proxy_box.RenderTransform.__proto__),
    setIdentity: dart.fnType(dart.void, []),
    rotateX: dart.fnType(dart.void, [core.double]),
    rotateY: dart.fnType(dart.void, [core.double]),
    rotateZ: dart.fnType(dart.void, [core.double]),
    translate: dart.fnType(dart.void, [core.double], [core.double, core.double]),
    scale: dart.fnType(dart.void, [core.double], [dart.nullable(core.double), dart.nullable(core.double)])
  }));
  dart.setGetterSignature(proxy_box.RenderTransform, () => ({
    __proto__: dart.getGetters(proxy_box.RenderTransform.__proto__),
    origin: dart.nullable(ui.Offset),
    alignment: dart.nullable(alignment.AlignmentGeometry),
    textDirection: dart.nullable(ui.TextDirection),
    filterQuality: dart.nullable(ui.FilterQuality),
    [_effectiveTransform]: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setSetterSignature(proxy_box.RenderTransform, () => ({
    __proto__: dart.getSetters(proxy_box.RenderTransform.__proto__),
    origin: dart.nullable(ui.Offset),
    alignment: dart.nullable(alignment.AlignmentGeometry),
    textDirection: dart.nullable(ui.TextDirection),
    transform: vector_math_64.Matrix4,
    filterQuality: dart.nullable(ui.FilterQuality)
  }));
  dart.setLibraryUri(proxy_box.RenderTransform, I[0]);
  dart.setFieldSignature(proxy_box.RenderTransform, () => ({
    __proto__: dart.getFields(proxy_box.RenderTransform.__proto__),
    [_origin]: dart.fieldType(dart.nullable(ui.Offset)),
    [_alignment]: dart.fieldType(dart.nullable(alignment.AlignmentGeometry)),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    transformHitTests: dart.fieldType(core.bool),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_filterQuality]: dart.fieldType(dart.nullable(ui.FilterQuality))
  }));
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var _resolvedAlignment = dart.privateName(proxy_box, "_resolvedAlignment");
  var _hasVisualOverflow = dart.privateName(proxy_box, "_hasVisualOverflow");
  var _fit = dart.privateName(proxy_box, "_fit");
  var _resolve = dart.privateName(proxy_box, "_resolve");
  var _markNeedResolution = dart.privateName(proxy_box, "_markNeedResolution");
  var _fitAffectsLayout = dart.privateName(proxy_box, "_fitAffectsLayout");
  var _clearPaintData = dart.privateName(proxy_box, "_clearPaintData");
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var _updatePaintData = dart.privateName(proxy_box, "_updatePaintData");
  var _paintChildWithTransform = dart.privateName(proxy_box, "_paintChildWithTransform");
  proxy_box.RenderFittedBox = class RenderFittedBox extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let fit = opts && 'fit' in opts ? opts.fit : C[26] || CT.C26;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[27] || CT.C27;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[18] || CT.C18;
      return new proxy_box.RenderFittedBox.new({fit: fit, alignment: alignment, textDirection: textDirection, child: child, clipBehavior: clipBehavior});
    }
    [_resolve]() {
      if (this[_resolvedAlignment] != null) return;
      this[_resolvedAlignment] = this.alignment.resolve(this.textDirection);
    }
    [_markNeedResolution]() {
      this[_resolvedAlignment] = null;
      this.markNeedsPaint();
    }
    [_fitAffectsLayout](fit) {
      switch (fit) {
        case C[28] || CT.C28:
        {
          return true;
        }
        case C[26] || CT.C26:
        case C[29] || CT.C29:
        case C[30] || CT.C30:
        case C[31] || CT.C31:
        case C[32] || CT.C32:
        case C[33] || CT.C33:
        {
          return false;
        }
      }
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 2485, 12, "value != null");
      if (this[_fit] === value) return;
      let lastFit = this[_fit];
      this[_fit] = value;
      if (this[_fitAffectsLayout](lastFit) || this[_fitAffectsLayout](value)) {
        this.markNeedsLayout();
      } else {
        this[_clearPaintData]();
        this.markNeedsPaint();
      }
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 2509, 12, "value != null");
      if (this[_alignment]._equals(value)) return;
      this[_alignment] = value;
      this[_clearPaintData]();
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) return;
      this[_textDirection] = value;
      this[_clearPaintData]();
      this[_markNeedResolution]();
    }
    computeDryLayout(constraints) {
      if (this.child != null) {
        let childSize = dart.nullCheck(this.child).getDryLayout(C[34] || CT.C34);
        let invalidChildSize = false;
        if (!dart.fn(() => {
          if (object.RenderObject.debugCheckingIntrinsics && childSize.width * childSize.height === 0.0) {
            invalidChildSize = true;
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 2543, 14, "() {\n        if (RenderObject.debugCheckingIntrinsics && childSize.width * childSize.height == 0.0) {\n          invalidChildSize = true;\n        }\n        return true;\n      }()");
        if (invalidChildSize) {
          if (!this.debugCannotComputeDryLayout({reason: "Child provided invalid size of " + dart.str(childSize) + "."})) dart.assertFailed(null, I[1], 2550, 16, "debugCannotComputeDryLayout(\n          reason: 'Child provided invalid size of $childSize.',\n        )");
          return ui.Size.zero;
        }
        switch (this.fit) {
          case C[28] || CT.C28:
          {
            let sizeConstraints = constraints.loosen();
            let unconstrainedSize = sizeConstraints.constrainSizeAndAttemptToPreserveAspectRatio(childSize);
            return constraints.constrain(unconstrainedSize);
          }
          case C[26] || CT.C26:
          case C[29] || CT.C29:
          case C[30] || CT.C30:
          case C[31] || CT.C31:
          case C[32] || CT.C32:
          case C[33] || CT.C33:
          {
            return constraints.constrainSizeAndAttemptToPreserveAspectRatio(childSize);
          }
        }
      } else {
        return constraints.smallest;
      }
    }
    performLayout() {
      if (this.child != null) {
        dart.nullCheck(this.child).layout(C[34] || CT.C34, {parentUsesSize: true});
        switch (this.fit) {
          case C[28] || CT.C28:
          {
            let sizeConstraints = this.constraints.loosen();
            let unconstrainedSize = sizeConstraints.constrainSizeAndAttemptToPreserveAspectRatio(dart.nullCheck(this.child).size);
            this.size = this.constraints.constrain(unconstrainedSize);
            break;
          }
          case C[26] || CT.C26:
          case C[29] || CT.C29:
          case C[30] || CT.C30:
          case C[31] || CT.C31:
          case C[32] || CT.C32:
          case C[33] || CT.C33:
          {
            this.size = this.constraints.constrainSizeAndAttemptToPreserveAspectRatio(dart.nullCheck(this.child).size);
            break;
          }
        }
        this[_clearPaintData]();
      } else {
        this.size = this.constraints.smallest;
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 2608, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
      }
    }
    [_clearPaintData]() {
      this[_hasVisualOverflow] = null;
      this[_transform] = null;
    }
    [_updatePaintData]() {
      let t1;
      if (this[_transform] != null) return;
      if (this.child == null) {
        this[_hasVisualOverflow] = false;
        this[_transform] = vector_math_64.Matrix4.identity();
      } else {
        this[_resolve]();
        let childSize = dart.nullCheck(this.child).size;
        let sizes = box_fit.applyBoxFit(this[_fit], childSize, this.size);
        let scaleX = sizes.destination.width / sizes.source.width;
        let scaleY = sizes.destination.height / sizes.source.height;
        let sourceRect = dart.nullCheck(this[_resolvedAlignment]).inscribe(sizes.source, ui.Offset.zero['&'](childSize));
        let destinationRect = dart.nullCheck(this[_resolvedAlignment]).inscribe(sizes.destination, ui.Offset.zero['&'](this.size));
        this[_hasVisualOverflow] = sourceRect.width < childSize.width || sourceRect.height < childSize.height;
        if (!(scaleX[$isFinite] && scaleY[$isFinite])) dart.assertFailed(null, I[1], 2637, 14, "scaleX.isFinite && scaleY.isFinite");
        this[_transform] = (t1 = vector_math_64.Matrix4.translationValues(destinationRect.left, destinationRect.top, 0.0), (() => {
          t1.scale(scaleX, scaleY, 1.0);
          t1.translate(-sourceRect.left, -sourceRect.top);
          return t1;
        })());
        if (!dart.nullCheck(this[_transform]).storage[$every](dart.fn(value => value[$isFinite], T$.doubleTobool()))) dart.assertFailed(null, I[1], 2641, 14, "_transform!.storage.every((double value) => value.isFinite)");
      }
    }
    [_paintChildWithTransform](context, offset) {
      let childOffset = matrix_utils.MatrixUtils.getAsTranslation(dart.nullCheck(this[_transform]));
      if (childOffset == null)
        return context.pushTransform(this.needsCompositing, offset, dart.nullCheck(this[_transform]), dart.bind(this, 'paint', super.paint), {oldLayer: layer.TransformLayer.is(this.layer) ? layer.TransformLayer.as(dart.nullCheck(this.layer)) : null});
      else
        super.paint(context, offset['+'](childOffset));
      return null;
    }
    paint(context, offset) {
      if (this.child == null || this.size.isEmpty || dart.nullCheck(this.child).size.isEmpty) return;
      this[_updatePaintData]();
      if (!(this.child != null)) dart.assertFailed(null, I[1], 2665, 12, "child != null");
      if (dart.nullCheck(this[_hasVisualOverflow]) && this.clipBehavior !== ui.Clip.none) {
        this.layer = context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, _paintChildWithTransform), {oldLayer: layer.ClipRectLayer.is(this.layer) ? layer.ClipRectLayer.as(dart.nullCheck(this.layer)) : null, clipBehavior: this.clipBehavior});
      } else {
        this.layer = this[_paintChildWithTransform](context, offset);
      }
    }
    hitTestChildren(result, opts) {
      let t1;
      let position = opts && 'position' in opts ? opts.position : null;
      if (this.size.isEmpty || (t1 = this.child, t1 == null ? null : t1.size.isEmpty) === true) return false;
      this[_updatePaintData]();
      return result.addWithPaintTransform({transform: this[_transform], position: position, hitTest: dart.fn((result, position) => super.hitTestChildren(result, {position: position}), T$.BoxHitTestResultAndOffsetTobool())});
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (this.size.isEmpty || child.size.isEmpty) {
        transform.setZero();
      } else {
        this[_updatePaintData]();
        transform.multiply(dart.nullCheck(this[_transform]));
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.EnumPropertyOfBoxFit()).new("fit", this.fit));
      properties.add(new (T$.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
      properties.add(new (T$.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
    }
  };
  (proxy_box.RenderFittedBox.new = function(opts) {
    let fit = opts && 'fit' in opts ? opts.fit : C[26] || CT.C26;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[27] || CT.C27;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[18] || CT.C18;
    this[_resolvedAlignment] = null;
    this[_hasVisualOverflow] = null;
    this[_transform] = null;
    this[_clipBehavior] = ui.Clip.none;
    if (!(fit !== null)) dart.assertFailed(null, I[1], 2445, 15, "fit != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[1], 2446, 15, "alignment != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 2447, 15, "clipBehavior != null");
    this[_fit] = fit;
    this[_alignment] = alignment;
    this[_textDirection] = textDirection;
    this[_clipBehavior] = clipBehavior;
    proxy_box.RenderFittedBox.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderFittedBox.prototype;
  dart.addTypeTests(proxy_box.RenderFittedBox);
  dart.addTypeCaches(proxy_box.RenderFittedBox);
  dart.setMethodSignature(proxy_box.RenderFittedBox, () => ({
    __proto__: dart.getMethods(proxy_box.RenderFittedBox.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, []),
    [_fitAffectsLayout]: dart.fnType(core.bool, [box_fit.BoxFit]),
    [_clearPaintData]: dart.fnType(dart.void, []),
    [_updatePaintData]: dart.fnType(dart.void, []),
    [_paintChildWithTransform]: dart.fnType(dart.nullable(layer.TransformLayer), [object.PaintingContext, ui.Offset])
  }));
  dart.setGetterSignature(proxy_box.RenderFittedBox, () => ({
    __proto__: dart.getGetters(proxy_box.RenderFittedBox.__proto__),
    fit: box_fit.BoxFit,
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(proxy_box.RenderFittedBox, () => ({
    __proto__: dart.getSetters(proxy_box.RenderFittedBox.__proto__),
    fit: box_fit.BoxFit,
    alignment: alignment.AlignmentGeometry,
    textDirection: dart.nullable(ui.TextDirection),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(proxy_box.RenderFittedBox, I[0]);
  dart.setFieldSignature(proxy_box.RenderFittedBox, () => ({
    __proto__: dart.getFields(proxy_box.RenderFittedBox.__proto__),
    [_resolvedAlignment]: dart.fieldType(dart.nullable(alignment.Alignment)),
    [_fit]: dart.fieldType(box_fit.BoxFit),
    [_alignment]: dart.fieldType(alignment.AlignmentGeometry),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_hasVisualOverflow]: dart.fieldType(dart.nullable(core.bool)),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var transformHitTests$0 = dart.privateName(proxy_box, "RenderFractionalTranslation.transformHitTests");
  var _translation = dart.privateName(proxy_box, "_translation");
  proxy_box.RenderFractionalTranslation = class RenderFractionalTranslation extends proxy_box.RenderProxyBox {
    get transformHitTests() {
      return this[transformHitTests$0];
    }
    set transformHitTests(value) {
      this[transformHitTests$0] = value;
    }
    static ['_#new#tearOff'](opts) {
      let translation = opts && 'translation' in opts ? opts.translation : null;
      let transformHitTests = opts && 'transformHitTests' in opts ? opts.transformHitTests : true;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderFractionalTranslation.new({translation: translation, transformHitTests: transformHitTests, child: child});
    }
    get translation() {
      return this[_translation];
    }
    set translation(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 2741, 12, "value != null");
      if (this[_translation]._equals(value)) return;
      this[_translation] = value;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.hitTestChildren(result, {position: position});
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 2768, 12, "!debugNeedsLayout");
      return result.addWithPaintOffset({offset: this.transformHitTests ? new ui.Offset.new(this.translation.dx * this.size.width, this.translation.dy * this.size.height) : null, position: position, hitTest: dart.fn((result, position) => super.hitTestChildren(result, {position: position}), T$.BoxHitTestResultAndOffsetTobool())});
    }
    paint(context, offset) {
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[1], 2782, 12, "!debugNeedsLayout");
      if (this.child != null) {
        super.paint(context, new ui.Offset.new(offset.dx + this.translation.dx * this.size.width, offset.dy + this.translation.dy * this.size.height));
      }
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      transform.translate(this.translation.dx * this.size.width, this.translation.dy * this.size.height);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("translation", this.translation));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("transformHitTests", this.transformHitTests));
    }
  };
  (proxy_box.RenderFractionalTranslation.new = function(opts) {
    let translation = opts && 'translation' in opts ? opts.translation : null;
    let transformHitTests = opts && 'transformHitTests' in opts ? opts.transformHitTests : true;
    let child = opts && 'child' in opts ? opts.child : null;
    this[transformHitTests$0] = transformHitTests;
    if (!(translation !== null)) dart.assertFailed(null, I[1], 2730, 15, "translation != null");
    this[_translation] = translation;
    proxy_box.RenderFractionalTranslation.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderFractionalTranslation.prototype;
  dart.addTypeTests(proxy_box.RenderFractionalTranslation);
  dart.addTypeCaches(proxy_box.RenderFractionalTranslation);
  dart.setGetterSignature(proxy_box.RenderFractionalTranslation, () => ({
    __proto__: dart.getGetters(proxy_box.RenderFractionalTranslation.__proto__),
    translation: ui.Offset
  }));
  dart.setSetterSignature(proxy_box.RenderFractionalTranslation, () => ({
    __proto__: dart.getSetters(proxy_box.RenderFractionalTranslation.__proto__),
    translation: ui.Offset
  }));
  dart.setLibraryUri(proxy_box.RenderFractionalTranslation, I[0]);
  dart.setFieldSignature(proxy_box.RenderFractionalTranslation, () => ({
    __proto__: dart.getFields(proxy_box.RenderFractionalTranslation.__proto__),
    [_translation]: dart.fieldType(ui.Offset),
    transformHitTests: dart.fieldType(core.bool)
  }));
  var onPointerDown$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerDown");
  var onPointerMove$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerMove");
  var onPointerUp$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerUp");
  var onPointerHover$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerHover");
  var onPointerCancel$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerCancel");
  var onPointerSignal$ = dart.privateName(proxy_box, "RenderPointerListener.onPointerSignal");
  proxy_box.RenderPointerListener = class RenderPointerListener extends proxy_box.RenderProxyBoxWithHitTestBehavior {
    get onPointerDown() {
      return this[onPointerDown$];
    }
    set onPointerDown(value) {
      this[onPointerDown$] = value;
    }
    get onPointerMove() {
      return this[onPointerMove$];
    }
    set onPointerMove(value) {
      this[onPointerMove$] = value;
    }
    get onPointerUp() {
      return this[onPointerUp$];
    }
    set onPointerUp(value) {
      this[onPointerUp$] = value;
    }
    get onPointerHover() {
      return this[onPointerHover$];
    }
    set onPointerHover(value) {
      this[onPointerHover$] = value;
    }
    get onPointerCancel() {
      return this[onPointerCancel$];
    }
    set onPointerCancel(value) {
      this[onPointerCancel$] = value;
    }
    get onPointerSignal() {
      return this[onPointerSignal$];
    }
    set onPointerSignal(value) {
      this[onPointerSignal$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let onPointerDown = opts && 'onPointerDown' in opts ? opts.onPointerDown : null;
      let onPointerMove = opts && 'onPointerMove' in opts ? opts.onPointerMove : null;
      let onPointerUp = opts && 'onPointerUp' in opts ? opts.onPointerUp : null;
      let onPointerHover = opts && 'onPointerHover' in opts ? opts.onPointerHover : null;
      let onPointerCancel = opts && 'onPointerCancel' in opts ? opts.onPointerCancel : null;
      let onPointerSignal = opts && 'onPointerSignal' in opts ? opts.onPointerSignal : null;
      let behavior = opts && 'behavior' in opts ? opts.behavior : C[0] || CT.C0;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderPointerListener.new({onPointerDown: onPointerDown, onPointerMove: onPointerMove, onPointerUp: onPointerUp, onPointerHover: onPointerHover, onPointerCancel: onPointerCancel, onPointerSignal: onPointerSignal, behavior: behavior, child: child});
    }
    computeSizeForNoChild(constraints) {
      return constraints.biggest;
    }
    handleEvent(event, entry) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3;
      hit_test.HitTestEntry.as(entry);
      if (!this.debugHandleEvent(event, entry)) dart.assertFailed(null, I[1], 2888, 12, "debugHandleEvent(event, entry)");
      if (events.PointerDownEvent.is(event)) {
        t1 = this.onPointerDown;
        return t1 == null ? null : t1(event);
      }
      if (events.PointerMoveEvent.is(event)) {
        t1$ = this.onPointerMove;
        return t1$ == null ? null : t1$(event);
      }
      if (events.PointerUpEvent.is(event)) {
        t1$0 = this.onPointerUp;
        return t1$0 == null ? null : t1$0(event);
      }
      if (events.PointerHoverEvent.is(event)) {
        t1$1 = this.onPointerHover;
        return t1$1 == null ? null : t1$1(event);
      }
      if (events.PointerCancelEvent.is(event)) {
        t1$2 = this.onPointerCancel;
        return t1$2 == null ? null : t1$2(event);
      }
      if (events.PointerSignalEvent.is(event)) {
        t1$3 = this.onPointerSignal;
        return t1$3 == null ? null : t1$3(event);
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.FlagsSummaryOfFunctionN()).new("listeners", new (T$.IdentityMapOfString$FunctionN()).from(["down", this.onPointerDown, "move", this.onPointerMove, "up", this.onPointerUp, "hover", this.onPointerHover, "cancel", this.onPointerCancel, "signal", this.onPointerSignal]), {ifEmpty: "<none>"}));
    }
  };
  (proxy_box.RenderPointerListener.new = function(opts) {
    let onPointerDown = opts && 'onPointerDown' in opts ? opts.onPointerDown : null;
    let onPointerMove = opts && 'onPointerMove' in opts ? opts.onPointerMove : null;
    let onPointerUp = opts && 'onPointerUp' in opts ? opts.onPointerUp : null;
    let onPointerHover = opts && 'onPointerHover' in opts ? opts.onPointerHover : null;
    let onPointerCancel = opts && 'onPointerCancel' in opts ? opts.onPointerCancel : null;
    let onPointerSignal = opts && 'onPointerSignal' in opts ? opts.onPointerSignal : null;
    let behavior = opts && 'behavior' in opts ? opts.behavior : C[0] || CT.C0;
    let child = opts && 'child' in opts ? opts.child : null;
    this[onPointerDown$] = onPointerDown;
    this[onPointerMove$] = onPointerMove;
    this[onPointerUp$] = onPointerUp;
    this[onPointerHover$] = onPointerHover;
    this[onPointerCancel$] = onPointerCancel;
    this[onPointerSignal$] = onPointerSignal;
    proxy_box.RenderPointerListener.__proto__.new.call(this, {behavior: behavior, child: child});
    ;
  }).prototype = proxy_box.RenderPointerListener.prototype;
  dart.addTypeTests(proxy_box.RenderPointerListener);
  dart.addTypeCaches(proxy_box.RenderPointerListener);
  dart.setLibraryUri(proxy_box.RenderPointerListener, I[0]);
  dart.setFieldSignature(proxy_box.RenderPointerListener, () => ({
    __proto__: dart.getFields(proxy_box.RenderPointerListener.__proto__),
    onPointerDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerDownEvent]))),
    onPointerMove: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerMoveEvent]))),
    onPointerUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerUpEvent]))),
    onPointerHover: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerHoverEvent]))),
    onPointerCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerCancelEvent]))),
    onPointerSignal: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerSignalEvent])))
  }));
  var onEnter$ = dart.privateName(proxy_box, "RenderMouseRegion.onEnter");
  var onHover$ = dart.privateName(proxy_box, "RenderMouseRegion.onHover");
  var onExit$ = dart.privateName(proxy_box, "RenderMouseRegion.onExit");
  var _cursor = dart.privateName(proxy_box, "_cursor");
  var _validForMouseTracker = dart.privateName(proxy_box, "_validForMouseTracker");
  var _opaque = dart.privateName(proxy_box, "_opaque");
  proxy_box.RenderMouseRegion = class RenderMouseRegion extends proxy_box.RenderProxyBox {
    get onEnter() {
      return this[onEnter$];
    }
    set onEnter(value) {
      this[onEnter$] = value;
    }
    get onHover() {
      return this[onHover$];
    }
    set onHover(value) {
      this[onHover$] = value;
    }
    get onExit() {
      return this[onExit$];
    }
    set onExit(value) {
      this[onExit$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
      let onHover = opts && 'onHover' in opts ? opts.onHover : null;
      let onExit = opts && 'onExit' in opts ? opts.onExit : null;
      let cursor = opts && 'cursor' in opts ? opts.cursor : C[15] || CT.C15;
      let validForMouseTracker = opts && 'validForMouseTracker' in opts ? opts.validForMouseTracker : true;
      let opaque = opts && 'opaque' in opts ? opts.opaque : true;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderMouseRegion.new({onEnter: onEnter, onHover: onHover, onExit: onExit, cursor: cursor, validForMouseTracker: validForMouseTracker, opaque: opaque, child: child});
    }
    hitTestSelf(position) {
      return true;
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return super.hitTest(result, {position: position}) && this[_opaque];
    }
    handleEvent(event, entry) {
      hit_test.HitTestEntry.as(entry);
      if (!this.debugHandleEvent(event, entry)) dart.assertFailed(null, I[1], 2971, 12, "debugHandleEvent(event, entry)");
      if (this.onHover != null && events.PointerHoverEvent.is(event)) return dart.nullCheck(this.onHover)(event);
    }
    get opaque() {
      return this[_opaque];
    }
    set opaque(value) {
      if (this[_opaque] !== value) {
        this[_opaque] = value;
        this.markNeedsPaint();
      }
    }
    get cursor() {
      return this[_cursor];
    }
    set cursor(value) {
      if (!this[_cursor][$_equals](value)) {
        this[_cursor] = value;
        this.markNeedsPaint();
      }
    }
    get validForMouseTracker() {
      return this[_validForMouseTracker];
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      super.attach(owner);
      this[_validForMouseTracker] = true;
    }
    detach() {
      this[_validForMouseTracker] = false;
      super.detach();
    }
    computeSizeForNoChild(constraints) {
      return constraints.biggest;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.FlagsSummaryOfFunctionN()).new("listeners", new (T$.IdentityMapOfString$FunctionN()).from(["enter", this.onEnter, "hover", this.onHover, "exit", this.onExit]), {ifEmpty: "<none>"}));
      properties.add(new (T$.DiagnosticsPropertyOfMouseCursor()).new("cursor", this.cursor, {defaultValue: mouse_cursor.MouseCursor.defer}));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("opaque", this.opaque, {defaultValue: true}));
      properties.add(new diagnostics.FlagProperty.new("validForMouseTracker", {value: this.validForMouseTracker, defaultValue: true, ifFalse: "invalid for MouseTracker"}));
    }
  };
  (proxy_box.RenderMouseRegion.new = function(opts) {
    let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
    let onHover = opts && 'onHover' in opts ? opts.onHover : null;
    let onExit = opts && 'onExit' in opts ? opts.onExit : null;
    let cursor = opts && 'cursor' in opts ? opts.cursor : C[15] || CT.C15;
    let validForMouseTracker = opts && 'validForMouseTracker' in opts ? opts.validForMouseTracker : true;
    let opaque = opts && 'opaque' in opts ? opts.opaque : true;
    let child = opts && 'child' in opts ? opts.child : null;
    this[onEnter$] = onEnter;
    this[onHover$] = onHover;
    this[onExit$] = onExit;
    if (!(opaque !== null)) dart.assertFailed(null, I[1], 2953, 15, "opaque != null");
    if (!(cursor !== null)) dart.assertFailed(null, I[1], 2954, 15, "cursor != null");
    this[_cursor] = cursor;
    this[_validForMouseTracker] = validForMouseTracker;
    this[_opaque] = opaque;
    proxy_box.RenderMouseRegion.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderMouseRegion.prototype;
  dart.addTypeTests(proxy_box.RenderMouseRegion);
  dart.addTypeCaches(proxy_box.RenderMouseRegion);
  proxy_box.RenderMouseRegion[dart.implements] = () => [mouse_tracking.MouseTrackerAnnotation];
  dart.setGetterSignature(proxy_box.RenderMouseRegion, () => ({
    __proto__: dart.getGetters(proxy_box.RenderMouseRegion.__proto__),
    opaque: core.bool,
    cursor: mouse_cursor.MouseCursor,
    validForMouseTracker: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderMouseRegion, () => ({
    __proto__: dart.getSetters(proxy_box.RenderMouseRegion.__proto__),
    opaque: core.bool,
    cursor: mouse_cursor.MouseCursor
  }));
  dart.setLibraryUri(proxy_box.RenderMouseRegion, I[0]);
  dart.setFieldSignature(proxy_box.RenderMouseRegion, () => ({
    __proto__: dart.getFields(proxy_box.RenderMouseRegion.__proto__),
    [_opaque]: dart.fieldType(core.bool),
    onEnter: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerEnterEvent]))),
    onHover: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerHoverEvent]))),
    onExit: dart.fieldType(dart.nullable(dart.fnType(dart.void, [events.PointerExitEvent]))),
    [_cursor]: dart.fieldType(mouse_cursor.MouseCursor),
    [_validForMouseTracker]: dart.fieldType(core.bool)
  }));
  var _debugSymmetricPaintCount = dart.privateName(proxy_box, "_debugSymmetricPaintCount");
  var _debugAsymmetricPaintCount = dart.privateName(proxy_box, "_debugAsymmetricPaintCount");
  proxy_box.RenderRepaintBoundary = class RenderRepaintBoundary extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderRepaintBoundary.new({child: child});
    }
    get isRepaintBoundary() {
      return true;
    }
    toImage(opts) {
      let pixelRatio = opts && 'pixelRatio' in opts ? opts.pixelRatio : 1;
      if (!!this.debugNeedsPaint) dart.assertFailed(null, I[1], 3158, 12, "!debugNeedsPaint");
      let offsetLayer = layer.OffsetLayer.as(dart.nullCheck(this.layer));
      return offsetLayer.toImage(ui.Offset.zero['&'](this.size), {pixelRatio: pixelRatio});
    }
    get debugSymmetricPaintCount() {
      return this[_debugSymmetricPaintCount];
    }
    get debugAsymmetricPaintCount() {
      return this[_debugAsymmetricPaintCount];
    }
    debugResetMetrics() {
      if (!dart.fn(() => {
        this[_debugSymmetricPaintCount] = 0;
        this[_debugAsymmetricPaintCount] = 0;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 3198, 12, "() {\n      _debugSymmetricPaintCount = 0;\n      _debugAsymmetricPaintCount = 0;\n      return true;\n    }()");
    }
    debugRegisterRepaintBoundaryPaint(opts) {
      let includedParent = opts && 'includedParent' in opts ? opts.includedParent : true;
      let includedChild = opts && 'includedChild' in opts ? opts.includedChild : false;
      if (!dart.fn(() => {
        if (includedParent && includedChild)
          this[_debugSymmetricPaintCount] = this[_debugSymmetricPaintCount] + 1;
        else
          this[_debugAsymmetricPaintCount] = this[_debugAsymmetricPaintCount] + 1;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 3207, 12, "() {\n      if (includedParent && includedChild)\n        _debugSymmetricPaintCount += 1;\n      else\n        _debugAsymmetricPaintCount += 1;\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let inReleaseMode = true;
      if (!dart.fn(() => {
        inReleaseMode = false;
        if (this.debugSymmetricPaintCount + this.debugAsymmetricPaintCount === 0) {
          properties.add(new diagnostics.MessageProperty.new("usefulness ratio", "no metrics collected yet (never painted)"));
        } else {
          let fraction = this.debugAsymmetricPaintCount / (this.debugSymmetricPaintCount + this.debugAsymmetricPaintCount);
          let diagnosis = null;
          if (this.debugSymmetricPaintCount + this.debugAsymmetricPaintCount < 5) {
            diagnosis = "insufficient data to draw conclusion (less than five repaints)";
          } else if (fraction > 0.9) {
            diagnosis = "this is an outstandingly useful repaint boundary and should definitely be kept";
          } else if (fraction > 0.5) {
            diagnosis = "this is a useful repaint boundary and should be kept";
          } else if (fraction > 0.3) {
            diagnosis = "this repaint boundary is probably useful, but maybe it would be more useful in tandem with adding more repaint boundaries elsewhere";
          } else if (fraction > 0.1) {
            diagnosis = "this repaint boundary does sometimes show value, though currently not that often";
          } else if (this.debugAsymmetricPaintCount === 0) {
            diagnosis = "this repaint boundary is astoundingly ineffectual and should be removed";
          } else {
            diagnosis = "this repaint boundary is not very effective and should probably be removed";
          }
          properties.add(new diagnostics.PercentProperty.new("metrics", fraction, {unit: "useful", tooltip: dart.str(this.debugSymmetricPaintCount) + " bad vs " + dart.str(this.debugAsymmetricPaintCount) + " good"}));
          properties.add(new diagnostics.MessageProperty.new("diagnosis", diagnosis));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 3220, 12, "() {\n      inReleaseMode = false;\n      if (debugSymmetricPaintCount + debugAsymmetricPaintCount == 0) {\n        properties.add(MessageProperty('usefulness ratio', 'no metrics collected yet (never painted)'));\n      } else {\n        final double fraction = debugAsymmetricPaintCount / (debugSymmetricPaintCount + debugAsymmetricPaintCount);\n        final String diagnosis;\n        if (debugSymmetricPaintCount + debugAsymmetricPaintCount < 5) {\n          diagnosis = 'insufficient data to draw conclusion (less than five repaints)';\n        } else if (fraction > 0.9) {\n          diagnosis = 'this is an outstandingly useful repaint boundary and should definitely be kept';\n        } else if (fraction > 0.5) {\n          diagnosis = 'this is a useful repaint boundary and should be kept';\n        } else if (fraction > 0.30) {\n          diagnosis = 'this repaint boundary is probably useful, but maybe it would be more useful in tandem with adding more repaint boundaries elsewhere';\n        } else if (fraction > 0.1) {\n          diagnosis = 'this repaint boundary does sometimes show value, though currently not that often';\n        } else if (debugAsymmetricPaintCount == 0) {\n          diagnosis = 'this repaint boundary is astoundingly ineffectual and should be removed';\n        } else {\n          diagnosis = 'this repaint boundary is not very effective and should probably be removed';\n        }\n        properties.add(PercentProperty('metrics', fraction, unit: 'useful', tooltip: '$debugSymmetricPaintCount bad vs $debugAsymmetricPaintCount good'));\n        properties.add(MessageProperty('diagnosis', diagnosis));\n      }\n      return true;\n    }()");
      if (inReleaseMode) properties.add(diagnostics.DiagnosticsNode.message("(run in debug mode to collect repaint boundary statistics)"));
    }
  };
  (proxy_box.RenderRepaintBoundary.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    this[_debugSymmetricPaintCount] = 0;
    this[_debugAsymmetricPaintCount] = 0;
    proxy_box.RenderRepaintBoundary.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderRepaintBoundary.prototype;
  dart.addTypeTests(proxy_box.RenderRepaintBoundary);
  dart.addTypeCaches(proxy_box.RenderRepaintBoundary);
  dart.setMethodSignature(proxy_box.RenderRepaintBoundary, () => ({
    __proto__: dart.getMethods(proxy_box.RenderRepaintBoundary.__proto__),
    toImage: dart.fnType(async.Future$(ui.Image), [], {pixelRatio: core.double}, {}),
    debugResetMetrics: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(proxy_box.RenderRepaintBoundary, () => ({
    __proto__: dart.getGetters(proxy_box.RenderRepaintBoundary.__proto__),
    debugSymmetricPaintCount: core.int,
    debugAsymmetricPaintCount: core.int
  }));
  dart.setLibraryUri(proxy_box.RenderRepaintBoundary, I[0]);
  dart.setFieldSignature(proxy_box.RenderRepaintBoundary, () => ({
    __proto__: dart.getFields(proxy_box.RenderRepaintBoundary.__proto__),
    [_debugSymmetricPaintCount]: dart.fieldType(core.int),
    [_debugAsymmetricPaintCount]: dart.fieldType(core.int)
  }));
  var _ignoring = dart.privateName(proxy_box, "_ignoring");
  var _ignoringSemantics = dart.privateName(proxy_box, "_ignoringSemantics");
  var _effectiveIgnoringSemantics = dart.privateName(proxy_box, "_effectiveIgnoringSemantics");
  proxy_box.RenderIgnorePointer = class RenderIgnorePointer extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let ignoring = opts && 'ignoring' in opts ? opts.ignoring : true;
      let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
      return new proxy_box.RenderIgnorePointer.new({child: child, ignoring: ignoring, ignoringSemantics: ignoringSemantics});
    }
    get ignoring() {
      return this[_ignoring];
    }
    set ignoring(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 3289, 12, "value != null");
      if (value === this[_ignoring]) return;
      this[_ignoring] = value;
      if (this[_ignoringSemantics] == null || !dart.nullCheck(this[_ignoringSemantics])) this.markNeedsSemanticsUpdate();
    }
    get ignoringSemantics() {
      return this[_ignoringSemantics];
    }
    set ignoringSemantics(value) {
      if (value == this[_ignoringSemantics]) return;
      let oldEffectiveValue = this[_effectiveIgnoringSemantics];
      this[_ignoringSemantics] = value;
      if (oldEffectiveValue !== this[_effectiveIgnoringSemantics]) this.markNeedsSemanticsUpdate();
    }
    get [_effectiveIgnoringSemantics]() {
      let t1;
      t1 = this.ignoringSemantics;
      return t1 == null ? this.ignoring : t1;
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return !this.ignoring && super.hitTest(result, {position: position});
    }
    visitChildrenForSemantics(visitor) {
      if (this.child != null && !this[_effectiveIgnoringSemantics]) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("ignoring", this.ignoring));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("ignoringSemantics", this[_effectiveIgnoringSemantics], {description: this.ignoringSemantics == null ? "implicitly " + dart.str(this[_effectiveIgnoringSemantics]) : null}));
    }
  };
  (proxy_box.RenderIgnorePointer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let ignoring = opts && 'ignoring' in opts ? opts.ignoring : true;
    let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
    this[_ignoring] = ignoring;
    this[_ignoringSemantics] = ignoringSemantics;
    proxy_box.RenderIgnorePointer.__proto__.new.call(this, child);
    if (!(this[_ignoring] !== null)) dart.assertFailed(null, I[1], 3279, 12, "_ignoring != null");
  }).prototype = proxy_box.RenderIgnorePointer.prototype;
  dart.addTypeTests(proxy_box.RenderIgnorePointer);
  dart.addTypeCaches(proxy_box.RenderIgnorePointer);
  dart.setGetterSignature(proxy_box.RenderIgnorePointer, () => ({
    __proto__: dart.getGetters(proxy_box.RenderIgnorePointer.__proto__),
    ignoring: core.bool,
    ignoringSemantics: dart.nullable(core.bool),
    [_effectiveIgnoringSemantics]: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderIgnorePointer, () => ({
    __proto__: dart.getSetters(proxy_box.RenderIgnorePointer.__proto__),
    ignoring: core.bool,
    ignoringSemantics: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(proxy_box.RenderIgnorePointer, I[0]);
  dart.setFieldSignature(proxy_box.RenderIgnorePointer, () => ({
    __proto__: dart.getFields(proxy_box.RenderIgnorePointer.__proto__),
    [_ignoring]: dart.fieldType(core.bool),
    [_ignoringSemantics]: dart.fieldType(dart.nullable(core.bool))
  }));
  var _offstage = dart.privateName(proxy_box, "_offstage");
  proxy_box.RenderOffstage = class RenderOffstage extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let offstage = opts && 'offstage' in opts ? opts.offstage : true;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderOffstage.new({offstage: offstage, child: child});
    }
    get offstage() {
      return this[_offstage];
    }
    set offstage(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 3365, 12, "value != null");
      if (value === this[_offstage]) return;
      this[_offstage] = value;
      this.markNeedsLayoutForSizedByParentChange();
    }
    computeMinIntrinsicWidth(height) {
      if (this.offstage) return 0.0;
      return super.computeMinIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (this.offstage) return 0.0;
      return super.computeMaxIntrinsicWidth(height);
    }
    computeMinIntrinsicHeight(width) {
      if (this.offstage) return 0.0;
      return super.computeMinIntrinsicHeight(width);
    }
    computeMaxIntrinsicHeight(width) {
      if (this.offstage) return 0.0;
      return super.computeMaxIntrinsicHeight(width);
    }
    computeDistanceToActualBaseline(baseline) {
      if (this.offstage) return null;
      return super.computeDistanceToActualBaseline(baseline);
    }
    get sizedByParent() {
      return this.offstage;
    }
    computeDryLayout(constraints) {
      if (this.offstage) {
        return constraints.smallest;
      }
      return super.computeDryLayout(constraints);
    }
    performResize() {
      if (!this.offstage) dart.assertFailed(null, I[1], 3421, 12, "offstage");
      super.performResize();
    }
    performLayout() {
      let t1;
      if (this.offstage) {
        t1 = this.child;
        t1 == null ? null : t1.layout(this.constraints);
      } else {
        super.performLayout();
      }
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return !this.offstage && super.hitTest(result, {position: position});
    }
    paint(context, offset) {
      if (this.offstage) return;
      super.paint(context, offset);
    }
    visitChildrenForSemantics(visitor) {
      if (this.offstage) return;
      super.visitChildrenForSemantics(visitor);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("offstage", this.offstage));
    }
    debugDescribeChildren() {
      if (this.child == null) return T$.JSArrayOfDiagnosticsNode().of([]);
      return T$.JSArrayOfDiagnosticsNode().of([dart.nullCheck(this.child).toDiagnosticsNode({name: "child", style: this.offstage ? diagnostics.DiagnosticsTreeStyle.offstage : diagnostics.DiagnosticsTreeStyle.sparse})]);
    }
  };
  (proxy_box.RenderOffstage.new = function(opts) {
    let offstage = opts && 'offstage' in opts ? opts.offstage : true;
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(offstage !== null)) dart.assertFailed(null, I[1], 3351, 15, "offstage != null");
    this[_offstage] = offstage;
    proxy_box.RenderOffstage.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderOffstage.prototype;
  dart.addTypeTests(proxy_box.RenderOffstage);
  dart.addTypeCaches(proxy_box.RenderOffstage);
  dart.setGetterSignature(proxy_box.RenderOffstage, () => ({
    __proto__: dart.getGetters(proxy_box.RenderOffstage.__proto__),
    offstage: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderOffstage, () => ({
    __proto__: dart.getSetters(proxy_box.RenderOffstage.__proto__),
    offstage: core.bool
  }));
  dart.setLibraryUri(proxy_box.RenderOffstage, I[0]);
  dart.setFieldSignature(proxy_box.RenderOffstage, () => ({
    __proto__: dart.getFields(proxy_box.RenderOffstage.__proto__),
    [_offstage]: dart.fieldType(core.bool)
  }));
  var _absorbing = dart.privateName(proxy_box, "_absorbing");
  proxy_box.RenderAbsorbPointer = class RenderAbsorbPointer extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let absorbing = opts && 'absorbing' in opts ? opts.absorbing : true;
      let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
      return new proxy_box.RenderAbsorbPointer.new({child: child, absorbing: absorbing, ignoringSemantics: ignoringSemantics});
    }
    get absorbing() {
      return this[_absorbing];
    }
    set absorbing(value) {
      if (this[_absorbing] === value) return;
      this[_absorbing] = value;
      if (this.ignoringSemantics == null) this.markNeedsSemanticsUpdate();
    }
    get ignoringSemantics() {
      return this[_ignoringSemantics];
    }
    set ignoringSemantics(value) {
      if (value == this[_ignoringSemantics]) return;
      let oldEffectiveValue = this[_effectiveIgnoringSemantics];
      this[_ignoringSemantics] = value;
      if (oldEffectiveValue !== this[_effectiveIgnoringSemantics]) this.markNeedsSemanticsUpdate();
    }
    get [_effectiveIgnoringSemantics]() {
      let t1;
      t1 = this.ignoringSemantics;
      return t1 == null ? this.absorbing : t1;
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.absorbing ? this.size.contains(position) : super.hitTest(result, {position: position});
    }
    visitChildrenForSemantics(visitor) {
      if (this.child != null && !this[_effectiveIgnoringSemantics]) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("absorbing", this.absorbing));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("ignoringSemantics", this[_effectiveIgnoringSemantics], {description: this.ignoringSemantics == null ? "implicitly " + dart.str(this[_effectiveIgnoringSemantics]) : null}));
    }
  };
  (proxy_box.RenderAbsorbPointer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let absorbing = opts && 'absorbing' in opts ? opts.absorbing : true;
    let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
    if (!(absorbing !== null)) dart.assertFailed(null, I[1], 3492, 15, "absorbing != null");
    this[_absorbing] = absorbing;
    this[_ignoringSemantics] = ignoringSemantics;
    proxy_box.RenderAbsorbPointer.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderAbsorbPointer.prototype;
  dart.addTypeTests(proxy_box.RenderAbsorbPointer);
  dart.addTypeCaches(proxy_box.RenderAbsorbPointer);
  dart.setGetterSignature(proxy_box.RenderAbsorbPointer, () => ({
    __proto__: dart.getGetters(proxy_box.RenderAbsorbPointer.__proto__),
    absorbing: core.bool,
    ignoringSemantics: dart.nullable(core.bool),
    [_effectiveIgnoringSemantics]: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderAbsorbPointer, () => ({
    __proto__: dart.getSetters(proxy_box.RenderAbsorbPointer.__proto__),
    absorbing: core.bool,
    ignoringSemantics: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(proxy_box.RenderAbsorbPointer, I[0]);
  dart.setFieldSignature(proxy_box.RenderAbsorbPointer, () => ({
    __proto__: dart.getFields(proxy_box.RenderAbsorbPointer.__proto__),
    [_absorbing]: dart.fieldType(core.bool),
    [_ignoringSemantics]: dart.fieldType(dart.nullable(core.bool))
  }));
  var metaData$ = dart.privateName(proxy_box, "RenderMetaData.metaData");
  proxy_box.RenderMetaData = class RenderMetaData extends proxy_box.RenderProxyBoxWithHitTestBehavior {
    get metaData() {
      return this[metaData$];
    }
    set metaData(value) {
      this[metaData$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let metaData = opts && 'metaData' in opts ? opts.metaData : null;
      let behavior = opts && 'behavior' in opts ? opts.behavior : C[0] || CT.C0;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderMetaData.new({metaData: metaData, behavior: behavior, child: child});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DiagnosticsProperty.new("metaData", this.metaData));
    }
  };
  (proxy_box.RenderMetaData.new = function(opts) {
    let metaData = opts && 'metaData' in opts ? opts.metaData : null;
    let behavior = opts && 'behavior' in opts ? opts.behavior : C[0] || CT.C0;
    let child = opts && 'child' in opts ? opts.child : null;
    this[metaData$] = metaData;
    proxy_box.RenderMetaData.__proto__.new.call(this, {behavior: behavior, child: child});
    ;
  }).prototype = proxy_box.RenderMetaData.prototype;
  dart.addTypeTests(proxy_box.RenderMetaData);
  dart.addTypeCaches(proxy_box.RenderMetaData);
  dart.setLibraryUri(proxy_box.RenderMetaData, I[0]);
  dart.setFieldSignature(proxy_box.RenderMetaData, () => ({
    __proto__: dart.getFields(proxy_box.RenderMetaData.__proto__),
    metaData: dart.fieldType(dart.dynamic)
  }));
  var scrollFactor$ = dart.privateName(proxy_box, "RenderSemanticsGestureHandler.scrollFactor");
  var _validActions = dart.privateName(proxy_box, "_validActions");
  var _onTap = dart.privateName(proxy_box, "_onTap");
  var _onLongPress = dart.privateName(proxy_box, "_onLongPress");
  var _onHorizontalDragUpdate = dart.privateName(proxy_box, "_onHorizontalDragUpdate");
  var _onVerticalDragUpdate = dart.privateName(proxy_box, "_onVerticalDragUpdate");
  var _isValidAction = dart.privateName(proxy_box, "_isValidAction");
  var _performSemanticScrollRight = dart.privateName(proxy_box, "_performSemanticScrollRight");
  var _performSemanticScrollLeft = dart.privateName(proxy_box, "_performSemanticScrollLeft");
  var _performSemanticScrollUp = dart.privateName(proxy_box, "_performSemanticScrollUp");
  var _performSemanticScrollDown = dart.privateName(proxy_box, "_performSemanticScrollDown");
  proxy_box.RenderSemanticsGestureHandler = class RenderSemanticsGestureHandler extends proxy_box.RenderProxyBoxWithHitTestBehavior {
    get scrollFactor() {
      return this[scrollFactor$];
    }
    set scrollFactor(value) {
      this[scrollFactor$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let onHorizontalDragUpdate = opts && 'onHorizontalDragUpdate' in opts ? opts.onHorizontalDragUpdate : null;
      let onVerticalDragUpdate = opts && 'onVerticalDragUpdate' in opts ? opts.onVerticalDragUpdate : null;
      let scrollFactor = opts && 'scrollFactor' in opts ? opts.scrollFactor : 0.8;
      let behavior = opts && 'behavior' in opts ? opts.behavior : C[0] || CT.C0;
      return new proxy_box.RenderSemanticsGestureHandler.new({child: child, onTap: onTap, onLongPress: onLongPress, onHorizontalDragUpdate: onHorizontalDragUpdate, onVerticalDragUpdate: onVerticalDragUpdate, scrollFactor: scrollFactor, behavior: behavior});
    }
    get validActions() {
      return this[_validActions];
    }
    set validActions(value) {
      if (collections.setEquals(ui.SemanticsAction, value, this[_validActions])) return;
      this[_validActions] = value;
      this.markNeedsSemanticsUpdate();
    }
    get onTap() {
      return this[_onTap];
    }
    set onTap(value) {
      if (dart.equals(this[_onTap], value)) return;
      let hadHandler = this[_onTap] != null;
      this[_onTap] = value;
      if (value != null !== hadHandler) this.markNeedsSemanticsUpdate();
    }
    get onLongPress() {
      return this[_onLongPress];
    }
    set onLongPress(value) {
      if (dart.equals(this[_onLongPress], value)) return;
      let hadHandler = this[_onLongPress] != null;
      this[_onLongPress] = value;
      if (value != null !== hadHandler) this.markNeedsSemanticsUpdate();
    }
    get onHorizontalDragUpdate() {
      return this[_onHorizontalDragUpdate];
    }
    set onHorizontalDragUpdate(value) {
      if (dart.equals(this[_onHorizontalDragUpdate], value)) return;
      let hadHandler = this[_onHorizontalDragUpdate] != null;
      this[_onHorizontalDragUpdate] = value;
      if (value != null !== hadHandler) this.markNeedsSemanticsUpdate();
    }
    get onVerticalDragUpdate() {
      return this[_onVerticalDragUpdate];
    }
    set onVerticalDragUpdate(value) {
      if (dart.equals(this[_onVerticalDragUpdate], value)) return;
      let hadHandler = this[_onVerticalDragUpdate] != null;
      this[_onVerticalDragUpdate] = value;
      if (value != null !== hadHandler) this.markNeedsSemanticsUpdate();
    }
    describeSemanticsConfiguration(config) {
      super.describeSemanticsConfiguration(config);
      if (this.onTap != null && this[_isValidAction](ui.SemanticsAction.tap)) config.onTap = this.onTap;
      if (this.onLongPress != null && this[_isValidAction](ui.SemanticsAction.longPress)) config.onLongPress = this.onLongPress;
      if (this.onHorizontalDragUpdate != null) {
        if (this[_isValidAction](ui.SemanticsAction.scrollRight)) config.onScrollRight = dart.bind(this, _performSemanticScrollRight);
        if (this[_isValidAction](ui.SemanticsAction.scrollLeft)) config.onScrollLeft = dart.bind(this, _performSemanticScrollLeft);
      }
      if (this.onVerticalDragUpdate != null) {
        if (this[_isValidAction](ui.SemanticsAction.scrollUp)) config.onScrollUp = dart.bind(this, _performSemanticScrollUp);
        if (this[_isValidAction](ui.SemanticsAction.scrollDown)) config.onScrollDown = dart.bind(this, _performSemanticScrollDown);
      }
    }
    [_isValidAction](action) {
      return this.validActions == null || dart.nullCheck(this.validActions).contains(action);
    }
    [_performSemanticScrollLeft]() {
      if (this.onHorizontalDragUpdate != null) {
        let primaryDelta = this.size.width * -this.scrollFactor;
        dart.nullCheck(this.onHorizontalDragUpdate)(new drag_details.DragUpdateDetails.new({delta: new ui.Offset.new(primaryDelta, 0.0), primaryDelta: primaryDelta, globalPosition: this.localToGlobal(this.size.center(ui.Offset.zero))}));
      }
    }
    [_performSemanticScrollRight]() {
      if (this.onHorizontalDragUpdate != null) {
        let primaryDelta = this.size.width * this.scrollFactor;
        dart.nullCheck(this.onHorizontalDragUpdate)(new drag_details.DragUpdateDetails.new({delta: new ui.Offset.new(primaryDelta, 0.0), primaryDelta: primaryDelta, globalPosition: this.localToGlobal(this.size.center(ui.Offset.zero))}));
      }
    }
    [_performSemanticScrollUp]() {
      if (this.onVerticalDragUpdate != null) {
        let primaryDelta = this.size.height * -this.scrollFactor;
        dart.nullCheck(this.onVerticalDragUpdate)(new drag_details.DragUpdateDetails.new({delta: new ui.Offset.new(0.0, primaryDelta), primaryDelta: primaryDelta, globalPosition: this.localToGlobal(this.size.center(ui.Offset.zero))}));
      }
    }
    [_performSemanticScrollDown]() {
      if (this.onVerticalDragUpdate != null) {
        let primaryDelta = this.size.height * this.scrollFactor;
        dart.nullCheck(this.onVerticalDragUpdate)(new drag_details.DragUpdateDetails.new({delta: new ui.Offset.new(0.0, primaryDelta), primaryDelta: primaryDelta, globalPosition: this.localToGlobal(this.size.center(ui.Offset.zero))}));
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let gestures = (() => {
        let t1 = T$.JSArrayOfString().of([]);
        if (this.onTap != null) t1.push("tap");
        if (this.onLongPress != null) t1.push("long press");
        if (this.onHorizontalDragUpdate != null) t1.push("horizontal scroll");
        if (this.onVerticalDragUpdate != null) t1.push("vertical scroll");
        return t1;
      })();
      if (gestures[$isEmpty]) gestures[$add]("<none>");
      properties.add(new (T$.IterablePropertyOfString()).new("gestures", gestures));
    }
  };
  (proxy_box.RenderSemanticsGestureHandler.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onHorizontalDragUpdate = opts && 'onHorizontalDragUpdate' in opts ? opts.onHorizontalDragUpdate : null;
    let onVerticalDragUpdate = opts && 'onVerticalDragUpdate' in opts ? opts.onVerticalDragUpdate : null;
    let scrollFactor = opts && 'scrollFactor' in opts ? opts.scrollFactor : 0.8;
    let behavior = opts && 'behavior' in opts ? opts.behavior : C[0] || CT.C0;
    this[_validActions] = null;
    this[scrollFactor$] = scrollFactor;
    if (!(scrollFactor !== null)) dart.assertFailed(null, I[1], 3597, 15, "scrollFactor != null");
    this[_onTap] = onTap;
    this[_onLongPress] = onLongPress;
    this[_onHorizontalDragUpdate] = onHorizontalDragUpdate;
    this[_onVerticalDragUpdate] = onVerticalDragUpdate;
    proxy_box.RenderSemanticsGestureHandler.__proto__.new.call(this, {behavior: behavior, child: child});
    ;
  }).prototype = proxy_box.RenderSemanticsGestureHandler.prototype;
  dart.addTypeTests(proxy_box.RenderSemanticsGestureHandler);
  dart.addTypeCaches(proxy_box.RenderSemanticsGestureHandler);
  dart.setMethodSignature(proxy_box.RenderSemanticsGestureHandler, () => ({
    __proto__: dart.getMethods(proxy_box.RenderSemanticsGestureHandler.__proto__),
    [_isValidAction]: dart.fnType(core.bool, [ui.SemanticsAction]),
    [_performSemanticScrollLeft]: dart.fnType(dart.void, []),
    [_performSemanticScrollRight]: dart.fnType(dart.void, []),
    [_performSemanticScrollUp]: dart.fnType(dart.void, []),
    [_performSemanticScrollDown]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(proxy_box.RenderSemanticsGestureHandler, () => ({
    __proto__: dart.getGetters(proxy_box.RenderSemanticsGestureHandler.__proto__),
    validActions: dart.nullable(core.Set$(ui.SemanticsAction)),
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onHorizontalDragUpdate: dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onVerticalDragUpdate: dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))
  }));
  dart.setSetterSignature(proxy_box.RenderSemanticsGestureHandler, () => ({
    __proto__: dart.getSetters(proxy_box.RenderSemanticsGestureHandler.__proto__),
    validActions: dart.nullable(core.Set$(ui.SemanticsAction)),
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onHorizontalDragUpdate: dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onVerticalDragUpdate: dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))
  }));
  dart.setLibraryUri(proxy_box.RenderSemanticsGestureHandler, I[0]);
  dart.setFieldSignature(proxy_box.RenderSemanticsGestureHandler, () => ({
    __proto__: dart.getFields(proxy_box.RenderSemanticsGestureHandler.__proto__),
    [_validActions]: dart.fieldType(dart.nullable(core.Set$(ui.SemanticsAction))),
    [_onTap]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onLongPress]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onHorizontalDragUpdate]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))),
    [_onVerticalDragUpdate]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))),
    scrollFactor: dart.fieldType(core.double)
  }));
  var _container = dart.privateName(proxy_box, "_container");
  var _explicitChildNodes = dart.privateName(proxy_box, "_explicitChildNodes");
  var _excludeSemantics = dart.privateName(proxy_box, "_excludeSemantics");
  var _enabled = dart.privateName(proxy_box, "_enabled");
  var _checked = dart.privateName(proxy_box, "_checked");
  var _toggled = dart.privateName(proxy_box, "_toggled");
  var _selected = dart.privateName(proxy_box, "_selected");
  var _button = dart.privateName(proxy_box, "_button");
  var _slider = dart.privateName(proxy_box, "_slider");
  var _keyboardKey = dart.privateName(proxy_box, "_keyboardKey");
  var _link = dart.privateName(proxy_box, "_link");
  var _header = dart.privateName(proxy_box, "_header");
  var _textField = dart.privateName(proxy_box, "_textField");
  var _readOnly = dart.privateName(proxy_box, "_readOnly");
  var _focusable = dart.privateName(proxy_box, "_focusable");
  var _focused = dart.privateName(proxy_box, "_focused");
  var _inMutuallyExclusiveGroup = dart.privateName(proxy_box, "_inMutuallyExclusiveGroup");
  var _obscured = dart.privateName(proxy_box, "_obscured");
  var _multiline = dart.privateName(proxy_box, "_multiline");
  var _scopesRoute = dart.privateName(proxy_box, "_scopesRoute");
  var _namesRoute = dart.privateName(proxy_box, "_namesRoute");
  var _liveRegion = dart.privateName(proxy_box, "_liveRegion");
  var _maxValueLength = dart.privateName(proxy_box, "_maxValueLength");
  var _currentValueLength = dart.privateName(proxy_box, "_currentValueLength");
  var _hidden = dart.privateName(proxy_box, "_hidden");
  var _image = dart.privateName(proxy_box, "_image");
  var _onDismiss = dart.privateName(proxy_box, "_onDismiss");
  var _attributedLabel = dart.privateName(proxy_box, "_attributedLabel");
  var _attributedValue = dart.privateName(proxy_box, "_attributedValue");
  var _attributedIncreasedValue = dart.privateName(proxy_box, "_attributedIncreasedValue");
  var _attributedDecreasedValue = dart.privateName(proxy_box, "_attributedDecreasedValue");
  var _attributedHint = dart.privateName(proxy_box, "_attributedHint");
  var _hintOverrides = dart.privateName(proxy_box, "_hintOverrides");
  var _sortKey = dart.privateName(proxy_box, "_sortKey");
  var _tagForChildren = dart.privateName(proxy_box, "_tagForChildren");
  var _onScrollLeft = dart.privateName(proxy_box, "_onScrollLeft");
  var _onScrollRight = dart.privateName(proxy_box, "_onScrollRight");
  var _onScrollUp = dart.privateName(proxy_box, "_onScrollUp");
  var _onScrollDown = dart.privateName(proxy_box, "_onScrollDown");
  var _onIncrease = dart.privateName(proxy_box, "_onIncrease");
  var _onDecrease = dart.privateName(proxy_box, "_onDecrease");
  var _onCopy = dart.privateName(proxy_box, "_onCopy");
  var _onCut = dart.privateName(proxy_box, "_onCut");
  var _onPaste = dart.privateName(proxy_box, "_onPaste");
  var _onMoveCursorForwardByCharacter = dart.privateName(proxy_box, "_onMoveCursorForwardByCharacter");
  var _onMoveCursorBackwardByCharacter = dart.privateName(proxy_box, "_onMoveCursorBackwardByCharacter");
  var _onMoveCursorForwardByWord = dart.privateName(proxy_box, "_onMoveCursorForwardByWord");
  var _onMoveCursorBackwardByWord = dart.privateName(proxy_box, "_onMoveCursorBackwardByWord");
  var _onSetSelection = dart.privateName(proxy_box, "_onSetSelection");
  var _onSetText = dart.privateName(proxy_box, "_onSetText");
  var _onDidGainAccessibilityFocus = dart.privateName(proxy_box, "_onDidGainAccessibilityFocus");
  var _onDidLoseAccessibilityFocus = dart.privateName(proxy_box, "_onDidLoseAccessibilityFocus");
  var _customSemanticsActions = dart.privateName(proxy_box, "_customSemanticsActions");
  var _performTap = dart.privateName(proxy_box, "_performTap");
  var _performLongPress = dart.privateName(proxy_box, "_performLongPress");
  var _performDismiss = dart.privateName(proxy_box, "_performDismiss");
  var _performScrollLeft = dart.privateName(proxy_box, "_performScrollLeft");
  var _performScrollRight = dart.privateName(proxy_box, "_performScrollRight");
  var _performScrollUp = dart.privateName(proxy_box, "_performScrollUp");
  var _performScrollDown = dart.privateName(proxy_box, "_performScrollDown");
  var _performIncrease = dart.privateName(proxy_box, "_performIncrease");
  var _performDecrease = dart.privateName(proxy_box, "_performDecrease");
  var _performCopy = dart.privateName(proxy_box, "_performCopy");
  var _performCut = dart.privateName(proxy_box, "_performCut");
  var _performPaste = dart.privateName(proxy_box, "_performPaste");
  var _performMoveCursorForwardByCharacter = dart.privateName(proxy_box, "_performMoveCursorForwardByCharacter");
  var _performMoveCursorBackwardByCharacter = dart.privateName(proxy_box, "_performMoveCursorBackwardByCharacter");
  var _performMoveCursorForwardByWord = dart.privateName(proxy_box, "_performMoveCursorForwardByWord");
  var _performMoveCursorBackwardByWord = dart.privateName(proxy_box, "_performMoveCursorBackwardByWord");
  var _performSetSelection = dart.privateName(proxy_box, "_performSetSelection");
  var _performSetText = dart.privateName(proxy_box, "_performSetText");
  var _performDidGainAccessibilityFocus = dart.privateName(proxy_box, "_performDidGainAccessibilityFocus");
  var _performDidLoseAccessibilityFocus = dart.privateName(proxy_box, "_performDidLoseAccessibilityFocus");
  proxy_box.RenderSemanticsAnnotations = class RenderSemanticsAnnotations extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let container = opts && 'container' in opts ? opts.container : false;
      let explicitChildNodes = opts && 'explicitChildNodes' in opts ? opts.explicitChildNodes : false;
      let excludeSemantics = opts && 'excludeSemantics' in opts ? opts.excludeSemantics : false;
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let checked = opts && 'checked' in opts ? opts.checked : null;
      let toggled = opts && 'toggled' in opts ? opts.toggled : null;
      let selected = opts && 'selected' in opts ? opts.selected : null;
      let button = opts && 'button' in opts ? opts.button : null;
      let slider = opts && 'slider' in opts ? opts.slider : null;
      let keyboardKey = opts && 'keyboardKey' in opts ? opts.keyboardKey : null;
      let link = opts && 'link' in opts ? opts.link : null;
      let header = opts && 'header' in opts ? opts.header : null;
      let textField = opts && 'textField' in opts ? opts.textField : null;
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
      let focusable = opts && 'focusable' in opts ? opts.focusable : null;
      let focused = opts && 'focused' in opts ? opts.focused : null;
      let inMutuallyExclusiveGroup = opts && 'inMutuallyExclusiveGroup' in opts ? opts.inMutuallyExclusiveGroup : null;
      let obscured = opts && 'obscured' in opts ? opts.obscured : null;
      let multiline = opts && 'multiline' in opts ? opts.multiline : null;
      let scopesRoute = opts && 'scopesRoute' in opts ? opts.scopesRoute : null;
      let namesRoute = opts && 'namesRoute' in opts ? opts.namesRoute : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let liveRegion = opts && 'liveRegion' in opts ? opts.liveRegion : null;
      let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
      let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
      let attributedLabel = opts && 'attributedLabel' in opts ? opts.attributedLabel : null;
      let attributedValue = opts && 'attributedValue' in opts ? opts.attributedValue : null;
      let attributedIncreasedValue = opts && 'attributedIncreasedValue' in opts ? opts.attributedIncreasedValue : null;
      let attributedDecreasedValue = opts && 'attributedDecreasedValue' in opts ? opts.attributedDecreasedValue : null;
      let attributedHint = opts && 'attributedHint' in opts ? opts.attributedHint : null;
      let hintOverrides = opts && 'hintOverrides' in opts ? opts.hintOverrides : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
      let tagForChildren = opts && 'tagForChildren' in opts ? opts.tagForChildren : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let onDismiss = opts && 'onDismiss' in opts ? opts.onDismiss : null;
      let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
      let onScrollLeft = opts && 'onScrollLeft' in opts ? opts.onScrollLeft : null;
      let onScrollRight = opts && 'onScrollRight' in opts ? opts.onScrollRight : null;
      let onScrollUp = opts && 'onScrollUp' in opts ? opts.onScrollUp : null;
      let onScrollDown = opts && 'onScrollDown' in opts ? opts.onScrollDown : null;
      let onIncrease = opts && 'onIncrease' in opts ? opts.onIncrease : null;
      let onDecrease = opts && 'onDecrease' in opts ? opts.onDecrease : null;
      let onCopy = opts && 'onCopy' in opts ? opts.onCopy : null;
      let onCut = opts && 'onCut' in opts ? opts.onCut : null;
      let onPaste = opts && 'onPaste' in opts ? opts.onPaste : null;
      let onMoveCursorForwardByCharacter = opts && 'onMoveCursorForwardByCharacter' in opts ? opts.onMoveCursorForwardByCharacter : null;
      let onMoveCursorBackwardByCharacter = opts && 'onMoveCursorBackwardByCharacter' in opts ? opts.onMoveCursorBackwardByCharacter : null;
      let onMoveCursorForwardByWord = opts && 'onMoveCursorForwardByWord' in opts ? opts.onMoveCursorForwardByWord : null;
      let onMoveCursorBackwardByWord = opts && 'onMoveCursorBackwardByWord' in opts ? opts.onMoveCursorBackwardByWord : null;
      let onSetSelection = opts && 'onSetSelection' in opts ? opts.onSetSelection : null;
      let onSetText = opts && 'onSetText' in opts ? opts.onSetText : null;
      let onDidGainAccessibilityFocus = opts && 'onDidGainAccessibilityFocus' in opts ? opts.onDidGainAccessibilityFocus : null;
      let onDidLoseAccessibilityFocus = opts && 'onDidLoseAccessibilityFocus' in opts ? opts.onDidLoseAccessibilityFocus : null;
      let customSemanticsActions = opts && 'customSemanticsActions' in opts ? opts.customSemanticsActions : null;
      return new proxy_box.RenderSemanticsAnnotations.new({child: child, container: container, explicitChildNodes: explicitChildNodes, excludeSemantics: excludeSemantics, enabled: enabled, checked: checked, toggled: toggled, selected: selected, button: button, slider: slider, keyboardKey: keyboardKey, link: link, header: header, textField: textField, readOnly: readOnly, focusable: focusable, focused: focused, inMutuallyExclusiveGroup: inMutuallyExclusiveGroup, obscured: obscured, multiline: multiline, scopesRoute: scopesRoute, namesRoute: namesRoute, hidden: hidden, image: image, liveRegion: liveRegion, maxValueLength: maxValueLength, currentValueLength: currentValueLength, attributedLabel: attributedLabel, attributedValue: attributedValue, attributedIncreasedValue: attributedIncreasedValue, attributedDecreasedValue: attributedDecreasedValue, attributedHint: attributedHint, hintOverrides: hintOverrides, textDirection: textDirection, sortKey: sortKey, tagForChildren: tagForChildren, onTap: onTap, onDismiss: onDismiss, onLongPress: onLongPress, onScrollLeft: onScrollLeft, onScrollRight: onScrollRight, onScrollUp: onScrollUp, onScrollDown: onScrollDown, onIncrease: onIncrease, onDecrease: onDecrease, onCopy: onCopy, onCut: onCut, onPaste: onPaste, onMoveCursorForwardByCharacter: onMoveCursorForwardByCharacter, onMoveCursorBackwardByCharacter: onMoveCursorBackwardByCharacter, onMoveCursorForwardByWord: onMoveCursorForwardByWord, onMoveCursorBackwardByWord: onMoveCursorBackwardByWord, onSetSelection: onSetSelection, onSetText: onSetText, onDidGainAccessibilityFocus: onDidGainAccessibilityFocus, onDidLoseAccessibilityFocus: onDidLoseAccessibilityFocus, customSemanticsActions: customSemanticsActions});
    }
    get container() {
      return this[_container];
    }
    set container(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 3896, 12, "value != null");
      if (this.container === value) return;
      this[_container] = value;
      this.markNeedsSemanticsUpdate();
    }
    get explicitChildNodes() {
      return this[_explicitChildNodes];
    }
    set explicitChildNodes(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 3919, 12, "value != null");
      if (this[_explicitChildNodes] === value) return;
      this[_explicitChildNodes] = value;
      this.markNeedsSemanticsUpdate();
    }
    get excludeSemantics() {
      return this[_excludeSemantics];
    }
    set excludeSemantics(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 3935, 12, "value != null");
      if (this[_excludeSemantics] === value) return;
      this[_excludeSemantics] = value;
      this.markNeedsSemanticsUpdate();
    }
    get checked() {
      return this[_checked];
    }
    set checked(value) {
      if (this.checked == value) return;
      this[_checked] = value;
      this.markNeedsSemanticsUpdate();
    }
    get enabled() {
      return this[_enabled];
    }
    set enabled(value) {
      if (this.enabled == value) return;
      this[_enabled] = value;
      this.markNeedsSemanticsUpdate();
    }
    get selected() {
      return this[_selected];
    }
    set selected(value) {
      if (this.selected == value) return;
      this[_selected] = value;
      this.markNeedsSemanticsUpdate();
    }
    get button() {
      return this[_button];
    }
    set button(value) {
      if (this.button == value) return;
      this[_button] = value;
      this.markNeedsSemanticsUpdate();
    }
    get slider() {
      return this[_slider];
    }
    set slider(value) {
      if (this.slider == value) return;
      this[_slider] = value;
      this.markNeedsSemanticsUpdate();
    }
    get keyboardKey() {
      return this[_keyboardKey];
    }
    set keyboardKey(value) {
      if (this.keyboardKey == value) return;
      this[_keyboardKey] = value;
      this.markNeedsSemanticsUpdate();
    }
    get link() {
      return this[_link];
    }
    set link(value) {
      if (this.link == value) return;
      this[_link] = value;
      this.markNeedsSemanticsUpdate();
    }
    get header() {
      return this[_header];
    }
    set header(value) {
      if (this.header == value) return;
      this[_header] = value;
      this.markNeedsSemanticsUpdate();
    }
    get textField() {
      return this[_textField];
    }
    set textField(value) {
      if (this.textField == value) return;
      this[_textField] = value;
      this.markNeedsSemanticsUpdate();
    }
    get readOnly() {
      return this[_readOnly];
    }
    set readOnly(value) {
      if (this.readOnly == value) return;
      this[_readOnly] = value;
      this.markNeedsSemanticsUpdate();
    }
    get focusable() {
      return this[_focusable];
    }
    set focusable(value) {
      if (this.focusable == value) return;
      this[_focusable] = value;
      this.markNeedsSemanticsUpdate();
    }
    get focused() {
      return this[_focused];
    }
    set focused(value) {
      if (this.focused == value) return;
      this[_focused] = value;
      this.markNeedsSemanticsUpdate();
    }
    get inMutuallyExclusiveGroup() {
      return this[_inMutuallyExclusiveGroup];
    }
    set inMutuallyExclusiveGroup(value) {
      if (this.inMutuallyExclusiveGroup == value) return;
      this[_inMutuallyExclusiveGroup] = value;
      this.markNeedsSemanticsUpdate();
    }
    get obscured() {
      return this[_obscured];
    }
    set obscured(value) {
      if (this.obscured == value) return;
      this[_obscured] = value;
      this.markNeedsSemanticsUpdate();
    }
    get multiline() {
      return this[_multiline];
    }
    set multiline(value) {
      if (this.multiline == value) return;
      this[_multiline] = value;
      this.markNeedsSemanticsUpdate();
    }
    get scopesRoute() {
      return this[_scopesRoute];
    }
    set scopesRoute(value) {
      if (this.scopesRoute == value) return;
      this[_scopesRoute] = value;
      this.markNeedsSemanticsUpdate();
    }
    get namesRoute() {
      return this[_namesRoute];
    }
    set namesRoute(value) {
      if (this[_namesRoute] == value) return;
      this[_namesRoute] = value;
      this.markNeedsSemanticsUpdate();
    }
    get hidden() {
      return this[_hidden];
    }
    set hidden(value) {
      if (this.hidden == value) return;
      this[_hidden] = value;
      this.markNeedsSemanticsUpdate();
    }
    get image() {
      return this[_image];
    }
    set image(value) {
      if (this[_image] == value) return;
      this[_image] = value;
    }
    get liveRegion() {
      return this[_liveRegion];
    }
    set liveRegion(value) {
      if (this[_liveRegion] == value) return;
      this[_liveRegion] = value;
      this.markNeedsSemanticsUpdate();
    }
    get maxValueLength() {
      return this[_maxValueLength];
    }
    set maxValueLength(value) {
      if (this[_maxValueLength] == value) return;
      this[_maxValueLength] = value;
      this.markNeedsSemanticsUpdate();
    }
    get currentValueLength() {
      return this[_currentValueLength];
    }
    set currentValueLength(value) {
      if (this[_currentValueLength] == value) return;
      this[_currentValueLength] = value;
      this.markNeedsSemanticsUpdate();
    }
    get toggled() {
      return this[_toggled];
    }
    set toggled(value) {
      if (this[_toggled] == value) return;
      this[_toggled] = value;
      this.markNeedsSemanticsUpdate();
    }
    get attributedLabel() {
      return this[_attributedLabel];
    }
    set attributedLabel(value) {
      if (dart.equals(this[_attributedLabel], value)) return;
      this[_attributedLabel] = value;
      this.markNeedsSemanticsUpdate();
    }
    get attributedValue() {
      return this[_attributedValue];
    }
    set attributedValue(value) {
      if (dart.equals(this[_attributedValue], value)) return;
      this[_attributedValue] = value;
      this.markNeedsSemanticsUpdate();
    }
    get attributedIncreasedValue() {
      return this[_attributedIncreasedValue];
    }
    set attributedIncreasedValue(value) {
      if (dart.equals(this[_attributedIncreasedValue], value)) return;
      this[_attributedIncreasedValue] = value;
      this.markNeedsSemanticsUpdate();
    }
    get attributedDecreasedValue() {
      return this[_attributedDecreasedValue];
    }
    set attributedDecreasedValue(value) {
      if (dart.equals(this[_attributedDecreasedValue], value)) return;
      this[_attributedDecreasedValue] = value;
      this.markNeedsSemanticsUpdate();
    }
    get attributedHint() {
      return this[_attributedHint];
    }
    set attributedHint(value) {
      if (dart.equals(this[_attributedHint], value)) return;
      this[_attributedHint] = value;
      this.markNeedsSemanticsUpdate();
    }
    get hintOverrides() {
      return this[_hintOverrides];
    }
    set hintOverrides(value) {
      if (dart.equals(this[_hintOverrides], value)) return;
      this[_hintOverrides] = value;
      this.markNeedsSemanticsUpdate();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this.textDirection == value) return;
      this[_textDirection] = value;
      this.markNeedsSemanticsUpdate();
    }
    get sortKey() {
      return this[_sortKey];
    }
    set sortKey(value) {
      if (dart.equals(this.sortKey, value)) return;
      this[_sortKey] = value;
      this.markNeedsSemanticsUpdate();
    }
    get tagForChildren() {
      return this[_tagForChildren];
    }
    set tagForChildren(value) {
      if (dart.equals(this[_tagForChildren], value)) return;
      this.markNeedsSemanticsUpdate();
      this[_tagForChildren] = value;
    }
    get onTap() {
      return this[_onTap];
    }
    set onTap(handler) {
      if (dart.equals(this[_onTap], handler)) return;
      let hadValue = this[_onTap] != null;
      this[_onTap] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onDismiss() {
      return this[_onDismiss];
    }
    set onDismiss(handler) {
      if (dart.equals(this[_onDismiss], handler)) return;
      let hadValue = this[_onDismiss] != null;
      this[_onDismiss] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onLongPress() {
      return this[_onLongPress];
    }
    set onLongPress(handler) {
      if (dart.equals(this[_onLongPress], handler)) return;
      let hadValue = this[_onLongPress] != null;
      this[_onLongPress] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onScrollLeft() {
      return this[_onScrollLeft];
    }
    set onScrollLeft(handler) {
      if (dart.equals(this[_onScrollLeft], handler)) return;
      let hadValue = this[_onScrollLeft] != null;
      this[_onScrollLeft] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onScrollRight() {
      return this[_onScrollRight];
    }
    set onScrollRight(handler) {
      if (dart.equals(this[_onScrollRight], handler)) return;
      let hadValue = this[_onScrollRight] != null;
      this[_onScrollRight] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onScrollUp() {
      return this[_onScrollUp];
    }
    set onScrollUp(handler) {
      if (dart.equals(this[_onScrollUp], handler)) return;
      let hadValue = this[_onScrollUp] != null;
      this[_onScrollUp] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onScrollDown() {
      return this[_onScrollDown];
    }
    set onScrollDown(handler) {
      if (dart.equals(this[_onScrollDown], handler)) return;
      let hadValue = this[_onScrollDown] != null;
      this[_onScrollDown] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onIncrease() {
      return this[_onIncrease];
    }
    set onIncrease(handler) {
      if (dart.equals(this[_onIncrease], handler)) return;
      let hadValue = this[_onIncrease] != null;
      this[_onIncrease] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onDecrease() {
      return this[_onDecrease];
    }
    set onDecrease(handler) {
      if (dart.equals(this[_onDecrease], handler)) return;
      let hadValue = this[_onDecrease] != null;
      this[_onDecrease] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onCopy() {
      return this[_onCopy];
    }
    set onCopy(handler) {
      if (dart.equals(this[_onCopy], handler)) return;
      let hadValue = this[_onCopy] != null;
      this[_onCopy] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onCut() {
      return this[_onCut];
    }
    set onCut(handler) {
      if (dart.equals(this[_onCut], handler)) return;
      let hadValue = this[_onCut] != null;
      this[_onCut] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onPaste() {
      return this[_onPaste];
    }
    set onPaste(handler) {
      if (dart.equals(this[_onPaste], handler)) return;
      let hadValue = this[_onPaste] != null;
      this[_onPaste] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onMoveCursorForwardByCharacter() {
      return this[_onMoveCursorForwardByCharacter];
    }
    set onMoveCursorForwardByCharacter(handler) {
      if (dart.equals(this[_onMoveCursorForwardByCharacter], handler)) return;
      let hadValue = this[_onMoveCursorForwardByCharacter] != null;
      this[_onMoveCursorForwardByCharacter] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onMoveCursorBackwardByCharacter() {
      return this[_onMoveCursorBackwardByCharacter];
    }
    set onMoveCursorBackwardByCharacter(handler) {
      if (dart.equals(this[_onMoveCursorBackwardByCharacter], handler)) return;
      let hadValue = this[_onMoveCursorBackwardByCharacter] != null;
      this[_onMoveCursorBackwardByCharacter] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onMoveCursorForwardByWord() {
      return this[_onMoveCursorForwardByWord];
    }
    set onMoveCursorForwardByWord(handler) {
      if (dart.equals(this[_onMoveCursorForwardByWord], handler)) return;
      let hadValue = this[_onMoveCursorForwardByWord] != null;
      this[_onMoveCursorForwardByWord] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onMoveCursorBackwardByWord() {
      return this[_onMoveCursorBackwardByWord];
    }
    set onMoveCursorBackwardByWord(handler) {
      if (dart.equals(this[_onMoveCursorBackwardByWord], handler)) return;
      let hadValue = this[_onMoveCursorBackwardByWord] != null;
      this[_onMoveCursorBackwardByWord] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onSetSelection() {
      return this[_onSetSelection];
    }
    set onSetSelection(handler) {
      if (dart.equals(this[_onSetSelection], handler)) return;
      let hadValue = this[_onSetSelection] != null;
      this[_onSetSelection] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onSetText() {
      return this[_onSetText];
    }
    set onSetText(handler) {
      if (dart.equals(this[_onSetText], handler)) return;
      let hadValue = this[_onSetText] != null;
      this[_onSetText] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onDidGainAccessibilityFocus() {
      return this[_onDidGainAccessibilityFocus];
    }
    set onDidGainAccessibilityFocus(handler) {
      if (dart.equals(this[_onDidGainAccessibilityFocus], handler)) return;
      let hadValue = this[_onDidGainAccessibilityFocus] != null;
      this[_onDidGainAccessibilityFocus] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get onDidLoseAccessibilityFocus() {
      return this[_onDidLoseAccessibilityFocus];
    }
    set onDidLoseAccessibilityFocus(handler) {
      if (dart.equals(this[_onDidLoseAccessibilityFocus], handler)) return;
      let hadValue = this[_onDidLoseAccessibilityFocus] != null;
      this[_onDidLoseAccessibilityFocus] = handler;
      if (handler != null !== hadValue) this.markNeedsSemanticsUpdate();
    }
    get customSemanticsActions() {
      return this[_customSemanticsActions];
    }
    set customSemanticsActions(value) {
      if (dart.equals(this[_customSemanticsActions], value)) return;
      this[_customSemanticsActions] = value;
      this.markNeedsSemanticsUpdate();
    }
    visitChildrenForSemantics(visitor) {
      if (this.excludeSemantics) return;
      super.visitChildrenForSemantics(visitor);
    }
    describeSemanticsConfiguration(config) {
      super.describeSemanticsConfiguration(config);
      config.isSemanticBoundary = this.container;
      config.explicitChildNodes = this.explicitChildNodes;
      if (!(this.scopesRoute === true && this.explicitChildNodes === true || this.scopesRoute !== true)) dart.assertFailed("explicitChildNodes must be set to true if scopes route is true", I[1], 4732, 7, "(scopesRoute == true && explicitChildNodes == true) || scopesRoute != true");
      if (!!(this.toggled === true && this.checked === true)) dart.assertFailed("A semantics node cannot be toggled and checked at the same time", I[1], 4736, 7, "!(toggled == true && checked == true)");
      if (this.enabled != null) config.isEnabled = this.enabled;
      if (this.checked != null) config.isChecked = this.checked;
      if (this.toggled != null) config.isToggled = this.toggled;
      if (this.selected != null) config.isSelected = dart.nullCheck(this.selected);
      if (this.button != null) config.isButton = dart.nullCheck(this.button);
      if (this.link != null) config.isLink = dart.nullCheck(this.link);
      if (this.slider != null) config.isSlider = dart.nullCheck(this.slider);
      if (this.keyboardKey != null) config.isKeyboardKey = dart.nullCheck(this.keyboardKey);
      if (this.header != null) config.isHeader = dart.nullCheck(this.header);
      if (this.textField != null) config.isTextField = dart.nullCheck(this.textField);
      if (this.readOnly != null) config.isReadOnly = dart.nullCheck(this.readOnly);
      if (this.focusable != null) config.isFocusable = dart.nullCheck(this.focusable);
      if (this.focused != null) config.isFocused = dart.nullCheck(this.focused);
      if (this.inMutuallyExclusiveGroup != null) config.isInMutuallyExclusiveGroup = dart.nullCheck(this.inMutuallyExclusiveGroup);
      if (this.obscured != null) config.isObscured = dart.nullCheck(this.obscured);
      if (this.multiline != null) config.isMultiline = dart.nullCheck(this.multiline);
      if (this.hidden != null) config.isHidden = dart.nullCheck(this.hidden);
      if (this.image != null) config.isImage = dart.nullCheck(this.image);
      if (this.attributedLabel != null) config.attributedLabel = dart.nullCheck(this.attributedLabel);
      if (this.attributedValue != null) config.attributedValue = dart.nullCheck(this.attributedValue);
      if (this.attributedIncreasedValue != null) config.attributedIncreasedValue = dart.nullCheck(this.attributedIncreasedValue);
      if (this.attributedDecreasedValue != null) config.attributedDecreasedValue = dart.nullCheck(this.attributedDecreasedValue);
      if (this.attributedHint != null) config.attributedHint = dart.nullCheck(this.attributedHint);
      if (this.hintOverrides != null && dart.nullCheck(this.hintOverrides).isNotEmpty) config.hintOverrides = this.hintOverrides;
      if (this.scopesRoute != null) config.scopesRoute = dart.nullCheck(this.scopesRoute);
      if (this.namesRoute != null) config.namesRoute = dart.nullCheck(this.namesRoute);
      if (this.liveRegion != null) config.liveRegion = dart.nullCheck(this.liveRegion);
      if (this.maxValueLength != null) {
        config.maxValueLength = this.maxValueLength;
      }
      if (this.currentValueLength != null) {
        config.currentValueLength = this.currentValueLength;
      }
      if (this.textDirection != null) config.textDirection = this.textDirection;
      if (this.sortKey != null) config.sortKey = this.sortKey;
      if (this.tagForChildren != null) config.addTagForChildren(dart.nullCheck(this.tagForChildren));
      if (this.onTap != null) config.onTap = dart.bind(this, _performTap);
      if (this.onLongPress != null) config.onLongPress = dart.bind(this, _performLongPress);
      if (this.onDismiss != null) config.onDismiss = dart.bind(this, _performDismiss);
      if (this.onScrollLeft != null) config.onScrollLeft = dart.bind(this, _performScrollLeft);
      if (this.onScrollRight != null) config.onScrollRight = dart.bind(this, _performScrollRight);
      if (this.onScrollUp != null) config.onScrollUp = dart.bind(this, _performScrollUp);
      if (this.onScrollDown != null) config.onScrollDown = dart.bind(this, _performScrollDown);
      if (this.onIncrease != null) config.onIncrease = dart.bind(this, _performIncrease);
      if (this.onDecrease != null) config.onDecrease = dart.bind(this, _performDecrease);
      if (this.onCopy != null) config.onCopy = dart.bind(this, _performCopy);
      if (this.onCut != null) config.onCut = dart.bind(this, _performCut);
      if (this.onPaste != null) config.onPaste = dart.bind(this, _performPaste);
      if (this.onMoveCursorForwardByCharacter != null) config.onMoveCursorForwardByCharacter = dart.bind(this, _performMoveCursorForwardByCharacter);
      if (this.onMoveCursorBackwardByCharacter != null) config.onMoveCursorBackwardByCharacter = dart.bind(this, _performMoveCursorBackwardByCharacter);
      if (this.onMoveCursorForwardByWord != null) config.onMoveCursorForwardByWord = dart.bind(this, _performMoveCursorForwardByWord);
      if (this.onMoveCursorBackwardByWord != null) config.onMoveCursorBackwardByWord = dart.bind(this, _performMoveCursorBackwardByWord);
      if (this.onSetSelection != null) config.onSetSelection = dart.bind(this, _performSetSelection);
      if (this.onSetText != null) config.onSetText = dart.bind(this, _performSetText);
      if (this.onDidGainAccessibilityFocus != null) config.onDidGainAccessibilityFocus = dart.bind(this, _performDidGainAccessibilityFocus);
      if (this.onDidLoseAccessibilityFocus != null) config.onDidLoseAccessibilityFocus = dart.bind(this, _performDidLoseAccessibilityFocus);
      if (this.customSemanticsActions != null) config.customSemanticsActions = dart.nullCheck(this[_customSemanticsActions]);
    }
    [_performTap]() {
      let t2;
      t2 = this.onTap;
      t2 == null ? null : t2();
    }
    [_performLongPress]() {
      let t2;
      t2 = this.onLongPress;
      t2 == null ? null : t2();
    }
    [_performDismiss]() {
      let t2;
      t2 = this.onDismiss;
      t2 == null ? null : t2();
    }
    [_performScrollLeft]() {
      let t2;
      t2 = this.onScrollLeft;
      t2 == null ? null : t2();
    }
    [_performScrollRight]() {
      let t2;
      t2 = this.onScrollRight;
      t2 == null ? null : t2();
    }
    [_performScrollUp]() {
      let t2;
      t2 = this.onScrollUp;
      t2 == null ? null : t2();
    }
    [_performScrollDown]() {
      let t2;
      t2 = this.onScrollDown;
      t2 == null ? null : t2();
    }
    [_performIncrease]() {
      let t2;
      t2 = this.onIncrease;
      t2 == null ? null : t2();
    }
    [_performDecrease]() {
      let t2;
      t2 = this.onDecrease;
      t2 == null ? null : t2();
    }
    [_performCopy]() {
      let t2;
      t2 = this.onCopy;
      t2 == null ? null : t2();
    }
    [_performCut]() {
      let t2;
      t2 = this.onCut;
      t2 == null ? null : t2();
    }
    [_performPaste]() {
      let t2;
      t2 = this.onPaste;
      t2 == null ? null : t2();
    }
    [_performMoveCursorForwardByCharacter](extendSelection) {
      let t2;
      t2 = this.onMoveCursorForwardByCharacter;
      t2 == null ? null : t2(extendSelection);
    }
    [_performMoveCursorBackwardByCharacter](extendSelection) {
      let t2;
      t2 = this.onMoveCursorBackwardByCharacter;
      t2 == null ? null : t2(extendSelection);
    }
    [_performMoveCursorForwardByWord](extendSelection) {
      let t2;
      t2 = this.onMoveCursorForwardByWord;
      t2 == null ? null : t2(extendSelection);
    }
    [_performMoveCursorBackwardByWord](extendSelection) {
      let t2;
      t2 = this.onMoveCursorBackwardByWord;
      t2 == null ? null : t2(extendSelection);
    }
    [_performSetSelection](selection) {
      let t2;
      t2 = this.onSetSelection;
      t2 == null ? null : t2(selection);
    }
    [_performSetText](text) {
      let t2;
      t2 = this.onSetText;
      t2 == null ? null : t2(text);
    }
    [_performDidGainAccessibilityFocus]() {
      let t2;
      t2 = this.onDidGainAccessibilityFocus;
      t2 == null ? null : t2();
    }
    [_performDidLoseAccessibilityFocus]() {
      let t2;
      t2 = this.onDidLoseAccessibilityFocus;
      t2 == null ? null : t2();
    }
  };
  (proxy_box.RenderSemanticsAnnotations.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let container = opts && 'container' in opts ? opts.container : false;
    let explicitChildNodes = opts && 'explicitChildNodes' in opts ? opts.explicitChildNodes : false;
    let excludeSemantics = opts && 'excludeSemantics' in opts ? opts.excludeSemantics : false;
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let checked = opts && 'checked' in opts ? opts.checked : null;
    let toggled = opts && 'toggled' in opts ? opts.toggled : null;
    let selected = opts && 'selected' in opts ? opts.selected : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let slider = opts && 'slider' in opts ? opts.slider : null;
    let keyboardKey = opts && 'keyboardKey' in opts ? opts.keyboardKey : null;
    let link = opts && 'link' in opts ? opts.link : null;
    let header = opts && 'header' in opts ? opts.header : null;
    let textField = opts && 'textField' in opts ? opts.textField : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
    let focusable = opts && 'focusable' in opts ? opts.focusable : null;
    let focused = opts && 'focused' in opts ? opts.focused : null;
    let inMutuallyExclusiveGroup = opts && 'inMutuallyExclusiveGroup' in opts ? opts.inMutuallyExclusiveGroup : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : null;
    let multiline = opts && 'multiline' in opts ? opts.multiline : null;
    let scopesRoute = opts && 'scopesRoute' in opts ? opts.scopesRoute : null;
    let namesRoute = opts && 'namesRoute' in opts ? opts.namesRoute : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let liveRegion = opts && 'liveRegion' in opts ? opts.liveRegion : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let attributedLabel = opts && 'attributedLabel' in opts ? opts.attributedLabel : null;
    let attributedValue = opts && 'attributedValue' in opts ? opts.attributedValue : null;
    let attributedIncreasedValue = opts && 'attributedIncreasedValue' in opts ? opts.attributedIncreasedValue : null;
    let attributedDecreasedValue = opts && 'attributedDecreasedValue' in opts ? opts.attributedDecreasedValue : null;
    let attributedHint = opts && 'attributedHint' in opts ? opts.attributedHint : null;
    let hintOverrides = opts && 'hintOverrides' in opts ? opts.hintOverrides : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
    let tagForChildren = opts && 'tagForChildren' in opts ? opts.tagForChildren : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onDismiss = opts && 'onDismiss' in opts ? opts.onDismiss : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onScrollLeft = opts && 'onScrollLeft' in opts ? opts.onScrollLeft : null;
    let onScrollRight = opts && 'onScrollRight' in opts ? opts.onScrollRight : null;
    let onScrollUp = opts && 'onScrollUp' in opts ? opts.onScrollUp : null;
    let onScrollDown = opts && 'onScrollDown' in opts ? opts.onScrollDown : null;
    let onIncrease = opts && 'onIncrease' in opts ? opts.onIncrease : null;
    let onDecrease = opts && 'onDecrease' in opts ? opts.onDecrease : null;
    let onCopy = opts && 'onCopy' in opts ? opts.onCopy : null;
    let onCut = opts && 'onCut' in opts ? opts.onCut : null;
    let onPaste = opts && 'onPaste' in opts ? opts.onPaste : null;
    let onMoveCursorForwardByCharacter = opts && 'onMoveCursorForwardByCharacter' in opts ? opts.onMoveCursorForwardByCharacter : null;
    let onMoveCursorBackwardByCharacter = opts && 'onMoveCursorBackwardByCharacter' in opts ? opts.onMoveCursorBackwardByCharacter : null;
    let onMoveCursorForwardByWord = opts && 'onMoveCursorForwardByWord' in opts ? opts.onMoveCursorForwardByWord : null;
    let onMoveCursorBackwardByWord = opts && 'onMoveCursorBackwardByWord' in opts ? opts.onMoveCursorBackwardByWord : null;
    let onSetSelection = opts && 'onSetSelection' in opts ? opts.onSetSelection : null;
    let onSetText = opts && 'onSetText' in opts ? opts.onSetText : null;
    let onDidGainAccessibilityFocus = opts && 'onDidGainAccessibilityFocus' in opts ? opts.onDidGainAccessibilityFocus : null;
    let onDidLoseAccessibilityFocus = opts && 'onDidLoseAccessibilityFocus' in opts ? opts.onDidLoseAccessibilityFocus : null;
    let customSemanticsActions = opts && 'customSemanticsActions' in opts ? opts.customSemanticsActions : null;
    if (!(container !== null)) dart.assertFailed(null, I[1], 3827, 15, "container != null");
    this[_container] = container;
    this[_explicitChildNodes] = explicitChildNodes;
    this[_excludeSemantics] = excludeSemantics;
    this[_enabled] = enabled;
    this[_checked] = checked;
    this[_toggled] = toggled;
    this[_selected] = selected;
    this[_button] = button;
    this[_slider] = slider;
    this[_keyboardKey] = keyboardKey;
    this[_link] = link;
    this[_header] = header;
    this[_textField] = textField;
    this[_readOnly] = readOnly;
    this[_focusable] = focusable;
    this[_focused] = focused;
    this[_inMutuallyExclusiveGroup] = inMutuallyExclusiveGroup;
    this[_obscured] = obscured;
    this[_multiline] = multiline;
    this[_scopesRoute] = scopesRoute;
    this[_namesRoute] = namesRoute;
    this[_liveRegion] = liveRegion;
    this[_maxValueLength] = maxValueLength;
    this[_currentValueLength] = currentValueLength;
    this[_hidden] = hidden;
    this[_image] = image;
    this[_onDismiss] = onDismiss;
    this[_attributedLabel] = attributedLabel;
    this[_attributedValue] = attributedValue;
    this[_attributedIncreasedValue] = attributedIncreasedValue;
    this[_attributedDecreasedValue] = attributedDecreasedValue;
    this[_attributedHint] = attributedHint;
    this[_hintOverrides] = hintOverrides;
    this[_textDirection] = textDirection;
    this[_sortKey] = sortKey;
    this[_tagForChildren] = tagForChildren;
    this[_onTap] = onTap;
    this[_onLongPress] = onLongPress;
    this[_onScrollLeft] = onScrollLeft;
    this[_onScrollRight] = onScrollRight;
    this[_onScrollUp] = onScrollUp;
    this[_onScrollDown] = onScrollDown;
    this[_onIncrease] = onIncrease;
    this[_onDecrease] = onDecrease;
    this[_onCopy] = onCopy;
    this[_onCut] = onCut;
    this[_onPaste] = onPaste;
    this[_onMoveCursorForwardByCharacter] = onMoveCursorForwardByCharacter;
    this[_onMoveCursorBackwardByCharacter] = onMoveCursorBackwardByCharacter;
    this[_onMoveCursorForwardByWord] = onMoveCursorForwardByWord;
    this[_onMoveCursorBackwardByWord] = onMoveCursorBackwardByWord;
    this[_onSetSelection] = onSetSelection;
    this[_onSetText] = onSetText;
    this[_onDidGainAccessibilityFocus] = onDidGainAccessibilityFocus;
    this[_onDidLoseAccessibilityFocus] = onDidLoseAccessibilityFocus;
    this[_customSemanticsActions] = customSemanticsActions;
    proxy_box.RenderSemanticsAnnotations.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderSemanticsAnnotations.prototype;
  dart.addTypeTests(proxy_box.RenderSemanticsAnnotations);
  dart.addTypeCaches(proxy_box.RenderSemanticsAnnotations);
  dart.setMethodSignature(proxy_box.RenderSemanticsAnnotations, () => ({
    __proto__: dart.getMethods(proxy_box.RenderSemanticsAnnotations.__proto__),
    [_performTap]: dart.fnType(dart.void, []),
    [_performLongPress]: dart.fnType(dart.void, []),
    [_performDismiss]: dart.fnType(dart.void, []),
    [_performScrollLeft]: dart.fnType(dart.void, []),
    [_performScrollRight]: dart.fnType(dart.void, []),
    [_performScrollUp]: dart.fnType(dart.void, []),
    [_performScrollDown]: dart.fnType(dart.void, []),
    [_performIncrease]: dart.fnType(dart.void, []),
    [_performDecrease]: dart.fnType(dart.void, []),
    [_performCopy]: dart.fnType(dart.void, []),
    [_performCut]: dart.fnType(dart.void, []),
    [_performPaste]: dart.fnType(dart.void, []),
    [_performMoveCursorForwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_performMoveCursorBackwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_performMoveCursorForwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_performMoveCursorBackwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_performSetSelection]: dart.fnType(dart.void, [text_editing.TextSelection]),
    [_performSetText]: dart.fnType(dart.void, [core.String]),
    [_performDidGainAccessibilityFocus]: dart.fnType(dart.void, []),
    [_performDidLoseAccessibilityFocus]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(proxy_box.RenderSemanticsAnnotations, () => ({
    __proto__: dart.getGetters(proxy_box.RenderSemanticsAnnotations.__proto__),
    container: core.bool,
    explicitChildNodes: core.bool,
    excludeSemantics: core.bool,
    checked: dart.nullable(core.bool),
    enabled: dart.nullable(core.bool),
    selected: dart.nullable(core.bool),
    button: dart.nullable(core.bool),
    slider: dart.nullable(core.bool),
    keyboardKey: dart.nullable(core.bool),
    link: dart.nullable(core.bool),
    header: dart.nullable(core.bool),
    textField: dart.nullable(core.bool),
    readOnly: dart.nullable(core.bool),
    focusable: dart.nullable(core.bool),
    focused: dart.nullable(core.bool),
    inMutuallyExclusiveGroup: dart.nullable(core.bool),
    obscured: dart.nullable(core.bool),
    multiline: dart.nullable(core.bool),
    scopesRoute: dart.nullable(core.bool),
    namesRoute: dart.nullable(core.bool),
    hidden: dart.nullable(core.bool),
    image: dart.nullable(core.bool),
    liveRegion: dart.nullable(core.bool),
    maxValueLength: dart.nullable(core.int),
    currentValueLength: dart.nullable(core.int),
    toggled: dart.nullable(core.bool),
    attributedLabel: dart.nullable(semantics.AttributedString),
    attributedValue: dart.nullable(semantics.AttributedString),
    attributedIncreasedValue: dart.nullable(semantics.AttributedString),
    attributedDecreasedValue: dart.nullable(semantics.AttributedString),
    attributedHint: dart.nullable(semantics.AttributedString),
    hintOverrides: dart.nullable(semantics.SemanticsHintOverrides),
    textDirection: dart.nullable(ui.TextDirection),
    sortKey: dart.nullable(semantics.SemanticsSortKey),
    tagForChildren: dart.nullable(semantics.SemanticsTag),
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onDismiss: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onScrollLeft: dart.nullable(dart.fnType(dart.void, [])),
    onScrollRight: dart.nullable(dart.fnType(dart.void, [])),
    onScrollUp: dart.nullable(dart.fnType(dart.void, [])),
    onScrollDown: dart.nullable(dart.fnType(dart.void, [])),
    onIncrease: dart.nullable(dart.fnType(dart.void, [])),
    onDecrease: dart.nullable(dart.fnType(dart.void, [])),
    onCopy: dart.nullable(dart.fnType(dart.void, [])),
    onCut: dart.nullable(dart.fnType(dart.void, [])),
    onPaste: dart.nullable(dart.fnType(dart.void, [])),
    onMoveCursorForwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorForwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onSetSelection: dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection])),
    onSetText: dart.nullable(dart.fnType(dart.void, [core.String])),
    onDidGainAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    onDidLoseAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    customSemanticsActions: dart.nullable(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])))
  }));
  dart.setSetterSignature(proxy_box.RenderSemanticsAnnotations, () => ({
    __proto__: dart.getSetters(proxy_box.RenderSemanticsAnnotations.__proto__),
    container: core.bool,
    explicitChildNodes: core.bool,
    excludeSemantics: core.bool,
    checked: dart.nullable(core.bool),
    enabled: dart.nullable(core.bool),
    selected: dart.nullable(core.bool),
    button: dart.nullable(core.bool),
    slider: dart.nullable(core.bool),
    keyboardKey: dart.nullable(core.bool),
    link: dart.nullable(core.bool),
    header: dart.nullable(core.bool),
    textField: dart.nullable(core.bool),
    readOnly: dart.nullable(core.bool),
    focusable: dart.nullable(core.bool),
    focused: dart.nullable(core.bool),
    inMutuallyExclusiveGroup: dart.nullable(core.bool),
    obscured: dart.nullable(core.bool),
    multiline: dart.nullable(core.bool),
    scopesRoute: dart.nullable(core.bool),
    namesRoute: dart.nullable(core.bool),
    hidden: dart.nullable(core.bool),
    image: dart.nullable(core.bool),
    liveRegion: dart.nullable(core.bool),
    maxValueLength: dart.nullable(core.int),
    currentValueLength: dart.nullable(core.int),
    toggled: dart.nullable(core.bool),
    attributedLabel: dart.nullable(semantics.AttributedString),
    attributedValue: dart.nullable(semantics.AttributedString),
    attributedIncreasedValue: dart.nullable(semantics.AttributedString),
    attributedDecreasedValue: dart.nullable(semantics.AttributedString),
    attributedHint: dart.nullable(semantics.AttributedString),
    hintOverrides: dart.nullable(semantics.SemanticsHintOverrides),
    textDirection: dart.nullable(ui.TextDirection),
    sortKey: dart.nullable(semantics.SemanticsSortKey),
    tagForChildren: dart.nullable(semantics.SemanticsTag),
    onTap: dart.nullable(dart.fnType(dart.void, [])),
    onDismiss: dart.nullable(dart.fnType(dart.void, [])),
    onLongPress: dart.nullable(dart.fnType(dart.void, [])),
    onScrollLeft: dart.nullable(dart.fnType(dart.void, [])),
    onScrollRight: dart.nullable(dart.fnType(dart.void, [])),
    onScrollUp: dart.nullable(dart.fnType(dart.void, [])),
    onScrollDown: dart.nullable(dart.fnType(dart.void, [])),
    onIncrease: dart.nullable(dart.fnType(dart.void, [])),
    onDecrease: dart.nullable(dart.fnType(dart.void, [])),
    onCopy: dart.nullable(dart.fnType(dart.void, [])),
    onCut: dart.nullable(dart.fnType(dart.void, [])),
    onPaste: dart.nullable(dart.fnType(dart.void, [])),
    onMoveCursorForwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByCharacter: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorForwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByWord: dart.nullable(dart.fnType(dart.void, [core.bool])),
    onSetSelection: dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection])),
    onSetText: dart.nullable(dart.fnType(dart.void, [core.String])),
    onDidGainAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    onDidLoseAccessibilityFocus: dart.nullable(dart.fnType(dart.void, [])),
    customSemanticsActions: dart.nullable(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])))
  }));
  dart.setLibraryUri(proxy_box.RenderSemanticsAnnotations, I[0]);
  dart.setFieldSignature(proxy_box.RenderSemanticsAnnotations, () => ({
    __proto__: dart.getFields(proxy_box.RenderSemanticsAnnotations.__proto__),
    [_container]: dart.fieldType(core.bool),
    [_explicitChildNodes]: dart.fieldType(core.bool),
    [_excludeSemantics]: dart.fieldType(core.bool),
    [_checked]: dart.fieldType(dart.nullable(core.bool)),
    [_enabled]: dart.fieldType(dart.nullable(core.bool)),
    [_selected]: dart.fieldType(dart.nullable(core.bool)),
    [_button]: dart.fieldType(dart.nullable(core.bool)),
    [_slider]: dart.fieldType(dart.nullable(core.bool)),
    [_keyboardKey]: dart.fieldType(dart.nullable(core.bool)),
    [_link]: dart.fieldType(dart.nullable(core.bool)),
    [_header]: dart.fieldType(dart.nullable(core.bool)),
    [_textField]: dart.fieldType(dart.nullable(core.bool)),
    [_readOnly]: dart.fieldType(dart.nullable(core.bool)),
    [_focusable]: dart.fieldType(dart.nullable(core.bool)),
    [_focused]: dart.fieldType(dart.nullable(core.bool)),
    [_inMutuallyExclusiveGroup]: dart.fieldType(dart.nullable(core.bool)),
    [_obscured]: dart.fieldType(dart.nullable(core.bool)),
    [_multiline]: dart.fieldType(dart.nullable(core.bool)),
    [_scopesRoute]: dart.fieldType(dart.nullable(core.bool)),
    [_namesRoute]: dart.fieldType(dart.nullable(core.bool)),
    [_hidden]: dart.fieldType(dart.nullable(core.bool)),
    [_image]: dart.fieldType(dart.nullable(core.bool)),
    [_liveRegion]: dart.fieldType(dart.nullable(core.bool)),
    [_maxValueLength]: dart.fieldType(dart.nullable(core.int)),
    [_currentValueLength]: dart.fieldType(dart.nullable(core.int)),
    [_toggled]: dart.fieldType(dart.nullable(core.bool)),
    [_attributedLabel]: dart.fieldType(dart.nullable(semantics.AttributedString)),
    [_attributedValue]: dart.fieldType(dart.nullable(semantics.AttributedString)),
    [_attributedIncreasedValue]: dart.fieldType(dart.nullable(semantics.AttributedString)),
    [_attributedDecreasedValue]: dart.fieldType(dart.nullable(semantics.AttributedString)),
    [_attributedHint]: dart.fieldType(dart.nullable(semantics.AttributedString)),
    [_hintOverrides]: dart.fieldType(dart.nullable(semantics.SemanticsHintOverrides)),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_sortKey]: dart.fieldType(dart.nullable(semantics.SemanticsSortKey)),
    [_tagForChildren]: dart.fieldType(dart.nullable(semantics.SemanticsTag)),
    [_onTap]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDismiss]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onLongPress]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollLeft]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollRight]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollUp]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onScrollDown]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onIncrease]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDecrease]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onCopy]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onCut]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onPaste]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onMoveCursorForwardByCharacter]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorBackwardByCharacter]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorForwardByWord]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onMoveCursorBackwardByWord]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.bool]))),
    [_onSetSelection]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [text_editing.TextSelection]))),
    [_onSetText]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.String]))),
    [_onDidGainAccessibilityFocus]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_onDidLoseAccessibilityFocus]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_customSemanticsActions]: dart.fieldType(dart.nullable(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))))
  }));
  var _blocking = dart.privateName(proxy_box, "_blocking");
  proxy_box.RenderBlockSemantics = class RenderBlockSemantics extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let blocking = opts && 'blocking' in opts ? opts.blocking : true;
      return new proxy_box.RenderBlockSemantics.new({child: child, blocking: blocking});
    }
    get blocking() {
      return this[_blocking];
    }
    set blocking(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 4953, 12, "value != null");
      if (value === this[_blocking]) return;
      this[_blocking] = value;
      this.markNeedsSemanticsUpdate();
    }
    describeSemanticsConfiguration(config) {
      super.describeSemanticsConfiguration(config);
      config.isBlockingSemanticsOfPreviouslyPaintedNodes = this.blocking;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("blocking", this.blocking));
    }
  };
  (proxy_box.RenderBlockSemantics.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let blocking = opts && 'blocking' in opts ? opts.blocking : true;
    this[_blocking] = blocking;
    proxy_box.RenderBlockSemantics.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderBlockSemantics.prototype;
  dart.addTypeTests(proxy_box.RenderBlockSemantics);
  dart.addTypeCaches(proxy_box.RenderBlockSemantics);
  dart.setGetterSignature(proxy_box.RenderBlockSemantics, () => ({
    __proto__: dart.getGetters(proxy_box.RenderBlockSemantics.__proto__),
    blocking: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderBlockSemantics, () => ({
    __proto__: dart.getSetters(proxy_box.RenderBlockSemantics.__proto__),
    blocking: core.bool
  }));
  dart.setLibraryUri(proxy_box.RenderBlockSemantics, I[0]);
  dart.setFieldSignature(proxy_box.RenderBlockSemantics, () => ({
    __proto__: dart.getFields(proxy_box.RenderBlockSemantics.__proto__),
    [_blocking]: dart.fieldType(core.bool)
  }));
  proxy_box.RenderMergeSemantics = class RenderMergeSemantics extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderMergeSemantics.new({child: child});
    }
    describeSemanticsConfiguration(config) {
      let t2;
      super.describeSemanticsConfiguration(config);
      t2 = config;
      (() => {
        t2.isSemanticBoundary = true;
        t2.isMergingSemanticsOfDescendants = true;
        return t2;
      })();
    }
  };
  (proxy_box.RenderMergeSemantics.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    proxy_box.RenderMergeSemantics.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderMergeSemantics.prototype;
  dart.addTypeTests(proxy_box.RenderMergeSemantics);
  dart.addTypeCaches(proxy_box.RenderMergeSemantics);
  dart.setLibraryUri(proxy_box.RenderMergeSemantics, I[0]);
  var _excluding = dart.privateName(proxy_box, "_excluding");
  proxy_box.RenderExcludeSemantics = class RenderExcludeSemantics extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let excluding = opts && 'excluding' in opts ? opts.excluding : true;
      return new proxy_box.RenderExcludeSemantics.new({child: child, excluding: excluding});
    }
    get excluding() {
      return this[_excluding];
    }
    set excluding(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 5014, 12, "value != null");
      if (value === this[_excluding]) return;
      this[_excluding] = value;
      this.markNeedsSemanticsUpdate();
    }
    visitChildrenForSemantics(visitor) {
      if (this.excluding) return;
      super.visitChildrenForSemantics(visitor);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("excluding", this.excluding));
    }
  };
  (proxy_box.RenderExcludeSemantics.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let excluding = opts && 'excluding' in opts ? opts.excluding : true;
    this[_excluding] = excluding;
    proxy_box.RenderExcludeSemantics.__proto__.new.call(this, child);
    if (!(this[_excluding] !== null)) dart.assertFailed(null, I[1], 5007, 12, "_excluding != null");
  }).prototype = proxy_box.RenderExcludeSemantics.prototype;
  dart.addTypeTests(proxy_box.RenderExcludeSemantics);
  dart.addTypeCaches(proxy_box.RenderExcludeSemantics);
  dart.setGetterSignature(proxy_box.RenderExcludeSemantics, () => ({
    __proto__: dart.getGetters(proxy_box.RenderExcludeSemantics.__proto__),
    excluding: core.bool
  }));
  dart.setSetterSignature(proxy_box.RenderExcludeSemantics, () => ({
    __proto__: dart.getSetters(proxy_box.RenderExcludeSemantics.__proto__),
    excluding: core.bool
  }));
  dart.setLibraryUri(proxy_box.RenderExcludeSemantics, I[0]);
  dart.setFieldSignature(proxy_box.RenderExcludeSemantics, () => ({
    __proto__: dart.getFields(proxy_box.RenderExcludeSemantics.__proto__),
    [_excluding]: dart.fieldType(core.bool)
  }));
  var _index = dart.privateName(proxy_box, "_index");
  proxy_box.RenderIndexedSemantics = class RenderIndexedSemantics extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let index = opts && 'index' in opts ? opts.index : null;
      return new proxy_box.RenderIndexedSemantics.new({child: child, index: index});
    }
    get index() {
      return this[_index];
    }
    set index(value) {
      if (value === this.index) return;
      this[_index] = value;
      this.markNeedsSemanticsUpdate();
    }
    describeSemanticsConfiguration(config) {
      super.describeSemanticsConfiguration(config);
      config.indexInParent = this.index;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("index", this.index));
    }
  };
  (proxy_box.RenderIndexedSemantics.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let index = opts && 'index' in opts ? opts.index : null;
    if (!(index !== null)) dart.assertFailed(null, I[1], 5050, 15, "index != null");
    this[_index] = index;
    proxy_box.RenderIndexedSemantics.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderIndexedSemantics.prototype;
  dart.addTypeTests(proxy_box.RenderIndexedSemantics);
  dart.addTypeCaches(proxy_box.RenderIndexedSemantics);
  dart.setGetterSignature(proxy_box.RenderIndexedSemantics, () => ({
    __proto__: dart.getGetters(proxy_box.RenderIndexedSemantics.__proto__),
    index: core.int
  }));
  dart.setSetterSignature(proxy_box.RenderIndexedSemantics, () => ({
    __proto__: dart.getSetters(proxy_box.RenderIndexedSemantics.__proto__),
    index: core.int
  }));
  dart.setLibraryUri(proxy_box.RenderIndexedSemantics, I[0]);
  dart.setFieldSignature(proxy_box.RenderIndexedSemantics, () => ({
    __proto__: dart.getFields(proxy_box.RenderIndexedSemantics.__proto__),
    [_index]: dart.fieldType(core.int)
  }));
  var _previousLayoutSize = dart.privateName(proxy_box, "_previousLayoutSize");
  proxy_box.RenderLeaderLayer = class RenderLeaderLayer extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let link = opts && 'link' in opts ? opts.link : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderLeaderLayer.new({link: link, child: child});
    }
    get link() {
      return this[_link];
    }
    set link(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 5102, 12, "value != null");
      if (this[_link][$_equals](value)) return;
      this[_link].leaderSize = null;
      this[_link] = value;
      if (this[_previousLayoutSize] != null) {
        this[_link].leaderSize = this[_previousLayoutSize];
      }
      this.markNeedsPaint();
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    performLayout() {
      super.performLayout();
      this[_previousLayoutSize] = this.size;
      this.link.leaderSize = this.size;
    }
    paint(context, offset) {
      let t2;
      if (this.layer == null) {
        this.layer = new layer.LeaderLayer.new({link: this.link, offset: offset});
      } else {
        let leaderLayer = layer.LeaderLayer.as(dart.nullCheck(this.layer));
        t2 = leaderLayer;
        (() => {
          t2.link = this.link;
          t2.offset = offset;
          return t2;
        })();
      }
      context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), ui.Offset.zero);
      if (!(this.layer != null)) dart.assertFailed(null, I[1], 5139, 12, "layer != null");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLayerLink()).new("link", this.link));
    }
  };
  (proxy_box.RenderLeaderLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_previousLayoutSize] = null;
    if (!(link !== null)) dart.assertFailed(null, I[1], 5090, 15, "link != null");
    this[_link] = link;
    proxy_box.RenderLeaderLayer.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderLeaderLayer.prototype;
  dart.addTypeTests(proxy_box.RenderLeaderLayer);
  dart.addTypeCaches(proxy_box.RenderLeaderLayer);
  dart.setGetterSignature(proxy_box.RenderLeaderLayer, () => ({
    __proto__: dart.getGetters(proxy_box.RenderLeaderLayer.__proto__),
    link: layer.LayerLink
  }));
  dart.setSetterSignature(proxy_box.RenderLeaderLayer, () => ({
    __proto__: dart.getSetters(proxy_box.RenderLeaderLayer.__proto__),
    link: layer.LayerLink
  }));
  dart.setLibraryUri(proxy_box.RenderLeaderLayer, I[0]);
  dart.setFieldSignature(proxy_box.RenderLeaderLayer, () => ({
    __proto__: dart.getFields(proxy_box.RenderLeaderLayer.__proto__),
    [_link]: dart.fieldType(layer.LayerLink),
    [_previousLayoutSize]: dart.fieldType(dart.nullable(ui.Size))
  }));
  var _showWhenUnlinked = dart.privateName(proxy_box, "_showWhenUnlinked");
  var _offset = dart.privateName(proxy_box, "_offset");
  var _leaderAnchor = dart.privateName(proxy_box, "_leaderAnchor");
  var _followerAnchor = dart.privateName(proxy_box, "_followerAnchor");
  var Rect_bottom = dart.privateName(ui, "Rect.bottom");
  var Rect_right = dart.privateName(ui, "Rect.right");
  var Rect_top = dart.privateName(ui, "Rect.top");
  var Rect_left = dart.privateName(ui, "Rect.left");
  proxy_box.RenderFollowerLayer = class RenderFollowerLayer extends proxy_box.RenderProxyBox {
    static ['_#new#tearOff'](opts) {
      let link = opts && 'link' in opts ? opts.link : null;
      let showWhenUnlinked = opts && 'showWhenUnlinked' in opts ? opts.showWhenUnlinked : true;
      let offset = opts && 'offset' in opts ? opts.offset : C[35] || CT.C35;
      let leaderAnchor = opts && 'leaderAnchor' in opts ? opts.leaderAnchor : C[36] || CT.C36;
      let followerAnchor = opts && 'followerAnchor' in opts ? opts.followerAnchor : C[36] || CT.C36;
      let child = opts && 'child' in opts ? opts.child : null;
      return new proxy_box.RenderFollowerLayer.new({link: link, showWhenUnlinked: showWhenUnlinked, offset: offset, leaderAnchor: leaderAnchor, followerAnchor: followerAnchor, child: child});
    }
    get link() {
      return this[_link];
    }
    set link(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 5188, 12, "value != null");
      if (this[_link][$_equals](value)) return;
      this[_link] = value;
      this.markNeedsPaint();
    }
    get showWhenUnlinked() {
      return this[_showWhenUnlinked];
    }
    set showWhenUnlinked(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 5207, 12, "value != null");
      if (this[_showWhenUnlinked] === value) return;
      this[_showWhenUnlinked] = value;
      this.markNeedsPaint();
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 5219, 12, "value != null");
      if (this[_offset]._equals(value)) return;
      this[_offset] = value;
      this.markNeedsPaint();
    }
    get leaderAnchor() {
      return this[_leaderAnchor];
    }
    set leaderAnchor(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 5243, 12, "value != null");
      if (this[_leaderAnchor]._equals(value)) return;
      this[_leaderAnchor] = value;
      this.markNeedsPaint();
    }
    get followerAnchor() {
      return this[_followerAnchor];
    }
    set followerAnchor(value) {
      if (!(value !== null)) dart.assertFailed(null, I[1], 5259, 12, "value != null");
      if (this[_followerAnchor]._equals(value)) return;
      this[_followerAnchor] = value;
      this.markNeedsPaint();
    }
    detach() {
      this.layer = null;
      super.detach();
    }
    get alwaysNeedsCompositing() {
      return true;
    }
    get layer() {
      return T$.FollowerLayerN().as(super.layer);
    }
    set layer(value) {
      super.layer = value;
    }
    getCurrentTransform() {
      let t2, t2$;
      t2$ = (t2 = this.layer, t2 == null ? null : t2.getLastTransform());
      return t2$ == null ? vector_math_64.Matrix4.identity() : t2$;
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (!this.link.leaderConnected && !this.showWhenUnlinked) return false;
      return this.hitTestChildren(result, {position: position});
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return result.addWithPaintTransform({transform: this.getCurrentTransform(), position: position, hitTest: dart.fn((result, position) => super.hitTestChildren(result, {position: position}), T$.BoxHitTestResultAndOffsetTobool())});
    }
    paint(context, offset) {
      let t2;
      let leaderSize = this.link.leaderSize;
      if (!(this.link.leaderSize != null || !this.link.leaderConnected || this.leaderAnchor._equals(alignment.Alignment.topLeft))) dart.assertFailed(dart.str(this.link) + ": layer is linked to " + dart.str(this.link.debugLeader) + " but a valid leaderSize is not set. " + "leaderSize is required when leaderAnchor is not Alignment.topLeft " + "(current value is " + dart.str(this.leaderAnchor) + ").", I[1], 5316, 7, "link.leaderSize != null || (!link.leaderConnected || leaderAnchor == Alignment.topLeft)");
      let effectiveLinkedOffset = leaderSize == null ? this.offset : this.leaderAnchor.alongSize(leaderSize)['-'](this.followerAnchor.alongSize(this.size))['+'](this.offset);
      if (!(this.showWhenUnlinked !== null)) dart.assertFailed(null, I[1], 5324, 12, "showWhenUnlinked != null");
      if (this.layer == null) {
        this.layer = new layer.FollowerLayer.new({link: this.link, showWhenUnlinked: this.showWhenUnlinked, linkedOffset: effectiveLinkedOffset, unlinkedOffset: offset});
      } else {
        t2 = this.layer;
        t2 == null ? null : (() => {
          t2.link = this.link;
          t2.showWhenUnlinked = this.showWhenUnlinked;
          t2.linkedOffset = effectiveLinkedOffset;
          t2.unlinkedOffset = offset;
          return t2;
        })();
      }
      context.pushLayer(dart.nullCheck(this.layer), dart.bind(this, 'paint', super.paint), ui.Offset.zero, {childPaintBounds: C[37] || CT.C37});
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      transform.multiply(this.getCurrentTransform());
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLayerLink()).new("link", this.link));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("showWhenUnlinked", this.showWhenUnlinked));
      properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("offset", this.offset));
      properties.add(new matrix_utils.TransformProperty.new("current transform matrix", this.getCurrentTransform()));
    }
  };
  (proxy_box.RenderFollowerLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    let showWhenUnlinked = opts && 'showWhenUnlinked' in opts ? opts.showWhenUnlinked : true;
    let offset = opts && 'offset' in opts ? opts.offset : C[35] || CT.C35;
    let leaderAnchor = opts && 'leaderAnchor' in opts ? opts.leaderAnchor : C[36] || CT.C36;
    let followerAnchor = opts && 'followerAnchor' in opts ? opts.followerAnchor : C[36] || CT.C36;
    let child = opts && 'child' in opts ? opts.child : null;
    if (!(link !== null)) dart.assertFailed(null, I[1], 5173, 15, "link != null");
    if (!(showWhenUnlinked !== null)) dart.assertFailed(null, I[1], 5174, 15, "showWhenUnlinked != null");
    if (!(offset !== null)) dart.assertFailed(null, I[1], 5175, 15, "offset != null");
    this[_link] = link;
    this[_showWhenUnlinked] = showWhenUnlinked;
    this[_offset] = offset;
    this[_leaderAnchor] = leaderAnchor;
    this[_followerAnchor] = followerAnchor;
    proxy_box.RenderFollowerLayer.__proto__.new.call(this, child);
    ;
  }).prototype = proxy_box.RenderFollowerLayer.prototype;
  dart.addTypeTests(proxy_box.RenderFollowerLayer);
  dart.addTypeCaches(proxy_box.RenderFollowerLayer);
  dart.setMethodSignature(proxy_box.RenderFollowerLayer, () => ({
    __proto__: dart.getMethods(proxy_box.RenderFollowerLayer.__proto__),
    getCurrentTransform: dart.fnType(vector_math_64.Matrix4, [])
  }));
  dart.setGetterSignature(proxy_box.RenderFollowerLayer, () => ({
    __proto__: dart.getGetters(proxy_box.RenderFollowerLayer.__proto__),
    link: layer.LayerLink,
    showWhenUnlinked: core.bool,
    offset: ui.Offset,
    leaderAnchor: alignment.Alignment,
    followerAnchor: alignment.Alignment,
    layer: dart.nullable(layer.FollowerLayer)
  }));
  dart.setSetterSignature(proxy_box.RenderFollowerLayer, () => ({
    __proto__: dart.getSetters(proxy_box.RenderFollowerLayer.__proto__),
    link: layer.LayerLink,
    showWhenUnlinked: core.bool,
    offset: ui.Offset,
    leaderAnchor: alignment.Alignment,
    followerAnchor: alignment.Alignment
  }));
  dart.setLibraryUri(proxy_box.RenderFollowerLayer, I[0]);
  dart.setFieldSignature(proxy_box.RenderFollowerLayer, () => ({
    __proto__: dart.getFields(proxy_box.RenderFollowerLayer.__proto__),
    [_link]: dart.fieldType(layer.LayerLink),
    [_showWhenUnlinked]: dart.fieldType(core.bool),
    [_offset]: dart.fieldType(ui.Offset),
    [_leaderAnchor]: dart.fieldType(alignment.Alignment),
    [_followerAnchor]: dart.fieldType(alignment.Alignment)
  }));
  var alwaysNeedsCompositing = dart.privateName(proxy_box, "RenderAnnotatedRegion.alwaysNeedsCompositing");
  var _value = dart.privateName(proxy_box, "_value");
  var _sized = dart.privateName(proxy_box, "_sized");
  const _is_RenderAnnotatedRegion_default = Symbol('_is_RenderAnnotatedRegion_default');
  proxy_box.RenderAnnotatedRegion$ = dart.generic(T => {
    var __t$AnnotatedRegionLayerOfT = () => (__t$AnnotatedRegionLayerOfT = dart.constFn(layer.AnnotatedRegionLayer$(T)))();
    class RenderAnnotatedRegion extends proxy_box.RenderProxyBox {
      get alwaysNeedsCompositing() {
        return this[alwaysNeedsCompositing];
      }
      set alwaysNeedsCompositing(value) {
        super.alwaysNeedsCompositing = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let sized = opts && 'sized' in opts ? opts.sized : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (proxy_box.RenderAnnotatedRegion$(T)).new({value: value, sized: sized, child: child});
      }
      get value() {
        return this[_value];
      }
      set value(newValue) {
        T.as(newValue);
        if (this[_value][$_equals](newValue)) return;
        this[_value] = newValue;
        this.markNeedsPaint();
      }
      get sized() {
        return this[_sized];
      }
      set sized(value) {
        if (this[_sized] === value) return;
        this[_sized] = value;
        this.markNeedsPaint();
      }
      paint(context, offset) {
        let layer = new (__t$AnnotatedRegionLayerOfT()).new(this.value, {size: this.sized ? this.size : null, offset: this.sized ? offset : null});
        context.pushLayer(layer, dart.bind(this, 'paint', super.paint), offset);
      }
    }
    (RenderAnnotatedRegion.new = function(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      let sized = opts && 'sized' in opts ? opts.sized : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[alwaysNeedsCompositing] = true;
      if (!(value !== null)) dart.assertFailed(null, I[1], 5387, 15, "value != null");
      if (!(sized !== null)) dart.assertFailed(null, I[1], 5388, 15, "sized != null");
      this[_value] = value;
      this[_sized] = sized;
      RenderAnnotatedRegion.__proto__.new.call(this, child);
      ;
    }).prototype = RenderAnnotatedRegion.prototype;
    dart.addTypeTests(RenderAnnotatedRegion);
    RenderAnnotatedRegion.prototype[_is_RenderAnnotatedRegion_default] = true;
    dart.addTypeCaches(RenderAnnotatedRegion);
    dart.setGetterSignature(RenderAnnotatedRegion, () => ({
      __proto__: dart.getGetters(RenderAnnotatedRegion.__proto__),
      value: T,
      sized: core.bool
    }));
    dart.setSetterSignature(RenderAnnotatedRegion, () => ({
      __proto__: dart.getSetters(RenderAnnotatedRegion.__proto__),
      value: dart.nullable(core.Object),
      sized: core.bool
    }));
    dart.setLibraryUri(RenderAnnotatedRegion, I[0]);
    dart.setFieldSignature(RenderAnnotatedRegion, () => ({
      __proto__: dart.getFields(RenderAnnotatedRegion.__proto__),
      [_value]: dart.fieldType(T),
      [_sized]: dart.fieldType(core.bool),
      alwaysNeedsCompositing: dart.finalFieldType(core.bool)
    }));
    return RenderAnnotatedRegion;
  });
  proxy_box.RenderAnnotatedRegion = proxy_box.RenderAnnotatedRegion$();
  dart.addTypeTests(proxy_box.RenderAnnotatedRegion, _is_RenderAnnotatedRegion_default);
  dart.trackLibraries("packages/flutter/src/rendering/proxy_box.dart", {
    "package:flutter/src/rendering/proxy_box.dart": proxy_box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["proxy_box.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/proxy_box.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__proxy_box: proxy_box
  };
}));

//# sourceMappingURL=proxy_box.dart.lib.js.map
