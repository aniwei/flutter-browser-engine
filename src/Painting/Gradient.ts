import { invariant } from 'ts-invariant'
import { Skia, SkiaTextDirection, SkiaTileMode } from '@Skia'
import { Color, Offset, Rect, Shader, Gradient as UIGradient } from '@UI'
import { lerpDouble, listEquals, Matrix4 } from '@Math'
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
  aColors: [],
  aStops: [],
  bColors: [],
  bStops: [],
  t: number,
): ColorsAndStops {
  invariant(aColors.length >= 2)
  invariant(bColors.length >= 2)
  invariant(aStops.length === aColors.length)
  invariant(bStops.length === bColors.length)

  const stops = new SplayTreeSet<number>()
  stops.addAll(aStops)
  stops.addAll(bStops)

  const interpolatedStops: number[] = stops.toList(false)
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
  begin: Alignment = Alignment.centerLeft,
  end: Alignment = Alignment.centerRight,
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
    return UIGradient.linear(
      this.begin.resolve(textDirection).withinRect(rect),
      this.end.resolve(textDirection).withinRect(rect),
      this.colors, 
      this.impliedStops(), 
      this.tileMode, 
      this.resolveTransform(rect, textDirection),
    );
  }

  scale (factor: number): LinearGradient {
    return new LinearGradient(
      this.begin,
      this.end,
      this.colors.map<Color>((color) => Color.lerp(null, color, factor)!),
      this.stops,
      this.tileMode,
      this.transform
    );
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
        a._impliedStops(),
        b.colors,
        b._impliedStops(),
        t,
    )
    
    return LinearGradient(
      begin: AlignmentGeometry.lerp(a.begin, b.begin, t)!,
      end: AlignmentGeometry.lerp(a.end, b.end, t)!,
      colors: interpolated.colors,
      stops: interpolated.stops,
      tileMode: t < 0.5 ? a.tileMode : b.tileMode, // TODO(ianh): interpolate tile mode
    );
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
  center?: AlignmentGeometry | null,
  radius?: number | null,
  colors?: Color[] | null,
  stops?: number[] | null,
  tileMode?: SkiaTileMode | null,
  focal?,
  focalRadius?: number | null,
  transform?: GradientTransform | null
}


export class RadialGradient extends Gradient {
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
    super(colors, stops, transform);

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
    return UIGradient.radial({
      this.center.resolve(textDirection).withinRect(rect),
      this.radius * rect.shortestSide,
      colors, _impliedStops(), tileMode,
      _resolveTransform(rect, textDirection),
      focal == null  ? null : focal!.resolve(textDirection).withinRect(rect),
      focalRadius * rect.shortestSide,
    })
  }
  
  scale (factor: number): RadialGradient {
    return new RadialGradient(
      center: center,
      radius: radius,
      colors: colors.map<Color>((Color color) => Color.lerp(null, color, factor)!).toList(),
      stops: stops,
      tileMode: tileMode,
      focal: focal,
      focalRadius: focalRadius,
    );
  }

  @override
  Gradient? lerpFrom(Gradient? a, double t) {
    if (a == null || (a is RadialGradient))
      return RadialGradient.lerp(a as RadialGradient?, this, t);
    return super.lerpFrom(a, t);
  }

  @override
  Gradient? lerpTo(Gradient? b, double t) {
    if (b == null || (b is RadialGradient))
      return RadialGradient.lerp(this, b as RadialGradient?, t);
    return super.lerpTo(b, t);
  }
  
  static RadialGradient? lerp(RadialGradient? a, RadialGradient? b, double t) {
    assert(t != null);
    if (a == null && b == null)
      return null;
    if (a == null)
      return b!.scale(t);
    if (b == null)
      return a.scale(1.0 - t);
    final ColorsAndStops interpolated = _interpolateColorsAndStops(
        a.colors,
        a._impliedStops(),
        b.colors,
        b._impliedStops(),
        t,
    );
    return RadialGradient(
      center: AlignmentGeometry.lerp(a.center, b.center, t)!,
      radius: math.max(0.0, ui.lerpDouble(a.radius, b.radius, t)!),
      colors: interpolated.colors,
      stops: interpolated.stops,
      tileMode: t < 0.5 ? a.tileMode : b.tileMode, // TODO(ianh): interpolate tile mode
      focal: AlignmentGeometry.lerp(a.focal, b.focal, t),
      focalRadius: math.max(0.0, ui.lerpDouble(a.focalRadius, b.focalRadius, t)!),
    );
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other))
      return true;
    if (other.runtimeType != runtimeType)
      return false;
    return other is RadialGradient
        && other.center == center
        && other.radius == radius
        && other.tileMode == tileMode
        && other.transform == transform
        && listEquals<Color>(other.colors, colors)
        && listEquals<double>(other.stops, stops)
        && other.focal == focal
        && other.focalRadius == focalRadius;
  }

  toString () {
    return ``
  }
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
      a._impliedStops(),
      b.colors,
      b._impliedStops(),
      t,
    )

    return new SweepGradient(
      AlignmentGeometry.lerp(a.center, b.center, t)!,
      Math.max(0.0, lerpDouble(a.startAngle, b.startAngle, t)!),
      Math.max(0.0, lerpDouble(a.endAngle, b.endAngle, t)!),
      interpolated.colors,
      interpolated.stops,
      t < 0.5 ? a.tileMode : b.tileMode,
    );
  }

  public center: AlignmentGeometry
  public startAngle: number
  public endAngle: number
  public tileMode: SkiaTileMode

  constructor (
    center: AlignmentGeometry,
    startAngle: number,
    endAngle: number,
    tileMode: SkiaTileMode,
  ) {
    super()
    this.center = center
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.tileMode = tileMode
  }

  createShader (
    rect: Rect, 
    textDirection: SkiaTextDirection
  ): Shader {
    return ui.Gradient.sweep(
      center.resolve(textDirection).withinRect(rect),
      colors, this.impliedStops(), 
      tileMode,
      startAngle,
      endAngle,
      _resolveTransform(rect, textDirection),
    );
  }

  scale (factor: number): SweepGradient {
    return new SweepGradient(
      this.center,
      this.startAngle,
      this.endAngle,
      this.colors.map<Color>((color) => Color.lerp(null, color, factor)!),
      this.stops,
      this.tileMode,
    )
  }

  lerpFrom (
    a: Gradient | null, 
    t: number
  ): Gradient | null {
    if (a === null || (a instanceof SweepGradient)) {
      return SweepGradient.lerp(a as SweepGradient?, this, t)
    }
    
    return super.lerpFrom(a, t)
  }

  lerpTo (
    b: Gradient | null, 
    t: number
  ): Gradient | null {
    if (b === null || (b instanceof SweepGradient)) {
      return SweepGradient.lerp(this, b as SweepGradient?, t)
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
