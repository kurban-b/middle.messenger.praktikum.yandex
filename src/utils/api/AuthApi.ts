import BaseAPI from '../core/base-api';
import { ISignInPost, SignupData, User } from '../types/auth';

class AuthApi extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signin(data: ISignInPost) {
    return this.http.post('/signin', { data });
  }

  signup(data: SignupData) {
    return this.http.post('/signup', { data });
  }

  getUser(): Promise<User> {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }
}

export default AuthApi;
