import { isClassListHas } from '../../../../utils/helpers';
import router from '../../../../utils/core/router';
import usersController from '../../../../controllers/UsersController';
import store from '../../../../utils/store';

interface IFormElements extends HTMLFormControlsCollection {
  oldPassword: HTMLInputElement
  newPassword: HTMLInputElement
  newPasswordRepeat: HTMLInputElement
  btn: HTMLButtonElement
}

export const onSubmit = (e: SubmitEvent): void => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;
  const state = store.getState();

  const isHasInvalid = isClassListHas([
    elements.oldPassword,
    elements.newPassword,
    elements.newPasswordRepeat,
  ], 'invalid');

  if (isHasInvalid) return;

  const callback = async () => {
    // @ts-ignore
    const error = state?.auth?.error;

    await usersController.updatePassword({
      oldPassword: elements.oldPassword.value,
      newPassword: elements.newPassword.value,
    });

    if (error) return;

    router.replace(router.pathname);
  };

  callback();
};
