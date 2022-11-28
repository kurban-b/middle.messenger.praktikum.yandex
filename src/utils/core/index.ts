import Handlebars from 'handlebars/dist/handlebars.runtime'
import profile from "../../pages/profile";
import login from "../../pages/login";
import registration from "../../pages/registration";
import messages from "../../pages/messages";
import Button from "../../ui/components/Button";
import Spacing from "../../ui/components/Spacing";
import TextField from "../../ui/components/TextField";
import Avatar from "../../ui/components/Avatar";
import Contacts from "../../pages/messages/components/Contacts";
import Chat from "../../pages/messages/components/Chat";
import Message from "../../pages/messages/components/Chat/components/Message";
import InputBar from "../../pages/messages/components/Chat/components/InputBar";
import ProfAvatar from "../../pages/profile/components/ProfAvatar";
import ProfInput from "../../pages/profile/components/ProfInput";
import Navigation from "../../ui/components/Navigation";
import page404 from "../../pages/page404";

//** Регистрирует паршилы для hbs */
export const handlebarsRegisterPartial = () => {
    Handlebars.registerPartial('Button', Button)
    Handlebars.registerPartial('Spacing', Spacing)
    Handlebars.registerPartial('TextField', TextField)
    Handlebars.registerPartial('Avatar', Avatar)
    Handlebars.registerPartial('Contacts', Contacts)
    Handlebars.registerPartial('Chat', Chat)
    Handlebars.registerPartial('Message', Message)
    Handlebars.registerPartial('InputBar', InputBar)
    Handlebars.registerPartial('ProfAvatar', ProfAvatar)
    Handlebars.registerPartial('ProfInput', ProfInput)
    Handlebars.registerPartial('Navigation', Navigation)
}

//** Временная функция для примитивного роутинга */
export const initRouter = (): void => {
    window._handleLocation = (href) => {
        window.location.href = href
    }

    switch (window.location.pathname) {
        case '/':
            return login();

        case '/registration':
            return registration();

        case '/chat':
            return messages();

        case '/profile':
            return profile();

        default :
            return page404()

    }
}
