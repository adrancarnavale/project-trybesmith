import { OrdersModel } from '../models';

class OrdersService {
  static async getAll() {
    const ordersList = await OrdersModel.getAll();

    return ordersList;
  }
}

export default OrdersService;