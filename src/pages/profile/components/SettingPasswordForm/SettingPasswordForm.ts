import Block from "../../../../utils/core/Block";
import data from "../../data";
import {onSubmit} from "./helpers";
import {decoratorHandler, onChangeInvalidClass} from "../../../../utils/helpers";
import {EPatterns} from "../../../../utils/helpers/validator";

interface ISettingPasswordForm {}

class SettingPasswordForm extends Block {
  constructor(props: ISettingPasswordForm) {
    super({
      ...props,
      onChangePassword: onChangeInvalidClass(EPatterns.password),
      onBlurPassword: decoratorHandler(EPatterns.password),
      events: {
        submit: onSubmit
      }
    });
  }

  render(): string {
    //language=hbs
    return `
        <form id="form-change-password">
            {{{ProfInput
                    text="${data.oldPasswordLabel}"
                    type="password"
                    id="oldPassword"
                    name="${data.oldPasswordName}"
                    value="888999"
                    invalidText="invalid password"
                    onChange=onChangePassword
                    onBlur=onBlurPassword
            }}}

            {{{ ProfInput
                    text="${data.passwordLabel}"
                    type="password"
                    id="newPassword"
                    name="${data.passwordName}"
                    value="999999"
                    invalidText="invalid password"
                    onChange=onChangePassword
                    onBlur=onBlurPassword
            }}}

            {{{ ProfInput
                    text="${data.repeatPasswordLabel}"
                    type="password"
                    id="newPasswordRepeat"
                    name="${data.repeatPasswordName}"
                    value="999999"
                    invalidText="invalid password"
                    onChange=onChangePassword
                    onBlur=onBlurPassword
            }}}

            {{{Spacing size="xlarge"}}}

            <div class="profile_submit">
                {{{Button label="Сохранить" block="block" type="submit"}}}
            </div>
        </form>
    `
  }
}

export default SettingPasswordForm;
