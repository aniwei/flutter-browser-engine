import { ContainerLayer } from './ContainerLayer'
import type { PaintContext } from './PaintContext'

export class RootLayer extends ContainerLayer {
  paint (
    paintContext: PaintContext
  ): void {
    this.paintChildren(paintContext)
  }
}