import './styles.less';
import data from './data';
import Icon from './assets/icon__arrow-left_circle.svg';
import ava from '../../../static/images/gomer.png';
import Block from '../../utils/core/Block';
import { pages } from '../../utils/constants/route';
import { handleSubmitForm } from './helpers';
import { onChangeInvalidClass } from '../../utils/helpers';
import { EPatterns } from '../../utils/helpers/validator';

interface IProfilePage {
  iconBack?: string
  avatar?: string
  name?: string
  toggle?: keyof typeof EToggle
  onClickChange?: () => void
  onClickChangePassword?: () => void
  onClickExit?: () => void

  onClickAuth?: () => void
  onChangeLogin?: () => void
  onChangePassword?: () => void
  onChangeName?: () => void
  onChangePhone?: () => void
  onChangeEmail?: () => void
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
      onChangeLogin: onChangeInvalidClass(EPatterns.login),
      onChangePassword: onChangeInvalidClass(EPatterns.password),
      onChangeName: onChangeInvalidClass(EPatterns.name),
      onChangePhone: onChangeInvalidClass(EPatterns.phone),
      onChangeEmail: onChangeInvalidClass(EPatterns.email),
      ...props,
    });
  }

  componentDidMount(oldProps: any) {
    handleSubmitForm();

    super.componentDidMount(oldProps);
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
                        <form id="form-change-profile">
                            {{{ProfInput
                                    text="${data.emailLabel}"
                                    id="email"
                                    name="${data.emailName}"
                                    value="pochta@yandex.ru"
                                    invalidText="invalid email"
                                    onChange=onChangeLogin
                            }}}

                            {{{ProfInput
                                    text="${data.loginLabel}"
                                    id="login"
                                    name="${data.loginName}"
                                    value="ivanivanov"
                                    invalidText="invalid login"
                                    onChange=onChangeLogin
                            }}}

                            {{{ProfInput
                                    text="${data.firstNameLabel}"
                                    id="first_name"
                                    name="${data.firstNameName}"
                                    value="Иван"
                                    invalidText="invalid first name"
                                    onChange=onChangeName
                            }}}

                            {{{ProfInput
                                    text="${data.secondNameLabel}"
                                    id="second_name"
                                    name="${data.secondNameName}"
                                    value="Иванов"
                                    invalidText="invalid second name"
                                    onChange=onChangeName
                            }}}

                            {{{ProfInput
                                    text="${data.phoneLabel}"
                                    id="phone"
                                    name="${data.phoneName}"
                                    value="+7(909)967-30-30"
                                    invalidText="invalid phone"
                                    onChange=onChangePhone
                            }}}

                            {{{Spacing size="xlarge"}}}

                            <div class="profile_submit">
                                {{{Button label="Сохранить" block="block" type="submit"}}}
                            </div>
                        </form>
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
                        <form id="form-change-password">
                            {{{ProfInput
                                    text="${data.oldPasswordLabel}"
                                    type="password"
                                    id="oldPassword"
                                    name="${data.oldPasswordName}"
                                    value="888999"
                                    invalidText="invalid password"
                                    onChange=onChangePassword
                            }}}

                            {{{ ProfInput
                                    text="${data.passwordLabel}"
                                    type="password"
                                    id="newPassword"
                                    name="${data.passwordName}"
                                    value="999999"
                                    invalidText="invalid password"
                                    onChange=onChangePassword
                            }}}

                            {{{ ProfInput
                                    text="${data.repeatPasswordLabel}"
                                    type="password"
                                    id="newPasswordRepeat"
                                    name="${data.repeatPasswordName}"
                                    value="999999"
                                    invalidText="Пароли не совпадают"
                                    onChange=onChangePassword
                            }}}

                            {{{Spacing size="xlarge"}}}

                            <div class="profile_submit">
                                {{{Button label="Сохранить" block="block" type="submit"}}}
                            </div>
                        </form>
                    {{/if}}
                </div>
            </div>
        </main>
    `;
  }
}

export default ProfilePage;
