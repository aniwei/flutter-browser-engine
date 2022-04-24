define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/widgets/icon_theme_data.dart', 'packages/flutter/src/foundation/key.dart'], (function load__packages__flutter__src__widgets__icon_theme_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__widgets__icon_theme_data$46dart, packages__flutter__src__foundation__key$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const inherited_theme = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__inherited_theme;
  const icon_theme_data = packages__flutter__src__widgets__icon_theme_data$46dart.src__widgets__icon_theme_data;
  const key = packages__flutter__src__foundation__key$46dart.src__foundation__key;
  var icon_theme = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    BuildContextToIconTheme: () => (T.BuildContextToIconTheme = dart.constFn(dart.fnType(icon_theme.IconTheme, [framework.BuildContext])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon_theme.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 16,
        [_Location_line]: 39,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon_theme.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Builder",
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon_theme.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: icon_theme_data.IconThemeData.prototype,
        [IconThemeData_size]: 24,
        [IconThemeData__opacity]: 1,
        [IconThemeData_color]: C[4] || CT.C4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "IconTheme",
        [_Location_column]: 12,
        [_Location_line]: 91,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon_theme.dart"
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon_theme.dart",
    "package:flutter/src/widgets/icon_theme.dart"
  ];
  var data$ = dart.privateName(icon_theme, "IconTheme.data");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var IconThemeData_size = dart.privateName(icon_theme_data, "IconThemeData.size");
  var IconThemeData__opacity = dart.privateName(icon_theme_data, "IconThemeData._opacity");
  var Color_value = dart.privateName(ui, "Color.value");
  var IconThemeData_color = dart.privateName(icon_theme_data, "IconThemeData.color");
  icon_theme.IconTheme = class IconTheme extends inherited_theme.InheritedTheme {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let data = opts && 'data' in opts ? opts.data : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new icon_theme.IconTheme.new({key: key, data: data, child: child, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    static merge(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let data = opts && 'data' in opts ? opts.data : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new basic.Builder.new({builder: dart.fn(context => new icon_theme.IconTheme.new({key: key, data: icon_theme.IconTheme._getInheritedIconThemeData(context).merge(data), child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), T.BuildContextToIconTheme()), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
    static of(context) {
      let t0, t0$, t0$0;
      let iconThemeData = icon_theme.IconTheme._getInheritedIconThemeData(context).resolve(context);
      return iconThemeData.isConcrete ? iconThemeData : iconThemeData.copyWith({size: (t0 = iconThemeData.size, t0 == null ? (C[3] || CT.C3).size : t0), color: (t0$ = iconThemeData.color, t0$ == null ? (C[3] || CT.C3).color : t0$), opacity: (t0$0 = iconThemeData.opacity, t0$0 == null ? (C[3] || CT.C3).opacity : t0$0)});
    }
    static _getInheritedIconThemeData(context) {
      let t0, t0$;
      let iconTheme = context.dependOnInheritedWidgetOfExactType(icon_theme.IconTheme);
      t0$ = (t0 = iconTheme, t0 == null ? null : t0.data);
      return t0$ == null ? C[3] || CT.C3 : t0$;
    }
    updateShouldNotify(oldWidget) {
      icon_theme.IconTheme.as(oldWidget);
      return !this.data._equals(oldWidget.data);
    }
    wrap(context, child) {
      return new icon_theme.IconTheme.new({data: this.data, child: child, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      this.data.debugFillProperties(properties);
    }
  };
  (icon_theme.IconTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    if (!(data !== null)) dart.assertFailed(null, I[0], 24, 15, "data != null");
    if (!(child !== null)) dart.assertFailed(null, I[0], 25, 15, "child != null");
    icon_theme.IconTheme.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = icon_theme.IconTheme.prototype;
  dart.addTypeTests(icon_theme.IconTheme);
  dart.addTypeCaches(icon_theme.IconTheme);
  dart.setMethodSignature(icon_theme.IconTheme, () => ({
    __proto__: dart.getMethods(icon_theme.IconTheme.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    wrap: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])
  }));
  dart.setStaticMethodSignature(icon_theme.IconTheme, () => ['merge', 'of', '_getInheritedIconThemeData']);
  dart.setLibraryUri(icon_theme.IconTheme, I[1]);
  dart.setFieldSignature(icon_theme.IconTheme, () => ({
    __proto__: dart.getFields(icon_theme.IconTheme.__proto__),
    data: dart.finalFieldType(icon_theme_data.IconThemeData)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/icon_theme.dart", {
    "package:flutter/src/widgets/icon_theme.dart": icon_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgDsB;;;;;;;;;;;;;UAhBb;UACkB;UACP;AAEhB,YAAO,iCACI,QAAc,WACd,mCACA,GAAG,QACF,AAAoC,gDAAT,OAAO,QAAQ,IAAI,UAC7C,KAAK;IAIpB;cAwBqC;;AACf,0BAAgB,AAAoC,gDAAT,OAAO,UAAU,OAAO;AACvF,YAAO,AAAc,cAAD,cAChB,aAAa,GACb,AAAc,aAAD,kBACY,KAAnB,AAAc,aAAD,OAAC,aAAuC,oCAChC,MAApB,AAAc,aAAD,QAAC,cAAwC,wCAC9B,OAAtB,AAAc,aAAD,UAAC,eAA0C;IAEvE;sCAE6D;;AAC1C,sBAAY,AAAQ,OAAD;AACpC,kBAAO,SAAS,eAAT,OAAW;YAAX;IACT;uBAGkC;;AAAc,YAAK,EAAL,kBAAQ,AAAU,SAAD;IAAK;SAG7C,SAAgB;AACvC,YAAO,qCAAgB,kBAAa,KAAK;IAC3C;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACA,MAApC,AAAK,8BAAoB,UAAU;IACrC;;;QA7EO;QACS;QACE;;IADF;UAEJ,AAAK,IAAD;UACJ,AAAM,KAAD;AACZ,wDAAW,GAAG,SAAS,KAAK;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/icon_theme.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__icon_theme: icon_theme
  };
}));

//# sourceMappingURL=icon_theme.dart.lib.js.map
