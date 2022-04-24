define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/circle_border.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__rounded_rectangle_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__circle_border$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const circle_border = packages__flutter__src__painting__circle_border$46dart.src__painting__circle_border;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var rounded_rectangle_border = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C[1] || CT.C1,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[2] || CT.C2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[4] || CT.C4,
        [BorderRadius_bottomLeft]: C[4] || CT.C4,
        [BorderRadius_topRight]: C[4] || CT.C4,
        [BorderRadius_topLeft]: C[4] || CT.C4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/rounded_rectangle_border.dart",
    "package:flutter/src/painting/rounded_rectangle_border.dart"
  ];
  var borderRadius$ = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  rounded_rectangle_border.RoundedRectangleBorder = class RoundedRectangleBorder extends borders.OutlinedBorder {
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    static ['_#new#tearOff'](opts) {
      let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[3] || CT.C3;
      return new rounded_rectangle_border.RoundedRectangleBorder.new({side: side, borderRadius: borderRadius});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new rounded_rectangle_border.RoundedRectangleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t)});
    }
    lerpFrom(a, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 57, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new rounded_rectangle_border.RoundedRectangleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t))});
      }
      if (circle_border.CircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, circleness: 1.0 - t});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 76, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new rounded_rectangle_border.RoundedRectangleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t))});
      }
      if (circle_border.CircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, circleness: t});
      }
      return super.lerpTo(b, t);
    }
    copyWith(opts) {
      let t0, t0$;
      let side = opts && 'side' in opts ? opts.side : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      return new rounded_rectangle_border.RoundedRectangleBorder.new({side: (t0 = side, t0 == null ? this.side : t0), borderRadius: (t0$ = borderRadius, t0$ == null ? this.borderRadius : t0$)});
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.side.width));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect));
        return t0;
      })();
    }
    paint(canvas, rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C[1] || CT.C1:
        {
          break;
        }
        case C[5] || CT.C5:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(this.borderRadius.resolve(textDirection).toRRect(rect), this.side.toPaint());
          } else {
            let outer = this.borderRadius.resolve(textDirection).toRRect(rect);
            let inner = outer.deflate(width);
            let paint = (t0 = ui.Paint.new(), (() => {
              t0.color = this.side.color;
              return t0;
            })());
            canvas.drawDRRect(outer, inner, paint);
          }
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return rounded_rectangle_border.RoundedRectangleBorder.is(other) && other.side._equals(this.side) && other.borderRadius._equals(this.borderRadius);
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius);
    }
    toString() {
      return object.objectRuntimeType(this, "RoundedRectangleBorder") + "(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ")";
    }
  };
  (rounded_rectangle_border.RoundedRectangleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[3] || CT.C3;
    this[borderRadius$] = borderRadius;
    if (!(side !== null)) dart.assertFailed(null, I[0], 35, 15, "side != null");
    if (!(borderRadius !== null)) dart.assertFailed(null, I[0], 36, 15, "borderRadius != null");
    rounded_rectangle_border.RoundedRectangleBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = rounded_rectangle_border.RoundedRectangleBorder.prototype;
  dart.addTypeTests(rounded_rectangle_border.RoundedRectangleBorder);
  dart.addTypeCaches(rounded_rectangle_border.RoundedRectangleBorder);
  dart.setMethodSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getMethods(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    copyWith: dart.fnType(rounded_rectangle_border.RoundedRectangleBorder, [], {borderRadius: dart.nullable(border_radius.BorderRadiusGeometry), side: dart.nullable(borders.BorderSide)}, {}),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getGetters(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(rounded_rectangle_border.RoundedRectangleBorder, I[1]);
  dart.setFieldSignature(rounded_rectangle_border.RoundedRectangleBorder, () => ({
    __proto__: dart.getFields(rounded_rectangle_border.RoundedRectangleBorder.__proto__),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry)
  }));
  dart.defineExtensionMethods(rounded_rectangle_border.RoundedRectangleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(rounded_rectangle_border.RoundedRectangleBorder, ['hashCode']);
  var borderRadius$0 = dart.privateName(rounded_rectangle_border, "_RoundedRectangleToCircleBorder.borderRadius");
  var circleness$ = dart.privateName(rounded_rectangle_border, "_RoundedRectangleToCircleBorder.circleness");
  var _adjustRect = dart.privateName(rounded_rectangle_border, "_adjustRect");
  var _adjustBorderRadius = dart.privateName(rounded_rectangle_border, "_adjustBorderRadius");
  rounded_rectangle_border._RoundedRectangleToCircleBorder = class _RoundedRectangleToCircleBorder extends borders.OutlinedBorder {
    get borderRadius() {
      return this[borderRadius$0];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get circleness() {
      return this[circleness$];
    }
    set circleness(value) {
      super.circleness = value;
    }
    static ['_#new#tearOff'](opts) {
      let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[3] || CT.C3;
      let circleness = opts && 'circleness' in opts ? opts.circleness : null;
      return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: side, borderRadius: borderRadius, circleness: circleness});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t), circleness: t});
    }
    lerpFrom(a, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 182, 12, "t != null");
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t)), circleness: this.circleness * t});
      }
      if (circle_border.CircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, circleness: this.circleness + (1.0 - this.circleness) * (1.0 - t)});
      }
      if (rounded_rectangle_border._RoundedRectangleToCircleBorder.is(a)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(a.borderRadius, this.borderRadius, t)), circleness: dart.nullCheck(ui.lerpDouble(a.circleness, this.circleness, t))});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t)), circleness: this.circleness * (1.0 - t)});
      }
      if (circle_border.CircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, circleness: this.circleness + (1.0 - this.circleness) * t});
      }
      if (rounded_rectangle_border._RoundedRectangleToCircleBorder.is(b)) {
        return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadiusGeometry.lerp(this.borderRadius, b.borderRadius, t)), circleness: dart.nullCheck(ui.lerpDouble(this.circleness, b.circleness, t))});
      }
      return super.lerpTo(b, t);
    }
    [_adjustRect](rect) {
      if (this.circleness === 0.0 || rect.width === rect.height) return rect;
      if (rect.width < rect.height) {
        let delta = this.circleness * (rect.height - rect.width) / 2.0;
        return new ui.Rect.fromLTRB(rect.left, rect.top + delta, rect.right, rect.bottom - delta);
      } else {
        let delta = this.circleness * (rect.width - rect.height) / 2.0;
        return new ui.Rect.fromLTRB(rect.left + delta, rect.top, rect.right - delta, rect.bottom);
      }
    }
    [_adjustBorderRadius](rect, textDirection) {
      let resolvedRadius = this.borderRadius.resolve(textDirection);
      if (this.circleness === 0.0) return resolvedRadius;
      return border_radius.BorderRadius.lerp(resolvedRadius, new border_radius.BorderRadius.circular(rect.shortestSide / 2.0), this.circleness);
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(dart.nullCheck(this[_adjustBorderRadius](rect, textDirection)).toRRect(this[_adjustRect](rect)).deflate(this.side.width));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(dart.nullCheck(this[_adjustBorderRadius](rect, textDirection)).toRRect(this[_adjustRect](rect)));
        return t0;
      })();
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let side = opts && 'side' in opts ? opts.side : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let circleness = opts && 'circleness' in opts ? opts.circleness : null;
      return new rounded_rectangle_border._RoundedRectangleToCircleBorder.new({side: (t0 = side, t0 == null ? this.side : t0), borderRadius: (t0$ = borderRadius, t0$ == null ? this.borderRadius : t0$), circleness: (t0$0 = circleness, t0$0 == null ? this.circleness : t0$0)});
    }
    paint(canvas, rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C[1] || CT.C1:
        {
          break;
        }
        case C[5] || CT.C5:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(dart.nullCheck(this[_adjustBorderRadius](rect, textDirection)).toRRect(this[_adjustRect](rect)), this.side.toPaint());
          } else {
            let outer = dart.nullCheck(this[_adjustBorderRadius](rect, textDirection)).toRRect(this[_adjustRect](rect));
            let inner = outer.deflate(width);
            let paint = (t0 = ui.Paint.new(), (() => {
              t0.color = this.side.color;
              return t0;
            })());
            canvas.drawDRRect(outer, inner, paint);
          }
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return rounded_rectangle_border._RoundedRectangleToCircleBorder.is(other) && other.side._equals(this.side) && other.borderRadius._equals(this.borderRadius) && other.circleness === this.circleness;
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius, this.circleness);
    }
    toString() {
      return "RoundedRectangleBorder(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ", " + (this.circleness * 100)[$toStringAsFixed](1) + "% of the way to being a CircleBorder)";
    }
  };
  (rounded_rectangle_border._RoundedRectangleToCircleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[3] || CT.C3;
    let circleness = opts && 'circleness' in opts ? opts.circleness : null;
    this[borderRadius$0] = borderRadius;
    this[circleness$] = circleness;
    if (!(side !== null)) dart.assertFailed(null, I[0], 157, 15, "side != null");
    if (!(borderRadius !== null)) dart.assertFailed(null, I[0], 158, 15, "borderRadius != null");
    if (!(circleness !== null)) dart.assertFailed(null, I[0], 159, 15, "circleness != null");
    rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = rounded_rectangle_border._RoundedRectangleToCircleBorder.prototype;
  dart.addTypeTests(rounded_rectangle_border._RoundedRectangleToCircleBorder);
  dart.addTypeCaches(rounded_rectangle_border._RoundedRectangleToCircleBorder);
  dart.setMethodSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getMethods(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    [_adjustRect]: dart.fnType(ui.Rect, [ui.Rect]),
    [_adjustBorderRadius]: dart.fnType(dart.nullable(border_radius.BorderRadius), [ui.Rect, dart.nullable(ui.TextDirection)]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    copyWith: dart.fnType(rounded_rectangle_border._RoundedRectangleToCircleBorder, [], {borderRadius: dart.nullable(border_radius.BorderRadiusGeometry), circleness: dart.nullable(core.double), side: dart.nullable(borders.BorderSide)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getGetters(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(rounded_rectangle_border._RoundedRectangleToCircleBorder, I[1]);
  dart.setFieldSignature(rounded_rectangle_border._RoundedRectangleToCircleBorder, () => ({
    __proto__: dart.getFields(rounded_rectangle_border._RoundedRectangleToCircleBorder.__proto__),
    borderRadius: dart.finalFieldType(border_radius.BorderRadiusGeometry),
    circleness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(rounded_rectangle_border._RoundedRectangleToCircleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(rounded_rectangle_border._RoundedRectangleToCircleBorder, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/rounded_rectangle_border.dart", {
    "package:flutter/src/painting/rounded_rectangle_border.dart": rounded_rectangle_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rounded_rectangle_border.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/rounded_rectangle_border.dart.lib.js"}');
  // Exports:
  return {
    src__painting__rounded_rectangle_border: rounded_rectangle_border
  };
}));

//# sourceMappingURL=rounded_rectangle_border.dart.lib.js.map
