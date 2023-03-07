import Block from '../../../../utils/core/Block';
import data from '../../data';
import { onSubmit } from './helpers';
import { decoratorHandler, onChangeInvalidClass } from '../../../../utils/helpers';
import { EPatterns } from '../../../../utils/helpers/validator';
import connect from '../../../../utils/store/connect';
import { User } from '../../../../utils/types/auth';

type ISettingProfileForm = User

class SettingProfileForm extends Block {
  constructor({ ...props }: ISettingProfileForm) {
    super({
      ...props,
      onChangeLogin: onChangeInvalidClass(EPatterns.login),
      onChangeName: onChangeInvalidClass(EPatterns.name),
      onChangePhone: onChangeInvalidClass(EPatterns.phone),
      onChangeEmail: onChangeInvalidClass(EPatterns.email),

      onBlurLogin: decoratorHandler(EPatterns.login),
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
      <form id="form-change-profile">
          {{{ProfInput
                  text="${data.emailLabel}"
                  id="email"
                  name="${data.emailName}"
                  value=email
                  invalidText="invalid email"
                  onChange=onChangeEmail
                  onBlur=onBlurEmail
          }}}

          {{{ProfInput
                  text="${data.loginLabel}"
                  id="login"
                  name="${data.loginName}"
                  value=login
                  invalidText="invalid login"
                  onChange=onChangeLogin
                  onBlur=onBlurLogin
          }}}

          {{{ProfInput
                  text="${data.firstNameLabel}"
                  id="first_name"
                  name="${data.firstNameName}"
                  value=first_name
                  invalidText="invalid first name"
                  onChange=onChangeName
                  onBlur=onBlurName
          }}}

          {{{ProfInput
                  text="${data.secondNameLabel}"
                  id="second_name"
                  name="${data.secondNameName}"
                  value=second_name
                  invalidText="invalid second name"
                  onChange=onChangeName
          }}}

          {{{ProfInput
                  text="${data.displayNameLabel}"
                  id="display_name"
                  name="${data.displayNameName}"
                  value=display_name
                  invalidText="invalid display name"
                  onChange=onChangeName
          }}}

          {{{ProfInput
                  text="${data.phoneLabel}"
                  id="phone"
                  name="${data.phoneName}"
                  value=phone
                  invalidText="invalid phone"
                  onChange=onChangePhone
                  onBlur=onBlurPhone
          }}}

          {{{Spacing size="xlarge"}}}

          <div class="profile_submit">
              {{{Button label="Сохранить" block="block" type="submit"}}}
          </div>
      </form>
    `;
  }
}

export default connect(((state) => ({ ...state.auth.profile })))(SettingProfileForm);
