import login from "./pages/login";
import {handlebarsRegisterPartial, initRouter} from "./utils/core";
import Button from "./ui/components/Button";
import Spacing from "./ui/components/Spacing";
import TextField from "./ui/components/TextField";
import Avatar from "./ui/components/Avatar";
import Contacts from "./pages/messages/components/Contacts";
import Chat from "./pages/messages/components/Chat";
import Message from "./pages/messages/components/Chat/components/Message";
import InputBar from "./pages/messages/components/Chat/components/InputBar";
import ProfAvatar from "./pages/profile/components/ProfAvatar";
import ProfInput from "./pages/profile/components/ProfInput";

//** Рендаринг в DOM */
document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');

    // регистрируем паршилы
    handlebarsRegisterPartial([
        Button,
        Spacing,
        TextField,
        Avatar,
        Contacts,
        Chat,
        Message,
        InputBar,
        ProfAvatar,
        ProfInput
    ])

    // инициазируем функцию для роутинга
    initRouter(root)

    root.innerHTML = login()
})
