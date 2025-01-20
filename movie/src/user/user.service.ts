import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserInput } from './dto/update-user.input/update-user.input';
import { CreateUserInput } from './dto/create-user.input/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(where: { where: { [key: string]: any } }): Promise<User> {
    const user = await this.userRepository.findOne(where);
    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userRepository.save(createUserInput);
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    await this.findOne({ where: { id } });

    await this.userRepository.update(id, updateUserInput);
    return await this.userRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<User> {
    const user = await this.findOne({ where: { id } });

    return await this.userRepository.remove(user);
  }
}
