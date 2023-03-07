import './styles.less';
import Block from '../../../../../../utils/core/Block';
import connect from "../../../../../../utils/store/connect";

interface IMessage {
  text?: string
  userId: number
  profileId: number
  time: string
}

class Message extends Block {
  constructor(props: IMessage) {
    const date = new Date(props.time)
    const minutes = date.getMinutes()
    const hours = date.getHours()

    super({
      ...props,
      time: `${hours}:${minutes}`,
      isOutgoing: props.profileId === props.userId
    });
  }

  render() {
    // language=hbs
    return `
        {{#if isOutgoing}}
            <li class="chat_messages__item chat_messages__item_outgoing">
                <div class="chat_message__text">
                    {{text}}
                </div>

                <div class="chat_message__date">
                    {{time}}
                </div>
            </li>
        {{else}}
            <li class="chat_messages__item">
                <div class="chat_messages__text">
                    {{text}}
                </div>

                <div class="chat_message__date">
                    {{time}}
                </div>
            </li>
        {{/if}}
    `;
  }
}

export default connect((state) => ({profileId: state.auth?.profile.id}))(Message);
