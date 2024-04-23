import { IsEnum, IsOptional } from 'class-validator';
import {
  TransactionStatus,
  TransactionStatusList,
} from 'src/transaction/enum/transaction.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(TransactionStatusList, {
    message: `Valid status are ${TransactionStatusList}`,
  })
  status: TransactionStatus;
}
