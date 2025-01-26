import { Module /* ValidationPipe */ } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
// import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [PropertyController],
  providers: [
    PropertyService,
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    //   useValue: new ValidationPipe({
    //      whitelist: true,
    //      transform: true,
    //      transformOptions: {
    //        enableImplicitConversion: true,
    //      },
    //    })
    // },
  ],
})
export class PropertyModule {}
