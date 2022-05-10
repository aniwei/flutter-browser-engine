import { invariant } from 'ts-invariant'
import { ManagedSkiaObject, Skia } from '@Skia'
import { CkColorFilterImageFilter } from './CkImageFilter'
import type { BlendMode, Color, ColorFilter, ImageFilter } from 'canvaskit-wasm'

export abstract class CkColorFilter {

  public get imageFilter (): ManagedSkiaObject<ImageFilter> {
    return CkColorFilterImageFilter.malloc({ colorFilter: this })
  }
  
  initRawImageFilter (): ImageFilter  {
    return Skia.ImageFilter.MakeColorFilter(this.initRawColorFilter(), null)
  }

  abstract initRawColorFilter (): ColorFilter
}

export class ManagedSkiaColorFilter extends ManagedSkiaObject<ColorFilter> {
  static malloc (colorFilter: CkColorFilter): ManagedSkiaColorFilter {
    const managedSkiaColorFilter = new ManagedSkiaColorFilter(
      colorFilter.initRawColorFilter(), 
      colorFilter,
    )

    return managedSkiaColorFilter
  }

  

  public colorFilter: CkColorFilter

  constructor (skia, colorFilter: CkColorFilter) {
    super(skia)
    this.colorFilter = colorFilter
  }

  resurrect () {
    return this.colorFilter.initRawColorFilter()
  }

  delete () {
    this.rawSkia?.delete()
  }

  
  isEqual (other: ManagedSkiaColorFilter) {
    if (other instanceof ManagedSkiaColorFilter) {
      return this.colorFilter === other.colorFilter
    }

    return false
  }

  toString () {
    return this.colorFilter.toString()
  }
}

export type CkBlendModeColorFilterOptions = {
  color: Color,
  blendMode: BlendMode
}

export class CkBlendModeColorFilter extends CkColorFilter {
  static init (options: CkBlendModeColorFilterOptions) {
    const blendModeColorFilter = new CkBlendModeColorFilter(options)
    return blendModeColorFilter
  }

  public color: Color
  public blendMode: BlendMode

  constructor (options: CkBlendModeColorFilterOptions) {
    super()

    this.color = options.color
    this.blendMode = options.blendMode
  }

  initRawColorFilter () {
    return Skia.ColorFilter.MakeBlend(
      this.color,
      this.blendMode
    )
  }

  isEqual (other: CkBlendModeColorFilter) {
    if (other instanceof CkBlendModeColorFilter) {
      return (
        other.color === this.color &&
        other.blendMode === this.blendMode
      )
    }

    return false
  }

  toString () {
    return `ColorFilter.mode(${this.color}, ${this.blendMode})`
  }
}


export class CkMatrixColorFilter extends CkColorFilter {
  static malloc (matrix: Float32Array) {
    const matrixColorFilter = new CkMatrixColorFilter(matrix)
    return matrixColorFilter
  }

  public matrix: Float32Array

  constructor (matrix: Float32Array) {
    super()

    this.matrix = matrix
  }

  initRawColorFilter () {
    invariant(this.matrix.length === 20, 'Color Matrix must have 20 entries.')

    return Skia.ColorFilter.MakeMatrix(this.matrix)
  }

  isEqual () {

  }

  toString () {
    return `ColorFilter.matrix(${this.matrix})`
  }
}


export class CkLinearToSrgbGammaColorFilter extends CkColorFilter {
  static init () {
    return new CkLinearToSrgbGammaColorFilter()
  }

  initRawColorFilter () {
    return Skia.ColorFilter.MakeLinearToSRGBGamma()
  }

  isEqual (other: CkLinearToSrgbGammaColorFilter) {
    return other instanceof CkLinearToSrgbGammaColorFilter
  }

  toString () {
    return `ColorFilter.linearToSrgbGamma()`
  }
}


export type CkComposeColorFilterOptions = {
  outer: ManagedSkiaColorFilter,
  inner: ManagedSkiaColorFilter
}

export class CkComposeColorFilter extends CkColorFilter {
  static malloc (options: CkComposeColorFilterOptions) {
    const composeColorFilter = new CkComposeColorFilter(options)
    return composeColorFilter
  }

  public outer: ManagedSkiaColorFilter
  public inner: ManagedSkiaColorFilter

  constructor (options: CkComposeColorFilterOptions) {
    super()

    this.outer = options.outer
    this.inner = options.inner
  }

  initRawColorFilter () {
    return Skia.ColorFilter.MakeCompose(
      this.outer.skia,
      this.inner.skia
    )
  }

  isEqual (other: CkComposeColorFilter) {
    if (other instanceof CkComposeColorFilter) {
      return (
        this.outer === other.outer &&
        this.inner === other.inner
      )
    }

    return false
  }

  toString () {
    return `ColorFilter.compose(${this.outer}, ${this.inner})`
  }
}