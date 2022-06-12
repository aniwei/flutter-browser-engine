class PaintingContext extends ClipContext {
  /// Creates a painting context.
  ///
  /// Typically only called by [PaintingContext.repaintCompositedChild]
  /// and [pushLayer].
  @protected
  PaintingContext(this._containerLayer, this.estimatedBounds)
      : assert(_containerLayer != null),
        assert(estimatedBounds != null);

  final ContainerLayer _containerLayer;

  /// An estimate of the bounds within which the painting context's [canvas]
  /// will record painting commands. This can be useful for debugging.
  ///
  /// The canvas will allow painting outside these bounds.
  ///
  /// The [estimatedBounds] rectangle is in the [canvas] coordinate system.
  final Rect estimatedBounds;

  /// Repaint the given render object.
  ///
  /// The render object must be attached to a [PipelineOwner], must have a
  /// composited layer, and must be in need of painting. The render object's
  /// layer, if any, is re-used, along with any layers in the subtree that don't
  /// need to be repainted.
  ///
  /// See also:
  ///
  ///  * [RenderObject.isRepaintBoundary], which determines if a [RenderObject]
  ///    has a composited layer.
  static void repaintCompositedChild(RenderObject child,
      {bool debugAlsoPaintedParent = false}) {
    assert(child._needsPaint);
    _repaintCompositedChild(
      child,
      debugAlsoPaintedParent: debugAlsoPaintedParent,
    );
  }

  static void _repaintCompositedChild(
    RenderObject child, {
    bool debugAlsoPaintedParent = false,
    PaintingContext? childContext,
  }) {
    assert(child.isRepaintBoundary);
    assert(() {
      // register the call for RepaintBoundary metrics
      child.debugRegisterRepaintBoundaryPaint(
        includedParent: debugAlsoPaintedParent,
        includedChild: true,
      );
      return true;
    }());
    OffsetLayer? childLayer = child._layerHandle.layer as OffsetLayer?;
    if (childLayer == null) {
      assert(debugAlsoPaintedParent);
      assert(child._layerHandle.layer == null);
      // Not using the `layer` setter because the setter asserts that we not
      // replace the layer for repaint boundaries. That assertion does not
      // apply here because this is exactly the place designed to create a
      // layer for repaint boundaries.
      final OffsetLayer layer = OffsetLayer();
      child._layerHandle.layer = childLayer = layer;
    } else {
      assert(debugAlsoPaintedParent || childLayer.attached);
      childLayer.removeAllChildren();
    }
    assert(identical(childLayer, child._layerHandle.layer));
    assert(child._layerHandle.layer is OffsetLayer);
    assert(() {
      childLayer!.debugCreator = child.debugCreator ?? child.runtimeType;
      return true;
    }());
    childContext ??= PaintingContext(childLayer, child.paintBounds);
    child._paintWithContext(childContext, Offset.zero);

    // Double-check that the paint method did not replace the layer (the first
    // check is done in the [layer] setter itself).
    assert(identical(childLayer, child._layerHandle.layer));
    childContext.stopRecordingIfNeeded();
  }

  /// In debug mode, repaint the given render object using a custom painting
  /// context that can record the results of the painting operation in addition
  /// to performing the regular paint of the child.
  ///
  /// See also:
  ///
  ///  * [repaintCompositedChild], for repainting a composited child without
  ///    instrumentation.
  static void debugInstrumentRepaintCompositedChild(
    RenderObject child, {
    bool debugAlsoPaintedParent = false,
    required PaintingContext customContext,
  }) {
    assert(() {
      _repaintCompositedChild(
        child,
        debugAlsoPaintedParent: debugAlsoPaintedParent,
        childContext: customContext,
      );
      return true;
    }());
  }

  /// Paint a child [RenderObject].
  ///
  /// If the child has its own composited layer, the child will be composited
  /// into the layer subtree associated with this painting context. Otherwise,
  /// the child will be painted into the current PictureLayer for this context.
  void paintChild(RenderObject child, Offset offset) {
    assert(() {
      debugOnProfilePaint?.call(child);
      return true;
    }());

    if (child.isRepaintBoundary) {
      stopRecordingIfNeeded();
      _compositeChild(child, offset);
    } else {
      child._paintWithContext(this, offset);
    }
  }

  void _compositeChild(RenderObject child, Offset offset) {
    assert(!_isRecording);
    assert(child.isRepaintBoundary);
    assert(_canvas == null || _canvas!.getSaveCount() == 1);

    // Create a layer for our child, and paint the child into it.
    if (child._needsPaint) {
      repaintCompositedChild(child, debugAlsoPaintedParent: true);
    } else {
      assert(() {
        // register the call for RepaintBoundary metrics
        child.debugRegisterRepaintBoundaryPaint();
        child._layerHandle.layer!.debugCreator = child.debugCreator ?? child;
        return true;
      }());
    }
    assert(child._layerHandle.layer is OffsetLayer);
    final OffsetLayer childOffsetLayer =
        child._layerHandle.layer! as OffsetLayer;
    childOffsetLayer.offset = offset;
    appendLayer(childOffsetLayer);
  }

  /// Adds a layer to the recording requiring that the recording is already
  /// stopped.
  ///
  /// Do not call this function directly: call [addLayer] or [pushLayer]
  /// instead. This function is called internally when all layers not
  /// generated from the [canvas] are added.
  ///
  /// Subclasses that need to customize how layers are added should override
  /// this method.
  @protected
  void appendLayer(Layer layer) {
    assert(!_isRecording);
    layer.remove();
    _containerLayer.append(layer);
  }

  bool get _isRecording {
    final bool hasCanvas = _canvas != null;
    assert(() {
      if (hasCanvas) {
        assert(_currentLayer != null);
        assert(_recorder != null);
        assert(_canvas != null);
      } else {
        assert(_currentLayer == null);
        assert(_recorder == null);
        assert(_canvas == null);
      }
      return true;
    }());
    return hasCanvas;
  }

  // Recording state
  PictureLayer? _currentLayer;
  ui.PictureRecorder? _recorder;
  Canvas? _canvas;

  /// The canvas on which to paint.
  ///
  /// The current canvas can change whenever you paint a child using this
  /// context, which means it's fragile to hold a reference to the canvas
  /// returned by this getter.
  @override
  Canvas get canvas {
    if (_canvas == null) _startRecording();
    assert(_currentLayer != null);
    return _canvas!;
  }

  void _startRecording() {
    assert(!_isRecording);
    _currentLayer = PictureLayer(estimatedBounds);
    _recorder = ui.PictureRecorder();
    _canvas = Canvas(_recorder!);
    _containerLayer.append(_currentLayer!);
  }

  /// Stop recording to a canvas if recording has started.
  ///
  /// Do not call this function directly: functions in this class will call
  /// this method as needed. This function is called internally to ensure that
  /// recording is stopped before adding layers or finalizing the results of a
  /// paint.
  ///
  /// Subclasses that need to customize how recording to a canvas is performed
  /// should override this method to save the results of the custom canvas
  /// recordings.
  @protected
  @mustCallSuper
  void stopRecordingIfNeeded() {
    if (!_isRecording) return;
    assert(() {
      if (debugRepaintRainbowEnabled) {
        final Paint paint = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 6.0
          ..color = debugCurrentRepaintColor.toColor();
        canvas.drawRect(estimatedBounds.deflate(3.0), paint);
      }
      if (debugPaintLayerBordersEnabled) {
        final Paint paint = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.0
          ..color = const Color(0xFFFF9800);
        canvas.drawRect(estimatedBounds, paint);
      }
      return true;
    }());
    _currentLayer!.picture = _recorder!.endRecording();
    _currentLayer = null;
    _recorder = null;
    _canvas = null;
  }

  /// Hints that the painting in the current layer is complex and would benefit
  /// from caching.
  ///
  /// If this hint is not set, the compositor will apply its own heuristics to
  /// decide whether the current layer is complex enough to benefit from
  /// caching.
  void setIsComplexHint() {
    _currentLayer?.isComplexHint = true;
  }

  /// Hints that the painting in the current layer is likely to change next frame.
  ///
  /// This hint tells the compositor not to cache the current layer because the
  /// cache will not be used in the future. If this hint is not set, the
  /// compositor will apply its own heuristics to decide whether the current
  /// layer is likely to be reused in the future.
  void setWillChangeHint() {
    _currentLayer?.willChangeHint = true;
  }

  /// Adds a composited leaf layer to the recording.
  ///
  /// After calling this function, the [canvas] property will change to refer to
  /// a new [Canvas] that draws on top of the given layer.
  ///
  /// A [RenderObject] that uses this function is very likely to require its
  /// [RenderObject.alwaysNeedsCompositing] property to return true. That informs
  /// ancestor render objects that this render object will include a composited
  /// layer, which, for example, causes them to use composited clips.
  ///
  /// See also:
  ///
  ///  * [pushLayer], for adding a layer and painting further contents within
  ///    it.
  void addLayer(Layer layer) {
    stopRecordingIfNeeded();
    appendLayer(layer);
  }

  /// Appends the given layer to the recording, and calls the `painter` callback
  /// with that layer, providing the `childPaintBounds` as the estimated paint
  /// bounds of the child. The `childPaintBounds` can be used for debugging but
  /// have no effect on painting.
  ///
  /// The given layer must be an unattached orphan. (Providing a newly created
  /// object, rather than reusing an existing layer, satisfies that
  /// requirement.)
  ///
  /// {@template flutter.rendering.PaintingContext.pushLayer.offset}
  /// The `offset` is the offset to pass to the `painter`. In particular, it is
  /// not an offset applied to the layer itself. Layers conceptually by default
  /// have no position or size, though they can transform their contents. For
  /// example, an [OffsetLayer] applies an offset to its children.
  /// {@endtemplate}
  ///
  /// If the `childPaintBounds` are not specified then the current layer's paint
  /// bounds are used. This is appropriate if the child layer does not apply any
  /// transformation or clipping to its contents. The `childPaintBounds`, if
  /// specified, must be in the coordinate system of the new layer (i.e. as seen
  /// by its children after it applies whatever transform to its contents), and
  /// should not go outside the current layer's paint bounds.
  ///
  /// See also:
  ///
  ///  * [addLayer], for pushing a layer without painting further contents
  ///    within it.
  void pushLayer(
      ContainerLayer childLayer, PaintingContextCallback painter, Offset offset,
      {Rect? childPaintBounds}) {
    assert(painter != null);
    // If a layer is being reused, it may already contain children. We remove
    // them so that `painter` can add children that are relevant for this frame.
    if (childLayer.hasChildren) {
      childLayer.removeAllChildren();
    }
    stopRecordingIfNeeded();
    appendLayer(childLayer);
    final PaintingContext childContext =
        createChildContext(childLayer, childPaintBounds ?? estimatedBounds);

    painter(childContext, offset);
    childContext.stopRecordingIfNeeded();
  }

  /// Creates a painting context configured to paint into [childLayer].
  ///
  /// The `bounds` are estimated paint bounds for debugging purposes.
  @protected
  PaintingContext createChildContext(ContainerLayer childLayer, Rect bounds) {
    return PaintingContext(childLayer, bounds);
  }

  /// Clip further painting using a rectangle.
  ///
  /// {@template flutter.rendering.PaintingContext.pushClipRect.needsCompositing}
  /// The `needsCompositing` argument specifies whether the child needs
  /// compositing. Typically this matches the value of
  /// [RenderObject.needsCompositing] for the caller. If false, this method
  /// returns null, indicating that a layer is no longer necessary. If a render
  /// object calling this method stores the `oldLayer` in its
  /// [RenderObject.layer] field, it should set that field to null.
  ///
  /// When `needsCompositing` is false, this method will use a more efficient
  /// way to apply the layer effect than actually creating a layer.
  /// {@endtemplate}
  ///
  /// {@template flutter.rendering.PaintingContext.pushClipRect.offset}
  /// The `offset` argument is the offset from the origin of the canvas'
  /// coordinate system to the origin of the caller's coordinate system.
  /// {@endtemplate}
  ///
  /// The `clipRect` is the rectangle (in the caller's coordinate system) to use
  /// to clip the painting done by [painter]. It should not include the
  /// `offset`.
  ///
  /// The `painter` callback will be called while the `clipRect` is applied. It
  /// is called synchronously during the call to [pushClipRect].
  ///
  /// The `clipBehavior` argument controls how the rectangle is clipped.
  ///
  /// {@template flutter.rendering.PaintingContext.pushClipRect.oldLayer}
  /// For the `oldLayer` argument, specify the layer created in the previous
  /// frame. This gives the engine more information for performance
  /// optimizations. Typically this is the value of [RenderObject.layer] that a
  /// render object creates once, then reuses for all subsequent frames until a
  /// layer is no longer needed (e.g. the render object no longer needs
  /// compositing) or until the render object changes the type of the layer
  /// (e.g. from opacity layer to a clip rect layer).
  /// {@endtemplate}
  ClipRectLayer? pushClipRect(bool needsCompositing, Offset offset,
      Rect clipRect, PaintingContextCallback painter,
      {Clip clipBehavior = Clip.hardEdge, ClipRectLayer? oldLayer}) {
    final Rect offsetClipRect = clipRect.shift(offset);
    if (needsCompositing) {
      final ClipRectLayer layer = oldLayer ?? ClipRectLayer();
      layer
        ..clipRect = offsetClipRect
        ..clipBehavior = clipBehavior;
      pushLayer(layer, painter, offset, childPaintBounds: offsetClipRect);
      return layer;
    } else {
      clipRectAndPaint(offsetClipRect, clipBehavior, offsetClipRect,
          () => painter(this, offset));
      return null;
    }
  }

  /// Clip further painting using a rounded rectangle.
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.needsCompositing}
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.offset}
  ///
  /// The `bounds` argument is used to specify the region of the canvas (in the
  /// caller's coordinate system) into which `painter` will paint.
  ///
  /// The `clipRRect` argument specifies the rounded-rectangle (in the caller's
  /// coordinate system) to use to clip the painting done by `painter`. It
  /// should not include the `offset`.
  ///
  /// The `painter` callback will be called while the `clipRRect` is applied. It
  /// is called synchronously during the call to [pushClipRRect].
  ///
  /// The `clipBehavior` argument controls how the rounded rectangle is clipped.
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.oldLayer}
  ClipRRectLayer? pushClipRRect(bool needsCompositing, Offset offset,
      Rect bounds, RRect clipRRect, PaintingContextCallback painter,
      {Clip clipBehavior = Clip.antiAlias, ClipRRectLayer? oldLayer}) {
    assert(clipBehavior != null);
    final Rect offsetBounds = bounds.shift(offset);
    final RRect offsetClipRRect = clipRRect.shift(offset);
    if (needsCompositing) {
      final ClipRRectLayer layer = oldLayer ?? ClipRRectLayer();
      layer
        ..clipRRect = offsetClipRRect
        ..clipBehavior = clipBehavior;
      pushLayer(layer, painter, offset, childPaintBounds: offsetBounds);
      return layer;
    } else {
      clipRRectAndPaint(offsetClipRRect, clipBehavior, offsetBounds,
          () => painter(this, offset));
      return null;
    }
  }

  /// Clip further painting using a path.
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.needsCompositing}
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.offset}
  ///
  /// The `bounds` argument is used to specify the region of the canvas (in the
  /// caller's coordinate system) into which `painter` will paint.
  ///
  /// The `clipPath` argument specifies the [Path] (in the caller's coordinate
  /// system) to use to clip the painting done by `painter`. It should not
  /// include the `offset`.
  ///
  /// The `painter` callback will be called while the `clipPath` is applied. It
  /// is called synchronously during the call to [pushClipPath].
  ///
  /// The `clipBehavior` argument controls how the path is clipped.
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.oldLayer}
  ClipPathLayer? pushClipPath(bool needsCompositing, Offset offset, Rect bounds,
      Path clipPath, PaintingContextCallback painter,
      {Clip clipBehavior = Clip.antiAlias, ClipPathLayer? oldLayer}) {
    assert(clipBehavior != null);
    final Rect offsetBounds = bounds.shift(offset);
    final Path offsetClipPath = clipPath.shift(offset);
    if (needsCompositing) {
      final ClipPathLayer layer = oldLayer ?? ClipPathLayer();
      layer
        ..clipPath = offsetClipPath
        ..clipBehavior = clipBehavior;
      pushLayer(layer, painter, offset, childPaintBounds: offsetBounds);
      return layer;
    } else {
      clipPathAndPaint(offsetClipPath, clipBehavior, offsetBounds,
          () => painter(this, offset));
      return null;
    }
  }

  /// Blend further painting with a color filter.
  ///
  /// {@macro flutter.rendering.PaintingContext.pushLayer.offset}
  ///
  /// The `colorFilter` argument is the [ColorFilter] value to use when blending
  /// the painting done by `painter`.
  ///
  /// The `painter` callback will be called while the `colorFilter` is applied.
  /// It is called synchronously during the call to [pushColorFilter].
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.oldLayer}
  ///
  /// A [RenderObject] that uses this function is very likely to require its
  /// [RenderObject.alwaysNeedsCompositing] property to return true. That informs
  /// ancestor render objects that this render object will include a composited
  /// layer, which, for example, causes them to use composited clips.
  ColorFilterLayer pushColorFilter(
      Offset offset, ColorFilter colorFilter, PaintingContextCallback painter,
      {ColorFilterLayer? oldLayer}) {
    assert(colorFilter != null);
    final ColorFilterLayer layer = oldLayer ?? ColorFilterLayer();
    layer.colorFilter = colorFilter;
    pushLayer(layer, painter, offset);
    return layer;
  }

  /// Transform further painting using a matrix.
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.needsCompositing}
  ///
  /// The `offset` argument is the offset to pass to `painter` and the offset to
  /// the origin used by `transform`.
  ///
  /// The `transform` argument is the [Matrix4] with which to transform the
  /// coordinate system while calling `painter`. It should not include `offset`.
  /// It is applied effectively after applying `offset`.
  ///
  /// The `painter` callback will be called while the `transform` is applied. It
  /// is called synchronously during the call to [pushTransform].
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.oldLayer}
  TransformLayer? pushTransform(bool needsCompositing, Offset offset,
      Matrix4 transform, PaintingContextCallback painter,
      {TransformLayer? oldLayer}) {
    final Matrix4 effectiveTransform =
        Matrix4.translationValues(offset.dx, offset.dy, 0.0)
          ..multiply(transform)
          ..translate(-offset.dx, -offset.dy);
    if (needsCompositing) {
      final TransformLayer layer = oldLayer ?? TransformLayer();
      layer.transform = effectiveTransform;
      pushLayer(
        layer,
        painter,
        offset,
        childPaintBounds: MatrixUtils.inverseTransformRect(
            effectiveTransform, estimatedBounds),
      );
      return layer;
    } else {
      canvas
        ..save()
        ..transform(effectiveTransform.storage);
      painter(this, offset);
      canvas.restore();
      return null;
    }
  }

  /// Blend further painting with an alpha value.
  ///
  /// The `offset` argument indicates an offset to apply to all the children
  /// (the rendering created by `painter`).
  ///
  /// The `alpha` argument is the alpha value to use when blending the painting
  /// done by `painter`. An alpha value of 0 means the painting is fully
  /// transparent and an alpha value of 255 means the painting is fully opaque.
  ///
  /// The `painter` callback will be called while the `alpha` is applied. It
  /// is called synchronously during the call to [pushOpacity].
  ///
  /// {@macro flutter.rendering.PaintingContext.pushClipRect.oldLayer}
  ///
  /// A [RenderObject] that uses this function is very likely to require its
  /// [RenderObject.alwaysNeedsCompositing] property to return true. That informs
  /// ancestor render objects that this render object will include a composited
  /// layer, which, for example, causes them to use composited clips.
  OpacityLayer pushOpacity(
      Offset offset, int alpha, PaintingContextCallback painter,
      {OpacityLayer? oldLayer}) {
    final OpacityLayer layer = oldLayer ?? OpacityLayer();
    layer
      ..alpha = alpha
      ..offset = offset;
    pushLayer(layer, painter, Offset.zero);
    return layer;
  }

  @override
  String toString() =>
      '${objectRuntimeType(this, 'PaintingContext')}#$hashCode(layer: $_containerLayer, canvas bounds: $estimatedBounds)';
}
