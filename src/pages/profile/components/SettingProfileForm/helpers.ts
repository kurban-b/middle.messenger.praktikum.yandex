import { isClassListHas } from '../../../../utils/helpers';
import router from '../../../../utils/core/router';
import usersController from '../../../../controllers/UsersController';

interface IFormElements extends HTMLFormControlsCollection {
  login: HTMLInputElement
  email: HTMLInputElement
  first_name: HTMLInputElement
  second_name: HTMLInputElement
  display_name: HTMLInputElement
  phone: HTMLInputElement
  btn: HTMLButtonElement
}

export const onSubmit = (e: SubmitEvent): void => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;

  const isHasInvalid = isClassListHas([
    elements.login,
    elements.phone,
    elements.first_name,
    elements.second_name,
    elements.email,
    elements.display_name,
  ], 'invalid');

  if (isHasInvalid) return;

  const callback = async () => {
    await usersController.updateProfile({
      login: elements.login.value,
      email: elements.email.value,
      phone: elements.phone.value,
      first_name: elements.first_name.value,
      second_name: elements.second_name.value,
      display_name: elements.display_name.value,
    });

    router.replace(router.pathname);
  };

  callback();
};
