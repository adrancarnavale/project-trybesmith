import { NextFunction, Request, Response } from 'express';
import {
  errorHandlingUserObject,
} from '../constants';
import usersSchema from '../schemas/usersSchema';
import { IUsersErrorHandling } from '../types';

class UsersMiddleware {
  static async usersValidation(req: Request, res: Response, next: NextFunction) {
    const { body: userCreationObject } = req;

    const { error } = usersSchema.validate(userCreationObject);

    if (!error) return next();

    const statusCode = errorHandlingUserObject[error?.message as keyof IUsersErrorHandling];

    return res.status(statusCode).json({ message: error.message });
  }
}

export default UsersMiddleware;