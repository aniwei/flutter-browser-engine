import { int, bool } from '@Types';

export abstract class Image {
  abstract width: int
  abstract height: int
  abstract debugDisposed: bool
  abstract toByteData ()
  abstract dispose ()

  clone () {
    return this
  }

  isCloneOf (image: Image) {
    return this === image
  }

  debugGetOpenHandleStackTraces (): StackTrace[] | null {
    return null
  }

  toBytedata (
    
  ): Promise<ByteData | null> {

  }

  toString () {
    return `[${this.width}\u00D7${this.height}]`
  }
}
