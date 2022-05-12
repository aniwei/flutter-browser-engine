import { SkiaObjectBox } from '@Skia'
import { Image } from 'canvaskit-wasm'

export class CkImage {
  static malloc (skia: Image) {
    return new CkImage(skia)
  }
  static cloneOf (box: SkiaObjectBox<Image>) {
    
  }

  public get skia () {
    return this.box.skia
  }

  public get width () {
    return this.skia.width
  }

  public get height () {
    return this.skia.height
  }

  public box: SkiaObjectBox<Image>
  // TODO
  // public videoFrame: VideoFrame | null = null

  constructor (skia: Image) {
    this.box = new SkiaObjectBox(skia)
  }

  dispose () {
    this.disposed = true
  }

  clone (): CkImage  {
    return CkImage.cloneOf(this.box)
  }

  isCloneOf (other: CkImage) {
    return (
      other instanceof CkImage && 
      other.skia.isAliasOf(this.skia)
    )
  }

  toString (): string {
    return `[${this.width}, ${this.height}]`
  }
}