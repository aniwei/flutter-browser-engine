import { invariant } from 'ts-invariant'
import { SkColorFilter } from '@Skia'
import { Float32List } from '@Types'
import { CanvasKitAPI } from '../CanvasKitAPI/CanvasKit'
import { CkColorFilter } from './CkColorFilter'

export class CkMatrixColorFilter extends CkColorFilter {
  public matrix: number[]

  constructor (matrix) {
    super()
    this.matrix = matrix
  }
  
  
  initRawColorFilter (): SkColorFilter {
    invariant(this.matrix.length == 20, 'Color Matrix must have 20 entries.')

    const matrix = this.matrix
    if (matrix instanceof Float32List) {
      return CanvasKitAPI.CanvasKit.ColorFilter.MakeMatrix(matrix)
    }
    
    const float32Matrix: Float32List = new Float32List(20)
    for (let i = 0; i < 20; i++) {
      float32Matrix[i] = matrix[i]
    }

    return CanvasKitAPI.CanvasKit.ColorFilter.MakeMatrix(float32Matrix)
  }

  isEqula (other) {
    return (
      this.matrix === other
    )
  }

  
  toString () {
    return `ColorFilter.matrix(${this.matrix})`
  }
}
