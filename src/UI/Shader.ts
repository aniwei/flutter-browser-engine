import invariant from 'ts-invariant'
import { Skia, ManagedSkiaObject, SkiaFilterQuality, SkiaShader, SkiaTileMode } from '@Skia'
import { Offset } from './Geometry'
import { Color } from './Painting'


export abstract class Shader extends ManagedSkiaObject<SkiaShader> {
  withQuality (contextualQuality: SkiaFilterQuality) {
    return this.skia
  }

  delete () {
    this.rawSkia?.delete();
  }
}

export type GradientSweepInitOptions = {
  skia: SkiaShader,
  center: Offset, 
  colors: Color[], 
  colorStops: number[] | null, 
  tileMode: SkiaTileMode,
  startAngle: number, 
  endAngle: number, 
  matrix4: Float32Array | null
}

export class GradientSweep extends Shader {
  static malloc (options: GradientSweepInitOptions) {
    const toDegrees = 180.0 / Math.PI
    const skia =  Skia.Shader.MakeSweepGradient(
      options.center.dx,
      options.dy,
      toFlatColors(colors),
      toSkColorStops(colorStops),
      options.tileMode,
      matrix4 !== null ? toSkMatrixFromFloat32(options.matrix4!) : null,
      0,
      toDegrees * options.startAngle,
      toDegrees * options.endAngle,
    );

    return new CkGradientSweep(
      skia,
      options.center,
      options.colors,
      options.colorStops,
      options.tileMode,
      options.startAngle,
      options.endAngle,
      options.matrix4,
    )
  }

  public center: Offset
  public colors: Color[]
  public colorStops: number[] | null
  public tileMode: SkiaTileMode
  public startAngle: number
  public endAngle: number
  public matrix4: Float32Array | null

  constructor (
    skia: SkiaShader,
    center: Offset, 
    colors: Color[], 
    colorStops: number[] | null, 
    tileMode: SkiaTileMode,
    startAngle: number, 
    endAngle: number, 
    matrix4: Float32Array | null
  ) {
    super(skia)

    invariant(colors != null)
    invariant(tileMode != null)
    invariant(startAngle != null)
    invariant(endAngle != null)
    invariant(startAngle < endAngle),
    invariant(matrix4 == null || matrix4IsValid(matrix4))

    this.center = center
    this.colors = colors
    this.colorStops = colorStops
    this.tileMode = tileMode
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.matrix4 = matrix4
  }  

  @override
  SkShader createDefault() {
    const double toDegrees = 180.0 / math.pi;
    return canvasKit.Shader.MakeSweepGradient(
      center.dx,
      center.dy,
      toFlatColors(colors),
      toSkColorStops(colorStops),
      toSkTileMode(tileMode),
      matrix4 != null ? toSkMatrixFromFloat32(matrix4!) : null,
      0,
      toDegrees * startAngle,
      toDegrees * endAngle,
    );
  }

  resurrect () {
    const toDegrees = 180.0 / Math.PI
    const skia =  Skia.Shader.MakeSweepGradient(
      this.center.dx,
      this.center.dy,
      toFlatColors(this.colors),
      toSkColorStops(this.colorStops),
      this.tileMode,
      this.matrix4 !== null ? toSkMatrixFromFloat32(this.matrix4!) : null,
      0,
      toDegrees * this.startAngle,
      toDegrees * this.endAngle,
    );

    return skia
  }
}

export type GradientLinearInitOptions = {
  from: Offset
  to: Offset
  colors: Color[]
  colorStops: number[] | null
  tileMode: SkiaTileMode
  matrix4: Float32Array | null
}

export class CkGradientLinear extends Shader {
  static malloc(options: GradientLinearInitOptions) {
    Skia.Shader.MakeLinearGradient(
      toSkPoint(options.from),
      toSkPoint(options.to),
      toFlatColors(options.colors),
      toSkColorStops(options.colorStops),
      toSkTileMode(options.tileMode),
      options.matrix4 != null ? toSkMatrixFromFloat32(options.matrix4!) : null,
    )
  }

  public from: Offset
  public to: Offset
  public colors: Color[]
  public colorStops: number[] | null
  public tileMode: SkiaTileMode
  public matrix4: Float32Array | null

  constructor (
    skia,
    from: Offset,
    to: Offset,
    colors: Color[],
    colorStops: number[] | null,
    tileMode: SkiaTileMode,
    matrix4: Float32Array | null,
  ) {
    super(skia)
    invariant(offsetIsValid(from))
    invariant(offsetIsValid(to))
    invariant(colors !== null)
    invariant(tileMode !== null)


    // @TODO
    this.from = from
    this.to = to
    this.colors = colors
    this.colorStops = colorStops
    this.tileMode = tileMode
    this.matrix4 = matrix4
  }

  resurrect () {
    return Skia.Shader.MakeLinearGradient(
      toSkPoint(this.from),
      toSkPoint(this.to),
      toFlatColors(this.colors),
      toSkColorStops(this.colorStops),
      toSkTileMode(this.tileMode),
      this.matrix4 != null ? toSkMatrixFromFloat32(this.matrix4!) : null,
    )
  }
}

class CkGradientRadial extends CkShader implements ui.Gradient {
  CkGradientRadial(this.center, this.radius, this.colors, this.colorStops,
      this.tileMode, this.matrix4);

  final ui.Offset center;
  final double radius;
  final List<ui.Color> colors;
  final List<double>? colorStops;
  final ui.TileMode tileMode;
  final Float32List? matrix4;

  @override
  SkShader createDefault() {
    assert(useCanvasKit);

    return canvasKit.Shader.MakeRadialGradient(
      toSkPoint(center),
      radius,
      toFlatColors(colors),
      toSkColorStops(colorStops),
      toSkTileMode(tileMode),
      matrix4 != null ? toSkMatrixFromFloat32(matrix4!) : null,
      0,
    );
  }

  @override
  SkShader resurrect() => createDefault();
}

class CkGradientConical extends CkShader implements ui.Gradient {
  CkGradientConical(this.focal, this.focalRadius, this.center, this.radius,
      this.colors, this.colorStops, this.tileMode, this.matrix4);

  final ui.Offset focal;
  final double focalRadius;
  final ui.Offset center;
  final double radius;
  final List<ui.Color> colors;
  final List<double>? colorStops;
  final ui.TileMode tileMode;
  final Float32List? matrix4;

  @override
  SkShader createDefault() {
    assert(useCanvasKit);
    return canvasKit.Shader.MakeTwoPointConicalGradient(
      toSkPoint(focal),
      focalRadius,
      toSkPoint(center),
      radius,
      toFlatColors(colors),
      toSkColorStops(colorStops),
      toSkTileMode(tileMode),
      matrix4 != null ? toSkMatrixFromFloat32(matrix4!) : null,
      0,
    );
  }

  @override
  SkShader resurrect() => createDefault();
}

class CkImageShader extends CkShader implements ui.ImageShader {
  CkImageShader(ui.Image image, this.tileModeX, this.tileModeY, this.matrix4,
      this.filterQuality)
      : _image = image as CkImage;

  final ui.TileMode tileModeX;
  final ui.TileMode tileModeY;
  final Float64List matrix4;
  final ui.FilterQuality? filterQuality;
  final CkImage _image;

  ui.FilterQuality? _cachedQuality;
  @override
  SkShader withQuality(ui.FilterQuality contextualQuality) {
    final ui.FilterQuality quality = filterQuality ?? contextualQuality;
    SkShader? shader = rawSkiaObject;
    if (_cachedQuality != quality || shader == null) {
      if (quality == ui.FilterQuality.high) {
        shader = _image.skImage.makeShaderCubic(
          toSkTileMode(tileModeX),
          toSkTileMode(tileModeY),
          1.0 / 3.0,
          1.0 / 3.0,
          toSkMatrixFromFloat64(matrix4),
        );
      } else {
        shader = _image.skImage.makeShaderOptions(
          toSkTileMode(tileModeX),
          toSkTileMode(tileModeY),
          toSkFilterMode(quality),
          toSkMipmapMode(quality),
          toSkMatrixFromFloat64(matrix4),
        );
      }
      _cachedQuality = quality;
      rawSkiaObject = shader;
    }
    return shader;
  }

  @override
  SkShader createDefault() => withQuality(ui.FilterQuality.none);

  @override
  SkShader resurrect() => withQuality(_cachedQuality ?? ui.FilterQuality.none);

  @override
  void delete() {
    rawSkiaObject?.delete();
  }
}
