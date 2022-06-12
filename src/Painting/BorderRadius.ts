import { invariant } from 'ts-invariant'
import { Skia } from '@skia'
import { Radius, Rect, RRect } from '@rendering'
import { TextDirection } from 'canvaskit-wasm'

export abstract class BorderRadiusGeometry {
  static lerp (
    a: BorderRadiusGeometry | null, 
    b: BorderRadiusGeometry | null, 
    t: number
  ): BorderRadiusGeometry | null {
    invariant(t !== null)

    if (a === null && b === null) {
      return null
    }

    a ??= BorderRadius.zero
    b ??= BorderRadius.zero

    return a.add(b.subtract(a).multiply(t))
  }

  public topLeft: Radius
  public topRight: Radius
  public bottomLeft: Radius
  public bottomRight: Radius
  public topStart: Radius
  public topEnd: Radius
  public bottomStart: Radius
  public bottomEnd: Radius

  constructor (
    topLeft: Radius,
    topRight: Radius,
    bottomRight: Radius,
    bottomLeft: Radius,
    topStart: Radius,
    topEnd: Radius,
    bottomStart: Radius,
    bottomEnd: Radius,
  ) {
    this.topLeft = topLeft
    this.topRight = topRight
    this.bottomRight = bottomRight
    this.bottomLeft = bottomLeft
    this.topStart = topStart
    this.topEnd = topEnd
    this.bottomStart = bottomStart
    this.bottomEnd = bottomEnd
  }

  add (other: BorderRadiusGeometry): BorderRadiusGeometry {
    return new MixedBorderRadius(
      this.topLeft.add(other.topLeft),
      this.topRight.add(other.topRight),
      this.bottomLeft.add(other.bottomLeft),
      this.bottomRight.add(other.bottomRight),
      this.topStart.add(other.topStart),
      this.topEnd.add(other.topEnd),
      this.bottomStart.add(other.bottomStart),
      this.bottomEnd.add(other.bottomEnd),
    )
  }

  subtract (other: BorderRadiusGeometry): BorderRadiusGeometry  {
    return new MixedBorderRadius(
      this.topLeft.subtract(other.topLeft),
      this.topRight.subtract(other.topRight),
      this.bottomLeft.subtract(other.bottomLeft),
      this.bottomRight.subtract(other.bottomRight),
      this.topStart.subtract(other.topStart),
      this.topEnd.subtract(other.topEnd),
      this.bottomStart.subtract(other.bottomStart),
      this.bottomEnd.subtract(other.bottomEnd),
    )
  }

  abstract opposite (): BorderRadiusGeometry
  abstract multiply (other: number): BorderRadiusGeometry
  abstract divide (other: number): BorderRadiusGeometry
  abstract modulo (other: number): BorderRadiusGeometry
  abstract resolve (direction: TextDirection | null): BorderRadius

  isEqual (other: BorderRadiusGeometry | null) {
    if (other === null) {
      return false
    }

    if (this === other) {
      return true
    }
    
    return (
      other instanceof BorderRadiusGeometry &&
      other.topLeft == this.topLeft &&
      other.topRight == this.topRight &&
      other.bottomLeft == this.bottomLeft &&
      other.bottomRight == this.bottomRight &&
      other.topStart == this.topStart &&
      other.topEnd == this.topEnd &&
      other.bottomStart == this.bottomStart &&
      other.bottomEnd == this.bottomEnd
    )
  }

  toString () {
    return ``
  }
}

export class BorderRadius extends BorderRadiusGeometry {
  static zero = BorderRadius.all(Radius.zero)
  static all (radius: Radius) {
    return this.only(
      radius,
      radius,
      radius,
      radius,
    )
  }

  static lerp (
    a: BorderRadius | null, 
    b: BorderRadius | null, 
    t: number
  ): BorderRadius | null {
    invariant(t !== null)
    if (
      a === null && 
      b === null
    ) {
      return null
    }

    if (a === null) {
      return b!.multiply(t)
    }

    if (b == null) {
      return a.multiply(1.0 - t)
    }

    return BorderRadius.only(
      Radius.lerp(a.topLeft, b.topLeft, t)!,
      Radius.lerp(a.topRight, b.topRight, t)!,
      Radius.lerp(a.bottomRight, b.bottomRight, t)!,
      Radius.lerp(a.bottomLeft, b.bottomLeft, t)!,
    )
  }

  static circular (radius: number) {
    return BorderRadius.all(Radius.circular(radius))
  }

  static vertical (
    top: Radius = Radius.zero,
    bottom: Radius = Radius.zero,
  ) {
    return BorderRadius.only(
      top,
      top,
      bottom,
      bottom,
    )
  }

  static horizontal(
    left: Radius = Radius.zero,
    right: Radius = Radius.zero,
  ) {
    BorderRadius.only(
      left,
      right,
      right,
      left,
    )
  } 

  static only(
    topLeft: Radius = Radius.zero,
    topRight: Radius = Radius.zero,
    bottomRight: Radius = Radius.zero,
    bottomLeft: Radius = Radius.zero,
  ) {
    return new BorderRadius(
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,
    )
  }

  constructor (
    topLeft: Radius,
    topRight: Radius,
    bottomRight: Radius,
    bottomLeft: Radius,
  ) {
    super(
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,
      Radius.zero,
      Radius.zero,
      Radius.zero,
      Radius.zero,
    )
  }

  
  copyWith (
   topLeft:  Radius | null,
   topRight:  Radius | null,
   bottomRight:  Radius | null,
   bottomLeft:  Radius | null,
  ) {
    return BorderRadius.only(
      topLeft ?? this.topLeft,
      topRight ?? this.topRight,
      bottomRight ?? this.bottomRight,
      bottomLeft ?? this.bottomLeft,
    )
  }

  toRRect (rect: Rect ): RRect {
    return RRect.fromRectAndCorners(
      rect,
      this.topLeft,
      this.topRight,
      this.bottomRight,
      this.bottomLeft,
    )
  }

  opposite (): BorderRadius {
    return BorderRadius.only(
      this.topLeft.opposite(),
      this.topRight.opposite(),
      this.bottomRight.opposite(),
      this.bottomLeft.opposite(),
    )
  }

  subtract (other: BorderRadiusGeometry): BorderRadiusGeometry {
    return BorderRadius.only(
      this.topLeft.subtract(other.topLeft),
      this.topRight.subtract(other.topRight),
      this.bottomRight.subtract(other.bottomRight),
      this.bottomLeft.subtract(other.bottomLeft),
    )
  }

  add (other: BorderRadiusGeometry): BorderRadiusGeometry {
    return BorderRadius.only(
      this.topLeft.add(other.topLeft),
      this.topRight.add(other.topRight),
      this.bottomRight.add(other.bottomRight),
      this.bottomLeft.add(other.bottomLeft),
    )
  }

  multiply (other: number): BorderRadius {
    return BorderRadius.only(
      this.topLeft.multiply(other),
      this.topRight.multiply(other),
      this.bottomRight.multiply(other),
      this.bottomLeft.multiply(other),
    )
  }

  divide (other: number): BorderRadius {
    return BorderRadius.only(
      this.topLeft.divide(other),
      this.topRight.divide(other),
      this.bottomRight.divide(other),
      this.bottomLeft.divide(other),
    )
  }

  modulo (other: number): BorderRadius {
    return BorderRadius.only(
      this.topLeft.modulo(other),
      this.topRight.modulo(other),
      this.bottomRight.modulo(other),
      this.bottomLeft.modulo(other),
    )
  }
  
  resolve (direction: TextDirection | null) {
    return this
  }
}

export class BorderRadiusDirectional extends BorderRadiusGeometry {
  static Zero = BorderRadiusDirectional.all(Radius.zero)

  static lerp (
    a: BorderRadiusDirectional | null, 
    b: BorderRadiusDirectional | null, 
    t: number
  ): BorderRadiusDirectional | null {
    invariant(t !== null)
    
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b!.multiply(t)
    }

    if (b === null) {
      return a.multiply(1.0 - t)
    }

    return BorderRadiusDirectional.only(
      Radius.lerp(a.topStart, b.topStart, t)!,
      Radius.lerp(a.topEnd, b.topEnd, t)!,
      Radius.lerp(a.bottomStart, b.bottomStart, t)!,
      Radius.lerp(a.bottomEnd, b.bottomEnd, t)!,
    )
  }

  static all (radius: Radius) {
    return BorderRadiusDirectional.only(
      radius,
      radius,
      radius,
      radius,
    );
  }

  static circular (radius: number) {
    this.all(Radius.circular(radius))
  }

  static vertical(
    top: Radius = Radius.zero,
    bottom: Radius = Radius.zero,
  ) {
    return BorderRadiusDirectional.only(
      top,
      top,
      bottom,
      bottom,
    );
  }

  static horizontal(
    start: Radius = Radius.zero,
    end: Radius = Radius.zero,
  ) {
    return BorderRadiusDirectional.only(
      start,
      end,
      start,
      end,
    );
  }

  static only(
    topStart: Radius = Radius.zero,
    topEnd: Radius = Radius.zero,
    bottomStart: Radius = Radius.zero,
    bottomEnd: Radius = Radius.zero,
  ) {
    return new BorderRadiusDirectional(
      topStart,
      topEnd,
      bottomStart,
      bottomEnd,
    )
  }

  constructor (
    topStart: Radius,
    topEnd: Radius,
    bottomStart: Radius,
    bottomEnd: Radius,
  ) { 
    super(
      Radius.zero,
      Radius.zero,
      Radius.zero,
      Radius.zero,
      topStart,
      topEnd,
      bottomStart,
      bottomEnd,
    )
  }

  opposite (): BorderRadiusGeometry {
    return BorderRadiusDirectional.only(
      this.topStart.opposite(),
      this.topEnd.opposite(),
      this.bottomStart.opposite(),
      this.bottomEnd.opposite(),
    )
  }

  subtract (other: BorderRadiusGeometry): BorderRadiusGeometry  {
    return BorderRadiusDirectional.only(
      this.topStart.subtract(other.topStart),
      this.topEnd.subtract(other.topEnd),
      this.bottomStart.subtract(other.bottomStart),
      this.bottomEnd.subtract(other.bottomEnd),
    )
  }

  multiply (other: number): BorderRadiusGeometry  {
    return BorderRadiusDirectional.only(
      this.topStart.multiply(other),
      this.topEnd.multiply(other),
      this.bottomStart.multiply(other),
      this.bottomEnd.multiply(other),
    )
  }

  divide (other: number): BorderRadiusGeometry  {
    return BorderRadiusDirectional.only(
      this.topStart.divide(other),
      this.topEnd.divide(other),
      this.bottomStart.divide(other),
      this.bottomEnd.divide(other),
    )
  }

  modulo (other: number): BorderRadiusGeometry  {
    return BorderRadiusDirectional.only(
      this.topStart.modulo(other),
      this.topEnd.modulo(other),
      this.bottomStart.modulo(other),
      this.bottomEnd.modulo(other),
    )
  }
  
  resolve (direction: TextDirection | null): BorderRadius {
    invariant(direction !== null)

    if (direction === Skia.TextDirection.RTL) {
      return BorderRadius.only(
        this.topEnd,
        this.topStart,
        this.bottomEnd,
        this.bottomStart,
      )
    } else {
      return BorderRadius.only(
        this.topStart,
        this.topEnd,
        this.bottomStart,
        this.bottomEnd,
      )
    }
  }
}

export class MixedBorderRadius extends BorderRadiusGeometry {
  constructor (
    topLeft: Radius,
    topRight: Radius,
    bottomLeft: Radius,
    bottomRight: Radius,
    topStart: Radius,
    topEnd: Radius,
    bottomStart: Radius,
    bottomEnd: Radius,
  ) {
    super(
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      topStart,
      topEnd,
      bottomStart,
      bottomEnd,
    )
  }

  opposite (): MixedBorderRadius {
    return new MixedBorderRadius(
      this.topLeft.opposite(),
      this.topRight.opposite(),
      this.bottomLeft.opposite(),
      this.bottomRight.opposite(),
      this.topStart.opposite(),
      this.topEnd.opposite(),
      this.bottomStart.opposite(),
      this.bottomEnd.opposite(),
    )
  }

  add (other: MixedBorderRadius): MixedBorderRadius {
    return new MixedBorderRadius(
      this.topLeft.add(other.topLeft),
      this.topRight.add(other.topRight),
      this.bottomLeft.add(other.bottomLeft),
      this.bottomRight.add(other.bottomRight),
      this.topStart.add(other.topStart),
      this.topEnd.add(other.topEnd),
      this.bottomStart.add(other.bottomStart),
      this.bottomEnd.add(other.bottomEnd),
    )
  }

  subtract (other: MixedBorderRadius): MixedBorderRadius {
    return new MixedBorderRadius(
      this.topLeft.subtract(other.topLeft),
      this.topRight.subtract(other.topRight),
      this.bottomLeft.subtract(other.bottomLeft),
      this.bottomRight.subtract(other.bottomRight),
      this.topStart.subtract(other.topStart),
      this.topEnd.subtract(other.topEnd),
      this.bottomStart.subtract(other.bottomStart),
      this.bottomEnd.subtract(other.bottomEnd),
    )
  }

  multiply (other: number): MixedBorderRadius {
    return new MixedBorderRadius(
      this.topLeft.multiply(other),
      this.topRight.multiply(other),
      this.bottomLeft.multiply(other),
      this.bottomRight.multiply(other),
      this.topStart.multiply(other),
      this.topEnd.multiply(other),
      this.bottomStart.multiply(other),
      this.bottomEnd.multiply(other),
    )
  }

  divide (other: number): MixedBorderRadius {
    return new MixedBorderRadius(
      this.topLeft.divide(other),
      this.topRight.divide(other),
      this.bottomLeft.divide(other),
      this.bottomRight.divide(other),
      this.topStart.divide(other),
      this.topEnd.divide(other),
      this.bottomStart.divide(other),
      this.bottomEnd.divide(other),
    )
  }

  modulo (other: number): MixedBorderRadius {
    return new MixedBorderRadius(
      this.topLeft.modulo(other),
      this.topRight.modulo(other),
      this.bottomLeft.modulo(other),
      this.bottomRight.modulo(other),
      this.topStart.modulo(other),
      this.topEnd.modulo(other),
      this.bottomStart.modulo(other),
      this.bottomEnd.modulo(other),
    )
  }
  
  resolve (direction: TextDirection | null): BorderRadius {
    invariant(direction !== null)

    if (direction === Skia.TextDirection.RTL) {
      return BorderRadius.only(
        this.topLeft.add(this.topEnd),
        this.topRight.add(this.topStart),
        this.bottomLeft.add(this.bottomEnd),
        this.bottomRight.add(this.bottomStart),
      )
    } else {
      return BorderRadius.only(
        this.topLeft.add(this.topStart),
        this.topRight.add(this.topEnd),
        this.bottomLeft.add(this.bottomStart),
        this.bottomRight.add(this.bottomEnd),
      )
    }
  }
}
