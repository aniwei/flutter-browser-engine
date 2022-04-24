define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/cupertino/interface_level.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/painting/colors.dart'], (function load__packages__flutter__src__cupertino__text_theme_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__cupertino__interface_level$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__painting__colors$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__media_query;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const interface_level = packages__flutter__src__cupertino__interface_level$46dart.src__cupertino__interface_level;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  var text_theme = Object.create(dart.library);
  var icon_theme_data$ = Object.create(dart.library);
  var theme$ = Object.create(dart.library);
  var colors$ = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    DiagnosticsPropertyOfTextStyle: () => (T.DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))(),
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(ui.Color)))(),
    ColorNToColorN: () => (T.ColorNToColorN = dart.constFn(dart.fnType(T.ColorN(), [T.ColorN()])))(),
    EnumPropertyOfBrightness: () => (T.EnumPropertyOfBrightness = dart.constFn(diagnostics.EnumProperty$(ui.Brightness)))(),
    ColorToColor: () => (T.ColorToColor = dart.constFn(dart.fnType(ui.Color, [ui.Color])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    StringAndColorToString: () => (T.StringAndColorToString = dart.constFn(dart.fnType(core.String, [core.String, ui.Color])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    DiagnosticsPropertyOfElement: () => (T.DiagnosticsPropertyOfElement = dart.constFn(diagnostics.DiagnosticsProperty$(framework.Element)))(),
    DiagnosticsPropertyOfCupertinoDynamicColor: () => (T.DiagnosticsPropertyOfCupertinoDynamicColor = dart.constFn(diagnostics.DiagnosticsProperty$(colors$.CupertinoDynamicColor)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282424575.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278206685.0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278879487.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278221567.0
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[1] || CT.C1,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[2] || CT.C2,
        [CupertinoDynamicColor_darkElevatedColor]: C[3] || CT.C3,
        [CupertinoDynamicColor_elevatedColor]: C[4] || CT.C4,
        [CupertinoDynamicColor_darkHighContrastColor]: C[1] || CT.C1,
        [CupertinoDynamicColor_highContrastColor]: C[2] || CT.C2,
        [CupertinoDynamicColor_darkColor]: C[3] || CT.C3,
        [CupertinoDynamicColor_color]: C[4] || CT.C4,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemBlue",
        [CupertinoDynamicColor__effectiveColor]: C[4] || CT.C4
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861.0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288256409.0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[7] || CT.C7,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[8] || CT.C8,
        [CupertinoDynamicColor_darkElevatedColor]: C[7] || CT.C7,
        [CupertinoDynamicColor_elevatedColor]: C[8] || CT.C8,
        [CupertinoDynamicColor_darkHighContrastColor]: C[7] || CT.C7,
        [CupertinoDynamicColor_highContrastColor]: C[8] || CT.C8,
        [CupertinoDynamicColor_darkColor]: C[7] || CT.C7,
        [CupertinoDynamicColor_color]: C[8] || CT.C8,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "inactiveGray",
        [CupertinoDynamicColor__effectiveColor]: C[8] || CT.C8
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_darkElevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_elevatedColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_darkHighContrastColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_highContrastColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_darkColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_color]: C[11] || CT.C11,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "label",
        [CupertinoDynamicColor__effectiveColor]: C[11] || CT.C11
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text_theme._TextThemeDefaultsBuilder.prototype,
        [_TextThemeDefaultsBuilder_inactiveGrayColor]: C[6] || CT.C6,
        [_TextThemeDefaultsBuilder_labelColor]: C[9] || CT.C9
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: text_theme.CupertinoTextThemeData.prototype,
        [_dateTimePickerTextStyle$]: null,
        [_pickerTextStyle$]: null,
        [_navActionTextStyle$]: null,
        [_navLargeTitleTextStyle$]: null,
        [_navTitleTextStyle$]: null,
        [_tabLabelTextStyle$]: null,
        [_actionTextStyle$]: null,
        [_textStyle$]: null,
        [_primaryColor$]: C[0] || CT.C0,
        [_defaults$]: C[5] || CT.C5
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[14] || CT.C14,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.41,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[9] || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: C[14] || CT.C14,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: -0.41,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[0] || CT.C0,
        [TextStyle_inherit]: false
      });
    },
    get C16() {
      return C[16] = dart.const({
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
        [TextStyle_letterSpacing]: -0.24,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 10,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[6] || CT.C6,
        [TextStyle_inherit]: false
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 5
      });
    },
    get C17() {
      return C[17] = dart.const({
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
        [TextStyle_letterSpacing]: -0.41,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[18] || CT.C18,
        [TextStyle_fontSize]: 17,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Text",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[9] || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C19() {
      return C[19] = dart.const({
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
        [TextStyle_letterSpacing]: 0.41,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[20] || CT.C20,
        [TextStyle_fontSize]: 34,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[9] || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 3
      });
    },
    get C21() {
      return C[21] = dart.const({
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
        [TextStyle_letterSpacing]: -0.6,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[22] || CT.C22,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[9] || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C23() {
      return C[23] = dart.const({
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
        [TextStyle_fontWeight]: C[22] || CT.C22,
        [TextStyle_fontSize]: 21,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: ".SF Pro Display",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[9] || CT.C9,
        [TextStyle_inherit]: false
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CupertinoTheme",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/theme.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: theme$._CupertinoTextThemeDefaults.prototype,
        [_CupertinoTextThemeDefaults_inactiveGray]: C[6] || CT.C6,
        [_CupertinoTextThemeDefaults_labelColor]: C[9] || CT.C9
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280558630.0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280032286.0
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[29] || CT.C29,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkElevatedColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_elevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkHighContrastColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_highContrastColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_color]: C[10] || CT.C10,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemBackground",
        [CupertinoDynamicColor__effectiveColor]: C[10] || CT.C10
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4028439837.0
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4042914297.0
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[32] || CT.C32,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[33] || CT.C33,
        [CupertinoDynamicColor_darkElevatedColor]: C[32] || CT.C32,
        [CupertinoDynamicColor_elevatedColor]: C[33] || CT.C33,
        [CupertinoDynamicColor_darkHighContrastColor]: C[32] || CT.C32,
        [CupertinoDynamicColor_highContrastColor]: C[33] || CT.C33,
        [CupertinoDynamicColor_darkColor]: C[32] || CT.C32,
        [CupertinoDynamicColor_color]: C[33] || CT.C33,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: null,
        [CupertinoDynamicColor__effectiveColor]: C[33] || CT.C33
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: theme$._CupertinoThemeDefaults.prototype,
        [_CupertinoThemeDefaults_textThemeDefaults]: C[27] || CT.C27,
        [_CupertinoThemeDefaults_scaffoldBackgroundColor]: C[28] || CT.C28,
        [_CupertinoThemeDefaults_barBackgroundColor]: C[31] || CT.C31,
        [_CupertinoThemeDefaults_primaryContrastingColor]: C[28] || CT.C28,
        [_CupertinoThemeDefaults_primaryColor]: C[0] || CT.C0,
        [_CupertinoThemeDefaults_brightness]: null
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: theme$.CupertinoThemeData.prototype,
        [NoDefaultCupertinoThemeData_scaffoldBackgroundColor]: null,
        [NoDefaultCupertinoThemeData_barBackgroundColor]: null,
        [NoDefaultCupertinoThemeData_textTheme]: null,
        [NoDefaultCupertinoThemeData_primaryContrastingColor]: null,
        [NoDefaultCupertinoThemeData_primaryColor]: null,
        [NoDefaultCupertinoThemeData_brightness]: null,
        [CupertinoThemeData__defaults]: C[26] || CT.C26
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 14,
        [_Location_line]: 123,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/theme.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InheritedCupertinoTheme",
        [_Location_column]: 12,
        [_Location_line]: 121,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/theme.dart"
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_InheritedCupertinoTheme",
        [_Location_column]: 9,
        [_Location_line]: 138,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/theme.dart"
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281391963.0
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280584765.0
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281389400.0
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281648985.0
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[38] || CT.C38,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[39] || CT.C39,
        [CupertinoDynamicColor_darkElevatedColor]: C[40] || CT.C40,
        [CupertinoDynamicColor_elevatedColor]: C[41] || CT.C41,
        [CupertinoDynamicColor_darkHighContrastColor]: C[38] || CT.C38,
        [CupertinoDynamicColor_highContrastColor]: C[39] || CT.C39,
        [CupertinoDynamicColor_darkColor]: C[40] || CT.C40,
        [CupertinoDynamicColor_color]: C[41] || CT.C41,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGreen",
        [CupertinoDynamicColor__effectiveColor]: C[41] || CT.C41
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294947648.0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291376128.0
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294942474.0
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294939904.0
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[43] || CT.C43,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[44] || CT.C44,
        [CupertinoDynamicColor_darkElevatedColor]: C[45] || CT.C45,
        [CupertinoDynamicColor_elevatedColor]: C[46] || CT.C46,
        [CupertinoDynamicColor_darkHighContrastColor]: C[43] || CT.C43,
        [CupertinoDynamicColor_highContrastColor]: C[44] || CT.C44,
        [CupertinoDynamicColor_darkColor]: C[45] || CT.C45,
        [CupertinoDynamicColor_color]: C[46] || CT.C46,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemOrange",
        [CupertinoDynamicColor__effectiveColor]: C[46] || CT.C46
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293256682.0
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293914612.0
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279703319.0
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294928737.0
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292280341.0
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294919482.0
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294916912.0
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[51] || CT.C51,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[52] || CT.C52,
        [CupertinoDynamicColor_darkElevatedColor]: C[53] || CT.C53,
        [CupertinoDynamicColor_elevatedColor]: C[54] || CT.C54,
        [CupertinoDynamicColor_darkHighContrastColor]: C[51] || CT.C51,
        [CupertinoDynamicColor_highContrastColor]: C[52] || CT.C52,
        [CupertinoDynamicColor_darkColor]: C[53] || CT.C53,
        [CupertinoDynamicColor_color]: C[54] || CT.C54,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemRed",
        [CupertinoDynamicColor__effectiveColor]: C[54] || CT.C54
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286413567.0
      });
    },
    get C57() {
      return C[57] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281742499.0
      });
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284374246.0
      });
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283979478.0
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[56] || CT.C56,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[57] || CT.C57,
        [CupertinoDynamicColor_darkElevatedColor]: C[58] || CT.C58,
        [CupertinoDynamicColor_elevatedColor]: C[59] || CT.C59,
        [CupertinoDynamicColor_darkHighContrastColor]: C[56] || CT.C56,
        [CupertinoDynamicColor_highContrastColor]: C[57] || CT.C57,
        [CupertinoDynamicColor_darkColor]: C[58] || CT.C58,
        [CupertinoDynamicColor_color]: C[59] || CT.C59,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemIndigo",
        [CupertinoDynamicColor__effectiveColor]: C[59] || CT.C59
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294927490.0
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292022085.0
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294915935.0
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294913365.0
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[61] || CT.C61,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[62] || CT.C62,
        [CupertinoDynamicColor_darkElevatedColor]: C[63] || CT.C63,
        [CupertinoDynamicColor_elevatedColor]: C[64] || CT.C64,
        [CupertinoDynamicColor_darkHighContrastColor]: C[61] || CT.C61,
        [CupertinoDynamicColor_highContrastColor]: C[62] || CT.C62,
        [CupertinoDynamicColor_darkColor]: C[63] || CT.C63,
        [CupertinoDynamicColor_color]: C[64] || CT.C64,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemPink",
        [CupertinoDynamicColor__effectiveColor]: C[64] || CT.C64
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292513791.0
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287186091.0
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290730738.0
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289680094.0
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[66] || CT.C66,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[67] || CT.C67,
        [CupertinoDynamicColor_darkElevatedColor]: C[68] || CT.C68,
        [CupertinoDynamicColor_elevatedColor]: C[69] || CT.C69,
        [CupertinoDynamicColor_darkHighContrastColor]: C[66] || CT.C66,
        [CupertinoDynamicColor_highContrastColor]: C[67] || CT.C67,
        [CupertinoDynamicColor_darkColor]: C[68] || CT.C68,
        [CupertinoDynamicColor_color]: C[69] || CT.C69,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemPurple",
        [CupertinoDynamicColor__effectiveColor]: C[69] || CT.C69
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285585407.0
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278219172.0
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284797695.0
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284139770.0
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[71] || CT.C71,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[72] || CT.C72,
        [CupertinoDynamicColor_darkElevatedColor]: C[73] || CT.C73,
        [CupertinoDynamicColor_elevatedColor]: C[74] || CT.C74,
        [CupertinoDynamicColor_darkHighContrastColor]: C[71] || CT.C71,
        [CupertinoDynamicColor_highContrastColor]: C[72] || CT.C72,
        [CupertinoDynamicColor_darkColor]: C[73] || CT.C73,
        [CupertinoDynamicColor_color]: C[74] || CT.C74,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemTeal",
        [CupertinoDynamicColor__effectiveColor]: C[74] || CT.C74
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294956070.0
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288698880.0
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294956554.0
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294953984.0
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[76] || CT.C76,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[77] || CT.C77,
        [CupertinoDynamicColor_darkElevatedColor]: C[78] || CT.C78,
        [CupertinoDynamicColor_elevatedColor]: C[79] || CT.C79,
        [CupertinoDynamicColor_darkHighContrastColor]: C[76] || CT.C76,
        [CupertinoDynamicColor_highContrastColor]: C[77] || CT.C77,
        [CupertinoDynamicColor_darkColor]: C[78] || CT.C78,
        [CupertinoDynamicColor_color]: C[79] || CT.C79,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemYellow",
        [CupertinoDynamicColor__effectiveColor]: C[79] || CT.C79
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289638066.0
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285295728.0
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287532691.0
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[81] || CT.C81,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[82] || CT.C82,
        [CupertinoDynamicColor_darkElevatedColor]: C[83] || CT.C83,
        [CupertinoDynamicColor_elevatedColor]: C[83] || CT.C83,
        [CupertinoDynamicColor_darkHighContrastColor]: C[81] || CT.C81,
        [CupertinoDynamicColor_highContrastColor]: C[82] || CT.C82,
        [CupertinoDynamicColor_darkColor]: C[83] || CT.C83,
        [CupertinoDynamicColor_color]: C[83] || CT.C83,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey",
        [CupertinoDynamicColor__effectiveColor]: C[83] || CT.C83
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286348416.0
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284703590.0
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[85] || CT.C85,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[83] || CT.C83,
        [CupertinoDynamicColor_darkElevatedColor]: C[86] || CT.C86,
        [CupertinoDynamicColor_elevatedColor]: C[81] || CT.C81,
        [CupertinoDynamicColor_darkHighContrastColor]: C[85] || CT.C85,
        [CupertinoDynamicColor_highContrastColor]: C[83] || CT.C83,
        [CupertinoDynamicColor_darkColor]: C[86] || CT.C86,
        [CupertinoDynamicColor_color]: C[81] || CT.C81,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey2",
        [CupertinoDynamicColor__effectiveColor]: C[81] || CT.C81
      });
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4283716694.0
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282927178.0
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291282892.0
      });
    },
    get C87() {
      return C[87] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[88] || CT.C88,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[81] || CT.C81,
        [CupertinoDynamicColor_darkElevatedColor]: C[89] || CT.C89,
        [CupertinoDynamicColor_elevatedColor]: C[90] || CT.C90,
        [CupertinoDynamicColor_darkHighContrastColor]: C[88] || CT.C88,
        [CupertinoDynamicColor_highContrastColor]: C[81] || CT.C81,
        [CupertinoDynamicColor_darkColor]: C[89] || CT.C89,
        [CupertinoDynamicColor_color]: C[90] || CT.C90,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey3",
        [CupertinoDynamicColor__effectiveColor]: C[90] || CT.C90
      });
    },
    get C92() {
      return C[92] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282664006.0
      });
    },
    get C93() {
      return C[93] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290559168.0
      });
    },
    get C94() {
      return C[94] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282006076.0
      });
    },
    get C95() {
      return C[95] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291940822.0
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[92] || CT.C92,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[93] || CT.C93,
        [CupertinoDynamicColor_darkElevatedColor]: C[94] || CT.C94,
        [CupertinoDynamicColor_elevatedColor]: C[95] || CT.C95,
        [CupertinoDynamicColor_darkHighContrastColor]: C[92] || CT.C92,
        [CupertinoDynamicColor_highContrastColor]: C[93] || CT.C93,
        [CupertinoDynamicColor_darkColor]: C[94] || CT.C94,
        [CupertinoDynamicColor_color]: C[95] || CT.C95,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey4",
        [CupertinoDynamicColor__effectiveColor]: C[95] || CT.C95
      });
    },
    get C97() {
      return C[97] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281742904.0
      });
    },
    get C98() {
      return C[98] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292401372.0
      });
    },
    get C99() {
      return C[99] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281084974.0
      });
    },
    get C96() {
      return C[96] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[97] || CT.C97,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[98] || CT.C98,
        [CupertinoDynamicColor_darkElevatedColor]: C[99] || CT.C99,
        [CupertinoDynamicColor_elevatedColor]: C[47] || CT.C47,
        [CupertinoDynamicColor_darkHighContrastColor]: C[97] || CT.C97,
        [CupertinoDynamicColor_highContrastColor]: C[98] || CT.C98,
        [CupertinoDynamicColor_darkColor]: C[99] || CT.C99,
        [CupertinoDynamicColor_color]: C[47] || CT.C47,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey5",
        [CupertinoDynamicColor__effectiveColor]: C[47] || CT.C47
      });
    },
    get C101() {
      return C[101] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293651440.0
      });
    },
    get C102() {
      return C[102] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294111991.0
      });
    },
    get C100() {
      return C[100] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[29] || CT.C29,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[101] || CT.C101,
        [CupertinoDynamicColor_darkElevatedColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_elevatedColor]: C[102] || CT.C102,
        [CupertinoDynamicColor_darkHighContrastColor]: C[29] || CT.C29,
        [CupertinoDynamicColor_highContrastColor]: C[101] || CT.C101,
        [CupertinoDynamicColor_darkColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_color]: C[102] || CT.C102,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGrey6",
        [CupertinoDynamicColor__effectiveColor]: C[102] || CT.C102
      });
    },
    get C104() {
      return C[104] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2917919733.0
      });
    },
    get C105() {
      return C[105] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2906405955.0
      });
    },
    get C106() {
      return C[106] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2582375413.0
      });
    },
    get C107() {
      return C[107] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2570861635.0
      });
    },
    get C103() {
      return C[103] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[104] || CT.C104,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[105] || CT.C105,
        [CupertinoDynamicColor_darkElevatedColor]: C[106] || CT.C106,
        [CupertinoDynamicColor_elevatedColor]: C[107] || CT.C107,
        [CupertinoDynamicColor_darkHighContrastColor]: C[104] || CT.C104,
        [CupertinoDynamicColor_highContrastColor]: C[105] || CT.C105,
        [CupertinoDynamicColor_darkColor]: C[106] || CT.C106,
        [CupertinoDynamicColor_color]: C[107] || CT.C107,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "secondaryLabel",
        [CupertinoDynamicColor__effectiveColor]: C[107] || CT.C107
      });
    },
    get C109() {
      return C[109] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1626074101
      });
    },
    get C110() {
      return C[110] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1614560323
      });
    },
    get C111() {
      return C[111] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1290529781
      });
    },
    get C112() {
      return C[112] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1279016003
      });
    },
    get C108() {
      return C[108] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[109] || CT.C109,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[110] || CT.C110,
        [CupertinoDynamicColor_darkElevatedColor]: C[111] || CT.C111,
        [CupertinoDynamicColor_elevatedColor]: C[112] || CT.C112,
        [CupertinoDynamicColor_darkHighContrastColor]: C[109] || CT.C109,
        [CupertinoDynamicColor_highContrastColor]: C[110] || CT.C110,
        [CupertinoDynamicColor_darkColor]: C[111] || CT.C111,
        [CupertinoDynamicColor_color]: C[112] || CT.C112,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "tertiaryLabel",
        [CupertinoDynamicColor__effectiveColor]: C[112] || CT.C112
      });
    },
    get C114() {
      return C[114] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1038871541
      });
    },
    get C115() {
      return C[115] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1111243843
      });
    },
    get C116() {
      return C[116] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 686550005
      });
    },
    get C117() {
      return C[117] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 758922307
      });
    },
    get C113() {
      return C[113] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[114] || CT.C114,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[115] || CT.C115,
        [CupertinoDynamicColor_darkElevatedColor]: C[116] || CT.C116,
        [CupertinoDynamicColor_elevatedColor]: C[117] || CT.C117,
        [CupertinoDynamicColor_darkHighContrastColor]: C[114] || CT.C114,
        [CupertinoDynamicColor_highContrastColor]: C[115] || CT.C115,
        [CupertinoDynamicColor_darkColor]: C[116] || CT.C116,
        [CupertinoDynamicColor_color]: C[117] || CT.C117,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "quaternaryLabel",
        [CupertinoDynamicColor__effectiveColor]: C[117] || CT.C117
      });
    },
    get C119() {
      return C[119] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1886943360
      });
    },
    get C120() {
      return C[120] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1199077504
      });
    },
    get C121() {
      return C[121] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1534621824
      });
    },
    get C122() {
      return C[122] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 863533184
      });
    },
    get C118() {
      return C[118] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[119] || CT.C119,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[120] || CT.C120,
        [CupertinoDynamicColor_darkElevatedColor]: C[121] || CT.C121,
        [CupertinoDynamicColor_elevatedColor]: C[122] || CT.C122,
        [CupertinoDynamicColor_darkHighContrastColor]: C[119] || CT.C119,
        [CupertinoDynamicColor_highContrastColor]: C[120] || CT.C120,
        [CupertinoDynamicColor_darkColor]: C[121] || CT.C121,
        [CupertinoDynamicColor_color]: C[122] || CT.C122,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemFill",
        [CupertinoDynamicColor__effectiveColor]: C[122] || CT.C122
      });
    },
    get C124() {
      return C[124] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1719171200
      });
    },
    get C125() {
      return C[125] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1031305344
      });
    },
    get C126() {
      return C[126] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1366849664
      });
    },
    get C127() {
      return C[127] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 678983808
      });
    },
    get C123() {
      return C[123] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[124] || CT.C124,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[125] || CT.C125,
        [CupertinoDynamicColor_darkElevatedColor]: C[126] || CT.C126,
        [CupertinoDynamicColor_elevatedColor]: C[127] || CT.C127,
        [CupertinoDynamicColor_darkHighContrastColor]: C[124] || CT.C124,
        [CupertinoDynamicColor_highContrastColor]: C[125] || CT.C125,
        [CupertinoDynamicColor_darkColor]: C[126] || CT.C126,
        [CupertinoDynamicColor_color]: C[127] || CT.C127,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "secondarySystemFill",
        [CupertinoDynamicColor__effectiveColor]: C[127] || CT.C127
      });
    },
    get C129() {
      return C[129] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1366718080
      });
    },
    get C130() {
      return C[130] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 863401600
      });
    },
    get C131() {
      return C[131] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1031173760
      });
    },
    get C132() {
      return C[132] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 511080064
      });
    },
    get C128() {
      return C[128] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[129] || CT.C129,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[130] || CT.C130,
        [CupertinoDynamicColor_darkElevatedColor]: C[131] || CT.C131,
        [CupertinoDynamicColor_elevatedColor]: C[132] || CT.C132,
        [CupertinoDynamicColor_darkHighContrastColor]: C[129] || CT.C129,
        [CupertinoDynamicColor_highContrastColor]: C[130] || CT.C130,
        [CupertinoDynamicColor_darkColor]: C[131] || CT.C131,
        [CupertinoDynamicColor_color]: C[132] || CT.C132,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "tertiarySystemFill",
        [CupertinoDynamicColor__effectiveColor]: C[132] || CT.C132
      });
    },
    get C134() {
      return C[134] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1115059840
      });
    },
    get C135() {
      return C[135] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 678720640
      });
    },
    get C136() {
      return C[136] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 762738304
      });
    },
    get C137() {
      return C[137] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 343176320
      });
    },
    get C133() {
      return C[133] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[134] || CT.C134,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[135] || CT.C135,
        [CupertinoDynamicColor_darkElevatedColor]: C[136] || CT.C136,
        [CupertinoDynamicColor_elevatedColor]: C[137] || CT.C137,
        [CupertinoDynamicColor_darkHighContrastColor]: C[134] || CT.C134,
        [CupertinoDynamicColor_highContrastColor]: C[135] || CT.C135,
        [CupertinoDynamicColor_darkColor]: C[136] || CT.C136,
        [CupertinoDynamicColor_color]: C[137] || CT.C137,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "quaternarySystemFill",
        [CupertinoDynamicColor__effectiveColor]: C[137] || CT.C137
      });
    },
    get C138() {
      return C[138] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[109] || CT.C109,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[110] || CT.C110,
        [CupertinoDynamicColor_darkElevatedColor]: C[111] || CT.C111,
        [CupertinoDynamicColor_elevatedColor]: C[112] || CT.C112,
        [CupertinoDynamicColor_darkHighContrastColor]: C[109] || CT.C109,
        [CupertinoDynamicColor_highContrastColor]: C[110] || CT.C110,
        [CupertinoDynamicColor_darkColor]: C[111] || CT.C111,
        [CupertinoDynamicColor_color]: C[112] || CT.C112,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "placeholderText",
        [CupertinoDynamicColor__effectiveColor]: C[112] || CT.C112
      });
    },
    get C139() {
      return C[139] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[97] || CT.C97,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[101] || CT.C101,
        [CupertinoDynamicColor_darkElevatedColor]: C[99] || CT.C99,
        [CupertinoDynamicColor_elevatedColor]: C[102] || CT.C102,
        [CupertinoDynamicColor_darkHighContrastColor]: C[29] || CT.C29,
        [CupertinoDynamicColor_highContrastColor]: C[101] || CT.C101,
        [CupertinoDynamicColor_darkColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_color]: C[102] || CT.C102,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "secondarySystemBackground",
        [CupertinoDynamicColor__effectiveColor]: C[102] || CT.C102
      });
    },
    get C140() {
      return C[140] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[92] || CT.C92,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkElevatedColor]: C[94] || CT.C94,
        [CupertinoDynamicColor_elevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkHighContrastColor]: C[97] || CT.C97,
        [CupertinoDynamicColor_highContrastColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkColor]: C[99] || CT.C99,
        [CupertinoDynamicColor_color]: C[10] || CT.C10,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "tertiarySystemBackground",
        [CupertinoDynamicColor__effectiveColor]: C[10] || CT.C10
      });
    },
    get C141() {
      return C[141] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[29] || CT.C29,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[101] || CT.C101,
        [CupertinoDynamicColor_darkElevatedColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_elevatedColor]: C[102] || CT.C102,
        [CupertinoDynamicColor_darkHighContrastColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_highContrastColor]: C[101] || CT.C101,
        [CupertinoDynamicColor_darkColor]: C[11] || CT.C11,
        [CupertinoDynamicColor_color]: C[102] || CT.C102,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "systemGroupedBackground",
        [CupertinoDynamicColor__effectiveColor]: C[102] || CT.C102
      });
    },
    get C142() {
      return C[142] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[97] || CT.C97,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkElevatedColor]: C[99] || CT.C99,
        [CupertinoDynamicColor_elevatedColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkHighContrastColor]: C[29] || CT.C29,
        [CupertinoDynamicColor_highContrastColor]: C[10] || CT.C10,
        [CupertinoDynamicColor_darkColor]: C[30] || CT.C30,
        [CupertinoDynamicColor_color]: C[10] || CT.C10,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "secondarySystemGroupedBackground",
        [CupertinoDynamicColor__effectiveColor]: C[10] || CT.C10
      });
    },
    get C143() {
      return C[143] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[92] || CT.C92,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[101] || CT.C101,
        [CupertinoDynamicColor_darkElevatedColor]: C[94] || CT.C94,
        [CupertinoDynamicColor_elevatedColor]: C[102] || CT.C102,
        [CupertinoDynamicColor_darkHighContrastColor]: C[97] || CT.C97,
        [CupertinoDynamicColor_highContrastColor]: C[101] || CT.C101,
        [CupertinoDynamicColor_darkColor]: C[99] || CT.C99,
        [CupertinoDynamicColor_color]: C[102] || CT.C102,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "tertiarySystemGroupedBackground",
        [CupertinoDynamicColor__effectiveColor]: C[102] || CT.C102
      });
    },
    get C145() {
      return C[145] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2907984984.0
      });
    },
    get C146() {
      return C[146] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1581005891
      });
    },
    get C147() {
      return C[147] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2572440664.0
      });
    },
    get C148() {
      return C[148] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 1228684355
      });
    },
    get C144() {
      return C[144] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[145] || CT.C145,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[146] || CT.C146,
        [CupertinoDynamicColor_darkElevatedColor]: C[147] || CT.C147,
        [CupertinoDynamicColor_elevatedColor]: C[148] || CT.C148,
        [CupertinoDynamicColor_darkHighContrastColor]: C[145] || CT.C145,
        [CupertinoDynamicColor_highContrastColor]: C[146] || CT.C146,
        [CupertinoDynamicColor_darkColor]: C[147] || CT.C147,
        [CupertinoDynamicColor_color]: C[148] || CT.C148,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "separator",
        [CupertinoDynamicColor__effectiveColor]: C[148] || CT.C148
      });
    },
    get C150() {
      return C[150] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281874490.0
      });
    },
    get C151() {
      return C[151] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291217096.0
      });
    },
    get C149() {
      return C[149] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[150] || CT.C150,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[151] || CT.C151,
        [CupertinoDynamicColor_darkElevatedColor]: C[150] || CT.C150,
        [CupertinoDynamicColor_elevatedColor]: C[151] || CT.C151,
        [CupertinoDynamicColor_darkHighContrastColor]: C[150] || CT.C150,
        [CupertinoDynamicColor_highContrastColor]: C[151] || CT.C151,
        [CupertinoDynamicColor_darkColor]: C[150] || CT.C150,
        [CupertinoDynamicColor_color]: C[151] || CT.C151,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "opaqueSeparator",
        [CupertinoDynamicColor__effectiveColor]: C[151] || CT.C151
      });
    },
    get C153() {
      return C[153] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278813951.0
      });
    },
    get C152() {
      return C[152] = dart.const({
        __proto__: colors$.CupertinoDynamicColor.prototype,
        [Color_value]: 0,
        [CupertinoDynamicColor_darkHighContrastElevatedColor]: C[153] || CT.C153,
        [CupertinoDynamicColor_highContrastElevatedColor]: C[4] || CT.C4,
        [CupertinoDynamicColor_darkElevatedColor]: C[153] || CT.C153,
        [CupertinoDynamicColor_elevatedColor]: C[4] || CT.C4,
        [CupertinoDynamicColor_darkHighContrastColor]: C[153] || CT.C153,
        [CupertinoDynamicColor_highContrastColor]: C[4] || CT.C4,
        [CupertinoDynamicColor_darkColor]: C[153] || CT.C153,
        [CupertinoDynamicColor_color]: C[4] || CT.C4,
        [CupertinoDynamicColor__debugResolveContext]: null,
        [CupertinoDynamicColor__debugLabel]: "link",
        [CupertinoDynamicColor__effectiveColor]: C[4] || CT.C4
      });
    },
    get C154() {
      return C[154] = dart.const({
        __proto__: interface_level.CupertinoUserInterfaceLevelData.prototype,
        [_Enum__name]: "base",
        [_Enum_index]: 0
      });
    },
    get C155() {
      return C[155] = dart.const({
        __proto__: interface_level.CupertinoUserInterfaceLevelData.prototype,
        [_Enum__name]: "elevated",
        [_Enum_index]: 1
      });
    },
    get C156() {
      return C[156] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C157() {
      return C[157] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "dark",
        [_Enum_index]: 0
      });
    },
    get C158() {
      return C[158] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "info",
        [_Enum_index]: 3
      });
    },
    get C159() {
      return C[159] = dart.const({
        __proto__: diagnostics._NoDefaultValue.prototype
      });
    },
    get C160() {
      return C[160] = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "singleLine",
        [_Enum_index]: 8
      });
    }
  }, false);
  var C = Array(161).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/text_theme.dart",
    "package:flutter/src/cupertino/text_theme.dart",
    "package:flutter/src/cupertino/icon_theme_data.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/theme.dart",
    "package:flutter/src/cupertino/theme.dart",
    "package:flutter/src/cupertino/colors.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/cupertino/colors.dart"
  ];
  var _defaults$ = dart.privateName(text_theme, "CupertinoTextThemeData._defaults");
  var _primaryColor$ = dart.privateName(text_theme, "CupertinoTextThemeData._primaryColor");
  var _textStyle$ = dart.privateName(text_theme, "CupertinoTextThemeData._textStyle");
  var _actionTextStyle$ = dart.privateName(text_theme, "CupertinoTextThemeData._actionTextStyle");
  var _tabLabelTextStyle$ = dart.privateName(text_theme, "CupertinoTextThemeData._tabLabelTextStyle");
  var _navTitleTextStyle$ = dart.privateName(text_theme, "CupertinoTextThemeData._navTitleTextStyle");
  var _navLargeTitleTextStyle$ = dart.privateName(text_theme, "CupertinoTextThemeData._navLargeTitleTextStyle");
  var _navActionTextStyle$ = dart.privateName(text_theme, "CupertinoTextThemeData._navActionTextStyle");
  var _pickerTextStyle$ = dart.privateName(text_theme, "CupertinoTextThemeData._pickerTextStyle");
  var _dateTimePickerTextStyle$ = dart.privateName(text_theme, "CupertinoTextThemeData._dateTimePickerTextStyle");
  var Color_value = dart.privateName(ui, "Color.value");
  var CupertinoDynamicColor_darkHighContrastElevatedColor = dart.privateName(colors$, "CupertinoDynamicColor.darkHighContrastElevatedColor");
  var CupertinoDynamicColor_highContrastElevatedColor = dart.privateName(colors$, "CupertinoDynamicColor.highContrastElevatedColor");
  var CupertinoDynamicColor_darkElevatedColor = dart.privateName(colors$, "CupertinoDynamicColor.darkElevatedColor");
  var CupertinoDynamicColor_elevatedColor = dart.privateName(colors$, "CupertinoDynamicColor.elevatedColor");
  var CupertinoDynamicColor_darkHighContrastColor = dart.privateName(colors$, "CupertinoDynamicColor.darkHighContrastColor");
  var CupertinoDynamicColor_highContrastColor = dart.privateName(colors$, "CupertinoDynamicColor.highContrastColor");
  var CupertinoDynamicColor_darkColor = dart.privateName(colors$, "CupertinoDynamicColor.darkColor");
  var CupertinoDynamicColor_color = dart.privateName(colors$, "CupertinoDynamicColor.color");
  var CupertinoDynamicColor__debugResolveContext = dart.privateName(colors$, "CupertinoDynamicColor._debugResolveContext");
  var CupertinoDynamicColor__debugLabel = dart.privateName(colors$, "CupertinoDynamicColor._debugLabel");
  var CupertinoDynamicColor__effectiveColor = dart.privateName(colors$, "CupertinoDynamicColor._effectiveColor");
  var _TextThemeDefaultsBuilder_inactiveGrayColor = dart.privateName(text_theme, "_TextThemeDefaultsBuilder.inactiveGrayColor");
  var _TextThemeDefaultsBuilder_labelColor = dart.privateName(text_theme, "_TextThemeDefaultsBuilder.labelColor");
  var _defaults = dart.privateName(text_theme, "_defaults");
  var _primaryColor = dart.privateName(text_theme, "_primaryColor");
  var _textStyle = dart.privateName(text_theme, "_textStyle");
  var _actionTextStyle = dart.privateName(text_theme, "_actionTextStyle");
  var _tabLabelTextStyle = dart.privateName(text_theme, "_tabLabelTextStyle");
  var _navTitleTextStyle = dart.privateName(text_theme, "_navTitleTextStyle");
  var _navLargeTitleTextStyle = dart.privateName(text_theme, "_navLargeTitleTextStyle");
  var _navActionTextStyle = dart.privateName(text_theme, "_navActionTextStyle");
  var _pickerTextStyle = dart.privateName(text_theme, "_pickerTextStyle");
  var _dateTimePickerTextStyle = dart.privateName(text_theme, "_dateTimePickerTextStyle");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  text_theme.CupertinoTextThemeData = class CupertinoTextThemeData extends Object_Diagnosticable$36 {
    get [_defaults]() {
      return this[_defaults$];
    }
    set [_defaults](value) {
      super[_defaults] = value;
    }
    get [_primaryColor]() {
      return this[_primaryColor$];
    }
    set [_primaryColor](value) {
      super[_primaryColor] = value;
    }
    get [_textStyle]() {
      return this[_textStyle$];
    }
    set [_textStyle](value) {
      super[_textStyle] = value;
    }
    get [_actionTextStyle]() {
      return this[_actionTextStyle$];
    }
    set [_actionTextStyle](value) {
      super[_actionTextStyle] = value;
    }
    get [_tabLabelTextStyle]() {
      return this[_tabLabelTextStyle$];
    }
    set [_tabLabelTextStyle](value) {
      super[_tabLabelTextStyle] = value;
    }
    get [_navTitleTextStyle]() {
      return this[_navTitleTextStyle$];
    }
    set [_navTitleTextStyle](value) {
      super[_navTitleTextStyle] = value;
    }
    get [_navLargeTitleTextStyle]() {
      return this[_navLargeTitleTextStyle$];
    }
    set [_navLargeTitleTextStyle](value) {
      super[_navLargeTitleTextStyle] = value;
    }
    get [_navActionTextStyle]() {
      return this[_navActionTextStyle$];
    }
    set [_navActionTextStyle](value) {
      super[_navActionTextStyle] = value;
    }
    get [_pickerTextStyle]() {
      return this[_pickerTextStyle$];
    }
    set [_pickerTextStyle](value) {
      super[_pickerTextStyle] = value;
    }
    get [_dateTimePickerTextStyle]() {
      return this[_dateTimePickerTextStyle$];
    }
    set [_dateTimePickerTextStyle](value) {
      super[_dateTimePickerTextStyle] = value;
    }
    static ['_#new#tearOff'](opts) {
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : C[0] || CT.C0;
      let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
      let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
      let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
      let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
      let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
      let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
      let pickerTextStyle = opts && 'pickerTextStyle' in opts ? opts.pickerTextStyle : null;
      let dateTimePickerTextStyle = opts && 'dateTimePickerTextStyle' in opts ? opts.dateTimePickerTextStyle : null;
      return new text_theme.CupertinoTextThemeData.new({primaryColor: primaryColor, textStyle: textStyle, actionTextStyle: actionTextStyle, tabLabelTextStyle: tabLabelTextStyle, navTitleTextStyle: navTitleTextStyle, navLargeTitleTextStyle: navLargeTitleTextStyle, navActionTextStyle: navActionTextStyle, pickerTextStyle: pickerTextStyle, dateTimePickerTextStyle: dateTimePickerTextStyle});
    }
    static ['_#_raw#tearOff'](_defaults, _primaryColor, _textStyle, _actionTextStyle, _tabLabelTextStyle, _navTitleTextStyle, _navLargeTitleTextStyle, _navActionTextStyle, _pickerTextStyle, _dateTimePickerTextStyle) {
      return new text_theme.CupertinoTextThemeData._raw(_defaults, _primaryColor, _textStyle, _actionTextStyle, _tabLabelTextStyle, _navTitleTextStyle, _navLargeTitleTextStyle, _navActionTextStyle, _pickerTextStyle, _dateTimePickerTextStyle);
    }
    get textStyle() {
      let t0;
      t0 = this[_textStyle];
      return t0 == null ? this[_defaults].textStyle : t0;
    }
    get actionTextStyle() {
      let t0;
      t0 = this[_actionTextStyle];
      return t0 == null ? this[_defaults].actionTextStyle({primaryColor: this[_primaryColor]}) : t0;
    }
    get tabLabelTextStyle() {
      let t0;
      t0 = this[_tabLabelTextStyle];
      return t0 == null ? this[_defaults].tabLabelTextStyle : t0;
    }
    get navTitleTextStyle() {
      let t0;
      t0 = this[_navTitleTextStyle];
      return t0 == null ? this[_defaults].navTitleTextStyle : t0;
    }
    get navLargeTitleTextStyle() {
      let t0;
      t0 = this[_navLargeTitleTextStyle];
      return t0 == null ? this[_defaults].navLargeTitleTextStyle : t0;
    }
    get navActionTextStyle() {
      let t0;
      t0 = this[_navActionTextStyle];
      return t0 == null ? this[_defaults].navActionTextStyle({primaryColor: this[_primaryColor]}) : t0;
    }
    get pickerTextStyle() {
      let t0;
      t0 = this[_pickerTextStyle];
      return t0 == null ? this[_defaults].pickerTextStyle : t0;
    }
    get dateTimePickerTextStyle() {
      let t0;
      t0 = this[_dateTimePickerTextStyle];
      return t0 == null ? this[_defaults].dateTimePickerTextStyle : t0;
    }
    resolveFrom(context) {
      return new text_theme.CupertinoTextThemeData._raw(this[_defaults].resolveFrom(context), colors$.CupertinoDynamicColor.maybeResolve(this[_primaryColor], context), text_theme._resolveTextStyle(this[_textStyle], context), text_theme._resolveTextStyle(this[_actionTextStyle], context), text_theme._resolveTextStyle(this[_tabLabelTextStyle], context), text_theme._resolveTextStyle(this[_navTitleTextStyle], context), text_theme._resolveTextStyle(this[_navLargeTitleTextStyle], context), text_theme._resolveTextStyle(this[_navActionTextStyle], context), text_theme._resolveTextStyle(this[_pickerTextStyle], context), text_theme._resolveTextStyle(this[_dateTimePickerTextStyle], context));
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
      let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
      let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
      let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
      let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
      let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
      let pickerTextStyle = opts && 'pickerTextStyle' in opts ? opts.pickerTextStyle : null;
      let dateTimePickerTextStyle = opts && 'dateTimePickerTextStyle' in opts ? opts.dateTimePickerTextStyle : null;
      return new text_theme.CupertinoTextThemeData._raw(this[_defaults], (t0 = primaryColor, t0 == null ? this[_primaryColor] : t0), (t0$ = textStyle, t0$ == null ? this[_textStyle] : t0$), (t0$0 = actionTextStyle, t0$0 == null ? this[_actionTextStyle] : t0$0), (t0$1 = tabLabelTextStyle, t0$1 == null ? this[_tabLabelTextStyle] : t0$1), (t0$2 = navTitleTextStyle, t0$2 == null ? this[_navTitleTextStyle] : t0$2), (t0$3 = navLargeTitleTextStyle, t0$3 == null ? this[_navLargeTitleTextStyle] : t0$3), (t0$4 = navActionTextStyle, t0$4 == null ? this[_navActionTextStyle] : t0$4), (t0$5 = pickerTextStyle, t0$5 == null ? this[_pickerTextStyle] : t0$5), (t0$6 = dateTimePickerTextStyle, t0$6 == null ? this[_dateTimePickerTextStyle] : t0$6));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let defaultData = C[12] || CT.C12;
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("textStyle", this.textStyle, {defaultValue: defaultData.textStyle}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("actionTextStyle", this.actionTextStyle, {defaultValue: defaultData.actionTextStyle}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("tabLabelTextStyle", this.tabLabelTextStyle, {defaultValue: defaultData.tabLabelTextStyle}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("navTitleTextStyle", this.navTitleTextStyle, {defaultValue: defaultData.navTitleTextStyle}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("navLargeTitleTextStyle", this.navLargeTitleTextStyle, {defaultValue: defaultData.navLargeTitleTextStyle}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("navActionTextStyle", this.navActionTextStyle, {defaultValue: defaultData.navActionTextStyle}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("pickerTextStyle", this.pickerTextStyle, {defaultValue: defaultData.pickerTextStyle}));
      properties.add(new (T.DiagnosticsPropertyOfTextStyle()).new("dateTimePickerTextStyle", this.dateTimePickerTextStyle, {defaultValue: defaultData.dateTimePickerTextStyle}));
    }
  };
  (text_theme.CupertinoTextThemeData.new = function(opts) {
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : C[0] || CT.C0;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
    let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
    let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
    let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
    let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
    let pickerTextStyle = opts && 'pickerTextStyle' in opts ? opts.pickerTextStyle : null;
    let dateTimePickerTextStyle = opts && 'dateTimePickerTextStyle' in opts ? opts.dateTimePickerTextStyle : null;
    text_theme.CupertinoTextThemeData._raw.call(this, C[5] || CT.C5, primaryColor, textStyle, actionTextStyle, tabLabelTextStyle, navTitleTextStyle, navLargeTitleTextStyle, navActionTextStyle, pickerTextStyle, dateTimePickerTextStyle);
  }).prototype = text_theme.CupertinoTextThemeData.prototype;
  (text_theme.CupertinoTextThemeData._raw = function(_defaults, _primaryColor, _textStyle, _actionTextStyle, _tabLabelTextStyle, _navTitleTextStyle, _navLargeTitleTextStyle, _navActionTextStyle, _pickerTextStyle, _dateTimePickerTextStyle) {
    this[_defaults$] = _defaults;
    this[_primaryColor$] = _primaryColor;
    this[_textStyle$] = _textStyle;
    this[_actionTextStyle$] = _actionTextStyle;
    this[_tabLabelTextStyle$] = _tabLabelTextStyle;
    this[_navTitleTextStyle$] = _navTitleTextStyle;
    this[_navLargeTitleTextStyle$] = _navLargeTitleTextStyle;
    this[_navActionTextStyle$] = _navActionTextStyle;
    this[_pickerTextStyle$] = _pickerTextStyle;
    this[_dateTimePickerTextStyle$] = _dateTimePickerTextStyle;
    if (!(_navActionTextStyle != null && _actionTextStyle != null || _primaryColor != null)) dart.assertFailed(null, I[0], 159, 14, "(_navActionTextStyle != null && _actionTextStyle != null) || _primaryColor != null");
    ;
  }).prototype = text_theme.CupertinoTextThemeData.prototype;
  dart.addTypeTests(text_theme.CupertinoTextThemeData);
  dart.addTypeCaches(text_theme.CupertinoTextThemeData);
  dart.setMethodSignature(text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getMethods(text_theme.CupertinoTextThemeData.__proto__),
    resolveFrom: dart.fnType(text_theme.CupertinoTextThemeData, [framework.BuildContext]),
    copyWith: dart.fnType(text_theme.CupertinoTextThemeData, [], {actionTextStyle: dart.nullable(text_style.TextStyle), dateTimePickerTextStyle: dart.nullable(text_style.TextStyle), navActionTextStyle: dart.nullable(text_style.TextStyle), navLargeTitleTextStyle: dart.nullable(text_style.TextStyle), navTitleTextStyle: dart.nullable(text_style.TextStyle), pickerTextStyle: dart.nullable(text_style.TextStyle), primaryColor: dart.nullable(ui.Color), tabLabelTextStyle: dart.nullable(text_style.TextStyle), textStyle: dart.nullable(text_style.TextStyle)}, {})
  }));
  dart.setGetterSignature(text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getGetters(text_theme.CupertinoTextThemeData.__proto__),
    textStyle: text_style.TextStyle,
    actionTextStyle: text_style.TextStyle,
    tabLabelTextStyle: text_style.TextStyle,
    navTitleTextStyle: text_style.TextStyle,
    navLargeTitleTextStyle: text_style.TextStyle,
    navActionTextStyle: text_style.TextStyle,
    pickerTextStyle: text_style.TextStyle,
    dateTimePickerTextStyle: text_style.TextStyle
  }));
  dart.setLibraryUri(text_theme.CupertinoTextThemeData, I[1]);
  dart.setFieldSignature(text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getFields(text_theme.CupertinoTextThemeData.__proto__),
    [_defaults]: dart.finalFieldType(text_theme._TextThemeDefaultsBuilder),
    [_primaryColor]: dart.finalFieldType(dart.nullable(ui.Color)),
    [_textStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_actionTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_tabLabelTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_navTitleTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_navLargeTitleTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_navActionTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_pickerTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle)),
    [_dateTimePickerTextStyle]: dart.finalFieldType(dart.nullable(text_style.TextStyle))
  }));
  const labelColor$ = _TextThemeDefaultsBuilder_labelColor;
  const inactiveGrayColor$ = _TextThemeDefaultsBuilder_inactiveGrayColor;
  text_theme._TextThemeDefaultsBuilder = class _TextThemeDefaultsBuilder extends core.Object {
    get labelColor() {
      return this[labelColor$];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get inactiveGrayColor() {
      return this[inactiveGrayColor$];
    }
    set inactiveGrayColor(value) {
      super.inactiveGrayColor = value;
    }
    static ['_#new#tearOff'](labelColor, inactiveGrayColor) {
      return new text_theme._TextThemeDefaultsBuilder.new(labelColor, inactiveGrayColor);
    }
    static _applyLabelColor(original, color) {
      return dart.equals(original.color, color) ? original : original.copyWith({color: color});
    }
    get textStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultTextStyle, this.labelColor);
    }
    get tabLabelTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultTabLabelTextStyle, this.inactiveGrayColor);
    }
    get navTitleTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultMiddleTitleTextStyle, this.labelColor);
    }
    get navLargeTitleTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultLargeTitleTextStyle, this.labelColor);
    }
    get pickerTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultPickerTextStyle, this.labelColor);
    }
    get dateTimePickerTextStyle() {
      return text_theme._TextThemeDefaultsBuilder._applyLabelColor(text_theme._kDefaultDateTimePickerTextStyle, this.labelColor);
    }
    actionTextStyle(opts) {
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      return text_theme._kDefaultActionTextStyle.copyWith({color: primaryColor});
    }
    navActionTextStyle(opts) {
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      return this.actionTextStyle({primaryColor: primaryColor});
    }
    resolveFrom(context) {
      let resolvedLabelColor = colors$.CupertinoDynamicColor.resolve(this.labelColor, context);
      let resolvedInactiveGray = colors$.CupertinoDynamicColor.resolve(this.inactiveGrayColor, context);
      return resolvedLabelColor._equals(this.labelColor) && resolvedInactiveGray._equals(colors$.CupertinoColors.inactiveGray) ? this : new text_theme._TextThemeDefaultsBuilder.new(resolvedLabelColor, resolvedInactiveGray);
    }
  };
  (text_theme._TextThemeDefaultsBuilder.new = function(labelColor, inactiveGrayColor) {
    this[labelColor$] = labelColor;
    this[inactiveGrayColor$] = inactiveGrayColor;
    if (!(labelColor !== null)) dart.assertFailed(null, I[0], 271, 14, "labelColor != null");
    if (!(inactiveGrayColor !== null)) dart.assertFailed(null, I[0], 272, 14, "inactiveGrayColor != null");
    ;
  }).prototype = text_theme._TextThemeDefaultsBuilder.prototype;
  dart.addTypeTests(text_theme._TextThemeDefaultsBuilder);
  dart.addTypeCaches(text_theme._TextThemeDefaultsBuilder);
  dart.setMethodSignature(text_theme._TextThemeDefaultsBuilder, () => ({
    __proto__: dart.getMethods(text_theme._TextThemeDefaultsBuilder.__proto__),
    actionTextStyle: dart.fnType(text_style.TextStyle, [], {primaryColor: dart.nullable(ui.Color)}, {}),
    navActionTextStyle: dart.fnType(text_style.TextStyle, [], {primaryColor: dart.nullable(ui.Color)}, {}),
    resolveFrom: dart.fnType(text_theme._TextThemeDefaultsBuilder, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(text_theme._TextThemeDefaultsBuilder, () => ['_applyLabelColor']);
  dart.setGetterSignature(text_theme._TextThemeDefaultsBuilder, () => ({
    __proto__: dart.getGetters(text_theme._TextThemeDefaultsBuilder.__proto__),
    textStyle: text_style.TextStyle,
    tabLabelTextStyle: text_style.TextStyle,
    navTitleTextStyle: text_style.TextStyle,
    navLargeTitleTextStyle: text_style.TextStyle,
    pickerTextStyle: text_style.TextStyle,
    dateTimePickerTextStyle: text_style.TextStyle
  }));
  dart.setLibraryUri(text_theme._TextThemeDefaultsBuilder, I[1]);
  dart.setFieldSignature(text_theme._TextThemeDefaultsBuilder, () => ({
    __proto__: dart.getFields(text_theme._TextThemeDefaultsBuilder.__proto__),
    labelColor: dart.finalFieldType(ui.Color),
    inactiveGrayColor: dart.finalFieldType(ui.Color)
  }));
  text_theme._resolveTextStyle = function _resolveTextStyle(style, context) {
    let t0;
    t0 = style;
    return t0 == null ? null : t0.copyWith({color: colors$.CupertinoDynamicColor.maybeResolve(style.color, context), backgroundColor: colors$.CupertinoDynamicColor.maybeResolve(style.backgroundColor, context), decorationColor: colors$.CupertinoDynamicColor.maybeResolve(style.decorationColor, context)});
  };
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextDecoration__mask = dart.privateName(ui, "TextDecoration._mask");
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
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  dart.defineLazy(text_theme, {
    /*text_theme._kDefaultTextStyle*/get _kDefaultTextStyle() {
      return C[13] || CT.C13;
    },
    /*text_theme._kDefaultActionTextStyle*/get _kDefaultActionTextStyle() {
      return C[15] || CT.C15;
    },
    /*text_theme._kDefaultTabLabelTextStyle*/get _kDefaultTabLabelTextStyle() {
      return C[16] || CT.C16;
    },
    /*text_theme._kDefaultMiddleTitleTextStyle*/get _kDefaultMiddleTitleTextStyle() {
      return C[17] || CT.C17;
    },
    /*text_theme._kDefaultLargeTitleTextStyle*/get _kDefaultLargeTitleTextStyle() {
      return C[19] || CT.C19;
    },
    /*text_theme._kDefaultPickerTextStyle*/get _kDefaultPickerTextStyle() {
      return C[21] || CT.C21;
    },
    /*text_theme._kDefaultDateTimePickerTextStyle*/get _kDefaultDateTimePickerTextStyle() {
      return C[23] || CT.C23;
    }
  }, false);
  const IconThemeData_Diagnosticable$36 = class IconThemeData_Diagnosticable extends icon_theme_data.IconThemeData {};
  (IconThemeData_Diagnosticable$36.new = function(opts) {
    IconThemeData_Diagnosticable$36.__proto__.new.call(this, opts);
  }).prototype = IconThemeData_Diagnosticable$36.prototype;
  (IconThemeData_Diagnosticable$36.fallback = function() {
    IconThemeData_Diagnosticable$36.__proto__.fallback.call(this);
  }).prototype = IconThemeData_Diagnosticable$36.prototype;
  dart.applyMixin(IconThemeData_Diagnosticable$36, diagnostics.Diagnosticable);
  icon_theme_data$.CupertinoIconThemeData = class CupertinoIconThemeData extends IconThemeData_Diagnosticable$36 {
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let size = opts && 'size' in opts ? opts.size : null;
      return new icon_theme_data$.CupertinoIconThemeData.new({color: color, opacity: opacity, size: size});
    }
    resolve(context) {
      let resolvedColor = colors$.CupertinoDynamicColor.maybeResolve(this.color, context);
      return dart.equals(resolvedColor, this.color) ? this : this.copyWith({color: resolvedColor});
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let size = opts && 'size' in opts ? opts.size : null;
      return new icon_theme_data$.CupertinoIconThemeData.new({color: (t0 = color, t0 == null ? this.color : t0), opacity: (t0$ = opacity, t0$ == null ? this.opacity : t0$), size: (t0$0 = size, t0$0 == null ? this.size : t0$0)});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(colors$.createCupertinoColorProperty("color", this.color, {defaultValue: null}));
    }
  };
  (icon_theme_data$.CupertinoIconThemeData.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let size = opts && 'size' in opts ? opts.size : null;
    icon_theme_data$.CupertinoIconThemeData.__proto__.new.call(this, {color: color, opacity: opacity, size: size});
    ;
  }).prototype = icon_theme_data$.CupertinoIconThemeData.prototype;
  dart.addTypeTests(icon_theme_data$.CupertinoIconThemeData);
  dart.addTypeCaches(icon_theme_data$.CupertinoIconThemeData);
  dart.setMethodSignature(icon_theme_data$.CupertinoIconThemeData, () => ({
    __proto__: dart.getMethods(icon_theme_data$.CupertinoIconThemeData.__proto__),
    copyWith: dart.fnType(icon_theme_data$.CupertinoIconThemeData, [], {color: dart.nullable(ui.Color), opacity: dart.nullable(core.double), size: dart.nullable(core.double)}, {})
  }));
  dart.setLibraryUri(icon_theme_data$.CupertinoIconThemeData, I[2]);
  var data$ = dart.privateName(theme$, "CupertinoTheme.data");
  var child$ = dart.privateName(theme$, "CupertinoTheme.child");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var NoDefaultCupertinoThemeData_scaffoldBackgroundColor = dart.privateName(theme$, "NoDefaultCupertinoThemeData.scaffoldBackgroundColor");
  var NoDefaultCupertinoThemeData_barBackgroundColor = dart.privateName(theme$, "NoDefaultCupertinoThemeData.barBackgroundColor");
  var NoDefaultCupertinoThemeData_textTheme = dart.privateName(theme$, "NoDefaultCupertinoThemeData.textTheme");
  var NoDefaultCupertinoThemeData_primaryContrastingColor = dart.privateName(theme$, "NoDefaultCupertinoThemeData.primaryContrastingColor");
  var NoDefaultCupertinoThemeData_primaryColor = dart.privateName(theme$, "NoDefaultCupertinoThemeData.primaryColor");
  var NoDefaultCupertinoThemeData_brightness = dart.privateName(theme$, "NoDefaultCupertinoThemeData.brightness");
  var _CupertinoTextThemeDefaults_inactiveGray = dart.privateName(theme$, "_CupertinoTextThemeDefaults.inactiveGray");
  var _CupertinoTextThemeDefaults_labelColor = dart.privateName(theme$, "_CupertinoTextThemeDefaults.labelColor");
  var _CupertinoThemeDefaults_textThemeDefaults = dart.privateName(theme$, "_CupertinoThemeDefaults.textThemeDefaults");
  var _CupertinoThemeDefaults_scaffoldBackgroundColor = dart.privateName(theme$, "_CupertinoThemeDefaults.scaffoldBackgroundColor");
  var _CupertinoThemeDefaults_barBackgroundColor = dart.privateName(theme$, "_CupertinoThemeDefaults.barBackgroundColor");
  var _CupertinoThemeDefaults_primaryContrastingColor = dart.privateName(theme$, "_CupertinoThemeDefaults.primaryContrastingColor");
  var _CupertinoThemeDefaults_primaryColor = dart.privateName(theme$, "_CupertinoThemeDefaults.primaryColor");
  var _CupertinoThemeDefaults_brightness = dart.privateName(theme$, "_CupertinoThemeDefaults.brightness");
  var CupertinoThemeData__defaults = dart.privateName(theme$, "CupertinoThemeData._defaults");
  theme$.CupertinoTheme = class CupertinoTheme extends framework.StatelessWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let data = opts && 'data' in opts ? opts.data : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new theme$.CupertinoTheme.new({key: key, data: data, child: child, $creationLocationd_0dea112b090073317d4: C[24] || CT.C24});
    }
    static of(context) {
      let t0, t0$;
      let inheritedTheme = context.dependOnInheritedWidgetOfExactType(theme$._InheritedCupertinoTheme);
      return (t0$ = (t0 = inheritedTheme, t0 == null ? null : t0.theme.data), t0$ == null ? C[25] || CT.C25 : t0$).resolveFrom(context);
    }
    static brightnessOf(context) {
      let t0, t0$;
      let inheritedTheme = context.dependOnInheritedWidgetOfExactType(theme$._InheritedCupertinoTheme);
      t0$ = (t0 = inheritedTheme, t0 == null ? null : t0.theme.data.brightness);
      return t0$ == null ? media_query.MediaQuery.of(context).platformBrightness : t0$;
    }
    static maybeBrightnessOf(context) {
      let t0, t1, t0$;
      let inheritedTheme = context.dependOnInheritedWidgetOfExactType(theme$._InheritedCupertinoTheme);
      t0$ = (t0 = inheritedTheme, t0 == null ? null : t0.theme.data.brightness);
      return t0$ == null ? (t1 = media_query.MediaQuery.maybeOf(context), t1 == null ? null : t1.platformBrightness) : t0$;
    }
    build(context) {
      return new theme$._InheritedCupertinoTheme.new({theme: this, child: new icon_theme.IconTheme.new({data: new icon_theme_data$.CupertinoIconThemeData.new({color: this.data.primaryColor}), child: this.child, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34}), $creationLocationd_0dea112b090073317d4: C[35] || CT.C35});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      this.data.debugFillProperties(properties);
    }
  };
  (theme$.CupertinoTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[child$] = child;
    if (!(child !== null)) dart.assertFailed(null, I[3], 56, 15, "child != null");
    if (!(data !== null)) dart.assertFailed(null, I[3], 57, 15, "data != null");
    theme$.CupertinoTheme.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = theme$.CupertinoTheme.prototype;
  dart.addTypeTests(theme$.CupertinoTheme);
  dart.addTypeCaches(theme$.CupertinoTheme);
  dart.setMethodSignature(theme$.CupertinoTheme, () => ({
    __proto__: dart.getMethods(theme$.CupertinoTheme.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(theme$.CupertinoTheme, () => ['of', 'brightnessOf', 'maybeBrightnessOf']);
  dart.setLibraryUri(theme$.CupertinoTheme, I[4]);
  dart.setFieldSignature(theme$.CupertinoTheme, () => ({
    __proto__: dart.getFields(theme$.CupertinoTheme.__proto__),
    data: dart.finalFieldType(theme$.CupertinoThemeData),
    child: dart.finalFieldType(framework.Widget)
  }));
  var theme$0 = dart.privateName(theme$, "_InheritedCupertinoTheme.theme");
  theme$._InheritedCupertinoTheme = class _InheritedCupertinoTheme extends framework.InheritedWidget {
    get theme() {
      return this[theme$0];
    }
    set theme(value) {
      super.theme = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let theme = opts && 'theme' in opts ? opts.theme : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new theme$._InheritedCupertinoTheme.new({key: key, theme: theme, child: child, $creationLocationd_0dea112b090073317d4: C[36] || CT.C36});
    }
    updateShouldNotify(old) {
      theme$._InheritedCupertinoTheme.as(old);
      return !this.theme.data[$_equals](old.theme.data);
    }
  };
  (theme$._InheritedCupertinoTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[theme$0] = theme;
    if (!(theme !== null)) dart.assertFailed(null, I[3], 142, 15, "theme != null");
    theme$._InheritedCupertinoTheme.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = theme$._InheritedCupertinoTheme.prototype;
  dart.addTypeTests(theme$._InheritedCupertinoTheme);
  dart.addTypeCaches(theme$._InheritedCupertinoTheme);
  dart.setMethodSignature(theme$._InheritedCupertinoTheme, () => ({
    __proto__: dart.getMethods(theme$._InheritedCupertinoTheme.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(theme$._InheritedCupertinoTheme, I[4]);
  dart.setFieldSignature(theme$._InheritedCupertinoTheme, () => ({
    __proto__: dart.getFields(theme$._InheritedCupertinoTheme.__proto__),
    theme: dart.finalFieldType(theme$.CupertinoTheme)
  }));
  var _defaults$0 = dart.privateName(theme$, "_defaults");
  const brightness$ = NoDefaultCupertinoThemeData_brightness;
  const primaryColor$ = NoDefaultCupertinoThemeData_primaryColor;
  const primaryContrastingColor$ = NoDefaultCupertinoThemeData_primaryContrastingColor;
  const textTheme$ = NoDefaultCupertinoThemeData_textTheme;
  const barBackgroundColor$ = NoDefaultCupertinoThemeData_barBackgroundColor;
  const scaffoldBackgroundColor$ = NoDefaultCupertinoThemeData_scaffoldBackgroundColor;
  theme$.NoDefaultCupertinoThemeData = class NoDefaultCupertinoThemeData extends core.Object {
    get brightness() {
      return this[brightness$];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
    get primaryContrastingColor() {
      return this[primaryContrastingColor$];
    }
    set primaryContrastingColor(value) {
      super.primaryContrastingColor = value;
    }
    get textTheme() {
      return this[textTheme$];
    }
    set textTheme(value) {
      super.textTheme = value;
    }
    get barBackgroundColor() {
      return this[barBackgroundColor$];
    }
    set barBackgroundColor(value) {
      super.barBackgroundColor = value;
    }
    get scaffoldBackgroundColor() {
      return this[scaffoldBackgroundColor$];
    }
    set scaffoldBackgroundColor(value) {
      super.scaffoldBackgroundColor = value;
    }
    static ['_#new#tearOff'](opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
      let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
      return new theme$.NoDefaultCupertinoThemeData.new({brightness: brightness, primaryColor: primaryColor, primaryContrastingColor: primaryContrastingColor, textTheme: textTheme, barBackgroundColor: barBackgroundColor, scaffoldBackgroundColor: scaffoldBackgroundColor});
    }
    noDefault() {
      return this;
    }
    resolveFrom(context) {
      let t0;
      function convertColor(color) {
        return colors$.CupertinoDynamicColor.maybeResolve(color, context);
      }
      dart.fn(convertColor, T.ColorNToColorN());
      return new theme$.NoDefaultCupertinoThemeData.new({brightness: this.brightness, primaryColor: convertColor(this.primaryColor), primaryContrastingColor: convertColor(this.primaryContrastingColor), textTheme: (t0 = this.textTheme, t0 == null ? null : t0.resolveFrom(context)), barBackgroundColor: convertColor(this.barBackgroundColor), scaffoldBackgroundColor: convertColor(this.scaffoldBackgroundColor)});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
      let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
      return new theme$.NoDefaultCupertinoThemeData.new({brightness: (t0 = brightness, t0 == null ? this.brightness : t0), primaryColor: (t0$ = primaryColor, t0$ == null ? this.primaryColor : t0$), primaryContrastingColor: (t0$0 = primaryContrastingColor, t0$0 == null ? this.primaryContrastingColor : t0$0), textTheme: (t0$1 = textTheme, t0$1 == null ? this.textTheme : t0$1), barBackgroundColor: (t0$2 = barBackgroundColor, t0$2 == null ? this.barBackgroundColor : t0$2), scaffoldBackgroundColor: (t0$3 = scaffoldBackgroundColor, t0$3 == null ? this.scaffoldBackgroundColor : t0$3)});
    }
  };
  (theme$.NoDefaultCupertinoThemeData.new = function(opts) {
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
    let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
    let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
    let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
    this[brightness$] = brightness;
    this[primaryColor$] = primaryColor;
    this[primaryContrastingColor$] = primaryContrastingColor;
    this[textTheme$] = textTheme;
    this[barBackgroundColor$] = barBackgroundColor;
    this[scaffoldBackgroundColor$] = scaffoldBackgroundColor;
    ;
  }).prototype = theme$.NoDefaultCupertinoThemeData.prototype;
  dart.addTypeTests(theme$.NoDefaultCupertinoThemeData);
  dart.addTypeCaches(theme$.NoDefaultCupertinoThemeData);
  dart.setMethodSignature(theme$.NoDefaultCupertinoThemeData, () => ({
    __proto__: dart.getMethods(theme$.NoDefaultCupertinoThemeData.__proto__),
    noDefault: dart.fnType(theme$.NoDefaultCupertinoThemeData, []),
    resolveFrom: dart.fnType(theme$.NoDefaultCupertinoThemeData, [framework.BuildContext]),
    copyWith: dart.fnType(theme$.NoDefaultCupertinoThemeData, [], {barBackgroundColor: dart.nullable(ui.Color), brightness: dart.nullable(ui.Brightness), primaryColor: dart.nullable(ui.Color), primaryContrastingColor: dart.nullable(ui.Color), scaffoldBackgroundColor: dart.nullable(ui.Color), textTheme: dart.nullable(text_theme.CupertinoTextThemeData)}, {})
  }));
  dart.setLibraryUri(theme$.NoDefaultCupertinoThemeData, I[4]);
  dart.setFieldSignature(theme$.NoDefaultCupertinoThemeData, () => ({
    __proto__: dart.getFields(theme$.NoDefaultCupertinoThemeData.__proto__),
    brightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    primaryColor: dart.finalFieldType(dart.nullable(ui.Color)),
    primaryContrastingColor: dart.finalFieldType(dart.nullable(ui.Color)),
    textTheme: dart.finalFieldType(dart.nullable(text_theme.CupertinoTextThemeData)),
    barBackgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    scaffoldBackgroundColor: dart.finalFieldType(dart.nullable(ui.Color))
  }));
  const _defaults$1 = CupertinoThemeData__defaults;
  const NoDefaultCupertinoThemeData_Diagnosticable$36 = class NoDefaultCupertinoThemeData_Diagnosticable extends theme$.NoDefaultCupertinoThemeData {};
  (NoDefaultCupertinoThemeData_Diagnosticable$36.new = function(opts) {
    NoDefaultCupertinoThemeData_Diagnosticable$36.__proto__.new.call(this, opts);
  }).prototype = NoDefaultCupertinoThemeData_Diagnosticable$36.prototype;
  dart.applyMixin(NoDefaultCupertinoThemeData_Diagnosticable$36, diagnostics.Diagnosticable);
  theme$.CupertinoThemeData = class CupertinoThemeData extends NoDefaultCupertinoThemeData_Diagnosticable$36 {
    get [_defaults$0]() {
      return this[_defaults$1];
    }
    set [_defaults$0](value) {
      super[_defaults$0] = value;
    }
    static ['_#new#tearOff'](opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
      let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
      return new theme$.CupertinoThemeData.new({brightness: brightness, primaryColor: primaryColor, primaryContrastingColor: primaryContrastingColor, textTheme: textTheme, barBackgroundColor: barBackgroundColor, scaffoldBackgroundColor: scaffoldBackgroundColor});
    }
    static ['_#raw#tearOff'](brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
      return new theme$.CupertinoThemeData.raw(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor);
    }
    static ['_#_rawWithDefaults#tearOff'](brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor, _defaults) {
      return new theme$.CupertinoThemeData._rawWithDefaults(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor, _defaults);
    }
    get primaryColor() {
      let t0;
      t0 = super.primaryColor;
      return t0 == null ? this[_defaults$0].primaryColor : t0;
    }
    get primaryContrastingColor() {
      let t0;
      t0 = super.primaryContrastingColor;
      return t0 == null ? this[_defaults$0].primaryContrastingColor : t0;
    }
    get textTheme() {
      let t0;
      t0 = super.textTheme;
      return t0 == null ? this[_defaults$0].textThemeDefaults.createDefaults({primaryColor: this.primaryColor}) : t0;
    }
    get barBackgroundColor() {
      let t0;
      t0 = super.barBackgroundColor;
      return t0 == null ? this[_defaults$0].barBackgroundColor : t0;
    }
    get scaffoldBackgroundColor() {
      let t0;
      t0 = super.scaffoldBackgroundColor;
      return t0 == null ? this[_defaults$0].scaffoldBackgroundColor : t0;
    }
    noDefault() {
      return new theme$.NoDefaultCupertinoThemeData.new({brightness: super.brightness, primaryColor: super.primaryColor, primaryContrastingColor: super.primaryContrastingColor, textTheme: super.textTheme, barBackgroundColor: super.barBackgroundColor, scaffoldBackgroundColor: super.scaffoldBackgroundColor});
    }
    resolveFrom(context) {
      let t0;
      function convertColor(color) {
        return colors$.CupertinoDynamicColor.maybeResolve(color, context);
      }
      dart.fn(convertColor, T.ColorNToColorN());
      return new theme$.CupertinoThemeData._rawWithDefaults(this.brightness, convertColor(super.primaryColor), convertColor(super.primaryContrastingColor), (t0 = super.textTheme, t0 == null ? null : t0.resolveFrom(context)), convertColor(super.barBackgroundColor), convertColor(super.scaffoldBackgroundColor), this[_defaults$0].resolveFrom(context, super.textTheme == null));
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
      let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
      return new theme$.CupertinoThemeData._rawWithDefaults((t0 = brightness, t0 == null ? super.brightness : t0), (t0$ = primaryColor, t0$ == null ? super.primaryColor : t0$), (t0$0 = primaryContrastingColor, t0$0 == null ? super.primaryContrastingColor : t0$0), (t0$1 = textTheme, t0$1 == null ? super.textTheme : t0$1), (t0$2 = barBackgroundColor, t0$2 == null ? super.barBackgroundColor : t0$2), (t0$3 = scaffoldBackgroundColor, t0$3 == null ? super.scaffoldBackgroundColor : t0$3), this[_defaults$0]);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let defaultData = C[25] || CT.C25;
      properties.add(new (T.EnumPropertyOfBrightness()).new("brightness", this.brightness, {defaultValue: null}));
      properties.add(colors$.createCupertinoColorProperty("primaryColor", this.primaryColor, {defaultValue: defaultData.primaryColor}));
      properties.add(colors$.createCupertinoColorProperty("primaryContrastingColor", this.primaryContrastingColor, {defaultValue: defaultData.primaryContrastingColor}));
      properties.add(colors$.createCupertinoColorProperty("barBackgroundColor", this.barBackgroundColor, {defaultValue: defaultData.barBackgroundColor}));
      properties.add(colors$.createCupertinoColorProperty("scaffoldBackgroundColor", this.scaffoldBackgroundColor, {defaultValue: defaultData.scaffoldBackgroundColor}));
      this.textTheme.debugFillProperties(properties);
    }
  };
  (theme$.CupertinoThemeData.new = function(opts) {
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
    let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
    let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
    let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
    theme$.CupertinoThemeData.raw.call(this, brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor);
  }).prototype = theme$.CupertinoThemeData.prototype;
  (theme$.CupertinoThemeData.raw = function(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
    theme$.CupertinoThemeData._rawWithDefaults.call(this, brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor, theme$._kDefaultTheme);
  }).prototype = theme$.CupertinoThemeData.prototype;
  (theme$.CupertinoThemeData._rawWithDefaults = function(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor, _defaults) {
    this[_defaults$1] = _defaults;
    theme$.CupertinoThemeData.__proto__.new.call(this, {brightness: brightness, primaryColor: primaryColor, primaryContrastingColor: primaryContrastingColor, textTheme: textTheme, barBackgroundColor: barBackgroundColor, scaffoldBackgroundColor: scaffoldBackgroundColor});
    ;
  }).prototype = theme$.CupertinoThemeData.prototype;
  dart.addTypeTests(theme$.CupertinoThemeData);
  dart.addTypeCaches(theme$.CupertinoThemeData);
  dart.setMethodSignature(theme$.CupertinoThemeData, () => ({
    __proto__: dart.getMethods(theme$.CupertinoThemeData.__proto__),
    resolveFrom: dart.fnType(theme$.CupertinoThemeData, [framework.BuildContext]),
    copyWith: dart.fnType(theme$.CupertinoThemeData, [], {barBackgroundColor: dart.nullable(ui.Color), brightness: dart.nullable(ui.Brightness), primaryColor: dart.nullable(ui.Color), primaryContrastingColor: dart.nullable(ui.Color), scaffoldBackgroundColor: dart.nullable(ui.Color), textTheme: dart.nullable(text_theme.CupertinoTextThemeData)}, {})
  }));
  dart.setGetterSignature(theme$.CupertinoThemeData, () => ({
    __proto__: dart.getGetters(theme$.CupertinoThemeData.__proto__),
    primaryColor: ui.Color,
    primaryContrastingColor: ui.Color,
    textTheme: text_theme.CupertinoTextThemeData,
    barBackgroundColor: ui.Color,
    scaffoldBackgroundColor: ui.Color
  }));
  dart.setLibraryUri(theme$.CupertinoThemeData, I[4]);
  dart.setFieldSignature(theme$.CupertinoThemeData, () => ({
    __proto__: dart.getFields(theme$.CupertinoThemeData.__proto__),
    [_defaults$0]: dart.finalFieldType(theme$._CupertinoThemeDefaults)
  }));
  const brightness$0 = _CupertinoThemeDefaults_brightness;
  const primaryColor$0 = _CupertinoThemeDefaults_primaryColor;
  const primaryContrastingColor$0 = _CupertinoThemeDefaults_primaryContrastingColor;
  const barBackgroundColor$0 = _CupertinoThemeDefaults_barBackgroundColor;
  const scaffoldBackgroundColor$0 = _CupertinoThemeDefaults_scaffoldBackgroundColor;
  const textThemeDefaults$ = _CupertinoThemeDefaults_textThemeDefaults;
  theme$._CupertinoThemeDefaults = class _CupertinoThemeDefaults extends core.Object {
    get brightness() {
      return this[brightness$0];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get primaryColor() {
      return this[primaryColor$0];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
    get primaryContrastingColor() {
      return this[primaryContrastingColor$0];
    }
    set primaryContrastingColor(value) {
      super.primaryContrastingColor = value;
    }
    get barBackgroundColor() {
      return this[barBackgroundColor$0];
    }
    set barBackgroundColor(value) {
      super.barBackgroundColor = value;
    }
    get scaffoldBackgroundColor() {
      return this[scaffoldBackgroundColor$0];
    }
    set scaffoldBackgroundColor(value) {
      super.scaffoldBackgroundColor = value;
    }
    get textThemeDefaults() {
      return this[textThemeDefaults$];
    }
    set textThemeDefaults(value) {
      super.textThemeDefaults = value;
    }
    static ['_#new#tearOff'](brightness, primaryColor, primaryContrastingColor, barBackgroundColor, scaffoldBackgroundColor, textThemeDefaults) {
      return new theme$._CupertinoThemeDefaults.new(brightness, primaryColor, primaryContrastingColor, barBackgroundColor, scaffoldBackgroundColor, textThemeDefaults);
    }
    resolveFrom(context, resolveTextTheme) {
      function convertColor(color) {
        return colors$.CupertinoDynamicColor.resolve(color, context);
      }
      dart.fn(convertColor, T.ColorToColor());
      return new theme$._CupertinoThemeDefaults.new(this.brightness, convertColor(this.primaryColor), convertColor(this.primaryContrastingColor), convertColor(this.barBackgroundColor), convertColor(this.scaffoldBackgroundColor), resolveTextTheme ? this.textThemeDefaults.resolveFrom(context) : this.textThemeDefaults);
    }
  };
  (theme$._CupertinoThemeDefaults.new = function(brightness, primaryColor, primaryContrastingColor, barBackgroundColor, scaffoldBackgroundColor, textThemeDefaults) {
    this[brightness$0] = brightness;
    this[primaryColor$0] = primaryColor;
    this[primaryContrastingColor$0] = primaryContrastingColor;
    this[barBackgroundColor$0] = barBackgroundColor;
    this[scaffoldBackgroundColor$0] = scaffoldBackgroundColor;
    this[textThemeDefaults$] = textThemeDefaults;
    ;
  }).prototype = theme$._CupertinoThemeDefaults.prototype;
  dart.addTypeTests(theme$._CupertinoThemeDefaults);
  dart.addTypeCaches(theme$._CupertinoThemeDefaults);
  dart.setMethodSignature(theme$._CupertinoThemeDefaults, () => ({
    __proto__: dart.getMethods(theme$._CupertinoThemeDefaults.__proto__),
    resolveFrom: dart.fnType(theme$._CupertinoThemeDefaults, [framework.BuildContext, core.bool])
  }));
  dart.setLibraryUri(theme$._CupertinoThemeDefaults, I[4]);
  dart.setFieldSignature(theme$._CupertinoThemeDefaults, () => ({
    __proto__: dart.getFields(theme$._CupertinoThemeDefaults.__proto__),
    brightness: dart.finalFieldType(dart.nullable(ui.Brightness)),
    primaryColor: dart.finalFieldType(ui.Color),
    primaryContrastingColor: dart.finalFieldType(ui.Color),
    barBackgroundColor: dart.finalFieldType(ui.Color),
    scaffoldBackgroundColor: dart.finalFieldType(ui.Color),
    textThemeDefaults: dart.finalFieldType(theme$._CupertinoTextThemeDefaults)
  }));
  const labelColor$0 = _CupertinoTextThemeDefaults_labelColor;
  const inactiveGray$ = _CupertinoTextThemeDefaults_inactiveGray;
  theme$._CupertinoTextThemeDefaults = class _CupertinoTextThemeDefaults extends core.Object {
    get labelColor() {
      return this[labelColor$0];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get inactiveGray() {
      return this[inactiveGray$];
    }
    set inactiveGray(value) {
      super.inactiveGray = value;
    }
    static ['_#new#tearOff'](labelColor, inactiveGray) {
      return new theme$._CupertinoTextThemeDefaults.new(labelColor, inactiveGray);
    }
    resolveFrom(context) {
      return new theme$._CupertinoTextThemeDefaults.new(colors$.CupertinoDynamicColor.resolve(this.labelColor, context), colors$.CupertinoDynamicColor.resolve(this.inactiveGray, context));
    }
    createDefaults(opts) {
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      if (!(primaryColor !== null)) dart.assertFailed(null, I[3], 497, 12, "primaryColor != null");
      return new theme$._DefaultCupertinoTextThemeData.new({primaryColor: primaryColor, labelColor: this.labelColor, inactiveGray: this.inactiveGray});
    }
  };
  (theme$._CupertinoTextThemeDefaults.new = function(labelColor, inactiveGray) {
    this[labelColor$0] = labelColor;
    this[inactiveGray$] = inactiveGray;
    ;
  }).prototype = theme$._CupertinoTextThemeDefaults.prototype;
  dart.addTypeTests(theme$._CupertinoTextThemeDefaults);
  dart.addTypeCaches(theme$._CupertinoTextThemeDefaults);
  dart.setMethodSignature(theme$._CupertinoTextThemeDefaults, () => ({
    __proto__: dart.getMethods(theme$._CupertinoTextThemeDefaults.__proto__),
    resolveFrom: dart.fnType(theme$._CupertinoTextThemeDefaults, [framework.BuildContext]),
    createDefaults: dart.fnType(text_theme.CupertinoTextThemeData, [], {}, {primaryColor: ui.Color})
  }));
  dart.setLibraryUri(theme$._CupertinoTextThemeDefaults, I[4]);
  dart.setFieldSignature(theme$._CupertinoTextThemeDefaults, () => ({
    __proto__: dart.getFields(theme$._CupertinoTextThemeDefaults.__proto__),
    labelColor: dart.finalFieldType(ui.Color),
    inactiveGray: dart.finalFieldType(ui.Color)
  }));
  var labelColor$1 = dart.privateName(theme$, "_DefaultCupertinoTextThemeData.labelColor");
  var inactiveGray$0 = dart.privateName(theme$, "_DefaultCupertinoTextThemeData.inactiveGray");
  theme$._DefaultCupertinoTextThemeData = class _DefaultCupertinoTextThemeData extends text_theme.CupertinoTextThemeData {
    get labelColor() {
      return this[labelColor$1];
    }
    set labelColor(value) {
      super.labelColor = value;
    }
    get inactiveGray() {
      return this[inactiveGray$0];
    }
    set inactiveGray(value) {
      super.inactiveGray = value;
    }
    static ['_#new#tearOff'](opts) {
      let labelColor = opts && 'labelColor' in opts ? opts.labelColor : null;
      let inactiveGray = opts && 'inactiveGray' in opts ? opts.inactiveGray : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      return new theme$._DefaultCupertinoTextThemeData.new({labelColor: labelColor, inactiveGray: inactiveGray, primaryColor: primaryColor});
    }
    get textStyle() {
      return super.textStyle.copyWith({color: this.labelColor});
    }
    get tabLabelTextStyle() {
      return super.tabLabelTextStyle.copyWith({color: this.inactiveGray});
    }
    get navTitleTextStyle() {
      return super.navTitleTextStyle.copyWith({color: this.labelColor});
    }
    get navLargeTitleTextStyle() {
      return super.navLargeTitleTextStyle.copyWith({color: this.labelColor});
    }
    get pickerTextStyle() {
      return super.pickerTextStyle.copyWith({color: this.labelColor});
    }
    get dateTimePickerTextStyle() {
      return super.dateTimePickerTextStyle.copyWith({color: this.labelColor});
    }
  };
  (theme$._DefaultCupertinoTextThemeData.new = function(opts) {
    let labelColor = opts && 'labelColor' in opts ? opts.labelColor : null;
    let inactiveGray = opts && 'inactiveGray' in opts ? opts.inactiveGray : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    this[labelColor$1] = labelColor;
    this[inactiveGray$0] = inactiveGray;
    if (!(labelColor !== null)) dart.assertFailed(null, I[3], 514, 15, "labelColor != null");
    if (!(inactiveGray !== null)) dart.assertFailed(null, I[3], 515, 15, "inactiveGray != null");
    if (!(primaryColor !== null)) dart.assertFailed(null, I[3], 516, 15, "primaryColor != null");
    theme$._DefaultCupertinoTextThemeData.__proto__.new.call(this, {primaryColor: primaryColor});
    ;
  }).prototype = theme$._DefaultCupertinoTextThemeData.prototype;
  dart.addTypeTests(theme$._DefaultCupertinoTextThemeData);
  dart.addTypeCaches(theme$._DefaultCupertinoTextThemeData);
  dart.setLibraryUri(theme$._DefaultCupertinoTextThemeData, I[4]);
  dart.setFieldSignature(theme$._DefaultCupertinoTextThemeData, () => ({
    __proto__: dart.getFields(theme$._DefaultCupertinoTextThemeData.__proto__),
    labelColor: dart.finalFieldType(ui.Color),
    inactiveGray: dart.finalFieldType(ui.Color)
  }));
  dart.defineLazy(theme$, {
    /*theme$._kDefaultTheme*/get _kDefaultTheme() {
      return C[26] || CT.C26;
    }
  }, false);
  colors$.CupertinoColors = class CupertinoColors extends core.Object {
    static ['_#_#tearOff']() {
      return new colors$.CupertinoColors.__();
    }
  };
  (colors$.CupertinoColors.__ = function() {
    ;
  }).prototype = colors$.CupertinoColors.prototype;
  dart.addTypeTests(colors$.CupertinoColors);
  dart.addTypeCaches(colors$.CupertinoColors);
  dart.setLibraryUri(colors$.CupertinoColors, I[5]);
  dart.setStaticFieldSignature(colors$.CupertinoColors, () => ['activeBlue', 'activeGreen', 'activeOrange', 'white', 'black', 'lightBackgroundGray', 'extraLightBackgroundGray', 'darkBackgroundGray', 'inactiveGray', 'destructiveRed', 'systemBlue', 'systemGreen', 'systemIndigo', 'systemOrange', 'systemPink', 'systemPurple', 'systemRed', 'systemTeal', 'systemYellow', 'systemGrey', 'systemGrey2', 'systemGrey3', 'systemGrey4', 'systemGrey5', 'systemGrey6', 'label', 'secondaryLabel', 'tertiaryLabel', 'quaternaryLabel', 'systemFill', 'secondarySystemFill', 'tertiarySystemFill', 'quaternarySystemFill', 'placeholderText', 'systemBackground', 'secondarySystemBackground', 'tertiarySystemBackground', 'systemGroupedBackground', 'secondarySystemGroupedBackground', 'tertiarySystemGroupedBackground', 'separator', 'opaqueSeparator', 'link']);
  dart.defineLazy(colors$.CupertinoColors, {
    /*colors$.CupertinoColors.activeBlue*/get activeBlue() {
      return C[0] || CT.C0;
    },
    /*colors$.CupertinoColors.activeGreen*/get activeGreen() {
      return C[37] || CT.C37;
    },
    /*colors$.CupertinoColors.activeOrange*/get activeOrange() {
      return C[42] || CT.C42;
    },
    /*colors$.CupertinoColors.white*/get white() {
      return C[10] || CT.C10;
    },
    /*colors$.CupertinoColors.black*/get black() {
      return C[11] || CT.C11;
    },
    /*colors$.CupertinoColors.lightBackgroundGray*/get lightBackgroundGray() {
      return C[47] || CT.C47;
    },
    /*colors$.CupertinoColors.extraLightBackgroundGray*/get extraLightBackgroundGray() {
      return C[48] || CT.C48;
    },
    /*colors$.CupertinoColors.darkBackgroundGray*/get darkBackgroundGray() {
      return C[49] || CT.C49;
    },
    /*colors$.CupertinoColors.inactiveGray*/get inactiveGray() {
      return C[6] || CT.C6;
    },
    /*colors$.CupertinoColors.destructiveRed*/get destructiveRed() {
      return C[50] || CT.C50;
    },
    /*colors$.CupertinoColors.systemBlue*/get systemBlue() {
      return C[0] || CT.C0;
    },
    /*colors$.CupertinoColors.systemGreen*/get systemGreen() {
      return C[37] || CT.C37;
    },
    /*colors$.CupertinoColors.systemIndigo*/get systemIndigo() {
      return C[55] || CT.C55;
    },
    /*colors$.CupertinoColors.systemOrange*/get systemOrange() {
      return C[42] || CT.C42;
    },
    /*colors$.CupertinoColors.systemPink*/get systemPink() {
      return C[60] || CT.C60;
    },
    /*colors$.CupertinoColors.systemPurple*/get systemPurple() {
      return C[65] || CT.C65;
    },
    /*colors$.CupertinoColors.systemRed*/get systemRed() {
      return C[50] || CT.C50;
    },
    /*colors$.CupertinoColors.systemTeal*/get systemTeal() {
      return C[70] || CT.C70;
    },
    /*colors$.CupertinoColors.systemYellow*/get systemYellow() {
      return C[75] || CT.C75;
    },
    /*colors$.CupertinoColors.systemGrey*/get systemGrey() {
      return C[80] || CT.C80;
    },
    /*colors$.CupertinoColors.systemGrey2*/get systemGrey2() {
      return C[84] || CT.C84;
    },
    /*colors$.CupertinoColors.systemGrey3*/get systemGrey3() {
      return C[87] || CT.C87;
    },
    /*colors$.CupertinoColors.systemGrey4*/get systemGrey4() {
      return C[91] || CT.C91;
    },
    /*colors$.CupertinoColors.systemGrey5*/get systemGrey5() {
      return C[96] || CT.C96;
    },
    /*colors$.CupertinoColors.systemGrey6*/get systemGrey6() {
      return C[100] || CT.C100;
    },
    /*colors$.CupertinoColors.label*/get label() {
      return C[9] || CT.C9;
    },
    /*colors$.CupertinoColors.secondaryLabel*/get secondaryLabel() {
      return C[103] || CT.C103;
    },
    /*colors$.CupertinoColors.tertiaryLabel*/get tertiaryLabel() {
      return C[108] || CT.C108;
    },
    /*colors$.CupertinoColors.quaternaryLabel*/get quaternaryLabel() {
      return C[113] || CT.C113;
    },
    /*colors$.CupertinoColors.systemFill*/get systemFill() {
      return C[118] || CT.C118;
    },
    /*colors$.CupertinoColors.secondarySystemFill*/get secondarySystemFill() {
      return C[123] || CT.C123;
    },
    /*colors$.CupertinoColors.tertiarySystemFill*/get tertiarySystemFill() {
      return C[128] || CT.C128;
    },
    /*colors$.CupertinoColors.quaternarySystemFill*/get quaternarySystemFill() {
      return C[133] || CT.C133;
    },
    /*colors$.CupertinoColors.placeholderText*/get placeholderText() {
      return C[138] || CT.C138;
    },
    /*colors$.CupertinoColors.systemBackground*/get systemBackground() {
      return C[28] || CT.C28;
    },
    /*colors$.CupertinoColors.secondarySystemBackground*/get secondarySystemBackground() {
      return C[139] || CT.C139;
    },
    /*colors$.CupertinoColors.tertiarySystemBackground*/get tertiarySystemBackground() {
      return C[140] || CT.C140;
    },
    /*colors$.CupertinoColors.systemGroupedBackground*/get systemGroupedBackground() {
      return C[141] || CT.C141;
    },
    /*colors$.CupertinoColors.secondarySystemGroupedBackground*/get secondarySystemGroupedBackground() {
      return C[142] || CT.C142;
    },
    /*colors$.CupertinoColors.tertiarySystemGroupedBackground*/get tertiarySystemGroupedBackground() {
      return C[143] || CT.C143;
    },
    /*colors$.CupertinoColors.separator*/get separator() {
      return C[144] || CT.C144;
    },
    /*colors$.CupertinoColors.opaqueSeparator*/get opaqueSeparator() {
      return C[149] || CT.C149;
    },
    /*colors$.CupertinoColors.link*/get link() {
      return C[152] || CT.C152;
    }
  }, false);
  var _effectiveColor = dart.privateName(colors$, "_effectiveColor");
  var _debugLabel = dart.privateName(colors$, "_debugLabel");
  var _debugResolveContext = dart.privateName(colors$, "_debugResolveContext");
  var _isPlatformBrightnessDependent = dart.privateName(colors$, "_isPlatformBrightnessDependent");
  var _isHighContrastDependent = dart.privateName(colors$, "_isHighContrastDependent");
  var _isInterfaceElevationDependent = dart.privateName(colors$, "_isInterfaceElevationDependent");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  const _effectiveColor$ = CupertinoDynamicColor__effectiveColor;
  const _debugLabel$ = CupertinoDynamicColor__debugLabel;
  const _debugResolveContext$ = CupertinoDynamicColor__debugResolveContext;
  const color$ = CupertinoDynamicColor_color;
  const darkColor$ = CupertinoDynamicColor_darkColor;
  const highContrastColor$ = CupertinoDynamicColor_highContrastColor;
  const darkHighContrastColor$ = CupertinoDynamicColor_darkHighContrastColor;
  const elevatedColor$ = CupertinoDynamicColor_elevatedColor;
  const darkElevatedColor$ = CupertinoDynamicColor_darkElevatedColor;
  const highContrastElevatedColor$ = CupertinoDynamicColor_highContrastElevatedColor;
  const darkHighContrastElevatedColor$ = CupertinoDynamicColor_darkHighContrastElevatedColor;
  const Color_Diagnosticable$36 = class Color_Diagnosticable extends ui.Color {};
  (Color_Diagnosticable$36.new = function(value) {
    Color_Diagnosticable$36.__proto__.new.call(this, value);
  }).prototype = Color_Diagnosticable$36.prototype;
  (Color_Diagnosticable$36.fromARGB = function(a, r, g, b) {
    Color_Diagnosticable$36.__proto__.fromARGB.call(this, a, r, g, b);
  }).prototype = Color_Diagnosticable$36.prototype;
  (Color_Diagnosticable$36.fromRGBO = function(r, g, b, opacity) {
    Color_Diagnosticable$36.__proto__.fromRGBO.call(this, r, g, b, opacity);
  }).prototype = Color_Diagnosticable$36.prototype;
  dart.applyMixin(Color_Diagnosticable$36, diagnostics.Diagnosticable);
  colors$.CupertinoDynamicColor = class CupertinoDynamicColor extends Color_Diagnosticable$36 {
    get [_effectiveColor]() {
      return this[_effectiveColor$];
    }
    set [_effectiveColor](value) {
      super[_effectiveColor] = value;
    }
    get [_debugLabel]() {
      return this[_debugLabel$];
    }
    set [_debugLabel](value) {
      super[_debugLabel] = value;
    }
    get [_debugResolveContext]() {
      return this[_debugResolveContext$];
    }
    set [_debugResolveContext](value) {
      super[_debugResolveContext] = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get darkColor() {
      return this[darkColor$];
    }
    set darkColor(value) {
      super.darkColor = value;
    }
    get highContrastColor() {
      return this[highContrastColor$];
    }
    set highContrastColor(value) {
      super.highContrastColor = value;
    }
    get darkHighContrastColor() {
      return this[darkHighContrastColor$];
    }
    set darkHighContrastColor(value) {
      super.darkHighContrastColor = value;
    }
    get elevatedColor() {
      return this[elevatedColor$];
    }
    set elevatedColor(value) {
      super.elevatedColor = value;
    }
    get darkElevatedColor() {
      return this[darkElevatedColor$];
    }
    set darkElevatedColor(value) {
      super.darkElevatedColor = value;
    }
    get highContrastElevatedColor() {
      return this[highContrastElevatedColor$];
    }
    set highContrastElevatedColor(value) {
      super.highContrastElevatedColor = value;
    }
    get darkHighContrastElevatedColor() {
      return this[darkHighContrastElevatedColor$];
    }
    set darkHighContrastElevatedColor(value) {
      super.darkHighContrastElevatedColor = value;
    }
    static ['_#new#tearOff'](opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
      let highContrastColor = opts && 'highContrastColor' in opts ? opts.highContrastColor : null;
      let darkHighContrastColor = opts && 'darkHighContrastColor' in opts ? opts.darkHighContrastColor : null;
      let elevatedColor = opts && 'elevatedColor' in opts ? opts.elevatedColor : null;
      let darkElevatedColor = opts && 'darkElevatedColor' in opts ? opts.darkElevatedColor : null;
      let highContrastElevatedColor = opts && 'highContrastElevatedColor' in opts ? opts.highContrastElevatedColor : null;
      let darkHighContrastElevatedColor = opts && 'darkHighContrastElevatedColor' in opts ? opts.darkHighContrastElevatedColor : null;
      return new colors$.CupertinoDynamicColor.new({debugLabel: debugLabel, color: color, darkColor: darkColor, highContrastColor: highContrastColor, darkHighContrastColor: darkHighContrastColor, elevatedColor: elevatedColor, darkElevatedColor: darkElevatedColor, highContrastElevatedColor: highContrastElevatedColor, darkHighContrastElevatedColor: darkHighContrastElevatedColor});
    }
    static ['_#withBrightnessAndContrast#tearOff'](opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
      let highContrastColor = opts && 'highContrastColor' in opts ? opts.highContrastColor : null;
      let darkHighContrastColor = opts && 'darkHighContrastColor' in opts ? opts.darkHighContrastColor : null;
      return new colors$.CupertinoDynamicColor.withBrightnessAndContrast({debugLabel: debugLabel, color: color, darkColor: darkColor, highContrastColor: highContrastColor, darkHighContrastColor: darkHighContrastColor});
    }
    static ['_#withBrightness#tearOff'](opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
      return new colors$.CupertinoDynamicColor.withBrightness({debugLabel: debugLabel, color: color, darkColor: darkColor});
    }
    static ['_#_#tearOff'](_effectiveColor, color, darkColor, highContrastColor, darkHighContrastColor, elevatedColor, darkElevatedColor, highContrastElevatedColor, darkHighContrastElevatedColor, _debugResolveContext, _debugLabel) {
      return new colors$.CupertinoDynamicColor.__(_effectiveColor, color, darkColor, highContrastColor, darkHighContrastColor, elevatedColor, darkElevatedColor, highContrastElevatedColor, darkHighContrastElevatedColor, _debugResolveContext, _debugLabel);
    }
    get value() {
      return this[_effectiveColor].value;
    }
    static resolve(resolvable, context) {
      if (!(context !== null)) dart.assertFailed(null, I[6], 891, 12, "context != null");
      return colors$.CupertinoDynamicColor.is(resolvable) ? resolvable.resolveFrom(context) : resolvable;
    }
    static maybeResolve(resolvable, context) {
      if (resolvable == null) return null;
      if (!(context !== null)) dart.assertFailed(null, I[6], 913, 12, "context != null");
      return colors$.CupertinoDynamicColor.is(resolvable) ? resolvable.resolveFrom(context) : resolvable;
    }
    get [_isPlatformBrightnessDependent]() {
      return !this.color._equals(this.darkColor) || !this.elevatedColor._equals(this.darkElevatedColor) || !this.highContrastColor._equals(this.darkHighContrastColor) || !this.highContrastElevatedColor._equals(this.darkHighContrastElevatedColor);
    }
    get [_isHighContrastDependent]() {
      return !this.color._equals(this.highContrastColor) || !this.darkColor._equals(this.darkHighContrastColor) || !this.elevatedColor._equals(this.highContrastElevatedColor) || !this.darkElevatedColor._equals(this.darkHighContrastElevatedColor);
    }
    get [_isInterfaceElevationDependent]() {
      return !this.color._equals(this.elevatedColor) || !this.darkColor._equals(this.darkElevatedColor) || !this.highContrastColor._equals(this.highContrastElevatedColor) || !this.darkHighContrastColor._equals(this.darkHighContrastElevatedColor);
    }
    resolveFrom(context) {
      let t0, t0$, t0$0, t0$1;
      let brightness = ui.Brightness.light;
      if (this[_isPlatformBrightnessDependent]) {
        brightness = (t0 = theme$.CupertinoTheme.maybeBrightnessOf(context), t0 == null ? ui.Brightness.light : t0);
      }
      let isHighContrastEnabled = false;
      if (this[_isHighContrastDependent]) {
        isHighContrastEnabled = (t0$0 = (t0$ = media_query.MediaQuery.maybeOf(context), t0$ == null ? null : t0$.highContrast), t0$0 == null ? false : t0$0);
      }
      let level = this[_isInterfaceElevationDependent] ? (t0$1 = interface_level.CupertinoUserInterfaceLevel.maybeOf(context), t0$1 == null ? interface_level.CupertinoUserInterfaceLevelData.base : t0$1) : interface_level.CupertinoUserInterfaceLevelData.base;
      let resolved = null;
      switch (brightness) {
        case C[156] || CT.C156:
        {
          switch (level) {
            case C[154] || CT.C154:
            {
              resolved = dart.test(isHighContrastEnabled) ? this.highContrastColor : this.color;
              break;
            }
            case C[155] || CT.C155:
            {
              resolved = dart.test(isHighContrastEnabled) ? this.highContrastElevatedColor : this.elevatedColor;
              break;
            }
          }
          break;
        }
        case C[157] || CT.C157:
        {
          switch (level) {
            case C[154] || CT.C154:
            {
              resolved = dart.test(isHighContrastEnabled) ? this.darkHighContrastColor : this.darkColor;
              break;
            }
            case C[155] || CT.C155:
            {
              resolved = dart.test(isHighContrastEnabled) ? this.darkHighContrastElevatedColor : this.darkElevatedColor;
              break;
            }
          }
        }
      }
      let _debugContext = null;
      if (!dart.fn(() => {
        _debugContext = framework.Element.as(context);
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[6], 1007, 12, "() {\n      _debugContext = context as Element;\n      return true;\n    }()");
      return new colors$.CupertinoDynamicColor.__(resolved, this.color, this.darkColor, this.highContrastColor, this.darkHighContrastColor, this.elevatedColor, this.darkElevatedColor, this.highContrastElevatedColor, this.darkHighContrastElevatedColor, _debugContext, this[_debugLabel]);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return colors$.CupertinoDynamicColor.is(other) && other.value === this.value && other.color._equals(this.color) && other.darkColor._equals(this.darkColor) && other.highContrastColor._equals(this.highContrastColor) && other.darkHighContrastColor._equals(this.darkHighContrastColor) && other.elevatedColor._equals(this.elevatedColor) && other.darkElevatedColor._equals(this.darkElevatedColor) && other.highContrastElevatedColor._equals(this.highContrastElevatedColor) && other.darkHighContrastElevatedColor._equals(this.darkHighContrastElevatedColor);
    }
    get hashCode() {
      return ui.hashValues(this.value, this.color, this.darkColor, this.highContrastColor, this.elevatedColor, this.darkElevatedColor, this.darkHighContrastColor, this.darkHighContrastElevatedColor, this.highContrastElevatedColor);
    }
    toString(opts) {
      let t1, t1$, t1$0;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[158] || CT.C158;
      const toString = (name, color) => {
        let marker = color._equals(this[_effectiveColor]) ? "*" : "";
        return marker + name + " = " + dart.str(color) + marker;
      };
      dart.fn(toString, T.StringAndColorToString());
      let xs = (() => {
        let t0 = T.JSArrayOfString().of([toString("color", this.color)]);
        if (this[_isPlatformBrightnessDependent]) t0.push(toString("darkColor", this.darkColor));
        if (this[_isHighContrastDependent]) t0.push(toString("highContrastColor", this.highContrastColor));
        if (this[_isPlatformBrightnessDependent] && this[_isHighContrastDependent]) t0.push(toString("darkHighContrastColor", this.darkHighContrastColor));
        if (this[_isInterfaceElevationDependent]) t0.push(toString("elevatedColor", this.elevatedColor));
        if (this[_isPlatformBrightnessDependent] && this[_isInterfaceElevationDependent]) t0.push(toString("darkElevatedColor", this.darkElevatedColor));
        if (this[_isHighContrastDependent] && this[_isInterfaceElevationDependent]) t0.push(toString("highContrastElevatedColor", this.highContrastElevatedColor));
        if (this[_isPlatformBrightnessDependent] && this[_isHighContrastDependent] && this[_isInterfaceElevationDependent]) t0.push(toString("darkHighContrastElevatedColor", this.darkHighContrastElevatedColor));
        return t0;
      })();
      return dart.str((t1 = this[_debugLabel], t1 == null ? object.objectRuntimeType(this, "CupertinoDynamicColor") : t1)) + "(" + xs[$join](", ") + ", resolved by: " + dart.str((t1$0 = (t1$ = this[_debugResolveContext], t1$ == null ? null : t1$.widget), t1$0 == null ? "UNRESOLVED" : t1$0)) + ")";
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      if (this[_debugLabel] != null) properties.add(new diagnostics.MessageProperty.new("debugLabel", dart.nullCheck(this[_debugLabel])));
      properties.add(colors$.createCupertinoColorProperty("color", this.color));
      if (this[_isPlatformBrightnessDependent]) properties.add(colors$.createCupertinoColorProperty("darkColor", this.darkColor));
      if (this[_isHighContrastDependent]) properties.add(colors$.createCupertinoColorProperty("highContrastColor", this.highContrastColor));
      if (this[_isPlatformBrightnessDependent] && this[_isHighContrastDependent]) properties.add(colors$.createCupertinoColorProperty("darkHighContrastColor", this.darkHighContrastColor));
      if (this[_isInterfaceElevationDependent]) properties.add(colors$.createCupertinoColorProperty("elevatedColor", this.elevatedColor));
      if (this[_isPlatformBrightnessDependent] && this[_isInterfaceElevationDependent]) properties.add(colors$.createCupertinoColorProperty("darkElevatedColor", this.darkElevatedColor));
      if (this[_isHighContrastDependent] && this[_isInterfaceElevationDependent]) properties.add(colors$.createCupertinoColorProperty("highContrastElevatedColor", this.highContrastElevatedColor));
      if (this[_isPlatformBrightnessDependent] && this[_isHighContrastDependent] && this[_isInterfaceElevationDependent]) properties.add(colors$.createCupertinoColorProperty("darkHighContrastElevatedColor", this.darkHighContrastElevatedColor));
      if (this[_debugResolveContext] != null) properties.add(new (T.DiagnosticsPropertyOfElement()).new("last resolved", this[_debugResolveContext]));
    }
  };
  (colors$.CupertinoDynamicColor.new = function(opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
    let highContrastColor = opts && 'highContrastColor' in opts ? opts.highContrastColor : null;
    let darkHighContrastColor = opts && 'darkHighContrastColor' in opts ? opts.darkHighContrastColor : null;
    let elevatedColor = opts && 'elevatedColor' in opts ? opts.elevatedColor : null;
    let darkElevatedColor = opts && 'darkElevatedColor' in opts ? opts.darkElevatedColor : null;
    let highContrastElevatedColor = opts && 'highContrastElevatedColor' in opts ? opts.highContrastElevatedColor : null;
    let darkHighContrastElevatedColor = opts && 'darkHighContrastElevatedColor' in opts ? opts.darkHighContrastElevatedColor : null;
    colors$.CupertinoDynamicColor.__.call(this, color, color, darkColor, highContrastColor, darkHighContrastColor, elevatedColor, darkElevatedColor, highContrastElevatedColor, darkHighContrastElevatedColor, null, debugLabel);
  }).prototype = colors$.CupertinoDynamicColor.prototype;
  (colors$.CupertinoDynamicColor.withBrightnessAndContrast = function(opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
    let highContrastColor = opts && 'highContrastColor' in opts ? opts.highContrastColor : null;
    let darkHighContrastColor = opts && 'darkHighContrastColor' in opts ? opts.darkHighContrastColor : null;
    colors$.CupertinoDynamicColor.new.call(this, {debugLabel: debugLabel, color: color, darkColor: darkColor, highContrastColor: highContrastColor, darkHighContrastColor: darkHighContrastColor, elevatedColor: color, darkElevatedColor: darkColor, highContrastElevatedColor: highContrastColor, darkHighContrastElevatedColor: darkHighContrastColor});
  }).prototype = colors$.CupertinoDynamicColor.prototype;
  (colors$.CupertinoDynamicColor.withBrightness = function(opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let darkColor = opts && 'darkColor' in opts ? opts.darkColor : null;
    colors$.CupertinoDynamicColor.new.call(this, {debugLabel: debugLabel, color: color, darkColor: darkColor, highContrastColor: color, darkHighContrastColor: darkColor, elevatedColor: color, darkElevatedColor: darkColor, highContrastElevatedColor: color, darkHighContrastElevatedColor: darkColor});
  }).prototype = colors$.CupertinoDynamicColor.prototype;
  (colors$.CupertinoDynamicColor.__ = function(_effectiveColor, color, darkColor, highContrastColor, darkHighContrastColor, elevatedColor, darkElevatedColor, highContrastElevatedColor, darkHighContrastElevatedColor, _debugResolveContext, _debugLabel) {
    this[_effectiveColor$] = _effectiveColor;
    this[color$] = color;
    this[darkColor$] = darkColor;
    this[highContrastColor$] = highContrastColor;
    this[darkHighContrastColor$] = darkHighContrastColor;
    this[elevatedColor$] = elevatedColor;
    this[darkElevatedColor$] = darkElevatedColor;
    this[highContrastElevatedColor$] = highContrastElevatedColor;
    this[darkHighContrastElevatedColor$] = darkHighContrastElevatedColor;
    this[_debugResolveContext$] = _debugResolveContext;
    this[_debugLabel$] = _debugLabel;
    if (!(color !== null)) dart.assertFailed(null, I[6], 763, 14, "color != null");
    if (!(darkColor !== null)) dart.assertFailed(null, I[6], 764, 14, "darkColor != null");
    if (!(highContrastColor !== null)) dart.assertFailed(null, I[6], 765, 14, "highContrastColor != null");
    if (!(darkHighContrastColor !== null)) dart.assertFailed(null, I[6], 766, 14, "darkHighContrastColor != null");
    if (!(elevatedColor !== null)) dart.assertFailed(null, I[6], 767, 14, "elevatedColor != null");
    if (!(darkElevatedColor !== null)) dart.assertFailed(null, I[6], 768, 14, "darkElevatedColor != null");
    if (!(highContrastElevatedColor !== null)) dart.assertFailed(null, I[6], 769, 14, "highContrastElevatedColor != null");
    if (!(darkHighContrastElevatedColor !== null)) dart.assertFailed(null, I[6], 770, 14, "darkHighContrastElevatedColor != null");
    if (!(_effectiveColor !== null)) dart.assertFailed(null, I[6], 771, 14, "_effectiveColor != null");
    colors$.CupertinoDynamicColor.__proto__.new.call(this, 0);
    ;
  }).prototype = colors$.CupertinoDynamicColor.prototype;
  dart.addTypeTests(colors$.CupertinoDynamicColor);
  dart.addTypeCaches(colors$.CupertinoDynamicColor);
  dart.setMethodSignature(colors$.CupertinoDynamicColor, () => ({
    __proto__: dart.getMethods(colors$.CupertinoDynamicColor.__proto__),
    resolveFrom: dart.fnType(colors$.CupertinoDynamicColor, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(colors$.CupertinoDynamicColor, () => ['resolve', 'maybeResolve']);
  dart.setGetterSignature(colors$.CupertinoDynamicColor, () => ({
    __proto__: dart.getGetters(colors$.CupertinoDynamicColor.__proto__),
    value: core.int,
    [_isPlatformBrightnessDependent]: core.bool,
    [_isHighContrastDependent]: core.bool,
    [_isInterfaceElevationDependent]: core.bool
  }));
  dart.setLibraryUri(colors$.CupertinoDynamicColor, I[5]);
  dart.setFieldSignature(colors$.CupertinoDynamicColor, () => ({
    __proto__: dart.getFields(colors$.CupertinoDynamicColor.__proto__),
    [_effectiveColor]: dart.finalFieldType(ui.Color),
    [_debugLabel]: dart.finalFieldType(dart.nullable(core.String)),
    [_debugResolveContext]: dart.finalFieldType(dart.nullable(framework.Element)),
    color: dart.finalFieldType(ui.Color),
    darkColor: dart.finalFieldType(ui.Color),
    highContrastColor: dart.finalFieldType(ui.Color),
    darkHighContrastColor: dart.finalFieldType(ui.Color),
    elevatedColor: dart.finalFieldType(ui.Color),
    darkElevatedColor: dart.finalFieldType(ui.Color),
    highContrastElevatedColor: dart.finalFieldType(ui.Color),
    darkHighContrastElevatedColor: dart.finalFieldType(ui.Color)
  }));
  dart.defineExtensionMethods(colors$.CupertinoDynamicColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(colors$.CupertinoDynamicColor, ['hashCode']);
  colors$.createCupertinoColorProperty = function createCupertinoColorProperty(name, value, opts) {
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C[159] || CT.C159;
    let style = opts && 'style' in opts ? opts.style : C[160] || CT.C160;
    let level = opts && 'level' in opts ? opts.level : C[158] || CT.C158;
    if (colors$.CupertinoDynamicColor.is(value)) {
      return new (T.DiagnosticsPropertyOfCupertinoDynamicColor()).new(name, value, {description: value[_debugLabel], showName: showName, defaultValue: defaultValue, style: style, level: level});
    } else {
      return new colors.ColorProperty.new(name, value, {showName: showName, defaultValue: defaultValue, style: style, level: level});
    }
  };
  dart.trackLibraries("packages/flutter/src/cupertino/text_theme.dart", {
    "package:flutter/src/cupertino/text_theme.dart": text_theme,
    "package:flutter/src/cupertino/icon_theme_data.dart": icon_theme_data$,
    "package:flutter/src/cupertino/theme.dart": theme$,
    "package:flutter/src/cupertino/colors.dart": colors$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_theme.dart","icon_theme_data.dart","theme.dart","colors.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgKkC;;;;;;IACnB;;;;;;IAEI;;;;;;IAIA;;;;;;IAMA;;;;;;IAIA;;;;;;IAIA;;;;;;IAIA;;;;;;IAMA;;;;;;IAIA;;;;;;;;;;;;;;;;;;;;;;;AA9BU;0BAAc,AAAU;IAAS;;;AAK1D,WAAO;0BAAoB,AAAU,+CAA8B;IACrE;;;AAImC;0BAAsB,AAAU;IAAiB;;;AAIjD;0BAAsB,AAAU;IAAiB;;;AAI5C;0BAA2B,AAAU;IAAsB;;;AAKjG,WAAO;0BAAuB,AAAU,kDAAiC;IAC3E;;;AAIiC;0BAAoB,AAAU;IAAe;;;AAIrC;0BAA4B,AAAU;IAAuB;gBAUtD;AAC9C,YAA8B,4CAC5B,AAAU,4BAAY,OAAO,GACP,2CAAa,qBAAe,OAAO,GACzD,6BAAkB,kBAAY,OAAO,GACrC,6BAAkB,wBAAkB,OAAO,GAC3C,6BAAkB,0BAAoB,OAAO,GAC7C,6BAAkB,0BAAoB,OAAO,GAC7C,6BAAkB,+BAAyB,OAAO,GAClD,6BAAkB,2BAAqB,OAAO,GAC9C,6BAAkB,wBAAkB,OAAO,GAC3C,6BAAkB,gCAA0B,OAAO;IAEvD;;;UAKS;UACI;UACA;UACA;UACA;UACA;UACA;UACA;UACA;AAEX,YAA8B,4CAC5B,kBACa,KAAb,YAAY,EAAZ,aAAgB,4BACN,MAAV,SAAS,EAAT,cAAa,0BACG,OAAhB,eAAe,EAAf,eAAmB,iCACD,OAAlB,iBAAiB,EAAjB,eAAqB,mCACH,OAAlB,iBAAiB,EAAjB,eAAqB,mCACE,OAAvB,sBAAsB,EAAtB,eAA0B,wCACP,OAAnB,kBAAkB,EAAlB,eAAsB,oCACN,OAAhB,eAAe,EAAf,eAAmB,iCACK,OAAxB,uBAAuB,EAAvB,eAA2B;IAE/B;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACP;AAC8E,MAA3G,AAAW,UAAD,KAAK,6CAA+B,aAAa,+BAAyB,AAAY,WAAD;AAC8B,MAA7H,AAAW,UAAD,KAAK,6CAA+B,mBAAmB,qCAA+B,AAAY,WAAD;AACwB,MAAnI,AAAW,UAAD,KAAK,6CAA+B,qBAAqB,uCAAiC,AAAY,WAAD;AACoB,MAAnI,AAAW,UAAD,KAAK,6CAA+B,qBAAqB,uCAAiC,AAAY,WAAD;AACmC,MAAlJ,AAAW,UAAD,KAAK,6CAA+B,0BAA0B,4CAAsC,AAAY,WAAD;AACa,MAAtI,AAAW,UAAD,KAAK,6CAA+B,sBAAsB,wCAAkC,AAAY,WAAD;AACY,MAA7H,AAAW,UAAD,KAAK,6CAA+B,mBAAmB,qCAA+B,AAAY,WAAD;AAC0C,MAArJ,AAAW,UAAD,KAAK,6CAA+B,2BAA2B,6CAAuC,AAAY,WAAD;IAC7H;;;QAxIQ;QACK;QACA;QACA;QACA;QACA;QACA;QACA;QACA;qEAGN,YAAY,EACZ,SAAS,EACT,eAAe,EACf,iBAAiB,EACjB,iBAAiB,EACjB,sBAAsB,EACtB,kBAAkB,EAClB,eAAe,EACf,uBAAuB;EACxB;qDAGC,WACA,eACA,YACA,kBACA,oBACA,oBACA,yBACA,qBACA,kBACA;IATA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACK,AAAyD,mBAAtC,YAAY,gBAAgB,YAAa,aAAa;;EAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmHlF;;;;;;IACA;;;;;;;;;4BAEgC,UAAgB;AAC1D,YAAsB,aAAf,AAAS,QAAD,QAAU,KAAK,IACzB,QAAQ,GACR,AAAS,QAAD,kBAAiB,KAAK;IACrC;;AAE2B,mEAAiB,+BAAoB;IAAW;;AACxC,mEAAiB,uCAA4B;IAAkB;;AAC/D,mEAAiB,0CAA+B;IAAW;;AACtD,mEAAiB,yCAA8B;IAAW;;AACjE,mEAAiB,qCAA0B;IAAW;;AAC9C,mEAAiB,6CAAkC;IAAW;;UAEpE;AAAmB,YAAA,AAAyB,sDAAgB,YAAY;IAAC;;UACtE;AAAmB,iDAA8B,YAAY;IAAC;gBAEjD;AACrC,+BAA2C,sCAAQ,iBAAY,OAAO;AACtE,iCAA6C,sCAAQ,wBAAmB,OAAO;AAC3F,YAAO,AAAmB,AAAc,mBAAf,SAAI,oBAAc,AAAqB,oBAAD,SAAoB,wCAC/E,OACA,6CAA0B,kBAAkB,EAAE,oBAAoB;IACxE;;uDA9BO,YACA;IADA;IACA;UACI,AAAW,UAAD;UACV,AAAkB,iBAAD;;EAAS;;;;;;;;;;;;;;;;;;;;;;;;;4DAxKC,OAAoB;;AAE1D,SAAO,KAAK;wBAAL,OAAO,oBACiB,2CAAa,AAAM,KAAD,QAAQ,OAAO,oBACvB,2CAAa,AAAM,KAAD,kBAAkB,OAAO,oBAC3C,2CAAa,AAAM,KAAD,kBAAkB,OAAO;EAEtF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA/FgB,6BAAkB;;;MAclB,mCAAwB;;;MAcxB,qCAA0B;;;MAQ1B,wCAA6B;;;MAS7B,uCAA4B;;;MAoB5B,mCAAwB;;;MAexB,2CAAgC;;;;;;;;;;;;;;;;;;;YCxEX;AACpB,0BAAsC,2CAAa,YAAO,OAAO;AAC9E,YAAqB,aAAd,aAAa,EAAI,cAAQ,OAAO,sBAAgB,aAAa;IACtE;;;UAKyC;UAAe;UAAiB;AACvE,YAAO,0DACQ,KAAN,KAAK,EAAL,aAAc,4BACJ,MAAR,OAAO,EAAP,cAAgB,4BACd,OAAL,IAAI,EAAJ,eAAa;IAEvB;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC4C,MAAhF,AAAW,UAAD,KAAK,qCAA6B,SAAS,2BAAqB;IAC5E;;;QA3BS;QACC;QACA;AACL,6EAAa,KAAK,WAAW,OAAO,QAAQ,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICyC7B;;;;;;IAwDZ;;;;;;;;;;;;cAhD6B;;AACR,2BAAiB,AAAQ,OAAD;AACxD,YAAkE,EAA/B,YAA3B,cAAc,eAAd,OAAgB,AAAM,gBAAtB,iDAAsE,OAAO;IACvF;wBAiB4C;;AACV,2BAAiB,AAAQ,OAAD;AACxD,kBAAO,cAAc,eAAd,OAAgB,AAAM,AAAK;YAA3B,eAAoD,AAAY,0BAAT,OAAO;IACvE;6BAiBkD;;AAChB,2BAAiB,AAAQ,OAAD;AACxD,kBAAO,cAAc,eAAd,OAAgB,AAAM,AAAK;YAA3B,qBAAoD,+BAAQ,OAAO,gBAAf,OAAkB;IAC/E;UAQ0B;AACxB,YAAO,iDACE,aACA,oCACC,wDAA8B,AAAK,iCAClC;IAGb;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACA,MAApC,AAAK,8BAAoB,UAAU;IACrC;;;QAjFO;QACS;QACA;;IADA;IACA;UACJ,AAAM,KAAD;UACL,AAAK,IAAD;AACX,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IAuFC;;;;;;;;;;;;uBAG4B;;AAAQ,YAAW,EAAX,AAAM,0BAAQ,AAAI,AAAM,GAAP;IAAW;;;QAT9E;QACS;QACE;;IADF;UAEJ,AAAM,KAAD;AACZ,mEAAW,GAAG,SAAS,KAAK;;EAAC;;;;;;;;;;;;;;;;;;;;IA4MhB;;;;;;IAiBL;;;;;;IAcA;;;;;;IAKiB;;;;;;IAMjB;;;;;;IAKA;;;;;;;;;;;;;;;;AAO8B;IAAI;gBAQM;;AACnD,eAAO,aAAoB;AAAU,cAAsB,4CAAa,KAAK,EAAE,OAAO;;;AAEtF,YAAO,yDACO,+BACE,YAAY,CAAC,6CACF,YAAY,CAAC,6EAC3B,OAAW,eAAY,OAAO,wBACrB,YAAY,CAAC,mDACR,YAAY,CAAC;IAE1C;;;UASc;UACL;UACA;UACiB;UACjB;UACA;AAEP,YAAO,0DACkB,KAAX,UAAU,EAAV,aAAmB,sCACJ,MAAb,YAAY,EAAZ,cAAqB,oDACc,OAAxB,uBAAuB,EAAvB,eAAgC,kDACpC,OAAV,SAAS,EAAT,eAAkB,6CACU,OAAnB,kBAAkB,EAAlB,eAA2B,2DACE,OAAxB,uBAAuB,EAAvB,eAAgC;IAE7D;;;QAzHO;QACA;QACA;QACA;QACA;QACA;IALA;IACA;IACA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;;;IAtG4B;;;;;;;;;;;;;;;;;;;;;;;AAGJ,WAAM;0BAAgB,AAAU;IAAY;;;AAGjC,WAAM;0BAA2B,AAAU;IAAuB;;;AAIrG,WAAa;0BAAa,AAAU,AAAkB,kEAA6B;IACrF;;;AAGgC,WAAM;0BAAsB,AAAU;IAAkB;;;AAGnD,WAAM;0BAA2B,AAAU;IAAuB;;AAIrG,YAAO,yDACa,gCACE,6CACW,0CACd,qCACS,mDACK;IAEnC;gBAG4C;;AAC1C,eAAO,aAAoB;AAAU,cAAsB,4CAAa,KAAK,EAAE,OAAO;;;AAEtF,YAA0B,gDACxB,iBACA,YAAY,CAAO,qBACnB,YAAY,CAAO,oEACb,OAAW,eAAY,OAAO,IACpC,YAAY,CAAO,2BACnB,YAAY,CAAO,gCACnB,AAAU,8BAAY,OAAO,EAAQ,AAAU;IAEnD;;;UAIc;UACL;UACA;UACiB;UACjB;UACA;AAEP,YAA0B,iDACb,KAAX,UAAU,EAAV,aAAoB,yBACP,MAAb,YAAY,EAAZ,cAAsB,4BACE,OAAxB,uBAAuB,EAAvB,eAAiC,wCACvB,OAAV,SAAS,EAAT,eAAmB,0BACA,OAAnB,kBAAkB,EAAlB,eAA4B,mCACJ,OAAxB,uBAAuB,EAAvB,eAAiC,uCACjC;IAEJ;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACX;AAC6D,MAAtF,AAAW,UAAD,KAAK,uCAAyB,cAAc,gCAA0B;AACkC,MAAlH,AAAW,UAAD,KAAK,qCAA6B,gBAAgB,kCAA4B,AAAY,WAAD;AACgD,MAAnJ,AAAW,UAAD,KAAK,qCAA6B,2BAA2B,6CAAuC,AAAY,WAAD;AACW,MAApI,AAAW,UAAD,KAAK,qCAA6B,sBAAsB,wCAAkC,AAAY,WAAD;AACoC,MAAnJ,AAAW,UAAD,KAAK,qCAA6B,2BAA2B,6CAAuC,AAAY,WAAD;AAChF,MAAzC,AAAU,mCAAoB,UAAU;IAC1C;;;QAlIc;QACL;QACA;QACiB;QACjB;QACA;6CAEH,UAAU,EACV,YAAY,EACZ,uBAAuB,EACvB,SAAS,EACT,kBAAkB,EAClB,uBAAuB;EACxB;4CAQS,YACL,cACA,yBACiB,WACjB,oBACA;0DAEP,UAAU,EACV,YAAY,EACZ,uBAAuB,EACvB,SAAS,EACT,kBAAkB,EAClB,uBAAuB,EACvB;EACD;yDAGa,YACL,cACA,yBACiB,WACjB,oBACA;IACF;AACH,oEACU,UAAU,gBACR,YAAY,2BACD,uBAAuB,aACrC,SAAS,sBACA,kBAAkB,2BACb,uBAAuB;;EACjD;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyOiB;;;;;;IACN;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACsB;;;;;;;;;gBAEe,SAAc;AAC7D,eAAM,aAAmB;AAAU,cAAsB,uCAAQ,KAAK,EAAE,OAAO;;;AAE/E,YAAO,wCACL,iBACA,YAAY,CAAC,oBACb,YAAY,CAAC,+BACb,YAAY,CAAC,0BACb,YAAY,CAAC,+BACb,gBAAgB,GAAG,AAAkB,mCAAY,OAAO,IAAI,sBAA5C;IAEpB;;iDA1BO,YACA,cACA,yBACA,oBACA,yBACA;IALA;IACA;IACA;IACA;IACA;IACA;;EACN;;;;;;;;;;;;;;;;;;;;IA8BW;;;;;;IACA;;;;;;;;;gBAEyC;AACnD,YAAO,4CACiB,sCAAQ,iBAAY,OAAO,GAC3B,sCAAQ,mBAAc,OAAO;IAEvD;;UAEuD;AACrD,YAAO,AAAa,YAAD;AACnB,YAAO,8DACS,YAAY,cACd,+BACE;IAElB;;qDArBO,YACA;IADA;IACA;;EACN;;;;;;;;;;;;;;;;;IAmCW;;;;;;IACA;;;;;;;;;;;;;AAGe,YAAM,AAAU,kCAAgB;IAAW;;AAGnC,YAAM,AAAkB,0CAAgB;IAAa;;AAGrD,YAAM,AAAkB,0CAAgB;IAAW;;AAG9C,YAAM,AAAuB,+CAAgB;IAAW;;AAG/D,YAAM,AAAgB,wCAAgB;IAAW;;AAGzC,YAAM,AAAwB,gDAAgB;IAAW;;;QA3BlF;QACA;QACC;IAFD;IACA;UAEJ,AAAW,UAAD;UACV,AAAa,YAAD;UACZ,AAAa,YAAD;AACnB,kFAAoB,YAAY;;EAAC;;;;;;;;;;MArfV,qBAAc;;;;;;;;;;;ECOvB;;;;;;MAMgB,kCAAU;;;MAOV,mCAAW;;;MAKX,oCAAY;;;MAU5B,6BAAK;;;MAUL,6BAAK;;;MAKL,2CAAmB;;;MAKnB,gDAAwB;;;MAKxB,0CAAkB;;;MAQF,oCAAY;;;MAa5B,sCAAc;;;MAQE,kCAAU;;;MAcV,mCAAW;;;MAcX,oCAAY;;;MAcZ,oCAAY;;;MAcZ,kCAAU;;;MAcV,oCAAY;;;MAcZ,iCAAS;;;MAcT,kCAAU;;;MAcV,oCAAY;;;MAcZ,kCAAU;;;MAcV,mCAAW;;;MAcX,mCAAW;;;MAcX,mCAAW;;;MAcX,mCAAW;;;MAcX,mCAAW;;;MAUX,6BAAK;;;MAcL,sCAAc;;;MAcd,qCAAa;;;MAcb,uCAAe;;;MAcf,kCAAU;;;MAcV,2CAAmB;;;MAcnB,0CAAkB;;;MAclB,4CAAoB;;;MAcpB,uCAAe;;;MAgBf,wCAAgB;;;MAgBhB,iDAAyB;;;MAgBzB,gDAAwB;;;MAgBxB,+CAAuB;;;MAgBvB,wDAAgC;;;MAgBhC,uDAA+B;;;MAc/B,iCAAS;;;MAcT,uCAAe;;;MAcf,4BAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4N3B;;;;;;IAKE;;;;;;IAEC;;;;;;IAWH;;;;;;IAWA;;;;;;IAWA;;;;;;IAWA;;;;;;IAWA;;;;;;IAWA;;;;;;IAWA;;;;;;IAWA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA5FK,YAAA,AAAgB;IAAK;mBA0GX,YAAyB;AAClD,YAAO,AAAQ,OAAD;AACd,YAAmB,kCAAX,UAAU,IACd,AAAW,UAAD,aAAa,OAAO,IAC9B,UAAU;IAChB;wBAekC,YAAyB;AACzD,UAAI,AAAW,UAAD,UACZ,MAAO;AACT,YAAO,AAAQ,OAAD;AACd,YAAmB,kCAAX,UAAU,IACd,AAAW,UAAD,aAAa,OAAO,IAC9B,UAAU;IAChB;;AAGE,YAGI,EAHG,mBAAS,oBACT,2BAAiB,4BACjB,+BAAqB,gCACrB,uCAA6B;IACtC;;AAGE,YAGI,EAHG,mBAAS,4BACT,uBAAa,gCACb,2BAAiB,oCACjB,+BAAqB;IAC9B;;AAGE,YAGI,EAHG,mBAAS,wBACT,uBAAa,4BACb,+BAAqB,oCACrB,mCAAyB;IAClC;gBA+B+C;;AAClC,uBAAwB;AACnC,UAAI;AACyE,QAA3E,cAAwD,KAA3B,wCAAkB,OAAO,GAAzB,aAAyC;;AAEnE,kCAAwB;AAC7B,UAAI;AACwE,QAA1E,yBAAkE,cAA/B,+BAAQ,OAAO,iBAAf,OAAkB,mBAAlB,eAAkC;;AAGjC,kBAAQ,wCACG,OAAjB,oDAAQ,OAAO,GAAf,eAAoD,+DAChD;AAExB;AACZ,cAAQ,UAAU;;;AAEd,kBAAQ,KAAK;;;AAEmD,cAA5D,qBAAW,qBAAqB,IAAG,yBAAoB;AACvD;;;;AAE4E,cAA5E,qBAAW,qBAAqB,IAAG,iCAA4B;AAC/D;;;AAEJ;;;;AAEA,kBAAQ,KAAK;;;AAE2D,cAApE,qBAAW,qBAAqB,IAAG,6BAAwB;AAC3D;;;;AAEoF,cAApF,qBAAW,qBAAqB,IAAG,qCAAgC;AACnE;;;;;AAIC;AACT,WAAO,AAGN;AAFmC,QAAlC,gBAAwB,qBAAR,OAAO;AACvB,cAAO;;AAET,YAA6B,sCAC3B,QAAQ,EACR,YACA,gBACA,wBACA,4BACA,oBACA,wBACA,gCACA,oCACA,aAAa,EACb;IAEJ;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAST,kCATG,KAAK,KACL,AAAM,AAAM,KAAP,WAAU,cACf,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAU,KAAX,mBAAc,mBACnB,AAAM,AAAkB,KAAnB,2BAAsB,2BAC3B,AAAM,AAAsB,KAAvB,+BAA0B,+BAC/B,AAAM,AAAc,KAAf,uBAAkB,uBACvB,AAAM,AAAkB,KAAnB,2BAAsB,2BAC3B,AAAM,AAA0B,KAA3B,mCAA8B,mCACnC,AAAM,AAA8B,KAA/B,uCAAkC;IAChD;;AAIE,YAAO,eACL,YACA,YACA,gBACA,wBACA,oBACA,wBACA,4BACA,oCACA;IAEJ;;;UAGkC;AAChC,YAAO,YAAgB,MAAY;AACpB,qBAAS,AAAM,KAAD,SAAI,yBAAkB,MAAM;AACvD,cAAS,AAA4B,OAAtB,GAAC,IAAI,oBAAI,KAAK,IAAC,MAAM;;;AAGnB,eAAa;yCAAC,QAAQ,CAAC,SAAS;AACjD,YAAI,sCAAgC,gBAAQ,CAAC,aAAa;AAC1D,YAAI,gCAA0B,gBAAQ,CAAC,qBAAqB;AAC5D,YAAI,wCAAkC,gCAA0B,gBAAQ,CAAC,yBAAyB;AAClG,YAAI,sCAAgC,gBAAQ,CAAC,iBAAiB;AAC9D,YAAI,wCAAkC,sCAAgC,gBAAQ,CAAC,qBAAqB;AACpG,YAAI,kCAA4B,sCAAgC,gBAAQ,CAAC,6BAA6B;AACtG,YAAI,wCAAkC,kCAA4B,sCAAgC,gBAAQ,CAAC,iCAAiC;;;AAG9I,YAA2J,WAArI,wBAAZ,aAAe,yBAAkB,MAAM,kCAAyB,MAAG,AAAG,EAAD,QAAM,QAAM,8BAA8C,wDAA7B,OAAsB,aAAtB,eAAgC,wBAAa;IAC3J;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACpC,UAAI,2BACF,AAAW,AAAgD,UAAjD,KAAK,oCAAgB,cAAyB,eAAX;AACa,MAA5D,AAAW,UAAD,KAAK,qCAA6B,SAAS;AACrD,UAAI,sCACF,AAAW,AAAyD,UAA1D,KAAK,qCAA6B,aAAa;AAC3D,UAAI,gCACF,AAAW,AAAyE,UAA1E,KAAK,qCAA6B,qBAAqB;AACnE,UAAI,wCAAkC,gCACpC,AAAW,AAAiF,UAAlF,KAAK,qCAA6B,yBAAyB;AACvE,UAAI,sCACF,AAAW,AAAiE,UAAlE,KAAK,qCAA6B,iBAAiB;AAC/D,UAAI,wCAAkC,sCACpC,AAAW,AAAyE,UAA1E,KAAK,qCAA6B,qBAAqB;AACnE,UAAI,kCAA4B,sCAC9B,AAAW,AAAyF,UAA1F,KAAK,qCAA6B,6BAA6B;AAC3E,UAAI,wCAAkC,kCAA4B,sCAChE,AAAW,AAAiG,UAAlG,KAAK,qCAA6B,iCAAiC;AAE/E,UAAI,oCACF,AAAW,AAAwE,UAAzE,KAAK,2CAA6B,iBAAiB;IACjE;;;QAnaU;QACO;QACA;QACA;QACA;QACA;QACA;QACA;QACA;gDAEV,KAAK,EACL,KAAK,EACL,SAAS,EACT,iBAAiB,EACjB,qBAAqB,EACrB,aAAa,EACb,iBAAiB,EACjB,yBAAyB,EACzB,6BAA6B,EAC7B,MACA,UAAU;EACX;;QASI;QACO;QACA;QACA;QACA;8DAEH,UAAU,SACf,KAAK,aACD,SAAS,qBACD,iBAAiB,yBACb,qBAAqB,iBAC7B,KAAK,qBACD,SAAS,6BACD,iBAAiB,iCACb,qBAAqB;EACrD;;QAQS;QACO;QACA;8DAEH,UAAU,SACf,KAAK,aACD,SAAS,qBACD,KAAK,yBACD,SAAS,iBACjB,KAAK,qBACD,SAAS,6BACD,KAAK,iCACD,SAAS;EACzC;+CAGM,iBACA,OACA,WACA,mBACA,uBACA,eACA,mBACA,2BACA,+BACA,sBACA;IAVA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACI,AAAM,KAAD;UACL,AAAU,SAAD;UACT,AAAkB,iBAAD;UACjB,AAAsB,qBAAD;UACrB,AAAc,aAAD;UACb,AAAkB,iBAAD;UACjB,AAA0B,yBAAD;UACzB,AAA8B,6BAAD;UAC7B,AAAgB,eAAD;AAItB,2DAAM;;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+EA8UL,MACA;QACF;QACG;QACa;QACL;AAEhB,QAAU,iCAAN,KAAK;AACP,YAAO,0DACL,IAAI,EACJ,KAAK,gBACQ,AAAM,KAAD,yBACR,QAAQ,gBACJ,YAAY,SACnB,KAAK,SACL,KAAK;;AAGd,YAAO,8BACL,IAAI,EACJ,KAAK,aACK,QAAQ,gBACJ,YAAY,SACnB,KAAK,SACL,KAAK;;EAGlB","file":"../../../../../../../../../../packages/flutter/src/cupertino/text_theme.dart.lib.js"}');
  // Exports:
  return {
    src__cupertino__text_theme: text_theme,
    src__cupertino__icon_theme_data: icon_theme_data$,
    src__cupertino__theme: theme$,
    src__cupertino__colors: colors$
  };
}));

//# sourceMappingURL=text_theme.dart.lib.js.map
