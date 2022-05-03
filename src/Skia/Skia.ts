import CanvasKitInit, { CanvasKitInitOptions, CanvasKit, Path, Paint } from 'canvaskit-wasm'


type SkiaInit = {
  (options: CanvasKitInitOptions): Promise<CanvasKit>
}

function SkiaAPI (
  target: Skia,
  key: keyof CanvasKit
) {
  Object.defineProperty(target, key, {
    get () {
      return Skia.current[key]
    }
  })
}

export class Skia {
  static current: Skia
  static Init (uri: string) {
    return (
      (CanvasKitInit as unknown as SkiaInit)({
        locateFile () {
          return uri
        }
      }).then((skia: CanvasKit) => {
        return Skia.current =  new Skia(skia)
      })
    )
  }

  public skia: CanvasKit

  @SkiaAPI
  static Path: Path

  @SkiaAPI
  public Paint!: Paint

  constructor (skia: CanvasKit) {
    this.skia = skia
  }
}