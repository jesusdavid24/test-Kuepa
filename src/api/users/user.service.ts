import { PrismaClient } from '@prisma/client';
import { hashPassword } from '@utils/bcrypt';
import { type User } from './user.types';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.user.findMany();
  return users;
}

export async function create(input: User ) {

  const hashedPassword = await hashPassword(input.password);
  console.log(hashedPassword);
  

  const data = {
    ...input,
    password: hashedPassword
  }

  const user = await prisma.user.upsert({
    where: {
      email: data.email
    },
    create: {
      ...data,
    },
    update: {
      ...data,
    }
  });

  return user;
}

export async function getById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    }
  });


  return user!;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  return user;
}


export async function destroy(id: string) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      isDeleted: true
    }
  });

  return user;
}

export async function put(id: string, data: Partial<User>) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data
  })

  return user;
}

