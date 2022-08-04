import { invariant } from 'ts-invariant'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { Skia, SkiaColorFilter, SkiaImageFilter, SkiaBlendMode } from '@skia/Skia'
import { ColorFilterImageFilter } from './ImageFilter'
import type { Color } from '@internal/Color'

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

  
  eq (other: ManagedSkiaColorFilter) {
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

  eq (other: BlendModeColorFilter) {
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

  eq () {

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

  eq (other: CkLinearToSrgbGammaColorFilter) {
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

  eq (other: ComposeColorFilter) {
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