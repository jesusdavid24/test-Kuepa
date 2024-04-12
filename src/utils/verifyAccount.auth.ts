import { signToken } from 'src/auth/auth.service';
import { type User } from '@api/users/user.types';

export const createAuthResponse = (input: User) => {
  const payload = {
    id: input.id,
    email: input.email,
    name: input.name,
    role: input.role
  };

  const token = signToken(payload);

  const profile = {
    name: input.name,
    email: input.email,
    role: input.role
  };

  return { token, profile };
};
