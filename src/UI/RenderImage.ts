import { invariant } from 'ts-invariant'
import { property, PropertySetter } from '@helper'
import { Alignment, AlignmentGeometry, BoxFit, ImageRepeat, paintImage } from '@painting'
import { Color, ColorFilter, Image, Offset, Rect, Size } from '@rendering'
import { SkiaBlendMode, FilterQuality, SkiaTextDirection, Skia } from '@skia'
import { BoxConstraints, RenderBox } from './RenderBox'
import { PaintingContext, PipelineOwner } from './RenderObject'

function image<Image>(setter?: PropertySetter<Image>) {
  return property<Image>(function get (this, v: Image) {
    return v
  }, setter ?? function set (this, image: Image) {
    if (image === this.image) {
      return
    }
    
    if (
      this.image != null &&
      image !== null && 
      image.isCloneOf(this.image) 
    ) {
      this.image.dispose()
      return
    }
    this.image?.dispose()
    this._image = image
    
    this.markNeedsPaint()
    if (
      this.width === null || 
      this.height == null
    )
      this.markNeedsLayout()
  })
}

function paint<T>(setter?: PropertySetter<T>) {
  return property<T>(function get (this, v: T) {
    return v
  }, setter ?? function set (this, v: T, k: string) {
    if (v === this[k]) {
      return 
    }

    this[k] = v
    this.markNeedsPaint()
  })
}

function layout<T>(setter?: PropertySetter<T>) {
  return property<T>(function get (this, v: T) {
    return v
  }, setter ?? function set (this, v: T, k: string) {
    if (v === this[k]) {
      return 
    }

    this[k] = v
    this.markNeedsLayout()
  })
}

function resolution<T>(setter?: PropertySetter<T>) {
  return property<T>(function get (this, v: T) {
    return v
  }, setter ?? function set (this, v: T, k: string) {
    if (v === this[k]) {
      return 
    }

    this[k] = v
    this.markNeedResolution()
  })
}

function color<T>() {
  return paint<T>(function set (this, v: T, k: string) {
    if (v === this[k]) {
      return 
    }

    this[k] = v
    this.updateColorFilter()
    this.markNeedsPaint()
  })
}

export type RenderImageInitOptions = {
  image?: Image | null,
  debugImageLabel: string | null,
  width?: number | null,
  height?: number | null,
  scale: number,
  color?: Color | null ,
  opacity?: Animation<null> | null,
  colorBlendMode?: SkiaBlendMode | null ,
  fit?: BoxFit | null,
  alignment: AlignmentGeometry,
  repeat: ImageRepeat,
  centerSlice?: Rect | null,
  matchTextDirection: boolean,
  textDirection?: SkiaTextDirection | null,
  invertColors: boolean,
  isAntiAlias: boolean,
  filterQuality: FilterQuality,
}

export class RenderImage extends RenderBox {
  @property<Animation<number>>(function get (this, opacity: Animation<number>) {
    return opacity
  }, function set (this, opacity: Animation<number>) {
    if (opacity === this.opacity) {
      return 
    }

    if (this.attached) {
      this.opacity.removeListener(this.markNeedsPaint)
      this._opacity = opacity
    } 

    if (this.attached) {
      opacity.addListener(this.markNeedsPaint)
    }
  }) public opacity: Animation<number> | null = null

  @image() public image: Image | null = null

  @layout<number>() public width: number | null = null
  @layout<number>() public height: number | null = null
  @layout<number>() public scale: number | null = null

  @paint<FilterQuality>() public filterQuality: FilterQuality
  @paint<BoxFit>() public fit: BoxFit | null = null
  @paint<boolean>() public isAntiAlias: boolean
  @paint<ImageRepeat>() public repeat: ImageRepeat
  @paint<boolean>() public centerSlice: Rect | null = null
  @paint<boolean>() public invertColors: boolean

  @color<Color>() public color: Color | null = null
  @color<SkiaBlendMode>() public colorBlendMode: SkiaBlendMode | null = null

  @resolution<SkiaTextDirection>() public textDirection: SkiaTextDirection | null = null
  @resolution<AlignmentGeometry>() alignment: AlignmentGeometry
  @resolution<boolean>() public matchTextDirection: boolean
  
  public debugImageLabel: string | null = null
  public resolvedAlignment: Alignment | null = null
  public flipHorizontally: boolean | null = null
  

  constructor (options: RenderImageInitOptions) {
    options.image ??= null
    options.width ??= null
    options.height ??= null
    options.scale ??= 1.0
    options.color ??= null
    options.opacity ??= null
    options.colorBlendMode ??= null
    options.fit ??= null
    options.alignment ??= Alignment.center
    options.repeat ??= ImageRepeat.NoRepeat
    options.centerSlice ??= null
    options.matchTextDirection ??=  false
    options.textDirection ??= null
    options.invertColors ??= false
    options.isAntiAlias ??= false
    options.filterQuality ??= FilterQuality.Low

    invariant(options.repeat !== null)
    invariant(options.alignment !== null)
    invariant(options.filterQuality !== null)
    invariant(options.matchTextDirection !== null)
    invariant(options.isAntiAlias !== null)

    super()

    this.image = options.image
    this.width = options.width
    this.height = options.height
    this.scale = options.scale
    this.color = options.color
    this.opacity = options.opacity
    this.colorBlendMode = options.colorBlendMode
    this.fit = options.fit
    this.alignment = options.alignment
    this.repeat = options.repeat
    this.centerSlice = options.centerSlice
    this.matchTextDirection = options.matchTextDirection
    this.invertColors = options.invertColors
    this.textDirection = options.textDirection
    this.isAntiAlias = options.isAntiAlias
    this.filterQuality = options.filterQuality

    this.updateColorFilter()
  }
  
  resolve () {
    if (this.resolvedAlignment !== null) {
      return
    }
    this.resolvedAlignment = this.alignment.resolve(this.textDirection)
    this.flipHorizontally = (
      this.matchTextDirection && 
      this.textDirection === Skia.TextDirection.RTL
    )
  }

  markNeedResolution () {
    this.resolvedAlignment = null
    this.flipHorizontally = null
    this.markNeedsPaint()
  }

  public colorFilter: ColorFilter | null = null

  updateColorFilter () {
    if (this.color === null) {
      this.colorFilter = null
    } else {
      this.colorFilter = ColorFilter.mode(
        this.color!, 
        this.colorBlendMode ?? Skia.BlendMode.SrcIn
      )
    }
  }

  
  sizeForConstraints (constraints: BoxConstraints): Size {
    constraints = BoxConstraints.tightFor(
      this.width,
      this.height,
    ).enforce(constraints)

    if (this.image == null) {
      return constraints.smallest
    }

    return constraints.constrainSizeAndAttemptToPreserveAspectRatio(new Size(
      this.image!.width / this.scale!,
      this.image!.height / this.scale!,
    ));
  }

  
  computeMinIntrinsicWidth (height: number) {
    invariant(height >= 0.0)
    if (
      this.width === null && 
      this.height === null
    ) {
      return 0.0
    }
    return this.sizeForConstraints(
      BoxConstraints.tightForFinite(this.height)
      ).width
  }

  
  computeMaxIntrinsicWidth (height: number) {
    invariant(height >= 0.0)
    return this.sizeForConstraints(
      BoxConstraints.tightForFinite(this.height)
    ).width
  }

  
  computeMinIntrinsicHeight (width: number) {
    invariant(width >= 0.0)
    if (
      this.width === null && 
      this.height === null
    ) {
      return 0.0
    }
    return this.sizeForConstraints(
      BoxConstraints.tightForFinite(this.width)
    ).height
  }

  
  computeMaxIntrinsicHeight (width: number) {
    invariant(width >= 0.0)
    return this.sizeForConstraints(
      BoxConstraints.tightForFinite(this.width)
    ).height;
  }

  hitTestSelf (position: Offset) {
    return true
  }

  computeDryLayout (constraints: BoxConstraints): Size {
    return this.sizeForConstraints(constraints)
  }

  performLayout () {
    this.size = this.sizeForConstraints(this.constraints)
  }

  attach (owner: PipelineOwner) {
    super.attach(owner)
    this.opacity?.addListener(this.markNeedsPaint)
  }

  detach () {
    this.opacity?.removeListener(this.markNeedsPaint)
    super.detach()
  }

  
  paint (
    context: PaintingContext, 
    offset: Offset
  ) {
    if (this.image === null) {
      return
    }
    this.resolve()
    invariant(this.resolvedAlignment !== null)
    invariant(this.flipHorizontally !== null)
    paintImage(
      context.canvas,
      offset.and(this.size),
      this.image,
      this.debugImageLabel,
      this.scale,
      this.opacity?.value ?? 1.0,
      this.colorFilter,
      this.fit,
      this.resolvedAlignment!,
      this.centerSlice,
      this.repeat,
      this.flipHorizontally!,
      this.invertColors,
      this.filterQuality,
      this.isAntiAlias,
    )
  }

  dispose () {
    this.image?.dispose()
    this.image = null
    super.dispose()
  }
}
