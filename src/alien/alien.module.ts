import { Module } from '@nestjs/common';
import { AlienNumeralController } from './alien.controller';
import { AlienNumeralService } from './alien.service';

@Module({
  imports: [],
  controllers: [AlienNumeralController],
  providers: [AlienNumeralService],
})
export class AlienModule {}
