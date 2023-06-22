import './styles.less';
import Block from '../../../../utils/core/Block';
import store from '../../../../utils/store';
import { Chats } from '../../../../utils/types/chats';
import MessagesController from '../../../../controllers/MessagesController';
import ChatsController from '../../../../controllers/ChatsController';

interface IContacts {
  id: number
  chat?: Chats
  time?: string
  activeChatId?: number
}

class Contacts extends Block {
  constructor(props: IContacts) {
    super({
      ...props,
      events: {
        click: async () => {
          await ChatsController.getChatsTokens(props.id);

          // @ts-ignore
          const token = store.getState().chat?.token;

          if (token) {
            await MessagesController.connect(props.id, token);
          }

          store.set('chat.activeChatId', props.id);
        },
      },
    });
  }

  render(): string {
    const time = this.props.time ? `${new Date(this.props.time).getHours()}:${new Date(this.props.time).getMinutes()}` : '';
    // @ts-ignore
    const activeChatId = store.getState().chat?.activeChatId;
    // language=hbs
    return `
        <div class="contact__group ${activeChatId === this.props.id ? 'contact__group_active' : ''}">
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
                        ${time}
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
