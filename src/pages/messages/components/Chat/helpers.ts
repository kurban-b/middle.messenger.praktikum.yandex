import UsersController from '../../../../controllers/UsersController';
import store from '../../../../utils/store';
import ChatsController from '../../../../controllers/ChatsController';
import { User } from '../../../../utils/types/auth';

interface IFormElements extends HTMLFormControlsCollection {
  'dialog-login': HTMLInputElement
}

export const onAddUser = async (e: SubmitEvent): Promise<void> => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;
  const input = elements['dialog-login'];
  const state = store.getState();
  store.set('users.error', undefined);
  await UsersController.searchUser({ login: input.value });

  // @ts-ignore
  const users = state?.users?.list as User[];
  // @ts-ignore
  const activeChatId = state?.chat?.activeChatId as number;

  const newUsers = users.filter(({ login }) => login === input.value).map(({ id }) => id);

  if (activeChatId && newUsers && newUsers.length > 0) {
    await ChatsController.addChatUsers({ users: newUsers, chatId: activeChatId });
  } else {
    store.set('users.error', 'Нет такого пользователя');
  }
};

export const onRemoveUser = async (e: SubmitEvent): Promise<void> => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const elements = target.elements as IFormElements;
  const input = elements['dialog-login'];
  const state = store.getState();
  store.set('users.error', undefined);
  await UsersController.searchUser({ login: input.value });

  // @ts-ignore
  const users = state?.users?.list as User[];
  // @ts-ignore
  const activeChatId = state?.chat?.activeChatId as number;

  const newUsers = users.filter(({ login }) => login === input.value).map(({ id }) => id);

  if (activeChatId && newUsers && newUsers.length > 0) {
    await ChatsController.deleteChatUsers({ users: newUsers, chatId: activeChatId });
  } else {
    store.set('users.error', 'Нет такого пользователя');
  }
};
