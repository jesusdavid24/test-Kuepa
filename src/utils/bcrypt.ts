import bcrypt from 'bcrypt';

export async function hashPassword(password: string, factor?: number) {
  const salt = await bcrypt.genSalt(factor)

  const data = await bcrypt.hash(password, salt);

  return data;
}

export async function comparePassword(password: string, hashedPassword: string) {
  const comparePass = await bcrypt.compare(password, hashedPassword)

  return comparePass;
}

export async function hashPasswordSync(password: string, factor?: number) {
  const saltSync = bcrypt.genSaltSync(factor)

  const hashSync = bcrypt.hashSync(password, saltSync)

  return hashSync;
}
