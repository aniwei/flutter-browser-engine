import { invariant } from 'ts-invariant'
import { Offset } from '@internal/Geometry'
import { ArgumentError } from '@internal/ArgumentError'
import { ManagedSkiaObject, } from '@skia/ManagedSkiaObject'
import { Skia } from '@skia/binding'

import { toFlatColors, toFlatSkiaPoints, toUint16Array } from '@helper/skia'
import { Color } from '@internal/Color'

import type { VertexMode, IVertices } from '@skia'

export type VerticesOptions = {
  mode: VertexMode,
  positions: Offset[], 
  textureCoordinates?: Offset[] | null,
  colors?: Color[] | null,
  indices?: number[] | null,
}

export class Vertices extends ManagedSkiaObject<IVertices> {
  static raw(
    mode: VertexMode,
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

    return new Vertices({
      mode,
      positions,
      textureCoordinates,
      colors?.buffer.asUint32List(),
      indices,
    })
  }

  constructor (options: VerticesOptions) {
    options.textureCoordinates ??= null
    options.colors ??= null
    options.indices ??= null

    const skia = Skia.binding.MakeVertices(
      options.mode,
      toFlatSkiaPoints(options.positions),
      toFlatSkiaPoints(options.textureCoordinates),
      toFlatColors(options.colors),
      options.indices,
    )
    invariant(options.mode !== null)
    invariant(options.positions !== null)

    super(skia)

    if (
      options.textureCoordinates &&
      options.textureCoordinates.length !== options.positions.length
    ) {
      throw new ArgumentError('"positions" and "textureCoordinates" lengths must match.')
    }

    if (
      options.colors && 
      options.colors.length !== options.positions.length
    ) {
      throw new ArgumentError('"positions" and "colors" lengths must match.')
    }

    if (
      options.indices &&
      options.indices.every((i: number) => i < 0 || i >= options.positions.length)
    ) {
      throw new ArgumentError('"indices" values must be valid indices in the positions list.')
    }

    this.mode = options.mode
    this.positions = toFlatSkiaPoints(options.positions)
    
    this.textureCoordinates = options.textureCoordinates !== null 
      ? toFlatSkiaPoints(options.textureCoordinates) 
      : null
    this.colors = options.colors !== null 
      ? toFlatColors(options.colors)
      : null
    this.indices = options.indices !== null 
      ? toUint16Array(options.indices) 
      : null
  }

  public mode: VertexMode
  public positions: Float32Array
  public textureCoordinates: Float32Array | null = null
  public colors: Uint32Array | null = null
  public indices: Uint16Array | null = null

  resurrect (): IVertices {
    return Skia.binding.MakeVertices(
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
