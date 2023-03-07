import Block from "../../../utils/core/Block";

interface IDialogProps {
  id: string,
  title: string,
  open: boolean,
  onSubmit: (e: EventTarget) => void
  label: string
  error?: string
  onClose?: () => void
}

class Dialog extends Block {
  constructor(props: IDialogProps) {
    super({
      ...props,
      events: {
        click: (e: PointerEvent) => {
          const target = e.target as Element
          const classList = Array.from(target.classList)

          if (classList.includes('dialog__block')) {
            this.setProps({...props, open: false})

            if (props.onClose) {
              props.onClose()
            }
          }
        }
      },
    });
  }

  render(): string {
    //language=hbs
    return (
      `<div class="dialog__block ${this.props.open ? 'dialog__block_show' : 'dialog__block_hide'}">
          <div class="dialog__modal">
              <h3>
                {{title}}
              </h3>

              {{{DialogForm buttonText=buttonText onSubmit=onSubmit label=label}}}

              {{#if error}}
                  <div class="dialog__modal_error">
                    {{error}}
                  </div>
              {{else}}
                  <div></div>
              {{/if}}
          </div>
       </div>`
    )
  }
}

export default Dialog;
