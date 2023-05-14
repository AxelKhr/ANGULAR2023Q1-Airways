import { Pipe, PipeTransform } from '@angular/core';
import { IAirport } from '../models/search.models';

@Pipe({
  name: 'bindAutocompletes',
})
export class BindAutocompletesPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(
    items: IAirport[] | null,
    selectedAirport: IAirport,
  ): IAirport[] | null {
    if (items) {
      return items.filter((el) => el.code !== selectedAirport.code);
    }
    return null;
  }
}
