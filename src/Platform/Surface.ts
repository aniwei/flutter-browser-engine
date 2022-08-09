/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:24:51
 */
import { invariant } from 'ts-invariant'
import { Size } from '@internal/Geometry'
import { Surface as RSurface } from '@rendering/Surface'
import { CanvasKitError } from '@internal/CanvasKitError'
import { PlatformDispatcher } from '@platform/PlatformDispatcher'
import { Skia, SkiaCanvas, SkiaGrDirectContext, SkiaSurface } from '@skia/Skia'
import { isWindow } from './Platform'
import { SurfaceFactory } from './SurfaceFactory'
import { configuration, WebGLVersion } from './configuration'

export type SubmitCallback = { (): boolean } 

export class SurfaceFrame {
  public skia: RSurface
  public submitCallback: SubmitCallback
  public submitted: boolean
  
  public get canvas () {
    return this.skia.canvas
  }

  constructor (
    skia: RSurface,
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

    return this.submitCallback()
  }
}

export abstract class AbstractSurface {
  static didWarnAboutWebGlInitializationFailure = false

  public surface: RSurface | null = null
  public forceNewContext: boolean = true
  
  public contextLost: boolean = false

  public skiaCacheBytes: number | null = null
  public grContext: SkiaGrDirectContext | null = null
  public glContext: number | null = null

  public pixelWidth: number = -1
  public pixelHeight: number = -1

  public addedToScene: boolean = false
  public currentCanvasPhysicalSize: Size | null = null
  public currentSurfaceSize: Size | null = null
  public currentDevicePixelRatio: number = -1

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
    const surface: RSurface = this.createOrUpdateSurface(size)

    const submitCallback: SubmitCallback = () => {
      return this.presentSurface()
    }

    return new SurfaceFrame(surface, submitCallback)
  }

  addToScene () {}
  abstract createOrUpdateSurface (size: Size): RSurface 
  abstract createNewSurface (size: Size): RSurface 

  presentSurface () {
    this.surface!.flush()
    return true
  }

  abstract dispose ()
}

export class BrowserSurface extends AbstractSurface {
  public cachedContextLostListener: { (event): void } | null = null
  public cachedContextRestoredListener: { (event): void } | null = null

  public canvas: HTMLCanvasElement | null = null
  public root: HTMLElement

  constructor () {
    super()

    this.root = window.document.createElement('flt-canvas-container')
  }

  contextRestoredListener (event: Event) {
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
    const factory = SurfaceFactory.instance

    this.contextLost = true
    if (factory.isLive(this)) {
      this.forceNewContext = true
      event.preventDefault()
    } else {
      this.dispose()
    }
  }

  addToScene () {
    window.document.body.appendChild(this.root)
  }

  makeSoftwareCanvasSurface (
    canvas: HTMLCanvasElement,
    reason?: string |  null
  ): RSurface {
    return RSurface.malloc(
      Skia.MakeSWCanvasSurface(canvas) as SkiaSurface,
      null
    )
  }

  translateCanvas () {
    const surfaceHeight = Math.ceil(this.currentSurfaceSize!.height)
    const offset = (this.pixelHeight - surfaceHeight) / window.devicePixelRatio
    
    this.canvas!.style.transform = `translate(0, -${offset}px)`
  }

  createOrUpdateSurface (size: Size): RSurface {
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
        this.updateLogicalHTMLCanvasSize()
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

  createNewCanvas (physicalSize: Size) {
    if (this.canvas !== null) {
      this.canvas!.removeEventListener(
        'webglcontextrestored', 
        this.cachedContextRestoredListener!, 
        false
      )
      this.canvas!.removeEventListener(
        'webglcontextlost', 
        this.cachedContextLostListener!, 
        false
      )

      this.root.removeChild(this.canvas)
      this.cachedContextRestoredListener = null
      this.cachedContextLostListener = null
    }

    
    this.pixelWidth = Math.ceil(physicalSize.width)
    this.pixelHeight = Math.ceil(physicalSize.height)

    const canvas = document.createElement('canvas')
    
    canvas.width = this.pixelWidth
    canvas.height = this.pixelHeight
    
    this.canvas = canvas
    this.canvas.style.position = 'absolute'
    this.updateLogicalHTMLCanvasSize()

    this.cachedContextRestoredListener = this.contextRestoredListener
    this.cachedContextLostListener = this.contextLostListener
    
    this.canvas.addEventListener(
      'webglcontextlost',
      this.cachedContextLostListener,
      false,
    )
    this.canvas.addEventListener(
      'webglcontextrestored',
      this.cachedContextRestoredListener,
      false,
    )
    this.forceNewContext = false
    this.contextLost = false

    const v = configuration.WebGLVersion

    if (
      v !== WebGLVersion.Unknown && 
      !configuration.forceCPUOnly
    ) {
      const glContext = Skia.GetWebGLContext(canvas,{
        antialias: 0,
        majorVersion: v,
      })

      this.glContext = glContext

      if (this.glContext !== 0) {
        this.grContext = Skia.MakeGrContext(this.glContext)
        if (this.grContext === null) {
          throw new CanvasKitError('Failed to initialize CanvasKit.\nCanvasKit.MakeGrContext returned null.')
        }
        
        this.syncCacheBytes()
      }
    }

    this.root.appendChild(this.canvas)
  }

  createNewSurface (size: Size): RSurface {
    invariant(this.canvas !== null)
    const v = configuration.WebGLVersion
    if (v === WebGLVersion.Unknown) {
      return this.makeSoftwareCanvasSurface(
        this.canvas!, 
        'WebGL support not detected'
      )
    } else if (configuration.forceCPUOnly) {
      return this.makeSoftwareCanvasSurface(
        this.canvas!, 
        'CPU rendering forced by application'
      )
    } else if (this.glContext === 0) {
      return this.makeSoftwareCanvasSurface(
        this.canvas!, 
        'Failed to initialize WebGL context'
      )
    } else {
      const surface = Skia.MakeOnScreenGLSurface(
        this.grContext!,
        Math.ceil(size.width),
        Math.ceil(size.height),
        Skia.ColorSpace.SRGB,
      )

      if (surface === null) {
        return this.makeSoftwareCanvasSurface(
          this.canvas!, 
          'Failed to initialize WebGL surface'
        )
      }

      return RSurface.malloc(surface, this.glContext)
    }
  }

  updateLogicalHTMLCanvasSize () {
    const logicalWidth = this.pixelWidth / window.devicePixelRatio
    const logicalHeight = this.pixelHeight / window.devicePixelRatio
    this.canvas!.style.width = `${logicalWidth}px`
    this.canvas!.style.height = `${logicalHeight}px`
  }

  dispose (): void {
    this.canvas?.removeEventListener(
      'webglcontextlost', 
      this.cachedContextLostListener!, 
      false
    )
    this.canvas?.removeEventListener(
      'webglcontextrestored', 
      this.cachedContextRestoredListener!, 
      false
    )

    this.cachedContextLostListener = null
    this.cachedContextRestoredListener = null

    this.root.removeChild(this.canvas!)
    this.surface?.dispose()
  }
}

export class ServerSurface extends AbstractSurface {


  createOrUpdateSurface(size: Size): RSurface {
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

      this.currentCanvasPhysicalSize = newSize
    }

    this.currentSurfaceSize = size

    return this.surface = this.createNewSurface(size)
  }

  createNewSurface(size: Size): RSurface {
    return this.makeSoftwareCanvasSurface(size, 'Run in node')
  }

  makeSoftwareCanvasSurface(
    size: Size, 
    reason?: string | null
  ): RSurface {
    
    return RSurface.malloc(
      Skia.MakeSurface(
        Math.ceil(size.width),
        Math.ceil(size.height)
      )!,
      null
    )
  }

  dispose() {
    this.surface?.dispose()
  }
}

export const Surface = isWindow
  ? BrowserSurface
  : ServerSurface