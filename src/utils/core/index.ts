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
import RegistrationPage from '../../pages/registration/registration';
import Input from '../../ui/components/Input';
import LoginForm from "../../pages/login/components/LoginForm";
import RegForm from "../../pages/registration/components/RegForm";
import SettingProfileForm from "../../pages/profile/components/SettingProfileForm";
import SettingPasswordForm from "../../pages/profile/components/SettingPasswordForm";
import Router from "./router";
import Dialog from "../../ui/components/Dialog";
import DialogForm from "../../ui/components/DialogForm";
import Search from "../../pages/messages/components/Search";

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
  registerComponent(LoginForm, 'LoginForm');
  registerComponent(RegForm, 'RegForm');
  registerComponent(SettingProfileForm, 'SettingProfileForm');
  registerComponent(SettingPasswordForm, 'SettingPasswordForm');
  registerComponent(Dialog, 'Dialog');
  registerComponent(DialogForm, 'DialogForm')
  registerComponent(Search, 'Search')
};

//* * обработчик для перехода на другую страницу */
export const handleLocation = (href: string) => {
  Router.go(href)
};
