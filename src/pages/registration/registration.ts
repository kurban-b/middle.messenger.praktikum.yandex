import './styles.less';
import Block from '../../utils/core/Block';
import { pages } from '../../utils/constants/route';
import router from '../../utils/core/router';
import connect from '../../utils/store/connect';

interface IRegistrationPage {
  onClickAuth?: () => void
}

class RegistrationPage extends Block {
  constructor(props: IRegistrationPage) {
    super({
      ...props,
      onClickAuth: () => {
        router.go(pages.login.href);
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class="auth-page">
            {{{Navigation}}}

            <main class="auth-page__box">
                <h1>
                    Регистрация
                </h1>

                {{{RegForm}}}

                {{{Spacing size="xxsmall"}}}

                {{{Button
                        label="Войти"
                        block="block"
                        view="link"
                        onClick=onClickAuth
                }}}

                {{#if error}}
                    <div>
                        {{{Spacing size="xxsmall"}}}

                        <div class="login-page__error">
                            {{error}}
                        </div>
                    </div>
                {{/if}}
            </main>
        </div>
    `;
  }
}

export default connect((state) => ({ error: state?.auth?.error }))(RegistrationPage);
