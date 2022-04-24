import { Scene } from '@UI'
import { RootLayer } from './RootLayer'
import { LayerTree } from './LayerTree'


export class LayerScene extends Scene {
  public layerTree: LayerTree

  constructor (rootLayer: RootLayer) {
    super()
    this.layerTree = new LayerTree(rootLayer)
  }

  dispose (): void {}
}