import type { Offset } from './Offset'
import { Size } from './Size'

export const GIANT_SCALAR = 1.0E+9

export class Rect {
  static zero = new Rect(0, 0, 0, 0)
  static largest = new Rect(
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
    return new Rect(left, top, right, bottom)
  }

  static fromLTWH (
    left: number, 
    top: number, 
    width: number, 
    height: number
  ) {
    return new Rect(left, top, left + width, top + height)
  }

  static fromCircle (
    center: Offset,
    radius: number
  ) {
    return Rect.fromCenter(center, radius * 2, radius * 2)
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

  static fromPoints (offsetA: Offset, offsetB: Offset) {
    return new Rect(
      Math.min(offsetA.dx, offsetB.dx),
      Math.min(offsetA.dy, offsetB.dy),
      Math.max(offsetA.dx, offsetB.dx),
      Math.max(offsetA.dy, offsetB.dy)
    )
  }

  public left: number
  public top: number
  public right: number
  public bottom: number

  public get width () {
    return this.right - this.left
  }

  public get height () {
    return this.bottom - this.top
  }

  public get size () {
    return new Size(this.width, this.height)
  }

  public get isInfinite () {
    return (
      this.left > Number.POSITIVE_INFINITY ||
      this.top > Number.POSITIVE_INFINITY ||
      this.right > Number.POSITIVE_INFINITY ||
      this.bottom > Number.POSITIVE_INFINITY
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

  public get hasNaN () {
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

  constructor (
    left: number, 
    top: number, 
    right: number, 
    bottom: number
  ) {
    this.left = left
    this.top = top
    this.right = right
    this.bottom = bottom
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

  deflate(delta: number) {
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
}