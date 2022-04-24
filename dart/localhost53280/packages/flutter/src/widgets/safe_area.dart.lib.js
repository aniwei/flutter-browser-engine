define(['dart_sdk', 'packages/flutter/src/painting/edge_insets.dart', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/foundation/debug.dart'], (function load__packages__flutter__src__widgets__safe_area_dart(dart_sdk, packages__flutter__src__painting__edge_insets$46dart, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__foundation__debug$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const debug = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  var safe_area = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SafeArea",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MediaQuery",
        [_Location_column]: 25,
        [_Location_line]: 111,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "Padding",
        [_Location_column]: 12,
        [_Location_line]: 104,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverSafeArea",
        [_Location_column]: 9,
        [_Location_line]: 156,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "MediaQuery",
        [_Location_column]: 26,
        [_Location_line]: 205,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverPadding",
        [_Location_column]: 12,
        [_Location_line]: 198,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/safe_area.dart"
      });
    }
  }, false);
  var C = Array(7).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/safe_area.dart",
    "package:flutter/src/widgets/safe_area.dart"
  ];
  var left$ = dart.privateName(safe_area, "SafeArea.left");
  var top$ = dart.privateName(safe_area, "SafeArea.top");
  var right$ = dart.privateName(safe_area, "SafeArea.right");
  var bottom$ = dart.privateName(safe_area, "SafeArea.bottom");
  var minimum$ = dart.privateName(safe_area, "SafeArea.minimum");
  var maintainBottomViewPadding$ = dart.privateName(safe_area, "SafeArea.maintainBottomViewPadding");
  var child$ = dart.privateName(safe_area, "SafeArea.child");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  safe_area.SafeArea = class SafeArea extends framework.StatelessWidget {
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get minimum() {
      return this[minimum$];
    }
    set minimum(value) {
      super.minimum = value;
    }
    get maintainBottomViewPadding() {
      return this[maintainBottomViewPadding$];
    }
    set maintainBottomViewPadding(value) {
      super.maintainBottomViewPadding = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let left = opts && 'left' in opts ? opts.left : true;
      let top = opts && 'top' in opts ? opts.top : true;
      let right = opts && 'right' in opts ? opts.right : true;
      let bottom = opts && 'bottom' in opts ? opts.bottom : true;
      let minimum = opts && 'minimum' in opts ? opts.minimum : C[0] || CT.C0;
      let maintainBottomViewPadding = opts && 'maintainBottomViewPadding' in opts ? opts.maintainBottomViewPadding : false;
      let child = opts && 'child' in opts ? opts.child : null;
      return new safe_area.SafeArea.new({key: key, left: left, top: top, right: right, bottom: bottom, minimum: minimum, maintainBottomViewPadding: maintainBottomViewPadding, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    build(context) {
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[0], 97, 12, "debugCheckHasMediaQuery(context)");
      let data = media_query.MediaQuery.of(context);
      let padding = data.padding;
      if (data.padding.bottom === 0.0 && data.viewInsets.bottom !== 0.0 && this.maintainBottomViewPadding) padding = padding.copyWith({bottom: data.viewPadding.bottom});
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: math.max(core.double, this.left ? padding.left : 0.0, this.minimum.left), top: math.max(core.double, this.top ? padding.top : 0.0, this.minimum.top), right: math.max(core.double, this.right ? padding.right : 0.0, this.minimum.right), bottom: math.max(core.double, this.bottom ? padding.bottom : 0.0, this.minimum.bottom)}), child: media_query.MediaQuery.removePadding({context: context, removeLeft: this.left, removeTop: this.top, removeRight: this.right, removeBottom: this.bottom, child: this.child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("left", {value: this.left, ifTrue: "avoid left padding"}));
      properties.add(new diagnostics.FlagProperty.new("top", {value: this.top, ifTrue: "avoid top padding"}));
      properties.add(new diagnostics.FlagProperty.new("right", {value: this.right, ifTrue: "avoid right padding"}));
      properties.add(new diagnostics.FlagProperty.new("bottom", {value: this.bottom, ifTrue: "avoid bottom padding"}));
    }
  };
  (safe_area.SafeArea.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let left = opts && 'left' in opts ? opts.left : true;
    let top = opts && 'top' in opts ? opts.top : true;
    let right = opts && 'right' in opts ? opts.right : true;
    let bottom = opts && 'bottom' in opts ? opts.bottom : true;
    let minimum = opts && 'minimum' in opts ? opts.minimum : C[0] || CT.C0;
    let maintainBottomViewPadding = opts && 'maintainBottomViewPadding' in opts ? opts.maintainBottomViewPadding : false;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[left$] = left;
    this[top$] = top;
    this[right$] = right;
    this[bottom$] = bottom;
    this[minimum$] = minimum;
    this[maintainBottomViewPadding$] = maintainBottomViewPadding;
    this[child$] = child;
    if (!(left !== null)) dart.assertFailed(null, I[0], 50, 15, "left != null");
    if (!(top !== null)) dart.assertFailed(null, I[0], 51, 15, "top != null");
    if (!(right !== null)) dart.assertFailed(null, I[0], 52, 15, "right != null");
    if (!(bottom !== null)) dart.assertFailed(null, I[0], 53, 15, "bottom != null");
    safe_area.SafeArea.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = safe_area.SafeArea.prototype;
  dart.addTypeTests(safe_area.SafeArea);
  dart.addTypeCaches(safe_area.SafeArea);
  dart.setMethodSignature(safe_area.SafeArea, () => ({
    __proto__: dart.getMethods(safe_area.SafeArea.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(safe_area.SafeArea, I[1]);
  dart.setFieldSignature(safe_area.SafeArea, () => ({
    __proto__: dart.getFields(safe_area.SafeArea.__proto__),
    left: dart.finalFieldType(core.bool),
    top: dart.finalFieldType(core.bool),
    right: dart.finalFieldType(core.bool),
    bottom: dart.finalFieldType(core.bool),
    minimum: dart.finalFieldType(edge_insets.EdgeInsets),
    maintainBottomViewPadding: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(framework.Widget)
  }));
  var left$0 = dart.privateName(safe_area, "SliverSafeArea.left");
  var top$0 = dart.privateName(safe_area, "SliverSafeArea.top");
  var right$0 = dart.privateName(safe_area, "SliverSafeArea.right");
  var bottom$0 = dart.privateName(safe_area, "SliverSafeArea.bottom");
  var minimum$0 = dart.privateName(safe_area, "SliverSafeArea.minimum");
  var sliver$ = dart.privateName(safe_area, "SliverSafeArea.sliver");
  safe_area.SliverSafeArea = class SliverSafeArea extends framework.StatelessWidget {
    get left() {
      return this[left$0];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$0];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get minimum() {
      return this[minimum$0];
    }
    set minimum(value) {
      super.minimum = value;
    }
    get sliver() {
      return this[sliver$];
    }
    set sliver(value) {
      super.sliver = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let left = opts && 'left' in opts ? opts.left : true;
      let top = opts && 'top' in opts ? opts.top : true;
      let right = opts && 'right' in opts ? opts.right : true;
      let bottom = opts && 'bottom' in opts ? opts.bottom : true;
      let minimum = opts && 'minimum' in opts ? opts.minimum : C[0] || CT.C0;
      let sliver = opts && 'sliver' in opts ? opts.sliver : null;
      return new safe_area.SliverSafeArea.new({key: key, left: left, top: top, right: right, bottom: bottom, minimum: minimum, sliver: sliver, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    build(context) {
      if (!debug.debugCheckHasMediaQuery(context)) dart.assertFailed(null, I[0], 196, 12, "debugCheckHasMediaQuery(context)");
      let padding = media_query.MediaQuery.of(context).padding;
      return new basic.SliverPadding.new({padding: new edge_insets.EdgeInsets.only({left: math.max(core.double, this.left ? padding.left : 0.0, this.minimum.left), top: math.max(core.double, this.top ? padding.top : 0.0, this.minimum.top), right: math.max(core.double, this.right ? padding.right : 0.0, this.minimum.right), bottom: math.max(core.double, this.bottom ? padding.bottom : 0.0, this.minimum.bottom)}), sliver: media_query.MediaQuery.removePadding({context: context, removeLeft: this.left, removeTop: this.top, removeRight: this.right, removeBottom: this.bottom, child: this.sliver, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5}), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("left", {value: this.left, ifTrue: "avoid left padding"}));
      properties.add(new diagnostics.FlagProperty.new("top", {value: this.top, ifTrue: "avoid top padding"}));
      properties.add(new diagnostics.FlagProperty.new("right", {value: this.right, ifTrue: "avoid right padding"}));
      properties.add(new diagnostics.FlagProperty.new("bottom", {value: this.bottom, ifTrue: "avoid bottom padding"}));
    }
  };
  (safe_area.SliverSafeArea.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let left = opts && 'left' in opts ? opts.left : true;
    let top = opts && 'top' in opts ? opts.top : true;
    let right = opts && 'right' in opts ? opts.right : true;
    let bottom = opts && 'bottom' in opts ? opts.bottom : true;
    let minimum = opts && 'minimum' in opts ? opts.minimum : C[0] || CT.C0;
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[left$0] = left;
    this[top$0] = top;
    this[right$0] = right;
    this[bottom$0] = bottom;
    this[minimum$0] = minimum;
    this[sliver$] = sliver;
    if (!(left !== null)) dart.assertFailed(null, I[0], 164, 15, "left != null");
    if (!(top !== null)) dart.assertFailed(null, I[0], 165, 15, "top != null");
    if (!(right !== null)) dart.assertFailed(null, I[0], 166, 15, "right != null");
    if (!(bottom !== null)) dart.assertFailed(null, I[0], 167, 15, "bottom != null");
    safe_area.SliverSafeArea.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = safe_area.SliverSafeArea.prototype;
  dart.addTypeTests(safe_area.SliverSafeArea);
  dart.addTypeCaches(safe_area.SliverSafeArea);
  dart.setMethodSignature(safe_area.SliverSafeArea, () => ({
    __proto__: dart.getMethods(safe_area.SliverSafeArea.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(safe_area.SliverSafeArea, I[1]);
  dart.setFieldSignature(safe_area.SliverSafeArea, () => ({
    __proto__: dart.getFields(safe_area.SliverSafeArea.__proto__),
    left: dart.finalFieldType(core.bool),
    top: dart.finalFieldType(core.bool),
    right: dart.finalFieldType(core.bool),
    bottom: dart.finalFieldType(core.bool),
    minimum: dart.finalFieldType(edge_insets.EdgeInsets),
    sliver: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/safe_area.dart", {
    "package:flutter/src/widgets/safe_area.dart": safe_area
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["safe_area.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwDa;;;;;;IAIA;;;;;;IAGA;;;;;;IAGA;;;;;;IAKM;;;;;;IAaN;;;;;;IAQE;;;;;;;;;;;;;;;;;UAGa;AACxB,WAAO,8BAAwB,OAAO;AACjB,iBAAkB,0BAAG,OAAO;AACtC,oBAAU,AAAK,IAAD;AAEzB,UAAI,AAAK,AAAQ,AAAO,IAAhB,oBAAmB,OAAO,AAAK,AAAW,IAAZ,uBAAsB,OAAO,gCACjE,AAA2D,UAAjD,AAAQ,OAAD,mBAAkB,AAAK,AAAY,IAAb;AAEzC,YAAO,iCACe,uCACP,sBAAI,YAAO,AAAQ,OAAD,QAAQ,KAAK,AAAQ,yBACxC,sBAAI,WAAM,AAAQ,OAAD,OAAO,KAAK,AAAQ,0BACnC,sBAAI,aAAQ,AAAQ,OAAD,SAAS,KAAK,AAAQ,6BACxC,sBAAI,cAAS,AAAQ,OAAD,UAAU,KAAK,AAAQ,+BAExC,+CACP,OAAO,cACJ,sBACD,uBACE,0BACC,oBACP;IAGb;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC2C,MAA/E,AAAW,UAAD,KAAK,iCAAa,gBAAe,mBAAc;AACmB,MAA5E,AAAW,UAAD,KAAK,iCAAa,eAAc,kBAAa;AAC2B,MAAlF,AAAW,UAAD,KAAK,iCAAa,iBAAgB,oBAAe;AAC0B,MAArF,AAAW,UAAD,KAAK,iCAAa,kBAAiB,qBAAgB;IAC/D;;;QAvFO;QACA;QACA;QACA;QACA;QACA;QACA;QACS;;IANT;IACA;IACA;IACA;IACA;IACA;IACS;UACJ,AAAK,IAAD;UACJ,AAAI,GAAD;UACH,AAAM,KAAD;UACL,AAAO,MAAD;AACb,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;IAqHT;;;;;;IAIA;;;;;;IAGA;;;;;;IAGA;;;;;;IAKM;;;;;;IAMJ;;;;;;;;;;;;;;;;UAGa;AACxB,WAAO,8BAAwB,OAAO;AACrB,oBAAqB,AAAY,0BAAT,OAAO;AAChD,YAAO,uCACe,uCACP,sBAAI,YAAO,AAAQ,OAAD,QAAQ,KAAK,AAAQ,yBACxC,sBAAI,WAAM,AAAQ,OAAD,OAAO,KAAK,AAAQ,0BACnC,sBAAI,aAAQ,AAAQ,OAAD,SAAS,KAAK,AAAQ,6BACxC,sBAAI,cAAS,AAAQ,OAAD,UAAU,KAAK,AAAQ,gCAEvC,+CACR,OAAO,cACJ,sBACD,uBACE,0BACC,oBACP;IAGb;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC2C,MAA/E,AAAW,UAAD,KAAK,iCAAa,gBAAe,mBAAc;AACmB,MAA5E,AAAW,UAAD,KAAK,iCAAa,eAAc,kBAAa;AAC2B,MAAlF,AAAW,UAAD,KAAK,iCAAa,iBAAgB,oBAAe;AAC0B,MAArF,AAAW,UAAD,KAAK,iCAAa,kBAAiB,qBAAgB;IAC/D;;;QAlEO;QACA;QACA;QACA;QACA;QACA;QACS;;IALT;IACA;IACA;IACA;IACA;IACS;UACJ,AAAK,IAAD;UACJ,AAAI,GAAD;UACH,AAAM,KAAD;UACL,AAAO,MAAD;AACb,4DAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/safe_area.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__safe_area: safe_area
  };
}));

//# sourceMappingURL=safe_area.dart.lib.js.map
