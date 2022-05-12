import { Radius, Rect, RRect } from '@UI'
import { TextDirection } from 'canvaskit-wasm'
import invariant from 'ts-invariant'

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

    a ??= BorderRadius.Zero
    b ??= BorderRadius.Zero

    return a.add(b.subtract(a).multiply(t))
  }

  abstract topLeft: Radius
  abstract topRight: Radius
  abstract bottomLeft: Radius
  abstract bottomRight: Radius
  abstract topStart: Radius
  abstract topEnd: Radius
  abstract bottomStart: Radius
  abstract bottomEnd: Radius

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

  abstract multiply (other: number): BorderRadius
  abstract divide (other: number): BorderRadius
  abstract modulo (other: number): BorderRadius
  abstract resolve (direction: TextDirection | null): BorderRadius

  isEqual (other: BorderRadiusGeometry) {
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
  static Zero = BorderRadius.all(Radius.Zero)
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
      Radius.lerp(a.bottomLeft, b.bottomLeft, t)!,
      Radius.lerp(a.bottomRight, b.bottomRight, t)!,
    )
  }

  static circular (radius: number) {
    return this.all(Radius.circular(radius))
  }

  static vertical (
    top: Radius = Radius.Zero,
    bottom: Radius = Radius.Zero,
  ) {
    return this.only(
      top,
      top,
      bottom,
      bottom,
    )
  }

  static horizontal(
    left: Radius = Radius.Zero,
    right: Radius = Radius.Zero,
  ) {
    this.only(
      left,
      right,
      left,
      right,
    )
  } 

  static only(
    topLeft: Radius = Radius.Zero,
    topRight: Radius = Radius.Zero,
    bottomLeft: Radius = Radius.Zero,
    bottomRight: Radius = Radius.Zero,
  ) {
    return new BorderRadius(
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    )
  }

  public topLeft: Radius
  public topRight: Radius
  public bottomLeft: Radius
  public bottomRight: Radius

  public get topStart () {
    return Radius.Zero
  }
  public get topEnd () {
    return Radius.Zero
  }
  public get bottomStart () {
    return Radius.Zero
  }
  public get bottomEnd () {
    return Radius.Zero
  }

  constructor (
    topLeft: Radius,
    topRight: Radius,
    bottomLeft: Radius,
    bottomRight: Radius,
  ) {
    super()
    this.topLeft = topLeft
    this.topRight = topRight
    this.bottomLeft = bottomLeft
    this.bottomRight = bottomRight
  }

  
  copyWith (
   topLeft:  Radius | null,
   topRight:  Radius | null,
   bottomLeft:  Radius | null,
   bottomRight:  Radius | null,
  ) {
    return BorderRadius.only(
      topLeft ?? this.topLeft,
      topRight ?? this.topRight,
      bottomLeft ?? this.bottomLeft,
      bottomRight ?? this.bottomRight,
    );
  }

  toRRect (rect: Rect ): RRect {
    return RRect.fromRectAndCorners(
      rect,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    )
  }

  subtract (other: BorderRadiusGeometry | number): BorderRadiusGeometry {
    if (other instanceof BorderRadius) {
      return BorderRadius.only(
       this.topLeft - other.topLeft,
       this.topRight - other.topRight,
       this.bottomLeft - other.bottomLeft,
       this.bottomRight - other.bottomRight,
      )
    } else if (typeof other === 'number') {

    }

    return super.subtract(other)
  }

  add (other: BorderRadiusGeometry): BorderRadiusGeometry {
    if (other instanceof BorderRadius) {
      return BorderRadius.only(
        this.topLeft + other.topLeft,
        this.topRight + other.topRight,
        this.bottomLeft + other.bottomLeft,
        this.bottomRight + other.bottomRight,
       )
    }

    return super.add(other)
  }
  
  resolve (direction: TextDirection | null) {
    return this
  }
}


export class BorderRadiusDirectional extends BorderRadiusGeometry {
  static Zero = BorderRadiusDirectional.all(Radius.Zero)

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
      return b! * t
    }

    if (b === null) {
      return a * (1.0 - t)
    }

    return BorderRadiusDirectional.only(
      topStart: Radius.lerp(a.topStart, b.topStart, t)!,
      topEnd: Radius.lerp(a.topEnd, b.topEnd, t)!,
      bottomStart: Radius.lerp(a.bottomStart, b.bottomStart, t)!,
      bottomEnd: Radius.lerp(a.bottomEnd, b.bottomEnd, t)!,
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
    top: Radius = Radius.Zero,
    bottom: Radius = Radius.Zero,
  ) {
    return BorderRadiusDirectional.only(
      top,
      top,
      bottom,
      bottom,
    );
  }

  static horizontal(
    start: Radius = Radius.Zero,
    end: Radius = Radius.Zero,
  ) {
    return BorderRadiusDirectional.only(
      start,
      end,
      start,
      end,
    );
  }

  static only(
    topStart: Radius = Radius.Zero,
    topEnd: Radius = Radius.Zero,
    bottomStart: Radius = Radius.Zero,
    bottomEnd: Radius = Radius.Zero,
  ) {
    return new BorderRadiusDirectional(
      topStart,
      topEnd,
      bottomStart,
      bottomEnd,
    )
  }

  public topStart: Radius
  public topEnd: Radius
  public bottomStart: Radius
  public bottomEnd: Radius

  public get topLeft () {
    return Radius.Zero
  }
  public get topRight () {
    return Radius.Zero
  }
  public get bottomLeft () {
    return Radius.Zero
  }
  public get bottomRight () {
    return Radius.Zero
  }

  constructor (
    topStart: Radius = Radius.Zero,
    topEnd: Radius = Radius.Zero,
    bottomStart: Radius = Radius.Zero,
    bottomEnd: Radius = Radius.Zero,
  ) { 
    super()

    this.topStart = topStart 
    this.topEnd = topEnd 
    this.bottomStart = bottomStart
    this.bottomEnd = bottomEnd
  }

  subtract (other?: BorderRadiusGeometry | number): BorderRadiusGeometry  {
    if (
      other === undefined ||
      typeof other === 'number'
    ) {
      return BorderRadiusDirectional.only(
        this.topStart.subtract(other as Radius),
        this.topEnd.subtract(other as Radius),
        this.bottomStart.subtract(other as Radius),
        this.bottomEnd.subtract(other as Radius),
      )
    } else if (typeof other === 'numger') {
      return BorderRadiusDirectional.only(
        this.topStart - other,
        this.topEnd - other,
        this.bottomStart - other,
        this.bottomEnd - other,
      );
    } else if (other instanceof BorderRadiusDirectional) {
      return BorderRadiusDirectional.only(
        this.topStart - other.topStart,
        this.topEnd - other.topEnd,
        this.bottomStart - other.bottomStart,
        this.bottomEnd - other.bottomEnd,
      )
    } 

    return super.subtract(other)
  }

  
  resolve (direction: TextDirection | null): BorderRadius  {
    invariant(direction !== null)

    switch (direction) {
      case TextDirection.Rtl:
        return BorderRadius.only(
          this.topEnd,
          this.topStart,
          this.bottomEnd,
          this.bottomStart,
        )
      case TextDirection.Ltr:
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
    bottomLeft: Radius,
    bottomRight: Radius,
    topStart: Radius,
    topEnd: Radius,
    bottomStart: Radius,
    bottomEnd: Radius,
  ) {
    super()

    this.topLeft = topLeft
    this.topRight = topRight
    this.bottomLeft = bottomLeft
    this.bottomRight = bottomRight
    this.topStart = topStart
    this.topEnd = topEnd
    this.bottomStart = bottomStart
    this.bottomEnd = bottomEnd
  }
  
  resolve (direction: TextDirection | null): BorderRadius {
    invariant(direction !== null)
    switch (direction!) {
      case TextDirection.Rtl:
        return BorderRadius.only(
          this.topLeft.plus(this.topEnd),
          this.topRight.plus(this.topStart),
          this.bottomLeft.plus(this.bottomEnd),
          this.bottomRight.plus(this.bottomStart),
        )
      case TextDirection.Ltr:
        return BorderRadius.only(
          this.topLeft.plus(this.topStart),
          this.topRight.plus(this.topEnd),
          this.bottomLeft.plus(this.bottomStart),
          this.bottomRight.plus(this.bottomEnd),
        )
    }
  }
}
