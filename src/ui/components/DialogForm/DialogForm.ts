import Block from "../../../utils/core/Block";

interface IDialogFormProps {
  buttonText: string
  onSubmit: (e: InputEvent) => void
  label: string
}

class DialogForm extends Block {
  constructor(props: IDialogFormProps) {
    super({
      ...props,
      label: props.label || "Логин",
      events: {
        submit: props.onSubmit
      }
    });
  }

  render(): string {
    //language=hbs
    return `
      <form id="dialog-form">
          {{{TextField
                  name="dialog-login"
                  label=label
                  required="required"
          }}}

          {{{Spacing size="large"}}}

          {{{Button label=buttonText block="block" type="submit"}}}
      </form>
    `
  }
}

export default DialogForm
