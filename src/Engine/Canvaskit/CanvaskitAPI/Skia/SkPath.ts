import { Path } from 'canvaskit-wasm'
import { SkObject } from './SkObject'
import { Skia } from './Skia'

export class SkPath extends SkObject<Path> implements Path {
  constructor () {
    super(new Skia.CanvasKit.Path())
  }

  public get addArc () {
    return this.skiaObject.addArc
  }
  public get addOval () {
    return this.skiaObject.addOval
  }
  public get addPath () {
    return this.skiaObject.addPath
  }
  public get addPoly () {
    return this.skiaObject.addPoly
  }
  public get addRect () {
    return this.skiaObject.addRect
  }
  public get addRRect () {
    return this.skiaObject.addRRect
  }
  public get addVerbsPointsWeights () {
    return this.skiaObject.addVerbsPointsWeights
  }
  public get arc () {
    return this.skiaObject.arc
  }
  public get arcToOval () {
    return this.skiaObject.arcToOval
  }
  public get arcToRotated () {
    return this.skiaObject.arcToRotated
  }
  public get arcToTangent () {
    return this.skiaObject.arcToTangent
  }
  public get close () {
    return this.skiaObject.close
  }
  public get computeTightBounds () {
    return this.skiaObject.computeTightBounds
  }
  public get conicTo () {
    return this.skiaObject.conicTo
  }
  public get contains () {
    return this.skiaObject.contains
  }
  public get copy () {
    return this.skiaObject.copy
  }
  public get countPoints () {
    return this.skiaObject.countPoints
  }
  public get cubicTo () {
    return this.skiaObject.cubicTo
  }
  public get dash () {
    return this.skiaObject.dash
  }
  public get equals () {
    return this.skiaObject.equals
  }
  public get getBounds () {
    return this.skiaObject.getBounds
  }
  public get getFillType () {
    return this.skiaObject.getFillType
  }
  public get getPoint () {
    return this.skiaObject.getPoint
  }
  public get isEmpty () {
    return this.skiaObject.isEmpty
  }
  public get isVolatile () {
    return this.skiaObject.isVolatile
  }
  public get lineTo () {
    return this.skiaObject.lineTo
  }
  public get makeAsWinding () {
    return this.skiaObject.makeAsWinding
  }
  public get moveTo () {
    return this.skiaObject.moveTo
  }
  public get offset () {
    return this.skiaObject.offset
  }
  public get op () {
    return this.skiaObject.op
  }
  public get quadTo () {
    return this.skiaObject.quadTo
  }
  public get rArcTo () {
    return this.skiaObject.rArcTo
  }
  public get rConicTo () {
    return this.skiaObject.rConicTo
  }
  public get rCubicTo () {
    return this.skiaObject.rCubicTo
  }
  public get reset () {
    return this.skiaObject.reset
  }
  public get rewind () {
    return this.skiaObject.rewind
  }
  public get rLineTo () {
    return this.skiaObject.rLineTo
  }
  public get rMoveTo () {
    return this.skiaObject.rMoveTo
  }
  public get rQuadTo () {
    return this.skiaObject.rQuadTo
  }
  public get setFillType () {
    return this.skiaObject.setFillType
  }
  public get setIsVolatile () {
    return this.skiaObject.setIsVolatile
  }
  public get simplify () {
    return this.skiaObject.simplify
  }
  public get stroke () {
    return this.skiaObject.stroke
  }
  public get toCmds () {
    return this.skiaObject.toCmds
  }
  public get toSVGString () {
    return this.skiaObject.toSVGString
  }
  public get transform () {
    return this.skiaObject.transform
  }
  public get trim () {
    return this.skiaObject.trim
  }
}