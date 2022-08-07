import invariant from 'ts-invariant'
import { Surface } from './Surface'



class SurfaceManager extends Array<Surface> {
  remove (surface: Surface) {
    const index = this.indexOf(surface)
    if (index > -1) {
      this.splice(index, 1)
    }
  }

  clear () {
    this.splice(0, this.length)
  }

  add (surface: Surface) {
    this.push(surface)
  }

  addAll (surfaces: Surface[]) {
    for (const surface of surfaces) {
      this.add(surface)
    }
  }
}

export class SurfaceFactory {
  static instance = new SurfaceFactory(configuration.canvasKitMaximumSurfaces)

  constructor (maximumSurfaces) {
    invariant(maximumSurfaces >= 1, 'The maximum number of surfaces must be at least 1')
    this.maximumSurfaces = maximumSurfaces
  }

  public baseSurface: Surface = new Surface()
  public backupSurface: Surface = new Surface()
  public maximumSurfaces: number
  public get maximumOverlays () {
    return this.maximumSurfaces - 2
  }
  public cache: SurfaceManager = new SurfaceManager()
  public liveSurfaces: SurfaceManager = new SurfaceManager()

  warnedAboutTooManySurfaces = false

  get surfaceCount () {
    return this.liveSurfaces.length + this.cache.length + 2
  }

  get numAvailableOverlays () {
    return this.maximumOverlays - this.liveSurfaces.length
  }
  
  get debugSurfaceCount () {
    return this.surfaceCount
  }

  getOverlay (): Surface | null {
    if (this.cache.length > 0) {
      const surface = this.cache.pop()
      this.liveSurfaces.push(surface as Surface)
      return surface as Surface
    } else {
      return null
    }
  }

  getSurface (): Surface {
    const surface = this.getOverlay()
    if (surface !== null) {
      return surface;
    }
    if (!this.warnedAboutTooManySurfaces) {
      this.warnedAboutTooManySurfaces = true
      // printWarning('Flutter was unable to create enough overlay surfaces. '
      //     'This is usually caused by too many platform views being '
      //     'displayed at once. '
      //     'You may experience incorrect rendering.');
    }

    return this.backupSurface
  }

  releaseSurfaces () {
    this.cache.addAll(this.liveSurfaces)
    this.liveSurfaces.clear()
  }

  removeSurfacesFromDom () {
    this.cache.forEach(this.removeFromDom)
    this.removeFromDom(this.backupSurface)
  }

  removeFromDom (surface: Surface ) {
    surface.htmlElement.remove()
  }

  releaseSurface (surface: Surface) {
    invariant(surface !== this.baseSurface, 'Attempting to release the base surface')
    if (surface === this.backupSurface) {
      surface.htmlElement.remove()
      return
    }
    invariant(
      this.liveSurfaces.includes(surface),
      'Attempting to release a Surface which was not created by this factory'
    )

    surface.htmlElement.remove()
    this.liveSurfaces.remove(surface)
    this.cache.add(surface)
  }

  isLive (surface: Surface): boolean {
    if (
      surface === this.baseSurface ||
      surface === this.backupSurface ||
      this.liveSurfaces.includes(surface)
    ) {
      return true
    }

    invariant(this.cache.includes(surface))
    return false
  }
}
