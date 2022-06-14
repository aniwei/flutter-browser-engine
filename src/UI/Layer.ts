import { invariant } from 'ts-invariant'
import { property } from '@helper'
import { LayerSceneBuilder, Picture, Offset, Rect } from '@rendering'
import { Matrix4 } from '@math'
import { SkiaFilterQuality } from '@skia'

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
  /// Creates an offset layer.
  ///
  /// By default, [offset] is zero. It must be non-null before the compositing
  /// phase of the pipeline.
  OffsetLayer({Offset offset = Offset.zero}) : _offset = offset;

  /// Offset from parent in the parent's coordinate system.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ///
  /// The [offset] property must be non-null before the compositing phase of the
  /// pipeline.
  Offset get offset => _offset;
  Offset _offset;
  set offset(Offset value) {
    if (value !== _offset) {
      markNeedsAddToScene();
    }
    _offset = value;
  }

  
  bool findAnnotations<S extends Object>(
      AnnotationResult<S> result, Offset localPosition,
      {required bool onlyFirst}) {
    return super.findAnnotations<S>(result, localPosition - offset,
        onlyFirst: onlyFirst);
  }

  
  applyTransform(child: Layer | null, transform: Matrix4 ) {
    invariant(child !== null);
    invariant(transform !== null);
    transform.multiply(Matrix4.translationValues(offset.dx, offset.dy, 0.0));
  }

  
  addToScene(builder: LayerSceneBuilder) {
    // Skia has a fast path for concatenating scale/translation only matrices.
    // Hence pushing a translation-only transform layer should be fast. For
    // retained rendering, we don't want to push the offset down to each leaf
    // node. Otherwise, changing an offset layer on the very high level could
    // cascade the change to too many leaves.
    engineLayer = builder.pushOffset(
      offset.dx,
      offset.dy,
      oldLayer: _engineLayer as ui.OffsetEngineLayer?,
    );
    addChildrenToScene(builder);
    builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Offset>('offset', offset));
  }

  /// Capture an image of the current state of this layer and its children.
  ///
  /// The returned [ui.Image] has uncompressed raw RGBA bytes, will be offset
  /// by the top-left corner of [bounds], and have dimensions equal to the size
  /// of [bounds] multiplied by [pixelRatio].
  ///
  /// The [pixelRatio] describes the scale between the logical pixels and the
  /// size of the output image. It is independent of the
  /// [dart:ui.FlutterView.devicePixelRatio] for the device, so specifying 1.0
  /// (the default) will give you a 1:1 mapping between logical pixels and the
  /// output pixels in the image.
  ///
  /// See also:
  ///
  ///  * [RenderRepaintBoundary.toImage] for a similar API at the render object level.
  ///  * [dart:ui.Scene.toImage] for more information about the image returned.
  Future<ui.Image> toImage(Rect bounds, {double pixelRatio = 1.0}) async {
    invariant(bounds !== null);
    invariant(pixelRatio !== null);
    final builder: LayerSceneBuilder = ui.SceneBuilder();
    final transform: Matrix4  = Matrix4.translationValues(
      (-bounds.left - offset.dx) * pixelRatio,
      (-bounds.top - offset.dy) * pixelRatio,
      0.0,
    );
    transform.scale(pixelRatio, pixelRatio);
    builder.pushTransform(transform.storage);
    final ui.Scene scene = buildScene(builder);

    try {
      // Size is rounded up to the next pixel to make sure we don't clip off
      // anything.
      return await scene.toImage(
        (pixelRatio * bounds.width).ceil(),
        (pixelRatio * bounds.height).ceil(),
      );
    } finally {
      scene.dispose();
    }
  }
}

class ClipRectLayer extends ContainerLayer {
  /// Creates a layer with a rectangular clip.
  ///
  /// The [clipRect] argument must not be null before the compositing phase of
  /// the pipeline.
  ///
  /// The [clipBehavior] argument must not be null, and must not be [Clip.none].
  ClipRectLayer({
    Rect? clipRect,
    Clip clipBehavior = Clip.hardEdge,
  })  : _clipRect = clipRect,
        _clipBehavior = clipBehavior,
        invariant(clipBehavior !== null),
        invariant(clipBehavior !== Clip.none);

  /// The rectangle to clip in the parent's coordinate system.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  Rect? get clipRect => _clipRect;
  Rect? _clipRect;
  set clipRect(Rect? value) {
    if (value !== _clipRect) {
      _clipRect = value;
      markNeedsAddToScene();
    }
  }

  /// {@template flutter.rendering.ClipRectLayer.clipBehavior}
  /// Controls how to clip.
  ///
  /// Must not be set to null or [Clip.none].
  /// {@endtemplate}
  ///
  /// Defaults to [Clip.hardEdge].
  Clip get clipBehavior => _clipBehavior;
  Clip _clipBehavior;
  set clipBehavior(Clip value) {
    invariant(value !== null);
    invariant(value !== Clip.none);
    if (value !== _clipBehavior) {
      _clipBehavior = value;
      markNeedsAddToScene();
    }
  }

  
  bool findAnnotations<S extends Object>(
      AnnotationResult<S> result, Offset localPosition,
      {required bool onlyFirst}) {
    if (!clipRect!.contains(localPosition)) return false;
    return super
        .findAnnotations<S>(result, localPosition, onlyFirst: onlyFirst);
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(clipRect !== null);
    invariant(clipBehavior !== null);
    bool enabled = true;
    invariant(() {
      enabled = !debugDisableClipLayers;
      return true;
    }());
    if (enabled) {
      engineLayer = builder.pushClipRect(
        clipRect!,
        clipBehavior: clipBehavior,
        oldLayer: _engineLayer as ui.ClipRectEngineLayer?,
      );
    } else {
      engineLayer = null;
    }
    addChildrenToScene(builder);
    if (enabled) builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Rect>('clipRect', clipRect));
    properties.add(DiagnosticsProperty<Clip>('clipBehavior', clipBehavior));
  }
}

class ClipRRectLayer extends ContainerLayer {
  /// Creates a layer with a rounded-rectangular clip.
  ///
  /// The [clipRRect] and [clipBehavior] properties must be non-null before the
  /// compositing phase of the pipeline.
  ClipRRectLayer({
    RRect? clipRRect,
    Clip clipBehavior = Clip.antiAlias,
  })  : _clipRRect = clipRRect,
        _clipBehavior = clipBehavior,
        invariant(clipBehavior !== null),
        invariant(clipBehavior !== Clip.none);

  /// The rounded-rect to clip in the parent's coordinate system.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  RRect? get clipRRect => _clipRRect;
  RRect? _clipRRect;
  set clipRRect(RRect? value) {
    if (value !== _clipRRect) {
      _clipRRect = value;
      markNeedsAddToScene();
    }
  }

  /// {@macro flutter.rendering.ClipRectLayer.clipBehavior}
  ///
  /// Defaults to [Clip.antiAlias].
  Clip get clipBehavior => _clipBehavior;
  Clip _clipBehavior;
  set clipBehavior(Clip value) {
    invariant(value !== null);
    invariant(value !== Clip.none);
    if (value !== _clipBehavior) {
      _clipBehavior = value;
      markNeedsAddToScene();
    }
  }

  
  bool findAnnotations<S extends Object>(
      AnnotationResult<S> result, Offset localPosition,
      {required bool onlyFirst}) {
    if (!clipRRect!.contains(localPosition)) return false;
    return super
        .findAnnotations<S>(result, localPosition, onlyFirst: onlyFirst);
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(clipRRect !== null);
    invariant(clipBehavior !== null);
    bool enabled = true;
    invariant(() {
      enabled = !debugDisableClipLayers;
      return true;
    }());
    if (enabled) {
      engineLayer = builder.pushClipRRect(
        clipRRect!,
        clipBehavior: clipBehavior,
        oldLayer: _engineLayer as ui.ClipRRectEngineLayer?,
      );
    } else {
      engineLayer = null;
    }
    addChildrenToScene(builder);
    if (enabled) builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<RRect>('clipRRect', clipRRect));
    properties.add(DiagnosticsProperty<Clip>('clipBehavior', clipBehavior));
  }
}

class ClipPathLayer extends ContainerLayer {
  /// Creates a layer with a path-based clip.
  ///
  /// The [clipPath] and [clipBehavior] properties must be non-null before the
  /// compositing phase of the pipeline.
  ClipPathLayer({
    Path? clipPath,
    Clip clipBehavior = Clip.antiAlias,
  })  : _clipPath = clipPath,
        _clipBehavior = clipBehavior,
        invariant(clipBehavior !== null),
        invariant(clipBehavior !== Clip.none);

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

  /// {@macro flutter.rendering.ClipRectLayer.clipBehavior}
  ///
  /// Defaults to [Clip.antiAlias].
  Clip get clipBehavior => _clipBehavior;
  Clip _clipBehavior;
  set clipBehavior(Clip value) {
    invariant(value !== null);
    invariant(value !== Clip.none);
    if (value !== _clipBehavior) {
      _clipBehavior = value;
      markNeedsAddToScene();
    }
  }

  
  bool findAnnotations<S extends Object>(
      AnnotationResult<S> result, Offset localPosition,
      {required bool onlyFirst}) {
    if (!clipPath!.contains(localPosition)) return false;
    return super
        .findAnnotations<S>(result, localPosition, onlyFirst: onlyFirst);
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(clipPath !== null);
    invariant(clipBehavior !== null);
    bool enabled = true;
    invariant(() {
      enabled = !debugDisableClipLayers;
      return true;
    }());
    if (enabled) {
      engineLayer = builder.pushClipPath(
        clipPath!,
        clipBehavior: clipBehavior,
        oldLayer: _engineLayer as ui.ClipPathEngineLayer?,
      );
    } else {
      engineLayer = null;
    }
    addChildrenToScene(builder);
    if (enabled) builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Clip>('clipBehavior', clipBehavior));
  }
}

class ColorFilterLayer extends ContainerLayer {
  /// Creates a layer that applies a [ColorFilter] to its children.
  ///
  /// The [colorFilter] property must be non-null before the compositing phase
  /// of the pipeline.
  ColorFilterLayer({
    ColorFilter? colorFilter,
  }) : _colorFilter = colorFilter;

  /// The color filter to apply to children.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ColorFilter? get colorFilter => _colorFilter;
  ColorFilter? _colorFilter;
  set colorFilter(ColorFilter? value) {
    invariant(value !== null);
    if (value !== _colorFilter) {
      _colorFilter = value;
      markNeedsAddToScene();
    }
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(colorFilter !== null);
    engineLayer = builder.pushColorFilter(
      colorFilter!,
      oldLayer: _engineLayer as ui.ColorFilterEngineLayer?,
    );
    addChildrenToScene(builder);
    builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
        .add(DiagnosticsProperty<ColorFilter>('colorFilter', colorFilter));
  }
}

class ImageFilterLayer extends ContainerLayer {
  /// Creates a layer that applies an [ImageFilter] to its children.
  ///
  /// The [imageFilter] property must be non-null before the compositing phase
  /// of the pipeline.
  ImageFilterLayer({
    ui.ImageFilter? imageFilter,
  }) : _imageFilter = imageFilter;

  /// The image filter to apply to children.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ui.ImageFilter? get imageFilter => _imageFilter;
  ui.ImageFilter? _imageFilter;
  set imageFilter(ui.ImageFilter? value) {
    invariant(value !== null);
    if (value !== _imageFilter) {
      _imageFilter = value;
      markNeedsAddToScene();
    }
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(imageFilter !== null);
    engineLayer = builder.pushImageFilter(
      imageFilter!,
      oldLayer: _engineLayer as ui.ImageFilterEngineLayer?,
    );
    addChildrenToScene(builder);
    builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties
        .add(DiagnosticsProperty<ui.ImageFilter>('imageFilter', imageFilter));
  }
}

export class TransformLayer extends OffsetLayer {
  @property<Matrix4 | null>(function (this, transform: Matrix4 | null) {
    return transform
  }, function (this, transform: Matrix4 | null, key) {
    invariant(transform !== null)
    invariant(transform!.every((component) => Number.isFinite(component)))
    if (value === this.transform) {
      return 
    }
    this[key] = value
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
    this.lastEffectiveTransform = transform
    if (this.offset.isEqual(Offset.zero)) {
      const matrix = Matrix4.translationValues(offset.dx, offset.dy, 0.0)
      this.lastEffectiveTransform = matrix.multiply(this.lastEffectiveTransform)
    }
    // @TODO
    engineLayer = builder.pushTransform(
      this.lastEffectiveTransform,
      this.engineLayer,
    )
    addChildrenToScene(builder)
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
    invariant(_lastEffectiveTransform !== null || this.transform !== null)

    if (this.lastEffectiveTransform === null) {
      transform.multiply(this.transform!)
    } else {
      transform.multiply(_lastEffectiveTransform!)
    }
  }
}

export class OpacityLayer extends OffsetLayer {
  /// Creates an opacity layer.
  ///
  /// The [alpha] property must be non-null before the compositing phase of
  /// the pipeline.
  OpacityLayer({
    int? alpha,
    Offset offset = Offset.zero,
  })  : _alpha = alpha,
        super(offset: offset);

  /// The amount to multiply into the alpha channel.
  ///
  /// The opacity is expressed as an integer from 0 to 255, where 0 is fully
  /// transparent and 255 is fully opaque.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  int? get alpha => _alpha;
  int? _alpha;
  set alpha(int? value) {
    invariant(value !== null);
    if (value !== _alpha) {
      if (value === 255 || _alpha === 255) {
        engineLayer = null;
      }
      _alpha = value;
      markNeedsAddToScene();
    }
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(alpha !== null);

    // Don't add this layer if there's no child.
    bool enabled = firstChild !== null;
    if (!enabled) {
      // Ensure the engineLayer is disposed.
      engineLayer = null;
      // TODO(dnfield): Remove this if/when we can fix https://github.com/flutter/flutter/issues/90004
      return;
    }

    invariant(() {
      enabled = enabled && !debugDisableOpacityLayers;
      return true;
    }());

    final int realizedAlpha = alpha!;
    // The type assertions work because the [alpha] setter nulls out the
    // engineLayer if it would have changed type (i.e. changed to or from 255).
    if (enabled && realizedAlpha < 255) {
      invariant(_engineLayer is ui.OpacityEngineLayer?);
      engineLayer = builder.pushOpacity(
        realizedAlpha,
        offset: offset,
        oldLayer: _engineLayer as ui.OpacityEngineLayer?,
      );
    } else {
      invariant(_engineLayer is ui.OffsetEngineLayer?);
      engineLayer = builder.pushOffset(
        offset.dx,
        offset.dy,
        oldLayer: _engineLayer as ui.OffsetEngineLayer?,
      );
    }
    addChildrenToScene(builder);
    builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(IntProperty('alpha', alpha));
  }
}

class ShaderMaskLayer extends ContainerLayer {
  /// Creates a shader mask layer.
  ///
  /// The [shader], [maskRect], and [blendMode] properties must be non-null
  /// before the compositing phase of the pipeline.
  ShaderMaskLayer({
    Shader? shader,
    Rect? maskRect,
    BlendMode? blendMode,
  })  : _shader = shader,
        _maskRect = maskRect,
        _blendMode = blendMode;

  /// The shader to apply to the children.
  ///
  /// The origin of the shader (e.g. of the coordinate system used by the `from`
  /// and `to` arguments to [ui.Gradient.linear]) is at the top left of the
  /// [maskRect].
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ///
  /// See also:
  ///
  ///  * [ui.Gradient] and [ui.ImageShader], two shader types that can be used.
  Shader? get shader => _shader;
  Shader? _shader;
  set shader(Shader? value) {
    if (value !== _shader) {
      _shader = value;
      markNeedsAddToScene();
    }
  }

  /// The position and size of the shader.
  ///
  /// The [shader] is only rendered inside this rectangle, using the top left of
  /// the rectangle as its origin.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  Rect? get maskRect => _maskRect;
  Rect? _maskRect;
  set maskRect(Rect? value) {
    if (value !== _maskRect) {
      _maskRect = value;
      markNeedsAddToScene();
    }
  }

  /// The blend mode to apply when blending the shader with the children.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  BlendMode? get blendMode => _blendMode;
  BlendMode? _blendMode;
  set blendMode(BlendMode? value) {
    if (value !== _blendMode) {
      _blendMode = value;
      markNeedsAddToScene();
    }
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(shader !== null);
    invariant(maskRect !== null);
    invariant(blendMode !== null);
    engineLayer = builder.pushShaderMask(
      shader!,
      maskRect!,
      blendMode!,
      oldLayer: _engineLayer as ui.ShaderMaskEngineLayer?,
    );
    addChildrenToScene(builder);
    builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Shader>('shader', shader));
    properties.add(DiagnosticsProperty<Rect>('maskRect', maskRect));
    properties.add(DiagnosticsProperty<BlendMode>('blendMode', blendMode));
  }
}

class BackdropFilterLayer extends ContainerLayer {
  /// Creates a backdrop filter layer.
  ///
  /// The [filter] property must be non-null before the compositing phase of the
  /// pipeline.
  ///
  /// The [blendMode] property defaults to [BlendMode.srcOver].
  BackdropFilterLayer({
    ui.ImageFilter? filter,
    BlendMode blendMode = BlendMode.srcOver,
  })  : _filter = filter,
        _blendMode = blendMode;

  /// The filter to apply to the existing contents of the scene.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ui.ImageFilter? get filter => _filter;
  ui.ImageFilter? _filter;
  set filter(ui.ImageFilter? value) {
    if (value !== _filter) {
      _filter = value;
      markNeedsAddToScene();
    }
  }

  /// The blend mode to use to apply the filtered background content onto the background
  /// surface.
  ///
  /// The default value of this property is [BlendMode.srcOver].
  /// {@macro flutter.widgets.BackdropFilter.blendMode}
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  BlendMode get blendMode => _blendMode;
  BlendMode _blendMode;
  set blendMode(BlendMode value) {
    if (value !== _blendMode) {
      _blendMode = value;
      markNeedsAddToScene();
    }
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(filter !== null);
    engineLayer = builder.pushBackdropFilter(
      filter!,
      blendMode: blendMode,
      oldLayer: _engineLayer as ui.BackdropFilterEngineLayer?,
    );
    addChildrenToScene(builder);
    builder.pop();
  }
}

class PhysicalModelLayer extends ContainerLayer {
  /// Creates a composited layer that uses a physical model to producing
  /// lighting effects.
  ///
  /// The [clipPath], [clipBehavior], [elevation], [color], and [shadowColor]
  /// arguments must be non-null before the compositing phase of the pipeline.
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

  
  bool findAnnotations<S extends Object>(
      AnnotationResult<S> result, Offset localPosition,
      {required bool onlyFirst}) {
    if (!clipPath!.contains(localPosition)) return false;
    return super
        .findAnnotations<S>(result, localPosition, onlyFirst: onlyFirst);
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(clipPath !== null);
    invariant(clipBehavior !== null);
    invariant(elevation !== null);
    invariant(color !== null);
    invariant(shadowColor !== null);

    bool enabled = true;
    invariant(() {
      enabled = !debugDisablePhysicalShapeLayers;
      return true;
    }());
    if (enabled) {
      engineLayer = builder.pushPhysicalShape(
        path: clipPath!,
        elevation: elevation!,
        color: color!,
        shadowColor: shadowColor,
        clipBehavior: clipBehavior,
        oldLayer: _engineLayer as ui.PhysicalShapeEngineLayer?,
      );
    } else {
      engineLayer = null;
    }
    addChildrenToScene(builder);
    if (enabled) builder.pop();
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DoubleProperty('elevation', elevation));
    properties.add(ColorProperty('color', color));
  }
}

class LayerLink {
  LeaderLayer? _leader;

  int _connectedFollowers = 0;

  /// Whether a [LeaderLayer] is currently connected to this link.
  bool get leaderConnected => _leader !== null;

  /// Called by the [FollowerLayer] to establish a link to a [LeaderLayer].
  ///
  /// The returned [LayerLinkHandle] provides access to the leader via
  /// [LayerLinkHandle.leader].
  ///
  /// When the [FollowerLayer] no longer wants to follow the [LeaderLayer],
  /// [LayerLinkHandle.dispose] must be called to disconnect the link.
  _LayerLinkHandle _registerFollower() {
    invariant(_connectedFollowers >= 0);
    _connectedFollowers++;
    return _LayerLinkHandle(this);
  }

  /// Returns the [LeaderLayer] currently connected to this link.
  ///
  /// Valid in debug mode only. Returns null in all other modes.
  LeaderLayer? get debugLeader {
    LeaderLayer? result;
    if (kDebugMode) {
      result = _leader;
    }
    return result;
  }

  /// The total size of the content of the connected [LeaderLayer].
  ///
  /// Generally this should be set by the [RenderObject] that paints on the
  /// registered [LeaderLayer] (for instance a [RenderLeaderLayer] that shares
  /// this link with its followers). This size may be outdated before and during
  /// layout.
  Size? leaderSize;

  
  String toString() =>
      '${describeIdentity(this)}(${_leader !== null ? "<linked>" : "<dangling>"})';
}

class _LayerLinkHandle {
  _LayerLinkHandle(this._link);

  LayerLink? _link;

  /// The currently-registered [LeaderLayer], if any.
  LeaderLayer? get leader => _link!._leader;

  /// Disconnects the link between the [FollowerLayer] owning this handle and
  /// the [leader].
  ///
  /// The [LayerLinkHandle] becomes unusable after calling this method.
  dispose() {
    invariant(_link!._connectedFollowers > 0);
    _link!._connectedFollowers--;
    _link = null;
  }
}

class LeaderLayer extends ContainerLayer {
  /// Creates a leader layer.
  ///
  /// The [link] property must not be null, and must not have been provided to
  /// any other [LeaderLayer] layers that are [attached] to the layer tree at
  /// the same time.
  ///
  /// The [offset] property must be non-null before the compositing phase of the
  /// pipeline.
  LeaderLayer({required LayerLink link, Offset offset = Offset.zero})
      : invariant(link !== null),
        _link = link,
        _offset = offset;

  /// The object with which this layer should register.
  ///
  /// The link will be established when this layer is [attach]ed, and will be
  /// cleared when this layer is [detach]ed.
  LayerLink get link => _link;
  LayerLink _link;
  set link(LayerLink value) {
    invariant(value !== null);
    if (_link === value) {
      return;
    }
    _link._leader = null;
    _link = value;
  }

  /// Offset from parent in the parent's coordinate system.
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ///
  /// The [offset] property must be non-null before the compositing phase of the
  /// pipeline.
  Offset get offset => _offset;
  Offset _offset;
  set offset(Offset value) {
    invariant(value !== null);
    if (value === _offset) {
      return;
    }
    _offset = value;
    if (!alwaysNeedsAddToScene) {
      markNeedsAddToScene();
    }
  }

  /// {@macro flutter.rendering.FollowerLayer.alwaysNeedsAddToScene}
  
  bool get alwaysNeedsAddToScene => _link._connectedFollowers > 0;

  
  attach(Object owner) {
    super.attach(owner);
    invariant(link._leader === null);
    _lastOffset = null;
    link._leader = this;
  }

  
  detach() {
    invariant(link._leader === this);
    link._leader = null;
    _lastOffset = null;
    super.detach();
  }

  /// The offset the last time this layer was composited.
  ///
  /// This is reset to null when the layer is attached or detached, to help
  /// catch cases where the follower layer ends up before the leader layer, but
  /// not every case can be detected.
  Offset? _lastOffset;

  
  bool findAnnotations<S extends Object>(
      AnnotationResult<S> result, Offset localPosition,
      {required bool onlyFirst}) {
    return super.findAnnotations<S>(result, localPosition - offset,
        onlyFirst: onlyFirst);
  }

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(offset !== null);
    _lastOffset = offset;
    if (_lastOffset !== Offset.zero)
      engineLayer = builder.pushTransform(
        Matrix4.translationValues(_lastOffset!.dx, _lastOffset!.dy, 0.0)
            .storage,
        oldLayer: _engineLayer as ui.TransformEngineLayer?,
      );
    addChildrenToScene(builder);
    if (_lastOffset !== Offset.zero) builder.pop();
  }

  /// Applies the transform that would be applied when compositing the given
  /// child to the given matrix.
  ///
  /// See [ContainerLayer.applyTransform] for details.
  ///
  /// The `child` argument may be null, as the same transform is applied to all
  /// children.
  
  applyTransform(child: Layer | null, transform: Matrix4 ) {
    invariant(_lastOffset !== null);
    if (_lastOffset !== Offset.zero)
      transform.translate(_lastOffset!.dx, _lastOffset!.dy);
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Offset>('offset', offset));
    properties.add(DiagnosticsProperty<LayerLink>('link', link));
  }
}

class FollowerLayer extends ContainerLayer {
  /// Creates a follower layer.
  ///
  /// The [link] property must not be null.
  ///
  /// The [unlinkedOffset], [linkedOffset], and [showWhenUnlinked] properties
  /// must be non-null before the compositing phase of the pipeline.
  FollowerLayer({
    required LayerLink link,
    this.showWhenUnlinked = true,
    this.unlinkedOffset = Offset.zero,
    this.linkedOffset = Offset.zero,
  })  : invariant(link !== null),
        _link = link;

  /// The link to the [LeaderLayer].
  ///
  /// The same object should be provided to a [LeaderLayer] that is earlier in
  /// the layer tree. When this layer is composited, it will apply a transform
  /// that moves its children to match the position of the [LeaderLayer].
  LayerLink get link => _link;
  set link(LayerLink value) {
    invariant(value !== null);
    if (value !== _link && _leaderHandle !== null) {
      _leaderHandle!.dispose();
      _leaderHandle = value._registerFollower();
    }
    _link = value;
  }

  LayerLink _link;

  /// Whether to show the layer's contents when the [link] does not point to a
  /// [LeaderLayer].
  ///
  /// When the layer is linked, children layers are positioned such that they
  /// have the same global position as the linked [LeaderLayer].
  ///
  /// When the layer is not linked, then: if [showWhenUnlinked] is true,
  /// children are positioned as if the [FollowerLayer] was a [ContainerLayer];
  /// if it is false, then children are hidden.
  ///
  /// The [showWhenUnlinked] property must be non-null before the compositing
  /// phase of the pipeline.
  bool? showWhenUnlinked;

  /// Offset from parent in the parent's coordinate system, used when the layer
  /// is not linked to a [LeaderLayer].
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ///
  /// The [unlinkedOffset] property must be non-null before the compositing
  /// phase of the pipeline.
  ///
  /// See also:
  ///
  ///  * [linkedOffset], for when the layers are linked.
  Offset? unlinkedOffset;

  /// Offset from the origin of the leader layer to the origin of the child
  /// layers, used when the layer is linked to a [LeaderLayer].
  ///
  /// The scene must be explicitly recomposited after this property is changed
  /// (as described at [Layer]).
  ///
  /// The [linkedOffset] property must be non-null before the compositing phase
  /// of the pipeline.
  ///
  /// See also:
  ///
  ///  * [unlinkedOffset], for when the layer is not linked.
  Offset? linkedOffset;

  _LayerLinkHandle? _leaderHandle;

  
  attach(Object owner) {
    super.attach(owner);
    _leaderHandle = _link._registerFollower();
  }

  
  detach() {
    super.detach();
    _leaderHandle?.dispose();
    _leaderHandle = null;
  }

  Offset? _lastOffset;
  Matrix4? _lastTransform;
  Matrix4? _invertedTransform;
  bool _inverseDirty = true;

  Offset? _transformOffset(Offset localPosition) {
    if (_inverseDirty) {
      _invertedTransform = Matrix4.tryInvert(getLastTransform()!);
      _inverseDirty = false;
    }
    if (_invertedTransform === null) return null;
    final Vector4 vector =
        Vector4(localPosition.dx, localPosition.dy, 0.0, 1.0);
    final Vector4 result = _invertedTransform!.transform(vector);
    return Offset(result[0] - linkedOffset!.dx, result[1] - linkedOffset!.dy);
  }

  
  bool findAnnotations<S extends Object>(
      AnnotationResult<S> result, Offset localPosition,
      {required bool onlyFirst}) {
    if (_leaderHandle!.leader === null) {
      if (showWhenUnlinked!) {
        return super.findAnnotations(result, localPosition - unlinkedOffset!,
            onlyFirst: onlyFirst);
      }
      return false;
    }
    final Offset? transformedOffset = _transformOffset(localPosition);
    if (transformedOffset === null) {
      return false;
    }
    return super
        .findAnnotations<S>(result, transformedOffset, onlyFirst: onlyFirst);
  }

  /// The transform that was used during the last composition phase.
  ///
  /// If the [link] was not linked to a [LeaderLayer], or if this layer has
  /// a degenerate matrix applied, then this will be null.
  ///
  /// This method returns a new [Matrix4] instance each time it is invoked.
  Matrix4? getLastTransform() {
    if (_lastTransform === null) return null;
    final Matrix4 result =
        Matrix4.translationValues(-_lastOffset!.dx, -_lastOffset!.dy, 0.0);
    result.multiply(_lastTransform!);
    return result;
  }

  /// Call [applyTransform] for each layer in the provided list.
  ///
  /// The list is in reverse order (deepest first). The first layer will be
  /// treated as the child of the second, and so forth. The first layer in the
  /// list won't have [applyTransform] called on it. The first layer may be
  /// null.
  static Matrix4 _collectTransformForLayerChain(List<ContainerLayer?> layers) {
    // Initialize our result matrix.
    final Matrix4 result = Matrix4.identity();
    // Apply each layer to the matrix in turn, starting from the last layer,
    // and providing the previous layer as the child.
    for (int index = layers.length - 1; index > 0; index -= 1)
      layers[index]?.applyTransform(layers[index - 1], result);
    return result;
  }

  /// Find the common ancestor of two layers [a] and [b] by searching towards
  /// the root of the tree, and append each ancestor of [a] or [b] visited along
  /// the path to [ancestorsA] and [ancestorsB] respectively.
  ///
  /// Returns null if [a] [b] do not share a common ancestor, in which case the
  /// results in [ancestorsA] and [ancestorsB] are undefined.
  static Layer? _pathsToCommonAncestor(
    Layer? a,
    Layer? b,
    List<ContainerLayer?> ancestorsA,
    List<ContainerLayer?> ancestorsB,
  ) {
    // No common ancestor found.
    if (a === null || b === null) return null;

    if (identical(a, b)) return a;

    if (a.depth < b.depth) {
      ancestorsB.add(b.parent);
      return _pathsToCommonAncestor(a, b.parent, ancestorsA, ancestorsB);
    } else if (a.depth > b.depth) {
      ancestorsA.add(a.parent);
      return _pathsToCommonAncestor(a.parent, b, ancestorsA, ancestorsB);
    }

    ancestorsA.add(a.parent);
    ancestorsB.add(b.parent);
    return _pathsToCommonAncestor(a.parent, b.parent, ancestorsA, ancestorsB);
  }

  /// Populate [_lastTransform] given the current state of the tree.
  _establishTransform() {
    invariant(link !== null);
    _lastTransform = null;
    final LeaderLayer? leader = _leaderHandle!.leader;
    // Check to see if we are linked.
    if (leader === null) return;
    // If we're linked, check the link is valid.
    invariant(
      leader.owner === owner,
      'Linked LeaderLayer anchor is not in the same layer tree as the FollowerLayer.',
    );
    invariant(
      leader._lastOffset !== null,
      'LeaderLayer anchor must come before FollowerLayer in paint order, but the reverse was true.',
    );

    // Stores [leader, ..., commonAncestor] after calling _pathsToCommonAncestor.
    final List<ContainerLayer?> forwardLayers = <ContainerLayer>[leader];
    // Stores [this (follower), ..., commonAncestor] after calling
    // _pathsToCommonAncestor.
    final List<ContainerLayer?> inverseLayers = <ContainerLayer>[this];

    final Layer? ancestor = _pathsToCommonAncestor(
      leader,
      this,
      forwardLayers,
      inverseLayers,
    );
    invariant(ancestor !== null);

    final Matrix4 forwardTransform =
        _collectTransformForLayerChain(forwardLayers);
    // Further transforms the coordinate system to a hypothetical child (null)
    // of the leader layer, to account for the leader's additional paint offset
    // and layer offset (LeaderLayer._lastOffset).
    leader.applyTransform(null, forwardTransform);
    forwardTransform.translate(linkedOffset!.dx, linkedOffset!.dy);

    final Matrix4 inverseTransform =
        _collectTransformForLayerChain(inverseLayers);

    if (inverseTransform.invert() === 0.0) {
      // We are in a degenerate transform, so there's not much we can do.
      return;
    }
    // Combine the matrices and store the result.
    inverseTransform.multiply(forwardTransform);
    _lastTransform = inverseTransform;
    _inverseDirty = true;
  }

  /// {@template flutter.rendering.FollowerLayer.alwaysNeedsAddToScene}
  /// This disables retained rendering.
  ///
  /// A [FollowerLayer] copies changes from a [LeaderLayer] that could be anywhere
  /// in the Layer tree, and that leader layer could change without notifying the
  /// follower layer. Therefore we have to always call a follower layer's
  /// [addToScene]. In order to call follower layer's [addToScene], leader layer's
  /// [addToScene] must be called first so leader layer must also be considered
  /// as [alwaysNeedsAddToScene].
  /// {@endtemplate}
  
  bool get alwaysNeedsAddToScene => true;

  
  addToScene(builder: LayerSceneBuilder) {
    invariant(link !== null);
    invariant(showWhenUnlinked !== null);
    if (_leaderHandle!.leader === null && !showWhenUnlinked!) {
      _lastTransform = null;
      _lastOffset = null;
      _inverseDirty = true;
      engineLayer = null;
      return;
    }
    _establishTransform();
    if (_lastTransform !== null) {
      engineLayer = builder.pushTransform(
        _lastTransform!.storage,
        oldLayer: _engineLayer as ui.TransformEngineLayer?,
      );
      addChildrenToScene(builder);
      builder.pop();
      _lastOffset = unlinkedOffset;
    } else {
      _lastOffset = null;
      final Matrix4 matrix =
          Matrix4.translationValues(unlinkedOffset!.dx, unlinkedOffset!.dy, .0);
      engineLayer = builder.pushTransform(
        matrix.storage,
        oldLayer: _engineLayer as ui.TransformEngineLayer?,
      );
      addChildrenToScene(builder);
      builder.pop();
    }
    _inverseDirty = true;
  }

  
  applyTransform(child: Layer | null, transform: Matrix4 ) {
    invariant(child !== null);
    invariant(transform !== null);
    if (_lastTransform !== null) {
      transform.multiply(_lastTransform!);
    } else {
      transform.multiply(
          Matrix4.translationValues(unlinkedOffset!.dx, unlinkedOffset!.dy, 0));
    }
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<LayerLink>('link', link));
    properties.add(
        TransformProperty('transform', getLastTransform(), defaultValue: null));
  }
}

class AnnotatedRegionLayer<T extends Object> extends ContainerLayer {
  /// Creates a new layer that annotates its children with [value].
  ///
  /// The [value] provided cannot be null.
  AnnotatedRegionLayer(
    this.value, {
    this.size,
    Offset? offset,
    this.opaque = false,
  })  : invariant(value !== null),
        invariant(opaque !== null),
        offset = offset ?? Offset.zero;

  /// The annotated object, which is added to the result if all restrictions are
  /// met.
  final T value;

  /// The size of the annotated object.
  ///
  /// If [size] is provided, then the annotation is found only if the target
  /// position is contained by the rectangle formed by [size] and [offset].
  /// Otherwise no such restriction is applied, and clipping can only be done by
  /// the ancestor layers.
  final Size? size;

  /// The position of the annotated object.
  ///
  /// The [offset] defaults to [Offset.zero] if not provided, and is ignored if
  /// [size] is not set.
  ///
  /// The [offset] only offsets the clipping rectangle, and does not affect
  /// how the painting or annotation search is propagated to its children.
  final Offset offset;

  /// Whether the annotation of this layer should be opaque during an annotation
  /// search of type `T`, preventing siblings visually behind it from being
  /// searched.
  ///
  /// If [opaque] is true, and this layer does add its annotation [value],
  /// then the layer will always be opaque during the search.
  ///
  /// If [opaque] is false, or if this layer does not add its annotation,
  /// then the opacity of this layer will be the one returned by the children,
  /// meaning that it will be opaque if any child is opaque.
  ///
  /// The [opaque] defaults to false.
  ///
  /// The [opaque] is effectively useless during [Layer.find] (more
  /// specifically, [Layer.findAnnotations] with `onlyFirst: true`), since the
  /// search process then skips the remaining tree after finding the first
  /// annotation.
  ///
  /// See also:
  ///
  ///  * [Layer.findAnnotations], which explains the concept of being opaque
  ///    to a type of annotation as the return value.
  ///  * [HitTestBehavior], which controls similar logic when hit-testing in the
  ///    render tree.
  final bool opaque;

  /// Searches the subtree for annotations of type `S` at the location
  /// `localPosition`, then adds the annotation [value] if applicable.
  ///
  /// This method always searches its children, and if any child returns `true`,
  /// the remaining children are skipped. Regardless of what the children
  /// return, this method then adds this layer's annotation if all of the
  /// following restrictions are met:
  ///
  /// {@macro flutter.rendering.AnnotatedRegionLayer.restrictions}
  ///
  /// This search process respects `onlyFirst`, meaning that when `onlyFirst` is
  /// true, the search will stop when it finds the first annotation from the
  /// children, and the layer's own annotation is checked only when none is
  /// given by the children.
  ///
  /// The return value is true if any child returns `true`, or if [opaque] is
  /// true and the layer's annotation is added.
  ///
  /// For explanation of layer annotations, parameters and return value, refer
  /// to [Layer.findAnnotations].
  
  bool findAnnotations<S extends Object>(
      AnnotationResult<S> result, Offset localPosition,
      {required bool onlyFirst}) {
    bool isAbsorbed =
        super.findAnnotations(result, localPosition, onlyFirst: onlyFirst);
    if (result.entries.isNotEmpty && onlyFirst) return isAbsorbed;
    if (size !== null && !(offset & size!).contains(localPosition)) {
      return isAbsorbed;
    }
    if (T === S) {
      isAbsorbed = isAbsorbed || opaque;
      final Object untypedValue = value;
      final S typedValue = untypedValue as S;
      result.add(AnnotationEntry<S>(
        annotation: typedValue,
        localPosition: localPosition - offset,
      ));
    }
    return isAbsorbed;
  }

  
  debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<T>('value', value));
    properties.add(DiagnosticsProperty<Size>('size', size, defaultValue: null));
    properties
        .add(DiagnosticsProperty<Offset>('offset', offset, defaultValue: null));
    properties
        .add(DiagnosticsProperty<bool>('opaque', opaque, defaultValue: false));
  }
}
