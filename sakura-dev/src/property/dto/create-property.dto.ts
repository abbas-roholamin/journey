import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  // @Length(3, 10, {
  //   message: 'Name must be between 3 and 10 characters',
  //   groups: ['create'],
  // })
  // @Length(1, 10, {
  //   message: 'Name must be between 1 and 10 characters',
  //   groups: ['update'],
  // })
  @Length(3, 10, {
    message: 'Name must be between 3 and 10 characters',
  })
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @IsPositive()
  area: number;
}
