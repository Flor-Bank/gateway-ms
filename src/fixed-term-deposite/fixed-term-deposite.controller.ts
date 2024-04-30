import { Body, Post, Controller, Inject, Get, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_CLIENT } from 'src/config';
import { CreateFixedTermDepositeDto } from './dto/create-fixed-term-deposite.dto';
import { catchError } from 'rxjs';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('fixed-term-deposite')
export class FixedTermDepositeController {
  constructor(
    @Inject(NATS_CLIENT)
    private readonly fixedTermDepositeClient: ClientProxy,
  ) {}

  //create a fixed term deposite
  @Post()
  create(@Body() createFixedTermDeposite: CreateFixedTermDepositeDto) {
    return this.fixedTermDepositeClient
      .send('fixedTermDeposite.create', createFixedTermDeposite)
      .pipe(
        catchError((error) => {
          throw new RpcException(error);
        }),
      );
  }

  // get all fixed-term-deposite
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.fixedTermDepositeClient
      .send('fixedTermDeposite.findAll', { paginationDto })
      .pipe(
        catchError((error) => {
          throw new RpcException(error);
        }),
      );
  }
}
