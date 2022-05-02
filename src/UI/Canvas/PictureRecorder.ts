import { Picture } from './Picture';


export abstract class PictureRecorder {
  static factory () {
    // return new CkPictureRecorder()
  }
  abstract isRecording: boolean
  abstract endRecording(): Picture
}
