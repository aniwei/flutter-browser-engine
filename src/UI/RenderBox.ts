import { invariant } from 'ts-invariant'
import { clamp, lerpDouble, property } from '@helper'
import { CacheMap } from '@internal'
import { Offset, Size, TextBaseline } from '@rendering'
import { Matrix4, MatrixUtils, Vector3 } from '@math'
import { Constraints, ContainerRenderObject, RenderObject } from './RenderObject'
import type { EdgeInsets } from '@painting'

export enum IntrinsicDimension { 
  minWidth, 
  maxWidth, 
  minHeight, 
  maxHeight 
}

// @TODO-HITEST

export class BoxConstraints extends Constraints {
  static lerp (
    a: BoxConstraints | null = null, 
    b: BoxConstraints | null = null, 
    t: number
  ): BoxConstraints | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b!.multiply(t)
    }

    if (b === null) {
      return a.multiply(1.0 - t)
    }
    
    invariant((Number.isFinite(a.minWidth) && Number.isFinite(b.minWidth)) || (a.minWidth === Number.POSITIVE_INFINITY && b.minWidth === Number.POSITIVE_INFINITY), 'Cannot interpolate between finite constraints and unbounded constraints.')
    invariant((Number.isFinite(a.maxWidth) && Number.isFinite(b.maxWidth)) || (a.maxWidth === Number.POSITIVE_INFINITY && b.maxWidth === Number.POSITIVE_INFINITY), 'Cannot interpolate between finite constraints and unbounded constraints.')
    invariant((Number.isFinite(a.minHeight) && Number.isFinite(b.minHeight)) || (a.minHeight === Number.POSITIVE_INFINITY && b.minHeight === Number.POSITIVE_INFINITY), 'Cannot interpolate between finite constraints and unbounded constraints.')
    invariant((Number.isFinite(a.maxHeight) && Number.isFinite(b.maxHeight)) || (a.maxHeight === Number.POSITIVE_INFINITY && b.maxHeight === Number.POSITIVE_INFINITY), 'Cannot interpolate between finite constraints and unbounded constraints.')
    
    return new BoxConstraints(
      Number.isFinite(a.minWidth) ? lerpDouble(a.minWidth, b.minWidth, t)! : Number.POSITIVE_INFINITY,
      Number.isFinite(a.maxWidth) ? lerpDouble(a.maxWidth, b.maxWidth, t)! : Number.POSITIVE_INFINITY,
      Number.isFinite(a.minHeight) ? lerpDouble(a.minHeight, b.minHeight, t)! : Number.POSITIVE_INFINITY,
      Number.isFinite(a.maxHeight) ? lerpDouble(a.maxHeight, b.maxHeight, t)! : Number.POSITIVE_INFINITY,
    );
  }

  static tight (size: Size) {
    return new BoxConstraints(
      size.width,
      size.width,
      size.height,
      size.height
    )
  }

  static tightFor(
    width: number | null = null,
    height: number | null = null,
  ) {
    return new BoxConstraints(
      width ?? 0.0,
      width ?? Number.POSITIVE_INFINITY,
      height ?? 0.0,
      height ?? Number.POSITIVE_INFINITY
    )
  }

  static tightForFinite(
    width: number = Number.POSITIVE_INFINITY,
    height: number = Number.POSITIVE_INFINITY,
  ) {
    return new BoxConstraints(
      width !== Number.POSITIVE_INFINITY ? width : 0.0,
      width !== Number.POSITIVE_INFINITY ? width : Number.POSITIVE_INFINITY,
      height !== Number.POSITIVE_INFINITY ? height : 0.0,
      height !== Number.POSITIVE_INFINITY ? height : Number.POSITIVE_INFINITY
    )
  }

  static loose (size: Size) {
    return new BoxConstraints(
      0.0,
      size.width,
      0.0,
      size.height
    )
  }
    
  static expand(
    width: number | null = null,
    height: number | null = null,
  ) {
    return new BoxConstraints(
      width ?? Number.POSITIVE_INFINITY,
      width ?? Number.POSITIVE_INFINITY,
      height ?? Number.POSITIVE_INFINITY,
      height ?? Number.POSITIVE_INFINITY,
    )
  }

  public minWidth: number
  public maxWidth: number
  public minHeight: number
  public maxHeight: number

  get flipped () {
    return new BoxConstraints(
      this.minHeight,
      this.maxHeight,
      this.minWidth,
      this.maxWidth,
    )
  }

  get biggest () {
    return new Size(
      this.constrainWidth(), 
      this.constrainHeight()
    )
  }

  get smallest () {
    return new Size(
      this.constrainWidth(0.0), 
      this.constrainHeight(0.0)
    )
  } 

  get hasTightWidth () {
    return this.minWidth >= this.maxWidth
  } 
  get hasTightHeight () {
    return this.minHeight >= this.maxHeight
  } 
  get isTight () {
    return this.hasTightWidth && this.hasTightHeight
  } 
  get hasBoundedWidth () {
    return this.maxWidth < Number.POSITIVE_INFINITY
  } 
  get hasBoundedHeight () {
    return this.maxHeight < Number.POSITIVE_INFINITY
  } 
  get hasInfiniteWidth () {
    return this.minWidth >= Number.POSITIVE_INFINITY
  } 
  get hasInfiniteHeight () {
    return this.minHeight >= Number.POSITIVE_INFINITY
  } 

  constructor (
    minWidth: number = 0.0,
    maxWidth: number = Number.POSITIVE_INFINITY,
    minHeight: number = 0.0,
    maxHeight: number = Number.POSITIVE_INFINITY,
  ) {
    super()
    invariant(minWidth !== null)
    invariant(maxWidth !== null)
    invariant(minHeight !== null)
    invariant(maxHeight !== null)

    this.minWidth = minWidth
    this.maxWidth = maxWidth
    this.minHeight = minHeight
    this.maxHeight = maxHeight
  }

  tighten(
    width: number | null = null, 
    height: number | null = null 
  ): BoxConstraints {
    return new BoxConstraints(
      width === null ? this.minWidth : clamp(width, this.minWidth, this.maxWidth),
      width === null ? this.maxWidth : clamp(width, this.minWidth, this.maxWidth),
      height === null ? this.minHeight : clamp(height, this.minHeight, this.maxHeight),
      height === null ? this.maxHeight : clamp(height, this.minHeight, this.maxHeight),
    )
  }


  copyWith(
    minWidth: number | null = null,
    maxWidth: number | null = null,
    minHeight: number | null = null,
    maxHeight: number | null = null,
  ) {
    return new BoxConstraints(
      minWidth ?? this.minWidth,
      maxWidth ?? this.maxWidth,
      minHeight ?? this.minHeight,
      maxHeight ?? this.maxHeight,
    );
  }

  deflate (edges: EdgeInsets) {
    invariant(edges !== null)
    const horizontal: number = edges.horizontal
    const vertical: number = edges.vertical
    const deflatedMinWidth: number = Math.max(0.0, this.minWidth - horizontal)
    const deflatedMinHeight: number = Math.max(0.0, this.minHeight - vertical)

    return new BoxConstraints(
      deflatedMinWidth,
      Math.max(deflatedMinWidth, this.maxWidth - horizontal),
      deflatedMinHeight,
      Math.max(deflatedMinHeight, this.maxHeight - vertical),
    )
  }

  loosen (): BoxConstraints {
    return new BoxConstraints(
      0.0,
      this.maxWidth,
      0.0,
      this.maxHeight,
    )
  }

  enforce (constraints: BoxConstraints): BoxConstraints {
    return new BoxConstraints(
      clamp(this.minWidth, constraints.minWidth, constraints.maxWidth),
      clamp(this.maxWidth, constraints.minWidth, constraints.maxWidth),
      clamp(this.minHeight, constraints.minHeight, constraints.maxHeight),
      clamp(this.maxHeight, constraints.minHeight, constraints.maxHeight),
    )
  }
  
  widthConstraints (): BoxConstraints  {
    return new BoxConstraints(
      this.minWidth, 
      this.maxWidth
    )
  }

  heightConstraints (): BoxConstraints {
    return new BoxConstraints(
      0.0,
      Number.POSITIVE_INFINITY,
      this.minHeight, 
      this.maxHeight
    )
  }

  constrainWidth (width: number = Number.POSITIVE_INFINITY) {
    return clamp(
      width, 
      this.minWidth, 
      this.maxWidth
    )
  }

  constrainHeight (height = Number.POSITIVE_INFINITY) {
    return clamp(
      height, 
      this.minHeight, 
      this.maxHeight
    )
  }

  constrain (size: Size): Size {
    const result: Size = new Size(
      this.constrainWidth(size.width), 
      this.constrainHeight(size.height)
    )

    return result
  }

  constrainDimensions (
    width: number, 
    height: number
  ): Size {
    return new Size(
      this.constrainWidth(width), 
      this.constrainHeight(height)
    )
  }

  constrainSizeAndAttemptToPreserveAspectRatio (size: Size) {
    if (this.isTight) {
      const result = this.smallest
      return result
    }

    let width = size.width
    let height = size.height
    invariant(width > 0.0)
    invariant(height > 0.0)
    const aspectRatio = width / height

    if (width > this.maxWidth) {
      width = this.maxWidth
      height = width / aspectRatio
    }

    if (height > this.maxHeight) {
      height = this.maxHeight
      width = height * aspectRatio
    }

    if (width < this.minWidth) {
      width = this.minWidth
      height = width / aspectRatio
    }

    if (height < this.minHeight) {
      height = this.minHeight
      width = height * aspectRatio
    }

    const result = new Size(
      this.constrainWidth(width), 
      this.constrainHeight(height)
    )
    
    return result
  }

  isSatisfiedBy (size: Size) {
    return (
      this.minWidth <= size.width && 
      size.width <= this.maxWidth &&
      this.minHeight <= size.height && 
      size.height <= this.maxHeight
    )
  }

  multiply (factor: number) {
    return new BoxConstraints(
     this.minWidth * factor,
     this.maxWidth * factor,
     this.minHeight * factor,
     this.maxHeight * factor,
    )
  }

  divide (factor: number) {
    return new BoxConstraints(
      this.minWidth / factor,
      this.maxWidth / factor,
      this.minHeight / factor,
      this.maxHeight / factor,
    )
  }

  module (value: number) {
    return new BoxConstraints(
      this.minWidth % value,
      this.maxWidth % value,
      this.minHeight % value,
      this.maxHeight % value,
    )
  }

  get isNormalized () {
    return (
      this.minWidth >= 0.0 &&
      this.minWidth <= this.maxWidth &&
      this.minHeight >= 0.0 &&
      this.minHeight <= this.maxHeight
    )
  }

  normalize (): BoxConstraints  {
    if (this.isNormalized) {
      return this;
    }
    const minWidth = this.minWidth >= 0.0 ? this.minWidth : 0.0
    const minHeight = this.minHeight >= 0.0 ? this.minHeight : 0.0
    return new BoxConstraints(
      minWidth,
      minWidth > this.maxWidth ? minWidth : this.maxWidth,
      minHeight,
      minHeight > this.maxHeight ? minHeight : this.maxHeight,
    );
  }

  eq (other: BoxConstraints) {
    if (this === other) {
      return true
    }
    
    return (
      other instanceof BoxConstraints &&
      other.minWidth === this.minWidth &&
      other.maxWidth === this.maxWidth &&
      other.minHeight === this.minHeight &&
      other.maxHeight === this.maxHeight
    )
  }
  
  toString () {
    return ``
  }
}

export class IntrinsicDimensionsCacheEntry {
  public dimension: IntrinsicDimension
  public argument: number


  constructor (
    dimension: IntrinsicDimension,
    argument: number
  ) {
    this.dimension = dimension
    this.argument = argument
  }

  
  eq (other: IntrinsicDimensionsCacheEntry) {
    return (
      other instanceof IntrinsicDimensionsCacheEntry &&
      other.dimension === this.dimension &&
      other.argument === this.argument
    )
  }
}

export abstract class RenderBox extends ContainerRenderObject {
  static dryLayoutCalculationValid: boolean = true

  @property<Size>(function get (this, size: Size) {
    invariant(this.hasSize, `RenderBox was not laid out: ${this.toString()}`)
    return size
  }, function set (this, size: Size) {
    this._size = size
  }) public size: Size | null = null

  public offset: Offset = Offset.zero
  public computingThisDryLayout: boolean = false
  public cachedDryLayoutSizes: CacheMap<BoxConstraints, Size> | null = null
  public cachedIntrinsicDimensions: CacheMap<IntrinsicDimensionsCacheEntry, number> | null = null
  public cachedBaselines: Map<TextBaseline, number | null> | null = null

  public get paintBounds () {
    return Offset.zero.and(this.size!)
  }

  get hasSize () {
    return this.size !== null
  }

  computeIntrinsicDimension (
    dimension: IntrinsicDimension, 
    argument: number, 
    computer: { (argument: number): number }
  ) {
    let shouldCache = true
    
    if (shouldCache) {
      this.cachedIntrinsicDimensions ??= new CacheMap<IntrinsicDimensionsCacheEntry, number>()
      const result = this.cachedIntrinsicDimensions.putIfAbsent(
        new IntrinsicDimensionsCacheEntry(dimension, argument), 
        computer(argument)
      )

      // @TODO-DEBUG
      return result
    }

    return computer(argument)
  }

  getMinIntrinsicWidth (height: number) {
    return this.computeIntrinsicDimension(
      IntrinsicDimension.minWidth, 
      height, 
      this.computeMinIntrinsicWidth
    )
  }

  
  computeMinIntrinsicWidth (height: number) {
    return 0.0
  }

  getMaxIntrinsicWidth (height: number) {
    
    return this.computeIntrinsicDimension(
      IntrinsicDimension.maxWidth, 
      height, 
      this.computeMaxIntrinsicWidth
    )
  }

  computeMaxIntrinsicWidth (height: number): number {
    return 0.0
  }

  getMinIntrinsicHeight (width: number): number {
    return this.computeIntrinsicDimension(
      IntrinsicDimension.minHeight, 
      width, 
      this.computeMinIntrinsicHeight
    )
  }

  
  computeMinIntrinsicHeight (width: number) {
    return 0.0
  }

  getMaxIntrinsicHeight (width: number) {
    return this.computeIntrinsicDimension(
      IntrinsicDimension.maxHeight, 
      width, 
      this.computeMaxIntrinsicHeight
    )
  }

  computeMaxIntrinsicHeight (width: number) {
    return 0.0
  }

  getDryLayout (constraints: BoxConstraints ): Size {
    let shouldCache: boolean = true
    
    if (shouldCache) {
      this.cachedDryLayoutSizes ??= new CacheMap<BoxConstraints, Size>()
      const result = this.cachedDryLayoutSizes.putIfAbsent(constraints, this.computeDryLayout(constraints))
      // @TODO-DEBUG
      return result
    }
    return this.computeDryLayout(constraints);
  }

  computeDryLayout (constraints: BoxConstraints) {
    const result = Size.zero
    return result
  }
  
  get semanticBounds () {
    return Offset.zero.and(this.size!)
  }
  
  getDistanceToBaseline (
    baseline: TextBaseline, 
    onlyReal = false 
  ): number | null {
    const result = this.getDistanceToActualBaseline(baseline)
    if (result === null && !onlyReal) {
      return this.size!.height
    }
    return result
  }

  getDistanceToActualBaseline (baseline: TextBaseline): number | null {
    this.cachedBaselines ??= new Map<TextBaseline, number | null>()

    if (!this.cachedBaselines.has(baseline)) {
      this.cachedBaselines.set(baseline, this.computeDistanceToActualBaseline(baseline))
    }

    return this.cachedBaselines.get(baseline) ?? null
  }

 
  computeDistanceToActualBaseline (baseline: TextBaseline): number | null {
    return null
  }
  
  markNeedsLayout() {
    if (
      (
        this.cachedBaselines !== null && 
        this.cachedBaselines.size > 0
      ) ||
      (
        this.cachedIntrinsicDimensions !== null && 
        this.cachedIntrinsicDimensions.size > 0
      ) ||
      (
        this.cachedDryLayoutSizes !== null && 
        this.cachedDryLayoutSizes.size > 0
      )
    ) {
      this.cachedBaselines?.clear()
      this.cachedIntrinsicDimensions?.clear()
      this.cachedDryLayoutSizes?.clear()
      
      if (parent instanceof RenderObject) {
        this.markParentNeedsLayout()
        return
      }
    }

    super.markNeedsLayout()
  }

  
  performResize() {
    this.size = this.computeDryLayout(this.constraints as BoxConstraints)
    // @TODO 
    // invariant(this.size.isFinite);
  }

  
  performLayout () {}

  
  applyPaintTransform (
    child: RenderObject, 
    transform: Matrix4
  ) {
    invariant(child !== null)
    invariant(child.parent === this)
    
    const offset = this.offset
    transform.translate(offset.dx, offset.dy)
  }

  getTransformTo (ancestor?: RenderObject | null) {
    const ancestorSpecified = ancestor !== null
    invariant(this.attached)
    if (ancestor === null) {
      const rootNode = this.owner!.rootNode
      if (rootNode instanceof RenderObject) {
        ancestor = rootNode
      }
    }

    const renderers: RenderObject[] = []
    for (
      let renderer = this as RenderObject;
      renderer !== ancestor;
      renderer = renderer.parent! as RenderObject
    ) {
      renderers.push(renderer)
      invariant(renderer.parent !== null)
    }

    if (ancestorSpecified) {
      renderers.push(ancestor!)
    }
    const transform = Matrix4.identity()

    for (let index = renderers.length - 1; index > 0; index -= 1) {
      renderers[index].applyPaintTransform(renderers[index - 1], transform)
    }

    return transform
  }

  globalToLocal (
    point: Offset, 
    ancestor: RenderObject | null 
  ) {
    const transform: Matrix4 = this.getTransformTo(ancestor)
    const det = transform.invert()
    if (det === 0.0) {
      return Offset.zero
    }

    const n = new Vector3([0.0, 0.0, 1.0])
    const i = transform.perspectiveTransform(new Vector3([0.0, 0.0, 0.0]))
    const d = transform.perspectiveTransform(new Vector3([0.0, 0.0, 1.0]))
    const s = transform.perspectiveTransform(new Vector3([point.dx, point.dy, 0.0]))

    d.divide(i)
    d.multiply(n.dot(s).divide(n.dot(d)))
    s.substract(d)

    return new Offset(s.x, s.y)
  }

  localToGlobal (
    point: Offset, 
    ancestor: RenderObject | null
  ) {
    return MatrixUtils.transformPoint(this.getTransformTo(ancestor), point);
  }  
  // @TODO-EVENT
}



