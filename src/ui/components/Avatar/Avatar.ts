import './styles.less';
import defaultAvatar from './assets/avatar-empty.png';
import Block from '../../../utils/core/Block';

export enum ERadiusSize {
  small = 'small',
  large = 'large'
}

interface IAvatar {
  size?: keyof typeof ERadiusSize
  src: string | null
}

class Avatar extends Block {
  constructor(props: IAvatar) {
    super({
      size: 'small',
      src: defaultAvatar,
      ...props,
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class="avatar__{{size}}">
            {{#if src}}
                <img src={{src}} alt="аватар" />
            {{/if}}
        </div>
    `;
  }
}
export default Avatar;
