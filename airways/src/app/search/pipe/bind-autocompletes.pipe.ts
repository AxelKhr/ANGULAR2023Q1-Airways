import { Pipe, PipeTransform } from '@angular/core';
import { IAirportInterface } from '../models/search.models';

@Pipe({
  name: 'bindAutocompletes',
})
export class BindAutocompletesPipe implements PipeTransform {
  transform(
    items: IAirportInterface[] | null,
    selectedAirport: IAirportInterface,
  ): IAirportInterface[] | null {
    if (items) {
      return items.filter((el) => el.code !== selectedAirport.code);
    }
    return null;
  }
}
