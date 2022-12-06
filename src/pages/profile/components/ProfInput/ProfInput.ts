import './styles.less';
import Block from "../../../../utils/core/Block";

interface IProfInput {
  text: string
  type: string
  id: string
  placeholder: string
  name: string
  value: string
  required?: "required" | ""
  disabled?: "disabled" | ""
  invalidText?: string
  pattern?: string
}

class ProfInput extends Block {
  constructor(props: IProfInput) {
    super({
      type: "text",
      required: "",
      disabled: "",
      invalidText: "invalid data",
      ...props
    });
  }

  render(): string {
    //language=hbs
    return `
        <div class="prof-input_group">
            <label for="{{id}}">
                <div class="prof-input_name">
                    {{text}}
                </div>
            </label>

            {{{Input
                    type=type
                    placeholder=placeholder
                    name=name
                    id=id
                    pattern=pattern
                    value=value
                    required=required
                    disabled=disabled
                    onChange=onChange
            }}}

            <div class="invalid_block">
                {{invalidText}}
            </div>
        </div>
    `
  }
}

export default ProfInput;
