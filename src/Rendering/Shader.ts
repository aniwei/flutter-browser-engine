import { invariant } from 'ts-invariant'
import { Skia } from '@skia/binding'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { toFlatColors, toSkiaColorStops, toSkiaFilterMode, toSkiaMatrix, toSkiaMipmapMode, toSkiaPoint } from '@helper/skia'

import { FilterQuality } from '@skia'
import { offsetIsValid, matrix4IsValid } from '@helper/valid'

import type { Offset } from '@internal/Geometry'
import type { IShader, TileMode } from '@skia'
import type { Color } from '@internal/Color'
import type { Image } from './Image'

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

  /**
   * @description: 
   * @param {GradientSweepOptions} options
   * @return {*}
   */  
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

  /**
   * @description: 
   * @return {IShader}
   */  
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

  /**
   * @description: 
   * @param {GradientLinearOptions} options
   * @return {*}
   */  
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
  matrix4: Float64Array | null
}

export class GradientRadial extends Shader {
  public center: Offset 
  public radius: number
  public tileMode: TileMode
  public colors: Color[]
  public colorStops: number[] | null
  public matrix4: Float64Array | null

  /**
   * @description: 
   * @param {GradientRadialOptions} options
   * @return {*}
   */  
  constructor (options: GradientRadialOptions) {
    const skia = Skia.binding.Shader.MakeRadialGradient(
      toSkiaPoint(options.center),
      options.radius,
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrix(options.matrix4!) : undefined,
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
      this.matrix4 !== null ? toSkiaMatrix(this.matrix4!) : undefined,
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
  matrix4: Float64Array | null
}

export class GradientConical extends Shader {
  public focal: Offset
  public focalRadius: number
  public center: Offset 
  public radius: number
  public colors: Color[]
  public colorStops: number[] | null
  public tileMode: TileMode
  public matrix4: Float64Array | null
  

  /**
   * @description: 
   * @param {GradientConicalOptions} options
   * @return {GradientConical}
   */  
  constructor (options: GradientConicalOptions) {
    const skia = Skia.binding.Shader.MakeTwoPointConicalGradient(
      toSkiaPoint(options.focal),
      options.focalRadius,
      toSkiaPoint(options.center),
      options.radius,
      toFlatColors(options.colors),
      toSkiaColorStops(options.colorStops),
      options.tileMode,
      options.matrix4 !== null ? toSkiaMatrix(options.matrix4!) : undefined,
      0,
    )

    super(skia)

    this.focal = options.focal
    this.focalRadius = options.focalRadius
    this.center = options.center
    this.radius = options.radius
    this.colors = options.colors
    this.colorStops = options.colorStops
    this.tileMode = options.tileMode
    this.matrix4 = options.matrix4
  }

  /**
   * @description: 
   * @return {IShader}
   */  
  resurrect () {
    return Skia.binding.Shader.MakeTwoPointConicalGradient(
      toSkiaPoint(this.focal),
      this.focalRadius,
      toSkiaPoint(this.center),
      this.radius,
      toFlatColors(this.colors),
      toSkiaColorStops(this.colorStops),
      this.tileMode,
      this.matrix4 !== null ? toSkiaMatrix(this.matrix4!) : undefined,
      0,
    )
  }
}

export type ImageShaderOptions = {
  image: Image,
  tileModeX: TileMode
  tileModeY: TileMode
  filterQuality: FilterQuality
  matrix4: Float64Array | null
}

export class ImageShader extends Shader {
  
  public tileModeX: TileMode
  public tileModeY: TileMode
  public matrix4: Float64Array | null
  public filterQuality: FilterQuality
  public image: Image
  public cachedQuality: FilterQuality | null = null

  /**
   * @description: 
   * @param {ImageShaderOptions} options
   * @return {ImageShader}
   */  
  constructor (options: ImageShaderOptions) {
    super(options.image.skia)

    this.image = options.image
    this.tileModeX = options.tileModeX
    this.tileModeY = options.tileModeY
    this.matrix4 = options.matrix4
    this.filterQuality = options.filterQuality
  }
  
  /**
   * @description: 
   * @param {FilterQuality} contextualQuality
   * @return {IShader}
   */  
  withQuality (contextualQuality: FilterQuality): IShader {
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
          toSkiaMatrix(this.matrix4!),
        );
      } else {
        shader = this.image.skia.makeShaderOptions(
          this.tileModeX,
          this.tileModeY,
          toSkiaFilterMode(quality),
          toSkiaMipmapMode(quality),
          toSkiaMatrix(this.matrix4!), 
        );
      }
      this.cachedQuality = quality
      this.skia = shader
    }

    return shader
  }

  /**
   * @description: 
   * @return {IShader}
   */  
  resurrect () {
    return this.withQuality(this.cachedQuality ?? FilterQuality.None)!
  } 
}
