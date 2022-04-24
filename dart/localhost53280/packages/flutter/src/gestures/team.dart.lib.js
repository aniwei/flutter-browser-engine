define(['dart_sdk', 'packages/flutter/src/gestures/arena.dart', 'packages/flutter/src/gestures/binding.dart'], (function load__packages__flutter__src__gestures__team_dart(dart_sdk, packages__flutter__src__gestures__arena$46dart, packages__flutter__src__gestures__binding$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const arena = packages__flutter__src__gestures__arena$46dart.src__gestures__arena;
  const binding = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  var team = Object.create(dart.library);
  var $noSuchMethod = dartx.noSuchMethod;
  var $isNotEmpty = dartx.isNotEmpty;
  var $_get = dartx._get;
  var $_equals = dartx._equals;
  var $remove = dartx.remove;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $putIfAbsent = dartx.putIfAbsent;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfGestureArenaMember: () => (T.JSArrayOfGestureArenaMember = dart.constFn(_interceptors.JSArray$(arena.GestureArenaMember)))(),
    IdentityMapOfint$_CombiningGestureArenaMember: () => (T.IdentityMapOfint$_CombiningGestureArenaMember = dart.constFn(_js_helper.IdentityMap$(core.int, team._CombiningGestureArenaMember)))(),
    VoidTo_CombiningGestureArenaMember: () => (T.VoidTo_CombiningGestureArenaMember = dart.constFn(dart.fnType(team._CombiningGestureArenaMember, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(new _js_helper.PrivateSymbol.new('_member', _member));
    },
    get C1() {
      return C[1] = dart.const(new _js_helper.PrivateSymbol.new('_arena', _arena));
    },
    get C2() {
      return C[2] = dart.const(new _js_helper.PrivateSymbol.new('_pointer', _pointer$));
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "package:flutter/src/gestures/team.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/gestures/team.dart"
  ];
  var _member$ = dart.privateName(team, "_CombiningGestureArenaEntry._member");
  var _combiner$ = dart.privateName(team, "_combiner");
  var _member = dart.privateName(team, "_member");
  var _resolve = dart.privateName(team, "_resolve");
  var _member$0 = dart.privateName(arena, "_member");
  var _arena = dart.privateName(team, "_arena");
  var _arena$ = dart.privateName(arena, "_arena");
  var _pointer$ = dart.privateName(team, "_pointer");
  var _pointer = dart.privateName(arena, "_pointer");
  team._CombiningGestureArenaEntry = class _CombiningGestureArenaEntry extends core.Object {
    get [_member]() {
      return this[_member$];
    }
    set [_member](value) {
      super[_member] = value;
    }
    static ['_#new#tearOff'](_combiner, _member) {
      return new team._CombiningGestureArenaEntry.new(_combiner, _member);
    }
    resolve(disposition) {
      this[_combiner$][_resolve](this[_member], disposition);
    }
    get [_member$0]() {
      return arena.GestureArenaMember.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    get [_arena$]() {
      return arena.GestureArenaManager.as(this[$noSuchMethod](new core._Invocation.getter(C[1] || CT.C1)));
    }
    get [_pointer]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[2] || CT.C2)));
    }
  };
  (team._CombiningGestureArenaEntry.new = function(_combiner, _member) {
    this[_combiner$] = _combiner;
    this[_member$] = _member;
    ;
  }).prototype = team._CombiningGestureArenaEntry.prototype;
  dart.addTypeTests(team._CombiningGestureArenaEntry);
  dart.addTypeCaches(team._CombiningGestureArenaEntry);
  team._CombiningGestureArenaEntry[dart.implements] = () => [arena.GestureArenaEntry];
  dart.setMethodSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setGetterSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getGetters(team._CombiningGestureArenaEntry.__proto__),
    [_member$0]: arena.GestureArenaMember,
    [_arena$]: arena.GestureArenaManager,
    [_pointer]: core.int
  }));
  dart.setLibraryUri(team._CombiningGestureArenaEntry, I[0]);
  dart.setFieldSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaEntry.__proto__),
    [_combiner$]: dart.finalFieldType(team._CombiningGestureArenaMember),
    [_member]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  var _members = dart.privateName(team, "_members");
  var _resolved = dart.privateName(team, "_resolved");
  var _winner = dart.privateName(team, "_winner");
  var _entry = dart.privateName(team, "_entry");
  var _owner$ = dart.privateName(team, "_owner");
  var _close = dart.privateName(team, "_close");
  var _combiners = dart.privateName(team, "_combiners");
  var _add = dart.privateName(team, "_add");
  team._CombiningGestureArenaMember = class _CombiningGestureArenaMember extends arena.GestureArenaMember {
    static ['_#new#tearOff'](_owner, _pointer) {
      return new team._CombiningGestureArenaMember.new(_owner, _pointer);
    }
    acceptGesture(pointer) {
      let t0;
      if (!(this[_pointer$] === pointer)) dart.assertFailed(null, I[1], 34, 12, "_pointer == pointer");
      if (!(this[_winner] != null || this[_members][$isNotEmpty])) dart.assertFailed(null, I[1], 35, 12, "_winner != null || _members.isNotEmpty");
      this[_close]();
      this[_winner] == null ? this[_winner] = (t0 = this[_owner$].captain, t0 == null ? this[_members][$_get](0) : t0) : null;
      for (let member of this[_members]) {
        if (!member[$_equals](this[_winner])) member.rejectGesture(pointer);
      }
      dart.nullCheck(this[_winner]).acceptGesture(pointer);
    }
    rejectGesture(pointer) {
      if (!(this[_pointer$] === pointer)) dart.assertFailed(null, I[1], 47, 12, "_pointer == pointer");
      this[_close]();
      for (let member of this[_members])
        member.rejectGesture(pointer);
    }
    [_close]() {
      if (!!this[_resolved]) dart.assertFailed(null, I[1], 54, 12, "!_resolved");
      this[_resolved] = true;
      let combiner = this[_owner$][_combiners][$remove](this[_pointer$]);
      if (!dart.equals(combiner, this)) dart.assertFailed(null, I[1], 57, 12, "combiner == this");
    }
    [_add](pointer, member) {
      if (!!this[_resolved]) dart.assertFailed(null, I[1], 61, 12, "!_resolved");
      if (!(this[_pointer$] === pointer)) dart.assertFailed(null, I[1], 62, 12, "_pointer == pointer");
      this[_members][$add](member);
      this[_entry] == null ? this[_entry] = dart.nullCheck(binding.GestureBinding.instance).gestureArena.add(pointer, this) : null;
      return new team._CombiningGestureArenaEntry.new(this, member);
    }
    [_resolve](member, disposition) {
      let t0;
      if (this[_resolved]) return;
      if (disposition === arena.GestureDisposition.rejected) {
        this[_members][$remove](member);
        member.rejectGesture(this[_pointer$]);
        if (this[_members][$isEmpty]) dart.nullCheck(this[_entry]).resolve(disposition);
      } else {
        if (!(disposition === arena.GestureDisposition.accepted)) dart.assertFailed(null, I[1], 77, 14, "disposition == GestureDisposition.accepted");
        this[_winner] == null ? this[_winner] = (t0 = this[_owner$].captain, t0 == null ? member : t0) : null;
        dart.nullCheck(this[_entry]).resolve(disposition);
      }
    }
  };
  (team._CombiningGestureArenaMember.new = function(_owner, _pointer) {
    this[_members] = T.JSArrayOfGestureArenaMember().of([]);
    this[_resolved] = false;
    this[_winner] = null;
    this[_entry] = null;
    this[_owner$] = _owner;
    this[_pointer$] = _pointer;
    ;
  }).prototype = team._CombiningGestureArenaMember.prototype;
  dart.addTypeTests(team._CombiningGestureArenaMember);
  dart.addTypeCaches(team._CombiningGestureArenaMember);
  dart.setMethodSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaMember.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_close]: dart.fnType(dart.void, []),
    [_add]: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    [_resolve]: dart.fnType(dart.void, [arena.GestureArenaMember, arena.GestureDisposition])
  }));
  dart.setLibraryUri(team._CombiningGestureArenaMember, I[0]);
  dart.setFieldSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaMember.__proto__),
    [_owner$]: dart.finalFieldType(team.GestureArenaTeam),
    [_members]: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    [_pointer$]: dart.finalFieldType(core.int),
    [_resolved]: dart.fieldType(core.bool),
    [_winner]: dart.fieldType(dart.nullable(arena.GestureArenaMember)),
    [_entry]: dart.fieldType(dart.nullable(arena.GestureArenaEntry))
  }));
  var captain = dart.privateName(team, "GestureArenaTeam.captain");
  team.GestureArenaTeam = class GestureArenaTeam extends core.Object {
    get captain() {
      return this[captain];
    }
    set captain(value) {
      this[captain] = value;
    }
    add(pointer, member) {
      let combiner = this[_combiners][$putIfAbsent](pointer, dart.fn(() => new team._CombiningGestureArenaMember.new(this, pointer), T.VoidTo_CombiningGestureArenaMember()));
      return combiner[_add](pointer, member);
    }
    static ['_#new#tearOff']() {
      return new team.GestureArenaTeam.new();
    }
  };
  (team.GestureArenaTeam.new = function() {
    this[_combiners] = new (T.IdentityMapOfint$_CombiningGestureArenaMember()).new();
    this[captain] = null;
    ;
  }).prototype = team.GestureArenaTeam.prototype;
  dart.addTypeTests(team.GestureArenaTeam);
  dart.addTypeCaches(team.GestureArenaTeam);
  dart.setMethodSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getMethods(team.GestureArenaTeam.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember])
  }));
  dart.setLibraryUri(team.GestureArenaTeam, I[0]);
  dart.setFieldSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getFields(team.GestureArenaTeam.__proto__),
    [_combiners]: dart.finalFieldType(core.Map$(core.int, team._CombiningGestureArenaMember)),
    captain: dart.fieldType(dart.nullable(arena.GestureArenaMember))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/team.dart", {
    "package:flutter/src/gestures/team.dart": team
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["team.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAY2B;;;;;;;;;YAGO;AACU,MAAxC,AAAU,2BAAS,eAAS,WAAW;IACzC;;;;;;;;;;;mDARiC,WAAgB;IAAhB;IAAgB;;EAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBAuBlC;;AACrB,YAAO,AAAS,oBAAG,OAAO;AAC1B,YAAO,AAAgB,yBAAG,AAAS;AAC3B,MAAR;AACyC,MAAjC,wBAAR,iBAA2B,KAAf,AAAO,uBAAA,aAAW,AAAQ,sBAAC,WAA/B;AACR,eAA8B,SAAU;AACtC,aAAI,MAAM,WAAI,gBACZ,AAAO,AAAsB,MAAvB,eAAe,OAAO;;AAED,MAAxB,AAAE,eAAT,6BAAuB,OAAO;IAChC;kBAGuB;AACrB,YAAO,AAAS,oBAAG,OAAO;AAClB,MAAR;AACA,eAA8B,SAAU;AACT,QAA7B,AAAO,MAAD,eAAe,OAAO;IAChC;;AAGE,YAAQ;AACQ,MAAhB,kBAAY;AACwB,qBAAW,AAAO,AAAW,mCAAO;AACxE,WAAgB,YAAT,QAAQ,EAAI;IACrB;WAE2B,SAA4B;AACrD,YAAQ;AACR,YAAO,AAAS,oBAAG,OAAO;AACN,MAApB,AAAS,qBAAI,MAAM;AACgD,MAA5D,uBAAP,eAAkC,AAAE,AAAa,eAAvB,kDAA2B,OAAO,EAAE,QAAvD;AACP,YAAO,0CAA4B,MAAM,MAAM;IACjD;eAEiC,QAA2B;;AAC1D,UAAI,iBACF;AACF,UAAI,AAAY,WAAD,KAAuB;AACb,QAAvB,AAAS,wBAAO,MAAM;AACQ,QAA9B,AAAO,MAAD,eAAe;AACrB,YAAI,AAAS,0BACL,AAAE,AAAoB,eAA5B,sBAAgB,WAAW;;AAE7B,cAAO,AAAY,WAAD,KAAuB;AACL,QAA5B,wBAAR,iBAA2B,KAAf,AAAO,uBAAA,aAAW,MAAM,SAA5B;AACoB,QAAtB,AAAE,eAAR,sBAAgB,WAAW;;IAE/B;;oDA3DkC,QAAa;IAGhB,iBAA+B;IAGzD,kBAAY;IACG;IACD;IARe;IAAa;;EAAS;;;;;;;;;;;;;;;;;;;;;;;IAiHpC;;;;;;QASM,SAA4B;AACjB,qBAAW,AAAW,+BACvD,OAAO,EACP,cAAM,0CAA6B,MAAM,OAAO;AAElD,YAAO,AAAS,SAAD,OAAM,OAAO,EAAE,MAAM;IACtC;;;;;;IAtB6C,mBAAgD;IAOzE;;EAgBtB","file":"../../../../../../../../../../packages/flutter/src/gestures/team.dart.lib.js"}');
  // Exports:
  return {
    src__gestures__team: team
  };
}));

//# sourceMappingURL=team.dart.lib.js.map
