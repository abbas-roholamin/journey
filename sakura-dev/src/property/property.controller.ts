import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { QueryIdDto } from './dto/query-id.dto';
import { ZodPipe } from './pipes/zodPipe';
import { CreateZodDto, CreateZodDtoSchema } from './dto/create-zod.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @UsePipes(new ZodPipe(CreateZodDtoSchema))
  @Post()
  create(@Body() createPropertyDto: CreateZodDto) {
    console.log(createPropertyDto);

    return this.propertyService.create(createPropertyDto);
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIdPipe) id) {
    return this.propertyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param() { id }: QueryIdDto,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}
