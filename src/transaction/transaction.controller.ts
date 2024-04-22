import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_CLIENT } from 'src/config';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { catchError } from 'rxjs';

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
  findAll() {
    return this.transactionClient.send('transaction.findAll', {}).pipe(
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
