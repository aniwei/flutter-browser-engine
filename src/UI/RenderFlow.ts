import { Matrix4 } from '@math'
import { Clip, Offset, Size } from '@rendering'
import { BoxConstraints, RenderBox } from './RenderBox';
import { PaintingContext } from './RenderObject';

export abstract class FlowPaintingContext {
  abstract size: Size
  abstract childCount: number
  abstract getChildSize (i: number): Size | null
  abstract paintChild (i: number, transform: Matrix4, opacity: number)
}

abstract class FlowDelegate {
  abstract repaint: Listenable | null

  abstract paintChildren (context: FlowPaintingContext ): void
  abstract shouldRepaint (oldDelegate: FlowDelegate): boolean

  getSize (constraints: BoxConstraints): Size {
    return constraints.biggest
  }

  getConstraintsForChild (
    i: number, 
    constraints: BoxConstraints
  ) {
    return constraints
  }

  shouldRelayout (oldDelegate: FlowDelegate): boolean {
    return false
  }

  toString () {
    return ``
  }
}


export class RenderFlow extends RenderBox implements FlowPaintingContext {
  RenderFlow({
    List<RenderBox>? children,
    required FlowDelegate delegate,
    Clip clipBehavior = Clip.hardEdge,
  }) : assert(delegate != null),
       assert(clipBehavior != null),
       _delegate = delegate,
       _clipBehavior = clipBehavior {
    addAll(children);
  }

  
  void setupParentData(RenderBox child) {
    final ParentData? childParentData = child.parentData;
    if (childParentData is FlowParentData)
      childParentData._transform = null;
    else
      child.parentData = FlowParentData();
  }

  /// The delegate that controls the transformation matrices of the children.
  FlowDelegate get delegate => _delegate;
  FlowDelegate _delegate;
  /// When the delegate is changed to a new delegate with the same runtimeType
  /// as the old delegate, this object will call the delegate's
  /// [FlowDelegate.shouldRelayout] and [FlowDelegate.shouldRepaint] functions
  /// to determine whether the new delegate requires this object to update its
  /// layout or painting.
  set delegate(FlowDelegate newDelegate) {
    assert(newDelegate != null);
    if (_delegate == newDelegate)
      return;
    final FlowDelegate oldDelegate = _delegate;
    _delegate = newDelegate;

    if (newDelegate.runtimeType != oldDelegate.runtimeType || newDelegate.shouldRelayout(oldDelegate))
      markNeedsLayout();
    else if (newDelegate.shouldRepaint(oldDelegate))
      markNeedsPaint();

    if (attached) {
      oldDelegate._repaint?.removeListener(markNeedsPaint);
      newDelegate._repaint?.addListener(markNeedsPaint);
    }
  }

  /// {@macro flutter.material.Material.clipBehavior}
  ///
  /// Defaults to [Clip.hardEdge], and must not be null.
  Clip get clipBehavior => _clipBehavior;
  Clip _clipBehavior = Clip.hardEdge;
  set clipBehavior(Clip value) {
    assert(value != null);
    if (value != _clipBehavior) {
      _clipBehavior = value;
      markNeedsPaint();
      markNeedsSemanticsUpdate();
    }
  }

  
  attach (owner: PipelineOwner ) {
    super.attach(owner)
    _delegate._repaint?.addListener(markNeedsPaint);
  }

  
  detach () {
    _delegate._repaint?.removeListener(this.markNeedsPaint)
    super.detach()
  }

  getSize (constraints: BoxConstraints ): Size {
    return constraints.constrain(_delegate.getSize(constraints));
  }

  
  get isRepaintBoundary () {
    return true
  }

  // TODO(ianh): It's a bit dubious to be using the getSize function from the delegate to
  // figure out the intrinsic dimensions. We really should either not support intrinsics,
  // or we should expose intrinsic delegate callbacks and throw if they're not implemented.

  
  double computeMinIntrinsicWidth(double height) {
    final double width = _getSize(BoxConstraints.tightForFinite(height: height)).width;
    if (width.isFinite)
      return width;
    return 0.0;
  }

  
  double computeMaxIntrinsicWidth(double height) {
    final double width = _getSize(BoxConstraints.tightForFinite(height: height)).width;
    if (width.isFinite)
      return width;
    return 0.0;
  }

  
  double computeMinIntrinsicHeight(double width) {
    final double height = _getSize(BoxConstraints.tightForFinite(width: width)).height;
    if (height.isFinite)
      return height;
    return 0.0;
  }

  
  double computeMaxIntrinsicHeight(double width) {
    final double height = _getSize(BoxConstraints.tightForFinite(width: width)).height;
    if (height.isFinite)
      return height;
    return 0.0;
  }

  
  Size computeDryLayout(BoxConstraints constraints) {
    return _getSize(constraints);
  }

  
  performLayout () {
    const constraints = this.constraints
    size = this.getSize(constraints)
    let i = 0
    this.randomAccessChildren = []
    let child = this.firstChild
    
    while (child !== null) {
      this.randomAccessChildren.push(child)
      final BoxConstraints innerConstraints = _delegate.getConstraintsForChild(i, constraints);
      child.layout(innerConstraints, parentUsesSize: true);
      final FlowParentData childParentData = child.parentData! as FlowParentData;
      childParentData.offset = Offset.zero
      child = childParentData.nextSibling;
      i += 1;
    }
  }

  
  public lastPaintOrder: number[] = []
  public randomAccessChildren: RenderBox[] = []


  public paintingContext: PaintingContext | null = null
  public paintingOffset: Offset | null = null

  
  getChildSize (i: number): Size | null {
    if (i < 0 || i >= this.randomAccessChildren.length) {
      return null
    }
    return this.randomAccessChildren[i].size
  }

  
  paintChild (
    i: number, 
    transform: Matrix4 | null, 
    opacity = 1.0 
  ) {
    transform ??= Matrix4.identity()
    const child = this.randomAccessChildren[i]
    
    this.lastPaintOrder.push(i)
    this.transform = transform

    if (opacity == 0.0) {
      return
    }

    void painter(PaintingContext context, Offset offset) {
      context.paintChild(child, offset);
    }
    if (opacity == 1.0) {
      _paintingContext!.pushTransform(needsCompositing, _paintingOffset!, transform, painter);
    } else {
      _paintingContext!.pushOpacity(_paintingOffset!, ui.Color.getAlphaFromOpacity(opacity), (PaintingContext context, Offset offset) {
        context.pushTransform(needsCompositing, offset, transform!, painter);
      });
    }
  }

  paintWithDelegate (
    context: PaintingContext, 
    offset: Offset
  ) {
    _lastPaintOrder.clear()
    _paintingContext = context;
    _paintingOffset = offset;
    for (final RenderBox child in _randomAccessChildren) {
      final FlowParentData childParentData = child.parentData! as FlowParentData;
      childParentData._transform = null;
    }
    try {
      _delegate.paintChildren(this);
    } finally {
      _paintingContext = null;
      _paintingOffset = null;
    }
  }

  
  paint (
    context: PaintingContext, 
    offset: Offset
  ) {
    if (clipBehavior === Clip.none) {
      this.clipRectLayer.layer = null
      this.paintWithDelegate(context, offset)
    } else {
      this.clipRectLayer.layer = context.pushClipRect(
        this.needsCompositing,
        offset,
        Offset.zero.and(size),
        this.paintWithDelegate,
        this.clipBehavior,
        this.clipRectLayer.layer,
      )
    }
  }

  final LayerHandle<ClipRectLayer> _clipRectLayer = LayerHandle<ClipRectLayer>();

  dispose () {
    this.clipRectLayer.layer = null
    super.dispose()
  }

  // @TODO-HITEST

  applyPaintTransform (
    child: RenderBox, 
    transform: Matrix4
  ) {
    if (this.transform !== null) {
      transform.multiply(this.transform)
    }

    super.applyPaintTransform(child, transform)
  }
}
