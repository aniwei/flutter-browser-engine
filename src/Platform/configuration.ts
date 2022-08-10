/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:54:10
 */

import { property } from '@helper/property'
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