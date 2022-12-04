import './styles.less';
import Block from "../../../utils/core/Block";

interface IButton {
  label: string
  color?: string
  radius?: string
  block?: string
  view?: string
  events?: Record<string, (e: unknown) => void>
}

export default class Button extends Block {
  constructor(props: IButton) {
    super({
      color: 'blue',
      radius: 'small',
      ...props
    });
  }

  render() {
    //language=hbs
    return `
      <span class="button">
        <button id="btn" class="button__item {{radius}} {{color}} {{block}} {{view}}">
          {{label}}
        </button>
      </span>
      `
  }
}
