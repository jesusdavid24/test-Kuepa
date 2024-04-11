import { type Request, type Response } from 'express';
import { type User } from './user.types';
import { sendNodeMailer } from 'src/config/nodemailer';
import { welcomeEmail } from '@utils/sendEmail';
import errorHandler from '@utils/errorHandler';

import {
  getAllUser,
  getById,
  getUserByEmail,
  create,
  destroy,
  put
} from './user.service';

export async function getUsers(req: Request, res: Response) {
  try {
    const { email } = req.query;

    if (email) {
      const user = await getUserByEmail(email as string);
      return res.status(200).json(user);
    }

    const users = await getAllUser();

    return res.status(200).send(users);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const user = await getById(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    return res.status(200).send(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const data: User = req.body;

    const user = await create(data);

    const profile = {
      name: user.name
    };

    await sendNodeMailer(await welcomeEmail(user));

    return res
      .status(201)
      .json({
        message: 'user register successfully, please verifry account',
        profile
      });
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await destroy(id);

    return res.end();
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const user = await put(id, data);

    return res.json(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    return res.status(400).send({ message });
  }
}
