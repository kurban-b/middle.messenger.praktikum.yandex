import './styles.less';
import data from './data';
import Block from "../../utils/core/Block";

class RegistrationPage extends Block {
  render(): string {
    //language=hbs
    return `
        <div class="auth-page">
            {{{Navigation}}}

            <main class="auth-page__box">
                <h1>
                    ${data.title}
                </h1>

                <form>
                    {{{TextField
                            name="${data.emailName}"
                            label="${data.emailLabel}"
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            name="${data.loginName}"
                            label="${data.loginLabel}"
                            required="required"
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            name="${data.firstNameName}"
                            label="${data.firstNameLabel}"
                            required="required"
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            name="${data.secondNameName}"
                            label="${data.secondNameLabel}"
                            required="required"
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            type="number"
                            name="${data.phoneName}"
                            label="${data.phoneLabel}"
                            required="required"
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            type="password"
                            name="${data.passwordName}"
                            label="${data.passwordLabel}"
                            required="required"
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            type="password"
                            name="${data.repeatPasswordName}"
                            label="${data.repeatPasswordLabel}"
                            required="required"
                    }}}

                    {{{Spacing size="ularge"}}}

                    {{{Spacing size="xxlarge"}}}
                </form>

                {{{Button
                        label="${data.regText}"
                        block="block"
                }}}

                {{{Spacing size="xxsmall"}}}

                {{{Button
                        label="${data.authText}"
                        block="block"
                        view="link"
                }}}
            </main>
        </div>
    `
  }
}

export default RegistrationPage
