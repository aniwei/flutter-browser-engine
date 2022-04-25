import { Rect } from '@UI'
import { SkPicture } from 'canvaskit-wasm'
import { ManagedSkiaObject } from './ManagedSkiaObject'

export class CkPicture extends ManagedSkiaObject<SkPicture> {
  public cullRect: Rect
  public snapshot: CkPictureSnapshot
  public isDisposed: boolean = false

  public get approximateBytesUsed () {
    return 0
  }

  constructor (picture: SkPicture, cullRect: Rect, snapshot) {
    super(picture)

    this.cullRect = cullRect
    this.snapshot = snapshot
  }

  dispose () {
    this.isDisposed = true
    this.snapshot?.dispose()

    this.rawSkiaObject?.delete()
    this.rawSkiaObject = null
  }

  resurrect(): SkPicture {
    return this.snapshot.toPicture()
  }

  delete () {
    if (this.isDisposed) {
      this.rawSkiaObject?.delete()
    }
  }
}