import { Request, Response } from 'express';
import { OrdersService } from '../services';

class OrdersController {
  static async getAll(req: Request, res: Response) {
    const ordersList = await OrdersService.getAll();

    return res.status(200).json(ordersList);
  }
}

export default OrdersController;