import {EPatterns} from "../../utils/helpers/validator";
import {addBlurValidate, getElement, isClassListHas} from "../../utils/helpers";
import data from "./data";

export const handleSubmitForm = (): void => {
  const formProfile = getElement('#form-change-profile') as HTMLFormElement;
  const formPasswords = getElement('#form-change-password') as HTMLFormElement;

  if (formProfile) {
    const login = getElement(`[name="${data.loginName}"]`) as HTMLInputElement;
    const email = getElement(`[name="${data.emailName}"]`) as HTMLInputElement;
    const phone = getElement(`[name="${data.phoneName}"]`) as HTMLInputElement;
    const firstName = getElement(`[name="${data.firstNameName}"]`) as HTMLInputElement;
    const secondName = getElement(`[name="${data.secondNameName}"]`) as HTMLInputElement;

    formProfile.addEventListener('submit', (e) => {
      e.preventDefault()

      const isHasInvalid = isClassListHas([
        login,
        email,
        firstName,
        secondName,
        phone
      ], 'invalid')

      if (isHasInvalid) return

      console.log({
        login: login.value,
        email: email.value,
        phone: phone.value,
        firstName: firstName.value,
        secondName: secondName.value,
      })
    })

    addBlurValidate(login, EPatterns.login);

    addBlurValidate(phone, EPatterns.phone)

    addBlurValidate(email, EPatterns.email);

    addBlurValidate(firstName, EPatterns.name);

    addBlurValidate(secondName, EPatterns.name);
  }

  if (formPasswords) {
    const oldPassword = getElement(`[name="${data.oldPasswordName}"]`) as HTMLInputElement;
    const password = getElement(`[name="${data.passwordName}"]`) as HTMLInputElement;
    const repeatPassword = getElement(`[name="${data.repeatPasswordName}"]`) as HTMLInputElement;

    formPasswords.addEventListener('submit', (e) => {
      e.preventDefault()

      const isHasInvalid = isClassListHas([
        password,
        repeatPassword,
        oldPassword
      ], 'invalid')

      if (isHasInvalid) return;

      console.log({
        oldPassword: password.value,
        password: password.value,
        repeatPassword: repeatPassword.value
      })
    })

    addBlurValidate(password, EPatterns.password);
    addBlurValidate(oldPassword, EPatterns.password);

    repeatPassword.addEventListener("blur", (e) => {
      const target = e.target as HTMLInputElement

      if (target.value !== password.value) {
        target.classList.add('invalid')
      } else {
        target.classList.remove('invalid')
      }
    })
  }
}
