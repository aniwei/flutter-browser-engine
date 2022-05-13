import { Rect } from '@UI'
import { BlendMode, ImageFilter } from 'canvaskit-wasm'
import { Paint } from './Paint'

export abstract class Layer {
  public parent: ContainerLayer | null = null
  public bounds: Rect = Rect.Zero

  public get needsPainting () {
    return !this.needsPainting.isEmpty
  }

  abstract preroll ()
  abstract paint ()
  abstract dispose ()
}

export abstract class ContainerLayer extends Layer {
  public layers: Layer[] = []

  preroll() {
    
  }

  add (child: Layer) {
    child.parent = this
    this.layers.push(child)
  }
}

export class RootLayer extends ContainerLayer {
  public blendMode: BlendMode
  public filter: ImageFilter

  constructor (filter: ImageFilter, blendMode: BlendMode) {
    super()

    this.filter = filter
    this.blendMode = blendMode
  }

  paint () {
    const paint = Paint.malloc()
    paint.blendMode = this.blendMode

    
  }

  dispose() {
     
  }
}