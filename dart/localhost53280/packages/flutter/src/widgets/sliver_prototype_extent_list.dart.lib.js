define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/rendering/sliver_multi_box_adaptor.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/basic_types.dart', 'packages/flutter/src/rendering/sliver_fixed_extent_list.dart'], (function load__packages__flutter__src__widgets__sliver_prototype_extent_list_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__basic_types$46dart, packages__flutter__src__rendering__sliver_fixed_extent_list$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const sliver = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__sliver;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const sliver_multi_box_adaptor = packages__flutter__src__rendering__sliver_multi_box_adaptor$46dart.src__rendering__sliver_multi_box_adaptor;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const basic_types = packages__flutter__src__painting__basic_types$46dart.src__painting__basic_types;
  const sliver_fixed_extent_list = packages__flutter__src__rendering__sliver_fixed_extent_list$46dart.src__rendering__sliver_fixed_extent_list;
  var sliver_prototype_extent_list = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverPrototypeExtentList",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_prototype_extent_list.dart"
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_prototype_extent_list.dart",
    "package:flutter/src/widgets/sliver_prototype_extent_list.dart"
  ];
  var prototypeItem$ = dart.privateName(sliver_prototype_extent_list, "SliverPrototypeExtentList.prototypeItem");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  sliver_prototype_extent_list.SliverPrototypeExtentList = class SliverPrototypeExtentList extends sliver.SliverMultiBoxAdaptorWidget {
    get prototypeItem() {
      return this[prototypeItem$];
    }
    set prototypeItem(value) {
      super.prototypeItem = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let prototypeItem = opts && 'prototypeItem' in opts ? opts.prototypeItem : null;
      return new sliver_prototype_extent_list.SliverPrototypeExtentList.new({key: key, delegate: delegate, prototypeItem: prototypeItem, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    createRenderObject(context) {
      let element = sliver_prototype_extent_list._SliverPrototypeExtentListElement.as(context);
      return new sliver_prototype_extent_list._RenderSliverPrototypeExtentList.new({childManager: element});
    }
    createElement() {
      return new sliver_prototype_extent_list._SliverPrototypeExtentListElement.new(this);
    }
  };
  (sliver_prototype_extent_list.SliverPrototypeExtentList.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let prototypeItem = opts && 'prototypeItem' in opts ? opts.prototypeItem : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[prototypeItem$] = prototypeItem;
    if (!(prototypeItem !== null)) dart.assertFailed(null, I[0], 41, 15, "prototypeItem != null");
    sliver_prototype_extent_list.SliverPrototypeExtentList.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_prototype_extent_list.SliverPrototypeExtentList.prototype;
  dart.addTypeTests(sliver_prototype_extent_list.SliverPrototypeExtentList);
  dart.addTypeCaches(sliver_prototype_extent_list.SliverPrototypeExtentList);
  dart.setMethodSignature(sliver_prototype_extent_list.SliverPrototypeExtentList, () => ({
    __proto__: dart.getMethods(sliver_prototype_extent_list.SliverPrototypeExtentList.__proto__),
    createRenderObject: dart.fnType(sliver_multi_box_adaptor.RenderSliverMultiBoxAdaptor, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_prototype_extent_list.SliverPrototypeExtentList, I[1]);
  dart.setFieldSignature(sliver_prototype_extent_list.SliverPrototypeExtentList, () => ({
    __proto__: dart.getFields(sliver_prototype_extent_list.SliverPrototypeExtentList.__proto__),
    prototypeItem: dart.finalFieldType(framework.Widget)
  }));
  var _prototype = dart.privateName(sliver_prototype_extent_list, "_prototype");
  sliver_prototype_extent_list._SliverPrototypeExtentListElement = class _SliverPrototypeExtentListElement extends sliver.SliverMultiBoxAdaptorElement {
    static ['_#new#tearOff'](widget) {
      return new sliver_prototype_extent_list._SliverPrototypeExtentListElement.new(widget);
    }
    get widget() {
      return sliver_prototype_extent_list.SliverPrototypeExtentList.as(super.widget);
    }
    get renderObject() {
      return sliver_prototype_extent_list._RenderSliverPrototypeExtentList.as(super.renderObject);
    }
    insertRenderObjectChild(child, slot) {
      object.RenderObject.as(child);
      core.Object.as(slot);
      if (slot[$_equals](sliver_prototype_extent_list._SliverPrototypeExtentListElement._prototypeSlot)) {
        if (!box.RenderBox.is(child)) dart.assertFailed(null, I[0], 77, 14, "child is RenderBox");
        this.renderObject.child = box.RenderBox.as(child);
      } else {
        super.insertRenderObjectChild(child, core.int.as(slot));
      }
    }
    didAdoptChild(child) {
      if (!child[$_equals](this.renderObject.child)) super.didAdoptChild(child);
    }
    moveRenderObjectChild(child, oldSlot, newSlot) {
      box.RenderBox.as(child);
      core.Object.as(oldSlot);
      core.Object.as(newSlot);
      if (newSlot[$_equals](sliver_prototype_extent_list._SliverPrototypeExtentListElement._prototypeSlot)) {
        if (!false) dart.assertFailed(null, I[0], 93, 14, "false");
      } else
        super.moveRenderObjectChild(child, core.int.as(oldSlot), core.int.as(newSlot));
    }
    removeRenderObjectChild(child, slot) {
      box.RenderBox.as(child);
      core.Object.as(slot);
      if (dart.equals(this.renderObject.child, child))
        this.renderObject.child = null;
      else
        super.removeRenderObjectChild(child, core.int.as(slot));
    }
    visitChildren(visitor) {
      if (this[_prototype] != null) visitor(dart.nullCheck(this[_prototype]));
      super.visitChildren(visitor);
    }
    mount(parent, newSlot) {
      super.mount(parent, newSlot);
      this[_prototype] = this.updateChild(this[_prototype], this.widget.prototypeItem, sliver_prototype_extent_list._SliverPrototypeExtentListElement._prototypeSlot);
    }
    update(newWidget) {
      sliver_prototype_extent_list.SliverPrototypeExtentList.as(newWidget);
      super.update(newWidget);
      if (!this.widget._equals(newWidget)) dart.assertFailed(null, I[0], 122, 12, "widget == newWidget");
      this[_prototype] = this.updateChild(this[_prototype], this.widget.prototypeItem, sliver_prototype_extent_list._SliverPrototypeExtentListElement._prototypeSlot);
    }
  };
  (sliver_prototype_extent_list._SliverPrototypeExtentListElement.new = function(widget) {
    this[_prototype] = null;
    sliver_prototype_extent_list._SliverPrototypeExtentListElement.__proto__.new.call(this, widget);
    ;
  }).prototype = sliver_prototype_extent_list._SliverPrototypeExtentListElement.prototype;
  dart.addTypeTests(sliver_prototype_extent_list._SliverPrototypeExtentListElement);
  dart.addTypeCaches(sliver_prototype_extent_list._SliverPrototypeExtentListElement);
  dart.setGetterSignature(sliver_prototype_extent_list._SliverPrototypeExtentListElement, () => ({
    __proto__: dart.getGetters(sliver_prototype_extent_list._SliverPrototypeExtentListElement.__proto__),
    widget: sliver_prototype_extent_list.SliverPrototypeExtentList,
    renderObject: sliver_prototype_extent_list._RenderSliverPrototypeExtentList
  }));
  dart.setLibraryUri(sliver_prototype_extent_list._SliverPrototypeExtentListElement, I[1]);
  dart.setFieldSignature(sliver_prototype_extent_list._SliverPrototypeExtentListElement, () => ({
    __proto__: dart.getFields(sliver_prototype_extent_list._SliverPrototypeExtentListElement.__proto__),
    [_prototype]: dart.fieldType(dart.nullable(framework.Element))
  }));
  dart.setStaticFieldSignature(sliver_prototype_extent_list._SliverPrototypeExtentListElement, () => ['_prototypeSlot']);
  dart.defineLazy(sliver_prototype_extent_list._SliverPrototypeExtentListElement, {
    /*sliver_prototype_extent_list._SliverPrototypeExtentListElement._prototypeSlot*/get _prototypeSlot() {
      return new core.Object.new();
    }
  }, false);
  var _child = dart.privateName(sliver_prototype_extent_list, "_child");
  sliver_prototype_extent_list._RenderSliverPrototypeExtentList = class _RenderSliverPrototypeExtentList extends sliver_fixed_extent_list.RenderSliverFixedExtentBoxAdaptor {
    static ['_#new#tearOff'](opts) {
      let childManager = opts && 'childManager' in opts ? opts.childManager : null;
      return new sliver_prototype_extent_list._RenderSliverPrototypeExtentList.new({childManager: childManager});
    }
    get child() {
      return this[_child];
    }
    set child(value) {
      if (this[_child] != null) this.dropChild(dart.nullCheck(this[_child]));
      this[_child] = value;
      if (this[_child] != null) this.adoptChild(dart.nullCheck(this[_child]));
      this.markNeedsLayout();
    }
    performLayout() {
      dart.nullCheck(this.child).layout(this.constraints.asBoxConstraints(), {parentUsesSize: true});
      super.performLayout();
    }
    attach(owner) {
      object.PipelineOwner.as(owner);
      super.attach(owner);
      if (this[_child] != null) dart.nullCheck(this[_child]).attach(owner);
    }
    detach() {
      super.detach();
      if (this[_child] != null) dart.nullCheck(this[_child]).detach();
    }
    redepthChildren() {
      if (this[_child] != null) this.redepthChild(dart.nullCheck(this[_child]));
      super.redepthChildren();
    }
    visitChildren(visitor) {
      if (this[_child] != null) visitor(dart.nullCheck(this[_child]));
      super.visitChildren(visitor);
    }
    get itemExtent() {
      if (!(this.child != null && dart.nullCheck(this.child).hasSize)) dart.assertFailed(null, I[0], 179, 12, "child != null && child!.hasSize");
      return this.constraints.axis === basic_types.Axis.vertical ? dart.nullCheck(this.child).size.height : dart.nullCheck(this.child).size.width;
    }
  };
  (sliver_prototype_extent_list._RenderSliverPrototypeExtentList.new = function(opts) {
    let childManager = opts && 'childManager' in opts ? opts.childManager : null;
    this[_child] = null;
    sliver_prototype_extent_list._RenderSliverPrototypeExtentList.__proto__.new.call(this, {childManager: childManager});
    ;
  }).prototype = sliver_prototype_extent_list._RenderSliverPrototypeExtentList.prototype;
  dart.addTypeTests(sliver_prototype_extent_list._RenderSliverPrototypeExtentList);
  dart.addTypeCaches(sliver_prototype_extent_list._RenderSliverPrototypeExtentList);
  dart.setGetterSignature(sliver_prototype_extent_list._RenderSliverPrototypeExtentList, () => ({
    __proto__: dart.getGetters(sliver_prototype_extent_list._RenderSliverPrototypeExtentList.__proto__),
    child: dart.nullable(box.RenderBox),
    itemExtent: core.double
  }));
  dart.setSetterSignature(sliver_prototype_extent_list._RenderSliverPrototypeExtentList, () => ({
    __proto__: dart.getSetters(sliver_prototype_extent_list._RenderSliverPrototypeExtentList.__proto__),
    child: dart.nullable(box.RenderBox)
  }));
  dart.setLibraryUri(sliver_prototype_extent_list._RenderSliverPrototypeExtentList, I[1]);
  dart.setFieldSignature(sliver_prototype_extent_list._RenderSliverPrototypeExtentList, () => ({
    __proto__: dart.getFields(sliver_prototype_extent_list._RenderSliverPrototypeExtentList.__proto__),
    [_child]: dart.fieldType(dart.nullable(box.RenderBox))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/sliver_prototype_extent_list.dart", {
    "package:flutter/src/widgets/sliver_prototype_extent_list.dart": sliver_prototype_extent_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_prototype_extent_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiDe;;;;;;;;;;;;uBAG+C;AAClB,oBAAkB,kEAAR,OAAO;AACzD,YAAO,sFAA+C,OAAO;IAC/D;;AAGgD,oFAAkC;IAAK;;;QArBhF;QACwB;QACf;;;UACJ,AAAc,aAAD;AACpB,0FAAW,GAAG,YAAY,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;AAwBA,YAAa,2DAAP;IAAmC;;AAG5B,YAAmB,kEAAb;IAAgD;4BAMvD,OAAwB;;;AAC1E,UAAI,AAAK,IAAD,WAAI;AACV,aAAa,iBAAN,KAAK;AAC2B,QAAvC,AAAa,0BAAc,iBAAN,KAAK;;AAEuB,QAA3C,8BAAwB,KAAK,EAAO,YAAL,IAAI;;IAE7C;kBAG6B;AAC3B,WAAI,KAAK,WAAI,AAAa,0BAClB,AAAoB,oBAAN,KAAK;IAC7B;0BAGqC,OAAc,SAAgB;;;;AACjE,UAAI,AAAQ,OAAD,WAAI;AACb,aAAO;;AAE2D,QAA5D,4BAAsB,KAAK,EAAU,YAAR,OAAO,GAAiB,YAAR,OAAO;IAC9D;4BAGuC,OAAc;;;AACnD,UAAuB,YAAnB,AAAa,yBAAS,KAAK;AACJ,QAAzB,AAAa,0BAAQ;;AAE4B,QAA3C,8BAAwB,KAAK,EAAO,YAAL,IAAI;IAC7C;kBAGkC;AAChC,UAAI,0BACF,AAAO,AAAa,OAAb,CAAW,eAAV;AACkB,MAAtB,oBAAc,OAAO;IAC7B;UAGoB,QAAgB;AACN,MAAtB,YAAM,MAAM,EAAE,OAAO;AAC+C,MAA1E,mBAAa,iBAAY,kBAAY,AAAO,2BAAe;IAC7D;WAGsC;;AACb,MAAjB,aAAO,SAAS;AACtB,WAAO,AAAO,oBAAG,SAAS;AACgD,MAA1E,mBAAa,iBAAY,kBAAY,AAAO,2BAAe;IAC7D;;iFA7D4D;IAQnD;AAR6D,4FAAM,MAAM;;EAAC;;;;;;;;;;;;;;;MAS/D,6EAAc;YAAG;;;;;;;;;;AA6Db;IAAM;cACT;AACnB,UAAI,sBACF,AAAkB,eAAF,eAAN;AACE,MAAd,eAAS,KAAK;AACd,UAAI,sBACF,AAAmB,gBAAF,eAAN;AACI,MAAjB;IACF;;AAIqE,MAA9D,AAAE,eAAP,mBAAc,AAAY,sDAAoC;AACzC,MAAf;IACR;WAG0B;;AACL,MAAb,aAAO,KAAK;AAClB,UAAI,sBACI,AAAE,AAAa,eAArB,qBAAe,KAAK;IACxB;;AAIgB,MAAR;AACN,UAAI,sBACI,AAAE,AAAQ,eAAhB;IACJ;;AAIE,UAAI,sBACF,AAAqB,kBAAF,eAAN;AACQ,MAAjB;IACR;kBAGuC;AACrC,UAAI,sBACF,AAAO,AAAS,OAAT,CAAO,eAAN;AACkB,MAAtB,oBAAc,OAAO;IAC7B;;AAIE,YAAO,AAAc,sBAAQ,AAAE,eAAP;AACxB,YAAO,AAAY,AAAK,2BAAQ,4BAAgB,AAAE,AAAK,eAAZ,0BAA0B,AAAE,AAAK,eAAZ;IAClE;;;QApD6C;IAGlC;AAFN,0GAAoB,YAAY;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/sliver_prototype_extent_list.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__sliver_prototype_extent_list: sliver_prototype_extent_list
  };
}));

//# sourceMappingURL=sliver_prototype_extent_list.dart.lib.js.map
