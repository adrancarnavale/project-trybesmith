import { UsersModel } from '../models';
import { IUserCreationObjectRequest } from '../types';

class UsersService {
  static async create(usersModelObjectRequest: IUserCreationObjectRequest) {
    const createUserReturnObject = await UsersModel.create(usersModelObjectRequest);

    return createUserReturnObject;
  }
}

export default UsersService;