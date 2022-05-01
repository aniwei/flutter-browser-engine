import { CkNWayCanvas } from '../NWayCanvas'
import { RasterCache } from '../RasterCache'
import { CkCanvas } from '../Canvas'

export class PaintContext {
  public internalNodesCanvas: CkNWayCanvas
  public leafNodesCanvas: CkCanvas | null = null
  public rasterCache: RasterCache | null = null

  constructor (
    internalNodesCanvas,
    leafNodesCanvas,
    rasterCache
  ) {
    this.internalNodesCanvas = internalNodesCanvas
    this.leafNodesCanvas = leafNodesCanvas
    this.rasterCache = rasterCache
  }
}