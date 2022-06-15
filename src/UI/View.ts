import { invariant } from 'ts-invariant'
import { property } from '@helper'
import { Matrix4 } from '@math'
import { Offset, Rect, Size } from '@rendering'
import { RenderObject } from './RenderObject'
import { RenderBox } from './RenderBox'
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
    
    this[k] = configuration
    this.replaceRootLayer(this.updateMatricesAndCreateNewRootLayer())
    invariant(this.rootTransform !== null)

    this.markNeedsLayout()
  }) public configuration: ViewConfiguration
  
  @property<Rect>(function (this, paintBounds: Rect) {
    return Offset.zero.and(
      this.size.multiply(this.configuration.devicePixelRatio)
    )
  }) public paintBounds!: Rect

  @property<Rect>(function (this, semanticBounds: Rect) {
    invariant(this.rootTransform !== null)
    return Offset.zero.and(
      this.size.multiply(this.configuration.devicePixelRatio)
    )
  }) public semanticBounds!: Rect

  @property<RenderObject>(function (this, child: RenderObject) {
    return child
  }, function (this, child: RenderObject, key: string) {
    if (this.child !== null) {
      this.dropChild(this.child)
    }

    this[key] = child
    if (this.child !== null) {
      this.adoptChild(this.child)
    }
  }) public child!: RenderObject | null
  
  public window
  public automaticSystemUiAdjustment: boolean = true
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

  /// Uploads the composited layer tree to the engine.
  ///
  /// Actually causes the output of the rendering pipeline to appear on screen.
  void compositeFrame() {
    if (!kReleaseMode) {
      Timeline.startSync('COMPOSITING', arguments: timelineArgumentsIndicatingLandmarkEvent);
    }
    try {
      final ui.SceneBuilder builder = ui.SceneBuilder();
      final ui.Scene scene = layer!.buildScene(builder);
      if (automaticSystemUiAdjustment)
        _updateSystemChrome();
      _window.render(scene);
      scene.dispose();
      assert(() {
        if (debugRepaintRainbowEnabled || debugRepaintTextRainbowEnabled)
          debugCurrentRepaintColor = debugCurrentRepaintColor.withHue((debugCurrentRepaintColor.hue + 2.0) % 360.0);
        return true;
      }());
    } finally {
      if (!kReleaseMode) {
        Timeline.finishSync();
      }
    }
  }

  void _updateSystemChrome() {
    // Take overlay style from the place where a system status bar and system
    // navigation bar are placed to update system style overlay.
    // The center of the system navigation bar and the center of the status bar
    // are used to get SystemUiOverlayStyle's to update system overlay appearance.
    //
    //         Horizontal center of the screen
    //                 V
    //    ++++++++++++++++++++++++++
    //    |                        |
    //    |    System status bar   |  <- Vertical center of the status bar
    //    |                        |
    //    ++++++++++++++++++++++++++
    //    |                        |
    //    |        Content         |
    //    ~                        ~
    //    |                        |
    //    ++++++++++++++++++++++++++
    //    |                        |
    //    |  System navigation bar | <- Vertical center of the navigation bar
    //    |                        |
    //    ++++++++++++++++++++++++++ <- bounds.bottom
    final Rect bounds = paintBounds;
    // Center of the status bar
    final Offset top = Offset(
      // Horizontal center of the screen
      bounds.center.dx,
      // The vertical center of the system status bar. The system status bar
      // height is kept as top window padding.
      _window.padding.top / 2.0,
    );
    // Center of the navigation bar
    final Offset bottom = Offset(
      // Horizontal center of the screen
      bounds.center.dx,
      // Vertical center of the system navigation bar. The system navigation bar
      // height is kept as bottom window padding. The "1" needs to be subtracted
      // from the bottom because available pixels are in (0..bottom) range.
      // I.e. for a device with 1920 height, bound.bottom is 1920, but the most
      // bottom drawn pixel is at 1919 position.
      bounds.bottom - 1.0 - _window.padding.bottom / 2.0,
    );
    final SystemUiOverlayStyle? upperOverlayStyle = layer!.find<SystemUiOverlayStyle>(top);
    // Only android has a customizable system navigation bar.
    SystemUiOverlayStyle? lowerOverlayStyle;
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        lowerOverlayStyle = layer!.find<SystemUiOverlayStyle>(bottom);
        break;
      case TargetPlatform.fuchsia:
      case TargetPlatform.iOS:
      case TargetPlatform.linux:
      case TargetPlatform.macOS:
      case TargetPlatform.windows:
        break;
    }
    // If there are no overlay styles in the UI don't bother updating.
    if (upperOverlayStyle != null || lowerOverlayStyle != null) {
      final SystemUiOverlayStyle overlayStyle = SystemUiOverlayStyle(
        statusBarBrightness: upperOverlayStyle?.statusBarBrightness,
        statusBarIconBrightness: upperOverlayStyle?.statusBarIconBrightness,
        statusBarColor: upperOverlayStyle?.statusBarColor,
        systemStatusBarContrastEnforced: upperOverlayStyle?.systemStatusBarContrastEnforced,
        systemNavigationBarColor: lowerOverlayStyle?.systemNavigationBarColor,
        systemNavigationBarDividerColor: lowerOverlayStyle?.systemNavigationBarDividerColor,
        systemNavigationBarIconBrightness: lowerOverlayStyle?.systemNavigationBarIconBrightness,
        systemNavigationBarContrastEnforced: lowerOverlayStyle?.systemNavigationBarContrastEnforced,
      );
      SystemChrome.setSystemUIOverlayStyle(overlayStyle);
    }
  }

  @override
  Rect get paintBounds => Offset.zero & (size * configuration.devicePixelRatio);

  @override
  Rect get semanticBounds {
    assert(_rootTransform != null);
    return MatrixUtils.transformRect(_rootTransform!, Offset.zero & size);
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    // call to ${super.debugFillProperties(description)} is omitted because the
    // root superclasses don't include any interesting information for this
    // class
    assert(() {
      properties.add(DiagnosticsNode.message('debug mode enabled - ${kIsWeb ? 'Web' :  Platform.operatingSystem}'));
      return true;
    }());
    properties.add(DiagnosticsProperty<Size>('window size', _window.physicalSize, tooltip: 'in physical pixels'));
    properties.add(DoubleProperty('device pixel ratio', _window.devicePixelRatio, tooltip: 'physical pixels per logical pixel'));
    properties.add(DiagnosticsProperty<ViewConfiguration>('configuration', configuration, tooltip: 'in logical pixels'));
    if (_window.platformDispatcher.semanticsEnabled)
      properties.add(DiagnosticsNode.message('semantics enabled'));
  }
}
