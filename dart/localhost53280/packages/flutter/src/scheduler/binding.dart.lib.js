define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/collection/src/priority_queue.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/scheduler/debug.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/scheduler/priority.dart'], (function load__packages__flutter__src__scheduler__binding_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__collection__src__priority_queue$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__scheduler__debug$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__scheduler__priority$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const developer = dart_sdk.developer;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const priority_queue = packages__collection__src__priority_queue$46dart.src__priority_queue;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const debug$ = packages__flutter__src__scheduler__debug$46dart.src__scheduler__debug;
  const binding = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const priority$ = packages__flutter__src__scheduler__priority$46dart.src__scheduler__priority;
  var binding$ = Object.create(dart.library);
  var $forEach = dartx.forEach;
  var $add = dartx.add;
  var $length = dartx.length;
  var $contains = dartx.contains;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $compareTo = dartx.compareTo;
  var $_set = dartx._set;
  var $keys = dartx.keys;
  var $_get = dartx._get;
  var $trimRight = dartx.trimRight;
  var $split = dartx.split;
  var $join = dartx.join;
  var $round = dartx.round;
  var $toString = dartx.toString;
  var $padRight = dartx.padRight;
  var $padLeft = dartx.padLeft;
  var $clear = dartx.clear;
  var $times = dartx['*'];
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfFrameTiming: () => (T$.ListOfFrameTiming = dart.constFn(core.List$(ui.FrameTiming)))(),
    ListOfFrameTimingTovoid: () => (T$.ListOfFrameTimingTovoid = dart.constFn(dart.fnType(dart.void, [T$.ListOfFrameTiming()])))(),
    JSArrayOfListOfFrameTimingTovoid: () => (T$.JSArrayOfListOfFrameTimingTovoid = dart.constFn(_interceptors.JSArray$(T$.ListOfFrameTimingTovoid())))(),
    __Tobool: () => (T$.__Tobool = dart.constFn(dart.fnType(core.bool, [], {}, {priority: core.int, scheduler: binding$.SchedulerBinding})))(),
    HeapPriorityQueueOf_TaskEntry: () => (T$.HeapPriorityQueueOf_TaskEntry = dart.constFn(priority_queue.HeapPriorityQueue$(binding$._TaskEntry)))(),
    _TaskEntryAnd_TaskEntryToint: () => (T$._TaskEntryAnd_TaskEntryToint = dart.constFn(dart.fnType(core.int, [binding$._TaskEntry, binding$._TaskEntry])))(),
    IdentityMapOfint$_FrameCallbackEntry: () => (T$.IdentityMapOfint$_FrameCallbackEntry = dart.constFn(_js_helper.IdentityMap$(core.int, binding$._FrameCallbackEntry)))(),
    _IdentityHashSetOfint: () => (T$._IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))(),
    DurationTovoid: () => (T$.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    JSArrayOfDurationTovoid: () => (T$.JSArrayOfDurationTovoid = dart.constFn(_interceptors.JSArray$(T$.DurationTovoid())))(),
    ListOfListOfFrameTimingTovoid: () => (T$.ListOfListOfFrameTimingTovoid = dart.constFn(core.List$(T$.ListOfFrameTimingTovoid())))(),
    DiagnosticsPropertyOfListOfFrameTimingTovoid: () => (T$.DiagnosticsPropertyOfListOfFrameTimingTovoid = dart.constFn(diagnostics.DiagnosticsProperty$(T$.ListOfFrameTimingTovoid())))(),
    ListOfDiagnosticsNode: () => (T$.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T$.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T$.ListOfDiagnosticsNode(), [])))(),
    FutureOfdouble: () => (T$.FutureOfdouble = dart.constFn(async.Future$(core.double)))(),
    VoidToFutureOfdouble: () => (T$.VoidToFutureOfdouble = dart.constFn(dart.fnType(T$.FutureOfdouble(), [])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    doubleToFutureOfvoid: () => (T$.doubleToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [core.double])))(),
    LinkedHashMapOfint$_FrameCallbackEntry: () => (T$.LinkedHashMapOfint$_FrameCallbackEntry = dart.constFn(collection.LinkedHashMap$(core.int, binding$._FrameCallbackEntry)))(),
    CompleterOfvoid: () => (T$.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidToFutureOfvoid: () => (T$.VoidToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [])))(),
    intAnd_FrameCallbackEntryTovoid: () => (T$.intAnd_FrameCallbackEntryTovoid = dart.constFn(dart.fnType(dart.void, [core.int, binding$._FrameCallbackEntry])))(),
    ListOfDurationTovoid: () => (T$.ListOfDurationTovoid = dart.constFn(core.List$(T$.DurationTovoid())))(),
    IdentityMapOfString$dynamic: () => (T$.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_Enum__name]: "idle",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_Enum__name]: "transientCallbacks",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_Enum__name]: "midFrameMicrotasks",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_Enum__name]: "persistentCallbacks",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: binding$.SchedulerPhase.prototype,
        [_Enum__name]: "postFrameCallbacks",
        [_Enum_index]: 4
      });
    },
    get C5() {
      return C[5] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], binding$.SchedulerPhase);
    },
    get C6() {
      return C[6] = dart.fn(binding$.defaultSchedulingStrategy, T$.__Tobool());
    },
    get C7() {
      return C[7] = dart.fn(binding$.SchedulerBinding._taskSorter, T$._TaskEntryAnd_TaskEntryToint());
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_Enum__name]: "resumed",
        [_Enum_index]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_Enum__name]: "inactive",
        [_Enum_index]: 1
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_Enum__name]: "paused",
        [_Enum_index]: 2
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_Enum__name]: "detached",
        [_Enum_index]: 3
      });
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/scheduler/binding.dart",
    "package:flutter/src/scheduler/binding.dart"
  ];
  var ___TaskEntry_debugStack = dart.privateName(binding$, "_#_TaskEntry#debugStack");
  const _is__TaskEntry_default = Symbol('_is__TaskEntry_default');
  binding$._TaskEntry$ = dart.generic(T => {
    var __t$CompleterOfT = () => (__t$CompleterOfT = dart.constFn(async.Completer$(T)))();
    class _TaskEntry extends core.Object {
      static ['_#new#tearOff'](T, task, priority, debugLabel, flow) {
        return new (binding$._TaskEntry$(T)).new(task, priority, debugLabel, flow);
      }
      get debugStack() {
        let t0;
        t0 = this[___TaskEntry_debugStack];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("debugStack")) : t0;
      }
      set debugStack(t0) {
        this[___TaskEntry_debugStack] = t0;
      }
      run() {
        let t1;
        if (!false) {
          developer.Timeline.timeSync(core.Null, (t1 = this.debugLabel, t1 == null ? "Scheduled Task" : t1), dart.fn(() => {
            this.completer.complete(this.task());
          }, T$.VoidToNull()), {flow: this.flow != null ? developer.Flow.step(dart.nullCheck(this.flow).id) : null});
        } else {
          this.completer.complete(this.task());
        }
      }
    }
    (_TaskEntry.new = function(task, priority, debugLabel, flow) {
      this[___TaskEntry_debugStack] = null;
      this.completer = __t$CompleterOfT().new();
      this.task = task;
      this.priority = priority;
      this.debugLabel = debugLabel;
      this.flow = flow;
      if (!dart.fn(() => {
        this.debugStack = core.StackTrace.current;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 62, 12, "() {\n      debugStack = StackTrace.current;\n      return true;\n    }()");
    }).prototype = _TaskEntry.prototype;
    dart.addTypeTests(_TaskEntry);
    _TaskEntry.prototype[_is__TaskEntry_default] = true;
    dart.addTypeCaches(_TaskEntry);
    dart.setMethodSignature(_TaskEntry, () => ({
      __proto__: dart.getMethods(_TaskEntry.__proto__),
      run: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_TaskEntry, () => ({
      __proto__: dart.getGetters(_TaskEntry.__proto__),
      debugStack: core.StackTrace
    }));
    dart.setSetterSignature(_TaskEntry, () => ({
      __proto__: dart.getSetters(_TaskEntry.__proto__),
      debugStack: core.StackTrace
    }));
    dart.setLibraryUri(_TaskEntry, I[1]);
    dart.setFieldSignature(_TaskEntry, () => ({
      __proto__: dart.getFields(_TaskEntry.__proto__),
      task: dart.finalFieldType(dart.fnType(T, [])),
      priority: dart.finalFieldType(core.int),
      debugLabel: dart.finalFieldType(dart.nullable(core.String)),
      flow: dart.finalFieldType(dart.nullable(developer.Flow)),
      [___TaskEntry_debugStack]: dart.fieldType(dart.nullable(core.StackTrace)),
      completer: dart.finalFieldType(async.Completer$(T))
    }));
    return _TaskEntry;
  });
  binding$._TaskEntry = binding$._TaskEntry$();
  dart.addTypeTests(binding$._TaskEntry, _is__TaskEntry_default);
  binding$._FrameCallbackEntry = class _FrameCallbackEntry extends core.Object {
    static ['_#new#tearOff'](callback, opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      return new binding$._FrameCallbackEntry.new(callback, {rescheduling: rescheduling});
    }
  };
  (binding$._FrameCallbackEntry.new = function(callback, opts) {
    let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
    this.debugStack = null;
    this.callback = callback;
    if (!dart.fn(() => {
      if (rescheduling) {
        if (!dart.fn(() => {
          if (binding$._FrameCallbackEntry.debugCurrentCallbackStack == null) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("scheduleFrameCallback called with rescheduling true, but no callback is in scope."), new assertions.ErrorDescription.new("The \"rescheduling\" argument should only be set to true if the " + "callback is being reregistered from within the callback itself, " + "and only then if the callback itself is entirely synchronous."), new assertions.ErrorHint.new("If this is the initial registration of the callback, or if the " + "callback is asynchronous, then do not use the \"rescheduling\" " + "argument.")])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 94, 16, "() {\n          if (debugCurrentCallbackStack == null) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('scheduleFrameCallback called with rescheduling true, but no callback is in scope.'),\n              ErrorDescription(\n                'The \"rescheduling\" argument should only be set to true if the '\n                'callback is being reregistered from within the callback itself, '\n                'and only then if the callback itself is entirely synchronous.',\n              ),\n              ErrorHint(\n                'If this is the initial registration of the callback, or if the '\n                'callback is asynchronous, then do not use the \"rescheduling\" '\n                'argument.',\n              ),\n            ]);\n          }\n          return true;\n        }()");
        this.debugStack = binding$._FrameCallbackEntry.debugCurrentCallbackStack;
      } else {
        this.debugStack = core.StackTrace.current;
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 92, 12, "() {\n      if (rescheduling) {\n        assert(() {\n          if (debugCurrentCallbackStack == null) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('scheduleFrameCallback called with rescheduling true, but no callback is in scope.'),\n              ErrorDescription(\n                'The \"rescheduling\" argument should only be set to true if the '\n                'callback is being reregistered from within the callback itself, '\n                'and only then if the callback itself is entirely synchronous.',\n              ),\n              ErrorHint(\n                'If this is the initial registration of the callback, or if the '\n                'callback is asynchronous, then do not use the \"rescheduling\" '\n                'argument.',\n              ),\n            ]);\n          }\n          return true;\n        }());\n        debugStack = debugCurrentCallbackStack;\n      } else {\n        // TODO(ianh): trim the frames from this library, so that the call to scheduleFrameCallback is the top one\n        debugStack = StackTrace.current;\n      }\n      return true;\n    }()");
  }).prototype = binding$._FrameCallbackEntry.prototype;
  dart.addTypeTests(binding$._FrameCallbackEntry);
  dart.addTypeCaches(binding$._FrameCallbackEntry);
  dart.setLibraryUri(binding$._FrameCallbackEntry, I[1]);
  dart.setFieldSignature(binding$._FrameCallbackEntry, () => ({
    __proto__: dart.getFields(binding$._FrameCallbackEntry.__proto__),
    callback: dart.finalFieldType(dart.fnType(dart.void, [core.Duration])),
    debugStack: dart.fieldType(dart.nullable(core.StackTrace))
  }));
  dart.setStaticFieldSignature(binding$._FrameCallbackEntry, () => ['debugCurrentCallbackStack']);
  dart.defineLazy(binding$._FrameCallbackEntry, {
    /*binding$._FrameCallbackEntry.debugCurrentCallbackStack*/get debugCurrentCallbackStack() {
      return null;
    },
    set debugCurrentCallbackStack(_) {}
  }, false);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  binding$.SchedulerPhase = class SchedulerPhase extends core._Enum {
    toString() {
      return "SchedulerPhase." + this[_name];
    }
  };
  (binding$.SchedulerPhase.new = function(index, name) {
    binding$.SchedulerPhase.__proto__.new.call(this, index, name);
    ;
  }).prototype = binding$.SchedulerPhase.prototype;
  dart.addTypeTests(binding$.SchedulerPhase);
  dart.addTypeCaches(binding$.SchedulerPhase);
  dart.setLibraryUri(binding$.SchedulerPhase, I[1]);
  dart.setStaticFieldSignature(binding$.SchedulerPhase, () => ['values', 'idle', 'transientCallbacks', 'midFrameMicrotasks', 'persistentCallbacks', 'postFrameCallbacks']);
  dart.defineExtensionMethods(binding$.SchedulerPhase, ['toString']);
  binding$.SchedulerPhase.idle = C[0] || CT.C0;
  binding$.SchedulerPhase.transientCallbacks = C[1] || CT.C1;
  binding$.SchedulerPhase.midFrameMicrotasks = C[2] || CT.C2;
  binding$.SchedulerPhase.persistentCallbacks = C[3] || CT.C3;
  binding$.SchedulerPhase.postFrameCallbacks = C[4] || CT.C4;
  binding$.SchedulerPhase.values = C[5] || CT.C5;
  var schedulingStrategy = dart.privateName(binding$, "SchedulerBinding.schedulingStrategy");
  var _timingsCallbacks = dart.privateName(binding$, "_timingsCallbacks");
  var _lifecycleState = dart.privateName(binding$, "_lifecycleState");
  var _taskQueue = dart.privateName(binding$, "_taskQueue");
  var _hasRequestedAnEventLoopCallback = dart.privateName(binding$, "_hasRequestedAnEventLoopCallback");
  var _nextFrameCallbackId = dart.privateName(binding$, "_nextFrameCallbackId");
  var _transientCallbacks = dart.privateName(binding$, "_transientCallbacks");
  var _removedIds = dart.privateName(binding$, "_removedIds");
  var _persistentCallbacks = dart.privateName(binding$, "_persistentCallbacks");
  var _postFrameCallbacks = dart.privateName(binding$, "_postFrameCallbacks");
  var _nextFrameCompleter = dart.privateName(binding$, "_nextFrameCompleter");
  var _hasScheduledFrame = dart.privateName(binding$, "_hasScheduledFrame");
  var _schedulerPhase = dart.privateName(binding$, "_schedulerPhase");
  var _framesEnabled = dart.privateName(binding$, "_framesEnabled");
  var _warmUpFrame = dart.privateName(binding$, "_warmUpFrame");
  var _firstRawTimeStampInEpoch = dart.privateName(binding$, "_firstRawTimeStampInEpoch");
  var _epochStart = dart.privateName(binding$, "_epochStart");
  var _lastRawTimeStamp = dart.privateName(binding$, "_lastRawTimeStamp");
  var _currentFrameTimeStamp = dart.privateName(binding$, "_currentFrameTimeStamp");
  var _debugFrameNumber = dart.privateName(binding$, "_debugFrameNumber");
  var _debugBanner = dart.privateName(binding$, "_debugBanner");
  var _rescheduleAfterWarmUpFrame = dart.privateName(binding$, "_rescheduleAfterWarmUpFrame");
  var _frameTimelineTask = dart.privateName(binding$, "_frameTimelineTask");
  var _profileFramePostEvent = dart.privateName(binding$, "_profileFramePostEvent");
  var _executeTimingsCallbacks = dart.privateName(binding$, "_executeTimingsCallbacks");
  var _setFramesEnabledState = dart.privateName(binding$, "_setFramesEnabledState");
  var _ensureEventLoopCallback = dart.privateName(binding$, "_ensureEventLoopCallback");
  var _runTasks = dart.privateName(binding$, "_runTasks");
  var _handleBeginFrame = dart.privateName(binding$, "_handleBeginFrame");
  var _handleDrawFrame = dart.privateName(binding$, "_handleDrawFrame");
  var _adjustForEpoch = dart.privateName(binding$, "_adjustForEpoch");
  var _invokeFrameCallback = dart.privateName(binding$, "_invokeFrameCallback");
  binding$.SchedulerBinding = class SchedulerBinding extends binding.BindingBase {
    static get instance() {
      return binding$.SchedulerBinding._instance;
    }
    static _taskSorter(e1, e2) {
      return -e1.priority[$compareTo](e2.priority);
    }
    static debugPrintTransientCallbackRegistrationStack() {
      if (!dart.fn(() => {
        if (binding$._FrameCallbackEntry.debugCurrentCallbackStack != null) {
          print.debugPrint("When the current transient callback was registered, this was the stack:");
          print.debugPrint(assertions.FlutterError.defaultStackFilter(assertions.FlutterError.demangleStackTrace(dart.nullCheck(binding$._FrameCallbackEntry.debugCurrentCallbackStack)).toString()[$trimRight]()[$split]("\n"))[$join]("\n"));
        } else {
          print.debugPrint("No transient callback is currently executing.");
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 613, 12, "() {\n      if (_FrameCallbackEntry.debugCurrentCallbackStack != null) {\n        debugPrint('When the current transient callback was registered, this was the stack:');\n        debugPrint(\n          FlutterError.defaultStackFilter(\n            FlutterError.demangleStackTrace(\n              _FrameCallbackEntry.debugCurrentCallbackStack!,\n            ).toString().trimRight().split('\\n'),\n          ).join('\\n'),\n        );\n      } else {\n        debugPrint('No transient callback is currently executing.');\n      }\n      return true;\n    }()");
    }
    static _debugDescribeTimeStamp(timeStamp, buffer) {
      if (timeStamp.inDays > 0) buffer.write(dart.str(timeStamp.inDays) + "d ");
      if (timeStamp.inHours > 0) buffer.write(dart.str(timeStamp.inHours - timeStamp.inDays * 24) + "h ");
      if (timeStamp.inMinutes > 0) buffer.write(dart.str(timeStamp.inMinutes - timeStamp.inHours * 60) + "m ");
      if (timeStamp.inSeconds > 0) buffer.write(dart.str(timeStamp.inSeconds - timeStamp.inMinutes * 60) + "s ");
      buffer.write(dart.str(timeStamp.inMilliseconds - timeStamp.inSeconds * 1000));
      let microseconds = timeStamp.inMicroseconds - timeStamp.inMilliseconds * 1000;
      if (microseconds > 0) buffer.write("." + microseconds[$toString]()[$padLeft](3, "0"));
      buffer.write("ms");
    }
  };
  binding$.SchedulerBinding[dart.mixinOn] = BindingBase => class SchedulerBinding extends BindingBase {
    get schedulingStrategy() {
      return this[schedulingStrategy];
    }
    set schedulingStrategy(value) {
      this[schedulingStrategy] = value;
    }
    initInstances() {
      super.initInstances();
      binding$.SchedulerBinding._instance = this;
      if (!false) {
        this.addTimingsCallback(dart.fn(timings => {
          timings[$forEach](dart.bind(this, _profileFramePostEvent));
        }, T$.ListOfFrameTimingTovoid()));
      }
    }
    addTimingsCallback(callback) {
      this[_timingsCallbacks][$add](callback);
      if (this[_timingsCallbacks][$length] === 1) {
        if (!(this.window.onReportTimings == null)) dart.assertFailed(null, I[0], 264, 14, "window.onReportTimings == null");
        this.window.onReportTimings = dart.bind(this, _executeTimingsCallbacks);
      }
      if (!dart.equals(this.window.onReportTimings, dart.bind(this, _executeTimingsCallbacks))) dart.assertFailed(null, I[0], 267, 12, "window.onReportTimings == _executeTimingsCallbacks");
    }
    removeTimingsCallback(callback) {
      if (!this[_timingsCallbacks][$contains](callback)) dart.assertFailed(null, I[0], 272, 12, "_timingsCallbacks.contains(callback)");
      this[_timingsCallbacks][$remove](callback);
      if (this[_timingsCallbacks][$isEmpty]) {
        this.window.onReportTimings = null;
      }
    }
    [_executeTimingsCallbacks](timings) {
      let clonedCallbacks = T$.ListOfListOfFrameTimingTovoid().of(this[_timingsCallbacks]);
      for (let callback of clonedCallbacks) {
        try {
          if (this[_timingsCallbacks][$contains](callback)) {
            callback(timings);
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.fn(() => {
              collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfListOfFrameTimingTovoid()).new("The TimingsCallback that gets executed was", callback, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]), T$.VoidToListOfDiagnosticsNode());
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 290, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<TimingsCallback>(\n              'The TimingsCallback that gets executed was',\n              callback,\n              style: DiagnosticsTreeStyle.errorProperty,\n            ),\n          ];\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, context: new assertions.ErrorDescription.new("while executing callbacks for FrameTiming"), informationCollector: collector}));
          } else
            throw e;
        }
      }
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!false) {
        this.registerNumericServiceExtension({name: "timeDilation", getter: dart.fn(() => async.async(core.double, function*() {
            return binding$.timeDilation;
          }), T$.VoidToFutureOfdouble()), setter: dart.fn(value => async.async(dart.void, function*() {
            binding$.timeDilation = value;
          }), T$.doubleToFutureOfvoid())});
      }
    }
    get lifecycleState() {
      return this[_lifecycleState];
    }
    handleAppLifecycleStateChanged(state) {
      if (!(state !== null)) dart.assertFailed(null, I[0], 349, 12, "state != null");
      this[_lifecycleState] = state;
      switch (state) {
        case C[8] || CT.C8:
        case C[9] || CT.C9:
        {
          this[_setFramesEnabledState](true);
          break;
        }
        case C[10] || CT.C10:
        case C[11] || CT.C11:
        {
          this[_setFramesEnabledState](false);
          break;
        }
      }
    }
    scheduleTask(T, task, priority, opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let flow = opts && 'flow' in opts ? opts.flow : null;
      let isFirstTask = this[_taskQueue].isEmpty;
      let entry = new (binding$._TaskEntry$(T)).new(task, priority.value, debugLabel, flow);
      this[_taskQueue].add(entry);
      if (isFirstTask && !this.locked) this[_ensureEventLoopCallback]();
      return entry.completer.future;
    }
    unlocked() {
      super.unlocked();
      if (this[_taskQueue].isNotEmpty) this[_ensureEventLoopCallback]();
    }
    [_ensureEventLoopCallback]() {
      if (!!this.locked) dart.assertFailed(null, I[0], 424, 12, "!locked");
      if (!this[_taskQueue].isNotEmpty) dart.assertFailed(null, I[0], 425, 12, "_taskQueue.isNotEmpty");
      if (this[_hasRequestedAnEventLoopCallback]) return;
      this[_hasRequestedAnEventLoopCallback] = true;
      async.Timer.run(dart.bind(this, _runTasks));
    }
    [_runTasks]() {
      this[_hasRequestedAnEventLoopCallback] = false;
      if (this.handleEventLoopCallback()) this[_ensureEventLoopCallback]();
    }
    handleEventLoopCallback() {
      let t2;
      if (this[_taskQueue].isEmpty || this.locked) return false;
      let entry = this[_taskQueue].first;
      if (t2 = entry.priority, this.schedulingStrategy({priority: t2, scheduler: this})) {
        try {
          this[_taskQueue].removeFirst();
          entry.run();
        } catch (e) {
          let exception = dart.getThrown(e);
          let exceptionStack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let callbackStack = null;
            if (!dart.fn(() => {
              callbackStack = entry.debugStack;
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 461, 16, "() {\n          callbackStack = entry.debugStack;\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new assertions.ErrorDescription.new("during a task callback"), informationCollector: callbackStack == null ? null : dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack)]), T$.VoidToListOfDiagnosticsNode())}));
          } else
            throw e;
        }
        return this[_taskQueue].isNotEmpty;
      }
      return false;
    }
    get transientCallbackCount() {
      return this[_transientCallbacks][$length];
    }
    scheduleFrameCallback(callback, opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      this.scheduleFrame();
      this[_nextFrameCallbackId] = this[_nextFrameCallbackId] + 1;
      this[_transientCallbacks][$_set](this[_nextFrameCallbackId], new binding$._FrameCallbackEntry.new(callback, {rescheduling: rescheduling}));
      return this[_nextFrameCallbackId];
    }
    cancelFrameCallbackWithId(id) {
      if (!(id > 0)) dart.assertFailed(null, I[0], 535, 12, "id > 0");
      this[_transientCallbacks][$remove](id);
      this[_removedIds].add(id);
    }
    debugAssertNoTransientCallbacks(reason) {
      if (!dart.fn(() => {
        if (this.transientCallbackCount > 0) {
          let count = this.transientCallbackCount;
          let callbacks = T$.LinkedHashMapOfint$_FrameCallbackEntry().of(this[_transientCallbacks]);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: reason, library: "scheduler library", informationCollector: dart.fn(() => (() => {
              let t3 = T$.JSArrayOfDiagnosticsNode().of([]);
              if (count === 1)
                t3.push(new assertions.ErrorDescription.new("There was one transient callback left. " + "The stack trace for when it was registered is as follows:"));
              else
                t3.push(new assertions.ErrorDescription.new("There were " + dart.str(count) + " transient callbacks left. " + "The stack traces for when they were registered are as follows:"));
              for (let id of callbacks[$keys])
                t3.push(new assertions.DiagnosticsStackTrace.new("── callback " + dart.str(id) + " ──", dart.nullCheck(callbacks[$_get](id)).debugStack, {showSeparator: false}));
              return t3;
            })(), T$.VoidToListOfDiagnosticsNode())}));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 561, 12, "() {\n      if (transientCallbackCount > 0) {\n        // We cache the values so that we can produce them later\n        // even if the information collector is called after\n        // the problem has been resolved.\n        final int count = transientCallbackCount;\n        final Map<int, _FrameCallbackEntry> callbacks = Map<int, _FrameCallbackEntry>.of(_transientCallbacks);\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: reason,\n          library: 'scheduler library',\n          informationCollector: () => <DiagnosticsNode>[\n            if (count == 1)\n              // TODO(jacobr): I have added an extra line break in this case.\n              ErrorDescription(\n                'There was one transient callback left. '\n                'The stack trace for when it was registered is as follows:',\n              )\n            else\n              ErrorDescription(\n                'There were $count transient callbacks left. '\n                'The stack traces for when they were registered are as follows:',\n              ),\n            for (final int id in callbacks.keys)\n              DiagnosticsStackTrace('── callback $id ──', callbacks[id]!.debugStack, showSeparator: false),\n          ],\n        ));\n      }\n      return true;\n    }()");
      return true;
    }
    addPersistentFrameCallback(callback) {
      this[_persistentCallbacks][$add](callback);
    }
    addPostFrameCallback(callback) {
      this[_postFrameCallbacks][$add](callback);
    }
    get endOfFrame() {
      if (this[_nextFrameCompleter] == null) {
        if (this.schedulerPhase === binding$.SchedulerPhase.idle) this.scheduleFrame();
        this[_nextFrameCompleter] = T$.CompleterOfvoid().new();
        this.addPostFrameCallback(dart.fn(timeStamp => {
          dart.nullCheck(this[_nextFrameCompleter]).complete();
          this[_nextFrameCompleter] = null;
        }, T$.DurationTovoid()));
      }
      return dart.nullCheck(this[_nextFrameCompleter]).future;
    }
    get hasScheduledFrame() {
      return this[_hasScheduledFrame];
    }
    get schedulerPhase() {
      return this[_schedulerPhase];
    }
    get framesEnabled() {
      return this[_framesEnabled];
    }
    [_setFramesEnabledState](enabled) {
      if (this[_framesEnabled] === enabled) return;
      this[_framesEnabled] = enabled;
      if (enabled) this.scheduleFrame();
    }
    ensureFrameCallbacksRegistered() {
      let t4, t4$;
      t4 = this.window;
      t4.onBeginFrame == null ? t4.onBeginFrame = dart.bind(this, _handleBeginFrame) : null;
      t4$ = this.window;
      t4$.onDrawFrame == null ? t4$.onDrawFrame = dart.bind(this, _handleDrawFrame) : null;
    }
    ensureVisualUpdate() {
      switch (this.schedulerPhase) {
        case C[0] || CT.C0:
        case C[4] || CT.C4:
        {
          this.scheduleFrame();
          return;
        }
        case C[1] || CT.C1:
        case C[2] || CT.C2:
        case C[3] || CT.C3:
        {
          return;
        }
      }
    }
    scheduleFrame() {
      if (this[_hasScheduledFrame] || !this.framesEnabled) return;
      if (!dart.fn(() => {
        if (debug$.debugPrintScheduleFrameStacks) assertions.debugPrintStack({label: "scheduleFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 784, 12, "() {\n      if (debugPrintScheduleFrameStacks)\n        debugPrintStack(label: 'scheduleFrame() called. Current phase is $schedulerPhase.');\n      return true;\n    }()");
      this.ensureFrameCallbacksRegistered();
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleForcedFrame() {
      if (!this.framesEnabled) return;
      if (this[_hasScheduledFrame]) return;
      if (!dart.fn(() => {
        if (debug$.debugPrintScheduleFrameStacks) assertions.debugPrintStack({label: "scheduleForcedFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 822, 12, "() {\n      if (debugPrintScheduleFrameStacks)\n        debugPrintStack(label: 'scheduleForcedFrame() called. Current phase is $schedulerPhase.');\n      return true;\n    }()");
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleWarmUpFrame() {
      let t4;
      if (this[_warmUpFrame] || this.schedulerPhase !== binding$.SchedulerPhase.idle) return;
      this[_warmUpFrame] = true;
      let timelineTask = (t4 = new developer.TimelineTask.new(), (() => {
        t4.start("Warm-up frame");
        return t4;
      })());
      let hadScheduledFrame = this[_hasScheduledFrame];
      async.Timer.run(dart.fn(() => {
        if (!this[_warmUpFrame]) dart.assertFailed(null, I[0], 857, 14, "_warmUpFrame");
        this.handleBeginFrame(null);
      }, T$.VoidTovoid()));
      async.Timer.run(dart.fn(() => {
        if (!this[_warmUpFrame]) dart.assertFailed(null, I[0], 861, 14, "_warmUpFrame");
        this.handleDrawFrame();
        this.resetEpoch();
        this[_warmUpFrame] = false;
        if (hadScheduledFrame) this.scheduleFrame();
      }, T$.VoidTovoid()));
      this.lockEvents(dart.fn(() => async.async(dart.void, (function*() {
        yield this.endOfFrame;
        timelineTask.finish();
      }).bind(this)), T$.VoidToFutureOfvoid()));
    }
    resetEpoch() {
      this[_epochStart] = this[_adjustForEpoch](this[_lastRawTimeStamp]);
      this[_firstRawTimeStampInEpoch] = null;
    }
    [_adjustForEpoch](rawTimeStamp) {
      let rawDurationSinceEpoch = this[_firstRawTimeStampInEpoch] == null ? core.Duration.zero : rawTimeStamp['-'](dart.nullCheck(this[_firstRawTimeStampInEpoch]));
      return new core.Duration.new({microseconds: (rawDurationSinceEpoch.inMicroseconds / binding$.timeDilation)[$round]() + this[_epochStart].inMicroseconds});
    }
    get currentFrameTimeStamp() {
      if (!(this[_currentFrameTimeStamp] != null)) dart.assertFailed(null, I[0], 930, 12, "_currentFrameTimeStamp != null");
      return dart.nullCheck(this[_currentFrameTimeStamp]);
    }
    get currentSystemFrameTimeStamp() {
      if (!(this[_lastRawTimeStamp] !== null)) dart.assertFailed(null, I[0], 948, 12, "_lastRawTimeStamp != null");
      return this[_lastRawTimeStamp];
    }
    [_handleBeginFrame](rawTimeStamp) {
      if (this[_warmUpFrame]) {
        if (!!this[_rescheduleAfterWarmUpFrame]) dart.assertFailed(null, I[0], 970, 14, "!_rescheduleAfterWarmUpFrame");
        this[_rescheduleAfterWarmUpFrame] = true;
        return;
      }
      this.handleBeginFrame(rawTimeStamp);
    }
    [_handleDrawFrame]() {
      if (this[_rescheduleAfterWarmUpFrame]) {
        this[_rescheduleAfterWarmUpFrame] = false;
        this.addPostFrameCallback(dart.fn(timeStamp => {
          this[_hasScheduledFrame] = false;
          this.scheduleFrame();
        }, T$.DurationTovoid()));
        return;
      }
      this.handleDrawFrame();
    }
    handleBeginFrame(rawTimeStamp) {
      let t4, t4$, t4$0;
      t4 = this[_frameTimelineTask];
      t4 == null ? null : t4.start("Frame", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      this[_firstRawTimeStampInEpoch] == null ? this[_firstRawTimeStampInEpoch] = rawTimeStamp : null;
      this[_currentFrameTimeStamp] = this[_adjustForEpoch]((t4$ = rawTimeStamp, t4$ == null ? this[_lastRawTimeStamp] : t4$));
      if (rawTimeStamp != null) this[_lastRawTimeStamp] = rawTimeStamp;
      if (!dart.fn(() => {
        this[_debugFrameNumber] = this[_debugFrameNumber] + 1;
        if (debug$.debugPrintBeginFrameBanner || debug$.debugPrintEndFrameBanner) {
          let frameTimeStampDescription = new core.StringBuffer.new();
          if (rawTimeStamp != null) {
            binding$.SchedulerBinding._debugDescribeTimeStamp(dart.nullCheck(this[_currentFrameTimeStamp]), frameTimeStampDescription);
          } else {
            frameTimeStampDescription.write("(warm-up frame)");
          }
          this[_debugBanner] = "▄▄▄▄▄▄▄▄ Frame " + this[_debugFrameNumber][$toString]()[$padRight](7) + "   " + frameTimeStampDescription.toString()[$padLeft](18) + " ▄▄▄▄▄▄▄▄";
          if (debug$.debugPrintBeginFrameBanner) print.debugPrint(this[_debugBanner]);
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1030, 12, "() {\n      _debugFrameNumber += 1;\n\n      if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {\n        final StringBuffer frameTimeStampDescription = StringBuffer();\n        if (rawTimeStamp != null) {\n          _debugDescribeTimeStamp(_currentFrameTimeStamp!, frameTimeStampDescription);\n        } else {\n          frameTimeStampDescription.write('(warm-up frame)');\n        }\n        _debugBanner = '▄▄▄▄▄▄▄▄ Frame ${_debugFrameNumber.toString().padRight(7)}   ${frameTimeStampDescription.toString().padLeft(18)} ▄▄▄▄▄▄▄▄';\n        if (debugPrintBeginFrameBanner)\n          debugPrint(_debugBanner);\n      }\n      return true;\n    }()");
      if (!(this.schedulerPhase === binding$.SchedulerPhase.idle)) dart.assertFailed(null, I[0], 1047, 12, "schedulerPhase == SchedulerPhase.idle");
      this[_hasScheduledFrame] = false;
      try {
        t4$0 = this[_frameTimelineTask];
        t4$0 == null ? null : t4$0.start("Animate", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
        this[_schedulerPhase] = binding$.SchedulerPhase.transientCallbacks;
        let callbacks = this[_transientCallbacks];
        this[_transientCallbacks] = new (T$.IdentityMapOfint$_FrameCallbackEntry()).new();
        callbacks[$forEach](dart.fn((id, callbackEntry) => {
          if (!this[_removedIds].contains(id)) this[_invokeFrameCallback](callbackEntry.callback, dart.nullCheck(this[_currentFrameTimeStamp]), callbackEntry.debugStack);
        }, T$.intAnd_FrameCallbackEntryTovoid()));
        this[_removedIds].clear();
      } finally {
        this[_schedulerPhase] = binding$.SchedulerPhase.midFrameMicrotasks;
      }
    }
    handleDrawFrame() {
      let t4, t4$;
      if (!(this[_schedulerPhase] === binding$.SchedulerPhase.midFrameMicrotasks)) dart.assertFailed(null, I[0], 1075, 12, "_schedulerPhase == SchedulerPhase.midFrameMicrotasks");
      t4 = this[_frameTimelineTask];
      t4 == null ? null : t4.finish();
      try {
        this[_schedulerPhase] = binding$.SchedulerPhase.persistentCallbacks;
        for (let callback of this[_persistentCallbacks])
          this[_invokeFrameCallback](callback, dart.nullCheck(this[_currentFrameTimeStamp]));
        this[_schedulerPhase] = binding$.SchedulerPhase.postFrameCallbacks;
        let localPostFrameCallbacks = T$.ListOfDurationTovoid().of(this[_postFrameCallbacks]);
        this[_postFrameCallbacks][$clear]();
        for (let callback of localPostFrameCallbacks)
          this[_invokeFrameCallback](callback, dart.nullCheck(this[_currentFrameTimeStamp]));
      } finally {
        this[_schedulerPhase] = binding$.SchedulerPhase.idle;
        t4$ = this[_frameTimelineTask];
        t4$ == null ? null : t4$.finish();
        if (!dart.fn(() => {
          if (debug$.debugPrintEndFrameBanner) print.debugPrint("▀"[$times](dart.nullCheck(this[_debugBanner]).length));
          this[_debugBanner] = null;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1093, 14, "() {\n        if (debugPrintEndFrameBanner)\n          debugPrint('▀' * _debugBanner!.length);\n        _debugBanner = null;\n        return true;\n      }()");
        this[_currentFrameTimeStamp] = null;
      }
    }
    [_profileFramePostEvent](frameTiming) {
      this.postEvent("Flutter.Frame", new (T$.IdentityMapOfString$dynamic()).from(["number", frameTiming.frameNumber, "startTime", frameTiming.timestampInMicroseconds(ui.FramePhase.buildStart), "elapsed", frameTiming.totalSpan.inMicroseconds, "build", frameTiming.buildDuration.inMicroseconds, "raster", frameTiming.rasterDuration.inMicroseconds, "vsyncOverhead", frameTiming.vsyncOverhead.inMicroseconds]));
    }
    [_invokeFrameCallback](callback, timeStamp, callbackStack = null) {
      if (!(callback !== null)) dart.assertFailed(null, I[0], 1137, 12, "callback != null");
      if (!(binding$._FrameCallbackEntry.debugCurrentCallbackStack == null)) dart.assertFailed(null, I[0], 1138, 12, "_FrameCallbackEntry.debugCurrentCallbackStack == null");
      if (!dart.fn(() => {
        binding$._FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1139, 12, "() {\n      _FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;\n      return true;\n    }()");
      try {
        callback(timeStamp);
      } catch (e) {
        let exception = dart.getThrown(e);
        let exceptionStack = dart.stackTrace(e);
        if (core.Object.is(exception)) {
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new assertions.ErrorDescription.new("during a scheduler callback"), informationCollector: callbackStack == null ? null : dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack)]), T$.VoidToListOfDiagnosticsNode())}));
        } else
          throw e;
      }
      if (!dart.fn(() => {
        binding$._FrameCallbackEntry.debugCurrentCallbackStack = null;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1163, 12, "() {\n      _FrameCallbackEntry.debugCurrentCallbackStack = null;\n      return true;\n    }()");
    }
  };
  (binding$.SchedulerBinding[dart.mixinNew] = function() {
    this[_timingsCallbacks] = T$.JSArrayOfListOfFrameTimingTovoid().of([]);
    this[_lifecycleState] = null;
    this[schedulingStrategy] = C[6] || CT.C6;
    this[_taskQueue] = new (T$.HeapPriorityQueueOf_TaskEntry()).new(C[7] || CT.C7);
    this[_hasRequestedAnEventLoopCallback] = false;
    this[_nextFrameCallbackId] = 0;
    this[_transientCallbacks] = new (T$.IdentityMapOfint$_FrameCallbackEntry()).new();
    this[_removedIds] = new (T$._IdentityHashSetOfint()).new();
    this[_persistentCallbacks] = T$.JSArrayOfDurationTovoid().of([]);
    this[_postFrameCallbacks] = T$.JSArrayOfDurationTovoid().of([]);
    this[_nextFrameCompleter] = null;
    this[_hasScheduledFrame] = false;
    this[_schedulerPhase] = binding$.SchedulerPhase.idle;
    this[_framesEnabled] = true;
    this[_warmUpFrame] = false;
    this[_firstRawTimeStampInEpoch] = null;
    this[_epochStart] = core.Duration.zero;
    this[_lastRawTimeStamp] = core.Duration.zero;
    this[_currentFrameTimeStamp] = null;
    this[_debugFrameNumber] = 0;
    this[_debugBanner] = null;
    this[_rescheduleAfterWarmUpFrame] = false;
    this[_frameTimelineTask] = false ? null : new developer.TimelineTask.new();
  }).prototype = binding$.SchedulerBinding.prototype;
  dart.addTypeTests(binding$.SchedulerBinding);
  dart.addTypeCaches(binding$.SchedulerBinding);
  binding$.SchedulerBinding[dart.implements] = () => [binding.BindingBase];
  dart.setMethodSignature(binding$.SchedulerBinding, () => ({
    __proto__: dart.getMethods(binding$.SchedulerBinding.__proto__),
    addTimingsCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.List$(ui.FrameTiming)])]),
    removeTimingsCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.List$(ui.FrameTiming)])]),
    [_executeTimingsCallbacks]: dart.fnType(dart.void, [core.List$(ui.FrameTiming)]),
    handleAppLifecycleStateChanged: dart.fnType(dart.void, [ui.AppLifecycleState]),
    scheduleTask: dart.gFnType(T => [async.Future$(T), [dart.fnType(T, []), priority$.Priority], {debugLabel: dart.nullable(core.String), flow: dart.nullable(developer.Flow)}, {}], T => [dart.nullable(core.Object)]),
    [_ensureEventLoopCallback]: dart.fnType(dart.void, []),
    [_runTasks]: dart.fnType(dart.void, []),
    handleEventLoopCallback: dart.fnType(core.bool, []),
    scheduleFrameCallback: dart.fnType(core.int, [dart.fnType(dart.void, [core.Duration])], {rescheduling: core.bool}, {}),
    cancelFrameCallbackWithId: dart.fnType(dart.void, [core.int]),
    debugAssertNoTransientCallbacks: dart.fnType(core.bool, [core.String]),
    addPersistentFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    addPostFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    [_setFramesEnabledState]: dart.fnType(dart.void, [core.bool]),
    ensureFrameCallbacksRegistered: dart.fnType(dart.void, []),
    ensureVisualUpdate: dart.fnType(dart.void, []),
    scheduleFrame: dart.fnType(dart.void, []),
    scheduleForcedFrame: dart.fnType(dart.void, []),
    scheduleWarmUpFrame: dart.fnType(dart.void, []),
    resetEpoch: dart.fnType(dart.void, []),
    [_adjustForEpoch]: dart.fnType(core.Duration, [core.Duration]),
    [_handleBeginFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleDrawFrame]: dart.fnType(dart.void, []),
    handleBeginFrame: dart.fnType(dart.void, [dart.nullable(core.Duration)]),
    handleDrawFrame: dart.fnType(dart.void, []),
    [_profileFramePostEvent]: dart.fnType(dart.void, [ui.FrameTiming]),
    [_invokeFrameCallback]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration]), core.Duration], [dart.nullable(core.StackTrace)])
  }));
  dart.setStaticMethodSignature(binding$.SchedulerBinding, () => ['_taskSorter', 'debugPrintTransientCallbackRegistrationStack', '_debugDescribeTimeStamp']);
  dart.setGetterSignature(binding$.SchedulerBinding, () => ({
    __proto__: dart.getGetters(binding$.SchedulerBinding.__proto__),
    lifecycleState: dart.nullable(ui.AppLifecycleState),
    transientCallbackCount: core.int,
    endOfFrame: async.Future$(dart.void),
    hasScheduledFrame: core.bool,
    schedulerPhase: binding$.SchedulerPhase,
    framesEnabled: core.bool,
    currentFrameTimeStamp: core.Duration,
    currentSystemFrameTimeStamp: core.Duration
  }));
  dart.setStaticGetterSignature(binding$.SchedulerBinding, () => ['instance']);
  dart.setLibraryUri(binding$.SchedulerBinding, I[1]);
  dart.setFieldSignature(binding$.SchedulerBinding, () => ({
    __proto__: dart.getFields(binding$.SchedulerBinding.__proto__),
    [_timingsCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.List$(ui.FrameTiming)]))),
    [_lifecycleState]: dart.fieldType(dart.nullable(ui.AppLifecycleState)),
    schedulingStrategy: dart.fieldType(dart.fnType(core.bool, [], {}, {priority: core.int, scheduler: binding$.SchedulerBinding})),
    [_taskQueue]: dart.finalFieldType(priority_queue.PriorityQueue$(binding$._TaskEntry)),
    [_hasRequestedAnEventLoopCallback]: dart.fieldType(core.bool),
    [_nextFrameCallbackId]: dart.fieldType(core.int),
    [_transientCallbacks]: dart.fieldType(core.Map$(core.int, binding$._FrameCallbackEntry)),
    [_removedIds]: dart.finalFieldType(core.Set$(core.int)),
    [_persistentCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_postFrameCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_nextFrameCompleter]: dart.fieldType(dart.nullable(async.Completer$(dart.void))),
    [_hasScheduledFrame]: dart.fieldType(core.bool),
    [_schedulerPhase]: dart.fieldType(binding$.SchedulerPhase),
    [_framesEnabled]: dart.fieldType(core.bool),
    [_warmUpFrame]: dart.fieldType(core.bool),
    [_firstRawTimeStampInEpoch]: dart.fieldType(dart.nullable(core.Duration)),
    [_epochStart]: dart.fieldType(core.Duration),
    [_lastRawTimeStamp]: dart.fieldType(core.Duration),
    [_currentFrameTimeStamp]: dart.fieldType(dart.nullable(core.Duration)),
    [_debugFrameNumber]: dart.fieldType(core.int),
    [_debugBanner]: dart.fieldType(dart.nullable(core.String)),
    [_rescheduleAfterWarmUpFrame]: dart.fieldType(core.bool),
    [_frameTimelineTask]: dart.finalFieldType(dart.nullable(developer.TimelineTask))
  }));
  dart.setStaticFieldSignature(binding$.SchedulerBinding, () => ['_instance']);
  dart.defineLazy(binding$.SchedulerBinding, {
    /*binding$.SchedulerBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  binding$.defaultSchedulingStrategy = function defaultSchedulingStrategy(opts) {
    let priority = opts && 'priority' in opts ? opts.priority : null;
    let scheduler = opts && 'scheduler' in opts ? opts.scheduler : null;
    if (scheduler.transientCallbackCount > 0) return priority >= priority$.Priority.animation.value;
    return true;
  };
  dart.copyProperties(binding$, {
    get timeDilation() {
      return binding$._timeDilation;
    },
    set timeDilation(value) {
      let t5;
      if (!(value > 0.0)) dart.assertFailed(null, I[0], 25, 10, "value > 0.0");
      if (binding$._timeDilation === value) return;
      t5 = binding$.SchedulerBinding.instance;
      t5 == null ? null : t5.resetEpoch();
      binding$._timeDilation = value;
    }
  });
  dart.defineLazy(binding$, {
    /*binding$._timeDilation*/get _timeDilation() {
      return 1.0;
    },
    set _timeDilation(_) {}
  }, false);
  dart.trackLibraries("packages/flutter/src/scheduler/binding.dart", {
    "package:flutter/src/scheduler/binding.dart": binding$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/scheduler/binding.dart.lib.js"}');
  // Exports:
  return {
    src__scheduler__binding: binding$
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map
