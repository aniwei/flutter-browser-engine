import { RenderObject } from './RenderObject'

export abstract class RenderBox extends RenderObject {
  static debugIntrinsicsDepth = 0

  public cachedIntrinsicDimensions: Map<_IntrinsicDimensionsCacheEntry, number> | null = null

  setupParentData (child: RenderObject) {
    if (child.parentData is! BoxParentData)
      child.parentData = BoxParentData();
  }  

  computeIntrinsicDimension (
    dimension, 
    argument, 
    computer
  ) {
    let shouldCache = true
    
    if (shouldCache) {
      Map<String, String> debugTimelineArguments = timelineArgumentsIndicatingLandmarkEvent;
      
      if (!kReleaseMode) {
        if (debugProfileLayoutsEnabled || _debugIntrinsicsDepth == 0) {
          Timeline.startSync(
            '$runtimeType intrinsics',
            arguments: debugTimelineArguments,
          );
        }
        _debugIntrinsicsDepth += 1;
      }
      _cachedIntrinsicDimensions ??= <_IntrinsicDimensionsCacheEntry, double>{};
      final double result = _cachedIntrinsicDimensions!.putIfAbsent(
        _IntrinsicDimensionsCacheEntry(dimension, argument),
        () => computer(argument),
      );
      if (!kReleaseMode) {
        _debugIntrinsicsDepth -= 1;
        if (debugProfileLayoutsEnabled || _debugIntrinsicsDepth == 0) {
          Timeline.finishSync();
        }
      }
      return result;
    }

    return computer(argument)
  }

  getMinIntrinsicWidth (height: number) {
    assert(() {
      if (height == null) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('The height argument to getMinIntrinsicWidth was null.'),
          ErrorDescription('The argument to getMinIntrinsicWidth must not be negative or null.'),
          ErrorHint('If you do not have a specific height in mind, then pass double.infinity instead.'),
        ]);
      }
      if (height < 0.0) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('The height argument to getMinIntrinsicWidth was negative.'),
          ErrorDescription('The argument to getMinIntrinsicWidth must not be negative or null.'),
          ErrorHint(
            'If you perform computations on another height before passing it to '
            'getMinIntrinsicWidth, consider using math.max() or double.clamp() '
            'to force the value into the valid range.',
          ),
        ]);
      }
      return true;
    }())

    return _computeIntrinsicDimension(_IntrinsicDimension.minWidth, height, computeMinIntrinsicWidth);
  }

  
  computeMinIntrinsicWidth (height: number) {
    return 0.0
  }

  getMaxIntrinsicWidth (height: number) {
    assert(() {
      if (height == null) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('The height argument to getMaxIntrinsicWidth was null.'),
          ErrorDescription('The argument to getMaxIntrinsicWidth must not be negative or null.'),
          ErrorHint('If you do not have a specific height in mind, then pass double.infinity instead.'),
        ]);
      }
      if (height < 0.0) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('The height argument to getMaxIntrinsicWidth was negative.'),
          ErrorDescription('The argument to getMaxIntrinsicWidth must not be negative or null.'),
          ErrorHint(
            'If you perform computations on another height before passing it to '
            'getMaxIntrinsicWidth, consider using math.max() or double.clamp() '
            'to force the value into the valid range.',
          ),
        ]);
      }
      return true;
    }());
    return _computeIntrinsicDimension(_IntrinsicDimension.maxWidth, height, computeMaxIntrinsicWidth);
  }

  computeMaxIntrinsicWidth (height: number): number {
    return 0.0;
  }

  getMinIntrinsicHeight (width: number): number {
    assert(() {
      if (width == null) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('The width argument to getMinIntrinsicHeight was null.'),
          ErrorDescription('The argument to getMinIntrinsicHeight must not be negative or null.'),
          ErrorHint('If you do not have a specific width in mind, then pass double.infinity instead.'),
        ]);
      }
      if (width < 0.0) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('The width argument to getMinIntrinsicHeight was negative.'),
          ErrorDescription('The argument to getMinIntrinsicHeight must not be negative or null.'),
          ErrorHint(
            'If you perform computations on another width before passing it to '
            'getMinIntrinsicHeight, consider using math.max() or double.clamp() '
            'to force the value into the valid range.',
          ),
        ]);
      }
      return true;
    }());
    return _computeIntrinsicDimension(_IntrinsicDimension.minHeight, width, computeMinIntrinsicHeight);
  }

  
  double computeMinIntrinsicHeight(double width) {
    return 0.0;
  }

  double getMaxIntrinsicHeight(double width) {
    assert(() {
      if (width == null) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('The width argument to getMaxIntrinsicHeight was null.'),
          ErrorDescription('The argument to getMaxIntrinsicHeight must not be negative or null.'),
          ErrorHint('If you do not have a specific width in mind, then pass double.infinity instead.'),
        ]);
      }
      if (width < 0.0) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('The width argument to getMaxIntrinsicHeight was negative.'),
          ErrorDescription('The argument to getMaxIntrinsicHeight must not be negative or null.'),
          ErrorHint(
            'If you perform computations on another width before passing it to '
            'getMaxIntrinsicHeight, consider using math.max() or double.clamp() '
            'to force the value into the valid range.',
          ),
        ]);
      }
      return true;
    }());
    return _computeIntrinsicDimension(_IntrinsicDimension.maxHeight, width, computeMaxIntrinsicHeight);
  }

  
  @protected
  double computeMaxIntrinsicHeight(double width) {
    return 0.0;
  }

  Map<BoxConstraints, Size>? _cachedDryLayoutSizes;
  bool _computingThisDryLayout = false;

  @mustCallSuper
  Size getDryLayout(BoxConstraints constraints) {
    bool shouldCache = true;
    assert(() {
      // we don't want the checked-mode intrinsic tests to affect
      // who gets marked dirty, etc.
      if (RenderObject.debugCheckingIntrinsics)
        shouldCache = false;
      return true;
    }());
    if (shouldCache) {
      Map<String, String> debugTimelineArguments = timelineArgumentsIndicatingLandmarkEvent;
      assert(() {
        if (debugProfileLayoutsEnabled) {
          debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();
        } else {
          debugTimelineArguments = Map<String, String>.of(debugTimelineArguments);
        }
        debugTimelineArguments['getDryLayout constraints'] = '$constraints';
        return true;
      }());
      if (!kReleaseMode) {
        if (debugProfileLayoutsEnabled || _debugIntrinsicsDepth == 0) {
          Timeline.startSync(
            '$runtimeType.getDryLayout',
            arguments: debugTimelineArguments,
          );
        }
        _debugIntrinsicsDepth += 1;
      }
      _cachedDryLayoutSizes ??= <BoxConstraints, Size>{};
      final Size result = _cachedDryLayoutSizes!.putIfAbsent(constraints, () => _computeDryLayout(constraints));
      if (!kReleaseMode) {
        _debugIntrinsicsDepth -= 1;
        if (debugProfileLayoutsEnabled || _debugIntrinsicsDepth == 0) {
          Timeline.finishSync();
        }
      }
      return result;
    }
    return _computeDryLayout(constraints);
  }

  Size _computeDryLayout(BoxConstraints constraints) {
    assert(() {
      assert(!_computingThisDryLayout);
      _computingThisDryLayout = true;
      return true;
    }());
    final Size result = computeDryLayout(constraints);
    assert(() {
      assert(_computingThisDryLayout);
      _computingThisDryLayout = false;
      return true;
    }());
    return result;
  }

  /// Computes the value returned by [getDryLayout]. Do not call this
  /// function directly, instead, call [getDryLayout].
  ///
  /// Override in subclasses that implement [performLayout] or [performResize]
  /// or when setting [sizedByParent] to true without overriding
  /// [performResize]. This method should return the [Size] that this
  /// [RenderBox] would like to be given the provided [BoxConstraints].
  ///
  /// The size returned by this method must match the [size] that the
  /// [RenderBox] will compute for itself in [performLayout] (or
  /// [performResize], if [sizedByParent] is true).
  ///
  /// If this algorithm depends on the size of a child, the size of that child
  /// should be obtained using its [getDryLayout] method.
  ///
  /// This layout is called "dry" layout as opposed to the regular "wet" layout
  /// run performed by [performLayout] because it computes the desired size for
  /// the given constraints without changing any internal state.
  ///
  /// ### When the size cannot be known
  ///
  /// There are cases where render objects do not have an efficient way to
  /// compute their size without doing a full layout. For example, the size
  /// may depend on the baseline of a child (which is not available without
  /// doing a full layout), it may be computed by a callback about which the
  /// render object cannot reason, or the layout is so complex that it
  /// is simply impractical to calculate the size in an efficient way.
  ///
  /// In such cases, it may be impossible (or at least impractical) to actually
  /// return a valid answer. In such cases, the function should call
  /// [debugCannotComputeDryLayout] from within an assert and return a dummy
  /// value of `const Size(0, 0)`.
  @protected
  Size computeDryLayout(BoxConstraints constraints) {
    assert(debugCannotComputeDryLayout(
      error: FlutterError.fromParts(<DiagnosticsNode>[
        ErrorSummary('The ${objectRuntimeType(this, 'RenderBox')} class does not implement "computeDryLayout".'),
        ErrorHint(
          'If you are not writing your own RenderBox subclass, then this is not\n'
          'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',
        ),
      ]),
    ));
    return Size.zero;
  }

  static bool _dryLayoutCalculationValid = true;

  /// Called from [computeDryLayout] within an assert if the given [RenderBox]
  /// subclass does not support calculating a dry layout.
  ///
  /// When asserts are enabled and [debugCheckingIntrinsics] is not true, this
  /// method will either throw the provided [FlutterError] or it will create and
  /// throw a [FlutterError] with the provided `reason`. Otherwise, it will
  /// simply return true.
  ///
  /// One of the arguments has to be provided.
  ///
  /// See also:
  ///
  ///  * [computeDryLayout], which lists some reasons why it may not be feasible
  ///    to compute the dry layout.
  bool debugCannotComputeDryLayout({String? reason, FlutterError? error}) {
    assert((reason == null) != (error == null));
    assert(() {
      if (!RenderObject.debugCheckingIntrinsics) {
        if (reason != null) {
          assert(error ==null);
          throw FlutterError.fromParts(<DiagnosticsNode>[
            ErrorSummary('The ${objectRuntimeType(this, 'RenderBox')} class does not support dry layout.'),
            if (reason.isNotEmpty) ErrorDescription(reason),
          ]);
        }
        assert(error != null);
        throw error!;
      }
      _dryLayoutCalculationValid = false;
      return true;
    }());
    return true;
  }

  /// Whether this render object has undergone layout and has a [size].
  bool get hasSize => _size != null;

  /// The size of this render box computed during layout.
  ///
  /// This value is stale whenever this object is marked as needing layout.
  /// During [performLayout], do not read the size of a child unless you pass
  /// true for parentUsesSize when calling the child's [layout] function.
  ///
  /// The size of a box should be set only during the box's [performLayout] or
  /// [performResize] functions. If you wish to change the size of a box outside
  /// of those functions, call [markNeedsLayout] instead to schedule a layout of
  /// the box.
  Size get size {
    assert(hasSize, 'RenderBox was not laid out: ${toString()}');
    assert(() {
      final Size? _size = this._size;
      if (_size is _DebugSize) {
        assert(_size._owner == this);
        if (RenderObject.debugActiveLayout != null &&
            !RenderObject.debugActiveLayout!.debugDoingThisLayoutWithCallback) {
          assert(
            debugDoingThisResize || debugDoingThisLayout || _computingThisDryLayout ||
              (RenderObject.debugActiveLayout == parent && _size._canBeUsedByParent),
            'RenderBox.size accessed beyond the scope of resize, layout, or '
            'permitted parent access. RenderBox can always access its own size, '
            'otherwise, the only object that is allowed to read RenderBox.size '
            'is its parent, if they have said they will. It you hit this assert '
            'trying to access a child\'s size, pass "parentUsesSize: true" to '
            "that child's layout().",
          );
        }
        assert(_size == this._size);
      }
      return true;
    }());
    return _size!;
  }
  Size? _size;
  /// Setting the size, in debug mode, triggers some analysis of the render box,
  /// as implemented by [debugAssertDoesMeetConstraints], including calling the intrinsic
  /// sizing methods and checking that they meet certain invariants.
  @protected
  set size(Size value) {
    assert(!(debugDoingThisResize && debugDoingThisLayout));
    assert(sizedByParent || !debugDoingThisResize);
    assert(() {
      if ((sizedByParent && debugDoingThisResize) ||
          (!sizedByParent && debugDoingThisLayout))
        return true;
      assert(!debugDoingThisResize);
      final List<DiagnosticsNode> information = <DiagnosticsNode>[
        ErrorSummary('RenderBox size setter called incorrectly.'),
      ];
      if (debugDoingThisLayout) {
        assert(sizedByParent);
        information.add(ErrorDescription('It appears that the size setter was called from performLayout().'));
      } else {
        information.add(ErrorDescription(
          'The size setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).',
        ));
        if (owner != null && owner!.debugDoingLayout)
          information.add(ErrorDescription('Only the object itself can set its size. It is a contract violation for other objects to set it.'));
      }
      if (sizedByParent)
        information.add(ErrorDescription('Because this RenderBox has sizedByParent set to true, it must set its size in performResize().'));
      else
        information.add(ErrorDescription('Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().'));
      throw FlutterError.fromParts(information);
    }());
    assert(() {
      value = debugAdoptSize(value);
      return true;
    }());
    _size = value;
    assert(() {
      debugAssertDoesMeetConstraints();
      return true;
    }());
  }

  /// Claims ownership of the given [Size].
  ///
  /// In debug mode, the [RenderBox] class verifies that [Size] objects obtained
  /// from other [RenderBox] objects are only used according to the semantics of
  /// the [RenderBox] protocol, namely that a [Size] from a [RenderBox] can only
  /// be used by its parent, and then only if `parentUsesSize` was set.
  ///
  /// Sometimes, a [Size] that can validly be used ends up no longer being valid
  /// over time. The common example is a [Size] taken from a child that is later
  /// removed from the parent. In such cases, this method can be called to first
  /// check whether the size can legitimately be used, and if so, to then create
  /// a new [Size] that can be used going forward, regardless of what happens to
  /// the original owner.
  Size debugAdoptSize(Size value) {
    Size result = value;
    assert(() {
      if (value is _DebugSize) {
        if (value._owner != this) {
          if (value._owner.parent != this) {
            throw FlutterError.fromParts(<DiagnosticsNode>[
              ErrorSummary('The size property was assigned a size inappropriately.'),
              describeForError('The following render object'),
              value._owner.describeForError('...was assigned a size obtained from'),
              ErrorDescription(
                'However, this second render object is not, or is no longer, a '
                'child of the first, and it is therefore a violation of the '
                'RenderBox layout protocol to use that size in the layout of the '
                'first render object.',
              ),
              ErrorHint(
                'If the size was obtained at a time where it was valid to read '
                'the size (because the second render object above was a child '
                'of the first at the time), then it should be adopted using '
                'debugAdoptSize at that time.',
              ),
              ErrorHint(
                'If the size comes from a grandchild or a render object from an '
                'entirely different part of the render tree, then there is no '
                'way to be notified when the size changes and therefore attempts '
                'to read that size are almost certainly a source of bugs. A different '
                'approach should be used.',
              ),
            ]);
          }
          if (!value._canBeUsedByParent) {
            throw FlutterError.fromParts(<DiagnosticsNode>[
              ErrorSummary("A child's size was used without setting parentUsesSize."),
              describeForError('The following render object'),
              value._owner.describeForError('...was assigned a size obtained from its child'),
              ErrorDescription(
                'However, when the child was laid out, the parentUsesSize argument '
                'was not set or set to false. Subsequently this transpired to be '
                'inaccurate: the size was nonetheless used by the parent.\n'
                'It is important to tell the framework if the size will be used or not '
                'as several important performance optimizations can be made if the '
                'size will not be used by the parent.',
              ),
            ]);
          }
        }
      }
      result = _DebugSize(value, this, debugCanParentUseSize);
      return true;
    }());
    return result;
  }

  
  Rect get semanticBounds => Offset.zero & size;

  
  debugResetSize() {
    // updates the value of size._canBeUsedByParent if necessary
    size = size;
  }

  Map<TextBaseline, double?>? _cachedBaselines;
  static bool _debugDoingBaseline = false;
  static bool _debugSetDoingBaseline(bool value) {
    _debugDoingBaseline = value;
    return true;
  }

  /// Returns the distance from the y-coordinate of the position of the box to
  /// the y-coordinate of the first given baseline in the box's contents.
  ///
  /// Used by certain layout models to align adjacent boxes on a common
  /// baseline, regardless of padding, font size differences, etc. If there is
  /// no baseline, this function returns the distance from the y-coordinate of
  /// the position of the box to the y-coordinate of the bottom of the box
  /// (i.e., the height of the box) unless the caller passes true
  /// for `onlyReal`, in which case the function returns null.
  ///
  /// Only call this function after calling [layout] on this box. You
  /// are only allowed to call this from the parent of this box during
  /// that parent's [performLayout] or [paint] functions.
  ///
  /// When implementing a [RenderBox] subclass, to override the baseline
  /// computation, override [computeDistanceToActualBaseline].
  double? getDistanceToBaseline(TextBaseline baseline, { bool onlyReal = false }) {
    assert(!_debugDoingBaseline, 'Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.');
    assert(!debugNeedsLayout);
    assert(() {
      final RenderObject? parent = this.parent as RenderObject?;
      if (owner!.debugDoingLayout)
        return (RenderObject.debugActiveLayout == parent) && parent!.debugDoingThisLayout;
      if (owner!.debugDoingPaint)
        return ((RenderObject.debugActivePaint == parent) && parent!.debugDoingThisPaint) ||
               ((RenderObject.debugActivePaint == this) && debugDoingThisPaint);
      assert(parent == this.parent);
      return false;
    }());
    assert(_debugSetDoingBaseline(true));
    final double? result = getDistanceToActualBaseline(baseline);
    assert(_debugSetDoingBaseline(false));
    if (result == null && !onlyReal)
      return size.height;
    return result;
  }

  /// Calls [computeDistanceToActualBaseline] and caches the result.
  ///
  /// This function must only be called from [getDistanceToBaseline] and
  /// [computeDistanceToActualBaseline]. Do not call this function directly from
  /// outside those two methods.
  @protected
  @mustCallSuper
  double? getDistanceToActualBaseline(TextBaseline baseline) {
    assert(_debugDoingBaseline, 'Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.');
    _cachedBaselines ??= <TextBaseline, double?>{};
    _cachedBaselines!.putIfAbsent(baseline, () => computeDistanceToActualBaseline(baseline));
    return _cachedBaselines![baseline];
  }

  /// Returns the distance from the y-coordinate of the position of the box to
  /// the y-coordinate of the first given baseline in the box's contents, if
  /// any, or null otherwise.
  ///
  /// Do not call this function directly. If you need to know the baseline of a
  /// child from an invocation of [performLayout] or [paint], call
  /// [getDistanceToBaseline].
  ///
  /// Subclasses should override this method to supply the distances to their
  /// baselines. When implementing this method, there are generally three
  /// strategies:
  ///
  ///  * For classes that use the [ContainerRenderObjectMixin] child model,
  ///    consider mixing in the [RenderBoxContainerDefaultsMixin] class and
  ///    using
  ///    [RenderBoxContainerDefaultsMixin.defaultComputeDistanceToFirstActualBaseline].
  ///
  ///  * For classes that define a particular baseline themselves, return that
  ///    value directly.
  ///
  ///  * For classes that have a child to which they wish to defer the
  ///    computation, call [getDistanceToActualBaseline] on the child (not
  ///    [computeDistanceToActualBaseline], the internal implementation, and not
  ///    [getDistanceToBaseline], the public entry point for this API).
  @protected
  double? computeDistanceToActualBaseline(TextBaseline baseline) {
    assert(_debugDoingBaseline, 'Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.');
    return null;
  }

  /// The box constraints most recently received from the parent.
  
  BoxConstraints get constraints => super.constraints as BoxConstraints;

  
  debugAssertDoesMeetConstraints() {
    assert(constraints != null);
    assert(() {
      if (!hasSize) {
        final DiagnosticsNode contract;
        if (sizedByParent)
          contract = ErrorDescription('Because this RenderBox has sizedByParent set to true, it must set its size in performResize().');
        else
          contract = ErrorDescription('Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().');
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('RenderBox did not set its size during layout.'),
          contract,
          ErrorDescription('It appears that this did not happen; layout completed, but the size property is still null.'),
          DiagnosticsProperty<RenderBox>('The RenderBox in question is', this, style: DiagnosticsTreeStyle.errorProperty),
        ]);
      }
      // verify that the size is not infinite
      if (!_size!.isFinite) {
        final List<DiagnosticsNode> information = <DiagnosticsNode>[
          ErrorSummary('$runtimeType object was given an infinite size during layout.'),
          ErrorDescription(
            'This probably means that it is a render object that tries to be '
            'as big as possible, but it was put inside another render object '
            'that allows its children to pick their own size.',
          ),
        ];
        if (!constraints.hasBoundedWidth) {
          RenderBox node = this;
          while (!node.constraints.hasBoundedWidth && node.parent is RenderBox)
            node = node.parent! as RenderBox;

          information.add(node.describeForError('The nearest ancestor providing an unbounded width constraint is'));
        }
        if (!constraints.hasBoundedHeight) {
          RenderBox node = this;
          while (!node.constraints.hasBoundedHeight && node.parent is RenderBox)
            node = node.parent! as RenderBox;

          information.add(node.describeForError('The nearest ancestor providing an unbounded height constraint is'));
        }
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ...information,
          DiagnosticsProperty<BoxConstraints>('The constraints that applied to the $runtimeType were', constraints, style: DiagnosticsTreeStyle.errorProperty),
          DiagnosticsProperty<Size>('The exact size it was given was', _size, style: DiagnosticsTreeStyle.errorProperty),
          ErrorHint('See https://flutter.dev/docs/development/ui/layout/box-constraints for more information.'),
        ]);
      }
      // verify that the size is within the constraints
      if (!constraints.isSatisfiedBy(_size!)) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('$runtimeType does not meet its constraints.'),
          DiagnosticsProperty<BoxConstraints>('Constraints', constraints, style: DiagnosticsTreeStyle.errorProperty),
          DiagnosticsProperty<Size>('Size', _size, style: DiagnosticsTreeStyle.errorProperty),
          ErrorHint(
            'If you are not writing your own RenderBox subclass, then this is not '
            'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',
          ),
        ]);
      }
      if (debugCheckIntrinsicSizes) {
        // verify that the intrinsics are sane
        assert(!RenderObject.debugCheckingIntrinsics);
        RenderObject.debugCheckingIntrinsics = true;
        final List<DiagnosticsNode> failures = <DiagnosticsNode>[];

        double testIntrinsic(double Function(double extent) function, String name, double constraint) {
          final double result = function(constraint);
          if (result < 0) {
            failures.add(ErrorDescription(' * $name($constraint) returned a negative value: $result'));
          }
          if (!result.isFinite) {
            failures.add(ErrorDescription(' * $name($constraint) returned a non-finite value: $result'));
          }
          return result;
        }

        testIntrinsicsForValues(double Function(double extent) getMin, double Function(double extent) getMax, String name, double constraint) {
          final double min = testIntrinsic(getMin, 'getMinIntrinsic$name', constraint);
          final double max = testIntrinsic(getMax, 'getMaxIntrinsic$name', constraint);
          if (min > max) {
            failures.add(ErrorDescription(' * getMinIntrinsic$name($constraint) returned a larger value ($min) than getMaxIntrinsic$name($constraint) ($max)'));
          }
        }

        testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', double.infinity);
        testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', double.infinity);
        if (constraints.hasBoundedWidth)
          testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', constraints.maxHeight);
        if (constraints.hasBoundedHeight)
          testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', constraints.maxWidth);

        // TODO(ianh): Test that values are internally consistent in more ways than the above.

        RenderObject.debugCheckingIntrinsics = false;
        if (failures.isNotEmpty) {
          // TODO(jacobr): consider nesting the failures object so it is collapsible.
          throw FlutterError.fromParts(<DiagnosticsNode>[
            ErrorSummary('The intrinsic dimension methods of the $runtimeType class returned values that violate the intrinsic protocol contract.'),
            ErrorDescription('The following ${failures.length > 1 ? "failures" : "failure"} was detected:'), // should this be tagged as an error or not?
            ...failures,
            ErrorHint(
              'If you are not writing your own RenderBox subclass, then this is not\n'
              'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',
            ),
          ]);
        }

        // Checking that getDryLayout computes the same size.
        _dryLayoutCalculationValid = true;
        RenderObject.debugCheckingIntrinsics = true;
        final Size dryLayoutSize;
        try {
          dryLayoutSize = getDryLayout(constraints);
        } finally {
          RenderObject.debugCheckingIntrinsics = false;
        }
        if (_dryLayoutCalculationValid && dryLayoutSize != size) {
          throw FlutterError.fromParts(<DiagnosticsNode>[
            ErrorSummary('The size given to the ${objectRuntimeType(this, 'RenderBox')} class differs from the size computed by computeDryLayout.'),
            ErrorDescription(
              'The size computed in ${sizedByParent ? 'performResize' : 'performLayout'} '
              'is $size, which is different from $dryLayoutSize, which was computed by computeDryLayout.',
            ),
            ErrorDescription(
              'The constraints used were $constraints.',
            ),
            ErrorHint(
              'If you are not writing your own RenderBox subclass, then this is not\n'
              'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',
            ),
          ]);
        }
      }
      return true;
    }());
  }

  
  markNeedsLayout() {
    if ((_cachedBaselines != null && _cachedBaselines!.isNotEmpty) ||
        (_cachedIntrinsicDimensions != null && _cachedIntrinsicDimensions!.isNotEmpty) ||
        (_cachedDryLayoutSizes != null && _cachedDryLayoutSizes!.isNotEmpty)) {
      // If we have cached data, then someone must have used our data.
      // Since the parent will shortly be marked dirty, we can forget that they
      // used the baseline and/or intrinsic dimensions. If they use them again,
      // then we'll fill the cache again, and if we get dirty again, we'll
      // notify them again.
      _cachedBaselines?.clear();
      _cachedIntrinsicDimensions?.clear();
      _cachedDryLayoutSizes?.clear();
      if (parent is RenderObject) {
        markParentNeedsLayout();
        return;
      }
    }
    super.markNeedsLayout();
  }

  
  performResize() {
    // default behavior for subclasses that have sizedByParent = true
    size = computeDryLayout(constraints);
    assert(size.isFinite);
  }

  
  performLayout() {
    assert(() {
      if (!sizedByParent) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('$runtimeType did not implement performLayout().'),
          ErrorHint(
            'RenderBox subclasses need to either override performLayout() to '
            'set a size and lay out any children, or, set sizedByParent to true '
            'so that performResize() sizes the render object.',
          ),
        ]);
      }
      return true;
    }());
  }

  bool hitTest(BoxHitTestResult result, { required Offset position }) {
    assert(() {
      if (!hasSize) {
        if (debugNeedsLayout) {
          throw FlutterError.fromParts(<DiagnosticsNode>[
            ErrorSummary('Cannot hit test a render box that has never been laid out.'),
            describeForError('The hitTest() method was called on this RenderBox'),
            ErrorDescription(
              "Unfortunately, this object's geometry is not known at this time, "
              'probably because it has never been laid out. '
              'This means it cannot be accurately hit-tested.',
            ),
            ErrorHint(
              'If you are trying '
              'to perform a hit test during the layout phase itself, make sure '
              "you only hit test nodes that have completed layout (e.g. the node's "
              'children, after their layout() method has been called).',
            ),
          ]);
        }
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('Cannot hit test a render box with no size.'),
          describeForError('The hitTest() method was called on this RenderBox'),
          ErrorDescription(
            'Although this node is not marked as needing layout, '
            'its size is not set.',
          ),
          ErrorHint(
            'A RenderBox object must have an '
            'explicit size before it can be hit-tested. Make sure '
            'that the RenderBox in question sets its size during layout.',
          ),
        ]);
      }
      return true;
    }());
    if (_size!.contains(position)) {
      if (hitTestChildren(result, position: position) || hitTestSelf(position)) {
        result.add(BoxHitTestEntry(this, position));
        return true;
      }
    }
    return false;
  }

  bool hitTestSelf(Offset position) => false;

  bool hitTestChildren(BoxHitTestResult result, { required Offset position }) => false;

  applyPaintTransform(RenderObject child, Matrix4 transform) {
    assert(child != null);
    assert(child.parent == this);
    assert(() {
      if (child.parentData is! BoxParentData) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          ErrorSummary('$runtimeType does not implement applyPaintTransform.'),
          describeForError('The following $runtimeType object'),
          child.describeForError('...did not use a BoxParentData class for the parentData field of the following child'),
          ErrorDescription('The $runtimeType class inherits from RenderBox.'),
          ErrorHint(
            'The default applyPaintTransform implementation provided by RenderBox assumes that the '
            'children all use BoxParentData objects for their parentData field. '
            'Since $runtimeType does not in fact use that ParentData class for its children, it must '
            'provide an implementation of applyPaintTransform that supports the specific ParentData '
            'subclass used by its children (which apparently is ${child.parentData.runtimeType}).',
          ),
        ]);
      }
      return true;
    }());
    final BoxParentData childParentData = child.parentData! as BoxParentData;
    final Offset offset = childParentData.offset;
    transform.translate(offset.dx, offset.dy);
  }

  
  Offset globalToLocal(Offset point, { RenderObject? ancestor }) {
    final Matrix4 transform = getTransformTo(ancestor);
    final double det = transform.invert();
    if (det == 0.0)
      return Offset.zero;
    final Vector3 n = Vector3(0.0, 0.0, 1.0);
    final Vector3 i = transform.perspectiveTransform(Vector3(0.0, 0.0, 0.0));
    final Vector3 d = transform.perspectiveTransform(Vector3(0.0, 0.0, 1.0)) - i;
    final Vector3 s = transform.perspectiveTransform(Vector3(point.dx, point.dy, 0.0));
    final Vector3 p = s - d * (n.dot(s) / n.dot(d));
    return Offset(p.x, p.y);
  }

  Offset localToGlobal(Offset point, { RenderObject? ancestor }) {
    return MatrixUtils.transformPoint(getTransformTo(ancestor), point);
  }

  public get paintBounds () {
    return Offset.zero.and(size)
  }

  
  handleEvent(PointerEvent event, BoxHitTestEntry entry) {
    super.handleEvent(event, entry);
  }

  int _debugActivePointers = 0;

  bool debugHandleEvent(PointerEvent event, HitTestEntry entry) {
    assert(() {
      if (debugPaintPointersEnabled) {
        if (event is PointerDownEvent) {
          _debugActivePointers += 1;
        } else if (event is PointerUpEvent || event is PointerCancelEvent) {
          _debugActivePointers -= 1;
        }
        markNeedsPaint();
      }
      return true;
    }());
    return true;
  }

  
  debugPaint(PaintingContext context, Offset offset) {
    assert(() {
      if (debugPaintSizeEnabled)
        debugPaintSize(context, offset);
      if (debugPaintBaselinesEnabled)
        debugPaintBaselines(context, offset);
      if (debugPaintPointersEnabled)
        debugPaintPointers(context, offset);
      return true;
    }());
  }

  /// In debug mode, paints a border around this render box.
  ///
  /// Called for every [RenderBox] when [debugPaintSizeEnabled] is true.
  @protected
  debugPaintSize(PaintingContext context, Offset offset) {
    assert(() {
      final Paint paint = Paint()
       ..style = PaintingStyle.stroke
       ..strokeWidth = 1.0
       ..color = const Color(0xFF00FFFF);
      context.canvas.drawRect((offset & size).deflate(0.5), paint);
      return true;
    }());
  }

  /// In debug mode, paints a line for each baseline.
  ///
  /// Called for every [RenderBox] when [debugPaintBaselinesEnabled] is true.
  @protected
  debugPaintBaselines(PaintingContext context, Offset offset) {
    assert(() {
      final Paint paint = Paint()
       ..style = PaintingStyle.stroke
       ..strokeWidth = 0.25;
      Path path;
      // ideographic baseline
      final double? baselineI = getDistanceToBaseline(TextBaseline.ideographic, onlyReal: true);
      if (baselineI != null) {
        paint.color = const Color(0xFFFFD000);
        path = Path();
        path.moveTo(offset.dx, offset.dy + baselineI);
        path.lineTo(offset.dx + size.width, offset.dy + baselineI);
        context.canvas.drawPath(path, paint);
      }
      // alphabetic baseline
      final double? baselineA = getDistanceToBaseline(TextBaseline.alphabetic, onlyReal: true);
      if (baselineA != null) {
        paint.color = const Color(0xFF00FF00);
        path = Path();
        path.moveTo(offset.dx, offset.dy + baselineA);
        path.lineTo(offset.dx + size.width, offset.dy + baselineA);
        context.canvas.drawPath(path, paint);
      }
      return true;
    }());
  }
}


export class BoxConstraints extends Constraints {
  /// Creates box constraints with the given constraints.
  static {
    this.minWidth = 0.0,
    this.maxWidth = double.infinity,
    this.minHeight = 0.0,
    this.maxHeight = double.infinity,
  }) : assert(minWidth != null),
       assert(maxWidth != null),
       assert(minHeight != null),
       assert(maxHeight != null);

  BoxConstraints.tight(Size size)
    : minWidth = size.width,
      maxWidth = size.width,
      minHeight = size.height,
      maxHeight = size.height;

  /// Creates box constraints that require the given width or height.
  ///
  /// See also:
  ///
  ///  * [new BoxConstraints.tightForFinite], which is similar but instead of
  ///    being tight if the value is non-null, is tight if the value is not
  ///    infinite.
  static tightFor({
    double? width,
    double? height,
  }) : minWidth = width ?? 0.0,
       maxWidth = width ?? double.infinity,
       minHeight = height ?? 0.0,
       maxHeight = height ?? double.infinity;

  static tightForFinite(
    width: number = Number.POSITIVE_INFINITY,
    height: number = Number.POSITIVE_INFINITY,
  ) {
    : minWidth = width != double.infinity ? width : 0.0,
       maxWidth = width != double.infinity ? width : double.infinity,
       minHeight = height != double.infinity ? height : 0.0,
       maxHeight = height != double.infinity ? height : double.infinity;
  }

  BoxConstraints.loose(Size size)
    : minWidth = 0.0,
      maxWidth = size.width,
      minHeight = 0.0,
      maxHeight = size.height;

  static expand({
    double? width,
    double? height,
  }) : minWidth = width ?? double.infinity,
       maxWidth = width ?? double.infinity,
       minHeight = height ?? double.infinity,
       maxHeight = height ?? double.infinity;

  public minWidth: number
  public maxWidth: number
  public minHeight: number
  public maxHeight: number

  static copyWith(
    minWidth: number | null = null,
    maxWidth: number | null = null,
    minHeight: number | null = null,
    maxHeight: number | null = null,
  ) {
    return BoxConstraints(
      minWidth ?? this.minWidth,
      maxWidth ?? this.maxWidth,
      minHeight ?? this.minHeight,
      maxHeight ?? this.maxHeight,
    );
  }

  static deflate (edges: EdgeInsets) {
    assert(edges != null);
    assert(debugAssertIsValid());
    final double horizontal = edges.horizontal;
    final double vertical = edges.vertical;
    final double deflatedMinWidth = math.max(0.0, minWidth - horizontal);
    final double deflatedMinHeight = math.max(0.0, minHeight - vertical);
    return BoxConstraints(
      minWidth: deflatedMinWidth,
      maxWidth: math.max(deflatedMinWidth, maxWidth - horizontal),
      minHeight: deflatedMinHeight,
      maxHeight: math.max(deflatedMinHeight, maxHeight - vertical),
    );
  }

  /// Returns new box constraints that remove the minimum width and height requirements.
  BoxConstraints loosen() {
    assert(debugAssertIsValid());
    return BoxConstraints(
      maxWidth: maxWidth,
      maxHeight: maxHeight,
    );
  }

  /// Returns new box constraints that respect the given constraints while being
  /// as close as possible to the original constraints.
  BoxConstraints enforce(BoxConstraints constraints) {
    return BoxConstraints(
      minWidth: minWidth.clamp(constraints.minWidth, constraints.maxWidth),
      maxWidth: maxWidth.clamp(constraints.minWidth, constraints.maxWidth),
      minHeight: minHeight.clamp(constraints.minHeight, constraints.maxHeight),
      maxHeight: maxHeight.clamp(constraints.minHeight, constraints.maxHeight),
    );
  }

  /// Returns new box constraints with a tight width and/or height as close to
  /// the given width and height as possible while still respecting the original
  /// box constraints.
  BoxConstraints tighten({ double? width, double? height }) {
    return BoxConstraints(
      minWidth: width == null ? minWidth : width.clamp(minWidth, maxWidth),
      maxWidth: width == null ? maxWidth : width.clamp(minWidth, maxWidth),
      minHeight: height == null ? minHeight : height.clamp(minHeight, maxHeight),
      maxHeight: height == null ? maxHeight : height.clamp(minHeight, maxHeight),
    );
  }

  /// A box constraints with the width and height constraints flipped.
  BoxConstraints get flipped {
    return BoxConstraints(
      minWidth: minHeight,
      maxWidth: maxHeight,
      minHeight: minWidth,
      maxHeight: maxWidth,
    );
  }

  /// Returns box constraints with the same width constraints but with
  /// unconstrained height.
  BoxConstraints widthConstraints() => BoxConstraints(minWidth: minWidth, maxWidth: maxWidth);

  /// Returns box constraints with the same height constraints but with
  /// unconstrained width.
  BoxConstraints heightConstraints() => BoxConstraints(minHeight: minHeight, maxHeight: maxHeight);

  /// Returns the width that both satisfies the constraints and is as close as
  /// possible to the given width.
  double constrainWidth([ double width = double.infinity ]) {
    assert(debugAssertIsValid());
    return width.clamp(minWidth, maxWidth);
  }

  /// Returns the height that both satisfies the constraints and is as close as
  /// possible to the given height.
  double constrainHeight([ double height = double.infinity ]) {
    assert(debugAssertIsValid());
    return height.clamp(minHeight, maxHeight);
  }

  Size _debugPropagateDebugSize(Size size, Size result) {
    assert(() {
      if (size is _DebugSize)
        result = _DebugSize(result, size._owner, size._canBeUsedByParent);
      return true;
    }());
    return result;
  }

  /// Returns the size that both satisfies the constraints and is as close as
  /// possible to the given size.
  ///
  /// See also:
  ///
  ///  * [constrainDimensions], which applies the same algorithm to
  ///    separately provided widths and heights.
  Size constrain(Size size) {
    Size result = Size(constrainWidth(size.width), constrainHeight(size.height));
    assert(() {
      result = _debugPropagateDebugSize(size, result);
      return true;
    }());
    return result;
  }

  /// Returns the size that both satisfies the constraints and is as close as
  /// possible to the given width and height.
  ///
  /// When you already have a [Size], prefer [constrain], which applies the same
  /// algorithm to a [Size] directly.
  Size constrainDimensions(double width, double height) {
    return Size(constrainWidth(width), constrainHeight(height));
  }

  /// Returns a size that attempts to meet the following conditions, in order:
  ///
  ///  * The size must satisfy these constraints.
  ///  * The aspect ratio of the returned size matches the aspect ratio of the
  ///    given size.
  ///  * The returned size as big as possible while still being equal to or
  ///    smaller than the given size.
  Size constrainSizeAndAttemptToPreserveAspectRatio(Size size) {
    if (isTight) {
      Size result = smallest;
      assert(() {
        result = _debugPropagateDebugSize(size, result);
        return true;
      }());
      return result;
    }

    double width = size.width;
    double height = size.height;
    assert(width > 0.0);
    assert(height > 0.0);
    final double aspectRatio = width / height;

    if (width > maxWidth) {
      width = maxWidth;
      height = width / aspectRatio;
    }

    if (height > maxHeight) {
      height = maxHeight;
      width = height * aspectRatio;
    }

    if (width < minWidth) {
      width = minWidth;
      height = width / aspectRatio;
    }

    if (height < minHeight) {
      height = minHeight;
      width = height * aspectRatio;
    }

    Size result = Size(constrainWidth(width), constrainHeight(height));
    assert(() {
      result = _debugPropagateDebugSize(size, result);
      return true;
    }());
    return result;
  }

  /// The biggest size that satisfies the constraints.
  Size get biggest => Size(constrainWidth(), constrainHeight());

  /// The smallest size that satisfies the constraints.
  Size get smallest => Size(constrainWidth(0.0), constrainHeight(0.0));

  /// Whether there is exactly one width value that satisfies the constraints.
  bool get hasTightWidth => minWidth >= maxWidth;

  /// Whether there is exactly one height value that satisfies the constraints.
  bool get hasTightHeight => minHeight >= maxHeight;

  /// Whether there is exactly one size that satisfies the constraints.
  
  bool get isTight => hasTightWidth && hasTightHeight;

  /// Whether there is an upper bound on the maximum width.
  ///
  /// See also:
  ///
  ///  * [hasBoundedHeight], the equivalent for the vertical axis.
  ///  * [hasInfiniteWidth], which describes whether the minimum width
  ///    constraint is infinite.
  bool get hasBoundedWidth => maxWidth < double.infinity;

  /// Whether there is an upper bound on the maximum height.
  ///
  /// See also:
  ///
  ///  * [hasBoundedWidth], the equivalent for the horizontal axis.
  ///  * [hasInfiniteHeight], which describes whether the minimum height
  ///    constraint is infinite.
  bool get hasBoundedHeight => maxHeight < double.infinity;

  /// Whether the width constraint is infinite.
  ///
  /// Such a constraint is used to indicate that a box should grow as large as
  /// some other constraint (in this case, horizontally). If constraints are
  /// infinite, then they must have other (non-infinite) constraints [enforce]d
  /// upon them, or must be [tighten]ed, before they can be used to derive a
  /// [Size] for a [RenderBox.size].
  ///
  /// See also:
  ///
  ///  * [hasInfiniteHeight], the equivalent for the vertical axis.
  ///  * [hasBoundedWidth], which describes whether the maximum width
  ///    constraint is finite.
  bool get hasInfiniteWidth => minWidth >= double.infinity;

  /// Whether the height constraint is infinite.
  ///
  /// Such a constraint is used to indicate that a box should grow as large as
  /// some other constraint (in this case, vertically). If constraints are
  /// infinite, then they must have other (non-infinite) constraints [enforce]d
  /// upon them, or must be [tighten]ed, before they can be used to derive a
  /// [Size] for a [RenderBox.size].
  ///
  /// See also:
  ///
  ///  * [hasInfiniteWidth], the equivalent for the horizontal axis.
  ///  * [hasBoundedHeight], which describes whether the maximum height
  ///    constraint is finite.
  bool get hasInfiniteHeight => minHeight >= double.infinity;

  /// Whether the given size satisfies the constraints.
  bool isSatisfiedBy(Size size) {
    assert(debugAssertIsValid());
    return (minWidth <= size.width) && (size.width <= maxWidth) &&
           (minHeight <= size.height) && (size.height <= maxHeight);
  }

  /// Scales each constraint parameter by the given factor.
  BoxConstraints operator*(double factor) {
    return BoxConstraints(
      minWidth: minWidth * factor,
      maxWidth: maxWidth * factor,
      minHeight: minHeight * factor,
      maxHeight: maxHeight * factor,
    );
  }

  /// Scales each constraint parameter by the inverse of the given factor.
  BoxConstraints operator/(double factor) {
    return BoxConstraints(
      minWidth: minWidth / factor,
      maxWidth: maxWidth / factor,
      minHeight: minHeight / factor,
      maxHeight: maxHeight / factor,
    );
  }

  /// Scales each constraint parameter by the inverse of the given factor, rounded to the nearest integer.
  BoxConstraints operator~/(double factor) {
    return BoxConstraints(
      minWidth: (minWidth ~/ factor).toDouble(),
      maxWidth: (maxWidth ~/ factor).toDouble(),
      minHeight: (minHeight ~/ factor).toDouble(),
      maxHeight: (maxHeight ~/ factor).toDouble(),
    );
  }

  /// Computes the remainder of each constraint parameter by the given value.
  BoxConstraints operator%(double value) {
    return BoxConstraints(
      minWidth: minWidth % value,
      maxWidth: maxWidth % value,
      minHeight: minHeight % value,
      maxHeight: maxHeight % value,
    );
  }

  /// Linearly interpolate between two BoxConstraints.
  ///
  /// If either is null, this function interpolates from a [BoxConstraints]
  /// object whose fields are all set to 0.0.
  ///
  /// {@macro dart.ui.shadow.lerp}
  static BoxConstraints? lerp(BoxConstraints? a, BoxConstraints? b, double t) {
    assert(t != null);
    if (a == null && b == null)
      return null;
    if (a == null)
      return b! * t;
    if (b == null)
      return a * (1.0 - t);
    assert(a.debugAssertIsValid());
    assert(b.debugAssertIsValid());
    assert((a.minWidth.isFinite && b.minWidth.isFinite) || (a.minWidth == double.infinity && b.minWidth == double.infinity), 'Cannot interpolate between finite constraints and unbounded constraints.');
    assert((a.maxWidth.isFinite && b.maxWidth.isFinite) || (a.maxWidth == double.infinity && b.maxWidth == double.infinity), 'Cannot interpolate between finite constraints and unbounded constraints.');
    assert((a.minHeight.isFinite && b.minHeight.isFinite) || (a.minHeight == double.infinity && b.minHeight == double.infinity), 'Cannot interpolate between finite constraints and unbounded constraints.');
    assert((a.maxHeight.isFinite && b.maxHeight.isFinite) || (a.maxHeight == double.infinity && b.maxHeight == double.infinity), 'Cannot interpolate between finite constraints and unbounded constraints.');
    return BoxConstraints(
      minWidth: a.minWidth.isFinite ? ui.lerpDouble(a.minWidth, b.minWidth, t)! : double.infinity,
      maxWidth: a.maxWidth.isFinite ? ui.lerpDouble(a.maxWidth, b.maxWidth, t)! : double.infinity,
      minHeight: a.minHeight.isFinite ? ui.lerpDouble(a.minHeight, b.minHeight, t)! : double.infinity,
      maxHeight: a.maxHeight.isFinite ? ui.lerpDouble(a.maxHeight, b.maxHeight, t)! : double.infinity,
    );
  }

  /// Returns whether the object's constraints are normalized.
  /// Constraints are normalized if the minimums are less than or
  /// equal to the corresponding maximums.
  ///
  /// For example, a BoxConstraints object with a minWidth of 100.0
  /// and a maxWidth of 90.0 is not normalized.
  ///
  /// Most of the APIs on BoxConstraints expect the constraints to be
  /// normalized and have undefined behavior when they are not. In
  /// debug mode, many of these APIs will assert if the constraints
  /// are not normalized.
  
  bool get isNormalized {
    return minWidth >= 0.0 &&
           minWidth <= maxWidth &&
           minHeight >= 0.0 &&
           minHeight <= maxHeight;
  }

  
  bool debugAssertIsValid({
    bool isAppliedConstraint = false,
    InformationCollector? informationCollector,
  }) {
    assert(() {
      void throwError(DiagnosticsNode message) {
        throw FlutterError.fromParts(<DiagnosticsNode>[
          message,
          if (informationCollector != null) ...informationCollector(),
          DiagnosticsProperty<BoxConstraints>('The offending constraints were', this, style: DiagnosticsTreeStyle.errorProperty),
        ]);
      }
      if (minWidth.isNaN || maxWidth.isNaN || minHeight.isNaN || maxHeight.isNaN) {
        final List<String> affectedFieldsList = <String>[
          if (minWidth.isNaN) 'minWidth',
          if (maxWidth.isNaN) 'maxWidth',
          if (minHeight.isNaN) 'minHeight',
          if (maxHeight.isNaN) 'maxHeight',
        ];
        assert(affectedFieldsList.isNotEmpty);
        if (affectedFieldsList.length > 1)
          affectedFieldsList.add('and ${affectedFieldsList.removeLast()}');
        String whichFields = '';
        if (affectedFieldsList.length > 2) {
          whichFields = affectedFieldsList.join(', ');
        } else if (affectedFieldsList.length == 2) {
          whichFields = affectedFieldsList.join(' ');
        } else {
          whichFields = affectedFieldsList.single;
        }
        throwError(ErrorSummary('BoxConstraints has ${affectedFieldsList.length == 1 ? 'a NaN value' : 'NaN values' } in $whichFields.'));
      }
      if (minWidth < 0.0 && minHeight < 0.0)
        throwError(ErrorSummary('BoxConstraints has both a negative minimum width and a negative minimum height.'));
      if (minWidth < 0.0)
        throwError(ErrorSummary('BoxConstraints has a negative minimum width.'));
      if (minHeight < 0.0)
        throwError(ErrorSummary('BoxConstraints has a negative minimum height.'));
      if (maxWidth < minWidth && maxHeight < minHeight)
        throwError(ErrorSummary('BoxConstraints has both width and height constraints non-normalized.'));
      if (maxWidth < minWidth)
        throwError(ErrorSummary('BoxConstraints has non-normalized width constraints.'));
      if (maxHeight < minHeight)
        throwError(ErrorSummary('BoxConstraints has non-normalized height constraints.'));
      if (isAppliedConstraint) {
        if (minWidth.isInfinite && minHeight.isInfinite)
          throwError(ErrorSummary('BoxConstraints forces an infinite width and infinite height.'));
        if (minWidth.isInfinite)
          throwError(ErrorSummary('BoxConstraints forces an infinite width.'));
        if (minHeight.isInfinite)
          throwError(ErrorSummary('BoxConstraints forces an infinite height.'));
      }
      assert(isNormalized);
      return true;
    }());
    return isNormalized;
  }

  /// Returns a box constraints that [isNormalized].
  ///
  /// The returned [maxWidth] is at least as large as the [minWidth]. Similarly,
  /// the returned [maxHeight] is at least as large as the [minHeight].
  BoxConstraints normalize() {
    if (isNormalized)
      return this;
    final double minWidth = this.minWidth >= 0.0 ? this.minWidth : 0.0;
    final double minHeight = this.minHeight >= 0.0 ? this.minHeight : 0.0;
    return BoxConstraints(
      minWidth: minWidth,
      maxWidth: minWidth > maxWidth ? minWidth : maxWidth,
      minHeight: minHeight,
      maxHeight: minHeight > maxHeight ? minHeight : maxHeight,
    );
  }

  
  bool operator ==(Object other) {
    assert(debugAssertIsValid());
    if (identical(this, other))
      return true;
    if (other.runtimeType != runtimeType)
      return false;
    assert(other is BoxConstraints && other.debugAssertIsValid());
    return other is BoxConstraints
        && other.minWidth == minWidth
        && other.maxWidth == maxWidth
        && other.minHeight == minHeight
        && other.maxHeight == maxHeight;
  }
  
  String toString() {
    final String annotation = isNormalized ? '' : '; NOT NORMALIZED';
    if (minWidth == double.infinity && minHeight == double.infinity)
      return 'BoxConstraints(biggest$annotation)';
    if (minWidth == 0 && maxWidth == double.infinity &&
        minHeight == 0 && maxHeight == double.infinity)
      return 'BoxConstraints(unconstrained$annotation)';
    String describe(double min, double max, String dim) {
      if (min == max)
        return '$dim=${min.toStringAsFixed(1)}';
      return '${min.toStringAsFixed(1)}<=$dim<=${max.toStringAsFixed(1)}';
    }
    final String width = describe(minWidth, maxWidth, 'w');
    final String height = describe(minHeight, maxHeight, 'h');
    return 'BoxConstraints($width, $height$annotation)';
  }
}

