import { Controller, Get, Query } from '@nestjs/common';
import { AlienNumeralService } from './alien.service';

@Controller('alien-numeral')
export class AlienNumeralController {
  constructor(private readonly alienNumeralService: AlienNumeralService) {}

  @Get('query')
  convertToInteger(@Query('s') s: string): number {
    return this.alienNumeralService.convertToInteger(s);
  }
}