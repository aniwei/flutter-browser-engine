define(['dart_sdk', 'packages/flutter/src/gestures/constants.dart', 'packages/flutter/src/gestures/recognizer.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__gestures__tap_dart(dart_sdk, packages__flutter__src__gestures__constants$46dart, packages__flutter__src__gestures__recognizer$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const constants = packages__flutter__src__gestures__constants$46dart.src__gestures__constants;
  const recognizer = packages__flutter__src__gestures__recognizer$46dart.src__gestures__recognizer;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var tap = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    DiagnosticsPropertyOfOffset: () => (T.DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))(),
    DiagnosticsPropertyOfint: () => (T.DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/tap.dart",
    "package:flutter/src/gestures/tap.dart"
  ];
  var globalPosition$ = dart.privateName(tap, "TapDownDetails.globalPosition");
  var kind$ = dart.privateName(tap, "TapDownDetails.kind");
  var localPosition$ = dart.privateName(tap, "TapDownDetails.localPosition");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  tap.TapDownDetails = class TapDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      return new tap.TapDownDetails.new({globalPosition: globalPosition, localPosition: localPosition, kind: kind});
    }
  };
  (tap.TapDownDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[globalPosition$] = globalPosition;
    this[kind$] = kind;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[0], 28, 15, "globalPosition != null");
    this[localPosition$] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = tap.TapDownDetails.prototype;
  dart.addTypeTests(tap.TapDownDetails);
  dart.addTypeCaches(tap.TapDownDetails);
  dart.setLibraryUri(tap.TapDownDetails, I[1]);
  dart.setFieldSignature(tap.TapDownDetails, () => ({
    __proto__: dart.getFields(tap.TapDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(dart.nullable(ui.PointerDeviceKind)),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  var globalPosition$0 = dart.privateName(tap, "TapUpDetails.globalPosition");
  var localPosition$0 = dart.privateName(tap, "TapUpDetails.localPosition");
  var kind$0 = dart.privateName(tap, "TapUpDetails.kind");
  tap.TapUpDetails = class TapUpDetails extends core.Object {
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
    static ['_#new#tearOff'](opts) {
      let kind = opts && 'kind' in opts ? opts.kind : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      return new tap.TapUpDetails.new({kind: kind, globalPosition: globalPosition, localPosition: localPosition});
    }
  };
  (tap.TapUpDetails.new = function(opts) {
    let t0;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[kind$0] = kind;
    this[globalPosition$0] = globalPosition;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[0], 65, 15, "globalPosition != null");
    this[localPosition$0] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = tap.TapUpDetails.prototype;
  dart.addTypeTests(tap.TapUpDetails);
  dart.addTypeCaches(tap.TapUpDetails);
  dart.setLibraryUri(tap.TapUpDetails, I[1]);
  dart.setFieldSignature(tap.TapUpDetails, () => ({
    __proto__: dart.getFields(tap.TapUpDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(ui.PointerDeviceKind)
  }));
  var _sentTapDown = dart.privateName(tap, "_sentTapDown");
  var _wonArenaForPrimaryPointer = dart.privateName(tap, "_wonArenaForPrimaryPointer");
  var _down = dart.privateName(tap, "_down");
  var _up = dart.privateName(tap, "_up");
  var _reset = dart.privateName(tap, "_reset");
  var _checkUp = dart.privateName(tap, "_checkUp");
  var _checkCancel = dart.privateName(tap, "_checkCancel");
  var _checkDown = dart.privateName(tap, "_checkDown");
  tap.BaseTapGestureRecognizer = class BaseTapGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    addAllowedPointer(event) {
      if (!(event !== null)) dart.assertFailed(null, I[0], 192, 12, "event != null");
      if (this.state === recognizer.GestureRecognizerState.ready) {
        if (this[_down] != null && this[_up] != null) {
          if (!(dart.nullCheck(this[_down]).pointer === dart.nullCheck(this[_up]).pointer)) dart.assertFailed(null, I[0], 197, 16, "_down!.pointer == _up!.pointer");
          this[_reset]();
        }
        if (!(this[_down] == null && this[_up] == null)) dart.assertFailed(null, I[0], 201, 14, "_down == null && _up == null");
        this[_down] = event;
      }
      if (this[_down] != null) {
        super.addAllowedPointer(event);
      }
    }
    startTrackingPointer(pointer, transform = null) {
      if (!(this[_down] != null)) dart.assertFailed(null, I[0], 222, 12, "_down != null");
      super.startTrackingPointer(pointer, transform);
    }
    handlePrimaryPointer(event) {
      if (events.PointerUpEvent.is(event)) {
        this[_up] = event;
        this[_checkUp]();
      } else if (events.PointerCancelEvent.is(event)) {
        this.resolve(arena.GestureDisposition.rejected);
        if (this[_sentTapDown]) {
          this[_checkCancel](event, "");
        }
        this[_reset]();
      } else if (event.buttons !== dart.nullCheck(this[_down]).buttons) {
        this.resolve(arena.GestureDisposition.rejected);
        this.stopTrackingPointer(dart.nullCheck(this.primaryPointer));
      }
    }
    resolve(disposition) {
      if (this[_wonArenaForPrimaryPointer] && disposition === arena.GestureDisposition.rejected) {
        if (!this[_sentTapDown]) dart.assertFailed(null, I[0], 249, 14, "_sentTapDown");
        this[_checkCancel](null, "spontaneous");
        this[_reset]();
      }
      super.resolve(disposition);
    }
    didExceedDeadline() {
      this[_checkDown]();
    }
    acceptGesture(pointer) {
      super.acceptGesture(pointer);
      if (pointer === this.primaryPointer) {
        this[_checkDown]();
        this[_wonArenaForPrimaryPointer] = true;
        this[_checkUp]();
      }
    }
    rejectGesture(pointer) {
      super.rejectGesture(pointer);
      if (pointer === this.primaryPointer) {
        if (!(this.state !== recognizer.GestureRecognizerState.possible)) dart.assertFailed(null, I[0], 276, 14, "state != GestureRecognizerState.possible");
        if (this[_sentTapDown]) this[_checkCancel](null, "forced");
        this[_reset]();
      }
    }
    [_checkDown]() {
      if (this[_sentTapDown]) {
        return;
      }
      this.handleTapDown({down: dart.nullCheck(this[_down])});
      this[_sentTapDown] = true;
    }
    [_checkUp]() {
      if (!this[_wonArenaForPrimaryPointer] || this[_up] == null) {
        return;
      }
      if (!(dart.nullCheck(this[_up]).pointer === dart.nullCheck(this[_down]).pointer)) dart.assertFailed(null, I[0], 295, 12, "_up!.pointer == _down!.pointer");
      this.handleTapUp({down: dart.nullCheck(this[_down]), up: dart.nullCheck(this[_up])});
      this[_reset]();
    }
    [_checkCancel](event, note) {
      this.handleTapCancel({down: dart.nullCheck(this[_down]), cancel: event, reason: note});
    }
    [_reset]() {
      this[_sentTapDown] = false;
      this[_wonArenaForPrimaryPointer] = false;
      this[_up] = null;
      this[_down] = null;
    }
    get debugDescription() {
      return "base tap";
    }
    debugFillProperties(properties) {
      let t0, t0$, t0$0, t0$1;
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("wonArenaForPrimaryPointer", {value: this[_wonArenaForPrimaryPointer], ifTrue: "won arena"}));
      properties.add(new (T.DiagnosticsPropertyOfOffset()).new("finalPosition", (t0 = this[_up], t0 == null ? null : t0.position), {defaultValue: null}));
      properties.add(new (T.DiagnosticsPropertyOfOffset()).new("finalLocalPosition", (t0$ = this[_up], t0$ == null ? null : t0$.localPosition), {defaultValue: (t0$0 = this[_up], t0$0 == null ? null : t0$0.position)}));
      properties.add(new (T.DiagnosticsPropertyOfint()).new("button", (t0$1 = this[_down], t0$1 == null ? null : t0$1.buttons), {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("sentTapDown", {value: this[_sentTapDown], ifTrue: "sent tap down"}));
    }
  };
  (tap.BaseTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_sentTapDown] = false;
    this[_wonArenaForPrimaryPointer] = false;
    this[_down] = null;
    this[_up] = null;
    tap.BaseTapGestureRecognizer.__proto__.new.call(this, {deadline: constants.kPressTimeout, debugOwner: debugOwner});
    ;
  }).prototype = tap.BaseTapGestureRecognizer.prototype;
  dart.addTypeTests(tap.BaseTapGestureRecognizer);
  dart.addTypeCaches(tap.BaseTapGestureRecognizer);
  dart.setMethodSignature(tap.BaseTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(tap.BaseTapGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkDown]: dart.fnType(dart.void, []),
    [_checkUp]: dart.fnType(dart.void, []),
    [_checkCancel]: dart.fnType(dart.void, [dart.nullable(events.PointerCancelEvent), core.String]),
    [_reset]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(tap.BaseTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(tap.BaseTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(tap.BaseTapGestureRecognizer, I[1]);
  dart.setFieldSignature(tap.BaseTapGestureRecognizer, () => ({
    __proto__: dart.getFields(tap.BaseTapGestureRecognizer.__proto__),
    [_sentTapDown]: dart.fieldType(core.bool),
    [_wonArenaForPrimaryPointer]: dart.fieldType(core.bool),
    [_down]: dart.fieldType(dart.nullable(events.PointerDownEvent)),
    [_up]: dart.fieldType(dart.nullable(events.PointerUpEvent))
  }));
  var onTapDown = dart.privateName(tap, "TapGestureRecognizer.onTapDown");
  var onTapUp = dart.privateName(tap, "TapGestureRecognizer.onTapUp");
  var onTap = dart.privateName(tap, "TapGestureRecognizer.onTap");
  var onTapCancel = dart.privateName(tap, "TapGestureRecognizer.onTapCancel");
  var onSecondaryTap = dart.privateName(tap, "TapGestureRecognizer.onSecondaryTap");
  var onSecondaryTapDown = dart.privateName(tap, "TapGestureRecognizer.onSecondaryTapDown");
  var onSecondaryTapUp = dart.privateName(tap, "TapGestureRecognizer.onSecondaryTapUp");
  var onSecondaryTapCancel = dart.privateName(tap, "TapGestureRecognizer.onSecondaryTapCancel");
  var onTertiaryTapDown = dart.privateName(tap, "TapGestureRecognizer.onTertiaryTapDown");
  var onTertiaryTapUp = dart.privateName(tap, "TapGestureRecognizer.onTertiaryTapUp");
  var onTertiaryTapCancel = dart.privateName(tap, "TapGestureRecognizer.onTertiaryTapCancel");
  tap.TapGestureRecognizer = class TapGestureRecognizer extends tap.BaseTapGestureRecognizer {
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
    get onSecondaryTap() {
      return this[onSecondaryTap];
    }
    set onSecondaryTap(value) {
      this[onSecondaryTap] = value;
    }
    get onSecondaryTapDown() {
      return this[onSecondaryTapDown];
    }
    set onSecondaryTapDown(value) {
      this[onSecondaryTapDown] = value;
    }
    get onSecondaryTapUp() {
      return this[onSecondaryTapUp];
    }
    set onSecondaryTapUp(value) {
      this[onSecondaryTapUp] = value;
    }
    get onSecondaryTapCancel() {
      return this[onSecondaryTapCancel];
    }
    set onSecondaryTapCancel(value) {
      this[onSecondaryTapCancel] = value;
    }
    get onTertiaryTapDown() {
      return this[onTertiaryTapDown];
    }
    set onTertiaryTapDown(value) {
      this[onTertiaryTapDown] = value;
    }
    get onTertiaryTapUp() {
      return this[onTertiaryTapUp];
    }
    set onTertiaryTapUp(value) {
      this[onTertiaryTapUp] = value;
    }
    get onTertiaryTapCancel() {
      return this[onTertiaryTapCancel];
    }
    set onTertiaryTapCancel(value) {
      this[onTertiaryTapCancel] = value;
    }
    static ['_#new#tearOff'](opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      return new tap.TapGestureRecognizer.new({debugOwner: debugOwner});
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onTapDown == null && this.onTap == null && this.onTapUp == null && this.onTapCancel == null) return false;
          break;
        }
        case 2:
        {
          if (this.onSecondaryTap == null && this.onSecondaryTapDown == null && this.onSecondaryTapUp == null && this.onSecondaryTapCancel == null) return false;
          break;
        }
        case 4:
        {
          if (this.onTertiaryTapDown == null && this.onTertiaryTapUp == null && this.onTertiaryTapCancel == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    handleTapDown(opts) {
      let down = opts && 'down' in opts ? opts.down : null;
      let details = new tap.TapDownDetails.new({globalPosition: down.position, localPosition: down.localPosition, kind: this.getKindForPointer(down.pointer)});
      switch (down.buttons) {
        case 1:
        {
          if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => dart.nullCheck(this.onTapDown)(details), T.VoidTovoid()));
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown != null) this.invokeCallback(dart.void, "onSecondaryTapDown", dart.fn(() => dart.nullCheck(this.onSecondaryTapDown)(details), T.VoidTovoid()));
          break;
        }
        case 4:
        {
          if (this.onTertiaryTapDown != null) this.invokeCallback(dart.void, "onTertiaryTapDown", dart.fn(() => dart.nullCheck(this.onTertiaryTapDown)(details), T.VoidTovoid()));
          break;
        }
        default:
      }
    }
    handleTapUp(opts) {
      let down = opts && 'down' in opts ? opts.down : null;
      let up = opts && 'up' in opts ? opts.up : null;
      let details = new tap.TapUpDetails.new({kind: up.kind, globalPosition: up.position, localPosition: up.localPosition});
      switch (down.buttons) {
        case 1:
        {
          if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => dart.nullCheck(this.onTapUp)(details), T.VoidTovoid()));
          if (this.onTap != null) this.invokeCallback(dart.void, "onTap", dart.nullCheck(this.onTap));
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapUp != null) this.invokeCallback(dart.void, "onSecondaryTapUp", dart.fn(() => dart.nullCheck(this.onSecondaryTapUp)(details), T.VoidTovoid()));
          if (this.onSecondaryTap != null) this.invokeCallback(dart.void, "onSecondaryTap", dart.fn(() => dart.nullCheck(this.onSecondaryTap)(), T.VoidTovoid()));
          break;
        }
        case 4:
        {
          if (this.onTertiaryTapUp != null) this.invokeCallback(dart.void, "onTertiaryTapUp", dart.fn(() => dart.nullCheck(this.onTertiaryTapUp)(details), T.VoidTovoid()));
          break;
        }
        default:
      }
    }
    handleTapCancel(opts) {
      let down = opts && 'down' in opts ? opts.down : null;
      let cancel = opts && 'cancel' in opts ? opts.cancel : null;
      let reason = opts && 'reason' in opts ? opts.reason : null;
      let note = reason === "" ? reason : reason + " ";
      switch (down.buttons) {
        case 1:
        {
          if (this.onTapCancel != null) this.invokeCallback(dart.void, note + "onTapCancel", dart.nullCheck(this.onTapCancel));
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapCancel != null) this.invokeCallback(dart.void, note + "onSecondaryTapCancel", dart.nullCheck(this.onSecondaryTapCancel));
          break;
        }
        case 4:
        {
          if (this.onTertiaryTapCancel != null) this.invokeCallback(dart.void, note + "onTertiaryTapCancel", dart.nullCheck(this.onTertiaryTapCancel));
          break;
        }
        default:
      }
    }
    get debugDescription() {
      return "tap";
    }
  };
  (tap.TapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[onTapDown] = null;
    this[onTapUp] = null;
    this[onTap] = null;
    this[onTapCancel] = null;
    this[onSecondaryTap] = null;
    this[onSecondaryTapDown] = null;
    this[onSecondaryTapUp] = null;
    this[onSecondaryTapCancel] = null;
    this[onTertiaryTapDown] = null;
    this[onTertiaryTapUp] = null;
    this[onTertiaryTapCancel] = null;
    tap.TapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner});
    ;
  }).prototype = tap.TapGestureRecognizer.prototype;
  dart.addTypeTests(tap.TapGestureRecognizer);
  dart.addTypeCaches(tap.TapGestureRecognizer);
  dart.setMethodSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getMethods(tap.TapGestureRecognizer.__proto__),
    handleTapDown: dart.fnType(dart.void, [], {}, {down: events.PointerDownEvent}),
    handleTapUp: dart.fnType(dart.void, [], {}, {down: events.PointerDownEvent, up: events.PointerUpEvent}),
    handleTapCancel: dart.fnType(dart.void, [], {cancel: dart.nullable(events.PointerCancelEvent)}, {down: events.PointerDownEvent, reason: core.String})
  }));
  dart.setLibraryUri(tap.TapGestureRecognizer, I[1]);
  dart.setFieldSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getFields(tap.TapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [tap.TapDownDetails]))),
    onTapUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, [tap.TapUpDetails]))),
    onTap: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onTapCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSecondaryTap: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSecondaryTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [tap.TapDownDetails]))),
    onSecondaryTapUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, [tap.TapUpDetails]))),
    onSecondaryTapCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
    onTertiaryTapDown: dart.fieldType(dart.nullable(dart.fnType(dart.void, [tap.TapDownDetails]))),
    onTertiaryTapUp: dart.fieldType(dart.nullable(dart.fnType(dart.void, [tap.TapUpDetails]))),
    onTertiaryTapCancel: dart.fieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/tap.dart", {
    "package:flutter/src/gestures/tap.dart": tap
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tap.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/tap.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__tap: tap
  };
}));

//# sourceMappingURL=tap.dart.lib.js.map
