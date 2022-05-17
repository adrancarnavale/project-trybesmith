import { NextFunction, Request, Response } from 'express';
import { productsSchema } from '../schemas';
import {
  errorHandlingProductsObject,
} from '../constants';
import { IProductsErrorHandling } from '../types';

class ProductsMiddleware {
  static async ProductsValidation(req: Request, res: Response, next: NextFunction) {
    const { body: productCreationObject } = req;

    const { error } = productsSchema.validate(productCreationObject);

    if (!error) return next();

    const statusCode = errorHandlingProductsObject[error?.message as keyof IProductsErrorHandling];

    return res.status(statusCode).json({ message: error.message });
  }
}

export default ProductsMiddleware;
