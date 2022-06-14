import { invariant } from 'ts-invariant'
import { property } from '@helper'
import { LayerSceneBuilder, Picture, Offset, Rect, Image, Scene, Clip, RRect, ImageFilter, Path, ColorFilter, OpacityEngineLayer, OffsetEngineLayer, Shader, Size } from '@rendering'
import { Matrix4 } from '@math'
import { Skia, SkiaBlendMode, SkiaFilterQuality } from '@skia'

export type AnnotationEntry<T> = {
  annotation: T,
  localPosition: Offset
}

export class AnnotationResult<T> extends Array<AnnotationEntry<T>> {
  @property(function (this) {
    return this.map((entry: AnnotationEntry<T>) => {
      return entry.annotation
    })
  }) public annotations!: T[]
}

export abstract class EngineLayer {
  dispose () {}
}

export abstract class Layer implements EngineLayer {
  @property<boolean>(function (this, debugDisposed: boolean) {
    return debugDisposed
  }) public debugDisposed = false

  @property<boolean>(function (this, v) {
    return this.refCount
  }) public debugHandleCount!: number

  @property<boolean>(function (this, v) {
    return this.needsAddToScene
  }) public debugSubtreeNeedsAddToScene!: boolean | null

  @property<boolean>(function (this, v) {
    return this.owner !== null
  }) public attached!: boolean

  @property<EngineLayer>(function (this, engineLayer: EngineLayer) {
    return engineLayer
  }, function (this, engineLayer: EngineLayer, key: string) {
    invariant(!this.debugDisposed)
    this.engineLayer.dispose()
    this[key] = engineLayer

    if (!this.alwaysNeedsAddToScene) {
      if (
        this.parent !== null &&
        !this.parent.alwaysNeedsAddToScene
      ) {
        this.parent.markNeedsAddToScene()
      }
    }
  }) public engineLayer: EngineLayer | null = null

  public owner // @TODO
  public depth: number = 0
  public refCount: number = 0
  public parent: Layer | null = null
  public needsAddToScene: boolean = true
  public alwaysNeedsAddToScene: boolean = false
  public parentHandle: LayerHandle<Layer> = new LayerHandle<Layer>()
  public nextSibling: Layer | null = null
  public previousSibling: Layer | null = null
  public debugCreator

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

  markNeedsAddToScene () {
    invariant(this.alwaysNeedsAddToScene)
    invariant(!this.debugDisposed)

    if (this.needsAddToScene) {
      return
    }

    this.needsAddToScene = true
  }

  debugMarkClean () {
    this.needsAddToScene = false
  }

  updateSubtreeNeedsAddToScene () {
    this.needsAddToScene = this.needsAddToScene || this.alwaysNeedsAddToScene
  }

  redepthChild (child: Layer) {
    invariant(child.owner === this.owner)
    if (child.depth <= this.depth) {
      child.depth = this.depth + 1
      child.redepthChildren()
    }
  }

  redepthChildren () {}


  dropChild (child: Layer) {
    if (!this.alwaysNeedsAddToScene) {
      this.markNeedsAddToScene()
    }
    invariant(child !== null)
    invariant(child.parent === this)
    invariant(child.attached === this.attached)
    child.parent = null
    if (this.attached) {
      child.detach()
    }
  }

  adoptChild (child: Layer) {
    if (!this.alwaysNeedsAddToScene) {
      this.markNeedsAddToScene()
    }
    invariant(child !== null)
    invariant(child.parent === null)

    let node = this as Layer
    while (node.parent !== null) {
      node = node.parent
    }
    
    invariant(node !== child)
    child.parent = this
    if (this.attached) {
      child.attach(this.owner)
    }

    this.redepthChild(child)
  }

  remove () {
    this.parent?.removeChild(this)
  }

  
  findAnnotations<S extends Object>(
    result: AnnotationResult<S> ,
    localPosition: Offset, 
    onlyFirst: boolean,
  ): boolean {
    return false
  }

  find<S extends Object>(localPosition: Offset): S | null {
    const result: AnnotationResult<S> = new AnnotationResult<S>()
    this.findAnnotations<S>(result, localPosition, true)
    
    return result.length === 0 ? null : result[0].annotation
  }


  findAllAnnotations<S>(localPosition: Offset): AnnotationResult<S> {
    const result: AnnotationResult<S> = new AnnotationResult<S>()
    this.findAnnotations<S>(result, localPosition, false)
    return result
  }

  abstract addToScene (builder: LayerSceneBuilder) 

  addToSceneWithRetainedRendering (builder: LayerSceneBuilder) {
    if (
      !this.needsAddToScene && 
      this.engineLayer !== null
    ) {
      builder.addRetained(this.engineLayer!)
      return
    }

    this.addToScene(builder)
    this.needsAddToScene = false
  }

  unref () {
    invariant(this.refCount > 0)
    this.refCount -= 1
    if (this.refCount === 0) {
      this.dispose()
    }
  }

  dispose () {
    invariant(!this.debugDisposed)
    invariant(this.refCount === 0)

    this.debugDisposed = true
    this.engineLayer?.dispose()
    this.engineLayer = null
  }
}

export class LayerHandle<T extends Layer> {
  @property<T>(function (this, v) {
    return v
  }, function (this, v) {
    invariant(!v.debugDisposed)

    if (v === this.layer) {
      return
    }

    this.layer.unref()
    this.layer = v
    if (this.layer !== null) {
      this.layer.refCount += 1
    }
  }) public layer: T | null = null
}

export class PictureLayer extends Layer {
  @property(function (this, picture) {
    return picture
  }, function (this, picture) {
    invariant(this.debugDisposed)
    this.markNeedsAddToScene()
    this.picture.dispose()
    this.picture = picture
  }) public picture: Picture | null = null

  @property<boolean>(function (this, isComplexHint) {
    return isComplexHint
  }, function (this, isComplexHint: boolean, key) {
    if (this.isComplexHint !== isComplexHint) {
      this[key] = isComplexHint
      this.markNeedsAddToScene()
    }
    
  }) public isComplexHint: boolean = false

  @property<boolean>(function (this, willChangeHint: boolean) {
    return willChangeHint
  }, function (this, willChangeHint: boolean, key) {
    if (this.isComplexHint !== willChangeHint) {
      this[key] = willChangeHint
      this.markNeedsAddToScene()
    }
    
  }) public willChangeHint: boolean = false

  public canvasBounds: Rect

  constructor (canvasBounds: Rect) {
    super()

    this.canvasBounds = canvasBounds
  }

  addToScene (builder: LayerSceneBuilder) {
    invariant(this.picture !== null)
    
    builder.addPicture(
      Offset.zero, 
      this.picture,
      this.isComplexHint, 
      this.willChangeHint
    )
  }

  findAnnotations<S>(
    result: AnnotationResult<S> , 
    localPosition: Offset,
    onlyFirst: boolean
  ): boolean {
  return false
}

  dispose() {
    this.picture = null
    super.dispose()
  }
}


export class TextureLayer extends Layer {
  public rect: Rect
  public textureId: number
  public freeze: boolean
  public filterQuality: SkiaFilterQuality

  constructor(
    rect: Rect,
    textureId: number,
    freeze: boolean = false,
    filterQuality = SkiaFilterQuality.Low,
  ) {
    super()
    invariant(rect !== null)
    invariant(textureId !== null)

    this.rect = rect
    this.textureId = textureId
    this.freeze = freeze
    this.filterQuality = filterQuality
  }
  

  
  addToScene (builder: LayerSceneBuilder) {
    builder.addTexture(
      this.textureId,
      this.rect.topLeft,
      this.rect.width,
      this.rect.height,
      this.freeze,
      this.filterQuality,
    )
  }
  
  findAnnotations<S extends Object>(
    result: AnnotationResult<S> , 
    localPosition: Offset,
    onlyFirst: boolean
  ) {
    return false
  }
}

export class ContainerLayer extends Layer {
  @property<Layer | null>() public firstChild: Layer | null = null
  @property<Layer | null>() public lastChild: Layer | null = null

  @property<boolean>(function (this) {
    return this.firstChild !== null
  }) public hasChildren!: boolean
  

  buildScene (builder: LayerSceneBuilder) {
    this.updateSubtreeNeedsAddToScene()
    this.addToScene(builder)
    
    this.needsAddToScene = false
    const scene = builder.build()
    return scene
  }

  debugUltimatePreviousSiblingOf (
    child: Layer, 
    equals?: Layer | null
  ) {
    invariant(child.attached === this.attached)
    
    while (child.previousSibling !== null) {
      invariant(child.previousSibling !== child)
      child = child.previousSibling!
      invariant(child.attached === this.attached)
    }

    return child === equals
  }

  debugUltimateNextSiblingOf (
    child: Layer, 
    equals?: Layer | null
  ) {
    invariant(child.attached === this.attached)
    while (child.nextSibling !== null) {
      invariant(child.nextSibling !== child)
      child = child.nextSibling!
      invariant(child.attached === this.attached)
    }

    return child === equals
  }

  
  dispose () {
    this.removeAllChildren()
    super.dispose()
  }

  
  updateSubtreeNeedsAddToScene () {
    super.updateSubtreeNeedsAddToScene()
    let child: Layer | null = this.firstChild

    while (child !== null) {
      child.updateSubtreeNeedsAddToScene()
      this.needsAddToScene = this.needsAddToScene || child.needsAddToScene
      child = child.nextSibling
    }
  }

  
  findAnnotations<S extends Object>(
    result: AnnotationResult<S> , 
    localPosition: Offset,
    onlyFirst: boolean
  ) {
    for (
      let child = this.lastChild;
      child !== null;
      child = child.previousSibling
    ) {
      const isAbsorbed = child.findAnnotations<S>(
        result, 
        localPosition, 
        onlyFirst
      )
      if (isAbsorbed) {
        return true
      }

      if (onlyFirst && result.length > 0) {
        return isAbsorbed
      }
    }
    return false;
  }

  
  attach (owner) {
    super.attach(owner)
    let child: Layer | null = this.firstChild
    while (child !== null) {
      child.attach(owner)
      child = child.nextSibling
    }
  }

  
  detach() {
    super.detach();
    let child: Layer | null = this.firstChild
    while (child !== null) {
      child.detach()
      child = child.nextSibling
    }
  }

  append (child: Layer) {
    invariant(child !== this as unknown as Layer)
    invariant(child !== this.firstChild)
    invariant(child !== this.lastChild)
    invariant(child.parent === null)
    invariant(!child.attached)
    invariant(child.nextSibling === null)
    invariant(child.previousSibling === null)
    invariant(child.parentHandle.layer === null)
    
    let node: Layer = this as unknown as Layer
    while (node.parent !== null) {
      node = node.parent
    }

    invariant(node !== child)
    
    this.adoptChild(child)
    child.previousSibling = this.lastChild
    if (this.lastChild !== null) {
      this.lastChild.nextSibling = child
    }

    this.lastChild = child
    this.firstChild ??= child
    child.parentHandle.layer = child
    invariant(child.attached === this.attached)
  }

  
  removeChild (child: Layer) {
    invariant(child.parent === this as unknown as Layer)
    invariant(child.attached === this.attached)
    invariant(this.debugUltimatePreviousSiblingOf(child, this.firstChild))
    invariant(this.debugUltimateNextSiblingOf(child, this.lastChild))
    invariant(child.parentHandle.layer !== null)
    if (child.previousSibling === null) {
      invariant(this.firstChild === child)
      this.firstChild = child.nextSibling
    } else {
      child.previousSibling.nextSibling = child.nextSibling;
    }
    if (child.nextSibling === null) {
      invariant(this.lastChild === child)
      this.lastChild = child.previousSibling
    } else {
      child.nextSibling.previousSibling = child.previousSibling
    }
    invariant((this.firstChild === null) === (this.lastChild === null))
    invariant(
      this.firstChild === null || 
      this.firstChild.attached === this.attached
    )
    invariant(
      this.lastChild === null || 
      this.lastChild.attached === this.attached
    )
    invariant(
      this.firstChild === null ||
      this.debugUltimateNextSiblingOf(this.firstChild, this.lastChild)
    )
    invariant(
      this.lastChild === null ||
      this.debugUltimatePreviousSiblingOf(this.lastChild, this.firstChild)
    )
    child.previousSibling = null
    child.nextSibling = null
    this.dropChild(child)
    child.parentHandle.layer = null
    invariant(!child.attached)
  }

  /// Removes all of this layer's children from its child list.
  removeAllChildren() {
    let child: Layer | null = this.firstChild
    while (child !== null) {
      const next: Layer | null = child.nextSibling
      child.previousSibling = null
      child.nextSibling = null
      invariant(child.attached === this.attached)
      this.dropChild(child)
      invariant(child.parentHandle !== null)
      child.parentHandle.layer = null
      child = next
    }
    this.firstChild = null
    this.lastChild = null
  }

  
  addToScene (builder: LayerSceneBuilder) {
    this.addChildrenToScene(builder)
  }

  addChildrenToScene (builder: LayerSceneBuilder) {
    let child: Layer | null = this.firstChild
    while (child !== null) {
      child.addToSceneWithRetainedRendering(builder)
      child = child.nextSibling
    }
  }

  applyTransform (
    child: Layer | null, 
    transform: Matrix4
  ) {
    invariant(child !== null)
    invariant(transform !== null)
  }
  
  depthFirstIterateChildren (): Layer[] {
    if (this.firstChild === null) {
      return []
    }

    let children: Layer[] = []
    let child: Layer | null = this.firstChild
    while (child !== null) {
      children.push(child)
      if (child instanceof ContainerLayer) {
        children = children.concat(child.depthFirstIterateChildren())
      }
      child = child.nextSibling
    }
    return children
  }
}


export class OffsetLayer extends ContainerLayer {
  @property<Offset>(function (this, offset: Offset) {
    return offset
  }, function (this, offset: Offset, key) {
    if (offset !== this.offset) {
      this.markNeedsAddToScene()
    }
    this[key] = offset
  }) public offset: Offset
  
  constructor (offset: Offset = Offset.zero) {
    super()
    this.offset = offset
  }
  
  findAnnotations<S extends Object>(
    result: AnnotationResult<S>,
    localPosition: Offset,
    onlyFirst: boolean
  ): boolean {
    return super.findAnnotations<S>(
      result, 
      localPosition.subtract(this.offset),
      onlyFirst
    )
  }

  applyTransform (
    child: Layer | null, 
    transform: Matrix4 
  ) {
    invariant(child !== null)
    invariant(transform !== null)
    transform.multiply(
      Matrix4.translationValues(
        this.offset.dx, 
        this.offset.dy, 0.0
      )
    )
  }

  addToScene(builder: LayerSceneBuilder) {
    this.engineLayer = builder.pushOffset(
      this.offset.dx,
      this.offset.dy,
      this.engineLayer
    )
    
    this.addChildrenToScene(builder)
    builder.pop()
  }

  async toImage (
    bounds: Rect , 
    pixelRatio = 1.0
  ): Promise<Image> {
    invariant(bounds !== null)
    invariant(pixelRatio !== null)
    const builder: LayerSceneBuilder = new LayerSceneBuilder()
    const transform: Matrix4 = Matrix4.translationValues(
      (-bounds.left - this.offset.dx) * pixelRatio,
      (-bounds.top - this.offset.dy) * pixelRatio,
      0.0,
    )
    transform.scale(pixelRatio, pixelRatio)
    builder.pushTransform(transform)

    const scene: Scene = this.buildScene(builder)

    try {
      return scene.toImage(
        Math.ceil((pixelRatio * bounds.width)),
        Math.ceil((pixelRatio * bounds.height)),
      )
    } finally {
      scene.dispose()
    }
  }
}

export class ClipRectLayer extends ContainerLayer {
  @property<Rect | null>(function get (this, clipRect: Rect | null) {
    return clipRect
  }, function set (this, clipRect: Rect | null, key) {
    if (clipRect !== this.clipRect) {
      this[key] = clipRect
      this.markNeedsAddToScene()
    }
  }) public clipRect: Rect | null

  @property<Clip>(function get (this, clipBehavior: Clip) {
    return clipBehavior
  }, function set (this, clipBehavior: Clip, key) {
    if (clipBehavior !== this.clipBehavior) {
      this[key] = clipBehavior
      this.markNeedsAddToScene()
    }
  }) public clipBehavior: Clip

  constructor (
    clipRect: Rect | null,
    clipBehavior: Clip = Clip.HardEdge,
  ) {
    super()
    this.clipRect = clipRect,
    this.clipBehavior = clipBehavior
    invariant(clipBehavior !== null)
    invariant(clipBehavior !== Clip.None)
  }
  
  findAnnotations<S extends Object>(
    result: AnnotationResult<S> , 
    localPosition: Offset,
    onlyFirst: boolean
  ) {
    if (!this.clipRect?.contains(localPosition)) {
      return false
    }
    return super.findAnnotations<S>(
      result, 
      localPosition, 
      onlyFirst
    )
  }

  addToScene (builder: LayerSceneBuilder) {
    invariant(this.clipRect !== null)
    invariant(this.clipBehavior !== null)
    this.engineLayer = builder.pushClipRect(
      this.clipRect,
      this.clipBehavior,
      this.engineLayer
    )
    
    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class ClipRRectLayer extends ContainerLayer {
  @property<RRect>(function get (this, clipRRect: RRect) {
    return clipRRect
  }, function set (this, clipRRect: RRect, key) {
    if (clipRRect !== this.clipRRect) {
      this[key] = clipRRect
      this.markNeedsAddToScene()
    }
  }) public clipRRect: RRect | null

  @property<Clip>(function get (this, clipBehavior: Clip) {
    return clipBehavior
  }, function set (this, clipBehavior: Clip, key) {
    invariant(clipBehavior !== null)
    invariant(clipBehavior !== Clip.None)

    if (this.clipBehavior !== clipBehavior) {
      this[key] = clipBehavior
      this.markNeedsAddToScene()
    }
  }) public clipBehavior: Clip

  constructor(
    clipRRect?: RRect | null,
    clipBehavior: Clip = Clip.AntiAlias,
  ) {
    super()

    invariant(clipBehavior !== null)
    invariant(clipBehavior !== Clip.None)
    
    this.clipRRect = clipRRect ?? null
    this.clipBehavior = clipBehavior
  }
  
  findAnnotations<S extends Object>(
    result: AnnotationResult<S> , 
    localPosition: Offset,
    onlyFirst: boolean
  ): boolean {
    if (!this.clipRRect!.contains(localPosition)) {
      return false
    }
    return super.findAnnotations<S>(
      result, 
      localPosition, 
      onlyFirst
    )
  }

  addToScene (builder: LayerSceneBuilder) {
    invariant(this.clipRRect !== null)
    invariant(this.clipBehavior !== null)
    
    
    this.engineLayer = builder.pushClipRRect(
      this.clipRRect!,
      this.clipBehavior,
      this.engineLayer
    )

    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class ClipPathLayer extends ContainerLayer {
  @property<Path>(function get (this, clipPath: Path) {
    return clipPath
  }, function set (this, clipPath: Path, key) {
    if (clipPath !== this.clipPath) {
      this[key] = clipPath
      this.markNeedsAddToScene()
    }
  }) public clipPath: Path | null

  @property<Clip>(function get (this, clipBehavior: Clip) {
    return clipBehavior
  }, function set (this, clipBehavior: Clip, key) {
    invariant(clipBehavior !== null)
    invariant(clipBehavior !== Clip.None)

    if (this.clipBehavior !== clipBehavior) {
      this[key] = clipBehavior
      this.markNeedsAddToScene()
    }
  }) public clipBehavior: Clip

  constructor (
    clipPath?: Path | null,
    clipBehavior: Clip = Clip.AntiAlias,
  ) {
    invariant(clipBehavior !== null)
    invariant(clipBehavior !== Clip.None)
    super()

    this.clipPath = clipPath ?? null
    this.clipBehavior = clipBehavior
  }

  findAnnotations<S extends Object>(
    result: AnnotationResult<S>, 
    localPosition: Offset,
    onlyFirst: boolean
  ) {
    if (!this.clipPath!.contains(localPosition)) {
      return false
    }
    return super.findAnnotations<S>(
      result, 
      localPosition, 
      onlyFirst
    )
  }

  
  addToScene (builder: LayerSceneBuilder) {
    invariant(this.clipPath !== null)
    invariant(this.clipBehavior !== null)
    this.engineLayer = builder.pushClipPath(
      this.clipPath!,
      this.clipBehavior,
      this.engineLayer
    )

    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class ColorFilterLayer extends ContainerLayer {
  @property<ColorFilter>(function get (this, colorFilter: ColorFilter) {
    return colorFilter
  }, function set (this, colorFilter: ColorFilter, key) {
    if (colorFilter !== this.colorFilter) {
      this[key] = colorFilter
      this.markNeedsAddToScene()
    }
  }) public colorFilter: ColorFilter | null

  constructor (colorFilter?: ColorFilter | null) {
    super()

    this.colorFilter = colorFilter ?? null
  }

  addToScene (builder: LayerSceneBuilder) {
    invariant(this.colorFilter !== null)
    this.engineLayer = builder.pushColorFilter(
      this.colorFilter,
      this.engineLayer,
    )

    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class ImageFilterLayer extends ContainerLayer {
  @property<ImageFilter>(function get (this, imageFilter: ImageFilter) {
    return imageFilter
  }, function set (this, imageFilter: ImageFilter, key) {
    if (imageFilter !== this.imageFilter) {
      this[key] = imageFilter
      this.markNeedsAddToScene()
    }
  }) public imageFilter: ImageFilter | null

  constructor (imageFilter: ImageFilter | null) {
    super()
    this.imageFilter = imageFilter
  }
  
  addToScene (builder: LayerSceneBuilder) {
    invariant(this.imageFilter !== null);
    this.engineLayer = builder.pushImageFilter(
      this.imageFilter!,
      this.engineLayer
    )
    this.addChildrenToScene(builder)
    this.builder.pop()
  }
}

export class TransformLayer extends OffsetLayer {
  @property<Matrix4 | null>(function (this, transform: Matrix4 | null) {
    return transform
  }, function (this, transform: Matrix4 | null, key) {
    invariant(transform !== null)
    invariant(transform!.every((component) => Number.isFinite(component)))
    if (transform === this.transform) {
      return 
    }
    this[key] = transform
    this.inverseDirty = true
    this.markNeedsAddToScene()
  }) public transform: Matrix4 | null = null

  public lastEffectiveTransform: Matrix4 | null = null
  public invertedTransform: Matrix4 | null = null
  public inverseDirty: boolean = true
  
  constructor(
    transform?: Matrix4 | null, 
    offset: Offset = Offset.zero
  ) {
    super(offset)

    this.transform = transform ?? null
  }

  addToScene(builder: LayerSceneBuilder) {
    invariant(this.transform !== null)
    this.lastEffectiveTransform = this.transform
    if (this.offset.isEqual(Offset.zero)) {
      const matrix = Matrix4.translationValues(
        this.offset.dx, 
        this.offset.dy, 
        0.0
      )
      this.lastEffectiveTransform = matrix.multiply(this.lastEffectiveTransform)
    }
    // @TODO
    
    this.engineLayer = builder.pushTransform(
      this.lastEffectiveTransform,
      this.engineLayer,
    )
    this.addChildrenToScene(builder)
    builder.pop()
  }

  transformOffset (localPosition: Offset): Offset | null {
    if (this.inverseDirty) {
      this.invertedTransform = Matrix4.tryInvert(PointerEvent.removePerspectiveTransform(this.transform))
      this.inverseDirty = false
    }

    if (this.invertedTransform === null) {
      return null
    }

    // @TODO
    return MatrixUtils.transformPoint(
      this.invertedTransform, 
      localPosition
    )
  }

  findAnnotations<S extends Object>(
    result: AnnotationResult<S>, 
    localPosition: Offset,
    onlyFirst: boolean
    ): boolean {
    const transformedOffset: Offset | null = this.transformOffset(localPosition)
    if (transformedOffset === null) {
      return false
    }
    return super.findAnnotations<S>(
      result, 
      transformedOffset, 
      onlyFirst
    )
  }

  applyTransform (
    child: Layer | null, 
    transform: Matrix4
  ) {
    invariant(child !== null)
    invariant(transform !== null)
    invariant(this.lastEffectiveTransform !== null || this.transform !== null)

    if (this.lastEffectiveTransform === null) {
      transform.multiply(this.transform!)
    } else {
      transform.multiply(this.lastEffectiveTransform!)
    }
  }
}

export class OpacityLayer extends OffsetLayer {
  @property<number>(function get (this, alpha: number) {
    return alpha
  }, function set (this, alpha: number, key) {
    invariant(alpha !== null)
    if (alpha !== this.alpha) {
      if (alpha === 255 || this. === 255) {
        this.engineLayer = null
      }
      this[key] = alpha
      this.markNeedsAddToScene()
    }
  }) public alpha: number | null
  
  constructor (
    alpha?: number | null,
    offset: Offset  = Offset.zero,
  ) {
    super(offset);
    
    this.alpha = alpha ?? null
  }
  
  addToScene (builder: LayerSceneBuilder) {
    invariant(this.alpha !== null)
    const enabled = this.firstChild !== null
    if (!enabled) {
      this.engineLayer = null
      return
    }

    const realizedAlpha = this.alpha
    
    if (enabled && realizedAlpha < 255) {
      invariant(this.engineLayer instanceof OpacityEngineLayer)
      this.engineLayer = builder.pushOpacity(
        realizedAlpha,
        this.offset,
        this.engineLayer
      )
    } else {
      invariant(this.engineLayer instanceof OffsetEngineLayer);
      this.engineLayer = builder.pushOffset(
        this.offset.dx,
        this.offset.dy,
        this.engineLayer
      )
    }
    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class ShaderMaskLayer extends ContainerLayer {
  @property<Shader>(function get (this, shader: Shader) {
    return shader
  }, function set (this, shader: Shader, key) {
    if (shader !== this.shader) {
      this[key] = shader
      this.markNeedsAddToScene()
    }
  }) public shader: Shader | null

  @property<Rect>(function get (this, maskRect: Rect) {
    return maskRect
  }, function set (this, maskRect: Rect, key) {
    if (maskRect !== this.maskRect) {
      this[key] = maskRect
      this.markNeedsAddToScene()
    }
  }) public maskRect: Rect | null

  @property<SkiaBlendMode>(function get (this, blendMode: SkiaBlendMode) {
    return blendMode
  }, function set (this, blendMode: SkiaBlendMode, key) {
    if (blendMode !== this.blendMode) {
      this[key] = blendMode
      this.markNeedsAddToScene()
    }
  }) public blendMode: SkiaBlendMode | null

  constructor (
    shader?: Shader | null,
    maskRect?: Rect | null,
    blendMode?: SkiaBlendMode | null,
  ) {
    super()
    this.shader = shader ?? null
    this.maskRect = maskRect ?? null
    this.blendMode = blendMode ?? null
  }
  
  addToScene (builder: LayerSceneBuilder) {
    invariant(this.shader !== null);
    invariant(this.maskRect !== null);
    invariant(this.blendMode !== null);
    this.engineLayer = builder.pushShaderMask(
      this.shader!,
      this.maskRect!,
      this.blendMode!,
      this.engineLayer
    )
    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class BackdropFilterLayer extends ContainerLayer {
  @property<ImageFilter>(function get (this, filter: ImageFilter) {
    return filter
  }, function set (this, filter: ImageFilter, key) {
    if (filter !== this.filter) {
      this[key] = filter
      this.markNeedsAddToScene()
    }
  }) public filter: ImageFilter | null

  @property<SkiaBlendMode>(function get (this, blendMode: SkiaBlendMode) {
    return blendMode
  }, function set (this, blendMode: SkiaBlendMode, key) {
    if (blendMode !== this.blendMode) {
      this[key] = blendMode
      this.markNeedsAddToScene()
    }
  }) public blendMode: SkiaBlendMode

  constructor (
    filter: ImageFilter,
    blendMode: SkiaBlendMode = Skia.BlendMode.SrcOver,
  ) {
    super()
    this.filter = filter ?? null
    this.blendMode = blendMode ?? null
  }
  
  addToScene (builder: LayerSceneBuilder) {
    invariant(this.filter !== null)
    this.engineLayer = builder.pushBackdropFilter(
      this.filter!,
      this.blendMode,
      this.engineLayer
    )
    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class PhysicalModelLayer extends ContainerLayer {
  
  PhysicalModelLayer({
    Path? clipPath,
    Clip clipBehavior = Clip.none,
    double? elevation,
    Color? color,
    Color? shadowColor,
  })  : _clipPath = clipPath,
        _clipBehavior = clipBehavior,
        _elevation = elevation,
        _color = color,
        _shadowColor = shadowColor;

  /// The path to clip in the parent's coordinate system.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  Path? get clipPath => _clipPath;
  Path? _clipPath;
  set clipPath(Path? value) {
    if (value !== _clipPath) {
      _clipPath = value;
      markNeedsAddToScene();
    }
  }

  /// {@macro flutter.material.Material.clipBehavior}
  Clip get clipBehavior => _clipBehavior;
  Clip _clipBehavior;
  set clipBehavior(Clip value) {
    invariant(value !== null);
    if (value !== _clipBehavior) {
      _clipBehavior = value;
      markNeedsAddToScene();
    }
  }

  /// The z-coordinate at which to place this physical object.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ///
  /// In tests, the [debugDisableShadows] flag is set to true by default.
  /// Several widgets and render objects force all elevations to zero when this
  /// flag is set. For this reason, this property will often be set to zero in
  /// tests even if the layer should be raised. To verify the actual value,
  /// consider setting [debugDisableShadows] to false in your test.
  double? get elevation => _elevation;
  double? _elevation;
  set elevation(double? value) {
    if (value !== _elevation) {
      _elevation = value;
      markNeedsAddToScene();
    }
  }

  /// The background color.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  Color? get color => _color;
  Color? _color;
  set color(Color? value) {
    if (value !== _color) {
      _color = value;
      markNeedsAddToScene();
    }
  }

  /// The shadow color.
  Color? get shadowColor => _shadowColor;
  Color? _shadowColor;
  set shadowColor(Color? value) {
    if (value !== _shadowColor) {
      _shadowColor = value;
      markNeedsAddToScene();
    }
  }

  
  findAnnotations<S extends Object>(
      result: AnnotationResult<S> , localPosition: Offset,
      onlyFirst: boolean) {
    if (!clipPath!.contains(localPosition)) return false;
    return super
        .findAnnotations<S>(result, localPosition, onlyFirst: onlyFirst);
  }

  
  addToScene (builder: LayerSceneBuilder) {
    invariant(this.clipPath !== null)
    invariant(this.clipBehavior !== null)
    invariant(this.elevation !== null)
    invariant(this.color !== null)
    invariant(this.shadowColor !== null)

   
    this.engineLayer = builder.pushPhysicalShape(
      this.clipPath!,
      this.elevation!,
      this.color!,
      this.shadowColor,
      this.clipBehavior,
      this.engineLayer
    )
    
    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class LayerLink {
  @property<boolean>(function get (this, leaderConnected: boolean) {
    return this.leader !== null
  }) public leaderConnected!: boolean

  @property<LeaderLayer | null>(function get (this, debugLeader: LeaderLayer | null) {
    return null
  }) public debugLeader!: LeaderLayer | null

  public leader: LeaderLayer | null = null
  public connectedFollowers: number = 0
  public leaderSize: Size | null = null

  registerFollower (): LayerLinkHandle  {
    invariant(this.connectedFollowers >= 0)
    this.connectedFollowers++
    return new LayerLinkHandle(this)
  }

  toString () {
    return ``
  }
}

export class LayerLinkHandle {
  @property<LeaderLayer>(function get (this, leader: LeaderLayer) {
    return this.link.leader
  }) public leader!: LeaderLayer | null

  public link: LayerLink | null

  constructor (link) {
    this.link = link
  }

  dispose () {
    invariant(this.link!.connectedFollowers > 0)
    this.link!.connectedFollowers--
    this.link = null
  }
}

export class LeaderLayer extends ContainerLayer {
  @property<LayerLink>(function get (this, link: LayerLink) {
    return link
  }, function set (this, link: LayerLink, key) {
    invariant(link !== null);
    if (this.link === link) {
      return
    }
    this.link.leader = null
    this[key] = link
  }) public link: LayerLink

  @property<Offset>(function get (this, offset: Offset) {
    return offset
  }, function set (this, offset: Offset, key) {
    invariant(offset !== null);
    if (this.offset === offset) {
      return
    }
    this[key] = offset
    if (!this.alwaysNeedsAddToScene) {
      this.markNeedsAddToScene()
    }
  }) public offset: Offset

  @property<boolean>(function get (this) {
    return this.link.connectedFollowers > 0
  }) public alwaysNeedsAddToScene!: boolean  

  public lastOffset: Offset | null = null

  constructor (
    link: LayerLink, 
    offset: Offset = Offset.zero
  ) {
    invariant(link !== null)
    super()

    this.link = link
    this.offset = offset
  }
  
  attach (owner) {
    super.attach(owner)
    invariant(this.link.leader === null)
    this.lastOffset = null
    this.link.leader = this
  }

  detach () {
    invariant(this.link.leader === this)
    this.link.leader = null
    this.lastOffset = null
    super.detach()
  }

  findAnnotations<S extends Object>(
    result: AnnotationResult<S>, 
    localPosition: Offset,
    onlyFirst: boolean
  ) {
    return super.findAnnotations<S>(
      result, 
      localPosition.subarray(this.offset),
      onlyFirst
    )
  }

  addToScene (builder: LayerSceneBuilder) {
    invariant(this.offset !== null)
    this.lastOffset = this.offset
    if (this.lastOffset !== Offset.zero)
      this.engineLayer = builder.pushTransform(
        Matrix4.translationValues(
          this.lastOffset!.dx, 
          this.lastOffset!.dy, 0.0
        ),
        this.engineLayer
      )
    this.addChildrenToScene(builder)
    if (!this.lastOffset?.isEqual(Offset.zero)) {
      builder.pop()
    }
  }

  applyTransform (
    child: Layer | null, 
    transform: Matrix4
  ) {
    invariant(this.lastOffset !== null)
    if (!this.lastOffset.isEqual(Offset.zero)) {
      transform.translate(
        this.lastOffset!.dx, 
        this.lastOffset!.dy
      )
    }
  }
}

export class FollowerLayer extends ContainerLayer {
  static  collectTransformForLayerChain (layers: ContainerLayer[]): Matrix4 {
    const result: Matrix4  = Matrix4.identity()
    
    for (let index = layers.length - 1; index > 0; index -= 1) {
      layers[index]?.applyTransform(layers[index - 1], result)
    }
    return result;
  }

  static pathsToCommonAncestor(
    a: Layer | null = null,
    b: Layer | null = null,
    ancestorsA: ContainerLayer[],
    ancestorsB: ContainerLayer[],
  ): Layer | null {
    if (a === null || b === null) {
      return null
    }

    if (a === b) {
      return a
    }

    if (a.depth < b.depth) {
      ancestorsB.push(b.parent)
      return FollowerLayer.pathsToCommonAncestor(
        a, 
        b.parent, 
        ancestorsA, 
        ancestorsB
      )
    } else if (a.depth > b.depth) {
      ancestorsA.push(a.parent)
      return FollowerLayer.pathsToCommonAncestor(
        a.parent, 
        b, 
        ancestorsA, 
        ancestorsB
      )
    }

    ancestorsA.push(a.parent)
    ancestorsB.push(b.parent)

    return FollowerLayer.pathsToCommonAncestor(
      a.parent, 
      b.parent, 
      ancestorsA, 
      ancestorsB
    )
  }

  @property<LayerLink>(function get (this, link: LayerLink) {
    return link
  }, function set (this, link: LayerLink, key) {
    invariant(link !== null)
    if (
      link !== this.link && 
      this.leaderHandle !== null
    ) {
      this.leaderHandle!.dispose()
      this.leaderHandle = link.registerFollower()
    }
    this[key] = link
  }) public link: LayerLink
  

  public showWhenUnlinked: boolean = false
  public unlinkedOffset: Offset | null = null
  public linkedOffset: Offset | null = null
  public leaderHandle: LayerLinkHandle | null = null
  public lastOffset: Offset | null = null
  public lastTransform: Matrix4 | null = null
  public invertedTransform: Matrix4 | null = null
  public inverseDirty: boolean = true
  public alwaysNeedsAddToScene: boolean = true

  constructor (
    link: LayerLink,
    showWhenUnlinked: boolean = true,
    unlinkedOffset: Offset = Offset.zero,
    linkedOffset: Offset = Offset.zero,
  ) {
    invariant(link !== null)
    super()

    this.link = link
  }
  
  attach (owner) {
    super.attach(owner)
    this.leaderHandle = this.link.registerFollower()
  }

  detach () {
    super.detach()
    this.leaderHandle?.dispose()
    this.leaderHandle = null
  }

  transformOffset (localPosition: Offset): Offset | null {
    if (this.inverseDirty) {
      this.invertedTransform = Matrix4.tryInvert(this.getLastTransform()!)
      this.inverseDirty = false
    }
    if (this.invertedTransform === null) {
      return null
    }

    const vector = new Vector4(localPosition.dx, localPosition.dy, 0.0, 1.0)
    const result = this.invertedTransform!.transform(vector)
    return new Offset(
      result[0] - this.linkedOffset!.dx, 
      result[1] - this.linkedOffset!.dy
    )
  }

  findAnnotations<S extends Object>(
    result: AnnotationResult<S>, 
    localPosition: Offset,
    onlyFirst: boolean
  ) {
    if (this.leaderHandle!.leader === null) {
      if (this.showWhenUnlinked!) {
        return super.findAnnotations(
          result, 
          localPosition.subtract(this.unlinkedOffset!),
          onlyFirst
        )
      }
      return false
    }

    const transformedOffset: Offset | null = this.transformOffset(localPosition)
    if (transformedOffset === null) {
      return false
    }

    return super.findAnnotations<S>(
      result, 
      transformedOffset, 
      onlyFirst
    )
  }

  getLastTransform (): Matrix4 | null {
    if (this.lastTransform === null) {
      return null
    }

    const result: Matrix4 = Matrix4.translationValues(
      -this.lastOffset!.dx, 
      -this.lastOffset!.dy, 
      0.0
    )

    result.multiply(this.lastTransform!)
    return result
  }

  establishTransform () {
    invariant(this.link !== null)
    this.lastTransform = null
    const leader: LeaderLayer | null = this.leaderHandle!.leader

    if (leader === null) {
      return
    }

    invariant(
      leader.owner === this.owner,
      'Linked LeaderLayer anchor is not in the same layer tree as the FollowerLayer.',
    )
    invariant(
      leader.lastOffset !== null,
      'LeaderLayer anchor must come before FollowerLayer in paint order, but the reverse was true.',
    )

    const forwardLayers: ContainerLayer[] = [leader]
    const inverseLayers: ContainerLayer[] = [this as unknown as ContainerLayer]

    const ancestor: Layer | null = FollowerLayer.pathsToCommonAncestor(
      leader,
      this,
      forwardLayers,
      inverseLayers,
    )
    invariant(ancestor !== null)

    const forwardTransform: Matrix4  = FollowerLayer.collectTransformForLayerChain(forwardLayers)
    leader.applyTransform(null, forwardTransform)
    forwardTransform.translate(
      this.linkedOffset!.dx, 
      this.linkedOffset!.dy
    )

    const inverseTransform: Matrix4 = FollowerLayer.collectTransformForLayerChain(inverseLayers)

    if (inverseTransform.invert() === 0.0) {
      return
    }
    
    inverseTransform.multiply(forwardTransform);
    this.lastTransform = inverseTransform
    this.inverseDirty = true
  }

  addToScene (builder: LayerSceneBuilder) {
    invariant(this.link !== null)
    invariant(this.showWhenUnlinked !== null)
    if (
      this.leaderHandle!.leader === null && 
      !this.showWhenUnlinked!
    ) {
      this.lastTransform = null
      this.lastOffset = null
      this.inverseDirty = true
      this.engineLayer = null
      return
    }
    this.establishTransform()
    
    if (this.lastTransform !== null) {
      this.engineLayer = builder.pushTransform(
        this.lastTransform!,
        this.engineLayer,
      )
      this.addChildrenToScene(builder)
      builder.pop()
      this.lastOffset = this.unlinkedOffset
    } else {
      this.lastOffset = null
      const matrix: Matrix4 = Matrix4.translationValues(
        this.unlinkedOffset!.dx, 
        this.unlinkedOffset!.dy, 
        0.0
      )
      this.engineLayer = builder.pushTransform(
        matrix,
        this.engineLayer,
      )
      this.addChildrenToScene(builder)
      builder.pop()
    }

    this.inverseDirty = true
  }

  applyTransform (
    child: Layer | null, 
    transform: Matrix4
  ) {
    invariant(child !== null)
    invariant(transform !== null)
    if (this.lastTransform !== null) {
      transform.multiply(this.lastTransform!)
    } else {
      transform.multiply(
        Matrix4.translationValues(
          this.unlinkedOffset!.dx, 
          this.unlinkedOffset!.dy, 
          0
        )
      )
    }
  }
}

export class AnnotatedRegionLayer<T> extends ContainerLayer {
  public offset: Offset 
  public opaque: boolean
  public value: T
  public size: Size | null = null

  constructor (
    value: T,
    size: Size,
    offset?: Offset | null = null,
    opaque: boolean = false,
  ) {
    invariant(value !== null)
    invariant(opaque !== null)
    super()

    this.value = value
    this.size = size
    this.opaque = opaque
    this.offset = offset ?? Offset.zero
  }
  
  findAnnotations<S>(
    result: AnnotationResult<S>, 
    localPosition: Offset,
    onlyFirst: boolean
  ) {
    const isAbsorbed = super.findAnnotations(
      result, 
      localPosition, 
      onlyFirst
    )
    
    if (result.length > 0 && onlyFirst) {
      return isAbsorbed;
    }
    if (
      this.size !== null && 
      !(this.offset.and(this.size)).contains(localPosition)
    ) {
      return isAbsorbed
    }

    // @TODO
    // if (T === S) {
    //   isAbsorbed = isAbsorbed || opaque;
    //   final Object untypedValue = value;
    //   final S typedValue = untypedValue as S;
    //   result.add(AnnotationEntry<S>(
    //     annotation: typedValue,
    //     localPosition: localPosition - offset,
    //   ));
    // }

    return isAbsorbed
  }
}
