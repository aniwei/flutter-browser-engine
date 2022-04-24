define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__painting__box_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var box_border = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    BorderN: () => (T.BorderN = dart.constFn(dart.nullable(box_border.Border)))(),
    BorderDirectionalN: () => (T.BorderDirectionalN = dart.constFn(dart.nullable(box_border.BorderDirectional)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "rectangle",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_Enum__name]: "circle",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.constList([C[0] || CT.C0, C[1] || CT.C1], box_border.BoxShape);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C[4] || CT.C4,
        [BorderSide_width]: 0,
        [BorderSide_color]: C[5] || CT.C5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "package:flutter/src/painting/box_border.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/box_border.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  box_border.BoxShape = class BoxShape extends core._Enum {
    toString() {
      return "BoxShape." + this[_name];
    }
  };
  (box_border.BoxShape.new = function(index, name) {
    box_border.BoxShape.__proto__.new.call(this, index, name);
    ;
  }).prototype = box_border.BoxShape.prototype;
  dart.addTypeTests(box_border.BoxShape);
  dart.addTypeCaches(box_border.BoxShape);
  dart.setLibraryUri(box_border.BoxShape, I[0]);
  dart.setStaticFieldSignature(box_border.BoxShape, () => ['values', 'rectangle', 'circle']);
  dart.defineExtensionMethods(box_border.BoxShape, ['toString']);
  box_border.BoxShape.rectangle = C[0] || CT.C0;
  box_border.BoxShape.circle = C[1] || CT.C1;
  box_border.BoxShape.values = C[2] || CT.C2;
  box_border.BoxBorder = class BoxBorder extends borders.ShapeBorder {
    add(other, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      return null;
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[1], 106, 12, "t != null");
      if (T.BorderN().is(a) && T.BorderN().is(b)) return box_border.Border.lerp(a, b, t);
      if (T.BorderDirectionalN().is(a) && T.BorderDirectionalN().is(b)) return box_border.BorderDirectional.lerp(a, b, t);
      if (box_border.Border.is(b) && box_border.BorderDirectional.is(a)) {
        let c = b;
        b = a;
        a = c;
        t = 1.0 - t;
      }
      if (box_border.Border.is(a) && box_border.BorderDirectional.is(b)) {
        if (b.start._equals(borders.BorderSide.none) && b.end._equals(borders.BorderSide.none)) {
          return new box_border.Border.new({top: borders.BorderSide.lerp(a.top, b.top, t), right: borders.BorderSide.lerp(a.right, borders.BorderSide.none, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), left: borders.BorderSide.lerp(a.left, borders.BorderSide.none, t)});
        }
        if (a.left._equals(borders.BorderSide.none) && a.right._equals(borders.BorderSide.none)) {
          return new box_border.BorderDirectional.new({top: borders.BorderSide.lerp(a.top, b.top, t), start: borders.BorderSide.lerp(borders.BorderSide.none, b.start, t), end: borders.BorderSide.lerp(borders.BorderSide.none, b.end, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t)});
        }
        if (t < 0.5) {
          return new box_border.Border.new({top: borders.BorderSide.lerp(a.top, b.top, t), right: borders.BorderSide.lerp(a.right, borders.BorderSide.none, t * 2.0), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), left: borders.BorderSide.lerp(a.left, borders.BorderSide.none, t * 2.0)});
        }
        return new box_border.BorderDirectional.new({top: borders.BorderSide.lerp(a.top, b.top, t), start: borders.BorderSide.lerp(borders.BorderSide.none, b.start, (t - 0.5) * 2.0), end: borders.BorderSide.lerp(borders.BorderSide.none, b.end, (t - 0.5) * 2.0), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t)});
      }
      dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("BoxBorder.lerp can only interpolate Border and BorderDirectional classes."), new assertions.ErrorDescription.new("BoxBorder.lerp() was called with two objects of type " + dart.str(dart.runtimeType(a)) + " and " + dart.str(dart.runtimeType(b)) + ":\n" + "  " + dart.str(a) + "\n" + "  " + dart.str(b) + "\n" + "However, only Border and BorderDirectional classes are supported by this method."), new assertions.ErrorHint.new("For a more general interpolation method, consider using ShapeBorder.lerp instead.")])));
    }
    getInnerPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(textDirection != null)) dart.assertFailed("The textDirection argument to " + dart.str(this[$runtimeType]) + ".getInnerPath must not be null.", I[1], 169, 12, "textDirection != null");
      t0 = ui.Path.new();
      return (() => {
        t0.addRect(this.dimensions.resolve(textDirection).deflateRect(rect));
        return t0;
      })();
    }
    getOuterPath(rect, opts) {
      let t0;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(textDirection != null)) dart.assertFailed("The textDirection argument to " + dart.str(this[$runtimeType]) + ".getOuterPath must not be null.", I[1], 176, 12, "textDirection != null");
      t0 = ui.Path.new();
      return (() => {
        t0.addRect(rect);
        return t0;
      })();
    }
    static _paintUniformBorderWithRadius(canvas, rect, side, borderRadius) {
      let t0, t0$;
      if (!(side.style !== borders.BorderStyle.none)) dart.assertFailed(null, I[1], 210, 12, "side.style != BorderStyle.none");
      let paint = (t0 = ui.Paint.new(), (() => {
        t0.color = side.color;
        return t0;
      })());
      let outer = borderRadius.toRRect(rect);
      let width = side.width;
      if (width === 0.0) {
        t0$ = paint;
        (() => {
          t0$.style = ui.PaintingStyle.stroke;
          t0$.strokeWidth = 0.0;
          return t0$;
        })();
        canvas.drawRRect(outer, paint);
      } else {
        let inner = outer.deflate(width);
        canvas.drawDRRect(outer, inner, paint);
      }
    }
    static _paintUniformBorderWithCircle(canvas, rect, side) {
      if (!(side.style !== borders.BorderStyle.none)) dart.assertFailed(null, I[1], 227, 12, "side.style != BorderStyle.none");
      let width = side.width;
      let paint = side.toPaint();
      let radius = (rect.shortestSide - width) / 2.0;
      canvas.drawCircle(rect.center, radius, paint);
    }
    static _paintUniformBorderWithRectangle(canvas, rect, side) {
      if (!(side.style !== borders.BorderStyle.none)) dart.assertFailed(null, I[1], 235, 12, "side.style != BorderStyle.none");
      let width = side.width;
      let paint = side.toPaint();
      canvas.drawRect(rect.deflate(width / 2.0), paint);
    }
  };
  (box_border.BoxBorder.new = function() {
    box_border.BoxBorder.__proto__.new.call(this);
    ;
  }).prototype = box_border.BoxBorder.prototype;
  dart.addTypeTests(box_border.BoxBorder);
  dart.addTypeCaches(box_border.BoxBorder);
  dart.setMethodSignature(box_border.BoxBorder, () => ({
    __proto__: dart.getMethods(box_border.BoxBorder.__proto__),
    add: dart.fnType(dart.nullable(box_border.BoxBorder), [borders.ShapeBorder], {reversed: core.bool}, {}),
    getInnerPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {}),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect], {textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setStaticMethodSignature(box_border.BoxBorder, () => ['lerp', '_paintUniformBorderWithRadius', '_paintUniformBorderWithCircle', '_paintUniformBorderWithRectangle']);
  dart.setLibraryUri(box_border.BoxBorder, I[0]);
  var top$ = dart.privateName(box_border, "Border.top");
  var right$ = dart.privateName(box_border, "Border.right");
  var bottom$ = dart.privateName(box_border, "Border.bottom");
  var left$ = dart.privateName(box_border, "Border.left");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var _colorIsUniform = dart.privateName(box_border, "_colorIsUniform");
  var _widthIsUniform = dart.privateName(box_border, "_widthIsUniform");
  var _styleIsUniform = dart.privateName(box_border, "_styleIsUniform");
  box_border.Border = class Border extends box_border.BoxBorder {
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
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    static ['_#new#tearOff'](opts) {
      let top = opts && 'top' in opts ? opts.top : C[3] || CT.C3;
      let right = opts && 'right' in opts ? opts.right : C[3] || CT.C3;
      let bottom = opts && 'bottom' in opts ? opts.bottom : C[3] || CT.C3;
      let left = opts && 'left' in opts ? opts.left : C[3] || CT.C3;
      return new box_border.Border.new({top: top, right: right, bottom: bottom, left: left});
    }
    static ['_#fromBorderSide#tearOff'](side) {
      return new box_border.Border.fromBorderSide(side);
    }
    static ['_#symmetric#tearOff'](opts) {
      let vertical = opts && 'vertical' in opts ? opts.vertical : C[3] || CT.C3;
      let horizontal = opts && 'horizontal' in opts ? opts.horizontal : C[3] || CT.C3;
      return new box_border.Border.symmetric({vertical: vertical, horizontal: horizontal});
    }
    static all(opts) {
      let color = opts && 'color' in opts ? opts.color : C[5] || CT.C5;
      let width = opts && 'width' in opts ? opts.width : 1;
      let style = opts && 'style' in opts ? opts.style : C[6] || CT.C6;
      let side = new borders.BorderSide.new({color: color, width: width, style: style});
      return new box_border.Border.fromBorderSide(side);
    }
    static ['_#all#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : C[5] || CT.C5;
      let width = opts && 'width' in opts ? opts.width : 1;
      let style = opts && 'style' in opts ? opts.style : C[6] || CT.C6;
      return box_border.Border.all({color: color, width: width, style: style});
    }
    static merge(a, b) {
      if (!(a !== null)) dart.assertFailed(null, I[1], 365, 12, "a != null");
      if (!(b !== null)) dart.assertFailed(null, I[1], 366, 12, "b != null");
      if (!borders.BorderSide.canMerge(a.top, b.top)) dart.assertFailed(null, I[1], 367, 12, "BorderSide.canMerge(a.top, b.top)");
      if (!borders.BorderSide.canMerge(a.right, b.right)) dart.assertFailed(null, I[1], 368, 12, "BorderSide.canMerge(a.right, b.right)");
      if (!borders.BorderSide.canMerge(a.bottom, b.bottom)) dart.assertFailed(null, I[1], 369, 12, "BorderSide.canMerge(a.bottom, b.bottom)");
      if (!borders.BorderSide.canMerge(a.left, b.left)) dart.assertFailed(null, I[1], 370, 12, "BorderSide.canMerge(a.left, b.left)");
      return new box_border.Border.new({top: borders.BorderSide.merge(a.top, b.top), right: borders.BorderSide.merge(a.right, b.right), bottom: borders.BorderSide.merge(a.bottom, b.bottom), left: borders.BorderSide.merge(a.left, b.left)});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.fromLTRB(this.left.width, this.top.width, this.right.width, this.bottom.width);
    }
    get isUniform() {
      return this[_colorIsUniform] && this[_widthIsUniform] && this[_styleIsUniform];
    }
    get [_colorIsUniform]() {
      let topColor = this.top.color;
      return this.right.color._equals(topColor) && this.bottom.color._equals(topColor) && this.left.color._equals(topColor);
    }
    get [_widthIsUniform]() {
      let topWidth = this.top.width;
      return this.right.width === topWidth && this.bottom.width === topWidth && this.left.width === topWidth;
    }
    get [_styleIsUniform]() {
      let topStyle = this.top.style;
      return this.right.style === topStyle && this.bottom.style === topStyle && this.left.style === topStyle;
    }
    add(other, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (box_border.Border.is(other) && borders.BorderSide.canMerge(this.top, other.top) && borders.BorderSide.canMerge(this.right, other.right) && borders.BorderSide.canMerge(this.bottom, other.bottom) && borders.BorderSide.canMerge(this.left, other.left)) {
        return box_border.Border.merge(this, other);
      }
      return null;
    }
    scale(t) {
      return new box_border.Border.new({top: this.top.scale(t), right: this.right.scale(t), bottom: this.bottom.scale(t), left: this.left.scale(t)});
    }
    lerpFrom(a, t) {
      if (box_border.Border.is(a)) return box_border.Border.lerp(a, this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (box_border.Border.is(b)) return box_border.Border.lerp(this, b, t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[1], 457, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - t);
      return new box_border.Border.new({top: borders.BorderSide.lerp(a.top, b.top, t), right: borders.BorderSide.lerp(a.right, b.right, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), left: borders.BorderSide.lerp(a.left, b.left, t)});
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let shape = opts && 'shape' in opts ? opts.shape : C[0] || CT.C0;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      if (this.isUniform) {
        switch (this.top.style) {
          case C[4] || CT.C4:
          {
            return;
          }
          case C[6] || CT.C6:
          {
            switch (shape) {
              case C[1] || CT.C1:
              {
                if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for rectangular boxes.", I[1], 506, 22, "borderRadius == null");
                box_border.BoxBorder._paintUniformBorderWithCircle(canvas, rect, this.top);
                break;
              }
              case C[0] || CT.C0:
              {
                if (borderRadius != null) {
                  box_border.BoxBorder._paintUniformBorderWithRadius(canvas, rect, this.top, borderRadius);
                  return;
                }
                box_border.BoxBorder._paintUniformBorderWithRectangle(canvas, rect, this.top);
                break;
              }
            }
            return;
          }
        }
      }
      if (!dart.fn(() => {
        if (borderRadius != null) {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t0 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A borderRadius can only be given for a uniform Border."), new assertions.ErrorDescription.new("The following is not uniform:")]);
            if (!this[_colorIsUniform]) t0.push(new assertions.ErrorDescription.new("BorderSide.color"));
            if (!this[_widthIsUniform]) t0.push(new assertions.ErrorDescription.new("BorderSide.width"));
            if (!this[_styleIsUniform]) t0.push(new assertions.ErrorDescription.new("BorderSide.style"));
            return t0;
          })()));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 521, 12, "() {\n      if (borderRadius != null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A borderRadius can only be given for a uniform Border.'),\n          ErrorDescription('The following is not uniform:'),\n          if (!_colorIsUniform) ErrorDescription('BorderSide.color'),\n          if (!_widthIsUniform) ErrorDescription('BorderSide.width'),\n          if (!_styleIsUniform) ErrorDescription('BorderSide.style'),\n        ]);\n      }\n      return true;\n    }()");
      if (!dart.fn(() => {
        if (shape !== box_border.BoxShape.rectangle) {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t1 = T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A Border can only be drawn as a circle if it is uniform"), new assertions.ErrorDescription.new("The following is not uniform:")]);
            if (!this[_colorIsUniform]) t1.push(new assertions.ErrorDescription.new("BorderSide.color"));
            if (!this[_widthIsUniform]) t1.push(new assertions.ErrorDescription.new("BorderSide.width"));
            if (!this[_styleIsUniform]) t1.push(new assertions.ErrorDescription.new("BorderSide.style"));
            return t1;
          })()));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 533, 12, "() {\n      if (shape != BoxShape.rectangle) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A Border can only be drawn as a circle if it is uniform'),\n          ErrorDescription('The following is not uniform:'),\n          if (!_colorIsUniform) ErrorDescription('BorderSide.color'),\n          if (!_widthIsUniform) ErrorDescription('BorderSide.width'),\n          if (!_styleIsUniform) ErrorDescription('BorderSide.style'),\n        ]);\n      }\n      return true;\n    }()");
      borders.paintBorder(canvas, rect, {top: this.top, right: this.right, bottom: this.bottom, left: this.left});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return box_border.Border.is(other) && other.top._equals(this.top) && other.right._equals(this.right) && other.bottom._equals(this.bottom) && other.left._equals(this.left);
    }
    get hashCode() {
      return ui.hashValues(this.top, this.right, this.bottom, this.left);
    }
    toString() {
      if (this.isUniform) return object.objectRuntimeType(this, "Border") + ".all(" + dart.str(this.top) + ")";
      let $arguments = (() => {
        let t2 = T.JSArrayOfString().of([]);
        if (!this.top._equals(borders.BorderSide.none)) t2.push("top: " + dart.str(this.top));
        if (!this.right._equals(borders.BorderSide.none)) t2.push("right: " + dart.str(this.right));
        if (!this.bottom._equals(borders.BorderSide.none)) t2.push("bottom: " + dart.str(this.bottom));
        if (!this.left._equals(borders.BorderSide.none)) t2.push("left: " + dart.str(this.left));
        return t2;
      })();
      return object.objectRuntimeType(this, "Border") + "(" + $arguments[$join](", ") + ")";
    }
  };
  (box_border.Border.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C[3] || CT.C3;
    let right = opts && 'right' in opts ? opts.right : C[3] || CT.C3;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C[3] || CT.C3;
    let left = opts && 'left' in opts ? opts.left : C[3] || CT.C3;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[left$] = left;
    if (!(top !== null)) dart.assertFailed(null, I[1], 314, 15, "top != null");
    if (!(right !== null)) dart.assertFailed(null, I[1], 315, 15, "right != null");
    if (!(bottom !== null)) dart.assertFailed(null, I[1], 316, 15, "bottom != null");
    if (!(left !== null)) dart.assertFailed(null, I[1], 317, 15, "left != null");
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  (box_border.Border.fromBorderSide = function(side) {
    if (!(side !== null)) dart.assertFailed(null, I[1], 323, 16, "side != null");
    this[top$] = side;
    this[right$] = side;
    this[bottom$] = side;
    this[left$] = side;
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  (box_border.Border.symmetric = function(opts) {
    let vertical = opts && 'vertical' in opts ? opts.vertical : C[3] || CT.C3;
    let horizontal = opts && 'horizontal' in opts ? opts.horizontal : C[3] || CT.C3;
    if (!(vertical !== null)) dart.assertFailed(null, I[1], 338, 15, "vertical != null");
    if (!(horizontal !== null)) dart.assertFailed(null, I[1], 339, 15, "horizontal != null");
    this[left$] = vertical;
    this[top$] = horizontal;
    this[right$] = vertical;
    this[bottom$] = horizontal;
    box_border.Border.__proto__.new.call(this);
    ;
  }).prototype = box_border.Border.prototype;
  dart.addTypeTests(box_border.Border);
  dart.addTypeCaches(box_border.Border);
  dart.setMethodSignature(box_border.Border, () => ({
    __proto__: dart.getMethods(box_border.Border.__proto__),
    add: dart.fnType(dart.nullable(box_border.Border), [borders.ShapeBorder], {reversed: core.bool}, {}),
    scale: dart.fnType(box_border.Border, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {borderRadius: dart.nullable(border_radius.BorderRadius), shape: box_border.BoxShape, textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setStaticMethodSignature(box_border.Border, () => ['all', 'merge', 'lerp']);
  dart.setGetterSignature(box_border.Border, () => ({
    __proto__: dart.getGetters(box_border.Border.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry,
    isUniform: core.bool,
    [_colorIsUniform]: core.bool,
    [_widthIsUniform]: core.bool,
    [_styleIsUniform]: core.bool
  }));
  dart.setLibraryUri(box_border.Border, I[0]);
  dart.setFieldSignature(box_border.Border, () => ({
    __proto__: dart.getFields(box_border.Border.__proto__),
    top: dart.finalFieldType(borders.BorderSide),
    right: dart.finalFieldType(borders.BorderSide),
    bottom: dart.finalFieldType(borders.BorderSide),
    left: dart.finalFieldType(borders.BorderSide)
  }));
  dart.defineExtensionMethods(box_border.Border, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_border.Border, ['hashCode']);
  var top$0 = dart.privateName(box_border, "BorderDirectional.top");
  var start$ = dart.privateName(box_border, "BorderDirectional.start");
  var end$ = dart.privateName(box_border, "BorderDirectional.end");
  var bottom$0 = dart.privateName(box_border, "BorderDirectional.bottom");
  box_border.BorderDirectional = class BorderDirectional extends box_border.BoxBorder {
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
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
    static ['_#new#tearOff'](opts) {
      let top = opts && 'top' in opts ? opts.top : C[3] || CT.C3;
      let start = opts && 'start' in opts ? opts.start : C[3] || CT.C3;
      let end = opts && 'end' in opts ? opts.end : C[3] || CT.C3;
      let bottom = opts && 'bottom' in opts ? opts.bottom : C[3] || CT.C3;
      return new box_border.BorderDirectional.new({top: top, start: start, end: end, bottom: bottom});
    }
    static merge(a, b) {
      if (!(a !== null)) dart.assertFailed(null, I[1], 626, 12, "a != null");
      if (!(b !== null)) dart.assertFailed(null, I[1], 627, 12, "b != null");
      if (!borders.BorderSide.canMerge(a.top, b.top)) dart.assertFailed(null, I[1], 628, 12, "BorderSide.canMerge(a.top, b.top)");
      if (!borders.BorderSide.canMerge(a.start, b.start)) dart.assertFailed(null, I[1], 629, 12, "BorderSide.canMerge(a.start, b.start)");
      if (!borders.BorderSide.canMerge(a.end, b.end)) dart.assertFailed(null, I[1], 630, 12, "BorderSide.canMerge(a.end, b.end)");
      if (!borders.BorderSide.canMerge(a.bottom, b.bottom)) dart.assertFailed(null, I[1], 631, 12, "BorderSide.canMerge(a.bottom, b.bottom)");
      return new box_border.BorderDirectional.new({top: borders.BorderSide.merge(a.top, b.top), start: borders.BorderSide.merge(a.start, b.start), end: borders.BorderSide.merge(a.end, b.end), bottom: borders.BorderSide.merge(a.bottom, b.bottom)});
    }
    get dimensions() {
      return new edge_insets.EdgeInsetsDirectional.fromSTEB(this.start.width, this.top.width, this.end.width, this.bottom.width);
    }
    get isUniform() {
      let topColor = this.top.color;
      if (!this.start.color._equals(topColor) || !this.end.color._equals(topColor) || !this.bottom.color._equals(topColor)) return false;
      let topWidth = this.top.width;
      if (this.start.width !== topWidth || this.end.width !== topWidth || this.bottom.width !== topWidth) return false;
      let topStyle = this.top.style;
      if (this.start.style !== topStyle || this.end.style !== topStyle || this.bottom.style !== topStyle) return false;
      return true;
    }
    add(other, opts) {
      let reversed = opts && 'reversed' in opts ? opts.reversed : false;
      if (box_border.BorderDirectional.is(other)) {
        let typedOther = other;
        if (borders.BorderSide.canMerge(this.top, typedOther.top) && borders.BorderSide.canMerge(this.start, typedOther.start) && borders.BorderSide.canMerge(this.end, typedOther.end) && borders.BorderSide.canMerge(this.bottom, typedOther.bottom)) {
          return box_border.BorderDirectional.merge(this, typedOther);
        }
        return null;
      }
      if (box_border.Border.is(other)) {
        let typedOther = other;
        if (!borders.BorderSide.canMerge(typedOther.top, this.top) || !borders.BorderSide.canMerge(typedOther.bottom, this.bottom)) return null;
        if (!this.start._equals(borders.BorderSide.none) || !this.end._equals(borders.BorderSide.none)) {
          if (!typedOther.left._equals(borders.BorderSide.none) || !typedOther.right._equals(borders.BorderSide.none)) return null;
          if (!typedOther.left._equals(borders.BorderSide.none)) dart.assertFailed(null, I[1], 716, 16, "typedOther.left == BorderSide.none");
          if (!typedOther.right._equals(borders.BorderSide.none)) dart.assertFailed(null, I[1], 717, 16, "typedOther.right == BorderSide.none");
          return new box_border.BorderDirectional.new({top: borders.BorderSide.merge(typedOther.top, this.top), start: this.start, end: this.end, bottom: borders.BorderSide.merge(typedOther.bottom, this.bottom)});
        }
        if (!this.start._equals(borders.BorderSide.none)) dart.assertFailed(null, I[1], 725, 14, "start == BorderSide.none");
        if (!this.end._equals(borders.BorderSide.none)) dart.assertFailed(null, I[1], 726, 14, "end == BorderSide.none");
        return new box_border.Border.new({top: borders.BorderSide.merge(typedOther.top, this.top), right: typedOther.right, bottom: borders.BorderSide.merge(typedOther.bottom, this.bottom), left: typedOther.left});
      }
      return null;
    }
    scale(t) {
      return new box_border.BorderDirectional.new({top: this.top.scale(t), start: this.start.scale(t), end: this.end.scale(t), bottom: this.bottom.scale(t)});
    }
    lerpFrom(a, t) {
      if (box_border.BorderDirectional.is(a)) return box_border.BorderDirectional.lerp(a, this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (box_border.BorderDirectional.is(b)) return box_border.BorderDirectional.lerp(this, b, t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[1], 768, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - t);
      return new box_border.BorderDirectional.new({top: borders.BorderSide.lerp(a.top, b.top, t), end: borders.BorderSide.lerp(a.end, b.end, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), start: borders.BorderSide.lerp(a.start, b.start, t)});
    }
    paint(canvas, rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let shape = opts && 'shape' in opts ? opts.shape : C[0] || CT.C0;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      if (this.isUniform) {
        switch (this.top.style) {
          case C[4] || CT.C4:
          {
            return;
          }
          case C[6] || CT.C6:
          {
            switch (shape) {
              case C[1] || CT.C1:
              {
                if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for rectangular boxes.", I[1], 820, 22, "borderRadius == null");
                box_border.BoxBorder._paintUniformBorderWithCircle(canvas, rect, this.top);
                break;
              }
              case C[0] || CT.C0:
              {
                if (borderRadius != null) {
                  box_border.BoxBorder._paintUniformBorderWithRadius(canvas, rect, this.top, borderRadius);
                  return;
                }
                box_border.BoxBorder._paintUniformBorderWithRectangle(canvas, rect, this.top);
                break;
              }
            }
            return;
          }
        }
      }
      if (!(borderRadius == null)) dart.assertFailed("A borderRadius can only be given for uniform borders.", I[1], 835, 12, "borderRadius == null");
      if (!(shape === box_border.BoxShape.rectangle)) dart.assertFailed("A border can only be drawn as a circle if it is uniform.", I[1], 836, 12, "shape == BoxShape.rectangle");
      let left = null;
      let right = null;
      if (!(textDirection != null)) dart.assertFailed("Non-uniform BorderDirectional objects require a TextDirection when painting.", I[1], 839, 12, "textDirection != null");
      switch (dart.nullCheck(textDirection)) {
        case C[7] || CT.C7:
        {
          left = this.end;
          right = this.start;
          break;
        }
        case C[8] || CT.C8:
        {
          left = this.start;
          right = this.end;
          break;
        }
      }
      borders.paintBorder(canvas, rect, {top: this.top, left: left, bottom: this.bottom, right: right});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return box_border.BorderDirectional.is(other) && other.top._equals(this.top) && other.start._equals(this.start) && other.end._equals(this.end) && other.bottom._equals(this.bottom);
    }
    get hashCode() {
      return ui.hashValues(this.top, this.start, this.end, this.bottom);
    }
    toString() {
      let $arguments = (() => {
        let t3 = T.JSArrayOfString().of([]);
        if (!this.top._equals(borders.BorderSide.none)) t3.push("top: " + dart.str(this.top));
        if (!this.start._equals(borders.BorderSide.none)) t3.push("start: " + dart.str(this.start));
        if (!this.end._equals(borders.BorderSide.none)) t3.push("end: " + dart.str(this.end));
        if (!this.bottom._equals(borders.BorderSide.none)) t3.push("bottom: " + dart.str(this.bottom));
        return t3;
      })();
      return object.objectRuntimeType(this, "BorderDirectional") + "(" + $arguments[$join](", ") + ")";
    }
  };
  (box_border.BorderDirectional.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C[3] || CT.C3;
    let start = opts && 'start' in opts ? opts.start : C[3] || CT.C3;
    let end = opts && 'end' in opts ? opts.end : C[3] || CT.C3;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C[3] || CT.C3;
    this[top$0] = top;
    this[start$] = start;
    this[end$] = end;
    this[bottom$0] = bottom;
    if (!(top !== null)) dart.assertFailed(null, I[1], 613, 15, "top != null");
    if (!(start !== null)) dart.assertFailed(null, I[1], 614, 15, "start != null");
    if (!(end !== null)) dart.assertFailed(null, I[1], 615, 15, "end != null");
    if (!(bottom !== null)) dart.assertFailed(null, I[1], 616, 15, "bottom != null");
    box_border.BorderDirectional.__proto__.new.call(this);
    ;
  }).prototype = box_border.BorderDirectional.prototype;
  dart.addTypeTests(box_border.BorderDirectional);
  dart.addTypeCaches(box_border.BorderDirectional);
  dart.setMethodSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getMethods(box_border.BorderDirectional.__proto__),
    scale: dart.fnType(box_border.BorderDirectional, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {borderRadius: dart.nullable(border_radius.BorderRadius), shape: box_border.BoxShape, textDirection: dart.nullable(ui.TextDirection)}, {})
  }));
  dart.setStaticMethodSignature(box_border.BorderDirectional, () => ['merge', 'lerp']);
  dart.setGetterSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getGetters(box_border.BorderDirectional.__proto__),
    dimensions: edge_insets.EdgeInsetsGeometry,
    isUniform: core.bool
  }));
  dart.setLibraryUri(box_border.BorderDirectional, I[0]);
  dart.setFieldSignature(box_border.BorderDirectional, () => ({
    __proto__: dart.getFields(box_border.BorderDirectional.__proto__),
    top: dart.finalFieldType(borders.BorderSide),
    start: dart.finalFieldType(borders.BorderSide),
    end: dart.finalFieldType(borders.BorderSide),
    bottom: dart.finalFieldType(borders.BorderSide)
  }));
  dart.defineExtensionMethods(box_border.BorderDirectional, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box_border.BorderDirectional, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/painting/box_border.dart", {
    "package:flutter/src/painting/box_border.dart": box_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box_border.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyCA;;6CArBK;;;EAqBL;;;;;;;;;;QA4C6B;UAAc;AAAuB;IAAI;gBAmBlC,GAAc,GAAU;AACxD,YAAO,AAAE,CAAD;AACR,UAAO,eAAF,CAAC,KAAmB,eAAF,CAAC,GACtB,MAAc,wBAAK,CAAC,EAAE,CAAC,EAAE,CAAC;AAC5B,UAAO,0BAAF,CAAC,KAA8B,0BAAF,CAAC,GACjC,MAAyB,mCAAK,CAAC,EAAE,CAAC,EAAE,CAAC;AACvC,UAAM,qBAAF,CAAC,KAAgB,gCAAF,CAAC;AACF,gBAAI,CAAC;AAChB,QAAL,IAAI,CAAC;AACA,QAAL,IAAI,CAAC;AACM,QAAX,IAAI,AAAI,MAAE,CAAC;;AAGb,UAAM,qBAAF,CAAC,KAAgB,gCAAF,CAAC;AAClB,YAAI,AAAE,AAAM,CAAP,eAAqB,4BAAQ,AAAE,AAAI,CAAL,aAAmB;AAEpD,gBAAO,iCACW,wBAAK,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,UAClB,wBAAK,AAAE,CAAD,QAAmB,yBAAM,CAAC,WAC/B,wBAAK,AAAE,CAAD,SAAS,AAAE,CAAD,SAAS,CAAC,SAC5B,wBAAK,AAAE,CAAD,OAAkB,yBAAM,CAAC;;AAGpD,YAAI,AAAE,AAAK,CAAN,cAAoB,4BAAQ,AAAE,AAAM,CAAP,eAAqB;AAErD,gBAAO,4CACW,wBAAK,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,UAClB,wBAAgB,yBAAM,AAAE,CAAD,QAAQ,CAAC,QAClC,wBAAgB,yBAAM,AAAE,CAAD,MAAM,CAAC,WAC3B,wBAAK,AAAE,CAAD,SAAS,AAAE,CAAD,SAAS,CAAC;;AAMjD,YAAI,AAAE,CAAD,GAAG;AACN,gBAAO,iCACW,wBAAK,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,UAClB,wBAAK,AAAE,CAAD,QAAmB,yBAAM,AAAE,CAAD,GAAG,cAClC,wBAAK,AAAE,CAAD,SAAS,AAAE,CAAD,SAAS,CAAC,SAC5B,wBAAK,AAAE,CAAD,OAAkB,yBAAM,AAAE,CAAD,GAAG;;AAGvD,cAAO,4CACW,wBAAK,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,UAClB,wBAAgB,yBAAM,AAAE,CAAD,QAAkB,CAAT,AAAE,CAAD,GAAG,OAAO,WAC7C,wBAAgB,yBAAM,AAAE,CAAD,MAAgB,CAAT,AAAE,CAAD,GAAG,OAAO,cACtC,wBAAK,AAAE,CAAD,SAAS,AAAE,CAAD,SAAS,CAAC;;AAY/C,MATF,WAAmB,sCAA2B,iCAC5C,gCAAa,8EACb,oCAAgB,AACd,mEAA0D,iBAAF,CAAC,KAAa,mBAAS,iBAAF,CAAC,KAAa,QAC3F,gBAAI,CAAC,WACL,gBAAI,CAAC,WACL,qFAEF,6BAAU;IAEd;iBAGuB;;UAAuB;AAC5C,YAAO,AAAc,aAAD,6BAAU,AAA2E,4CAA3C,sBAAW;AACzE,WAAO;;AACH,mBAAQ,AAAW,AAAuB,wBAAf,aAAa,cAAc,IAAI;;;IAChE;iBAGuB;;UAAuB;AAC5C,YAAO,AAAc,aAAD,6BAAU,AAA2E,4CAA3C,sBAAW;AACzE,WAAO;;AACH,mBAAQ,IAAI;;;IAClB;yCA8BiD,QAAa,MAAiB,MAAmB;;AAChG,YAAO,AAAK,AAAM,IAAP,WAAsB;AACrB,wCAAQ;AAChB,mBAAQ,AAAK,IAAD;;;AACJ,kBAAQ,AAAa,YAAD,SAAS,IAAI;AAChC,kBAAQ,AAAK,IAAD;AACzB,UAAI,AAAM,KAAD,KAAI;AAGU,cAFrB,KAAK;QAAL;AACI,sBAAsB;AACtB,4BAAc;;;AACY,QAA9B,AAAO,MAAD,WAAW,KAAK,EAAE,KAAK;;AAEjB,oBAAQ,AAAM,KAAD,SAAS,KAAK;AACD,QAAtC,AAAO,MAAD,YAAY,KAAK,EAAE,KAAK,EAAE,KAAK;;IAEzC;yCAEiD,QAAa,MAAiB;AAC7E,YAAO,AAAK,AAAM,IAAP,WAAsB;AACpB,kBAAQ,AAAK,IAAD;AACb,kBAAQ,AAAK,IAAD;AACX,mBAAqC,CAA3B,AAAK,AAAa,IAAd,gBAAgB,KAAK,IAAI;AACP,MAA7C,AAAO,MAAD,YAAY,AAAK,IAAD,SAAS,MAAM,EAAE,KAAK;IAC9C;4CAEoD,QAAa,MAAiB;AAChF,YAAO,AAAK,AAAM,IAAP,WAAsB;AACpB,kBAAQ,AAAK,IAAD;AACb,kBAAQ,AAAK,IAAD;AACyB,MAAjD,AAAO,MAAD,UAAU,AAAK,IAAD,SAAS,AAAM,KAAD,GAAG,MAAM,KAAK;IAClD;;;AAhLM;;EAAW;;;;;;;;;;;;;;;;;;;;;;;IA6TA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;;;;;;;;;;;;;;;;;UAxCT;UACC;UACK;AAEK,iBAAO,mCAAkB,KAAK,SAAS,KAAK,SAAS,KAAK;AAC3E,YAAc,sCAAe,IAAI;IACnC;;;;;;;iBAS2B,GAAU;AACnC,YAAO,AAAE,CAAD;AACR,YAAO,AAAE,CAAD;AACR,WAAkB,4BAAS,AAAE,CAAD,MAAM,AAAE,CAAD;AACnC,WAAkB,4BAAS,AAAE,CAAD,QAAQ,AAAE,CAAD;AACrC,WAAkB,4BAAS,AAAE,CAAD,SAAS,AAAE,CAAD;AACtC,WAAkB,4BAAS,AAAE,CAAD,OAAO,AAAE,CAAD;AACpC,YAAO,iCACW,yBAAM,AAAE,CAAD,MAAM,AAAE,CAAD,cACZ,yBAAM,AAAE,CAAD,QAAQ,AAAE,CAAD,iBACf,yBAAM,AAAE,CAAD,SAAS,AAAE,CAAD,gBACnB,yBAAM,AAAE,CAAD,OAAO,AAAE,CAAD;IAEpC;;AAgBE,YAAkB,qCAAS,AAAK,iBAAO,AAAI,gBAAO,AAAM,kBAAO,AAAO;IACxE;;AAGsB,YAAA,AAAmC,0BAAhB,yBAAmB;IAAe;;AAG7D,qBAAW,AAAI;AAC3B,YAAO,AAAM,AAAM,AAAwC,0BAArC,QAAQ,KAAI,AAAO,AAAM,0BAAG,QAAQ,KAAI,AAAK,AAAM,wBAAG,QAAQ;IACtF;;AAGe,qBAAW,AAAI;AAC5B,YAAO,AAAM,AAAM,AAAwC,sBAArC,QAAQ,IAAI,AAAO,AAAM,sBAAG,QAAQ,IAAI,AAAK,AAAM,oBAAG,QAAQ;IACtF;;AAGoB,qBAAW,AAAI;AACjC,YAAO,AAAM,AAAM,AAAwC,sBAArC,QAAQ,IAAI,AAAO,AAAM,sBAAG,QAAQ,IAAI,AAAK,AAAM,oBAAG,QAAQ;IACtF;QAGwB;UAAc;AACpC,UAAU,qBAAN,KAAK,KACM,4BAAS,UAAK,AAAM,KAAD,SACnB,4BAAS,YAAO,AAAM,KAAD,WACrB,4BAAS,aAAQ,AAAM,KAAD,YACtB,4BAAS,WAAM,AAAM,KAAD;AACjC,cAAc,yBAAM,MAAM,KAAK;;AAEjC,YAAO;IACT;UAGoB;AAClB,YAAO,iCACA,AAAI,eAAM,CAAC,UACT,AAAM,iBAAM,CAAC,WACZ,AAAO,kBAAM,CAAC,SAChB,AAAK,gBAAM,CAAC;IAEtB;aAGmC,GAAU;AAC3C,UAAM,qBAAF,CAAC,GACH,MAAc,wBAAK,CAAC,EAAE,MAAM,CAAC;AAC/B,YAAa,gBAAS,CAAC,EAAE,CAAC;IAC5B;WAGiC,GAAU;AACzC,UAAM,qBAAF,CAAC,GACH,MAAc,wBAAK,MAAM,CAAC,EAAE,CAAC;AAC/B,YAAa,cAAO,CAAC,EAAE,CAAC;IAC1B;gBAQ4B,GAAW,GAAU;AAC/C,YAAO,AAAE,CAAD;AACR,UAAI,AAAE,CAAD,YAAY,AAAE,CAAD,UAChB,MAAO;AACT,UAAI,AAAE,CAAD,UACH,MAAQ,AAAE,gBAAH,CAAC,QAAQ,CAAC;AACnB,UAAI,AAAE,CAAD,UACH,MAAO,AAAE,EAAD,OAAO,AAAI,MAAE,CAAC;AACxB,YAAO,iCACW,wBAAK,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,UAClB,wBAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC,WACvB,wBAAK,AAAE,CAAD,SAAS,AAAE,CAAD,SAAS,CAAC,SAC5B,wBAAK,AAAE,CAAD,OAAO,AAAE,CAAD,OAAO,CAAC;IAE3C;UAuBS,QACF;UACU;UACN;UACK;AAEd,UAAI;AACF,gBAAQ,AAAI;;;AAER;;;;AAEA,oBAAQ,KAAK;;;AAET,sBAAO,AAAa,YAAD,6BAAU;AAC6B,gBAAhD,mDAA8B,MAAM,EAAE,IAAI,EAAE;AACtD;;;;AAEA,oBAAI,YAAY;AAC0D,kBAA9D,mDAA8B,MAAM,EAAE,IAAI,EAAE,UAAK,YAAY;AACvE;;AAE2D,gBAAnD,sDAAiC,MAAM,EAAE,IAAI,EAAE;AACzD;;;AAEJ;;;;AAIN,WAAO,AAWN;AAVC,YAAI,YAAY;AAOZ,UANF,WAAmB,sCAA2B;sDAC5C,gCAAa,2DACb,oCAAiB;AACjB,iBAAK,uBAAiB,4CAAiB;AACvC,iBAAK,uBAAiB,4CAAiB;AACvC,iBAAK,uBAAiB,4CAAiB;;;;AAG3C,cAAO;;AAET,WAAO,AAWN;AAVC,YAAI,KAAK,KAAa;AAOlB,UANF,WAAmB,sCAA2B;sDAC5C,gCAAa,4DACb,oCAAiB;AACjB,iBAAK,uBAAiB,4CAAiB;AACvC,iBAAK,uBAAiB,4CAAiB;AACvC,iBAAK,uBAAiB,4CAAiB;;;;AAG3C,cAAO;;AAGoE,MAA7E,oBAAY,MAAM,EAAE,IAAI,QAAO,iBAAY,oBAAe,mBAAc;IAC1E;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAIT,sBAJG,KAAK,KACL,AAAM,AAAI,KAAL,aAAQ,aACb,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAO,KAAR,gBAAW,gBAChB,AAAM,AAAK,KAAN,cAAS;IACvB;;AAGoB,2BAAW,UAAK,YAAO,aAAQ;IAAK;;AAItD,UAAI,gBACF,MAAU,AAA6C,0BAA3B,MAAM,YAAU,mBAAM,YAAG;AACpC,uBAAoB;;AACrC,aAAI,iBAAkB,0BAAiB,QAAX,mBAAO;AACnC,aAAI,mBAAoB,0BAAqB,QAAf,qBAAS;AACvC,aAAI,oBAAqB,0BAAuB,QAAjB,sBAAU;AACzC,aAAI,kBAAmB,0BAAmB,QAAb,oBAAQ;;;AAEvC,YAAU,AAA4D,0BAA1C,MAAM,YAAU,MAAG,AAAU,kBAAK,QAAM;IACtE;;;QA1QO;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;UACK,AAAI,GAAD;UACH,AAAM,KAAD;UACL,AAAO,MAAD;UACN,AAAK,IAAD;AARV;;EAQmB;+CAKc;UAC1B,AAAK,IAAD;IACP,aAAE,IAAI;IACJ,eAAE,IAAI;IACL,gBAAE,IAAI;IACR,cAAE,IAAI;AALX;;EAKW;;QASJ;QACA;UACD,AAAS,QAAD;UACR,AAAW,UAAD;IACZ,cAAE,QAAQ;IACX,aAAE,UAAU;IACV,eAAE,QAAQ;IACT,gBAAE,UAAU;AARlB;;EAQkB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0SP;;;;;;IAUA;;;;;;IAUA;;;;;;IAGA;;;;;;;;;;;;;iBAvCgC,GAAqB;AACpE,YAAO,AAAE,CAAD;AACR,YAAO,AAAE,CAAD;AACR,WAAkB,4BAAS,AAAE,CAAD,MAAM,AAAE,CAAD;AACnC,WAAkB,4BAAS,AAAE,CAAD,QAAQ,AAAE,CAAD;AACrC,WAAkB,4BAAS,AAAE,CAAD,MAAM,AAAE,CAAD;AACnC,WAAkB,4BAAS,AAAE,CAAD,SAAS,AAAE,CAAD;AACtC,YAAO,4CACW,yBAAM,AAAE,CAAD,MAAM,AAAE,CAAD,cACZ,yBAAM,AAAE,CAAD,QAAQ,AAAE,CAAD,cAClB,yBAAM,AAAE,CAAD,MAAM,AAAE,CAAD,eACX,yBAAM,AAAE,CAAD,SAAS,AAAE,CAAD;IAExC;;AA8BE,YAA6B,gDAAS,AAAM,kBAAO,AAAI,gBAAO,AAAI,gBAAO,AAAO;IAClF;;AAIc,qBAAW,AAAI;AAC3B,WAAI,AAAM,yBAAS,QAAQ,MACvB,AAAI,uBAAS,QAAQ,MACrB,AAAO,0BAAS,QAAQ,GAC1B,MAAO;AAEI,qBAAW,AAAI;AAC5B,UAAI,AAAM,qBAAS,QAAQ,IACvB,AAAI,mBAAS,QAAQ,IACrB,AAAO,sBAAS,QAAQ,EAC1B,MAAO;AAES,qBAAW,AAAI;AACjC,UAAI,AAAM,qBAAS,QAAQ,IACvB,AAAI,mBAAS,QAAQ,IACrB,AAAO,sBAAS,QAAQ,EAC1B,MAAO;AAET,YAAO;IACT;QAG2B;UAAc;AACvC,UAAU,gCAAN,KAAK;AACiB,yBAAa,KAAK;AAC1C,YAAe,4BAAS,UAAK,AAAW,UAAD,SACxB,4BAAS,YAAO,AAAW,UAAD,WAC1B,4BAAS,UAAK,AAAW,UAAD,SACxB,4BAAS,aAAQ,AAAW,UAAD;AACxC,gBAAyB,oCAAM,MAAM,UAAU;;AAEjD,cAAO;;AAET,UAAU,qBAAN,KAAK;AACM,yBAAa,KAAK;AAC/B,aAAgB,4BAAS,AAAW,UAAD,MAAM,cACzB,4BAAS,AAAW,UAAD,SAAS,cAC1C,MAAO;AACT,aAAI,mBAAoB,6BACpB,iBAAkB;AACpB,eAAI,AAAW,UAAD,cAAoB,6BAC9B,AAAW,UAAD,eAAqB,0BACjC,MAAO;AACT,eAAO,AAAW,AAAK,UAAN,cAAoB;AACrC,eAAO,AAAW,AAAM,UAAP,eAAqB;AACtC,gBAAO,4CACW,yBAAM,AAAW,UAAD,MAAM,kBAC/B,iBACF,kBACc,yBAAM,AAAW,UAAD,SAAS;;AAGhD,aAAO,AAAM,mBAAc;AAC3B,aAAO,AAAI,iBAAc;AACzB,cAAO,iCACW,yBAAM,AAAW,UAAD,MAAM,kBAC/B,AAAW,UAAD,gBACE,yBAAM,AAAW,UAAD,SAAS,oBACtC,AAAW,UAAD;;AAGpB,YAAO;IACT;UAG+B;AAC7B,YAAO,4CACA,AAAI,eAAM,CAAC,UACT,AAAM,iBAAM,CAAC,QACf,AAAI,eAAM,CAAC,WACR,AAAO,kBAAM,CAAC;IAE1B;aAGmC,GAAU;AAC3C,UAAM,gCAAF,CAAC,GACH,MAAyB,mCAAK,CAAC,EAAE,MAAM,CAAC;AAC1C,YAAa,gBAAS,CAAC,EAAE,CAAC;IAC5B;WAGiC,GAAU;AACzC,UAAM,gCAAF,CAAC,GACH,MAAyB,mCAAK,MAAM,CAAC,EAAE,CAAC;AAC1C,YAAa,cAAO,CAAC,EAAE,CAAC;IAC1B;gBAQkD,GAAsB,GAAU;AAChF,YAAO,AAAE,CAAD;AACR,UAAI,AAAE,CAAD,YAAY,AAAE,CAAD,UAChB,MAAO;AACT,UAAI,AAAE,CAAD,UACH,MAAQ,AAAE,gBAAH,CAAC,QAAQ,CAAC;AACnB,UAAI,AAAE,CAAD,UACH,MAAO,AAAE,EAAD,OAAO,AAAI,MAAE,CAAC;AACxB,YAAO,4CACW,wBAAK,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,QACpB,wBAAK,AAAE,CAAD,MAAM,AAAE,CAAD,MAAM,CAAC,WACjB,wBAAK,AAAE,CAAD,SAAS,AAAE,CAAD,SAAS,CAAC,UAC3B,wBAAK,AAAE,CAAD,QAAQ,AAAE,CAAD,QAAQ,CAAC;IAE9C;UA0BS,QACF;UACU;UACN;UACK;AAEd,UAAI;AACF,gBAAQ,AAAI;;;AAER;;;;AAEA,oBAAQ,KAAK;;;AAET,sBAAO,AAAa,YAAD,6BAAU;AAC6B,gBAAhD,mDAA8B,MAAM,EAAE,IAAI,EAAE;AACtD;;;;AAEA,oBAAI,YAAY;AAC0D,kBAA9D,mDAA8B,MAAM,EAAE,IAAI,EAAE,UAAK,YAAY;AACvE;;AAE2D,gBAAnD,sDAAiC,MAAM,EAAE,IAAI,EAAE;AACzD;;;AAEJ;;;;AAIN,YAAO,AAAa,YAAD,6BAAU;AAC7B,YAAO,AAAM,KAAD,KAAa,kDAAW;AAEzB;AAAM;AACjB,YAAO,AAAc,aAAD,6BAAU;AAC9B,cAAqB,eAAb,aAAa;;;AAEP,UAAV,OAAO;AACM,UAAb,QAAQ;AACR;;;;AAEY,UAAZ,OAAO;AACI,UAAX,QAAQ;AACR;;;AAEyE,MAA7E,oBAAY,MAAM,EAAE,IAAI,QAAO,gBAAW,IAAI,UAAU,oBAAe,KAAK;IAC9E;YAGwB;;AACtB,UAAI,AAAU,SAAM,KAAK,EACvB,MAAO;AACT,WAAI,AAAM,KAAD,uBAAgB,qBACvB,MAAO;AACT,YAAa,AAIT,iCAJG,KAAK,KACL,AAAM,AAAI,KAAL,aAAQ,aACb,AAAM,AAAM,KAAP,eAAU,eACf,AAAM,AAAI,KAAL,aAAQ,aACb,AAAM,AAAO,KAAR,gBAAW;IACzB;;AAGoB,2BAAW,UAAK,YAAO,UAAK;IAAO;;AAIlC,uBAAoB;;AACrC,aAAI,iBAAkB,0BAAiB,QAAX,mBAAO;AACnC,aAAI,mBAAoB,0BAAqB,QAAf,qBAAS;AACvC,aAAI,iBAAkB,0BAAiB,QAAX,mBAAO;AACnC,aAAI,oBAAqB,0BAAuB,QAAjB,sBAAU;;;AAE3C,YAAU,AAAuE,0BAArD,MAAM,uBAAqB,MAAG,AAAU,kBAAK,QAAM;IACjF;;;QA7QO;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;UACK,AAAI,GAAD;UACH,AAAM,KAAD;UACL,AAAI,GAAD;UACH,AAAO,MAAD;AARZ;;EAQqB","file":"../../../../../../../../../../packages/flutter/src/painting/box_border.dart.lib.js"}');
  // Exports:
  return {
    src__painting__box_border: box_border
  };
}));

//# sourceMappingURL=box_border.dart.lib.js.map
