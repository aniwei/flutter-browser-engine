import CanvasKitInit, { CanvasKitInitOptions, CanvasKit } from 'canvaskit-wasm'

type SkiaInit = {
  (options: CanvasKitInitOptions): Promise<CanvasKit>
}

export class Skia {
  static CanvasKit: CanvasKit
  static SkiaInit (uri: string): Promise<CanvasKit> {
    return (CanvasKitInit as unknown as SkiaInit)({
      locateFile: () => {
        return uri
      }
    }).then((canvasKit: CanvasKit) => {
      return Skia.CanvasKit = canvasKit
    })
  }
}