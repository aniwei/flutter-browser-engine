import invariant from 'ts-invariant'
import { SkPicture, SkSuface, SkCanvas } from '@Skia'
import { Image, IPicture, Rect } from '@UI'
import { StateError } from '@Shared'
import { CanvasKitAPI } from '../CanvasKitAPI/CanvasKit'
import { CkPictureRecorder } from '../PictureRecorder'
import { ManagedSkiaObject } from '../SkiaObjectCache'


export class CkPicture extends ManagedSkiaObject<SkPicture> implements IPicture {
  public cullRect: Rect
  public snapshot: CkPictureSnapshot
  
  
  public get isResurrectionExpensive () {
    return true
  }

  public get approximateBytesUsed () {
    return  0
  }

  public _isDisposed: boolean = false
  public get debugIsDisposed () {
    return this._isDisposed
  }

  constructor (
    picture: SkPicture,
    cullRect: Rect,
    snapshot: CkPictureRecorder
  ) {
    super(picture)
    invariant(this.snapshot !== null)
    this.cullRect = cullRect
    this.snapshot = snapshot
  }

  dispose () {
    invariant(!this._isDisposed, 'Object has been disposed.')
    
    this._isDisposed = true
    this.snapshot?.dispose()

    this.rawSkiaObject?.delete()
    this.rawSkiaObject = null
  }

  toImage (width: number, height: number):  Promise<Image> {
    invariant(!this._isDisposed)
    const skSurface = CanvasKitAPI.CanvasKit.MakeSurface(width, height) as SkSuface
    const skCanvas: SkCanvas = skSurface.getCanvas()
    skCanvas.drawPicture(this.skiaObject)
    const skImage = skSurface.makeImageSnapshot()
    skSurface.dispose()
    return new CkImage(skImage)
  }

  createDefault (): SkPicture {
    throw new StateError('Unreachable code')
  }

  resurrect (): SkPicture {
    invariant(!this._isDisposed)
    return this.snapshot!.toPicture()
  }

  delete () {
    if (!this._isDisposed) {
      this.rawSkiaObject?.delete();
    }
  }
}
