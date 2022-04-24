define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__material__floating_action_button_theme_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var floating_action_button_theme = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    DiagnosticsPropertyOfShapeBorder: () => (T.DiagnosticsPropertyOfShapeBorder = dart.constFn(diagnostics.DiagnosticsProperty$(borders.ShapeBorder)))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    DiagnosticsPropertyOfBoxConstraints: () => (T.DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))(),
    DiagnosticsPropertyOfEdgeInsetsGeometry: () => (T.DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))(),
    DiagnosticsPropertyOfTextStyle: () => (T.DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/floating_action_button_theme.dart",
    "package:flutter/src/material/floating_action_button_theme.dart"
  ];
  var foregroundColor$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.foregroundColor");
  var backgroundColor$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.backgroundColor");
  var focusColor$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.focusColor");
  var hoverColor$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.hoverColor");
  var splashColor$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.splashColor");
  var elevation$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.elevation");
  var focusElevation$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.focusElevation");
  var hoverElevation$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.hoverElevation");
  var disabledElevation$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.disabledElevation");
  var highlightElevation$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.highlightElevation");
  var shape$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.shape");
  var enableFeedback$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.enableFeedback");
  var sizeConstraints$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.sizeConstraints");
  var smallSizeConstraints$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.smallSizeConstraints");
  var largeSizeConstraints$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.largeSizeConstraints");
  var extendedSizeConstraints$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.extendedSizeConstraints");
  var extendedIconLabelSpacing$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.extendedIconLabelSpacing");
  var extendedPadding$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.extendedPadding");
  var extendedTextStyle$ = dart.privateName(floating_action_button_theme, "FloatingActionButtonThemeData.extendedTextStyle");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  floating_action_button_theme.FloatingActionButtonThemeData = class FloatingActionButtonThemeData extends Object_Diagnosticable$36 {
    get foregroundColor() {
      return this[foregroundColor$];
    }
    set foregroundColor(value) {
      super.foregroundColor = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get focusColor() {
      return this[focusColor$];
    }
    set focusColor(value) {
      super.focusColor = value;
    }
    get hoverColor() {
      return this[hoverColor$];
    }
    set hoverColor(value) {
      super.hoverColor = value;
    }
    get splashColor() {
      return this[splashColor$];
    }
    set splashColor(value) {
      super.splashColor = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get focusElevation() {
      return this[focusElevation$];
    }
    set focusElevation(value) {
      super.focusElevation = value;
    }
    get hoverElevation() {
      return this[hoverElevation$];
    }
    set hoverElevation(value) {
      super.hoverElevation = value;
    }
    get disabledElevation() {
      return this[disabledElevation$];
    }
    set disabledElevation(value) {
      super.disabledElevation = value;
    }
    get highlightElevation() {
      return this[highlightElevation$];
    }
    set highlightElevation(value) {
      super.highlightElevation = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get enableFeedback() {
      return this[enableFeedback$];
    }
    set enableFeedback(value) {
      super.enableFeedback = value;
    }
    get sizeConstraints() {
      return this[sizeConstraints$];
    }
    set sizeConstraints(value) {
      super.sizeConstraints = value;
    }
    get smallSizeConstraints() {
      return this[smallSizeConstraints$];
    }
    set smallSizeConstraints(value) {
      super.smallSizeConstraints = value;
    }
    get largeSizeConstraints() {
      return this[largeSizeConstraints$];
    }
    set largeSizeConstraints(value) {
      super.largeSizeConstraints = value;
    }
    get extendedSizeConstraints() {
      return this[extendedSizeConstraints$];
    }
    set extendedSizeConstraints(value) {
      super.extendedSizeConstraints = value;
    }
    get extendedIconLabelSpacing() {
      return this[extendedIconLabelSpacing$];
    }
    set extendedIconLabelSpacing(value) {
      super.extendedIconLabelSpacing = value;
    }
    get extendedPadding() {
      return this[extendedPadding$];
    }
    set extendedPadding(value) {
      super.extendedPadding = value;
    }
    get extendedTextStyle() {
      return this[extendedTextStyle$];
    }
    set extendedTextStyle(value) {
      super.extendedTextStyle = value;
    }
    static ['_#new#tearOff'](opts) {
      let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
      let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
      let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let focusElevation = opts && 'focusElevation' in opts ? opts.focusElevation : null;
      let hoverElevation = opts && 'hoverElevation' in opts ? opts.hoverElevation : null;
      let disabledElevation = opts && 'disabledElevation' in opts ? opts.disabledElevation : null;
      let highlightElevation = opts && 'highlightElevation' in opts ? opts.highlightElevation : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let enableFeedback = opts && 'enableFeedback' in opts ? opts.enableFeedback : null;
      let sizeConstraints = opts && 'sizeConstraints' in opts ? opts.sizeConstraints : null;
      let smallSizeConstraints = opts && 'smallSizeConstraints' in opts ? opts.smallSizeConstraints : null;
      let largeSizeConstraints = opts && 'largeSizeConstraints' in opts ? opts.largeSizeConstraints : null;
      let extendedSizeConstraints = opts && 'extendedSizeConstraints' in opts ? opts.extendedSizeConstraints : null;
      let extendedIconLabelSpacing = opts && 'extendedIconLabelSpacing' in opts ? opts.extendedIconLabelSpacing : null;
      let extendedPadding = opts && 'extendedPadding' in opts ? opts.extendedPadding : null;
      let extendedTextStyle = opts && 'extendedTextStyle' in opts ? opts.extendedTextStyle : null;
      return new floating_action_button_theme.FloatingActionButtonThemeData.new({foregroundColor: foregroundColor, backgroundColor: backgroundColor, focusColor: focusColor, hoverColor: hoverColor, splashColor: splashColor, elevation: elevation, focusElevation: focusElevation, hoverElevation: hoverElevation, disabledElevation: disabledElevation, highlightElevation: highlightElevation, shape: shape, enableFeedback: enableFeedback, sizeConstraints: sizeConstraints, smallSizeConstraints: smallSizeConstraints, largeSizeConstraints: largeSizeConstraints, extendedSizeConstraints: extendedSizeConstraints, extendedIconLabelSpacing: extendedIconLabelSpacing, extendedPadding: extendedPadding, extendedTextStyle: extendedTextStyle});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16;
      let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
      let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
      let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let focusElevation = opts && 'focusElevation' in opts ? opts.focusElevation : null;
      let hoverElevation = opts && 'hoverElevation' in opts ? opts.hoverElevation : null;
      let disabledElevation = opts && 'disabledElevation' in opts ? opts.disabledElevation : null;
      let highlightElevation = opts && 'highlightElevation' in opts ? opts.highlightElevation : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let enableFeedback = opts && 'enableFeedback' in opts ? opts.enableFeedback : null;
      let sizeConstraints = opts && 'sizeConstraints' in opts ? opts.sizeConstraints : null;
      let smallSizeConstraints = opts && 'smallSizeConstraints' in opts ? opts.smallSizeConstraints : null;
      let largeSizeConstraints = opts && 'largeSizeConstraints' in opts ? opts.largeSizeConstraints : null;
      let extendedSizeConstraints = opts && 'extendedSizeConstraints' in opts ? opts.extendedSizeConstraints : null;
      let extendedIconLabelSpacing = opts && 'extendedIconLabelSpacing' in opts ? opts.extendedIconLabelSpacing : null;
      let extendedPadding = opts && 'extendedPadding' in opts ? opts.extendedPadding : null;
      let extendedTextStyle = opts && 'extendedTextStyle' in opts ? opts.extendedTextStyle : null;
      return new floating_action_button_theme.FloatingActionButtonThemeData.new({foregroundColor: (t0 = foregroundColor, t0 == null ? this.foregroundColor : t0), backgroundColor: (t0$ = backgroundColor, t0$ == null ? this.backgroundColor : t0$), focusColor: (t0$0 = focusColor, t0$0 == null ? this.focusColor : t0$0), hoverColor: (t0$1 = hoverColor, t0$1 == null ? this.hoverColor : t0$1), splashColor: (t0$2 = splashColor, t0$2 == null ? this.splashColor : t0$2), elevation: (t0$3 = elevation, t0$3 == null ? this.elevation : t0$3), focusElevation: (t0$4 = focusElevation, t0$4 == null ? this.focusElevation : t0$4), hoverElevation: (t0$5 = hoverElevation, t0$5 == null ? this.hoverElevation : t0$5), disabledElevation: (t0$6 = disabledElevation, t0$6 == null ? this.disabledElevation : t0$6), highlightElevation: (t0$7 = highlightElevation, t0$7 == null ? this.highlightElevation : t0$7), shape: (t0$8 = shape, t0$8 == null ? this.shape : t0$8), enableFeedback: (t0$9 = enableFeedback, t0$9 == null ? this.enableFeedback : t0$9), sizeConstraints: (t0$10 = sizeConstraints, t0$10 == null ? this.sizeConstraints : t0$10), smallSizeConstraints: (t0$11 = smallSizeConstraints, t0$11 == null ? this.smallSizeConstraints : t0$11), largeSizeConstraints: (t0$12 = largeSizeConstraints, t0$12 == null ? this.largeSizeConstraints : t0$12), extendedSizeConstraints: (t0$13 = extendedSizeConstraints, t0$13 == null ? this.extendedSizeConstraints : t0$13), extendedIconLabelSpacing: (t0$14 = extendedIconLabelSpacing, t0$14 == null ? this.extendedIconLabelSpacing : t0$14), extendedPadding: (t0$15 = extendedPadding, t0$15 == null ? this.extendedPadding : t0$15), extendedTextStyle: (t0$16 = extendedTextStyle, t0$16 == null ? this.extendedTextStyle : t0$16)});
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23, t0$24, t0$25, t0$26, t0$27, t0$28, t0$29, t0$30, t0$31, t0$32, t0$33, t0$34, t0$35;
      if (!(t !== null)) dart.assertFailed(null, I[0], 180, 12, "t != null");
      if (a == null && b == null) return null;
      return new floating_action_button_theme.FloatingActionButtonThemeData.new({foregroundColor: ui.Color.lerp((t0 = a, t0 == null ? null : t0.foregroundColor), (t0$ = b, t0$ == null ? null : t0$.foregroundColor), t), backgroundColor: ui.Color.lerp((t0$0 = a, t0$0 == null ? null : t0$0.backgroundColor), (t0$1 = b, t0$1 == null ? null : t0$1.backgroundColor), t), focusColor: ui.Color.lerp((t0$2 = a, t0$2 == null ? null : t0$2.focusColor), (t0$3 = b, t0$3 == null ? null : t0$3.focusColor), t), hoverColor: ui.Color.lerp((t0$4 = a, t0$4 == null ? null : t0$4.hoverColor), (t0$5 = b, t0$5 == null ? null : t0$5.hoverColor), t), splashColor: ui.Color.lerp((t0$6 = a, t0$6 == null ? null : t0$6.splashColor), (t0$7 = b, t0$7 == null ? null : t0$7.splashColor), t), elevation: ui.lerpDouble((t0$8 = a, t0$8 == null ? null : t0$8.elevation), (t0$9 = b, t0$9 == null ? null : t0$9.elevation), t), focusElevation: ui.lerpDouble((t0$10 = a, t0$10 == null ? null : t0$10.focusElevation), (t0$11 = b, t0$11 == null ? null : t0$11.focusElevation), t), hoverElevation: ui.lerpDouble((t0$12 = a, t0$12 == null ? null : t0$12.hoverElevation), (t0$13 = b, t0$13 == null ? null : t0$13.hoverElevation), t), disabledElevation: ui.lerpDouble((t0$14 = a, t0$14 == null ? null : t0$14.disabledElevation), (t0$15 = b, t0$15 == null ? null : t0$15.disabledElevation), t), highlightElevation: ui.lerpDouble((t0$16 = a, t0$16 == null ? null : t0$16.highlightElevation), (t0$17 = b, t0$17 == null ? null : t0$17.highlightElevation), t), shape: borders.ShapeBorder.lerp((t0$18 = a, t0$18 == null ? null : t0$18.shape), (t0$19 = b, t0$19 == null ? null : t0$19.shape), t), enableFeedback: t < 0.5 ? (t0$20 = a, t0$20 == null ? null : t0$20.enableFeedback) : (t0$21 = b, t0$21 == null ? null : t0$21.enableFeedback), sizeConstraints: box.BoxConstraints.lerp((t0$22 = a, t0$22 == null ? null : t0$22.sizeConstraints), (t0$23 = b, t0$23 == null ? null : t0$23.sizeConstraints), t), smallSizeConstraints: box.BoxConstraints.lerp((t0$24 = a, t0$24 == null ? null : t0$24.smallSizeConstraints), (t0$25 = b, t0$25 == null ? null : t0$25.smallSizeConstraints), t), largeSizeConstraints: box.BoxConstraints.lerp((t0$26 = a, t0$26 == null ? null : t0$26.largeSizeConstraints), (t0$27 = b, t0$27 == null ? null : t0$27.largeSizeConstraints), t), extendedSizeConstraints: box.BoxConstraints.lerp((t0$28 = a, t0$28 == null ? null : t0$28.extendedSizeConstraints), (t0$29 = b, t0$29 == null ? null : t0$29.extendedSizeConstraints), t), extendedIconLabelSpacing: ui.lerpDouble((t0$30 = a, t0$30 == null ? null : t0$30.extendedIconLabelSpacing), (t0$31 = b, t0$31 == null ? null : t0$31.extendedIconLabelSpacing), t), extendedPadding: edge_insets.EdgeInsetsGeometry.lerp((t0$32 = a, t0$32 == null ? null : t0$32.extendedPadding), (t0$33 = b, t0$33 == null ? null : t0$33.extendedPadding), t), extendedTextStyle: text_style.TextStyle.lerp((t0$34 = a, t0$34 == null ? null : t0$34.extendedTextStyle), (t0$35 = b, t0$35 == null ? null : t0$35.extendedTextStyle), t)});
    }
    get hashCode() {
      return ui.hashValues(this.foregroundColor, this.backgroundColor, this.focusColor, this.hoverColor, this.splashColor, this.elevation, this.focusElevation, this.hoverElevation, this.disabledElevation, this.highlightElevation, this.shape, this.enableFeedback, this.sizeConstraints, this.smallSizeConstraints, this.largeSizeConstraints, this.extendedSizeConstraints, this.extendedIconLabelSpacing, this.extendedPadding, this.extendedTextStyle);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return floating_action_button_theme.FloatingActionButtonThemeData.is(other) && dart.equals(other.foregroundColor, this.foregroundColor) && dart.equals(other.backgroundColor, this.backgroundColor) && dart.equals(other.focusColor, this.focusColor) && dart.equals(other.hoverColor, this.hoverColor) && dart.equals(other.splashColor, this.splashColor) && other.elevation == this.elevation && other.focusElevation == this.focusElevation && other.hoverElevation == this.hoverElevation && other.disabledElevation == this.disabledElevation && other.highlightElevation == this.highlightElevation && dart.equals(other.shape, this.shape) && other.enableFeedback == this.enableFeedback && dart.equals(other.sizeConstraints, this.sizeConstraints) && dart.equals(other.smallSizeConstraints, this.smallSizeConstraints) && dart.equals(other.largeSizeConstraints, this.largeSizeConstraints) && dart.equals(other.extendedSizeConstraints, this.extendedSizeConstraints) && other.extendedIconLabelSpacing == this.extendedIconLabelSpacing && dart.equals(other.extendedPadding, this.extendedPadding) && dart.equals(other.extendedTextStyle, this.extendedTextStyle);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new colors.ColorProperty.new("foregroundColor", this.foregroundColor, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("backgroundColor", this.backgroundColor, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("focusColor", this.focusColor, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("hoverColor", this.hoverColor, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("splashColor", this.splashColor, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("focusElevation", this.focusElevation, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("hoverElevation", this.hoverElevation, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("disabledElevation", this.disabledElevation, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("highlightElevation", this.highlightElevation, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfShapeBorder()).new("shape", this.shape, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("enableFeedback", this.enableFeedback, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfBoxConstraints()).new("sizeConstraints", this.sizeConstraints, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfBoxConstraints()).new("smallSizeConstraints", this.smallSizeConstraints, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfBoxConstraints()).new("largeSizeConstraints", this.largeSizeConstraints, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfBoxConstraints()).new("extendedSizeConstraints", this.extendedSizeConstraints, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("extendedIconLabelSpacing", this.extendedIconLabelSpacing, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfEdgeInsetsGeometry()).new("extendedPadding", this.extendedPadding, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("extendedTextStyle", this.extendedTextStyle, {defaultValue: null}));
    }
  };
  (floating_action_button_theme.FloatingActionButtonThemeData.new = function(opts) {
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let focusColor = opts && 'focusColor' in opts ? opts.focusColor : null;
    let hoverColor = opts && 'hoverColor' in opts ? opts.hoverColor : null;
    let splashColor = opts && 'splashColor' in opts ? opts.splashColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let focusElevation = opts && 'focusElevation' in opts ? opts.focusElevation : null;
    let hoverElevation = opts && 'hoverElevation' in opts ? opts.hoverElevation : null;
    let disabledElevation = opts && 'disabledElevation' in opts ? opts.disabledElevation : null;
    let highlightElevation = opts && 'highlightElevation' in opts ? opts.highlightElevation : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let enableFeedback = opts && 'enableFeedback' in opts ? opts.enableFeedback : null;
    let sizeConstraints = opts && 'sizeConstraints' in opts ? opts.sizeConstraints : null;
    let smallSizeConstraints = opts && 'smallSizeConstraints' in opts ? opts.smallSizeConstraints : null;
    let largeSizeConstraints = opts && 'largeSizeConstraints' in opts ? opts.largeSizeConstraints : null;
    let extendedSizeConstraints = opts && 'extendedSizeConstraints' in opts ? opts.extendedSizeConstraints : null;
    let extendedIconLabelSpacing = opts && 'extendedIconLabelSpacing' in opts ? opts.extendedIconLabelSpacing : null;
    let extendedPadding = opts && 'extendedPadding' in opts ? opts.extendedPadding : null;
    let extendedTextStyle = opts && 'extendedTextStyle' in opts ? opts.extendedTextStyle : null;
    this[foregroundColor$] = foregroundColor;
    this[backgroundColor$] = backgroundColor;
    this[focusColor$] = focusColor;
    this[hoverColor$] = hoverColor;
    this[splashColor$] = splashColor;
    this[elevation$] = elevation;
    this[focusElevation$] = focusElevation;
    this[hoverElevation$] = hoverElevation;
    this[disabledElevation$] = disabledElevation;
    this[highlightElevation$] = highlightElevation;
    this[shape$] = shape;
    this[enableFeedback$] = enableFeedback;
    this[sizeConstraints$] = sizeConstraints;
    this[smallSizeConstraints$] = smallSizeConstraints;
    this[largeSizeConstraints$] = largeSizeConstraints;
    this[extendedSizeConstraints$] = extendedSizeConstraints;
    this[extendedIconLabelSpacing$] = extendedIconLabelSpacing;
    this[extendedPadding$] = extendedPadding;
    this[extendedTextStyle$] = extendedTextStyle;
    ;
  }).prototype = floating_action_button_theme.FloatingActionButtonThemeData.prototype;
  dart.addTypeTests(floating_action_button_theme.FloatingActionButtonThemeData);
  dart.addTypeCaches(floating_action_button_theme.FloatingActionButtonThemeData);
  dart.setMethodSignature(floating_action_button_theme.FloatingActionButtonThemeData, () => ({
    __proto__: dart.getMethods(floating_action_button_theme.FloatingActionButtonThemeData.__proto__),
    copyWith: dart.fnType(floating_action_button_theme.FloatingActionButtonThemeData, [], {backgroundColor: dart.nullable(ui.Color), disabledElevation: dart.nullable(core.double), elevation: dart.nullable(core.double), enableFeedback: dart.nullable(core.bool), extendedIconLabelSpacing: dart.nullable(core.double), extendedPadding: dart.nullable(edge_insets.EdgeInsetsGeometry), extendedSizeConstraints: dart.nullable(box.BoxConstraints), extendedTextStyle: dart.nullable(text_style.TextStyle), focusColor: dart.nullable(ui.Color), focusElevation: dart.nullable(core.double), foregroundColor: dart.nullable(ui.Color), highlightElevation: dart.nullable(core.double), hoverColor: dart.nullable(ui.Color), hoverElevation: dart.nullable(core.double), largeSizeConstraints: dart.nullable(box.BoxConstraints), shape: dart.nullable(borders.ShapeBorder), sizeConstraints: dart.nullable(box.BoxConstraints), smallSizeConstraints: dart.nullable(box.BoxConstraints), splashColor: dart.nullable(ui.Color)}, {})
  }));
  dart.setStaticMethodSignature(floating_action_button_theme.FloatingActionButtonThemeData, () => ['lerp']);
  dart.setLibraryUri(floating_action_button_theme.FloatingActionButtonThemeData, I[1]);
  dart.setFieldSignature(floating_action_button_theme.FloatingActionButtonThemeData, () => ({
    __proto__: dart.getFields(floating_action_button_theme.FloatingActionButtonThemeData.__proto__),
    foregroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    focusColor: dart.finalFieldType(dart.nullable(ui.Color)),
    hoverColor: dart.finalFieldType(dart.nullable(ui.Color)),
    splashColor: dart.finalFieldType(dart.nullable(ui.Color)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    focusElevation: dart.finalFieldType(dart.nullable(core.double)),
    hoverElevation: dart.finalFieldType(dart.nullable(core.double)),
    disabledElevation: dart.finalFieldType(dart.nullable(core.double)),
    highlightElevation: dart.finalFieldType(dart.nullable(core.double)),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    enableFeedback: dart.finalFieldType(dart.nullable(core.bool)),
    sizeConstraints: dart.finalFieldType(dart.nullable(box.BoxConstraints)),
    smallSizeConstraints: dart.finalFieldType(dart.nullable(box.BoxConstraints)),
    largeSizeConstraints: dart.finalFieldType(dart.nullable(box.BoxConstraints)),
    extendedSizeConstraints: dart.finalFieldType(dart.nullable(box.BoxConstraints)),
    extendedIconLabelSpacing: dart.finalFieldType(dart.nullable(core.double)),
    extendedPadding: dart.finalFieldType(dart.nullable(edge_insets.EdgeInsetsGeometry)),
    extendedTextStyle: dart.finalFieldType(dart.nullable(text_style.TextStyle))
  }));
  dart.defineExtensionMethods(floating_action_button_theme.FloatingActionButtonThemeData, ['_equals']);
  dart.defineExtensionAccessors(floating_action_button_theme.FloatingActionButtonThemeData, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/material/floating_action_button_theme.dart", {
    "package:flutter/src/material/floating_action_button_theme.dart": floating_action_button_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["floating_action_button_theme.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/material/floating_action_button_theme.dart.lib.js"}');
  // Exports:
  return {
    src__material__floating_action_button_theme: floating_action_button_theme
  };
}));

//# sourceMappingURL=floating_action_button_theme.dart.lib.js.map
