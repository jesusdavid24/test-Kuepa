import bcrypt from 'bcrypt';
import crypto from 'crypto';

export async function hashPassword(password: string, factor?: number) {
  const salt = await bcrypt.genSalt(factor);

  const data = await bcrypt.hash(password, salt);

  return data;
}

export async function comparePassword(
  password: string,
  hashedPassword: string
) {
  const comparePass = await bcrypt.compare(password, hashedPassword);

  return comparePass;
}

export const createHashToken = (data: string) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};
