import { invariant } from 'ts-invariant'
import { Offset } from '@internal/Geometry'
import { FilterQuality, IShader, TileMode } from '@skia'
import { Skia } from '@skia/binding'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { Color } from '@internal/Color'
import { toFlatColors, toSkiaColorStops, toSkiaMatrixFromFloat32, matrix4IsValid, toSkiaPoint, offsetIsValid, toSkiaMatrixFromFloat64, toSkiaMipmapMode, toSkiaFilterMode, toMatrix32 } from '@skia/SkiaFormat'
import { Image } from './Image'
import { toSkiaMatrix } from '@helper/skia'


export abstract class Shader extends ManagedSkiaObject<IShader> {
  withQuality (contextualQuality: FilterQuality) {
    return this.skia
  }
}

export type GradientSweepOptions = {
  center: Offset, 
  tileMode: TileMode,
  startAngle: number, 
  endAngle: number, 
  colors: Color[], 
  colorStops: number[] | null, 
  matrix4: Float64Array | null
}

export class GradientSweep extends Shader {
  public center: Offset
  public colors: Color[]
  public tileMode: TileMode
  public endAngle: number
  public startAngle: number
  public colorStops: number[] | null
  public matrix4: Float64Array | null

  constructor (options: GradientSweepOptions) {
    invariant(options.colors != null)
    invariant(options.tileMode != null)
    invariant(options.startAngle != null)
    invariant(options.endAngle != null)
    invariant(options.startAngle < options.endAngle),
    invariant(options.matrix4 == null || matrix4IsValid(options.matrix4))

    const degrees = 180.0 / Math.PI
    const skia = Skia.binding.Shader.MakeSweepGradient(
      options.center.dx,
      options.center.dy,
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrix(options.matrix4!) : null,
      0,
      degrees * options.startAngle,
      degrees * options.endAngle,
    )

    super(skia)

    this.center = options.center
    this.colors = options.colors
    this.colorStops = options.colorStops
    this.tileMode = options.tileMode
    this.startAngle = options.startAngle
    this.endAngle = options.endAngle
    this.matrix4 = options.matrix4
  }  

  resurrect () {
    const degrees = 180.0 / Math.PI
    const skia =  Skia.binding.Shader.MakeSweepGradient(
      this.center.dx,
      this.center.dy,
      toFlatColors(this.colors),
      toSkiaColorStops(this.colorStops),
      this.tileMode,
      this.matrix4 !== null ? toSkiaMatrix(this.matrix4!) : null,
      0,
      degrees * this.startAngle,
      degrees * this.endAngle,
    )

    return skia
  }
}

export type GradientLinearOptions = {
  from: Offset
  to: Offset
  colors: Color[]
  colorStops: number[] | null
  tileMode: TileMode
  matrix4: Float64Array | null
}

export class GradientLinear extends Shader {
  public to: Offset
  public from: Offset
  public colors: Color[]
  public tileMode: TileMode
  public colorStops: number[] | null
  public matrix4: Float64Array | null

  constructor (options: GradientLinearOptions) {
    invariant(offsetIsValid(options.from))
    invariant(offsetIsValid(options.to))
    invariant(options.colors !== null)
    invariant(options.tileMode !== null)

    const skia = Skia.binding.Shader.MakeLinearGradient(
      toSkiaPoint(options.from),
      toSkiaPoint(options.to),
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrix(options.matrix4!) : undefined,
    )

    super(skia)

    this.to = options.to
    this.from = options.from
    this.colors = options.colors
    this.colorStops = options.colorStops
    this.tileMode = options.tileMode
    this.matrix4 = options.matrix4
  }

  resurrect () {
    return Skia.binding.Shader.MakeLinearGradient(
      toSkiaPoint(this.from),
      toSkiaPoint(this.to),
      toFlatColors(this.colors),
      toSkiaColorStops(this.colorStops),
      this.tileMode,
      this.matrix4 !== null ? toSkiaMatrix(this.matrix4!) : undefined,
    )
  }
}

export type GradientRadialOptions = {
  center: Offset 
  radius: number
  tileMode: TileMode
  colors: Color[]
  colorStops: number[] | null
  matrix4: Float32Array | null
}

export class GradientRadial extends Shader {
  public center: Offset 
  public radius: number
  public tileMode: TileMode
  public colors: Color[]
  public colorStops: number[] | null
  public matrix4: Float32Array | null

  constructor (options: GradientRadialOptions) {
    const skia = Skia.binding.Shader.MakeRadialGradient(
      toSkiaPoint(options.center),
      options.radius,
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrixFromFloat32(options.matrix4!) : undefined,
      0,
    )

    super(skia)

    this.center = options.center
    this.radius = options.radius
    this.tileMode = options.tileMode
    this.matrix4 = options.matrix4
    this.colors = options.colors
    this.colorStops = options.colorStops
  }

  resurrect () {
    return Skia.binding.Shader.MakeRadialGradient(
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

export type GradientConicalOptions = {
  focal: Offset
  focalRadius: number
  center: Offset 
  radius: number
  colors: Color[]
  colorStops: number[] | null
  tileMode: TileMode
  matrix4: Float32Array | null
}

export class GradientConical extends Shader {
  static malloc (options: GradientConicalOptions) {
    const skia = Skia.binding.Shader.MakeTwoPointConicalGradient(
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
  public tileMode: TileMode
  public matrix4: Float32Array | null
  

  constructor (
    skia: Shader,
    focal: Offset, 
    focalRadius: number, 
    center: Offset , 
    radius: number, 
    colors: Color[], 
    colorStops: number[] | null, 
    tileMode: TileMode, 
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
    return Skia.binding.Shader.MakeTwoPointConicalGradient(
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
  tileModeX: TileMode
  tileModeY: TileMode
  filterQuality: FilterQuality
  matrix4: Float64Array | null
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
  public tileModeX: TileMode
  public tileModeY: TileMode
  public matrix4: Float64Array | null
  public filterQuality: FilterQuality
  public image: Image
  public cachedQuality: FilterQuality | null

  constructor (
    image: Image, 
    tileModeX: TileMode, 
    tileModeY: TileMode, 
    matrix4: Float64Array | null,
    filterQuality: FilterQuality
  ) {
    super(image.skia)

    this.image = image
    this.tileModeX = tileModeX
    this.tileModeY = tileModeY
    this.matrix4 = matrix4
    this.filterQuality = filterQuality
    this.cachedQuality = null
  }
  
  withQuality (contextualQuality: FilterQuality) {
    const quality = this.filterQuality ?? contextualQuality
    let shader = this.skia
    
    if (
      this.cachedQuality !== quality || 
      shader === null
    ) {
      if (quality === FilterQuality.High) {
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
          toSkiaFilterMode(quality),
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
    return this.withQuality(this.cachedQuality ?? FilterQuality.None)!
  } 

  
  delete () {
    this.skia?.delete();
  }
}
