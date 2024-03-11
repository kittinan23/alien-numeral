import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlienModule } from './alien/alien.module';

@Module({
  imports: [AlienModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
