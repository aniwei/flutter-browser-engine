import { invariant } from 'ts-invariant'
import { Canvas } from './Canvas'
import { window } from '@ui/Window'
import { PlatformDispatcher } from './PlatformDispatcher'
import { SurfaceFactory } from './SurfaceFactory'
import { CanvasKitError } from '@internal/CanvasKitError'
import { Skia, SkiaCanvas, SkiaGrDirectContext, SkiaSurface } from '@skia/Skia'
import type { Size } from '@internal/Geometry'

export type SubmitCallback = { (frame: SurfaceFrame, canvas: Canvas): boolean } 

export class SurfaceFrame {
  public skia: SkiaSurface
  public submitCallback: SubmitCallback
  public submitted: boolean
  
  public get canvas () {
    return Canvas.malloc(this.skia.getCanvas())
  }

  constructor (
    skia: SkiaSurface,
    onSubmit: SubmitCallback
  ) {
    invariant(skia !== null)
    invariant(onSubmit !== null)

    this.skia = skia
    this.submitCallback = onSubmit
    this.submitted = false
  }

  submit () {
    if (this.submitted) {
      return false
    }

    return this.submitCallback(this, this.canvas)
  }
}


export class Surface {
  public surface: SkiaSurface | null = null
  public forceNewContext: boolean = true
  
  public contextLost: boolean = false

  public skiaCacheBytes: number | null = null
  public grContext: SkiaGrDirectContext | null = null
  public glContext: number | null = null

  public cachedContextLostListener: { (event): void } | null = null
  public cachedContextRestoredListener: { (event): void } | null = null
  public pixelWidth: number = -1
  public pixelHeight: number = -1

  public addedToScene: boolean = false
  public currentCanvasPhysicalSize: Size | null = null
  public currentSurfaceSize: Size | null = null
  public currentDevicePixelRatio: number = -1

  
  // TODO
  // final html.Element htmlElement = html.Element.tag('flt-canvas-container')
  // html.CanvasElement? htmlCanvas;

  setSkiaResourceCacheMaxBytes (bytes: number) {
    this.skiaCacheBytes = bytes
    this.syncCacheBytes()
  }

  syncCacheBytes () {
    if (this.skiaCacheBytes !== null) {
      this.grContext?.setResourceCacheLimitBytes(this.skiaCacheBytes!)
    }
  }

  acquireFrame (size: Size): SurfaceFrame {
    const surface: SkiaSurface = this.createOrUpdateSurface(size)

    const submitCallback: SubmitCallback = (
      surfaceFrame: SurfaceFrame, 
      canvas: Canvas
    ) => {
      return this.presentSurface()
    }

    return new SurfaceFrame(surface, submitCallback)
  }

  addToScene () {
    if (!this.addedToScene) {
      // html
      // skiaSceneHost!.children.insert(0, htmlElement)
    }
    this.addedToScene = true
  }

  createOrUpdateSurface (size: Size): SkiaSurface {
    if (size.isEmpty) {
      throw new CanvasKitError('Cannot create surfaces of empty size.')
    }

    const previousSurfaceSize = this.currentSurfaceSize
    if (
      !this.forceNewContext &&
      previousSurfaceSize !== null &&
      size.width == previousSurfaceSize.width &&
      size.height == previousSurfaceSize.height
    ) {
      if (window.devicePixelRatio !== this.currentDevicePixelRatio) {
        // this.updateLogicalHtmlCanvasSize()
      }

      return this.surface!
    }

    this.currentDevicePixelRatio = window.devicePixelRatio

    const previousCanvasSize = this.currentCanvasPhysicalSize
    if (
      this.forceNewContext ||
      previousCanvasSize === null ||
      size.width > previousCanvasSize.width ||
      size.height > previousCanvasSize.height
    ) {
      const newSize = previousCanvasSize === null 
        ? size 
        : size.multiply(1.5)

      this.surface?.dispose()
      this.surface = null
      this.addedToScene = false
      this.grContext?.releaseResourcesAndAbandonContext()
      this.grContext?.delete()
      this.grContext = null

      this.createNewCanvas(newSize)
      this.currentCanvasPhysicalSize = newSize
    }

    this.currentSurfaceSize = size
    this.translateCanvas()
    return this.surface = this.createNewSurface(size)
  }

  // TODO
  // void _updateLogicalHtmlCanvasSize() {
  //   final double logicalWidth = _pixelWidth / window.devicePixelRatio;
  //   final double logicalHeight = _pixelHeight / window.devicePixelRatio;
  //   htmlCanvas!.style
  //     ..width = '${logicalWidth}px'
  //     ..height = '${logicalHeight}px';
  // }

  
  translateCanvas () {
    const surfaceHeight = Math.ceil(this.currentSurfaceSize!.height)
    const offset = (this.pixelHeight - surfaceHeight) / window.devicePixelRatio
    
    // TODO
    // htmlCanvas!.style.transform = 'translate(0, -${offset}px)';
  }

  contextRestoredListener (event) {
    invariant(
      this.contextLost,
      'Received "webglcontextrestored" event but never received a "webglcontextlost" event.'
    )
    this.contextLost = false
    
    PlatformDispatcher.instance.invokeOnMetricsChanged()
    event.stopPropagation()
    event.preventDefault()
  }

  contextLostListener (event) {
    // TODO
    // invariant(
    //   event.target === htmlCanvas,
    //   'Received a context lost event for a disposed canvas'
    // )
    const factory = SurfaceFactory.instance
    this.contextLost = true
    if (factory.isLive(this)) {
      this.forceNewContext = true
      event.preventDefault()
    } else {
      this.dispose()
    }
  }

  createNewCanvas (physicalSize: Size) {
    // TODO
    // if (this.htmlCanvas != null) {
    //   this.htmlCanvas!.removeEventListener(
    //         'webglcontextrestored',
    //         _cachedContextRestoredListener,
    //         false,
    //       );
    //   this.htmlCanvas!.removeEventListener(
    //         'webglcontextlost',
    //         _cachedContextLostListener,
    //         false,
    //       );
    //   this.htmlCanvas!.remove();
    //   _cachedContextRestoredListener = null;
    //   _cachedContextLostListener = null;
    // }

    
    this.pixelWidth = Math.ceil(physicalSize.width)
    this.pixelHeight = Math.ceil(physicalSize.height)
    // TODO
    // final html.CanvasElement htmlCanvas = html.CanvasElement(
    //   width: _pixelWidth,
    //   height: _pixelHeight,
    // );
    // this.htmlCanvas = htmlCanvas;
    // htmlCanvas.style.position = 'absolute';
    // _updateLogicalHtmlCanvasSize();

    this.cachedContextRestoredListener = this.contextRestoredListener
    this.cachedContextLostListener = this.contextLostListener
    // TODO
    // htmlCanvas.addEventListener(
    //   'webglcontextlost',
    //   this.cachedContextLostListener,
    //   false,
    // )
    // htmlCanvas.addEventListener(
    //   'webglcontextrestored',
    //   _cachedContextRestoredListener,
    //   false,
    // )
    this.forceNewContext = false
    this.contextLost = false

    if (webGLVersion != -1 && !configuration.canvasKitForceCpuOnly) {
      const glContext = Skia.GetWebGLContext(
        htmlCanvas,
        SkWebGLContextOptions(
          // Default to no anti-aliasing. Paint commands can be explicitly
          // anti-aliased by setting their `Paint` object's `antialias` property.
          antialias: 0,
          majorVersion: webGLVersion,
        ),
      );

      this.glContext = glContext

      if (this.glContext !== 0) {
        this.grContext = Skia.MakeGrContext(this.glContext)
        if (this.grContext === null) {
          throw new CanvasKitError('Failed to initialize CanvasKit.\nCanvasKit.MakeGrContext returned null.')
        }
        
        this.syncCacheBytes()
      }
    }

    // htmlElement.append(htmlCanvas)
  }

  createNewSurface (size: Size): SkiaSurface {
    invariant(htmlCanvas !== null)
    if (webGLVersion == -1) {
      return _makeSoftwareCanvasSurface(
          htmlCanvas!, 'WebGL support not detected');
    } else if (configuration.canvasKitForceCpuOnly) {
      return _makeSoftwareCanvasSurface(
          htmlCanvas!, 'CPU rendering forced by application');
    } else if (_glContext == 0) {
      return _makeSoftwareCanvasSurface(
          htmlCanvas!, 'Failed to initialize WebGL context');
    } else {
      const surface = Skia.MakeOnScreenGLSurface(
        this.grContext!,
        Math.ceil(size.width),
        Math.ceil(size.height),
        Skia.ColorSpace.SRGB,
      );

      if (surface === null) {
        return _makeSoftwareCanvasSurface(
            htmlCanvas!, 'Failed to initialize WebGL surface');
      }

      return CkSurface(skSurface, _glContext)
    }
  }

  static bool _didWarnAboutWebGlInitializationFailure = false;

  CkSurface _makeSoftwareCanvasSurface(
      html.CanvasElement htmlCanvas, String reason) {
    if (!_didWarnAboutWebGlInitializationFailure) {
      printWarning('WARNING: Falling back to CPU-only rendering. $reason.');
      _didWarnAboutWebGlInitializationFailure = true;
    }
    return CkSurface(
      canvasKit.MakeSWCanvasSurface(htmlCanvas),
      null,
    );
  }

  presentSurface () {
    this.surface!.flush()
    return true
  }

  dispose () {
    htmlCanvas?.removeEventListener(
        'webglcontextlost', _cachedContextLostListener, false);
    htmlCanvas?.removeEventListener(
        'webglcontextrestored', _cachedContextRestoredListener, false);
    _cachedContextLostListener = null;
    _cachedContextRestoredListener = null;
    htmlElement.remove();
    this.surface?.dispose()
  }
}

export class Surface {
  public surface: SkiaSurface
  public glContext: number | null = null
  public isDisposed: boolean = false

  get canvas () {
    invariant(!this.isDisposed, 'Attempting to use the canvas of a disposed surface')
    return Canvas.malloc(surface.getCanvas())
  }

  get context () {
    return this.glContext
  }

  get width () {
    return this.surface.width()
  }

  get height () {
    return this.surface.height()
  } 

  constructor (
    surface: SkiaSurface,
    glContext: number | null
  ) {
    this.surface = surface
    this.glContext = glContext
  }

  flush () {
    this.surface.flush()
  }

  dispose () {
    if (this.isDisposed) {
      return
    }
    this.surface.dispose()
    this.isDisposed = true
  }
}
