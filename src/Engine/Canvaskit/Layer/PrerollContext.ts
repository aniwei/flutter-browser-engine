import { Rect } from "@UI"
import { RasterCache } from "../RasterCache"

export class PrerollContext {
  public rasterCache: RasterCache | null
  public viewEmbedder: HtmlViewEmbedder | null
  public mutatorsStack: MutatorsStack = new MutatorsStack()

  public get cullRect () {
    let cullRect = Rect.largest

    for (let m in this.mutatorsStack) {
      let clipRect: Rect
      switch (m.type) {

      }

      cullRect = cullRect.intersect(clipRect)
    }
  }

  constructor (
    rasterCache: RasterCache,
    viewEmbedder: HtmlViewEmbedder
  ) {
    this.rasterCache = rasterCache
    this.viewEmbedder = viewEmbedder
  }
}
