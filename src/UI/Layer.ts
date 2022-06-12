import { invariant } from 'ts-invariant'
import { property } from '@helper'
import { Offset, Rect } from '@rendering'
import { Matrix4 } from '@math'

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

export class PrerollContext {
  @property(function (this, cullRect: Rect) {
    let cullRect = Rect.largest
    for (const m of this.mutatorsStack) {
      let clipRect
      switch (m.type) {
        case MutatorType.clipRect:
          clipRect = m.rect
          break
        case MutatorType.clipRRect:
          clipRect = m.rrect.outerRect
          break
        case MutatorType.clipPath:
          clipRect = m.path.getBounds()
          break
        default:
          continue
      }
      cullRect = cullRect.intersect(clipRect)
    }
    return cullRect
  }) public cullRect!: Rect

  public rasterCache: RasterCache | null
  public viewEmbedder: HtmlViewEmbedder | null
  public mutatorsStack: MutatorsStack = new MutatorsStack()

  constructor(
    rasterCache, 
    viewEmbedder
  ) {
    this.rasterCache = rasterCache
    this.viewEmbedder = viewEmbedder
  }
}

export class PaintContext {
  
  public internalNodesCanvas: CkNWayCanvas
  public leafNodesCanvas: CkCanvas | null
  public rasterCache: RasterCache | null
  public viewEmbedder: HtmlViewEmbedder | null

  constructor (
    internalNodesCanvas,
    leafNodesCanvas,
    rasterCache,
    viewEmbedder,
  ) {
    this.internalNodesCanvas = internalNodesCanvas 
    this.leafNodesCanvas = leafNodesCanvas 
    this.rasterCache = rasterCache 
    this.viewEmbedder = viewEmbedder 
  }
}

export abstract class Layer implements EngineLayer {
  @property<boolean>(function (this, v) {
    return v
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

  @property<EngineLayer>(function (this, v) {
    return v
  }, function (this, v) {
    invariant(!this.debugDisposed)
    this.engineLayer.dispose()
    this.engineLayer = v

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

  abstract addToScene (builder: SceneBuilder) 

  addToSceneWithRetainedRendering (builder: SceneBuilder) {
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
  }) public picture

  @property<boolean>(function (this, isComplexHint) {
    return isComplexHint
  }, function (this, isComplexHint) {
    if (this.isComplexHint !== isComplexHint) {
      this.isComplexHint = isComplexHint
      this.markNeedsAddToScene()
    }
    
  }) public isComplexHint: boolean = false

  @property<boolean>(function (this, willChangeHint) {
    return willChangeHint
  }, function (this, willChangeHint) {
    if (this.isComplexHint !== willChangeHint) {
      this.isComplexHint = willChangeHint
      this.markNeedsAddToScene()
    }
    
  }) public willChangeHint: boolean = false

  public canvasBounds: Rect

  constructor (canvasBounds: Rect) {
    super()

    this.canvasBounds = canvasBounds
  }

  addToScene (builder: SceneBuilder) {
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

export abstract class ContainerLayer extends Layer {
  @property<Layer[]>(function (this, layers: Layer[]) {
    return layers
  }) public layers: Layer[] = []
  
  
  add (child: Layer) {
    child.parent = this
    this.layers.push(child)
  }

  preroll (
    prerollContext: PrerollContext , 
    matrix: Matrix4
  ) {
    this.paintBounds = this.prerollChildren(prerollContext, matrix)
  }

  
  prerollChildren (
    context: PrerollContext, 
    childMatrix: Matrix4
  ) {
    let childPaintBounds = Rect.zero
    for (const layer of this.layers) {
      layer.preroll(context, childMatrix)
      if (childPaintBounds.isEmpty) {
        childPaintBounds = layer.paintBounds
      } else if (!layer.paintBounds.isEmpty) {
        childPaintBounds = childPaintBounds.expandToInclude(layer.paintBounds)
      }
    }
    return childPaintBounds
  }

  paintChildren (context: PaintContext) {
    invariant(this.needsPainting)

    for (const layer of this.layers) {
      if (layer.needsPainting) {
        layer.paint(context)
      }
    }
  }
}


