import { clamp, lerpDouble } from '@helper'
import invariant from 'ts-invariant'
import { RenderObject } from './RenderObject'

export enum IntrinsicDimension { 
  minWidth, 
  maxWidth, 
  minHeight, 
  maxHeight 
}

export class IntrinsicDimensionsCacheMap extends Map<IntrinsicDimensionsCacheEntry, number> {
  has (key: IntrinsicDimensionsCacheEntry) {
    for (const [k] of this) {
      if (k.eq(key)) {
        return true
      }
    }

    return false
  }

  get (key: IntrinsicDimensionsCacheEntry): number {
    for (const [k, v] of this) {
      if (k.eq(key)) {
        return v
      }
    }
  }

  putIfAbsent (
    key: IntrinsicDimensionsCacheEntry, 
    v: number
  ) {
    if (!this.has(key)) {
      this.set(key, v)
    }

    return v
  }
}

export class IntrinsicDimensionsCacheEntry {
  public dimension: IntrinsicDimension
  public argument: number


  constructor (
    dimension: IntrinsicDimension,
    argument: number
  ) {
    this.dimension = dimension
    this.argument = argument
  }

  
  eq (other: IntrinsicDimensionsCacheEntry) {
    return (
      other instanceof IntrinsicDimensionsCacheEntry &&
      other.dimension == dimension &&
      other.argument == argument
    )
  }
}


export abstract class RenderBox extends RenderObject {
  static debugIntrinsicsDepth = 0

  public cachedIntrinsicDimensions: Map<IntrinsicDimensionsCacheEntry, number> | null = null

  setupParentData (child: RenderObject) {
    if (!(child.parentData instanceof BoxParentData))
      child.parentData = BoxParentData();
  }  

  computeIntrinsicDimension (
    dimension: IntrinsicDimension, 
    argument: number, 
    computer: { (argument: number): number }
  ) {
    let shouldCache = true
    
    if (shouldCache) {
      this.cachedIntrinsicDimensions ??= new IntrinsicDimensionsCacheMap()
      const result = this.cachedIntrinsicDimensions.putIfAbsent(new IntrinsicDimensionsCacheEntry(dimension, argument), () => computer(argument))

      // @TODO-DEBUG
      return result
    }

    return computer(argument)
  }

  getMinIntrinsicWidth (height: number) {
    return this.computeIntrinsicDimension(
      IntrinsicDimension.minWidth, 
      this.height, 
      this.computeMinIntrinsicWidth
    )
  }

  
  computeMinIntrinsicWidth (height: number) {
    return 0.0
  }

  getMaxIntrinsicWidth (height: number) {
    
    return this.computeIntrinsicDimension(
      IntrinsicDimension.maxWidth, 
      height, 
      this.computeMaxIntrinsicWidth
    )
  }

  computeMaxIntrinsicWidth (height: number): number {
    return 0.0
  }

  getMinIntrinsicHeight (width: number): number {
    return this.computeIntrinsicDimension(
      IntrinsicDimension.minHeight, 
      width, 
      this.computeMinIntrinsicHeight
    )
  }

  
  computeMinIntrinsicHeight (width: number) {
    return 0.0
  }

  getMaxIntrinsicHeight (width: number) {
    return this.computeIntrinsicDimension(
      IntrinsicDimension.maxHeight, 
      width, 
      this.computeMaxIntrinsicHeight
    )
  }

  computeMaxIntrinsicHeight (width: number) {
    return 0.0
  }

  Map<BoxConstraints, Size>? cachedDryLayoutSizes
  bool _computingThisDryLayout = false;

  getDryLayout (constraints: BoxConstraints ): Size {
    let shouldCache: boolean = true
    
    if (shouldCache) {
      Map<String, String> debugTimelineArguments = timelineArgumentsIndicatingLandmarkEvent;
      
      
      this.cachedDryLayoutSizes ??= new Map<BoxConstraints, Size>()
      const result = this.cachedDryLayoutSizes!.putIfAbsent(constraints, () => _computeDryLayout(constraints));
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

  computeDryLayout (constraints: BoxConstraints) {
    
    final Size result = computeDryLayout(constraints)
    assert(() {
      assert(_computingThisDryLayout);
      _computingThisDryLayout = false;
      return true;
    }());
    return result;
  }

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
  bool get hasSize => _size != null;
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

  public cachedBaselines: Map<TextBaseline, number | null> | null
  static bool _debugDoingBaseline = false
  static bool _debugSetDoingBaseline(bool value) {
    _debugDoingBaseline = value;
    return true;
  }

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

        testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', Number.POSITIVE_INFINITY);
        testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', Number.POSITIVE_INFINITY);
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
  static lerp (
    a: BoxConstraints | null = null, 
    b: BoxConstraints | null = null, 
    t: number
  ): BoxConstraints | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b! * t
    }

    if (b === null) {
      return a * (1.0 - t)
    }
    
    assert((Number.isFinite(a.minWidth) && Number.isFinite(b.minWidth)) || (a.minWidth === Number.POSITIVE_INFINITY && b.minWidth === Number.POSITIVE_INFINITY), 'Cannot interpolate between finite constraints and unbounded constraints.')
    assert((Number.isFinite(a.maxWidth) && Number.isFinite(b.maxWidth)) || (a.maxWidth === Number.POSITIVE_INFINITY && b.maxWidth === Number.POSITIVE_INFINITY), 'Cannot interpolate between finite constraints and unbounded constraints.')
    assert((Number.isFinite(a.minHeight) && Number.isFinite(b.minHeight)) || (a.minHeight === Number.POSITIVE_INFINITY && b.minHeight === Number.POSITIVE_INFINITY), 'Cannot interpolate between finite constraints and unbounded constraints.')
    assert((Number.isFinite(a.maxHeight) && Number.isFinite(b.maxHeight)) || (a.maxHeight === Number.POSITIVE_INFINITY && b.maxHeight === Number.POSITIVE_INFINITY), 'Cannot interpolate between finite constraints and unbounded constraints.')
    
    return new BoxConstraints(
      Number.isFinite(a.minWidth) ? lerpDouble(a.minWidth, b.minWidth, t)! : Number.POSITIVE_INFINITY,
      Number.isFinite(a.maxWidth) ? lerpDouble(a.maxWidth, b.maxWidth, t)! : Number.POSITIVE_INFINITY,
      Number.isFinite(a.minHeight) ? lerpDouble(a.minHeight, b.minHeight, t)! : Number.POSITIVE_INFINITY,
      Number.isFinite(a.maxHeight) ? lerpDouble(a.maxHeight, b.maxHeight, t)! : Number.POSITIVE_INFINITY,
    );
  }

  static tight (size: Size) {
    return new BoxConstraints(
      size.width,
      size.width,
      size.height,
      size.height
    )
  }

  static tightFor(
    width: number | null = null,
    height: number | null = null,
  ) {
    return new BoxConstraints(
      width ?? 0.0,
      width ?? Number.POSITIVE_INFINITY,
      height ?? 0.0,
      height ?? Number.POSITIVE_INFINITY
    )
  }

  static tightForFinite(
    width: number = Number.POSITIVE_INFINITY,
    height: number = Number.POSITIVE_INFINITY,
  ) {
    return new BoxConstraints(
      width != Number.POSITIVE_INFINITY ? width : 0.0,
      width != Number.POSITIVE_INFINITY ? width : Number.POSITIVE_INFINITY,
      height != Number.POSITIVE_INFINITY ? height : 0.0,
      height != Number.POSITIVE_INFINITY ? height : Number.POSITIVE_INFINITY
    )
  }

  static loose (size: Size) {
    return new BoxConstraints(
      0.0,
      size.width,
      0.0,
      size.height
    )
  }
    
  static expand(
    width: number | null = null,
    height: number | null = null,
  ) {
    return new BoxConstraints(
      width ?? Number.POSITIVE_INFINITY,
      width ?? Number.POSITIVE_INFINITY,
      height ?? Number.POSITIVE_INFINITY,
      height ?? Number.POSITIVE_INFINITY,
    )
  }

  public minWidth: number
  public maxWidth: number
  public minHeight: number
  public maxHeight: number

  get flipped () {
    return new BoxConstraints(
      this.minHeight,
      this.maxHeight,
      this.minWidth,
      this.maxWidth,
    )
  }

  get biggest () {
    return new Size(
      this.constrainWidth(), 
      this.constrainHeight()
    )
  }

  get smallest () {
    return new Size(
      this.constrainWidth(0.0), 
      this.constrainHeight(0.0)
    )
  } 

  get hasTightWidth () {
    return this.minWidth >= this.maxWidth
  } 
  get hasTightHeight () {
    return this.minHeight >= this.maxHeight
  } 
  get isTight () {
    return this.hasTightWidth && this.hasTightHeight
  } 
  get hasBoundedWidth () {
    return this.maxWidth < Number.POSITIVE_INFINITY
  } 
  get hasBoundedHeight () {
    return this.maxHeight < Number.POSITIVE_INFINITY
  } 
  get hasInfiniteWidth () {
    return this.minWidth >= Number.POSITIVE_INFINITY
  } 
  get hasInfiniteHeight () {
    return this.minHeight >= Number.POSITIVE_INFINITY
  } 

  constructor (
    minWidth: number = 0.0,
    maxWidth: number = Number.infinity,
    minHeight: number = 0.0,
    maxHeight: number = Number.infinity,
  ) {
    invariant(minWidth !== null)
    invariant(maxWidth !== null)
    invariant(minHeight !== null)
    invariant(maxHeight !== null)

    this.minWidth = minWidth
    this.maxWidth = maxWidth
    this.minHeight = minHeight
    this.maxHeight = maxHeight
  }

  tighten(
    width: number | null = null, 
    height: number | null = null 
  ): BoxConstraints {
    return new BoxConstraints(
      width === null ? minWidth : clamp(width, minWidth, maxWidth),
      width === null ? maxWidth : clamp(width, minWidth, maxWidth),
      height === null ? minHeight : clamp(height, minHeight, maxHeight),
      height === null ? maxHeight : clamp(height, minHeight, maxHeight),
    )
  }


  copyWith(
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

  deflate (edges: EdgeInsets) {
    invariant(edges !== null)
    const horizontal: number = edges.horizontal
    const vertical: number = edges.vertical
    const deflatedMinWidth: number = Math.max(0.0, minWidth - horizontal)
    const deflatedMinHeight: number = Math.max(0.0, minHeight - vertical)

    return BoxConstraints(
      deflatedMinWidth,
      Math.max(deflatedMinWidth, maxWidth - horizontal),
      deflatedMinHeight,
      Math.max(deflatedMinHeight, maxHeight - vertical),
    )
  }

  loosen (): BoxConstraints {
    assert(debugAssertIsValid());
    return BoxConstraints(
      maxWidth,
      maxHeight,
    )
  }

  enforce (constraints: BoxConstraints): BoxConstraints {
    return BoxConstraints(
      clamp(this.minWidth, constraints.minWidth, constraints.maxWidth),
      clamp(this.maxWidth, constraints.minWidth, constraints.maxWidth),
      clamp(this.minHeight, constraints.minHeight, constraints.maxHeight),
      clamp(this.maxHeight, constraints.minHeight, constraints.maxHeight),
    )
  }
  
  widthConstraints (): BoxConstraints  {
    return new BoxConstraints(
      this.minWidth, 
      this.maxWidth
    )
  }

  heightConstraints (): BoxConstraints {
    return new BoxConstraints(
      this.minHeight, 
      this.maxHeight
    )
  }

  constrainWidth (width: number = Number.POSITIVE_INFINITY) {
    return clamp(width, minWidth, maxWidth)
  }

  constrainHeight (height = Number.POSITIVE_INFINITY) {
    return height.clamp(minHeight, maxHeight);
  }

  constrain (size: Size): Size {
    const result: Size = new Size(
      this.constrainWidth(size.width), 
      this.constrainHeight(size.height)
    )

    return result
  }

  constrainDimensions (
    width: number, 
    height: number
  ): Size {
    return new Size(
      this.constrainWidth(width), 
      this.constrainHeight(height)
    )
  }

  constrainSizeAndAttemptToPreserveAspectRatio (size: Size) {
    if (this.isTight) {
      const result = this.smallest
      return result
    }

    const width = size.width
    const height = size.height
    assert(width > 0.0)
    assert(height > 0.0)
    const aspectRatio = width / height;

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

    const result = new Size(
      this.constrainWidth(width), 
      this.constrainHeight(height)
    )
    
    return result;
  }

  isSatisfiedBy (size: Size) {
    return (
      this.minWidth <= size.width && 
      size.width <= this.maxWidth &&
      this.minHeight <= size.height && 
      size.height <= this.maxHeight
    )
  }

  multiply (factor: number) {
    return new BoxConstraints(
     this.minWidth * factor,
     this.maxWidth * factor,
     this.minHeight * factor,
     this.maxHeight * factor,
    )
  }

  division (factor: number) {
    return new BoxConstraints(
      this.minWidth / factor,
      this.maxWidth / factor,
      this.minHeight / factor,
      this.maxHeight / factor,
    )
  }

  module (value: number) {
    return new BoxConstraints(
      this.minWidth % value,
      this.maxWidth % value,
      this.minHeight % value,
      this.maxHeight % value,
    )
  }

  get isNormalized () {
    return (
      this.minWidth >= 0.0 &&
      this.minWidth <= this.maxWidth &&
      this.minHeight >= 0.0 &&
      this.minHeight <= this.maxHeight
    )
  }

  normalize (): BoxConstraints  {
    if (this.isNormalized) {
      return this;
    }
    const minWidth = this.minWidth >= 0.0 ? this.minWidth : 0.0
    const minHeight = this.minHeight >= 0.0 ? this.minHeight : 0.0
    return new BoxConstraints(
      minWidth,
      minWidth > this.maxWidth ? minWidth : this.maxWidth,
      minHeight,
      minHeight > this.maxHeight ? minHeight : this.maxHeight,
    );
  }

  
  eq (other: BoxConstraints) {
    if (this === other) {
      return true
    }
    
    return (
      other instanceof BoxConstraints &&
      other.minWidth === this.minWidth &&
      other.maxWidth === this.maxWidth &&
      other.minHeight === this.minHeight &&
      other.maxHeight === this.maxHeight
    )
  }
  
  toString () {
    return ``
  }
}

