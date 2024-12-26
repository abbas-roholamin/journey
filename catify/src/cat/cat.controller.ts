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
  Redirect,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Request } from 'express';
// import { ForbiddenException } from 'src/common/exceptions/forbidden.exception';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'hello-world')
  create(@Body() createCatDto: CreateCatDto) {
    //  throw new ForbiddenException();
    return this.catService.create(createCatDto);
  }

  @Get()
  async findAll(@Req() request: Request): Promise<any> {
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
  @Redirect('https://docs.nestjs.com', 302)
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
