import { property } from '@helper'
import { Axis, VerticalDirection } from '@painting'
import { Clip, Offset, Size } from '@rendering'
import { SkiaTextDirection } from '@skia'
import { TextBaseline } from 'canvaskit-wasm'
import invariant from 'ts-invariant'
import { BoxConstraints, BoxHitTestResult, RenderBox } from './RenderBox'
import { PaintingContext, RenderObject } from './RenderObject'


export enum MainAxisSize {
  Min,
  Max,
}

export enum MainAxisAlignment {
  Start,
  End,
  Center,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly
}

export enum CrossAxisAlignment {
  Start,
  End,
  Center,
  Stretch,
  Baseline,
}

export class FlexParentData extends ContainerBoxParentData<RenderBox> {
  int? flex;
  FlexFit? fit;

  toString () {
    return '${super.toString()}; flex=$flex; fit=$fit'
  }
}

export class RenderFlex extends RenderBox {
  @property<Axis>(function get (this, direction: Axis) {
    return direction
  }, function set (this, direction: Axis) {
    invariant(direction !== null)
    if (this.direction !== direction) {
      this._direction = direction
      this.markNeedsLayout()
    }
  }) public direction: Axis

  constructor (
    children: RenderBox[] | null,
    direction: Axis = Axis.Horizontal,
    mainAxisSize = MainAxisSize.Max,
    mainAxisAlignment = MainAxisAlignment.Start,
    crossAxisAlignment = CrossAxisAlignment.Start,
    textDirection: SkiaTextDirection | null,
    verticalDirection: VerticalDirection.Down,
    textBaseline: TextBaseline | null,
    clipBehavior: Clip.None | null
  ) {
    invariant(direction !== null)
    invariant(mainAxisAlignment !== null)
    invariant(mainAxisSize !== null)
    invariant(crossAxisAlignment !== null)
    invariant(clipBehavior !== null)

    super()

    this.direction = direction
    this.mainAxisAlignment = mainAxisAlignment
    this.mainAxisSize = mainAxisSize
    this.crossAxisAlignment = crossAxisAlignment
    this.textDirection = textDirection
    this.verticalDirection = verticalDirection
    this.textBaseline = textBaseline
    this.clipBehavior = clipBehavior
  }

  setupParentData(child: RenderBox): void {
    if (child.parentData instanceof FlexParentData) {

    }
  }


  get canComputeIntrinsics () {
    return this.crossAxisAlignment !== CrossAxisAlignment.Baseline
  }

  getIntrinsicSize (
    sizingDirection: Axis,
    extent: number,
    childSize: ChildSizingFunction, 
  ) {
    if (!this.canComputeIntrinsics) {
      return 0.0
    }
    
    if (this.direction === sizingDirection) {
      let totalFlex = 0.0
      let inflexibleSpace = 0.0
      let maxFlexFractionSoFar = 0.0
      let child: RenderBox | null = this.firstChild
      
      while (child !== null) {
        const flex = this.getFlex(child)
        totalFlex += flex
        if (flex > 0) {
          const flexFraction = childSize(child, extent) / this.getFlex(child)
          maxFlexFractionSoFar = Math.max(maxFlexFractionSoFar, flexFraction)
        } else {
          inflexibleSpace += childSize(child, extent)
        }
        const childParentData = child.parentData! as FlexParentData
        child = childParentData.nextSibling
      }
      return maxFlexFractionSoFar * totalFlex + inflexibleSpace
    } else {
      cosnt availableMainSpace = extent
      int totalFlex = 0;
      double inflexibleSpace = 0.0;
      double maxCrossSize = 0.0;
      RenderBox? child = firstChild;
      while (child != null) {
        final int flex = _getFlex(child);
        totalFlex += flex;
        late final double mainSize;
        late final double crossSize;
        if (flex == 0) {
          switch (_direction) {
            case Axis.horizontal:
              mainSize = child.getMaxIntrinsicWidth(double.infinity);
              crossSize = childSize(child, mainSize);
              break;
            case Axis.vertical:
              mainSize = child.getMaxIntrinsicHeight(double.infinity);
              crossSize = childSize(child, mainSize);
              break;
          }
          inflexibleSpace += mainSize;
          maxCrossSize = math.max(maxCrossSize, crossSize);
        }
        final FlexParentData childParentData = child.parentData! as FlexParentData;
        child = childParentData.nextSibling;
      }

      final double spacePerFlex = Math.max(0.0, (availableMainSpace - inflexibleSpace) / totalFlex)

      // Size remaining (flexible) items, find the maximum cross size.
      child = firstChild;
      while (child != null) {
        final int flex = _getFlex(child);
        if (flex > 0)
          maxCrossSize = math.max(maxCrossSize, childSize(child, spacePerFlex * flex));
        final FlexParentData childParentData = child.parentData! as FlexParentData;
        child = childParentData.nextSibling;
      }

      return maxCrossSize
    }
  }

  computeMinIntrinsicWidth (height: number) {
    return this.getIntrinsicSize(
      Axis.Horizontal,
      height,
      (child: RenderBox , extent: number) => child.getMinIntrinsicWidth(extent),
    )
  }

  computeMaxIntrinsicWidth (height: number) {
    return this.getIntrinsicSize(
      Axis.Horizontal,
      height,
      (child: RenderBox, extent: number) => child.getMaxIntrinsicWidth(extent),
    )
  }

  computeMinIntrinsicHeight (width: number) {
    return this.getIntrinsicSize(
      Axis.Vertical,
      width,
      (child: RenderBox, extent: number) => child.getMinIntrinsicHeight(extent),
    );
  }

  computeMaxIntrinsicHeight (width: number) {
    return this.getIntrinsicSize(
      Axis.Vertical,
      width,
      (child: RenderBox, extent: number) => child.getMaxIntrinsicHeight(extent),
    );
  }

  double? computeDistanceToActualBaseline(TextBaseline baseline) {
    if (_direction == Axis.horizontal)
      return defaultComputeDistanceToHighestActualBaseline(baseline);
    return defaultComputeDistanceToFirstActualBaseline(baseline);
  }

  getFlex (child: RenderBox) {
    final FlexParentData childParentData = child.parentData! as FlexParentData;
    return childParentData.flex ?? 0;
  }

  getFit (child: RenderBox ): FlexFit {
    final FlexParentData childParentData = child.parentData! as FlexParentData;
    return childParentData.fit ?? FlexFit.tight;
  }

  getCrossSize (size: Size) {
    switch (this.direction) {
      case Axis.Horizontal:
        return size.height
      case Axis.Vertical:
        return size.width
    }
  }

  getMainSize (size: Size) {
    switch (_direction) {
      case Axis.horizontal:
        return size.width;
      case Axis.vertical:
        return size.height;
    }
  }

  computeDryLayout (constraints: BoxConstraints) {
    if (!this.canComputeIntrinsics) {
      return Size.zero
    }

    final _LayoutSizes sizes = _computeSizes(
      layoutChild: ChildLayoutHelper.dryLayoutChild,
      constraints: constraints,
    );

    switch (this.direction) {
      case Axis.Horizontal:
        return constraints.constrain(Size(sizes.mainSize, sizes.crossSize));
      case Axis.vertical:
        return constraints.constrain(Size(sizes.crossSize, sizes.mainSize));
    }
  }

  computeSizes (
    constraints: BoxConstraints, 
    layoutChild: ChildLayouter
  ) {
    invariant(constraints !== null)

    int totalFlex = 0;
    final double maxMainSize = _direction == Axis.horizontal ? constraints.maxWidth : constraints.maxHeight;
    final bool canFlex = maxMainSize < double.infinity;

    double crossSize = 0.0;
    double allocatedSize = 0.0; 
    RenderBox? child = firstChild;
    RenderBox? lastFlexChild;
    while (child != null) {
      final FlexParentData childParentData = child.parentData! as FlexParentData;
      final int flex = _getFlex(child);
      if (flex > 0) {
        totalFlex += flex;
        lastFlexChild = child;
      } else {
        final BoxConstraints innerConstraints;
        if (crossAxisAlignment == CrossAxisAlignment.stretch) {
          switch (_direction) {
            case Axis.horizontal:
              innerConstraints = BoxConstraints.tightFor(height: constraints.maxHeight);
              break;
            case Axis.vertical:
              innerConstraints = BoxConstraints.tightFor(width: constraints.maxWidth);
              break;
          }
        } else {
          switch (_direction) {
            case Axis.horizontal:
              innerConstraints = BoxConstraints(maxHeight: constraints.maxHeight);
              break;
            case Axis.vertical:
              innerConstraints = BoxConstraints(maxWidth: constraints.maxWidth);
              break;
          }
        }
        final Size childSize = layoutChild(child, innerConstraints);
        allocatedSize += _getMainSize(childSize);
        crossSize = math.max(crossSize, _getCrossSize(childSize));
      }
      assert(child.parentData == childParentData);
      child = childParentData.nextSibling;
    }

    // Distribute free space to flexible children.
    final double freeSpace = math.max(0.0, (canFlex ? maxMainSize : 0.0) - allocatedSize);
    double allocatedFlexSpace = 0.0;
    if (totalFlex > 0) {
      final double spacePerFlex = canFlex ? (freeSpace / totalFlex) : double.nan;
      child = firstChild;
      while (child != null) {
        final int flex = _getFlex(child);
        if (flex > 0) {
          final double maxChildExtent = canFlex ? (child == lastFlexChild ? (freeSpace - allocatedFlexSpace) : spacePerFlex * flex) : double.infinity;
          late final double minChildExtent;
          switch (_getFit(child)) {
            case FlexFit.tight:
              assert(maxChildExtent < double.infinity);
              minChildExtent = maxChildExtent;
              break;
            case FlexFit.loose:
              minChildExtent = 0.0;
              break;
          }
          assert(minChildExtent != null);
          final BoxConstraints innerConstraints;
          if (crossAxisAlignment == CrossAxisAlignment.stretch) {
            switch (_direction) {
              case Axis.horizontal:
                innerConstraints = BoxConstraints(
                  minWidth: minChildExtent,
                  maxWidth: maxChildExtent,
                  minHeight: constraints.maxHeight,
                  maxHeight: constraints.maxHeight,
                );
                break;
              case Axis.vertical:
                innerConstraints = BoxConstraints(
                  minWidth: constraints.maxWidth,
                  maxWidth: constraints.maxWidth,
                  minHeight: minChildExtent,
                  maxHeight: maxChildExtent,
                );
                break;
            }
          } else {
            switch (this.direction) {
              case Axis.Horizontal:
                innerConstraints = new BoxConstraints(
                  minWidth: minChildExtent,
                  maxWidth: maxChildExtent,
                  maxHeight: constraints.maxHeight,
                );
                break;
              case Axis.Vertical:
                innerConstraints = BoxConstraints(
                  maxWidth: constraints.maxWidth,
                  minHeight: minChildExtent,
                  maxHeight: maxChildExtent,
                );
                break;
            }
          }
          final Size childSize = layoutChild(child, innerConstraints);
          final double childMainSize = _getMainSize(childSize);
          assert(childMainSize <= maxChildExtent);
          allocatedSize += childMainSize;
          allocatedFlexSpace += maxChildExtent;
          crossSize = math.max(crossSize, _getCrossSize(childSize));
        }
        final FlexParentData childParentData = child.parentData! as FlexParentData;
        child = childParentData.nextSibling;
      }
    }

    final double idealSize = canFlex && mainAxisSize == MainAxisSize.max ? maxMainSize : allocatedSize;
    return _LayoutSizes(
      mainSize: idealSize,
      crossSize: crossSize,
      allocatedSize: allocatedSize,
    );
  }


  performLayout () {
    const constraints = this.constraints
    const sizes = this.computeSizes(
      layoutChild: ChildLayoutHelper.layoutChild,
      constraints,
    )

    final double allocatedSize = sizes.allocatedSize;
    double actualSize = sizes.mainSize;
    double crossSize = sizes.crossSize;
    double maxBaselineDistance = 0.0;
    if (crossAxisAlignment == CrossAxisAlignment.baseline) {
      RenderBox? child = firstChild;
      double maxSizeAboveBaseline = 0;
      double maxSizeBelowBaseline = 0;
      while (child != null) {
        assert(() {
          if (textBaseline == null)
            throw FlutterError('To use FlexAlignItems.baseline, you must also specify which baseline to use using the "baseline" argument.');
          return true;
        }());
        final double? distance = child.getDistanceToBaseline(textBaseline!, onlyReal: true);
        if (distance != null) {
          maxBaselineDistance = math.max(maxBaselineDistance, distance);
          maxSizeAboveBaseline = math.max(
            distance,
            maxSizeAboveBaseline,
          );
          maxSizeBelowBaseline = math.max(
            child.size.height - distance,
            maxSizeBelowBaseline,
          );
          crossSize = math.max(maxSizeAboveBaseline + maxSizeBelowBaseline, crossSize);
        }
        final FlexParentData childParentData = child.parentData! as FlexParentData;
        child = childParentData.nextSibling;
      }
    }

    // Align items along the main axis.
    switch (_direction) {
      case Axis.horizontal:
        size = constraints.constrain(Size(actualSize, crossSize));
        actualSize = size.width;
        crossSize = size.height;
        break;
      case Axis.vertical:
        size = constraints.constrain(Size(crossSize, actualSize));
        actualSize = size.height;
        crossSize = size.width;
        break;
    }
    final double actualSizeDelta = actualSize - allocatedSize;
    _overflow = math.max(0.0, -actualSizeDelta);
    final double remainingSpace = math.max(0.0, actualSizeDelta);
    late final double leadingSpace;
    late final double betweenSpace;
    // flipMainAxis is used to decide whether to lay out left-to-right/top-to-bottom (false), or
    // right-to-left/bottom-to-top (true). The _startIsTopLeft will return null if there's only
    // one child and the relevant direction is null, in which case we arbitrarily decide not to
    // flip, but that doesn't have any detectable effect.
    final bool flipMainAxis = !(_startIsTopLeft(direction, textDirection, verticalDirection) ?? true);
    switch (_mainAxisAlignment) {
      case MainAxisAlignment.start:
        leadingSpace = 0.0;
        betweenSpace = 0.0;
        break;
      case MainAxisAlignment.end:
        leadingSpace = remainingSpace;
        betweenSpace = 0.0;
        break;
      case MainAxisAlignment.center:
        leadingSpace = remainingSpace / 2.0;
        betweenSpace = 0.0;
        break;
      case MainAxisAlignment.spaceBetween:
        leadingSpace = 0.0;
        betweenSpace = childCount > 1 ? remainingSpace / (childCount - 1) : 0.0;
        break;
      case MainAxisAlignment.spaceAround:
        betweenSpace = childCount > 0 ? remainingSpace / childCount : 0.0;
        leadingSpace = betweenSpace / 2.0;
        break;
      case MainAxisAlignment.spaceEvenly:
        betweenSpace = childCount > 0 ? remainingSpace / (childCount + 1) : 0.0;
        leadingSpace = betweenSpace;
        break;
    }

    // Position elements
    double childMainPosition = flipMainAxis ? actualSize - leadingSpace : leadingSpace;
    RenderBox? child = firstChild;
    while (child != null) {
      final FlexParentData childParentData = child.parentData! as FlexParentData;
      final double childCrossPosition;
      switch (_crossAxisAlignment) {
        case CrossAxisAlignment.start:
        case CrossAxisAlignment.end:
          childCrossPosition = _startIsTopLeft(flipAxis(direction), textDirection, verticalDirection)
                               == (_crossAxisAlignment == CrossAxisAlignment.start)
                             ? 0.0
                             : crossSize - _getCrossSize(child.size);
          break;
        case CrossAxisAlignment.center:
          childCrossPosition = crossSize / 2.0 - _getCrossSize(child.size) / 2.0;
          break;
        case CrossAxisAlignment.stretch:
          childCrossPosition = 0.0;
          break;
        case CrossAxisAlignment.baseline:
          if (_direction == Axis.horizontal) {
            assert(textBaseline != null);
            final double? distance = child.getDistanceToBaseline(textBaseline!, onlyReal: true);
            if (distance != null)
              childCrossPosition = maxBaselineDistance - distance;
            else
              childCrossPosition = 0.0;
          } else {
            childCrossPosition = 0.0;
          }
          break;
      }
      if (flipMainAxis)
        childMainPosition -= _getMainSize(child.size);
      switch (_direction) {
        case Axis.horizontal:
          childParentData.offset = Offset(childMainPosition, childCrossPosition);
          break;
        case Axis.vertical:
          childParentData.offset = Offset(childCrossPosition, childMainPosition);
          break;
      }
      if (flipMainAxis) {
        childMainPosition -= betweenSpace;
      } else {
        childMainPosition += _getMainSize(child.size) + betweenSpace;
      }
      child = childParentData.nextSibling;
    }
  }

  paint (
    context: PaintingContext, 
    offset: Offset
  ) {
    if (!this.hasOverflow) {
      this.defaultPaint(context, offset)
      return
    }

    if (size.isEmpty) {
      return
    }

    if (this.clipBehavior === Clip.None) {
      this.clipRectLayer.layer = null
      this.defaultPaint(context, offset)
    } else {
      this.clipRectLayer.layer = context.pushClipRect(
        this.needsCompositing,
        offset,
        Offset.zero.and(size),
        this.defaultPaint,
        this.clipBehavior,
        this.clipRectLayer.layer,
      );
    }
  }

  hitTestChildren (
    result: BoxHitTestResult, 
    position: Offset
  ) {
    return this.defaultHitTestChildren(result, position)
  }

  dispose () {
    this.clipRectLayer.layer = null
    super.dispose()
  }
}