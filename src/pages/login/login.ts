import './styles.less';
import Block from '../../utils/core/Block';
import data from './data';
import { onClickReg } from './helpers';
import connect from '../../utils/store/connect';

interface ILoginPageProps {
  onClickReg?: () => void
  error?: string
}

class LoginPage extends Block {
  constructor(props: ILoginPageProps) {
    super({
      ...props,
      onClickReg,
    });
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

                {{{LoginForm onSubmit=onSubmit}}}

                {{{Spacing size="xxsmall"}}}

                {{{Button label="${data.regText}" block="block" view="link" onClick=onClickReg}}}

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

export default connect((state) => ({ error: state?.auth?.error }))(LoginPage);
