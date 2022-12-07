import { v4 as makeUUID } from 'uuid';
import * as Handlebars from 'handlebars';
import { EventBus } from './eventBus';

// Нельзя создавать экземпляр данного класса
class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id = makeUUID();

  private _element: HTMLElement | null = null;

  private _meta: { id: any, props: any } | null = null;

  protected props: any;

  protected children: Record<string, Block>;

  private eventBus: () => EventBus;

  /** JSDoc
   * @param {Object} propsAndChildren
   *
   * @returns {void}
   */
  constructor(propsAndChildren: any = {}) {
    const eventBus = new EventBus();

    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    this._meta = {
      id: this.id,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.initChildren();

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount(oldProps: any) {
    this.componentDidMount(oldProps);
  }

  componentDidMount(oldProps: any) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const templateString = this.render();

    const fragment = this.compile(templateString, { ...this.props });

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      // удаляем все обработчики из текущего элемента
      this._removeEvents();

      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    // навешиваем события
    this._addEvents();
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render(): string {
    return '';
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  _makePropsProxy(props: any) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];

        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        const oldProps = { ...target };
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  _addEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if (!this._element) return
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if (!this._element) return
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  show() {
    const element = this.getContent()

    if (element) {
      element.style.display = 'none';
    }
  }

  hide() {
    const element = this.getContent()

    if (element) {
      element.style.display = 'none';
    }
  }

  compile(templateString: string, ctx: any) {
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    const template = Handlebars.compile(templateString);

    fragment.innerHTML = template({ ...ctx, children: this.children });

    Object.entries(this.children).forEach(([_, child]) => {
      const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

      if (!stub) {
        return;
      }

      const el = child.getContent()

      if (el) {
        stub.replaceWith(el);
      }
    });

    return fragment.content;
  }

  protected initChildren() {}

  _getChildren(propsAndChildren: any) {
    const children: any = {};
    const props: any = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value) && value.every(((v) => v instanceof Block))) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }
}

export default Block;
