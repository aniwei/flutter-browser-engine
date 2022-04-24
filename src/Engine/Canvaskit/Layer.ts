import { EngineLayer } from '@UI'

import type { ContainerLayer } from './ContainerLayer'

export class Layer extends EngineLayer {
  public parent: ContainerLayer | null = null
  public layers: ContainerLayer[] = []

  add (child: Layer) {
    child.parent = child

    this.layers.push(child)
  }

  preroll (
    prerollContext,
    matrix
  ) {

  }

  paintChildren (context) {
    for (const layer of this.layers) {
      if (layer.needsPainting) {
        layer.paint(context)
      }
    }
  }
}