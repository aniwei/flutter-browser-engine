define(['dart_sdk', 'packages/flutter/src/gestures/velocity_tracker.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/vector_math/vector_math_64.dart'], (function load__packages__flutter__src__gestures__scale_dart(dart_sdk, packages__flutter__src__gestures__velocity_tracker$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__arena$46dart, packages__vector_math__vector_math_64$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  var scale$ = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $length = dartx.length;
  var $keys = dartx.keys;
  var $toDouble = dartx.toDouble;
  var $abs = dartx.abs;
  var $clear = dartx.clear;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfint$VelocityTracker: () => (T.IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, velocity_tracker.VelocityTracker)))(),
    IdentityMapOfint$Offset: () => (T.IdentityMapOfint$Offset = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Offset)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: scale$._ScaleState.prototype,
        [_Enum__name]: "ready",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: scale$._ScaleState.prototype,
        [_Enum__name]: "possible",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: scale$._ScaleState.prototype,
        [_Enum__name]: "accepted",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: scale$._ScaleState.prototype,
        [_Enum__name]: "started",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], scale$._ScaleState);
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [Velocity_pixelsPerSecond]: C[5] || CT.C5
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 0
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = [
    "package:flutter/src/gestures/scale.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/scale.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  scale$._ScaleState = class _ScaleState extends core._Enum {
    toString() {
      return "_ScaleState." + this[_name];
    }
  };
  (scale$._ScaleState.new = function(index, name) {
    scale$._ScaleState.__proto__.new.call(this, index, name);
    ;
  }).prototype = scale$._ScaleState.prototype;
  dart.addTypeTests(scale$._ScaleState);
  dart.addTypeCaches(scale$._ScaleState);
  dart.setLibraryUri(scale$._ScaleState, I[0]);
  dart.setStaticFieldSignature(scale$._ScaleState, () => ['values', 'ready', 'possible', 'accepted', 'started']);
  dart.defineExtensionMethods(scale$._ScaleState, ['toString']);
  scale$._ScaleState.ready = C[0] || CT.C0;
  scale$._ScaleState.possible = C[1] || CT.C1;
  scale$._ScaleState.accepted = C[2] || CT.C2;
  scale$._ScaleState.started = C[3] || CT.C3;
  scale$._ScaleState.values = C[4] || CT.C4;
  var focalPoint$ = dart.privateName(scale$, "ScaleStartDetails.focalPoint");
  var localFocalPoint$ = dart.privateName(scale$, "ScaleStartDetails.localFocalPoint");
  var pointerCount$ = dart.privateName(scale$, "ScaleStartDetails.pointerCount");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  scale$.ScaleStartDetails = class ScaleStartDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    get pointerCount() {
      return this[pointerCount$];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C[5] || CT.C5;
      let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
      let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
      return new scale$.ScaleStartDetails.new({focalPoint: focalPoint, localFocalPoint: localFocalPoint, pointerCount: pointerCount});
    }
    toString() {
      return "ScaleStartDetails(focalPoint: " + dart.str(this.focalPoint) + ", localFocalPoint: " + dart.str(this.localFocalPoint) + ", pointersCount: " + dart.str(this.pointerCount) + ")";
    }
  };
  (scale$.ScaleStartDetails.new = function(opts) {
    let t0;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C[5] || CT.C5;
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
    this[focalPoint$] = focalPoint;
    this[pointerCount$] = pointerCount;
    if (!(focalPoint !== null)) dart.assertFailed(null, I[1], 40, 14, "focalPoint != null");
    this[localFocalPoint$] = (t0 = localFocalPoint, t0 == null ? focalPoint : t0);
    ;
  }).prototype = scale$.ScaleStartDetails.prototype;
  dart.addTypeTests(scale$.ScaleStartDetails);
  dart.addTypeCaches(scale$.ScaleStartDetails);
  dart.setLibraryUri(scale$.ScaleStartDetails, I[0]);
  dart.setFieldSignature(scale$.ScaleStartDetails, () => ({
    __proto__: dart.getFields(scale$.ScaleStartDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset),
    pointerCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(scale$.ScaleStartDetails, ['toString']);
  var focalPointDelta$ = dart.privateName(scale$, "ScaleUpdateDetails.focalPointDelta");
  var focalPoint$0 = dart.privateName(scale$, "ScaleUpdateDetails.focalPoint");
  var localFocalPoint$0 = dart.privateName(scale$, "ScaleUpdateDetails.localFocalPoint");
  var scale$0 = dart.privateName(scale$, "ScaleUpdateDetails.scale");
  var horizontalScale$ = dart.privateName(scale$, "ScaleUpdateDetails.horizontalScale");
  var verticalScale$ = dart.privateName(scale$, "ScaleUpdateDetails.verticalScale");
  var rotation$ = dart.privateName(scale$, "ScaleUpdateDetails.rotation");
  var pointerCount$0 = dart.privateName(scale$, "ScaleUpdateDetails.pointerCount");
  scale$.ScaleUpdateDetails = class ScaleUpdateDetails extends core.Object {
    get focalPointDelta() {
      return this[focalPointDelta$];
    }
    set focalPointDelta(value) {
      super.focalPointDelta = value;
    }
    get focalPoint() {
      return this[focalPoint$0];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$0];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    get scale() {
      return this[scale$0];
    }
    set scale(value) {
      super.scale = value;
    }
    get horizontalScale() {
      return this[horizontalScale$];
    }
    set horizontalScale(value) {
      super.horizontalScale = value;
    }
    get verticalScale() {
      return this[verticalScale$];
    }
    set verticalScale(value) {
      super.verticalScale = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    get pointerCount() {
      return this[pointerCount$0];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C[5] || CT.C5;
      let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1;
      let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1;
      let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
      let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
      let focalPointDelta = opts && 'focalPointDelta' in opts ? opts.focalPointDelta : C[5] || CT.C5;
      return new scale$.ScaleUpdateDetails.new({focalPoint: focalPoint, localFocalPoint: localFocalPoint, scale: scale, horizontalScale: horizontalScale, verticalScale: verticalScale, rotation: rotation, pointerCount: pointerCount, focalPointDelta: focalPointDelta});
    }
    toString() {
      return "ScaleUpdateDetails(" + "focalPoint: " + dart.str(this.focalPoint) + "," + " localFocalPoint: " + dart.str(this.localFocalPoint) + "," + " scale: " + dart.str(this.scale) + "," + " horizontalScale: " + dart.str(this.horizontalScale) + "," + " verticalScale: " + dart.str(this.verticalScale) + "," + " rotation: " + dart.str(this.rotation) + "," + " pointerCount: " + dart.str(this.pointerCount) + "," + " focalPointDelta: " + dart.str(this.localFocalPoint) + ")";
    }
  };
  (scale$.ScaleUpdateDetails.new = function(opts) {
    let t0;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C[5] || CT.C5;
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1;
    let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
    let focalPointDelta = opts && 'focalPointDelta' in opts ? opts.focalPointDelta : C[5] || CT.C5;
    this[focalPoint$0] = focalPoint;
    this[scale$0] = scale;
    this[horizontalScale$] = horizontalScale;
    this[verticalScale$] = verticalScale;
    this[rotation$] = rotation;
    this[pointerCount$0] = pointerCount;
    this[focalPointDelta$] = focalPointDelta;
    if (!(focalPoint !== null)) dart.assertFailed(null, I[1], 89, 15, "focalPoint != null");
    if (!(focalPointDelta !== null)) dart.assertFailed(null, I[1], 90, 15, "focalPointDelta != null");
    if (!(scale !== null && scale >= 0.0)) dart.assertFailed(null, I[1], 91, 15, "scale != null && scale >= 0.0");
    if (!(horizontalScale !== null && horizontalScale >= 0.0)) dart.assertFailed(null, I[1], 92, 15, "horizontalScale != null && horizontalScale >= 0.0");
    if (!(verticalScale !== null && verticalScale >= 0.0)) dart.assertFailed(null, I[1], 93, 15, "verticalScale != null && verticalScale >= 0.0");
    if (!(rotation !== null)) dart.assertFailed(null, I[1], 94, 15, "rotation != null");
    this[localFocalPoint$0] = (t0 = localFocalPoint, t0 == null ? focalPoint : t0);
    ;
  }).prototype = scale$.ScaleUpdateDetails.prototype;
  dart.addTypeTests(scale$.ScaleUpdateDetails);
  dart.addTypeCaches(scale$.ScaleUpdateDetails);
  dart.setLibraryUri(scale$.ScaleUpdateDetails, I[0]);
  dart.setFieldSignature(scale$.ScaleUpdateDetails, () => ({
    __proto__: dart.getFields(scale$.ScaleUpdateDetails.__proto__),
    focalPointDelta: dart.finalFieldType(ui.Offset),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset),
    scale: dart.finalFieldType(core.double),
    horizontalScale: dart.finalFieldType(core.double),
    verticalScale: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double),
    pointerCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(scale$.ScaleUpdateDetails, ['toString']);
  var velocity$ = dart.privateName(scale$, "ScaleEndDetails.velocity");
  var pointerCount$1 = dart.privateName(scale$, "ScaleEndDetails.pointerCount");
  var Velocity_pixelsPerSecond = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  scale$.ScaleEndDetails = class ScaleEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get pointerCount() {
      return this[pointerCount$1];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let velocity = opts && 'velocity' in opts ? opts.velocity : C[6] || CT.C6;
      let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
      return new scale$.ScaleEndDetails.new({velocity: velocity, pointerCount: pointerCount});
    }
    toString() {
      return "ScaleEndDetails(velocity: " + dart.str(this.velocity) + ", pointerCount: " + dart.str(this.pointerCount) + ")";
    }
  };
  (scale$.ScaleEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C[6] || CT.C6;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : 0;
    this[velocity$] = velocity;
    this[pointerCount$1] = pointerCount;
    if (!(velocity !== null)) dart.assertFailed(null, I[1], 187, 14, "velocity != null");
    ;
  }).prototype = scale$.ScaleEndDetails.prototype;
  dart.addTypeTests(scale$.ScaleEndDetails);
  dart.addTypeCaches(scale$.ScaleEndDetails);
  dart.setLibraryUri(scale$.ScaleEndDetails, I[0]);
  dart.setFieldSignature(scale$.ScaleEndDetails, () => ({
    __proto__: dart.getFields(scale$.ScaleEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity),
    pointerCount: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(scale$.ScaleEndDetails, ['toString']);
  scale$._LineBetweenPointers = class _LineBetweenPointers extends core.Object {
    static ['_#new#tearOff'](opts) {
      let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : C[5] || CT.C5;
      let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
      let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : C[5] || CT.C5;
      let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
      return new scale$._LineBetweenPointers.new({pointerStartLocation: pointerStartLocation, pointerStartId: pointerStartId, pointerEndLocation: pointerEndLocation, pointerEndId: pointerEndId});
    }
  };
  (scale$._LineBetweenPointers.new = function(opts) {
    let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : C[5] || CT.C5;
    let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
    let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : C[5] || CT.C5;
    let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
    this.pointerStartLocation = pointerStartLocation;
    this.pointerStartId = pointerStartId;
    this.pointerEndLocation = pointerEndLocation;
    this.pointerEndId = pointerEndId;
    if (!(pointerStartLocation !== null && pointerEndLocation !== null)) dart.assertFailed(null, I[1], 234, 15, "pointerStartLocation != null && pointerEndLocation != null");
    if (!(pointerStartId !== null && pointerEndId !== null)) dart.assertFailed(null, I[1], 235, 15, "pointerStartId != null && pointerEndId != null");
    if (!(pointerStartId !== pointerEndId)) dart.assertFailed(null, I[1], 236, 15, "pointerStartId != pointerEndId");
    ;
  }).prototype = scale$._LineBetweenPointers.prototype;
  dart.addTypeTests(scale$._LineBetweenPointers);
  dart.addTypeCaches(scale$._LineBetweenPointers);
  dart.setLibraryUri(scale$._LineBetweenPointers, I[0]);
  dart.setFieldSignature(scale$._LineBetweenPointers, () => ({
    __proto__: dart.getFields(scale$._LineBetweenPointers.__proto__),
    pointerStartLocation: dart.finalFieldType(ui.Offset),
    pointerStartId: dart.finalFieldType(core.int),
    pointerEndLocation: dart.finalFieldType(ui.Offset),
    pointerEndId: dart.finalFieldType(core.int)
  }));
  var dragStartBehavior$ = dart.privateName(scale$, "ScaleGestureRecognizer.dragStartBehavior");
  var onStart = dart.privateName(scale$, "ScaleGestureRecognizer.onStart");
  var onUpdate = dart.privateName(scale$, "ScaleGestureRecognizer.onUpdate");
  var onEnd = dart.privateName(scale$, "ScaleGestureRecognizer.onEnd");
  var _state = dart.privateName(scale$, "_state");
  var _lastTransform = dart.privateName(scale$, "_lastTransform");
  var __ScaleGestureRecognizer__initialFocalPoint = dart.privateName(scale$, "_#ScaleGestureRecognizer#_initialFocalPoint");
  var _currentFocalPoint = dart.privateName(scale$, "_currentFocalPoint");
  var __ScaleGestureRecognizer__initialSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_initialSpan");
  var __ScaleGestureRecognizer__currentSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_currentSpan");
  var __ScaleGestureRecognizer__initialHorizontalSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_initialHorizontalSpan");
  var __ScaleGestureRecognizer__currentHorizontalSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_currentHorizontalSpan");
  var __ScaleGestureRecognizer__initialVerticalSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_initialVerticalSpan");
  var __ScaleGestureRecognizer__currentVerticalSpan = dart.privateName(scale$, "_#ScaleGestureRecognizer#_currentVerticalSpan");
  var __ScaleGestureRecognizer__localFocalPoint = dart.privateName(scale$, "_#ScaleGestureRecognizer#_localFocalPoint");
  var _initialLine = dart.privateName(scale$, "_initialLine");
  var _currentLine = dart.privateName(scale$, "_currentLine");
  var __ScaleGestureRecognizer__pointerLocations = dart.privateName(scale$, "_#ScaleGestureRecognizer#_pointerLocations");
  var __ScaleGestureRecognizer__pointerQueue = dart.privateName(scale$, "_#ScaleGestureRecognizer#_pointerQueue");
  var _velocityTrackers = dart.privateName(scale$, "_velocityTrackers");
  var __ScaleGestureRecognizer__delta = dart.privateName(scale$, "_#ScaleGestureRecognizer#_delta");
  var _initialFocalPoint = dart.privateName(scale$, "_initialFocalPoint");
  var _initialSpan = dart.privateName(scale$, "_initialSpan");
  var _currentSpan = dart.privateName(scale$, "_currentSpan");
  var _initialHorizontalSpan = dart.privateName(scale$, "_initialHorizontalSpan");
  var _currentHorizontalSpan = dart.privateName(scale$, "_currentHorizontalSpan");
  var _initialVerticalSpan = dart.privateName(scale$, "_initialVerticalSpan");
  var _currentVerticalSpan = dart.privateName(scale$, "_currentVerticalSpan");
  var _localFocalPoint = dart.privateName(scale$, "_localFocalPoint");
  var _pointerLocations = dart.privateName(scale$, "_pointerLocations");
  var _pointerQueue = dart.privateName(scale$, "_pointerQueue");
  var _delta = dart.privateName(scale$, "_delta");
  var _scaleFactor = dart.privateName(scale$, "_scaleFactor");
  var _horizontalScaleFactor = dart.privateName(scale$, "_horizontalScaleFactor");
  var _verticalScaleFactor = dart.privateName(scale$, "_verticalScaleFactor");
  var _computeRotationFactor = dart.privateName(scale$, "_computeRotationFactor");
  var _updateLines = dart.privateName(scale$, "_updateLines");
  var _update = dart.privateName(scale$, "_update");
  var _reconfigure = dart.privateName(scale$, "_reconfigure");
  var _advanceStateMachine = dart.privateName(scale$, "_advanceStateMachine");
  var _dispatchOnStartCallbackIfNeeded = dart.privateName(scale$, "_dispatchOnStartCallbackIfNeeded");
  scale$.ScaleGestureRecognizer = class ScaleGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
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
    static ['_#new#tearOff'](opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
      let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[7] || CT.C7;
      return new scale$.ScaleGestureRecognizer.new({debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices, dragStartBehavior: dragStartBehavior});
    }
    set [_initialFocalPoint](t0) {
      this[__ScaleGestureRecognizer__initialFocalPoint] = t0;
    }
    get [_initialFocalPoint]() {
      let t1;
      t1 = this[__ScaleGestureRecognizer__initialFocalPoint];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_initialFocalPoint")) : t1;
    }
    get [_initialSpan]() {
      let t1;
      t1 = this[__ScaleGestureRecognizer__initialSpan];
      return t1 == null ? dart.throw(new _internal.LateError.fieldNI("_initialSpan")) : t1;
    }
    set [_initialSpan](t1) {
      this[__ScaleGestureRecognizer__initialSpan] = t1;
    }
    get [_currentSpan]() {
      let t2;
      t2 = this[__ScaleGestureRecognizer__currentSpan];
      return t2 == null ? dart.throw(new _internal.LateError.fieldNI("_currentSpan")) : t2;
    }
    set [_currentSpan](t2) {
      this[__ScaleGestureRecognizer__currentSpan] = t2;
    }
    get [_initialHorizontalSpan]() {
      let t3;
      t3 = this[__ScaleGestureRecognizer__initialHorizontalSpan];
      return t3 == null ? dart.throw(new _internal.LateError.fieldNI("_initialHorizontalSpan")) : t3;
    }
    set [_initialHorizontalSpan](t3) {
      this[__ScaleGestureRecognizer__initialHorizontalSpan] = t3;
    }
    get [_currentHorizontalSpan]() {
      let t4;
      t4 = this[__ScaleGestureRecognizer__currentHorizontalSpan];
      return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_currentHorizontalSpan")) : t4;
    }
    set [_currentHorizontalSpan](t4) {
      this[__ScaleGestureRecognizer__currentHorizontalSpan] = t4;
    }
    get [_initialVerticalSpan]() {
      let t5;
      t5 = this[__ScaleGestureRecognizer__initialVerticalSpan];
      return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_initialVerticalSpan")) : t5;
    }
    set [_initialVerticalSpan](t5) {
      this[__ScaleGestureRecognizer__initialVerticalSpan] = t5;
    }
    set [_currentVerticalSpan](t6) {
      this[__ScaleGestureRecognizer__currentVerticalSpan] = t6;
    }
    get [_currentVerticalSpan]() {
      let t7;
      t7 = this[__ScaleGestureRecognizer__currentVerticalSpan];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_currentVerticalSpan")) : t7;
    }
    get [_localFocalPoint]() {
      let t7;
      t7 = this[__ScaleGestureRecognizer__localFocalPoint];
      return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_localFocalPoint")) : t7;
    }
    set [_localFocalPoint](t7) {
      this[__ScaleGestureRecognizer__localFocalPoint] = t7;
    }
    get [_pointerLocations]() {
      let t8;
      t8 = this[__ScaleGestureRecognizer__pointerLocations];
      return t8 == null ? dart.throw(new _internal.LateError.fieldNI("_pointerLocations")) : t8;
    }
    set [_pointerLocations](t8) {
      this[__ScaleGestureRecognizer__pointerLocations] = t8;
    }
    get [_pointerQueue]() {
      let t9;
      t9 = this[__ScaleGestureRecognizer__pointerQueue];
      return t9 == null ? dart.throw(new _internal.LateError.fieldNI("_pointerQueue")) : t9;
    }
    set [_pointerQueue](t9) {
      this[__ScaleGestureRecognizer__pointerQueue] = t9;
    }
    get [_delta]() {
      let t10;
      t10 = this[__ScaleGestureRecognizer__delta];
      return t10 == null ? dart.throw(new _internal.LateError.fieldNI("_delta")) : t10;
    }
    set [_delta](t10) {
      this[__ScaleGestureRecognizer__delta] = t10;
    }
    get [_scaleFactor]() {
      return this[_initialSpan] > 0.0 ? this[_currentSpan] / this[_initialSpan] : 1.0;
    }
    get [_horizontalScaleFactor]() {
      return this[_initialHorizontalSpan] > 0.0 ? this[_currentHorizontalSpan] / this[_initialHorizontalSpan] : 1.0;
    }
    get [_verticalScaleFactor]() {
      return this[_initialVerticalSpan] > 0.0 ? this[_currentVerticalSpan] / this[_initialVerticalSpan] : 1.0;
    }
    [_computeRotationFactor]() {
      if (this[_initialLine] == null || this[_currentLine] == null) {
        return 0.0;
      }
      let fx = dart.nullCheck(this[_initialLine]).pointerStartLocation.dx;
      let fy = dart.nullCheck(this[_initialLine]).pointerStartLocation.dy;
      let sx = dart.nullCheck(this[_initialLine]).pointerEndLocation.dx;
      let sy = dart.nullCheck(this[_initialLine]).pointerEndLocation.dy;
      let nfx = dart.nullCheck(this[_currentLine]).pointerStartLocation.dx;
      let nfy = dart.nullCheck(this[_currentLine]).pointerStartLocation.dy;
      let nsx = dart.nullCheck(this[_currentLine]).pointerEndLocation.dx;
      let nsy = dart.nullCheck(this[_currentLine]).pointerEndLocation.dy;
      let angle1 = math.atan2(fy - sy, fx - sx);
      let angle2 = math.atan2(nfy - nsy, nfx - nsx);
      return angle2 - angle1;
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      this[_velocityTrackers][$_set](event.pointer, new velocity_tracker.VelocityTracker.withKind(event.kind));
      if (this[_state] === scale$._ScaleState.ready) {
        this[_state] = scale$._ScaleState.possible;
        this[_initialSpan] = 0.0;
        this[_currentSpan] = 0.0;
        this[_initialHorizontalSpan] = 0.0;
        this[_currentHorizontalSpan] = 0.0;
        this[_initialVerticalSpan] = 0.0;
        this[_currentVerticalSpan] = 0.0;
        this[_pointerLocations] = new (T.IdentityMapOfint$Offset()).new();
        this[_pointerQueue] = T.JSArrayOfint().of([]);
      }
    }
    handleEvent(event) {
      if (!(this[_state] !== scale$._ScaleState.ready)) dart.assertFailed(null, I[1], 382, 12, "_state != _ScaleState.ready");
      let didChangeConfiguration = false;
      let shouldStartIfAccepted = false;
      if (events.PointerMoveEvent.is(event)) {
        let tracker = dart.nullCheck(this[_velocityTrackers][$_get](event.pointer));
        if (!event.synthesized) tracker.addPosition(event.timeStamp, event.position);
        this[_pointerLocations][$_set](event.pointer, event.position);
        shouldStartIfAccepted = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerDownEvent.is(event)) {
        this[_pointerLocations][$_set](event.pointer, event.position);
        this[_pointerQueue][$add](event.pointer);
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_pointerLocations][$remove](event.pointer);
        this[_pointerQueue][$remove](event.pointer);
        didChangeConfiguration = true;
        this[_lastTransform] = event.transform;
      }
      this[_updateLines]();
      this[_update]();
      if (!didChangeConfiguration || this[_reconfigure](event.pointer)) this[_advanceStateMachine](shouldStartIfAccepted, event.kind);
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    [_update]() {
      let count = this[_pointerLocations][$keys][$length];
      let previousFocalPoint = this[_currentFocalPoint];
      let focalPoint = ui.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys])
        focalPoint = focalPoint['+'](dart.nullCheck(this[_pointerLocations][$_get](pointer)));
      this[_currentFocalPoint] = count > 0 ? focalPoint['/'](count[$toDouble]()) : ui.Offset.zero;
      if (previousFocalPoint == null) {
        this[_localFocalPoint] = events.PointerEvent.transformPosition(this[_lastTransform], dart.nullCheck(this[_currentFocalPoint]));
        this[_delta] = ui.Offset.zero;
      } else {
        let localPreviousFocalPoint = this[_localFocalPoint];
        this[_localFocalPoint] = events.PointerEvent.transformPosition(this[_lastTransform], dart.nullCheck(this[_currentFocalPoint]));
        this[_delta] = this[_localFocalPoint]['-'](localPreviousFocalPoint);
      }
      let totalDeviation = 0.0;
      let totalHorizontalDeviation = 0.0;
      let totalVerticalDeviation = 0.0;
      for (let pointer of this[_pointerLocations][$keys]) {
        totalDeviation = totalDeviation + dart.nullCheck(this[_currentFocalPoint])['-'](dart.nullCheck(this[_pointerLocations][$_get](pointer))).distance;
        totalHorizontalDeviation = totalHorizontalDeviation + (dart.nullCheck(this[_currentFocalPoint]).dx - dart.nullCheck(this[_pointerLocations][$_get](pointer)).dx)[$abs]();
        totalVerticalDeviation = totalVerticalDeviation + (dart.nullCheck(this[_currentFocalPoint]).dy - dart.nullCheck(this[_pointerLocations][$_get](pointer)).dy)[$abs]();
      }
      this[_currentSpan] = count > 0 ? totalDeviation / count : 0.0;
      this[_currentHorizontalSpan] = count > 0 ? totalHorizontalDeviation / count : 0.0;
      this[_currentVerticalSpan] = count > 0 ? totalVerticalDeviation / count : 0.0;
    }
    [_updateLines]() {
      let count = this[_pointerLocations][$keys][$length];
      if (!(this[_pointerQueue][$length] >= count)) dart.assertFailed(null, I[1], 459, 12, "_pointerQueue.length >= count");
      if (count < 2) {
        this[_initialLine] = this[_currentLine];
      } else if (this[_initialLine] != null && dart.nullCheck(this[_initialLine]).pointerStartId === this[_pointerQueue][$_get](0) && dart.nullCheck(this[_initialLine]).pointerEndId === this[_pointerQueue][$_get](1)) {
        this[_currentLine] = new scale$._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](0))), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](1)))});
      } else {
        this[_initialLine] = new scale$._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](0))), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: dart.nullCheck(this[_pointerLocations][$_get](this[_pointerQueue][$_get](1)))});
        this[_currentLine] = this[_initialLine];
      }
    }
    [_reconfigure](pointer) {
      this[_initialFocalPoint] = dart.nullCheck(this[_currentFocalPoint]);
      this[_initialSpan] = this[_currentSpan];
      this[_initialLine] = this[_currentLine];
      this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
      this[_initialVerticalSpan] = this[_currentVerticalSpan];
      if (this[_state] === scale$._ScaleState.started) {
        if (this.onEnd != null) {
          let tracker = dart.nullCheck(this[_velocityTrackers][$_get](pointer));
          let velocity = tracker.getVelocity();
          if (scale$._isFlingGesture(velocity)) {
            let pixelsPerSecond = velocity.pixelsPerSecond;
            if (pixelsPerSecond.distanceSquared > 8000 * 8000) velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond['/'](pixelsPerSecond.distance)['*'](8000)});
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(new scale$.ScaleEndDetails.new({velocity: velocity, pointerCount: this[_pointerQueue][$length]})), T.VoidTovoid()));
          } else {
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => dart.nullCheck(this.onEnd)(new scale$.ScaleEndDetails.new({pointerCount: this[_pointerQueue][$length]})), T.VoidTovoid()));
          }
        }
        this[_state] = scale$._ScaleState.accepted;
        return false;
      }
      return true;
    }
    [_advanceStateMachine](shouldStartIfAccepted, pointerDeviceKind) {
      if (this[_state] === scale$._ScaleState.ready) this[_state] = scale$._ScaleState.possible;
      if (this[_state] === scale$._ScaleState.possible) {
        let spanDelta = (this[_currentSpan] - this[_initialSpan])[$abs]();
        let focalPointDelta = dart.nullCheck(this[_currentFocalPoint])['-'](this[_initialFocalPoint]).distance;
        if (spanDelta > events.computeScaleSlop(pointerDeviceKind) || focalPointDelta > events.computePanSlop(pointerDeviceKind, this.gestureSettings)) this.resolve(arena.GestureDisposition.accepted);
      } else if (this[_state].index >= scale$._ScaleState.accepted.index) {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (this[_state] === scale$._ScaleState.accepted && shouldStartIfAccepted) {
        this[_state] = scale$._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
      if (this[_state] === scale$._ScaleState.started && this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => {
        dart.nullCheck(this.onUpdate)(new scale$.ScaleUpdateDetails.new({scale: this[_scaleFactor], horizontalScale: this[_horizontalScaleFactor], verticalScale: this[_verticalScaleFactor], focalPoint: dart.nullCheck(this[_currentFocalPoint]), localFocalPoint: this[_localFocalPoint], rotation: this[_computeRotationFactor](), pointerCount: this[_pointerQueue][$length], focalPointDelta: this[_delta]}));
      }, T.VoidTovoid()));
    }
    [_dispatchOnStartCallbackIfNeeded]() {
      if (!(this[_state] === scale$._ScaleState.started)) dart.assertFailed(null, I[1], 545, 12, "_state == _ScaleState.started");
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => {
        dart.nullCheck(this.onStart)(new scale$.ScaleStartDetails.new({focalPoint: dart.nullCheck(this[_currentFocalPoint]), localFocalPoint: this[_localFocalPoint], pointerCount: this[_pointerQueue][$length]}));
      }, T.VoidTovoid()));
    }
    acceptGesture(pointer) {
      if (this[_state] === scale$._ScaleState.possible) {
        this[_state] = scale$._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
        if (this.dragStartBehavior === recognizer.DragStartBehavior.start) {
          this[_initialFocalPoint] = dart.nullCheck(this[_currentFocalPoint]);
          this[_initialSpan] = this[_currentSpan];
          this[_initialLine] = this[_currentLine];
          this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
          this[_initialVerticalSpan] = this[_currentVerticalSpan];
        }
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      switch (this[_state]) {
        case C[1] || CT.C1:
        {
          this.resolve(arena.GestureDisposition.rejected);
          break;
        }
        case C[0] || CT.C0:
        {
          if (!false) dart.assertFailed(null, I[1], 583, 16, "false");
          break;
        }
        case C[2] || CT.C2:
        {
          break;
        }
        case C[3] || CT.C3:
        {
          if (!false) dart.assertFailed(null, I[1], 588, 16, "false");
          break;
        }
      }
      this[_state] = scale$._ScaleState.ready;
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    get debugDescription() {
      return "scale";
    }
  };
  (scale$.ScaleGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C[7] || CT.C7;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[_state] = scale$._ScaleState.ready;
    this[_lastTransform] = null;
    this[__ScaleGestureRecognizer__initialFocalPoint] = null;
    this[_currentFocalPoint] = null;
    this[__ScaleGestureRecognizer__initialSpan] = null;
    this[__ScaleGestureRecognizer__currentSpan] = null;
    this[__ScaleGestureRecognizer__initialHorizontalSpan] = null;
    this[__ScaleGestureRecognizer__currentHorizontalSpan] = null;
    this[__ScaleGestureRecognizer__initialVerticalSpan] = null;
    this[__ScaleGestureRecognizer__currentVerticalSpan] = null;
    this[__ScaleGestureRecognizer__localFocalPoint] = null;
    this[_initialLine] = null;
    this[_currentLine] = null;
    this[__ScaleGestureRecognizer__pointerLocations] = null;
    this[__ScaleGestureRecognizer__pointerQueue] = null;
    this[_velocityTrackers] = new (T.IdentityMapOfint$VelocityTracker()).new();
    this[__ScaleGestureRecognizer__delta] = null;
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(dragStartBehavior !== null)) dart.assertFailed(null, I[1], 269, 15, "dragStartBehavior != null");
    scale$.ScaleGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = scale$.ScaleGestureRecognizer.prototype;
  dart.addTypeTests(scale$.ScaleGestureRecognizer);
  dart.addTypeCaches(scale$.ScaleGestureRecognizer);
  dart.setMethodSignature(scale$.ScaleGestureRecognizer, () => ({
    __proto__: dart.getMethods(scale$.ScaleGestureRecognizer.__proto__),
    [_computeRotationFactor]: dart.fnType(core.double, []),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLines]: dart.fnType(dart.void, []),
    [_reconfigure]: dart.fnType(core.bool, [core.int]),
    [_advanceStateMachine]: dart.fnType(dart.void, [core.bool, ui.PointerDeviceKind]),
    [_dispatchOnStartCallbackIfNeeded]: dart.fnType(dart.void, []),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(scale$.ScaleGestureRecognizer, () => ({
    __proto__: dart.getGetters(scale$.ScaleGestureRecognizer.__proto__),
    [_initialFocalPoint]: ui.Offset,
    [_initialSpan]: core.double,
    [_currentSpan]: core.double,
    [_initialHorizontalSpan]: core.double,
    [_currentHorizontalSpan]: core.double,
    [_initialVerticalSpan]: core.double,
    [_currentVerticalSpan]: core.double,
    [_localFocalPoint]: ui.Offset,
    [_pointerLocations]: core.Map$(core.int, ui.Offset),
    [_pointerQueue]: core.List$(core.int),
    [_delta]: ui.Offset,
    [_scaleFactor]: core.double,
    [_horizontalScaleFactor]: core.double,
    [_verticalScaleFactor]: core.double,
    debugDescription: core.String
  }));
  dart.setSetterSignature(scale$.ScaleGestureRecognizer, () => ({
    __proto__: dart.getSetters(scale$.ScaleGestureRecognizer.__proto__),
    [_initialFocalPoint]: ui.Offset,
    [_initialSpan]: core.double,
    [_currentSpan]: core.double,
    [_initialHorizontalSpan]: core.double,
    [_currentHorizontalSpan]: core.double,
    [_initialVerticalSpan]: core.double,
    [_currentVerticalSpan]: core.double,
    [_localFocalPoint]: ui.Offset,
    [_pointerLocations]: core.Map$(core.int, ui.Offset),
    [_pointerQueue]: core.List$(core.int),
    [_delta]: ui.Offset
  }));
  dart.setLibraryUri(scale$.ScaleGestureRecognizer, I[0]);
  dart.setFieldSignature(scale$.ScaleGestureRecognizer, () => ({
    __proto__: dart.getFields(scale$.ScaleGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(recognizer.DragStartBehavior),
    onStart: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale$.ScaleStartDetails]))),
    onUpdate: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale$.ScaleUpdateDetails]))),
    onEnd: dart.fieldType(dart.nullable(dart.fnType(dart.void, [scale$.ScaleEndDetails]))),
    [_state]: dart.fieldType(scale$._ScaleState),
    [_lastTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [__ScaleGestureRecognizer__initialFocalPoint]: dart.fieldType(dart.nullable(ui.Offset)),
    [_currentFocalPoint]: dart.fieldType(dart.nullable(ui.Offset)),
    [__ScaleGestureRecognizer__initialSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__initialHorizontalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentHorizontalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__initialVerticalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__currentVerticalSpan]: dart.fieldType(dart.nullable(core.double)),
    [__ScaleGestureRecognizer__localFocalPoint]: dart.fieldType(dart.nullable(ui.Offset)),
    [_initialLine]: dart.fieldType(dart.nullable(scale$._LineBetweenPointers)),
    [_currentLine]: dart.fieldType(dart.nullable(scale$._LineBetweenPointers)),
    [__ScaleGestureRecognizer__pointerLocations]: dart.fieldType(dart.nullable(core.Map$(core.int, ui.Offset))),
    [__ScaleGestureRecognizer__pointerQueue]: dart.fieldType(dart.nullable(core.List$(core.int))),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker)),
    [__ScaleGestureRecognizer__delta]: dart.fieldType(dart.nullable(ui.Offset))
  }));
  scale$._isFlingGesture = function _isFlingGesture(velocity) {
    if (!(velocity !== null)) dart.assertFailed(null, I[1], 214, 10, "velocity != null");
    let speedSquared = velocity.pixelsPerSecond.distanceSquared;
    return speedSquared > 50 * 50;
  };
  dart.trackLibraries("packages/flutter/src/gestures/scale.dart", {
    "package:flutter/src/gestures/scale.dart": scale$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scale.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/scale.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__scale: scale$
  };
}));

//# sourceMappingURL=scale.dart.lib.js.map
