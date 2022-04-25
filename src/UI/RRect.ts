import { Rect } from './Rect'
import { Offset } from './Offset'
import { Radius } from './Radius'

export class RRect {
  static zero = new RRect()
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

  public left: number
  public top: number
  public right: number
  public bottom: number
  public tlRadiusX: number
  public tlRadiusY: number
  public trRadiusX: number
  public trRadiusY: number
  public brRadiusX: number
  public brRadiusY: number
  public blRadiusX: number
  public blRadiusY: number
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