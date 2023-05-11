import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookingStepModel } from 'src/app/booking/models/booking-step.model';
import { BOOKING_STEPS } from 'src/app/environment/constants/booking';
import * as Actions from 'src/app/redux/actions';
import * as Selectors from 'src/app/redux/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  bookingStep$:
  Observable<IBookingStepModel | null> = this.store.select((Selectors.booking.selectStep));

  bookingStepsList = BOOKING_STEPS;

  orderCount = 5;

  isDefStyle$: Observable<boolean> = this.store
    .select((Selectors.general.selectIsMainStyleInverse));

  dateFormat$: Observable<string> = this.store.select((Selectors.settings.selectDateFormat));

  currency$: Observable<string> = this.store.select((Selectors.settings.selectCurrency));

  constructor(private router: Router, private store: Store) { }

  onClickLogo() {
    this.router.navigate(['/']);
  }

  onChangeFormat(value: string) {
    this.store.dispatch(Actions.settings.setDateFormat({ dateFormat: value }));
  }

  onChangeCurrency(value: string) {
    this.store.dispatch(Actions.settings.setCurrency({ currency: value }));
  }
}
