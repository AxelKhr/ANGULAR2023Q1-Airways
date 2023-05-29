import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { IFlightModel } from 'src/app/shared/models/flight.model';
import { IRouteModel } from 'src/app/shared/models/route.model';
import { Subscription } from 'rxjs';
import { AppActions } from 'src/app/redux/actions';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent implements OnDestroy {
  passengers$ = this.store.select(AppSelectors.booking.selectPassengers);

  orderRoutes$ = this.store.select(AppSelectors.booking.selectOrderRoutes);

  ordersSubscr!: Subscription;

  constructor(private router: Router, private store: Store) {}

  ngOnDestroy(): void {
    if (this.ordersSubscr) {
      this.ordersSubscr.unsubscribe();
    }
  }

  onClickBack() {
    this.router.navigate(['booking', 'process']);
  }

  onClickAdd() {
    this.orderSave();
  }

  onClickBuy() {
    this.router.navigate(['booking', 'select']);
  }

  getFlights(routes: IRouteModel[]) {
    const flights: IFlightModel[] = [];
    routes.forEach((r) => {
      flights.push(...r.flights);
    });
    return flights;
  }

  orderSave() {
    this.ordersSubscr = this.store.select(AppSelectors.booking.selectOrderForSave)
      // eslint-disable-next-line @ngrx/no-store-subscription
      .subscribe({
        next: (value) => {
          if (value) {
            this.store.dispatch(AppActions.orders.orderSave({ data: value }));
          }
        },
      });
  }
}
