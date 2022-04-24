define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/foundation/collections.dart'], (function load__packages__flutter__src__widgets__slotted_render_object_widget_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__foundation__collections$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const collections = packages__flutter__src__foundation__collections$46dart.src__foundation__collections;
  var slotted_render_object_widget = Object.create(dart.library);
  var $_get = dartx._get;
  var $values = dartx.values;
  var $toString = dartx.toString;
  var $forEach = dartx.forEach;
  var $keys = dartx.keys;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $_set = dartx._set;
  var $containsValue = dartx.containsValue;
  var $containsKey = dartx.containsKey;
  var $toList = dartx.toList;
  var $runtimeType = dartx.runtimeType;
  var $length = dartx.length;
  var $toSet = dartx.toSet;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:flutter/src/widgets/slotted_render_object_widget.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/slotted_render_object_widget.dart"
  ];
  const _is_SlottedMultiChildRenderObjectWidgetMixin_default = Symbol('_is_SlottedMultiChildRenderObjectWidgetMixin_default');
  slotted_render_object_widget.SlottedMultiChildRenderObjectWidgetMixin$ = dart.generic(S => {
    var __t$SlottedRenderObjectElementOfS = () => (__t$SlottedRenderObjectElementOfS = dart.constFn(slotted_render_object_widget.SlottedRenderObjectElement$(S)))();
    class SlottedMultiChildRenderObjectWidgetMixin extends framework.RenderObjectWidget {}
    SlottedMultiChildRenderObjectWidgetMixin[dart.mixinOn] = RenderObjectWidget => class SlottedMultiChildRenderObjectWidgetMixin extends RenderObjectWidget {
      createElement() {
        return new (__t$SlottedRenderObjectElementOfS()).new(this);
      }
    };
    dart.addTypeTests(SlottedMultiChildRenderObjectWidgetMixin);
    SlottedMultiChildRenderObjectWidgetMixin.prototype[_is_SlottedMultiChildRenderObjectWidgetMixin_default] = true;
    dart.addTypeCaches(SlottedMultiChildRenderObjectWidgetMixin);
    SlottedMultiChildRenderObjectWidgetMixin[dart.implements] = () => [framework.RenderObjectWidget];
    dart.setMethodSignature(SlottedMultiChildRenderObjectWidgetMixin, () => ({
      __proto__: dart.getMethods(SlottedMultiChildRenderObjectWidgetMixin.__proto__),
      createElement: dart.fnType(slotted_render_object_widget.SlottedRenderObjectElement$(S), [])
    }));
    dart.setLibraryUri(SlottedMultiChildRenderObjectWidgetMixin, I[0]);
    return SlottedMultiChildRenderObjectWidgetMixin;
  });
  slotted_render_object_widget.SlottedMultiChildRenderObjectWidgetMixin = slotted_render_object_widget.SlottedMultiChildRenderObjectWidgetMixin$();
  dart.addTypeTests(slotted_render_object_widget.SlottedMultiChildRenderObjectWidgetMixin, _is_SlottedMultiChildRenderObjectWidgetMixin_default);
  var _slotToChild = dart.privateName(slotted_render_object_widget, "_slotToChild");
  var _addDiagnostics = dart.privateName(slotted_render_object_widget, "_addDiagnostics");
  var _setChild = dart.privateName(slotted_render_object_widget, "_setChild");
  const _is_SlottedContainerRenderObjectMixin_default = Symbol('_is_SlottedContainerRenderObjectMixin_default');
  slotted_render_object_widget.SlottedContainerRenderObjectMixin$ = dart.generic(S => {
    var __t$LinkedMapOfS$RenderBox = () => (__t$LinkedMapOfS$RenderBox = dart.constFn(_js_helper.LinkedMap$(S, box.RenderBox)))();
    var __t$LinkedHashMapOfRenderBox$S = () => (__t$LinkedHashMapOfRenderBox$S = dart.constFn(collection.LinkedHashMap$(box.RenderBox, S)))();
    class SlottedContainerRenderObjectMixin extends box.RenderBox {}
    SlottedContainerRenderObjectMixin[dart.mixinOn] = RenderBox => class SlottedContainerRenderObjectMixin extends RenderBox {
      childForSlot(slot) {
        S.as(slot);
        return this[_slotToChild][$_get](slot);
      }
      get children() {
        return this[_slotToChild][$values];
      }
      debugNameForSlot(slot) {
        S.as(slot);
        if (core.Enum.is(slot)) {
          return core['EnumName|get#name'](slot);
        }
        return dart.toString(slot);
      }
      attach(owner) {
        object.PipelineOwner.as(owner);
        super.attach(owner);
        for (let child of this.children) {
          child.attach(owner);
        }
      }
      detach() {
        super.detach();
        for (let child of this.children) {
          child.detach();
        }
      }
      redepthChildren() {
        this.children[$forEach](dart.bind(this, 'redepthChild'));
      }
      visitChildren(visitor) {
        this.children[$forEach](visitor);
      }
      debugDescribeChildren() {
        let value = T.JSArrayOfDiagnosticsNode().of([]);
        let childToSlot = __t$LinkedHashMapOfRenderBox$S().fromIterables(this[_slotToChild][$values], this[_slotToChild][$keys]);
        for (let child of this.children) {
          this[_addDiagnostics](child, value, this.debugNameForSlot(S.as(childToSlot[$_get](child))));
        }
        return value;
      }
      [_addDiagnostics](child, value, name) {
        value[$add](child.toDiagnosticsNode({name: name}));
      }
      [_setChild](child, slot) {
        S.as(slot);
        let oldChild = this[_slotToChild][$_get](slot);
        if (oldChild != null) {
          this.dropChild(oldChild);
          this[_slotToChild][$remove](slot);
        }
        if (child != null) {
          this[_slotToChild][$_set](slot, child);
          this.adoptChild(child);
        }
      }
    };
    (SlottedContainerRenderObjectMixin[dart.mixinNew] = function() {
      this[_slotToChild] = new (__t$LinkedMapOfS$RenderBox()).new();
    }).prototype = SlottedContainerRenderObjectMixin.prototype;
    dart.addTypeTests(SlottedContainerRenderObjectMixin);
    SlottedContainerRenderObjectMixin.prototype[_is_SlottedContainerRenderObjectMixin_default] = true;
    dart.addTypeCaches(SlottedContainerRenderObjectMixin);
    SlottedContainerRenderObjectMixin[dart.implements] = () => [box.RenderBox];
    dart.setMethodSignature(SlottedContainerRenderObjectMixin, () => ({
      __proto__: dart.getMethods(SlottedContainerRenderObjectMixin.__proto__),
      childForSlot: dart.fnType(dart.nullable(box.RenderBox), [dart.nullable(core.Object)]),
      debugNameForSlot: dart.fnType(core.String, [dart.nullable(core.Object)]),
      [_addDiagnostics]: dart.fnType(dart.void, [box.RenderBox, core.List$(diagnostics.DiagnosticsNode), core.String]),
      [_setChild]: dart.fnType(dart.void, [dart.nullable(box.RenderBox), dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(SlottedContainerRenderObjectMixin, () => ({
      __proto__: dart.getGetters(SlottedContainerRenderObjectMixin.__proto__),
      children: core.Iterable$(box.RenderBox)
    }));
    dart.setLibraryUri(SlottedContainerRenderObjectMixin, I[0]);
    dart.setFieldSignature(SlottedContainerRenderObjectMixin, () => ({
      __proto__: dart.getFields(SlottedContainerRenderObjectMixin.__proto__),
      [_slotToChild]: dart.finalFieldType(core.Map$(S, box.RenderBox))
    }));
    return SlottedContainerRenderObjectMixin;
  });
  slotted_render_object_widget.SlottedContainerRenderObjectMixin = slotted_render_object_widget.SlottedContainerRenderObjectMixin$();
  dart.addTypeTests(slotted_render_object_widget.SlottedContainerRenderObjectMixin, _is_SlottedContainerRenderObjectMixin_default);
  var _debugPreviousSlots = dart.privateName(slotted_render_object_widget, "_debugPreviousSlots");
  var _updateChildren = dart.privateName(slotted_render_object_widget, "_updateChildren");
  var _updateChild = dart.privateName(slotted_render_object_widget, "_updateChild");
  const _is_SlottedRenderObjectElement_default = Symbol('_is_SlottedRenderObjectElement_default');
  slotted_render_object_widget.SlottedRenderObjectElement$ = dart.generic(S => {
    var __t$LinkedMapOfS$Element = () => (__t$LinkedMapOfS$Element = dart.constFn(_js_helper.LinkedMap$(S, framework.Element)))();
    var __t$SlottedMultiChildRenderObjectWidgetMixinOfS = () => (__t$SlottedMultiChildRenderObjectWidgetMixinOfS = dart.constFn(slotted_render_object_widget.SlottedMultiChildRenderObjectWidgetMixin$(S)))();
    var __t$SlottedContainerRenderObjectMixinOfS = () => (__t$SlottedContainerRenderObjectMixinOfS = dart.constFn(slotted_render_object_widget.SlottedContainerRenderObjectMixin$(S)))();
    class SlottedRenderObjectElement extends framework.RenderObjectElement {
      static ['_#new#tearOff'](S, widget) {
        return new (slotted_render_object_widget.SlottedRenderObjectElement$(S)).new(widget);
      }
      get widget() {
        return __t$SlottedMultiChildRenderObjectWidgetMixinOfS().as(super.widget);
      }
      get renderObject() {
        return __t$SlottedContainerRenderObjectMixinOfS().as(super.renderObject);
      }
      visitChildren(visitor) {
        this[_slotToChild][$values][$forEach](visitor);
      }
      forgetChild(child) {
        if (!this[_slotToChild][$containsValue](child)) dart.assertFailed(null, I[1], 207, 12, "_slotToChild.containsValue(child)");
        if (!S.is(child.slot)) dart.assertFailed(null, I[1], 208, 12, "child.slot is S");
        if (!this[_slotToChild][$containsKey](child.slot)) dart.assertFailed(null, I[1], 209, 12, "_slotToChild.containsKey(child.slot)");
        this[_slotToChild][$remove](child.slot);
        super.forgetChild(child);
      }
      mount(parent, newSlot) {
        super.mount(parent, newSlot);
        this[_updateChildren]();
      }
      update(newWidget) {
        __t$SlottedMultiChildRenderObjectWidgetMixinOfS().as(newWidget);
        super.update(newWidget);
        if (!this.widget._equals(newWidget)) dart.assertFailed(null, I[1], 223, 12, "widget == newWidget");
        this[_updateChildren]();
      }
      [_updateChildren]() {
        if (!dart.fn(() => {
          this[_debugPreviousSlots] == null ? this[_debugPreviousSlots] = this.widget.slots[$toList]() : null;
          return collections.listEquals(S, this[_debugPreviousSlots], this.widget.slots[$toList]());
        }, T.VoidTobool())()) dart.assertFailed(dart.str(this.widget[$runtimeType]) + ".slots must not change.", I[1], 230, 12, "() {\n      _debugPreviousSlots ??= widget.slots.toList();\n      return listEquals(_debugPreviousSlots, widget.slots.toList());\n    }()");
        if (!(this.widget.slots[$toSet]()[$length] === this.widget.slots[$length])) dart.assertFailed("slots must be unique", I[1], 234, 12, "widget.slots.toSet().length == widget.slots.length");
        for (let slot of this.widget.slots) {
          this[_updateChild](this.widget.childForSlot(slot), slot);
        }
      }
      [_updateChild](widget, slot) {
        let oldChild = this[_slotToChild][$_get](slot);
        if (!(oldChild == null || dart.equals(oldChild.slot, slot))) dart.assertFailed(null, I[1], 243, 12, "oldChild == null || oldChild.slot == slot");
        let newChild = this.updateChild(oldChild, widget, slot);
        if (oldChild != null) {
          this[_slotToChild][$remove](slot);
        }
        if (newChild != null) {
          this[_slotToChild][$_set](slot, newChild);
        }
      }
      insertRenderObjectChild(child, slot) {
        box.RenderBox.as(child);
        S.as(slot);
        this.renderObject[_setChild](child, slot);
        if (!dart.equals(this.renderObject[_slotToChild][$_get](slot), child)) dart.assertFailed(null, I[1], 256, 12, "renderObject._slotToChild[slot] == child");
      }
      removeRenderObjectChild(child, slot) {
        box.RenderBox.as(child);
        S.as(slot);
        if (!dart.equals(this.renderObject[_slotToChild][$_get](slot), child)) dart.assertFailed(null, I[1], 261, 12, "renderObject._slotToChild[slot] == child");
        this.renderObject[_setChild](null, slot);
        if (!(this.renderObject[_slotToChild][$_get](slot) == null)) dart.assertFailed(null, I[1], 263, 12, "renderObject._slotToChild[slot] == null");
      }
      moveRenderObjectChild(child, oldSlot, newSlot) {
        box.RenderBox.as(child);
        if (!false) dart.assertFailed("not reachable", I[1], 269, 12, "false");
      }
    }
    (SlottedRenderObjectElement.new = function(widget) {
      this[_slotToChild] = new (__t$LinkedMapOfS$Element()).new();
      this[_debugPreviousSlots] = null;
      SlottedRenderObjectElement.__proto__.new.call(this, widget);
      ;
    }).prototype = SlottedRenderObjectElement.prototype;
    dart.addTypeTests(SlottedRenderObjectElement);
    SlottedRenderObjectElement.prototype[_is_SlottedRenderObjectElement_default] = true;
    dart.addTypeCaches(SlottedRenderObjectElement);
    dart.setMethodSignature(SlottedRenderObjectElement, () => ({
      __proto__: dart.getMethods(SlottedRenderObjectElement.__proto__),
      [_updateChildren]: dart.fnType(dart.void, []),
      [_updateChild]: dart.fnType(dart.void, [dart.nullable(framework.Widget), S])
    }));
    dart.setGetterSignature(SlottedRenderObjectElement, () => ({
      __proto__: dart.getGetters(SlottedRenderObjectElement.__proto__),
      widget: slotted_render_object_widget.SlottedMultiChildRenderObjectWidgetMixin$(S),
      renderObject: slotted_render_object_widget.SlottedContainerRenderObjectMixin$(S)
    }));
    dart.setLibraryUri(SlottedRenderObjectElement, I[0]);
    dart.setFieldSignature(SlottedRenderObjectElement, () => ({
      __proto__: dart.getFields(SlottedRenderObjectElement.__proto__),
      [_slotToChild]: dart.finalFieldType(core.Map$(S, framework.Element)),
      [_debugPreviousSlots]: dart.fieldType(dart.nullable(core.List$(S)))
    }));
    return SlottedRenderObjectElement;
  });
  slotted_render_object_widget.SlottedRenderObjectElement = slotted_render_object_widget.SlottedRenderObjectElement$();
  dart.addTypeTests(slotted_render_object_widget.SlottedRenderObjectElement, _is_SlottedRenderObjectElement_default);
  dart.trackLibraries("packages/flutter/src/widgets/slotted_render_object_widget.dart", {
    "package:flutter/src/widgets/slotted_render_object_widget.dart": slotted_render_object_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["slotted_render_object_widget.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/slotted_render_object_widget.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__slotted_render_object_widget: slotted_render_object_widget
  };
}));

//# sourceMappingURL=slotted_render_object_widget.dart.lib.js.map
