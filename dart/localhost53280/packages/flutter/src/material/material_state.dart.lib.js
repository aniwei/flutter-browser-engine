define(['dart_sdk', 'packages/flutter/src/services/mouse_cursor.dart', 'packages/flutter/src/painting/borders.dart', 'packages/flutter/src/painting/placeholder_span.dart', 'packages/flutter/src/material/input_border.dart'], (function load__packages__flutter__src__material__material_state_dart(dart_sdk, packages__flutter__src__services__mouse_cursor$46dart, packages__flutter__src__painting__borders$46dart, packages__flutter__src__painting__placeholder_span$46dart, packages__flutter__src__material__input_border$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mouse_cursor = packages__flutter__src__services__mouse_cursor$46dart.src__services__mouse_cursor;
  const borders = packages__flutter__src__painting__borders$46dart.src__painting__borders;
  const text_style = packages__flutter__src__painting__placeholder_span$46dart.src__painting__text_style;
  const input_border = packages__flutter__src__material__input_border$46dart.src__material__input_border;
  var material_state = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    LinkedHashSetOfMaterialState: () => (T.LinkedHashSetOfMaterialState = dart.constFn(collection.LinkedHashSet$(material_state.MaterialState)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "hovered",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "focused",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "pressed",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "dragged",
        [_Enum_index]: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "selected",
        [_Enum_index]: 4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "scrolledUnder",
        [_Enum_index]: 5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "disabled",
        [_Enum_index]: 6
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "error",
        [_Enum_index]: 7
      });
    },
    get C8() {
      return C[8] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7], material_state.MaterialState);
    },
    get C9() {
      return C[9] = dart.constSet(material_state.MaterialState, []);
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [SystemMouseCursor_kind]: "basic"
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [SystemMouseCursor_kind]: "click"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: material_state._EnabledAndDisabledMouseCursor.prototype,
        [_EnabledAndDisabledMouseCursor_name]: "clickable",
        [_EnabledAndDisabledMouseCursor_disabledCursor]: C[11] || CT.C11,
        [_EnabledAndDisabledMouseCursor_enabledCursor]: C[12] || CT.C12
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: mouse_cursor.SystemMouseCursor.prototype,
        [SystemMouseCursor_kind]: "text"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: material_state._EnabledAndDisabledMouseCursor.prototype,
        [_EnabledAndDisabledMouseCursor_name]: "textable",
        [_EnabledAndDisabledMouseCursor_disabledCursor]: C[11] || CT.C11,
        [_EnabledAndDisabledMouseCursor_enabledCursor]: C[14] || CT.C14
      });
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = ["package:flutter/src/material/material_state.dart"];
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  material_state.MaterialState = class MaterialState extends core._Enum {
    toString() {
      return "MaterialState." + this[_name];
    }
  };
  (material_state.MaterialState.new = function(index, name) {
    material_state.MaterialState.__proto__.new.call(this, index, name);
    ;
  }).prototype = material_state.MaterialState.prototype;
  dart.addTypeTests(material_state.MaterialState);
  dart.addTypeCaches(material_state.MaterialState);
  dart.setLibraryUri(material_state.MaterialState, I[0]);
  dart.setStaticFieldSignature(material_state.MaterialState, () => ['values', 'hovered', 'focused', 'pressed', 'dragged', 'selected', 'scrolledUnder', 'disabled', 'error']);
  dart.defineExtensionMethods(material_state.MaterialState, ['toString']);
  material_state.MaterialState.hovered = C[0] || CT.C0;
  material_state.MaterialState.focused = C[1] || CT.C1;
  material_state.MaterialState.pressed = C[2] || CT.C2;
  material_state.MaterialState.dragged = C[3] || CT.C3;
  material_state.MaterialState.selected = C[4] || CT.C4;
  material_state.MaterialState.scrolledUnder = C[5] || CT.C5;
  material_state.MaterialState.disabled = C[6] || CT.C6;
  material_state.MaterialState.error = C[7] || CT.C7;
  material_state.MaterialState.values = C[8] || CT.C8;
  material_state.MaterialStateColor = class MaterialStateColor extends ui.Color {
    static resolveWith(callback) {
      return new material_state._MaterialStateColor.new(callback);
    }
  };
  (material_state.MaterialStateColor.new = function(defaultValue) {
    material_state.MaterialStateColor.__proto__.new.call(this, defaultValue);
    ;
  }).prototype = material_state.MaterialStateColor.prototype;
  dart.addTypeTests(material_state.MaterialStateColor);
  dart.addTypeCaches(material_state.MaterialStateColor);
  material_state.MaterialStateColor[dart.implements] = () => [material_state.MaterialStateProperty$(ui.Color)];
  dart.setStaticMethodSignature(material_state.MaterialStateColor, () => ['resolveWith']);
  dart.setLibraryUri(material_state.MaterialStateColor, I[0]);
  var _resolve$ = dart.privateName(material_state, "_resolve");
  material_state._MaterialStateColor = class _MaterialStateColor extends material_state.MaterialStateColor {
    static ['_#new#tearOff'](_resolve) {
      return new material_state._MaterialStateColor.new(_resolve);
    }
    resolve(states) {
      let t0;
      t0 = states;
      return this[_resolve$](t0);
    }
  };
  (material_state._MaterialStateColor.new = function(_resolve) {
    this[_resolve$] = _resolve;
    material_state._MaterialStateColor.__proto__.new.call(this, _resolve(material_state._MaterialStateColor._defaultStates).value);
    ;
  }).prototype = material_state._MaterialStateColor.prototype;
  dart.addTypeTests(material_state._MaterialStateColor);
  dart.addTypeCaches(material_state._MaterialStateColor);
  dart.setMethodSignature(material_state._MaterialStateColor, () => ({
    __proto__: dart.getMethods(material_state._MaterialStateColor.__proto__),
    resolve: dart.fnType(ui.Color, [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(material_state._MaterialStateColor, I[0]);
  dart.setFieldSignature(material_state._MaterialStateColor, () => ({
    __proto__: dart.getFields(material_state._MaterialStateColor.__proto__),
    [_resolve$]: dart.finalFieldType(dart.fnType(ui.Color, [core.Set$(material_state.MaterialState)]))
  }));
  dart.setStaticFieldSignature(material_state._MaterialStateColor, () => ['_defaultStates']);
  dart.defineLazy(material_state._MaterialStateColor, {
    /*material_state._MaterialStateColor._defaultStates*/get _defaultStates() {
      return C[9] || CT.C9;
    }
  }, false);
  var _EnabledAndDisabledMouseCursor_name = dart.privateName(material_state, "_EnabledAndDisabledMouseCursor.name");
  var SystemMouseCursor_kind = dart.privateName(mouse_cursor, "SystemMouseCursor.kind");
  var _EnabledAndDisabledMouseCursor_disabledCursor = dart.privateName(material_state, "_EnabledAndDisabledMouseCursor.disabledCursor");
  var _EnabledAndDisabledMouseCursor_enabledCursor = dart.privateName(material_state, "_EnabledAndDisabledMouseCursor.enabledCursor");
  material_state.MaterialStateMouseCursor = class MaterialStateMouseCursor extends mouse_cursor.MouseCursor {
    createSession(device) {
      return this.resolve(T.LinkedHashSetOfMaterialState().new()).createSession(device);
    }
  };
  (material_state.MaterialStateMouseCursor.new = function() {
    material_state.MaterialStateMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateMouseCursor.prototype;
  dart.addTypeTests(material_state.MaterialStateMouseCursor);
  dart.addTypeCaches(material_state.MaterialStateMouseCursor);
  material_state.MaterialStateMouseCursor[dart.implements] = () => [material_state.MaterialStateProperty$(mouse_cursor.MouseCursor)];
  dart.setMethodSignature(material_state.MaterialStateMouseCursor, () => ({
    __proto__: dart.getMethods(material_state.MaterialStateMouseCursor.__proto__),
    createSession: dart.fnType(mouse_cursor.MouseCursorSession, [core.int])
  }));
  dart.setLibraryUri(material_state.MaterialStateMouseCursor, I[0]);
  dart.setStaticFieldSignature(material_state.MaterialStateMouseCursor, () => ['clickable', 'textable']);
  dart.defineLazy(material_state.MaterialStateMouseCursor, {
    /*material_state.MaterialStateMouseCursor.clickable*/get clickable() {
      return C[10] || CT.C10;
    },
    /*material_state.MaterialStateMouseCursor.textable*/get textable() {
      return C[13] || CT.C13;
    }
  }, false);
  const enabledCursor$ = _EnabledAndDisabledMouseCursor_enabledCursor;
  const disabledCursor$ = _EnabledAndDisabledMouseCursor_disabledCursor;
  const name$ = _EnabledAndDisabledMouseCursor_name;
  material_state._EnabledAndDisabledMouseCursor = class _EnabledAndDisabledMouseCursor extends material_state.MaterialStateMouseCursor {
    get enabledCursor() {
      return this[enabledCursor$];
    }
    set enabledCursor(value) {
      super.enabledCursor = value;
    }
    get disabledCursor() {
      return this[disabledCursor$];
    }
    set disabledCursor(value) {
      super.disabledCursor = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    static ['_#new#tearOff'](opts) {
      let enabledCursor = opts && 'enabledCursor' in opts ? opts.enabledCursor : null;
      let disabledCursor = opts && 'disabledCursor' in opts ? opts.disabledCursor : null;
      let name = opts && 'name' in opts ? opts.name : null;
      return new material_state._EnabledAndDisabledMouseCursor.new({enabledCursor: enabledCursor, disabledCursor: disabledCursor, name: name});
    }
    resolve(states) {
      if (states.contains(material_state.MaterialState.disabled)) {
        return this.disabledCursor;
      }
      return this.enabledCursor;
    }
    get debugDescription() {
      return "MaterialStateMouseCursor(" + this.name + ")";
    }
  };
  (material_state._EnabledAndDisabledMouseCursor.new = function(opts) {
    let enabledCursor = opts && 'enabledCursor' in opts ? opts.enabledCursor : null;
    let disabledCursor = opts && 'disabledCursor' in opts ? opts.disabledCursor : null;
    let name = opts && 'name' in opts ? opts.name : null;
    this[enabledCursor$] = enabledCursor;
    this[disabledCursor$] = disabledCursor;
    this[name$] = name;
    material_state._EnabledAndDisabledMouseCursor.__proto__.new.call(this);
    ;
  }).prototype = material_state._EnabledAndDisabledMouseCursor.prototype;
  dart.addTypeTests(material_state._EnabledAndDisabledMouseCursor);
  dart.addTypeCaches(material_state._EnabledAndDisabledMouseCursor);
  dart.setMethodSignature(material_state._EnabledAndDisabledMouseCursor, () => ({
    __proto__: dart.getMethods(material_state._EnabledAndDisabledMouseCursor.__proto__),
    resolve: dart.fnType(mouse_cursor.MouseCursor, [core.Set$(material_state.MaterialState)])
  }));
  dart.setGetterSignature(material_state._EnabledAndDisabledMouseCursor, () => ({
    __proto__: dart.getGetters(material_state._EnabledAndDisabledMouseCursor.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(material_state._EnabledAndDisabledMouseCursor, I[0]);
  dart.setFieldSignature(material_state._EnabledAndDisabledMouseCursor, () => ({
    __proto__: dart.getFields(material_state._EnabledAndDisabledMouseCursor.__proto__),
    enabledCursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    disabledCursor: dart.finalFieldType(mouse_cursor.MouseCursor),
    name: dart.finalFieldType(core.String)
  }));
  material_state.MaterialStateBorderSide = class MaterialStateBorderSide extends borders.BorderSide {
    static resolveWith(callback) {
      return new material_state._MaterialStateBorderSide.new(callback);
    }
  };
  (material_state.MaterialStateBorderSide.new = function() {
    material_state.MaterialStateBorderSide.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateBorderSide.prototype;
  dart.addTypeTests(material_state.MaterialStateBorderSide);
  dart.addTypeCaches(material_state.MaterialStateBorderSide);
  material_state.MaterialStateBorderSide[dart.implements] = () => [material_state.MaterialStateProperty$(dart.nullable(borders.BorderSide))];
  dart.setStaticMethodSignature(material_state.MaterialStateBorderSide, () => ['resolveWith']);
  dart.setLibraryUri(material_state.MaterialStateBorderSide, I[0]);
  var _resolve$0 = dart.privateName(material_state, "_MaterialStateBorderSide._resolve");
  material_state._MaterialStateBorderSide = class _MaterialStateBorderSide extends material_state.MaterialStateBorderSide {
    get [_resolve$]() {
      return this[_resolve$0];
    }
    set [_resolve$](value) {
      super[_resolve$] = value;
    }
    static ['_#new#tearOff'](_resolve) {
      return new material_state._MaterialStateBorderSide.new(_resolve);
    }
    resolve(states) {
      let t0;
      t0 = states;
      return this[_resolve$](t0);
    }
  };
  (material_state._MaterialStateBorderSide.new = function(_resolve) {
    this[_resolve$0] = _resolve;
    material_state._MaterialStateBorderSide.__proto__.new.call(this);
    ;
  }).prototype = material_state._MaterialStateBorderSide.prototype;
  dart.addTypeTests(material_state._MaterialStateBorderSide);
  dart.addTypeCaches(material_state._MaterialStateBorderSide);
  dart.setMethodSignature(material_state._MaterialStateBorderSide, () => ({
    __proto__: dart.getMethods(material_state._MaterialStateBorderSide.__proto__),
    resolve: dart.fnType(dart.nullable(borders.BorderSide), [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(material_state._MaterialStateBorderSide, I[0]);
  dart.setFieldSignature(material_state._MaterialStateBorderSide, () => ({
    __proto__: dart.getFields(material_state._MaterialStateBorderSide.__proto__),
    [_resolve$]: dart.finalFieldType(dart.fnType(dart.nullable(borders.BorderSide), [core.Set$(material_state.MaterialState)]))
  }));
  material_state.MaterialStateOutlinedBorder = class MaterialStateOutlinedBorder extends borders.OutlinedBorder {};
  (material_state.MaterialStateOutlinedBorder.new = function() {
    material_state.MaterialStateOutlinedBorder.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateOutlinedBorder.prototype;
  dart.addTypeTests(material_state.MaterialStateOutlinedBorder);
  dart.addTypeCaches(material_state.MaterialStateOutlinedBorder);
  material_state.MaterialStateOutlinedBorder[dart.implements] = () => [material_state.MaterialStateProperty$(dart.nullable(borders.OutlinedBorder))];
  dart.setLibraryUri(material_state.MaterialStateOutlinedBorder, I[0]);
  material_state.MaterialStateTextStyle = class MaterialStateTextStyle extends text_style.TextStyle {
    static resolveWith(callback) {
      return new material_state._MaterialStateTextStyle.new(callback);
    }
  };
  (material_state.MaterialStateTextStyle.new = function() {
    material_state.MaterialStateTextStyle.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateTextStyle.prototype;
  dart.addTypeTests(material_state.MaterialStateTextStyle);
  dart.addTypeCaches(material_state.MaterialStateTextStyle);
  material_state.MaterialStateTextStyle[dart.implements] = () => [material_state.MaterialStateProperty$(text_style.TextStyle)];
  dart.setStaticMethodSignature(material_state.MaterialStateTextStyle, () => ['resolveWith']);
  dart.setLibraryUri(material_state.MaterialStateTextStyle, I[0]);
  var _resolve$1 = dart.privateName(material_state, "_MaterialStateTextStyle._resolve");
  material_state._MaterialStateTextStyle = class _MaterialStateTextStyle extends material_state.MaterialStateTextStyle {
    get [_resolve$]() {
      return this[_resolve$1];
    }
    set [_resolve$](value) {
      super[_resolve$] = value;
    }
    static ['_#new#tearOff'](_resolve) {
      return new material_state._MaterialStateTextStyle.new(_resolve);
    }
    resolve(states) {
      let t0;
      t0 = states;
      return this[_resolve$](t0);
    }
  };
  (material_state._MaterialStateTextStyle.new = function(_resolve) {
    this[_resolve$1] = _resolve;
    material_state._MaterialStateTextStyle.__proto__.new.call(this);
    ;
  }).prototype = material_state._MaterialStateTextStyle.prototype;
  dart.addTypeTests(material_state._MaterialStateTextStyle);
  dart.addTypeCaches(material_state._MaterialStateTextStyle);
  dart.setMethodSignature(material_state._MaterialStateTextStyle, () => ({
    __proto__: dart.getMethods(material_state._MaterialStateTextStyle.__proto__),
    resolve: dart.fnType(text_style.TextStyle, [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(material_state._MaterialStateTextStyle, I[0]);
  dart.setFieldSignature(material_state._MaterialStateTextStyle, () => ({
    __proto__: dart.getFields(material_state._MaterialStateTextStyle.__proto__),
    [_resolve$]: dart.finalFieldType(dart.fnType(text_style.TextStyle, [core.Set$(material_state.MaterialState)]))
  }));
  material_state.MaterialStateOutlineInputBorder = class MaterialStateOutlineInputBorder extends input_border.OutlineInputBorder {
    static resolveWith(callback) {
      return new material_state._MaterialStateOutlineInputBorder.new(callback);
    }
  };
  (material_state.MaterialStateOutlineInputBorder.new = function() {
    material_state.MaterialStateOutlineInputBorder.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateOutlineInputBorder.prototype;
  dart.addTypeTests(material_state.MaterialStateOutlineInputBorder);
  dart.addTypeCaches(material_state.MaterialStateOutlineInputBorder);
  material_state.MaterialStateOutlineInputBorder[dart.implements] = () => [material_state.MaterialStateProperty$(input_border.InputBorder)];
  dart.setStaticMethodSignature(material_state.MaterialStateOutlineInputBorder, () => ['resolveWith']);
  dart.setLibraryUri(material_state.MaterialStateOutlineInputBorder, I[0]);
  var _resolve$2 = dart.privateName(material_state, "_MaterialStateOutlineInputBorder._resolve");
  material_state._MaterialStateOutlineInputBorder = class _MaterialStateOutlineInputBorder extends material_state.MaterialStateOutlineInputBorder {
    get [_resolve$]() {
      return this[_resolve$2];
    }
    set [_resolve$](value) {
      super[_resolve$] = value;
    }
    static ['_#new#tearOff'](_resolve) {
      return new material_state._MaterialStateOutlineInputBorder.new(_resolve);
    }
    resolve(states) {
      let t0;
      t0 = states;
      return this[_resolve$](t0);
    }
  };
  (material_state._MaterialStateOutlineInputBorder.new = function(_resolve) {
    this[_resolve$2] = _resolve;
    material_state._MaterialStateOutlineInputBorder.__proto__.new.call(this);
    ;
  }).prototype = material_state._MaterialStateOutlineInputBorder.prototype;
  dart.addTypeTests(material_state._MaterialStateOutlineInputBorder);
  dart.addTypeCaches(material_state._MaterialStateOutlineInputBorder);
  dart.setMethodSignature(material_state._MaterialStateOutlineInputBorder, () => ({
    __proto__: dart.getMethods(material_state._MaterialStateOutlineInputBorder.__proto__),
    resolve: dart.fnType(input_border.InputBorder, [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(material_state._MaterialStateOutlineInputBorder, I[0]);
  dart.setFieldSignature(material_state._MaterialStateOutlineInputBorder, () => ({
    __proto__: dart.getFields(material_state._MaterialStateOutlineInputBorder.__proto__),
    [_resolve$]: dart.finalFieldType(dart.fnType(input_border.InputBorder, [core.Set$(material_state.MaterialState)]))
  }));
  material_state.MaterialStateUnderlineInputBorder = class MaterialStateUnderlineInputBorder extends input_border.UnderlineInputBorder {
    static resolveWith(callback) {
      return new material_state._MaterialStateUnderlineInputBorder.new(callback);
    }
  };
  (material_state.MaterialStateUnderlineInputBorder.new = function() {
    material_state.MaterialStateUnderlineInputBorder.__proto__.new.call(this);
    ;
  }).prototype = material_state.MaterialStateUnderlineInputBorder.prototype;
  dart.addTypeTests(material_state.MaterialStateUnderlineInputBorder);
  dart.addTypeCaches(material_state.MaterialStateUnderlineInputBorder);
  material_state.MaterialStateUnderlineInputBorder[dart.implements] = () => [material_state.MaterialStateProperty$(input_border.InputBorder)];
  dart.setStaticMethodSignature(material_state.MaterialStateUnderlineInputBorder, () => ['resolveWith']);
  dart.setLibraryUri(material_state.MaterialStateUnderlineInputBorder, I[0]);
  var _resolve$3 = dart.privateName(material_state, "_MaterialStateUnderlineInputBorder._resolve");
  material_state._MaterialStateUnderlineInputBorder = class _MaterialStateUnderlineInputBorder extends material_state.MaterialStateUnderlineInputBorder {
    get [_resolve$]() {
      return this[_resolve$3];
    }
    set [_resolve$](value) {
      super[_resolve$] = value;
    }
    static ['_#new#tearOff'](_resolve) {
      return new material_state._MaterialStateUnderlineInputBorder.new(_resolve);
    }
    resolve(states) {
      let t0;
      t0 = states;
      return this[_resolve$](t0);
    }
  };
  (material_state._MaterialStateUnderlineInputBorder.new = function(_resolve) {
    this[_resolve$3] = _resolve;
    material_state._MaterialStateUnderlineInputBorder.__proto__.new.call(this);
    ;
  }).prototype = material_state._MaterialStateUnderlineInputBorder.prototype;
  dart.addTypeTests(material_state._MaterialStateUnderlineInputBorder);
  dart.addTypeCaches(material_state._MaterialStateUnderlineInputBorder);
  dart.setMethodSignature(material_state._MaterialStateUnderlineInputBorder, () => ({
    __proto__: dart.getMethods(material_state._MaterialStateUnderlineInputBorder.__proto__),
    resolve: dart.fnType(input_border.InputBorder, [core.Set$(material_state.MaterialState)])
  }));
  dart.setLibraryUri(material_state._MaterialStateUnderlineInputBorder, I[0]);
  dart.setFieldSignature(material_state._MaterialStateUnderlineInputBorder, () => ({
    __proto__: dart.getFields(material_state._MaterialStateUnderlineInputBorder.__proto__),
    [_resolve$]: dart.finalFieldType(dart.fnType(input_border.InputBorder, [core.Set$(material_state.MaterialState)]))
  }));
  const _is_MaterialStateProperty_default = Symbol('_is_MaterialStateProperty_default');
  material_state.MaterialStateProperty$ = dart.generic(T => {
    class MaterialStateProperty extends core.Object {
      static resolveAs(T, value, states) {
        if (material_state.MaterialStateProperty$(T).is(value)) {
          let property = value;
          return property.resolve(states);
        }
        return value;
      }
      static resolveWith(T, callback) {
        return new (material_state._MaterialStatePropertyWith$(T)).new(callback);
      }
      static all(T, value) {
        return new (material_state._MaterialStatePropertyAll$(T)).new(value);
      }
    }
    (MaterialStateProperty.new = function() {
      ;
    }).prototype = MaterialStateProperty.prototype;
    dart.addTypeTests(MaterialStateProperty);
    MaterialStateProperty.prototype[_is_MaterialStateProperty_default] = true;
    dart.addTypeCaches(MaterialStateProperty);
    dart.setStaticMethodSignature(MaterialStateProperty, () => ['resolveAs', 'resolveWith', 'all']);
    dart.setLibraryUri(MaterialStateProperty, I[0]);
    return MaterialStateProperty;
  });
  material_state.MaterialStateProperty = material_state.MaterialStateProperty$();
  dart.addTypeTests(material_state.MaterialStateProperty, _is_MaterialStateProperty_default);
  const _is__MaterialStatePropertyWith_default = Symbol('_is__MaterialStatePropertyWith_default');
  material_state._MaterialStatePropertyWith$ = dart.generic(T => {
    class _MaterialStatePropertyWith extends core.Object {
      static ['_#new#tearOff'](T, _resolve) {
        return new (material_state._MaterialStatePropertyWith$(T)).new(_resolve);
      }
      resolve(states) {
        let t0;
        t0 = states;
        return this[_resolve$](t0);
      }
    }
    (_MaterialStatePropertyWith.new = function(_resolve) {
      this[_resolve$] = _resolve;
      ;
    }).prototype = _MaterialStatePropertyWith.prototype;
    dart.addTypeTests(_MaterialStatePropertyWith);
    _MaterialStatePropertyWith.prototype[_is__MaterialStatePropertyWith_default] = true;
    dart.addTypeCaches(_MaterialStatePropertyWith);
    _MaterialStatePropertyWith[dart.implements] = () => [material_state.MaterialStateProperty$(T)];
    dart.setMethodSignature(_MaterialStatePropertyWith, () => ({
      __proto__: dart.getMethods(_MaterialStatePropertyWith.__proto__),
      resolve: dart.fnType(T, [core.Set$(material_state.MaterialState)])
    }));
    dart.setLibraryUri(_MaterialStatePropertyWith, I[0]);
    dart.setFieldSignature(_MaterialStatePropertyWith, () => ({
      __proto__: dart.getFields(_MaterialStatePropertyWith.__proto__),
      [_resolve$]: dart.finalFieldType(dart.fnType(T, [core.Set$(material_state.MaterialState)]))
    }));
    return _MaterialStatePropertyWith;
  });
  material_state._MaterialStatePropertyWith = material_state._MaterialStatePropertyWith$();
  dart.addTypeTests(material_state._MaterialStatePropertyWith, _is__MaterialStatePropertyWith_default);
  const _is__MaterialStatePropertyAll_default = Symbol('_is__MaterialStatePropertyAll_default');
  material_state._MaterialStatePropertyAll$ = dart.generic(T => {
    class _MaterialStatePropertyAll extends core.Object {
      static ['_#new#tearOff'](T, value) {
        return new (material_state._MaterialStatePropertyAll$(T)).new(value);
      }
      resolve(states) {
        return this.value;
      }
      toString() {
        return "MaterialStateProperty.all(" + dart.str(this.value) + ")";
      }
    }
    (_MaterialStatePropertyAll.new = function(value) {
      this.value = value;
      ;
    }).prototype = _MaterialStatePropertyAll.prototype;
    dart.addTypeTests(_MaterialStatePropertyAll);
    _MaterialStatePropertyAll.prototype[_is__MaterialStatePropertyAll_default] = true;
    dart.addTypeCaches(_MaterialStatePropertyAll);
    _MaterialStatePropertyAll[dart.implements] = () => [material_state.MaterialStateProperty$(T)];
    dart.setMethodSignature(_MaterialStatePropertyAll, () => ({
      __proto__: dart.getMethods(_MaterialStatePropertyAll.__proto__),
      resolve: dart.fnType(T, [core.Set$(material_state.MaterialState)])
    }));
    dart.setLibraryUri(_MaterialStatePropertyAll, I[0]);
    dart.setFieldSignature(_MaterialStatePropertyAll, () => ({
      __proto__: dart.getFields(_MaterialStatePropertyAll.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(_MaterialStatePropertyAll, ['toString']);
    return _MaterialStatePropertyAll;
  });
  material_state._MaterialStatePropertyAll = material_state._MaterialStatePropertyAll$();
  dart.addTypeTests(material_state._MaterialStatePropertyAll, _is__MaterialStatePropertyAll_default);
  dart.trackLibraries("packages/flutter/src/material/material_state.dart", {
    "package:flutter/src/material/material_state.dart": material_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+FA;;sDAnDK;;;EAmDL;;;;;;;;;;;;;;;;uBAkEwE;AAAa,wDAAoB,QAAQ;IAAC;;oDAVnF;AAAgB,+DAAM,YAAY;;EAAC;;;;;;;;;;;YAkC/B;;AAAW,WAAS,MAAM;YAAf,AAAQ;IAAQ;;;IARnC;AAAY,gEAAM,AAAQ,AAAiB,QAAjB,CAAC;;EAAsB;;;;;;;;;;;;;;MAK1C,iDAAc;;;;;;;;;kBA0CT;AACnC,YAAO,AAA2B,cAAJ,sDAAkB,MAAM;IACxD;;;AANM;;EAA0B;;;;;;;;;;;MAsBM,iDAAS;;;MAaT,gDAAQ;;;;;;;;IAc5B;;;;;;IACA;;;;;;IACL;;;;;;;;;;;;YAG0B;AACrC,UAAI,AAAO,MAAD,UAAwB;AAChC,cAAO;;AAET,YAAO;IACT;;AAG+B,YAAA,AAAiC,+BAAN,YAAI;IAAE;;;QAlBhD;QACA;QACA;IAFA;IACA;IACA;AAHV;;EAIJ;;;;;;;;;;;;;;;;;;;uBAiF+E;AAC7E,6DAAyB,QAAQ;IAAC;;;AAzChC;;EAAyB;;;;;;;;IAsDa;;;;;;;;;YAGL;;AACrC,WAAgB,MAAM;YAAf,AAAQ;IACjB;;;IAPoC;AAA9B;;EAAuC;;;;;;;;;;;;;;AAkCvC;;EAA6B;;;;;;uBAgD2C;AAC1E,4DAAwB,QAAQ;IAAC;;;AAX/B;;EAAwB;;;;;;;;IA6BY;;;;;;;;;YAGL;;AAAW,WAAS,MAAM;YAAf,AAAQ;IAAQ;;;IAL7B;AAA7B;;EAAsC;;;;;;;;;;;;;uBA8C6C;AACrF,qEAAiC,QAAQ;IAAC;;;AAXxC;;EAAiC;;;;;;;;IA6BK;;;;;;;;;YAGL;;AAAW,WAAS,MAAM;YAAf,AAAQ;IAAQ;;;IALtB;AAAtC;;EAA+C;;;;;;;;;;;;;uBA8CsC;AACvF,uEAAmC,QAAQ;IAAC;;;AAX1C;;EAAmC;;;;;;;;IA6BG;;;;;;;;;YAGL;;AAAW,WAAS,MAAM;YAAf,AAAQ;IAAQ;;;IALpB;AAAxC;;EAAiD;;;;;;;;;;;;;;;0BAsD/B,OAA0B;AAChD,YAAU,4CAAN,KAAK;AACwB,yBAAW,KAAK;AAC/C,gBAAO,AAAS,SAAD,SAAS,MAAM;;AAEhC,cAAO,MAAK;MACd;4BAI2E;AAAa,uEAA8B,QAAQ;MAAC;oBAItF;AAAU,sEAA6B,KAAK;MAAC;;;;IACxF;;;;;;;;;;;;;;;;cAQ+B;;AAAW,aAAS,MAAM;cAAf,AAAQ;MAAQ;;;MALxB;;IAAS;;;;;;;;;;;;;;;;;;;;;;;;cAcZ;AAAW;MAAK;;AAGxB,cAAA,AAAmC,yCAAP,cAAK;MAAE;;;MARzB;;IAAM","file":"../../../../../../../../../../packages/flutter/src/material/material_state.dart.lib.js"}');
  // Exports:
  return {
    src__material__material_state: material_state
  };
}));

//# sourceMappingURL=material_state.dart.lib.js.map
