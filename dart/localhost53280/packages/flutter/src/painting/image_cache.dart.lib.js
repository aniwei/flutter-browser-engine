define(['dart_sdk', 'packages/flutter/src/painting/image_stream.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__painting__image_cache_dart(dart_sdk, packages__flutter__src__painting__image_stream$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const developer = dart_sdk.developer;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const image_stream = packages__flutter__src__painting__image_stream$46dart.src__painting__image_stream;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var image_cache = Object.create(dart.library);
  var $length = dartx.length;
  var $values = dartx.values;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  var $putIfAbsent = dartx.putIfAbsent;
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $first = dartx.first;
  var $keys = dartx.keys;
  var $add = dartx.add;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    LinkedMapOfObject$_PendingImage: () => (T.LinkedMapOfObject$_PendingImage = dart.constFn(_js_helper.LinkedMap$(core.Object, image_cache._PendingImage)))(),
    LinkedMapOfObject$_CachedImage: () => (T.LinkedMapOfObject$_CachedImage = dart.constFn(_js_helper.LinkedMap$(core.Object, image_cache._CachedImage)))(),
    LinkedMapOfObject$_LiveImage: () => (T.LinkedMapOfObject$_LiveImage = dart.constFn(_js_helper.LinkedMap$(core.Object, image_cache._LiveImage)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidTo_LiveImage: () => (T.VoidTo_LiveImage = dart.constFn(dart.fnType(image_cache._LiveImage, [])))(),
    ImageInfoN: () => (T.ImageInfoN = dart.constFn(dart.nullable(image_stream.ImageInfo)))(),
    ImageInfoNAndboolTovoid: () => (T.ImageInfoNAndboolTovoid = dart.constFn(dart.fnType(dart.void, [T.ImageInfoN(), core.bool])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    DurationTovoid: () => (T.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/image_cache.dart",
    "package:flutter/src/painting/image_cache.dart"
  ];
  var _pendingImages = dart.privateName(image_cache, "_pendingImages");
  var _cache = dart.privateName(image_cache, "_cache");
  var _liveImages = dart.privateName(image_cache, "_liveImages");
  var _maximumSize = dart.privateName(image_cache, "_maximumSize");
  var _maximumSizeBytes = dart.privateName(image_cache, "_maximumSizeBytes");
  var _currentSizeBytes = dart.privateName(image_cache, "_currentSizeBytes");
  var _checkCacheSize = dart.privateName(image_cache, "_checkCacheSize");
  var _touch = dart.privateName(image_cache, "_touch");
  var _trackLiveImage = dart.privateName(image_cache, "_trackLiveImage");
  image_cache.ImageCache = class ImageCache extends core.Object {
    get maximumSize() {
      return this[_maximumSize];
    }
    set maximumSize(value) {
      let t0;
      if (!(value !== null)) dart.assertFailed(null, I[0], 103, 12, "value != null");
      if (!(value >= 0)) dart.assertFailed(null, I[0], 104, 12, "value >= 0");
      if (value === this.maximumSize) return;
      let timelineTask = null;
      if (!false) {
        timelineTask = (t0 = new developer.TimelineTask.new(), (() => {
          t0.start("ImageCache.setMaximumSize", {arguments: new (T.IdentityMapOfString$dynamic()).from(["value", value])});
          return t0;
        })());
      }
      this[_maximumSize] = value;
      if (this.maximumSize === 0) {
        this.clear();
      } else {
        this[_checkCacheSize](timelineTask);
      }
      if (!false) {
        dart.nullCheck(timelineTask).finish();
      }
    }
    get currentSize() {
      return this[_cache][$length];
    }
    get maximumSizeBytes() {
      return this[_maximumSizeBytes];
    }
    set maximumSizeBytes(value) {
      let t0;
      if (!(value !== null)) dart.assertFailed(null, I[0], 142, 12, "value != null");
      if (!(value >= 0)) dart.assertFailed(null, I[0], 143, 12, "value >= 0");
      if (value === this[_maximumSizeBytes]) return;
      let timelineTask = null;
      if (!false) {
        timelineTask = (t0 = new developer.TimelineTask.new(), (() => {
          t0.start("ImageCache.setMaximumSizeBytes", {arguments: new (T.IdentityMapOfString$dynamic()).from(["value", value])});
          return t0;
        })());
      }
      this[_maximumSizeBytes] = value;
      if (this[_maximumSizeBytes] === 0) {
        this.clear();
      } else {
        this[_checkCacheSize](timelineTask);
      }
      if (!false) {
        dart.nullCheck(timelineTask).finish();
      }
    }
    get currentSizeBytes() {
      return this[_currentSizeBytes];
    }
    clear() {
      if (!false) {
        developer.Timeline.instantSync("ImageCache.clear", {arguments: new (T.IdentityMapOfString$dynamic()).from(["pendingImages", this[_pendingImages][$length], "keepAliveImages", this[_cache][$length], "liveImages", this[_liveImages][$length], "currentSizeInBytes", this[_currentSizeBytes]])});
      }
      for (let image of this[_cache][$values]) {
        image.dispose();
      }
      this[_cache][$clear]();
      this[_pendingImages][$clear]();
      this[_currentSizeBytes] = 0;
    }
    evict(key, opts) {
      let t0;
      let includeLive = opts && 'includeLive' in opts ? opts.includeLive : true;
      if (!(includeLive !== null)) dart.assertFailed(null, I[0], 239, 12, "includeLive != null");
      if (includeLive) {
        let image = this[_liveImages][$remove](key);
        t0 = image;
        t0 == null ? null : t0.dispose();
      }
      let pendingImage = this[_pendingImages][$remove](key);
      if (pendingImage != null) {
        if (!false) {
          developer.Timeline.instantSync("ImageCache.evict", {arguments: new (T.IdentityMapOfString$dynamic()).from(["type", "pending"])});
        }
        pendingImage.removeListener();
        return true;
      }
      let image = this[_cache][$remove](key);
      if (image != null) {
        if (!false) {
          developer.Timeline.instantSync("ImageCache.evict", {arguments: new (T.IdentityMapOfString$dynamic()).from(["type", "keepAlive", "sizeInBytes", image.sizeBytes])});
        }
        this[_currentSizeBytes] = this[_currentSizeBytes] - dart.nullCheck(image.sizeBytes);
        image.dispose();
        return true;
      }
      if (!false) {
        developer.Timeline.instantSync("ImageCache.evict", {arguments: new (T.IdentityMapOfString$dynamic()).from(["type", "miss"])});
      }
      return false;
    }
    [_touch](key, image, timelineTask) {
      if (!(timelineTask != null)) dart.assertFailed(null, I[0], 285, 12, "timelineTask != null");
      if (image.sizeBytes != null && dart.nullCheck(image.sizeBytes) <= this.maximumSizeBytes && this.maximumSize > 0) {
        this[_currentSizeBytes] = this[_currentSizeBytes] + dart.nullCheck(image.sizeBytes);
        this[_cache][$_set](key, image);
        this[_checkCacheSize](timelineTask);
      } else {
        image.dispose();
      }
    }
    [_trackLiveImage](key, completer, sizeBytes) {
      let t0;
      t0 = this[_liveImages][$putIfAbsent](key, dart.fn(() => new image_cache._LiveImage.new(completer, dart.fn(() => {
        this[_liveImages][$remove](key);
      }, T.VoidTovoid())), T.VoidTo_LiveImage()));
      t0.sizeBytes == null ? t0.sizeBytes = sizeBytes : null;
    }
    putIfAbsent(key, loader, opts) {
      let t0, t0$, t1;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (!(key !== null)) dart.assertFailed(null, I[0], 323, 12, "key != null");
      if (!(loader !== null)) dart.assertFailed(null, I[0], 324, 12, "loader != null");
      let timelineTask = null;
      let listenerTask = null;
      if (!false) {
        timelineTask = (t0 = new developer.TimelineTask.new(), (() => {
          t0.start("ImageCache.putIfAbsent", {arguments: new (T.IdentityMapOfString$dynamic()).from(["key", key[$toString]()])});
          return t0;
        })());
      }
      let result = (t0$ = this[_pendingImages][$_get](key), t0$ == null ? null : t0$.completer);
      if (result != null) {
        if (!false) {
          dart.nullCheck(timelineTask).finish({arguments: new (T.IdentityMapOfString$dynamic()).from(["result", "pending"])});
        }
        return result;
      }
      let image = this[_cache][$remove](key);
      if (image != null) {
        if (!false) {
          dart.nullCheck(timelineTask).finish({arguments: new (T.IdentityMapOfString$dynamic()).from(["result", "keepAlive"])});
        }
        this[_trackLiveImage](key, image.completer, image.sizeBytes);
        this[_cache][$_set](key, image);
        return image.completer;
      }
      let liveImage = this[_liveImages][$_get](key);
      if (liveImage != null) {
        this[_touch](key, new image_cache._CachedImage.new(liveImage.completer, {sizeBytes: liveImage.sizeBytes}), timelineTask);
        if (!false) {
          dart.nullCheck(timelineTask).finish({arguments: new (T.IdentityMapOfString$dynamic()).from(["result", "keepAlive"])});
        }
        return liveImage.completer;
      }
      try {
        result = loader();
        this[_trackLiveImage](key, result, null);
      } catch (e) {
        let error = dart.getThrown(e);
        let stackTrace = dart.stackTrace(e);
        if (core.Object.is(error)) {
          if (!false) {
            dart.nullCheck(timelineTask).finish({arguments: new (T.IdentityMapOfString$dynamic()).from(["result", "error", "error", error[$toString](), "stackTrace", stackTrace.toString()])});
          }
          if (onError != null) {
            onError(error, stackTrace);
            return null;
          } else {
            dart.rethrow(e);
          }
        } else
          throw e;
      }
      if (!false) {
        listenerTask = (t1 = new developer.TimelineTask.new({parent: timelineTask}), (() => {
          t1.start("listener");
          return t1;
        })());
      }
      let listenedOnce = false;
      let untrackedPendingImage = null;
      const listener = (info, syncCall) => {
        let t1;
        let sizeBytes = null;
        if (info != null) {
          sizeBytes = info.sizeBytes;
          info.dispose();
        }
        let image = new image_cache._CachedImage.new(dart.nullCheck(result), {sizeBytes: sizeBytes});
        this[_trackLiveImage](key, result, sizeBytes);
        if (untrackedPendingImage == null) {
          this[_touch](key, image, listenerTask);
        } else {
          image.dispose();
        }
        let pendingImage = (t1 = untrackedPendingImage, t1 == null ? this[_pendingImages][$remove](key) : t1);
        if (pendingImage != null) {
          pendingImage.removeListener();
        }
        if (!false && !listenedOnce) {
          dart.nullCheck(listenerTask).finish({arguments: new (T.IdentityMapOfString$dynamic()).from(["syncCall", syncCall, "sizeInBytes", sizeBytes])});
          dart.nullCheck(timelineTask).finish({arguments: new (T.IdentityMapOfString$dynamic()).from(["currentSizeBytes", this.currentSizeBytes, "currentSize", this.currentSize])});
        }
        listenedOnce = true;
      };
      dart.fn(listener, T.ImageInfoNAndboolTovoid());
      let streamListener = new image_stream.ImageStreamListener.new(listener);
      if (this.maximumSize > 0 && this.maximumSizeBytes > 0) {
        this[_pendingImages][$_set](key, new image_cache._PendingImage.new(result, streamListener));
      } else {
        untrackedPendingImage = new image_cache._PendingImage.new(result, streamListener);
      }
      result.addListener(streamListener);
      return result;
    }
    statusForKey(key) {
      return new image_cache.ImageCacheStatus.__({pending: this[_pendingImages][$containsKey](key), keepAlive: this[_cache][$containsKey](key), live: this[_liveImages][$containsKey](key)});
    }
    containsKey(key) {
      return this[_pendingImages][$_get](key) != null || this[_cache][$_get](key) != null;
    }
    get liveImageCount() {
      return this[_liveImages][$length];
    }
    get pendingImageCount() {
      return this[_pendingImages][$length];
    }
    clearLiveImages() {
      for (let image of this[_liveImages][$values]) {
        image.dispose();
      }
      this[_liveImages][$clear]();
    }
    [_checkCacheSize](timelineTask) {
      let t1;
      let finishArgs = new (T.IdentityMapOfString$dynamic()).new();
      let checkCacheTask = null;
      if (!false) {
        checkCacheTask = (t1 = new developer.TimelineTask.new({parent: timelineTask}), (() => {
          t1.start("checkCacheSize");
          return t1;
        })());
        finishArgs[$_set]("evictedKeys", T.JSArrayOfString().of([]));
        finishArgs[$_set]("currentSize", this.currentSize);
        finishArgs[$_set]("currentSizeBytes", this.currentSizeBytes);
      }
      while (this[_currentSizeBytes] > this[_maximumSizeBytes] || this[_cache][$length] > this[_maximumSize]) {
        let key = this[_cache][$keys][$first];
        let image = dart.nullCheck(this[_cache][$_get](key));
        this[_currentSizeBytes] = this[_currentSizeBytes] - dart.nullCheck(image.sizeBytes);
        image.dispose();
        this[_cache][$remove](key);
        if (!false) {
          T.ListOfString().as(finishArgs[$_get]("evictedKeys"))[$add](key[$toString]());
        }
      }
      if (!false) {
        finishArgs[$_set]("endSize", this.currentSize);
        finishArgs[$_set]("endSizeBytes", this.currentSizeBytes);
        dart.nullCheck(checkCacheTask).finish({arguments: finishArgs});
      }
      if (!(this[_currentSizeBytes] >= 0)) dart.assertFailed(null, I[0], 528, 12, "_currentSizeBytes >= 0");
      if (!(this[_cache][$length] <= this.maximumSize)) dart.assertFailed(null, I[0], 529, 12, "_cache.length <= maximumSize");
      if (!(this[_currentSizeBytes] <= this.maximumSizeBytes)) dart.assertFailed(null, I[0], 530, 12, "_currentSizeBytes <= maximumSizeBytes");
    }
    static ['_#new#tearOff']() {
      return new image_cache.ImageCache.new();
    }
  };
  (image_cache.ImageCache.new = function() {
    this[_pendingImages] = new (T.LinkedMapOfObject$_PendingImage()).new();
    this[_cache] = new (T.LinkedMapOfObject$_CachedImage()).new();
    this[_liveImages] = new (T.LinkedMapOfObject$_LiveImage()).new();
    this[_maximumSize] = 1000;
    this[_maximumSizeBytes] = 104857600;
    this[_currentSizeBytes] = 0;
    ;
  }).prototype = image_cache.ImageCache.prototype;
  dart.addTypeTests(image_cache.ImageCache);
  dart.addTypeCaches(image_cache.ImageCache);
  dart.setMethodSignature(image_cache.ImageCache, () => ({
    __proto__: dart.getMethods(image_cache.ImageCache.__proto__),
    clear: dart.fnType(dart.void, []),
    evict: dart.fnType(core.bool, [core.Object], {includeLive: core.bool}, {}),
    [_touch]: dart.fnType(dart.void, [core.Object, image_cache._CachedImage, dart.nullable(developer.TimelineTask)]),
    [_trackLiveImage]: dart.fnType(dart.void, [core.Object, image_stream.ImageStreamCompleter, dart.nullable(core.int)]),
    putIfAbsent: dart.fnType(dart.nullable(image_stream.ImageStreamCompleter), [core.Object, dart.fnType(image_stream.ImageStreamCompleter, [])], {onError: dart.nullable(dart.fnType(dart.void, [core.Object, dart.nullable(core.StackTrace)]))}, {}),
    statusForKey: dart.fnType(image_cache.ImageCacheStatus, [core.Object]),
    containsKey: dart.fnType(core.bool, [core.Object]),
    clearLiveImages: dart.fnType(dart.void, []),
    [_checkCacheSize]: dart.fnType(dart.void, [dart.nullable(developer.TimelineTask)])
  }));
  dart.setGetterSignature(image_cache.ImageCache, () => ({
    __proto__: dart.getGetters(image_cache.ImageCache.__proto__),
    maximumSize: core.int,
    currentSize: core.int,
    maximumSizeBytes: core.int,
    currentSizeBytes: core.int,
    liveImageCount: core.int,
    pendingImageCount: core.int
  }));
  dart.setSetterSignature(image_cache.ImageCache, () => ({
    __proto__: dart.getSetters(image_cache.ImageCache.__proto__),
    maximumSize: core.int,
    maximumSizeBytes: core.int
  }));
  dart.setLibraryUri(image_cache.ImageCache, I[1]);
  dart.setFieldSignature(image_cache.ImageCache, () => ({
    __proto__: dart.getFields(image_cache.ImageCache.__proto__),
    [_pendingImages]: dart.finalFieldType(core.Map$(core.Object, image_cache._PendingImage)),
    [_cache]: dart.finalFieldType(core.Map$(core.Object, image_cache._CachedImage)),
    [_liveImages]: dart.finalFieldType(core.Map$(core.Object, image_cache._LiveImage)),
    [_maximumSize]: dart.fieldType(core.int),
    [_maximumSizeBytes]: dart.fieldType(core.int),
    [_currentSizeBytes]: dart.fieldType(core.int)
  }));
  var pending$ = dart.privateName(image_cache, "ImageCacheStatus.pending");
  var keepAlive$ = dart.privateName(image_cache, "ImageCacheStatus.keepAlive");
  var live$ = dart.privateName(image_cache, "ImageCacheStatus.live");
  image_cache.ImageCacheStatus = class ImageCacheStatus extends core.Object {
    get pending() {
      return this[pending$];
    }
    set pending(value) {
      super.pending = value;
    }
    get keepAlive() {
      return this[keepAlive$];
    }
    set keepAlive(value) {
      super.keepAlive = value;
    }
    get live() {
      return this[live$];
    }
    set live(value) {
      super.live = value;
    }
    static ['_#_#tearOff'](opts) {
      let pending = opts && 'pending' in opts ? opts.pending : false;
      let keepAlive = opts && 'keepAlive' in opts ? opts.keepAlive : false;
      let live = opts && 'live' in opts ? opts.live : false;
      return new image_cache.ImageCacheStatus.__({pending: pending, keepAlive: keepAlive, live: live});
    }
    get tracked() {
      return this.pending || this.keepAlive || this.live;
    }
    get untracked() {
      return !this.pending && !this.keepAlive && !this.live;
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) {
        return false;
      }
      return image_cache.ImageCacheStatus.is(other) && other.pending === this.pending && other.keepAlive === this.keepAlive && other.live === this.live;
    }
    get hashCode() {
      return ui.hashValues(this.pending, this.keepAlive, this.live);
    }
    toString() {
      return object.objectRuntimeType(this, "ImageCacheStatus") + "(pending: " + dart.str(this.pending) + ", live: " + dart.str(this.live) + ", keepAlive: " + dart.str(this.keepAlive) + ")";
    }
  };
  (image_cache.ImageCacheStatus.__ = function(opts) {
    let pending = opts && 'pending' in opts ? opts.pending : false;
    let keepAlive = opts && 'keepAlive' in opts ? opts.keepAlive : false;
    let live = opts && 'live' in opts ? opts.live : false;
    this[pending$] = pending;
    this[keepAlive$] = keepAlive;
    this[live$] = live;
    if (!(!pending || !keepAlive)) dart.assertFailed(null, I[0], 557, 15, "!pending || !keepAlive");
    ;
  }).prototype = image_cache.ImageCacheStatus.prototype;
  dart.addTypeTests(image_cache.ImageCacheStatus);
  dart.addTypeCaches(image_cache.ImageCacheStatus);
  dart.setGetterSignature(image_cache.ImageCacheStatus, () => ({
    __proto__: dart.getGetters(image_cache.ImageCacheStatus.__proto__),
    tracked: core.bool,
    untracked: core.bool
  }));
  dart.setLibraryUri(image_cache.ImageCacheStatus, I[1]);
  dart.setFieldSignature(image_cache.ImageCacheStatus, () => ({
    __proto__: dart.getFields(image_cache.ImageCacheStatus.__proto__),
    pending: dart.finalFieldType(core.bool),
    keepAlive: dart.finalFieldType(core.bool),
    live: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(image_cache.ImageCacheStatus, ['_equals', 'toString']);
  dart.defineExtensionAccessors(image_cache.ImageCacheStatus, ['hashCode']);
  image_cache._CachedImageBase = class _CachedImageBase extends core.Object {
    dispose() {
      if (!(this.handle != null)) dart.assertFailed(null, I[0], 622, 12, "handle != null");
      dart.nullCheck(binding.SchedulerBinding.instance).addPostFrameCallback(dart.fn(timeStamp => {
        let t1;
        if (!(this.handle != null)) dart.assertFailed(null, I[0], 626, 14, "handle != null");
        t1 = this.handle;
        t1 == null ? null : t1.dispose();
        this.handle = null;
      }, T.DurationTovoid()));
    }
  };
  (image_cache._CachedImageBase.new = function(completer, opts) {
    let sizeBytes = opts && 'sizeBytes' in opts ? opts.sizeBytes : null;
    this.completer = completer;
    this.sizeBytes = sizeBytes;
    if (!(completer !== null)) dart.assertFailed(null, I[0], 613, 15, "completer != null");
    this.handle = completer.keepAlive();
    ;
  }).prototype = image_cache._CachedImageBase.prototype;
  dart.addTypeTests(image_cache._CachedImageBase);
  dart.addTypeCaches(image_cache._CachedImageBase);
  dart.setMethodSignature(image_cache._CachedImageBase, () => ({
    __proto__: dart.getMethods(image_cache._CachedImageBase.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(image_cache._CachedImageBase, I[1]);
  dart.setFieldSignature(image_cache._CachedImageBase, () => ({
    __proto__: dart.getFields(image_cache._CachedImageBase.__proto__),
    completer: dart.finalFieldType(image_stream.ImageStreamCompleter),
    sizeBytes: dart.fieldType(dart.nullable(core.int)),
    handle: dart.fieldType(dart.nullable(image_stream.ImageStreamCompleterHandle))
  }));
  image_cache._CachedImage = class _CachedImage extends image_cache._CachedImageBase {
    static ['_#new#tearOff'](completer, opts) {
      let sizeBytes = opts && 'sizeBytes' in opts ? opts.sizeBytes : null;
      return new image_cache._CachedImage.new(completer, {sizeBytes: sizeBytes});
    }
  };
  (image_cache._CachedImage.new = function(completer, opts) {
    let sizeBytes = opts && 'sizeBytes' in opts ? opts.sizeBytes : null;
    image_cache._CachedImage.__proto__.new.call(this, completer, {sizeBytes: sizeBytes});
    ;
  }).prototype = image_cache._CachedImage.prototype;
  dart.addTypeTests(image_cache._CachedImage);
  dart.addTypeCaches(image_cache._CachedImage);
  dart.setLibraryUri(image_cache._CachedImage, I[1]);
  var ___LiveImage__handleRemove = dart.privateName(image_cache, "_#_LiveImage#_handleRemove");
  var _handleRemove = dart.privateName(image_cache, "_handleRemove");
  image_cache._LiveImage = class _LiveImage extends image_cache._CachedImageBase {
    static ['_#new#tearOff'](completer, handleRemove, opts) {
      let sizeBytes = opts && 'sizeBytes' in opts ? opts.sizeBytes : null;
      return new image_cache._LiveImage.new(completer, handleRemove, {sizeBytes: sizeBytes});
    }
    get [_handleRemove]() {
      let t1;
      t1 = this[___LiveImage__handleRemove];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_handleRemove")) : t1;
    }
    set [_handleRemove](t1) {
      this[___LiveImage__handleRemove] = t1;
    }
    dispose() {
      this.completer.removeOnLastListenerRemovedCallback(this[_handleRemove]);
      super.dispose();
    }
    toString() {
      return diagnostics.describeIdentity(this);
    }
  };
  (image_cache._LiveImage.new = function(completer, handleRemove, opts) {
    let sizeBytes = opts && 'sizeBytes' in opts ? opts.sizeBytes : null;
    this[___LiveImage__handleRemove] = null;
    image_cache._LiveImage.__proto__.new.call(this, completer, {sizeBytes: sizeBytes});
    this[_handleRemove] = dart.fn(() => {
      handleRemove();
      this.dispose();
    }, T.VoidTovoid());
    completer.addOnLastListenerRemovedCallback(this[_handleRemove]);
  }).prototype = image_cache._LiveImage.prototype;
  dart.addTypeTests(image_cache._LiveImage);
  dart.addTypeCaches(image_cache._LiveImage);
  dart.setGetterSignature(image_cache._LiveImage, () => ({
    __proto__: dart.getGetters(image_cache._LiveImage.__proto__),
    [_handleRemove]: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(image_cache._LiveImage, () => ({
    __proto__: dart.getSetters(image_cache._LiveImage.__proto__),
    [_handleRemove]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(image_cache._LiveImage, I[1]);
  dart.setFieldSignature(image_cache._LiveImage, () => ({
    __proto__: dart.getFields(image_cache._LiveImage.__proto__),
    [___LiveImage__handleRemove]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
  dart.defineExtensionMethods(image_cache._LiveImage, ['toString']);
  image_cache._PendingImage = class _PendingImage extends core.Object {
    static ['_#new#tearOff'](completer, listener) {
      return new image_cache._PendingImage.new(completer, listener);
    }
    removeListener() {
      this.completer.removeListener(this.listener);
    }
  };
  (image_cache._PendingImage.new = function(completer, listener) {
    this.completer = completer;
    this.listener = listener;
    ;
  }).prototype = image_cache._PendingImage.prototype;
  dart.addTypeTests(image_cache._PendingImage);
  dart.addTypeCaches(image_cache._PendingImage);
  dart.setMethodSignature(image_cache._PendingImage, () => ({
    __proto__: dart.getMethods(image_cache._PendingImage.__proto__),
    removeListener: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(image_cache._PendingImage, I[1]);
  dart.setFieldSignature(image_cache._PendingImage, () => ({
    __proto__: dart.getFields(image_cache._PendingImage.__proto__),
    completer: dart.finalFieldType(image_stream.ImageStreamCompleter),
    listener: dart.finalFieldType(image_stream.ImageStreamListener)
  }));
  dart.defineLazy(image_cache, {
    /*image_cache._kDefaultSize*/get _kDefaultSize() {
      return 1000;
    },
    /*image_cache._kDefaultSizeBytes*/get _kDefaultSizeBytes() {
      return 104857600;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/image_cache.dart", {
    "package:flutter/src/painting/image_cache.dart": image_cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_cache.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/image_cache.dart.lib.js"}');
  // Exports:
  return {
    src__painting__image_cache: image_cache
  };
}));

//# sourceMappingURL=image_cache.dart.lib.js.map
