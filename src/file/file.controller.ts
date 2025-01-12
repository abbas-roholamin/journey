import { ConfigService } from '@nestjs/config';
import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtGuard } from './guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('upload')
export class FileController {
  constructor(protected readonly configService: ConfigService) {}

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './storage',
        filename: (req, file, callback) => {
          const ext = extname(file.originalname);
          const filename = `${Date.now()}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: file.path,
    };
  }
}
