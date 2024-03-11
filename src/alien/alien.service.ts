import { Injectable } from '@nestjs/common';

@Injectable()
export class AlienNumeralService {
  private readonly symbols: { [key: string]: number } = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
  };

  convertToInteger(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
      const currentSymbolValue = this.symbols[s[i]];
      const nextSymbolValue = this.symbols[s[i + 1]];

      if (nextSymbolValue && nextSymbolValue > currentSymbolValue) {
        result += nextSymbolValue - currentSymbolValue;
        i++;
      } else {
        result += currentSymbolValue;
      }
    }
    return result;
  }
}