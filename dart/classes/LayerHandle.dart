class LayerHandle<T extends Layer> {
  /// Create a new layer handle, optionally referencing a [Layer].
  LayerHandle([this._layer]) {
    if (_layer != null) {
      _layer!._refCount += 1;
    }
  }

  T? _layer;

  /// The [Layer] whose resources this object keeps alive.
  ///
  /// Setting a new value or null will dispose the previously held layer if
  /// there are no other open handles to that layer.
  T? get layer => _layer;

  set layer(T? layer) {
    assert(
      layer?.debugDisposed != true,
      'Attempted to create a handle to an already disposed layer: $layer.',
    );
    if (identical(layer, _layer)) {
      return;
    }
    _layer?._unref();
    _layer = layer;
    if (_layer != null) {
      _layer!._refCount += 1;
    }
  }

  @override
  String toString() =>
      'LayerHandle(${_layer != null ? _layer.toString() : 'DISPOSED'})';
}
