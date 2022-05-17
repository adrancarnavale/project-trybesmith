import express from 'express';
import { ProductsController } from '../controllers';
import { ProductsMiddleware } from '../middlewares';

const productsRoutes = express.Router();

productsRoutes
  .get('/', ProductsController.getAll)
  .post('/', ProductsMiddleware.ProductsValidation, ProductsController.create);

export default productsRoutes;
