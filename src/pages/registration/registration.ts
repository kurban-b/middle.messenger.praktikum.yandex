import './styles.less';
import data from './data';
import Block from '../../utils/core/Block';
import { handleLocation } from '../../utils/core';
import { pages } from '../../utils/constants/route';
import { handleSubmitForm } from './helpers';
import { onChangeInvalidClass } from '../../utils/helpers';
import { EPatterns } from '../../utils/helpers/validator';

interface IRegistrationPage {
  onClickAuth?: () => void
  onChangeLogin?: () => void
  onChangePassword?: () => void
  onChangeName?: () => void
  onChangePhone?: () => void
  onChangeEmail?: () => void
}

class RegistrationPage extends Block {
  constructor(props: IRegistrationPage) {
    super({
      ...props,
      onClickAuth: () => {
        handleLocation(pages.login.href);
      },
      onChangeLogin: onChangeInvalidClass(EPatterns.login),
      onChangePassword: onChangeInvalidClass(EPatterns.password),
      onChangeName: onChangeInvalidClass(EPatterns.name),
      onChangePhone: onChangeInvalidClass(EPatterns.phone),
      onChangeEmail: onChangeInvalidClass(EPatterns.email),
    });
  }

  componentDidMount(oldProps: any) {
    handleSubmitForm();

    super.componentDidMount(oldProps);
  }

  render(): string {
    // language=hbs
    return `
        <div class="auth-page">
            {{{Navigation}}}

            <main class="auth-page__box">
                <h1>
                    ${data.title}
                </h1>

                <form id="form-reg">
                    {{{TextField
                            name="${data.emailName}"
                            label="${data.emailLabel}"
                            required="required"
                            invalidText="Invalid email"
                            onChange=onChangeEmail
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            name="${data.loginName}"
                            label="${data.loginLabel}"
                            required="required"
                            invalidText="Invalid login"
                            onChange=onChangeLogin
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            name="${data.firstNameName}"
                            label="${data.firstNameLabel}"
                            required="required"
                            invalidText="Invalid first name"
                            onChange=onChangeName
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            name="${data.secondNameName}"
                            label="${data.secondNameLabel}"
                            required="required"
                            invalidText="Invalid second name"
                            onChange=onChangeName
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            type="tel"
                            name="${data.phoneName}"
                            label="${data.phoneLabel}"
                            required="required"
                            invalidText="Invalid phone"
                            onChange=onChangePhone
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            type="password"
                            name="${data.passwordName}"
                            label="${data.passwordLabel}"
                            required="required"
                            invalidText="Invalid password"
                            onChange=onChangePassword
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            type="password"
                            name="${data.repeatPasswordName}"
                            label="${data.repeatPasswordLabel}"
                            required="required"
                            invalidText="Пароли не совпадают"
                            onChange=onChangePassword
                    }}}

                    {{{Spacing size="ularge"}}}

                    {{{Spacing size="xxlarge"}}}

                    {{{Button
                            label="${data.regText}"
                            block="block"
                            type="submit"
                    }}}
                </form>

                {{{Spacing size="xxsmall"}}}

                {{{Button
                        label="${data.authText}"
                        block="block"
                        view="link"
                        onClick=onClickAuth
                }}}
            </main>
        </div>
    `;
  }
}

export default RegistrationPage;
