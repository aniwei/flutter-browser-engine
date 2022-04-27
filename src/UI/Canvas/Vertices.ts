import { CkVertices } from '@Engine'
import { Offset } from '../Geometry/Offset'
import { Color } from '../Painting'
import type { int } from '@Types'

export enum VertexMode {
  triangles,
  triangleStrip,
  triangleFan,
}

export class Vertices {
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

  static factory (
    mode: VertexMode,
    positions: Offset[],
    textureCoordinates: Offset[] | null,
    colors: Color[] | null,
    indices: int[] | null
  ) {
    return new CkVertices(
      mode,
      positions,
      textureCoordinates,
      colors,
      indices
    );
  }
}