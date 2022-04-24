define(['dart_sdk', 'packages/flutter/src/painting/box_border.dart', 'packages/flutter/src/painting/border_radius.dart', 'packages/flutter/src/painting/box_shadow.dart', 'packages/flutter/src/painting/gradient.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/painting/decoration.dart', 'packages/flutter/src/painting/_network_image_web.dart'], (function load__packages__flutter__src__painting__box_decoration_dart(dart_sdk, packages__flutter__src__painting__box_border$46dart, packages__flutter__src__painting__border_radius$46dart, packages__flutter__src__painting__box_shadow$46dart, packages__flutter__src__painting__gradient$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__painting__decoration$46dart, packages__flutter__src__painting___network_image_web$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box_border = packages__flutter__src__painting__box_border$46dart.src__painting__box_border;
  const border_radius = packages__flutter__src__painting__border_radius$46dart.src__painting__border_radius;
  const box_shadow = packages__flutter__src__painting__box_shadow$46dart.src__painting__box_shadow;
  const gradient = packages__flutter__src__painting__gradient$46dart.src__painting__gradient;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const decoration = packages__flutter__src__painting__decoration$46dart.src__painting__decoration;
  const image_provider = packages__flutter__src__painting___network_image_web$46dart.src__painting__image_provider;
  var box_decoration = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    BoxDecorationN: () => (T.BoxDecorationN = dart.constFn(dart.nullable(box_decoration.BoxDecoration)))(),
    DiagnosticsPropertyOfDecorationImage: () => (T.DiagnosticsPropertyOfDecorationImage = dart.constFn(diagnostics.DiagnosticsProperty$(decoration_image.DecorationImage)))(),
    DiagnosticsPropertyOfBoxBorder: () => (T.DiagnosticsPropertyOfBoxBorder = dart.constFn(diagnostics.DiagnosticsProperty$(box_border.BoxBorder)))(),
    DiagnosticsPropertyOfBorderRadiusGeometry: () => (T.DiagnosticsPropertyOfBorderRadiusGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(border_radius.BorderRadiusGeometry)))(),
    IterablePropertyOfBoxShadow: () => (T.IterablePropertyOfBoxShadow = dart.constFn(diagnostics.IterableProperty$(box_shadow.BoxShadow)))(),
    DiagnosticsPropertyOfGradient: () => (T.DiagnosticsPropertyOfGradient = dart.constFn(diagnostics.DiagnosticsProperty$(gradient.Gradient)))(),
    EnumPropertyOfBoxShape: () => (T.EnumPropertyOfBoxShape = dart.constFn(diagnostics.EnumProperty$(box_border.BoxShape)))()
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
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/box_decoration.dart",
    "package:flutter/src/painting/box_decoration.dart"
  ];
  var color$ = dart.privateName(box_decoration, "BoxDecoration.color");
  var image$ = dart.privateName(box_decoration, "BoxDecoration.image");
  var border$ = dart.privateName(box_decoration, "BoxDecoration.border");
  var borderRadius$ = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  var boxShadow$ = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  var gradient$ = dart.privateName(box_decoration, "BoxDecoration.gradient");
  var backgroundBlendMode$ = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  var shape$ = dart.privateName(box_decoration, "BoxDecoration.shape");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  box_decoration.BoxDecoration = class BoxDecoration extends decoration.Decoration {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get border() {
      return this[border$];
    }
    set border(value) {
      super.border = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get boxShadow() {
      return this[boxShadow$];
    }
    set boxShadow(value) {
      super.boxShadow = value;
    }
    get gradient() {
      return this[gradient$];
    }
    set gradient(value) {
      super.gradient = value;
    }
    get backgroundBlendMode() {
      return this[backgroundBlendMode$];
    }
    set backgroundBlendMode(value) {
      super.backgroundBlendMode = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let border = opts && 'border' in opts ? opts.border : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
      let gradient = opts && 'gradient' in opts ? opts.gradient : null;
      let backgroundBlendMode = opts && 'backgroundBlendMode' in opts ? opts.backgroundBlendMode : null;
      let shape = opts && 'shape' in opts ? opts.shape : C[0] || CT.C0;
      return new box_decoration.BoxDecoration.new({color: color, image: image, border: border, borderRadius: borderRadius, boxShadow: boxShadow, gradient: gradient, backgroundBlendMode: backgroundBlendMode, shape: shape});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let color = opts && 'color' in opts ? opts.color : null;
      let image = opts && 'image' in opts ? opts.image : null;
      let border = opts && 'border' in opts ? opts.border : null;
      let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
      let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
      let gradient = opts && 'gradient' in opts ? opts.gradient : null;
      let backgroundBlendMode = opts && 'backgroundBlendMode' in opts ? opts.backgroundBlendMode : null;
      let shape = opts && 'shape' in opts ? opts.shape : null;
      return new box_decoration.BoxDecoration.new({color: (t0 = color, t0 == null ? this.color : t0), image: (t0$ = image, t0$ == null ? this.image : t0$), border: (t0$0 = border, t0$0 == null ? this.border : t0$0), borderRadius: (t0$1 = borderRadius, t0$1 == null ? this.borderRadius : t0$1), boxShadow: (t0$2 = boxShadow, t0$2 == null ? this.boxShadow : t0$2), gradient: (t0$3 = gradient, t0$3 == null ? this.gradient : t0$3), backgroundBlendMode: (t0$4 = backgroundBlendMode, t0$4 == null ? this.backgroundBlendMode : t0$4), shape: (t0$5 = shape, t0$5 == null ? this.shape : t0$5)});
    }
    debugAssertIsValid() {
      if (!(this.shape !== box_border.BoxShape.circle || this.borderRadius == null)) dart.assertFailed(null, I[0], 131, 12, "shape != BoxShape.circle || borderRadius == null");
      return super.debugAssertIsValid();
    }
    get padding() {
      let t0;
      t0 = this.border;
      return t0 == null ? null : t0.dimensions;
    }
    getClipPath(rect, textDirection) {
      let t0, t0$, t0$0;
      switch (this.shape) {
        case C[1] || CT.C1:
        {
          let center = rect.center;
          let radius = rect.shortestSide / 2.0;
          let square = new ui.Rect.fromCircle({center: center, radius: radius});
          t0 = ui.Path.new();
          return (() => {
            t0.addOval(square);
            return t0;
          })();
        }
        case C[0] || CT.C0:
        {
          if (this.borderRadius != null) {
            t0$ = ui.Path.new();
            return (() => {
              t0$.addRRect(dart.nullCheck(this.borderRadius).resolve(textDirection).toRRect(rect));
              return t0$;
            })();
          }
          t0$0 = ui.Path.new();
          return (() => {
            t0$0.addRect(rect);
            return t0$0;
          })();
        }
      }
    }
    scale(factor) {
      let t0;
      return new box_decoration.BoxDecoration.new({color: ui.Color.lerp(null, this.color, factor), image: this.image, border: box_border.BoxBorder.lerp(null, this.border, factor), borderRadius: border_radius.BorderRadiusGeometry.lerp(null, this.borderRadius, factor), boxShadow: box_shadow.BoxShadow.lerpList(null, this.boxShadow, factor), gradient: (t0 = this.gradient, t0 == null ? null : t0.scale(factor)), shape: this.shape});
    }
    get isComplex() {
      return this.boxShadow != null;
    }
    lerpFrom(a, t) {
      if (a == null) return this.scale(t);
      if (box_decoration.BoxDecoration.is(a)) return box_decoration.BoxDecoration.lerp(a, this, t);
      return T.BoxDecorationN().as(super.lerpFrom(a, t));
    }
    lerpTo(b, t) {
      if (b == null) return this.scale(1.0 - t);
      if (box_decoration.BoxDecoration.is(b)) return box_decoration.BoxDecoration.lerp(this, b, t);
      return T.BoxDecorationN().as(super.lerpTo(b, t));
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 289, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b).scale(t);
      if (b == null) return a.scale(1.0 - t);
      if (t === 0.0) return a;
      if (t === 1.0) return b;
      return new box_decoration.BoxDecoration.new({color: ui.Color.lerp(a.color, b.color, t), image: t < 0.5 ? a.image : b.image, border: box_border.BoxBorder.lerp(a.border, b.border, t), borderRadius: border_radius.BorderRadiusGeometry.lerp(a.borderRadius, b.borderRadius, t), boxShadow: box_shadow.BoxShadow.lerpList(a.boxShadow, b.boxShadow, t), gradient: gradient.Gradient.lerp(a.gradient, b.gradient, t), shape: t < 0.5 ? a.shape : b.shape});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return box_decoration.BoxDecoration.is(other) && dart.equals(other.color, this.color) && dart.equals(other.image, this.image) && dart.equals(other.border, this.border) && dart.equals(other.borderRadius, this.borderRadius) && collections.listEquals(box_shadow.BoxShadow, other.boxShadow, this.boxShadow) && dart.equals(other.gradient, this.gradient) && other.shape === this.shape;
    }
    get hashCode() {
      return ui.hashValues(this.color, this.image, this.border, this.borderRadius, ui.hashList(this.boxShadow), this.gradient, this.shape);
    }
    debugFillProperties(properties) {
      let t0;
      super.debugFillProperties(properties);
      t0 = properties;
      (() => {
        t0.defaultDiagnosticsTreeStyle = diagnostics.DiagnosticsTreeStyle.whitespace;
        t0.emptyBodyDescription = "<no decorations specified>";
        return t0;
      })();
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfDecorationImage()).new("image", this.image, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfBoxBorder()).new("border", this.border, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfBorderRadiusGeometry()).new("borderRadius", this.borderRadius, {defaultValue: null}));
      properties.add(new (T.IterablePropertyOfBoxShadow()).new("boxShadow", this.boxShadow, {defaultValue: null, style: diagnostics.DiagnosticsTreeStyle.whitespace}));
      properties.add(new (T.DiagnosticsPropertyOfGradient()).new("gradient", this.gradient, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfBoxShape()).new("shape", this.shape, {defaultValue: box_border.BoxShape.rectangle}));
    }
    hitTest(size, position, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      if (!(this.shape !== null)) dart.assertFailed(null, I[0], 358, 12, "shape != null");
      if (!ui.Offset.zero['&'](size).contains(position)) dart.assertFailed(null, I[0], 359, 12, "(Offset.zero & size).contains(position)");
      switch (this.shape) {
        case C[0] || CT.C0:
        {
          if (this.borderRadius != null) {
            let bounds = dart.nullCheck(this.borderRadius).resolve(textDirection).toRRect(ui.Offset.zero['&'](size));
            return bounds.contains(position);
          }
          return true;
        }
        case C[1] || CT.C1:
        {
          let center = size.center(ui.Offset.zero);
          let distance = position['-'](center).distance;
          return distance <= math.min(core.double, size.width, size.height) / 2.0;
        }
      }
    }
    createBoxPainter(onChanged = null) {
      if (!(onChanged != null || this.image == null)) dart.assertFailed(null, I[0], 377, 12, "onChanged != null || image == null");
      return new box_decoration._BoxDecorationPainter.new(this, onChanged);
    }
  };
  (box_decoration.BoxDecoration.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let boxShadow = opts && 'boxShadow' in opts ? opts.boxShadow : null;
    let gradient = opts && 'gradient' in opts ? opts.gradient : null;
    let backgroundBlendMode = opts && 'backgroundBlendMode' in opts ? opts.backgroundBlendMode : null;
    let shape = opts && 'shape' in opts ? opts.shape : C[0] || CT.C0;
    this[color$] = color;
    this[image$] = image;
    this[border$] = border;
    this[borderRadius$] = borderRadius;
    this[boxShadow$] = boxShadow;
    this[gradient$] = gradient;
    this[backgroundBlendMode$] = backgroundBlendMode;
    this[shape$] = shape;
    if (!(shape !== null)) dart.assertFailed(null, I[0], 98, 15, "shape != null");
    if (!(backgroundBlendMode == null || color != null || gradient != null)) dart.assertFailed("backgroundBlendMode applies to BoxDecoration's background color or " + "gradient, but no color or gradient was provided.", I[0], 100, 10, "backgroundBlendMode == null || color != null || gradient != null");
    box_decoration.BoxDecoration.__proto__.new.call(this);
    ;
  }).prototype = box_decoration.BoxDecoration.prototype;
  dart.addTypeTests(box_decoration.BoxDecoration);
  dart.addTypeCaches(box_decoration.BoxDecoration);
  dart.setMethodSignature(box_decoration.BoxDecoration, () => ({
    __proto__: dart.getMethods(box_decoration.BoxDecoration.__proto__),
    copyWith: dart.fnType(box_decoration.BoxDecoration, [], {backgroundBlendMode: dart.nullable(ui.BlendMode), border: dart.nullable(box_border.BoxBorder), borderRadius: dart.nullable(border_radius.BorderRadiusGeometry), boxShadow: dart.nullable(core.List$(box_shadow.BoxShadow)), color: dart.nullable(ui.Color), gradient: dart.nullable(gradient.Gradient), image: dart.nullable(decoration_image.DecorationImage), shape: dart.nullable(box_border.BoxShape)}, {}),
    scale: dart.fnType(box_decoration.BoxDecoration, [core.double]),
    lerpFrom: dart.fnType(dart.nullable(box_decoration.BoxDecoration), [dart.nullable(decoration.Decoration), core.double]),
    lerpTo: dart.fnType(dart.nullable(box_decoration.BoxDecoration), [dart.nullable(decoration.Decoration), core.double]),
    createBoxPainter: dart.fnType(decoration.BoxPainter, [], [dart.nullable(dart.fnType(dart.void, []))])
  }));
  dart.setStaticMethodSignature(box_decoration.BoxDecoration, () => ['lerp']);
  dart.setLibraryUri(box_decoration.BoxDecoration, I[1]);
  dart.setFieldSignature(box_decoration.BoxDecoration, () => ({
    __proto__: dart.getFields(box_decoration.BoxDecoration.__proto__),
    color: dart.finalFieldType(dart.nullable(ui.Color)),
    image: dart.finalFieldType(dart.nullable(decoration_image.DecorationImage)),
    border: dart.finalFieldType(dart.nullable(box_border.BoxBorder)),
    borderRadius: dart.finalFieldType(dart.nullable(border_radius.BorderRadiusGeometry)),
    boxShadow: dart.finalFieldType(dart.nullable(core.List$(box_shadow.BoxShadow))),
    gradient: dart.finalFieldType(dart.nullable(gradient.Gradient)),
    backgroundBlendMode: dart.finalFieldType(dart.nullable(ui.BlendMode)),
    shape: dart.finalFieldType(box_border.BoxShape)
  }));
  dart.defineExtensionMethods(box_decoration.BoxDecoration, ['_equals']);
  dart.defineExtensionAccessors(box_decoration.BoxDecoration, ['hashCode']);
  var _cachedBackgroundPaint = dart.privateName(box_decoration, "_cachedBackgroundPaint");
  var _rectForCachedBackgroundPaint = dart.privateName(box_decoration, "_rectForCachedBackgroundPaint");
  var _imagePainter = dart.privateName(box_decoration, "_imagePainter");
  var _decoration$ = dart.privateName(box_decoration, "_decoration");
  var _getBackgroundPaint = dart.privateName(box_decoration, "_getBackgroundPaint");
  var _paintBox = dart.privateName(box_decoration, "_paintBox");
  var _paintShadows = dart.privateName(box_decoration, "_paintShadows");
  var _paintBackgroundColor = dart.privateName(box_decoration, "_paintBackgroundColor");
  var _paintBackgroundImage = dart.privateName(box_decoration, "_paintBackgroundImage");
  box_decoration._BoxDecorationPainter = class _BoxDecorationPainter extends decoration.BoxPainter {
    static ['_#new#tearOff'](_decoration, onChanged) {
      return new box_decoration._BoxDecorationPainter.new(_decoration, onChanged);
    }
    [_getBackgroundPaint](rect, textDirection) {
      if (!(rect !== null)) dart.assertFailed(null, I[0], 393, 12, "rect != null");
      if (!(this[_decoration$].gradient != null || this[_rectForCachedBackgroundPaint] == null)) dart.assertFailed(null, I[0], 394, 12, "_decoration.gradient != null || _rectForCachedBackgroundPaint == null");
      if (this[_cachedBackgroundPaint] == null || this[_decoration$].gradient != null && !dart.equals(this[_rectForCachedBackgroundPaint], rect)) {
        let paint = ui.Paint.new();
        if (this[_decoration$].backgroundBlendMode != null) paint.blendMode = dart.nullCheck(this[_decoration$].backgroundBlendMode);
        if (this[_decoration$].color != null) paint.color = dart.nullCheck(this[_decoration$].color);
        if (this[_decoration$].gradient != null) {
          paint.shader = dart.nullCheck(this[_decoration$].gradient).createShader(rect, {textDirection: textDirection});
          this[_rectForCachedBackgroundPaint] = rect;
        }
        this[_cachedBackgroundPaint] = paint;
      }
      return dart.nullCheck(this[_cachedBackgroundPaint]);
    }
    [_paintBox](canvas, rect, paint, textDirection) {
      switch (this[_decoration$].shape) {
        case C[1] || CT.C1:
        {
          if (!(this[_decoration$].borderRadius == null)) dart.assertFailed(null, I[0], 416, 16, "_decoration.borderRadius == null");
          let center = rect.center;
          let radius = rect.shortestSide / 2.0;
          canvas.drawCircle(center, radius, paint);
          break;
        }
        case C[0] || CT.C0:
        {
          if (this[_decoration$].borderRadius == null) {
            canvas.drawRect(rect, paint);
          } else {
            canvas.drawRRect(dart.nullCheck(this[_decoration$].borderRadius).resolve(textDirection).toRRect(rect), paint);
          }
          break;
        }
      }
    }
    [_paintShadows](canvas, rect, textDirection) {
      if (this[_decoration$].boxShadow == null) return;
      for (let boxShadow of dart.nullCheck(this[_decoration$].boxShadow)) {
        let paint = boxShadow.toPaint();
        let bounds = rect.shift(boxShadow.offset).inflate(boxShadow.spreadRadius);
        this[_paintBox](canvas, bounds, paint, textDirection);
      }
    }
    [_paintBackgroundColor](canvas, rect, textDirection) {
      if (this[_decoration$].color != null || this[_decoration$].gradient != null) this[_paintBox](canvas, rect, this[_getBackgroundPaint](rect, textDirection), textDirection);
    }
    [_paintBackgroundImage](canvas, rect, configuration) {
      let t0, t0$;
      if (this[_decoration$].image == null) return;
      this[_imagePainter] == null ? this[_imagePainter] = dart.nullCheck(this[_decoration$].image).createPainter(dart.nullCheck(this.onChanged)) : null;
      let clipPath = null;
      switch (this[_decoration$].shape) {
        case C[1] || CT.C1:
        {
          if (!(this[_decoration$].borderRadius == null)) dart.assertFailed(null, I[0], 454, 16, "_decoration.borderRadius == null");
          let center = rect.center;
          let radius = rect.shortestSide / 2.0;
          let square = new ui.Rect.fromCircle({center: center, radius: radius});
          clipPath = (t0 = ui.Path.new(), (() => {
            t0.addOval(square);
            return t0;
          })());
          break;
        }
        case C[0] || CT.C0:
        {
          if (this[_decoration$].borderRadius != null) clipPath = (t0$ = ui.Path.new(), (() => {
            t0$.addRRect(dart.nullCheck(this[_decoration$].borderRadius).resolve(configuration.textDirection).toRRect(rect));
            return t0$;
          })());
          break;
        }
      }
      dart.nullCheck(this[_imagePainter]).paint(canvas, rect, clipPath, configuration);
    }
    dispose() {
      let t0;
      t0 = this[_imagePainter];
      t0 == null ? null : t0.dispose();
      super.dispose();
    }
    paint(canvas, offset, configuration) {
      let t1, t0;
      if (!(configuration !== null)) dart.assertFailed(null, I[0], 477, 12, "configuration != null");
      if (!(configuration.size != null)) dart.assertFailed(null, I[0], 478, 12, "configuration.size != null");
      let rect = offset['&'](dart.nullCheck(configuration.size));
      let textDirection = configuration.textDirection;
      this[_paintShadows](canvas, rect, textDirection);
      this[_paintBackgroundColor](canvas, rect, textDirection);
      this[_paintBackgroundImage](canvas, rect, configuration);
      t0 = this[_decoration$].border;
      t0 == null ? null : t0.paint(canvas, rect, {shape: this[_decoration$].shape, borderRadius: (t1 = this[_decoration$].borderRadius, t1 == null ? null : t1.resolve(textDirection)), textDirection: configuration.textDirection});
    }
    toString() {
      return "BoxPainter for " + dart.str(this[_decoration$]);
    }
  };
  (box_decoration._BoxDecorationPainter.new = function(_decoration, onChanged) {
    this[_cachedBackgroundPaint] = null;
    this[_rectForCachedBackgroundPaint] = null;
    this[_imagePainter] = null;
    this[_decoration$] = _decoration;
    if (!(_decoration !== null)) dart.assertFailed(null, I[0], 385, 14, "_decoration != null");
    box_decoration._BoxDecorationPainter.__proto__.new.call(this, onChanged);
    ;
  }).prototype = box_decoration._BoxDecorationPainter.prototype;
  dart.addTypeTests(box_decoration._BoxDecorationPainter);
  dart.addTypeCaches(box_decoration._BoxDecorationPainter);
  dart.setMethodSignature(box_decoration._BoxDecorationPainter, () => ({
    __proto__: dart.getMethods(box_decoration._BoxDecorationPainter.__proto__),
    [_getBackgroundPaint]: dart.fnType(ui.Paint, [ui.Rect, dart.nullable(ui.TextDirection)]),
    [_paintBox]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, ui.Paint, dart.nullable(ui.TextDirection)]),
    [_paintShadows]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, dart.nullable(ui.TextDirection)]),
    [_paintBackgroundColor]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, dart.nullable(ui.TextDirection)]),
    [_paintBackgroundImage]: dart.fnType(dart.void, [ui.Canvas, ui.Rect, image_provider.ImageConfiguration]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(box_decoration._BoxDecorationPainter, I[1]);
  dart.setFieldSignature(box_decoration._BoxDecorationPainter, () => ({
    __proto__: dart.getFields(box_decoration._BoxDecorationPainter.__proto__),
    [_decoration$]: dart.finalFieldType(box_decoration.BoxDecoration),
    [_cachedBackgroundPaint]: dart.fieldType(dart.nullable(ui.Paint)),
    [_rectForCachedBackgroundPaint]: dart.fieldType(dart.nullable(ui.Rect)),
    [_imagePainter]: dart.fieldType(dart.nullable(decoration_image.DecorationImagePainter))
  }));
  dart.defineExtensionMethods(box_decoration._BoxDecorationPainter, ['toString']);
  dart.trackLibraries("packages/flutter/src/painting/box_decoration.dart", {
    "package:flutter/src/painting/box_decoration.dart": box_decoration
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["box_decoration.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/box_decoration.dart.lib.js"}');
  // Exports:
  return {
    src__painting__box_decoration: box_decoration
  };
}));

//# sourceMappingURL=box_decoration.dart.lib.js.map
