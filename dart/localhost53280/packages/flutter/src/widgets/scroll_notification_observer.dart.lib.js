define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__scroll_notification_observer_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const scroll_notification = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_notification;
  const notification_listener = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__notification_listener;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var scroll_notification_observer = Object.create(dart.library);
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    LinkedListOf_ListenerEntry: () => (T.LinkedListOf_ListenerEntry = dart.constFn(collection.LinkedList$(scroll_notification_observer._ListenerEntry)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    ListOf_ListenerEntry: () => (T.ListOf_ListenerEntry = dart.constFn(core.List$(scroll_notification_observer._ListenerEntry)))(),
    DiagnosticsPropertyOfScrollNotificationObserverState: () => (T.DiagnosticsPropertyOfScrollNotificationObserverState = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_notification_observer.ScrollNotificationObserverState)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    ListOfDiagnosticsNode: () => (T.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T.ListOfDiagnosticsNode(), [])))(),
    NotificationListenerOfScrollNotification: () => (T.NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))(),
    ScrollNotificationTobool: () => (T.ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ScrollNotificationObserverScope",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/scroll_notification_observer.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "ScrollNotificationObserver",
        [_Location_column]: 9,
        [_Location_line]: 66,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/scroll_notification_observer.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_ScrollNotificationObserverScope",
        [_Location_column]: 14,
        [_Location_line]: 161,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/scroll_notification_observer.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NotificationListener",
        [_Location_column]: 12,
        [_Location_line]: 156,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/scroll_notification_observer.dart"
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "package:flutter/src/widgets/scroll_notification_observer.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/scroll_notification_observer.dart"
  ];
  var _scrollNotificationObserverState = dart.privateName(scroll_notification_observer, "_ScrollNotificationObserverScope._scrollNotificationObserverState");
  var _scrollNotificationObserverState$ = dart.privateName(scroll_notification_observer, "_scrollNotificationObserverState");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  scroll_notification_observer._ScrollNotificationObserverScope = class _ScrollNotificationObserverScope extends framework.InheritedWidget {
    get [_scrollNotificationObserverState$]() {
      return this[_scrollNotificationObserverState];
    }
    set [_scrollNotificationObserverState$](value) {
      super[_scrollNotificationObserverState$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let scrollNotificationObserverState = opts && 'scrollNotificationObserverState' in opts ? opts.scrollNotificationObserverState : null;
      return new scroll_notification_observer._ScrollNotificationObserverScope.new({key: key, child: child, scrollNotificationObserverState: scrollNotificationObserverState, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    updateShouldNotify(old) {
      scroll_notification_observer._ScrollNotificationObserverScope.as(old);
      return !this[_scrollNotificationObserverState$][$_equals](old[_scrollNotificationObserverState$]);
    }
  };
  (scroll_notification_observer._ScrollNotificationObserverScope.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let scrollNotificationObserverState = opts && 'scrollNotificationObserverState' in opts ? opts.scrollNotificationObserverState : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_scrollNotificationObserverState] = scrollNotificationObserverState;
    scroll_notification_observer._ScrollNotificationObserverScope.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_notification_observer._ScrollNotificationObserverScope.prototype;
  dart.addTypeTests(scroll_notification_observer._ScrollNotificationObserverScope);
  dart.addTypeCaches(scroll_notification_observer._ScrollNotificationObserverScope);
  dart.setMethodSignature(scroll_notification_observer._ScrollNotificationObserverScope, () => ({
    __proto__: dart.getMethods(scroll_notification_observer._ScrollNotificationObserverScope.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(scroll_notification_observer._ScrollNotificationObserverScope, I[0]);
  dart.setFieldSignature(scroll_notification_observer._ScrollNotificationObserverScope, () => ({
    __proto__: dart.getFields(scroll_notification_observer._ScrollNotificationObserverScope.__proto__),
    [_scrollNotificationObserverState$]: dart.finalFieldType(scroll_notification_observer.ScrollNotificationObserverState)
  }));
  scroll_notification_observer._ListenerEntry = class _ListenerEntry extends collection.LinkedListEntry {
    static ['_#new#tearOff'](listener) {
      return new scroll_notification_observer._ListenerEntry.new(listener);
    }
  };
  (scroll_notification_observer._ListenerEntry.new = function(listener) {
    this.listener = listener;
    scroll_notification_observer._ListenerEntry.__proto__.new.call(this);
    ;
  }).prototype = scroll_notification_observer._ListenerEntry.prototype;
  dart.addTypeTests(scroll_notification_observer._ListenerEntry);
  dart.addTypeCaches(scroll_notification_observer._ListenerEntry);
  dart.setLibraryUri(scroll_notification_observer._ListenerEntry, I[0]);
  dart.setFieldSignature(scroll_notification_observer._ListenerEntry, () => ({
    __proto__: dart.getFields(scroll_notification_observer._ListenerEntry.__proto__),
    listener: dart.finalFieldType(dart.fnType(dart.void, [scroll_notification.ScrollNotification]))
  }));
  var child$ = dart.privateName(scroll_notification_observer, "ScrollNotificationObserver.child");
  scroll_notification_observer.ScrollNotificationObserver = class ScrollNotificationObserver extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new scroll_notification_observer.ScrollNotificationObserver.new({key: key, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static of(context) {
      let t0;
      t0 = context.dependOnInheritedWidgetOfExactType(scroll_notification_observer._ScrollNotificationObserverScope);
      return t0 == null ? null : t0[_scrollNotificationObserverState$];
    }
    createState() {
      return new scroll_notification_observer.ScrollNotificationObserverState.new();
    }
  };
  (scroll_notification_observer.ScrollNotificationObserver.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    if (!(child !== null)) dart.assertFailed(null, I[1], 69, 15, "child != null");
    scroll_notification_observer.ScrollNotificationObserver.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_notification_observer.ScrollNotificationObserver.prototype;
  dart.addTypeTests(scroll_notification_observer.ScrollNotificationObserver);
  dart.addTypeCaches(scroll_notification_observer.ScrollNotificationObserver);
  dart.setMethodSignature(scroll_notification_observer.ScrollNotificationObserver, () => ({
    __proto__: dart.getMethods(scroll_notification_observer.ScrollNotificationObserver.__proto__),
    createState: dart.fnType(scroll_notification_observer.ScrollNotificationObserverState, [])
  }));
  dart.setStaticMethodSignature(scroll_notification_observer.ScrollNotificationObserver, () => ['of']);
  dart.setLibraryUri(scroll_notification_observer.ScrollNotificationObserver, I[0]);
  dart.setFieldSignature(scroll_notification_observer.ScrollNotificationObserver, () => ({
    __proto__: dart.getFields(scroll_notification_observer.ScrollNotificationObserver.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  var _listeners = dart.privateName(scroll_notification_observer, "_listeners");
  var _debugAssertNotDisposed = dart.privateName(scroll_notification_observer, "_debugAssertNotDisposed");
  var _notifyListeners = dart.privateName(scroll_notification_observer, "_notifyListeners");
  scroll_notification_observer.ScrollNotificationObserverState = class ScrollNotificationObserverState extends framework.State$(scroll_notification_observer.ScrollNotificationObserver) {
    [_debugAssertNotDisposed]() {
      if (!dart.fn(() => {
        if (this[_listeners] == null) {
          dart.throw(assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 96, 12, "() {\n      if (_listeners == null) {\n        throw FlutterError(\n          'A $runtimeType was used after being disposed.\\n'\n          'Once you have called dispose() on a $runtimeType, it can no longer be used.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    addListener(listener) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 111, 12, "_debugAssertNotDisposed()");
      dart.nullCheck(this[_listeners]).add(new scroll_notification_observer._ListenerEntry.new(listener));
    }
    removeListener(listener) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 117, 12, "_debugAssertNotDisposed()");
      for (let entry of dart.nullCheck(this[_listeners])) {
        if (entry.listener[$_equals](listener)) {
          entry.unlink();
          return;
        }
      }
    }
    [_notifyListeners](notification) {
      let t1, t0;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 127, 12, "_debugAssertNotDisposed()");
      if (dart.nullCheck(this[_listeners]).isEmpty) return;
      let localListeners = T.ListOf_ListenerEntry().of(dart.nullCheck(this[_listeners]));
      for (let entry of localListeners) {
        try {
          if (entry.list != null) {
            t0 = entry;
            t1 = notification;
            t0.listener(t1);
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "widget library", context: new assertions.ErrorDescription.new("while dispatching notifications for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => T.JSArrayOfDiagnosticsNode().of([new (T.DiagnosticsPropertyOfScrollNotificationObserverState()).new("The " + dart.str(this[$runtimeType]) + " sending notification was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})]), T.VoidToListOfDiagnosticsNode())}));
          } else
            throw e;
        }
      }
    }
    build(context) {
      return new (T.NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => {
          this[_notifyListeners](notification);
          return false;
        }, T.ScrollNotificationTobool()), child: new scroll_notification_observer._ScrollNotificationObserverScope.new({scrollNotificationObserverState: this, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    dispose() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[1], 170, 12, "_debugAssertNotDisposed()");
      this[_listeners] = null;
      super.dispose();
    }
    static ['_#new#tearOff']() {
      return new scroll_notification_observer.ScrollNotificationObserverState.new();
    }
  };
  (scroll_notification_observer.ScrollNotificationObserverState.new = function() {
    this[_listeners] = new (T.LinkedListOf_ListenerEntry()).new();
    scroll_notification_observer.ScrollNotificationObserverState.__proto__.new.call(this);
    ;
  }).prototype = scroll_notification_observer.ScrollNotificationObserverState.prototype;
  dart.addTypeTests(scroll_notification_observer.ScrollNotificationObserverState);
  dart.addTypeCaches(scroll_notification_observer.ScrollNotificationObserverState);
  dart.setMethodSignature(scroll_notification_observer.ScrollNotificationObserverState, () => ({
    __proto__: dart.getMethods(scroll_notification_observer.ScrollNotificationObserverState.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [scroll_notification.ScrollNotification])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [scroll_notification.ScrollNotification])]),
    [_notifyListeners]: dart.fnType(dart.void, [scroll_notification.ScrollNotification]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_notification_observer.ScrollNotificationObserverState, I[0]);
  dart.setFieldSignature(scroll_notification_observer.ScrollNotificationObserverState, () => ({
    __proto__: dart.getFields(scroll_notification_observer.ScrollNotificationObserverState.__proto__),
    [_listeners]: dart.fieldType(dart.nullable(collection.LinkedList$(scroll_notification_observer._ListenerEntry)))
  }));
  dart.setBaseClass(scroll_notification_observer._ListenerEntry, collection.LinkedListEntry$(scroll_notification_observer._ListenerEntry));
  dart.trackLibraries("packages/flutter/src/widgets/scroll_notification_observer.dart", {
    "package:flutter/src/widgets/scroll_notification_observer.dart": scroll_notification_observer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_notification_observer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA4ByC;;;;;;;;;;;;uBAGkB;;AAAQ,YAAiC,EAAjC,kDAAoC,AAAI,GAAD;IAAiC;;;QATlI;QACW;QACyB;;IACL,yCAAE,+BAA+B;AACnE,iGAAW,GAAG,SAAS,KAAK;;EAAC;;;;;;;;;;;;;;;;;;IASb;AAApB;;EAA6B;;;;;;;;;;IAoChB;;;;;;;;;;;cAK2C;;AACtD,WAAO,AAAQ,OAAD;0BAAC,OAAwE;IACzF;;AAGiD;IAAiC;;;QAf3E;QACS;;;UACJ,AAAM,KAAD;AAAW,2FAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;AA2BzC,WAAO,AAQN;AAPC,YAAI,AAAW;AAIZ,UAHD,WAAM,4BAAY,AAChB,gBAAI,sBAAW,sCACf,kDAAsC,sBAAW;;AAGrD,cAAO;;AAET,YAAO;IACT;gBAI4C;AAC1C,WAAO;AACkC,MAA/B,AAAE,eAAZ,sBAAgB,oDAAe,QAAQ;IACzC;mBAG+C;AAC7C,WAAO;AACP,eAA0B,QAAmB,gBAAV;AACjC,YAAI,AAAM,AAAS,KAAV,oBAAa,QAAQ;AACd,UAAd,AAAM,KAAD;AACL;;;IAGN;uBAEyC;;AACvC,WAAO;AACP,UAAc,AAAE,eAAZ,2BACF;AAEyB,2BAAiB,4BAAkC,eAAV;AACpE,eAA0B,QAAS,eAAc;AAC/C;AACE,cAAI,AAAM,KAAD,eACqB;iBAA5B,KAAK;iBAAU,YAAY;YAAb;;;cACT;cAAW;AAAlB;AAaE,YAZW,oCAAY,mDACZ,SAAS,SACb,KAAK,WACH,2BACA,oCAAiB,AAAkD,kDAAZ,4CAC1C,cAAuB,iCAC3C,mEACE,AAA2C,kBAArC,sBAAW,6BACjB,cAC4B;;;;;IAMxC;UAG0B;AACxB,YAAO,yEACW,QAAoB;AACJ,UAA9B,uBAAiB,YAAY;AAC7B,gBAAO;iDAEF,wGAC4B,aAC1B,AAAO;IAGpB;;AAIE,WAAO;AACU,MAAjB,mBAAa;AACE,MAAT;IACR;;;;;;IAhF4B,mBAAa;;;EAiF3C","file":"../../../../../../../../../../packages/flutter/src/widgets/scroll_notification_observer.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__scroll_notification_observer: scroll_notification_observer
  };
}));

//# sourceMappingURL=scroll_notification_observer.dart.lib.js.map
