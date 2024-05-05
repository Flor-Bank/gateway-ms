import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interfaces';

export const ROLE = 'role';

export const RoleProtected = (...args: ValidRoles[]) => {
  return SetMetadata(ROLE, args);
};
