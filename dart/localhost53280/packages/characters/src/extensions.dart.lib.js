define(['dart_sdk', 'packages/characters/src/characters_impl.dart'], (function load__packages__characters__src__extensions_dart(dart_sdk, packages__characters__src__characters_impl$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const characters = packages__characters__src__characters_impl$46dart.src__characters;
  var extensions = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  extensions['StringCharacters|get#characters'] = function StringCharacters$124get$35characters($this) {
    return characters.Characters.new($this);
  };
  dart.trackLibraries("packages/characters/src/extensions.dart", {
    "package:characters/src/extensions.dart": extensions
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["extensions.dart"],"names":[],"mappings":";;;;;;;;;;;;AAQ+B;EAAgB","file":"../../../../../../../../../../../packages/characters/src/extensions.dart.lib.js"}');
  // Exports:
  return {
    src__extensions: extensions
  };
}));

//# sourceMappingURL=extensions.dart.lib.js.map
