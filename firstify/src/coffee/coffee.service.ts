import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Flavor } from './entities/flavor.entity';
import { paginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
    private readonly dataSource: DataSource,
  ) {}
  findAll(paginationQuery: paginationQueryDto) {
    const { limit, offset } = paginationQuery;
    console.log(limit, offset);

    return this.coffeeRepository.find({
      relations: ['flavors'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne({
      where: { id },
      relations: ['flavors'],
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    const flavors = await Promise.all(
      createCoffeeDto.flavors.map((name) => this.preloadFlavorByName(name)),
    );

    const coffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavors,
    });
    return this.coffeeRepository.save(coffee);
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    let flavors = [];

    if (updateCoffeeDto.flavors) {
      flavors = await Promise.all(
        updateCoffeeDto.flavors.map((name) => this.preloadFlavorByName(name)),
      );
    }

    const coffee = await this.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    this.coffeeRepository.merge(coffee, { ...updateCoffeeDto, flavors });
    return this.coffeeRepository.save(coffee);
  }

  async delete(id: number) {
    const coffee = await this.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return this.coffeeRepository.remove(coffee);
  }

  private async recommendCoffee(coffee: Coffee) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      coffee.recommendations++;

      const event = queryRunner.manager.create(Event, {
        name: 'recommend_coffee',
        type: 'coffee',
        payload: { coffeeId: coffee.id },
      });

      await queryRunner.manager.save(coffee);
      await queryRunner.manager.save(event);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const flavor = await this.flavorRepository.findOne({ where: { name } });
    if (flavor) {
      return flavor;
    }

    return this.flavorRepository.create({ name });
  }
}
