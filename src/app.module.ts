import { Module } from '@nestjs/common';
import { FixedTermDepositeModule } from './fixed-term-deposite/fixed-term-deposite.module';

@Module({
  imports: [FixedTermDepositeModule],
})
export class AppModule {}
