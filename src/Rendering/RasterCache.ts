import { Matrix4 } from '@math/Matrix4'
import { Canvas } from '@rendering/Canvas'
import { Picture } from './Picture'

export class RasterCacheResult {
  public isValid = false
  draw (canvas: Canvas) {}
}

export class RasterCache {
  prepare (
    picture: Picture, 
    matrix: Matrix4, 
    isComplex: boolean, 
    willChange: boolean
  ) {}

  get (
    picture: Picture, 
    matrix: Matrix4
  ): RasterCacheResult {
    return new RasterCacheResult()
  }
      
}

