import './styles.less';
import Block from '../../utils/core/Block';
import data from './data';
import { onClickReg } from './helpers';

interface ILoginPageProps {
  onClickReg?: () => void
}

export default class LoginPage extends Block {
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
            </main>
        </div>
    `;
  }
}
