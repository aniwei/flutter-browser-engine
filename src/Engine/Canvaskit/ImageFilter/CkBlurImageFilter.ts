import { SkImageFilter } from '@Skia'
import { TileMode } from '@UI'
import { CanvasKitAPI } from '../CanvasKitAPI/CanvasKit'
import { CkImageFilter } from './CkImageFilter'

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
