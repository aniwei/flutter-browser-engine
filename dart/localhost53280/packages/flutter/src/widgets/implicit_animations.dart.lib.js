define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/box_border.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/animation/animation_controller.dart', 'packages/flutter/src/painting/box_decoration.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/rendering/tweens.dart', 'packages/flutter/src/painting/colors.dart'], (function load__packages__flutter__src__widgets__implicit_animations_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__box_border$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__animation__animation_controller$46dart, packages__flutter__src__painting__box_decoration$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__rendering__tweens$46dart, packages__flutter__src__painting__colors$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const animations = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animations;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const ticker_provider = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__ticker_provider;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__container;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const debug = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__debug;
  const transitions = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__transitions;
  const text = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__text;
  const animation_controller = packages__flutter__src__animation__animation_controller$46dart.src__animation__animation_controller;
  const box_decoration = packages__flutter__src__painting__box_decoration$46dart.src__painting__box_decoration;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const tweens = packages__flutter__src__rendering__tweens$46dart.src__rendering__tweens;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  var implicit_animations = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    AnimationStatusTovoid: () => (T$.AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation.AnimationStatus])))(),
    TweenN: () => (T$.TweenN = dart.constFn(dart.nullable(tween.Tween)))(),
    dynamicToTween: () => (T$.dynamicToTween = dart.constFn(dart.fnType(tween.Tween, [dart.dynamic])))(),
    TweenNAnddynamicAndFnToTweenN: () => (T$.TweenNAnddynamicAndFnToTweenN = dart.constFn(dart.fnType(T$.TweenN(), [T$.TweenN(), dart.dynamic, T$.dynamicToTween()])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    DiagnosticsPropertyOfAlignmentGeometry: () => (T$.DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))(),
    DiagnosticsPropertyOfEdgeInsetsGeometry: () => (T$.DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))(),
    DiagnosticsPropertyOfDecoration: () => (T$.DiagnosticsPropertyOfDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(decoration.Decoration)))(),
    DiagnosticsPropertyOfBoxConstraints: () => (T$.DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))(),
    ObjectFlagPropertyOfMatrix4: () => (T$.ObjectFlagPropertyOfMatrix4 = dart.constFn(diagnostics.ObjectFlagProperty$(vector_math_64.Matrix4)))(),
    DiagnosticsPropertyOfClip: () => (T$.DiagnosticsPropertyOfClip = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Clip)))(),
    dynamicToAlignmentGeometryTween: () => (T$.dynamicToAlignmentGeometryTween = dart.constFn(dart.fnType(tweens.AlignmentGeometryTween, [dart.dynamic])))(),
    AlignmentGeometryTweenN: () => (T$.AlignmentGeometryTweenN = dart.constFn(dart.nullable(tweens.AlignmentGeometryTween)))(),
    dynamicToEdgeInsetsGeometryTween: () => (T$.dynamicToEdgeInsetsGeometryTween = dart.constFn(dart.fnType(implicit_animations.EdgeInsetsGeometryTween, [dart.dynamic])))(),
    EdgeInsetsGeometryTweenN: () => (T$.EdgeInsetsGeometryTweenN = dart.constFn(dart.nullable(implicit_animations.EdgeInsetsGeometryTween)))(),
    dynamicToDecorationTween: () => (T$.dynamicToDecorationTween = dart.constFn(dart.fnType(implicit_animations.DecorationTween, [dart.dynamic])))(),
    DecorationTweenN: () => (T$.DecorationTweenN = dart.constFn(dart.nullable(implicit_animations.DecorationTween)))(),
    dynamicToBoxConstraintsTween: () => (T$.dynamicToBoxConstraintsTween = dart.constFn(dart.fnType(implicit_animations.BoxConstraintsTween, [dart.dynamic])))(),
    BoxConstraintsTweenN: () => (T$.BoxConstraintsTweenN = dart.constFn(dart.nullable(implicit_animations.BoxConstraintsTween)))(),
    dynamicToMatrix4Tween: () => (T$.dynamicToMatrix4Tween = dart.constFn(dart.fnType(implicit_animations.Matrix4Tween, [dart.dynamic])))(),
    Matrix4TweenN: () => (T$.Matrix4TweenN = dart.constFn(dart.nullable(implicit_animations.Matrix4Tween)))(),
    DiagnosticsPropertyOfAlignmentGeometryTween: () => (T$.DiagnosticsPropertyOfAlignmentGeometryTween = dart.constFn(diagnostics.DiagnosticsProperty$(tweens.AlignmentGeometryTween)))(),
    DiagnosticsPropertyOfEdgeInsetsGeometryTween: () => (T$.DiagnosticsPropertyOfEdgeInsetsGeometryTween = dart.constFn(diagnostics.DiagnosticsProperty$(implicit_animations.EdgeInsetsGeometryTween)))(),
    DiagnosticsPropertyOfDecorationTween: () => (T$.DiagnosticsPropertyOfDecorationTween = dart.constFn(diagnostics.DiagnosticsProperty$(implicit_animations.DecorationTween)))(),
    DiagnosticsPropertyOfBoxConstraintsTween: () => (T$.DiagnosticsPropertyOfBoxConstraintsTween = dart.constFn(diagnostics.DiagnosticsProperty$(implicit_animations.BoxConstraintsTween)))(),
    ObjectFlagPropertyOfMatrix4Tween: () => (T$.ObjectFlagPropertyOfMatrix4Tween = dart.constFn(diagnostics.ObjectFlagProperty$(implicit_animations.Matrix4Tween)))(),
    TweenOfdouble: () => (T$.TweenOfdouble = dart.constFn(tween.Tween$(core.double)))(),
    dynamicToTweenOfdouble: () => (T$.dynamicToTweenOfdouble = dart.constFn(dart.fnType(T$.TweenOfdouble(), [dart.dynamic])))(),
    TweenNOfdouble: () => (T$.TweenNOfdouble = dart.constFn(dart.nullable(T$.TweenOfdouble())))(),
    DiagnosticsPropertyOfTweenOfdouble: () => (T$.DiagnosticsPropertyOfTweenOfdouble = dart.constFn(diagnostics.DiagnosticsProperty$(T$.TweenOfdouble())))(),
    ObjectFlagPropertyOfTweenOfdouble: () => (T$.ObjectFlagPropertyOfTweenOfdouble = dart.constFn(diagnostics.ObjectFlagProperty$(T$.TweenOfdouble())))(),
    DiagnosticsPropertyOfAlignment: () => (T$.DiagnosticsPropertyOfAlignment = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.Alignment)))(),
    EnumPropertyOfFilterQuality: () => (T$.EnumPropertyOfFilterQuality = dart.constFn(diagnostics.EnumProperty$(ui.FilterQuality)))(),
    DiagnosticsPropertyOfOffset: () => (T$.DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))(),
    TweenOfOffset: () => (T$.TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))(),
    dynamicToTweenOfOffset: () => (T$.dynamicToTweenOfOffset = dart.constFn(dart.fnType(T$.TweenOfOffset(), [dart.dynamic])))(),
    TweenNOfOffset: () => (T$.TweenNOfOffset = dart.constFn(dart.nullable(T$.TweenOfOffset())))(),
    EnumPropertyOfTextAlign: () => (T$.EnumPropertyOfTextAlign = dart.constFn(diagnostics.EnumProperty$(ui.TextAlign)))(),
    EnumPropertyOfTextOverflow: () => (T$.EnumPropertyOfTextOverflow = dart.constFn(diagnostics.EnumProperty$(text_painter.TextOverflow)))(),
    EnumPropertyOfTextWidthBasis: () => (T$.EnumPropertyOfTextWidthBasis = dart.constFn(diagnostics.EnumProperty$(text_painter.TextWidthBasis)))(),
    DiagnosticsPropertyOfTextHeightBehavior: () => (T$.DiagnosticsPropertyOfTextHeightBehavior = dart.constFn(diagnostics.DiagnosticsProperty$(ui.TextHeightBehavior)))(),
    dynamicToTextStyleTween: () => (T$.dynamicToTextStyleTween = dart.constFn(dart.fnType(implicit_animations.TextStyleTween, [dart.dynamic])))(),
    TextStyleTweenN: () => (T$.TextStyleTweenN = dart.constFn(dart.nullable(implicit_animations.TextStyleTween)))(),
    EnumPropertyOfBoxShape: () => (T$.EnumPropertyOfBoxShape = dart.constFn(diagnostics.EnumProperty$(box_border.BoxShape)))(),
    DiagnosticsPropertyOfBorderRadius: () => (T$.DiagnosticsPropertyOfBorderRadius = dart.constFn(diagnostics.DiagnosticsProperty$(border_radius.BorderRadius)))(),
    DiagnosticsPropertyOfbool: () => (T$.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    dynamicToBorderRadiusTween: () => (T$.dynamicToBorderRadiusTween = dart.constFn(dart.fnType(implicit_animations.BorderRadiusTween, [dart.dynamic])))(),
    BorderRadiusTweenN: () => (T$.BorderRadiusTweenN = dart.constFn(dart.nullable(implicit_animations.BorderRadiusTween)))(),
    dynamicToColorTween: () => (T$.dynamicToColorTween = dart.constFn(dart.fnType(tween.ColorTween, [dart.dynamic])))(),
    ColorTweenN: () => (T$.ColorTweenN = dart.constFn(dart.nullable(tween.ColorTween)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_Enum__name]: "completed",
        [_Enum_index]: 3
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_Enum__name]: "dismissed",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_Enum__name]: "forward",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: animation.AnimationStatus.prototype,
        [_Enum__name]: "reverse",
        [_Enum_index]: 2
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedContainer",
        [_Location_column]: 3,
        [_Location_line]: 602,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Container",
        [_Location_column]: 12,
        [_Location_line]: 755,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedPadding",
        [_Location_column]: 3,
        [_Location_line]: 810,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 849,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedAlign",
        [_Location_column]: 9,
        [_Location_line]: 900,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Align",
        [_Location_column]: 12,
        [_Location_line]: 975,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedPositioned",
        [_Location_column]: 9,
        [_Location_line]: 1040,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedPositioned",
        [_Location_column]: 3,
        [_Location_line]: 1059,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 12,
        [_Location_line]: 1138,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedPositionedDirectional",
        [_Location_column]: 9,
        [_Location_line]: 1193,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Positioned",
        [_Location_column]: 23,
        [_Location_line]: 1274,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedScale",
        [_Location_column]: 9,
        [_Location_line]: 1358,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ScaleTransition",
        [_Location_column]: 12,
        [_Location_line]: 1420,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedRotation",
        [_Location_column]: 9,
        [_Location_line]: 1486,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RotationTransition",
        [_Location_column]: 12,
        [_Location_line]: 1549,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedSlide",
        [_Location_column]: 9,
        [_Location_line]: 1583,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SlideTransition",
        [_Location_column]: 12,
        [_Location_line]: 1629,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedOpacity",
        [_Location_column]: 9,
        [_Location_line]: 1699,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FadeTransition",
        [_Location_column]: 12,
        [_Location_line]: 1759,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverAnimatedOpacity",
        [_Location_column]: 9,
        [_Location_line]: 1795,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverFadeTransition",
        [_Location_column]: 12,
        [_Location_line]: 1853,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: text_painter.TextOverflow.prototype,
        [_Enum__name]: "clip",
        [_Enum_index]: 0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: text_painter.TextWidthBasis.prototype,
        [_Enum__name]: "parent",
        [_Enum_index]: 0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedDefaultTextStyle",
        [_Location_column]: 9,
        [_Location_line]: 1886,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "DefaultTextStyle",
        [_Location_column]: 12,
        [_Location_line]: 1977,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[33] || CT.C33,
        [BorderRadius_bottomLeft]: C[33] || CT.C33,
        [BorderRadius_topRight]: C[33] || CT.C33,
        [BorderRadius_topLeft]: C[33] || CT.C33
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedPhysicalModel",
        [_Location_column]: 9,
        [_Location_line]: 2014,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PhysicalModel",
        [_Location_column]: 12,
        [_Location_line]: 2107,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
      });
    }
  }, false);
  var C = Array(36).fill(void 0);
  var I = [
    "package:flutter/src/widgets/implicit_animations.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/implicit_animations.dart"
  ];
  implicit_animations.BoxConstraintsTween = class BoxConstraintsTween extends tween.Tween$(box.BoxConstraints) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new implicit_animations.BoxConstraintsTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return dart.nullCheck(box.BoxConstraints.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.BoxConstraintsTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.BoxConstraintsTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.BoxConstraintsTween.prototype;
  dart.addTypeTests(implicit_animations.BoxConstraintsTween);
  dart.addTypeCaches(implicit_animations.BoxConstraintsTween);
  dart.setLibraryUri(implicit_animations.BoxConstraintsTween, I[0]);
  implicit_animations.DecorationTween = class DecorationTween extends tween.Tween$(decoration.Decoration) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new implicit_animations.DecorationTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return dart.nullCheck(decoration.Decoration.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.DecorationTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.DecorationTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.DecorationTween.prototype;
  dart.addTypeTests(implicit_animations.DecorationTween);
  dart.addTypeCaches(implicit_animations.DecorationTween);
  dart.setLibraryUri(implicit_animations.DecorationTween, I[0]);
  implicit_animations.EdgeInsetsTween = class EdgeInsetsTween extends tween.Tween$(edge_insets.EdgeInsets) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new implicit_animations.EdgeInsetsTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return dart.nullCheck(edge_insets.EdgeInsets.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.EdgeInsetsTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.EdgeInsetsTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.EdgeInsetsTween.prototype;
  dart.addTypeTests(implicit_animations.EdgeInsetsTween);
  dart.addTypeCaches(implicit_animations.EdgeInsetsTween);
  dart.setLibraryUri(implicit_animations.EdgeInsetsTween, I[0]);
  implicit_animations.EdgeInsetsGeometryTween = class EdgeInsetsGeometryTween extends tween.Tween$(edge_insets.EdgeInsetsGeometry) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new implicit_animations.EdgeInsetsGeometryTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return dart.nullCheck(edge_insets.EdgeInsetsGeometry.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.EdgeInsetsGeometryTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.EdgeInsetsGeometryTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.EdgeInsetsGeometryTween.prototype;
  dart.addTypeTests(implicit_animations.EdgeInsetsGeometryTween);
  dart.addTypeCaches(implicit_animations.EdgeInsetsGeometryTween);
  dart.setLibraryUri(implicit_animations.EdgeInsetsGeometryTween, I[0]);
  implicit_animations.BorderRadiusTween = class BorderRadiusTween extends tween.Tween$(dart.nullable(border_radius.BorderRadius)) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new implicit_animations.BorderRadiusTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return border_radius.BorderRadius.lerp(this.begin, this.end, t);
    }
  };
  (implicit_animations.BorderRadiusTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.BorderRadiusTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.BorderRadiusTween.prototype;
  dart.addTypeTests(implicit_animations.BorderRadiusTween);
  dart.addTypeCaches(implicit_animations.BorderRadiusTween);
  dart.setLibraryUri(implicit_animations.BorderRadiusTween, I[0]);
  implicit_animations.BorderTween = class BorderTween extends tween.Tween$(dart.nullable(box_border.Border)) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new implicit_animations.BorderTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return box_border.Border.lerp(this.begin, this.end, t);
    }
  };
  (implicit_animations.BorderTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.BorderTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.BorderTween.prototype;
  dart.addTypeTests(implicit_animations.BorderTween);
  dart.addTypeCaches(implicit_animations.BorderTween);
  dart.setLibraryUri(implicit_animations.BorderTween, I[0]);
  implicit_animations.Matrix4Tween = class Matrix4Tween extends tween.Tween$(vector_math_64.Matrix4) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new implicit_animations.Matrix4Tween.new({begin: begin, end: end});
    }
    lerp(t) {
      if (!(this.begin != null)) dart.assertFailed(null, I[1], 176, 12, "begin != null");
      if (!(this.end != null)) dart.assertFailed(null, I[1], 177, 12, "end != null");
      let beginTranslation = new vector_math_64.Vector3.zero();
      let endTranslation = new vector_math_64.Vector3.zero();
      let beginRotation = vector_math_64.Quaternion.identity();
      let endRotation = vector_math_64.Quaternion.identity();
      let beginScale = new vector_math_64.Vector3.zero();
      let endScale = new vector_math_64.Vector3.zero();
      dart.nullCheck(this.begin).decompose(beginTranslation, beginRotation, beginScale);
      dart.nullCheck(this.end).decompose(endTranslation, endRotation, endScale);
      let lerpTranslation = beginTranslation['*'](1.0 - t)['+'](endTranslation['*'](t));
      let lerpRotation = beginRotation.scaled(1.0 - t)['+'](endRotation.scaled(t)).normalized();
      let lerpScale = beginScale['*'](1.0 - t)['+'](endScale['*'](t));
      return vector_math_64.Matrix4.compose(lerpTranslation, lerpRotation, lerpScale);
    }
  };
  (implicit_animations.Matrix4Tween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.Matrix4Tween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.Matrix4Tween.prototype;
  dart.addTypeTests(implicit_animations.Matrix4Tween);
  dart.addTypeCaches(implicit_animations.Matrix4Tween);
  dart.setLibraryUri(implicit_animations.Matrix4Tween, I[0]);
  implicit_animations.TextStyleTween = class TextStyleTween extends tween.Tween$(text_style.TextStyle) {
    static ['_#new#tearOff'](opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      return new implicit_animations.TextStyleTween.new({begin: begin, end: end});
    }
    lerp(t) {
      return dart.nullCheck(text_style.TextStyle.lerp(this.begin, this.end, t));
    }
  };
  (implicit_animations.TextStyleTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    implicit_animations.TextStyleTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = implicit_animations.TextStyleTween.prototype;
  dart.addTypeTests(implicit_animations.TextStyleTween);
  dart.addTypeCaches(implicit_animations.TextStyleTween);
  dart.setLibraryUri(implicit_animations.TextStyleTween, I[0]);
  var curve$ = dart.privateName(implicit_animations, "ImplicitlyAnimatedWidget.curve");
  var duration$ = dart.privateName(implicit_animations, "ImplicitlyAnimatedWidget.duration");
  var onEnd$ = dart.privateName(implicit_animations, "ImplicitlyAnimatedWidget.onEnd");
  implicit_animations.ImplicitlyAnimatedWidget = class ImplicitlyAnimatedWidget extends framework.StatefulWidget {
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get onEnd() {
      return this[onEnd$];
    }
    set onEnd(value) {
      super.onEnd = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("duration", this.duration.inMilliseconds, {unit: "ms"}));
    }
  };
  (implicit_animations.ImplicitlyAnimatedWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[curve$] = curve;
    this[duration$] = duration;
    this[onEnd$] = onEnd;
    if (!(curve !== null)) dart.assertFailed(null, I[1], 284, 15, "curve != null");
    if (!(duration !== null)) dart.assertFailed(null, I[1], 285, 15, "duration != null");
    implicit_animations.ImplicitlyAnimatedWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.ImplicitlyAnimatedWidget.prototype;
  dart.addTypeTests(implicit_animations.ImplicitlyAnimatedWidget);
  dart.addTypeCaches(implicit_animations.ImplicitlyAnimatedWidget);
  dart.setLibraryUri(implicit_animations.ImplicitlyAnimatedWidget, I[0]);
  dart.setFieldSignature(implicit_animations.ImplicitlyAnimatedWidget, () => ({
    __proto__: dart.getFields(implicit_animations.ImplicitlyAnimatedWidget.__proto__),
    curve: dart.finalFieldType(curves.Curve),
    duration: dart.finalFieldType(core.Duration),
    onEnd: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
  var __ImplicitlyAnimatedWidgetState__controller = dart.privateName(implicit_animations, "_#ImplicitlyAnimatedWidgetState#_controller");
  var __ImplicitlyAnimatedWidgetState__animation = dart.privateName(implicit_animations, "_#ImplicitlyAnimatedWidgetState#_animation");
  var _controller = dart.privateName(implicit_animations, "_controller");
  var _animation = dart.privateName(implicit_animations, "_animation");
  var _createCurve = dart.privateName(implicit_animations, "_createCurve");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _constructTweens = dart.privateName(implicit_animations, "_constructTweens");
  var _updateTween = dart.privateName(implicit_animations, "_updateTween");
  var _shouldAnimateTween = dart.privateName(implicit_animations, "_shouldAnimateTween");
  const _is_ImplicitlyAnimatedWidgetState_default = Symbol('_is_ImplicitlyAnimatedWidgetState_default');
  implicit_animations.ImplicitlyAnimatedWidgetState$ = dart.generic(T => {
    const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(T) {};
    (State_SingleTickerProviderStateMixin$36.new = function() {
      ticker_provider.SingleTickerProviderStateMixin$(T)[dart.mixinNew].call(this);
      State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
    }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
    dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(T));
    class ImplicitlyAnimatedWidgetState extends State_SingleTickerProviderStateMixin$36 {
      get controller() {
        return this[_controller];
      }
      get [_controller]() {
        let t1, t0;
        t0 = this[__ImplicitlyAnimatedWidgetState__controller];
        return t0 == null ? (t1 = new animation_controller.AnimationController.new({duration: this.widget.duration, debugLabel: true ? this.widget.toStringShort() : null, vsync: this}), this[__ImplicitlyAnimatedWidgetState__controller] == null ? this[__ImplicitlyAnimatedWidgetState__controller] = t1 : dart.throw(new _internal.LateError.fieldADI("_controller"))) : t0;
      }
      get animation() {
        return this[_animation];
      }
      get [_animation]() {
        let t0;
        t0 = this[__ImplicitlyAnimatedWidgetState__animation];
        return t0 == null ? this[__ImplicitlyAnimatedWidgetState__animation] = this[_createCurve]() : t0;
      }
      set [_animation](t0) {
        this[__ImplicitlyAnimatedWidgetState__animation] = t0;
      }
      initState() {
        super.initState();
        this[_controller].addStatusListener(dart.fn(status => {
          let t1;
          switch (status) {
            case C[1] || CT.C1:
            {
              t1 = this.widget.onEnd;
              t1 == null ? null : t1();
              break;
            }
            case C[2] || CT.C2:
            case C[3] || CT.C3:
            case C[4] || CT.C4:
          }
        }, T$.AnimationStatusTovoid()));
        this[_constructTweens]();
        this.didUpdateTweens();
      }
      didUpdateWidget(oldWidget) {
        let t1;
        T.as(oldWidget);
        super.didUpdateWidget(oldWidget);
        if (!this.widget.curve[$_equals](oldWidget.curve)) {
          animations.CurvedAnimation.as(this[_animation]).dispose();
          this[_animation] = this[_createCurve]();
        }
        this[_controller].duration = this.widget.duration;
        if (this[_constructTweens]()) {
          this.forEachTween(dart.fn((tween, targetValue, constructor) => {
            this[_updateTween](tween, targetValue);
            return tween;
          }, T$.TweenNAnddynamicAndFnToTweenN()));
          t1 = this[_controller];
          (() => {
            t1.value = 0.0;
            t1.forward();
            return t1;
          })();
          this.didUpdateTweens();
        }
      }
      [_createCurve]() {
        return new animations.CurvedAnimation.new({parent: this[_controller], curve: this.widget.curve});
      }
      dispose() {
        animations.CurvedAnimation.as(this[_animation]).dispose();
        this[_controller].dispose();
        super.dispose();
      }
      [_shouldAnimateTween](tween, targetValue) {
        let t1;
        return !dart.equals(targetValue, (t1 = tween.end, t1 == null ? tween.begin : t1));
      }
      [_updateTween](tween, targetValue) {
        let t1;
        if (tween == null) return;
        t1 = tween;
        (() => {
          t1.begin = tween.evaluate(this[_animation]);
          t1.end = targetValue;
          return t1;
        })();
      }
      [_constructTweens]() {
        let shouldStartAnimation = false;
        this.forEachTween(dart.fn((tween, targetValue, constructor) => {
          if (targetValue != null) {
            tween == null ? tween = constructor(targetValue) : null;
            if (this[_shouldAnimateTween](tween, targetValue)) shouldStartAnimation = true;
          } else {
            tween = null;
          }
          return tween;
        }, T$.TweenNAnddynamicAndFnToTweenN()));
        return shouldStartAnimation;
      }
      didUpdateTweens() {
      }
    }
    (ImplicitlyAnimatedWidgetState.new = function() {
      this[__ImplicitlyAnimatedWidgetState__controller] = null;
      this[__ImplicitlyAnimatedWidgetState__animation] = null;
      ImplicitlyAnimatedWidgetState.__proto__.new.call(this);
      ;
    }).prototype = ImplicitlyAnimatedWidgetState.prototype;
    dart.addTypeTests(ImplicitlyAnimatedWidgetState);
    ImplicitlyAnimatedWidgetState.prototype[_is_ImplicitlyAnimatedWidgetState_default] = true;
    dart.addTypeCaches(ImplicitlyAnimatedWidgetState);
    dart.setMethodSignature(ImplicitlyAnimatedWidgetState, () => ({
      __proto__: dart.getMethods(ImplicitlyAnimatedWidgetState.__proto__),
      [_createCurve]: dart.fnType(animations.CurvedAnimation, []),
      [_shouldAnimateTween]: dart.fnType(core.bool, [tween.Tween, dart.dynamic]),
      [_updateTween]: dart.fnType(dart.void, [dart.nullable(tween.Tween), dart.dynamic]),
      [_constructTweens]: dart.fnType(core.bool, []),
      didUpdateTweens: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ImplicitlyAnimatedWidgetState, () => ({
      __proto__: dart.getGetters(ImplicitlyAnimatedWidgetState.__proto__),
      controller: animation_controller.AnimationController,
      [_controller]: animation_controller.AnimationController,
      animation: animation.Animation$(core.double),
      [_animation]: animation.Animation$(core.double)
    }));
    dart.setSetterSignature(ImplicitlyAnimatedWidgetState, () => ({
      __proto__: dart.getSetters(ImplicitlyAnimatedWidgetState.__proto__),
      [_animation]: animation.Animation$(core.double)
    }));
    dart.setLibraryUri(ImplicitlyAnimatedWidgetState, I[0]);
    dart.setFieldSignature(ImplicitlyAnimatedWidgetState, () => ({
      __proto__: dart.getFields(ImplicitlyAnimatedWidgetState.__proto__),
      [__ImplicitlyAnimatedWidgetState__controller]: dart.fieldType(dart.nullable(animation_controller.AnimationController)),
      [__ImplicitlyAnimatedWidgetState__animation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
    }));
    return ImplicitlyAnimatedWidgetState;
  });
  implicit_animations.ImplicitlyAnimatedWidgetState = implicit_animations.ImplicitlyAnimatedWidgetState$();
  dart.addTypeTests(implicit_animations.ImplicitlyAnimatedWidgetState, _is_ImplicitlyAnimatedWidgetState_default);
  var _handleAnimationChanged = dart.privateName(implicit_animations, "_handleAnimationChanged");
  const _is_AnimatedWidgetBaseState_default = Symbol('_is_AnimatedWidgetBaseState_default');
  implicit_animations.AnimatedWidgetBaseState$ = dart.generic(T => {
    class AnimatedWidgetBaseState extends implicit_animations.ImplicitlyAnimatedWidgetState$(T) {
      initState() {
        super.initState();
        this.controller.addListener(dart.bind(this, _handleAnimationChanged));
      }
      [_handleAnimationChanged]() {
        this.setState(dart.fn(() => {
        }, T$.VoidTovoid()));
      }
    }
    (AnimatedWidgetBaseState.new = function() {
      AnimatedWidgetBaseState.__proto__.new.call(this);
      ;
    }).prototype = AnimatedWidgetBaseState.prototype;
    dart.addTypeTests(AnimatedWidgetBaseState);
    AnimatedWidgetBaseState.prototype[_is_AnimatedWidgetBaseState_default] = true;
    dart.addTypeCaches(AnimatedWidgetBaseState);
    dart.setMethodSignature(AnimatedWidgetBaseState, () => ({
      __proto__: dart.getMethods(AnimatedWidgetBaseState.__proto__),
      [_handleAnimationChanged]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(AnimatedWidgetBaseState, I[0]);
    return AnimatedWidgetBaseState;
  });
  implicit_animations.AnimatedWidgetBaseState = implicit_animations.AnimatedWidgetBaseState$();
  dart.addTypeTests(implicit_animations.AnimatedWidgetBaseState, _is_AnimatedWidgetBaseState_default);
  var child$ = dart.privateName(implicit_animations, "AnimatedContainer.child");
  var alignment$ = dart.privateName(implicit_animations, "AnimatedContainer.alignment");
  var padding$ = dart.privateName(implicit_animations, "AnimatedContainer.padding");
  var decoration$ = dart.privateName(implicit_animations, "AnimatedContainer.decoration");
  var foregroundDecoration$ = dart.privateName(implicit_animations, "AnimatedContainer.foregroundDecoration");
  var constraints$ = dart.privateName(implicit_animations, "AnimatedContainer.constraints");
  var margin$ = dart.privateName(implicit_animations, "AnimatedContainer.margin");
  var transform$ = dart.privateName(implicit_animations, "AnimatedContainer.transform");
  var transformAlignment$ = dart.privateName(implicit_animations, "AnimatedContainer.transformAlignment");
  var clipBehavior$ = dart.privateName(implicit_animations, "AnimatedContainer.clipBehavior");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  implicit_animations.AnimatedContainer = class AnimatedContainer extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get foregroundDecoration() {
      return this[foregroundDecoration$];
    }
    set foregroundDecoration(value) {
      super.foregroundDecoration = value;
    }
    get constraints() {
      return this[constraints$];
    }
    set constraints(value) {
      super.constraints = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get transformAlignment() {
      return this[transformAlignment$];
    }
    set transformAlignment(value) {
      super.transformAlignment = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let foregroundDecoration = opts && 'foregroundDecoration' in opts ? opts.foregroundDecoration : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      let margin = opts && 'margin' in opts ? opts.margin : null;
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let transformAlignment = opts && 'transformAlignment' in opts ? opts.transformAlignment : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedContainer.new({key: key, alignment: alignment, padding: padding, color: color, decoration: decoration, foregroundDecoration: foregroundDecoration, width: width, height: height, constraints: constraints, margin: margin, transform: transform, transformAlignment: transformAlignment, child: child, clipBehavior: clipBehavior, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
    createState() {
      return new implicit_animations._AnimatedContainerState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {showName: false, defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfDecoration()).new("bg", this.decoration, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfDecoration()).new("fg", this.foregroundDecoration, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfBoxConstraints()).new("constraints", this.constraints, {defaultValue: null, showName: false}));
      properties.add(new (T$.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("margin", this.margin, {defaultValue: null}));
      properties.add(new (T$.ObjectFlagPropertyOfMatrix4()).has("transform", this.transform));
      properties.add(new (T$.DiagnosticsPropertyOfAlignmentGeometry()).new("transformAlignment", this.transformAlignment, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (implicit_animations.AnimatedContainer.new = function(opts) {
    let t1, t1$, t1$0;
    let key = opts && 'key' in opts ? opts.key : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let foregroundDecoration = opts && 'foregroundDecoration' in opts ? opts.foregroundDecoration : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let constraints = opts && 'constraints' in opts ? opts.constraints : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let transformAlignment = opts && 'transformAlignment' in opts ? opts.transformAlignment : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alignment$] = alignment;
    this[padding$] = padding;
    this[foregroundDecoration$] = foregroundDecoration;
    this[margin$] = margin;
    this[transform$] = transform;
    this[transformAlignment$] = transformAlignment;
    this[child$] = child;
    this[clipBehavior$] = clipBehavior;
    if (!(margin == null || margin.isNonNegative)) dart.assertFailed(null, I[1], 620, 15, "margin == null || margin.isNonNegative");
    if (!(padding == null || padding.isNonNegative)) dart.assertFailed(null, I[1], 621, 15, "padding == null || padding.isNonNegative");
    if (!(decoration == null || decoration.debugAssertIsValid())) dart.assertFailed(null, I[1], 622, 15, "decoration == null || decoration.debugAssertIsValid()");
    if (!(constraints == null || constraints.debugAssertIsValid())) dart.assertFailed(null, I[1], 623, 15, "constraints == null || constraints.debugAssertIsValid()");
    if (!(color == null || decoration == null)) dart.assertFailed("Cannot provide both a color and a decoration\n" + "The color argument is just a shorthand for \"decoration: BoxDecoration(color: color)\".", I[1], 624, 15, "color == null || decoration == null");
    this[decoration$] = (t1 = decoration, t1 == null ? color != null ? new box_decoration.BoxDecoration.new({color: color}) : null : t1);
    this[constraints$] = width != null || height != null ? (t1$0 = (t1$ = constraints, t1$ == null ? null : t1$.tighten({width: width, height: height})), t1$0 == null ? new box.BoxConstraints.tightFor({width: width, height: height}) : t1$0) : constraints;
    implicit_animations.AnimatedContainer.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedContainer.prototype;
  dart.addTypeTests(implicit_animations.AnimatedContainer);
  dart.addTypeCaches(implicit_animations.AnimatedContainer);
  dart.setMethodSignature(implicit_animations.AnimatedContainer, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedContainer.__proto__),
    createState: dart.fnType(implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedContainer), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedContainer, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedContainer, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedContainer.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    alignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry)),
    padding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    decoration: dart.finalFieldType(dart.nullable(decoration.Decoration)),
    foregroundDecoration: dart.finalFieldType(dart.nullable(decoration.Decoration)),
    constraints: dart.finalFieldType(dart.nullable(box.BoxConstraints)),
    margin: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    transform: dart.finalFieldType(dart.nullable(vector_math_64.Matrix4)),
    transformAlignment: dart.finalFieldType(dart.nullable(alignment.AlignmentGeometry)),
    clipBehavior: dart.finalFieldType(ui.Clip)
  }));
  var _alignment = dart.privateName(implicit_animations, "_alignment");
  var _padding = dart.privateName(implicit_animations, "_padding");
  var _decoration = dart.privateName(implicit_animations, "_decoration");
  var _foregroundDecoration = dart.privateName(implicit_animations, "_foregroundDecoration");
  var _constraints = dart.privateName(implicit_animations, "_constraints");
  var _margin = dart.privateName(implicit_animations, "_margin");
  var _transform = dart.privateName(implicit_animations, "_transform");
  var _transformAlignment = dart.privateName(implicit_animations, "_transformAlignment");
  implicit_animations._AnimatedContainerState = class _AnimatedContainerState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedContainer) {
    forEachTween(visitor) {
      this[_alignment] = T$.AlignmentGeometryTweenN().as(visitor(this[_alignment], this.widget.alignment, dart.fn(value => new tweens.AlignmentGeometryTween.new({begin: alignment.AlignmentGeometry.as(value)}), T$.dynamicToAlignmentGeometryTween())));
      this[_padding] = T$.EdgeInsetsGeometryTweenN().as(visitor(this[_padding], this.widget.padding, dart.fn(value => new implicit_animations.EdgeInsetsGeometryTween.new({begin: edge_insets.EdgeInsetsGeometry.as(value)}), T$.dynamicToEdgeInsetsGeometryTween())));
      this[_decoration] = T$.DecorationTweenN().as(visitor(this[_decoration], this.widget.decoration, dart.fn(value => new implicit_animations.DecorationTween.new({begin: decoration.Decoration.as(value)}), T$.dynamicToDecorationTween())));
      this[_foregroundDecoration] = T$.DecorationTweenN().as(visitor(this[_foregroundDecoration], this.widget.foregroundDecoration, dart.fn(value => new implicit_animations.DecorationTween.new({begin: decoration.Decoration.as(value)}), T$.dynamicToDecorationTween())));
      this[_constraints] = T$.BoxConstraintsTweenN().as(visitor(this[_constraints], this.widget.constraints, dart.fn(value => new implicit_animations.BoxConstraintsTween.new({begin: box.BoxConstraints.as(value)}), T$.dynamicToBoxConstraintsTween())));
      this[_margin] = T$.EdgeInsetsGeometryTweenN().as(visitor(this[_margin], this.widget.margin, dart.fn(value => new implicit_animations.EdgeInsetsGeometryTween.new({begin: edge_insets.EdgeInsetsGeometry.as(value)}), T$.dynamicToEdgeInsetsGeometryTween())));
      this[_transform] = T$.Matrix4TweenN().as(visitor(this[_transform], this.widget.transform, dart.fn(value => new implicit_animations.Matrix4Tween.new({begin: vector_math_64.Matrix4.as(value)}), T$.dynamicToMatrix4Tween())));
      this[_transformAlignment] = T$.AlignmentGeometryTweenN().as(visitor(this[_transformAlignment], this.widget.transformAlignment, dart.fn(value => new tweens.AlignmentGeometryTween.new({begin: alignment.AlignmentGeometry.as(value)}), T$.dynamicToAlignmentGeometryTween())));
    }
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5;
      let animation = this.animation;
      return new container.Container.new({alignment: (t1 = this[_alignment], t1 == null ? null : t1.evaluate(animation)), padding: (t1$ = this[_padding], t1$ == null ? null : t1$.evaluate(animation)), decoration: (t1$0 = this[_decoration], t1$0 == null ? null : t1$0.evaluate(animation)), foregroundDecoration: (t1$1 = this[_foregroundDecoration], t1$1 == null ? null : t1$1.evaluate(animation)), constraints: (t1$2 = this[_constraints], t1$2 == null ? null : t1$2.evaluate(animation)), margin: (t1$3 = this[_margin], t1$3 == null ? null : t1$3.evaluate(animation)), transform: (t1$4 = this[_transform], t1$4 == null ? null : t1$4.evaluate(animation)), transformAlignment: (t1$5 = this[_transformAlignment], t1$5 == null ? null : t1$5.evaluate(animation)), clipBehavior: this.widget.clipBehavior, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T$.DiagnosticsPropertyOfAlignmentGeometryTween()).new("alignment", this[_alignment], {showName: false, defaultValue: null}));
      description.add(new (T$.DiagnosticsPropertyOfEdgeInsetsGeometryTween()).new("padding", this[_padding], {defaultValue: null}));
      description.add(new (T$.DiagnosticsPropertyOfDecorationTween()).new("bg", this[_decoration], {defaultValue: null}));
      description.add(new (T$.DiagnosticsPropertyOfDecorationTween()).new("fg", this[_foregroundDecoration], {defaultValue: null}));
      description.add(new (T$.DiagnosticsPropertyOfBoxConstraintsTween()).new("constraints", this[_constraints], {showName: false, defaultValue: null}));
      description.add(new (T$.DiagnosticsPropertyOfEdgeInsetsGeometryTween()).new("margin", this[_margin], {defaultValue: null}));
      description.add(new (T$.ObjectFlagPropertyOfMatrix4Tween()).has("transform", this[_transform]));
      description.add(new (T$.DiagnosticsPropertyOfAlignmentGeometryTween()).new("transformAlignment", this[_transformAlignment], {defaultValue: null}));
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedContainerState.new();
    }
  };
  (implicit_animations._AnimatedContainerState.new = function() {
    this[_alignment] = null;
    this[_padding] = null;
    this[_decoration] = null;
    this[_foregroundDecoration] = null;
    this[_constraints] = null;
    this[_margin] = null;
    this[_transform] = null;
    this[_transformAlignment] = null;
    implicit_animations._AnimatedContainerState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedContainerState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedContainerState);
  dart.addTypeCaches(implicit_animations._AnimatedContainerState);
  dart.setMethodSignature(implicit_animations._AnimatedContainerState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedContainerState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedContainerState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedContainerState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedContainerState.__proto__),
    [_alignment]: dart.fieldType(dart.nullable(tweens.AlignmentGeometryTween)),
    [_padding]: dart.fieldType(dart.nullable(implicit_animations.EdgeInsetsGeometryTween)),
    [_decoration]: dart.fieldType(dart.nullable(implicit_animations.DecorationTween)),
    [_foregroundDecoration]: dart.fieldType(dart.nullable(implicit_animations.DecorationTween)),
    [_constraints]: dart.fieldType(dart.nullable(implicit_animations.BoxConstraintsTween)),
    [_margin]: dart.fieldType(dart.nullable(implicit_animations.EdgeInsetsGeometryTween)),
    [_transform]: dart.fieldType(dart.nullable(implicit_animations.Matrix4Tween)),
    [_transformAlignment]: dart.fieldType(dart.nullable(tweens.AlignmentGeometryTween))
  }));
  var padding$0 = dart.privateName(implicit_animations, "AnimatedPadding.padding");
  var child$0 = dart.privateName(implicit_animations, "AnimatedPadding.child");
  implicit_animations.AnimatedPadding = class AnimatedPadding extends implicit_animations.ImplicitlyAnimatedWidget {
    get padding() {
      return this[padding$0];
    }
    set padding(value) {
      super.padding = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedPadding.new({key: key, padding: padding, child: child, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    createState() {
      return new implicit_animations._AnimatedPaddingState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("padding", this.padding));
    }
  };
  (implicit_animations.AnimatedPadding.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[padding$0] = padding;
    this[child$0] = child;
    if (!(padding !== null)) dart.assertFailed(null, I[1], 817, 15, "padding != null");
    if (!padding.isNonNegative) dart.assertFailed(null, I[1], 818, 15, "padding.isNonNegative");
    implicit_animations.AnimatedPadding.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPadding.prototype;
  dart.addTypeTests(implicit_animations.AnimatedPadding);
  dart.addTypeCaches(implicit_animations.AnimatedPadding);
  dart.setMethodSignature(implicit_animations.AnimatedPadding, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedPadding.__proto__),
    createState: dart.fnType(implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPadding), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedPadding, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedPadding, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedPadding.__proto__),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  implicit_animations._AnimatedPaddingState = class _AnimatedPaddingState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPadding) {
    forEachTween(visitor) {
      this[_padding] = T$.EdgeInsetsGeometryTweenN().as(visitor(this[_padding], this.widget.padding, dart.fn(value => new implicit_animations.EdgeInsetsGeometryTween.new({begin: edge_insets.EdgeInsetsGeometry.as(value)}), T$.dynamicToEdgeInsetsGeometryTween())));
    }
    build(context) {
      return new basic.Padding.new({padding: dart.nullCheck(this[_padding]).evaluate(this.animation).clamp(edge_insets.EdgeInsets.zero, edge_insets.EdgeInsetsGeometry.infinity), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T$.DiagnosticsPropertyOfEdgeInsetsGeometryTween()).new("padding", this[_padding], {defaultValue: null}));
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedPaddingState.new();
    }
  };
  (implicit_animations._AnimatedPaddingState.new = function() {
    this[_padding] = null;
    implicit_animations._AnimatedPaddingState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedPaddingState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedPaddingState);
  dart.addTypeCaches(implicit_animations._AnimatedPaddingState);
  dart.setMethodSignature(implicit_animations._AnimatedPaddingState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedPaddingState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedPaddingState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedPaddingState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedPaddingState.__proto__),
    [_padding]: dart.fieldType(dart.nullable(implicit_animations.EdgeInsetsGeometryTween))
  }));
  var alignment$0 = dart.privateName(implicit_animations, "AnimatedAlign.alignment");
  var child$1 = dart.privateName(implicit_animations, "AnimatedAlign.child");
  var heightFactor$ = dart.privateName(implicit_animations, "AnimatedAlign.heightFactor");
  var widthFactor$ = dart.privateName(implicit_animations, "AnimatedAlign.widthFactor");
  implicit_animations.AnimatedAlign = class AnimatedAlign extends implicit_animations.ImplicitlyAnimatedWidget {
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    get heightFactor() {
      return this[heightFactor$];
    }
    set heightFactor(value) {
      super.heightFactor = value;
    }
    get widthFactor() {
      return this[widthFactor$];
    }
    set widthFactor(value) {
      super.widthFactor = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
      let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedAlign.new({key: key, alignment: alignment, child: child, heightFactor: heightFactor, widthFactor: widthFactor, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    createState() {
      return new implicit_animations._AnimatedAlignState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment));
    }
  };
  (implicit_animations.AnimatedAlign.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : null;
    let widthFactor = opts && 'widthFactor' in opts ? opts.widthFactor : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alignment$0] = alignment;
    this[child$1] = child;
    this[heightFactor$] = heightFactor;
    this[widthFactor$] = widthFactor;
    if (!(alignment !== null)) dart.assertFailed(null, I[1], 909, 15, "alignment != null");
    if (!(widthFactor == null || dart.notNull(widthFactor) >= 0.0)) dart.assertFailed(null, I[1], 910, 15, "widthFactor == null || widthFactor >= 0.0");
    if (!(heightFactor == null || dart.notNull(heightFactor) >= 0.0)) dart.assertFailed(null, I[1], 911, 15, "heightFactor == null || heightFactor >= 0.0");
    implicit_animations.AnimatedAlign.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedAlign.prototype;
  dart.addTypeTests(implicit_animations.AnimatedAlign);
  dart.addTypeCaches(implicit_animations.AnimatedAlign);
  dart.setMethodSignature(implicit_animations.AnimatedAlign, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedAlign.__proto__),
    createState: dart.fnType(implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedAlign), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedAlign, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedAlign, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedAlign.__proto__),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    heightFactor: dart.finalFieldType(dart.nullable(core.double)),
    widthFactor: dart.finalFieldType(dart.nullable(core.double))
  }));
  var _heightFactorTween = dart.privateName(implicit_animations, "_heightFactorTween");
  var _widthFactorTween = dart.privateName(implicit_animations, "_widthFactorTween");
  implicit_animations._AnimatedAlignState = class _AnimatedAlignState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedAlign) {
    forEachTween(visitor) {
      this[_alignment] = T$.AlignmentGeometryTweenN().as(visitor(this[_alignment], this.widget.alignment, dart.fn(value => new tweens.AlignmentGeometryTween.new({begin: alignment.AlignmentGeometry.as(value)}), T$.dynamicToAlignmentGeometryTween())));
      if (this.widget.heightFactor != null) {
        this[_heightFactorTween] = T$.TweenNOfdouble().as(visitor(this[_heightFactorTween], this.widget.heightFactor, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      }
      if (this.widget.widthFactor != null) {
        this[_widthFactorTween] = T$.TweenNOfdouble().as(visitor(this[_widthFactorTween], this.widget.widthFactor, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      }
    }
    build(context) {
      let t1, t1$;
      return new basic.Align.new({alignment: dart.nullCheck(dart.nullCheck(this[_alignment]).evaluate(this.animation)), heightFactor: (t1 = this[_heightFactorTween], t1 == null ? null : t1.evaluate(this.animation)), widthFactor: (t1$ = this[_widthFactorTween], t1$ == null ? null : t1$.evaluate(this.animation)), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T$.DiagnosticsPropertyOfAlignmentGeometryTween()).new("alignment", this[_alignment], {defaultValue: null}));
      description.add(new (T$.DiagnosticsPropertyOfTweenOfdouble()).new("widthFactor", this[_widthFactorTween], {defaultValue: null}));
      description.add(new (T$.DiagnosticsPropertyOfTweenOfdouble()).new("heightFactor", this[_heightFactorTween], {defaultValue: null}));
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedAlignState.new();
    }
  };
  (implicit_animations._AnimatedAlignState.new = function() {
    this[_alignment] = null;
    this[_heightFactorTween] = null;
    this[_widthFactorTween] = null;
    implicit_animations._AnimatedAlignState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedAlignState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedAlignState);
  dart.addTypeCaches(implicit_animations._AnimatedAlignState);
  dart.setMethodSignature(implicit_animations._AnimatedAlignState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedAlignState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedAlignState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedAlignState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedAlignState.__proto__),
    [_alignment]: dart.fieldType(dart.nullable(tweens.AlignmentGeometryTween)),
    [_heightFactorTween]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_widthFactorTween]: dart.fieldType(dart.nullable(tween.Tween$(core.double)))
  }));
  var child$2 = dart.privateName(implicit_animations, "AnimatedPositioned.child");
  var left$ = dart.privateName(implicit_animations, "AnimatedPositioned.left");
  var top$ = dart.privateName(implicit_animations, "AnimatedPositioned.top");
  var right$ = dart.privateName(implicit_animations, "AnimatedPositioned.right");
  var bottom$ = dart.privateName(implicit_animations, "AnimatedPositioned.bottom");
  var width$ = dart.privateName(implicit_animations, "AnimatedPositioned.width");
  var height$ = dart.privateName(implicit_animations, "AnimatedPositioned.height");
  implicit_animations.AnimatedPositioned = class AnimatedPositioned extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$2];
    }
    set child(value) {
      super.child = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let left = opts && 'left' in opts ? opts.left : null;
      let top = opts && 'top' in opts ? opts.top : null;
      let right = opts && 'right' in opts ? opts.right : null;
      let bottom = opts && 'bottom' in opts ? opts.bottom : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedPositioned.new({key: key, child: child, left: left, top: top, right: right, bottom: bottom, width: width, height: height, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[12] || CT.C12});
    }
    static ['_#fromRect#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedPositioned.fromRect({key: key, child: child, rect: rect, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[13] || CT.C13});
    }
    createState() {
      return new implicit_animations._AnimatedPositionedState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("left", this.left, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("top", this.top, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("right", this.right, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("bottom", this.bottom, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
    }
  };
  (implicit_animations.AnimatedPositioned.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let left = opts && 'left' in opts ? opts.left : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$2] = child;
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[width$] = width;
    this[height$] = height;
    if (!(left == null || right == null || width == null)) dart.assertFailed(null, I[1], 1052, 15, "left == null || right == null || width == null");
    if (!(top == null || bottom == null || height == null)) dart.assertFailed(null, I[1], 1053, 15, "top == null || bottom == null || height == null");
    implicit_animations.AnimatedPositioned.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPositioned.prototype;
  (implicit_animations.AnimatedPositioned.fromRect = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$2] = child;
    this[left$] = rect.left;
    this[top$] = rect.top;
    this[width$] = rect.width;
    this[height$] = rect.height;
    this[right$] = null;
    this[bottom$] = null;
    implicit_animations.AnimatedPositioned.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPositioned.prototype;
  dart.addTypeTests(implicit_animations.AnimatedPositioned);
  dart.addTypeCaches(implicit_animations.AnimatedPositioned);
  dart.setMethodSignature(implicit_animations.AnimatedPositioned, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedPositioned.__proto__),
    createState: dart.fnType(implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPositioned), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedPositioned, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedPositioned, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedPositioned.__proto__),
    child: dart.finalFieldType(framework.Widget),
    left: dart.finalFieldType(dart.nullable(core.double)),
    top: dart.finalFieldType(dart.nullable(core.double)),
    right: dart.finalFieldType(dart.nullable(core.double)),
    bottom: dart.finalFieldType(dart.nullable(core.double)),
    width: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double))
  }));
  var _left = dart.privateName(implicit_animations, "_left");
  var _top = dart.privateName(implicit_animations, "_top");
  var _right = dart.privateName(implicit_animations, "_right");
  var _bottom = dart.privateName(implicit_animations, "_bottom");
  var _width = dart.privateName(implicit_animations, "_width");
  var _height = dart.privateName(implicit_animations, "_height");
  implicit_animations._AnimatedPositionedState = class _AnimatedPositionedState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPositioned) {
    forEachTween(visitor) {
      this[_left] = T$.TweenNOfdouble().as(visitor(this[_left], this.widget.left, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_top] = T$.TweenNOfdouble().as(visitor(this[_top], this.widget.top, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_right] = T$.TweenNOfdouble().as(visitor(this[_right], this.widget.right, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_bottom] = T$.TweenNOfdouble().as(visitor(this[_bottom], this.widget.bottom, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_width] = T$.TweenNOfdouble().as(visitor(this[_width], this.widget.width, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_height] = T$.TweenNOfdouble().as(visitor(this[_height], this.widget.height, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
    }
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3;
      return new basic.Positioned.new({left: (t1 = this[_left], t1 == null ? null : t1.evaluate(this.animation)), top: (t1$ = this[_top], t1$ == null ? null : t1$.evaluate(this.animation)), right: (t1$0 = this[_right], t1$0 == null ? null : t1$0.evaluate(this.animation)), bottom: (t1$1 = this[_bottom], t1$1 == null ? null : t1$1.evaluate(this.animation)), width: (t1$2 = this[_width], t1$2 == null ? null : t1$2.evaluate(this.animation)), height: (t1$3 = this[_height], t1$3 == null ? null : t1$3.evaluate(this.animation)), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[14] || CT.C14});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("left", this[_left]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("top", this[_top]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("right", this[_right]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("bottom", this[_bottom]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("width", this[_width]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("height", this[_height]));
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedPositionedState.new();
    }
  };
  (implicit_animations._AnimatedPositionedState.new = function() {
    this[_left] = null;
    this[_top] = null;
    this[_right] = null;
    this[_bottom] = null;
    this[_width] = null;
    this[_height] = null;
    implicit_animations._AnimatedPositionedState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedPositionedState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedPositionedState);
  dart.addTypeCaches(implicit_animations._AnimatedPositionedState);
  dart.setMethodSignature(implicit_animations._AnimatedPositionedState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedPositionedState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedPositionedState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedPositionedState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedPositionedState.__proto__),
    [_left]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_top]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_right]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_bottom]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_width]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_height]: dart.fieldType(dart.nullable(tween.Tween$(core.double)))
  }));
  var child$3 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.child");
  var start$ = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.start");
  var top$0 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.top");
  var end$ = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.end");
  var bottom$0 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.bottom");
  var width$0 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.width");
  var height$0 = dart.privateName(implicit_animations, "AnimatedPositionedDirectional.height");
  implicit_animations.AnimatedPositionedDirectional = class AnimatedPositionedDirectional extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$3];
    }
    set child(value) {
      super.child = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get width() {
      return this[width$0];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let start = opts && 'start' in opts ? opts.start : null;
      let top = opts && 'top' in opts ? opts.top : null;
      let end = opts && 'end' in opts ? opts.end : null;
      let bottom = opts && 'bottom' in opts ? opts.bottom : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedPositionedDirectional.new({key: key, child: child, start: start, top: top, end: end, bottom: bottom, width: width, height: height, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[15] || CT.C15});
    }
    createState() {
      return new implicit_animations._AnimatedPositionedDirectionalState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("start", this.start, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("top", this.top, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("end", this.end, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("bottom", this.bottom, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
    }
  };
  (implicit_animations.AnimatedPositionedDirectional.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let start = opts && 'start' in opts ? opts.start : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let end = opts && 'end' in opts ? opts.end : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$3] = child;
    this[start$] = start;
    this[top$0] = top;
    this[end$] = end;
    this[bottom$0] = bottom;
    this[width$0] = width;
    this[height$0] = height;
    if (!(start == null || end == null || width == null)) dart.assertFailed(null, I[1], 1205, 15, "start == null || end == null || width == null");
    if (!(top == null || bottom == null || height == null)) dart.assertFailed(null, I[1], 1206, 15, "top == null || bottom == null || height == null");
    implicit_animations.AnimatedPositionedDirectional.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPositionedDirectional.prototype;
  dart.addTypeTests(implicit_animations.AnimatedPositionedDirectional);
  dart.addTypeCaches(implicit_animations.AnimatedPositionedDirectional);
  dart.setMethodSignature(implicit_animations.AnimatedPositionedDirectional, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedPositionedDirectional.__proto__),
    createState: dart.fnType(implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPositionedDirectional), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedPositionedDirectional, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedPositionedDirectional, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedPositionedDirectional.__proto__),
    child: dart.finalFieldType(framework.Widget),
    start: dart.finalFieldType(dart.nullable(core.double)),
    top: dart.finalFieldType(dart.nullable(core.double)),
    end: dart.finalFieldType(dart.nullable(core.double)),
    bottom: dart.finalFieldType(dart.nullable(core.double)),
    width: dart.finalFieldType(dart.nullable(core.double)),
    height: dart.finalFieldType(dart.nullable(core.double))
  }));
  var _start = dart.privateName(implicit_animations, "_start");
  var _end = dart.privateName(implicit_animations, "_end");
  implicit_animations._AnimatedPositionedDirectionalState = class _AnimatedPositionedDirectionalState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPositionedDirectional) {
    forEachTween(visitor) {
      this[_start] = T$.TweenNOfdouble().as(visitor(this[_start], this.widget.start, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_top] = T$.TweenNOfdouble().as(visitor(this[_top], this.widget.top, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_end] = T$.TweenNOfdouble().as(visitor(this[_end], this.widget.end, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_bottom] = T$.TweenNOfdouble().as(visitor(this[_bottom], this.widget.bottom, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_width] = T$.TweenNOfdouble().as(visitor(this[_width], this.widget.width, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_height] = T$.TweenNOfdouble().as(visitor(this[_height], this.widget.height, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
    }
    build(context) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3;
      if (!debug.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[1], 1273, 12, "debugCheckHasDirectionality(context)");
      return basic.Positioned.directional({textDirection: basic.Directionality.of(context), start: (t1 = this[_start], t1 == null ? null : t1.evaluate(this.animation)), top: (t1$ = this[_top], t1$ == null ? null : t1$.evaluate(this.animation)), end: (t1$0 = this[_end], t1$0 == null ? null : t1$0.evaluate(this.animation)), bottom: (t1$1 = this[_bottom], t1$1 == null ? null : t1$1.evaluate(this.animation)), width: (t1$2 = this[_width], t1$2 == null ? null : t1$2.evaluate(this.animation)), height: (t1$3 = this[_height], t1$3 == null ? null : t1$3.evaluate(this.animation)), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[16] || CT.C16});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("start", this[_start]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("top", this[_top]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("end", this[_end]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("bottom", this[_bottom]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("width", this[_width]));
      description.add(new (T$.ObjectFlagPropertyOfTweenOfdouble()).has("height", this[_height]));
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedPositionedDirectionalState.new();
    }
  };
  (implicit_animations._AnimatedPositionedDirectionalState.new = function() {
    this[_start] = null;
    this[_top] = null;
    this[_end] = null;
    this[_bottom] = null;
    this[_width] = null;
    this[_height] = null;
    implicit_animations._AnimatedPositionedDirectionalState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedPositionedDirectionalState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedPositionedDirectionalState);
  dart.addTypeCaches(implicit_animations._AnimatedPositionedDirectionalState);
  dart.setMethodSignature(implicit_animations._AnimatedPositionedDirectionalState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedPositionedDirectionalState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedPositionedDirectionalState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedPositionedDirectionalState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedPositionedDirectionalState.__proto__),
    [_start]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_top]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_end]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_bottom]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_width]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_height]: dart.fieldType(dart.nullable(tween.Tween$(core.double)))
  }));
  var child$4 = dart.privateName(implicit_animations, "AnimatedScale.child");
  var scale$ = dart.privateName(implicit_animations, "AnimatedScale.scale");
  var alignment$1 = dart.privateName(implicit_animations, "AnimatedScale.alignment");
  var filterQuality$ = dart.privateName(implicit_animations, "AnimatedScale.filterQuality");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  implicit_animations.AnimatedScale = class AnimatedScale extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$4];
    }
    set child(value) {
      super.child = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get alignment() {
      return this[alignment$1];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let scale = opts && 'scale' in opts ? opts.scale : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[17] || CT.C17;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedScale.new({key: key, child: child, scale: scale, alignment: alignment, filterQuality: filterQuality, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[18] || CT.C18});
    }
    createState() {
      return new implicit_animations._AnimatedScaleState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("scale", this.scale));
      properties.add(new (T$.DiagnosticsPropertyOfAlignment()).new("alignment", this.alignment, {defaultValue: alignment.Alignment.center}));
      properties.add(new (T$.EnumPropertyOfFilterQuality()).new("filterQuality", this.filterQuality, {defaultValue: null}));
    }
  };
  (implicit_animations.AnimatedScale.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[17] || CT.C17;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$4] = child;
    this[scale$] = scale;
    this[alignment$1] = alignment;
    this[filterQuality$] = filterQuality;
    if (!(scale !== null)) dart.assertFailed(null, I[1], 1367, 15, "scale != null");
    implicit_animations.AnimatedScale.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedScale.prototype;
  dart.addTypeTests(implicit_animations.AnimatedScale);
  dart.addTypeCaches(implicit_animations.AnimatedScale);
  dart.setMethodSignature(implicit_animations.AnimatedScale, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedScale.__proto__),
    createState: dart.fnType(implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedScale), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedScale, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedScale, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedScale.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    scale: dart.finalFieldType(core.double),
    alignment: dart.finalFieldType(alignment.Alignment),
    filterQuality: dart.finalFieldType(dart.nullable(ui.FilterQuality))
  }));
  var _scale = dart.privateName(implicit_animations, "_scale");
  var ___AnimatedScaleState__scaleAnimation = dart.privateName(implicit_animations, "_#_AnimatedScaleState#_scaleAnimation");
  var _scaleAnimation = dart.privateName(implicit_animations, "_scaleAnimation");
  implicit_animations._AnimatedScaleState = class _AnimatedScaleState extends implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedScale) {
    get [_scaleAnimation]() {
      let t1;
      t1 = this[___AnimatedScaleState__scaleAnimation];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_scaleAnimation")) : t1;
    }
    set [_scaleAnimation](t1) {
      this[___AnimatedScaleState__scaleAnimation] = t1;
    }
    forEachTween(visitor) {
      this[_scale] = T$.TweenNOfdouble().as(visitor(this[_scale], this.widget.scale, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
    }
    didUpdateTweens() {
      this[_scaleAnimation] = this.animation.drive(core.double, dart.nullCheck(this[_scale]));
    }
    build(context) {
      return new transitions.ScaleTransition.new({scale: this[_scaleAnimation], alignment: this.widget.alignment, filterQuality: this.widget.filterQuality, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedScaleState.new();
    }
  };
  (implicit_animations._AnimatedScaleState.new = function() {
    this[_scale] = null;
    this[___AnimatedScaleState__scaleAnimation] = null;
    implicit_animations._AnimatedScaleState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedScaleState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedScaleState);
  dart.addTypeCaches(implicit_animations._AnimatedScaleState);
  dart.setMethodSignature(implicit_animations._AnimatedScaleState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedScaleState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(implicit_animations._AnimatedScaleState, () => ({
    __proto__: dart.getGetters(implicit_animations._AnimatedScaleState.__proto__),
    [_scaleAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(implicit_animations._AnimatedScaleState, () => ({
    __proto__: dart.getSetters(implicit_animations._AnimatedScaleState.__proto__),
    [_scaleAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(implicit_animations._AnimatedScaleState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedScaleState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedScaleState.__proto__),
    [_scale]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [___AnimatedScaleState__scaleAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var child$5 = dart.privateName(implicit_animations, "AnimatedRotation.child");
  var turns$ = dart.privateName(implicit_animations, "AnimatedRotation.turns");
  var alignment$2 = dart.privateName(implicit_animations, "AnimatedRotation.alignment");
  var filterQuality$0 = dart.privateName(implicit_animations, "AnimatedRotation.filterQuality");
  implicit_animations.AnimatedRotation = class AnimatedRotation extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$5];
    }
    set child(value) {
      super.child = value;
    }
    get turns() {
      return this[turns$];
    }
    set turns(value) {
      super.turns = value;
    }
    get alignment() {
      return this[alignment$2];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get filterQuality() {
      return this[filterQuality$0];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let turns = opts && 'turns' in opts ? opts.turns : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[17] || CT.C17;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedRotation.new({key: key, child: child, turns: turns, alignment: alignment, filterQuality: filterQuality, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[20] || CT.C20});
    }
    createState() {
      return new implicit_animations._AnimatedRotationState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("turns", this.turns));
      properties.add(new (T$.DiagnosticsPropertyOfAlignment()).new("alignment", this.alignment, {defaultValue: alignment.Alignment.center}));
      properties.add(new (T$.EnumPropertyOfFilterQuality()).new("filterQuality", this.filterQuality, {defaultValue: null}));
    }
  };
  (implicit_animations.AnimatedRotation.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let turns = opts && 'turns' in opts ? opts.turns : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[17] || CT.C17;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$5] = child;
    this[turns$] = turns;
    this[alignment$2] = alignment;
    this[filterQuality$0] = filterQuality;
    if (!(turns !== null)) dart.assertFailed(null, I[1], 1495, 15, "turns != null");
    implicit_animations.AnimatedRotation.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedRotation.prototype;
  dart.addTypeTests(implicit_animations.AnimatedRotation);
  dart.addTypeCaches(implicit_animations.AnimatedRotation);
  dart.setMethodSignature(implicit_animations.AnimatedRotation, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedRotation.__proto__),
    createState: dart.fnType(implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedRotation), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedRotation, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedRotation, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedRotation.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    turns: dart.finalFieldType(core.double),
    alignment: dart.finalFieldType(alignment.Alignment),
    filterQuality: dart.finalFieldType(dart.nullable(ui.FilterQuality))
  }));
  var _turns = dart.privateName(implicit_animations, "_turns");
  var ___AnimatedRotationState__turnsAnimation = dart.privateName(implicit_animations, "_#_AnimatedRotationState#_turnsAnimation");
  var _turnsAnimation = dart.privateName(implicit_animations, "_turnsAnimation");
  implicit_animations._AnimatedRotationState = class _AnimatedRotationState extends implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedRotation) {
    get [_turnsAnimation]() {
      let t2;
      t2 = this[___AnimatedRotationState__turnsAnimation];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_turnsAnimation")) : t2;
    }
    set [_turnsAnimation](t2) {
      this[___AnimatedRotationState__turnsAnimation] = t2;
    }
    forEachTween(visitor) {
      this[_turns] = T$.TweenNOfdouble().as(visitor(this[_turns], this.widget.turns, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
    }
    didUpdateTweens() {
      this[_turnsAnimation] = this.animation.drive(core.double, dart.nullCheck(this[_turns]));
    }
    build(context) {
      return new transitions.RotationTransition.new({turns: this[_turnsAnimation], alignment: this.widget.alignment, filterQuality: this.widget.filterQuality, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[21] || CT.C21});
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedRotationState.new();
    }
  };
  (implicit_animations._AnimatedRotationState.new = function() {
    this[_turns] = null;
    this[___AnimatedRotationState__turnsAnimation] = null;
    implicit_animations._AnimatedRotationState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedRotationState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedRotationState);
  dart.addTypeCaches(implicit_animations._AnimatedRotationState);
  dart.setMethodSignature(implicit_animations._AnimatedRotationState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedRotationState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(implicit_animations._AnimatedRotationState, () => ({
    __proto__: dart.getGetters(implicit_animations._AnimatedRotationState.__proto__),
    [_turnsAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(implicit_animations._AnimatedRotationState, () => ({
    __proto__: dart.getSetters(implicit_animations._AnimatedRotationState.__proto__),
    [_turnsAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(implicit_animations._AnimatedRotationState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedRotationState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedRotationState.__proto__),
    [_turns]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [___AnimatedRotationState__turnsAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var child$6 = dart.privateName(implicit_animations, "AnimatedSlide.child");
  var offset$ = dart.privateName(implicit_animations, "AnimatedSlide.offset");
  implicit_animations.AnimatedSlide = class AnimatedSlide extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$6];
    }
    set child(value) {
      super.child = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedSlide.new({key: key, child: child, offset: offset, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
    }
    createState() {
      return new implicit_animations._AnimatedSlideState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("offset", this.offset));
    }
  };
  (implicit_animations.AnimatedSlide.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$6] = child;
    this[offset$] = offset;
    implicit_animations.AnimatedSlide.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedSlide.prototype;
  dart.addTypeTests(implicit_animations.AnimatedSlide);
  dart.addTypeCaches(implicit_animations.AnimatedSlide);
  dart.setMethodSignature(implicit_animations.AnimatedSlide, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedSlide.__proto__),
    createState: dart.fnType(implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedSlide), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedSlide, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedSlide, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedSlide.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    offset: dart.finalFieldType(ui.Offset)
  }));
  var _offset = dart.privateName(implicit_animations, "_offset");
  var ___AnimatedSlideState__offsetAnimation = dart.privateName(implicit_animations, "_#_AnimatedSlideState#_offsetAnimation");
  var _offsetAnimation = dart.privateName(implicit_animations, "_offsetAnimation");
  implicit_animations._AnimatedSlideState = class _AnimatedSlideState extends implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedSlide) {
    get [_offsetAnimation]() {
      let t3;
      t3 = this[___AnimatedSlideState__offsetAnimation];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_offsetAnimation")) : t3;
    }
    set [_offsetAnimation](t3) {
      this[___AnimatedSlideState__offsetAnimation] = t3;
    }
    forEachTween(visitor) {
      this[_offset] = T$.TweenNOfOffset().as(visitor(this[_offset], this.widget.offset, dart.fn(value => new (T$.TweenOfOffset()).new({begin: ui.Offset.as(value)}), T$.dynamicToTweenOfOffset())));
    }
    didUpdateTweens() {
      this[_offsetAnimation] = this.animation.drive(ui.Offset, dart.nullCheck(this[_offset]));
    }
    build(context) {
      return new transitions.SlideTransition.new({position: this[_offsetAnimation], child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[23] || CT.C23});
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedSlideState.new();
    }
  };
  (implicit_animations._AnimatedSlideState.new = function() {
    this[_offset] = null;
    this[___AnimatedSlideState__offsetAnimation] = null;
    implicit_animations._AnimatedSlideState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedSlideState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedSlideState);
  dart.addTypeCaches(implicit_animations._AnimatedSlideState);
  dart.setMethodSignature(implicit_animations._AnimatedSlideState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedSlideState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(implicit_animations._AnimatedSlideState, () => ({
    __proto__: dart.getGetters(implicit_animations._AnimatedSlideState.__proto__),
    [_offsetAnimation]: animation.Animation$(ui.Offset)
  }));
  dart.setSetterSignature(implicit_animations._AnimatedSlideState, () => ({
    __proto__: dart.getSetters(implicit_animations._AnimatedSlideState.__proto__),
    [_offsetAnimation]: animation.Animation$(ui.Offset)
  }));
  dart.setLibraryUri(implicit_animations._AnimatedSlideState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedSlideState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedSlideState.__proto__),
    [_offset]: dart.fieldType(dart.nullable(tween.Tween$(ui.Offset))),
    [___AnimatedSlideState__offsetAnimation]: dart.fieldType(dart.nullable(animation.Animation$(ui.Offset)))
  }));
  var child$7 = dart.privateName(implicit_animations, "AnimatedOpacity.child");
  var opacity$ = dart.privateName(implicit_animations, "AnimatedOpacity.opacity");
  var alwaysIncludeSemantics$ = dart.privateName(implicit_animations, "AnimatedOpacity.alwaysIncludeSemantics");
  implicit_animations.AnimatedOpacity = class AnimatedOpacity extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$7];
    }
    set child(value) {
      super.child = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get alwaysIncludeSemantics() {
      return this[alwaysIncludeSemantics$];
    }
    set alwaysIncludeSemantics(value) {
      super.alwaysIncludeSemantics = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
      return new implicit_animations.AnimatedOpacity.new({key: key, child: child, opacity: opacity, curve: curve, duration: duration, onEnd: onEnd, alwaysIncludeSemantics: alwaysIncludeSemantics, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
    }
    createState() {
      return new implicit_animations._AnimatedOpacityState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity));
    }
  };
  (implicit_animations.AnimatedOpacity.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$7] = child;
    this[opacity$] = opacity;
    this[alwaysIncludeSemantics$] = alwaysIncludeSemantics;
    if (!(opacity !== null && opacity >= 0.0 && opacity <= 1.0)) dart.assertFailed(null, I[1], 1707, 15, "opacity != null && opacity >= 0.0 && opacity <= 1.0");
    implicit_animations.AnimatedOpacity.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedOpacity.prototype;
  dart.addTypeTests(implicit_animations.AnimatedOpacity);
  dart.addTypeCaches(implicit_animations.AnimatedOpacity);
  dart.setMethodSignature(implicit_animations.AnimatedOpacity, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedOpacity.__proto__),
    createState: dart.fnType(implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedOpacity), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedOpacity, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedOpacity, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedOpacity.__proto__),
    child: dart.finalFieldType(dart.nullable(framework.Widget)),
    opacity: dart.finalFieldType(core.double),
    alwaysIncludeSemantics: dart.finalFieldType(core.bool)
  }));
  var _opacity = dart.privateName(implicit_animations, "_opacity");
  var ___AnimatedOpacityState__opacityAnimation = dart.privateName(implicit_animations, "_#_AnimatedOpacityState#_opacityAnimation");
  var _opacityAnimation = dart.privateName(implicit_animations, "_opacityAnimation");
  implicit_animations._AnimatedOpacityState = class _AnimatedOpacityState extends implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.AnimatedOpacity) {
    get [_opacityAnimation]() {
      let t4;
      t4 = this[___AnimatedOpacityState__opacityAnimation];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_opacityAnimation")) : t4;
    }
    set [_opacityAnimation](t4) {
      this[___AnimatedOpacityState__opacityAnimation] = t4;
    }
    forEachTween(visitor) {
      this[_opacity] = T$.TweenNOfdouble().as(visitor(this[_opacity], this.widget.opacity, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
    }
    didUpdateTweens() {
      this[_opacityAnimation] = this.animation.drive(core.double, dart.nullCheck(this[_opacity]));
    }
    build(context) {
      return new transitions.FadeTransition.new({opacity: this[_opacityAnimation], alwaysIncludeSemantics: this.widget.alwaysIncludeSemantics, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[25] || CT.C25});
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedOpacityState.new();
    }
  };
  (implicit_animations._AnimatedOpacityState.new = function() {
    this[_opacity] = null;
    this[___AnimatedOpacityState__opacityAnimation] = null;
    implicit_animations._AnimatedOpacityState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedOpacityState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedOpacityState);
  dart.addTypeCaches(implicit_animations._AnimatedOpacityState);
  dart.setMethodSignature(implicit_animations._AnimatedOpacityState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedOpacityState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(implicit_animations._AnimatedOpacityState, () => ({
    __proto__: dart.getGetters(implicit_animations._AnimatedOpacityState.__proto__),
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(implicit_animations._AnimatedOpacityState, () => ({
    __proto__: dart.getSetters(implicit_animations._AnimatedOpacityState.__proto__),
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(implicit_animations._AnimatedOpacityState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedOpacityState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedOpacityState.__proto__),
    [_opacity]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [___AnimatedOpacityState__opacityAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var sliver$ = dart.privateName(implicit_animations, "SliverAnimatedOpacity.sliver");
  var opacity$0 = dart.privateName(implicit_animations, "SliverAnimatedOpacity.opacity");
  var alwaysIncludeSemantics$0 = dart.privateName(implicit_animations, "SliverAnimatedOpacity.alwaysIncludeSemantics");
  implicit_animations.SliverAnimatedOpacity = class SliverAnimatedOpacity extends implicit_animations.ImplicitlyAnimatedWidget {
    get sliver() {
      return this[sliver$];
    }
    set sliver(value) {
      super.sliver = value;
    }
    get opacity() {
      return this[opacity$0];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get alwaysIncludeSemantics() {
      return this[alwaysIncludeSemantics$0];
    }
    set alwaysIncludeSemantics(value) {
      super.alwaysIncludeSemantics = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let sliver = opts && 'sliver' in opts ? opts.sliver : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
      return new implicit_animations.SliverAnimatedOpacity.new({key: key, sliver: sliver, opacity: opacity, curve: curve, duration: duration, onEnd: onEnd, alwaysIncludeSemantics: alwaysIncludeSemantics, $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
    createState() {
      return new implicit_animations._SliverAnimatedOpacityState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity));
    }
  };
  (implicit_animations.SliverAnimatedOpacity.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[sliver$] = sliver;
    this[opacity$0] = opacity;
    this[alwaysIncludeSemantics$0] = alwaysIncludeSemantics;
    if (!(opacity !== null && opacity >= 0.0 && opacity <= 1.0)) dart.assertFailed(null, I[1], 1803, 15, "opacity != null && opacity >= 0.0 && opacity <= 1.0");
    implicit_animations.SliverAnimatedOpacity.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.SliverAnimatedOpacity.prototype;
  dart.addTypeTests(implicit_animations.SliverAnimatedOpacity);
  dart.addTypeCaches(implicit_animations.SliverAnimatedOpacity);
  dart.setMethodSignature(implicit_animations.SliverAnimatedOpacity, () => ({
    __proto__: dart.getMethods(implicit_animations.SliverAnimatedOpacity.__proto__),
    createState: dart.fnType(implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.SliverAnimatedOpacity), [])
  }));
  dart.setLibraryUri(implicit_animations.SliverAnimatedOpacity, I[0]);
  dart.setFieldSignature(implicit_animations.SliverAnimatedOpacity, () => ({
    __proto__: dart.getFields(implicit_animations.SliverAnimatedOpacity.__proto__),
    sliver: dart.finalFieldType(dart.nullable(framework.Widget)),
    opacity: dart.finalFieldType(core.double),
    alwaysIncludeSemantics: dart.finalFieldType(core.bool)
  }));
  var ___SliverAnimatedOpacityState__opacityAnimation = dart.privateName(implicit_animations, "_#_SliverAnimatedOpacityState#_opacityAnimation");
  implicit_animations._SliverAnimatedOpacityState = class _SliverAnimatedOpacityState extends implicit_animations.ImplicitlyAnimatedWidgetState$(implicit_animations.SliverAnimatedOpacity) {
    get [_opacityAnimation]() {
      let t5;
      t5 = this[___SliverAnimatedOpacityState__opacityAnimation];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_opacityAnimation")) : t5;
    }
    set [_opacityAnimation](t5) {
      this[___SliverAnimatedOpacityState__opacityAnimation] = t5;
    }
    forEachTween(visitor) {
      this[_opacity] = T$.TweenNOfdouble().as(visitor(this[_opacity], this.widget.opacity, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
    }
    didUpdateTweens() {
      this[_opacityAnimation] = this.animation.drive(core.double, dart.nullCheck(this[_opacity]));
    }
    build(context) {
      return new transitions.SliverFadeTransition.new({opacity: this[_opacityAnimation], sliver: this.widget.sliver, alwaysIncludeSemantics: this.widget.alwaysIncludeSemantics, $creationLocationd_0dea112b090073317d4: C[27] || CT.C27});
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._SliverAnimatedOpacityState.new();
    }
  };
  (implicit_animations._SliverAnimatedOpacityState.new = function() {
    this[_opacity] = null;
    this[___SliverAnimatedOpacityState__opacityAnimation] = null;
    implicit_animations._SliverAnimatedOpacityState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._SliverAnimatedOpacityState.prototype;
  dart.addTypeTests(implicit_animations._SliverAnimatedOpacityState);
  dart.addTypeCaches(implicit_animations._SliverAnimatedOpacityState);
  dart.setMethodSignature(implicit_animations._SliverAnimatedOpacityState, () => ({
    __proto__: dart.getMethods(implicit_animations._SliverAnimatedOpacityState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(implicit_animations._SliverAnimatedOpacityState, () => ({
    __proto__: dart.getGetters(implicit_animations._SliverAnimatedOpacityState.__proto__),
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setSetterSignature(implicit_animations._SliverAnimatedOpacityState, () => ({
    __proto__: dart.getSetters(implicit_animations._SliverAnimatedOpacityState.__proto__),
    [_opacityAnimation]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(implicit_animations._SliverAnimatedOpacityState, I[0]);
  dart.setFieldSignature(implicit_animations._SliverAnimatedOpacityState, () => ({
    __proto__: dart.getFields(implicit_animations._SliverAnimatedOpacityState.__proto__),
    [_opacity]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [___SliverAnimatedOpacityState__opacityAnimation]: dart.fieldType(dart.nullable(animation.Animation$(core.double)))
  }));
  var child$8 = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.child");
  var style$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.style");
  var textAlign$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.textAlign");
  var softWrap$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.softWrap");
  var overflow$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.overflow");
  var maxLines$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.maxLines");
  var textWidthBasis$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.textWidthBasis");
  var textHeightBehavior$ = dart.privateName(implicit_animations, "AnimatedDefaultTextStyle.textHeightBehavior");
  implicit_animations.AnimatedDefaultTextStyle = class AnimatedDefaultTextStyle extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$8];
    }
    set child(value) {
      super.child = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get softWrap() {
      return this[softWrap$];
    }
    set softWrap(value) {
      super.softWrap = value;
    }
    get overflow() {
      return this[overflow$];
    }
    set overflow(value) {
      super.overflow = value;
    }
    get maxLines() {
      return this[maxLines$];
    }
    set maxLines(value) {
      super.maxLines = value;
    }
    get textWidthBasis() {
      return this[textWidthBasis$];
    }
    set textWidthBasis(value) {
      super.textWidthBasis = value;
    }
    get textHeightBehavior() {
      return this[textHeightBehavior$];
    }
    set textHeightBehavior(value) {
      super.textHeightBehavior = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let style = opts && 'style' in opts ? opts.style : null;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      let softWrap = opts && 'softWrap' in opts ? opts.softWrap : true;
      let overflow = opts && 'overflow' in opts ? opts.overflow : C[28] || CT.C28;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[29] || CT.C29;
      let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedDefaultTextStyle.new({key: key, child: child, style: style, textAlign: textAlign, softWrap: softWrap, overflow: overflow, maxLines: maxLines, textWidthBasis: textWidthBasis, textHeightBehavior: textHeightBehavior, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[30] || CT.C30});
    }
    createState() {
      return new implicit_animations._AnimatedDefaultTextStyleState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      this.style.debugFillProperties(properties);
      properties.add(new (T$.EnumPropertyOfTextAlign()).new("textAlign", this.textAlign, {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("softWrap", {value: this.softWrap, ifTrue: "wrapping at box width", ifFalse: "no wrapping except at line break characters", showName: true}));
      properties.add(new (T$.EnumPropertyOfTextOverflow()).new("overflow", this.overflow, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {defaultValue: null}));
      properties.add(new (T$.EnumPropertyOfTextWidthBasis()).new("textWidthBasis", this.textWidthBasis, {defaultValue: text_painter.TextWidthBasis.parent}));
      properties.add(new (T$.DiagnosticsPropertyOfTextHeightBehavior()).new("textHeightBehavior", this.textHeightBehavior, {defaultValue: null}));
    }
  };
  (implicit_animations.AnimatedDefaultTextStyle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : true;
    let overflow = opts && 'overflow' in opts ? opts.overflow : C[28] || CT.C28;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : C[29] || CT.C29;
    let textHeightBehavior = opts && 'textHeightBehavior' in opts ? opts.textHeightBehavior : null;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$8] = child;
    this[style$] = style;
    this[textAlign$] = textAlign;
    this[softWrap$] = softWrap;
    this[overflow$] = overflow;
    this[maxLines$] = maxLines;
    this[textWidthBasis$] = textWidthBasis;
    this[textHeightBehavior$] = textHeightBehavior;
    if (!(style !== null)) dart.assertFailed(null, I[1], 1899, 15, "style != null");
    if (!(child !== null)) dart.assertFailed(null, I[1], 1900, 15, "child != null");
    if (!(softWrap !== null)) dart.assertFailed(null, I[1], 1901, 15, "softWrap != null");
    if (!(overflow !== null)) dart.assertFailed(null, I[1], 1902, 15, "overflow != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, I[1], 1903, 15, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis !== null)) dart.assertFailed(null, I[1], 1904, 15, "textWidthBasis != null");
    implicit_animations.AnimatedDefaultTextStyle.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedDefaultTextStyle.prototype;
  dart.addTypeTests(implicit_animations.AnimatedDefaultTextStyle);
  dart.addTypeCaches(implicit_animations.AnimatedDefaultTextStyle);
  dart.setMethodSignature(implicit_animations.AnimatedDefaultTextStyle, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedDefaultTextStyle.__proto__),
    createState: dart.fnType(implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedDefaultTextStyle), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedDefaultTextStyle, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedDefaultTextStyle, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedDefaultTextStyle.__proto__),
    child: dart.finalFieldType(framework.Widget),
    style: dart.finalFieldType(text_style.TextStyle),
    textAlign: dart.finalFieldType(dart.nullable(ui.TextAlign)),
    softWrap: dart.finalFieldType(core.bool),
    overflow: dart.finalFieldType(text_painter.TextOverflow),
    maxLines: dart.finalFieldType(dart.nullable(core.int)),
    textWidthBasis: dart.finalFieldType(text_painter.TextWidthBasis),
    textHeightBehavior: dart.finalFieldType(dart.nullable(ui.TextHeightBehavior))
  }));
  var _style = dart.privateName(implicit_animations, "_style");
  implicit_animations._AnimatedDefaultTextStyleState = class _AnimatedDefaultTextStyleState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedDefaultTextStyle) {
    forEachTween(visitor) {
      this[_style] = T$.TextStyleTweenN().as(visitor(this[_style], this.widget.style, dart.fn(value => new implicit_animations.TextStyleTween.new({begin: text_style.TextStyle.as(value)}), T$.dynamicToTextStyleTween())));
    }
    build(context) {
      return new text.DefaultTextStyle.new({style: dart.nullCheck(this[_style]).evaluate(this.animation), textAlign: this.widget.textAlign, softWrap: this.widget.softWrap, overflow: this.widget.overflow, maxLines: this.widget.maxLines, textWidthBasis: this.widget.textWidthBasis, textHeightBehavior: this.widget.textHeightBehavior, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[31] || CT.C31});
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedDefaultTextStyleState.new();
    }
  };
  (implicit_animations._AnimatedDefaultTextStyleState.new = function() {
    this[_style] = null;
    implicit_animations._AnimatedDefaultTextStyleState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedDefaultTextStyleState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedDefaultTextStyleState);
  dart.addTypeCaches(implicit_animations._AnimatedDefaultTextStyleState);
  dart.setMethodSignature(implicit_animations._AnimatedDefaultTextStyleState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedDefaultTextStyleState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedDefaultTextStyleState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedDefaultTextStyleState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedDefaultTextStyleState.__proto__),
    [_style]: dart.fieldType(dart.nullable(implicit_animations.TextStyleTween))
  }));
  var child$9 = dart.privateName(implicit_animations, "AnimatedPhysicalModel.child");
  var shape$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.shape");
  var clipBehavior$0 = dart.privateName(implicit_animations, "AnimatedPhysicalModel.clipBehavior");
  var borderRadius$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.borderRadius");
  var elevation$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.elevation");
  var color$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.color");
  var animateColor$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.animateColor");
  var shadowColor$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.shadowColor");
  var animateShadowColor$ = dart.privateName(implicit_animations, "AnimatedPhysicalModel.animateShadowColor");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  implicit_animations.AnimatedPhysicalModel = class AnimatedPhysicalModel extends implicit_animations.ImplicitlyAnimatedWidget {
    get child() {
      return this[child$9];
    }
    set child(value) {
      super.child = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get clipBehavior() {
      return this[clipBehavior$0];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get animateColor() {
      return this[animateColor$];
    }
    set animateColor(value) {
      super.animateColor = value;
    }
    get shadowColor() {
      return this[shadowColor$];
    }
    set shadowColor(value) {
      super.shadowColor = value;
    }
    get animateShadowColor() {
      return this[animateShadowColor$];
    }
    set animateShadowColor(value) {
      super.animateShadowColor = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[32] || CT.C32;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let animateColor = opts && 'animateColor' in opts ? opts.animateColor : true;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      let animateShadowColor = opts && 'animateShadowColor' in opts ? opts.animateShadowColor : true;
      let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
      return new implicit_animations.AnimatedPhysicalModel.new({key: key, child: child, shape: shape, clipBehavior: clipBehavior, borderRadius: borderRadius, elevation: elevation, color: color, animateColor: animateColor, shadowColor: shadowColor, animateShadowColor: animateShadowColor, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
    }
    createState() {
      return new implicit_animations._AnimatedPhysicalModelState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.EnumPropertyOfBoxShape()).new("shape", this.shape));
      properties.add(new (T$.DiagnosticsPropertyOfBorderRadius()).new("borderRadius", this.borderRadius));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation));
      properties.add(new colors.ColorProperty.new("color", this.color));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("animateColor", this.animateColor));
      properties.add(new colors.ColorProperty.new("shadowColor", this.shadowColor));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("animateShadowColor", this.animateShadowColor));
    }
  };
  (implicit_animations.AnimatedPhysicalModel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[32] || CT.C32;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let animateColor = opts && 'animateColor' in opts ? opts.animateColor : true;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    let animateShadowColor = opts && 'animateShadowColor' in opts ? opts.animateShadowColor : true;
    let curve = opts && 'curve' in opts ? opts.curve : C[0] || CT.C0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onEnd = opts && 'onEnd' in opts ? opts.onEnd : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$9] = child;
    this[shape$] = shape;
    this[clipBehavior$0] = clipBehavior;
    this[borderRadius$] = borderRadius;
    this[elevation$] = elevation;
    this[color$] = color;
    this[animateColor$] = animateColor;
    this[shadowColor$] = shadowColor;
    this[animateShadowColor$] = animateShadowColor;
    if (!(child !== null)) dart.assertFailed(null, I[1], 2028, 15, "child != null");
    if (!(shape !== null)) dart.assertFailed(null, I[1], 2029, 15, "shape != null");
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[1], 2030, 15, "clipBehavior != null");
    if (!(borderRadius !== null)) dart.assertFailed(null, I[1], 2031, 15, "borderRadius != null");
    if (!(elevation !== null && elevation >= 0.0)) dart.assertFailed(null, I[1], 2032, 15, "elevation != null && elevation >= 0.0");
    if (!(color !== null)) dart.assertFailed(null, I[1], 2033, 15, "color != null");
    if (!(shadowColor !== null)) dart.assertFailed(null, I[1], 2034, 15, "shadowColor != null");
    if (!(animateColor !== null)) dart.assertFailed(null, I[1], 2035, 15, "animateColor != null");
    if (!(animateShadowColor !== null)) dart.assertFailed(null, I[1], 2036, 15, "animateShadowColor != null");
    implicit_animations.AnimatedPhysicalModel.__proto__.new.call(this, {key: key, curve: curve, duration: duration, onEnd: onEnd, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = implicit_animations.AnimatedPhysicalModel.prototype;
  dart.addTypeTests(implicit_animations.AnimatedPhysicalModel);
  dart.addTypeCaches(implicit_animations.AnimatedPhysicalModel);
  dart.setMethodSignature(implicit_animations.AnimatedPhysicalModel, () => ({
    __proto__: dart.getMethods(implicit_animations.AnimatedPhysicalModel.__proto__),
    createState: dart.fnType(implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPhysicalModel), [])
  }));
  dart.setLibraryUri(implicit_animations.AnimatedPhysicalModel, I[0]);
  dart.setFieldSignature(implicit_animations.AnimatedPhysicalModel, () => ({
    __proto__: dart.getFields(implicit_animations.AnimatedPhysicalModel.__proto__),
    child: dart.finalFieldType(framework.Widget),
    shape: dart.finalFieldType(box_border.BoxShape),
    clipBehavior: dart.finalFieldType(ui.Clip),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius),
    elevation: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    animateColor: dart.finalFieldType(core.bool),
    shadowColor: dart.finalFieldType(ui.Color),
    animateShadowColor: dart.finalFieldType(core.bool)
  }));
  var _borderRadius = dart.privateName(implicit_animations, "_borderRadius");
  var _elevation = dart.privateName(implicit_animations, "_elevation");
  var _color = dart.privateName(implicit_animations, "_color");
  var _shadowColor = dart.privateName(implicit_animations, "_shadowColor");
  implicit_animations._AnimatedPhysicalModelState = class _AnimatedPhysicalModelState extends implicit_animations.AnimatedWidgetBaseState$(implicit_animations.AnimatedPhysicalModel) {
    forEachTween(visitor) {
      this[_borderRadius] = T$.BorderRadiusTweenN().as(visitor(this[_borderRadius], this.widget.borderRadius, dart.fn(value => new implicit_animations.BorderRadiusTween.new({begin: border_radius.BorderRadius.as(value)}), T$.dynamicToBorderRadiusTween())));
      this[_elevation] = T$.TweenNOfdouble().as(visitor(this[_elevation], this.widget.elevation, dart.fn(value => new (T$.TweenOfdouble()).new({begin: core.double.as(value)}), T$.dynamicToTweenOfdouble())));
      this[_color] = T$.ColorTweenN().as(visitor(this[_color], this.widget.color, dart.fn(value => new tween.ColorTween.new({begin: ui.Color.as(value)}), T$.dynamicToColorTween())));
      this[_shadowColor] = T$.ColorTweenN().as(visitor(this[_shadowColor], this.widget.shadowColor, dart.fn(value => new tween.ColorTween.new({begin: ui.Color.as(value)}), T$.dynamicToColorTween())));
    }
    build(context) {
      return new basic.PhysicalModel.new({shape: this.widget.shape, clipBehavior: this.widget.clipBehavior, borderRadius: dart.nullCheck(this[_borderRadius]).evaluate(this.animation), elevation: dart.nullCheck(this[_elevation]).evaluate(this.animation), color: this.widget.animateColor ? dart.nullCheck(dart.nullCheck(this[_color]).evaluate(this.animation)) : this.widget.color, shadowColor: this.widget.animateShadowColor ? dart.nullCheck(dart.nullCheck(this[_shadowColor]).evaluate(this.animation)) : this.widget.shadowColor, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[35] || CT.C35});
    }
    static ['_#new#tearOff']() {
      return new implicit_animations._AnimatedPhysicalModelState.new();
    }
  };
  (implicit_animations._AnimatedPhysicalModelState.new = function() {
    this[_borderRadius] = null;
    this[_elevation] = null;
    this[_color] = null;
    this[_shadowColor] = null;
    implicit_animations._AnimatedPhysicalModelState.__proto__.new.call(this);
    ;
  }).prototype = implicit_animations._AnimatedPhysicalModelState.prototype;
  dart.addTypeTests(implicit_animations._AnimatedPhysicalModelState);
  dart.addTypeCaches(implicit_animations._AnimatedPhysicalModelState);
  dart.setMethodSignature(implicit_animations._AnimatedPhysicalModelState, () => ({
    __proto__: dart.getMethods(implicit_animations._AnimatedPhysicalModelState.__proto__),
    forEachTween: dart.fnType(dart.void, [dart.fnType(dart.nullable(tween.Tween), [dart.nullable(tween.Tween), dart.dynamic, dart.fnType(tween.Tween, [dart.dynamic])])]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(implicit_animations._AnimatedPhysicalModelState, I[0]);
  dart.setFieldSignature(implicit_animations._AnimatedPhysicalModelState, () => ({
    __proto__: dart.getFields(implicit_animations._AnimatedPhysicalModelState.__proto__),
    [_borderRadius]: dart.fieldType(dart.nullable(implicit_animations.BorderRadiusTween)),
    [_elevation]: dart.fieldType(dart.nullable(tween.Tween$(core.double))),
    [_color]: dart.fieldType(dart.nullable(tween.ColorTween)),
    [_shadowColor]: dart.fieldType(dart.nullable(tween.ColorTween))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/implicit_animations.dart", {
    "package:flutter/src/widgets/implicit_animations.dart": implicit_animations
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["implicit_animations.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/implicit_animations.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__implicit_animations: implicit_animations
  };
}));

//# sourceMappingURL=implicit_animations.dart.lib.js.map
