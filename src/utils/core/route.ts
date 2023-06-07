import Block from "./Block";
import render from '../../utils/core/renderDOM';

const isEqual = (a: string, b: string): boolean => a === b;

type TPathname = string

class Route {
  private _pathname: string;

  private _blockClass: Block;

  private _block: Block | null;

  private _props: Record<string, any>;

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
      // @ts-ignore
      this._block = new this._blockClass({});
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

export default Route
