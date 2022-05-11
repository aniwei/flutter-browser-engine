import { lerpDouble } from '@UI'
import invariant from 'ts-invariant'

export abstract class AlignmentGeometry {
  static lerp(
    a: AlignmentGeometry | null, 
    b: AlignmentGeometry | null, 
    t: number
  ): AlignmentGeometry | null {
    invariant(t !== null)

    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b ? b.multiply(t) : null
    }

    if (b === null) {
      return a.multiply(1.0 - t)
    }
    if (
      a instanceof Alignment && 
      b instanceof Alignment
    ) {
      return Alignment.lerp(a, b, t)
    }

    if (
      a instanceof AlignmentDirectional && 
      b instanceof AlignmentDirectional
    ) {
      return AlignmentDirectional.lerp(a, b, t)
    }

    return new MixedAlignment(
      lerpDouble(a.x, b.x, t)!,
      lerpDouble(a.start, b.start, t)!,
      lerpDouble(a.y, b.y, t)!,
    )
  }

  abstract x: number
  abstract start: number
  abstract y: number
  
  abstract add (other: AlignmentGeometry)
  abstract substract (other: AlignmentGeometry)
  abstract multiply (other: number) 
  abstract divide (other: number)
  abstract floor ()
  abstract mod ()  

  abstract resolve (direction: TextDirection | null): Alignment 
  
  toString () {
    return ``
  }

  isEqual (other: AlignmentGeometry) {
    return (
      other instanceof AlignmentGeometry &&
      other.x === this.x &&
      other.start === this.start &&
      other.y === this.y
    )
  }
}

export class Alignment extends AlignmentGeometry {
  static topLeft = new Alignment(-1.0, -1.0)
  static topCenter = new Alignment(0.0, -1.0)
  static topRight = new Alignment(1.0, -1.0)
  static centerLeft = new Alignment(-1.0, 0.0)
  static center = new Alignment(0.0, 0.0)
  static centerRight = new Alignment(1.0, 0.0)
  static bottomLeft = new Alignment(-1.0, 1.0)
  static bottomCenter = new Alignment(0.0, 1.0)
  static bottomRight = new Alignment(1.0, 1.0)

  public x: number
  public y: number
  public start: number

  constructor (
    x: number,
    y: number
  ) {
    super()

    this.x = x
    this.y = y
    this.start = 0.0
  }

  substract (other?: Alignment): Alignment {
    if (other === undefined) {
      return new Alignment(
        -this.x,
        -this.y,
      )  
    }

    return new Alignment(
      this.x - other.x,
      this.y - other.y
    )
  }

  add (other: Alignment): Alignment {
    return new Alignment(
      this.x + other.x, 
      this.y + other.y
    )
  }

  divide (other: Alignment): Alignment {
    return new Alignment(
      this.x / other, 
      this.y / other
    )
  }

  multiply (other: number): Alignment {
    return new Alignment(x * other, y * other)
  }

  /// Integer divides the [Alignment] in each dimension by the given factor.
  @override
  Alignment operator ~/(double other) {
    return Alignment((x ~/ other).toDouble(), (y ~/ other).toDouble());
  }

  /// Computes the remainder in each dimension by the given factor.
  @override
  Alignment operator %(double other) {
    return Alignment(x % other, y % other);
  }

  /// Returns the offset that is this fraction in the direction of the given offset.
  Offset alongOffset(Offset other) {
    final double centerX = other.dx / 2.0;
    final double centerY = other.dy / 2.0;
    return Offset(centerX + x * centerX, centerY + y * centerY);
  }

  /// Returns the offset that is this fraction within the given size.
  Offset alongSize(Size other) {
    final double centerX = other.width / 2.0;
    final double centerY = other.height / 2.0;
    return Offset(centerX + x * centerX, centerY + y * centerY);
  }

  /// Returns the point that is this fraction within the given rect.
  Offset withinRect(Rect rect) {
    final double halfWidth = rect.width / 2.0;
    final double halfHeight = rect.height / 2.0;
    return Offset(
      rect.left + halfWidth + x * halfWidth,
      rect.top + halfHeight + y * halfHeight,
    );
  }

  /// Returns a rect of the given size, aligned within given rect as specified
  /// by this alignment.
  ///
  /// For example, a 100×100 size inscribed on a 200×200 rect using
  /// [Alignment.topLeft] would be the 100×100 rect at the top left of
  /// the 200×200 rect.
  Rect inscribe(Size size, Rect rect) {
    final double halfWidthDelta = (rect.width - size.width) / 2.0;
    final double halfHeightDelta = (rect.height - size.height) / 2.0;
    return Rect.fromLTWH(
      rect.left + halfWidthDelta + x * halfWidthDelta,
      rect.top + halfHeightDelta + y * halfHeightDelta,
      size.width,
      size.height,
    );
  }

  /// Linearly interpolate between two [Alignment]s.
  ///
  /// If either is null, this function interpolates from [Alignment.center].
  ///
  /// {@macro dart.ui.shadow.lerp}
  static Alignment? lerp(Alignment? a, Alignment? b, double t) {
    assert(t != null);
    if (a == null && b == null)
      return null;
    if (a == null)
      return Alignment(ui.lerpDouble(0.0, b!.x, t)!, ui.lerpDouble(0.0, b.y, t)!);
    if (b == null)
      return Alignment(ui.lerpDouble(a.x, 0.0, t)!, ui.lerpDouble(a.y, 0.0, t)!);
    return Alignment(ui.lerpDouble(a.x, b.x, t)!, ui.lerpDouble(a.y, b.y, t)!);
  }

  @override
  Alignment resolve(TextDirection? direction) => this;

  static String _stringify(double x, double y) {
    if (x == -1.0 && y == -1.0)
      return 'Alignment.topLeft';
    if (x == 0.0 && y == -1.0)
      return 'Alignment.topCenter';
    if (x == 1.0 && y == -1.0)
      return 'Alignment.topRight';
    if (x == -1.0 && y == 0.0)
      return 'Alignment.centerLeft';
    if (x == 0.0 && y == 0.0)
      return 'Alignment.center';
    if (x == 1.0 && y == 0.0)
      return 'Alignment.centerRight';
    if (x == -1.0 && y == 1.0)
      return 'Alignment.bottomLeft';
    if (x == 0.0 && y == 1.0)
      return 'Alignment.bottomCenter';
    if (x == 1.0 && y == 1.0)
      return 'Alignment.bottomRight';
    return 'Alignment(${x.toStringAsFixed(1)}, '
                     '${y.toStringAsFixed(1)})';
  }

  @override
  String toString() => _stringify(x, y);
}






































class Alignment extends AlignmentGeometry {
  
  
  
  const Alignment(this.x, this.y)
    : assert(x != null),
      assert(y != null);

  
  
  
  
  
  
  
  final double x;

  
  
  
  
  
  
  final double y;

  @override
  double get _x => x;

  @override
  double get _start => 0.0;

  @override
  double get _y => y;

  
  static const Alignment topLeft = Alignment(-1.0, -1.0);

  
  static const Alignment topCenter = Alignment(0.0, -1.0);

  
  static const Alignment topRight = Alignment(1.0, -1.0);

  
  static const Alignment centerLeft = Alignment(-1.0, 0.0);

  
  static const Alignment center = Alignment(0.0, 0.0);

  
  static const Alignment centerRight = Alignment(1.0, 0.0);

  
  static const Alignment bottomLeft = Alignment(-1.0, 1.0);

  
  static const Alignment bottomCenter = Alignment(0.0, 1.0);

  
  static const Alignment bottomRight = Alignment(1.0, 1.0);

  @override
  AlignmentGeometry add(AlignmentGeometry other) {
    if (other is Alignment)
      return this + other;
    return super.add(other);
  }

  
  Alignment operator -(Alignment other) {
    return Alignment(x - other.x, y - other.y);
  }

  
  Alignment operator +(Alignment other) {
    return Alignment(x + other.x, y + other.y);
  }

  
  @override
  Alignment operator -() {
    return Alignment(-x, -y);
  }

  
  @override
  Alignment operator *(double other) {
    return Alignment(x * other, y * other);
  }

  
  @override
  Alignment operator /(double other) {
    return Alignment(x / other, y / other);
  }

  
  @override
  Alignment operator ~/(double other) {
    return Alignment((x ~/ other).toDouble(), (y ~/ other).toDouble());
  }

  
  @override
  Alignment operator %(double other) {
    return Alignment(x % other, y % other);
  }

  
  Offset alongOffset(Offset other) {
    final double centerX = other.dx / 2.0;
    final double centerY = other.dy / 2.0;
    return Offset(centerX + x * centerX, centerY + y * centerY);
  }

  
  Offset alongSize(Size other) {
    final double centerX = other.width / 2.0;
    final double centerY = other.height / 2.0;
    return Offset(centerX + x * centerX, centerY + y * centerY);
  }

  
  Offset withinRect(Rect rect) {
    final double halfWidth = rect.width / 2.0;
    final double halfHeight = rect.height / 2.0;
    return Offset(
      rect.left + halfWidth + x * halfWidth,
      rect.top + halfHeight + y * halfHeight,
    );
  }

  
  
  
  
  
  
  Rect inscribe(Size size, Rect rect) {
    final double halfWidthDelta = (rect.width - size.width) / 2.0;
    final double halfHeightDelta = (rect.height - size.height) / 2.0;
    return Rect.fromLTWH(
      rect.left + halfWidthDelta + x * halfWidthDelta,
      rect.top + halfHeightDelta + y * halfHeightDelta,
      size.width,
      size.height,
    );
  }

  
  
  
  
  
  static Alignment? lerp(Alignment? a, Alignment? b, double t) {
    assert(t != null);
    if (a === null && b === null)
      return null;
    if (a === null)
      return Alignment(ui.lerpDouble(0.0, b!.x, t)!, ui.lerpDouble(0.0, b.y, t)!);
    if (b === null)
      return Alignment(ui.lerpDouble(a.x, 0.0, t)!, ui.lerpDouble(a.y, 0.0, t)!);
    return Alignment(ui.lerpDouble(a.x, b.x, t)!, ui.lerpDouble(a.y, b.y, t)!);
  }

  @override
  Alignment resolve(TextDirection? direction) => this;

  static String _stringify(double x, double y) {
    if (x == -1.0 && y == -1.0)
      return 'Alignment.topLeft';
    if (x == 0.0 && y == -1.0)
      return 'Alignment.topCenter';
    if (x == 1.0 && y == -1.0)
      return 'Alignment.topRight';
    if (x == -1.0 && y == 0.0)
      return 'Alignment.centerLeft';
    if (x == 0.0 && y == 0.0)
      return 'Alignment.center';
    if (x == 1.0 && y == 0.0)
      return 'Alignment.centerRight';
    if (x == -1.0 && y == 1.0)
      return 'Alignment.bottomLeft';
    if (x == 0.0 && y == 1.0)
      return 'Alignment.bottomCenter';
    if (x == 1.0 && y == 1.0)
      return 'Alignment.bottomRight';
    return 'Alignment(${x.toStringAsFixed(1)}, '
                     '${y.toStringAsFixed(1)})';
  }

  @override
  String toString() => _stringify(x, y);
}












class AlignmentDirectional extends AlignmentGeometry {
  static topStart = new AlignmentDirectional(-1.0, -1.0)
  static topCenter = new AlignmentDirectional(0.0, -1.0)
  static topEnd = new AlignmentDirectional(1.0, -1.0)
  static centerStart = new AlignmentDirectional(-1.0, 0.0)
  static center = new AlignmentDirectional(0.0, 0.0)
  static centerEnd = new AlignmentDirectional(1.0, 0.0)
  static bottomStart = new AlignmentDirectional(-1.0, 1.0)
  static bottomCenter = new AlignmentDirectional(0.0, 1.0)
  static bottomEnd = new AlignmentDirectional(1.0, 1.0)

  static lerp (
    a: AlignmentDirectional | null, 
    b: AlignmentDirectional | null, 
    t: number
  ): AlignmentDirectional | null {
    invariant(t !== null)
    
    if (a === null && b === null) {
      return null
    }

    if (a === null) {
      return new AlignmentDirectional(
        lerpDouble(0.0, b!.start, t)!, 
        lerpDouble(0.0, b.y, t)!
      )
    }
    if (b === null) {
      return new AlignmentDirectional(
        lerpDouble(a.start, 0.0, t)!, 
        lerpDouble(a.y, 0.0, t)
      )
    }

    return new AlignmentDirectional(
      lerpDouble(a.start, b.start, t), 
      lerpDouble(a.y, b.y, t)
    );
  }

  

  public start: number
  public y: number
  
  
  constructor (
    start, 
    y
  ) {
    invariant(start !== null)
    invariant(y !== null)

    super()
    this.start = start
    this.y = y
    this.x = 0
  }


  
  add (other: AlignmentGeometry): AlignmentGeometry {
    return AlignmentDirectional(
      this.start + other.start, 
      this.y + other.y
    )
  }

  
  substract (other: AlignmentDirectional): AlignmentGeometry {
    return AlignmentDirectional(start - other.start, y - other.y);
  }

  
   +(other: AlignmentDirectional) {
    return AlignmentDirectional(start + other.start, y + other.y);
  }

  
  @override
   -() {
    return AlignmentDirectional(-start, -y);
  }

  
  @override
   *(double other) {
    return AlignmentDirectional(start * other, y * other);
  }

  
  @override
   /(double other) {
    return AlignmentDirectional(start / other, y / other);
  }

  
  @override
   ~/(double other) {
    return AlignmentDirectional((start ~/ other).toDouble(), (y ~/ other).toDouble());
  }

  
  @override
   %(double other) {
    return AlignmentDirectional(start % other, y % other);
  }
  
  resolve (direction: TextDirection | null): Alignment {
    invariant(direction !== null, 'Cannot resolve $runtimeType without a TextDirection.')

    switch (direction) {
      case TextDirection.Rtl:
        return Alignment(-this.start, this.y)
      case TextDirection.Ltr:
        return Alignment(start, y)
    }
  }

  toString () {
    return ``
  }
}

export class MixedAlignment extends AlignmentGeometry {
  public x: number
  public start: number
  public y: number

  constructor (
    x: number,
    start: number,
    y: number
  ) {
    super()

    this.x = x
    this.start = start
    this.y = y
  }

  substract (): MixedAlignment {
    return MixedAlignment(
      -this.x,
      -this.start,
      -this.y,
    );
  }

  multiply (other: number): MixedAlignment {
    return new MixedAlignment(
      this.x * other,
      this.start * other,
      this.y * other,
    );
  }

  
  divide (other: number): MixedAlignment {
    return new MixedAlignment(
      this.x / other,
      this.start / other,
      this.y / other,
    )
  }

  
  floor (other: number): MixedAlignment  {
    return new MixedAlignment(
      Math.floor(this.x / other),
      Math.floor(this.start / other),
      Math.floor(this.y / other),
    );
  }

  
  mod (other: number): MixedAlignment  {
    return new MixedAlignment(
      this.x % other,
      this.start % other,
      this.y % other,
    );
  }

  resolve (direction: TextDirection | null): Alignment {
    invariant(direction !== null, 'Cannot resolve $runtimeType without a TextDirection.')
    
    switch (direction!) {
      case TextDirection.Rtl:
        return Alignment(this.x - this.start, this.y)
      case TextDirection.Ltr:
        return Alignment(this.x + this.start, this.y)
    }
  }
}

export class TextAlignVertical {
  public y: number

  constructor (y: number) {
    invariant(y !== null)
    invariant(y >= -1.0 && y <= 1.0)
    this.y = y
  }
  
  static top = new TextAlignVertical(-1.0)
  static center = new TextAlignVertical(0.0)
  static bottom = new TextAlignVertical(1.0)

  toString() {
    return ``
  }
}
