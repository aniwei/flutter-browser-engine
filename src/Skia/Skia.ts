import CanvasKitInit from 'canvaskit-wasm'
import type { CanvasKitInitOptions, CanvasKit, FilterMode, MipmapMode } from 'canvaskit-wasm'


export type SkiaInit = {
  (options: CanvasKitInitOptions): Promise<CanvasKit>
}

export enum SkiaFilterQuality {
  None,
  Low,
  Medium,
  High,
}

export type SkiaTransformFilterOption = {
  filter: FilterMode
  mipmap: MipmapMode
}

export type SkiaCubicFilterOption = {
  B: number
  C: number
}

export type {
  PathOp as SkiaPathOp,
  Canvas as SkiaCanvas,
  FilterMode as SkiaFilterMode,
  MipmapMode as SkiaMipmapMode,
  ColorFilter as SkiaColorFilter,
  Image as SkiaImage,
  ImageFilter as SkiaImageFilter,
  MaskFilter as SkiaMaskFilter,
  Paint as SkiaPaint,
  Path as SkiaPath,
  Shader as SkiaShader,
  Camera as SkiaCamera,
  DecorationStyle as SkiaDecorationStyle,
  BlurStyle as SkiaBlurStyle,
  PaintStyle as SkiaPaintStyle,
  BlendMode as SkiaBlendMode,
  TileMode as SkiaTileMode,
  ImageFilter as SkiaImageFIlter,
  FillType as SkiaFillType,
  StrokeCap as SkiaStrokeCap,
  StrokeJoin as SkiaStrokeJoin,
  ClipOp as SkiaClipOp,
  TextDirection as SkiaTextDirection,
} from 'canvaskit-wasm'

export class SkiaFilterOptions extends Map<SkiaFilterQuality, SkiaCubicFilterOption | SkiaTransformFilterOption> {
  static from (skia: CanvasKit) {
    const options = new SkiaFilterOptions()
    options.set(SkiaFilterQuality.None, {
      filter: skia.FilterMode.Nearest,
      mipmap: skia.MipmapMode.None
    })
    options.set(SkiaFilterQuality.Low, {
      filter: skia.FilterMode.Linear,
      mipmap: skia.MipmapMode.None
    })
    options.set(SkiaFilterQuality.Medium, {
      filter: skia.FilterMode.Linear,
      mipmap: skia.MipmapMode.Linear
    })
    options.set(SkiaFilterQuality.High, {
      B: 1.0 / 3,
      C: 1.0 / 3
    })

    return options
  }
}

export type SkiaInitOption = {
  devicePixelRatio: number
}

export class Skia {
  static s: CanvasKit
  static o: SkiaInitOption
  static r: {
    SkiaFilterOptions?: SkiaFilterOptions
  } = {}
  static malloc (uri: string, options?: SkiaInitOption) {
    Skia.o = { 
      devicePixelRatio: 1,
      ...options 
    }
    return (
      (CanvasKitInit as unknown as SkiaInit)({
        locateFile () {
          return uri
        }
      }).then((skia: CanvasKit) => {
        Skia.s =  skia
        Skia.r.SkiaFilterOptions = SkiaFilterOptions.from(skia)

        return Skia
      })
    )
  }

  // config
  static get DevicePixelRatio () {
    return Skia.o.devicePixelRatio
  }

  static get Path () {
    return Skia.s.Path
  }

  static get Paint () {
    return Skia.s.Paint
  }

  static get ColorFilter () {
    return Skia.s.ColorFilter
  }

  static get PaintStyle () {
    return Skia.s.PaintStyle
  }

  static get BlendMode () {
    return Skia.s.BlendMode
  }

  static get TileMode () {
    return Skia.s.TileMode
  }

  static get ImageFilter () {
    return Skia.s.ImageFilter
  }

  static get FillType () {
    return Skia.s.FillType
  }

  static get StrokeCap () {
    return Skia.s.StrokeCap
  }

  static get StrokeJoin () {
    return Skia.s.StrokeJoin
  }

  static get ClipOp () {
    return Skia.s.ClipOp
  }

  static get MipmapMode () {
    return Skia.s.MipmapMode
  }

  static get FilterMode () {
    return Skia.s.FilterMode
  }

  static get TextDirection () {
    return Skia.s.TextDirection
  }

  static get MakeFromCmds () {
    return Skia.s.Path.MakeFromCmds
  }

  static get computeTonalColors () {
    return Skia.s.computeTonalColors
  }

  static get MakeSurface () {
    return Skia.s.MakeSurface
  }

  static get MakeBlend () {
    return Skia.s.ColorFilter.MakeBlend
  }

  static get Malloc () {
    return Skia.s.Malloc
  }

  public skia: CanvasKit

  constructor (skia: CanvasKit) {
    this.skia = skia
  }
}