export function lerpDouble (
  a: number, 
  b: number, 
  t: number
) {
  return a * (1.0 - t) + b * t
}

export function lerpInt (
  a: number, 
  b: number, 
  t: number
) {
  return a * (1.0 - t) + b * t
}
