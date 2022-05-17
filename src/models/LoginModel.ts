import { RowDataPacket } from 'mysql2';
import { ILoginObjectRequest } from '../types';
import connection from './connection';

const query = `SELECT
  username, password, id FROM Trybesmith.Users WHERE username = ? AND password = ?`;

class LoginModel {
  static async login({ username, password }: ILoginObjectRequest): Promise<RowDataPacket> {
    const [foundUser] = await connection.execute(query, [username, password]);
    
    return foundUser as RowDataPacket;
  }
}

export default LoginModel;