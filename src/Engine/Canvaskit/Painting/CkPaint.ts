import { 
  BlendMode, 
  Color, 
  ColorFilter, 
  FilterQuality, 
  MaskFilter, 
  PaintingStyle, 
  Shader, 
  StrokeCap, 
  StrokeJoin,
  IPaint,
  ImageFilter,
} from '@UI'
import { CanvasKitAPI } from '@CanvasKitAPI'
import { 
  CkShader, 
  CkMaskFilter, 
  ManagedSkiaObject, 
  ManagedSkColorFilter,
} from '@CanvasKit'
import type { 
  SkPaint,
  SkImageFilter
} from '@Skia'
import { Float32List } from '@Types'
import { CkColorFilter, CkComposeColorFilter, CkMatrixColorFilter } from '../ColorFilter'
import { CkManagedSkImageFilterConvertible } from '../ImageFilter'

const defaultPaintColor = new Color(0xFF000000)
const invertColorMatrix: Float32List = Float32List.from([
  -1.0, 0, 0, 1.0, 0, // row
  0, -1.0, 0, 1.0, 0, // row
  0, 0, -1.0, 1.0, 0, // row
  1.0, 1.0, 1.0, 1.0, 0
])
const invertColorFilter: ManagedSkColorFilter = new ManagedSkColorFilter(
  new CkMatrixColorFilter(invertColorMatrix)
)

export class CkPaint extends ManagedSkiaObject<SkPaint> implements IPaint {
  public ckMaskFilter: CkMaskFilter | null = null
  public managedImageFilter: ManagedSkiaObject<SkImageFilter> | null = null
  public effectiveColorFilter: ManagedSkColorFilter | null = null
  public originalColorFilter: ManagedSkColorFilter | null = null

  public _blendMode: BlendMode = BlendMode.srcOver
  public get blendMode () {
    return this._blendMode
  }
  public set blendMode (blendMode: BlendMode) {
    if (this._blendMode === blendMode) {
      return
    }

    this._blendMode = blendMode
    this.skiaObject.setBlendMode(CanvasKitAPI.toSkBlendMode(blendMode))
  }

  public _style: PaintingStyle = PaintingStyle.fill
  public get style () {
    return this._style
  }
  public set style (style: PaintingStyle) {
    if (this._style === style) {
      return
    }

    this._style = style
    this.skiaObject.setStyle(CanvasKitAPI.toSkPaintStyle(style))
  }

  public _strokeWidth: number = 0.0
  public get strokeWidth () {
    return this._strokeWidth
  }
  public set strokeWidth (strokeWidth: number) {
    if (this._strokeWidth === strokeWidth) {
      return
    }

    this._strokeWidth = strokeWidth
    this.skiaObject.setStrokeWidth(strokeWidth);
  }

  public _strokeCap: StrokeCap = StrokeCap.butt
  public get strokeCap () {
    return this._strokeCap
  }
  public set strokeCap (strokeCap: StrokeCap) {
    if (this._strokeCap === strokeCap) {
      return
    }

    this._strokeCap = strokeCap
    this.skiaObject.setStrokeCap(CanvasKitAPI.toSkStrokeCap(strokeCap));
  }

  public _strokeJoin: StrokeJoin = StrokeJoin.miter
  public get strokeJoin () {
    return this._strokeJoin
  }
  public set strokeJoin (strokeJoin: StrokeJoin) {
    if (this._strokeJoin === strokeJoin) {
      return
    }

    this._strokeJoin = strokeJoin
    this.skiaObject.setStrokeJoin(CanvasKitAPI.toSkStrokeJoin(strokeJoin));
  }

  public _isAntiAlias: boolean = true
  public get isAntiAlias () {
    return this._isAntiAlias
  }
  public set isAntiAlias (isAntiAlias: boolean) {
    if (this._isAntiAlias === isAntiAlias) {
      return
    }

    this._isAntiAlias = isAntiAlias
    this.skiaObject.setAntiAlias(isAntiAlias)
  }

  public _color: Color = defaultPaintColor
  public get color () {
    return this._color
  }
  public set color (color: Color) {
    if (this._color === color) {
      return
    }

    this._color = color
    this.skiaObject.setColorInt(color.value)
  }

  public _invertColors: boolean = false
  public get invertColors () {
    return this._invertColors
  }
  public set invertColors (invertColors: boolean) {
    if (invertColors === this._invertColors) {
      return
    }
    if (!invertColors) {
      this.effectiveColorFilter = this.originalColorFilter
      this.originalColorFilter = null
    } else {
      this.originalColorFilter = this.effectiveColorFilter
      if (this.effectiveColorFilter === null) {
        this.effectiveColorFilter = invertColorFilter
      } else {
        this.effectiveColorFilter = new ManagedSkColorFilter(
          new CkComposeColorFilter(
            invertColorFilter, 
            this.effectiveColorFilter
          )
        )
      }
    }

    if (this.effectiveColorFilter) {
      this.skiaObject.setColorFilter(this.effectiveColorFilter?.skiaObject);
    }

    this.invertColors = invertColors
  }

  public _shader: Shader | null = null
  public get shader () {
    return this._shader
  }
  public set shader(shader: Shader | null) {
    if (this._shader === shader) {
      return
    }

    this._shader = shader as CkShader
    this.skiaObject.setShader(this._shader?.withQuality(this.filterQuality))
  }

  public _maskFilter: MaskFilter | null = null
  public get maskFilter () {
    return this._maskFilter
  }
  public set maskFilter (maskFilter: MaskFilter | null) {
    if (maskFilter === this._maskFilter) {
      return
    }

    this._maskFilter = maskFilter
    if (maskFilter !== null) {
      if (
        !(
          Number.isFinite(maskFilter.webOnlySigma) && 
          maskFilter.webOnlySigma > 0
        )
      ) {
        this.ckMaskFilter = null
      } else {
        this.ckMaskFilter = CkMaskFilter.blur(
          maskFilter.webOnlyBlurStyle,
          maskFilter.webOnlySigma,
        )
      }
    } else {
      this.ckMaskFilter = null
    }

    if (this.ckMaskFilter?.skiaObject) {
      this.skiaObject.setMaskFilter(this.ckMaskFilter?.skiaObject);
    }
  }
  
  public _filterQuality: FilterQuality = FilterQuality.none
  public get filterQuality () {
    return this._filterQuality
  }
  public set filterQuality (filterQuality: FilterQuality) {
    if (this._filterQuality == filterQuality) {
      return
    }
    this._filterQuality = filterQuality
    this.skiaObject.setShader(this._shader?.withQuality(filterQuality))
  }


  public _colorFilter: ColorFilter | null = null
  public get colorFilter () {
    return this._colorFilter
  }
  public set colorFilter (colorFilter: ColorFilter | null) {
    if (this.colorFilter === colorFilter) {
      return
    }

    this.originalColorFilter = null
    if (colorFilter === null) {
      this.effectiveColorFilter = null
    } else {
      this.effectiveColorFilter = new ManagedSkColorFilter(colorFilter as CkColorFilter)
    }

    if (this.invertColors) {
      this.originalColorFilter = this.effectiveColorFilter
      
      if (this.effectiveColorFilter === null) {
        this.effectiveColorFilter = invertColorFilter
      } else {
        this.effectiveColorFilter = new ManagedSkColorFilter(
          new CkComposeColorFilter(
            invertColorFilter, 
            this.effectiveColorFilter!
          )
        )
      }
    }

    if (this.effectiveColorFilter) {
      this.skiaObject.setColorFilter(this.effectiveColorFilter?.skiaObject);
    }

  }

  public _strokeMiterLimit: number = 0.0
  public get strokeMiterLimit () {
    return this._strokeMiterLimit
  } 
  public set strokeMiterLimit (strokeMiterLimit: number) {
    if (this._strokeMiterLimit == strokeMiterLimit) {
      return
    }
    this._strokeMiterLimit = strokeMiterLimit
    this.skiaObject.setStrokeMiter(strokeMiterLimit)
  }


  public _imageFilter: ImageFilter | null = null
  public get imageFilter () {
    return this._imageFilter
  }
  public set imageFilter (imageFilter: ImageFilter | null) {
    if (this._imageFilter === imageFilter) {
      return
    }

    this._imageFilter = imageFilter as CkManagedSkImageFilterConvertible
    this.managedImageFilter = this._imageFilter?.imageFilter

    if (this.managedImageFilter) {
      this.skiaObject.setImageFilter(this.managedImageFilter?.skiaObject)
    }

  }

  createDefault (): SkPaint {
    const paint: SkPaint = new CanvasKitAPI.SkPaint()
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color.value)
    return paint
  }

  resurrect () {
    const paint: SkPaint = new CanvasKitAPI.SkPaint()
    
    paint.setBlendMode(CanvasKitAPI.toSkBlendMode(this.blendMode))
    paint.setStyle(CanvasKitAPI.toSkPaintStyle(this.style))
    paint.setStrokeWidth(this.strokeWidth)
    paint.setAntiAlias(this.isAntiAlias)
    paint.setColorInt(this.color.value)
    paint.setShader(this.shader?.withQuality(this.filterQuality))
    paint.setStrokeCap(CanvasKitAPI.toSkStrokeCap(this.strokeCap))
    paint.setStrokeJoin(CanvasKitAPI.toSkStrokeJoin(this.strokeJoin))
    paint.setStrokeMiter(this.strokeMiterLimit)

    if (this.ckMaskFilter) {
      paint.setMaskFilter(this.ckMaskFilter?.skiaObject)
    }

    if (this.effectiveColorFilter) {
      paint.setColorFilter(this.effectiveColorFilter?.skiaObject)
    }

    if (this.managedImageFilter) {
      paint.setImageFilter(this.managedImageFilter?.skiaObject)
    }
    
    return paint
  }

  delete (): void {
    this.rawSkiaObject?.delete()
  }
}
