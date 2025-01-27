import { Module /* ValidationPipe */ } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
// import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
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
