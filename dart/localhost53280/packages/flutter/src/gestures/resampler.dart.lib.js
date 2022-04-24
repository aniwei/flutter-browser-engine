define(['dart_sdk', 'packages/flutter/src/gestures/events.dart'], (function load__packages__flutter__src__gestures__resampler_dart(dart_sdk, packages__flutter__src__gestures__events$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  var resampler = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $iterator = dartx.iterator;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ListQueueOfPointerEvent: () => (T.ListQueueOfPointerEvent = dart.constFn(collection.ListQueue$(events.PointerEvent)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/resampler.dart",
    "package:flutter/src/gestures/resampler.dart"
  ];
  var _queuedEvents = dart.privateName(resampler, "_queuedEvents");
  var _last = dart.privateName(resampler, "_last");
  var _next = dart.privateName(resampler, "_next");
  var _position = dart.privateName(resampler, "_position");
  var _isTracked = dart.privateName(resampler, "_isTracked");
  var _isDown = dart.privateName(resampler, "_isDown");
  var _pointerIdentifier = dart.privateName(resampler, "_pointerIdentifier");
  var _hasButtons = dart.privateName(resampler, "_hasButtons");
  var _toHoverEvent = dart.privateName(resampler, "_toHoverEvent");
  var _toMoveEvent = dart.privateName(resampler, "_toMoveEvent");
  var _toMoveOrHoverEvent = dart.privateName(resampler, "_toMoveOrHoverEvent");
  var _positionAt = dart.privateName(resampler, "_positionAt");
  var _processPointerEvents = dart.privateName(resampler, "_processPointerEvents");
  var _dequeueAndSampleNonHoverOrMovePointerEventsUntil = dart.privateName(resampler, "_dequeueAndSampleNonHoverOrMovePointerEventsUntil");
  var _samplePointerPosition = dart.privateName(resampler, "_samplePointerPosition");
  resampler.PointerEventResampler = class PointerEventResampler extends core.Object {
    [_toHoverEvent](event, position, delta, timeStamp, buttons) {
      return new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: event.kind, device: event.device, position: position, delta: delta, buttons: event.buttons, obscured: event.obscured, pressureMin: event.pressureMin, pressureMax: event.pressureMax, distance: event.distance, distanceMax: event.distanceMax, size: event.size, radiusMajor: event.radiusMajor, radiusMinor: event.radiusMinor, radiusMin: event.radiusMin, radiusMax: event.radiusMax, orientation: event.orientation, tilt: event.tilt, synthesized: event.synthesized, embedderId: event.embedderId});
    }
    [_toMoveEvent](event, position, delta, pointerIdentifier, timeStamp, buttons) {
      return new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: pointerIdentifier, kind: event.kind, device: event.device, position: position, delta: delta, buttons: buttons, obscured: event.obscured, pressure: event.pressure, pressureMin: event.pressureMin, pressureMax: event.pressureMax, distanceMax: event.distanceMax, size: event.size, radiusMajor: event.radiusMajor, radiusMinor: event.radiusMinor, radiusMin: event.radiusMin, radiusMax: event.radiusMax, orientation: event.orientation, tilt: event.tilt, platformData: event.platformData, synthesized: event.synthesized, embedderId: event.embedderId});
    }
    [_toMoveOrHoverEvent](event, position, delta, pointerIdentifier, timeStamp, isDown, buttons) {
      return isDown ? this[_toMoveEvent](event, position, delta, pointerIdentifier, timeStamp, buttons) : this[_toHoverEvent](event, position, delta, timeStamp, buttons);
    }
    [_positionAt](sampleTime) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let x = (t0$ = (t0 = this[_next], t0 == null ? null : t0.position.dx), t0$ == null ? 0.0 : t0$);
      let y = (t0$1 = (t0$0 = this[_next], t0$0 == null ? null : t0$0.position.dy), t0$1 == null ? 0.0 : t0$1);
      let nextTimeStamp = (t0$3 = (t0$2 = this[_next], t0$2 == null ? null : t0$2.timeStamp), t0$3 == null ? core.Duration.zero : t0$3);
      let lastTimeStamp = (t0$5 = (t0$4 = this[_last], t0$4 == null ? null : t0$4.timeStamp), t0$5 == null ? core.Duration.zero : t0$5);
      if (nextTimeStamp['>'](sampleTime) && nextTimeStamp['>'](lastTimeStamp)) {
        let interval = nextTimeStamp['-'](lastTimeStamp).inMicroseconds[$toDouble]();
        let scalar = sampleTime['-'](lastTimeStamp).inMicroseconds[$toDouble]() / interval;
        let lastX = (t0$7 = (t0$6 = this[_last], t0$6 == null ? null : t0$6.position.dx), t0$7 == null ? 0.0 : t0$7);
        let lastY = (t0$9 = (t0$8 = this[_last], t0$8 == null ? null : t0$8.position.dy), t0$9 == null ? 0.0 : t0$9);
        x = lastX + (x - lastX) * scalar;
        y = lastY + (y - lastY) * scalar;
      }
      return new ui.Offset.new(x, y);
    }
    [_processPointerEvents](sampleTime) {
      let t0, t0$;
      let it = this[_queuedEvents][$iterator];
      while (it.moveNext()) {
        let event = it.current;
        if (event.timeStamp['<='](sampleTime) || this[_last] == null) {
          this[_last] = event;
          this[_next] = event;
          continue;
        }
        let nextTimeStamp = (t0$ = (t0 = this[_next], t0 == null ? null : t0.timeStamp), t0$ == null ? core.Duration.zero : t0$);
        if (nextTimeStamp['<'](sampleTime)) {
          this[_next] = event;
          break;
        }
      }
    }
    [_dequeueAndSampleNonHoverOrMovePointerEventsUntil](sampleTime, nextSampleTime, callback) {
      let endTime = sampleTime;
      let it = this[_queuedEvents][$iterator];
      while (it.moveNext()) {
        let event = it.current;
        if (event.timeStamp['>'](sampleTime)) {
          if (event.timeStamp['>='](nextSampleTime)) {
            break;
          }
          if (events.PointerUpEvent.is(event) || events.PointerRemovedEvent.is(event)) {
            endTime = event.timeStamp;
            continue;
          }
          if (!events.PointerMoveEvent.is(event) && !events.PointerHoverEvent.is(event)) {
            break;
          }
        }
      }
      while (this[_queuedEvents][$isNotEmpty]) {
        let event = this[_queuedEvents][$first];
        if (event.timeStamp['>'](endTime)) {
          break;
        }
        let wasTracked = this[_isTracked];
        let wasDown = this[_isDown];
        let hadButtons = this[_hasButtons];
        this[_isTracked] = !events.PointerRemovedEvent.is(event);
        this[_isDown] = event.down;
        this[_hasButtons] = event.buttons;
        let position = this[_positionAt](sampleTime);
        if (this[_isTracked] && !wasTracked) {
          this[_position] = position;
        }
        let pointerIdentifier = event.pointer;
        if (!(!wasDown || this[_pointerIdentifier] === pointerIdentifier)) dart.assertFailed(null, I[0], 234, 14, "!wasDown || _pointerIdentifier == pointerIdentifier");
        this[_pointerIdentifier] = pointerIdentifier;
        if (!events.PointerMoveEvent.is(event) && !events.PointerHoverEvent.is(event)) {
          if (!position._equals(this[_position])) {
            let delta = position['-'](this[_position]);
            callback(this[_toMoveOrHoverEvent](event, position, delta, this[_pointerIdentifier], sampleTime, wasDown, hadButtons));
            this[_position] = position;
          }
          callback(event.copyWith({position: position, delta: ui.Offset.zero, pointer: pointerIdentifier, timeStamp: sampleTime}));
        }
        this[_queuedEvents].removeFirst();
      }
    }
    [_samplePointerPosition](sampleTime, callback) {
      let position = this[_positionAt](sampleTime);
      let next = this[_next];
      if (!position._equals(this[_position]) && next != null) {
        let delta = position['-'](this[_position]);
        callback(this[_toMoveOrHoverEvent](next, position, delta, this[_pointerIdentifier], sampleTime, this[_isDown], this[_hasButtons]));
        this[_position] = position;
      }
    }
    addEvent(event) {
      this[_queuedEvents].add(event);
    }
    sample(sampleTime, nextSampleTime, callback) {
      this[_processPointerEvents](sampleTime);
      this[_dequeueAndSampleNonHoverOrMovePointerEventsUntil](sampleTime, nextSampleTime, callback);
      if (this[_isTracked]) {
        this[_samplePointerPosition](sampleTime, callback);
      }
    }
    stop(callback) {
      while (this[_queuedEvents][$isNotEmpty]) {
        callback(this[_queuedEvents].removeFirst());
      }
      this[_pointerIdentifier] = 0;
      this[_isDown] = false;
      this[_isTracked] = false;
      this[_position] = ui.Offset.zero;
      this[_next] = null;
      this[_last] = null;
    }
    get hasPendingEvents() {
      return this[_queuedEvents][$isNotEmpty];
    }
    get isTracked() {
      return this[_isTracked];
    }
    get isDown() {
      return this[_isDown];
    }
    static ['_#new#tearOff']() {
      return new resampler.PointerEventResampler.new();
    }
  };
  (resampler.PointerEventResampler.new = function() {
    this[_queuedEvents] = new (T.ListQueueOfPointerEvent()).new();
    this[_last] = null;
    this[_next] = null;
    this[_position] = ui.Offset.zero;
    this[_isTracked] = false;
    this[_isDown] = false;
    this[_pointerIdentifier] = 0;
    this[_hasButtons] = 0;
    ;
  }).prototype = resampler.PointerEventResampler.prototype;
  dart.addTypeTests(resampler.PointerEventResampler);
  dart.addTypeCaches(resampler.PointerEventResampler);
  dart.setMethodSignature(resampler.PointerEventResampler, () => ({
    __proto__: dart.getMethods(resampler.PointerEventResampler.__proto__),
    [_toHoverEvent]: dart.fnType(events.PointerEvent, [events.PointerEvent, ui.Offset, ui.Offset, core.Duration, core.int]),
    [_toMoveEvent]: dart.fnType(events.PointerEvent, [events.PointerEvent, ui.Offset, ui.Offset, core.int, core.Duration, core.int]),
    [_toMoveOrHoverEvent]: dart.fnType(events.PointerEvent, [events.PointerEvent, ui.Offset, ui.Offset, core.int, core.Duration, core.bool, core.int]),
    [_positionAt]: dart.fnType(ui.Offset, [core.Duration]),
    [_processPointerEvents]: dart.fnType(dart.void, [core.Duration]),
    [_dequeueAndSampleNonHoverOrMovePointerEventsUntil]: dart.fnType(dart.void, [core.Duration, core.Duration, dart.fnType(dart.void, [events.PointerEvent])]),
    [_samplePointerPosition]: dart.fnType(dart.void, [core.Duration, dart.fnType(dart.void, [events.PointerEvent])]),
    addEvent: dart.fnType(dart.void, [events.PointerEvent]),
    sample: dart.fnType(dart.void, [core.Duration, core.Duration, dart.fnType(dart.void, [events.PointerEvent])]),
    stop: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])])
  }));
  dart.setGetterSignature(resampler.PointerEventResampler, () => ({
    __proto__: dart.getGetters(resampler.PointerEventResampler.__proto__),
    hasPendingEvents: core.bool,
    isTracked: core.bool,
    isDown: core.bool
  }));
  dart.setLibraryUri(resampler.PointerEventResampler, I[1]);
  dart.setFieldSignature(resampler.PointerEventResampler, () => ({
    __proto__: dart.getFields(resampler.PointerEventResampler.__proto__),
    [_queuedEvents]: dart.finalFieldType(collection.Queue$(events.PointerEvent)),
    [_last]: dart.fieldType(dart.nullable(events.PointerEvent)),
    [_next]: dart.fieldType(dart.nullable(events.PointerEvent)),
    [_position]: dart.fieldType(ui.Offset),
    [_isTracked]: dart.fieldType(core.bool),
    [_isDown]: dart.fieldType(core.bool),
    [_pointerIdentifier]: dart.fieldType(core.int),
    [_hasButtons]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/flutter/src/gestures/resampler.dart", {
    "package:flutter/src/gestures/resampler.dart": resampler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["resampler.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/resampler.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__resampler: resampler
  };
}));

//# sourceMappingURL=resampler.dart.lib.js.map
