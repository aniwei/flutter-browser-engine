import { TileMode } from '@UI'
import { CanvasKitAPI } from '../CanvasKitAPI'
import { ManagedSkiaObject } from '../SkiaObjectCache'
import type { SkImageFilter } from '@Skia'
import type { FilterQuality } from '@UI'
import type { Float64List } from '@Types'
import type { CkColorFilter } from '../ColorFilter'

export abstract class CkImageFilter extends ManagedSkiaObject<SkImageFilter> {
  static blur (
    sigmaX: number,
    sigmaY: number,
    tileMode: TileMode 
  ) {
    return new CkBlurImageFilter(sigmaX, sigmaY, tileMode)
  }

  static color(
    colorFilter: CkColorFilter
  ) {
    return new CkColorFilterImageFilter(colorFilter)
  }
  static matrix(
    matrix: Float64List,
    filterQuality: FilterQuality 
  ) {
    return new CkMatrixImageFilter(matrix, filterQuality)
  }


  public get imageFilter (): ManagedSkiaObject<SkImageFilter> {
    return this
  }

  abstract initSkiaObject (): SkImageFilter

  createDefault (): SkImageFilter  {
    return this.initSkiaObject()
  }

  resurrect () {
    return this.initSkiaObject()
  }

  delete () {
    this.rawSkiaObject?.delete()
  }
}

export class CkBlurImageFilter extends CkImageFilter {
  public sigmaX: number
  public sigmaY: number
  public tileMode: TileMode

  get modeString () {
    switch (this.tileMode) {
      case TileMode.clamp:
        return 'clamp'
      case TileMode.mirror:
        return 'mirror'
      case TileMode.repeated:
        return 'repeated'
      case TileMode.decal:
        return 'decal'
    }
  }

  constructor (sigmaX, sigmaY, tileMode) {
    super()

    this.sigmaX = sigmaX
    this.sigmaY = sigmaY
    this.tileMode = tileMode
  }
      
  
  initSkiaObject (): SkImageFilter {
    return CanvasKitAPI.CanvasKit.ImageFilter.MakeBlur(
      this.sigmaX,
      this.sigmaY,
      CanvasKitAPI.toSkTileMode(this.tileMode),
      null,
    );
  }

  isEqula (other) {
    return (
      other.sigmaX === this.sigmaX &&
      other.sigmaY === this.sigmaY &&
      other.tileMode === this.tileMode
    )
  }

  toString () {
    return `ImageFilter.blur(${this.sigmaX}, ${this.sigmaY}, ${this.modeString})`
  }
}

export class CkColorFilterImageFilter extends CkImageFilter {
  public colorFilter: CkColorFilter  

  constructor (colorFilter: CkColorFilter) {
    super()

    this.colorFilter = colorFilter
  }

  initSkiaObject (): SkImageFilter {
    return this.colorFilter.initRawImageFilter()
  } 

  isEqual (other) {
    return other.colorFilter === this.colorFilter
  }

  toString () {
    return this.colorFilter.toString()
  }
}

export class CkMatrixImageFilter extends CkImageFilter {
  public matrix: Float64List 
  public filterQuality: FilterQuality

  constructor (matrix: Float64List, filterQuality: FilterQuality) {
    super()

    this.matrix = matrix
    this.filterQuality = filterQuality
  }
  


  initSkiaObject (): SkImageFilter {
    return CanvasKitAPI.CanvasKit.ImageFilter.MakeMatrixTransform(
      CanvasKitAPI.toSkMatrixFromFloat64(this.matrix),
      CanvasKitAPI.toSkFilterOptions(this.filterQuality) as any, // TODO
      null,
    );
  }

  isEqual (other) {
    return (
      other.matrix === this.matrix &&
      other.filterQuality === this.filterQuality
    )
  }

  
  toString () {
    return `ImageFilter.matrix(${this.matrix}, ${this.filterQuality})`
  }
}
