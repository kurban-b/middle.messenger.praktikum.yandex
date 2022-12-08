import './styles.less';
import data from './data';
import Block from '../../utils/core/Block';
import { handleLocation } from '../../utils/core';
import { pages } from '../../utils/constants/route';

interface IRegistrationPage {
  onClickAuth?: () => void
}

class RegistrationPage extends Block {
  constructor(props: IRegistrationPage) {
    super({
      ...props,
      onClickAuth: () => {
        handleLocation(pages.login.href);
      },
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class="auth-page">
            {{{Navigation}}}

            <main class="auth-page__box">
                <h1>
                    ${data.title}
                </h1>

                {{{RegForm}}}

                {{{Spacing size="xxsmall"}}}

                {{{Button
                        label="${data.authText}"
                        block="block"
                        view="link"
                        onClick=onClickAuth
                }}}
            </main>
        </div>
    `;
  }
}

export default RegistrationPage;
