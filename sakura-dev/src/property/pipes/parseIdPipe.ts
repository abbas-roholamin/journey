import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value);

    if (isNaN(val)) {
      throw new BadRequestException('Invalid ID');
    }

    if (val <= 0) {
      throw new BadRequestException('ID must be greater than 0');
    }

    return val;
  }
}
