import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';
import * as AppActions from 'src/app/redux/actions';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import { BOOKING_STEPS } from 'src/app/environment/constants/booking';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  countryCodes: ICountryCodeModel[] = [];

  private step = -1;

  constructor(private store: Store, private messageBarService: MessageBarService) {}

  onClick1() {
    this.store.dispatch(AppActions.general.loadStaticData());
  }

  onClick2() {
    this.step = (this.step < 2) ? this.step + 1 : -1;
    const bookingStep = (this.step === -1) ? '' : BOOKING_STEPS[this.step];
    this.store.dispatch(AppActions.general.setBookingStep({ step: bookingStep }));
  }
}
