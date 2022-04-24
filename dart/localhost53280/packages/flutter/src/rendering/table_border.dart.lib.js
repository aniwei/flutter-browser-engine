define(['dart_sdk', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__rendering__table_border_dart(dart_sdk, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var table_border = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $last = dartx.last;
  var $isNotEmpty = dartx.isNotEmpty;
  var $runtimeType = dartx.runtimeType;
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
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/table_border.dart",
    "package:flutter/src/rendering/table_border.dart"
  ];
  var top$ = dart.privateName(table_border, "TableBorder.top");
  var right$ = dart.privateName(table_border, "TableBorder.right");
  var bottom$ = dart.privateName(table_border, "TableBorder.bottom");
  var left$ = dart.privateName(table_border, "TableBorder.left");
  var horizontalInside$ = dart.privateName(table_border, "TableBorder.horizontalInside");
  var verticalInside$ = dart.privateName(table_border, "TableBorder.verticalInside");
  var borderRadius$ = dart.privateName(table_border, "TableBorder.borderRadius");
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
  table_border.TableBorder = class TableBorder extends core.Object {
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
    get horizontalInside() {
      return this[horizontalInside$];
    }
    set horizontalInside(value) {
      super.horizontalInside = value;
    }
    get verticalInside() {
      return this[verticalInside$];
    }
    set verticalInside(value) {
      super.verticalInside = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    static ['_#new#tearOff'](opts) {
      let top = opts && 'top' in opts ? opts.top : C[0] || CT.C0;
      let right = opts && 'right' in opts ? opts.right : C[0] || CT.C0;
      let bottom = opts && 'bottom' in opts ? opts.bottom : C[0] || CT.C0;
      let left = opts && 'left' in opts ? opts.left : C[0] || CT.C0;
      let horizontalInside = opts && 'horizontalInside' in opts ? opts.horizontalInside : C[0] || CT.C0;
      let verticalInside = opts && 'verticalInside' in opts ? opts.verticalInside : C[0] || CT.C0;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[3] || CT.C3;
      return new table_border.TableBorder.new({top: top, right: right, bottom: bottom, left: left, horizontalInside: horizontalInside, verticalInside: verticalInside, borderRadius: borderRadius});
    }
    static all(opts) {
      let color = opts && 'color' in opts ? opts.color : C[2] || CT.C2;
      let width = opts && 'width' in opts ? opts.width : 1;
      let style = opts && 'style' in opts ? opts.style : C[5] || CT.C5;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[3] || CT.C3;
      let side = new borders.BorderSide.new({color: color, width: width, style: style});
      return new table_border.TableBorder.new({top: side, right: side, bottom: side, left: side, horizontalInside: side, verticalInside: side, borderRadius: borderRadius});
    }
    static ['_#all#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : C[2] || CT.C2;
      let width = opts && 'width' in opts ? opts.width : 1;
      let style = opts && 'style' in opts ? opts.style : C[5] || CT.C5;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[3] || CT.C3;
      return table_border.TableBorder.all({color: color, width: width, style: style, borderRadius: borderRadius});
    }
    static symmetric(opts) {
      let inside = opts && 'inside' in opts ? opts.inside : C[0] || CT.C0;
      let outside = opts && 'outside' in opts ? opts.outside : C[0] || CT.C0;
      return new table_border.TableBorder.new({top: outside, right: outside, bottom: outside, left: outside, horizontalInside: inside, verticalInside: inside});
    }
    static ['_#symmetric#tearOff'](opts) {
      let inside = opts && 'inside' in opts ? opts.inside : C[0] || CT.C0;
      let outside = opts && 'outside' in opts ? opts.outside : C[0] || CT.C0;
      return table_border.TableBorder.symmetric({inside: inside, outside: outside});
    }
    get dimensions() {
      return new edge_insets.EdgeInsets.fromLTRB(this.left.width, this.top.width, this.right.width, this.bottom.width);
    }
    get isUniform() {
      if (!(this.top !== null)) dart.assertFailed(null, I[0], 90, 12, "top != null");
      if (!(this.right !== null)) dart.assertFailed(null, I[0], 91, 12, "right != null");
      if (!(this.bottom !== null)) dart.assertFailed(null, I[0], 92, 12, "bottom != null");
      if (!(this.left !== null)) dart.assertFailed(null, I[0], 93, 12, "left != null");
      if (!(this.horizontalInside !== null)) dart.assertFailed(null, I[0], 94, 12, "horizontalInside != null");
      if (!(this.verticalInside !== null)) dart.assertFailed(null, I[0], 95, 12, "verticalInside != null");
      let topColor = this.top.color;
      if (!this.right.color._equals(topColor) || !this.bottom.color._equals(topColor) || !this.left.color._equals(topColor) || !this.horizontalInside.color._equals(topColor) || !this.verticalInside.color._equals(topColor)) return false;
      let topWidth = this.top.width;
      if (this.right.width !== topWidth || this.bottom.width !== topWidth || this.left.width !== topWidth || this.horizontalInside.width !== topWidth || this.verticalInside.width !== topWidth) return false;
      let topStyle = this.top.style;
      if (this.right.style !== topStyle || this.bottom.style !== topStyle || this.left.style !== topStyle || this.horizontalInside.style !== topStyle || this.verticalInside.style !== topStyle) return false;
      return true;
    }
    scale(t) {
      return new table_border.TableBorder.new({top: this.top.scale(t), right: this.right.scale(t), bottom: this.bottom.scale(t), left: this.left.scale(t), horizontalInside: this.horizontalInside.scale(t), verticalInside: this.verticalInside.scale(t)});
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 157, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - t);
      return new table_border.TableBorder.new({top: borders.BorderSide.lerp(a.top, b.top, t), right: borders.BorderSide.lerp(a.right, b.right, t), bottom: borders.BorderSide.lerp(a.bottom, b.bottom, t), left: borders.BorderSide.lerp(a.left, b.left, t), horizontalInside: borders.BorderSide.lerp(a.horizontalInside, b.horizontalInside, t), verticalInside: borders.BorderSide.lerp(a.verticalInside, b.verticalInside, t)});
    }
    paint(canvas, rect, opts) {
      let t0, t0$, t0$0;
      let rows = opts && 'rows' in opts ? opts.rows : null;
      let columns = opts && 'columns' in opts ? opts.columns : null;
      if (!(this.top !== null)) dart.assertFailed(null, I[0], 207, 12, "top != null");
      if (!(this.right !== null)) dart.assertFailed(null, I[0], 208, 12, "right != null");
      if (!(this.bottom !== null)) dart.assertFailed(null, I[0], 209, 12, "bottom != null");
      if (!(this.left !== null)) dart.assertFailed(null, I[0], 210, 12, "left != null");
      if (!(this.horizontalInside !== null)) dart.assertFailed(null, I[0], 211, 12, "horizontalInside != null");
      if (!(this.verticalInside !== null)) dart.assertFailed(null, I[0], 212, 12, "verticalInside != null");
      if (!(canvas !== null)) dart.assertFailed(null, I[0], 215, 12, "canvas != null");
      if (!(rect !== null)) dart.assertFailed(null, I[0], 216, 12, "rect != null");
      if (!(rows !== null)) dart.assertFailed(null, I[0], 217, 12, "rows != null");
      if (!(rows[$isEmpty] || rows[$first] >= 0.0 && rows[$last] <= rect.height)) dart.assertFailed(null, I[0], 218, 12, "rows.isEmpty || (rows.first >= 0.0 && rows.last <= rect.height)");
      if (!(columns !== null)) dart.assertFailed(null, I[0], 219, 12, "columns != null");
      if (!(columns[$isEmpty] || columns[$first] >= 0.0 && columns[$last] <= rect.width)) dart.assertFailed(null, I[0], 220, 12, "columns.isEmpty || (columns.first >= 0.0 && columns.last <= rect.width)");
      if (columns[$isNotEmpty] || rows[$isNotEmpty]) {
        let paint = ui.Paint.new();
        let path = ui.Path.new();
        if (columns[$isNotEmpty]) {
          switch (this.verticalInside.style) {
            case C[5] || CT.C5:
            {
              t0 = paint;
              (() => {
                t0.color = this.verticalInside.color;
                t0.strokeWidth = this.verticalInside.width;
                t0.style = ui.PaintingStyle.stroke;
                return t0;
              })();
              path.reset();
              for (let x of columns) {
                path.moveTo(rect.left + x, rect.top);
                path.lineTo(rect.left + x, rect.bottom);
              }
              canvas.drawPath(path, paint);
              break;
            }
            case C[1] || CT.C1:
            {
              break;
            }
          }
        }
        if (rows[$isNotEmpty]) {
          switch (this.horizontalInside.style) {
            case C[5] || CT.C5:
            {
              t0$ = paint;
              (() => {
                t0$.color = this.horizontalInside.color;
                t0$.strokeWidth = this.horizontalInside.width;
                t0$.style = ui.PaintingStyle.stroke;
                return t0$;
              })();
              path.reset();
              for (let y of rows) {
                path.moveTo(rect.left, rect.top + y);
                path.lineTo(rect.right, rect.top + y);
              }
              canvas.drawPath(path, paint);
              break;
            }
            case C[1] || CT.C1:
            {
              break;
            }
          }
        }
      }
      if (!this.isUniform || this.borderRadius._equals(border_radius.BorderRadius.zero))
        borders.paintBorder(canvas, rect, {top: this.top, right: this.right, bottom: this.bottom, left: this.left});
      else {
        let outer = this.borderRadius.toRRect(rect);
        let inner = outer.deflate(this.top.width);
        let paint = (t0$0 = ui.Paint.new(), (() => {
          t0$0.color = this.top.color;
          return t0$0;
        })());
        canvas.drawDRRect(outer, inner, paint);
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return table_border.TableBorder.is(other) && other.top._equals(this.top) && other.right._equals(this.right) && other.bottom._equals(this.bottom) && other.left._equals(this.left) && other.horizontalInside._equals(this.horizontalInside) && other.verticalInside._equals(this.verticalInside) && other.borderRadius._equals(this.borderRadius);
    }
    get hashCode() {
      return ui.hashValues(this.top, this.right, this.bottom, this.left, this.horizontalInside, this.verticalInside, this.borderRadius);
    }
    toString() {
      return "TableBorder(" + dart.str(this.top) + ", " + dart.str(this.right) + ", " + dart.str(this.bottom) + ", " + dart.str(this.left) + ", " + dart.str(this.horizontalInside) + ", " + dart.str(this.verticalInside) + ", " + dart.str(this.borderRadius) + ")";
    }
  };
  (table_border.TableBorder.new = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C[0] || CT.C0;
    let right = opts && 'right' in opts ? opts.right : C[0] || CT.C0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C[0] || CT.C0;
    let left = opts && 'left' in opts ? opts.left : C[0] || CT.C0;
    let horizontalInside = opts && 'horizontalInside' in opts ? opts.horizontalInside : C[0] || CT.C0;
    let verticalInside = opts && 'verticalInside' in opts ? opts.verticalInside : C[0] || CT.C0;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C[3] || CT.C3;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[left$] = left;
    this[horizontalInside$] = horizontalInside;
    this[verticalInside$] = verticalInside;
    this[borderRadius$] = borderRadius;
    ;
  }).prototype = table_border.TableBorder.prototype;
  dart.addTypeTests(table_border.TableBorder);
  dart.addTypeCaches(table_border.TableBorder);
  dart.setMethodSignature(table_border.TableBorder, () => ({
    __proto__: dart.getMethods(table_border.TableBorder.__proto__),
    scale: dart.fnType(table_border.TableBorder, [core.double]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Rect], {}, {columns: core.Iterable$(core.double), rows: core.Iterable$(core.double)})
  }));
  dart.setStaticMethodSignature(table_border.TableBorder, () => ['all', 'symmetric', 'lerp']);
  dart.setGetterSignature(table_border.TableBorder, () => ({
    __proto__: dart.getGetters(table_border.TableBorder.__proto__),
    dimensions: edge_insets.EdgeInsets,
    isUniform: core.bool
  }));
  dart.setLibraryUri(table_border.TableBorder, I[1]);
  dart.setFieldSignature(table_border.TableBorder, () => ({
    __proto__: dart.getFields(table_border.TableBorder.__proto__),
    top: dart.finalFieldType(borders.BorderSide),
    right: dart.finalFieldType(borders.BorderSide),
    bottom: dart.finalFieldType(borders.BorderSide),
    left: dart.finalFieldType(borders.BorderSide),
    horizontalInside: dart.finalFieldType(borders.BorderSide),
    verticalInside: dart.finalFieldType(borders.BorderSide),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius)
  }));
  dart.defineExtensionMethods(table_border.TableBorder, ['_equals', 'toString']);
  dart.defineExtensionAccessors(table_border.TableBorder, ['hashCode']);
  dart.trackLibraries("packages/flutter/src/rendering/table_border.dart", {
    "package:flutter/src/rendering/table_border.dart": table_border
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["table_border.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/table_border.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__table_border: table_border
  };
}));

//# sourceMappingURL=table_border.dart.lib.js.map
