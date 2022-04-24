define(['dart_sdk', 'packages/characters/src/grapheme_clusters/breaks.dart', 'packages/characters/src/grapheme_clusters/table.dart'], (function load__packages__characters__src__characters_impl_dart(dart_sdk, packages__characters__src__grapheme_clusters__breaks$46dart, packages__characters__src__grapheme_clusters__table$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const breaks$ = packages__characters__src__grapheme_clusters__breaks$46dart.src__grapheme_clusters__breaks;
  const table = packages__characters__src__grapheme_clusters__table$46dart.src__grapheme_clusters__table;
  var characters_impl = Object.create(dart.library);
  var characters = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $substring = dartx.substring;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $startsWith = dartx.startsWith;
  var $where = dartx.where;
  var $join = dartx.join;
  var $toLowerCase = dartx.toLowerCase;
  var $toUpperCase = dartx.toUpperCase;
  var $hashCode = dartx.hashCode;
  var $iterator = dartx.iterator;
  var $whereType = dartx.whereType;
  var $skip = dartx.skip;
  var $take = dartx.take;
  var $skipWhile = dartx.skipWhile;
  var $takeWhile = dartx.takeWhile;
  var $codeUnitAt = dartx.codeUnitAt;
  var $codeUnits = dartx.codeUnits;
  var $getRange = dartx.getRange;
  var $replaceRange = dartx.replaceRange;
  var $indexOf = dartx.indexOf;
  var $lastIndexOf = dartx.lastIndexOf;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidToString: () => (T.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    VoidToNString: () => (T.VoidToNString = dart.constFn(dart.nullable(T.VoidToString())))(),
    SyncIterableOfCharacters: () => (T.SyncIterableOfCharacters = dart.constFn(_js_helper.SyncIterable$(characters.Characters)))(),
    SyncIterableOfCharacterRange: () => (T.SyncIterableOfCharacterRange = dart.constFn(_js_helper.SyncIterable$(characters.CharacterRange)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: characters_impl.StringCharacters.prototype,
        [string$]: ""
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:characters/src/characters_impl.dart",
    "package:characters/src/characters.dart"
  ];
  var string$ = dart.privateName(characters_impl, "StringCharacters.string");
  var _rangeAll = dart.privateName(characters_impl, "_rangeAll");
  var _skipIndices = dart.privateName(characters_impl, "_skipIndices");
  var _skip = dart.privateName(characters_impl, "_skip");
  var _take = dart.privateName(characters_impl, "_take");
  characters_impl.StringCharacters = class StringCharacters extends core.Iterable$(core.String) {
    get string() {
      return this[string$];
    }
    set string(value) {
      super.string = value;
    }
    static ['_#new#tearOff'](string) {
      return new characters_impl.StringCharacters.new(string);
    }
    get iterator() {
      return new characters_impl.StringCharacterRange.__(this.string, 0, 0);
    }
    get iteratorAtEnd() {
      return new characters_impl.StringCharacterRange.__(this.string, this.string.length, this.string.length);
    }
    get [_rangeAll]() {
      return new characters_impl.StringCharacterRange.__(this.string, 0, this.string.length);
    }
    get first() {
      return this.string[$isEmpty] ? dart.throw(new core.StateError.new("No element")) : this.string[$substring](0, new breaks$.Breaks.new(this.string, 0, this.string.length, 176).nextBreak());
    }
    get last() {
      return this.string[$isEmpty] ? dart.throw(new core.StateError.new("No element")) : this.string[$substring](new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176).nextBreak());
    }
    get single() {
      if (this.string[$isEmpty]) dart.throw(new core.StateError.new("No element"));
      let firstEnd = new breaks$.Breaks.new(this.string, 0, this.string.length, 176).nextBreak();
      if (firstEnd === this.string.length) return this.string;
      dart.throw(new core.StateError.new("Too many elements"));
    }
    get isEmpty() {
      return this.string[$isEmpty];
    }
    get isNotEmpty() {
      return this.string[$isNotEmpty];
    }
    get length() {
      if (this.string[$isEmpty]) return 0;
      let brk = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
      let length = 0;
      while (brk.nextBreak() >= 0) {
        length = length + 1;
      }
      return length;
    }
    whereType(T) {
      let self = this;
      if (core.Iterable$(T).is(self)) {
        return self[$map](T, dart.fn(x => x, dart.fnType(T, [T])));
      }
      return new (_internal.EmptyIterable$(T)).new();
    }
    join(separator = "") {
      if (separator === "") return this.string;
      return characters_impl._explodeReplace(this.string, 0, this.string.length, separator, "");
    }
    lastWhere(test, opts) {
      let orElse = opts && 'orElse' in opts ? opts.orElse : null;
      T.VoidToNString().as(orElse);
      let cursor = this.string.length;
      let brk = new breaks$.BackBreaks.new(this.string, cursor, 0, 176);
      let next = 0;
      while ((next = brk.nextBreak()) >= 0) {
        let current = this.string[$substring](next, cursor);
        if (test(current)) return current;
        cursor = next;
      }
      if (orElse != null) return orElse();
      dart.throw(new core.StateError.new("No element"));
    }
    elementAt(index) {
      core.RangeError.checkNotNegative(index, "index");
      let count = 0;
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
        let start = 0;
        let end = 0;
        while ((end = breaks.nextBreak()) >= 0) {
          if (count === index) return this.string[$substring](start, end);
          count = count + 1;
          start = end;
        }
      }
      dart.throw(new core.IndexError.new(index, this, "index", null, count));
    }
    contains(singleCharacterString) {
      if (!(typeof singleCharacterString == 'string')) return false;
      if (singleCharacterString[$isEmpty]) return false;
      let next = new breaks$.Breaks.new(singleCharacterString, 0, singleCharacterString.length, 176).nextBreak();
      if (next !== singleCharacterString.length) return false;
      return characters_impl._indexOf(this.string, singleCharacterString, 0, this.string.length) >= 0;
    }
    startsWith(characters) {
      let length = this.string.length;
      let otherString = characters.string;
      if (otherString[$isEmpty]) return true;
      return this.string[$startsWith](otherString) && breaks$.isGraphemeClusterBoundary(this.string, 0, length, otherString.length);
    }
    endsWith(characters) {
      let length = this.string.length;
      let otherString = characters.string;
      if (otherString[$isEmpty]) return true;
      let otherLength = otherString.length;
      let start = this.string.length - otherLength;
      return start >= 0 && this.string[$startsWith](otherString, start) && breaks$.isGraphemeClusterBoundary(this.string, 0, length, start);
    }
    replaceAll(pattern, replacement) {
      let t0, t0$;
      t0$ = (t0 = this[_rangeAll].replaceAll(pattern, replacement), t0 == null ? null : t0.source);
      return t0$ == null ? this : t0$;
    }
    replaceFirst(pattern, replacement) {
      let t0, t0$;
      t0$ = (t0 = this[_rangeAll].replaceFirst(pattern, replacement), t0 == null ? null : t0.source);
      return t0$ == null ? this : t0$;
    }
    split(pattern, maxParts = 0) {
      return new (T.SyncIterableOfCharacters()).new(() => (function* split(maxParts) {
        if (maxParts === 1 || this.string[$isEmpty]) {
          yield this;
          return;
        }
        let patternString = pattern.string;
        let start = 0;
        if (patternString[$isNotEmpty]) {
          do {
            let match = characters_impl._indexOf(this.string, patternString, start, this.string.length);
            if (match < 0) break;
            yield new characters_impl.StringCharacters.new(this.string[$substring](start, match));
            start = match + patternString.length;
            maxParts = maxParts - 1;
          } while (maxParts !== 1);
        } else {
          let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
          do {
            let match = breaks.nextBreak();
            if (match < 0) return;
            yield new characters_impl.StringCharacters.new(this.string[$substring](start, match));
            start = match;
            maxParts = maxParts - 1;
          } while (maxParts !== 1);
          if (start === this.string.length) return;
        }
        yield new characters_impl.StringCharacters.new(this.string[$substring](start));
      }).bind(this)(maxParts));
    }
    containsAll(characters) {
      return characters_impl._indexOf(this.string, characters.string, 0, this.string.length) >= 0;
    }
    [_skipIndices](count, cursor, breaks) {
      if (count === 0 || cursor === this.string.length) return cursor;
      breaks == null ? breaks = new breaks$.Breaks.new(this.string, cursor, this.string.length, 176) : null;
      do {
        let nextBreak = breaks.nextBreak();
        if (nextBreak < 0) break;
        cursor = nextBreak;
      } while ((count = count - 1) > 0);
      return cursor;
    }
    skip(count) {
      core.RangeError.checkNotNegative(count, "count");
      return this[_skip](count);
    }
    [_skip](count) {
      let start = this[_skipIndices](count, 0, null);
      if (start === this.string.length) return characters.Characters.empty;
      return new characters_impl.StringCharacters.new(this.string[$substring](start));
    }
    take(count) {
      core.RangeError.checkNotNegative(count, "count");
      return this[_take](count);
    }
    [_take](count) {
      let end = this[_skipIndices](count, 0, null);
      if (end === this.string.length) return this;
      return new characters_impl.StringCharacters.new(this.string[$substring](0, end));
    }
    getRange(start, end = null) {
      core.RangeError.checkNotNegative(start, "start");
      if (end == null) return this[_skip](start);
      if (dart.notNull(end) < start) dart.throw(new core.RangeError.range(end, start, null, "end"));
      if (end === start) return characters.Characters.empty;
      if (start === 0) return this[_take](end);
      if (this.string[$isEmpty]) return this;
      let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
      let startIndex = this[_skipIndices](start, 0, breaks);
      if (startIndex === this.string.length) return characters.Characters.empty;
      let endIndex = this[_skipIndices](dart.notNull(end) - start, start, breaks);
      return new characters_impl.StringCharacters.new(this.string[$substring](startIndex, endIndex));
    }
    characterAt(position) {
      let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
      let start = 0;
      while (position > 0) {
        position = position - 1;
        start = breaks.nextBreak();
        if (start < 0) dart.throw(new core.StateError.new("No element"));
      }
      let end = breaks.nextBreak();
      if (end < 0) dart.throw(new core.StateError.new("No element"));
      if (start === 0 && end === this.string.length) return this;
      return new characters_impl.StringCharacters.new(this.string[$substring](start, end));
    }
    skipWhile(test) {
      if (this.string[$isNotEmpty]) {
        let stringLength = this.string.length;
        let breaks = new breaks$.Breaks.new(this.string, 0, stringLength, 176);
        let index = 0;
        let startIndex = 0;
        while ((index = breaks.nextBreak()) >= 0) {
          if (!test(this.string[$substring](startIndex, index))) {
            if (startIndex === 0) return this;
            if (startIndex === stringLength) return characters.Characters.empty;
            return new characters_impl.StringCharacters.new(this.string[$substring](startIndex));
          }
          startIndex = index;
        }
      }
      return characters.Characters.empty;
    }
    takeWhile(test) {
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.Breaks.new(this.string, 0, this.string.length, 176);
        let index = 0;
        let endIndex = 0;
        while ((index = breaks.nextBreak()) >= 0) {
          if (!test(this.string[$substring](endIndex, index))) {
            if (endIndex === 0) return characters.Characters.empty;
            return new characters_impl.StringCharacters.new(this.string[$substring](0, endIndex));
          }
          endIndex = index;
        }
      }
      return this;
    }
    where(test) {
      let string = super[$where](test)[$join]();
      if (string[$isEmpty]) return characters.Characters.empty;
      return new characters_impl.StringCharacters.new(string);
    }
    ['+'](characters) {
      return new characters_impl.StringCharacters.new(this.string + characters.string);
    }
    skipLast(count) {
      core.RangeError.checkNotNegative(count, "count");
      if (count === 0) return this;
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176);
        let endIndex = this.string.length;
        while (count > 0) {
          let index = breaks.nextBreak();
          if (index >= 0) {
            endIndex = index;
            count = count - 1;
          } else {
            return characters.Characters.empty;
          }
        }
        if (endIndex > 0) return new characters_impl.StringCharacters.new(this.string[$substring](0, endIndex));
      }
      return characters.Characters.empty;
    }
    skipLastWhile(test) {
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176);
        let index = 0;
        let end = this.string.length;
        while ((index = breaks.nextBreak()) >= 0) {
          if (!test(this.string[$substring](index, end))) {
            if (end === this.string.length) return this;
            return end === 0 ? characters.Characters.empty : new characters_impl.StringCharacters.new(this.string[$substring](0, end));
          }
          end = index;
        }
      }
      return characters.Characters.empty;
    }
    takeLast(count) {
      core.RangeError.checkNotNegative(count, "count");
      if (count === 0) return characters.Characters.empty;
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176);
        let startIndex = this.string.length;
        while (count > 0) {
          let index = breaks.nextBreak();
          if (index >= 0) {
            startIndex = index;
            count = count - 1;
          } else {
            return this;
          }
        }
        if (startIndex > 0) {
          return new characters_impl.StringCharacters.new(this.string[$substring](startIndex));
        }
      }
      return this;
    }
    takeLastWhile(test) {
      if (this.string[$isNotEmpty]) {
        let breaks = new breaks$.BackBreaks.new(this.string, this.string.length, 0, 176);
        let index = 0;
        let start = this.string.length;
        while ((index = breaks.nextBreak()) >= 0) {
          if (!test(this.string[$substring](index, start))) {
            if (start === this.string.length) return characters.Characters.empty;
            return new characters_impl.StringCharacters.new(this.string[$substring](start));
          }
          start = index;
        }
      }
      return this;
    }
    toLowerCase() {
      return new characters_impl.StringCharacters.new(this.string[$toLowerCase]());
    }
    toUpperCase() {
      return new characters_impl.StringCharacters.new(this.string[$toUpperCase]());
    }
    _equals(other) {
      if (other == null) return false;
      return characters.Characters.is(other) && this.string === other.string;
    }
    get hashCode() {
      return this.string[$hashCode];
    }
    toString() {
      return this.string;
    }
    findFirst(characters) {
      let range = this[_rangeAll];
      if (range.collapseToFirst(characters)) return range;
      return null;
    }
    findLast(characters) {
      let range = this[_rangeAll];
      if (range.collapseToLast(characters)) return range;
      return null;
    }
  };
  (characters_impl.StringCharacters.new = function(string) {
    this[string$] = string;
    characters_impl.StringCharacters.__proto__.new.call(this);
    ;
  }).prototype = characters_impl.StringCharacters.prototype;
  dart.addTypeTests(characters_impl.StringCharacters);
  dart.addTypeCaches(characters_impl.StringCharacters);
  characters_impl.StringCharacters[dart.implements] = () => [characters.Characters];
  dart.setMethodSignature(characters_impl.StringCharacters, () => ({
    __proto__: dart.getMethods(characters_impl.StringCharacters.__proto__),
    whereType: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
    [$whereType]: dart.gFnType(T => [core.Iterable$(T), []], T => [dart.nullable(core.Object)]),
    startsWith: dart.fnType(core.bool, [characters.Characters]),
    endsWith: dart.fnType(core.bool, [characters.Characters]),
    replaceAll: dart.fnType(characters.Characters, [characters.Characters, characters.Characters]),
    replaceFirst: dart.fnType(characters.Characters, [characters.Characters, characters.Characters]),
    split: dart.fnType(core.Iterable$(characters.Characters), [characters.Characters], [core.int]),
    containsAll: dart.fnType(core.bool, [characters.Characters]),
    [_skipIndices]: dart.fnType(core.int, [core.int, core.int, dart.nullable(breaks$.Breaks)]),
    skip: dart.fnType(characters.Characters, [core.int]),
    [$skip]: dart.fnType(characters.Characters, [core.int]),
    [_skip]: dart.fnType(characters.Characters, [core.int]),
    take: dart.fnType(characters.Characters, [core.int]),
    [$take]: dart.fnType(characters.Characters, [core.int]),
    [_take]: dart.fnType(characters.Characters, [core.int]),
    getRange: dart.fnType(characters.Characters, [core.int], [dart.nullable(core.int)]),
    characterAt: dart.fnType(characters.Characters, [core.int]),
    skipWhile: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    [$skipWhile]: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    takeWhile: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    [$takeWhile]: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    where: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    [$where]: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    '+': dart.fnType(characters.Characters, [characters.Characters]),
    skipLast: dart.fnType(characters.Characters, [core.int]),
    skipLastWhile: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    takeLast: dart.fnType(characters.Characters, [core.int]),
    takeLastWhile: dart.fnType(characters.Characters, [dart.fnType(core.bool, [core.String])]),
    toLowerCase: dart.fnType(characters.Characters, []),
    toUpperCase: dart.fnType(characters.Characters, []),
    findFirst: dart.fnType(dart.nullable(characters.CharacterRange), [characters.Characters]),
    findLast: dart.fnType(dart.nullable(characters.CharacterRange), [characters.Characters])
  }));
  dart.setGetterSignature(characters_impl.StringCharacters, () => ({
    __proto__: dart.getGetters(characters_impl.StringCharacters.__proto__),
    iterator: characters.CharacterRange,
    [$iterator]: characters.CharacterRange,
    iteratorAtEnd: characters.CharacterRange,
    [_rangeAll]: characters_impl.StringCharacterRange
  }));
  dart.setLibraryUri(characters_impl.StringCharacters, I[0]);
  dart.setFieldSignature(characters_impl.StringCharacters, () => ({
    __proto__: dart.getFields(characters_impl.StringCharacters.__proto__),
    string: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(characters_impl.StringCharacters, [
    'whereType',
    'join',
    'lastWhere',
    'elementAt',
    'contains',
    'skip',
    'take',
    'skipWhile',
    'takeWhile',
    'where',
    '_equals',
    'toString'
  ]);
  dart.defineExtensionAccessors(characters_impl.StringCharacters, [
    'iterator',
    'first',
    'last',
    'single',
    'isEmpty',
    'isNotEmpty',
    'length',
    'hashCode'
  ]);
  var _currentCache = dart.privateName(characters_impl, "_currentCache");
  var _string$ = dart.privateName(characters_impl, "_string");
  var _start$ = dart.privateName(characters_impl, "_start");
  var _end$ = dart.privateName(characters_impl, "_end");
  var _move = dart.privateName(characters_impl, "_move");
  var _breaksFromEnd = dart.privateName(characters_impl, "_breaksFromEnd");
  var _backBreaksFromStart = dart.privateName(characters_impl, "_backBreaksFromStart");
  var _advanceEnd = dart.privateName(characters_impl, "_advanceEnd");
  var _moveNextPattern = dart.privateName(characters_impl, "_moveNextPattern");
  var _retractStart = dart.privateName(characters_impl, "_retractStart");
  var _movePreviousPattern = dart.privateName(characters_impl, "_movePreviousPattern");
  var _retractStartUntil = dart.privateName(characters_impl, "_retractStartUntil");
  var _advanceEndUntil = dart.privateName(characters_impl, "_advanceEndUntil");
  var _startsWith = dart.privateName(characters_impl, "_startsWith");
  var _endsWith = dart.privateName(characters_impl, "_endsWith");
  characters_impl.StringCharacterRange = class StringCharacterRange extends core.Object {
    static ['_#new#tearOff'](string) {
      return new characters_impl.StringCharacterRange.new(string);
    }
    static ['_#at#tearOff'](string, startIndex, endIndex = null) {
      return characters_impl.StringCharacterRange.at(string, startIndex, endIndex);
    }
    static at(string, startIndex, endIndex = null) {
      let t0;
      core.RangeError.checkValidRange(startIndex, endIndex, string.length, "startIndex", "endIndex");
      return characters_impl.StringCharacterRange._expandRange(string, startIndex, (t0 = endIndex, t0 == null ? startIndex : t0));
    }
    static ['_#_#tearOff'](_string, _start, _end) {
      return new characters_impl.StringCharacterRange.__(_string, _start, _end);
    }
    [_move](start, end) {
      this[_start$] = start;
      this[_end$] = end;
      this[_currentCache] = null;
    }
    [_breaksFromEnd]() {
      return new breaks$.Breaks.new(this[_string$], this[_end$], this[_string$].length, 176);
    }
    [_backBreaksFromStart]() {
      return new breaks$.BackBreaks.new(this[_string$], this[_start$], 0, 176);
    }
    get current() {
      let t0;
      t0 = this[_currentCache];
      return t0 == null ? this[_currentCache] = this[_string$][$substring](this[_start$], this[_end$]) : t0;
    }
    moveNext(count = 1) {
      return this[_advanceEnd](count, this[_end$]);
    }
    [_advanceEnd](count, newStart) {
      if (count > 0) {
        let state = 176;
        let index = this[_end$];
        while (index < this[_string$].length) {
          let char = this[_string$][$codeUnitAt](index);
          let category = 2;
          let nextIndex = index + 1;
          if ((char & 64512) !== 55296) {
            category = table.low(char);
          } else if (nextIndex < this[_string$].length) {
            let nextChar = this[_string$][$codeUnitAt](nextIndex);
            if ((nextChar & 64512) === 56320) {
              nextIndex = nextIndex + 1;
              category = table.high(char, nextChar);
            }
          }
          state = table.move(state, category);
          if ((state & 1) === 0 && (count = count - 1) === 0) {
            this[_move](newStart, index);
            return true;
          }
          index = nextIndex;
        }
        this[_move](newStart, this[_string$].length);
        return count === 1 && state !== 176;
      } else if (count === 0) {
        this[_move](newStart, this[_end$]);
        return true;
      } else {
        dart.throw(new core.RangeError.range(count, 0, null, "count"));
      }
    }
    [_moveNextPattern](patternString, start, end) {
      let offset = characters_impl._indexOf(this[_string$], patternString, start, end);
      if (offset >= 0) {
        this[_move](offset, offset + patternString.length);
        return true;
      }
      return false;
    }
    moveBack(count = 1) {
      return this[_retractStart](count, this[_start$]);
    }
    [_retractStart](count, newEnd) {
      core.RangeError.checkNotNegative(count, "count");
      let breaks = this[_backBreaksFromStart]();
      let start = this[_start$];
      while (count > 0) {
        let nextBreak = breaks.nextBreak();
        if (nextBreak >= 0) {
          start = nextBreak;
        } else {
          break;
        }
        count = count - 1;
      }
      this[_move](start, newEnd);
      return count === 0;
    }
    [_movePreviousPattern](patternString, start, end) {
      let offset = characters_impl._lastIndexOf(this[_string$], patternString, start, end);
      if (offset >= 0) {
        this[_move](offset, offset + patternString.length);
        return true;
      }
      return false;
    }
    get utf16CodeUnits() {
      return this[_string$][$codeUnits][$getRange](this[_start$], this[_end$]);
    }
    get runes() {
      return new core.Runes.new(this.current);
    }
    copy() {
      return new characters_impl.StringCharacterRange.__(this[_string$], this[_start$], this[_end$]);
    }
    collapseToEnd() {
      this[_move](this[_end$], this[_end$]);
    }
    collapseToStart() {
      this[_move](this[_start$], this[_start$]);
    }
    dropFirst(count = 1) {
      core.RangeError.checkNotNegative(count, "count");
      if (this[_start$] === this[_end$]) return count === 0;
      let breaks = new breaks$.Breaks.new(this[_string$], this[_start$], this[_end$], 176);
      while (count > 0) {
        let nextBreak = breaks.nextBreak();
        if (nextBreak >= 0) {
          this[_start$] = nextBreak;
          this[_currentCache] = null;
          count = count - 1;
        } else {
          return false;
        }
      }
      return true;
    }
    dropTo(target) {
      if (this[_start$] === this[_end$]) return target[$isEmpty];
      let targetString = target.string;
      let index = characters_impl._indexOf(this[_string$], targetString, this[_start$], this[_end$]);
      if (index >= 0) {
        this[_move](index + targetString.length, this[_end$]);
        return true;
      }
      return false;
    }
    dropUntil(target) {
      if (this[_start$] === this[_end$]) return target[$isEmpty];
      let targetString = target.string;
      let index = characters_impl._indexOf(this[_string$], targetString, this[_start$], this[_end$]);
      if (index >= 0) {
        this[_move](index, this[_end$]);
        return true;
      }
      this[_move](this[_end$], this[_end$]);
      return false;
    }
    dropWhile(test) {
      if (this[_start$] === this[_end$]) return;
      let breaks = new breaks$.Breaks.new(this[_string$], this[_start$], this[_end$], 176);
      let cursor = this[_start$];
      let next = 0;
      while ((next = breaks.nextBreak()) >= 0) {
        if (!test(this[_string$][$substring](cursor, next))) {
          break;
        }
        cursor = next;
      }
      this[_move](cursor, this[_end$]);
    }
    dropLast(count = 1) {
      core.RangeError.checkNotNegative(count, "count");
      let breaks = new breaks$.BackBreaks.new(this[_string$], this[_end$], this[_start$], 176);
      while (count > 0) {
        let nextBreak = breaks.nextBreak();
        if (nextBreak >= 0) {
          this[_end$] = nextBreak;
          this[_currentCache] = null;
          count = count - 1;
        } else {
          return false;
        }
      }
      return true;
    }
    dropBackTo(target) {
      if (this[_start$] === this[_end$]) return target[$isEmpty];
      let targetString = target.string;
      let index = characters_impl._lastIndexOf(this[_string$], targetString, this[_start$], this[_end$]);
      if (index >= 0) {
        this[_move](this[_start$], index);
        return true;
      }
      return false;
    }
    dropBackUntil(target) {
      if (this[_start$] === this[_end$]) return target[$isEmpty];
      let targetString = target.string;
      let index = characters_impl._lastIndexOf(this[_string$], targetString, this[_start$], this[_end$]);
      if (index >= 0) {
        this[_move](this[_start$], index + targetString.length);
        return true;
      }
      this[_move](this[_start$], this[_start$]);
      return false;
    }
    dropBackWhile(test) {
      if (this[_start$] === this[_end$]) return;
      let breaks = new breaks$.BackBreaks.new(this[_string$], this[_end$], this[_start$], 176);
      let cursor = this[_end$];
      let next = 0;
      while ((next = breaks.nextBreak()) >= 0) {
        if (!test(this[_string$][$substring](next, cursor))) {
          break;
        }
        cursor = next;
      }
      this[_move](this[_start$], cursor);
    }
    expandNext(count = 1) {
      return this[_advanceEnd](count, this[_start$]);
    }
    expandTo(target) {
      let targetString = target.string;
      let index = characters_impl._indexOf(this[_string$], targetString, this[_end$], this[_string$].length);
      if (index >= 0) {
        this[_move](this[_start$], index + targetString.length);
        return true;
      }
      return false;
    }
    expandWhile(test) {
      let breaks = this[_breaksFromEnd]();
      let cursor = this[_end$];
      let next = 0;
      while ((next = breaks.nextBreak()) >= 0) {
        if (!test(this[_string$][$substring](cursor, next))) {
          break;
        }
        cursor = next;
      }
      this[_move](this[_start$], cursor);
    }
    expandAll() {
      this[_move](this[_start$], this[_string$].length);
    }
    expandBack(count = 1) {
      return this[_retractStart](count, this[_end$]);
    }
    expandBackTo(target) {
      let targetString = target.string;
      let index = characters_impl._lastIndexOf(this[_string$], targetString, 0, this[_start$]);
      if (index >= 0) {
        this[_move](index, this[_end$]);
        return true;
      }
      return false;
    }
    expandBackWhile(test) {
      let breaks = this[_backBreaksFromStart]();
      let cursor = this[_start$];
      let next = 0;
      while ((next = breaks.nextBreak()) >= 0) {
        if (!test(this[_string$][$substring](next, cursor))) {
          this[_move](cursor, this[_end$]);
          return;
        }
        cursor = next;
      }
      this[_move](0, this[_end$]);
    }
    expandBackUntil(target) {
      return this[_retractStartUntil](target.string, this[_end$]);
    }
    expandBackAll() {
      this[_move](0, this[_end$]);
    }
    expandUntil(target) {
      return this[_advanceEndUntil](target.string, this[_start$]);
    }
    get isEmpty() {
      return this[_start$] === this[_end$];
    }
    get isNotEmpty() {
      return this[_start$] !== this[_end$];
    }
    moveBackUntil(target) {
      let targetString = target.string;
      return this[_retractStartUntil](targetString, this[_start$]);
    }
    [_retractStartUntil](targetString, newEnd) {
      let index = characters_impl._lastIndexOf(this[_string$], targetString, 0, this[_start$]);
      if (index >= 0) {
        this[_move](index + targetString.length, newEnd);
        return true;
      }
      this[_move](0, newEnd);
      return false;
    }
    collapseToFirst(target) {
      return this[_moveNextPattern](target.string, this[_start$], this[_end$]);
    }
    collapseToLast(target) {
      return this[_movePreviousPattern](target.string, this[_start$], this[_end$]);
    }
    moveUntil(target) {
      let targetString = target.string;
      return this[_advanceEndUntil](targetString, this[_end$]);
    }
    [_advanceEndUntil](targetString, newStart) {
      let index = characters_impl._indexOf(this[_string$], targetString, this[_end$], this[_string$].length);
      if (index >= 0) {
        this[_move](newStart, index);
        return true;
      }
      this[_move](newStart, this[_string$].length);
      return false;
    }
    replaceFirst(pattern, replacement) {
      let patternString = pattern.string;
      let replacementString = replacement.string;
      let replaced = null;
      if (patternString[$isEmpty]) {
        replaced = this[_string$][$replaceRange](this[_start$], this[_start$], replacementString);
      } else {
        let index = characters_impl._indexOf(this[_string$], patternString, this[_start$], this[_end$]);
        if (index >= 0) {
          replaced = this[_string$][$replaceRange](index, index + patternString.length, replacementString);
        } else {
          return null;
        }
      }
      let newEnd = replaced.length - this[_string$].length + this[_end$];
      return characters_impl.StringCharacterRange._expandRange(replaced, this[_start$], newEnd);
    }
    replaceAll(pattern, replacement) {
      let t0, t0$;
      let patternString = pattern.string;
      let replacementString = replacement.string;
      if (patternString[$isEmpty]) {
        let replaced = characters_impl._explodeReplace(this[_string$], this[_start$], this[_end$], replacementString, replacementString);
        let newEnd = replaced.length - (this[_string$].length - this[_end$]);
        return characters_impl.StringCharacterRange._expandRange(replaced, this[_start$], newEnd);
      }
      if (this[_start$] === this[_end$]) return null;
      let start = 0;
      let cursor = this[_start$];
      let buffer = null;
      while ((cursor = characters_impl._indexOf(this[_string$], patternString, cursor, this[_end$])) >= 0) {
        t0$ = (t0 = buffer, t0 == null ? buffer = new core.StringBuffer.new() : t0);
        (() => {
          t0$.write(this[_string$][$substring](start, cursor));
          t0$.write(replacementString);
          return t0$;
        })();
        cursor = cursor + patternString.length;
        start = cursor;
      }
      if (buffer == null) return null;
      buffer.write(this[_string$][$substring](start));
      let replaced = dart.toString(buffer);
      let newEnd = replaced.length - (this[_string$].length - this[_end$]);
      return characters_impl.StringCharacterRange._expandRange(replaced, this[_start$], newEnd);
    }
    replaceRange(replacement) {
      let replacementString = replacement.string;
      let resultString = this[_string$][$replaceRange](this[_start$], this[_end$], replacementString);
      return characters_impl.StringCharacterRange._expandRange(resultString, this[_start$], this[_start$] + replacementString.length);
    }
    static _expandRange(string, start, end) {
      start = breaks$.previousBreak(string, 0, string.length, start);
      if (end !== start) {
        end = breaks$.nextBreak(string, 0, string.length, end);
      }
      return new characters_impl.StringCharacterRange.__(string, start, end);
    }
    get source() {
      return characters.Characters.new(this[_string$]);
    }
    startsWith(characters) {
      return this[_startsWith](this[_start$], this[_end$], characters.string);
    }
    endsWith(characters) {
      return this[_endsWith](this[_start$], this[_end$], characters.string);
    }
    isFollowedBy(characters) {
      return this[_startsWith](this[_end$], this[_string$].length, characters.string);
    }
    isPrecededBy(characters) {
      return this[_endsWith](0, this[_start$], characters.string);
    }
    [_endsWith](start, end, string) {
      let length = string.length;
      let stringStart = end - length;
      return stringStart >= start && this[_string$][$startsWith](string, stringStart) && breaks$.isGraphemeClusterBoundary(this[_string$], start, end, stringStart);
    }
    [_startsWith](start, end, string) {
      let length = string.length;
      let stringEnd = start + length;
      return stringEnd <= end && this[_string$][$startsWith](string, start) && breaks$.isGraphemeClusterBoundary(this[_string$], start, end, stringEnd);
    }
    moveBackTo(target) {
      let targetString = target.string;
      let index = characters_impl._lastIndexOf(this[_string$], targetString, 0, this[_start$]);
      if (index >= 0) {
        this[_move](index, index + targetString.length);
        return true;
      }
      return false;
    }
    moveTo(target) {
      let targetString = target.string;
      let index = characters_impl._indexOf(this[_string$], targetString, this[_end$], this[_string$].length);
      if (index >= 0) {
        this[_move](index, index + targetString.length);
        return true;
      }
      return false;
    }
    get charactersAfter() {
      return new characters_impl.StringCharacters.new(this[_string$][$substring](this[_end$]));
    }
    get charactersBefore() {
      return new characters_impl.StringCharacters.new(this[_string$][$substring](0, this[_start$]));
    }
    get currentCharacters() {
      return new characters_impl.StringCharacters.new(this.current);
    }
    moveBackAll() {
      this[_move](0, this[_start$]);
    }
    moveNextAll() {
      this[_move](this[_end$], this[_string$].length);
    }
    get stringAfter() {
      return this[_string$][$substring](this[_end$]);
    }
    get stringAfterLength() {
      return this[_string$].length - this[_end$];
    }
    get stringBefore() {
      return this[_string$][$substring](0, this[_start$]);
    }
    get stringBeforeLength() {
      return this[_start$];
    }
    split(pattern, maxParts = 0) {
      return new (T.SyncIterableOfCharacterRange()).new(() => (function* split(maxParts) {
        if (maxParts === 1 || this[_start$] === this[_end$]) {
          yield this;
          return;
        }
        let patternString = pattern.string;
        let start = this[_start$];
        if (patternString[$isNotEmpty]) {
          do {
            let match = characters_impl._indexOf(this[_string$], patternString, start, this[_end$]);
            if (match < 0) break;
            yield new characters_impl.StringCharacterRange.__(this[_string$], start, match);
            start = match + patternString.length;
            maxParts = maxParts - 1;
          } while (maxParts !== 1);
          yield new characters_impl.StringCharacterRange.__(this[_string$], start, this[_end$]);
        } else {
          let breaks = new breaks$.Breaks.new(this[_string$], this[_start$], this[_end$], 176);
          do {
            let match = breaks.nextBreak();
            if (match < 0) return;
            yield new characters_impl.StringCharacterRange.__(this[_string$], start, match);
            start = match;
            maxParts = maxParts - 1;
          } while (maxParts !== 1);
          if (start < this[_end$]) {
            yield new characters_impl.StringCharacterRange.__(this[_string$], start, this[_end$]);
          }
        }
      }).bind(this)(maxParts));
    }
  };
  (characters_impl.StringCharacterRange.new = function(string) {
    characters_impl.StringCharacterRange.__.call(this, string, 0, 0);
  }).prototype = characters_impl.StringCharacterRange.prototype;
  (characters_impl.StringCharacterRange.__ = function(_string, _start, _end) {
    this[_currentCache] = null;
    this[_string$] = _string;
    this[_start$] = _start;
    this[_end$] = _end;
    ;
  }).prototype = characters_impl.StringCharacterRange.prototype;
  dart.addTypeTests(characters_impl.StringCharacterRange);
  dart.addTypeCaches(characters_impl.StringCharacterRange);
  characters_impl.StringCharacterRange[dart.implements] = () => [characters.CharacterRange];
  dart.setMethodSignature(characters_impl.StringCharacterRange, () => ({
    __proto__: dart.getMethods(characters_impl.StringCharacterRange.__proto__),
    [_move]: dart.fnType(dart.void, [core.int, core.int]),
    [_breaksFromEnd]: dart.fnType(breaks$.Breaks, []),
    [_backBreaksFromStart]: dart.fnType(breaks$.BackBreaks, []),
    moveNext: dart.fnType(core.bool, [], [core.int]),
    [_advanceEnd]: dart.fnType(core.bool, [core.int, core.int]),
    [_moveNextPattern]: dart.fnType(core.bool, [core.String, core.int, core.int]),
    moveBack: dart.fnType(core.bool, [], [core.int]),
    [_retractStart]: dart.fnType(core.bool, [core.int, core.int]),
    [_movePreviousPattern]: dart.fnType(core.bool, [core.String, core.int, core.int]),
    copy: dart.fnType(characters.CharacterRange, []),
    collapseToEnd: dart.fnType(dart.void, []),
    collapseToStart: dart.fnType(dart.void, []),
    dropFirst: dart.fnType(core.bool, [], [core.int]),
    dropTo: dart.fnType(core.bool, [characters.Characters]),
    dropUntil: dart.fnType(core.bool, [characters.Characters]),
    dropWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    dropLast: dart.fnType(core.bool, [], [core.int]),
    dropBackTo: dart.fnType(core.bool, [characters.Characters]),
    dropBackUntil: dart.fnType(core.bool, [characters.Characters]),
    dropBackWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    expandNext: dart.fnType(core.bool, [], [core.int]),
    expandTo: dart.fnType(core.bool, [characters.Characters]),
    expandWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    expandAll: dart.fnType(dart.void, []),
    expandBack: dart.fnType(core.bool, [], [core.int]),
    expandBackTo: dart.fnType(core.bool, [characters.Characters]),
    expandBackWhile: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    expandBackUntil: dart.fnType(core.bool, [characters.Characters]),
    expandBackAll: dart.fnType(dart.void, []),
    expandUntil: dart.fnType(core.bool, [characters.Characters]),
    moveBackUntil: dart.fnType(core.bool, [characters.Characters]),
    [_retractStartUntil]: dart.fnType(core.bool, [core.String, core.int]),
    collapseToFirst: dart.fnType(core.bool, [characters.Characters]),
    collapseToLast: dart.fnType(core.bool, [characters.Characters]),
    moveUntil: dart.fnType(core.bool, [characters.Characters]),
    [_advanceEndUntil]: dart.fnType(core.bool, [core.String, core.int]),
    replaceFirst: dart.fnType(dart.nullable(characters.CharacterRange), [characters.Characters, characters.Characters]),
    replaceAll: dart.fnType(dart.nullable(characters.CharacterRange), [characters.Characters, characters.Characters]),
    replaceRange: dart.fnType(characters.CharacterRange, [characters.Characters]),
    startsWith: dart.fnType(core.bool, [characters.Characters]),
    endsWith: dart.fnType(core.bool, [characters.Characters]),
    isFollowedBy: dart.fnType(core.bool, [characters.Characters]),
    isPrecededBy: dart.fnType(core.bool, [characters.Characters]),
    [_endsWith]: dart.fnType(core.bool, [core.int, core.int, core.String]),
    [_startsWith]: dart.fnType(core.bool, [core.int, core.int, core.String]),
    moveBackTo: dart.fnType(core.bool, [characters.Characters]),
    moveTo: dart.fnType(core.bool, [characters.Characters]),
    moveBackAll: dart.fnType(dart.void, []),
    moveNextAll: dart.fnType(dart.void, []),
    split: dart.fnType(core.Iterable$(characters.CharacterRange), [characters.Characters], [core.int])
  }));
  dart.setStaticMethodSignature(characters_impl.StringCharacterRange, () => ['at', '_expandRange']);
  dart.setGetterSignature(characters_impl.StringCharacterRange, () => ({
    __proto__: dart.getGetters(characters_impl.StringCharacterRange.__proto__),
    current: core.String,
    utf16CodeUnits: core.Iterable$(core.int),
    runes: core.Runes,
    isEmpty: core.bool,
    isNotEmpty: core.bool,
    source: characters.Characters,
    charactersAfter: characters.Characters,
    charactersBefore: characters.Characters,
    currentCharacters: characters.Characters,
    stringAfter: core.String,
    stringAfterLength: core.int,
    stringBefore: core.String,
    stringBeforeLength: core.int
  }));
  dart.setLibraryUri(characters_impl.StringCharacterRange, I[0]);
  dart.setFieldSignature(characters_impl.StringCharacterRange, () => ({
    __proto__: dart.getFields(characters_impl.StringCharacterRange.__proto__),
    [_string$]: dart.finalFieldType(core.String),
    [_start$]: dart.fieldType(core.int),
    [_end$]: dart.fieldType(core.int),
    [_currentCache]: dart.fieldType(dart.nullable(core.String))
  }));
  characters_impl._explodeReplace = function _explodeReplace(string, start, end, internalReplacement, outerReplacement) {
    let t0, t0$;
    if (start === end) {
      return string[$replaceRange](start, start, outerReplacement);
    }
    let buffer = new core.StringBuffer.new(string[$substring](0, start));
    let breaks = new breaks$.Breaks.new(string, start, end, 176);
    let index = 0;
    let replacement = outerReplacement;
    while ((index = breaks.nextBreak()) >= 0) {
      t0 = buffer;
      (() => {
        t0.write(replacement);
        t0.write(string[$substring](start, index));
        return t0;
      })();
      start = index;
      replacement = internalReplacement;
    }
    t0$ = buffer;
    (() => {
      t0$.write(outerReplacement);
      t0$.write(string[$substring](end));
      return t0$;
    })();
    return buffer.toString();
  };
  characters_impl._indexOf = function _indexOf(source, pattern, start, end) {
    let patternLength = pattern.length;
    if (patternLength === 0) return start;
    let realEnd = end - patternLength;
    if (realEnd < start) return -1;
    let rest = source.length - realEnd;
    if (rest <= (realEnd - start) * 2) {
      let index = 0;
      while (start < realEnd && (index = source[$indexOf](pattern, start)) >= 0) {
        if (index > realEnd) return -1;
        if (breaks$.isGraphemeClusterBoundary(source, start, end, index) && breaks$.isGraphemeClusterBoundary(source, start, end, index + patternLength)) {
          return index;
        }
        start = index + 1;
      }
      return -1;
    }
    return characters_impl._gcIndexOf(source, pattern, start, end);
  };
  characters_impl._gcIndexOf = function _gcIndexOf(source, pattern, start, end) {
    let breaks = new breaks$.Breaks.new(source, start, end, 0);
    let index = 0;
    while ((index = breaks.nextBreak()) >= 0) {
      let endIndex = index + pattern.length;
      if (endIndex > end) break;
      if (source[$startsWith](pattern, index) && breaks$.isGraphemeClusterBoundary(source, start, end, endIndex)) {
        return index;
      }
    }
    return -1;
  };
  characters_impl._lastIndexOf = function _lastIndexOf(source, pattern, start, end) {
    let patternLength = pattern.length;
    if (patternLength === 0) return end;
    let realEnd = end - patternLength;
    if (realEnd < start) return -1;
    if (realEnd * 2 > start) {
      let index = 0;
      while (realEnd >= start && (index = source[$lastIndexOf](pattern, realEnd)) >= 0) {
        if (index < start) return -1;
        if (breaks$.isGraphemeClusterBoundary(source, start, end, index) && breaks$.isGraphemeClusterBoundary(source, start, end, index + patternLength)) {
          return index;
        }
        realEnd = index - 1;
      }
      return -1;
    }
    return characters_impl._gcLastIndexOf(source, pattern, start, end);
  };
  characters_impl._gcLastIndexOf = function _gcLastIndexOf(source, pattern, start, end) {
    let breaks = new breaks$.BackBreaks.new(source, end, start, 0);
    let index = 0;
    while ((index = breaks.nextBreak()) >= 0) {
      let startIndex = index - pattern.length;
      if (startIndex < start) break;
      if (source[$startsWith](pattern, startIndex) && breaks$.isGraphemeClusterBoundary(source, start, end, startIndex)) {
        return startIndex;
      }
    }
    return -1;
  };
  characters.Characters = class Characters extends core.Object {
    static new(string) {
      return string[$isEmpty] ? characters.Characters.empty : new characters_impl.StringCharacters.new(string);
    }
    static ['_#new#tearOff'](string) {
      return characters.Characters.new(string);
    }
    [Symbol.iterator]() {
      return new dart.JsIterator(this[$iterator]);
    }
  };
  (characters.Characters[dart.mixinNew] = function() {
  }).prototype = characters.Characters.prototype;
  characters.Characters.prototype[dart.isIterable] = true;
  dart.addTypeTests(characters.Characters);
  dart.addTypeCaches(characters.Characters);
  characters.Characters[dart.implements] = () => [core.Iterable$(core.String)];
  dart.setStaticMethodSignature(characters.Characters, () => ['new']);
  dart.setLibraryUri(characters.Characters, I[1]);
  dart.setStaticFieldSignature(characters.Characters, () => ['empty']);
  dart.defineLazy(characters.Characters, {
    /*characters.Characters.empty*/get empty() {
      return C[0] || CT.C0;
    }
  }, false);
  characters.CharacterRange = class CharacterRange extends core.Object {
    static ['_#new#tearOff'](string) {
      return new characters_impl.StringCharacterRange.new(string);
    }
    static ['_#at#tearOff'](string, startIndex, endIndex = null) {
      return characters_impl.StringCharacterRange.at(string, startIndex, endIndex);
    }
  };
  (characters.CharacterRange[dart.mixinNew] = function() {
  }).prototype = characters.CharacterRange.prototype;
  dart.addTypeTests(characters.CharacterRange);
  dart.addTypeCaches(characters.CharacterRange);
  characters.CharacterRange[dart.implements] = () => [core.Iterator$(core.String)];
  dart.setStaticMethodSignature(characters.CharacterRange, () => ['new', 'at']);
  dart.setLibraryUri(characters.CharacterRange, I[1]);
  dart.setStaticFieldSignature(characters.CharacterRange, () => ['_redirecting#']);
  dart.trackLibraries("packages/characters/src/characters_impl.dart", {
    "package:characters/src/characters_impl.dart": characters_impl,
    "package:characters/src/characters.dart": characters
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["characters_impl.dart","characters.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../../packages/characters/src/characters_impl.dart.lib.js"}');
  // Exports:
  return {
    src__characters_impl: characters_impl,
    src__characters: characters
  };
}));

//# sourceMappingURL=characters_impl.dart.lib.js.map
