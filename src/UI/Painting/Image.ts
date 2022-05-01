import type { ImageByteFormat } from '.'

export abstract class Image {
  abstract width: number
  abstract height: number
  abstract debugDisposed: boolean
  abstract dispose ()
  abstract toByteData (format: ImageByteFormat): Promise<any | null> 

  abstract clone (): Image
  abstract isCloneOf (image: Image): boolean

  abstract debugGetOpenHandleStackTraces (): [] | null

  toString () {
    return `[${this.width}\u00D7${this.height}]`
  }
}
