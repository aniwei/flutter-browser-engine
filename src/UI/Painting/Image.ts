import { int } from '@Types';

export abstract class Image {
  public width: int
  public height: int

  abstract toByteData ()
  abstract dispose ()

  clone () {
    return this
  }

  isCloneOf (image: Image) {
    return this === image
  }

  toString () {
    return `[${this.width}\u00D7${height}]`
  }
}
