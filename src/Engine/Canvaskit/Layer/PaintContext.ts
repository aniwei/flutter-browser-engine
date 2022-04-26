import { CkNWayCanvas } from '../CkNWayCanvas'
import { RasterCache } from '../RasterCache'

export class PaintContext {
  public internalNodesCanvas: CkNWayCanvas
  public leafNodesCanvas?: CvCanvas
  public rasterCache?: RasterCache
  public viewEmbedder?: HtmlViewEmbedder 

  constructor (
    internalNodesCanvas,
    leafNodesCanvas,
    rasterCache,
    viewEmbedder
  ) {
    this.internalNodesCanvas = internalNodesCanvas
    this.leafNodesCanvas = leafNodesCanvas
    this.rasterCache = rasterCache
    this.viewEmbedder = viewEmbedder
  }
}