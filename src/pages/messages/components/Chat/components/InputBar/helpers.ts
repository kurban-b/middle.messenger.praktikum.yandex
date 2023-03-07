import MessagesController from "../../../../../../controllers/MessagesController";
import store from "../../../../../../utils/store";

interface IFormElements extends HTMLFormControlsCollection {
  message: HTMLInputElement
}

export const onSubmit = (e: SubmitEvent): void => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;
  const state = store.getState()
  const id = state.chat?.activeChatId

  if (elements.message.value.length === 0 || !id) return;

  MessagesController.sendMessage(id, elements.message.value)

  elements.message.value = '';
};
