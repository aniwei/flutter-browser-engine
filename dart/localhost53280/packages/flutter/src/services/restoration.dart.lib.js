define(['dart_sdk', 'packages/flutter/src/foundation/synchronous_future.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/services/binary_messenger.dart', 'packages/flutter/src/foundation/serialization.dart', 'packages/flutter/src/services/keyboard_maps.dart', 'packages/flutter/src/services/keyboard_key.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/foundation/collections.dart', 'packages/flutter/src/foundation/licenses.dart', 'packages/flutter/src/foundation/_isolates_web.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/foundation/consolidate_response.dart'], (function load__packages__flutter__src__services__restoration_dart(dart_sdk, packages__flutter__src__foundation__synchronous_future$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__services__binary_messenger$46dart, packages__flutter__src__foundation__serialization$46dart, packages__flutter__src__services__keyboard_maps$46dart, packages__flutter__src__services__keyboard_key$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__foundation__collections$46dart, packages__flutter__src__foundation__licenses$46dart, packages__flutter__src__foundation___isolates_web$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__foundation__consolidate_response$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const convert = dart_sdk.convert;
  const ui = dart_sdk.ui;
  const io = dart_sdk.io;
  const _http = dart_sdk._http;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const synchronous_future = packages__flutter__src__foundation__synchronous_future$46dart.src__foundation__synchronous_future;
  const binding = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const binary_messenger = packages__flutter__src__services__binary_messenger$46dart.src__services__binary_messenger;
  const serialization = packages__flutter__src__foundation__serialization$46dart.src__foundation__serialization;
  const keyboard_maps = packages__flutter__src__services__keyboard_maps$46dart.src__services__keyboard_maps;
  const keyboard_key = packages__flutter__src__services__keyboard_key$46dart.src__services__keyboard_key;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  const licenses$ = packages__flutter__src__foundation__licenses$46dart.src__foundation__licenses;
  const isolates = packages__flutter__src__foundation___isolates_web$46dart.src__foundation__isolates;
  const binding$ = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const consolidate_response = packages__flutter__src__foundation__consolidate_response$46dart.src__foundation__consolidate_response;
  var restoration = Object.create(dart.library);
  var platform_channel = Object.create(dart.library);
  var message_codec = Object.create(dart.library);
  var message_codecs = Object.create(dart.library);
  var system_channels = Object.create(dart.library);
  var raw_keyboard_windows = Object.create(dart.library);
  var raw_keyboard_web = Object.create(dart.library);
  var raw_keyboard_macos = Object.create(dart.library);
  var raw_keyboard_linux = Object.create(dart.library);
  var raw_keyboard_ios = Object.create(dart.library);
  var raw_keyboard_fuchsia = Object.create(dart.library);
  var raw_keyboard_android = Object.create(dart.library);
  var raw_keyboard = Object.create(dart.library);
  var hardware_keyboard = Object.create(dart.library);
  var binding$0 = Object.create(dart.library);
  var asset_bundle = Object.create(dart.library);
  var $_get = dartx._get;
  var $runtimeType = dartx.runtimeType;
  var $buffer = dartx.buffer;
  var $offsetInBytes = dartx.offsetInBytes;
  var $lengthInBytes = dartx.lengthInBytes;
  var $asByteData = dartx.asByteData;
  var $asUint8List = dartx.asUint8List;
  var $putIfAbsent = dartx.putIfAbsent;
  var $containsKey = dartx.containsKey;
  var $_set = dartx._set;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $entries = dartx.entries;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $addAll = dartx.addAll;
  var $removeLast = dartx.removeLast;
  var $add = dartx.add;
  var $values = dartx.values;
  var $expand = dartx.expand;
  var $followedBy = dartx.followedBy;
  var $toList = dartx.toList;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $cast = dartx.cast;
  var $toString = dartx.toString;
  var $length = dartx.length;
  var $hashCode = dartx.hashCode;
  var $toLowerCase = dartx.toLowerCase;
  var $codeUnitAt = dartx.codeUnitAt;
  var $substring = dartx.substring;
  var $runes = dartx.runes;
  var $contains = dartx.contains;
  var $keys = dartx.keys;
  var $any = dartx.any;
  var $where = dartx.where;
  var $toSet = dartx.toSet;
  var $times = dartx['*'];
  var $split = dartx.split;
  var $indexOf = dartx.indexOf;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    LinkedHashSetOfRestorationBucket: () => (T$.LinkedHashSetOfRestorationBucket = dart.constFn(collection.LinkedHashSet$(restoration.RestorationBucket)))(),
    RestorationBucketN: () => (T$.RestorationBucketN = dart.constFn(dart.nullable(restoration.RestorationBucket)))(),
    SynchronousFutureOfRestorationBucketN: () => (T$.SynchronousFutureOfRestorationBucketN = dart.constFn(synchronous_future.SynchronousFuture$(T$.RestorationBucketN())))(),
    CompleterOfRestorationBucketN: () => (T$.CompleterOfRestorationBucketN = dart.constFn(async.Completer$(T$.RestorationBucketN())))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    MapOfObjectN$ObjectN: () => (T$.MapOfObjectN$ObjectN = dart.constFn(core.Map$(T$.ObjectN(), T$.ObjectN())))(),
    Uint8ListN: () => (T$.Uint8ListN = dart.constFn(dart.nullable(typed_data.Uint8List)))(),
    DurationTovoid: () => (T$.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    MapNOfObjectN$ObjectN: () => (T$.MapNOfObjectN$ObjectN = dart.constFn(dart.nullable(T$.MapOfObjectN$ObjectN())))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    IdentityMapOfString$RestorationBucket: () => (T$.IdentityMapOfString$RestorationBucket = dart.constFn(_js_helper.IdentityMap$(core.String, restoration.RestorationBucket)))(),
    ListOfRestorationBucket: () => (T$.ListOfRestorationBucket = dart.constFn(core.List$(restoration.RestorationBucket)))(),
    IdentityMapOfString$ListOfRestorationBucket: () => (T$.IdentityMapOfString$ListOfRestorationBucket = dart.constFn(_js_helper.IdentityMap$(core.String, T$.ListOfRestorationBucket())))(),
    IdentityMapOfString$ObjectN: () => (T$.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T$.ObjectN())))(),
    LinkedMapOfObjectN$ObjectN: () => (T$.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T$.ObjectN(), T$.ObjectN())))(),
    VoidToMapOfObjectN$ObjectN: () => (T$.VoidToMapOfObjectN$ObjectN = dart.constFn(dart.fnType(T$.MapOfObjectN$ObjectN(), [])))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    RestorationBucketToErrorDescription: () => (T$.RestorationBucketToErrorDescription = dart.constFn(dart.fnType(assertions.ErrorDescription, [restoration.RestorationBucket])))(),
    JSArrayOfRestorationBucket: () => (T$.JSArrayOfRestorationBucket = dart.constFn(_interceptors.JSArray$(restoration.RestorationBucket)))(),
    VoidToListOfRestorationBucket: () => (T$.VoidToListOfRestorationBucket = dart.constFn(dart.fnType(T$.ListOfRestorationBucket(), [])))(),
    ListOfRestorationBucketToListOfRestorationBucket: () => (T$.ListOfRestorationBucketToListOfRestorationBucket = dart.constFn(dart.fnType(T$.ListOfRestorationBucket(), [T$.ListOfRestorationBucket()])))(),
    ByteDataN: () => (T$.ByteDataN = dart.constFn(dart.nullable(typed_data.ByteData)))(),
    FutureOfByteDataN: () => (T$.FutureOfByteDataN = dart.constFn(async.Future$(T$.ByteDataN())))(),
    ByteDataNToFutureOfByteDataN: () => (T$.ByteDataNToFutureOfByteDataN = dart.constFn(dart.fnType(T$.FutureOfByteDataN(), [T$.ByteDataN()])))(),
    VoidToStreamController: () => (T$.VoidToStreamController = dart.constFn(dart.fnType(async.StreamController, [])))(),
    StreamControllerTodynamic: () => (T$.StreamControllerTodynamic = dart.constFn(dart.fnType(dart.dynamic, [async.StreamController])))(),
    FutureOfNull: () => (T$.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    ByteDataNToFutureOfNull: () => (T$.ByteDataNToFutureOfNull = dart.constFn(dart.fnType(T$.FutureOfNull(), [T$.ByteDataN()])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T$.VoidToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [])))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    JSArrayOfObjectN: () => (T$.JSArrayOfObjectN = dart.constFn(_interceptors.JSArray$(T$.ObjectN())))(),
    ObjectNAndObjectNTovoid: () => (T$.ObjectNAndObjectNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ObjectN(), T$.ObjectN()])))(),
    ListOfObjectN: () => (T$.ListOfObjectN = dart.constFn(core.List$(T$.ObjectN())))(),
    BasicMessageChannelOfObjectN: () => (T$.BasicMessageChannelOfObjectN = dart.constFn(platform_channel.BasicMessageChannel$(T$.ObjectN())))(),
    BasicMessageChannelOfStringN: () => (T$.BasicMessageChannelOfStringN = dart.constFn(platform_channel.BasicMessageChannel$(T$.StringN())))(),
    KeyboardSideN: () => (T$.KeyboardSideN = dart.constFn(dart.nullable(raw_keyboard.KeyboardSide)))(),
    intAndintAndintToKeyboardSideN: () => (T$.intAndintAndintToKeyboardSideN = dart.constFn(dart.fnType(T$.KeyboardSideN(), [core.int, core.int, core.int])))(),
    DiagnosticsPropertyOfint: () => (T$.DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))(),
    LinkedMapOfModifierKey$KeyboardSide: () => (T$.LinkedMapOfModifierKey$KeyboardSide = dart.constFn(_js_helper.LinkedMap$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)))(),
    DiagnosticsPropertyOfString: () => (T$.DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))(),
    DiagnosticsPropertyOfbool: () => (T$.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    VoidToRawKeyEventData: () => (T$.VoidToRawKeyEventData = dart.constFn(dart.fnType(raw_keyboard.RawKeyEventData, [])))(),
    DiagnosticsPropertyOfLogicalKeyboardKey: () => (T$.DiagnosticsPropertyOfLogicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key.LogicalKeyboardKey)))(),
    DiagnosticsPropertyOfPhysicalKeyboardKey: () => (T$.DiagnosticsPropertyOfPhysicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key.PhysicalKeyboardKey)))(),
    RawKeyEventTovoid: () => (T$.RawKeyEventTovoid = dart.constFn(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])))(),
    JSArrayOfRawKeyEventTovoid: () => (T$.JSArrayOfRawKeyEventTovoid = dart.constFn(_interceptors.JSArray$(T$.RawKeyEventTovoid())))(),
    LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey: () => (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(keyboard_key.PhysicalKeyboardKey, keyboard_key.LogicalKeyboardKey)))(),
    LinkedHashSetOfPhysicalKeyboardKey: () => (T$.LinkedHashSetOfPhysicalKeyboardKey = dart.constFn(collection.LinkedHashSet$(keyboard_key.PhysicalKeyboardKey)))(),
    RawKeyEventTobool: () => (T$.RawKeyEventTobool = dart.constFn(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent])))(),
    KeyMessageTobool: () => (T$.KeyMessageTobool = dart.constFn(dart.fnType(core.bool, [hardware_keyboard.KeyMessage])))(),
    ListOfRawKeyEventTovoid: () => (T$.ListOfRawKeyEventTovoid = dart.constFn(core.List$(T$.RawKeyEventTovoid())))(),
    DiagnosticsPropertyOfRawKeyEvent: () => (T$.DiagnosticsPropertyOfRawKeyEvent = dart.constFn(diagnostics.DiagnosticsProperty$(raw_keyboard.RawKeyEvent)))(),
    ListOfDiagnosticsNode: () => (T$.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T$.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T$.ListOfDiagnosticsNode(), [])))(),
    PhysicalKeyboardKeyTobool: () => (T$.PhysicalKeyboardKeyTobool = dart.constFn(dart.fnType(core.bool, [keyboard_key.PhysicalKeyboardKey])))(),
    SetOfPhysicalKeyboardKey: () => (T$.SetOfPhysicalKeyboardKey = dart.constFn(core.Set$(keyboard_key.PhysicalKeyboardKey)))(),
    LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey: () => (T$.LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(raw_keyboard._ModifierSidePair, T$.SetOfPhysicalKeyboardKey())))(),
    IdentityMapOfint$KeyboardLockMode: () => (T$.IdentityMapOfint$KeyboardLockMode = dart.constFn(_js_helper.IdentityMap$(core.int, hardware_keyboard.KeyboardLockMode)))(),
    DiagnosticsPropertyOfDuration: () => (T$.DiagnosticsPropertyOfDuration = dart.constFn(diagnostics.DiagnosticsProperty$(core.Duration)))(),
    LinkedHashSetOfKeyboardLockMode: () => (T$.LinkedHashSetOfKeyboardLockMode = dart.constFn(collection.LinkedHashSet$(hardware_keyboard.KeyboardLockMode)))(),
    KeyEventTobool: () => (T$.KeyEventTobool = dart.constFn(dart.fnType(core.bool, [hardware_keyboard.KeyEvent])))(),
    JSArrayOfKeyEventTobool: () => (T$.JSArrayOfKeyEventTobool = dart.constFn(_interceptors.JSArray$(T$.KeyEventTobool())))(),
    ListOfKeyEventTobool: () => (T$.ListOfKeyEventTobool = dart.constFn(core.List$(T$.KeyEventTobool())))(),
    DiagnosticsPropertyOfKeyEvent: () => (T$.DiagnosticsPropertyOfKeyEvent = dart.constFn(diagnostics.DiagnosticsProperty$(hardware_keyboard.KeyEvent)))(),
    JSArrayOfKeyEvent: () => (T$.JSArrayOfKeyEvent = dart.constFn(_interceptors.JSArray$(hardware_keyboard.KeyEvent)))(),
    MapOfString$dynamic: () => (T$.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    DiagnosticsPropertyOfKeyMessage: () => (T$.DiagnosticsPropertyOfKeyMessage = dart.constFn(diagnostics.DiagnosticsProperty$(hardware_keyboard.KeyMessage)))(),
    IdentityMapOfString$dynamic: () => (T$.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    dynamicToFutureOfvoid: () => (T$.dynamicToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [dart.dynamic])))(),
    StreamControllerOfLicenseEntry: () => (T$.StreamControllerOfLicenseEntry = dart.constFn(async.StreamController$(licenses$.LicenseEntry)))(),
    VoidToStreamControllerOfLicenseEntry: () => (T$.VoidToStreamControllerOfLicenseEntry = dart.constFn(dart.fnType(T$.StreamControllerOfLicenseEntry(), [])))(),
    StreamControllerOfLicenseEntryTodynamic: () => (T$.StreamControllerOfLicenseEntryTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.StreamControllerOfLicenseEntry()])))(),
    VoidToString: () => (T$.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    StringTodynamic: () => (T$.StringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String])))(),
    ListOfint: () => (T$.ListOfint = dart.constFn(core.List$(core.int)))(),
    ListOfintToListOfint: () => (T$.ListOfintToListOfint = dart.constFn(dart.fnType(T$.ListOfint(), [T$.ListOfint()])))(),
    ListOfLicenseEntry: () => (T$.ListOfLicenseEntry = dart.constFn(core.List$(licenses$.LicenseEntry)))(),
    StringToListOfLicenseEntry: () => (T$.StringToListOfLicenseEntry = dart.constFn(dart.fnType(T$.ListOfLicenseEntry(), [core.String])))(),
    LicenseEntryTovoid: () => (T$.LicenseEntryTovoid = dart.constFn(dart.fnType(dart.void, [licenses$.LicenseEntry])))(),
    JSArrayOfLicenseEntry: () => (T$.JSArrayOfLicenseEntry = dart.constFn(_interceptors.JSArray$(licenses$.LicenseEntry)))(),
    FutureOfString: () => (T$.FutureOfString = dart.constFn(async.Future$(core.String)))(),
    VoidToFutureOfString: () => (T$.VoidToFutureOfString = dart.constFn(dart.fnType(T$.FutureOfString(), [])))(),
    StringToFutureOfvoid: () => (T$.StringToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [core.String])))(),
    ByteDataNTovoid: () => (T$.ByteDataNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ByteDataN()])))(),
    CompleterOfByteDataN: () => (T$.CompleterOfByteDataN = dart.constFn(async.Completer$(T$.ByteDataN())))(),
    ByteDataNAndFnToFutureOfvoid: () => (T$.ByteDataNAndFnToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [T$.ByteDataN(), T$.ByteDataNTovoid()])))(),
    ByteDataToString: () => (T$.ByteDataToString = dart.constFn(dart.fnType(core.String, [typed_data.ByteData])))(),
    IdentityMapOfString$FutureOfString: () => (T$.IdentityMapOfString$FutureOfString = dart.constFn(_js_helper.IdentityMap$(core.String, T$.FutureOfString())))(),
    IdentityMapOfString$Future: () => (T$.IdentityMapOfString$Future = dart.constFn(_js_helper.IdentityMap$(core.String, async.Future)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C[0] || CT.C0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: message_codecs.StringCodec.prototype
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: message_codecs.JSONMessageCodec.prototype
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Message corrupted"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Invalid method call"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Expected envelope, got nothing"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: core.FormatException.prototype,
        [FormatException_offset]: null,
        [FormatException_source]: null,
        [FormatException_message]: "Invalid envelope"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: message_codecs.JSONMethodCodec.prototype
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[9] || CT.C9,
        [name$0]: "flutter/navigation"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[9] || CT.C9,
        [name$0]: "flutter/platform"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[9] || CT.C9,
        [name$0]: "flutter/textinput"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: T$.BasicMessageChannelOfObjectN().prototype,
        [_binaryMessenger]: null,
        [codec$]: C[3] || CT.C3,
        [name$]: "flutter/keyevent"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: T$.BasicMessageChannelOfStringN().prototype,
        [_binaryMessenger]: null,
        [codec$]: C[2] || CT.C2,
        [name$]: "flutter/lifecycle"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: T$.BasicMessageChannelOfObjectN().prototype,
        [_binaryMessenger]: null,
        [codec$]: C[3] || CT.C3,
        [name$]: "flutter/system"
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: T$.BasicMessageChannelOfObjectN().prototype,
        [_binaryMessenger]: null,
        [codec$]: C[0] || CT.C0,
        [name$]: "flutter/accessibility"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[1] || CT.C1,
        [name$0]: "flutter/platform_views"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[9] || CT.C9,
        [name$0]: "flutter/skia"
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[1] || CT.C1,
        [name$0]: "flutter/mousecursor"
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[1] || CT.C1,
        [name$0]: "flutter/restoration"
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[1] || CT.C1,
        [name$0]: "flutter/deferredcomponent"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger$0]: null,
        [codec$0]: C[9] || CT.C9,
        [name$0]: "flutter/localization"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_Enum__name]: "any",
        [_Enum_index]: 0
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_Enum__name]: "all",
        [_Enum_index]: 3
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 1
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 2
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "controlModifier",
        [_Enum_index]: 0
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "shiftModifier",
        [_Enum_index]: 1
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "altModifier",
        [_Enum_index]: 2
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "metaModifier",
        [_Enum_index]: 3
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "capsLockModifier",
        [_Enum_index]: 4
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "scrollLockModifier",
        [_Enum_index]: 6
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "numLockModifier",
        [_Enum_index]: 5
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "functionModifier",
        [_Enum_index]: 7
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_Enum__name]: "symbolModifier",
        [_Enum_index]: 8
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967323.0
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969345.0
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969346.0
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969347.0
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969348.0
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969349.0
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969350.0
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969351.0
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969352.0
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969353.0
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969354.0
      });
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969355.0
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294969356.0
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968068.0
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968065.0
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968066.0
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968067.0
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968070.0
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967309.0
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968072.0
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294968071.0
      });
    },
    get C35() {
      return C[35] = dart.constMap(core.String, keyboard_key.LogicalKeyboardKey, ["UIKeyInputEscape", C[36] || CT.C36, "UIKeyInputF1", C[37] || CT.C37, "UIKeyInputF2", C[38] || CT.C38, "UIKeyInputF3", C[39] || CT.C39, "UIKeyInputF4", C[40] || CT.C40, "UIKeyInputF5", C[41] || CT.C41, "UIKeyInputF6", C[42] || CT.C42, "UIKeyInputF7", C[43] || CT.C43, "UIKeyInputF8", C[44] || CT.C44, "UIKeyInputF9", C[45] || CT.C45, "UIKeyInputF10", C[46] || CT.C46, "UIKeyInputF11", C[47] || CT.C47, "UIKeyInputF12", C[48] || CT.C48, "UIKeyInputUpArrow", C[49] || CT.C49, "UIKeyInputDownArrow", C[50] || CT.C50, "UIKeyInputLeftArrow", C[51] || CT.C51, "UIKeyInputRightArrow", C[52] || CT.C52, "UIKeyInputHome", C[53] || CT.C53, "UIKeyInputEnd", C[54] || CT.C54, "UIKeyInputPageUp", C[55] || CT.C55, "UIKeyInputPageDown", C[56] || CT.C56]);
    },
    get C57() {
      return C[57] = dart.constList([C[22] || CT.C22, C[24] || CT.C24, C[25] || CT.C25, C[23] || CT.C23], raw_keyboard.KeyboardSide);
    },
    get C58() {
      return C[58] = dart.constList([C[26] || CT.C26, C[27] || CT.C27, C[28] || CT.C28, C[29] || CT.C29, C[30] || CT.C30, C[32] || CT.C32, C[31] || CT.C31, C[33] || CT.C33, C[34] || CT.C34], raw_keyboard.ModifierKey);
    },
    get C59() {
      return C[59] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[24] || CT.C24,
        [_ModifierSidePair_modifier]: C[28] || CT.C28
      });
    },
    get C60() {
      return C[60] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[25] || CT.C25,
        [_ModifierSidePair_modifier]: C[28] || CT.C28
      });
    },
    get C61() {
      return C[61] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[23] || CT.C23,
        [_ModifierSidePair_modifier]: C[28] || CT.C28
      });
    },
    get C62() {
      return C[62] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[22] || CT.C22,
        [_ModifierSidePair_modifier]: C[28] || CT.C28
      });
    },
    get C63() {
      return C[63] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[24] || CT.C24,
        [_ModifierSidePair_modifier]: C[27] || CT.C27
      });
    },
    get C64() {
      return C[64] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[25] || CT.C25,
        [_ModifierSidePair_modifier]: C[27] || CT.C27
      });
    },
    get C65() {
      return C[65] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[23] || CT.C23,
        [_ModifierSidePair_modifier]: C[27] || CT.C27
      });
    },
    get C66() {
      return C[66] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[22] || CT.C22,
        [_ModifierSidePair_modifier]: C[27] || CT.C27
      });
    },
    get C67() {
      return C[67] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[24] || CT.C24,
        [_ModifierSidePair_modifier]: C[26] || CT.C26
      });
    },
    get C68() {
      return C[68] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[25] || CT.C25,
        [_ModifierSidePair_modifier]: C[26] || CT.C26
      });
    },
    get C69() {
      return C[69] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[23] || CT.C23,
        [_ModifierSidePair_modifier]: C[26] || CT.C26
      });
    },
    get C70() {
      return C[70] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[22] || CT.C22,
        [_ModifierSidePair_modifier]: C[26] || CT.C26
      });
    },
    get C71() {
      return C[71] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[24] || CT.C24,
        [_ModifierSidePair_modifier]: C[29] || CT.C29
      });
    },
    get C72() {
      return C[72] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[25] || CT.C25,
        [_ModifierSidePair_modifier]: C[29] || CT.C29
      });
    },
    get C73() {
      return C[73] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[23] || CT.C23,
        [_ModifierSidePair_modifier]: C[29] || CT.C29
      });
    },
    get C74() {
      return C[74] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[22] || CT.C22,
        [_ModifierSidePair_modifier]: C[29] || CT.C29
      });
    },
    get C75() {
      return C[75] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[23] || CT.C23,
        [_ModifierSidePair_modifier]: C[30] || CT.C30
      });
    },
    get C76() {
      return C[76] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[23] || CT.C23,
        [_ModifierSidePair_modifier]: C[32] || CT.C32
      });
    },
    get C77() {
      return C[77] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[23] || CT.C23,
        [_ModifierSidePair_modifier]: C[31] || CT.C31
      });
    },
    get C78() {
      return C[78] = dart.const({
        __proto__: raw_keyboard._ModifierSidePair.prototype,
        [_ModifierSidePair_side]: C[23] || CT.C23,
        [_ModifierSidePair_modifier]: C[33] || CT.C33
      });
    },
    get C80() {
      return C[80] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967562.0
      });
    },
    get C79() {
      return C[79] = dart.const({
        __proto__: hardware_keyboard.KeyboardLockMode.prototype,
        [logicalKey$]: C[80] || CT.C80
      });
    },
    get C82() {
      return C[82] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967564.0
      });
    },
    get C81() {
      return C[81] = dart.const({
        __proto__: hardware_keyboard.KeyboardLockMode.prototype,
        [logicalKey$]: C[82] || CT.C82
      });
    },
    get C84() {
      return C[84] = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        [LogicalKeyboardKey_keyId]: 4294967556.0
      });
    },
    get C83() {
      return C[83] = dart.const({
        __proto__: hardware_keyboard.KeyboardLockMode.prototype,
        [logicalKey$]: C[84] || CT.C84
      });
    },
    get C85() {
      return C[85] = dart.const({
        __proto__: hardware_keyboard.KeyDataTransitMode.prototype,
        [_Enum__name]: "rawKeyData",
        [_Enum_index]: 0
      });
    },
    get C86() {
      return C[86] = dart.const({
        __proto__: hardware_keyboard.KeyDataTransitMode.prototype,
        [_Enum__name]: "keyDataThenRawKeyData",
        [_Enum_index]: 1
      });
    },
    get C87() {
      return C[87] = dart.constList([C[85] || CT.C85, C[86] || CT.C86], hardware_keyboard.KeyDataTransitMode);
    },
    get C88() {
      return C[88] = dart.const({
        __proto__: ui.KeyEventType.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 0
      });
    },
    get C89() {
      return C[89] = dart.const({
        __proto__: ui.KeyEventType.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 1
      });
    },
    get C90() {
      return C[90] = dart.const({
        __proto__: ui.KeyEventType.prototype,
        [_Enum__name]: "repeat",
        [_Enum_index]: 2
      });
    },
    get C91() {
      return C[91] = dart.const({
        __proto__: binding$0._DefaultBinaryMessenger.prototype
      });
    },
    get C92() {
      return C[92] = dart.fn(binding$0.ServicesBinding._parseLicenses, T$.StringToListOfLicenseEntry());
    },
    get C93() {
      return C[93] = dart.constList([], core.String);
    },
    get C94() {
      return C[94] = dart.fn(asset_bundle.AssetBundle._utf8decode, T$.ByteDataToString());
    }
  }, false);
  var C = Array(95).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/restoration.dart",
    "package:flutter/src/services/restoration.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/platform_channel.dart",
    "package:flutter/src/services/platform_channel.dart",
    "package:flutter/src/services/message_codec.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/message_codec.dart",
    "package:flutter/src/services/message_codecs.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/message_codecs.dart",
    "package:flutter/src/services/system_channels.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/raw_keyboard_windows.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/raw_keyboard.dart",
    "package:flutter/src/services/raw_keyboard.dart",
    "package:flutter/src/services/raw_keyboard_windows.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/raw_keyboard_web.dart",
    "package:flutter/src/services/raw_keyboard_web.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/raw_keyboard_macos.dart",
    "package:flutter/src/services/raw_keyboard_macos.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/raw_keyboard_linux.dart",
    "package:flutter/src/services/raw_keyboard_linux.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/raw_keyboard_ios.dart",
    "package:flutter/src/services/raw_keyboard_ios.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/raw_keyboard_fuchsia.dart",
    "package:flutter/src/services/raw_keyboard_fuchsia.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/raw_keyboard_android.dart",
    "package:flutter/src/services/raw_keyboard_android.dart",
    "package:flutter/src/services/hardware_keyboard.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/hardware_keyboard.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/binding.dart",
    "package:flutter/src/services/binding.dart",
    "package:flutter/src/services/asset_bundle.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/services/asset_bundle.dart"
  ];
  var _rootBucket = dart.privateName(restoration, "_rootBucket");
  var _pendingRootBucket = dart.privateName(restoration, "_pendingRootBucket");
  var _rootBucketIsValid = dart.privateName(restoration, "_rootBucketIsValid");
  var _isReplacing = dart.privateName(restoration, "_isReplacing");
  var _debugDoingUpdate = dart.privateName(restoration, "_debugDoingUpdate");
  var _serializationScheduled = dart.privateName(restoration, "_serializationScheduled");
  var _bucketsNeedingSerialization = dart.privateName(restoration, "_bucketsNeedingSerialization");
  var _methodHandler = dart.privateName(restoration, "_methodHandler");
  var _getRootBucketFromEngine = dart.privateName(restoration, "_getRootBucketFromEngine");
  var _parseAndHandleRestorationUpdateFromEngine = dart.privateName(restoration, "_parseAndHandleRestorationUpdateFromEngine");
  var _decodeRestorationData = dart.privateName(restoration, "_decodeRestorationData");
  var _encodeRestorationData = dart.privateName(restoration, "_encodeRestorationData");
  var _manager = dart.privateName(restoration, "_manager");
  var _doSerialization = dart.privateName(restoration, "_doSerialization");
  var _rawData = dart.privateName(restoration, "_rawData");
  restoration.RestorationManager = class RestorationManager extends change_notifier.ChangeNotifier {
    static ['_#new#tearOff']() {
      return new restoration.RestorationManager.new();
    }
    initChannels() {
      system_channels.SystemChannels.restoration.setMethodCallHandler(dart.bind(this, _methodHandler));
    }
    get rootBucket() {
      if (this[_rootBucketIsValid]) {
        return new (T$.SynchronousFutureOfRestorationBucketN()).new(this[_rootBucket]);
      }
      if (this[_pendingRootBucket] == null) {
        this[_pendingRootBucket] = T$.CompleterOfRestorationBucketN().new();
        this[_getRootBucketFromEngine]();
      }
      return dart.nullCheck(this[_pendingRootBucket]).future;
    }
    get isReplacing() {
      return this[_isReplacing];
    }
    [_getRootBucketFromEngine]() {
      return async.async(dart.void, (function* _getRootBucketFromEngine() {
        let config = (yield system_channels.SystemChannels.restoration.invokeMethod(T$.MapOfObjectN$ObjectN(), "get"));
        if (this[_pendingRootBucket] == null) {
          return;
        }
        if (!(this[_rootBucket] == null)) dart.assertFailed(null, I[0], 235, 12, "_rootBucket == null");
        this[_parseAndHandleRestorationUpdateFromEngine](config);
      }).bind(this));
    }
    [_parseAndHandleRestorationUpdateFromEngine](update) {
      this.handleRestorationUpdateFromEngine({enabled: update != null && core.bool.as(dart.nullCheck(update[$_get]("enabled"))), data: update == null ? null : T$.Uint8ListN().as(update[$_get]("data"))});
    }
    handleRestorationUpdateFromEngine(opts) {
      let t0, t0$;
      let enabled = opts && 'enabled' in opts ? opts.enabled : null;
      let data = opts && 'data' in opts ? opts.data : null;
      if (!(enabled !== null)) dart.assertFailed(null, I[0], 262, 12, "enabled != null");
      if (!(enabled || data == null)) dart.assertFailed(null, I[0], 263, 12, "enabled || data == null");
      this[_isReplacing] = this[_rootBucketIsValid] && enabled;
      if (this[_isReplacing]) {
        dart.nullCheck(binding.SchedulerBinding.instance).addPostFrameCallback(dart.fn(_ => {
          this[_isReplacing] = false;
        }, T$.DurationTovoid()));
      }
      let oldRoot = this[_rootBucket];
      this[_rootBucket] = enabled ? new restoration.RestorationBucket.root({manager: this, rawData: this[_decodeRestorationData](data)}) : null;
      this[_rootBucketIsValid] = true;
      if (!(this[_pendingRootBucket] == null || !dart.nullCheck(this[_pendingRootBucket]).isCompleted)) dart.assertFailed(null, I[0], 277, 12, "_pendingRootBucket == null || !_pendingRootBucket!.isCompleted");
      t0 = this[_pendingRootBucket];
      t0 == null ? null : t0.complete(this[_rootBucket]);
      this[_pendingRootBucket] = null;
      if (!dart.equals(this[_rootBucket], oldRoot)) {
        this.notifyListeners();
        t0$ = oldRoot;
        t0$ == null ? null : t0$.dispose();
      }
    }
    sendToEngine(encodedData) {
      if (!(encodedData !== null)) dart.assertFailed(null, I[0], 300, 12, "encodedData != null");
      return system_channels.SystemChannels.restoration.invokeMethod(dart.void, "put", encodedData);
    }
    [_methodHandler](call) {
      return async.async(dart.void, (function* _methodHandler() {
        switch (call.method) {
          case "push":
          {
            this[_parseAndHandleRestorationUpdateFromEngine](T$.MapOfObjectN$ObjectN().as(call.arguments));
            break;
          }
          default:
          {
            dart.throw(new core.UnimplementedError.new(call.method + " was invoked but isn't implemented by " + dart.str(this[$runtimeType])));
          }
        }
      }).bind(this));
    }
    [_decodeRestorationData](data) {
      if (data == null) {
        return null;
      }
      let encoded = data[$buffer][$asByteData](data[$offsetInBytes], data[$lengthInBytes]);
      return T$.MapNOfObjectN$ObjectN().as((C[0] || CT.C0).decodeMessage(encoded));
    }
    [_encodeRestorationData](data) {
      let encoded = dart.nullCheck((C[0] || CT.C0).encodeMessage(data));
      return encoded[$buffer][$asUint8List](encoded[$offsetInBytes], encoded[$lengthInBytes]);
    }
    scheduleSerializationFor(bucket) {
      if (!(bucket !== null)) dart.assertFailed(null, I[0], 347, 12, "bucket != null");
      if (!dart.equals(bucket[_manager], this)) dart.assertFailed(null, I[0], 348, 12, "bucket._manager == this");
      if (!!this[_debugDoingUpdate]) dart.assertFailed(null, I[0], 349, 12, "!_debugDoingUpdate");
      this[_bucketsNeedingSerialization].add(bucket);
      if (!this[_serializationScheduled]) {
        this[_serializationScheduled] = true;
        dart.nullCheck(binding.SchedulerBinding.instance).addPostFrameCallback(dart.fn(_ => this[_doSerialization](), T$.DurationTovoid()));
      }
    }
    unscheduleSerializationFor(bucket) {
      if (!(bucket !== null)) dart.assertFailed(null, I[0], 369, 12, "bucket != null");
      if (!dart.equals(bucket[_manager], this)) dart.assertFailed(null, I[0], 370, 12, "bucket._manager == this");
      if (!!this[_debugDoingUpdate]) dart.assertFailed(null, I[0], 371, 12, "!_debugDoingUpdate");
      this[_bucketsNeedingSerialization].remove(bucket);
    }
    [_doSerialization]() {
      if (!this[_serializationScheduled]) {
        return;
      }
      if (!dart.fn(() => {
        this[_debugDoingUpdate] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 379, 12, "() {\n      _debugDoingUpdate = true;\n      return true;\n    }()");
      this[_serializationScheduled] = false;
      for (let bucket of this[_bucketsNeedingSerialization]) {
        bucket.finalize();
      }
      this[_bucketsNeedingSerialization].clear();
      this.sendToEngine(this[_encodeRestorationData](dart.nullCheck(this[_rootBucket])[_rawData]));
      if (!dart.fn(() => {
        this[_debugDoingUpdate] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 391, 12, "() {\n      _debugDoingUpdate = false;\n      return true;\n    }()");
    }
    flushData() {
      if (!!this[_debugDoingUpdate]) dart.assertFailed(null, I[0], 415, 12, "!_debugDoingUpdate");
      if (dart.nullCheck(binding.SchedulerBinding.instance).hasScheduledFrame) {
        return;
      }
      this[_doSerialization]();
      if (!!this[_serializationScheduled]) dart.assertFailed(null, I[0], 420, 12, "!_serializationScheduled");
    }
  };
  (restoration.RestorationManager.new = function() {
    this[_rootBucket] = null;
    this[_pendingRootBucket] = null;
    this[_rootBucketIsValid] = false;
    this[_isReplacing] = false;
    this[_debugDoingUpdate] = false;
    this[_serializationScheduled] = false;
    this[_bucketsNeedingSerialization] = T$.LinkedHashSetOfRestorationBucket().new();
    restoration.RestorationManager.__proto__.new.call(this);
    this.initChannels();
  }).prototype = restoration.RestorationManager.prototype;
  dart.addTypeTests(restoration.RestorationManager);
  dart.addTypeCaches(restoration.RestorationManager);
  dart.setMethodSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getMethods(restoration.RestorationManager.__proto__),
    initChannels: dart.fnType(dart.void, []),
    [_getRootBucketFromEngine]: dart.fnType(async.Future$(dart.void), []),
    [_parseAndHandleRestorationUpdateFromEngine]: dart.fnType(dart.void, [dart.nullable(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)))]),
    handleRestorationUpdateFromEngine: dart.fnType(dart.void, [], {}, {data: dart.nullable(typed_data.Uint8List), enabled: core.bool}),
    sendToEngine: dart.fnType(async.Future$(dart.void), [typed_data.Uint8List]),
    [_methodHandler]: dart.fnType(async.Future$(dart.void), [message_codec.MethodCall]),
    [_decodeRestorationData]: dart.fnType(dart.nullable(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))), [dart.nullable(typed_data.Uint8List)]),
    [_encodeRestorationData]: dart.fnType(typed_data.Uint8List, [core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))]),
    scheduleSerializationFor: dart.fnType(dart.void, [restoration.RestorationBucket]),
    unscheduleSerializationFor: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_doSerialization]: dart.fnType(dart.void, []),
    flushData: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getGetters(restoration.RestorationManager.__proto__),
    rootBucket: async.Future$(dart.nullable(restoration.RestorationBucket)),
    isReplacing: core.bool
  }));
  dart.setLibraryUri(restoration.RestorationManager, I[1]);
  dart.setFieldSignature(restoration.RestorationManager, () => ({
    __proto__: dart.getFields(restoration.RestorationManager.__proto__),
    [_rootBucket]: dart.fieldType(dart.nullable(restoration.RestorationBucket)),
    [_pendingRootBucket]: dart.fieldType(dart.nullable(async.Completer$(dart.nullable(restoration.RestorationBucket)))),
    [_rootBucketIsValid]: dart.fieldType(core.bool),
    [_isReplacing]: dart.fieldType(core.bool),
    [_debugDoingUpdate]: dart.fieldType(core.bool),
    [_serializationScheduled]: dart.fieldType(core.bool),
    [_bucketsNeedingSerialization]: dart.finalFieldType(core.Set$(restoration.RestorationBucket))
  }));
  var _debugOwner = dart.privateName(restoration, "_debugOwner");
  var _claimedChildren = dart.privateName(restoration, "_claimedChildren");
  var _childrenToAdd = dart.privateName(restoration, "_childrenToAdd");
  var _needsSerialization = dart.privateName(restoration, "_needsSerialization");
  var _debugDisposed = dart.privateName(restoration, "_debugDisposed");
  var _parent = dart.privateName(restoration, "_parent");
  var _restorationId = dart.privateName(restoration, "_restorationId");
  var _rawChildren = dart.privateName(restoration, "_rawChildren");
  var _debugAssertNotDisposed = dart.privateName(restoration, "_debugAssertNotDisposed");
  var _rawValues = dart.privateName(restoration, "_rawValues");
  var _markNeedsSerialization = dart.privateName(restoration, "_markNeedsSerialization");
  var _removeChildData = dart.privateName(restoration, "_removeChildData");
  var _addChildData = dart.privateName(restoration, "_addChildData");
  var _recursivelyUpdateManager = dart.privateName(restoration, "_recursivelyUpdateManager");
  var _updateManager = dart.privateName(restoration, "_updateManager");
  var _visitChildren = dart.privateName(restoration, "_visitChildren");
  var _dropChild = dart.privateName(restoration, "_dropChild");
  var _debugAssertIntegrity = dart.privateName(restoration, "_debugAssertIntegrity");
  var _finalizeAddChildData = dart.privateName(restoration, "_finalizeAddChildData");
  restoration.RestorationBucket = class RestorationBucket extends core.Object {
    static ['_#empty#tearOff'](opts) {
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      return new restoration.RestorationBucket.empty({restorationId: restorationId, debugOwner: debugOwner});
    }
    static ['_#root#tearOff'](opts) {
      let manager = opts && 'manager' in opts ? opts.manager : null;
      let rawData = opts && 'rawData' in opts ? opts.rawData : null;
      return new restoration.RestorationBucket.root({manager: manager, rawData: rawData});
    }
    static ['_#child#tearOff'](opts) {
      let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
      let parent = opts && 'parent' in opts ? opts.parent : null;
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      return new restoration.RestorationBucket.child({restorationId: restorationId, parent: parent, debugOwner: debugOwner});
    }
    get debugOwner() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 588, 12, "_debugAssertNotDisposed()");
      return this[_debugOwner];
    }
    get isReplacing() {
      let t0, t0$;
      t0$ = (t0 = this[_manager], t0 == null ? null : t0.isReplacing);
      return t0$ == null ? false : t0$;
    }
    get restorationId() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 612, 12, "_debugAssertNotDisposed()");
      return this[_restorationId];
    }
    get [_rawChildren]() {
      return T$.MapOfObjectN$ObjectN().as(dart.nullCheck(this[_rawData][$putIfAbsent]("c", dart.fn(() => new (T$.LinkedMapOfObjectN$ObjectN()).new(), T$.VoidToMapOfObjectN$ObjectN()))));
    }
    get [_rawValues]() {
      return T$.MapOfObjectN$ObjectN().as(dart.nullCheck(this[_rawData][$putIfAbsent]("v", dart.fn(() => new (T$.LinkedMapOfObjectN$ObjectN()).new(), T$.VoidToMapOfObjectN$ObjectN()))));
    }
    read(P, restorationId) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 637, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[0], 638, 12, "restorationId != null");
      return dart.nullable(P).as(this[_rawValues][$_get](restorationId));
    }
    write(P, restorationId, value) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 659, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[0], 660, 12, "restorationId != null");
      if (!restoration.debugIsSerializableForRestoration(value)) dart.assertFailed(null, I[0], 661, 12, "debugIsSerializableForRestoration(value)");
      if (!dart.equals(this[_rawValues][$_get](restorationId), value) || !this[_rawValues][$containsKey](restorationId)) {
        this[_rawValues][$_set](restorationId, value);
        this[_markNeedsSerialization]();
      }
    }
    remove(P, restorationId) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 681, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[0], 682, 12, "restorationId != null");
      let needsUpdate = this[_rawValues][$containsKey](restorationId);
      let result = dart.nullable(P).as(this[_rawValues][$remove](restorationId));
      if (this[_rawValues][$isEmpty]) {
        this[_rawData][$remove]("v");
      }
      if (needsUpdate) {
        this[_markNeedsSerialization]();
      }
      return result;
    }
    contains(restorationId) {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 703, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[0], 704, 12, "restorationId != null");
      return this[_rawValues][$containsKey](restorationId);
    }
    claimChild(restorationId, opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 739, 12, "_debugAssertNotDisposed()");
      if (!(restorationId !== null)) dart.assertFailed(null, I[0], 740, 12, "restorationId != null");
      if (this[_claimedChildren][$containsKey](restorationId) || !this[_rawChildren][$containsKey](restorationId)) {
        let child = new restoration.RestorationBucket.empty({debugOwner: debugOwner, restorationId: restorationId});
        this.adoptChild(child);
        return child;
      }
      if (!(this[_rawChildren][$_get](restorationId) != null)) dart.assertFailed(null, I[0], 766, 12, "_rawChildren[restorationId] != null");
      let child = new restoration.RestorationBucket.child({restorationId: restorationId, parent: this, debugOwner: debugOwner});
      this[_claimedChildren][$_set](restorationId, child);
      return child;
    }
    adoptChild(child) {
      let t0;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 789, 12, "_debugAssertNotDisposed()");
      if (!(child !== null)) dart.assertFailed(null, I[0], 790, 12, "child != null");
      if (!dart.equals(child[_parent], this)) {
        t0 = child[_parent];
        t0 == null ? null : t0[_removeChildData](child);
        child[_parent] = this;
        this[_addChildData](child);
        if (!dart.equals(child[_manager], this[_manager])) {
          this[_recursivelyUpdateManager](child);
        }
      }
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[0], 799, 12, "child._parent == this");
      if (!dart.equals(child[_manager], this[_manager])) dart.assertFailed(null, I[0], 800, 12, "child._manager == _manager");
    }
    [_dropChild](child) {
      if (!(child !== null)) dart.assertFailed(null, I[0], 804, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[0], 805, 12, "child._parent == this");
      this[_removeChildData](child);
      child[_parent] = null;
      if (child[_manager] != null) {
        child[_updateManager](null);
        child[_visitChildren](dart.bind(this, _recursivelyUpdateManager));
      }
    }
    [_markNeedsSerialization]() {
      let t0;
      if (!this[_needsSerialization]) {
        this[_needsSerialization] = true;
        t0 = this[_manager];
        t0 == null ? null : t0.scheduleSerializationFor(this);
      }
    }
    finalize() {
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 828, 12, "_debugAssertNotDisposed()");
      if (!this[_needsSerialization]) dart.assertFailed(null, I[0], 829, 12, "_needsSerialization");
      this[_needsSerialization] = false;
      if (!this[_debugAssertIntegrity]()) dart.assertFailed(null, I[0], 831, 12, "_debugAssertIntegrity()");
    }
    [_recursivelyUpdateManager](bucket) {
      bucket[_updateManager](this[_manager]);
      bucket[_visitChildren](dart.bind(this, _recursivelyUpdateManager));
    }
    [_updateManager](newManager) {
      let t0;
      if (dart.equals(this[_manager], newManager)) {
        return;
      }
      if (this[_needsSerialization]) {
        t0 = this[_manager];
        t0 == null ? null : t0.unscheduleSerializationFor(this);
      }
      this[_manager] = newManager;
      if (this[_needsSerialization] && this[_manager] != null) {
        this[_needsSerialization] = false;
        this[_markNeedsSerialization]();
      }
    }
    [_debugAssertIntegrity]() {
      if (!dart.fn(() => {
        if (this[_childrenToAdd][$isEmpty]) {
          return true;
        }
        let error = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Multiple owners claimed child RestorationBuckets with the same IDs."), new assertions.ErrorDescription.new("The following IDs were claimed multiple times from the parent " + dart.str(this) + ":")]);
        for (let child of this[_childrenToAdd][$entries]) {
          let id = child.key;
          let buckets = child.value;
          if (!buckets[$isNotEmpty]) dart.assertFailed(null, I[0], 865, 16, "buckets.isNotEmpty");
          if (!this[_claimedChildren][$containsKey](id)) dart.assertFailed(null, I[0], 866, 16, "_claimedChildren.containsKey(id)");
          error[$addAll]((() => {
            let t0 = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new(" * \"" + id + "\" was claimed by:")]);
            t0[$addAll](buckets[$map](diagnostics.DiagnosticsNode, dart.fn(bucket => new assertions.ErrorDescription.new("   * " + dart.str(bucket.debugOwner)), T$.RestorationBucketToErrorDescription())));
            t0.push(new assertions.ErrorDescription.new("   * " + dart.str(dart.nullCheck(this[_claimedChildren][$_get](id)).debugOwner) + " (current owner)"));
            return t0;
          })());
        }
        dart.throw(new assertions.FlutterError.fromParts(error));
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 854, 12, "() {\n      if (_childrenToAdd.isEmpty) {\n        return true;\n      }\n      final List<DiagnosticsNode> error = <DiagnosticsNode>[\n        ErrorSummary('Multiple owners claimed child RestorationBuckets with the same IDs.'),\n        ErrorDescription('The following IDs were claimed multiple times from the parent $this:'),\n      ];\n      for (final MapEntry<String, List<RestorationBucket>> child in _childrenToAdd.entries) {\n        final String id = child.key;\n        final List<RestorationBucket> buckets = child.value;\n        assert(buckets.isNotEmpty);\n        assert(_claimedChildren.containsKey(id));\n        error.addAll(<DiagnosticsNode>[\n          ErrorDescription(' * \"$id\" was claimed by:'),\n          ...buckets.map((RestorationBucket bucket) => ErrorDescription('   * ${bucket.debugOwner}')),\n          ErrorDescription('   * ${_claimedChildren[id]!.debugOwner} (current owner)'),\n        ]);\n      }\n      throw FlutterError.fromParts(error);\n    }()");
      return true;
    }
    [_removeChildData](child) {
      let t1, t1$;
      if (!(child !== null)) dart.assertFailed(null, I[0], 879, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[0], 880, 12, "child._parent == this");
      if (dart.equals(this[_claimedChildren][$remove](child.restorationId), child)) {
        this[_rawChildren][$remove](child.restorationId);
        let pendingChildren = this[_childrenToAdd][$_get](child.restorationId);
        if (pendingChildren != null) {
          let toAdd = pendingChildren[$removeLast]();
          this[_finalizeAddChildData](toAdd);
          if (pendingChildren[$isEmpty]) {
            this[_childrenToAdd][$remove](child.restorationId);
          }
        }
        if (this[_rawChildren][$isEmpty]) {
          this[_rawData][$remove]("c");
        }
        this[_markNeedsSerialization]();
        return;
      }
      t1 = this[_childrenToAdd][$_get](child.restorationId);
      t1 == null ? null : t1[$remove](child);
      if ((t1$ = this[_childrenToAdd][$_get](child.restorationId), t1$ == null ? null : t1$[$isEmpty]) === true) {
        this[_childrenToAdd][$remove](child.restorationId);
      }
    }
    [_addChildData](child) {
      if (!(child !== null)) dart.assertFailed(null, I[0], 904, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[0], 905, 12, "child._parent == this");
      if (this[_claimedChildren][$containsKey](child.restorationId)) {
        this[_childrenToAdd][$putIfAbsent](child.restorationId, dart.fn(() => T$.JSArrayOfRestorationBucket().of([]), T$.VoidToListOfRestorationBucket()))[$add](child);
        this[_markNeedsSerialization]();
        return;
      }
      this[_finalizeAddChildData](child);
      this[_markNeedsSerialization]();
    }
    [_finalizeAddChildData](child) {
      if (!(this[_claimedChildren][$_get](child.restorationId) == null)) dart.assertFailed(null, I[0], 919, 12, "_claimedChildren[child.restorationId] == null");
      if (!(this[_rawChildren][$_get](child.restorationId) == null)) dart.assertFailed(null, I[0], 920, 12, "_rawChildren[child.restorationId] == null");
      this[_claimedChildren][$_set](child.restorationId, child);
      this[_rawChildren][$_set](child.restorationId, child[_rawData]);
    }
    [_visitChildren](visitor, opts) {
      let concurrentModification = opts && 'concurrentModification' in opts ? opts.concurrentModification : false;
      let children = this[_claimedChildren][$values][$followedBy](this[_childrenToAdd][$values][$expand](restoration.RestorationBucket, dart.fn(buckets => buckets, T$.ListOfRestorationBucketToListOfRestorationBucket())));
      if (concurrentModification) {
        children = children[$toList]({growable: false});
      }
      children[$forEach](visitor);
    }
    rename(newRestorationId) {
      let t1, t1$;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 946, 12, "_debugAssertNotDisposed()");
      if (!(newRestorationId !== null)) dart.assertFailed(null, I[0], 947, 12, "newRestorationId != null");
      if (newRestorationId === this.restorationId) {
        return;
      }
      t1 = this[_parent];
      t1 == null ? null : t1[_removeChildData](this);
      this[_restorationId] = newRestorationId;
      t1$ = this[_parent];
      t1$ == null ? null : t1$[_addChildData](this);
    }
    dispose() {
      let t1;
      if (!this[_debugAssertNotDisposed]()) dart.assertFailed(null, I[0], 969, 12, "_debugAssertNotDisposed()");
      this[_visitChildren](dart.bind(this, _dropChild), {concurrentModification: true});
      this[_claimedChildren][$clear]();
      this[_childrenToAdd][$clear]();
      t1 = this[_parent];
      t1 == null ? null : t1[_removeChildData](this);
      this[_parent] = null;
      this[_updateManager](null);
      this[_debugDisposed] = true;
    }
    toString() {
      return object.objectRuntimeType(this, "RestorationBucket") + "(restorationId: " + this.restorationId + ", owner: " + dart.str(this.debugOwner) + ")";
    }
    [_debugAssertNotDisposed]() {
      if (!dart.fn(() => {
        if (this[_debugDisposed]) {
          dart.throw(assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used."));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 984, 12, "() {\n      if (_debugDisposed) {\n        throw FlutterError(\n            'A $runtimeType was used after being disposed.\\n'\n            'Once you have called dispose() on a $runtimeType, it can no longer be used.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
  };
  (restoration.RestorationBucket.empty = function(opts) {
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (T$.IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (T$.IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    this[_parent] = null;
    this[_manager] = null;
    if (!(restorationId !== null)) dart.assertFailed(null, I[0], 505, 15, "restorationId != null");
    this[_restorationId] = restorationId;
    this[_rawData] = new (T$.IdentityMapOfString$ObjectN()).new();
    if (!dart.fn(() => {
      this[_debugOwner] = debugOwner;
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 508, 12, "() {\n      _debugOwner = debugOwner;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  (restoration.RestorationBucket.root = function(opts) {
    let t0;
    let manager = opts && 'manager' in opts ? opts.manager : null;
    let rawData = opts && 'rawData' in opts ? opts.rawData : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (T$.IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (T$.IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    this[_parent] = null;
    if (!(manager !== null)) dart.assertFailed(null, I[0], 540, 15, "manager != null");
    this[_manager] = manager;
    this[_rawData] = (t0 = rawData, t0 == null ? new (T$.LinkedMapOfObjectN$ObjectN()).new() : t0);
    this[_restorationId] = "root";
    if (!dart.fn(() => {
      this[_debugOwner] = manager;
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 544, 12, "() {\n      _debugOwner = manager;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  (restoration.RestorationBucket.child = function(opts) {
    let restorationId = opts && 'restorationId' in opts ? opts.restorationId : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_debugOwner] = null;
    this[_claimedChildren] = new (T$.IdentityMapOfString$RestorationBucket()).new();
    this[_childrenToAdd] = new (T$.IdentityMapOfString$ListOfRestorationBucket()).new();
    this[_needsSerialization] = false;
    this[_debugDisposed] = false;
    if (!(restorationId !== null)) dart.assertFailed(null, I[0], 564, 15, "restorationId != null");
    if (!(parent !== null)) dart.assertFailed(null, I[0], 565, 15, "parent != null");
    if (!(parent[_rawChildren][$_get](restorationId) != null)) dart.assertFailed(null, I[0], 566, 15, "parent._rawChildren[restorationId] != null");
    this[_manager] = parent[_manager];
    this[_parent] = parent;
    this[_rawData] = T$.MapOfObjectN$ObjectN().as(dart.nullCheck(parent[_rawChildren][$_get](restorationId)));
    this[_restorationId] = restorationId;
    if (!dart.fn(() => {
      this[_debugOwner] = debugOwner;
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 571, 12, "() {\n      _debugOwner = debugOwner;\n      return true;\n    }()");
  }).prototype = restoration.RestorationBucket.prototype;
  dart.addTypeTests(restoration.RestorationBucket);
  dart.addTypeCaches(restoration.RestorationBucket);
  dart.setMethodSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getMethods(restoration.RestorationBucket.__proto__),
    read: dart.gFnType(P => [dart.nullable(P), [core.String]], P => [dart.nullable(core.Object)]),
    write: dart.gFnType(P => [dart.void, [core.String, P]], P => [dart.nullable(core.Object)]),
    remove: dart.gFnType(P => [dart.nullable(P), [core.String]], P => [dart.nullable(core.Object)]),
    contains: dart.fnType(core.bool, [core.String]),
    claimChild: dart.fnType(restoration.RestorationBucket, [core.String], {}, {debugOwner: dart.nullable(core.Object)}),
    adoptChild: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_dropChild]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_markNeedsSerialization]: dart.fnType(dart.void, []),
    finalize: dart.fnType(dart.void, []),
    [_recursivelyUpdateManager]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_updateManager]: dart.fnType(dart.void, [dart.nullable(restoration.RestorationManager)]),
    [_debugAssertIntegrity]: dart.fnType(core.bool, []),
    [_removeChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_addChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_finalizeAddChildData]: dart.fnType(dart.void, [restoration.RestorationBucket]),
    [_visitChildren]: dart.fnType(dart.void, [dart.fnType(dart.void, [restoration.RestorationBucket])], {concurrentModification: core.bool}, {}),
    rename: dart.fnType(dart.void, [core.String]),
    dispose: dart.fnType(dart.void, []),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getGetters(restoration.RestorationBucket.__proto__),
    debugOwner: dart.nullable(core.Object),
    isReplacing: core.bool,
    restorationId: core.String,
    [_rawChildren]: core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)),
    [_rawValues]: core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))
  }));
  dart.setLibraryUri(restoration.RestorationBucket, I[1]);
  dart.setFieldSignature(restoration.RestorationBucket, () => ({
    __proto__: dart.getFields(restoration.RestorationBucket.__proto__),
    [_rawData]: dart.finalFieldType(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))),
    [_debugOwner]: dart.fieldType(dart.nullable(core.Object)),
    [_manager]: dart.fieldType(dart.nullable(restoration.RestorationManager)),
    [_parent]: dart.fieldType(dart.nullable(restoration.RestorationBucket)),
    [_restorationId]: dart.fieldType(core.String),
    [_claimedChildren]: dart.finalFieldType(core.Map$(core.String, restoration.RestorationBucket)),
    [_childrenToAdd]: dart.finalFieldType(core.Map$(core.String, core.List$(restoration.RestorationBucket))),
    [_needsSerialization]: dart.fieldType(core.bool),
    [_debugDisposed]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(restoration.RestorationBucket, () => ['_childrenMapKey', '_valuesMapKey']);
  dart.defineExtensionMethods(restoration.RestorationBucket, ['toString']);
  dart.defineLazy(restoration.RestorationBucket, {
    /*restoration.RestorationBucket._childrenMapKey*/get _childrenMapKey() {
      return "c";
    },
    /*restoration.RestorationBucket._valuesMapKey*/get _valuesMapKey() {
      return "v";
    }
  }, false);
  restoration.debugIsSerializableForRestoration = function debugIsSerializableForRestoration(object) {
    let result = false;
    if (!dart.fn(() => {
      try {
        (C[0] || CT.C0).encodeMessage(object);
        result = true;
      } catch (e) {
        let error = dart.getThrown(e);
        if (core.Object.is(error)) {
          result = false;
        } else
          throw e;
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1005, 10, "() {\n    try {\n      const StandardMessageCodec().encodeMessage(object);\n      result = true;\n    } catch (error) {\n      // This is only used in asserts, so reporting the exception isn't\n      // particularly useful, since the assert itself will likely fail.\n      result = false;\n    }\n    return true;\n  }()");
    return result;
  };
  var name$ = dart.privateName(platform_channel, "BasicMessageChannel.name");
  var codec$ = dart.privateName(platform_channel, "BasicMessageChannel.codec");
  var _binaryMessenger = dart.privateName(platform_channel, "BasicMessageChannel._binaryMessenger");
  var _binaryMessenger$ = dart.privateName(platform_channel, "_binaryMessenger");
  const _is_BasicMessageChannel_default = Symbol('_is_BasicMessageChannel_default');
  platform_channel.BasicMessageChannel$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$FutureOfT = () => (__t$FutureOfT = dart.constFn(async.Future$(T)))();
    var __t$TNToFutureOfT = () => (__t$TNToFutureOfT = dart.constFn(dart.fnType(__t$FutureOfT(), [__t$TN()])))();
    var __t$TNToNFutureOfT = () => (__t$TNToNFutureOfT = dart.constFn(dart.nullable(__t$TNToFutureOfT())))();
    class BasicMessageChannel extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get codec() {
        return this[codec$];
      }
      set codec(value) {
        super.codec = value;
      }
      get [_binaryMessenger$]() {
        return this[_binaryMessenger];
      }
      set [_binaryMessenger$](value) {
        super[_binaryMessenger$] = value;
      }
      static ['_#new#tearOff'](T, name, codec, opts) {
        let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
        return new (platform_channel.BasicMessageChannel$(T)).new(name, codec, {binaryMessenger: binaryMessenger});
      }
      get binaryMessenger() {
        let t2;
        t2 = this[_binaryMessenger$];
        return t2 == null ? dart.nullCheck(binding$0.ServicesBinding.instance).defaultBinaryMessenger : t2;
      }
      send(message) {
        T.as(message);
        return async.async(__t$TN(), (function* send() {
          return this.codec.decodeMessage(yield this.binaryMessenger.send(this.name, this.codec.encodeMessage(message)));
        }).bind(this));
      }
      setMessageHandler(handler) {
        __t$TNToNFutureOfT().as(handler);
        if (handler == null) {
          this.binaryMessenger.setMessageHandler(this.name, null);
        } else {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(message => async.async(T$.ByteDataN(), (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), T$.ByteDataNToFutureOfByteDataN()));
        }
      }
    }
    (BasicMessageChannel.new = function(name, codec, opts) {
      let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
      this[name$] = name;
      this[codec$] = codec;
      if (!(name !== null)) dart.assertFailed(null, I[2], 41, 16, "name != null");
      if (!(codec !== null)) dart.assertFailed(null, I[2], 42, 16, "codec != null");
      this[_binaryMessenger] = binaryMessenger;
      ;
    }).prototype = BasicMessageChannel.prototype;
    dart.addTypeTests(BasicMessageChannel);
    BasicMessageChannel.prototype[_is_BasicMessageChannel_default] = true;
    dart.addTypeCaches(BasicMessageChannel);
    dart.setMethodSignature(BasicMessageChannel, () => ({
      __proto__: dart.getMethods(BasicMessageChannel.__proto__),
      send: dart.fnType(async.Future$(dart.nullable(T)), [dart.nullable(core.Object)]),
      setMessageHandler: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(BasicMessageChannel, () => ({
      __proto__: dart.getGetters(BasicMessageChannel.__proto__),
      binaryMessenger: binary_messenger.BinaryMessenger
    }));
    dart.setLibraryUri(BasicMessageChannel, I[3]);
    dart.setFieldSignature(BasicMessageChannel, () => ({
      __proto__: dart.getFields(BasicMessageChannel.__proto__),
      name: dart.finalFieldType(core.String),
      codec: dart.finalFieldType(message_codec.MessageCodec$(T)),
      [_binaryMessenger$]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
    }));
    return BasicMessageChannel;
  });
  platform_channel.BasicMessageChannel = platform_channel.BasicMessageChannel$();
  dart.addTypeTests(platform_channel.BasicMessageChannel, _is_BasicMessageChannel_default);
  var name$0 = dart.privateName(platform_channel, "MethodChannel.name");
  var codec$0 = dart.privateName(platform_channel, "MethodChannel.codec");
  var _binaryMessenger$0 = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var _invokeMethod = dart.privateName(platform_channel, "_invokeMethod");
  var _handleAsMethodCall = dart.privateName(platform_channel, "_handleAsMethodCall");
  platform_channel.MethodChannel = class MethodChannel extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$0];
    }
    set codec(value) {
      super.codec = value;
    }
    get [_binaryMessenger$]() {
      return this[_binaryMessenger$0];
    }
    set [_binaryMessenger$](value) {
      super[_binaryMessenger$] = value;
    }
    static ['_#new#tearOff'](name, codec = C[1] || CT.C1, binaryMessenger = null) {
      return new platform_channel.MethodChannel.new(name, codec, binaryMessenger);
    }
    get binaryMessenger() {
      let t2;
      if (!(this[_binaryMessenger$] != null || binding$0.ServicesBinding.instance != null)) dart.assertFailed("Cannot use this MethodChannel before the binary messenger has been initialized. " + "This happens when you invoke platform methods before the WidgetsFlutterBinding " + "has been initialized. You can fix this by either calling WidgetsFlutterBinding.ensureInitialized() " + "before this or by passing a custom BinaryMessenger instance to MethodChannel().", I[2], 134, 7, "_binaryMessenger != null || ServicesBinding.instance != null");
      t2 = this[_binaryMessenger$];
      return t2 == null ? dart.nullCheck(binding$0.ServicesBinding.instance).defaultBinaryMessenger : t2;
    }
    [_invokeMethod](T, method, opts) {
      let missingOk = opts && 'missingOk' in opts ? opts.missingOk : null;
      let $arguments = opts && 'arguments' in opts ? opts.arguments : null;
      return async.async(dart.nullable(T), (function* _invokeMethod() {
        if (!(method !== null)) dart.assertFailed(null, I[2], 166, 12, "method != null");
        let result = (yield this.binaryMessenger.send(this.name, this.codec.encodeMethodCall(new message_codec.MethodCall.new(method, $arguments))));
        if (result == null) {
          if (missingOk) {
            return null;
          }
          dart.throw(new message_codec.MissingPluginException.new("No implementation found for method " + method + " on channel " + this.name));
        }
        return dart.nullable(T).as(this.codec.decodeEnvelope(result));
      }).bind(this));
    }
    invokeMethod(T, method, $arguments = null) {
      return this[_invokeMethod](T, method, {missingOk: false, arguments: $arguments});
    }
    invokeListMethod(T, method, $arguments = null) {
      return async.async(dart.nullable(core.List$(T)), (function* invokeListMethod() {
        let t2;
        let result = (yield this.invokeMethod(core.List, method, $arguments));
        t2 = result;
        return t2 == null ? null : t2[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, $arguments = null) {
      return async.async(dart.nullable(core.Map$(K, V)), (function* invokeMapMethod() {
        let t2;
        let result = (yield this.invokeMethod(core.Map, method, $arguments));
        t2 = result;
        return t2 == null ? null : t2[$cast](K, V);
      }).bind(this));
    }
    setMethodCallHandler(handler) {
      if (!(this[_binaryMessenger$] != null || binding$0.ServicesBinding.instance != null)) dart.assertFailed("Cannot set the method call handler before the binary messenger has been initialized. " + "This happens when you call setMethodCallHandler() before the WidgetsFlutterBinding " + "has been initialized. You can fix this by either calling WidgetsFlutterBinding.ensureInitialized() " + "before this or by passing a custom BinaryMessenger instance to MethodChannel().", I[2], 397, 7, "_binaryMessenger != null || ServicesBinding.instance != null");
      this.binaryMessenger.setMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), T$.ByteDataNToFutureOfByteDataN()));
    }
    [_handleAsMethodCall](message, handler) {
      return async.async(T$.ByteDataN(), (function* _handleAsMethodCall() {
        let call = this.codec.decodeMethodCall(message);
        try {
          return this.codec.encodeSuccessEnvelope(yield handler(call));
        } catch (e$) {
          let ex = dart.getThrown(e$);
          if (message_codec.PlatformException.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: e.code, message: e.message, details: e.details});
          } else if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else if (core.Object.is(ex)) {
            let error = ex;
            return this.codec.encodeErrorEnvelope({code: "error", message: error[$toString]()});
          } else
            throw e$;
        }
      }).bind(this));
    }
  };
  (platform_channel.MethodChannel.new = function(name, codec = C[1] || CT.C1, binaryMessenger = null) {
    this[name$0] = name;
    this[codec$0] = codec;
    if (!(name !== null)) dart.assertFailed(null, I[2], 119, 16, "name != null");
    if (!(codec !== null)) dart.assertFailed(null, I[2], 120, 16, "codec != null");
    this[_binaryMessenger$0] = binaryMessenger;
    ;
  }).prototype = platform_channel.MethodChannel.prototype;
  dart.addTypeTests(platform_channel.MethodChannel);
  dart.addTypeCaches(platform_channel.MethodChannel);
  dart.setMethodSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.MethodChannel.__proto__),
    [_invokeMethod]: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], {arguments: dart.dynamic}, {missingOk: core.bool}], T => [dart.nullable(core.Object)]),
    invokeMethod: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)]),
    invokeListMethod: dart.gFnType(T => [async.Future$(dart.nullable(core.List$(T))), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(dart.nullable(core.Map$(K, V))), [core.String], [dart.dynamic]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    setMethodCallHandler: dart.fnType(dart.void, [dart.nullable(dart.fnType(async.Future, [message_codec.MethodCall]))]),
    [_handleAsMethodCall]: dart.fnType(async.Future$(dart.nullable(typed_data.ByteData)), [dart.nullable(typed_data.ByteData), dart.fnType(async.Future, [message_codec.MethodCall])])
  }));
  dart.setGetterSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getGetters(platform_channel.MethodChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.MethodChannel, I[3]);
  dart.setFieldSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getFields(platform_channel.MethodChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger$]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
  }));
  const _invokeMethod$ = Symbol("_invokeMethod");
  platform_channel.OptionalMethodChannel = class OptionalMethodChannel extends platform_channel.MethodChannel {
    static ['_#new#tearOff'](name, codec = C[1] || CT.C1, binaryMessenger = null) {
      return new platform_channel.OptionalMethodChannel.new(name, codec, binaryMessenger);
    }
    invokeMethod(T, method, $arguments = null) {
      return async.async(dart.nullable(T), (function* invokeMethod() {
        return this[_invokeMethod$](T, method, {missingOk: true, arguments: $arguments});
      }).bind(this));
    }
    [_invokeMethod$](T, method, opts) {
      return super[_invokeMethod](T, method, opts);
    }
  };
  (platform_channel.OptionalMethodChannel.new = function(name, codec = C[1] || CT.C1, binaryMessenger = null) {
    platform_channel.OptionalMethodChannel.__proto__.new.call(this, name, codec, binaryMessenger);
    ;
  }).prototype = platform_channel.OptionalMethodChannel.prototype;
  dart.addTypeTests(platform_channel.OptionalMethodChannel);
  dart.addTypeCaches(platform_channel.OptionalMethodChannel);
  dart.setMethodSignature(platform_channel.OptionalMethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.OptionalMethodChannel.__proto__),
    invokeMethod: dart.gFnType(T => [async.Future$(dart.nullable(T)), [core.String], [dart.dynamic]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(platform_channel.OptionalMethodChannel, I[3]);
  var name$1 = dart.privateName(platform_channel, "EventChannel.name");
  var codec$1 = dart.privateName(platform_channel, "EventChannel.codec");
  var _binaryMessenger$1 = dart.privateName(platform_channel, "EventChannel._binaryMessenger");
  platform_channel.EventChannel = class EventChannel extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$1];
    }
    set codec(value) {
      super.codec = value;
    }
    get [_binaryMessenger$]() {
      return this[_binaryMessenger$1];
    }
    set [_binaryMessenger$](value) {
      super[_binaryMessenger$] = value;
    }
    static ['_#new#tearOff'](name, codec = C[1] || CT.C1, binaryMessenger = null) {
      return new platform_channel.EventChannel.new(name, codec, binaryMessenger);
    }
    get binaryMessenger() {
      let t4;
      t4 = this[_binaryMessenger$];
      return t4 == null ? dart.nullCheck(binding$0.ServicesBinding.instance).defaultBinaryMessenger : t4;
    }
    receiveBroadcastStream($arguments = null) {
      let methodChannel = new platform_channel.MethodChannel.new(this.name, this.codec);
      let controller = null;
      function controller$35get() {
        let t5;
        t5 = controller;
        return t5 == null ? dart.throw(new _internal.LateError.localNI("controller")) : t5;
      }
      dart.fn(controller$35get, T$.VoidToStreamController());
      function controller$35set(t6) {
        return controller = t6;
      }
      dart.fn(controller$35set, T$.StreamControllerTodynamic());
      controller$35set(async.StreamController.broadcast({onListen: dart.fn(() => async.async(dart.void, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(reply => async.async(core.Null, (function*() {
            if (reply == null) {
              controller$35get().close();
            } else {
              try {
                controller$35get().add(this.codec.decodeEnvelope(reply));
              } catch (e$) {
                let e = dart.getThrown(e$);
                if (message_codec.PlatformException.is(e)) {
                  controller$35get().addError(e);
                } else
                  throw e$;
              }
            }
            return null;
          }).bind(this)), T$.ByteDataNToFutureOfNull()));
          try {
            yield methodChannel.invokeMethod(dart.void, "listen", $arguments);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while activating platform stream on channel " + this.name)}));
            } else
              throw e;
          }
        }).bind(this)), T$.VoidToFutureOfvoid()), onCancel: dart.fn(() => async.async(dart.void, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, null);
          try {
            yield methodChannel.invokeMethod(dart.void, "cancel", $arguments);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while de-activating platform stream on channel " + this.name)}));
            } else
              throw e;
          }
        }).bind(this)), T$.VoidToFutureOfvoid())}));
      return controller$35get().stream;
    }
  };
  (platform_channel.EventChannel.new = function(name, codec = C[1] || CT.C1, binaryMessenger = null) {
    this[name$1] = name;
    this[codec$1] = codec;
    if (!(name !== null)) dart.assertFailed(null, I[2], 472, 16, "name != null");
    if (!(codec !== null)) dart.assertFailed(null, I[2], 473, 16, "codec != null");
    this[_binaryMessenger$1] = binaryMessenger;
    ;
  }).prototype = platform_channel.EventChannel.prototype;
  dart.addTypeTests(platform_channel.EventChannel);
  dart.addTypeCaches(platform_channel.EventChannel);
  dart.setMethodSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getMethods(platform_channel.EventChannel.__proto__),
    receiveBroadcastStream: dart.fnType(async.Stream, [], [dart.dynamic])
  }));
  dart.setGetterSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getGetters(platform_channel.EventChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.EventChannel, I[3]);
  dart.setFieldSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getFields(platform_channel.EventChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger$]: dart.finalFieldType(dart.nullable(binary_messenger.BinaryMessenger))
  }));
  const _is_MessageCodec_default = Symbol('_is_MessageCodec_default');
  message_codec.MessageCodec$ = dart.generic(T => {
    class MessageCodec extends core.Object {}
    (MessageCodec.new = function() {
      ;
    }).prototype = MessageCodec.prototype;
    dart.addTypeTests(MessageCodec);
    MessageCodec.prototype[_is_MessageCodec_default] = true;
    dart.addTypeCaches(MessageCodec);
    dart.setLibraryUri(MessageCodec, I[4]);
    return MessageCodec;
  });
  message_codec.MessageCodec = message_codec.MessageCodec$();
  dart.addTypeTests(message_codec.MessageCodec, _is_MessageCodec_default);
  var method$ = dart.privateName(message_codec, "MethodCall.method");
  var $arguments$ = dart.privateName(message_codec, "MethodCall.arguments");
  message_codec.MethodCall = class MethodCall extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get arguments() {
      return this[$arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    static ['_#new#tearOff'](method, $arguments = null) {
      return new message_codec.MethodCall.new(method, $arguments);
    }
    toString() {
      return object.objectRuntimeType(this, "MethodCall") + "(" + this.method + ", " + dart.str(this.arguments) + ")";
    }
  };
  (message_codec.MethodCall.new = function(method, $arguments = null) {
    this[method$] = method;
    this[$arguments$] = $arguments;
    if (!(method !== null)) dart.assertFailed(null, I[5], 41, 14, "method != null");
    ;
  }).prototype = message_codec.MethodCall.prototype;
  dart.addTypeTests(message_codec.MethodCall);
  dart.addTypeCaches(message_codec.MethodCall);
  dart.setLibraryUri(message_codec.MethodCall, I[4]);
  dart.setFieldSignature(message_codec.MethodCall, () => ({
    __proto__: dart.getFields(message_codec.MethodCall.__proto__),
    method: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.MethodCall, ['toString']);
  message_codec.MethodCodec = class MethodCodec extends core.Object {};
  (message_codec.MethodCodec.new = function() {
    ;
  }).prototype = message_codec.MethodCodec.prototype;
  dart.addTypeTests(message_codec.MethodCodec);
  dart.addTypeCaches(message_codec.MethodCodec);
  dart.setLibraryUri(message_codec.MethodCodec, I[4]);
  var code$ = dart.privateName(message_codec, "PlatformException.code");
  var message$ = dart.privateName(message_codec, "PlatformException.message");
  var details$ = dart.privateName(message_codec, "PlatformException.details");
  var stacktrace$ = dart.privateName(message_codec, "PlatformException.stacktrace");
  message_codec.PlatformException = class PlatformException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    get stacktrace() {
      return this[stacktrace$];
    }
    set stacktrace(value) {
      super.stacktrace = value;
    }
    static ['_#new#tearOff'](opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let stacktrace = opts && 'stacktrace' in opts ? opts.stacktrace : null;
      return new message_codec.PlatformException.new({code: code, message: message, details: details, stacktrace: stacktrace});
    }
    toString() {
      return "PlatformException(" + this.code + ", " + dart.str(this.message) + ", " + dart.str(this.details) + ", " + dart.str(this.stacktrace) + ")";
    }
  };
  (message_codec.PlatformException.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let details = opts && 'details' in opts ? opts.details : null;
    let stacktrace = opts && 'stacktrace' in opts ? opts.stacktrace : null;
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    this[stacktrace$] = stacktrace;
    if (!(code !== null)) dart.assertFailed(null, I[5], 120, 15, "code != null");
    ;
  }).prototype = message_codec.PlatformException.prototype;
  dart.addTypeTests(message_codec.PlatformException);
  dart.addTypeCaches(message_codec.PlatformException);
  message_codec.PlatformException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.PlatformException, I[4]);
  dart.setFieldSignature(message_codec.PlatformException, () => ({
    __proto__: dart.getFields(message_codec.PlatformException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(dart.nullable(core.String)),
    details: dart.finalFieldType(dart.dynamic),
    stacktrace: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(message_codec.PlatformException, ['toString']);
  var message$0 = dart.privateName(message_codec, "MissingPluginException.message");
  message_codec.MissingPluginException = class MissingPluginException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    static ['_#new#tearOff'](message = null) {
      return new message_codec.MissingPluginException.new(message);
    }
    toString() {
      return "MissingPluginException(" + dart.str(this.message) + ")";
    }
  };
  (message_codec.MissingPluginException.new = function(message = null) {
    this[message$0] = message;
    ;
  }).prototype = message_codec.MissingPluginException.prototype;
  dart.addTypeTests(message_codec.MissingPluginException);
  dart.addTypeCaches(message_codec.MissingPluginException);
  message_codec.MissingPluginException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.MissingPluginException, I[4]);
  dart.setFieldSignature(message_codec.MissingPluginException, () => ({
    __proto__: dart.getFields(message_codec.MissingPluginException.__proto__),
    message: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(message_codec.MissingPluginException, ['toString']);
  message_codecs.BinaryCodec = class BinaryCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.BinaryCodec.new();
    }
    decodeMessage(message) {
      return message;
    }
    encodeMessage(message) {
      T$.ByteDataN().as(message);
      return message;
    }
  };
  (message_codecs.BinaryCodec.new = function() {
    ;
  }).prototype = message_codecs.BinaryCodec.prototype;
  dart.addTypeTests(message_codecs.BinaryCodec);
  dart.addTypeCaches(message_codecs.BinaryCodec);
  message_codecs.BinaryCodec[dart.implements] = () => [message_codec.MessageCodec$(typed_data.ByteData)];
  dart.setMethodSignature(message_codecs.BinaryCodec, () => ({
    __proto__: dart.getMethods(message_codecs.BinaryCodec.__proto__),
    decodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(typed_data.ByteData)]),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(message_codecs.BinaryCodec, I[6]);
  message_codecs.StringCodec = class StringCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.StringCodec.new();
    }
    decodeMessage(message) {
      if (message == null) return null;
      return convert.utf8.decoder.convert(message[$buffer][$asUint8List](message[$offsetInBytes], message[$lengthInBytes]));
    }
    encodeMessage(message) {
      T$.StringN().as(message);
      if (message == null) return null;
      let encoded = convert.utf8.encoder.convert(message);
      return encoded[$buffer][$asByteData]();
    }
  };
  (message_codecs.StringCodec.new = function() {
    ;
  }).prototype = message_codecs.StringCodec.prototype;
  dart.addTypeTests(message_codecs.StringCodec);
  dart.addTypeCaches(message_codecs.StringCodec);
  message_codecs.StringCodec[dart.implements] = () => [message_codec.MessageCodec$(core.String)];
  dart.setMethodSignature(message_codecs.StringCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StringCodec.__proto__),
    decodeMessage: dart.fnType(dart.nullable(core.String), [dart.nullable(typed_data.ByteData)]),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(message_codecs.StringCodec, I[6]);
  message_codecs.JSONMessageCodec = class JSONMessageCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.JSONMessageCodec.new();
    }
    encodeMessage(message) {
      if (message == null) return null;
      return (C[2] || CT.C2).encodeMessage(convert.json.encode(message));
    }
    decodeMessage(message) {
      if (message == null) return message;
      return convert.json.decode(dart.nullCheck((C[2] || CT.C2).decodeMessage(message)));
    }
  };
  (message_codecs.JSONMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMessageCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMessageCodec);
  dart.addTypeCaches(message_codecs.JSONMessageCodec);
  message_codecs.JSONMessageCodec[dart.implements] = () => [message_codec.MessageCodec$(dart.nullable(core.Object))];
  dart.setMethodSignature(message_codecs.JSONMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMessageCodec.__proto__),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)]),
    decodeMessage: dart.fnType(dart.dynamic, [dart.nullable(typed_data.ByteData)])
  }));
  dart.setLibraryUri(message_codecs.JSONMessageCodec, I[6]);
  message_codecs.JSONMethodCodec = class JSONMethodCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.JSONMethodCodec.new();
    }
    encodeMethodCall(methodCall) {
      return dart.nullCheck((C[3] || CT.C3).encodeMessage(new (T$.IdentityMapOfString$ObjectN()).from(["method", methodCall.method, "args", methodCall.arguments])));
    }
    decodeMethodCall(methodCall) {
      let decoded = (C[3] || CT.C3).decodeMessage(methodCall);
      if (!core.Map.is(decoded)) dart.throw(new core.FormatException.new("Expected method call Map, got " + dart.str(decoded)));
      let method = decoded[$_get]("method");
      let $arguments = decoded[$_get]("args");
      if (typeof method == 'string') return new message_codec.MethodCall.new(method, $arguments);
      dart.throw(new core.FormatException.new("Invalid method call: " + dart.str(decoded)));
    }
    decodeEnvelope(envelope) {
      let decoded = (C[3] || CT.C3).decodeMessage(envelope);
      if (!core.List.is(decoded)) dart.throw(new core.FormatException.new("Expected envelope List, got " + dart.str(decoded)));
      if (decoded[$length] === 1) return decoded[$_get](0);
      if (decoded[$length] === 3 && typeof decoded[$_get](0) == 'string' && (decoded[$_get](1) == null || typeof decoded[$_get](1) == 'string')) dart.throw(new message_codec.PlatformException.new({code: core.String.as(decoded[$_get](0)), message: T$.StringN().as(decoded[$_get](1)), details: decoded[$_get](2)}));
      if (decoded[$length] === 4 && typeof decoded[$_get](0) == 'string' && (decoded[$_get](1) == null || typeof decoded[$_get](1) == 'string') && (decoded[$_get](3) == null || typeof decoded[$_get](3) == 'string')) dart.throw(new message_codec.PlatformException.new({code: core.String.as(decoded[$_get](0)), message: T$.StringN().as(decoded[$_get](1)), details: decoded[$_get](2), stacktrace: T$.StringN().as(decoded[$_get](3))}));
      dart.throw(new core.FormatException.new("Invalid envelope: " + dart.str(decoded)));
    }
    encodeSuccessEnvelope(result) {
      return dart.nullCheck((C[3] || CT.C3).encodeMessage(T$.JSArrayOfObjectN().of([result])));
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      if (!(code !== null)) dart.assertFailed(null, I[7], 180, 12, "code != null");
      return dart.nullCheck((C[3] || CT.C3).encodeMessage(T$.JSArrayOfObjectN().of([code, message, details])));
    }
  };
  (message_codecs.JSONMethodCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMethodCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMethodCodec);
  dart.addTypeCaches(message_codecs.JSONMethodCodec);
  message_codecs.JSONMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.JSONMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [dart.nullable(typed_data.ByteData)]),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.nullable(core.Object)]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {details: dart.nullable(core.Object), message: dart.nullable(core.String)}, {code: core.String})
  }));
  dart.setLibraryUri(message_codecs.JSONMethodCodec, I[6]);
  var FormatException_offset = dart.privateName(core, "FormatException.offset");
  var FormatException_source = dart.privateName(core, "FormatException.source");
  var FormatException_message = dart.privateName(core, "FormatException.message");
  message_codecs.StandardMessageCodec = class StandardMessageCodec extends core.Object {
    static ['_#new#tearOff']() {
      return new message_codecs.StandardMessageCodec.new();
    }
    encodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.WriteBuffer.new();
      this.writeValue(buffer, message);
      return buffer.done();
    }
    decodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.ReadBuffer.new(message);
      let result = this.readValue(buffer);
      if (buffer.hasRemaining) dart.throw(C[4] || CT.C4);
      return result;
    }
    writeValue(buffer, value) {
      if (value == null) {
        buffer.putUint8(0);
      } else if (typeof value == 'boolean') {
        buffer.putUint8(dart.test(value) ? 1 : 2);
      } else if (typeof value == 'number') {
        buffer.putUint8(6);
        buffer.putFloat64(value);
      } else if (core.int.is(value)) {
        if (-2147483647 - 1 <= dart.notNull(value) && dart.notNull(value) <= 2147483647) {
          buffer.putUint8(3);
          buffer.putInt32(value);
        } else {
          buffer.putUint8(4);
          buffer.putInt64(value);
        }
      } else if (typeof value == 'string') {
        buffer.putUint8(7);
        let bytes = convert.utf8.encoder.convert(value);
        this.writeSize(buffer, bytes[$length]);
        buffer.putUint8List(bytes);
      } else if (typed_data.Uint8List.is(value)) {
        buffer.putUint8(8);
        this.writeSize(buffer, value[$length]);
        buffer.putUint8List(value);
      } else if (typed_data.Int32List.is(value)) {
        buffer.putUint8(9);
        this.writeSize(buffer, value[$length]);
        buffer.putInt32List(value);
      } else if (typed_data.Int64List.is(value)) {
        buffer.putUint8(10);
        this.writeSize(buffer, value[$length]);
        buffer.putInt64List(value);
      } else if (typed_data.Float32List.is(value)) {
        buffer.putUint8(14);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat32List(value);
      } else if (typed_data.Float64List.is(value)) {
        buffer.putUint8(11);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat64List(value);
      } else if (core.List.is(value)) {
        buffer.putUint8(12);
        this.writeSize(buffer, value[$length]);
        for (let item of value) {
          this.writeValue(buffer, item);
        }
      } else if (core.Map.is(value)) {
        buffer.putUint8(13);
        this.writeSize(buffer, value[$length]);
        value[$forEach](dart.fn((key, value) => {
          this.writeValue(buffer, key);
          this.writeValue(buffer, value);
        }, T$.ObjectNAndObjectNTovoid()));
      } else {
        dart.throw(new core.ArgumentError.value(value));
      }
    }
    readValue(buffer) {
      if (!buffer.hasRemaining) dart.throw(C[4] || CT.C4);
      let type = buffer.getUint8();
      return this.readValueOfType(type, buffer);
    }
    readValueOfType(type, buffer) {
      switch (type) {
        case 0:
        {
          return null;
        }
        case 1:
        {
          return true;
        }
        case 2:
        {
          return false;
        }
        case 3:
        {
          return buffer.getInt32();
        }
        case 4:
        {
          return buffer.getInt64();
        }
        case 6:
        {
          return buffer.getFloat64();
        }
        case 5:
        case 7:
        {
          let length = this.readSize(buffer);
          return convert.utf8.decoder.convert(buffer.getUint8List(length));
        }
        case 8:
        {
          let length = this.readSize(buffer);
          return buffer.getUint8List(length);
        }
        case 9:
        {
          let length = this.readSize(buffer);
          return buffer.getInt32List(length);
        }
        case 10:
        {
          let length = this.readSize(buffer);
          return buffer.getInt64List(length);
        }
        case 14:
        {
          let length = this.readSize(buffer);
          return buffer.getFloat32List(length);
        }
        case 11:
        {
          let length = this.readSize(buffer);
          return buffer.getFloat64List(length);
        }
        case 12:
        {
          let length = this.readSize(buffer);
          let result = T$.ListOfObjectN().filled(length, null);
          for (let i = 0; i < length; i = i + 1)
            result[$_set](i, this.readValue(buffer));
          return result;
        }
        case 13:
        {
          let length = this.readSize(buffer);
          let result = new (T$.LinkedMapOfObjectN$ObjectN()).new();
          for (let i = 0; i < length; i = i + 1)
            result[$_set](this.readValue(buffer), this.readValue(buffer));
          return result;
        }
        default:
        {
          dart.throw(C[4] || CT.C4);
        }
      }
    }
    writeSize(buffer, value) {
      if (!(0 <= value && value <= 4294967295)) dart.assertFailed(null, I[7], 501, 12, "0 <= value && value <= 0xffffffff");
      if (value < 254) {
        buffer.putUint8(value);
      } else if (value <= 65535) {
        buffer.putUint8(254);
        buffer.putUint16(value);
      } else {
        buffer.putUint8(255);
        buffer.putUint32(value);
      }
    }
    readSize(buffer) {
      let value = buffer.getUint8();
      switch (value) {
        case 254:
        {
          return buffer.getUint16();
        }
        case 255:
        {
          return buffer.getUint32();
        }
        default:
        {
          return value;
        }
      }
    }
  };
  (message_codecs.StandardMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.StandardMessageCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMessageCodec);
  dart.addTypeCaches(message_codecs.StandardMessageCodec);
  message_codecs.StandardMessageCodec[dart.implements] = () => [message_codec.MessageCodec$(dart.nullable(core.Object))];
  dart.setMethodSignature(message_codecs.StandardMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMessageCodec.__proto__),
    encodeMessage: dart.fnType(dart.nullable(typed_data.ByteData), [dart.nullable(core.Object)]),
    decodeMessage: dart.fnType(dart.dynamic, [dart.nullable(typed_data.ByteData)]),
    writeValue: dart.fnType(dart.void, [serialization.WriteBuffer, dart.nullable(core.Object)]),
    readValue: dart.fnType(dart.nullable(core.Object), [serialization.ReadBuffer]),
    readValueOfType: dart.fnType(dart.nullable(core.Object), [core.int, serialization.ReadBuffer]),
    writeSize: dart.fnType(dart.void, [serialization.WriteBuffer, core.int]),
    readSize: dart.fnType(core.int, [serialization.ReadBuffer])
  }));
  dart.setLibraryUri(message_codecs.StandardMessageCodec, I[6]);
  dart.setStaticFieldSignature(message_codecs.StandardMessageCodec, () => ['_valueNull', '_valueTrue', '_valueFalse', '_valueInt32', '_valueInt64', '_valueLargeInt', '_valueFloat64', '_valueString', '_valueUint8List', '_valueInt32List', '_valueInt64List', '_valueFloat64List', '_valueList', '_valueMap', '_valueFloat32List']);
  dart.defineLazy(message_codecs.StandardMessageCodec, {
    /*message_codecs.StandardMessageCodec._valueNull*/get _valueNull() {
      return 0;
    },
    /*message_codecs.StandardMessageCodec._valueTrue*/get _valueTrue() {
      return 1;
    },
    /*message_codecs.StandardMessageCodec._valueFalse*/get _valueFalse() {
      return 2;
    },
    /*message_codecs.StandardMessageCodec._valueInt32*/get _valueInt32() {
      return 3;
    },
    /*message_codecs.StandardMessageCodec._valueInt64*/get _valueInt64() {
      return 4;
    },
    /*message_codecs.StandardMessageCodec._valueLargeInt*/get _valueLargeInt() {
      return 5;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64*/get _valueFloat64() {
      return 6;
    },
    /*message_codecs.StandardMessageCodec._valueString*/get _valueString() {
      return 7;
    },
    /*message_codecs.StandardMessageCodec._valueUint8List*/get _valueUint8List() {
      return 8;
    },
    /*message_codecs.StandardMessageCodec._valueInt32List*/get _valueInt32List() {
      return 9;
    },
    /*message_codecs.StandardMessageCodec._valueInt64List*/get _valueInt64List() {
      return 10;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64List*/get _valueFloat64List() {
      return 11;
    },
    /*message_codecs.StandardMessageCodec._valueList*/get _valueList() {
      return 12;
    },
    /*message_codecs.StandardMessageCodec._valueMap*/get _valueMap() {
      return 13;
    },
    /*message_codecs.StandardMessageCodec._valueFloat32List*/get _valueFloat32List() {
      return 14;
    }
  }, false);
  const messageCodec$ = StandardMethodCodec_messageCodec;
  message_codecs.StandardMethodCodec = class StandardMethodCodec extends core.Object {
    get messageCodec() {
      return this[messageCodec$];
    }
    set messageCodec(value) {
      super.messageCodec = value;
    }
    static ['_#new#tearOff'](messageCodec = C[0] || CT.C0) {
      return new message_codecs.StandardMethodCodec.new(messageCodec);
    }
    encodeMethodCall(methodCall) {
      let buffer = new serialization.WriteBuffer.new();
      this.messageCodec.writeValue(buffer, methodCall.method);
      this.messageCodec.writeValue(buffer, methodCall.arguments);
      return buffer.done();
    }
    decodeMethodCall(methodCall) {
      let buffer = new serialization.ReadBuffer.new(dart.nullCheck(methodCall));
      let method = this.messageCodec.readValue(buffer);
      let $arguments = this.messageCodec.readValue(buffer);
      if (typeof method == 'string' && !buffer.hasRemaining)
        return new message_codec.MethodCall.new(method, $arguments);
      else
        dart.throw(C[5] || CT.C5);
    }
    encodeSuccessEnvelope(result) {
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(0);
      this.messageCodec.writeValue(buffer, result);
      return buffer.done();
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(1);
      this.messageCodec.writeValue(buffer, code);
      this.messageCodec.writeValue(buffer, message);
      this.messageCodec.writeValue(buffer, details);
      return buffer.done();
    }
    decodeEnvelope(envelope) {
      if (envelope[$lengthInBytes] === 0) dart.throw(C[6] || CT.C6);
      let buffer = new serialization.ReadBuffer.new(envelope);
      if (buffer.getUint8() === 0) return this.messageCodec.readValue(buffer);
      let errorCode = this.messageCodec.readValue(buffer);
      let errorMessage = this.messageCodec.readValue(buffer);
      let errorDetails = this.messageCodec.readValue(buffer);
      let errorStacktrace = buffer.hasRemaining ? T$.StringN().as(this.messageCodec.readValue(buffer)) : null;
      if (typeof errorCode == 'string' && (errorMessage == null || typeof errorMessage == 'string') && !buffer.hasRemaining)
        dart.throw(new message_codec.PlatformException.new({code: errorCode, message: T$.StringN().as(errorMessage), details: errorDetails, stacktrace: errorStacktrace}));
      else
        dart.throw(C[7] || CT.C7);
    }
  };
  (message_codecs.StandardMethodCodec.new = function(messageCodec = C[0] || CT.C0) {
    this[messageCodec$] = messageCodec;
    ;
  }).prototype = message_codecs.StandardMethodCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMethodCodec);
  dart.addTypeCaches(message_codecs.StandardMethodCodec);
  message_codecs.StandardMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [dart.nullable(typed_data.ByteData)]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.nullable(core.Object)]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {details: dart.nullable(core.Object), message: dart.nullable(core.String)}, {code: core.String}),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.StandardMethodCodec, I[6]);
  dart.setFieldSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getFields(message_codecs.StandardMethodCodec.__proto__),
    messageCodec: dart.finalFieldType(message_codecs.StandardMessageCodec)
  }));
  system_channels.SystemChannels = class SystemChannels extends core.Object {
    static ['_#_#tearOff']() {
      return new system_channels.SystemChannels.__();
    }
  };
  (system_channels.SystemChannels.__ = function() {
    ;
  }).prototype = system_channels.SystemChannels.prototype;
  dart.addTypeTests(system_channels.SystemChannels);
  dart.addTypeCaches(system_channels.SystemChannels);
  dart.setLibraryUri(system_channels.SystemChannels, I[8]);
  dart.setStaticFieldSignature(system_channels.SystemChannels, () => ['navigation', 'platform', 'textInput', 'keyEvent', 'lifecycle', 'system', 'accessibility', 'platform_views', 'skia', 'mouseCursor', 'restoration', 'deferredComponent', 'localization']);
  dart.defineLazy(system_channels.SystemChannels, {
    /*system_channels.SystemChannels.navigation*/get navigation() {
      return C[8] || CT.C8;
    },
    /*system_channels.SystemChannels.platform*/get platform() {
      return C[10] || CT.C10;
    },
    /*system_channels.SystemChannels.textInput*/get textInput() {
      return C[11] || CT.C11;
    },
    /*system_channels.SystemChannels.keyEvent*/get keyEvent() {
      return C[12] || CT.C12;
    },
    /*system_channels.SystemChannels.lifecycle*/get lifecycle() {
      return C[13] || CT.C13;
    },
    /*system_channels.SystemChannels.system*/get system() {
      return C[14] || CT.C14;
    },
    /*system_channels.SystemChannels.accessibility*/get accessibility() {
      return C[15] || CT.C15;
    },
    /*system_channels.SystemChannels.platform_views*/get platform_views() {
      return C[16] || CT.C16;
    },
    /*system_channels.SystemChannels.skia*/get skia() {
      return C[17] || CT.C17;
    },
    /*system_channels.SystemChannels.mouseCursor*/get mouseCursor() {
      return C[18] || CT.C18;
    },
    /*system_channels.SystemChannels.restoration*/get restoration() {
      return C[19] || CT.C19;
    },
    /*system_channels.SystemChannels.deferredComponent*/get deferredComponent() {
      return C[20] || CT.C20;
    },
    /*system_channels.SystemChannels.localization*/get localization() {
      return C[21] || CT.C21;
    }
  }, false);
  var keyCode$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.keyCode");
  var scanCode$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.scanCode");
  var characterCodePoint$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.characterCodePoint");
  var modifiers$ = dart.privateName(raw_keyboard_windows, "RawKeyEventDataWindows.modifiers");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var _isLeftRightModifierPressed = dart.privateName(raw_keyboard_windows, "_isLeftRightModifierPressed");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  raw_keyboard.RawKeyEventData = class RawKeyEventData extends Object_Diagnosticable$36 {
    get isControlPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.controlModifier);
    }
    get isShiftPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.shiftModifier);
    }
    get isAltPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.altModifier);
    }
    get isMetaPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.metaModifier);
    }
    get modifiersPressed() {
      let result = new (T$.LinkedMapOfModifierKey$KeyboardSide()).new();
      for (let key of raw_keyboard.ModifierKey.values) {
        if (this.isModifierPressed(key)) {
          let side = this.getModifierSide(key);
          if (side != null) {
            result[$_set](key, side);
          }
          if (!dart.fn(() => {
            if (side == null) {
              print.debugPrint("Raw key data is returning inconsistent information for " + "pressed modifiers. isModifierPressed returns true for " + dart.str(key) + " " + "being pressed, but when getModifierSide is called, it says " + "that no modifiers are pressed.");
              if (raw_keyboard_android.RawKeyEventDataAndroid.is(this)) {
                print.debugPrint("Android raw key metaState: " + dart.str(raw_keyboard_android.RawKeyEventDataAndroid.as(this).metaState));
              }
            }
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[10], 175, 16, "() {\n          if (side == null) {\n            debugPrint(\n              'Raw key data is returning inconsistent information for '\n              'pressed modifiers. isModifierPressed returns true for $key '\n              'being pressed, but when getModifierSide is called, it says '\n              'that no modifiers are pressed.',\n            );\n            if (this is RawKeyEventDataAndroid) {\n              debugPrint('Android raw key metaState: ${(this as RawKeyEventDataAndroid).metaState}');\n            }\n          }\n          return true;\n        }()");
        }
      }
      return result;
    }
    shouldDispatchEvent() {
      return true;
    }
  };
  (raw_keyboard.RawKeyEventData.new = function() {
    ;
  }).prototype = raw_keyboard.RawKeyEventData.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEventData);
  dart.addTypeCaches(raw_keyboard.RawKeyEventData);
  dart.setMethodSignature(raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyEventData.__proto__),
    shouldDispatchEvent: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEventData.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    modifiersPressed: core.Map$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEventData, I[11]);
  raw_keyboard_windows.RawKeyEventDataWindows = class RawKeyEventDataWindows extends raw_keyboard.RawKeyEventData {
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get characterCodePoint() {
      return this[characterCodePoint$];
    }
    set characterCodePoint(value) {
      super.characterCodePoint = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    static ['_#new#tearOff'](opts) {
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
      let characterCodePoint = opts && 'characterCodePoint' in opts ? opts.characterCodePoint : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      return new raw_keyboard_windows.RawKeyEventDataWindows.new({keyCode: keyCode, scanCode: scanCode, characterCodePoint: characterCodePoint, modifiers: modifiers});
    }
    get keyLabel() {
      return this.characterCodePoint === 0 ? "" : core.String.fromCharCode(this.characterCodePoint);
    }
    get physicalKey() {
      let t11;
      t11 = keyboard_maps.kWindowsToPhysicalKey[$_get](this.scanCode);
      return t11 == null ? new keyboard_key.PhysicalKeyboardKey.new(94489280512.0 + this.scanCode) : t11;
    }
    get logicalKey() {
      let t11;
      let numPadKey = keyboard_maps.kWindowsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) {
        let keyId = (0 | (this.characterCodePoint & 4294967295.0) >>> 0) >>> 0;
        t11 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t11 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId) : t11;
      }
      let newKey = keyboard_maps.kWindowsToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key.LogicalKeyboardKey.new((this.keyCode | 94489280512.0) >>> 0);
    }
    [_isLeftRightModifierPressed](side, anyMask, leftMask, rightMask) {
      if ((this.modifiers & anyMask) === 0 && (this.modifiers & leftMask) === 0 && (this.modifiers & rightMask) === 0) {
        return false;
      }
      let anyOnly = (this.modifiers & (leftMask | rightMask | anyMask) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C[22] || CT.C22:
        {
          return true;
        }
        case C[23] || CT.C23:
        {
          return (this.modifiers & leftMask) !== 0 && (this.modifiers & rightMask) !== 0 || anyOnly;
        }
        case C[24] || CT.C24:
        {
          return (this.modifiers & leftMask) !== 0 || anyOnly;
        }
        case C[25] || CT.C25:
        {
          return (this.modifiers & rightMask) !== 0 || anyOnly;
        }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      let result = null;
      switch (key) {
        case C[26] || CT.C26:
        {
          result = this[_isLeftRightModifierPressed](side, 8, 16, 32);
          break;
        }
        case C[27] || CT.C27:
        {
          result = this[_isLeftRightModifierPressed](side, 1, 2, 4);
          break;
        }
        case C[28] || CT.C28:
        {
          result = this[_isLeftRightModifierPressed](side, 64, 128, 256);
          break;
        }
        case C[29] || CT.C29:
        {
          result = this[_isLeftRightModifierPressed](side, (512 | 1024) >>> 0, 512, 1024);
          break;
        }
        case C[30] || CT.C30:
        {
          result = (this.modifiers & 2048) !== 0;
          break;
        }
        case C[31] || CT.C31:
        {
          result = (this.modifiers & 8192) !== 0;
          break;
        }
        case C[32] || CT.C32:
        {
          result = (this.modifiers & 4096) !== 0;
          break;
        }
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        {
          result = false;
          break;
        }
      }
      if (!(!result || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", I[9], 153, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask, anyMask) => {
        let combinedMask = (leftMask | rightMask) >>> 0;
        let combined = (this.modifiers & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (this.modifiers & (combinedMask | anyMask) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[26] || CT.C26:
        {
          return findSide(16, 32, 8);
        }
        case C[27] || CT.C27:
        {
          return findSide(2, 4, 1);
        }
        case C[28] || CT.C28:
        {
          return findSide(128, 256, 64);
        }
        case C[29] || CT.C29:
        {
          return findSide(512, 1024, 0);
        }
        case C[30] || CT.C30:
        case C[32] || CT.C32:
        case C[31] || CT.C31:
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
    }
    shouldDispatchEvent() {
      return this.keyCode !== 229;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("scanCode", this.scanCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("characterCodePoint", this.characterCodePoint));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return raw_keyboard_windows.RawKeyEventDataWindows.is(other) && other.keyCode === this.keyCode && other.scanCode === this.scanCode && other.characterCodePoint === this.characterCodePoint && other.modifiers === this.modifiers;
    }
    get hashCode() {
      return ui.hashValues(this.keyCode, this.scanCode, this.characterCodePoint, this.modifiers);
    }
  };
  (raw_keyboard_windows.RawKeyEventDataWindows.new = function(opts) {
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let characterCodePoint = opts && 'characterCodePoint' in opts ? opts.characterCodePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[keyCode$] = keyCode;
    this[scanCode$] = scanCode;
    this[characterCodePoint$] = characterCodePoint;
    this[modifiers$] = modifiers;
    if (!(keyCode !== null)) dart.assertFailed(null, I[9], 36, 15, "keyCode != null");
    if (!(scanCode !== null)) dart.assertFailed(null, I[9], 37, 15, "scanCode != null");
    if (!(characterCodePoint !== null)) dart.assertFailed(null, I[9], 38, 15, "characterCodePoint != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[9], 39, 15, "modifiers != null");
    raw_keyboard_windows.RawKeyEventDataWindows.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_windows.RawKeyEventDataWindows.prototype;
  dart.addTypeTests(raw_keyboard_windows.RawKeyEventDataWindows);
  dart.addTypeCaches(raw_keyboard_windows.RawKeyEventDataWindows);
  dart.setMethodSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getMethods(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    [_isLeftRightModifierPressed]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getGetters(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_windows.RawKeyEventDataWindows, I[12]);
  dart.setFieldSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ({
    __proto__: dart.getFields(raw_keyboard_windows.RawKeyEventDataWindows.__proto__),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    characterCodePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_windows.RawKeyEventDataWindows, () => ['modifierShift', 'modifierLeftShift', 'modifierRightShift', 'modifierControl', 'modifierLeftControl', 'modifierRightControl', 'modifierAlt', 'modifierLeftAlt', 'modifierRightAlt', 'modifierLeftMeta', 'modifierRightMeta', 'modifierCaps', 'modifierNumLock', 'modifierScrollLock']);
  dart.defineExtensionMethods(raw_keyboard_windows.RawKeyEventDataWindows, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_windows.RawKeyEventDataWindows, ['hashCode']);
  dart.defineLazy(raw_keyboard_windows.RawKeyEventDataWindows, {
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierControl*/get modifierControl() {
      return 8;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftControl*/get modifierLeftControl() {
      return 16;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightControl*/get modifierRightControl() {
      return 32;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierAlt*/get modifierAlt() {
      return 64;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftAlt*/get modifierLeftAlt() {
      return 128;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightAlt*/get modifierRightAlt() {
      return 256;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierLeftMeta*/get modifierLeftMeta() {
      return 512;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierRightMeta*/get modifierRightMeta() {
      return 1024;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierCaps*/get modifierCaps() {
      return 2048;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierNumLock*/get modifierNumLock() {
      return 4096;
    },
    /*raw_keyboard_windows.RawKeyEventDataWindows.modifierScrollLock*/get modifierScrollLock() {
      return 8192;
    }
  }, false);
  dart.defineLazy(raw_keyboard_windows, {
    /*raw_keyboard_windows._vkProcessKey*/get _vkProcessKey() {
      return 229;
    }
  }, false);
  var code$0 = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.code");
  var key$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.key");
  var location$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.location");
  var metaState$ = dart.privateName(raw_keyboard_web, "RawKeyEventDataWeb.metaState");
  raw_keyboard_web.RawKeyEventDataWeb = class RawKeyEventDataWeb extends raw_keyboard.RawKeyEventData {
    get code() {
      return this[code$0];
    }
    set code(value) {
      super.code = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    static ['_#new#tearOff'](opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let location = opts && 'location' in opts ? opts.location : 0;
      let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
      return new raw_keyboard_web.RawKeyEventDataWeb.new({code: code, key: key, location: location, metaState: metaState});
    }
    get keyLabel() {
      let t11;
      return this.key === "Unidentified" ? "" : (t11 = raw_keyboard_web._unicodeChar(this.key), t11 == null ? "" : t11);
    }
    get physicalKey() {
      let t11;
      t11 = keyboard_maps.kWebToPhysicalKey[$_get](this.code);
      return t11 == null ? new keyboard_key.PhysicalKeyboardKey.new(98784247808.0 + this.code[$hashCode]) : t11;
    }
    get logicalKey() {
      let t11;
      let maybeLocationKey = (t11 = keyboard_maps.kWebLocationMap[$_get](this.key), t11 == null ? null : t11[$_get](this.location));
      if (maybeLocationKey != null) return maybeLocationKey;
      let newKey = keyboard_maps.kWebToLogicalKey[$_get](this.code);
      if (newKey != null) {
        return newKey;
      }
      let isPrintable = this.key.length === 1;
      if (isPrintable) return new keyboard_key.LogicalKeyboardKey.new(this.key[$toLowerCase]()[$codeUnitAt](0));
      return new keyboard_key.LogicalKeyboardKey.new(this.code[$hashCode] + 98784247808.0);
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      switch (key) {
        case C[26] || CT.C26:
        {
          return (this.metaState & 4) !== 0;
        }
        case C[27] || CT.C27:
        {
          return (this.metaState & 1) !== 0;
        }
        case C[28] || CT.C28:
        {
          return (this.metaState & 2) !== 0;
        }
        case C[29] || CT.C29:
        {
          return (this.metaState & 8) !== 0;
        }
        case C[32] || CT.C32:
        {
          return (this.metaState & 16) !== 0;
        }
        case C[30] || CT.C30:
        {
          return (this.metaState & 32) !== 0;
        }
        case C[31] || CT.C31:
        {
          return (this.metaState & 64) !== 0;
        }
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        {
          return false;
        }
      }
    }
    getModifierSide(key) {
      return raw_keyboard.KeyboardSide.any;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("code", this.code));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("key", this.key));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("location", this.location));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("metaState", this.metaState));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return raw_keyboard_web.RawKeyEventDataWeb.is(other) && other.code === this.code && other.key === this.key && other.location === this.location && other.metaState === this.metaState;
    }
    get hashCode() {
      return ui.hashValues(this.code, this.key, this.location, this.metaState);
    }
  };
  (raw_keyboard_web.RawKeyEventDataWeb.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let location = opts && 'location' in opts ? opts.location : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    this[code$0] = code;
    this[key$] = key;
    this[location$] = location;
    this[metaState$] = metaState;
    if (!(code !== null)) dart.assertFailed(null, I[13], 35, 16, "code != null");
    if (!(metaState !== null)) dart.assertFailed(null, I[13], 36, 16, "metaState != null");
    raw_keyboard_web.RawKeyEventDataWeb.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_web.RawKeyEventDataWeb.prototype;
  dart.addTypeTests(raw_keyboard_web.RawKeyEventDataWeb);
  dart.addTypeCaches(raw_keyboard_web.RawKeyEventDataWeb);
  dart.setMethodSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getMethods(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getGetters(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_web.RawKeyEventDataWeb, I[14]);
  dart.setFieldSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ({
    __proto__: dart.getFields(raw_keyboard_web.RawKeyEventDataWeb.__proto__),
    code: dart.finalFieldType(core.String),
    key: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_web.RawKeyEventDataWeb, () => ['modifierNone', 'modifierShift', 'modifierAlt', 'modifierControl', 'modifierMeta', 'modifierNumLock', 'modifierCapsLock', 'modifierScrollLock']);
  dart.defineExtensionMethods(raw_keyboard_web.RawKeyEventDataWeb, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_web.RawKeyEventDataWeb, ['hashCode']);
  dart.defineLazy(raw_keyboard_web.RawKeyEventDataWeb, {
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierControl*/get modifierControl() {
      return 4;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierNumLock*/get modifierNumLock() {
      return 16;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierCapsLock*/get modifierCapsLock() {
      return 32;
    },
    /*raw_keyboard_web.RawKeyEventDataWeb.modifierScrollLock*/get modifierScrollLock() {
      return 64;
    }
  }, false);
  raw_keyboard_web._unicodeChar = function _unicodeChar(key) {
    if (key.length === 1) {
      return key[$substring](0, 1);
    }
    return null;
  };
  var characters$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.characters");
  var charactersIgnoringModifiers$ = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.charactersIgnoringModifiers");
  var keyCode$0 = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.keyCode");
  var modifiers$0 = dart.privateName(raw_keyboard_macos, "RawKeyEventDataMacOs.modifiers");
  var _isLeftRightModifierPressed$ = dart.privateName(raw_keyboard_macos, "_isLeftRightModifierPressed");
  raw_keyboard_macos.RawKeyEventDataMacOs = class RawKeyEventDataMacOs extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$0];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$0];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    static ['_#new#tearOff'](opts) {
      let characters = opts && 'characters' in opts ? opts.characters : "";
      let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      return new raw_keyboard_macos.RawKeyEventDataMacOs.new({characters: characters, charactersIgnoringModifiers: charactersIgnoringModifiers, keyCode: keyCode, modifiers: modifiers});
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t11;
      t11 = keyboard_maps.kMacOsToPhysicalKey[$_get](this.keyCode);
      return t11 == null ? new keyboard_key.PhysicalKeyboardKey.new(94489280512.0 + this.keyCode) : t11;
    }
    get logicalKey() {
      let t11;
      let numPadKey = keyboard_maps.kMacOsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      let knownKey = keyboard_maps.kMacOsToLogicalKey[$_get](this.keyCode);
      if (knownKey != null) {
        return knownKey;
      }
      let character = null;
      if (this.keyLabel[$isNotEmpty]) {
        let codePoints = this.keyLabel[$runes][$toList]();
        if (codePoints[$length] === 1 && !keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel) && !raw_keyboard_macos.RawKeyEventDataMacOs._isUnprintableKey(this.keyLabel)) {
          character = raw_keyboard_macos.runeToLowerCase(codePoints[$_get](0));
        }
      }
      if (character != null) {
        let keyId = (0 | (dart.notNull(character) & 4294967295.0) >>> 0) >>> 0;
        t11 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t11 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId) : t11;
      }
      return new keyboard_key.LogicalKeyboardKey.new((this.keyCode | 85899345920.0) >>> 0);
    }
    [_isLeftRightModifierPressed$](side, anyMask, leftMask, rightMask) {
      if ((this.modifiers & anyMask) === 0) {
        return false;
      }
      let anyOnly = (this.modifiers & (leftMask | rightMask | anyMask) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C[22] || CT.C22:
        {
          return true;
        }
        case C[23] || CT.C23:
        {
          return (this.modifiers & leftMask) !== 0 && (this.modifiers & rightMask) !== 0 || anyOnly;
        }
        case C[24] || CT.C24:
        {
          return (this.modifiers & leftMask) !== 0 || anyOnly;
        }
        case C[25] || CT.C25:
        {
          return (this.modifiers & rightMask) !== 0 || anyOnly;
        }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      let independentModifier = (this.modifiers & 4294901760.0) >>> 0;
      let result = null;
      switch (key) {
        case C[26] || CT.C26:
        {
          result = this[_isLeftRightModifierPressed$](side, (independentModifier & 262144) >>> 0, 1, 8192);
          break;
        }
        case C[27] || CT.C27:
        {
          result = this[_isLeftRightModifierPressed$](side, (independentModifier & 131072) >>> 0, 2, 4);
          break;
        }
        case C[28] || CT.C28:
        {
          result = this[_isLeftRightModifierPressed$](side, (independentModifier & 524288) >>> 0, 32, 64);
          break;
        }
        case C[29] || CT.C29:
        {
          result = this[_isLeftRightModifierPressed$](side, (independentModifier & 1048576) >>> 0, 8, 16);
          break;
        }
        case C[30] || CT.C30:
        {
          result = (independentModifier & 65536) !== 0;
          break;
        }
        case C[33] || CT.C33:
        case C[32] || CT.C32:
        case C[34] || CT.C34:
        case C[31] || CT.C31:
        {
          result = false;
          break;
        }
      }
      if (!(!result || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", I[15], 178, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      const findSide = (anyMask, leftMask, rightMask) => {
        let combinedMask = (leftMask | rightMask) >>> 0;
        let combined = (this.modifiers & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (this.modifiers & (combinedMask | anyMask) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[26] || CT.C26:
        {
          return findSide(262144, 1, 8192);
        }
        case C[27] || CT.C27:
        {
          return findSide(131072, 2, 4);
        }
        case C[28] || CT.C28:
        {
          return findSide(524288, 32, 64);
        }
        case C[29] || CT.C29:
        {
          return findSide(1048576, 8, 16);
        }
        case C[30] || CT.C30:
        case C[32] || CT.C32:
        case C[31] || CT.C31:
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
    }
    shouldDispatchEvent() {
      return !this.logicalKey._equals(keyboard_key.LogicalKeyboardKey.fn);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("characters", this.characters));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("charactersIgnoringModifiers", this.charactersIgnoringModifiers));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return raw_keyboard_macos.RawKeyEventDataMacOs.is(other) && other.characters === this.characters && other.charactersIgnoringModifiers === this.charactersIgnoringModifiers && other.keyCode === this.keyCode && other.modifiers === this.modifiers;
    }
    get hashCode() {
      return ui.hashValues(this.characters, this.charactersIgnoringModifiers, this.keyCode, this.modifiers);
    }
    static _isUnprintableKey(label) {
      if (label.length !== 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit >= 63232 && codeUnit <= 63743;
    }
  };
  (raw_keyboard_macos.RawKeyEventDataMacOs.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[characters$] = characters;
    this[charactersIgnoringModifiers$] = charactersIgnoringModifiers;
    this[keyCode$0] = keyCode;
    this[modifiers$0] = modifiers;
    if (!(characters !== null)) dart.assertFailed(null, I[15], 41, 15, "characters != null");
    if (!(charactersIgnoringModifiers !== null)) dart.assertFailed(null, I[15], 42, 15, "charactersIgnoringModifiers != null");
    if (!(keyCode !== null)) dart.assertFailed(null, I[15], 43, 15, "keyCode != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[15], 44, 15, "modifiers != null");
    raw_keyboard_macos.RawKeyEventDataMacOs.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_macos.RawKeyEventDataMacOs.prototype;
  dart.addTypeTests(raw_keyboard_macos.RawKeyEventDataMacOs);
  dart.addTypeCaches(raw_keyboard_macos.RawKeyEventDataMacOs);
  dart.setMethodSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getMethods(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    [_isLeftRightModifierPressed$]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setStaticMethodSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ['_isUnprintableKey']);
  dart.setGetterSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getGetters(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_macos.RawKeyEventDataMacOs, I[16]);
  dart.setFieldSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getFields(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ['modifierCapsLock', 'modifierShift', 'modifierLeftShift', 'modifierRightShift', 'modifierControl', 'modifierLeftControl', 'modifierRightControl', 'modifierOption', 'modifierLeftOption', 'modifierRightOption', 'modifierCommand', 'modifierLeftCommand', 'modifierRightCommand', 'modifierNumericPad', 'modifierHelp', 'modifierFunction', 'deviceIndependentMask']);
  dart.defineExtensionMethods(raw_keyboard_macos.RawKeyEventDataMacOs, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_macos.RawKeyEventDataMacOs, ['hashCode']);
  dart.defineLazy(raw_keyboard_macos.RawKeyEventDataMacOs, {
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  }, false);
  raw_keyboard_macos.runeToLowerCase = function runeToLowerCase(rune) {
    if (rune > 55295) return rune;
    return core.String.fromCharCode(rune)[$toLowerCase]()[$codeUnitAt](0);
  };
  var keyHelper$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.keyHelper");
  var unicodeScalarValues$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.unicodeScalarValues");
  var scanCode$0 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.scanCode");
  var keyCode$1 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.keyCode");
  var modifiers$1 = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.modifiers");
  var isDown$ = dart.privateName(raw_keyboard_linux, "RawKeyEventDataLinux.isDown");
  raw_keyboard_linux.RawKeyEventDataLinux = class RawKeyEventDataLinux extends raw_keyboard.RawKeyEventData {
    get keyHelper() {
      return this[keyHelper$];
    }
    set keyHelper(value) {
      super.keyHelper = value;
    }
    get unicodeScalarValues() {
      return this[unicodeScalarValues$];
    }
    set unicodeScalarValues(value) {
      super.unicodeScalarValues = value;
    }
    get scanCode() {
      return this[scanCode$0];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get keyCode() {
      return this[keyCode$1];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$1];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get isDown() {
      return this[isDown$];
    }
    set isDown(value) {
      super.isDown = value;
    }
    static ['_#new#tearOff'](opts) {
      let keyHelper = opts && 'keyHelper' in opts ? opts.keyHelper : null;
      let unicodeScalarValues = opts && 'unicodeScalarValues' in opts ? opts.unicodeScalarValues : 0;
      let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      return new raw_keyboard_linux.RawKeyEventDataLinux.new({keyHelper: keyHelper, unicodeScalarValues: unicodeScalarValues, scanCode: scanCode, keyCode: keyCode, modifiers: modifiers, isDown: isDown});
    }
    get keyLabel() {
      return this.unicodeScalarValues === 0 ? "" : core.String.fromCharCode(this.unicodeScalarValues);
    }
    get physicalKey() {
      let t11;
      t11 = keyboard_maps.kLinuxToPhysicalKey[$_get](this.scanCode);
      return t11 == null ? new keyboard_key.PhysicalKeyboardKey.new(98784247808.0 + this.scanCode) : t11;
    }
    get logicalKey() {
      let t11;
      let numPadKey = this.keyHelper.numpadKey(this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) {
        let keyId = (0 | (this.unicodeScalarValues & 4294967295.0) >>> 0) >>> 0;
        t11 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t11 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId) : t11;
      }
      let newKey = this.keyHelper.logicalKey(this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key.LogicalKeyboardKey.new((this.keyCode | this.keyHelper.platformPlane) >>> 0);
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      return this.keyHelper.isModifierPressed(key, this.modifiers, {side: side, keyCode: this.keyCode, isDown: this.isDown});
    }
    getModifierSide(key) {
      return this.keyHelper.getModifierSide(key);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("toolkit", this.keyHelper.debugToolkit));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("unicodeScalarValues", this.unicodeScalarValues));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("scanCode", this.scanCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
      properties.add(new (T$.DiagnosticsPropertyOfbool()).new("isDown", this.isDown));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return raw_keyboard_linux.RawKeyEventDataLinux.is(other) && other.keyHelper[$runtimeType]._equals(this.keyHelper[$runtimeType]) && other.unicodeScalarValues === this.unicodeScalarValues && other.scanCode === this.scanCode && other.keyCode === this.keyCode && other.modifiers === this.modifiers && other.isDown === this.isDown;
    }
    get hashCode() {
      return ui.hashValues(this.keyHelper[$runtimeType], this.unicodeScalarValues, this.scanCode, this.keyCode, this.modifiers, this.isDown);
    }
  };
  (raw_keyboard_linux.RawKeyEventDataLinux.new = function(opts) {
    let keyHelper = opts && 'keyHelper' in opts ? opts.keyHelper : null;
    let unicodeScalarValues = opts && 'unicodeScalarValues' in opts ? opts.unicodeScalarValues : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    let isDown = opts && 'isDown' in opts ? opts.isDown : null;
    this[keyHelper$] = keyHelper;
    this[unicodeScalarValues$] = unicodeScalarValues;
    this[scanCode$0] = scanCode;
    this[keyCode$1] = keyCode;
    this[modifiers$1] = modifiers;
    this[isDown$] = isDown;
    if (!(scanCode !== null)) dart.assertFailed(null, I[17], 33, 15, "scanCode != null");
    if (!(unicodeScalarValues !== null)) dart.assertFailed(null, I[17], 34, 15, "unicodeScalarValues != null");
    if (!((unicodeScalarValues & ~4294967295.0 >>> 0) === 0)) dart.assertFailed(null, I[17], 35, 15, "(unicodeScalarValues & ~LogicalKeyboardKey.valueMask) == 0");
    if (!(keyCode !== null)) dart.assertFailed(null, I[17], 36, 15, "keyCode != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[17], 37, 15, "modifiers != null");
    if (!(keyHelper !== null)) dart.assertFailed(null, I[17], 38, 15, "keyHelper != null");
    raw_keyboard_linux.RawKeyEventDataLinux.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_linux.RawKeyEventDataLinux.prototype;
  dart.addTypeTests(raw_keyboard_linux.RawKeyEventDataLinux);
  dart.addTypeCaches(raw_keyboard_linux.RawKeyEventDataLinux);
  dart.setMethodSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_linux.RawKeyEventDataLinux, I[18]);
  dart.setFieldSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getFields(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyHelper: dart.finalFieldType(raw_keyboard_linux.KeyHelper),
    unicodeScalarValues: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int),
    isDown: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(raw_keyboard_linux.RawKeyEventDataLinux, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_linux.RawKeyEventDataLinux, ['hashCode']);
  raw_keyboard_linux.KeyHelper = class KeyHelper extends core.Object {
    static new(toolkit) {
      if (toolkit === "glfw") {
        return new raw_keyboard_linux.GLFWKeyHelper.new();
      } else if (toolkit === "gtk") {
        return new raw_keyboard_linux.GtkKeyHelper.new();
      } else {
        dart.throw(assertions.FlutterError.new("Window toolkit not recognized: " + toolkit));
      }
    }
    static ['_#new#tearOff'](toolkit) {
      return raw_keyboard_linux.KeyHelper.new(toolkit);
    }
  };
  (raw_keyboard_linux.KeyHelper[dart.mixinNew] = function() {
  }).prototype = raw_keyboard_linux.KeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.KeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.KeyHelper);
  dart.setStaticMethodSignature(raw_keyboard_linux.KeyHelper, () => ['new']);
  dart.setLibraryUri(raw_keyboard_linux.KeyHelper, I[18]);
  var _mergeModifiers = dart.privateName(raw_keyboard_linux, "_mergeModifiers");
  raw_keyboard_linux.GLFWKeyHelper = class GLFWKeyHelper extends core.Object {
    get debugToolkit() {
      return "GLFW";
    }
    [_mergeModifiers](opts) {
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : null;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      let modifierChange = 0;
      switch (keyCode) {
        case 340:
        case 344:
        {
          modifierChange = 1;
          break;
        }
        case 341:
        case 345:
        {
          modifierChange = 2;
          break;
        }
        case 342:
        case 346:
        {
          modifierChange = 4;
          break;
        }
        case 343:
        case 347:
        {
          modifierChange = 8;
          break;
        }
        case 280:
        {
          modifierChange = 16;
          break;
        }
        case 282:
        {
          modifierChange = 32;
          break;
        }
        default:
        {
          break;
        }
      }
      return isDown ? (modifiers | modifierChange) >>> 0 : (modifiers & ~modifierChange >>> 0) >>> 0;
    }
    isModifierPressed(key, modifiers, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      modifiers = this[_mergeModifiers]({modifiers: modifiers, keyCode: keyCode, isDown: isDown});
      switch (key) {
        case C[26] || CT.C26:
        {
          return (modifiers & 2) !== 0;
        }
        case C[27] || CT.C27:
        {
          return (modifiers & 1) !== 0;
        }
        case C[28] || CT.C28:
        {
          return (modifiers & 4) !== 0;
        }
        case C[29] || CT.C29:
        {
          return (modifiers & 8) !== 0;
        }
        case C[30] || CT.C30:
        {
          return (modifiers & 16) !== 0;
        }
        case C[32] || CT.C32:
        {
          return (modifiers & 32) !== 0;
        }
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        case C[31] || CT.C31:
        {
          return false;
        }
      }
    }
    getModifierSide(key) {
      return raw_keyboard.KeyboardSide.all;
    }
    numpadKey(keyCode) {
      return keyboard_maps.kGlfwNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      return keyboard_maps.kGlfwToLogicalKey[$_get](keyCode);
    }
    get platformPlane() {
      return 103079215104.0;
    }
    static ['_#new#tearOff']() {
      return new raw_keyboard_linux.GLFWKeyHelper.new();
    }
  };
  (raw_keyboard_linux.GLFWKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GLFWKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GLFWKeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.GLFWKeyHelper);
  raw_keyboard_linux.GLFWKeyHelper[dart.implements] = () => [raw_keyboard_linux.KeyHelper];
  dart.setMethodSignature(raw_keyboard_linux.GLFWKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GLFWKeyHelper.__proto__),
    [_mergeModifiers]: dart.fnType(core.int, [], {}, {isDown: core.bool, keyCode: core.int, modifiers: core.int}),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {side: raw_keyboard.KeyboardSide}, {isDown: core.bool, keyCode: core.int}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [core.int]),
    logicalKey: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [core.int])
  }));
  dart.setGetterSignature(raw_keyboard_linux.GLFWKeyHelper, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.GLFWKeyHelper.__proto__),
    debugToolkit: core.String,
    platformPlane: core.int
  }));
  dart.setLibraryUri(raw_keyboard_linux.GLFWKeyHelper, I[18]);
  dart.setStaticFieldSignature(raw_keyboard_linux.GLFWKeyHelper, () => ['modifierCapsLock', 'modifierShift', 'modifierControl', 'modifierAlt', 'modifierMeta', 'modifierNumericPad']);
  dart.defineLazy(raw_keyboard_linux.GLFWKeyHelper, {
    /*raw_keyboard_linux.GLFWKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 16;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierControl*/get modifierControl() {
      return 2;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierAlt*/get modifierAlt() {
      return 4;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierNumericPad*/get modifierNumericPad() {
      return 32;
    }
  }, false);
  raw_keyboard_linux.GtkKeyHelper = class GtkKeyHelper extends core.Object {
    get debugToolkit() {
      return "GTK";
    }
    [_mergeModifiers](opts) {
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : null;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      let modifierChange = 0;
      switch (keyCode) {
        case 65505:
        case 65506:
        {
          modifierChange = 1;
          break;
        }
        case 65507:
        case 65508:
        {
          modifierChange = 4;
          break;
        }
        case 65513:
        case 65514:
        {
          modifierChange = 8;
          break;
        }
        case 65515:
        case 65516:
        {
          modifierChange = 67108864;
          break;
        }
        case 65509:
        case 65510:
        {
          modifierChange = 2;
          break;
        }
        case 65407:
        {
          modifierChange = 16;
          break;
        }
        default:
        {
          break;
        }
      }
      return isDown ? (modifiers | modifierChange) >>> 0 : (modifiers & ~modifierChange >>> 0) >>> 0;
    }
    isModifierPressed(key, modifiers, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
      let isDown = opts && 'isDown' in opts ? opts.isDown : null;
      modifiers = this[_mergeModifiers]({modifiers: modifiers, keyCode: keyCode, isDown: isDown});
      switch (key) {
        case C[26] || CT.C26:
        {
          return (modifiers & 4) !== 0;
        }
        case C[27] || CT.C27:
        {
          return (modifiers & 1) !== 0;
        }
        case C[28] || CT.C28:
        {
          return (modifiers & 8) !== 0;
        }
        case C[29] || CT.C29:
        {
          return (modifiers & 67108864) !== 0;
        }
        case C[30] || CT.C30:
        {
          return (modifiers & 2) !== 0;
        }
        case C[32] || CT.C32:
        {
          return (modifiers & 16) !== 0;
        }
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        case C[31] || CT.C31:
        {
          return false;
        }
      }
    }
    getModifierSide(key) {
      return raw_keyboard.KeyboardSide.all;
    }
    numpadKey(keyCode) {
      return keyboard_maps.kGtkNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      return keyboard_maps.kGtkToLogicalKey[$_get](keyCode);
    }
    get platformPlane() {
      return 90194313216.0;
    }
    static ['_#new#tearOff']() {
      return new raw_keyboard_linux.GtkKeyHelper.new();
    }
  };
  (raw_keyboard_linux.GtkKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GtkKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GtkKeyHelper);
  dart.addTypeCaches(raw_keyboard_linux.GtkKeyHelper);
  raw_keyboard_linux.GtkKeyHelper[dart.implements] = () => [raw_keyboard_linux.KeyHelper];
  dart.setMethodSignature(raw_keyboard_linux.GtkKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GtkKeyHelper.__proto__),
    [_mergeModifiers]: dart.fnType(core.int, [], {}, {isDown: core.bool, keyCode: core.int, modifiers: core.int}),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {side: raw_keyboard.KeyboardSide}, {isDown: core.bool, keyCode: core.int}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [core.int]),
    logicalKey: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [core.int])
  }));
  dart.setGetterSignature(raw_keyboard_linux.GtkKeyHelper, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.GtkKeyHelper.__proto__),
    debugToolkit: core.String,
    platformPlane: core.int
  }));
  dart.setLibraryUri(raw_keyboard_linux.GtkKeyHelper, I[18]);
  dart.setStaticFieldSignature(raw_keyboard_linux.GtkKeyHelper, () => ['modifierShift', 'modifierCapsLock', 'modifierControl', 'modifierMod1', 'modifierMod2', 'modifierMeta']);
  dart.defineLazy(raw_keyboard_linux.GtkKeyHelper, {
    /*raw_keyboard_linux.GtkKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 2;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierControl*/get modifierControl() {
      return 4;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMod1*/get modifierMod1() {
      return 8;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMod2*/get modifierMod2() {
      return 16;
    },
    /*raw_keyboard_linux.GtkKeyHelper.modifierMeta*/get modifierMeta() {
      return 67108864;
    }
  }, false);
  var characters$0 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.characters");
  var charactersIgnoringModifiers$0 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.charactersIgnoringModifiers");
  var keyCode$2 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.keyCode");
  var modifiers$2 = dart.privateName(raw_keyboard_ios, "RawKeyEventDataIos.modifiers");
  var _isLeftRightModifierPressed$0 = dart.privateName(raw_keyboard_ios, "_isLeftRightModifierPressed");
  raw_keyboard_ios.RawKeyEventDataIos = class RawKeyEventDataIos extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$0];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$0];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$2];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$2];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    static ['_#new#tearOff'](opts) {
      let characters = opts && 'characters' in opts ? opts.characters : "";
      let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      return new raw_keyboard_ios.RawKeyEventDataIos.new({characters: characters, charactersIgnoringModifiers: charactersIgnoringModifiers, keyCode: keyCode, modifiers: modifiers});
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t11;
      t11 = keyboard_maps.kIosToPhysicalKey[$_get](this.keyCode);
      return t11 == null ? new keyboard_key.PhysicalKeyboardKey.new(81604378624.0 + this.keyCode) : t11;
    }
    get logicalKey() {
      let t11;
      let numPadKey = keyboard_maps.kIosNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      let newKey = raw_keyboard_ios._kIosToLogicalMap[$_get](this.keyLabel);
      if (newKey != null) {
        return newKey;
      }
      let knownKey = keyboard_maps.kIosToLogicalKey[$_get](this.keyCode);
      if (knownKey != null) {
        return knownKey;
      }
      if (this.keyLabel[$isNotEmpty] && !keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel) && !raw_keyboard_ios.RawKeyEventDataIos._isUnprintableKey(this.keyLabel)) {
        if (!(this.charactersIgnoringModifiers.length <= 2)) dart.assertFailed(null, I[19], 131, 14, "charactersIgnoringModifiers.length <= 2");
        let codeUnit = this.charactersIgnoringModifiers[$codeUnitAt](0);
        if (this.charactersIgnoringModifiers.length === 2) {
          let secondCode = this.charactersIgnoringModifiers[$codeUnitAt](1);
          codeUnit = (codeUnit << 16 | secondCode) >>> 0;
        }
        let keyId = (0 | (codeUnit & 4294967295.0) >>> 0) >>> 0;
        t11 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t11 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId) : t11;
      }
      return new keyboard_key.LogicalKeyboardKey.new((this.keyCode | 81604378624.0) >>> 0);
    }
    static _isUnprintableKey(label) {
      if (label.length !== 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit >= 63232 && codeUnit <= 63743;
    }
    [_isLeftRightModifierPressed$0](side, anyMask, leftMask, rightMask) {
      if ((this.modifiers & anyMask) === 0) {
        return false;
      }
      let anyOnly = (this.modifiers & (leftMask | rightMask | anyMask) >>> 0) >>> 0 === anyMask;
      switch (side) {
        case C[22] || CT.C22:
        {
          return true;
        }
        case C[23] || CT.C23:
        {
          return (this.modifiers & leftMask) !== 0 && (this.modifiers & rightMask) !== 0 || anyOnly;
        }
        case C[24] || CT.C24:
        {
          return (this.modifiers & leftMask) !== 0 || anyOnly;
        }
        case C[25] || CT.C25:
        {
          return (this.modifiers & rightMask) !== 0 || anyOnly;
        }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      let independentModifier = (this.modifiers & 4294901760.0) >>> 0;
      let result = null;
      switch (key) {
        case C[26] || CT.C26:
        {
          result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 262144) >>> 0, 1, 8192);
          break;
        }
        case C[27] || CT.C27:
        {
          result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 131072) >>> 0, 2, 4);
          break;
        }
        case C[28] || CT.C28:
        {
          result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 524288) >>> 0, 32, 64);
          break;
        }
        case C[29] || CT.C29:
        {
          result = this[_isLeftRightModifierPressed$0](side, (independentModifier & 1048576) >>> 0, 8, 16);
          break;
        }
        case C[30] || CT.C30:
        {
          result = (independentModifier & 65536) !== 0;
          break;
        }
        case C[33] || CT.C33:
        case C[32] || CT.C32:
        case C[34] || CT.C34:
        case C[31] || CT.C31:
        {
          result = false;
          break;
        }
      }
      if (!(!result || this.getModifierSide(key) != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " thinks that a modifier is pressed, but can't figure out what side it's on.", I[19], 217, 12, "!result || getModifierSide(key) != null");
      return result;
    }
    getModifierSide(key) {
      const findSide = (anyMask, leftMask, rightMask) => {
        let combinedMask = (leftMask | rightMask) >>> 0;
        let combined = (this.modifiers & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask || (this.modifiers & (combinedMask | anyMask) >>> 0) >>> 0 === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[26] || CT.C26:
        {
          return findSide(262144, 1, 8192);
        }
        case C[27] || CT.C27:
        {
          return findSide(131072, 2, 4);
        }
        case C[28] || CT.C28:
        {
          return findSide(524288, 32, 64);
        }
        case C[29] || CT.C29:
        {
          return findSide(1048576, 8, 16);
        }
        case C[30] || CT.C30:
        case C[32] || CT.C32:
        case C[31] || CT.C31:
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("characters", this.characters));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("charactersIgnoringModifiers", this.charactersIgnoringModifiers));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return raw_keyboard_ios.RawKeyEventDataIos.is(other) && other.characters === this.characters && other.charactersIgnoringModifiers === this.charactersIgnoringModifiers && other.keyCode === this.keyCode && other.modifiers === this.modifiers;
    }
    get hashCode() {
      return ui.hashValues(this.characters, this.charactersIgnoringModifiers, this.keyCode, this.modifiers);
    }
  };
  (raw_keyboard_ios.RawKeyEventDataIos.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[characters$0] = characters;
    this[charactersIgnoringModifiers$0] = charactersIgnoringModifiers;
    this[keyCode$2] = keyCode;
    this[modifiers$2] = modifiers;
    if (!(characters !== null)) dart.assertFailed(null, I[19], 57, 15, "characters != null");
    if (!(charactersIgnoringModifiers !== null)) dart.assertFailed(null, I[19], 58, 15, "charactersIgnoringModifiers != null");
    if (!(keyCode !== null)) dart.assertFailed(null, I[19], 59, 15, "keyCode != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[19], 60, 15, "modifiers != null");
    raw_keyboard_ios.RawKeyEventDataIos.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_ios.RawKeyEventDataIos.prototype;
  dart.addTypeTests(raw_keyboard_ios.RawKeyEventDataIos);
  dart.addTypeCaches(raw_keyboard_ios.RawKeyEventDataIos);
  dart.setMethodSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getMethods(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    [_isLeftRightModifierPressed$0]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setStaticMethodSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ['_isUnprintableKey']);
  dart.setGetterSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getGetters(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_ios.RawKeyEventDataIos, I[20]);
  dart.setFieldSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ({
    __proto__: dart.getFields(raw_keyboard_ios.RawKeyEventDataIos.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_ios.RawKeyEventDataIos, () => ['modifierCapsLock', 'modifierShift', 'modifierLeftShift', 'modifierRightShift', 'modifierControl', 'modifierLeftControl', 'modifierRightControl', 'modifierOption', 'modifierLeftOption', 'modifierRightOption', 'modifierCommand', 'modifierLeftCommand', 'modifierRightCommand', 'modifierNumericPad', 'modifierHelp', 'modifierFunction', 'deviceIndependentMask']);
  dart.defineExtensionMethods(raw_keyboard_ios.RawKeyEventDataIos, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_ios.RawKeyEventDataIos, ['hashCode']);
  dart.defineLazy(raw_keyboard_ios.RawKeyEventDataIos, {
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_ios.RawKeyEventDataIos.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  }, false);
  var LogicalKeyboardKey_keyId = dart.privateName(keyboard_key, "LogicalKeyboardKey.keyId");
  dart.defineLazy(raw_keyboard_ios, {
    /*raw_keyboard_ios._kIosToLogicalMap*/get _kIosToLogicalMap() {
      return C[35] || CT.C35;
    }
  }, false);
  var hidUsage$ = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.hidUsage");
  var codePoint$ = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.codePoint");
  var modifiers$3 = dart.privateName(raw_keyboard_fuchsia, "RawKeyEventDataFuchsia.modifiers");
  var _isLeftRightModifierPressed$1 = dart.privateName(raw_keyboard_fuchsia, "_isLeftRightModifierPressed");
  raw_keyboard_fuchsia.RawKeyEventDataFuchsia = class RawKeyEventDataFuchsia extends raw_keyboard.RawKeyEventData {
    get hidUsage() {
      return this[hidUsage$];
    }
    set hidUsage(value) {
      super.hidUsage = value;
    }
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get modifiers() {
      return this[modifiers$3];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    static ['_#new#tearOff'](opts) {
      let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
      let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
      let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
      return new raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new({hidUsage: hidUsage, codePoint: codePoint, modifiers: modifiers});
    }
    get keyLabel() {
      return this.codePoint === 0 ? "" : core.String.fromCharCode(this.codePoint);
    }
    get logicalKey() {
      let t11;
      if (this.codePoint !== 0) {
        let flutterId = (0 | (this.codePoint & 4294967295.0) >>> 0) >>> 0;
        t11 = keyboard_maps.kFuchsiaToLogicalKey[$_get](flutterId);
        return t11 == null ? new keyboard_key.LogicalKeyboardKey.new((0 | (this.codePoint & 4294967295.0) >>> 0) >>> 0) : t11;
      }
      let newKey = keyboard_maps.kFuchsiaToLogicalKey[$_get]((this.hidUsage | 77309411328.0) >>> 0);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key.LogicalKeyboardKey.new((this.hidUsage | 77309411328.0) >>> 0);
    }
    get physicalKey() {
      let t11;
      t11 = keyboard_maps.kFuchsiaToPhysicalKey[$_get](this.hidUsage);
      return t11 == null ? new keyboard_key.PhysicalKeyboardKey.new(77309411328.0 + this.hidUsage) : t11;
    }
    [_isLeftRightModifierPressed$1](side, anyMask, leftMask, rightMask) {
      if ((this.modifiers & anyMask) === 0) {
        return false;
      }
      switch (side) {
        case C[22] || CT.C22:
        {
          return true;
        }
        case C[23] || CT.C23:
        {
          return (this.modifiers & leftMask) !== 0 && (this.modifiers & rightMask) !== 0;
        }
        case C[24] || CT.C24:
        {
          return (this.modifiers & leftMask) !== 0;
        }
        case C[25] || CT.C25:
        {
          return (this.modifiers & rightMask) !== 0;
        }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      if (!(side !== null)) dart.assertFailed(null, I[21], 108, 12, "side != null");
      switch (key) {
        case C[26] || CT.C26:
        {
          return this[_isLeftRightModifierPressed$1](side, 24, 8, 16);
        }
        case C[27] || CT.C27:
        {
          return this[_isLeftRightModifierPressed$1](side, 6, 2, 4);
        }
        case C[28] || CT.C28:
        {
          return this[_isLeftRightModifierPressed$1](side, 96, 32, 64);
        }
        case C[29] || CT.C29:
        {
          return this[_isLeftRightModifierPressed$1](side, 384, 128, 256);
        }
        case C[30] || CT.C30:
        {
          return (this.modifiers & 1) !== 0;
        }
        case C[32] || CT.C32:
        case C[31] || CT.C31:
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        {
          return false;
        }
      }
    }
    getModifierSide(key) {
      const findSide = (anyMask, leftMask, rightMask) => {
        let combined = (this.modifiers & anyMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === anyMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[26] || CT.C26:
        {
          return findSide(24, 8, 16);
        }
        case C[27] || CT.C27:
        {
          return findSide(6, 2, 4);
        }
        case C[28] || CT.C28:
        {
          return findSide(96, 32, 64);
        }
        case C[29] || CT.C29:
        {
          return findSide(384, 128, 256);
        }
        case C[30] || CT.C30:
        {
          return (this.modifiers & 1) === 0 ? null : raw_keyboard.KeyboardSide.all;
        }
        case C[32] || CT.C32:
        case C[31] || CT.C31:
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        {
          return null;
        }
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("hidUsage", this.hidUsage));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("codePoint", this.codePoint));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("modifiers", this.modifiers));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return raw_keyboard_fuchsia.RawKeyEventDataFuchsia.is(other) && other.hidUsage === this.hidUsage && other.codePoint === this.codePoint && other.modifiers === this.modifiers;
    }
    get hashCode() {
      return ui.hashValues(this.hidUsage, this.codePoint, this.modifiers);
    }
  };
  (raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new = function(opts) {
    let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[hidUsage$] = hidUsage;
    this[codePoint$] = codePoint;
    this[modifiers$3] = modifiers;
    if (!(hidUsage !== null)) dart.assertFailed(null, I[21], 29, 15, "hidUsage != null");
    if (!(codePoint !== null)) dart.assertFailed(null, I[21], 30, 15, "codePoint != null");
    if (!(modifiers !== null)) dart.assertFailed(null, I[21], 31, 15, "modifiers != null");
    raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_fuchsia.RawKeyEventDataFuchsia.prototype;
  dart.addTypeTests(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  dart.addTypeCaches(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  dart.setMethodSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    [_isLeftRightModifierPressed$1]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getGetters(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    keyLabel: core.String,
    logicalKey: keyboard_key.LogicalKeyboardKey,
    physicalKey: keyboard_key.PhysicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, I[22]);
  dart.setFieldSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getFields(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    hidUsage: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ['modifierNone', 'modifierCapsLock', 'modifierLeftShift', 'modifierRightShift', 'modifierShift', 'modifierLeftControl', 'modifierRightControl', 'modifierControl', 'modifierLeftAlt', 'modifierRightAlt', 'modifierAlt', 'modifierLeftMeta', 'modifierRightMeta', 'modifierMeta']);
  dart.defineExtensionMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, ['hashCode']);
  dart.defineLazy(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, {
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierCapsLock*/get modifierCapsLock() {
      return 1;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierShift*/get modifierShift() {
      return 6;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftControl*/get modifierLeftControl() {
      return 8;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightControl*/get modifierRightControl() {
      return 16;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierControl*/get modifierControl() {
      return 24;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftAlt*/get modifierLeftAlt() {
      return 32;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightAlt*/get modifierRightAlt() {
      return 64;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierAlt*/get modifierAlt() {
      return 96;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftMeta*/get modifierLeftMeta() {
      return 128;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightMeta*/get modifierRightMeta() {
      return 256;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierMeta*/get modifierMeta() {
      return 384;
    }
  }, false);
  var flags$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.flags");
  var codePoint$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.codePoint");
  var plainCodePoint$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.plainCodePoint");
  var keyCode$3 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.keyCode");
  var scanCode$1 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.scanCode");
  var metaState$0 = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.metaState");
  var eventSource$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.eventSource");
  var vendorId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.vendorId");
  var productId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.productId");
  var deviceId$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.deviceId");
  var repeatCount$ = dart.privateName(raw_keyboard_android, "RawKeyEventDataAndroid.repeatCount");
  var _isLeftRightModifierPressed$2 = dart.privateName(raw_keyboard_android, "_isLeftRightModifierPressed");
  raw_keyboard_android.RawKeyEventDataAndroid = class RawKeyEventDataAndroid extends raw_keyboard.RawKeyEventData {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get codePoint() {
      return this[codePoint$0];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get plainCodePoint() {
      return this[plainCodePoint$];
    }
    set plainCodePoint(value) {
      super.plainCodePoint = value;
    }
    get keyCode() {
      return this[keyCode$3];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$1];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get metaState() {
      return this[metaState$0];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get eventSource() {
      return this[eventSource$];
    }
    set eventSource(value) {
      super.eventSource = value;
    }
    get vendorId() {
      return this[vendorId$];
    }
    set vendorId(value) {
      super.vendorId = value;
    }
    get productId() {
      return this[productId$];
    }
    set productId(value) {
      super.productId = value;
    }
    get deviceId() {
      return this[deviceId$];
    }
    set deviceId(value) {
      super.deviceId = value;
    }
    get repeatCount() {
      return this[repeatCount$];
    }
    set repeatCount(value) {
      super.repeatCount = value;
    }
    static ['_#new#tearOff'](opts) {
      let flags = opts && 'flags' in opts ? opts.flags : 0;
      let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
      let plainCodePoint = opts && 'plainCodePoint' in opts ? opts.plainCodePoint : 0;
      let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
      let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
      let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
      let eventSource = opts && 'eventSource' in opts ? opts.eventSource : 0;
      let vendorId = opts && 'vendorId' in opts ? opts.vendorId : 0;
      let productId = opts && 'productId' in opts ? opts.productId : 0;
      let deviceId = opts && 'deviceId' in opts ? opts.deviceId : 0;
      let repeatCount = opts && 'repeatCount' in opts ? opts.repeatCount : 0;
      return new raw_keyboard_android.RawKeyEventDataAndroid.new({flags: flags, codePoint: codePoint, plainCodePoint: plainCodePoint, keyCode: keyCode, scanCode: scanCode, metaState: metaState, eventSource: eventSource, vendorId: vendorId, productId: productId, deviceId: deviceId, repeatCount: repeatCount});
    }
    get keyLabel() {
      return this.plainCodePoint === 0 ? "" : core.String.fromCharCode((this.plainCodePoint & 2147483647) >>> 0);
    }
    get physicalKey() {
      if (keyboard_maps.kAndroidToPhysicalKey[$containsKey](this.scanCode)) {
        return dart.nullCheck(keyboard_maps.kAndroidToPhysicalKey[$_get](this.scanCode));
      }
      if ((this.eventSource & 16777232) >>> 0 === 16777232) {
        let foundKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowUp)) {
          return keyboard_key.PhysicalKeyboardKey.arrowUp;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowDown)) {
          return keyboard_key.PhysicalKeyboardKey.arrowDown;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowLeft)) {
          return keyboard_key.PhysicalKeyboardKey.arrowLeft;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowRight)) {
          return keyboard_key.PhysicalKeyboardKey.arrowRight;
        }
      }
      return new keyboard_key.PhysicalKeyboardKey.new(73014444032.0 + this.scanCode);
    }
    get logicalKey() {
      let t11;
      let numPadKey = keyboard_maps.kAndroidNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel[$isNotEmpty] && !keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) {
        let combinedCodePoint = (this.plainCodePoint & 2147483647) >>> 0;
        let keyId = (0 | (combinedCodePoint & 4294967295.0) >>> 0) >>> 0;
        t11 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t11 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId) : t11;
      }
      let newKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      return new keyboard_key.LogicalKeyboardKey.new((this.keyCode | 73014444032.0) >>> 0);
    }
    [_isLeftRightModifierPressed$2](side, anyMask, leftMask, rightMask) {
      if ((this.metaState & anyMask) === 0) {
        return false;
      }
      switch (side) {
        case C[22] || CT.C22:
        {
          return true;
        }
        case C[23] || CT.C23:
        {
          return (this.metaState & leftMask) !== 0 && (this.metaState & rightMask) !== 0;
        }
        case C[24] || CT.C24:
        {
          return (this.metaState & leftMask) !== 0;
        }
        case C[25] || CT.C25:
        {
          return (this.metaState & rightMask) !== 0;
        }
      }
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C[22] || CT.C22;
      if (!(side !== null)) dart.assertFailed(null, I[23], 228, 12, "side != null");
      switch (key) {
        case C[26] || CT.C26:
        {
          return this[_isLeftRightModifierPressed$2](side, 4096, 8192, 16384);
        }
        case C[27] || CT.C27:
        {
          return this[_isLeftRightModifierPressed$2](side, 1, 64, 128);
        }
        case C[28] || CT.C28:
        {
          return this[_isLeftRightModifierPressed$2](side, 2, 16, 32);
        }
        case C[29] || CT.C29:
        {
          return this[_isLeftRightModifierPressed$2](side, 65536, 131072, 262144);
        }
        case C[30] || CT.C30:
        {
          return (this.metaState & 1048576) !== 0;
        }
        case C[32] || CT.C32:
        {
          return (this.metaState & 2097152) !== 0;
        }
        case C[31] || CT.C31:
        {
          return (this.metaState & 4194304) !== 0;
        }
        case C[33] || CT.C33:
        {
          return (this.metaState & 8) !== 0;
        }
        case C[34] || CT.C34:
        {
          return (this.metaState & 4) !== 0;
        }
      }
    }
    getModifierSide(key) {
      const findSide = (anyMask, leftMask, rightMask) => {
        let combinedMask = (leftMask | rightMask) >>> 0;
        let combined = (this.metaState & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        if ((this.metaState & anyMask) !== 0) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, T$.intAndintAndintToKeyboardSideN());
      switch (key) {
        case C[26] || CT.C26:
        {
          return findSide(4096, 8192, 16384);
        }
        case C[27] || CT.C27:
        {
          return findSide(1, 64, 128);
        }
        case C[28] || CT.C28:
        {
          return findSide(2, 16, 32);
        }
        case C[29] || CT.C29:
        {
          return findSide(65536, 131072, 262144);
        }
        case C[30] || CT.C30:
        case C[32] || CT.C32:
        case C[31] || CT.C31:
        case C[33] || CT.C33:
        case C[34] || CT.C34:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("flags", this.flags));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("codePoint", this.codePoint));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("plainCodePoint", this.plainCodePoint));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("keyCode", this.keyCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("scanCode", this.scanCode));
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("metaState", this.metaState));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return raw_keyboard_android.RawKeyEventDataAndroid.is(other) && other.flags === this.flags && other.codePoint === this.codePoint && other.plainCodePoint === this.plainCodePoint && other.keyCode === this.keyCode && other.scanCode === this.scanCode && other.metaState === this.metaState;
    }
    get hashCode() {
      return ui.hashValues(this.flags, this.codePoint, this.plainCodePoint, this.keyCode, this.scanCode, this.metaState);
    }
  };
  (raw_keyboard_android.RawKeyEventDataAndroid.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let plainCodePoint = opts && 'plainCodePoint' in opts ? opts.plainCodePoint : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    let eventSource = opts && 'eventSource' in opts ? opts.eventSource : 0;
    let vendorId = opts && 'vendorId' in opts ? opts.vendorId : 0;
    let productId = opts && 'productId' in opts ? opts.productId : 0;
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : 0;
    let repeatCount = opts && 'repeatCount' in opts ? opts.repeatCount : 0;
    this[flags$] = flags;
    this[codePoint$0] = codePoint;
    this[plainCodePoint$] = plainCodePoint;
    this[keyCode$3] = keyCode;
    this[scanCode$1] = scanCode;
    this[metaState$0] = metaState;
    this[eventSource$] = eventSource;
    this[vendorId$] = vendorId;
    this[productId$] = productId;
    this[deviceId$] = deviceId;
    this[repeatCount$] = repeatCount;
    if (!(flags !== null)) dart.assertFailed(null, I[23], 43, 15, "flags != null");
    if (!(codePoint !== null)) dart.assertFailed(null, I[23], 44, 15, "codePoint != null");
    if (!(keyCode !== null)) dart.assertFailed(null, I[23], 45, 15, "keyCode != null");
    if (!(scanCode !== null)) dart.assertFailed(null, I[23], 46, 15, "scanCode != null");
    if (!(metaState !== null)) dart.assertFailed(null, I[23], 47, 15, "metaState != null");
    raw_keyboard_android.RawKeyEventDataAndroid.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_android.RawKeyEventDataAndroid.prototype;
  dart.addTypeTests(raw_keyboard_android.RawKeyEventDataAndroid);
  dart.addTypeCaches(raw_keyboard_android.RawKeyEventDataAndroid);
  dart.setMethodSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getMethods(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    [_isLeftRightModifierPressed$2]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}, {}),
    getModifierSide: dart.fnType(dart.nullable(raw_keyboard.KeyboardSide), [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getGetters(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_android.RawKeyEventDataAndroid, I[24]);
  dart.setFieldSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getFields(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    flags: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    plainCodePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int),
    eventSource: dart.finalFieldType(core.int),
    vendorId: dart.finalFieldType(core.int),
    productId: dart.finalFieldType(core.int),
    deviceId: dart.finalFieldType(core.int),
    repeatCount: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ['_sourceJoystick', 'modifierNone', 'modifierAlt', 'modifierLeftAlt', 'modifierRightAlt', 'modifierShift', 'modifierLeftShift', 'modifierRightShift', 'modifierSym', 'modifierFunction', 'modifierControl', 'modifierLeftControl', 'modifierRightControl', 'modifierMeta', 'modifierLeftMeta', 'modifierRightMeta', 'modifierCapsLock', 'modifierNumLock', 'modifierScrollLock']);
  dart.defineExtensionMethods(raw_keyboard_android.RawKeyEventDataAndroid, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard_android.RawKeyEventDataAndroid, ['hashCode']);
  dart.defineLazy(raw_keyboard_android.RawKeyEventDataAndroid, {
    /*raw_keyboard_android.RawKeyEventDataAndroid._sourceJoystick*/get _sourceJoystick() {
      return 16777232;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt*/get modifierLeftAlt() {
      return 16;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt*/get modifierRightAlt() {
      return 32;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift*/get modifierLeftShift() {
      return 64;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift*/get modifierRightShift() {
      return 128;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierSym*/get modifierSym() {
      return 4;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction*/get modifierFunction() {
      return 8;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierControl*/get modifierControl() {
      return 4096;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl*/get modifierLeftControl() {
      return 8192;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl*/get modifierRightControl() {
      return 16384;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta*/get modifierMeta() {
      return 65536;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta*/get modifierLeftMeta() {
      return 131072;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta*/get modifierRightMeta() {
      return 262144;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock*/get modifierCapsLock() {
      return 1048576;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock*/get modifierNumLock() {
      return 2097152;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock*/get modifierScrollLock() {
      return 4194304;
    }
  }, false);
  dart.defineLazy(raw_keyboard_android, {
    /*raw_keyboard_android._kCombiningCharacterMask*/get _kCombiningCharacterMask() {
      return 2147483647;
    }
  }, false);
  var _name = dart.privateName(core, "_name");
  raw_keyboard.KeyboardSide = class KeyboardSide extends core._Enum {
    toString() {
      return "KeyboardSide." + this[_name];
    }
  };
  (raw_keyboard.KeyboardSide.new = function(index, name) {
    raw_keyboard.KeyboardSide.__proto__.new.call(this, index, name);
    ;
  }).prototype = raw_keyboard.KeyboardSide.prototype;
  dart.addTypeTests(raw_keyboard.KeyboardSide);
  dart.addTypeCaches(raw_keyboard.KeyboardSide);
  dart.setLibraryUri(raw_keyboard.KeyboardSide, I[11]);
  dart.setStaticFieldSignature(raw_keyboard.KeyboardSide, () => ['values', 'any', 'left', 'right', 'all']);
  dart.defineExtensionMethods(raw_keyboard.KeyboardSide, ['toString']);
  raw_keyboard.KeyboardSide.any = C[22] || CT.C22;
  raw_keyboard.KeyboardSide.left = C[24] || CT.C24;
  raw_keyboard.KeyboardSide.right = C[25] || CT.C25;
  raw_keyboard.KeyboardSide.all = C[23] || CT.C23;
  raw_keyboard.KeyboardSide.values = C[57] || CT.C57;
  raw_keyboard.ModifierKey = class ModifierKey extends core._Enum {
    toString() {
      return "ModifierKey." + this[_name];
    }
  };
  (raw_keyboard.ModifierKey.new = function(index, name) {
    raw_keyboard.ModifierKey.__proto__.new.call(this, index, name);
    ;
  }).prototype = raw_keyboard.ModifierKey.prototype;
  dart.addTypeTests(raw_keyboard.ModifierKey);
  dart.addTypeCaches(raw_keyboard.ModifierKey);
  dart.setLibraryUri(raw_keyboard.ModifierKey, I[11]);
  dart.setStaticFieldSignature(raw_keyboard.ModifierKey, () => ['values', 'controlModifier', 'shiftModifier', 'altModifier', 'metaModifier', 'capsLockModifier', 'numLockModifier', 'scrollLockModifier', 'functionModifier', 'symbolModifier']);
  dart.defineExtensionMethods(raw_keyboard.ModifierKey, ['toString']);
  raw_keyboard.ModifierKey.controlModifier = C[26] || CT.C26;
  raw_keyboard.ModifierKey.shiftModifier = C[27] || CT.C27;
  raw_keyboard.ModifierKey.altModifier = C[28] || CT.C28;
  raw_keyboard.ModifierKey.metaModifier = C[29] || CT.C29;
  raw_keyboard.ModifierKey.capsLockModifier = C[30] || CT.C30;
  raw_keyboard.ModifierKey.numLockModifier = C[32] || CT.C32;
  raw_keyboard.ModifierKey.scrollLockModifier = C[31] || CT.C31;
  raw_keyboard.ModifierKey.functionModifier = C[33] || CT.C33;
  raw_keyboard.ModifierKey.symbolModifier = C[34] || CT.C34;
  raw_keyboard.ModifierKey.values = C[58] || CT.C58;
  var character$ = dart.privateName(raw_keyboard, "RawKeyEvent.character");
  var repeat$ = dart.privateName(raw_keyboard, "RawKeyEvent.repeat");
  var data$ = dart.privateName(raw_keyboard, "RawKeyEvent.data");
  const Object_Diagnosticable$36$ = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$.new = function() {
  }).prototype = Object_Diagnosticable$36$.prototype;
  dart.applyMixin(Object_Diagnosticable$36$, diagnostics.Diagnosticable);
  raw_keyboard.RawKeyEvent = class RawKeyEvent extends Object_Diagnosticable$36$ {
    get character() {
      return this[character$];
    }
    set character(value) {
      super.character = value;
    }
    get repeat() {
      return this[repeat$];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static fromMessage(message) {
      let t11, t11$, t11$0, t11$1, t11$2, t11$3, t11$4, t11$5, t11$6, t11$7, t11$8, t11$9, t11$10, t11$11, t11$12, t11$13, t11$14, t11$15, t11$16, t11$17, t11$18, t11$19, t11$20, t11$21, t11$22, t11$23, t11$24, t11$25, t11$26, t11$27, t11$28;
      let character = null;
      function _dataFromWeb() {
        let t11, t11$, t11$0, t11$1;
        let key = T$.StringN().as(message[$_get]("key"));
        if (key != null && key[$isNotEmpty] && key.length === 1) {
          character = key;
        }
        return new raw_keyboard_web.RawKeyEventDataWeb.new({code: (t11 = T$.StringN().as(message[$_get]("code")), t11 == null ? "" : t11), key: (t11$ = key, t11$ == null ? "" : t11$), location: (t11$0 = T$.intN().as(message[$_get]("location")), t11$0 == null ? 0 : t11$0), metaState: (t11$1 = T$.intN().as(message[$_get]("metaState")), t11$1 == null ? 0 : t11$1)});
      }
      dart.fn(_dataFromWeb, T$.VoidToRawKeyEventData());
      let data = null;
      if (true) {
        data = _dataFromWeb();
      } else {
        let keymap = core.String.as(dart.nullCheck(message[$_get]("keymap")));
        switch (keymap) {
          case "android":
          {
            data = new raw_keyboard_android.RawKeyEventDataAndroid.new({flags: (t11 = T$.intN().as(message[$_get]("flags")), t11 == null ? 0 : t11), codePoint: (t11$ = T$.intN().as(message[$_get]("codePoint")), t11$ == null ? 0 : t11$), keyCode: (t11$0 = T$.intN().as(message[$_get]("keyCode")), t11$0 == null ? 0 : t11$0), plainCodePoint: (t11$1 = T$.intN().as(message[$_get]("plainCodePoint")), t11$1 == null ? 0 : t11$1), scanCode: (t11$2 = T$.intN().as(message[$_get]("scanCode")), t11$2 == null ? 0 : t11$2), metaState: (t11$3 = T$.intN().as(message[$_get]("metaState")), t11$3 == null ? 0 : t11$3), eventSource: (t11$4 = T$.intN().as(message[$_get]("source")), t11$4 == null ? 0 : t11$4), vendorId: (t11$5 = T$.intN().as(message[$_get]("vendorId")), t11$5 == null ? 0 : t11$5), productId: (t11$6 = T$.intN().as(message[$_get]("productId")), t11$6 == null ? 0 : t11$6), deviceId: (t11$7 = T$.intN().as(message[$_get]("deviceId")), t11$7 == null ? 0 : t11$7), repeatCount: (t11$8 = T$.intN().as(message[$_get]("repeatCount")), t11$8 == null ? 0 : t11$8)});
            if (message[$containsKey]("character")) {
              character = T$.StringN().as(message[$_get]("character"));
            }
            break;
          }
          case "fuchsia":
          {
            let codePoint = (t11$9 = T$.intN().as(message[$_get]("codePoint")), t11$9 == null ? 0 : t11$9);
            data = new raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new({hidUsage: (t11$10 = T$.intN().as(message[$_get]("hidUsage")), t11$10 == null ? 0 : t11$10), codePoint: codePoint, modifiers: (t11$11 = T$.intN().as(message[$_get]("modifiers")), t11$11 == null ? 0 : t11$11)});
            if (codePoint !== 0) {
              character = core.String.fromCharCode(codePoint);
            }
            break;
          }
          case "macos":
          {
            data = new raw_keyboard_macos.RawKeyEventDataMacOs.new({characters: (t11$12 = T$.StringN().as(message[$_get]("characters")), t11$12 == null ? "" : t11$12), charactersIgnoringModifiers: (t11$13 = T$.StringN().as(message[$_get]("charactersIgnoringModifiers")), t11$13 == null ? "" : t11$13), keyCode: (t11$14 = T$.intN().as(message[$_get]("keyCode")), t11$14 == null ? 0 : t11$14), modifiers: (t11$15 = T$.intN().as(message[$_get]("modifiers")), t11$15 == null ? 0 : t11$15)});
            character = T$.StringN().as(message[$_get]("characters"));
            break;
          }
          case "ios":
          {
            data = new raw_keyboard_ios.RawKeyEventDataIos.new({characters: (t11$16 = T$.StringN().as(message[$_get]("characters")), t11$16 == null ? "" : t11$16), charactersIgnoringModifiers: (t11$17 = T$.StringN().as(message[$_get]("charactersIgnoringModifiers")), t11$17 == null ? "" : t11$17), keyCode: (t11$18 = T$.intN().as(message[$_get]("keyCode")), t11$18 == null ? 0 : t11$18), modifiers: (t11$19 = T$.intN().as(message[$_get]("modifiers")), t11$19 == null ? 0 : t11$19)});
            break;
          }
          case "linux":
          {
            let unicodeScalarValues = (t11$20 = T$.intN().as(message[$_get]("unicodeScalarValues")), t11$20 == null ? 0 : t11$20);
            data = new raw_keyboard_linux.RawKeyEventDataLinux.new({keyHelper: raw_keyboard_linux.KeyHelper.new((t11$21 = T$.StringN().as(message[$_get]("toolkit")), t11$21 == null ? "" : t11$21)), unicodeScalarValues: unicodeScalarValues, keyCode: (t11$22 = T$.intN().as(message[$_get]("keyCode")), t11$22 == null ? 0 : t11$22), scanCode: (t11$23 = T$.intN().as(message[$_get]("scanCode")), t11$23 == null ? 0 : t11$23), modifiers: (t11$24 = T$.intN().as(message[$_get]("modifiers")), t11$24 == null ? 0 : t11$24), isDown: dart.equals(message[$_get]("type"), "keydown")});
            if (unicodeScalarValues !== 0) {
              character = core.String.fromCharCode(unicodeScalarValues);
            }
            break;
          }
          case "windows":
          {
            let characterCodePoint = (t11$25 = T$.intN().as(message[$_get]("characterCodePoint")), t11$25 == null ? 0 : t11$25);
            data = new raw_keyboard_windows.RawKeyEventDataWindows.new({keyCode: (t11$26 = T$.intN().as(message[$_get]("keyCode")), t11$26 == null ? 0 : t11$26), scanCode: (t11$27 = T$.intN().as(message[$_get]("scanCode")), t11$27 == null ? 0 : t11$27), characterCodePoint: characterCodePoint, modifiers: (t11$28 = T$.intN().as(message[$_get]("modifiers")), t11$28 == null ? 0 : t11$28)});
            if (characterCodePoint !== 0) {
              character = core.String.fromCharCode(characterCodePoint);
            }
            break;
          }
          case "web":
          {
            data = _dataFromWeb();
            break;
          }
          default:
          {
            dart.throw(assertions.FlutterError.new("Unknown keymap for key events: " + keymap));
          }
        }
      }
      let repeat = raw_keyboard.RawKeyboard.instance.physicalKeysPressed.contains(data.physicalKey);
      let type = core.String.as(dart.nullCheck(message[$_get]("type")));
      switch (type) {
        case "keydown":
        {
          return new raw_keyboard.RawKeyDownEvent.new({data: data, character: character, repeat: repeat});
        }
        case "keyup":
        {
          return new raw_keyboard.RawKeyUpEvent.new({data: data});
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown key event type: " + type));
        }
      }
    }
    static ['_#fromMessage#tearOff'](message) {
      return raw_keyboard.RawKeyEvent.fromMessage(message);
    }
    isKeyPressed(key) {
      return raw_keyboard.RawKeyboard.instance.keysPressed.contains(key);
    }
    get isControlPressed() {
      return this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlLeft) || this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlRight);
    }
    get isShiftPressed() {
      return this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftLeft) || this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftRight);
    }
    get isAltPressed() {
      return this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altLeft) || this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altRight);
    }
    get isMetaPressed() {
      return this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaLeft) || this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaRight);
    }
    get physicalKey() {
      return this.data.physicalKey;
    }
    get logicalKey() {
      return this.data.logicalKey;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLogicalKeyboardKey()).new("logicalKey", this.logicalKey));
      properties.add(new (T$.DiagnosticsPropertyOfPhysicalKeyboardKey()).new("physicalKey", this.physicalKey));
      if (raw_keyboard.RawKeyDownEvent.is(this)) properties.add(new (T$.DiagnosticsPropertyOfbool()).new("repeat", this.repeat));
    }
  };
  (raw_keyboard.RawKeyEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : false;
    this[data$] = data;
    this[character$] = character;
    this[repeat$] = repeat;
    ;
  }).prototype = raw_keyboard.RawKeyEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyEvent);
  dart.setMethodSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyEvent.__proto__),
    isKeyPressed: dart.fnType(core.bool, [keyboard_key.LogicalKeyboardKey])
  }));
  dart.setStaticMethodSignature(raw_keyboard.RawKeyEvent, () => ['fromMessage']);
  dart.setGetterSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEvent.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEvent, I[11]);
  dart.setFieldSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyEvent.__proto__),
    character: dart.finalFieldType(dart.nullable(core.String)),
    repeat: dart.finalFieldType(core.bool),
    data: dart.finalFieldType(raw_keyboard.RawKeyEventData)
  }));
  raw_keyboard.RawKeyDownEvent = class RawKeyDownEvent extends raw_keyboard.RawKeyEvent {
    static ['_#new#tearOff'](opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let character = opts && 'character' in opts ? opts.character : null;
      let repeat = opts && 'repeat' in opts ? opts.repeat : false;
      return new raw_keyboard.RawKeyDownEvent.new({data: data, character: character, repeat: repeat});
    }
  };
  (raw_keyboard.RawKeyDownEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : false;
    raw_keyboard.RawKeyDownEvent.__proto__.new.call(this, {data: data, character: character, repeat: repeat});
    ;
  }).prototype = raw_keyboard.RawKeyDownEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyDownEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyDownEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyDownEvent, I[11]);
  raw_keyboard.RawKeyUpEvent = class RawKeyUpEvent extends raw_keyboard.RawKeyEvent {
    static ['_#new#tearOff'](opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let character = opts && 'character' in opts ? opts.character : null;
      return new raw_keyboard.RawKeyUpEvent.new({data: data, character: character});
    }
  };
  (raw_keyboard.RawKeyUpEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyUpEvent.__proto__.new.call(this, {data: data, character: character, repeat: false});
    ;
  }).prototype = raw_keyboard.RawKeyUpEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyUpEvent);
  dart.addTypeCaches(raw_keyboard.RawKeyUpEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyUpEvent, I[11]);
  var _listeners = dart.privateName(raw_keyboard, "_listeners");
  var _cachedKeyEventHandler = dart.privateName(raw_keyboard, "_cachedKeyEventHandler");
  var _cachedKeyMessageHandler = dart.privateName(raw_keyboard, "_cachedKeyMessageHandler");
  var _keysPressed = dart.privateName(raw_keyboard, "_keysPressed");
  var _hiddenKeysPressed = dart.privateName(raw_keyboard, "_hiddenKeysPressed");
  var _synchronizeModifiers = dart.privateName(raw_keyboard, "_synchronizeModifiers");
  var _ModifierSidePair_side = dart.privateName(raw_keyboard, "_ModifierSidePair.side");
  var _ModifierSidePair_modifier = dart.privateName(raw_keyboard, "_ModifierSidePair.modifier");
  raw_keyboard.RawKeyboard = class RawKeyboard extends core.Object {
    static ['_#_#tearOff']() {
      return new raw_keyboard.RawKeyboard.__();
    }
    addListener(listener) {
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      this[_listeners][$remove](listener);
    }
    get keyEventHandler() {
      if (!dart.equals(dart.nullCheck(binding$0.ServicesBinding.instance).keyEventManager.keyMessageHandler, this[_cachedKeyMessageHandler])) {
        this[_cachedKeyMessageHandler] = dart.nullCheck(binding$0.ServicesBinding.instance).keyEventManager.keyMessageHandler;
        this[_cachedKeyEventHandler] = this[_cachedKeyMessageHandler] == null ? null : dart.fn(event => {
          if (!false) dart.assertFailed("The RawKeyboard.instance.keyEventHandler assigned by Flutter is a dummy " + "callback kept for compatibility and should not be directly called. Use " + "ServicesBinding.instance!.keyMessageHandler instead.", I[10], 637, 18, "false");
          return true;
        }, T$.RawKeyEventTobool());
      }
      return this[_cachedKeyEventHandler];
    }
    set keyEventHandler(handler) {
      this[_cachedKeyEventHandler] = handler;
      this[_cachedKeyMessageHandler] = handler == null ? null : dart.fn(message => handler(message.rawEvent), T$.KeyMessageTobool());
      dart.nullCheck(binding$0.ServicesBinding.instance).keyEventManager.keyMessageHandler = this[_cachedKeyMessageHandler];
    }
    handleRawKeyEvent(event) {
      let shouldDispatch = true;
      if (raw_keyboard.RawKeyDownEvent.is(event)) {
        if (event.data.shouldDispatchEvent()) {
          this[_keysPressed][$_set](event.physicalKey, event.logicalKey);
        } else {
          shouldDispatch = false;
          this[_hiddenKeysPressed].add(event.physicalKey);
        }
      } else if (raw_keyboard.RawKeyUpEvent.is(event)) {
        if (!this[_hiddenKeysPressed].contains(event.physicalKey)) {
          this[_keysPressed][$remove](event.physicalKey);
        } else {
          this[_hiddenKeysPressed].remove(event.physicalKey);
          shouldDispatch = false;
        }
      }
      if (!shouldDispatch) {
        return true;
      }
      this[_synchronizeModifiers](event);
      if (!(!raw_keyboard.RawKeyDownEvent.is(event) || this[_keysPressed][$isNotEmpty])) dart.assertFailed("Attempted to send a key down event when no keys are in keysPressed. " + "This state can occur if the key event being sent doesn't properly " + "set its modifier flags. This was the event: " + dart.str(event) + " and its data: " + dart.str(event.data), I[10], 685, 7, "event is! RawKeyDownEvent || _keysPressed.isNotEmpty");
      for (let listener of T$.ListOfRawKeyEventTovoid().of(this[_listeners])) {
        try {
          if (this[_listeners][$contains](listener)) {
            listener(event);
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.fn(() => {
              collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfRawKeyEvent()).new("Event", event)]), T$.VoidToListOfDiagnosticsNode());
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[10], 699, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<RawKeyEvent>('Event', event),\n          ];\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while processing a raw key listener"), informationCollector: collector}));
          } else
            throw e;
        }
      }
      return false;
    }
    [_synchronizeModifiers](event) {
      let modifiersPressed = event.data.modifiersPressed;
      let modifierKeys = new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
      let anySideKeys = T$.LinkedHashSetOfPhysicalKeyboardKey().new();
      let keysPressedAfterEvent = (() => {
        let t12 = T$.LinkedHashSetOfPhysicalKeyboardKey().of(this[_keysPressed][$keys]);
        if (raw_keyboard.RawKeyDownEvent.is(event)) t12.add(event.physicalKey);
        return t12;
      })();
      let thisKeyModifier = null;
      for (let key of raw_keyboard.ModifierKey.values) {
        let thisModifierKeys = raw_keyboard.RawKeyboard._modifierKeyMap[$_get](new raw_keyboard._ModifierSidePair.new(key, raw_keyboard.KeyboardSide.all));
        if (thisModifierKeys == null) continue;
        if (thisModifierKeys.contains(event.physicalKey)) {
          thisKeyModifier = key;
        }
        if (modifiersPressed[$_get](key) === raw_keyboard.KeyboardSide.any) {
          anySideKeys.addAll(thisModifierKeys);
          if (thisModifierKeys[$any](dart.bind(keysPressedAfterEvent, 'contains'))) {
            continue;
          }
        }
        let mappedKeys = modifiersPressed[$_get](key) == null ? T$.LinkedHashSetOfPhysicalKeyboardKey().new() : raw_keyboard.RawKeyboard._modifierKeyMap[$_get](new raw_keyboard._ModifierSidePair.new(key, modifiersPressed[$_get](key)));
        if (!dart.fn(() => {
          if (mappedKeys == null) {
            print.debugPrint("Platform key support for " + io.Platform.operatingSystem + " is " + "producing unsupported modifier combinations for " + "modifier " + dart.str(key) + " on side " + dart.str(modifiersPressed[$_get](key)) + ".");
            if (raw_keyboard_android.RawKeyEventDataAndroid.is(event.data)) {
              print.debugPrint("Android raw key metaState: " + dart.str(raw_keyboard_android.RawKeyEventDataAndroid.as(event.data).metaState));
            }
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[10], 808, 14, "() {\n        if (mappedKeys == null) {\n          debugPrint(\n            'Platform key support for ${Platform.operatingSystem} is '\n            'producing unsupported modifier combinations for '\n            'modifier $key on side ${modifiersPressed[key]}.',\n          );\n          if (event.data is RawKeyEventDataAndroid) {\n            debugPrint('Android raw key metaState: ${(event.data as RawKeyEventDataAndroid).metaState}');\n          }\n        }\n        return true;\n      }()");
        if (mappedKeys == null) {
          continue;
        }
        for (let physicalModifier of mappedKeys) {
          modifierKeys[$_set](physicalModifier, dart.nullCheck(raw_keyboard.RawKeyboard._allModifiers[$_get](physicalModifier)));
        }
      }
      raw_keyboard.RawKeyboard._allModifiersExceptFn[$keys][$where](dart.fn(key => !anySideKeys.contains(key), T$.PhysicalKeyboardKeyTobool()))[$forEach](dart.bind(this[_keysPressed], $remove));
      if (!raw_keyboard_fuchsia.RawKeyEventDataFuchsia.is(event.data) && !raw_keyboard_macos.RawKeyEventDataMacOs.is(event.data)) {
        this[_keysPressed][$remove](keyboard_key.PhysicalKeyboardKey.fn);
      }
      this[_keysPressed][$addAll](modifierKeys);
      if (raw_keyboard.RawKeyDownEvent.is(event) && thisKeyModifier != null && !this[_keysPressed][$containsKey](event.physicalKey)) {
        if (raw_keyboard_linux.RawKeyEventDataLinux.is(event.data) && event.physicalKey._equals(keyboard_key.PhysicalKeyboardKey.altRight)) {
          let logicalKey = raw_keyboard.RawKeyboard._allModifiersExceptFn[$_get](event.physicalKey);
          if (logicalKey != null) {
            this[_keysPressed][$_set](event.physicalKey, logicalKey);
          }
        }
      }
    }
    get keysPressed() {
      return this[_keysPressed][$values][$toSet]();
    }
    get physicalKeysPressed() {
      return this[_keysPressed][$keys][$toSet]();
    }
    lookUpLayout(physicalKey) {
      return this[_keysPressed][$_get](physicalKey);
    }
    clearKeysPressed() {
      return this[_keysPressed][$clear]();
    }
  };
  (raw_keyboard.RawKeyboard.__ = function() {
    this[_listeners] = T$.JSArrayOfRawKeyEventTovoid().of([]);
    this[_cachedKeyEventHandler] = null;
    this[_cachedKeyMessageHandler] = null;
    this[_keysPressed] = new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
    this[_hiddenKeysPressed] = T$.LinkedHashSetOfPhysicalKeyboardKey().new();
    ;
  }).prototype = raw_keyboard.RawKeyboard.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyboard);
  dart.addTypeCaches(raw_keyboard.RawKeyboard);
  dart.setMethodSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyboard.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    handleRawKeyEvent: dart.fnType(core.bool, [raw_keyboard.RawKeyEvent]),
    [_synchronizeModifiers]: dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]),
    lookUpLayout: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [keyboard_key.PhysicalKeyboardKey]),
    clearKeysPressed: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyboard.__proto__),
    keyEventHandler: dart.nullable(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent])),
    keysPressed: core.Set$(keyboard_key.LogicalKeyboardKey),
    physicalKeysPressed: core.Set$(keyboard_key.PhysicalKeyboardKey)
  }));
  dart.setSetterSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getSetters(raw_keyboard.RawKeyboard.__proto__),
    keyEventHandler: dart.nullable(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent]))
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyboard, I[11]);
  dart.setFieldSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyboard.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]))),
    [_cachedKeyEventHandler]: dart.fieldType(dart.nullable(dart.fnType(core.bool, [raw_keyboard.RawKeyEvent]))),
    [_cachedKeyMessageHandler]: dart.fieldType(dart.nullable(dart.fnType(core.bool, [hardware_keyboard.KeyMessage]))),
    [_keysPressed]: dart.finalFieldType(core.Map$(keyboard_key.PhysicalKeyboardKey, keyboard_key.LogicalKeyboardKey)),
    [_hiddenKeysPressed]: dart.finalFieldType(core.Set$(keyboard_key.PhysicalKeyboardKey))
  }));
  dart.setStaticFieldSignature(raw_keyboard.RawKeyboard, () => ['instance', '_modifierKeyMap', '_allModifiersExceptFn', '_allModifiers']);
  dart.defineLazy(raw_keyboard.RawKeyboard, {
    /*raw_keyboard.RawKeyboard.instance*/get instance() {
      return new raw_keyboard.RawKeyboard.__();
    },
    /*raw_keyboard.RawKeyboard._modifierKeyMap*/get _modifierKeyMap() {
      return new (T$.LinkedMapOf_ModifierSidePair$SetOfPhysicalKeyboardKey()).from([C[59] || CT.C59, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.altLeft]), C[60] || CT.C60, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.altRight]), C[61] || CT.C61, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.altLeft, keyboard_key.PhysicalKeyboardKey.altRight]), C[62] || CT.C62, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.altLeft]), C[63] || CT.C63, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.shiftLeft]), C[64] || CT.C64, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.shiftRight]), C[65] || CT.C65, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.shiftLeft, keyboard_key.PhysicalKeyboardKey.shiftRight]), C[66] || CT.C66, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.shiftLeft]), C[67] || CT.C67, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.controlLeft]), C[68] || CT.C68, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.controlRight]), C[69] || CT.C69, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.controlLeft, keyboard_key.PhysicalKeyboardKey.controlRight]), C[70] || CT.C70, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.controlLeft]), C[71] || CT.C71, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.metaLeft]), C[72] || CT.C72, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.metaRight]), C[73] || CT.C73, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.metaLeft, keyboard_key.PhysicalKeyboardKey.metaRight]), C[74] || CT.C74, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.metaLeft]), C[75] || CT.C75, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.capsLock]), C[76] || CT.C76, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.numLock]), C[77] || CT.C77, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.scrollLock]), C[78] || CT.C78, T$.LinkedHashSetOfPhysicalKeyboardKey().from([keyboard_key.PhysicalKeyboardKey.fn])]);
    },
    /*raw_keyboard.RawKeyboard._allModifiersExceptFn*/get _allModifiersExceptFn() {
      return new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).from([keyboard_key.PhysicalKeyboardKey.altLeft, keyboard_key.LogicalKeyboardKey.altLeft, keyboard_key.PhysicalKeyboardKey.altRight, keyboard_key.LogicalKeyboardKey.altRight, keyboard_key.PhysicalKeyboardKey.shiftLeft, keyboard_key.LogicalKeyboardKey.shiftLeft, keyboard_key.PhysicalKeyboardKey.shiftRight, keyboard_key.LogicalKeyboardKey.shiftRight, keyboard_key.PhysicalKeyboardKey.controlLeft, keyboard_key.LogicalKeyboardKey.controlLeft, keyboard_key.PhysicalKeyboardKey.controlRight, keyboard_key.LogicalKeyboardKey.controlRight, keyboard_key.PhysicalKeyboardKey.metaLeft, keyboard_key.LogicalKeyboardKey.metaLeft, keyboard_key.PhysicalKeyboardKey.metaRight, keyboard_key.LogicalKeyboardKey.metaRight, keyboard_key.PhysicalKeyboardKey.capsLock, keyboard_key.LogicalKeyboardKey.capsLock, keyboard_key.PhysicalKeyboardKey.numLock, keyboard_key.LogicalKeyboardKey.numLock, keyboard_key.PhysicalKeyboardKey.scrollLock, keyboard_key.LogicalKeyboardKey.scrollLock]);
    },
    /*raw_keyboard.RawKeyboard._allModifiers*/get _allModifiers() {
      return (() => {
        let t13 = new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
        t13[$_set](keyboard_key.PhysicalKeyboardKey.fn, keyboard_key.LogicalKeyboardKey.fn);
        for (let t14 of raw_keyboard.RawKeyboard._allModifiersExceptFn[$entries])
          t13[$_set](t14.key, t14.value);
        return t13;
      })();
    }
  }, false);
  const modifier$ = _ModifierSidePair_modifier;
  const side$ = _ModifierSidePair_side;
  raw_keyboard._ModifierSidePair = class _ModifierSidePair extends core.Object {
    get modifier() {
      return this[modifier$];
    }
    set modifier(value) {
      super.modifier = value;
    }
    get side() {
      return this[side$];
    }
    set side(value) {
      super.side = value;
    }
    static ['_#new#tearOff'](modifier, side) {
      return new raw_keyboard._ModifierSidePair.new(modifier, side);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return raw_keyboard._ModifierSidePair.is(other) && other.modifier === this.modifier && other.side == this.side;
    }
    get hashCode() {
      return ui.hashValues(this.modifier, this.side);
    }
  };
  (raw_keyboard._ModifierSidePair.new = function(modifier, side) {
    this[modifier$] = modifier;
    this[side$] = side;
    ;
  }).prototype = raw_keyboard._ModifierSidePair.prototype;
  dart.addTypeTests(raw_keyboard._ModifierSidePair);
  dart.addTypeCaches(raw_keyboard._ModifierSidePair);
  dart.setLibraryUri(raw_keyboard._ModifierSidePair, I[11]);
  dart.setFieldSignature(raw_keyboard._ModifierSidePair, () => ({
    __proto__: dart.getFields(raw_keyboard._ModifierSidePair.__proto__),
    modifier: dart.finalFieldType(raw_keyboard.ModifierKey),
    side: dart.finalFieldType(dart.nullable(raw_keyboard.KeyboardSide))
  }));
  dart.defineExtensionMethods(raw_keyboard._ModifierSidePair, ['_equals']);
  dart.defineExtensionAccessors(raw_keyboard._ModifierSidePair, ['hashCode']);
  var logicalKey$ = dart.privateName(hardware_keyboard, "KeyboardLockMode.logicalKey");
  hardware_keyboard.KeyboardLockMode = class KeyboardLockMode extends core.Object {
    get logicalKey() {
      return this[logicalKey$];
    }
    set logicalKey(value) {
      super.logicalKey = value;
    }
    static ['_#_#tearOff'](logicalKey) {
      return new hardware_keyboard.KeyboardLockMode.__(logicalKey);
    }
    static findLockByLogicalKey(logicalKey) {
      return hardware_keyboard.KeyboardLockMode._knownLockModes[$_get](logicalKey.keyId);
    }
  };
  (hardware_keyboard.KeyboardLockMode.__ = function(logicalKey) {
    this[logicalKey$] = logicalKey;
    ;
  }).prototype = hardware_keyboard.KeyboardLockMode.prototype;
  dart.addTypeTests(hardware_keyboard.KeyboardLockMode);
  dart.addTypeCaches(hardware_keyboard.KeyboardLockMode);
  dart.setStaticMethodSignature(hardware_keyboard.KeyboardLockMode, () => ['findLockByLogicalKey']);
  dart.setLibraryUri(hardware_keyboard.KeyboardLockMode, I[25]);
  dart.setFieldSignature(hardware_keyboard.KeyboardLockMode, () => ({
    __proto__: dart.getFields(hardware_keyboard.KeyboardLockMode.__proto__),
    logicalKey: dart.finalFieldType(keyboard_key.LogicalKeyboardKey)
  }));
  dart.setStaticFieldSignature(hardware_keyboard.KeyboardLockMode, () => ['numLock', 'scrollLock', 'capsLock', '_knownLockModes']);
  dart.defineLazy(hardware_keyboard.KeyboardLockMode, {
    /*hardware_keyboard.KeyboardLockMode.numLock*/get numLock() {
      return C[79] || CT.C79;
    },
    /*hardware_keyboard.KeyboardLockMode.scrollLock*/get scrollLock() {
      return C[81] || CT.C81;
    },
    /*hardware_keyboard.KeyboardLockMode.capsLock*/get capsLock() {
      return C[83] || CT.C83;
    },
    /*hardware_keyboard.KeyboardLockMode._knownLockModes*/get _knownLockModes() {
      return new (T$.IdentityMapOfint$KeyboardLockMode()).from([hardware_keyboard.KeyboardLockMode.numLock.logicalKey.keyId, hardware_keyboard.KeyboardLockMode.numLock, hardware_keyboard.KeyboardLockMode.scrollLock.logicalKey.keyId, hardware_keyboard.KeyboardLockMode.scrollLock, hardware_keyboard.KeyboardLockMode.capsLock.logicalKey.keyId, hardware_keyboard.KeyboardLockMode.capsLock]);
    }
  }, false);
  var physicalKey$ = dart.privateName(hardware_keyboard, "KeyEvent.physicalKey");
  var logicalKey$0 = dart.privateName(hardware_keyboard, "KeyEvent.logicalKey");
  var character$0 = dart.privateName(hardware_keyboard, "KeyEvent.character");
  var timeStamp$ = dart.privateName(hardware_keyboard, "KeyEvent.timeStamp");
  var synthesized$ = dart.privateName(hardware_keyboard, "KeyEvent.synthesized");
  const Object_Diagnosticable$36$0 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36$0.new = function() {
  }).prototype = Object_Diagnosticable$36$0.prototype;
  dart.applyMixin(Object_Diagnosticable$36$0, diagnostics.Diagnosticable);
  hardware_keyboard.KeyEvent = class KeyEvent extends Object_Diagnosticable$36$0 {
    get physicalKey() {
      return this[physicalKey$];
    }
    set physicalKey(value) {
      super.physicalKey = value;
    }
    get logicalKey() {
      return this[logicalKey$0];
    }
    set logicalKey(value) {
      super.logicalKey = value;
    }
    get character() {
      return this[character$0];
    }
    set character(value) {
      super.character = value;
    }
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get synthesized() {
      return this[synthesized$];
    }
    set synthesized(value) {
      super.synthesized = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfPhysicalKeyboardKey()).new("physicalKey", this.physicalKey));
      properties.add(new (T$.DiagnosticsPropertyOfLogicalKeyboardKey()).new("logicalKey", this.logicalKey));
      properties.add(new diagnostics.StringProperty.new("character", this.character));
      properties.add(new (T$.DiagnosticsPropertyOfDuration()).new("timeStamp", this.timeStamp));
      properties.add(new diagnostics.FlagProperty.new("synthesized", {value: this.synthesized, ifTrue: "synthesized"}));
    }
  };
  (hardware_keyboard.KeyEvent.new = function(opts) {
    let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
    let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    this[physicalKey$] = physicalKey;
    this[logicalKey$0] = logicalKey;
    this[character$0] = character;
    this[timeStamp$] = timeStamp;
    this[synthesized$] = synthesized;
    ;
  }).prototype = hardware_keyboard.KeyEvent.prototype;
  dart.addTypeTests(hardware_keyboard.KeyEvent);
  dart.addTypeCaches(hardware_keyboard.KeyEvent);
  dart.setLibraryUri(hardware_keyboard.KeyEvent, I[25]);
  dart.setFieldSignature(hardware_keyboard.KeyEvent, () => ({
    __proto__: dart.getFields(hardware_keyboard.KeyEvent.__proto__),
    physicalKey: dart.finalFieldType(keyboard_key.PhysicalKeyboardKey),
    logicalKey: dart.finalFieldType(keyboard_key.LogicalKeyboardKey),
    character: dart.finalFieldType(dart.nullable(core.String)),
    timeStamp: dart.finalFieldType(core.Duration),
    synthesized: dart.finalFieldType(core.bool)
  }));
  hardware_keyboard.KeyDownEvent = class KeyDownEvent extends hardware_keyboard.KeyEvent {
    static ['_#new#tearOff'](opts) {
      let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
      let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
      let character = opts && 'character' in opts ? opts.character : null;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
      return new hardware_keyboard.KeyDownEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp, synthesized: synthesized});
    }
  };
  (hardware_keyboard.KeyDownEvent.new = function(opts) {
    let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
    let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    hardware_keyboard.KeyDownEvent.__proto__.new.call(this, {physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp, synthesized: synthesized});
    ;
  }).prototype = hardware_keyboard.KeyDownEvent.prototype;
  dart.addTypeTests(hardware_keyboard.KeyDownEvent);
  dart.addTypeCaches(hardware_keyboard.KeyDownEvent);
  dart.setLibraryUri(hardware_keyboard.KeyDownEvent, I[25]);
  hardware_keyboard.KeyUpEvent = class KeyUpEvent extends hardware_keyboard.KeyEvent {
    static ['_#new#tearOff'](opts) {
      let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
      let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
      return new hardware_keyboard.KeyUpEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, synthesized: synthesized});
    }
  };
  (hardware_keyboard.KeyUpEvent.new = function(opts) {
    let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
    let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    hardware_keyboard.KeyUpEvent.__proto__.new.call(this, {physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, synthesized: synthesized});
    ;
  }).prototype = hardware_keyboard.KeyUpEvent.prototype;
  dart.addTypeTests(hardware_keyboard.KeyUpEvent);
  dart.addTypeCaches(hardware_keyboard.KeyUpEvent);
  dart.setLibraryUri(hardware_keyboard.KeyUpEvent, I[25]);
  hardware_keyboard.KeyRepeatEvent = class KeyRepeatEvent extends hardware_keyboard.KeyEvent {
    static ['_#new#tearOff'](opts) {
      let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
      let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
      let character = opts && 'character' in opts ? opts.character : null;
      let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
      return new hardware_keyboard.KeyRepeatEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp});
    }
  };
  (hardware_keyboard.KeyRepeatEvent.new = function(opts) {
    let physicalKey = opts && 'physicalKey' in opts ? opts.physicalKey : null;
    let logicalKey = opts && 'logicalKey' in opts ? opts.logicalKey : null;
    let character = opts && 'character' in opts ? opts.character : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    hardware_keyboard.KeyRepeatEvent.__proto__.new.call(this, {physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp});
    ;
  }).prototype = hardware_keyboard.KeyRepeatEvent.prototype;
  dart.addTypeTests(hardware_keyboard.KeyRepeatEvent);
  dart.addTypeCaches(hardware_keyboard.KeyRepeatEvent);
  dart.setLibraryUri(hardware_keyboard.KeyRepeatEvent, I[25]);
  var _pressedKeys = dart.privateName(hardware_keyboard, "_pressedKeys");
  var _lockModes = dart.privateName(hardware_keyboard, "_lockModes");
  var _handlers = dart.privateName(hardware_keyboard, "_handlers");
  var _duringDispatch = dart.privateName(hardware_keyboard, "_duringDispatch");
  var _modifiedHandlers = dart.privateName(hardware_keyboard, "_modifiedHandlers");
  var _assertEventIsRegular = dart.privateName(hardware_keyboard, "_assertEventIsRegular");
  var _dispatchKeyEvent = dart.privateName(hardware_keyboard, "_dispatchKeyEvent");
  hardware_keyboard.HardwareKeyboard = class HardwareKeyboard extends core.Object {
    static get instance() {
      return dart.nullCheck(binding$0.ServicesBinding.instance).keyboard;
    }
    get physicalKeysPressed() {
      return this[_pressedKeys][$keys][$toSet]();
    }
    get logicalKeysPressed() {
      return this[_pressedKeys][$values][$toSet]();
    }
    lookUpLayout(physicalKey) {
      return this[_pressedKeys][$_get](physicalKey);
    }
    get lockModesEnabled() {
      return this[_lockModes];
    }
    [_assertEventIsRegular](event) {
      if (!dart.fn(() => {
        let common = "If this occurs in real application, please report this bug to Flutter. If this occurs in unit tests, please ensure that simulated events follow Flutter's event model as documented in `HardwareKeyboard`. This was the event: ";
        if (hardware_keyboard.KeyDownEvent.is(event)) {
          if (!!this[_pressedKeys][$containsKey](event.physicalKey)) dart.assertFailed("A " + dart.str(event[$runtimeType]) + " is dispatched, but the state shows that the physical " + "key is already pressed. " + common + dart.str(event), I[26], 437, 16, "!_pressedKeys.containsKey(event.physicalKey)");
        } else if (hardware_keyboard.KeyRepeatEvent.is(event) || hardware_keyboard.KeyUpEvent.is(event)) {
          if (!this[_pressedKeys][$containsKey](event.physicalKey)) dart.assertFailed("A " + dart.str(event[$runtimeType]) + " is dispatched, but the state shows that the physical " + "key is not pressed. " + common + dart.str(event), I[26], 441, 16, "_pressedKeys.containsKey(event.physicalKey)");
          if (!dart.equals(this[_pressedKeys][$_get](event.physicalKey), event.logicalKey)) dart.assertFailed("A " + dart.str(event[$runtimeType]) + " is dispatched, but the state shows that the physical " + "key is pressed on a different logical key. " + common + dart.str(event) + " " + "and the recorded logical key " + dart.str(this[_pressedKeys][$_get](event.physicalKey)), I[26], 444, 16, "_pressedKeys[event.physicalKey] == event.logicalKey");
        } else {
          if (!false) dart.assertFailed("Unexpected key event class " + dart.str(event[$runtimeType]), I[26], 449, 16, "false");
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[26], 431, 12, "() {\n      const String common = 'If this occurs in real application, please report this '\n        'bug to Flutter. If this occurs in unit tests, please ensure that '\n        \"simulated events follow Flutter's event model as documented in \"\n        '`HardwareKeyboard`. This was the event: ';\n      if (event is KeyDownEvent) {\n        assert(!_pressedKeys.containsKey(event.physicalKey),\n          'A ${event.runtimeType} is dispatched, but the state shows that the physical '\n          'key is already pressed. $common$event');\n      } else if (event is KeyRepeatEvent || event is KeyUpEvent) {\n        assert(_pressedKeys.containsKey(event.physicalKey),\n          'A ${event.runtimeType} is dispatched, but the state shows that the physical '\n          'key is not pressed. $common$event');\n        assert(_pressedKeys[event.physicalKey] == event.logicalKey,\n          'A ${event.runtimeType} is dispatched, but the state shows that the physical '\n          'key is pressed on a different logical key. $common$event '\n          'and the recorded logical key ${_pressedKeys[event.physicalKey]}');\n      } else {\n        assert(false, 'Unexpected key event class ${event.runtimeType}');\n      }\n      return true;\n    }()");
    }
    addHandler(handler) {
      if (this[_duringDispatch]) {
        this[_modifiedHandlers] == null ? this[_modifiedHandlers] = (() => {
          let t15 = T$.ListOfKeyEventTobool().of(this[_handlers]);
          return t15;
        })() : null;
        dart.nullCheck(this[_modifiedHandlers])[$add](handler);
      } else {
        this[_handlers][$add](handler);
      }
    }
    removeHandler(handler) {
      if (this[_duringDispatch]) {
        this[_modifiedHandlers] == null ? this[_modifiedHandlers] = (() => {
          let t16 = T$.ListOfKeyEventTobool().of(this[_handlers]);
          return t16;
        })() : null;
        dart.nullCheck(this[_modifiedHandlers])[$remove](handler);
      } else {
        this[_handlers][$remove](handler);
      }
    }
    [_dispatchKeyEvent](event) {
      if (!!this[_duringDispatch]) dart.assertFailed("Nested keyboard dispatching is not supported", I[26], 509, 12, "!_duringDispatch");
      this[_duringDispatch] = true;
      let handled = false;
      for (let handler of this[_handlers]) {
        try {
          let thisResult = handler(event);
          handled = handled || thisResult;
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            let collector = null;
            if (!dart.fn(() => {
              collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfKeyEvent()).new("Event", event)]), T$.VoidToListOfDiagnosticsNode());
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[26], 518, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<KeyEvent>('Event', event),\n          ];\n          return true;\n        }()");
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while processing a key handler"), informationCollector: collector}));
          } else
            throw e;
        }
      }
      this[_duringDispatch] = false;
      if (this[_modifiedHandlers] != null) {
        this[_handlers] = dart.nullCheck(this[_modifiedHandlers]);
        this[_modifiedHandlers] = null;
      }
      return handled;
    }
    handleKeyEvent(event) {
      this[_assertEventIsRegular](event);
      let physicalKey = event.physicalKey;
      let logicalKey = event.logicalKey;
      if (hardware_keyboard.KeyDownEvent.is(event)) {
        this[_pressedKeys][$_set](physicalKey, logicalKey);
        let lockMode = hardware_keyboard.KeyboardLockMode.findLockByLogicalKey(event.logicalKey);
        if (lockMode != null) {
          if (this[_lockModes].contains(lockMode)) {
            this[_lockModes].remove(lockMode);
          } else {
            this[_lockModes].add(lockMode);
          }
        }
      } else if (hardware_keyboard.KeyUpEvent.is(event)) {
        this[_pressedKeys][$remove](physicalKey);
      } else if (hardware_keyboard.KeyRepeatEvent.is(event)) {
      }
      return this[_dispatchKeyEvent](event);
    }
    clearState() {
      this[_pressedKeys][$clear]();
      this[_lockModes].clear();
      this[_handlers][$clear]();
      if (!(this[_modifiedHandlers] == null)) dart.assertFailed(null, I[26], 577, 12, "_modifiedHandlers == null");
    }
    static ['_#new#tearOff']() {
      return new hardware_keyboard.HardwareKeyboard.new();
    }
  };
  (hardware_keyboard.HardwareKeyboard.new = function() {
    this[_pressedKeys] = new (T$.LinkedMapOfPhysicalKeyboardKey$LogicalKeyboardKey()).new();
    this[_lockModes] = T$.LinkedHashSetOfKeyboardLockMode().new();
    this[_handlers] = T$.JSArrayOfKeyEventTobool().of([]);
    this[_duringDispatch] = false;
    this[_modifiedHandlers] = null;
    ;
  }).prototype = hardware_keyboard.HardwareKeyboard.prototype;
  dart.addTypeTests(hardware_keyboard.HardwareKeyboard);
  dart.addTypeCaches(hardware_keyboard.HardwareKeyboard);
  dart.setMethodSignature(hardware_keyboard.HardwareKeyboard, () => ({
    __proto__: dart.getMethods(hardware_keyboard.HardwareKeyboard.__proto__),
    lookUpLayout: dart.fnType(dart.nullable(keyboard_key.LogicalKeyboardKey), [keyboard_key.PhysicalKeyboardKey]),
    [_assertEventIsRegular]: dart.fnType(dart.void, [hardware_keyboard.KeyEvent]),
    addHandler: dart.fnType(dart.void, [dart.fnType(core.bool, [hardware_keyboard.KeyEvent])]),
    removeHandler: dart.fnType(dart.void, [dart.fnType(core.bool, [hardware_keyboard.KeyEvent])]),
    [_dispatchKeyEvent]: dart.fnType(core.bool, [hardware_keyboard.KeyEvent]),
    handleKeyEvent: dart.fnType(core.bool, [hardware_keyboard.KeyEvent]),
    clearState: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(hardware_keyboard.HardwareKeyboard, () => ({
    __proto__: dart.getGetters(hardware_keyboard.HardwareKeyboard.__proto__),
    physicalKeysPressed: core.Set$(keyboard_key.PhysicalKeyboardKey),
    logicalKeysPressed: core.Set$(keyboard_key.LogicalKeyboardKey),
    lockModesEnabled: core.Set$(hardware_keyboard.KeyboardLockMode)
  }));
  dart.setStaticGetterSignature(hardware_keyboard.HardwareKeyboard, () => ['instance']);
  dart.setLibraryUri(hardware_keyboard.HardwareKeyboard, I[25]);
  dart.setFieldSignature(hardware_keyboard.HardwareKeyboard, () => ({
    __proto__: dart.getFields(hardware_keyboard.HardwareKeyboard.__proto__),
    [_pressedKeys]: dart.finalFieldType(core.Map$(keyboard_key.PhysicalKeyboardKey, keyboard_key.LogicalKeyboardKey)),
    [_lockModes]: dart.finalFieldType(core.Set$(hardware_keyboard.KeyboardLockMode)),
    [_handlers]: dart.fieldType(core.List$(dart.fnType(core.bool, [hardware_keyboard.KeyEvent]))),
    [_duringDispatch]: dart.fieldType(core.bool),
    [_modifiedHandlers]: dart.fieldType(dart.nullable(core.List$(dart.fnType(core.bool, [hardware_keyboard.KeyEvent]))))
  }));
  hardware_keyboard.KeyDataTransitMode = class KeyDataTransitMode extends core._Enum {
    toString() {
      return "KeyDataTransitMode." + this[_name];
    }
  };
  (hardware_keyboard.KeyDataTransitMode.new = function(index, name) {
    hardware_keyboard.KeyDataTransitMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = hardware_keyboard.KeyDataTransitMode.prototype;
  dart.addTypeTests(hardware_keyboard.KeyDataTransitMode);
  dart.addTypeCaches(hardware_keyboard.KeyDataTransitMode);
  dart.setLibraryUri(hardware_keyboard.KeyDataTransitMode, I[25]);
  dart.setStaticFieldSignature(hardware_keyboard.KeyDataTransitMode, () => ['values', 'rawKeyData', 'keyDataThenRawKeyData']);
  dart.defineExtensionMethods(hardware_keyboard.KeyDataTransitMode, ['toString']);
  hardware_keyboard.KeyDataTransitMode.rawKeyData = C[85] || CT.C85;
  hardware_keyboard.KeyDataTransitMode.keyDataThenRawKeyData = C[86] || CT.C86;
  hardware_keyboard.KeyDataTransitMode.values = C[87] || CT.C87;
  var events$ = dart.privateName(hardware_keyboard, "KeyMessage.events");
  var rawEvent$ = dart.privateName(hardware_keyboard, "KeyMessage.rawEvent");
  hardware_keyboard.KeyMessage = class KeyMessage extends core.Object {
    get events() {
      return this[events$];
    }
    set events(value) {
      super.events = value;
    }
    get rawEvent() {
      return this[rawEvent$];
    }
    set rawEvent(value) {
      super.rawEvent = value;
    }
    static ['_#new#tearOff'](events, rawEvent) {
      return new hardware_keyboard.KeyMessage.new(events, rawEvent);
    }
    toString() {
      return "KeyMessage(" + dart.str(this.events) + ")";
    }
  };
  (hardware_keyboard.KeyMessage.new = function(events, rawEvent) {
    this[events$] = events;
    this[rawEvent$] = rawEvent;
    ;
  }).prototype = hardware_keyboard.KeyMessage.prototype;
  dart.addTypeTests(hardware_keyboard.KeyMessage);
  dart.addTypeCaches(hardware_keyboard.KeyMessage);
  dart.setLibraryUri(hardware_keyboard.KeyMessage, I[25]);
  dart.setFieldSignature(hardware_keyboard.KeyMessage, () => ({
    __proto__: dart.getFields(hardware_keyboard.KeyMessage.__proto__),
    events: dart.finalFieldType(core.List$(hardware_keyboard.KeyEvent)),
    rawEvent: dart.finalFieldType(raw_keyboard.RawKeyEvent)
  }));
  dart.defineExtensionMethods(hardware_keyboard.KeyMessage, ['toString']);
  var keyMessageHandler = dart.privateName(hardware_keyboard, "KeyEventManager.keyMessageHandler");
  var _transitMode = dart.privateName(hardware_keyboard, "_transitMode");
  var _keyEventsSinceLastMessage = dart.privateName(hardware_keyboard, "_keyEventsSinceLastMessage");
  var _hardwareKeyboard$ = dart.privateName(hardware_keyboard, "_hardwareKeyboard");
  var _rawKeyboard$ = dart.privateName(hardware_keyboard, "_rawKeyboard");
  var _convertRawEventAndStore = dart.privateName(hardware_keyboard, "_convertRawEventAndStore");
  hardware_keyboard.KeyEventManager = class KeyEventManager extends core.Object {
    get keyMessageHandler() {
      return this[keyMessageHandler];
    }
    set keyMessageHandler(value) {
      this[keyMessageHandler] = value;
    }
    static ['_#new#tearOff'](_hardwareKeyboard, _rawKeyboard) {
      return new hardware_keyboard.KeyEventManager.new(_hardwareKeyboard, _rawKeyboard);
    }
    handleKeyData(data) {
      this[_transitMode] == null ? this[_transitMode] = hardware_keyboard.KeyDataTransitMode.keyDataThenRawKeyData : null;
      switch (dart.nullCheck(this[_transitMode])) {
        case C[85] || CT.C85:
        {
          if (!false) dart.assertFailed("Should never encounter KeyData when transitMode is rawKeyData.", I[26], 787, 16, "false");
          return false;
        }
        case C[86] || CT.C86:
        {
          if (!(data.physical === 0 && data.logical === 0 || data.physical !== 0 && data.logical !== 0)) dart.assertFailed(null, I[26], 790, 16, "(data.physical == 0 && data.logical == 0) ||\n               (data.physical != 0 && data.logical != 0)");
          if (data.physical !== 0 && data.logical !== 0) {
            this[_keyEventsSinceLastMessage][$add](hardware_keyboard.KeyEventManager._eventFromData(data));
          }
          return false;
        }
      }
    }
    handleRawKeyMessage(message) {
      return async.async(T$.MapOfString$dynamic(), (function* handleRawKeyMessage() {
        if (this[_transitMode] == null) {
          this[_transitMode] = hardware_keyboard.KeyDataTransitMode.rawKeyData;
          this[_rawKeyboard$].addListener(dart.bind(this, _convertRawEventAndStore));
        }
        let rawEvent = raw_keyboard.RawKeyEvent.fromMessage(T$.MapOfString$dynamic().as(message));
        let handled = this[_rawKeyboard$].handleRawKeyEvent(rawEvent);
        for (let event of this[_keyEventsSinceLastMessage]) {
          handled = this[_hardwareKeyboard$].handleKeyEvent(event) || handled;
        }
        if (this[_transitMode] === hardware_keyboard.KeyDataTransitMode.rawKeyData) {
          if (!collections.setEquals(keyboard_key.PhysicalKeyboardKey, this[_rawKeyboard$].physicalKeysPressed, this[_hardwareKeyboard$].physicalKeysPressed)) dart.assertFailed("RawKeyboard reported " + dart.str(this[_rawKeyboard$].physicalKeysPressed) + ", " + "while HardwareKeyboard reported " + dart.str(this[_hardwareKeyboard$].physicalKeysPressed), I[26], 824, 14, "setEquals(_rawKeyboard.physicalKeysPressed, _hardwareKeyboard.physicalKeysPressed)");
        }
        if (this.keyMessageHandler != null) {
          let message = new hardware_keyboard.KeyMessage.new(this[_keyEventsSinceLastMessage], rawEvent);
          try {
            handled = dart.nullCheck(this.keyMessageHandler)(message) || handled;
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              let collector = null;
              if (!dart.fn(() => {
                collector = dart.fn(() => T$.JSArrayOfDiagnosticsNode().of([new (T$.DiagnosticsPropertyOfKeyMessage()).new("KeyMessage", message)]), T$.VoidToListOfDiagnosticsNode());
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[26], 835, 16, "() {\n          collector = () => <DiagnosticsNode>[\n            DiagnosticsProperty<KeyMessage>('KeyMessage', message),\n          ];\n          return true;\n        }()");
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while processing the key message handler"), informationCollector: collector}));
            } else
              throw e;
          }
        }
        this[_keyEventsSinceLastMessage][$clear]();
        return new (T$.IdentityMapOfString$dynamic()).from(["handled", handled]);
      }).bind(this));
    }
    [_convertRawEventAndStore](rawEvent) {
      let physicalKey = rawEvent.physicalKey;
      let logicalKey = rawEvent.logicalKey;
      let physicalKeysPressed = this[_hardwareKeyboard$].physicalKeysPressed;
      let mainEvent = null;
      let recordedLogicalMain = this[_hardwareKeyboard$].lookUpLayout(physicalKey);
      let timeStamp = dart.nullCheck(binding$0.ServicesBinding.instance).currentSystemFrameTimeStamp;
      let character = rawEvent.character === "" ? null : rawEvent.character;
      if (raw_keyboard.RawKeyDownEvent.is(rawEvent)) {
        if (recordedLogicalMain == null) {
          mainEvent = new hardware_keyboard.KeyDownEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, character: character, timeStamp: timeStamp});
          physicalKeysPressed.add(physicalKey);
        } else {
          if (!physicalKeysPressed.contains(physicalKey)) dart.assertFailed(null, I[26], 878, 16, "physicalKeysPressed.contains(physicalKey)");
          mainEvent = new hardware_keyboard.KeyRepeatEvent.new({physicalKey: physicalKey, logicalKey: recordedLogicalMain, character: character, timeStamp: timeStamp});
        }
      } else {
        if (!raw_keyboard.RawKeyUpEvent.is(rawEvent)) dart.assertFailed("Unexpected subclass of RawKeyEvent: " + dart.str(rawEvent[$runtimeType]), I[26], 887, 14, "rawEvent is RawKeyUpEvent");
        if (recordedLogicalMain == null) {
          mainEvent = null;
        } else {
          mainEvent = new hardware_keyboard.KeyUpEvent.new({logicalKey: recordedLogicalMain, physicalKey: physicalKey, timeStamp: timeStamp});
          physicalKeysPressed.remove(physicalKey);
        }
      }
      for (let key of physicalKeysPressed.difference(this[_rawKeyboard$].physicalKeysPressed)) {
        this[_keyEventsSinceLastMessage][$add](new hardware_keyboard.KeyUpEvent.new({physicalKey: key, logicalKey: dart.nullCheck(this[_hardwareKeyboard$].lookUpLayout(key)), timeStamp: timeStamp, synthesized: true}));
      }
      for (let key of this[_rawKeyboard$].physicalKeysPressed.difference(physicalKeysPressed)) {
        this[_keyEventsSinceLastMessage][$add](new hardware_keyboard.KeyDownEvent.new({physicalKey: key, logicalKey: dart.nullCheck(this[_rawKeyboard$].lookUpLayout(key)), timeStamp: timeStamp, synthesized: true}));
      }
      if (mainEvent != null) this[_keyEventsSinceLastMessage][$add](mainEvent);
    }
    clearState() {
      if (!dart.fn(() => {
        this[_transitMode] = null;
        this[_rawKeyboard$].removeListener(dart.bind(this, _convertRawEventAndStore));
        this[_keyEventsSinceLastMessage][$clear]();
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[26], 924, 12, "() {\n      _transitMode = null;\n      _rawKeyboard.removeListener(_convertRawEventAndStore);\n      _keyEventsSinceLastMessage.clear();\n      return true;\n    }()");
    }
    static _eventFromData(keyData) {
      let t19, t19$;
      let physicalKey = (t19 = keyboard_key.PhysicalKeyboardKey.findKeyByCode(keyData.physical), t19 == null ? new keyboard_key.PhysicalKeyboardKey.new(keyData.physical) : t19);
      let logicalKey = (t19$ = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyData.logical), t19$ == null ? new keyboard_key.LogicalKeyboardKey.new(keyData.logical) : t19$);
      let timeStamp = keyData.timeStamp;
      switch (keyData.type) {
        case C[88] || CT.C88:
        {
          return new hardware_keyboard.KeyDownEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, character: keyData.character, synthesized: keyData.synthesized});
        }
        case C[89] || CT.C89:
        {
          if (!(keyData.character == null)) dart.assertFailed(null, I[26], 950, 16, "keyData.character == null");
          return new hardware_keyboard.KeyUpEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, synthesized: keyData.synthesized});
        }
        case C[90] || CT.C90:
        {
          return new hardware_keyboard.KeyRepeatEvent.new({physicalKey: physicalKey, logicalKey: logicalKey, timeStamp: timeStamp, character: keyData.character});
        }
      }
    }
  };
  (hardware_keyboard.KeyEventManager.new = function(_hardwareKeyboard, _rawKeyboard) {
    this[keyMessageHandler] = null;
    this[_transitMode] = null;
    this[_keyEventsSinceLastMessage] = T$.JSArrayOfKeyEvent().of([]);
    this[_hardwareKeyboard$] = _hardwareKeyboard;
    this[_rawKeyboard$] = _rawKeyboard;
    ;
  }).prototype = hardware_keyboard.KeyEventManager.prototype;
  dart.addTypeTests(hardware_keyboard.KeyEventManager);
  dart.addTypeCaches(hardware_keyboard.KeyEventManager);
  dart.setMethodSignature(hardware_keyboard.KeyEventManager, () => ({
    __proto__: dart.getMethods(hardware_keyboard.KeyEventManager.__proto__),
    handleKeyData: dart.fnType(core.bool, [ui.KeyData]),
    handleRawKeyMessage: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [dart.dynamic]),
    [_convertRawEventAndStore]: dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]),
    clearState: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(hardware_keyboard.KeyEventManager, () => ['_eventFromData']);
  dart.setLibraryUri(hardware_keyboard.KeyEventManager, I[25]);
  dart.setFieldSignature(hardware_keyboard.KeyEventManager, () => ({
    __proto__: dart.getFields(hardware_keyboard.KeyEventManager.__proto__),
    keyMessageHandler: dart.fieldType(dart.nullable(dart.fnType(core.bool, [hardware_keyboard.KeyMessage]))),
    [_hardwareKeyboard$]: dart.finalFieldType(hardware_keyboard.HardwareKeyboard),
    [_rawKeyboard$]: dart.finalFieldType(raw_keyboard.RawKeyboard),
    [_transitMode]: dart.fieldType(dart.nullable(hardware_keyboard.KeyDataTransitMode)),
    [_keyEventsSinceLastMessage]: dart.finalFieldType(core.List$(hardware_keyboard.KeyEvent))
  }));
  var __ServicesBinding__keyboard = dart.privateName(binding$0, "_#ServicesBinding#_keyboard");
  var __ServicesBinding__keyEventManager = dart.privateName(binding$0, "_#ServicesBinding#_keyEventManager");
  var __ServicesBinding__defaultBinaryMessenger = dart.privateName(binding$0, "_#ServicesBinding#_defaultBinaryMessenger");
  var __ServicesBinding__restorationManager = dart.privateName(binding$0, "_#ServicesBinding#_restorationManager");
  var _systemUiChangeCallback = dart.privateName(binding$0, "_systemUiChangeCallback");
  var _defaultBinaryMessenger = dart.privateName(binding$0, "_defaultBinaryMessenger");
  var _restorationManager = dart.privateName(binding$0, "_restorationManager");
  var _initKeyboard = dart.privateName(binding$0, "_initKeyboard");
  var _handleLifecycleMessage = dart.privateName(binding$0, "_handleLifecycleMessage");
  var _handlePlatformMessage = dart.privateName(binding$0, "_handlePlatformMessage");
  var _keyboard = dart.privateName(binding$0, "_keyboard");
  var _keyEventManager = dart.privateName(binding$0, "_keyEventManager");
  var _addLicenses = dart.privateName(binding$0, "_addLicenses");
  binding$0.ServicesBinding = class ServicesBinding extends core.Object {
    static get instance() {
      return binding$0.ServicesBinding._instance;
    }
    static _parseLicenses(rawLicenses) {
      let _licenseSeparator = "\n" + "-"[$times](80) + "\n";
      let result = T$.JSArrayOfLicenseEntry().of([]);
      let licenses = rawLicenses[$split](_licenseSeparator);
      for (let license of licenses) {
        let split = license[$indexOf]("\n\n");
        if (split >= 0) {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(license[$substring](0, split)[$split]("\n"), license[$substring](split + 2)));
        } else {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(C[93] || CT.C93, license));
        }
      }
      return result;
    }
    static _parseAppLifecycleMessage(message) {
      switch (message) {
        case "AppLifecycleState.paused":
        {
          return ui.AppLifecycleState.paused;
        }
        case "AppLifecycleState.resumed":
        {
          return ui.AppLifecycleState.resumed;
        }
        case "AppLifecycleState.inactive":
        {
          return ui.AppLifecycleState.inactive;
        }
        case "AppLifecycleState.detached":
        {
          return ui.AppLifecycleState.detached;
        }
      }
      return null;
    }
  };
  binding$0.ServicesBinding[dart.mixinOn] = _ServicesBinding$36BindingBase$36SchedulerBinding => class ServicesBinding extends _ServicesBinding$36BindingBase$36SchedulerBinding {
    initInstances() {
      super.initInstances();
      binding$0.ServicesBinding._instance = this;
      this[_defaultBinaryMessenger] = this.createBinaryMessenger();
      this[_restorationManager] = this.createRestorationManager();
      this[_initKeyboard]();
      this.initLicenses();
      system_channels.SystemChannels.system.setMessageHandler(dart.fn(message => this.handleSystemMessage(core.Object.as(message)), T$.dynamicToFutureOfvoid()));
      system_channels.SystemChannels.lifecycle.setMessageHandler(dart.bind(this, _handleLifecycleMessage));
      system_channels.SystemChannels.platform.setMethodCallHandler(dart.bind(this, _handlePlatformMessage));
      this.readInitialLifecycleStateFromNativeWindow();
    }
    get keyboard() {
      return this[_keyboard];
    }
    get [_keyboard]() {
      let t19;
      t19 = this[__ServicesBinding__keyboard];
      return t19 == null ? dart.throw(new _internal.LateError.fieldNI("_keyboard")) : t19;
    }
    set [_keyboard](t19) {
      if (this[__ServicesBinding__keyboard] == null)
        this[__ServicesBinding__keyboard] = t19;
      else
        dart.throw(new _internal.LateError.fieldAI("_keyboard"));
    }
    get keyEventManager() {
      return this[_keyEventManager];
    }
    get [_keyEventManager]() {
      let t20;
      t20 = this[__ServicesBinding__keyEventManager];
      return t20 == null ? dart.throw(new _internal.LateError.fieldNI("_keyEventManager")) : t20;
    }
    set [_keyEventManager](t20) {
      if (this[__ServicesBinding__keyEventManager] == null)
        this[__ServicesBinding__keyEventManager] = t20;
      else
        dart.throw(new _internal.LateError.fieldAI("_keyEventManager"));
    }
    [_initKeyboard]() {
      this[_keyboard] = new hardware_keyboard.HardwareKeyboard.new();
      this[_keyEventManager] = new hardware_keyboard.KeyEventManager.new(this[_keyboard], raw_keyboard.RawKeyboard.instance);
      this.window.onKeyData = dart.bind(this[_keyEventManager], 'handleKeyData');
      system_channels.SystemChannels.keyEvent.setMessageHandler(dart.bind(this[_keyEventManager], 'handleRawKeyMessage'));
    }
    get defaultBinaryMessenger() {
      return this[_defaultBinaryMessenger];
    }
    get [_defaultBinaryMessenger]() {
      let t21;
      t21 = this[__ServicesBinding__defaultBinaryMessenger];
      return t21 == null ? dart.throw(new _internal.LateError.fieldNI("_defaultBinaryMessenger")) : t21;
    }
    set [_defaultBinaryMessenger](t21) {
      if (this[__ServicesBinding__defaultBinaryMessenger] == null)
        this[__ServicesBinding__defaultBinaryMessenger] = t21;
      else
        dart.throw(new _internal.LateError.fieldAI("_defaultBinaryMessenger"));
    }
    get channelBuffers() {
      return ui.channelBuffers;
    }
    createBinaryMessenger() {
      return C[91] || CT.C91;
    }
    handleMemoryPressure() {
      asset_bundle.rootBundle.clear();
    }
    handleSystemMessage(systemMessage) {
      return async.async(dart.void, (function* handleSystemMessage() {
        let message = T$.MapOfString$dynamic().as(systemMessage);
        let type = core.String.as(message[$_get]("type"));
        switch (type) {
          case "memoryPressure":
          {
            this.handleMemoryPressure();
            break;
          }
        }
        return;
      }).bind(this));
    }
    initLicenses() {
      licenses$.LicenseRegistry.addLicense(dart.bind(this, _addLicenses));
    }
    [_addLicenses]() {
      let controller = null;
      function controller$35get() {
        let t23;
        t23 = controller;
        return t23 == null ? dart.throw(new _internal.LateError.localNI("controller")) : t23;
      }
      dart.fn(controller$35get, T$.VoidToStreamControllerOfLicenseEntry());
      function controller$35set(t24) {
        if (controller == null)
          return controller = t24;
        else
          dart.throw(new _internal.LateError.localAI("controller"));
      }
      dart.fn(controller$35set, T$.StreamControllerOfLicenseEntryTodynamic());
      controller$35set(T$.StreamControllerOfLicenseEntry().new({onListen: dart.fn(() => async.async(dart.void, function*() {
          let rawLicenses = null;
          function rawLicenses$35get() {
            let t27;
            t27 = rawLicenses;
            return t27 == null ? dart.throw(new _internal.LateError.localNI("rawLicenses")) : t27;
          }
          dart.fn(rawLicenses$35get, T$.VoidToString());
          function rawLicenses$35set(t28) {
            if (rawLicenses == null)
              return rawLicenses = t28;
            else
              dart.throw(new _internal.LateError.localAI("rawLicenses"));
          }
          dart.fn(rawLicenses$35set, T$.StringTodynamic());
          if (true) {
            rawLicenses$35set(yield asset_bundle.rootBundle.loadString("NOTICES", {cache: false}));
          } else {
            let licenseBytes = (yield asset_bundle.rootBundle.load("NOTICES.Z"));
            let unzippedBytes = (yield isolates.compute(T$.ListOfint(), T$.ListOfint(), T$.ListOfintToListOfint().as(dart.bind(io.gzip, 'decode')), licenseBytes[$buffer][$asUint8List](), {debugLabel: "decompressLicenses"}));
            rawLicenses$35set(yield isolates.compute(T$.ListOfint(), core.String, dart.bind(convert.utf8, 'decode'), unzippedBytes, {debugLabel: "utf8DecodeLicenses"}));
          }
          let licenses = (yield isolates.compute(core.String, T$.ListOfLicenseEntry(), C[92] || CT.C92, rawLicenses$35get(), {debugLabel: "parseLicenses"}));
          licenses[$forEach](T$.LicenseEntryTovoid().as(dart.bind(controller$35get(), 'add')));
          yield controller$35get().close();
        }), T$.VoidToFutureOfvoid())}));
      return controller$35get().stream;
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.fn(() => {
        this.registerStringServiceExtension({name: "evict", getter: dart.fn(() => async.async(core.String, function*() {
            return "";
          }), T$.VoidToFutureOfString()), setter: dart.fn(value => async.async(dart.void, (function*() {
            this.evict(value);
          }).bind(this)), T$.StringToFutureOfvoid())});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[27], 196, 12, "() {\n      registerStringServiceExtension(\n        // ext.flutter.evict value=foo.png will cause foo.png to be evicted from\n        // the rootBundle cache and cause the entire image cache to be cleared.\n        // This is used by hot reload mode to clear out the cache of resources\n        // that have changed.\n        name: 'evict',\n        getter: () async => '',\n        setter: (String value) async {\n          evict(value);\n        },\n      );\n      return true;\n    }()");
    }
    evict(asset) {
      asset_bundle.rootBundle.evict(asset);
    }
    readInitialLifecycleStateFromNativeWindow() {
      if (this.lifecycleState != null) {
        return;
      }
      let state = binding$0.ServicesBinding._parseAppLifecycleMessage(this.window.initialLifecycleState);
      if (state != null) {
        this.handleAppLifecycleStateChanged(state);
      }
    }
    [_handleLifecycleMessage](message) {
      return async.async(T$.StringN(), (function* _handleLifecycleMessage() {
        this.handleAppLifecycleStateChanged(dart.nullCheck(binding$0.ServicesBinding._parseAppLifecycleMessage(dart.nullCheck(message))));
        return null;
      }).bind(this));
    }
    [_handlePlatformMessage](methodCall) {
      return async.async(dart.void, (function* _handlePlatformMessage() {
        let method = methodCall.method;
        if (!(method === "SystemChrome.systemUIChange")) dart.assertFailed(null, I[27], 254, 12, "method == 'SystemChrome.systemUIChange'");
        let args = core.List.as(methodCall.arguments);
        if (this[_systemUiChangeCallback] != null) {
          yield dart.nullCheck(this[_systemUiChangeCallback])(core.bool.as(args[$_get](0)));
        }
      }).bind(this));
    }
    get restorationManager() {
      return this[_restorationManager];
    }
    get [_restorationManager]() {
      let t30;
      t30 = this[__ServicesBinding__restorationManager];
      return t30 == null ? dart.throw(new _internal.LateError.fieldNI("_restorationManager")) : t30;
    }
    set [_restorationManager](t30) {
      this[__ServicesBinding__restorationManager] = t30;
    }
    createRestorationManager() {
      return new restoration.RestorationManager.new();
    }
    setSystemUiChangeCallback(callback) {
      this[_systemUiChangeCallback] = callback;
    }
  };
  (binding$0.ServicesBinding[dart.mixinNew] = function() {
    this[__ServicesBinding__keyboard] = null;
    this[__ServicesBinding__keyEventManager] = null;
    this[__ServicesBinding__defaultBinaryMessenger] = null;
    this[__ServicesBinding__restorationManager] = null;
    this[_systemUiChangeCallback] = null;
  }).prototype = binding$0.ServicesBinding.prototype;
  dart.addTypeTests(binding$0.ServicesBinding);
  dart.addTypeCaches(binding$0.ServicesBinding);
  binding$0.ServicesBinding[dart.implements] = () => [binding.SchedulerBinding, binding$.BindingBase];
  dart.setMethodSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getMethods(binding$0.ServicesBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    [_initKeyboard]: dart.fnType(dart.void, []),
    createBinaryMessenger: dart.fnType(binary_messenger.BinaryMessenger, []),
    handleMemoryPressure: dart.fnType(dart.void, []),
    handleSystemMessage: dart.fnType(async.Future$(dart.void), [core.Object]),
    initLicenses: dart.fnType(dart.void, []),
    [_addLicenses]: dart.fnType(async.Stream$(licenses$.LicenseEntry), []),
    initServiceExtensions: dart.fnType(dart.void, []),
    evict: dart.fnType(dart.void, [core.String]),
    readInitialLifecycleStateFromNativeWindow: dart.fnType(dart.void, []),
    [_handleLifecycleMessage]: dart.fnType(async.Future$(dart.nullable(core.String)), [dart.nullable(core.String)]),
    [_handlePlatformMessage]: dart.fnType(async.Future$(dart.void), [message_codec.MethodCall]),
    createRestorationManager: dart.fnType(restoration.RestorationManager, []),
    setSystemUiChangeCallback: dart.fnType(dart.void, [dart.nullable(dart.fnType(async.Future$(dart.void), [core.bool]))])
  }));
  dart.setStaticMethodSignature(binding$0.ServicesBinding, () => ['_parseLicenses', '_parseAppLifecycleMessage']);
  dart.setGetterSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getGetters(binding$0.ServicesBinding.__proto__),
    keyboard: hardware_keyboard.HardwareKeyboard,
    [_keyboard]: hardware_keyboard.HardwareKeyboard,
    keyEventManager: hardware_keyboard.KeyEventManager,
    [_keyEventManager]: hardware_keyboard.KeyEventManager,
    defaultBinaryMessenger: binary_messenger.BinaryMessenger,
    [_defaultBinaryMessenger]: binary_messenger.BinaryMessenger,
    channelBuffers: ui.ChannelBuffers,
    restorationManager: restoration.RestorationManager,
    [_restorationManager]: restoration.RestorationManager
  }));
  dart.setSetterSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getSetters(binding$0.ServicesBinding.__proto__),
    [_keyboard]: hardware_keyboard.HardwareKeyboard,
    [_keyEventManager]: hardware_keyboard.KeyEventManager,
    [_defaultBinaryMessenger]: binary_messenger.BinaryMessenger,
    [_restorationManager]: restoration.RestorationManager
  }));
  dart.setStaticGetterSignature(binding$0.ServicesBinding, () => ['instance']);
  dart.setLibraryUri(binding$0.ServicesBinding, I[28]);
  dart.setFieldSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getFields(binding$0.ServicesBinding.__proto__),
    [__ServicesBinding__keyboard]: dart.fieldType(dart.nullable(hardware_keyboard.HardwareKeyboard)),
    [__ServicesBinding__keyEventManager]: dart.fieldType(dart.nullable(hardware_keyboard.KeyEventManager)),
    [__ServicesBinding__defaultBinaryMessenger]: dart.fieldType(dart.nullable(binary_messenger.BinaryMessenger)),
    [__ServicesBinding__restorationManager]: dart.fieldType(dart.nullable(restoration.RestorationManager)),
    [_systemUiChangeCallback]: dart.fieldType(dart.nullable(dart.fnType(async.Future$(dart.void), [core.bool])))
  }));
  dart.setStaticFieldSignature(binding$0.ServicesBinding, () => ['_instance']);
  dart.defineLazy(binding$0.ServicesBinding, {
    /*binding$0.ServicesBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  binding$0._DefaultBinaryMessenger = class _DefaultBinaryMessenger extends binary_messenger.BinaryMessenger {
    static ['_#_#tearOff']() {
      return new binding$0._DefaultBinaryMessenger.__();
    }
    handlePlatformMessage(channel, message, callback) {
      return async.async(dart.void, function* handlePlatformMessage() {
        ui.channelBuffers.push(channel, message, dart.fn(data => {
          if (callback != null) callback(data);
        }, T$.ByteDataNTovoid()));
      });
    }
    send(channel, message) {
      let completer = T$.CompleterOfByteDataN().new();
      ui.PlatformDispatcher.instance.sendPlatformMessage(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          if (core.Object.is(exception)) {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message response callback")}));
          } else
            throw e;
        }
      }, T$.ByteDataNTovoid()));
      return completer.future;
    }
    setMessageHandler(channel, handler) {
      if (handler == null) {
        ui.channelBuffers.clearListener(channel);
      } else {
        ui.channelBuffers.setListener(channel, dart.fn((data, callback) => async.async(dart.void, function*() {
          let response = null;
          try {
            response = (yield handler(data));
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            if (core.Object.is(exception)) {
              assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message callback")}));
            } else
              throw e;
          } finally {
            callback(response);
          }
        }), T$.ByteDataNAndFnToFutureOfvoid()));
      }
    }
  };
  (binding$0._DefaultBinaryMessenger.__ = function() {
    binding$0._DefaultBinaryMessenger.__proto__.new.call(this);
    ;
  }).prototype = binding$0._DefaultBinaryMessenger.prototype;
  dart.addTypeTests(binding$0._DefaultBinaryMessenger);
  dart.addTypeCaches(binding$0._DefaultBinaryMessenger);
  dart.setMethodSignature(binding$0._DefaultBinaryMessenger, () => ({
    __proto__: dart.getMethods(binding$0._DefaultBinaryMessenger.__proto__),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, dart.nullable(typed_data.ByteData), dart.nullable(dart.fnType(dart.void, [dart.nullable(typed_data.ByteData)]))]),
    send: dart.fnType(async.Future$(dart.nullable(typed_data.ByteData)), [core.String, dart.nullable(typed_data.ByteData)]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.nullable(dart.fnType(dart.nullable(async.Future$(dart.nullable(typed_data.ByteData))), [dart.nullable(typed_data.ByteData)]))])
  }));
  dart.setLibraryUri(binding$0._DefaultBinaryMessenger, I[28]);
  asset_bundle.AssetBundle = class AssetBundle extends core.Object {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      return async.async(core.String, (function* loadString() {
        let data = (yield this.load(key));
        if (data === null) dart.throw(assertions.FlutterError.new("Unable to load asset: " + key));
        if (data[$lengthInBytes] < 50 * 1024) {
          return convert.utf8.decode(data[$buffer][$asUint8List]());
        }
        return isolates.compute(typed_data.ByteData, core.String, C[94] || CT.C94, data, {debugLabel: "UTF8 decode for \"" + key + "\""});
      }).bind(this));
    }
    static _utf8decode(data) {
      return convert.utf8.decode(data[$buffer][$asUint8List]());
    }
    evict(key) {
    }
    clear() {
    }
    toString() {
      return diagnostics.describeIdentity(this) + "()";
    }
  };
  (asset_bundle.AssetBundle.new = function() {
    ;
  }).prototype = asset_bundle.AssetBundle.prototype;
  dart.addTypeTests(asset_bundle.AssetBundle);
  dart.addTypeCaches(asset_bundle.AssetBundle);
  dart.setMethodSignature(asset_bundle.AssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.AssetBundle.__proto__),
    loadString: dart.fnType(async.Future$(core.String), [core.String], {cache: core.bool}, {}),
    evict: dart.fnType(dart.void, [core.String]),
    clear: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(asset_bundle.AssetBundle, () => ['_utf8decode']);
  dart.setLibraryUri(asset_bundle.AssetBundle, I[29]);
  dart.defineExtensionMethods(asset_bundle.AssetBundle, ['toString']);
  var _baseUrl = dart.privateName(asset_bundle, "_baseUrl");
  var _httpClient = dart.privateName(asset_bundle, "_httpClient");
  var _urlFromKey = dart.privateName(asset_bundle, "_urlFromKey");
  asset_bundle.NetworkAssetBundle = class NetworkAssetBundle extends asset_bundle.AssetBundle {
    static ['_#new#tearOff'](baseUrl) {
      return new asset_bundle.NetworkAssetBundle.new(baseUrl);
    }
    [_urlFromKey](key) {
      return this[_baseUrl].resolve(key);
    }
    load(key) {
      return async.async(typed_data.ByteData, (function* load() {
        let request = (yield this[_httpClient].getUrl(this[_urlFromKey](key)));
        let response = (yield request.close());
        if (response.statusCode !== 200) dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Unable to load asset: " + key), new diagnostics.IntProperty.new("HTTP status code", response.statusCode)])));
        let bytes = (yield consolidate_response.consolidateHttpClientResponseBytes(response));
        return bytes[$buffer][$asByteData]();
      }).bind(this));
    }
    loadStructuredData(T, key, parser) {
      return async.async(T, (function* loadStructuredData() {
        if (!(key !== null)) dart.assertFailed(null, I[30], 144, 12, "key != null");
        if (!(parser !== null)) dart.assertFailed(null, I[30], 145, 12, "parser != null");
        return parser(yield this.loadString(key));
      }).bind(this));
    }
    toString() {
      return diagnostics.describeIdentity(this) + "(" + dart.str(this[_baseUrl]) + ")";
    }
  };
  (asset_bundle.NetworkAssetBundle.new = function(baseUrl) {
    this[_baseUrl] = baseUrl;
    this[_httpClient] = _http.HttpClient.new();
    ;
  }).prototype = asset_bundle.NetworkAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.NetworkAssetBundle);
  dart.addTypeCaches(asset_bundle.NetworkAssetBundle);
  dart.setMethodSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.NetworkAssetBundle.__proto__),
    [_urlFromKey]: dart.fnType(core.Uri, [core.String]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String]),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(asset_bundle.NetworkAssetBundle, I[29]);
  dart.setFieldSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.NetworkAssetBundle.__proto__),
    [_baseUrl]: dart.finalFieldType(core.Uri),
    [_httpClient]: dart.finalFieldType(_http.HttpClient)
  }));
  dart.defineExtensionMethods(asset_bundle.NetworkAssetBundle, ['toString']);
  var _stringCache = dart.privateName(asset_bundle, "_stringCache");
  var _structuredDataCache = dart.privateName(asset_bundle, "_structuredDataCache");
  asset_bundle.CachingAssetBundle = class CachingAssetBundle extends asset_bundle.AssetBundle {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      if (cache) return this[_stringCache][$putIfAbsent](key, dart.fn(() => super.loadString(key), T$.VoidToFutureOfString()));
      return super.loadString(key);
    }
    loadStructuredData(T, key, parser) {
      if (!(key !== null)) dart.assertFailed(null, I[30], 188, 12, "key != null");
      if (!(parser !== null)) dart.assertFailed(null, I[30], 189, 12, "parser != null");
      if (this[_structuredDataCache][$containsKey](key)) return async.Future$(T).as(dart.nullCheck(this[_structuredDataCache][$_get](key)));
      let completer = null;
      let result = null;
      this.loadString(key, {cache: false}).then(T, parser).then(dart.void, dart.fn(value => {
        result = new (synchronous_future.SynchronousFuture$(T)).new(value);
        this[_structuredDataCache][$_set](key, dart.nullCheck(result));
        if (completer != null) {
          completer.complete(value);
        }
      }, dart.fnType(core.Null, [T])));
      if (result != null) {
        return dart.nullCheck(result);
      }
      completer = async.Completer$(T).new();
      this[_structuredDataCache][$_set](key, completer.future);
      return completer.future;
    }
    evict(key) {
      this[_stringCache][$remove](key);
      this[_structuredDataCache][$remove](key);
    }
    clear() {
      this[_stringCache][$clear]();
      this[_structuredDataCache][$clear]();
    }
  };
  (asset_bundle.CachingAssetBundle.new = function() {
    this[_stringCache] = new (T$.IdentityMapOfString$FutureOfString()).new();
    this[_structuredDataCache] = new (T$.IdentityMapOfString$Future()).new();
    ;
  }).prototype = asset_bundle.CachingAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.CachingAssetBundle);
  dart.addTypeCaches(asset_bundle.CachingAssetBundle);
  dart.setMethodSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.CachingAssetBundle.__proto__),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]], T => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(asset_bundle.CachingAssetBundle, I[29]);
  dart.setFieldSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.CachingAssetBundle.__proto__),
    [_stringCache]: dart.finalFieldType(core.Map$(core.String, async.Future$(core.String))),
    [_structuredDataCache]: dart.finalFieldType(core.Map$(core.String, async.Future))
  }));
  asset_bundle.PlatformAssetBundle = class PlatformAssetBundle extends asset_bundle.CachingAssetBundle {
    load(key) {
      return async.async(typed_data.ByteData, function* load() {
        let encoded = convert.utf8.encoder.convert(core._Uri.new({path: core.Uri.encodeFull(key)}).path);
        let asset = (yield dart.nullCheck(binding$0.ServicesBinding.instance).defaultBinaryMessenger.send("flutter/assets", encoded[$buffer][$asByteData]()));
        if (asset == null) dart.throw(assertions.FlutterError.new("Unable to load asset: " + key));
        return asset;
      });
    }
    static ['_#new#tearOff']() {
      return new asset_bundle.PlatformAssetBundle.new();
    }
  };
  (asset_bundle.PlatformAssetBundle.new = function() {
    asset_bundle.PlatformAssetBundle.__proto__.new.call(this);
    ;
  }).prototype = asset_bundle.PlatformAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.PlatformAssetBundle);
  dart.addTypeCaches(asset_bundle.PlatformAssetBundle);
  dart.setMethodSignature(asset_bundle.PlatformAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.PlatformAssetBundle.__proto__),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String])
  }));
  dart.setLibraryUri(asset_bundle.PlatformAssetBundle, I[29]);
  asset_bundle._initRootBundle = function _initRootBundle() {
    return new asset_bundle.PlatformAssetBundle.new();
  };
  dart.defineLazy(asset_bundle, {
    /*asset_bundle.rootBundle*/get rootBundle() {
      return asset_bundle._initRootBundle();
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/services/restoration.dart", {
    "package:flutter/src/services/restoration.dart": restoration,
    "package:flutter/src/services/platform_channel.dart": platform_channel,
    "package:flutter/src/services/message_codec.dart": message_codec,
    "package:flutter/src/services/message_codecs.dart": message_codecs,
    "package:flutter/src/services/system_channels.dart": system_channels,
    "package:flutter/src/services/raw_keyboard_windows.dart": raw_keyboard_windows,
    "package:flutter/src/services/raw_keyboard_web.dart": raw_keyboard_web,
    "package:flutter/src/services/raw_keyboard_macos.dart": raw_keyboard_macos,
    "package:flutter/src/services/raw_keyboard_linux.dart": raw_keyboard_linux,
    "package:flutter/src/services/raw_keyboard_ios.dart": raw_keyboard_ios,
    "package:flutter/src/services/raw_keyboard_fuchsia.dart": raw_keyboard_fuchsia,
    "package:flutter/src/services/raw_keyboard_android.dart": raw_keyboard_android,
    "package:flutter/src/services/raw_keyboard.dart": raw_keyboard,
    "package:flutter/src/services/hardware_keyboard.dart": hardware_keyboard,
    "package:flutter/src/services/binding.dart": binding$0,
    "package:flutter/src/services/asset_bundle.dart": asset_bundle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["restoration.dart","platform_channel.dart","message_codec.dart","message_codecs.dart","system_channels.dart","raw_keyboard.dart","raw_keyboard_windows.dart","raw_keyboard_web.dart","raw_keyboard_macos.dart","raw_keyboard_linux.dart","raw_keyboard_ios.dart","raw_keyboard_fuchsia.dart","raw_keyboard_android.dart","hardware_keyboard.dart","binding.dart","asset_bundle.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/services/restoration.dart.lib.js"}');
  // Exports:
  return {
    src__services__restoration: restoration,
    src__services__platform_channel: platform_channel,
    src__services__message_codec: message_codec,
    src__services__message_codecs: message_codecs,
    src__services__system_channels: system_channels,
    src__services__raw_keyboard_windows: raw_keyboard_windows,
    src__services__raw_keyboard_web: raw_keyboard_web,
    src__services__raw_keyboard_macos: raw_keyboard_macos,
    src__services__raw_keyboard_linux: raw_keyboard_linux,
    src__services__raw_keyboard_ios: raw_keyboard_ios,
    src__services__raw_keyboard_fuchsia: raw_keyboard_fuchsia,
    src__services__raw_keyboard_android: raw_keyboard_android,
    src__services__raw_keyboard: raw_keyboard,
    src__services__hardware_keyboard: hardware_keyboard,
    src__services__binding: binding$0,
    src__services__asset_bundle: asset_bundle
  };
}));

//# sourceMappingURL=restoration.dart.lib.js.map
