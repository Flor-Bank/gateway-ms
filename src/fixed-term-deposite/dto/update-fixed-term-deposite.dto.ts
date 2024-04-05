import { PartialType } from '@nestjs/mapped-types';
import { CreateFixedTermDepositeDto } from './create-fixed-term-deposite.dto';

export class UpdateFixedTermDepositeDto extends PartialType(CreateFixedTermDepositeDto) {}
