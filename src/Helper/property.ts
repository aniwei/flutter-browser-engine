export function property<T> (
  getter: { (v: T, k?: string): T } = function (v, k) { return v as T },
  setter: { (v: T, k: string): void } = function (this, v: T, k) { this[k] = v }
) {
  return function (
    target,
    key: string
  ) {
    const k = `_${key}` 

    Reflect.defineProperty(target, key, {
      get () {
        return Reflect.apply(getter, this, [this[k], k])
      },
      set (value: T) {
        return Reflect.apply(setter, this, [value, k])
      }
    })
  }
}

