import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateZodDto } from './dto/create-zod.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propretyRepository: Repository<Property>,
  ) {}

  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propretyRepository.save(createPropertyDto);
  }

  async findAll(page: number) {
    return await this.propretyRepository.find({
      skip: (page - 1) * 10,
      take: 10,
    });
  }

  async findOne(id: number) {
    const property = await this.propretyRepository.findOneBy({ id });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    return property;
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    await this.findOne(id);

    return await this.propretyRepository.update({ id }, updatePropertyDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.propretyRepository.delete(id);
  }
}
