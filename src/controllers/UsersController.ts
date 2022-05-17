import { Request, Response } from 'express';
import { UsersService } from '../services';
import { generate } from '../token';

class UsersController {
  static async create(req: Request, res: Response) {
    // const { userName, classe, level, password } = req.body;

    const usersModelObjectRequest = {
      ...req.body,
    };

    const { insertId } = await UsersService.create(usersModelObjectRequest);

    const token = await generate({ ...usersModelObjectRequest, insertId });

    return res.status(201).json({ token });
  }
}

export default UsersController;
