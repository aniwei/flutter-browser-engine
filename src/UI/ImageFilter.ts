import { UnimplementedError } from '@Shared'
import { ManagedSkiaObject, Skia, SkiaFilterQuality, SkiaImageFilter, SkiaTileMode } from '@Skia'
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

  isEqual (other: BlurImageFilter) {
    if (other instanceof BlurImageFilter) {
      return (
        other.sigmaX === this.sigmaX &&
        other.sigmaY === this.sigmaY &&
        other.tileMode === this.tileMode
      )
    }

    return false
  }

  resurrect (): ImageFilter {
    return BlurImageFilter.init(this)
  }

  toString () {
    return `ImageFilter.blur(${this.sigmaX}, ${this.sigmaY}, ${this.modeString})`
  }
}

export type MatrixImageFilterOptions = {
  matrix: Float32Array, 
  filterQuality: SkiaFilterQuality
}

export class MatrixImageFilter extends ImageFilter {
  static malloc (options: MatrixImageFilterOptions): MatrixImageFilter {
    const matrixImageFilter = new MatrixImageFilter(
      Skia.ImageFilter.MakeMatrixTransform(
        options.matrix,
        Skia.SkiaFilterOptions(options.filterQuality),
        null,
      ), 
      options
    )

    return matrixImageFilter
  }

  public matrix: Float32Array
  public filterQuality: SkiaFilterQuality

  constructor (
    skia: SkiaImageFilter, 
    options: MatrixImageFilterOptions
  ) {
    super(skia)

    this.matrix = options.matrix
    this.filterQuality = options.filterQuality
  }

  resurrect (): ImageFilter {
    return MatrixImageFilter.init(this)
  }
  
  isEqual (other: MatrixImageFilter) {
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

  resurrect(): ImageFilter {
    return ColorFilterImageFilter.init(this)
  }

  isEqual (other: ColorFilterImageFilter) {
    if (other instanceof ColorFilterImageFilter) {
      return this.colorFilter === other.colorFilter
    }

    return false
  }
  
  toString () {
    return this.colorFilter.toString()
  } 
}
