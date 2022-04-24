define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart'], (function load__packages__flutter__src__widgets__bottom_navigation_bar_item_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  var bottom_navigation_bar_item = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/bottom_navigation_bar_item.dart",
    "package:flutter/src/widgets/bottom_navigation_bar_item.dart"
  ];
  var icon$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.icon");
  var activeIcon$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.activeIcon");
  var label$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.label");
  var backgroundColor$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.backgroundColor");
  var tooltip$ = dart.privateName(bottom_navigation_bar_item, "BottomNavigationBarItem.tooltip");
  bottom_navigation_bar_item.BottomNavigationBarItem = class BottomNavigationBarItem extends core.Object {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get activeIcon() {
      return this[activeIcon$];
    }
    set activeIcon(value) {
      super.activeIcon = value;
    }
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get tooltip() {
      return this[tooltip$];
    }
    set tooltip(value) {
      super.tooltip = value;
    }
    static ['_#new#tearOff'](opts) {
      let icon = opts && 'icon' in opts ? opts.icon : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let activeIcon = opts && 'activeIcon' in opts ? opts.activeIcon : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      return new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: icon, label: label, activeIcon: activeIcon, backgroundColor: backgroundColor, tooltip: tooltip});
    }
  };
  (bottom_navigation_bar_item.BottomNavigationBarItem.new = function(opts) {
    let t0;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let activeIcon = opts && 'activeIcon' in opts ? opts.activeIcon : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    this[icon$] = icon;
    this[label$] = label;
    this[backgroundColor$] = backgroundColor;
    this[tooltip$] = tooltip;
    this[activeIcon$] = (t0 = activeIcon, t0 == null ? icon : t0);
    if (!(icon !== null)) dart.assertFailed(null, I[0], 32, 15, "icon != null");
    ;
  }).prototype = bottom_navigation_bar_item.BottomNavigationBarItem.prototype;
  dart.addTypeTests(bottom_navigation_bar_item.BottomNavigationBarItem);
  dart.addTypeCaches(bottom_navigation_bar_item.BottomNavigationBarItem);
  dart.setLibraryUri(bottom_navigation_bar_item.BottomNavigationBarItem, I[1]);
  dart.setFieldSignature(bottom_navigation_bar_item.BottomNavigationBarItem, () => ({
    __proto__: dart.getFields(bottom_navigation_bar_item.BottomNavigationBarItem.__proto__),
    icon: dart.finalFieldType(framework.Widget),
    activeIcon: dart.finalFieldType(framework.Widget),
    label: dart.finalFieldType(dart.nullable(core.String)),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    tooltip: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/bottom_navigation_bar_item.dart", {
    "package:flutter/src/widgets/bottom_navigation_bar_item.dart": bottom_navigation_bar_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bottom_navigation_bar_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAkDe;;;;;;IAWA;;;;;;IAKC;;;;;;IAeD;;;;;;IASC;;;;;;;;;;;;;;;;;QAjEE;QACT;QACG;QACH;QACA;IAJS;IACT;IAEA;IACA;IACS,qBAAa,KAAX,UAAU,EAAV,aAAc,IAAI;UACxB,AAAK,IAAD;;EAAS","file":"../../../../../../../../../../packages/flutter/src/widgets/bottom_navigation_bar_item.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__bottom_navigation_bar_item: bottom_navigation_bar_item
  };
}));

//# sourceMappingURL=bottom_navigation_bar_item.dart.lib.js.map
