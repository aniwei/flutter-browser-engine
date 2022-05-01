import type { ImageByteFormat } from '.'

export abstract class Image {
  abstract width: number
  abstract height: number
  abstract debugDisposed: boolean
  abstract toByteData ()
  abstract dispose ()
  abstract toBytedata (format: ImageByteFormat): Promise<ByteData | null> 

  clone () {
    return this
  }

  isCloneOf (image: Image) {
    return this === image
  }

  debugGetOpenHandleStackTraces (): StackTrace[] | null {
    return null
  }

  toString () {
    return `[${this.width}\u00D7${this.height}]`
  }
}
