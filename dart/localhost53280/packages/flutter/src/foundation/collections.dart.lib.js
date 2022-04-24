define(['dart_sdk'], (function load__packages__flutter__src__foundation__collections_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var collections = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $keys = dartx.keys;
  var $containsKey = dartx.containsKey;
  var $rightShift = dartx['>>'];
  var $compareTo = dartx.compareTo;
  var $setRange = dartx.setRange;
  var $_set = dartx._set;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/collections.dart"];
  collections.setEquals = function setEquals(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] !== b[$length]) return false;
    if (a == b) return true;
    for (let value of a) {
      if (!b.contains(value)) return false;
    }
    return true;
  };
  collections.listEquals = function listEquals(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] !== b[$length]) return false;
    if (a == b) return true;
    for (let index = 0; index < a[$length]; index = index + 1) {
      if (!dart.equals(a[$_get](index), b[$_get](index))) return false;
    }
    return true;
  };
  collections.mapEquals = function mapEquals(T, U, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] !== b[$length]) return false;
    if (a == b) return true;
    for (let key of a[$keys]) {
      if (!b[$containsKey](key) || !dart.equals(b[$_get](key), a[$_get](key))) {
        return false;
      }
    }
    return true;
  };
  collections.binarySearch = function binarySearch(T, sortedList, value) {
    let min = 0;
    let max = sortedList[$length];
    while (min < max) {
      let mid = min + (max - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = element[$compareTo](value);
      if (comp === 0) {
        return mid;
      }
      if (comp < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return -1;
  };
  collections.mergeSort = function mergeSort(T, list, opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    let end = opts && 'end' in opts ? opts.end : null;
    let compare = opts && 'compare' in opts ? opts.compare : null;
    end == null ? end = list[$length] : null;
    compare == null ? compare = collections._defaultCompare(T) : null;
    let length = dart.notNull(end) - start;
    if (length < 2) {
      return;
    }
    if (length < 32) {
      collections._insertionSort(T, list, {compare: compare, start: start, end: end});
      return;
    }
    let middle = start + (dart.notNull(end) - start)[$rightShift](1);
    let firstLength = middle - start;
    let secondLength = dart.notNull(end) - middle;
    let scratchSpace = core.List$(T).filled(secondLength, list[$_get](start));
    collections._mergeSort(T, list, compare, middle, end, scratchSpace, 0);
    let firstTarget = dart.notNull(end) - firstLength;
    collections._mergeSort(T, list, compare, start, middle, list, firstTarget);
    collections._merge(T, compare, list, firstTarget, end, scratchSpace, 0, secondLength, list, start);
  };
  collections._defaultCompare = function _defaultCompare(T) {
    return dart.fn((value1, value2) => core.Comparable.as(value1)[$compareTo](value2), dart.fnType(core.int, [T, T]));
  };
  collections._insertionSort = function _insertionSort(T, list, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    let end = opts && 'end' in opts ? opts.end : null;
    compare == null ? compare = collections._defaultCompare(T) : null;
    end == null ? end = list[$length] : null;
    for (let pos = start + 1; pos < dart.notNull(end); pos = pos + 1) {
      let min = start;
      let max = pos;
      let element = list[$_get](pos);
      while (min < max) {
        let mid = min + (max - min)[$rightShift](1);
        let comparison = compare(element, list[$_get](mid));
        if (comparison < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      list[$setRange](min + 1, pos + 1, list, min);
      list[$_set](min, element);
    }
  };
  collections._movingInsertionSort = function _movingInsertionSort(T, list, compare, start, end, target, targetOffset) {
    let length = end - start;
    if (length === 0) {
      return;
    }
    target[$_set](targetOffset, list[$_get](start));
    for (let i = 1; i < length; i = i + 1) {
      let element = list[$_get](start + i);
      let min = targetOffset;
      let max = targetOffset + i;
      while (min < max) {
        let mid = min + (max - min)[$rightShift](1);
        if (compare(element, T.as(target[$_get](mid))) < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      target[$setRange](min + 1, targetOffset + i + 1, target, min);
      target[$_set](min, element);
    }
  };
  collections._mergeSort = function _mergeSort(T, list, compare, start, end, target, targetOffset) {
    let length = end - start;
    if (length < 32) {
      collections._movingInsertionSort(T, list, compare, start, end, target, targetOffset);
      return;
    }
    let middle = start + length[$rightShift](1);
    let firstLength = middle - start;
    let secondLength = end - middle;
    let targetMiddle = targetOffset + firstLength;
    collections._mergeSort(T, list, compare, middle, end, target, targetMiddle);
    collections._mergeSort(T, list, compare, start, middle, list, middle);
    collections._merge(T, compare, list, middle, middle + firstLength, target, targetMiddle, targetMiddle + secondLength, target, targetOffset);
  };
  collections._merge = function _merge(T, compare, firstList, firstStart, firstEnd, secondList, secondStart, secondEnd, target, targetOffset) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
    if (!(firstStart < firstEnd)) dart.assertFailed(null, I[0], 326, 10, "firstStart < firstEnd");
    if (!(secondStart < secondEnd)) dart.assertFailed(null, I[0], 327, 10, "secondStart < secondEnd");
    let cursor1 = firstStart;
    let cursor2 = secondStart;
    let firstElement = firstList[$_get]((t0 = cursor1, cursor1 = t0 + 1, t0));
    let secondElement = secondList[$_get]((t0$ = cursor2, cursor2 = t0$ + 1, t0$));
    while (true) {
      if (compare(firstElement, secondElement) <= 0) {
        target[$_set]((t0$0 = targetOffset, targetOffset = t0$0 + 1, t0$0), firstElement);
        if (cursor1 === firstEnd) {
          break;
        }
        firstElement = firstList[$_get]((t0$1 = cursor1, cursor1 = t0$1 + 1, t0$1));
      } else {
        target[$_set]((t0$2 = targetOffset, targetOffset = t0$2 + 1, t0$2), secondElement);
        if (cursor2 !== secondEnd) {
          secondElement = secondList[$_get]((t0$3 = cursor2, cursor2 = t0$3 + 1, t0$3));
          continue;
        }
        target[$_set]((t0$4 = targetOffset, targetOffset = t0$4 + 1, t0$4), firstElement);
        target[$setRange](targetOffset, targetOffset + (firstEnd - cursor1), firstList, cursor1);
        return;
      }
    }
    target[$_set]((t0$5 = targetOffset, targetOffset = t0$5 + 1, t0$5), secondElement);
    target[$setRange](targetOffset, targetOffset + (secondEnd - cursor2), secondList, cursor2);
  };
  dart.defineLazy(collections, {
    /*collections._kMergeSortLimit*/get _kMergeSortLimit() {
      return 32;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/foundation/collections.dart", {
    "package:flutter/src/foundation/collections.dart": collections
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["collections.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/collections.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__collections: collections
  };
}));

//# sourceMappingURL=collections.dart.lib.js.map
