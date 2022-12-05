import './styles.less';
import Icon from './assets/icon__arrow-left_circle.svg';
import ava from '../../../static/images/gomer.png';
import Block from "../../utils/core/Block";
import {pages} from "../../utils/constants/route";

interface IProfilePage {
  iconBack?: string
  avatar?: string
  name?: string
}

class ProfilePage extends Block {
  constructor(props: IProfilePage) {
    super({
      iconBack: Icon,
      avatar: ava,
      name: 'Иванов Иван',
      ...props
    });
  }

  render(): string {
    //language=hbs
    return `
        <main class="profile_group">
            {{{Navigation}}}

            <a class="profile_side_line" href="${pages.chat.href}">
                <img src="{{iconBack}}" alt="">
            </a>

            <!--  Пока что вывел все компоненты сразу  -->
            <div class="profile_info">
                {{{ProfAvatar avatar=avatar}}}

                <div class="profile_name">
                    <h1>{{name}}</h1>
                </div>

                <div class="profile_inputs">
                    {{{ProfInput
                            text="Почта"
                            id="email"
                            name="email"
                            value="pochta@yandex.ru"
                    }}}

                    {{{ProfInput
                            text="Логин"
                            id="login"
                            name="login"
                            value="ivanivanov"
                    }}}

                    {{{ProfInput
                            text="Имя"
                            id="first_name"
                            name="first_name"
                            value="Иван"
                    }}}

                    {{{ProfInput
                            text="Фамилия"
                            id="second_name"
                            name="second_name"
                            value="Иванов"
                    }}}

                    {{{ProfInput
                            text="Имя в чате"
                            id="display_name"
                            name="display_name"
                            value="Иван"
                    }}}

                    {{{ProfInput
                            text="Телефон"
                            id="phone"
                            name="phone"
                            value="+7 (909) 967 30 30"
                    }}}

                    {{{ Spacing size="xlarge" }}}

                    {{{ProfInput
                            text="Старый пароль"
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            value="888999"
                    }}}

                    {{{ ProfInput
                            text="Новый пароль"
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value="999999"
                    }}}

                    {{{ ProfInput
                            text="Повторите новый пароль"
                            type="password"
                            id="newPasswordRepeat"
                            name="newPasswordRepeat"
                            value="999999"
                    }}}
                </div>

                <div class="profile__buttons">
                    <div class="profile__buttons_item line">
                        <button>
                            Изменить данные
                        </button>
                    </div>

                    <div class="profile__buttons_item line">
                        <button>
                            Изменить пароль
                        </button>
                    </div>

                    <div class="profile__buttons_item red">
                        <button>
                            Выйти
                        </button>
                    </div>
                </div>

                {{{Spacing size="xlarge"}}}

                <div class="profile_submit">
                    {{{Button label="Сохранить" block="block"}}}
                </div>
            </div>
        </main>
    `
  }
}

export default ProfilePage
