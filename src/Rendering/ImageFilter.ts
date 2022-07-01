import { UnimplementedError } from '@internal/UnimplementedError'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { toFilterQuality, toSkiaMatrixFromFloat64 } from '@skia/SkiaFormat'
import { Skia, SkiaFilterQuality, SkiaImageFilter, SkiaTileMode } from '@skia/Skia'
import type { ColorFilter } from './ColorFilter'

export abstract class ManagedSkImageFilterConvertible {
  abstract imageFilter: ManagedSkiaObject<SkiaImageFilter>
}

export abstract class ImageFilter extends ManagedSkiaObject<SkiaImageFilter> implements ManagedSkImageFilterConvertible {
  static blur (options: BlurImageFilterOptions) {
    return BlurImageFilter.malloc(options)
  }

  static color (options: ColorFilterImageFilterOptions) {
    return ColorFilterImageFilter.malloc(options)
  }
  
  static matrix (options: MatrixImageFilterOptions) {
    return MatrixImageFilter.malloc(options)
  }

  static malloc (options?): ImageFilter {
    throw new UnimplementedError()
  } 

  public get imageFilter (): ManagedSkiaObject<SkiaImageFilter> {
    return this
  }

  abstract resurrect (): SkiaImageFilter
}


export type BlurImageFilterOptions = {
  sigmaX: number,
  sigmaY: number,
  tileMode: SkiaTileMode
}

export class BlurImageFilter extends ImageFilter {
  static malloc (options: BlurImageFilterOptions): ImageFilter {
    const blurImageFilter = new BlurImageFilter(Skia.ImageFilter.MakeBlur(
      options.sigmaX,
      options.sigmaY,
      options.tileMode,
      null
    ), options)
    
    return blurImageFilter
  }

  get modeString () {
    switch (this.tileMode) {
      case Skia.TileMode.Clamp:
        return 'clamp'
      case Skia.TileMode.Mirror:
        return 'mirror'
      case Skia.TileMode.Repeat:
        return 'repeated'
      case Skia.TileMode.Decal:
        return 'decal'
    }
  }

  public sigmaX!: number
  public sigmaY!: number 
  public tileMode!: SkiaTileMode

  constructor (
    skia: SkiaImageFilter, 
    options: BlurImageFilterOptions
  ) {
    super(skia)

    this.sigmaX = options.sigmaX
    this.sigmaY = options.sigmaY
    this.tileMode = options.tileMode
  }

  eq (other: BlurImageFilter) {
    if (other instanceof BlurImageFilter) {
      return (
        other.sigmaX === this.sigmaX &&
        other.sigmaY === this.sigmaY &&
        other.tileMode === this.tileMode
      )
    }

    return false
  }

  resurrect (): SkiaImageFilter {
    return Skia.ImageFilter.MakeBlur(
      this.sigmaX,
      this.sigmaY,
      this.tileMode,
      null
    )
  }

  toString () {
    return `ImageFilter.blur(${this.sigmaX}, ${this.sigmaY}, ${this.modeString})`
  }
}

export type MatrixImageFilterOptions = {
  matrix: Float64Array, 
  filterQuality: SkiaFilterQuality
}

export class MatrixImageFilter extends ImageFilter {
  static malloc (options: MatrixImageFilterOptions): MatrixImageFilter {
    const matrixImageFilter = new MatrixImageFilter(
      Skia.ImageFilter.MakeMatrixTransform(
        toSkiaMatrixFromFloat64(options.matrix),
        toFilterQuality(options.filterQuality),
        null,
      ), 
      options
    )

    return matrixImageFilter
  }

  public matrix: Float64Array
  public filterQuality: SkiaFilterQuality

  constructor (
    skia: SkiaImageFilter, 
    options: MatrixImageFilterOptions
  ) {
    super(skia)

    this.matrix = options.matrix
    this.filterQuality = options.filterQuality
  }

  resurrect (): SkiaImageFilter {
    return Skia.ImageFilter.MakeMatrixTransform(
      toSkiaMatrixFromFloat64(this.matrix),
      toFilterQuality(this.filterQuality),
      null,
    )
  }
  
  eq (other: MatrixImageFilter) {
    if (other instanceof MatrixImageFilter) {
      return (
        this.filterQuality === other.filterQuality
        // @TODO
      )
    }
  }

  toString () {
    return `ImageFilter.matrix(${this.matrix}, ${this.filterQuality})`
  } 
}

export type ColorFilterImageFilterOptions = {
  colorFilter: ColorFilter, 
}

export class ColorFilterImageFilter extends ImageFilter {
  static malloc(options: ColorFilterImageFilterOptions): ImageFilter {
    const colorFilterImageFilter = new ColorFilterImageFilter(
      options.colorFilter.initRawImageFilter(),
      options
    )

    return colorFilterImageFilter
  }

  public colorFilter: ColorFilter
  
  constructor (skia: SkiaImageFilter, options: ColorFilterImageFilterOptions) {
    super(skia)
    this.colorFilter = options.colorFilter
  }

  resurrect(): SkiaImageFilter {
    return this.colorFilter.initRawImageFilter()
  }

  eq (other: ColorFilterImageFilter) {
    if (other instanceof ColorFilterImageFilter) {
      return this.colorFilter === other.colorFilter
    }

    return false
  }
  
  toString () {
    return this.colorFilter.toString()
  } 
}
