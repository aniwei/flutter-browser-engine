import { invariant } from 'ts-invariant'
import { Clip, Rect } from '@UI'
import { Matrix4 } from '../../VectorMath'
import { CkPath } from '../Path'
import { ContainerLayer } from './ContainerLayer'
import { PaintContext } from './PaintContext'
import { PrerollContext } from './PrerollContext'

export class ClipPathEngineLayer extends ContainerLayer {
  public clipPath: CkPath
  public clipBehavior: Clip

  constructor (clipPath: CkPath, clipBehavior: Clip) {
    super()
    
    invariant(clipBehavior !== Clip.none)

    this.clipPath = clipPath
    this.clipBehavior = clipBehavior

  }

  preroll(
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    prerollContext.mutatorsStack.pushClipPath(this.clipPath)
    
    const childPaintBounds: Rect = this.prerollChildren(prerollContext, matrix)
    const clipBounds: Rect = this.clipPath.getBounds()
    
    if (childPaintBounds.overlaps(clipBounds)) {
      this.paintBounds = childPaintBounds.intersect(clipBounds)
    }

    prerollContext.mutatorsStack.pop()
  }

  paint (paintContext: PaintContext): void {
    invariant(this.needsPainting)

    paintContext.internalNodesCanvas.save()
    paintContext.internalNodesCanvas.clipPath(
      this.clipPath, 
      this.clipBehavior !== Clip.hardEdge
    )

    if (this.clipBehavior === Clip.antiAliasWithSaveLayer) {
      paintContext.internalNodesCanvas.saveLayer(this.paintBounds, null)
    }

    this.paintChildren(paintContext)
    
    if (this.clipBehavior === Clip.antiAliasWithSaveLayer) {
      paintContext.internalNodesCanvas.restore()
    }

    paintContext.internalNodesCanvas.restore()
  }
}
