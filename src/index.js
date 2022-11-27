import {handlebarsRegisterPartial, initRouter} from "./utils/core";

//** Рендаринг в DOM */
document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');

    // регистрируем паршилы
    handlebarsRegisterPartial()

    // инициазируем функцию для роутинга
    root.innerHTML = initRouter(root)
})
