import { Picture } from '@UI'
import { Matrix4 } from '../../VectorMath'
import { RasterCacheResult } from './RasterCacheResult'

export class RasterCache {
  prepare(
    picture: Picture,  
    matrix: Matrix4, 
    isComplex: boolean, 
    willChange: boolean
  ) {

  }

  
  get (picture: Picture, matrix: Matrix4): RasterCacheResult {
    return new RasterCacheResult()
  }
}
