import { IScene } from '@UI'
import { RootLayer } from './RootLayer'
import { LayerTree } from './LayerTree'


export class LayerScene implements IScene {
  public layerTree: LayerTree

  constructor (rootLayer: RootLayer) {
    this.layerTree = new LayerTree(rootLayer)
  }

  toImage (width: number, height: number) {

  }

  dispose (): void {}
}