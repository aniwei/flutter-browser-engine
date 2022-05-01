import { CkNWayCanvas } from '../NWayCanvas'
import { RasterCache } from '../RasterCache'
import { CkCanvas } from '../Canvas'

export class PaintContext {
  public internalNodesCanvas: CkNWayCanvas
  public leafNodesCanvas?: CkCanvas
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