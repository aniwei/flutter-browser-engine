define(['dart_sdk', 'packages/flutter/src/animation/listener_helpers.dart'], (function load__packages__flutter__src__animation__tween_sequence_dart(dart_sdk, packages__flutter__src__animation__listener_helpers$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tween = packages__flutter__src__animation__listener_helpers$46dart.src__animation__tween;
  var tween_sequence = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $addAll = dartx.addAll;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    JSArrayOf_Interval: () => (T$.JSArrayOf_Interval = dart.constFn(_interceptors.JSArray$(tween_sequence._Interval)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/animation/tween_sequence.dart",
    "package:flutter/src/animation/tween_sequence.dart"
  ];
  var _items = dart.privateName(tween_sequence, "_items");
  var _intervals = dart.privateName(tween_sequence, "_intervals");
  var _evaluateAt = dart.privateName(tween_sequence, "_evaluateAt");
  const _is_TweenSequence_default = Symbol('_is_TweenSequence_default');
  tween_sequence.TweenSequence$ = dart.generic(T => {
    var __t$TweenSequenceItemOfT = () => (__t$TweenSequenceItemOfT = dart.constFn(tween_sequence.TweenSequenceItem$(T)))();
    var __t$JSArrayOfTweenSequenceItemOfT = () => (__t$JSArrayOfTweenSequenceItemOfT = dart.constFn(_interceptors.JSArray$(__t$TweenSequenceItemOfT())))();
    class TweenSequence extends tween.Animatable$(T) {
      static ['_#new#tearOff'](T, items) {
        return new (tween_sequence.TweenSequence$(T)).new(items);
      }
      [_evaluateAt](t, index) {
        let element = this[_items][$_get](index);
        let tInterval = this[_intervals][$_get](index).value(t);
        return element.tween.transform(tInterval);
      }
      transform(t) {
        if (!(t >= 0.0 && t <= 1.0)) dart.assertFailed(null, I[0], 82, 12, "t >= 0.0 && t <= 1.0");
        if (t === 1.0) return this[_evaluateAt](t, this[_items][$length] - 1);
        for (let index = 0; index < this[_items][$length]; index = index + 1) {
          if (this[_intervals][$_get](index).contains(t)) return this[_evaluateAt](t, index);
        }
        dart.throw(new core.StateError.new("TweenSequence.evaluate() could not find an interval for " + dart.str(t)));
      }
      toString() {
        return "TweenSequence(" + dart.str(this[_items][$length]) + " items)";
      }
    }
    (TweenSequence.new = function(items) {
      this[_items] = __t$JSArrayOfTweenSequenceItemOfT().of([]);
      this[_intervals] = T$.JSArrayOf_Interval().of([]);
      if (!(items !== null)) dart.assertFailed(null, I[0], 54, 16, "items != null");
      if (!items[$isNotEmpty]) dart.assertFailed(null, I[0], 55, 16, "items.isNotEmpty");
      TweenSequence.__proto__.new.call(this);
      this[_items][$addAll](items);
      let totalWeight = 0.0;
      for (let item of this[_items])
        totalWeight = totalWeight + item.weight;
      if (!(totalWeight > 0.0)) dart.assertFailed(null, I[0], 61, 12, "totalWeight > 0.0");
      let start = 0.0;
      for (let i = 0; i < this[_items][$length]; i = i + 1) {
        let end = i === this[_items][$length] - 1 ? 1.0 : start + this[_items][$_get](i).weight / totalWeight;
        this[_intervals][$add](new tween_sequence._Interval.new(start, end));
        start = end;
      }
    }).prototype = TweenSequence.prototype;
    dart.addTypeTests(TweenSequence);
    TweenSequence.prototype[_is_TweenSequence_default] = true;
    dart.addTypeCaches(TweenSequence);
    dart.setMethodSignature(TweenSequence, () => ({
      __proto__: dart.getMethods(TweenSequence.__proto__),
      [_evaluateAt]: dart.fnType(T, [core.double, core.int]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(TweenSequence, I[1]);
    dart.setFieldSignature(TweenSequence, () => ({
      __proto__: dart.getFields(TweenSequence.__proto__),
      [_items]: dart.finalFieldType(core.List$(tween_sequence.TweenSequenceItem$(T))),
      [_intervals]: dart.finalFieldType(core.List$(tween_sequence._Interval))
    }));
    dart.defineExtensionMethods(TweenSequence, ['toString']);
    return TweenSequence;
  });
  tween_sequence.TweenSequence = tween_sequence.TweenSequence$();
  dart.addTypeTests(tween_sequence.TweenSequence, _is_TweenSequence_default);
  tween_sequence.FlippedTweenSequence = class FlippedTweenSequence extends tween_sequence.TweenSequence$(core.double) {
    static ['_#new#tearOff'](items) {
      return new tween_sequence.FlippedTweenSequence.new(items);
    }
    transform(t) {
      return 1 - super.transform(1 - t);
    }
  };
  (tween_sequence.FlippedTweenSequence.new = function(items) {
    if (!(items !== null)) dart.assertFailed(null, I[0], 114, 14, "items != null");
    tween_sequence.FlippedTweenSequence.__proto__.new.call(this, items);
    ;
  }).prototype = tween_sequence.FlippedTweenSequence.prototype;
  dart.addTypeTests(tween_sequence.FlippedTweenSequence);
  dart.addTypeCaches(tween_sequence.FlippedTweenSequence);
  dart.setLibraryUri(tween_sequence.FlippedTweenSequence, I[1]);
  var tween$ = dart.privateName(tween_sequence, "TweenSequenceItem.tween");
  var weight$ = dart.privateName(tween_sequence, "TweenSequenceItem.weight");
  const _is_TweenSequenceItem_default = Symbol('_is_TweenSequenceItem_default');
  tween_sequence.TweenSequenceItem$ = dart.generic(T => {
    class TweenSequenceItem extends core.Object {
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        super.tween = value;
      }
      get weight() {
        return this[weight$];
      }
      set weight(value) {
        super.weight = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let tween = opts && 'tween' in opts ? opts.tween : null;
        let weight = opts && 'weight' in opts ? opts.weight : null;
        return new (tween_sequence.TweenSequenceItem$(T)).new({tween: tween, weight: weight});
      }
    }
    (TweenSequenceItem.new = function(opts) {
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let weight = opts && 'weight' in opts ? opts.weight : null;
      this[tween$] = tween;
      this[weight$] = weight;
      if (!(tween !== null)) dart.assertFailed(null, I[0], 129, 15, "tween != null");
      if (!(weight !== null)) dart.assertFailed(null, I[0], 130, 15, "weight != null");
      if (!(weight > 0.0)) dart.assertFailed(null, I[0], 131, 15, "weight > 0.0");
      ;
    }).prototype = TweenSequenceItem.prototype;
    dart.addTypeTests(TweenSequenceItem);
    TweenSequenceItem.prototype[_is_TweenSequenceItem_default] = true;
    dart.addTypeCaches(TweenSequenceItem);
    dart.setLibraryUri(TweenSequenceItem, I[1]);
    dart.setFieldSignature(TweenSequenceItem, () => ({
      __proto__: dart.getFields(TweenSequenceItem.__proto__),
      tween: dart.finalFieldType(tween.Animatable$(T)),
      weight: dart.finalFieldType(core.double)
    }));
    return TweenSequenceItem;
  });
  tween_sequence.TweenSequenceItem = tween_sequence.TweenSequenceItem$();
  dart.addTypeTests(tween_sequence.TweenSequenceItem, _is_TweenSequenceItem_default);
  var start$ = dart.privateName(tween_sequence, "_Interval.start");
  var end$ = dart.privateName(tween_sequence, "_Interval.end");
  tween_sequence._Interval = class _Interval extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    static ['_#new#tearOff'](start, end) {
      return new tween_sequence._Interval.new(start, end);
    }
    contains(t) {
      return t >= this.start && t < this.end;
    }
    value(t) {
      return (t - this.start) / (this.end - this.start);
    }
    toString() {
      return "<" + dart.str(this.start) + ", " + dart.str(this.end) + ">";
    }
  };
  (tween_sequence._Interval.new = function(start, end) {
    this[start$] = start;
    this[end$] = end;
    if (!(end > start)) dart.assertFailed(null, I[0], 158, 50, "end > start");
    ;
  }).prototype = tween_sequence._Interval.prototype;
  dart.addTypeTests(tween_sequence._Interval);
  dart.addTypeCaches(tween_sequence._Interval);
  dart.setMethodSignature(tween_sequence._Interval, () => ({
    __proto__: dart.getMethods(tween_sequence._Interval.__proto__),
    contains: dart.fnType(core.bool, [core.double]),
    value: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(tween_sequence._Interval, I[1]);
  dart.setFieldSignature(tween_sequence._Interval, () => ({
    __proto__: dart.getFields(tween_sequence._Interval.__proto__),
    start: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(tween_sequence._Interval, ['toString']);
  dart.trackLibraries("packages/flutter/src/animation/tween_sequence.dart", {
    "package:flutter/src/animation/tween_sequence.dart": tween_sequence
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tween_sequence.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAyEuB,GAAO;AACC,sBAAU,AAAM,oBAAC,KAAK;AACpC,wBAAY,AAAU,AAAQ,wBAAP,KAAK,QAAQ,CAAC;AAClD,cAAO,AAAQ,AAAM,QAAP,iBAAiB,SAAS;MAC1C;gBAGmB;AACjB,cAAO,AAAE,AAAO,CAAR,IAAI,OAAO,AAAE,CAAD,IAAI;AACxB,YAAI,AAAE,CAAD,KAAI,KACP,MAAO,mBAAY,CAAC,EAAE,AAAO,AAAO,wBAAE;AACxC,iBAAS,QAAQ,GAAG,AAAM,KAAD,GAAG,AAAO,uBAAQ,QAAA,AAAK,KAAA;AAC9C,cAAI,AAAU,AAAQ,wBAAP,KAAK,WAAW,CAAC,GAC9B,MAAO,mBAAY,CAAC,EAAE,KAAK;;AAG+C,QAA9E,WAAM,wBAAW,AAA4D,sEAAF,CAAC;MAC9E;;AAGqB,cAAA,AAAuC,6BAAtB,AAAO,yBAAO;MAAQ;;kCAzCnB;MAkBR,eAA+B;MAC1C,mBAAwB;YAlBjC,AAAM,KAAD;WACL,AAAM,KAAD;AAFlB;AAGsB,MAApB,AAAO,sBAAO,KAAK;AAEZ,wBAAc;AACrB,eAAgC,OAAQ;AACZ,QAA1B,cAAA,AAAY,WAAD,GAAI,AAAK,IAAD;AACrB,YAAO,AAAY,WAAD,GAAG;AAEd,kBAAQ;AACf,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAO,uBAAQ,IAAA,AAAE,CAAD,GAAI;AACzB,kBAAM,AAAE,CAAD,KAAI,AAAO,AAAO,wBAAE,IAAI,MAAM,AAAM,KAAD,GAAG,AAAM,AAAI,AAAO,oBAAV,CAAC,WAAW,WAAW;AACnD,QAArC,AAAW,uBAAI,iCAAU,KAAK,EAAE,GAAG;AACxB,QAAX,QAAQ,GAAG;;IAEf;;;;;;;;;;;;;;;;;;;;;;;;cAiDwB;AAAM,YAAA,AAAE,KAAQ,gBAAU,AAAE,IAAE,CAAC;IAAC;;sDALH;UAC1C,AAAM,KAAD;AACZ,iEAAM,KAAK;;EAAC;;;;;;;;;MAgCI;;;;;;MAOP;;;;;;;;;;;;;UA3BG;UACA;MADA;MACA;YACJ,AAAM,KAAD;YACL,AAAO,MAAD;YACN,AAAO,MAAD,GAAG;;IAAI;;;;;;;;;;;;;;;;;IA6BZ;;;;;;IACA;;;;;;;;;aAEQ;AAAM,YAAA,AAAE,AAAS,EAAV,IAAI,cAAS,AAAE,CAAD,GAAG;IAAG;UAE5B;AAAM,YAAY,EAAX,AAAE,CAAD,GAAG,eAAU,AAAI,WAAE;IAAM;;AAGhC,YAAA,AAAgB,gBAAb,cAAK,gBAAG,YAAG;IAAE;;2CAVhB,OAAY;IAAZ;IAAY;UAAc,AAAI,GAAD,GAAG,KAAK;;EAAC","file":"../../../../../../../../../../packages/flutter/src/animation/tween_sequence.dart.lib.js"}');
  // Exports:
  return {
    src__animation__tween_sequence: tween_sequence
  };
}));

//# sourceMappingURL=tween_sequence.dart.lib.js.map
