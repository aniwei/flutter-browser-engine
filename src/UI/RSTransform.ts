export class RSTransform {
  static fromComponents (
    rotation: number,
    scale: number,
    anchorX: number,
    anchorY: number,
    translateX: number,
    translateY: number
  ) {
    const scos = Math.cos(rotation) * scale
    const ssin = Math.sin(rotation) * scale
    const tx = translateX + -scos * anchorX + ssin * anchorY
    const ty = translateY + -ssin * anchorX - scos * anchorY
    return new RSTransform(scos, ssin, tx, ty)
  }

  public value: number[] = []

  public get scos () {
    return this.value[0]
  }
  public get ssing () {
    return this.value[1]
  }

  public get tx () {
    return this.value[2]
  }

  public get ty () {
    return this.value[3]
  }

  constructor (
    scos: number,
    ssin: number,
    tx: number,
    ty: number
  ) {
    this.value[0] = scos
    this.value[1] = ssin
    this.value[2] = tx
    this.value[3] = ty
  }
}