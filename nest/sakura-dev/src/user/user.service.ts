import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.UserRepository.create(createUserDto);
    return await this.UserRepository.save(user);
  }

  async findAll() {
    return await this.UserRepository.find();
  }

  async findOne(id: number) {
    return await this.UserRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.UserRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.UserRepository.delete(id);
  }
}
