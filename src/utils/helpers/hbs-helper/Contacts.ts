import {HelperOptions} from "handlebars";
import Component from "../../../pages/messages/components/Contacts";

export default function Contacts ({ hash, data }: HelperOptions) {
  if (!data.root.children) {
    data.root.children = {};
  }

  const { children } = data.root;

  const component = new Component(hash);

  children[component.id] = component;

  return `<div data-id="id-${component.id}"></div>`;
}
