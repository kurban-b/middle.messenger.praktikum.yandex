import './styles.less';
import Block from '../../utils/core/Block';

class Page500 extends Block {
  render(): string {
    // language=hbs
    return `
      <div class="page500_wrapper">
        <main class="page500">
            <h1>
                500
            </h1>

            {{{Spacing size="large"}}}

            <h3>
                Ошибка на сервере
            </h3>

            {{{Spacing size="xxlarge"}}}

            {{{Button label="Назад к чатам" view="link"}}}
        </main>
      </div>
    `;
  }
}

export default Page500;
