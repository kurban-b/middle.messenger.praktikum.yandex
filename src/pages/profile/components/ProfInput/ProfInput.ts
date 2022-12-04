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

}

class ProfInput extends Block {
  constructor(props: IProfInput) {
    super({
      type: "text",
      required: "",
      disabled: "",
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

                <div class="prof-input_item">
                    <input
                            type="{{type}}"
                            id="{{id}}"
                            placeholder="{{placeholder}}"
                            name="{{name}}"
                            value="{{value}}"
                        {{required}}
                        {{disabled}}
                    />
                </div>
            </label>
        </div>
    `
  }
}

export default ProfInput;
