define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/vector_math/vector_math_64.dart'], (function load__packages__flutter__src__rendering__rotated_box_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__vector_math__vector_math_64$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const layer = packages__flutter__src__rendering__layer$46dart.src__rendering__layer;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  const vector_math_64 = packages__vector_math__vector_math_64$46dart.vector_math_64;
  var rotated_box = Object.create(dart.library);
  var $isOdd = dartx.isOdd;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  var T = {
    LayerHandleOfTransformLayer: () => (T.LayerHandleOfTransformLayer = dart.constFn(layer.LayerHandle$(layer.TransformLayer)))(),
    BoxHitTestResultAndOffsetTobool: () => (T.BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/rotated_box.dart",
    "package:flutter/src/rendering/rotated_box.dart"
  ];
  var _paintTransform = dart.privateName(rotated_box, "_paintTransform");
  var _transformLayer = dart.privateName(rotated_box, "_transformLayer");
  var _quarterTurns = dart.privateName(rotated_box, "_quarterTurns");
  var _isVertical = dart.privateName(rotated_box, "_isVertical");
  var _paintChild = dart.privateName(rotated_box, "_paintChild");
  const RenderBox_RenderObjectWithChildMixin$36 = class RenderBox_RenderObjectWithChildMixin extends box.RenderBox {};
  (RenderBox_RenderObjectWithChildMixin$36.new = function() {
    object.RenderObjectWithChildMixin$(box.RenderBox)[dart.mixinNew].call(this);
    RenderBox_RenderObjectWithChildMixin$36.__proto__.new.call(this);
  }).prototype = RenderBox_RenderObjectWithChildMixin$36.prototype;
  dart.applyMixin(RenderBox_RenderObjectWithChildMixin$36, object.RenderObjectWithChildMixin$(box.RenderBox));
  rotated_box.RenderRotatedBox = class RenderRotatedBox extends RenderBox_RenderObjectWithChildMixin$36 {
    static ['_#new#tearOff'](opts) {
      let quarterTurns = opts && 'quarterTurns' in opts ? opts.quarterTurns : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new rotated_box.RenderRotatedBox.new({quarterTurns: quarterTurns, child: child});
    }
    get quarterTurns() {
      return this[_quarterTurns];
    }
    set quarterTurns(value) {
      if (!(value !== null)) dart.assertFailed(null, I[0], 36, 12, "value != null");
      if (this[_quarterTurns] === value) return;
      this[_quarterTurns] = value;
      this.markNeedsLayout();
    }
    get [_isVertical]() {
      return this.quarterTurns[$isOdd];
    }
    computeMinIntrinsicWidth(height) {
      if (this.child == null) return 0.0;
      return this[_isVertical] ? dart.nullCheck(this.child).getMinIntrinsicHeight(height) : dart.nullCheck(this.child).getMinIntrinsicWidth(height);
    }
    computeMaxIntrinsicWidth(height) {
      if (this.child == null) return 0.0;
      return this[_isVertical] ? dart.nullCheck(this.child).getMaxIntrinsicHeight(height) : dart.nullCheck(this.child).getMaxIntrinsicWidth(height);
    }
    computeMinIntrinsicHeight(width) {
      if (this.child == null) return 0.0;
      return this[_isVertical] ? dart.nullCheck(this.child).getMinIntrinsicWidth(width) : dart.nullCheck(this.child).getMinIntrinsicHeight(width);
    }
    computeMaxIntrinsicHeight(width) {
      if (this.child == null) return 0.0;
      return this[_isVertical] ? dart.nullCheck(this.child).getMaxIntrinsicWidth(width) : dart.nullCheck(this.child).getMaxIntrinsicHeight(width);
    }
    computeDryLayout(constraints) {
      if (this.child == null) {
        return constraints.smallest;
      }
      let childSize = dart.nullCheck(this.child).getDryLayout(this[_isVertical] ? constraints.flipped : constraints);
      return this[_isVertical] ? new ui.Size.new(childSize.height, childSize.width) : childSize;
    }
    performLayout() {
      let t0;
      this[_paintTransform] = null;
      if (this.child != null) {
        dart.nullCheck(this.child).layout(this[_isVertical] ? this.constraints.flipped : this.constraints, {parentUsesSize: true});
        this.size = this[_isVertical] ? new ui.Size.new(dart.nullCheck(this.child).size.height, dart.nullCheck(this.child).size.width) : dart.nullCheck(this.child).size;
        this[_paintTransform] = (t0 = vector_math_64.Matrix4.identity(), (() => {
          t0.translate(this.size.width / 2.0, this.size.height / 2.0);
          t0.rotateZ(1.5707963267948966 * this.quarterTurns[$modulo](4));
          t0.translate(-dart.nullCheck(this.child).size.width / 2.0, -dart.nullCheck(this.child).size.height / 2.0);
          return t0;
        })());
      } else {
        this.size = this.constraints.smallest;
      }
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      if (!(this[_paintTransform] != null || this.debugNeedsLayout || this.child == null)) dart.assertFailed(null, I[0], 101, 12, "_paintTransform != null || debugNeedsLayout || child == null");
      if (this.child == null || this[_paintTransform] == null) return false;
      return result.addWithPaintTransform({transform: this[_paintTransform], position: position, hitTest: dart.fn((result, position) => dart.nullCheck(this.child).hitTest(result, {position: position}), T.BoxHitTestResultAndOffsetTobool())});
    }
    [_paintChild](context, offset) {
      context.paintChild(dart.nullCheck(this.child), offset);
    }
    paint(context, offset) {
      if (this.child != null) {
        this[_transformLayer].layer = context.pushTransform(this.needsCompositing, offset, dart.nullCheck(this[_paintTransform]), dart.bind(this, _paintChild), {oldLayer: this[_transformLayer].layer});
      } else {
        this[_transformLayer].layer = null;
      }
    }
    dispose() {
      this[_transformLayer].layer = null;
      super.dispose();
    }
    applyPaintTransform(child, transform) {
      box.RenderBox.as(child);
      if (this[_paintTransform] != null) transform.multiply(dart.nullCheck(this[_paintTransform]));
      super.applyPaintTransform(child, transform);
    }
  };
  (rotated_box.RenderRotatedBox.new = function(opts) {
    let quarterTurns = opts && 'quarterTurns' in opts ? opts.quarterTurns : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_paintTransform] = null;
    this[_transformLayer] = new (T.LayerHandleOfTransformLayer()).new();
    if (!(quarterTurns !== null)) dart.assertFailed(null, I[0], 27, 15, "quarterTurns != null");
    this[_quarterTurns] = quarterTurns;
    rotated_box.RenderRotatedBox.__proto__.new.call(this);
    this.child = child;
  }).prototype = rotated_box.RenderRotatedBox.prototype;
  dart.addTypeTests(rotated_box.RenderRotatedBox);
  dart.addTypeCaches(rotated_box.RenderRotatedBox);
  dart.setMethodSignature(rotated_box.RenderRotatedBox, () => ({
    __proto__: dart.getMethods(rotated_box.RenderRotatedBox.__proto__),
    [_paintChild]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset])
  }));
  dart.setGetterSignature(rotated_box.RenderRotatedBox, () => ({
    __proto__: dart.getGetters(rotated_box.RenderRotatedBox.__proto__),
    quarterTurns: core.int,
    [_isVertical]: core.bool
  }));
  dart.setSetterSignature(rotated_box.RenderRotatedBox, () => ({
    __proto__: dart.getSetters(rotated_box.RenderRotatedBox.__proto__),
    quarterTurns: core.int
  }));
  dart.setLibraryUri(rotated_box.RenderRotatedBox, I[1]);
  dart.setFieldSignature(rotated_box.RenderRotatedBox, () => ({
    __proto__: dart.getFields(rotated_box.RenderRotatedBox.__proto__),
    [_quarterTurns]: dart.fieldType(core.int),
    [_paintTransform]: dart.fieldType(dart.nullable(vector_math_64.Matrix4)),
    [_transformLayer]: dart.finalFieldType(layer.LayerHandle$(layer.TransformLayer))
  }));
  dart.defineLazy(rotated_box, {
    /*rotated_box._kQuarterTurnsInRadians*/get _kQuarterTurnsInRadians() {
      return 1.5707963267948966;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/rotated_box.dart", {
    "package:flutter/src/rendering/rotated_box.dart": rotated_box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rotated_box.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgC0B;IAAa;qBAEhB;AACnB,YAAO,AAAM,KAAD;AACZ,UAAI,AAAc,wBAAG,KAAK,EACxB;AACmB,MAArB,sBAAgB,KAAK;AACJ,MAAjB;IACF;;AAEwB,YAAA,AAAa;IAAK;6BAGH;AACrC,UAAI,AAAM,oBACR,MAAO;AACT,YAAO,qBAAmB,AAAE,eAAP,kCAA6B,MAAM,IAAS,AAAE,eAAP,iCAA4B,MAAM;IAChG;6BAGuC;AACrC,UAAI,AAAM,oBACR,MAAO;AACT,YAAO,qBAAmB,AAAE,eAAP,kCAA6B,MAAM,IAAS,AAAE,eAAP,iCAA4B,MAAM;IAChG;8BAGwC;AACtC,UAAI,AAAM,oBACR,MAAO;AACT,YAAO,qBAAmB,AAAE,eAAP,iCAA4B,KAAK,IAAS,AAAE,eAAP,kCAA6B,KAAK;IAC9F;8BAGwC;AACtC,UAAI,AAAM,oBACR,MAAO;AACT,YAAO,qBAAmB,AAAE,eAAP,iCAA4B,KAAK,IAAS,AAAE,eAAP,kCAA6B,KAAK;IAC9F;qBAKqC;AACnC,UAAI,AAAM;AACR,cAAO,AAAY,YAAD;;AAET,sBAAiB,AAAE,eAAP,yBAAoB,oBAAc,AAAY,WAAD,WAAW,WAAW;AAC1F,YAAO,qBAAc,gBAAK,AAAU,SAAD,SAAS,AAAU,SAAD,UAAU,SAAS;IAC1E;;;AAIwB,MAAtB,wBAAkB;AAClB,UAAI;AACkF,QAA/E,AAAE,eAAP,mBAAc,oBAAc,AAAY,2BAAU,mCAA6B;AACD,QAA9E,YAAO,oBAAc,gBAAU,AAAE,AAAK,eAAZ,yBAAyB,AAAE,AAAK,eAAZ,0BAA0B,AAAE,eAAP;AAID,QAHlE,iEAA0B;AACtB,uBAAU,AAAK,AAAM,kBAAE,KAAK,AAAK,AAAO,mBAAE;AAC1C,qBAAgC,qBAAG,AAAa,2BAAE;AAClD,uBAAU,AAAmB,CAAb,AAAE,AAAK,eAAZ,yBAAoB,KAAK,AAAoB,CAAd,AAAE,AAAK,eAAZ,0BAAqB;;;;AAEnC,QAA3B,YAAO,AAAY;;IAEvB;oBAGsC;UAA0B;AAC9D,YAAO,AAA4C,iCAAjB,yBAAoB,AAAM;AAC5D,UAAI,AAAM,sBAAW,AAAgB,+BACnC,MAAO;AACT,YAAO,AAAO,OAAD,mCACA,iCACD,QAAQ,WACT,SAAkB,QAAe,aAC5B,AAAE,eAAP,oBAAe,MAAM,aAAY,QAAQ;IAGtD;kBAEiC,SAAgB;AACb,MAAlC,AAAQ,OAAD,YAAiB,eAAL,aAAQ,MAAM;IACnC;UAG2B,SAAgB;AACzC,UAAI;AAOD,QAND,AAAgB,8BAAQ,AAAQ,OAAD,eAC7B,uBACA,MAAM,EACS,eAAf,kCACA,+BACU,AAAgB;;AAGA,QAA5B,AAAgB,8BAAQ;;IAE5B;;AAM8B,MAA5B,AAAgB,8BAAQ;AACT,MAAT;IACR;wBAGmC,OAAe;;AAChD,UAAI,+BACF,AAAU,AAA0B,SAA3B,UAAyB,eAAf;AACsB,MAArC,0BAAoB,KAAK,EAAE,SAAS;IAC5C;;;QAxHe;QACF;IA+CJ;IA2DyB,wBAAkB;UAzGxC,AAAa,YAAD;IACL,sBAAE,YAAY;AAJjC;AAKoB,IAAb,aAAQ,KAAK;EACpB;;;;;;;;;;;;;;;;;;;;;;;;MAjBW,mCAAuB","file":"../../../../../../../../../../packages/flutter/src/rendering/rotated_box.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__rotated_box: rotated_box
  };
}));

//# sourceMappingURL=rotated_box.dart.lib.js.map
