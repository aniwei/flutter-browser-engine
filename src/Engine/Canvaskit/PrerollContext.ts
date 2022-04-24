export class PrerollContext {
  rasterCache
  viewEmbedder
  mutatorsStack

  constructor (rasterCache, viewEmbedder) {
    this.rasterCache = rasterCache
    this.viewEmbedder = viewEmbedder
  }
}
