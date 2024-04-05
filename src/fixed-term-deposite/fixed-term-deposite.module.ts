import { Module } from '@nestjs/common';

import { FixedTermDepositeController } from './fixed-term-deposite.controller';

@Module({
  controllers: [FixedTermDepositeController],
})
export class FixedTermDepositeModule {}
