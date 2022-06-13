const kAmbientHeightFactor = 1.0 / 128.0
const kAmbientGeomFactor = 64.0
const kMaxAmbientRadius = 300 * kAmbientHeightFactor * kAmbientGeomFactor

export function ambientBlurRadius (height: number) {
  return Math.min(
    height * kAmbientHeightFactor * kAmbientGeomFactor, 
    kMaxAmbientRadius
  )
}