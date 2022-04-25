import { Rect } from '@UI'
import { SkPicture, PictureRecorder } from 'canvaskit-wasm'

export class CkPictureSnapshot {
  public bounds: Rect
  public commands: [] = []

  constructor (bounds: Rect) {
    this.bounds = bounds
  }

  toPicture (): SkPicture {
    const recorder = new PictureRecorder()
    const skRect: number[] = toSkRect(this.bounds)
    const skCanvas = recorder.beginRecording(skRect)

    for (const command of this.command) {
      command.apply(skCanvas)
    }

    const skPicture = recorder.finishRecordingAsPicture()
    recorder.delete()

    return skPicture
  }
}