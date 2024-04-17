import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_CLIENT } from 'src/config';

@Controller('transaction')
export class TransactionController {
  constructor(
    @Inject(NATS_CLIENT)
    private readonly transactionClient: ClientProxy,
  ) {}
}
