import { ManagedSkiaObject, Skia } from '@Skia'
import { CkColorFilterImageFilter } from './CkImageFilter'
import type { BlendMode, Color, ColorFilter, ImageFilter } from 'canvaskit-wasm'
import invariant from 'ts-invariant'

export abstract class CkColorFilter {

  public get imageFilter (): ManagedSkiaObject<ImageFilter> {
    return new CkColorFilterImageFilter({ colorFilter: this })
  }
  
  initRawImageFilter (): ImageFilter  {
    return Skia.ImageFilter.MakeColorFilter(this.initRawColorFilter(), null)
  }

  abstract initRawColorFilter (): ColorFilter
}

export type ManagedSkiaColorFilterOptions = {
  ckColorFilter: CkColorFilter
}

export class ManagedSkiaColorFilter<T extends ManagedSkiaColorFilterOptions = ManagedSkiaColorFilterOptions> extends ManagedSkiaObject<ColorFilter, T> {
  public colorFilter!: CkColorFilter

  constructor (options: T) {
    super()
    this.colorFilter = options.ckColorFilter
  }

   malloc (options: T) {
    return this.colorFilter.initRawColorFilter()
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

export class CkBlendModeColorFilter<T extends CkBlendModeColorFilterOptions> extends CkColorFilter {
  public color!: Color
  public blendMode!: BlendMode

  constructor (options: T) {
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

  isEqual (other: CkBlendModeColorFilter<T>) {
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


export type CkMatrixColorFilterOptions = {
  matrix: Float32Array
}

export class CkMatrixColorFilter<T extends CkMatrixColorFilterOptions> extends CkColorFilter {
  public matrix!: Float32Array

  constructor (options: T) {
    super()

    this.matrix = options.matrix
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

export class CkComposeColorFilter<T extends CkComposeColorFilterOptions> extends CkColorFilter {
  public outer!: ManagedSkiaColorFilter
  public inner!: ManagedSkiaColorFilter

  constructor (options: T) {
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

  isEqual (other: CkComposeColorFilter<T>) {
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