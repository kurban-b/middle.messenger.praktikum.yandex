import './styles.less';
import Icon from './assets/icon__direction-right.svg';
import Block from '../../utils/core/Block';
import { pages } from '../../utils/constants/route';
import connect from "../../utils/store/connect";
import chatsController from "../../controllers/ChatsController";
import { onCreateChat} from "./helpers";
import {IStore} from "../../utils/types/store";

interface IMessagesPageProps {
  chats?: IStore['chat']['chats']
  activeChatId?: number
}

class MessagesPage extends Block {
  constructor(props: IMessagesPageProps) {
    super({
      ...props,
      createChatDialog: false,
      onOpenDialog: () => {
        this.setProps({
          createChatDialog: true,
        })
      },
      onSubmitСreateChat: (e: SubmitEvent) => {
        onCreateChat(e)
        this.setProps({
          createChatDialog: false,
        })
      },
      onClose: () => {
        this.setProps({
          createChatDialog: false,
        })
      }
    });
  }

  init() {
    chatsController.getChats({})

    super.init();
  }

  render(): string {
    // language=hbs
    return `
        <main class="messages_group">
            {{{Navigation}}}

            <div class="messages__contacts">
                <div class="messages__contacts__top">
                    <div class="btn-block">
                        <a class="btn-block_item" href="${pages.profile.href}">
                            <span>Профиль</span>

                            <img src="${Icon}" alt="">
                        </a>
                    </div>

                    {{{Spacing size="medium"}}}

                    <div class="search">
                        <label>
                            {{{Search}}}
                        </label>
                    </div>
                </div>

                <div class="messages__contacts_list">
                    {{#each chats}}
                        {{{ Contacts
                                id=id
                                activeChatId=activeChatId
                                name=title
                                lastMessage=last_message.content
                                time=last_message.time
                                newCount=unread_count
                        }}}
                    {{/each}}
                </div>

                {{{Spacing size="medium"}}}

                <div class="chat__btn__add">
                    {{{Button label="Создать чат" block="block" onClick=onOpenDialog}}}
                </div>
            </div>

            <div class="messages__chat">
                {{#if activeChatId }}
                    {{{Chat activeChatId=activeChatId messages=messages}}}
                {{else}}
                    <div class="choose__chat">
                        Выберите чат
                    </div>
                {{/if}}
            </div>

            {{{Dialog
                    title="Создать чат"
                    id="createChat"
                    open=createChatDialog
                    buttonText="Создать"
                    onSubmit=onSubmitСreateChat
                    label="Название чата"
                    onClose=onClose
            }}}
        </main>
    `;
  }
}

export default connect((state) => ({
  chats: state?.chat?.chats,
  activeChatId: state?.chat?.activeChatId,
  messages: state?.messages,
}))(MessagesPage);
