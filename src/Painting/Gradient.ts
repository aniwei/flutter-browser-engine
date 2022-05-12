import invariant from 'ts-invariant'
import { Skia } from '@Skia'
import { Color, Offset, Rect } from '@UI'
import { TextDirection, TileMode } from 'canvaskit-wasm'
import { lerpDouble, listEquals } from '@Math'
import { Alignment, AlignmentGeometry } from './Alignment'

function sample(
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

  const index = stops.lastIndexWhere((double s) => s <= t);
  invariant(index !== -1)

  return Color.lerp(
    colors[index], colors[index + 1],
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
  const interpolatedColors: Color[] = interpolatedStops.map<Color>(
          (double stop) => Color.lerp(_sample(aColors, aStops, stop), _sample(bColors, bStops, stop), t)!,
  ).toList(growable: false);
  
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
    textDirection: TextDirection | null
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
    textDirection: TextDirection | null
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
    
    return List<double>.generate(
      colors.length,
      (int index) => index * separation,
      growable: false,
    );
  }

  
  abstract createShader (
    rect: Rect, 
    textDirection: TextDirection | null
  ): CkShader 

  
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
    textDirection: TextDirection | null
  ): Float64Array | null {
    return this.transform?.transform(bounds, textDirection)?.storage
  }
}

export class LinearGradient extends Gradient {

  public begin: AlignmentGeometry
  public end: AlignmentGeometry
  public tileMode: TileMode

  constructor (
    begin: Alignment = Alignment.centerLeft,
    end: Alignment = Alignment.centerRight,
    colors: Color[],
    stops: number[] | null,
    tileMode: TileMode = Skia.TileMode.Clamp,
    transform: GradientTransform | null
  ) {
    invariant(begin !== null)
    invariant(end !== null)
    invariant(tileMode !== null)

    super(
      colors,
      stops,
      transform
    )

    this.begin = begin
    this.end = end
    this.tileMode = tileMode
  }

  createShader (
    rect: Rect, 
    textDirection: TextDirection | null
  ): CkShader {
    return ui.Gradient.linear(
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
      this.colors.map<Color>((color) => Color.lerp(null, color, factor)!).toList(),
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

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  static LinearGradient? lerp(LinearGradient? a, LinearGradient? b, double t) {
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
    return LinearGradient(
      begin: AlignmentGeometry.lerp(a.begin, b.begin, t)!,
      end: AlignmentGeometry.lerp(a.end, b.end, t)!,
      colors: interpolated.colors,
      stops: interpolated.stops,
      tileMode: t < 0.5 ? a.tileMode : b.tileMode, // TODO(ianh): interpolate tile mode
    );
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other))
      return true;
    if (other.runtimeType != runtimeType)
      return false;
    return other is LinearGradient
        && other.begin == begin
        && other.end == end
        && other.tileMode == tileMode
        && other.transform == transform
        && listEquals<Color>(other.colors, colors)
        && listEquals<double>(other.stops, stops);
  }

  @override
  int get hashCode => hashValues(begin, end, tileMode, transform, hashList(colors), hashList(stops));

  @override
  String toString() {
    final List<String> description = <String>[
      'begin: $begin',
      'end: $end',
      'colors: $colors',
      if (stops != null) 'stops: $stops',
      'tileMode: $tileMode',
      if (transform != null) 'transform: $transform',
    ];

    return '${objectRuntimeType(this, 'LinearGradient')}(${description.join(', ')})';
  }
}


export class RadialGradient extends Gradient {
  public center: AlignmentGeometry
  public radius: number
  public tileMode: TileMode
  public focal: AlignmentGeometry
  public focalRadius: number

  constructor (
    center = Alignment.center,
    radius = 0.5,
    colors: Color[],
    stops: number[],
    tileMode = TileMode.Clamp,
    focal,
    focalRadius = 0.0,
    transform: GradientTransform | null,
  }) : assert(center != null),
       assert(radius != null),
       assert(tileMode != null),
       assert(focalRadius != null),
       super(colors: colors, stops: stops, transform: transform);

  
  

  @override
  Shader createShader(Rect rect, { TextDirection? textDirection }) {
    return ui.Gradient.radial(
      center.resolve(textDirection).withinRect(rect),
      radius * rect.shortestSide,
      colors, _impliedStops(), tileMode,
      _resolveTransform(rect, textDirection),
      focal == null  ? null : focal!.resolve(textDirection).withinRect(rect),
      focalRadius * rect.shortestSide,
    );
  }

  
  
  
  
  @override
  RadialGradient scale(double factor) {
    return RadialGradient(
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

  @override
  int get hashCode => hashValues(center, radius, tileMode, transform, hashList(colors), hashList(stops), focal, focalRadius);

  @override
  String toString() {
    final List<String> description = <String>[
      'center: $center',
      'radius: ${debugFormatDouble(radius)}',
      'colors: $colors',
      if (stops != null) 'stops: $stops',
      'tileMode: $tileMode',
      if (focal != null) 'focal: $focal',
      'focalRadius: ${debugFormatDouble(focalRadius)}',
      if (transform != null) 'transform: $transform',
    ];

    return '${objectRuntimeType(this, 'RadialGradient')}(${description.join(', ')})';
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
  public tileMode: TileMode

  constructor (
    center: AlignmentGeometry,
    startAngle: number,
    endAngle: number,
    tileMode: TileMode,
  ) {
    super()
    this.center = center
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.tileMode = tileMode
  }

  createShader (
    rect: Rect, 
    textDirection: TextDirection
  ): CkShader {
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
