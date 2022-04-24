define(['dart_sdk', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/painting/edge_insets.dart'], (function load__packages__flutter__src__rendering__error_dart(dart_sdk, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__painting__edge_insets$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const edge_insets = packages__flutter__src__painting__edge_insets$46dart.src__painting__edge_insets;
  var error$ = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 100000,
        [OffsetBase__dx]: 100000
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4039164096.0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4035969024.0
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281348144.0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967142.0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 12,
        [EdgeInsets_right]: 64,
        [EdgeInsets_top]: 96,
        [EdgeInsets_left]: 64
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/rendering/error.dart",
    "package:flutter/src/rendering/error.dart"
  ];
  var message$ = dart.privateName(error$, "RenderErrorBox.message");
  var __RenderErrorBox__paragraph = dart.privateName(error$, "_#RenderErrorBox#_paragraph");
  var __RenderErrorBox__paragraph_isSet = dart.privateName(error$, "_#RenderErrorBox#_paragraph#isSet");
  var _paragraph = dart.privateName(error$, "_paragraph");
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var Color_value = dart.privateName(ui, "Color.value");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  error$.RenderErrorBox = class RenderErrorBox extends box.RenderBox {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    static ['_#new#tearOff'](message = "") {
      return new error$.RenderErrorBox.new(message);
    }
    get [_paragraph]() {
      return this[__RenderErrorBox__paragraph_isSet] ? this[__RenderErrorBox__paragraph] : dart.throw(new _internal.LateError.fieldNI("_paragraph"));
    }
    set [_paragraph](t1) {
      if (this[__RenderErrorBox__paragraph_isSet])
        dart.throw(new _internal.LateError.fieldAI("_paragraph"));
      else {
        this[__RenderErrorBox__paragraph_isSet] = true;
        this[__RenderErrorBox__paragraph] = t1;
      }
    }
    computeMaxIntrinsicWidth(height) {
      return 100000;
    }
    computeMaxIntrinsicHeight(width) {
      return 100000;
    }
    get sizedByParent() {
      return true;
    }
    hitTestSelf(position) {
      return true;
    }
    computeDryLayout(constraints) {
      return constraints.constrain(C[0] || CT.C0);
    }
    static _initBackgroundColor() {
      let result = C[1] || CT.C1;
      if (!dart.fn(() => {
        result = C[2] || CT.C2;
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 111, 12, "() {\n      result = const Color(0xF0900000);\n      return true;\n    }()");
      return result;
    }
    static _initTextStyle() {
      let result = ui.TextStyle.new({color: C[3] || CT.C3, fontFamily: "sans-serif", fontSize: 18.0});
      if (!dart.fn(() => {
        result = ui.TextStyle.new({color: C[4] || CT.C4, fontFamily: "monospace", fontSize: 14.0, fontWeight: ui.FontWeight.bold});
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 130, 12, "() {\n      result = ui.TextStyle(\n        color: const Color(0xFFFFFF66),\n        fontFamily: 'monospace',\n        fontSize: 14.0,\n        fontWeight: FontWeight.bold,\n      );\n      return true;\n    }()");
      return result;
    }
    paint(context, offset) {
      let t2;
      try {
        context.canvas.drawRect(offset['&'](this.size), (t2 = ui.Paint.new(), (() => {
          t2.color = error$.RenderErrorBox.backgroundColor;
          return t2;
        })()));
        if (this[_paragraph] != null) {
          let width = this.size.width;
          let left = 0.0;
          let top = 0.0;
          if (width > error$.RenderErrorBox.padding.left + error$.RenderErrorBox.minimumWidth + error$.RenderErrorBox.padding.right) {
            width = width - (error$.RenderErrorBox.padding.left + error$.RenderErrorBox.padding.right);
            left = left + error$.RenderErrorBox.padding.left;
          }
          dart.nullCheck(this[_paragraph]).layout(new ui.ParagraphConstraints.new({width: width}));
          if (this.size.height > error$.RenderErrorBox.padding.top + dart.nullCheck(this[_paragraph]).height + error$.RenderErrorBox.padding.bottom) {
            top = top + error$.RenderErrorBox.padding.top;
          }
          context.canvas.drawParagraph(dart.nullCheck(this[_paragraph]), offset['+'](new ui.Offset.new(left, top)));
        }
      } catch (e) {
        let error = dart.getThrown(e);
        if (core.Object.is(error)) {
        } else
          throw e;
      }
    }
  };
  (error$.RenderErrorBox.new = function(message = "") {
    this[__RenderErrorBox__paragraph] = null;
    this[__RenderErrorBox__paragraph_isSet] = false;
    this[message$] = message;
    error$.RenderErrorBox.__proto__.new.call(this);
    try {
      if (this.message !== "") {
        let builder = ui.ParagraphBuilder.new(error$.RenderErrorBox.paragraphStyle);
        builder.pushStyle(error$.RenderErrorBox.textStyle);
        builder.addText(this.message);
        this[_paragraph] = builder.build();
      } else {
        this[_paragraph] = null;
      }
    } catch (e) {
      let error = dart.getThrown(e);
      if (core.Object.is(error)) {
      } else
        throw e;
    }
  }).prototype = error$.RenderErrorBox.prototype;
  dart.addTypeTests(error$.RenderErrorBox);
  dart.addTypeCaches(error$.RenderErrorBox);
  dart.setStaticMethodSignature(error$.RenderErrorBox, () => ['_initBackgroundColor', '_initTextStyle']);
  dart.setGetterSignature(error$.RenderErrorBox, () => ({
    __proto__: dart.getGetters(error$.RenderErrorBox.__proto__),
    [_paragraph]: dart.nullable(ui.Paragraph)
  }));
  dart.setSetterSignature(error$.RenderErrorBox, () => ({
    __proto__: dart.getSetters(error$.RenderErrorBox.__proto__),
    [_paragraph]: dart.nullable(ui.Paragraph)
  }));
  dart.setLibraryUri(error$.RenderErrorBox, I[1]);
  dart.setFieldSignature(error$.RenderErrorBox, () => ({
    __proto__: dart.getFields(error$.RenderErrorBox.__proto__),
    message: dart.finalFieldType(core.String),
    [__RenderErrorBox__paragraph]: dart.fieldType(dart.nullable(ui.Paragraph)),
    [__RenderErrorBox__paragraph_isSet]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(error$.RenderErrorBox, () => ['padding', 'minimumWidth', 'backgroundColor', 'textStyle', 'paragraphStyle']);
  dart.defineLazy(error$.RenderErrorBox, {
    /*error$.RenderErrorBox.padding*/get padding() {
      return C[5] || CT.C5;
    },
    set padding(_) {},
    /*error$.RenderErrorBox.minimumWidth*/get minimumWidth() {
      return 200.0;
    },
    set minimumWidth(_) {},
    /*error$.RenderErrorBox.backgroundColor*/get backgroundColor() {
      return error$.RenderErrorBox._initBackgroundColor();
    },
    set backgroundColor(_) {},
    /*error$.RenderErrorBox.textStyle*/get textStyle() {
      return error$.RenderErrorBox._initTextStyle();
    },
    set textStyle(_) {},
    /*error$.RenderErrorBox.paragraphStyle*/get paragraphStyle() {
      return ui.ParagraphStyle.new({textDirection: ui.TextDirection.ltr, textAlign: ui.TextAlign.left});
    },
    set paragraphStyle(_) {}
  }, false);
  dart.defineLazy(error$, {
    /*error$._kMaxWidth*/get _kMaxWidth() {
      return 100000;
    },
    /*error$._kMaxHeight*/get _kMaxHeight() {
      return 100000;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/rendering/error.dart", {
    "package:flutter/src/rendering/error.dart": error$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["error.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0De;;;;;;;;;;AAEY;IAAU;;AAAV;;;;;;IAAU;6BAGI;AACrC;IACF;8BAGwC;AACtC;IACF;;AAG0B;IAAI;gBAGN;AAAa;IAAI;qBAGJ;AACnC,YAAO,AAAY,YAAD;IACpB;;AA4BQ;AACN,WAAO,AAGN;AAFiC,QAAhC;AACA,cAAO;;AAET,YAAO,OAAM;IACf;;AASe,mBAAY,oDAEX,wBACF;AAEZ,WAAO,AAQN;AAFE,QALD,SAAY,oDAEE,uBACF,kBACa;AAEzB,cAAO;;AAET,YAAO,OAAM;IACf;UAS2B,SAAgB;;AACzC;AAC4E,QAA1E,AAAQ,AAAO,OAAR,iBAAiB,AAAO,MAAD,MAAG,kCAAM;AAAW,qBAAQ;;;AAC1D,YAAI;AACK,sBAAQ,AAAK;AACb,qBAAO;AACP,oBAAM;AACb,cAAI,AAAM,KAAD,GAAG,AAAQ,AAAK,AAAe,qCAAb,qCAAe,AAAQ;AACX,YAArC,QAAA,AAAM,KAAD,IAAI,AAAQ,AAAK,qCAAE,AAAQ;AACZ,YAApB,OAAA,AAAK,IAAD,GAAI,AAAQ;;AAEuC,UAA/C,AAAE,eAAZ,yBAAsB,wCAA4B,KAAK;AACvD,cAAI,AAAK,AAAO,mBAAE,AAAQ,AAAI,AAAqB,oCAAT,AAAE,eAAZ,2BAAqB,AAAQ;AACzC,YAAlB,MAAA,AAAI,GAAD,GAAI,AAAQ;;AAEoD,UAArE,AAAQ,AAAO,OAAR,sBAAgC,eAAV,mBAAa,AAAO,MAAD,MAAG,kBAAO,IAAI,EAAE,GAAG;;;YAE9D;AAAP;;;;IAKJ;;wCA1IsB;wCA4BG;;IA5BH;AAAtB;AACE;AACE,UAAI,iBAAW;AASa,sBAAa,wBAAiB;AAC5B,QAA5B,AAAQ,OAAD,WAAW;AACM,QAAxB,AAAQ,OAAD,SAAS;AACY,QAA5B,mBAAa,AAAQ,OAAD;;AAEH,QAAjB,mBAAa;;;UAER;AAAP;;;;EAKJ;;;;;;;;;;;;;;;;;;;;;MAwCkB,6BAAO;;;;MAMX,kCAAY;YAAG;;;MAKhB,qCAAe;YAAG;;;MAeX,+BAAS;YAAG;;;MAqBP,oCAAc;YAAM,uCACd,iCACR;;;;;MAvIZ,iBAAU;;;MACV,kBAAW","file":"../../../../../../../../../../packages/flutter/src/rendering/error.dart.lib.js"}');
  // Exports:
  return {
    src__rendering__error: error$
  };
}));

//# sourceMappingURL=error.dart.lib.js.map
