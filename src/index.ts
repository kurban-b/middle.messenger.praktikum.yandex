import { handlebarsRegisterComponents } from './utils/core';
import Router from "./utils/core/router";
import {pages} from "./utils/constants/route";
import RegistrationPage from "./pages/registration";
import MessagesPage from "./pages/messages";
import ProfilePage from "./pages/profile";
import LoginPage from "./pages/login";
import Block from "./utils/core/Block";
import AuthController from "./controllers/AuthController";

document.addEventListener('DOMContentLoaded', async () => {
  handlebarsRegisterComponents()

  function getPageComponent<T>(component: T): Block {
    return component as Block
  }

  Router.use(pages.login.href, getPageComponent(LoginPage))
    .use(pages.reg.href, getPageComponent(RegistrationPage))
    .use(pages.chat.href, getPageComponent(MessagesPage))
    .use(pages.profile.href, getPageComponent(ProfilePage))

  let isProtectedRoute = true;

  try {
    await AuthController.fetchProfile();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(pages.chat.href)
    }
  } catch (e) {
    Router.start()

    if (isProtectedRoute) {
      Router.go(pages.login.href)
    }
  }
});
