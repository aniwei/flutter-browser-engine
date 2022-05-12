import invariant from 'ts-invariant'
import { Offset, Rect, Size } from '@UI'
import { clamp, lerpDouble } from '@Math'
import { TextDirection } from 'canvaskit-wasm'
import { Axis } from '.'
import { Skia } from '@Skia'


const POSITIVE_INFINITY = Number.POSITIVE_INFINITY

export abstract class EdgeInsetsGeometry {
  static get Infinity () {
    return MixedEdgeInsets.fromLRSETB(
      POSITIVE_INFINITY,
      POSITIVE_INFINITY,
      POSITIVE_INFINITY,
      POSITIVE_INFINITY,
      POSITIVE_INFINITY,
      POSITIVE_INFINITY,
    )
  }

  static lerp(
    a: EdgeInsetsGeometry | null, 
    b: EdgeInsetsGeometry | null, 
    t: number
  ): EdgeInsetsGeometry | null {
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
      a instanceof EdgeInsets && 
      b instanceof EdgeInsets
    ) {
      return EdgeInsets.lerp(a, b, t) as unknown as EdgeInsetsGeometry
    }

    if (
      a instanceof EdgeInsetsDirectional && 
      b instanceof EdgeInsetsDirectional
    ) {
      return EdgeInsetsDirectional.lerp(a, b, t) as unknown as EdgeInsetsGeometry
    }

    return MixedEdgeInsets.fromLRSETB(
      lerpDouble(a.left, b.left, t)!,
      lerpDouble(a.right, b.right, t)!,
      lerpDouble(a.start, b.start, t)!,
      lerpDouble(a.end, b.end, t)!,
      lerpDouble(a.top, b.top, t)!,
      lerpDouble(a.bottom, b.bottom, t)!,
    );
  }

  public bottom: number
  public end: number
  public left: number
  public right: number
  public start: number
  public top: number

  get isNonNegative (): boolean {
    return (
      this.left >= 0.0 &&
      this.right >= 0.0 &&
      this.start >= 0.0 &&
      this.end >= 0.0 &&
      this.top >= 0.0 &&
      this.bottom >= 0.0
    )
  }

  get horizontal () {
    return this.left + this.right + this.start + this.end
  }

  get vertical () {
    return this.top + this.bottom
  }

  get collapsedSize (): Size {
    return new Size(
      this.horizontal, 
      this.vertical
    )
  } 

  get flipped (): EdgeInsetsGeometry {
    return MixedEdgeInsets.fromLRSETB(
      this.right, 
      this.left, 
      this.end, 
      this.start, 
      this.bottom, 
      this.top
    )
  }

  constructor (
    bottom: number,
    end: number,
    left: number,
    right: number,
    start: number,
    top: number,
  ) {
    this.bottom = bottom
    this.end = end
    this.left = left
    this.right = right
    this.start = start
    this.top = top
  }

  abstract add (other: EdgeInsetsGeometry): EdgeInsetsGeometry
  abstract subtract (other: EdgeInsetsGeometry): EdgeInsetsGeometry
  abstract opposite (): EdgeInsetsGeometry
  abstract multiply (other: number): EdgeInsetsGeometry
  abstract divide (other: number): EdgeInsetsGeometry
  abstract modulo (other: number): EdgeInsetsGeometry
  abstract resolve (direction: TextDirection): EdgeInsets

  along (axis: Axis) {
    invariant(axis !== null)

    switch (axis) {
      case Axis.Horizontal:
        return this.horizontal
      case Axis.Vertical:
        return this.vertical
    }
  }

  inflateSize (size: Size) {
    return new Size(
      size.width + this.horizontal, 
      size.height + this.vertical
    )
  }

  
  deflateSize (size: Size) {
    return new Size(
      size.width - this.horizontal, 
      size.height - this.vertical
    )
  }

  clamp(
    min: EdgeInsetsGeometry, 
    max: EdgeInsetsGeometry
  ) {
    return MixedEdgeInsets.fromLRSETB(
      clamp(this.left, min.left, max.left),
      clamp(this.right, min.right, max.right),
      clamp(this.start, min.start, max.start),
      clamp(this.end, min.end, max.end),
      clamp(this.top, min.top, max.top),
      clamp(this.bottom, min.bottom, max.bottom),
    )
  }

  isEqual (other: EdgeInsetsGeometry) {
    if (other instanceof EdgeInsetsGeometry) {
      return (
        other.left === this.left &&
        other.right === this.right &&
        other.start === this.start &&
        other.end === this.end &&
        other.top === this.top &&
        other.bottom === this.bottom
      )
    }
  }

  toString () {
    return ``
  }
}

export class EdgeInsets extends EdgeInsetsGeometry {
  static Zero = EdgeInsets.only()

  static lerp (
    a: EdgeInsets | null, 
    b: EdgeInsets | null, 
    t: number
  ): EdgeInsets | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b ? b.multiply(t) as unknown as EdgeInsets : null
    }
    if (b === null) {
      return a.multiply(1.0 - t) as unknown as EdgeInsets
    }

    return EdgeInsets.fromLTRB(
      lerpDouble(a.left, b.left, t)!,
      lerpDouble(a.top, b.top, t)!,
      lerpDouble(a.right, b.right, t)!,
      lerpDouble(a.bottom, b.bottom, t)!,
    )
  }

  static fromLTRB(
    left: number, 
    top: number, 
    right: number, 
    bottom: number
  ): EdgeInsets {
    return new EdgeInsets(
      left,
      top,
      right,
      bottom,
    )
  }

  static fromWindowPadding (
    padding, 
    devicePixelRatio: number
  ): EdgeInsets {
    return new EdgeInsets(
      padding.left / devicePixelRatio,
      padding.top / devicePixelRatio,
      padding.right / devicePixelRatio,
      padding.bottom / devicePixelRatio
    )
  }

  static all (value: number): EdgeInsets {
    return new EdgeInsets(
      value,
      value,
      value,
      value
    )
  }
    
  static only (
    left: number = 0.0,
    top: number = 0.0,
    right: number = 0.0,
    bottom: number = 0.0,
  ): EdgeInsets {
    return new EdgeInsets(
      left,
      top,
      right,
      bottom,
    )
  }

  static symmetric(
    vertical = 0.0,
    horizontal = 0.0,
  ): EdgeInsets {
    return new EdgeInsets(
      horizontal,
      vertical,
      horizontal,
      vertical
    )
  }

  constructor (
    left: number, 
    top: number, 
    right: number,  
    bottom: number
  ) {
    super(
      left,
      right,
      0.0,
      0.0,
      top,
      bottom,
    )
  }
  
  get topLeft () {
    return new Offset(this.left, this.top)
  } 

  get topRight () {
    return new Offset(-this.right, this.top)
  }

  get bottomLeft () {
    return new Offset(this.left, -this.bottom)
  } 

  get bottomRight () {
    return new Offset(-this.right, -this.bottom)
  } 

  get flipped () {
    return EdgeInsets.fromLTRB(
      this.right, 
      this.bottom, 
      this.left, 
      this.top
    ) as unknown as EdgeInsets 
  } 

  inflateRect (rect: Rect) {
    return Rect.fromLTRB(
      rect.left - this.left, 
      rect.top - this.top, 
      rect.right + this.right, 
      rect.bottom + this.bottom
    )
  }

  deflateRect (rect: Rect) {
    return Rect.fromLTRB(
      rect.left + this.left, 
      rect.top + this.top, 
      rect.right - this.right, 
      rect.bottom - this.bottom
    )
  }

  clamp (
    min: EdgeInsetsGeometry, 
    max: EdgeInsetsGeometry
  ): EdgeInsetsGeometry {
    return EdgeInsets.fromLTRB(
      clamp(this.left, min.left, max.left),
      clamp(this.top, min.top, max.top),
      clamp(this.right, min.right, max.right),
      clamp(this.bottom, min.bottom, max.bottom),
    ) as unknown as EdgeInsetsGeometry
  }

  add (other: EdgeInsets) {
    return EdgeInsets.fromLTRB(
      this.left + other.left,
      this.top + other.top,
      this.right + other.right,
      this.bottom + other.bottom,
    )
  }

  opposite () {
    return EdgeInsets.fromLTRB(
      -this.left,
      -this.top,
      -this.right,
      -this.bottom,
    )
  }

  subtract (other: EdgeInsets) {
    return EdgeInsets.fromLTRB(
      this.left - other.left,
      this.top - other.top,
      this.right - other.right,
      this.bottom - other.bottom,
    )
  }

  multiply (other: number): EdgeInsets {
    return EdgeInsets.fromLTRB(
      this.left * other,
      this.top * other,
      this.right * other,
      this.bottom * other,
    )
  }

 
  divide (other: number): EdgeInsets {
    return EdgeInsets.fromLTRB(
      this.left / other,
      this.top / other,
      this.right / other,
      this.bottom / other,
    )
  }

  floor (other: number): EdgeInsets {
    return EdgeInsets.fromLTRB(
      Math.floor(this.left / other),
      Math.floor(this.top / other),
      Math.floor(this.right / other),
      Math.floor(this.bottom / other),
    )
  }

  modulo (other: number): EdgeInsets {
    return EdgeInsets.fromLTRB(
      this.left % other,
      this.top % other,
      this.right % other,
      this.bottom % other,
    )
  }

  resolve (direction: TextDirection | null) {
    return this
  }

  copyWith(
    left: number | null,
    top: number | null,
    right: number | null,
    bottom: number | null,
  ): EdgeInsets {
    return EdgeInsets.only(
      left ?? this.left,
      top ?? this.top,
      right ?? this.right,
      bottom ?? this.bottom,
    );
  }
}

export class EdgeInsetsDirectional extends EdgeInsetsGeometry {
  static Zero = EdgeInsetsDirectional.only()

  static lerp(
    a: EdgeInsetsDirectional | null, 
    b: EdgeInsetsDirectional | null, 
    t: number
  ): EdgeInsetsDirectional | null {
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
    return EdgeInsetsDirectional.fromSTEB(
      lerpDouble(a.start, b.start, t)!,
      lerpDouble(a.top, b.top, t)!,
      lerpDouble(a.end, b.end, t)!,
      lerpDouble(a.bottom, b.bottom, t)!,
    );
  }

  static fromSTEB (
    start: number, 
    top: number, 
    end: number, 
    bottom: number
  ) {
    return new EdgeInsetsDirectional(
      start,
      top,
      end,
      bottom
    )
  }

  static only(
    start: number = 0.0,
    top: number = 0.0,
    end: number = 0.0,
    bottom: number = 0.0,
  ) {
    return new EdgeInsetsDirectional(
      start,
      top,
      end,
      bottom
    )
  }

  static all (value: number) {
    return new EdgeInsetsDirectional(
      value,
      value,
      value,
      value
    )
  }

  constructor (
    start: number, 
    top: number, 
    end: number, 
    bottom: number
  ) {
    super(
      0.0, 
      0.0,
      start,
      top,
      end,
      bottom,
    )
  }


  public get isNonNegative () {
    return (
      this.start >= 0.0 && 
      this.top >= 0.0 && 
      this.end >= 0.0 && 
      this.bottom >= 0.0
    ) 
  }

  public get flipped () {
    return EdgeInsetsDirectional.fromSTEB(
      this.end, 
      this.bottom, 
      this.start, 
      this.top
    )
  } 

  add (other: EdgeInsetsDirectional): EdgeInsetsDirectional {
    return EdgeInsetsDirectional.fromSTEB(
      this.start + other.start,
      this.top + other.top,
      this.end + other.end,
      this.bottom + other.bottom,
    );
  }

  opposite (): EdgeInsetsDirectional {
    return EdgeInsetsDirectional.fromSTEB(
      -this.start,
      -this.top,
      -this.end,
      -this.bottom,
    )
  }

  subtract (other: EdgeInsetsDirectional): EdgeInsetsDirectional {
    return EdgeInsetsDirectional.fromSTEB(
      -this.start - other.start,
      -this.top - other.top,
      -this.end - other.end,
      -this.bottom - other.bottom,
    )
  }

  multiply (other: number): EdgeInsetsDirectional {
    return EdgeInsetsDirectional.fromSTEB(
      this.start * other,
      this.top * other,
      this.end * other,
      this.bottom * other,
    )
  }

  divide (other: number): EdgeInsetsDirectional {
    return EdgeInsetsDirectional.fromSTEB(
      this.start / other,
      this.top / other,
      this.end / other,
      this.bottom / other,
    )
  }

  floor (other: number): EdgeInsetsDirectional {
    return EdgeInsetsDirectional.fromSTEB(
      Math.floor(this.start / other),
      Math.floor(this.top / other),
      Math.floor(this.end / other),
      Math.floor(this.bottom / other),
    )
  }

  modulo (other: number): EdgeInsetsDirectional {
    return EdgeInsetsDirectional.fromSTEB(
      this.start % other,
      this.top % other,
      this.end % other,
      this.bottom % other,
    )
  }

  resolve (direction: TextDirection | null): EdgeInsets {
    invariant(direction !== null)

    if (direction === Skia.TextDirection.RTL) {
      return EdgeInsets.fromLTRB(
        this.end, 
        this.top, 
        this.start, 
        this.bottom
      )
    } else {
      return EdgeInsets.fromLTRB(
        this.start, 
        this.top, 
        this.end, 
        this.bottom
      )
    }
  }
}

export class MixedEdgeInsets extends EdgeInsetsGeometry {
  static fromLRSETB(
    left: number, 
    right: number, 
    start: number, 
    end: number, 
    top: number, 
    bottom: number
  ) {
    return new MixedEdgeInsets(
      left,
      right,
      start,
      end,
      top,
      bottom
    )
  }
    
  get isNonNegative () {
    return (
      this.left >= 0.0 && 
      this.right >= 0.0 && 
      this.start >= 0.0 && 
      this.end >= 0.0 && 
      this.top >= 0.0 && 
      this.bottom >= 0.0 
    )
  }

  opposite(): MixedEdgeInsets {
    return MixedEdgeInsets.fromLRSETB(
      -this.left,
      -this.right,
      -this.start,
      -this.end,
      -this.top,
      -this.bottom,
    )
  }

  add (other: MixedEdgeInsets): MixedEdgeInsets {
    return MixedEdgeInsets.fromLRSETB(
      this.left + other.left,
      this.right + other.right,
      this.start + other.start,
      this.end + other.end,
      this.top + other.top,
      this.bottom + other.bottom,
    )
  }

  subtract (other: MixedEdgeInsets): MixedEdgeInsets {
    return MixedEdgeInsets.fromLRSETB(
      this.left - other.left,
      this.right - other.right,
      this.start - other.start,
      this.end - other.end,
      this.top - other.top,
      this.bottom - other.bottom,
    )
  }

  multiply (other: number ) {
    return MixedEdgeInsets.fromLRSETB(
      this.left * other,
      this.right * other,
      this.start * other,
      this.end * other,
      this.top * other,
      this.bottom * other,
    );
  }

  divide (other: number) {
    return MixedEdgeInsets.fromLRSETB(
      this.left / other,
      this.right / other,
      this.start / other,
      this.end / other,
      this.top / other,
      this.bottom / other,
    );
  }

  modulo (other: number) {
    return MixedEdgeInsets.fromLRSETB(
      this.left % other,
      this.right % other,
      this.start % other,
      this.end % other,
      this.top % other,
      this.bottom % other
    )
  }

  resolve (
    direction: TextDirection | null
  ): EdgeInsets {
    invariant(direction !== null)

    if (direction === Skia.TextDirection.RTL) {
      return EdgeInsets.fromLTRB(
        this.end + this.left,
        this.top, 
        this.start + this.right, 
        this.bottom
      )
    } else {
      return EdgeInsets.fromLTRB(
        this.start + this.left, 
        this.top, 
        this.end + this.right, 
        this.bottom
      )
    }
  }
}
