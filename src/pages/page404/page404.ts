import './styles.less';
import Block from "../../utils/core/Block";

class Page404 extends Block {
  render(): string {
    //language=hbs
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

            {{{Button label="Назад к чатам" view="link"}}}
        </main>
      </div>
    `
  }
}

export default Page404
