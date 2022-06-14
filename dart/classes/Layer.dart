abstract class Layer implements ui.EngineLayer {
  /// The layer that contains us as a child.
  ContainerLayer? parent;

  /// An estimated rectangle that this layer will draw into.
  ui.Rect paintBounds = ui.Rect.zero;

  /// Whether or not this layer actually needs to be painted in the scene.
  bool get needsPainting => !paintBounds.isEmpty;

  /// Pre-process this layer before painting.
  ///
  /// In this step, we compute the estimated [paintBounds] as well as
  /// apply heuristics to prepare the render cache for pictures that
  /// should be cached.
  void preroll(PrerollContext prerollContext, Matrix4 matrix);

  /// Paint this layer into the scene.
  void paint(PaintContext paintContext);

  // TODO(dnfield): Implement ui.EngineLayer.dispose for CanvasKit.
  // https://github.com/flutter/flutter/issues/82878
  @override
  void dispose() {}
}
