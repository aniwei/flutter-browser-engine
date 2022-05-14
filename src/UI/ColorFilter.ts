import { invariant } from 'ts-invariant'
import { ManagedSkiaObject, Skia, SkiaColorFilter, SkiaImageFilter, SkiaBlendMode } from '@Skia'
import { ColorFilterImageFilter } from './ImageFilter'
import { Color } from './Painting'

export abstract class ColorFilter {

  public get imageFilter (): ManagedSkiaObject<SkiaImageFilter> {
    return ColorFilterImageFilter.malloc({ colorFilter: this })
  }
  
  initRawImageFilter (): SkiaImageFilter  {
    return Skia.ImageFilter.MakeColorFilter(this.initRawColorFilter(), null)
  }

  abstract initRawColorFilter (): SkiaColorFilter
}

export class ManagedSkiaColorFilter extends ManagedSkiaObject<SkiaColorFilter> {
  static malloc (colorFilter: ColorFilter): ManagedSkiaColorFilter {
    const managedSkiaColorFilter = new ManagedSkiaColorFilter(
      colorFilter.initRawColorFilter(), 
      colorFilter,
    )

    return managedSkiaColorFilter
  }

  public colorFilter: ColorFilter

  constructor (skia, colorFilter: ColorFilter) {
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

export type BlendModeColorFilterOptions = {
  color: Color,
  blendMode: SkiaBlendMode
}

export class BlendModeColorFilter extends ColorFilter {
  static init (options: BlendModeColorFilterOptions) {
    const blendModeColorFilter = new BlendModeColorFilter(options)
    return blendModeColorFilter
  }

  public color: Color
  public blendMode: SkiaBlendMode

  constructor (options: BlendModeColorFilterOptions) {
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

  isEqual (other: BlendModeColorFilter) {
    if (other instanceof BlendModeColorFilter) {
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


export class MatrixColorFilter extends ColorFilter {
  static malloc (matrix: Float32Array) {
    const matrixColorFilter = new MatrixColorFilter(matrix)
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


export class CkLinearToSrgbGammaColorFilter extends ColorFilter {
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


export type ComposeColorFilterOptions = {
  outer: ManagedSkiaColorFilter,
  inner: ManagedSkiaColorFilter
}

export class ComposeColorFilter extends ColorFilter {
  static malloc (options: ComposeColorFilterOptions) {
    const composeColorFilter = new ComposeColorFilter(options)
    return composeColorFilter
  }

  public outer: ManagedSkiaColorFilter
  public inner: ManagedSkiaColorFilter

  constructor (options: ComposeColorFilterOptions) {
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

  isEqual (other: ComposeColorFilter) {
    if (other instanceof ComposeColorFilter) {
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