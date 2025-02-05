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
  Query,
  //   Res,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { paginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { ParseIntPipe } from 'src/common/pipes/parse-int/parse-int.pipe';
import { Protocol } from 'src/common/decorators/protocol.decorator';
import {
  ApiForbiddenResponse,
  ApiTags,
  //  ApiResponse
} from '@nestjs/swagger';

@ApiTags('coffee')
@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Public()
  @Get()
  findAll(
    @Protocol() protocol: string,
    @Query() paginationQuery: paginationQueryDto,
  ) {
    console.log(protocol);

    // const { limit, offset } = paginationQuery;
    // findAll(@Res() res) {
    // res.status(200).send('Get All Coffees');
    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coffeeService.delete(id);
  }
}
