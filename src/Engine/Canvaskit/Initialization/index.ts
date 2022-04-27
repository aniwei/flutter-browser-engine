import path from 'path'
import CanvasKitInit, { CanvasKitInitOptions, CanvasKit } from 'canvaskit-wasm'
import { invariant } from 'ts-invariant'

type CanvasKitInit = {
  (options: CanvasKitInitOptions): Promise<CanvasKit>
}

export class CanvasKitInitialization {
  public canvasKit: CanvasKit | null = null

  init () {
    return (CanvasKitInit as unknown as CanvasKitInit)({
      locateFile: (uri: string) => {
        return path.resolve(__dirname, uri)
      }
    }).then((canvasKit: CanvasKit) => {
      this.canvasKit = canvasKit
      return canvasKit
    })
  }

  useCanvasKit () {
    invariant(this.canvasKit !== null)
    return this.canvasKit
  }
}

export const initialization = new CanvasKitInitialization()