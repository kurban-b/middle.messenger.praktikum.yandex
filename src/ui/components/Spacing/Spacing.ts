import './styles.less';
import Block from '../../../utils/core/Block';
import { ERadiusSize } from '../../../utils/constants';

interface ISpacing {
  size: keyof typeof ERadiusSize
}

class Spacing extends Block {
  constructor(props: ISpacing) {
    super({
      size: 'small',
      ...props,
    });
  }

  render(): string {
    // language=hbs
    return `
      <div class="spacing_block">
        <div class="{{size}}"></div>
      </div>
    `;
  }
}

export default Spacing;
