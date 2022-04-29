import { Collector } from './Collector'

export class ProductionCollector extends Collector {
  ProductionCollector() {
    _skObjectFinalizationRegistry =
        SkObjectFinalizationRegistry(js.allowInterop((SkDeletable deletable) {
      // This is called when GC decides to collect the wrapper object and
      // notify us, which may happen after the object is already deleted
      // explicitly, e.g. when its ref count drops to zero. When that happens
      // skip collection of this object.
      if (!deletable.isDeleted()) {
        collect(deletable);
      }
    }));
  }

  late final SkObjectFinalizationRegistry _skObjectFinalizationRegistry;
  List<SkDeletable> _skiaObjectCollectionQueue = <SkDeletable>[];
  Timer? _skiaObjectCollectionTimer;

  @override
  void register(Object wrapper, SkDeletable deletable) {
    if (Instrumentation.enabled) {
      Instrumentation.instance.incrementCounter(
        '${deletable.constructor.name} registered',
      );
    }
    _skObjectFinalizationRegistry.register(wrapper, deletable);
  }

  /// Schedules a Skia object for deletion in an asap timer.
  ///
  /// A timer is used for the following reasons:
  ///
  ///  - Deleting the object immediately may lead to dangling pointer as the Skia
  ///    object may still be used by a function in the current frame. For example,
  ///    a `CkPaint` + `SkPaint` pair may be created by the framework, passed to
  ///    the engine, and the `CkPaint` dropped immediately. Because GC can kick in
  ///    any time, including in the middle of the event, we may delete `SkPaint`
  ///    prematurely.
  ///  - A microtask, while solves the problem above, would prevent the event from
  ///    yielding to the graphics system to render the frame on the screen if there
  ///    is a large number of objects to delete, causing jank.
  ///
  /// Because scheduling a timer is expensive, the timer is shared by all objects
  /// deleted this frame. No timer is created if no objects were scheduled for
  /// deletion.
  @override
  void collect(SkDeletable deletable) {
    assert(
      !deletable.isDeleted(),
      'Attempted to delete an already deleted Skia object.',
    );
    _skiaObjectCollectionQueue.add(deletable);

    _skiaObjectCollectionTimer ??= Timer(Duration.zero, () {
      // Null out the timer so we can schedule a new one next time objects are
      // scheduled for deletion.
      _skiaObjectCollectionTimer = null;
      collectSkiaObjectsNow();
    });
  }

  /// Deletes all Skia objects pending deletion synchronously.
  ///
  /// After calling this method [_skiaObjectCollectionQueue] is empty.
  ///
  /// Throws a [SkiaObjectCollectionError] if CanvasKit fails to delete at least
  /// one object. The error is populated with information about the first failed
  /// object. Upon an error the collection continues and the collection queue is
  /// emptied out to prevent memory leaks. This may happen, for example, when the
  /// same object is deleted more than once.
  void collectSkiaObjectsNow() {
    html.window.performance.mark('SkObject collection-start');
    final int length = _skiaObjectCollectionQueue.length;
    dynamic firstError;
    StackTrace? firstStackTrace;
    for (int i = 0; i < length; i++) {
      final SkDeletable deletable = _skiaObjectCollectionQueue[i];
      if (deletable.isDeleted()) {
        // Some Skia objects are ref counted and are deleted before GC and/or
        // the collection timer begins collecting them. So we have to check
        // again if the objects is worth collecting.
        continue;
      }
      if (Instrumentation.enabled) {
        Instrumentation.instance.incrementCounter(
          '${deletable.constructor.name} deleted',
        );
      }
      try {
        deletable.delete();
      } catch (error, stackTrace) {
        // Remember the error, but keep going. If for some reason CanvasKit fails
        // to delete an object we still want to delete other objects and empty
        // out the queue. Otherwise, the queue will never be flushed and keep
        // accumulating objects, a.k.a. memory leak.
        if (firstError == null) {
          firstError = error;
          firstStackTrace = stackTrace;
        }
      }
    }
    _skiaObjectCollectionQueue = <SkDeletable>[];

    html.window.performance.mark('SkObject collection-end');
    html.window.performance.measure('SkObject collection',
        'SkObject collection-start', 'SkObject collection-end');

    // It's safe to throw the error here, now that we've processed the queue.
    if (firstError != null) {
      throw SkiaObjectCollectionError(firstError, firstStackTrace);
    }
  }
}
