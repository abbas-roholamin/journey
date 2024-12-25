import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        // cors(),
        // Helmet(),
        LoggerMiddleware,
      )
      // .exclude(
      //   { path: 'cats', method: RequestMethod.GET },
      //   { path: 'cats', method: RequestMethod.POST },
      //   'cats/(.*)',
      // )
      .forRoutes(
        { path: 'cats', method: RequestMethod.GET },
        // {
        //   path: 'ab*cd',
        //   method: RequestMethod.ALL,
        // },
        // CatController,
      );
  }
}
