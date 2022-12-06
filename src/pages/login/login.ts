import './styles.less';
import Block from '../../utils/core/Block';
import data from './data';
import { handleSubmitForm, onClickReg } from './helpers';
import { onChangeInvalidClass } from '../../utils/helpers';
import { EPatterns } from '../../utils/helpers/validator';

export default class LoginPage extends Block {
  constructor(props) {
    super({
      ...props,
      onClickReg,
      onChangeLogin: onChangeInvalidClass(EPatterns.login),
      onChangePassword: onChangeInvalidClass(EPatterns.password),
    });
  }

  componentDidMount(oldProps: any) {
    handleSubmitForm();

    super.componentDidMount(oldProps);
  }

  render() {
    // language=hbs
    return `
        <div class="login-page">
            {{{Navigation}}}

            <main class="login-page__box">
                <h1>
                    ${data.title}
                </h1>

                <form id="form-login">
                    {{{TextField
                            name="${data.loginName}"
                            label="${data.loginLabel}"
                            required="required"
                            invalidText="Invalid login"
                            onChange=onChangeLogin
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            name="${data.passwordName}"
                            label="${data.passwordLabel}"
                            required="required"
                            type="password"
                            invalidText="Invalid password"
                            onChange=onChangePassword
                    }}}

                    {{{Spacing size="ularge"}}}

                    {{{Spacing size="xxlarge"}}}

                    {{{Button label="${data.authText}" block="block" type="submit"}}}
                </form>

                {{{Spacing size="xxsmall"}}}

                {{{Button label="${data.regText}" block="block" view="link" onClick=onClickReg}}}
            </main>
        </div>
    `;
  }
}
