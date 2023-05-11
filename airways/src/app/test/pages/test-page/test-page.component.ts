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

  private stepNum = -1;

  constructor(private store: Store, private messageBarService: MessageBarService) {}

  onClick1() {
    this.store.dispatch(AppActions.general.loadStaticData());
  }

  onClick2() {
    this.stepNum = (this.stepNum < 2) ? this.stepNum + 1 : -1;
    const bookingStep = (this.stepNum < 0) ? null : BOOKING_STEPS[this.stepNum];
    this.store.dispatch(AppActions.booking.setStep({ step: bookingStep }));
  }
}
