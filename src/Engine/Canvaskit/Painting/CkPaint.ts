import { BlendMode, Color, PaintingStyle, StrokeCap, StrokeJoin } from '@UI'
import { toSkBlendMode, toSkPaintStyle } from '../CanvaskitAPI'

import type { SkPaint } from '../CanvaskitAPI'
import { bool, double } from '@Types';

const defaultPaintColor = new Color(0xFF000000)

export class CkPaint extends ManagedSkiaObject<SkPaint> implements ui.Paint {

  public _blendMode: BlendMode = BlendMode.srcOver
  public get blendMode () {
    return this._blendMode
  }
  
  public set blendMode (value: BlendMode) {
    if (this._blendMode === value) {
      return
    }

    this._blendMode = value
    this.skiaObject.setBlendMode(toSkBlendMode(value))
  }

  public _style: PaintingStyle = PaintingStyle.fill
  public get style () {
    return this._style
  }
  
  public set style (value: BlendMode) {
    if (this._style === value) {
      return
    }

    this._style = value
    this.skiaObject.setBlendMode(toSkPaintStyle(value))
  }

  public _strokeWidth: double = 0.0
  public get strokeWidth () {
    return this._strokeWidth
  }
  
  public set strokeWidth (value: double) {
    if (this._strokeWidth === value) {
      return
    }

    this._strokeWidth = value
    this.skiaObject.setBlendMode(toSkBlendMode(value));
  }

  public _strokeCap: StrokeCap = StrokeCap.butt
  public get strokeCap () {
    return this._strokeCap
  }
  
  public set strokeCap (value: StrokeCap) {
    if (this._strokeCap === value) {
      return
    }

    this._strokeWidth = value
    this.skiaObject.setBlendMode(toSkStrokeCap(value));
  }

  public _strokeJoin: StrokeJoin = StrokeJoin.miter
  public get strokeJoin () {
    return this._strokeJoin
  }
  
  public set strokeJoin (value: StrokeCap) {
    if (this._strokeJoin === value) {
      return
    }

    this._strokeJoin = value
    this.skiaObject.setBlendMode(toSkStrokeJoin(value));
  }

  public _isAntiAlias: bool = true
  public get isAntiAlias () {
    return this._isAntiAlias
  }
  
  public set isAntiAlias (value: StrokeCap) {
    if (this._isAntiAlias === value) {
      return
    }

    this._isAntiAlias = value
    this.skiaObject.setBlendMode(toSkStrokeJoin(value));
  }

  public _color: Color = defaultPaintColor
  public get isAntiAlias () {
    return this._isAntiAlias
  }
  
  public set isAntiAlias (value: StrokeCap) {
    if (this._isAntiAlias === value) {
      return
    }

    this._isAntiAlias = value
    this.skiaObject.setBlendMode(toSkStrokeJoin(value));
  }

  public _inverColors: bool = false
  public get isAntiAlias () {
    return this._isAntiAlias
  }
  
  public set isAntiAlias (value: StrokeCap) {
    if (this._isAntiAlias === value) {
      return
    }

    this._isAntiAlias = value
    this.skiaObject.setBlendMode(toSkStrokeJoin(value));
  }

  // The original color filter before we inverted colors. If we set
  // `invertColors` back to `false`, then restore this filter rather than
  // invert the color filter again.
  ManagedSkColorFilter? _originalColorFilter;

  @override
  ui.Shader? get shader => _shader;
  @override
  set shader(ui.Shader? value) {
    if (_shader == value) {
      return;
    }
    _shader = value as CkShader?;
    skiaObject.setShader(_shader?.withQuality(_filterQuality));
  }

  CkShader? _shader;

  @override
  ui.MaskFilter? get maskFilter => _maskFilter;
  @override
  set maskFilter(ui.MaskFilter? value) {
    if (value == _maskFilter) {
      return;
    }
    _maskFilter = value;
    if (value != null) {
      // CanvasKit returns `null` if the sigma is `0` or infinite.
      if (!(value.webOnlySigma.isFinite && value.webOnlySigma > 0)) {
        // Don't create a [CkMaskFilter].
        _ckMaskFilter = null;
      } else {
        _ckMaskFilter = CkMaskFilter.blur(
          value.webOnlyBlurStyle,
          value.webOnlySigma,
        );
      }
    } else {
      _ckMaskFilter = null;
    }
    skiaObject.setMaskFilter(_ckMaskFilter?.skiaObject);
  }

  ui.MaskFilter? _maskFilter;
  CkMaskFilter? _ckMaskFilter;

  @override
  ui.FilterQuality get filterQuality => _filterQuality;
  @override
  set filterQuality(ui.FilterQuality value) {
    if (_filterQuality == value) {
      return;
    }
    _filterQuality = value;
    skiaObject.setShader(_shader?.withQuality(value));
  }

  ui.FilterQuality _filterQuality = ui.FilterQuality.none;

  @override
  ui.ColorFilter? get colorFilter => _effectiveColorFilter?.colorFilter;
  @override
  set colorFilter(ui.ColorFilter? value) {
    if (colorFilter == value) {
      return;
    }

    _originalColorFilter = null;
    if (value == null) {
      _effectiveColorFilter = null;
    } else {
      _effectiveColorFilter = ManagedSkColorFilter(value as CkColorFilter);
    }

    if (invertColors) {
      _originalColorFilter = _effectiveColorFilter;
      if (_effectiveColorFilter == null) {
        _effectiveColorFilter = _invertColorFilter;
      } else {
        _effectiveColorFilter = ManagedSkColorFilter(
            CkComposeColorFilter(_invertColorFilter, _effectiveColorFilter!));
      }
    }

    skiaObject.setColorFilter(_effectiveColorFilter?.skiaObject);
  }

  /// The effective color filter.
  ///
  /// This is a combination of the `colorFilter` and `invertColors` properties.
  ManagedSkColorFilter? _effectiveColorFilter;

  @override
  double get strokeMiterLimit => _strokeMiterLimit;
  @override
  set strokeMiterLimit(double value) {
    if (_strokeMiterLimit == value) {
      return;
    }
    _strokeMiterLimit = value;
    skiaObject.setStrokeMiter(value);
  }

  double _strokeMiterLimit = 0.0;

  @override
  ui.ImageFilter? get imageFilter => _imageFilter;
  @override
  set imageFilter(ui.ImageFilter? value) {
    if (_imageFilter == value) {
      return;
    }

    _imageFilter = value as CkManagedSkImageFilterConvertible?;
    _managedImageFilter = _imageFilter?.imageFilter;
    skiaObject.setImageFilter(_managedImageFilter?.skiaObject);
  }

  CkManagedSkImageFilterConvertible? _imageFilter;
  ManagedSkiaObject<SkImageFilter>? _managedImageFilter;

  createDefault (): SkPaint {
    const paint: SkPaint = new CanvasKit.SkPaint()
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color.value)
    return paint
  }

  resurrect () {
    const paint: SkPaint = new SkPaint()
    
    paint.setBlendMode(toSkBlendMode(this.blendMode))
    paint.setStyle(toSkPaintStyle(this.style))
    paint.setStrokeWidth(this.strokeWidth)
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color.value)
    paint.setShader(this.shader?.withQuality(this.filterQuality))
    paint.setMaskFilter(this.ckMaskFilter?.skiaObject)
    paint.setColorFilter(this.effectiveColorFilter?.skiaObject)
    paint.setImageFilter(this.managedImageFilter?.skiaObject)
    paint.setStrokeCap(toSkStrokeCap(this.strokeCap))
    paint.setStrokeJoin(toSkStrokeJoin(this.strokeJoin))
    paint.setStrokeMiter(this.strokeMiterLimit)
    
    return paint
  }

  delete (): void {
    this.rawSkiaObject?.delete()
  }
}
