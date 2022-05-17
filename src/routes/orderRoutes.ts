import express from 'express';
import { OrdersController } from '../controllers';

const orderRoutes = express.Router();

orderRoutes
  .get('/', OrdersController.getAll);

export default orderRoutes;