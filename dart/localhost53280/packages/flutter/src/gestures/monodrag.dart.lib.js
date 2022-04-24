define(['dart_sdk', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/drag_details.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__monodrag_dart(dart_sdk, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__arena$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__drag_details$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const drag_details = packages__flutter__src__gestures__drag_details$46dart.src__gestures__drag_details;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var monodrag = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $sign = dartx.sign;
  var $clear = dartx.clear;
  var $abs = dartx.abs;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    PointerEventToVelocityTracker: () => (T.PointerEventToVelocityTracker = dart.constFn(dart.fnType(velocity_tracker.VelocityTracker, [events.PointerEvent])))(),
    IdentityMapOfint$VelocityTracker: () => (T.IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, velocity_tracker.VelocityTracker)))(),
    LinkedHashSetOfint: () => (T.LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidToString: () => (T.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    EnumPropertyOfDragStartBehavior: () => (T.EnumPropertyOfDragStartBehavior = dart.constFn(diagnostics.EnumProperty$(recognizer.DragStartBehavior)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_Enum__name]: "ready",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_Enum__name]: "possible",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_Enum__name]: "accepted",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], monodrag._DragState);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.fn(monodrag.DragGestureRecognizer._defaultBuilder, T.PointerEventToVelocityTracker());
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "package:flutter/src/gestures/monodrag.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/monodrag.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  monodrag._DragState = class _DragState extends core._Enum {
    toString() {
      return "_DragState." + this[_name];
    }
  };
  (monodrag._DragState.new = function(index, name) {
    monodrag._DragState.__proto__.new.call(this, index, name);
    ;
  }).prototype = monodrag._DragState.prototype;
  dart.addTypeTests(monodrag._DragState);
  dart.addTypeCaches(monodrag._DragState);
  dart.setLibraryUri(monodrag._DragState, I[0]);
  dart.setStaticFieldSignature(monodrag._DragState, () => ['values', 'ready', 'possible', 'accepted']);
  dart.defineExtensionMethods(monodrag._DragState, ['toString']);
  monodrag._DragState.ready = C[0] || CT.C0;
  monodrag._DragState.possible = C[1] || CT.C1;
  monodrag._DragState.accepted = C[2] || CT.C2;
  monodrag._DragState.values = C[3] || CT.C3;
  var dragStartBehavior$ = dart.privateName(monodrag, "DragGestureRecognizer.dragStartBehavior");
  var onDown = dart.privateName(monodrag, "DragGestureRecognizer.onDown");
  var onStart = dart.privateName(monodrag, "DragGestureRecognizer.onStart");
  var onUpdate = dart.privateName(monodrag, "DragGestureRecognizer.onUpdate");
  var onEnd = dart.privateName(monodrag, "DragGestureRecognizer.onEnd");
  var onCancel = dart.privateName(monodrag, "DragGestureRecognizer.onCancel");
  var minFlingDistance = dart.privateName(monodrag, "DragGestureRecognizer.minFlingDistance");
  var minFlingVelocity = dart.privateName(monodrag, "DragGestureRecognizer.minFlingVelocity");
  var maxFlingVelocity = dart.privateName(monodrag, "DragGestureRecognizer.maxFlingVelocity");
  var velocityTrackerBuilder$ = dart.privateName(monodrag, "DragGestureRecognizer.velocityTrackerBuilder");
  var _state = dart.privateName(monodrag, "_state");
  var __DragGestureRecognizer__initialPosition = dart.privateName(monodrag, "_#DragGestureRecognizer#_initialPosition");
  var __DragGestureRecognizer__pendingDragOffset = dart.privateName(monodrag, "_#DragGestureRecognizer#_pendingDragOffset");
  var _lastPendingEventTimestamp = dart.privateName(monodrag, "_lastPendingEventTimestamp");
  var _initialButtons = dart.privateName(monodrag, "_initialButtons");
  var _lastTransform = dart.privateName(monodrag, "_lastTransform");
  var __DragGestureRecognizer__globalDistanceMoved = dart.privateName(monodrag, "_#DragGestureRecognizer#_globalDistanceMoved");
  var _velocityTrackers = dart.privateName(monodrag, "_velocityTrackers");
  var _acceptedActivePointers = dart.privateName(monodrag, "_acceptedActivePointers");
  var _initialPosition = dart.privateName(monodrag, "_initialPosition");
  var _pendingDragOffset = dart.privateName(monodrag, "_pendingDragOffset");
  var _globalDistanceMoved = dart.privateName(monodrag, "_globalDistanceMoved");
  var _checkDown = dart.privateName(monodrag, "_checkDown");
  var _giveUpPointer = dart.privateName(monodrag, "_giveUpPointer");
  var _getDeltaForDetails = dart.privateName(monodrag, "_getDeltaForDetails");
  var _getPrimaryValueFromOffset = dart.privateName(monodrag, "_getPrimaryValueFromOffset");
  var _checkUpdate = dart.privateName(monodrag, "_checkUpdate");
  var _hasSufficientGlobalDistanceToAccept = dart.privateName(monodrag, "_hasSufficientGlobalDistanceToAccept");
  var _checkStart = dart.privateName(monodrag, "_checkStart");
  var _checkCancel = dart.privateName(monodrag, "_checkCancel");
  var _checkEnd = dart.privateName(monodrag, "_checkEnd");
  monodrag.DragGestureRecognizer = class DragGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
    }
    get onDown() {
      return this[onDown];
    }
    set onDown(value) {
      this[onDown] = value;
    }
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get onCancel() {
      return this[onCancel];
    }
    set onCancel(value) {
      this[onCancel] = value;
    }
    get minFlingDistance() {
      return this[minFlingDistance];
    }
    set minFlingDistance(value) {
      this[minFlingDistance] = value;
    }
    get minFlingVelocity() {
      return this[minFlingVelocity];
    }
    set minFlingVelocity(value) {
      this[minFlingVelocity] = value;
    }
    get maxFlingVelocity() {
      return this[maxFlingVelocity];
    }
    set maxFlingVelocity(value) {
      this[maxFlingVelocity] = value;
    }
    get velocityTrackerBuilder() {
      return this[velocityTrackerBuilder$];
    }
    set velocityTrackerBuilder(value) {
      this[velocityTrackerBuilder$] = value;
    }
    static _defaultBuilder(event) {
      return new velocity_tracker.VelocityTracker.withKind(event.kind);
    }
    get [_initialPosition]() {
      let t0;
      t0 = this[__DragGestureRecognizer__initialPosition];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_initialPosition")) : t0;
    }
    set [_initialPosition](t0) {
      this[__DragGestureRecognizer__initialPosition] = t0;
    }
    get [_pendingDragOffset]() {
      let t1;
      t1 = this[__DragGestureRecognizer__pendingDragOffset];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_pendingDragOffset")) : t1;
    }
    set [_pendingDragOffset](t1) {
      this[__DragGestureRecognizer__pendingDragOffset] = t1;
    }
    get [_globalDistanceMoved]() {
      let t2;
      t2 = this[__DragGestureRecognizer__globalDistanceMoved];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_globalDistanceMoved")) : t2;
    }
    set [_globalDistanceMoved](t2) {
      this[__DragGestureRecognizer__globalDistanceMoved] = t2;
    }
    isPointerAllowed(event) {
      if (this[_initialButtons] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDown == null && this.onStart == null && this.onUpdate == null && this.onEnd == null && this.onCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      } else {
        if (event.buttons !== this[_initialButtons]) {
          return false;
        }
      }
      return super.isPointerAllowed(events.PointerDownEvent.as(event));
    }
    addAllowedPointer(event) {
      let t3;
      super.addAllowedPointer(event);
      this[_velocityTrackers][$_set](event.pointer, (t3 = event, this.velocityTrackerBuilder(t3)));
      if (this[_state] === monodrag._DragState.ready) {
        this[_state] = monodrag._DragState.possible;
        this[_initialPosition] = new recognizer.OffsetPair.new({global: event.position, local: event.localPosition});
        this[_initialButtons] = event.buttons;
        this[_pendingDragOffset] = recognizer.OffsetPair.zero;
        this[_globalDistanceMoved] = 0.0;
        this[_lastPendingEventTimestamp] = event.timeStamp;
        this[_lastTransform] = event.transform;
        this[_checkDown]();
      } else if (this[_state] === monodrag._DragState.accepted) {
        this.resolve(arena.GestureDisposition.accepted);
      }
    }
    handleEvent(event) {
      let t3, t3$;
      if (!(this[_state] !== monodrag._DragState.ready)) dart.assertFailed(null, I[1], 284, 12, "_state != _DragState.ready");
      if (!event.synthesized && (events.PointerDownEvent.is(event) || events.PointerMoveEvent.is(event))) {
        let tracker = dart.nullCheck(this[_velocityTrackers][$_get](event.pointer));
        if (!(tracker !== null)) dart.assertFailed(null, I[1], 288, 14, "tracker != null");
        tracker.addPosition(event.timeStamp, event.localPosition);
      }
      if (events.PointerMoveEvent.is(event)) {
        if (event.buttons !== this[_initialButtons]) {
          this[_giveUpPointer](event.pointer);
          return;
        }
        if (this[_state] === monodrag._DragState.accepted) {
          this[_checkUpdate]({sourceTimeStamp: event.timeStamp, delta: this[_getDeltaForDetails](event.localDelta), primaryDelta: this[_getPrimaryValueFromOffset](event.localDelta), globalPosition: event.position, localPosition: event.localPosition});
        } else {
          this[_pendingDragOffset] = this[_pendingDragOffset]['+'](new recognizer.OffsetPair.new({local: event.localDelta, global: event.delta}));
          this[_lastPendingEventTimestamp] = event.timeStamp;
          this[_lastTransform] = event.transform;
          let movedLocally = this[_getDeltaForDetails](event.localDelta);
          let localToGlobalTransform = event.transform == null ? null : vector_math_64.Matrix4.tryInvert(dart.nullCheck(event.transform));
          this[_globalDistanceMoved] = this[_globalDistanceMoved] + events.PointerEvent.transformDeltaViaPositions({transform: localToGlobalTransform, untransformedDelta: movedLocally, untransformedEndPosition: event.localPosition}).distance * (t3 = this[_getPrimaryValueFromOffset](movedLocally), t3 == null ? 1.0 : t3)[$sign];
          if (this[_hasSufficientGlobalDistanceToAccept](event.kind, (t3$ = this.gestureSettings, t3$ == null ? null : t3$.touchSlop))) this.resolve(arena.GestureDisposition.accepted);
        }
      }
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_giveUpPointer](event.pointer);
      }
    }
    acceptGesture(pointer) {
      if (!!this[_acceptedActivePointers].contains(pointer)) dart.assertFailed(null, I[1], 329, 12, "!_acceptedActivePointers.contains(pointer)");
      this[_acceptedActivePointers].add(pointer);
      if (this[_state] !== monodrag._DragState.accepted) {
        this[_state] = monodrag._DragState.accepted;
        let delta = this[_pendingDragOffset];
        let timestamp = dart.nullCheck(this[_lastPendingEventTimestamp]);
        let transform = this[_lastTransform];
        let localUpdateDelta = null;
        switch (this.dragStartBehavior) {
          case C[4] || CT.C4:
          {
            this[_initialPosition] = this[_initialPosition]['+'](delta);
            localUpdateDelta = ui.Offset.zero;
            break;
          }
          case C[6] || CT.C6:
          {
            localUpdateDelta = this[_getDeltaForDetails](delta.local);
            break;
          }
        }
        this[_pendingDragOffset] = recognizer.OffsetPair.zero;
        this[_lastPendingEventTimestamp] = null;
        this[_lastTransform] = null;
        this[_checkStart](timestamp, pointer);
        if (!localUpdateDelta._equals(ui.Offset.zero) && this.onUpdate != null) {
          let localToGlobal = transform != null ? vector_math_64.Matrix4.tryInvert(transform) : null;
          let correctedLocalPosition = this[_initialPosition].local['+'](localUpdateDelta);
          let globalUpdateDelta = events.PointerEvent.transformDeltaViaPositions({untransformedEndPosition: correctedLocalPosition, untransformedDelta: localUpdateDelta, transform: localToGlobal});
          let updateDelta = new recognizer.OffsetPair.new({local: localUpdateDelta, global: globalUpdateDelta});
          let correctedPosition = this[_initialPosition]['+'](updateDelta);
          this[_checkUpdate]({sourceTimeStamp: timestamp, delta: localUpdateDelta, primaryDelta: this[_getPrimaryValueFromOffset](localUpdateDelta), globalPosition: correctedPosition.global, localPosition: correctedPosition.local});
        }
        this.resolve(arena.GestureDisposition.accepted);
      }
    }
    rejectGesture(pointer) {
      this[_giveUpPointer](pointer);
    }
    didStopTrackingLastPointer(pointer) {
      if (!(this[_state] !== monodrag._DragState.ready)) dart.assertFailed(null, I[1], 382, 12, "_state != _DragState.ready");
      switch (this[_state]) {
        case C[0] || CT.C0:
        {
          break;
        }
        case C[1] || CT.C1:
        {
          this.resolve(arena.GestureDisposition.rejected);
          this[_checkCancel]();
          break;
        }
        case C[2] || CT.C2:
        {
          this[_checkEnd](pointer);
          break;
        }
      }
      this[_velocityTrackers][$clear]();
      this[_initialButtons] = null;
      this[_state] = monodrag._DragState.ready;
    }
    [_giveUpPointer](pointer) {
      this.stopTrackingPointer(pointer);
      if (!this[_acceptedActivePointers].remove(pointer)) this.resolvePointer(pointer, arena.GestureDisposition.rejected);
    }
    [_checkDown]() {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, I[1], 410, 12, "_initialButtons == kPrimaryButton");
      if (this.onDown != null) {
        let details = new drag_details.DragDownDetails.new({globalPosition: this[_initialPosition].global, localPosition: this[_initialPosition].local});
        this.invokeCallback(dart.void, "onDown", dart.fn(() => dart.nullCheck(this.onDown)(details), T.VoidTovoid()));
      }
    }
    [_checkStart](timestamp, pointer) {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, I[1], 421, 12, "_initialButtons == kPrimaryButton");
      if (this.onStart != null) {
        let details = new drag_details.DragStartDetails.new({sourceTimeStamp: timestamp, globalPosition: this[_initialPosition].global, localPosition: this[_initialPosition].local, kind: this.getKindForPointer(pointer)});
        this.invokeCallback(dart.void, "onStart", dart.fn(() => dart.nullCheck(this.onStart)(details), T.VoidTovoid()));
      }
    }
    [_checkUpdate](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, I[1], 440, 12, "_initialButtons == kPrimaryButton");
      if (this.onUpdate != null) {
        let details = new drag_details.DragUpdateDetails.new({sourceTimeStamp: sourceTimeStamp, delta: delta, primaryDelta: primaryDelta, globalPosition: globalPosition, localPosition: localPosition});
        this.invokeCallback(dart.void, "onUpdate", dart.fn(() => dart.nullCheck(this.onUpdate)(details), T.VoidTovoid()));
      }
    }
    [_checkEnd](pointer) {
      let t3, t3$;
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, I[1], 454, 12, "_initialButtons == kPrimaryButton");
      if (this.onEnd == null) return;
      let tracker = dart.nullCheck(this[_velocityTrackers][$_get](pointer));
      if (!(tracker !== null)) dart.assertFailed(null, I[1], 459, 12, "tracker != null");
      let details = null;
      let debugReport = null;
      let estimate = tracker.getVelocityEstimate();
      if (estimate != null && this.isFlingGesture(estimate, tracker.kind)) {
        let velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond}).clampMagnitude((t3 = this.minFlingVelocity, t3 == null ? 50 : t3), (t3$ = this.maxFlingVelocity, t3$ == null ? 8000 : t3$));
        details = new drag_details.DragEndDetails.new({velocity: velocity, primaryVelocity: this[_getPrimaryValueFromOffset](velocity.pixelsPerSecond)});
        debugReport = dart.fn(() => dart.str(estimate) + "; fling at " + dart.str(velocity) + ".", T.VoidToString());
      } else {
        details = new drag_details.DragEndDetails.new({primaryVelocity: 0.0});
        debugReport = dart.fn(() => {
          if (estimate == null) return "Could not estimate velocity.";
          return dart.str(estimate) + "; judged to not be a fling.";
        }, T.VoidToString());
      }
      this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(details), T.VoidTovoid()), {debugReport: debugReport});
    }
    [_checkCancel]() {
      if (!(this[_initialButtons] === 1)) dart.assertFailed(null, I[1], 489, 12, "_initialButtons == kPrimaryButton");
      if (this.onCancel != null) this.invokeCallback(dart.void, "onCancel", dart.nullCheck(this.onCancel));
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.EnumPropertyOfDragStartBehavior()).new("start behavior", this.dragStartBehavior));
    }
  };
  (monodrag.DragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[4] || CT.C4;
    let velocityTrackerBuilder = opts && 'velocityTrackerBuilder' in opts ? opts.velocityTrackerBuilder : C[5] || CT.C5;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    this[onDown] = null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[onCancel] = null;
    this[minFlingDistance] = null;
    this[minFlingVelocity] = null;
    this[maxFlingVelocity] = null;
    this[_state] = monodrag._DragState.ready;
    this[__DragGestureRecognizer__initialPosition] = null;
    this[__DragGestureRecognizer__pendingDragOffset] = null;
    this[_lastPendingEventTimestamp] = null;
    this[_initialButtons] = null;
    this[_lastTransform] = null;
    this[__DragGestureRecognizer__globalDistanceMoved] = null;
    this[_velocityTrackers] = new (T.IdentityMapOfint$VelocityTracker()).new();
    this[_acceptedActivePointers] = T.LinkedHashSetOfint().new();
    this[dragStartBehavior$] = dragStartBehavior;
    this[velocityTrackerBuilder$] = velocityTrackerBuilder;
    if (!(dragStartBehavior !== null)) dart.assertFailed(null, I[1], 77, 15, "dragStartBehavior != null");
    monodrag.DragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = monodrag.DragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.DragGestureRecognizer);
  dart.addTypeCaches(monodrag.DragGestureRecognizer);
  dart.setMethodSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.DragGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_giveUpPointer]: dart.fnType(dart.void, [core.int]),
    [_checkDown]: dart.fnType(dart.void, []),
    [_checkStart]: dart.fnType(dart.void, [core.Duration, core.int]),
    [_checkUpdate]: dart.fnType(dart.void, [], {localPosition: dart.nullable(ui.Offset), primaryDelta: dart.nullable(core.double), sourceTimeStamp: dart.nullable(core.Duration)}, {delta: ui.Offset, globalPosition: ui.Offset}),
    [_checkEnd]: dart.fnType(dart.void, [core.int]),
    [_checkCancel]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(monodrag.DragGestureRecognizer, () => ['_defaultBuilder']);
  dart.setGetterSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.DragGestureRecognizer.__proto__),
    [_initialPosition]: recognizer.OffsetPair,
    [_pendingDragOffset]: recognizer.OffsetPair,
    [_globalDistanceMoved]: core.double
  }));
  dart.setSetterSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getSetters(monodrag.DragGestureRecognizer.__proto__),
    [_initialPosition]: recognizer.OffsetPair,
    [_pendingDragOffset]: recognizer.OffsetPair,
    [_globalDistanceMoved]: core.double
  }));
  dart.setLibraryUri(monodrag.DragGestureRecognizer, I[0]);
  dart.setFieldSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getFields(monodrag.DragGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(recognizer.DragStartBehavior),
    onDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragDownDetails]))),
    onStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragStartDetails]))),
    onUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragUpdateDetails]))),
    onEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [drag_details.DragEndDetails]))),
    onCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    minFlingDistance: dart.fieldType(dart.nullable(core.double)),
    minFlingVelocity: dart.fieldType(dart.nullable(core.double)),
    maxFlingVelocity: dart.fieldType(dart.nullable(core.double)),
    velocityTrackerBuilder: dart.fieldType(dart.fnType(velocity_tracker.VelocityTracker, [events.PointerEvent])),
    [_state]: dart.fieldType(monodrag._DragState),
    [__DragGestureRecognizer__initialPosition]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [__DragGestureRecognizer__pendingDragOffset]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [_lastPendingEventTimestamp]: dart.fieldType(dart.nullable(core.Duration)),
    [_initialButtons]: dart.fieldType(dart.nullable(core.int)),
    [_lastTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [__DragGestureRecognizer__globalDistanceMoved]: dart.fieldType(dart.nullable(core.double)),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker)),
    [_acceptedActivePointers]: dart.finalFieldType(core.Set$(core.int))
  }));
  monodrag.VerticalDragGestureRecognizer = class VerticalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    static ['_#new#tearOff'](opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      return new monodrag.VerticalDragGestureRecognizer.new({debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    }
    isFlingGesture(estimate, kind) {
      let t3, t3$;
      let minVelocity = (t3 = this.minFlingVelocity, t3 == null ? 50 : t3);
      let minDistance = (t3$ = this.minFlingDistance, t3$ == null ? events.computeHitSlop(kind, this.gestureSettings) : t3$);
      return estimate.pixelsPerSecond.dy[$abs]() > minVelocity && estimate.offset.dy[$abs]() > minDistance;
    }
    [_hasSufficientGlobalDistanceToAccept](pointerDeviceKind, deviceTouchSlop) {
      return this[_globalDistanceMoved][$abs]() > events.computeHitSlop(pointerDeviceKind, this.gestureSettings);
    }
    [_getDeltaForDetails](delta) {
      return new ui.Offset.new(0.0, delta.dy);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dy;
    }
    get debugDescription() {
      return "vertical drag";
    }
  };
  (monodrag.VerticalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    monodrag.VerticalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = monodrag.VerticalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.VerticalDragGestureRecognizer);
  dart.addTypeCaches(monodrag.VerticalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.VerticalDragGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate, ui.PointerDeviceKind]),
    [_hasSufficientGlobalDistanceToAccept]: dart.fnType(core.bool, [ui.PointerDeviceKind, dart.nullable(core.double)]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.VerticalDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.VerticalDragGestureRecognizer, I[0]);
  monodrag.HorizontalDragGestureRecognizer = class HorizontalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    static ['_#new#tearOff'](opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      return new monodrag.HorizontalDragGestureRecognizer.new({debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    }
    isFlingGesture(estimate, kind) {
      let t3, t3$;
      let minVelocity = (t3 = this.minFlingVelocity, t3 == null ? 50 : t3);
      let minDistance = (t3$ = this.minFlingDistance, t3$ == null ? events.computeHitSlop(kind, this.gestureSettings) : t3$);
      return estimate.pixelsPerSecond.dx[$abs]() > minVelocity && estimate.offset.dx[$abs]() > minDistance;
    }
    [_hasSufficientGlobalDistanceToAccept](pointerDeviceKind, deviceTouchSlop) {
      return this[_globalDistanceMoved][$abs]() > events.computeHitSlop(pointerDeviceKind, this.gestureSettings);
    }
    [_getDeltaForDetails](delta) {
      return new ui.Offset.new(delta.dx, 0.0);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dx;
    }
    get debugDescription() {
      return "horizontal drag";
    }
  };
  (monodrag.HorizontalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    monodrag.HorizontalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = monodrag.HorizontalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.HorizontalDragGestureRecognizer);
  dart.addTypeCaches(monodrag.HorizontalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.HorizontalDragGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate, ui.PointerDeviceKind]),
    [_hasSufficientGlobalDistanceToAccept]: dart.fnType(core.bool, [ui.PointerDeviceKind, dart.nullable(core.double)]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.HorizontalDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.HorizontalDragGestureRecognizer, I[0]);
  monodrag.PanGestureRecognizer = class PanGestureRecognizer extends monodrag.DragGestureRecognizer {
    static ['_#new#tearOff'](opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      return new monodrag.PanGestureRecognizer.new({debugOwner: debugOwner, supportedDevices: supportedDevices});
    }
    isFlingGesture(estimate, kind) {
      let t3, t3$;
      let minVelocity = (t3 = this.minFlingVelocity, t3 == null ? 50 : t3);
      let minDistance = (t3$ = this.minFlingDistance, t3$ == null ? events.computeHitSlop(kind, this.gestureSettings) : t3$);
      return estimate.pixelsPerSecond.distanceSquared > minVelocity * minVelocity && estimate.offset.distanceSquared > minDistance * minDistance;
    }
    [_hasSufficientGlobalDistanceToAccept](pointerDeviceKind, deviceTouchSlop) {
      return this[_globalDistanceMoved][$abs]() > events.computePanSlop(pointerDeviceKind, this.gestureSettings);
    }
    [_getDeltaForDetails](delta) {
      return delta;
    }
    [_getPrimaryValueFromOffset](value) {
      return null;
    }
    get debugDescription() {
      return "pan";
    }
  };
  (monodrag.PanGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    monodrag.PanGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, supportedDevices: supportedDevices});
    ;
  }).prototype = monodrag.PanGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.PanGestureRecognizer);
  dart.addTypeCaches(monodrag.PanGestureRecognizer);
  dart.setMethodSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.PanGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate, ui.PointerDeviceKind]),
    [_hasSufficientGlobalDistanceToAccept]: dart.fnType(core.bool, [ui.PointerDeviceKind, dart.nullable(core.double)]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(dart.nullable(core.double), [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.PanGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.PanGestureRecognizer, I[0]);
  dart.trackLibraries("packages/flutter/src/gestures/monodrag.dart", {
    "package:flutter/src/gestures/monodrag.dart": monodrag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["monodrag.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/monodrag.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__monodrag: monodrag
  };
}));

//# sourceMappingURL=monodrag.dart.lib.js.map
