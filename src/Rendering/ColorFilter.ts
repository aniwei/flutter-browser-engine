import { invariant } from 'ts-invariant'
import { Skia } from '@skia/binding'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { IColorFilter, ImageFilter, BlendMode } from '@skia'
import { ColorFilterImageFilter } from './ImageFilter'
import { listEquals } from '@helper/listEquals'
import type { Color } from '@internal/Color'

export abstract class ColorFilter {
  /**
   * @description: 
   * @return {*}
   */  
  static mode (
    color: Color,
    blendMode: BlendMode
  ) {
    return 
  }

  public get imageFilter (): ManagedSkiaObject<ImageFilter> {
    return new ColorFilterImageFilter({ colorFilter: this })
  }
  
  initRawImageFilter (): ImageFilter  {
    return Skia.binding.ImageFilter.MakeColorFilter(this.initRawColorFilter(), null)
  }

  abstract initRawColorFilter (): IColorFilter
}

export class ManagedSkiaColorFilter extends ManagedSkiaObject<IColorFilter> {
  public colorFilter: ColorFilter

  /**
   * @description: 
   * @param {ColorFilter} colorFilter
   * @return {*}
   */  
  constructor (colorFilter: ColorFilter) {
    const skia = colorFilter.initRawColorFilter()
    super(skia)
    this.colorFilter = colorFilter
  }

  /**
   * @description: 
   * @return {IColorFilter}
   */  
  resurrect () {
    return this.colorFilter.initRawColorFilter()
  }
  
  /**
   * @description: 
   * @param {ManagedSkiaColorFilter} other
   * @return {boolean}
   */  
  eq (other: ManagedSkiaColorFilter) {
    if (other instanceof ManagedSkiaColorFilter) {
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

export type BlendModeColorFilterOptions = {
  color: Color,
  blendMode: BlendMode
}

export class BlendModeColorFilter extends ColorFilter {
  public color: Color
  public blendMode: BlendMode

  /**
   * @description: 
   * @param {BlendModeColorFilterOptions} options
   * @return {BlendModeColorFilter}
   */  
  constructor (options: BlendModeColorFilterOptions) {
    super()

    this.color = options.color
    this.blendMode = options.blendMode
  }

  /**
   * @description: 
   * @return {ColorFilterSkiaObject}
   */  
  initRawColorFilter () {
    return Skia.binding.ColorFilter.MakeBlend(
      this.color,
      this.blendMode
    )
  }

  /**
   * @description: 
   * @param {BlendModeColorFilter} other
   * @return {boolean}
   */  
  eq (other: BlendModeColorFilter) {
    return (
      other instanceof BlendModeColorFilter &&
      other.color === this.color &&
      other.blendMode === this.blendMode
    )
  }

  /**
   * @description: 
   * @return {string}
   */  
  toString () {
    return `ColorFilter.mode(${this.color}, ${this.blendMode})`
  }
}

export class MatrixColorFilter extends ColorFilter {
  public matrix: Float64Array

  /**
   * @description: 
   * @param {Float64Array} matrix
   * @return {*}
   */  
  constructor (matrix: Float64Array) {
    super()

    this.matrix = matrix
  }

  /**
   * @description: 
   * @return {ColorFilterSkiaObject}
   */  
  initRawColorFilter () {
    invariant(this.matrix.length === 20, 'Color Matrix must have 20 entries.')

    return Skia.binding.ColorFilter.MakeMatrix(this.matrix)
  }

  /**
   * @description: 
   * @param {MatrixColorFilter} other
   * @return {boolean}
   */  
  eq (other: MatrixColorFilter) {
    return (
      other instanceof MatrixColorFilter &&
      listEquals(this.matrix, other.matrix)
    )
  }

  /**
   * @description: 
   * @return {string}
   */  
  toString () {
    return `ColorFilter.matrix(${this.matrix})`
  }
}


export class LinearToSrgbGammaColorFilter extends ColorFilter {
  /**
   * @description: 
   * @return {ColorFilterSkiaObject}
   */  
  initRawColorFilter () {
    return Skia.binding.ColorFilter.MakeLinearToSRGBGamma()
  }

  /**
   * @description: 
   * @param {LinearToSrgbGammaColorFilter} other
   * @return {boolean}
   */  
  eq (other: LinearToSrgbGammaColorFilter) {
    return other instanceof LinearToSrgbGammaColorFilter
  }

  /**
   * @description: 
   * @return {string}
   */  
  toString () {
    return `ColorFilter.linearToSrgbGamma()`
  }
}


export type ComposeColorFilterOptions = {
  outer: ManagedSkiaColorFilter,
  inner: ManagedSkiaColorFilter
}

export class ComposeColorFilter extends ColorFilter {
  public outer: ManagedSkiaColorFilter | null = null
  public inner: ManagedSkiaColorFilter

  /**
   * @description: 
   * @param {ComposeColorFilterOptions} options
   * @return {ComposeColorFilter}
   */  
  constructor (options: ComposeColorFilterOptions) {
    super()

    this.outer = options.outer ?? null
    this.inner = options.inner
  }

  /**
   * @description: 
   * @return {ColorFilterSkiaObject}
   */
  initRawColorFilter () {
    return Skia.binding.ColorFilter.MakeCompose(
      this.outer?.skia,
      this.inner.skia
    )
  }

  /**
   * @description: 
   * @param {ComposeColorFilter} other
   * @return {boolean}
   */
  eq (other: ComposeColorFilter) {
    if (other instanceof ComposeColorFilter) {
      return (
        this.outer === other.outer &&
        this.inner === other.inner
      )
    }

    return false
  }

  /**
   * @description: 
   * @return {*}
   */  
  toString () {
    return `ColorFilter.compose(${this.outer}, ${this.inner})`
  }
}