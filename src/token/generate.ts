import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

const generate = (data: string) => new Promise((resolve, reject) => {
  jwt.sign({ data }, JWT_SECRET, { expiresIn: '365d' }, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});

export default generate;