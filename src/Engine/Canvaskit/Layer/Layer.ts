import { EngineLayer, Rect } from '@UI'

import type { ContainerLayer } from './ContainerLayer'
import type { PaintContext } from './PaintContext'

export abstract class Layer extends EngineLayer {
  public parent: ContainerLayer | null = null
  public paintBounds = Rect.zero

  public get needsPainting () {
    return !this.paintBounds.isEmpty
  }

  abstract preroll (
    prerollContext,
    matrix
  ): void 

  abstract paint(paintContext: PaintContext): void
  
  dispose (): void {}
}