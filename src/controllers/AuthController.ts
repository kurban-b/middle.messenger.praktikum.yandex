import AuthApi from '../utils/api/AuthApi';
import { ISignInPost, SignupData } from '../utils/types/auth';
import router from '../utils/core/router';
import { pages } from '../utils/constants/route';
import store from '../utils/store';

class AuthController {
  private readonly api: AuthApi;

  constructor() {
    this.api = new AuthApi();
  }

  public async signin(data: ISignInPost) {
    try {
      store.set('auth.error', undefined);

      await this.api.signin(data);

      router.go(pages.chat.href);
    } catch (e: any) {
      store.set('auth.error', e?.reason);

      console.error(e);
    }
  }

  public async signup(data: SignupData) {
    try {
      store.set('auth.error', undefined);

      await this.api.signup(data);

      await this.api.getUser();

      router.go(pages.chat.href);
    } catch (e: any) {
      store.set('auth.error', e?.reason);

      console.error(e);
    }
  }

  public async logout() {
    try {
      store.set('auth.error', undefined);

      await this.api.logout();

      router.go(pages.login.href);
    } catch (e) {
      console.error(e);
    }
  }

  public async fetchProfile() {
    const data = await this.api.getUser();

    store.set('auth.profile', data);
  }
}

export default new AuthController();
