import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';
import * as AppActions from 'src/app/redux/actions';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  countryCodes: ICountryCodeModel[] = [];

  private stepNum = -1;

  constructor(private store: Store, private messageBarService: MessageBarService) {}

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
}
