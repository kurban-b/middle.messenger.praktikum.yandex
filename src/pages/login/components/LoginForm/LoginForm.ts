import Block from '../../../../utils/core/Block';
import data from './data';
import { onSubmit } from './helpers';
import { EPatterns } from '../../../../utils/helpers/validator';
import { decoratorHandler, onChangeInvalidClass } from '../../../../utils/helpers';

interface ILoginForm {}

class LoginForm extends Block {
  constructor({ ...props }: ILoginForm) {
    super({
      ...props,
      onBlurLogin: decoratorHandler(EPatterns.login),
      onBlurPassword: decoratorHandler(EPatterns.password),
      onChangeLogin: onChangeInvalidClass(EPatterns.login),
      onChangePassword: onChangeInvalidClass(EPatterns.password),
      events: {
        submit: onSubmit,
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <form id="form-login">
            {{{TextField
                    name="${data.loginName}"
                    label="${data.loginLabel}"
                    required="required"
                    invalidText="Invalid login"
                    onChange=onChangeLogin
                    onBlur=onBlurLogin

            }}}

            {{{Spacing size="small"}}}

            {{{TextField
                    name="${data.passwordName}"
                    label="${data.passwordLabel}"
                    required="required"
                    type="password"
                    invalidText="Invalid password"
                    onChange=onChangePassword
                    onBlur=onBlurPassword
            }}}

            {{{Spacing size="ularge"}}}

            {{{Spacing size="xxlarge"}}}

            {{{Button label="${data.authText}" block="block" type="submit"}}}
        </form>
    `;
  }
}

export default LoginForm;
