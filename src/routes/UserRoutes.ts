import express from 'express';
import { UsersController } from '../controllers';
import { UsersMiddleware } from '../middlewares';

const userRoutes = express.Router();

userRoutes
  .post('/', UsersMiddleware.usersValidation, UsersController.create);

export default userRoutes;