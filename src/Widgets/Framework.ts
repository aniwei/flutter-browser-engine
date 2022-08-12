/*
 * @Author: Aniwei
 * @Date: 2022-08-12 17:33:49
 */

import { VoidCallback } from '@basic/Platform';
import invariant from 'ts-invariant';

export type ElementVisitor = { (element: Element ): void }

export type BuildOwnerOptions = {
  onBuildScheduled: VoidCallback,
  focusManager?: FocusManager
}

export class BuildOwner {
  
  public onBuildScheduled: VoidCallback | null = null
  public dirtyElements: Element[] = []
  public inactiveElements: InactiveElements = new InactiveElements()

  public scheduledFlushDirtyElements: boolean = false
  public dirtyElementsNeedsResorting: boolean | null = null
  public focusManager: FocusManager

  constructor (options: BuildOwnerOptions) {
    this.onBuildScheduled = options.onBuildScheduled
    this.focusManager = options.focusManager ?? new FocusManager()
    this.focusManager.registerGlobalHandlers()
  }

  scheduleBuildFor (element: Element) {
    invariant(element !== null)
    invariant(element.owner == this)
    
    if (element.inDirtyList) {
      this.dirtyElementsNeedsResorting = true
      return
    }

    if (!this.scheduledFlushDirtyElements && this.onBuildScheduled !== null) {
      this.scheduledFlushDirtyElements = true
      this.onBuildScheduled!()
    }
    this.dirtyElements.push(element)
    element.inDirtyList = true
  }

  void lockState(VoidCallback callback) {
    assert(callback != null);
    assert(_debugStateLockLevel >= 0);
    assert(() {
      _debugStateLockLevel += 1;
      return true;
    }());
    try {
      callback();
    } finally {
      assert(() {
        _debugStateLockLevel -= 1;
        return true;
      }());
    }
    assert(_debugStateLockLevel >= 0);
  }

  /// Establishes a scope for updating the widget tree, and calls the given
  /// `callback`, if any. Then, builds all the elements that were marked as
  /// dirty using [scheduleBuildFor], in depth order.
  ///
  /// This mechanism prevents build methods from transitively requiring other
  /// build methods to run, potentially causing infinite loops.
  ///
  /// The dirty list is processed after `callback` returns, building all the
  /// elements that were marked as dirty using [scheduleBuildFor], in depth
  /// order. If elements are marked as dirty while this method is running, they
  /// must be deeper than the `context` node, and deeper than any
  /// previously-built node in this pass.
  ///
  /// To flush the current dirty list without performing any other work, this
  /// function can be called with no callback. This is what the framework does
  /// each frame, in [WidgetsBinding.drawFrame].
  ///
  /// Only one [buildScope] can be active at a time.
  ///
  /// A [buildScope] implies a [lockState] scope as well.
  ///
  /// To print a console message every time this method is called, set
  /// [debugPrintBuildScope] to true. This is useful when debugging problems
  /// involving widgets not getting marked dirty, or getting marked dirty too
  /// often.
  @pragma('vm:notify-debugger-on-exception')
  void buildScope(Element context, [ VoidCallback? callback ]) {
    if (callback == null && _dirtyElements.isEmpty)
      return;
    assert(context != null);
    assert(_debugStateLockLevel >= 0);
    assert(!_debugBuilding);
    assert(() {
      if (debugPrintBuildScope)
        debugPrint('buildScope called with context $context; dirty list is: $_dirtyElements');
      _debugStateLockLevel += 1;
      _debugBuilding = true;
      return true;
    }());
    if (!kReleaseMode) {
      Map<String, String> debugTimelineArguments = timelineArgumentsIndicatingLandmarkEvent;
      assert(() {
        if (debugProfileBuildsEnabled) {
          debugTimelineArguments = <String, String>{
            ...debugTimelineArguments,
            'dirty count': '${_dirtyElements.length}',
            'dirty list': '$_dirtyElements',
            'lock level': '$_debugStateLockLevel',
            'scope context': '$context',
          };
        }
        return true;
      }());
      Timeline.startSync(
        'BUILD',
        arguments: debugTimelineArguments
      );
    }
    try {
      _scheduledFlushDirtyElements = true;
      if (callback != null) {
        assert(_debugStateLocked);
        Element? debugPreviousBuildTarget;
        assert(() {
          context._debugSetAllowIgnoredCallsToMarkNeedsBuild(true);
          debugPreviousBuildTarget = _debugCurrentBuildTarget;
          _debugCurrentBuildTarget = context;
          return true;
        }());
        _dirtyElementsNeedsResorting = false;
        try {
          callback();
        } finally {
          assert(() {
            context._debugSetAllowIgnoredCallsToMarkNeedsBuild(false);
            assert(_debugCurrentBuildTarget == context);
            _debugCurrentBuildTarget = debugPreviousBuildTarget;
            _debugElementWasRebuilt(context);
            return true;
          }());
        }
      }
      _dirtyElements.sort(Element._sort);
      _dirtyElementsNeedsResorting = false;
      int dirtyCount = _dirtyElements.length;
      int index = 0;
      while (index < dirtyCount) {
        final Element element = _dirtyElements[index];
        assert(element != null);
        assert(element._inDirtyList);
        assert(() {
          if (element._lifecycleState == _ElementLifecycle.active && !element._debugIsInScope(context)) {
            throw FlutterError.fromParts(<DiagnosticsNode>[
              ErrorSummary('Tried to build dirty widget in the wrong build scope.'),
              ErrorDescription(
                'A widget which was marked as dirty and is still active was scheduled to be built, '
                'but the current build scope unexpectedly does not contain that widget.',
              ),
              ErrorHint(
                'Sometimes this is detected when an element is removed from the widget tree, but the '
                'element somehow did not get marked as inactive. In that case, it might be caused by '
                'an ancestor element failing to implement visitChildren correctly, thus preventing '
                'some or all of its descendants from being correctly deactivated.',
              ),
              DiagnosticsProperty<Element>(
                'The root of the build scope was',
                context,
                style: DiagnosticsTreeStyle.errorProperty,
              ),
              DiagnosticsProperty<Element>(
                'The offending element (which does not appear to be a descendant of the root of the build scope) was',
                element,
                style: DiagnosticsTreeStyle.errorProperty,
              ),
            ]);
          }
          return true;
        }());
        if (!kReleaseMode && debugProfileBuildsEnabled) {
          Map<String, String> debugTimelineArguments = timelineArgumentsIndicatingLandmarkEvent;
          assert(() {
            debugTimelineArguments = element.widget.toDiagnosticsNode().toTimelineArguments();
            return true;
          }());
          Timeline.startSync(
            '${element.widget.runtimeType}',
            arguments: debugTimelineArguments,
          );
        }
        try {
          element.rebuild();
        } catch (e, stack) {
          _debugReportException(
            ErrorDescription('while rebuilding dirty elements'),
            e,
            stack,
            informationCollector: () => <DiagnosticsNode>[
              if (kDebugMode && index < _dirtyElements.length)
                DiagnosticsDebugCreator(DebugCreator(element)),
              if (index < _dirtyElements.length)
                element.describeElement('The element being rebuilt at the time was index $index of $dirtyCount')
              else
                ErrorHint('The element being rebuilt at the time was index $index of $dirtyCount, but _dirtyElements only had ${_dirtyElements.length} entries. This suggests some confusion in the framework internals.'),
            ],
          );
        }
        if (!kReleaseMode && debugProfileBuildsEnabled)
          Timeline.finishSync();
        index += 1;
        if (dirtyCount < _dirtyElements.length || _dirtyElementsNeedsResorting!) {
          _dirtyElements.sort(Element._sort);
          _dirtyElementsNeedsResorting = false;
          dirtyCount = _dirtyElements.length;
          while (index > 0 && _dirtyElements[index - 1].dirty) {
            // It is possible for previously dirty but inactive widgets to move right in the list.
            // We therefore have to move the index left in the list to account for this.
            // We don't know how many could have moved. However, we do know that the only possible
            // change to the list is that nodes that were previously to the left of the index have
            // now moved to be to the right of the right-most cleaned node, and we do know that
            // all the clean nodes were to the left of the index. So we move the index left
            // until just after the right-most clean node.
            index -= 1;
          }
        }
      }
      assert(() {
        if (_dirtyElements.any((Element element) => element._lifecycleState == _ElementLifecycle.active && element.dirty)) {
          throw FlutterError.fromParts(<DiagnosticsNode>[
            ErrorSummary('buildScope missed some dirty elements.'),
            ErrorHint('This probably indicates that the dirty list should have been resorted but was not.'),
            Element.describeElements('The list of dirty elements at the end of the buildScope call was', _dirtyElements),
          ]);
        }
        return true;
      }());
    } finally {
      for (final Element element in _dirtyElements) {
        assert(element._inDirtyList);
        element._inDirtyList = false;
      }
      _dirtyElements.clear();
      _scheduledFlushDirtyElements = false;
      _dirtyElementsNeedsResorting = null;
      if (!kReleaseMode) {
        Timeline.finishSync();
      }
      assert(_debugBuilding);
      assert(() {
        _debugBuilding = false;
        _debugStateLockLevel -= 1;
        if (debugPrintBuildScope)
          debugPrint('buildScope finished');
        return true;
      }());
    }
    assert(_debugStateLockLevel >= 0);
  }

  Map<Element, Set<GlobalKey>>? _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans;

  void _debugTrackElementThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans(Element node, GlobalKey key) {
    _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans ??= HashMap<Element, Set<GlobalKey>>();
    final Set<GlobalKey> keys = _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans!
      .putIfAbsent(node, () => HashSet<GlobalKey>());
    keys.add(key);
  }

  void _debugElementWasRebuilt(Element node) {
    _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans?.remove(node);
  }

  final Map<GlobalKey, Element> _globalKeyRegistry = <GlobalKey, Element>{};

  // In Profile/Release mode this field is initialized to `null`. The Dart compiler can
  // eliminate unused fields, but not their initializers.
  @_debugOnly
  final Set<Element>? _debugIllFatedElements = kDebugMode ? HashSet<Element>() : null;

  // This map keeps track which child reserves the global key with the parent.
  // Parent, child -> global key.
  // This provides us a way to remove old reservation while parent rebuilds the
  // child in the same slot.
  //
  // In Profile/Release mode this field is initialized to `null`. The Dart compiler can
  // eliminate unused fields, but not their initializers.
  @_debugOnly
  final Map<Element, Map<Element, GlobalKey>>? _debugGlobalKeyReservations = kDebugMode ? <Element, Map<Element, GlobalKey>>{} : null;

  /// The number of [GlobalKey] instances that are currently associated with
  /// [Element]s that have been built by this build owner.
  int get globalKeyCount => _globalKeyRegistry.length;

  void _debugRemoveGlobalKeyReservationFor(Element parent, Element child) {
    assert(() {
      assert(parent != null);
      assert(child != null);
      _debugGlobalKeyReservations?[parent]?.remove(child);
      return true;
    }());
  }

  void _registerGlobalKey(GlobalKey key, Element element) {
    assert(() {
      if (_globalKeyRegistry.containsKey(key)) {
        assert(element.widget != null);
        final Element oldElement = _globalKeyRegistry[key]!;
        assert(oldElement.widget != null);
        assert(element.widget.runtimeType != oldElement.widget.runtimeType);
        _debugIllFatedElements?.add(oldElement);
      }
      return true;
    }());
    _globalKeyRegistry[key] = element;
  }

  void _unregisterGlobalKey(GlobalKey key, Element element) {
    assert(() {
      if (_globalKeyRegistry.containsKey(key) && _globalKeyRegistry[key] != element) {
        assert(element.widget != null);
        final Element oldElement = _globalKeyRegistry[key]!;
        assert(oldElement.widget != null);
        assert(element.widget.runtimeType != oldElement.widget.runtimeType);
      }
      return true;
    }());
    if (_globalKeyRegistry[key] == element)
      _globalKeyRegistry.remove(key);
  }

  void _debugReserveGlobalKeyFor(Element parent, Element child, GlobalKey key) {
    assert(() {
      assert(parent != null);
      assert(child != null);
      _debugGlobalKeyReservations?[parent] ??= <Element, GlobalKey>{};
      _debugGlobalKeyReservations?[parent]![child] = key;
      return true;
    }());
  }

  void _debugVerifyGlobalKeyReservation() {
    assert(() {
      final Map<GlobalKey, Element> keyToParent = <GlobalKey, Element>{};
      _debugGlobalKeyReservations?.forEach((Element parent, Map<Element, GlobalKey> childToKey) {
        // We ignore parent that are unmounted or detached.
        if (parent._lifecycleState == _ElementLifecycle.defunct || parent.renderObject?.attached == false)
          return;
        childToKey.forEach((Element child, GlobalKey key) {
          // If parent = null, the node is deactivated by its parent and is
          // not re-attached to other part of the tree. We should ignore this
          // node.
          if (child._parent == null)
            return;
          // It is possible the same key registers to the same parent twice
          // with different children. That is illegal, but it is not in the
          // scope of this check. Such error will be detected in
          // _debugVerifyIllFatedPopulation or
          // _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans.
          if (keyToParent.containsKey(key) && keyToParent[key] != parent) {
            // We have duplication reservations for the same global key.
            final Element older = keyToParent[key]!;
            final Element newer = parent;
            final FlutterError error;
            if (older.toString() != newer.toString()) {
              error = FlutterError.fromParts(<DiagnosticsNode>[
                ErrorSummary('Multiple widgets used the same GlobalKey.'),
                ErrorDescription(
                  'The key $key was used by multiple widgets. The parents of those widgets were:\n'
                  '- ${older.toString()}\n'
                  '- ${newer.toString()}\n'
                  'A GlobalKey can only be specified on one widget at a time in the widget tree.',
                ),
              ]);
            } else {
              error = FlutterError.fromParts(<DiagnosticsNode>[
                ErrorSummary('Multiple widgets used the same GlobalKey.'),
                ErrorDescription(
                  'The key $key was used by multiple widgets. The parents of those widgets were '
                  'different widgets that both had the following description:\n'
                  '  ${parent.toString()}\n'
                  'A GlobalKey can only be specified on one widget at a time in the widget tree.',
                ),
              ]);
            }
            // Fix the tree by removing the duplicated child from one of its
            // parents to resolve the duplicated key issue. This allows us to
            // tear down the tree during testing without producing additional
            // misleading exceptions.
            if (child._parent != older) {
              older.visitChildren((Element currentChild) {
                if (currentChild == child)
                  older.forgetChild(child);
              });
            }
            if (child._parent != newer) {
              newer.visitChildren((Element currentChild) {
                if (currentChild == child)
                  newer.forgetChild(child);
              });
            }
            throw error;
          } else {
            keyToParent[key] = parent;
          }
        });
      });
      _debugGlobalKeyReservations?.clear();
      return true;
    }());
  }

  void _debugVerifyIllFatedPopulation() {
    assert(() {
      Map<GlobalKey, Set<Element>>? duplicates;
      for (final Element element in _debugIllFatedElements!) {
        if (element._lifecycleState != _ElementLifecycle.defunct) {
          assert(element != null);
          assert(element.widget != null);
          assert(element.widget.key != null);
          final GlobalKey key = element.widget.key! as GlobalKey;
          assert(_globalKeyRegistry.containsKey(key));
          duplicates ??= <GlobalKey, Set<Element>>{};
          // Uses ordered set to produce consistent error message.
          final Set<Element> elements = duplicates.putIfAbsent(key, () => LinkedHashSet<Element>());
          elements.add(element);
          elements.add(_globalKeyRegistry[key]!);
        }
      }
      _debugIllFatedElements?.clear();
      if (duplicates != null) {
        final List<DiagnosticsNode> information = <DiagnosticsNode>[];
        information.add(ErrorSummary('Multiple widgets used the same GlobalKey.'));
        for (final GlobalKey key in duplicates.keys) {
          final Set<Element> elements = duplicates[key]!;
          // TODO(jacobr): this will omit the '- ' before each widget name and
          // use the more standard whitespace style instead. Please let me know
          // if the '- ' style is a feature we want to maintain and we can add
          // another tree style that supports it. I also see '* ' in some places
          // so it would be nice to unify and normalize.
          information.add(Element.describeElements('The key $key was used by ${elements.length} widgets', elements));
        }
        information.add(ErrorDescription('A GlobalKey can only be specified on one widget at a time in the widget tree.'));
        throw FlutterError.fromParts(information);
      }
      return true;
    }());
  }

  /// Complete the element build pass by unmounting any elements that are no
  /// longer active.
  ///
  /// This is called by [WidgetsBinding.drawFrame].
  ///
  /// In debug mode, this also runs some sanity checks, for example checking for
  /// duplicate global keys.
  ///
  /// After the current call stack unwinds, a microtask that notifies listeners
  /// about changes to global keys will run.
  @pragma('vm:notify-debugger-on-exception')
  void finalizeTree() {
    if (!kReleaseMode) {
      Timeline.startSync('FINALIZE TREE', arguments: timelineArgumentsIndicatingLandmarkEvent);
    }
    try {
      lockState(_inactiveElements._unmountAll); // this unregisters the GlobalKeys
      assert(() {
        try {
          _debugVerifyGlobalKeyReservation();
          _debugVerifyIllFatedPopulation();
          if (_debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans != null &&
              _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans!.isNotEmpty) {
            final Set<GlobalKey> keys = HashSet<GlobalKey>();
            for (final Element element in _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans!.keys) {
              if (element._lifecycleState != _ElementLifecycle.defunct)
                keys.addAll(_debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans![element]!);
            }
            if (keys.isNotEmpty) {
              final Map<String, int> keyStringCount = HashMap<String, int>();
              for (final String key in keys.map<String>((GlobalKey key) => key.toString())) {
                if (keyStringCount.containsKey(key)) {
                  keyStringCount.update(key, (int value) => value + 1);
                } else {
                  keyStringCount[key] = 1;
                }
              }
              final List<String> keyLabels = <String>[];
              keyStringCount.forEach((String key, int count) {
                if (count == 1) {
                  keyLabels.add(key);
                } else {
                  keyLabels.add('$key ($count different affected keys had this toString representation)');
                }
              });
              final Iterable<Element> elements = _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans!.keys;
              final Map<String, int> elementStringCount = HashMap<String, int>();
              for (final String element in elements.map<String>((Element element) => element.toString())) {
                if (elementStringCount.containsKey(element)) {
                  elementStringCount.update(element, (int value) => value + 1);
                } else {
                  elementStringCount[element] = 1;
                }
              }
              final List<String> elementLabels = <String>[];
              elementStringCount.forEach((String element, int count) {
                if (count == 1) {
                  elementLabels.add(element);
                } else {
                  elementLabels.add('$element ($count different affected elements had this toString representation)');
                }
              });
              assert(keyLabels.isNotEmpty);
              final String the = keys.length == 1 ? ' the' : '';
              final String s = keys.length == 1 ? '' : 's';
              final String were = keys.length == 1 ? 'was' : 'were';
              final String their = keys.length == 1 ? 'its' : 'their';
              final String respective = elementLabels.length == 1 ? '' : ' respective';
              final String those = keys.length == 1 ? 'that' : 'those';
              final String s2 = elementLabels.length == 1 ? '' : 's';
              final String those2 = elementLabels.length == 1 ? 'that' : 'those';
              final String they = elementLabels.length == 1 ? 'it' : 'they';
              final String think = elementLabels.length == 1 ? 'thinks' : 'think';
              final String are = elementLabels.length == 1 ? 'is' : 'are';
              // TODO(jacobr): make this error more structured to better expose which widgets had problems.
              throw FlutterError.fromParts(<DiagnosticsNode>[
                ErrorSummary('Duplicate GlobalKey$s detected in widget tree.'),
                // TODO(jacobr): refactor this code so the elements are clickable
                // in GUI debug tools.
                ErrorDescription(
                  'The following GlobalKey$s $were specified multiple times in the widget tree. This will lead to '
                  'parts of the widget tree being truncated unexpectedly, because the second time a key is seen, '
                  'the previous instance is moved to the new location. The key$s $were:\n'
                  '- ${keyLabels.join("\n  ")}\n'
                  'This was determined by noticing that after$the widget$s with the above global key$s $were moved '
                  'out of $their$respective previous parent$s2, $those2 previous parent$s2 never updated during this frame, meaning '
                  'that $they either did not update at all or updated before the widget$s $were moved, in either case '
                  'implying that $they still $think that $they should have a child with $those global key$s.\n'
                  'The specific parent$s2 that did not update after having one or more children forcibly removed '
                  'due to GlobalKey reparenting $are:\n'
                  '- ${elementLabels.join("\n  ")}'
                  '\nA GlobalKey can only be specified on one widget at a time in the widget tree.',
                ),
              ]);
            }
          }
        } finally {
          _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans?.clear();
        }
        return true;
      }());
    } catch (e, stack) {
      // Catching the exception directly to avoid activating the ErrorWidget.
      // Since the tree is in a broken state, adding the ErrorWidget would
      // cause more exceptions.
      _debugReportException(ErrorSummary('while finalizing the widget tree'), e, stack);
    } finally {
      if (!kReleaseMode) {
        Timeline.finishSync();
      }
    }
  }

  /// Cause the entire subtree rooted at the given [Element] to be entirely
  /// rebuilt. This is used by development tools when the application code has
  /// changed and is being hot-reloaded, to cause the widget tree to pick up any
  /// changed implementations.
  ///
  /// This is expensive and should not be called except during development.
  void reassemble(Element root, DebugReassembleConfig? reassembleConfig) {
    if (!kReleaseMode) {
      Timeline.startSync('Preparing Hot Reload (widgets)');
    }
    try {
      assert(root._parent == null);
      assert(root.owner == this);
      root._debugReassembleConfig = reassembleConfig;
      root.reassemble();
    } finally {
      if (!kReleaseMode) {
        Timeline.finishSync();
      }
    }
  }
}

export abstract class BuildContext {
  Widget get widget
  BuildOwner? get owner
  bool get debugDoingBuild;

  RenderObject? findRenderObject();
  Size? get size;
  InheritedWidget dependOnInheritedElement(InheritedElement ancestor, { Object aspect });

  T? dependOnInheritedWidgetOfExactType<T extends InheritedWidget>({ Object? aspect });

  InheritedElement? getElementForInheritedWidgetOfExactType<T extends InheritedWidget>();

  T? findAncestorWidgetOfExactType<T extends Widget>();

  T? findAncestorStateOfType<T extends State>();

  T? findRootAncestorStateOfType<T extends State>();
  T? findAncestorRenderObjectOfType<T extends RenderObject>();
  void visitAncestorElements(bool Function(Element element) visitor)
  visitChildElements (visitor: ElementVisitor): void
}

 export abstract class Element implements BuildContext {
  constructor (widget: Widget) {
    this.widget = widget
  }

  eq (element: Element) {
    if (element === this) {
      return true
    }
  }
 }