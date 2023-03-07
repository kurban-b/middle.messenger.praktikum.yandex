import { User } from './auth';
import { Chats } from './chats';
import { Message } from './messages';

export interface Store {
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
  messages?: Record<number, Message[]>
}
