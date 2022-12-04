import './styles.less';
import Block from "../../../../../../utils/core/Block";

interface IMessage {
  type: string
  text?: string
  date: string
  isOutgoing: boolean
  image?: string
}

class Message extends Block {
  constructor(props: IMessage) {
    super({...props});
  }

  render() {
    //language=hbs
    return `
        {{#if isOutgoing}}
            {{#if image}}
                <li class="chat_message_img chat_message_img__outgoing">
                    <img src="{{image}}" alt="{{image}}">

                    <div class="chat_message__date">
                        {{date}}
                    </div>
                </li>
            {{else}}
                <li class="chat_messages__item chat_messages__item_outgoing">
                    <div class="chat_message__text">
                        {{text}}
                    </div>

                    <div class="chat_message__date">
                        {{date}}
                    </div>
                </li>
            {{/if}}
        {{else}}
            {{#if image}}
                <li class="chat_message_img">
                    <img src="{{image}}" alt="{{image}}">

                    <div class="chat_message__date">
                        {{date}}
                    </div>
                </li>
            {{else}}
                <li class="chat_messages__item">
                    <div class="chat_messages__text">
                        {{text}}
                    </div>

                    <div class="chat_message__date">
                        {{date}}
                    </div>
                </li>
            {{/if}}
        {{/if}}
    `
  }
}

export default Message;
