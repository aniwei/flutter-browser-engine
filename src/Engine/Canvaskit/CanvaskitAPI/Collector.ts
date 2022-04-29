export abstract class Collector {
  static _productionInstance: Collector = new ProductionCollector()

  /// The collector implementation currently in use.
  static Collector get instance => _instance;
  static Collector _instance = _productionInstance;

  /// In tests overrides the collector implementation.
  static void debugOverrideCollector(Collector override) {
    _instance = override;
  }

  /// In tests restores the collector to the production implementation.
  static void debugRestoreCollector() {
    _instance = _productionInstance;
  }

  /// Registers a [deletable] for collection when the [wrapper] object is
  /// garbage collected.
  ///
  /// The [debugLabel] is used to track the origin of the deletable.
  void register(Object wrapper, SkDeletable deletable);

  /// Deletes the [deletable].
  ///
  /// The exact timing of the deletion is implementation-specific. For example,
  /// a production implementation may want to batch deletables and schedule a
  /// timer to collect them instead of deleting right away.
  ///
  /// A test implementation may want a collection strategy that's less efficient
  /// but more predictable.
  void collect(SkDeletable deletable);
}
