define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/widgets/icon_theme.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/widgets/icon_data.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart'], (function load__packages__flutter__src__widgets__icon_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__widgets__icon_theme$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__widgets__icon_data$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const debug = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const icon_theme = packages__flutter__src__widgets__icon_theme$46dart.src__widgets__icon_theme;
  const text_painter = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_painter;
  const text_span = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_span;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const icon_data = packages__flutter__src__widgets__icon_data$46dart.src__widgets__icon_data;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  var icon$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Icon",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 16,
        [_Location_line]: 165,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 14,
        [_Location_line]: 163,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "RichText",
        [_Location_column]: 25,
        [_Location_line]: 174,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Transform",
        [_Location_column]: 24,
        [_Location_line]: 192,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Center",
        [_Location_column]: 18,
        [_Location_line]: 210,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SizedBox",
        [_Location_column]: 16,
        [_Location_line]: 207,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ExcludeSemantics",
        [_Location_column]: 14,
        [_Location_line]: 206,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Semantics",
        [_Location_column]: 12,
        [_Location_line]: 204,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart"
      });
    }
  }, false);
  var C = Array(11).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/icon.dart",
    "package:flutter/src/widgets/icon.dart"
  ];
  var icon$0 = dart.privateName(icon$, "Icon.icon");
  var size$ = dart.privateName(icon$, "Icon.size");
  var color$ = dart.privateName(icon$, "Icon.color");
  var semanticLabel$ = dart.privateName(icon$, "Icon.semanticLabel");
  var textDirection$ = dart.privateName(icon$, "Icon.textDirection");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  icon$.Icon = class Icon extends framework.StatelessWidget {
    get icon() {
      return this[icon$0];
    }
    set icon(value) {
      super.icon = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get semanticLabel() {
      return this[semanticLabel$];
    }
    set semanticLabel(value) {
      super.semanticLabel = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    static ['_#new#tearOff'](icon, opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new icon$.Icon.new(icon, {key: key, size: size, color: color, semanticLabel: semanticLabel, textDirection: textDirection, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2;
      if (!(this.textDirection != null || debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, I[0], 155, 12, "this.textDirection != null || debugCheckHasDirectionality(context)");
      let textDirection = (t0 = this.textDirection, t0 == null ? basic.Directionality.of(context) : t0);
      let iconTheme = icon_theme.IconTheme.of(context);
      let iconSize = (t0$ = this.size, t0$ == null ? iconTheme.size : t0$);
      if (this.icon == null) {
        return new basic.Semantics.new({label: this.semanticLabel, child: new basic.SizedBox.new({width: iconSize, height: iconSize, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
      }
      let iconOpacity = (t0$0 = iconTheme.opacity, t0$0 == null ? 1.0 : t0$0);
      let iconColor = (t0$1 = this.color, t0$1 == null ? dart.nullCheck(iconTheme.color) : t0$1);
      if (iconOpacity !== 1.0) iconColor = iconColor.withOpacity(iconColor.opacity * iconOpacity);
      let iconWidget = new basic.RichText.new({overflow: text_painter.TextOverflow.visible, textDirection: textDirection, text: new text_span.TextSpan.new({text: core.String.fromCharCode(dart.nullCheck(this.icon).codePoint), style: new text_style.TextStyle.new({inherit: false, color: iconColor, fontSize: iconSize, fontFamily: dart.nullCheck(this.icon).fontFamily, package: dart.nullCheck(this.icon).fontPackage})}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
      if (dart.nullCheck(this.icon).matchTextDirection) {
        switch (textDirection) {
          case C[5] || CT.C5:
          {
            iconWidget = new basic.Transform.new({transform: (t0$2 = vector_math_64.Matrix4.identity(), (() => {
                t0$2.scale(-1.0, 1.0, 1.0);
                return t0$2;
              })()), alignment: alignment.Alignment.center, transformHitTests: false, child: iconWidget, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
            break;
          }
          case C[6] || CT.C6:
          {
            break;
          }
        }
      }
      return new basic.Semantics.new({label: this.semanticLabel, child: new basic.ExcludeSemantics.new({child: new basic.SizedBox.new({width: iconSize, height: iconSize, child: new basic.Center.new({child: iconWidget, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7}), $creationLocationd_0dea112b090073317d4: C[8] || CT.C8}), $creationLocationd_0dea112b090073317d4: C[9] || CT.C9}), $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new icon_data.IconDataProperty.new("icon", this.icon, {ifNull: "<empty>", showName: false}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
    }
  };
  (icon$.Icon.new = function(icon, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$0] = icon;
    this[size$] = size;
    this[color$] = color;
    this[semanticLabel$] = semanticLabel;
    this[textDirection$] = textDirection;
    icon$.Icon.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = icon$.Icon.prototype;
  dart.addTypeTests(icon$.Icon);
  dart.addTypeCaches(icon$.Icon);
  dart.setMethodSignature(icon$.Icon, () => ({
    __proto__: dart.getMethods(icon$.Icon.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(icon$.Icon, I[1]);
  dart.setFieldSignature(icon$.Icon, () => ({
    __proto__: dart.getFields(icon$.Icon.__proto__),
    icon: dart.finalFieldType(dart.nullable(icon_data.IconData)),
    size: dart.finalFieldType(dart.nullable(core.double)),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    semanticLabel: dart.finalFieldType(dart.nullable(core.String)),
    textDirection: dart.finalFieldType(dart.nullable(ui.TextDirection))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/icon.dart", {
    "package:flutter/src/widgets/icon.dart": icon$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["icon.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkFkB;;;;;;IAcF;;;;;;IA8BD;;;;;;IASC;;;;;;IAeO;;;;;;;;;;;;;;UAGK;;AACxB,YAAY,AAAsB,8BAAG,kCAA4B,OAAO;AACpD,2BAAmC,yBAAd,aAAgC,wBAAG,OAAO;AAE/D,sBAAsB,wBAAG,OAAO;AAEtC,sBAAgB,iBAAL,cAAQ,AAAU,SAAD;AAE1C,UAAI,AAAK;AACP,cAAO,iCACE,2BACA,+BAAgB,QAAQ,UAAU,QAAQ;;AAIxC,yBAAgC,OAAlB,AAAU,SAAD,UAAC,eAAW;AAC1C,uBAAkB,mBAAN,eAAwB,eAAf,AAAU,SAAD;AACpC,UAAI,WAAW,KAAI,KACjB,AAAkE,YAAtD,AAAU,SAAD,aAAa,AAAU,AAAQ,SAAT,WAAW,WAAW;AAE5D,uBAAa,kCACK,kDACR,aAAa,QACtB,kCACS,yBAAiB,AAAE,eAAN,8BACnB,uCACI,cACF,SAAS,YACN,QAAQ,cACF,AAAE,eAAN,gCACC,AAAE,eAAN;AAKf,UAAQ,AAAE,eAAN;AACF,gBAAQ,aAAa;;;AAOhB,YALD,aAAa,+EACQ;AAAY,2BAAM,CAAC,KAAK,KAAK;;gCAC3B,+CACF,cACZ,UAAU;AAEnB;;;;AAEA;;;;AAIN,YAAO,iCACE,2BACA,uCACE,+BACE,QAAQ,UACP,QAAQ,SACT,6BACE,UAAU;IAK3B;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC8C,MAAlF,AAAW,UAAD,KAAK,mCAAiB,QAAQ,oBAAc,qBAAqB;AACX,MAAhE,AAAW,UAAD,KAAK,mCAAe,QAAQ,0BAAoB;AACO,MAAjE,AAAW,UAAD,KAAK,6BAAc,SAAS,2BAAqB;IAC7D;;6BAzJO;QACA;QACA;QACA;QACA;QACA;;IALA;IAEA;IACA;IACA;IACA;AACF,8CAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/icon.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__icon: icon$
  };
}));

//# sourceMappingURL=icon.dart.lib.js.map
