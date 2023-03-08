import Block from '../../../../utils/core/Block';
import data from './data';
import { onSubmit } from './helpers';
import { decoratorHandler, onChangeInvalidClass } from '../../../../utils/helpers';
import { EPatterns } from '../../../../utils/helpers/validator';

interface IRegForm {}

class RegForm extends Block {
  constructor({ ...props }: IRegForm) {
    super({
      ...props,
      onChangeLogin: onChangeInvalidClass(EPatterns.login),
      onChangePassword: onChangeInvalidClass(EPatterns.password),
      onChangeName: onChangeInvalidClass(EPatterns.name),
      onChangePhone: onChangeInvalidClass(EPatterns.phone),
      onChangeEmail: onChangeInvalidClass(EPatterns.email),
      onBlurLogin: decoratorHandler(EPatterns.login),
      onBlurPassword: decoratorHandler(EPatterns.password),
      onBlurEmail: decoratorHandler(EPatterns.email),
      onBlurName: decoratorHandler(EPatterns.name),
      onBlurPhone: decoratorHandler(EPatterns.phone),
      events: {
        submit: onSubmit,
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <form id="form-reg">
            {{{TextField
                    name="${data.emailName}"
                    label="${data.emailLabel}"
                    required="required"
                    invalidText="Invalid email"
                    onChange=onChangeEmail
                    onBlur=onBlurEmail
            }}}

            {{{Spacing size="small"}}}

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
                    name="${data.firstNameName}"
                    label="${data.firstNameLabel}"
                    required="required"
                    invalidText="Invalid first name"
                    onChange=onChangeName
                    onBlur=onBlurName
            }}}

            {{{Spacing size="small"}}}

            {{{TextField
                    name="${data.secondNameName}"
                    label="${data.secondNameLabel}"
                    required="required"
                    invalidText="Invalid second name"
                    onChange=onChangeName
                    onBlur=onBlurName
            }}}

            {{{Spacing size="small"}}}

            {{{TextField
                    type="tel"
                    name="${data.phoneName}"
                    label="${data.phoneLabel}"
                    required="required"
                    invalidText="Invalid phone"
                    onChange=onChangePhone
                    onBlur=onBlurPhone
            }}}

            {{{Spacing size="small"}}}

            {{{TextField
                    type="password"
                    name="${data.passwordName}"
                    label="${data.passwordLabel}"
                    required="required"
                    invalidText="Invalid password"
                    onChange=onChangePassword
                    onBlur=onBlurPassword
            }}}

            {{{Spacing size="small"}}}

            {{{TextField
                    type="password"
                    name="${data.repeatPasswordName}"
                    label="${data.repeatPasswordLabel}"
                    required="required"
                    invalidText="invalid password"
                    onChange=onChangePassword
                    onBlur=onBlurPassword
            }}}

            {{{Spacing size="ularge"}}}

            {{{Spacing size="xxlarge"}}}

            {{{Button
                    label="${data.regText}"
                    block="block"
                    type="submit"
            }}}
        </form>
    `;
  }
}

export default RegForm;
