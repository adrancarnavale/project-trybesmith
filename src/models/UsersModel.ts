import { ResultSetHeader } from 'mysql2';
import { IUserCreationObjectRequest } from '../types';
import connection from './connection';

class UsersModel {
  static async create({
    username,
    classe,
    level,
    password,
  }: IUserCreationObjectRequest): Promise<ResultSetHeader> {
    const creationQuery = `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)`;

    const [createUserReturnObject] = await connection
      .execute(creationQuery, [username, classe, level, password]);

    return createUserReturnObject as ResultSetHeader;
  }
}

export default UsersModel;