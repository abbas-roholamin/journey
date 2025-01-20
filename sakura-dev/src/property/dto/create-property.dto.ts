import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @Length(3, 10)
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @IsPositive()
  area: number;
}
