define(['dart_sdk', 'packages/flutter/src/painting/borders.dart'], (function load__packages__flutter__src__painting__notched_shapes_dart(dart_sdk, packages__flutter__src__painting__borders$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  var notched_shapes = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $length = dartx.length;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    OffsetN: () => (T.OffsetN = dart.constFn(dart.nullable(ui.Offset)))(),
    ListOfOffsetN: () => (T.ListOfOffsetN = dart.constFn(core.List$(T.OffsetN())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/painting/notched_shapes.dart"];
  notched_shapes.NotchedShape = class NotchedShape extends core.Object {};
  (notched_shapes.NotchedShape.new = function() {
    ;
  }).prototype = notched_shapes.NotchedShape.prototype;
  dart.addTypeTests(notched_shapes.NotchedShape);
  dart.addTypeCaches(notched_shapes.NotchedShape);
  dart.setLibraryUri(notched_shapes.NotchedShape, I[0]);
  notched_shapes.CircularNotchedRectangle = class CircularNotchedRectangle extends notched_shapes.NotchedShape {
    static ['_#new#tearOff']() {
      return new notched_shapes.CircularNotchedRectangle.new();
    }
    getOuterPath(host, guest) {
      let t0, t0$;
      if (guest == null || !host.overlaps(guest)) {
        t0 = ui.Path.new();
        return (() => {
          t0.addRect(host);
          return t0;
        })();
      }
      let notchRadius = guest.width / 2.0;
      let r = notchRadius;
      let a = -1.0 * r - 1;
      let b = host.top - guest.center.dy;
      let n2 = math.sqrt(b * b * r * r * (a * a + b * b - r * r));
      let p2xA = (a * r * r - n2) / (a * a + b * b);
      let p2xB = (a * r * r + n2) / (a * a + b * b);
      let p2yA = math.sqrt(r * r - p2xA * p2xA);
      let p2yB = math.sqrt(r * r - p2xB * p2xB);
      let p = T.ListOfOffsetN().filled(6, null);
      p[$_set](0, new ui.Offset.new(a - 15, b));
      p[$_set](1, new ui.Offset.new(a, b));
      let cmp = b < 0 ? -1.0 : 1.0;
      p[$_set](2, cmp * p2yA > cmp * p2yB ? new ui.Offset.new(p2xA, p2yA) : new ui.Offset.new(p2xB, p2yB));
      p[$_set](3, new ui.Offset.new(-1.0 * dart.nullCheck(p[$_get](2)).dx, dart.nullCheck(p[$_get](2)).dy));
      p[$_set](4, new ui.Offset.new(-1.0 * dart.nullCheck(p[$_get](1)).dx, dart.nullCheck(p[$_get](1)).dy));
      p[$_set](5, new ui.Offset.new(-1.0 * dart.nullCheck(p[$_get](0)).dx, dart.nullCheck(p[$_get](0)).dy));
      for (let i = 0; i < p[$length]; i = i + 1)
        p[$_set](i, dart.nullCheck(p[$_get](i))['+'](guest.center));
      t0$ = ui.Path.new();
      return (() => {
        t0$.moveTo(host.left, host.top);
        t0$.lineTo(dart.nullCheck(p[$_get](0)).dx, dart.nullCheck(p[$_get](0)).dy);
        t0$.quadraticBezierTo(dart.nullCheck(p[$_get](1)).dx, dart.nullCheck(p[$_get](1)).dy, dart.nullCheck(p[$_get](2)).dx, dart.nullCheck(p[$_get](2)).dy);
        t0$.arcToPoint(dart.nullCheck(p[$_get](3)), {radius: new ui.Radius.circular(notchRadius), clockwise: false});
        t0$.quadraticBezierTo(dart.nullCheck(p[$_get](4)).dx, dart.nullCheck(p[$_get](4)).dy, dart.nullCheck(p[$_get](5)).dx, dart.nullCheck(p[$_get](5)).dy);
        t0$.lineTo(host.right, host.top);
        t0$.lineTo(host.right, host.bottom);
        t0$.lineTo(host.left, host.bottom);
        t0$.close();
        return t0$;
      })();
    }
  };
  (notched_shapes.CircularNotchedRectangle.new = function() {
    notched_shapes.CircularNotchedRectangle.__proto__.new.call(this);
    ;
  }).prototype = notched_shapes.CircularNotchedRectangle.prototype;
  dart.addTypeTests(notched_shapes.CircularNotchedRectangle);
  dart.addTypeCaches(notched_shapes.CircularNotchedRectangle);
  dart.setMethodSignature(notched_shapes.CircularNotchedRectangle, () => ({
    __proto__: dart.getMethods(notched_shapes.CircularNotchedRectangle.__proto__),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect, dart.nullable(ui.Rect)])
  }));
  dart.setLibraryUri(notched_shapes.CircularNotchedRectangle, I[0]);
  var host$ = dart.privateName(notched_shapes, "AutomaticNotchedShape.host");
  var guest$ = dart.privateName(notched_shapes, "AutomaticNotchedShape.guest");
  notched_shapes.AutomaticNotchedShape = class AutomaticNotchedShape extends notched_shapes.NotchedShape {
    get host() {
      return this[host$];
    }
    set host(value) {
      super.host = value;
    }
    get guest() {
      return this[guest$];
    }
    set guest(value) {
      super.guest = value;
    }
    static ['_#new#tearOff'](host, guest = null) {
      return new notched_shapes.AutomaticNotchedShape.new(host, guest);
    }
    getOuterPath(hostRect, guestRect) {
      let hostPath = this.host.getOuterPath(hostRect);
      if (this.guest != null && guestRect != null) {
        let guestPath = dart.nullCheck(this.guest).getOuterPath(guestRect);
        return ui.Path.combine(ui.PathOperation.difference, hostPath, guestPath);
      }
      return hostPath;
    }
  };
  (notched_shapes.AutomaticNotchedShape.new = function(host, guest = null) {
    this[host$] = host;
    this[guest$] = guest;
    notched_shapes.AutomaticNotchedShape.__proto__.new.call(this);
    ;
  }).prototype = notched_shapes.AutomaticNotchedShape.prototype;
  dart.addTypeTests(notched_shapes.AutomaticNotchedShape);
  dart.addTypeCaches(notched_shapes.AutomaticNotchedShape);
  dart.setMethodSignature(notched_shapes.AutomaticNotchedShape, () => ({
    __proto__: dart.getMethods(notched_shapes.AutomaticNotchedShape.__proto__),
    getOuterPath: dart.fnType(ui.Path, [ui.Rect, dart.nullable(ui.Rect)])
  }));
  dart.setLibraryUri(notched_shapes.AutomaticNotchedShape, I[0]);
  dart.setFieldSignature(notched_shapes.AutomaticNotchedShape, () => ({
    __proto__: dart.getFields(notched_shapes.AutomaticNotchedShape.__proto__),
    host: dart.finalFieldType(borders.ShapeBorder),
    guest: dart.finalFieldType(dart.nullable(borders.ShapeBorder))
  }));
  dart.trackLibraries("packages/flutter/src/painting/notched_shapes.dart", {
    "package:flutter/src/painting/notched_shapes.dart": notched_shapes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["notched_shapes.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/painting/notched_shapes.dart.lib.js"}');
  // Exports:
  return {
    src__painting__notched_shapes: notched_shapes
  };
}));

//# sourceMappingURL=notched_shapes.dart.lib.js.map
