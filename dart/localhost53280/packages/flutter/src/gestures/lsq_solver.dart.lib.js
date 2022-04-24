define(['dart_sdk'], (function load__packages__flutter__src__gestures__lsq_solver_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var lsq_solver = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $length = dartx.length;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flutter/src/gestures/lsq_solver.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/lsq_solver.dart"
  ];
  var _offset = dart.privateName(lsq_solver, "_offset");
  var _length = dart.privateName(lsq_solver, "_length");
  var _elements = dart.privateName(lsq_solver, "_elements");
  lsq_solver._Vector = class _Vector extends core.Object {
    static ['_#new#tearOff'](size) {
      return new lsq_solver._Vector.new(size);
    }
    static ['_#fromVOL#tearOff'](values, offset, length) {
      return new lsq_solver._Vector.fromVOL(values, offset, length);
    }
    _get(i) {
      return this[_elements][$_get](i + this[_offset]);
    }
    _set(i, value$) {
      let value = value$;
      this[_elements][$_set](i + this[_offset], value);
      return value$;
    }
    ['*'](a) {
      let result = 0.0;
      for (let i = 0; i < this[_length]; i = i + 1)
        result = result + this._get(i) * a._get(i);
      return result;
    }
    norm() {
      return math.sqrt(this['*'](this));
    }
  };
  (lsq_solver._Vector.new = function(size) {
    this[_offset] = 0;
    this[_length] = size;
    this[_elements] = _native_typed_data.NativeFloat64List.new(size);
    ;
  }).prototype = lsq_solver._Vector.prototype;
  (lsq_solver._Vector.fromVOL = function(values, offset, length) {
    this[_offset] = offset;
    this[_length] = length;
    this[_elements] = values;
    ;
  }).prototype = lsq_solver._Vector.prototype;
  dart.addTypeTests(lsq_solver._Vector);
  dart.addTypeCaches(lsq_solver._Vector);
  dart.setMethodSignature(lsq_solver._Vector, () => ({
    __proto__: dart.getMethods(lsq_solver._Vector.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double]),
    '*': dart.fnType(core.double, [lsq_solver._Vector]),
    norm: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(lsq_solver._Vector, I[0]);
  dart.setFieldSignature(lsq_solver._Vector, () => ({
    __proto__: dart.getFields(lsq_solver._Vector.__proto__),
    [_offset]: dart.finalFieldType(core.int),
    [_length]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  var _columns = dart.privateName(lsq_solver, "_columns");
  lsq_solver._Matrix = class _Matrix extends core.Object {
    static ['_#new#tearOff'](rows, cols) {
      return new lsq_solver._Matrix.new(rows, cols);
    }
    get(row, col) {
      return this[_elements][$_get](row * this[_columns] + col);
    }
    set(row, col, value) {
      this[_elements][$_set](row * this[_columns] + col, value);
    }
    getRow(row) {
      return new lsq_solver._Vector.fromVOL(this[_elements], row * this[_columns], this[_columns]);
    }
  };
  (lsq_solver._Matrix.new = function(rows, cols) {
    this[_columns] = cols;
    this[_elements] = _native_typed_data.NativeFloat64List.new(rows * cols);
    ;
  }).prototype = lsq_solver._Matrix.prototype;
  dart.addTypeTests(lsq_solver._Matrix);
  dart.addTypeCaches(lsq_solver._Matrix);
  dart.setMethodSignature(lsq_solver._Matrix, () => ({
    __proto__: dart.getMethods(lsq_solver._Matrix.__proto__),
    get: dart.fnType(core.double, [core.int, core.int]),
    set: dart.fnType(dart.void, [core.int, core.int, core.double]),
    getRow: dart.fnType(lsq_solver._Vector, [core.int])
  }));
  dart.setLibraryUri(lsq_solver._Matrix, I[0]);
  dart.setFieldSignature(lsq_solver._Matrix, () => ({
    __proto__: dart.getFields(lsq_solver._Matrix.__proto__),
    [_columns]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  var coefficients = dart.privateName(lsq_solver, "PolynomialFit.coefficients");
  var __PolynomialFit_confidence = dart.privateName(lsq_solver, "_#PolynomialFit#confidence");
  lsq_solver.PolynomialFit = class PolynomialFit extends core.Object {
    get coefficients() {
      return this[coefficients];
    }
    set coefficients(value) {
      super.coefficients = value;
    }
    static ['_#new#tearOff'](degree) {
      return new lsq_solver.PolynomialFit.new(degree);
    }
    get confidence() {
      let t0;
      t0 = this[__PolynomialFit_confidence];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("confidence")) : t0;
    }
    set confidence(t0) {
      this[__PolynomialFit_confidence] = t0;
    }
  };
  (lsq_solver.PolynomialFit.new = function(degree) {
    this[__PolynomialFit_confidence] = null;
    this[coefficients] = _native_typed_data.NativeFloat64List.new(degree + 1);
    ;
  }).prototype = lsq_solver.PolynomialFit.prototype;
  dart.addTypeTests(lsq_solver.PolynomialFit);
  dart.addTypeCaches(lsq_solver.PolynomialFit);
  dart.setGetterSignature(lsq_solver.PolynomialFit, () => ({
    __proto__: dart.getGetters(lsq_solver.PolynomialFit.__proto__),
    confidence: core.double
  }));
  dart.setSetterSignature(lsq_solver.PolynomialFit, () => ({
    __proto__: dart.getSetters(lsq_solver.PolynomialFit.__proto__),
    confidence: core.double
  }));
  dart.setLibraryUri(lsq_solver.PolynomialFit, I[0]);
  dart.setFieldSignature(lsq_solver.PolynomialFit, () => ({
    __proto__: dart.getFields(lsq_solver.PolynomialFit.__proto__),
    coefficients: dart.finalFieldType(core.List$(core.double)),
    [__PolynomialFit_confidence]: dart.fieldType(dart.nullable(core.double))
  }));
  var x$ = dart.privateName(lsq_solver, "LeastSquaresSolver.x");
  var y$ = dart.privateName(lsq_solver, "LeastSquaresSolver.y");
  var w$ = dart.privateName(lsq_solver, "LeastSquaresSolver.w");
  lsq_solver.LeastSquaresSolver = class LeastSquaresSolver extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get w() {
      return this[w$];
    }
    set w(value) {
      super.w = value;
    }
    static ['_#new#tearOff'](x, y, w) {
      return new lsq_solver.LeastSquaresSolver.new(x, y, w);
    }
    solve(degree) {
      let t2, t1, t2$, t1$;
      if (degree > this.x[$length]) return null;
      let result = new lsq_solver.PolynomialFit.new(degree);
      let m = this.x[$length];
      let n = degree + 1;
      let a = new lsq_solver._Matrix.new(n, m);
      for (let h = 0; h < m; h = h + 1) {
        a.set(0, h, this.w[$_get](h));
        for (let i = 1; i < n; i = i + 1)
          a.set(i, h, a.get(i - 1, h) * this.x[$_get](h));
      }
      let q = new lsq_solver._Matrix.new(n, m);
      let r = new lsq_solver._Matrix.new(n, n);
      for (let j = 0; j < n; j = j + 1) {
        for (let h = 0; h < m; h = h + 1)
          q.set(j, h, a.get(j, h));
        for (let i = 0; i < j; i = i + 1) {
          let dot = q.getRow(j)['*'](q.getRow(i));
          for (let h = 0; h < m; h = h + 1)
            q.set(j, h, q.get(j, h) - dot * q.get(i, h));
        }
        let norm = q.getRow(j).norm();
        if (norm < 1e-10) {
          return null;
        }
        let inverseNorm = 1.0 / norm;
        for (let h = 0; h < m; h = h + 1)
          q.set(j, h, q.get(j, h) * inverseNorm);
        for (let i = 0; i < n; i = i + 1)
          r.set(j, i, i < j ? 0.0 : q.getRow(j)['*'](a.getRow(i)));
      }
      let wy = new lsq_solver._Vector.new(m);
      for (let h = 0; h < m; h = h + 1)
        wy._set(h, this.y[$_get](h) * this.w[$_get](h));
      for (let i = n - 1; i >= 0; i = i - 1) {
        result.coefficients[$_set](i, q.getRow(i)['*'](wy));
        for (let j = n - 1; j > i; j = j - 1) {
          t1 = result.coefficients;
          t2 = i;
          t1[$_set](t2, t1[$_get](t2) - r.get(i, j) * result.coefficients[$_get](j));
        }
        t1$ = result.coefficients;
        t2$ = i;
        t1$[$_set](t2$, t1$[$_get](t2$) / r.get(i, i));
      }
      let yMean = 0.0;
      for (let h = 0; h < m; h = h + 1)
        yMean = yMean + this.y[$_get](h);
      yMean = yMean / m;
      let sumSquaredError = 0.0;
      let sumSquaredTotal = 0.0;
      for (let h = 0; h < m; h = h + 1) {
        let term = 1.0;
        let err = this.y[$_get](h) - result.coefficients[$_get](0);
        for (let i = 1; i < n; i = i + 1) {
          term = term * this.x[$_get](h);
          err = err - term * result.coefficients[$_get](i);
        }
        sumSquaredError = sumSquaredError + this.w[$_get](h) * this.w[$_get](h) * err * err;
        let v = this.y[$_get](h) - yMean;
        sumSquaredTotal = sumSquaredTotal + this.w[$_get](h) * this.w[$_get](h) * v * v;
      }
      result.confidence = sumSquaredTotal <= 1e-10 ? 1.0 : 1.0 - sumSquaredError / sumSquaredTotal;
      return result;
    }
  };
  (lsq_solver.LeastSquaresSolver.new = function(x, y, w) {
    this[x$] = x;
    this[y$] = y;
    this[w$] = w;
    if (!(x[$length] === y[$length])) dart.assertFailed(null, I[1], 87, 14, "x.length == y.length");
    if (!(y[$length] === w[$length])) dart.assertFailed(null, I[1], 88, 14, "y.length == w.length");
    ;
  }).prototype = lsq_solver.LeastSquaresSolver.prototype;
  dart.addTypeTests(lsq_solver.LeastSquaresSolver);
  dart.addTypeCaches(lsq_solver.LeastSquaresSolver);
  dart.setMethodSignature(lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getMethods(lsq_solver.LeastSquaresSolver.__proto__),
    solve: dart.fnType(dart.nullable(lsq_solver.PolynomialFit), [core.int])
  }));
  dart.setLibraryUri(lsq_solver.LeastSquaresSolver, I[0]);
  dart.setFieldSignature(lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getFields(lsq_solver.LeastSquaresSolver.__proto__),
    x: dart.finalFieldType(core.List$(core.double)),
    y: dart.finalFieldType(core.List$(core.double)),
    w: dart.finalFieldType(core.List$(core.double))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/lsq_solver.dart", {
    "package:flutter/src/gestures/lsq_solver.dart": lsq_solver
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["lsq_solver.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/gestures/lsq_solver.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__lsq_solver: lsq_solver
  };
}));

//# sourceMappingURL=lsq_solver.dart.lib.js.map
