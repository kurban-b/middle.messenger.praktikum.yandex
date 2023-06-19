import { HelperOptions } from 'handlebars';
import Component from '../../../ui/components/DialogForm';

export default function DialogForm({ hash, data }: HelperOptions) {
  if (!data.root.children) {
    data.root.children = {};
  }

  const { children } = data.root;

  const component = new Component(hash);

  children[component.id] = component;

  return `<div data-id="id-${component.id}"></div>`;
}
