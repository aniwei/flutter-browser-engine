import { ManagedSkiaObject, Skia, SkiaFilterQuality } from '@Skia'
import type { ImageFilter, TileMode } from 'canvaskit-wasm'

export abstract class CkManagedSkImageFilterConvertible {
  abstract imageFilter: ManagedSkiaObject<ImageFilter>
}

export abstract class CkImageFilter extends ManagedSkiaObject<ImageFilter> implements CkManagedSkImageFilterConvertible {
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
    matrix: Float64Array,
    filterQuality: SkiaFilterQuality 
  ) {
    return new CkMatrixImageFilter(matrix, filterQuality)
  }


  public get imageFilter (): ManagedSkiaObject<ImageFilter> {
    return this
  }

  abstract initSkiaObject (): ImageFilter

  create (): ImageFilter {
    return this.initSkiaObject()
  }

  resurrect (): ImageFilter {
    return this.initSkiaObject()
  } 

  delete () {
    this.rawSkia?.delete()
  }
}


export class CkBlurImageFilter extends CkImageFilter {
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

  public sigmaX: number
  public sigmaY: number 
  public tileMode: TileMode

  constructor (
    sigmaX: number, 
    sigmaY: number, 
    tileMode: TileMode
  ) {
    super()

    this.sigmaX = sigmaX
    this.sigmaY = sigmaY
    this.tileMode = tileMode
  }

  initSkiaObject () {
    return Skia.ImageFilter.MakeBlur(
      this.sigmaX,
      this.sigmaY,
      this.tileMode,
      null,
    );
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


export class CkMatrixImageFilter extends CkImageFilter {
  public matrix: Float64Array
  public filterQuality: SkiaFilterQuality

  constructor (
    matrix: Float64Array, 
    filterQuality: SkiaFilterQuality
  ) {
    super()
    this.matrix = Float64Array.from(matrix)
  }
      


  @override
  SkImageFilter _initSkiaObject() {
    return canvasKit.ImageFilter.MakeMatrixTransform(
      toSkMatrixFromFloat64(matrix),
      toSkFilterOptions(filterQuality),
      null,
    );
  }

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType) {
      return false;
    }
    return other is _CkMatrixImageFilter &&
        other.filterQuality == filterQuality &&
        listEquals<double>(other.matrix, matrix);
  }

  @override
  int get hashCode => ui.hashValues(filterQuality, ui.hashList(matrix));

  @override
  String toString() => 'ImageFilter.matrix($matrix, $filterQuality)';
}