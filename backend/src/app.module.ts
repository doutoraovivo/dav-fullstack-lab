import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const rootPath = join(__dirname, '..', '..', 'frontend', 'dist');
console.debug('rootPath', rootPath);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
