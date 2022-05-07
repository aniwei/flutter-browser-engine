import { ManagedSkiaObject, Skia, SkiaFilterQuality } from '@Skia'
import type { BlendMode, ColorFilter, ColorInt, ImageFilter, MaskFilter, Paint, PaintStyle, StrokeCap, StrokeJoin } from 'canvaskit-wasm'
import type { CkManagedSkImageFilterConvertible } from './CkImageFilter'
import type { CkShader } from './CkShader'

const a = () => {}

export class CkPaint extends ManagedSkiaObject<Paint> {
  static kDefaultPaintColor = 0xFF000000
  static kInvertColorMatrix = Float32Array.from([
    -1.0, 0, 0, 1.0, 0, // row
    0, -1.0, 0, 1.0, 0, // row
    0, 0, -1.0, 1.0, 0, // row
    1.0, 1.0, 1.0, 1.0, 0
  ])

  static kInvertColorFilter = null

  public _blendMode!: BlendMode
  public get blendMode () {
    return this._blendMode
  }
  public set blendMode (blendMode: BlendMode) {
    if (this.blendMode !== blendMode) {
      this._blendMode = blendMode
      this.skia.setBlendMode(blendMode)
    }
  }

  public _style!: PaintStyle
  public get style () {
    return this._style
  }
  public set style (style) {
    if (this.style !== style) {
      this._style = style
      this.skia.setStyle(style)
    }
  }

  public _strokeWidth!: number
  public get strokeWidth () {
    return this._strokeWidth
  }
  public set strokeWidth (strokeWidth: number) {
    if (this._strokeWidth !== strokeWidth) {
      this._strokeWidth = strokeWidth
      this.skia.setStrokeWidth(strokeWidth)
    }
  }

  public _strokeCap!: StrokeCap
  public get strokeCap () {
    return this._strokeCap
  }
  public set strokeCap (strokeCap: StrokeCap) {
    if (this._strokeCap !== strokeCap) {
      this._strokeCap = strokeCap
      this.skia.setStrokeCap(strokeCap)
    }
  }

  public _strokeJoin!: StrokeJoin
  public get strokeJoin () {
    return this._strokeJoin
  }
  public set strokeJoin (strokeJoin: StrokeJoin) {
    if (this._strokeJoin !== strokeJoin) {
      this._strokeJoin = strokeJoin
      this.skia.setStrokeJoin(strokeJoin)
    }
  }

  public _isAntiAlias!: boolean
  public get isAntiAlias () {
    return this._isAntiAlias
  }
  public set isAntiAlias (isAntiAlias: boolean) {
    if (this.isAntiAlias !== isAntiAlias) {
      this._isAntiAlias = isAntiAlias
      this.skia.setAntiAlias(isAntiAlias)
    }
  }

  public _color!: ColorInt
  public get color () {
    return this._color as ColorInt
  }
  public set color (color: ColorInt) {
    if (this.color !== color) {
      this._color = color
      this.skia.setColorInt(color)
    }
  }

  public _invertColors!: boolean
  public get invertColors () {
    return this._invertColors
  }
  public set invertColors (invertColors: boolean) {
    // @TODO
  }

  public _shader!: CkShader | null
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

  public _maskFilter!: MaskFilter | null
  public get maskFilter () {
    return this._maskFilter as MaskFilter
  }
  public set maskFilter (maskFilter: MaskFilter) {
    if (this.maskFilter !== maskFilter) {
      this._maskFilter = maskFilter
      this.skia.setMaskFilter(maskFilter)
    }
  }

  public _filterQuality!: SkiaFilterQuality
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

  public _colorFilter!: ColorFilter | null
  public get colorFilter () {
    return this._colorFilter as ColorFilter
  }
  public set colorFilter (colorFilter: ColorFilter) {
    if (this.colorFilter !== colorFilter) {
      this.originalColorFilter = null

      if (colorFilter === null) {
        this.effectiveColorFilter = null
      } else {
        this.effectiveColorFilter // @TODO
      }

      if (this.invertColors) {
        this.originalColorFilter = this.effectiveColorFilter

        if (this.effectiveColorFilter === null) {
          this.effectiveColorFilter = CkPaint.kInvertColorFilter
        } else {
          this.effectiveColorFilter // @TODO
        }
      } 


       // @TODO

       this.skia.setColorFilter(this.effectiveColorFilter.skia)
    }
  }

  public _strokeMiterLimit!: number
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
  public _imageFilter!: CkManagedSkImageFilterConvertible | null
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
  public managedImageFilter!: ManagedSkiaObject<ImageFilter> | null // @TODO

  constructor () {
    super()
  }

  resurrect (): Paint {
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

  init (skia: Paint): Paint {
    this._blendMode = Skia.BlendMode.SrcOver
    this._style = Skia.PaintStyle.Fill
    this._strokeWidth = 0.0
    this._strokeCap = Skia.StrokeCap.Butt
    this._strokeJoin = Skia.StrokeJoin.Miter
    this._color = CkPaint.kDefaultPaintColor
    this._isAntiAlias = true
    this._invertColors = false
    this._shader = null
    this._maskFilter = null
    this._filterQuality = SkiaFilterQuality.None
    this._colorFilter = null
    this._strokeMiterLimit = 0
    this._imageFilter = null

    this.managedImageFilter = null


    this.skia.setAntiAlias(this.isAntiAlias)
    this.skia.setColorInt(this.color)
    
    return skia
  }

  malloc (): Paint {
    this.skia = new Skia.Paint()
    return this.skia
  }

  delete () {
    this.skia.delete()
  }
}