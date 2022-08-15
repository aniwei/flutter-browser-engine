/*
 * @Author: Aniwei
 * @Date: 2022-06-13 10:20:59
 */
export type PropertyOperation = { (v, k: string, key: string): void } 

export function property<T> (
  getter: PropertyOperation = function (this: T, v, k) { 
    return v
  },
  setter: PropertyOperation = function (this: T, v, k) { 
    this[`_${k}`] = v 
  }
) {
  return function (
    target,
    key: string
  ) {
    Reflect.defineProperty(target, key, {
      get () {
        return Reflect.apply(getter, this as T, [this[`_${key}`], key])
      },
      set (value: T) {
        Reflect.apply(setter, this as T, [value, key])
      }
    })
  }
}

