import { Module } from '@nestjs/common';

import { TransactionController } from './transaction.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [TransactionController],
  imports: [NatsModule],
})
export class TransactionModule {}
