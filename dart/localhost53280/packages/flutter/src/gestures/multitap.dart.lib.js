define(['dart_sdk', 'packages/flutter/src/gestures/binding.dart', 'packages/flutter/src/gestures/events.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/gesture_settings.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/tap.dart', 'packages/flutter/src/gestures/constants.dart', 'packages/flutter/src/gestures/recognizer.dart'], (function load__packages__flutter__src__gestures__multitap_dart(dart_sdk, packages__flutter__src__gestures__binding$46dart, packages__flutter__src__gestures__events$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__gesture_settings$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__tap$46dart, packages__flutter__src__gestures__constants$46dart, packages__flutter__src__gestures__recognizer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const gesture_settings = packages__flutter__src__gestures__gesture_settings$46dart.src__gestures__gesture_settings;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const tap = packages__flutter__src__gestures__tap$46dart.src__gestures__tap;
  const constants = packages__flutter__src__gestures__constants$46dart.src__gestures__constants;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  var multitap = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $_equals = dartx._equals;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $values = dartx.values;
  var $toList = dartx.toList;
  var $forEach = dartx.forEach;
  var $containsKey = dartx.containsKey;
  var $last = dartx.last;
  var $length = dartx.length;
  var $clear = dartx.clear;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfint$_TapTracker: () => (T.IdentityMapOfint$_TapTracker = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapTracker)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    IdentityMapOfint$_TapGesture: () => (T.IdentityMapOfint$_TapGesture = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapGesture)))(),
    ListOf_TapGesture: () => (T.ListOf_TapGesture = dart.constFn(core.List$(multitap._TapGesture)))(),
    JSArrayOf_TapTracker: () => (T.JSArrayOf_TapTracker = dart.constFn(_interceptors.JSArray$(multitap._TapTracker)))(),
    IdentityMapOfint$GestureDisposition: () => (T.IdentityMapOfint$GestureDisposition = dart.constFn(_js_helper.IdentityMap$(core.int, arena.GestureDisposition)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/multitap.dart",
    "package:flutter/src/gestures/multitap.dart"
  ];
  var _timeout = dart.privateName(multitap, "_timeout");
  var _onTimeout = dart.privateName(multitap, "_onTimeout");
  multitap._CountdownZoned = class _CountdownZoned extends core.Object {
    static ['_#new#tearOff'](opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      return new multitap._CountdownZoned.new({duration: duration});
    }
    get timeout() {
      return this[_timeout];
    }
    [_onTimeout]() {
      this[_timeout] = true;
    }
  };
  (multitap._CountdownZoned.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    this[_timeout] = false;
    if (!(duration !== null)) dart.assertFailed(null, I[0], 44, 17, "duration != null");
    async.Timer.new(duration, dart.bind(this, _onTimeout));
  }).prototype = multitap._CountdownZoned.prototype;
  dart.addTypeTests(multitap._CountdownZoned);
  dart.addTypeCaches(multitap._CountdownZoned);
  dart.setMethodSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getMethods(multitap._CountdownZoned.__proto__),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getGetters(multitap._CountdownZoned.__proto__),
    timeout: core.bool
  }));
  dart.setLibraryUri(multitap._CountdownZoned, I[1]);
  dart.setFieldSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getFields(multitap._CountdownZoned.__proto__),
    [_timeout]: dart.fieldType(core.bool)
  }));
  var _isTrackingPointer = dart.privateName(multitap, "_isTrackingPointer");
  var _initialGlobalPosition = dart.privateName(multitap, "_initialGlobalPosition");
  var _doubleTapMinTimeCountdown = dart.privateName(multitap, "_doubleTapMinTimeCountdown");
  multitap._TapTracker = class _TapTracker extends core.Object {
    static ['_#new#tearOff'](opts) {
      let event = opts && 'event' in opts ? opts.event : null;
      let entry = opts && 'entry' in opts ? opts.entry : null;
      let doubleTapMinTime = opts && 'doubleTapMinTime' in opts ? opts.doubleTapMinTime : null;
      let gestureSettings = opts && 'gestureSettings' in opts ? opts.gestureSettings : null;
      return new multitap._TapTracker.new({event: event, entry: entry, doubleTapMinTime: doubleTapMinTime, gestureSettings: gestureSettings});
    }
    startTrackingPointer(route, transform) {
      if (!this[_isTrackingPointer]) {
        this[_isTrackingPointer] = true;
        dart.nullCheck(binding.GestureBinding.instance).pointerRouter.addRoute(this.pointer, route, transform);
      }
    }
    stopTrackingPointer(route) {
      if (this[_isTrackingPointer]) {
        this[_isTrackingPointer] = false;
        dart.nullCheck(binding.GestureBinding.instance).pointerRouter.removeRoute(this.pointer, route);
      }
    }
    isWithinGlobalTolerance(event, tolerance) {
      let offset = event.position['-'](this[_initialGlobalPosition]);
      return offset.distance <= tolerance;
    }
    hasElapsedMinTime() {
      return this[_doubleTapMinTimeCountdown].timeout;
    }
    hasSameButton(event) {
      return event.buttons === this.initialButtons;
    }
  };
  (multitap._TapTracker.new = function(opts) {
    let event = opts && 'event' in opts ? opts.event : null;
    let entry = opts && 'entry' in opts ? opts.entry : null;
    let doubleTapMinTime = opts && 'doubleTapMinTime' in opts ? opts.doubleTapMinTime : null;
    let gestureSettings = opts && 'gestureSettings' in opts ? opts.gestureSettings : null;
    this[_isTrackingPointer] = false;
    this.entry = entry;
    this.gestureSettings = gestureSettings;
    if (!(doubleTapMinTime !== null)) dart.assertFailed(null, I[0], 65, 15, "doubleTapMinTime != null");
    if (!(event !== null)) dart.assertFailed(null, I[0], 66, 15, "event != null");
    if (!(event.buttons !== null)) dart.assertFailed(null, I[0], 67, 15, "event.buttons != null");
    this.pointer = event.pointer;
    this[_initialGlobalPosition] = event.position;
    this.initialButtons = event.buttons;
    this[_doubleTapMinTimeCountdown] = new multitap._CountdownZoned.new({duration: doubleTapMinTime});
    ;
  }).prototype = multitap._TapTracker.prototype;
  dart.addTypeTests(multitap._TapTracker);
  dart.addTypeCaches(multitap._TapTracker);
  dart.setMethodSignature(multitap._TapTracker, () => ({
    __proto__: dart.getMethods(multitap._TapTracker.__proto__),
    startTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent]), dart.nullable(vector_math_64.Matrix4)]),
    stopTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    isWithinGlobalTolerance: dart.fnType(core.bool, [events.PointerEvent, core.double]),
    hasElapsedMinTime: dart.fnType(core.bool, []),
    hasSameButton: dart.fnType(core.bool, [events.PointerDownEvent])
  }));
  dart.setLibraryUri(multitap._TapTracker, I[1]);
  dart.setFieldSignature(multitap._TapTracker, () => ({
    __proto__: dart.getFields(multitap._TapTracker.__proto__),
    gestureSettings: dart.finalFieldType(dart.nullable(gesture_settings.DeviceGestureSettings)),
    pointer: dart.finalFieldType(core.int),
    entry: dart.finalFieldType(arena.GestureArenaEntry),
    [_initialGlobalPosition]: dart.finalFieldType(ui.Offset),
    initialButtons: dart.finalFieldType(core.int),
    [_doubleTapMinTimeCountdown]: dart.finalFieldType(multitap._CountdownZoned),
    [_isTrackingPointer]: dart.fieldType(core.bool)
  }));
  var onDoubleTapDown = dart.privateName(multitap, "DoubleTapGestureRecognizer.onDoubleTapDown");
  var onDoubleTap = dart.privateName(multitap, "DoubleTapGestureRecognizer.onDoubleTap");
  var onDoubleTapCancel = dart.privateName(multitap, "DoubleTapGestureRecognizer.onDoubleTapCancel");
  var _doubleTapTimer = dart.privateName(multitap, "_doubleTapTimer");
  var _firstTap = dart.privateName(multitap, "_firstTap");
  var _trackers = dart.privateName(multitap, "_trackers");
  var _reset = dart.privateName(multitap, "_reset");
  var _trackTap = dart.privateName(multitap, "_trackTap");
  var _stopDoubleTapTimer = dart.privateName(multitap, "_stopDoubleTapTimer");
  var _handleEvent = dart.privateName(multitap, "_handleEvent");
  var _registerFirstTap = dart.privateName(multitap, "_registerFirstTap");
  var _registerSecondTap = dart.privateName(multitap, "_registerSecondTap");
  var _reject = dart.privateName(multitap, "_reject");
  var _freezeTracker = dart.privateName(multitap, "_freezeTracker");
  var _checkCancel = dart.privateName(multitap, "_checkCancel");
  var _clearTrackers = dart.privateName(multitap, "_clearTrackers");
  var _startDoubleTapTimer = dart.privateName(multitap, "_startDoubleTapTimer");
  var _checkUp = dart.privateName(multitap, "_checkUp");
  multitap.DoubleTapGestureRecognizer = class DoubleTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onDoubleTapDown() {
      return this[onDoubleTapDown];
    }
    set onDoubleTapDown(value) {
      this[onDoubleTapDown] = value;
    }
    get onDoubleTap() {
      return this[onDoubleTap];
    }
    set onDoubleTap(value) {
      this[onDoubleTap] = value;
    }
    get onDoubleTapCancel() {
      return this[onDoubleTapCancel];
    }
    set onDoubleTapCancel(value) {
      this[onDoubleTapCancel] = value;
    }
    static ['_#new#tearOff'](opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      return new multitap.DoubleTapGestureRecognizer.new({debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    }
    isPointerAllowed(event) {
      if (this[_firstTap] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDoubleTapDown == null && this.onDoubleTap == null && this.onDoubleTapCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      }
      return super.isPointerAllowed(event);
    }
    addAllowedPointer(event) {
      if (this[_firstTap] != null) {
        if (!dart.nullCheck(this[_firstTap]).isWithinGlobalTolerance(event, 100)) {
          return;
        } else if (!dart.nullCheck(this[_firstTap]).hasElapsedMinTime() || !dart.nullCheck(this[_firstTap]).hasSameButton(event)) {
          this[_reset]();
          return this[_trackTap](event);
        } else if (this.onDoubleTapDown != null) {
          let details = new tap.TapDownDetails.new({globalPosition: event.position, localPosition: event.localPosition, kind: this.getKindForPointer(event.pointer)});
          this.invokeCallback(dart.void, "onDoubleTapDown", dart.fn(() => dart.nullCheck(this.onDoubleTapDown)(details), T.VoidTovoid()));
        }
      }
      this[_trackTap](event);
    }
    [_trackTap](event) {
      this[_stopDoubleTapTimer]();
      let tracker = new multitap._TapTracker.new({event: event, entry: dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(event.pointer, this), doubleTapMinTime: constants.kDoubleTapMinTime, gestureSettings: this.gestureSettings});
      this[_trackers][$_set](event.pointer, tracker);
      tracker.startTrackingPointer(dart.bind(this, _handleEvent), event.transform);
    }
    [_handleEvent](event) {
      let tracker = dart.nullCheck(this[_trackers][$_get](event.pointer));
      if (events.PointerUpEvent.is(event)) {
        if (this[_firstTap] == null)
          this[_registerFirstTap](tracker);
        else
          this[_registerSecondTap](tracker);
      } else if (events.PointerMoveEvent.is(event)) {
        if (!tracker.isWithinGlobalTolerance(event, 18)) this[_reject](tracker);
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reject](tracker);
      }
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
      let tracker = this[_trackers][$_get](pointer);
      if (tracker == null && this[_firstTap] != null && dart.nullCheck(this[_firstTap]).pointer === pointer) tracker = this[_firstTap];
      if (tracker != null) this[_reject](tracker);
    }
    [_reject](tracker) {
      this[_trackers][$remove](tracker.pointer);
      tracker.entry.resolve(arena.GestureDisposition.rejected);
      this[_freezeTracker](tracker);
      if (this[_firstTap] != null) {
        if (tracker[$_equals](this[_firstTap])) {
          this[_reset]();
        } else {
          this[_checkCancel]();
          if (this[_trackers][$isEmpty]) this[_reset]();
        }
      }
    }
    dispose() {
      this[_reset]();
      super.dispose();
    }
    [_reset]() {
      this[_stopDoubleTapTimer]();
      if (this[_firstTap] != null) {
        if (this[_trackers][$isNotEmpty]) this[_checkCancel]();
        let tracker = dart.nullCheck(this[_firstTap]);
        this[_firstTap] = null;
        this[_reject](tracker);
        dart.nullCheck(binding.GestureBinding.instance).gestureArena.release(tracker.pointer);
      }
      this[_clearTrackers]();
    }
    [_registerFirstTap](tracker) {
      this[_startDoubleTapTimer]();
      dart.nullCheck(binding.GestureBinding.instance).gestureArena.hold(tracker.pointer);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_clearTrackers]();
      this[_firstTap] = tracker;
    }
    [_registerSecondTap](tracker) {
      dart.nullCheck(this[_firstTap]).entry.resolve(arena.GestureDisposition.accepted);
      tracker.entry.resolve(arena.GestureDisposition.accepted);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_checkUp](tracker.initialButtons);
      this[_reset]();
    }
    [_clearTrackers]() {
      this[_trackers][$values][$toList]()[$forEach](dart.bind(this, _reject));
      if (!this[_trackers][$isEmpty]) dart.assertFailed(null, I[0], 345, 12, "_trackers.isEmpty");
    }
    [_freezeTracker](tracker) {
      tracker.stopTrackingPointer(dart.bind(this, _handleEvent));
    }
    [_startDoubleTapTimer]() {
      this[_doubleTapTimer] == null ? this[_doubleTapTimer] = async.Timer.new(constants.kDoubleTapTimeout, dart.bind(this, _reset)) : null;
    }
    [_stopDoubleTapTimer]() {
      if (this[_doubleTapTimer] != null) {
        dart.nullCheck(this[_doubleTapTimer]).cancel();
        this[_doubleTapTimer] = null;
      }
    }
    [_checkUp](buttons) {
      if (!(buttons === 1)) dart.assertFailed(null, I[0], 364, 12, "buttons == kPrimaryButton");
      if (this.onDoubleTap != null) this.invokeCallback(dart.void, "onDoubleTap", dart.nullCheck(this.onDoubleTap));
    }
    [_checkCancel]() {
      if (this.onDoubleTapCancel != null) this.invokeCallback(dart.void, "onDoubleTapCancel", dart.nullCheck(this.onDoubleTapCancel));
    }
    get debugDescription() {
      return "double tap";
    }
  };
  (multitap.DoubleTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    this[onDoubleTapDown] = null;
    this[onDoubleTap] = null;
    this[onDoubleTapCancel] = null;
    this[_doubleTapTimer] = null;
    this[_firstTap] = null;
    this[_trackers] = new (T.IdentityMapOfint$_TapTracker()).new();
    multitap.DoubleTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = multitap.DoubleTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.DoubleTapGestureRecognizer);
  dart.addTypeCaches(multitap.DoubleTapGestureRecognizer);
  dart.setMethodSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.DoubleTapGestureRecognizer.__proto__),
    [_trackTap]: dart.fnType(dart.void, [events.PointerDownEvent]),
    [_handleEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_reject]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_reset]: dart.fnType(dart.void, []),
    [_registerFirstTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_registerSecondTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_clearTrackers]: dart.fnType(dart.void, []),
    [_freezeTracker]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_startDoubleTapTimer]: dart.fnType(dart.void, []),
    [_stopDoubleTapTimer]: dart.fnType(dart.void, []),
    [_checkUp]: dart.fnType(dart.void, [core.int]),
    [_checkCancel]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.DoubleTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.DoubleTapGestureRecognizer, I[1]);
  dart.setFieldSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.DoubleTapGestureRecognizer.__proto__),
    onDoubleTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [tap.TapDownDetails]))),
    onDoubleTap: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onDoubleTapCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_doubleTapTimer]: dart.fieldType(dart.nullable(async.Timer)),
    [_firstTap]: dart.fieldType(dart.nullable(multitap._TapTracker)),
    [_trackers]: dart.finalFieldType(core.Map$(core.int, multitap._TapTracker))
  }));
  var _wonArena = dart.privateName(multitap, "_wonArena");
  var _timer = dart.privateName(multitap, "_timer");
  var _finalPosition = dart.privateName(multitap, "_finalPosition");
  var _lastPosition = dart.privateName(multitap, "_lastPosition");
  var _dispatchLongTap = dart.privateName(multitap, "_dispatchLongTap");
  var _check = dart.privateName(multitap, "_check");
  var _dispatchCancel = dart.privateName(multitap, "_dispatchCancel");
  var _dispatchTap = dart.privateName(multitap, "_dispatchTap");
  multitap._TapGesture = class _TapGesture extends multitap._TapTracker {
    static ['_#new#tearOff'](opts) {
      let gestureRecognizer = opts && 'gestureRecognizer' in opts ? opts.gestureRecognizer : null;
      let event = opts && 'event' in opts ? opts.event : null;
      let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : null;
      let gestureSettings = opts && 'gestureSettings' in opts ? opts.gestureSettings : null;
      return new multitap._TapGesture.new({gestureRecognizer: gestureRecognizer, event: event, longTapDelay: longTapDelay, gestureSettings: gestureSettings});
    }
    handleEvent(event) {
      if (!(event.pointer === this.pointer)) dart.assertFailed(null, I[0], 413, 12, "event.pointer == pointer");
      if (events.PointerMoveEvent.is(event)) {
        if (!this.isWithinGlobalTolerance(event, events.computeHitSlop(event.kind, this.gestureSettings)))
          this.cancel();
        else
          this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
      } else if (events.PointerCancelEvent.is(event)) {
        this.cancel();
      } else if (events.PointerUpEvent.is(event)) {
        this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
        this[_finalPosition] = recognizer.OffsetPair.fromEventPosition(event);
        this[_check]();
      }
    }
    stopTrackingPointer(route) {
      let t0;
      t0 = this[_timer];
      t0 == null ? null : t0.cancel();
      this[_timer] = null;
      super.stopTrackingPointer(route);
    }
    accept() {
      this[_wonArena] = true;
      this[_check]();
    }
    reject() {
      this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
      this.gestureRecognizer[_dispatchCancel](this.pointer);
    }
    cancel() {
      if (this[_wonArena])
        this.reject();
      else
        this.entry.resolve(arena.GestureDisposition.rejected);
    }
    [_check]() {
      if (this[_wonArena] && this[_finalPosition] != null) this.gestureRecognizer[_dispatchTap](this.pointer, dart.nullCheck(this[_finalPosition]));
    }
  };
  (multitap._TapGesture.new = function(opts) {
    let gestureRecognizer = opts && 'gestureRecognizer' in opts ? opts.gestureRecognizer : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : null;
    let gestureSettings = opts && 'gestureSettings' in opts ? opts.gestureSettings : null;
    this[_wonArena] = false;
    this[_timer] = null;
    this[_finalPosition] = null;
    this.gestureRecognizer = gestureRecognizer;
    this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
    multitap._TapGesture.__proto__.new.call(this, {event: events.PointerDownEvent.as(event), entry: dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(event.pointer, gestureRecognizer), doubleTapMinTime: constants.kDoubleTapMinTime, gestureSettings: gestureSettings});
    this.startTrackingPointer(dart.bind(this, 'handleEvent'), event.transform);
    if (longTapDelay['>'](core.Duration.zero)) {
      this[_timer] = async.Timer.new(longTapDelay, dart.fn(() => {
        this[_timer] = null;
        this.gestureRecognizer[_dispatchLongTap](event.pointer, this[_lastPosition]);
      }, T.VoidTovoid()));
    }
  }).prototype = multitap._TapGesture.prototype;
  dart.addTypeTests(multitap._TapGesture);
  dart.addTypeCaches(multitap._TapGesture);
  dart.setMethodSignature(multitap._TapGesture, () => ({
    __proto__: dart.getMethods(multitap._TapGesture.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    accept: dart.fnType(dart.void, []),
    reject: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_check]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(multitap._TapGesture, I[1]);
  dart.setFieldSignature(multitap._TapGesture, () => ({
    __proto__: dart.getFields(multitap._TapGesture.__proto__),
    gestureRecognizer: dart.finalFieldType(multitap.MultiTapGestureRecognizer),
    [_wonArena]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(dart.nullable(async.Timer)),
    [_lastPosition]: dart.fieldType(recognizer.OffsetPair),
    [_finalPosition]: dart.fieldType(dart.nullable(recognizer.OffsetPair))
  }));
  var onTapDown = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapDown");
  var onTapUp = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapUp");
  var onTap = dart.privateName(multitap, "MultiTapGestureRecognizer.onTap");
  var onTapCancel = dart.privateName(multitap, "MultiTapGestureRecognizer.onTapCancel");
  var longTapDelay$ = dart.privateName(multitap, "MultiTapGestureRecognizer.longTapDelay");
  var onLongTapDown = dart.privateName(multitap, "MultiTapGestureRecognizer.onLongTapDown");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var _gestureMap = dart.privateName(multitap, "_gestureMap");
  multitap.MultiTapGestureRecognizer = class MultiTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onTapDown() {
      return this[onTapDown];
    }
    set onTapDown(value) {
      this[onTapDown] = value;
    }
    get onTapUp() {
      return this[onTapUp];
    }
    set onTapUp(value) {
      this[onTapUp] = value;
    }
    get onTap() {
      return this[onTap];
    }
    set onTap(value) {
      this[onTap] = value;
    }
    get onTapCancel() {
      return this[onTapCancel];
    }
    set onTapCancel(value) {
      this[onTapCancel] = value;
    }
    get longTapDelay() {
      return this[longTapDelay$];
    }
    set longTapDelay(value) {
      this[longTapDelay$] = value;
    }
    get onLongTapDown() {
      return this[onLongTapDown];
    }
    set onLongTapDown(value) {
      this[onLongTapDown] = value;
    }
    static ['_#new#tearOff'](opts) {
      let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : C[0] || CT.C0;
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      return new multitap.MultiTapGestureRecognizer.new({longTapDelay: longTapDelay, debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    }
    addAllowedPointer(event) {
      if (!!this[_gestureMap][$containsKey](event.pointer)) dart.assertFailed(null, I[0], 517, 12, "!_gestureMap.containsKey(event.pointer)");
      this[_gestureMap][$_set](event.pointer, new multitap._TapGesture.new({gestureRecognizer: this, event: event, longTapDelay: this.longTapDelay, gestureSettings: this.gestureSettings}));
      if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => {
        dart.nullCheck(this.onTapDown)(event.pointer, new tap.TapDownDetails.new({globalPosition: event.position, localPosition: event.localPosition, kind: event.kind}));
      }, T.VoidTovoid()));
    }
    acceptGesture(pointer) {
      if (!this[_gestureMap][$containsKey](pointer)) dart.assertFailed(null, I[0], 536, 12, "_gestureMap.containsKey(pointer)");
      dart.nullCheck(this[_gestureMap][$_get](pointer)).accept();
    }
    rejectGesture(pointer) {
      if (!this[_gestureMap][$containsKey](pointer)) dart.assertFailed(null, I[0], 542, 12, "_gestureMap.containsKey(pointer)");
      dart.nullCheck(this[_gestureMap][$_get](pointer)).reject();
      if (!!this[_gestureMap][$containsKey](pointer)) dart.assertFailed(null, I[0], 544, 12, "!_gestureMap.containsKey(pointer)");
    }
    [_dispatchCancel](pointer) {
      if (!this[_gestureMap][$containsKey](pointer)) dart.assertFailed(null, I[0], 548, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapCancel != null) this.invokeCallback(dart.void, "onTapCancel", dart.fn(() => dart.nullCheck(this.onTapCancel)(pointer), T.VoidTovoid()));
    }
    [_dispatchTap](pointer, position) {
      if (!this[_gestureMap][$containsKey](pointer)) dart.assertFailed(null, I[0], 555, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => {
        dart.nullCheck(this.onTapUp)(pointer, new tap.TapUpDetails.new({kind: this.getKindForPointer(pointer), localPosition: position.local, globalPosition: position.global}));
      }, T.VoidTovoid()));
      if (this.onTap != null) this.invokeCallback(dart.void, "onTap", dart.fn(() => dart.nullCheck(this.onTap)(pointer), T.VoidTovoid()));
    }
    [_dispatchLongTap](pointer, lastPosition) {
      if (!this[_gestureMap][$containsKey](pointer)) dart.assertFailed(null, I[0], 570, 12, "_gestureMap.containsKey(pointer)");
      if (this.onLongTapDown != null) this.invokeCallback(dart.void, "onLongTapDown", dart.fn(() => {
        dart.nullCheck(this.onLongTapDown)(pointer, new tap.TapDownDetails.new({globalPosition: lastPosition.global, localPosition: lastPosition.local, kind: this.getKindForPointer(pointer)}));
      }, T.VoidTovoid()));
    }
    dispose() {
      let localGestures = T.ListOf_TapGesture().of(this[_gestureMap][$values]);
      for (let gesture of localGestures)
        gesture.cancel();
      if (!this[_gestureMap][$isEmpty]) dart.assertFailed(null, I[0], 590, 12, "_gestureMap.isEmpty");
      super.dispose();
    }
    get debugDescription() {
      return "multitap";
    }
  };
  (multitap.MultiTapGestureRecognizer.new = function(opts) {
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : C[0] || CT.C0;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    this[onTapDown] = null;
    this[onTapUp] = null;
    this[onTap] = null;
    this[onTapCancel] = null;
    this[onLongTapDown] = null;
    this[_gestureMap] = new (T.IdentityMapOfint$_TapGesture()).new();
    this[longTapDelay$] = longTapDelay;
    multitap.MultiTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = multitap.MultiTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.MultiTapGestureRecognizer);
  dart.addTypeCaches(multitap.MultiTapGestureRecognizer);
  dart.setMethodSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.MultiTapGestureRecognizer.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_dispatchCancel]: dart.fnType(dart.void, [core.int]),
    [_dispatchTap]: dart.fnType(dart.void, [core.int, recognizer.OffsetPair]),
    [_dispatchLongTap]: dart.fnType(dart.void, [core.int, recognizer.OffsetPair])
  }));
  dart.setGetterSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.MultiTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.MultiTapGestureRecognizer, I[1]);
  dart.setFieldSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.MultiTapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int, tap.TapDownDetails]))),
    onTapUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int, tap.TapUpDetails]))),
    onTap: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int]))),
    onTapCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int]))),
    longTapDelay: dart.fieldType(core.Duration),
    onLongTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [core.int, tap.TapDownDetails]))),
    [_gestureMap]: dart.finalFieldType(core.Map$(core.int, multitap._TapGesture))
  }));
  var globalPosition$ = dart.privateName(multitap, "SerialTapDownDetails.globalPosition");
  var localPosition$ = dart.privateName(multitap, "SerialTapDownDetails.localPosition");
  var kind$ = dart.privateName(multitap, "SerialTapDownDetails.kind");
  var buttons$ = dart.privateName(multitap, "SerialTapDownDetails.buttons");
  var count$ = dart.privateName(multitap, "SerialTapDownDetails.count");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  multitap.SerialTapDownDetails = class SerialTapDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[1] || CT.C1;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
      let count = opts && 'count' in opts ? opts.count : 1;
      return new multitap.SerialTapDownDetails.new({globalPosition: globalPosition, localPosition: localPosition, kind: kind, buttons: buttons, count: count});
    }
  };
  (multitap.SerialTapDownDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[1] || CT.C1;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let count = opts && 'count' in opts ? opts.count : 1;
    this[globalPosition$] = globalPosition;
    this[kind$] = kind;
    this[buttons$] = buttons;
    this[count$] = count;
    if (!(count > 0)) dart.assertFailed(null, I[0], 620, 15, "count > 0");
    this[localPosition$] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = multitap.SerialTapDownDetails.prototype;
  dart.addTypeTests(multitap.SerialTapDownDetails);
  dart.addTypeCaches(multitap.SerialTapDownDetails);
  dart.setLibraryUri(multitap.SerialTapDownDetails, I[1]);
  dart.setFieldSignature(multitap.SerialTapDownDetails, () => ({
    __proto__: dart.getFields(multitap.SerialTapDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    buttons: dart.finalFieldType(core.int),
    count: dart.finalFieldType(core.int)
  }));
  var count$0 = dart.privateName(multitap, "SerialTapCancelDetails.count");
  multitap.SerialTapCancelDetails = class SerialTapCancelDetails extends core.Object {
    get count() {
      return this[count$0];
    }
    set count(value) {
      super.count = value;
    }
    static ['_#new#tearOff'](opts) {
      let count = opts && 'count' in opts ? opts.count : 1;
      return new multitap.SerialTapCancelDetails.new({count: count});
    }
  };
  (multitap.SerialTapCancelDetails.new = function(opts) {
    let count = opts && 'count' in opts ? opts.count : 1;
    this[count$0] = count;
    if (!(count !== null)) dart.assertFailed(null, I[0], 670, 15, "count != null");
    if (!(count > 0)) dart.assertFailed(null, I[0], 671, 15, "count > 0");
    ;
  }).prototype = multitap.SerialTapCancelDetails.prototype;
  dart.addTypeTests(multitap.SerialTapCancelDetails);
  dart.addTypeCaches(multitap.SerialTapCancelDetails);
  dart.setLibraryUri(multitap.SerialTapCancelDetails, I[1]);
  dart.setFieldSignature(multitap.SerialTapCancelDetails, () => ({
    __proto__: dart.getFields(multitap.SerialTapCancelDetails.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  var globalPosition$0 = dart.privateName(multitap, "SerialTapUpDetails.globalPosition");
  var localPosition$0 = dart.privateName(multitap, "SerialTapUpDetails.localPosition");
  var kind$0 = dart.privateName(multitap, "SerialTapUpDetails.kind");
  var count$1 = dart.privateName(multitap, "SerialTapUpDetails.count");
  multitap.SerialTapUpDetails = class SerialTapUpDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$0];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get kind() {
      return this[kind$0];
    }
    set kind(value) {
      super.kind = value;
    }
    get count() {
      return this[count$1];
    }
    set count(value) {
      super.count = value;
    }
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[1] || CT.C1;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let count = opts && 'count' in opts ? opts.count : 1;
      return new multitap.SerialTapUpDetails.new({globalPosition: globalPosition, localPosition: localPosition, kind: kind, count: count});
    }
  };
  (multitap.SerialTapUpDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[1] || CT.C1;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let count = opts && 'count' in opts ? opts.count : 1;
    this[globalPosition$0] = globalPosition;
    this[kind$0] = kind;
    this[count$1] = count;
    if (!(count > 0)) dart.assertFailed(null, I[0], 702, 15, "count > 0");
    this[localPosition$0] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = multitap.SerialTapUpDetails.prototype;
  dart.addTypeTests(multitap.SerialTapUpDetails);
  dart.addTypeCaches(multitap.SerialTapUpDetails);
  dart.setLibraryUri(multitap.SerialTapUpDetails, I[1]);
  dart.setFieldSignature(multitap.SerialTapUpDetails, () => ({
    __proto__: dart.getFields(multitap.SerialTapUpDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(dart.nullable(ui.PointerDeviceKind)),
    count: dart.finalFieldType(core.int)
  }));
  var onSerialTapDown = dart.privateName(multitap, "SerialTapGestureRecognizer.onSerialTapDown");
  var onSerialTapCancel = dart.privateName(multitap, "SerialTapGestureRecognizer.onSerialTapCancel");
  var onSerialTapUp = dart.privateName(multitap, "SerialTapGestureRecognizer.onSerialTapUp");
  var _serialTapTimer = dart.privateName(multitap, "_serialTapTimer");
  var _completedTaps = dart.privateName(multitap, "_completedTaps");
  var _gestureResolutions = dart.privateName(multitap, "_gestureResolutions");
  var _pendingTap = dart.privateName(multitap, "_pendingTap");
  var _representsSameSeries = dart.privateName(multitap, "_representsSameSeries");
  var _stopSerialTapTimer = dart.privateName(multitap, "_stopSerialTapTimer");
  var _registerTap = dart.privateName(multitap, "_registerTap");
  var _stopTrackingPointer = dart.privateName(multitap, "_stopTrackingPointer");
  var _rejectPendingTap = dart.privateName(multitap, "_rejectPendingTap");
  var _startSerialTapTimer = dart.privateName(multitap, "_startSerialTapTimer");
  multitap.SerialTapGestureRecognizer = class SerialTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onSerialTapDown() {
      return this[onSerialTapDown];
    }
    set onSerialTapDown(value) {
      this[onSerialTapDown] = value;
    }
    get onSerialTapCancel() {
      return this[onSerialTapCancel];
    }
    set onSerialTapCancel(value) {
      this[onSerialTapCancel] = value;
    }
    get onSerialTapUp() {
      return this[onSerialTapUp];
    }
    set onSerialTapUp(value) {
      this[onSerialTapUp] = value;
    }
    static ['_#new#tearOff'](opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      return new multitap.SerialTapGestureRecognizer.new({debugOwner: debugOwner, supportedDevices: supportedDevices});
    }
    get isTrackingPointer() {
      return this[_pendingTap] != null;
    }
    isPointerAllowed(event) {
      if (this.onSerialTapDown == null && this.onSerialTapCancel == null && this.onSerialTapUp == null) {
        return false;
      }
      return super.isPointerAllowed(event);
    }
    addAllowedPointer(event) {
      if (this[_completedTaps][$isNotEmpty] && !this[_representsSameSeries](this[_completedTaps][$last], event) || this[_pendingTap] != null) {
        this[_reset]();
      }
      this[_trackTap](event);
    }
    [_representsSameSeries](tap, event) {
      return tap.hasElapsedMinTime() && tap.hasSameButton(event) && tap.isWithinGlobalTolerance(event, 100);
    }
    [_trackTap](event) {
      this[_stopSerialTapTimer]();
      if (this.onSerialTapDown != null) {
        let details = new multitap.SerialTapDownDetails.new({globalPosition: event.position, localPosition: event.localPosition, kind: this.getKindForPointer(event.pointer), buttons: event.buttons, count: this[_completedTaps][$length] + 1});
        this.invokeCallback(dart.void, "onSerialTapDown", dart.fn(() => dart.nullCheck(this.onSerialTapDown)(details), T.VoidTovoid()));
      }
      let tracker = new multitap._TapTracker.new({gestureSettings: this.gestureSettings, event: event, entry: dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(event.pointer, this), doubleTapMinTime: constants.kDoubleTapMinTime});
      if (!(this[_pendingTap] == null)) dart.assertFailed(null, I[0], 894, 12, "_pendingTap == null");
      this[_pendingTap] = tracker;
      tracker.startTrackingPointer(dart.bind(this, _handleEvent), event.transform);
    }
    [_handleEvent](event) {
      if (!(this[_pendingTap] != null)) dart.assertFailed(null, I[0], 900, 12, "_pendingTap != null");
      if (!(dart.nullCheck(this[_pendingTap]).pointer === event.pointer)) dart.assertFailed(null, I[0], 901, 12, "_pendingTap!.pointer == event.pointer");
      let tracker = dart.nullCheck(this[_pendingTap]);
      if (events.PointerUpEvent.is(event)) {
        this[_registerTap](event, tracker);
      } else if (events.PointerMoveEvent.is(event)) {
        if (!tracker.isWithinGlobalTolerance(event, 18)) {
          this[_reset]();
        }
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reset]();
      }
    }
    acceptGesture(pointer) {
      if (!(this[_pendingTap] != null)) dart.assertFailed(null, I[0], 916, 12, "_pendingTap != null");
      if (!(dart.nullCheck(this[_pendingTap]).pointer === pointer)) dart.assertFailed(null, I[0], 917, 12, "_pendingTap!.pointer == pointer");
      this[_gestureResolutions][$_set](pointer, arena.GestureDisposition.accepted);
    }
    rejectGesture(pointer) {
      this[_gestureResolutions][$_set](pointer, arena.GestureDisposition.rejected);
      this[_reset]();
    }
    [_rejectPendingTap]() {
      if (!(this[_pendingTap] != null)) dart.assertFailed(null, I[0], 928, 12, "_pendingTap != null");
      let tracker = dart.nullCheck(this[_pendingTap]);
      this[_pendingTap] = null;
      this[_checkCancel](this[_completedTaps][$length] + 1);
      if (!this[_gestureResolutions][$containsKey](tracker.pointer)) {
        tracker.entry.resolve(arena.GestureDisposition.rejected);
      }
      this[_stopTrackingPointer](tracker);
    }
    dispose() {
      this[_reset]();
      super.dispose();
    }
    [_reset]() {
      if (this[_pendingTap] != null) {
        this[_rejectPendingTap]();
      }
      this[_pendingTap] = null;
      this[_completedTaps][$clear]();
      this[_gestureResolutions][$clear]();
      this[_stopSerialTapTimer]();
    }
    [_registerTap](event, tracker) {
      if (!tracker[$_equals](this[_pendingTap])) dart.assertFailed(null, I[0], 958, 12, "tracker == _pendingTap");
      if (!(tracker.pointer === event.pointer)) dart.assertFailed(null, I[0], 959, 12, "tracker.pointer == event.pointer");
      this[_startSerialTapTimer]();
      if (!(this[_gestureResolutions][$_get](event.pointer) !== arena.GestureDisposition.rejected)) dart.assertFailed(null, I[0], 961, 12, "_gestureResolutions[event.pointer] != GestureDisposition.rejected");
      if (!this[_gestureResolutions][$containsKey](event.pointer)) {
        tracker.entry.resolve(arena.GestureDisposition.accepted);
      }
      if (!(this[_gestureResolutions][$_get](event.pointer) === arena.GestureDisposition.accepted)) dart.assertFailed(null, I[0], 965, 12, "_gestureResolutions[event.pointer] == GestureDisposition.accepted");
      this[_stopTrackingPointer](tracker);
      this[_pendingTap] = null;
      this[_checkUp](event, tracker);
      this[_completedTaps][$add](tracker);
    }
    [_stopTrackingPointer](tracker) {
      tracker.stopTrackingPointer(dart.bind(this, _handleEvent));
    }
    [_startSerialTapTimer]() {
      this[_serialTapTimer] == null ? this[_serialTapTimer] = async.Timer.new(constants.kDoubleTapTimeout, dart.bind(this, _reset)) : null;
    }
    [_stopSerialTapTimer]() {
      if (this[_serialTapTimer] != null) {
        dart.nullCheck(this[_serialTapTimer]).cancel();
        this[_serialTapTimer] = null;
      }
    }
    [_checkUp](event, tracker) {
      if (this.onSerialTapUp != null) {
        let details = new multitap.SerialTapUpDetails.new({globalPosition: event.position, localPosition: event.localPosition, kind: this.getKindForPointer(tracker.pointer), count: this[_completedTaps][$length] + 1});
        this.invokeCallback(dart.void, "onSerialTapUp", dart.fn(() => dart.nullCheck(this.onSerialTapUp)(details), T.VoidTovoid()));
      }
    }
    [_checkCancel](count) {
      if (this.onSerialTapCancel != null) {
        let details = new multitap.SerialTapCancelDetails.new({count: count});
        this.invokeCallback(dart.void, "onSerialTapCancel", dart.fn(() => dart.nullCheck(this.onSerialTapCancel)(details), T.VoidTovoid()));
      }
    }
    get debugDescription() {
      return "serial tap";
    }
  };
  (multitap.SerialTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    this[onSerialTapDown] = null;
    this[onSerialTapCancel] = null;
    this[onSerialTapUp] = null;
    this[_serialTapTimer] = null;
    this[_completedTaps] = T.JSArrayOf_TapTracker().of([]);
    this[_gestureResolutions] = new (T.IdentityMapOfint$GestureDisposition()).new();
    this[_pendingTap] = null;
    multitap.SerialTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, supportedDevices: supportedDevices});
    ;
  }).prototype = multitap.SerialTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.SerialTapGestureRecognizer);
  dart.addTypeCaches(multitap.SerialTapGestureRecognizer);
  dart.setMethodSignature(multitap.SerialTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.SerialTapGestureRecognizer.__proto__),
    [_representsSameSeries]: dart.fnType(core.bool, [multitap._TapTracker, events.PointerDownEvent]),
    [_trackTap]: dart.fnType(dart.void, [events.PointerDownEvent]),
    [_handleEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_rejectPendingTap]: dart.fnType(dart.void, []),
    [_reset]: dart.fnType(dart.void, []),
    [_registerTap]: dart.fnType(dart.void, [events.PointerUpEvent, multitap._TapTracker]),
    [_stopTrackingPointer]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_startSerialTapTimer]: dart.fnType(dart.void, []),
    [_stopSerialTapTimer]: dart.fnType(dart.void, []),
    [_checkUp]: dart.fnType(dart.void, [events.PointerUpEvent, multitap._TapTracker]),
    [_checkCancel]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(multitap.SerialTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.SerialTapGestureRecognizer.__proto__),
    isTrackingPointer: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.SerialTapGestureRecognizer, I[1]);
  dart.setFieldSignature(multitap.SerialTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.SerialTapGestureRecognizer.__proto__),
    onSerialTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [multitap.SerialTapDownDetails]))),
    onSerialTapCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, [multitap.SerialTapCancelDetails]))),
    onSerialTapUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, [multitap.SerialTapUpDetails]))),
    [_serialTapTimer]: dart.fieldType(dart.nullable(async.Timer)),
    [_completedTaps]: dart.finalFieldType(core.List$(multitap._TapTracker)),
    [_gestureResolutions]: dart.finalFieldType(core.Map$(core.int, arena.GestureDisposition)),
    [_pendingTap]: dart.fieldType(dart.nullable(multitap._TapTracker))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/multitap.dart", {
    "package:flutter/src/gestures/multitap.dart": multitap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["multitap.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/multitap.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__multitap: multitap
  };
}));

//# sourceMappingURL=multitap.dart.lib.js.map
