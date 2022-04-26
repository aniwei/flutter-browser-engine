export class ImageShader extends Shader {
  factory ImageShader(
    Image image,
    TileMode tmx,
    TileMode tmy,
    Float64List matrix4, {
    FilterQuality? filterQuality,
  }) =>
      engine.useCanvasKit
          ? engine.CkImageShader(image, tmx, tmy, matrix4, filterQuality)
          : engine.EngineImageShader(image, tmx, tmy, matrix4, filterQuality);
}