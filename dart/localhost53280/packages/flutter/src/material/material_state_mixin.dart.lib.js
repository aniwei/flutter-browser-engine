define(['dart_sdk', 'packages/flutter/src/material/material_state.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/widgets/widget_inspector.dart'], (function load__packages__flutter__src__material__material_state_mixin_dart(dart_sdk, packages__flutter__src__material__material_state$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__widgets__widget_inspector$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const material_state = packages__flutter__src__material__material_state$46dart.src__material__material_state;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  var material_state_mixin = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    LinkedHashSetOfMaterialState: () => (T$.LinkedHashSetOfMaterialState = dart.constFn(collection.LinkedHashSet$(material_state.MaterialState)))(),
    boolTovoid: () => (T$.boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    SetOfMaterialState: () => (T$.SetOfMaterialState = dart.constFn(core.Set$(material_state.MaterialState)))(),
    DiagnosticsPropertyOfSetOfMaterialState: () => (T$.DiagnosticsPropertyOfSetOfMaterialState = dart.constFn(diagnostics.DiagnosticsProperty$(T$.SetOfMaterialState())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/material/material_state_mixin.dart"];
  var materialStates = dart.privateName(material_state_mixin, "MaterialStateMixin.materialStates");
  const _is_MaterialStateMixin_default = Symbol('_is_MaterialStateMixin_default');
  material_state_mixin.MaterialStateMixin$ = dart.generic(T => {
    class MaterialStateMixin extends framework.State$(T) {}
    MaterialStateMixin[dart.mixinOn] = State => class MaterialStateMixin extends State {
      get materialStates() {
        return this[materialStates];
      }
      set materialStates(value) {
        this[materialStates] = value;
      }
      updateMaterialState(key, opts) {
        let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
        return dart.fn(value => {
          let t0;
          if (this.materialStates.contains(key) === value) return;
          this.setMaterialState(key, value);
          t0 = onChanged;
          t0 == null ? null : t0(value);
        }, T$.boolTovoid());
      }
      setMaterialState(_state, isSet) {
        return isSet ? this.addMaterialState(_state) : this.removeMaterialState(_state);
      }
      addMaterialState(_state) {
        if (this.materialStates.add(_state)) this.setState(dart.fn(() => {
        }, T$.VoidTovoid()));
      }
      removeMaterialState(_state) {
        if (this.materialStates.remove(_state)) this.setState(dart.fn(() => {
        }, T$.VoidTovoid()));
      }
      get isDisabled() {
        return this.materialStates.contains(material_state.MaterialState.disabled);
      }
      get isDragged() {
        return this.materialStates.contains(material_state.MaterialState.dragged);
      }
      get isErrored() {
        return this.materialStates.contains(material_state.MaterialState.error);
      }
      get isFocused() {
        return this.materialStates.contains(material_state.MaterialState.focused);
      }
      get isHovered() {
        return this.materialStates.contains(material_state.MaterialState.hovered);
      }
      get isPressed() {
        return this.materialStates.contains(material_state.MaterialState.pressed);
      }
      get isScrolledUnder() {
        return this.materialStates.contains(material_state.MaterialState.scrolledUnder);
      }
      get isSelected() {
        return this.materialStates.contains(material_state.MaterialState.selected);
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (T$.DiagnosticsPropertyOfSetOfMaterialState()).new("materialStates", this.materialStates, {defaultValue: T$.LinkedHashSetOfMaterialState().new()}));
      }
    };
    (MaterialStateMixin[dart.mixinNew] = function() {
      this[materialStates] = T$.LinkedHashSetOfMaterialState().new();
    }).prototype = MaterialStateMixin.prototype;
    dart.addTypeTests(MaterialStateMixin);
    MaterialStateMixin.prototype[_is_MaterialStateMixin_default] = true;
    dart.addTypeCaches(MaterialStateMixin);
    MaterialStateMixin[dart.implements] = () => [framework.State$(T)];
    dart.setMethodSignature(MaterialStateMixin, () => ({
      __proto__: dart.getMethods(MaterialStateMixin.__proto__),
      updateMaterialState: dart.fnType(dart.fnType(dart.void, [core.bool]), [material_state.MaterialState], {onChanged: dart.nullable(dart.fnType(dart.void, [core.bool]))}, {}),
      setMaterialState: dart.fnType(dart.void, [material_state.MaterialState, core.bool]),
      addMaterialState: dart.fnType(dart.void, [material_state.MaterialState]),
      removeMaterialState: dart.fnType(dart.void, [material_state.MaterialState])
    }));
    dart.setGetterSignature(MaterialStateMixin, () => ({
      __proto__: dart.getGetters(MaterialStateMixin.__proto__),
      isDisabled: core.bool,
      isDragged: core.bool,
      isErrored: core.bool,
      isFocused: core.bool,
      isHovered: core.bool,
      isPressed: core.bool,
      isScrolledUnder: core.bool,
      isSelected: core.bool
    }));
    dart.setLibraryUri(MaterialStateMixin, I[0]);
    dart.setFieldSignature(MaterialStateMixin, () => ({
      __proto__: dart.getFields(MaterialStateMixin.__proto__),
      materialStates: dart.fieldType(core.Set$(material_state.MaterialState))
    }));
    return MaterialStateMixin;
  });
  material_state_mixin.MaterialStateMixin = material_state_mixin.MaterialStateMixin$();
  dart.addTypeTests(material_state_mixin.MaterialStateMixin, _is_MaterialStateMixin_default);
  dart.trackLibraries("packages/flutter/src/material/material_state_mixin.dart", {
    "package:flutter/src/material/material_state_mixin.dart": material_state_mixin
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_state_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;MA8DqB;;;;;;0BA8CkC;YAA0B;AAC7E,cAAO,SAAM;;AACX,cAAI,AAAe,AAAc,6BAAL,GAAG,MAAK,KAAK,EACvC;AAC0B,UAA5B,sBAAiB,GAAG,EAAE,KAAK;AACL,eAAtB,SAAS;uBAAT,OAAW,GAAK,KAAK;;MAEzB;uBAIoC,QAAa;AAC/C,cAAO,MAAK,GAAG,sBAAiB,MAAM,IAAI,yBAAoB,MAAM,CAAxD;MACd;uBAIoC;AAClC,YAAI,AAAe,wBAAI,MAAM,GAC3B,AAAc,cAAL;;MACb;0BAIuC;AACrC,YAAI,AAAe,2BAAO,MAAM,GAC9B,AAAc,cAAL;;MACb;;AAGuB,cAAA,AAAe,8BAAuB;MAAS;;AAGhD,cAAA,AAAe,8BAAuB;MAAQ;;AAG9C,cAAA,AAAe,8BAAuB;MAAM;;AAG5C,cAAA,AAAe,8BAAuB;MAAQ;;AAG9C,cAAA,AAAe,8BAAuB;MAAQ;;AAG9C,cAAA,AAAe,8BAAuB;MAAQ;;AAGxC,cAAA,AAAe,8BAAuB;MAAc;;AAGzD,cAAA,AAAe,8BAAuB;MAAS;0BAGjB;AACd,QAA/B,0BAAoB,UAAU;AACsF,QAA1H,AAAW,UAAD,KAAK,uDAAwC,kBAAkB,oCAA6C;MACxH;;;MAvGmB,uBAAgC","file":"../../../../../../../../../../packages/flutter/src/material/material_state_mixin.dart.lib.js"}');
  // Exports:
  return {
    src__material__material_state_mixin: material_state_mixin
  };
}));

//# sourceMappingURL=material_state_mixin.dart.lib.js.map
