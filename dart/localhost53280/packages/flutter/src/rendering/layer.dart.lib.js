define(['dart_sdk', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/node.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/vector_math/vector_math_64.dart', 'packages/flutter/src/gestures/events.dart', 'packages/flutter/src/painting/matrix_utils.dart', 'packages/flutter/src/painting/colors.dart', 'packages/flutter/src/gestures/hit_test.dart', 'packages/flutter/src/services/system_chrome.dart', 'packages/flutter/src/foundation/_platform_web.dart', 'packages/flutter/src/foundation/print.dart', 'packages/flutter/src/semantics/semantics.dart', 'packages/flutter/src/animation/curves.dart', 'packages/flutter/src/semantics/semantics_event.dart', 'packages/flutter/src/services/mouse_tracking.dart', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/foundation/change_notifier.dart', 'packages/flutter/src/painting/debug.dart', 'packages/flutter/src/services/restoration.dart', 'packages/flutter/src/scheduler/binding.dart', 'packages/flutter/src/foundation/binding.dart', 'packages/flutter/src/semantics/binding.dart', 'packages/flutter/src/gestures/binding.dart', 'packages/flutter/src/painting/binding.dart', 'packages/flutter/src/painting/clip.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__rendering__layer_dart(dart_sdk, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__node$46dart, packages__flutter__src__foundation__debug$46dart, packages__vector_math__vector_math_64$46dart, packages__flutter__src__gestures__events$46dart, packages__flutter__src__painting__matrix_utils$46dart, packages__flutter__src__painting__colors$46dart, packages__flutter__src__gestures__hit_test$46dart, packages__flutter__src__services__system_chrome$46dart, packages__flutter__src__foundation___platform_web$46dart, packages__flutter__src__foundation__print$46dart, packages__flutter__src__semantics__semantics$46dart, packages__flutter__src__animation__curves$46dart, packages__flutter__src__semantics__semantics_event$46dart, packages__flutter__src__services__mouse_tracking$46dart, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__foundation__change_notifier$46dart, packages__flutter__src__painting__debug$46dart, packages__flutter__src__services__restoration$46dart, packages__flutter__src__scheduler__binding$46dart, packages__flutter__src__foundation__binding$46dart, packages__flutter__src__semantics__binding$46dart, packages__flutter__src__gestures__binding$46dart, packages__flutter__src__painting__binding$46dart, packages__flutter__src__painting__clip$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const developer = dart_sdk.developer;
  const io = dart_sdk.io;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const node = packages__flutter__src__foundation__node$46dart.src__foundation__node;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const debug = packages__flutter__src__foundation__debug$46dart.src__foundation__debug;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  const events = packages__flutter__src__gestures__events$46dart.src__gestures__events;
  const matrix_utils = packages__flutter__src__painting__matrix_utils$46dart.src__painting__matrix_utils;
  const colors = packages__flutter__src__painting__colors$46dart.src__painting__colors;
  const hit_test = packages__flutter__src__gestures__hit_test$46dart.src__gestures__hit_test;
  const system_chrome = packages__flutter__src__services__system_chrome$46dart.src__services__system_chrome;
  const platform = packages__flutter__src__foundation___platform_web$46dart.src__foundation__platform;
  const print = packages__flutter__src__foundation__print$46dart.src__foundation__print;
  const semantics = packages__flutter__src__semantics__semantics$46dart.src__semantics__semantics;
  const curves = packages__flutter__src__animation__curves$46dart.src__animation__curves;
  const semantics_event = packages__flutter__src__semantics__semantics_event$46dart.src__semantics__semantics_event;
  const mouse_tracking = packages__flutter__src__services__mouse_tracking$46dart.src__services__mouse_tracking;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  const debug$ = packages__flutter__src__painting__debug$46dart.src__painting__debug;
  const platform_channel = packages__flutter__src__services__restoration$46dart.src__services__platform_channel;
  const message_codecs = packages__flutter__src__services__restoration$46dart.src__services__message_codecs;
  const binding = packages__flutter__src__services__restoration$46dart.src__services__binding;
  const binding$ = packages__flutter__src__scheduler__binding$46dart.src__scheduler__binding;
  const binding$0 = packages__flutter__src__foundation__binding$46dart.src__foundation__binding;
  const binding$1 = packages__flutter__src__semantics__binding$46dart.src__semantics__binding;
  const binding$2 = packages__flutter__src__gestures__binding$46dart.src__gestures__binding;
  const binding$3 = packages__flutter__src__painting__binding$46dart.src__painting__binding;
  const clip = packages__flutter__src__painting__clip$46dart.src__painting__clip;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var layer$ = Object.create(dart.library);
  var view = Object.create(dart.library);
  var mouse_tracker = Object.create(dart.library);
  var binding$4 = Object.create(dart.library);
  var object$ = Object.create(dart.library);
  var debug$0 = Object.create(dart.library);
  var box = Object.create(dart.library);
  var $add = dartx.add;
  var $map = dartx.map;
  var $runtimeType = dartx.runtimeType;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $toString = dartx.toString;
  var $_equals = dartx._equals;
  var $isNotEmpty = dartx.isNotEmpty;
  var $addAll = dartx.addAll;
  var $ceil = dartx.ceil;
  var $isFinite = dartx.isFinite;
  var $every = dartx.every;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $split = dartx.split;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $trim = dartx.trim;
  var $single = dartx.single;
  var $clear = dartx.clear;
  var $_set = dartx._set;
  var $putIfAbsent = dartx.putIfAbsent;
  var $containsKey = dartx.containsKey;
  var $keys = dartx.keys;
  var $remove = dartx.remove;
  var $values = dartx.values;
  var $forEach = dartx.forEach;
  var $where = dartx.where;
  var $toList = dartx.toList;
  var $reversed = dartx.reversed;
  var $hashCode = dartx.hashCode;
  var $entries = dartx.entries;
  var $sort = dartx.sort;
  var $last = dartx.last;
  var $skip = dartx.skip;
  var $clamp = dartx.clamp;
  var $truncate = dartx.truncate;
  var $toDouble = dartx.toDouble;
  var $isNaN = dartx.isNaN;
  var $removeLast = dartx.removeLast;
  var $join = dartx.join;
  var $isInfinite = dartx.isInfinite;
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    LayerHandleOfLayer: () => (T$.LayerHandleOfLayer = dart.constFn(layer$.LayerHandle$(layer$.Layer)))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    boolTodynamic: () => (T$.boolTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.bool])))(),
    VoidToint: () => (T$.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    intTodynamic: () => (T$.intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))(),
    ContainerLayerN: () => (T$.ContainerLayerN = dart.constFn(dart.nullable(layer$.ContainerLayer)))(),
    DiagnosticsPropertyOfObject: () => (T$.DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    DiagnosticsPropertyOfObjectN: () => (T$.DiagnosticsPropertyOfObjectN = dart.constFn(diagnostics.DiagnosticsProperty$(T$.ObjectN())))(),
    DiagnosticsPropertyOfString: () => (T$.DiagnosticsPropertyOfString = dart.constFn(diagnostics.DiagnosticsProperty$(core.String)))(),
    DiagnosticsPropertyOfint: () => (T$.DiagnosticsPropertyOfint = dart.constFn(diagnostics.DiagnosticsProperty$(core.int)))(),
    DiagnosticsPropertyOfRect: () => (T$.DiagnosticsPropertyOfRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Rect)))(),
    JSArrayOfLayer: () => (T$.JSArrayOfLayer = dart.constFn(_interceptors.JSArray$(layer$.Layer)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    OffsetEngineLayerN: () => (T$.OffsetEngineLayerN = dart.constFn(dart.nullable(ui.OffsetEngineLayer)))(),
    DiagnosticsPropertyOfOffset: () => (T$.DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))(),
    ClipRectEngineLayerN: () => (T$.ClipRectEngineLayerN = dart.constFn(dart.nullable(ui.ClipRectEngineLayer)))(),
    DiagnosticsPropertyOfClip: () => (T$.DiagnosticsPropertyOfClip = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Clip)))(),
    ClipRRectEngineLayerN: () => (T$.ClipRRectEngineLayerN = dart.constFn(dart.nullable(ui.ClipRRectEngineLayer)))(),
    DiagnosticsPropertyOfRRect: () => (T$.DiagnosticsPropertyOfRRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.RRect)))(),
    ClipPathEngineLayerN: () => (T$.ClipPathEngineLayerN = dart.constFn(dart.nullable(ui.ClipPathEngineLayer)))(),
    ColorFilterEngineLayerN: () => (T$.ColorFilterEngineLayerN = dart.constFn(dart.nullable(ui.ColorFilterEngineLayer)))(),
    DiagnosticsPropertyOfColorFilter: () => (T$.DiagnosticsPropertyOfColorFilter = dart.constFn(diagnostics.DiagnosticsProperty$(ui.ColorFilter)))(),
    ImageFilterEngineLayerN: () => (T$.ImageFilterEngineLayerN = dart.constFn(dart.nullable(ui.ImageFilterEngineLayer)))(),
    DiagnosticsPropertyOfImageFilter: () => (T$.DiagnosticsPropertyOfImageFilter = dart.constFn(diagnostics.DiagnosticsProperty$(ui.ImageFilter)))(),
    doubleTobool: () => (T$.doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))(),
    TransformEngineLayerN: () => (T$.TransformEngineLayerN = dart.constFn(dart.nullable(ui.TransformEngineLayer)))(),
    OpacityEngineLayerN: () => (T$.OpacityEngineLayerN = dart.constFn(dart.nullable(ui.OpacityEngineLayer)))(),
    ShaderMaskEngineLayerN: () => (T$.ShaderMaskEngineLayerN = dart.constFn(dart.nullable(ui.ShaderMaskEngineLayer)))(),
    DiagnosticsPropertyOfShader: () => (T$.DiagnosticsPropertyOfShader = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Shader)))(),
    DiagnosticsPropertyOfBlendMode: () => (T$.DiagnosticsPropertyOfBlendMode = dart.constFn(diagnostics.DiagnosticsProperty$(ui.BlendMode)))(),
    BackdropFilterEngineLayerN: () => (T$.BackdropFilterEngineLayerN = dart.constFn(dart.nullable(ui.BackdropFilterEngineLayer)))(),
    PhysicalShapeEngineLayerN: () => (T$.PhysicalShapeEngineLayerN = dart.constFn(dart.nullable(ui.PhysicalShapeEngineLayer)))(),
    DiagnosticsPropertyOfLayerLink: () => (T$.DiagnosticsPropertyOfLayerLink = dart.constFn(diagnostics.DiagnosticsProperty$(layer$.LayerLink)))(),
    JSArrayOfContainerLayer: () => (T$.JSArrayOfContainerLayer = dart.constFn(_interceptors.JSArray$(layer$.ContainerLayer)))(),
    DiagnosticsPropertyOfSize: () => (T$.DiagnosticsPropertyOfSize = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Size)))(),
    DiagnosticsPropertyOfbool: () => (T$.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    DiagnosticsPropertyOfViewConfiguration: () => (T$.DiagnosticsPropertyOfViewConfiguration = dart.constFn(diagnostics.DiagnosticsProperty$(view.ViewConfiguration)))(),
    LayerHandleOfContainerLayer: () => (T$.LayerHandleOfContainerLayer = dart.constFn(layer$.LayerHandle$(layer$.ContainerLayer)))(),
    RenderObjectTovoid: () => (T$.RenderObjectTovoid = dart.constFn(dart.fnType(dart.void, [object$.RenderObject])))(),
    ListOfDiagnosticsNode: () => (T$.ListOfDiagnosticsNode = dart.constFn(core.List$(diagnostics.DiagnosticsNode)))(),
    VoidToListOfDiagnosticsNode: () => (T$.VoidToListOfDiagnosticsNode = dart.constFn(dart.fnType(T$.ListOfDiagnosticsNode(), [])))(),
    PipelineOwnerN: () => (T$.PipelineOwnerN = dart.constFn(dart.nullable(object$.PipelineOwner)))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfRenderObject: () => (T$.JSArrayOfRenderObject = dart.constFn(_interceptors.JSArray$(object$.RenderObject)))(),
    RenderObjectN: () => (T$.RenderObjectN = dart.constFn(dart.nullable(object$.RenderObject)))(),
    JSArrayOfSemanticsNode: () => (T$.JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))(),
    JSArrayOf_InterestingSemanticsFragment: () => (T$.JSArrayOf_InterestingSemanticsFragment = dart.constFn(_interceptors.JSArray$(object$._InterestingSemanticsFragment)))(),
    LinkedHashSetOf_InterestingSemanticsFragment: () => (T$.LinkedHashSetOf_InterestingSemanticsFragment = dart.constFn(collection.LinkedHashSet$(object$._InterestingSemanticsFragment)))(),
    ListOfSemanticsNode: () => (T$.ListOfSemanticsNode = dart.constFn(core.List$(semantics.SemanticsNode)))(),
    DiagnosticsPropertyOfParentData: () => (T$.DiagnosticsPropertyOfParentData = dart.constFn(diagnostics.DiagnosticsProperty$(object$.ParentData)))(),
    DiagnosticsPropertyOfConstraints: () => (T$.DiagnosticsPropertyOfConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(object$.Constraints)))(),
    DiagnosticsPropertyOfContainerLayer: () => (T$.DiagnosticsPropertyOfContainerLayer = dart.constFn(diagnostics.DiagnosticsProperty$(layer$.ContainerLayer)))(),
    DiagnosticsPropertyOfSemanticsNode: () => (T$.DiagnosticsPropertyOfSemanticsNode = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsNode)))(),
    LinkedHashMapOfString$String: () => (T$.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    LinkedMapOf_IntrinsicDimensionsCacheEntry$double: () => (T$.LinkedMapOf_IntrinsicDimensionsCacheEntry$double = dart.constFn(_js_helper.LinkedMap$(box._IntrinsicDimensionsCacheEntry, core.double)))(),
    VoidTodouble: () => (T$.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    LinkedMapOfBoxConstraints$Size: () => (T$.LinkedMapOfBoxConstraints$Size = dart.constFn(_js_helper.LinkedMap$(box.BoxConstraints, ui.Size)))(),
    VoidToSize: () => (T$.VoidToSize = dart.constFn(dart.fnType(ui.Size, [])))(),
    doubleN: () => (T$.doubleN = dart.constFn(dart.nullable(core.double)))(),
    LinkedMapOfTextBaseline$doubleN: () => (T$.LinkedMapOfTextBaseline$doubleN = dart.constFn(_js_helper.LinkedMap$(ui.TextBaseline, T$.doubleN())))(),
    VoidTodoubleN: () => (T$.VoidTodoubleN = dart.constFn(dart.fnType(T$.doubleN(), [])))(),
    DiagnosticsPropertyOfRenderBox: () => (T$.DiagnosticsPropertyOfRenderBox = dart.constFn(diagnostics.DiagnosticsProperty$(box.RenderBox)))(),
    DiagnosticsPropertyOfBoxConstraints: () => (T$.DiagnosticsPropertyOfBoxConstraints = dart.constFn(diagnostics.DiagnosticsProperty$(box.BoxConstraints)))(),
    doubleTodouble: () => (T$.doubleTodouble = dart.constFn(dart.fnType(core.double, [core.double])))(),
    FnAndStringAnddoubleTodouble: () => (T$.FnAndStringAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [T$.doubleTodouble(), core.String, core.double])))(),
    FnAndFnAndString__Tovoid: () => (T$.FnAndFnAndString__Tovoid = dart.constFn(dart.fnType(dart.void, [T$.doubleTodouble(), T$.doubleTodouble(), core.String, core.double])))(),
    LinkedMapOfMouseTrackerAnnotation$Matrix4: () => (T$.LinkedMapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(_js_helper.LinkedMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)))(),
    DiagnosticsPropertyOfPointerEvent: () => (T$.DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))(),
    MapOfMouseTrackerAnnotation$Matrix4: () => (T$.MapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(core.Map$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)))(),
    DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4: () => (T$.DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(diagnostics.DiagnosticsProperty$(T$.MapOfMouseTrackerAnnotation$Matrix4())))(),
    IdentityMapOfint$_MouseState: () => (T$.IdentityMapOfint$_MouseState = dart.constFn(_js_helper.IdentityMap$(core.int, mouse_tracker._MouseState)))(),
    LinkedHashMapOfMouseTrackerAnnotation$Matrix4: () => (T$.LinkedHashMapOfMouseTrackerAnnotation$Matrix4 = dart.constFn(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)))(),
    MouseTrackerAnnotationToMouseCursor: () => (T$.MouseTrackerAnnotationToMouseCursor = dart.constFn(dart.fnType(mouse_cursor.MouseCursor, [mouse_tracking.MouseTrackerAnnotation])))(),
    MouseTrackerAnnotationAndMatrix4Tovoid: () => (T$.MouseTrackerAnnotationAndMatrix4Tovoid = dart.constFn(dart.fnType(dart.void, [mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4])))(),
    MouseTrackerAnnotationTobool: () => (T$.MouseTrackerAnnotationTobool = dart.constFn(dart.fnType(core.bool, [mouse_tracking.MouseTrackerAnnotation])))(),
    FutureOfbool: () => (T$.FutureOfbool = dart.constFn(async.Future$(core.bool)))(),
    VoidToFutureOfbool: () => (T$.VoidToFutureOfbool = dart.constFn(dart.fnType(T$.FutureOfbool(), [])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    boolToFutureOfvoid: () => (T$.boolToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [core.bool])))(),
    IdentityMapOfString$Object: () => (T$.IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))(),
    MapOfString$Object: () => (T$.MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))(),
    FutureOfMapOfString$Object: () => (T$.FutureOfMapOfString$Object = dart.constFn(async.Future$(T$.MapOfString$Object())))(),
    MapOfString$String: () => (T$.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    MapOfString$StringToFutureOfMapOfString$Object: () => (T$.MapOfString$StringToFutureOfMapOfString$Object = dart.constFn(dart.fnType(T$.FutureOfMapOfString$Object(), [T$.MapOfString$String()])))(),
    VoidToHitTestResult: () => (T$.VoidToHitTestResult = dart.constFn(dart.fnType(hit_test.HitTestResult, [])))(),
    DurationTovoid: () => (T$.DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))(),
    VoidToFn: () => (T$.VoidToFn = dart.constFn(dart.fnType(T$.RenderObjectTovoid(), [])))(),
    FnTodynamic: () => (T$.FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.RenderObjectTovoid()])))(),
    OffsetLayerN: () => (T$.OffsetLayerN = dart.constFn(dart.nullable(layer$.OffsetLayer)))(),
    LinkedHashSetOfRenderObject: () => (T$.LinkedHashSetOfRenderObject = dart.constFn(collection.LinkedHashSet$(object$.RenderObject)))(),
    IdentityMapOfString$String: () => (T$.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    RenderObjectAndRenderObjectToint: () => (T$.RenderObjectAndRenderObjectToint = dart.constFn(dart.fnType(core.int, [object$.RenderObject, object$.RenderObject])))(),
    LinkedHashSetOfSemanticsTag: () => (T$.LinkedHashSetOfSemanticsTag = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsTag)))(),
    DiagnosticsNodeTovoid: () => (T$.DiagnosticsNodeTovoid = dart.constFn(dart.fnType(dart.void, [diagnostics.DiagnosticsNode])))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    doubleAnddoubleAndStringToString: () => (T$.doubleAnddoubleAndStringToString = dart.constFn(dart.fnType(core.String, [core.double, core.double, core.String])))(),
    BoxHitTestResultAndOffsetTobool: () => (T$.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_Enum__name]: "low",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "antiAlias",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.BlendMode.prototype,
        [_Enum__name]: "srcOver",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "android",
        [_Enum_index]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "fuchsia",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "iOS",
        [_Enum_index]: 2
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "linux",
        [_Enum_index]: 3
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "macOS",
        [_Enum_index]: 4
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_Enum__name]: "windows",
        [_Enum_index]: 5
      });
    },
    get C13() {
      return C[13] = dart.fn(object$.RenderObject._cleanChildRelayoutBoundary, T$.RenderObjectTovoid());
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "info",
        [_Enum_index]: 3
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_Enum__name]: "debug",
        [_Enum_index]: 2
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_Enum__name]: "shallow",
        [_Enum_index]: 10
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255615.0
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294955008.0
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278255360.0
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C[24] || CT.C24
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C[23] || CT.C23,
        [MethodChannel_name]: "flutter/service_worker"
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294940672.0
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2415956223.0
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278227199.0
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2425393296.0
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: colors.HSVColor.prototype,
        [HSVColor_value]: 1,
        [HSVColor_saturation]: 1,
        [HSVColor_hue]: 60,
        [HSVColor_alpha]: 0.4
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_Enum__name]: "minWidth",
        [_Enum_index]: 0
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_Enum__name]: "maxWidth",
        [_Enum_index]: 1
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_Enum__name]: "minHeight",
        [_Enum_index]: 2
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: box._IntrinsicDimension.prototype,
        [_Enum__name]: "maxHeight",
        [_Enum_index]: 3
      });
    },
    get C34() {
      return C[34] = dart.constList([C[30] || CT.C30, C[31] || CT.C31, C[32] || CT.C32, C[33] || CT.C33], box._IntrinsicDimension);
    }
  }, false);
  var C = Array(35).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/layer.dart",
    "package:flutter/src/rendering/layer.dart",
    "package:flutter/src/rendering/view.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/view.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/object.dart",
    "package:flutter/src/rendering/object.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/box.dart",
    "package:flutter/src/rendering/box.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/mouse_tracker.dart",
    "package:flutter/src/rendering/mouse_tracker.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/binding.dart",
    "package:flutter/src/rendering/binding.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/debug.dart"
  ];
  var annotation$ = dart.privateName(layer$, "AnnotationEntry.annotation");
  var localPosition$ = dart.privateName(layer$, "AnnotationEntry.localPosition");
  const _is_AnnotationEntry_default = Symbol('_is_AnnotationEntry_default');
  layer$.AnnotationEntry$ = dart.generic(T => {
    class AnnotationEntry extends core.Object {
      get annotation() {
        return this[annotation$];
      }
      set annotation(value) {
        super.annotation = value;
      }
      get localPosition() {
        return this[localPosition$];
      }
      set localPosition(value) {
        super.localPosition = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let annotation = opts && 'annotation' in opts ? opts.annotation : null;
        let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
        return new (layer$.AnnotationEntry$(T)).new({annotation: annotation, localPosition: localPosition});
      }
      toString() {
        return object.objectRuntimeType(this, "AnnotationEntry") + "(annotation: " + dart.str(this.annotation) + ", localPosition: " + dart.str(this.localPosition) + ")";
      }
    }
    (AnnotationEntry.new = function(opts) {
      let annotation = opts && 'annotation' in opts ? opts.annotation : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      this[annotation$] = annotation;
      this[localPosition$] = localPosition;
      if (!(localPosition !== null)) dart.assertFailed(null, I[0], 26, 15, "localPosition != null");
      ;
    }).prototype = AnnotationEntry.prototype;
    dart.addTypeTests(AnnotationEntry);
    AnnotationEntry.prototype[_is_AnnotationEntry_default] = true;
    dart.addTypeCaches(AnnotationEntry);
    dart.setLibraryUri(AnnotationEntry, I[1]);
    dart.setFieldSignature(AnnotationEntry, () => ({
      __proto__: dart.getFields(AnnotationEntry.__proto__),
      annotation: dart.finalFieldType(T),
      localPosition: dart.finalFieldType(ui.Offset)
    }));
    dart.defineExtensionMethods(AnnotationEntry, ['toString']);
    return AnnotationEntry;
  });
  layer$.AnnotationEntry = layer$.AnnotationEntry$();
  dart.addTypeTests(layer$.AnnotationEntry, _is_AnnotationEntry_default);
  var _entries = dart.privateName(layer$, "_entries");
  const _is_AnnotationResult_default = Symbol('_is_AnnotationResult_default');
  layer$.AnnotationResult$ = dart.generic(T => {
    var __t$AnnotationEntryOfT = () => (__t$AnnotationEntryOfT = dart.constFn(layer$.AnnotationEntry$(T)))();
    var __t$JSArrayOfAnnotationEntryOfT = () => (__t$JSArrayOfAnnotationEntryOfT = dart.constFn(_interceptors.JSArray$(__t$AnnotationEntryOfT())))();
    var __t$AnnotationEntryOfTToT = () => (__t$AnnotationEntryOfTToT = dart.constFn(dart.fnType(T, [__t$AnnotationEntryOfT()])))();
    class AnnotationResult extends core.Object {
      add(entry) {
        __t$AnnotationEntryOfT().as(entry);
        return this[_entries][$add](entry);
      }
      get entries() {
        return this[_entries];
      }
      get annotations() {
        return this[_entries][$map](T, dart.fn(entry => entry.annotation, __t$AnnotationEntryOfTToT()));
      }
      static ['_#new#tearOff'](T) {
        return new (layer$.AnnotationResult$(T)).new();
      }
    }
    (AnnotationResult.new = function() {
      this[_entries] = __t$JSArrayOfAnnotationEntryOfT().of([]);
      ;
    }).prototype = AnnotationResult.prototype;
    dart.addTypeTests(AnnotationResult);
    AnnotationResult.prototype[_is_AnnotationResult_default] = true;
    dart.addTypeCaches(AnnotationResult);
    dart.setMethodSignature(AnnotationResult, () => ({
      __proto__: dart.getMethods(AnnotationResult.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(AnnotationResult, () => ({
      __proto__: dart.getGetters(AnnotationResult.__proto__),
      entries: core.Iterable$(layer$.AnnotationEntry$(T)),
      annotations: core.Iterable$(T)
    }));
    dart.setLibraryUri(AnnotationResult, I[1]);
    dart.setFieldSignature(AnnotationResult, () => ({
      __proto__: dart.getFields(AnnotationResult.__proto__),
      [_entries]: dart.finalFieldType(core.List$(layer$.AnnotationEntry$(T)))
    }));
    return AnnotationResult;
  });
  layer$.AnnotationResult = layer$.AnnotationResult$();
  dart.addTypeTests(layer$.AnnotationResult, _is_AnnotationResult_default);
  var debugCreator = dart.privateName(layer$, "Layer.debugCreator");
  var _debugDisposed = dart.privateName(layer$, "_debugDisposed");
  var _parentHandle = dart.privateName(layer$, "_parentHandle");
  var _refCount = dart.privateName(layer$, "_refCount");
  var _needsAddToScene = dart.privateName(layer$, "_needsAddToScene");
  var _engineLayer = dart.privateName(layer$, "_engineLayer");
  var _nextSibling = dart.privateName(layer$, "_nextSibling");
  var _previousSibling = dart.privateName(layer$, "_previousSibling");
  var _unref = dart.privateName(layer$, "_unref");
  var _removeChild = dart.privateName(layer$, "_removeChild");
  var _addToSceneWithRetainedRendering = dart.privateName(layer$, "_addToSceneWithRetainedRendering");
  const AbstractNode_DiagnosticableTreeMixin$36 = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  layer$.Layer = class Layer extends AbstractNode_DiagnosticableTreeMixin$36 {
    get debugCreator() {
      return this[debugCreator];
    }
    set debugCreator(value) {
      this[debugCreator] = value;
    }
    get debugDisposed() {
      let disposed = null;
      function disposed$35get() {
        let t1;
        t1 = disposed;
        return t1 == null ? dart.throw(new _internal.LateError.localNI("disposed")) : t1;
      }
      dart.fn(disposed$35get, T$.VoidTobool());
      function disposed$35set(t2) {
        return disposed = t2;
      }
      dart.fn(disposed$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        disposed$35set(this[_debugDisposed]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 144, 12, "() {\n      disposed = _debugDisposed;\n      return true;\n    }()");
      return disposed$35get();
    }
    [_unref]() {
      if (!(this[_refCount] > 0)) dart.assertFailed(null, I[0], 168, 12, "_refCount > 0");
      this[_refCount] = this[_refCount] - 1;
      if (this[_refCount] === 0) {
        this.dispose();
      }
    }
    get debugHandleCount() {
      let count = null;
      function count$35get() {
        let t5;
        t5 = count;
        return t5 == null ? dart.throw(new _internal.LateError.localNI("count")) : t5;
      }
      dart.fn(count$35get, T$.VoidToint());
      function count$35set(t6) {
        return count = t6;
      }
      dart.fn(count$35set, T$.intTodynamic());
      if (!dart.fn(() => {
        count$35set(this[_refCount]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 180, 12, "() {\n      count = _refCount;\n      return true;\n    }()");
      return count$35get();
    }
    dispose() {
      let t8;
      if (!!this[_debugDisposed]) dart.assertFailed("Layers must only be disposed once. This is typically handled by " + "LayerHandle and createHandle. Subclasses should not directly call " + "dispose, except to call super.dispose() in an overridden dispose  " + "method. Tests must only call dispose once.", I[0], 210, 7, "!_debugDisposed");
      if (!dart.fn(() => {
        if (!(this[_refCount] === 0)) dart.assertFailed("Do not directly call dispose on a " + dart.str(this[$runtimeType]) + ". Instead, " + "use createHandle and LayerHandle.dispose.", I[0], 218, 9, "_refCount == 0");
        this[_debugDisposed] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 216, 12, "() {\n      assert(\n        _refCount == 0,\n        'Do not directly call dispose on a $runtimeType. Instead, '\n        'use createHandle and LayerHandle.dispose.',\n      );\n      _debugDisposed = true;\n      return true;\n    }()");
      t8 = this[_engineLayer];
      t8 == null ? null : t8.dispose();
      this[_engineLayer] = null;
    }
    get parent() {
      return T$.ContainerLayerN().as(super.parent);
    }
    markNeedsAddToScene() {
      if (!!this.alwaysNeedsAddToScene) dart.assertFailed(dart.str(this[$runtimeType]) + " with alwaysNeedsAddToScene set called markNeedsAddToScene.\n" + "The layer's alwaysNeedsAddToScene is set to true, and therefore it should not call markNeedsAddToScene.", I[0], 266, 7, "!alwaysNeedsAddToScene");
      if (!!this[_debugDisposed]) dart.assertFailed(null, I[0], 270, 12, "!_debugDisposed");
      if (this[_needsAddToScene]) {
        return;
      }
      this[_needsAddToScene] = true;
    }
    debugMarkClean() {
      if (!dart.fn(() => {
        this[_needsAddToScene] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 286, 12, "() {\n      _needsAddToScene = false;\n      return true;\n    }()");
    }
    get alwaysNeedsAddToScene() {
      return false;
    }
    get debugSubtreeNeedsAddToScene() {
      let result = null;
      if (!dart.fn(() => {
        result = this[_needsAddToScene];
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 303, 12, "() {\n      result = _needsAddToScene;\n      return true;\n    }()");
      return result;
    }
    get engineLayer() {
      return this[_engineLayer];
    }
    set engineLayer(value) {
      let t8;
      if (!!this[_debugDisposed]) dart.assertFailed(null, I[0], 335, 12, "!_debugDisposed");
      t8 = this[_engineLayer];
      t8 == null ? null : t8.dispose();
      this[_engineLayer] = value;
      if (!this.alwaysNeedsAddToScene) {
        if (this.parent != null && !dart.nullCheck(this.parent).alwaysNeedsAddToScene) {
          dart.nullCheck(this.parent).markNeedsAddToScene();
        }
      }
    }
    updateSubtreeNeedsAddToScene() {
      this[_needsAddToScene] = this[_needsAddToScene] || this.alwaysNeedsAddToScene;
    }
    get nextSibling() {
      return this[_nextSibling];
    }
    get previousSibling() {
      return this[_previousSibling];
    }
    dropChild(child) {
      node.AbstractNode.as(child);
      if (!this.alwaysNeedsAddToScene) {
        this.markNeedsAddToScene();
      }
      super.dropChild(child);
    }
    adoptChild(child) {
      node.AbstractNode.as(child);
      if (!this.alwaysNeedsAddToScene) {
        this.markNeedsAddToScene();
      }
      super.adoptChild(child);
    }
    remove() {
      let t8;
      t8 = this.parent;
      t8 == null ? null : t8[_removeChild](this);
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return false;
    }
    find(S, localPosition) {
      let result = new (layer$.AnnotationResult$(S)).new();
      this.findAnnotations(S, result, localPosition, {onlyFirst: true});
      return result.entries[$isEmpty] ? null : result.entries[$first].annotation;
    }
    findAllAnnotations(S, localPosition) {
      let result = new (layer$.AnnotationResult$(S)).new();
      this.findAnnotations(S, result, localPosition, {onlyFirst: false});
      return result;
    }
    [_addToSceneWithRetainedRendering](builder) {
      if (!this[_needsAddToScene] && this[_engineLayer] != null) {
        builder.addRetained(dart.nullCheck(this[_engineLayer]));
        return;
      }
      this.addToScene(builder);
      this[_needsAddToScene] = false;
    }
    toStringShort() {
      return super.toStringShort() + (this.owner == null ? " DETACHED" : "");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfObject()).new("owner", this.owner, {level: this.parent != null ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info, defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfObjectN()).new("creator", this.debugCreator, {defaultValue: null, level: diagnostics.DiagnosticLevel.debug}));
      if (this[_engineLayer] != null) {
        properties.add(new (T$.DiagnosticsPropertyOfString()).new("engine layer", diagnostics.describeIdentity(this[_engineLayer])));
      }
      properties.add(new (T$.DiagnosticsPropertyOfint()).new("handles", this.debugHandleCount));
    }
  };
  (layer$.Layer.new = function() {
    this[_debugDisposed] = false;
    this[_parentHandle] = new (T$.LayerHandleOfLayer()).new();
    this[_refCount] = 0;
    this[_needsAddToScene] = true;
    this[_engineLayer] = null;
    this[_nextSibling] = null;
    this[_previousSibling] = null;
    this[debugCreator] = null;
    layer$.Layer.__proto__.new.call(this);
    ;
  }).prototype = layer$.Layer.prototype;
  dart.addTypeTests(layer$.Layer);
  dart.addTypeCaches(layer$.Layer);
  dart.setMethodSignature(layer$.Layer, () => ({
    __proto__: dart.getMethods(layer$.Layer.__proto__),
    [_unref]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    markNeedsAddToScene: dart.fnType(dart.void, []),
    debugMarkClean: dart.fnType(dart.void, []),
    updateSubtreeNeedsAddToScene: dart.fnType(dart.void, []),
    remove: dart.fnType(dart.void, []),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    find: dart.gFnType(S => [dart.nullable(S), [ui.Offset]], S => [core.Object]),
    findAllAnnotations: dart.gFnType(S => [layer$.AnnotationResult$(S), [ui.Offset]], S => [core.Object]),
    [_addToSceneWithRetainedRendering]: dart.fnType(dart.void, [ui.SceneBuilder])
  }));
  dart.setGetterSignature(layer$.Layer, () => ({
    __proto__: dart.getGetters(layer$.Layer.__proto__),
    debugDisposed: core.bool,
    debugHandleCount: core.int,
    parent: dart.nullable(layer$.ContainerLayer),
    alwaysNeedsAddToScene: core.bool,
    debugSubtreeNeedsAddToScene: dart.nullable(core.bool),
    engineLayer: dart.nullable(ui.EngineLayer),
    nextSibling: dart.nullable(layer$.Layer),
    previousSibling: dart.nullable(layer$.Layer)
  }));
  dart.setSetterSignature(layer$.Layer, () => ({
    __proto__: dart.getSetters(layer$.Layer.__proto__),
    engineLayer: dart.nullable(ui.EngineLayer)
  }));
  dart.setLibraryUri(layer$.Layer, I[1]);
  dart.setFieldSignature(layer$.Layer, () => ({
    __proto__: dart.getFields(layer$.Layer.__proto__),
    [_debugDisposed]: dart.fieldType(core.bool),
    [_parentHandle]: dart.finalFieldType(layer$.LayerHandle$(layer$.Layer)),
    [_refCount]: dart.fieldType(core.int),
    [_needsAddToScene]: dart.fieldType(core.bool),
    [_engineLayer]: dart.fieldType(dart.nullable(ui.EngineLayer)),
    [_nextSibling]: dart.fieldType(dart.nullable(layer$.Layer)),
    [_previousSibling]: dart.fieldType(dart.nullable(layer$.Layer)),
    debugCreator: dart.fieldType(dart.nullable(core.Object))
  }));
  var _layer$ = dart.privateName(layer$, "_layer");
  const _is_LayerHandle_default = Symbol('_is_LayerHandle_default');
  layer$.LayerHandle$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    class LayerHandle extends core.Object {
      static ['_#new#tearOff'](T, _layer = null) {
        return new (layer$.LayerHandle$(T)).new(_layer);
      }
      get layer() {
        return this[_layer$];
      }
      set layer(layer) {
        let t8, t8$, t8$0;
        __t$TN().as(layer);
        if (!((t8 = layer, t8 == null ? null : t8.debugDisposed) !== true)) dart.assertFailed("Attempted to create a handle to an already disposed layer: " + dart.str(layer) + ".", I[0], 627, 7, "layer?.debugDisposed != true");
        if (layer == this[_layer$]) {
          return;
        }
        t8$ = this[_layer$];
        t8$ == null ? null : t8$[_unref]();
        this[_layer$] = layer;
        if (this[_layer$] != null) {
          t8$0 = dart.nullCheck(this[_layer$]);
          t8$0[_refCount] = t8$0[_refCount] + 1;
        }
      }
      toString() {
        return "LayerHandle(" + (this[_layer$] != null ? dart.toString(this[_layer$]) : "DISPOSED") + ")";
      }
    }
    (LayerHandle.new = function(_layer = null) {
      let t8;
      this[_layer$] = _layer;
      if (this[_layer$] != null) {
        t8 = dart.nullCheck(this[_layer$]);
        t8[_refCount] = t8[_refCount] + 1;
      }
    }).prototype = LayerHandle.prototype;
    dart.addTypeTests(LayerHandle);
    LayerHandle.prototype[_is_LayerHandle_default] = true;
    dart.addTypeCaches(LayerHandle);
    dart.setGetterSignature(LayerHandle, () => ({
      __proto__: dart.getGetters(LayerHandle.__proto__),
      layer: dart.nullable(T)
    }));
    dart.setSetterSignature(LayerHandle, () => ({
      __proto__: dart.getSetters(LayerHandle.__proto__),
      layer: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(LayerHandle, I[1]);
    dart.setFieldSignature(LayerHandle, () => ({
      __proto__: dart.getFields(LayerHandle.__proto__),
      [_layer$]: dart.fieldType(dart.nullable(T))
    }));
    dart.defineExtensionMethods(LayerHandle, ['toString']);
    return LayerHandle;
  });
  layer$.LayerHandle = layer$.LayerHandle$();
  dart.addTypeTests(layer$.LayerHandle, _is_LayerHandle_default);
  var canvasBounds$ = dart.privateName(layer$, "PictureLayer.canvasBounds");
  var _picture = dart.privateName(layer$, "_picture");
  var _isComplexHint = dart.privateName(layer$, "_isComplexHint");
  var _willChangeHint = dart.privateName(layer$, "_willChangeHint");
  layer$.PictureLayer = class PictureLayer extends layer$.Layer {
    get canvasBounds() {
      return this[canvasBounds$];
    }
    set canvasBounds(value) {
      super.canvasBounds = value;
    }
    static ['_#new#tearOff'](canvasBounds) {
      return new layer$.PictureLayer.new(canvasBounds);
    }
    get picture() {
      return this[_picture];
    }
    set picture(picture) {
      let t8;
      if (!!this[_debugDisposed]) dart.assertFailed(null, I[0], 672, 12, "!_debugDisposed");
      this.markNeedsAddToScene();
      t8 = this[_picture];
      t8 == null ? null : t8.dispose();
      this[_picture] = picture;
    }
    get isComplexHint() {
      return this[_isComplexHint];
    }
    set isComplexHint(value) {
      if (value !== this[_isComplexHint]) {
        this[_isComplexHint] = value;
        this.markNeedsAddToScene();
      }
    }
    get willChangeHint() {
      return this[_willChangeHint];
    }
    set willChangeHint(value) {
      if (value !== this[_willChangeHint]) {
        this[_willChangeHint] = value;
        this.markNeedsAddToScene();
      }
    }
    dispose() {
      this.picture = null;
      super.dispose();
    }
    addToScene(builder) {
      if (!(this.picture != null)) dart.assertFailed(null, I[0], 721, 12, "picture != null");
      builder.addPicture(ui.Offset.zero, dart.nullCheck(this.picture), {isComplexHint: this.isComplexHint, willChangeHint: this.willChangeHint});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfRect()).new("paint bounds", this.canvasBounds));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("picture", diagnostics.describeIdentity(this[_picture])));
      properties.add(new (T$.DiagnosticsPropertyOfString()).new("raster cache hints", "isComplex = " + dart.str(this.isComplexHint) + ", willChange = " + dart.str(this.willChangeHint)));
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return false;
    }
  };
  (layer$.PictureLayer.new = function(canvasBounds) {
    this[_picture] = null;
    this[_isComplexHint] = false;
    this[_willChangeHint] = false;
    this[canvasBounds$] = canvasBounds;
    layer$.PictureLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PictureLayer.prototype;
  dart.addTypeTests(layer$.PictureLayer);
  dart.addTypeCaches(layer$.PictureLayer);
  dart.setMethodSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getMethods(layer$.PictureLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getGetters(layer$.PictureLayer.__proto__),
    picture: dart.nullable(ui.Picture),
    isComplexHint: core.bool,
    willChangeHint: core.bool
  }));
  dart.setSetterSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getSetters(layer$.PictureLayer.__proto__),
    picture: dart.nullable(ui.Picture),
    isComplexHint: core.bool,
    willChangeHint: core.bool
  }));
  dart.setLibraryUri(layer$.PictureLayer, I[1]);
  dart.setFieldSignature(layer$.PictureLayer, () => ({
    __proto__: dart.getFields(layer$.PictureLayer.__proto__),
    canvasBounds: dart.finalFieldType(ui.Rect),
    [_picture]: dart.fieldType(dart.nullable(ui.Picture)),
    [_isComplexHint]: dart.fieldType(core.bool),
    [_willChangeHint]: dart.fieldType(core.bool)
  }));
  var rect$ = dart.privateName(layer$, "TextureLayer.rect");
  var textureId$ = dart.privateName(layer$, "TextureLayer.textureId");
  var freeze$ = dart.privateName(layer$, "TextureLayer.freeze");
  var filterQuality$ = dart.privateName(layer$, "TextureLayer.filterQuality");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  layer$.TextureLayer = class TextureLayer extends layer$.Layer {
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get textureId() {
      return this[textureId$];
    }
    set textureId(value) {
      super.textureId = value;
    }
    get freeze() {
      return this[freeze$];
    }
    set freeze(value) {
      super.freeze = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    static ['_#new#tearOff'](opts) {
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let textureId = opts && 'textureId' in opts ? opts.textureId : null;
      let freeze = opts && 'freeze' in opts ? opts.freeze : false;
      let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[0] || CT.C0;
      return new layer$.TextureLayer.new({rect: rect, textureId: textureId, freeze: freeze, filterQuality: filterQuality});
    }
    addToScene(builder) {
      builder.addTexture(this.textureId, {offset: this.rect.topLeft, width: this.rect.width, height: this.rect.height, freeze: this.freeze, filterQuality: this.filterQuality});
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return false;
    }
  };
  (layer$.TextureLayer.new = function(opts) {
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let textureId = opts && 'textureId' in opts ? opts.textureId : null;
    let freeze = opts && 'freeze' in opts ? opts.freeze : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C[0] || CT.C0;
    this[rect$] = rect;
    this[textureId$] = textureId;
    this[freeze$] = freeze;
    this[filterQuality$] = filterQuality;
    if (!(rect !== null)) dart.assertFailed(null, I[0], 781, 16, "rect != null");
    if (!(textureId !== null)) dart.assertFailed(null, I[0], 782, 16, "textureId != null");
    layer$.TextureLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.TextureLayer.prototype;
  dart.addTypeTests(layer$.TextureLayer);
  dart.addTypeCaches(layer$.TextureLayer);
  dart.setMethodSignature(layer$.TextureLayer, () => ({
    __proto__: dart.getMethods(layer$.TextureLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setLibraryUri(layer$.TextureLayer, I[1]);
  dart.setFieldSignature(layer$.TextureLayer, () => ({
    __proto__: dart.getFields(layer$.TextureLayer.__proto__),
    rect: dart.finalFieldType(ui.Rect),
    textureId: dart.finalFieldType(core.int),
    freeze: dart.finalFieldType(core.bool),
    filterQuality: dart.finalFieldType(ui.FilterQuality)
  }));
  var rect$0 = dart.privateName(layer$, "PlatformViewLayer.rect");
  var viewId$ = dart.privateName(layer$, "PlatformViewLayer.viewId");
  layer$.PlatformViewLayer = class PlatformViewLayer extends layer$.Layer {
    get rect() {
      return this[rect$0];
    }
    set rect(value) {
      super.rect = value;
    }
    get viewId() {
      return this[viewId$];
    }
    set viewId(value) {
      super.viewId = value;
    }
    static ['_#new#tearOff'](opts) {
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let viewId = opts && 'viewId' in opts ? opts.viewId : null;
      return new layer$.PlatformViewLayer.new({rect: rect, viewId: viewId});
    }
    addToScene(builder) {
      builder.addPlatformView(this.viewId, {offset: this.rect.topLeft, width: this.rect.width, height: this.rect.height});
    }
  };
  (layer$.PlatformViewLayer.new = function(opts) {
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let viewId = opts && 'viewId' in opts ? opts.viewId : null;
    this[rect$0] = rect;
    this[viewId$] = viewId;
    if (!(rect !== null)) dart.assertFailed(null, I[0], 831, 16, "rect != null");
    if (!(viewId !== null)) dart.assertFailed(null, I[0], 832, 16, "viewId != null");
    layer$.PlatformViewLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PlatformViewLayer.prototype;
  dart.addTypeTests(layer$.PlatformViewLayer);
  dart.addTypeCaches(layer$.PlatformViewLayer);
  dart.setMethodSignature(layer$.PlatformViewLayer, () => ({
    __proto__: dart.getMethods(layer$.PlatformViewLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder])
  }));
  dart.setLibraryUri(layer$.PlatformViewLayer, I[1]);
  dart.setFieldSignature(layer$.PlatformViewLayer, () => ({
    __proto__: dart.getFields(layer$.PlatformViewLayer.__proto__),
    rect: dart.finalFieldType(ui.Rect),
    viewId: dart.finalFieldType(core.int)
  }));
  var optionsMask$ = dart.privateName(layer$, "PerformanceOverlayLayer.optionsMask");
  var rasterizerThreshold$ = dart.privateName(layer$, "PerformanceOverlayLayer.rasterizerThreshold");
  var checkerboardRasterCacheImages$ = dart.privateName(layer$, "PerformanceOverlayLayer.checkerboardRasterCacheImages");
  var checkerboardOffscreenLayers$ = dart.privateName(layer$, "PerformanceOverlayLayer.checkerboardOffscreenLayers");
  var _overlayRect = dart.privateName(layer$, "_overlayRect");
  layer$.PerformanceOverlayLayer = class PerformanceOverlayLayer extends layer$.Layer {
    get optionsMask() {
      return this[optionsMask$];
    }
    set optionsMask(value) {
      super.optionsMask = value;
    }
    get rasterizerThreshold() {
      return this[rasterizerThreshold$];
    }
    set rasterizerThreshold(value) {
      super.rasterizerThreshold = value;
    }
    get checkerboardRasterCacheImages() {
      return this[checkerboardRasterCacheImages$];
    }
    set checkerboardRasterCacheImages(value) {
      super.checkerboardRasterCacheImages = value;
    }
    get checkerboardOffscreenLayers() {
      return this[checkerboardOffscreenLayers$];
    }
    set checkerboardOffscreenLayers(value) {
      super.checkerboardOffscreenLayers = value;
    }
    static ['_#new#tearOff'](opts) {
      let overlayRect = opts && 'overlayRect' in opts ? opts.overlayRect : null;
      let optionsMask = opts && 'optionsMask' in opts ? opts.optionsMask : null;
      let rasterizerThreshold = opts && 'rasterizerThreshold' in opts ? opts.rasterizerThreshold : null;
      let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : null;
      let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : null;
      return new layer$.PerformanceOverlayLayer.new({overlayRect: overlayRect, optionsMask: optionsMask, rasterizerThreshold: rasterizerThreshold, checkerboardRasterCacheImages: checkerboardRasterCacheImages, checkerboardOffscreenLayers: checkerboardOffscreenLayers});
    }
    get overlayRect() {
      return this[_overlayRect];
    }
    set overlayRect(value) {
      if (!value._equals(this[_overlayRect])) {
        this[_overlayRect] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.optionsMask !== null)) dart.assertFailed(null, I[0], 914, 12, "optionsMask != null");
      builder.addPerformanceOverlay(this.optionsMask, this.overlayRect);
      builder.setRasterizerTracingThreshold(this.rasterizerThreshold);
      builder.setCheckerboardRasterCacheImages(this.checkerboardRasterCacheImages);
      builder.setCheckerboardOffscreenLayers(this.checkerboardOffscreenLayers);
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return false;
    }
  };
  (layer$.PerformanceOverlayLayer.new = function(opts) {
    let overlayRect = opts && 'overlayRect' in opts ? opts.overlayRect : null;
    let optionsMask = opts && 'optionsMask' in opts ? opts.optionsMask : null;
    let rasterizerThreshold = opts && 'rasterizerThreshold' in opts ? opts.rasterizerThreshold : null;
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : null;
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : null;
    this[optionsMask$] = optionsMask;
    this[rasterizerThreshold$] = rasterizerThreshold;
    this[checkerboardRasterCacheImages$] = checkerboardRasterCacheImages;
    this[checkerboardOffscreenLayers$] = checkerboardOffscreenLayers;
    this[_overlayRect] = overlayRect;
    layer$.PerformanceOverlayLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PerformanceOverlayLayer.prototype;
  dart.addTypeTests(layer$.PerformanceOverlayLayer);
  dart.addTypeCaches(layer$.PerformanceOverlayLayer);
  dart.setMethodSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getMethods(layer$.PerformanceOverlayLayer.__proto__),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getGetters(layer$.PerformanceOverlayLayer.__proto__),
    overlayRect: ui.Rect
  }));
  dart.setSetterSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getSetters(layer$.PerformanceOverlayLayer.__proto__),
    overlayRect: ui.Rect
  }));
  dart.setLibraryUri(layer$.PerformanceOverlayLayer, I[1]);
  dart.setFieldSignature(layer$.PerformanceOverlayLayer, () => ({
    __proto__: dart.getFields(layer$.PerformanceOverlayLayer.__proto__),
    [_overlayRect]: dart.fieldType(ui.Rect),
    optionsMask: dart.finalFieldType(core.int),
    rasterizerThreshold: dart.finalFieldType(core.int),
    checkerboardRasterCacheImages: dart.finalFieldType(core.bool),
    checkerboardOffscreenLayers: dart.finalFieldType(core.bool)
  }));
  var _firstChild = dart.privateName(layer$, "_firstChild");
  var _lastChild = dart.privateName(layer$, "_lastChild");
  var _debugUltimatePreviousSiblingOf = dart.privateName(layer$, "_debugUltimatePreviousSiblingOf");
  var _debugUltimateNextSiblingOf = dart.privateName(layer$, "_debugUltimateNextSiblingOf");
  layer$.ContainerLayer = class ContainerLayer extends layer$.Layer {
    get firstChild() {
      return this[_firstChild];
    }
    get lastChild() {
      return this[_lastChild];
    }
    get hasChildren() {
      return this[_firstChild] != null;
    }
    buildScene(builder) {
      this.updateSubtreeNeedsAddToScene();
      this.addToScene(builder);
      this[_needsAddToScene] = false;
      let scene = builder.build();
      return scene;
    }
    [_debugUltimatePreviousSiblingOf](child, opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 964, 12, "child.attached == attached");
      while (child.previousSibling != null) {
        if (!!dart.equals(child.previousSibling, child)) dart.assertFailed(null, I[0], 966, 14, "child.previousSibling != child");
        child = dart.nullCheck(child.previousSibling);
        if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 968, 14, "child.attached == attached");
      }
      return child[$_equals](equals);
    }
    [_debugUltimateNextSiblingOf](child, opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 974, 12, "child.attached == attached");
      while (child[_nextSibling] != null) {
        if (!!dart.equals(child[_nextSibling], child)) dart.assertFailed(null, I[0], 976, 14, "child._nextSibling != child");
        child = dart.nullCheck(child[_nextSibling]);
        if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 978, 14, "child.attached == attached");
      }
      return child[$_equals](equals);
    }
    dispose() {
      this.removeAllChildren();
      super.dispose();
    }
    updateSubtreeNeedsAddToScene() {
      super.updateSubtreeNeedsAddToScene();
      let child = this.firstChild;
      while (child != null) {
        child.updateSubtreeNeedsAddToScene();
        this[_needsAddToScene] = this[_needsAddToScene] || child[_needsAddToScene];
        child = child.nextSibling;
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      for (let child = this.lastChild; child != null; child = child.previousSibling) {
        let isAbsorbed = child.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
        if (isAbsorbed) return true;
        if (onlyFirst && result.entries[$isNotEmpty]) return isAbsorbed;
      }
      return false;
    }
    attach(owner) {
      core.Object.as(owner);
      super.attach(owner);
      let child = this.firstChild;
      while (child != null) {
        child.attach(owner);
        child = child.nextSibling;
      }
    }
    detach() {
      super.detach();
      let child = this.firstChild;
      while (child != null) {
        child.detach();
        child = child.nextSibling;
      }
    }
    append(child) {
      if (!!child[$_equals](this)) dart.assertFailed(null, I[0], 1037, 12, "child != this");
      if (!!child[$_equals](this.firstChild)) dart.assertFailed(null, I[0], 1038, 12, "child != firstChild");
      if (!!child[$_equals](this.lastChild)) dart.assertFailed(null, I[0], 1039, 12, "child != lastChild");
      if (!(child.parent == null)) dart.assertFailed(null, I[0], 1040, 12, "child.parent == null");
      if (!!child.attached) dart.assertFailed(null, I[0], 1041, 12, "!child.attached");
      if (!(child.nextSibling == null)) dart.assertFailed(null, I[0], 1042, 12, "child.nextSibling == null");
      if (!(child.previousSibling == null)) dart.assertFailed(null, I[0], 1043, 12, "child.previousSibling == null");
      if (!(child[_parentHandle].layer == null)) dart.assertFailed(null, I[0], 1044, 12, "child._parentHandle.layer == null");
      if (!dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = dart.nullCheck(node.parent);
        if (!!node[$_equals](child)) dart.assertFailed(null, I[0], 1048, 14, "node != child");
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1045, 12, "() {\n      Layer node = this;\n      while (node.parent != null) node = node.parent!;\n      assert(node != child); // indicates we are about to create a cycle\n      return true;\n    }()");
      this.adoptChild(child);
      child[_previousSibling] = this.lastChild;
      if (this.lastChild != null) dart.nullCheck(this.lastChild)[_nextSibling] = child;
      this[_lastChild] = child;
      this[_firstChild] == null ? this[_firstChild] = child : null;
      child[_parentHandle].layer = child;
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1057, 12, "child.attached == attached");
    }
    [_removeChild](child) {
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[0], 1062, 12, "child.parent == this");
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1063, 12, "child.attached == attached");
      if (!this[_debugUltimatePreviousSiblingOf](child, {equals: this.firstChild})) dart.assertFailed(null, I[0], 1064, 12, "_debugUltimatePreviousSiblingOf(child, equals: firstChild)");
      if (!this[_debugUltimateNextSiblingOf](child, {equals: this.lastChild})) dart.assertFailed(null, I[0], 1065, 12, "_debugUltimateNextSiblingOf(child, equals: lastChild)");
      if (!(child[_parentHandle].layer != null)) dart.assertFailed(null, I[0], 1066, 12, "child._parentHandle.layer != null");
      if (child[_previousSibling] == null) {
        if (!dart.equals(this[_firstChild], child)) dart.assertFailed(null, I[0], 1068, 14, "_firstChild == child");
        this[_firstChild] = child[_nextSibling];
      } else {
        dart.nullCheck(child[_previousSibling])[_nextSibling] = child.nextSibling;
      }
      if (child[_nextSibling] == null) {
        if (!dart.equals(this.lastChild, child)) dart.assertFailed(null, I[0], 1074, 14, "lastChild == child");
        this[_lastChild] = child.previousSibling;
      } else {
        dart.nullCheck(child.nextSibling)[_previousSibling] = child.previousSibling;
      }
      if (!(this.firstChild == null === (this.lastChild == null))) dart.assertFailed(null, I[0], 1079, 12, "(firstChild == null) == (lastChild == null)");
      if (!(this.firstChild == null || dart.nullCheck(this.firstChild).attached === this.attached)) dart.assertFailed(null, I[0], 1080, 12, "firstChild == null || firstChild!.attached == attached");
      if (!(this.lastChild == null || dart.nullCheck(this.lastChild).attached === this.attached)) dart.assertFailed(null, I[0], 1081, 12, "lastChild == null || lastChild!.attached == attached");
      if (!(this.firstChild == null || this[_debugUltimateNextSiblingOf](dart.nullCheck(this.firstChild), {equals: this.lastChild}))) dart.assertFailed(null, I[0], 1082, 12, "firstChild == null ||\n        _debugUltimateNextSiblingOf(firstChild!, equals: lastChild)");
      if (!(this.lastChild == null || this[_debugUltimatePreviousSiblingOf](dart.nullCheck(this.lastChild), {equals: this.firstChild}))) dart.assertFailed(null, I[0], 1084, 12, "lastChild == null ||\n        _debugUltimatePreviousSiblingOf(lastChild!, equals: firstChild)");
      child[_previousSibling] = null;
      child[_nextSibling] = null;
      this.dropChild(child);
      child[_parentHandle].layer = null;
      if (!!child.attached) dart.assertFailed(null, I[0], 1090, 12, "!child.attached");
    }
    removeAllChildren() {
      let child = this.firstChild;
      while (child != null) {
        let next = child.nextSibling;
        child[_previousSibling] = null;
        child[_nextSibling] = null;
        if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 1100, 14, "child.attached == attached");
        this.dropChild(child);
        if (!(child[_parentHandle] !== null)) dart.assertFailed(null, I[0], 1102, 14, "child._parentHandle != null");
        child[_parentHandle].layer = null;
        child = next;
      }
      this[_firstChild] = null;
      this[_lastChild] = null;
    }
    addToScene(builder) {
      this.addChildrenToScene(builder);
    }
    addChildrenToScene(builder) {
      let child = this.firstChild;
      while (child != null) {
        child[_addToSceneWithRetainedRendering](builder);
        child = child.nextSibling;
      }
    }
    applyTransform(child, transform) {
      if (!(child != null)) dart.assertFailed(null, I[0], 1164, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[0], 1165, 12, "transform != null");
    }
    depthFirstIterateChildren() {
      if (this.firstChild == null) return T$.JSArrayOfLayer().of([]);
      let children = T$.JSArrayOfLayer().of([]);
      let child = this.firstChild;
      while (child != null) {
        children[$add](child);
        if (layer$.ContainerLayer.is(child)) {
          children[$addAll](child.depthFirstIterateChildren());
        }
        child = child.nextSibling;
      }
      return children;
    }
    debugDescribeChildren() {
      let children = T$.JSArrayOfDiagnosticsNode().of([]);
      if (this.firstChild == null) return children;
      let child = this.firstChild;
      let count = 1;
      while (true) {
        children[$add](dart.nullCheck(child).toDiagnosticsNode({name: "child " + dart.str(count)}));
        if (dart.equals(child, this.lastChild)) break;
        count = count + 1;
        child = child.nextSibling;
      }
      return children;
    }
    static ['_#new#tearOff']() {
      return new layer$.ContainerLayer.new();
    }
  };
  (layer$.ContainerLayer.new = function() {
    this[_firstChild] = null;
    this[_lastChild] = null;
    layer$.ContainerLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ContainerLayer.prototype;
  dart.addTypeTests(layer$.ContainerLayer);
  dart.addTypeCaches(layer$.ContainerLayer);
  dart.setMethodSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getMethods(layer$.ContainerLayer.__proto__),
    buildScene: dart.fnType(ui.Scene, [ui.SceneBuilder]),
    [_debugUltimatePreviousSiblingOf]: dart.fnType(core.bool, [layer$.Layer], {equals: dart.nullable(layer$.Layer)}, {}),
    [_debugUltimateNextSiblingOf]: dart.fnType(core.bool, [layer$.Layer], {equals: dart.nullable(layer$.Layer)}, {}),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    append: dart.fnType(dart.void, [layer$.Layer]),
    [_removeChild]: dart.fnType(dart.void, [layer$.Layer]),
    removeAllChildren: dart.fnType(dart.void, []),
    addToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    addChildrenToScene: dart.fnType(dart.void, [ui.SceneBuilder]),
    applyTransform: dart.fnType(dart.void, [dart.nullable(layer$.Layer), vector_math_64.Matrix4]),
    depthFirstIterateChildren: dart.fnType(core.List$(layer$.Layer), [])
  }));
  dart.setGetterSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getGetters(layer$.ContainerLayer.__proto__),
    firstChild: dart.nullable(layer$.Layer),
    lastChild: dart.nullable(layer$.Layer),
    hasChildren: core.bool
  }));
  dart.setLibraryUri(layer$.ContainerLayer, I[1]);
  dart.setFieldSignature(layer$.ContainerLayer, () => ({
    __proto__: dart.getFields(layer$.ContainerLayer.__proto__),
    [_firstChild]: dart.fieldType(dart.nullable(layer$.Layer)),
    [_lastChild]: dart.fieldType(dart.nullable(layer$.Layer))
  }));
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var _offset = dart.privateName(layer$, "_offset");
  layer$.OffsetLayer = class OffsetLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
      return new layer$.OffsetLayer.new({offset: offset});
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!value._equals(this[_offset])) {
        this.markNeedsAddToScene();
      }
      this[_offset] = value;
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return super.findAnnotations(S, result, localPosition['-'](this.offset), {onlyFirst: onlyFirst});
    }
    applyTransform(child, transform) {
      if (!(child != null)) dart.assertFailed(null, I[0], 1242, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[0], 1243, 12, "transform != null");
      transform.multiply(vector_math_64.Matrix4.translationValues(this.offset.dx, this.offset.dy, 0.0));
    }
    addToScene(builder) {
      this.engineLayer = builder.pushOffset(this.offset.dx, this.offset.dy, {oldLayer: T$.OffsetEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("offset", this.offset));
    }
    toImage(bounds, opts) {
      let pixelRatio = opts && 'pixelRatio' in opts ? opts.pixelRatio : 1;
      return async.async(ui.Image, (function* toImage() {
        if (!(bounds !== null)) dart.assertFailed(null, I[0], 1286, 12, "bounds != null");
        if (!(pixelRatio !== null)) dart.assertFailed(null, I[0], 1287, 12, "pixelRatio != null");
        let builder = ui.SceneBuilder.new();
        let transform = vector_math_64.Matrix4.translationValues((-bounds.left - this.offset.dx) * pixelRatio, (-bounds.top - this.offset.dy) * pixelRatio, 0.0);
        transform.scale(pixelRatio, pixelRatio);
        builder.pushTransform(transform.storage);
        let scene = this.buildScene(builder);
        try {
          return yield scene.toImage((pixelRatio * bounds.width)[$ceil](), (pixelRatio * bounds.height)[$ceil]());
        } finally {
          scene.dispose();
        }
      }).bind(this));
    }
  };
  (layer$.OffsetLayer.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    this[_offset] = offset;
    layer$.OffsetLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.OffsetLayer.prototype;
  dart.addTypeTests(layer$.OffsetLayer);
  dart.addTypeCaches(layer$.OffsetLayer);
  dart.setMethodSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getMethods(layer$.OffsetLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    toImage: dart.fnType(async.Future$(ui.Image), [ui.Rect], {pixelRatio: core.double}, {})
  }));
  dart.setGetterSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getGetters(layer$.OffsetLayer.__proto__),
    offset: ui.Offset
  }));
  dart.setSetterSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getSetters(layer$.OffsetLayer.__proto__),
    offset: ui.Offset
  }));
  dart.setLibraryUri(layer$.OffsetLayer, I[1]);
  dart.setFieldSignature(layer$.OffsetLayer, () => ({
    __proto__: dart.getFields(layer$.OffsetLayer.__proto__),
    [_offset]: dart.fieldType(ui.Offset)
  }));
  var _clipRect = dart.privateName(layer$, "_clipRect");
  var _clipBehavior = dart.privateName(layer$, "_clipBehavior");
  layer$.ClipRectLayer = class ClipRectLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let clipRect = opts && 'clipRect' in opts ? opts.clipRect : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
      return new layer$.ClipRectLayer.new({clipRect: clipRect, clipBehavior: clipBehavior});
    }
    get clipRect() {
      return this[_clipRect];
    }
    set clipRect(value) {
      if (!dart.equals(value, this[_clipRect])) {
        this[_clipRect] = value;
        this.markNeedsAddToScene();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1354, 12, "value != null");
      if (!(value !== ui.Clip.none)) dart.assertFailed(null, I[0], 1355, 12, "value != Clip.none");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (!dart.nullCheck(this.clipRect).contains(localPosition)) return false;
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.clipRect != null)) dart.assertFailed(null, I[0], 1373, 12, "clipRect != null");
      if (!(this.clipBehavior !== null)) dart.assertFailed(null, I[0], 1374, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.fn(() => {
        enabled = !debug$0.debugDisableClipLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1376, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushClipRect(dart.nullCheck(this.clipRect), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipRectEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfRect()).new("clipRect", this.clipRect));
      properties.add(new (T$.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipRectLayer.new = function(opts) {
    let clipRect = opts && 'clipRect' in opts ? opts.clipRect : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
    this[_clipRect] = clipRect;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 1328, 16, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[0], 1329, 16, "clipBehavior != Clip.none");
    layer$.ClipRectLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipRectLayer.prototype;
  dart.addTypeTests(layer$.ClipRectLayer);
  dart.addTypeCaches(layer$.ClipRectLayer);
  dart.setMethodSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipRectLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipRectLayer.__proto__),
    clipRect: dart.nullable(ui.Rect),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipRectLayer.__proto__),
    clipRect: dart.nullable(ui.Rect),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipRectLayer, I[1]);
  dart.setFieldSignature(layer$.ClipRectLayer, () => ({
    __proto__: dart.getFields(layer$.ClipRectLayer.__proto__),
    [_clipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _clipRRect = dart.privateName(layer$, "_clipRRect");
  layer$.ClipRRectLayer = class ClipRRectLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let clipRRect = opts && 'clipRRect' in opts ? opts.clipRRect : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      return new layer$.ClipRRectLayer.new({clipRRect: clipRRect, clipBehavior: clipBehavior});
    }
    get clipRRect() {
      return this[_clipRRect];
    }
    set clipRRect(value) {
      if (!dart.equals(value, this[_clipRRect])) {
        this[_clipRRect] = value;
        this.markNeedsAddToScene();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1438, 12, "value != null");
      if (!(value !== ui.Clip.none)) dart.assertFailed(null, I[0], 1439, 12, "value != Clip.none");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (!dart.nullCheck(this.clipRRect).contains(localPosition)) return false;
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.clipRRect != null)) dart.assertFailed(null, I[0], 1457, 12, "clipRRect != null");
      if (!(this.clipBehavior !== null)) dart.assertFailed(null, I[0], 1458, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.fn(() => {
        enabled = !debug$0.debugDisableClipLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1460, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushClipRRect(dart.nullCheck(this.clipRRect), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipRRectEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfRRect()).new("clipRRect", this.clipRRect));
      properties.add(new (T$.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipRRectLayer.new = function(opts) {
    let clipRRect = opts && 'clipRRect' in opts ? opts.clipRRect : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    this[_clipRRect] = clipRRect;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 1416, 16, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[0], 1417, 16, "clipBehavior != Clip.none");
    layer$.ClipRRectLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipRRectLayer.prototype;
  dart.addTypeTests(layer$.ClipRRectLayer);
  dart.addTypeCaches(layer$.ClipRRectLayer);
  dart.setMethodSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipRRectLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipRRectLayer.__proto__),
    clipRRect: dart.nullable(ui.RRect),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipRRectLayer.__proto__),
    clipRRect: dart.nullable(ui.RRect),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipRRectLayer, I[1]);
  dart.setFieldSignature(layer$.ClipRRectLayer, () => ({
    __proto__: dart.getFields(layer$.ClipRRectLayer.__proto__),
    [_clipRRect]: dart.fieldType(dart.nullable(ui.RRect)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _clipPath = dart.privateName(layer$, "_clipPath");
  layer$.ClipPathLayer = class ClipPathLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      return new layer$.ClipPathLayer.new({clipPath: clipPath, clipBehavior: clipBehavior});
    }
    get clipPath() {
      return this[_clipPath];
    }
    set clipPath(value) {
      if (!dart.equals(value, this[_clipPath])) {
        this[_clipPath] = value;
        this.markNeedsAddToScene();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 1522, 12, "value != null");
      if (!(value !== ui.Clip.none)) dart.assertFailed(null, I[0], 1523, 12, "value != Clip.none");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (!dart.nullCheck(this.clipPath).contains(localPosition)) return false;
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.clipPath != null)) dart.assertFailed(null, I[0], 1541, 12, "clipPath != null");
      if (!(this.clipBehavior !== null)) dart.assertFailed(null, I[0], 1542, 12, "clipBehavior != null");
      let enabled = true;
      if (!dart.fn(() => {
        enabled = !debug$0.debugDisableClipLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1544, 12, "() {\n      enabled = !debugDisableClipLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushClipPath(dart.nullCheck(this.clipPath), {clipBehavior: this.clipBehavior, oldLayer: T$.ClipPathEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfClip()).new("clipBehavior", this.clipBehavior));
    }
  };
  (layer$.ClipPathLayer.new = function(opts) {
    let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
    this[_clipPath] = clipPath;
    this[_clipBehavior] = clipBehavior;
    if (!(clipBehavior !== null)) dart.assertFailed(null, I[0], 1500, 16, "clipBehavior != null");
    if (!(clipBehavior !== ui.Clip.none)) dart.assertFailed(null, I[0], 1501, 16, "clipBehavior != Clip.none");
    layer$.ClipPathLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ClipPathLayer.prototype;
  dart.addTypeTests(layer$.ClipPathLayer);
  dart.addTypeCaches(layer$.ClipPathLayer);
  dart.setMethodSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getMethods(layer$.ClipPathLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getGetters(layer$.ClipPathLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip
  }));
  dart.setSetterSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getSetters(layer$.ClipPathLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip
  }));
  dart.setLibraryUri(layer$.ClipPathLayer, I[1]);
  dart.setFieldSignature(layer$.ClipPathLayer, () => ({
    __proto__: dart.getFields(layer$.ClipPathLayer.__proto__),
    [_clipPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_clipBehavior]: dart.fieldType(ui.Clip)
  }));
  var _colorFilter = dart.privateName(layer$, "_colorFilter");
  layer$.ColorFilterLayer = class ColorFilterLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
      return new layer$.ColorFilterLayer.new({colorFilter: colorFilter});
    }
    get colorFilter() {
      return this[_colorFilter];
    }
    set colorFilter(value) {
      if (!(value != null)) dart.assertFailed(null, I[0], 1585, 12, "value != null");
      if (!dart.equals(value, this[_colorFilter])) {
        this[_colorFilter] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.colorFilter != null)) dart.assertFailed(null, I[0], 1594, 12, "colorFilter != null");
      this.engineLayer = builder.pushColorFilter(dart.nullCheck(this.colorFilter), {oldLayer: T$.ColorFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfColorFilter()).new("colorFilter", this.colorFilter));
    }
  };
  (layer$.ColorFilterLayer.new = function(opts) {
    let colorFilter = opts && 'colorFilter' in opts ? opts.colorFilter : null;
    this[_colorFilter] = colorFilter;
    layer$.ColorFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ColorFilterLayer.prototype;
  dart.addTypeTests(layer$.ColorFilterLayer);
  dart.addTypeCaches(layer$.ColorFilterLayer);
  dart.setGetterSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.ColorFilterLayer.__proto__),
    colorFilter: dart.nullable(ui.ColorFilter)
  }));
  dart.setSetterSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.ColorFilterLayer.__proto__),
    colorFilter: dart.nullable(ui.ColorFilter)
  }));
  dart.setLibraryUri(layer$.ColorFilterLayer, I[1]);
  dart.setFieldSignature(layer$.ColorFilterLayer, () => ({
    __proto__: dart.getFields(layer$.ColorFilterLayer.__proto__),
    [_colorFilter]: dart.fieldType(dart.nullable(ui.ColorFilter))
  }));
  var _imageFilter = dart.privateName(layer$, "_imageFilter");
  layer$.ImageFilterLayer = class ImageFilterLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let imageFilter = opts && 'imageFilter' in opts ? opts.imageFilter : null;
      return new layer$.ImageFilterLayer.new({imageFilter: imageFilter});
    }
    get imageFilter() {
      return this[_imageFilter];
    }
    set imageFilter(value) {
      if (!(value != null)) dart.assertFailed(null, I[0], 1628, 12, "value != null");
      if (!dart.equals(value, this[_imageFilter])) {
        this[_imageFilter] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.imageFilter != null)) dart.assertFailed(null, I[0], 1637, 12, "imageFilter != null");
      this.engineLayer = builder.pushImageFilter(dart.nullCheck(this.imageFilter), {oldLayer: T$.ImageFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfImageFilter()).new("imageFilter", this.imageFilter));
    }
  };
  (layer$.ImageFilterLayer.new = function(opts) {
    let imageFilter = opts && 'imageFilter' in opts ? opts.imageFilter : null;
    this[_imageFilter] = imageFilter;
    layer$.ImageFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ImageFilterLayer.prototype;
  dart.addTypeTests(layer$.ImageFilterLayer);
  dart.addTypeCaches(layer$.ImageFilterLayer);
  dart.setGetterSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.ImageFilterLayer.__proto__),
    imageFilter: dart.nullable(ui.ImageFilter)
  }));
  dart.setSetterSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.ImageFilterLayer.__proto__),
    imageFilter: dart.nullable(ui.ImageFilter)
  }));
  dart.setLibraryUri(layer$.ImageFilterLayer, I[1]);
  dart.setFieldSignature(layer$.ImageFilterLayer, () => ({
    __proto__: dart.getFields(layer$.ImageFilterLayer.__proto__),
    [_imageFilter]: dart.fieldType(dart.nullable(ui.ImageFilter))
  }));
  var _lastEffectiveTransform = dart.privateName(layer$, "_lastEffectiveTransform");
  var _invertedTransform = dart.privateName(layer$, "_invertedTransform");
  var _inverseDirty = dart.privateName(layer$, "_inverseDirty");
  var _transform = dart.privateName(layer$, "_transform");
  var _transformOffset = dart.privateName(layer$, "_transformOffset");
  layer$.TransformLayer = class TransformLayer extends layer$.OffsetLayer {
    static ['_#new#tearOff'](opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
      return new layer$.TransformLayer.new({transform: transform, offset: offset});
    }
    get transform() {
      return this[_transform];
    }
    set transform(value) {
      if (!(value != null)) dart.assertFailed(null, I[0], 1680, 12, "value != null");
      if (!dart.nullCheck(value).storage[$every](dart.fn(component => component[$isFinite], T$.doubleTobool()))) dart.assertFailed(null, I[0], 1681, 12, "value!.storage.every((double component) => component.isFinite)");
      if (dart.equals(value, this[_transform])) return;
      this[_transform] = value;
      this[_inverseDirty] = true;
      this.markNeedsAddToScene();
    }
    addToScene(builder) {
      let t8;
      if (!(this.transform != null)) dart.assertFailed(null, I[0], 1694, 12, "transform != null");
      this[_lastEffectiveTransform] = this.transform;
      if (!this.offset._equals(ui.Offset.zero)) {
        this[_lastEffectiveTransform] = (t8 = vector_math_64.Matrix4.translationValues(this.offset.dx, this.offset.dy, 0.0), (() => {
          t8.multiply(dart.nullCheck(this[_lastEffectiveTransform]));
          return t8;
        })());
      }
      this.engineLayer = builder.pushTransform(dart.nullCheck(this[_lastEffectiveTransform]).storage, {oldLayer: T$.TransformEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    [_transformOffset](localPosition) {
      if (this[_inverseDirty]) {
        this[_invertedTransform] = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(dart.nullCheck(this.transform)));
        this[_inverseDirty] = false;
      }
      if (this[_invertedTransform] == null) return null;
      return matrix_utils.MatrixUtils.transformPoint(dart.nullCheck(this[_invertedTransform]), localPosition);
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      let transformedOffset = this[_transformOffset](localPosition);
      if (transformedOffset == null) return false;
      return super.findAnnotations(S, result, transformedOffset, {onlyFirst: onlyFirst});
    }
    applyTransform(child, transform) {
      if (!(child != null)) dart.assertFailed(null, I[0], 1733, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[0], 1734, 12, "transform != null");
      if (!(this[_lastEffectiveTransform] != null || this.transform != null)) dart.assertFailed(null, I[0], 1735, 12, "_lastEffectiveTransform != null || this.transform != null");
      if (this[_lastEffectiveTransform] == null) {
        transform.multiply(dart.nullCheck(this.transform));
      } else {
        transform.multiply(dart.nullCheck(this[_lastEffectiveTransform]));
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new matrix_utils.TransformProperty.new("transform", this.transform));
    }
  };
  (layer$.TransformLayer.new = function(opts) {
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    this[_lastEffectiveTransform] = null;
    this[_invertedTransform] = null;
    this[_inverseDirty] = true;
    this[_transform] = transform;
    layer$.TransformLayer.__proto__.new.call(this, {offset: offset});
    ;
  }).prototype = layer$.TransformLayer.prototype;
  dart.addTypeTests(layer$.TransformLayer);
  dart.addTypeCaches(layer$.TransformLayer);
  dart.setMethodSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getMethods(layer$.TransformLayer.__proto__),
    [_transformOffset]: dart.fnType(dart.nullable(ui.Offset), [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getGetters(layer$.TransformLayer.__proto__),
    transform: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setSetterSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getSetters(layer$.TransformLayer.__proto__),
    transform: dart.nullable(vector_math_64.Matrix4)
  }));
  dart.setLibraryUri(layer$.TransformLayer, I[1]);
  dart.setFieldSignature(layer$.TransformLayer, () => ({
    __proto__: dart.getFields(layer$.TransformLayer.__proto__),
    [_transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_lastEffectiveTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_invertedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_inverseDirty]: dart.fieldType(core.bool)
  }));
  var _alpha = dart.privateName(layer$, "_alpha");
  layer$.OpacityLayer = class OpacityLayer extends layer$.OffsetLayer {
    static ['_#new#tearOff'](opts) {
      let alpha = opts && 'alpha' in opts ? opts.alpha : null;
      let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
      return new layer$.OpacityLayer.new({alpha: alpha, offset: offset});
    }
    get alpha() {
      return this[_alpha];
    }
    set alpha(value) {
      if (!(value != null)) dart.assertFailed(null, I[0], 1779, 12, "value != null");
      if (value != this[_alpha]) {
        if (value === 255 || this[_alpha] === 255) {
          this.engineLayer = null;
        }
        this[_alpha] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.alpha != null)) dart.assertFailed(null, I[0], 1791, 12, "alpha != null");
      let enabled = this.firstChild != null;
      if (!enabled) {
        this.engineLayer = null;
        return;
      }
      if (!dart.fn(() => {
        enabled = enabled && !debug$0.debugDisableOpacityLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 1802, 12, "() {\n      enabled = enabled && !debugDisableOpacityLayers;\n      return true;\n    }()");
      let realizedAlpha = dart.nullCheck(this.alpha);
      if (enabled && realizedAlpha < 255) {
        if (!T$.OpacityEngineLayerN().is(this[_engineLayer])) dart.assertFailed(null, I[0], 1811, 14, "_engineLayer is ui.OpacityEngineLayer?");
        this.engineLayer = builder.pushOpacity(realizedAlpha, {offset: this.offset, oldLayer: T$.OpacityEngineLayerN().as(this[_engineLayer])});
      } else {
        if (!T$.OffsetEngineLayerN().is(this[_engineLayer])) dart.assertFailed(null, I[0], 1818, 14, "_engineLayer is ui.OffsetEngineLayer?");
        this.engineLayer = builder.pushOffset(this.offset.dx, this.offset.dy, {oldLayer: T$.OffsetEngineLayerN().as(this[_engineLayer])});
      }
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("alpha", this.alpha));
    }
  };
  (layer$.OpacityLayer.new = function(opts) {
    let alpha = opts && 'alpha' in opts ? opts.alpha : null;
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    this[_alpha] = alpha;
    layer$.OpacityLayer.__proto__.new.call(this, {offset: offset});
    ;
  }).prototype = layer$.OpacityLayer.prototype;
  dart.addTypeTests(layer$.OpacityLayer);
  dart.addTypeCaches(layer$.OpacityLayer);
  dart.setGetterSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getGetters(layer$.OpacityLayer.__proto__),
    alpha: dart.nullable(core.int)
  }));
  dart.setSetterSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getSetters(layer$.OpacityLayer.__proto__),
    alpha: dart.nullable(core.int)
  }));
  dart.setLibraryUri(layer$.OpacityLayer, I[1]);
  dart.setFieldSignature(layer$.OpacityLayer, () => ({
    __proto__: dart.getFields(layer$.OpacityLayer.__proto__),
    [_alpha]: dart.fieldType(dart.nullable(core.int))
  }));
  var _shader = dart.privateName(layer$, "_shader");
  var _maskRect = dart.privateName(layer$, "_maskRect");
  var _blendMode = dart.privateName(layer$, "_blendMode");
  layer$.ShaderMaskLayer = class ShaderMaskLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let shader = opts && 'shader' in opts ? opts.shader : null;
      let maskRect = opts && 'maskRect' in opts ? opts.maskRect : null;
      let blendMode = opts && 'blendMode' in opts ? opts.blendMode : null;
      return new layer$.ShaderMaskLayer.new({shader: shader, maskRect: maskRect, blendMode: blendMode});
    }
    get shader() {
      return this[_shader];
    }
    set shader(value) {
      if (!dart.equals(value, this[_shader])) {
        this[_shader] = value;
        this.markNeedsAddToScene();
      }
    }
    get maskRect() {
      return this[_maskRect];
    }
    set maskRect(value) {
      if (!dart.equals(value, this[_maskRect])) {
        this[_maskRect] = value;
        this.markNeedsAddToScene();
      }
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(value) {
      if (value != this[_blendMode]) {
        this[_blendMode] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.shader != null)) dart.assertFailed(null, I[0], 1907, 12, "shader != null");
      if (!(this.maskRect != null)) dart.assertFailed(null, I[0], 1908, 12, "maskRect != null");
      if (!(this.blendMode != null)) dart.assertFailed(null, I[0], 1909, 12, "blendMode != null");
      this.engineLayer = builder.pushShaderMask(dart.nullCheck(this.shader), dart.nullCheck(this.maskRect), dart.nullCheck(this.blendMode), {oldLayer: T$.ShaderMaskEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfShader()).new("shader", this.shader));
      properties.add(new (T$.DiagnosticsPropertyOfRect()).new("maskRect", this.maskRect));
      properties.add(new (T$.DiagnosticsPropertyOfBlendMode()).new("blendMode", this.blendMode));
    }
  };
  (layer$.ShaderMaskLayer.new = function(opts) {
    let shader = opts && 'shader' in opts ? opts.shader : null;
    let maskRect = opts && 'maskRect' in opts ? opts.maskRect : null;
    let blendMode = opts && 'blendMode' in opts ? opts.blendMode : null;
    this[_shader] = shader;
    this[_maskRect] = maskRect;
    this[_blendMode] = blendMode;
    layer$.ShaderMaskLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.ShaderMaskLayer.prototype;
  dart.addTypeTests(layer$.ShaderMaskLayer);
  dart.addTypeCaches(layer$.ShaderMaskLayer);
  dart.setGetterSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getGetters(layer$.ShaderMaskLayer.__proto__),
    shader: dart.nullable(ui.Shader),
    maskRect: dart.nullable(ui.Rect),
    blendMode: dart.nullable(ui.BlendMode)
  }));
  dart.setSetterSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getSetters(layer$.ShaderMaskLayer.__proto__),
    shader: dart.nullable(ui.Shader),
    maskRect: dart.nullable(ui.Rect),
    blendMode: dart.nullable(ui.BlendMode)
  }));
  dart.setLibraryUri(layer$.ShaderMaskLayer, I[1]);
  dart.setFieldSignature(layer$.ShaderMaskLayer, () => ({
    __proto__: dart.getFields(layer$.ShaderMaskLayer.__proto__),
    [_shader]: dart.fieldType(dart.nullable(ui.Shader)),
    [_maskRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_blendMode]: dart.fieldType(dart.nullable(ui.BlendMode))
  }));
  var _filter = dart.privateName(layer$, "_filter");
  layer$.BackdropFilterLayer = class BackdropFilterLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let filter = opts && 'filter' in opts ? opts.filter : null;
      let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C[4] || CT.C4;
      return new layer$.BackdropFilterLayer.new({filter: filter, blendMode: blendMode});
    }
    get filter() {
      return this[_filter];
    }
    set filter(value) {
      if (!dart.equals(value, this[_filter])) {
        this[_filter] = value;
        this.markNeedsAddToScene();
      }
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(value) {
      if (value !== this[_blendMode]) {
        this[_blendMode] = value;
        this.markNeedsAddToScene();
      }
    }
    addToScene(builder) {
      if (!(this.filter != null)) dart.assertFailed(null, I[0], 1975, 12, "filter != null");
      this.engineLayer = builder.pushBackdropFilter(dart.nullCheck(this.filter), {blendMode: this.blendMode, oldLayer: T$.BackdropFilterEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      builder.pop();
    }
  };
  (layer$.BackdropFilterLayer.new = function(opts) {
    let filter = opts && 'filter' in opts ? opts.filter : null;
    let blendMode = opts && 'blendMode' in opts ? opts.blendMode : C[4] || CT.C4;
    this[_filter] = filter;
    this[_blendMode] = blendMode;
    layer$.BackdropFilterLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.BackdropFilterLayer.prototype;
  dart.addTypeTests(layer$.BackdropFilterLayer);
  dart.addTypeCaches(layer$.BackdropFilterLayer);
  dart.setGetterSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getGetters(layer$.BackdropFilterLayer.__proto__),
    filter: dart.nullable(ui.ImageFilter),
    blendMode: ui.BlendMode
  }));
  dart.setSetterSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getSetters(layer$.BackdropFilterLayer.__proto__),
    filter: dart.nullable(ui.ImageFilter),
    blendMode: ui.BlendMode
  }));
  dart.setLibraryUri(layer$.BackdropFilterLayer, I[1]);
  dart.setFieldSignature(layer$.BackdropFilterLayer, () => ({
    __proto__: dart.getFields(layer$.BackdropFilterLayer.__proto__),
    [_filter]: dart.fieldType(dart.nullable(ui.ImageFilter)),
    [_blendMode]: dart.fieldType(ui.BlendMode)
  }));
  var _elevation = dart.privateName(layer$, "_elevation");
  var _color = dart.privateName(layer$, "_color");
  var _shadowColor = dart.privateName(layer$, "_shadowColor");
  layer$.PhysicalModelLayer = class PhysicalModelLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
      let elevation = opts && 'elevation' in opts ? opts.elevation : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
      return new layer$.PhysicalModelLayer.new({clipPath: clipPath, clipBehavior: clipBehavior, elevation: elevation, color: color, shadowColor: shadowColor});
    }
    get clipPath() {
      return this[_clipPath];
    }
    set clipPath(value) {
      if (!dart.equals(value, this[_clipPath])) {
        this[_clipPath] = value;
        this.markNeedsAddToScene();
      }
    }
    get clipBehavior() {
      return this[_clipBehavior];
    }
    set clipBehavior(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2030, 12, "value != null");
      if (value !== this[_clipBehavior]) {
        this[_clipBehavior] = value;
        this.markNeedsAddToScene();
      }
    }
    get elevation() {
      return this[_elevation];
    }
    set elevation(value) {
      if (value != this[_elevation]) {
        this[_elevation] = value;
        this.markNeedsAddToScene();
      }
    }
    get color() {
      return this[_color];
    }
    set color(value) {
      if (!dart.equals(value, this[_color])) {
        this[_color] = value;
        this.markNeedsAddToScene();
      }
    }
    get shadowColor() {
      return this[_shadowColor];
    }
    set shadowColor(value) {
      if (!dart.equals(value, this[_shadowColor])) {
        this[_shadowColor] = value;
        this.markNeedsAddToScene();
      }
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (!dart.nullCheck(this.clipPath).contains(localPosition)) return false;
      return super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.clipPath != null)) dart.assertFailed(null, I[0], 2090, 12, "clipPath != null");
      if (!(this.clipBehavior !== null)) dart.assertFailed(null, I[0], 2091, 12, "clipBehavior != null");
      if (!(this.elevation != null)) dart.assertFailed(null, I[0], 2092, 12, "elevation != null");
      if (!(this.color != null)) dart.assertFailed(null, I[0], 2093, 12, "color != null");
      if (!(this.shadowColor != null)) dart.assertFailed(null, I[0], 2094, 12, "shadowColor != null");
      let enabled = true;
      if (!dart.fn(() => {
        enabled = !debug$0.debugDisablePhysicalShapeLayers;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[0], 2097, 12, "() {\n      enabled = !debugDisablePhysicalShapeLayers;\n      return true;\n    }()");
      if (enabled) {
        this.engineLayer = builder.pushPhysicalShape({path: dart.nullCheck(this.clipPath), elevation: dart.nullCheck(this.elevation), color: dart.nullCheck(this.color), shadowColor: this.shadowColor, clipBehavior: this.clipBehavior, oldLayer: T$.PhysicalShapeEngineLayerN().as(this[_engineLayer])});
      } else {
        this.engineLayer = null;
      }
      this.addChildrenToScene(builder);
      if (enabled) builder.pop();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation));
      properties.add(new colors.ColorProperty.new("color", this.color));
    }
  };
  (layer$.PhysicalModelLayer.new = function(opts) {
    let clipPath = opts && 'clipPath' in opts ? opts.clipPath : null;
    let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[5] || CT.C5;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shadowColor = opts && 'shadowColor' in opts ? opts.shadowColor : null;
    this[_clipPath] = clipPath;
    this[_clipBehavior] = clipBehavior;
    this[_elevation] = elevation;
    this[_color] = color;
    this[_shadowColor] = shadowColor;
    layer$.PhysicalModelLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.PhysicalModelLayer.prototype;
  dart.addTypeTests(layer$.PhysicalModelLayer);
  dart.addTypeCaches(layer$.PhysicalModelLayer);
  dart.setMethodSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getMethods(layer$.PhysicalModelLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getGetters(layer$.PhysicalModelLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip,
    elevation: dart.nullable(core.double),
    color: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color)
  }));
  dart.setSetterSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getSetters(layer$.PhysicalModelLayer.__proto__),
    clipPath: dart.nullable(ui.Path),
    clipBehavior: ui.Clip,
    elevation: dart.nullable(core.double),
    color: dart.nullable(ui.Color),
    shadowColor: dart.nullable(ui.Color)
  }));
  dart.setLibraryUri(layer$.PhysicalModelLayer, I[1]);
  dart.setFieldSignature(layer$.PhysicalModelLayer, () => ({
    __proto__: dart.getFields(layer$.PhysicalModelLayer.__proto__),
    [_clipPath]: dart.fieldType(dart.nullable(ui.Path)),
    [_clipBehavior]: dart.fieldType(ui.Clip),
    [_elevation]: dart.fieldType(dart.nullable(core.double)),
    [_color]: dart.fieldType(dart.nullable(ui.Color)),
    [_shadowColor]: dart.fieldType(dart.nullable(ui.Color))
  }));
  var leaderSize = dart.privateName(layer$, "LayerLink.leaderSize");
  var _leader = dart.privateName(layer$, "_leader");
  var _connectedFollowers = dart.privateName(layer$, "_connectedFollowers");
  var _registerFollower = dart.privateName(layer$, "_registerFollower");
  layer$.LayerLink = class LayerLink extends core.Object {
    get leaderSize() {
      return this[leaderSize];
    }
    set leaderSize(value) {
      this[leaderSize] = value;
    }
    get leaderConnected() {
      return this[_leader] != null;
    }
    [_registerFollower]() {
      if (!(this[_connectedFollowers] >= 0)) dart.assertFailed(null, I[0], 2153, 12, "_connectedFollowers >= 0");
      this[_connectedFollowers] = this[_connectedFollowers] + 1;
      return new layer$._LayerLinkHandle.new(this);
    }
    get debugLeader() {
      let result = null;
      if (true) {
        result = this[_leader];
      }
      return result;
    }
    toString() {
      return diagnostics.describeIdentity(this) + "(" + (this[_leader] != null ? "<linked>" : "<dangling>") + ")";
    }
    static ['_#new#tearOff']() {
      return new layer$.LayerLink.new();
    }
  };
  (layer$.LayerLink.new = function() {
    this[_leader] = null;
    this[_connectedFollowers] = 0;
    this[leaderSize] = null;
    ;
  }).prototype = layer$.LayerLink.prototype;
  dart.addTypeTests(layer$.LayerLink);
  dart.addTypeCaches(layer$.LayerLink);
  dart.setMethodSignature(layer$.LayerLink, () => ({
    __proto__: dart.getMethods(layer$.LayerLink.__proto__),
    [_registerFollower]: dart.fnType(layer$._LayerLinkHandle, [])
  }));
  dart.setGetterSignature(layer$.LayerLink, () => ({
    __proto__: dart.getGetters(layer$.LayerLink.__proto__),
    leaderConnected: core.bool,
    debugLeader: dart.nullable(layer$.LeaderLayer)
  }));
  dart.setLibraryUri(layer$.LayerLink, I[1]);
  dart.setFieldSignature(layer$.LayerLink, () => ({
    __proto__: dart.getFields(layer$.LayerLink.__proto__),
    [_leader]: dart.fieldType(dart.nullable(layer$.LeaderLayer)),
    [_connectedFollowers]: dart.fieldType(core.int),
    leaderSize: dart.fieldType(dart.nullable(ui.Size))
  }));
  dart.defineExtensionMethods(layer$.LayerLink, ['toString']);
  var _link$ = dart.privateName(layer$, "_link");
  layer$._LayerLinkHandle = class _LayerLinkHandle extends core.Object {
    static ['_#new#tearOff'](_link) {
      return new layer$._LayerLinkHandle.new(_link);
    }
    get leader() {
      return dart.nullCheck(this[_link$])[_leader];
    }
    dispose() {
      let t8;
      if (!(dart.nullCheck(this[_link$])[_connectedFollowers] > 0)) dart.assertFailed(null, I[0], 2200, 12, "_link!._connectedFollowers > 0");
      t8 = dart.nullCheck(this[_link$]);
      t8[_connectedFollowers] = t8[_connectedFollowers] - 1;
      this[_link$] = null;
    }
  };
  (layer$._LayerLinkHandle.new = function(_link) {
    this[_link$] = _link;
    ;
  }).prototype = layer$._LayerLinkHandle.prototype;
  dart.addTypeTests(layer$._LayerLinkHandle);
  dart.addTypeCaches(layer$._LayerLinkHandle);
  dart.setMethodSignature(layer$._LayerLinkHandle, () => ({
    __proto__: dart.getMethods(layer$._LayerLinkHandle.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(layer$._LayerLinkHandle, () => ({
    __proto__: dart.getGetters(layer$._LayerLinkHandle.__proto__),
    leader: dart.nullable(layer$.LeaderLayer)
  }));
  dart.setLibraryUri(layer$._LayerLinkHandle, I[1]);
  dart.setFieldSignature(layer$._LayerLinkHandle, () => ({
    __proto__: dart.getFields(layer$._LayerLinkHandle.__proto__),
    [_link$]: dart.fieldType(dart.nullable(layer$.LayerLink))
  }));
  var _lastOffset = dart.privateName(layer$, "_lastOffset");
  layer$.LeaderLayer = class LeaderLayer extends layer$.ContainerLayer {
    static ['_#new#tearOff'](opts) {
      let link = opts && 'link' in opts ? opts.link : null;
      let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
      return new layer$.LeaderLayer.new({link: link, offset: offset});
    }
    get link() {
      return this[_link$];
    }
    set link(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2232, 12, "value != null");
      if (this[_link$][$_equals](value)) {
        return;
      }
      this[_link$][_leader] = null;
      this[_link$] = value;
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2250, 12, "value != null");
      if (value._equals(this[_offset])) {
        return;
      }
      this[_offset] = value;
      if (!this.alwaysNeedsAddToScene) {
        this.markNeedsAddToScene();
      }
    }
    get alwaysNeedsAddToScene() {
      return this[_link$][_connectedFollowers] > 0;
    }
    attach(owner) {
      core.Object.as(owner);
      super.attach(owner);
      if (!(this.link[_leader] == null)) dart.assertFailed(null, I[0], 2267, 12, "link._leader == null");
      this[_lastOffset] = null;
      this.link[_leader] = this;
    }
    detach() {
      if (!dart.equals(this.link[_leader], this)) dart.assertFailed(null, I[0], 2274, 12, "link._leader == this");
      this.link[_leader] = null;
      this[_lastOffset] = null;
      super.detach();
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      return super.findAnnotations(S, result, localPosition['-'](this.offset), {onlyFirst: onlyFirst});
    }
    addToScene(builder) {
      if (!(this.offset !== null)) dart.assertFailed(null, I[0], 2297, 12, "offset != null");
      this[_lastOffset] = this.offset;
      if (!dart.equals(this[_lastOffset], ui.Offset.zero)) this.engineLayer = builder.pushTransform(vector_math_64.Matrix4.translationValues(dart.nullCheck(this[_lastOffset]).dx, dart.nullCheck(this[_lastOffset]).dy, 0.0).storage, {oldLayer: T$.TransformEngineLayerN().as(this[_engineLayer])});
      this.addChildrenToScene(builder);
      if (!dart.equals(this[_lastOffset], ui.Offset.zero)) builder.pop();
    }
    applyTransform(child, transform) {
      if (!(this[_lastOffset] != null)) dart.assertFailed(null, I[0], 2318, 12, "_lastOffset != null");
      if (!dart.equals(this[_lastOffset], ui.Offset.zero)) transform.translate(dart.nullCheck(this[_lastOffset]).dx, dart.nullCheck(this[_lastOffset]).dy);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("offset", this.offset));
      properties.add(new (T$.DiagnosticsPropertyOfLayerLink()).new("link", this.link));
    }
  };
  (layer$.LeaderLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    let offset = opts && 'offset' in opts ? opts.offset : C[1] || CT.C1;
    this[_lastOffset] = null;
    if (!(link !== null)) dart.assertFailed(null, I[0], 2221, 16, "link != null");
    this[_link$] = link;
    this[_offset] = offset;
    layer$.LeaderLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.LeaderLayer.prototype;
  dart.addTypeTests(layer$.LeaderLayer);
  dart.addTypeCaches(layer$.LeaderLayer);
  dart.setMethodSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getMethods(layer$.LeaderLayer.__proto__),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
  }));
  dart.setGetterSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getGetters(layer$.LeaderLayer.__proto__),
    link: layer$.LayerLink,
    offset: ui.Offset
  }));
  dart.setSetterSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getSetters(layer$.LeaderLayer.__proto__),
    link: layer$.LayerLink,
    offset: ui.Offset
  }));
  dart.setLibraryUri(layer$.LeaderLayer, I[1]);
  dart.setFieldSignature(layer$.LeaderLayer, () => ({
    __proto__: dart.getFields(layer$.LeaderLayer.__proto__),
    [_link$]: dart.fieldType(layer$.LayerLink),
    [_offset]: dart.fieldType(ui.Offset),
    [_lastOffset]: dart.fieldType(dart.nullable(ui.Offset))
  }));
  var showWhenUnlinked$ = dart.privateName(layer$, "FollowerLayer.showWhenUnlinked");
  var unlinkedOffset$ = dart.privateName(layer$, "FollowerLayer.unlinkedOffset");
  var linkedOffset$ = dart.privateName(layer$, "FollowerLayer.linkedOffset");
  var _leaderHandle = dart.privateName(layer$, "_leaderHandle");
  var _lastTransform = dart.privateName(layer$, "_lastTransform");
  var _establishTransform = dart.privateName(layer$, "_establishTransform");
  layer$.FollowerLayer = class FollowerLayer extends layer$.ContainerLayer {
    get showWhenUnlinked() {
      return this[showWhenUnlinked$];
    }
    set showWhenUnlinked(value) {
      this[showWhenUnlinked$] = value;
    }
    get unlinkedOffset() {
      return this[unlinkedOffset$];
    }
    set unlinkedOffset(value) {
      this[unlinkedOffset$] = value;
    }
    get linkedOffset() {
      return this[linkedOffset$];
    }
    set linkedOffset(value) {
      this[linkedOffset$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let link = opts && 'link' in opts ? opts.link : null;
      let showWhenUnlinked = opts && 'showWhenUnlinked' in opts ? opts.showWhenUnlinked : true;
      let unlinkedOffset = opts && 'unlinkedOffset' in opts ? opts.unlinkedOffset : C[1] || CT.C1;
      let linkedOffset = opts && 'linkedOffset' in opts ? opts.linkedOffset : C[1] || CT.C1;
      return new layer$.FollowerLayer.new({link: link, showWhenUnlinked: showWhenUnlinked, unlinkedOffset: unlinkedOffset, linkedOffset: linkedOffset});
    }
    get link() {
      return this[_link$];
    }
    set link(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 2363, 12, "value != null");
      if (!value[$_equals](this[_link$]) && this[_leaderHandle] != null) {
        dart.nullCheck(this[_leaderHandle]).dispose();
        this[_leaderHandle] = value[_registerFollower]();
      }
      this[_link$] = value;
    }
    attach(owner) {
      core.Object.as(owner);
      super.attach(owner);
      this[_leaderHandle] = this[_link$][_registerFollower]();
    }
    detach() {
      let t8;
      super.detach();
      t8 = this[_leaderHandle];
      t8 == null ? null : t8.dispose();
      this[_leaderHandle] = null;
    }
    [_transformOffset](localPosition) {
      if (this[_inverseDirty]) {
        this[_invertedTransform] = vector_math_64.Matrix4.tryInvert(dart.nullCheck(this.getLastTransform()));
        this[_inverseDirty] = false;
      }
      if (this[_invertedTransform] == null) return null;
      let vector = vector_math_64.Vector4.new(localPosition.dx, localPosition.dy, 0.0, 1.0);
      let result = dart.nullCheck(this[_invertedTransform]).transform(vector);
      return new ui.Offset.new(result._get(0) - dart.nullCheck(this.linkedOffset).dx, result._get(1) - dart.nullCheck(this.linkedOffset).dy);
    }
    findAnnotations(S, result, localPosition, opts) {
      let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
      if (dart.nullCheck(this[_leaderHandle]).leader == null) {
        if (dart.nullCheck(this.showWhenUnlinked)) {
          return super.findAnnotations(S, result, localPosition['-'](dart.nullCheck(this.unlinkedOffset)), {onlyFirst: onlyFirst});
        }
        return false;
      }
      let transformedOffset = this[_transformOffset](localPosition);
      if (transformedOffset == null) {
        return false;
      }
      return super.findAnnotations(S, result, transformedOffset, {onlyFirst: onlyFirst});
    }
    getLastTransform() {
      if (this[_lastTransform] == null) return null;
      let result = vector_math_64.Matrix4.translationValues(-dart.nullCheck(this[_lastOffset]).dx, -dart.nullCheck(this[_lastOffset]).dy, 0.0);
      result.multiply(dart.nullCheck(this[_lastTransform]));
      return result;
    }
    static _collectTransformForLayerChain(layers) {
      let t8;
      let result = vector_math_64.Matrix4.identity();
      for (let index = layers[$length] - 1; index > 0; index = index - 1) {
        t8 = layers[$_get](index);
        t8 == null ? null : t8.applyTransform(layers[$_get](index - 1), result);
      }
      return result;
    }
    static _pathsToCommonAncestor(a, b, ancestorsA, ancestorsB) {
      if (a == null || b == null) return null;
      if (a == b) return a;
      if (a.depth < b.depth) {
        ancestorsB[$add](b.parent);
        return layer$.FollowerLayer._pathsToCommonAncestor(a, b.parent, ancestorsA, ancestorsB);
      } else if (a.depth > b.depth) {
        ancestorsA[$add](a.parent);
        return layer$.FollowerLayer._pathsToCommonAncestor(a.parent, b, ancestorsA, ancestorsB);
      }
      ancestorsA[$add](a.parent);
      ancestorsB[$add](b.parent);
      return layer$.FollowerLayer._pathsToCommonAncestor(a.parent, b.parent, ancestorsA, ancestorsB);
    }
    [_establishTransform]() {
      if (!(this.link !== null)) dart.assertFailed(null, I[0], 2528, 12, "link != null");
      this[_lastTransform] = null;
      let leader = dart.nullCheck(this[_leaderHandle]).leader;
      if (leader == null) return;
      if (!dart.equals(leader.owner, this.owner)) dart.assertFailed("Linked LeaderLayer anchor is not in the same layer tree as the FollowerLayer.", I[0], 2535, 7, "leader.owner == owner");
      if (!(leader[_lastOffset] != null)) dart.assertFailed("LeaderLayer anchor must come before FollowerLayer in paint order, but the reverse was true.", I[0], 2539, 7, "leader._lastOffset != null");
      let forwardLayers = T$.JSArrayOfContainerLayer().of([leader]);
      let inverseLayers = T$.JSArrayOfContainerLayer().of([this]);
      let ancestor = layer$.FollowerLayer._pathsToCommonAncestor(leader, this, forwardLayers, inverseLayers);
      if (!(ancestor != null)) dart.assertFailed(null, I[0], 2555, 12, "ancestor != null");
      let forwardTransform = layer$.FollowerLayer._collectTransformForLayerChain(forwardLayers);
      leader.applyTransform(null, forwardTransform);
      forwardTransform.translate(dart.nullCheck(this.linkedOffset).dx, dart.nullCheck(this.linkedOffset).dy);
      let inverseTransform = layer$.FollowerLayer._collectTransformForLayerChain(inverseLayers);
      if (inverseTransform.invert() === 0.0) {
        return;
      }
      inverseTransform.multiply(forwardTransform);
      this[_lastTransform] = inverseTransform;
      this[_inverseDirty] = true;
    }
    get alwaysNeedsAddToScene() {
      return true;
    }
    addToScene(builder) {
      if (!(this.link !== null)) dart.assertFailed(null, I[0], 2593, 12, "link != null");
      if (!(this.showWhenUnlinked != null)) dart.assertFailed(null, I[0], 2594, 12, "showWhenUnlinked != null");
      if (dart.nullCheck(this[_leaderHandle]).leader == null && !dart.nullCheck(this.showWhenUnlinked)) {
        this[_lastTransform] = null;
        this[_lastOffset] = null;
        this[_inverseDirty] = true;
        this.engineLayer = null;
        return;
      }
      this[_establishTransform]();
      if (this[_lastTransform] != null) {
        this.engineLayer = builder.pushTransform(dart.nullCheck(this[_lastTransform]).storage, {oldLayer: T$.TransformEngineLayerN().as(this[_engineLayer])});
        this.addChildrenToScene(builder);
        builder.pop();
        this[_lastOffset] = this.unlinkedOffset;
      } else {
        this[_lastOffset] = null;
        let matrix = vector_math_64.Matrix4.translationValues(dart.nullCheck(this.unlinkedOffset).dx, dart.nullCheck(this.unlinkedOffset).dy, 0.0);
        this.engineLayer = builder.pushTransform(matrix.storage, {oldLayer: T$.TransformEngineLayerN().as(this[_engineLayer])});
        this.addChildrenToScene(builder);
        builder.pop();
      }
      this[_inverseDirty] = true;
    }
    applyTransform(child, transform) {
      if (!(child != null)) dart.assertFailed(null, I[0], 2627, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[0], 2628, 12, "transform != null");
      if (this[_lastTransform] != null) {
        transform.multiply(dart.nullCheck(this[_lastTransform]));
      } else {
        transform.multiply(vector_math_64.Matrix4.translationValues(dart.nullCheck(this.unlinkedOffset).dx, dart.nullCheck(this.unlinkedOffset).dy, 0.0));
      }
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfLayerLink()).new("link", this.link));
      properties.add(new matrix_utils.TransformProperty.new("transform", this.getLastTransform(), {defaultValue: null}));
    }
  };
  (layer$.FollowerLayer.new = function(opts) {
    let link = opts && 'link' in opts ? opts.link : null;
    let showWhenUnlinked = opts && 'showWhenUnlinked' in opts ? opts.showWhenUnlinked : true;
    let unlinkedOffset = opts && 'unlinkedOffset' in opts ? opts.unlinkedOffset : C[1] || CT.C1;
    let linkedOffset = opts && 'linkedOffset' in opts ? opts.linkedOffset : C[1] || CT.C1;
    this[_leaderHandle] = null;
    this[_lastOffset] = null;
    this[_lastTransform] = null;
    this[_invertedTransform] = null;
    this[_inverseDirty] = true;
    this[showWhenUnlinked$] = showWhenUnlinked;
    this[unlinkedOffset$] = unlinkedOffset;
    this[linkedOffset$] = linkedOffset;
    if (!(link !== null)) dart.assertFailed(null, I[0], 2353, 16, "link != null");
    this[_link$] = link;
    layer$.FollowerLayer.__proto__.new.call(this);
    ;
  }).prototype = layer$.FollowerLayer.prototype;
  dart.addTypeTests(layer$.FollowerLayer);
  dart.addTypeCaches(layer$.FollowerLayer);
  dart.setMethodSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getMethods(layer$.FollowerLayer.__proto__),
    [_transformOffset]: dart.fnType(dart.nullable(ui.Offset), [ui.Offset]),
    findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object]),
    getLastTransform: dart.fnType(dart.nullable(vector_math_64.Matrix4), []),
    [_establishTransform]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(layer$.FollowerLayer, () => ['_collectTransformForLayerChain', '_pathsToCommonAncestor']);
  dart.setGetterSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getGetters(layer$.FollowerLayer.__proto__),
    link: layer$.LayerLink
  }));
  dart.setSetterSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getSetters(layer$.FollowerLayer.__proto__),
    link: layer$.LayerLink
  }));
  dart.setLibraryUri(layer$.FollowerLayer, I[1]);
  dart.setFieldSignature(layer$.FollowerLayer, () => ({
    __proto__: dart.getFields(layer$.FollowerLayer.__proto__),
    [_link$]: dart.fieldType(layer$.LayerLink),
    showWhenUnlinked: dart.fieldType(dart.nullable(core.bool)),
    unlinkedOffset: dart.fieldType(dart.nullable(ui.Offset)),
    linkedOffset: dart.fieldType(dart.nullable(ui.Offset)),
    [_leaderHandle]: dart.fieldType(dart.nullable(layer$._LayerLinkHandle)),
    [_lastOffset]: dart.fieldType(dart.nullable(ui.Offset)),
    [_lastTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_invertedTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_inverseDirty]: dart.fieldType(core.bool)
  }));
  var value$ = dart.privateName(layer$, "AnnotatedRegionLayer.value");
  var size$ = dart.privateName(layer$, "AnnotatedRegionLayer.size");
  var offset$ = dart.privateName(layer$, "AnnotatedRegionLayer.offset");
  var opaque$ = dart.privateName(layer$, "AnnotatedRegionLayer.opaque");
  const _is_AnnotatedRegionLayer_default = Symbol('_is_AnnotatedRegionLayer_default');
  layer$.AnnotatedRegionLayer$ = dart.generic(T => {
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    class AnnotatedRegionLayer extends layer$.ContainerLayer {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get size() {
        return this[size$];
      }
      set size(value) {
        super.size = value;
      }
      get offset() {
        return this[offset$];
      }
      set offset(value) {
        super.offset = value;
      }
      get opaque() {
        return this[opaque$];
      }
      set opaque(value) {
        super.opaque = value;
      }
      static ['_#new#tearOff'](T, value, opts) {
        let size = opts && 'size' in opts ? opts.size : null;
        let offset = opts && 'offset' in opts ? opts.offset : null;
        let opaque = opts && 'opaque' in opts ? opts.opaque : false;
        return new (layer$.AnnotatedRegionLayer$(T)).new(value, {size: size, offset: offset, opaque: opaque});
      }
      findAnnotations(S, result, localPosition, opts) {
        let onlyFirst = opts && 'onlyFirst' in opts ? opts.onlyFirst : null;
        let isAbsorbed = super.findAnnotations(S, result, localPosition, {onlyFirst: onlyFirst});
        if (result.entries[$isNotEmpty] && onlyFirst) return isAbsorbed;
        if (this.size != null && !this.offset['&'](dart.nullCheck(this.size)).contains(localPosition)) {
          return isAbsorbed;
        }
        if (dart.wrapType(T)._equals(dart.wrapType(S))) {
          isAbsorbed = isAbsorbed || this.opaque;
          let untypedValue = this.value;
          let typedValue = S.as(untypedValue);
          result.add(new (layer$.AnnotationEntry$(S)).new({annotation: typedValue, localPosition: localPosition['-'](this.offset)}));
        }
        return isAbsorbed;
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (__t$DiagnosticsPropertyOfT()).new("value", this.value));
        properties.add(new (T$.DiagnosticsPropertyOfSize()).new("size", this.size, {defaultValue: null}));
        properties.add(new (T$.DiagnosticsPropertyOfOffset()).new("offset", this.offset, {defaultValue: null}));
        properties.add(new (T$.DiagnosticsPropertyOfbool()).new("opaque", this.opaque, {defaultValue: false}));
      }
    }
    (AnnotatedRegionLayer.new = function(value, opts) {
      let t8;
      let size = opts && 'size' in opts ? opts.size : null;
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let opaque = opts && 'opaque' in opts ? opts.opaque : false;
      this[value$] = value;
      this[size$] = size;
      this[opaque$] = opaque;
      if (!(value !== null)) dart.assertFailed(null, I[0], 2676, 16, "value != null");
      if (!(opaque !== null)) dart.assertFailed(null, I[0], 2677, 16, "opaque != null");
      this[offset$] = (t8 = offset, t8 == null ? ui.Offset.zero : t8);
      AnnotatedRegionLayer.__proto__.new.call(this);
      ;
    }).prototype = AnnotatedRegionLayer.prototype;
    dart.addTypeTests(AnnotatedRegionLayer);
    AnnotatedRegionLayer.prototype[_is_AnnotatedRegionLayer_default] = true;
    dart.addTypeCaches(AnnotatedRegionLayer);
    dart.setMethodSignature(AnnotatedRegionLayer, () => ({
      __proto__: dart.getMethods(AnnotatedRegionLayer.__proto__),
      findAnnotations: dart.gFnType(S => [core.bool, [layer$.AnnotationResult$(S), ui.Offset], {}, {onlyFirst: core.bool}], S => [core.Object])
    }));
    dart.setLibraryUri(AnnotatedRegionLayer, I[1]);
    dart.setFieldSignature(AnnotatedRegionLayer, () => ({
      __proto__: dart.getFields(AnnotatedRegionLayer.__proto__),
      value: dart.finalFieldType(T),
      size: dart.finalFieldType(dart.nullable(ui.Size)),
      offset: dart.finalFieldType(ui.Offset),
      opaque: dart.finalFieldType(core.bool)
    }));
    return AnnotatedRegionLayer;
  });
  layer$.AnnotatedRegionLayer = layer$.AnnotatedRegionLayer$();
  dart.addTypeTests(layer$.AnnotatedRegionLayer, _is_AnnotatedRegionLayer_default);
  var size$0 = dart.privateName(view, "ViewConfiguration.size");
  var devicePixelRatio$ = dart.privateName(view, "ViewConfiguration.devicePixelRatio");
  view.ViewConfiguration = class ViewConfiguration extends core.Object {
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get devicePixelRatio() {
      return this[devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      super.devicePixelRatio = value;
    }
    static ['_#new#tearOff'](opts) {
      let size = opts && 'size' in opts ? opts.size : C[6] || CT.C6;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
      return new view.ViewConfiguration.new({size: size, devicePixelRatio: devicePixelRatio});
    }
    toMatrix() {
      return vector_math_64.Matrix4.diagonal3Values(this.devicePixelRatio, this.devicePixelRatio, 1.0);
    }
    _equals(other) {
      if (other == null) return false;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      return view.ViewConfiguration.is(other) && other.size._equals(this.size) && other.devicePixelRatio === this.devicePixelRatio;
    }
    get hashCode() {
      return ui.hashValues(this.size, this.devicePixelRatio);
    }
    toString() {
      return dart.str(this.size) + " at " + debug.debugFormatDouble(this.devicePixelRatio) + "x";
    }
  };
  (view.ViewConfiguration.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : C[6] || CT.C6;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
    this[size$0] = size;
    this[devicePixelRatio$] = devicePixelRatio;
    ;
  }).prototype = view.ViewConfiguration.prototype;
  dart.addTypeTests(view.ViewConfiguration);
  dart.addTypeCaches(view.ViewConfiguration);
  dart.setMethodSignature(view.ViewConfiguration, () => ({
    __proto__: dart.getMethods(view.ViewConfiguration.__proto__),
    toMatrix: dart.fnType(vector_math_64.Matrix4, [])
  }));
  dart.setLibraryUri(view.ViewConfiguration, I[2]);
  dart.setFieldSignature(view.ViewConfiguration, () => ({
    __proto__: dart.getFields(view.ViewConfiguration.__proto__),
    size: dart.finalFieldType(ui.Size),
    devicePixelRatio: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(view.ViewConfiguration, ['_equals', 'toString']);
  dart.defineExtensionAccessors(view.ViewConfiguration, ['hashCode']);
  var automaticSystemUiAdjustment = dart.privateName(view, "RenderView.automaticSystemUiAdjustment");
  var _size = dart.privateName(view, "_size");
  var _rootTransform = dart.privateName(view, "_rootTransform");
  var _configuration = dart.privateName(view, "_configuration");
  var _window = dart.privateName(view, "_window");
  var _updateMatricesAndCreateNewRootLayer = dart.privateName(view, "_updateMatricesAndCreateNewRootLayer");
  var _updateSystemChrome = dart.privateName(view, "_updateSystemChrome");
  var parentData = dart.privateName(object$, "RenderObject.parentData");
  var debugCreator$ = dart.privateName(object$, "RenderObject.debugCreator");
  var _debugDisposed$ = dart.privateName(object$, "_debugDisposed");
  var _debugDoingThisResize = dart.privateName(object$, "_debugDoingThisResize");
  var _debugDoingThisLayout = dart.privateName(object$, "_debugDoingThisLayout");
  var _debugCanParentUseSize = dart.privateName(object$, "_debugCanParentUseSize");
  var _debugMutationsLocked = dart.privateName(object$, "_debugMutationsLocked");
  var _needsLayout = dart.privateName(object$, "_needsLayout");
  var _relayoutBoundary = dart.privateName(object$, "_relayoutBoundary");
  var _doingThisLayoutWithCallback = dart.privateName(object$, "_doingThisLayoutWithCallback");
  var _constraints = dart.privateName(object$, "_constraints");
  var _debugDoingThisPaint = dart.privateName(object$, "_debugDoingThisPaint");
  var _layerHandle = dart.privateName(object$, "_layerHandle");
  var _needsCompositingBitsUpdate = dart.privateName(object$, "_needsCompositingBitsUpdate");
  var __RenderObject__needsCompositing = dart.privateName(object$, "_#RenderObject#_needsCompositing");
  var _needsPaint = dart.privateName(object$, "_needsPaint");
  var _cachedSemanticsConfiguration = dart.privateName(object$, "_cachedSemanticsConfiguration");
  var _needsSemanticsUpdate = dart.privateName(object$, "_needsSemanticsUpdate");
  var _semantics = dart.privateName(object$, "_semantics");
  var _needsCompositing = dart.privateName(object$, "_needsCompositing");
  var _debugCanPerformMutations = dart.privateName(object$, "_debugCanPerformMutations");
  var _cleanRelayoutBoundary = dart.privateName(object$, "_cleanRelayoutBoundary");
  var _debugReportException = dart.privateName(object$, "_debugReportException");
  var _debugAllowMutationsToDirtySubtrees = dart.privateName(object$, "_debugAllowMutationsToDirtySubtrees");
  var _semanticsConfiguration = dart.privateName(object$, "_semanticsConfiguration");
  var _debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout = dart.privateName(object$, "_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout");
  var _nodesNeedingLayout = dart.privateName(object$, "_nodesNeedingLayout");
  var _debugDoingLayout = dart.privateName(object$, "_debugDoingLayout");
  var _layoutWithoutResize = dart.privateName(object$, "_layoutWithoutResize");
  var _enableMutationsToDirtySubtrees = dart.privateName(object$, "_enableMutationsToDirtySubtrees");
  var _nodesNeedingCompositingBitsUpdate = dart.privateName(object$, "_nodesNeedingCompositingBitsUpdate");
  var _updateCompositingBits = dart.privateName(object$, "_updateCompositingBits");
  var _nodesNeedingPaint = dart.privateName(object$, "_nodesNeedingPaint");
  var _skippedPaintingOnLayer = dart.privateName(object$, "_skippedPaintingOnLayer");
  var _debugDoingPaint = dart.privateName(object$, "_debugDoingPaint");
  var _paintWithContext = dart.privateName(object$, "_paintWithContext");
  var _debugDoingSemantics = dart.privateName(object$, "_debugDoingSemantics");
  var _semanticsOwner = dart.privateName(object$, "_semanticsOwner");
  var _nodesNeedingSemantics = dart.privateName(object$, "_nodesNeedingSemantics");
  var _getSemanticsForParent = dart.privateName(object$, "_getSemanticsForParent");
  var _updateSemantics = dart.privateName(object$, "_updateSemantics");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  const AbstractNode_DiagnosticableTreeMixin$36$ = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36$.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36$.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36$.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36$, diagnostics.DiagnosticableTreeMixin);
  object$.RenderObject = class RenderObject extends AbstractNode_DiagnosticableTreeMixin$36$ {
    get parentData() {
      return this[parentData];
    }
    set parentData(value) {
      this[parentData] = value;
    }
    get debugCreator() {
      return this[debugCreator$];
    }
    set debugCreator(value) {
      this[debugCreator$] = value;
    }
    reassemble() {
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
      this.visitChildren(dart.fn(child => {
        child.reassemble();
      }, T$.RenderObjectTovoid()));
    }
    get debugDisposed() {
      let disposed = null;
      if (!dart.fn(() => {
        disposed = this[_debugDisposed$];
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1314, 12, "() {\n      disposed = _debugDisposed;\n      return true;\n    }()");
      return disposed;
    }
    dispose() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 1339, 12, "!_debugDisposed");
      this[_layerHandle].layer = null;
      if (!dart.fn(() => {
        this[_debugDisposed$] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1341, 12, "() {\n      // TODO(dnfield): Enable this assert once clients have had a chance to\n      // migrate.\n      // visitChildren((RenderObject child) {\n      //   assert(\n      //     child.debugDisposed!,\n      //     '${child.runtimeType} (child of $runtimeType) must be disposed before calling super.dispose().',\n      //   );\n      // });\n      _debugDisposed = true;\n      return true;\n    }()");
    }
    setupParentData(child) {
      object$.RenderObject.as(child);
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[4], 1379, 12, "_debugCanPerformMutations");
      if (!object$.ParentData.is(child.parentData)) child.parentData = new object$.ParentData.new();
    }
    adoptChild(child) {
      object$.RenderObject.as(child);
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[4], 1389, 12, "_debugCanPerformMutations");
      if (!(child !== null)) dart.assertFailed(null, I[4], 1390, 12, "child != null");
      this.setupParentData(child);
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsSemanticsUpdate();
      super.adoptChild(child);
    }
    dropChild(child) {
      object$.RenderObject.as(child);
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[4], 1404, 12, "_debugCanPerformMutations");
      if (!(child !== null)) dart.assertFailed(null, I[4], 1405, 12, "child != null");
      if (!(child.parentData != null)) dart.assertFailed(null, I[4], 1406, 12, "child.parentData != null");
      child[_cleanRelayoutBoundary]();
      dart.nullCheck(child.parentData).detach();
      child.parentData = null;
      super.dropChild(child);
      this.markNeedsLayout();
      this.markNeedsCompositingBitsUpdate();
      this.markNeedsSemanticsUpdate();
    }
    visitChildren(visitor) {
    }
    [_debugReportException](method, exception, stack) {
      assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "rendering library", context: new assertions.ErrorDescription.new("during " + method + "()"), informationCollector: dart.fn(() => (() => {
          let t8 = T$.JSArrayOfDiagnosticsNode().of([]);
          if (true && this.debugCreator != null) t8.push(new object$.DiagnosticsDebugCreator.new(dart.nullCheck(this.debugCreator)));
          t8.push(this.describeForError("The following RenderObject was being processed when the exception was fired"));
          t8.push(this.describeForError("RenderObject", {style: diagnostics.DiagnosticsTreeStyle.truncateChildren}));
          return t8;
        })(), T$.VoidToListOfDiagnosticsNode())}));
    }
    get debugDoingThisResize() {
      return this[_debugDoingThisResize];
    }
    get debugDoingThisLayout() {
      return this[_debugDoingThisLayout];
    }
    static get debugActiveLayout() {
      return object$.RenderObject._debugActiveLayout;
    }
    get debugCanParentUseSize() {
      return dart.nullCheck(this[_debugCanParentUseSize]);
    }
    get [_debugCanPerformMutations]() {
      let result = null;
      function result$35get() {
        let t10;
        t10 = result;
        return t10 == null ? dart.throw(new _internal.LateError.localNI("result")) : t10;
      }
      dart.fn(result$35get, T$.VoidTobool());
      function result$35set(t11) {
        return result = t11;
      }
      dart.fn(result$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        if (this[_debugDisposed$]) {
          result$35set(false);
          return true;
        }
        if (this.owner != null && !dart.nullCheck(this.owner).debugDoingLayout) {
          result$35set(true);
          return true;
        }
        let node = this;
        while (true) {
          if (node[_doingThisLayoutWithCallback]) {
            result$35set(true);
            break;
          }
          if (this.owner != null && dart.nullCheck(this.owner)[_debugAllowMutationsToDirtySubtrees] && node[_needsLayout]) {
            result$35set(true);
            break;
          }
          if (node[_debugMutationsLocked]) {
            result$35set(false);
            break;
          }
          if (!object$.RenderObject.is(node.parent)) {
            result$35set(true);
            break;
          }
          node = object$.RenderObject.as(dart.nullCheck(node.parent));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1495, 12, "() {\n      if (_debugDisposed) {\n        result = false;\n        return true;\n      }\n      if (owner != null && !owner!.debugDoingLayout) {\n        result = true;\n        return true;\n      }\n      RenderObject node = this;\n      while (true) {\n        if (node._doingThisLayoutWithCallback) {\n          result = true;\n          break;\n        }\n        if (owner != null &&\n            owner!._debugAllowMutationsToDirtySubtrees &&\n            node._needsLayout) {\n          result = true;\n          break;\n        }\n        if (node._debugMutationsLocked) {\n          result = false;\n          break;\n        }\n        if (node.parent is! RenderObject) {\n          result = true;\n          break;\n        }\n        node = node.parent! as RenderObject;\n      }\n      return true;\n    }()");
      return result$35get();
    }
    get owner() {
      return T$.PipelineOwnerN().as(super.owner);
    }
    attach(owner) {
      object$.PipelineOwner.as(owner);
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 1536, 12, "!_debugDisposed");
      super.attach(owner);
      if (this[_needsLayout] && this[_relayoutBoundary] != null) {
        this[_needsLayout] = false;
        this.markNeedsLayout();
      }
      if (this[_needsCompositingBitsUpdate]) {
        this[_needsCompositingBitsUpdate] = false;
        this.markNeedsCompositingBitsUpdate();
      }
      if (this[_needsPaint] && this[_layerHandle].layer != null) {
        this[_needsPaint] = false;
        this.markNeedsPaint();
      }
      if (this[_needsSemanticsUpdate] && this[_semanticsConfiguration].isSemanticBoundary) {
        this[_needsSemanticsUpdate] = false;
        this.markNeedsSemanticsUpdate();
      }
    }
    get debugNeedsLayout() {
      let result = null;
      function result$35get() {
        let t14;
        t14 = result;
        return t14 == null ? dart.throw(new _internal.LateError.localNI("result")) : t14;
      }
      dart.fn(result$35get, T$.VoidTobool());
      function result$35set(t15) {
        return result = t15;
      }
      dart.fn(result$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        result$35set(this[_needsLayout]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1574, 12, "() {\n      result = _needsLayout;\n      return true;\n    }()");
      return result$35get();
    }
    get debugDoingThisLayoutWithCallback() {
      return this[_doingThisLayoutWithCallback];
    }
    get constraints() {
      if (this[_constraints] == null) dart.throw(new core.StateError.new("A RenderObject does not have any constraints before it has been laid out."));
      return dart.nullCheck(this[_constraints]);
    }
    [_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]() {
      if (this[_relayoutBoundary] == null) return true;
      let node = this;
      while (!node[$_equals](this[_relayoutBoundary])) {
        if (!dart.equals(node[_relayoutBoundary], this[_relayoutBoundary])) dart.assertFailed(null, I[4], 1626, 14, "node._relayoutBoundary == _relayoutBoundary");
        if (!(node.parent != null)) dart.assertFailed(null, I[4], 1627, 14, "node.parent != null");
        node = object$.RenderObject.as(dart.nullCheck(node.parent));
        if (!node[_needsLayout] && !node[_debugDoingThisLayout]) return false;
      }
      if (!dart.equals(node[_relayoutBoundary], node)) dart.assertFailed(null, I[4], 1631, 12, "node._relayoutBoundary == node");
      return true;
    }
    markNeedsLayout() {
      if (!this[_debugCanPerformMutations]) dart.assertFailed(null, I[4], 1674, 12, "_debugCanPerformMutations");
      if (this[_needsLayout]) {
        if (!this[_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]()) dart.assertFailed(null, I[4], 1676, 14, "_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout()");
        return;
      }
      if (!(this[_relayoutBoundary] != null)) dart.assertFailed(null, I[4], 1679, 12, "_relayoutBoundary != null");
      if (!dart.equals(this[_relayoutBoundary], this)) {
        this.markParentNeedsLayout();
      } else {
        this[_needsLayout] = true;
        if (this.owner != null) {
          if (!dart.fn(() => {
            if (debug$0.debugPrintMarkNeedsLayoutStacks) assertions.debugPrintStack({label: "markNeedsLayout() called for " + dart.str(this)});
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1685, 16, "() {\n          if (debugPrintMarkNeedsLayoutStacks)\n            debugPrintStack(label: 'markNeedsLayout() called for $this');\n          return true;\n        }()");
          dart.nullCheck(this.owner)[_nodesNeedingLayout][$add](this);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      }
    }
    markParentNeedsLayout() {
      this[_needsLayout] = true;
      if (!(this.parent != null)) dart.assertFailed(null, I[4], 1708, 12, "this.parent != null");
      let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
      if (!this[_doingThisLayoutWithCallback]) {
        parent.markNeedsLayout();
      } else {
        if (!parent[_debugDoingThisLayout]) dart.assertFailed(null, I[4], 1713, 14, "parent._debugDoingThisLayout");
      }
      if (!parent[$_equals](this.parent)) dart.assertFailed(null, I[4], 1715, 12, "parent == this.parent");
    }
    markNeedsLayoutForSizedByParentChange() {
      this.markNeedsLayout();
      this.markParentNeedsLayout();
    }
    [_cleanRelayoutBoundary]() {
      if (!dart.equals(this[_relayoutBoundary], this)) {
        this[_relayoutBoundary] = null;
        this[_needsLayout] = true;
        this.visitChildren(C[13] || CT.C13);
      }
    }
    static _cleanChildRelayoutBoundary(child) {
      child[_cleanRelayoutBoundary]();
    }
    scheduleInitialLayout() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 1750, 12, "!_debugDisposed");
      if (!this.attached) dart.assertFailed(null, I[4], 1751, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, I[4], 1752, 12, "parent is! RenderObject");
      if (!!dart.nullCheck(this.owner)[_debugDoingLayout]) dart.assertFailed(null, I[4], 1753, 12, "!owner!._debugDoingLayout");
      if (!(this[_relayoutBoundary] == null)) dart.assertFailed(null, I[4], 1754, 12, "_relayoutBoundary == null");
      this[_relayoutBoundary] = this;
      if (!dart.fn(() => {
        this[_debugCanParentUseSize] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1756, 12, "() {\n      _debugCanParentUseSize = false;\n      return true;\n    }()");
      dart.nullCheck(this.owner)[_nodesNeedingLayout][$add](this);
    }
    [_layoutWithoutResize]() {
      if (!dart.equals(this[_relayoutBoundary], this)) dart.assertFailed(null, I[4], 1765, 12, "_relayoutBoundary == this");
      let debugPreviousActiveLayout = null;
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[4], 1767, 12, "!_debugMutationsLocked");
      if (!!this[_doingThisLayoutWithCallback]) dart.assertFailed(null, I[4], 1768, 12, "!_doingThisLayoutWithCallback");
      if (!(this[_debugCanParentUseSize] != null)) dart.assertFailed(null, I[4], 1769, 12, "_debugCanParentUseSize != null");
      if (!dart.fn(() => {
        this[_debugMutationsLocked] = true;
        this[_debugDoingThisLayout] = true;
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = this;
        if (debug$0.debugPrintLayouts) print.debugPrint("Laying out (without resize) " + dart.str(this));
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1770, 12, "() {\n      _debugMutationsLocked = true;\n      _debugDoingThisLayout = true;\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = this;\n      if (debugPrintLayouts) debugPrint('Laying out (without resize) $this');\n      return true;\n    }()");
      try {
        this.performLayout();
        this.markNeedsSemanticsUpdate();
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stack = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          this[_debugReportException]("performLayout", e, stack);
        } else
          throw e$;
      }
      if (!dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        this[_debugDoingThisLayout] = false;
        this[_debugMutationsLocked] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1784, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      _debugDoingThisLayout = false;\n      _debugMutationsLocked = false;\n      return true;\n    }()");
      this[_needsLayout] = false;
      this.markNeedsPaint();
    }
    layout(constraints, opts) {
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 1819, 12, "!_debugDisposed");
      if (!false && debug$0.debugProfileLayoutsEnabled) {
        let debugTimelineArguments = debug.timelineArgumentsIndicatingLandmarkEvent;
        if (!dart.fn(() => {
          debugTimelineArguments = this.toDiagnosticsNode().toTimelineArguments();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1823, 14, "() {\n        debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();\n        return true;\n      }()");
        developer.Timeline.startSync(dart.str(this[$runtimeType]), {arguments: debugTimelineArguments});
      }
      if (!(constraints !== null)) dart.assertFailed(null, I[4], 1832, 12, "constraints != null");
      if (!constraints.debugAssertIsValid({isAppliedConstraint: true, informationCollector: dart.fn(() => {
          let stack = core.StackTrace.current.toString()[$split]("\n");
          let targetFrame = null;
          let layoutFramePattern = core.RegExp.new("^#[0-9]+ +RenderObject.layout \\(");
          for (let i = 0; i < stack[$length]; i = i + 1) {
            if (layoutFramePattern[$matchAsPrefix](stack[$_get](i)) != null) {
              targetFrame = i + 1;
              break;
            }
          }
          if (targetFrame != null && dart.notNull(targetFrame) < stack[$length]) {
            let targetFramePattern = core.RegExp.new("^#[0-9]+ +(.+)$");
            let targetFrameMatch = targetFramePattern[$matchAsPrefix](stack[$_get](targetFrame));
            let problemFunction = targetFrameMatch != null && targetFrameMatch.groupCount > 0 ? targetFrameMatch.group(1) : stack[$_get](targetFrame)[$trim]();
            return T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorDescription.new("These invalid constraints were provided to " + dart.str(this[$runtimeType]) + "'s layout() " + "function by the following function, which probably computed the " + "invalid constraints in question:\n" + "  " + dart.str(problemFunction))]);
          }
          return T$.JSArrayOfDiagnosticsNode().of([]);
        }, T$.VoidToListOfDiagnosticsNode())})) dart.assertFailed(null, I[4], 1833, 12, "constraints.debugAssertIsValid(\n      isAppliedConstraint: true,\n      informationCollector: () {\n        final List<String> stack = StackTrace.current.toString().split('\\n');\n        int? targetFrame;\n        final Pattern layoutFramePattern =\n            RegExp(r'^#[0-9]+ +RenderObject.layout \\(');\n        for (int i = 0; i < stack.length; i += 1) {\n          if (layoutFramePattern.matchAsPrefix(stack[i]) != null) {\n            targetFrame = i + 1;\n            break;\n          }\n        }\n        if (targetFrame != null && targetFrame < stack.length) {\n          final Pattern targetFramePattern = RegExp(r'^#[0-9]+ +(.+)$');\n          final Match? targetFrameMatch =\n              targetFramePattern.matchAsPrefix(stack[targetFrame]);\n          final String? problemFunction =\n              (targetFrameMatch != null && targetFrameMatch.groupCount > 0)\n                  ? targetFrameMatch.group(1)\n                  : stack[targetFrame].trim();\n          // TODO(jacobr): this case is similar to displaying a single stack frame.\n          return <DiagnosticsNode>[\n            ErrorDescription(\n              \"These invalid constraints were provided to $runtimeType's layout() \"\n              'function by the following function, which probably computed the '\n              'invalid constraints in question:\\n'\n              '  $problemFunction',\n            ),\n          ];\n        }\n        return <DiagnosticsNode>[];\n      },\n    )");
      if (!!this[_debugDoingThisResize]) dart.assertFailed(null, I[4], 1867, 12, "!_debugDoingThisResize");
      if (!!this[_debugDoingThisLayout]) dart.assertFailed(null, I[4], 1868, 12, "!_debugDoingThisLayout");
      let relayoutBoundary = null;
      if (!parentUsesSize || this.sizedByParent || constraints.isTight || !object$.RenderObject.is(this.parent)) {
        relayoutBoundary = this;
      } else {
        relayoutBoundary = object$.RenderObject.as(dart.nullCheck(this.parent))[_relayoutBoundary];
      }
      if (!dart.fn(() => {
        this[_debugCanParentUseSize] = parentUsesSize;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1878, 12, "() {\n      _debugCanParentUseSize = parentUsesSize;\n      return true;\n    }()");
      if (!this[_needsLayout] && constraints[$_equals](this[_constraints]) && dart.equals(relayoutBoundary, this[_relayoutBoundary])) {
        if (!dart.fn(() => {
          this[_debugDoingThisResize] = this.sizedByParent;
          this[_debugDoingThisLayout] = !this.sizedByParent;
          let debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
          object$.RenderObject._debugActiveLayout = this;
          this.debugResetSize();
          object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
          this[_debugDoingThisLayout] = false;
          this[_debugDoingThisResize] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1885, 14, "() {\n        // in case parentUsesSize changed since the last invocation, set size\n        // to itself, so it has the right internal debug values.\n        _debugDoingThisResize = sizedByParent;\n        _debugDoingThisLayout = !sizedByParent;\n        final RenderObject? debugPreviousActiveLayout = _debugActiveLayout;\n        _debugActiveLayout = this;\n        debugResetSize();\n        _debugActiveLayout = debugPreviousActiveLayout;\n        _debugDoingThisLayout = false;\n        _debugDoingThisResize = false;\n        return true;\n      }()");
        if (!false && debug$0.debugProfileLayoutsEnabled) developer.Timeline.finishSync();
        return;
      }
      this[_constraints] = constraints;
      if (this[_relayoutBoundary] != null && !dart.equals(relayoutBoundary, this[_relayoutBoundary])) {
        this.visitChildren(C[13] || CT.C13);
      }
      this[_relayoutBoundary] = relayoutBoundary;
      if (!!this[_debugMutationsLocked]) dart.assertFailed(null, I[4], 1910, 12, "!_debugMutationsLocked");
      if (!!this[_doingThisLayoutWithCallback]) dart.assertFailed(null, I[4], 1911, 12, "!_doingThisLayoutWithCallback");
      if (!dart.fn(() => {
        this[_debugMutationsLocked] = true;
        if (debug$0.debugPrintLayouts) print.debugPrint("Laying out (" + (this.sizedByParent ? "with separate resize" : "with resize allowed") + ") " + dart.str(this));
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1912, 12, "() {\n      _debugMutationsLocked = true;\n      if (debugPrintLayouts)\n        debugPrint(\n            'Laying out (${sizedByParent ? \"with separate resize\" : \"with resize allowed\"}) $this');\n      return true;\n    }()");
      if (this.sizedByParent) {
        if (!dart.fn(() => {
          this[_debugDoingThisResize] = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1920, 14, "() {\n        _debugDoingThisResize = true;\n        return true;\n      }()");
        try {
          this.performResize();
          if (!dart.fn(() => {
            this.debugAssertDoesMeetConstraints();
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1926, 16, "() {\n          debugAssertDoesMeetConstraints();\n          return true;\n        }()");
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          if (core.Object.is(e)) {
            this[_debugReportException]("performResize", e, stack);
          } else
            throw e$;
        }
        if (!dart.fn(() => {
          this[_debugDoingThisResize] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1933, 14, "() {\n        _debugDoingThisResize = false;\n        return true;\n      }()");
      }
      let debugPreviousActiveLayout = null;
      if (!dart.fn(() => {
        this[_debugDoingThisLayout] = true;
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = this;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1939, 12, "() {\n      _debugDoingThisLayout = true;\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = this;\n      return true;\n    }()");
      try {
        this.performLayout();
        this.markNeedsSemanticsUpdate();
        if (!dart.fn(() => {
          this.debugAssertDoesMeetConstraints();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1948, 14, "() {\n        debugAssertDoesMeetConstraints();\n        return true;\n      }()");
      } catch (e$0) {
        let e = dart.getThrown(e$0);
        let stack = dart.stackTrace(e$0);
        if (core.Object.is(e)) {
          this[_debugReportException]("performLayout", e, stack);
        } else
          throw e$0;
      }
      if (!dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        this[_debugDoingThisLayout] = false;
        this[_debugMutationsLocked] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1955, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      _debugDoingThisLayout = false;\n      _debugMutationsLocked = false;\n      return true;\n    }()");
      this[_needsLayout] = false;
      this.markNeedsPaint();
      if (!false && debug$0.debugProfileLayoutsEnabled) developer.Timeline.finishSync();
    }
    debugResetSize() {
    }
    get sizedByParent() {
      return false;
    }
    invokeLayoutCallback(T, callback) {
      if (!this[_debugMutationsLocked]) dart.assertFailed(null, I[4], 2050, 12, "_debugMutationsLocked");
      if (!this[_debugDoingThisLayout]) dart.assertFailed(null, I[4], 2051, 12, "_debugDoingThisLayout");
      if (!!this[_doingThisLayoutWithCallback]) dart.assertFailed(null, I[4], 2052, 12, "!_doingThisLayoutWithCallback");
      this[_doingThisLayoutWithCallback] = true;
      try {
        dart.nullCheck(this.owner)[_enableMutationsToDirtySubtrees](dart.fn(() => {
          callback(T.as(this.constraints));
        }, T$.VoidTovoid()));
      } finally {
        this[_doingThisLayoutWithCallback] = false;
      }
    }
    rotate(opts) {
      let oldAngle = opts && 'oldAngle' in opts ? opts.oldAngle : null;
      let newAngle = opts && 'newAngle' in opts ? opts.newAngle : null;
      let time = opts && 'time' in opts ? opts.time : null;
    }
    get debugDoingThisPaint() {
      return this[_debugDoingThisPaint];
    }
    static get debugActivePaint() {
      return object$.RenderObject._debugActivePaint;
    }
    get isRepaintBoundary() {
      return false;
    }
    debugRegisterRepaintBoundaryPaint(opts) {
      let includedParent = opts && 'includedParent' in opts ? opts.includedParent : true;
      let includedChild = opts && 'includedChild' in opts ? opts.includedChild : false;
    }
    get alwaysNeedsCompositing() {
      return false;
    }
    get layer() {
      if (!(!this.isRepaintBoundary || this[_layerHandle].layer == null || layer$.OffsetLayer.is(this[_layerHandle].layer))) dart.assertFailed(null, I[4], 2160, 12, "!isRepaintBoundary ||\n        _layerHandle.layer == null ||\n        _layerHandle.layer is OffsetLayer");
      return this[_layerHandle].layer;
    }
    set layer(newLayer) {
      if (!!this.isRepaintBoundary) dart.assertFailed("Attempted to set a layer to a repaint boundary render object.\n" + "The framework creates and assigns an OffsetLayer to a repaint " + "boundary automatically.", I[4], 2169, 7, "!isRepaintBoundary");
      this[_layerHandle].layer = newLayer;
    }
    get debugLayer() {
      let result = null;
      if (!dart.fn(() => {
        result = this[_layerHandle].layer;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2189, 12, "() {\n      result = _layerHandle.layer;\n      return true;\n    }()");
      return result;
    }
    markNeedsCompositingBitsUpdate() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 2214, 12, "!_debugDisposed");
      if (this[_needsCompositingBitsUpdate]) return;
      this[_needsCompositingBitsUpdate] = true;
      if (object$.RenderObject.is(this.parent)) {
        let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
        if (parent[_needsCompositingBitsUpdate]) return;
        if (!this.isRepaintBoundary && !parent.isRepaintBoundary) {
          parent.markNeedsCompositingBitsUpdate();
          return;
        }
      }
      if (!dart.fn(() => {
        let parent = this.parent;
        if (object$.RenderObject.is(parent)) return parent[_needsCompositing];
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2225, 12, "() {\n      final AbstractNode? parent = this.parent;\n      if (parent is RenderObject) return parent._needsCompositing;\n      return true;\n    }()");
      if (this.owner != null) dart.nullCheck(this.owner)[_nodesNeedingCompositingBitsUpdate][$add](this);
    }
    get [_needsCompositing]() {
      let t20;
      t20 = this[__RenderObject__needsCompositing];
      return t20 == null ? dart.throw(new _internal.LateError.fieldNI("_needsCompositing")) : t20;
    }
    set [_needsCompositing](t20) {
      this[__RenderObject__needsCompositing] = t20;
    }
    get needsCompositing() {
      if (!!this[_needsCompositingBitsUpdate]) dart.assertFailed(null, I[4], 2244, 9, "!_needsCompositingBitsUpdate");
      return this[_needsCompositing];
    }
    [_updateCompositingBits]() {
      if (!this[_needsCompositingBitsUpdate]) return;
      let oldNeedsCompositing = this[_needsCompositing];
      this[_needsCompositing] = false;
      this.visitChildren(dart.fn(child => {
        child[_updateCompositingBits]();
        if (child.needsCompositing) this[_needsCompositing] = true;
      }, T$.RenderObjectTovoid()));
      if (this.isRepaintBoundary || this.alwaysNeedsCompositing) this[_needsCompositing] = true;
      if (oldNeedsCompositing !== this[_needsCompositing]) this.markNeedsPaint();
      this[_needsCompositingBitsUpdate] = false;
    }
    get debugNeedsPaint() {
      let result = null;
      function result$35get() {
        let t22;
        t22 = result;
        return t22 == null ? dart.throw(new _internal.LateError.localNI("result")) : t22;
      }
      dart.fn(result$35get, T$.VoidTobool());
      function result$35set(t23) {
        return result = t23;
      }
      dart.fn(result$35set, T$.boolTodynamic());
      if (!dart.fn(() => {
        result$35set(this[_needsPaint]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2277, 12, "() {\n      result = _needsPaint;\n      return true;\n    }()");
      return result$35get();
    }
    markNeedsPaint() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 2307, 12, "!_debugDisposed");
      if (!(this.owner == null || !dart.nullCheck(this.owner).debugDoingPaint)) dart.assertFailed(null, I[4], 2308, 12, "owner == null || !owner!.debugDoingPaint");
      if (this[_needsPaint]) return;
      this[_needsPaint] = true;
      if (this.isRepaintBoundary) {
        if (!dart.fn(() => {
          if (debug$0.debugPrintMarkNeedsPaintStacks) assertions.debugPrintStack({label: "markNeedsPaint() called for " + dart.str(this)});
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2312, 14, "() {\n        if (debugPrintMarkNeedsPaintStacks)\n          debugPrintStack(label: 'markNeedsPaint() called for $this');\n        return true;\n      }()");
        if (!layer$.OffsetLayer.is(this[_layerHandle].layer)) dart.assertFailed(null, I[4], 2319, 14, "_layerHandle.layer is OffsetLayer");
        if (this.owner != null) {
          dart.nullCheck(this.owner)[_nodesNeedingPaint][$add](this);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      } else if (object$.RenderObject.is(this.parent)) {
        let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
        parent.markNeedsPaint();
        if (!parent[$_equals](this.parent)) dart.assertFailed(null, I[4], 2327, 14, "parent == this.parent");
      } else {
        if (!dart.fn(() => {
          if (debug$0.debugPrintMarkNeedsPaintStacks) assertions.debugPrintStack({label: "markNeedsPaint() called for " + dart.str(this) + " (root of render tree)"});
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2329, 14, "() {\n        if (debugPrintMarkNeedsPaintStacks)\n          debugPrintStack(\n              label: 'markNeedsPaint() called for $this (root of render tree)');\n        return true;\n      }()");
        if (this.owner != null) dart.nullCheck(this.owner).requestVisualUpdate();
      }
    }
    [_skippedPaintingOnLayer]() {
      if (!this.attached) dart.assertFailed(null, I[4], 2349, 12, "attached");
      if (!this.isRepaintBoundary) dart.assertFailed(null, I[4], 2350, 12, "isRepaintBoundary");
      if (!this[_needsPaint]) dart.assertFailed(null, I[4], 2351, 12, "_needsPaint");
      if (!(this[_layerHandle].layer != null)) dart.assertFailed(null, I[4], 2352, 12, "_layerHandle.layer != null");
      if (!!dart.nullCheck(this[_layerHandle].layer).attached) dart.assertFailed(null, I[4], 2353, 12, "!_layerHandle.layer!.attached");
      let node = this.parent;
      while (object$.RenderObject.is(node)) {
        if (node.isRepaintBoundary) {
          if (node[_layerHandle].layer == null) break;
          if (dart.nullCheck(node[_layerHandle].layer).attached) break;
          node[_needsPaint] = true;
        }
        node = node.parent;
      }
    }
    scheduleInitialPaint(rootLayer) {
      if (!rootLayer.attached) dart.assertFailed(null, I[4], 2374, 12, "rootLayer.attached");
      if (!this.attached) dart.assertFailed(null, I[4], 2375, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, I[4], 2376, 12, "parent is! RenderObject");
      if (!!dart.nullCheck(this.owner)[_debugDoingPaint]) dart.assertFailed(null, I[4], 2377, 12, "!owner!._debugDoingPaint");
      if (!this.isRepaintBoundary) dart.assertFailed(null, I[4], 2378, 12, "isRepaintBoundary");
      if (!(this[_layerHandle].layer == null)) dart.assertFailed(null, I[4], 2379, 12, "_layerHandle.layer == null");
      this[_layerHandle].layer = rootLayer;
      if (!this[_needsPaint]) dart.assertFailed(null, I[4], 2381, 12, "_needsPaint");
      dart.nullCheck(this.owner)[_nodesNeedingPaint][$add](this);
    }
    replaceRootLayer(rootLayer) {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 2391, 12, "!_debugDisposed");
      if (!rootLayer.attached) dart.assertFailed(null, I[4], 2392, 12, "rootLayer.attached");
      if (!this.attached) dart.assertFailed(null, I[4], 2393, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, I[4], 2394, 12, "parent is! RenderObject");
      if (!!dart.nullCheck(this.owner)[_debugDoingPaint]) dart.assertFailed(null, I[4], 2395, 12, "!owner!._debugDoingPaint");
      if (!this.isRepaintBoundary) dart.assertFailed(null, I[4], 2396, 12, "isRepaintBoundary");
      if (!(this[_layerHandle].layer != null)) dart.assertFailed(null, I[4], 2398, 9, "_layerHandle.layer != null");
      dart.nullCheck(this[_layerHandle].layer).detach();
      this[_layerHandle].layer = rootLayer;
      this.markNeedsPaint();
    }
    [_paintWithContext](context, offset) {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 2405, 12, "!_debugDisposed");
      if (!dart.fn(() => {
        if (this[_debugDoingThisPaint]) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to paint a RenderObject reentrantly."), this.describeForError("The following RenderObject was already being painted when it was " + "painted again"), new assertions.ErrorDescription.new("Since this typically indicates an infinite recursion, it is " + "disallowed.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2406, 12, "() {\n      if (_debugDoingThisPaint) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Tried to paint a RenderObject reentrantly.'),\n          describeForError(\n            'The following RenderObject was already being painted when it was '\n            'painted again',\n          ),\n          ErrorDescription(\n            'Since this typically indicates an infinite recursion, it is '\n            'disallowed.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      if (this[_needsLayout]) return;
      if (!false && debug$0.debugProfilePaintsEnabled) {
        let debugTimelineArguments = debug.timelineArgumentsIndicatingLandmarkEvent;
        if (!dart.fn(() => {
          debugTimelineArguments = this.toDiagnosticsNode().toTimelineArguments();
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2433, 14, "() {\n        debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();\n        return true;\n      }()");
        developer.Timeline.startSync(dart.str(this[$runtimeType]), {arguments: debugTimelineArguments});
      }
      if (!dart.fn(() => {
        if (this[_needsCompositingBitsUpdate]) {
          if (object$.RenderObject.is(this.parent)) {
            let parent = object$.RenderObject.as(dart.nullCheck(this.parent));
            let visitedByParent = false;
            parent.visitChildren(dart.fn(child => {
              if (child[$_equals](this)) {
                visitedByParent = true;
              }
            }, T$.RenderObjectTovoid()));
            if (!visitedByParent) {
              dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A RenderObject was not visited by the parent's visitChildren " + "during paint."), parent.describeForError("The parent was"), this.describeForError("The child that was not visited was"), new assertions.ErrorDescription.new("A RenderObject with children must implement visitChildren and " + "call the visitor exactly once for each child; it also should not " + "paint children that were removed with dropChild."), new assertions.ErrorHint.new("This usually indicates an error in the Flutter framework itself.")])));
            }
          }
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to paint a RenderObject before its compositing bits were " + "updated."), this.describeForError("The following RenderObject was marked as having dirty compositing " + "bits at the time that it was painted"), new assertions.ErrorDescription.new("A RenderObject that still has dirty compositing bits cannot be " + "painted because this indicates that the tree has not yet been " + "properly configured for creating the layer tree."), new assertions.ErrorHint.new("This usually indicates an error in the Flutter framework itself.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2442, 12, "() {\n      if (_needsCompositingBitsUpdate) {\n        if (parent is RenderObject) {\n          final RenderObject parent = this.parent! as RenderObject;\n          bool visitedByParent = false;\n          parent.visitChildren((RenderObject child) {\n            if (child == this) {\n              visitedByParent = true;\n            }\n          });\n          if (!visitedByParent) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary(\n                \"A RenderObject was not visited by the parent's visitChildren \"\n                'during paint.',\n              ),\n              parent.describeForError(\n                'The parent was',\n              ),\n              describeForError(\n                'The child that was not visited was',\n              ),\n              ErrorDescription(\n                'A RenderObject with children must implement visitChildren and '\n                'call the visitor exactly once for each child; it also should not '\n                'paint children that were removed with dropChild.',\n              ),\n              ErrorHint(\n                'This usually indicates an error in the Flutter framework itself.',\n              ),\n            ]);\n          }\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'Tried to paint a RenderObject before its compositing bits were '\n            'updated.',\n          ),\n          describeForError(\n            'The following RenderObject was marked as having dirty compositing '\n            'bits at the time that it was painted',\n          ),\n          ErrorDescription(\n            'A RenderObject that still has dirty compositing bits cannot be '\n            'painted because this indicates that the tree has not yet been '\n            'properly configured for creating the layer tree.',\n          ),\n          ErrorHint(\n            'This usually indicates an error in the Flutter framework itself.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      let debugLastActivePaint = null;
      if (!dart.fn(() => {
        this[_debugDoingThisPaint] = true;
        debugLastActivePaint = object$.RenderObject._debugActivePaint;
        object$.RenderObject._debugActivePaint = this;
        if (!(!this.isRepaintBoundary || this[_layerHandle].layer != null)) dart.assertFailed(null, I[4], 2501, 14, "!isRepaintBoundary || _layerHandle.layer != null");
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2497, 12, "() {\n      _debugDoingThisPaint = true;\n      debugLastActivePaint = _debugActivePaint;\n      _debugActivePaint = this;\n      assert(!isRepaintBoundary || _layerHandle.layer != null);\n      return true;\n    }()");
      this[_needsPaint] = false;
      try {
        this.paint(context, offset);
        if (!!this[_needsLayout]) dart.assertFailed(null, I[4], 2508, 11, "!_needsLayout");
        if (!!this[_needsPaint]) dart.assertFailed(null, I[4], 2510, 11, "!_needsPaint");
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stack = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          this[_debugReportException]("paint", e, stack);
        } else
          throw e$;
      }
      if (!dart.fn(() => {
        this.debugPaint(context, offset);
        object$.RenderObject._debugActivePaint = debugLastActivePaint;
        this[_debugDoingThisPaint] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 2514, 12, "() {\n      debugPaint(context, offset);\n      _debugActivePaint = debugLastActivePaint;\n      _debugDoingThisPaint = false;\n      return true;\n    }()");
      if (!false && debug$0.debugProfilePaintsEnabled) developer.Timeline.finishSync();
    }
    debugPaint(context, offset) {
    }
    paint(context, offset) {
    }
    applyPaintTransform(child, transform) {
      object$.RenderObject.as(child);
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[4], 2558, 12, "child.parent == this");
    }
    getTransformTo(ancestor) {
      let ancestorSpecified = ancestor != null;
      if (!this.attached) dart.assertFailed(null, I[4], 2575, 12, "attached");
      if (ancestor == null) {
        let rootNode = dart.nullCheck(this.owner).rootNode;
        if (object$.RenderObject.is(rootNode)) ancestor = rootNode;
      }
      let renderers = T$.JSArrayOfRenderObject().of([]);
      for (let renderer = this; !renderer[$_equals](ancestor); renderer = object$.RenderObject.as(dart.nullCheck(renderer.parent))) {
        renderers[$add](renderer);
        if (!(renderer.parent != null)) dart.assertFailed(null, I[4], 2586, 11, "renderer.parent != null");
      }
      if (ancestorSpecified) renderers[$add](dart.nullCheck(ancestor));
      let transform = vector_math_64.Matrix4.identity();
      for (let index = renderers[$length] - 1; index > 0; index = index - 1) {
        renderers[$_get](index).applyPaintTransform(renderers[$_get](index - 1), transform);
      }
      return transform;
    }
    describeApproximatePaintClip(child) {
      object$.RenderObject.as(child);
      return null;
    }
    describeSemanticsClip(child) {
      T$.RenderObjectN().as(child);
      return null;
    }
    scheduleInitialSemantics() {
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 2643, 12, "!_debugDisposed");
      if (!this.attached) dart.assertFailed(null, I[4], 2644, 12, "attached");
      if (!!object$.RenderObject.is(this.parent)) dart.assertFailed(null, I[4], 2645, 12, "parent is! RenderObject");
      if (!!dart.nullCheck(this.owner)[_debugDoingSemantics]) dart.assertFailed(null, I[4], 2646, 12, "!owner!._debugDoingSemantics");
      if (!(this[_semantics] == null)) dart.assertFailed(null, I[4], 2647, 12, "_semantics == null");
      if (!this[_needsSemanticsUpdate]) dart.assertFailed(null, I[4], 2648, 12, "_needsSemanticsUpdate");
      if (!(dart.nullCheck(this.owner)[_semanticsOwner] != null)) dart.assertFailed(null, I[4], 2649, 12, "owner!._semanticsOwner != null");
      dart.nullCheck(this.owner)[_nodesNeedingSemantics].add(this);
      dart.nullCheck(this.owner).requestVisualUpdate();
    }
    describeSemanticsConfiguration(config) {
    }
    sendSemanticsEvent(semanticsEvent) {
      if (dart.nullCheck(this.owner).semanticsOwner == null) return;
      if (this[_semantics] != null && !dart.nullCheck(this[_semantics]).isMergedIntoParent) {
        dart.nullCheck(this[_semantics]).sendEvent(semanticsEvent);
      } else if (this.parent != null) {
        let renderParent = object$.RenderObject.as(dart.nullCheck(this.parent));
        renderParent.sendSemanticsEvent(semanticsEvent);
      }
    }
    get [_semanticsConfiguration]() {
      if (this[_cachedSemanticsConfiguration] == null) {
        this[_cachedSemanticsConfiguration] = new semantics.SemanticsConfiguration.new();
        this.describeSemanticsConfiguration(dart.nullCheck(this[_cachedSemanticsConfiguration]));
      }
      return dart.nullCheck(this[_cachedSemanticsConfiguration]);
    }
    get debugSemantics() {
      if (!false) {
        return this[_semantics];
      }
      return null;
    }
    clearSemantics() {
      this[_needsSemanticsUpdate] = true;
      this[_semantics] = null;
      this.visitChildren(dart.fn(child => {
        child.clearSemantics();
      }, T$.RenderObjectTovoid()));
    }
    markNeedsSemanticsUpdate() {
      let t26;
      if (!!this[_debugDisposed$]) dart.assertFailed(null, I[4], 2765, 12, "!_debugDisposed");
      if (!(!this.attached || !dart.nullCheck(this.owner)[_debugDoingSemantics])) dart.assertFailed(null, I[4], 2766, 12, "!attached || !owner!._debugDoingSemantics");
      if (!this.attached || dart.nullCheck(this.owner)[_semanticsOwner] == null) {
        this[_cachedSemanticsConfiguration] = null;
        return;
      }
      let wasSemanticsBoundary = this[_semantics] != null && (t26 = this[_cachedSemanticsConfiguration], t26 == null ? null : t26.isSemanticBoundary) === true;
      this[_cachedSemanticsConfiguration] = null;
      let isEffectiveSemanticsBoundary = this[_semanticsConfiguration].isSemanticBoundary && wasSemanticsBoundary;
      let node = this;
      while (!isEffectiveSemanticsBoundary && object$.RenderObject.is(node.parent)) {
        if (!node[$_equals](this) && node[_needsSemanticsUpdate]) break;
        node[_needsSemanticsUpdate] = true;
        node = object$.RenderObject.as(dart.nullCheck(node.parent));
        isEffectiveSemanticsBoundary = node[_semanticsConfiguration].isSemanticBoundary;
        if (isEffectiveSemanticsBoundary && node[_semantics] == null) {
          return;
        }
      }
      if (!node[$_equals](this) && this[_semantics] != null && this[_needsSemanticsUpdate]) {
        dart.nullCheck(this.owner)[_nodesNeedingSemantics].remove(this);
      }
      if (!node[_needsSemanticsUpdate]) {
        node[_needsSemanticsUpdate] = true;
        if (this.owner != null) {
          if (!(node[_semanticsConfiguration].isSemanticBoundary || !object$.RenderObject.is(node.parent))) dart.assertFailed(null, I[4], 2811, 16, "node._semanticsConfiguration.isSemanticBoundary ||\n            node.parent is! RenderObject");
          dart.nullCheck(this.owner)[_nodesNeedingSemantics].add(node);
          dart.nullCheck(this.owner).requestVisualUpdate();
        }
      }
    }
    [_updateSemantics]() {
      let t27, t26, t26$, t26$0, t26$1, t26$2, t26$3;
      if (!(this[_semanticsConfiguration].isSemanticBoundary || !object$.RenderObject.is(this.parent))) dart.assertFailed(null, I[4], 2822, 9, "_semanticsConfiguration.isSemanticBoundary || parent is! RenderObject");
      if (this[_needsLayout]) {
        return;
      }
      let fragment = this[_getSemanticsForParent]({mergeIntoParent: (t26$ = (t26 = this[_semantics], t26 == null ? null : (t27 = t26.parent, t27 == null ? null : t27.isPartOfNodeMerging)), t26$ == null ? false : t26$)});
      if (!object$._InterestingSemanticsFragment.is(fragment)) dart.assertFailed(null, I[4], 2831, 12, "fragment is _InterestingSemanticsFragment");
      let interestingFragment = object$._InterestingSemanticsFragment.as(fragment);
      let result = T$.JSArrayOfSemanticsNode().of([]);
      interestingFragment.compileChildren({parentSemanticsClipRect: (t26$0 = this[_semantics], t26$0 == null ? null : t26$0.parentSemanticsClipRect), parentPaintClipRect: (t26$1 = this[_semantics], t26$1 == null ? null : t26$1.parentPaintClipRect), elevationAdjustment: (t26$3 = (t26$2 = this[_semantics], t26$2 == null ? null : t26$2.elevationAdjustment), t26$3 == null ? 0.0 : t26$3), result: result});
      let node = result[$single];
      if (!(interestingFragment.config == null && node[$_equals](this[_semantics]))) dart.assertFailed(null, I[4], 2843, 12, "interestingFragment.config == null && node == _semantics");
    }
    [_getSemanticsForParent](opts) {
      let mergeIntoParent = opts && 'mergeIntoParent' in opts ? opts.mergeIntoParent : null;
      if (!(mergeIntoParent !== null)) dart.assertFailed(null, I[4], 2850, 12, "mergeIntoParent != null");
      if (!!this[_needsLayout]) dart.assertFailed("Updated layout information required for " + dart.str(this) + " to calculate semantics.", I[4], 2851, 12, "!_needsLayout");
      let config = this[_semanticsConfiguration];
      let dropSemanticsOfPreviousSiblings = config.isBlockingSemanticsOfPreviouslyPaintedNodes;
      let producesForkingFragment = !config.hasBeenAnnotated && !config.isSemanticBoundary;
      let fragments = T$.JSArrayOf_InterestingSemanticsFragment().of([]);
      let toBeMarkedExplicit = T$.LinkedHashSetOf_InterestingSemanticsFragment().new();
      let childrenMergeIntoParent = mergeIntoParent || config.isMergingSemanticsOfDescendants;
      this.visitChildrenForSemantics(dart.fn(renderChild => {
        if (!!this[_needsLayout]) dart.assertFailed(null, I[4], 2868, 14, "!_needsLayout");
        let parentFragment = renderChild[_getSemanticsForParent]({mergeIntoParent: childrenMergeIntoParent});
        if (parentFragment.dropsSemanticsOfPreviousSiblings) {
          fragments[$clear]();
          toBeMarkedExplicit.clear();
          if (!config.isSemanticBoundary) dropSemanticsOfPreviousSiblings = true;
        }
        for (let fragment of parentFragment.interestingFragments) {
          fragments[$add](fragment);
          fragment.addAncestor(this);
          fragment.addTags(config.tagsForChildren);
          if (config.explicitChildNodes || !object$.RenderObject.is(this.parent)) {
            fragment.markAsExplicit();
            continue;
          }
          if (!fragment.hasConfigForParent || producesForkingFragment) continue;
          if (!config.isCompatibleWith(fragment.config)) toBeMarkedExplicit.add(fragment);
          let siblingLength = fragments[$length] - 1;
          for (let i = 0; i < siblingLength; i = i + 1) {
            let siblingFragment = fragments[$_get](i);
            if (!dart.nullCheck(fragment.config).isCompatibleWith(siblingFragment.config)) {
              toBeMarkedExplicit.add(fragment);
              toBeMarkedExplicit.add(siblingFragment);
            }
          }
        }
      }, T$.RenderObjectTovoid()));
      for (let fragment of toBeMarkedExplicit)
        fragment.markAsExplicit();
      this[_needsSemanticsUpdate] = false;
      let result = null;
      if (!object$.RenderObject.is(this.parent)) {
        if (!!config.hasBeenAnnotated) dart.assertFailed(null, I[4], 2909, 14, "!config.hasBeenAnnotated");
        if (!!mergeIntoParent) dart.assertFailed(null, I[4], 2910, 14, "!mergeIntoParent");
        result = new object$._RootSemanticsFragment.new({owner: this, dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
      } else if (producesForkingFragment) {
        result = new object$._ContainerSemanticsFragment.new({dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
      } else {
        result = new object$._SwitchableSemanticsFragment.new({config: config, mergeIntoParent: mergeIntoParent, owner: this, dropsSemanticsOfPreviousSiblings: dropSemanticsOfPreviousSiblings});
        if (config.isSemanticBoundary) {
          let fragment = object$._SwitchableSemanticsFragment.as(result);
          fragment.markAsExplicit();
        }
      }
      result.addAll(fragments);
      return result;
    }
    visitChildrenForSemantics(visitor) {
      this.visitChildren(visitor);
    }
    assembleSemanticsNode(node, config, children) {
      if (!node[$_equals](this[_semantics])) dart.assertFailed(null, I[4], 2969, 12, "node == _semantics");
      node.updateWith({config: config, childrenInInversePaintOrder: T$.ListOfSemanticsNode().as(children)});
    }
    handleEvent(event, entry) {
      hit_test.HitTestEntry.as(entry);
    }
    toStringShort() {
      let header = diagnostics.describeIdentity(this);
      if (!false) {
        if (this[_debugDisposed$]) {
          header = header + " DISPOSED";
          return header;
        }
        if (this[_relayoutBoundary] != null && !dart.equals(this[_relayoutBoundary], this)) {
          let count = 1;
          let target = T$.RenderObjectN().as(this.parent);
          while (target != null && !dart.equals(target, this[_relayoutBoundary])) {
            target = T$.RenderObjectN().as(target.parent);
            count = count + 1;
          }
          header = header + (" relayoutBoundary=up" + dart.str(count));
        }
        if (this[_needsLayout]) header = header + " NEEDS-LAYOUT";
        if (this[_needsPaint]) header = header + " NEEDS-PAINT";
        if (this[_needsCompositingBitsUpdate]) header = header + " NEEDS-COMPOSITING-BITS-UPDATE";
        if (!this.attached) header = header + " DETACHED";
      }
      return header;
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[14] || CT.C14;
      return this.toStringShort();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : "";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[15] || CT.C15;
      let debugPreviousActiveLayout = null;
      if (!dart.fn(() => {
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = null;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 3042, 12, "() {\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = null;\n      return true;\n    }()");
      let result = super.toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      if (!dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 3052, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      return true;\n    }()");
      return result;
    }
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C[15] || CT.C15;
      let debugPreviousActiveLayout = null;
      if (!dart.fn(() => {
        debugPreviousActiveLayout = object$.RenderObject._debugActiveLayout;
        object$.RenderObject._debugActiveLayout = null;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 3070, 12, "() {\n      debugPreviousActiveLayout = _debugActiveLayout;\n      _debugActiveLayout = null;\n      return true;\n    }()");
      let result = super.toStringShallow({joiner: joiner, minLevel: minLevel});
      if (!dart.fn(() => {
        object$.RenderObject._debugActiveLayout = debugPreviousActiveLayout;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 3077, 12, "() {\n      _debugActiveLayout = debugPreviousActiveLayout;\n      return true;\n    }()");
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("needsCompositing", {value: this[_needsCompositing], ifTrue: "needs compositing"}));
      properties.add(new (T$.DiagnosticsPropertyOfObjectN()).new("creator", this.debugCreator, {defaultValue: null, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (T$.DiagnosticsPropertyOfParentData()).new("parentData", this.parentData, {tooltip: this[_debugCanParentUseSize] === true ? "can use size" : null, missingIfNull: true}));
      properties.add(new (T$.DiagnosticsPropertyOfConstraints()).new("constraints", this[_constraints], {missingIfNull: true}));
      properties.add(new (T$.DiagnosticsPropertyOfContainerLayer()).new("layer", this[_layerHandle].layer, {defaultValue: null}));
      properties.add(new (T$.DiagnosticsPropertyOfSemanticsNode()).new("semantics node", this[_semantics], {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("isBlockingSemanticsOfPreviouslyPaintedNodes", {value: this[_semanticsConfiguration].isBlockingSemanticsOfPreviouslyPaintedNodes, ifTrue: "blocks semantics of earlier render objects below the common boundary"}));
      properties.add(new diagnostics.FlagProperty.new("isSemanticBoundary", {value: this[_semanticsConfiguration].isSemanticBoundary, ifTrue: "semantic boundary"}));
    }
    debugDescribeChildren() {
      return T$.JSArrayOfDiagnosticsNode().of([]);
    }
    showOnScreen(opts) {
      let t26;
      let descendant = opts && 'descendant' in opts ? opts.descendant : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let duration = opts && 'duration' in opts ? opts.duration : C[16] || CT.C16;
      let curve = opts && 'curve' in opts ? opts.curve : C[17] || CT.C17;
      if (object$.RenderObject.is(this.parent)) {
        let renderParent = object$.RenderObject.as(dart.nullCheck(this.parent));
        renderParent.showOnScreen({descendant: (t26 = descendant, t26 == null ? this : t26), rect: rect, duration: duration, curve: curve});
      }
    }
    describeForError(name, opts) {
      let style = opts && 'style' in opts ? opts.style : C[18] || CT.C18;
      return this.toDiagnosticsNode({name: name, style: style});
    }
  };
  (object$.RenderObject.new = function() {
    this[_debugDisposed$] = false;
    this[parentData] = null;
    this[debugCreator$] = null;
    this[_debugDoingThisResize] = false;
    this[_debugDoingThisLayout] = false;
    this[_debugCanParentUseSize] = null;
    this[_debugMutationsLocked] = false;
    this[_needsLayout] = true;
    this[_relayoutBoundary] = null;
    this[_doingThisLayoutWithCallback] = false;
    this[_constraints] = null;
    this[_debugDoingThisPaint] = false;
    this[_layerHandle] = new (T$.LayerHandleOfContainerLayer()).new();
    this[_needsCompositingBitsUpdate] = false;
    this[__RenderObject__needsCompositing] = null;
    this[_needsPaint] = true;
    this[_cachedSemanticsConfiguration] = null;
    this[_needsSemanticsUpdate] = true;
    this[_semantics] = null;
    object$.RenderObject.__proto__.new.call(this);
    this[_needsCompositing] = this.isRepaintBoundary || this.alwaysNeedsCompositing;
  }).prototype = object$.RenderObject.prototype;
  dart.addTypeTests(object$.RenderObject);
  dart.addTypeCaches(object$.RenderObject);
  object$.RenderObject[dart.implements] = () => [hit_test.HitTestTarget];
  dart.setMethodSignature(object$.RenderObject, () => ({
    __proto__: dart.getMethods(object$.RenderObject.__proto__),
    reassemble: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    setupParentData: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    visitChildren: dart.fnType(dart.void, [dart.fnType(dart.void, [object$.RenderObject])]),
    [_debugReportException]: dart.fnType(dart.void, [core.String, core.Object, core.StackTrace]),
    [_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout]: dart.fnType(core.bool, []),
    markNeedsLayout: dart.fnType(dart.void, []),
    markParentNeedsLayout: dart.fnType(dart.void, []),
    markNeedsLayoutForSizedByParentChange: dart.fnType(dart.void, []),
    [_cleanRelayoutBoundary]: dart.fnType(dart.void, []),
    scheduleInitialLayout: dart.fnType(dart.void, []),
    [_layoutWithoutResize]: dart.fnType(dart.void, []),
    layout: dart.fnType(dart.void, [object$.Constraints], {parentUsesSize: core.bool}, {}),
    debugResetSize: dart.fnType(dart.void, []),
    invokeLayoutCallback: dart.gFnType(T => [dart.void, [dart.fnType(dart.void, [T])]], T => [object$.Constraints]),
    rotate: dart.fnType(dart.void, [], {newAngle: dart.nullable(core.int), oldAngle: dart.nullable(core.int), time: dart.nullable(core.Duration)}, {}),
    debugRegisterRepaintBoundaryPaint: dart.fnType(dart.void, [], {includedChild: core.bool, includedParent: core.bool}, {}),
    markNeedsCompositingBitsUpdate: dart.fnType(dart.void, []),
    [_updateCompositingBits]: dart.fnType(dart.void, []),
    markNeedsPaint: dart.fnType(dart.void, []),
    [_skippedPaintingOnLayer]: dart.fnType(dart.void, []),
    scheduleInitialPaint: dart.fnType(dart.void, [layer$.ContainerLayer]),
    replaceRootLayer: dart.fnType(dart.void, [layer$.OffsetLayer]),
    [_paintWithContext]: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    debugPaint: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    paint: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    applyPaintTransform: dart.fnType(dart.void, [dart.nullable(core.Object), vector_math_64.Matrix4]),
    getTransformTo: dart.fnType(vector_math_64.Matrix4, [dart.nullable(object$.RenderObject)]),
    describeApproximatePaintClip: dart.fnType(dart.nullable(ui.Rect), [dart.nullable(core.Object)]),
    describeSemanticsClip: dart.fnType(dart.nullable(ui.Rect), [dart.nullable(core.Object)]),
    scheduleInitialSemantics: dart.fnType(dart.void, []),
    describeSemanticsConfiguration: dart.fnType(dart.void, [semantics.SemanticsConfiguration]),
    sendSemanticsEvent: dart.fnType(dart.void, [semantics_event.SemanticsEvent]),
    clearSemantics: dart.fnType(dart.void, []),
    markNeedsSemanticsUpdate: dart.fnType(dart.void, []),
    [_updateSemantics]: dart.fnType(dart.void, []),
    [_getSemanticsForParent]: dart.fnType(object$._SemanticsFragment, [], {}, {mergeIntoParent: core.bool}),
    visitChildrenForSemantics: dart.fnType(dart.void, [dart.fnType(dart.void, [object$.RenderObject])]),
    assembleSemanticsNode: dart.fnType(dart.void, [semantics.SemanticsNode, semantics.SemanticsConfiguration, core.Iterable$(semantics.SemanticsNode)]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent, dart.nullable(core.Object)]),
    showOnScreen: dart.fnType(dart.void, [], {curve: curves.Curve, descendant: dart.nullable(object$.RenderObject), duration: core.Duration, rect: dart.nullable(ui.Rect)}, {}),
    describeForError: dart.fnType(diagnostics.DiagnosticsNode, [core.String], {style: diagnostics.DiagnosticsTreeStyle}, {})
  }));
  dart.setStaticMethodSignature(object$.RenderObject, () => ['_cleanChildRelayoutBoundary']);
  dart.setGetterSignature(object$.RenderObject, () => ({
    __proto__: dart.getGetters(object$.RenderObject.__proto__),
    debugDisposed: dart.nullable(core.bool),
    debugDoingThisResize: core.bool,
    debugDoingThisLayout: core.bool,
    debugCanParentUseSize: core.bool,
    [_debugCanPerformMutations]: core.bool,
    owner: dart.nullable(object$.PipelineOwner),
    debugNeedsLayout: core.bool,
    debugDoingThisLayoutWithCallback: core.bool,
    constraints: object$.Constraints,
    sizedByParent: core.bool,
    debugDoingThisPaint: core.bool,
    isRepaintBoundary: core.bool,
    alwaysNeedsCompositing: core.bool,
    layer: dart.nullable(layer$.ContainerLayer),
    debugLayer: dart.nullable(layer$.ContainerLayer),
    [_needsCompositing]: core.bool,
    needsCompositing: core.bool,
    debugNeedsPaint: core.bool,
    [_semanticsConfiguration]: semantics.SemanticsConfiguration,
    debugSemantics: dart.nullable(semantics.SemanticsNode)
  }));
  dart.setSetterSignature(object$.RenderObject, () => ({
    __proto__: dart.getSetters(object$.RenderObject.__proto__),
    layer: dart.nullable(layer$.ContainerLayer),
    [_needsCompositing]: core.bool
  }));
  dart.setStaticGetterSignature(object$.RenderObject, () => ['debugActiveLayout', 'debugActivePaint']);
  dart.setLibraryUri(object$.RenderObject, I[5]);
  dart.setFieldSignature(object$.RenderObject, () => ({
    __proto__: dart.getFields(object$.RenderObject.__proto__),
    [_debugDisposed$]: dart.fieldType(core.bool),
    parentData: dart.fieldType(dart.nullable(object$.ParentData)),
    debugCreator: dart.fieldType(dart.nullable(core.Object)),
    [_debugDoingThisResize]: dart.fieldType(core.bool),
    [_debugDoingThisLayout]: dart.fieldType(core.bool),
    [_debugCanParentUseSize]: dart.fieldType(dart.nullable(core.bool)),
    [_debugMutationsLocked]: dart.fieldType(core.bool),
    [_needsLayout]: dart.fieldType(core.bool),
    [_relayoutBoundary]: dart.fieldType(dart.nullable(object$.RenderObject)),
    [_doingThisLayoutWithCallback]: dart.fieldType(core.bool),
    [_constraints]: dart.fieldType(dart.nullable(object$.Constraints)),
    [_debugDoingThisPaint]: dart.fieldType(core.bool),
    [_layerHandle]: dart.finalFieldType(layer$.LayerHandle$(layer$.ContainerLayer)),
    [_needsCompositingBitsUpdate]: dart.fieldType(core.bool),
    [__RenderObject__needsCompositing]: dart.fieldType(dart.nullable(core.bool)),
    [_needsPaint]: dart.fieldType(core.bool),
    [_cachedSemanticsConfiguration]: dart.fieldType(dart.nullable(semantics.SemanticsConfiguration)),
    [_needsSemanticsUpdate]: dart.fieldType(core.bool),
    [_semantics]: dart.fieldType(dart.nullable(semantics.SemanticsNode))
  }));
  dart.setStaticFieldSignature(object$.RenderObject, () => ['_debugActiveLayout', 'debugCheckingIntrinsics', '_debugActivePaint']);
  dart.defineExtensionMethods(object$.RenderObject, ['toString']);
  dart.defineLazy(object$.RenderObject, {
    /*object$.RenderObject._debugActiveLayout*/get _debugActiveLayout() {
      return null;
    },
    set _debugActiveLayout(_) {},
    /*object$.RenderObject.debugCheckingIntrinsics*/get debugCheckingIntrinsics() {
      return false;
    },
    set debugCheckingIntrinsics(_) {},
    /*object$.RenderObject._debugActivePaint*/get _debugActivePaint() {
      return null;
    },
    set _debugActivePaint(_) {}
  }, false);
  var _child = dart.privateName(object$, "_child");
  const _is_RenderObjectWithChildMixin_default = Symbol('_is_RenderObjectWithChildMixin_default');
  object$.RenderObjectWithChildMixin$ = dart.generic(ChildType => {
    var __t$ChildTypeN = () => (__t$ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    class RenderObjectWithChildMixin extends object$.RenderObject {}
    RenderObjectWithChildMixin[dart.mixinOn] = RenderObject => class RenderObjectWithChildMixin extends RenderObject {
      debugValidateChild(child) {
        if (!dart.fn(() => {
          if (!ChildType.is(child)) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " expected a child of type " + dart.str(dart.wrapType(ChildType)) + " but received a " + "child of type " + dart.str(child[$runtimeType]) + "."), new assertions.ErrorDescription.new("RenderObjects expect specific types of children because they " + "coordinate with their children during layout and paint. For " + "example, a RenderSliver cannot be the child of a RenderBox because " + "a RenderSliver does not understand the RenderBox layout protocol."), new assertions.ErrorSpacer.new(), new (T$.DiagnosticsPropertyOfObjectN()).new("The " + dart.str(this[$runtimeType]) + " that expected a " + dart.str(dart.wrapType(ChildType)) + " child was created by", this.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorSpacer.new(), new (T$.DiagnosticsPropertyOfObjectN()).new("The " + dart.str(child[$runtimeType]) + " that did not match the expected child type " + "was created by", child.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 3187, 12, "() {\n      if (child is! ChildType) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'A $runtimeType expected a child of type $ChildType but received a '\n            'child of type ${child.runtimeType}.',\n          ),\n          ErrorDescription(\n            'RenderObjects expect specific types of children because they '\n            'coordinate with their children during layout and paint. For '\n            'example, a RenderSliver cannot be the child of a RenderBox because '\n            'a RenderSliver does not understand the RenderBox layout protocol.',\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The $runtimeType that expected a $ChildType child was created by',\n            debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The ${child.runtimeType} that did not match the expected child type '\n            'was created by',\n            child.debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
        return true;
      }
      get child() {
        return this[_child];
      }
      set child(value) {
        __t$ChildTypeN().as(value);
        if (this[_child] != null) this.dropChild(dart.nullCheck(this[_child]));
        this[_child] = value;
        if (this[_child] != null) this.adoptChild(dart.nullCheck(this[_child]));
      }
      attach(owner) {
        object$.PipelineOwner.as(owner);
        super.attach(owner);
        if (this[_child] != null) dart.nullCheck(this[_child]).attach(owner);
      }
      detach() {
        super.detach();
        if (this[_child] != null) dart.nullCheck(this[_child]).detach();
      }
      redepthChildren() {
        if (this[_child] != null) this.redepthChild(dart.nullCheck(this[_child]));
      }
      visitChildren(visitor) {
        if (this[_child] != null) visitor(dart.nullCheck(this[_child]));
      }
      debugDescribeChildren() {
        return this.child != null ? T$.JSArrayOfDiagnosticsNode().of([dart.nullCheck(this.child).toDiagnosticsNode({name: "child"})]) : T$.JSArrayOfDiagnosticsNode().of([]);
      }
    };
    (RenderObjectWithChildMixin[dart.mixinNew] = function() {
      this[_child] = null;
    }).prototype = RenderObjectWithChildMixin.prototype;
    dart.addTypeTests(RenderObjectWithChildMixin);
    RenderObjectWithChildMixin.prototype[_is_RenderObjectWithChildMixin_default] = true;
    dart.addTypeCaches(RenderObjectWithChildMixin);
    RenderObjectWithChildMixin[dart.implements] = () => [object$.RenderObject];
    dart.setMethodSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getMethods(RenderObjectWithChildMixin.__proto__),
      debugValidateChild: dart.fnType(core.bool, [object$.RenderObject])
    }));
    dart.setGetterSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getGetters(RenderObjectWithChildMixin.__proto__),
      child: dart.nullable(ChildType)
    }));
    dart.setSetterSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getSetters(RenderObjectWithChildMixin.__proto__),
      child: dart.nullable(core.Object)
    }));
    dart.setLibraryUri(RenderObjectWithChildMixin, I[5]);
    dart.setFieldSignature(RenderObjectWithChildMixin, () => ({
      __proto__: dart.getFields(RenderObjectWithChildMixin.__proto__),
      [_child]: dart.fieldType(dart.nullable(ChildType))
    }));
    return RenderObjectWithChildMixin;
  });
  object$.RenderObjectWithChildMixin = object$.RenderObjectWithChildMixin$();
  dart.addTypeTests(object$.RenderObjectWithChildMixin, _is_RenderObjectWithChildMixin_default);
  var _cachedIntrinsicDimensions = dart.privateName(box, "_cachedIntrinsicDimensions");
  var _cachedDryLayoutSizes = dart.privateName(box, "_cachedDryLayoutSizes");
  var _computingThisDryLayout = dart.privateName(box, "_computingThisDryLayout");
  var _size$ = dart.privateName(box, "_size");
  var _cachedBaselines = dart.privateName(box, "_cachedBaselines");
  var _debugActivePointers = dart.privateName(box, "_debugActivePointers");
  var _computeIntrinsicDimension = dart.privateName(box, "_computeIntrinsicDimension");
  var _computeDryLayout = dart.privateName(box, "_computeDryLayout");
  var _owner$ = dart.privateName(box, "_owner");
  var _canBeUsedByParent$ = dart.privateName(box, "_canBeUsedByParent");
  var Color_value = dart.privateName(ui, "Color.value");
  box.RenderBox = class RenderBox extends object$.RenderObject {
    setupParentData(child) {
      object$.RenderObject.as(child);
      if (!box.BoxParentData.is(child.parentData)) child.parentData = new box.BoxParentData.new();
    }
    [_computeIntrinsicDimension](dimension, argument, computer) {
      if (!(object$.RenderObject.debugCheckingIntrinsics || !this.debugDoingThisResize)) dart.assertFailed(null, I[6], 1365, 12, "RenderObject.debugCheckingIntrinsics || !debugDoingThisResize");
      let shouldCache = true;
      if (!dart.fn(() => {
        if (object$.RenderObject.debugCheckingIntrinsics) shouldCache = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1367, 12, "() {\n      // we don't want the checked-mode intrinsic tests to affect\n      // who gets marked dirty, etc.\n      if (RenderObject.debugCheckingIntrinsics)\n        shouldCache = false;\n      return true;\n    }()");
      if (shouldCache) {
        let debugTimelineArguments = debug.timelineArgumentsIndicatingLandmarkEvent;
        if (!dart.fn(() => {
          if (debug$0.debugProfileLayoutsEnabled) {
            debugTimelineArguments = this.toDiagnosticsNode().toTimelineArguments();
          } else {
            debugTimelineArguments = T$.LinkedHashMapOfString$String().of(debugTimelineArguments);
          }
          debugTimelineArguments[$_set]("intrinsics dimension", diagnostics.describeEnum(dimension));
          debugTimelineArguments[$_set]("intrinsics argument", dart.str(argument));
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1376, 14, "() {\n        if (debugProfileLayoutsEnabled) {\n          debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();\n        } else {\n          debugTimelineArguments = Map<String, String>.of(debugTimelineArguments);\n        }\n        debugTimelineArguments['intrinsics dimension'] = describeEnum(dimension);\n        debugTimelineArguments['intrinsics argument'] = '$argument';\n        return true;\n      }()");
        if (!false) {
          if (debug$0.debugProfileLayoutsEnabled || box.RenderBox._debugIntrinsicsDepth === 0) {
            developer.Timeline.startSync(dart.str(this[$runtimeType]) + " intrinsics", {arguments: debugTimelineArguments});
          }
          box.RenderBox._debugIntrinsicsDepth = box.RenderBox._debugIntrinsicsDepth + 1;
        }
        this[_cachedIntrinsicDimensions] == null ? this[_cachedIntrinsicDimensions] = new (T$.LinkedMapOf_IntrinsicDimensionsCacheEntry$double()).new() : null;
        let result = dart.nullCheck(this[_cachedIntrinsicDimensions])[$putIfAbsent](new box._IntrinsicDimensionsCacheEntry.new(dimension, argument), dart.fn(() => computer(argument), T$.VoidTodouble()));
        if (!false) {
          box.RenderBox._debugIntrinsicsDepth = box.RenderBox._debugIntrinsicsDepth - 1;
          if (debug$0.debugProfileLayoutsEnabled || box.RenderBox._debugIntrinsicsDepth === 0) {
            developer.Timeline.finishSync();
          }
        }
        return result;
      }
      return computer(argument);
    }
    getMinIntrinsicWidth(height) {
      if (!dart.fn(() => {
        if (height === null) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMinIntrinsicWidth was null."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific height in mind, then pass double.infinity instead.")])));
        }
        if (height < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMinIntrinsicWidth was negative."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another height before passing it to " + "getMinIntrinsicWidth, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1428, 12, "() {\n      if (height == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMinIntrinsicWidth was null.'),\n          ErrorDescription('The argument to getMinIntrinsicWidth must not be negative or null.'),\n          ErrorHint('If you do not have a specific height in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (height < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMinIntrinsicWidth was negative.'),\n          ErrorDescription('The argument to getMinIntrinsicWidth must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another height before passing it to '\n            'getMinIntrinsicWidth, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.minWidth, height, dart.bind(this, 'computeMinIntrinsicWidth'));
    }
    computeMinIntrinsicWidth(height) {
      return 0.0;
    }
    getMaxIntrinsicWidth(height) {
      if (!dart.fn(() => {
        if (height === null) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMaxIntrinsicWidth was null."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific height in mind, then pass double.infinity instead.")])));
        }
        if (height < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The height argument to getMaxIntrinsicWidth was negative."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicWidth must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another height before passing it to " + "getMaxIntrinsicWidth, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1577, 12, "() {\n      if (height == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMaxIntrinsicWidth was null.'),\n          ErrorDescription('The argument to getMaxIntrinsicWidth must not be negative or null.'),\n          ErrorHint('If you do not have a specific height in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (height < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The height argument to getMaxIntrinsicWidth was negative.'),\n          ErrorDescription('The argument to getMaxIntrinsicWidth must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another height before passing it to '\n            'getMaxIntrinsicWidth, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.maxWidth, height, dart.bind(this, 'computeMaxIntrinsicWidth'));
    }
    computeMaxIntrinsicWidth(height) {
      return 0.0;
    }
    getMinIntrinsicHeight(width) {
      if (!dart.fn(() => {
        if (width === null) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMinIntrinsicHeight was null."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific width in mind, then pass double.infinity instead.")])));
        }
        if (width < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMinIntrinsicHeight was negative."), new assertions.ErrorDescription.new("The argument to getMinIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another width before passing it to " + "getMinIntrinsicHeight, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1660, 12, "() {\n      if (width == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMinIntrinsicHeight was null.'),\n          ErrorDescription('The argument to getMinIntrinsicHeight must not be negative or null.'),\n          ErrorHint('If you do not have a specific width in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (width < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMinIntrinsicHeight was negative.'),\n          ErrorDescription('The argument to getMinIntrinsicHeight must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another width before passing it to '\n            'getMinIntrinsicHeight, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.minHeight, width, dart.bind(this, 'computeMinIntrinsicHeight'));
    }
    computeMinIntrinsicHeight(width) {
      return 0.0;
    }
    getMaxIntrinsicHeight(width) {
      if (!dart.fn(() => {
        if (width === null) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMaxIntrinsicHeight was null."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you do not have a specific width in mind, then pass double.infinity instead.")])));
        }
        if (width < 0.0) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The width argument to getMaxIntrinsicHeight was negative."), new assertions.ErrorDescription.new("The argument to getMaxIntrinsicHeight must not be negative or null."), new assertions.ErrorHint.new("If you perform computations on another width before passing it to " + "getMaxIntrinsicHeight, consider using math.max() or double.clamp() " + "to force the value into the valid range.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1742, 12, "() {\n      if (width == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMaxIntrinsicHeight was null.'),\n          ErrorDescription('The argument to getMaxIntrinsicHeight must not be negative or null.'),\n          ErrorHint('If you do not have a specific width in mind, then pass double.infinity instead.'),\n        ]);\n      }\n      if (width < 0.0) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The width argument to getMaxIntrinsicHeight was negative.'),\n          ErrorDescription('The argument to getMaxIntrinsicHeight must not be negative or null.'),\n          ErrorHint(\n            'If you perform computations on another width before passing it to '\n            'getMaxIntrinsicHeight, consider using math.max() or double.clamp() '\n            'to force the value into the valid range.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      return this[_computeIntrinsicDimension](box._IntrinsicDimension.maxHeight, width, dart.bind(this, 'computeMaxIntrinsicHeight'));
    }
    computeMaxIntrinsicHeight(width) {
      return 0.0;
    }
    getDryLayout(constraints) {
      let shouldCache = true;
      if (!dart.fn(() => {
        if (object$.RenderObject.debugCheckingIntrinsics) shouldCache = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1831, 12, "() {\n      // we don't want the checked-mode intrinsic tests to affect\n      // who gets marked dirty, etc.\n      if (RenderObject.debugCheckingIntrinsics)\n        shouldCache = false;\n      return true;\n    }()");
      if (shouldCache) {
        let debugTimelineArguments = debug.timelineArgumentsIndicatingLandmarkEvent;
        if (!dart.fn(() => {
          if (debug$0.debugProfileLayoutsEnabled) {
            debugTimelineArguments = this.toDiagnosticsNode().toTimelineArguments();
          } else {
            debugTimelineArguments = T$.LinkedHashMapOfString$String().of(debugTimelineArguments);
          }
          debugTimelineArguments[$_set]("getDryLayout constraints", dart.str(constraints));
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1840, 14, "() {\n        if (debugProfileLayoutsEnabled) {\n          debugTimelineArguments = toDiagnosticsNode().toTimelineArguments();\n        } else {\n          debugTimelineArguments = Map<String, String>.of(debugTimelineArguments);\n        }\n        debugTimelineArguments['getDryLayout constraints'] = '$constraints';\n        return true;\n      }()");
        if (!false) {
          if (debug$0.debugProfileLayoutsEnabled || box.RenderBox._debugIntrinsicsDepth === 0) {
            developer.Timeline.startSync(dart.str(this[$runtimeType]) + ".getDryLayout", {arguments: debugTimelineArguments});
          }
          box.RenderBox._debugIntrinsicsDepth = box.RenderBox._debugIntrinsicsDepth + 1;
        }
        this[_cachedDryLayoutSizes] == null ? this[_cachedDryLayoutSizes] = new (T$.LinkedMapOfBoxConstraints$Size()).new() : null;
        let result = dart.nullCheck(this[_cachedDryLayoutSizes])[$putIfAbsent](constraints, dart.fn(() => this[_computeDryLayout](constraints), T$.VoidToSize()));
        if (!false) {
          box.RenderBox._debugIntrinsicsDepth = box.RenderBox._debugIntrinsicsDepth - 1;
          if (debug$0.debugProfileLayoutsEnabled || box.RenderBox._debugIntrinsicsDepth === 0) {
            developer.Timeline.finishSync();
          }
        }
        return result;
      }
      return this[_computeDryLayout](constraints);
    }
    [_computeDryLayout](constraints) {
      if (!dart.fn(() => {
        if (!!this[_computingThisDryLayout]) dart.assertFailed(null, I[6], 1873, 14, "!_computingThisDryLayout");
        this[_computingThisDryLayout] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1872, 12, "() {\n      assert(!_computingThisDryLayout);\n      _computingThisDryLayout = true;\n      return true;\n    }()");
      let result = this.computeDryLayout(constraints);
      if (!dart.fn(() => {
        if (!this[_computingThisDryLayout]) dart.assertFailed(null, I[6], 1879, 14, "_computingThisDryLayout");
        this[_computingThisDryLayout] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1878, 12, "() {\n      assert(_computingThisDryLayout);\n      _computingThisDryLayout = false;\n      return true;\n    }()");
      return result;
    }
    computeDryLayout(constraints) {
      if (!this.debugCannotComputeDryLayout({error: new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + object.objectRuntimeType(this, "RenderBox") + " class does not implement \"computeDryLayout\"."), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")]))})) dart.assertFailed(null, I[6], 1920, 12, "debugCannotComputeDryLayout(\n      error: FlutterError.fromParts(<DiagnosticsNode>[\n        ErrorSummary('The ${objectRuntimeType(this, 'RenderBox')} class does not implement \"computeDryLayout\".'),\n        ErrorHint(\n          'If you are not writing your own RenderBox subclass, then this is not\\n'\n          'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n        ),\n      ]),\n    )");
      return ui.Size.zero;
    }
    debugCannotComputeDryLayout(opts) {
      let reason = opts && 'reason' in opts ? opts.reason : null;
      let error = opts && 'error' in opts ? opts.error : null;
      if (!(reason == null !== (error == null))) dart.assertFailed(null, I[6], 1949, 12, "(reason == null) != (error == null)");
      if (!dart.fn(() => {
        if (!object$.RenderObject.debugCheckingIntrinsics) {
          if (reason != null) {
            if (!(error == null)) dart.assertFailed(null, I[6], 1953, 18, "error ==null");
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t26 = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + object.objectRuntimeType(this, "RenderBox") + " class does not support dry layout.")]);
              if (reason[$isNotEmpty]) t26.push(new assertions.ErrorDescription.new(reason));
              return t26;
            })()));
          }
          if (!(error != null)) dart.assertFailed(null, I[6], 1959, 16, "error != null");
          dart.throw(dart.nullCheck(error));
        }
        box.RenderBox._dryLayoutCalculationValid = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1950, 12, "() {\n      if (!RenderObject.debugCheckingIntrinsics) {\n        if (reason != null) {\n          assert(error ==null);\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The ${objectRuntimeType(this, 'RenderBox')} class does not support dry layout.'),\n            if (reason.isNotEmpty) ErrorDescription(reason),\n          ]);\n        }\n        assert(error != null);\n        throw error!;\n      }\n      _dryLayoutCalculationValid = false;\n      return true;\n    }()");
      return true;
    }
    get hasSize() {
      return this[_size$] != null;
    }
    get size() {
      if (!this.hasSize) dart.assertFailed("RenderBox was not laid out: " + this.toString(), I[6], 1982, 12, "hasSize");
      if (!dart.fn(() => {
        let _size = this[_size$];
        if (box._DebugSize.is(_size)) {
          if (!_size[_owner$][$_equals](this)) dart.assertFailed(null, I[6], 1986, 16, "_size._owner == this");
          if (object$.RenderObject.debugActiveLayout != null && !dart.nullCheck(object$.RenderObject.debugActiveLayout).debugDoingThisLayoutWithCallback) {
            if (!(this.debugDoingThisResize || this.debugDoingThisLayout || this[_computingThisDryLayout] || dart.equals(object$.RenderObject.debugActiveLayout, this.parent) && _size[_canBeUsedByParent$])) dart.assertFailed("RenderBox.size accessed beyond the scope of resize, layout, or " + "permitted parent access. RenderBox can always access its own size, " + "otherwise, the only object that is allowed to read RenderBox.size " + "is its parent, if they have said they will. It you hit this assert " + "trying to access a child's size, pass \"parentUsesSize: true\" to " + "that child's layout().", I[6], 1990, 13, "debugDoingThisResize || debugDoingThisLayout || _computingThisDryLayout ||\n              (RenderObject.debugActiveLayout == parent && _size._canBeUsedByParent)");
          }
          if (!dart.equals(_size, this[_size$])) dart.assertFailed(null, I[6], 2000, 16, "_size == this._size");
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 1983, 12, "() {\n      final Size? _size = this._size;\n      if (_size is _DebugSize) {\n        assert(_size._owner == this);\n        if (RenderObject.debugActiveLayout != null &&\n            !RenderObject.debugActiveLayout!.debugDoingThisLayoutWithCallback) {\n          assert(\n            debugDoingThisResize || debugDoingThisLayout || _computingThisDryLayout ||\n              (RenderObject.debugActiveLayout == parent && _size._canBeUsedByParent),\n            'RenderBox.size accessed beyond the scope of resize, layout, or '\n            'permitted parent access. RenderBox can always access its own size, '\n            'otherwise, the only object that is allowed to read RenderBox.size '\n            'is its parent, if they have said they will. It you hit this assert '\n            'trying to access a child\\'s size, pass \"parentUsesSize: true\" to '\n            \"that child's layout().\",\n          );\n        }\n        assert(_size == this._size);\n      }\n      return true;\n    }()");
      return dart.nullCheck(this[_size$]);
    }
    set size(value) {
      if (!!(this.debugDoingThisResize && this.debugDoingThisLayout)) dart.assertFailed(null, I[6], 2012, 12, "!(debugDoingThisResize && debugDoingThisLayout)");
      if (!(this.sizedByParent || !this.debugDoingThisResize)) dart.assertFailed(null, I[6], 2013, 12, "sizedByParent || !debugDoingThisResize");
      if (!dart.fn(() => {
        if (this.sizedByParent && this.debugDoingThisResize || !this.sizedByParent && this.debugDoingThisLayout) return true;
        if (!!this.debugDoingThisResize) dart.assertFailed(null, I[6], 2018, 14, "!debugDoingThisResize");
        let information = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderBox size setter called incorrectly.")]);
        if (this.debugDoingThisLayout) {
          if (!this.sizedByParent) dart.assertFailed(null, I[6], 2023, 16, "sizedByParent");
          information[$add](new assertions.ErrorDescription.new("It appears that the size setter was called from performLayout()."));
        } else {
          information[$add](new assertions.ErrorDescription.new("The size setter was called from outside layout (neither performResize() nor performLayout() were being run for this object)."));
          if (this.owner != null && dart.nullCheck(this.owner).debugDoingLayout) information[$add](new assertions.ErrorDescription.new("Only the object itself can set its size. It is a contract violation for other objects to set it."));
        }
        if (this.sizedByParent)
          information[$add](new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to true, it must set its size in performResize()."));
        else
          information[$add](new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to false, it must set its size in performLayout()."));
        dart.throw(new assertions.FlutterError.fromParts(information));
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2014, 12, "() {\n      if ((sizedByParent && debugDoingThisResize) ||\n          (!sizedByParent && debugDoingThisLayout))\n        return true;\n      assert(!debugDoingThisResize);\n      final List<DiagnosticsNode> information = <DiagnosticsNode>[\n        ErrorSummary('RenderBox size setter called incorrectly.'),\n      ];\n      if (debugDoingThisLayout) {\n        assert(sizedByParent);\n        information.add(ErrorDescription('It appears that the size setter was called from performLayout().'));\n      } else {\n        information.add(ErrorDescription(\n          'The size setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).',\n        ));\n        if (owner != null && owner!.debugDoingLayout)\n          information.add(ErrorDescription('Only the object itself can set its size. It is a contract violation for other objects to set it.'));\n      }\n      if (sizedByParent)\n        information.add(ErrorDescription('Because this RenderBox has sizedByParent set to true, it must set its size in performResize().'));\n      else\n        information.add(ErrorDescription('Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().'));\n      throw FlutterError.fromParts(information);\n    }()");
      if (!dart.fn(() => {
        value = this.debugAdoptSize(value);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2038, 12, "() {\n      value = debugAdoptSize(value);\n      return true;\n    }()");
      this[_size$] = value;
      if (!dart.fn(() => {
        this.debugAssertDoesMeetConstraints();
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2043, 12, "() {\n      debugAssertDoesMeetConstraints();\n      return true;\n    }()");
    }
    debugAdoptSize(value) {
      let result = value;
      if (!dart.fn(() => {
        if (box._DebugSize.is(value)) {
          if (!value[_owner$][$_equals](this)) {
            if (!dart.equals(value[_owner$].parent, this)) {
              dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The size property was assigned a size inappropriately."), this.describeForError("The following render object"), value[_owner$].describeForError("...was assigned a size obtained from"), new assertions.ErrorDescription.new("However, this second render object is not, or is no longer, a " + "child of the first, and it is therefore a violation of the " + "RenderBox layout protocol to use that size in the layout of the " + "first render object."), new assertions.ErrorHint.new("If the size was obtained at a time where it was valid to read " + "the size (because the second render object above was a child " + "of the first at the time), then it should be adopted using " + "debugAdoptSize at that time."), new assertions.ErrorHint.new("If the size comes from a grandchild or a render object from an " + "entirely different part of the render tree, then there is no " + "way to be notified when the size changes and therefore attempts " + "to read that size are almost certainly a source of bugs. A different " + "approach should be used.")])));
            }
            if (!value[_canBeUsedByParent$]) {
              dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A child's size was used without setting parentUsesSize."), this.describeForError("The following render object"), value[_owner$].describeForError("...was assigned a size obtained from its child"), new assertions.ErrorDescription.new("However, when the child was laid out, the parentUsesSize argument " + "was not set or set to false. Subsequently this transpired to be " + "inaccurate: the size was nonetheless used by the parent.\n" + "It is important to tell the framework if the size will be used or not " + "as several important performance optimizations can be made if the " + "size will not be used by the parent.")])));
            }
          }
        }
        result = new box._DebugSize.new(value, this, this.debugCanParentUseSize);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2064, 12, "() {\n      if (value is _DebugSize) {\n        if (value._owner != this) {\n          if (value._owner.parent != this) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('The size property was assigned a size inappropriately.'),\n              describeForError('The following render object'),\n              value._owner.describeForError('...was assigned a size obtained from'),\n              ErrorDescription(\n                'However, this second render object is not, or is no longer, a '\n                'child of the first, and it is therefore a violation of the '\n                'RenderBox layout protocol to use that size in the layout of the '\n                'first render object.',\n              ),\n              ErrorHint(\n                'If the size was obtained at a time where it was valid to read '\n                'the size (because the second render object above was a child '\n                'of the first at the time), then it should be adopted using '\n                'debugAdoptSize at that time.',\n              ),\n              ErrorHint(\n                'If the size comes from a grandchild or a render object from an '\n                'entirely different part of the render tree, then there is no '\n                'way to be notified when the size changes and therefore attempts '\n                'to read that size are almost certainly a source of bugs. A different '\n                'approach should be used.',\n              ),\n            ]);\n          }\n          if (!value._canBeUsedByParent) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary(\"A child's size was used without setting parentUsesSize.\"),\n              describeForError('The following render object'),\n              value._owner.describeForError('...was assigned a size obtained from its child'),\n              ErrorDescription(\n                'However, when the child was laid out, the parentUsesSize argument '\n                'was not set or set to false. Subsequently this transpired to be '\n                'inaccurate: the size was nonetheless used by the parent.\\n'\n                'It is important to tell the framework if the size will be used or not '\n                'as several important performance optimizations can be made if the '\n                'size will not be used by the parent.',\n              ),\n            ]);\n          }\n        }\n      }\n      result = _DebugSize(value, this, debugCanParentUseSize);\n      return true;\n    }()");
      return result;
    }
    get semanticBounds() {
      return ui.Offset.zero['&'](this.size);
    }
    debugResetSize() {
      this.size = this.size;
    }
    static _debugSetDoingBaseline(value) {
      box.RenderBox._debugDoingBaseline = value;
      return true;
    }
    getDistanceToBaseline(baseline, opts) {
      let onlyReal = opts && 'onlyReal' in opts ? opts.onlyReal : false;
      if (!!box.RenderBox._debugDoingBaseline) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", I[6], 2149, 12, "!_debugDoingBaseline");
      if (!!this.debugNeedsLayout) dart.assertFailed(null, I[6], 2150, 12, "!debugNeedsLayout");
      if (!dart.fn(() => {
        let parent = T$.RenderObjectN().as(this.parent);
        if (dart.nullCheck(this.owner).debugDoingLayout) return dart.equals(object$.RenderObject.debugActiveLayout, parent) && dart.nullCheck(parent).debugDoingThisLayout;
        if (dart.nullCheck(this.owner).debugDoingPaint) return dart.equals(object$.RenderObject.debugActivePaint, parent) && dart.nullCheck(parent).debugDoingThisPaint || dart.equals(object$.RenderObject.debugActivePaint, this) && this.debugDoingThisPaint;
        if (!dart.equals(parent, this.parent)) dart.assertFailed(null, I[6], 2158, 14, "parent == this.parent");
        return false;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2151, 12, "() {\n      final RenderObject? parent = this.parent as RenderObject?;\n      if (owner!.debugDoingLayout)\n        return (RenderObject.debugActiveLayout == parent) && parent!.debugDoingThisLayout;\n      if (owner!.debugDoingPaint)\n        return ((RenderObject.debugActivePaint == parent) && parent!.debugDoingThisPaint) ||\n               ((RenderObject.debugActivePaint == this) && debugDoingThisPaint);\n      assert(parent == this.parent);\n      return false;\n    }()");
      if (!box.RenderBox._debugSetDoingBaseline(true)) dart.assertFailed(null, I[6], 2161, 12, "_debugSetDoingBaseline(true)");
      let result = this.getDistanceToActualBaseline(baseline);
      if (!box.RenderBox._debugSetDoingBaseline(false)) dart.assertFailed(null, I[6], 2163, 12, "_debugSetDoingBaseline(false)");
      if (result == null && !onlyReal) return this.size.height;
      return result;
    }
    getDistanceToActualBaseline(baseline) {
      if (!box.RenderBox._debugDoingBaseline) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", I[6], 2177, 12, "_debugDoingBaseline");
      this[_cachedBaselines] == null ? this[_cachedBaselines] = new (T$.LinkedMapOfTextBaseline$doubleN()).new() : null;
      dart.nullCheck(this[_cachedBaselines])[$putIfAbsent](baseline, dart.fn(() => this.computeDistanceToActualBaseline(baseline), T$.VoidTodoubleN()));
      return dart.nullCheck(this[_cachedBaselines])[$_get](baseline);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!box.RenderBox._debugDoingBaseline) dart.assertFailed("Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.", I[6], 2209, 12, "_debugDoingBaseline");
      return null;
    }
    get constraints() {
      return box.BoxConstraints.as(super.constraints);
    }
    debugAssertDoesMeetConstraints() {
      if (!(this.constraints !== null)) dart.assertFailed(null, I[6], 2219, 12, "constraints != null");
      if (!dart.fn(() => {
        if (!this.hasSize) {
          let contract = null;
          if (this.sizedByParent)
            contract = new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to true, it must set its size in performResize().");
          else
            contract = new assertions.ErrorDescription.new("Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().");
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("RenderBox did not set its size during layout."), contract, new assertions.ErrorDescription.new("It appears that this did not happen; layout completed, but the size property is still null."), new (T$.DiagnosticsPropertyOfRenderBox()).new("The RenderBox in question is", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        if (!dart.nullCheck(this[_size$]).isFinite) {
          let information = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " object was given an infinite size during layout."), new assertions.ErrorDescription.new("This probably means that it is a render object that tries to be " + "as big as possible, but it was put inside another render object " + "that allows its children to pick their own size.")]);
          if (!this.constraints.hasBoundedWidth) {
            let node = this;
            while (!node.constraints.hasBoundedWidth && box.RenderBox.is(node.parent))
              node = box.RenderBox.as(dart.nullCheck(node.parent));
            information[$add](node.describeForError("The nearest ancestor providing an unbounded width constraint is"));
          }
          if (!this.constraints.hasBoundedHeight) {
            let node = this;
            while (!node.constraints.hasBoundedHeight && box.RenderBox.is(node.parent))
              node = box.RenderBox.as(dart.nullCheck(node.parent));
            information[$add](node.describeForError("The nearest ancestor providing an unbounded height constraint is"));
          }
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t27 = T$.ListOfDiagnosticsNode().of(information);
            t27.push(new (T$.DiagnosticsPropertyOfBoxConstraints()).new("The constraints that applied to the " + dart.str(this[$runtimeType]) + " were", this.constraints, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            t27.push(new (T$.DiagnosticsPropertyOfSize()).new("The exact size it was given was", this[_size$], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            t27.push(new assertions.ErrorHint.new("See https://flutter.dev/docs/development/ui/layout/box-constraints for more information."));
            return t27;
          })()));
        }
        if (!this.constraints.isSatisfiedBy(dart.nullCheck(this[_size$]))) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not meet its constraints."), new (T$.DiagnosticsPropertyOfBoxConstraints()).new("Constraints", this.constraints, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new (T$.DiagnosticsPropertyOfSize()).new("Size", this[_size$], {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not " + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")])));
        }
        if (debug$0.debugCheckIntrinsicSizes) {
          if (!!object$.RenderObject.debugCheckingIntrinsics) dart.assertFailed(null, I[6], 2279, 16, "!RenderObject.debugCheckingIntrinsics");
          object$.RenderObject.debugCheckingIntrinsics = true;
          let failures = T$.JSArrayOfDiagnosticsNode().of([]);
          function testIntrinsic($function, name, constraint) {
            let result = $function(constraint);
            if (result < 0) {
              failures[$add](new assertions.ErrorDescription.new(" * " + name + "(" + dart.str(constraint) + ") returned a negative value: " + dart.str(result)));
            }
            if (!result[$isFinite]) {
              failures[$add](new assertions.ErrorDescription.new(" * " + name + "(" + dart.str(constraint) + ") returned a non-finite value: " + dart.str(result)));
            }
            return result;
          }
          dart.fn(testIntrinsic, T$.FnAndStringAnddoubleTodouble());
          function testIntrinsicsForValues(getMin, getMax, name, constraint) {
            let min = testIntrinsic(getMin, "getMinIntrinsic" + name, constraint);
            let max = testIntrinsic(getMax, "getMaxIntrinsic" + name, constraint);
            if (min > max) {
              failures[$add](new assertions.ErrorDescription.new(" * getMinIntrinsic" + name + "(" + dart.str(constraint) + ") returned a larger value (" + dart.str(min) + ") than getMaxIntrinsic" + name + "(" + dart.str(constraint) + ") (" + dart.str(max) + ")"));
            }
          }
          dart.fn(testIntrinsicsForValues, T$.FnAndFnAndString__Tovoid());
          testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicWidth'), dart.bind(this, 'getMaxIntrinsicWidth'), "Width", 1 / 0);
          testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicHeight'), dart.bind(this, 'getMaxIntrinsicHeight'), "Height", 1 / 0);
          if (this.constraints.hasBoundedWidth) testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicWidth'), dart.bind(this, 'getMaxIntrinsicWidth'), "Width", this.constraints.maxHeight);
          if (this.constraints.hasBoundedHeight) testIntrinsicsForValues(dart.bind(this, 'getMinIntrinsicHeight'), dart.bind(this, 'getMaxIntrinsicHeight'), "Height", this.constraints.maxWidth);
          object$.RenderObject.debugCheckingIntrinsics = false;
          if (failures[$isNotEmpty]) {
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t28 = T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The intrinsic dimension methods of the " + dart.str(this[$runtimeType]) + " class returned values that violate the intrinsic protocol contract."), new assertions.ErrorDescription.new("The following " + (failures[$length] > 1 ? "failures" : "failure") + " was detected:")]);
              t28[$addAll](failures);
              t28.push(new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md"));
              return t28;
            })()));
          }
          box.RenderBox._dryLayoutCalculationValid = true;
          object$.RenderObject.debugCheckingIntrinsics = true;
          let dryLayoutSize = null;
          try {
            dryLayoutSize = this.getDryLayout(this.constraints);
          } finally {
            object$.RenderObject.debugCheckingIntrinsics = false;
          }
          if (box.RenderBox._dryLayoutCalculationValid && !dryLayoutSize._equals(this.size)) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The size given to the " + object.objectRuntimeType(this, "RenderBox") + " class differs from the size computed by computeDryLayout."), new assertions.ErrorDescription.new("The size computed in " + (this.sizedByParent ? "performResize" : "performLayout") + " " + "is " + dart.str(this.size) + ", which is different from " + dart.str(dryLayoutSize) + ", which was computed by computeDryLayout."), new assertions.ErrorDescription.new("The constraints used were " + dart.str(this.constraints) + "."), new assertions.ErrorHint.new("If you are not writing your own RenderBox subclass, then this is not\n" + "your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md")])));
          }
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2220, 12, "() {\n      if (!hasSize) {\n        final DiagnosticsNode contract;\n        if (sizedByParent)\n          contract = ErrorDescription('Because this RenderBox has sizedByParent set to true, it must set its size in performResize().');\n        else\n          contract = ErrorDescription('Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().');\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('RenderBox did not set its size during layout.'),\n          contract,\n          ErrorDescription('It appears that this did not happen; layout completed, but the size property is still null.'),\n          DiagnosticsProperty<RenderBox>('The RenderBox in question is', this, style: DiagnosticsTreeStyle.errorProperty),\n        ]);\n      }\n      // verify that the size is not infinite\n      if (!_size!.isFinite) {\n        final List<DiagnosticsNode> information = <DiagnosticsNode>[\n          ErrorSummary('$runtimeType object was given an infinite size during layout.'),\n          ErrorDescription(\n            'This probably means that it is a render object that tries to be '\n            'as big as possible, but it was put inside another render object '\n            'that allows its children to pick their own size.',\n          ),\n        ];\n        if (!constraints.hasBoundedWidth) {\n          RenderBox node = this;\n          while (!node.constraints.hasBoundedWidth && node.parent is RenderBox)\n            node = node.parent! as RenderBox;\n\n          information.add(node.describeForError('The nearest ancestor providing an unbounded width constraint is'));\n        }\n        if (!constraints.hasBoundedHeight) {\n          RenderBox node = this;\n          while (!node.constraints.hasBoundedHeight && node.parent is RenderBox)\n            node = node.parent! as RenderBox;\n\n          information.add(node.describeForError('The nearest ancestor providing an unbounded height constraint is'));\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ...information,\n          DiagnosticsProperty<BoxConstraints>('The constraints that applied to the $runtimeType were', constraints, style: DiagnosticsTreeStyle.errorProperty),\n          DiagnosticsProperty<Size>('The exact size it was given was', _size, style: DiagnosticsTreeStyle.errorProperty),\n          ErrorHint('See https://flutter.dev/docs/development/ui/layout/box-constraints for more information.'),\n        ]);\n      }\n      // verify that the size is within the constraints\n      if (!constraints.isSatisfiedBy(_size!)) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not meet its constraints.'),\n          DiagnosticsProperty<BoxConstraints>('Constraints', constraints, style: DiagnosticsTreeStyle.errorProperty),\n          DiagnosticsProperty<Size>('Size', _size, style: DiagnosticsTreeStyle.errorProperty),\n          ErrorHint(\n            'If you are not writing your own RenderBox subclass, then this is not '\n            'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n          ),\n        ]);\n      }\n      if (debugCheckIntrinsicSizes) {\n        // verify that the intrinsics are sane\n        assert(!RenderObject.debugCheckingIntrinsics);\n        RenderObject.debugCheckingIntrinsics = true;\n        final List<DiagnosticsNode> failures = <DiagnosticsNode>[];\n\n        double testIntrinsic(double Function(double extent) function, String name, double constraint) {\n          final double result = function(constraint);\n          if (result < 0) {\n            failures.add(ErrorDescription(' * $name($constraint) returned a negative value: $result'));\n          }\n          if (!result.isFinite) {\n            failures.add(ErrorDescription(' * $name($constraint) returned a non-finite value: $result'));\n          }\n          return result;\n        }\n\n        void testIntrinsicsForValues(double Function(double extent) getMin, double Function(double extent) getMax, String name, double constraint) {\n          final double min = testIntrinsic(getMin, 'getMinIntrinsic$name', constraint);\n          final double max = testIntrinsic(getMax, 'getMaxIntrinsic$name', constraint);\n          if (min > max) {\n            failures.add(ErrorDescription(' * getMinIntrinsic$name($constraint) returned a larger value ($min) than getMaxIntrinsic$name($constraint) ($max)'));\n          }\n        }\n\n        testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', double.infinity);\n        testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', double.infinity);\n        if (constraints.hasBoundedWidth)\n          testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', constraints.maxHeight);\n        if (constraints.hasBoundedHeight)\n          testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', constraints.maxWidth);\n\n        // TODO(ianh): Test that values are internally consistent in more ways than the above.\n\n        RenderObject.debugCheckingIntrinsics = false;\n        if (failures.isNotEmpty) {\n          // TODO(jacobr): consider nesting the failures object so it is collapsible.\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The intrinsic dimension methods of the $runtimeType class returned values that violate the intrinsic protocol contract.'),\n            ErrorDescription('The following ${failures.length > 1 ? \"failures\" : \"failure\"} was detected:'), // should this be tagged as an error or not?\n            ...failures,\n            ErrorHint(\n              'If you are not writing your own RenderBox subclass, then this is not\\n'\n              'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n            ),\n          ]);\n        }\n\n        // Checking that getDryLayout computes the same size.\n        _dryLayoutCalculationValid = true;\n        RenderObject.debugCheckingIntrinsics = true;\n        final Size dryLayoutSize;\n        try {\n          dryLayoutSize = getDryLayout(constraints);\n        } finally {\n          RenderObject.debugCheckingIntrinsics = false;\n        }\n        if (_dryLayoutCalculationValid && dryLayoutSize != size) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('The size given to the ${objectRuntimeType(this, 'RenderBox')} class differs from the size computed by computeDryLayout.'),\n            ErrorDescription(\n              'The size computed in ${sizedByParent ? 'performResize' : 'performLayout'} '\n              'is $size, which is different from $dryLayoutSize, which was computed by computeDryLayout.',\n            ),\n            ErrorDescription(\n              'The constraints used were $constraints.',\n            ),\n            ErrorHint(\n              'If you are not writing your own RenderBox subclass, then this is not\\n'\n              'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=2_bug.md',\n            ),\n          ]);\n        }\n      }\n      return true;\n    }()");
    }
    markNeedsLayout() {
      let t29, t29$, t29$0;
      if (this[_cachedBaselines] != null && dart.nullCheck(this[_cachedBaselines])[$isNotEmpty] || this[_cachedIntrinsicDimensions] != null && dart.nullCheck(this[_cachedIntrinsicDimensions])[$isNotEmpty] || this[_cachedDryLayoutSizes] != null && dart.nullCheck(this[_cachedDryLayoutSizes])[$isNotEmpty]) {
        t29 = this[_cachedBaselines];
        t29 == null ? null : t29[$clear]();
        t29$ = this[_cachedIntrinsicDimensions];
        t29$ == null ? null : t29$[$clear]();
        t29$0 = this[_cachedDryLayoutSizes];
        t29$0 == null ? null : t29$0[$clear]();
        if (object$.RenderObject.is(this.parent)) {
          this.markParentNeedsLayout();
          return;
        }
      }
      super.markNeedsLayout();
    }
    performResize() {
      this.size = this.computeDryLayout(this.constraints);
      if (!this.size.isFinite) dart.assertFailed(null, I[6], 2385, 12, "size.isFinite");
    }
    performLayout() {
      if (!dart.fn(() => {
        if (!this.sizedByParent) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " did not implement performLayout()."), new assertions.ErrorHint.new("RenderBox subclasses need to either override performLayout() to " + "set a size and lay out any children, or, set sizedByParent to true " + "so that performResize() sizes the render object.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2390, 12, "() {\n      if (!sizedByParent) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType did not implement performLayout().'),\n          ErrorHint(\n            'RenderBox subclasses need to either override performLayout() to '\n            'set a size and lay out any children, or, set sizedByParent to true '\n            'so that performResize() sizes the render object.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (!dart.fn(() => {
        if (!this.hasSize) {
          if (this.debugNeedsLayout) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Cannot hit test a render box that has never been laid out."), this.describeForError("The hitTest() method was called on this RenderBox"), new assertions.ErrorDescription.new("Unfortunately, this object's geometry is not known at this time, " + "probably because it has never been laid out. " + "This means it cannot be accurately hit-tested."), new assertions.ErrorHint.new("If you are trying " + "to perform a hit test during the layout phase itself, make sure " + "you only hit test nodes that have completed layout (e.g. the node's " + "children, after their layout() method has been called).")])));
          }
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Cannot hit test a render box with no size."), this.describeForError("The hitTest() method was called on this RenderBox"), new assertions.ErrorDescription.new("Although this node is not marked as needing layout, " + "its size is not set."), new assertions.ErrorHint.new("A RenderBox object must have an " + "explicit size before it can be hit-tested. Make sure " + "that the RenderBox in question sets its size during layout.")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2430, 12, "() {\n      if (!hasSize) {\n        if (debugNeedsLayout) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('Cannot hit test a render box that has never been laid out.'),\n            describeForError('The hitTest() method was called on this RenderBox'),\n            ErrorDescription(\n              \"Unfortunately, this object's geometry is not known at this time, \"\n              'probably because it has never been laid out. '\n              'This means it cannot be accurately hit-tested.',\n            ),\n            ErrorHint(\n              'If you are trying '\n              'to perform a hit test during the layout phase itself, make sure '\n              \"you only hit test nodes that have completed layout (e.g. the node's \"\n              'children, after their layout() method has been called).',\n            ),\n          ]);\n        }\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Cannot hit test a render box with no size.'),\n          describeForError('The hitTest() method was called on this RenderBox'),\n          ErrorDescription(\n            'Although this node is not marked as needing layout, '\n            'its size is not set.',\n          ),\n          ErrorHint(\n            'A RenderBox object must have an '\n            'explicit size before it can be hit-tested. Make sure '\n            'that the RenderBox in question sets its size during layout.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      if (dart.nullCheck(this[_size$]).contains(position)) {
        if (this.hitTestChildren(result, {position: position}) || this.hitTestSelf(position)) {
          result.add(new box.BoxHitTestEntry.new(this, position));
          return true;
        }
      }
      return false;
    }
    hitTestSelf(position) {
      return false;
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return false;
    }
    applyPaintTransform(child, transform) {
      object$.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[6], 2528, 12, "child != null");
      if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[6], 2529, 12, "child.parent == this");
      if (!dart.fn(() => {
        if (!box.BoxParentData.is(child.parentData)) {
          dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new(dart.str(this[$runtimeType]) + " does not implement applyPaintTransform."), this.describeForError("The following " + dart.str(this[$runtimeType]) + " object"), child.describeForError("...did not use a BoxParentData class for the parentData field of the following child"), new assertions.ErrorDescription.new("The " + dart.str(this[$runtimeType]) + " class inherits from RenderBox."), new assertions.ErrorHint.new("The default applyPaintTransform implementation provided by RenderBox assumes that the " + "children all use BoxParentData objects for their parentData field. " + "Since " + dart.str(this[$runtimeType]) + " does not in fact use that ParentData class for its children, it must " + "provide an implementation of applyPaintTransform that supports the specific ParentData " + "subclass used by its children (which apparently is " + dart.str(dart.runtimeType(child.parentData)) + ").")])));
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2530, 12, "() {\n      if (child.parentData is! BoxParentData) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('$runtimeType does not implement applyPaintTransform.'),\n          describeForError('The following $runtimeType object'),\n          child.describeForError('...did not use a BoxParentData class for the parentData field of the following child'),\n          ErrorDescription('The $runtimeType class inherits from RenderBox.'),\n          ErrorHint(\n            'The default applyPaintTransform implementation provided by RenderBox assumes that the '\n            'children all use BoxParentData objects for their parentData field. '\n            'Since $runtimeType does not in fact use that ParentData class for its children, it must '\n            'provide an implementation of applyPaintTransform that supports the specific ParentData '\n            'subclass used by its children (which apparently is ${child.parentData.runtimeType}).',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      let childParentData = box.BoxParentData.as(dart.nullCheck(child.parentData));
      let offset = childParentData.offset;
      transform.translate(offset.dx, offset.dy);
    }
    globalToLocal(point, opts) {
      let ancestor = opts && 'ancestor' in opts ? opts.ancestor : null;
      let transform = this.getTransformTo(ancestor);
      let det = transform.invert();
      if (det === 0.0) return ui.Offset.zero;
      let n = vector_math_64.Vector3.new(0.0, 0.0, 1.0);
      let i = transform.perspectiveTransform(vector_math_64.Vector3.new(0.0, 0.0, 0.0));
      let d = transform.perspectiveTransform(vector_math_64.Vector3.new(0.0, 0.0, 1.0))['-'](i);
      let s = transform.perspectiveTransform(vector_math_64.Vector3.new(point.dx, point.dy, 0.0));
      let p = s['-'](d['*'](n.dot(s) / n.dot(d)));
      return new ui.Offset.new(p.x, p.y);
    }
    localToGlobal(point, opts) {
      let ancestor = opts && 'ancestor' in opts ? opts.ancestor : null;
      return matrix_utils.MatrixUtils.transformPoint(this.getTransformTo(ancestor), point);
    }
    get paintBounds() {
      return ui.Offset.zero['&'](this.size);
    }
    handleEvent(event, entry) {
      box.BoxHitTestEntry.as(entry);
      super.handleEvent(event, entry);
    }
    debugHandleEvent(event, entry) {
      if (!dart.fn(() => {
        if (debug$0.debugPaintPointersEnabled) {
          if (events.PointerDownEvent.is(event)) {
            this[_debugActivePointers] = this[_debugActivePointers] + 1;
          } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
            this[_debugActivePointers] = this[_debugActivePointers] - 1;
          }
          this.markNeedsPaint();
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2661, 12, "() {\n      if (debugPaintPointersEnabled) {\n        if (event is PointerDownEvent) {\n          _debugActivePointers += 1;\n        } else if (event is PointerUpEvent || event is PointerCancelEvent) {\n          _debugActivePointers -= 1;\n        }\n        markNeedsPaint();\n      }\n      return true;\n    }()");
      return true;
    }
    debugPaint(context, offset) {
      if (!dart.fn(() => {
        if (debug$0.debugPaintSizeEnabled) this.debugPaintSize(context, offset);
        if (debug$0.debugPaintBaselinesEnabled) this.debugPaintBaselines(context, offset);
        if (debug$0.debugPaintPointersEnabled) this.debugPaintPointers(context, offset);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2677, 12, "() {\n      if (debugPaintSizeEnabled)\n        debugPaintSize(context, offset);\n      if (debugPaintBaselinesEnabled)\n        debugPaintBaselines(context, offset);\n      if (debugPaintPointersEnabled)\n        debugPaintPointers(context, offset);\n      return true;\n    }()");
    }
    debugPaintSize(context, offset) {
      if (!dart.fn(() => {
        let t29;
        let paint = (t29 = ui.Paint.new(), (() => {
          t29.style = ui.PaintingStyle.stroke;
          t29.strokeWidth = 1.0;
          t29.color = C[19] || CT.C19;
          return t29;
        })());
        context.canvas.drawRect(offset['&'](this.size).deflate(0.5), paint);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2693, 12, "() {\n      final Paint paint = Paint()\n       ..style = PaintingStyle.stroke\n       ..strokeWidth = 1.0\n       ..color = const Color(0xFF00FFFF);\n      context.canvas.drawRect((offset & size).deflate(0.5), paint);\n      return true;\n    }()");
    }
    debugPaintBaselines(context, offset) {
      if (!dart.fn(() => {
        let t29;
        let paint = (t29 = ui.Paint.new(), (() => {
          t29.style = ui.PaintingStyle.stroke;
          t29.strokeWidth = 0.25;
          return t29;
        })());
        let path = null;
        let baselineI = this.getDistanceToBaseline(ui.TextBaseline.ideographic, {onlyReal: true});
        if (baselineI != null) {
          paint.color = C[20] || CT.C20;
          path = ui.Path.new();
          path.moveTo(offset.dx, offset.dy + dart.notNull(baselineI));
          path.lineTo(offset.dx + this.size.width, offset.dy + dart.notNull(baselineI));
          context.canvas.drawPath(path, paint);
        }
        let baselineA = this.getDistanceToBaseline(ui.TextBaseline.alphabetic, {onlyReal: true});
        if (baselineA != null) {
          paint.color = C[21] || CT.C21;
          path = ui.Path.new();
          path.moveTo(offset.dx, offset.dy + dart.notNull(baselineA));
          path.lineTo(offset.dx + this.size.width, offset.dy + dart.notNull(baselineA));
          context.canvas.drawPath(path, paint);
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2708, 12, "() {\n      final Paint paint = Paint()\n       ..style = PaintingStyle.stroke\n       ..strokeWidth = 0.25;\n      Path path;\n      // ideographic baseline\n      final double? baselineI = getDistanceToBaseline(TextBaseline.ideographic, onlyReal: true);\n      if (baselineI != null) {\n        paint.color = const Color(0xFFFFD000);\n        path = Path();\n        path.moveTo(offset.dx, offset.dy + baselineI);\n        path.lineTo(offset.dx + size.width, offset.dy + baselineI);\n        context.canvas.drawPath(path, paint);\n      }\n      // alphabetic baseline\n      final double? baselineA = getDistanceToBaseline(TextBaseline.alphabetic, onlyReal: true);\n      if (baselineA != null) {\n        paint.color = const Color(0xFF00FF00);\n        path = Path();\n        path.moveTo(offset.dx, offset.dy + baselineA);\n        path.lineTo(offset.dx + size.width, offset.dy + baselineA);\n        context.canvas.drawPath(path, paint);\n      }\n      return true;\n    }()");
    }
    debugPaintPointers(context, offset) {
      if (!dart.fn(() => {
        let t29;
        if (this[_debugActivePointers] > 0) {
          let paint = (t29 = ui.Paint.new(), (() => {
            t29.color = new ui.Color.new((48059 | (67108864 * this.depth & 4278190080) >>> 0) >>> 0);
            return t29;
          })());
          context.canvas.drawRect(offset['&'](this.size), paint);
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 2744, 12, "() {\n      if (_debugActivePointers > 0) {\n        final Paint paint = Paint()\n         ..color = Color(0x00BBBB | ((0x04000000 * depth) & 0xFF000000));\n        context.canvas.drawRect(offset & size, paint);\n      }\n      return true;\n    }()");
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T$.DiagnosticsPropertyOfSize()).new("size", this[_size$], {missingIfNull: true}));
    }
  };
  (box.RenderBox.new = function() {
    this[_cachedIntrinsicDimensions] = null;
    this[_cachedDryLayoutSizes] = null;
    this[_computingThisDryLayout] = false;
    this[_size$] = null;
    this[_cachedBaselines] = null;
    this[_debugActivePointers] = 0;
    box.RenderBox.__proto__.new.call(this);
    ;
  }).prototype = box.RenderBox.prototype;
  dart.addTypeTests(box.RenderBox);
  dart.addTypeCaches(box.RenderBox);
  dart.setMethodSignature(box.RenderBox, () => ({
    __proto__: dart.getMethods(box.RenderBox.__proto__),
    [_computeIntrinsicDimension]: dart.fnType(core.double, [box._IntrinsicDimension, core.double, dart.fnType(core.double, [core.double])]),
    getMinIntrinsicWidth: dart.fnType(core.double, [core.double]),
    computeMinIntrinsicWidth: dart.fnType(core.double, [core.double]),
    getMaxIntrinsicWidth: dart.fnType(core.double, [core.double]),
    computeMaxIntrinsicWidth: dart.fnType(core.double, [core.double]),
    getMinIntrinsicHeight: dart.fnType(core.double, [core.double]),
    computeMinIntrinsicHeight: dart.fnType(core.double, [core.double]),
    getMaxIntrinsicHeight: dart.fnType(core.double, [core.double]),
    computeMaxIntrinsicHeight: dart.fnType(core.double, [core.double]),
    getDryLayout: dart.fnType(ui.Size, [box.BoxConstraints]),
    [_computeDryLayout]: dart.fnType(ui.Size, [box.BoxConstraints]),
    computeDryLayout: dart.fnType(ui.Size, [box.BoxConstraints]),
    debugCannotComputeDryLayout: dart.fnType(core.bool, [], {error: dart.nullable(assertions.FlutterError), reason: dart.nullable(core.String)}, {}),
    debugAdoptSize: dart.fnType(ui.Size, [ui.Size]),
    getDistanceToBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline], {onlyReal: core.bool}, {}),
    getDistanceToActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
    computeDistanceToActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
    debugAssertDoesMeetConstraints: dart.fnType(dart.void, []),
    performResize: dart.fnType(dart.void, []),
    performLayout: dart.fnType(dart.void, []),
    hitTest: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
    hitTestSelf: dart.fnType(core.bool, [ui.Offset]),
    hitTestChildren: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
    globalToLocal: dart.fnType(ui.Offset, [ui.Offset], {ancestor: dart.nullable(object$.RenderObject)}, {}),
    localToGlobal: dart.fnType(ui.Offset, [ui.Offset], {ancestor: dart.nullable(object$.RenderObject)}, {}),
    debugHandleEvent: dart.fnType(core.bool, [events.PointerEvent, hit_test.HitTestEntry]),
    debugPaintSize: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    debugPaintBaselines: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
    debugPaintPointers: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])
  }));
  dart.setStaticMethodSignature(box.RenderBox, () => ['_debugSetDoingBaseline']);
  dart.setGetterSignature(box.RenderBox, () => ({
    __proto__: dart.getGetters(box.RenderBox.__proto__),
    hasSize: core.bool,
    size: ui.Size,
    semanticBounds: ui.Rect,
    constraints: box.BoxConstraints,
    paintBounds: ui.Rect
  }));
  dart.setSetterSignature(box.RenderBox, () => ({
    __proto__: dart.getSetters(box.RenderBox.__proto__),
    size: ui.Size
  }));
  dart.setLibraryUri(box.RenderBox, I[7]);
  dart.setFieldSignature(box.RenderBox, () => ({
    __proto__: dart.getFields(box.RenderBox.__proto__),
    [_cachedIntrinsicDimensions]: dart.fieldType(dart.nullable(core.Map$(box._IntrinsicDimensionsCacheEntry, core.double))),
    [_cachedDryLayoutSizes]: dart.fieldType(dart.nullable(core.Map$(box.BoxConstraints, ui.Size))),
    [_computingThisDryLayout]: dart.fieldType(core.bool),
    [_size$]: dart.fieldType(dart.nullable(ui.Size)),
    [_cachedBaselines]: dart.fieldType(dart.nullable(core.Map$(ui.TextBaseline, dart.nullable(core.double)))),
    [_debugActivePointers]: dart.fieldType(core.int)
  }));
  dart.setStaticFieldSignature(box.RenderBox, () => ['_debugIntrinsicsDepth', '_dryLayoutCalculationValid', '_debugDoingBaseline']);
  dart.defineLazy(box.RenderBox, {
    /*box.RenderBox._debugIntrinsicsDepth*/get _debugIntrinsicsDepth() {
      return 0;
    },
    set _debugIntrinsicsDepth(_) {},
    /*box.RenderBox._dryLayoutCalculationValid*/get _dryLayoutCalculationValid() {
      return true;
    },
    set _dryLayoutCalculationValid(_) {},
    /*box.RenderBox._debugDoingBaseline*/get _debugDoingBaseline() {
      return false;
    },
    set _debugDoingBaseline(_) {}
  }, false);
  const RenderObject_RenderObjectWithChildMixin$36 = class RenderObject_RenderObjectWithChildMixin extends object$.RenderObject {};
  (RenderObject_RenderObjectWithChildMixin$36.new = function() {
    object$.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderObject_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderObject_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderObject_RenderObjectWithChildMixin$36, object$.RenderObjectWithChildMixin$(box.RenderBox));
  view.RenderView = class RenderView extends RenderObject_RenderObjectWithChildMixin$36 {
    get automaticSystemUiAdjustment() {
      return this[automaticSystemUiAdjustment];
    }
    set automaticSystemUiAdjustment(value) {
      this[automaticSystemUiAdjustment] = value;
    }
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let configuration = opts && 'configuration' in opts ? opts.configuration : null;
      let window = opts && 'window' in opts ? opts.window : null;
      return new view.RenderView.new({child: child, configuration: configuration, window: window});
    }
    get size() {
      return this[_size];
    }
    get configuration() {
      return this[_configuration];
    }
    set configuration(value) {
      if (!(value !== null)) dart.assertFailed(null, I[3], 90, 12, "value != null");
      if (this.configuration._equals(value)) return;
      this[_configuration] = value;
      this.replaceRootLayer(this[_updateMatricesAndCreateNewRootLayer]());
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[3], 95, 12, "_rootTransform != null");
      this.markNeedsLayout();
    }
    prepareInitialFrame() {
      if (!(this.owner != null)) dart.assertFailed(null, I[3], 131, 12, "owner != null");
      if (!(this[_rootTransform] == null)) dart.assertFailed(null, I[3], 132, 12, "_rootTransform == null");
      this.scheduleInitialLayout();
      this.scheduleInitialPaint(this[_updateMatricesAndCreateNewRootLayer]());
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[3], 135, 12, "_rootTransform != null");
    }
    [_updateMatricesAndCreateNewRootLayer]() {
      this[_rootTransform] = this.configuration.toMatrix();
      let rootLayer = new layer$.TransformLayer.new({transform: this[_rootTransform]});
      rootLayer.attach(this);
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[3], 144, 12, "_rootTransform != null");
      return rootLayer;
    }
    debugAssertDoesMeetConstraints() {
      if (!false) dart.assertFailed(null, I[3], 151, 50, "false");
    }
    performResize() {
      if (!false) dart.assertFailed(null, I[3], 155, 12, "false");
    }
    performLayout() {
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[3], 160, 12, "_rootTransform != null");
      this[_size] = this.configuration.size;
      if (!this[_size].isFinite) dart.assertFailed(null, I[3], 162, 12, "_size.isFinite");
      if (this.child != null) dart.nullCheck(this.child).layout(new box.BoxConstraints.tight(this[_size]));
    }
    rotate(opts) {
      let oldAngle = opts && 'oldAngle' in opts ? opts.oldAngle : null;
      let newAngle = opts && 'newAngle' in opts ? opts.newAngle : null;
      let time = opts && 'time' in opts ? opts.time : null;
      if (!false) dart.assertFailed(null, I[3], 170, 12, "false");
    }
    hitTest(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (this.child != null) dart.nullCheck(this.child).hitTest(new box.BoxHitTestResult.wrap(result), {position: position});
      result.add(new hit_test.HitTestEntry.new(this));
      return true;
    }
    hitTestMouseTrackers(position) {
      if (!(position !== null)) dart.assertFailed(null, I[3], 197, 12, "position != null");
      let result = new box.BoxHitTestResult.new();
      this.hitTest(result, {position: position});
      return result;
    }
    get isRepaintBoundary() {
      return true;
    }
    paint(context, offset) {
      if (this.child != null) context.paintChild(dart.nullCheck(this.child), offset);
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[3], 214, 12, "_rootTransform != null");
      transform.multiply(dart.nullCheck(this[_rootTransform]));
      super.applyPaintTransform(child, transform);
    }
    compositeFrame() {
      if (!false) {
        developer.Timeline.startSync("COMPOSITING", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      }
      try {
        let builder = ui.SceneBuilder.new();
        let scene = dart.nullCheck(this.layer).buildScene(builder);
        if (this.automaticSystemUiAdjustment) this[_updateSystemChrome]();
        this[_window].render(scene);
        scene.dispose();
        if (!dart.fn(() => {
          if (debug$0.debugRepaintRainbowEnabled || debug$0.debugRepaintTextRainbowEnabled) debug$0.debugCurrentRepaintColor = debug$0.debugCurrentRepaintColor.withHue((debug$0.debugCurrentRepaintColor.hue + 2.0)[$modulo](360.0));
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 233, 14, "() {\n        if (debugRepaintRainbowEnabled || debugRepaintTextRainbowEnabled)\n          debugCurrentRepaintColor = debugCurrentRepaintColor.withHue((debugCurrentRepaintColor.hue + 2.0) % 360.0);\n        return true;\n      }()");
      } finally {
        if (!false) {
          developer.Timeline.finishSync();
        }
      }
    }
    [_updateSystemChrome]() {
      let t8, t8$, t8$0, t8$1, t8$2, t8$3, t8$4, t8$5;
      let bounds = this.paintBounds;
      let top = new ui.Offset.new(bounds.center.dx, this[_window].padding.top / 2.0);
      let bottom = new ui.Offset.new(bounds.center.dx, bounds.bottom - 1.0 - this[_window].padding.bottom / 2.0);
      let upperOverlayStyle = dart.nullCheck(this.layer).find(system_chrome.SystemUiOverlayStyle, top);
      let lowerOverlayStyle = null;
      switch (platform.defaultTargetPlatform) {
        case C[7] || CT.C7:
        {
          lowerOverlayStyle = dart.nullCheck(this.layer).find(system_chrome.SystemUiOverlayStyle, bottom);
          break;
        }
        case C[8] || CT.C8:
        case C[9] || CT.C9:
        case C[10] || CT.C10:
        case C[11] || CT.C11:
        case C[12] || CT.C12:
        {
          break;
        }
      }
      if (upperOverlayStyle != null || lowerOverlayStyle != null) {
        let overlayStyle = new system_chrome.SystemUiOverlayStyle.new({statusBarBrightness: (t8 = upperOverlayStyle, t8 == null ? null : t8.statusBarBrightness), statusBarIconBrightness: (t8$ = upperOverlayStyle, t8$ == null ? null : t8$.statusBarIconBrightness), statusBarColor: (t8$0 = upperOverlayStyle, t8$0 == null ? null : t8$0.statusBarColor), systemStatusBarContrastEnforced: (t8$1 = upperOverlayStyle, t8$1 == null ? null : t8$1.systemStatusBarContrastEnforced), systemNavigationBarColor: (t8$2 = lowerOverlayStyle, t8$2 == null ? null : t8$2.systemNavigationBarColor), systemNavigationBarDividerColor: (t8$3 = lowerOverlayStyle, t8$3 == null ? null : t8$3.systemNavigationBarDividerColor), systemNavigationBarIconBrightness: (t8$4 = lowerOverlayStyle, t8$4 == null ? null : t8$4.systemNavigationBarIconBrightness), systemNavigationBarContrastEnforced: (t8$5 = lowerOverlayStyle, t8$5 == null ? null : t8$5.systemNavigationBarContrastEnforced)});
        system_chrome.SystemChrome.setSystemUIOverlayStyle(overlayStyle);
      }
    }
    get paintBounds() {
      return ui.Offset.zero['&'](this.size['*'](this.configuration.devicePixelRatio));
    }
    get semanticBounds() {
      if (!(this[_rootTransform] != null)) dart.assertFailed(null, I[3], 322, 12, "_rootTransform != null");
      return matrix_utils.MatrixUtils.transformRect(dart.nullCheck(this[_rootTransform]), ui.Offset.zero['&'](this.size));
    }
    debugFillProperties(properties) {
      if (!dart.fn(() => {
        properties.add(diagnostics.DiagnosticsNode.message("debug mode enabled - " + (true ? "Web" : io.Platform.operatingSystem)));
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[3], 331, 12, "() {\n      properties.add(DiagnosticsNode.message('debug mode enabled - ${kIsWeb ? 'Web' :  Platform.operatingSystem}'));\n      return true;\n    }()");
      properties.add(new (T$.DiagnosticsPropertyOfSize()).new("window size", this[_window].physicalSize, {tooltip: "in physical pixels"}));
      properties.add(new diagnostics.DoubleProperty.new("device pixel ratio", this[_window].devicePixelRatio, {tooltip: "physical pixels per logical pixel"}));
      properties.add(new (T$.DiagnosticsPropertyOfViewConfiguration()).new("configuration", this.configuration, {tooltip: "in logical pixels"}));
      if (this[_window].platformDispatcher.semanticsEnabled) properties.add(diagnostics.DiagnosticsNode.message("semantics enabled"));
    }
  };
  (view.RenderView.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let configuration = opts && 'configuration' in opts ? opts.configuration : null;
    let window = opts && 'window' in opts ? opts.window : null;
    this[_size] = ui.Size.zero;
    this[automaticSystemUiAdjustment] = true;
    this[_rootTransform] = null;
    if (!(configuration !== null)) dart.assertFailed(null, I[3], 72, 15, "configuration != null");
    this[_configuration] = configuration;
    this[_window] = window;
    view.RenderView.__proto__.new.call(this);
    this.child = child;
  }).prototype = view.RenderView.prototype;
  dart.addTypeTests(view.RenderView);
  dart.addTypeCaches(view.RenderView);
  dart.setMethodSignature(view.RenderView, () => ({
    __proto__: dart.getMethods(view.RenderView.__proto__),
    prepareInitialFrame: dart.fnType(dart.void, []),
    [_updateMatricesAndCreateNewRootLayer]: dart.fnType(layer$.TransformLayer, []),
    debugAssertDoesMeetConstraints: dart.fnType(dart.void, []),
    performResize: dart.fnType(dart.void, []),
    performLayout: dart.fnType(dart.void, []),
    hitTest: dart.fnType(core.bool, [hit_test.HitTestResult], {}, {position: ui.Offset}),
    hitTestMouseTrackers: dart.fnType(hit_test.HitTestResult, [ui.Offset]),
    compositeFrame: dart.fnType(dart.void, []),
    [_updateSystemChrome]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(view.RenderView, () => ({
    __proto__: dart.getGetters(view.RenderView.__proto__),
    size: ui.Size,
    configuration: view.ViewConfiguration,
    paintBounds: ui.Rect,
    semanticBounds: ui.Rect
  }));
  dart.setSetterSignature(view.RenderView, () => ({
    __proto__: dart.getSetters(view.RenderView.__proto__),
    configuration: view.ViewConfiguration
  }));
  dart.setLibraryUri(view.RenderView, I[2]);
  dart.setFieldSignature(view.RenderView, () => ({
    __proto__: dart.getFields(view.RenderView.__proto__),
    [_size]: dart.fieldType(ui.Size),
    [_configuration]: dart.fieldType(view.ViewConfiguration),
    [_window]: dart.finalFieldType(ui.FlutterView),
    automaticSystemUiAdjustment: dart.fieldType(core.bool),
    [_rootTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4))
  }));
  var _annotations = dart.privateName(mouse_tracker, "_annotations");
  var _latestEvent = dart.privateName(mouse_tracker, "_latestEvent");
  mouse_tracker._MouseState = class _MouseState extends core.Object {
    static ['_#new#tearOff'](opts) {
      let initialEvent = opts && 'initialEvent' in opts ? opts.initialEvent : null;
      return new mouse_tracker._MouseState.new({initialEvent: initialEvent});
    }
    get annotations() {
      return this[_annotations];
    }
    replaceAnnotations(value) {
      if (!(value !== null)) dart.assertFailed(null, I[8], 40, 12, "value != null");
      let previous = this[_annotations];
      this[_annotations] = value;
      return previous;
    }
    get latestEvent() {
      return this[_latestEvent];
    }
    replaceLatestEvent(value) {
      if (!(value !== null)) dart.assertFailed(null, I[8], 51, 12, "value != null");
      if (!(value.device === this[_latestEvent].device)) dart.assertFailed(null, I[8], 52, 12, "value.device == _latestEvent.device");
      let previous = this[_latestEvent];
      this[_latestEvent] = value;
      return previous;
    }
    get device() {
      return this.latestEvent.device;
    }
    toString() {
      let describeLatestEvent = "latestEvent: " + diagnostics.describeIdentity(this.latestEvent);
      let describeAnnotations = "annotations: [list of " + dart.str(this.annotations[$length]) + "]";
      return diagnostics.describeIdentity(this) + "(" + describeLatestEvent + ", " + describeAnnotations + ")";
    }
  };
  (mouse_tracker._MouseState.new = function(opts) {
    let initialEvent = opts && 'initialEvent' in opts ? opts.initialEvent : null;
    this[_annotations] = new (T$.LinkedMapOfMouseTrackerAnnotation$Matrix4()).new();
    if (!(initialEvent !== null)) dart.assertFailed(null, I[8], 30, 15, "initialEvent != null");
    this[_latestEvent] = initialEvent;
    ;
  }).prototype = mouse_tracker._MouseState.prototype;
  dart.addTypeTests(mouse_tracker._MouseState);
  dart.addTypeCaches(mouse_tracker._MouseState);
  dart.setMethodSignature(mouse_tracker._MouseState, () => ({
    __proto__: dart.getMethods(mouse_tracker._MouseState.__proto__),
    replaceAnnotations: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)]),
    replaceLatestEvent: dart.fnType(events.PointerEvent, [events.PointerEvent])
  }));
  dart.setGetterSignature(mouse_tracker._MouseState, () => ({
    __proto__: dart.getGetters(mouse_tracker._MouseState.__proto__),
    annotations: collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4),
    latestEvent: events.PointerEvent,
    device: core.int
  }));
  dart.setLibraryUri(mouse_tracker._MouseState, I[9]);
  dart.setFieldSignature(mouse_tracker._MouseState, () => ({
    __proto__: dart.getFields(mouse_tracker._MouseState.__proto__),
    [_annotations]: dart.fieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    [_latestEvent]: dart.fieldType(events.PointerEvent)
  }));
  dart.defineExtensionMethods(mouse_tracker._MouseState, ['toString']);
  var lastAnnotations$ = dart.privateName(mouse_tracker, "_MouseTrackerUpdateDetails.lastAnnotations");
  var nextAnnotations$ = dart.privateName(mouse_tracker, "_MouseTrackerUpdateDetails.nextAnnotations");
  var previousEvent$ = dart.privateName(mouse_tracker, "_MouseTrackerUpdateDetails.previousEvent");
  var triggeringEvent$ = dart.privateName(mouse_tracker, "_MouseTrackerUpdateDetails.triggeringEvent");
  const Object_Diagnosticable$36 = class Object_Diagnosticable extends core.Object {};
  (Object_Diagnosticable$36.new = function() {
  }).prototype = Object_Diagnosticable$36.prototype;
  dart.applyMixin(Object_Diagnosticable$36, diagnostics.Diagnosticable);
  mouse_tracker._MouseTrackerUpdateDetails = class _MouseTrackerUpdateDetails extends Object_Diagnosticable$36 {
    get lastAnnotations() {
      return this[lastAnnotations$];
    }
    set lastAnnotations(value) {
      super.lastAnnotations = value;
    }
    get nextAnnotations() {
      return this[nextAnnotations$];
    }
    set nextAnnotations(value) {
      super.nextAnnotations = value;
    }
    get previousEvent() {
      return this[previousEvent$];
    }
    set previousEvent(value) {
      super.previousEvent = value;
    }
    get triggeringEvent() {
      return this[triggeringEvent$];
    }
    set triggeringEvent(value) {
      super.triggeringEvent = value;
    }
    static ['_#byNewFrame#tearOff'](opts) {
      let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
      let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
      let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
      return new mouse_tracker._MouseTrackerUpdateDetails.byNewFrame({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: previousEvent});
    }
    static ['_#byPointerEvent#tearOff'](opts) {
      let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
      let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
      let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
      let triggeringEvent = opts && 'triggeringEvent' in opts ? opts.triggeringEvent : null;
      return new mouse_tracker._MouseTrackerUpdateDetails.byPointerEvent({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: previousEvent, triggeringEvent: triggeringEvent});
    }
    get device() {
      let t29;
      let result = dart.nullCheck((t29 = this.previousEvent, t29 == null ? this.triggeringEvent : t29)).device;
      if (!(result !== null)) dart.assertFailed(null, I[8], 129, 12, "result != null");
      return result;
    }
    get latestEvent() {
      let t29;
      let result = (t29 = this.triggeringEvent, t29 == null ? dart.nullCheck(this.previousEvent) : t29);
      if (!(result !== null)) dart.assertFailed(null, I[8], 138, 12, "result != null");
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.IntProperty.new("device", this.device));
      properties.add(new (T$.DiagnosticsPropertyOfPointerEvent()).new("previousEvent", this.previousEvent));
      properties.add(new (T$.DiagnosticsPropertyOfPointerEvent()).new("triggeringEvent", this.triggeringEvent));
      properties.add(new (T$.DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4()).new("lastAnnotations", this.lastAnnotations));
      properties.add(new (T$.DiagnosticsPropertyOfMapOfMouseTrackerAnnotation$Matrix4()).new("nextAnnotations", this.nextAnnotations));
    }
  };
  (mouse_tracker._MouseTrackerUpdateDetails.byNewFrame = function(opts) {
    let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
    let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
    let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
    this[lastAnnotations$] = lastAnnotations;
    this[nextAnnotations$] = nextAnnotations;
    this[previousEvent$] = previousEvent;
    if (!(previousEvent !== null)) dart.assertFailed(null, I[8], 83, 15, "previousEvent != null");
    if (!(lastAnnotations !== null)) dart.assertFailed(null, I[8], 84, 15, "lastAnnotations != null");
    if (!(nextAnnotations !== null)) dart.assertFailed(null, I[8], 85, 15, "nextAnnotations != null");
    this[triggeringEvent$] = null;
    ;
  }).prototype = mouse_tracker._MouseTrackerUpdateDetails.prototype;
  (mouse_tracker._MouseTrackerUpdateDetails.byPointerEvent = function(opts) {
    let lastAnnotations = opts && 'lastAnnotations' in opts ? opts.lastAnnotations : null;
    let nextAnnotations = opts && 'nextAnnotations' in opts ? opts.nextAnnotations : null;
    let previousEvent = opts && 'previousEvent' in opts ? opts.previousEvent : null;
    let triggeringEvent = opts && 'triggeringEvent' in opts ? opts.triggeringEvent : null;
    this[lastAnnotations$] = lastAnnotations;
    this[nextAnnotations$] = nextAnnotations;
    this[previousEvent$] = previousEvent;
    this[triggeringEvent$] = triggeringEvent;
    if (!(triggeringEvent !== null)) dart.assertFailed(null, I[8], 97, 15, "triggeringEvent != null");
    if (!(lastAnnotations !== null)) dart.assertFailed(null, I[8], 98, 15, "lastAnnotations != null");
    if (!(nextAnnotations !== null)) dart.assertFailed(null, I[8], 99, 15, "nextAnnotations != null");
    ;
  }).prototype = mouse_tracker._MouseTrackerUpdateDetails.prototype;
  dart.addTypeTests(mouse_tracker._MouseTrackerUpdateDetails);
  dart.addTypeCaches(mouse_tracker._MouseTrackerUpdateDetails);
  dart.setGetterSignature(mouse_tracker._MouseTrackerUpdateDetails, () => ({
    __proto__: dart.getGetters(mouse_tracker._MouseTrackerUpdateDetails.__proto__),
    device: core.int,
    latestEvent: events.PointerEvent
  }));
  dart.setLibraryUri(mouse_tracker._MouseTrackerUpdateDetails, I[9]);
  dart.setFieldSignature(mouse_tracker._MouseTrackerUpdateDetails, () => ({
    __proto__: dart.getFields(mouse_tracker._MouseTrackerUpdateDetails.__proto__),
    lastAnnotations: dart.finalFieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    nextAnnotations: dart.finalFieldType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4)),
    previousEvent: dart.finalFieldType(dart.nullable(events.PointerEvent)),
    triggeringEvent: dart.finalFieldType(dart.nullable(events.PointerEvent))
  }));
  var _mouseCursorMixin = dart.privateName(mouse_tracker, "_mouseCursorMixin");
  var _mouseStates = dart.privateName(mouse_tracker, "_mouseStates");
  var _debugDuringDeviceUpdate = dart.privateName(mouse_tracker, "_debugDuringDeviceUpdate");
  var _monitorMouseConnection = dart.privateName(mouse_tracker, "_monitorMouseConnection");
  var _deviceUpdatePhase = dart.privateName(mouse_tracker, "_deviceUpdatePhase");
  var _hitTestResultToAnnotations = dart.privateName(mouse_tracker, "_hitTestResultToAnnotations");
  var _findAnnotations = dart.privateName(mouse_tracker, "_findAnnotations");
  var _handleDeviceUpdate = dart.privateName(mouse_tracker, "_handleDeviceUpdate");
  mouse_tracker.MouseTracker = class MouseTracker extends change_notifier.ChangeNotifier {
    [_monitorMouseConnection](task) {
      let mouseWasConnected = this.mouseIsConnected;
      task();
      if (mouseWasConnected !== this.mouseIsConnected) this.notifyListeners();
    }
    [_deviceUpdatePhase](task) {
      if (!!this[_debugDuringDeviceUpdate]) dart.assertFailed(null, I[8], 201, 12, "!_debugDuringDeviceUpdate");
      if (!dart.fn(() => {
        this[_debugDuringDeviceUpdate] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[8], 202, 12, "() {\n      _debugDuringDeviceUpdate = true;\n      return true;\n    }()");
      task();
      if (!dart.fn(() => {
        this[_debugDuringDeviceUpdate] = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[8], 207, 12, "() {\n      _debugDuringDeviceUpdate = false;\n      return true;\n    }()");
    }
    static _shouldMarkStateDirty(state, event) {
      if (state == null) return true;
      if (!(event !== null)) dart.assertFailed(null, I[8], 217, 12, "event != null");
      let lastEvent = state.latestEvent;
      if (!(event.device === lastEvent.device)) dart.assertFailed(null, I[8], 219, 12, "event.device == lastEvent.device");
      if (!(events.PointerAddedEvent.is(event) === events.PointerRemovedEvent.is(lastEvent))) dart.assertFailed(null, I[8], 222, 12, "(event is PointerAddedEvent) == (lastEvent is PointerRemovedEvent)");
      if (events.PointerSignalEvent.is(event)) return false;
      return events.PointerAddedEvent.is(lastEvent) || events.PointerRemovedEvent.is(event) || !lastEvent.position._equals(event.position);
    }
    [_hitTestResultToAnnotations](result) {
      if (!(result !== null)) dart.assertFailed(null, I[8], 233, 12, "result != null");
      let annotations = T$.LinkedHashMapOfMouseTrackerAnnotation$Matrix4().as(new (T$.LinkedMapOfMouseTrackerAnnotation$Matrix4()).new());
      for (let entry of result.path) {
        if (mouse_tracking.MouseTrackerAnnotation.is(entry.target)) {
          annotations[$_set](mouse_tracking.MouseTrackerAnnotation.as(entry.target), dart.nullCheck(entry.transform));
        }
      }
      return annotations;
    }
    [_findAnnotations](state, hitTest) {
      if (!(state !== null)) dart.assertFailed(null, I[8], 250, 12, "state != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[8], 251, 12, "hitTest != null");
      let globalPosition = state.latestEvent.position;
      let device = state.device;
      if (!this[_mouseStates][$containsKey](device)) return T$.LinkedHashMapOfMouseTrackerAnnotation$Matrix4().as(new (T$.LinkedMapOfMouseTrackerAnnotation$Matrix4()).new());
      return this[_hitTestResultToAnnotations](hitTest(globalPosition));
    }
    [_handleDeviceUpdate](details) {
      if (!this[_debugDuringDeviceUpdate]) dart.assertFailed(null, I[8], 277, 12, "_debugDuringDeviceUpdate");
      mouse_tracker.MouseTracker._handleDeviceUpdateMouseEvents(details);
      this[_mouseCursorMixin].handleDeviceCursorUpdate(details.device, details.triggeringEvent, details.nextAnnotations[$keys][$map](mouse_cursor.MouseCursor, dart.fn(annotation => annotation.cursor, T$.MouseTrackerAnnotationToMouseCursor())));
    }
    get mouseIsConnected() {
      return this[_mouseStates][$isNotEmpty];
    }
    updateWithEvent(event, getResult) {
      if (event.kind !== ui.PointerDeviceKind.mouse) return;
      if (events.PointerSignalEvent.is(event)) return;
      let result = events.PointerRemovedEvent.is(event) ? new hit_test.HitTestResult.new() : getResult();
      let device = event.device;
      let existingState = this[_mouseStates][$_get](device);
      if (!mouse_tracker.MouseTracker._shouldMarkStateDirty(existingState, event)) return;
      this[_monitorMouseConnection](dart.fn(() => {
        this[_deviceUpdatePhase](dart.fn(() => {
          let t29;
          if (existingState == null) {
            if (!!events.PointerRemovedEvent.is(event)) dart.assertFailed(null, I[8], 317, 18, "event is! PointerRemovedEvent");
            this[_mouseStates][$_set](device, new mouse_tracker._MouseState.new({initialEvent: event}));
          } else {
            if (!!events.PointerAddedEvent.is(event)) dart.assertFailed(null, I[8], 320, 18, "event is! PointerAddedEvent");
            if (events.PointerRemovedEvent.is(event)) this[_mouseStates][$remove](event.device);
          }
          let targetState = (t29 = this[_mouseStates][$_get](device), t29 == null ? dart.nullCheck(existingState) : t29);
          let lastEvent = targetState.replaceLatestEvent(event);
          let nextAnnotations = events.PointerRemovedEvent.is(event) ? T$.LinkedHashMapOfMouseTrackerAnnotation$Matrix4().as(new (T$.LinkedMapOfMouseTrackerAnnotation$Matrix4()).new()) : this[_hitTestResultToAnnotations](result);
          let lastAnnotations = targetState.replaceAnnotations(nextAnnotations);
          this[_handleDeviceUpdate](new mouse_tracker._MouseTrackerUpdateDetails.byPointerEvent({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: lastEvent, triggeringEvent: event}));
        }, T$.VoidTovoid()));
      }, T$.VoidTovoid()));
    }
    updateAllDevices(hitTest) {
      this[_deviceUpdatePhase](dart.fn(() => {
        for (let dirtyState of this[_mouseStates][$values]) {
          let lastEvent = dirtyState.latestEvent;
          let nextAnnotations = this[_findAnnotations](dirtyState, hitTest);
          let lastAnnotations = dirtyState.replaceAnnotations(nextAnnotations);
          this[_handleDeviceUpdate](new mouse_tracker._MouseTrackerUpdateDetails.byNewFrame({lastAnnotations: lastAnnotations, nextAnnotations: nextAnnotations, previousEvent: lastEvent}));
        }
      }, T$.VoidTovoid()));
    }
    debugDeviceActiveCursor(device) {
      return this[_mouseCursorMixin].debugDeviceActiveCursor(device);
    }
    static _handleDeviceUpdateMouseEvents(details) {
      let latestEvent = details.latestEvent;
      let lastAnnotations = details.lastAnnotations;
      let nextAnnotations = details.nextAnnotations;
      let baseExitEvent = events.PointerExitEvent.fromMouseEvent(latestEvent);
      lastAnnotations[$forEach](dart.fn((annotation, transform) => {
        if (!nextAnnotations[$containsKey](annotation)) if (annotation.validForMouseTracker && annotation.onExit != null) dart.nullCheck(annotation.onExit)(baseExitEvent.transformed(lastAnnotations[$_get](annotation)));
      }, T$.MouseTrackerAnnotationAndMatrix4Tovoid()));
      let enteringAnnotations = nextAnnotations[$keys][$where](dart.fn(annotation => !lastAnnotations[$containsKey](annotation), T$.MouseTrackerAnnotationTobool()))[$toList]();
      let baseEnterEvent = events.PointerEnterEvent.fromMouseEvent(latestEvent);
      for (let annotation of enteringAnnotations[$reversed]) {
        if (annotation.validForMouseTracker && annotation.onEnter != null) dart.nullCheck(annotation.onEnter)(baseEnterEvent.transformed(nextAnnotations[$_get](annotation)));
      }
    }
    static ['_#new#tearOff']() {
      return new mouse_tracker.MouseTracker.new();
    }
  };
  (mouse_tracker.MouseTracker.new = function() {
    this[_mouseCursorMixin] = new mouse_cursor.MouseCursorManager.new(mouse_cursor.SystemMouseCursors.basic);
    this[_mouseStates] = new (T$.IdentityMapOfint$_MouseState()).new();
    this[_debugDuringDeviceUpdate] = false;
    mouse_tracker.MouseTracker.__proto__.new.call(this);
    ;
  }).prototype = mouse_tracker.MouseTracker.prototype;
  dart.addTypeTests(mouse_tracker.MouseTracker);
  dart.addTypeCaches(mouse_tracker.MouseTracker);
  dart.setMethodSignature(mouse_tracker.MouseTracker, () => ({
    __proto__: dart.getMethods(mouse_tracker.MouseTracker.__proto__),
    [_monitorMouseConnection]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_deviceUpdatePhase]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    [_hitTestResultToAnnotations]: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [hit_test.HitTestResult]),
    [_findAnnotations]: dart.fnType(collection.LinkedHashMap$(mouse_tracking.MouseTrackerAnnotation, vector_math_64.Matrix4), [mouse_tracker._MouseState, dart.fnType(hit_test.HitTestResult, [ui.Offset])]),
    [_handleDeviceUpdate]: dart.fnType(dart.void, [mouse_tracker._MouseTrackerUpdateDetails]),
    updateWithEvent: dart.fnType(dart.void, [events.PointerEvent, dart.fnType(hit_test.HitTestResult, [])]),
    updateAllDevices: dart.fnType(dart.void, [dart.fnType(hit_test.HitTestResult, [ui.Offset])]),
    debugDeviceActiveCursor: dart.fnType(dart.nullable(mouse_cursor.MouseCursor), [core.int])
  }));
  dart.setStaticMethodSignature(mouse_tracker.MouseTracker, () => ['_shouldMarkStateDirty', '_handleDeviceUpdateMouseEvents']);
  dart.setGetterSignature(mouse_tracker.MouseTracker, () => ({
    __proto__: dart.getGetters(mouse_tracker.MouseTracker.__proto__),
    mouseIsConnected: core.bool
  }));
  dart.setLibraryUri(mouse_tracker.MouseTracker, I[9]);
  dart.setFieldSignature(mouse_tracker.MouseTracker, () => ({
    __proto__: dart.getFields(mouse_tracker.MouseTracker.__proto__),
    [_mouseCursorMixin]: dart.finalFieldType(mouse_cursor.MouseCursorManager),
    [_mouseStates]: dart.finalFieldType(core.Map$(core.int, mouse_tracker._MouseState)),
    [_debugDuringDeviceUpdate]: dart.fieldType(core.bool)
  }));
  var _debugIsRenderViewInitialized = dart.privateName(binding$4, "RendererBinding._debugIsRenderViewInitialized");
  var _mouseTracker = dart.privateName(binding$4, "RendererBinding._mouseTracker");
  var _$35RendererBinding$35_pipelineOwner = dart.privateName(binding$4, "RendererBinding._#RendererBinding#_pipelineOwner");
  var _semanticsHandle = dart.privateName(binding$4, "RendererBinding._semanticsHandle");
  var _debugMouseTrackerUpdateScheduled = dart.privateName(binding$4, "RendererBinding._debugMouseTrackerUpdateScheduled");
  var _firstFrameDeferredCount = dart.privateName(binding$4, "RendererBinding._firstFrameDeferredCount");
  var _firstFrameSent = dart.privateName(binding$4, "RendererBinding._firstFrameSent");
  var _debugIsRenderViewInitialized$ = dart.privateName(binding$4, "_debugIsRenderViewInitialized");
  var _mouseTracker$ = dart.privateName(binding$4, "_mouseTracker");
  var __RendererBinding__pipelineOwner = dart.privateName(binding$4, "_#RendererBinding#_pipelineOwner");
  var _semanticsHandle$ = dart.privateName(binding$4, "_semanticsHandle");
  var _debugMouseTrackerUpdateScheduled$ = dart.privateName(binding$4, "_debugMouseTrackerUpdateScheduled");
  var _firstFrameDeferredCount$ = dart.privateName(binding$4, "_firstFrameDeferredCount");
  var _firstFrameSent$ = dart.privateName(binding$4, "_firstFrameSent");
  var _pipelineOwner = dart.privateName(binding$4, "_pipelineOwner");
  var _handleSemanticsOwnerCreated = dart.privateName(binding$4, "_handleSemanticsOwnerCreated");
  var _handleSemanticsOwnerDisposed = dart.privateName(binding$4, "_handleSemanticsOwnerDisposed");
  var _handleSemanticsEnabledChanged = dart.privateName(binding$4, "_handleSemanticsEnabledChanged");
  var _handleSemanticsAction = dart.privateName(binding$4, "_handleSemanticsAction");
  var _handlePersistentFrameCallback = dart.privateName(binding$4, "_handlePersistentFrameCallback");
  var _handleWebFirstFrame = dart.privateName(binding$4, "_handleWebFirstFrame");
  var _forceRepaint = dart.privateName(binding$4, "_forceRepaint");
  var MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  var StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  var MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  var MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  var _scheduleMouseTrackerUpdate = dart.privateName(binding$4, "_scheduleMouseTrackerUpdate");
  const performReassemble = Symbol("performReassemble");
  binding$4.RendererBinding = class RendererBinding extends core.Object {
    static get instance() {
      return binding$4.RendererBinding._instance;
    }
  };
  binding$4.RendererBinding[dart.mixinOn] = _RendererBinding$36BindingBase$36ServicesBinding$36SchedulerBinding$36GestureBinding$36SemanticsBinding$36HitTestable => class RendererBinding extends _RendererBinding$36BindingBase$36ServicesBinding$36SchedulerBinding$36GestureBinding$36SemanticsBinding$36HitTestable {
    get [_debugIsRenderViewInitialized$]() {
      return this[_debugIsRenderViewInitialized];
    }
    set [_debugIsRenderViewInitialized$](value) {
      this[_debugIsRenderViewInitialized] = value;
    }
    get [_mouseTracker$]() {
      return this[_mouseTracker];
    }
    set [_mouseTracker$](value) {
      this[_mouseTracker] = value;
    }
    get [__RendererBinding__pipelineOwner]() {
      return this[_$35RendererBinding$35_pipelineOwner];
    }
    set [__RendererBinding__pipelineOwner](value) {
      this[_$35RendererBinding$35_pipelineOwner] = value;
    }
    get [_semanticsHandle$]() {
      return this[_semanticsHandle];
    }
    set [_semanticsHandle$](value) {
      this[_semanticsHandle] = value;
    }
    get [_debugMouseTrackerUpdateScheduled$]() {
      return this[_debugMouseTrackerUpdateScheduled];
    }
    set [_debugMouseTrackerUpdateScheduled$](value) {
      this[_debugMouseTrackerUpdateScheduled] = value;
    }
    get [_firstFrameDeferredCount$]() {
      return this[_firstFrameDeferredCount];
    }
    set [_firstFrameDeferredCount$](value) {
      this[_firstFrameDeferredCount] = value;
    }
    get [_firstFrameSent$]() {
      return this[_firstFrameSent];
    }
    set [_firstFrameSent$](value) {
      this[_firstFrameSent] = value;
    }
    initInstances() {
      let t29;
      super.initInstances();
      binding$4.RendererBinding._instance = this;
      this[_pipelineOwner] = new object$.PipelineOwner.new({onNeedVisualUpdate: dart.bind(this, 'ensureVisualUpdate'), onSemanticsOwnerCreated: dart.bind(this, _handleSemanticsOwnerCreated), onSemanticsOwnerDisposed: dart.bind(this, _handleSemanticsOwnerDisposed)});
      t29 = this.window;
      (() => {
        t29.onMetricsChanged = dart.bind(this, 'handleMetricsChanged');
        t29.onTextScaleFactorChanged = dart.bind(this, 'handleTextScaleFactorChanged');
        t29.onPlatformBrightnessChanged = dart.bind(this, 'handlePlatformBrightnessChanged');
        t29.onSemanticsEnabledChanged = dart.bind(this, _handleSemanticsEnabledChanged);
        t29.onSemanticsAction = dart.bind(this, _handleSemanticsAction);
        return t29;
      })();
      this.initRenderView();
      this[_handleSemanticsEnabledChanged]();
      if (!(this.renderView !== null)) dart.assertFailed(null, I[10], 50, 12, "renderView != null");
      this.addPersistentFrameCallback(dart.bind(this, _handlePersistentFrameCallback));
      this.initMouseTracker();
      if (true) {
        this.addPostFrameCallback(dart.bind(this, _handleWebFirstFrame));
      }
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.fn(() => {
        this.registerBoolServiceExtension({name: "invertOversizedImages", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$.debugInvertOversizedImages;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => async.async(dart.void, (function*() {
            if (debug$.debugInvertOversizedImages !== value) {
              debug$.debugInvertOversizedImages = value;
              return this[_forceRepaint]();
            }
            return T$.FutureOfvoid().value();
          }).bind(this)), T$.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugPaint", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugPaintSizeEnabled;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$0.debugPaintSizeEnabled === value) return T$.FutureOfvoid().value();
            debug$0.debugPaintSizeEnabled = value;
            return this[_forceRepaint]();
          }, T$.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugPaintBaselinesEnabled", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugPaintBaselinesEnabled;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$0.debugPaintBaselinesEnabled === value) return T$.FutureOfvoid().value();
            debug$0.debugPaintBaselinesEnabled = value;
            return this[_forceRepaint]();
          }, T$.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "repaintRainbow", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugRepaintRainbowEnabled;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => {
            let repaint = debug$0.debugRepaintRainbowEnabled && !value;
            debug$0.debugRepaintRainbowEnabled = value;
            if (repaint) return this[_forceRepaint]();
            return T$.FutureOfvoid().value();
          }, T$.boolToFutureOfvoid())});
        this.registerServiceExtension({name: "debugDumpLayerTree", callback: dart.fn(parameters => async.async(T$.MapOfString$Object(), function*() {
            let t30, t29, t29$;
            let data = (t29$ = (t29 = binding$4.RendererBinding.instance, t29 == null ? null : (t30 = t29.renderView.debugLayer, t30 == null ? null : t30.toStringDeep())), t29$ == null ? "Layer tree unavailable." : t29$);
            return new (T$.IdentityMapOfString$Object()).from(["data", data]);
          }), T$.MapOfString$StringToFutureOfMapOfString$Object())});
        this.registerBoolServiceExtension({name: "debugDisableClipLayers", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugDisableClipLayers;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$0.debugDisableClipLayers === value) return T$.FutureOfvoid().value();
            debug$0.debugDisableClipLayers = value;
            return this[_forceRepaint]();
          }, T$.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugDisablePhysicalShapeLayers", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugDisablePhysicalShapeLayers;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$0.debugDisablePhysicalShapeLayers === value) return T$.FutureOfvoid().value();
            debug$0.debugDisablePhysicalShapeLayers = value;
            return this[_forceRepaint]();
          }, T$.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "debugDisableOpacityLayers", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugDisableOpacityLayers;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => {
            if (debug$0.debugDisableOpacityLayers === value) return T$.FutureOfvoid().value();
            debug$0.debugDisableOpacityLayers = value;
            return this[_forceRepaint]();
          }, T$.boolToFutureOfvoid())});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[10], 66, 12, "() {\n      // these service extensions only work in debug mode\n      registerBoolServiceExtension(\n        name: 'invertOversizedImages',\n        getter: () async => debugInvertOversizedImages,\n        setter: (bool value) async {\n          if (debugInvertOversizedImages != value) {\n            debugInvertOversizedImages = value;\n            return _forceRepaint();\n          }\n          return Future<void>.value();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugPaint',\n        getter: () async => debugPaintSizeEnabled,\n        setter: (bool value) {\n          if (debugPaintSizeEnabled == value) return Future<void>.value();\n          debugPaintSizeEnabled = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugPaintBaselinesEnabled',\n        getter: () async => debugPaintBaselinesEnabled,\n        setter: (bool value) {\n          if (debugPaintBaselinesEnabled == value) return Future<void>.value();\n          debugPaintBaselinesEnabled = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'repaintRainbow',\n        getter: () async => debugRepaintRainbowEnabled,\n        setter: (bool value) {\n          final bool repaint = debugRepaintRainbowEnabled && !value;\n          debugRepaintRainbowEnabled = value;\n          if (repaint) return _forceRepaint();\n          return Future<void>.value();\n        },\n      );\n      registerServiceExtension(\n        name: 'debugDumpLayerTree',\n        callback: (Map<String, String> parameters) async {\n          final String data =\n              RendererBinding.instance?.renderView.debugLayer?.toStringDeep() ??\n                  'Layer tree unavailable.';\n          return <String, Object>{\n            'data': data,\n          };\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugDisableClipLayers',\n        getter: () async => debugDisableClipLayers,\n        setter: (bool value) {\n          if (debugDisableClipLayers == value) return Future<void>.value();\n          debugDisableClipLayers = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugDisablePhysicalShapeLayers',\n        getter: () async => debugDisablePhysicalShapeLayers,\n        setter: (bool value) {\n          if (debugDisablePhysicalShapeLayers == value)\n            return Future<void>.value();\n          debugDisablePhysicalShapeLayers = value;\n          return _forceRepaint();\n        },\n      );\n      registerBoolServiceExtension(\n        name: 'debugDisableOpacityLayers',\n        getter: () async => debugDisableOpacityLayers,\n        setter: (bool value) {\n          if (debugDisableOpacityLayers == value) return Future<void>.value();\n          debugDisableOpacityLayers = value;\n          return _forceRepaint();\n        },\n      );\n      return true;\n    }()");
      if (!false) {
        this.registerServiceExtension({name: "debugDumpRenderTree", callback: dart.fn(parameters => async.async(T$.MapOfString$Object(), function*() {
            let t29, t29$;
            let data = (t29$ = (t29 = binding$4.RendererBinding.instance, t29 == null ? null : t29.renderView.toStringDeep()), t29$ == null ? "Render tree unavailable." : t29$);
            return new (T$.IdentityMapOfString$Object()).from(["data", data]);
          }), T$.MapOfString$StringToFutureOfMapOfString$Object())});
        this.registerServiceExtension({name: "debugDumpSemanticsTreeInTraversalOrder", callback: dart.fn(parameters => async.async(T$.MapOfString$Object(), function*() {
            let t30, t29, t29$;
            let data = (t29$ = (t29 = binding$4.RendererBinding.instance, t29 == null ? null : (t30 = t29.renderView.debugSemantics, t30 == null ? null : t30.toStringDeep())), t29$ == null ? "Semantics not collected." : t29$);
            return new (T$.IdentityMapOfString$Object()).from(["data", data]);
          }), T$.MapOfString$StringToFutureOfMapOfString$Object())});
        this.registerServiceExtension({name: "debugDumpSemanticsTreeInInverseHitTestOrder", callback: dart.fn(parameters => async.async(T$.MapOfString$Object(), function*() {
            let t30, t29, t29$;
            let data = (t29$ = (t29 = binding$4.RendererBinding.instance, t29 == null ? null : (t30 = t29.renderView.debugSemantics, t30 == null ? null : t30.toStringDeep({childOrder: semantics.DebugSemanticsDumpOrder.inverseHitTest}))), t29$ == null ? "Semantics not collected." : t29$);
            return new (T$.IdentityMapOfString$Object()).from(["data", data]);
          }), T$.MapOfString$StringToFutureOfMapOfString$Object())});
        this.registerBoolServiceExtension({name: "profileRenderObjectPaints", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugProfilePaintsEnabled;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => async.async(dart.void, function*() {
            if (debug$0.debugProfilePaintsEnabled !== value) debug$0.debugProfilePaintsEnabled = value;
          }), T$.boolToFutureOfvoid())});
        this.registerBoolServiceExtension({name: "profileRenderObjectLayouts", getter: dart.fn(() => async.async(core.bool, function*() {
            return debug$0.debugProfileLayoutsEnabled;
          }), T$.VoidToFutureOfbool()), setter: dart.fn(value => async.async(dart.void, function*() {
            if (debug$0.debugProfileLayoutsEnabled !== value) debug$0.debugProfileLayoutsEnabled = value;
          }), T$.boolToFutureOfvoid())});
      }
    }
    initRenderView() {
      if (!!this[_debugIsRenderViewInitialized$]) dart.assertFailed(null, I[10], 211, 12, "!_debugIsRenderViewInitialized");
      if (!dart.fn(() => {
        this[_debugIsRenderViewInitialized$] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[10], 212, 12, "() {\n      _debugIsRenderViewInitialized = true;\n      return true;\n    }()");
      this.renderView = new view.RenderView.new({configuration: this.createViewConfiguration(), window: this.window});
      this.renderView.prepareInitialFrame();
    }
    get mouseTracker() {
      return dart.nullCheck(this[_mouseTracker$]);
    }
    get pipelineOwner() {
      return this[_pipelineOwner];
    }
    get [_pipelineOwner]() {
      let t29;
      t29 = this[__RendererBinding__pipelineOwner];
      return t29 == null ? dart.throw(new _internal.LateError.fieldNI("_pipelineOwner")) : t29;
    }
    set [_pipelineOwner](t29) {
      this[__RendererBinding__pipelineOwner] = t29;
    }
    get renderView() {
      return view.RenderView.as(dart.nullCheck(this[_pipelineOwner].rootNode));
    }
    set renderView(value) {
      if (!(value !== null)) dart.assertFailed(null, I[10], 239, 12, "value != null");
      this[_pipelineOwner].rootNode = value;
    }
    handleMetricsChanged() {
      if (!(this.renderView !== null)) dart.assertFailed(null, I[10], 248, 12, "renderView != null");
      this.renderView.configuration = this.createViewConfiguration();
      this.scheduleForcedFrame();
    }
    handleTextScaleFactorChanged() {
    }
    handlePlatformBrightnessChanged() {
    }
    createViewConfiguration() {
      let devicePixelRatio = this.window.devicePixelRatio;
      return new view.ViewConfiguration.new({size: this.window.physicalSize['/'](devicePixelRatio), devicePixelRatio: devicePixelRatio});
    }
    initMouseTracker(tracker = null) {
      let t30, t30$;
      t30 = this[_mouseTracker$];
      t30 == null ? null : t30.dispose();
      this[_mouseTracker$] = (t30$ = tracker, t30$ == null ? new mouse_tracker.MouseTracker.new() : t30$);
    }
    dispatchEvent(event, hitTestResult) {
      dart.nullCheck(this[_mouseTracker$]).updateWithEvent(event, dart.fn(() => hitTestResult == null || events.PointerMoveEvent.is(event) ? this.renderView.hitTestMouseTrackers(event.position) : hitTestResult, T$.VoidToHitTestResult()));
      super.dispatchEvent(event, hitTestResult);
    }
    [_handleSemanticsEnabledChanged]() {
      this.setSemanticsEnabled(this.window.semanticsEnabled);
    }
    setSemanticsEnabled(enabled) {
      let t30;
      if (enabled) {
        this[_semanticsHandle$] == null ? this[_semanticsHandle$] = this[_pipelineOwner].ensureSemantics() : null;
      } else {
        t30 = this[_semanticsHandle$];
        t30 == null ? null : t30.dispose();
        this[_semanticsHandle$] = null;
      }
    }
    [_handleWebFirstFrame](_) {
      if (!true) dart.assertFailed(null, I[10], 356, 12, "kIsWeb");
      let methodChannel = C[22] || CT.C22;
      methodChannel.invokeMethod(dart.void, "first-frame");
    }
    [_handleSemanticsAction](id, action, args) {
      let t30;
      t30 = this[_pipelineOwner].semanticsOwner;
      t30 == null ? null : t30.performAction(id, action, args != null ? (C[24] || CT.C24).decodeMessage(args) : null);
    }
    [_handleSemanticsOwnerCreated]() {
      this.renderView.scheduleInitialSemantics();
    }
    [_handleSemanticsOwnerDisposed]() {
      this.renderView.clearSemantics();
    }
    [_handlePersistentFrameCallback](timeStamp) {
      this.drawFrame();
      this[_scheduleMouseTrackerUpdate]();
    }
    [_scheduleMouseTrackerUpdate]() {
      if (!!this[_debugMouseTrackerUpdateScheduled$]) dart.assertFailed(null, I[10], 384, 12, "!_debugMouseTrackerUpdateScheduled");
      if (!dart.fn(() => {
        this[_debugMouseTrackerUpdateScheduled$] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[10], 385, 12, "() {\n      _debugMouseTrackerUpdateScheduled = true;\n      return true;\n    }()");
      dart.nullCheck(binding$.SchedulerBinding.instance).addPostFrameCallback(dart.fn(duration => {
        if (!this[_debugMouseTrackerUpdateScheduled$]) dart.assertFailed(null, I[10], 390, 14, "_debugMouseTrackerUpdateScheduled");
        if (!dart.fn(() => {
          this[_debugMouseTrackerUpdateScheduled$] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[10], 391, 14, "() {\n        _debugMouseTrackerUpdateScheduled = false;\n        return true;\n      }()");
        dart.nullCheck(this[_mouseTracker$]).updateAllDevices(dart.bind(this.renderView, 'hitTestMouseTrackers'));
      }, T$.DurationTovoid()));
    }
    get sendFramesToEngine() {
      return this[_firstFrameSent$] || this[_firstFrameDeferredCount$] === 0;
    }
    deferFirstFrame() {
      if (!(this[_firstFrameDeferredCount$] >= 0)) dart.assertFailed(null, I[10], 425, 12, "_firstFrameDeferredCount >= 0");
      this[_firstFrameDeferredCount$] = this[_firstFrameDeferredCount$] + 1;
    }
    allowFirstFrame() {
      if (!(this[_firstFrameDeferredCount$] > 0)) dart.assertFailed(null, I[10], 438, 12, "_firstFrameDeferredCount > 0");
      this[_firstFrameDeferredCount$] = this[_firstFrameDeferredCount$] - 1;
      if (!this[_firstFrameSent$]) this.scheduleWarmUpFrame();
    }
    resetFirstFrameSent() {
      this[_firstFrameSent$] = false;
    }
    drawFrame() {
      if (!(this.renderView !== null)) dart.assertFailed(null, I[10], 511, 12, "renderView != null");
      this.pipelineOwner.flushLayout();
      this.pipelineOwner.flushCompositingBits();
      this.pipelineOwner.flushPaint();
      if (this.sendFramesToEngine) {
        this.renderView.compositeFrame();
        this.pipelineOwner.flushSemantics();
        this[_firstFrameSent$] = true;
      }
    }
    performReassemble() {
      return async.async(dart.void, (function* performReassemble$() {
        let t30;
        yield this[performReassemble]();
        if ((t30 = binding$0.BindingBase.debugReassembleConfig, t30 == null ? null : t30.widgetName) == null) {
          if (!false) {
            developer.Timeline.startSync("Preparing Hot Reload (layout)", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
          }
          try {
            this.renderView.reassemble();
          } finally {
            if (!false) {
              developer.Timeline.finishSync();
            }
          }
        }
        this.scheduleWarmUpFrame();
        yield this.endOfFrame;
      }).bind(this));
    }
    hitTest(result, position) {
      if (!(this.renderView !== null)) dart.assertFailed(null, I[10], 545, 12, "renderView != null");
      if (!(result !== null)) dart.assertFailed(null, I[10], 546, 12, "result != null");
      if (!(position !== null)) dart.assertFailed(null, I[10], 547, 12, "position != null");
      this.renderView.hitTest(result, {position: position});
      super.hitTest(result, position);
    }
    [_forceRepaint]() {
      let t34;
      let visitor = null;
      function visitor$35get() {
        let t31;
        t31 = visitor;
        return t31 == null ? dart.throw(new _internal.LateError.localNI("visitor")) : t31;
      }
      dart.fn(visitor$35get, T$.VoidToFn());
      function visitor$35set(t32) {
        return visitor = t32;
      }
      dart.fn(visitor$35set, T$.FnTodynamic());
      visitor$35set(dart.fn(child => {
        child.markNeedsPaint();
        child.visitChildren(visitor$35get());
      }, T$.RenderObjectTovoid()));
      t34 = binding$4.RendererBinding.instance;
      t34 == null ? null : t34.renderView.visitChildren(visitor$35get());
      return this.endOfFrame;
    }
    [performReassemble]() {
      return super.performReassemble();
    }
  };
  (binding$4.RendererBinding[dart.mixinNew] = function() {
    this[_debugIsRenderViewInitialized] = false;
    this[_mouseTracker] = null;
    this[_$35RendererBinding$35_pipelineOwner] = null;
    this[_semanticsHandle] = null;
    this[_debugMouseTrackerUpdateScheduled] = false;
    this[_firstFrameDeferredCount] = 0;
    this[_firstFrameSent] = false;
  }).prototype = binding$4.RendererBinding.prototype;
  dart.addTypeTests(binding$4.RendererBinding);
  dart.addTypeCaches(binding$4.RendererBinding);
  binding$4.RendererBinding[dart.implements] = () => [hit_test.HitTestable, binding$1.SemanticsBinding, binding$2.GestureBinding, binding$.SchedulerBinding, binding.ServicesBinding, binding$0.BindingBase];
  dart.setMethodSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getMethods(binding$4.RendererBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    initRenderView: dart.fnType(dart.void, []),
    handleMetricsChanged: dart.fnType(dart.void, []),
    handleTextScaleFactorChanged: dart.fnType(dart.void, []),
    handlePlatformBrightnessChanged: dart.fnType(dart.void, []),
    createViewConfiguration: dart.fnType(view.ViewConfiguration, []),
    initMouseTracker: dart.fnType(dart.void, [], [dart.nullable(mouse_tracker.MouseTracker)]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, dart.nullable(hit_test.HitTestResult)]),
    [_handleSemanticsEnabledChanged]: dart.fnType(dart.void, []),
    setSemanticsEnabled: dart.fnType(dart.void, [core.bool]),
    [_handleWebFirstFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleSemanticsAction]: dart.fnType(dart.void, [core.int, ui.SemanticsAction, dart.nullable(typed_data.ByteData)]),
    [_handleSemanticsOwnerCreated]: dart.fnType(dart.void, []),
    [_handleSemanticsOwnerDisposed]: dart.fnType(dart.void, []),
    [_handlePersistentFrameCallback]: dart.fnType(dart.void, [core.Duration]),
    [_scheduleMouseTrackerUpdate]: dart.fnType(dart.void, []),
    deferFirstFrame: dart.fnType(dart.void, []),
    allowFirstFrame: dart.fnType(dart.void, []),
    resetFirstFrameSent: dart.fnType(dart.void, []),
    drawFrame: dart.fnType(dart.void, []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    hitTest: dart.fnType(dart.void, [hit_test.HitTestResult, ui.Offset]),
    [_forceRepaint]: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getGetters(binding$4.RendererBinding.__proto__),
    mouseTracker: mouse_tracker.MouseTracker,
    pipelineOwner: object$.PipelineOwner,
    [_pipelineOwner]: object$.PipelineOwner,
    renderView: view.RenderView,
    sendFramesToEngine: core.bool
  }));
  dart.setSetterSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getSetters(binding$4.RendererBinding.__proto__),
    [_pipelineOwner]: object$.PipelineOwner,
    renderView: view.RenderView
  }));
  dart.setStaticGetterSignature(binding$4.RendererBinding, () => ['instance']);
  dart.setLibraryUri(binding$4.RendererBinding, I[11]);
  dart.setFieldSignature(binding$4.RendererBinding, () => ({
    __proto__: dart.getFields(binding$4.RendererBinding.__proto__),
    [_debugIsRenderViewInitialized$]: dart.fieldType(core.bool),
    [_mouseTracker$]: dart.fieldType(dart.nullable(mouse_tracker.MouseTracker)),
    [__RendererBinding__pipelineOwner]: dart.fieldType(dart.nullable(object$.PipelineOwner)),
    [_semanticsHandle$]: dart.fieldType(dart.nullable(object$.SemanticsHandle)),
    [_debugMouseTrackerUpdateScheduled$]: dart.fieldType(core.bool),
    [_firstFrameDeferredCount$]: dart.fieldType(core.int),
    [_firstFrameSent$]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(binding$4.RendererBinding, () => ['_instance']);
  dart.defineLazy(binding$4.RendererBinding, {
    /*binding$4.RendererBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, false);
  const BindingBase_GestureBinding$36 = class BindingBase_GestureBinding extends binding$0.BindingBase {};
  (BindingBase_GestureBinding$36.new = function() {
    binding$2.GestureBinding[dart.mixinNew].call(this);
    BindingBase_GestureBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_GestureBinding$36.prototype;
  dart.applyMixin(BindingBase_GestureBinding$36, binding$2.GestureBinding);
  const BindingBase_SchedulerBinding$36 = class BindingBase_SchedulerBinding extends BindingBase_GestureBinding$36 {};
  (BindingBase_SchedulerBinding$36.new = function() {
    binding$.SchedulerBinding[dart.mixinNew].call(this);
    BindingBase_SchedulerBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_SchedulerBinding$36.prototype;
  dart.applyMixin(BindingBase_SchedulerBinding$36, binding$.SchedulerBinding);
  const BindingBase_ServicesBinding$36 = class BindingBase_ServicesBinding extends BindingBase_SchedulerBinding$36 {};
  (BindingBase_ServicesBinding$36.new = function() {
    binding.ServicesBinding[dart.mixinNew].call(this);
    BindingBase_ServicesBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_ServicesBinding$36.prototype;
  dart.applyMixin(BindingBase_ServicesBinding$36, binding.ServicesBinding);
  const BindingBase_SemanticsBinding$36 = class BindingBase_SemanticsBinding extends BindingBase_ServicesBinding$36 {};
  (BindingBase_SemanticsBinding$36.new = function() {
    binding$1.SemanticsBinding[dart.mixinNew].call(this);
    BindingBase_SemanticsBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_SemanticsBinding$36.prototype;
  dart.applyMixin(BindingBase_SemanticsBinding$36, binding$1.SemanticsBinding);
  const BindingBase_PaintingBinding$36 = class BindingBase_PaintingBinding extends BindingBase_SemanticsBinding$36 {};
  (BindingBase_PaintingBinding$36.new = function() {
    binding$3.PaintingBinding[dart.mixinNew].call(this);
    BindingBase_PaintingBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_PaintingBinding$36.prototype;
  dart.applyMixin(BindingBase_PaintingBinding$36, binding$3.PaintingBinding);
  const BindingBase_RendererBinding$36 = class BindingBase_RendererBinding extends BindingBase_PaintingBinding$36 {};
  (BindingBase_RendererBinding$36.new = function() {
    binding$4.RendererBinding[dart.mixinNew].call(this);
    BindingBase_RendererBinding$36.__proto__.new.call(this);
  }).prototype = BindingBase_RendererBinding$36.prototype;
  dart.applyMixin(BindingBase_RendererBinding$36, binding$4.RendererBinding);
  binding$4.RenderingFlutterBinding = class RenderingFlutterBinding extends BindingBase_RendererBinding$36 {
    static ['_#new#tearOff'](opts) {
      let root = opts && 'root' in opts ? opts.root : null;
      return new binding$4.RenderingFlutterBinding.new({root: root});
    }
  };
  (binding$4.RenderingFlutterBinding.new = function(opts) {
    let root = opts && 'root' in opts ? opts.root : null;
    binding$4.RenderingFlutterBinding.__proto__.new.call(this);
    if (!(this.renderView !== null)) dart.assertFailed(null, I[10], 610, 12, "renderView != null");
    this.renderView.child = root;
  }).prototype = binding$4.RenderingFlutterBinding.prototype;
  dart.addTypeTests(binding$4.RenderingFlutterBinding);
  dart.addTypeCaches(binding$4.RenderingFlutterBinding);
  dart.setLibraryUri(binding$4.RenderingFlutterBinding, I[11]);
  binding$4.debugDumpRenderTree = function debugDumpRenderTree() {
    let t34, t34$;
    print.debugPrint((t34$ = (t34 = binding$4.RendererBinding.instance, t34 == null ? null : t34.renderView.toStringDeep()), t34$ == null ? "Render tree unavailable." : t34$));
  };
  binding$4.debugDumpLayerTree = function debugDumpLayerTree() {
    let t35, t34, t34$;
    print.debugPrint((t34$ = (t34 = binding$4.RendererBinding.instance, t34 == null ? null : (t35 = t34.renderView.debugLayer, t35 == null ? null : t35.toStringDeep())), t34$ == null ? "Layer tree unavailable." : t34$));
  };
  binding$4.debugDumpSemanticsTree = function debugDumpSemanticsTree(childOrder) {
    let t35, t34, t34$;
    print.debugPrint((t34$ = (t34 = binding$4.RendererBinding.instance, t34 == null ? null : (t35 = t34.renderView.debugSemantics, t35 == null ? null : t35.toStringDeep({childOrder: childOrder}))), t34$ == null ? "Semantics not collected." : t34$));
  };
  object$.ParentData = class ParentData extends core.Object {
    detach() {
    }
    toString() {
      return "<none>";
    }
    static ['_#new#tearOff']() {
      return new object$.ParentData.new();
    }
  };
  (object$.ParentData.new = function() {
    ;
  }).prototype = object$.ParentData.prototype;
  dart.addTypeTests(object$.ParentData);
  dart.addTypeCaches(object$.ParentData);
  dart.setMethodSignature(object$.ParentData, () => ({
    __proto__: dart.getMethods(object$.ParentData.__proto__),
    detach: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.ParentData, I[5]);
  dart.defineExtensionMethods(object$.ParentData, ['toString']);
  var estimatedBounds$ = dart.privateName(object$, "PaintingContext.estimatedBounds");
  var _currentLayer = dart.privateName(object$, "_currentLayer");
  var _recorder = dart.privateName(object$, "_recorder");
  var _canvas = dart.privateName(object$, "_canvas");
  var _containerLayer$ = dart.privateName(object$, "_containerLayer");
  var _compositeChild = dart.privateName(object$, "_compositeChild");
  var _isRecording = dart.privateName(object$, "_isRecording");
  var _startRecording = dart.privateName(object$, "_startRecording");
  object$.PaintingContext = class PaintingContext extends clip.ClipContext {
    get estimatedBounds() {
      return this[estimatedBounds$];
    }
    set estimatedBounds(value) {
      super.estimatedBounds = value;
    }
    static ['_#new#tearOff'](_containerLayer, estimatedBounds) {
      return new object$.PaintingContext.new(_containerLayer, estimatedBounds);
    }
    static repaintCompositedChild(child, opts) {
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      if (!child[_needsPaint]) dart.assertFailed(null, I[4], 114, 12, "child._needsPaint");
      object$.PaintingContext._repaintCompositedChild(child, {debugAlsoPaintedParent: debugAlsoPaintedParent});
    }
    static _repaintCompositedChild(child, opts) {
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      let childContext = opts && 'childContext' in opts ? opts.childContext : null;
      if (!child.isRepaintBoundary) dart.assertFailed(null, I[4], 126, 12, "child.isRepaintBoundary");
      if (!dart.fn(() => {
        child.debugRegisterRepaintBoundaryPaint({includedParent: debugAlsoPaintedParent, includedChild: true});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 127, 12, "() {\n      // register the call for RepaintBoundary metrics\n      child.debugRegisterRepaintBoundaryPaint(\n        includedParent: debugAlsoPaintedParent,\n        includedChild: true,\n      );\n      return true;\n    }()");
      let childLayer = T$.OffsetLayerN().as(child[_layerHandle].layer);
      if (childLayer == null) {
        if (!debugAlsoPaintedParent) dart.assertFailed(null, I[4], 137, 14, "debugAlsoPaintedParent");
        if (!(child[_layerHandle].layer == null)) dart.assertFailed(null, I[4], 138, 14, "child._layerHandle.layer == null");
        let layer = new layer$.OffsetLayer.new();
        child[_layerHandle].layer = childLayer = layer;
      } else {
        if (!(debugAlsoPaintedParent || childLayer.attached)) dart.assertFailed(null, I[4], 146, 14, "debugAlsoPaintedParent || childLayer.attached");
        childLayer.removeAllChildren();
      }
      if (!(childLayer == child[_layerHandle].layer)) dart.assertFailed(null, I[4], 149, 12, "identical(childLayer, child._layerHandle.layer)");
      if (!layer$.OffsetLayer.is(child[_layerHandle].layer)) dart.assertFailed(null, I[4], 150, 12, "child._layerHandle.layer is OffsetLayer");
      if (!dart.fn(() => {
        let t34;
        dart.nullCheck(childLayer).debugCreator = (t34 = child.debugCreator, t34 == null ? child[$runtimeType] : t34);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 151, 12, "() {\n      childLayer!.debugCreator = child.debugCreator ?? child.runtimeType;\n      return true;\n    }()");
      childContext == null ? childContext = new object$.PaintingContext.new(childLayer, child.paintBounds) : null;
      child[_paintWithContext](childContext, ui.Offset.zero);
      if (!(childLayer == child[_layerHandle].layer)) dart.assertFailed(null, I[4], 160, 12, "identical(childLayer, child._layerHandle.layer)");
      childContext.stopRecordingIfNeeded();
    }
    static debugInstrumentRepaintCompositedChild(child, opts) {
      let debugAlsoPaintedParent = opts && 'debugAlsoPaintedParent' in opts ? opts.debugAlsoPaintedParent : false;
      let customContext = opts && 'customContext' in opts ? opts.customContext : null;
      if (!dart.fn(() => {
        object$.PaintingContext._repaintCompositedChild(child, {debugAlsoPaintedParent: debugAlsoPaintedParent, childContext: customContext});
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 177, 12, "() {\n      _repaintCompositedChild(\n        child,\n        debugAlsoPaintedParent: debugAlsoPaintedParent,\n        childContext: customContext,\n      );\n      return true;\n    }()");
    }
    paintChild(child, offset) {
      if (!dart.fn(() => {
        let t34;
        t34 = debug$0.debugOnProfilePaint;
        t34 == null ? null : t34(child);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 193, 12, "() {\n      debugOnProfilePaint?.call(child);\n      return true;\n    }()");
      if (child.isRepaintBoundary) {
        this.stopRecordingIfNeeded();
        this[_compositeChild](child, offset);
      } else {
        child[_paintWithContext](this, offset);
      }
    }
    [_compositeChild](child, offset) {
      if (!!this[_isRecording]) dart.assertFailed(null, I[4], 207, 12, "!_isRecording");
      if (!child.isRepaintBoundary) dart.assertFailed(null, I[4], 208, 12, "child.isRepaintBoundary");
      if (!(this[_canvas] == null || dart.nullCheck(this[_canvas]).getSaveCount() === 1)) dart.assertFailed(null, I[4], 209, 12, "_canvas == null || _canvas!.getSaveCount() == 1");
      if (child[_needsPaint]) {
        object$.PaintingContext.repaintCompositedChild(child, {debugAlsoPaintedParent: true});
      } else {
        if (!dart.fn(() => {
          let t34;
          child.debugRegisterRepaintBoundaryPaint();
          dart.nullCheck(child[_layerHandle].layer).debugCreator = (t34 = child.debugCreator, t34 == null ? child : t34);
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 215, 14, "() {\n        // register the call for RepaintBoundary metrics\n        child.debugRegisterRepaintBoundaryPaint();\n        child._layerHandle.layer!.debugCreator = child.debugCreator ?? child;\n        return true;\n      }()");
      }
      if (!layer$.OffsetLayer.is(child[_layerHandle].layer)) dart.assertFailed(null, I[4], 222, 12, "child._layerHandle.layer is OffsetLayer");
      let childOffsetLayer = layer$.OffsetLayer.as(dart.nullCheck(child[_layerHandle].layer));
      childOffsetLayer.offset = offset;
      this.appendLayer(childOffsetLayer);
    }
    appendLayer(layer) {
      if (!!this[_isRecording]) dart.assertFailed(null, I[4], 240, 12, "!_isRecording");
      layer.remove();
      this[_containerLayer$].append(layer);
    }
    get [_isRecording]() {
      let hasCanvas = this[_canvas] != null;
      if (!dart.fn(() => {
        if (hasCanvas) {
          if (!(this[_currentLayer] != null)) dart.assertFailed(null, I[4], 249, 16, "_currentLayer != null");
          if (!(this[_recorder] != null)) dart.assertFailed(null, I[4], 250, 16, "_recorder != null");
          if (!(this[_canvas] != null)) dart.assertFailed(null, I[4], 251, 16, "_canvas != null");
        } else {
          if (!(this[_currentLayer] == null)) dart.assertFailed(null, I[4], 253, 16, "_currentLayer == null");
          if (!(this[_recorder] == null)) dart.assertFailed(null, I[4], 254, 16, "_recorder == null");
          if (!(this[_canvas] == null)) dart.assertFailed(null, I[4], 255, 16, "_canvas == null");
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 247, 12, "() {\n      if (hasCanvas) {\n        assert(_currentLayer != null);\n        assert(_recorder != null);\n        assert(_canvas != null);\n      } else {\n        assert(_currentLayer == null);\n        assert(_recorder == null);\n        assert(_canvas == null);\n      }\n      return true;\n    }()");
      return hasCanvas;
    }
    get canvas() {
      if (this[_canvas] == null) this[_startRecording]();
      if (!(this[_currentLayer] != null)) dart.assertFailed(null, I[4], 275, 12, "_currentLayer != null");
      return dart.nullCheck(this[_canvas]);
    }
    [_startRecording]() {
      if (!!this[_isRecording]) dart.assertFailed(null, I[4], 280, 12, "!_isRecording");
      this[_currentLayer] = new layer$.PictureLayer.new(this.estimatedBounds);
      this[_recorder] = ui.PictureRecorder.new();
      this[_canvas] = ui.Canvas.new(dart.nullCheck(this[_recorder]));
      this[_containerLayer$].append(dart.nullCheck(this[_currentLayer]));
    }
    stopRecordingIfNeeded() {
      if (!this[_isRecording]) return;
      if (!dart.fn(() => {
        let t34, t34$;
        if (debug$0.debugRepaintRainbowEnabled) {
          let paint = (t34 = ui.Paint.new(), (() => {
            t34.style = ui.PaintingStyle.stroke;
            t34.strokeWidth = 6.0;
            t34.color = debug$0.debugCurrentRepaintColor.toColor();
            return t34;
          })());
          this.canvas.drawRect(this.estimatedBounds.deflate(3.0), paint);
        }
        if (debug$0.debugPaintLayerBordersEnabled) {
          let paint = (t34$ = ui.Paint.new(), (() => {
            t34$.style = ui.PaintingStyle.stroke;
            t34$.strokeWidth = 1.0;
            t34$.color = C[25] || CT.C25;
            return t34$;
          })());
          this.canvas.drawRect(this.estimatedBounds, paint);
        }
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 301, 12, "() {\n      if (debugRepaintRainbowEnabled) {\n        final Paint paint = Paint()\n          ..style = PaintingStyle.stroke\n          ..strokeWidth = 6.0\n          ..color = debugCurrentRepaintColor.toColor();\n        canvas.drawRect(estimatedBounds.deflate(3.0), paint);\n      }\n      if (debugPaintLayerBordersEnabled) {\n        final Paint paint = Paint()\n          ..style = PaintingStyle.stroke\n          ..strokeWidth = 1.0\n          ..color = const Color(0xFFFF9800);\n        canvas.drawRect(estimatedBounds, paint);\n      }\n      return true;\n    }()");
      dart.nullCheck(this[_currentLayer]).picture = dart.nullCheck(this[_recorder]).endRecording();
      this[_currentLayer] = null;
      this[_recorder] = null;
      this[_canvas] = null;
    }
    setIsComplexHint() {
      let t34;
      t34 = this[_currentLayer];
      t34 == null ? null : t34.isComplexHint = true;
    }
    setWillChangeHint() {
      let t34;
      t34 = this[_currentLayer];
      t34 == null ? null : t34.willChangeHint = true;
    }
    addLayer(layer) {
      this.stopRecordingIfNeeded();
      this.appendLayer(layer);
    }
    pushLayer(childLayer, painter, offset, opts) {
      let t34;
      let childPaintBounds = opts && 'childPaintBounds' in opts ? opts.childPaintBounds : null;
      if (!(painter !== null)) dart.assertFailed(null, I[4], 393, 12, "painter != null");
      if (childLayer.hasChildren) {
        childLayer.removeAllChildren();
      }
      this.stopRecordingIfNeeded();
      this.appendLayer(childLayer);
      let childContext = this.createChildContext(childLayer, (t34 = childPaintBounds, t34 == null ? this.estimatedBounds : t34));
      painter(childContext, offset);
      childContext.stopRecordingIfNeeded();
    }
    createChildContext(childLayer, bounds) {
      return new object$.PaintingContext.new(childLayer, bounds);
    }
    pushClipRect(needsCompositing, offset, clipRect, painter, opts) {
      let t34, t34$;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[2] || CT.C2;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      let offsetClipRect = clipRect.shift(offset);
      if (needsCompositing) {
        let layer = (t34 = oldLayer, t34 == null ? new layer$.ClipRectLayer.new() : t34);
        t34$ = layer;
        (() => {
          t34$.clipRect = offsetClipRect;
          t34$.clipBehavior = clipBehavior;
          return t34$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetClipRect});
        return layer;
      } else {
        this.clipRectAndPaint(offsetClipRect, clipBehavior, offsetClipRect, dart.fn(() => painter(this, offset), T$.VoidTovoid()));
        return null;
      }
    }
    pushClipRRect(needsCompositing, offset, bounds, clipRRect, painter, opts) {
      let t34, t34$;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(clipBehavior !== null)) dart.assertFailed(null, I[4], 493, 12, "clipBehavior != null");
      let offsetBounds = bounds.shift(offset);
      let offsetClipRRect = clipRRect.shift(offset);
      if (needsCompositing) {
        let layer = (t34 = oldLayer, t34 == null ? new layer$.ClipRRectLayer.new() : t34);
        t34$ = layer;
        (() => {
          t34$.clipRRect = offsetClipRRect;
          t34$.clipBehavior = clipBehavior;
          return t34$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetBounds});
        return layer;
      } else {
        this.clipRRectAndPaint(offsetClipRRect, clipBehavior, offsetBounds, dart.fn(() => painter(this, offset), T$.VoidTovoid()));
        return null;
      }
    }
    pushClipPath(needsCompositing, offset, bounds, clipPath, painter, opts) {
      let t34, t34$;
      let clipBehavior = opts && 'clipBehavior' in opts ? opts.clipBehavior : C[3] || CT.C3;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(clipBehavior !== null)) dart.assertFailed(null, I[4], 532, 12, "clipBehavior != null");
      let offsetBounds = bounds.shift(offset);
      let offsetClipPath = clipPath.shift(offset);
      if (needsCompositing) {
        let layer = (t34 = oldLayer, t34 == null ? new layer$.ClipPathLayer.new() : t34);
        t34$ = layer;
        (() => {
          t34$.clipPath = offsetClipPath;
          t34$.clipBehavior = clipBehavior;
          return t34$;
        })();
        this.pushLayer(layer, painter, offset, {childPaintBounds: offsetBounds});
        return layer;
      } else {
        this.clipPathAndPaint(offsetClipPath, clipBehavior, offsetBounds, dart.fn(() => painter(this, offset), T$.VoidTovoid()));
        return null;
      }
    }
    pushColorFilter(offset, colorFilter, painter, opts) {
      let t34;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      if (!(colorFilter !== null)) dart.assertFailed(null, I[4], 568, 12, "colorFilter != null");
      let layer = (t34 = oldLayer, t34 == null ? new layer$.ColorFilterLayer.new() : t34);
      layer.colorFilter = colorFilter;
      this.pushLayer(layer, painter, offset);
      return layer;
    }
    pushTransform(needsCompositing, offset, transform, painter, opts) {
      let t34, t34$, t34$0;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      let effectiveTransform = (t34 = vector_math_64.Matrix4.translationValues(offset.dx, offset.dy, 0.0), (() => {
        t34.multiply(transform);
        t34.translate(-offset.dx, -offset.dy);
        return t34;
      })());
      if (needsCompositing) {
        let layer = (t34$ = oldLayer, t34$ == null ? new layer$.TransformLayer.new() : t34$);
        layer.transform = effectiveTransform;
        this.pushLayer(layer, painter, offset, {childPaintBounds: matrix_utils.MatrixUtils.inverseTransformRect(effectiveTransform, this.estimatedBounds)});
        return layer;
      } else {
        t34$0 = this.canvas;
        (() => {
          t34$0.save();
          t34$0.transform(effectiveTransform.storage);
          return t34$0;
        })();
        painter(this, offset);
        this.canvas.restore();
        return null;
      }
    }
    pushOpacity(offset, alpha, painter, opts) {
      let t34, t34$;
      let oldLayer = opts && 'oldLayer' in opts ? opts.oldLayer : null;
      let layer = (t34 = oldLayer, t34 == null ? new layer$.OpacityLayer.new() : t34);
      t34$ = layer;
      (() => {
        t34$.alpha = alpha;
        t34$.offset = offset;
        return t34$;
      })();
      this.pushLayer(layer, painter, ui.Offset.zero);
      return layer;
    }
    toString() {
      return object.objectRuntimeType(this, "PaintingContext") + "#" + dart.str(this[$hashCode]) + "(layer: " + dart.str(this[_containerLayer$]) + ", canvas bounds: " + dart.str(this.estimatedBounds) + ")";
    }
  };
  (object$.PaintingContext.new = function(_containerLayer, estimatedBounds) {
    this[_currentLayer] = null;
    this[_recorder] = null;
    this[_canvas] = null;
    this[_containerLayer$] = _containerLayer;
    this[estimatedBounds$] = estimatedBounds;
    if (!(_containerLayer !== null)) dart.assertFailed(null, I[4], 88, 16, "_containerLayer != null");
    if (!(estimatedBounds !== null)) dart.assertFailed(null, I[4], 89, 16, "estimatedBounds != null");
    ;
  }).prototype = object$.PaintingContext.prototype;
  dart.addTypeTests(object$.PaintingContext);
  dart.addTypeCaches(object$.PaintingContext);
  dart.setMethodSignature(object$.PaintingContext, () => ({
    __proto__: dart.getMethods(object$.PaintingContext.__proto__),
    paintChild: dart.fnType(dart.void, [object$.RenderObject, ui.Offset]),
    [_compositeChild]: dart.fnType(dart.void, [object$.RenderObject, ui.Offset]),
    appendLayer: dart.fnType(dart.void, [layer$.Layer]),
    [_startRecording]: dart.fnType(dart.void, []),
    stopRecordingIfNeeded: dart.fnType(dart.void, []),
    setIsComplexHint: dart.fnType(dart.void, []),
    setWillChangeHint: dart.fnType(dart.void, []),
    addLayer: dart.fnType(dart.void, [layer$.Layer]),
    pushLayer: dart.fnType(dart.void, [layer$.ContainerLayer, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]), ui.Offset], {childPaintBounds: dart.nullable(ui.Rect)}, {}),
    createChildContext: dart.fnType(object$.PaintingContext, [layer$.ContainerLayer, ui.Rect]),
    pushClipRect: dart.fnType(dart.nullable(layer$.ClipRectLayer), [core.bool, ui.Offset, ui.Rect, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipRectLayer)}, {}),
    pushClipRRect: dart.fnType(dart.nullable(layer$.ClipRRectLayer), [core.bool, ui.Offset, ui.Rect, ui.RRect, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipRRectLayer)}, {}),
    pushClipPath: dart.fnType(dart.nullable(layer$.ClipPathLayer), [core.bool, ui.Offset, ui.Rect, ui.Path, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {clipBehavior: ui.Clip, oldLayer: dart.nullable(layer$.ClipPathLayer)}, {}),
    pushColorFilter: dart.fnType(layer$.ColorFilterLayer, [ui.Offset, ui.ColorFilter, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.ColorFilterLayer)}, {}),
    pushTransform: dart.fnType(dart.nullable(layer$.TransformLayer), [core.bool, ui.Offset, vector_math_64.Matrix4, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.TransformLayer)}, {}),
    pushOpacity: dart.fnType(layer$.OpacityLayer, [ui.Offset, core.int, dart.fnType(dart.void, [object$.PaintingContext, ui.Offset])], {oldLayer: dart.nullable(layer$.OpacityLayer)}, {})
  }));
  dart.setStaticMethodSignature(object$.PaintingContext, () => ['repaintCompositedChild', '_repaintCompositedChild', 'debugInstrumentRepaintCompositedChild']);
  dart.setGetterSignature(object$.PaintingContext, () => ({
    __proto__: dart.getGetters(object$.PaintingContext.__proto__),
    [_isRecording]: core.bool,
    canvas: ui.Canvas
  }));
  dart.setLibraryUri(object$.PaintingContext, I[5]);
  dart.setFieldSignature(object$.PaintingContext, () => ({
    __proto__: dart.getFields(object$.PaintingContext.__proto__),
    [_containerLayer$]: dart.finalFieldType(layer$.ContainerLayer),
    estimatedBounds: dart.finalFieldType(ui.Rect),
    [_currentLayer]: dart.fieldType(dart.nullable(layer$.PictureLayer)),
    [_recorder]: dart.fieldType(dart.nullable(ui.PictureRecorder)),
    [_canvas]: dart.fieldType(dart.nullable(ui.Canvas))
  }));
  dart.defineExtensionMethods(object$.PaintingContext, ['toString']);
  object$.Constraints = class Constraints extends core.Object {
    debugAssertIsValid(opts) {
      let isAppliedConstraint = opts && 'isAppliedConstraint' in opts ? opts.isAppliedConstraint : false;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!this.isNormalized) dart.assertFailed(null, I[4], 735, 12, "isNormalized");
      return this.isNormalized;
    }
  };
  (object$.Constraints.new = function() {
    ;
  }).prototype = object$.Constraints.prototype;
  dart.addTypeTests(object$.Constraints);
  dart.addTypeCaches(object$.Constraints);
  dart.setMethodSignature(object$.Constraints, () => ({
    __proto__: dart.getMethods(object$.Constraints.__proto__),
    debugAssertIsValid: dart.fnType(core.bool, [], {informationCollector: dart.nullable(dart.fnType(core.Iterable$(diagnostics.DiagnosticsNode), [])), isAppliedConstraint: core.bool}, {})
  }));
  dart.setLibraryUri(object$.Constraints, I[5]);
  var listener$ = dart.privateName(object$, "SemanticsHandle.listener");
  var _owner = dart.privateName(object$, "_owner");
  var _didDisposeSemanticsHandle = dart.privateName(object$, "_didDisposeSemanticsHandle");
  object$.SemanticsHandle = class SemanticsHandle extends core.Object {
    get listener() {
      return this[listener$];
    }
    set listener(value) {
      super.listener = value;
    }
    static ['_#_#tearOff'](owner, listener) {
      return new object$.SemanticsHandle.__(owner, listener);
    }
    dispose() {
      if (this.listener != null) dart.nullCheck(this[_owner].semanticsOwner).removeListener(dart.nullCheck(this.listener));
      this[_owner][_didDisposeSemanticsHandle]();
    }
  };
  (object$.SemanticsHandle.__ = function(owner, listener) {
    this[listener$] = listener;
    if (!(owner !== null)) dart.assertFailed(null, I[4], 770, 16, "owner != null");
    this[_owner] = owner;
    if (this.listener != null) dart.nullCheck(this[_owner].semanticsOwner).addListener(dart.nullCheck(this.listener));
  }).prototype = object$.SemanticsHandle.prototype;
  dart.addTypeTests(object$.SemanticsHandle);
  dart.addTypeCaches(object$.SemanticsHandle);
  dart.setMethodSignature(object$.SemanticsHandle, () => ({
    __proto__: dart.getMethods(object$.SemanticsHandle.__proto__),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.SemanticsHandle, I[5]);
  dart.setFieldSignature(object$.SemanticsHandle, () => ({
    __proto__: dart.getFields(object$.SemanticsHandle.__proto__),
    [_owner]: dart.finalFieldType(object$.PipelineOwner),
    listener: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [])))
  }));
  var onNeedVisualUpdate$ = dart.privateName(object$, "PipelineOwner.onNeedVisualUpdate");
  var onSemanticsOwnerCreated$ = dart.privateName(object$, "PipelineOwner.onSemanticsOwnerCreated");
  var onSemanticsOwnerDisposed$ = dart.privateName(object$, "PipelineOwner.onSemanticsOwnerDisposed");
  var _rootNode = dart.privateName(object$, "_rootNode");
  var _outstandingSemanticsHandles = dart.privateName(object$, "_outstandingSemanticsHandles");
  object$.PipelineOwner = class PipelineOwner extends core.Object {
    get onNeedVisualUpdate() {
      return this[onNeedVisualUpdate$];
    }
    set onNeedVisualUpdate(value) {
      super.onNeedVisualUpdate = value;
    }
    get onSemanticsOwnerCreated() {
      return this[onSemanticsOwnerCreated$];
    }
    set onSemanticsOwnerCreated(value) {
      super.onSemanticsOwnerCreated = value;
    }
    get onSemanticsOwnerDisposed() {
      return this[onSemanticsOwnerDisposed$];
    }
    set onSemanticsOwnerDisposed(value) {
      super.onSemanticsOwnerDisposed = value;
    }
    static ['_#new#tearOff'](opts) {
      let onNeedVisualUpdate = opts && 'onNeedVisualUpdate' in opts ? opts.onNeedVisualUpdate : null;
      let onSemanticsOwnerCreated = opts && 'onSemanticsOwnerCreated' in opts ? opts.onSemanticsOwnerCreated : null;
      let onSemanticsOwnerDisposed = opts && 'onSemanticsOwnerDisposed' in opts ? opts.onSemanticsOwnerDisposed : null;
      return new object$.PipelineOwner.new({onNeedVisualUpdate: onNeedVisualUpdate, onSemanticsOwnerCreated: onSemanticsOwnerCreated, onSemanticsOwnerDisposed: onSemanticsOwnerDisposed});
    }
    requestVisualUpdate() {
      let t34;
      t34 = this.onNeedVisualUpdate;
      t34 == null ? null : t34();
    }
    get rootNode() {
      return this[_rootNode];
    }
    set rootNode(value) {
      let t34, t34$;
      if (dart.equals(this[_rootNode], value)) return;
      t34 = this[_rootNode];
      t34 == null ? null : t34.detach();
      this[_rootNode] = value;
      t34$ = this[_rootNode];
      t34$ == null ? null : t34$.attach(this);
    }
    get debugDoingLayout() {
      return this[_debugDoingLayout];
    }
    flushLayout() {
      let t36;
      if (!false) {
        let debugTimelineArguments = debug.timelineArgumentsIndicatingLandmarkEvent;
        if (!dart.fn(() => {
          if (debug$0.debugProfileLayoutsEnabled) {
            debugTimelineArguments = (() => {
              let t34 = new (T$.IdentityMapOfString$String()).new();
              for (let t35 of debugTimelineArguments[$entries])
                t34[$_set](t35.key, t35.value);
              t34[$_set]("dirty count", dart.str(this[_nodesNeedingLayout][$length]));
              t34[$_set]("dirty list", dart.str(this[_nodesNeedingLayout]));
              return t34;
            })();
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 896, 14, "() {\n        if (debugProfileLayoutsEnabled) {\n          debugTimelineArguments = <String, String>{\n            ...debugTimelineArguments,\n            'dirty count': '${_nodesNeedingLayout.length}',\n            'dirty list': '$_nodesNeedingLayout',\n          };\n        }\n        return true;\n      }()");
        developer.Timeline.startSync("LAYOUT", {arguments: debugTimelineArguments});
      }
      if (!dart.fn(() => {
        this[_debugDoingLayout] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 911, 12, "() {\n      _debugDoingLayout = true;\n      return true;\n    }()");
      try {
        while (this[_nodesNeedingLayout][$isNotEmpty]) {
          let dirtyNodes = this[_nodesNeedingLayout];
          this[_nodesNeedingLayout] = T$.JSArrayOfRenderObject().of([]);
          for (let node of (t36 = dirtyNodes, (() => {
            t36[$sort](dart.fn((a, b) => a.depth - b.depth, T$.RenderObjectAndRenderObjectToint()));
            return t36;
          })())) {
            if (node[_needsLayout] && dart.equals(node.owner, this)) node[_layoutWithoutResize]();
          }
        }
      } finally {
        if (!dart.fn(() => {
          this[_debugDoingLayout] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 926, 14, "() {\n        _debugDoingLayout = false;\n        return true;\n      }()");
        if (!false) {
          developer.Timeline.finishSync();
        }
      }
    }
    [_enableMutationsToDirtySubtrees](callback) {
      if (!this[_debugDoingLayout]) dart.assertFailed(null, I[4], 945, 12, "_debugDoingLayout");
      let oldState = null;
      if (!dart.fn(() => {
        oldState = this[_debugAllowMutationsToDirtySubtrees];
        this[_debugAllowMutationsToDirtySubtrees] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 947, 12, "() {\n      oldState = _debugAllowMutationsToDirtySubtrees;\n      _debugAllowMutationsToDirtySubtrees = true;\n      return true;\n    }()");
      try {
        callback();
      } finally {
        if (!dart.fn(() => {
          this[_debugAllowMutationsToDirtySubtrees] = dart.nullCheck(oldState);
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 955, 14, "() {\n        _debugAllowMutationsToDirtySubtrees = oldState!;\n        return true;\n      }()");
      }
    }
    flushCompositingBits() {
      if (!false) {
        developer.Timeline.startSync("UPDATING COMPOSITING BITS", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      }
      this[_nodesNeedingCompositingBitsUpdate][$sort](dart.fn((a, b) => a.depth - b.depth, T$.RenderObjectAndRenderObjectToint()));
      for (let node of this[_nodesNeedingCompositingBitsUpdate]) {
        if (node[_needsCompositingBitsUpdate] && dart.equals(node.owner, this)) node[_updateCompositingBits]();
      }
      this[_nodesNeedingCompositingBitsUpdate][$clear]();
      if (!false) {
        developer.Timeline.finishSync();
      }
    }
    get debugDoingPaint() {
      return this[_debugDoingPaint];
    }
    flushPaint() {
      let t38;
      if (!false) {
        let debugTimelineArguments = debug.timelineArgumentsIndicatingLandmarkEvent;
        if (!dart.fn(() => {
          if (debug$0.debugProfilePaintsEnabled) {
            debugTimelineArguments = (() => {
              let t36 = new (T$.IdentityMapOfString$String()).new();
              for (let t37 of debugTimelineArguments[$entries])
                t36[$_set](t37.key, t37.value);
              t36[$_set]("dirty count", dart.str(this[_nodesNeedingPaint][$length]));
              t36[$_set]("dirty list", dart.str(this[_nodesNeedingPaint]));
              return t36;
            })();
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1008, 14, "() {\n        if (debugProfilePaintsEnabled) {\n          debugTimelineArguments = <String, String>{\n            ...debugTimelineArguments,\n            'dirty count': '${_nodesNeedingPaint.length}',\n            'dirty list': '$_nodesNeedingPaint',\n          };\n        }\n        return true;\n      }()");
        developer.Timeline.startSync("PAINT", {arguments: debugTimelineArguments});
      }
      if (!dart.fn(() => {
        this[_debugDoingPaint] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1023, 12, "() {\n      _debugDoingPaint = true;\n      return true;\n    }()");
      try {
        let dirtyNodes = this[_nodesNeedingPaint];
        this[_nodesNeedingPaint] = T$.JSArrayOfRenderObject().of([]);
        for (let node of (t38 = dirtyNodes, (() => {
          t38[$sort](dart.fn((a, b) => b.depth - a.depth, T$.RenderObjectAndRenderObjectToint()));
          return t38;
        })())) {
          if (!(node[_layerHandle].layer != null)) dart.assertFailed(null, I[4], 1033, 16, "node._layerHandle.layer != null");
          if (node[_needsPaint] && dart.equals(node.owner, this)) {
            if (dart.nullCheck(node[_layerHandle].layer).attached) {
              object$.PaintingContext.repaintCompositedChild(node);
            } else {
              node[_skippedPaintingOnLayer]();
            }
          }
        }
        if (!this[_nodesNeedingPaint][$isEmpty]) dart.assertFailed(null, I[4], 1042, 14, "_nodesNeedingPaint.isEmpty");
      } finally {
        if (!dart.fn(() => {
          this[_debugDoingPaint] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1044, 14, "() {\n        _debugDoingPaint = false;\n        return true;\n      }()");
        if (!false) {
          developer.Timeline.finishSync();
        }
      }
    }
    get semanticsOwner() {
      return this[_semanticsOwner];
    }
    get debugOutstandingSemanticsHandles() {
      return this[_outstandingSemanticsHandles];
    }
    ensureSemantics(opts) {
      let t38;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      this[_outstandingSemanticsHandles] = this[_outstandingSemanticsHandles] + 1;
      if (this[_outstandingSemanticsHandles] === 1) {
        if (!(this[_semanticsOwner] == null)) dart.assertFailed(null, I[4], 1089, 14, "_semanticsOwner == null");
        this[_semanticsOwner] = new semantics.SemanticsOwner.new();
        t38 = this.onSemanticsOwnerCreated;
        t38 == null ? null : t38();
      }
      return new object$.SemanticsHandle.__(this, listener);
    }
    [_didDisposeSemanticsHandle]() {
      let t38;
      if (!(this[_semanticsOwner] != null)) dart.assertFailed(null, I[4], 1097, 12, "_semanticsOwner != null");
      this[_outstandingSemanticsHandles] = this[_outstandingSemanticsHandles] - 1;
      if (this[_outstandingSemanticsHandles] === 0) {
        dart.nullCheck(this[_semanticsOwner]).dispose();
        this[_semanticsOwner] = null;
        t38 = this.onSemanticsOwnerDisposed;
        t38 == null ? null : t38();
      }
    }
    flushSemantics() {
      let t38;
      if (this[_semanticsOwner] == null) return;
      if (!false) {
        developer.Timeline.startSync("SEMANTICS", {arguments: debug.timelineArgumentsIndicatingLandmarkEvent});
      }
      if (!(this[_semanticsOwner] != null)) dart.assertFailed(null, I[4], 1126, 12, "_semanticsOwner != null");
      if (!dart.fn(() => {
        this[_debugDoingSemantics] = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1127, 12, "() {\n      _debugDoingSemantics = true;\n      return true;\n    }()");
      try {
        let nodesToProcess = (t38 = this[_nodesNeedingSemantics][$toList](), (() => {
          t38[$sort](dart.fn((a, b) => a.depth - b.depth, T$.RenderObjectAndRenderObjectToint()));
          return t38;
        })());
        this[_nodesNeedingSemantics].clear();
        for (let node of nodesToProcess) {
          if (node[_needsSemanticsUpdate] && dart.equals(node.owner, this)) node[_updateSemantics]();
        }
        dart.nullCheck(this[_semanticsOwner]).sendSemanticsUpdate();
      } finally {
        if (!this[_nodesNeedingSemantics][$isEmpty]) dart.assertFailed(null, I[4], 1141, 14, "_nodesNeedingSemantics.isEmpty");
        if (!dart.fn(() => {
          this[_debugDoingSemantics] = false;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 1142, 14, "() {\n        _debugDoingSemantics = false;\n        return true;\n      }()");
        if (!false) {
          developer.Timeline.finishSync();
        }
      }
    }
  };
  (object$.PipelineOwner.new = function(opts) {
    let onNeedVisualUpdate = opts && 'onNeedVisualUpdate' in opts ? opts.onNeedVisualUpdate : null;
    let onSemanticsOwnerCreated = opts && 'onSemanticsOwnerCreated' in opts ? opts.onSemanticsOwnerCreated : null;
    let onSemanticsOwnerDisposed = opts && 'onSemanticsOwnerDisposed' in opts ? opts.onSemanticsOwnerDisposed : null;
    this[_rootNode] = null;
    this[_nodesNeedingLayout] = T$.JSArrayOfRenderObject().of([]);
    this[_debugDoingLayout] = false;
    this[_debugAllowMutationsToDirtySubtrees] = false;
    this[_nodesNeedingCompositingBitsUpdate] = T$.JSArrayOfRenderObject().of([]);
    this[_nodesNeedingPaint] = T$.JSArrayOfRenderObject().of([]);
    this[_debugDoingPaint] = false;
    this[_semanticsOwner] = null;
    this[_outstandingSemanticsHandles] = 0;
    this[_debugDoingSemantics] = false;
    this[_nodesNeedingSemantics] = T$.LinkedHashSetOfRenderObject().new();
    this[onNeedVisualUpdate$] = onNeedVisualUpdate;
    this[onSemanticsOwnerCreated$] = onSemanticsOwnerCreated;
    this[onSemanticsOwnerDisposed$] = onSemanticsOwnerDisposed;
    ;
  }).prototype = object$.PipelineOwner.prototype;
  dart.addTypeTests(object$.PipelineOwner);
  dart.addTypeCaches(object$.PipelineOwner);
  dart.setMethodSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getMethods(object$.PipelineOwner.__proto__),
    requestVisualUpdate: dart.fnType(dart.void, []),
    flushLayout: dart.fnType(dart.void, []),
    [_enableMutationsToDirtySubtrees]: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    flushCompositingBits: dart.fnType(dart.void, []),
    flushPaint: dart.fnType(dart.void, []),
    ensureSemantics: dart.fnType(object$.SemanticsHandle, [], {listener: dart.nullable(dart.fnType(dart.void, []))}, {}),
    [_didDisposeSemanticsHandle]: dart.fnType(dart.void, []),
    flushSemantics: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getGetters(object$.PipelineOwner.__proto__),
    rootNode: dart.nullable(node.AbstractNode),
    debugDoingLayout: core.bool,
    debugDoingPaint: core.bool,
    semanticsOwner: dart.nullable(semantics.SemanticsOwner),
    debugOutstandingSemanticsHandles: core.int
  }));
  dart.setSetterSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getSetters(object$.PipelineOwner.__proto__),
    rootNode: dart.nullable(node.AbstractNode)
  }));
  dart.setLibraryUri(object$.PipelineOwner, I[5]);
  dart.setFieldSignature(object$.PipelineOwner, () => ({
    __proto__: dart.getFields(object$.PipelineOwner.__proto__),
    onNeedVisualUpdate: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSemanticsOwnerCreated: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    onSemanticsOwnerDisposed: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, []))),
    [_rootNode]: dart.fieldType(dart.nullable(node.AbstractNode)),
    [_nodesNeedingLayout]: dart.fieldType(core.List$(object$.RenderObject)),
    [_debugDoingLayout]: dart.fieldType(core.bool),
    [_debugAllowMutationsToDirtySubtrees]: dart.fieldType(core.bool),
    [_nodesNeedingCompositingBitsUpdate]: dart.finalFieldType(core.List$(object$.RenderObject)),
    [_nodesNeedingPaint]: dart.fieldType(core.List$(object$.RenderObject)),
    [_debugDoingPaint]: dart.fieldType(core.bool),
    [_semanticsOwner]: dart.fieldType(dart.nullable(semantics.SemanticsOwner)),
    [_outstandingSemanticsHandles]: dart.fieldType(core.int),
    [_debugDoingSemantics]: dart.fieldType(core.bool),
    [_nodesNeedingSemantics]: dart.finalFieldType(core.Set$(object$.RenderObject))
  }));
  var previousSibling = dart.privateName(object$, "ContainerParentDataMixin.previousSibling");
  var nextSibling = dart.privateName(object$, "ContainerParentDataMixin.nextSibling");
  const _is_ContainerParentDataMixin_default = Symbol('_is_ContainerParentDataMixin_default');
  object$.ContainerParentDataMixin$ = dart.generic(ChildType => {
    var __t$ChildTypeN = () => (__t$ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    class ContainerParentDataMixin extends object$.ParentData {}
    ContainerParentDataMixin[dart.mixinOn] = ParentData => class ContainerParentDataMixin extends ParentData {
      get previousSibling() {
        return this[previousSibling];
      }
      set previousSibling(value) {
        this[previousSibling] = __t$ChildTypeN().as(value);
      }
      get nextSibling() {
        return this[nextSibling];
      }
      set nextSibling(value) {
        this[nextSibling] = __t$ChildTypeN().as(value);
      }
      detach() {
        if (!(this.previousSibling == null)) dart.assertFailed("Pointers to siblings must be nulled before detaching ParentData.", I[4], 3276, 12, "previousSibling == null");
        if (!(this.nextSibling == null)) dart.assertFailed("Pointers to siblings must be nulled before detaching ParentData.", I[4], 3278, 12, "nextSibling == null");
        super.detach();
      }
    };
    (ContainerParentDataMixin[dart.mixinNew] = function() {
      this[previousSibling] = null;
      this[nextSibling] = null;
    }).prototype = ContainerParentDataMixin.prototype;
    dart.addTypeTests(ContainerParentDataMixin);
    ContainerParentDataMixin.prototype[_is_ContainerParentDataMixin_default] = true;
    dart.addTypeCaches(ContainerParentDataMixin);
    ContainerParentDataMixin[dart.implements] = () => [object$.ParentData];
    dart.setLibraryUri(ContainerParentDataMixin, I[5]);
    dart.setFieldSignature(ContainerParentDataMixin, () => ({
      __proto__: dart.getFields(ContainerParentDataMixin.__proto__),
      previousSibling: dart.fieldType(dart.nullable(ChildType)),
      nextSibling: dart.fieldType(dart.nullable(ChildType))
    }));
    return ContainerParentDataMixin;
  });
  object$.ContainerParentDataMixin = object$.ContainerParentDataMixin$();
  dart.addTypeTests(object$.ContainerParentDataMixin, _is_ContainerParentDataMixin_default);
  var _childCount = dart.privateName(object$, "_childCount");
  var _firstChild$ = dart.privateName(object$, "_firstChild");
  var _lastChild$ = dart.privateName(object$, "_lastChild");
  var _debugUltimatePreviousSiblingOf$ = dart.privateName(object$, "_debugUltimatePreviousSiblingOf");
  var _debugUltimateNextSiblingOf$ = dart.privateName(object$, "_debugUltimateNextSiblingOf");
  var _insertIntoChildList = dart.privateName(object$, "_insertIntoChildList");
  var _removeFromChildList = dart.privateName(object$, "_removeFromChildList");
  const _is_ContainerRenderObjectMixin_default = Symbol('_is_ContainerRenderObjectMixin_default');
  object$.ContainerRenderObjectMixin$ = dart.generic((ChildType, ParentDataType) => {
    var __t$ChildTypeN = () => (__t$ChildTypeN = dart.constFn(dart.nullable(ChildType)))();
    var __t$ListOfChildType = () => (__t$ListOfChildType = dart.constFn(core.List$(ChildType)))();
    var __t$ListNOfChildType = () => (__t$ListNOfChildType = dart.constFn(dart.nullable(__t$ListOfChildType())))();
    class ContainerRenderObjectMixin extends object$.RenderObject {}
    ContainerRenderObjectMixin[dart.mixinOn] = RenderObject => class ContainerRenderObjectMixin extends RenderObject {
      [_debugUltimatePreviousSiblingOf$](child, opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        while (childParentData.previousSibling != null) {
          if (!!dart.equals(childParentData.previousSibling, child)) dart.assertFailed(null, I[4], 3313, 14, "childParentData.previousSibling != child");
          child = dart.nullCheck(childParentData.previousSibling);
          childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        }
        return child[$_equals](equals);
      }
      [_debugUltimateNextSiblingOf$](child, opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        while (childParentData.nextSibling != null) {
          if (!!dart.equals(childParentData.nextSibling, child)) dart.assertFailed(null, I[4], 3323, 14, "childParentData.nextSibling != child");
          child = dart.nullCheck(childParentData.nextSibling);
          childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        }
        return child[$_equals](equals);
      }
      get childCount() {
        return this[_childCount];
      }
      debugValidateChild(child) {
        if (!dart.fn(() => {
          if (!ChildType.is(child)) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("A " + dart.str(this[$runtimeType]) + " expected a child of type " + dart.str(dart.wrapType(ChildType)) + " but received a " + "child of type " + dart.str(child[$runtimeType]) + "."), new assertions.ErrorDescription.new("RenderObjects expect specific types of children because they " + "coordinate with their children during layout and paint. For " + "example, a RenderSliver cannot be the child of a RenderBox because " + "a RenderSliver does not understand the RenderBox layout protocol."), new assertions.ErrorSpacer.new(), new (T$.DiagnosticsPropertyOfObjectN()).new("The " + dart.str(this[$runtimeType]) + " that expected a " + dart.str(dart.wrapType(ChildType)) + " child was created by", this.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}), new assertions.ErrorSpacer.new(), new (T$.DiagnosticsPropertyOfObjectN()).new("The " + dart.str(child[$runtimeType]) + " that did not match the expected child type " + "was created by", child.debugCreator, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 3342, 12, "() {\n      if (child is! ChildType) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary(\n            'A $runtimeType expected a child of type $ChildType but received a '\n            'child of type ${child.runtimeType}.',\n          ),\n          ErrorDescription(\n            'RenderObjects expect specific types of children because they '\n            'coordinate with their children during layout and paint. For '\n            'example, a RenderSliver cannot be the child of a RenderBox because '\n            'a RenderSliver does not understand the RenderBox layout protocol.',\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The $runtimeType that expected a $ChildType child was created by',\n            debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n          ErrorSpacer(),\n          DiagnosticsProperty<Object?>(\n            'The ${child.runtimeType} that did not match the expected child type '\n            'was created by',\n            child.debugCreator,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
        return true;
      }
      [_insertIntoChildList](child, opts) {
        let after = opts && 'after' in opts ? opts.after : null;
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (!(childParentData.nextSibling == null)) dart.assertFailed(null, I[4], 3379, 12, "childParentData.nextSibling == null");
        if (!(childParentData.previousSibling == null)) dart.assertFailed(null, I[4], 3380, 12, "childParentData.previousSibling == null");
        this[_childCount] = this[_childCount] + 1;
        if (!(this[_childCount] > 0)) dart.assertFailed(null, I[4], 3382, 12, "_childCount > 0");
        if (after == null) {
          childParentData.nextSibling = this[_firstChild$];
          if (this[_firstChild$] != null) {
            let _firstChildParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(this[_firstChild$]).parentData));
            _firstChildParentData.previousSibling = child;
          }
          this[_firstChild$] = child;
          this[_lastChild$] == null ? this[_lastChild$] = child : null;
        } else {
          if (!(this[_firstChild$] != null)) dart.assertFailed(null, I[4], 3394, 14, "_firstChild != null");
          if (!(this[_lastChild$] != null)) dart.assertFailed(null, I[4], 3395, 14, "_lastChild != null");
          if (!this[_debugUltimatePreviousSiblingOf$](after, {equals: this[_firstChild$]})) dart.assertFailed(null, I[4], 3396, 14, "_debugUltimatePreviousSiblingOf(after, equals: _firstChild)");
          if (!this[_debugUltimateNextSiblingOf$](after, {equals: this[_lastChild$]})) dart.assertFailed(null, I[4], 3397, 14, "_debugUltimateNextSiblingOf(after, equals: _lastChild)");
          let afterParentData = ParentDataType.as(dart.nullCheck(after.parentData));
          if (afterParentData.nextSibling == null) {
            if (!dart.equals(after, this[_lastChild$])) dart.assertFailed(null, I[4], 3402, 16, "after == _lastChild");
            childParentData.previousSibling = after;
            afterParentData.nextSibling = child;
            this[_lastChild$] = child;
          } else {
            childParentData.nextSibling = afterParentData.nextSibling;
            childParentData.previousSibling = after;
            let childPreviousSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.previousSibling).parentData));
            let childNextSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.nextSibling).parentData));
            childPreviousSiblingParentData.nextSibling = child;
            childNextSiblingParentData.previousSibling = child;
            if (!dart.equals(afterParentData.nextSibling, child)) dart.assertFailed(null, I[4], 3418, 16, "afterParentData.nextSibling == child");
          }
        }
      }
      insert(child, opts) {
        ChildType.as(child);
        let after = opts && 'after' in opts ? opts.after : null;
        __t$ChildTypeN().as(after);
        if (!!child[$_equals](this)) dart.assertFailed("A RenderObject cannot be inserted into itself.", I[4], 3428, 12, "child != this");
        if (!!dart.equals(after, this)) dart.assertFailed("A RenderObject cannot simultaneously be both the parent and the sibling of another RenderObject.", I[4], 3429, 12, "after != this");
        if (!!child[$_equals](after)) dart.assertFailed("A RenderObject cannot be inserted after itself.", I[4], 3431, 12, "child != after");
        if (!!child[$_equals](this[_firstChild$])) dart.assertFailed(null, I[4], 3432, 12, "child != _firstChild");
        if (!!child[$_equals](this[_lastChild$])) dart.assertFailed(null, I[4], 3433, 12, "child != _lastChild");
        this.adoptChild(child);
        this[_insertIntoChildList](child, {after: after});
      }
      add(child) {
        ChildType.as(child);
        this.insert(child, {after: this[_lastChild$]});
      }
      addAll(children) {
        let t38;
        __t$ListNOfChildType().as(children);
        t38 = children;
        t38 == null ? null : t38[$forEach](dart.bind(this, 'add'));
      }
      [_removeFromChildList](child) {
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (!this[_debugUltimatePreviousSiblingOf$](child, {equals: this[_firstChild$]})) dart.assertFailed(null, I[4], 3450, 12, "_debugUltimatePreviousSiblingOf(child, equals: _firstChild)");
        if (!this[_debugUltimateNextSiblingOf$](child, {equals: this[_lastChild$]})) dart.assertFailed(null, I[4], 3451, 12, "_debugUltimateNextSiblingOf(child, equals: _lastChild)");
        if (!(this[_childCount] >= 0)) dart.assertFailed(null, I[4], 3452, 12, "_childCount >= 0");
        if (childParentData.previousSibling == null) {
          if (!dart.equals(this[_firstChild$], child)) dart.assertFailed(null, I[4], 3454, 14, "_firstChild == child");
          this[_firstChild$] = childParentData.nextSibling;
        } else {
          let childPreviousSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.previousSibling).parentData));
          childPreviousSiblingParentData.nextSibling = childParentData.nextSibling;
        }
        if (childParentData.nextSibling == null) {
          if (!dart.equals(this[_lastChild$], child)) dart.assertFailed(null, I[4], 3462, 14, "_lastChild == child");
          this[_lastChild$] = childParentData.previousSibling;
        } else {
          let childNextSiblingParentData = ParentDataType.as(dart.nullCheck(dart.nullCheck(childParentData.nextSibling).parentData));
          childNextSiblingParentData.previousSibling = childParentData.previousSibling;
        }
        childParentData.previousSibling = null;
        childParentData.nextSibling = null;
        this[_childCount] = this[_childCount] - 1;
      }
      remove(child) {
        ChildType.as(child);
        this[_removeFromChildList](child);
        this.dropChild(child);
      }
      removeAll() {
        let child = this[_firstChild$];
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let next = childParentData.nextSibling;
          childParentData.previousSibling = null;
          childParentData.nextSibling = null;
          this.dropChild(child);
          child = next;
        }
        this[_firstChild$] = null;
        this[_lastChild$] = null;
        this[_childCount] = 0;
      }
      move(child, opts) {
        ChildType.as(child);
        let after = opts && 'after' in opts ? opts.after : null;
        __t$ChildTypeN().as(after);
        if (!!child[$_equals](this)) dart.assertFailed(null, I[4], 3508, 12, "child != this");
        if (!!dart.equals(after, this)) dart.assertFailed(null, I[4], 3509, 12, "after != this");
        if (!!child[$_equals](after)) dart.assertFailed(null, I[4], 3510, 12, "child != after");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[4], 3511, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        if (dart.equals(childParentData.previousSibling, after)) return;
        this[_removeFromChildList](child);
        this[_insertIntoChildList](child, {after: after});
        this.markNeedsLayout();
      }
      attach(owner) {
        object$.PipelineOwner.as(owner);
        super.attach(owner);
        let child = this[_firstChild$];
        while (child != null) {
          child.attach(owner);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      detach() {
        super.detach();
        let child = this[_firstChild$];
        while (child != null) {
          child.detach();
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      redepthChildren() {
        let child = this[_firstChild$];
        while (child != null) {
          this.redepthChild(child);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      visitChildren(visitor) {
        let child = this[_firstChild$];
        while (child != null) {
          visitor(child);
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          child = childParentData.nextSibling;
        }
      }
      get firstChild() {
        return this[_firstChild$];
      }
      get lastChild() {
        return this[_lastChild$];
      }
      childBefore(child) {
        ChildType.as(child);
        if (!(child !== null)) dart.assertFailed(null, I[4], 3573, 12, "child != null");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[4], 3574, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        return childParentData.previousSibling;
      }
      childAfter(child) {
        ChildType.as(child);
        if (!(child !== null)) dart.assertFailed(null, I[4], 3581, 12, "child != null");
        if (!dart.equals(child.parent, this)) dart.assertFailed(null, I[4], 3582, 12, "child.parent == this");
        let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
        return childParentData.nextSibling;
      }
      debugDescribeChildren() {
        let children = T$.JSArrayOfDiagnosticsNode().of([]);
        if (this.firstChild != null) {
          let child = dart.nullCheck(this.firstChild);
          let count = 1;
          while (true) {
            children[$add](child.toDiagnosticsNode({name: "child " + dart.str(count)}));
            if (child[$_equals](this.lastChild)) break;
            count = count + 1;
            let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
            child = dart.nullCheck(childParentData.nextSibling);
          }
        }
        return children;
      }
    };
    (ContainerRenderObjectMixin[dart.mixinNew] = function() {
      this[_childCount] = 0;
      this[_firstChild$] = null;
      this[_lastChild$] = null;
    }).prototype = ContainerRenderObjectMixin.prototype;
    dart.addTypeTests(ContainerRenderObjectMixin);
    ContainerRenderObjectMixin.prototype[_is_ContainerRenderObjectMixin_default] = true;
    dart.addTypeCaches(ContainerRenderObjectMixin);
    ContainerRenderObjectMixin[dart.implements] = () => [object$.RenderObject];
    dart.setMethodSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getMethods(ContainerRenderObjectMixin.__proto__),
      [_debugUltimatePreviousSiblingOf$]: dart.fnType(core.bool, [ChildType], {equals: dart.nullable(ChildType)}, {}),
      [_debugUltimateNextSiblingOf$]: dart.fnType(core.bool, [ChildType], {equals: dart.nullable(ChildType)}, {}),
      debugValidateChild: dart.fnType(core.bool, [object$.RenderObject]),
      [_insertIntoChildList]: dart.fnType(dart.void, [ChildType], {after: dart.nullable(ChildType)}, {}),
      insert: dart.fnType(dart.void, [dart.nullable(core.Object)], {after: dart.nullable(core.Object)}, {}),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      [_removeFromChildList]: dart.fnType(dart.void, [ChildType]),
      remove: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      removeAll: dart.fnType(dart.void, []),
      move: dart.fnType(dart.void, [dart.nullable(core.Object)], {after: dart.nullable(core.Object)}, {}),
      childBefore: dart.fnType(dart.nullable(ChildType), [dart.nullable(core.Object)]),
      childAfter: dart.fnType(dart.nullable(ChildType), [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getGetters(ContainerRenderObjectMixin.__proto__),
      childCount: core.int,
      firstChild: dart.nullable(ChildType),
      lastChild: dart.nullable(ChildType)
    }));
    dart.setLibraryUri(ContainerRenderObjectMixin, I[5]);
    dart.setFieldSignature(ContainerRenderObjectMixin, () => ({
      __proto__: dart.getFields(ContainerRenderObjectMixin.__proto__),
      [_childCount]: dart.fieldType(core.int),
      [_firstChild$]: dart.fieldType(dart.nullable(ChildType)),
      [_lastChild$]: dart.fieldType(dart.nullable(ChildType))
    }));
    return ContainerRenderObjectMixin;
  });
  object$.ContainerRenderObjectMixin = object$.ContainerRenderObjectMixin$();
  dart.addTypeTests(object$.ContainerRenderObjectMixin, _is_ContainerRenderObjectMixin_default);
  object$.RelayoutWhenSystemFontsChangeMixin = class RelayoutWhenSystemFontsChangeMixin extends object$.RenderObject {};
  object$.RelayoutWhenSystemFontsChangeMixin[dart.mixinOn] = RenderObject => class RelayoutWhenSystemFontsChangeMixin extends RenderObject {
    systemFontsDidChange() {
      this.markNeedsLayout();
    }
    attach(owner) {
      object$.PipelineOwner.as(owner);
      super.attach(owner);
      dart.nullCheck(binding$3.PaintingBinding.instance).systemFonts.addListener(dart.bind(this, 'systemFontsDidChange'));
    }
    detach() {
      dart.nullCheck(binding$3.PaintingBinding.instance).systemFonts.removeListener(dart.bind(this, 'systemFontsDidChange'));
      super.detach();
    }
  };
  dart.addTypeTests(object$.RelayoutWhenSystemFontsChangeMixin);
  dart.addTypeCaches(object$.RelayoutWhenSystemFontsChangeMixin);
  object$.RelayoutWhenSystemFontsChangeMixin[dart.implements] = () => [object$.RenderObject];
  dart.setMethodSignature(object$.RelayoutWhenSystemFontsChangeMixin, () => ({
    __proto__: dart.getMethods(object$.RelayoutWhenSystemFontsChangeMixin.__proto__),
    systemFontsDidChange: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(object$.RelayoutWhenSystemFontsChangeMixin, I[5]);
  object$._SemanticsFragment = class _SemanticsFragment extends core.Object {};
  (object$._SemanticsFragment.new = function(opts) {
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this.dropsSemanticsOfPreviousSiblings = dropsSemanticsOfPreviousSiblings;
    if (!(dropsSemanticsOfPreviousSiblings !== null)) dart.assertFailed(null, I[4], 3649, 16, "dropsSemanticsOfPreviousSiblings != null");
    ;
  }).prototype = object$._SemanticsFragment.prototype;
  dart.addTypeTests(object$._SemanticsFragment);
  dart.addTypeCaches(object$._SemanticsFragment);
  dart.setLibraryUri(object$._SemanticsFragment, I[5]);
  dart.setFieldSignature(object$._SemanticsFragment, () => ({
    __proto__: dart.getFields(object$._SemanticsFragment.__proto__),
    dropsSemanticsOfPreviousSiblings: dart.finalFieldType(core.bool)
  }));
  var interestingFragments = dart.privateName(object$, "_ContainerSemanticsFragment.interestingFragments");
  object$._ContainerSemanticsFragment = class _ContainerSemanticsFragment extends object$._SemanticsFragment {
    get interestingFragments() {
      return this[interestingFragments];
    }
    set interestingFragments(value) {
      super.interestingFragments = value;
    }
    static ['_#new#tearOff'](opts) {
      let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
      return new object$._ContainerSemanticsFragment.new({dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    }
    addAll(fragments) {
      this.interestingFragments[$addAll](fragments);
    }
  };
  (object$._ContainerSemanticsFragment.new = function(opts) {
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this[interestingFragments] = T$.JSArrayOf_InterestingSemanticsFragment().of([]);
    object$._ContainerSemanticsFragment.__proto__.new.call(this, {dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._ContainerSemanticsFragment.prototype;
  dart.addTypeTests(object$._ContainerSemanticsFragment);
  dart.addTypeCaches(object$._ContainerSemanticsFragment);
  dart.setMethodSignature(object$._ContainerSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._ContainerSemanticsFragment.__proto__),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)])
  }));
  dart.setLibraryUri(object$._ContainerSemanticsFragment, I[5]);
  dart.setFieldSignature(object$._ContainerSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._ContainerSemanticsFragment.__proto__),
    interestingFragments: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment))
  }));
  var _tagsForChildren = dart.privateName(object$, "_tagsForChildren");
  var _ancestorChain = dart.privateName(object$, "_ancestorChain");
  object$._InterestingSemanticsFragment = class _InterestingSemanticsFragment extends object$._SemanticsFragment {
    get owner() {
      return this[_ancestorChain][$first];
    }
    get hasConfigForParent() {
      return this.config != null;
    }
    get interestingFragments() {
      return T$.JSArrayOf_InterestingSemanticsFragment().of([this]);
    }
    addTags(tags) {
      if (tags == null || tags[$isEmpty]) return;
      this[_tagsForChildren] == null ? this[_tagsForChildren] = T$.LinkedHashSetOfSemanticsTag().new() : null;
      dart.nullCheck(this[_tagsForChildren]).addAll(tags);
    }
    addAncestor(ancestor) {
      this[_ancestorChain][$add](ancestor);
    }
  };
  (object$._InterestingSemanticsFragment.new = function(opts) {
    let owner = opts && 'owner' in opts ? opts.owner : null;
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this[_tagsForChildren] = null;
    if (!(owner !== null)) dart.assertFailed(null, I[4], 3698, 16, "owner != null");
    this[_ancestorChain] = T$.JSArrayOfRenderObject().of([owner]);
    object$._InterestingSemanticsFragment.__proto__.new.call(this, {dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._InterestingSemanticsFragment.prototype;
  dart.addTypeTests(object$._InterestingSemanticsFragment);
  dart.addTypeCaches(object$._InterestingSemanticsFragment);
  dart.setMethodSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._InterestingSemanticsFragment.__proto__),
    addTags: dart.fnType(dart.void, [dart.nullable(core.Iterable$(semantics.SemanticsTag))]),
    addAncestor: dart.fnType(dart.void, [object$.RenderObject])
  }));
  dart.setGetterSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._InterestingSemanticsFragment.__proto__),
    owner: object$.RenderObject,
    hasConfigForParent: core.bool,
    interestingFragments: core.List$(object$._InterestingSemanticsFragment)
  }));
  dart.setLibraryUri(object$._InterestingSemanticsFragment, I[5]);
  dart.setFieldSignature(object$._InterestingSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._InterestingSemanticsFragment.__proto__),
    [_ancestorChain]: dart.finalFieldType(core.List$(object$.RenderObject)),
    [_tagsForChildren]: dart.fieldType(dart.nullable(core.Set$(semantics.SemanticsTag)))
  }));
  var _children = dart.privateName(object$, "_children");
  object$._RootSemanticsFragment = class _RootSemanticsFragment extends object$._InterestingSemanticsFragment {
    static ['_#new#tearOff'](opts) {
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
      return new object$._RootSemanticsFragment.new({owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    }
    compileChildren(opts) {
      let t38;
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let elevationAdjustment = opts && 'elevationAdjustment' in opts ? opts.elevationAdjustment : null;
      let result = opts && 'result' in opts ? opts.result : null;
      if (!(this[_tagsForChildren] == null || dart.nullCheck(this[_tagsForChildren])[$isEmpty])) dart.assertFailed(null, I[4], 3797, 12, "_tagsForChildren == null || _tagsForChildren!.isEmpty");
      if (!(parentSemanticsClipRect == null)) dart.assertFailed(null, I[4], 3798, 12, "parentSemanticsClipRect == null");
      if (!(parentPaintClipRect == null)) dart.assertFailed(null, I[4], 3799, 12, "parentPaintClipRect == null");
      if (!(this[_ancestorChain][$length] === 1)) dart.assertFailed(null, I[4], 3800, 12, "_ancestorChain.length == 1");
      if (!(elevationAdjustment === 0.0)) dart.assertFailed(null, I[4], 3801, 12, "elevationAdjustment == 0.0");
      t38 = this.owner;
      t38[_semantics] == null ? t38[_semantics] = new semantics.SemanticsNode.root({showOnScreen: dart.bind(this.owner, 'showOnScreen'), owner: dart.nullCheck(dart.nullCheck(this.owner.owner).semanticsOwner)}) : null;
      let node = dart.nullCheck(this.owner[_semantics]);
      if (!matrix_utils.MatrixUtils.matrixEquals(node.transform, vector_math_64.Matrix4.identity())) dart.assertFailed(null, I[4], 3808, 12, "MatrixUtils.matrixEquals(node.transform, Matrix4.identity())");
      if (!(node.parentSemanticsClipRect == null)) dart.assertFailed(null, I[4], 3809, 12, "node.parentSemanticsClipRect == null");
      if (!(node.parentPaintClipRect == null)) dart.assertFailed(null, I[4], 3810, 12, "node.parentPaintClipRect == null");
      node.rect = this.owner.semanticBounds;
      let children = T$.JSArrayOfSemanticsNode().of([]);
      for (let fragment of this[_children]) {
        if (!(fragment.config == null)) dart.assertFailed(null, I[4], 3816, 14, "fragment.config == null");
        fragment.compileChildren({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, elevationAdjustment: 0.0, result: children});
      }
      node.updateWith({config: null, childrenInInversePaintOrder: children});
      if (!(!node.isInvisible || children[$isEmpty])) dart.assertFailed(null, I[4], 3831, 12, "!node.isInvisible || children.isEmpty");
      result[$add](node);
    }
    get config() {
      return null;
    }
    markAsExplicit() {
    }
    addAll(fragments) {
      this[_children][$addAll](fragments);
    }
  };
  (object$._RootSemanticsFragment.new = function(opts) {
    let owner = opts && 'owner' in opts ? opts.owner : null;
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this[_children] = T$.JSArrayOf_InterestingSemanticsFragment().of([]);
    object$._RootSemanticsFragment.__proto__.new.call(this, {owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._RootSemanticsFragment.prototype;
  dart.addTypeTests(object$._RootSemanticsFragment);
  dart.addTypeCaches(object$._RootSemanticsFragment);
  dart.setMethodSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._RootSemanticsFragment.__proto__),
    compileChildren: dart.fnType(dart.void, [], {parentPaintClipRect: dart.nullable(ui.Rect), parentSemanticsClipRect: dart.nullable(ui.Rect)}, {elevationAdjustment: core.double, result: core.List$(semantics.SemanticsNode)}),
    markAsExplicit: dart.fnType(dart.void, []),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)])
  }));
  dart.setGetterSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._RootSemanticsFragment.__proto__),
    config: dart.nullable(semantics.SemanticsConfiguration)
  }));
  dart.setLibraryUri(object$._RootSemanticsFragment, I[5]);
  dart.setFieldSignature(object$._RootSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._RootSemanticsFragment.__proto__),
    [_children]: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment))
  }));
  var _isConfigWritable = dart.privateName(object$, "_isConfigWritable");
  var _isExplicit = dart.privateName(object$, "_isExplicit");
  var _mergeIntoParent = dart.privateName(object$, "_mergeIntoParent");
  var _config = dart.privateName(object$, "_config");
  var _needsGeometryUpdate = dart.privateName(object$, "_needsGeometryUpdate");
  var _ensureConfigIsWritable = dart.privateName(object$, "_ensureConfigIsWritable");
  object$._SwitchableSemanticsFragment = class _SwitchableSemanticsFragment extends object$._InterestingSemanticsFragment {
    static ['_#new#tearOff'](opts) {
      let mergeIntoParent = opts && 'mergeIntoParent' in opts ? opts.mergeIntoParent : null;
      let config = opts && 'config' in opts ? opts.config : null;
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
      return new object$._SwitchableSemanticsFragment.new({mergeIntoParent: mergeIntoParent, config: config, owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    }
    compileChildren(opts) {
      let t38, t38$, t38$0, t38$1, t38$2;
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let elevationAdjustment = opts && 'elevationAdjustment' in opts ? opts.elevationAdjustment : null;
      let result = opts && 'result' in opts ? opts.result : null;
      if (!this[_isExplicit]) {
        this.owner[_semantics] = null;
        for (let fragment of this[_children]) {
          if (!this[_ancestorChain][$first][$_equals](fragment[_ancestorChain][$last])) dart.assertFailed(null, I[4], 3899, 16, "_ancestorChain.first == fragment._ancestorChain.last");
          fragment[_ancestorChain][$addAll](this[_ancestorChain][$skip](1));
          fragment.compileChildren({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, elevationAdjustment: elevationAdjustment + this[_config].elevation, result: result});
        }
        return;
      }
      let geometry = this[_needsGeometryUpdate] ? new object$._SemanticsGeometry.new({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, ancestors: this[_ancestorChain]}) : null;
      if (!this[_mergeIntoParent] && (t38 = geometry, t38 == null ? null : t38.dropFromTree) === true) return;
      t38$ = this.owner;
      t38$[_semantics] == null ? t38$[_semantics] = new semantics.SemanticsNode.new({showOnScreen: dart.bind(this.owner, 'showOnScreen')}) : null;
      let node = (t38$0 = dart.nullCheck(this.owner[_semantics]), (() => {
        t38$0.isMergedIntoParent = this[_mergeIntoParent];
        t38$0.tags = this[_tagsForChildren];
        return t38$0;
      })());
      node.elevationAdjustment = elevationAdjustment;
      if (elevationAdjustment !== 0.0) {
        this[_ensureConfigIsWritable]();
        t38$1 = this[_config];
        t38$1.elevation = t38$1.elevation + elevationAdjustment;
      }
      if (geometry != null) {
        if (!this[_needsGeometryUpdate]) dart.assertFailed(null, I[4], 3936, 14, "_needsGeometryUpdate");
        t38$2 = node;
        (() => {
          t38$2.rect = geometry.rect;
          t38$2.transform = geometry.transform;
          t38$2.parentSemanticsClipRect = geometry.semanticsClipRect;
          t38$2.parentPaintClipRect = geometry.paintClipRect;
          return t38$2;
        })();
        if (!this[_mergeIntoParent] && geometry.markAsHidden) {
          this[_ensureConfigIsWritable]();
          this[_config].isHidden = true;
        }
      }
      let children = T$.JSArrayOfSemanticsNode().of([]);
      for (let fragment of this[_children]) {
        fragment.compileChildren({parentSemanticsClipRect: node.parentSemanticsClipRect, parentPaintClipRect: node.parentPaintClipRect, elevationAdjustment: 0.0, result: children});
      }
      if (this[_config].isSemanticBoundary) {
        this.owner.assembleSemanticsNode(node, this[_config], children);
      } else {
        node.updateWith({config: this[_config], childrenInInversePaintOrder: children});
      }
      result[$add](node);
    }
    get config() {
      return this[_isExplicit] ? null : this[_config];
    }
    addAll(fragments) {
      for (let fragment of fragments) {
        this[_children][$add](fragment);
        if (fragment.config == null) continue;
        this[_ensureConfigIsWritable]();
        this[_config].absorb(dart.nullCheck(fragment.config));
      }
    }
    [_ensureConfigIsWritable]() {
      if (!this[_isConfigWritable]) {
        this[_config] = this[_config].copy();
        this[_isConfigWritable] = true;
      }
    }
    markAsExplicit() {
      this[_isExplicit] = true;
    }
    get [_needsGeometryUpdate]() {
      return this[_ancestorChain][$length] > 1;
    }
  };
  (object$._SwitchableSemanticsFragment.new = function(opts) {
    let mergeIntoParent = opts && 'mergeIntoParent' in opts ? opts.mergeIntoParent : null;
    let config = opts && 'config' in opts ? opts.config : null;
    let owner = opts && 'owner' in opts ? opts.owner : null;
    let dropsSemanticsOfPreviousSiblings = opts && 'dropsSemanticsOfPreviousSiblings' in opts ? opts.dropsSemanticsOfPreviousSiblings : null;
    this[_isConfigWritable] = false;
    this[_children] = T$.JSArrayOf_InterestingSemanticsFragment().of([]);
    this[_isExplicit] = false;
    this[_mergeIntoParent] = mergeIntoParent;
    this[_config] = config;
    if (!(mergeIntoParent !== null)) dart.assertFailed(null, I[4], 3878, 16, "mergeIntoParent != null");
    if (!(config !== null)) dart.assertFailed(null, I[4], 3879, 16, "config != null");
    object$._SwitchableSemanticsFragment.__proto__.new.call(this, {owner: owner, dropsSemanticsOfPreviousSiblings: dropsSemanticsOfPreviousSiblings});
    ;
  }).prototype = object$._SwitchableSemanticsFragment.prototype;
  dart.addTypeTests(object$._SwitchableSemanticsFragment);
  dart.addTypeCaches(object$._SwitchableSemanticsFragment);
  dart.setMethodSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getMethods(object$._SwitchableSemanticsFragment.__proto__),
    compileChildren: dart.fnType(dart.void, [], {parentPaintClipRect: dart.nullable(ui.Rect), parentSemanticsClipRect: dart.nullable(ui.Rect)}, {elevationAdjustment: core.double, result: core.List$(semantics.SemanticsNode)}),
    addAll: dart.fnType(dart.void, [core.Iterable$(object$._InterestingSemanticsFragment)]),
    [_ensureConfigIsWritable]: dart.fnType(dart.void, []),
    markAsExplicit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getGetters(object$._SwitchableSemanticsFragment.__proto__),
    config: dart.nullable(semantics.SemanticsConfiguration),
    [_needsGeometryUpdate]: core.bool
  }));
  dart.setLibraryUri(object$._SwitchableSemanticsFragment, I[5]);
  dart.setFieldSignature(object$._SwitchableSemanticsFragment, () => ({
    __proto__: dart.getFields(object$._SwitchableSemanticsFragment.__proto__),
    [_mergeIntoParent]: dart.finalFieldType(core.bool),
    [_config]: dart.fieldType(semantics.SemanticsConfiguration),
    [_isConfigWritable]: dart.fieldType(core.bool),
    [_children]: dart.finalFieldType(core.List$(object$._InterestingSemanticsFragment)),
    [_isExplicit]: dart.fieldType(core.bool)
  }));
  var _paintClipRect = dart.privateName(object$, "_paintClipRect");
  var _semanticsClipRect = dart.privateName(object$, "_semanticsClipRect");
  var ___SemanticsGeometry__transform = dart.privateName(object$, "_#_SemanticsGeometry#_transform");
  var ___SemanticsGeometry__rect = dart.privateName(object$, "_#_SemanticsGeometry#_rect");
  var _markAsHidden = dart.privateName(object$, "_markAsHidden");
  var _computeValues = dart.privateName(object$, "_computeValues");
  var _transform$ = dart.privateName(object$, "_transform");
  var _rect = dart.privateName(object$, "_rect");
  object$._SemanticsGeometry = class _SemanticsGeometry extends core.Object {
    static ['_#new#tearOff'](opts) {
      let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
      let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
      let ancestors = opts && 'ancestors' in opts ? opts.ancestors : null;
      return new object$._SemanticsGeometry.new({parentSemanticsClipRect: parentSemanticsClipRect, parentPaintClipRect: parentPaintClipRect, ancestors: ancestors});
    }
    get [_transform$]() {
      let t38;
      t38 = this[___SemanticsGeometry__transform];
      return t38 == null ? dart.throw(new _internal.LateError.fieldNI("_transform")) : t38;
    }
    set [_transform$](t38) {
      this[___SemanticsGeometry__transform] = t38;
    }
    get [_rect]() {
      let t39;
      t39 = this[___SemanticsGeometry__rect];
      return t39 == null ? dart.throw(new _internal.LateError.fieldNI("_rect")) : t39;
    }
    set [_rect](t39) {
      this[___SemanticsGeometry__rect] = t39;
    }
    get transform() {
      return this[_transform$];
    }
    get semanticsClipRect() {
      return this[_semanticsClipRect];
    }
    get paintClipRect() {
      return this[_paintClipRect];
    }
    get rect() {
      return this[_rect];
    }
    [_computeValues](parentSemanticsClipRect, parentPaintClipRect, ancestors) {
      if (!(ancestors[$length] > 1)) dart.assertFailed(null, I[4], 4041, 12, "ancestors.length > 1");
      this[_transform$] = vector_math_64.Matrix4.identity();
      this[_semanticsClipRect] = parentSemanticsClipRect;
      this[_paintClipRect] = parentPaintClipRect;
      for (let index = ancestors[$length] - 1; index > 0; index = index - 1) {
        let parent = ancestors[$_get](index);
        let child = ancestors[$_get](index - 1);
        let parentSemanticsClipRect = parent.describeSemanticsClip(child);
        if (parentSemanticsClipRect != null) {
          this[_semanticsClipRect] = parentSemanticsClipRect;
          this[_paintClipRect] = object$._SemanticsGeometry._intersectRects(this[_paintClipRect], parent.describeApproximatePaintClip(child));
        } else {
          this[_semanticsClipRect] = object$._SemanticsGeometry._intersectRects(this[_semanticsClipRect], parent.describeApproximatePaintClip(child));
        }
        object$._SemanticsGeometry._temporaryTransformHolder.setIdentity();
        object$._SemanticsGeometry._applyIntermediatePaintTransforms(parent, child, this[_transform$], object$._SemanticsGeometry._temporaryTransformHolder);
        this[_semanticsClipRect] = object$._SemanticsGeometry._transformRect(this[_semanticsClipRect], object$._SemanticsGeometry._temporaryTransformHolder);
        this[_paintClipRect] = object$._SemanticsGeometry._transformRect(this[_paintClipRect], object$._SemanticsGeometry._temporaryTransformHolder);
      }
      let owner = ancestors[$first];
      this[_rect] = this[_semanticsClipRect] == null ? owner.semanticBounds : dart.nullCheck(this[_semanticsClipRect]).intersect(owner.semanticBounds);
      if (this[_paintClipRect] != null) {
        let paintRect = dart.nullCheck(this[_paintClipRect]).intersect(this[_rect]);
        this[_markAsHidden] = paintRect.isEmpty && !this[_rect].isEmpty;
        if (!this[_markAsHidden]) this[_rect] = paintRect;
      }
    }
    static _transformRect(rect, transform) {
      if (!(transform !== null)) dart.assertFailed(null, I[4], 4090, 12, "transform != null");
      if (rect == null) return null;
      if (rect.isEmpty || transform.isZero()) return ui.Rect.zero;
      return matrix_utils.MatrixUtils.inverseTransformRect(transform, rect);
    }
    static _applyIntermediatePaintTransforms(ancestor, child, transform, clipRectTransform) {
      if (!(ancestor !== null)) dart.assertFailed(null, I[4], 4107, 12, "ancestor != null");
      if (!(child !== null)) dart.assertFailed(null, I[4], 4108, 12, "child != null");
      if (!(transform !== null)) dart.assertFailed(null, I[4], 4109, 12, "transform != null");
      if (!(clipRectTransform !== null)) dart.assertFailed(null, I[4], 4110, 12, "clipRectTransform != null");
      if (!clipRectTransform.isIdentity()) dart.assertFailed(null, I[4], 4111, 12, "clipRectTransform.isIdentity()");
      let intermediateParent = object$.RenderObject.as(dart.nullCheck(child.parent));
      if (!(intermediateParent !== null)) dart.assertFailed(null, I[4], 4113, 12, "intermediateParent != null");
      while (!intermediateParent[$_equals](ancestor)) {
        intermediateParent.applyPaintTransform(child, transform);
        intermediateParent = object$.RenderObject.as(dart.nullCheck(intermediateParent.parent));
        child = object$.RenderObject.as(dart.nullCheck(child.parent));
        if (!(intermediateParent !== null)) dart.assertFailed(null, I[4], 4118, 14, "intermediateParent != null");
      }
      ancestor.applyPaintTransform(child, transform);
      ancestor.applyPaintTransform(child, clipRectTransform);
    }
    static _intersectRects(a, b) {
      if (a == null) return b;
      if (b == null) return a;
      return a.intersect(b);
    }
    get dropFromTree() {
      return this[_rect].isEmpty;
    }
    get markAsHidden() {
      return this[_markAsHidden];
    }
  };
  (object$._SemanticsGeometry.new = function(opts) {
    let parentSemanticsClipRect = opts && 'parentSemanticsClipRect' in opts ? opts.parentSemanticsClipRect : null;
    let parentPaintClipRect = opts && 'parentPaintClipRect' in opts ? opts.parentPaintClipRect : null;
    let ancestors = opts && 'ancestors' in opts ? opts.ancestors : null;
    this[_paintClipRect] = null;
    this[_semanticsClipRect] = null;
    this[___SemanticsGeometry__transform] = null;
    this[___SemanticsGeometry__rect] = null;
    this[_markAsHidden] = false;
    this[_computeValues](parentSemanticsClipRect, parentPaintClipRect, ancestors);
  }).prototype = object$._SemanticsGeometry.prototype;
  dart.addTypeTests(object$._SemanticsGeometry);
  dart.addTypeCaches(object$._SemanticsGeometry);
  dart.setMethodSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getMethods(object$._SemanticsGeometry.__proto__),
    [_computeValues]: dart.fnType(dart.void, [dart.nullable(ui.Rect), dart.nullable(ui.Rect), core.List$(object$.RenderObject)])
  }));
  dart.setStaticMethodSignature(object$._SemanticsGeometry, () => ['_transformRect', '_applyIntermediatePaintTransforms', '_intersectRects']);
  dart.setGetterSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getGetters(object$._SemanticsGeometry.__proto__),
    [_transform$]: vector_math_64.Matrix4,
    [_rect]: ui.Rect,
    transform: vector_math_64.Matrix4,
    semanticsClipRect: dart.nullable(ui.Rect),
    paintClipRect: dart.nullable(ui.Rect),
    rect: ui.Rect,
    dropFromTree: core.bool,
    markAsHidden: core.bool
  }));
  dart.setSetterSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getSetters(object$._SemanticsGeometry.__proto__),
    [_transform$]: vector_math_64.Matrix4,
    [_rect]: ui.Rect
  }));
  dart.setLibraryUri(object$._SemanticsGeometry, I[5]);
  dart.setFieldSignature(object$._SemanticsGeometry, () => ({
    __proto__: dart.getFields(object$._SemanticsGeometry.__proto__),
    [_paintClipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_semanticsClipRect]: dart.fieldType(dart.nullable(ui.Rect)),
    [___SemanticsGeometry__transform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [___SemanticsGeometry__rect]: dart.fieldType(dart.nullable(ui.Rect)),
    [_markAsHidden]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(object$._SemanticsGeometry, () => ['_temporaryTransformHolder']);
  dart.defineLazy(object$._SemanticsGeometry, {
    /*object$._SemanticsGeometry._temporaryTransformHolder*/get _temporaryTransformHolder() {
      return new vector_math_64.Matrix4.zero();
    }
  }, false);
  object$.DiagnosticsDebugCreator = class DiagnosticsDebugCreator extends diagnostics.DiagnosticsProperty$(core.Object) {
    static ['_#new#tearOff'](value) {
      return new object$.DiagnosticsDebugCreator.new(value);
    }
  };
  (object$.DiagnosticsDebugCreator.new = function(value) {
    if (!(value !== null)) dart.assertFailed(null, I[4], 4160, 16, "value != null");
    object$.DiagnosticsDebugCreator.__proto__.new.call(this, "debugCreator", value, {level: diagnostics.DiagnosticLevel.hidden});
    ;
  }).prototype = object$.DiagnosticsDebugCreator.prototype;
  dart.addTypeTests(object$.DiagnosticsDebugCreator);
  dart.addTypeCaches(object$.DiagnosticsDebugCreator);
  dart.setLibraryUri(object$.DiagnosticsDebugCreator, I[5]);
  debug$0._debugDrawDoubleRect = function _debugDrawDoubleRect(canvas, outerRect, innerRect, color) {
    let t40, t40$;
    let path = (t40 = ui.Path.new(), (() => {
      t40.fillType = ui.PathFillType.evenOdd;
      t40.addRect(outerRect);
      t40.addRect(innerRect);
      return t40;
    })());
    let paint = (t40$ = ui.Paint.new(), (() => {
      t40$.color = color;
      return t40$;
    })());
    canvas.drawPath(path, paint);
  };
  debug$0.debugPaintPadding = function debugPaintPadding(canvas, outerRect, innerRect, opts) {
    let outlineWidth = opts && 'outlineWidth' in opts ? opts.outlineWidth : 2;
    if (!dart.fn(() => {
      let t40;
      if (innerRect != null && !innerRect.isEmpty) {
        debug$0._debugDrawDoubleRect(canvas, outerRect, innerRect, C[26] || CT.C26);
        debug$0._debugDrawDoubleRect(canvas, innerRect.inflate(outlineWidth).intersect(outerRect), innerRect, C[27] || CT.C27);
      } else {
        let paint = (t40 = ui.Paint.new(), (() => {
          t40.color = C[28] || CT.C28;
          return t40;
        })());
        canvas.drawRect(outerRect, paint);
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[12], 219, 10, "() {\n    if (innerRect != null && !innerRect.isEmpty) {\n      _debugDrawDoubleRect(canvas, outerRect, innerRect, const Color(0x900090FF));\n      _debugDrawDoubleRect(canvas, innerRect.inflate(outlineWidth).intersect(outerRect), innerRect, const Color(0xFF0090FF));\n    } else {\n      final Paint paint = Paint()\n        ..color = const Color(0x90909090);\n      canvas.drawRect(outerRect, paint);\n    }\n    return true;\n  }()");
  };
  debug$0.debugAssertAllRenderVarsUnset = function debugAssertAllRenderVarsUnset(reason, opts) {
    let debugCheckIntrinsicSizesOverride = opts && 'debugCheckIntrinsicSizesOverride' in opts ? opts.debugCheckIntrinsicSizesOverride : false;
    if (!dart.fn(() => {
      if (debug$0.debugPaintSizeEnabled || debug$0.debugPaintBaselinesEnabled || debug$0.debugPaintLayerBordersEnabled || debug$0.debugPaintPointersEnabled || debug$0.debugRepaintRainbowEnabled || debug$0.debugRepaintTextRainbowEnabled || !debug$0.debugCurrentRepaintColor._equals(debug$0._kDebugDefaultRepaintColor) || debug$0.debugPrintMarkNeedsLayoutStacks || debug$0.debugPrintMarkNeedsPaintStacks || debug$0.debugPrintLayouts || debug$0.debugCheckIntrinsicSizes !== debugCheckIntrinsicSizesOverride || debug$0.debugProfileLayoutsEnabled || debug$0.debugProfilePaintsEnabled || debug$0.debugOnProfilePaint != null || debug$0.debugDisableClipLayers || debug$0.debugDisablePhysicalShapeLayers || debug$0.debugDisableOpacityLayers) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[12], 244, 10, "() {\n    if (debugPaintSizeEnabled ||\n        debugPaintBaselinesEnabled ||\n        debugPaintLayerBordersEnabled ||\n        debugPaintPointersEnabled ||\n        debugRepaintRainbowEnabled ||\n        debugRepaintTextRainbowEnabled ||\n        debugCurrentRepaintColor != _kDebugDefaultRepaintColor ||\n        debugPrintMarkNeedsLayoutStacks ||\n        debugPrintMarkNeedsPaintStacks ||\n        debugPrintLayouts ||\n        debugCheckIntrinsicSizes != debugCheckIntrinsicSizesOverride ||\n        debugProfileLayoutsEnabled ||\n        debugProfilePaintsEnabled ||\n        debugOnProfilePaint != null ||\n        debugDisableClipLayers ||\n        debugDisablePhysicalShapeLayers ||\n        debugDisableOpacityLayers) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  var HSVColor_value = dart.privateName(colors, "HSVColor.value");
  var HSVColor_saturation = dart.privateName(colors, "HSVColor.saturation");
  var HSVColor_hue = dart.privateName(colors, "HSVColor.hue");
  var HSVColor_alpha = dart.privateName(colors, "HSVColor.alpha");
  dart.defineLazy(debug$0, {
    /*debug$0._kDebugDefaultRepaintColor*/get _kDebugDefaultRepaintColor() {
      return C[29] || CT.C29;
    },
    /*debug$0.debugPaintSizeEnabled*/get debugPaintSizeEnabled() {
      return false;
    },
    set debugPaintSizeEnabled(_) {},
    /*debug$0.debugPaintBaselinesEnabled*/get debugPaintBaselinesEnabled() {
      return false;
    },
    set debugPaintBaselinesEnabled(_) {},
    /*debug$0.debugPaintLayerBordersEnabled*/get debugPaintLayerBordersEnabled() {
      return false;
    },
    set debugPaintLayerBordersEnabled(_) {},
    /*debug$0.debugPaintPointersEnabled*/get debugPaintPointersEnabled() {
      return false;
    },
    set debugPaintPointersEnabled(_) {},
    /*debug$0.debugRepaintRainbowEnabled*/get debugRepaintRainbowEnabled() {
      return false;
    },
    set debugRepaintRainbowEnabled(_) {},
    /*debug$0.debugRepaintTextRainbowEnabled*/get debugRepaintTextRainbowEnabled() {
      return false;
    },
    set debugRepaintTextRainbowEnabled(_) {},
    /*debug$0.debugCurrentRepaintColor*/get debugCurrentRepaintColor() {
      return debug$0._kDebugDefaultRepaintColor;
    },
    set debugCurrentRepaintColor(_) {},
    /*debug$0.debugPrintMarkNeedsLayoutStacks*/get debugPrintMarkNeedsLayoutStacks() {
      return false;
    },
    set debugPrintMarkNeedsLayoutStacks(_) {},
    /*debug$0.debugPrintMarkNeedsPaintStacks*/get debugPrintMarkNeedsPaintStacks() {
      return false;
    },
    set debugPrintMarkNeedsPaintStacks(_) {},
    /*debug$0.debugPrintLayouts*/get debugPrintLayouts() {
      return false;
    },
    set debugPrintLayouts(_) {},
    /*debug$0.debugCheckIntrinsicSizes*/get debugCheckIntrinsicSizes() {
      return false;
    },
    set debugCheckIntrinsicSizes(_) {},
    /*debug$0.debugProfileLayoutsEnabled*/get debugProfileLayoutsEnabled() {
      return false;
    },
    set debugProfileLayoutsEnabled(_) {},
    /*debug$0.debugProfilePaintsEnabled*/get debugProfilePaintsEnabled() {
      return false;
    },
    set debugProfilePaintsEnabled(_) {},
    /*debug$0.debugOnProfilePaint*/get debugOnProfilePaint() {
      return null;
    },
    set debugOnProfilePaint(_) {},
    /*debug$0.debugDisableClipLayers*/get debugDisableClipLayers() {
      return false;
    },
    set debugDisableClipLayers(_) {},
    /*debug$0.debugDisablePhysicalShapeLayers*/get debugDisablePhysicalShapeLayers() {
      return false;
    },
    set debugDisablePhysicalShapeLayers(_) {},
    /*debug$0.debugDisableOpacityLayers*/get debugDisableOpacityLayers() {
      return false;
    },
    set debugDisableOpacityLayers(_) {}
  }, false);
  box._DebugSize = class _DebugSize extends ui.Size {
    static ['_#new#tearOff'](source, _owner, _canBeUsedByParent) {
      return new box._DebugSize.new(source, _owner, _canBeUsedByParent);
    }
  };
  (box._DebugSize.new = function(source, _owner, _canBeUsedByParent) {
    this[_owner$] = _owner;
    this[_canBeUsedByParent$] = _canBeUsedByParent;
    box._DebugSize.__proto__.copy.call(this, source);
    ;
  }).prototype = box._DebugSize.prototype;
  dart.addTypeTests(box._DebugSize);
  dart.addTypeCaches(box._DebugSize);
  dart.setLibraryUri(box._DebugSize, I[7]);
  dart.setFieldSignature(box._DebugSize, () => ({
    __proto__: dart.getFields(box._DebugSize.__proto__),
    [_owner$]: dart.finalFieldType(box.RenderBox),
    [_canBeUsedByParent$]: dart.finalFieldType(core.bool)
  }));
  var minWidth$ = dart.privateName(box, "BoxConstraints.minWidth");
  var maxWidth$ = dart.privateName(box, "BoxConstraints.maxWidth");
  var minHeight$ = dart.privateName(box, "BoxConstraints.minHeight");
  var maxHeight$ = dart.privateName(box, "BoxConstraints.maxHeight");
  var _debugPropagateDebugSize = dart.privateName(box, "_debugPropagateDebugSize");
  box.BoxConstraints = class BoxConstraints extends object$.Constraints {
    get minWidth() {
      return this[minWidth$];
    }
    set minWidth(value) {
      super.minWidth = value;
    }
    get maxWidth() {
      return this[maxWidth$];
    }
    set maxWidth(value) {
      super.maxWidth = value;
    }
    get minHeight() {
      return this[minHeight$];
    }
    set minHeight(value) {
      super.minHeight = value;
    }
    get maxHeight() {
      return this[maxHeight$];
    }
    set maxHeight(value) {
      super.maxHeight = value;
    }
    static ['_#new#tearOff'](opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      let minHeight = opts && 'minHeight' in opts ? opts.minHeight : 0;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : 1 / 0;
      return new box.BoxConstraints.new({minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight});
    }
    static ['_#tight#tearOff'](size) {
      return new box.BoxConstraints.tight(size);
    }
    static ['_#tightFor#tearOff'](opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return new box.BoxConstraints.tightFor({width: width, height: height});
    }
    static ['_#tightForFinite#tearOff'](opts) {
      let width = opts && 'width' in opts ? opts.width : 1 / 0;
      let height = opts && 'height' in opts ? opts.height : 1 / 0;
      return new box.BoxConstraints.tightForFinite({width: width, height: height});
    }
    static ['_#loose#tearOff'](size) {
      return new box.BoxConstraints.loose(size);
    }
    static ['_#expand#tearOff'](opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return new box.BoxConstraints.expand({width: width, height: height});
    }
    copyWith(opts) {
      let t40, t40$, t40$0, t40$1;
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : null;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
      let minHeight = opts && 'minHeight' in opts ? opts.minHeight : null;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
      return new box.BoxConstraints.new({minWidth: (t40 = minWidth, t40 == null ? this.minWidth : t40), maxWidth: (t40$ = maxWidth, t40$ == null ? this.maxWidth : t40$), minHeight: (t40$0 = minHeight, t40$0 == null ? this.minHeight : t40$0), maxHeight: (t40$1 = maxHeight, t40$1 == null ? this.maxHeight : t40$1)});
    }
    deflate(edges) {
      if (!(edges !== null)) dart.assertFailed(null, I[6], 188, 12, "edges != null");
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[6], 189, 12, "debugAssertIsValid()");
      let horizontal = edges.horizontal;
      let vertical = edges.vertical;
      let deflatedMinWidth = math.max(core.double, 0.0, this.minWidth - horizontal);
      let deflatedMinHeight = math.max(core.double, 0.0, this.minHeight - vertical);
      return new box.BoxConstraints.new({minWidth: deflatedMinWidth, maxWidth: math.max(core.double, deflatedMinWidth, this.maxWidth - horizontal), minHeight: deflatedMinHeight, maxHeight: math.max(core.double, deflatedMinHeight, this.maxHeight - vertical)});
    }
    loosen() {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[6], 204, 12, "debugAssertIsValid()");
      return new box.BoxConstraints.new({maxWidth: this.maxWidth, maxHeight: this.maxHeight});
    }
    enforce(constraints) {
      return new box.BoxConstraints.new({minWidth: this.minWidth[$clamp](constraints.minWidth, constraints.maxWidth), maxWidth: this.maxWidth[$clamp](constraints.minWidth, constraints.maxWidth), minHeight: this.minHeight[$clamp](constraints.minHeight, constraints.maxHeight), maxHeight: this.maxHeight[$clamp](constraints.minHeight, constraints.maxHeight)});
    }
    tighten(opts) {
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      return new box.BoxConstraints.new({minWidth: width == null ? this.minWidth : width[$clamp](this.minWidth, this.maxWidth), maxWidth: width == null ? this.maxWidth : width[$clamp](this.minWidth, this.maxWidth), minHeight: height == null ? this.minHeight : height[$clamp](this.minHeight, this.maxHeight), maxHeight: height == null ? this.maxHeight : height[$clamp](this.minHeight, this.maxHeight)});
    }
    get flipped() {
      return new box.BoxConstraints.new({minWidth: this.minHeight, maxWidth: this.maxHeight, minHeight: this.minWidth, maxHeight: this.maxWidth});
    }
    widthConstraints() {
      return new box.BoxConstraints.new({minWidth: this.minWidth, maxWidth: this.maxWidth});
    }
    heightConstraints() {
      return new box.BoxConstraints.new({minHeight: this.minHeight, maxHeight: this.maxHeight});
    }
    constrainWidth(width = 1 / 0) {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[6], 255, 12, "debugAssertIsValid()");
      return width[$clamp](this.minWidth, this.maxWidth);
    }
    constrainHeight(height = 1 / 0) {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[6], 262, 12, "debugAssertIsValid()");
      return height[$clamp](this.minHeight, this.maxHeight);
    }
    [_debugPropagateDebugSize](size, result) {
      if (!dart.fn(() => {
        if (box._DebugSize.is(size)) result = new box._DebugSize.new(result, size[_owner$], size[_canBeUsedByParent$]);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 267, 12, "() {\n      if (size is _DebugSize)\n        result = _DebugSize(result, size._owner, size._canBeUsedByParent);\n      return true;\n    }()");
      return result;
    }
    constrain(size) {
      let result = new ui.Size.new(this.constrainWidth(size.width), this.constrainHeight(size.height));
      if (!dart.fn(() => {
        result = this[_debugPropagateDebugSize](size, result);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 284, 12, "() {\n      result = _debugPropagateDebugSize(size, result);\n      return true;\n    }()");
      return result;
    }
    constrainDimensions(width, height) {
      return new ui.Size.new(this.constrainWidth(width), this.constrainHeight(height));
    }
    constrainSizeAndAttemptToPreserveAspectRatio(size) {
      if (this.isTight) {
        let result = this.smallest;
        if (!dart.fn(() => {
          result = this[_debugPropagateDebugSize](size, result);
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 310, 14, "() {\n        result = _debugPropagateDebugSize(size, result);\n        return true;\n      }()");
        return result;
      }
      let width = size.width;
      let height = size.height;
      if (!(width > 0.0)) dart.assertFailed(null, I[6], 319, 12, "width > 0.0");
      if (!(height > 0.0)) dart.assertFailed(null, I[6], 320, 12, "height > 0.0");
      let aspectRatio = width / height;
      if (width > this.maxWidth) {
        width = this.maxWidth;
        height = width / aspectRatio;
      }
      if (height > this.maxHeight) {
        height = this.maxHeight;
        width = height * aspectRatio;
      }
      if (width < this.minWidth) {
        width = this.minWidth;
        height = width / aspectRatio;
      }
      if (height < this.minHeight) {
        height = this.minHeight;
        width = height * aspectRatio;
      }
      let result = new ui.Size.new(this.constrainWidth(width), this.constrainHeight(height));
      if (!dart.fn(() => {
        result = this[_debugPropagateDebugSize](size, result);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 344, 12, "() {\n      result = _debugPropagateDebugSize(size, result);\n      return true;\n    }()");
      return result;
    }
    get biggest() {
      return new ui.Size.new(this.constrainWidth(), this.constrainHeight());
    }
    get smallest() {
      return new ui.Size.new(this.constrainWidth(0.0), this.constrainHeight(0.0));
    }
    get hasTightWidth() {
      return this.minWidth >= this.maxWidth;
    }
    get hasTightHeight() {
      return this.minHeight >= this.maxHeight;
    }
    get isTight() {
      return this.hasTightWidth && this.hasTightHeight;
    }
    get hasBoundedWidth() {
      return this.maxWidth < 1 / 0;
    }
    get hasBoundedHeight() {
      return this.maxHeight < 1 / 0;
    }
    get hasInfiniteWidth() {
      return this.minWidth >= 1 / 0;
    }
    get hasInfiniteHeight() {
      return this.minHeight >= 1 / 0;
    }
    isSatisfiedBy(size) {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[6], 417, 12, "debugAssertIsValid()");
      return this.minWidth <= size.width && size.width <= this.maxWidth && this.minHeight <= size.height && size.height <= this.maxHeight;
    }
    ['*'](factor) {
      return new box.BoxConstraints.new({minWidth: this.minWidth * factor, maxWidth: this.maxWidth * factor, minHeight: this.minHeight * factor, maxHeight: this.maxHeight * factor});
    }
    ['/'](factor) {
      return new box.BoxConstraints.new({minWidth: this.minWidth / factor, maxWidth: this.maxWidth / factor, minHeight: this.minHeight / factor, maxHeight: this.maxHeight / factor});
    }
    ['~/'](factor) {
      return new box.BoxConstraints.new({minWidth: (this.minWidth / factor)[$truncate]()[$toDouble](), maxWidth: (this.maxWidth / factor)[$truncate]()[$toDouble](), minHeight: (this.minHeight / factor)[$truncate]()[$toDouble](), maxHeight: (this.maxHeight / factor)[$truncate]()[$toDouble]()});
    }
    ['%'](value) {
      return new box.BoxConstraints.new({minWidth: this.minWidth[$modulo](value), maxWidth: this.maxWidth[$modulo](value), minHeight: this.minHeight[$modulo](value), maxHeight: this.maxHeight[$modulo](value)});
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[6], 469, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return dart.nullCheck(b)['*'](t);
      if (b == null) return a['*'](1.0 - t);
      if (!a.debugAssertIsValid()) dart.assertFailed(null, I[6], 476, 12, "a.debugAssertIsValid()");
      if (!b.debugAssertIsValid()) dart.assertFailed(null, I[6], 477, 12, "b.debugAssertIsValid()");
      if (!(a.minWidth[$isFinite] && b.minWidth[$isFinite] || a.minWidth === 1 / 0 && b.minWidth === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", I[6], 478, 12, "(a.minWidth.isFinite && b.minWidth.isFinite) || (a.minWidth == double.infinity && b.minWidth == double.infinity)");
      if (!(a.maxWidth[$isFinite] && b.maxWidth[$isFinite] || a.maxWidth === 1 / 0 && b.maxWidth === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", I[6], 479, 12, "(a.maxWidth.isFinite && b.maxWidth.isFinite) || (a.maxWidth == double.infinity && b.maxWidth == double.infinity)");
      if (!(a.minHeight[$isFinite] && b.minHeight[$isFinite] || a.minHeight === 1 / 0 && b.minHeight === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", I[6], 480, 12, "(a.minHeight.isFinite && b.minHeight.isFinite) || (a.minHeight == double.infinity && b.minHeight == double.infinity)");
      if (!(a.maxHeight[$isFinite] && b.maxHeight[$isFinite] || a.maxHeight === 1 / 0 && b.maxHeight === 1 / 0)) dart.assertFailed("Cannot interpolate between finite constraints and unbounded constraints.", I[6], 481, 12, "(a.maxHeight.isFinite && b.maxHeight.isFinite) || (a.maxHeight == double.infinity && b.maxHeight == double.infinity)");
      return new box.BoxConstraints.new({minWidth: a.minWidth[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.minWidth, b.minWidth, t)) : 1 / 0, maxWidth: a.maxWidth[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.maxWidth, b.maxWidth, t)) : 1 / 0, minHeight: a.minHeight[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.minHeight, b.minHeight, t)) : 1 / 0, maxHeight: a.maxHeight[$isFinite] ? dart.nullCheck(ui.lerpDouble(a.maxHeight, b.maxHeight, t)) : 1 / 0});
    }
    get isNormalized() {
      return this.minWidth >= 0.0 && this.minWidth <= this.maxWidth && this.minHeight >= 0.0 && this.minHeight <= this.maxHeight;
    }
    debugAssertIsValid(opts) {
      let isAppliedConstraint = opts && 'isAppliedConstraint' in opts ? opts.isAppliedConstraint : false;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      if (!dart.fn(() => {
        const throwError = message => {
          dart.throw(new assertions.FlutterError.fromParts((() => {
            let t40 = T$.JSArrayOfDiagnosticsNode().of([message]);
            if (informationCollector != null) t40[$addAll](informationCollector());
            t40.push(new (T$.DiagnosticsPropertyOfBoxConstraints()).new("The offending constraints were", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty}));
            return t40;
          })()));
        };
        dart.fn(throwError, T$.DiagnosticsNodeTovoid());
        if (this.minWidth[$isNaN] || this.maxWidth[$isNaN] || this.minHeight[$isNaN] || this.maxHeight[$isNaN]) {
          let affectedFieldsList = (() => {
            let t41 = T$.JSArrayOfString().of([]);
            if (this.minWidth[$isNaN]) t41.push("minWidth");
            if (this.maxWidth[$isNaN]) t41.push("maxWidth");
            if (this.minHeight[$isNaN]) t41.push("minHeight");
            if (this.maxHeight[$isNaN]) t41.push("maxHeight");
            return t41;
          })();
          if (!affectedFieldsList[$isNotEmpty]) dart.assertFailed(null, I[6], 529, 16, "affectedFieldsList.isNotEmpty");
          if (affectedFieldsList[$length] > 1) affectedFieldsList[$add]("and " + affectedFieldsList[$removeLast]());
          let whichFields = "";
          if (affectedFieldsList[$length] > 2) {
            whichFields = affectedFieldsList[$join](", ");
          } else if (affectedFieldsList[$length] === 2) {
            whichFields = affectedFieldsList[$join](" ");
          } else {
            whichFields = affectedFieldsList[$single];
          }
          throwError(new assertions.ErrorSummary.new("BoxConstraints has " + (affectedFieldsList[$length] === 1 ? "a NaN value" : "NaN values") + " in " + whichFields + "."));
        }
        if (this.minWidth < 0.0 && this.minHeight < 0.0) throwError(new assertions.ErrorSummary.new("BoxConstraints has both a negative minimum width and a negative minimum height."));
        if (this.minWidth < 0.0) throwError(new assertions.ErrorSummary.new("BoxConstraints has a negative minimum width."));
        if (this.minHeight < 0.0) throwError(new assertions.ErrorSummary.new("BoxConstraints has a negative minimum height."));
        if (this.maxWidth < this.minWidth && this.maxHeight < this.minHeight) throwError(new assertions.ErrorSummary.new("BoxConstraints has both width and height constraints non-normalized."));
        if (this.maxWidth < this.minWidth) throwError(new assertions.ErrorSummary.new("BoxConstraints has non-normalized width constraints."));
        if (this.maxHeight < this.minHeight) throwError(new assertions.ErrorSummary.new("BoxConstraints has non-normalized height constraints."));
        if (isAppliedConstraint) {
          if (this.minWidth[$isInfinite] && this.minHeight[$isInfinite]) throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite width and infinite height."));
          if (this.minWidth[$isInfinite]) throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite width."));
          if (this.minHeight[$isInfinite]) throwError(new assertions.ErrorSummary.new("BoxConstraints forces an infinite height."));
        }
        if (!this.isNormalized) dart.assertFailed(null, I[6], 562, 14, "isNormalized");
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[6], 514, 12, "() {\n      void throwError(DiagnosticsNode message) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          message,\n          if (informationCollector != null) ...informationCollector(),\n          DiagnosticsProperty<BoxConstraints>('The offending constraints were', this, style: DiagnosticsTreeStyle.errorProperty),\n        ]);\n      }\n      if (minWidth.isNaN || maxWidth.isNaN || minHeight.isNaN || maxHeight.isNaN) {\n        final List<String> affectedFieldsList = <String>[\n          if (minWidth.isNaN) 'minWidth',\n          if (maxWidth.isNaN) 'maxWidth',\n          if (minHeight.isNaN) 'minHeight',\n          if (maxHeight.isNaN) 'maxHeight',\n        ];\n        assert(affectedFieldsList.isNotEmpty);\n        if (affectedFieldsList.length > 1)\n          affectedFieldsList.add('and ${affectedFieldsList.removeLast()}');\n        String whichFields = '';\n        if (affectedFieldsList.length > 2) {\n          whichFields = affectedFieldsList.join(', ');\n        } else if (affectedFieldsList.length == 2) {\n          whichFields = affectedFieldsList.join(' ');\n        } else {\n          whichFields = affectedFieldsList.single;\n        }\n        throwError(ErrorSummary('BoxConstraints has ${affectedFieldsList.length == 1 ? 'a NaN value' : 'NaN values' } in $whichFields.'));\n      }\n      if (minWidth < 0.0 && minHeight < 0.0)\n        throwError(ErrorSummary('BoxConstraints has both a negative minimum width and a negative minimum height.'));\n      if (minWidth < 0.0)\n        throwError(ErrorSummary('BoxConstraints has a negative minimum width.'));\n      if (minHeight < 0.0)\n        throwError(ErrorSummary('BoxConstraints has a negative minimum height.'));\n      if (maxWidth < minWidth && maxHeight < minHeight)\n        throwError(ErrorSummary('BoxConstraints has both width and height constraints non-normalized.'));\n      if (maxWidth < minWidth)\n        throwError(ErrorSummary('BoxConstraints has non-normalized width constraints.'));\n      if (maxHeight < minHeight)\n        throwError(ErrorSummary('BoxConstraints has non-normalized height constraints.'));\n      if (isAppliedConstraint) {\n        if (minWidth.isInfinite && minHeight.isInfinite)\n          throwError(ErrorSummary('BoxConstraints forces an infinite width and infinite height.'));\n        if (minWidth.isInfinite)\n          throwError(ErrorSummary('BoxConstraints forces an infinite width.'));\n        if (minHeight.isInfinite)\n          throwError(ErrorSummary('BoxConstraints forces an infinite height.'));\n      }\n      assert(isNormalized);\n      return true;\n    }()");
      return this.isNormalized;
    }
    normalize() {
      if (this.isNormalized) return this;
      let minWidth = this.minWidth >= 0.0 ? this.minWidth : 0.0;
      let minHeight = this.minHeight >= 0.0 ? this.minHeight : 0.0;
      return new box.BoxConstraints.new({minWidth: minWidth, maxWidth: minWidth > this.maxWidth ? minWidth : this.maxWidth, minHeight: minHeight, maxHeight: minHeight > this.maxHeight ? minHeight : this.maxHeight});
    }
    _equals(other) {
      if (other == null) return false;
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[6], 587, 12, "debugAssertIsValid()");
      if (this === other) return true;
      if (!other[$runtimeType]._equals(this[$runtimeType])) return false;
      if (!(box.BoxConstraints.is(other) && other.debugAssertIsValid())) dart.assertFailed(null, I[6], 592, 12, "other is BoxConstraints && other.debugAssertIsValid()");
      return box.BoxConstraints.is(other) && other.minWidth === this.minWidth && other.maxWidth === this.maxWidth && other.minHeight === this.minHeight && other.maxHeight === this.maxHeight;
    }
    get hashCode() {
      if (!this.debugAssertIsValid()) dart.assertFailed(null, I[6], 602, 12, "debugAssertIsValid()");
      return ui.hashValues(this.minWidth, this.maxWidth, this.minHeight, this.maxHeight);
    }
    toString() {
      let annotation = this.isNormalized ? "" : "; NOT NORMALIZED";
      if (this.minWidth === 1 / 0 && this.minHeight === 1 / 0) return "BoxConstraints(biggest" + annotation + ")";
      if (this.minWidth === 0 && this.maxWidth === 1 / 0 && this.minHeight === 0 && this.maxHeight === 1 / 0) return "BoxConstraints(unconstrained" + annotation + ")";
      function describe(min, max, dim) {
        if (min === max) return dim + "=" + min[$toStringAsFixed](1);
        return min[$toStringAsFixed](1) + "<=" + dim + "<=" + max[$toStringAsFixed](1);
      }
      dart.fn(describe, T$.doubleAnddoubleAndStringToString());
      let width = describe(this.minWidth, this.maxWidth, "w");
      let height = describe(this.minHeight, this.maxHeight, "h");
      return "BoxConstraints(" + width + ", " + height + annotation + ")";
    }
  };
  (box.BoxConstraints.new = function(opts) {
    let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
    let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
    let minHeight = opts && 'minHeight' in opts ? opts.minHeight : 0;
    let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : 1 / 0;
    this[minWidth$] = minWidth;
    this[maxWidth$] = maxWidth;
    this[minHeight$] = minHeight;
    this[maxHeight$] = maxHeight;
    if (!(minWidth !== null)) dart.assertFailed(null, I[6], 94, 15, "minWidth != null");
    if (!(maxWidth !== null)) dart.assertFailed(null, I[6], 95, 15, "maxWidth != null");
    if (!(minHeight !== null)) dart.assertFailed(null, I[6], 96, 15, "minHeight != null");
    if (!(maxHeight !== null)) dart.assertFailed(null, I[6], 97, 15, "maxHeight != null");
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tight = function(size) {
    this[minWidth$] = size.width;
    this[maxWidth$] = size.width;
    this[minHeight$] = size.height;
    this[maxHeight$] = size.height;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tightFor = function(opts) {
    let t40, t40$, t40$0, t40$1;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    this[minWidth$] = (t40 = width, t40 == null ? 0.0 : t40);
    this[maxWidth$] = (t40$ = width, t40$ == null ? 1 / 0 : t40$);
    this[minHeight$] = (t40$0 = height, t40$0 == null ? 0.0 : t40$0);
    this[maxHeight$] = (t40$1 = height, t40$1 == null ? 1 / 0 : t40$1);
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.tightForFinite = function(opts) {
    let width = opts && 'width' in opts ? opts.width : 1 / 0;
    let height = opts && 'height' in opts ? opts.height : 1 / 0;
    this[minWidth$] = width !== 1 / 0 ? width : 0.0;
    this[maxWidth$] = width !== 1 / 0 ? width : 1 / 0;
    this[minHeight$] = height !== 1 / 0 ? height : 0.0;
    this[maxHeight$] = height !== 1 / 0 ? height : 1 / 0;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.loose = function(size) {
    this[minWidth$] = 0.0;
    this[maxWidth$] = size.width;
    this[minHeight$] = 0.0;
    this[maxHeight$] = size.height;
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  (box.BoxConstraints.expand = function(opts) {
    let t40, t40$, t40$0, t40$1;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    this[minWidth$] = (t40 = width, t40 == null ? 1 / 0 : t40);
    this[maxWidth$] = (t40$ = width, t40$ == null ? 1 / 0 : t40$);
    this[minHeight$] = (t40$0 = height, t40$0 == null ? 1 / 0 : t40$0);
    this[maxHeight$] = (t40$1 = height, t40$1 == null ? 1 / 0 : t40$1);
    box.BoxConstraints.__proto__.new.call(this);
    ;
  }).prototype = box.BoxConstraints.prototype;
  dart.addTypeTests(box.BoxConstraints);
  dart.addTypeCaches(box.BoxConstraints);
  dart.setMethodSignature(box.BoxConstraints, () => ({
    __proto__: dart.getMethods(box.BoxConstraints.__proto__),
    copyWith: dart.fnType(box.BoxConstraints, [], {maxHeight: dart.nullable(core.double), maxWidth: dart.nullable(core.double), minHeight: dart.nullable(core.double), minWidth: dart.nullable(core.double)}, {}),
    deflate: dart.fnType(box.BoxConstraints, [edge_insets.EdgeInsets]),
    loosen: dart.fnType(box.BoxConstraints, []),
    enforce: dart.fnType(box.BoxConstraints, [box.BoxConstraints]),
    tighten: dart.fnType(box.BoxConstraints, [], {height: dart.nullable(core.double), width: dart.nullable(core.double)}, {}),
    widthConstraints: dart.fnType(box.BoxConstraints, []),
    heightConstraints: dart.fnType(box.BoxConstraints, []),
    constrainWidth: dart.fnType(core.double, [], [core.double]),
    constrainHeight: dart.fnType(core.double, [], [core.double]),
    [_debugPropagateDebugSize]: dart.fnType(ui.Size, [ui.Size, ui.Size]),
    constrain: dart.fnType(ui.Size, [ui.Size]),
    constrainDimensions: dart.fnType(ui.Size, [core.double, core.double]),
    constrainSizeAndAttemptToPreserveAspectRatio: dart.fnType(ui.Size, [ui.Size]),
    isSatisfiedBy: dart.fnType(core.bool, [ui.Size]),
    '*': dart.fnType(box.BoxConstraints, [core.double]),
    '/': dart.fnType(box.BoxConstraints, [core.double]),
    '~/': dart.fnType(box.BoxConstraints, [core.double]),
    '%': dart.fnType(box.BoxConstraints, [core.double]),
    normalize: dart.fnType(box.BoxConstraints, [])
  }));
  dart.setStaticMethodSignature(box.BoxConstraints, () => ['lerp']);
  dart.setGetterSignature(box.BoxConstraints, () => ({
    __proto__: dart.getGetters(box.BoxConstraints.__proto__),
    flipped: box.BoxConstraints,
    biggest: ui.Size,
    smallest: ui.Size,
    hasTightWidth: core.bool,
    hasTightHeight: core.bool,
    isTight: core.bool,
    hasBoundedWidth: core.bool,
    hasBoundedHeight: core.bool,
    hasInfiniteWidth: core.bool,
    hasInfiniteHeight: core.bool,
    isNormalized: core.bool
  }));
  dart.setLibraryUri(box.BoxConstraints, I[7]);
  dart.setFieldSignature(box.BoxConstraints, () => ({
    __proto__: dart.getFields(box.BoxConstraints.__proto__),
    minWidth: dart.finalFieldType(core.double),
    maxWidth: dart.finalFieldType(core.double),
    minHeight: dart.finalFieldType(core.double),
    maxHeight: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(box.BoxConstraints, ['_equals', 'toString']);
  dart.defineExtensionAccessors(box.BoxConstraints, ['hashCode']);
  box.BoxHitTestResult = class BoxHitTestResult extends hit_test.HitTestResult {
    static ['_#new#tearOff']() {
      return new box.BoxHitTestResult.new();
    }
    static ['_#wrap#tearOff'](result) {
      return new box.BoxHitTestResult.wrap(result);
    }
    addWithPaintTransform(opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(position !== null)) dart.assertFailed(null, I[6], 740, 12, "position != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[6], 741, 12, "hitTest != null");
      if (transform != null) {
        transform = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(transform));
        if (transform == null) {
          return false;
        }
      }
      return this.addWithRawTransform({transform: transform, position: position, hitTest: hitTest});
    }
    addWithPaintOffset(opts) {
      let offset = opts && 'offset' in opts ? opts.offset : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(position !== null)) dart.assertFailed(null, I[6], 779, 12, "position != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[6], 780, 12, "hitTest != null");
      let transformedPosition = offset == null ? position : position['-'](offset);
      if (offset != null) {
        this.pushOffset(offset._negate());
      }
      let isHit = hitTest(this, transformedPosition);
      if (offset != null) {
        this.popTransform();
      }
      return isHit;
    }
    addWithRawTransform(opts) {
      let transform = opts && 'transform' in opts ? opts.transform : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(position !== null)) dart.assertFailed(null, I[6], 816, 12, "position != null");
      if (!(hitTest !== null)) dart.assertFailed(null, I[6], 817, 12, "hitTest != null");
      if (!(position !== null)) dart.assertFailed(null, I[6], 818, 12, "position != null");
      let transformedPosition = transform == null ? position : matrix_utils.MatrixUtils.transformPoint(transform, position);
      if (transform != null) {
        this.pushTransform(transform);
      }
      let isHit = hitTest(this, transformedPosition);
      if (transform != null) {
        this.popTransform();
      }
      return isHit;
    }
    addWithOutOfBandPosition(opts) {
      let paintOffset = opts && 'paintOffset' in opts ? opts.paintOffset : null;
      let paintTransform = opts && 'paintTransform' in opts ? opts.paintTransform : null;
      let rawTransform = opts && 'rawTransform' in opts ? opts.rawTransform : null;
      let hitTest = opts && 'hitTest' in opts ? opts.hitTest : null;
      if (!(hitTest !== null)) dart.assertFailed(null, I[6], 865, 12, "hitTest != null");
      if (!(paintOffset == null && paintTransform == null && rawTransform != null || paintOffset == null && paintTransform != null && rawTransform == null || paintOffset != null && paintTransform == null && rawTransform == null)) dart.assertFailed("Exactly one transform or offset argument must be provided.", I[6], 867, 7, "(paintOffset == null && paintTransform == null && rawTransform != null) ||\n      (paintOffset == null && paintTransform != null && rawTransform == null) ||\n      (paintOffset != null && paintTransform == null && rawTransform == null)");
      if (paintOffset != null) {
        this.pushOffset(paintOffset._negate());
      } else if (rawTransform != null) {
        this.pushTransform(rawTransform);
      } else {
        if (!(paintTransform != null)) dart.assertFailed(null, I[6], 877, 14, "paintTransform != null");
        paintTransform = vector_math_64.Matrix4.tryInvert(events.PointerEvent.removePerspectiveTransform(dart.nullCheck(paintTransform)));
        if (!(paintTransform != null)) dart.assertFailed("paintTransform must be invertible.", I[6], 879, 14, "paintTransform != null");
        this.pushTransform(dart.nullCheck(paintTransform));
      }
      let isHit = hitTest(this);
      this.popTransform();
      return isHit;
    }
  };
  (box.BoxHitTestResult.new = function() {
    box.BoxHitTestResult.__proto__.new.call(this);
    ;
  }).prototype = box.BoxHitTestResult.prototype;
  (box.BoxHitTestResult.wrap = function(result) {
    box.BoxHitTestResult.__proto__.wrap.call(this, result);
    ;
  }).prototype = box.BoxHitTestResult.prototype;
  dart.addTypeTests(box.BoxHitTestResult);
  dart.addTypeCaches(box.BoxHitTestResult);
  dart.setMethodSignature(box.BoxHitTestResult, () => ({
    __proto__: dart.getMethods(box.BoxHitTestResult.__proto__),
    addWithPaintTransform: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), position: ui.Offset, transform: dart.nullable(vector_math_64.Matrix4)}),
    addWithPaintOffset: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), offset: dart.nullable(ui.Offset), position: ui.Offset}),
    addWithRawTransform: dart.fnType(core.bool, [], {}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset]), position: ui.Offset, transform: dart.nullable(vector_math_64.Matrix4)}),
    addWithOutOfBandPosition: dart.fnType(core.bool, [], {paintOffset: dart.nullable(ui.Offset), paintTransform: dart.nullable(vector_math_64.Matrix4), rawTransform: dart.nullable(vector_math_64.Matrix4)}, {hitTest: dart.fnType(core.bool, [box.BoxHitTestResult])})
  }));
  dart.setLibraryUri(box.BoxHitTestResult, I[7]);
  var localPosition$0 = dart.privateName(box, "BoxHitTestEntry.localPosition");
  box.BoxHitTestEntry = class BoxHitTestEntry extends hit_test.HitTestEntry {
    get localPosition() {
      return this[localPosition$0];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    static ['_#new#tearOff'](target, localPosition) {
      return new box.BoxHitTestEntry.new(target, localPosition);
    }
    get target() {
      return box.RenderBox.as(super.target);
    }
    toString() {
      return diagnostics.describeIdentity(this.target) + "@" + dart.str(this.localPosition);
    }
  };
  (box.BoxHitTestEntry.new = function(target, localPosition) {
    this[localPosition$0] = localPosition;
    if (!(localPosition !== null)) dart.assertFailed(null, I[6], 894, 14, "localPosition != null");
    box.BoxHitTestEntry.__proto__.new.call(this, target);
    ;
  }).prototype = box.BoxHitTestEntry.prototype;
  dart.addTypeTests(box.BoxHitTestEntry);
  dart.addTypeCaches(box.BoxHitTestEntry);
  dart.setGetterSignature(box.BoxHitTestEntry, () => ({
    __proto__: dart.getGetters(box.BoxHitTestEntry.__proto__),
    target: box.RenderBox
  }));
  dart.setLibraryUri(box.BoxHitTestEntry, I[7]);
  dart.setFieldSignature(box.BoxHitTestEntry, () => ({
    __proto__: dart.getFields(box.BoxHitTestEntry.__proto__),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(box.BoxHitTestEntry, ['toString']);
  var offset = dart.privateName(box, "BoxParentData.offset");
  box.BoxParentData = class BoxParentData extends object$.ParentData {
    get offset() {
      return this[offset];
    }
    set offset(value) {
      this[offset] = value;
    }
    toString() {
      return "offset=" + dart.str(this.offset);
    }
    static ['_#new#tearOff']() {
      return new box.BoxParentData.new();
    }
  };
  (box.BoxParentData.new = function() {
    this[offset] = ui.Offset.zero;
    ;
  }).prototype = box.BoxParentData.prototype;
  dart.addTypeTests(box.BoxParentData);
  dart.addTypeCaches(box.BoxParentData);
  dart.setLibraryUri(box.BoxParentData, I[7]);
  dart.setFieldSignature(box.BoxParentData, () => ({
    __proto__: dart.getFields(box.BoxParentData.__proto__),
    offset: dart.fieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(box.BoxParentData, ['toString']);
  const _is_ContainerBoxParentData_default = Symbol('_is_ContainerBoxParentData_default');
  box.ContainerBoxParentData$ = dart.generic(ChildType => {
    const BoxParentData_ContainerParentDataMixin$36 = class BoxParentData_ContainerParentDataMixin extends box.BoxParentData {};
    (BoxParentData_ContainerParentDataMixin$36.new = function() {
      object$.ContainerParentDataMixin$(ChildType)[dart.mixinNew].call(this);
      BoxParentData_ContainerParentDataMixin$36.__proto__.new.call(this);
    }).prototype = BoxParentData_ContainerParentDataMixin$36.prototype;
    dart.applyMixin(BoxParentData_ContainerParentDataMixin$36, object$.ContainerParentDataMixin$(ChildType));
    class ContainerBoxParentData extends BoxParentData_ContainerParentDataMixin$36 {}
    (ContainerBoxParentData.new = function() {
      ContainerBoxParentData.__proto__.new.call(this);
      ;
    }).prototype = ContainerBoxParentData.prototype;
    dart.addTypeTests(ContainerBoxParentData);
    ContainerBoxParentData.prototype[_is_ContainerBoxParentData_default] = true;
    dart.addTypeCaches(ContainerBoxParentData);
    dart.setLibraryUri(ContainerBoxParentData, I[7]);
    return ContainerBoxParentData;
  });
  box.ContainerBoxParentData = box.ContainerBoxParentData$();
  dart.addTypeTests(box.ContainerBoxParentData, _is_ContainerBoxParentData_default);
  var _name = dart.privateName(core, "_name");
  box._IntrinsicDimension = class _IntrinsicDimension extends core._Enum {
    toString() {
      return "_IntrinsicDimension." + this[_name];
    }
  };
  (box._IntrinsicDimension.new = function(index, name) {
    box._IntrinsicDimension.__proto__.new.call(this, index, name);
    ;
  }).prototype = box._IntrinsicDimension.prototype;
  dart.addTypeTests(box._IntrinsicDimension);
  dart.addTypeCaches(box._IntrinsicDimension);
  dart.setLibraryUri(box._IntrinsicDimension, I[7]);
  dart.setStaticFieldSignature(box._IntrinsicDimension, () => ['values', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight']);
  dart.defineExtensionMethods(box._IntrinsicDimension, ['toString']);
  box._IntrinsicDimension.minWidth = C[30] || CT.C30;
  box._IntrinsicDimension.maxWidth = C[31] || CT.C31;
  box._IntrinsicDimension.minHeight = C[32] || CT.C32;
  box._IntrinsicDimension.maxHeight = C[33] || CT.C33;
  box._IntrinsicDimension.values = C[34] || CT.C34;
  var dimension$ = dart.privateName(box, "_IntrinsicDimensionsCacheEntry.dimension");
  var argument$ = dart.privateName(box, "_IntrinsicDimensionsCacheEntry.argument");
  box._IntrinsicDimensionsCacheEntry = class _IntrinsicDimensionsCacheEntry extends core.Object {
    get dimension() {
      return this[dimension$];
    }
    set dimension(value) {
      super.dimension = value;
    }
    get argument() {
      return this[argument$];
    }
    set argument(value) {
      super.argument = value;
    }
    static ['_#new#tearOff'](dimension, argument) {
      return new box._IntrinsicDimensionsCacheEntry.new(dimension, argument);
    }
    _equals(other) {
      if (other == null) return false;
      return box._IntrinsicDimensionsCacheEntry.is(other) && other.dimension === this.dimension && other.argument === this.argument;
    }
    get hashCode() {
      return ui.hashValues(this.dimension, this.argument);
    }
  };
  (box._IntrinsicDimensionsCacheEntry.new = function(dimension, argument) {
    this[dimension$] = dimension;
    this[argument$] = argument;
    ;
  }).prototype = box._IntrinsicDimensionsCacheEntry.prototype;
  dart.addTypeTests(box._IntrinsicDimensionsCacheEntry);
  dart.addTypeCaches(box._IntrinsicDimensionsCacheEntry);
  dart.setLibraryUri(box._IntrinsicDimensionsCacheEntry, I[7]);
  dart.setFieldSignature(box._IntrinsicDimensionsCacheEntry, () => ({
    __proto__: dart.getFields(box._IntrinsicDimensionsCacheEntry.__proto__),
    dimension: dart.finalFieldType(box._IntrinsicDimension),
    argument: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(box._IntrinsicDimensionsCacheEntry, ['_equals']);
  dart.defineExtensionAccessors(box._IntrinsicDimensionsCacheEntry, ['hashCode']);
  const _is_RenderBoxContainerDefaultsMixin_default = Symbol('_is_RenderBoxContainerDefaultsMixin_default');
  box.RenderBoxContainerDefaultsMixin$ = dart.generic((ChildType, ParentDataType) => {
    var __t$JSArrayOfChildType = () => (__t$JSArrayOfChildType = dart.constFn(_interceptors.JSArray$(ChildType)))();
    var __t$ParentDataTypeN = () => (__t$ParentDataTypeN = dart.constFn(dart.nullable(ParentDataType)))();
    class RenderBoxContainerDefaultsMixin extends core.Object {}
    RenderBoxContainerDefaultsMixin[dart.mixinOn] = Object => class RenderBoxContainerDefaultsMixin extends Object {
      defaultComputeDistanceToFirstActualBaseline(baseline) {
        if (!!this.debugNeedsLayout) dart.assertFailed(null, I[6], 2773, 12, "!debugNeedsLayout");
        let child = this.firstChild;
        while (child != null) {
          let childParentData = __t$ParentDataTypeN().as(child.parentData);
          let result = child.getDistanceToActualBaseline(baseline);
          if (result != null) return dart.notNull(result) + dart.nullCheck(childParentData).offset.dy;
          child = dart.nullCheck(childParentData).nextSibling;
        }
        return null;
      }
      defaultComputeDistanceToHighestActualBaseline(baseline) {
        if (!!this.debugNeedsLayout) dart.assertFailed(null, I[6], 2790, 12, "!debugNeedsLayout");
        let result = null;
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let candidate = child.getDistanceToActualBaseline(baseline);
          if (candidate != null) {
            candidate = dart.notNull(candidate) + childParentData.offset.dy;
            if (result != null)
              result = math.min(core.double, result, candidate);
            else
              result = candidate;
          }
          child = childParentData.nextSibling;
        }
        return result;
      }
      defaultHitTestChildren(result, opts) {
        let position = opts && 'position' in opts ? opts.position : null;
        let child = this.lastChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          let isHit = result.addWithPaintOffset({offset: childParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
              if (!transformed._equals(position['-'](childParentData.offset))) dart.assertFailed(null, I[6], 2826, 18, "transformed == position - childParentData.offset");
              return dart.nullCheck(child).hitTest(result, {position: transformed});
            }, T$.BoxHitTestResultAndOffsetTobool())});
          if (isHit) return true;
          child = childParentData.previousSibling;
        }
        return false;
      }
      defaultPaint(context, offset) {
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          context.paintChild(child, childParentData.offset['+'](offset));
          child = childParentData.nextSibling;
        }
      }
      getChildrenAsList() {
        let result = __t$JSArrayOfChildType().of([]);
        let child = this.firstChild;
        while (child != null) {
          let childParentData = ParentDataType.as(dart.nullCheck(child.parentData));
          result[$add](ChildType.as(child));
          child = childParentData.nextSibling;
        }
        return result;
      }
    };
    (RenderBoxContainerDefaultsMixin[dart.mixinNew] = function() {
    }).prototype = RenderBoxContainerDefaultsMixin.prototype;
    dart.addTypeTests(RenderBoxContainerDefaultsMixin);
    RenderBoxContainerDefaultsMixin.prototype[_is_RenderBoxContainerDefaultsMixin_default] = true;
    dart.addTypeCaches(RenderBoxContainerDefaultsMixin);
    RenderBoxContainerDefaultsMixin[dart.implements] = () => [object$.ContainerRenderObjectMixin$(ChildType, ParentDataType), core.Object];
    dart.setMethodSignature(RenderBoxContainerDefaultsMixin, () => ({
      __proto__: dart.getMethods(RenderBoxContainerDefaultsMixin.__proto__),
      defaultComputeDistanceToFirstActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
      defaultComputeDistanceToHighestActualBaseline: dart.fnType(dart.nullable(core.double), [ui.TextBaseline]),
      defaultHitTestChildren: dart.fnType(core.bool, [box.BoxHitTestResult], {}, {position: ui.Offset}),
      defaultPaint: dart.fnType(dart.void, [object$.PaintingContext, ui.Offset]),
      getChildrenAsList: dart.fnType(core.List$(ChildType), [])
    }));
    dart.setLibraryUri(RenderBoxContainerDefaultsMixin, I[7]);
    return RenderBoxContainerDefaultsMixin;
  });
  box.RenderBoxContainerDefaultsMixin = box.RenderBoxContainerDefaultsMixin$();
  dart.addTypeTests(box.RenderBoxContainerDefaultsMixin, _is_RenderBoxContainerDefaultsMixin_default);
  dart.trackLibraries("packages/flutter/src/rendering/layer.dart", {
    "package:flutter/src/rendering/layer.dart": layer$,
    "package:flutter/src/rendering/view.dart": view,
    "package:flutter/src/rendering/mouse_tracker.dart": mouse_tracker,
    "package:flutter/src/rendering/binding.dart": binding$4,
    "package:flutter/src/rendering/object.dart": object$,
    "package:flutter/src/rendering/debug.dart": debug$0,
    "package:flutter/src/rendering/box.dart": box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["layer.dart","view.dart","object.dart","box.dart","mouse_tracker.dart","binding.dart","debug.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/rendering/layer.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__layer: layer$,
    src__rendering__view: view,
    src__rendering__mouse_tracker: mouse_tracker,
    src__rendering__binding: binding$4,
    src__rendering__object: object$,
    src__rendering__debug: debug$0,
    src__rendering__box: box
  };
}));

//# sourceMappingURL=layer.dart.lib.js.map
