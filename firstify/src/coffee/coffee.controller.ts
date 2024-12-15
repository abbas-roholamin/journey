import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  //   Res,
} from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll() {
    // findAll(@Res() res) {
    // res.status(200).send('Get All Coffees');
    return 'Get All Coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Get coffee ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: any) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return [id, body];
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Delete Coffee ${id}`;
  }
}
