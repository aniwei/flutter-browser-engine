export class RasterCache {
  prepare (
    picture, 
    matrix, 
    isComplex,
    willChange
  ) {}

  
  get (
    picture, 
    matrix
  ): RasterCacheResult {
    return new RasterCacheResult()
  }
}

class RasterCacheResult {
  get isValid () {
    return false
  }

  draw (canvas) {

  }
}
