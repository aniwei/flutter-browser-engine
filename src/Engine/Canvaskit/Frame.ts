import { LayerTree } from './LayerTree'

export class Frame {
  public canvas
  public rasterCache
  public viewEmbedder

  constructor (canvas, rasterCache, viewEmbedder) {
    this.canvas = canvas
    this.rasterCache = rasterCache
    this.viewEmbedder = viewEmbedder
  }

  raster (layerTree: LayerTree, ignoreRasterCache = false): boolean {

    return true
  }
}