import { SkiaObjectBox, SkiaImage } from '@Skia'
import { ImageByteFormat } from './Painting'

export interface IImage {
  width: number
  height: number
  toByteData (format: ImageByteFormat): Promise<any>
  dispose ()
   
  clone (): Image
  isCloneOf (other: Image ): boolean
}

export class Image implements IImage {
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
  public disposed: boolean

  constructor (skia: SkiaImage) {
    this.box = new SkiaObjectBox(skia)
    this.disposed = false
  }

  
  toByteData(format: ImageByteFormat): Promise<any> {
    throw new Error('Method not implemented.')
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