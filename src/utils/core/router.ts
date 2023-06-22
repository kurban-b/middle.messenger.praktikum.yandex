import Block from './Block';
import queryStringify from '../helpers/queryString';
import { queryStringToObject } from '../helpers/queryStringToObject';
import Route from './route';

type TPathname = string

class Router {
  private routes: Route[] = [];

  private history: History = window.history;

  private _currentRoute?: Route | null = null;

  private _rootQuery = '';

  private static __instance: Router;

  public pathname: string = window.location.pathname;

  public href: string = window.location.href;

  public query: Record<string, any> = {};

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this.query = queryStringToObject(this.href);

    Router.__instance = this;
  }

  use(pathname: TPathname, block: Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public reset() {
    this.routes = [];
    this._currentRoute = null;
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
    const href = pathname + (query ? `?${queryStringify(query)}` : '');

    this.history.pushState({}, '', href);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: TPathname): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }

  replace(pathname: TPathname, query?: Record<string, any>) {
    const href = pathname + (query ? `?${queryStringify(query)}` : '');

    window.location.replace(href);
  }

  exclude(queryArray: string[]) {
    const newQuery = this.query;

    queryArray.forEach((key) => {
      delete newQuery[key];
    });

    this.go(this.pathname, newQuery);
  }
}

export default new Router('#root');
