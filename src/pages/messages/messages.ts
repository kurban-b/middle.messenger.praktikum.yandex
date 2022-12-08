import './styles.less';
import data from './data';
import Icon from './assets/icon__direction-right.svg';
import Block from '../../utils/core/Block';
import { pages } from '../../utils/constants/route';

interface IMessagesPage {
  contacts?: {
    name: string
    lastMessage: string
    time: string
    newCount: string
  }
}

class MessagesPage extends Block {
  constructor(props: IMessagesPage) {
    super({
      contacts: data.contacts,
      ...props,
    });
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
                            <input class="search__input" type="text" placeholder="Поиск">
                        </label>
                    </div>
                </div>

                <div class="messages__contacts_list">
                    {{#each contacts}}
                        {{{ Contacts
                                name=name
                                lastMessage=lastMessage
                                time=time
                                newCount=newCount
                        }}}
                    {{/each}}
                </div>
            </div>

            <div class="messages__chat">
                {{{Chat}}}
            </div>
        </main>
    `;
  }
}

export default MessagesPage;
