import store from "../utils/store";
import ChatsApi from "../utils/api/ChatsApi";
import {Chats} from "../utils/types/chats";


class ChatsController {
  private readonly api: ChatsApi;

  constructor() {
    this.api = new ChatsApi();
  }

  public async getChats (data: { offset?: number; limit?: number; title?: string }) {
    try {
      const res = await this.api.read(data)

      store.set('chat.chats', res)
    } catch (e) {
      console.error(e)
    }
  }

  public async createChat (data: { title: string }) {
    try {
      const res = await this.api.create(data)
      const state = store.getState() as {chat: { chats: Chats[]}}
      const chats = state.chat.chats
      const newChats = [...chats, res]

      store.set('chat.chats', newChats)
    } catch (e) {
      console.error(e)
    }
  }

  public async deleteChat (chatId: number) {
    try {
      await this.api.delete({chatId})
    } catch (e) {
      console.error(e)
    }
  }

  public async addChatUsers (data: {users: number[]; chatId: number}) {
    try {
      await this.api.addChatUsers(data)
    } catch (e) {
      console.error(e)
    }
  }

  public async deleteChatUsers (data: {users: number[]; chatId: number}) {
    try {
      await this.api.deleteChatUsers(data)
    } catch (e) {
      console.error(e)
    }
  }

  public async getChatsTokens (id: number) {
    try {
      const chatToken = await this.api.getChatsToken(id)

      store.set('chat.token', chatToken.token)
    } catch (e) {
      console.error(e)
    }
  }
}

export default new ChatsController()
