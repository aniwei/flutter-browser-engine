import { Skia, SkiaPictureRecorder } from '@skia'
import { Canvas } from './Canvas'
import { Rect } from './Geometry'
import { Picture } from './Picture'

export class PictureRecorder {
  public cullRect: Rect | null = null
  public skiaRecorder: SkiaPictureRecorder | null = null
  public recordingCanvas: Canvas | null = null

  get isRecording () {
    return this.skiaRecorder !== null
  }

  beginRecording (bounds: Rect) {
    this.cullRect = bounds
    const recorder = this.skiaRecorder = new Skia.PictureRecorder()
    const canvas = recorder.beginRecording(bounds)
    return this.recordingCanvas = Canvas.malloc(canvas)
  }

  endRecording () {
    const recorder = this.skiaRecorder

    if (recorder === null) {
      throw new Error('PictureRecorder is not recording')
    }

    const picture = recorder.finishRecordingAsPicture()
    recorder.delete()
    this.skiaRecorder = null

    return Picture.malloc({
      picture, 
      cullRect: this.cullRect!, 
      snapshot: this.recordingCanvas!.pictureSnapshot
    })
  }
}
