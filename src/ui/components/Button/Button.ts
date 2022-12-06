import './styles.less';
import Block from '../../../utils/core/Block';

interface IButton {
  label: string
  color?: string
  radius?: string
  block?: string
  view?: string
  onClick?: (e: any) => void
  events?: Record<string, () => void>
  size?: 'small' | 'medium' | 'large'
}

export default class Button extends Block {
  constructor({ onClick, ...props }: IButton) {
    super({
      color: 'blue',
      radius: 'small',
      type: 'button',
      size: 'medium',
      events: {
        click: onClick,
      },
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
      <span class="button">
        <button id="btn" class="button__item {{radius}} {{color}} {{block}} {{view}} size-{{size}}" type="{{type}}">
          {{label}}
        </button>
      </span>
      `;
  }
}
