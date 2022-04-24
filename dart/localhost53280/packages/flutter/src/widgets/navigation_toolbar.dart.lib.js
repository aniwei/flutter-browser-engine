define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/rendering/layer.dart', 'packages/flutter/src/rendering/custom_layout.dart'], (function load__packages__flutter__src__widgets__navigation_toolbar_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__rendering__layer$46dart, packages__flutter__src__rendering__custom_layout$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const debug = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__debug;
  const basic = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__basic;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const custom_layout = packages__flutter__src__rendering__custom_layout$46dart.src__rendering__custom_layout;
  var navigation_toolbar = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "NavigationToolbar",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutId",
        [_Location_column]: 30,
        [_Location_line]: 70,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutId",
        [_Location_column]: 29,
        [_Location_line]: 71,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "LayoutId",
        [_Location_column]: 31,
        [_Location_line]: 72,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "CustomMultiChildLayout",
        [_Location_column]: 12,
        [_Location_line]: 63,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: navigation_toolbar._ToolbarSlot.prototype,
        [_Enum__name]: "leading",
        [_Enum_index]: 0
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: navigation_toolbar._ToolbarSlot.prototype,
        [_Enum__name]: "middle",
        [_Enum_index]: 1
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: navigation_toolbar._ToolbarSlot.prototype,
        [_Enum__name]: "trailing",
        [_Enum_index]: 2
      });
    },
    get C8() {
      return C[8] = dart.constList([C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7], navigation_toolbar._ToolbarSlot);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "rtl",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_Enum__name]: "ltr",
        [_Enum_index]: 1
      });
    }
  }, false);
  var C = Array(11).fill(void 0);
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/navigation_toolbar.dart",
    "package:flutter/src/widgets/navigation_toolbar.dart"
  ];
  var leading$ = dart.privateName(navigation_toolbar, "NavigationToolbar.leading");
  var middle$ = dart.privateName(navigation_toolbar, "NavigationToolbar.middle");
  var trailing$ = dart.privateName(navigation_toolbar, "NavigationToolbar.trailing");
  var centerMiddle$ = dart.privateName(navigation_toolbar, "NavigationToolbar.centerMiddle");
  var middleSpacing$ = dart.privateName(navigation_toolbar, "NavigationToolbar.middleSpacing");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  navigation_toolbar.NavigationToolbar = class NavigationToolbar extends framework.StatelessWidget {
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get middle() {
      return this[middle$];
    }
    set middle(value) {
      super.middle = value;
    }
    get trailing() {
      return this[trailing$];
    }
    set trailing(value) {
      super.trailing = value;
    }
    get centerMiddle() {
      return this[centerMiddle$];
    }
    set centerMiddle(value) {
      super.centerMiddle = value;
    }
    get middleSpacing() {
      return this[middleSpacing$];
    }
    set middleSpacing(value) {
      super.middleSpacing = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let leading = opts && 'leading' in opts ? opts.leading : null;
      let middle = opts && 'middle' in opts ? opts.middle : null;
      let trailing = opts && 'trailing' in opts ? opts.trailing : null;
      let centerMiddle = opts && 'centerMiddle' in opts ? opts.centerMiddle : true;
      let middleSpacing = opts && 'middleSpacing' in opts ? opts.middleSpacing : 16;
      return new navigation_toolbar.NavigationToolbar.new({key: key, leading: leading, middle: middle, trailing: trailing, centerMiddle: centerMiddle, middleSpacing: middleSpacing, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      if (!debug.debugCheckHasDirectionality(context)) dart.assertFailed(null, I[0], 61, 12, "debugCheckHasDirectionality(context)");
      let textDirection = basic.Directionality.of(context);
      return new basic.CustomMultiChildLayout.new({delegate: new navigation_toolbar._ToolbarLayout.new({centerMiddle: this.centerMiddle, middleSpacing: this.middleSpacing, textDirection: textDirection}), children: (() => {
          let t0 = T.JSArrayOfWidget().of([]);
          if (this.leading != null) t0.push(new basic.LayoutId.new({id: navigation_toolbar._ToolbarSlot.leading, child: dart.nullCheck(this.leading), $creationLocationd_0dea112b090073317d4: C[1] || CT.C1}));
          if (this.middle != null) t0.push(new basic.LayoutId.new({id: navigation_toolbar._ToolbarSlot.middle, child: dart.nullCheck(this.middle), $creationLocationd_0dea112b090073317d4: C[2] || CT.C2}));
          if (this.trailing != null) t0.push(new basic.LayoutId.new({id: navigation_toolbar._ToolbarSlot.trailing, child: dart.nullCheck(this.trailing), $creationLocationd_0dea112b090073317d4: C[3] || CT.C3}));
          return t0;
        })(), $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
  };
  (navigation_toolbar.NavigationToolbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let middle = opts && 'middle' in opts ? opts.middle : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let centerMiddle = opts && 'centerMiddle' in opts ? opts.centerMiddle : true;
    let middleSpacing = opts && 'middleSpacing' in opts ? opts.middleSpacing : 16;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[leading$] = leading;
    this[middle$] = middle;
    this[trailing$] = trailing;
    this[centerMiddle$] = centerMiddle;
    this[middleSpacing$] = middleSpacing;
    if (!(centerMiddle !== null)) dart.assertFailed(null, I[0], 33, 15, "centerMiddle != null");
    if (!(middleSpacing !== null)) dart.assertFailed(null, I[0], 34, 15, "middleSpacing != null");
    navigation_toolbar.NavigationToolbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navigation_toolbar.NavigationToolbar.prototype;
  dart.addTypeTests(navigation_toolbar.NavigationToolbar);
  dart.addTypeCaches(navigation_toolbar.NavigationToolbar);
  dart.setMethodSignature(navigation_toolbar.NavigationToolbar, () => ({
    __proto__: dart.getMethods(navigation_toolbar.NavigationToolbar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navigation_toolbar.NavigationToolbar, I[1]);
  dart.setFieldSignature(navigation_toolbar.NavigationToolbar, () => ({
    __proto__: dart.getFields(navigation_toolbar.NavigationToolbar.__proto__),
    leading: dart.finalFieldType(dart.nullable(framework.Widget)),
    middle: dart.finalFieldType(dart.nullable(framework.Widget)),
    trailing: dart.finalFieldType(dart.nullable(framework.Widget)),
    centerMiddle: dart.finalFieldType(core.bool),
    middleSpacing: dart.finalFieldType(core.double)
  }));
  dart.setStaticFieldSignature(navigation_toolbar.NavigationToolbar, () => ['kMiddleSpacing']);
  dart.defineLazy(navigation_toolbar.NavigationToolbar, {
    /*navigation_toolbar.NavigationToolbar.kMiddleSpacing*/get kMiddleSpacing() {
      return 16;
    }
  }, false);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  navigation_toolbar._ToolbarSlot = class _ToolbarSlot extends core._Enum {
    toString() {
      return "_ToolbarSlot." + this[_name];
    }
  };
  (navigation_toolbar._ToolbarSlot.new = function(index, name) {
    navigation_toolbar._ToolbarSlot.__proto__.new.call(this, index, name);
    ;
  }).prototype = navigation_toolbar._ToolbarSlot.prototype;
  dart.addTypeTests(navigation_toolbar._ToolbarSlot);
  dart.addTypeCaches(navigation_toolbar._ToolbarSlot);
  dart.setLibraryUri(navigation_toolbar._ToolbarSlot, I[1]);
  dart.setStaticFieldSignature(navigation_toolbar._ToolbarSlot, () => ['values', 'leading', 'middle', 'trailing']);
  dart.defineExtensionMethods(navigation_toolbar._ToolbarSlot, ['toString']);
  navigation_toolbar._ToolbarSlot.leading = C[5] || CT.C5;
  navigation_toolbar._ToolbarSlot.middle = C[6] || CT.C6;
  navigation_toolbar._ToolbarSlot.trailing = C[7] || CT.C7;
  navigation_toolbar._ToolbarSlot.values = C[8] || CT.C8;
  navigation_toolbar._ToolbarLayout = class _ToolbarLayout extends custom_layout.MultiChildLayoutDelegate {
    static ['_#new#tearOff'](opts) {
      let centerMiddle = opts && 'centerMiddle' in opts ? opts.centerMiddle : null;
      let middleSpacing = opts && 'middleSpacing' in opts ? opts.middleSpacing : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return new navigation_toolbar._ToolbarLayout.new({centerMiddle: centerMiddle, middleSpacing: middleSpacing, textDirection: textDirection});
    }
    performLayout(size) {
      let leadingWidth = 0.0;
      let trailingWidth = 0.0;
      if (this.hasChild(navigation_toolbar._ToolbarSlot.leading)) {
        let constraints = new box.BoxConstraints.new({maxWidth: size.width / 3.0, minHeight: size.height, maxHeight: size.height});
        leadingWidth = this.layoutChild(navigation_toolbar._ToolbarSlot.leading, constraints).width;
        let leadingX = null;
        switch (this.textDirection) {
          case C[9] || CT.C9:
          {
            leadingX = size.width - leadingWidth;
            break;
          }
          case C[10] || CT.C10:
          {
            leadingX = 0.0;
            break;
          }
        }
        this.positionChild(navigation_toolbar._ToolbarSlot.leading, new ui.Offset.new(leadingX, 0.0));
      }
      if (this.hasChild(navigation_toolbar._ToolbarSlot.trailing)) {
        let constraints = new box.BoxConstraints.loose(size);
        let trailingSize = this.layoutChild(navigation_toolbar._ToolbarSlot.trailing, constraints);
        let trailingX = null;
        switch (this.textDirection) {
          case C[9] || CT.C9:
          {
            trailingX = 0.0;
            break;
          }
          case C[10] || CT.C10:
          {
            trailingX = size.width - trailingSize.width;
            break;
          }
        }
        let trailingY = (size.height - trailingSize.height) / 2.0;
        trailingWidth = trailingSize.width;
        this.positionChild(navigation_toolbar._ToolbarSlot.trailing, new ui.Offset.new(trailingX, trailingY));
      }
      if (this.hasChild(navigation_toolbar._ToolbarSlot.middle)) {
        let maxWidth = math.max(core.double, size.width - leadingWidth - trailingWidth - this.middleSpacing * 2.0, 0.0);
        let constraints = new box.BoxConstraints.loose(size).copyWith({maxWidth: maxWidth});
        let middleSize = this.layoutChild(navigation_toolbar._ToolbarSlot.middle, constraints);
        let middleStartMargin = leadingWidth + this.middleSpacing;
        let middleStart = middleStartMargin;
        let middleY = (size.height - middleSize.height) / 2.0;
        if (this.centerMiddle) {
          middleStart = (size.width - middleSize.width) / 2.0;
          if (middleStart + middleSize.width > size.width - trailingWidth)
            middleStart = size.width - trailingWidth - middleSize.width;
          else if (middleStart < middleStartMargin) middleStart = middleStartMargin;
        }
        let middleX = null;
        switch (this.textDirection) {
          case C[9] || CT.C9:
          {
            middleX = size.width - middleSize.width - middleStart;
            break;
          }
          case C[10] || CT.C10:
          {
            middleX = middleStart;
            break;
          }
        }
        this.positionChild(navigation_toolbar._ToolbarSlot.middle, new ui.Offset.new(middleX, middleY));
      }
    }
    shouldRelayout(oldDelegate) {
      navigation_toolbar._ToolbarLayout.as(oldDelegate);
      return oldDelegate.centerMiddle !== this.centerMiddle || oldDelegate.middleSpacing !== this.middleSpacing || oldDelegate.textDirection !== this.textDirection;
    }
  };
  (navigation_toolbar._ToolbarLayout.new = function(opts) {
    let centerMiddle = opts && 'centerMiddle' in opts ? opts.centerMiddle : null;
    let middleSpacing = opts && 'middleSpacing' in opts ? opts.middleSpacing : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this.centerMiddle = centerMiddle;
    this.middleSpacing = middleSpacing;
    this.textDirection = textDirection;
    if (!(middleSpacing !== null)) dart.assertFailed(null, I[0], 89, 15, "middleSpacing != null");
    if (!(textDirection !== null)) dart.assertFailed(null, I[0], 90, 15, "textDirection != null");
    navigation_toolbar._ToolbarLayout.__proto__.new.call(this);
    ;
  }).prototype = navigation_toolbar._ToolbarLayout.prototype;
  dart.addTypeTests(navigation_toolbar._ToolbarLayout);
  dart.addTypeCaches(navigation_toolbar._ToolbarLayout);
  dart.setMethodSignature(navigation_toolbar._ToolbarLayout, () => ({
    __proto__: dart.getMethods(navigation_toolbar._ToolbarLayout.__proto__),
    performLayout: dart.fnType(dart.void, [ui.Size]),
    shouldRelayout: dart.fnType(core.bool, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(navigation_toolbar._ToolbarLayout, I[1]);
  dart.setFieldSignature(navigation_toolbar._ToolbarLayout, () => ({
    __proto__: dart.getFields(navigation_toolbar._ToolbarLayout.__proto__),
    centerMiddle: dart.finalFieldType(core.bool),
    middleSpacing: dart.finalFieldType(core.double),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  dart.trackLibraries("packages/flutter/src/widgets/navigation_toolbar.dart", {
    "package:flutter/src/widgets/navigation_toolbar.dart": navigation_toolbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigation_toolbar.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/widgets/navigation_toolbar.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__navigation_toolbar: navigation_toolbar
  };
}));

//# sourceMappingURL=navigation_toolbar.dart.lib.js.map
