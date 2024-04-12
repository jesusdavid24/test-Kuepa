import jwt from 'jsonwebtoken';
import { type PayloadType } from './auth.type';
import { hashPassword } from '@utils/bcrypt';
import { getById, put } from '@api/users/user.service';


const SECRET = process.env.JWT_SECRET!

export function verifyToken(token: string) {
  const decoded = jwt.verify(token, SECRET) as PayloadType

  return decoded;
}

export function signToken(payload: PayloadType) {
  const token = jwt.sign(payload, SECRET, { expiresIn: `${1000 * 60 * 60}` })

  return token;
}

export async function changePassword(token: string, newPassword: string) {

  const payload = verifyToken(token);

  const user = await getById(payload.id);

  if (!user) {
    throw new Error('User not found');
  }

  if (user.recoveryToken !== token) {
    throw new Error('unauthorized');
  }

  const hashedNewPassword = await hashPassword(newPassword);

  await put(user.id, { recoveryToken: null, password: hashedNewPassword });

}