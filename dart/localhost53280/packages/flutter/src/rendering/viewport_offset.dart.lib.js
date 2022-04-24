define(['dart_sdk', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__rendering__viewport_offset_dart(dart_sdk, packages__flutter__src__animation__curves$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var viewport_offset = Object.create(dart.library);
  var $join = dartx.join;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: viewport_offset.ScrollDirection.prototype,
        [_Enum__name]: "idle",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: viewport_offset.ScrollDirection.prototype,
        [_Enum__name]: "forward",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: viewport_offset.ScrollDirection.prototype,
        [_Enum__name]: "reverse",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], viewport_offset.ScrollDirection);
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "package:flutter/src/rendering/viewport_offset.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/viewport_offset.dart"
  ];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  viewport_offset.ScrollDirection = class ScrollDirection extends core._Enum {
    toString() {
      return "ScrollDirection." + this[_name];
    }
  };
  (viewport_offset.ScrollDirection.new = function(index, name) {
    viewport_offset.ScrollDirection.__proto__.new.call(this, index, name);
    ;
  }).prototype = viewport_offset.ScrollDirection.prototype;
  dart.addTypeTests(viewport_offset.ScrollDirection);
  dart.addTypeCaches(viewport_offset.ScrollDirection);
  dart.setLibraryUri(viewport_offset.ScrollDirection, I[0]);
  dart.setStaticFieldSignature(viewport_offset.ScrollDirection, () => ['values', 'idle', 'forward', 'reverse']);
  dart.defineExtensionMethods(viewport_offset.ScrollDirection, ['toString']);
  viewport_offset.ScrollDirection.idle = C[0] || CT.C0;
  viewport_offset.ScrollDirection.forward = C[1] || CT.C1;
  viewport_offset.ScrollDirection.reverse = C[2] || CT.C2;
  viewport_offset.ScrollDirection.values = C[3] || CT.C3;
  viewport_offset.ViewportOffset = class ViewportOffset extends change_notifier.ChangeNotifier {
    static ['_#fixed#tearOff'](value) {
      return new viewport_offset._FixedViewportOffset.new(value);
    }
    static ['_#zero#tearOff']() {
      return new viewport_offset._FixedViewportOffset.zero();
    }
    moveTo(to, opts) {
      let t0;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      let clamp = opts && 'clamp' in opts ? opts.clamp : null;
      if (!(to !== null)) dart.assertFailed(null, I[1], 199, 12, "to != null");
      if (duration == null || dart.equals(duration, core.Duration.zero)) {
        this.jumpTo(to);
        return T.FutureOfvoid().value();
      } else {
        return this.animateTo(to, {duration: duration, curve: (t0 = curve, t0 == null ? curves.Curves.ease : t0)});
      }
    }
    toString() {
      let description = T.JSArrayOfString().of([]);
      this.debugFillDescription(description);
      return diagnostics.describeIdentity(this) + "(" + description[$join](", ") + ")";
    }
    debugFillDescription(description) {
      if (this.hasPixels) {
        description[$add]("offset: " + this.pixels[$toStringAsFixed](1));
      }
    }
  };
  (viewport_offset.ViewportOffset.new = function() {
    viewport_offset.ViewportOffset.__proto__.new.call(this);
    ;
  }).prototype = viewport_offset.ViewportOffset.prototype;
  dart.addTypeTests(viewport_offset.ViewportOffset);
  dart.addTypeCaches(viewport_offset.ViewportOffset);
  dart.setMethodSignature(viewport_offset.ViewportOffset, () => ({
    __proto__: dart.getMethods(viewport_offset.ViewportOffset.__proto__),
    moveTo: dart.fnType(async.Future$(dart.void), [core.double], {clamp: dart.nullable(core.bool), curve: dart.nullable(curves.Curve), duration: dart.nullable(core.Duration)}, {}),
    debugFillDescription: dart.fnType(dart.void, [core.List$(core.String)])
  }));
  dart.setStaticMethodSignature(viewport_offset.ViewportOffset, () => ['fixed', 'zero']);
  dart.setLibraryUri(viewport_offset.ViewportOffset, I[0]);
  dart.setStaticFieldSignature(viewport_offset.ViewportOffset, () => ['_redirecting#']);
  dart.defineExtensionMethods(viewport_offset.ViewportOffset, ['toString']);
  var _pixels$ = dart.privateName(viewport_offset, "_pixels");
  viewport_offset._FixedViewportOffset = class _FixedViewportOffset extends viewport_offset.ViewportOffset {
    static ['_#new#tearOff'](_pixels) {
      return new viewport_offset._FixedViewportOffset.new(_pixels);
    }
    static ['_#zero#tearOff']() {
      return new viewport_offset._FixedViewportOffset.zero();
    }
    get pixels() {
      return this[_pixels$];
    }
    get hasPixels() {
      return true;
    }
    applyViewportDimension(viewportDimension) {
      return true;
    }
    applyContentDimensions(minScrollExtent, maxScrollExtent) {
      return true;
    }
    correctBy(correction) {
      this[_pixels$] = this[_pixels$] + correction;
    }
    jumpTo(pixels) {
    }
    animateTo(to, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return async.async(dart.void, function* animateTo() {
      });
    }
    get userScrollDirection() {
      return viewport_offset.ScrollDirection.idle;
    }
    get allowImplicitScrolling() {
      return false;
    }
  };
  (viewport_offset._FixedViewportOffset.new = function(_pixels) {
    this[_pixels$] = _pixels;
    viewport_offset._FixedViewportOffset.__proto__.new.call(this);
    ;
  }).prototype = viewport_offset._FixedViewportOffset.prototype;
  dart.defineValue(viewport_offset._FixedViewportOffset, 'zero', function() {
    this[_pixels$] = 0.0;
    viewport_offset._FixedViewportOffset.__proto__.new.call(this);
    ;
  }).prototype = viewport_offset._FixedViewportOffset.prototype;
  dart.addTypeTests(viewport_offset._FixedViewportOffset);
  dart.addTypeCaches(viewport_offset._FixedViewportOffset);
  dart.setMethodSignature(viewport_offset._FixedViewportOffset, () => ({
    __proto__: dart.getMethods(viewport_offset._FixedViewportOffset.__proto__),
    applyViewportDimension: dart.fnType(core.bool, [core.double]),
    applyContentDimensions: dart.fnType(core.bool, [core.double, core.double]),
    correctBy: dart.fnType(dart.void, [core.double]),
    jumpTo: dart.fnType(dart.void, [core.double]),
    animateTo: dart.fnType(async.Future$(dart.void), [core.double], {}, {curve: curves.Curve, duration: core.Duration})
  }));
  dart.setGetterSignature(viewport_offset._FixedViewportOffset, () => ({
    __proto__: dart.getGetters(viewport_offset._FixedViewportOffset.__proto__),
    pixels: core.double,
    hasPixels: core.bool,
    userScrollDirection: viewport_offset.ScrollDirection,
    allowImplicitScrolling: core.bool
  }));
  dart.setLibraryUri(viewport_offset._FixedViewportOffset, I[0]);
  dart.setFieldSignature(viewport_offset._FixedViewportOffset, () => ({
    __proto__: dart.getFields(viewport_offset._FixedViewportOffset.__proto__),
    [_pixels$]: dart.fieldType(core.double)
  }));
  viewport_offset.flipScrollDirection = function flipScrollDirection(direction) {
    switch (direction) {
      case C[0] || CT.C0:
      {
        return viewport_offset.ScrollDirection.idle;
      }
      case C[1] || CT.C1:
      {
        return viewport_offset.ScrollDirection.reverse;
      }
      case C[2] || CT.C2:
      {
        return viewport_offset.ScrollDirection.forward;
      }
    }
  };
  dart.trackLibraries("packages/flutter/src/rendering/viewport_offset.dart", {
    "package:flutter/src/rendering/viewport_offset.dart": viewport_offset
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["viewport_offset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiCA;;yDAjBK;;;EAiBL;;;;;;;;;;;;;;;;;WAgKW;;UACG;UACH;UACD;AAEN,YAAO,AAAG,EAAD;AACT,UAAI,AAAS,QAAD,YAAqB,YAAT,QAAQ,EAAa;AACjC,QAAV,YAAO,EAAE;AACT,cAAO;;AAEP,cAAO,gBAAU,EAAE,aAAY,QAAQ,UAAe,KAAN,KAAK,EAAL,aAAgB;;IAEpE;;AA2BqB,wBAAsB;AACR,MAAjC,0BAAqB,WAAW;AAChC,YAAU,AAAmD,8BAAlC,QAAM,MAAG,AAAY,WAAD,QAAM,QAAM;IAC7D;yBAYuC;AACrC,UAAI;AACqD,QAAvD,AAAY,WAAD,OAAK,AAAsC,aAA3B,AAAO,8BAAgB;;IAEtD;;;AAtLA;;EAAgB;;;;;;;;;;;;;;;;;;;;;AAgMK;IAAO;;AAGN;IAAI;2BAGS;AAAsB;IAAI;2BAG1B,iBAAwB;AAAoB;IAAI;cAG7D;AACC,MAArB,iBAAA,AAAQ,iBAAG,UAAU;IACvB;WAGmB;IAEnB;cAIS;UACW;UACH;AAHK;MAIX;;;AAGgC,YAAgB;IAAI;;AAG5B;IAAK;;;IAtCd;AAA1B;;EAAkC;;IACI,iBAAE;AAAxC;;EAA2C;;;;;;;;;;;;;;;;;;;;;;;qEAxNO;AAClD,YAAQ,SAAS;;;AAEb,cAAuB;;;;AAEvB,cAAuB;;;;AAEvB,cAAuB;;;EAE7B","file":"../../../../../../../../../../packages/flutter/src/rendering/viewport_offset.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__viewport_offset: viewport_offset
  };
}));

//# sourceMappingURL=viewport_offset.dart.lib.js.map
