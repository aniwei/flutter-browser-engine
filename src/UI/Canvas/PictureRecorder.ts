import type { bool } from '@Types';
import { Picture } from './Picture';


export abstract class PictureRecorder {
  static factory () {
    // return new CkPictureRecorder()
  }
  abstract isRecording: bool
  abstract endRecording(): Picture
}
