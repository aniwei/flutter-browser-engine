/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:54:10
 */

import { OperatingSystem, Viewpoint } from '@basic/Platform'
import { property } from '@helper/property'
import { Size } from '@internal/Geometry'
import { env } from './env'
import { isWindow } from './Platform'

export enum WebGLVersion {
  Unknown,
  WebGL2,
  WebGL1
}

class Configuration {
  @property(function (this, baseURL: string) {
    return baseURL ?? env.BASE_URL
  }) public baseURL: string = env.BASE_URL ?? ``

  @property(function (this, forceCPUOnly: boolean) {
    return forceCPUOnly
  }) public forceCPUOnly: boolean = env.FORCE_CPU_ONLY ?? false

  @property(function (this, maximumSurfaces: boolean) {
    return maximumSurfaces
  }) public maximumSurfaces: number = env.MAXIMUM_SURFACES ?? env.DEFAULT_MAXIMUM_SURFACES

  @property(function (this, devicePixelRatio: number) {
    return devicePixelRatio
  }) public devicePixelRatio: number = env.DEVICE_PIXEL_RATIO ?? env.DEFAULT_DEVICE_PIXEL_RATIO

  @property<Viewpoint | null>(function (this, viewpoint: Viewpoint | null) {
    if (env.VIEWPOINT) {
      return env.VIEWPOINT
    }

    if (isWindow) {
      return window.visualViewport
    }

    return null
  }) public viewpoint!: Viewpoint | null

  @property(function (this, width: number) {
    return this.size.width
  }) public width!: number

  @property(function (this, height: number) {
    return this.size.height
  }) public height!: number


  @property(function (this, size: Size | null) {
    if (size === null) {
      if (env.INNER_HEIGHT && env.INNER_WIDTH) {
        this.size = new Size(
          Math.ceil(env.INNER_WIDTH), 
          Math.ceil(env.INNER_HEIGHT)
        )
      } else {
        const viewpoint = this.viewpoint as Viewpoint
        const devicePixelRatio = this.devicePixelRatio

        if (viewpoint !== null) {
          if (this.system === OperatingSystem.iOS) {
            const clientWidth = window.document.documentElement.clientWidth
            const clientHeight = window.document.documentElement.clientHeight
    
            this.size = new Size(
              Math.ceil(clientWidth * devicePixelRatio),
              Math.ceil(clientHeight * devicePixelRatio),
            )
          } else {
            this.size = new Size(
              Math.ceil(window.innerWidth * devicePixelRatio),
              Math.ceil(window.innerHeight * devicePixelRatio),
            )
          }
        } else {
          this.size = new Size(
            Math.ceil(window.innerWidth * devicePixelRatio),
            Math.ceil(window.innerHeight * devicePixelRatio),
          )
        }
      }
    }

    return this.size
  }) public size: Size | null = null

  get WebGLVersion () {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1

    if (canvas.getContext('webgl2') !== null) {
      return WebGLVersion.WebGL2
    } else if (canvas.getContext('webgl') !== null) {
      return WebGLVersion.WebGL1
    }

    return WebGLVersion.Unknown
  }
}


export const configuration = new Configuration()