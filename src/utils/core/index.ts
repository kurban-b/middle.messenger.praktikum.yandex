import Button from '../../ui/components/Button';
import Spacing from '../../ui/components/Spacing';
import TextField from '../../ui/components/TextField';
import Avatar from '../../ui/components/Avatar';
import Contacts from '../../pages/messages/components/Contacts';
import Chat from '../../pages/messages/components/Chat';
import Message from '../../pages/messages/components/Chat/components/Message';
import InputBar from '../../pages/messages/components/Chat/components/InputBar';
import ProfAvatar from '../../pages/profile/components/ProfAvatar';
import ProfInput from '../../pages/profile/components/ProfInput';
import Navigation from '../../ui/components/Navigation';
import { registerComponent } from './registerComponent';
import LoginPage from '../../pages/login';
import RegistrationPage from '../../pages/registration/registration';
import Block from './Block';
import Page404 from '../../pages/page404';
import MessagesPage from '../../pages/messages';
import Profile from '../../pages/profile';
import { pages } from '../constants/route';
import Input from '../../ui/components/Input';

//* * Регистрирует компоненты при помощи хендлеров в hbs */
export const handlebarsRegisterComponents = () => {
  registerComponent(Button, 'Button');
  registerComponent(Spacing, 'Spacing');
  registerComponent(TextField, 'TextField');
  registerComponent(RegistrationPage, 'RegistrationPage');
  registerComponent(Avatar, 'Avatar');
  registerComponent(Contacts, 'Contacts');
  registerComponent(Chat, 'Chat');
  registerComponent(Message, 'Message');
  registerComponent(InputBar, 'InputBar');
  registerComponent(ProfAvatar, 'ProfAvatar');
  registerComponent(ProfInput, 'ProfInput');
  registerComponent(Navigation, 'Navigation');
  registerComponent(Input, 'Input');
};

//* * Временная функция для примитивного роутинга */
export const initRouter = (): Block | null => {
  switch (window.location.pathname) {
    case pages.login.href:
      return new LoginPage({});

    case pages.reg.href:
      return new RegistrationPage({});

    case pages.chat.href:
      return new MessagesPage({});

    case pages.profile.href:
      return new Profile({});

    default:
      return new Page404();
  }
};

//* * обработчик для перехода на другую страницу */
export const handleLocation = (href: string) => {
  window.location.pathname = href;
};
