import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity/user.entity';
import { UserService } from './user.service';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input/create-user.input';
import { UpdateUserInput } from './dto/update-user.input/update-user.input';
import { JwtGraphqlGuard } from '../common/guard';

@UseGuards(JwtGraphqlGuard)
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [User], { name: 'getUsers' })
  async getUsers(): Promise<User[]> {
    return this.userService.find();
  }

  @Query(() => User, { name: 'getUser' })
  async getUser(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
  ): Promise<User> {
    return this.userService.findOne({ where: { id } });
  }

  @Mutation(() => User, { name: 'createUser' })
  async create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => User, { name: 'updateUser' })
  async update(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async delete(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
