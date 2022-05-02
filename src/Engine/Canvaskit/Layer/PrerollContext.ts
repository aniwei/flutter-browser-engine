import { Rect } from '@UI'
import { MutatorsStack, MutatorType } from '../EmbeddedViews'
import { RasterCache } from '../RasterCache'

export class PrerollContext {
  public rasterCache: RasterCache | null
  public mutatorsStack: MutatorsStack = new MutatorsStack()

  public get cullRect () {
    let cullRect = Rect.largest

    for (const m of this.mutatorsStack.mutators) {
      let clipRect: Rect
      switch (m.type) {
        case MutatorType.clipRect:
          clipRect = m.rect as Rect
          break
        case MutatorType.clipRRect:
          clipRect = m.rrect!.outerRect as Rect
          break
        case MutatorType.clipPath:
          clipRect = m.path!.getBounds()
          break
        default:
          continue
      }

      cullRect = cullRect.intersect(clipRect)
    }

    return cullRect
  }

  constructor (rasterCache: RasterCache | null) {
    this.rasterCache = rasterCache
  }
}
