define(['dart_sdk'], (function load__packages__flutter__src__painting__border_radius_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var border_radius = Object.create(dart.library);
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 0,
        [Radius_x]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [bottomRight$]: C[0] || CT.C0,
        [bottomLeft$]: C[0] || CT.C0,
        [topRight$]: C[0] || CT.C0,
        [topLeft$]: C[0] || CT.C0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: border_radius.BorderRadiusDirectional.prototype,
        [bottomEnd$]: C[0] || CT.C0,
        [bottomStart$]: C[0] || CT.C0,
        [topEnd$]: C[0] || CT.C0,
        [topStart$]: C[0] || CT.C0
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/border_radius.dart",
    "package:flutter/src/painting/border_radius.dart"
  ];
  var _topLeft = dart.privateName(border_radius, "_topLeft");
  var _topRight = dart.privateName(border_radius, "_topRight");
  var _bottomLeft = dart.privateName(border_radius, "_bottomLeft");
  var _bottomRight = dart.privateName(border_radius, "_bottomRight");
  var _topStart = dart.privateName(border_radius, "_topStart");
  var _topEnd = dart.privateName(border_radius, "_topEnd");
  var _bottomStart = dart.privateName(border_radius, "_bottomStart");
  var _bottomEnd = dart.privateName(border_radius, "_bottomEnd");
  border_radius.BorderRadiusGeometry = class BorderRadiusGeometry extends core.Object {
    subtract(other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['-'](other[_topLeft]), this[_topRight]['-'](other[_topRight]), this[_bottomLeft]['-'](other[_bottomLeft]), this[_bottomRight]['-'](other[_bottomRight]), this[_topStart]['-'](other[_topStart]), this[_topEnd]['-'](other[_topEnd]), this[_bottomStart]['-'](other[_bottomStart]), this[_bottomEnd]['-'](other[_bottomEnd]));
    }
    add(other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['+'](other[_topLeft]), this[_topRight]['+'](other[_topRight]), this[_bottomLeft]['+'](other[_bottomLeft]), this[_bottomRight]['+'](other[_bottomRight]), this[_topStart]['+'](other[_topStart]), this[_topEnd]['+'](other[_topEnd]), this[_bottomStart]['+'](other[_bottomStart]), this[_bottomEnd]['+'](other[_bottomEnd]));
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 133, 12, "t != null");
      if (a == null && b == null) return null;
      a == null ? a = border_radius.BorderRadius.zero : null;
      b == null ? b = border_radius.BorderRadius.zero : null;
      return a.add(b.subtract(a)['*'](t));
    }
    toString() {
      let visual = null;
      let logical = null;
      if (this[_topLeft]._equals(this[_topRight]) && this[_topRight]._equals(this[_bottomLeft]) && this[_bottomLeft]._equals(this[_bottomRight])) {
        if (!this[_topLeft]._equals(ui.Radius.zero)) {
          if (this[_topLeft].x === this[_topLeft].y) {
            visual = "BorderRadius.circular(" + this[_topLeft].x[$toStringAsFixed](1) + ")";
          } else {
            visual = "BorderRadius.all(" + dart.str(this[_topLeft]) + ")";
          }
        }
      } else {
        let result = new core.StringBuffer.new();
        result.write("BorderRadius.only(");
        let comma = false;
        if (!this[_topLeft]._equals(ui.Radius.zero)) {
          result.write("topLeft: " + dart.str(this[_topLeft]));
          comma = true;
        }
        if (!this[_topRight]._equals(ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("topRight: " + dart.str(this[_topRight]));
          comma = true;
        }
        if (!this[_bottomLeft]._equals(ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomLeft: " + dart.str(this[_bottomLeft]));
          comma = true;
        }
        if (!this[_bottomRight]._equals(ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomRight: " + dart.str(this[_bottomRight]));
        }
        result.write(")");
        visual = result.toString();
      }
      if (this[_topStart]._equals(this[_topEnd]) && this[_topEnd]._equals(this[_bottomEnd]) && this[_bottomEnd]._equals(this[_bottomStart])) {
        if (!this[_topStart]._equals(ui.Radius.zero)) {
          if (this[_topStart].x === this[_topStart].y) {
            logical = "BorderRadiusDirectional.circular(" + this[_topStart].x[$toStringAsFixed](1) + ")";
          } else {
            logical = "BorderRadiusDirectional.all(" + dart.str(this[_topStart]) + ")";
          }
        }
      } else {
        let result = new core.StringBuffer.new();
        result.write("BorderRadiusDirectional.only(");
        let comma = false;
        if (!this[_topStart]._equals(ui.Radius.zero)) {
          result.write("topStart: " + dart.str(this[_topStart]));
          comma = true;
        }
        if (!this[_topEnd]._equals(ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("topEnd: " + dart.str(this[_topEnd]));
          comma = true;
        }
        if (!this[_bottomStart]._equals(ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomStart: " + dart.str(this[_bottomStart]));
          comma = true;
        }
        if (!this[_bottomEnd]._equals(ui.Radius.zero)) {
          if (comma) result.write(", ");
          result.write("bottomEnd: " + dart.str(this[_bottomEnd]));
        }
        result.write(")");
        logical = result.toString();
      }
      if (visual != null && logical != null) return dart.str(visual) + " + " + dart.str(logical);
      if (visual != null) return visual;
      if (logical != null) return logical;
      return "BorderRadius.zero";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return border_radius.BorderRadiusGeometry.is(other) && other[_topLeft]._equals(this[_topLeft]) && other[_topRight]._equals(this[_topRight]) && other[_bottomLeft]._equals(this[_bottomLeft]) && other[_bottomRight]._equals(this[_bottomRight]) && other[_topStart]._equals(this[_topStart]) && other[_topEnd]._equals(this[_topEnd]) && other[_bottomStart]._equals(this[_bottomStart]) && other[_bottomEnd]._equals(this[_bottomEnd]);
    }
    get hashCode() {
      return ui.hashValues(this[_topLeft], this[_topRight], this[_bottomLeft], this[_bottomRight], this[_topStart], this[_topEnd], this[_bottomStart], this[_bottomEnd]);
    }
  };
  (border_radius.BorderRadiusGeometry.new = function() {
    ;
  }).prototype = border_radius.BorderRadiusGeometry.prototype;
  dart.addTypeTests(border_radius.BorderRadiusGeometry);
  dart.addTypeCaches(border_radius.BorderRadiusGeometry);
  dart.setMethodSignature(border_radius.BorderRadiusGeometry, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadiusGeometry.__proto__),
    subtract: dart.fnType(border_radius.BorderRadiusGeometry, [border_radius.BorderRadiusGeometry]),
    add: dart.fnType(border_radius.BorderRadiusGeometry, [border_radius.BorderRadiusGeometry])
  }));
  dart.setStaticMethodSignature(border_radius.BorderRadiusGeometry, () => ['lerp']);
  dart.setLibraryUri(border_radius.BorderRadiusGeometry, I[1]);
  dart.defineExtensionMethods(border_radius.BorderRadiusGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(border_radius.BorderRadiusGeometry, ['hashCode']);
  var topLeft$ = dart.privateName(border_radius, "BorderRadius.topLeft");
  var topRight$ = dart.privateName(border_radius, "BorderRadius.topRight");
  var bottomLeft$ = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var bottomRight$ = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  border_radius.BorderRadius = class BorderRadius extends border_radius.BorderRadiusGeometry {
    get topLeft() {
      return this[topLeft$];
    }
    set topLeft(value) {
      super.topLeft = value;
    }
    get topRight() {
      return this[topRight$];
    }
    set topRight(value) {
      super.topRight = value;
    }
    get bottomLeft() {
      return this[bottomLeft$];
    }
    set bottomLeft(value) {
      super.bottomLeft = value;
    }
    get bottomRight() {
      return this[bottomRight$];
    }
    set bottomRight(value) {
      super.bottomRight = value;
    }
    static ['_#all#tearOff'](radius) {
      return new border_radius.BorderRadius.all(radius);
    }
    static ['_#circular#tearOff'](radius) {
      return new border_radius.BorderRadius.circular(radius);
    }
    static ['_#vertical#tearOff'](opts) {
      let top = opts && 'top' in opts ? opts.top : C[0] || CT.C0;
      let bottom = opts && 'bottom' in opts ? opts.bottom : C[0] || CT.C0;
      return new border_radius.BorderRadius.vertical({top: top, bottom: bottom});
    }
    static ['_#horizontal#tearOff'](opts) {
      let left = opts && 'left' in opts ? opts.left : C[0] || CT.C0;
      let right = opts && 'right' in opts ? opts.right : C[0] || CT.C0;
      return new border_radius.BorderRadius.horizontal({left: left, right: right});
    }
    static ['_#only#tearOff'](opts) {
      let topLeft = opts && 'topLeft' in opts ? opts.topLeft : C[0] || CT.C0;
      let topRight = opts && 'topRight' in opts ? opts.topRight : C[0] || CT.C0;
      let bottomLeft = opts && 'bottomLeft' in opts ? opts.bottomLeft : C[0] || CT.C0;
      let bottomRight = opts && 'bottomRight' in opts ? opts.bottomRight : C[0] || CT.C0;
      return new border_radius.BorderRadius.only({topLeft: topLeft, topRight: topRight, bottomLeft: bottomLeft, bottomRight: bottomRight});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let topLeft = opts && 'topLeft' in opts ? opts.topLeft : null;
      let topRight = opts && 'topRight' in opts ? opts.topRight : null;
      let bottomLeft = opts && 'bottomLeft' in opts ? opts.bottomLeft : null;
      let bottomRight = opts && 'bottomRight' in opts ? opts.bottomRight : null;
      return new border_radius.BorderRadius.only({topLeft: (t0 = topLeft, t0 == null ? this.topLeft : t0), topRight: (t0$ = topRight, t0$ == null ? this.topRight : t0$), bottomLeft: (t0$0 = bottomLeft, t0$0 == null ? this.bottomLeft : t0$0), bottomRight: (t0$1 = bottomRight, t0$1 == null ? this.bottomRight : t0$1)});
    }
    get [_topLeft]() {
      return this.topLeft;
    }
    get [_topRight]() {
      return this.topRight;
    }
    get [_bottomLeft]() {
      return this.bottomLeft;
    }
    get [_bottomRight]() {
      return this.bottomRight;
    }
    get [_topStart]() {
      return ui.Radius.zero;
    }
    get [_topEnd]() {
      return ui.Radius.zero;
    }
    get [_bottomStart]() {
      return ui.Radius.zero;
    }
    get [_bottomEnd]() {
      return ui.Radius.zero;
    }
    toRRect(rect) {
      return new ui.RRect.fromRectAndCorners(rect, {topLeft: this.topLeft, topRight: this.topRight, bottomLeft: this.bottomLeft, bottomRight: this.bottomRight});
    }
    subtract(other) {
      if (border_radius.BorderRadius.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (border_radius.BorderRadius.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['-'](other.topLeft), topRight: this.topRight['-'](other.topRight), bottomLeft: this.bottomLeft['-'](other.bottomLeft), bottomRight: this.bottomRight['-'](other.bottomRight)});
    }
    ['+'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['+'](other.topLeft), topRight: this.topRight['+'](other.topRight), bottomLeft: this.bottomLeft['+'](other.bottomLeft), bottomRight: this.bottomRight['+'](other.bottomRight)});
    }
    _negate() {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft._negate(), topRight: this.topRight._negate(), bottomLeft: this.bottomLeft._negate(), bottomRight: this.bottomRight._negate()});
    }
    ['*'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['*'](other), topRight: this.topRight['*'](other), bottomLeft: this.bottomLeft['*'](other), bottomRight: this.bottomRight['*'](other)});
    }
    ['/'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['/'](other), topRight: this.topRight['/'](other), bottomLeft: this.bottomLeft['/'](other), bottomRight: this.bottomRight['/'](other)});
    }
    ['~/'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['~/'](other), topRight: this.topRight['~/'](other), bottomLeft: this.bottomLeft['~/'](other), bottomRight: this.bottomRight['~/'](other)});
    }
    ['%'](other) {
      return new border_radius.BorderRadius.only({topLeft: this.topLeft['%'](other), topRight: this.topRight['%'](other), bottomLeft: this.bottomLeft['%'](other), bottomRight: this.bottomRight['%'](other)});
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 493, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - t);
      return new border_radius.BorderRadius.only({topLeft: dart.nullCheck(ui.Radius.lerp(a.topLeft, b.topLeft, t)), topRight: dart.nullCheck(ui.Radius.lerp(a.topRight, b.topRight, t)), bottomLeft: dart.nullCheck(ui.Radius.lerp(a.bottomLeft, b.bottomLeft, t)), bottomRight: dart.nullCheck(ui.Radius.lerp(a.bottomRight, b.bottomRight, t))});
    }
    resolve(direction) {
      return this;
    }
  };
  (border_radius.BorderRadius.all = function(radius) {
    border_radius.BorderRadius.only.call(this, {topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.circular = function(radius) {
    border_radius.BorderRadius.all.call(this, new ui.Radius.circular(radius));
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C[0] || CT.C0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C[0] || CT.C0;
    border_radius.BorderRadius.only.call(this, {topLeft: top, topRight: top, bottomLeft: bottom, bottomRight: bottom});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.horizontal = function(opts) {
    let left = opts && 'left' in opts ? opts.left : C[0] || CT.C0;
    let right = opts && 'right' in opts ? opts.right : C[0] || CT.C0;
    border_radius.BorderRadius.only.call(this, {topLeft: left, topRight: right, bottomLeft: left, bottomRight: right});
  }).prototype = border_radius.BorderRadius.prototype;
  (border_radius.BorderRadius.only = function(opts) {
    let topLeft = opts && 'topLeft' in opts ? opts.topLeft : C[0] || CT.C0;
    let topRight = opts && 'topRight' in opts ? opts.topRight : C[0] || CT.C0;
    let bottomLeft = opts && 'bottomLeft' in opts ? opts.bottomLeft : C[0] || CT.C0;
    let bottomRight = opts && 'bottomRight' in opts ? opts.bottomRight : C[0] || CT.C0;
    this[topLeft$] = topLeft;
    this[topRight$] = topRight;
    this[bottomLeft$] = bottomLeft;
    this[bottomRight$] = bottomRight;
    border_radius.BorderRadius.__proto__.new.call(this);
    ;
  }).prototype = border_radius.BorderRadius.prototype;
  dart.addTypeTests(border_radius.BorderRadius);
  dart.addTypeCaches(border_radius.BorderRadius);
  dart.setMethodSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadius.__proto__),
    copyWith: dart.fnType(border_radius.BorderRadius, [], {bottomLeft: dart.nullable(ui.Radius), bottomRight: dart.nullable(ui.Radius), topLeft: dart.nullable(ui.Radius), topRight: dart.nullable(ui.Radius)}, {}),
    toRRect: dart.fnType(ui.RRect, [ui.Rect]),
    '-': dart.fnType(border_radius.BorderRadius, [border_radius.BorderRadius]),
    '+': dart.fnType(border_radius.BorderRadius, [border_radius.BorderRadius]),
    _negate: dart.fnType(border_radius.BorderRadius, []),
    '*': dart.fnType(border_radius.BorderRadius, [core.double]),
    '/': dart.fnType(border_radius.BorderRadius, [core.double]),
    '~/': dart.fnType(border_radius.BorderRadius, [core.double]),
    '%': dart.fnType(border_radius.BorderRadius, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [dart.nullable(ui.TextDirection)])
  }));
  dart.setStaticMethodSignature(border_radius.BorderRadius, () => ['lerp']);
  dart.setGetterSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getGetters(border_radius.BorderRadius.__proto__),
    [_topLeft]: ui.Radius,
    [_topRight]: ui.Radius,
    [_bottomLeft]: ui.Radius,
    [_bottomRight]: ui.Radius,
    [_topStart]: ui.Radius,
    [_topEnd]: ui.Radius,
    [_bottomStart]: ui.Radius,
    [_bottomEnd]: ui.Radius
  }));
  dart.setLibraryUri(border_radius.BorderRadius, I[1]);
  dart.setFieldSignature(border_radius.BorderRadius, () => ({
    __proto__: dart.getFields(border_radius.BorderRadius.__proto__),
    topLeft: dart.finalFieldType(ui.Radius),
    topRight: dart.finalFieldType(ui.Radius),
    bottomLeft: dart.finalFieldType(ui.Radius),
    bottomRight: dart.finalFieldType(ui.Radius)
  }));
  dart.setStaticFieldSignature(border_radius.BorderRadius, () => ['zero']);
  dart.defineLazy(border_radius.BorderRadius, {
    /*border_radius.BorderRadius.zero*/get zero() {
      return C[1] || CT.C1;
    }
  }, false);
  var topStart$ = dart.privateName(border_radius, "BorderRadiusDirectional.topStart");
  var topEnd$ = dart.privateName(border_radius, "BorderRadiusDirectional.topEnd");
  var bottomStart$ = dart.privateName(border_radius, "BorderRadiusDirectional.bottomStart");
  var bottomEnd$ = dart.privateName(border_radius, "BorderRadiusDirectional.bottomEnd");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  border_radius.BorderRadiusDirectional = class BorderRadiusDirectional extends border_radius.BorderRadiusGeometry {
    get topStart() {
      return this[topStart$];
    }
    set topStart(value) {
      super.topStart = value;
    }
    get topEnd() {
      return this[topEnd$];
    }
    set topEnd(value) {
      super.topEnd = value;
    }
    get bottomStart() {
      return this[bottomStart$];
    }
    set bottomStart(value) {
      super.bottomStart = value;
    }
    get bottomEnd() {
      return this[bottomEnd$];
    }
    set bottomEnd(value) {
      super.bottomEnd = value;
    }
    static ['_#all#tearOff'](radius) {
      return new border_radius.BorderRadiusDirectional.all(radius);
    }
    static ['_#circular#tearOff'](radius) {
      return new border_radius.BorderRadiusDirectional.circular(radius);
    }
    static ['_#vertical#tearOff'](opts) {
      let top = opts && 'top' in opts ? opts.top : C[0] || CT.C0;
      let bottom = opts && 'bottom' in opts ? opts.bottom : C[0] || CT.C0;
      return new border_radius.BorderRadiusDirectional.vertical({top: top, bottom: bottom});
    }
    static ['_#horizontal#tearOff'](opts) {
      let start = opts && 'start' in opts ? opts.start : C[0] || CT.C0;
      let end = opts && 'end' in opts ? opts.end : C[0] || CT.C0;
      return new border_radius.BorderRadiusDirectional.horizontal({start: start, end: end});
    }
    static ['_#only#tearOff'](opts) {
      let topStart = opts && 'topStart' in opts ? opts.topStart : C[0] || CT.C0;
      let topEnd = opts && 'topEnd' in opts ? opts.topEnd : C[0] || CT.C0;
      let bottomStart = opts && 'bottomStart' in opts ? opts.bottomStart : C[0] || CT.C0;
      let bottomEnd = opts && 'bottomEnd' in opts ? opts.bottomEnd : C[0] || CT.C0;
      return new border_radius.BorderRadiusDirectional.only({topStart: topStart, topEnd: topEnd, bottomStart: bottomStart, bottomEnd: bottomEnd});
    }
    get [_topStart]() {
      return this.topStart;
    }
    get [_topEnd]() {
      return this.topEnd;
    }
    get [_bottomStart]() {
      return this.bottomStart;
    }
    get [_bottomEnd]() {
      return this.bottomEnd;
    }
    get [_topLeft]() {
      return ui.Radius.zero;
    }
    get [_topRight]() {
      return ui.Radius.zero;
    }
    get [_bottomLeft]() {
      return ui.Radius.zero;
    }
    get [_bottomRight]() {
      return ui.Radius.zero;
    }
    subtract(other) {
      if (border_radius.BorderRadiusDirectional.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (border_radius.BorderRadiusDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['-'](other.topStart), topEnd: this.topEnd['-'](other.topEnd), bottomStart: this.bottomStart['-'](other.bottomStart), bottomEnd: this.bottomEnd['-'](other.bottomEnd)});
    }
    ['+'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['+'](other.topStart), topEnd: this.topEnd['+'](other.topEnd), bottomStart: this.bottomStart['+'](other.bottomStart), bottomEnd: this.bottomEnd['+'](other.bottomEnd)});
    }
    _negate() {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart._negate(), topEnd: this.topEnd._negate(), bottomStart: this.bottomStart._negate(), bottomEnd: this.bottomEnd._negate()});
    }
    ['*'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['*'](other), topEnd: this.topEnd['*'](other), bottomStart: this.bottomStart['*'](other), bottomEnd: this.bottomEnd['*'](other)});
    }
    ['/'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['/'](other), topEnd: this.topEnd['/'](other), bottomStart: this.bottomStart['/'](other), bottomEnd: this.bottomEnd['/'](other)});
    }
    ['~/'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['~/'](other), topEnd: this.topEnd['~/'](other), bottomStart: this.bottomStart['~/'](other), bottomEnd: this.bottomEnd['~/'](other)});
    }
    ['%'](other) {
      return new border_radius.BorderRadiusDirectional.only({topStart: this.topStart['%'](other), topEnd: this.topEnd['%'](other), bottomStart: this.bottomStart['%'](other), bottomEnd: this.bottomEnd['%'](other)});
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 710, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - t);
      return new border_radius.BorderRadiusDirectional.only({topStart: dart.nullCheck(ui.Radius.lerp(a.topStart, b.topStart, t)), topEnd: dart.nullCheck(ui.Radius.lerp(a.topEnd, b.topEnd, t)), bottomStart: dart.nullCheck(ui.Radius.lerp(a.bottomStart, b.bottomStart, t)), bottomEnd: dart.nullCheck(ui.Radius.lerp(a.bottomEnd, b.bottomEnd, t))});
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, I[0], 727, 12, "direction != null");
      switch (dart.nullCheck(direction)) {
        case C[2] || CT.C2:
        {
          return new border_radius.BorderRadius.only({topLeft: this.topEnd, topRight: this.topStart, bottomLeft: this.bottomEnd, bottomRight: this.bottomStart});
        }
        case C[3] || CT.C3:
        {
          return new border_radius.BorderRadius.only({topLeft: this.topStart, topRight: this.topEnd, bottomLeft: this.bottomStart, bottomRight: this.bottomEnd});
        }
      }
    }
  };
  (border_radius.BorderRadiusDirectional.all = function(radius) {
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: radius, topEnd: radius, bottomStart: radius, bottomEnd: radius});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.circular = function(radius) {
    border_radius.BorderRadiusDirectional.all.call(this, new ui.Radius.circular(radius));
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : C[0] || CT.C0;
    let bottom = opts && 'bottom' in opts ? opts.bottom : C[0] || CT.C0;
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: top, topEnd: top, bottomStart: bottom, bottomEnd: bottom});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.horizontal = function(opts) {
    let start = opts && 'start' in opts ? opts.start : C[0] || CT.C0;
    let end = opts && 'end' in opts ? opts.end : C[0] || CT.C0;
    border_radius.BorderRadiusDirectional.only.call(this, {topStart: start, topEnd: end, bottomStart: start, bottomEnd: end});
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  (border_radius.BorderRadiusDirectional.only = function(opts) {
    let topStart = opts && 'topStart' in opts ? opts.topStart : C[0] || CT.C0;
    let topEnd = opts && 'topEnd' in opts ? opts.topEnd : C[0] || CT.C0;
    let bottomStart = opts && 'bottomStart' in opts ? opts.bottomStart : C[0] || CT.C0;
    let bottomEnd = opts && 'bottomEnd' in opts ? opts.bottomEnd : C[0] || CT.C0;
    this[topStart$] = topStart;
    this[topEnd$] = topEnd;
    this[bottomStart$] = bottomStart;
    this[bottomEnd$] = bottomEnd;
    border_radius.BorderRadiusDirectional.__proto__.new.call(this);
    ;
  }).prototype = border_radius.BorderRadiusDirectional.prototype;
  dart.addTypeTests(border_radius.BorderRadiusDirectional);
  dart.addTypeCaches(border_radius.BorderRadiusDirectional);
  dart.setMethodSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getMethods(border_radius.BorderRadiusDirectional.__proto__),
    '-': dart.fnType(border_radius.BorderRadiusDirectional, [border_radius.BorderRadiusDirectional]),
    '+': dart.fnType(border_radius.BorderRadiusDirectional, [border_radius.BorderRadiusDirectional]),
    _negate: dart.fnType(border_radius.BorderRadiusDirectional, []),
    '*': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '/': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '~/': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    '%': dart.fnType(border_radius.BorderRadiusDirectional, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [dart.nullable(ui.TextDirection)])
  }));
  dart.setStaticMethodSignature(border_radius.BorderRadiusDirectional, () => ['lerp']);
  dart.setGetterSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getGetters(border_radius.BorderRadiusDirectional.__proto__),
    [_topStart]: ui.Radius,
    [_topEnd]: ui.Radius,
    [_bottomStart]: ui.Radius,
    [_bottomEnd]: ui.Radius,
    [_topLeft]: ui.Radius,
    [_topRight]: ui.Radius,
    [_bottomLeft]: ui.Radius,
    [_bottomRight]: ui.Radius
  }));
  dart.setLibraryUri(border_radius.BorderRadiusDirectional, I[1]);
  dart.setFieldSignature(border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getFields(border_radius.BorderRadiusDirectional.__proto__),
    topStart: dart.finalFieldType(ui.Radius),
    topEnd: dart.finalFieldType(ui.Radius),
    bottomStart: dart.finalFieldType(ui.Radius),
    bottomEnd: dart.finalFieldType(ui.Radius)
  }));
  dart.setStaticFieldSignature(border_radius.BorderRadiusDirectional, () => ['zero']);
  dart.defineLazy(border_radius.BorderRadiusDirectional, {
    /*border_radius.BorderRadiusDirectional.zero*/get zero() {
      return C[4] || CT.C4;
    }
  }, false);
  var _topLeft$ = dart.privateName(border_radius, "_MixedBorderRadius._topLeft");
  var _topRight$ = dart.privateName(border_radius, "_MixedBorderRadius._topRight");
  var _bottomLeft$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomLeft");
  var _bottomRight$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomRight");
  var _topStart$ = dart.privateName(border_radius, "_MixedBorderRadius._topStart");
  var _topEnd$ = dart.privateName(border_radius, "_MixedBorderRadius._topEnd");
  var _bottomStart$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomStart");
  var _bottomEnd$ = dart.privateName(border_radius, "_MixedBorderRadius._bottomEnd");
  border_radius._MixedBorderRadius = class _MixedBorderRadius extends border_radius.BorderRadiusGeometry {
    get [_topLeft]() {
      return this[_topLeft$];
    }
    set [_topLeft](value) {
      super[_topLeft] = value;
    }
    get [_topRight]() {
      return this[_topRight$];
    }
    set [_topRight](value) {
      super[_topRight] = value;
    }
    get [_bottomLeft]() {
      return this[_bottomLeft$];
    }
    set [_bottomLeft](value) {
      super[_bottomLeft] = value;
    }
    get [_bottomRight]() {
      return this[_bottomRight$];
    }
    set [_bottomRight](value) {
      super[_bottomRight] = value;
    }
    get [_topStart]() {
      return this[_topStart$];
    }
    set [_topStart](value) {
      super[_topStart] = value;
    }
    get [_topEnd]() {
      return this[_topEnd$];
    }
    set [_topEnd](value) {
      super[_topEnd] = value;
    }
    get [_bottomStart]() {
      return this[_bottomStart$];
    }
    set [_bottomStart](value) {
      super[_bottomStart] = value;
    }
    get [_bottomEnd]() {
      return this[_bottomEnd$];
    }
    set [_bottomEnd](value) {
      super[_bottomEnd] = value;
    }
    static ['_#new#tearOff'](_topLeft, _topRight, _bottomLeft, _bottomRight, _topStart, _topEnd, _bottomStart, _bottomEnd) {
      return new border_radius._MixedBorderRadius.new(_topLeft, _topRight, _bottomLeft, _bottomRight, _topStart, _topEnd, _bottomStart, _bottomEnd);
    }
    _negate() {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]._negate(), this[_topRight]._negate(), this[_bottomLeft]._negate(), this[_bottomRight]._negate(), this[_topStart]._negate(), this[_topEnd]._negate(), this[_bottomStart]._negate(), this[_bottomEnd]._negate());
    }
    ['*'](other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['*'](other), this[_topRight]['*'](other), this[_bottomLeft]['*'](other), this[_bottomRight]['*'](other), this[_topStart]['*'](other), this[_topEnd]['*'](other), this[_bottomStart]['*'](other), this[_bottomEnd]['*'](other));
    }
    ['/'](other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['/'](other), this[_topRight]['/'](other), this[_bottomLeft]['/'](other), this[_bottomRight]['/'](other), this[_topStart]['/'](other), this[_topEnd]['/'](other), this[_bottomStart]['/'](other), this[_bottomEnd]['/'](other));
    }
    ['~/'](other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['~/'](other), this[_topRight]['~/'](other), this[_bottomLeft]['~/'](other), this[_bottomRight]['~/'](other), this[_topStart]['~/'](other), this[_topEnd]['~/'](other), this[_bottomStart]['~/'](other), this[_bottomEnd]['~/'](other));
    }
    ['%'](other) {
      return new border_radius._MixedBorderRadius.new(this[_topLeft]['%'](other), this[_topRight]['%'](other), this[_bottomLeft]['%'](other), this[_bottomRight]['%'](other), this[_topStart]['%'](other), this[_topEnd]['%'](other), this[_bottomStart]['%'](other), this[_bottomEnd]['%'](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, I[0], 856, 12, "direction != null");
      switch (dart.nullCheck(direction)) {
        case C[2] || CT.C2:
        {
          return new border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topEnd]), topRight: this[_topRight]['+'](this[_topStart]), bottomLeft: this[_bottomLeft]['+'](this[_bottomEnd]), bottomRight: this[_bottomRight]['+'](this[_bottomStart])});
        }
        case C[3] || CT.C3:
        {
          return new border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topStart]), topRight: this[_topRight]['+'](this[_topEnd]), bottomLeft: this[_bottomLeft]['+'](this[_bottomStart]), bottomRight: this[_bottomRight]['+'](this[_bottomEnd])});
        }
      }
    }
  };
  (border_radius._MixedBorderRadius.new = function(_topLeft, _topRight, _bottomLeft, _bottomRight, _topStart, _topEnd, _bottomStart, _bottomEnd) {
    this[_topLeft$] = _topLeft;
    this[_topRight$] = _topRight;
    this[_bottomLeft$] = _bottomLeft;
    this[_bottomRight$] = _bottomRight;
    this[_topStart$] = _topStart;
    this[_topEnd$] = _topEnd;
    this[_bottomStart$] = _bottomStart;
    this[_bottomEnd$] = _bottomEnd;
    border_radius._MixedBorderRadius.__proto__.new.call(this);
    ;
  }).prototype = border_radius._MixedBorderRadius.prototype;
  dart.addTypeTests(border_radius._MixedBorderRadius);
  dart.addTypeCaches(border_radius._MixedBorderRadius);
  dart.setMethodSignature(border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getMethods(border_radius._MixedBorderRadius.__proto__),
    _negate: dart.fnType(border_radius._MixedBorderRadius, []),
    '*': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '/': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '~/': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    '%': dart.fnType(border_radius._MixedBorderRadius, [core.double]),
    resolve: dart.fnType(border_radius.BorderRadius, [dart.nullable(ui.TextDirection)])
  }));
  dart.setLibraryUri(border_radius._MixedBorderRadius, I[1]);
  dart.setFieldSignature(border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getFields(border_radius._MixedBorderRadius.__proto__),
    [_topLeft]: dart.finalFieldType(ui.Radius),
    [_topRight]: dart.finalFieldType(ui.Radius),
    [_bottomLeft]: dart.finalFieldType(ui.Radius),
    [_bottomRight]: dart.finalFieldType(ui.Radius),
    [_topStart]: dart.finalFieldType(ui.Radius),
    [_topEnd]: dart.finalFieldType(ui.Radius),
    [_bottomStart]: dart.finalFieldType(ui.Radius),
    [_bottomEnd]: dart.finalFieldType(ui.Radius)
  }));
  dart.trackLibraries("packages/flutter/src/painting/border_radius.dart", {
    "package:flutter/src/painting/border_radius.dart": border_radius
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["border_radius.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/border_radius.dart.lib.js"}');
  // Exports:
  return {
    src__painting__border_radius: border_radius
  };
}));

//# sourceMappingURL=border_radius.dart.lib.js.map
