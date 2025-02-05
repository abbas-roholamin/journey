import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any) {
    const parseValue = this.schema.safeParse(value);

    if (!parseValue.success) {
      throw new BadRequestException(parseValue.error.format());
    }

    return parseValue.data;
  }
}
