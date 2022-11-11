import login from "./pages/login";
import {handlebarsRegisterPartial, initRouter} from "./utils/core";
import messages from "./pages/messages";

//** Рендаринг в DOM */
document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');

    // регистрируем паршилы
    handlebarsRegisterPartial()

    // инициазируем функцию для роутинга
    initRouter(root)

    root.innerHTML = login()
})
