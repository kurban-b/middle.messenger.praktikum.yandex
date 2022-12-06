import './styles.less';
import Block from '../../../../utils/core/Block';

interface IContacts {}

class Contacts extends Block {
  constructor(props: IContacts) {
    super({ ...props });
  }

  render(): string {
    // language=hbs
    return `
        <div class="contact__group">
            <div class="contact_group__wrapper">
                <div class="contact__avatar">
                    {{{Avatar size="large"}}}
                </div>

                <div class="contact__center">
                    <div class="contact__center_name">
                        {{name}}
                    </div>

                    <div class="contact__center_message">
                        {{lastMessage}}
                    </div>
                </div>

                <div class="contact__right">
                    <div class="contact__right_time">
                        {{time}}
                    </div>

                    <div class="contact__right_count">
                        {{#if newCount}}
                            <div class="chip">
                                {{newCount}}
                            </div>
                        {{/if}}
                    </div>
                </div>
            </div>
        </div>

    `;
  }
}

export default Contacts;
