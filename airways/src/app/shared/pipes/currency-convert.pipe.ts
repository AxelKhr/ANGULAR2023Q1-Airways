import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { CURRENCY_DATA } from 'src/app/environment/constants/currency';

@Pipe({
  name: 'currencyConvert',
})
export class CurrencyConvertPipe implements PipeTransform {
  transform(
    value: number | string,
    currencyCode = 'EUR',
    digitsInfo = '3.2-2',
    locale = 'en-US',
  ): string | null {
    const curr = CURRENCY_DATA.find((el) => el.code === currencyCode)
      || {
        code: 'USD',
        factor: 1.0,
        symbol: '$',
      };
    return formatCurrency(
      +value * curr.factor,
      locale,
      curr.symbol,
      currencyCode,
      digitsInfo,
    );
  }
}
