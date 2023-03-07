import {User} from "./auth";

export interface LastMessage {
  user: User
  time: string,
  content: string
}

export interface Chats {
  id: 123,
  title: string,
  avatar: string,
  unread_count: number | null,
  last_message: LastMessage | null
}
