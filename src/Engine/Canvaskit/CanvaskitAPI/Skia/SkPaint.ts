import { Paint } from 'canvaskit-wasm'
import { SkObject } from './SkObject'
import { Skia } from './Skia'

export class SkPaint extends SkObject<Paint> implements Paint {
  constructor () {
    super(new Skia.CanvasKit.Paint())
  }

  public get copy () {
    return this.skiaObject.copy
  }
  public get getColor () {
    return this.skiaObject.getColor
  }
  public get getStrokeCap () {
    return this.skiaObject.getStrokeCap
  }
  public get getStrokeJoin () {
    return this.skiaObject.getStrokeJoin
  }
  public get getStrokeMiter () {
    return this.skiaObject.getStrokeMiter
  }
  public get getStrokeWidth () {
    return this.skiaObject.getStrokeWidth
  }
  public get setAlphaf () {
    return this.skiaObject.setAlphaf
  }
  public get setAntiAlias () {
    return this.skiaObject.setAntiAlias
  }
  public get setBlendMode () {
    return this.skiaObject.setBlendMode
  }
  public get setColor () {
    return this.skiaObject.setColor
  }
  public get setColorComponents () {
    return this.skiaObject.setColorComponents
  }
  public get setColorFilter () {
    return this.skiaObject.setColorFilter
  }
  public get setColorInt () {
    return this.skiaObject.setColorInt
  }
  public get setImageFilter () {
    return this.skiaObject.setImageFilter
  }
  public get setMaskFilter () {
    return this.skiaObject.setMaskFilter
  }
  public get setPathEffect () {
    return this.skiaObject.setPathEffect
  }
  public get setShader () {
    return this.skiaObject.setShader
  }
  public get setStrokeCap () {
    return this.skiaObject.setStrokeCap
  }
  public get setStrokeJoin () {
    return this.skiaObject.setStrokeJoin
  }
  public get setStrokeMiter () {
    return this.skiaObject.setStrokeMiter
  }
  public get setStrokeWidth () {
    return this.skiaObject.setStrokeWidth
  }
  public get setStyle () {
    return this.skiaObject.setStyle
  }
}