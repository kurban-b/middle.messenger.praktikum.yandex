import {isClassListHas} from "../../../../utils/helpers";

interface IFormElements extends HTMLFormControlsCollection {
  oldPassword: HTMLInputElement
  newPassword: HTMLInputElement
  newPasswordRepeat: HTMLInputElement
  btn: HTMLButtonElement
}

export const onSubmit = (e: SubmitEvent ): void => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;

  const isHasInvalid = isClassListHas([
    elements.oldPassword,
    elements.newPassword,
    elements.newPasswordRepeat,
  ], 'invalid');

  if (isHasInvalid) return;

  console.log({
    oldPassword: elements.oldPassword.value,
    newPassword: elements.newPassword.value,
    newPasswordRepeat: elements.newPasswordRepeat.value,
  })
}
