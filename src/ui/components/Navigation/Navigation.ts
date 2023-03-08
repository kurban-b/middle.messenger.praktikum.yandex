import './styles.less';
import Block from '../../../utils/core/Block';

// Для удобства добавил временно данную навигацию
class Navigation extends Block {
  render(): string {
    // language=hbs
    return `
        <nav class="navigation">
            <ul class="navigation__list">
                <li>
                    <a href="/">
                        Вход
                    </a>
                </li>

                <li>
                    <a href="/sign-up">
                        Регистрация
                    </a>
                </li>

                <li class="navigation__list_item">
                    <a href="/messenger">
                        Чат
                    </a>
                </li>

                <li>
                    <a href="/settings">
                        Профиль
                    </a>
                </li>
            </ul>
        </nav>
    `;
  }
}

export default Navigation;
