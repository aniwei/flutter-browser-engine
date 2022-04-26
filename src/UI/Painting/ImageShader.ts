import { Float64List } from '@Types';
import { TileMode } from 'canvaskit-wasm';
import { FilterQuality } from '.';
import { Image } from './Image'
import { Shader } from './Shader'

export class ImageShader extends Shader {
  static factory (
    image: Image,
    tmx: TileMode,
    tmy: TileMode,
    matrix4: Float64List,
    filterQuality?: FilterQuality
  ) {
    // TODO
  }
}