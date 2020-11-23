import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
  .setTitle('API UNIA MOVIE')
  .setDescription('Api rest de unia movie')
  .setVersion("1.0")
  .build();

