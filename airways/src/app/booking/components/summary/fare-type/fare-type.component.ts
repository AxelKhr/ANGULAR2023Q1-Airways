import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFareByTypeModel } from 'src/app/booking/models/fare.model';
import { AppSelectors } from 'src/app/redux/selectors';

@Component({
  selector: 'app-fare-type',
  templateUrl: './fare-type.component.html',
  styleUrls: ['./fare-type.component.scss'],
})
export class FareTypeComponent {
  @Input()
  get fare() {
    return this.fareValue;
  }

  set fare(value: IFareByTypeModel) {
    this.fareValue = value;
  }

  @Input()
  get name() {
    return this.nameValue;
  }

  set name(value: string) {
    this.nameValue = value;
  }

  fareValue: IFareByTypeModel = {
    count: 0,
    fare: 0,
    tax: 0,
    totalCost: 0,
  };

  nameValue = '';

  currency$ = this.store.select(AppSelectors.settings.selectCurrency);

  constructor(private store: Store) {}
}
