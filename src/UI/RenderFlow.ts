import { invariant } from 'ts-invariant'
import { Matrix4 } from '@math/Matrix4'
import { Clip } from '@basic/Painting'
import { property } from '@helper/property'
import { Offset, Size } from '@internal/Geometry'
import { BoxConstraints, RenderBox } from './RenderBox'
import { PaintingContext, PipelineOwner } from './RenderObject'
import { Color } from '@internal/Color'
import { ClipRectLayer, LayerHandle } from './Layer'

export abstract class FlowPaintingContext {
  abstract childCount: number
  abstract getChildSize (i: number): Size | null
  abstract paintChild (i: number, transform: Matrix4, opacity: number)
}

abstract class FlowDelegate {
  abstract repaint: Listenable | null

  abstract paintChildren (context: FlowPaintingContext): void
  abstract shouldRepaint (oldDelegate: FlowDelegate): boolean

  getSize (constraints: BoxConstraints): Size {
    return constraints.biggest
  }

  getConstraintsForChild (
    i: number, 
    constraints: BoxConstraints
  ) {
    return constraints
  }

  shouldRelayout (oldDelegate: FlowDelegate): boolean {
    return false
  }
}

export type RenderFlowOptions = {
  children: RenderBox[] | null,
  delegate: FlowDelegate,
  clipBehavior: Clip
}

export class RenderFlow extends RenderBox implements FlowPaintingContext {
  @property(function (this, delegate: FlowDelegate) {
    return delegate
  }, function (this, delegate: FlowDelegate) {
    invariant(delegate !== null)
    if (this.delegate === delegate) {
      return
    }

    const oldDelegate = this.delegate
    this._delegate = delegate

    if (
      delegate !== oldDelegate.runtimeType || 
      delegate.shouldRelayout(oldDelegate)
    ) {
      this.markNeedsLayout()
    } else if (delegate.shouldRepaint(oldDelegate)) {
      this.markNeedsPaint()
    }

    if (this.attached) {
      oldDelegate.repaint?.removeListener(this.markNeedsPaint)
      delegate.repaint?.addListener(this.markNeedsPaint)
    }

  }) public delegate: FlowDelegate

  @property(function (this, clipBehavior: Clip) {
    return clipBehavior
  }, function (this, clipBehavior: Clip) {
    invariant(clipBehavior !== null)
    if (clipBehavior !== this.clipBehavior) {
      this._clipBehavior = clipBehavior
      this.markNeedsPaint()
    }
  }) public clipBehavior: Clip

  public lastPaintOrder: number[] = []
  public paintingOffset: Offset | null = null
  public randomAccessChildren: RenderBox[] = []
  public paintingContext: PaintingContext | null = null
  public clipRectLayer: LayerHandle<ClipRectLayer>  = new LayerHandle<ClipRectLayer>()

  constructor (options: RenderFlowOptions) {
    options.clipBehavior ??= Clip.HardEdge
    invariant(options.clipBehavior !== null)
    super()

    this.isRepaintBoundary = true
    this.delegate = options.delegate
    this.clipBehavior = options.clipBehavior
  }
  
  attach (owner: PipelineOwner) {
    super.attach(owner)
    this.delegate.repaint?.addListener(this.markNeedsPaint)
  }

  detach () {
    this.delegate.repaint?.removeListener(this.markNeedsPaint)
    super.detach()
  }

  getSize (constraints: BoxConstraints): Size {
    return constraints.constrain(this.delegate.getSize(constraints))
  }

  computeMinIntrinsicWidth (height: number): number {
    const width = this.getSize(BoxConstraints.tightForFinite(height)).width
    if (Number.isFinite(width)) {
      return width
    }
    return 0.0
  }

  computeMaxIntrinsicWidth (height: number) {
    const width = this.getSize(BoxConstraints.tightForFinite(height)).width
    
    if (Number.isFinite(width)) {
      return width
    }
    
    return 0.0
  }

  
  computeMinIntrinsicHeight (width: number) {
    const height = this.getSize(BoxConstraints.tightForFinite(width)).height
    if (Number.isFinite(height)) {
      return height
    }
    return 0.0
  }

  
  computeMaxIntrinsicHeight (width: number) {
    const height = this.getSize(BoxConstraints.tightForFinite(width)).height
    if (Number.isFinite(height)) {
      return height
    }
    return 0.0
  }

  
  computeDryLayout (constraints: BoxConstraints): Size {
    return this.getSize(constraints)
  }
  
  performLayout () {
    const constraints = this.constraints as BoxConstraints
    this.size = this.getSize(constraints)

    let i = 0
    let child: RenderBox | null = this.firstChild as RenderBox
    this.randomAccessChildren = []
    
    while (child !== null) {
      this.randomAccessChildren.push(child)
      const innerConstraints: BoxConstraints = this.delegate.getConstraintsForChild(i, constraints)
      child.layout(innerConstraints, true)
      
      this.offset = Offset.zero
      child = this.nextSibling as RenderBox
      i += 1
    }
  }
  
  getChildSize (i: number): Size | null {
    if (i < 0 || i >= this.randomAccessChildren.length) {
      return null
    }
    return this.randomAccessChildren[i].size
  }

  paintChild (
    i: number, 
    transform: Matrix4 | null, 
    opacity = 1.0 
  ) {
    transform ??= Matrix4.identity()
    const child = this.randomAccessChildren[i]
    
    this.lastPaintOrder.push(i)
    this.transform = transform

    if (opacity == 0.0) {
      return
    }

    const painter = (
      context: PaintingContext, 
      offset: Offset
    ) => {
      context.paintChild(child, offset)
    }

    if (opacity == 1.0) {
      this.paintingContext!.pushTransform(
        this.needsCompositing, 
        this.paintingOffset!, 
        transform, 
        painter
      )
    } else {
      this.paintingContext!.pushOpacity(
        this.paintingOffset!, 
        Color.getAlphaFromOpacity(opacity), 
        (context: PaintingContext, offset: Offset) => {
          context.pushTransform(
            this.needsCompositing, 
            offset, 
            transform!, 
            painter
          )
        }
      )
    }
  }

  paintWithDelegate (
    context: PaintingContext, 
    offset: Offset
  ) {
    this.lastPaintOrder = []
    this.paintingContext = context
    this.paintingOffset = offset

    for (const child in this.randomAccessChildren) {
      (child as unknown as RenderFlow).transform = null
    }
    try {
      this.delegate.paintChildren(this)
    } finally {
      this.paintingContext = null
      this.paintingOffset = null
    }
  }
  
  paint (
    context: PaintingContext, 
    offset: Offset
  ) {
    if (this.clipBehavior === Clip.None) {
      this.clipRectLayer.layer = null
      this.paintWithDelegate(context, offset)
    } else {
      this.clipRectLayer.layer = context.pushClipRect(
        this.needsCompositing,
        offset,
        Offset.zero.and(this.size!),
        this.paintWithDelegate,
        this.clipBehavior,
        this.clipRectLayer.layer,
      )
    }
  }

  dispose () {
    this.clipRectLayer.layer = null
    super.dispose()
  }

  applyPaintTransform (
    child: RenderBox, 
    transform: Matrix4
  ) {
    if (this.transform !== null) {
      transform.multiply(this.transform)
    }

    super.applyPaintTransform(child, transform)
  }
}
