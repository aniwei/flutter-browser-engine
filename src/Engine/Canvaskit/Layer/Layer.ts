import { EngineLayer, Rect } from '@UI'

import type { ContainerLayer } from '../ContainerLayer'
import type { PaintContext } from '../PaintContext'

export abstract class Layer extends EngineLayer {
  abstract parent: ContainerLayer | null
  public layers: ContainerLayer[] = []
  public paintBounds = Rect.zero

  public get needsPainting () {
    return !this.paintBounds.isEmpty
  }

  add (child: Layer) {
    child.parent = child

    this.layers.push(child)
  }

  abstract preroll (
    prerollContext,
    matrix
  ): void 

  abstract paint(paintContext: PaintContext): void
  abstract dispose (): void
}