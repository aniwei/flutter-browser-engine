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

export function getter (get?: { (value): unknown }) {
  return function (
    target,
    property
  ) { 
    const key = `_${property}`
    Object.defineProperty(target, property, {
      get () {
        return get?.call(this, this[key])
      },
      set (value) {
        this[key] = value
      }
    })
  }
}