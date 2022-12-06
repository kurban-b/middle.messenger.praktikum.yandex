import { handleLocation } from '../../utils/core';
import { pages } from '../../utils/constants/route';
import data from './data';
import { EPatterns } from '../../utils/helpers/validator';
import { addBlurValidate, getElement, isClassListHas } from '../../utils/helpers';

export const onClickReg = (): void => {
  handleLocation(pages.reg.href);
};

export const handleSubmitForm = (): void => {
  const form = getElement('#form-login') as HTMLFormElement;
  const login = getElement(`[name="${data.loginName}"]`) as HTMLInputElement;
  const password = getElement(`[name="${data.passwordName}"]`) as HTMLInputElement;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const hasInvalid = isClassListHas([login, password], 'invalid');

      if (hasInvalid) return;

      console.log({
        login: login.value,
        password: password.value,
      });
    });

    addBlurValidate(login, EPatterns.login);

    addBlurValidate(password, EPatterns.password);
  }
};
