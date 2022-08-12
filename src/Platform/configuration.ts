/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:54:10
 */

import { invariant } from 'ts-invariant'
import { OperatingSystem, Viewpoint } from '@basic/Platform'
import { detectOperatingSystem } from '@helper/detectOperationSystem'
import { isBrowser } from '@helper/is'
import { property } from '@helper/property'
import { Size } from '@internal/Geometry'
import { kEnv, kGlobalThis } from './Platform'

export enum WebGLVersion {
  Unknown,
  WebGL2,
  WebGL1
}

export type ConfigurationOptions = {
  baseURI?: string
  forceCPUOnly?: boolean
  maximumSurfaces?: number
  devicePixelRatio?: number
  viewpoint?: Viewpoint
}

export class Configuration {
  public baseURI: string
  public forceCPUOnly: boolean
  public maximumSurfaces: number
  public devicePixelRatio: number
  public viewpoint: Viewpoint
  public system: OperatingSystem = detectOperatingSystem()

  @property(function (this) {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1

    if (canvas.getContext('webgl2') !== null) {
      return WebGLVersion.WebGL2
    } else if (canvas.getContext('webgl') !== null) {
      return WebGLVersion.WebGL1
    }

    return WebGLVersion.Unknown
  }) public WebGLVersion!: WebGLVersion

  @property(function (this: Configuration) {
    return this.size?.width
  }) public width!: number

  @property(function (this) {
    return this.size.height
  }) public height!: number

  @property(function (this, size: Size | null) {
    if (size === null) {
    
      const viewpoint = this.viewpoint as Viewpoint
      const devicePixelRatio = this.devicePixelRatio

      if (viewpoint !== null) {
        if (this.system === OperatingSystem.iOS) {
          const clientWidth = kGlobalThis.document.documentElement.clientWidth
          const clientHeight = kGlobalThis.document.documentElement.clientHeight
  
          return this.size = new Size(
            Math.ceil(clientWidth * devicePixelRatio),
            Math.ceil(clientHeight * devicePixelRatio),
          )
        }
      }

      this.size = isBrowser 
        ? new Size(
            Math.ceil(kGlobalThis.innerWidth * devicePixelRatio),
            Math.ceil(kGlobalThis.innerHeight * devicePixelRatio),
          ) 
        : new Size(
            Math.ceil(viewpoint.height * devicePixelRatio),
            Math.ceil(viewpoint.width * devicePixelRatio),
          ) 
    }
    

    return this._size
  }) public size: Size | null = null

  constructor (options: ConfigurationOptions) {
    const baseURI = options.baseURI ?? kEnv.BASE_URI
    const maximumSurfaces = options.maximumSurfaces ?? kEnv.MAXIMUM_SURFACES ?? 8
    const forceCPUOnly = options.forceCPUOnly ?? kEnv.FORCE_CPU_ONLY ?? false
    const devicePixelRatio = options.devicePixelRatio ?? kEnv.DEVICE_PIXEL_RATIO ?? 2.0
  
    const viewpoint = options.viewpoint ?? ({
      width: kEnv.INNER_WIDTH,
      height: kEnv.INNER_WIDTH 
    } as Viewpoint)

    invariant(baseURI !== undefined)
    invariant(maximumSurfaces !== undefined)
    invariant(forceCPUOnly !== undefined)
    invariant(devicePixelRatio !== undefined)
    invariant(viewpoint !== undefined)

    this.baseURI = baseURI
    this.devicePixelRatio = devicePixelRatio
    this.forceCPUOnly = forceCPUOnly
    this.maximumSurfaces = maximumSurfaces
    this.viewpoint = viewpoint
  
  }
}
