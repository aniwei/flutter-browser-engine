define(['dart_sdk', 'packages/flutter/src/foundation/debug.dart', 'packages/vector_math/vector_math_64.dart'], (function load__packages__flutter__src__gestures__hit_test_dart(dart_sdk, packages__flutter__src__foundation__debug$46dart, packages__vector_math__vector_math_64$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  var hit_test = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $last = dartx.last;
  var $add = dartx.add;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $abs = dartx.abs;
  var $every = dartx.every;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfHitTestEntry: () => (T.JSArrayOfHitTestEntry = dart.constFn(_interceptors.JSArray$(hit_test.HitTestEntry)))(),
    JSArrayOfMatrix4: () => (T.JSArrayOfMatrix4 = dart.constFn(_interceptors.JSArray$(vector_math_64.Matrix4)))(),
    JSArrayOf_TransformPart: () => (T.JSArrayOf_TransformPart = dart.constFn(_interceptors.JSArray$(hit_test._TransformPart)))(),
    doubleTobool: () => (T.doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flutter/src/gestures/hit_test.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/hit_test.dart"
  ];
  hit_test.HitTestable = class HitTestable extends core.Object {};
  (hit_test.HitTestable.__ = function() {
    ;
  }).prototype = hit_test.HitTestable.prototype;
  dart.addTypeTests(hit_test.HitTestable);
  dart.addTypeCaches(hit_test.HitTestable);
  dart.setLibraryUri(hit_test.HitTestable, I[0]);
  hit_test.HitTestDispatcher = class HitTestDispatcher extends core.Object {};
  (hit_test.HitTestDispatcher.__ = function() {
    ;
  }).prototype = hit_test.HitTestDispatcher.prototype;
  dart.addTypeTests(hit_test.HitTestDispatcher);
  dart.addTypeCaches(hit_test.HitTestDispatcher);
  dart.setLibraryUri(hit_test.HitTestDispatcher, I[0]);
  hit_test.HitTestTarget = class HitTestTarget extends core.Object {};
  (hit_test.HitTestTarget.__ = function() {
    ;
  }).prototype = hit_test.HitTestTarget.prototype;
  dart.addTypeTests(hit_test.HitTestTarget);
  dart.addTypeCaches(hit_test.HitTestTarget);
  dart.setLibraryUri(hit_test.HitTestTarget, I[0]);
  var target$ = dart.privateName(hit_test, "HitTestEntry.target");
  var _transform = dart.privateName(hit_test, "_transform");
  hit_test.HitTestEntry = class HitTestEntry extends core.Object {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    static ['_#new#tearOff'](target) {
      return new hit_test.HitTestEntry.new(target);
    }
    toString() {
      return diagnostics.describeIdentity(this) + "(" + dart.str(this.target) + ")";
    }
    get transform() {
      return this[_transform];
    }
  };
  (hit_test.HitTestEntry.new = function(target) {
    this[_transform] = null;
    this[target$] = target;
    ;
  }).prototype = hit_test.HitTestEntry.prototype;
  dart.addTypeTests(hit_test.HitTestEntry);
  dart.addTypeCaches(hit_test.HitTestEntry);
  dart.setGetterSignature(hit_test.HitTestEntry, () => ({
    __proto__: dart.getGetters(hit_test.HitTestEntry.__proto__),
    transform: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setLibraryUri(hit_test.HitTestEntry, I[0]);
  dart.setFieldSignature(hit_test.HitTestEntry, () => ({
    __proto__: dart.getFields(hit_test.HitTestEntry.__proto__),
    target: dart.finalFieldType(hit_test.HitTestTarget),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4))
  }));
  dart.defineExtensionMethods(hit_test.HitTestEntry, ['toString']);
  hit_test._TransformPart = class _TransformPart extends core.Object {};
  (hit_test._TransformPart.new = function() {
    ;
  }).prototype = hit_test._TransformPart.prototype;
  dart.addTypeTests(hit_test._TransformPart);
  dart.addTypeCaches(hit_test._TransformPart);
  dart.setLibraryUri(hit_test._TransformPart, I[0]);
  var matrix$ = dart.privateName(hit_test, "_MatrixTransformPart.matrix");
  hit_test._MatrixTransformPart = class _MatrixTransformPart extends hit_test._TransformPart {
    get matrix() {
      return this[matrix$];
    }
    set matrix(value) {
      super.matrix = value;
    }
    static ['_#new#tearOff'](matrix) {
      return new hit_test._MatrixTransformPart.new(matrix);
    }
    multiply(rhs) {
      return vector_math_64.Matrix4.as(this.matrix['*'](rhs));
    }
  };
  (hit_test._MatrixTransformPart.new = function(matrix) {
    this[matrix$] = matrix;
    hit_test._MatrixTransformPart.__proto__.new.call(this);
    ;
  }).prototype = hit_test._MatrixTransformPart.prototype;
  dart.addTypeTests(hit_test._MatrixTransformPart);
  dart.addTypeCaches(hit_test._MatrixTransformPart);
  dart.setMethodSignature(hit_test._MatrixTransformPart, () => ({
    __proto__: dart.getMethods(hit_test._MatrixTransformPart.__proto__),
    multiply: dart.fnType(vector_math_64.Matrix4, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(hit_test._MatrixTransformPart, I[0]);
  dart.setFieldSignature(hit_test._MatrixTransformPart, () => ({
    __proto__: dart.getFields(hit_test._MatrixTransformPart.__proto__),
    matrix: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  var offset$ = dart.privateName(hit_test, "_OffsetTransformPart.offset");
  hit_test._OffsetTransformPart = class _OffsetTransformPart extends hit_test._TransformPart {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    static ['_#new#tearOff'](offset) {
      return new hit_test._OffsetTransformPart.new(offset);
    }
    multiply(rhs) {
      let t0;
      t0 = rhs.clone();
      return (() => {
        t0.leftTranslate(this.offset.dx, this.offset.dy);
        return t0;
      })();
    }
  };
  (hit_test._OffsetTransformPart.new = function(offset) {
    this[offset$] = offset;
    hit_test._OffsetTransformPart.__proto__.new.call(this);
    ;
  }).prototype = hit_test._OffsetTransformPart.prototype;
  dart.addTypeTests(hit_test._OffsetTransformPart);
  dart.addTypeCaches(hit_test._OffsetTransformPart);
  dart.setMethodSignature(hit_test._OffsetTransformPart, () => ({
    __proto__: dart.getMethods(hit_test._OffsetTransformPart.__proto__),
    multiply: dart.fnType(vector_math_64.Matrix4, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(hit_test._OffsetTransformPart, I[0]);
  dart.setFieldSignature(hit_test._OffsetTransformPart, () => ({
    __proto__: dart.getFields(hit_test._OffsetTransformPart.__proto__),
    offset: dart.finalFieldType(ui.Offset)
  }));
  var _path = dart.privateName(hit_test, "_path");
  var _transforms = dart.privateName(hit_test, "_transforms");
  var _localTransforms = dart.privateName(hit_test, "_localTransforms");
  var _globalizeTransforms = dart.privateName(hit_test, "_globalizeTransforms");
  var _lastTransform = dart.privateName(hit_test, "_lastTransform");
  var _debugVectorMoreOrLessEquals = dart.privateName(hit_test, "_debugVectorMoreOrLessEquals");
  hit_test.HitTestResult = class HitTestResult extends core.Object {
    static ['_#new#tearOff']() {
      return new hit_test.HitTestResult.new();
    }
    static ['_#wrap#tearOff'](result) {
      return new hit_test.HitTestResult.wrap(result);
    }
    get path() {
      return this[_path];
    }
    [_globalizeTransforms]() {
      if (this[_localTransforms][$isEmpty]) {
        return;
      }
      let last = this[_transforms][$last];
      for (let part of this[_localTransforms]) {
        last = part.multiply(last);
        this[_transforms][$add](last);
      }
      this[_localTransforms][$clear]();
    }
    get [_lastTransform]() {
      this[_globalizeTransforms]();
      if (!this[_localTransforms][$isEmpty]) dart.assertFailed(null, I[1], 166, 12, "_localTransforms.isEmpty");
      return this[_transforms][$last];
    }
    add(entry) {
      if (!(entry[_transform] == null)) dart.assertFailed(null, I[1], 176, 12, "entry._transform == null");
      entry[_transform] = this[_lastTransform];
      this[_path][$add](entry);
    }
    pushTransform(transform) {
      if (!(transform !== null)) dart.assertFailed(null, I[1], 211, 12, "transform != null");
      if (!(this[_debugVectorMoreOrLessEquals](transform.getRow(2), vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0)) && this[_debugVectorMoreOrLessEquals](transform.getColumn(2), vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0)))) dart.assertFailed("The third row and third column of a transform matrix for pointer " + "events must be Vector4(0, 0, 1, 0) to ensure that a transformed " + "point is directly under the pointing device. Did you forget to run the paint " + "matrix through PointerEvent.removePerspectiveTransform? " + "The provided matrix is:\n" + dart.str(transform), I[1], 213, 7, "_debugVectorMoreOrLessEquals(transform.getRow(2), Vector4(0, 0, 1, 0)) &&\n      _debugVectorMoreOrLessEquals(transform.getColumn(2), Vector4(0, 0, 1, 0))");
      this[_localTransforms][$add](new hit_test._MatrixTransformPart.new(transform));
    }
    pushOffset(offset) {
      if (!(offset !== null)) dart.assertFailed(null, I[1], 251, 12, "offset != null");
      this[_localTransforms][$add](new hit_test._OffsetTransformPart.new(offset));
    }
    popTransform() {
      if (this[_localTransforms][$isNotEmpty])
        this[_localTransforms][$removeLast]();
      else
        this[_transforms][$removeLast]();
      if (!this[_transforms][$isNotEmpty]) dart.assertFailed(null, I[1], 274, 12, "_transforms.isNotEmpty");
    }
    [_debugVectorMoreOrLessEquals](a, b, opts) {
      let epsilon = opts && 'epsilon' in opts ? opts.epsilon : 1e-10;
      let result = true;
      if (!dart.fn(() => {
        let difference = a['-'](b);
        result = difference.storage[$every](dart.fn(component => component[$abs]() < epsilon, T.doubleTobool()));
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 279, 12, "() {\n      final Vector4 difference = a - b;\n      result = difference.storage.every((double component) => component.abs() < epsilon);\n      return true;\n    }()");
      return result;
    }
    toString() {
      return "HitTestResult(" + (this[_path][$isEmpty] ? "<empty path>" : this[_path][$join](", ")) + ")";
    }
  };
  (hit_test.HitTestResult.new = function() {
    this[_path] = T.JSArrayOfHitTestEntry().of([]);
    this[_transforms] = T.JSArrayOfMatrix4().of([vector_math_64.Matrix4.identity()]);
    this[_localTransforms] = T.JSArrayOf_TransformPart().of([]);
    ;
  }).prototype = hit_test.HitTestResult.prototype;
  (hit_test.HitTestResult.wrap = function(result) {
    this[_path] = result[_path];
    this[_transforms] = result[_transforms];
    this[_localTransforms] = result[_localTransforms];
    ;
  }).prototype = hit_test.HitTestResult.prototype;
  dart.addTypeTests(hit_test.HitTestResult);
  dart.addTypeCaches(hit_test.HitTestResult);
  dart.setMethodSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getMethods(hit_test.HitTestResult.__proto__),
    [_globalizeTransforms]: dart.fnType(dart.void, []),
    add: dart.fnType(dart.void, [hit_test.HitTestEntry]),
    pushTransform: dart.fnType(dart.void, [vector_math_64.Matrix4]),
    pushOffset: dart.fnType(dart.void, [ui.Offset]),
    popTransform: dart.fnType(dart.void, []),
    [_debugVectorMoreOrLessEquals]: dart.fnType(core.bool, [vector_math_64.Vector4, vector_math_64.Vector4], {epsilon: core.double}, {})
  }));
  dart.setGetterSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getGetters(hit_test.HitTestResult.__proto__),
    path: core.Iterable$(hit_test.HitTestEntry),
    [_lastTransform]: vector_math_64.Matrix4
  }));
  dart.setLibraryUri(hit_test.HitTestResult, I[0]);
  dart.setFieldSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getFields(hit_test.HitTestResult.__proto__),
    [_path]: dart.finalFieldType(core.List$(hit_test.HitTestEntry)),
    [_transforms]: dart.finalFieldType(core.List$(vector_math_64.Matrix4)),
    [_localTransforms]: dart.finalFieldType(core.List$(hit_test._TransformPart))
  }));
  dart.defineExtensionMethods(hit_test.HitTestResult, ['toString']);
  dart.trackLibraries("packages/flutter/src/gestures/hit_test.dart", {
    "package:flutter/src/gestures/hit_test.dart": hit_test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hit_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAciB;;;;;;;EAaM;;;;;;;EAUJ;;;;;;;IAeG;;;;;;;;;;AAGC,YAAG,AAAiC,8BAAhB,QAAM,eAAE,eAAM;IAAE;;AAU/B;IAAU;;wCAhBlB;IAiBT;IAjBS;;EAAO;;;;;;;;;;;;;;;;;EAuBH;;;;;;IAgBR;;;;;;;;;aAGW;AACvB,YAAoB,2BAAb,AAAO,iBAAE,GAAG;IACrB;;;IAPgC;AAA1B;;EAAiC;;;;;;;;;;;;;;IAa1B;;;;;;;;;aAGY;;AACvB,WAAO,AAAI,GAAD;YAAC;AAAS,yBAAc,AAAO,gBAAI,AAAO;;;IACtD;;;IAPgC;AAA1B;;EAAiC;;;;;;;;;;;;;;;;;;;;;;;;;;AAkCJ;IAAK;;AAqBtC,UAAI,AAAiB;AACnB;;AAEM,iBAAO,AAAY;AAC3B,eAA0B,OAAQ;AACN,QAA1B,OAAO,AAAK,IAAD,UAAU,IAAI;AACJ,QAArB,AAAY,wBAAI,IAAI;;AAEE,MAAxB,AAAiB;IACnB;;AAGwB,MAAtB;AACA,WAAO,AAAiB;AACxB,YAAO,AAAY;IACrB;QAOsB;AACpB,YAAO,AAAM,AAAW,KAAZ;AACqB,MAAjC,AAAM,KAAD,eAAc;AACH,MAAhB,AAAM,kBAAI,KAAK;IACjB;kBA+B2B;AACzB,YAAO,AAAU,SAAD;AAChB,YACE,AAAuE,mCAA1C,AAAU,SAAD,QAAQ,IAAI,2BAAQ,KAAG,KAAG,KAAG,SACnE,mCAA6B,AAAU,SAAD,WAAW,IAAI,2BAAQ,KAAG,KAAG,KAAG,0BAAG,AACzE,sEACA,qEACA,kFACA,6DACA,uCAA2B,SAAS;AAEe,MAArD,AAAiB,6BAAI,sCAAqB,SAAS;IACrD;eA4BuB;AACrB,YAAO,AAAO,MAAD;AACqC,MAAlD,AAAiB,6BAAI,sCAAqB,MAAM;IAClD;;AAiBE,UAAI,AAAiB;AACU,QAA7B,AAAiB;;AAEO,QAAxB,AAAY;AACd,WAAO,AAAY;IACrB;mCAE0C,GAAW;UAAY;AAC1D,mBAAS;AACd,WAAO,AAIN;AAHe,yBAAa,AAAE,CAAD,MAAG,CAAC;AACkD,QAAlF,SAAS,AAAW,AAAQ,UAAT,iBAAe,QAAQ,aAAc,AAAU,AAAM,SAAP,WAAS,OAAO;AACjF,cAAO;;AAET,YAAO,OAAM;IACf;;AAGqB,YAAA,AAAqE,qBAApD,AAAM,wBAAU,iBAAiB,AAAM,mBAAK,SAAM;IAAE;;;IAhL/E,cAAgB;IACV,oBAAW,yBAAS;IACf,yBAAkB;;EAAE;0CAQT;IACtB,cAAE,AAAO,MAAD;IACF,oBAAE,AAAO,MAAD;IACH,yBAAE,AAAO,MAAD;;EAAiB","file":"../../../../../../../../../../packages/flutter/src/gestures/hit_test.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__hit_test: hit_test
  };
}));

//# sourceMappingURL=hit_test.dart.lib.js.map
