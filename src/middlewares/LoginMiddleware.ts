import { NextFunction, Request, Response } from 'express';
import { loginSchema } from '../schemas';

class LoginMiddleware {
  static async loginValidation(req: Request, res: Response, next: NextFunction) {
    const { body: loginRequestInfos } = req;
    const { error } = loginSchema.validate(loginRequestInfos);

    if (!error) return next();

    return res.status(400).json({ message: error.message });
  }
}

export default LoginMiddleware;