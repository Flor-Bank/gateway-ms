import { IsEnum, IsOptional } from 'class-validator';
import {
  TransactionStatus,
  TransactionStatusList,
} from '../enum/transaction.enum';

export class TransactionPaginationDto {
  @IsOptional()
  @IsEnum(TransactionStatusList, {
    message: `Valid status are ${TransactionStatusList}`,
  })
  staus: TransactionStatus;
}
