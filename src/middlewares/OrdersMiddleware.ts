import { NextFunction, Request, Response } from 'express';
import { ordersSchema } from '../schemas';
import { verify } from '../token';

class OrdersMiddleware {
  static async tokenValidation(req: Request, res: Response, next: NextFunction) {
    const { userInfos } = req.body;

    const { error } = ordersSchema.validate(userInfos);

    if (!error) return next();

    if (error.message.includes('required')) return res.status(400).json({ message: error.message });

    return res.status(422).json({ message: error.message });
  }

  static async tokenVerification(req: Request, res: Response, next: NextFunction) {
    const { authorization: userToken } = req.headers;

    if (!userToken) return res.status(401).json({ message: 'Invalid token' });

    const { data } = await verify(userToken);

    if (!data) return res.status(401).json({ message: 'Token not found' });

    req.body.userInfos = data;

    next();
  }
}

export default OrdersMiddleware;