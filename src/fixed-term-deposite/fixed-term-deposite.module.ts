import { Module } from '@nestjs/common';

import { FixedTermDepositeController } from './fixed-term-deposite.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FIXED_TERM_SERVICE } from 'src/config/services';
import { envs } from 'src/config';

@Module({
  controllers: [FixedTermDepositeController],
  imports: [
    ClientsModule.register([
      {
        name: FIXED_TERM_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.fixedTermMicroserviceHost,
          port: envs.fixedTermMicroservicePort,
        },
      },
    ]),
  ],
})
export class FixedTermDepositeModule {}
