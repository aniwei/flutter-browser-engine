import { Color } from '@rendering'
import { Skia, SkiaFilterQuality } from '@skia/Skia'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { ManagedSkiaColorFilter, ComposeColorFilter, MatrixColorFilter, ColorFilter } from './ColorFilter'
import { MaskFilter } from './MaskFilter'

import type { SkiaPaint, SkiaImageFilter, SkiaBlendMode, SkiaPaintStyle, SkiaStrokeCap, SkiaStrokeJoin } from '@skia/Skia'
import type { ManagedSkImageFilterConvertible } from './ImageFilter'
import type { Shader } from './Shader'

function property<T> (
  getter: { (v: T, k?: string): T } = function (v, k) { return v as T },
  setter: { (v: T, k: string): void } = function (this, v: T, k) { this[k] = v }
) {
  return function (
    target,
    key: string
  ) {
    const k = `_${key}` 

    Reflect.defineProperty(target, key, {
      get () {
        return Reflect.apply(getter, this, [this[k], k])
      },
      set (value: T) {
        return Reflect.apply(setter, this, [value, k])
      }
    })
  }
}

export class Paint extends ManagedSkiaObject<SkiaPaint> {
  static get kDefaultPaintColor () {
    return new Color(0xFF000000)
  } 
  static get kInvertColorMatrix () {
    return Float32Array.from([
      -1.0, 0, 0, 1.0, 0, // row
      0, -1.0, 0, 1.0, 0, // row
      0, 0, -1.0, 1.0, 0, // row
      1.0, 1.0, 1.0, 1.0, 0
    ])
  }

  static get kInvertColorFilter () {
    return ManagedSkiaColorFilter.malloc(MatrixColorFilter.malloc(Paint.kInvertColorMatrix))
  } 

  static malloc () {
    return new Paint(new Skia.Paint())
  }

  @property<SkiaBlendMode>(function (value) {
    return value
  }, function (this, blendMode: SkiaBlendMode) {
    if (this.blendMode !== blendMode) {
      this._blendMode = blendMode
      this.skia.setBlendMode(blendMode)
    }
  }) public blendMode: SkiaBlendMode = Skia.BlendMode.SrcOver

  @property<SkiaPaintStyle>(function (value) {
    return value
  }, function (this, style: SkiaPaintStyle) {
    if (this.style !== style) {
      this._style = style
      this.skia.setStyle(style)
    }
  }) public style: SkiaPaintStyle = Skia.PaintStyle.Fill

  @property<number>(function (value) {
    return value
  }, function (this, strokeWidth: number) {
    if (this._strokeWidth !== strokeWidth) {
      this._strokeWidth = strokeWidth
      this.skia.setStrokeWidth(strokeWidth)
    }
  }) public strokeWidth: number = 0.0

  @property<SkiaStrokeCap>(function (value) {
    return value
  }, function (this, strokeCap: SkiaStrokeCap) {
    if (this._strokeCap !== strokeCap) {
      this._strokeCap = strokeCap
      this.skia.setStrokeCap(strokeCap)
    }
  }) public strokeCap: SkiaStrokeCap = Skia.StrokeCap.Butt

  @property<SkiaStrokeJoin>(function (value) {
    return value
  }, function (this, strokeJoin: SkiaStrokeJoin) {
    if (this.strokeJoin !== strokeJoin) {
      this._strokeJoin = strokeJoin
      this.skia.setStrokeJoin(strokeJoin)
    }
  }) public strokeJoin: SkiaStrokeJoin = Skia.StrokeJoin.Miter

  @property<boolean>(function (value) {
    return value
  }, function (this, isAntiAlias: boolean) {
    if (this.isAntiAlias !== isAntiAlias) {
      this._isAntiAlias = isAntiAlias
      this.skia.setAntiAlias(isAntiAlias)
    }
  }) public isAntiAlias: boolean = true

  @property<Color>(function (value) {
    return value
  }, function (this, color: Color) {
    if (this.color !== color) {
      this._color = color
      this.skia.setColorInt(color.value)
    }
  }) public color: Color = Paint.kDefaultPaintColor

  @property<boolean>(function (value) {
    return value
  }, function (this, invertColors: boolean) {
    if (this.invertColors !== invertColors) {
      if (!invertColors) {
        this.effectiveColorFilter = this.originalColorFilter
        this.originalColorFilter = null
      } else {
        this.originalColorFilter = this.effectiveColorFilter
        if (this.effectiveColorFilter === null) {
          this.effectiveColorFilter = Paint.kInvertColorFilter
        } else {
          this.effectiveColorFilter = ManagedSkiaColorFilter.malloc(
            ComposeColorFilter.malloc({
              outer: Paint.kInvertColorFilter,
              inner: this.effectiveColorFilter
            })
          )
        }
      }
    }
  }) public invertColors: boolean = false

  @property<Shader>(function (value) {
    return value
  }, function (this, shader: Shader) {
    if (this.shader !== shader) {
      this._shader = shader
      
      if (this.shader !== null) {
        this.skia.setShader((this.shader as Shader).withQuality(this.filterQuality))
      }
    }
  }) public shader: Shader | null = null

  @property<MaskFilter>(function (value) {
    return value
  }, function (this, maskFilter: MaskFilter) {
    if (maskFilter && this.maskFilter !== maskFilter) {
      this._maskFilter = maskFilter
      this.skia.setMaskFilter(maskFilter.skia!)
    }
  }) public maskFilter: MaskFilter | null = null

  // @TODO
  @property<SkiaFilterQuality>(function (value) {
    return value
  }, function (this, filterQuality: SkiaFilterQuality) {
    if (this.filterQuality !== filterQuality) {
      this._filterQuality = filterQuality
      if (this.shader !== null) {
        this.skia.setShader((this.shader as Shader).withQuality(this.filterQuality))
      }
    }
  }) public filterQuality: SkiaFilterQuality = SkiaFilterQuality.None

  @property<ColorFilter>(function (value) {
    return value
  }, function (this, colorFilter: ColorFilter) {
    if (this.colorFilter !== colorFilter) {
      this.originalColorFilter = null

      if (colorFilter === null) {
        this.effectiveColorFilter = null
      } else {
        this.effectiveColorFilter = ManagedSkiaColorFilter.malloc(colorFilter)
      }

      if (this.invertColors) {
        this.originalColorFilter = this.effectiveColorFilter

        if (this.effectiveColorFilter === null) {
          this.effectiveColorFilter = Paint.kInvertColorFilter
        } else {
          this.effectiveColorFilter = ManagedSkiaColorFilter.malloc(
            ComposeColorFilter.malloc({
              inner: Paint.kInvertColorFilter,
              outer: this.effectiveColorFilter
            })
          )
        }
      } 
      
      if (this.effectiveColorFilter !== null) {
        this.skia.setColorFilter(this.effectiveColorFilter.skia)
      }
    }
  }) public colorFilter: ColorFilter | null = null

  @property<number>(function (value) {
    return value
  }, function (this, strokeMiterLimit: number) {
    if (this.strokeMiterLimit !== strokeMiterLimit) {
      this._strokeMiterLimit = strokeMiterLimit
      this.skia.setStrokeMiter(strokeMiterLimit)
    }
  }) public strokeMiterLimit: number = 0

  @property<ManagedSkImageFilterConvertible>(function (value) {
    return value
  }, function (this, imageFilter: ManagedSkImageFilterConvertible) {
    if (this.imageFilter !== imageFilter) {
      this._imageFilter = imageFilter

      if (imageFilter !== null) {
        this.managedImageFilter = imageFilter.imageFilter
        this.skia.setImageFilter(this.managedImageFilter.skia)
      }
    }
  }) public imageFilter: ManagedSkImageFilterConvertible | null = null

  public originalColorFilter: ManagedSkiaColorFilter | null = null
  public effectiveColorFilter: ManagedSkiaColorFilter | null = null
  public managedImageFilter: ManagedSkiaObject<SkiaImageFilter> | null = null

  constructor (skia: SkiaPaint) {
    super(skia)

    this.skia.setAntiAlias(this.isAntiAlias)
    this.skia.setColorInt(this.color.value)
  }

  resurrect (): SkiaPaint {
    const paint = new Skia.Paint()
    paint.setBlendMode(this.blendMode)
    paint.setStyle(this.style)
    paint.setStrokeWidth(this.strokeWidth)
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color.value)
    paint.setShader(this.shader!.withQuality(this.filterQuality)) 
    paint.setMaskFilter(this.maskFilter!.skia)
    paint.setColorFilter(this.effectiveColorFilter?.skia!)
    paint.setImageFilter((this.managedImageFilter as ManagedSkiaObject<SkiaImageFilter>).skia)
    paint.setStrokeCap(this.strokeCap)
    paint.setStrokeJoin(this.strokeJoin)
    paint.setStrokeMiter(this.strokeMiterLimit)

    return paint
  }

  delete () {
    this.skia.delete()
  }
}