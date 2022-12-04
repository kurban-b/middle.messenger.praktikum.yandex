import {render} from "./utils/core/renderDOM";
import {handlebarsRegisterComponents, initRouter} from "./utils/core";

document.addEventListener('DOMContentLoaded', () => {
  handlebarsRegisterComponents()

  render('#root', initRouter())
})

