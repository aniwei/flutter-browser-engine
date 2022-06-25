import { invariant } from 'ts-invariant'
import { ArgumentError } from '@internal'
import { ManagedSkiaObject, Skia, SkiaVertexMode, SkiaVertices, toFlatColors, toFlatSkiaPoints, toUint16Array } from '@skia'
import { Offset } from './Geometry'
import { Color } from './Painting'


export type VerticesInitOptions = {
  mode: SkiaVertexMode,
  positions: Offset[], 
  textureCoordinates?: Offset[] | null,
  colors?: Color[] | null,
  indices?: number[] | null,
}

export class Vertices extends ManagedSkiaObject<SkiaVertices> {
  static malloc (options: VerticesInitOptions): Vertices {
    options.textureCoordinates ??= null
    options.colors ??= null
    options.indices ??= null

    const skia = Skia.MakeVertices(
      options.mode,
      toFlatSkiaPoints(options.positions),
      toFlatSkiaPoints(options.textureCoordinates),
      toFlatColors(options.colors),
      options.indices,
    )

    const vertices = new Vertices(
      skia,
      options.mode,
      options.positions,
      options.colors,
      options.indices
    )

    return vertices
  }

  static raw(
    mode: SkiaVertexMode,
    positions: Float32Array,
    textureCoordinates?: Float32Array | null,
    colors: Int32Array | null,
    indices: Uint16Array | null,
  ) {
    invariant(mode !== null)
    invariant(positions !== null)
    if (
      textureCoordinates &&
      textureCoordinates.length !== positions.length
    ) {
      throw new ArgumentError('"positions" and "textureCoordinates" lengths must match.')
    }
    if (
      colors !== null && 
      colors.length * 2 !== positions.length
    ) {
      throw new ArgumentError('"positions" and "colors" lengths must match.')
    }

    if (
      indices !== null &&
      indices.every((i: number) => i < 0 || i >= positions.length)
    ) {
      throw new ArgumentError('"indices" values must be valid indices in the positions list.')
    }

    return Vertices.malloc({
      mode,
      positions,
      textureCoordinates,
      colors?.buffer.asUint32List(),
      indices,
    })
  }

  constructor (
    skia: SkiaVertices,
    mode: SkiaVertexMode,
    positions: Offset[], 
    textureCoordinates: Offset[] | null = null,
    colors: Color[] | null = null,
    indices: number[] | null = null,
  ) {
    super(skia)
    invariant(mode !== null)
    invariant(positions !== null)

    if (
      textureCoordinates &&
      textureCoordinates.length !== positions.length
    ) {
      throw new ArgumentError('"positions" and "textureCoordinates" lengths must match.')
    }

    if (
      colors && 
      colors.length !== positions.length
    ) {
      throw new ArgumentError('"positions" and "colors" lengths must match.')
    }

    if (
      indices &&
      indices.every((i: number) => i < 0 || i >= positions.length)
    ) {
      throw new ArgumentError('"indices" values must be valid indices in the positions list.')
    }

    this.mode = mode
    this.positions = toFlatSkiaPoints(positions)
    
    this.textureCoordinates = textureCoordinates !== null 
      ? toFlatSkiaPoints(textureCoordinates) 
      : null
    this.colors = colors !== null 
      ? toFlatColors(colors)
      : null
    this.indices = indices !== null 
      ? toUint16Array(indices) 
      : null
  }

  public mode: SkiaVertexMode
  public positions: Float32Array
  public textureCoordinates: Float32Array | null = null
  public colors: Uint32Array | null = null
  public indices: Uint16Array | null = null

  resurrect (): SkiaVertices {
    return Skia.MakeVertices(
      this.mode,
      this.positions,
      this.textureCoordinates,
      this.colors,
      this.indices,
    )
  }

  delete () {
    this.skia?.delete()
  }
}
