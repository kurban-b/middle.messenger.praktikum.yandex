import './styles.less';
import Icon from './assets/icon__arrow-left_circle.svg';
import ava from '../../../static/images/gomer.png';
import Block from '../../utils/core/Block';
import { pages } from '../../utils/constants/route';

interface IProfilePage {
  iconBack?: string
  avatar?: string
  name?: string
  toggle?: keyof typeof EToggle
}

enum EToggle {
  default = 'default',
  password = 'password',
  changeData = 'changeData'
}

class ProfilePage extends Block {
  constructor(props: IProfilePage) {
    super({
      iconBack: Icon,
      avatar: ava,
      name: 'Иванов Иван',
      toggle: 'default',
      onClickChange: () => {
        this.props.toggle = EToggle.changeData;
      },
      onClickChangePassword: () => {
        this.props.toggle = EToggle.password;
      },
      onClickExit: () => {
        console.log('exit');
      },
      ...props,
    });
  }

  render(): string {
    // language=hbs
    return `
        <main class="profile_group">
            {{{Navigation}}}

            <a class="profile_side_line" href="${pages.chat.href}">
                <img src="{{iconBack}}" alt="">
            </a>

            <div class="profile_info">
                {{{ProfAvatar avatar=avatar}}}

                <div class="profile_name">
                    <h1>{{name}}</h1>
                </div>

                <div class="profile_inputs">
                    {{#if ${this.props.toggle === EToggle.changeData}}}
                        {{{SettingProfileForm}}}
                    {{/if}}

                    {{#if ${this.props.toggle === EToggle.default}}}
                        <div>
                            {{{ProfInput
                                    text="Почта"
                                    id="email"
                                    name="email"
                                    value="pochta@yandex.ru"
                                    disabled="disabled"
                            }}}

                            {{{ProfInput
                                    text="Логин"
                                    id="login"
                                    name="login"
                                    value="ivanivanov"
                                    disabled="disabled"
                            }}}

                            {{{ProfInput
                                    text="Имя"
                                    id="first_name"
                                    name="first_name"
                                    value="Иван"
                                    disabled="disabled"
                            }}}

                            {{{ProfInput
                                    text="Фамилия"
                                    id="second_name"
                                    name="second_name"
                                    value="Иванов"
                                    disabled="disabled"
                            }}}

                            {{{ProfInput
                                    text="Имя в чате"
                                    id="display_name"
                                    name="display_name"
                                    value="Иван"
                                    disabled="disabled"
                            }}}

                            {{{ProfInput
                                    text="Телефон"
                                    id="phone"
                                    name="phone"
                                    value="+7 (909) 967 30 30"
                                    disabled="disabled"
                            }}}

                            {{{Spacing size="xlarge"}}}

                            <div class="profile__buttons">
                                <div class="profile__buttons_item line">
                                    {{{Button
                                            label="Изменить данные"
                                            view="link"
                                            size="small"
                                            onClick=onClickChange
                                    }}}
                                </div>

                                <div class="profile__buttons_item line">
                                    {{{Button
                                            label="Изменить пароль"
                                            view="link"
                                            size="small"
                                            onClick=onClickChangePassword
                                    }}}
                                </div>

                                <div class="profile__buttons_item red">
                                    {{{Button
                                            label="Выйти"
                                            view="link"
                                            size="small"
                                            onClick=onClickExit
                                    }}}
                                </div>
                            </div>
                        </div>
                    {{/if}}

                    {{#if ${this.props.toggle === EToggle.password}}}
                        {{{SettingPasswordForm}}}
                    {{/if}}
                </div>
            </div>
        </main>
    `;
  }
}

export default ProfilePage;
