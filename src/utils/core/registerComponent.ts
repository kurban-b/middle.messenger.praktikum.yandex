import { HelperOptions } from 'handlebars';
import * as Handlebars from 'handlebars';
import Block from './Block';

export const registerComponent = (Component: typeof Block, name: string) => {
  Handlebars.registerHelper(name, ({ hash, data }: HelperOptions) => {
    if (!data.root.children) {
      data.root.children = {};
    }

    const { children } = data.root;

    const component = new Component(hash);

    children[component.id] = component;

    return `<div data-id="id-${component.id}"></div>`;
  });
};
