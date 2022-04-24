define(['dart_sdk', 'packages/flutter/src/gestures/debug.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/gesture_settings.dart', 'packages/flutter/src/gestures/binding.dart', 'packages/flutter/src/gestures/team.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__gestures__recognizer_dart(dart_sdk, packages__flutter__src__gestures__debug$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__gesture_settings$46dart, packages__flutter__src__gestures__binding$46dart, packages__flutter__src__gestures__team$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__gestures__debug$46dart.src__gestures__debug;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const gesture_settings = packages__flutter__src__gestures__gesture_settings$46dart.src__gestures__gesture_settings;
  const binding = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  const team = packages__flutter__src__gestures__team$46dart.src__gestures__team;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var recognizer = Object.create(dart.library);
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $times = dartx['*'];
  var $isNotEmpty = dartx.isNotEmpty;
  var $values = dartx.values;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $containsValue = dartx.containsValue;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    IdentityMapOfint$PointerDeviceKind: () => (T$.IdentityMapOfint$PointerDeviceKind = dart.constFn(_js_helper.IdentityMap$(core.int, ui.PointerDeviceKind)))(),
    LinkedHashSetOfPointerDeviceKind: () => (T$.LinkedHashSetOfPointerDeviceKind = dart.constFn(collection.LinkedHashSet$(ui.PointerDeviceKind)))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfGestureRecognizer: () => (T$.DiagnosticsPropertyOfGestureRecognizer = dart.constFn(diagnostics.DiagnosticsProperty$(recognizer.GestureRecognizer)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T$.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T$.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T$.ListOfDiagnosticsNode(), [])))(),
    DiagnosticsPropertyOfObject: () => (T$.DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))(),
    IdentityMapOfint$GestureArenaEntry: () => (T$.IdentityMapOfint$GestureArenaEntry = dart.constFn(_js_helper.IdentityMap$(core.int, arena.GestureArenaEntry)))(),
    _IdentityHashSetOfint: () => (T$._IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))(),
    ListOfGestureArenaEntry: () => (T$.ListOfGestureArenaEntry = dart.constFn(core.List$(arena.GestureArenaEntry)))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    EnumPropertyOfGestureRecognizerState: () => (T$.EnumPropertyOfGestureRecognizerState = dart.constFn(diagnostics.EnumProperty$(recognizer.GestureRecognizerState)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_Enum__name]: "start",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.constList([C[0] || CT.C0, C[1] || CT.C1], recognizer.DragStartBehavior);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_Enum__name]: "ready",
        [_Enum_index]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_Enum__name]: "possible",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_Enum__name]: "defunct",
        [_Enum_index]: 2
      });
    },
    get C6() {
      return C[6] = dart.constList([C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5], recognizer.GestureRecognizerState);
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: recognizer.OffsetPair.prototype,
        [global$]: C[8] || CT.C8,
        [local$]: C[8] || CT.C8
      });
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "package:flutter/src/gestures/recognizer.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/recognizer.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  recognizer.DragStartBehavior = class DragStartBehavior extends core._Enum {
    toString() {
      return "DragStartBehavior." + this[_name];
    }
  };
  (recognizer.DragStartBehavior.new = function(index, name) {
    recognizer.DragStartBehavior.__proto__.new.call(this, index, name);
    ;
  }).prototype = recognizer.DragStartBehavior.prototype;
  dart.addTypeTests(recognizer.DragStartBehavior);
  dart.addTypeCaches(recognizer.DragStartBehavior);
  dart.setLibraryUri(recognizer.DragStartBehavior, I[0]);
  dart.setStaticFieldSignature(recognizer.DragStartBehavior, () => ['values', 'down', 'start']);
  dart.defineExtensionMethods(recognizer.DragStartBehavior, ['toString']);
  recognizer.DragStartBehavior.down = C[0] || CT.C0;
  recognizer.DragStartBehavior.start = C[1] || CT.C1;
  recognizer.DragStartBehavior.values = C[2] || CT.C2;
  var debugOwner$ = dart.privateName(recognizer, "GestureRecognizer.debugOwner");
  var gestureSettings = dart.privateName(recognizer, "GestureRecognizer.gestureSettings");
  var _pointerToKind = dart.privateName(recognizer, "_pointerToKind");
  var _supportedDevices = dart.privateName(recognizer, "_supportedDevices");
  const GestureArenaMember_DiagnosticableTreeMixin$36 = class GestureArenaMember_DiagnosticableTreeMixin extends arena.GestureArenaMember {};
  (GestureArenaMember_DiagnosticableTreeMixin$36.new = function() {
  }).prototype = GestureArenaMember_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(GestureArenaMember_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  recognizer.GestureRecognizer = class GestureRecognizer extends GestureArenaMember_DiagnosticableTreeMixin$36 {
    get debugOwner() {
      return this[debugOwner$];
    }
    set debugOwner(value) {
      super.debugOwner = value;
    }
    get gestureSettings() {
      return this[gestureSettings];
    }
    set gestureSettings(value) {
      this[gestureSettings] = value;
    }
    addPointer(event) {
      this[_pointerToKind][$_set](event.pointer, event.kind);
      if (this.isPointerAllowed(event)) {
        this.addAllowedPointer(event);
      } else {
        this.handleNonAllowedPointer(event);
      }
    }
    addAllowedPointer(event) {
    }
    handleNonAllowedPointer(event) {
    }
    isPointerAllowed(event) {
      return this[_supportedDevices] == null || dart.nullCheck(this[_supportedDevices]).contains(event.kind);
    }
    getKindForPointer(pointer) {
      if (!this[_pointerToKind][$containsKey](pointer)) dart.assertFailed(null, I[1], 156, 12, "_pointerToKind.containsKey(pointer)");
      return dart.nullCheck(this[_pointerToKind][$_get](pointer));
    }
    dispose() {
    }
    invokeCallback(T, name, callback, opts) {
      let debugReport = opts && 'debugReport' in opts ? opts.debugReport : null;
      if (!(callback !== null)) dart.assertFailed(null, I[1], 185, 12, "callback != null");
      let result = null;
      try {
        if (!dart.fn(() => {
          let t0;
          if (debug.debugPrintRecognizerCallbacksTrace) {
            let report = debugReport != null ? debugReport() : null;
            let prefix = debug.debugPrintGestureArenaDiagnostics ? " "[$times](19) + "❙ " : "";
            print.debugPrint(prefix + dart.str(this) + " calling " + name + " callback." + ((t0 = report, t0 == null ? null : t0[$isNotEmpty]) === true ? " " + dart.str(report) : ""));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 188, 14, "() {\n        if (debugPrintRecognizerCallbacksTrace) {\n          final String? report = debugReport != null ? debugReport() : null;\n          // The 19 in the line below is the width of the prefix used by\n          // _debugLogDiagnostic in arena.dart.\n          final String prefix = debugPrintGestureArenaDiagnostics ? '${' ' * 19}❙ ' : '';\n          debugPrint('$prefix$this calling $name callback.${ report?.isNotEmpty == true ? \" $report\" : \"\" }');\n        }\n        return true;\n      }()");
        result = callback();
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        if (core.Object.is(exception)) {
          let collector = null;
          if (!dart.fn(() => {
            collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new diagnostics.StringProperty.new("Handler", name), new (T$.DiagnosticsPropertyOfGestureRecognizer()).new("Recognizer", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]), T$.VoidToListOfDiagnosticsNode());
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[1], 201, 14, "() {\n        collector = () => <DiagnosticsNode>[\n          StringProperty('Handler', name),\n          DiagnosticsProperty<GestureRecognizer>('Recognizer', this, style: DiagnosticsTreeStyle.errorProperty),\n        ];\n        return true;\n      }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture", context: new assertions.ErrorDescription.new("while handling a gesture"), informationCollector: collector}));
        } else
          throw e;
      }
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfObject()).new("debugOwner", this.debugOwner, {defaultValue: null}));
    }
  };
  (recognizer.GestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    this[gestureSettings] = null;
    this[_pointerToKind] = new (T$.IdentityMapOfint$PointerDeviceKind()).new();
    this[debugOwner$] = debugOwner;
    if (!(kind == null || supportedDevices == null)) dart.assertFailed(null, I[1], 76, 15, "kind == null || supportedDevices == null");
    this[_supportedDevices] = kind == null ? supportedDevices : T$.LinkedHashSetOfPointerDeviceKind().from([kind]);
    ;
  }).prototype = recognizer.GestureRecognizer.prototype;
  dart.addTypeTests(recognizer.GestureRecognizer);
  dart.addTypeCaches(recognizer.GestureRecognizer);
  dart.setMethodSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.GestureRecognizer.__proto__),
    addPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    handleNonAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerDownEvent]),
    getKindForPointer: dart.fnType(ui.PointerDeviceKind, [core.int]),
    dispose: dart.fnType(dart.void, []),
    invokeCallback: dart.gFnType(T => [dart.nullable(T), [core.String, dart.fnType(T, [])], {debugReport: dart.nullable(dart.fnType(core.String, []))}, {}], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(recognizer.GestureRecognizer, I[0]);
  dart.setFieldSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizer.__proto__),
    debugOwner: dart.finalFieldType(dart.nullable(core.Object)),
    gestureSettings: dart.fieldType(dart.nullable(gesture_settings.DeviceGestureSettings)),
    [_supportedDevices]: dart.finalFieldType(dart.nullable(core.Set$(ui.PointerDeviceKind))),
    [_pointerToKind]: dart.finalFieldType(core.Map$(core.int, ui.PointerDeviceKind))
  }));
  var _entries = dart.privateName(recognizer, "_entries");
  var _trackedPointers = dart.privateName(recognizer, "_trackedPointers");
  var _team = dart.privateName(recognizer, "_team");
  var _addPointerToArena = dart.privateName(recognizer, "_addPointerToArena");
  recognizer.OneSequenceGestureRecognizer = class OneSequenceGestureRecognizer extends recognizer.GestureRecognizer {
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
    }
    handleNonAllowedPointer(event) {
      this.resolve(arena.GestureDisposition.rejected);
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
    }
    resolve(disposition) {
      let localEntries = T$.ListOfGestureArenaEntry().of(this[_entries][$values]);
      this[_entries][$clear]();
      for (let entry of localEntries)
        entry.resolve(disposition);
    }
    resolvePointer(pointer, disposition) {
      let entry = this[_entries][$_get](pointer);
      if (entry != null) {
        this[_entries][$remove](pointer);
        entry.resolve(disposition);
      }
    }
    dispose() {
      this.resolve(arena.GestureDisposition.rejected);
      for (let pointer of this[_trackedPointers])
        dart.nullCheck(binding.GestureBinding.instance).pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].clear();
      if (!this[_entries][$isEmpty]) dart.assertFailed(null, I[1], 327, 12, "_entries.isEmpty");
      super.dispose();
    }
    get team() {
      return this[_team];
    }
    set team(value) {
      if (!(value != null)) dart.assertFailed(null, I[1], 345, 12, "value != null");
      if (!this[_entries][$isEmpty]) dart.assertFailed(null, I[1], 346, 12, "_entries.isEmpty");
      if (!this[_trackedPointers][$isEmpty]) dart.assertFailed(null, I[1], 347, 12, "_trackedPointers.isEmpty");
      if (!(this[_team] == null)) dart.assertFailed(null, I[1], 348, 12, "_team == null");
      this[_team] = value;
    }
    [_addPointerToArena](pointer) {
      if (this[_team] != null) return dart.nullCheck(this[_team]).add(pointer, this);
      return dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(pointer, this);
    }
    startTrackingPointer(pointer, transform = null) {
      dart.nullCheck(binding.GestureBinding.instance).pointerRouter.addRoute(pointer, dart.bind(this, 'handleEvent'), transform);
      this[_trackedPointers].add(pointer);
      if (!!this[_entries][$containsValue](pointer)) dart.assertFailed(null, I[1], 376, 12, "!_entries.containsValue(pointer)");
      this[_entries][$_set](pointer, this[_addPointerToArena](pointer));
    }
    stopTrackingPointer(pointer) {
      if (this[_trackedPointers].contains(pointer)) {
        dart.nullCheck(binding.GestureBinding.instance).pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
        this[_trackedPointers].remove(pointer);
        if (this[_trackedPointers][$isEmpty]) this.didStopTrackingLastPointer(pointer);
      }
    }
    stopTrackingIfPointerNoLongerDown(event) {
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) this.stopTrackingPointer(event.pointer);
    }
  };
  (recognizer.OneSequenceGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    this[_entries] = new (T$.IdentityMapOfint$GestureArenaEntry()).new();
    this[_trackedPointers] = new (T$._IdentityHashSetOfint()).new();
    this[_team] = null;
    recognizer.OneSequenceGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = recognizer.OneSequenceGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.OneSequenceGestureRecognizer);
  dart.addTypeCaches(recognizer.OneSequenceGestureRecognizer);
  dart.setMethodSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.OneSequenceGestureRecognizer.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition]),
    resolvePointer: dart.fnType(dart.void, [core.int, arena.GestureDisposition]),
    [_addPointerToArena]: dart.fnType(arena.GestureArenaEntry, [core.int]),
    startTrackingPointer: dart.fnType(dart.void, [core.int], [dart.nullable(vector_math_64.Matrix4)]),
    stopTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingIfPointerNoLongerDown: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getGetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: dart.nullable(team.GestureArenaTeam)
  }));
  dart.setSetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getSetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: dart.nullable(team.GestureArenaTeam)
  }));
  dart.setLibraryUri(recognizer.OneSequenceGestureRecognizer, I[0]);
  dart.setFieldSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.OneSequenceGestureRecognizer.__proto__),
    [_entries]: dart.finalFieldType(core.Map$(core.int, arena.GestureArenaEntry)),
    [_trackedPointers]: dart.finalFieldType(core.Set$(core.int)),
    [_team]: dart.fieldType(dart.nullable(team.GestureArenaTeam))
  }));
  recognizer.GestureRecognizerState = class GestureRecognizerState extends core._Enum {
    toString() {
      return "GestureRecognizerState." + this[_name];
    }
  };
  (recognizer.GestureRecognizerState.new = function(index, name) {
    recognizer.GestureRecognizerState.__proto__.new.call(this, index, name);
    ;
  }).prototype = recognizer.GestureRecognizerState.prototype;
  dart.addTypeTests(recognizer.GestureRecognizerState);
  dart.addTypeCaches(recognizer.GestureRecognizerState);
  dart.setLibraryUri(recognizer.GestureRecognizerState, I[0]);
  dart.setStaticFieldSignature(recognizer.GestureRecognizerState, () => ['values', 'ready', 'possible', 'defunct']);
  dart.defineExtensionMethods(recognizer.GestureRecognizerState, ['toString']);
  recognizer.GestureRecognizerState.ready = C[3] || CT.C3;
  recognizer.GestureRecognizerState.possible = C[4] || CT.C4;
  recognizer.GestureRecognizerState.defunct = C[5] || CT.C5;
  recognizer.GestureRecognizerState.values = C[6] || CT.C6;
  var deadline$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.deadline");
  var preAcceptSlopTolerance$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.preAcceptSlopTolerance");
  var postAcceptSlopTolerance$ = dart.privateName(recognizer, "PrimaryPointerGestureRecognizer.postAcceptSlopTolerance");
  var _state = dart.privateName(recognizer, "_state");
  var _primaryPointer = dart.privateName(recognizer, "_primaryPointer");
  var _initialPosition = dart.privateName(recognizer, "_initialPosition");
  var _gestureAccepted = dart.privateName(recognizer, "_gestureAccepted");
  var _timer = dart.privateName(recognizer, "_timer");
  var _getGlobalDistance = dart.privateName(recognizer, "_getGlobalDistance");
  var _stopTimer = dart.privateName(recognizer, "_stopTimer");
  recognizer.PrimaryPointerGestureRecognizer = class PrimaryPointerGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get deadline() {
      return this[deadline$];
    }
    set deadline(value) {
      super.deadline = value;
    }
    get preAcceptSlopTolerance() {
      return this[preAcceptSlopTolerance$];
    }
    set preAcceptSlopTolerance(value) {
      super.preAcceptSlopTolerance = value;
    }
    get postAcceptSlopTolerance() {
      return this[postAcceptSlopTolerance$];
    }
    set postAcceptSlopTolerance(value) {
      super.postAcceptSlopTolerance = value;
    }
    get state() {
      return this[_state];
    }
    get primaryPointer() {
      return this[_primaryPointer];
    }
    get initialPosition() {
      return this[_initialPosition];
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      if (this.state === recognizer.GestureRecognizerState.ready) {
        this[_state] = recognizer.GestureRecognizerState.possible;
        this[_primaryPointer] = event.pointer;
        this[_initialPosition] = new recognizer.OffsetPair.new({local: event.localPosition, global: event.position});
        if (this.deadline != null) this[_timer] = async.Timer.new(dart.nullCheck(this.deadline), dart.fn(() => this.didExceedDeadlineWithEvent(event), T$.VoidTovoid()));
      }
    }
    handleNonAllowedPointer(event) {
      if (!this[_gestureAccepted]) {
        super.handleNonAllowedPointer(event);
      }
    }
    handleEvent(event) {
      if (!(this.state !== recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, I[1], 548, 12, "state != GestureRecognizerState.ready");
      if (this.state === recognizer.GestureRecognizerState.possible && event.pointer === this.primaryPointer) {
        let isPreAcceptSlopPastTolerance = !this[_gestureAccepted] && this.preAcceptSlopTolerance != null && this[_getGlobalDistance](event) > dart.nullCheck(this.preAcceptSlopTolerance);
        let isPostAcceptSlopPastTolerance = this[_gestureAccepted] && this.postAcceptSlopTolerance != null && this[_getGlobalDistance](event) > dart.nullCheck(this.postAcceptSlopTolerance);
        if (events.PointerMoveEvent.is(event) && (isPreAcceptSlopPastTolerance || isPostAcceptSlopPastTolerance)) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(dart.nullCheck(this.primaryPointer));
        } else {
          this.handlePrimaryPointer(event);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    didExceedDeadline() {
      if (!(this.deadline == null)) dart.assertFailed(null, I[1], 580, 12, "deadline == null");
    }
    didExceedDeadlineWithEvent(event) {
      this.didExceedDeadline();
    }
    acceptGesture(pointer) {
      if (pointer === this.primaryPointer) {
        this[_stopTimer]();
        this[_gestureAccepted] = true;
      }
    }
    rejectGesture(pointer) {
      if (pointer === this.primaryPointer && this.state === recognizer.GestureRecognizerState.possible) {
        this[_stopTimer]();
        this[_state] = recognizer.GestureRecognizerState.defunct;
      }
    }
    didStopTrackingLastPointer(pointer) {
      if (!(this.state !== recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, I[1], 612, 12, "state != GestureRecognizerState.ready");
      this[_stopTimer]();
      this[_state] = recognizer.GestureRecognizerState.ready;
      this[_initialPosition] = null;
      this[_gestureAccepted] = false;
    }
    dispose() {
      this[_stopTimer]();
      super.dispose();
    }
    [_stopTimer]() {
      if (this[_timer] != null) {
        dart.nullCheck(this[_timer]).cancel();
        this[_timer] = null;
      }
    }
    [_getGlobalDistance](event) {
      let offset = event.position['-'](dart.nullCheck(this.initialPosition).global);
      return offset.distance;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.EnumPropertyOfGestureRecognizerState()).new("state", this.state));
    }
  };
  (recognizer.PrimaryPointerGestureRecognizer.new = function(opts) {
    let deadline = opts && 'deadline' in opts ? opts.deadline : null;
    let preAcceptSlopTolerance = opts && 'preAcceptSlopTolerance' in opts ? opts.preAcceptSlopTolerance : 18;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : 18;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let supportedDevices = opts && 'supportedDevices' in opts ? opts.supportedDevices : null;
    this[_state] = recognizer.GestureRecognizerState.ready;
    this[_primaryPointer] = null;
    this[_initialPosition] = null;
    this[_gestureAccepted] = false;
    this[_timer] = null;
    this[deadline$] = deadline;
    this[preAcceptSlopTolerance$] = preAcceptSlopTolerance;
    this[postAcceptSlopTolerance$] = postAcceptSlopTolerance;
    if (!(preAcceptSlopTolerance == null || dart.notNull(preAcceptSlopTolerance) >= 0)) dart.assertFailed("The preAcceptSlopTolerance must be positive or null", I[1], 458, 10, "preAcceptSlopTolerance == null || preAcceptSlopTolerance >= 0");
    if (!(postAcceptSlopTolerance == null || dart.notNull(postAcceptSlopTolerance) >= 0)) dart.assertFailed("The postAcceptSlopTolerance must be positive or null", I[1], 462, 10, "postAcceptSlopTolerance == null || postAcceptSlopTolerance >= 0");
    recognizer.PrimaryPointerGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind, supportedDevices: supportedDevices});
    ;
  }).prototype = recognizer.PrimaryPointerGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.PrimaryPointerGestureRecognizer);
  dart.addTypeCaches(recognizer.PrimaryPointerGestureRecognizer);
  dart.setMethodSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didExceedDeadline: dart.fnType(dart.void, []),
    didExceedDeadlineWithEvent: dart.fnType(dart.void, [events.PointerDownEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_stopTimer]: dart.fnType(dart.void, []),
    [_getGlobalDistance]: dart.fnType(core.double, [events.PointerEvent])
  }));
  dart.setGetterSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getGetters(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    state: recognizer.GestureRecognizerState,
    primaryPointer: dart.nullable(core.int),
    initialPosition: dart.nullable(recognizer.OffsetPair)
  }));
  dart.setLibraryUri(recognizer.PrimaryPointerGestureRecognizer, I[0]);
  dart.setFieldSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    deadline: dart.finalFieldType(dart.nullable(core.Duration)),
    preAcceptSlopTolerance: dart.finalFieldType(dart.nullable(core.double)),
    postAcceptSlopTolerance: dart.finalFieldType(dart.nullable(core.double)),
    [_state]: dart.fieldType(recognizer.GestureRecognizerState),
    [_primaryPointer]: dart.fieldType(dart.nullable(core.int)),
    [_initialPosition]: dart.fieldType(dart.nullable(recognizer.OffsetPair)),
    [_gestureAccepted]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(dart.nullable(async.Timer))
  }));
  var local$ = dart.privateName(recognizer, "OffsetPair.local");
  var global$ = dart.privateName(recognizer, "OffsetPair.global");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  recognizer.OffsetPair = class OffsetPair extends core.Object {
    get local() {
      return this[local$];
    }
    set local(value) {
      super.local = value;
    }
    get global() {
      return this[global$];
    }
    set global(value) {
      super.global = value;
    }
    static ['_#new#tearOff'](opts) {
      let local = opts && 'local' in opts ? opts.local : null;
      let global = opts && 'global' in opts ? opts.global : null;
      return new recognizer.OffsetPair.new({local: local, global: global});
    }
    static fromEventPosition(event) {
      return new recognizer.OffsetPair.new({local: event.localPosition, global: event.position});
    }
    static ['_#fromEventPosition#tearOff'](event) {
      return recognizer.OffsetPair.fromEventPosition(event);
    }
    static fromEventDelta(event) {
      return new recognizer.OffsetPair.new({local: event.localDelta, global: event.delta});
    }
    static ['_#fromEventDelta#tearOff'](event) {
      return recognizer.OffsetPair.fromEventDelta(event);
    }
    ['+'](other) {
      return new recognizer.OffsetPair.new({local: this.local['+'](other.local), global: this.global['+'](other.global)});
    }
    ['-'](other) {
      return new recognizer.OffsetPair.new({local: this.local['-'](other.local), global: this.global['-'](other.global)});
    }
    toString() {
      return object.objectRuntimeType(this, "OffsetPair") + "(local: " + dart.str(this.local) + ", global: " + dart.str(this.global) + ")";
    }
  };
  (recognizer.OffsetPair.new = function(opts) {
    let local = opts && 'local' in opts ? opts.local : null;
    let global = opts && 'global' in opts ? opts.global : null;
    this[local$] = local;
    this[global$] = global;
    ;
  }).prototype = recognizer.OffsetPair.prototype;
  dart.addTypeTests(recognizer.OffsetPair);
  dart.addTypeCaches(recognizer.OffsetPair);
  dart.setMethodSignature(recognizer.OffsetPair, () => ({
    __proto__: dart.getMethods(recognizer.OffsetPair.__proto__),
    '+': dart.fnType(recognizer.OffsetPair, [recognizer.OffsetPair]),
    '-': dart.fnType(recognizer.OffsetPair, [recognizer.OffsetPair])
  }));
  dart.setStaticMethodSignature(recognizer.OffsetPair, () => ['fromEventPosition', 'fromEventDelta']);
  dart.setLibraryUri(recognizer.OffsetPair, I[0]);
  dart.setFieldSignature(recognizer.OffsetPair, () => ({
    __proto__: dart.getFields(recognizer.OffsetPair.__proto__),
    local: dart.finalFieldType(ui.Offset),
    global: dart.finalFieldType(ui.Offset)
  }));
  dart.setStaticFieldSignature(recognizer.OffsetPair, () => ['zero']);
  dart.defineExtensionMethods(recognizer.OffsetPair, ['toString']);
  dart.defineLazy(recognizer.OffsetPair, {
    /*recognizer.OffsetPair.zero*/get zero() {
      return C[7] || CT.C7;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/gestures/recognizer.dart", {
    "package:flutter/src/gestures/recognizer.dart": recognizer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["recognizer.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/recognizer.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__recognizer: recognizer
  };
}));

//# sourceMappingURL=recognizer.dart.lib.js.map
