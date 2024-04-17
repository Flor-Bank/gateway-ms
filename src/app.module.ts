import { Module } from '@nestjs/common';
import { FixedTermDepositeModule } from './fixed-term-deposite/fixed-term-deposite.module';
import { NatsModule } from './transports/nats.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [FixedTermDepositeModule, NatsModule, AuthModule, TransactionModule],
})
export class AppModule {}
