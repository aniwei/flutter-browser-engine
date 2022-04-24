define(['dart_sdk', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/rendering/proxy_box.dart', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__widgets__annotated_region_dart(dart_sdk, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__rendering__proxy_box$46dart, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const proxy_box = packages__flutter__src__rendering__proxy_box$46dart.src__rendering__proxy_box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  var annotated_region = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "AnnotatedRegion",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/annotated_region.dart"
      });
    }
  }, false);
  var C = [void 0];
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/annotated_region.dart",
    "package:flutter/src/widgets/annotated_region.dart"
  ];
  var value$ = dart.privateName(annotated_region, "AnnotatedRegion.value");
  var sized$ = dart.privateName(annotated_region, "AnnotatedRegion.sized");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  const _is_AnnotatedRegion_default = Symbol('_is_AnnotatedRegion_default');
  annotated_region.AnnotatedRegion$ = dart.generic(T => {
    var __t$RenderAnnotatedRegionOfT = () => (__t$RenderAnnotatedRegionOfT = dart.constFn(proxy_box.RenderAnnotatedRegion$(T)))();
    class AnnotatedRegion extends framework.SingleChildRenderObjectWidget {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get sized() {
        return this[sized$];
      }
      set sized(value) {
        super.sized = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let child = opts && 'child' in opts ? opts.child : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let sized = opts && 'sized' in opts ? opts.sized : true;
        return new (annotated_region.AnnotatedRegion$(T)).new({key: key, child: child, value: value, sized: sized, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
      }
      createRenderObject(context) {
        return new (__t$RenderAnnotatedRegionOfT()).new({value: this.value, sized: this.sized});
      }
      updateRenderObject(context, renderObject) {
        let t0;
        __t$RenderAnnotatedRegionOfT().as(renderObject);
        t0 = renderObject;
        (() => {
          t0.value = this.value;
          t0.sized = this.sized;
          return t0;
        })();
      }
    }
    (AnnotatedRegion.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let sized = opts && 'sized' in opts ? opts.sized : true;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[value$] = value;
      this[sized$] = sized;
      if (!(value !== null)) dart.assertFailed(null, I[0], 27, 15, "value != null");
      if (!(child !== null)) dart.assertFailed(null, I[0], 28, 15, "child != null");
      AnnotatedRegion.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = AnnotatedRegion.prototype;
    dart.addTypeTests(AnnotatedRegion);
    AnnotatedRegion.prototype[_is_AnnotatedRegion_default] = true;
    dart.addTypeCaches(AnnotatedRegion);
    dart.setMethodSignature(AnnotatedRegion, () => ({
      __proto__: dart.getMethods(AnnotatedRegion.__proto__),
      createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
    }));
    dart.setLibraryUri(AnnotatedRegion, I[1]);
    dart.setFieldSignature(AnnotatedRegion, () => ({
      __proto__: dart.getFields(AnnotatedRegion.__proto__),
      value: dart.finalFieldType(T),
      sized: dart.finalFieldType(core.bool)
    }));
    return AnnotatedRegion;
  });
  annotated_region.AnnotatedRegion = annotated_region.AnnotatedRegion$();
  dart.addTypeTests(annotated_region.AnnotatedRegion, _is_AnnotatedRegion_default);
  dart.trackLibraries("packages/flutter/src/widgets/annotated_region.dart", {
    "package:flutter/src/widgets/annotated_region.dart": annotated_region
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["annotated_region.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA+BU;;;;;;MAUG;;;;;;;;;;;;;yBAGkC;AAC3C,cAAO,kDAAgC,mBAAc;MACvD;yBAGqC,SAAkC;;;AAGpD,aAFjB,YAAY;QAAZ;AACI,qBAAQ;AACR,qBAAQ;;;MACd;;;UA/BO;UACW;UACF;UACT;;MADS;MACT;YACK,AAAM,KAAD;YACL,AAAM,KAAD;AACZ,qDAAW,GAAG,SAAS,KAAK;;IAAC","file":"../../../../../../../../../../packages/flutter/src/widgets/annotated_region.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__annotated_region: annotated_region
  };
}));

//# sourceMappingURL=annotated_region.dart.lib.js.map
