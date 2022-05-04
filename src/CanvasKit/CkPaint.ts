import { ManagedSkiaObject, Skia, SkiaFilterQuality } from '@Skia'
import type { BlendMode, ColorFilter, ColorInt, MaskFilter, Paint, StrokeCap, StrokeJoin } from 'canvaskit-wasm'
import type { CkManagedSkImageFilterConvertible } from './CkImageFilter'
import type { CkShader } from './CkShader'

export class CkPaint extends ManagedSkiaObject<Paint> {
  static kDefaultPaintColor = 0xFF000000
  static kInvertColorMatrix = Float32Array.from([
    -1.0, 0, 0, 1.0, 0, // row
    0, -1.0, 0, 1.0, 0, // row
    0, 0, -1.0, 1.0, 0, // row
    1.0, 1.0, 1.0, 1.0, 0
  ])

  static kInvertColorFilter = null

  public _blendMode: BlendMode = Skia.BlendMode.SrcOver
  public get blendMode () {
    return this._blendMode
  }
  public set blendMode (blendMode: BlendMode) {
    if (this.blendMode !== blendMode) {
      this._blendMode = blendMode
      this.skia.setBlendMode(blendMode)
    }
  }

  public _style
  public get style () {
    return this._style
  }
  public set style (style) {
    if (this.style !== style) {
      this._style = style
      this.skia.setStyle(style)
    }
  }

  public _strokeWidth: number = 0.0
  public get strokeWidth () {
    return this._strokeWidth
  }
  public set strokeWidth (strokeWidth: number) {
    if (this._strokeWidth !== strokeWidth) {
      this._strokeWidth = strokeWidth
      this.skia.setStrokeWidth(strokeWidth)
    }
  }

  public _strokeCap: StrokeCap = Skia.StrokeCap.Butt
  public get strokeCap () {
    return this._strokeCap
  }
  public set strokeCap (strokeCap: StrokeCap) {
    if (this._strokeCap !== strokeCap) {
      this._strokeCap = strokeCap
      this.skia.setStrokeCap(strokeCap)
    }
  }

  public _strokeJoin: StrokeJoin = Skia.StrokeJoin.Miter
  public get strokeJoin () {
    return this._strokeJoin
  }
  public set strokeJoin (strokeJoin: StrokeJoin) {
    if (this._strokeJoin !== strokeJoin) {
      this._strokeJoin = strokeJoin
      this.skia.setStrokeJoin(strokeJoin)
    }
  }

  public _isAntiAlias: boolean = true
  public get isAntiAlias () {
    return this._isAntiAlias
  }
  public set isAntiAlias (isAntiAlias: boolean) {
    if (this.isAntiAlias !== isAntiAlias) {
      this._isAntiAlias = isAntiAlias
      this.skia.setAntiAlias(isAntiAlias)
    }
  }

  public _color: ColorInt = CkPaint.kDefaultPaintColor
  public get color () {
    return this._color as ColorInt
  }
  public set color (color: ColorInt) {
    if (this.color !== color) {
      this._color = color
      this.skia.setColorInt(color)
    }
  }

  public _invertColors = false
  public get invertColors () {
    return this._invertColors
  }
  public set invertColors (invertColors: boolean) {
    // @TODO
  }

  public _shader: CkShader | null = null
  public get shader () {
    return this.shader
  }
  public set shader (shader: CkShader) {
    if (this.shader !== shader) {
      this._shader = shader
      // @TODO
      this.skia.setShader(this.shader.withQuality(this.filterQuality))
    }
  }

  public _maskFilter: MaskFilter | null = null
  public get maskFilter () {
    return this._maskFilter as MaskFilter
  }
  public set maskFilter (maskFilter: MaskFilter) {
    if (this.maskFilter !== maskFilter) {
      this._maskFilter = maskFilter
      this.skia.setMaskFilter(maskFilter)
    }
  }

  public _filterQuality: SkiaFilterQuality = SkiaFilterQuality.None
  public get filterQuality () {
    return this._filterQuality
  }
  // @TODO
  public set filterQuality (filterQuality: SkiaFilterQuality) {
    if (this.filterQuality !== filterQuality) {
      this._filterQuality = filterQuality
      this.skia.setShader(this.shader.withQuality(this.filterQuality))
    }
  }

  public _colorFilter: ColorFilter | null = null
  public get colorFilter () {
    return this._colorFilter as ColorFilter
  }
  public set colorFilter (colorFilter: ColorFilter) {
    if (this.colorFilter !== colorFilter) {
       // @TODO

       this.skia.setColorFilter(colorFilter)
    }
  }

  public _strokeMiterLimit: number = 0.0
  public get strokeMiterLimit () {
    return this._strokeMiterLimit
  }
  public set strokeMiterLimit (strokeMiterLimit: number) {
    if (this.strokeMiterLimit !== strokeMiterLimit) {
      this._strokeMiterLimit = strokeMiterLimit
      this.skia.setStrokeMiter(strokeMiterLimit)
    }
  }

   // @TODO
  public _imageFilter: CkManagedSkImageFilterConvertible | null = null
  public get imageFilter () {
    return this._imageFilter as CkManagedSkImageFilterConvertible
  }
  public set imageFilter (imageFilter: CkManagedSkImageFilterConvertible) {
    if (this._imageFilter !== imageFilter) {
      this._imageFilter = imageFilter
      this.managedImageFilter = imageFilter.imageFilter
      this.skia.setImageFilter(this.managedImageFilter.skia)
    }
  }

  public originalColorFilter // @TODO
  public effectiveColorFilter // @TODO
  public managedImageFilter // @TODO

  constructor () {
    super()
  }

  resurrect(): Paint {
    const paint = new Skia.Paint()
    paint.setBlendMode(this.blendMode)
    paint.setStyle(this.style)
    paint.setStrokeWidth(this.strokeWidth)
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color)
    paint.setShader(this.shader.withQuality(this.filterQuality)) // @TODO
    paint.setMaskFilter(this.maskFilter)
    paint.setColorFilter(this.colorFilter)
    paint.setImageFilter(this.managedImageFilter)
    paint.setStrokeCap(this.strokeCap)
    paint.setStrokeJoin(this.strokeJoin)
    paint.setStrokeMiter(this.strokeMiterLimit)

    return paint
  }

  create(): Paint {
    const paint = new Skia.Paint()
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color)
    return paint
  }

  delete() {
    this.skia.delete()
  }
}