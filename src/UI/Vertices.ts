import { CkVertices } from '@Engine'
import { Offset } from './Offset'

export enum VertexMode {
  triangles,
  triangleStrip,
  triangleFan,
}

export class Vertices extends CkVertices {
  static raw (
    mode: VertexMode,
    positions: number[],
    textureCoordinates: number[],
    colors: Color[],
    indices: number[]
  ) {
    return new Vertices(
      mode,
      positions,
      textureCoordinates,
      colors,
      indices
    )
  }

  constructor (
    mode: VertexMode,
    positions: Offset[],
    textureCoordinates: Offset[],
    colors: Color[],
    indices: number[]
  ) {
    super(
      mode,
      positions,
      textureCoordinates,
      colors,
      indices
    );
  }
}