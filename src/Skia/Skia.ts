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
  static Init (uri: string, options?: SkiaInitOption) {
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

  static get MakeFromCmds () {
    return Skia.s.Path.MakeFromCmds
  }

  static get computeTonalColors () {
    return Skia.s.computeTonalColors
  }

  static get MakeSurface () {
    return Skia.s.MakeSurface
  }

  static SkiaFilterOptions (filterQuality: SkiaFilterQuality) {
    return Skia.r.SkiaFilterOptions?.get(filterQuality) as (SkiaCubicFilterOption | SkiaTransformFilterOption)
  }

  public skia: CanvasKit

  constructor (skia: CanvasKit) {
    this.skia = skia
  }
}