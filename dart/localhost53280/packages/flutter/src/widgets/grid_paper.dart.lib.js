define(['dart_sdk', 'packages/flutter/src/rendering/custom_paint.dart', 'packages/flutter/src/widgets/widget_inspector.dart'], (function load__packages__flutter__src__widgets__grid_paper_dart(dart_sdk, packages__flutter__src__rendering__custom_paint$46dart, packages__flutter__src__widgets__widget_inspector$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const custom_paint = packages__flutter__src__rendering__custom_paint$46dart.src__rendering__custom_paint;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  var grid_paper = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 2143545587
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "GridPaper",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/grid_paper.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomPaint",
        [_Location_column]: 12,
        [_Location_line]: 108,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/grid_paper.dart"
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "package:flutter/src/widgets/grid_paper.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/grid_paper.dart"
  ];
  var color$ = dart.privateName(grid_paper, "_GridPaperPainter.color");
  var interval$ = dart.privateName(grid_paper, "_GridPaperPainter.interval");
  var divisions$ = dart.privateName(grid_paper, "_GridPaperPainter.divisions");
  var subdivisions$ = dart.privateName(grid_paper, "_GridPaperPainter.subdivisions");
  grid_paper._GridPaperPainter = class _GridPaperPainter extends custom_paint.CustomPainter {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get interval() {
      return this[interval$];
    }
    set interval(value) {
      super.interval = value;
    }
    get divisions() {
      return this[divisions$];
    }
    set divisions(value) {
      super.divisions = value;
    }
    get subdivisions() {
      return this[subdivisions$];
    }
    set subdivisions(value) {
      super.subdivisions = value;
    }
    static ['_#new#tearOff'](opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let interval = opts && 'interval' in opts ? opts.interval : null;
      let divisions = opts && 'divisions' in opts ? opts.divisions : null;
      let subdivisions = opts && 'subdivisions' in opts ? opts.subdivisions : null;
      return new grid_paper._GridPaperPainter.new({color: color, interval: interval, divisions: divisions, subdivisions: subdivisions});
    }
    paint(canvas, size) {
      let t0;
      let linePaint = (t0 = ui.Paint.new(), (() => {
        t0.color = this.color;
        return t0;
      })());
      let allDivisions = (this.divisions * this.subdivisions)[$toDouble]();
      for (let x = 0.0; x <= size.width; x = x + this.interval / allDivisions) {
        linePaint.strokeWidth = x[$modulo](this.interval) === 0.0 ? 1.0 : x[$modulo](this.interval / this.subdivisions) === 0.0 ? 0.5 : 0.25;
        canvas.drawLine(new ui.Offset.new(x, 0.0), new ui.Offset.new(x, size.height), linePaint);
      }
      for (let y = 0.0; y <= size.height; y = y + this.interval / allDivisions) {
        linePaint.strokeWidth = y[$modulo](this.interval) === 0.0 ? 1.0 : y[$modulo](this.interval / this.subdivisions) === 0.0 ? 0.5 : 0.25;
        canvas.drawLine(new ui.Offset.new(0.0, y), new ui.Offset.new(size.width, y), linePaint);
      }
    }
    shouldRepaint(oldPainter) {
      grid_paper._GridPaperPainter.as(oldPainter);
      return !oldPainter.color._equals(this.color) || oldPainter.interval !== this.interval || oldPainter.divisions !== this.divisions || oldPainter.subdivisions !== this.subdivisions;
    }
    hitTest(position) {
      return false;
    }
  };
  (grid_paper._GridPaperPainter.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let interval = opts && 'interval' in opts ? opts.interval : null;
    let divisions = opts && 'divisions' in opts ? opts.divisions : null;
    let subdivisions = opts && 'subdivisions' in opts ? opts.subdivisions : null;
    this[color$] = color;
    this[interval$] = interval;
    this[divisions$] = divisions;
    this[subdivisions$] = subdivisions;
    grid_paper._GridPaperPainter.__proto__.new.call(this);
    ;
  }).prototype = grid_paper._GridPaperPainter.prototype;
  dart.addTypeTests(grid_paper._GridPaperPainter);
  dart.addTypeCaches(grid_paper._GridPaperPainter);
  dart.setMethodSignature(grid_paper._GridPaperPainter, () => ({
    __proto__: dart.getMethods(grid_paper._GridPaperPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [dart.nullable(core.Object)]),
    hitTest: dart.fnType(core.bool, [ui.Offset])
  }));
  dart.setLibraryUri(grid_paper._GridPaperPainter, I[0]);
  dart.setFieldSignature(grid_paper._GridPaperPainter, () => ({
    __proto__: dart.getFields(grid_paper._GridPaperPainter.__proto__),
    color: dart.finalFieldType(ui.Color),
    interval: dart.finalFieldType(core.double),
    divisions: dart.finalFieldType(core.int),
    subdivisions: dart.finalFieldType(core.int)
  }));
  var color$0 = dart.privateName(grid_paper, "GridPaper.color");
  var interval$0 = dart.privateName(grid_paper, "GridPaper.interval");
  var divisions$0 = dart.privateName(grid_paper, "GridPaper.divisions");
  var subdivisions$0 = dart.privateName(grid_paper, "GridPaper.subdivisions");
  var child$ = dart.privateName(grid_paper, "GridPaper.child");
  var Color_value = dart.privateName(ui, "Color.value");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  grid_paper.GridPaper = class GridPaper extends framework.StatelessWidget {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get interval() {
      return this[interval$0];
    }
    set interval(value) {
      super.interval = value;
    }
    get divisions() {
      return this[divisions$0];
    }
    set divisions(value) {
      super.divisions = value;
    }
    get subdivisions() {
      return this[subdivisions$0];
    }
    set subdivisions(value) {
      super.subdivisions = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let color = opts && 'color' in opts ? opts.color : C[0] || CT.C0;
      let interval = opts && 'interval' in opts ? opts.interval : 100;
      let divisions = opts && 'divisions' in opts ? opts.divisions : 2;
      let subdivisions = opts && 'subdivisions' in opts ? opts.subdivisions : 5;
      let child = opts && 'child' in opts ? opts.child : null;
      return new grid_paper.GridPaper.new({key: key, color: color, interval: interval, divisions: divisions, subdivisions: subdivisions, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    build(context) {
      return new basic.CustomPaint.new({foregroundPainter: new grid_paper._GridPaperPainter.new({color: this.color, interval: this.interval, divisions: this.divisions, subdivisions: this.subdivisions}), child: this.child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
  };
  (grid_paper.GridPaper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : C[0] || CT.C0;
    let interval = opts && 'interval' in opts ? opts.interval : 100;
    let divisions = opts && 'divisions' in opts ? opts.divisions : 2;
    let subdivisions = opts && 'subdivisions' in opts ? opts.subdivisions : 5;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$0] = color;
    this[interval$0] = interval;
    this[divisions$0] = divisions;
    this[subdivisions$0] = subdivisions;
    this[child$] = child;
    if (!(divisions > 0)) dart.assertFailed("The \"divisions\" property must be greater than zero. If there were no divisions, the grid paper would not paint anything.", I[1], 65, 15, "divisions > 0");
    if (!(subdivisions > 0)) dart.assertFailed("The \"subdivisions\" property must be greater than zero. If there were no subdivisions, the grid paper would not paint anything.", I[1], 66, 15, "subdivisions > 0");
    grid_paper.GridPaper.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = grid_paper.GridPaper.prototype;
  dart.addTypeTests(grid_paper.GridPaper);
  dart.addTypeCaches(grid_paper.GridPaper);
  dart.setMethodSignature(grid_paper.GridPaper, () => ({
    __proto__: dart.getMethods(grid_paper.GridPaper.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(grid_paper.GridPaper, I[0]);
  dart.setFieldSignature(grid_paper.GridPaper, () => ({
    __proto__: dart.getFields(grid_paper.GridPaper.__proto__),
    color: dart.finalFieldType(ui.Color),
    interval: dart.finalFieldType(core.double),
    divisions: dart.finalFieldType(core.int),
    subdivisions: dart.finalFieldType(core.int),
    child: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  dart.trackLibraries("packages/flutter/src/widgets/grid_paper.dart", {
    "package:flutter/src/widgets/grid_paper.dart": grid_paper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["grid_paper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAec;;;;;;IACC;;;;;;IACH;;;;;;IACA;;;;;;;;;;;;;UAGQ,QAAa;;AACjB,4CAAY;AACpB,mBAAQ;;;AACC,yBAA0C,CAA1B,AAAU,iBAAE;AACzC,eAAY,IAAI,KAAK,AAAE,CAAD,IAAI,AAAK,IAAD,QAAQ,IAAA,AAAE,CAAD,GAAI,AAAS,gBAAE,YAAY;AACyC,QAAzG,AAAU,SAAD,eAAgB,AAAE,AAAW,CAAZ,UAAG,mBAAY,MAAO,MAAO,AAAE,AAA4B,CAA7B,UAAI,AAAS,gBAAE,uBAAiB,MAAO,MAAM;AACnC,QAAlE,AAAO,MAAD,UAAU,kBAAO,CAAC,EAAE,MAAM,kBAAO,CAAC,EAAE,AAAK,IAAD,UAAU,SAAS;;AAEnE,eAAY,IAAI,KAAK,AAAE,CAAD,IAAI,AAAK,IAAD,SAAS,IAAA,AAAE,CAAD,GAAI,AAAS,gBAAE,YAAY;AACwC,QAAzG,AAAU,SAAD,eAAgB,AAAE,AAAW,CAAZ,UAAG,mBAAY,MAAO,MAAO,AAAE,AAA4B,CAA7B,UAAI,AAAS,gBAAE,uBAAiB,MAAO,MAAM;AACpC,QAAjE,AAAO,MAAD,UAAU,kBAAO,KAAK,CAAC,GAAG,kBAAO,AAAK,IAAD,QAAQ,CAAC,GAAG,SAAS;;IAEpE;kBAGqC;;AACnC,YAGI,EAHG,AAAW,UAAD,eAAU,eACpB,AAAW,UAAD,cAAa,iBACvB,AAAW,UAAD,eAAc,kBACxB,AAAW,UAAD,kBAAiB;IACpC;YAGoB;AAAa;IAAK;;;QAnCtB;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;AAJV;;EAKJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0DU;;;;;;IAKC;;;;;;IAaH;;;;;;IASA;;;;;;IAKI;;;;;;;;;;;;;;;UAGY;AACxB,YAAO,+CACc,6CACV,sBACG,0BACC,8BACG,4BAET;IAEX;;;QA1DO;QACA;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UACK,AAAU,SAAD,GAAG,sBAAG;UACf,AAAa,YAAD,GAAG,sBAAG;AACzB,wDAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/grid_paper.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__grid_paper: grid_paper
  };
}));

//# sourceMappingURL=grid_paper.dart.lib.js.map
