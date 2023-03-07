import {isClassListHas} from "../../../../utils/helpers";
import AuthController from "../../../../controllers/AuthController";

interface IFormElements extends HTMLFormControlsCollection {
  login: HTMLInputElement
  password: HTMLInputElement
  btn: HTMLButtonElement
}

export const onSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;

  const isHasInvalid = isClassListHas([elements.login, elements.password], 'invalid');

  if (isHasInvalid) return;

  AuthController.signin({
    login: elements.login.value,
    password: elements.password.value
  })
}
