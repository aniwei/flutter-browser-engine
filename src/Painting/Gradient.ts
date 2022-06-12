import { invariant } from 'ts-invariant'
import { SkiaTextDirection, SkiaTileMode } from '@skia'
import { Color, Offset, Rect, Shader } from '@rendering'
import { lerpDouble, listEquals, Matrix4 } from '@math'
import * as UI from '@rendering'
import { Alignment, AlignmentGeometry } from './Alignment'

function sample (
  colors: Color[], 
  stops: number[], 
  t: number
): Color {
  invariant(colors !== null)
  invariant(colors.length !== 0)
  invariant(stops !== null)
  invariant(stops.length !== 0)
  invariant(t !== null)

  if (t <= stops[0]) {
    return colors[0]
  }

  if (t >= stops[stops.length - 1]) {
    return colors[stops.length -1]
  }

  const index = stops.findIndex((s: number) => s <= t)
  invariant(index !== -1)

  return Color.lerp(
    colors[index], 
    colors[index + 1],
    (t - stops[index]) / (stops[index + 1] - stops[index]),
  )!
}

function interpolateColorsAndStops (
  aColors: Color[],
  aStops: number[],
  bColors: Color[],
  bStops: number[],
  t: number,
): ColorsAndStops {
  invariant(aColors.length >= 2)
  invariant(bColors.length >= 2)
  invariant(aStops.length === aColors.length)
  invariant(bStops.length === bColors.length)

  const stops = new Set<number>([...aStops, ...bStops])
  const interpolatedStops: number[] = Array.from(stops).sort()
  // @TODO
  const interpolatedColors: Color[] = interpolatedStops.map<Color>((stop: number) => {
    return Color.lerp(
      sample(aColors, aStops, stop), 
      sample(bColors, bStops, stop), 
      t
    )!
  })
  
  return new ColorsAndStops(
    interpolatedColors, 
    interpolatedStops
  )
}


export class ColorsAndStops {
  public colors: Color[]
  public stops: number[]
  
  constructor(
    colors: Color[], 
    stops: number[]
  ) {
    this.colors = colors
    this.stops = stops
  }
}

export abstract class GradientTransform {
  abstract transform (
    bounds: Rect, 
    textDirection?: SkiaTextDirection | null
  ): Matrix4 | null
}

export class GradientRotation extends GradientTransform {
  
  public radians: number
  constructor (radians: number) {
    super()
    this.radians = radians
  }

  transform (
    bounds: Rect, 
    textDirection?: SkiaTextDirection | null
  ): Matrix4 {
    invariant(bounds !== null)

    const sinRadians: number = Math.sin(this.radians)
    const oneMinusCosRadians: number = 1 - Math.cos(this.radians)
    const center: Offset = bounds.center
    const originX: number = sinRadians * center.dy + oneMinusCosRadians * center.dx
    const originY: number = -sinRadians * center.dx + oneMinusCosRadians * center.dy

    const matrix = Matrix4.identity()
    matrix.translate(originX, originY)
    matrix.rotateZ(this.radians)

    return matrix
  }

  isEqual (other: GradientRotation) {
    if (other === this) {
      return true
    }

    return (
      other instanceof GradientRotation
      && other.radians === this.radians
    )
  }

  toString () {
    return ``
  }
}

export abstract class Gradient {
  static lerp (
    a: Gradient | null, 
    b: Gradient | null, 
    t: number
  ): Gradient | null {
    invariant(t !== null)

    let result
    if (b !== null) {
      result = b.lerpFrom(a, t)
    }
    if (result === null && a !== null) {
      result = a.lerpTo(b, t)
    }
    if (result !== null) {
      return result
    }
    if (a === null && b === null) {
      return null
    }
    
    invariant(a !== null && b !== null)

    return t < 0.5 ? 
      a!.scale(1.0 - (t * 2.0)) : 
      b!.scale((t - 0.5) * 2.0)
  }

  public colors: Color[]
  public stops: number[] | null
  public transform: GradientTransform | null
  
  constructor (
    colors,
    stops: number[] | null,
    transform: GradientTransform | null
  ) {
    this.colors = colors
    this.stops = stops
    this.transform = transform
  }

  impliedStops (): number[] {
    if (this.stops !== null) {
      return this.stops!
    }

    invariant(this.colors.length >= 2, 'colors list must have at least two colors')
    const separation = 1.0 / (this.colors.length - 1)

    const array: number[] = []

    for (let i = 0; i< this.colors.length; i++) {
      array.push(i * separation)
    }

    return array
  }

  
  abstract createShader (
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ): Shader 

  
  abstract scale (factor: number): Gradient

  
  lerpFrom (a: Gradient | null, t: number): Gradient | null {
    if (a === null) {
      return this.scale(t)
    }
    return null
  }

  lerpTo (
    b: Gradient | null, 
    t: number
  ): Gradient | null {
    if (b === null) {
      return this.scale(1.0 - t)
    }
    return null
  }

  resolveTransform (
    bounds: Rect, 
    textDirection?: SkiaTextDirection | null
  ): Float64Array | null {
    return this.transform?.transform(
      bounds, 
      textDirection
    )?.toFloat64() as Float64Array
  }
}

export type LinearGradientInitOptions = {
  begin?: AlignmentGeometry | null,
  end?: AlignmentGeometry | null,
  colors: Color[],
  stops: number[] | null,
  tileMode: SkiaTileMode,
  transform: GradientTransform | null
}

export class LinearGradient extends Gradient {

  public begin: AlignmentGeometry
  public end: AlignmentGeometry
  public tileMode: SkiaTileMode

  constructor (options: LinearGradientInitOptions) {
    options.begin = options.begin ?? Alignment.centerLeft
    options.end = options.end ?? Alignment.centerRight

    invariant(options.begin !== null)
    invariant(options.end !== null)
    invariant(options.tileMode !== null)

    super(
      options.colors,
      options.stops,
      options.transform
    )

    this.begin = options.begin
    this.end = options.end
    this.tileMode = options.tileMode
  }

  createShader (
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ): Shader {
    return UI.Gradient.linear(
      this.begin.resolve(textDirection).withinRect(rect),
      this.end.resolve(textDirection).withinRect(rect),
      this.colors, 
      this.impliedStops(), 
      this.tileMode, 
      this.resolveTransform(rect, textDirection),
    );
  }

  scale (factor: number): LinearGradient {
    return new LinearGradient({
      begin: this.begin,
      end: this.end,
      colors: this.colors.map<Color>((color) => Color.lerp(null, color, factor)!),
      stops: this.stops,
      tileMode: this.tileMode,
      transform: this.transform
    })
  }

  lerpFrom (
    a: Gradient | null, 
    t: number
  ): Gradient | null {
    if (a == null || (a instanceof LinearGradient)) {
      return LinearGradient.lerp(a as LinearGradient, this, t)
    }

    return super.lerpFrom(a, t)
  }

  lerpTo (
    b: Gradient | null, 
    t: number
  ): Gradient | null {
    if (b === null || (b instanceof LinearGradient)) {
      return LinearGradient.lerp(this, b as LinearGradient, t)
    }

    return super.lerpTo(b, t)
  }

  static lerp (
    a: LinearGradient | null, 
    b: LinearGradient | null, 
    t: number
  ): LinearGradient | null {
    invariant(t !== null);
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b!.scale(t)
    }
    if (b === null) {
      return a.scale(1.0 - t);
    }
    const interpolated: ColorsAndStops = interpolateColorsAndStops(
      a.colors,
      a.impliedStops(),
      b.colors,
      b.impliedStops(),
      t,
    )
    
    return new LinearGradient({
      begin: AlignmentGeometry.lerp(a.begin, b.begin, t)!,
      end: AlignmentGeometry.lerp(a.end, b.end, t)!,
      colors: interpolated.colors,
      stops: interpolated.stops,
      tileMode: t < 0.5 ? a.tileMode : b.tileMode, // TODO(ianh): interpolate tile mode
      transform: null
    })
  }

  isEqual (other: LinearGradient) {
    if (this === other) {
      return true
    }
    
    return (
      other instanceof LinearGradient &&
      other.begin === this.begin &&
      other.end === this.end &&
      other.tileMode === this.tileMode &&
      other.transform === this.transform &&
      listEquals<Color>(other.colors, this.colors) &&
      listEquals<number>(other.stops, this.stops) 
    )
  }

  toString () {
    return ``
  }
}

export type RadialGradientInitOptions = {
  center: AlignmentGeometry | null,
  radius: number | null,
  colors: Color[] | null,
  stops: number[] | null,
  tileMode: SkiaTileMode | null,
  focal,
  focalRadius: number | null,
  transform: GradientTransform | null
}

export class RadialGradient extends Gradient {
  static lerp (
    a: RadialGradient | null, 
    b: RadialGradient | null, 
    t: number
  ): RadialGradient | null {
    invariant(t !== null);
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b!.scale(t)
    }
    if (b === null) {
      return a.scale(1.0 - t)
    }
    const interpolated = interpolateColorsAndStops(
      a.colors,
      a.impliedStops(),
      b.colors,
      b.impliedStops(),
      t,
    )

    return new RadialGradient({
      center: AlignmentGeometry.lerp(a.center, b.center, t)!,
      radius: Math.max(0.0, lerpDouble(a.radius, b.radius, t)!),
      colors: interpolated.colors,
      stops: interpolated.stops,
      tileMode: t < 0.5 ? a.tileMode : b.tileMode, // TODO(ianh): interpolate tile mode
      focal: AlignmentGeometry.lerp(a.focal, b.focal, t),
      focalRadius: Math.max(0.0, lerpDouble(a.focalRadius, b.focalRadius, t)!),
      transform: null
    })
  }

  public center: AlignmentGeometry
  public radius: number
  public tileMode: SkiaTileMode
  public focal: AlignmentGeometry
  public focalRadius: number

  constructor (options: RadialGradientInitOptions) {
    invariant(options.center !== null)
    invariant(options.radius !== null)
    invariant(options.tileMode !== null)
    invariant(options.focalRadius !== null)
    super(options.colors, options.stops, options.transform);

    this.center = options.center
    this.radius = options.radius
    this.tileMode = options.tileMode
    this.focal = options.focal
    this.focalRadius = options.focalRadius
  }
  

  createShader (
    rect: Rect, 
    textDirection: SkiaTextDirection
  ) {
    return UI.Gradient.radial(
      this.center.resolve(textDirection).withinRect(rect),
      this.radius * rect.shortestSide,
      this.colors, 
      this.impliedStops(), 
      this.tileMode,
      this.resolveTransform(rect, textDirection),
      this.focal === null  ? null : this.focal!.resolve(textDirection).withinRect(rect),
      this.focalRadius * rect.shortestSide,
    )
  }
  
  scale (factor: number): RadialGradient {
    return new RadialGradient({
      center: this.center,
      radius: this.radius,
      colors: this.colors.map<Color>((color) => Color.lerp(null, color, factor)!),
      stops: this.stops,
      tileMode: this.tileMode,
      focal: this.focal,
      focalRadius: this.focalRadius,
      transform: null
    })
  }

  lerpFrom (a: Gradient | null, t: number): Gradient | null {
    if (a === null || (a instanceof RadialGradient)) {
      return RadialGradient.lerp(a as RadialGradient, this, t);
    }
    return super.lerpFrom(a, t);
  }

  lerpTo (
    b: Gradient | null, 
    t: number
  ): Gradient | null {
    if (b === null || (b instanceof RadialGradient)) {
      return RadialGradient.lerp(this, b as RadialGradient, t);
    }

    return super.lerpTo(b, t);
  }

  isEqual (other: RadialGradient) {
    if (other === this) {
      return true
    }

    return (
      other instanceof RadialGradient &&
      other.radius === this.radius &&
      other.tileMode === this.tileMode &&
      other.transform === this.transform &&
      other.focalRadius === this.focalRadius &&
      other.center.isEqual(this.center) &&
      other.focal.isEqual(this.focal) &&
      listEquals<Color>(other.colors, this.colors) &&
      listEquals<number>(other.stops, this.stops) 
    )
  }

  toString () {
    return ``
  }
}

export type SweepGradientInitOptions = {
  center: AlignmentGeometry,
  startAngle: number,
  endAngle: number,
  colors: Color[],
  stops: number[] | null,
  tileMode: SkiaTileMode,
  transform: GradientTransform | null
}

export class SweepGradient extends Gradient {
  static lerp (
    a: SweepGradient | null, 
    b: SweepGradient | null, 
    t: number
  ): SweepGradient | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }

    if (a === null) {
      return b!.scale(t)
    }

    if (b === null) {
      return a.scale(1.0 - t)
    }

    const interpolated = interpolateColorsAndStops(
      a.colors,
      a.impliedStops(),
      b.colors,
      b.impliedStops(),
      t,
    )

    return new SweepGradient({
      center: AlignmentGeometry.lerp(a.center, b.center, t)!,
      startAngle: Math.max(0.0, lerpDouble(a.startAngle, b.startAngle, t)!),
      endAngle: Math.max(0.0, lerpDouble(a.endAngle, b.endAngle, t)!),
      colors: interpolated.colors,
      stops: interpolated.stops,
      tileMode: t < 0.5 ? a.tileMode : b.tileMode,
      transform: null
    })
  }

  public center: AlignmentGeometry
  public startAngle: number
  public endAngle: number
  public tileMode: SkiaTileMode

  constructor (options: SweepGradientInitOptions) {
    options.center = options.center ?? Alignment.center
    options.startAngle = options.startAngle ?? 0.0
    options.endAngle =options.endAngle ?? Math.PI * 2
    
    super(options.colors, options.stops, options.transform)

    this.center = options.center
    this.startAngle = options.startAngle
    this.endAngle = options.endAngle
    this.tileMode = options.tileMode
  }

  createShader (
    rect: Rect, 
    textDirection: SkiaTextDirection
  ): Shader {
    return UI.Gradient.sweep(
      this.center.resolve(textDirection).withinRect(rect),
      this.colors, 
      this.impliedStops(), 
      this.tileMode,
      this.startAngle,
      this.endAngle,
      this.resolveTransform(rect, textDirection),
    )
  }

  scale (factor: number): SweepGradient {
    return new SweepGradient({
      center: this.center,
      startAngle: this.startAngle,
      endAngle: this.endAngle,
      colors: this.colors.map<Color>((color) => Color.lerp(null, color, factor)!),
      stops: this.stops,
      tileMode: this.tileMode,
      transform: null
    })
  }

  lerpFrom (
    a: Gradient | null, 
    t: number
  ): Gradient | null {
    if (a === null || (a instanceof SweepGradient)) {
      return SweepGradient.lerp(a as SweepGradient, this, t)
    }
    
    return super.lerpFrom(a, t)
  }

  lerpTo (
    b: Gradient | null, 
    t: number
  ): Gradient | null {
    if (b === null || (b instanceof SweepGradient)) {
      return SweepGradient.lerp(this, b as SweepGradient, t)
    }

    return super.lerpTo(b, t)
  }

  isEqual (other) {
    if (other === this) {
      return true
    }
    
    return (
      other instanceof SweepGradient &&
      other.center === this.center &&
      other.startAngle === this.startAngle &&
      other.endAngle === this.endAngle &&
      other.tileMode === this.tileMode &&
      other.transform === this.transform &&
      listEquals<Color>(other.colors, this.colors) &&
      listEquals<number>(other.stops, this.stops)
    )
  }

  toString () {
    return ``
  }
}
