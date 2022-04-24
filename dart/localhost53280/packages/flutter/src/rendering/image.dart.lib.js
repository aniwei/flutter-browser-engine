define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart', 'packages/flutter/src/painting/decoration_image.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/animation/listener_helpers.dart', 'packages/flutter/src/painting/box_fit.dart'], (function load__packages__flutter__src__rendering__image_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart, packages__flutter__src__painting__decoration_image$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__animation__listener_helpers$46dart, packages__flutter__src__painting__box_fit$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _engine = dart_sdk._engine;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  const decoration_image = packages__flutter__src__painting__decoration_image$46dart.src__painting__decoration_image;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const animation = packages__flutter__src__animation__listener_helpers$46dart.src__animation__animation;
  const box_fit = packages__flutter__src__painting__box_fit$46dart.src__painting__box_fit;
  var image$ = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    DiagnosticsPropertyOfImage: () => (T.DiagnosticsPropertyOfImage = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Image)))(),
    AnimationOfdouble: () => (T.AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))(),
    AnimationNOfdouble: () => (T.AnimationNOfdouble = dart.constFn(dart.nullable(T.AnimationOfdouble())))(),
    DiagnosticsPropertyOfAnimationNOfdouble: () => (T.DiagnosticsPropertyOfAnimationNOfdouble = dart.constFn(diagnostics.DiagnosticsProperty$(T.AnimationNOfdouble())))(),
    EnumPropertyOfBlendMode: () => (T.EnumPropertyOfBlendMode = dart.constFn(diagnostics.EnumProperty$(ui.BlendMode)))(),
    EnumPropertyOfBoxFit: () => (T.EnumPropertyOfBoxFit = dart.constFn(diagnostics.EnumProperty$(box_fit.BoxFit)))(),
    DiagnosticsPropertyOfAlignmentGeometry: () => (T.DiagnosticsPropertyOfAlignmentGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.AlignmentGeometry)))(),
    EnumPropertyOfImageRepeat: () => (T.EnumPropertyOfImageRepeat = dart.constFn(diagnostics.EnumProperty$(decoration_image.ImageRepeat)))(),
    DiagnosticsPropertyOfRect: () => (T.DiagnosticsPropertyOfRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Rect)))(),
    EnumPropertyOfTextDirection: () => (T.EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    EnumPropertyOfFilterQuality: () => (T.EnumPropertyOfFilterQuality = dart.constFn(diagnostics.EnumProperty$(ui.FilterQuality)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "noRepeat",
        [_Enum_index]: 3
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_Enum__name]: "low",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/image.dart",
    "package:flutter/src/rendering/image.dart"
  ];
  var debugImageLabel$ = dart.privateName(image$, "RenderImage.debugImageLabel");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _resolvedAlignment = dart.privateName(image$, "_resolvedAlignment");
  var _flipHorizontally = dart.privateName(image$, "_flipHorizontally");
  var _colorFilter = dart.privateName(image$, "_colorFilter");
  var _image = dart.privateName(image$, "_image");
  var _width = dart.privateName(image$, "_width");
  var _height = dart.privateName(image$, "_height");
  var _scale = dart.privateName(image$, "_scale");
  var _color = dart.privateName(image$, "_color");
  var _opacity = dart.privateName(image$, "_opacity");
  var _colorBlendMode = dart.privateName(image$, "_colorBlendMode");
  var _fit = dart.privateName(image$, "_fit");
  var _alignment = dart.privateName(image$, "_alignment");
  var _repeat = dart.privateName(image$, "_repeat");
  var _centerSlice = dart.privateName(image$, "_centerSlice");
  var _matchTextDirection = dart.privateName(image$, "_matchTextDirection");
  var _invertColors = dart.privateName(image$, "_invertColors");
  var _textDirection = dart.privateName(image$, "_textDirection");
  var _isAntiAlias = dart.privateName(image$, "_isAntiAlias");
  var _filterQuality = dart.privateName(image$, "_filterQuality");
  var _updateColorFilter = dart.privateName(image$, "_updateColorFilter");
  var _resolve = dart.privateName(image$, "_resolve");
  var _markNeedResolution = dart.privateName(image$, "_markNeedResolution");
  var _sizeForConstraints = dart.privateName(image$, "_sizeForConstraints");
  image$.RenderImage = class RenderImage extends box.RenderBox {
    get debugImageLabel() {
      return this[debugImageLabel$];
    }
    set debugImageLabel(value) {
      this[debugImageLabel$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let image = opts && 'image' in opts ? opts.image : null;
      let debugImageLabel = opts && 'debugImageLabel' in opts ? opts.debugImageLabel : null;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let colorBlendMode = opts && 'colorBlendMode' in opts ? opts.colorBlendMode : null;
      let fit = opts && 'fit' in opts ? opts.fit : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
      let repeat = opts && 'repeat' in opts ? opts.repeat : C[1] || CT.C1;
      let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
      let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let invertColors = opts && 'invertColors' in opts ? opts.invertColors : false;
      let isAntiAlias = opts && 'isAntiAlias' in opts ? opts.isAntiAlias : false;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[2] || CT.C2;
      return new image$.RenderImage.new({image: image, debugImageLabel: debugImageLabel, width: width, height: height, scale: scale, color: color, opacity: opacity, colorBlendMode: colorBlendMode, fit: fit, alignment: alignment, repeat: repeat, centerSlice: centerSlice, matchTextDirection: matchTextDirection, textDirection: textDirection, invertColors: invertColors, isAntiAlias: isAntiAlias, filterQuality: filterQuality});
    }
    [_resolve]() {
      if (this[_resolvedAlignment] != null) return;
      this[_resolvedAlignment] = this.alignment.resolve(this.textDirection);
      this[_flipHorizontally] = this.matchTextDirection && this.textDirection === ui.TextDirection.rtl;
    }
    [_markNeedResolution]() {
      this[_resolvedAlignment] = null;
      this[_flipHorizontally] = null;
      this.markNeedsPaint();
    }
    get image() {
      return this[_image];
    }
    set image(value) {
      let t0;
      if (dart.equals(value, this[_image])) {
        return;
      }
      if (value != null && this[_image] != null && value.isCloneOf(dart.nullCheck(this[_image]))) {
        value.dispose();
        return;
      }
      t0 = this[_image];
      t0 == null ? null : t0.dispose();
      this[_image] = value;
      this.markNeedsPaint();
      if (this[_width] == null || this[_height] == null) this.markNeedsLayout();
    }
    get width() {
      return this[_width];
    }
    set width(value) {
      if (value == this[_width]) return;
      this[_width] = value;
      this.markNeedsLayout();
    }
    get height() {
      return this[_height];
    }
    set height(value) {
      if (value == this[_height]) return;
      this[_height] = value;
      this.markNeedsLayout();
    }
    get scale() {
      return this[_scale];
    }
    set scale(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 143, 12, "value != null");
      if (value === this[_scale]) return;
      this[_scale] = value;
      this.markNeedsLayout();
    }
    [_updateColorFilter]() {
      let t0;
      if (this[_color] == null)
        this[_colorFilter] = null;
      else
        this[_colorFilter] = new _engine.CkBlendModeColorFilter.new(dart.nullCheck(this[_color]), (t0 = this[_colorBlendMode], t0 == null ? ui.BlendMode.srcIn : t0));
    }
    get color() {
      return this[_color];
    }
    set color(value) {
      if (dart.equals(value, this[_color])) return;
      this[_color] = value;
      this[_updateColorFilter]();
      this.markNeedsPaint();
    }
    get opacity() {
      return this[_opacity];
    }
    set opacity(value) {
      let t0, t0$;
      if (dart.equals(value, this[_opacity])) return;
      if (this.attached) {
        t0 = this[_opacity];
        t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsPaint'));
      }
      this[_opacity] = value;
      if (this.attached) {
        t0$ = value;
        t0$ == null ? null : t0$.addListener(dart.bind(this, 'markNeedsPaint'));
      }
    }
    get filterQuality() {
      return this[_filterQuality];
    }
    set filterQuality(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 193, 12, "value != null");
      if (value === this[_filterQuality]) return;
      this[_filterQuality] = value;
      this.markNeedsPaint();
    }
    get colorBlendMode() {
      return this[_colorBlendMode];
    }
    set colorBlendMode(value) {
      if (value == this[_colorBlendMode]) return;
      this[_colorBlendMode] = value;
      this[_updateColorFilter]();
      this.markNeedsPaint();
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (value == this[_fit]) return;
      this[_fit] = value;
      this.markNeedsPaint();
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 239, 12, "value != null");
      if (value._equals(this[_alignment])) return;
      this[_alignment] = value;
      this[_markNeedResolution]();
    }
    get repeat() {
      return this[_repeat];
    }
    set repeat(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 250, 12, "value != null");
      if (value === this[_repeat]) return;
      this[_repeat] = value;
      this.markNeedsPaint();
    }
    get centerSlice() {
      return this[_centerSlice];
    }
    set centerSlice(value) {
      if (dart.equals(value, this[_centerSlice])) return;
      this[_centerSlice] = value;
      this.markNeedsPaint();
    }
    get invertColors() {
      return this[_invertColors];
    }
    set invertColors(value) {
      if (value === this[_invertColors]) return;
      this[_invertColors] = value;
      this.markNeedsPaint();
    }
    get matchTextDirection() {
      return this[_matchTextDirection];
    }
    set matchTextDirection(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 304, 12, "value != null");
      if (value === this[_matchTextDirection]) return;
      this[_matchTextDirection] = value;
      this[_markNeedResolution]();
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (this[_textDirection] == value) return;
      this[_textDirection] = value;
      this[_markNeedResolution]();
    }
    get isAntiAlias() {
      return this[_isAntiAlias];
    }
    set isAntiAlias(value) {
      if (this[_isAntiAlias] === value) {
        return;
      }
      if (!(value !== null)) dart.assertFailed(null, I[0], 334, 12, "value != null");
      this[_isAntiAlias] = value;
      this.markNeedsPaint();
    }
    [_sizeForConstraints](constraints) {
      constraints = new box.BoxConstraints.tightFor({width: this[_width], height: this[_height]}).enforce(constraints);
      if (this[_image] == null) return constraints.smallest;
      return constraints.constrainSizeAndAttemptToPreserveAspectRatio(new ui.Size.new(dart.nullCheck(this[_image]).width[$toDouble]() / this[_scale], dart.nullCheck(this[_image]).height[$toDouble]() / this[_scale]));
    }
    computeMinIntrinsicWidth(height) {
      if (!(height >= 0.0)) dart.assertFailed(null, I[0], 365, 12, "height >= 0.0");
      if (this[_width] == null && this[_height] == null) return 0.0;
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({height: height})).width;
    }
    computeMaxIntrinsicWidth(height) {
      if (!(height >= 0.0)) dart.assertFailed(null, I[0], 373, 12, "height >= 0.0");
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({height: height})).width;
    }
    computeMinIntrinsicHeight(width) {
      if (!(width >= 0.0)) dart.assertFailed(null, I[0], 379, 12, "width >= 0.0");
      if (this[_width] == null && this[_height] == null) return 0.0;
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({width: width})).height;
    }
    computeMaxIntrinsicHeight(width) {
      if (!(width >= 0.0)) dart.assertFailed(null, I[0], 387, 12, "width >= 0.0");
      return this[_sizeForConstraints](new box.BoxConstraints.tightForFinite({width: width})).height;
    }
    hitTestSelf(position) {
      return true;
    }
    computeDryLayout(constraints) {
      return this[_sizeForConstraints](constraints);
    }
    performLayout() {
      this.size = this[_sizeForConstraints](this.constraints);
    }
    attach(owner) {
      let t0;
      object.PipelineOwner.as(owner);
      super.attach(owner);
      t0 = this[_opacity];
      t0 == null ? null : t0.addListener(dart.bind(this, 'markNeedsPaint'));
    }
    detach() {
      let t0;
      t0 = this[_opacity];
      t0 == null ? null : t0.removeListener(dart.bind(this, 'markNeedsPaint'));
      super.detach();
    }
    paint(context, offset) {
      let t0, t0$;
      if (this[_image] == null) return;
      this[_resolve]();
      if (!(this[_resolvedAlignment] != null)) dart.assertFailed(null, I[0], 421, 12, "_resolvedAlignment != null");
      if (!(this[_flipHorizontally] != null)) dart.assertFailed(null, I[0], 422, 12, "_flipHorizontally != null");
      decoration_image.paintImage({canvas: context.canvas, rect: offset['&'](this.size), image: dart.nullCheck(this[_image]), debugImageLabel: this.debugImageLabel, scale: this[_scale], opacity: (t0$ = (t0 = this[_opacity], t0 == null ? null : t0.value), t0$ == null ? 1.0 : t0$), colorFilter: this[_colorFilter], fit: this[_fit], alignment: dart.nullCheck(this[_resolvedAlignment]), centerSlice: this[_centerSlice], repeat: this[_repeat], flipHorizontally: dart.nullCheck(this[_flipHorizontally]), invertColors: this.invertColors, filterQuality: this[_filterQuality], isAntiAlias: this[_isAntiAlias]});
    }
    dispose() {
      let t0;
      t0 = this[_image];
      t0 == null ? null : t0.dispose();
      this[_image] = null;
      super.dispose();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfImage()).new("image", this.image));
      properties.add(new diagnostics.DoubleProperty.new("width", this.width, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("height", this.height, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scale", this.scale, {defaultValue: 1.0}));
      properties.add(new colors.ColorProperty.new("color", this.color, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfAnimationNOfdouble()).new("opacity", this.opacity, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfBlendMode()).new("colorBlendMode", this.colorBlendMode, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfBoxFit()).new("fit", this.fit, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfAlignmentGeometry()).new("alignment", this.alignment, {defaultValue: null}));
      properties.add(new (T.EnumPropertyOfImageRepeat()).new("repeat", this.repeat, {defaultValue: decoration_image.ImageRepeat.noRepeat}));
      properties.add(new (T.DiagnosticsPropertyOfRect()).new("centerSlice", this.centerSlice, {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("matchTextDirection", {value: this.matchTextDirection, ifTrue: "match text direction"}));
      properties.add(new (T.EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("invertColors", this.invertColors));
      properties.add(new (T.EnumPropertyOfFilterQuality()).new("filterQuality", this.filterQuality));
    }
  };
  (image$.RenderImage.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let debugImageLabel = opts && 'debugImageLabel' in opts ? opts.debugImageLabel : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let colorBlendMode = opts && 'colorBlendMode' in opts ? opts.colorBlendMode : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C[0] || CT.C0;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C[1] || CT.C1;
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let invertColors = opts && 'invertColors' in opts ? opts.invertColors : false;
    let isAntiAlias = opts && 'isAntiAlias' in opts ? opts.isAntiAlias : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[2] || CT.C2;
    this[_resolvedAlignment] = null;
    this[_flipHorizontally] = null;
    this[_colorFilter] = null;
    this[debugImageLabel$] = debugImageLabel;
    if (!(scale !== null)) dart.assertFailed(null, I[0], 47, 15, "scale != null");
    if (!(repeat !== null)) dart.assertFailed(null, I[0], 48, 15, "repeat != null");
    if (!(alignment !== null)) dart.assertFailed(null, I[0], 49, 15, "alignment != null");
    if (!(filterQuality !== null)) dart.assertFailed(null, I[0], 50, 15, "filterQuality != null");
    if (!(matchTextDirection !== null)) dart.assertFailed(null, I[0], 51, 15, "matchTextDirection != null");
    if (!(isAntiAlias !== null)) dart.assertFailed(null, I[0], 52, 15, "isAntiAlias != null");
    this[_image] = image;
    this[_width] = width;
    this[_height] = height;
    this[_scale] = scale;
    this[_color] = color;
    this[_opacity] = opacity;
    this[_colorBlendMode] = colorBlendMode;
    this[_fit] = fit;
    this[_alignment] = alignment;
    this[_repeat] = repeat;
    this[_centerSlice] = centerSlice;
    this[_matchTextDirection] = matchTextDirection;
    this[_invertColors] = invertColors;
    this[_textDirection] = textDirection;
    this[_isAntiAlias] = isAntiAlias;
    this[_filterQuality] = filterQuality;
    image$.RenderImage.__proto__.new.call(this);
    this[_updateColorFilter]();
  }).prototype = image$.RenderImage.prototype;
  dart.addTypeTests(image$.RenderImage);
  dart.addTypeCaches(image$.RenderImage);
  dart.setMethodSignature(image$.RenderImage, () => ({
    __proto__: dart.getMethods(image$.RenderImage.__proto__),
    [_resolve]: dart.fnType(dart.void, []),
    [_markNeedResolution]: dart.fnType(dart.void, []),
    [_updateColorFilter]: dart.fnType(dart.void, []),
    [_sizeForConstraints]: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setGetterSignature(image$.RenderImage, () => ({
    __proto__: dart.getGetters(image$.RenderImage.__proto__),
    image: dart.nullable(ui.Image),
    width: dart.nullable(core.double),
    height: dart.nullable(core.double),
    scale: core.double,
    color: dart.nullable(ui.Color),
    opacity: dart.nullable(animation.Animation$(core.double)),
    filterQuality: ui.FilterQuality,
    colorBlendMode: dart.nullable(ui.BlendMode),
    fit: dart.nullable(box_fit.BoxFit),
    alignment: alignment.AlignmentGeometry,
    repeat: decoration_image.ImageRepeat,
    centerSlice: dart.nullable(ui.Rect),
    invertColors: core.bool,
    matchTextDirection: core.bool,
    textDirection: dart.nullable(ui.TextDirection),
    isAntiAlias: core.bool
  }));
  dart.setSetterSignature(image$.RenderImage, () => ({
    __proto__: dart.getSetters(image$.RenderImage.__proto__),
    image: dart.nullable(ui.Image),
    width: dart.nullable(core.double),
    height: dart.nullable(core.double),
    scale: core.double,
    color: dart.nullable(ui.Color),
    opacity: dart.nullable(animation.Animation$(core.double)),
    filterQuality: ui.FilterQuality,
    colorBlendMode: dart.nullable(ui.BlendMode),
    fit: dart.nullable(box_fit.BoxFit),
    alignment: alignment.AlignmentGeometry,
    repeat: decoration_image.ImageRepeat,
    centerSlice: dart.nullable(ui.Rect),
    invertColors: core.bool,
    matchTextDirection: core.bool,
    textDirection: dart.nullable(ui.TextDirection),
    isAntiAlias: core.bool
  }));
  dart.setLibraryUri(image$.RenderImage, I[1]);
  dart.setFieldSignature(image$.RenderImage, () => ({
    __proto__: dart.getFields(image$.RenderImage.__proto__),
    [_resolvedAlignment]: dart.fieldType(dart.nullable(alignment.Alignment)),
    [_flipHorizontally]: dart.fieldType(dart.nullable(core.bool)),
    [_image]: dart.fieldType(dart.nullable(ui.Image)),
    debugImageLabel: dart.fieldType(dart.nullable(core.String)),
    [_width]: dart.fieldType(dart.nullable(core.double)),
    [_height]: dart.fieldType(dart.nullable(core.double)),
    [_scale]: dart.fieldType(core.double),
    [_colorFilter]: dart.fieldType(dart.nullable(ui.ColorFilter)),
    [_color]: dart.fieldType(dart.nullable(ui.Color)),
    [_opacity]: dart.fieldType(dart.nullable(animation.Animation$(core.double))),
    [_filterQuality]: dart.fieldType(ui.FilterQuality),
    [_colorBlendMode]: dart.fieldType(dart.nullable(ui.BlendMode)),
    [_fit]: dart.fieldType(dart.nullable(box_fit.BoxFit)),
    [_alignment]: dart.fieldType(alignment.AlignmentGeometry),
    [_repeat]: dart.fieldType(decoration_image.ImageRepeat),
    [_centerSlice]: dart.fieldType(dart.nullable(ui.Rect)),
    [_invertColors]: dart.fieldType(core.bool),
    [_matchTextDirection]: dart.fieldType(core.bool),
    [_textDirection]: dart.fieldType(dart.nullable(ui.TextDirection)),
    [_isAntiAlias]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/image.dart", {
    "package:flutter/src/rendering/image.dart": image$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/image.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__image: image$
  };
}));

//# sourceMappingURL=image.dart.lib.js.map
