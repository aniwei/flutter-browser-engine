import { Rect } from '@UI'
import { transformRect } from '../Util'
import { invariant } from 'ts-invariant'
import { ContainerLayer } from './ContainerLayer'
import { PaintContext } from './PaintContext'
import { PrerollContext } from './PrerollContext'

export class TransformEngineLayer extends ContainerLayer {
  public transform: Matrix4

  constructor (matrix: Matrix4) {
    super()
    this.transform = matrix
  }


  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    const childMatrix: Matrix4 = matrix.multiplied(this.transform)

    prerollContext.mutatorsStack.pushTransform(this.transform)
    const childPaintBounds: Rect = this.prerollChildren(prerollContext, childMatrix)
    this.paintBounds = transformRect(this.transform, childPaintBounds)
    prerollContext.mutatorsStack.pop()
  }

  
  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)

    paintContext.internalNodesCanvas.save()
    paintContext.internalNodesCanvas.transform(this.transform.storage)
    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restore()
  }
}
