export function setter (set?: { (value): void }) {
  return function (
    target,
    property
  ) { 
    const key = `_${property}`
    Object.defineProperty(target, property, {
      get () {
        return this[key]
      },
      set
    })
  }
}