import { Request, Response } from 'express';
import { ProductsService } from '../services';

class ProductsController {
  static async getAll(_req: Request, res: Response) {
    const productsList = await ProductsService.getAll();

    return res.status(200).json(productsList);
  }

  static async create(req: Request, res: Response) {
    const { name, amount } = req.body;

    const productCreationObject = { name, amount };

    const { insertId: id } = await ProductsService.create(productCreationObject);

    const productCreationReturnObject = { id, name, amount };

    return res.status(201).json(productCreationReturnObject);
  }
}

export default ProductsController;