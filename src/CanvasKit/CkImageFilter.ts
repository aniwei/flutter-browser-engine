import { ManagedSkiaObject, Skia, SkiaFilterQuality } from '@Skia'
import type { ImageFilter, TileMode } from 'canvaskit-wasm'
import type { CkColorFilter } from './CkColorFilter'

export abstract class CkManagedSkImageFilterConvertible {
  abstract imageFilter: ManagedSkiaObject<ImageFilter>
}

export abstract class CkImageFilter<T> extends ManagedSkiaObject<ImageFilter, T> implements CkManagedSkImageFilterConvertible {
  static blur (options: CkBlurImageFilter) {
    return new CkBlurImageFilter(options)
  }

  static color(colorFilter: CkColorFilter) {
    return new CkColorFilterImageFilter({ colorFilter })
  }
  
  static matrix(
    matrix: Float32Array,
    filterQuality: SkiaFilterQuality 
  ) {
    return new CkMatrixImageFilter({ matrix, filterQuality })
  }


  public get imageFilter (): ManagedSkiaObject<ImageFilter> {
    return this
  }

  abstract initSkiaObject (): ImageFilter

  malloc (options?: T): ImageFilter {
    return this.initSkiaObject()
  }

  resurrect (): ImageFilter {
    return this.initSkiaObject()
  } 
}


export type CkBlurImageFilterOptions = {
  sigmaX: number,
  sigmaY: number,
  tileMode: TileMode 
}

export class CkBlurImageFilter<T extends CkBlurImageFilterOptions = CkBlurImageFilterOptions>  extends CkImageFilter<T> {
  get modeString () {
    switch (this.tileMode) {
      case ui.TileMode.clamp:
        return 'clamp'
      case ui.TileMode.mirror:
        return 'mirror'
      case ui.TileMode.repeated:
        return 'repeated'
      case ui.TileMode.decal:
        return 'decal'
    }
  }

  public sigmaX!: number
  public sigmaY!: number 
  public tileMode!: TileMode

  constructor (options: T) {
    super(options)
  }

  malloc (options): ImageFilter {
    this.sigmaX = options.sigmaX
    this.sigmaY = options.sigmaY
    this.tileMode = options.tileMode

    return super.malloc(options)
  }

  initSkiaObject () {
    return Skia.ImageFilter.MakeBlur(
      this.sigmaX,
      this.sigmaY,
      this.tileMode,
      null,
    )
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

  toString () {
    return `ImageFilter.blur(${this.sigmaX}, ${this.sigmaY}, ${this.modeString})`
  }
}

export type CkMatrixImageFilterOptions = {
  matrix: Float32Array, 
  filterQuality: SkiaFilterQuality
}

export class CkMatrixImageFilter<T extends CkMatrixImageFilterOptions = CkMatrixImageFilterOptions> extends CkImageFilter<T> {
  public matrix!: Float32Array
  public filterQuality!: SkiaFilterQuality

  constructor (options: T) {
    super(options)
  }

  malloc (options: T) {
    this.filterQuality = options.filterQuality
    this.matrix = Float32Array.from(options.matrix)

    return super.malloc(options)
  }
      
  initSkiaObject (): ImageFilter  {
    return Skia.ImageFilter.MakeMatrixTransform(
      this.matrix,
      Skia.SkiaFilterOptions(this.filterQuality),
      null,
    )
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

export class CkColorFilterImageFilter<T extends CkColorFilterImageFilterOptions = CkColorFilterImageFilterOptions> extends CkImageFilter<T> {
  public colorFilter!: CkColorFilter
  
  constructor (options: T) {
    super(options)
  }

  malloc (options: T) {
    this.colorFilter = options.colorFilter
    return super.malloc(options)
  }

  initSkiaObject (): ImageFilter {
    return this.colorFilter.initRawImageFilter() 
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
