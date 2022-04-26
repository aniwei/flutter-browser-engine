import { UnsupportedError } from '@Shared';
import { ImageShader } from './ImageShader';

import type { bool, Float64List } from '@Types';

export class FragmentProgram {
  static compile (
    spirv: ByteBuffer,
    debugPrint: bool
  ) {
    throw new UnsupportedError('FragmentProgram is not supported for the CanvasKit or HTML renderers.')
  }

  shader (
    floatUniforms: Float64List,
    samplerUniforms: ImageShader[]
  ): unknown {
    throw new UnsupportedError('FragmentProgram is not supported for the CanvasKit or HTML renderers.')
  }
}
