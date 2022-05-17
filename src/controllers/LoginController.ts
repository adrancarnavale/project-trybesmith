import { Request, Response } from 'express';
import { LoginService } from '../services';
import { generate } from '../token';

class LoginController {
  static async login(req: Request, res: Response) {
    const { body: userInfos } = req;

    const loginObjectRequest = {
      ...userInfos,
    };

    const foundUser = await LoginService.login(loginObjectRequest);

    if (foundUser.length === 0) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const userInfosWithId = {
      ...loginObjectRequest,
      id: foundUser[0].id,
    };

    const token = await generate(userInfosWithId);

    return res.status(200).json({ token });
  }
}

export default LoginController;