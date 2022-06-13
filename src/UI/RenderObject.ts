import { invariant } from 'ts-invariant' 
import { Canvas, ColorFilter, Offset, Path, Rect, RRect } from '@rendering'
import { ContainerLayer } from 'src/Rendering/Layer'
import { Matrix4 } from '@math'

export type PaintingContextCallback = { (
  context: PaintingContext,
  offset: Offset
): void }


function property<T> (
  getter: { (v: T, k?: string): T } = function (v, k) { return v as T },
  setter: { (v: T, k: string): void } = function (this, v: T, k) { this[k] = v }
) {
  return function (
    target,
    key: string
  ) {
    const k = `_${key}` 

    Reflect.defineProperty(target, key, {
      get () {
        return Reflect.apply(getter, this, [this[k], k])
      },
      set (value: T) {
        return Reflect.apply(setter, this, [value, k])
      }
    })
  }
}

export abstract class Constraints {
  abstract isTight: boolean
  abstract isNormalized: boolean
}

export class PaintingContext {
  static repaintCompositedChild(
    child: RenderObject,
    debugAlsoPaintedParent: boolean = false,
    childContext?: PaintingContext | null,
  ) {
    invariant(child.needsPaint)

    invariant(child.isRepaintBoundary)
    
    child.debugRegisterRepaintBoundaryPaint(
      debugAlsoPaintedParent,
      true,
    )
    
    let childLayer = child.layerHandle.layer
    if (childLayer == null) {
      invariant(debugAlsoPaintedParent)
      invariant(child.layerHandle.layer === null)
      
      const layer = new OffsetLayer()
      child.layerHandle.layer = childLayer = layer
    } else {
      invariant(
        debugAlsoPaintedParent || 
        childLayer.attached
      )
      childLayer.removeAllChildren()
    }

    invariant(childLayer === child.layerHandle.layer)
    invariant(child.layerHandle.layer instanceof OffsetLayer)
    
    // childLayer!.debugCreator = child.debugCreator ?? child.runtimeType;
    
    childContext ??= new PaintingContext(childLayer, child.paintBounds)
    child.paintWithContext(childContext, Offset.zero)

    
    invariant(childLayer === child.layerHandle.layer)
    childContext.stopRecordingIfNeeded()
  }

  static debugInstrumentRepaintCompositedChild (
    child: RenderObject,
    debugAlsoPaintedParent: boolean = false,
    customContext: PaintingContext,
  ) {
    PaintingContext.repaintCompositedChild(
      child,
      debugAlsoPaintedParent,
      customContext,
    )
  }

  public estimatedBounds: Rect
  public containerLayer: ContainerLayer | null = null
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
  }) public isRecording: boolean

  @property<Canvas>(function (this, v) {
    if (v === null) {
      this.startRecording()
    }

    invariant(this.currentLayer !== null)
    return v
  }) public canvas: Canvas | null

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
      this.canvas!.getSaveCount() == 1
    )

    // Create a layer for our child, and paint the child into it.
    if (child.needsPaint) {
      PaintingContext.repaintCompositedChild(child, true)
    } else {
      child.debugRegisterRepaintBoundaryPaint()
      child.layerHandle.layer.debugCreator = child.debugCreator ?? child
    }
    
    invariant(child.layerHandle.layer instanceof OffsetLayer)
    const childOffsetLayer = child.layerHandle.layer! as OffsetLayer
    childOffsetLayer.offset = offset
    
    this.appendLayer(childOffsetLayer)
  }

  appendLayer (layer: Layer) {
    invariant(!this.isRecording)
    layer.remove()
    this.containerLayer.append(layer)
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
    
    this.currentLayer.picture = this.recorder.endRecording()
    this.currentLayer = null
    this.recorder = null
    this.canvas = null
  }

  setIsComplexHint () {
    this.currentLayer.isComplexHint = true
  }

  setWillChangeHint () {
    this.currentLayer.willChangeHint = true
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
    clipBehavior: Clip = Clip.hardEdge, 
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
    clipBehavior: Clip = Clip.antiAlias, 
    oldLayer?: ClipRRectLayer | null
  ): ClipRRectLayer | null  {
    invariant(clipBehavior !== null)
    const offsetBounds = bounds.shift(offset)
    const offsetClipRRect = clipRRect.shift(offset)
    
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
    clipBehavior: Clip = Clip.antiAlias, 
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

export class RenderObject {
  static debugCheckingIntrinsics = false

  public needsLayout: boolean = true
  public relayoutBoundary: RenderObject | null = null
  public depth
  public owner
  public attached
  public parent
  public paintBounds: Rect
  public layerHandle: LayerHandle<ContainerLayer>
  public doingThisLayoutWithCallback: boolean = false
  public needsPaint: boolean = true
  public isRepaintBoundary: boolean = false
  public alwaysNeedsCompositing: boolean = false
  public needsCompositingBitsUpdate: boolean = false
  public cachedSemanticsConfiguration
  public semantics
  public needsSemanticsUpdate: boolean = true

  public debugCreator
  public debugActivePaint: RenderObject | null = null
  public debugActiveLayout: RenderObject | null = null
  public debugMutationsLocked: boolean = false
  public debugCanParentUseSize: boolean | null = null
  public debugDoingThisPaint: boolean = false
  public debugDoingThisResize: boolean = false
  public debugDoingThisLayout: boolean = false

  @property<boolean>(function (this, v) {
    return this.needsPaint
  }) public debugNeedsPaint!: boolean

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

  @property<ContainerLayer>(function (this, v) {
    return this.layerHandle.layer
  }) public debugLayer!: ContainerLayer

  @property<boolean>(function (this, v) {
    let result: boolean
    if (this.debugDisposed) {
      result = false
    } else if (
      this.owner !== null &&
      this.owner.debugDoingLayout
    ) {
      result = true
    } else {
      let node = this

      while (true) {
        if (node.doingThisLayoutWithCallback) {
          result = true
        } else if (
          this.owner !== null &&
          this.owner.debugAllowMutationsToDirtySubtrees &&
          node.needsLayout
        ) {
          result = true
        } else if (node.debugMutationsLocked) {
          result = false
        } else if (node.parent instanceof RenderObject) {
          result = true
        } 

        node = node.parent
      }
    }

    return result
  }) public debugCanPerformMutations!: boolean
  
  @property<boolean>(function (this, v) {
    return this.needsLayout
  }) public debugNeedsLayout!: boolean

  @property<boolean>(function (this, v) {
    return this.doingThisLayoutWithCallback
  }) public debugDoingThisLayoutWithCallback!: boolean

  @property<Constraints>(function (this, v) {
    return v
  }, function (this, v) {
    if (v === null) {
      throw new Error(`A RenderObject does not have any constraints before it has been laid out.`)
    }

    return v
  }) public constraints: Constraints | null


  @property<boolean>(function (this, v) {
    invariant(!this.needsCompositingBitsUpdate)
    return v
  }) public needsCompositing: boolean

  @property<boolean>(function (this, v) {
    return v
  }) public debugDisposed: boolean = false

  constructor () {
    this.needsCompositing = this.isRepaintBoundary || this.alwaysNeedsCompositing
  }

  layout (
    constraints,
    
  ) {

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

    let node = this
    while (node !== this.relayoutBoundary) {
      invariant(node.relayoutBoundary === this.relayoutBoundary)
      invariant(node.parent !== null)
      node = node.parent
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

    const parent = this.parent

    if (this.doingThisLayoutWithCallback) {
      parent.markNeedslayout()
    } else {
      invariant(parent.debugDoingLayout)
    }

    invariant(parent === this.parent)
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

  attach (owner) {
    invariant(owner !== null)
    invariant(this.owner === null)

    this.owner = owner
  }

  detach () {
    invariant(this.owner !== null) 
    this.owner = null

    invariant(
      this.parent === null ||
      this.attached === this.parent.attached
    )
  }

  redepthChildren () {}

  redepthChild (child: RenderObject) {

  }

  adoptChild (child: RenderObject) {
    invariant(child !== null)
    

    invariant(child.parent === null)
    child.parent = this

    if (this.attached) {
      child.attach(this.owner)
    }

    this.redepthChild(child)
  }
  
  dropChild (child: RenderObject) {
    invariant(child !== null)
    invariant(child.parent === this)
    invariant(child.attached === this.attached)

    child.parent = null
    if (this.attached) {
      child.detach()
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

    for (const child of this.children) {
      child.reassemble()
    }
  }

  dispose () {

  }
}
