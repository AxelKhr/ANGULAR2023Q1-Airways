import { Pipe, PipeTransform } from '@angular/core';
import { IAirportModel } from 'src/app/shared/models/airport.model';

@Pipe({
  name: 'bindAutocompletes',
})
export class BindAutocompletesPipe implements PipeTransform {
  transform(
    items: IAirportModel[] | null,
    selectedAirport: IAirportModel,
  ): IAirportModel[] | null {
    if (items) {
      return items.filter((el) => el.code !== selectedAirport.code);
    }
    return null;
  }
}
