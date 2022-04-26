export class FragmentProgram {
  static Future<FragmentProgram> compile({
    required ByteBuffer spirv,
    bool debugPrint = false,
  }) {
    throw UnsupportedError(
        'FragmentProgram is not supported for the CanvasKit or HTML renderers.');
  }

  FragmentProgram._();

  Shader shader({
    Float32List? floatUniforms,
    List<ImageShader>? samplerUniforms,
  }) =>
      throw UnsupportedError(
          'FragmentProgram is not supported for the CanvasKit or HTML renderers.');
}
