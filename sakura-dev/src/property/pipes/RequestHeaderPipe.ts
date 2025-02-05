import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

export const RequestHeaderDecorator = createParamDecorator(
  async (Dto: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const headers = request.headers;

    const dto = plainToInstance(Dto, headers, {
      excludeExtraneousValues: true,
    });

    await validateOrReject(dto);

    return dto;
  },
);
