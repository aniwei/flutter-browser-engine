define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__foundation__change_notifier_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var change_notifier = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidToNvoid: () => (T.VoidToNvoid = dart.constFn(dart.nullable(T.VoidTovoid())))(),
    ListOfVoidToNvoid: () => (T.ListOfVoidToNvoid = dart.constFn(core.List$(T.VoidToNvoid())))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfChangeNotifier: () => (T.DiagnosticsPropertyOfChangeNotifier = dart.constFn(diagnostics.DiagnosticsProperty$(change_notifier.ChangeNotifier)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T.ListOfDiagnosticsNode(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flutter/src/foundation/change_notifier.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/change_notifier.dart"
  ];
  change_notifier.Listenable = class Listenable extends core.Object {
    static ['_#merge#tearOff'](listenables) {
      return new change_notifier._MergingListenable.new(listenables);
    }
  };
  (change_notifier.Listenable.new = function() {
    ;
  }).prototype = change_notifier.Listenable.prototype;
  dart.addTypeTests(change_notifier.Listenable);
  dart.addTypeCaches(change_notifier.Listenable);
  dart.setStaticMethodSignature(change_notifier.Listenable, () => ['merge']);
  dart.setLibraryUri(change_notifier.Listenable, I[0]);
  dart.setStaticFieldSignature(change_notifier.Listenable, () => ['_redirecting#']);
  const _is_ValueListenable_default = Symbol('_is_ValueListenable_default');
  change_notifier.ValueListenable$ = dart.generic(T => {
    class ValueListenable extends change_notifier.Listenable {}
    (ValueListenable.new = function() {
      ValueListenable.__proto__.new.call(this);
      ;
    }).prototype = ValueListenable.prototype;
    dart.addTypeTests(ValueListenable);
    ValueListenable.prototype[_is_ValueListenable_default] = true;
    dart.addTypeCaches(ValueListenable);
    dart.setLibraryUri(ValueListenable, I[0]);
    return ValueListenable;
  });
  change_notifier.ValueListenable = change_notifier.ValueListenable$();
  dart.addTypeTests(change_notifier.ValueListenable, _is_ValueListenable_default);
  var _count = dart.privateName(change_notifier, "_count");
  var _listeners = dart.privateName(change_notifier, "_listeners");
  var _notificationCallStackDepth = dart.privateName(change_notifier, "_notificationCallStackDepth");
  var _reentrantlyRemovedListeners = dart.privateName(change_notifier, "_reentrantlyRemovedListeners");
  var _debugDisposed = dart.privateName(change_notifier, "_debugDisposed");
  var _debugAssertNotDisposed = dart.privateName(change_notifier, "_debugAssertNotDisposed");
  var _removeAt = dart.privateName(change_notifier, "_removeAt");
  change_notifier.ChangeNotifier = class ChangeNotifier extends core.Object {
    [_debugAssertNotDisposed]() {
      if (!dart.fn(() => {
        if (this[_debugDisposed]) {
          dart.throw(assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 112, 12, "() {\n      if (_debugDisposed) {\n        throw FlutterError(\n          'A $runtimeType was used after being disposed.\\n'\n          'Once you have called dispose() on a $runtimeType, it can no longer be used.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    get hasListeners() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 141, 12, "_debugAssertNotDisposed()");
      return this[_count] > 0;
    }
    addListener(listener) {
      let t0;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 173, 12, "_debugAssertNotDisposed()");
      if (this[_count] === this[_listeners][$length]) {
        if (this[_count] === 0) {
          this[_listeners] = T.ListOfVoidToNvoid().filled(1, null);
        } else {
          let newListeners = T.ListOfVoidToNvoid().filled(this[_listeners][$length] * 2, null);
          for (let i = 0; i < this[_count]; i = i + 1) {
            newListeners[$_set](i, this[_listeners][$_get](i));
          }
          this[_listeners] = newListeners;
        }
      }
      this[_listeners][$_set]((t0 = this[_count], this[_count] = t0 + 1, t0), listener);
    }
    [_removeAt](index) {
      this[_count] = this[_count] - 1;
      if (this[_count] * 2 <= this[_listeners][$length]) {
        let newListeners = T.ListOfVoidToNvoid().filled(this[_count], null);
        for (let i = 0; i < index; i = i + 1)
          newListeners[$_set](i, this[_listeners][$_get](i));
        for (let i = index; i < this[_count]; i = i + 1)
          newListeners[$_set](i, this[_listeners][$_get](i + 1));
        this[_listeners] = newListeners;
      } else {
        for (let i = index; i < this[_count]; i = i + 1)
          this[_listeners][$_set](i, this[_listeners][$_get](i + 1));
        this[_listeners][$_set](this[_count], null);
      }
    }
    removeListener(listener) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 233, 12, "_debugAssertNotDisposed()");
      for (let i = 0; i < this[_count]; i = i + 1) {
        let _listener = this[_listeners][$_get](i);
        if (dart.equals(_listener, listener)) {
          if (this[_notificationCallStackDepth] > 0) {
            this[_listeners][$_set](i, null);
            this[_reentrantlyRemovedListeners] = this[_reentrantlyRemovedListeners] + 1;
          } else {
            this[_removeAt](i);
          }
          break;
        }
      }
    }
    dispose() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 262, 12, "_debugAssertNotDisposed()");
      if (!dart.fn(() => {
        this[_debugDisposed] = true;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 263, 12, "() {\n      _debugDisposed = true;\n      return true;\n    }()");
    }
    notifyListeners() {
      let t0, t1;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 288, 12, "_debugAssertNotDisposed()");
      if (this[_count] === 0) return;
      this[_notificationCallStackDepth] = this[_notificationCallStackDepth] + 1;
      let end = this[_count];
      for (let i = 0; i < end; i = i + 1) {
        try {
          t0 = this[_listeners][$_get](i);
          t0 == null ? null : t0();
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "foundation library", context: new assertions.ErrorDescription.new("while dispatching notifications for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => T.JSArrayOfDiagnosticsNode().of([new (T.DiagnosticsPropertyOfChangeNotifier()).new("The " + dart.str(this[$runtimeType]) + " sending notification was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]), T.VoidToListOfDiagnosticsNode())}));
          } else
            throw e;
        }
      }
      this[_notificationCallStackDepth] = this[_notificationCallStackDepth] - 1;
      if (this[_notificationCallStackDepth] === 0 && this[_reentrantlyRemovedListeners] > 0) {
        let newLength = this[_count] - this[_reentrantlyRemovedListeners];
        if (newLength * 2 <= this[_listeners][$length]) {
          let newListeners = T.ListOfVoidToNvoid().filled(newLength, null);
          let newIndex = 0;
          for (let i = 0; i < this[_count]; i = i + 1) {
            let listener = this[_listeners][$_get](i);
            if (listener != null) {
              newListeners[$_set]((t1 = newIndex, newIndex = t1 + 1, t1), listener);
            }
          }
          this[_listeners] = newListeners;
        } else {
          for (let i = 0; i < newLength; i = i + 1) {
            if (this[_listeners][$_get](i) == null) {
              let swapIndex = i + 1;
              while (this[_listeners][$_get](swapIndex) == null) {
                swapIndex = swapIndex + 1;
              }
              this[_listeners][$_set](i, this[_listeners][$_get](swapIndex));
              this[_listeners][$_set](swapIndex, null);
            }
          }
        }
        this[_reentrantlyRemovedListeners] = 0;
        this[_count] = newLength;
      }
    }
    static ['_#new#tearOff']() {
      return new change_notifier.ChangeNotifier.new();
    }
  };
  (change_notifier.ChangeNotifier.new = function() {
    this[_count] = 0;
    this[_listeners] = T.ListOfVoidToNvoid().filled(0, null);
    this[_notificationCallStackDepth] = 0;
    this[_reentrantlyRemovedListeners] = 0;
    this[_debugDisposed] = false;
    ;
  }).prototype = change_notifier.ChangeNotifier.prototype;
  dart.addTypeTests(change_notifier.ChangeNotifier);
  dart.addTypeCaches(change_notifier.ChangeNotifier);
  change_notifier.ChangeNotifier[dart.implements] = () => [change_notifier.Listenable];
  dart.setMethodSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getMethods(change_notifier.ChangeNotifier.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_removeAt]: dart.fnType(dart.void, [core.int]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    dispose: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getGetters(change_notifier.ChangeNotifier.__proto__),
    hasListeners: core.bool
  }));
  dart.setLibraryUri(change_notifier.ChangeNotifier, I[0]);
  dart.setFieldSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getFields(change_notifier.ChangeNotifier.__proto__),
    [_count]: dart.fieldType(core.int),
    [_listeners]: dart.fieldType(core.List$(dart.nullable(dart.fnType(dart.void, [])))),
    [_notificationCallStackDepth]: dart.fieldType(core.int),
    [_reentrantlyRemovedListeners]: dart.fieldType(core.int),
    [_debugDisposed]: dart.fieldType(core.bool)
  }));
  var _children$ = dart.privateName(change_notifier, "_children");
  change_notifier._MergingListenable = class _MergingListenable extends change_notifier.Listenable {
    static ['_#new#tearOff'](_children) {
      return new change_notifier._MergingListenable.new(_children);
    }
    addListener(listener) {
      let t1;
      for (let child of this[_children$]) {
        t1 = child;
        t1 == null ? null : t1.addListener(listener);
      }
    }
    removeListener(listener) {
      let t1;
      for (let child of this[_children$]) {
        t1 = child;
        t1 == null ? null : t1.removeListener(listener);
      }
    }
    toString() {
      return "Listenable.merge([" + this[_children$][$join](", ") + "])";
    }
  };
  (change_notifier._MergingListenable.new = function(_children) {
    this[_children$] = _children;
    change_notifier._MergingListenable.__proto__.new.call(this);
    ;
  }).prototype = change_notifier._MergingListenable.prototype;
  dart.addTypeTests(change_notifier._MergingListenable);
  dart.addTypeCaches(change_notifier._MergingListenable);
  dart.setMethodSignature(change_notifier._MergingListenable, () => ({
    __proto__: dart.getMethods(change_notifier._MergingListenable.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(change_notifier._MergingListenable, I[0]);
  dart.setFieldSignature(change_notifier._MergingListenable, () => ({
    __proto__: dart.getFields(change_notifier._MergingListenable.__proto__),
    [_children$]: dart.finalFieldType(core.List$(dart.nullable(change_notifier.Listenable)))
  }));
  dart.defineExtensionMethods(change_notifier._MergingListenable, ['toString']);
  var _value$ = dart.privateName(change_notifier, "_value");
  const _is_ValueNotifier_default = Symbol('_is_ValueNotifier_default');
  change_notifier.ValueNotifier$ = dart.generic(T => {
    class ValueNotifier extends change_notifier.ChangeNotifier {
      static ['_#new#tearOff'](T, _value) {
        return new (change_notifier.ValueNotifier$(T)).new(_value);
      }
      get value() {
        return this[_value$];
      }
      set value(newValue) {
        T.as(newValue);
        if (dart.equals(this[_value$], newValue)) return;
        this[_value$] = newValue;
        this.notifyListeners();
      }
      toString() {
        return diagnostics.describeIdentity(this) + "(" + dart.str(this.value) + ")";
      }
    }
    (ValueNotifier.new = function(_value) {
      this[_value$] = _value;
      ValueNotifier.__proto__.new.call(this);
      ;
    }).prototype = ValueNotifier.prototype;
    dart.addTypeTests(ValueNotifier);
    ValueNotifier.prototype[_is_ValueNotifier_default] = true;
    dart.addTypeCaches(ValueNotifier);
    ValueNotifier[dart.implements] = () => [change_notifier.ValueListenable$(T)];
    dart.setGetterSignature(ValueNotifier, () => ({
      __proto__: dart.getGetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setSetterSignature(ValueNotifier, () => ({
      __proto__: dart.getSetters(ValueNotifier.__proto__),
      value: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(ValueNotifier, I[0]);
    dart.setFieldSignature(ValueNotifier, () => ({
      __proto__: dart.getFields(ValueNotifier.__proto__),
      [_value$]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(ValueNotifier, ['toString']);
    return ValueNotifier;
  });
  change_notifier.ValueNotifier = change_notifier.ValueNotifier$();
  dart.addTypeTests(change_notifier.ValueNotifier, _is_ValueNotifier_default);
  dart.trackLibraries("packages/flutter/src/foundation/change_notifier.dart", {
    "package:flutter/src/foundation/change_notifier.dart": change_notifier
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["change_notifier.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/change_notifier.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__change_notifier: change_notifier
  };
}));

//# sourceMappingURL=change_notifier.dart.lib.js.map
