/*
 * @Author: Aniwei
 * @Date: 2022-06-29 17:18:02
 */
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { Skia } from '@skia/binding'
import { Matrix4 } from '@math/Matrix4'
import { Offset, Radius, Rect, RRect } from '@internal/Geometry'
import { toMallocedSkiaPoints, toSkiaMatrix } from '@helper/skia'

import type { PathOp, IPath, FillType } from '@skia'
/**
 * @description: 路径类
 * @return {*}
 */
export class Path extends ManagedSkiaObject<IPath> {
  /**
   * @description: 从路径创建新的路径对象
   * @param {Path} other
   * @return {*}
   */  
  static from (other: Path) {
    const path = new Path(other.skia?.copy())
    path.fillType = other.fillType
    return path
  }
  
  /**
   * @description: 
   * @param {IPath} skia
   * @param {FillType} fillType
   * @return {*}
   */
  static fromSkia (
    skia: IPath, 
    fillType: FillType
  ) {
    const path = new Path(skia)
    path.fillType = fillType
    return path
  }

  
  /**
   * @description: 
   * @param {PathOp} operation
   * @param {Path} pathA
   * @param {Path} pathB
   * @return {*}
   */
  static combine(
    operation: PathOp,
    pathA: Path,
    pathB: Path,
  ) {
    const skia = Skia.binding.Path.MakeFromOp(
      pathA.skia!,
      pathB.skia!,
      operation,
    )
    return Path.fromSkia(skia!, pathA.fillType)
  }

  /**
   * @description: 填充类型
   */  
  public _fileType: FillType = Skia.binding.FillType.Winding 
  public set fillType (fillType: FillType) {
    this.skia?.setFillType(fillType)
    this._fileType = fillType
  }
  public get fillType (): FillType {
    return this._fileType
  }
  
  public cachedCommands: Float32Array | null = null

  /**
   * @description: 
   * @param {Rect} oval
   * @param {number} startAngle
   * @param {number} sweepAngle
   * @return {*}
   */
  addArc (
    oval: Rect,
    startAngle: number,
    sweepAngle: number
  ): void {
    const degrees = 180 / Math.PI

    this.skia?.addArc(
      oval, 
      startAngle * degrees, 
      sweepAngle * degrees
    )
  }

  /**
   * @description: 
   * @param {Rect} oval
   * @return {*}
   */  
  addOval (oval: Rect) {
    this.skia?.addOval(oval, false, 1)
  }

  /**
   * @description: 
   * @param {Path} path
   * @param {Offset} offset
   * @param {Matrix4} matrix4
   * @return {*}
   */
  addPath (
    path: Path,
    offset: Offset,
    matrix4?: Matrix4 | null
  ) {
    matrix4 ??= null
    let matrix: Float32Array
    if (matrix4 === null) {
      matrix = toSkiaMatrix(
        Matrix4.translationValues(
          offset.dx,
          offset.dy,
          0
        )
      )
    } else {
      matrix = toSkiaMatrix(matrix4)
      matrix[2] += offset.dx
      matrix[5] += offset.dy
    }

    this.skia?.addPath(
      path.skia,
      matrix[0],
      matrix[1],
      matrix[2],
      matrix[3],
      matrix[4],
      matrix[5],
      matrix[6],
      matrix[7],
      matrix[8],
      false
    )
  }

  
  /**
   * @description: 
   * @param {Offset} points
   * @param {boolean} close
   * @return {*}
   */
  addPolygon (
    points: Offset[],
    close: boolean
  ): Path {
    this.skia?.addPoly(
      toMallocedSkiaPoints(points), 
      close
    )

    return this
  }

  /**
   * @description: 
   * @param {RRect} rrect
   * @return {*}
   */
  addRRect (rrect: RRect) {
    this.skia?.addRRect(
      rrect,
      false,
    )
  }

  /**
   * @description: 
   * @param {Rect} rect
   * @return {*}
   */
  addRect (rect: Rect) {
    this.skia?.addRect(rect)
  }

  /**
   * @description: 
   * @param {Rect} rect
   * @param {number} startAngle
   * @param {number} sweepAngle
   * @param {boolean} forceMoveTo
   * @return {*}
   */
  arcTo(
    rect: Rect, 
    startAngle: number, 
    sweepAngle: number, 
    forceMoveTo: boolean
  ) {
    const degrees = 180 / Math.PI
    this.skia?.arcToOval(
      rect,
      startAngle * degrees,
      sweepAngle * degrees,
      forceMoveTo,
    )
  }

  /**
   * @description: 
   * @param {Offset} arcEnd
   * @param {Radius} radius
   * @param {number} rotation
   * @param {boolean} largeArc
   * @param {boolean} clockwise
   * @return {*}
   */
  arcToPoint(
    arcEnd: Offset,
    radius: Radius = Radius.zero,
    rotation: number = 0.0,
    largeArc: boolean = false,
    clockwise: boolean = true
  ) {
    this.skia?.arcToRotated(
      radius.x,
      radius.y,
      rotation,
      !largeArc,
      !clockwise,
      arcEnd.dx,
      arcEnd.dy,
    )
  }

  /**
   * @description: 
   * @param {boolean} forceClosed
   * @return {*}
   */
  computeMetrics (forceClosed: boolean = false) {
    // TOFIN
    // return new PathMetrics(this, forceClosed)
  }


  /**
   * @description: 
   * @param {Offset} point
   * @return {*}
   */
  contains (point: Offset) {
    return this.skia?.contains(point.dx, point.dy)
  }

  /**
   * @description: 
   * @param {Path} path
   * @param {Offset} offset
   * @param {Matrix4} matrix4
   * @return {*}
   */
  extendWithPath (
    path: Path, 
    offset: Offset, 
    matrix4?: Matrix4 | null
  ) {
    matrix4 ??= null
    let matrix: Float32Array
    if (matrix4 === null) {
      matrix = toSkiaMatrix(
        Matrix4.translationValues(
          offset.dx, 
          offset.dy, 
          0.0
        )
      )
    } else {
      matrix = toSkiaMatrix(matrix4)
      matrix[2] += offset.dx
      matrix[5] += offset.dy
    }
    
    this.skia?.addPath(
      path.skia,
      matrix[0],
      matrix[1],
      matrix[2],
      matrix[3],
      matrix[4],
      matrix[5],
      matrix[6],
      matrix[7],
      matrix[8],
      true,
    )
  }

  /**
   * @description: 
   * @return {*}
   */
  getBounds (): Rect {
    const sk = this.skia!.getBounds()
    return Rect.fromLTRB(sk[0], sk[1], sk[2], sk[3])
  }

  /**
   * @description: 
   * @param {number} x
   * @param {number} y
   * @return {*}
   */
  lineTo (
    x: number, 
    y: number
  ) {
    this.skia?.lineTo(x, y)
  }

  /**
   * @description: 
   * @param {number} x
   * @param {number} y
   * @return {*}
   */
  moveTo (
    x: number, 
    y: number
  ) {
    this.skia?.moveTo(x, y)
  }

  /**
   * @description: 
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {*}
   */
  quadraticBezierTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number
  ) {
    this.skia?.quadTo(x1, y1, x2, y2)
  }

  /**
   * @description: 
   * @param {Offset} arcEndDelta
   * @param {Radius} radius
   * @param {number} rotation
   * @param {boolean} largeArc
   * @param {boolean} clockwise
   * @return {*}
   */
  relativeArcToPoint (
    arcEndDelta: Offset,
    radius: Radius = Radius.zero,
    rotation: number = 0.0,
    largeArc: boolean = false,
    clockwise: boolean = true
  ) {
    this.skia?.rArcTo(
      radius.x,
      radius.y,
      rotation,
      !largeArc,
      !clockwise,
      arcEndDelta.dx,
      arcEndDelta.dy,
    )
  }

  /**
   * @description: 
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @param {number} w
   * @return {*}
   */
  relativeConicTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    w: number
  ) {
    this.skia?.rConicTo(x1, y1, x2, y2, w)
  }

  /**
   * @description: 
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @param {number} x3
   * @param {number} y3
   * @return {*}
   */
  relativeCubicTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    x3: number, 
    y3: number
  ) {
    this.skia?.rCubicTo(x1, y1, x2, y2, x3, y3)
  }

  /**
   * @description: 
   * @param {number} dx
   * @param {number} dy
   * @param {number} dy
   * @return {*}
   */
  relativeLineTo (
    dx: number, 
    dy: number
  ) {
    this.skia?.rLineTo(dx, dy)
  }

  relativeMoveTo (
    dx: number, 
    dy: number
  ) {
    this.skia?.rMoveTo(dx, dy)
  }

  /**
   * @description: 
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {*}
   */
  relativeQuadraticBezierTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number
  ) {
    this.skia?.rQuadTo(x1, y1, x2, y2)
  }

  /**
   * @description: 
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @param {number} w
   * @return {*}
   */
  conicTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    w: number
  ) {
    this.skia?.conicTo(x1, y1, x2, y2, w)
  }

  /**
   * @description: 
   * @param {Matrix4} matrix4
   * @return {*}
   */
  transform (matrix4: Matrix4) {
    const skia = this.skia?.copy()
    const m = toSkiaMatrix(matrix4)
    
    skia?.transform(
      m[0],
      m[1],
      m[2],
      m[3],
      m[4],
      m[5],
      m[6],
      m[7],
      m[8],
    )
    return Path.fromSkia(skia!, this.fillType)
  }

  /**
   * @description: 
   * @param {Offset} offset
   * @return {*}
   */
  shift (offset: Offset) {
    const skia = this.skia?.copy()
    skia?.transform(
      1.0, 0.0, offset.dx,
      0.0, 1.0, offset.dy,
      0.0, 0.0, 1.0,
    )
    return Path.fromSkia(skia!, this.fillType)
  }

  /**
   * @description: 
   * @return {*}
   */
  close () {
    this.skia?.close()
  }

  /**
   * @description: 
   * @return {*}
   */
  reset () {
    this._fileType = Skia.binding.FillType.Winding
    this.skia?.close()
  }

  /**
   * @description: 
   * @return {*}
   */
  toSVGString (): string | null {
    return this.skia?.toSVGString() ?? null
  }

  /**
   * @description: 
   * @return {*}
   */
  resurrect(): IPath {
    const path = Skia.binding.Path.MakeFromCmds(this.cachedCommands as Float32Array)
    path?.setFillType(this.fillType)
    return path as IPath
  }
}


