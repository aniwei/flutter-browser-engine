define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/sliver.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/proxy_box.dart'], (function load__packages__flutter__src__rendering__proxy_sliver_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__sliver$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__proxy_box$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const sliver = packages__flutter__src__rendering__sliver$46dart.src__rendering__sliver;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  var proxy_sliver = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    OpacityLayerN: () => (T.OpacityLayerN = dart.constFn(dart.nullable(layer.OpacityLayer)))(),
    DiagnosticsPropertyOfbool: () => (T.DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))(),
    JSArrayOfDiagnosticsNode: () => (T.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/proxy_sliver.dart",
    "package:flutter/src/rendering/proxy_sliver.dart"
  ];
  const RenderSliver_RenderObjectWithChildMixin$36 = class RenderSliver_RenderObjectWithChildMixin extends sliver.RenderSliver {};
  (RenderSliver_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(sliver.RenderSliver)[dart.mixinNew].call(this);
    RenderSliver_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderSliver_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderSliver_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(sliver.RenderSliver));
  proxy_sliver.RenderProxySliver = class RenderProxySliver extends RenderSliver_RenderObjectWithChildMixin$36 {
    setupParentData(child) {
      object.RenderObject.as(child);
      if (!sliver.SliverPhysicalParentData.is(child.parentData)) child.parentData = new sliver.SliverPhysicalParentData.new();
    }
    performLayout() {
      if (!(this.child != null)) dart.assertFailed(null, I[0], 51, 12, "child != null");
      dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
      this.geometry = dart.nullCheck(this.child).geometry;
    }
    paint(context, offset) {
      if (this.child != null) context.paintChild(dart.nullCheck(this.child), offset);
    }
    hitTestChildren(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      return this.child != null && dart.nullCheck(dart.nullCheck(this.child).geometry).hitTestExtent > 0 && dart.nullCheck(this.child).hitTest(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
    }
    childMainAxisPosition(child) {
      sliver.RenderSliver.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[0], 75, 12, "child != null");
      if (!child[$_equals](this.child)) dart.assertFailed(null, I[0], 76, 12, "child == this.child");
      return 0.0;
    }
    applyPaintTransform(child, transform) {
      object.RenderObject.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[0], 82, 12, "child != null");
      let childParentData = sliver.SliverPhysicalParentData.as(dart.nullCheck(child.parentData));
      childParentData.applyPaintTransform(transform);
    }
  };
  (proxy_sliver.RenderProxySliver.new = function(child = null) {
    proxy_sliver.RenderProxySliver.__proto__.new.call(this);
    this.child = child;
  }).prototype = proxy_sliver.RenderProxySliver.prototype;
  dart.addTypeTests(proxy_sliver.RenderProxySliver);
  dart.addTypeCaches(proxy_sliver.RenderProxySliver);
  dart.setMethodSignature(proxy_sliver.RenderProxySliver, () => ({
    __proto__: dart.getMethods(proxy_sliver.RenderProxySliver.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(proxy_sliver.RenderProxySliver, I[1]);
  var _opacity = dart.privateName(proxy_sliver, "_opacity");
  var _alwaysIncludeSemantics = dart.privateName(proxy_sliver, "_alwaysIncludeSemantics");
  var _alpha = dart.privateName(proxy_sliver, "_alpha");
  proxy_sliver.RenderSliverOpacity = class RenderSliverOpacity extends proxy_sliver.RenderProxySliver {
    static ['_#new#tearOff'](opts) {
      let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
      let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
      let sliver = opts && 'sliver' in opts ? opts.sliver : null;
      return new proxy_sliver.RenderSliverOpacity.new({opacity: opacity, alwaysIncludeSemantics: alwaysIncludeSemantics, sliver: sliver});
    }
    get alwaysNeedsCompositing() {
      return this.child != null && this[_alpha] > 0;
    }
    get opacity() {
      return this[_opacity];
    }
    set opacity(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 132, 12, "value != null");
      if (!(value >= 0.0 && value <= 1.0)) dart.assertFailed(null, I[0], 133, 12, "value >= 0.0 && value <= 1.0");
      if (this[_opacity] === value) return;
      let didNeedCompositing = this.alwaysNeedsCompositing;
      let wasVisible = this[_alpha] !== 0;
      this[_opacity] = value;
      this[_alpha] = ui.Color.getAlphaFromOpacity(this[_opacity]);
      if (didNeedCompositing !== this.alwaysNeedsCompositing) this.markNeedsCompositingBitsUpdate();
      this.markNeedsPaint();
      if (wasVisible !== (this[_alpha] !== 0) && !this.alwaysIncludeSemantics) this.markNeedsSemanticsUpdate();
    }
    get alwaysIncludeSemantics() {
      return this[_alwaysIncludeSemantics];
    }
    set alwaysIncludeSemantics(value) {
      if (value === this[_alwaysIncludeSemantics]) return;
      this[_alwaysIncludeSemantics] = value;
      this.markNeedsSemanticsUpdate();
    }
    paint(context, offset) {
      if (this.child != null && dart.nullCheck(dart.nullCheck(this.child).geometry).visible) {
        if (this[_alpha] === 0) {
          this.layer = null;
          return;
        }
        if (!this.needsCompositing) dart.assertFailed(null, I[0], 169, 14, "needsCompositing");
        this.layer = context.pushOpacity(offset, this[_alpha], dart.bind(this, 'paint', super.paint), {oldLayer: T.OpacityLayerN().as(this.layer)});
      }
    }
    visitChildrenForSemantics(visitor) {
      if (this.child != null && (this[_alpha] !== 0 || this.alwaysIncludeSemantics)) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("opacity", this.opacity));
      properties.add(new diagnostics.FlagProperty.new("alwaysIncludeSemantics", {value: this.alwaysIncludeSemantics, ifTrue: "alwaysIncludeSemantics"}));
    }
  };
  (proxy_sliver.RenderSliverOpacity.new = function(opts) {
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    if (!(opacity !== null && opacity >= 0.0 && opacity <= 1.0)) dart.assertFailed(null, I[0], 106, 15, "opacity != null && opacity >= 0.0 && opacity <= 1.0");
    if (!(alwaysIncludeSemantics !== null)) dart.assertFailed(null, I[0], 107, 15, "alwaysIncludeSemantics != null");
    this[_opacity] = opacity;
    this[_alwaysIncludeSemantics] = alwaysIncludeSemantics;
    this[_alpha] = ui.Color.getAlphaFromOpacity(opacity);
    proxy_sliver.RenderSliverOpacity.__proto__.new.call(this);
    this.child = sliver;
  }).prototype = proxy_sliver.RenderSliverOpacity.prototype;
  dart.addTypeTests(proxy_sliver.RenderSliverOpacity);
  dart.addTypeCaches(proxy_sliver.RenderSliverOpacity);
  dart.setGetterSignature(proxy_sliver.RenderSliverOpacity, () => ({
    __proto__: dart.getGetters(proxy_sliver.RenderSliverOpacity.__proto__),
    opacity: core.double,
    alwaysIncludeSemantics: core.bool
  }));
  dart.setSetterSignature(proxy_sliver.RenderSliverOpacity, () => ({
    __proto__: dart.getSetters(proxy_sliver.RenderSliverOpacity.__proto__),
    opacity: core.double,
    alwaysIncludeSemantics: core.bool
  }));
  dart.setLibraryUri(proxy_sliver.RenderSliverOpacity, I[1]);
  dart.setFieldSignature(proxy_sliver.RenderSliverOpacity, () => ({
    __proto__: dart.getFields(proxy_sliver.RenderSliverOpacity.__proto__),
    [_alpha]: dart.fieldType(core.int),
    [_opacity]: dart.fieldType(core.double),
    [_alwaysIncludeSemantics]: dart.fieldType(core.bool)
  }));
  var _ignoring = dart.privateName(proxy_sliver, "_ignoring");
  var _ignoringSemantics = dart.privateName(proxy_sliver, "_ignoringSemantics");
  var _effectiveIgnoringSemantics = dart.privateName(proxy_sliver, "_effectiveIgnoringSemantics");
  proxy_sliver.RenderSliverIgnorePointer = class RenderSliverIgnorePointer extends proxy_sliver.RenderProxySliver {
    static ['_#new#tearOff'](opts) {
      let sliver = opts && 'sliver' in opts ? opts.sliver : null;
      let ignoring = opts && 'ignoring' in opts ? opts.ignoring : true;
      let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
      return new proxy_sliver.RenderSliverIgnorePointer.new({sliver: sliver, ignoring: ignoring, ignoringSemantics: ignoringSemantics});
    }
    get ignoring() {
      return this[_ignoring];
    }
    set ignoring(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 225, 12, "value != null");
      if (value === this[_ignoring]) return;
      this[_ignoring] = value;
      if (this[_ignoringSemantics] == null || !dart.nullCheck(this[_ignoringSemantics])) this.markNeedsSemanticsUpdate();
    }
    get ignoringSemantics() {
      return this[_ignoringSemantics];
    }
    set ignoringSemantics(value) {
      if (value == this[_ignoringSemantics]) return;
      let oldEffectiveValue = this[_effectiveIgnoringSemantics];
      this[_ignoringSemantics] = value;
      if (oldEffectiveValue !== this[_effectiveIgnoringSemantics]) this.markNeedsSemanticsUpdate();
    }
    get [_effectiveIgnoringSemantics]() {
      let t0;
      t0 = this.ignoringSemantics;
      return t0 == null ? this.ignoring : t0;
    }
    hitTest(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      return !this.ignoring && super.hitTest(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
    }
    visitChildrenForSemantics(visitor) {
      if (this.child != null && !this[_effectiveIgnoringSemantics]) visitor(dart.nullCheck(this.child));
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("ignoring", this.ignoring));
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("ignoringSemantics", this[_effectiveIgnoringSemantics], {description: this.ignoringSemantics == null ? "implicitly " + dart.str(this[_effectiveIgnoringSemantics]) : null}));
    }
  };
  (proxy_sliver.RenderSliverIgnorePointer.new = function(opts) {
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    let ignoring = opts && 'ignoring' in opts ? opts.ignoring : true;
    let ignoringSemantics = opts && 'ignoringSemantics' in opts ? opts.ignoringSemantics : null;
    if (!(ignoring !== null)) dart.assertFailed(null, I[0], 212, 15, "ignoring != null");
    this[_ignoring] = ignoring;
    this[_ignoringSemantics] = ignoringSemantics;
    proxy_sliver.RenderSliverIgnorePointer.__proto__.new.call(this);
    this.child = sliver;
  }).prototype = proxy_sliver.RenderSliverIgnorePointer.prototype;
  dart.addTypeTests(proxy_sliver.RenderSliverIgnorePointer);
  dart.addTypeCaches(proxy_sliver.RenderSliverIgnorePointer);
  dart.setGetterSignature(proxy_sliver.RenderSliverIgnorePointer, () => ({
    __proto__: dart.getGetters(proxy_sliver.RenderSliverIgnorePointer.__proto__),
    ignoring: core.bool,
    ignoringSemantics: dart.nullable(core.bool),
    [_effectiveIgnoringSemantics]: core.bool
  }));
  dart.setSetterSignature(proxy_sliver.RenderSliverIgnorePointer, () => ({
    __proto__: dart.getSetters(proxy_sliver.RenderSliverIgnorePointer.__proto__),
    ignoring: core.bool,
    ignoringSemantics: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(proxy_sliver.RenderSliverIgnorePointer, I[1]);
  dart.setFieldSignature(proxy_sliver.RenderSliverIgnorePointer, () => ({
    __proto__: dart.getFields(proxy_sliver.RenderSliverIgnorePointer.__proto__),
    [_ignoring]: dart.fieldType(core.bool),
    [_ignoringSemantics]: dart.fieldType(dart.nullable(core.bool))
  }));
  var _offstage = dart.privateName(proxy_sliver, "_offstage");
  proxy_sliver.RenderSliverOffstage = class RenderSliverOffstage extends proxy_sliver.RenderProxySliver {
    static ['_#new#tearOff'](opts) {
      let offstage = opts && 'offstage' in opts ? opts.offstage : true;
      let sliver = opts && 'sliver' in opts ? opts.sliver : null;
      return new proxy_sliver.RenderSliverOffstage.new({offstage: offstage, sliver: sliver});
    }
    get offstage() {
      return this[_offstage];
    }
    set offstage(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 300, 12, "value != null");
      if (value === this[_offstage]) return;
      this[_offstage] = value;
      this.markNeedsLayoutForSizedByParentChange();
    }
    performLayout() {
      if (!(this.child != null)) dart.assertFailed(null, I[0], 309, 12, "child != null");
      dart.nullCheck(this.child).layout(this.constraints, {parentUsesSize: true});
      if (!this.offstage)
        this.geometry = dart.nullCheck(this.child).geometry;
      else
        this.geometry = sliver.SliverGeometry.zero;
    }
    hitTest(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      return !this.offstage && super.hitTest(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
    }
    hitTestChildren(result, opts) {
      let mainAxisPosition = opts && 'mainAxisPosition' in opts ? opts.mainAxisPosition : null;
      let crossAxisPosition = opts && 'crossAxisPosition' in opts ? opts.crossAxisPosition : null;
      return !this.offstage && this.child != null && dart.nullCheck(dart.nullCheck(this.child).geometry).hitTestExtent > 0 && dart.nullCheck(this.child).hitTest(result, {mainAxisPosition: mainAxisPosition, crossAxisPosition: crossAxisPosition});
    }
    paint(context, offset) {
      if (this.offstage) return;
      context.paintChild(dart.nullCheck(this.child), offset);
    }
    visitChildrenForSemantics(visitor) {
      if (this.offstage) return;
      super.visitChildrenForSemantics(visitor);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfbool()).new("offstage", this.offstage));
    }
    debugDescribeChildren() {
      if (this.child == null) return T.JSArrayOfDiagnosticsNode().of([]);
      return T.JSArrayOfDiagnosticsNode().of([dart.nullCheck(this.child).toDiagnosticsNode({name: "child", style: this.offstage ? diagnostics.DiagnosticsTreeStyle.offstage : diagnostics.DiagnosticsTreeStyle.sparse})]);
    }
  };
  (proxy_sliver.RenderSliverOffstage.new = function(opts) {
    let offstage = opts && 'offstage' in opts ? opts.offstage : true;
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    if (!(offstage !== null)) dart.assertFailed(null, I[0], 284, 15, "offstage != null");
    this[_offstage] = offstage;
    proxy_sliver.RenderSliverOffstage.__proto__.new.call(this);
    this.child = sliver;
  }).prototype = proxy_sliver.RenderSliverOffstage.prototype;
  dart.addTypeTests(proxy_sliver.RenderSliverOffstage);
  dart.addTypeCaches(proxy_sliver.RenderSliverOffstage);
  dart.setGetterSignature(proxy_sliver.RenderSliverOffstage, () => ({
    __proto__: dart.getGetters(proxy_sliver.RenderSliverOffstage.__proto__),
    offstage: core.bool
  }));
  dart.setSetterSignature(proxy_sliver.RenderSliverOffstage, () => ({
    __proto__: dart.getSetters(proxy_sliver.RenderSliverOffstage.__proto__),
    offstage: core.bool
  }));
  dart.setLibraryUri(proxy_sliver.RenderSliverOffstage, I[1]);
  dart.setFieldSignature(proxy_sliver.RenderSliverOffstage, () => ({
    __proto__: dart.getFields(proxy_sliver.RenderSliverOffstage.__proto__),
    [_offstage]: dart.fieldType(core.bool)
  }));
  const RenderProxySliver_RenderAnimatedOpacityMixin$36 = class RenderProxySliver_RenderAnimatedOpacityMixin extends proxy_sliver.RenderProxySliver {};
  (RenderProxySliver_RenderAnimatedOpacityMixin$36.new = function(child) {
    proxy_box.RenderAnimatedOpacityMixin$(sliver.RenderSliver)[dart.mixinNew].call(this);
    RenderProxySliver_RenderAnimatedOpacityMixin$36.__proto__.new.call(this, child);
  }).prototype = RenderProxySliver_RenderAnimatedOpacityMixin$36.prototype;
  dart.applyMixin(RenderProxySliver_RenderAnimatedOpacityMixin$36, proxy_box.RenderAnimatedOpacityMixin$(sliver.RenderSliver));
  proxy_sliver.RenderSliverAnimatedOpacity = class RenderSliverAnimatedOpacity extends RenderProxySliver_RenderAnimatedOpacityMixin$36 {
    static ['_#new#tearOff'](opts) {
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
      let sliver = opts && 'sliver' in opts ? opts.sliver : null;
      return new proxy_sliver.RenderSliverAnimatedOpacity.new({opacity: opacity, alwaysIncludeSemantics: alwaysIncludeSemantics, sliver: sliver});
    }
  };
  (proxy_sliver.RenderSliverAnimatedOpacity.new = function(opts) {
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let alwaysIncludeSemantics = opts && 'alwaysIncludeSemantics' in opts ? opts.alwaysIncludeSemantics : false;
    let sliver = opts && 'sliver' in opts ? opts.sliver : null;
    if (!(opacity !== null)) dart.assertFailed(null, I[0], 383, 15, "opacity != null");
    if (!(alwaysIncludeSemantics !== null)) dart.assertFailed(null, I[0], 384, 15, "alwaysIncludeSemantics != null");
    proxy_sliver.RenderSliverAnimatedOpacity.__proto__.new.call(this);
    this.opacity = opacity;
    this.alwaysIncludeSemantics = alwaysIncludeSemantics;
    this.child = sliver;
  }).prototype = proxy_sliver.RenderSliverAnimatedOpacity.prototype;
  dart.addTypeTests(proxy_sliver.RenderSliverAnimatedOpacity);
  dart.addTypeCaches(proxy_sliver.RenderSliverAnimatedOpacity);
  dart.setLibraryUri(proxy_sliver.RenderSliverAnimatedOpacity, I[1]);
  dart.trackLibraries("packages/flutter/src/rendering/proxy_sliver.dart", {
    "package:flutter/src/rendering/proxy_sliver.dart": proxy_sliver
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["proxy_sliver.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA2CoC;;AAChC,WAAqB,mCAAjB,AAAM,KAAD,cACP,AAAM,AAAuC,KAAxC,cAAc;IACvB;;AAIE,YAAO,AAAM;AACmC,MAA3C,AAAE,eAAP,mBAAc,mCAA6B;AACjB,MAA1B,gBAAgB,AAAE,eAAP;IACb;UAG2B,SAAgB;AACzC,UAAI,oBACF,AAAQ,AAA0B,OAA3B,YAAiB,eAAL,aAAQ,MAAM;IACrC;oBAGyC;UAAyB;UAAkC;AAClG,YAAO,AAEL,uBADkB,AAAE,AAAc,eAA1B,AAAE,eAAP,sCAAiC,KAC5B,AAAE,eAAP,oBACD,MAAM,qBACY,gBAAgB,qBACf,iBAAiB;IAE1C;0BAG0C;;AACxC,YAAO,AAAM,KAAD;AACZ,WAAO,AAAM,KAAD,WAAS;AACrB,YAAO;IACT;wBAGsC,OAAe;;AACnD,YAAO,AAAM,KAAD;AACmB,4BAAoC,mCAAF,eAAhB,AAAM,KAAD;AACR,MAA9C,AAAgB,eAAD,qBAAqB,SAAS;IAC/C;;iDA9CiC;AAAjC;AACoB,IAAb,aAAQ,KAAK;EACpB;;;;;;;;;;;;;;;;;;;AA0EmC,YAAA,AAAc,uBAAI,AAAO,eAAE;IAAE;;AAc1C;IAAQ;gBAEX;AACjB,YAAO,AAAM,KAAD;AACZ,YAAO,AAAM,AAAO,KAAR,IAAI,OAAO,AAAM,KAAD,IAAI;AAChC,UAAI,AAAS,mBAAG,KAAK,EACnB;AACS,+BAAqB;AACrB,uBAAa,AAAO,iBAAG;AAClB,MAAhB,iBAAW,KAAK;AAC+B,MAA/C,eAAkB,6BAAoB;AACtC,UAAI,kBAAkB,KAAI,6BACxB,AAAgC;AAClB,MAAhB;AACA,UAAI,UAAU,MAAK,AAAO,iBAAG,OAAO,6BAClC,AAA0B;IAC9B;;AAOmC;IAAuB;+BAE1B;AAC9B,UAAI,AAAM,KAAD,KAAI,+BACX;AAC6B,MAA/B,gCAA0B,KAAK;AACL,MAA1B;IACF;UAG2B,SAAgB;AACzC,UAAI,sBAAgC,AAAE,eAAZ,AAAE,eAAP;AACnB,YAAI,AAAO,iBAAG;AAEA,UAAZ,aAAQ;AACR;;AAEF,aAAO;AAMN,QALD,aAAQ,AAAQ,OAAD,aACb,MAAM,EACN,cACM,kDACU,qBAAN;;IAGhB;8BAGmD;AACjD,UAAI,uBAAkB,iBAAU,KAAK,8BACnC,AAAO,AAAQ,OAAR,CAAM,eAAL;IACZ;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AACc,MAAlD,AAAW,UAAD,KAAK,mCAAe,WAAW;AAC8E,MAAvH,AAAW,UAAD,KAAK,iCAAa,kCAAiC,qCAAgC;IAC/F;;;QAvFS;QACF;QACS;UACJ,AAAkC,OAA3B,aAAY,AAAQ,OAAD,IAAI,OAAO,AAAQ,OAAD,IAAI;UAChD,AAAuB,sBAAD;IACpB,iBAAE,OAAO;IACM,gCAAE,sBAAsB;IACzC,eAAW,6BAAoB,OAAO;AARlD;AASgB,IAAd,aAAQ,MAAM;EAChB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8GqB;IAAS;iBAEZ;AAChB,YAAO,AAAM,KAAD;AACZ,UAAI,AAAM,KAAD,KAAI,iBACX;AACe,MAAjB,kBAAY,KAAK;AACjB,UAAI,AAAmB,qCAA8B,eAAlB,2BACjC,AAA0B;IAC9B;;AAQ+B;IAAkB;0BAErB;AAC1B,UAAI,AAAM,KAAD,IAAI,0BACX;AACS,8BAAoB;AACL,MAA1B,2BAAqB,KAAK;AAC1B,UAAI,iBAAiB,KAAI,mCACvB,AAA0B;IAC9B;;;AAEwC;0BAAqB;IAAQ;YAGpC;UAAyB;UAAkC;AAC1F,YACE,EADM,iBACG,cACP,MAAM,qBACY,gBAAgB,qBACf,iBAAiB;IAE1C;8BAGmD;AACjD,UAAI,uBAAkB,mCACpB,AAAO,AAAQ,OAAR,CAAM,eAAL;IACZ;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC2B,MAA/D,AAAW,UAAD,KAAK,wCAA0B,YAAY;AACiI,MAAtL,AAAW,UAAD,KAAK,wCAA0B,qBAAqB,iDAA0C,AAAkB,iCAAU,AAA0C,yBAA7B,qCAA+B;IAClL;;;QAhEgB;QACT;QACC;UACI,AAAS,QAAD;IACL,kBAAE,QAAQ;IACD,2BAAE,iBAAiB;AAN3C;AAOgB,IAAd,aAAQ,MAAM;EAChB;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgFqB;IAAS;iBAGZ;AAChB,YAAO,AAAM,KAAD;AACZ,UAAI,AAAM,KAAD,KAAI,iBACX;AACe,MAAjB,kBAAY,KAAK;AACsB,MAAvC;IACF;;AAIE,YAAO,AAAM;AACmC,MAA3C,AAAE,eAAP,mBAAc,mCAA6B;AAC3C,WAAK;AACuB,QAA1B,gBAAgB,AAAE,eAAP;;AAEmB,QAA9B,gBAA0B;IAC9B;YAGiC;UAAyB;UAAkC;AAC1F,YAAiB,EAAT,iBAAkB,cACxB,MAAM,qBACY,gBAAgB,qBACf,iBAAiB;IAExC;oBAGyC;UAAyB;UAAkC;AAClG,YAGE,EAHM,iBACH,sBACe,AAAE,AAAc,eAA1B,AAAE,eAAP,sCAAiC,KAC5B,AAAE,eAAP,oBACD,MAAM,qBACY,gBAAgB,qBACf,iBAAiB;IAE1C;UAG2B,SAAgB;AACzC,UAAI,eACF;AACgC,MAAlC,AAAQ,OAAD,YAAiB,eAAL,aAAQ,MAAM;IACnC;8BAGmD;AACjD,UAAI,eACF;AACsC,MAAlC,gCAA0B,OAAO;IACzC;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AAC2B,MAA/D,AAAW,UAAD,KAAK,wCAA0B,YAAY;IACvD;;AAIE,UAAI,AAAM,oBACR,MAAwB;AAC1B,YAAwB,kCACjB,AAAE,eAAP,qCACQ,gBACC,gBAAgC,4CAAgC;IAG7E;;;QAtFO;QACS;UACJ,AAAS,QAAD;IACL,kBAAE,QAAQ;AAJzB;AAKgB,IAAd,aAAQ,MAAM;EAChB;;;;;;;;;;;;;;;;;kEAxPiC;;;;;;;;;;;;;;QAqVJ;QACtB;QACS;UACJ,AAAQ,OAAD;UACP,AAAuB,sBAAD;AALlC;AAMwB,IAAjB,eAAU,OAAO;AAC8B,IAA/C,8BAAyB,sBAAsB;AACtC,IAAd,aAAQ,MAAM;EAChB","file":"../../../../../../../../../../packages/flutter/src/rendering/proxy_sliver.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__proxy_sliver: proxy_sliver
  };
}));

//# sourceMappingURL=proxy_sliver.dart.lib.js.map
