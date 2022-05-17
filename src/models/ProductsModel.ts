import { OkPacket } from 'mysql2';
import { IProduct, IProductCreationObject } from '../types';
import connection from './connection';

class ProductsModel {
  static async getAll(): Promise<IProduct[]> {
    const getAllQuery = 'SELECT * FROM Trybesmith.Products';

    const [productsList] = await connection.execute(getAllQuery);

    return productsList as IProduct[];
  }

  static async create({ name, amount }: IProductCreationObject): Promise<OkPacket> {
    const createQuery = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

    const [productCreationReturn] = await connection.execute(createQuery, [name, amount]);

    return productCreationReturn as OkPacket;
  }
}

export default ProductsModel;