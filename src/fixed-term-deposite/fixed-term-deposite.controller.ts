import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FIXED_TERM_SERVICE } from 'src/config';

@Controller('fixed-term-deposite')
export class FixedTermDepositeController {
  constructor(
    @Inject(FIXED_TERM_SERVICE)
    private readonly fixedTermDepositeClient: ClientProxy,
  ) {}
}
