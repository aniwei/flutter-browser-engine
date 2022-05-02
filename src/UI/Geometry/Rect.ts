import { Size } from './Size'

import { Offset } from './Offset'

const GIANT_SCALAR = 1.0E+9
const POSITIVE_INFINITY = Number.POSITIVE_INFINITY


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

  public left: number
  public top: number
  public right: number
  public bottom: number

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

  deflate (delta: number) {
    return this.inflate(-delta)
  }

  numberersect (rect: Rect) {
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