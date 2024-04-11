import { signToken } from 'src/auth/auth.service';
import { type User } from '@api/users/user.types';

export const createAuthResponse = (input: User) => {
  const payload = {
    id: input.id,
    name: input.name,
    role: input.role
  };

  const token = signToken(payload);

  const profile = {
    fullName: input.name,
    email: input.email,
    role: input.role
  };

  return { token, profile };
};
