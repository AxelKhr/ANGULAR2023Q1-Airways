import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { Observable, Subscription, map } from 'rxjs';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IRouteModel } from 'src/app/shared/models/route.model';

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

  isEnable = false;

  routesTo$!: Observable<IRouteModel[]>;

  routesFrom$!: Observable<IRouteModel[]>;

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
  }

  onClickBack() {
    this.router.navigate(['/']);
  }

  onClickContinue() {
    this.router.navigate(['booking', 'process']);
  }
}
