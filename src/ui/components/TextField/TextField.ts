import './styles.less';
import Block from "../../../utils/core/Block";

interface ITextField {
  label?: string
  name?: string
  id?: string
  type?: string
  required?: "required" | ""
}

class TextField extends Block {
  constructor(props: ITextField) {
    super({
      type: "text",
      required: "",
      ...props
    });
  }

  render() {
    // language=hbs
    return `
        <div class="form__group field">
            <input
                    type="{{type}}"
                    class="form__field"
                    placeholder="{{label}}"
                    name="{{name}}"
                    id="{{name}}"
                {{required}}
            />

            <label for={{name}} class="form__label">
                {{label}}
            </label>
        </div>
    `
  }
}

export default TextField;
