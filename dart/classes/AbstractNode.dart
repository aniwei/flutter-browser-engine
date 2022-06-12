class AbstractNode {
  /// The depth of this node in the tree.
  ///
  /// The depth of nodes in a tree monotonically increases as you traverse down
  /// the tree.
  int get depth => _depth;
  int _depth = 0;

  /// Adjust the [depth] of the given [child] to be greater than this node's own
  /// [depth].
  ///
  /// Only call this method from overrides of [redepthChildren].
  @protected
  void redepthChild(AbstractNode child) {
    assert(child.owner == owner);
    if (child._depth <= _depth) {
      child._depth = _depth + 1;
      child.redepthChildren();
    }
  }

  /// Adjust the [depth] of this node's children, if any.
  ///
  /// Override this method in subclasses with child nodes to call [redepthChild]
  /// for each child. Do not call this method directly.
  void redepthChildren() {}

  /// The owner for this node (null if unattached).
  ///
  /// The entire subtree that this node belongs to will have the same owner.
  Object? get owner => _owner;
  Object? _owner;

  /// Whether this node is in a tree whose root is attached to something.
  ///
  /// This becomes true during the call to [attach].
  ///
  /// This becomes false during the call to [detach].
  bool get attached => _owner != null;

  /// Mark this node as attached to the given owner.
  ///
  /// Typically called only from the [parent]'s [attach] method, and by the
  /// [owner] to mark the root of a tree as attached.
  ///
  /// Subclasses with children should override this method to first call their
  /// inherited [attach] method, and then [attach] all their children to the
  /// same [owner].
  ///
  /// Implementations of this method should start with a call to the inherited
  /// method, as in `super.attach(owner)`.
  @mustCallSuper
  void attach(covariant Object owner) {
    assert(owner != null);
    assert(_owner == null);
    _owner = owner;
  }

  /// Mark this node as detached.
  ///
  /// Typically called only from the [parent]'s [detach], and by the [owner] to
  /// mark the root of a tree as detached.
  ///
  /// Subclasses with children should override this method to first call their
  /// inherited [detach] method, and then [detach] all their children.
  ///
  /// Implementations of this method should end with a call to the inherited
  /// method, as in `super.detach()`.
  @mustCallSuper
  void detach() {
    assert(_owner != null);
    _owner = null;
    assert(parent == null || attached == parent!.attached);
  }

  /// The parent of this node in the tree.
  AbstractNode? get parent => _parent;
  AbstractNode? _parent;

  /// Mark the given node as being a child of this node.
  ///
  /// Subclasses should call this function when they acquire a new child.
  @protected
  @mustCallSuper
  void adoptChild(covariant AbstractNode child) {
    assert(child != null);
    assert(child._parent == null);
    assert(() {
      AbstractNode node = this;
      while (node.parent != null) node = node.parent!;
      assert(node != child); // indicates we are about to create a cycle
      return true;
    }());
    child._parent = this;
    if (attached) child.attach(_owner!);
    redepthChild(child);
  }

  /// Disconnect the given node from this node.
  ///
  /// Subclasses should call this function when they lose a child.
  @protected
  @mustCallSuper
  void dropChild(covariant AbstractNode child) {
    assert(child != null);
    assert(child._parent == this);
    assert(child.attached == attached);
    child._parent = null;
    if (attached) child.detach();
  }
}
