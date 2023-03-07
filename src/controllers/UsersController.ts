import UsersApi from '../utils/api/UsersApi';
import { ChangePasswordRequest, FindUserRequest, UserRequestData } from '../utils/types/users';
import store from '../utils/store';

class UsersController {
  private readonly api: UsersApi;

  constructor() {
    this.api = new UsersApi();
  }

  public async getUserById(userId: string) {
    try {
      return await this.api.getUserById(userId);
    } catch (e) {
      console.error(e);
    }
  }

  public async updateProfile(data: UserRequestData) {
    try {
      store.set('auth.error', undefined);

      const res = await this.api.updateProfile(data);

      store.set('auth.profile', res);
    } catch (e: any) {
      store.set('auth.error', e?.reason);

      console.error(e);
    }
  }

  public async updateAvatar(data: FormData) {
    try {
      const res = await this.api.updateAvatar(data);

      store.set('auth.profile', res);
    } catch (e: any) {
      console.error(e);
    }
  }

  public async updatePassword(data: ChangePasswordRequest) {
    try {
      store.set('auth.error', undefined);

      await this.api.updatePassword(data);
    } catch (e: any) {
      store.set('auth.error', e?.reason);

      console.error(e);
    }
  }

  public async searchUser(data: FindUserRequest) {
    try {
      const response = await this.api.searchUser(data);

      store.set('users.list', response);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new UsersController();
