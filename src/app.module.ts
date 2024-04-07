import { Module } from '@nestjs/common';
import { FixedTermDepositeModule } from './fixed-term-deposite/fixed-term-deposite.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [FixedTermDepositeModule, NatsModule],
})
export class AppModule {}
