import { invariant } from 'ts-invariant'
import { Matrix4, MatrixUtils } from '@math'
import { property } from '@helper'
import { HitTestEntry, HitTestResult } from '@gestures'
import { LayerSceneBuilder, Offset, Rect, Size } from '@rendering'
import { PaintingContext, RenderObject } from './RenderObject'
import { BoxConstraints, BoxHitTestResult, RenderBox } from './RenderBox'
import { TransformLayer } from './Layer'

export class ViewConfiguration {
  public size: Size
  public devicePixelRatio: number

  constructor(
    size = Size.zero,
    devicePixelRatio = 1.0,
  ) {
    this.size = size
    this.devicePixelRatio = devicePixelRatio
  }


  toMatrix (): Matrix4 {
    return Matrix4.diagonal3Values(devicePixelRatio, devicePixelRatio, 1.0)
  }

  
  eq (other: ViewConfiguration) {
    if (other === this) {
      return true
    }

    return (
      other instanceof ViewConfiguration &&
      other.size === this.size &&
      other.devicePixelRatio === this.devicePixelRatio
    )
  }
  
  toString () {
    return ``
  }
}


export class RenderView extends RenderObject {
  @property<Size>() public size: Size = Size.zero

  @property<ViewConfiguration>(function (this, configuration: ViewConfiguration) {
    return configuration
  }, function (this, configuration: ViewConfiguration, k) {
    invariant(configuration != null);
    if (this.configuration == configuration) {
      return
    }
    
    this._configuration = configuration
    this.replaceRootLayer(this.updateMatricesAndCreateNewRootLayer())
    invariant(this.rootTransform !== null)

    this.markNeedsLayout()
  }) public configuration: ViewConfiguration
  
  @property<Rect>(function (this) {
    return Offset.zero.and(
      this.size.multiply(this.configuration.devicePixelRatio)
    )
  }) public paintBounds!: Rect

  @property<RenderObject>(function (this, child: RenderObject) {
    return child
  }, function (this, child: RenderObject, key: string) {
    if (this.child !== null) {
      this.dropChild(this.child)
    }

    this._child = child
    if (this.child !== null) {
      this.adoptChild(this.child)
    }
  }) public child!: RenderObject | null
  
  public window
  public automaticSystemUIAdjustment: boolean = true
  public rootTransform: Matrix4 | null = null
  public isRepaintBoundary: boolean = true

  constructor (
    child: RenderBox | null,
    configuration: ViewConfiguration,
    window,
  ) {
    invariant(configuration !== null)
    super()
    this.configuration = configuration,
    this.window = window 
    this.child = child
  }

  prepareInitialFrame () {
    invariant(this.owner !== null)
    invariant(this.rootTransform === null)
    
    this.scheduleInitialLayout()
    this.scheduleInitialPaint(this.updateMatricesAndCreateNewRootLayer())
    invariant(this.rootTransform !== null)
  }

  updateMatricesAndCreateNewRootLayer (): TransformLayer {
    this.rootTransform = this.configuration.toMatrix()
    const rootLayer = new TransformLayer(this.rootTransform)
    
    rootLayer.attach(this)
    invariant(this.rootTransform !== null)
    return rootLayer
  }

  debugAssertDoesMeetConstraints () { 
    invariant(false)
  }

  
  performResize () {
    invariant(false)
  }

  
  performLayout () {
    invariant(this.rootTransform !== null)
    this.size = this.configuration.size
    invariant(Number.isFinite(this.size))

    if (this.child !== null)
      this.child!.layout(BoxConstraints.tight(this.size))
  }

  rotate (
    oldAngle?: number | null, 
    newAngle?: number | null, 
    time?: number | null
  ) {
    invariant(false)
  }

  
  hitTest (
    result: HitTestResult, 
    position: Offset 
  ): boolean {
    if (this.child !== null) {
      this.child.hitTest(
        BoxHitTestResult.wrap(result), 
        position
      )
    }

    result.add(new HitTestEntry(this))
    return true
  }

  hitTestMouseTrackers (position: Offset): HitTestResult  {
    invariant(position !== null)
    const result = new BoxHitTestResult()
    this.hitTest(result, position)
    return result
  }

  paint (
    context: PaintingContext, 
    offset: Offset
  ) {
    if (this.child !== null) {
      context.paintChild(this.child!, offset)
    }
  }

  applyPaintTransform (
    child: RenderBox, 
    transform: Matrix4
  ) {
    invariant(this.rootTransform !== null)
    transform.multiply(this.rootTransform!)
    super.applyPaintTransform(child, transform)
  }

  compositeFrame () {
    try {
      const builder = new LayerSceneBuilder()
      const scene = this.layer!.buildScene(builder)
      // @TODO-SYSTEM
     
      this.window.render(scene)
      scene.dispose()
    } finally {
      // @TODO-DEBUG
      // if (!kReleaseMode) {
      //   Timeline.finishSync();
      // }
    }
  }
}
