import { Path } from 'canvaskit-wasm'
import { ManagedSkiaObject, Skia } from '../Skia'

export class CkPath extends ManagedSkiaObject<Path> {
  create(): Path {
    const skPath = new Skia.()
    skPath.setFillType(this.fillType)

    return skPath
  }

  delete() {
    this.rawSkia?.delete()
  }

  resurrect(): Path {
    
  }
}