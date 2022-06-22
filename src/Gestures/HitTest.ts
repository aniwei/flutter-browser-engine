import invariant from 'ts-invariant'
import { Matrix4 } from '@math'
import { Offset } from '@rendering'

export abstract class HitTestable {
  abstract hitTest (
    result: HitTestResult, 
    position: Offset
  ): void
}

export abstract class HitTestDispatcher {
  abstract dispatchEvent(
    event: PointerEvent, 
    result: HitTestResult
  ): void
}

export abstract class HitTestTarget {
  abstract handleEvent (
    event: PointerEvent, 
    entry: HitTestEntry
  ): void
}


export class HitTestEntry {
  public target: HitTestTarget 
  public transform: Matrix4 | null = null

  constructor (target) {
    this.target = target
  }

  toString () {
    return ``
  }
}


export abstract class TransformPart {
  abstract multiply (rhs: Matrix4)
}


export class HitTestResult {


  public path: HitTestEntry[]
  public transforms: Matrix4[]
  public localTransforms: TransformPart[]

  constructor () {
    this.path = []
    this.transforms = [Matrix4.identity()]
    this.localTransforms = []
  }
  
  static wrap (result: HitTestResult) {
      const hitTestResult = new HitTestResult()

      hitTestResult.path = result.path
      hitTestResult.transforms = result.transforms
      hitTestResult.localTransforms = result.localTransforms

      return HitTestResult
  }

  globalizeTransforms () {
    if (this.localTransforms.length === 0) {
      return
    }
    let last = this.transforms[this.transforms.length - 1]
    for (const part of this.localTransforms) {
      last = part.multiply(last)
      this.transforms.push(last)
    }
    this.localTransforms = []
  }

  get lastTransform () {
    this.globalizeTransforms()
    invariant(this.localTransforms.length === 0)
    return this.transforms[this.transforms.length - 1]
  }

  add (entry: HitTestEntry) {
    invariant(entry.transform === null)
    entry.transform = this.lastTransform
    this.path.push(entry)
  }

  pushTransform (transform: Matrix4) {
    invariant(transform !== null)
    
    this.localTransforms.push(new MatrixTransformPart(transform))
  }

  pushOffset (offset: Offset) {
    invariant(offset !== null)
    this.localTransforms.push(new OffsetTransformPart(offset))
  }

  popTransform () {
    if (this.localTransforms.length > 0) {
      this.localTransforms.pop()
    } else {
      this.transforms.pop()
    }
    invariant(this.transforms.length > 0)
  }

  toString () {
    // @TODO
    return ``
  }
}

export class MatrixTransformPart extends TransformPart {
  public matrix: Matrix4
  constructor (matrix: Matrix4) {
    super()
    this.matrix = matrix
  }

  multiply (rhs: Matrix4) {
    return this.matrix.multiply(rhs)
  }
}

export class OffsetTransformPart extends TransformPart {
  

  public offset:  Offset
  constructor (offset: Offset) {
    super()
    this.offset = offset
  }

  multiply (rhs: Matrix4) {
    const r = rhs.clone()
    r.leftTranslate(this.offset.dx, this.offset.dy)
    return r
  }
}