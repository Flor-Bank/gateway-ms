import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_CLIENT } from 'src/config';

@Controller('fixed-term-deposite')
export class FixedTermDepositeController {
  constructor(
    @Inject(NATS_CLIENT)
    private readonly fixedTermDepositeClient: ClientProxy,
  ) {}
}
