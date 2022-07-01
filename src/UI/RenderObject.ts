import { invariant } from 'ts-invariant' 
import { property } from '@helper'
import { Matrix4 } from '@math/Matrix4'
import { MatrixUtils } from '@math/MatrixUtils'
import { VoidCallback } from '@platform'
import { ClipContext } from '@painting'
import { Canvas, Clip, ColorFilter, Path, PictureRecorder } from '@rendering'
import { AbstractNode } from '@internal/AbstractNode'
import { Offset, Rect, RRect } from '@internal/Geometry'
import { ClipPathLayer, ClipRectLayer, ClipRRectLayer, ColorFilterLayer, ContainerLayer, Layer, LayerHandle, OffsetLayer, OpacityLayer, PictureLayer, TransformLayer } from './Layer'

export type PaintingContextCallback = { (
  context: PaintingContext,
  offset: Offset
): void }

export type RenderObjectVisitor = { (child: RenderObject): void }

export class PaintingContext extends ClipContext {
  static repaintCompositedChild (
    child: RenderObject,
    childContext?: PaintingContext | null,
  ) {
    invariant(child.needsPaint)
    invariant(child.isRepaintBoundary)

    childContext = childContext ?? null
  
    // @TODO-DEBUG

    let childLayer = child.layerHandle.layer
    if (childLayer === null) {
      invariant(child.layerHandle.layer === null)
      
      const layer = new OffsetLayer()
      child.layerHandle.layer = childLayer = layer
    } else {
      invariant(childLayer.attached)
      childLayer.removeAllChildren()
    }

    invariant(childLayer === child.layerHandle.layer)
    invariant(child.layerHandle.layer instanceof OffsetLayer)
        
    childContext ??= new PaintingContext(childLayer, child.paintBounds)
    child.paintWithContext(childContext, Offset.zero)

    invariant(childLayer === child.layerHandle.layer)
    childContext.stopRecordingIfNeeded()
  }

  public estimatedBounds: Rect
  public containerLayer: ContainerLayer

  public currentLayer: PictureLayer  | null = null
  public recorder: PictureRecorder | null = null

  @property<boolean>(function (this, v) {
    const hasCanvas = this.canvas !== null

    if (hasCanvas) {
      invariant(this.currentLayer !== null)
      invariant(this.recorder !== null)
      invariant(this.canvas !== null)
    } else {
      invariant(this.currentLayer === null)
      invariant(this.recorder === null)
      invariant(this.canvas === null)
    }

    return hasCanvas
  }) public isRecording!: boolean

  @property<Canvas>(function (this, v) {
    if (v === null) {
      this.startRecording()
    }

    invariant(this.currentLayer !== null)
    return v
  }) public canvas: Canvas | null = null

  constructor (
    containerLayer,
    estimatedBounds
  ) {
    invariant(containerLayer !== null)
    invariant(estimatedBounds !== null)
    super()

    this.containerLayer = containerLayer
    this.estimatedBounds = estimatedBounds
  }
  
  paintChild (
    child: RenderObject, 
    offset: Offset
  ) {
    
    if (child.isRepaintBoundary) {
      this.stopRecordingIfNeeded()
      this.compositeChild(child, offset)
    } else {
      child.paintWithContext(this, offset)
    }
  }

  compositeChild (
    child: RenderObject, 
    offset: Offset
  ) {
    invariant(!this.isRecording)
    invariant(child.isRepaintBoundary)
    invariant(
      this.canvas == null || 
      this.canvas!.getSaveCount() === 1
    )

    if (child.needsPaint) {
      PaintingContext.repaintCompositedChild(child)
    }
    
    invariant(child.layerHandle.layer instanceof OffsetLayer)
    const childOffsetLayer = child.layerHandle.layer! as OffsetLayer
    childOffsetLayer.offset = offset
    
    this.appendLayer(childOffsetLayer)
  }

  appendLayer (layer: Layer) {
    invariant(!this.isRecording)
    layer.remove()
    this.containerLayer?.append(layer)
  }

  startRecording () {
    invariant(!this.isRecording)
    this.currentLayer = new PictureLayer(this.estimatedBounds)
    this.recorder = new PictureRecorder()
    this.canvas = Canvas.fromPictureRecorder(this.recorder)
    this.containerLayer.append(this.currentLayer)
  }

  stopRecordingIfNeeded () {
    if (!this.isRecording) {
      return
    }
    
    this.currentLayer!.picture = this.recorder?.endRecording()!
    this.currentLayer = null
    this.recorder = null
    this.canvas = null
  }

  setIsComplexHint () {
    this.currentLayer!.isComplexHint = true
  }

  setWillChangeHint () {
    this.currentLayer!.willChangeHint = true
  }

  addLayer (layer: Layer) {
    this.stopRecordingIfNeeded()
    this.appendLayer(layer)
  }

  pushLayer (
    childLayer: ContainerLayer, 
    painter: PaintingContextCallback, 
    offset: Offset,
    childPaintBounds?: Rect | null
  ) {
    invariant(painter !== null)

    childPaintBounds = childPaintBounds ?? null
    
    if (childLayer.hasChildren) {
      childLayer.removeAllChildren()
    }
    this.stopRecordingIfNeeded()
    this.appendLayer(childLayer)
    const childContext = this.createChildContext(
      childLayer, 
      childPaintBounds ?? this.estimatedBounds
    )

    painter(childContext, offset)
    childContext.stopRecordingIfNeeded()
  }

  createChildContext (
    childLayer: ContainerLayer , 
    bounds: Rect
  ): PaintingContext {
    return new PaintingContext(childLayer, bounds)
  }

  pushClipRect (
    needsCompositing: boolean, 
    offset: Offset,
    clipRect: Rect, 
    painter: PaintingContextCallback,
    clipBehavior: Clip = Clip.HardEdge, 
    oldLayer?: ClipRectLayer | null
  ): ClipRectLayer | null {
    const offsetClipRect = clipRect.shift(offset)
    if (needsCompositing) {
      const layer = oldLayer ?? new ClipRectLayer()
      layer.clipRect = offsetClipRect
      layer.clipBehavior = clipBehavior

      this.pushLayer(
        layer, 
        painter, 
        offset, 
        offsetClipRect
      )

      return layer
    } else {
      this.clipRectAndPaint(
        offsetClipRect, 
        clipBehavior, 
        offsetClipRect,
        () => painter(this, offset)
      )

      return null
    }
  }

  pushClipRRect (
    needsCompositing: boolean, 
    offset: Offset,
    bounds: Rect, 
    clipRRect: RRect, 
    painter: PaintingContextCallback,
    clipBehavior: Clip = Clip.AntiAlias, 
    oldLayer?: ClipRRectLayer | null
  ): ClipRRectLayer | null  {
    invariant(clipBehavior !== null)
    const offsetBounds = bounds.shift(offset)
    const offsetClipRRect = clipRRect.shift(offset) //@TODO
    
    if (needsCompositing) {
      const layer = oldLayer ?? new ClipRRectLayer()
      layer.clipRRect = offsetClipRRect
      layer.clipBehavior = clipBehavior
      this.pushLayer(
        layer, 
        painter, 
        offset, 
        offsetBounds
      )
      return layer
    } else {
      this.clipRRectAndPaint(
        offsetClipRRect, 
        clipBehavior, 
        offsetBounds,
        () => painter(this, offset)
      )
      return null
    }
  }

  pushClipPath (
    needsCompositing: boolean, 
    offset: Offset, 
    bounds: Rect,
    clipPath: Path, 
    painter: PaintingContextCallback,
    clipBehavior: Clip = Clip.AntiAlias, 
    oldLayer?: ClipPathLayer | null
  ): ClipPathLayer | null {
    invariant(clipBehavior !== null)
    const offsetBounds = bounds.shift(offset)
    const offsetClipPath = clipPath.shift(offset)
    if (needsCompositing) {
      const layer = oldLayer ?? new ClipPathLayer()
      layer.clipPath = offsetClipPath
      layer.clipBehavior = clipBehavior
      this.pushLayer(
        layer, 
        painter, 
        offset, 
        offsetBounds
      )
      return layer
    } else {
      this.clipPathAndPaint(
        offsetClipPath, 
        clipBehavior, 
        offsetBounds,
        () => painter(this, offset)
      )
      return null
    }
  }

  pushColorFilter (
    offset: Offset, 
    colorFilter: ColorFilter, 
    painter: PaintingContextCallback,
    oldLayer?: ColorFilterLayer | null
  ): ColorFilterLayer {
    invariant(colorFilter !== null)
    const layer = oldLayer ?? new ColorFilterLayer()
    layer.colorFilter = colorFilter
    this.pushLayer(layer, painter, offset)
    return layer
  }

  pushTransform (
    needsCompositing: boolean, 
    offset: Offset ,
    transform: Matrix4, 
    painter: PaintingContextCallback,
    oldLayer?: TransformLayer | null
  ): TransformLayer | null {
    const effectiveTransform = Matrix4.translationValues(offset.dx, offset.dy, 0.0)
    effectiveTransform.multiply(transform)
    effectiveTransform.translate(-offset.dx, -offset.dy)

    if (needsCompositing) {
      const layer = oldLayer ?? new TransformLayer()
      layer.transform = effectiveTransform
      this.pushLayer(
        layer,
        painter,
        offset,
        MatrixUtils.inverseTransformRect(
          effectiveTransform, 
          this.estimatedBounds
        ),
      )
      return layer
    } else {
      this.canvas?.save()
      this.canvas?.transform(effectiveTransform)
      painter(this, offset)
      this.canvas?.restore()
      return null
    }
  }

  pushOpacity (
    offset: Offset, 
    alpha: number, 
    painter: PaintingContextCallback,
    oldLayer?: OpacityLayer | null
  ): OpacityLayer  {
    const layer = oldLayer ?? new OpacityLayer()
    layer.alpha = alpha
    layer.offset = offset

    this.pushLayer(layer, painter, Offset.zero)
    return layer
  }

  toString () {
    return ``
  }
}

export class PipelineOwner {
  @property<AbstractNode>(function get (this, rootNode: AbstractNode) {
    return rootNode
  }, function set (this, rootNode: AbstractNode, key) {
    if (this.rootNode === rootNode) {
      return
    }

    this.rootNode.detach()
    this._rootNode = rootNode
    this.rootNode.attach(this)
  }) public rootNode: AbstractNode | null = null

  public onNeedVisualUpdate: VoidCallback | null = null
  public onSemanticsOwnerCreated: VoidCallback | null = null
  public onSemanticsOwnerDisposed: VoidCallback | null = null

  public nodesNeedingLayout: RenderObject[] = []
  public nodesNeedingCompositingBitsUpdate: RenderObject[] = []
  public nodesNeedingPaint: RenderObject[] = []
  
  constructor (
    onNeedVisualUpdate: VoidCallback,
    onSemanticsOwnerCreated: VoidCallback,
    onSemanticsOwnerDisposed: VoidCallback,
  ) {
    this.onNeedVisualUpdate = onNeedVisualUpdate
    this.onSemanticsOwnerCreated = onSemanticsOwnerCreated
    this.onSemanticsOwnerDisposed = onSemanticsOwnerDisposed
  }

  
  requestVisualUpdate () {
    if (this.onNeedVisualUpdate) {
      this.onNeedVisualUpdate()
    }
  }

  flushLayout () {
    try {
      while (this.nodesNeedingLayout.length > 0) {
        const dirtyNodes = this.nodesNeedingLayout.sort((a: RenderObject, b: RenderObject) => {
          return a.depth - b.depth
        })
        
        this.nodesNeedingLayout = []
        for (const node of dirtyNodes) {
          if (node.needsLayout && node.owner === this)
            node.layoutWithoutResize()
        }
      }
    } finally {
      // @TODO-DEBUG
    }
  }

  enableMutationsToDirtySubtrees (callback: VoidCallback) {
    // @TODO
    try {
      callback()
    } finally {
      // @TODO
    }
  }
  
  flushCompositingBits () {
    this.nodesNeedingCompositingBitsUpdate.sort((a: RenderObject, b: RenderObject) => {
      return  a.depth - b.depth
    })
    for (const node of this.nodesNeedingCompositingBitsUpdate) {
      if (
        node.needsCompositingBitsUpdate && 
        node.owner === this
      ) {
        node.updateCompositingBits()
      }
    }
    this.nodesNeedingCompositingBitsUpdate = []
    // @TODO-DEBUG
  }
  
  flushPaint () {
    try {
      const dirtyNodes: RenderObject[] = this.nodesNeedingPaint.sort((a: RenderObject, b: RenderObject) => {
        return b.depth - a.depth
      })

      this.nodesNeedingPaint = []
      for (const node of dirtyNodes) {
        invariant(node.layerHandle.layer !== null)
        if (node.needsPaint && node.owner === this) {
          if (node.layerHandle.layer!.attached) {
            PaintingContext.repaintCompositedChild(node)
          } else {
            node.skippedPaintingOnLayer()
          }
        }
      }
      invariant(this.nodesNeedingPaint.length === 0)
    } finally {
     // @TODO-DEBUG
    }
  }
}

export abstract class Constraints {
  abstract isTight: boolean
  abstract isNormalized: boolean
}

export abstract class RenderObject extends AbstractNode {
  static cleanChildRelayoutBoundary (child: RenderObject) {
    child.cleanRelayoutBoundary()
  }

  @property<RenderObject>(function get (this, child: RenderObject) {
    return child
  }, function set (this, child: RenderObject) {
    if (this.child !== null) {
      this.dropChild(this.child)
    }
    this._child = child
    if (this.child !== null) {
      this.adoptChild(this.child)
    }
  }) public child: RenderObject | null = null

  public childCount: number = 0
  public firstChild: RenderObject | null = null
  public lastChild: RenderObject | null = null
  public previousSibling: RenderObject | null = null
  public nextSibling: RenderObject | null = null

  public needsLayout: boolean = true
  public relayoutBoundary: RenderObject | null = null
  
  public owner: PipelineOwner | null = null
  public layerHandle: LayerHandle<ContainerLayer> = new LayerHandle<ContainerLayer>()
  public needsPaint: boolean = true
  public sizedByParent: boolean = false
  public isRepaintBoundary: boolean = false
  public alwaysNeedsCompositing: boolean = false
  public needsCompositingBitsUpdate: boolean = false
  public doingThisLayoutWithCallback: boolean = false

  abstract paintBounds: Rect
  
  @property<ContainerLayer>(function (this) {
    invariant(
      this.isRepaintBoundary ||
      this.layerHandle.layer === null ||
      this.layerHandle.layer instanceof OffsetLayer
    )

    return this.layerHandle.layer
  }, function (this, layer: ContainerLayer) {
    invariant(!this.isRepaintBoundary)
    this.layerHandle.layer = layer
  }) public layer!: ContainerLayer

  @property<Constraints>(function (this, v) {
    if (v === null) {
      throw new Error(`A RenderObject does not have any constraints before it has been laid out.`)
    }

    return v
  }) public constraints: Constraints | null = null

  @property<boolean>(function (this, v) {
    invariant(!this.needsCompositingBitsUpdate)
    return v
  }) public needsCompositing: boolean

  constructor () {
    super()
    this.needsCompositing = (
      this.isRepaintBoundary || 
      this.alwaysNeedsCompositing
    )
  }

  abstract performLayout (): void
  abstract performResize (): void
  
  visitChildren (visitor: RenderObjectVisitor): void {}

  adoptChild (child: RenderObject) {
    invariant(child !== null)
    this.markNeedsLayout()
    this.markNeedsCompositingBitsUpdate()

    super.adoptChild(child)
  }

  dropChild (child: RenderObject) {
    invariant(child !== null)
    
    child.cleanRelayoutBoundary()
    super.dropChild(child)

    this.markNeedsLayout()
    this.markNeedsCompositingBitsUpdate()
  }

  layout (
    constraints: Constraints,
    parentUsesSize: boolean = false
  ) {
    // @TODO-DEBUG
    invariant(constraints !== null)

    let relayoutBoundary: RenderObject | null = null
    if (
      !parentUsesSize ||
      this.sizedByParent ||
      constraints.isTight ||
      !(this.parent instanceof RenderObject)
    ) {
      relayoutBoundary = this
    } else {
      relayoutBoundary = (this.parent as RenderObject).relayoutBoundary
    }

    if (
      this.needsLayout &&
      constraints === constraints &&
      relayoutBoundary === this.relayoutBoundary
    ) {
      // @TODO-DEBUG
      return
    }

    this.constraints = constraints

    if (
      this.relayoutBoundary !== null && 
      relayoutBoundary !== this.relayoutBoundary
    ) {
      this.visitChildren(RenderObject.cleanChildRelayoutBoundary)
    }

    this.relayoutBoundary = relayoutBoundary
    invariant(!this.doingThisLayoutWithCallback)
   
    // @TODO

    if (this.sizedByParent) {
      try {
        this.performResize()
      } catch (e) {
        // @TODO
        // _debugReportException('performResize', e, stack);
      }
    }
    
    try {
      this.performLayout()
    } catch (e: any) {
      // @TODO
      // _debugReportException('performLayout', e, stack);
    }

    this.needsLayout = false
    this.markNeedsPaint()
  }

  skippedPaintingOnLayer () {
    invariant(this.attached)
    invariant(this.isRepaintBoundary)
    invariant(this.needsPaint)
    invariant(this.layerHandle.layer !== null)
    invariant(!this.layerHandle.layer.attached)

    let node: RenderObject | null = this.parent as RenderObject
    
    while (node instanceof RenderObject) {
      if (node.isRepaintBoundary) {
        if (node.layerHandle.layer === null) {
          break
        }

        if (node.layerHandle.layer.attached) {
          break
        }

        node.needsPaint = true
      }

      node = node.parent as RenderObject
    }
  }

  scheduleInitialPaint (rootLayer: ContainerLayer) {
    invariant(rootLayer.attached)
    invariant(this.attached)
    invariant(!(this.parent instanceof RenderObject))
    invariant(this.isRepaintBoundary)
    invariant(this.layerHandle.layer === null)
    this.layerHandle.layer = rootLayer
    invariant(this.needsPaint)
    this.owner?.nodesNeedingPaint.push(this)
  }

  updateCompositingBits () {
    if (!this.needsCompositingBitsUpdate) {
      return
    }
    let oldNeedsCompositing = this.needsCompositing
    this.needsCompositing = false

    // @TODO
    // for (const child of this.children) {
    //   child.updateCompositingBits()

    //   if (child.needsCompositing) {
    //     this.needsCompositing = true
    //   }
    // }

    if (
      this.isRepaintBoundary || 
      this.alwaysNeedsCompositing
    ) {
      this.needsCompositing = true
    }
    if (oldNeedsCompositing !== this.needsCompositing) {
      this.markNeedsPaint()
    }

    this.needsCompositingBitsUpdate = false
  }

  paint (
    context: PaintingContext, 
    offset: Offset
  ) {}

  applyPaintTransform (
    child: RenderObject, 
    transform: Matrix4
  ) {
    invariant(child.parent === this)
  }

  paintWithContext (
    context: PaintingContext, 
    offset: Offset
  ) {
    if (this.needsLayout) {
      return
    }

    if (this.needsCompositingBitsUpdate) {

    }

    invariant(
      this.isRepaintBoundary ||
      this.layerHandle.layer !== null
    )

    this.needsPaint = false

    try {
      this.paint(context, offset)
      invariant(!this.needsLayout)
      invariant(!this.needsPaint)
    } catch (error) {

    }
  }

  replaceRootLayer (rootLayer: OffsetLayer) {
    invariant(rootLayer.attached)
    invariant(this.attached)
    invariant(!(this.parent instanceof RenderObject))
    invariant(this.isRepaintBoundary)
    invariant(this.layerHandle.layer !== null)

    this.layerHandle.layer!.detach()
    this.layerHandle.layer = rootLayer
    this.markNeedsPaint()
  }

  appendLayer () {

  }

  markNeedsLayout () {
    if (this.needsLayout) {
      return
    }

    invariant(this.relayoutBoundary !== null)

    if (this.relayoutBoundary !== this) {
      this.markParentNeedsLayout()
    } else {
      this.needsLayout = true
      if (this.owner !== null) {
        this.owner.nodesNeedingLayout.push(this)
        this.owner.requestVisualUpdate()
      }
    }
  }

  markParentNeedsLayout () {
    this.needsLayout = true
    invariant(this.parent !== null)

    const parent = this.parent as RenderObject

    if (this.doingThisLayoutWithCallback) {
      parent.markNeedsLayout()
    } 

    invariant(parent === this.parent)
  }

  markNeedsLayoutForSizedByParentChange () {
    this.markNeedsLayout()
    this.markParentNeedsLayout()
  }

  cleanRelayoutBoundary () {
    if (this.relayoutBoundary !== this) {
      this.relayoutBoundary = null
      this.needsLayout = true
      this.visitChildren(RenderObject.cleanChildRelayoutBoundary)
    }
  }

  markNeedsCompositingBitsUpdate () {
    if (this.needsCompositingBitsUpdate) {
      return
    }

    this.needsCompositingBitsUpdate = true
    
    if (this.parent instanceof RenderObject) {
      const parent = this.parent as RenderObject
      if (parent.needsCompositingBitsUpdate) {
        return
      }

      if (
        !this.isRepaintBoundary && 
        !parent.isRepaintBoundary
      ) {
        parent.markNeedsCompositingBitsUpdate()
        return
      }
    }
    
    const parent = this.parent
    if (parent instanceof RenderObject) {
      return parent.needsCompositing
    }
    
    if (this.owner !== null) {
      this.owner!.nodesNeedingCompositingBitsUpdate.push(this)
    }
  }

  scheduleInitialLayout () {
    invariant(this.attached)
    invariant(!(parent instanceof RenderObject))
    invariant(this.relayoutBoundary === null)
    
    this.relayoutBoundary = this
    this.owner!.nodesNeedingLayout.push(this)
  }

  layoutWithoutResize () {
    invariant(this.relayoutBoundary === this)
    invariant(!this.doingThisLayoutWithCallback)
    
    try {
      this.performLayout()
    } catch (e: any) {
      // @TODO
      // _debugReportException('performLayout', e, stack)
    }
    this.needsLayout = false
    this.markNeedsPaint()
  }


  markNeedsPaint (): void {
    if (this.needsPaint) {
      return
    }

    this.needsPaint = true

    if (this.isRepaintBoundary) {
      invariant(this.layerHandle.layer instanceof OffsetLayer)

      if (this.owner) {
        this.owner.nodesNeedingPaint.push(this)
        this.owner.requestVisualUpdate()
      }
    } else if (parent instanceof RenderObject) {
      const parent = this.parent as RenderObject
      parent?.markNeedsPaint()
      invariant(this.parent === this.parent)
    } else {
      if (this.owner !== null) {
        this.owner.requestVisualUpdate()
      }
    }
  }

  showOnScreen (
    descendant?: RenderObject | null,
    rect?: Rect | null,
    duration: number = 0,
    curve = null
    // Curve curve = Curves.ease,
  ) {
    if (this.parent instanceof RenderObject) {
      const renderParent = this.parent
      renderParent.showOnScreen(
        descendant ?? this,
        rect,
        duration,
        curve,
      );
    }
  }

  attach (owner: PipelineOwner) {
    super.attach(owner)
    
    if (
      this.needsLayout && 
      this.relayoutBoundary !== null
    ) {
      this.needsLayout = false
      this.markNeedsLayout()
    }
    if (this.needsCompositingBitsUpdate) {
      this.needsCompositingBitsUpdate = false
      this.markNeedsCompositingBitsUpdate()
    }
    if (
      this.needsPaint && 
      this.layerHandle.layer !== null
    ) {
      this.needsPaint = false
      this.markNeedsPaint()
    }

    if (this.child !== null) {
      this.child.attach(owner)
    }
  }

  detach () {
    super.detach()
    if (this.child !== null) {
      this.child.detach()
    }
  }

  redepthChildren () {
    if (this.child !== null) {
      this.redepthChild(this.child)
    }
  }

  reassemble () {
    this.markNeedsLayout()
    this.markNeedsCompositingBitsUpdate()
    this.markNeedsPaint()
    // this.markNeedsSemanticsUpdate()

    // @TODO
    // for (const child of this.children) {
    //   child.reassemble()
    // }
  }

  dispose () {
    this.layerHandle.layer = null
  }
}

export abstract class ContainerRenderObject extends RenderObject {
  

  insertAfter (
    child: RenderObject,
    afterChild?: RenderObject | null
  ) {
    invariant(child.nextSibling === null)
    invariant(child.previousSibling === null)
    this.childCount += 1
    invariant(this.childCount > 0)
    if (afterChild === null) {
      child.nextSibling = this.firstChild
      if (this.firstChild !== null) {
        this.firstChild.previousSibling = child
      }
      this.firstChild = child
      this.lastChild ??= child
    } else {
      invariant(this.firstChild !== null)
      invariant(this.lastChild !== null)
      
      if (afterChild?.nextSibling === null) {
        invariant(afterChild === this.lastChild)
        child.previousSibling = afterChild
        afterChild.nextSibling = child
        this.lastChild = child
      } else {
        child.nextSibling = afterChild?.nextSibling ?? null
        child.previousSibling = afterChild ?? null
        const previousSibling: RenderObject | null = child.previousSibling as RenderObject
        const nextSibling: RenderObject | null = child.nextSibling as RenderObject

        if (previousSibling) {
          previousSibling.nextSibling = child;
        }

        if (nextSibling) {
          nextSibling.previousSibling = child
        }

        invariant(afterChild?.nextSibling === child)
      }
    }
  }

  appendChild (
    child: RenderObject,
    afterChild?: RenderObject | null
  ) {
    invariant(child !== this as unknown as RenderObject, 'A RenderObject cannot be inserted into itself.')
    invariant(afterChild !== this as unknown as RenderObject, 'A RenderObject cannot simultaneously be both the parent and the sibling of another RenderObject.')
    invariant(child !== afterChild, 'A RenderObject cannot be inserted after itself.')
    invariant(child !== this.firstChild)
    invariant(child !== this.lastChild)
    this.insertAfter(child, afterChild)
  }

  append (child: RenderObject) {
    this.adoptChild(child)
    this.appendChild(child, this.lastChild)
  }

  appendAllChildren (children: RenderObject[]) {
    for (const child of children) {
      this.append(child)
    }
  }

  removeChild (child: RenderObject) {
    invariant(this.childCount >= 0)
    if (child.previousSibling === null) {
      
      invariant(this.firstChild === child)
      this.firstChild = child.nextSibling as RenderObject
    } else {
      const previousSibling = child.previousSibling
      previousSibling.nextSibling = child.nextSibling
    }
    if (child.nextSibling === null) {
      invariant(this.lastChild === child)
      this.lastChild = child.previousSibling as RenderObject
    } else {
      const nextSibling = child.nextSibling
      nextSibling.previousSibling = child.previousSibling
    }
    child.previousSibling = null
    child.nextSibling = null
    this.childCount -= 1
  }

  remove (child: RenderObject) {
    this.removeChild(child)
    this.dropChild(child)
  }

  removeAllChildren () {
    let child = this.firstChild
    while (child !== null) {
      const next = child.nextSibling as RenderObject
      child.previousSibling = null
      child.nextSibling = null
      this.dropChild(child)
      child = next
    }
    this.firstChild = null
    this.lastChild = null
    this.childCount = 0
  }

  move (
    child: RenderObject, 
    afterChild?: RenderObject | null
  ) {
    invariant(child !== this as unknown as RenderObject)
    invariant(afterChild !== this as unknown as RenderObject)
    invariant(child !== afterChild)
    invariant(child.parent === this)
    if (child.previousSibling === afterChild) {
      return
    }
    this.removeChild(child)
    this.insertAfter(child, afterChild)
    this.markNeedsLayout()
  }

  attach (owner: PipelineOwner) {
    super.attach(owner)
    let child = this.firstChild
    while (child !== null) {
      child.attach(owner)

      child = child.nextSibling as RenderObject
    }
  }

  detach () {
    super.detach()
    let child = this.firstChild
    while (child !== null) {
      child.detach()
      child = child.nextSibling as RenderObject
    }
  }

  redepthChildren () {
    let child = this.firstChild
    while (child !== null) {
      this.redepthChild(child)
      child = child.nextSibling as RenderObject
    }
  }

  visitChildren (visitor: RenderObjectVisitor) {
    let child = this.firstChild
    while (child !== null) {
      visitor(child)
      child = child.nextSibling as RenderObject
    }
  }

  childBefore (child: RenderObject): RenderObject | null {
    invariant(child != null)
    invariant(child.parent == this)

    return child.previousSibling as RenderObject
  }

  childAfter (child: RenderObject): RenderObject | null {
    invariant(child !== null)
    invariant(child.parent === this)
    
    return child.nextSibling as RenderObject
  }
}