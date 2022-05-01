class CkPathMetrics extends IterableBase<PathMetric>
    implements ui.PathMetrics {
  CkPathMetrics(this._path, this._forceClosed);

  final CkPath _path;
  final bool _forceClosed;

  /// The [CkPath.isEmpty] case is special-cased to avoid booting the WASM machinery just to find out there are no contours.
  @override
  Iterator<ui.PathMetric> get iterator => _path.isEmpty
      ? const CkPathMetricIteratorEmpty._()
      : CkContourMeasureIter(this);
}