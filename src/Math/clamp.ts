import invariant from 'ts-invariant'

export function clampInt (
  value: number, 
  min: number, 
  max: number
) {
  invariant(min <= max)
  if (value < min) {
    return min
  } else if (value > max) {
    return max
  } else {
    return value
  }
}

export function clamp (
  value: number, 
  lower: number, 
  upper: number
) {
  value = +value
  lower = +lower
  upper = +upper
  lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0

  if (value === value) {
    value = value <= upper ? value : upper
    value = value >= lower ? value : lower
  }
  
  return value
}
 