import { ProductionCollector } from './ProductionCollector'
import { SkDeletable } from './Skia'

export abstract class Collector {
  static productionInstance: Collector = new ProductionCollector()

  /// The collector implementation currently in use.
  static get instance () {
    return _instance
  }

  static _instance: Collector = productionInstance

  /// In tests overrides the collector implementation.
  static void debugOverrideCollector(Collector override) {
    _instance = override;
  }

  static debugRestoreCollector () {
    this._instance = this.productionInstance
  }
  abstract register (wrapper, deletable: SkDeletable)
  abstract collect(deletable: SkDeletable): void 
}
