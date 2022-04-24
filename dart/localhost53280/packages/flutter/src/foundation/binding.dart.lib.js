define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/object.dart'], (function load__packages__flutter__src__foundation__binding_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation__object$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const convert = dart_sdk.convert;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  var binding = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    FutureOfString: () => (T.FutureOfString = dart.constFn(async.Future$(core.String)))(),
    VoidToFutureOfString: () => (T.VoidToFutureOfString = dart.constFn(dart.fnType(T.FutureOfString(), [])))(),
    StringToFutureOfvoid: () => (T.StringToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [core.String])))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    FutureOfMapOfString$dynamic: () => (T.FutureOfMapOfString$dynamic = dart.constFn(async.Future$(T.MapOfString$dynamic())))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    MapOfString$StringToFutureOfMapOfString$dynamic: () => (T.MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(T.FutureOfMapOfString$dynamic(), [T.MapOfString$String()])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    VoidToMapOfString$dynamic: () => (T.VoidToMapOfString$dynamic = dart.constFn(dart.fnType(T.MapOfString$dynamic(), [])))(),
    MapOfString$dynamicTodynamic: () => (T.MapOfString$dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.MapOfString$dynamic()])))(),
    FutureOfServiceExtensionResponse: () => (T.FutureOfServiceExtensionResponse = dart.constFn(async.Future$(developer.ServiceExtensionResponse)))(),
    StringAndMapOfString$StringToFutureOfServiceExtensionResponse: () => (T.StringAndMapOfString$StringToFutureOfServiceExtensionResponse = dart.constFn(dart.fnType(T.FutureOfServiceExtensionResponse(), [core.String, T.MapOfString$String()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(binding._exitApplication, T.VoidToFutureOfvoid());
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/binding.dart",
    "package:flutter/src/foundation/binding.dart"
  ];
  var _lockCount = dart.privateName(binding, "_lockCount");
  var _postExtensionStateChangedEvent = dart.privateName(binding, "_postExtensionStateChangedEvent");
  binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui.window;
    }
    get platformDispatcher() {
      return ui.PlatformDispatcher.instance;
    }
    initInstances() {
      if (!!binding.BindingBase._debugInitialized) dart.assertFailed(null, I[0], 141, 12, "!_debugInitialized");
      if (!dart.fn(() => {
        binding.BindingBase._debugInitialized = true;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 142, 12, "() {\n      _debugInitialized = true;\n      return true;\n    }()");
    }
    initServiceExtensions() {
      if (!!binding.BindingBase._debugServiceExtensionsRegistered) dart.assertFailed(null, I[0], 169, 12, "!_debugServiceExtensionsRegistered");
      if (!dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 171, 12, "() {\n      registerSignalServiceExtension(\n        name: 'reassemble',\n        callback: reassembleApplication,\n      );\n      return true;\n    }()");
      if (!false) {
        if (!true) {
          this.registerSignalServiceExtension({name: "exit", callback: C[0] || CT.C0});
        }
        this.registerStringServiceExtension({name: "connectedVmServiceUri", getter: dart.fn(() => async.async(core.String, function*() {
            let t0;
            t0 = debug.connectedVmServiceUri;
            return t0 == null ? "" : t0;
          }), T.VoidToFutureOfString()), setter: dart.fn(uri => async.async(dart.void, function*() {
            debug.connectedVmServiceUri = uri;
          }), T.StringToFutureOfvoid())});
        this.registerStringServiceExtension({name: "activeDevToolsServerAddress", getter: dart.fn(() => async.async(core.String, function*() {
            let t0;
            t0 = debug.activeDevToolsServerAddress;
            return t0 == null ? "" : t0;
          }), T.VoidToFutureOfString()), setter: dart.fn(serverAddress => async.async(dart.void, function*() {
            debug.activeDevToolsServerAddress = serverAddress;
          }), T.StringToFutureOfvoid())});
      }
      if (!dart.fn(() => {
        this.registerServiceExtension({name: "platformOverride", callback: dart.fn(parameters => async.async(T.MapOfString$dynamic(), (function*() {
            if (parameters[$containsKey]("value")) {
              switch (parameters[$_get]("value")) {
                case "android":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.android;
                  break;
                }
                case "fuchsia":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.fuchsia;
                  break;
                }
                case "iOS":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.iOS;
                  break;
                }
                case "linux":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.linux;
                  break;
                }
                case "macOS":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.macOS;
                  break;
                }
                case "windows":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.windows;
                  break;
                }
                case "default":
                default:
                {
                  platform.debugDefaultTargetPlatformOverride = null;
                }
              }
              this[_postExtensionStateChangedEvent]("platformOverride", platform.defaultTargetPlatform.toString()[$substring]((dart.str(dart.wrapType(platform.TargetPlatform)) + ".").length));
              yield this.reassembleApplication();
            }
            return new (T.IdentityMapOfString$dynamic()).from(["value", platform.defaultTargetPlatform.toString()[$substring]((dart.str(dart.wrapType(platform.TargetPlatform)) + ".").length)]);
          }).bind(this)), T.MapOfString$StringToFutureOfMapOfString$dynamic())});
        this.registerServiceExtension({name: "brightnessOverride", callback: dart.fn(parameters => async.async(T.MapOfString$dynamic(), (function*() {
            let t0, t0$;
            if (parameters[$containsKey]("value")) {
              switch (parameters[$_get]("value")) {
                case "Brightness.light":
                {
                  debug.debugBrightnessOverride = ui.Brightness.light;
                  break;
                }
                case "Brightness.dark":
                {
                  debug.debugBrightnessOverride = ui.Brightness.dark;
                  break;
                }
                default:
                {
                  debug.debugBrightnessOverride = null;
                }
              }
              this[_postExtensionStateChangedEvent]("brightnessOverride", dart.toString((t0 = debug.debugBrightnessOverride, t0 == null ? this.window.platformBrightness : t0)));
              yield this.reassembleApplication();
            }
            return new (T.IdentityMapOfString$dynamic()).from(["value", dart.toString((t0$ = debug.debugBrightnessOverride, t0$ == null ? this.window.platformBrightness : t0$))]);
          }).bind(this)), T.MapOfString$StringToFutureOfMapOfString$dynamic())});
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 203, 12, "() {\n      const String platformOverrideExtensionName = 'platformOverride';\n      registerServiceExtension(\n        name: platformOverrideExtensionName,\n        callback: (Map<String, String> parameters) async {\n          if (parameters.containsKey('value')) {\n            switch (parameters['value']) {\n              case 'android':\n                debugDefaultTargetPlatformOverride = TargetPlatform.android;\n                break;\n              case 'fuchsia':\n                debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;\n                break;\n              case 'iOS':\n                debugDefaultTargetPlatformOverride = TargetPlatform.iOS;\n                break;\n              case 'linux':\n                debugDefaultTargetPlatformOverride = TargetPlatform.linux;\n                break;\n              case 'macOS':\n                debugDefaultTargetPlatformOverride = TargetPlatform.macOS;\n                break;\n              case 'windows':\n                debugDefaultTargetPlatformOverride = TargetPlatform.windows;\n                break;\n              case 'default':\n              default:\n                debugDefaultTargetPlatformOverride = null;\n            }\n            _postExtensionStateChangedEvent(\n              platformOverrideExtensionName,\n              defaultTargetPlatform.toString().substring('$TargetPlatform.'.length),\n            );\n            await reassembleApplication();\n          }\n          return <String, dynamic>{\n            'value': defaultTargetPlatform\n                     .toString()\n                     .substring('$TargetPlatform.'.length),\n          };\n        },\n      );\n\n      const String brightnessOverrideExtensionName = 'brightnessOverride';\n      registerServiceExtension(\n        name: brightnessOverrideExtensionName,\n        callback: (Map<String, String> parameters) async {\n          if (parameters.containsKey('value')) {\n            switch (parameters['value']) {\n              case 'Brightness.light':\n                debugBrightnessOverride = ui.Brightness.light;\n                break;\n              case 'Brightness.dark':\n                debugBrightnessOverride = ui.Brightness.dark;\n                break;\n              default:\n                debugBrightnessOverride = null;\n            }\n            _postExtensionStateChangedEvent(\n              brightnessOverrideExtensionName,\n              (debugBrightnessOverride ?? window.platformBrightness).toString(),\n            );\n            await reassembleApplication();\n          }\n          return <String, dynamic>{\n            'value': (debugBrightnessOverride ?? window.platformBrightness).toString(),\n          };\n        },\n      );\n      return true;\n    }()");
      if (!dart.fn(() => {
        binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 274, 12, "() {\n      _debugServiceExtensionsRegistered = true;\n      return true;\n    }()");
    }
    get locked() {
      return this[_lockCount] > 0;
    }
    lockEvents(callback) {
      let t0;
      let timelineTask = (t0 = new developer.TimelineTask.new(), (() => {
        t0.start("Lock events");
        return t0;
      })());
      if (!(callback !== null)) dart.assertFailed(null, I[0], 303, 12, "callback != null");
      this[_lockCount] = this[_lockCount] + 1;
      let future = callback();
      if (!(future !== null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.", I[0], 306, 12, "future != null");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = this[_lockCount] - 1;
        if (!this.locked) {
          timelineTask.finish();
          this.unlocked();
        }
      }, T.VoidToNull()));
      return future;
    }
    unlocked() {
      if (!!this.locked) dart.assertFailed(null, I[0], 323, 12, "!locked");
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      assertions.FlutterError.resetErrorCount();
      return T.FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 377, 12, "name != null");
      if (!(callback !== null)) dart.assertFailed(null, I[0], 378, 12, "callback != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(T.MapOfString$dynamic(), function*() {
          yield callback();
          return new (T.IdentityMapOfString$dynamic()).new();
        }), T.MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 408, 12, "name != null");
      if (!(getter !== null)) dart.assertFailed(null, I[0], 409, 12, "getter != null");
      if (!(setter !== null)) dart.assertFailed(null, I[0], 410, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(T.MapOfString$dynamic(), (function*() {
          if (parameters[$containsKey]("enabled")) {
            yield setter(parameters[$_get]("enabled") === "true");
            this[_postExtensionStateChangedEvent](name, (yield getter()) ? "true" : "false");
          }
          return new (T.IdentityMapOfString$dynamic()).from(["enabled", (yield getter()) ? "true" : "false"]);
        }).bind(this)), T.MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 442, 12, "name != null");
      if (!(getter !== null)) dart.assertFailed(null, I[0], 443, 12, "getter != null");
      if (!(setter !== null)) dart.assertFailed(null, I[0], 444, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(T.MapOfString$dynamic(), (function*() {
          if (parameters[$containsKey](name)) {
            yield setter(core.double.parse(dart.nullCheck(parameters[$_get](name))));
            this[_postExtensionStateChangedEvent](name, (yield getter())[$toString]());
          }
          return new (T.IdentityMapOfString$dynamic()).from([name, (yield getter())[$toString]()]);
        }).bind(this)), T.MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (T.IdentityMapOfString$dynamic()).from(["extension", "ext.flutter." + name, "value", value]));
    }
    postEvent(eventKind, eventData) {
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 504, 12, "name != null");
      if (!(getter !== null)) dart.assertFailed(null, I[0], 505, 12, "getter != null");
      if (!(setter !== null)) dart.assertFailed(null, I[0], 506, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(T.MapOfString$dynamic(), (function*() {
          if (parameters[$containsKey]("value")) {
            yield setter(dart.nullCheck(parameters[$_get]("value")));
            this[_postExtensionStateChangedEvent](name, yield getter());
          }
          return new (T.IdentityMapOfString$dynamic()).from(["value", (yield getter())]);
        }).bind(this)), T.MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name !== null)) dart.assertFailed(null, I[0], 575, 12, "name != null");
      if (!(callback !== null)) dart.assertFailed(null, I[0], 576, 12, "callback != null");
      let methodName = "ext.flutter." + name;
      developer.registerExtension(methodName, dart.fn((method, parameters) => async.async(developer.ServiceExtensionResponse, function*() {
        if (!(method === methodName)) dart.assertFailed(null, I[0], 579, 14, "method == methodName");
        if (!dart.fn(() => {
          if (debug.debugInstrumentationEnabled) print.debugPrint("service extension method received: " + method + "(" + dart.str(parameters) + ")");
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[0], 580, 14, "() {\n        if (debugInstrumentationEnabled)\n          debugPrint('service extension method received: $method($parameters)');\n        return true;\n      }()");
        yield debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => T.FutureOfvoid().delayed(core.Duration.zero), T.VoidToFutureOfvoid()));
        let result = null;
        function result$35get() {
          let t1;
          t1 = result;
          return t1 == null ? dart.throw(new _internal.LateError.localNI("result")) : t1;
        }
        dart.fn(result$35get, T.VoidToMapOfString$dynamic());
        function result$35set(t2) {
          return result = t2;
        }
        dart.fn(result$35set, T.MapOfString$dynamicTodynamic());
        try {
          result$35set(yield callback(parameters));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, context: new assertions.ErrorDescription.new("during a service extension callback for \"" + method + "\"")}));
            return new developer.ServiceExtensionResponse.error(-32000, convert.json.encode(new (T.IdentityMapOfString$String()).from(["exception", exception[$toString](), "stack", stack.toString(), "method", method])));
          } else
            throw e;
        }
        result$35get()[$_set]("type", "_extensionType");
        result$35get()[$_set]("method", method);
        return new developer.ServiceExtensionResponse.result(convert.json.encode(result$35get()));
      }), T.StringAndMapOfString$StringToFutureOfServiceExtensionResponse()));
    }
    toString() {
      return "<" + object.objectRuntimeType(this, "BindingBase") + ">";
    }
  };
  (binding.BindingBase.new = function() {
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!!binding.BindingBase._debugInitialized) dart.assertFailed(null, I[0], 55, 12, "!_debugInitialized");
    this.initInstances();
    if (!binding.BindingBase._debugInitialized) dart.assertFailed(null, I[0], 57, 12, "_debugInitialized");
    if (!!binding.BindingBase._debugServiceExtensionsRegistered) dart.assertFailed(null, I[0], 59, 12, "!_debugServiceExtensionsRegistered");
    this.initServiceExtensions();
    if (!binding.BindingBase._debugServiceExtensionsRegistered) dart.assertFailed(null, I[0], 61, 12, "_debugServiceExtensionsRegistered");
    developer.postEvent("Flutter.FrameworkInitialization", new (T.IdentityMapOfString$String()).new());
    developer.Timeline.finishSync();
  }).prototype = binding.BindingBase.prototype;
  dart.addTypeTests(binding.BindingBase);
  dart.addTypeCaches(binding.BindingBase);
  dart.setMethodSignature(binding.BindingBase, () => ({
    __proto__: dart.getMethods(binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(async.Future$(dart.void), []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {}, {callback: dart.fnType(async.Future$(dart.void), []), name: core.String}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.bool), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.bool])}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.double), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.double])}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [core.String, dart.dynamic]),
    postEvent: dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {}, {getter: dart.fnType(async.Future$(core.String), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.String])}),
    registerServiceExtension: dart.fnType(dart.void, [], {}, {callback: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.Map$(core.String, core.String)]), name: core.String})
  }));
  dart.setGetterSignature(binding.BindingBase, () => ({
    __proto__: dart.getGetters(binding.BindingBase.__proto__),
    window: ui.SingletonFlutterWindow,
    platformDispatcher: ui.PlatformDispatcher,
    locked: core.bool
  }));
  dart.setLibraryUri(binding.BindingBase, I[1]);
  dart.setFieldSignature(binding.BindingBase, () => ({
    __proto__: dart.getFields(binding.BindingBase.__proto__),
    [_lockCount]: dart.fieldType(core.int)
  }));
  dart.setStaticFieldSignature(binding.BindingBase, () => ['_debugInitialized', '_debugServiceExtensionsRegistered', 'debugReassembleConfig']);
  dart.defineExtensionMethods(binding.BindingBase, ['toString']);
  dart.defineLazy(binding.BindingBase, {
    /*binding.BindingBase._debugInitialized*/get _debugInitialized() {
      return false;
    },
    set _debugInitialized(_) {},
    /*binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {},
    /*binding.BindingBase.debugReassembleConfig*/get debugReassembleConfig() {
      return null;
    },
    set debugReassembleConfig(_) {}
  }, false);
  var widgetName$ = dart.privateName(binding, "DebugReassembleConfig.widgetName");
  binding.DebugReassembleConfig = class DebugReassembleConfig extends core.Object {
    get widgetName() {
      return this[widgetName$];
    }
    set widgetName(value) {
      super.widgetName = value;
    }
    static ['_#new#tearOff'](opts) {
      let widgetName = opts && 'widgetName' in opts ? opts.widgetName : null;
      return new binding.DebugReassembleConfig.new({widgetName: widgetName});
    }
  };
  (binding.DebugReassembleConfig.new = function(opts) {
    let widgetName = opts && 'widgetName' in opts ? opts.widgetName : null;
    this[widgetName$] = widgetName;
    if (!true) {
      dart.throw(assertions.FlutterError.new("Cannot instantiate DebugReassembleConfig in profile or release mode."));
    }
  }).prototype = binding.DebugReassembleConfig.prototype;
  dart.addTypeTests(binding.DebugReassembleConfig);
  dart.addTypeCaches(binding.DebugReassembleConfig);
  dart.setLibraryUri(binding.DebugReassembleConfig, I[1]);
  dart.setFieldSignature(binding.DebugReassembleConfig, () => ({
    __proto__: dart.getFields(binding.DebugReassembleConfig.__proto__),
    widgetName: dart.finalFieldType(dart.nullable(core.String))
  }));
  binding._exitApplication = function _exitApplication() {
    return async.async(dart.void, function* _exitApplication() {
      io.exit(0);
    });
  };
  dart.trackLibraries("packages/flutter/src/foundation/binding.dart", {
    "package:flutter/src/foundation/binding.dart": binding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binding.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/binding.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__binding: binding
  };
}));

//# sourceMappingURL=binding.dart.lib.js.map
