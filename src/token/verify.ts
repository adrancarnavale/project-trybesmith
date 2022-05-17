import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

const verify = async (
  token: string | undefined,
): Promise<JwtPayload> => new Promise((resolve, reject) => {
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) reject(err);
  
      resolve(decoded as JwtPayload);
    });
  }
});

export default verify;