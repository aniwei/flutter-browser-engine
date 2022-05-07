import { UnimplementedError } from '@Shared'
import { ManagedSkiaObject, Skia, SkiaFilterQuality } from '@Skia'
import type { ImageFilter, TileMode } from 'canvaskit-wasm'
import type { CkColorFilter } from './CkColorFilter'

export abstract class CkManagedSkImageFilterConvertible {
  abstract imageFilter: ManagedSkiaObject<ImageFilter>
}

export abstract class CkImageFilter extends ManagedSkiaObject<ImageFilter> implements CkManagedSkImageFilterConvertible {
  static blur (options: CkBlurImageFilterOptions) {
    return CkBlurImageFilter.malloc(options)
  }

  static color (options: CkColorFilterImageFilterOptions) {
    return CkColorFilterImageFilter.malloc(options)
  }
  
  static matrix (options: CkMatrixImageFilterOptions) {
    return CkMatrixImageFilter.malloc(options)
  }

  static init (options): ImageFilter {
    throw new UnimplementedError()
  }

  static malloc (options?): CkImageFilter {
    throw new UnimplementedError()
  } 

  public get imageFilter (): ManagedSkiaObject<ImageFilter> {
    return this
  }

  abstract resurrect (): ImageFilter
}


export type CkBlurImageFilterOptions = {
  sigmaX: number,
  sigmaY: number,
  tileMode: TileMode 
}

export class CkBlurImageFilter extends CkImageFilter {
  static malloc (options: CkBlurImageFilterOptions): CkImageFilter {
    const blurImageFilter = new CkBlurImageFilter(this.init(options), options)
    return blurImageFilter
  }

  static init (options: CkBlurImageFilterOptions): ImageFilter {
    return Skia.ImageFilter.MakeBlur(
      options.sigmaX,
      options.sigmaY,
      options.tileMode,
      null
    )
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
  public tileMode!: TileMode

  constructor (
    skia: ImageFilter, 
    options: CkBlurImageFilterOptions
  ) {
    super(skia)

    this.sigmaX = options.sigmaX
    this.sigmaY = options.sigmaY
    this.tileMode = options.tileMode
  }

  isEqual (other: CkBlurImageFilter) {
    if (other instanceof CkBlurImageFilter) {
      return (
        other.sigmaX === this.sigmaX &&
        other.sigmaY === this.sigmaY &&
        other.tileMode === this.tileMode
      )
    }

    return false
  }

  resurrect (): ImageFilter {
    return CkBlurImageFilter.init(this)
  }

  toString () {
    return `ImageFilter.blur(${this.sigmaX}, ${this.sigmaY}, ${this.modeString})`
  }
}

export type CkMatrixImageFilterOptions = {
  matrix: Float32Array, 
  filterQuality: SkiaFilterQuality
}

export class CkMatrixImageFilter extends CkImageFilter {
  static malloc (options: CkMatrixImageFilterOptions): CkMatrixImageFilter {
    const matrixImageFilter = new CkMatrixImageFilter(
      CkMatrixImageFilter.init(options), 
      options
    )

    return matrixImageFilter
  }

  static init (options: CkMatrixImageFilterOptions): ImageFilter {
    return Skia.ImageFilter.MakeMatrixTransform(
      options.matrix,
      Skia.SkiaFilterOptions(options.filterQuality),
      null,
    )
  }

  public matrix: Float32Array
  public filterQuality: SkiaFilterQuality

  constructor (
    skia: ImageFilter, 
    options: CkMatrixImageFilterOptions
  ) {
    super(skia)

    this.matrix = options.matrix
    this.filterQuality = options.filterQuality
  }

  resurrect (): ImageFilter {
    return CkMatrixImageFilter.init(this)
  }
  
  isEqual (other: CkMatrixImageFilter) {
    if (other instanceof CkMatrixImageFilter) {
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

export type CkColorFilterImageFilterOptions = {
  colorFilter: CkColorFilter, 
}

export class CkColorFilterImageFilter extends CkImageFilter {
  static malloc(options: CkColorFilterImageFilterOptions): CkImageFilter {
    const colorFilterImageFilter = new CkColorFilterImageFilter(
      CkColorFilterImageFilter.init(options),
      options
    )

    return colorFilterImageFilter
  }

  static init (options: CkColorFilterImageFilterOptions): ImageFilter {
    return options.colorFilter.initRawImageFilter()
  }

  public colorFilter: CkColorFilter
  
  constructor (skia: ImageFilter, options: CkColorFilterImageFilterOptions) {
    super(skia)
    this.colorFilter = options.colorFilter
  }

  resurrect(): ImageFilter {
    return CkColorFilterImageFilter.init(this)
  }

  isEqual (other: CkColorFilterImageFilter) {
    if (other instanceof CkColorFilterImageFilter) {
      return this.colorFilter === other.colorFilter
    }

    return false
  }
  
  toString () {
    return this.colorFilter.toString()
  } 
}
