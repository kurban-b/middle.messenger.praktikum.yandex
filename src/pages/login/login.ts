import './styles.less';
import Block from "../../utils/core/Block";
import data from "./data";

export default class LoginPage extends Block {
  constructor() {
    super();
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

                {{{Button label="${data.authText}" block="block" }}}

                {{{Spacing size="xxsmall"}}}

                {{{Button label="${data.regText}" block="block" view="link" }}}
            </main>
        </div>
    `
  }
}
