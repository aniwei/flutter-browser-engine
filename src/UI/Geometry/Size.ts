import { invariant } from 'ts-invariant'
import { OffsetBase } from './OffsetBase'

import { Offset } from './Offset'
import { lerpDouble } from '../Lerp'

const POSITIVE_INFINITY = Number.POSITIVE_INFINITY
const NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY

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

  plus (size: Size): Size {
    return new Size(
      this.dx + size.dx, 
      this.dy + size.dy
    )
  }

  subtract (size?: Size): Size {
    if (typeof size === 'undefined') {
      return new Size(
        -this.dx, 
        -this.dy
      )
    }

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