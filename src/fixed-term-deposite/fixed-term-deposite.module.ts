import { Module } from '@nestjs/common';
import { NatsModule } from 'src/transports/nats.module';

import { FixedTermDepositeController } from './fixed-term-deposite.controller';

@Module({
  controllers: [FixedTermDepositeController],
  imports: [NatsModule],
})
export class FixedTermDepositeModule {}
