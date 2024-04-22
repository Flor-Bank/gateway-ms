import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_CLIENT } from 'src/config';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { catchError } from 'rxjs';
import { TransactionPaginationDto } from './dto';

@Controller('transaction')
export class TransactionController {
  constructor(
    @Inject(NATS_CLIENT)
    private readonly transactionClient: ClientProxy,
  ) {}

  //create a transaction
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionClient
      .send('transaction.create', createTransactionDto)
      .pipe(
        catchError((error) => {
          throw new RpcException(error);
        }),
      );
  }

  // get all transactions
  @Get()
  findAll(@Query() transactionPaginationDto: TransactionPaginationDto) {
    return this.transactionClient
      .send('transaction.findAll', { transactionPaginationDto })
      .pipe(
        catchError((error) => {
          throw new RpcException(error);
        }),
      );
  }

  // get single transaction by id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.transactionClient.send('transaction.findOne', { id }).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }
}
