import { CkNWayCanvas } from './CkNWayCanvas'

export class PaintContext {
  public internalNodesCanvas: CkNWayCanvas
  public leafNodesCanvas
  public rasterCache
  public viewEmbedder

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