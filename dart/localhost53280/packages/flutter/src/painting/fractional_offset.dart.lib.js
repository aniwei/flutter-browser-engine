define(['dart_sdk', 'packages/flutter/src/painting/alignment.dart'], (function load__packages__flutter__src__painting__fractional_offset_dart(dart_sdk, packages__flutter__src__painting__alignment$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting__alignment$46dart.src__painting__alignment;
  var fractional_offset = Object.create(dart.library);
  var $truncate = dartx.truncate;
  var $toDouble = dartx.toDouble;
  var $modulo = dartx['%'];
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: -1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: -1,
        [Alignment_x]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: -1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: -1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 0
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: fractional_offset.FractionalOffset.prototype,
        [Alignment_y]: 1,
        [Alignment_x]: 1
      });
    }
  }, false);
  var C = Array(9).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/fractional_offset.dart",
    "package:flutter/src/painting/fractional_offset.dart"
  ];
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  fractional_offset.FractionalOffset = class FractionalOffset extends alignment.Alignment {
    static ['_#new#tearOff'](dx, dy) {
      return new fractional_offset.FractionalOffset.new(dx, dy);
    }
    static fromOffsetAndSize(offset, size) {
      if (!(size !== null)) dart.assertFailed(null, I[0], 69, 12, "size != null");
      if (!(offset !== null)) dart.assertFailed(null, I[0], 70, 12, "offset != null");
      return new fractional_offset.FractionalOffset.new(offset.dx / size.width, offset.dy / size.height);
    }
    static ['_#fromOffsetAndSize#tearOff'](offset, size) {
      return fractional_offset.FractionalOffset.fromOffsetAndSize(offset, size);
    }
    static fromOffsetAndRect(offset, rect) {
      return fractional_offset.FractionalOffset.fromOffsetAndSize(offset['-'](rect.topLeft), rect.size);
    }
    static ['_#fromOffsetAndRect#tearOff'](offset, rect) {
      return fractional_offset.FractionalOffset.fromOffsetAndRect(offset, rect);
    }
    get dx() {
      return (this.x + 1.0) / 2.0;
    }
    get dy() {
      return (this.y + 1.0) / 2.0;
    }
    ['-'](other) {
      if (!fractional_offset.FractionalOffset.is(other)) return super['-'](other);
      return new fractional_offset.FractionalOffset.new(this.dx - other.dx, this.dy - other.dy);
    }
    ['+'](other) {
      if (!fractional_offset.FractionalOffset.is(other)) return super['+'](other);
      return new fractional_offset.FractionalOffset.new(this.dx + other.dx, this.dy + other.dy);
    }
    _negate() {
      return new fractional_offset.FractionalOffset.new(-this.dx, -this.dy);
    }
    ['*'](other) {
      return new fractional_offset.FractionalOffset.new(this.dx * other, this.dy * other);
    }
    ['/'](other) {
      return new fractional_offset.FractionalOffset.new(this.dx / other, this.dy / other);
    }
    ['~/'](other) {
      return new fractional_offset.FractionalOffset.new((this.dx / other)[$truncate]()[$toDouble](), (this.dy / other)[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new fractional_offset.FractionalOffset.new(this.dx[$modulo](other), this.dy[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t !== null)) dart.assertFailed(null, I[0], 182, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new fractional_offset.FractionalOffset.new(dart.nullCheck(ui.lerpDouble(0.5, dart.nullCheck(b).dx, t)), dart.nullCheck(ui.lerpDouble(0.5, b.dy, t)));
      if (b == null) return new fractional_offset.FractionalOffset.new(dart.nullCheck(ui.lerpDouble(a.dx, 0.5, t)), dart.nullCheck(ui.lerpDouble(a.dy, 0.5, t)));
      return new fractional_offset.FractionalOffset.new(dart.nullCheck(ui.lerpDouble(a.dx, b.dx, t)), dart.nullCheck(ui.lerpDouble(a.dy, b.dy, t)));
    }
    toString() {
      return "FractionalOffset(" + this.dx[$toStringAsFixed](1) + ", " + this.dy[$toStringAsFixed](1) + ")";
    }
  };
  (fractional_offset.FractionalOffset.new = function(dx, dy) {
    if (!(dx !== null)) dart.assertFailed(null, I[0], 60, 14, "dx != null");
    if (!(dy !== null)) dart.assertFailed(null, I[0], 61, 14, "dy != null");
    fractional_offset.FractionalOffset.__proto__.new.call(this, dx * 2.0 - 1.0, dy * 2.0 - 1.0);
    ;
  }).prototype = fractional_offset.FractionalOffset.prototype;
  dart.addTypeTests(fractional_offset.FractionalOffset);
  dart.addTypeCaches(fractional_offset.FractionalOffset);
  dart.setMethodSignature(fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getMethods(fractional_offset.FractionalOffset.__proto__),
    _negate: dart.fnType(fractional_offset.FractionalOffset, []),
    '*': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '/': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '~/': dart.fnType(fractional_offset.FractionalOffset, [core.double]),
    '%': dart.fnType(fractional_offset.FractionalOffset, [core.double])
  }));
  dart.setStaticMethodSignature(fractional_offset.FractionalOffset, () => ['fromOffsetAndSize', 'fromOffsetAndRect', 'lerp']);
  dart.setGetterSignature(fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getGetters(fractional_offset.FractionalOffset.__proto__),
    dx: core.double,
    dy: core.double
  }));
  dart.setLibraryUri(fractional_offset.FractionalOffset, I[1]);
  dart.setStaticFieldSignature(fractional_offset.FractionalOffset, () => ['topLeft', 'topCenter', 'topRight', 'centerLeft', 'center', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight']);
  dart.defineExtensionMethods(fractional_offset.FractionalOffset, ['toString']);
  dart.defineLazy(fractional_offset.FractionalOffset, {
    /*fractional_offset.FractionalOffset.topLeft*/get topLeft() {
      return C[0] || CT.C0;
    },
    /*fractional_offset.FractionalOffset.topCenter*/get topCenter() {
      return C[1] || CT.C1;
    },
    /*fractional_offset.FractionalOffset.topRight*/get topRight() {
      return C[2] || CT.C2;
    },
    /*fractional_offset.FractionalOffset.centerLeft*/get centerLeft() {
      return C[3] || CT.C3;
    },
    /*fractional_offset.FractionalOffset.center*/get center() {
      return C[4] || CT.C4;
    },
    /*fractional_offset.FractionalOffset.centerRight*/get centerRight() {
      return C[5] || CT.C5;
    },
    /*fractional_offset.FractionalOffset.bottomLeft*/get bottomLeft() {
      return C[6] || CT.C6;
    },
    /*fractional_offset.FractionalOffset.bottomCenter*/get bottomCenter() {
      return C[7] || CT.C7;
    },
    /*fractional_offset.FractionalOffset.bottomRight*/get bottomRight() {
      return C[8] || CT.C8;
    }
  }, false);
  dart.trackLibraries("packages/flutter/src/painting/fractional_offset.dart", {
    "package:flutter/src/painting/fractional_offset.dart": fractional_offset
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fractional_offset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6BAmEoD,QAAa;AAC7D,YAAO,AAAK,IAAD;AACX,YAAO,AAAO,MAAD;AACb,YAAO,4CACL,AAAO,AAAG,MAAJ,MAAM,AAAK,IAAD,QAChB,AAAO,AAAG,MAAJ,MAAM,AAAK,IAAD;IAEpB;;;;6BAWkD,QAAa;AAC7D,YAAwB,sDACtB,AAAO,MAAD,MAAG,AAAK,IAAD,WACb,AAAK,IAAD;IAER;;;;;AASiB,YAAU,EAAT,AAAE,SAAE,OAAO;IAAG;;AAQf,YAAU,EAAT,AAAE,SAAE,OAAO;IAAG;UA8BD;AAC7B,WAAU,sCAAN,KAAK,GACP,MAAa,YAAE,KAAK;AACtB,YAAO,4CAAiB,AAAG,UAAE,AAAM,KAAD,KAAK,AAAG,UAAE,AAAM,KAAD;IACnD;UAG+B;AAC7B,WAAU,sCAAN,KAAK,GACP,MAAa,YAAE,KAAK;AACtB,YAAO,4CAAiB,AAAG,UAAE,AAAM,KAAD,KAAK,AAAG,UAAE,AAAM,KAAD;IACnD;;AAIE,YAAO,4CAAiB,CAAC,SAAI,CAAC;IAChC;UAGmC;AACjC,YAAO,4CAAiB,AAAG,UAAE,KAAK,EAAE,AAAG,UAAE,KAAK;IAChD;UAGmC;AACjC,YAAO,4CAAiB,AAAG,UAAE,KAAK,EAAE,AAAG,UAAE,KAAK;IAChD;WAGoC;AAClC,YAAO,4CAAqB,AAAU,CAAb,UAAM,KAAK,6BAAkB,AAAU,CAAb,UAAM,KAAK;IAChE;UAGmC;AACjC,YAAO,4CAAiB,AAAG,iBAAE,KAAK,GAAE,AAAG,iBAAE,KAAK;IAChD;gBAOgD,GAAqB,GAAU;AAC7E,YAAO,AAAE,CAAD;AACR,UAAI,AAAE,CAAD,YAAY,AAAE,CAAD,UAChB,MAAO;AACT,UAAI,AAAE,CAAD,UACH,MAAO,4CAA6C,eAAzB,cAAW,KAAM,AAAE,eAAH,CAAC,MAAM,CAAC,IAA+B,eAAxB,cAAW,KAAK,AAAE,CAAD,KAAK,CAAC;AACnF,UAAI,AAAE,CAAD,UACH,MAAO,4CAA4C,eAAxB,cAAW,AAAE,CAAD,KAAK,KAAK,CAAC,IAA+B,eAAxB,cAAW,AAAE,CAAD,KAAK,KAAK,CAAC;AAClF,YAAO,4CAA6C,eAAzB,cAAW,AAAE,CAAD,KAAK,AAAE,CAAD,KAAK,CAAC,IAAgC,eAAzB,cAAW,AAAE,CAAD,KAAK,AAAE,CAAD,KAAK,CAAC;IACpF;;AAIE,YAAO,uBAAoB,AAAG,0BAAgB,KAAG,OACtB,AAAG,0BAAgB,KAAG;IACnD;;qDAzI8B,IAAW;UAC9B,AAAG,EAAD;UACF,AAAG,EAAD;AACT,gEAAM,AAAG,AAAM,EAAP,GAAG,MAAM,KAAK,AAAG,AAAM,EAAP,GAAG,MAAM;;EAAI;;;;;;;;;;;;;;;;;;;;;MAiDX,0CAAO;;;MAGP,4CAAS;;;MAGT,2CAAQ;;;MAGR,6CAAU;;;MAGV,yCAAM;;;MAGN,8CAAW;;;MAGX,6CAAU;;;MAGV,+CAAY;;;MAGZ,8CAAW","file":"../../../../../../../../../../packages/flutter/src/painting/fractional_offset.dart.lib.js"}');
  // Exports:
  return {
    src__painting__fractional_offset: fractional_offset
  };
}));

//# sourceMappingURL=fractional_offset.dart.lib.js.map
