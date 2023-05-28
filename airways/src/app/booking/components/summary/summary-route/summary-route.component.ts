import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { IFlightModel } from 'src/app/shared/models/flight.model';
import { IPassengerModel } from 'src/app/shared/models/passenger.model';

@Component({
  selector: 'app-summary-route',
  templateUrl: './summary-route.component.html',
  styleUrls: ['./summary-route.component.scss'],
})
export class SummaryRouteComponent {
  @Input() flight!: IFlightModel;

  @Input() passengers!: IPassengerModel[];

  constructor(private store: Store) {}

  getAirportName(code: string) {
    return this.store.select(AppSelectors.general.selectAirportNameByCode(code));
  }
}
