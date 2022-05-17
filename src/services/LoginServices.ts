import LoginModel from '../models/LoginModel';
import { ILoginObjectRequest } from '../types';

class LoginService {
  static async login(loginObjectRequest: ILoginObjectRequest) {
    const foundUser = await LoginModel.login(loginObjectRequest);

    return foundUser;
  }
}

export default LoginService;