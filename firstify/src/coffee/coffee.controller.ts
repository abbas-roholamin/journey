import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
