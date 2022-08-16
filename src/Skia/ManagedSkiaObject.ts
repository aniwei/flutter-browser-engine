/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import { invariant } from 'ts-invariant'
import { FinalizationRegistry } from '@platform/FinalizationRegistry'

/**
 * @description: Skia 对象
 * @return {*}
 */
export abstract class SkiaObject <T extends SkiaObject<T>> {
  abstract clone(): T
  abstract delete(): void
  abstract deleteLater(): void
  abstract isAliasOf(other: any): boolean
  abstract isDeleted(): boolean
}

/**
 * @description: 
 * @return {*}
 */
export abstract class ManagedSkiaObject<T extends SkiaObject<T>> {
  get skia () {
    invariant(this.raw !== null)
    return this.raw as T
  }

  set skia (skia: T | null) {
    if (skia !== null) {
      ManagedSkiaFinalizationRegistry.registry(this, skia)
    }

    this.raw?.delete()
    this.raw = skia
  }

  raw: T | null

  constructor (skia?: T) {
    this.raw = skia ?? this.resurrect() ?? null
  }

  abstract resurrect (): T

  isDeleted (): boolean {
    return !!this.raw?.isDeleted() as boolean
  }
  
  delete () {
    this.raw?.delete()
    this.raw = null
  }
}

/**
 * @description: Skia 对象回收
 * @return {*}
 */
class ManagedSkiaFinalizationRegistry<T extends SkiaObject<T>> {
  static instance

  /**
   * @description: 
   * @param {*} watched
   * @param {*} raw
   * @return {*}
   */
  static registry (watched, raw) {
    const finalization = ManagedSkiaFinalizationRegistry.instance ?? new ManagedSkiaFinalizationRegistry()
    finalization.registry(watched, raw)
  }

  public queue: T[] = []
  public timer: ReturnType<typeof setTimeout> | null = null
  
  public finalization: FinalizationRegistry<T>

  constructor () {
    ManagedSkiaFinalizationRegistry.instance = this
    this.finalization = new FinalizationRegistry(this.cleanup)
  }


  /**
   * @description: 
   * @param {T} raw
   * @return {*}
   */
  cleanup = (raw: T) => {
    if (raw.isDeleted()) {
      return 
    }

    invariant(
      !raw.isDeleted(),
      'Attempted to delete an already deleted Skia object.',
    )

    clearTimeout(this.timer!)

    this.queue.push(raw)
    this.timer = setTimeout(() => {
      this.timer = null

      for (const raw of this.queue) {
        if (raw.isDeleted()) {
          continue
        }

        try {
          raw.delete()
        } catch (error: any) {
          // TODO
        }
      }

      this.queue = []
    }, 0)
  }
}