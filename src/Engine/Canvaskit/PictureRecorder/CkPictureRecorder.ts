import { StateError } from '@Shared'
import { Rect, PictureRecorder } from '@UI'

export class CkPictureRecorder implements PictureRecorder {
  public cullRect: Rect | null = null
  public skRecorder?: SkPictureRecorder | null = null
  public recordingCanvas: CkCanvas | null = null

  public get isRecording () {
    return this.skRecorder !== null
  }

  beginRecording (bounds: Rect): CkCanvas  {
    this.cullRect = bounds
    const recorder: SkPictureRecorder = this.skRecorder = new SkPictureRecorder()
    const skRect: Float32List = toSkRect(bounds)
    const skCanvas: SkCanvas = recorder.beginRecording(skRect)
    return this.recordingCanvas = browserSupportsFinalizationRegistry
        ? new CkCanvas(skCanvas)
        : new RecordingCkCanvas(skCanvas, bounds)
  }

  endRecording (): CkPicture {
    const recorder: SkPictureRecorder | null = this.skRecorder

    if (recorder === null) {
      throw new StateError('PictureRecorder is not recording')
    }

   const skPicture: SkPicture = recorder.finishRecordingAsPicture()
    recorder.delete()
    
    this.skRecorder = null
    return new CkPicture(
      skPicture, 
      this.cullRect, 
      this.recordingCanvas!.pictureSnapshot
    )
  }

  
}
