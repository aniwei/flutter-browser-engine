define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__material__bottom_sheet_theme_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var bottom_sheet_theme = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    DiagnosticsPropertyOfShapeBorder: () => (T.DiagnosticsPropertyOfShapeBorder = dart.constFn(diagnostics.DiagnosticsProperty$(borders.ShapeBorder)))(),
    DiagnosticsPropertyOfClip: () => (T.DiagnosticsPropertyOfClip = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Clip)))(),
    DiagnosticsPropertyOfBoxConstraints: () => (T.DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/bottom_sheet_theme.dart",
    "package:flutter/src/material/bottom_sheet_theme.dart"
  ];
  var backgroundColor$ = dart.privateName(bottom_sheet_theme, "BottomSheetThemeData.backgroundColor");
  var elevation$ = dart.privateName(bottom_sheet_theme, "BottomSheetThemeData.elevation");
  var modalBackgroundColor$ = dart.privateName(bottom_sheet_theme, "BottomSheetThemeData.modalBackgroundColor");
  var modalElevation$ = dart.privateName(bottom_sheet_theme, "BottomSheetThemeData.modalElevation");
  var shape$ = dart.privateName(bottom_sheet_theme, "BottomSheetThemeData.shape");
  var clipBehavior$ = dart.privateName(bottom_sheet_theme, "BottomSheetThemeData.clipBehavior");
  var constraints$ = dart.privateName(bottom_sheet_theme, "BottomSheetThemeData.constraints");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  bottom_sheet_theme.BottomSheetThemeData = class BottomSheetThemeData extends Object_Diagnosticable$36 {
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get modalBackgroundColor() {
      return this[modalBackgroundColor$];
    }
    set modalBackgroundColor(value) {
      super.modalBackgroundColor = value;
    }
    get modalElevation() {
      return this[modalElevation$];
    }
    set modalElevation(value) {
      super.modalElevation = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get clipBehavior() {
      return this[clipBehavior$];
    }
    set clipBehavior(value) {
      super.clipBehavior = value;
    }
    get constraints() {
      return this[constraints$];
    }
    set constraints(value) {
      super.constraints = value;
    }
    static ['_#new#tearOff'](opts) {
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let modalBackgroundColor = opts && 'modalBackgroundColor' in opts ? opts.modalBackgroundColor : null;
      let modalElevation = opts && 'modalElevation' in opts ? opts.modalElevation : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      return new bottom_sheet_theme.BottomSheetThemeData.new({backgroundColor: backgroundColor, elevation: elevation, modalBackgroundColor: modalBackgroundColor, modalElevation: modalElevation, shape: shape, clipBehavior: clipBehavior, constraints: constraints});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let modalBackgroundColor = opts && 'modalBackgroundColor' in opts ? opts.modalBackgroundColor : null;
      let modalElevation = opts && 'modalElevation' in opts ? opts.modalElevation : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
      let constraints = opts && 'constraints' in opts ? opts.constraints : null;
      return new bottom_sheet_theme.BottomSheetThemeData.new({backgroundColor: (t0 = backgroundColor, t0 == null ? this.backgroundColor : t0), elevation: (t0$ = elevation, t0$ == null ? this.elevation : t0$), modalBackgroundColor: (t0$0 = modalBackgroundColor, t0$0 == null ? this.modalBackgroundColor : t0$0), modalElevation: (t0$1 = modalElevation, t0$1 == null ? this.modalElevation : t0$1), shape: (t0$2 = shape, t0$2 == null ? this.shape : t0$2), clipBehavior: (t0$3 = clipBehavior, t0$3 == null ? this.clipBehavior : t0$3), constraints: (t0$4 = constraints, t0$4 == null ? this.constraints : t0$4)});
    }
    static lerp(a, b, t) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11;
      if (!(t !== null)) dart.assertFailed(null, I[0], 104, 12, "t != null");
      if (a == null && b == null) return null;
      return new bottom_sheet_theme.BottomSheetThemeData.new({backgroundColor: ui.Color.lerp((t0 = a, t0 == null ? null : t0.backgroundColor), (t0$ = b, t0$ == null ? null : t0$.backgroundColor), t), elevation: ui.lerpDouble((t0$0 = a, t0$0 == null ? null : t0$0.elevation), (t0$1 = b, t0$1 == null ? null : t0$1.elevation), t), modalBackgroundColor: ui.Color.lerp((t0$2 = a, t0$2 == null ? null : t0$2.modalBackgroundColor), (t0$3 = b, t0$3 == null ? null : t0$3.modalBackgroundColor), t), modalElevation: ui.lerpDouble((t0$4 = a, t0$4 == null ? null : t0$4.modalElevation), (t0$5 = b, t0$5 == null ? null : t0$5.modalElevation), t), shape: borders.ShapeBorder.lerp((t0$6 = a, t0$6 == null ? null : t0$6.shape), (t0$7 = b, t0$7 == null ? null : t0$7.shape), t), clipBehavior: t < 0.5 ? (t0$8 = a, t0$8 == null ? null : t0$8.clipBehavior) : (t0$9 = b, t0$9 == null ? null : t0$9.clipBehavior), constraints: box.BoxConstraints.lerp((t0$10 = a, t0$10 == null ? null : t0$10.constraints), (t0$11 = b, t0$11 == null ? null : t0$11.constraints), t)});
    }
    get hashCode() {
      return ui.hashValues(this.backgroundColor, this.elevation, this.modalBackgroundColor, this.modalElevation, this.shape, this.clipBehavior, this.constraints);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return bottom_sheet_theme.BottomSheetThemeData.is(other) && dart.equals(other.backgroundColor, this.backgroundColor) && other.elevation == this.elevation && dart.equals(other.modalBackgroundColor, this.modalBackgroundColor) && other.modalElevation == this.modalElevation && dart.equals(other.shape, this.shape) && other.clipBehavior == this.clipBehavior && dart.equals(other.constraints, this.constraints);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new colors.ColorProperty.new("backgroundColor", this.backgroundColor, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("modalBackgroundColor", this.modalBackgroundColor, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("modalElevation", this.modalElevation, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfShapeBorder()).new("shape", this.shape, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfBoxConstraints()).new("constraints", this.constraints, {defaultValue: null}));
    }
  };
  (bottom_sheet_theme.BottomSheetThemeData.new = function(opts) {
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let modalBackgroundColor = opts && 'modalBackgroundColor' in opts ? opts.modalBackgroundColor : null;
    let modalElevation = opts && 'modalElevation' in opts ? opts.modalElevation : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : null;
    let constraints = opts && 'constraints' in opts ? opts.constraints : null;
    this[backgroundColor$] = backgroundColor;
    this[elevation$] = elevation;
    this[modalBackgroundColor$] = modalBackgroundColor;
    this[modalElevation$] = modalElevation;
    this[shape$] = shape;
    this[clipBehavior$] = clipBehavior;
    this[constraints$] = constraints;
    ;
  }).prototype = bottom_sheet_theme.BottomSheetThemeData.prototype;
  dart.addTypeTests(bottom_sheet_theme.BottomSheetThemeData);
  dart.addTypeCaches(bottom_sheet_theme.BottomSheetThemeData);
  dart.setMethodSignature(bottom_sheet_theme.BottomSheetThemeData, () => ({
    __proto__: dart.getMethods(bottom_sheet_theme.BottomSheetThemeData.__proto__),
    copyWith: dart.fnType(bottom_sheet_theme.BottomSheetThemeData, [], {backgroundColor: dart.nullable(ui.Color), clipBehavior: dart.nullable(ui.Clip), constraints: dart.nullable(box.BoxConstraints), elevation: dart.nullable(core.double), modalBackgroundColor: dart.nullable(ui.Color), modalElevation: dart.nullable(core.double), shape: dart.nullable(borders.ShapeBorder)}, {})
  }));
  dart.setStaticMethodSignature(bottom_sheet_theme.BottomSheetThemeData, () => ['lerp']);
  dart.setLibraryUri(bottom_sheet_theme.BottomSheetThemeData, I[1]);
  dart.setFieldSignature(bottom_sheet_theme.BottomSheetThemeData, () => ({
    __proto__: dart.getFields(bottom_sheet_theme.BottomSheetThemeData.__proto__),
    backgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    elevation: dart.finalFieldType(dart.nullable(core.double)),
    modalBackgroundColor: dart.finalFieldType(dart.nullable(ui.Color)),
    modalElevation: dart.finalFieldType(dart.nullable(core.double)),
    shape: dart.finalFieldType(dart.nullable(borders.ShapeBorder)),
    clipBehavior: dart.finalFieldType(dart.nullable(ui.Clip)),
    constraints: dart.finalFieldType(dart.nullable(box.BoxConstraints))
  }));
  dart.defineExtensionMethods(bottom_sheet_theme.BottomSheetThemeData, ['_equals']);
  dart.defineExtensionAccessors(bottom_sheet_theme.BottomSheetThemeData, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/material/bottom_sheet_theme.dart", {
    "package:flutter/src/material/bottom_sheet_theme.dart": bottom_sheet_theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bottom_sheet_theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0Ce;;;;;;IAOC;;;;;;IAID;;;;;;IAIC;;;;;;IAMK;;;;;;IAKP;;;;;;IAKU;;;;;;;;;;;;;;;;;;UAKb;UACC;UACD;UACC;UACK;UACP;UACU;AAEhB,YAAO,oEAC4B,KAAhB,eAAe,EAAf,aAAwB,wCACpB,MAAV,SAAS,EAAT,cAAkB,8CACc,OAArB,oBAAoB,EAApB,eAA6B,oDACpB,OAAf,cAAc,EAAd,eAAuB,qCAC1B,OAAN,KAAK,EAAL,eAAc,mCACM,OAAb,YAAY,EAAZ,eAAqB,yCACV,OAAZ,WAAW,EAAX,eAAoB;IAErC;gBAOwD,GAAyB,GAAU;;AACzF,YAAO,AAAE,CAAD;AACR,UAAI,AAAE,CAAD,YAAY,AAAE,CAAD,UAChB,MAAO;AACT,YAAO,mEACkB,oBAAK,CAAC,eAAD,OAAG,4BAAiB,CAAC,gBAAD,OAAG,sBAAiB,CAAC,cAC1D,sBAAW,CAAC,iBAAD,OAAG,yBAAW,CAAC,iBAAD,OAAG,iBAAW,CAAC,yBACvB,sBAAK,CAAC,iBAAD,OAAG,oCAAsB,CAAC,iBAAD,OAAG,4BAAsB,CAAC,mBACpE,sBAAW,CAAC,iBAAD,OAAG,8BAAgB,CAAC,iBAAD,OAAG,sBAAgB,CAAC,UAC/C,iCAAK,CAAC,iBAAD,OAAG,qBAAO,CAAC,iBAAD,OAAG,aAAO,CAAC,iBAC/B,AAAE,CAAD,GAAG,cAAM,CAAC,iBAAD,OAAG,6BAAe,CAAC,iBAAD,OAAG,iCACjB,iCAAK,CAAC,kBAAD,OAAG,6BAAa,CAAC,kBAAD,OAAG,oBAAa,CAAC;IAEtE;;AAIE,YAAO,eACL,sBACA,gBACA,2BACA,qBACA,YACA,mBACA;IAEJ;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAOT,4CAPG,KAAK,KACiB,YAAtB,AAAM,KAAD,kBAAoB,yBACzB,AAAM,AAAU,KAAX,cAAc,kBACQ,YAA3B,AAAM,KAAD,uBAAyB,8BAC9B,AAAM,AAAe,KAAhB,mBAAmB,uBACZ,YAAZ,AAAM,KAAD,QAAU,eACf,AAAM,AAAa,KAAd,iBAAiB,qBACJ,YAAlB,AAAM,KAAD,cAAgB;IAC9B;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACiD,MAArF,AAAW,UAAD,KAAK,6BAAc,mBAAmB,qCAA+B;AACL,MAA1E,AAAW,UAAD,KAAK,mCAAe,aAAa,+BAAyB;AAC2B,MAA/F,AAAW,UAAD,KAAK,6BAAc,wBAAwB,0CAAoC;AACL,MAApF,AAAW,UAAD,KAAK,mCAAe,kBAAkB,oCAA8B;AACM,MAApF,AAAW,UAAD,KAAK,+CAAiC,SAAS,2BAAqB;AACa,MAA3F,AAAW,UAAD,KAAK,wCAA0B,gBAAgB,kCAA4B;AACc,MAAnG,AAAW,UAAD,KAAK,kDAAoC,eAAe,iCAA2B;IAC/F;;;QA9HO;QACA;QACA;QACA;QACA;QACA;QACA;IANA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"../../../../../../../../../../packages/flutter/src/material/bottom_sheet_theme.dart.lib.js"}');
  // Exports:
  return {
    src__material__bottom_sheet_theme: bottom_sheet_theme
  };
}));

//# sourceMappingURL=bottom_sheet_theme.dart.lib.js.map
