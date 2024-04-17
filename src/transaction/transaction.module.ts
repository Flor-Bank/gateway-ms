import { Module } from '@nestjs/common';

import { TransactionController } from './transaction.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [TransactionController],
  providers: [NatsModule],
})
export class TransactionModule {}
