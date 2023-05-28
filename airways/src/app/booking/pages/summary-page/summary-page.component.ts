import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { IFlightModel } from 'src/app/shared/models/flight.model';
import { IRouteModel } from 'src/app/shared/models/route.model';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent {
  passengers$ = this.store.select(AppSelectors.booking.selectPassengers);

  orderRoutes$ = this.store.select(AppSelectors.booking.selectOrderRoutes);

  constructor(private router: Router, private store: Store) {}

  onClickBack() {
    this.router.navigate(['booking', 'process']);
  }

  onClickContinue() {
    this.router.navigate(['booking', 'select']);
  }

  getFlights(routes: IRouteModel[]) {
    const flights: IFlightModel[] = [];
    routes.forEach((r) => {
      flights.push(...r.flights);
    });
    return flights;
  }
}
