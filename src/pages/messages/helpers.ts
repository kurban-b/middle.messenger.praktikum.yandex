import { getElement } from '../../utils/helpers';

export const handleSubmitForm = (): void => {
  const form = getElement('#form-message') as HTMLFormElement;
  const message = getElement('[name="message"]') as HTMLInputElement;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (message.value.length === 0) return;

      console.log({
        message: message.value,
      });

      message.value = '';
    });
  }
};
