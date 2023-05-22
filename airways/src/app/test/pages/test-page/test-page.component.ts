import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';
import { AppActions } from 'src/app/redux/actions';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { Router } from '@angular/router';
import { AuthDialogService } from 'src/app/auth/services/auth-dialog.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  countryCodes: ICountryCodeModel[] = [];

  data: IAirportModel[] = [];

  constructor(
    private store: Store,
    private router: Router,
    private authDialogService: AuthDialogService,
    private authService: AuthService,
  ) {}

  onClick1() {
    this.store.dispatch(AppActions.general.loadStaticData());
  }

  onClick2() {
    const request: IFlightsRequestModel = {
      departureAirportCode: 'WAW',
      arrivalAirportCode: 'DUB',
      departureDate: '2023-04-27',
      returnDate: '2023-04-28',
      roundTrip: 1,
      countAdult: 1,
      countChildren: 0,
      countInfant: 0,
      amountFlights: 5,
    };
    this.store.dispatch(AppActions.booking.getFlights({ request }));
  }

  onClick5() {
    this.authService.checkUser();
  }

  onClick6() {
    this.authDialogService.open();
  }
}
