import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll() {
    return 'Get All Coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Get coffee ${id}`;
  }
}
