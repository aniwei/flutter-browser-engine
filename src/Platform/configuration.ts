/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:54:10
 */

import { env } from './env'
import { isWindow } from './Platform'

export enum WebGLVersion {
  Unknown,
  WebGL2,
  WebGL1
}

class Configuration {
  
  get baseURL () {
    return ``
  }

  get forceCPUOnly () {
    return env.FORCE_CPU_ONLY ?? false
  }

  get maximumSurfaces () {
    return env.MAXIMUM_SURFACES ?? env.DEFAULT_MAXIMUM_SURFACES
  }

  get devicePixelRatio () {
    return env.DEVICE_PIXEL_RATIO ?? (
      isWindow 
        ? window.devicePixelRatio
        : env.DEFAULT_DEVICE_PIXEL_RATIO
    )
  }

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