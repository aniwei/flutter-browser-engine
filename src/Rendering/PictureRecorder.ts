/*
 * @Author: Aniwei
 * @Date: 2022-06-27 10:09:39
 */
import { Rect } from '@internal/Geometry'
import { Skia } from '@skia/binding'
import { IPictureRecorder } from '@skia'
import { Canvas } from './Canvas'
import { Picture } from './Picture'

export class PictureRecorder {
  public cullRect: Rect | null = null
  public skia: IPictureRecorder | null = null
  public recordingCanvas: Canvas | null = null

  get isRecording () {
    return this.skia !== null
  }

  beginRecording (bounds: Rect) {
    this.cullRect = bounds
    const recorder = this.skia = new Skia.binding.PictureRecorder()
    const canvas = recorder.beginRecording(bounds)
    return this.recordingCanvas = new Canvas(canvas)
  }

  endRecording () {
    const recorder = this.skia

    if (recorder === null) {
      throw new Error('PictureRecorder is not recording')
    }

    const picture = recorder.finishRecordingAsPicture()
    recorder.delete()
    this.skia = null

    return new Picture({
      picture, 
      cullRect: this.cullRect!, 
      snapshot: this.recordingCanvas!.pictureSnapshot
    })
  }
}
