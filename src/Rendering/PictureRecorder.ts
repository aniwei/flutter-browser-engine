import { Skia, SkiaPictureRecorder } from '@skia'
import { Canvas } from './Canvas'
import { Rect } from './Geometry'
import { Picture } from './Picture'

export class PictureRecorder {
  public cullRect: Rect | null = null
  public skia: SkiaPictureRecorder | null = null
  public recordingCanvas: Canvas | null = null

  get isRecording () {
    return this.skia !== null
  }

  beginRecording (bounds: Rect) {
    this.cullRect = bounds
    const recorder = this.skia = new Skia.PictureRecorder()
    const canvas = recorder.beginRecording(bounds)
    return this.recordingCanvas = Canvas.malloc(canvas)
  }

  endRecording () {
    const recorder = this.skia

    if (recorder === null) {
      throw new Error('PictureRecorder is not recording')
    }

    const picture = recorder.finishRecordingAsPicture()
    recorder.delete()
    this.skia = null

    return Picture.malloc({
      picture, 
      cullRect: this.cullRect!, 
      snapshot: this.recordingCanvas!.pictureSnapshot
    })
  }
}
