define(['dart_sdk'], (function load__packages__flutter__src__foundation__observer_list_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var observer_list = Object.create(dart.library);
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $clear = dartx.clear;
  var $length = dartx.length;
  var $contains = dartx.contains;
  var $iterator = dartx.iterator;
  var $isEmpty = dartx.isEmpty;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $keys = dartx.keys;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/foundation/observer_list.dart"];
  var _list = dart.privateName(observer_list, "_list");
  var _isDirty = dart.privateName(observer_list, "_isDirty");
  var __ObserverList__set = dart.privateName(observer_list, "_#ObserverList#_set");
  var _set = dart.privateName(observer_list, "_set");
  const _is_ObserverList_default = Symbol('_is_ObserverList_default');
  observer_list.ObserverList$ = dart.generic(T => {
    var __t$JSArrayOfT = () => (__t$JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    var __t$_HashSetOfT = () => (__t$_HashSetOfT = dart.constFn(collection._HashSet$(T)))();
    class ObserverList extends core.Iterable$(T) {
      get [_set]() {
        let t1, t0;
        t0 = this[__ObserverList__set];
        return t0 == null ? (t1 = new (__t$_HashSetOfT()).new(), this[__ObserverList__set] == null ? this[__ObserverList__set] = t1 : dart.throw(new _internal.LateError.fieldADI("_set"))) : t0;
      }
      add(item) {
        T.as(item);
        this[_isDirty] = true;
        this[_list][$add](item);
      }
      remove(item) {
        T.as(item);
        this[_isDirty] = true;
        this[_set].clear();
        return this[_list][$remove](item);
      }
      clear() {
        this[_isDirty] = false;
        this[_list][$clear]();
        this[_set].clear();
      }
      contains(element) {
        if (this[_list][$length] < 3) return this[_list][$contains](element);
        if (this[_isDirty]) {
          this[_set].addAll(this[_list]);
          this[_isDirty] = false;
        }
        return this[_set].contains(element);
      }
      get iterator() {
        return this[_list][$iterator];
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
      static ['_#new#tearOff'](T) {
        return new (observer_list.ObserverList$(T)).new();
      }
    }
    (ObserverList.new = function() {
      this[_list] = __t$JSArrayOfT().of([]);
      this[_isDirty] = false;
      this[__ObserverList__set] = null;
      ObserverList.__proto__.new.call(this);
      ;
    }).prototype = ObserverList.prototype;
    dart.addTypeTests(ObserverList);
    ObserverList.prototype[_is_ObserverList_default] = true;
    dart.addTypeCaches(ObserverList);
    dart.setMethodSignature(ObserverList, () => ({
      __proto__: dart.getMethods(ObserverList.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ObserverList, () => ({
      __proto__: dart.getGetters(ObserverList.__proto__),
      [_set]: collection.HashSet$(T),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(ObserverList, I[0]);
    dart.setFieldSignature(ObserverList, () => ({
      __proto__: dart.getFields(ObserverList.__proto__),
      [_list]: dart.finalFieldType(core.List$(T)),
      [_isDirty]: dart.fieldType(core.bool),
      [__ObserverList__set]: dart.fieldType(dart.nullable(collection.HashSet$(T)))
    }));
    dart.defineExtensionMethods(ObserverList, ['contains']);
    dart.defineExtensionAccessors(ObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return ObserverList;
  });
  observer_list.ObserverList = observer_list.ObserverList$();
  dart.addTypeTests(observer_list.ObserverList, _is_ObserverList_default);
  var _map = dart.privateName(observer_list, "_map");
  const _is_HashedObserverList_default = Symbol('_is_HashedObserverList_default');
  observer_list.HashedObserverList$ = dart.generic(T => {
    var __t$LinkedMapOfT$int = () => (__t$LinkedMapOfT$int = dart.constFn(_js_helper.LinkedMap$(T, core.int)))();
    class HashedObserverList extends core.Iterable$(T) {
      add(item) {
        let t0;
        T.as(item);
        this[_map][$_set](item, dart.notNull((t0 = this[_map][$_get](item), t0 == null ? 0 : t0)) + 1);
      }
      remove(item) {
        T.as(item);
        let value = this[_map][$_get](item);
        if (value == null) {
          return false;
        }
        if (value === 1) {
          this[_map][$remove](item);
        } else {
          this[_map][$_set](item, dart.notNull(value) - 1);
        }
        return true;
      }
      contains(element) {
        return this[_map][$containsKey](element);
      }
      get iterator() {
        return this[_map][$keys][$iterator];
      }
      get isEmpty() {
        return this[_map][$isEmpty];
      }
      get isNotEmpty() {
        return this[_map][$isNotEmpty];
      }
      static ['_#new#tearOff'](T) {
        return new (observer_list.HashedObserverList$(T)).new();
      }
    }
    (HashedObserverList.new = function() {
      this[_map] = new (__t$LinkedMapOfT$int()).new();
      HashedObserverList.__proto__.new.call(this);
      ;
    }).prototype = HashedObserverList.prototype;
    dart.addTypeTests(HashedObserverList);
    HashedObserverList.prototype[_is_HashedObserverList_default] = true;
    dart.addTypeCaches(HashedObserverList);
    dart.setMethodSignature(HashedObserverList, () => ({
      __proto__: dart.getMethods(HashedObserverList.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      remove: dart.fnType(core.bool, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(HashedObserverList, () => ({
      __proto__: dart.getGetters(HashedObserverList.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(HashedObserverList, I[0]);
    dart.setFieldSignature(HashedObserverList, () => ({
      __proto__: dart.getFields(HashedObserverList.__proto__),
      [_map]: dart.finalFieldType(collection.LinkedHashMap$(T, core.int))
    }));
    dart.defineExtensionMethods(HashedObserverList, ['contains']);
    dart.defineExtensionAccessors(HashedObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return HashedObserverList;
  });
  observer_list.HashedObserverList = observer_list.HashedObserverList$();
  dart.addTypeTests(observer_list.HashedObserverList, _is_HashedObserverList_default);
  dart.trackLibraries("packages/flutter/src/foundation/observer_list.dart", {
    "package:flutter/src/foundation/observer_list.dart": observer_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["observer_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6BwB;kCAAO,gJAAP;MAAmB;UAK9B;;AACM,QAAf,iBAAW;AACI,QAAf,AAAM,kBAAI,IAAI;MAChB;aAOc;;AACG,QAAf,iBAAW;AACC,QAAZ,AAAK;AACL,cAAO,AAAM,sBAAO,IAAI;MAC1B;;AAIkB,QAAhB,iBAAW;AACE,QAAb,AAAM;AACM,QAAZ,AAAK;MACP;eAGsB;AACpB,YAAI,AAAM,AAAO,uBAAE,GACjB,MAAO,AAAM,wBAAS,OAAO;AAE/B,YAAI;AACgB,UAAlB,AAAK,kBAAO;AACI,UAAhB,iBAAW;;AAGb,cAAO,AAAK,qBAAS,OAAO;MAC9B;;AAG4B,cAAA,AAAM;MAAQ;;AAGtB,cAAA,AAAM;MAAO;;AAGV,cAAA,AAAM;MAAU;;;;;;MAlDzB,cAAW;MACpB,iBAAW;kCACM;;;IAiDxB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAsBa;;;AACyB,QAAlC,AAAI,kBAAC,IAAI,EAAsB,cAAN,KAAX,AAAI,kBAAC,IAAI,GAAL,aAAU,WAAK;MACnC;aAOc;;AACD,oBAAQ,AAAI,kBAAC,IAAI;AAC5B,YAAI,AAAM,KAAD;AACP,gBAAO;;AAET,YAAI,AAAM,KAAD,KAAI;AACM,UAAjB,AAAK,oBAAO,IAAI;;AAEM,UAAtB,AAAI,kBAAC,IAAI,EAAU,aAAN,KAAK,IAAG;;AAEvB,cAAO;MACT;eAGsB;AAAY,cAAA,AAAK,0BAAY,OAAO;MAAC;;AAG/B,cAAA,AAAK,AAAK;MAAQ;;AAG1B,cAAA,AAAK;MAAO;;AAGT,cAAA,AAAK;MAAU;;;;;;MArCV,aAAO;;;IAsCrC","file":"../../../../../../../../../../packages/flutter/src/foundation/observer_list.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__observer_list: observer_list
  };
}));

//# sourceMappingURL=observer_list.dart.lib.js.map
