import './styles.less';
import Block from '../../../utils/core/Block';

interface ITextField {
  label?: string
  name?: string
  id?: string
  type?: string
  required?: 'required' | ''
  pattern?: string
  invalidText?: string
  onChange?: (e: Event) => void
}

class TextField extends Block {
  constructor(props: ITextField) {
    super({
      type: 'text',
      required: '',
      invalidText: 'invalid data',
      ...props,
    });
  }

  render() {
    // language=hbs
    return `
        <div class="form__group field">
            {{{Input
                    type=type
                    class="form__field"
                    placeholder=label
                    name=name
                    id=id
                    pattern=pattern
                    required=required
                    onChange=onChange
            }}}

            <label for={{name}} class="form__label">
                {{label}}
            </label>

            <span class="invalid_text">
                {{invalidText}}
            </span>
        </div>
    `;
  }
}

export default TextField;
