import { ManagedSkiaObject, Skia, SkiaFilterQuality } from '@Skia'
import { setter } from '@Shared'
import type { BlendMode, ColorFilter, ColorInt, ImageFilter, MaskFilter, Paint, PaintStyle, StrokeCap, StrokeJoin } from 'canvaskit-wasm'
import type { CkManagedSkImageFilterConvertible } from './CkImageFilter'
import type { CkShader } from './CkShader'
import { ManagedSkiaColorFilter } from './CkColorFilter'

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

  static malloc () {
    return new CkPaint(this.init())
  }

  static init () {
    return new Skia.Paint()
  }

  @setter(function (this, blendMode: BlendMode) {
    if (this.blendMode !== blendMode) {
      this._blendMode = blendMode
      this.skia.setBlendMode(blendMode)
    }
  }) public blendMode: BlendMode = Skia.BlendMode.SrcOver

  @setter(function (this, style: PaintStyle) {
    if (this.style !== style) {
      this._style = style
      this.skia.setStyle(style)
    }
  }) public style: PaintStyle = Skia.PaintStyle.Fill

  @setter(function (this, strokeWidth: number) {
    if (this._strokeWidth !== strokeWidth) {
      this._strokeWidth = strokeWidth
      this.skia.setStrokeWidth(strokeWidth)
    }
  }) public strokeWidth: number = 0.0

  @setter(function (this, strokeCap: StrokeCap) {
    if (this._strokeCap !== strokeCap) {
      this._strokeCap = strokeCap
      this.skia.setStrokeCap(strokeCap)
    }
  }) public strokeCap: StrokeCap = Skia.StrokeCap.Butt

  @setter(function (this, strokeJoin: StrokeJoin) {
    if (this.strokeJoin !== strokeJoin) {
      this._strokeJoin = strokeJoin
      this.skia.setStrokeJoin(strokeJoin)
    }
  }) public strokeJoin: StrokeJoin = Skia.StrokeJoin.Miter

  @setter(function (this, isAntiAlias: boolean) {
    if (this.isAntiAlias !== isAntiAlias) {
      this._isAntiAlias = isAntiAlias
      this.skia.setAntiAlias(isAntiAlias)
    }
  }) public isAntiAlias: boolean = true

  @setter(function (this, color: ColorInt) {
    if (this.color !== color) {
      this._color = color
      this.skia.setColorInt(color)
    }
  }) public color: ColorInt = CkPaint.kDefaultPaintColor

  @setter(function (this, invertColors: boolean) {
    // @TODO
  }) public invertColors: boolean = false

  @setter(function (this, shader: CkShader) {
    if (this.shader !== shader) {
      this._shader = shader
      
      if (this.shader !== null) {
        this.skia.setShader((this.shader as CkShader).withQuality(this.filterQuality))
      }
    }
  }) public shader: CkShader | null = null

  @setter(function (this, maskFilter: MaskFilter) {
    if (this.maskFilter !== maskFilter) {
      this._maskFilter = maskFilter
      this.skia.setMaskFilter(maskFilter)
    }
  }) public maskFilter: MaskFilter | null = null

  // @TODO
  @setter(function (this, filterQuality: SkiaFilterQuality) {
    if (this.filterQuality !== filterQuality) {
      this._filterQuality = filterQuality
      if (this.shader !== null) {
        this.skia.setShader((this.shader as CkShader).withQuality(this.filterQuality))
      }
    }
  }) public filterQuality: SkiaFilterQuality = SkiaFilterQuality.None

  @setter(function (this, colorFilter: ColorFilter) {
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
      
      if (this.effectiveColorFilter !== null) {
        this.skia.setColorFilter(this.effectiveColorFilter.skia)
      }
    }
  }) public colorFilter: ColorFilter | null = null

  @setter(function (this, strokeMiterLimit: number) {
    if (this.strokeMiterLimit !== strokeMiterLimit) {
      this._strokeMiterLimit = strokeMiterLimit
      this.skia.setStrokeMiter(strokeMiterLimit)
    }
  }) public strokeMiterLimit: number = 0

   // @TODO
  @setter(function (this, imageFilter: CkManagedSkImageFilterConvertible) {
    if (this.imageFilter !== imageFilter) {
      this._imageFilter = imageFilter

      if (imageFilter !== null) {
        this.managedImageFilter = imageFilter.imageFilter
        this.skia.setImageFilter(this.managedImageFilter.skia)
      }
    }
  }) public imageFilter: ImageFilter | null = null

  public originalColorFilter: ManagedSkiaColorFilter | null = null
  public effectiveColorFilter: ManagedSkiaColorFilter | null = null
  public managedImageFilter: ManagedSkiaObject<ImageFilter> | null = null

  constructor (skia: Paint) {
    super(skia)

    this.skia.setAntiAlias(this.isAntiAlias)
    this.skia.setColorInt(this.color)
  }

  resurrect (): Paint {
    const paint = CkPaint.init()
    paint.setBlendMode(this.blendMode)
    paint.setStyle(this.style)
    paint.setStrokeWidth(this.strokeWidth)
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color)
    paint.setShader((this.shader as CkShader).withQuality(this.filterQuality)) 
    paint.setMaskFilter(this.maskFilter as MaskFilter)
    paint.setColorFilter(this.colorFilter as ColorFilter)
    paint.setImageFilter((this.managedImageFilter as ManagedSkiaObject<ImageFilter>).skia)
    paint.setStrokeCap(this.strokeCap)
    paint.setStrokeJoin(this.strokeJoin)
    paint.setStrokeMiter(this.strokeMiterLimit)

    return paint
  }

  delete () {
    this.skia.delete()
  }
}