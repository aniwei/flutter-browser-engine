define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart'], (function load__packages__flutter__src__widgets__preferred_size_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  var preferred_size = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "PreferredSize",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/preferred_size.dart"
      });
    }
  }, false);
  var C = [void 0];
  var I = ["package:flutter/src/widgets/preferred_size.dart"];
  preferred_size.PreferredSizeWidget = class PreferredSizeWidget extends core.Object {};
  (preferred_size.PreferredSizeWidget.new = function() {
    ;
  }).prototype = preferred_size.PreferredSizeWidget.prototype;
  dart.addTypeTests(preferred_size.PreferredSizeWidget);
  dart.addTypeCaches(preferred_size.PreferredSizeWidget);
  preferred_size.PreferredSizeWidget[dart.implements] = () => [framework.Widget];
  dart.setLibraryUri(preferred_size.PreferredSizeWidget, I[0]);
  var child$ = dart.privateName(preferred_size, "PreferredSize.child");
  var preferredSize$ = dart.privateName(preferred_size, "PreferredSize.preferredSize");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  preferred_size.PreferredSize = class PreferredSize extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get preferredSize() {
      return this[preferredSize$];
    }
    set preferredSize(value) {
      super.preferredSize = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let preferredSize = opts && 'preferredSize' in opts ? opts.preferredSize : null;
      return new preferred_size.PreferredSize.new({key: key, child: child, preferredSize: preferredSize, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      return this.child;
    }
  };
  (preferred_size.PreferredSize.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let preferredSize = opts && 'preferredSize' in opts ? opts.preferredSize : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[preferredSize$] = preferredSize;
    preferred_size.PreferredSize.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = preferred_size.PreferredSize.prototype;
  dart.addTypeTests(preferred_size.PreferredSize);
  dart.addTypeCaches(preferred_size.PreferredSize);
  preferred_size.PreferredSize[dart.implements] = () => [preferred_size.PreferredSizeWidget];
  dart.setMethodSignature(preferred_size.PreferredSize, () => ({
    __proto__: dart.getMethods(preferred_size.PreferredSize.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(preferred_size.PreferredSize, I[0]);
  dart.setFieldSignature(preferred_size.PreferredSize, () => ({
    __proto__: dart.getFields(preferred_size.PreferredSize.__proto__),
    child: dart.finalFieldType(framework.Widget),
    preferredSize: dart.finalFieldType(ui.Size)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/preferred_size.dart", {
    "package:flutter/src/widgets/preferred_size.dart": preferred_size
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["preferred_size.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAoCA;;;;;;;;;;;;IA0Ce;;;;;;IAGF;;;;;;;;;;;;UAGe;AAAY;IAAK;;;QAdpC;QACS;QACA;;IADA;IACA;AACX,gEAAW,GAAG;;EAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/preferred_size.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__preferred_size: preferred_size
  };
}));

//# sourceMappingURL=preferred_size.dart.lib.js.map
