import { Module /* ValidationPipe */ } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { PropertyFeature } from './entities/property-feature.entity/property-feature.entity';
import { User } from './entities/user.entity/user.entity';
// import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Property, PropertyFeature, User])],
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
