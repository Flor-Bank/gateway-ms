import { Module } from '@nestjs/common';

import { FixedTermDepositeController } from './fixed-term-deposite.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_CLIENT } from 'src/config/services';
import { envs } from 'src/config';

@Module({
  controllers: [FixedTermDepositeController],
  imports: [
    ClientsModule.register([
      {
        name: NATS_CLIENT,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServers,
        },
      },
    ]),
  ],
})
export class FixedTermDepositeModule {}
