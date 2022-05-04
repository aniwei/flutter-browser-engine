import CanvasKitInit from 'canvaskit-wasm'
import { CanvasKitInitOptions, CanvasKit, Path, Paint } from 'canvaskit-wasm'


type SkiaInit = {
  (options: CanvasKitInitOptions): Promise<CanvasKit>
}

export type SkiaInitOption = {
  devicePixelRatio: number
}

export class Skia {
  static s: CanvasKit
  static o: SkiaInitOption
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
        return Skia.s =  skia
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

  public skia: CanvasKit

  constructor (skia: CanvasKit) {
    this.skia = skia
  }
}