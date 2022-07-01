import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.debug(
    `
      App running at:
      - Local: http://localhost:${port}
  `,
  );
}
bootstrap();
