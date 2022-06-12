abstract class Layer extends AbstractNode with DiagnosticableTreeMixin {
  /// If asserts are enabled, returns whether [dispose] has
  /// been called since the last time any retained resources were created.
  ///
  /// Throws an exception if asserts are disabled.
  bool get debugDisposed {
    late bool disposed;
    assert(() {
      disposed = _debugDisposed;
      return true;
    }());
    return disposed;
  }

  bool _debugDisposed = false;

  /// Set when this layer is appended to a [ContainerLayer], and
  /// unset when it is removed.
  ///
  /// This cannot be set from [attach] or [detach] which is called when an
  /// entire subtree is attached to or detached from an owner. Layers may be
  /// appended to or removed from a [ContainerLayer] regardless of whether they
  /// are attached or detached, and detaching a layer from an owner does not
  /// imply that it has been removed from its parent.
  final LayerHandle<Layer> _parentHandle = LayerHandle<Layer>();

  /// Incremented by [LayerHandle].
  int _refCount = 0;

  /// Called by [LayerHandle].
  void _unref() {
    assert(_refCount > 0);
    _refCount -= 1;
    if (_refCount == 0) {
      dispose();
    }
  }

  /// Returns the number of objects holding a [LayerHandle] to this layer.
  ///
  /// This method throws if asserts are disabled.
  int get debugHandleCount {
    late int count;
    assert(() {
      count = _refCount;
      return true;
    }());
    return count;
  }

  /// Clears any retained resources that this layer holds.
  ///
  /// This method must dispose resources such as [EngineLayer] and [Picture]
  /// objects. The layer is still usable after this call, but any graphics
  /// related resources it holds will need to be recreated.
  ///
  /// This method _only_ disposes resources for this layer. For example, if it
  /// is a [ContainerLayer], it does not dispose resources of any children.
  /// However, [ContainerLayer]s do remove any children they have when
  /// this method is called, and if this layer was the last holder of a removed
  /// child handle, the child may recursively clean up its resources.
  ///
  /// This method automatically gets called when all outstanding [LayerHandle]s
  /// are disposed. [LayerHandle] objects are typically held by the [parent]
  /// layer of this layer and any [RenderObject]s that participated in creating
  /// it.
  ///
  /// After calling this method, the object is unusable.
  @mustCallSuper
  @protected
  @visibleForTesting
  void dispose() {
    assert(
      !_debugDisposed,
      'Layers must only be disposed once. This is typically handled by '
      'LayerHandle and createHandle. Subclasses should not directly call '
      'dispose, except to call super.dispose() in an overridden dispose  '
      'method. Tests must only call dispose once.',
    );
    assert(() {
      assert(
        _refCount == 0,
        'Do not directly call dispose on a $runtimeType. Instead, '
        'use createHandle and LayerHandle.dispose.',
      );
      _debugDisposed = true;
      return true;
    }());
    _engineLayer?.dispose();
    _engineLayer = null;
  }

  /// This layer's parent in the layer tree.
  ///
  /// The [parent] of the root node in the layer tree is null.
  ///
  /// Only subclasses of [ContainerLayer] can have children in the layer tree.
  /// All other layer classes are used for leaves in the layer tree.
  @override
  ContainerLayer? get parent => super.parent as ContainerLayer?;

  // Whether this layer has any changes since its last call to [addToScene].
  //
  // Initialized to true as a new layer has never called [addToScene], and is
  // set to false after calling [addToScene]. The value can become true again
  // if [markNeedsAddToScene] is called, or when [updateSubtreeNeedsAddToScene]
  // is called on this layer or on an ancestor layer.
  //
  // The values of [_needsAddToScene] in a tree of layers are said to be
  // _consistent_ if every layer in the tree satisfies the following:
  //
  // - If [alwaysNeedsAddToScene] is true, then [_needsAddToScene] is also true.
  // - If [_needsAddToScene] is true and [parent] is not null, then
  //   `parent._needsAddToScene` is true.
  //
  // Typically, this value is set during the paint phase and during compositing.
  // During the paint phase render objects create new layers and call
  // [markNeedsAddToScene] on existing layers, causing this value to become
  // true. After the paint phase the tree may be in an inconsistent state.
  // During compositing [ContainerLayer.buildScene] first calls
  // [updateSubtreeNeedsAddToScene] to bring this tree to a consistent state,
  // then it calls [addToScene], and finally sets this field to false.
  bool _needsAddToScene = true;

  /// Mark that this layer has changed and [addToScene] needs to be called.
  @protected
  @visibleForTesting
  void markNeedsAddToScene() {
    assert(
      !alwaysNeedsAddToScene,
      '$runtimeType with alwaysNeedsAddToScene set called markNeedsAddToScene.\n'
      "The layer's alwaysNeedsAddToScene is set to true, and therefore it should not call markNeedsAddToScene.",
    );
    assert(!_debugDisposed);

    // Already marked. Short-circuit.
    if (_needsAddToScene) {
      return;
    }

    _needsAddToScene = true;
  }

  /// Mark that this layer is in sync with engine.
  ///
  /// This is for debugging and testing purposes only. In release builds
  /// this method has no effect.
  @visibleForTesting
  void debugMarkClean() {
    assert(() {
      _needsAddToScene = false;
      return true;
    }());
  }

  /// Subclasses may override this to true to disable retained rendering.
  @protected
  bool get alwaysNeedsAddToScene => false;

  /// Whether this or any descendant layer in the subtree needs [addToScene].
  ///
  /// This is for debug and test purpose only. It only becomes valid after
  /// calling [updateSubtreeNeedsAddToScene].
  @visibleForTesting
  bool? get debugSubtreeNeedsAddToScene {
    bool? result;
    assert(() {
      result = _needsAddToScene;
      return true;
    }());
    return result;
  }

  /// Stores the engine layer created for this layer in order to reuse engine
  /// resources across frames for better app performance.
  ///
  /// This value may be passed to [ui.SceneBuilder.addRetained] to communicate
  /// to the engine that nothing in this layer or any of its descendants
  /// changed. The native engine could, for example, reuse the texture rendered
  /// in a previous frame. The web engine could, for example, reuse the HTML
  /// DOM nodes created for a previous frame.
  ///
  /// This value may be passed as `oldLayer` argument to a "push" method to
  /// communicate to the engine that a layer is updating a previously rendered
  /// layer. The web engine could, for example, update the properties of
  /// previously rendered HTML DOM nodes rather than creating new nodes.
  @protected
  @visibleForTesting
  ui.EngineLayer? get engineLayer => _engineLayer;

  /// Sets the engine layer used to render this layer.
  ///
  /// Typically this field is set to the value returned by [addToScene], which
  /// in turn returns the engine layer produced by one of [ui.SceneBuilder]'s
  /// "push" methods, such as [ui.SceneBuilder.pushOpacity].
  @protected
  @visibleForTesting
  set engineLayer(ui.EngineLayer? value) {
    assert(!_debugDisposed);

    _engineLayer?.dispose();
    _engineLayer = value;
    if (!alwaysNeedsAddToScene) {
      // The parent must construct a new engine layer to add this layer to, and
      // so we mark it as needing [addToScene].
      //
      // This is designed to handle two situations:
      //
      // 1. When rendering the complete layer tree as normal. In this case we
      // call child `addToScene` methods first, then we call `set engineLayer`
      // for the parent. The children will call `markNeedsAddToScene` on the
      // parent to signal that they produced new engine layers and therefore
      // the parent needs to update. In this case, the parent is already adding
      // itself to the scene via [addToScene], and so after it's done, its
      // `set engineLayer` is called and it clears the `_needsAddToScene` flag.
      //
      // 2. When rendering an interior layer (e.g. `OffsetLayer.toImage`). In
      // this case we call `addToScene` for one of the children but not the
      // parent, i.e. we produce new engine layers for children but not for the
      // parent. Here the children will mark the parent as needing
      // `addToScene`, but the parent does not clear the flag until some future
      // frame decides to render it, at which point the parent knows that it
      // cannot retain its engine layer and will call `addToScene` again.
      if (parent != null && !parent!.alwaysNeedsAddToScene) {
        parent!.markNeedsAddToScene();
      }
    }
  }

  ui.EngineLayer? _engineLayer;

  /// Traverses the layer subtree starting from this layer and determines whether it needs [addToScene].
  ///
  /// A layer needs [addToScene] if any of the following is true:
  ///
  /// - [alwaysNeedsAddToScene] is true.
  /// - [markNeedsAddToScene] has been called.
  /// - Any of its descendants need [addToScene].
  ///
  /// [ContainerLayer] overrides this method to recursively call it on its children.
  @protected
  @visibleForTesting
  void updateSubtreeNeedsAddToScene() {
    _needsAddToScene = _needsAddToScene || alwaysNeedsAddToScene;
  }

  /// This layer's next sibling in the parent layer's child list.
  Layer? get nextSibling => _nextSibling;
  Layer? _nextSibling;

  /// This layer's previous sibling in the parent layer's child list.
  Layer? get previousSibling => _previousSibling;
  Layer? _previousSibling;

  @override
  void dropChild(AbstractNode child) {
    if (!alwaysNeedsAddToScene) {
      markNeedsAddToScene();
    }
    super.dropChild(child);
  }

  @override
  void adoptChild(AbstractNode child) {
    if (!alwaysNeedsAddToScene) {
      markNeedsAddToScene();
    }
    super.adoptChild(child);
  }

  /// Removes this layer from its parent layer's child list.
  ///
  /// This has no effect if the layer's parent is already null.
  @mustCallSuper
  void remove() {
    parent?._removeChild(this);
  }

  /// Search this layer and its subtree for annotations of type `S` at the
  /// location described by `localPosition`.
  ///
  /// This method is called by the default implementation of [find] and
  /// [findAllAnnotations]. Override this method to customize how the layer
  /// should search for annotations, or if the layer has its own annotations to
  /// add.
  ///
  /// The default implementation simply returns `false`, which means neither
  /// the layer nor its children has annotations, and the annotation search
  /// is not absorbed either (see below for explanation).
  ///
  /// ## About layer annotations
  ///
  /// {@template flutter.rendering.Layer.findAnnotations.aboutAnnotations}
  /// An annotation is an optional object of any type that can be carried with a
  /// layer. An annotation can be found at a location as long as the owner layer
  /// contains the location and is walked to.
  ///
  /// The annotations are searched by first visiting each child recursively,
  /// then this layer, resulting in an order from visually front to back.
  /// Annotations must meet the given restrictions, such as type and position.
  ///
  /// The common way for a value to be found here is by pushing an
  /// [AnnotatedRegionLayer] into the layer tree, or by adding the desired
  /// annotation by overriding [findAnnotations].
  /// {@endtemplate}
  ///
  /// ## Parameters and return value
  ///
  /// The [result] parameter is where the method outputs the resulting
  /// annotations. New annotations found during the walk are added to the tail.
  ///
  /// The [onlyFirst] parameter indicates that, if true, the search will stop
  /// when it finds the first qualified annotation; otherwise, it will walk the
  /// entire subtree.
  ///
  /// The return value indicates the opacity of this layer and its subtree at
  /// this position. If it returns true, then this layer's parent should skip
  /// the children behind this layer. In other words, it is opaque to this type
  /// of annotation and has absorbed the search so that its siblings behind it
  /// are not aware of the search. If the return value is false, then the parent
  /// might continue with other siblings.
  ///
  /// The return value does not affect whether the parent adds its own
  /// annotations; in other words, if a layer is supposed to add an annotation,
  /// it will always add it even if its children are opaque to this type of
  /// annotation. However, the opacity that the parents return might be affected
  /// by their children, hence making all of its ancestors opaque to this type
  /// of annotation.
  @protected
  bool findAnnotations<S extends Object>(
    AnnotationResult<S> result,
    Offset localPosition, {
    required bool onlyFirst,
  }) {
    return false;
  }

  /// Search this layer and its subtree for the first annotation of type `S`
  /// under the point described by `localPosition`.
  ///
  /// Returns null if no matching annotations are found.
  ///
  /// By default this method simply calls [findAnnotations] with `onlyFirst:
  /// true` and returns the annotation of the first result. Prefer overriding
  /// [findAnnotations] instead of this method, because during an annotation
  /// search, only [findAnnotations] is recursively called, while custom
  /// behavior in this method is ignored.
  ///
  /// ## About layer annotations
  ///
  /// {@macro flutter.rendering.Layer.findAnnotations.aboutAnnotations}
  ///
  /// See also:
  ///
  ///  * [findAllAnnotations], which is similar but returns all annotations found
  ///    at the given position.
  ///  * [AnnotatedRegionLayer], for placing values in the layer tree.
  S? find<S extends Object>(Offset localPosition) {
    final AnnotationResult<S> result = AnnotationResult<S>();
    findAnnotations<S>(result, localPosition, onlyFirst: true);
    return result.entries.isEmpty ? null : result.entries.first.annotation;
  }

  /// Search this layer and its subtree for all annotations of type `S` under
  /// the point described by `localPosition`.
  ///
  /// Returns a result with empty entries if no matching annotations are found.
  ///
  /// By default this method simply calls [findAnnotations] with `onlyFirst:
  /// false` and returns the annotations of its result. Prefer overriding
  /// [findAnnotations] instead of this method, because during an annotation
  /// search, only [findAnnotations] is recursively called, while custom
  /// behavior in this method is ignored.
  ///
  /// ## About layer annotations
  ///
  /// {@macro flutter.rendering.Layer.findAnnotations.aboutAnnotations}
  ///
  /// See also:
  ///
  ///  * [find], which is similar but returns the first annotation found at the
  ///    given position.
  ///  * [AnnotatedRegionLayer], for placing values in the layer tree.
  AnnotationResult<S> findAllAnnotations<S extends Object>(
      Offset localPosition) {
    final AnnotationResult<S> result = AnnotationResult<S>();
    findAnnotations<S>(result, localPosition, onlyFirst: false);
    return result;
  }

  /// Override this method to upload this layer to the engine.
  ///
  /// Return the engine layer for retained rendering. When there's no
  /// corresponding engine layer, null is returned.
  @protected
  void addToScene(ui.SceneBuilder builder);

  void _addToSceneWithRetainedRendering(ui.SceneBuilder builder) {
    // There can't be a loop by adding a retained layer subtree whose
    // _needsAddToScene is false.
    //
    // Proof by contradiction:
    //
    // If we introduce a loop, this retained layer must be appended to one of
    // its descendant layers, say A. That means the child structure of A has
    // changed so A's _needsAddToScene is true. This contradicts
    // _needsAddToScene being false.
    if (!_needsAddToScene && _engineLayer != null) {
      builder.addRetained(_engineLayer!);
      return;
    }
    addToScene(builder);
    // Clearing the flag _after_ calling `addToScene`, not _before_. This is
    // because `addToScene` calls children's `addToScene` methods, which may
    // mark this layer as dirty.
    _needsAddToScene = false;
  }

  /// The object responsible for creating this layer.
  ///
  /// Defaults to the value of [RenderObject.debugCreator] for the render object
  /// that created this layer. Used in debug messages.
  Object? debugCreator;

  @override
  String toStringShort() =>
      '${super.toStringShort()}${owner == null ? " DETACHED" : ""}';

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Object>('owner', owner,
        level: parent != null ? DiagnosticLevel.hidden : DiagnosticLevel.info,
        defaultValue: null));
    properties.add(DiagnosticsProperty<Object?>('creator', debugCreator,
        defaultValue: null, level: DiagnosticLevel.debug));
    if (_engineLayer != null) {
      properties.add(DiagnosticsProperty<String>(
          'engine layer', describeIdentity(_engineLayer)));
    }
    properties.add(DiagnosticsProperty<int>('handles', debugHandleCount));
  }
}
