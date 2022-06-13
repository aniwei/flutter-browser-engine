import { invariant } from 'ts-invariant' 
import { Offset } from '@rendering'
import { property } from '@helper'


export class RenderObject {
  public needsLayout
  public relayoutBoundary
  public constraints
  public depth
  public owner
  public attached
  public parent
  public doingThisLayoutWithCallback: boolean = false
  public needsPaint: boolean = true
  public isRepaintBoundary: boolean = false
  public alwaysNeedsCompositing: boolean = false
  public needsCompositingBitsUpdate: boolean = false
  public cachedSemanticsConfiguration
  public semantics
  public needsSemanticsUpdate: boolean = true


  @property<boolean>(function (this, v) {
    invariant(!this.needsCompositingBitsUpdate)
    return v
  }) public needsCompositing: boolean

  @property<boolean>(function (this, v) {
    return v
  }) public debugDisposed: boolean = false

  constructor () {
    this.needsCompositing = this.isRepaintBoundary || this.alwaysNeedsCompositing
  }

  layout (
    constraints,
    
  ) {

  }

  appendLayer () {

  }

  markNeedsLayout () {
    if (this.needsLayout) {
      return
    }

    invariant(this.relayoutBoundary !== null)

    if (this.relayoutBoundary !== this) {
      this.markParentNeedsLayout()
    } else {
      this.needsLayout = true
      if (this.owner !== null) {
        this.owner.nodesNeedingLayout.push(this)
        this.owner.requestVisualUpdate()
      }
    }
  }

  markParentNeedsLayout () {
    this.needsLayout = true
    invariant(this.parent !== null)

    const parent = this.parent

    if (this.doingThisLayoutWithCallback) {
      parent.markNeedslayout()
    }

    invariant(parent === this.parent)
  }

  markNeedsCompositingBitsUpdate () {
    if (this.needsCompositingBitsUpdate) {
      return
    }
    this.needsCompositingBitsUpdate = true
    
    if (parent instanceof RenderObject) {
      const parent = this.parent as RenderObject
      if (parent.needsCompositingBitsUpdate) {
        return
      }

      if (
        !this.isRepaintBoundary && 
        !parent.isRepaintBoundary
      ) {
        parent.markNeedsCompositingBitsUpdate()
        return
      }
    }
    
    // @TODO
    // assert(() {
    //   final AbstractNode? parent = this.parent;
    //   if (parent is RenderObject) return parent._needsCompositing;
    //   return true;
    // }());
    // parent is fine (or there isn't one), but we are dirty
    if (this.owner !== null) {
      this.owner!.nodesNeedingCompositingBitsUpdate.push(this)
    }
  }

  markNeedsPaint (): void {
    if (this.needsPaint) {
      return
    }

    if (this.isRepaintBoundary) {

    } else if (parent instanceof RenderObject) {
      parent = this.parent
      this.parent.markNeedsPaint()
    } else {

    }
  }

  markNeedsSemanticsUpdate (): void {
    invariant(!this.debugDisposed)
    invariant(!this.attached || !this.owner!.debugDoingSemantics)

    if (
      !this.attached || 
      this.owner!._semanticsOwner === null
    ) {
      this.cachedSemanticsConfiguration = null
      return
    }

    const wasSemanticsBoundary = (
      this.semantics !== null &&
      this.cachedSemanticsConfiguration?.isSemanticBoundary === true
    )

    this.cachedSemanticsConfiguration = null
    
    let isEffectiveSemanticsBoundary = (
      this.semanticsConfiguration.isSemanticBoundary && 
      wasSemanticsBoundary
    )

    let node: RenderObject = this

    while (
      !isEffectiveSemanticsBoundary && 
      node.parent instanceof RenderObject
    ) {
      if (
        node !== this && 
        node.needsSemanticsUpdate
      ) {
        break
      }
      
      node.needsSemanticsUpdate = true
      node = node.parent as RenderObject

      isEffectiveSemanticsBoundary = node.semanticsConfiguration.isSemanticBoundary
      
      if (
        isEffectiveSemanticsBoundary && 
        node.semantics === null
      ) {
        return
      }
    }

    if (
      node !== this && 
      this.semantics !== null && 
      this.needsSemanticsUpdate
    ) {
      this.owner!.nodesNeedingSemantics.remove(this)
    }

    if (!node.needsSemanticsUpdate) {
      node.needsSemanticsUpdate = true
      
      if (this.owner !== null) {
        invariant(
          node.semanticsConfiguration.isSemanticBoundary ||
          !(node.parent instanceof RenderObject)
        )
        this.owner!.nodesNeedingSemantics.add(node)
        this.owner!.requestVisualUpdate()
      }
    }
  }

  attach (owner) {
    invariant(owner !== null)
    invariant(this.owner === null)

    this.owner = owner
  }

  detach () {
    invariant(this.owner !== null) 
    this.owner = null

    invariant(
      this.parent === null ||
      this.attached === this.parent.attached
    )
  }

  redepthChildren () {}

  redepthChild (child: RenderObject) {

  }

  adoptChild (child: RenderObject) {
    invariant(child !== null)
    

    invariant(child.parent === null)
    child.parent = this

    if (this.attached) {
      child.attach(this.owner)
    }

    this.redepthChild(child)
  }
  
  dropChild (child: RenderObject) {
    invariant(child !== null)
    invariant(child.parent === this)
    invariant(child.attached === this.attached)

    child.parent = null
    if (this.attached) {
      child.detach()
    }
  }

  paintChild (
    child: RenderObject,
    offset: Offset
  ) {

  }

  compositeChild (
    child: RenderObject,
    offset: Offset
  ) {

  }

  reassemble () {
    this.markNeedsLayout()
    this.markNeedsCompositingBitsUpdate()
    this.markNeedsPaint()
    this.markNeedsSemanticsUpdate()

    for (const child of this.children) {
      child.reassemble()
    }
  }

  dispose () {

  }
}

export abstract class Constraints {
  abstract isTight: boolean
  abstract isNormalized: boolean
}