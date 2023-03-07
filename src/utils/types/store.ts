import { User } from './auth';
import { Chats } from './chats';
import { IMessage } from './messages';

export interface IStore {
  auth?: {
    profile: User
    error: string
  },
  chat?: {
    chats: Chats[]
    activeChatId?: number
    token?: string
  },
  users?: {
    list: User[]
    error: string
  },
  messages?: Record<number, IMessage[]>
}
