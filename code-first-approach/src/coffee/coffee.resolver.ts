import {
  Args,
  ID,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/coffee.input/create-coffee.input';
import { CoffeeService } from './coffee.service';
import { UpdateCoffeeInput } from './dto/update-coffee.input/update-coffee.input';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class CoffeeResolver {
  constructor(
    private readonly coffeeService: CoffeeService,
    private readonly pubsub: PubSub,
  ) {}

  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return this.coffeeService.findAll();
  }

  @Query(() => Coffee, { name: 'coffee' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeeService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee' })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeeService.create(createCoffeeInput);
  }

  @Mutation(() => Coffee, { name: 'updateCoffee' })
  async update(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateCoffeeInput') updateCoffeeInput: UpdateCoffeeInput,
  ) {
    return this.coffeeService.update(id, updateCoffeeInput);
  }

  @Mutation(() => Coffee, { name: 'deleteCoffee' })
  async delete(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeeService.delete(id);
  }

  @Subscription(() => Coffee)
  coffeeAdded() {
    return this.pubsub.asyncIterableIterator('coffeeAdded');
  }
}
