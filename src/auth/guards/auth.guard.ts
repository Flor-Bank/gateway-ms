import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { ClientProxy } from '@nestjs/microservices/client';
import { firstValueFrom } from 'rxjs';
import { NATS_CLIENT } from 'src/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(NATS_CLIENT)
    private readonly authClient: ClientProxy,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const { user, token: sessionToken } = await firstValueFrom(
        this.authClient.send('auth.verify.user', { token }),
      );

      request['sessionUser'] = user;
      request['sessionToken'] = sessionToken;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
