import Block from "./Block";
import {HelperOptions} from "handlebars";
import * as Handlebars from "handlebars";

export const registerComponent = (Component: typeof Block, name: string) => {
  Handlebars.registerHelper(name, function ({ hash, data }: HelperOptions) {
    if (!data.root.children) {
      data.root.children = {};
    }

    const {children} = data.root;

    const component = new Component(hash);

    children[component.id] = component

    return `<div data-id="id-${component.id}"></div>`;
  })
}
