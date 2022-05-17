import { OkPacket } from 'mysql2';
import { ProductsModel } from '../models';
import { IProduct, IProductCreationObject } from '../types';

class ProductsService {
  static async getAll(): Promise<IProduct[]> {
    const productsList = await ProductsModel.getAll();

    return productsList;
  }

  static async create(productCreationObject: IProductCreationObject): Promise<OkPacket> {
    const productCreationReturn = await ProductsModel.create(productCreationObject);

    return productCreationReturn;
  }
}

export default ProductsService;