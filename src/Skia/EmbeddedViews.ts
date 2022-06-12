import { Offset, Rect, Size } from "@rendering";

export enum MutatorType {
  ClipRect,
  ClipRRect,
  ClipPath,
  Transform,
  Opacity,
}

export class EmbeddedViewParams {
  public offset: Offset
  public size: Size
  public mutators: MutatorsStack

  constructor (
    offset: Offset, 
    size: Size, 
    mutators: MutatorsStack
  ) {
    this.size = size
    this.offset = offset
    this.mutators = MutatorsStack.copy(mutators)
  }

  isEqual (other: EmbeddedViewParams) {
    if (other === this) {
      return true
    }
    return (
      other instanceof EmbeddedViewParams &&
      other.offset.isEqual(offset) &&
      other.size.isEqual(size) &&
      other.mutators.isEqula(this.mutators)
    )
  }
}


export class Mutator {
  public type: MutatorType 
  public rect: Rect | null
  public rrect: RRect | null
  public path: Path
  public matrix: Matrix4 | null
  public alpha: number | null

  constructor (
    type: MutatorType,
    rect: Rect,
    rrect: RRect,
    path: Path,
    matrix: Matrix4,
    alpha: number,
  ) {
    this.type = type
    this.rect = rect
    this.rrect = rrect
    this.path = path
    this.matrix = matrix
    this.alpha = alpha
  }

  

  const Mutator.clipRect(ui.Rect rect)
      : this._(MutatorType.clipRect, rect, null, null, null, null);
  const Mutator.clipRRect(ui.RRect rrect)
      : this._(MutatorType.clipRRect, null, rrect, null, null, null);
  const Mutator.clipPath(ui.Path path)
      : this._(MutatorType.clipPath, null, null, path, null, null);
  const Mutator.transform(Matrix4 matrix)
      : this._(MutatorType.transform, null, null, null, matrix, null);
  const Mutator.opacity(int alpha)
      : this._(MutatorType.opacity, null, null, null, null, alpha);

  bool get isClipType =>
      type == MutatorType.clipRect ||
      type == MutatorType.clipRRect ||
      type == MutatorType.clipPath;

  double get alphaFloat => alpha! / 255.0;

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (other is! Mutator) {
      return false;
    }

    final Mutator typedOther = other;
    if (type != typedOther.type) {
      return false;
    }

    switch (type) {
      case MutatorType.clipRect:
        return rect == typedOther.rect;
      case MutatorType.clipRRect:
        return rrect == typedOther.rrect;
      case MutatorType.clipPath:
        return path == typedOther.path;
      case MutatorType.transform:
        return matrix == typedOther.matrix;
      case MutatorType.opacity:
        return alpha == typedOther.alpha;
      default:
        return false;
    }
  }

  @override
  int get hashCode => ui.hashValues(type, rect, rrect, path, matrix, alpha);
}

/// A stack of mutators that can be applied to an embedded view.
class MutatorsStack extends Iterable<Mutator> {
  MutatorsStack() : _mutators = <Mutator>[];

  MutatorsStack._copy(MutatorsStack original)
      : _mutators = List<Mutator>.from(original._mutators);

  final List<Mutator> _mutators;

  void pushClipRect(ui.Rect rect) {
    _mutators.add(Mutator.clipRect(rect));
  }

  void pushClipRRect(ui.RRect rrect) {
    _mutators.add(Mutator.clipRRect(rrect));
  }

  void pushClipPath(ui.Path path) {
    _mutators.add(Mutator.clipPath(path));
  }

  void pushTransform(Matrix4 matrix) {
    _mutators.add(Mutator.transform(matrix));
  }

  void pushOpacity(int alpha) {
    _mutators.add(Mutator.opacity(alpha));
  }

  void pop() {
    _mutators.removeLast();
  }

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) {
      return true;
    }
    return other is MutatorsStack &&
        listEquals<Mutator>(other._mutators, _mutators);
  }

  @override
  int get hashCode => ui.hashList(_mutators);

  @override
  Iterator<Mutator> get iterator => _mutators.reversed.iterator;
}

/// The results of diffing the current composition order with the active
/// composition order.
class ViewListDiffResult {
  /// Views which should be removed from the scene.
  final List<int> viewsToRemove;

  /// Views to add to the scene.
  final List<int> viewsToAdd;

  /// If `true`, [viewsToAdd] should be added at the beginning of the scene.
  /// Otherwise, they should be added at the end of the scene.
  final bool addToBeginning;

  /// If [addToBeginning] is `true`, then this is the id of the platform view
  /// to insert [viewsToAdd] before.
  ///
  /// `null` if [addToBeginning] is `false`.
  final int? viewToInsertBefore;

  const ViewListDiffResult(
      this.viewsToRemove, this.viewsToAdd, this.addToBeginning,
      {this.viewToInsertBefore});
}

/// Diff the composition order with the active composition order. It is
/// common for the composition order and active composition order to differ
/// only slightly.
///
/// Consider a scrolling list of platform views; from frame
/// to frame the composition order will change in one of two ways, depending
/// on which direction the list is scrolling. One or more views will be added
/// to the beginning of the list, and one or more views will be removed from
/// the end of the list, with the order of the unchanged middle views
/// remaining the same.
// TODO(hterkelsen): Refactor to use [longestIncreasingSubsequence] and logic
// similar to `Surface._insertChildDomNodes` to efficiently handle more cases,
// https://github.com/flutter/flutter/issues/89611.
ViewListDiffResult? diffViewList(List<int> active, List<int> next) {
  if (active.isEmpty || next.isEmpty) {
    return null;
  }
  // If the [active] and [next] lists are in the expected form described above,
  // then either the first or last element of [next] will be in [active].
  int index = active.indexOf(next.first);
  if (index != -1) {
    // Verify that the active composition order is contained, in order, in the
    // next composition order.
    for (int i = 0; i + index < active.length; i++) {
      if (active[i + index] != next[i]) {
        return null;
      }
      if (i == next.length - 1) {
        if (index == 0) {
          return ViewListDiffResult(active.sublist(i + 1), const <int>[], true,
              viewToInsertBefore: next.first);
        } else {
          return ViewListDiffResult(
              active.sublist(0, index), const <int>[], false);
        }
      }
    }
    return ViewListDiffResult(
      active.sublist(0, index),
      next.sublist(active.length - index),
      false,
    );
  }

  index = active.lastIndexOf(next.last);
  if (index != -1) {
    for (int i = 0; index - i >= 0; i++) {
      if (next.length <= i || active[index - i] != next[next.length - 1 - i]) {
        return null;
      }
    }
    return ViewListDiffResult(
      active.sublist(index + 1),
      next.sublist(0, next.length - index - 1),
      true,
      viewToInsertBefore: active.first,
    );
  }

  return null;
}
