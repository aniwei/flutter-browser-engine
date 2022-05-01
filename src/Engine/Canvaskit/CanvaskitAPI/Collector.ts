import { SkDeletable } from './Skia'
import { ProductionCollector } from './ProductionCollector'

export abstract class Collector {
  static productionInstance: Collector = new ProductionCollector()

  /// The collector implementation currently in use.
  static get instance () {
    return this._instance
  }

  static _instance: Collector = this.productionInstance

  /// In tests overrides the collector implementation.
  static debugOverrideCollector (override: Collector) {
    this._instance = override;
  }

  static debugRestoreCollector () {
    this._instance = this.productionInstance
  }
  abstract register (wrapper, deletable: SkDeletable)
  abstract collect(deletable: SkDeletable): void 
}
