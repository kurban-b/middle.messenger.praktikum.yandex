import render from '../../utils/core/renderDOM';
import Block from "./Block";
import queryStringify from "../helpers/queryString";
import {queryStringToObject} from "../helpers/queryStringToObject";

const isEqual = (a: string, b: string): boolean => {
  return a === b
}

type TPathname = string

class Route {
  private _pathname: string
  private _blockClass: Block
  private _block: Block | null
  private _props: Record<string, any>

  constructor(pathname: TPathname, view: Block, props: Record<string, any>) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: TPathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: TPathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({});
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

class Router {
  private routes: Route[] = []
  private history: History = window.history
  private _currentRoute?: Route | null = null
  private _rootQuery: string = ''
  private static __instance: Router
  public pathname: string = window.location.pathname
  public href: string = window.location.href
  public query: Record<string, any> = {}

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this.query = queryStringToObject(this.href)

    Router.__instance = this;
  }

  use(pathname: TPathname, block: Block) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);
    return this
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: TPathname) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route?.render();
  }

  go(pathname: string, query?: Record<string, any>) {
    const href = pathname + (query ? `?${queryStringify(query)}` : '')

    this.history.pushState({}, "", href);
    this._onRoute(pathname);
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: TPathname): Route | undefined {
    return this.routes.find(route => route.match(pathname));
  }

  replace(pathname: TPathname, query?: Record<string, any>) {
    const href = pathname + (query ? `?${queryStringify(query)}` : '')

    window.location.replace(href)
  }

  exclude (queryArray: string[]) {
    const newQuery = this.query

    queryArray.forEach((key) => {
      delete newQuery[key]
    })

    this.go(this.pathname, newQuery)
  }
}

export default new Router('#root');
