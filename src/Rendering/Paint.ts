import { Color } from '@internal/Color'
import { Skia } from '@skia/binding'
import { FilterQuality } from '@skia'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { ManagedSkiaColorFilter, ComposeColorFilter, MatrixColorFilter, ColorFilter } from './ColorFilter'

import type { IPaint, IImageFilter, BlendMode, PaintStyle, StrokeCap, StrokeJoin } from '@skia'
import type { ManagedSkiaImageFilterConvertible } from './ImageFilter'
import type { MaskFilter } from './MaskFilter'
import type { Shader } from './Shader'



let kInvertColorFilter: ManagedSkiaColorFilter | null = null
const kInvertColorMatrix = Float64Array.from([
  -1.0, 0, 0, 1.0, 0, // row
  0, -1.0, 0, 1.0, 0, // row
  0, 0, -1.0, 1.0, 0, // row
  1.0, 1.0, 1.0, 1.0, 0
])

const kDefaultPaintColor = new Color(0xFF000000)

export class Paint extends ManagedSkiaObject<IPaint> {
  // ===> blendMode
  public get blendMode () {
    return this._blendMode
  }
  public set blendMode (blendMode: BlendMode) {
    if (this.blendMode !== blendMode) {
      this._blendMode = blendMode
      this.skia?.setBlendMode(blendMode)
    }
  }
  private _blendMode: BlendMode = Skia.binding.BlendMode.SrcOver

  // ===> style
  public get style () {
    return this._style
  }
  public set style (style: PaintStyle) {
    if (this.style !== style) {
      this._style = style
      this.skia?.setStyle(style)
    }
  }
  private _style: PaintStyle = Skia.binding.PaintStyle.Fill

  // ===> strokeWidth
  public get strokeWidth () {
    return this._strokeWidth
  }
  public set (strokeWidth: number) {
    if (this._strokeWidth !== strokeWidth) {
      this._strokeWidth = strokeWidth
      this.skia?.setStrokeWidth(strokeWidth)
    }
  }
  private _strokeWidth: number = 0.0

  // ===> strokeCap
  public get strokeCap () {
    return this._strokeCap
  }
  public set strokeCap (strokeCap: StrokeCap) {
    if (this._strokeCap !== strokeCap) {
      this._strokeCap = strokeCap
      this.skia?.setStrokeCap(strokeCap)
    }
  }
  private _strokeCap: StrokeCap = Skia.binding.StrokeCap.Butt

  // ===> strokeJoin
  public get strokeJoin () {
    return this._strokeJoin
  }
  public set strokeJoin (strokeJoin: StrokeJoin) {
    if (this.strokeJoin !== strokeJoin) {
      this._strokeJoin = strokeJoin
      this.skia?.setStrokeJoin(strokeJoin)
    }
  }
  private _strokeJoin: StrokeJoin = Skia.binding.StrokeJoin.Miter

  // ===> isAntiAlias
  public get isAntiAlias () {
    return this._isAntiAlias
  }
  public set isAntiAlias (isAntiAlias: boolean) {
    if (this.isAntiAlias !== isAntiAlias) {
      this._isAntiAlias = isAntiAlias
      this.skia?.setAntiAlias(isAntiAlias)
    }
  }
  private _isAntiAlias: boolean = true

  // ===> color
  public get color () {
    return this._color
  }
  public set color (color: Color) {
    if (this.color !== color) {
      this._color = color
      this.skia?.setColorInt(color.value)
    }
  }
  private _color: Color = kDefaultPaintColor
  
  // ===> invertColors
  public get invertColors () {
    return this._invertColors
  }
  public set invertColors (invertColors: boolean) {
    if (this.invertColors !== invertColors) {
      if (!invertColors) {
        this.effectiveColorFilter = this.originalColorFilter
        this.originalColorFilter = null
      } else {
        this.originalColorFilter = this.effectiveColorFilter
        if (this.effectiveColorFilter === null) {
          this.effectiveColorFilter = kInvertColorFilter ?? createInverColorFilter()
        } else {
          this.effectiveColorFilter = new ManagedSkiaColorFilter(
            new ComposeColorFilter({
              outer: kInvertColorFilter ?? createInverColorFilter(),
              inner: this.effectiveColorFilter
            })
          )
        }
      }

      if (this.effectiveColorFilter !== null) {
        this.skia?.setColorFilter(this.effectiveColorFilter.skia!)
      }
      this.invertColors = invertColors
    }
  }
  private _invertColors: boolean = false

  // ===> shader
  public get shader () {
    return this._shader
  }
  public set shader (shader: Shader | null) {
    if (this.shader !== shader) {
      this._shader = shader
      
      if (this.shader !== null) {
        this.skia?.setShader((this.shader as Shader).withQuality(this.filterQuality)!)
      }
    }
  }
  private _shader: Shader | null = null

  // ===> maskFilter
  public get maskFilter () {
    return this._maskFilter
  }
  public set maskFilter (maskFilter: MaskFilter | null) {
    if (this.maskFilter !== maskFilter) {

      this._maskFilter = maskFilter
      if (this._maskFilter !== null) {
        this.skia?.setMaskFilter(this._maskFilter.skia!)
      }
    }
  }
  private _maskFilter: MaskFilter | null = null

  // ===> filterQuality
  public get filterQuality () {
    return this._filterQuality
  }
  public set filterQuality (filterQuality: FilterQuality) {
    if (this.filterQuality !== filterQuality) {
      this._filterQuality = filterQuality
      if (this.shader !== null) {
        this.skia?.setShader((this.shader as Shader).withQuality(this.filterQuality)!)
      }
    }
  }
  private _filterQuality: FilterQuality = FilterQuality.None

  // ===> colorFilter
  public get colorFilter () {
    return this._colorFilter
  }
  public set colorFilter (colorFilter: ColorFilter | null) {
    if (this.colorFilter !== colorFilter) {
      this.originalColorFilter = null

      if (colorFilter === null) {
        this.effectiveColorFilter = null
      } else {
        this.effectiveColorFilter = new ManagedSkiaColorFilter(colorFilter)
      }

      if (this.invertColors) {
        this.originalColorFilter = this.effectiveColorFilter

        if (this.effectiveColorFilter === null) {
          this.effectiveColorFilter = kInvertColorFilter ?? createInverColorFilter()
        } else {
          this.effectiveColorFilter = new ManagedSkiaColorFilter(
            new ComposeColorFilter({
              inner: kInvertColorFilter ?? createInverColorFilter(),
              outer: this.effectiveColorFilter
            })
          )
        }
      } 
      
      if (this.effectiveColorFilter !== null) {
        this.skia?.setColorFilter(this.effectiveColorFilter.skia!)
      }
    }
  }
  private _colorFilter: ColorFilter | null = null

  // ===> strokeMiterLimit
  public get strokeMiterLimit () {
    return this._strokeMiterLimit
  }
  public set strokeMiterLimit (strokeMiterLimit: number) {
    if (this.strokeMiterLimit !== strokeMiterLimit) {
      this._strokeMiterLimit = strokeMiterLimit
      this.skia?.setStrokeMiter(strokeMiterLimit)
    }
  }
  private _strokeMiterLimit: number = 0

  // ===> imageFilter
  public get imageFilter () {
    return this._imageFilter
  }
  public set imageFilter (imageFilter: ManagedSkiaImageFilterConvertible | null) {
    if (this.imageFilter !== imageFilter) {
      this._imageFilter = imageFilter

      if (imageFilter !== null) {
        this.managedImageFilter = imageFilter.imageFilter
        this.skia?.setImageFilter(this.managedImageFilter!.skia!)
      }
    }
  }
  private _imageFilter: ManagedSkiaImageFilterConvertible | null = null

  public originalColorFilter: ManagedSkiaColorFilter | null = null
  public effectiveColorFilter: ManagedSkiaColorFilter | null = null
  public managedImageFilter: ManagedSkiaObject<IImageFilter> | null = null

  /**
   * @description: 
   * @param {IPaint} skia
   * @return {Paint}
   */  
  constructor (skia: IPaint) {
    super(skia)

    this.skia?.setAntiAlias(this.isAntiAlias)
    this.skia?.setColorInt(this.color.value)
  }

  /**
   * @description: 
   * @return {IPaint}
   */  
  resurrect (): IPaint {
    const paint = new Skia.binding.Paint()
    paint.setBlendMode(this.blendMode)
    paint.setStyle(this.style)
    paint.setStrokeWidth(this.strokeWidth)
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color.value)
    paint.setShader(this.shader!.withQuality(this.filterQuality)) 
    paint.setMaskFilter(this.maskFilter!.skia)
    paint.setColorFilter(this.effectiveColorFilter?.skia!)
    paint.setImageFilter((this.managedImageFilter as ManagedSkiaObject<IImageFilter>).skia)
    paint.setStrokeCap(this.strokeCap)
    paint.setStrokeJoin(this.strokeJoin)
    paint.setStrokeMiter(this.strokeMiterLimit)

    return paint
  }
}

function createInverColorFilter() {
  return kInvertColorFilter = new ManagedSkiaColorFilter(new MatrixColorFilter(kInvertColorMatrix))
}