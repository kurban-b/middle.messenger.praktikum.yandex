import { isClassListHas } from '../../../../utils/helpers';
import AuthController from '../../../../controllers/AuthController';

interface IFormElements extends HTMLFormControlsCollection {
  login: HTMLInputElement
  email: HTMLInputElement
  first_name: HTMLInputElement
  second_name: HTMLInputElement
  phone: HTMLInputElement
  password: HTMLInputElement
  repeatPassword: HTMLInputElement
  btn: HTMLButtonElement
}

export const onSubmit = (e: SubmitEvent): void => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;

  const isHasInvalid = isClassListHas([
    elements.login,
    elements.password,
    elements.phone,
    elements.first_name,
    elements.second_name,
    elements.email,
    elements.repeatPassword,
  ], 'invalid');

  if (isHasInvalid) return;

  AuthController.signup({
    login: elements.login.value,
    email: elements.email.value,
    phone: elements.phone.value,
    first_name: elements.first_name.value,
    second_name: elements.second_name.value,
    password: elements.login.value,
  });
};
