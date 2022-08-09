/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:14:37
 */
import { invariant } from 'ts-invariant'
import { AbstractSurface, Surface } from './Surface'
import { configuration } from './configuration'


export abstract class AbstractSurfaceFactory<T> extends Array<T> {
  public maximumSurfaces: number

  constructor (maximumSurfaces: number) {
    super()

    invariant(maximumSurfaces >= 1, 'The maximum number of surfaces must be at least 1')
    this.maximumSurfaces = maximumSurfaces
  }

  abstract baseSurface: T
  abstract backupSurface: T

  public get maximumOverlays () {
    return this.maximumSurfaces - 2
  }

  public cache: T[] = []
  public warnedAboutTooManySurfaces = false

  get count () {
    return this.length + this.cache.length
  }

  get numAvailableOverlays () {
    return this.maximumOverlays - this.length
  }

  get overlay () {
    if (this.cache.length > 0) {
      const surface = this.cache.pop()
      this.push(surface as T)
    } else {
      return null
    }
  }

  get surface () {
    const surface = this.overlay

    if (surface !== null) {
      return surface
    }

    return this.backupSurface
  }

  release () {
    for (const surface of this) {
      this.cache.push(surface)
    }
    
    while (this.length > 0) {
      this.pop()
    }
  }

  isLive (surface: T): boolean {
    if (
      surface === this.baseSurface ||
      surface === this.backupSurface ||
      this.includes(surface)
    ) {
      return true
    }

    invariant(this.cache.includes(surface))
    return false
  }

  abstract remove ()
}

export class SurfaceFactory extends AbstractSurfaceFactory<AbstractSurface> {
  static instance: SurfaceFactory= new SurfaceFactory(configuration.maximumSurfaces)

  public baseSurface: AbstractSurface = new Surface()
  public backupSurface: AbstractSurface = new Surface()

  remove() {
    throw new Error('Method not implemented.')
  }
}



