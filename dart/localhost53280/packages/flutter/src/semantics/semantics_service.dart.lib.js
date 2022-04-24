define(['dart_sdk', 'packages/flutter/src/semantics/semantics_event.dart', 'packages/flutter/src/services/restoration.dart'], (function load__packages__flutter__src__semantics__semantics_service_dart(dart_sdk, packages__flutter__src__semantics__semantics_event$46dart, packages__flutter__src__services__restoration$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const semantics_event = packages__flutter__src__semantics__semantics_event$46dart.src__semantics__semantics_event;
  const system_channels = packages__flutter__src__services__restoration$46dart.src__services__system_channels;
  var semantics_service = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:flutter/src/semantics/semantics_service.dart"];
  semantics_service.SemanticsService = class SemanticsService extends core.Object {
    static ['_#_#tearOff']() {
      return new semantics_service.SemanticsService.__();
    }
    static announce(message, textDirection) {
      return async.async(dart.void, function* announce() {
        let event = new semantics_event.AnnounceSemanticsEvent.new(message, textDirection);
        yield system_channels.SystemChannels.accessibility.send(event.toMap());
      });
    }
    static tooltip(message) {
      return async.async(dart.void, function* tooltip() {
        let event = new semantics_event.TooltipSemanticsEvent.new(message);
        yield system_channels.SystemChannels.accessibility.send(event.toMap());
      });
    }
  };
  (semantics_service.SemanticsService.__ = function() {
    ;
  }).prototype = semantics_service.SemanticsService.prototype;
  dart.addTypeTests(semantics_service.SemanticsService);
  dart.addTypeCaches(semantics_service.SemanticsService);
  dart.setStaticMethodSignature(semantics_service.SemanticsService, () => ['announce', 'tooltip']);
  dart.setLibraryUri(semantics_service.SemanticsService, I[0]);
  dart.trackLibraries("packages/flutter/src/semantics/semantics_service.dart", {
    "package:flutter/src/semantics/semantics_service.dart": semantics_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["semantics_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;oBA+BsC,SAAuB;AAA/B;AACG,oBAAQ,+CAAuB,OAAO,EAAE,aAAa;AAC5B,QAAtD,MAAqB,AAAc,kDAAK,AAAM,KAAD;MAC/C;;mBAMmC;AAAR;AACG,oBAAQ,8CAAsB,OAAO;AACX,QAAtD,MAAqB,AAAc,kDAAK,AAAM,KAAD;MAC/C;;;;;EArBoB","file":"../../../../../../../../../../packages/flutter/src/semantics/semantics_service.dart.lib.js"}');
  // Exports:
  return {
    src__semantics__semantics_service: semantics_service
  };
}));

//# sourceMappingURL=semantics_service.dart.lib.js.map
