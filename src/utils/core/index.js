import Handlebars from 'handlebars/dist/handlebars.runtime'
import profile from "../../pages/profile";
import login from "../../pages/login";
import registration from "../../pages/registration";
import messages from "../../pages/messages";

//** Регистрирует паршилы для hbs */
export const handlebarsRegisterPartial = (list) => {
    list.forEach((item) => {
        Handlebars.registerPartial(item.name, item)
    })
}

//** Временная функция для примитивного роутинга */
export const initRouter = (root) => {
  const PAGES = {
    profile: profile,
    login: login,
    registration: registration,
    messages: messages
  }

  window._handleLocation = (page) => {
    root.innerHTML = PAGES[page]()
  }
}
