import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './common/filters/http-exception.filter';
// import { LoggerMiddleware } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(LoggerMiddleware); Global Middleware
  // app.useGlobalFilters(new HttpExceptionFilter());

  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
