import data from './data';
import { EPatterns } from '../../utils/helpers/validator';
import { addBlurValidate, getElement, isClassListHas } from '../../utils/helpers';

export const handleSubmitForm = (): void => {
  const form = getElement('#form-reg') as HTMLFormElement;
  const login = getElement(`[name="${data.loginName}"]`) as HTMLInputElement;
  const email = getElement(`[name="${data.emailName}"]`) as HTMLInputElement;
  const phone = getElement(`[name="${data.phoneName}"]`) as HTMLInputElement;
  const firstName = getElement(`[name="${data.firstNameName}"]`) as HTMLInputElement;
  const secondName = getElement(`[name="${data.secondNameName}"]`) as HTMLInputElement;
  const password = getElement(`[name="${data.passwordName}"]`) as HTMLInputElement;
  const repeatPassword = getElement(`[name="${data.repeatPasswordName}"]`) as HTMLInputElement;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isHasInvalid = isClassListHas([
        login,
        password,
        email,
        firstName,
        secondName,
        repeatPassword,
        phone,
      ], 'invalid');

      if (isHasInvalid) return;

      console.log({
        login: login.value,
        email: email.value,
        phone: phone.value,
        firstName: firstName.value,
        secondName: secondName.value,
        password: password.value,
      });
    });

    repeatPassword.addEventListener('blur', (e) => {
      const target = e.target as HTMLInputElement;

      if (target.value !== password.value) {
        target.classList.add('invalid');
      } else {
        target.classList.remove('invalid');
      }
    });

    addBlurValidate(login, EPatterns.login);

    addBlurValidate(password, EPatterns.password);

    addBlurValidate(phone, EPatterns.phone);

    addBlurValidate(email, EPatterns.email);

    addBlurValidate(firstName, EPatterns.name);

    addBlurValidate(secondName, EPatterns.name);
  }
};
