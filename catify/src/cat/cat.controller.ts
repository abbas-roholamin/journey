import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Request } from 'express';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'hello-world')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
