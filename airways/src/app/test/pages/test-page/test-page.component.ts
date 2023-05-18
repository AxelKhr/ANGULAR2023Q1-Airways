import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';
import { AppActions } from 'src/app/redux/actions';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IUserProfileModel } from 'src/app/shared/models/user-profile.model';
import { ApiService } from 'src/app/core/services/api.service';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { IUserLoginModel } from 'src/app/shared/models/user-login.model';
import { IUserCheckModel } from 'src/app/shared/models/user-check.model';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  countryCodes: ICountryCodeModel[] = [];

  data: IAirportModel[] = [];

  constructor(private store: Store, private api: ApiService) {}

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

  onClick3() {
    const userProfile: IUserProfileModel = {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'user@mail.com',
      password: '123',
      dateBirth: '2000-01-01',
      sex: 'male',
      countryCode: 'Belarus',
      phoneNumber: '123456789',
      citizenship: 'Belarus',
    };
    this.store.dispatch(AppActions.auth.registrateUser({ userProfile }));
  }

  onClick4() {
    const userLogin: IUserLoginModel = {
      email: 'user@mail.com',
      password: '123',
    };
    this.store.dispatch(AppActions.auth.loginUser({ userLogin }));
  }

  onClick5() {
    const userData: IUserCheckModel = {
      userId: '6463a40e3faab2426553a096',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjNhNDBlM2ZhYWIyNDI2NTUzYTA5NiIsImlhdCI6MTY4NDI2MTEwNiwiZXhwIjoxNjg0MzQ3NTA2fQ.INBG_nCO4pFErk1BEauZ1AtdCQB4ZbQy786jMQvg_e4',
    };
    this.store.dispatch(AppActions.auth.checkAuth({ userData }));
  }
}
