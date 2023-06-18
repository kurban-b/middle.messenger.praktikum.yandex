import {HelperOptions} from "handlebars";
import Component from "../../../pages/profile/components/ProfAvatar";

export default function ProfAvatar ({ hash, data }: HelperOptions) {
  if (!data.root.children) {
    data.root.children = {};
  }

  const { children } = data.root;

  const component = new Component(hash);

  children[component.id] = component;

  return `<div data-id="id-${component.id}"></div>`;
}
