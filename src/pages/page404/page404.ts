import './styles.less';
import Block from '../../utils/core/Block';
import router from '../../utils/core/router';
import { pages } from '../../utils/constants/route';

class Page404 extends Block {
  constructor(props: Record<string, unknown>) {
    super({
      onClick() {
        router.go(pages.chat.href);
      },
      ...props,
    });
  }

  render(): string {
    // language=hbs
    return `
      <div class="page404_wrapper">
        <main class="page404">
            <h1>
                404
            </h1>

            {{{Spacing size="large"}}}

            <h3>
                Не туда попали
            </h3>

            {{{Spacing size="xxlarge"}}}

            {{{Button label="Назад к чатам" view="link" onClick=onClick}}}
        </main>
      </div>
    `;
  }
}

export default Page404;
