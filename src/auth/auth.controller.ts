import { Controller, Inject } from '@nestjs/common';
import { NATS_CLIENT } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(NATS_CLIENT)
    private readonly authClient: ClientProxy,
  ) {}
}
