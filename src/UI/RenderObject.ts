import { invariant } from 'ts-invariant' 
import { Canvas, Clip, ColorFilter, Offset, Path, PictureRecorder, Rect, RRect } from '@rendering'
import { Matrix4 } from '@math'
import { ClipPathLayer, ClipRectLayer, ClipRRectLayer, ColorFilterLayer, ContainerLayer, Layer, OffsetLayer, PictureLayer, TransformLayer } from './Layer'
import { property } from '@helper'
import { VoidCallback } from '@platform'

export type PaintingContextCallback = { (
  context: PaintingContext,
  offset: Offset
): void }

export class ParentData {
  detach () {}
  toString () {
    return '<none>'
  }
}

export class PaintingContext {
  static repaintCompositedChild(
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
    this.canvas = Canvas.malloc(this.recorder)
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
    painter: PaintingContextCallback ,
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
      // @TODO
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
      clipRRectAndPaint(
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
      clipPathAndPaint(
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
          estimatedBounds
        ),
      )
      return layer
    } else {
      this.canvas.save()
      this.canvas.transform(effectiveTransform)
      painter(this, offset)
      this.canvas.restore()
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
    this[key] = rootNode
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

  enableMutationsToDirtySubtrees (callback: VoidCallback ) {
    // @TODO
  }
  
  flushCompositingBits () {
    this.nodesNeedingCompositingBitsUpdate.sort((a: RenderObject, b: RenderObject) {
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

export abstract class AbstractNode {
  @property<boolean>(function get (this) {
    return this.owner !== null
  }) public attached!: boolean

  public depth = 0
  public owner: PipelineOwner | null = null
  public parent: AbstractNode | null = null

  redepthChild (child: AbstractNode) {
    invariant(child.owner === this.owner)

    if (child.depth <= this.depth) {
      child.depth = this.depth + 1
      child.redepthChildren()
    }
  }

  redepthChildren () {}

  attach (owner: PipelineOwner) {
    invariant(owner !== null)
    invariant(this.owner === null)
    this.owner = owner
  }

  detach () {
    invariant(this.owner !== null)
    this.owner = null
    invariant(parent === null || this.attached === this.parent!.attached)
  }

  adoptChild (child: AbstractNode) {
    invariant(child !== null)
    invariant(child.parent == null)
    invariant((() => {
      let node: AbstractNode = this
      while (node.parent !== null) {
        node = node.parent!
      }
      invariant(node !== child)
      return true
    })())

    child.parent = this
    if (this.attached) {
      child.attach(this.owner!)
    }
    this.redepthChild(child)
  }

  dropChild (child: AbstractNode) {
    invariant(child !== null)
    invariant(child.parent === this)
    invariant(child.attached === this.attached)
    child.parent = null
    if (this.attached) {
      child.detach()
    }
  }
}

export abstract class RenderObject extends AbstractNode {
  static debugCheckingIntrinsics: boolean = false

  static cleanChildRelayoutBoundary (child: RenderObject) {
    child.cleanRelayoutBoundary()
  }

  public needsLayout: boolean = true
  public relayoutBoundary: RenderObject | null = null
  public paintBounds: Rect
  public parentData: ParentData
  public layerHandle: LayerHandle<ContainerLayer>
  public doingThisLayoutWithCallback: boolean = false
  public needsPaint: boolean = true
  public isRepaintBoundary: boolean = false
  public alwaysNeedsCompositing: boolean = false
  public needsCompositingBitsUpdate: boolean = false
  public cachedSemanticsConfiguration
  public semantics
  public needsSemanticsUpdate: boolean = true

  @property<ContainerLayer>(function (this, v) {
    invariant(
      this.isRepaintBoundary ||
      this.layerHandle.layer === null ||
      this.layerHandle.layer instanceof OffsetLayer
    )

    return this.layerHandle.layer
  }, function (this, v) {
    invariant(!this.isRepaintBoundary)
    this.layerHandle.layer = v
  }) public layer: ContainerLayer = new LayerHandle<ContainerLayer>()

  @property<Constraints>(function (this, v) {
    if (v === null) {
      throw new Error(`A RenderObject does not have any constraints before it has been laid out.`)
    }

    return v
  }) public constraints: Constraints | null = false


  @property<boolean>(function (this, v) {
    invariant(!this.needsCompositingBitsUpdate)
    return v
  }) public needsCompositing: boolean

  @property<boolean>(function (this, v) {
    let disposed: boolean
    invariant((() => {
      disposed = v
      return true
    })())
    return disposed
  }) public debugDisposed: boolean = false

  constructor () {
    super()
    this.needsCompositing = (
      this.isRepaintBoundary || 
      this.alwaysNeedsCompositing
    )
  }

  abstract performLayout (): void

  setupParentData (child: RenderObject) {
    invariant(this.debugCanPerformMutations)
    if (!(child.parentData instanceof ParentData)) {
      child.parentData = new ParentData()
    }
  }

  adoptChild (child: RenderObject) {
    invariant(this.debugCanPerformMutations)
    invariant(this.child !== null)
    this.setupParentData(child)
    this.markNeedsLayout()
    this.markNeedsCompositingBitsUpdate()
    this.markNeedsSemanticsUpdate()

    super.adoptChild(child)
  }

  dropChild (child: RenderObject) {
    invariant(this.debugCanPerformMutations)
    invariant(this.child !== null)
    invariant(child.parentData !== null)
    
    child.cleanRelayoutBoundary()
    child.parentData!.detach()
    child.parentData = null

    super.dropChild(child)
    this.markNeedsLayout()
    this.markNeedsCompositingBitsUpdate()
    this.markNeedsSemanticsUpdate()
  }

  attach (owner: unknown) {
    invariant(!this.debugDisposed)
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
    if (
      this.needsSemanticsUpdate && 
      this.semanticsConfiguration.isSemanticBoundary
    ) {
      this.needsSemanticsUpdate = false
      this.markNeedsSemanticsUpdate()
    }
  }

  visitChildren (visitor) {}

  

  layout (
    constraints,
    parentUsesSize: boolean = false
  ) {
    invariant(!this.debugDisposed)

    // @TODO-DEBUG
    invariant(constraints !== null)
    invariant(constraints.debugAssetIsValid)

    invariant(!this.debugDoingThisResize)
    invariant(!this.debugDoingThisLayout)

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

    invariant((() => {
      this.debugCanParentUseSize = parentUsesSize
      return true
    })())

    if (
      this.needsLayout &&
      constraints === constraints &&
      relayoutBoundary === this.relayoutBoundary
    ) {
      invariant((() => {
        this.debugDoingThisResize = sizedByParent
        this.debugDoingThisLayout = !sizedByParent

        const debugPreviousActiveLayout: RenderObject | null = this.debugActiveLayout
        this.debugActiveLayout = this
        this.debugResetSize()
        this.debugActiveLayout = debugPreviousActiveLayout
        this.debugDoingThisLayout = false
        this.debugDoingThisResize = false
        return true
      })())

      // TODO
      return
    }

    this.constraints = constraints

    if (
      this.relayoutBoundary !== null && 
      relayoutBoundary !== this.relayoutBoundary
    ) {
      this.visitChildren(cleanChildRelayoutBoundary)
    }

    this.relayoutBoundary = relayoutBoundary
    invariant(!this.debugMutationsLocked)
    invariant(!this.doingThisLayoutWithCallback)
    invariant((() => {
      this.debugMutationsLocked = true
      if (this.debugPrintLayouts) {
        // @TODO-DEBUG
        // debugPrint(
        //     'Laying out (${sizedByParent ? "with separate resize" : "with resize allowed"}) $this');
      }
      return true
    })())

    if (this.sizedByParent) {
      try {
        this.performResize()
      } catch (e) {
        // @TODO
        // _debugReportException('performResize', e, stack);
      }
    }

    let debugPreviousActiveLayout: RenderObject | null = null
    
    try {
      this.performLayout()
      this.markNeedsSemanticsUpdate()
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

    let node: RenderObject | null = this.parent
    
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

      node = node.parent
    }
  }

  scheduleInitialPaint (rootLayer: ContainerLayer) {
    invariant(rootLayer.attached)
    invariant(this.attached)
    invariant(!(this.parent instanceof RenderObject))
    invariant(!this.owner.debugDoingPaint)
    invariant(this.isRepaintBoundary)
    invariant(this.layerHandle.layer === null)
    this.layerHandle.layer = rootLayer
    invariant(this.needsPaint)
    this.owner.nodesNeedingPaint.push(this)
  }

  updateCompositingBits () {
    if (!this.needsCompositingBitsUpdate) {
      return
    }
    let oldNeedsCompositing = this.needsCompositing
    this.needsCompositing = false

    for (const child of this.children) {
      child.updateCompositingBits()

      if (child.needsCompositing) {
        this.needsCompositing = true
      }
    }

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

  debugPaint () {}

  debugRegisterRepaintBoundaryPaint (
    includedParent: boolean = true, 
    includedChild: boolean = false
  ) {
    
  }

  debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout () {
    if (this.relayoutBoundary === null) {
      return true
    }

    let node: RenderObject = this
    while (node !== this.relayoutBoundary) {
      invariant(node.relayoutBoundary === this.relayoutBoundary)
      invariant(node.parent !== null)
      node = node.parent as RenderObject
      if (
        !node.needsLayout && 
        !node.debugDoingThisLayout
      ) {
        return false
      }
    }
    invariant(node.relayoutBoundary === node)
    return true
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
    invariant(this.debugDisposed)
    if (this.debugDoingThisPaint) {
      throw new Error(`Tried to paint a RenderObject reentrantly.`)
    }

    if (this.needsLayout) {
      return
    }

    if (this.needsCompositingBitsUpdate) {

    }

    let debugLastActivePaint: RenderObject | null

    this.debugDoingThisPaint = true
    debugLastActivePaint = this.debugActivePaint
    this.debugActivePaint = this

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

  replaceRootLayer (rootLayer: Offsetlayer) {
    invariant(rootLayer.attached)
    invariant(!this.debugDisposed)
    invariant(this.attached)
    invariant(!(this.parent instanceof RenderObject))
    invariant(!this.owner!.debugDoingPaint)
    invariant(this.isRepaintBoundary)
    invariant(this.layerHandle.layer !== null)

    this.layerHandle.layer!.detach()
    this.layerHandle.layer = rootLayer
    this.markNeedsPaint()
  }

  appendLayer () {

  }

  markNeedsLayout () {
    invariant(this.debugCanPerformMutations)
    if (this.needsLayout) {
      invariant(this.debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout())
      return
    }

    invariant(this.relayoutBoundary !== null)

    if (this.relayoutBoundary !== this) {
      this.markParentNeedsLayout()
    } else {
      this.needsLayout = true
      if (this.owner !== null) {
        invariant((() => {
          // @TODO
          // if (this.debugPrintMarkNeedsLayoutStacks) {

          // }
          return true
        })())

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
    } else {
      invariant(parent.debugDoingThisLayout)
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
      this.visitChildren(this.cleanChildRelayoutBoundary)
    }
  }

  markNeedsCompositingBitsUpdate () {
    invariant(this.debugDisposed)
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
    invariant(!this.debugDisposed)
    invariant(this.attached)
    invariant(!(parent instanceof RenderObject))
    invariant(!this.owner!.debugDoingLayout)
    invariant(this.relayoutBoundary === null)
    
    this.relayoutBoundary = this
    invariant((() => {
      this.debugCanParentUseSize = false
      return true;
    })())
    this.owner!.nodesNeedingLayout.add(this)
  }

  layoutWithoutResize () {
    invariant(this.relayoutBoundary === this)
    
    let debugPreviousActiveLayout: RenderObject | null = null

    invariant(!this.debugMutationsLocked)
    invariant(!this.doingThisLayoutWithCallback)
    invariant(this.debugCanParentUseSize !== null)
    invariant((() => {
      this.debugMutationsLocked = true
      this.debugDoingThisLayout = true
      debugPreviousActiveLayout = this.debugActiveLayout
      this.debugActiveLayout = this
      // @TODO
      // if (this.debugPrintLayouts) {
      //   debugPrint('Laying out (without resize) $this');
      // }
      return true;
    })())

    try {
      this.performLayout()
      this.markNeedsSemanticsUpdate()
    } catch (e: any) {
      // @TODO
      // _debugReportException('performLayout', e, stack)
    }
    invariant((() => {
      this.debugActiveLayout = debugPreviousActiveLayout
      
      this.debugDoingThisLayout = false
      this.debugMutationsLocked = false
      return true;
    })())

    this.needsLayout = false
    this.markNeedsPaint()
  }


  markNeedsPaint (): void {
    invariant(!this.debugDisposed)
    invariant(
      this.owner === null ||
      !this.owner.debugDoingPaint
    )

    if (this.needsPaint) {
      return
    }

    this.needsPaint = true

    if (this.isRepaintBoundary) {
      invariant(this.layerHandle.layer instanceof OffsetLayer)

      if (this.owner !== null) {
        this.owner.nodesNeedingPaint.push(this)
        this.owner.requestVisualUpdate()
      }
    } else if (parent instanceof RenderObject) {
      parent = this.parent
      this.parent.markNeedsPaint()
      invariant(this.parent === this.parent)
    } else {
      if (this.owner !== null) {
        this.owner.requestVisualUpdate()
      }
    }
  }

  markNeedsSemanticsUpdate (): void {
    invariant(!this.debugDisposed)
    invariant(!this.attached || !this.owner!.debugDoingSemantics)

    if (
      !this.attached || 
      this.owner!._semanticsOwner === null
    ) {
      this.cachedSemanticsConfiguration = null
      return
    }

    const wasSemanticsBoundary = (
      this.semantics !== null &&
      this.cachedSemanticsConfiguration?.isSemanticBoundary === true
    )

    this.cachedSemanticsConfiguration = null
    
    let isEffectiveSemanticsBoundary = (
      this.semanticsConfiguration.isSemanticBoundary && 
      wasSemanticsBoundary
    )

    let node = this

    while (
      !isEffectiveSemanticsBoundary && 
      node.parent instanceof RenderObject
    ) {
      if (
        node !== this && 
        node.needsSemanticsUpdate
      ) {
        break
      }
      
      node.needsSemanticsUpdate = true
      node = node.parent as RenderObject

      isEffectiveSemanticsBoundary = node.semanticsConfiguration.isSemanticBoundary
      
      if (
        isEffectiveSemanticsBoundary && 
        node.semantics === null
      ) {
        return
      }
    }

    if (
      node !== this && 
      this.semantics !== null && 
      this.needsSemanticsUpdate
    ) {
      this.owner!.nodesNeedingSemantics.remove(this)
    }

    if (!node.needsSemanticsUpdate) {
      node.needsSemanticsUpdate = true
      
      if (this.owner !== null) {
        invariant(
          node.semanticsConfiguration.isSemanticBoundary ||
          !(node.parent instanceof RenderObject)
        )
        this.owner!.nodesNeedingSemantics.add(node)
        this.owner!.requestVisualUpdate()
      }
    }
  }

 

  paintChild (
    child: RenderObject,
    offset: Offset
  ) {

  }

  compositeChild (
    child: RenderObject,
    offset: Offset
  ) {

  }

  visitChildrenForSemantics(visitor) { // @TODO
    // visitChildren(visitor)
  }

  assembleSemanticsNode (
    node, //@TODO
    config, // @TODO
    children, // @TODO
  ) {
    invariant(node === this.semantics)
    
    node.updateWith(
      config,
      children
    )
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

  

  reassemble () {
    this.markNeedsLayout()
    this.markNeedsCompositingBitsUpdate()
    this.markNeedsPaint()
    this.markNeedsSemanticsUpdate()

    // @TODO
    for (const child of this.children) {
      child.reassemble()
    }
  }

  dispose () {
    invariant(!this.debugDisposed)
    this.layerHandle.layer = null
    invariant((() => {
      this.debugDisposed = true
      return true
    })())
  }
}

