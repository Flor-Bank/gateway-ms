import { IsDateString, IsEnum, IsNumber, IsPositive } from 'class-validator';
import {
  fixedTermDepositeStatus,
  FixedTermDepositeStatusList,
} from '../enum/fixed-term-deposite.enum';
import { Type } from 'class-transformer';

export class CreateFixedTermDepositeDto {
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @Type(() => Number)
  amount_to_invest: number;
  @IsEnum(FixedTermDepositeStatusList, {
    message: `Allowed status values: ${FixedTermDepositeStatusList}`,
  })
  status: fixedTermDepositeStatus;

  @IsDateString()
  @Type(() => Date)
  maturity_date: Date;
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @Type(() => Number)
  interest_rate: number;
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @Type(() => Number)
  interest_rate_amount: number;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @Type(() => Number)
  total_amount: number;
  @IsDateString()
  @Type(() => Date)
  creation_date: Date;
}
