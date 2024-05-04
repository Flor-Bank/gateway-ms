import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { RoleProtected } from './role-protected.decorator';

export function Auth(...roles, ValidRoles) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RoleProtected),
  );
}
