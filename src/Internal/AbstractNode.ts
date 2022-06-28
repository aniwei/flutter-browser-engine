import invariant from 'ts-invariant'
import { property } from '@helper'

export abstract class AbstractNode {
  @property<boolean>(function get (this) {
    return this.owner !== null
  }) public attached!: boolean

  public depth = 0
  public owner: unknown | null = null
  public parent: AbstractNode | null = null

  redepthChild (child: AbstractNode) {
    invariant(child.owner === this.owner)

    if (child.depth <= this.depth) {
      child.depth = this.depth + 1
      child.redepthChildren()
    }
  }

  redepthChildren () {}

  attach (owner: unknown) {
    invariant(owner !== null)
    invariant(this.owner === null)
    this.owner = owner
  }

  detach () {
    invariant(this.owner !== null)
    this.owner = null
    invariant(parent === null || this.attached === this.parent!.attached)
  }

  adoptChild (child: AbstractNode) {
    invariant(child !== null)
    invariant(child.parent == null)
    invariant((() => {
      let node: AbstractNode = this
      while (node.parent !== null) {
        node = node.parent!
      }
      invariant(node !== child)
      return true
    })())

    child.parent = this
    if (this.attached) {
      child.attach(this.owner!)
    }
    this.redepthChild(child)
  }

  dropChild (child: AbstractNode) {
    invariant(child !== null)
    invariant(child.parent === this)
    invariant(child.attached === this.attached)
    child.parent = null
    if (this.attached) {
      child.detach()
    }
  }
}