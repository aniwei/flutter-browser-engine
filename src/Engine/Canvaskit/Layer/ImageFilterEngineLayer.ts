import { ImageFilter } from '@UI'
import { invariant } from 'ts-invariant'
import { ContainerLayer } from './ContainerLayer'
import { PaintContext } from './PaintContext'

export class ImageFilterEngineLayer extends ContainerLayer {
  public filter: ImageFilter

  constructor (filter: ImageFilter) {
    super()
    this.filter = filter
  }

  paint (paintContext: PaintContext): void {
    invariant(this.needsPainting)
    const paint: CkPaint = new CkPaint()
    paint.imageFilter = this.filter
    
    paintContext.internalNodesCanvas.saveLayer(this.paintBounds, paint)
    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restore()
  }

  // TODO(dnfield): dispose of the _filter
  // https://github.com/flutter/flutter/issues/82832
}
