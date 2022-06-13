import { invariant } from 'ts-invariant'
import { property } from '@helper'
import { ManagedSkiaObject, Skia, SkiaImage, SkiaPicture, SkiaSurface } from '@skia'
import { kBrowserSupportsFinalizationRegistry } from '@platform'
import { Rect } from './Geometry'
import { Image } from './Image'


export class Picture extends ManagedSkiaObject<SkiaPicture> {
  @property<boolean>(function (this) {
    return this.isDisposed
  }) public debugIsDisposed!: boolean

  public isResurrectionExpensive: boolean = true
  public approximateBytesUsed: number = 0
  public isDisposed: boolean = false
  public cullRect: Rect
  public snapshot

  constructor (
    picture: SkiaPicture, 
    cullRect: Rect, 
    snapshot
  ) {    
    invariant(
      kBrowserSupportsFinalizationRegistry && snapshot === null || snapshot != null,
      'If the browser does not support FinalizationRegistry (WeakRef), then we must have a picture snapshot to be able to resurrect it.',
    )

    super(picture)

    this.cullRect = cullRect
    this.snapshot = snapshot
  }

  dispose () {
    invariant(!this.isDisposed, 'Object has been disposed.')
    
    this.isDisposed = true
    this.snapshot.dispose()
    
    this.rawSkia?.delete();
    this.rawSkia = null
  }

  toImage (
    width: number, 
    height: number
  ): Image {
    invariant(!this.isDisposed)
    const surface: SkiaSurface = Skia.MakeSurface(width, height) as SkiaSurface
    const canvas = surface.getCanvas()
    canvas.drawPicture(this.skia)
    
    const skImage: SkiaImage = surface.makeImageSnapshot()
    surface.dispose()
    return Image.malloc(skImage)
  }


  resurrect () {
    invariant(!this.isDisposed)
    return this.snapshot.toPicture()
  }

  delete () {
    if (!this.isDisposed) {
      this.skia?.delete()
    }
  }
}