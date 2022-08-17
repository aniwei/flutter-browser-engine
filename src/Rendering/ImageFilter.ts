import { Skia } from '@skia/binding'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { FilterQuality, IImageFilter, TileMode } from '@skia'
import { toSkiaFilterQuality, toSkiaMatrix } from '@helper/skia'
import { listEquals } from '@helper/listEquals'

import type { ColorFilter } from './ColorFilter'

export abstract class ManagedSkiaImageFilterConvertible {
  abstract imageFilter: ManagedSkiaObject<IImageFilter>
}

export abstract class ImageFilter extends ManagedSkiaObject<IImageFilter> implements ManagedSkiaImageFilterConvertible {
  static blur (options: BlurImageFilterOptions) {
    return new BlurImageFilter(options)
  }

  static color (options: ColorFilterImageFilterOptions) {
    return new ColorFilterImageFilter(options)
  }
  
  static matrix (options: MatrixImageFilterOptions) {
    return new MatrixImageFilter(options)
  }

  public get imageFilter (): ManagedSkiaObject<IImageFilter> {
    return this
  }

  abstract resurrect (): IImageFilter
}


export type BlurImageFilterOptions = {
  sigmaX: number,
  sigmaY: number,
  tileMode: TileMode
}

export class BlurImageFilter extends ImageFilter {
  get modeString () {
    switch (this.tileMode) {
      case Skia.binding.TileMode.Clamp:
        return 'clamp'
      case Skia.binding.TileMode.Mirror:
        return 'mirror'
      case Skia.binding.TileMode.Repeat:
        return 'repeated'
      case Skia.binding.TileMode.Decal:
        return 'decal'
    }
  }

  public sigmaX: number
  public sigmaY: number 
  public tileMode: TileMode

  /**
   * @description: 
   * @param {BlurImageFilterOptions} options
   * @return {BlurImageFilter}
   */  
  constructor (options: BlurImageFilterOptions) {
    const skia = Skia.binding.ImageFilter.MakeBlur(
      options.sigmaX,
      options.sigmaY,
      options.tileMode,
      null
    )

    super(skia)

    this.sigmaX = options.sigmaX
    this.sigmaY = options.sigmaY
    this.tileMode = options.tileMode
  }

  /**
   * @description: 
   * @param {BlurImageFilter} other
   * @return {boolean}
   */  
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

  /**
   * @description: 
   * @return {IImageFilter}
   */  
  resurrect (): IImageFilter {
    return Skia.binding.ImageFilter.MakeBlur(
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
  filterQuality: FilterQuality
}

export class MatrixImageFilter extends ImageFilter {
  public matrix: Float64Array
  public filterQuality: FilterQuality

  constructor (options: MatrixImageFilterOptions) {
    const skia = Skia.binding.ImageFilter.MakeMatrixTransform(
      toSkiaMatrix(options.matrix),
      toSkiaFilterQuality(options.filterQuality),
      null,
    )

    super(skia)

    this.matrix = options.matrix
    this.filterQuality = options.filterQuality
  }

  resurrect (): IImageFilter {
    return Skia.binding.ImageFilter.MakeMatrixTransform(
      toSkiaMatrix(this.matrix),
      toSkiaFilterQuality(this.filterQuality),
      null,
    )
  }
  
  eq (other: MatrixImageFilter) {
    if (other instanceof MatrixImageFilter) {
      return (
        this.filterQuality === other.filterQuality &&
        listEquals<Float64Array>(other.matrix, this.matrix)
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
  public colorFilter: ColorFilter
  
  /**
   * @description: 
   * @param {ColorFilterImageFilterOptions} options
   * @return {ColorFilterImageFilter}
   */  
  constructor (options: ColorFilterImageFilterOptions) {
    const skia = options.colorFilter.initRawImageFilter()

    super(skia)
    this.colorFilter = options.colorFilter
  }

  /**
   * @description: 
   * @return {IImageFilter}
   */  
  resurrect(): IImageFilter {
    return this.colorFilter.initRawImageFilter()
  }

  /**
   * @description: 
   * @param {ColorFilterImageFilter} other
   * @return {boolean}
   */  
  eq (other: ColorFilterImageFilter) {
    if (other instanceof ColorFilterImageFilter) {
      return this.colorFilter === other.colorFilter
    }

    return false
  }
  
  /**
   * @description: 
   * @return {string}
   */  
  toString () {
    return this.colorFilter.toString()
  } 
}
