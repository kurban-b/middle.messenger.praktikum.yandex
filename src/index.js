"use strict";
exports.__esModule = true;
var core_1 = require("./utils/core");
//** Рендаринг в DOM */
document.addEventListener('DOMContentLoaded', function () {
    var root = document.querySelector('#root');
    // регистрируем паршилы
    (0, core_1.handlebarsRegisterPartial)();
    // инициазируем функцию для роутинга
    root.innerHTML = (0, core_1.initRouter)();
});
