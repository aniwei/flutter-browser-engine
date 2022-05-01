import { Rect } from './Rect'
import { Offset } from './Offset'
import { Radius } from './Radius'

import { bool, double } from '@Types'

export class RRect {
  static zero = new RRect()
  static fromLTRBXY (
    left: double, 
    top: double, 
    right: double, 
    bottom: double,
    radiusX: double,
    radiusY: double
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
    left: double, 
    top: double, 
    right: double, 
    bottom: double,
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
    radiusX: double,
    radiusY: double
  ) {
    return new RRect(
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
    return new RRect(
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
      radius.y
    )
  }

  // TODO
  static fromRectAndCorners (
    rect: Rect,
  ) {

  }

  public left: double
  public top: double
  public right: double
  public bottom: double
  public tlRadiusX: double
  public tlRadiusY: double
  public trRadiusX: double
  public trRadiusY: double
  public brRadiusX: double
  public brRadiusY: double
  public blRadiusX: double
  public blRadiusY: double
  public uniformRadii: boolean

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
    left: double = 0,
    top: double = 0,
    right: double = 0,
    bottom: double = 0,
    tlRadiusX: double = 0,
    tlRadiusY: double = 0,
    trRadiusX: double = 0,
    trRadiusY: double = 0,
    brRadiusX: double = 0,
    brRadiusY: double = 0,
    blRadiusX: double = 0,
    blRadiusY: double = 0,
    uniformRadii: bool = false
  ) {
    this.left = left 
    this.top = top 
    this.right = right 
    this.bottom = bottom 
    this.tlRadiusX = tlRadiusX 
    this.tlRadiusY = tlRadiusY 
    this.trRadiusX = trRadiusX 
    this.trRadiusY = trRadiusY 
    this.brRadiusX = brRadiusX 
    this.brRadiusY = brRadiusY 
    this.blRadiusX = blRadiusX 
    this.blRadiusY = blRadiusY 
    this.uniformRadii = uniformRadii 
  }

  getMin (
    min: double,
    radiusA: double,
    radiusB: double,
    limit: double
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