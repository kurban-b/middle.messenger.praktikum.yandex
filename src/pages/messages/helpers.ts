import ChatsController from '../../controllers/ChatsController';

interface IFormElements extends HTMLFormControlsCollection {
  'dialog-login': HTMLInputElement
}

export const onCreateChat = async (e: SubmitEvent): Promise<void> => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;
  const input = elements['dialog-login'];

  await ChatsController.createChat({ title: input.value });
  await ChatsController.getChats({});
};
