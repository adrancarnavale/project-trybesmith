import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import { LoginMiddleware } from '../middlewares';

const loginRoutes = Router();

loginRoutes
  .post('/', LoginMiddleware.loginValidation, LoginController.login);

export default loginRoutes;