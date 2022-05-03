import CanvasKitInit from 'canvaskit-wasm'
import { CanvasKitInitOptions, CanvasKit, Path, Paint } from 'canvaskit-wasm'


type SkiaInit = {
  (options: CanvasKitInitOptions): Promise<CanvasKit>
}

export type FillType = {
  NonZero
}

export class Skia {
  static s: CanvasKit
  static Init (uri: string) {
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

  static get Path () {
    return Skia.s.Path
  }

  static get Paint () {
    return Skia.s.Paint
  }

  static get FillType () {
    return Skia.s.FillType
  }

  static get MakeFromCmds () {
    return Skia.s.Path.MakeFromCmds
  }

  public skia: CanvasKit

  constructor (skia: CanvasKit) {
    this.skia = skia
  }
}