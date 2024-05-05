import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ValidRoles } from '../interfaces';
import { ROLE } from '../decorators/role-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: ValidRoles = this.reflector.get(
      ROLE,
      context.getHandler(),
    );

    const request = context.switchToHttp().getRequest();
    if (!request.user) {
      throw new BadRequestException(`requested user does not exist`);
    }

    for (const role in request.user.role) {
      if (validRoles.includes(role)) {
        return true;
      }
    }
    throw new ForbiddenException(
      `User ${request.user.username} is not role allowed`,
    );
  }
}
