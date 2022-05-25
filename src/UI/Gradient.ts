import { Skia, SkiaTileMode } from '@Skia'
import { Offset } from './Geometry'

export abstract class Gradient {
  static linear(
    from: Offset,
    to: Offset ,
    colors: Color[], 
    colorStops?: number[] | null,
    tileMode: SkiaTileMode = Skia.TileMode.clamp,
    matrix4: Float64Array,
  ]) {
    final Float32List? matrix =
        matrix4 == null ? null : engine.toMatrix32(matrix4);
    return engine.useCanvasKit
        ? engine.CkGradientLinear(
            from, to, colors, colorStops, tileMode, matrix)
        : engine.GradientLinear(from, to, colors, colorStops, tileMode, matrix);
  }

  factory Gradient.radial(
    Offset center,
    double radius,
    List<Color> colors, [
    List<double>? colorStops,
    TileMode tileMode = TileMode.clamp,
    Float64List? matrix4,
    Offset? focal,
    double focalRadius = 0.0,
  ]) {
    _validateColorStops(colors, colorStops);
    // If focal is null or focal radius is null, this should be treated as a regular radial gradient
    // If focal == center and the focal radius is 0.0, it's still a regular radial gradient
    final Float32List? matrix32 =
        matrix4 != null ? engine.toMatrix32(matrix4) : null;
    if (focal == null || (focal == center && focalRadius == 0.0)) {
      return engine.useCanvasKit
          ? engine.CkGradientRadial(
              center, radius, colors, colorStops, tileMode, matrix32)
          : engine.GradientRadial(
              center, radius, colors, colorStops, tileMode, matrix32);
    } else {
      assert(center != Offset.zero ||
          focal != Offset.zero); // will result in exception(s) in Skia side
      return engine.useCanvasKit
          ? engine.CkGradientConical(focal, focalRadius, center, radius, colors,
              colorStops, tileMode, matrix32)
          : engine.GradientConical(focal, focalRadius, center, radius, colors,
              colorStops, tileMode, matrix32);
    }
  }
  factory Gradient.sweep(
    Offset center,
    List<Color> colors, [
    List<double>? colorStops,
    TileMode tileMode = TileMode.clamp,
    double startAngle = 0.0,
    double endAngle = math.pi * 2,
    Float64List? matrix4,
  ]) =>
      engine.useCanvasKit
          ? engine.CkGradientSweep(
              center,
              colors,
              colorStops,
              tileMode,
              startAngle,
              endAngle,
              matrix4 != null ? engine.toMatrix32(matrix4) : null)
          : engine.GradientSweep(
              center,
              colors,
              colorStops,
              tileMode,
              startAngle,
              endAngle,
              matrix4 != null ? engine.toMatrix32(matrix4) : null);
}
