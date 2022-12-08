import './styles.less';
import data from './data';
import Icon from './assets/icon__menu-bar.svg';
import Block from '../../../../utils/core/Block';

interface IChat {
  name: string
  messages: {
    type: string
    text?: string
    image?: string
    date: string
    isOutgoing: boolean
  }[]
  icon: string
}

class Chat extends Block {
  constructor(props: IChat) {
    super({
      ...props,
      name: props.name || 'Иванов Иван',
      messages: props.messages ||  data.messages,
      icon: props.icon || Icon,
    });
  }

  render() {
    // language=hbs
    return `
        <div class="chat__group">
            <div class="chat_top">
                <div class="chat_top__avatar">
                    {{{Avatar size="small"}}}
                </div>

                <div class="chat_top__name">
                    {{name}}
                </div>

                <div class="chat_top__menu">
                    <img class="icon" src="{{icon}}" alt="" />
                </div>
            </div>

            <div class="chat_messages">
                <div class="chat_messages__date">
                    19 июня
                </div>

                <ul class="chat_messages__list">
                    {{#each messages}}
                        {{{Message
                                image=image
                                type=type
                                text=text
                                date=date
                                isOutgoing=isOutgoing
                        }}}
                    {{/each}}
                </ul>
            </div>

            <div class="chat__bottom">
                {{{InputBar}}}
            </div>
        </div>
    `;
  }
}

export default Chat;
