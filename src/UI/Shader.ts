import invariant from 'ts-invariant'
import { Skia, SkiaImage, ManagedSkiaObject, SkiaFilterQuality, SkiaShader, SkiaTileMode, toFlatColors, toSkiaColorStops, toSkiaMatrixFromFloat32, matrix4IsValid, toSkiaPoint, offsetIsValid, toSkiaMatrixFromFloat64, toSkiaFilterQuality, toSkiaMipmapMode } from '@Skia'
import { Offset } from './Geometry'
import { Color } from './Painting'
import { Image } from './Image'


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
      options.center.dy,
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrixFromFloat32(options.matrix4!) : null,
      0,
      toDegrees * options.startAngle,
      toDegrees * options.endAngle,
    );

    return new GradientSweep(
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

  resurrect () {
    const toDegrees = 180.0 / Math.PI
    const skia =  Skia.Shader.MakeSweepGradient(
      this.center.dx,
      this.center.dy,
      toFlatColors(this.colors),
      toSkiaColorStops(this.colorStops),
      this.tileMode,
      this.matrix4 !== null ? toSkiaMatrixFromFloat32(this.matrix4!) : null,
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

export class GradientLinear extends Shader {
  static malloc(options: GradientLinearInitOptions) {
    Skia.Shader.MakeLinearGradient(
      toSkiaPoint(options.from),
      toSkiaPoint(options.to),
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrixFromFloat32(options.matrix4!) : undefined,
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
      toSkiaPoint(this.from),
      toSkiaPoint(this.to),
      toFlatColors(this.colors),
      toSkiaColorStops(this.colorStops),
      this.tileMode,
      this.matrix4 != null ? toSkiaMatrixFromFloat32(this.matrix4!) : undefined,
    )
  }
}

export type GradientRadialInitOptions = {
  center: Offset 
  radius: number
  colors: Color[]
  colorStops: number[] | null
  tileMode: SkiaTileMode
  matrix4: Float32Array | null
}

export class GradientRadial extends Shader {
  static malloc (options: GradientRadialInitOptions) {
    const skia = Skia.Shader.MakeRadialGradient(
      toSkiaPoint(options.center),
      options.radius,
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrixFromFloat32(options.matrix4!) : undefined,
      0,
    )

    return new GradientRadial(
      skia,
      options.center,
      options.radius,
      options.colors,
      options.colorStops,
      options.tileMode,
      options.matrix4,
    )
  }

  public center: Offset 
  public radius: number
  public colors: Color[]
  public colorStops: number[] | null
  public tileMode: SkiaTileMode
  public matrix4: Float32Array | null

  constructor (
    skia: SkiaShader,
    center: Offset,
    radius: number,
    colors: Color[],
    colorStops: number[] | null,
    tileMode: SkiaTileMode,
    matrix4: Float32Array | null,
  ) {
    super(skia)

    this.center = center
    this.radius = radius
    this.colors = colors
    this.colorStops = colorStops
    this.tileMode = tileMode
    this.matrix4 = matrix4
  }

  resurrect () {
    return Skia.Shader.MakeRadialGradient(
      toSkiaPoint(this.center),
      this.radius,
      toFlatColors(this.colors),
      toSkiaColorStops(this.colorStops),
      this.tileMode,
      this.matrix4 !== null ? toSkiaMatrixFromFloat32(this.matrix4!) : undefined,
      0,
    )
  }
}

export type GradientConicalInitOptions = {
  focal: Offset
  focalRadius: number
  center: Offset 
  radius: number
  colors: Color[]
  colorStops: number[] | null
  tileMode: SkiaTileMode
  matrix4: Float32Array | null
}

export class GradientConical extends Shader {
  static malloc (options: GradientConicalInitOptions) {
    const skia = Skia.Shader.MakeTwoPointConicalGradient(
      toSkiaPoint(options.focal),
      options.focalRadius,
      toSkiaPoint(options.center),
      options.radius,
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrixFromFloat32(options.matrix4!) : undefined,
      0,
    )

    return new GradientConical(
      skia,
      options.focal,
      options.focalRadius,
      options.center,
      options.radius,
      options.colors,
      options.colorStops,
      options.tileMode,
      options.matrix4,
    )
  }

  public focal: Offset
  public focalRadius: number
  public center: Offset 
  public radius: number
  public colors: Color[]
  public colorStops: number[] | null
  public tileMode: SkiaTileMode
  public matrix4: Float32Array | null
  

  constructor (
    skia: SkiaShader,
    focal: Offset, 
    focalRadius: number, 
    center: Offset , 
    radius: number, 
    colors: Color[], 
    colorStops: number[] | null, 
    tileMode: SkiaTileMode, 
    matrix4: Float32Array | null, 
  ) {
    super(skia)

    this.focal = focal
    this.focalRadius = focalRadius
    this.center = center
    this.radius = radius
    this.colors = colors
    this.colorStops = colorStops
    this.tileMode = tileMode
    this.matrix4 = matrix4
  }

  resurrect () {
    return Skia.Shader.MakeTwoPointConicalGradient(
      toSkiaPoint(this.focal),
      this.focalRadius,
      toSkiaPoint(this.center),
      this.radius,
      toFlatColors(this.colors),
      toSkiaColorStops(this.colorStops),
      this.tileMode,
      this.matrix4 !== null ? toSkiaMatrixFromFloat32(this.matrix4!) : undefined,
      0,
    )
  }
}

export type ImageShaderInitOptions = {
  image: Image,
  tileModeX: SkiaTileMode
  tileModeY: SkiaTileMode
  matrix4: Float64Array | null
  filterQuality: SkiaFilterQuality
}

export class ImageShader extends Shader {
  static malloc (options: ImageShaderInitOptions) {

    return new ImageShader(
      options.image,
      options.tileModeX,
      options.tileModeY,
      options.matrix4,
      options.filterQuality
    )
  }
  public tileModeX: SkiaTileMode
  public tileModeY: SkiaTileMode
  public matrix4: Float64Array | null
  public filterQuality: SkiaFilterQuality
  public image: Image
  public cachedQuality: SkiaFilterQuality | null

  constructor (
    image: Image, 
    tileModeX: SkiaTileMode, 
    tileModeY: SkiaTileMode, 
    matrix4: Float64Array | null,
    filterQuality: SkiaFilterQuality
  ) {
    super(image.skia)

    this.image = image
    this.tileModeX = tileModeX
    this.tileModeY = tileModeY
    this.matrix4 = matrix4
    this.filterQuality = filterQuality
    this.cachedQuality = null
  }
  
  withQuality (contextualQuality: SkiaFilterQuality) {
    const quality = this.filterQuality ?? contextualQuality
    let shader = this.skia
    
    if (
      this.cachedQuality !== quality || 
      shader === null
    ) {
      if (quality === SkiaFilterQuality.High) {
        shader = this.image.skia.makeShaderCubic(
          this.tileModeX,
          this.tileModeY,
          1.0 / 3.0,
          1.0 / 3.0,
          toSkiaMatrixFromFloat64(this.matrix4!),
        );
      } else {
        shader = this.image.skia.makeShaderOptions(
          this.tileModeX,
          this.tileModeY,
          toSkiaFilterQuality(quality),
          toSkiaMipmapMode(quality),
          toSkiaMatrixFromFloat64(this.matrix4!),
        );
      }
      this.cachedQuality = quality
      this.skia = shader
    }

    return shader
  }

  resurrect () {
    return this.withQuality(this.cachedQuality ?? SkiaFilterQuality.None)
  } 

  
  delete () {
    this.skia?.delete();
  }
}
