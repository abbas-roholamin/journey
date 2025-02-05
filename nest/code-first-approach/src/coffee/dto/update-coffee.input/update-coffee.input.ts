import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCoffeeInput } from '../coffee.input/create-coffee.input';

@InputType()
export class UpdateCoffeeInput extends PartialType(CreateCoffeeInput) {}
