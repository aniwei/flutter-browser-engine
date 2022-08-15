import { invariant } from 'ts-invariant'
import { Clip } from '@basic/Painting'
import { Skia, SkiaTextDirection } from '@skia/Skia'
import { TextBaseline } from '@rendering/Text'
import { Offset, Size } from '@internal/Geometry'
import { Axis, VerticalDirection } from '@basic/Axis'
import { property, PropertySetter } from '@helper/property'
import { BoxConstraints, RenderBox } from './RenderBox'
import { PaintingContext, RenderObject } from './RenderObject'
import { ChildLayouter } from '@basic/Layout'
import { ChildLayoutHelper } from '@helper/ChildLayout'
import { flipAxis } from '@helper/painting'

export type ChildSizingFunction = { (child: RenderBox, extent: number): number }

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

export enum FlexFit {
  Tight,
  Loose,
}

export type LayoutSizes = {
  mainSize: number
  crossSize: number
  allocatedSize: number
}

function layout <T> (setter?: PropertySetter<T>) {
  return property<T>(function get (this, value: T) {
    return value
  }, setter ?? function (this, value: T, k) {
    invariant(value !== null)
    if (this[k] !== null) {
      this[k] = value
      this.markNeedsLayout()
    }
  })
}

function startIsTopLeft (
  direction: Axis , 
  textDirection: SkiaTextDirection | null, 
  verticalDirection: VerticalDirection | null
): boolean | null | void {
  invariant(direction !== null)
  
  switch (direction) {
    case Axis.Horizontal:
      switch (textDirection) {
        case Skia.TextDirection.LTR:
          return true
        case Skia.TextDirection.RTL:
          return false
        case null:
          return null
      }
    case Axis.Vertical:
      switch (verticalDirection) {
        case VerticalDirection.Down:
          return true
        case VerticalDirection.Up:
          return false
        case null:
          return null
      }
  }
}

export class RenderFlex extends RenderBox {
  @layout<Axis>() public direction: Axis
  @layout<MainAxisAlignment>() public mainAxisAlignment: MainAxisAlignment
  @layout<MainAxisSize>() public mainAxisSize: MainAxisSize
  @layout<CrossAxisAlignment>() public crossAxisAlignment: CrossAxisAlignment
  @layout<SkiaTextDirection>() public textDirection: SkiaTextDirection | null
  @layout<VerticalDirection>() public verticalDirection: VerticalDirection
  @layout<TextBaseline>() public textBaseline: TextBaseline | null
  @layout<Clip>() public clipBehavior: Clip

  public flex: number | null = null
  public fit: FlexFit | null = null
  public overflow: number = 0

  get canComputeIntrinsics () {
    return this.crossAxisAlignment !== CrossAxisAlignment.Baseline
  }

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
    this.textDirection = textDirection ?? null
    this.verticalDirection = verticalDirection
    this.textBaseline = textBaseline ?? null
    this.clipBehavior = clipBehavior
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
      let child: RenderBox | null = this.firstChild as RenderBox
      
      while (child !== null) {
        const flex = this.getFlex(child)
        totalFlex += flex
        if (flex > 0) {
          const flexFraction = childSize(child, extent) / this.getFlex(child)
          maxFlexFractionSoFar = Math.max(maxFlexFractionSoFar, flexFraction)
        } else {
          inflexibleSpace += childSize(child, extent)
        }
        child = child.nextSibling as RenderBox
      }
      return maxFlexFractionSoFar * totalFlex + inflexibleSpace
    } else {
      const availableMainSpace = extent
      let totalFlex = 0
      let inflexibleSpace = 0.0
      let maxCrossSize = 0.0
      let child: RenderBox | null = this.firstChild as RenderBox
      while (child !== null) {
        const flex = this.getFlex(child)
        totalFlex += flex
        let mainSize
        let crossSize
        if (flex === 0) {
          switch (this.direction) {
            case Axis.Horizontal: {
              mainSize = child.getMaxIntrinsicWidth(Number.POSITIVE_INFINITY)
              crossSize = childSize(child, mainSize)
              break
            }
            case Axis.Vertical: {
              mainSize = child.getMaxIntrinsicHeight(Number.POSITIVE_INFINITY)
              crossSize = childSize(child, mainSize)
              break
            }
          }
          inflexibleSpace += mainSize
          maxCrossSize = Math.max(maxCrossSize, crossSize)
        }
        
        child = this.nextSibling as RenderBox
      }

      const spacePerFlex = Math.max(0.0, (availableMainSpace - inflexibleSpace) / totalFlex)

      
      child = this.firstChild as RenderBox
      while (child !== null) {
        const flex = this.getFlex(child)
        if (flex > 0) {
          maxCrossSize = Math.max(maxCrossSize, childSize(child, spacePerFlex * flex))
        }
        child = this.nextSibling as RenderBox
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

  computeDistanceToActualBaseline (baseline: TextBaseline): number | null {
    if (this.direction === Axis.Horizontal) {
      return this.defaultComputeDistanceToHighestActualBaseline(baseline)
    }
    return this.defaultComputeDistanceToFirstActualBaseline(baseline)
  }

  getFlex (child: RenderBox) {
    return this.flex ?? 0
  }

  getFit (child: RenderBox ): FlexFit {
    return this.fit ?? FlexFit.Tight
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
    switch (this.direction) {
      case Axis.Horizontal:
        return size.width
      case Axis.Vertical:
        return size.height
    }
  }

  computeDryLayout (constraints: BoxConstraints) {
    if (!this.canComputeIntrinsics) {
      return Size.zero
    }

    const sizes = this.computeSizes(
      constraints,
      ChildLayoutHelper.dryLayoutChild,
    )

    switch (this.direction) {
      case Axis.Horizontal:
        return constraints.constrain(new Size(sizes.mainSize, sizes.crossSize))
      case Axis.Vertical:
        return constraints.constrain(new Size(sizes.crossSize, sizes.mainSize))
    }
  }

  computeSizes (
    constraints: BoxConstraints, 
    layoutChild: ChildLayouter
  ): LayoutSizes {
    invariant(constraints !== null)

    let totalFlex = 0
    const maxMainSize = this.direction === Axis.Horizontal 
      ? constraints.maxWidth 
      : constraints.maxHeight

    const canFlex = maxMainSize < Number.POSITIVE_INFINITY

    let crossSize = 0.0
    let allocatedSize = 0.0
    let lastFlexChild: RenderBox | null = null
    let child: RenderBox | null = this.firstChild as RenderBox

    while (child !== null) {
      const flex = this.getFlex(child)
      if (flex > 0) {
        totalFlex += flex
        lastFlexChild = child
      } else {
        let innerConstraints: BoxConstraints
        if (this.crossAxisAlignment === CrossAxisAlignment.Stretch) {
          switch (this.direction) {
            case Axis.Horizontal:
              innerConstraints = BoxConstraints.tightFor(constraints.maxHeight)
              break
            case Axis.Vertical:
              innerConstraints = BoxConstraints.tightFor(constraints.maxWidth)
              break;
          }
        } else {
          switch (this.direction) {
            case Axis.Horizontal:
              innerConstraints = new BoxConstraints(constraints.maxHeight)
              break
            case Axis.Vertical:
              innerConstraints = new BoxConstraints(constraints.maxWidth)
              break
          }
        }
        const childSize: Size = layoutChild(child, innerConstraints)
        allocatedSize += this.getMainSize(childSize)
        crossSize = Math.max(crossSize, this.getCrossSize(childSize))
      }
      
      child = this.nextSibling as RenderBox
    }

    let freeSpace = Math.max(0.0, (canFlex ? maxMainSize : 0.0) - allocatedSize)
    let allocatedFlexSpace = 0.0

    if (totalFlex > 0) {
      let spacePerFlex = canFlex ? (freeSpace / totalFlex) : NaN
      child = this.firstChild as RenderBox
      while (child !== null) {
        const flex = this.getFlex(child)
        if (flex > 0) {
          const maxChildExtent = canFlex 
            ? child === lastFlexChild 
              ? (freeSpace - allocatedFlexSpace) 
              : spacePerFlex * flex
            : Number.POSITIVE_INFINITY

          let minChildExtent: number

          switch (this.getFit(child)) {
            case FlexFit.Tight:
              invariant(maxChildExtent < Number.POSITIVE_INFINITY)
              minChildExtent = maxChildExtent
              break
            case FlexFit.Loose:
              minChildExtent = 0.0
              break
          }

          invariant(minChildExtent !== null)
          let innerConstraints: BoxConstraints
          if (this.crossAxisAlignment === CrossAxisAlignment.Stretch) {
            switch (this.direction) {
              case Axis.Horizontal:
                innerConstraints = new BoxConstraints({
                  minWidth: minChildExtent,
                  maxWidth: maxChildExtent,
                  minHeight: constraints.maxHeight,
                  maxHeight: constraints.maxHeight,
                })
                break
              case Axis.Vertical:
                innerConstraints = new BoxConstraints({
                  minWidth: constraints.maxWidth,
                  maxWidth: constraints.maxWidth,
                  minHeight: minChildExtent,
                  maxHeight: maxChildExtent,
                })
                break
            }
          } else {
            switch (this.direction) {
              case Axis.Horizontal:
                innerConstraints = new BoxConstraints({
                  minWidth: minChildExtent,
                  maxWidth: maxChildExtent,
                  maxHeight: constraints.maxHeight,
                })
                break
              case Axis.Vertical:
                innerConstraints = new BoxConstraints({
                  minWidth: minChildExtent,
                  maxWidth: maxChildExtent,
                  maxHeight: constraints.maxWidth,
                })
                break
            }
          }
          const childSize: Size = layoutChild(child, innerConstraints)
          const childMainSize = this.getMainSize(childSize)
          
          invariant(childMainSize <= maxChildExtent)

          allocatedSize += childMainSize
          allocatedFlexSpace += maxChildExtent
          crossSize = Math.max(crossSize, this.getCrossSize(childSize))
        }
        child = this.nextSibling as RenderBox
      }
    }

    const idealSize = canFlex && this.mainAxisSize === MainAxisSize.Max ? maxMainSize : allocatedSize
    return {
      mainSize: idealSize,
      crossSize: crossSize,
      allocatedSize: allocatedSize,
    }
  }


  performLayout () {
    const constraints = this.constraints as BoxConstraints
    const sizes = this.computeSizes(
      constraints,
      ChildLayoutHelper.layoutChild,
    )

    const allocatedSize = sizes.allocatedSize
    let actualSize = sizes.mainSize
    let crossSize = sizes.crossSize
    let maxBaselineDistance = 0.0
    if (this.crossAxisAlignment === CrossAxisAlignment.Baseline) {
      let child: RenderBox | null = this.firstChild as RenderBox
      let maxSizeAboveBaseline = 0
      let maxSizeBelowBaseline = 0
      while (child !== null) {
        const distance = child.getDistanceToBaseline(this.textBaseline!, true)
        if (distance !== null) {
          maxBaselineDistance = Math.max(maxBaselineDistance, distance)
          maxSizeAboveBaseline = Math.max(
            distance,
            maxSizeAboveBaseline,
          )
          maxSizeBelowBaseline = Math.max(
            child.size!.height! - distance,
            maxSizeBelowBaseline,
          )
          crossSize = Math.max(
            maxSizeAboveBaseline + maxSizeBelowBaseline, 
            crossSize
          )
        }
        child = this.nextSibling as RenderBox
      }
    }

    switch (this.direction) {
      case Axis.Horizontal:
        this.size = constraints.constrain(new Size(actualSize, crossSize))
        actualSize = this.size.width
        crossSize = this.size.height
        break
      case Axis.Vertical:
        this.size = constraints.constrain(new Size(crossSize, actualSize))
        actualSize = this.size.height
        crossSize = this.size.width
        break
    }

    const actualSizeDelta = actualSize - allocatedSize
    this.overflow = Math.max(0.0, -actualSizeDelta)
    const remainingSpace = Math.max(0.0, actualSizeDelta)
    let leadingSpace: number
    let betweenSpace: number

    const flipMainAxis = !(startIsTopLeft(
      this.direction, 
      this.textDirection, 
      this.verticalDirection
    ) ?? true)
    switch (this.mainAxisAlignment) {
      case MainAxisAlignment.Start:
        leadingSpace = 0.0
        betweenSpace = 0.0
        break
      case MainAxisAlignment.End:
        leadingSpace = remainingSpace
        betweenSpace = 0.0
        break
      case MainAxisAlignment.Center:
        leadingSpace = remainingSpace / 2.0
        betweenSpace = 0.0
        break
      case MainAxisAlignment.SpaceBetween:
        leadingSpace = 0.0
        betweenSpace = this.childCount > 1 
          ? remainingSpace / (this.childCount - 1) 
          : 0.0
        break
      case MainAxisAlignment.SpaceAround:
        betweenSpace = this.childCount > 0 
          ? remainingSpace / this.childCount 
          : 0.0
        leadingSpace = betweenSpace / 2.0
        break
      case MainAxisAlignment.SpaceEvenly:
        betweenSpace = this.childCount > 0 
          ? remainingSpace / (this.childCount + 1) 
          : 0.0
        leadingSpace = betweenSpace
        break
    }

    let childMainPosition = flipMainAxis 
      ? actualSize - leadingSpace 
      : leadingSpace

    let child: RenderBox | null = this.firstChild as RenderBox
    
    while (child !== null) {
      let childCrossPosition: number
      switch (this.crossAxisAlignment) {
        case CrossAxisAlignment.Start:
        case CrossAxisAlignment.End:
          childCrossPosition = startIsTopLeft(
            flipAxis(this.direction), 
            this.textDirection, 
            this.verticalDirection
          ) === (this.crossAxisAlignment === CrossAxisAlignment.Start)
            ? 0.0
            : crossSize - this.getCrossSize(child.size as Size)
          break
        case CrossAxisAlignment.Center:
          childCrossPosition = crossSize / 2.0 - this.getCrossSize(child.size as Size) / 2.0
          break
        case CrossAxisAlignment.Stretch:
          childCrossPosition = 0.0
          break
        case CrossAxisAlignment.Baseline:
          if (this.direction === Axis.Horizontal) {
            invariant(this.textBaseline !== null)
            const distance: number | null = child.getDistanceToBaseline(
              this.textBaseline!, 
              true
            )
            if (distance !== null) {
              childCrossPosition = maxBaselineDistance - distance
            } else {
              childCrossPosition = 0.0
            }
          } else {
            childCrossPosition = 0.0
          }
          break
      }

      if (flipMainAxis) {
        childMainPosition -= this.getMainSize(child.size as Size)
      }

      switch (this.direction) {
        case Axis.Horizontal:
          this.offset = new Offset(
            childMainPosition, 
            childCrossPosition
          )
          break
        case Axis.Vertical:
          this.offset = new Offset(
            childCrossPosition, 
            childMainPosition
          )
          break
      }

      if (flipMainAxis) {
        childMainPosition -= betweenSpace
      } else {
        childMainPosition += this.getMainSize(child.size as Size) + betweenSpace
      }
      
      child = this.nextSibling as RenderBox
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

    if (this.size?.isEmpty) {
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

  dispose () {
    this.clipRectLayer.layer = null
    super.dispose()
  }
}