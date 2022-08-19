import { invariant } from 'ts-invariant'
import { Picture } from '@rendering/Picture'
import { Image } from '@rendering/Image'
import { Matrix4 } from '@math/Matrix4'
import { Vector4 } from '@math/Vector4'
import { Skia } from '@skia/binding'
import { AbstractNode } from '@internal/AbstractNode'
import { property } from '@helper/property'
import { LayerScene, LayerSceneBuilder } from '@rendering/LayerSceneBuilder'
import { Offset, Rect, RRect, Size } from '@internal/Geometry'
import { BlendMode, FilterQuality } from '@skia'
import { OpacityEngineLayer, OffsetEngineLayer, ImageFilterEngineLayer, ColorFilterEngineLayer } from '@rendering/Layer'

import { Path } from '@rendering/Path'
import { Shader } from '@rendering/Shader'
import { ImageFilter } from '@rendering/ImageFilter'
import { ColorFilter } from '@rendering/ColorFilter'
import { Color } from '@internal/Color'
import { Clip } from '@basic/Painting'

function scene <T> (setter?) {
  return property<T>(function get (this, value: T) {
    return value
  }, setter ?? function set (this, value: T, key) {
    if (
      value !== null &&
      this[key] !== value
    ) {
      this[key] = value
      this.markNeedsAddToScene()
    }
  })
}

export class AnnotationEntry<T> {
  public annotation: T
  public localPosition: Offset

  constructor (
    annotation: T,
    localPosition: Offset
  ) {
    invariant(localPosition !== null)
    this.annotation = annotation
    this.localPosition = localPosition
  }

  toString () {
    return ``
  }
}

export class AnnotationResult<T> extends Array<AnnotationEntry<T>> {
  @property(function (this) {
    return this.map((entry: AnnotationEntry<T>) => {
      return entry.annotation
    })
  }) public annotations!: T[]

  add (entry: AnnotationEntry<T>) {
    this.push(entry)
  }
}

export abstract class EngineLayer {
  dispose () {}
}

export abstract class Layer extends AbstractNode {
  @property<boolean>(function (this, v) {
    return this.owner !== null
  }) public attached!: boolean

  @property<EngineLayer>(function get (this, engineLayer: EngineLayer) {
    return engineLayer
  }, function set (this, engineLayer: EngineLayer, key: string) {
    this.engineLayer?.dispose()
    this._engineLayer = engineLayer

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
  public parent: ContainerLayer | null = null
  public needsAddToScene: boolean = true
  public alwaysNeedsAddToScene: boolean = false
  public parentHandle: LayerHandle<Layer> = new LayerHandle<Layer>()
  public nextSibling: Layer | null = null
  public previousSibling: Layer | null = null

  abstract addToScene (builder: LayerSceneBuilder) 

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
    invariant(
      !this.alwaysNeedsAddToScene,
      `The layer's alwaysNeedsAddToScene is set to true, and therefore it should not call markNeedsAddToScene.`
    )

    if (this.needsAddToScene) {
      return
    }

    this.needsAddToScene = true
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


  dropChild (child: AbstractNode) {
    if (!this.alwaysNeedsAddToScene) {
      this.markNeedsAddToScene()
    }
    super.dropChild(child)
  }

  adoptChild (child: AbstractNode) {
    if (!this.alwaysNeedsAddToScene) {
      this.markNeedsAddToScene()
    }
    super.adoptChild(child)
  }

  remove () {
    this.parent?.removeChild(this)
  }
  
  findAnnotations<S>(
    result: AnnotationResult<S> ,
    localPosition: Offset, 
    onlyFirst: boolean,
  ): boolean {
    return false
  }

  find<S>(localPosition: Offset): S | null {
    const result: AnnotationResult<S> = new AnnotationResult<S>()
    this.findAnnotations<S>(result, localPosition, true)
    
    return result.length === 0 ? null : result[0].annotation
  }

  findAllAnnotations<S>(localPosition: Offset): AnnotationResult<S> {
    const result: AnnotationResult<S> = new AnnotationResult<S>()
    this.findAnnotations<S>(result, localPosition, false)
    return result
  }


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
    this.engineLayer?.dispose()
    this.engineLayer = null
  }
}

export class LayerHandle<T extends Layer> {
  @property<T>(function get (this, layer: T) {
    return layer
  }, function (this, layer: T) {
    if (layer === this.layer) {
      return
    }

    this.layer?.unref()
    this._layer = layer
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

  @scene<boolean>() public isComplexHint: boolean = false
  @scene<boolean>() public willChangeHint: boolean = false

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
  public filterQuality: FilterQuality

  constructor(
    rect: Rect,
    textureId: number,
    freeze: boolean = false,
    filterQuality = FilterQuality.Low,
  ) {
    invariant(rect !== null)
    invariant(textureId !== null)
    super()

    this.rect = rect
    this.freeze = freeze
    this.textureId = textureId
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
  
  findAnnotations<S>(
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

  findAnnotations<S>(
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
    
    child.previousSibling = null
    child.nextSibling = null
    this.dropChild(child)
    child.parentHandle.layer = null
    invariant(!child.attached)
  }

  removeAllChildren () {
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
  public get offset () {
    return this._offset
  }
  public set offset (offset: Offset) {
    if (offset !== this.offset) {
      this.markNeedsAddToScene()
    }
    this._offset = offset
  }
  private _offset: Offset
  
  constructor (offset: Offset = Offset.zero) {
    super()
    this._offset = offset
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
        this.offset.dy,
        0.0
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

  toImage (
    bounds: Rect, 
    pixelRatio = 1.0
  ): Image {
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

    const scene: LayerScene = this.buildScene(builder)

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
  @scene<Rect | null>() public clipRect: Rect | null
  @scene<Clip>() public clipBehavior: Clip

  constructor (
    clipRect: Rect | null = null,
    clipBehavior: Clip = Clip.HardEdge,
  ) {
    super()
    this.clipRect = clipRect ?? null
    this.clipBehavior = clipBehavior
    invariant(clipBehavior !== null)
    invariant(clipBehavior !== Clip.None)
  }
  
  findAnnotations<S>(
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
  @scene<RRect>() public clipRRect: RRect | null
  @scene<Clip>() public clipBehavior: Clip

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
  @scene<Path>() public clipPath: Path | null
  @scene<Clip>() public clipBehavior: Clip

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
  @scene<ColorFilter>() public colorFilter: ColorFilter | null

  constructor (colorFilter?: ColorFilter | null) {
    super()
    this.colorFilter = colorFilter ?? null
  }

  addToScene (builder: LayerSceneBuilder) {
    invariant(this.colorFilter !== null)
    this.engineLayer = builder.pushColorFilter(
      this.colorFilter,
      this.engineLayer as ColorFilterEngineLayer,
    )

    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class ImageFilterLayer extends ContainerLayer {
  @scene<ImageFilter>() public imageFilter: ImageFilter | null

  constructor (imageFilter: ImageFilter | null) {
    super()
    this.imageFilter = imageFilter
  }
  
  addToScene (builder: LayerSceneBuilder) {
    invariant(this.imageFilter !== null);
    this.engineLayer = builder.pushImageFilter(
      this.imageFilter!,
      this.engineLayer as ImageFilterEngineLayer
    )
    this.addChildrenToScene(builder)
    builder.pop()
  }
}

export class TransformLayer extends OffsetLayer {
  @property<Matrix4 | null>(function (this, transform: Matrix4 | null) {
    return transform
  }, function (this, transform: Matrix4 | null, key) {
    if (transform === this.transform) {
      return 
    }
    this._transform = transform
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

  addToScene (builder: LayerSceneBuilder) {
    invariant(this.transform !== null)
    this.lastEffectiveTransform = this.transform
    if (this.offset.eq(Offset.zero)) {
      const matrix = Matrix4.translationValues(
        this.offset.dx, 
        this.offset.dy, 
        0.0
      )
      matrix.multiply(this.lastEffectiveTransform)
      this.lastEffectiveTransform = matrix
    }
    // @TODO
    
    this.engineLayer = builder.pushTransform(
      this.lastEffectiveTransform,
      this.engineLayer,
    )
    this.addChildrenToScene(builder)
    builder.pop()
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
      if (alpha === 255 || this.alpha === 255) {
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

  @property<BlendMode>(function get (this, blendMode: BlendMode) {
    return blendMode
  }, function set (this, blendMode: BlendMode, key) {
    if (blendMode !== this.blendMode) {
      this[key] = blendMode
      this.markNeedsAddToScene()
    }
  }) public blendMode: BlendMode | null

  constructor (
    shader?: Shader | null,
    maskRect?: Rect | null,
    blendMode?: BlendMode | null,
  ) {
    super()
    this.shader = shader ?? null
    this.maskRect = maskRect ?? null
    this.blendMode = blendMode ?? null
  }
  
  addToScene (builder: LayerSceneBuilder) {
    invariant(this.shader !== null)
    invariant(this.maskRect !== null)
    invariant(this.blendMode !== null)

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
  // === filter
  public get filter () {
    return this._filter
  }
  public set filter (filter: ImageFilter | null) {
    if (filter !== this.filter) {
      this._filter = filter
      this.markNeedsAddToScene()
    }
  }
  private _filter: ImageFilter | null

  // === blendMode
  public get blendMode () {
    return this._blendMode
  }
  public set blendMode (blendMode: BlendMode) {
    if (blendMode !== this.blendMode) {
      this._blendMode = blendMode
      this.markNeedsAddToScene()
    }
  }
  private _blendMode: BlendMode

  constructor (
    filter: ImageFilter,
    blendMode: BlendMode = Skia.binding.BlendMode.SrcOver,
  ) {
    super()
    this._filter = filter ?? null
    this._blendMode = blendMode ?? null
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
  @scene<number>() public elevation: number | null
  @scene<Path>() public clipPath: Path | null
  @scene<Clip>() public clipBehavior: Clip | null
  @scene<Color>() public color: Color | null
  @scene<Color>() public shadowColor: Color | null

  constructor (
    clipPath?: Path | null,
    clipBehavior: Clip = Clip.None,
    elevation?: number | null,
    color?: Color | null,
    shadowColor?: Color | null,
  ) {
    super()
    this.clipPath = clipPath ?? null
    this.clipBehavior = clipBehavior ?? null
    this.elevation = elevation ?? null
    this.color = color ?? null
    this.shadowColor = shadowColor ?? null
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
  @property<boolean>(function get (this) {
    return this.leader !== null
  }) public leaderConnected!: boolean

  @property<LeaderLayer | null>(function get (this) {
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
  @property<LeaderLayer>(function get (this) {
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
  @scene<LayerLink>(function set (this, link: LayerLink, key) {
    if (
      link !== null &&
      this.link !== link
    ) {
      this.link.leader = null
      this[key] = link
    }
  }) public link: LayerLink

  @scene<Offset>(function set (this, offset: Offset, key) {
    if (
      offset !== null &&
      this.offset !== offset
    ) {
      this[key] = offset
      if (!this.alwaysNeedsAddToScene) {
        this.markNeedsAddToScene()
      }
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

  findAnnotations<S>(
    result: AnnotationResult<S>, 
    localPosition: Offset,
    onlyFirst: boolean
  ) {
    return super.findAnnotations<S>(
      result, 
      localPosition.subtract(this.offset),
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
    if (!this.lastOffset?.eq(Offset.zero)) {
      builder.pop()
    }
  }

  applyTransform (
    child: Layer | null, 
    transform: Matrix4
  ) {
    invariant(this.lastOffset !== null)
    if (!this.lastOffset.eq(Offset.zero)) {
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
    ancestorsA: (ContainerLayer | null)[],
    ancestorsB: (ContainerLayer | null)[],
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

    const vector = new Vector4([localPosition.dx, localPosition.dy, 0.0, 1.0])
    const result = this.invertedTransform!.transform(vector)
    return new Offset(
      result[0] - this.linkedOffset!.dx, 
      result[1] - this.linkedOffset!.dy
    )
  }

  findAnnotations<S>(
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
    offset: Offset | null = null,
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
