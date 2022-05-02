import { IScene, Image } from '@UI'
import { RootLayer } from '../Layer'
import { LayerTree } from '../LayerTree'


export class LayerScene implements IScene {
  public layerTree: LayerTree

  constructor (rootLayer: RootLayer) {
    this.layerTree = new LayerTree(rootLayer)
  }
  
  toImage (
    width: number, 
    height: number
  ): Promise<Image> {
    const picture = this.layerTree.flatten()

    return picture.toImage(width, height)
  }

  dispose (): void {}
}