type CacheMapKey<T> = {
  eq (other: T): boolean
}

export class CacheMap<T extends CacheMapKey<T>, V> extends Map<T, V> {
  has (key: T) {
    for (const [k] of this) {
      if (k.eq(key)) {
        return true
      }
    }

    return false
  }

  get (key: T): V | undefined {
    for (const [k, v] of this) {
      if (k.eq(key)) {
        return v
      }
    }
  }

  putIfAbsent (
    key: T, 
    v: V
  ) {
    if (!this.has(key)) {
      this.set(key, v)
    }

    return v
  }
}