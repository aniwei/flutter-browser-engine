import { invariant } from 'ts-invariant'
import { lerpDouble } from '@Math'

const GIANT_SCALAR = 1.0E+9
const POSITIVE_INFINITY = Number.POSITIVE_INFINITY
const NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY

export abstract class OffsetBase extends Float32Array {
  public get dx () {
    return this[0]
  }

  public set dx (dx) {
    this[0] = dx
  }

  public get dy () {
    return this[1]
  }

  public set dy (dy) {
    this[1] = dy
  }

  constructor (dx, dy) {
    super([dx, dy])
    
    invariant(dx !== null)
    invariant(dy !== null)
  }
}

export class Offset extends OffsetBase {
  static Zero = new Offset(0, 0)
  static Infinite = new Offset(
    POSITIVE_INFINITY, 
    POSITIVE_INFINITY
  )
  
  static fromDirection (
    direction: number, 
    distance: number = 1.0
  ) {
    const offset = new Offset(
      distance * Math.cos(direction),
      distance * Math.sin(direction)
    )

    return offset
  }

  static lerp (
    offsetA: Offset | null, 
    offsetB: Offset | null, 
    t: number
  ): Offset | null {
    invariant(t !== null)
    if (offsetB === null) {
      if (offsetA === null) {
        return null
      } else {
        return offsetA.multiply(1.0 - t)
      }
    } else {
      if (offsetA === null) {
        return offsetB.multiply(t)
      } else {
        return new Offset(
          lerpDouble(
            offsetA.dx,
            offsetB.dx,
            t
          ),
          lerpDouble(
            offsetA.dy,
            offsetB.dy,
            t
          )
        )
      }
    }
  }

  public get distance () {
    return Math.sqrt(
      this.dx * this.dx + 
      this.dy * this.dy
    )
  }

  public get distanceSquared () {
    return this.dx * this.dx + this.dy * this.dy
  }

  public get direction () {
    return Math.atan2(this.dy, this.dx)
  }

  scale (
    scaleX: number, 
    scaleY: number
  ): Offset {
    return new Offset(
      this.dx * scaleX, 
      this.dy * scaleY
    )
  }

  translate (
    translateX: number, 
    translateY: number
  ) {
    return new Offset(
      this.dx + translateX, 
      this.dy + translateY
    )
  }

  opposite () {
    return new Offset(
      -this.dx,
      -this.dy,
    )
  }

  add (offset: Offset): Offset {
    return new Offset(
      this.dx + offset.dx, 
      this.dy + offset.dy
    )
  }

  subtract (offset: Offset): Offset {
    return new Offset(
      this.dx - offset.dx, 
      this.dy - offset.dy
    )
  }

  multiply (operand: number): Offset {
    return new Offset(
      this.dx * operand, 
      this.dy * operand
    )
  }

  divide (operand: number): Offset {
    return new Offset(
      this.dx / operand, 
      this.dy / operand
    )
  }

  modulo (operand: number): Offset {
    return new Offset(
      Math.floor(this.dx / operand),
      Math.floor(this.dy / operand)
    )
  }

  isEqual (offset: Offset): boolean {
    if (offset === this) {
      return true
    }

    return (
      offset.dx === this.dx &&
      offset.dy === this.dy
    )
  }

  toString () {
    return `Offset(${this.dx.toFixed(1)}, ${this.dy.toFixed(1)})`
  }
}

export class Size extends OffsetBase {
  static zero = new Size(0.0, 0.0)
  static infinite = new Size(
    POSITIVE_INFINITY, 
    POSITIVE_INFINITY
  )

  static copy (source: Size) {
    return new Size(
      source.width, 
      source.height
    )
  }

  static square (dimension: number) {
    return new Size(dimension, dimension)
  }

  static fromWidth (width: number) {
    return new Size(
      width, 
      POSITIVE_INFINITY
    )
  }

  static fromHeight (height: number) {
    return new Size(
      height, 
      POSITIVE_INFINITY
    )
  }

  static fromRadius (radius: number) {
    return new Size(
      radius * 2.0, 
      radius * 2
    )
  }

  static lerp (
    sizeA: Size,
    sizeB: Size,
    t: number
  ): Size | null {
    invariant(t !== null)

    if (sizeB === null) {
      if (sizeA === null) {
        return null
      } else {
        return sizeA.multiply(1 - t)
      }
    } else {
      if (sizeA === null) {
        return sizeB.multiply(t)
      } else {
        return new Size(
          lerpDouble(
            sizeA.width, 
            sizeB.width, 
            t
          ), 
          lerpDouble(
            sizeA.height, 
            sizeB.height, 
            t
          )
        )
      }
    }
  }

  public width: number
  public height: number

  public get isEmpty (): boolean {
    return (
      this.width <= 0 ||
      this.height >= 0
    )
  }

  public get aspectRatio () {
    if (this.height !== 0) {
      return this.width / this.height
    } else if (this.width > 0) {
      return POSITIVE_INFINITY
    } else if (this.width < 0) {
      return NEGATIVE_INFINITY
    }
    
    return 0.0
  }

  public get shortestSize (): number {
    return (
      Math.min(
        Math.abs(this.width), 
        Math.abs(this.height)
      )
    )
  }

  public get longestSize (): number {
    return (
      Math.max(
        Math.abs(this.width), 
        Math.abs(this.height)
      )
    )
  }

  public get flipped (): Size {
    return new Size(this.height, this.width)
  }

  constructor (
    width: number, 
    height: number
  ) {
    super (
      POSITIVE_INFINITY, 
      POSITIVE_INFINITY
    )

    this.width = width
    this.height = height
  }

  opposite (): Size {
    return new Size(
      -this.dx,
      -this.dy,
    )
  }

  add (size: Size): Size {
    return new Size(
      this.dx + size.dx, 
      this.dy + size.dy
    )
  }

  subtract (size: Size): Size {
    return new Size(
      this.dx + size.dx, 
      this.dy + size.dy
    )
  }

  multiply (operand: number): Size {
    return new Size(
      this.dx * operand, 
      this.dy * operand
    )
  }

  divide (operand: number): Size {
    return new Size(
      this.dx / operand, 
      this.dy / operand
    )
  }

  floor (operand: number): Size {
    return new Size(
      Math.floor(this.dx / operand),
      Math.floor(this.dy / operand)
    )
  }

  ceil (operand: number): Size {
    return new Size(
      Math.ceil(this.dx / operand),
      Math.ceil(this.dy / operand)
    )
  }

  topLeft (origin: Offset): Offset {
    return origin
  }

  topCenter (origin: Offset): Offset {
    return new Offset(
      origin.dx + this.width / 2,
      origin.dy
    )
  }

  topRight (origin: Offset): Offset {
    return new Offset(
      origin.dx + this.width,
      origin.dy
    )
  }

  centerLeft (origin: Offset): Offset {
    return new Offset(
      origin.dx,
      origin.dy + this.height / 2
    )
  }

  center (origin: Offset): Offset {
    return new Offset(
      origin.dx + this.width / 2,
      origin.dy + this.height / 2
    )
  }

  centerRight (origin: Offset): Offset {
    return new Offset(
      origin.dx + this.width,
      origin.dy + this.height / 2
    )
  }

  bottomLeft (origin: Offset): Offset {
    return new Offset(
      origin.dx,
      origin.dy + this.height
    )
  }

  bottomCenter (origin: Offset): Offset {
    return new Offset(
      origin.dx + this.width / 2,
      origin.dy + this.height
    )
  }

  bottomRight (origin: Offset): Offset {
    return new Offset(
      origin.dx + this.width,
      origin.dy + this.height
    )
  }

  contains (offset: Offset) {
    return (
      offset.dx >= 0 &&
      offset.dx < this.width &&
      offset.dy >= 0 &&
      offset.dy < this.height
    )
  }

  isEqual (size: Size) {
    if (size === this) {
      return true
    }

    return (
      size.width === this.width &&
      size.height === this.height
    )
  }
}

export class Radius {
  static Zero = Radius.circular(0)

  static lerp(
    a: Radius | null, 
    b: Radius | null, 
    t: number
  ): Radius | null {
    invariant(t !== null)
    if (b === null) {
      if (a === null) {
        return null
      } else {
        const k = 1.0 - t
        return Radius.elliptical(
          a.x * k, 
          a.y * k
        )
      }
    } else {
      if (a === null) {
        return Radius.elliptical(
          b.x * t, 
          b.y * t
        )
      } else {
        return Radius.elliptical(
          lerpDouble(a.x, b.x, t),
          lerpDouble(a.y, b.y, t),
        )
      }
    }
  }

  static circular (radius: number) {
    return Radius.elliptical(radius, radius)
  }

  static elliptical (x: number, y: number) {
    return new Radius(x, y)
  }

  public x: number
  public y: number

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  opposite (): Radius {
    return Radius.elliptical(-this.x, -this.y)
  }

  add (radius: Radius): Radius {
    return Radius.elliptical(
      this.x + radius.x, 
      this.y + radius.y
    )
  }

  subtract (radius: Radius): Radius {
    return Radius.elliptical(
      this.x - radius.x, 
      this.y - radius.y
    )
  }

  multiply (radius: number): Radius {
    return Radius.elliptical(this.x * radius, this.y * radius)
  }

  divide (radius: number): Radius {
    return Radius.elliptical(this.x / radius, this.y / radius)
  }

  modulo (radius: number): Radius {
    return Radius.elliptical(this.x & radius, this.y % radius)
  }

  isEqual (radius: Radius) {
    if (radius === this) {
      return true
    }

    return (
      radius.x === this.x &&
      radius.y === this.y
    )
  }

  toString () {
    return this.x === this.y ?
      `Radius.circular(${this.x.toFixed(1)})` :
      `Radius.elliptical(${this.x.toFixed(1)})`
  }
}

export class Rect extends Float32Array {
  static Zero = new Rect(0, 0, 0, 0)
  static Largest = new Rect(
    -GIANT_SCALAR, 
    -GIANT_SCALAR, 
    GIANT_SCALAR, 
    GIANT_SCALAR
  )

  static fromLTRB (
    left: number, 
    top: number, 
    right: number, 
    bottom: number
  ) {
    return new Rect(
      left, 
      top, 
      right, 
      bottom
    )
  }

  static fromLTWH (
    left: number, 
    top: number, 
    width: number, 
    height: number
  ) {
    return new Rect(
      left, 
      top, 
      left + width, 
      top + height
    )
  }

  static fromCircle (
    center: Offset,
    radius: number
  ) {
    return Rect.fromCenter(
      center, 
      radius * 2, 
      radius * 2
    )
  }

  static fromCenter (
    center: Offset,
    width: number,
    height: number
  ) {
    return new Rect(
      center.dx - width / 2, 
      center.dy - height / 2,
      center.dx + width / 2,
      center.dy + height / 2
    )
  }

  static fromPonumbers (offsetA: Offset, offsetB: Offset) {
    return new Rect(
      Math.min(offsetA.dx, offsetB.dx),
      Math.min(offsetA.dy, offsetB.dy),
      Math.max(offsetA.dx, offsetB.dx),
      Math.max(offsetA.dy, offsetB.dy)
    )
  }

  public get left () {
    return this[0]
  }
  public set left (value: number) {
    this[0] = value
  }
  public get top () {
    return this[1]
  }
  public set top (value: number) {
    this[1] = value
  }
  public get right () {
    return this[2]
  }
  public set right (value: number) {
    this[2] = value
  }
  public get bottom () {
    return this[3]
  }
  public set bottom (value: number) {
    this[3] = value
  }

  public get width (): number {
    return this.right - this.left
  }

  public get height (): number {
    return this.bottom - this.top
  }

  public get size (): Size {
    return new Size(this.width, this.height)
  }

  public get isInfinite () {
    return (
      this.left > POSITIVE_INFINITY ||
      this.top > POSITIVE_INFINITY ||
      this.right > POSITIVE_INFINITY ||
      this.bottom > POSITIVE_INFINITY
    )
  }

  public get isFinite () {
    return (
      Number.isFinite(this.left) &&
      Number.isFinite(this.top) &&
      Number.isFinite(this.right) &&
      Number.isFinite(this.bottom) 
    )
  }

  public get isNaN () {
    return (
      Number.isNaN(this.left) ||
      Number.isNaN(this.top) ||
      Number.isNaN(this.right) || 
      Number.isNaN(this.bottom)
    )
  }

  public get isEmpty () {
    return (
      this.left >= this.right ||
      this.top >= this.bottom
    )
  }

  public get shortestSide () {
    return Math.min(
      Math.abs(this.width), 
      Math.abs(this.height)
    )
  }

  public get longestSide () {
    return Math.min(
      Math.abs(this.width), 
      Math.abs(this.height)
    )
  }

  public get topLeft (): Offset {
    return new Offset(this.left, this.top)
  }

  public get topCenter (): Offset {
    return new Offset(
      this.left + this.width / 2, 
      this.top
    )
  }

  public get topRight (): Offset {
    return new Offset(this.right, this.top)
  }

  public get centerLeft (): Offset {
    return new Offset(
      this.left,
      this.top + this.height / 2
    )
  }

  public get center (): Offset {
    return new Offset(
      this.left + this.width / 2,
      this.top + this.height / 2
    )
  }

  public get centerRight (): Offset {
    return new Offset(
      this.right,
      this.top + this.height / 2
    )
  }

  public get bottomLeft (): Offset {
    return new Offset(
      this.left,
      this.bottom,
    )
  }

  public get bottomCenter (): Offset {
    return new Offset(
      this.left + this.width / 2,
      this.bottom,
    )
  }

  public get bottomRight (): Offset {
    return new Offset(
      this.left,
      this.bottom,
    )
  }

  constructor (
    left: number, 
    top: number, 
    right: number, 
    bottom: number
  ) {
    super([left, top, right, bottom])
  }

  shift (offset: Offset) {
    return Rect.fromLTRB(
      this.left + offset.dx, 
      this.top + offset.dy,
      this.right + offset.dx,
      this.bottom + offset.dy
    )
  }

  translate (translateX: number, translateY: number) {
    return Rect.fromLTRB(
      this.left + translateX, 
      this.top + translateY,
      this.right + translateX, 
      this.bottom + translateY
    )
  }

  inflate (delta: number) {
    return Rect.fromLTRB(
      this.left - delta, 
      this.top - delta, 
      this.right + delta, 
      this.bottom + delta
    )
  }

  deflate (delta: number) {
    return this.inflate(-delta)
  }

  intersect (rect: Rect) {
    return Rect.fromLTRB(
      Math.max(this.left, rect.left),
      Math.max(this.top, rect.top),
      Math.min(this.right, rect.right),
      Math.min(this.bottom, rect.bottom),
    );
  }

  expandToInclude (rect: Rect): Rect {
    return Rect.fromLTRB(
      Math.min(this.left, rect.left),
      Math.min(this.top, rect.top),
      Math.max(this.right, rect.right),
      Math.max(this.bottom, rect.bottom)
    )
  }

  overlaps (rect: Rect): boolean {
    if (
      this.right <= rect.left ||
      rect.right <= this.left
    ) {
      return false
    }

    if (
      this.bottom <= rect.top ||
      rect.bottom <= this.top
    ) {
      return false
    }

    return true
  }

  contains (offset: Offset): boolean {
    return (
      offset.dx >= this.left &&
      offset.dx < this.right &&
      offset.dy >= this.top &&
      offset.dy < this.bottom
    )
  }

  isEqual (rect: Rect): boolean {
    if (this === rect) {
      return true
    }

    return (
      this.left === rect.left &&
      this.top === rect.top &&
      this.right === rect.right &&
      this.bottom === rect.bottom
    )
  }

  toString () {
    return `Rect.fromLTRB()`
  }

  
}

export class RRect extends Float32Array {
  static Zero = RRect.raw()
  static fromLTRBXY (
    left: number, 
    top: number, 
    right: number, 
    bottom: number,
    radiusX: number,
    radiusY: number
  ) {
    return new RRect(
      left,
      top,
      right,
      bottom,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX === radiusY
    )
  }

  static fromLTRBR (
    left: number, 
    top: number, 
    right: number, 
    bottom: number,
    radius: Radius
  ) {
    return new RRect(
      top,
      left,
      right,
      bottom,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x === radius.y
    )
  }

  static fromRectXY (
    rect: Rect,
    radiusX: number,
    radiusY: number
  ) {
    return RRect.raw(
      rect.top,
      rect.left,
      rect.right,
      rect.bottom,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX,
      radiusY,
      radiusX === radiusY
    )
  }

  static fromRectAndRadius (
    rect: Rect,
    radius: Radius
  ) {
    return RRect.raw(
      rect.top,
      rect.left,
      rect.right,
      rect.bottom,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x,
      radius.y,
      radius.x === radius.y
    )
  }

  static fromRectAndCorners (
    rect: Rect,
    topLeft: Radius = Radius.Zero,
    topRight: Radius = Radius.Zero,
    bottomRight: Radius = Radius.Zero,
    bottomLeft: Radius = Radius.Zero,
  ) {
    return RRect.raw(
      rect.top,
      rect.left,
      rect.right,
      rect.bottom,
      topLeft.x,
      topLeft.y,
      topRight.x,
      topRight.y,
      bottomLeft.x,
      bottomLeft.y,
      bottomRight.x,
      bottomRight.y,
      (
        topLeft.x === topLeft.y &&
        topLeft.x === topRight.x &&
        topLeft.x === topRight.y &&
        topLeft.x === bottomLeft.x &&
        topLeft.x === bottomLeft.y &&
        topLeft.x === bottomRight.x &&
        topLeft.x === bottomRight.y
      )
    )
  }

  static raw(
    left: number = 0.0,
    top: number = 0.0,
    right: number = 0.0,
    bottom: number = 0.0,
    tlRadiusX: number = 0.0,
    tlRadiusY: number = 0.0,
    trRadiusX: number = 0.0,
    trRadiusY: number = 0.0,
    blRadiusX: number = 0.0,
    blRadiusY: number = 0.0,
    brRadiusX: number = 0.0,
    brRadiusY: number = 0.0,
    uniformRadii: boolean = false,
  ) {

    invariant(left !== null)
    invariant(top !== null)
    invariant(right !== null)
    invariant(bottom !== null)
    invariant(tlRadiusX !== null)
    invariant(tlRadiusY !== null)
    invariant(trRadiusX !== null)
    invariant(trRadiusY !== null)
    invariant(brRadiusX !== null)
    invariant(brRadiusY !== null)
    invariant(blRadiusX !== null)
    invariant(blRadiusY !== null)

    return new RRect(
      left,
      top,
      right,
      bottom,
      tlRadiusX,
      tlRadiusY,
      trRadiusX,
      trRadiusY,
      brRadiusX,
      brRadiusY,
      blRadiusX,
      blRadiusY,
      uniformRadii,
    )
  }

  public get left () {
    return this[0]
  }
  public set left (value: number) {
    this[0] = value
  }
  public get top () {
    return this[1]
  }
  public set top (value: number) {
    this[1] = value
  }
  public get right () {
    return this[2]
  }
  public set right (value: number) {
    this[2] = value
  }
  public get bottom () {
    return this[3]
  }
  public set bottom (value: number) {
    this[3] = value
  }
  public get tlRadiusX () {
    return this[4]
  }
  public set tlRadiusX (value: number) {
    this[4] = value
  }
  public get tlRadiusY () {
    return this[5]
  }
  public set tlRadiusY (value: number) {
    this[5] = value
  }
  public get trRadiusX () {
    return this[6]
  }
  public set trRadiusX (value: number) {
    this[6] = value
  }
  public get trRadiusY () {
    return this[7]
  }
  public set trRadiusY (value: number) {
    this[7] = value
  }
  public get brRadiusX () {
    return this[8]
  }
  public set brRadiusX (value: number) {
    this[8] = value
  }
  public get brRadiusY () {
    return this[9]
  }
  public set brRadiusY (value: number) {
    this[9] = value
  }
  public get blRadiusX () {
    return this[10]
  }
  public set blRadiusX (value: number) {
    this[10] = value
  }
  public get blRadiusY () {
    return this[11]
  }
  public set blRadiusY (value: number) {
    this[11] = value
  }
  public uniformRadii: boolean = false
  public webOnlyUniformRadii: boolean

  public get tlRadius () {
    return Radius.elliptical(this.tlRadiusX, this.tlRadiusY)
  }

  public get trRadius () {
    return Radius.elliptical(this.trRadiusX, this.trRadiusY)
  }

  public get blRadius () {
    return Radius.elliptical(this.blRadiusX, this.blRadiusY)
  }

  public get brRadius () {
    return Radius.elliptical(this.brRadiusX, this.brRadiusY)
  }

  public get width () {
    return this.right - this.left
  }

  public get height () {
    return this.bottom - this.top
  }

  public get outerRect () {
    return Rect.fromLTRB(this.left, this.top, this.right, this.bottom)
  }

  public get safeInnerRect () {
    const kInsetFactor = 0.29289321881 // 1-cos(pi/4)

    const leftRadius = Math.max(this.blRadiusX, this.tlRadiusX)
    const topRadius = Math.max(this.tlRadiusY, this.trRadiusY)
    const rightRadius = Math.max(this.trRadiusX, this.brRadiusX)
    const bottomRadius = Math.max(this.brRadiusY, this.blRadiusY)

    return Rect.fromLTRB(
      this.left + leftRadius * kInsetFactor,
      this.top + topRadius * kInsetFactor,
      this.right - rightRadius * kInsetFactor,
      this.bottom - bottomRadius * kInsetFactor
    )
  }

  constructor (
    left: number = 0,
    top: number = 0,
    right: number = 0,
    bottom: number = 0,
    tlRadiusX: number = 0,
    tlRadiusY: number = 0,
    trRadiusX: number = 0,
    trRadiusY: number = 0,
    brRadiusX: number = 0,
    brRadiusY: number = 0,
    blRadiusX: number = 0,
    blRadiusY: number = 0,
    uniformRadii: boolean = false
  ) {
    super([
      left,
      top,
      right,
      bottom,
      tlRadiusX,
      tlRadiusY,
      trRadiusX,
      trRadiusY,
      brRadiusX,
      brRadiusY,
      blRadiusX,
      blRadiusY
    ])

    this.uniformRadii = uniformRadii
    this.webOnlyUniformRadii = uniformRadii
  }

  getMin (
    min: number,
    radiusA: number,
    radiusB: number,
    limit: number
  ) {
    const sum = radiusA + radiusB
    if (sum > limit && sum !== 0) {
      return Math.min(min, limit / sum)
    }

    return min
  } 

  scaleRadii () {
    let scale = 1
    const absWidth = Math.abs(this.width)
    const absHeight = Math.abs(this.height)

    scale = this.getMin(scale, this.blRadiusY, this.tlRadiusY, absHeight)
    scale = this.getMin(scale, this.tlRadiusX, this.trRadiusX, absWidth)
    scale = this.getMin(scale, this.trRadiusY, this.brRadiusY, absHeight)
    scale = this.getMin(scale, this.brRadiusX, this.blRadiusX, absWidth)

    if (scale < 1) {
      return new RRect (
        this.top,
        this.left,
        this.right,
        this.bottom,
        this.tlRadiusX * scale,
        this.tlRadiusX * scale,
        this.tlRadiusX * scale,
        this.tlRadiusX * scale,
        this.tlRadiusX * scale,
        this.tlRadiusX * scale,
        this.tlRadiusX * scale,
        this.tlRadiusX * scale
      )
    }

    return new RRect (
      this.top,
      this.left,
      this.right,
      this.bottom,
      this.tlRadiusX,
      this.tlRadiusX,
      this.tlRadiusX,
      this.tlRadiusX,
      this.tlRadiusX,
      this.tlRadiusX,
      this.tlRadiusX,
      this.tlRadiusX
    )
  }

  contains (point: Offset) {
    if (
      point.dx < this.left ||
      point.dx >= this.right ||
      point.dy < this.top ||
      point.dy >= this.bottom
    ) {
      return false
    }

     const scaled = this.scaleRadii()

    let x: number
    let y: number
    let radiusX: number
    let radiusY: number
    
    if (
      point.dx < this.left + scaled.tlRadiusX &&
      point.dy < this.top + scaled.tlRadiusY
    ) {
      x = point.dx - this.left - scaled.tlRadiusX
      y = point.dy - this.top - scaled.tlRadiusY
      radiusX = scaled.tlRadiusX
      radiusY = scaled.tlRadiusY
    } else if (
      point.dx > this.right - scaled.trRadiusX &&
      point.dy < this.top + scaled.trRadiusY
    ) {
      x = point.dx - this.right + scaled.trRadiusX
      y = point.dy - this.top - scaled.trRadiusY
      radiusX = scaled.trRadiusX
      radiusY = scaled.trRadiusY
    } else if (
      point.dx > this.right - scaled.brRadiusX &&
      point.dy > this.bottom - scaled.brRadiusY
    ) {
      x = point.dx - this.right + scaled.brRadiusX
      y = point.dy - this.bottom + scaled.brRadiusY
      radiusX = scaled.brRadiusX
      radiusY = scaled.brRadiusY
    } else if (
      point.dx < this.left + scaled.blRadiusX &&
      point.dy > this.bottom - scaled.blRadiusY
    ) {
      x = point.dx - this.left - scaled.blRadiusX
      y = point.dy - this.bottom + scaled.blRadiusY
      radiusX = scaled.blRadiusX
      radiusY = scaled.blRadiusY
    } else {
      return true
    }

    x = x / radiusX
    y = y / radiusY
    
    if (x * x + y * y > 1.0) {
      return false
    }

    return true
  }
}