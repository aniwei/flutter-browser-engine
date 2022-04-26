import { invariant } from 'ts-invariant'
import { OffsetBase } from './OffsetBase'

import type { bool, double } from '@Types'

const POSITIVE_INFINITY = Number.POSITIVE_INFINITY

export class Offset extends OffsetBase {
  static zero = new Offset(0, 0)
  static infinite = new Offset(
    POSITIVE_INFINITY, 
    POSITIVE_INFINITY
  )
  
  static fromDirection (
    direction: double, 
    distance: double = 1.0
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
    t: double
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
    scaleX: double, 
    scaleY: double
  ): Offset {
    return new Offset(
      this.dx * scaleX, 
      this.dy * scaleY
    )
  }

  translate (
    translateX: double, 
    translateY: double
  ) {
    return new Offset(
      this.dx + translateX, 
      this.dy + translateY
    )
  }

  plus (offset: Offset): Offset {
    return new Offset(
      this.dx + offset.dx, 
      this.dy + offset.dy
    )
  }

  subtract (offset?: Offset): Offset {
    if (typeof offset === 'undefined') {
      return new Offset(
        -this.dx, 
        -this.dy
      )
    }

    return new Offset(
      this.dx - offset.dx, 
      this.dy - offset.dy
    )
  }

  multiply (operand: double): Offset {
    return new Offset(
      this.dx * operand, 
      this.dy * operand
    )
  }

  divide (operand: double): Offset {
    return new Offset(
      this.dx / operand, 
      this.dy / operand
    )
  }

  floor (operand: double): Offset {
    return new Offset(
      Math.floor(this.dx / operand),
      Math.floor(this.dy / operand)
    )
  }

  ceil (operand: double): Offset {
    return new Offset(
      Math.ceil(this.dx / operand),
      Math.ceil(this.dy / operand)
    )
  }

  isEqual (offset: Offset): bool {
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