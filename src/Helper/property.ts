export type PropertySetter<T> = { (v: T, k: string, key: string): void }
export type PropertyGetter<T> = { (v: T, k: string, key: string): T } 

export function property<T> (
  getter: PropertyGetter<T> = function (v, k) { return v as T },
  setter: PropertySetter<T> = function (this, v: T, k) { this[k] = v }
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
        return Reflect.apply(setter, this, [value, k, key])
      }
    })
  }
}

