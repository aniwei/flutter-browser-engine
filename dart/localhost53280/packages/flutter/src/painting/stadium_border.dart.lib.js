define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/painting/circle_border.dart', 'packages/flutter/src/painting/rounded_rectangle_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__stadium_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__painting__circle_border$46dart, packages__flutter__src__painting__rounded_rectangle_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const circle_border = packages__flutter__src__painting__circle_border$46dart.src__painting__circle_border;
  const rounded_rectangle_border = packages__flutter__src__painting__rounded_rectangle_border$46dart.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var stadium_border = Object.create(dart.library);
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
    get C3() {
      return C[3] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[5] || CT.C5,
        [BorderRadius_bottomLeft]: C[5] || CT.C5,
        [BorderRadius_topRight]: C[5] || CT.C5,
        [BorderRadius_topLeft]: C[5] || CT.C5
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/stadium_border.dart",
    "package:flutter/src/painting/stadium_border.dart"
  ];
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  stadium_border.StadiumBorder = class StadiumBorder extends borders.OutlinedBorder {
    static ['_#new#tearOff'](opts) {
      let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
      return new stadium_border.StadiumBorder.new({side: side});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new stadium_border.StadiumBorder.new({side: this.side.scale(t)});
    }
    lerpFrom(a, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 44, 12, "t != null");
      if (stadium_border.StadiumBorder.is(a)) return new stadium_border.StadiumBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t)});
      if (circle_border.CircleBorder.is(a)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), circleness: 1.0 - t});
      }
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: border_radius.BorderRadius.as(a.borderRadius), rectness: 1.0 - t});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 65, 12, "t != null");
      if (stadium_border.StadiumBorder.is(b)) return new stadium_border.StadiumBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t)});
      if (circle_border.CircleBorder.is(b)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), circleness: t});
      }
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: border_radius.BorderRadius.as(b.borderRadius), rectness: t});
      }
      return super.lerpTo(b, t);
    }
    copyWith(opts) {
      let t0;
      let side = opts && 'side' in opts ? opts.side : null;
      return new stadium_border.StadiumBorder.new({side: (t0 = side, t0 == null ? this.side : t0)});
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let radius = new ui.Radius.circular(rect.shortestSide / 2.0);
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(new ui.RRect.fromRectAndRadius(rect, radius).deflate(this.side.width));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let radius = new ui.Radius.circular(rect.shortestSide / 2.0);
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(new ui.RRect.fromRectAndRadius(rect, radius));
        return t0;
      })();
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C[1] || CT.C1:
        {
          break;
        }
        case C[3] || CT.C3:
        {
          let radius = new ui.Radius.circular(rect.shortestSide / 2.0);
          canvas.drawRRect(new ui.RRect.fromRectAndRadius(rect, radius).deflate(this.side.width / 2.0), this.side.toPaint());
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return stadium_border.StadiumBorder.is(other) && other.side._equals(this.side);
    }
    get hashCode() {
      return this.side.hashCode;
    }
    toString() {
      return object.objectRuntimeType(this, "StadiumBorder") + "(" + dart.str(this.side) + ")";
    }
  };
  (stadium_border.StadiumBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
    if (!(side !== null)) dart.assertFailed(null, I[0], 32, 71, "side != null");
    stadium_border.StadiumBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = stadium_border.StadiumBorder.prototype;
  dart.addTypeTests(stadium_border.StadiumBorder);
  dart.addTypeCaches(stadium_border.StadiumBorder);
  dart.setMethodSignature(stadium_border.StadiumBorder, () => ({
    __proto__: dart.getMethods(stadium_border.StadiumBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    copyWith: dart.fnType(stadium_border.StadiumBorder, [], {side: dart.nullable(borders.BorderSide)}, {}),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(stadium_border.StadiumBorder, () => ({
    __proto__: dart.getGetters(stadium_border.StadiumBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(stadium_border.StadiumBorder, I[1]);
  dart.defineExtensionMethods(stadium_border.StadiumBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stadium_border.StadiumBorder, ['hashCode']);
  var circleness$ = dart.privateName(stadium_border, "_StadiumToCircleBorder.circleness");
  var _adjustRect = dart.privateName(stadium_border, "_adjustRect");
  var _adjustBorderRadius = dart.privateName(stadium_border, "_adjustBorderRadius");
  stadium_border._StadiumToCircleBorder = class _StadiumToCircleBorder extends borders.OutlinedBorder {
    get circleness() {
      return this[circleness$];
    }
    set circleness(value) {
      super.circleness = value;
    }
    static ['_#new#tearOff'](opts) {
      let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
      let circleness = opts && 'circleness' in opts ? opts.circleness : 0;
      return new stadium_border._StadiumToCircleBorder.new({side: side, circleness: circleness});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new stadium_border._StadiumToCircleBorder.new({side: this.side.scale(t), circleness: t});
    }
    lerpFrom(a, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 160, 12, "t != null");
      if (stadium_border.StadiumBorder.is(a)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), circleness: this.circleness * t});
      }
      if (circle_border.CircleBorder.is(a)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), circleness: this.circleness + (1.0 - this.circleness) * (1.0 - t)});
      }
      if (stadium_border._StadiumToCircleBorder.is(a)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), circleness: dart.nullCheck(ui.lerpDouble(a.circleness, this.circleness, t))});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 184, 12, "t != null");
      if (stadium_border.StadiumBorder.is(b)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), circleness: this.circleness * (1.0 - t)});
      }
      if (circle_border.CircleBorder.is(b)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), circleness: this.circleness + (1.0 - this.circleness) * t});
      }
      if (stadium_border._StadiumToCircleBorder.is(b)) {
        return new stadium_border._StadiumToCircleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), circleness: dart.nullCheck(ui.lerpDouble(this.circleness, b.circleness, t))});
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
    [_adjustBorderRadius](rect) {
      return new border_radius.BorderRadius.circular(rect.shortestSide / 2.0);
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this[_adjustBorderRadius](rect).toRRect(this[_adjustRect](rect)).deflate(this.side.width));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this[_adjustBorderRadius](rect).toRRect(this[_adjustRect](rect)));
        return t0;
      })();
    }
    copyWith(opts) {
      let t0, t0$;
      let side = opts && 'side' in opts ? opts.side : null;
      let circleness = opts && 'circleness' in opts ? opts.circleness : null;
      return new stadium_border._StadiumToCircleBorder.new({side: (t0 = side, t0 == null ? this.side : t0), circleness: (t0$ = circleness, t0$ == null ? this.circleness : t0$)});
    }
    paint(canvas, rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C[1] || CT.C1:
        {
          break;
        }
        case C[3] || CT.C3:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(this[_adjustBorderRadius](rect).toRRect(this[_adjustRect](rect)), this.side.toPaint());
          } else {
            let outer = this[_adjustBorderRadius](rect).toRRect(this[_adjustRect](rect));
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
      return stadium_border._StadiumToCircleBorder.is(other) && other.side._equals(this.side) && other.circleness === this.circleness;
    }
    get hashCode() {
      return ui.hashValues(this.side, this.circleness);
    }
    toString() {
      return "StadiumBorder(" + dart.str(this.side) + ", " + (this.circleness * 100)[$toStringAsFixed](1) + "% " + "of the way to being a CircleBorder)";
    }
  };
  (stadium_border._StadiumToCircleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
    let circleness = opts && 'circleness' in opts ? opts.circleness : 0;
    this[circleness$] = circleness;
    if (!(side !== null)) dart.assertFailed(null, I[0], 139, 15, "side != null");
    if (!(circleness !== null)) dart.assertFailed(null, I[0], 140, 15, "circleness != null");
    stadium_border._StadiumToCircleBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = stadium_border._StadiumToCircleBorder.prototype;
  dart.addTypeTests(stadium_border._StadiumToCircleBorder);
  dart.addTypeCaches(stadium_border._StadiumToCircleBorder);
  dart.setMethodSignature(stadium_border._StadiumToCircleBorder, () => ({
    __proto__: dart.getMethods(stadium_border._StadiumToCircleBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    [_adjustRect]: dart.fnType(ui.Rect, [ui.Rect]),
    [_adjustBorderRadius]: dart.fnType(border_radius.BorderRadius, [ui.Rect]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    copyWith: dart.fnType(stadium_border._StadiumToCircleBorder, [], {circleness: dart.nullable(core.double), side: dart.nullable(borders.BorderSide)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(stadium_border._StadiumToCircleBorder, () => ({
    __proto__: dart.getGetters(stadium_border._StadiumToCircleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(stadium_border._StadiumToCircleBorder, I[1]);
  dart.setFieldSignature(stadium_border._StadiumToCircleBorder, () => ({
    __proto__: dart.getFields(stadium_border._StadiumToCircleBorder.__proto__),
    circleness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(stadium_border._StadiumToCircleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stadium_border._StadiumToCircleBorder, ['hashCode']);
  var borderRadius$ = dart.privateName(stadium_border, "_StadiumToRoundedRectangleBorder.borderRadius");
  var rectness$ = dart.privateName(stadium_border, "_StadiumToRoundedRectangleBorder.rectness");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  stadium_border._StadiumToRoundedRectangleBorder = class _StadiumToRoundedRectangleBorder extends borders.OutlinedBorder {
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get rectness() {
      return this[rectness$];
    }
    set rectness(value) {
      super.rectness = value;
    }
    static ['_#new#tearOff'](opts) {
      let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[4] || CT.C4;
      let rectness = opts && 'rectness' in opts ? opts.rectness : 0;
      return new stadium_border._StadiumToRoundedRectangleBorder.new({side: side, borderRadius: borderRadius, rectness: rectness});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.all(this.side.width);
    }
    scale(t) {
      return new stadium_border._StadiumToRoundedRectangleBorder.new({side: this.side.scale(t), borderRadius: this.borderRadius['*'](t), rectness: t});
    }
    lerpFrom(a, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 321, 12, "t != null");
      if (stadium_border.StadiumBorder.is(a)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, rectness: this.rectness * t});
      }
      if (rounded_rectangle_border.RoundedRectangleBorder.is(a)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: this.borderRadius, rectness: this.rectness + (1.0 - this.rectness) * (1.0 - t)});
      }
      if (stadium_border._StadiumToRoundedRectangleBorder.is(a)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders.BorderSide.lerp(a.side, this.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadius.lerp(a.borderRadius, this.borderRadius, t)), rectness: dart.nullCheck(ui.lerpDouble(a.rectness, this.rectness, t))});
      }
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 348, 12, "t != null");
      if (stadium_border.StadiumBorder.is(b)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, rectness: this.rectness * (1.0 - t)});
      }
      if (rounded_rectangle_border.RoundedRectangleBorder.is(b)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: this.borderRadius, rectness: this.rectness + (1.0 - this.rectness) * t});
      }
      if (stadium_border._StadiumToRoundedRectangleBorder.is(b)) {
        return new stadium_border._StadiumToRoundedRectangleBorder.new({side: borders.BorderSide.lerp(this.side, b.side, t), borderRadius: dart.nullCheck(border_radius.BorderRadius.lerp(this.borderRadius, b.borderRadius, t)), rectness: dart.nullCheck(ui.lerpDouble(this.rectness, b.rectness, t))});
      }
      return super.lerpTo(b, t);
    }
    [_adjustBorderRadius](rect) {
      return dart.nullCheck(border_radius.BorderRadius.lerp(this.borderRadius, new border_radius.BorderRadius.all(new ui.Radius.circular(rect.shortestSide / 2.0)), 1.0 - this.rectness));
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this[_adjustBorderRadius](rect).toRRect(rect).deflate(this.side.width));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      t0 = ui.Path.new();
      return (() => {
        t0.addRRect(this[_adjustBorderRadius](rect).toRRect(rect));
        return t0;
      })();
    }
    copyWith(opts) {
      let t0, t0$, t0$0;
      let side = opts && 'side' in opts ? opts.side : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let rectness = opts && 'rectness' in opts ? opts.rectness : null;
      return new stadium_border._StadiumToRoundedRectangleBorder.new({side: (t0 = side, t0 == null ? this.side : t0), borderRadius: (t0$ = borderRadius, t0$ == null ? this.borderRadius : t0$), rectness: (t0$0 = rectness, t0$0 == null ? this.rectness : t0$0)});
    }
    paint(canvas, rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      switch (this.side.style) {
        case C[1] || CT.C1:
        {
          break;
        }
        case C[3] || CT.C3:
        {
          let width = this.side.width;
          if (width === 0.0) {
            canvas.drawRRect(this[_adjustBorderRadius](rect).toRRect(rect), this.side.toPaint());
          } else {
            let outer = this[_adjustBorderRadius](rect).toRRect(rect);
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
      return stadium_border._StadiumToRoundedRectangleBorder.is(other) && other.side._equals(this.side) && other.borderRadius._equals(this.borderRadius) && other.rectness === this.rectness;
    }
    get hashCode() {
      return ui.hashValues(this.side, this.borderRadius, this.rectness);
    }
    toString() {
      return "StadiumBorder(" + dart.str(this.side) + ", " + dart.str(this.borderRadius) + ", " + (this.rectness * 100)[$toStringAsFixed](1) + "% of the way to being a " + "RoundedRectangleBorder)";
    }
  };
  (stadium_border._StadiumToRoundedRectangleBorder.new = function(opts) {
    let side = opts && 'side' in opts ? opts.side : C[0] || CT.C0;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[4] || CT.C4;
    let rectness = opts && 'rectness' in opts ? opts.rectness : 0;
    this[borderRadius$] = borderRadius;
    this[rectness$] = rectness;
    if (!(side !== null)) dart.assertFailed(null, I[0], 296, 15, "side != null");
    if (!(borderRadius !== null)) dart.assertFailed(null, I[0], 297, 15, "borderRadius != null");
    if (!(rectness !== null)) dart.assertFailed(null, I[0], 298, 15, "rectness != null");
    stadium_border._StadiumToRoundedRectangleBorder.__proto__.new.call(this, {side: side});
    ;
  }).prototype = stadium_border._StadiumToRoundedRectangleBorder.prototype;
  dart.addTypeTests(stadium_border._StadiumToRoundedRectangleBorder);
  dart.addTypeCaches(stadium_border._StadiumToRoundedRectangleBorder);
  dart.setMethodSignature(stadium_border._StadiumToRoundedRectangleBorder, () => ({
    __proto__: dart.getMethods(stadium_border._StadiumToRoundedRectangleBorder.__proto__),
    scale: dart.fnType(borders.ShapeBorder, [core.double]),
    [_adjustBorderRadius]: dart.fnType(border_radius.BorderRadius, [ui.Rect]),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    copyWith: dart.fnType(stadium_border._StadiumToRoundedRectangleBorder, [], {borderRadius: dart.nullable(border_radius.BorderRadius), rectness: dart.nullable(core.double), side: dart.nullable(borders.BorderSide)}, {}),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setGetterSignature(stadium_border._StadiumToRoundedRectangleBorder, () => ({
    __proto__: dart.getGetters(stadium_border._StadiumToRoundedRectangleBorder.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry
  }));
  dart.setLibraryUri(stadium_border._StadiumToRoundedRectangleBorder, I[1]);
  dart.setFieldSignature(stadium_border._StadiumToRoundedRectangleBorder, () => ({
    __proto__: dart.getFields(stadium_border._StadiumToRoundedRectangleBorder.__proto__),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius),
    rectness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(stadium_border._StadiumToRoundedRectangleBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(stadium_border._StadiumToRoundedRectangleBorder, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/stadium_border.dart", {
    "package:flutter/src/painting/stadium_border.dart": stadium_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["stadium_border.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmCI,YAAkB,gCAAI,AAAK;IAC7B;UAGyB;AAAM,yDAAoB,AAAK,gBAAM,CAAC;IAAE;aAG9B,GAAU;AAC3C,YAAO,AAAE,CAAD;AACR,UAAM,gCAAF,CAAC,GACH,MAAO,6CAA+B,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC;AAC5D,UAAM,8BAAF,CAAC;AACH,cAAO,sDACY,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC,eACzB,AAAI,MAAE,CAAC;;AAGvB,UAAM,mDAAF,CAAC;AACH,cAAO,gEACY,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC,iBACR,8BAAf,AAAE,CAAD,0BACL,AAAI,MAAE,CAAC;;AAGrB,YAAa,gBAAS,CAAC,EAAE,CAAC;IAC5B;WAGiC,GAAU;AACzC,YAAO,AAAE,CAAD;AACR,UAAM,gCAAF,CAAC,GACH,MAAO,6CAA+B,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC;AAC5D,UAAM,8BAAF,CAAC;AACH,cAAO,sDACY,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC,eACzB,CAAC;;AAGjB,UAAM,mDAAF,CAAC;AACH,cAAO,gEACY,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC,iBACR,8BAAf,AAAE,CAAD,0BACL,CAAC;;AAGf,YAAa,cAAO,CAAC,EAAE,CAAC;IAC1B;;;UAGqC;AACnC,YAAO,8CAAyB,KAAL,IAAI,EAAJ,aAAa;IAC1C;iBAGuB;;UAAuB;AAC/B,mBAAgB,uBAAS,AAAK,AAAa,IAAd,gBAAgB;AAC1D,WAAO;;AACH,oBAAe,AAAgC,+BAAd,IAAI,EAAE,MAAM,UAAU,AAAK;;;IAClE;iBAGuB;;UAAuB;AAC/B,mBAAgB,uBAAS,AAAK,AAAa,IAAd,gBAAgB;AAC1D,WAAO;;AACH,oBAAe,+BAAkB,IAAI,EAAE,MAAM;;;IACnD;UAGkB,QAAa;UAAuB;AACpD,cAAQ,AAAK;;;AAET;;;;AAEa,uBAAgB,uBAAS,AAAK,AAAa,IAAd,gBAAgB;AAIzD,UAHD,AAAO,MAAD,WACE,AAAgC,+BAAd,IAAI,EAAE,MAAM,UAAU,AAAK,AAAM,kBAAE,MAC3D,AAAK;;;IAGb;YAGwB;;AACtB,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AACT,iCADG,KAAK,KACL,AAAM,AAAK,KAAN,cAAS;IACvB;;AAGoB,YAAA,AAAK;IAAQ;;AAI/B,YAAU,AAAiD,0BAA/B,MAAM,mBAAiB,eAAE,aAAI;IAC3D;;;QAnGiC;UAAmC,AAAK,IAAD;AAAW,iEAAY,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;;;;IA+GvF;;;;;;;;;;;;AAIX,YAAkB,gCAAI,AAAK;IAC7B;UAGyB;AACvB,YAAO,sDACC,AAAK,gBAAM,CAAC,eACN,CAAC;IAEjB;aAGmC,GAAU;AAC3C,YAAO,AAAE,CAAD;AACR,UAAM,gCAAF,CAAC;AACH,cAAO,sDACY,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC,eACzB,AAAW,kBAAE,CAAC;;AAG9B,UAAM,8BAAF,CAAC;AACH,cAAO,sDACY,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC,eACzB,AAAW,kBAAqB,CAAlB,AAAI,MAAE,oBAAe,AAAI,MAAE,CAAC;;AAG1D,UAAM,yCAAF,CAAC;AACH,cAAO,sDACY,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC,eACiB,eAAvC,cAAW,AAAE,CAAD,aAAa,iBAAY,CAAC;;AAGzD,YAAa,gBAAS,CAAC,EAAE,CAAC;IAC5B;WAGiC,GAAU;AACzC,YAAO,AAAE,CAAD;AACR,UAAM,gCAAF,CAAC;AACH,cAAO,sDACY,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC,eACzB,AAAW,mBAAG,AAAI,MAAE,CAAC;;AAGrC,UAAM,8BAAF,CAAC;AACH,cAAO,sDACY,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC,eACzB,AAAW,kBAAqB,CAAlB,AAAI,MAAE,mBAAc,CAAC;;AAGnD,UAAM,yCAAF,CAAC;AACH,cAAO,sDACY,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC,eACiB,eAAvC,cAAW,iBAAY,AAAE,CAAD,aAAa,CAAC;;AAGzD,YAAa,cAAO,CAAC,EAAE,CAAC;IAC1B;kBAEsB;AACpB,UAAI,AAAW,oBAAG,OAAO,AAAK,AAAM,IAAP,WAAU,AAAK,IAAD,SACzC,MAAO,KAAI;AACb,UAAI,AAAK,AAAM,IAAP,SAAS,AAAK,IAAD;AACN,oBAAQ,AAAW,AAA6B,mBAA1B,AAAK,AAAO,IAAR,UAAU,AAAK,IAAD,UAAU;AAC/D,cAAY,sBACV,AAAK,IAAD,OACJ,AAAK,AAAI,IAAL,OAAO,KAAK,EAChB,AAAK,IAAD,QACJ,AAAK,AAAO,IAAR,UAAU,KAAK;;AAGR,oBAAQ,AAAW,AAA6B,mBAA1B,AAAK,AAAM,IAAP,SAAS,AAAK,IAAD,WAAW;AAC/D,cAAY,sBACV,AAAK,AAAK,IAAN,QAAQ,KAAK,EACjB,AAAK,IAAD,MACJ,AAAK,AAAM,IAAP,SAAS,KAAK,EAClB,AAAK,IAAD;;IAGV;0BAEsC;AACpC,YAAoB,yCAAS,AAAK,AAAa,IAAd,gBAAgB;IACnD;iBAGuB;;UAAuB;AAC5C,WAAO;;AACH,oBAAS,AAA0B,AAA2B,0BAAjC,IAAI,UAAU,kBAAY,IAAI,WAAW,AAAK;;;IACjF;iBAGuB;;UAAuB;AAC5C,WAAO;;AACH,oBAAS,AAA0B,0BAAN,IAAI,UAAU,kBAAY,IAAI;;;IACjE;;;UAG8C;UAAc;AAC1D,YAAO,uDACM,KAAL,IAAI,EAAJ,aAAa,8BACI,MAAX,UAAU,EAAV,cAAmB;IAEnC;UAGkB,QAAa;;UAAuB;AACpD,cAAQ,AAAK;;;AAET;;;;AAEa,sBAAQ,AAAK;AAC1B,cAAI,AAAM,KAAD,KAAI;AAC2E,YAAtF,AAAO,MAAD,WAAW,AAA0B,0BAAN,IAAI,UAAU,kBAAY,IAAI,IAAI,AAAK;;AAEhE,wBAAQ,AAA0B,0BAAN,IAAI,UAAU,kBAAY,IAAI;AAC1D,wBAAQ,AAAM,KAAD,SAAS,KAAK;AAC3B,8CAAQ;AAChB,yBAAQ,AAAK;;;AACqB,YAAtC,AAAO,MAAD,YAAY,KAAK,EAAE,KAAK,EAAE,KAAK;;;;IAG7C;YAGwB;;AACtB,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAET,0CAFG,KAAK,KACL,AAAM,AAAK,KAAN,cAAS,cACd,AAAM,AAAW,KAAZ,gBAAe;IAC7B;;AAGoB,2BAAW,WAAM;IAAW;;AAI9C,YAAO,6BAAgB,aAAI,OAAuB,CAAlB,AAAW,kBAAE,uBAAqB,KAAG,OAC9D;IACT;;;QAtJa;QACN;;UACK,AAAK,IAAD;UACJ,AAAW,UAAD;AACjB,0EAAY,IAAI;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgKH;;;;;;IAEN;;;;;;;;;;;;;AAIX,YAAkB,gCAAI,AAAK;IAC7B;UAGyB;AACvB,YAAO,gEACC,AAAK,gBAAM,CAAC,iBACJ,AAAa,uBAAE,CAAC,aACpB,CAAC;IAEf;aAGmC,GAAU;AAC3C,YAAO,AAAE,CAAD;AACR,UAAM,gCAAF,CAAC;AACH,cAAO,gEACY,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC,iBACvB,6BACJ,AAAS,gBAAE,CAAC;;AAG1B,UAAM,mDAAF,CAAC;AACH,cAAO,gEACY,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC,iBACvB,6BACJ,AAAS,gBAAmB,CAAhB,AAAI,MAAE,kBAAa,AAAI,MAAE,CAAC;;AAGpD,UAAM,mDAAF,CAAC;AACH,cAAO,gEACY,wBAAK,AAAE,CAAD,OAAO,WAAM,CAAC,iBAC2B,eAArC,gCAAK,AAAE,CAAD,eAAe,mBAAc,CAAC,cACf,eAAnC,cAAW,AAAE,CAAD,WAAW,eAAU,CAAC;;AAGnD,YAAa,gBAAS,CAAC,EAAE,CAAC;IAC5B;WAGiC,GAAU;AACzC,YAAO,AAAE,CAAD;AACR,UAAM,gCAAF,CAAC;AACH,cAAO,gEACY,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC,iBACvB,6BACJ,AAAS,iBAAG,AAAI,MAAE,CAAC;;AAGjC,UAAM,mDAAF,CAAC;AACH,cAAO,gEACY,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC,iBACvB,6BACJ,AAAS,gBAAmB,CAAhB,AAAI,MAAE,iBAAY,CAAC;;AAG7C,UAAM,mDAAF,CAAC;AACH,cAAO,gEACY,wBAAK,WAAM,AAAE,CAAD,OAAO,CAAC,iBAC2B,eAArC,gCAAK,mBAAc,AAAE,CAAD,eAAe,CAAC,cACf,eAAnC,cAAW,eAAU,AAAE,CAAD,WAAW,CAAC;;AAGnD,YAAa,cAAO,CAAC,EAAE,CAAC;IAC1B;0BAEsC;AACpC,YAIC,gBAJmB,gCAClB,mBACa,mCAAW,uBAAS,AAAK,AAAa,IAAd,gBAAgB,OACrD,AAAI,MAAE;IAEV;iBAGuB;;UAAuB;AAC5C,WAAO;;AACH,oBAAS,AAA0B,AAAc,0BAApB,IAAI,UAAU,IAAI,UAAU,AAAK;;;IACpE;iBAGuB;;UAAuB;AAC5C,WAAO;;AACH,oBAAS,AAA0B,0BAAN,IAAI,UAAU,IAAI;;;IACrD;;;UAGwD;UAAoB;UAAsB;AAChG,YAAO,iEACM,KAAL,IAAI,EAAJ,aAAa,gCACQ,MAAb,YAAY,EAAZ,cAAqB,qCAChB,OAAT,QAAQ,EAAR,eAAiB;IAE/B;UAGkB,QAAa;;UAAuB;AACpD,cAAQ,AAAK;;;AAET;;;;AAEa,sBAAQ,AAAK;AAC1B,cAAI,AAAM,KAAD,KAAI;AAC8D,YAAzE,AAAO,MAAD,WAAW,AAA0B,0BAAN,IAAI,UAAU,IAAI,GAAG,AAAK;;AAEnD,wBAAQ,AAA0B,0BAAN,IAAI,UAAU,IAAI;AAC9C,wBAAQ,AAAM,KAAD,SAAS,KAAK;AAC3B,8CAAQ;AAChB,yBAAQ,AAAK;;;AACqB,YAAtC,AAAO,MAAD,YAAY,KAAK,EAAE,KAAK,EAAE,KAAK;;;;IAG7C;YAGwB;;AACtB,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAGT,oDAHG,KAAK,KACL,AAAM,AAAK,KAAN,cAAS,cACd,AAAM,AAAa,KAAd,sBAAiB,sBACtB,AAAM,AAAS,KAAV,cAAa;IAC3B;;AAGoB,2BAAW,WAAM,mBAAc;IAAS;;AAI1D,YAAO,6BAAgB,aAAI,gBAAG,qBAAY,OACf,CAAhB,AAAS,gBAAE,uBAAqB,KAAG,6BACvC;IACT;;;QAlJa;QACN;QACA;IADA;IACA;UACK,AAAK,IAAD;UACJ,AAAa,YAAD;UACZ,AAAS,QAAD;AACf,oFAAY,IAAI;;EAAC","file":"../../../../../../../../../../packages/flutter/src/painting/stadium_border.dart.lib.js"}');
  // Exports:
  return {
    src__painting__stadium_border: stadium_border
  };
}));

//# sourceMappingURL=stadium_border.dart.lib.js.map
