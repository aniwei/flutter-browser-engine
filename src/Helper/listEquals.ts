export function listEquals<T>(a: T[] | null, b: T[] | null) {
  if (a === null) {
    return b == null
  }
  
  if (b === null || a.length !== b.length) {
    return false
  }

  for (let index = 0; index < a.length; index += 1) {
    if (a[index] !== b[index]) {
      return false
    }
  }

  return true
}