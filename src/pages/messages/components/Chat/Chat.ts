import './styles.less';
import Block from '../../../../utils/core/Block';
import connect from '../../../../utils/store/connect';
import { onAddUser, onRemoveUser } from './helpers';
import store from '../../../../utils/store';
import { Store } from '../../../../utils/types/store';
import isEqual from '../../../../utils/helpers/isEqual';
import { User } from '../../../../utils/types/auth';

interface IChat {
  messages: Store['messages']
  activeChatId: number
  profile: User
}

class Chat extends Block {
  constructor(props: IChat) {
    const list = (() => {
      if (props.messages && props.activeChatId) {
        if (props.messages.hasOwnProperty(props.activeChatId)) return props.messages[props.activeChatId];
        return [];
      }
      return [];
    })();

    super({
      ...props,
      addUserDialog: false,
      messages: list,
      removeUserDialog: false,
      onClickAddUser: () => {
        store.set('users.error', undefined);
        this.setProps({ ...props, removeUserDialog: false, addUserDialog: true });
      },
      onClickRemoveUser: () => {
        store.set('users.error', undefined);
        this.setProps({ ...props, addUserDialog: false, removeUserDialog: true });
      },
      onAddUser,
      onRemoveUser,
    });
  }

  componentDidUpdate(_oldProps: IChat, _newProps: IChat): boolean {
    if (!isEqual(_oldProps, _newProps)) {
      this.setProps({ ..._newProps });

      return true;
    }
    return super.componentDidUpdate(_oldProps, _newProps);
  }

  render() {
    // language=hbs
    return `
        <div class="chat__group">
            <div class="chat_top">
                <div class="chat_top__avatar">
                    {{{Avatar size="small"}}}
                </div>

                <div class="chat_top__menu">
                    {{{Button size="small" label="Добавить участника" view="link" onClick=onClickAddUser}}}

                    {{{Button size="small" label="Удалить участника" view="link" onClick=onClickRemoveUser}}}
                </div>
            </div>

            <div class="chat_messages">
                <div class="chat_messages__date">
                    19 июня
                </div>

                <ul class="chat_messages__list">
                    {{#each messages}}
                        {{{Message
                                text=content
                                time=time
                                userId=user_id
                        }}}
                    {{/each}}
                </ul>
            </div>

            <div class="chat__bottom">
                {{{InputBar}}}
            </div>

            {{{Dialog
                    title="Добавить пользователя"
                    id="addUser"
                    open=addUserDialog
                    buttonText="Добавить"
                    onSubmit=onAddUser
                    error=dialogError
            }}}

            {{{Dialog
                    title="Удалить пользователя"
                    id="removeUser"
                    open=removeUserDialog
                    buttonText="Удалить"
                    onSubmit=onRemoveUser
                    error=dialogError
            }}}
        </div>
    `;
  }
}

export default connect((state) => ({
  dialogError: state?.users?.error,
  profile: state?.auth?.profile,
}))(Chat);
