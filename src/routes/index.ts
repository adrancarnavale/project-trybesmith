import express from 'express';
import productsRoutes from './ProductsRoutes';
import userRoutes from './UserRoutes';
import orderRoutes from './orderRoutes';
import loginRoutes from './loginRoutes';

const routes = express.Router();

routes.use('/products', productsRoutes);
routes.use('/users', userRoutes);
routes.use('/orders', orderRoutes);
routes.use('/login', loginRoutes);

export default routes;
