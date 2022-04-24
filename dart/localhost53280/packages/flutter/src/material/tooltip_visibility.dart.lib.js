define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart'], (function load__packages__flutter__src__material__tooltip_visibility_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  var tooltip_visibility = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TooltipVisibilityScope",
        [_Location_column]: 9,
        [_Location_line]: 8,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/tooltip_visibility.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "TooltipVisibility",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/tooltip_visibility.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_TooltipVisibilityScope",
        [_Location_column]: 12,
        [_Location_line]: 58,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/material/tooltip_visibility.dart"
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:flutter/src/material/tooltip_visibility.dart"];
  var visible$ = dart.privateName(tooltip_visibility, "_TooltipVisibilityScope.visible");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  tooltip_visibility._TooltipVisibilityScope = class _TooltipVisibilityScope extends framework.InheritedWidget {
    get visible() {
      return this[visible$];
    }
    set visible(value) {
      super.visible = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      return new tooltip_visibility._TooltipVisibilityScope.new({key: key, child: child, visible: visible, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    updateShouldNotify(old) {
      tooltip_visibility._TooltipVisibilityScope.as(old);
      return old.visible !== this.visible;
    }
  };
  (tooltip_visibility._TooltipVisibilityScope.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let visible = opts && 'visible' in opts ? opts.visible : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[visible$] = visible;
    tooltip_visibility._TooltipVisibilityScope.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tooltip_visibility._TooltipVisibilityScope.prototype;
  dart.addTypeTests(tooltip_visibility._TooltipVisibilityScope);
  dart.addTypeCaches(tooltip_visibility._TooltipVisibilityScope);
  dart.setMethodSignature(tooltip_visibility._TooltipVisibilityScope, () => ({
    __proto__: dart.getMethods(tooltip_visibility._TooltipVisibilityScope.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(tooltip_visibility._TooltipVisibilityScope, I[0]);
  dart.setFieldSignature(tooltip_visibility._TooltipVisibilityScope, () => ({
    __proto__: dart.getFields(tooltip_visibility._TooltipVisibilityScope.__proto__),
    visible: dart.finalFieldType(core.bool)
  }));
  var child$ = dart.privateName(tooltip_visibility, "TooltipVisibility.child");
  var visible$0 = dart.privateName(tooltip_visibility, "TooltipVisibility.visible");
  tooltip_visibility.TooltipVisibility = class TooltipVisibility extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get visible() {
      return this[visible$0];
    }
    set visible(value) {
      super.visible = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let visible = opts && 'visible' in opts ? opts.visible : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new tooltip_visibility.TooltipVisibility.new({key: key, visible: visible, child: child, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
    }
    static of(context) {
      let t0, t0$;
      let visibility = context.dependOnInheritedWidgetOfExactType(tooltip_visibility._TooltipVisibilityScope);
      t0$ = (t0 = visibility, t0 == null ? null : t0.visible);
      return t0$ == null ? true : t0$;
    }
    build(context) {
      return new tooltip_visibility._TooltipVisibilityScope.new({visible: this.visible, child: this.child, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
    }
  };
  (tooltip_visibility.TooltipVisibility.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let visible = opts && 'visible' in opts ? opts.visible : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[visible$0] = visible;
    this[child$] = child;
    tooltip_visibility.TooltipVisibility.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tooltip_visibility.TooltipVisibility.prototype;
  dart.addTypeTests(tooltip_visibility.TooltipVisibility);
  dart.addTypeCaches(tooltip_visibility.TooltipVisibility);
  dart.setMethodSignature(tooltip_visibility.TooltipVisibility, () => ({
    __proto__: dart.getMethods(tooltip_visibility.TooltipVisibility.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setStaticMethodSignature(tooltip_visibility.TooltipVisibility, () => ['of']);
  dart.setLibraryUri(tooltip_visibility.TooltipVisibility, I[0]);
  dart.setFieldSignature(tooltip_visibility.TooltipVisibility, () => ({
    __proto__: dart.getFields(tooltip_visibility.TooltipVisibility.__proto__),
    child: dart.finalFieldType(framework.Widget),
    visible: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter/src/material/tooltip_visibility.dart", {
    "package:flutter/src/material/tooltip_visibility.dart": tooltip_visibility
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tooltip_visibility.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAaa;;;;;;;;;;;;uBAGqC;;AAC9C,YAAO,AAAI,AAAQ,IAAT,aAAY;IACxB;;;QAVO;QACW;QACF;;;AACX,8EAAW,GAAG,SAAS,KAAK;;EAAC;;;;;;;;;;;;;;;IAgCrB;;;;;;IAGF;;;;;;;;;;;;cAIiB;;AACK,uBAAa,AAAQ,OAAD;AACnD,kBAAO,UAAU,eAAV,OAAY;YAAZ,eAAuB;IAChC;UAG0B;AACxB,YAAO,8DACI,qBACF;IAEX;;;QA7BO;QACS;QACA;;IADA;IACA;AACX,wEAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/material/tooltip_visibility.dart.lib.js"}');
  // Exports:
  return {
    src__material__tooltip_visibility: tooltip_visibility
  };
}));

//# sourceMappingURL=tooltip_visibility.dart.lib.js.map
