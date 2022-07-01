import invariant from 'ts-invariant'
import { Path } from '@rendering/Path'
import { Canvas } from '@rendering/Canvas'
import { UnsupportedError} from '@internal/UnsupportedError'
import { Offset, Rect, Size } from '@internal/Geometry'
import { TextDirection } from 'canvaskit-wasm'
import { EdgeInsets, EdgeInsetsGeometry } from './EdgeInsets'
import { ImageConfiguration } from './ImageProvider'

type VoidCallback = { (): void }

export abstract class Decoration {
  static lerp (
    a: Decoration | null, 
    b: Decoration | null, 
    t: number
  ): Decoration | null {
    invariant(t != null);
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b!.lerpFrom(null, t) ?? b
    }
    if (b === null) {
      return a.lerpTo(null, t) ?? a
    }
    if (t === 0.0) {
      return a
    }
    if (t === 1.0) {
      return b
    }

    return b.lerpFrom(a, t) ?? a.lerpTo(b, t) ?? (
      t < 0.5 ? 
        (a.lerpTo(null, t * 2.0) ?? a) : 
        (b.lerpFrom(null, (t - 0.5) * 2.0) ?? b)
    )
  }
  public get padding (): EdgeInsetsGeometry | null {
    return EdgeInsets.zero
  }

  public get isComplex () {
    return false
  }
 
  debugAssertIsValid () {
    return true
  } 

  lerpFrom (
    a: Decoration | null, 
    t: number
  ): Decoration | null {
    return null
  }

  lerpTo (
    b: Decoration | null, 
    t: number
  ): Decoration | null {
    return null
  }

  
  hitTest (
    size: Size, 
    position: Offset, 
    textDirection: TextDirection | null 
  ) {
    return true
  }

  abstract createBoxPainter ( onChanged: VoidCallback )

  
  getClipPath (
    rect: Rect, 
    textDirection: TextDirection
  ): Path  {
    throw new UnsupportedError()
  }
}


export abstract class BoxPainter {
  public onChanged: VoidCallback | null
  constructor (onChanged) {
    this.onChanged = onChanged
  }

  abstract paint (
    canvas: Canvas, 
    offset: Offset, 
    configuration: ImageConfiguration
  )

  dispose () { }
}
