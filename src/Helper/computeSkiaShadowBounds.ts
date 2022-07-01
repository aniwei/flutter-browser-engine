import { Matrix4 } from '@math/Matrix4'
import { Rect } from '@internal/Geometry'
import { Path } from '@rendering/Path'

import { ambientBlurRadius } from './ambientBlurRadius'
import { transformRect } from './transformRect'

const kSkiaShadowAmbientAlpha = 0.039
const kSkiaShadowSpotAlpha = 0.25
const kSkiaShadowLightRadius = 1.1
const kSkiaShadowLightHeight = 600.0
const kSkiaShadowLightXOffset = 0
const kSkiaShadowLightYOffset = -450
const kSkiaShadowLightXTangent = kSkiaShadowLightXOffset / kSkiaShadowLightHeight
const kSkiaShadowLightYTangent = kSkiaShadowLightYOffset / kSkiaShadowLightHeight

export function computeSkiaShadowBounds(
  path: Path,
  elevation: number,
  devicePixelRatio: number,
  matrix: Matrix4,
): Rect {
  let pathBounds: Rect = path.getBounds()

  if (elevation === 0) {
    return pathBounds
  }

  const isComplex = !matrix.isIdentityOrTranslation()
  if (isComplex) {
    pathBounds = transformRect(matrix, pathBounds)
  }

  let left = pathBounds.left
  let top = pathBounds.top
  let right = pathBounds.right
  let bottom = pathBounds.bottom

  const ambientBlur = ambientBlurRadius(elevation)
  const spotBlur = kSkiaShadowLightRadius * elevation
  const spotOffsetX = -elevation * kSkiaShadowLightXTangent
  const spotOffsetY = -elevation * kSkiaShadowLightYTangent

  left = left - 1 + (spotOffsetX - ambientBlur - spotBlur) * devicePixelRatio
  top = top - 1 + (spotOffsetY - ambientBlur - spotBlur) * devicePixelRatio
  right = right + 1 + (spotOffsetX + ambientBlur + spotBlur) * devicePixelRatio
  bottom = bottom + 1 + (spotOffsetY + ambientBlur + spotBlur) * devicePixelRatio

  const shadowBounds: Rect = Rect.fromLTRB(left, top, right, bottom)

  if (isComplex) {
    const inverse = Matrix4.zero()
    
    if (inverse.copyInverse(matrix) != 0.0) {
      return transformRect(inverse, shadowBounds)
    } else {
      return shadowBounds
    }
  } else {
    return shadowBounds
  }
}