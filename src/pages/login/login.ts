import './styles.less';
import Block from "../../utils/core/Block";
import data from "./data";
import {handleLocation} from "../../utils/core";
import {pages} from "../../utils/constants/route";

export default class LoginPage extends Block {
  constructor(props) {
    super({
      ...props,

      onClickAuth: () => {
        handleLocation(pages.chat.href)
      },

      onClickReg: () => {
        handleLocation(pages.reg.href)
      }
    });
  }

  render() {
    //language=hbs
    return `
        <div class="login-page">
            {{{Navigation}}}

            <main class="login-page__box">
                <h1>
                    ${data.title}
                </h1>

                <form>
                    {{{TextField
                            name="${data.loginName}"
                            label="${data.loginLabel}"
                            required="required"
                    }}}

                    {{{Spacing size="small"}}}

                    {{{TextField
                            name="${data.passwordName}"
                            label="${data.passwordLabel}"
                            required="required"
                    }}}

                    {{{Spacing size="ularge"}}}

                    {{{Spacing size="xxlarge"}}}
                </form>

                {{{Button label="${data.authText}" block="block" onClick=onClickAuth}}}

                {{{Spacing size="xxsmall"}}}

                {{{Button label="${data.regText}" block="block" view="link" onClick=onClickReg}}}
            </main>
        </div>
    `
  }
}
