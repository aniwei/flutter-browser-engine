define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/gestures/velocity_tracker.dart'], (function load__packages__flutter__src__gestures__drag_details_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__gestures__velocity_tracker$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const velocity_tracker = packages__flutter__src__gestures__velocity_tracker$46dart.src__gestures__velocity_tracker;
  var drag_details = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
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
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        [Velocity_pixelsPerSecond]: C[0] || CT.C0
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/drag_details.dart",
    "package:flutter/src/gestures/drag_details.dart"
  ];
  var globalPosition$ = dart.privateName(drag_details, "DragDownDetails.globalPosition");
  var localPosition$ = dart.privateName(drag_details, "DragDownDetails.localPosition");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  drag_details.DragDownDetails = class DragDownDetails extends core.Object {
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
    static ['_#new#tearOff'](opts) {
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      return new drag_details.DragDownDetails.new({globalPosition: globalPosition, localPosition: localPosition});
    }
    toString() {
      return object.objectRuntimeType(this, "DragDownDetails") + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragDownDetails.new = function(opts) {
    let t0;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$] = globalPosition;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[0], 27, 15, "globalPosition != null");
    this[localPosition$] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = drag_details.DragDownDetails.prototype;
  dart.addTypeTests(drag_details.DragDownDetails);
  dart.addTypeCaches(drag_details.DragDownDetails);
  dart.setLibraryUri(drag_details.DragDownDetails, I[1]);
  dart.setFieldSignature(drag_details.DragDownDetails, () => ({
    __proto__: dart.getFields(drag_details.DragDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragDownDetails, ['toString']);
  var sourceTimeStamp$ = dart.privateName(drag_details, "DragStartDetails.sourceTimeStamp");
  var globalPosition$0 = dart.privateName(drag_details, "DragStartDetails.globalPosition");
  var localPosition$0 = dart.privateName(drag_details, "DragStartDetails.localPosition");
  var kind$ = dart.privateName(drag_details, "DragStartDetails.kind");
  drag_details.DragStartDetails = class DragStartDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
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
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    static ['_#new#tearOff'](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      return new drag_details.DragStartDetails.new({sourceTimeStamp: sourceTimeStamp, globalPosition: globalPosition, localPosition: localPosition, kind: kind});
    }
    toString() {
      return object.objectRuntimeType(this, "DragStartDetails") + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragStartDetails.new = function(opts) {
    let t0;
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C[0] || CT.C0;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[sourceTimeStamp$] = sourceTimeStamp;
    this[globalPosition$0] = globalPosition;
    this[kind$] = kind;
    if (!(globalPosition !== null)) dart.assertFailed(null, I[0], 75, 15, "globalPosition != null");
    this[localPosition$0] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = drag_details.DragStartDetails.prototype;
  dart.addTypeTests(drag_details.DragStartDetails);
  dart.addTypeCaches(drag_details.DragStartDetails);
  dart.setLibraryUri(drag_details.DragStartDetails, I[1]);
  dart.setFieldSignature(drag_details.DragStartDetails, () => ({
    __proto__: dart.getFields(drag_details.DragStartDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(dart.nullable(core.Duration)),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(dart.nullable(ui.PointerDeviceKind))
  }));
  dart.defineExtensionMethods(drag_details.DragStartDetails, ['toString']);
  var sourceTimeStamp$0 = dart.privateName(drag_details, "DragUpdateDetails.sourceTimeStamp");
  var delta$ = dart.privateName(drag_details, "DragUpdateDetails.delta");
  var primaryDelta$ = dart.privateName(drag_details, "DragUpdateDetails.primaryDelta");
  var globalPosition$1 = dart.privateName(drag_details, "DragUpdateDetails.globalPosition");
  var localPosition$1 = dart.privateName(drag_details, "DragUpdateDetails.localPosition");
  drag_details.DragUpdateDetails = class DragUpdateDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$0];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get delta() {
      return this[delta$];
    }
    set delta(value) {
      super.delta = value;
    }
    get primaryDelta() {
      return this[primaryDelta$];
    }
    set primaryDelta(value) {
      super.primaryDelta = value;
    }
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$1];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    static ['_#new#tearOff'](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let delta = opts && 'delta' in opts ? opts.delta : C[0] || CT.C0;
      let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      return new drag_details.DragUpdateDetails.new({sourceTimeStamp: sourceTimeStamp, delta: delta, primaryDelta: primaryDelta, globalPosition: globalPosition, localPosition: localPosition});
    }
    toString() {
      return object.objectRuntimeType(this, "DragUpdateDetails") + "(" + dart.str(this.delta) + ")";
    }
  };
  (drag_details.DragUpdateDetails.new = function(opts) {
    let t0;
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let delta = opts && 'delta' in opts ? opts.delta : C[0] || CT.C0;
    let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[sourceTimeStamp$0] = sourceTimeStamp;
    this[delta$] = delta;
    this[primaryDelta$] = primaryDelta;
    this[globalPosition$1] = globalPosition;
    if (!(delta !== null)) dart.assertFailed(null, I[0], 142, 15, "delta != null");
    if (!(primaryDelta == null || primaryDelta === delta.dx && delta.dy === 0.0 || primaryDelta === delta.dy && delta.dx === 0.0)) dart.assertFailed(null, I[0], 144, 10, "primaryDelta == null\n           || (primaryDelta == delta.dx && delta.dy == 0.0)\n           || (primaryDelta == delta.dy && delta.dx == 0.0)");
    this[localPosition$1] = (t0 = localPosition, t0 == null ? globalPosition : t0);
    ;
  }).prototype = drag_details.DragUpdateDetails.prototype;
  dart.addTypeTests(drag_details.DragUpdateDetails);
  dart.addTypeCaches(drag_details.DragUpdateDetails);
  dart.setLibraryUri(drag_details.DragUpdateDetails, I[1]);
  dart.setFieldSignature(drag_details.DragUpdateDetails, () => ({
    __proto__: dart.getFields(drag_details.DragUpdateDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(dart.nullable(core.Duration)),
    delta: dart.finalFieldType(ui.Offset),
    primaryDelta: dart.finalFieldType(dart.nullable(core.double)),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragUpdateDetails, ['toString']);
  var velocity$ = dart.privateName(drag_details, "DragEndDetails.velocity");
  var primaryVelocity$ = dart.privateName(drag_details, "DragEndDetails.primaryVelocity");
  var Velocity_pixelsPerSecond = dart.privateName(velocity_tracker, "Velocity.pixelsPerSecond");
  drag_details.DragEndDetails = class DragEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get primaryVelocity() {
      return this[primaryVelocity$];
    }
    set primaryVelocity(value) {
      super.primaryVelocity = value;
    }
    static ['_#new#tearOff'](opts) {
      let velocity = opts && 'velocity' in opts ? opts.velocity : C[1] || CT.C1;
      let primaryVelocity = opts && 'primaryVelocity' in opts ? opts.primaryVelocity : null;
      return new drag_details.DragEndDetails.new({velocity: velocity, primaryVelocity: primaryVelocity});
    }
    toString() {
      return object.objectRuntimeType(this, "DragEndDetails") + "(" + dart.str(this.velocity) + ")";
    }
  };
  (drag_details.DragEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C[1] || CT.C1;
    let primaryVelocity = opts && 'primaryVelocity' in opts ? opts.primaryVelocity : null;
    this[velocity$] = velocity;
    this[primaryVelocity$] = primaryVelocity;
    if (!(velocity !== null)) dart.assertFailed(null, I[0], 221, 15, "velocity != null");
    if (!(primaryVelocity == null || primaryVelocity === velocity.pixelsPerSecond.dx || primaryVelocity === velocity.pixelsPerSecond.dy)) dart.assertFailed(null, I[0], 223, 10, "primaryVelocity == null\n           || primaryVelocity == velocity.pixelsPerSecond.dx\n           || primaryVelocity == velocity.pixelsPerSecond.dy");
    ;
  }).prototype = drag_details.DragEndDetails.prototype;
  dart.addTypeTests(drag_details.DragEndDetails);
  dart.addTypeCaches(drag_details.DragEndDetails);
  dart.setLibraryUri(drag_details.DragEndDetails, I[1]);
  dart.setFieldSignature(drag_details.DragEndDetails, () => ({
    __proto__: dart.getFields(drag_details.DragEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity),
    primaryVelocity: dart.finalFieldType(dart.nullable(core.double))
  }));
  dart.defineExtensionMethods(drag_details.DragEndDetails, ['toString']);
  dart.trackLibraries("packages/flutter/src/gestures/drag_details.dart", {
    "package:flutter/src/gestures/drag_details.dart": drag_details
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["drag_details.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAqCe;;;;;;IAMA;;;;;;;;;;;;AAGQ,YAAG,AAA6D,0BAA3C,MAAM,qBAAmB,eAAE,uBAAc;IAAE;;;;QAtB9E;QACG;IADH;UAEK,AAAe,cAAD;IACP,wBAAgB,KAAd,aAAa,EAAb,aAAiB,cAAc;;;;;;;;;;;;;;;;;IAsDpC;;;;;;IAUH;;;;;;IAMA;;;;;;IAGY;;;;;;;;;;;;;;AAOJ,YAAG,AAA8D,0BAA5C,MAAM,sBAAoB,eAAE,uBAAc;IAAE;;;;QArC/E;QACA;QACG;QACH;IAHA;IACA;IAEA;UACK,AAAe,cAAD;IACP,yBAAgB,KAAd,aAAa,EAAb,aAAiB,cAAc;;;;;;;;;;;;;;;;;;;;IA8EpC;;;;;;IAUH;;;;;;IAaC;;;;;;IAQD;;;;;;IAMA;;;;;;;;;;;;;;;AAGQ,YAAG,AAAsD,0BAApC,MAAM,uBAAqB,eAAE,cAAK;IAAE;;;;QAzDvE;QACA;QACA;QACS;QACN;IAJH;IACA;IACA;IACS;UAEJ,AAAM,KAAD;UAEV,AAAa,AAEX,YAFU,YACN,AAAa,YAAD,KAAI,AAAM,KAAD,OAAO,AAAM,AAAG,KAAJ,QAAO,OACxC,AAAa,YAAD,KAAI,AAAM,KAAD,OAAO,AAAM,AAAG,KAAJ,QAAO;IAElC,yBAAgB,KAAd,aAAa,EAAb,aAAiB,cAAc;;;;;;;;;;;;;;;;;;;IAmFrC;;;;;;IAYD;;;;;;;;;;;;AAGO,YAAG,AAAsD,0BAApC,MAAM,oBAAkB,eAAE,iBAAQ;IAAE;;;QA3BvE;QACA;IADA;IACA;UACK,AAAS,QAAD;UAEb,AAAgB,AAEd,eAFa,YACV,AAAgB,eAAD,KAAI,AAAS,AAAgB,QAAjB,uBAC3B,AAAgB,eAAD,KAAI,AAAS,AAAgB,QAAjB;;EACjC","file":"../../../../../../../../../../packages/flutter/src/gestures/drag_details.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__drag_details: drag_details
  };
}));

//# sourceMappingURL=drag_details.dart.lib.js.map
