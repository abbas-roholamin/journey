import { IsNumber, IsPositive } from 'class-validator';

export class QueryIdDto {
  @IsPositive()
  @IsNumber()
  id: number;
}
