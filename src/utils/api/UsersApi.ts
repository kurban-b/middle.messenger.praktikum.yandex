import BaseAPI from "../core/base-api";
import {User} from "../types/auth";
import {ChangePasswordRequest, FindUserRequest, UserRequestData} from "../types/users";


class UsersApi extends BaseAPI {
  constructor() {
    super('/user');
  }

  getUserById(userId: string): Promise<User> {
    return this.http.get(`/${userId}`)
  }

  updateProfile(data: UserRequestData): Promise<User> {
    return this.http.put('/profile', { data })
  }

  updateAvatar(avatar: FormData): Promise<User> {
    return this.http.put('/profile/avatar', {
      data: avatar,
      headers: {
      } })
  }

  updatePassword(data: ChangePasswordRequest) {
    return this.http.put(`/password`, { data })
  }

  searchUser(data: FindUserRequest): Promise<User[]> {
    return this.http.post(`/search`, { data })
  }
}

export default UsersApi;
