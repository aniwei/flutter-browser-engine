import { Rect } from '@UI'
import { invariant } from 'ts-invariant'
import { Layer } from '../Layer'
import { PaintContext } from './PaintContext'
import { PrerollContext } from './PrerollContext'

export abstract class ContainerLayer extends Layer {
  public layers: Layer[] = []

  public get debugLayers () {
    return this.layers
  }

  add (child: Layer): void {
    child.parent = this
    this.layers.push(child)
  }

  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    this.paintBounds = this.prerollChildren(prerollContext, matrix)
  }

  prerollChildren (
    context: PrerollContext, 
    childMatrix: Matrix4
  ): Rect {
    let childPaintBounds: Rect = Rect.zero

    for (const layer of this.layers) {
      layer.preroll(context, childMatrix)
      
      if (childPaintBounds.isEmpty) {
        childPaintBounds = layer.paintBounds
      } else if (!layer.paintBounds.isEmpty) {
        childPaintBounds = childPaintBounds.expandToInclude(layer.paintBounds)
      }
    }

    return childPaintBounds
  }

  paintChildren (context: PaintContext) {
    invariant(this.needsPainting)

    for (const layer of this.layers) {
      if (layer.needsPainting) {
        layer.paint(context)
      }
    }
  }
}