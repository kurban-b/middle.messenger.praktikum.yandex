import BaseAPI from '../core/base-api';
import { Chats } from '../types/chats';

class ChatsApi extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read(data: { offset?: number; limit?: number; title?: string }): Promise<Chats[]> {
    return this.http.get('', { data });
  }

  create(data: { title: string }) {
    return this.http.post('', { data });
  }

  delete(data: { chatId: number }): Promise<unknown> {
    return this.http.delete('', { data });
  }

  addChatUsers(data: {users: number[]; chatId: number}) {
    return this.http.put('/users', { data });
  }

  deleteChatUsers(data: {users: number[]; chatId: number}) {
    return this.http.delete('/users', { data });
  }

  getChatsToken(id: number): Promise<{ token: string }> {
    return this.http.post(`/token/${id}`);
  }
}

export default ChatsApi;
