/*
 * @Author: Aniwei
 * @Date: 2022-08-12 17:33:49
 */

import { invariant } from 'ts-invariant'
import { VoidCallback } from '@basic/Platform'
import { RenderObject } from '@ui/RenderObject'
import { Size } from '@internal/Geometry'
import { RenderBox } from '@ui/RenderBox'

export type ElementVisitor = { (element: Element ): void }

export enum ElementLifecycle {
  Initial,
  Active,
  Inactive,
  Defunct,
}

export type BuildOwnerOptions = {
  onBuildScheduled: VoidCallback,
  focusManager?: FocusManager
}

abstract class Widget {
  static canUpdate (
    oldWidget: Widget, 
    newWidget: Widget
  ): boolean {
    return oldWidget.key === newWidget.key
  }

  key: Key | null
  abstract createElement (): Element

  eq (other: Widget) {
    return other === this
  }
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
    invariant(element.owner === this)
    
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

  lockState (callback: VoidCallback) {
    invariant(callback !== null)
    
    try {
      callback()
    } finally {
      // TODO
    }
  }

  buildScope (
    context: Element, 
    callback?: VoidCallback
  ) {
    if (
      callback === null && 
      this.dirtyElements.length === 0
    ) {
      return
    }

    invariant(context !== null)
    
    try {
      this.scheduledFlushDirtyElements = true
      if (callback !== null && callback !== undefined) {
        this.dirtyElementsNeedsResorting = false
        try {
          callback()
        } finally {
          // TODO
        }
      }
      this.dirtyElements.sort(Element.sort)
      this.dirtyElementsNeedsResorting = false
      let dirtyCount = this.dirtyElements.length
      let index = 0
      while (index < dirtyCount) {
        const element = this.dirtyElements[index]
        invariant(element !== null)
        invariant(element.inDirtyList)
        
        
        try {
          element.rebuild()
        } catch (e) {
          // TODO
          debugger
        }
        
        index += 1
        if (
          dirtyCount < this.dirtyElements.length || 
          this.dirtyElementsNeedsResorting!
        ) {
          this.dirtyElements.sort(Element.sort)
          this.dirtyElementsNeedsResorting = false
          dirtyCount = this.dirtyElements.length
          
          while (index > 0 && this.dirtyElements[index - 1].dirty) {
            index -= 1
          }
        }
      }
    } finally {
      for (const element in this.dirtyElements) {
        invariant(element.inDirtyList)
        element.inDirtyList = false
      }
      this.dirtyElements = []
      this.scheduledFlushDirtyElements = false
      this.dirtyElementsNeedsResorting = null
    }
  }

  globalKeyRegistry: Map<GlobalKey, Element> = new Map()
  get globalKeyCount () {
    return this.globalKeyRegistry.length
  }

  registerGlobalKey (
    key: GlobalKey, 
    element: Element
  ) {
    this.globalKeyRegistry.set(key, element)
  }

  unregisterGlobalKey(
    key: GlobalKey, 
    element: Element
  ) {
    if (this.globalKeyRegistry.get(key) === element) {
      this.globalKeyRegistry.delete(key)
    }
  }

  finalizeTree () {
    try {
      this.lockState(this.inactiveElements.unmountAll)
    } catch (e) {
      // TODO
    } finally {
      // TODO
    }
  }

  reassemble (
    root: Element, 
  ): void {
    try {
      invariant(root.parent === null)
      invariant(root.owner === this)
      root.reassemble()
    } finally {
      // TODO
    }
  }
}

export abstract class BuildContext {
  abstract widget: Widget
  abstract owner: BuildOwner | null
  
  abstract findRenderObject () : RenderObject | null
  abstract size: Size
  
  abstract dependOnInheritedElement (
    ancestor: InheritedElement, 
    aspect: unknown
  ): InheritedWidget 

  abstract dependOnInheritedWidgetOfExactType<T extends InheritedWidget>(aspect?: unknown): T | null
  abstract getElementForInheritedWidgetOfExactType<T extends InheritedWidget>(): InheritedElement | null

  abstract findAncestorWidgetOfExactType<T extends Widget>(): T | null
  abstract findAncestorStateOfType<T extends State>(): T | null

  abstract findRootAncestorStateOfType<T extends State>(): T | null
  abstract findAncestorRenderObjectOfType<T extends RenderObject>(): T | null
  abstract visitAncestorElements(visitor: { (element: Element ): boolean }): boolean
  abstract visitChildElements (visitor: ElementVisitor): void
}

abstract class Element implements BuildContext {
  static activateRecursively (element: Element) {
    invariant(element.lifecycleState === ElementLifecycle.Inactive)
    element.activate()
    invariant(element.lifecycleState === ElementLifecycle.Active);
    element.visitChildren(Element.activateRecursively)
  }

  static sort (
    a: Element, 
    b: Element
  ) {
    if (a.depth < b.depth) {
      return -1
    }
    if (b.depth < a.depth) {
      return 1
    }
    if (b.dirty && !a.dirty) {
      return -1
    }
    if (a.dirty && !b.dirty) {
      return 1
    }
    return 0
  }

  public depth: number
  public owner: BuildOwner | null
  public slot: unknown | null
  public parent: Element | null
  public widget: Widget | null
  public lifecycleState: ElementLifecycle = ElementLifecycle.Initial

  get renderObject (): RenderObject | null {
    const result: RenderObject | null
    const visit = (element: Element) => {
      invariant(result === null)
      if (element.lifecycleState === ElementLifecycle.Defunct) {
        return
      } else if (element instanceof RenderObjectElement) {
        result = element.renderObject
      } else {
        element.visitChildren(visit)
      }
    }
    visit(this)
    return result
  }
  
  constructor (widget: Widget) {
    invariant(widget !== null)
    this.widget = widget
  }

  eq (other: Element): boolean {
    if (other === this) {
      return true
    }

    return false
  }

  reassemble () {
    this.visitChildren((child: Element ) => {
      child.reassemble()
    })
  }

  visitChildren (visitor: ElementVisitor ) { }

  visitChildElements (visitor: ElementVisitor) {
    this.visitChildren(visitor)
  }

  updateChild (
    child: Element | null, 
    newWidget: Widget | null, 
    newSlot: unknown | null
  ): Element | null {
    if (newWidget === null) {
      if (child !== null) {
        this.deactivateChild(child)
      }
      return null
    }

    let newChild: Element
    if (child !== null) {
      let hasSameSuperclass = true
      
      if (
        hasSameSuperclass && 
        child.widget === newWidget
      ) {
        if (child.slot !== newSlot) {
          this.updateSlotForChild(child, newSlot)
        }
        newChild = child
      } else if (
        hasSameSuperclass && 
        Widget.canUpdate(child.widget, newWidget)
      ) {
        if (child.slot !== newSlot) {
          this.updateSlotForChild(child, newSlot)
        }
        
        child.update(newWidget)
        invariant(child.widget === newWidget)
        newChild = child
      } else {
        this.deactivateChild(child)
        invariant(child.parent === null)
        
        newChild = this.inflateWidget(newWidget, newSlot)
      }
    } else {
      newChild = this.inflateWidget(newWidget, newSlot)
    }

    return newChild
  }
  
  mount (
    parent: Element | null, 
    newSlot: unknown | null
  ): void {
    invariant(this.lifecycleState === ElementLifecycle.Initial)
    invariant(this.widget !== null)
    invariant(this.parent === null)
    invariant(parent === null || parent.lifecycleState === ElementLifecycle.Active)
    invariant(this.slot === null)
    this.parent = parent
    this.slot = newSlot
    this.lifecycleState = ElementLifecycle.Active
    this.depth = this.parent !== null ? this.parent!.depth + 1 : 1
    
    if (parent !== null) {
      this.owner = parent.owner
    }

    invariant(this.owner !== null);
    const key: Key | null = widget.key
    
    if (key instanceof GlobalKey) {
      this.owner!.registerGlobalKey(key, this)
    }

    this.updateInheritance()
  }

  update (newWidget: Widget): void {
    invariant(
      this.lifecycleState === ElementLifecycle.Active
      && this.widget !== null
      && newWidget !== null
      && newWidget !== this.widget
      && this.depth !== null
      && Widget.canUpdate(this.widget, newWidget)
    )
  
    this.widget = newWidget
  }

  updateSlotForChild (
    child: Element, 
    newSlot: unknown | null
  ): void {
    invariant(this.lifecycleState === ElementLifecycle.Active)
    invariant(child !== null)
    invariant(child.parent === this)

    const visit = (element: Element) => {
      element.updateSlot(newSlot)
      if (!(element instanceof RenderObjectElement)) {
        element.visitChildren(visit);
      }
    }

    visit(child)
  }

  updateSlot (newSlot: unknown | null) {
    invariant(this.lifecycleState === ElementLifecycle.Active)
    invariant(this.widget !== null)
    invariant(this.parent !== null)
    invariant(this.parent!.lifecycleState === ElementLifecycle.Active)
    invariant(this.depth !== null)
    this.slot = newSlot
  }

  updateDepth (parentDepth: number): void {
    const expectedDepth = parentDepth + 1
    if (this.depth < expectedDepth) {
      this.depth = expectedDepth
      this.visitChildren((child: Element) => {
        child.updateDepth(expectedDepth)
      })
    }
  }

  detachRenderObject (): void {
    this.visitChildren((child: Element) => {
      child.detachRenderObject()
    })
    this.slot = null
  }

  attachRenderObject (newSlot: unknown | null): void {
    invariant(this.slot === null)
    this.visitChildren((child: Element) {
      child.attachRenderObject(newSlot)
    })
    this.slot = newSlot
  }

  retakeInactiveElement (
    key: GlobalKey, 
    newWidget: Widget
  ): Element | null {
    final Element? element = key._currentElement;
    if (element === null)
      return null;
    if (!Widget.canUpdate(element.widget, newWidget))
      return null;
    invariant(() {
      if (debugPrintGlobalKeyedWidgetLifecycle)
        debugPrint('Attempting to take $element from ${element._parent ?? "inactive elements list"} to put in $this.');
      return true;
    }());
    final Element? parent = element._parent;
    if (parent !== null) {
      invariant(() {
        if (parent === this) {
          throw FlutterError.fromParts(<DiagnosticsNode>[
            ErrorSummary("A GlobalKey was used multiple times inside one widget's child list."),
            DiagnosticsProperty<GlobalKey>('The offending GlobalKey was', key),
            parent.describeElement('The parent of the widgets with that key was'),
            element.describeElement('The first child to get instantiated with that key became'),
            DiagnosticsProperty<Widget>('The second child that was to be instantiated with that key was', widget, style: DiagnosticsTreeStyle.errorProperty),
            ErrorDescription('A GlobalKey can only be specified on one widget at a time in the widget tree.'),
          ]);
        }
        parent.owner!._debugTrackElementThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans(
          parent,
          key,
        );
        return true;
      }());
      parent.forgetChild(element);
      parent.deactivateChild(element);
    }
    invariant(element._parent === null);
    owner!._inactiveElements.remove(element);
    return element;
  }

  inflateWidget (
    newWidget: Widget,
    newSlot: unknown | null
  ): Element {
    invariant(newWidget !== null)
    const key:  unknown | null = newWidget.key
    if (key instanceof GlobalKey) {
      const newChild: Element | null = this.retakeInactiveElement(key, newWidget)
      if (newChild !== null) {
        invariant(newChild.parent === null)
        newChild.activateWithParent(this, newSlot)
        const updatedChild: Element | null = this.updateChild(newChild, newWidget, newSlot)
        invariant(newChild === updatedChild)
        return updatedChild!
      }
    }
    const newChild: Element = newWidget.createElement()
   
    newChild.mount(this, newSlot)
    invariant(newChild.lifecycleState === ElementLifecycle.Active)
    return newChild
  }

  deactivateChild (child: Element) {
    invariant(child !== null)
    invariant(child.parent === this)
    child.parent = null
    child.detachRenderObject()
    
    this.owner!.inactiveElements.add(child)
  }

  forgetChild (child: Element) { }

  activateWithParent (
    parent: Element, 
    newSlot: unknown | null
  ) {
    invariant(this.lifecycleState === ElementLifecycle.Inactive)
    this.parent = parent
    
    this.updateDepth(this.parent!.depth)
    Element.activateRecursively(this)
    this.attachRenderObject(newSlot)
    invariant(this.lifecycleState === ElementLifecycle.Active)
  }

  activate () {
    invariant(this.lifecycleState === ElementLifecycle.Inactive)
    invariant(this.widget !== null)
    invariant(this.owner !== null)
    invariant(this.depth !== null)
    const hadDependencies: boolean = (this.dependencies !== null && this.dependencies.length > 0) || this.hadUnsatisfiedDependencies
    this.lifecycleState = ElementLifecycle.Active
    
    this.dependencies = []
    this.hadUnsatisfiedDependencies = false
    this.updateInheritance()

    if (this.dirty) {
      this.owner!.scheduleBuildFor(this)
    }
    if (hadDependencies) {
      this.didChangeDependencies()
    }
  }

  deactivate () {
    invariant(this.lifecycleState === ElementLifecycle.Active)
    invariant(this.widget !== null)
    invariant(this.depth !== null)
    if (
      this.dependencies !== null && 
      this.dependencies!.size > 0
    ) {
      for (const dependency in this.dependencies!) {
        dependency.dependents.remove(this)
      }
    }
    this.inheritedWidgets = null
    this.lifecycleState = ElementLifecycle.Inactive;
  }

  unmount () {
    invariant(this.lifecycleState === ElementLifecycle.Inactive)
    invariant(this.widget !== null)
    invariant(this.depth !== null)
    invariant(this.owner !== null)

    const key: Key | null = this.widget!.key;
    if (key instanceof GlobalKey) {
      this.owner!.unregisterGlobalKey(key, this)
    }
    
    this.widget = null
    this.dependencies = null
    this.lifecycleState = ElementLifecycle.Defunct
  }

  findRenderObject (): RenderObject | null {
    return renderObject
  }

  
  get size (): Size | null {
    const renderObject: RenderObject | null = this.findRenderObject()
    
    if (renderObject instanceof RenderBox) {
      return renderObject.size
    }

    return null
  }

  inheritedWidgets: Map<Type, InheritedElement> | null
  dependencies: Set<InheritedElement> | null
  hadUnsatisfiedDependencies: boolean = false

  dependOnInheritedElement(
    ancestor: InheritedElement, 
    aspect?: unknown
  ): InheritedWidget {
    invariant(ancestor !== null)
    this.dependencies ??= new Set<InheritedElement>()
    this.dependencies!.add(ancestor)
    ancestor.updateDependencies(this, aspect)
    return ancestor.widget
  }

  dependOnInheritedWidgetOfExactType<T extends InheritedWidget>(aspect?: unknown) {
    const ancestor: InheritedElement | null = this.inheritedWidgets === null ? null : this.inheritedWidgets![T]
    if (ancestor !== null) {
      return this.dependOnInheritedElement(ancestor, aspect) as T
    }
    this.hadUnsatisfiedDependencies = true
    return null
  }

  getElementForInheritedWidgetOfExactType<T extends InheritedWidget>(): InheritedElement | null {
    const ancestor: InheritedElement | null = this.inheritedWidgets === null 
      ? null 
      : this.inheritedWidgets![T]

    return ancestor
  }

  updateInheritance () {
    invariant(this.lifecycleState === ElementLifecycle.Active)
    this.inheritedWidgets = this.parent?.inheritedWidgets
  }

  findAncestorWidgetOfExactType<T extends Widget>(): T | null {
    let ancestor: Element | null = this.parent
    
    while (ancestor !== null) {
      ancestor = ancestor.parent
    }

    return ancestor?.widget as T
  }

  findAncestorStateOfType<T extends State<StatefulWidget>>(): T | null {
    let ancestor: Element | null = this.parent
    while (ancestor !== null) {
      if (
        ancestor instanceof StatefulElement && 
        ancestor.state instanceof T
      ) {
        break
      }
      ancestor = ancestor.parent
    }

    const statefulAncestor: StatefulElement | null = ancestor as StatefulElement
    return statefulAncestor?.state 
  }

  findRootAncestorStateOfType<T extends State<StatefulWidget>>(): T | null {
    let ancestor: Element | null = this.parent
    let statefulAncestor: StatefulElement | null

    while (ancestor !== null) {
      if (
        ancestor instanceof StatefulElement 
      ) {
        statefulAncestor = ancestor
      }
      ancestor = ancestor.parent
    }

    return statefulAncestor?.state as T 
  }

  findAncestorRenderObjectOfType<T extends RenderObject>(): T | null {
    let ancestor: Element | null = this.parent
    while (ancestor !== null) {
      if (
        ancestor instanceof RenderObjectElement && 
        ancestor.renderObject instanceof T
      ) {
        return ancestor.renderObject as T
      }
      ancestor = ancestor.parent
    }

    return null
  }

  visitAncestorElements (visitor: { (element: Element): void }) {
    let ancestor: Element | null = this.parent
    while (ancestor !== null && visitor(ancestor)) {
      ancestor = ancestor.parent
    }
  }

  didChangeDependencies () {
    invariant(this.lifecycleState === ElementLifecycle.Active)
    this.markNeedsBuild()
  }

  public dirty: boolean = true
  public inDirtyList: boolean = false

  markNeedsBuild () {
    invariant(this.lifecycleState !== ElementLifecycle.Defunct)
    if (this.lifecycleState !== ElementLifecycle.Active) {
      return
    }
    invariant(this.owner !== null)
    invariant(this.lifecycleState === this.ElementLifecycle.Active)
    if (this.dirty) {
      return
    }
    this.dirty = true
    this.owner!.scheduleBuildFor(this)
  }

  rebuild () {
    invariant(_lifecycleState !== ElementLifecycle.Initial)
    if (_lifecycleState !== ElementLifecycle.Active || !_dirty)
      return;
   
    invariant(this.lifecycleState === ElementLifecycle.Active)
    
    
    this.performRebuild()
    invariant(!this.dirty)
  }

  abstract performRebuild (): void
}

abstract class ComponentElement extends Element {
  /// Creates an element that uses the given widget as its configuration.
  ComponentElement(Widget widget) : super(widget);

  Element? _child;

  bool _debugDoingBuild = false;
  @override
  bool get debugDoingBuild => _debugDoingBuild;

  @override
  void mount(Element? parent, Object? newSlot) {
    super.mount(parent, newSlot);
    invariant(_child === null);
    invariant(_lifecycleState === _ElementLifecycle.active);
    _firstBuild();
    invariant(_child !== null);
  }

  void _firstBuild() {
    // StatefulElement overrides this to also call state.didChangeDependencies.
    rebuild(); // This eventually calls performRebuild.
  }

  /// Calls the [StatelessWidget.build] method of the [StatelessWidget] object
  /// (for stateless widgets) or the [State.build] method of the [State] object
  /// (for stateful widgets) and then updates the widget tree.
  ///
  /// Called automatically during [mount] to generate the first build, and by
  /// [rebuild] when the element needs updating.
  @override
  @pragma('vm:notify-debugger-on-exception')
  void performRebuild() {
    invariant(_debugSetAllowIgnoredCallsToMarkNeedsBuild(true));
    Widget? built;
    try {
      invariant(() {
        _debugDoingBuild = true;
        return true;
      }());
      built = build();
      invariant(() {
        _debugDoingBuild = false;
        return true;
      }());
      debugWidgetBuilderValue(widget, built);
    } catch (e, stack) {
      _debugDoingBuild = false;
      built = ErrorWidget.builder(
        _debugReportException(
          ErrorDescription('building $this'),
          e,
          stack,
          informationCollector: () => <DiagnosticsNode>[
            if (kDebugMode)
              DiagnosticsDebugCreator(DebugCreator(this)),
          ],
        ),
      );
    } finally {
      // We delay marking the element as clean until after calling build() so
      // that attempts to markNeedsBuild() during build() will be ignored.
      _dirty = false;
      invariant(_debugSetAllowIgnoredCallsToMarkNeedsBuild(false));
    }
    try {
      _child = updateChild(_child, built, slot);
      invariant(_child !== null);
    } catch (e, stack) {
      built = ErrorWidget.builder(
        _debugReportException(
          ErrorDescription('building $this'),
          e,
          stack,
          informationCollector: () => <DiagnosticsNode>[
            if (kDebugMode)
              DiagnosticsDebugCreator(DebugCreator(this)),
          ],
        ),
      );
      _child = updateChild(null, built, slot);
    }
  }

  /// Subclasses should override this function to actually call the appropriate
  /// `build` function (e.g., [StatelessWidget.build] or [State.build]) for
  /// their widget.
  @protected
  Widget build();

  @override
  void visitChildren(ElementVisitor visitor) {
    if (_child !== null)
      visitor(_child!);
  }

  @override
  void forgetChild(Element child) {
    invariant(child === _child);
    _child = null;
    super.forgetChild(child);
  }
}

abstract class ProxyElement extends ComponentElement {
  constructor (widget) {
    super(widget)
  }

  Widget build () {
    return this.widget.child
  }

  update (newWidget: ProxyWidget) {
    const oldWidget = this.widget
    invariant(this.widget !== null)
    invariant(this.widget !== newWidget);
    super.update(newWidget);
    invariant(widget === newWidget);
    updated(oldWidget);
    _dirty = true;
    rebuild();
  }

  updated (oldWidget: ProxyWidget) {
    this.notifyClients(oldWidget)
  }

  abstract notifyClients(oldWidget: ProxyWidget): void
}

class InheritedElement extends ProxyElement {
  InheritedElement(InheritedWidget widget) : super(widget);

  @override
  InheritedWidget get widget => super.widget as InheritedWidget;

  final Map<Element, Object?> _dependents = HashMap<Element, Object?>();

  @override
  void _updateInheritance() {
    invariant(_lifecycleState === _ElementLifecycle.active);
    final Map<Type, InheritedElement>? incomingWidgets = _parent?._inheritedWidgets;
    if (incomingWidgets !== null)
      _inheritedWidgets = HashMap<Type, InheritedElement>.of(incomingWidgets);
    else
      _inheritedWidgets = HashMap<Type, InheritedElement>();
    _inheritedWidgets![widget.runtimeType] = this;
  }

  @override
  void debugDeactivated() {
    invariant(() {
      invariant(_dependents.isEmpty);
      return true;
    }());
    super.debugDeactivated();
  }

  @protected
  Object? getDependencies(Element dependent) {
    return _dependents[dependent];
  }

  void setDependencies(Element dependent, Object? value) {
    _dependents[dependent] = value;
  }

  void updateDependencies(Element dependent, Object? aspect) {
    setDependencies(dependent, null);
  }

  @protected
  void notifyDependent(covariant InheritedWidget oldWidget, Element dependent) {
    dependent.didChangeDependencies();
  }

  void updated(InheritedWidget oldWidget) {
    if (widget.updateShouldNotify(oldWidget))
      super.updated(oldWidget);
  }

  void notifyClients(InheritedWidget oldWidget) {
    invariant(_debugCheckOwnerBuildTargetExists('notifyClients'));
    for (final Element dependent in _dependents.keys) {
      invariant(() {
        // check that it really is our descendant
        Element? ancestor = dependent._parent;
        while (ancestor !== this && ancestor !== null)
          ancestor = ancestor._parent;
        return ancestor === this;
      }());
      // check that it really depends on us
      invariant(dependent._dependencies!.contains(this));
      notifyDependent(oldWidget, dependent);
    }
  }
}

class InactiveElements {
  static deactivateRecursively (element: Element) {
    invariant(element.lifecycleState === ElementLifecycle.Active)
    element.deactivate()
    invariant(element.lifecycleState === ElementLifecycle.Inactive)
    element.visitChildren(InactiveElements.deactivateRecursively)
   
  }

  locked: boolean = false
  elements: Set<Element> = new Set<Element>()

  unmount (element: Element) {
    invariant(element.lifecycleState === ElementLifecycle.Inactive)

    element.visitChildren((child: Element) => {
      invariant(child.parent === element)
      this.unmount(child)
    })
    element.unmount()
    invariant(element.lifecycleState === ElementLifecycle.Defunct)
  }

  unmountAll () {
    this.locked = true
    const elements: Element[] = Array.from(this.elements).sort(Element.sort)
    this.elements = []
    try {
      elements.reversed().forEach(this.unmount)
    } finally {
      invariant(elements.length === 0)
      this.locked = false
    }
  }

  add (element: Element) {
    invariant(!this.locked)
    invariant(!this.elements.includes(element))
    invariant(element.parent === null)

    if (element.lifecycleState === ElementLifecycle.Active) {
      InactiveElements.deactivateRecursively(element)
    }

    this.elements.push(element)
  }

  remove (element: Element) {
    invariant(!this.locked)
    invariant(this.elements.contains(element))
    invariant(element.parent === null)
    this.elements.remove(element)
    invariant(element.lifecycleState !== ElementLifecycle.Active)
  }
}
