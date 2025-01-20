import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { FileController } from './file.controller';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        dest: configService.get('STORAGE_PATH'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [FileController],
})
export class FileModule {}
