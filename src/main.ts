import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerConfig } from './Common/Config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Configuration of swagger
  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup("api", app, document);
  //Listen app
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
