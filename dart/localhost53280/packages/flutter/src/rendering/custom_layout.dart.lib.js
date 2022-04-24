define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/object.dart', 'packages/flutter/src/foundation/change_notifier.dart'], (function load__packages__flutter__src__rendering__custom_layout_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__object$46dart, packages__flutter__src__foundation__change_notifier$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const assertions = packages__flutter__src__foundation__debug$46dart.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const object$ = packages__flutter__src__foundation__object$46dart.src__foundation__object;
  const change_notifier = packages__flutter__src__foundation__change_notifier$46dart.src__foundation__change_notifier;
  var custom_layout = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  var $isFinite = dartx.isFinite;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    DiagnosticsPropertyOfAssertionError: () => (T.DiagnosticsPropertyOfAssertionError = dart.constFn(diagnostics.DiagnosticsProperty$(core.AssertionError)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    DiagnosticsPropertyOfRenderBox: () => (T.DiagnosticsPropertyOfRenderBox = dart.constFn(diagnostics.DiagnosticsProperty$(box.RenderBox)))(),
    LinkedHashSetOfRenderBox: () => (T.LinkedHashSetOfRenderBox = dart.constFn(collection.LinkedHashSet$(box.RenderBox)))(),
    LinkedMapOfObject$RenderBox: () => (T.LinkedMapOfObject$RenderBox = dart.constFn(_js_helper.LinkedMap$(core.Object, box.RenderBox)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flutter/src/rendering/custom_layout.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/custom_layout.dart"
  ];
  var id = dart.privateName(custom_layout, "MultiChildLayoutParentData.id");
  custom_layout.MultiChildLayoutParentData = class MultiChildLayoutParentData extends box.ContainerBoxParentData$(box.RenderBox) {
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    toString() {
      return super.toString() + "; id=" + dart.str(this.id);
    }
    static ['_#new#tearOff']() {
      return new custom_layout.MultiChildLayoutParentData.new();
    }
  };
  (custom_layout.MultiChildLayoutParentData.new = function() {
    this[id] = null;
    custom_layout.MultiChildLayoutParentData.__proto__.new.call(this);
    ;
  }).prototype = custom_layout.MultiChildLayoutParentData.prototype;
  dart.addTypeTests(custom_layout.MultiChildLayoutParentData);
  dart.addTypeCaches(custom_layout.MultiChildLayoutParentData);
  dart.setLibraryUri(custom_layout.MultiChildLayoutParentData, I[0]);
  dart.setFieldSignature(custom_layout.MultiChildLayoutParentData, () => ({
    __proto__: dart.getFields(custom_layout.MultiChildLayoutParentData.__proto__),
    id: dart.fieldType(dart.nullable(core.Object))
  }));
  dart.defineExtensionMethods(custom_layout.MultiChildLayoutParentData, ['toString']);
  var _idToChild = dart.privateName(custom_layout, "_idToChild");
  var _debugChildrenNeedingLayout = dart.privateName(custom_layout, "_debugChildrenNeedingLayout");
  var _relayout = dart.privateName(custom_layout, "_relayout");
  var _debugDescribeChild = dart.privateName(custom_layout, "_debugDescribeChild");
  var _callPerformLayout = dart.privateName(custom_layout, "_callPerformLayout");
  custom_layout.MultiChildLayoutDelegate = class MultiChildLayoutDelegate extends core.Object {
    hasChild(childId) {
      return dart.nullCheck(this[_idToChild])[$_get](childId) != null;
    }
    layoutChild(childId, constraints) {
      let child = dart.nullCheck(this[_idToChild])[$_get](childId);
      if (!dart.fn(() => {
        if (child == null) {
          dart.throw(assertions.FlutterError.new("The " + dart.str(this) + " custom multichild layout delegate tried to lay out a non-existent child.\n" + "There is no child with the id \"" + dart.str(childId) + "\"."));
        }
        if (!dart.nullCheck(this[_debugChildrenNeedingLayout]).remove(child)) {
          dart.throw(assertions.FlutterError.new("The " + dart.str(this) + " custom multichild layout delegate tried to lay out the child with id \"" + dart.str(childId) + "\" more than once.\n" + "Each child must be laid out exactly once."));
        }
        try {
          if (!constraints.debugAssertIsValid({isAppliedConstraint: true})) dart.assertFailed(null, I[1], 157, 16, "constraints.debugAssertIsValid(isAppliedConstraint: true)");
        } catch (e) {
          let exception = dart.getThrown(e);
          if (core.AssertionError.is(exception)) {
            dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("The " + dart.str(this) + " custom multichild layout delegate provided invalid box constraints for the child with id \"" + dart.str(childId) + "\"."), new (T.DiagnosticsPropertyOfAssertionError()).new("Exception", exception, {showName: false}), new assertions.ErrorDescription.new("The minimum width and height must be greater than or equal to zero.\n" + "The maximum width must be greater than or equal to the minimum width.\n" + "The maximum height must be greater than or equal to the minimum height.")])));
          } else
            throw e;
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 143, 12, "() {\n      if (child == null) {\n        throw FlutterError(\n          'The $this custom multichild layout delegate tried to lay out a non-existent child.\\n'\n          'There is no child with the id \"$childId\".',\n        );\n      }\n      if (!_debugChildrenNeedingLayout!.remove(child)) {\n        throw FlutterError(\n          'The $this custom multichild layout delegate tried to lay out the child with id \"$childId\" more than once.\\n'\n          'Each child must be laid out exactly once.',\n        );\n      }\n      try {\n        assert(constraints.debugAssertIsValid(isAppliedConstraint: true));\n      } on AssertionError catch (exception) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('The $this custom multichild layout delegate provided invalid box constraints for the child with id \"$childId\".'),\n          DiagnosticsProperty<AssertionError>('Exception', exception, showName: false),\n          ErrorDescription(\n            'The minimum width and height must be greater than or equal to zero.\\n'\n            'The maximum width must be greater than or equal to the minimum width.\\n'\n            'The maximum height must be greater than or equal to the minimum height.',\n          ),\n        ]);\n      }\n      return true;\n    }()");
      dart.nullCheck(child).layout(constraints, {parentUsesSize: true});
      return child.size;
    }
    positionChild(childId, offset) {
      let child = dart.nullCheck(this[_idToChild])[$_get](childId);
      if (!dart.fn(() => {
        if (child == null) {
          dart.throw(assertions.FlutterError.new("The " + dart.str(this) + " custom multichild layout delegate tried to position out a non-existent child:\n" + "There is no child with the id \"" + dart.str(childId) + "\"."));
        }
        if (offset === null) {
          dart.throw(assertions.FlutterError.new("The " + dart.str(this) + " custom multichild layout delegate provided a null position for the child with id \"" + dart.str(childId) + "\"."));
        }
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 183, 12, "() {\n      if (child == null) {\n        throw FlutterError(\n          'The $this custom multichild layout delegate tried to position out a non-existent child:\\n'\n          'There is no child with the id \"$childId\".',\n        );\n      }\n      if (offset == null) {\n        throw FlutterError(\n          'The $this custom multichild layout delegate provided a null position for the child with id \"$childId\".',\n        );\n      }\n      return true;\n    }()");
      let childParentData = custom_layout.MultiChildLayoutParentData.as(dart.nullCheck(dart.nullCheck(child).parentData));
      childParentData.offset = offset;
    }
    [_debugDescribeChild](child) {
      let childParentData = custom_layout.MultiChildLayoutParentData.as(dart.nullCheck(child.parentData));
      return new (T.DiagnosticsPropertyOfRenderBox()).new(dart.str(childParentData.id), child);
    }
    [_callPerformLayout](size, firstChild) {
      let previousIdToChild = this[_idToChild];
      let debugPreviousChildrenNeedingLayout = null;
      if (!dart.fn(() => {
        debugPreviousChildrenNeedingLayout = this[_debugChildrenNeedingLayout];
        this[_debugChildrenNeedingLayout] = T.LinkedHashSetOfRenderBox().new();
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[1], 213, 12, "() {\n      debugPreviousChildrenNeedingLayout = _debugChildrenNeedingLayout;\n      _debugChildrenNeedingLayout = <RenderBox>{};\n      return true;\n    }()");
      try {
        this[_idToChild] = new (T.LinkedMapOfObject$RenderBox()).new();
        let child = firstChild;
        while (child != null) {
          let childParentData = custom_layout.MultiChildLayoutParentData.as(dart.nullCheck(child.parentData));
          if (!dart.fn(() => {
            if (childParentData.id == null) {
              dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Every child of a RenderCustomMultiChildLayoutBox must have an ID in its parent data."), dart.nullCheck(child).describeForError("The following child has no ID")])));
            }
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[1], 224, 16, "() {\n          if (childParentData.id == null) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('Every child of a RenderCustomMultiChildLayoutBox must have an ID in its parent data.'),\n              child!.describeForError('The following child has no ID'),\n            ]);\n          }\n          return true;\n        }()");
          dart.nullCheck(this[_idToChild])[$_set](dart.nullCheck(childParentData.id), child);
          if (!dart.fn(() => {
            dart.nullCheck(this[_debugChildrenNeedingLayout]).add(dart.nullCheck(child));
            return true;
          }, T.VoidTobool())()) dart.assertFailed(null, I[1], 234, 16, "() {\n          _debugChildrenNeedingLayout!.add(child!);\n          return true;\n        }()");
          child = childParentData.nextSibling;
        }
        this.performLayout(size);
        if (!dart.fn(() => {
          if (dart.nullCheck(this[_debugChildrenNeedingLayout])[$isNotEmpty]) {
            dart.throw(new assertions.FlutterError.fromParts(T.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Each child must be laid out exactly once."), new diagnostics.DiagnosticsBlock.new({name: "The " + dart.str(this) + " custom multichild layout delegate forgot " + "to lay out the following " + (dart.nullCheck(this[_debugChildrenNeedingLayout])[$length] > 1 ? "children" : "child"), properties: dart.nullCheck(this[_debugChildrenNeedingLayout])[$map](diagnostics.DiagnosticsNode, dart.bind(this, _debugDescribeChild))[$toList]()})])));
          }
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 241, 14, "() {\n        if (_debugChildrenNeedingLayout!.isNotEmpty) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('Each child must be laid out exactly once.'),\n            DiagnosticsBlock(\n              name:\n                'The $this custom multichild layout delegate forgot '\n                'to lay out the following '\n                '${_debugChildrenNeedingLayout!.length > 1 ? 'children' : 'child'}',\n              properties: _debugChildrenNeedingLayout!.map<DiagnosticsNode>(_debugDescribeChild).toList(),\n            ),\n          ]);\n        }\n        return true;\n      }()");
      } finally {
        this[_idToChild] = previousIdToChild;
        if (!dart.fn(() => {
          this[_debugChildrenNeedingLayout] = debugPreviousChildrenNeedingLayout;
          return true;
        }, T.VoidTobool())()) dart.assertFailed(null, I[1], 258, 14, "() {\n        _debugChildrenNeedingLayout = debugPreviousChildrenNeedingLayout;\n        return true;\n      }()");
      }
    }
    getSize(constraints) {
      return constraints.biggest;
    }
    toString() {
      return object$.objectRuntimeType(this, "MultiChildLayoutDelegate");
    }
  };
  (custom_layout.MultiChildLayoutDelegate.new = function(opts) {
    let relayout = opts && 'relayout' in opts ? opts.relayout : null;
    this[_idToChild] = null;
    this[_debugChildrenNeedingLayout] = null;
    this[_relayout] = relayout;
    ;
  }).prototype = custom_layout.MultiChildLayoutDelegate.prototype;
  dart.addTypeTests(custom_layout.MultiChildLayoutDelegate);
  dart.addTypeCaches(custom_layout.MultiChildLayoutDelegate);
  dart.setMethodSignature(custom_layout.MultiChildLayoutDelegate, () => ({
    __proto__: dart.getMethods(custom_layout.MultiChildLayoutDelegate.__proto__),
    hasChild: dart.fnType(core.bool, [core.Object]),
    layoutChild: dart.fnType(ui.Size, [core.Object, box.BoxConstraints]),
    positionChild: dart.fnType(dart.void, [core.Object, ui.Offset]),
    [_debugDescribeChild]: dart.fnType(diagnostics.DiagnosticsNode, [box.RenderBox]),
    [_callPerformLayout]: dart.fnType(dart.void, [ui.Size, dart.nullable(box.RenderBox)]),
    getSize: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setLibraryUri(custom_layout.MultiChildLayoutDelegate, I[0]);
  dart.setFieldSignature(custom_layout.MultiChildLayoutDelegate, () => ({
    __proto__: dart.getFields(custom_layout.MultiChildLayoutDelegate.__proto__),
    [_relayout]: dart.finalFieldType(dart.nullable(change_notifier.Listenable)),
    [_idToChild]: dart.fieldType(dart.nullable(core.Map$(core.Object, box.RenderBox))),
    [_debugChildrenNeedingLayout]: dart.fieldType(dart.nullable(core.Set$(box.RenderBox)))
  }));
  dart.defineExtensionMethods(custom_layout.MultiChildLayoutDelegate, ['toString']);
  var _delegate = dart.privateName(custom_layout, "_delegate");
  var _getSize = dart.privateName(custom_layout, "_getSize");
  const RenderBox_ContainerRenderObjectMixin$36 = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$36.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, custom_layout.MultiChildLayoutParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$36.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$36, object.ContainerRenderObjectMixin$(box.RenderBox, custom_layout.MultiChildLayoutParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$36 = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$36 {};
  (RenderBox_RenderBoxContainerDefaultsMixin$36.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$36, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, custom_layout.MultiChildLayoutParentData));
  custom_layout.RenderCustomMultiChildLayoutBox = class RenderCustomMultiChildLayoutBox extends RenderBox_RenderBoxContainerDefaultsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      return new custom_layout.RenderCustomMultiChildLayoutBox.new({children: children, delegate: delegate});
    }
    setupParentData(child) {
      box.RenderBox.as(child);
      if (!custom_layout.MultiChildLayoutParentData.is(child.parentData)) child.parentData = new custom_layout.MultiChildLayoutParentData.new();
    }
    get delegate() {
      return this[_delegate];
    }
    set delegate(newDelegate) {
      let t1, t1$;
      if (!(newDelegate !== null)) dart.assertFailed(null, I[1], 329, 12, "newDelegate != null");
      if (this[_delegate][$_equals](newDelegate)) return;
      let oldDelegate = this[_delegate];
      if (!newDelegate[$runtimeType]._equals(oldDelegate[$runtimeType]) || newDelegate.shouldRelayout(oldDelegate)) this.markNeedsLayout();
      this[_delegate] = newDelegate;
      if (this.attached) {
        t1 = oldDelegate[_relayout];
        t1 == null ? null : t1.removeListener(dart.bind(this, 'markNeedsLayout'));
        t1$ = newDelegate[_relayout];
        t1$ == null ? null : t1$.addListener(dart.bind(this, 'markNeedsLayout'));
      }
    }
    attach(owner) {
      let t1;
      object.PipelineOwner.as(owner);
      super.attach(owner);
      t1 = this[_delegate][_relayout];
      t1 == null ? null : t1.addListener(dart.bind(this, 'markNeedsLayout'));
    }
    detach() {
      let t1;
      t1 = this[_delegate][_relayout];
      t1 == null ? null : t1.removeListener(dart.bind(this, 'markNeedsLayout'));
      super.detach();
    }
    [_getSize](constraints) {
      if (!constraints.debugAssertIsValid()) dart.assertFailed(null, I[1], 355, 12, "constraints.debugAssertIsValid()");
      return constraints.constrain(this[_delegate].getSize(constraints));
    }
    computeMinIntrinsicWidth(height) {
      let width = this[_getSize](new box.BoxConstraints.tightForFinite({height: height})).width;
      if (width[$isFinite]) return width;
      return 0.0;
    }
    computeMaxIntrinsicWidth(height) {
      let width = this[_getSize](new box.BoxConstraints.tightForFinite({height: height})).width;
      if (width[$isFinite]) return width;
      return 0.0;
    }
    computeMinIntrinsicHeight(width) {
      let height = this[_getSize](new box.BoxConstraints.tightForFinite({width: width})).height;
      if (height[$isFinite]) return height;
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      let height = this[_getSize](new box.BoxConstraints.tightForFinite({width: width})).height;
      if (height[$isFinite]) return height;
      return 0.0;
    }
    computeDryLayout(constraints) {
      return this[_getSize](constraints);
    }
    performLayout() {
      this.size = this[_getSize](this.constraints);
      this.delegate[_callPerformLayout](this.size, this.firstChild);
    }
    paint(context, offset) {
      this.defaultPaint(context, offset);
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.defaultHitTestChildren(result, {position: position});
    }
  };
  (custom_layout.RenderCustomMultiChildLayoutBox.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    if (!(delegate !== null)) dart.assertFailed(null, I[1], 314, 15, "delegate != null");
    this[_delegate] = delegate;
    custom_layout.RenderCustomMultiChildLayoutBox.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = custom_layout.RenderCustomMultiChildLayoutBox.prototype;
  dart.addTypeTests(custom_layout.RenderCustomMultiChildLayoutBox);
  dart.addTypeCaches(custom_layout.RenderCustomMultiChildLayoutBox);
  dart.setMethodSignature(custom_layout.RenderCustomMultiChildLayoutBox, () => ({
    __proto__: dart.getMethods(custom_layout.RenderCustomMultiChildLayoutBox.__proto__),
    [_getSize]: dart.fnType(ui.Size, [box.BoxConstraints])
  }));
  dart.setGetterSignature(custom_layout.RenderCustomMultiChildLayoutBox, () => ({
    __proto__: dart.getGetters(custom_layout.RenderCustomMultiChildLayoutBox.__proto__),
    delegate: custom_layout.MultiChildLayoutDelegate
  }));
  dart.setSetterSignature(custom_layout.RenderCustomMultiChildLayoutBox, () => ({
    __proto__: dart.getSetters(custom_layout.RenderCustomMultiChildLayoutBox.__proto__),
    delegate: custom_layout.MultiChildLayoutDelegate
  }));
  dart.setLibraryUri(custom_layout.RenderCustomMultiChildLayoutBox, I[0]);
  dart.setFieldSignature(custom_layout.RenderCustomMultiChildLayoutBox, () => ({
    __proto__: dart.getFields(custom_layout.RenderCustomMultiChildLayoutBox.__proto__),
    [_delegate]: dart.fieldType(custom_layout.MultiChildLayoutDelegate)
  }));
  dart.trackLibraries("packages/flutter/src/rendering/custom_layout.dart", {
    "package:flutter/src/rendering/custom_layout.dart": custom_layout
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_layout.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcU;;;;;;;AAGa,YAAS,AAAoB,oBAAT,mBAAM;IAAG;;;;;;IAH1C;;;EAIV;;;;;;;;;;;;;;;aAkHuB;AAAY,YAAU,AAAC,AAAU,gBAArB,yBAAY,OAAO;IAAS;gBAQrC,SAAwB;AAC7B,kBAAkB,AAAC,eAAX,yBAAY,OAAO;AAC5C,WAAO,AA2BN;AA1BC,YAAI,AAAM,KAAD;AAIN,UAHD,WAAM,4BAAY,AAChB,kBAAM,QAAI,gFACV,8CAAiC,OAAO;;AAG5C,aAAgC,AAAE,eAA7B,0CAAoC,KAAK;AAI3C,UAHD,WAAM,4BAAY,AAChB,kBAAM,QAAI,sFAAwE,OAAO,6BACzF;;AAGJ;AACE,eAAO,AAAY,WAAD,0CAAyC;;cAClC;AAAzB;AASE,YARF,WAAmB,sCAA2B,iCAC5C,gCAAa,AAAgH,kBAA1G,QAAI,0GAA4F,OAAO,YAC1H,kDAAoC,aAAa,SAAS,aAAY,SACtE,oCAAgB,AACd,0EACA,4EACA;;;;AAIN,cAAO;;AAEuC,MAA3C,AAAE,eAAP,KAAK,SAAS,WAAW,mBAAkB;AAC3C,YAAO,AAAM,MAAD;IACd;kBAQ0B,SAAgB;AACvB,kBAAkB,AAAC,eAAX,yBAAY,OAAO;AAC5C,WAAO,AAaN;AAZC,YAAI,AAAM,KAAD;AAIN,UAHD,WAAM,4BAAY,AAChB,kBAAM,QAAI,qFACV,8CAAiC,OAAO;;AAG5C,YAAI,AAAO,MAAD;AAGP,UAFD,WAAM,4BACJ,AAAwG,kBAAlG,QAAI,kGAAoF,OAAO;;AAGzG,cAAO;;AAEwB,4BAAqC,4CAAF,eAAZ,AAAE,eAAP,KAAK;AACzB,MAA/B,AAAgB,eAAD,UAAU,MAAM;IACjC;0BAE8C;AACX,4BAAoC,4CAAF,eAAhB,AAAM,KAAD;AACxD,YAAO,8CAAsD,SAApB,AAAgB,eAAD,MAAO,KAAK;IACtE;yBAE6B,MAAiB;AAId,8BAAoB;AAElC;AAChB,WAAO,AAIN;AAHiE,QAAhE,qCAAqC;AACM,QAA3C,oCAAyC;AACzC,cAAO;;AAGT;AACoC,QAAlC,mBAAgC;AACrB,oBAAQ,UAAU;AAC7B,eAAO,KAAK;AACuB,gCAAoC,4CAAF,eAAhB,AAAM,KAAD;AACxD,eAAO,AAQN;AAPC,gBAAI,AAAgB,AAAG,eAAJ;AAIf,cAHF,WAAmB,sCAA2B,iCAC5C,gCAAa,yFACR,AAAE,eAAP,KAAK,mBAAmB;;AAG5B,kBAAO;;AAE+B,UAA9B,AAAC,eAAX,yBAA8B,eAAlB,AAAgB,eAAD,MAAQ,KAAK;AACxC,eAAO,AAGN;AAFyC,YAAb,AAAE,eAA7B,uCAAsC,eAAL,KAAK;AACtC,kBAAO;;AAE0B,UAAnC,QAAQ,AAAgB,eAAD;;AAEN,QAAnB,mBAAc,IAAI;AAClB,aAAO,AAcN;AAbC,cAA+B,AAAE,eAA7B;AAUA,YATF,WAAmB,sCAA2B,iCAC9C,gCAAa,8CACX,4CACM,AACF,kBAAM,QAAI,+CACV,+BAC8B,AAAE,AAAO,eAApC,8CAAsC,IAAI,aAAa,sBACrB,AAAE,AAA0C,eAAvE,gFAAkD;;AAIpE,gBAAO;;;AAGqB,QAA9B,mBAAa,iBAAiB;AAC9B,aAAO,AAGN;AAFiE,UAAhE,oCAA8B,kCAAkC;AAChE,gBAAO;;;IAGb;YAW4B;AAAgB,YAAA,AAAY,YAAD;IAAQ;;AAsB1C,uCAAkB,MAAM;IAA2B;;;QA/KjC;IAIf;IACR;IAL+C,kBAAE,QAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAuM1C;;AAC7B,WAAqB,4CAAjB,AAAM,KAAD,cACP,AAAM,AAAyC,KAA1C,cAAc;IACvB;;AAGyC;IAAS;iBAEZ;;AACpC,YAAO,AAAY,WAAD;AAClB,UAAI,AAAU,0BAAG,WAAW,GAC1B;AAC6B,wBAAc;AAC7C,WAAI,AAAY,WAAD,uBAAgB,AAAY,WAAD,mBAAgB,AAAY,WAAD,gBAAgB,WAAW,GAC9F,AAAiB;AACI,MAAvB,kBAAY,WAAW;AACvB,UAAI;AACoD,aAAtD,AAAY,WAAD;qBAAC,OAAW,4BAAe;AACa,cAAnD,AAAY,WAAD;sBAAC,OAAW,0BAAY;;IAEvC;WAG0B;;;AACL,MAAb,aAAO,KAAK;AAC+B,WAAjD,AAAU;mBAAA,OAAW,yBAAY;IACnC;;;AAIsD,WAApD,AAAU;mBAAA,OAAW,4BAAe;AACtB,MAAR;IACR;eAE6B;AAC3B,WAAO,AAAY,WAAD;AAClB,YAAO,AAAY,YAAD,WAAW,AAAU,wBAAQ,WAAW;IAC5D;6BAOuC;AACxB,kBAAQ,AAAwD,eAAhC,+CAAuB,MAAM;AAC1E,UAAI,AAAM,KAAD,aACP,MAAO,MAAK;AACd,YAAO;IACT;6BAGuC;AACxB,kBAAQ,AAAwD,eAAhC,+CAAuB,MAAM;AAC1E,UAAI,AAAM,KAAD,aACP,MAAO,MAAK;AACd,YAAO;IACT;8BAGwC;AACzB,mBAAS,AAAsD,eAA9B,8CAAsB,KAAK;AACzE,UAAI,AAAO,MAAD,aACR,MAAO,OAAM;AACf,YAAO;IACT;8BAGwC;AACzB,mBAAS,AAAsD,eAA9B,8CAAsB,KAAK;AACzE,UAAI,AAAO,MAAD,aACR,MAAO,OAAM;AACf,YAAO;IACT;qBAGqC;AACnC,YAAO,gBAAS,WAAW;IAC7B;;AAI8B,MAA5B,YAAO,eAAS;AAC6B,MAA7C,AAAS,kCAAmB,WAAM;IACpC;UAG2B,SAAgB;AACZ,MAA7B,kBAAa,OAAO,EAAE,MAAM;IAC9B;oBAGsC;UAA0B;AAC9D,YAAO,6BAAuB,MAAM,aAAY,QAAQ;IAC1D;;;QAtGmB;QACiB;UACxB,AAAS,QAAD;IACL,kBAAE,QAAQ;AAJzB;AAKkB,IAAhB,YAAO,QAAQ;EACjB","file":"../../../../../../../../../../packages/flutter/src/rendering/custom_layout.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__custom_layout: custom_layout
  };
}));

//# sourceMappingURL=custom_layout.dart.lib.js.map
