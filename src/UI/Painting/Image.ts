import type { int, bool } from '@Types';
import type { ImageByteFormat } from '.';

export abstract class Image {
  abstract width: int
  abstract height: int
  abstract debugDisposed: bool
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
