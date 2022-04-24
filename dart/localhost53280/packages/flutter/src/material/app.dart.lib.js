define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/material/arc.dart', 'packages/flutter/src/material/icon_button.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/material/scrollbar.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/cupertino/debug.dart', 'packages/flutter/src/widgets/icon.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/material/colors.dart', 'packages/flutter/src/material/page.dart', 'packages/flutter/src/services/restoration.dart', 'packages/flutter/src/services/keyboard_key.dart', 'packages/flutter/src/widgets/grid_paper.dart', 'packages/flutter/src/painting/placeholder_span.dart'], (function load__packages__flutter__src__material__app_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__material__arc$46dart, packages__flutter__src__material__icon_button$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__material__scrollbar$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__cupertino__debug$46dart, packages__flutter__src__widgets__icon$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__material__colors$46dart, packages__flutter__src__material__page$46dart, packages__flutter__src__services__restoration$46dart, packages__flutter__src__services__keyboard_key$46dart, packages__flutter__src__widgets__grid_paper$46dart, packages__flutter__src__painting__placeholder_span$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const heroes = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__heroes;
  const router = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__router;
  const localizations = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__localizations;
  const shortcuts = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__shortcuts;
  const actions = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__actions;
  const scroll_configuration = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_configuration;
  const overscroll_indicator = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__overscroll_indicator;
  const media_query = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const app = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__app;
  const focus_scope = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__focus_scope;
  const focus_manager = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__focus_manager;
  const arc = packages__flutter__src__material__arc$46dart.src__material__arc;
  const scaffold = packages__flutter__src__material__icon_button$46dart.src__material__scaffold;
  const theme_data = packages__flutter__src__material__icon_button$46dart.src__material__theme_data;
  const theme$ = packages__flutter__src__material__icon_button$46dart.src__material__theme;
  const material_localizations = packages__flutter__src__material__icon_button$46dart.src__material__material_localizations;
  const floating_action_button = packages__flutter__src__material__icon_button$46dart.src__material__floating_action_button;
  const tooltip = packages__flutter__src__material__icon_button$46dart.src__material__tooltip;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const scrollbar = packages__flutter__src__material__scrollbar$46dart.src__material__scrollbar;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const localizations$ = packages__flutter__src__cupertino__debug$46dart.src__cupertino__localizations;
  const icon = packages__flutter__src__widgets__icon$46dart.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const colors = packages__flutter__src__material__colors$46dart.src__material__colors;
  const page = packages__flutter__src__material__page$46dart.src__material__page;
  const raw_keyboard = packages__flutter__src__services__restoration$46dart.src__services__raw_keyboard;
  const keyboard_key = packages__flutter__src__services__keyboard_key$46dart.src__services__keyboard_key;
  const grid_paper = packages__flutter__src__widgets__grid_paper$46dart.src__widgets__grid_paper;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  var app$ = Object.create(dart.library);
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    BuildContextToWidget: () => (T$.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    RectN: () => (T$.RectN = dart.constFn(dart.nullable(ui.Rect)))(),
    RectNAndRectNToMaterialRectArcTween: () => (T$.RectNAndRectNToMaterialRectArcTween = dart.constFn(dart.fnType(arc.MaterialRectArcTween, [T$.RectN(), T$.RectN()])))(),
    JSArrayOfLocalizationsDelegate: () => (T$.JSArrayOfLocalizationsDelegate = dart.constFn(_interceptors.JSArray$(localizations.LocalizationsDelegate)))(),
    StateOfStatefulWidget: () => (T$.StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))(),
    GlobalObjectKeyOfStateOfStatefulWidget: () => (T$.GlobalObjectKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalObjectKey$(T$.StateOfStatefulWidget())))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    RouteSettingsAndFnToMaterialPageRouteOfT: () => (T$.RouteSettingsAndFnToMaterialPageRouteOfT = dart.constFn(dart.gFnType(T => {
      var __t$MaterialPageRouteOfT = () => (__t$MaterialPageRouteOfT = dart.constFn(page.MaterialPageRoute$(T)))();
      return [__t$MaterialPageRouteOfT(), [navigator.RouteSettings, T$.BuildContextToWidget()]];
    }, T => {
      var __t$MaterialPageRouteOfT = () => (__t$MaterialPageRouteOfT = dart.constFn(page.MaterialPageRoute$(T)))();
      return [T$.ObjectN()];
    })))(),
    FocusNodeAndRawKeyEventToKeyEventResult: () => (T$.FocusNodeAndRawKeyEventToKeyEventResult = dart.constFn(dart.fnType(focus_manager.KeyEventResult, [focus_manager.FocusNode, raw_keyboard.RawKeyEvent])))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: app$.ThemeMode.prototype,
        [_Enum__name]: "system",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: app$.ThemeMode.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: app$.ThemeMode.prototype,
        [_Enum__name]: "dark",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], app$.ThemeMode);
    },
    get C4() {
      return C[4] = dart.constMap(core.String, T$.BuildContextToWidget(), []);
    },
    get C5() {
      return C[5] = dart.constList([], navigator.NavigatorObserver);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "US",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "en"
      });
    },
    get C6() {
      return C[6] = dart.constList([C[7] || CT.C7], ui.Locale);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MaterialApp",
        [_Location_column]: 9,
        [_Location_line]: 168,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MaterialApp",
        [_Location_column]: 9,
        [_Location_line]: 220,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "horizontal",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Scrollbar",
        [_Location_column]: 20,
        [_Location_line]: 738,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_Enum__name]: "vertical",
        [_Enum_index]: 1
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "StretchingOverscrollIndicator",
        [_Location_column]: 20,
        [_Location_line]: 766,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: scroll_configuration.AndroidOverscrollIndicator.prototype,
        [_Enum__name]: "stretch",
        [_Enum_index]: 0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: scroll_configuration.AndroidOverscrollIndicator.prototype,
        [_Enum__name]: "glow",
        [_Enum_index]: 1
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GlowingOverscrollIndicator",
        [_Location_column]: 16,
        [_Location_line]: 775,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 20,
        [_Location_line]: 813,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58727
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget__location]: C[24] || CT.C24,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C[25] || CT.C25
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "FloatingActionButton",
        [_Location_column]: 12,
        [_Location_line]: 810,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Builder",
        [_Location_column]: 13,
        [_Location_line]: 840,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 28,
        [_Location_line]: 856,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget__location]: C[29] || CT.C29,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 0,
        [SizedBox_width]: 0
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnimatedTheme",
        [_Location_column]: 14,
        [_Location_line]: 837,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ScaffoldMessenger",
        [_Location_column]: 12,
        [_Location_line]: 835,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "WidgetsApp",
        [_Location_column]: 25,
        [_Location_line]: 871,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "WidgetsApp",
        [_Location_column]: 12,
        [_Location_line]: 900,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Focus",
        [_Location_column]: 14,
        [_Location_line]: 939,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3774462944.0
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridPaper",
        [_Location_column]: 18,
        [_Location_line]: 950,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: app$.MaterialScrollBehavior.prototype,
        [ScrollBehavior__androidOverscrollIndicator]: null,
        [_androidOverscrollIndicator]: null
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "HeroControllerScope",
        [_Location_column]: 14,
        [_Location_line]: 962,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ScrollConfiguration",
        [_Location_column]: 12,
        [_Location_line]: 960,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: ui.TextDecorationStyle.prototype,
        [_Enum__name]: "double",
        [_Enum_index]: 1
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967040.0
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 1
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 8
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 3506372608.0
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: "fallback style; consider putting your text in a Material",
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: C[41] || CT.C41,
        [TextStyle_decorationColor]: C[42] || CT.C42,
        [TextStyle_decoration]: C[43] || CT.C43,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[44] || CT.C44,
        [TextStyle_fontSize]: 48,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "monospace",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[45] || CT.C45,
        [TextStyle_inherit]: true
      });
    }
  }, false);
  var C = Array(46).fill(void 0);
  var I = [
    "package:flutter/src/material/app.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/app.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  app$.ThemeMode = class ThemeMode extends core._Enum {
    toString() {
      return "ThemeMode." + this[_name];
    }
  };
  (app$.ThemeMode.new = function(index, name) {
    app$.ThemeMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = app$.ThemeMode.prototype;
  dart.addTypeTests(app$.ThemeMode);
  dart.addTypeCaches(app$.ThemeMode);
  dart.setLibraryUri(app$.ThemeMode, I[0]);
  dart.setStaticFieldSignature(app$.ThemeMode, () => ['values', 'system', 'light', 'dark']);
  dart.defineExtensionMethods(app$.ThemeMode, ['toString']);
  app$.ThemeMode.system = C[0] || CT.C0;
  app$.ThemeMode.light = C[1] || CT.C1;
  app$.ThemeMode.dark = C[2] || CT.C2;
  app$.ThemeMode.values = C[3] || CT.C3;
  var navigatorKey$ = dart.privateName(app$, "MaterialApp.navigatorKey");
  var scaffoldMessengerKey$ = dart.privateName(app$, "MaterialApp.scaffoldMessengerKey");
  var home$ = dart.privateName(app$, "MaterialApp.home");
  var routes$ = dart.privateName(app$, "MaterialApp.routes");
  var initialRoute$ = dart.privateName(app$, "MaterialApp.initialRoute");
  var onGenerateRoute$ = dart.privateName(app$, "MaterialApp.onGenerateRoute");
  var onGenerateInitialRoutes$ = dart.privateName(app$, "MaterialApp.onGenerateInitialRoutes");
  var onUnknownRoute$ = dart.privateName(app$, "MaterialApp.onUnknownRoute");
  var navigatorObservers$ = dart.privateName(app$, "MaterialApp.navigatorObservers");
  var routeInformationProvider$ = dart.privateName(app$, "MaterialApp.routeInformationProvider");
  var routeInformationParser$ = dart.privateName(app$, "MaterialApp.routeInformationParser");
  var routerDelegate$ = dart.privateName(app$, "MaterialApp.routerDelegate");
  var backButtonDispatcher$ = dart.privateName(app$, "MaterialApp.backButtonDispatcher");
  var builder$ = dart.privateName(app$, "MaterialApp.builder");
  var title$ = dart.privateName(app$, "MaterialApp.title");
  var onGenerateTitle$ = dart.privateName(app$, "MaterialApp.onGenerateTitle");
  var theme$0 = dart.privateName(app$, "MaterialApp.theme");
  var darkTheme$ = dart.privateName(app$, "MaterialApp.darkTheme");
  var highContrastTheme$ = dart.privateName(app$, "MaterialApp.highContrastTheme");
  var highContrastDarkTheme$ = dart.privateName(app$, "MaterialApp.highContrastDarkTheme");
  var themeMode$ = dart.privateName(app$, "MaterialApp.themeMode");
  var color$ = dart.privateName(app$, "MaterialApp.color");
  var locale$ = dart.privateName(app$, "MaterialApp.locale");
  var localizationsDelegates$ = dart.privateName(app$, "MaterialApp.localizationsDelegates");
  var localeListResolutionCallback$ = dart.privateName(app$, "MaterialApp.localeListResolutionCallback");
  var localeResolutionCallback$ = dart.privateName(app$, "MaterialApp.localeResolutionCallback");
  var supportedLocales$ = dart.privateName(app$, "MaterialApp.supportedLocales");
  var showPerformanceOverlay$ = dart.privateName(app$, "MaterialApp.showPerformanceOverlay");
  var checkerboardRasterCacheImages$ = dart.privateName(app$, "MaterialApp.checkerboardRasterCacheImages");
  var checkerboardOffscreenLayers$ = dart.privateName(app$, "MaterialApp.checkerboardOffscreenLayers");
  var showSemanticsDebugger$ = dart.privateName(app$, "MaterialApp.showSemanticsDebugger");
  var debugShowCheckedModeBanner$ = dart.privateName(app$, "MaterialApp.debugShowCheckedModeBanner");
  var shortcuts$ = dart.privateName(app$, "MaterialApp.shortcuts");
  var actions$ = dart.privateName(app$, "MaterialApp.actions");
  var restorationScopeId$ = dart.privateName(app$, "MaterialApp.restorationScopeId");
  var scrollBehavior$ = dart.privateName(app$, "MaterialApp.scrollBehavior");
  var debugShowMaterialGrid$ = dart.privateName(app$, "MaterialApp.debugShowMaterialGrid");
  var useInheritedMediaQuery$ = dart.privateName(app$, "MaterialApp.useInheritedMediaQuery");
  var Locale__countryCode = dart.privateName(ui, "Locale._countryCode");
  var Locale_scriptCode = dart.privateName(ui, "Locale.scriptCode");
  var Locale__languageCode = dart.privateName(ui, "Locale._languageCode");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  app$.MaterialApp = class MaterialApp extends framework.StatefulWidget {
    get navigatorKey() {
      return this[navigatorKey$];
    }
    set navigatorKey(value) {
      super.navigatorKey = value;
    }
    get scaffoldMessengerKey() {
      return this[scaffoldMessengerKey$];
    }
    set scaffoldMessengerKey(value) {
      super.scaffoldMessengerKey = value;
    }
    get home() {
      return this[home$];
    }
    set home(value) {
      super.home = value;
    }
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
    get initialRoute() {
      return this[initialRoute$];
    }
    set initialRoute(value) {
      super.initialRoute = value;
    }
    get onGenerateRoute() {
      return this[onGenerateRoute$];
    }
    set onGenerateRoute(value) {
      super.onGenerateRoute = value;
    }
    get onGenerateInitialRoutes() {
      return this[onGenerateInitialRoutes$];
    }
    set onGenerateInitialRoutes(value) {
      super.onGenerateInitialRoutes = value;
    }
    get onUnknownRoute() {
      return this[onUnknownRoute$];
    }
    set onUnknownRoute(value) {
      super.onUnknownRoute = value;
    }
    get navigatorObservers() {
      return this[navigatorObservers$];
    }
    set navigatorObservers(value) {
      super.navigatorObservers = value;
    }
    get routeInformationProvider() {
      return this[routeInformationProvider$];
    }
    set routeInformationProvider(value) {
      super.routeInformationProvider = value;
    }
    get routeInformationParser() {
      return this[routeInformationParser$];
    }
    set routeInformationParser(value) {
      super.routeInformationParser = value;
    }
    get routerDelegate() {
      return this[routerDelegate$];
    }
    set routerDelegate(value) {
      super.routerDelegate = value;
    }
    get backButtonDispatcher() {
      return this[backButtonDispatcher$];
    }
    set backButtonDispatcher(value) {
      super.backButtonDispatcher = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get onGenerateTitle() {
      return this[onGenerateTitle$];
    }
    set onGenerateTitle(value) {
      super.onGenerateTitle = value;
    }
    get theme() {
      return this[theme$0];
    }
    set theme(value) {
      super.theme = value;
    }
    get darkTheme() {
      return this[darkTheme$];
    }
    set darkTheme(value) {
      super.darkTheme = value;
    }
    get highContrastTheme() {
      return this[highContrastTheme$];
    }
    set highContrastTheme(value) {
      super.highContrastTheme = value;
    }
    get highContrastDarkTheme() {
      return this[highContrastDarkTheme$];
    }
    set highContrastDarkTheme(value) {
      super.highContrastDarkTheme = value;
    }
    get themeMode() {
      return this[themeMode$];
    }
    set themeMode(value) {
      super.themeMode = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get localizationsDelegates() {
      return this[localizationsDelegates$];
    }
    set localizationsDelegates(value) {
      super.localizationsDelegates = value;
    }
    get localeListResolutionCallback() {
      return this[localeListResolutionCallback$];
    }
    set localeListResolutionCallback(value) {
      super.localeListResolutionCallback = value;
    }
    get localeResolutionCallback() {
      return this[localeResolutionCallback$];
    }
    set localeResolutionCallback(value) {
      super.localeResolutionCallback = value;
    }
    get supportedLocales() {
      return this[supportedLocales$];
    }
    set supportedLocales(value) {
      super.supportedLocales = value;
    }
    get showPerformanceOverlay() {
      return this[showPerformanceOverlay$];
    }
    set showPerformanceOverlay(value) {
      super.showPerformanceOverlay = value;
    }
    get checkerboardRasterCacheImages() {
      return this[checkerboardRasterCacheImages$];
    }
    set checkerboardRasterCacheImages(value) {
      super.checkerboardRasterCacheImages = value;
    }
    get checkerboardOffscreenLayers() {
      return this[checkerboardOffscreenLayers$];
    }
    set checkerboardOffscreenLayers(value) {
      super.checkerboardOffscreenLayers = value;
    }
    get showSemanticsDebugger() {
      return this[showSemanticsDebugger$];
    }
    set showSemanticsDebugger(value) {
      super.showSemanticsDebugger = value;
    }
    get debugShowCheckedModeBanner() {
      return this[debugShowCheckedModeBanner$];
    }
    set debugShowCheckedModeBanner(value) {
      super.debugShowCheckedModeBanner = value;
    }
    get shortcuts() {
      return this[shortcuts$];
    }
    set shortcuts(value) {
      super.shortcuts = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    get restorationScopeId() {
      return this[restorationScopeId$];
    }
    set restorationScopeId(value) {
      super.restorationScopeId = value;
    }
    get scrollBehavior() {
      return this[scrollBehavior$];
    }
    set scrollBehavior(value) {
      super.scrollBehavior = value;
    }
    get debugShowMaterialGrid() {
      return this[debugShowMaterialGrid$];
    }
    set debugShowMaterialGrid(value) {
      super.debugShowMaterialGrid = value;
    }
    get useInheritedMediaQuery() {
      return this[useInheritedMediaQuery$];
    }
    set useInheritedMediaQuery(value) {
      super.useInheritedMediaQuery = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let navigatorKey = opts && 'navigatorKey' in opts ? opts.navigatorKey : null;
      let scaffoldMessengerKey = opts && 'scaffoldMessengerKey' in opts ? opts.scaffoldMessengerKey : null;
      let home = opts && 'home' in opts ? opts.home : null;
      let routes = opts && 'routes' in opts ? opts.routes : C[4] || CT.C4;
      let initialRoute = opts && 'initialRoute' in opts ? opts.initialRoute : null;
      let onGenerateRoute = opts && 'onGenerateRoute' in opts ? opts.onGenerateRoute : null;
      let onGenerateInitialRoutes = opts && 'onGenerateInitialRoutes' in opts ? opts.onGenerateInitialRoutes : null;
      let onUnknownRoute = opts && 'onUnknownRoute' in opts ? opts.onUnknownRoute : null;
      let navigatorObservers = opts && 'navigatorObservers' in opts ? opts.navigatorObservers : C[5] || CT.C5;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let title = opts && 'title' in opts ? opts.title : "";
      let onGenerateTitle = opts && 'onGenerateTitle' in opts ? opts.onGenerateTitle : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let theme = opts && 'theme' in opts ? opts.theme : null;
      let darkTheme = opts && 'darkTheme' in opts ? opts.darkTheme : null;
      let highContrastTheme = opts && 'highContrastTheme' in opts ? opts.highContrastTheme : null;
      let highContrastDarkTheme = opts && 'highContrastDarkTheme' in opts ? opts.highContrastDarkTheme : null;
      let themeMode = opts && 'themeMode' in opts ? opts.themeMode : C[0] || CT.C0;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let localizationsDelegates = opts && 'localizationsDelegates' in opts ? opts.localizationsDelegates : null;
      let localeListResolutionCallback = opts && 'localeListResolutionCallback' in opts ? opts.localeListResolutionCallback : null;
      let localeResolutionCallback = opts && 'localeResolutionCallback' in opts ? opts.localeResolutionCallback : null;
      let supportedLocales = opts && 'supportedLocales' in opts ? opts.supportedLocales : C[6] || CT.C6;
      let debugShowMaterialGrid = opts && 'debugShowMaterialGrid' in opts ? opts.debugShowMaterialGrid : false;
      let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
      let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
      let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
      let showSemanticsDebugger = opts && 'showSemanticsDebugger' in opts ? opts.showSemanticsDebugger : false;
      let debugShowCheckedModeBanner = opts && 'debugShowCheckedModeBanner' in opts ? opts.debugShowCheckedModeBanner : true;
      let shortcuts = opts && 'shortcuts' in opts ? opts.shortcuts : null;
      let actions = opts && 'actions' in opts ? opts.actions : null;
      let restorationScopeId = opts && 'restorationScopeId' in opts ? opts.restorationScopeId : null;
      let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
      let useInheritedMediaQuery = opts && 'useInheritedMediaQuery' in opts ? opts.useInheritedMediaQuery : false;
      return new app$.MaterialApp.new({key: key, navigatorKey: navigatorKey, scaffoldMessengerKey: scaffoldMessengerKey, home: home, routes: routes, initialRoute: initialRoute, onGenerateRoute: onGenerateRoute, onGenerateInitialRoutes: onGenerateInitialRoutes, onUnknownRoute: onUnknownRoute, navigatorObservers: navigatorObservers, builder: builder, title: title, onGenerateTitle: onGenerateTitle, color: color, theme: theme, darkTheme: darkTheme, highContrastTheme: highContrastTheme, highContrastDarkTheme: highContrastDarkTheme, themeMode: themeMode, locale: locale, localizationsDelegates: localizationsDelegates, localeListResolutionCallback: localeListResolutionCallback, localeResolutionCallback: localeResolutionCallback, supportedLocales: supportedLocales, debugShowMaterialGrid: debugShowMaterialGrid, showPerformanceOverlay: showPerformanceOverlay, checkerboardRasterCacheImages: checkerboardRasterCacheImages, checkerboardOffscreenLayers: checkerboardOffscreenLayers, showSemanticsDebugger: showSemanticsDebugger, debugShowCheckedModeBanner: debugShowCheckedModeBanner, shortcuts: shortcuts, actions: actions, restorationScopeId: restorationScopeId, scrollBehavior: scrollBehavior, useInheritedMediaQuery: useInheritedMediaQuery, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    static ['_#router#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let scaffoldMessengerKey = opts && 'scaffoldMessengerKey' in opts ? opts.scaffoldMessengerKey : null;
      let routeInformationProvider = opts && 'routeInformationProvider' in opts ? opts.routeInformationProvider : null;
      let routeInformationParser = opts && 'routeInformationParser' in opts ? opts.routeInformationParser : null;
      let routerDelegate = opts && 'routerDelegate' in opts ? opts.routerDelegate : null;
      let backButtonDispatcher = opts && 'backButtonDispatcher' in opts ? opts.backButtonDispatcher : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let title = opts && 'title' in opts ? opts.title : "";
      let onGenerateTitle = opts && 'onGenerateTitle' in opts ? opts.onGenerateTitle : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let theme = opts && 'theme' in opts ? opts.theme : null;
      let darkTheme = opts && 'darkTheme' in opts ? opts.darkTheme : null;
      let highContrastTheme = opts && 'highContrastTheme' in opts ? opts.highContrastTheme : null;
      let highContrastDarkTheme = opts && 'highContrastDarkTheme' in opts ? opts.highContrastDarkTheme : null;
      let themeMode = opts && 'themeMode' in opts ? opts.themeMode : C[0] || CT.C0;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let localizationsDelegates = opts && 'localizationsDelegates' in opts ? opts.localizationsDelegates : null;
      let localeListResolutionCallback = opts && 'localeListResolutionCallback' in opts ? opts.localeListResolutionCallback : null;
      let localeResolutionCallback = opts && 'localeResolutionCallback' in opts ? opts.localeResolutionCallback : null;
      let supportedLocales = opts && 'supportedLocales' in opts ? opts.supportedLocales : C[6] || CT.C6;
      let debugShowMaterialGrid = opts && 'debugShowMaterialGrid' in opts ? opts.debugShowMaterialGrid : false;
      let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
      let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
      let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
      let showSemanticsDebugger = opts && 'showSemanticsDebugger' in opts ? opts.showSemanticsDebugger : false;
      let debugShowCheckedModeBanner = opts && 'debugShowCheckedModeBanner' in opts ? opts.debugShowCheckedModeBanner : true;
      let shortcuts = opts && 'shortcuts' in opts ? opts.shortcuts : null;
      let actions = opts && 'actions' in opts ? opts.actions : null;
      let restorationScopeId = opts && 'restorationScopeId' in opts ? opts.restorationScopeId : null;
      let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
      let useInheritedMediaQuery = opts && 'useInheritedMediaQuery' in opts ? opts.useInheritedMediaQuery : false;
      return new app$.MaterialApp.router({key: key, scaffoldMessengerKey: scaffoldMessengerKey, routeInformationProvider: routeInformationProvider, routeInformationParser: routeInformationParser, routerDelegate: routerDelegate, backButtonDispatcher: backButtonDispatcher, builder: builder, title: title, onGenerateTitle: onGenerateTitle, color: color, theme: theme, darkTheme: darkTheme, highContrastTheme: highContrastTheme, highContrastDarkTheme: highContrastDarkTheme, themeMode: themeMode, locale: locale, localizationsDelegates: localizationsDelegates, localeListResolutionCallback: localeListResolutionCallback, localeResolutionCallback: localeResolutionCallback, supportedLocales: supportedLocales, debugShowMaterialGrid: debugShowMaterialGrid, showPerformanceOverlay: showPerformanceOverlay, checkerboardRasterCacheImages: checkerboardRasterCacheImages, checkerboardOffscreenLayers: checkerboardOffscreenLayers, showSemanticsDebugger: showSemanticsDebugger, debugShowCheckedModeBanner: debugShowCheckedModeBanner, shortcuts: shortcuts, actions: actions, restorationScopeId: restorationScopeId, scrollBehavior: scrollBehavior, useInheritedMediaQuery: useInheritedMediaQuery, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    createState() {
      return new app$._MaterialAppState.new();
    }
    static createMaterialHeroController() {
      return new heroes.HeroController.new({createRectTween: dart.fn((begin, end) => new arc.MaterialRectArcTween.new({begin: begin, end: end}), T$.RectNAndRectNToMaterialRectArcTween())});
    }
  };
  (app$.MaterialApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navigatorKey = opts && 'navigatorKey' in opts ? opts.navigatorKey : null;
    let scaffoldMessengerKey = opts && 'scaffoldMessengerKey' in opts ? opts.scaffoldMessengerKey : null;
    let home = opts && 'home' in opts ? opts.home : null;
    let routes = opts && 'routes' in opts ? opts.routes : C[4] || CT.C4;
    let initialRoute = opts && 'initialRoute' in opts ? opts.initialRoute : null;
    let onGenerateRoute = opts && 'onGenerateRoute' in opts ? opts.onGenerateRoute : null;
    let onGenerateInitialRoutes = opts && 'onGenerateInitialRoutes' in opts ? opts.onGenerateInitialRoutes : null;
    let onUnknownRoute = opts && 'onUnknownRoute' in opts ? opts.onUnknownRoute : null;
    let navigatorObservers = opts && 'navigatorObservers' in opts ? opts.navigatorObservers : C[5] || CT.C5;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let title = opts && 'title' in opts ? opts.title : "";
    let onGenerateTitle = opts && 'onGenerateTitle' in opts ? opts.onGenerateTitle : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let darkTheme = opts && 'darkTheme' in opts ? opts.darkTheme : null;
    let highContrastTheme = opts && 'highContrastTheme' in opts ? opts.highContrastTheme : null;
    let highContrastDarkTheme = opts && 'highContrastDarkTheme' in opts ? opts.highContrastDarkTheme : null;
    let themeMode = opts && 'themeMode' in opts ? opts.themeMode : C[0] || CT.C0;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let localizationsDelegates = opts && 'localizationsDelegates' in opts ? opts.localizationsDelegates : null;
    let localeListResolutionCallback = opts && 'localeListResolutionCallback' in opts ? opts.localeListResolutionCallback : null;
    let localeResolutionCallback = opts && 'localeResolutionCallback' in opts ? opts.localeResolutionCallback : null;
    let supportedLocales = opts && 'supportedLocales' in opts ? opts.supportedLocales : C[6] || CT.C6;
    let debugShowMaterialGrid = opts && 'debugShowMaterialGrid' in opts ? opts.debugShowMaterialGrid : false;
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
    let showSemanticsDebugger = opts && 'showSemanticsDebugger' in opts ? opts.showSemanticsDebugger : false;
    let debugShowCheckedModeBanner = opts && 'debugShowCheckedModeBanner' in opts ? opts.debugShowCheckedModeBanner : true;
    let shortcuts = opts && 'shortcuts' in opts ? opts.shortcuts : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let restorationScopeId = opts && 'restorationScopeId' in opts ? opts.restorationScopeId : null;
    let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
    let useInheritedMediaQuery = opts && 'useInheritedMediaQuery' in opts ? opts.useInheritedMediaQuery : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[navigatorKey$] = navigatorKey;
    this[scaffoldMessengerKey$] = scaffoldMessengerKey;
    this[home$] = home;
    this[routes$] = routes;
    this[initialRoute$] = initialRoute;
    this[onGenerateRoute$] = onGenerateRoute;
    this[onGenerateInitialRoutes$] = onGenerateInitialRoutes;
    this[onUnknownRoute$] = onUnknownRoute;
    this[navigatorObservers$] = navigatorObservers;
    this[builder$] = builder;
    this[title$] = title;
    this[onGenerateTitle$] = onGenerateTitle;
    this[color$] = color;
    this[theme$0] = theme;
    this[darkTheme$] = darkTheme;
    this[highContrastTheme$] = highContrastTheme;
    this[highContrastDarkTheme$] = highContrastDarkTheme;
    this[themeMode$] = themeMode;
    this[locale$] = locale;
    this[localizationsDelegates$] = localizationsDelegates;
    this[localeListResolutionCallback$] = localeListResolutionCallback;
    this[localeResolutionCallback$] = localeResolutionCallback;
    this[supportedLocales$] = supportedLocales;
    this[debugShowMaterialGrid$] = debugShowMaterialGrid;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    this[checkerboardRasterCacheImages$] = checkerboardRasterCacheImages;
    this[checkerboardOffscreenLayers$] = checkerboardOffscreenLayers;
    this[showSemanticsDebugger$] = showSemanticsDebugger;
    this[debugShowCheckedModeBanner$] = debugShowCheckedModeBanner;
    this[shortcuts$] = shortcuts;
    this[actions$] = actions;
    this[restorationScopeId$] = restorationScopeId;
    this[scrollBehavior$] = scrollBehavior;
    this[useInheritedMediaQuery$] = useInheritedMediaQuery;
    if (!(routes !== null)) dart.assertFailed(null, I[1], 204, 15, "routes != null");
    if (!(navigatorObservers !== null)) dart.assertFailed(null, I[1], 205, 15, "navigatorObservers != null");
    if (!(title !== null)) dart.assertFailed(null, I[1], 206, 15, "title != null");
    if (!(debugShowMaterialGrid !== null)) dart.assertFailed(null, I[1], 207, 15, "debugShowMaterialGrid != null");
    if (!(showPerformanceOverlay !== null)) dart.assertFailed(null, I[1], 208, 15, "showPerformanceOverlay != null");
    if (!(checkerboardRasterCacheImages !== null)) dart.assertFailed(null, I[1], 209, 15, "checkerboardRasterCacheImages != null");
    if (!(checkerboardOffscreenLayers !== null)) dart.assertFailed(null, I[1], 210, 15, "checkerboardOffscreenLayers != null");
    if (!(showSemanticsDebugger !== null)) dart.assertFailed(null, I[1], 211, 15, "showSemanticsDebugger != null");
    if (!(debugShowCheckedModeBanner !== null)) dart.assertFailed(null, I[1], 212, 15, "debugShowCheckedModeBanner != null");
    this[routeInformationProvider$] = null;
    this[routeInformationParser$] = null;
    this[routerDelegate$] = null;
    this[backButtonDispatcher$] = null;
    app$.MaterialApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app$.MaterialApp.prototype;
  (app$.MaterialApp.router = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scaffoldMessengerKey = opts && 'scaffoldMessengerKey' in opts ? opts.scaffoldMessengerKey : null;
    let routeInformationProvider = opts && 'routeInformationProvider' in opts ? opts.routeInformationProvider : null;
    let routeInformationParser = opts && 'routeInformationParser' in opts ? opts.routeInformationParser : null;
    let routerDelegate = opts && 'routerDelegate' in opts ? opts.routerDelegate : null;
    let backButtonDispatcher = opts && 'backButtonDispatcher' in opts ? opts.backButtonDispatcher : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let title = opts && 'title' in opts ? opts.title : "";
    let onGenerateTitle = opts && 'onGenerateTitle' in opts ? opts.onGenerateTitle : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let darkTheme = opts && 'darkTheme' in opts ? opts.darkTheme : null;
    let highContrastTheme = opts && 'highContrastTheme' in opts ? opts.highContrastTheme : null;
    let highContrastDarkTheme = opts && 'highContrastDarkTheme' in opts ? opts.highContrastDarkTheme : null;
    let themeMode = opts && 'themeMode' in opts ? opts.themeMode : C[0] || CT.C0;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let localizationsDelegates = opts && 'localizationsDelegates' in opts ? opts.localizationsDelegates : null;
    let localeListResolutionCallback = opts && 'localeListResolutionCallback' in opts ? opts.localeListResolutionCallback : null;
    let localeResolutionCallback = opts && 'localeResolutionCallback' in opts ? opts.localeResolutionCallback : null;
    let supportedLocales = opts && 'supportedLocales' in opts ? opts.supportedLocales : C[6] || CT.C6;
    let debugShowMaterialGrid = opts && 'debugShowMaterialGrid' in opts ? opts.debugShowMaterialGrid : false;
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
    let showSemanticsDebugger = opts && 'showSemanticsDebugger' in opts ? opts.showSemanticsDebugger : false;
    let debugShowCheckedModeBanner = opts && 'debugShowCheckedModeBanner' in opts ? opts.debugShowCheckedModeBanner : true;
    let shortcuts = opts && 'shortcuts' in opts ? opts.shortcuts : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let restorationScopeId = opts && 'restorationScopeId' in opts ? opts.restorationScopeId : null;
    let scrollBehavior = opts && 'scrollBehavior' in opts ? opts.scrollBehavior : null;
    let useInheritedMediaQuery = opts && 'useInheritedMediaQuery' in opts ? opts.useInheritedMediaQuery : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[scaffoldMessengerKey$] = scaffoldMessengerKey;
    this[routeInformationProvider$] = routeInformationProvider;
    this[routeInformationParser$] = routeInformationParser;
    this[routerDelegate$] = routerDelegate;
    this[backButtonDispatcher$] = backButtonDispatcher;
    this[builder$] = builder;
    this[title$] = title;
    this[onGenerateTitle$] = onGenerateTitle;
    this[color$] = color;
    this[theme$0] = theme;
    this[darkTheme$] = darkTheme;
    this[highContrastTheme$] = highContrastTheme;
    this[highContrastDarkTheme$] = highContrastDarkTheme;
    this[themeMode$] = themeMode;
    this[locale$] = locale;
    this[localizationsDelegates$] = localizationsDelegates;
    this[localeListResolutionCallback$] = localeListResolutionCallback;
    this[localeResolutionCallback$] = localeResolutionCallback;
    this[supportedLocales$] = supportedLocales;
    this[debugShowMaterialGrid$] = debugShowMaterialGrid;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    this[checkerboardRasterCacheImages$] = checkerboardRasterCacheImages;
    this[checkerboardOffscreenLayers$] = checkerboardOffscreenLayers;
    this[showSemanticsDebugger$] = showSemanticsDebugger;
    this[debugShowCheckedModeBanner$] = debugShowCheckedModeBanner;
    this[shortcuts$] = shortcuts;
    this[actions$] = actions;
    this[restorationScopeId$] = restorationScopeId;
    this[scrollBehavior$] = scrollBehavior;
    this[useInheritedMediaQuery$] = useInheritedMediaQuery;
    if (!(routeInformationParser !== null)) dart.assertFailed(null, I[1], 252, 15, "routeInformationParser != null");
    if (!(routerDelegate !== null)) dart.assertFailed(null, I[1], 253, 15, "routerDelegate != null");
    if (!(title !== null)) dart.assertFailed(null, I[1], 254, 15, "title != null");
    if (!(debugShowMaterialGrid !== null)) dart.assertFailed(null, I[1], 255, 15, "debugShowMaterialGrid != null");
    if (!(showPerformanceOverlay !== null)) dart.assertFailed(null, I[1], 256, 15, "showPerformanceOverlay != null");
    if (!(checkerboardRasterCacheImages !== null)) dart.assertFailed(null, I[1], 257, 15, "checkerboardRasterCacheImages != null");
    if (!(checkerboardOffscreenLayers !== null)) dart.assertFailed(null, I[1], 258, 15, "checkerboardOffscreenLayers != null");
    if (!(showSemanticsDebugger !== null)) dart.assertFailed(null, I[1], 259, 15, "showSemanticsDebugger != null");
    if (!(debugShowCheckedModeBanner !== null)) dart.assertFailed(null, I[1], 260, 15, "debugShowCheckedModeBanner != null");
    this[navigatorObservers$] = null;
    this[navigatorKey$] = null;
    this[onGenerateRoute$] = null;
    this[home$] = null;
    this[onGenerateInitialRoutes$] = null;
    this[onUnknownRoute$] = null;
    this[routes$] = null;
    this[initialRoute$] = null;
    app$.MaterialApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app$.MaterialApp.prototype;
  dart.addTypeTests(app$.MaterialApp);
  dart.addTypeCaches(app$.MaterialApp);
  dart.setMethodSignature(app$.MaterialApp, () => ({
    __proto__: dart.getMethods(app$.MaterialApp.__proto__),
    createState: dart.fnType(framework.State$(app$.MaterialApp), [])
  }));
  dart.setStaticMethodSignature(app$.MaterialApp, () => ['createMaterialHeroController']);
  dart.setLibraryUri(app$.MaterialApp, I[0]);
  dart.setFieldSignature(app$.MaterialApp, () => ({
    __proto__: dart.getFields(app$.MaterialApp.__proto__),
    navigatorKey: dart.finalFieldType(dart.nullable(framework.GlobalKey$(navigator.NavigatorState))),
    scaffoldMessengerKey: dart.finalFieldType(dart.nullable(framework.GlobalKey$(scaffold.ScaffoldMessengerState))),
    home: dart.finalFieldType(dart.nullable(framework.Widget)),
    routes: dart.finalFieldType(dart.nullable(core.Map$(core.String, dart.fnType(framework.Widget, [framework.BuildContext])))),
    initialRoute: dart.finalFieldType(dart.nullable(core.String)),
    onGenerateRoute: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(navigator.Route), [navigator.RouteSettings]))),
    onGenerateInitialRoutes: dart.finalFieldType(dart.nullable(dart.fnType(core.List$(navigator.Route), [core.String]))),
    onUnknownRoute: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(navigator.Route), [navigator.RouteSettings]))),
    navigatorObservers: dart.finalFieldType(dart.nullable(core.List$(navigator.NavigatorObserver))),
    routeInformationProvider: dart.finalFieldType(dart.nullable(router.RouteInformationProvider)),
    routeInformationParser: dart.finalFieldType(dart.nullable(router.RouteInformationParser$(core.Object))),
    routerDelegate: dart.finalFieldType(dart.nullable(router.RouterDelegate$(core.Object))),
    backButtonDispatcher: dart.finalFieldType(dart.nullable(router.BackButtonDispatcher)),
    builder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)]))),
    title: dart.finalFieldType(core.String),
    onGenerateTitle: dart.finalFieldType(dart.nullable(dart.fnType(core.String, [framework.BuildContext]))),
    theme: dart.finalFieldType(dart.nullable(theme_data.ThemeData)),
    darkTheme: dart.finalFieldType(dart.nullable(theme_data.ThemeData)),
    highContrastTheme: dart.finalFieldType(dart.nullable(theme_data.ThemeData)),
    highContrastDarkTheme: dart.finalFieldType(dart.nullable(theme_data.ThemeData)),
    themeMode: dart.finalFieldType(dart.nullable(app$.ThemeMode)),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    locale: dart.finalFieldType(dart.nullable(ui.Locale)),
    localizationsDelegates: dart.finalFieldType(dart.nullable(core.Iterable$(localizations.LocalizationsDelegate))),
    localeListResolutionCallback: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(ui.Locale), [dart.nullable(core.List$(ui.Locale)), core.Iterable$(ui.Locale)]))),
    localeResolutionCallback: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(ui.Locale), [dart.nullable(ui.Locale), core.Iterable$(ui.Locale)]))),
    supportedLocales: dart.finalFieldType(core.Iterable$(ui.Locale)),
    showPerformanceOverlay: dart.finalFieldType(core.bool),
    checkerboardRasterCacheImages: dart.finalFieldType(core.bool),
    checkerboardOffscreenLayers: dart.finalFieldType(core.bool),
    showSemanticsDebugger: dart.finalFieldType(core.bool),
    debugShowCheckedModeBanner: dart.finalFieldType(core.bool),
    shortcuts: dart.finalFieldType(dart.nullable(core.Map$(shortcuts.ShortcutActivator, actions.Intent))),
    actions: dart.finalFieldType(dart.nullable(core.Map$(core.Type, actions.Action$(actions.Intent)))),
    restorationScopeId: dart.finalFieldType(dart.nullable(core.String)),
    scrollBehavior: dart.finalFieldType(dart.nullable(scroll_configuration.ScrollBehavior)),
    debugShowMaterialGrid: dart.finalFieldType(core.bool),
    useInheritedMediaQuery: dart.finalFieldType(core.bool)
  }));
  var _androidOverscrollIndicator = dart.privateName(app$, "MaterialScrollBehavior._androidOverscrollIndicator");
  var _androidOverscrollIndicator$ = dart.privateName(app$, "_androidOverscrollIndicator");
  app$.MaterialScrollBehavior = class MaterialScrollBehavior extends scroll_configuration.ScrollBehavior {
    get [_androidOverscrollIndicator$]() {
      return this[_androidOverscrollIndicator];
    }
    set [_androidOverscrollIndicator$](value) {
      super[_androidOverscrollIndicator$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let androidOverscrollIndicator = opts && 'androidOverscrollIndicator' in opts ? opts.androidOverscrollIndicator : null;
      return new app$.MaterialScrollBehavior.new({androidOverscrollIndicator: androidOverscrollIndicator});
    }
    getPlatform(context) {
      return theme$.Theme.of(context).platform;
    }
    buildScrollbar(context, child, details) {
      switch (basic_types.axisDirectionToAxis(details.direction)) {
        case C[10] || CT.C10:
        {
          return child;
        }
        case C[18] || CT.C18:
        {
          switch (this.getPlatform(context)) {
            case C[12] || CT.C12:
            case C[13] || CT.C13:
            case C[14] || CT.C14:
            {
              return new scrollbar.Scrollbar.new({controller: details.controller, child: child, $creationLocationd_0dea112b090073317d4: C[11] || CT.C11});
            }
            case C[15] || CT.C15:
            case C[16] || CT.C16:
            case C[17] || CT.C17:
            {
              return child;
            }
          }
        }
      }
    }
    buildOverscrollIndicator(context, child, details) {
      let t0, t0$;
      let indicator = (t0$ = (t0 = this[_androidOverscrollIndicator$], t0 == null ? theme$.Theme.of(context).androidOverscrollIndicator : t0), t0$ == null ? this.androidOverscrollIndicator : t0$);
      let labelState = this.getPlatform(context);
      SL0:
        while (true) {
          switch (labelState) {
            case C[17] || CT.C17:
            case C[12] || CT.C12:
            case C[13] || CT.C13:
            case C[14] || CT.C14:
            {
              return child;
            }
            case C[15] || CT.C15:
            {
              let labelState$ = indicator;
              SL1:
                while (true) {
                  switch (labelState$) {
                    case C[20] || CT.C20:
                    {
                      return new overscroll_indicator.StretchingOverscrollIndicator.new({axisDirection: details.direction, child: child, $creationLocationd_0dea112b090073317d4: C[19] || CT.C19});
                    }
                    case C[21] || CT.C21:
                    {
                      labelState = C[16] || CT.C16;
                      continue SL0;
                      break SL1;
                    }
                  }
                  break;
                }
            }
            case C[16] || CT.C16:
            {
              return new overscroll_indicator.GlowingOverscrollIndicator.new({axisDirection: details.direction, color: theme$.Theme.of(context).colorScheme.secondary, child: child, $creationLocationd_0dea112b090073317d4: C[22] || CT.C22});
              break SL0;
            }
          }
          break;
        }
    }
  };
  (app$.MaterialScrollBehavior.new = function(opts) {
    let androidOverscrollIndicator = opts && 'androidOverscrollIndicator' in opts ? opts.androidOverscrollIndicator : null;
    this[_androidOverscrollIndicator] = androidOverscrollIndicator;
    app$.MaterialScrollBehavior.__proto__.new.call(this, {androidOverscrollIndicator: androidOverscrollIndicator});
    ;
  }).prototype = app$.MaterialScrollBehavior.prototype;
  dart.addTypeTests(app$.MaterialScrollBehavior);
  dart.addTypeCaches(app$.MaterialScrollBehavior);
  dart.setLibraryUri(app$.MaterialScrollBehavior, I[0]);
  dart.setFieldSignature(app$.MaterialScrollBehavior, () => ({
    __proto__: dart.getFields(app$.MaterialScrollBehavior.__proto__),
    [_androidOverscrollIndicator$]: dart.finalFieldType(dart.nullable(scroll_configuration.AndroidOverscrollIndicator))
  }));
  var ___MaterialAppState__heroController = dart.privateName(app$, "_#_MaterialAppState#_heroController");
  var _heroController = dart.privateName(app$, "_heroController");
  var _usesRouter = dart.privateName(app$, "_usesRouter");
  var _localizationsDelegates = dart.privateName(app$, "_localizationsDelegates");
  var Widget__location = dart.privateName(framework, "Widget._location");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var _inspectorSelectButtonBuilder = dart.privateName(app$, "_inspectorSelectButtonBuilder");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var _materialBuilder = dart.privateName(app$, "_materialBuilder");
  var _buildWidgetApp = dart.privateName(app$, "_buildWidgetApp");
  var Color_value = dart.privateName(ui, "Color.value");
  var ScrollBehavior__androidOverscrollIndicator = dart.privateName(scroll_configuration, "ScrollBehavior._androidOverscrollIndicator");
  app$._MaterialAppState = class _MaterialAppState extends framework.State$(app$.MaterialApp) {
    get [_heroController]() {
      let t0;
      t0 = this[___MaterialAppState__heroController];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_heroController")) : t0;
    }
    set [_heroController](t0) {
      this[___MaterialAppState__heroController] = t0;
    }
    get [_usesRouter]() {
      return this.widget.routerDelegate != null;
    }
    initState() {
      super.initState();
      this[_heroController] = app$.MaterialApp.createMaterialHeroController();
    }
    get [_localizationsDelegates]() {
      return (() => {
        let t1 = T$.JSArrayOfLocalizationsDelegate().of([]);
        if (this.widget.localizationsDelegates != null) t1[$addAll](dart.nullCheck(this.widget.localizationsDelegates));
        t1.push(material_localizations.DefaultMaterialLocalizations.delegate);
        t1.push(localizations$.DefaultCupertinoLocalizations.delegate);
        return t1;
      })();
    }
    [_inspectorSelectButtonBuilder](context, onPressed) {
      return new floating_action_button.FloatingActionButton.new({onPressed: onPressed, mini: true, child: C[23] || CT.C23, $creationLocationd_0dea112b090073317d4: C[26] || CT.C26});
    }
    [_materialBuilder](context, child) {
      let t2, t2$, t2$0;
      let mode = (t2 = this.widget.themeMode, t2 == null ? app$.ThemeMode.system : t2);
      let platformBrightness = media_query.MediaQuery.platformBrightnessOf(context);
      let useDarkTheme = mode === app$.ThemeMode.dark || mode === app$.ThemeMode.system && platformBrightness === ui.Brightness.dark;
      let highContrast = media_query.MediaQuery.highContrastOf(context);
      let theme = null;
      if (useDarkTheme && highContrast && this.widget.highContrastDarkTheme != null) {
        theme = this.widget.highContrastDarkTheme;
      } else if (useDarkTheme && this.widget.darkTheme != null) {
        theme = this.widget.darkTheme;
      } else if (highContrast && this.widget.highContrastTheme != null) {
        theme = this.widget.highContrastTheme;
      }
      theme == null ? theme = (t2$ = this.widget.theme, t2$ == null ? theme_data.ThemeData.light() : t2$) : null;
      return new scaffold.ScaffoldMessenger.new({key: this.widget.scaffoldMessengerKey, child: new theme$.AnimatedTheme.new({data: theme, child: this.widget.builder != null ? new basic.Builder.new({builder: dart.fn(context => dart.nullCheck(this.widget.builder)(context, child), T$.BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: C[27] || CT.C27}) : (t2$0 = child, t2$0 == null ? C[28] || CT.C28 : t2$0), $creationLocationd_0dea112b090073317d4: C[30] || CT.C30}), $creationLocationd_0dea112b090073317d4: C[31] || CT.C31});
    }
    [_buildWidgetApp](context) {
      let t3, t2, t2$;
      let materialColor = (t2$ = (t2 = this.widget.color, t2 == null ? (t3 = this.widget.theme, t3 == null ? null : t3.primaryColor) : t2), t2$ == null ? colors.Colors.blue : t2$);
      if (this[_usesRouter]) {
        return new app.WidgetsApp.router({key: new (T$.GlobalObjectKeyOfStateOfStatefulWidget()).new(this), routeInformationProvider: this.widget.routeInformationProvider, routeInformationParser: dart.nullCheck(this.widget.routeInformationParser), routerDelegate: dart.nullCheck(this.widget.routerDelegate), backButtonDispatcher: this.widget.backButtonDispatcher, builder: dart.bind(this, _materialBuilder), title: this.widget.title, onGenerateTitle: this.widget.onGenerateTitle, textStyle: app$._errorTextStyle, color: materialColor, locale: this.widget.locale, localizationsDelegates: this[_localizationsDelegates], localeResolutionCallback: this.widget.localeResolutionCallback, localeListResolutionCallback: this.widget.localeListResolutionCallback, supportedLocales: this.widget.supportedLocales, showPerformanceOverlay: this.widget.showPerformanceOverlay, checkerboardRasterCacheImages: this.widget.checkerboardRasterCacheImages, checkerboardOffscreenLayers: this.widget.checkerboardOffscreenLayers, showSemanticsDebugger: this.widget.showSemanticsDebugger, debugShowCheckedModeBanner: this.widget.debugShowCheckedModeBanner, inspectorSelectButtonBuilder: dart.bind(this, _inspectorSelectButtonBuilder), shortcuts: this.widget.shortcuts, actions: this.widget.actions, restorationScopeId: this.widget.restorationScopeId, useInheritedMediaQuery: this.widget.useInheritedMediaQuery, $creationLocationd_0dea112b090073317d4: C[32] || CT.C32});
      }
      return new app.WidgetsApp.new({key: new (T$.GlobalObjectKeyOfStateOfStatefulWidget()).new(this), navigatorKey: this.widget.navigatorKey, navigatorObservers: dart.nullCheck(this.widget.navigatorObservers), pageRouteBuilder: dart.fn((T, settings, builder) => new (page.MaterialPageRoute$(T)).new({settings: settings, builder: builder}), T$.RouteSettingsAndFnToMaterialPageRouteOfT()), home: this.widget.home, routes: dart.nullCheck(this.widget.routes), initialRoute: this.widget.initialRoute, onGenerateRoute: this.widget.onGenerateRoute, onGenerateInitialRoutes: this.widget.onGenerateInitialRoutes, onUnknownRoute: this.widget.onUnknownRoute, builder: dart.bind(this, _materialBuilder), title: this.widget.title, onGenerateTitle: this.widget.onGenerateTitle, textStyle: app$._errorTextStyle, color: materialColor, locale: this.widget.locale, localizationsDelegates: this[_localizationsDelegates], localeResolutionCallback: this.widget.localeResolutionCallback, localeListResolutionCallback: this.widget.localeListResolutionCallback, supportedLocales: this.widget.supportedLocales, showPerformanceOverlay: this.widget.showPerformanceOverlay, checkerboardRasterCacheImages: this.widget.checkerboardRasterCacheImages, checkerboardOffscreenLayers: this.widget.checkerboardOffscreenLayers, showSemanticsDebugger: this.widget.showSemanticsDebugger, debugShowCheckedModeBanner: this.widget.debugShowCheckedModeBanner, inspectorSelectButtonBuilder: dart.bind(this, _inspectorSelectButtonBuilder), shortcuts: this.widget.shortcuts, actions: this.widget.actions, restorationScopeId: this.widget.restorationScopeId, useInheritedMediaQuery: this.widget.useInheritedMediaQuery, $creationLocationd_0dea112b090073317d4: C[33] || CT.C33});
    }
    build(context) {
      let t2;
      let result = this[_buildWidgetApp](context);
      result = new focus_scope.Focus.new({canRequestFocus: false, onKey: dart.fn((node, event) => {
          if (!raw_keyboard.RawKeyDownEvent.is(event) || !event.logicalKey._equals(keyboard_key.LogicalKeyboardKey.escape)) return focus_manager.KeyEventResult.ignored;
          return tooltip.Tooltip.dismissAllToolTips() ? focus_manager.KeyEventResult.handled : focus_manager.KeyEventResult.ignored;
        }, T$.FocusNodeAndRawKeyEventToKeyEventResult()), child: result, $creationLocationd_0dea112b090073317d4: C[34] || CT.C34});
      if (!dart.fn(() => {
        if (this.widget.debugShowMaterialGrid) {
          result = new grid_paper.GridPaper.new({color: C[35] || CT.C35, interval: 8.0, subdivisions: 1, child: result, $creationLocationd_0dea112b090073317d4: C[36] || CT.C36});
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 948, 12, "() {\n      if (widget.debugShowMaterialGrid) {\n        result = GridPaper(\n          color: const Color(0xE0F9BBE0),\n          interval: 8.0,\n          subdivisions: 1,\n          child: result,\n        );\n      }\n      return true;\n    }()");
      return new scroll_configuration.ScrollConfiguration.new({behavior: (t2 = this.widget.scrollBehavior, t2 == null ? C[37] || CT.C37 : t2), child: new navigator.HeroControllerScope.new({controller: this[_heroController], child: result, $creationLocationd_0dea112b090073317d4: C[38] || CT.C38}), $creationLocationd_0dea112b090073317d4: C[39] || CT.C39});
    }
    static ['_#new#tearOff']() {
      return new app$._MaterialAppState.new();
    }
  };
  (app$._MaterialAppState.new = function() {
    this[___MaterialAppState__heroController] = null;
    app$._MaterialAppState.__proto__.new.call(this);
    ;
  }).prototype = app$._MaterialAppState.prototype;
  dart.addTypeTests(app$._MaterialAppState);
  dart.addTypeCaches(app$._MaterialAppState);
  dart.setMethodSignature(app$._MaterialAppState, () => ({
    __proto__: dart.getMethods(app$._MaterialAppState.__proto__),
    [_inspectorSelectButtonBuilder]: dart.fnType(framework.Widget, [framework.BuildContext, dart.fnType(dart.void, [])]),
    [_materialBuilder]: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)]),
    [_buildWidgetApp]: dart.fnType(framework.Widget, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(app$._MaterialAppState, () => ({
    __proto__: dart.getGetters(app$._MaterialAppState.__proto__),
    [_heroController]: heroes.HeroController,
    [_usesRouter]: core.bool,
    [_localizationsDelegates]: core.Iterable$(localizations.LocalizationsDelegate)
  }));
  dart.setSetterSignature(app$._MaterialAppState, () => ({
    __proto__: dart.getSetters(app$._MaterialAppState.__proto__),
    [_heroController]: heroes.HeroController
  }));
  dart.setLibraryUri(app$._MaterialAppState, I[0]);
  dart.setFieldSignature(app$._MaterialAppState, () => ({
    __proto__: dart.getFields(app$._MaterialAppState.__proto__),
    [___MaterialAppState__heroController]: dart.fieldType(dart.nullable(heroes.HeroController))
  }));
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
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  dart.defineLazy(app$, {
    /*app$._errorTextStyle*/get _errorTextStyle() {
      return C[40] || CT.C40;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/material/app.dart", {
    "package:flutter/src/material/app.dart": app$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkDA;;wCAVK;;;EAUL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6NmC;;;;;;IAQQ;;;;;;IAG3B;;;;;;IAWoB;;;;;;IAGpB;;;;;;IAGM;;;;;;IAGW;;;;;;IAGX;;;;;;IAGW;;;;;;IAGC;;;;;;IAGM;;;;;;IAGR;;;;;;IAGF;;;;;;IAOH;;;;;;IAKZ;;;;;;IAKW;;;;;;IAmBP;;;;;;IAsBA;;;;;;IAaA;;;;;;IAgBA;;;;;;IA0BA;;;;;;IAGJ;;;;;;IAGC;;;;;;IA6FkC;;;;;;IAKZ;;;;;;IAKJ;;;;;;IAcT;;;;;;IAOZ;;;;;;IAGA;;;;;;IAGA;;;;;;IAIA;;;;;;IAGA;;;;;;IA4B2B;;;;;;IAiCL;;;;;;IAGnB;;;;;;IAiBQ;;;;;;IAUX;;;;;;IAGA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAGyB;IAAmB;;AAMrD,YAAO,iDACY,SAAO,OAAa,QAC5B,yCAA4B,KAAK,OAAO,GAAG;IAGxD;;;QApgBO;QACA;QACA;QACA;QAC2B;QAC3B;QACA;QACA;QACA;QACwB;QACxB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAjCA;IACA;IACA;IAC2B;IAC3B;IACA;IACA;IACA;IACwB;IACxB;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACK,AAAO,MAAD;UACN,AAAmB,kBAAD;UAClB,AAAM,KAAD;UACL,AAAsB,qBAAD;UACrB,AAAuB,sBAAD;UACtB,AAA8B,6BAAD;UAC7B,AAA4B,2BAAD;UAC3B,AAAsB,qBAAD;UACrB,AAA2B,0BAAD;IACR,kCAAE;IACJ,gCAAE;IACV,wBAAE;IACI,8BAAE;AACvB,oDAAW,GAAG;;EAAC;;QAIb;QACA;QACA;QACwC;QACR;QAChC;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IA7BA;IACA;IACwC;IACR;IAChC;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACK,AAAuB,sBAAD;UACtB,AAAe,cAAD;UACd,AAAM,KAAD;UACL,AAAsB,qBAAD;UACrB,AAAuB,sBAAD;UACtB,AAA8B,6BAAD;UAC7B,AAA4B,2BAAD;UAC3B,AAAsB,qBAAD;UACrB,AAA2B,0BAAD;IACd,4BAAE;IACR,sBAAE;IACC,yBAAE;IACb,cAAE;IACiB,iCAAE;IACX,wBAAE;IACV,gBAAE;IACI,sBAAE;AACf,oDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAocc;;;;;;;;;;gBAGM;AAAY,YAAM,AAAY,iBAAT,OAAO;IAAU;mBAG3C,SAAgB,OAAyB;AAG1E,cAAQ,gCAAoB,AAAQ,OAAD;;;AAE/B,gBAAO,MAAK;;;;AAEZ,kBAAQ,iBAAY,OAAO;;;;;AAIvB,oBAAO,0CACO,AAAQ,OAAD,oBACZ,KAAK;;;;;;AAKd,oBAAO,MAAK;;;;;IAGtB;6BAG6C,SAAgB,OAAyB;;AAGnD,uBAE7B,OADA,yCADyC,aAChC,AAAY,gBAAT,OAAO,oCAAnB,cACG;AACP,uBAAQ,iBAAY,OAAO;;;;;;;;;AAKvB,oBAAO,MAAK;;;;AAEZ,gCAAQ,SAAS;;;;;;AAEb,4BAAO,4EACU,AAAQ,OAAD,mBACf,KAAK;;;;AAGd;;;;;;;;;;AAIJ,oBAAO,yEACU,AAAQ,OAAD,mBACT,AAAY,AAAY,gBAArB,OAAO,gCAChB,KAAK;;;;;;IAGpB;;;QAhE8B;IACG,oCAAE,0BAA0B;AACxD,sFAAkC,0BAA0B;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkE9C;;IAAe;;AAAf;IAAe;;AAEX,YAAA,AAAO,AAAe;IAAO;;AAIlC,MAAX;AACsD,MAA5D,wBAA8B;IAChC;;AAQE,YAAuC;;AACrC,YAAI,AAAO,4CACuB,2BAA7B,AAAO;AACiB;AACC;;;IAElC;oCAEkD,SAAsB;AACtE,YAAO,iEACM,SAAS,QACd;IAGV;uBAEqC,SAAiB;;AAEpC,kBAAwB,KAAjB,AAAO,uBAAA,aAAuB;AACpC,+BAAgC,4CAAqB,OAAO;AAClE,yBAAe,AAAK,AAC7B,IAD4B,KAAc,uBACtC,AAAK,IAAD,KAAc,yBAAU,AAAmB,kBAAD,KAAkB;AAC3D,yBAA0B,sCAAe,OAAO;AAChD;AAEX,UAAI,YAAY,IAAI,YAAY,IAAI,AAAO;AACL,QAApC,QAAQ,AAAO;YACV,KAAI,YAAY,IAAI,AAAO;AACR,QAAxB,QAAQ,AAAO;YACV,KAAI,YAAY,IAAI,AAAO;AACA,QAAhC,QAAQ,AAAO;;AAE0B,MAA3C,AAAM,KAAD,WAAL,SAAuB,MAAb,AAAO,mBAAA,cAAmB,sCAA9B;AAEN,YAAO,0CACA,AAAO,yCACL,oCACC,KAAK,SACJ,AAAO,AAAQ,8BAClB,gCACW,QAAc,WAYA,AAAC,eAAf,AAAO,qBAAS,OAAO,EAAE,KAAK,4FAGnC,OAAN,KAAK,EAAL;IAGV;sBAEoC;;AAQtB,2BAA2D,OAA9B,KAAb,AAAO,mBAAA,mBAAS,AAAO,gCAAA,OAAO,wBAAjB,cAAwC;AACjF,UAAI;AACF,cAAkB,iCACX,sDAAgB,iCACK,AAAO,8DACoB,eAA7B,AAAO,qDACM,eAArB,AAAO,mDACD,AAAO,qDACpB,gCACF,AAAO,oCACG,AAAO,wCACb,6BACJ,aAAa,UACZ,AAAO,4CACS,yDACE,AAAO,oEACH,AAAO,4DACnB,AAAO,sDACD,AAAO,mEACA,AAAO,wEACT,AAAO,gEACb,AAAO,+DACF,AAAO,gFACL,iDACnB,AAAO,gCACT,AAAO,yCACI,AAAO,wDACH,AAAO;;AAInC,YAAO,8BACA,sDAAgB,qBACP,AAAO,8CACwB,eAAzB,AAAO,mDACN,YAAe,UAAwB,YACnD,gDAA+B,QAAQ,WAAW,OAAO,0DAE5D,AAAO,0BACQ,eAAb,AAAO,mCACD,AAAO,2CACJ,AAAO,sDACC,AAAO,qDAChB,AAAO,+CACd,gCACF,AAAO,oCACG,AAAO,wCACb,6BACJ,aAAa,UACZ,AAAO,4CACS,yDACE,AAAO,oEACH,AAAO,4DACnB,AAAO,sDACD,AAAO,mEACA,AAAO,wEACT,AAAO,gEACb,AAAO,+DACF,AAAO,gFACL,iDACnB,AAAO,gCACT,AAAO,yCACI,AAAO,wDACH,AAAO;IAEnC;UAG0B;;AACjB,mBAAS,sBAAgB,OAAO;AAStC,MARD,SAAS,4CACU,cACV,SAAW,MAAkB;AAClC,eAAU,gCAAN,KAAK,MAAwB,AAAM,KAAD,oBAAkC,yCACtE,MAAsB;AACxB,gBAAe,wCAAsC,uCAAyB;iEAEzE,MAAM;AAEf,WAAO,AAUN;AATC,YAAI,AAAO;AAMR,UALD,SAAS,gEAEG,mBACI,UACP,MAAM;;AAGjB,cAAO;;AAGT,YAAO,8DAC2B,KAAtB,AAAO,4BAAA,2CACV,mDACO,8BACL,MAAM;IAGnB;;;;;;gDAtLoB;;;EAuLtB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA36BgB,oBAAe","file":"../../../../../../../../../../packages/flutter/src/material/app.dart.lib.js"}');
  // Exports:
  return {
    src__material__app: app$
  };
}));

//# sourceMappingURL=app.dart.lib.js.map
