import { Offset } from '@UI';
import { ManagedSkiaObject } from './ManagedSkiaObject'

export class CkVertices extends ManagedSkiaObject<SkVertices> {
  static raw (
    mode: VertexMode,
    positions: number[],
    textureCoordinates: number[],
    colors: number[],
    indices: number[]
  ) {

  }

  public mode
  public positions: number[]
  public textureCoordinates: number[]
  public colors: number[]
  public indices: number[]

  constructor (
    mode: VertexMode,
    positions: number[],
    textureCoordinates: number[],
    colors: number[],
    indices: number[]
  ) {
    super()
    this.mode = toSkVertexMode(mode)
    this.positions = positions
    this.textureCoordinates = textureCoordinates
    this.colors = colors
    this.indices = indices
  }

  createDefault () {

  }

  resurrect() {
    return this.createDefault()
  }

  delete(): void {
    this.rawSkiaObject?.delete()
  }
}