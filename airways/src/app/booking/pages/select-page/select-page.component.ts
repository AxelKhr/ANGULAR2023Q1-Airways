import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { Observable, Subscription, map } from 'rxjs';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IRouteModel } from 'src/app/shared/models/route.model';
import { AppActions } from 'src/app/redux/actions';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss'],
})
export class SelectPageComponent implements OnInit, OnDestroy {
  airports$ = this.store.select(AppSelectors.general.selectAirports);

  routes$ = this.store.select(AppSelectors.booking.selectRoutes);

  flightRequest$ = this.store.select(AppSelectors.booking.selectFlightsRequest);

  flightRequestSubscr!: Subscription;

  request!: IFlightsRequestModel;

  orderRouteToSubscr!: Subscription;

  orderRouteTo: IRouteModel | null = null;

  orderRouteFromSubscr!: Subscription;

  orderRouteFrom: IRouteModel | null = null;

  isEnable = false;

  routesTo$!: Observable<IRouteModel[]>;

  routesFrom$!: Observable<IRouteModel[]>;

  isContinue = false;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.flightRequestSubscr = this.flightRequest$.subscribe({
      next: (value) => {
        if (value === null) {
          this.router.navigate(['/']);
        } else {
          this.isEnable = true;
          this.request = value;
        }
      },
    });

    this.orderRouteToSubscr = this.store.select(AppSelectors.booking.selectOrderRouteTo)
      // eslint-disable-next-line @ngrx/no-store-subscription
      .subscribe((route) => {
        this.orderRouteTo = route;
        this.updateIsContinue();
      });

    this.orderRouteFromSubscr = this.store.select(AppSelectors.booking.selectOrderRouteFrom)
      // eslint-disable-next-line @ngrx/no-store-subscription
      .subscribe((route) => {
        this.orderRouteFrom = route;
        this.updateIsContinue();
      });

    this.routesTo$ = this.routes$.pipe(
      map((routes) => routes.filter(
        (route) => route.departureAirportCode === this.request.departureAirportCode,
      )),
    );
    this.routesFrom$ = this.routes$.pipe(
      map((routes) => routes.filter(
        (route) => route.departureAirportCode === this.request.arrivalAirportCode,
      )),
    );
  }

  ngOnDestroy(): void {
    if (this.flightRequestSubscr) {
      this.flightRequestSubscr.unsubscribe();
    }
    if (this.orderRouteToSubscr) {
      this.orderRouteToSubscr.unsubscribe();
    }
    if (this.orderRouteFromSubscr) {
      this.orderRouteFromSubscr.unsubscribe();
    }
  }

  onSelectRouteTo(route: IRouteModel | null) {
    this.store.dispatch(AppActions.booking.setOrderRouteTo({ route }));
  }

  onSelectRouteFrom(route: IRouteModel | null) {
    this.store.dispatch(AppActions.booking.setOrderRouteFrom({ route }));
  }

  onClickBack() {
    this.router.navigate(['/']);
  }

  onClickContinue() {
    this.router.navigate(['booking', 'process']);
  }

  updateIsContinue() {
    this.isContinue = (this.orderRouteTo !== null)
      && ((this.request.roundTrip !== 1) || (this.orderRouteFrom !== null));
  }
}
