
import { CkPaint } from '../Painting'
import { ContainerLayer } from './ContainerLayer'
import type { BlendMode, ImageFilter, Rect } from '@UI'
import type { PrerollContext } from './PrerollContext'
import type { Matrix4 } from '../../VectorMath'
import type { PaintContext } from './PaintContext'

export class BackdropFilterEngineLayer extends ContainerLayer {
  public filter: ImageFilter
  public  blendMode: BlendMode

  constructor (filter, blendMode) {
    super()

    this.filter = filter
    this.blendMode = blendMode
  }


  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ): void {
    const childBounds: Rect = this.prerollChildren(prerollContext, matrix)
    this.paintBounds = childBounds.expandToInclude(prerollContext.cullRect);
  }

  paint (paintContext: PaintContext) {
    let paint = new CkPaint()
    paint.blendMode = this.blendMode
    
    paintContext.internalNodesCanvas.saveLayerWithFilter(this.paintBounds, this.filter, paint)
    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restore()
  }

  // TODO(dnfield): dispose of the _filter
  // https://github.com/flutter/flutter/issues/82832
}
