import { invariant } from 'ts-invariant'
import { property, transformRect, computeSkiaShadowBounds } from '@helper'
import { Matrix4 } from '@math'
import { Rect, NWayCanvas } from '@rendering'
import { SkiaBlendMode, SkiaFilterQuality, SkiaImageFilter } from '@skia'
import { MutatorsStack, MutatorType } from './EmbeddedViews'
import { RasterCache } from './RasterCache'
import { Canvas } from './Canvas'
import { Paint } from './Paint'
import { Color } from './Painting'
import { Path } from './Path'
import { Offset, RRect } from './Geometry'
import { ImageFilter } from './ImageFilter'
import { Shader } from './Shader'
import { ColorFilter } from './ColorFilter'
import { Picture } from './Picture'

export enum Clip {
  None,
  HardEdge,
  AntiAlias,
  AntiAliasWithSaveLayer,
}

export class EngineLayer {
  dispose () {}
}

export abstract class Layer implements EngineLayer {
  @property<boolean>(function (this) {
    return !this.paintBounds.isEmpty
  }) public needsPainting!: boolean

  public parent: ContainerLayer | null = null
  public paintBounds: Rect = Rect.zero

  abstract preroll (
    prerollContext: PrerollContext,
    matrix: Matrix4
  ): void
  abstract paint (
    paintContext: PaintContext
  ): void

  dispose () {}
}

export class PrerollContext {
  @property<Rect>(function (this) {
    let cullRect = Rect.largest
    for (const m of this.mutatorsStack) {
      let clipRect: Rect
      switch (m.type) {
        case MutatorType.ClipRect:
          clipRect = m.rect
          break
        case MutatorType.ClipRRect:
          clipRect = m.rrect.outerRect
          break
        case MutatorType.ClipPath:
          clipRect = m.path.getBounds();
          break
        default:
          continue
      }

      cullRect = cullRect.intersect(clipRect)
    }
    return cullRect
  }) public cullRect!: Rect

  public rasterCache: RasterCache | null
  public mutatorsStack: MutatorsStack = new MutatorsStack()

  constructor (
    rasterCache: RasterCache, 
  ) {
    this.rasterCache = rasterCache 
  }
}

export class PaintContext {
  public internalNodesCanvas: NWayCanvas
  public leafNodesCanvas: Canvas
  public rasterCache: RasterCache | null

  constructor (
    internalNodesCanvas: NWayCanvas,
    leafNodesCanvas: Canvas,
    rasterCache: RasterCache
  ) {
    this.internalNodesCanvas = internalNodesCanvas
    this.leafNodesCanvas = leafNodesCanvas
    this.rasterCache = rasterCache
  }
}


export abstract class ContainerLayer extends Layer {
  @property<Layer[]>(function (this) {
    return this.layers
  }) public debugLayers!: Layer[]

  public layers: Layer[] = []

  prerollChildren (
    context: PrerollContext, 
    childMatrix: Matrix4
  ): Rect {
    let childPaintBounds: Rect = Rect.zero
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

  preroll(
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    this.paintBounds = this.prerollChildren(prerollContext, matrix)
  }

  add (child: Layer) {
    child.parent = this
    this.layers.push(child)
  }
}

export class RootLayer extends ContainerLayer {
  paint (paintContext: PaintContext) {
    this.paintChildren(paintContext)
  }
}


export class BackdropFilterEngineLayer extends ContainerLayer {
  public filter: ImageFilter
  public blendMode: SkiaBlendMode

  constructor (
    filter: ImageFilter, 
    blendMode: SkiaBlendMode
  ) {
    super()
    this.filter = filter
    this.blendMode = blendMode
  }

  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    const childBounds: Rect = this.prerollChildren(prerollContext, matrix)
    this.paintBounds = childBounds.expandToInclude(prerollContext.cullRect)
  }

  paint (paintContext: PaintContext) {
    const paint = Paint.malloc()
    paint.blendMode = this.blendMode
    paintContext.internalNodesCanvas.saveLayerWithFilter(
      this.paintBounds, 
      this.filter, 
      paint
    )

    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restore()
  }
}


export class ClipPathEngineLayer extends ContainerLayer {
  public clipPath: Path
  public clipBehavior: Clip

  constructor (
    clipPath: Path, 
    clipBehavior: Clip
  ) {
    invariant(clipBehavior !== Clip.None)
    super()
    this.clipPath = clipPath
    this.clipBehavior = clipBehavior
  }

  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    prerollContext.mutatorsStack.pushClipPath(this.clipPath)
    const childPaintBounds: Rect = this.prerollChildren(prerollContext, matrix)
    const clipBounds: Rect = this.clipPath.getBounds()
    if (childPaintBounds.overlaps(clipBounds)) {
      this.paintBounds = childPaintBounds.intersect(clipBounds)
    }
    prerollContext.mutatorsStack.pop()
  }

  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)

    paintContext.internalNodesCanvas.save()
    paintContext.internalNodesCanvas.clipPath(
      this.clipPath, 
      this.clipBehavior !== Clip.HardEdge
    )

    if (this.clipBehavior === Clip.AntiAliasWithSaveLayer) {
      paintContext.internalNodesCanvas.saveLayer(this.paintBounds, null)
    }

    this.paintChildren(paintContext)
    if (this.clipBehavior === Clip.AntiAliasWithSaveLayer) {
      paintContext.internalNodesCanvas.restore()
    }

    paintContext.internalNodesCanvas.restore()
  }
}


export class ClipRRectEngineLayer extends ContainerLayer {
  public clipRRect: RRect
  public clipBehavior: Clip | null

  constructor (
    clipRRect: RRect, 
    clipBehavior: Clip
  ) {
    invariant(clipBehavior !== Clip.None)
    super()

    this.clipRRect = clipRRect
    this.clipBehavior = clipBehavior
  }

  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    prerollContext.mutatorsStack.pushClipRRect(this.clipRRect)
    const childPaintBounds: Rect = this.prerollChildren(prerollContext, matrix)
    if (childPaintBounds.overlaps(this.clipRRect.outerRect)) {
      this.paintBounds = childPaintBounds.intersect(this.clipRRect.outerRect)
    }
    prerollContext.mutatorsStack.pop()
  }

  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)

    paintContext.internalNodesCanvas.save()
    paintContext.internalNodesCanvas.clipRRect(
      this.clipRRect, 
      this.clipBehavior !== Clip.HardEdge
    )
    if (this.clipBehavior === Clip.AntiAliasWithSaveLayer) {
      paintContext.internalNodesCanvas.saveLayer(this.paintBounds, null)
    }
    this.paintChildren(paintContext)
    if (this.clipBehavior === Clip.AntiAliasWithSaveLayer) {
      paintContext.internalNodesCanvas.restore()
    }
    paintContext.internalNodesCanvas.restore()
  }
}

export class OpacityEngineLayer extends ContainerLayer {
  public alpha: number
  public offset: Offset

  constructor (
    alpha: number,
    offset: Offset
  ) {
    super()

    this.alpha = alpha
    this.offset = offset
  }

  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    const childMatrix: Matrix4 = Matrix4.copy(matrix)
    childMatrix.translate(this.offset.dx, this.offset.dy)
    prerollContext.mutatorsStack.pushTransform(Matrix4.translationValues(this.offset.dx, this.offset.dy, 0.0))
    prerollContext.mutatorsStack.pushOpacity(this.alpha)
    super.preroll(prerollContext, childMatrix)
    prerollContext.mutatorsStack.pop()
    prerollContext.mutatorsStack.pop()
    this.paintBounds = this.paintBounds.translate(this.offset.dx, this.offset.dy)
  }

  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)

    const paint: Paint = Paint.malloc()
    paint.color = Color.fromARGB(this.alpha, 0, 0, 0)

    paintContext.internalNodesCanvas.save()
    paintContext.internalNodesCanvas.translate(this.offset.dx, this.offset.dy)

    const saveLayerBounds: Rect = this.paintBounds.shift(this.offset.opposite())

    paintContext.internalNodesCanvas.saveLayer(saveLayerBounds, paint)
    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restore()
    paintContext.internalNodesCanvas.restore()
  }
}

export class TransformEngineLayer extends ContainerLayer {
  public transform: Matrix4
  
  constructor (transform: Matrix4) {
    super()

    this.transform = transform
  }

  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    const childMatrix: Matrix4 = matrix.multiplied(this.transform)
    prerollContext.mutatorsStack.pushTransform(this.transform)
    const childPaintBounds: Rect = this.prerollChildren(prerollContext, childMatrix)
    this.paintBounds = transformRect(this.transform, childPaintBounds)
    prerollContext.mutatorsStack.pop()
  }

  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)

    paintContext.internalNodesCanvas.save()
    paintContext.internalNodesCanvas.transform(this.transform)
    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restore()
  }
}

export class OffsetEngineLayer extends TransformEngineLayer {
  constructor (dx: number, dy: number) {
    super(Matrix4.translationValues(dx, dy, 0.0))
  }
}

export class ImageFilterEngineLayer extends ContainerLayer {
  public filter: SkiaImageFilter
  constructor (filter: SkiaImageFilter) {
    super()

    this.filter = filter
  }

  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)
    const paint: Paint = Paint.malloc()
    paint.imageFilter = this.filter
    paintContext.internalNodesCanvas.saveLayer(this.paintBounds, paint)
    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restore()
  }
}

export class ShaderMaskEngineLayer extends ContainerLayer {
  public shader: Shader
  public maskRect: Rect
  public blendMode: SkiaBlendMode
  public filterQuality: SkiaFilterQuality

  constructor (
    shader: Shader,
    maskRect: Rect,
    blendMode: SkiaBlendMode,
    filterQuality: SkiaFilterQuality
  ) {
    super()

    this.shader = shader
    this.maskRect = maskRect
    this.blendMode = blendMode
    this.filterQuality = filterQuality
  }

  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)

    paintContext.internalNodesCanvas.saveLayer(this.paintBounds, null)
    this.paintChildren(paintContext)

    const paint: Paint = Paint.malloc()
    paint.shader = this.shader
    paint.blendMode = this.blendMode
    paint.filterQuality = this.filterQuality

    paintContext.leafNodesCanvas.save()
    paintContext.leafNodesCanvas.translate(this.maskRect.left, this.maskRect.top)

    paintContext.leafNodesCanvas!.drawRect(
      Rect.fromLTWH(0, 0, this.maskRect.width, this.maskRect.height), 
      paint
    )
    paintContext.leafNodesCanvas.restore()
    paintContext.internalNodesCanvas.restore()
  }
}

export class PictureLayer extends Layer {
  public picture: Picture
  public offset: Offset
  public isComplex: boolean
  public willChange: boolean

  constructor (
    picture: Picture,
    offset: Offset,
    isComplex: boolean,
    willChange: boolean
  ) {
    super()
    this.picture = picture
    this.offset  = offset 
    this.isComplex = isComplex
    this.willChange = willChange
  }

  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    this.paintBounds = this.picture.cullRect.shift(this.offset)
  }

  paint (paintContext: PaintContext) {
    invariant(this.picture !== null) 
    invariant(this.needsPainting)

    paintContext.leafNodesCanvas.save()
    paintContext.leafNodesCanvas.translate(this.offset.dx, this.offset.dy)

    paintContext.leafNodesCanvas.drawPicture(this.picture)
    paintContext.leafNodesCanvas.restore()
  }
}

export class PhysicalShapeEngineLayer extends ContainerLayer {
  static drawShadow (
    canvas: Canvas, 
    path: Path, 
    color: Color,
    elevation: number, 
    transparentOccluder: boolean
  ) {
  canvas.drawShadow(
    path, 
    color, 
    elevation, 
    transparentOccluder
  )
}

  public elevation: number
  public color: Color
  public shadowColor: Color
  public path: Path
  public clipBehavior: Clip

  constructor (
    elevation: number,
    color: Color,
    shadowColor: Color,
    path: Path,
    clipBehavior: Clip
  ) {
    super()
    this.elevation = elevation
    this.color = color
    this.shadowColor = shadowColor
    this.path = path
    this.clipBehavior = clipBehavior
  }

  preroll (
    prerollContext: PrerollContext, 
    matrix: Matrix4
  ) {
    this.prerollChildren(prerollContext, matrix)
    this.paintBounds = computeSkiaShadowBounds(
      this.path, 
      this.elevation, 
      2, //window.devicePixelRatio, 
      matrix
    )
  }

  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)

    if (this.elevation !== 0) {
      PhysicalShapeEngineLayer.drawShadow(
        paintContext.leafNodesCanvas, 
        this.path, 
        this.shadowColor,
        this.elevation, 
        this.color.alpha !== 0xff
      )
    }

    const paint: Paint = Paint.malloc()
    paint.color = this.color
    
    if (this.clipBehavior !== Clip.AntiAliasWithSaveLayer) {
      paintContext.leafNodesCanvas!.drawPath(this.path, paint)
    }

    const saveCount = paintContext.internalNodesCanvas.save()
    switch (this.clipBehavior) {
      case Clip.HardEdge:
        paintContext.internalNodesCanvas.clipPath(this.path, false)
        break
      case Clip.AntiAlias:
        paintContext.internalNodesCanvas.clipPath(this.path, true)
        break
      case Clip.AntiAliasWithSaveLayer:
        paintContext.internalNodesCanvas.clipPath(this.path, true)
        paintContext.internalNodesCanvas.saveLayer(this.paintBounds, null)
        break
      case Clip.None:
        break
    }

    if (this.clipBehavior === Clip.AntiAliasWithSaveLayer) {
      paintContext.leafNodesCanvas!.drawPaint(paint)
    }

    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restoreToCount(saveCount)
  }
}

export class ColorFilterEngineLayer extends ContainerLayer {
  public filter: ColorFilter
  
  constructor (filter: ColorFilter) {
    super()

    this.filter = filter
  }


  paint (paintContext: PaintContext) {
    invariant(this.needsPainting)

    const paint: Paint = Paint.malloc()
    paint.colorFilter = this.filter

    paintContext.internalNodesCanvas.saveLayer(this.paintBounds, paint)
    this.paintChildren(paintContext)
    paintContext.internalNodesCanvas.restore()
  }
}
