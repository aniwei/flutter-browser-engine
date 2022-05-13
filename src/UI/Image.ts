import { SkiaObjectBox, SkiaImage } from '@Skia'

export class Image {
  static malloc (skia: SkiaImage) {
    return new Image(skia)
  }
  static cloneOf (box: SkiaObjectBox<SkiaImage>) {
    
  }

  public get skia () {
    return this.box.skia
  }

  public get width (): number {
    return this.skia.width()
  }

  public get height (): number {
    return this.skia.height()
  }

  public box: SkiaObjectBox<SkiaImage>
  // TODO
  // public videoFrame: VideoFrame | null = null

  constructor (skia: SkiaImage) {
    this.box = new SkiaObjectBox(skia)
  }

  dispose () {
    this.disposed = true
  }

  clone (): Image  {
    return Image.cloneOf(this.box)
  }

  isCloneOf (other: Image) {
    return (
      other instanceof Image && 
      other.skia.isAliasOf(this.skia)
    )
  }

  toString (): string {
    return `[${this.width}, ${this.height}]`
  }
}