import { IScene, Image } from '@UI'
import { RootLayer } from '../RootLayer'
import { LayerTree } from '../LayerTree'

import type { int } from '@Types'


export class LayerScene implements IScene {
  public layerTree: LayerTree

  constructor (rootLayer: RootLayer) {
    this.layerTree = new LayerTree(rootLayer)
  }
  
  toImage (
    width: int, 
    height: int
  ): Promise<Image> {
    const picture = this.layerTree.flatten()

    return picture.toImage()
  }

  dispose (): void {}
}