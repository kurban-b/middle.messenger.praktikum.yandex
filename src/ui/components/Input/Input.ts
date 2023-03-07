import Block from '../../../utils/core/Block';

interface IInputProps {
  type?: string
  class?: string
  placeholder?: string
  name?: string
  id?: string
  value?: string
  pattern?: string
  required?: boolean
  disabled?: boolean
  onChange?: (e: InputEvent) => void
  onBlur?: (e: InputEvent) => void
  onFocus?: (e: InputEvent) => void
  accept: string
}

class Input extends Block {
  constructor({ onChange, onBlur, onFocus, ...props }: IInputProps) {
    super({
      type: 'text',
      events: {
        input: onChange,
        blur: onBlur,
        focus: onFocus,
      },
      ...props,
    });
  }

  render(): string {
    // language=hbs
    return `
        <input
                type="{{type}}"
                class="{{class}}"
                placeholder="{{placeholder}}"
                name="{{name}}"
                value="{{value}}"
                ${this.props.id ? `id=${this.props.id}` : ''}
                ${this.props.pattern ? `pattern=${this.props.pattern}` : ''}
                ${this.props.required ? 'required' : ''}
                ${this.props.disabled ? 'disabled' : ''}
                ${this.props.accept ? `accept=${this.props.accept}` : ''}
        />
    `;
  }
}

export default Input;
