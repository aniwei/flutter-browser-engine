import { invariant } from 'ts-invariant'
import { lerpDouble } from '@helper'
import { Offset, Rect, Size } from '@rendering'
import { Skia } from '@skia'
import { TextDirection } from 'canvaskit-wasm'

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
      return (b as AlignmentGeometry).multiply(t)
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
      lerpDouble(a.x, b.x, t),
      lerpDouble(a.start, b.start, t),
      lerpDouble(a.y, b.y, t),
    )
  }

  public x: number
  public start: number
  public y: number

  constructor (
    x: number,
    start: number,
    y: number,
  ) {
    this.x = x
    this.start = start
    this.y = y
  }
  
  abstract add (other: AlignmentGeometry)
  abstract substract (other: AlignmentGeometry)
  abstract multiply (other: number) 
  abstract divide (other: number)
  abstract modulo (other: number)  
  abstract negate () 

  abstract resolve (direction: TextDirection | null): Alignment 

  eq (other: AlignmentGeometry) {
    return (
      other instanceof AlignmentGeometry &&
      other.x === this.x &&
      other.start === this.start &&
      other.y === this.y
    )
  }

  toString () {
    return ``
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


  static lerp(
    a: Alignment | null, 
    b: Alignment | null, 
    t: number
  ): Alignment | null {
    invariant(t !== null)

    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return new Alignment(
        lerpDouble(0.0, (b as Alignment).x, t), 
        lerpDouble(0.0, (b as Alignment).y, t)!
      )
    }
    if (b === null) {
      return new Alignment(
        lerpDouble(a.x, 0.0, t)!, 
        lerpDouble(a.y, 0.0, t)!
      )
    }

    return new Alignment(
      lerpDouble(a.x, b.x, t)!, 
      lerpDouble(a.y, b.y, t)!
    )
  }

  constructor (
    x: number,
    y: number
  ) {
    super(
      x,
      0.0,
      y
    )
  }

  negate () {
    return new Alignment(
      -this.x,
      -this.y,
    )
  }

  substract (other: Alignment): Alignment {
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

  divide (other: number): Alignment {
    return new Alignment(
      this.x / other, 
      this.y / other
    )
  }

  multiply (other: number): Alignment {
    return new Alignment(
      this.x * other, 
      this.y * other
    )
  }

  modulo (other: number): Alignment {
    return new Alignment(
      this.x % other, 
      this.y % other
    )
  }

  alongOffset (other: Offset) {
    const centerX = other.dx / 2.0
    const centerY = other.dy / 2.0
    
    return new Offset(
      centerX + this.x * centerX, 
      centerY + this.y * centerY
    )
  }

  alongSize (other: Size) {
    const centerX = other.width / 2.0
    const centerY = other.height / 2.0
    return new Offset(
      centerX + this.x * centerX, 
      centerY + this.y * centerY
    )
  }

  withinRect (rect: Rect) {
    const halfWidth = rect.width / 2.0
    const halfHeight = rect.height / 2.0

    return new Offset(
      rect.left + halfWidth + this.x * halfWidth,
      rect.top + halfHeight + this.y * halfHeight,
    )
  }

  inscribe (
    size: Size, 
    rect: Rect
  ) {
    const halfWidthDelta = (rect.width - size.width) / 2.0
    const halfHeightDelta = (rect.height - size.height) / 2.0

    return Rect.fromLTWH(
      rect.left + halfWidthDelta + this.x * halfWidthDelta,
      rect.top + halfHeightDelta + this.y * halfHeightDelta,
      size.width,
      size.height,
    )
  }

  resolve (direction: TextDirection | null): Alignment {
    return this
  } 

  toString () {
    return ``
  }
}


export class AlignmentDirectional extends AlignmentGeometry {
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
        lerpDouble(0.0, (b as AlignmentDirectional).start, t)!, 
        lerpDouble(0.0, (b as AlignmentDirectional).y, t)!
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

  constructor (
    start, 
    y
  ) {
    invariant(start !== null)
    invariant(y !== null)

    super(
      0.0,
      start,
      y
    )
  }

  add (other: AlignmentGeometry): AlignmentGeometry {
    return new AlignmentDirectional(
      this.start + other.start, 
      this.y + other.y
    )
  }
  
  substract (other: AlignmentDirectional): AlignmentGeometry {
    return new AlignmentDirectional(
      this.start - other.start, 
      this.y - other.y
    )
  }

  negate () {
    return new AlignmentDirectional(
      -this.start, 
      -this.y
    )
  }
  
  multiply (other: number) {
    return new AlignmentDirectional(
      this.start * other, 
      this.y * other
    )
  }

  divide (other: number) {
    return new AlignmentDirectional(
      this.start / other, 
      this.y / other
    )
  }
   
  modulo (other: number) {
    return new AlignmentDirectional(
      this.start % other, 
      this.y % other
    )
  }
  
  resolve (direction: TextDirection | null): Alignment {
    invariant(direction !== null, 'Cannot resolve $runtimeType without a TextDirection.')

    if (direction === Skia.TextDirection.RTL) {
      return new Alignment(
        -this.start, 
        this.y
      )
    } else {
      return new Alignment(
        this.start, 
        this.y
      ) 
    }
  }

  toString () {
    return ``
  }
}

export class MixedAlignment extends AlignmentGeometry {
  
  constructor (
    x: number,
    start: number,
    y: number
  ) {
    super(
      x,
      start,
      y
    )

    this.x = x
    this.start = start
    this.y = y
  }

  negate (): MixedAlignment {
    return new MixedAlignment(
      -this.x,
      -this.start,
      -this.y,
    )
  }

  add(other: MixedAlignment) {
    return new MixedAlignment(
      this.x + other.x,
      this.start + other.start,
      this.y + other.y,
    )
  }

  substract (other: MixedAlignment): MixedAlignment {
    return new MixedAlignment(
      this.x - other.x,
      this.start - other.start,
      this.y - other.y,
    )
  }

  multiply (other: number): MixedAlignment {
    return new MixedAlignment(
      this.x * other,
      this.start * other,
      this.y * other,
    )
  }
  
  divide (other: number): MixedAlignment {
    return new MixedAlignment(
      this.x / other,
      this.start / other,
      this.y / other,
    )
  }

  
  modulo (other: number): MixedAlignment  {
    return new MixedAlignment(
      this.x % other,
      this.start % other,
      this.y % other,
    );
  }

  resolve (direction: TextDirection | null): Alignment {
    invariant(direction !== null, 'Cannot resolve $runtimeType without a TextDirection.')

    if (direction === Skia.TextDirection.RTL) {
      return new Alignment(
        this.x - this.start, 
        this.y
      )
    } else {
      return new Alignment(
        this.x + this.start, 
        this.y
      )
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

  toString () {
    return `[Alignment TextAlignVectical]`
  }
}
