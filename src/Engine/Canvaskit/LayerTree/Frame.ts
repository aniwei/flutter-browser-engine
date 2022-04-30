import { LayerTree } from "./LayerTree"

export class Frame {
  public canvas: CkCanvas
  public rasterCache: RasterCache | null = null
  public viewEmbedder: HtmlViewEmbedder | null = null

  constructor (canvas, rasterCache, viewEmbedder) {
    this.canvas = canvas
    this.rasterCache = rasterCache
    this.viewEmbedder = viewEmbedder
  }

  raster (layerTree: LayerTree, ignoreRasterCache = false): boolean {
    layerTree.preroll(this, ignoreRasterCache)
    layerTree.paint(this, ignoreRasterCache)
    
    return true
  }
}
