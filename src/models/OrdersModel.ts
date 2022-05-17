import { RowDataPacket } from 'mysql2';
import connection from './connection';

const queryGetAllOrders = `SELECT
  my_orders.id AS id,
  my_users.id AS userId,
  my_products.id AS productsIds
  FROM Trybesmith.Products AS my_products
  INNER JOIN Trybesmith.Orders AS my_orders
  ON my_products.orderId = my_orders.id
  INNER JOIN Trybesmith.Users AS my_users
  ON my_orders.userId = my_users.id
  GROUP BY my_products.id, my_orders.id, my_users.id
  ORDER BY my_users.id`;

class OrdersModel {
  static async getAll() {
    const [ordersList] = await connection.execute<RowDataPacket[]>(queryGetAllOrders);

    const mountedOrders = ordersList.map((orderObject) => {
      const productsArray: number[] = [];

      ordersList.forEach((order) => {
        if (order.id === orderObject.id) productsArray.push(order.productsIds);
      });

      return {
        ...orderObject,
        productsIds: [...productsArray],
      };
    });

    return mountedOrders;
  }
}

export default OrdersModel;