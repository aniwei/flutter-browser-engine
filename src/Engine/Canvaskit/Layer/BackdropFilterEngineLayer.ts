
import { BlendMode, ImageFilter, Rect } from '@UI'
import { PrerollContext } from './PrerollContext'
import { ContainerLayer } from './ContainerLayer'

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
