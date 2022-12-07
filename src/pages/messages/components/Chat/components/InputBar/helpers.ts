interface IFormElements extends HTMLFormControlsCollection {
  message: HTMLInputElement
}

export const onSubmit = (e: SubmitEvent): void => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;

  if (elements.message.value.length === 0) return;

  console.log({
    message: elements.message.value,
  });

  elements.message.value = '';
};
