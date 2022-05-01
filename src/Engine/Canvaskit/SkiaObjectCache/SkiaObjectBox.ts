import { UnsupportedError } from '@Shared';
import { SkDeletable } from '@Skia';
import invariant from 'ts-invariant';
import { SkiaObject } from './SkiaObject'
import { SkiaObjects } from './SkiaObjects'

export class SkiaObjectBox<R extends StackTraceDebugger, T> extends SkiaObject<T> {
  static resurrectable(
    R debugReferrer, T initialValue, this._resurrector)
    : assert(!browserSupportsFinalizationRegistry) {
  _initialize(debugReferrer, initialValue);
  
    SkiaObjects.manageExpensive(this);
  }

  public debugReferrers: Set<R> = new Set<R>()
  public _refCount = 1
  public get refCount () {
    return this._refCount
  } 

  public get skiaObject {
    this.rawSkiaObject ?? this.doResurrect()
  } 
  public rawSkiaObject: T | null = null
  public skDeletable: SkDeletable | null = null
  public resurrector: Resurrector<T> | null = null

  constructor (debugReferrer: R, initialValue: T) {
    super()


  }
      : assert(browserSupportsFinalizationRegistry),
        _resurrector = null {
    _initialize(debugReferrer, initialValue);
    Collector.instance.register(this, _skDeletable!);
  }

  initialize (debugReferrer: R, initialValue: T) {
    this.update(initialValue)
    invariant(this.refCount == debugReferrers.length);
  }

  /// If asserts are enabled, the [StackTrace]s representing when a reference
  /// was created.
  List<StackTrace> debugGetStackTraces() {
    if (assertionsEnabled) {
      return debugReferrers
          .map<StackTrace>((R referrer) => referrer.debugStackTrace)
          .toList();
    }
    throw new UnsupportedError('')
  }

  update (newSkiaObject: T | null = null) {
    this.rawSkiaObject = newSkiaObject
    this.skDeletable = newSkiaObject as SkDeletable
  }

  

  doResurrect (): T {
    
    invariant(this.resurrector !== null)
    assert(!_isDeletedPermanently, 'Cannot use deleted object.');
    _update(_resurrector!());
    if (Instrumentation.enabled) {
      Instrumentation.instance.incrementCounter(
        '${_skDeletable?.constructor.name} resurrected',
      );
    }
    SkiaObjects.manageExpensive(this);
    return skiaObject;
  }

  delete () {
    this._skDeletable?.delete()
  }

  didDelete () {
    this.update(null)
  }

  /// Whether this object has been deleted permanently.
  ///
  /// If this is true it will remain true forever, and the Skia object is no
  /// longer resurrectable.
  ///
  /// See also [isDeletedTemporarily].
  bool get isDeletedPermanently => _isDeletedPermanently;
  bool _isDeletedPermanently = false;

  /// Whether the underlying [rawSkiaObject] has been deleted, but it may still
  /// be resurrected (see [SkiaObjectBox.resurrectable]).
  bool get isDeletedTemporarily =>
      rawSkiaObject == null && !_isDeletedPermanently;

  /// Increases the reference count of this box because a new object began
  /// sharing ownership of the underlying [skiaObject].
  ///
  /// Clones must be [dispose]d when finished.
  void ref(R debugReferrer) {
    assert(!_isDeletedPermanently,
        'Cannot increment ref count on a deleted handle.');
    assert(_refCount > 0);
    assert(
      debugReferrers.add(debugReferrer),
      'Attempted to increment ref count by the same referrer more than once.',
    );
    _refCount += 1;
    assert(refCount == debugReferrers.length);
  }

  /// Decrements the reference count for the [skObject].
  ///
  /// Does nothing if the object has already been deleted.
  ///
  /// If this causes the reference count to drop to zero, deletes the
  /// [skObject].
  void unref(R debugReferrer) {
    assert(!_isDeletedPermanently,
        'Attempted to unref an already deleted Skia object.');
    assert(
      debugReferrers.remove(debugReferrer),
      'Attempted to decrement ref count by the same referrer more than once.',
    );
    _refCount -= 1;
    assert(refCount == debugReferrers.length);
    if (_refCount == 0) {
      // The object may be null because it was deleted temporarily, i.e. it was
      // expecting the possibility of resurrection.
      if (_skDeletable != null) {
        if (browserSupportsFinalizationRegistry) {
          Collector.instance.collect(_skDeletable!);
        } else {
          delete();
          didDelete();
        }
      }
      rawSkiaObject = null;
      _skDeletable = null;
      _resurrector = null;
      _isDeletedPermanently = true;
    }
  }
}
