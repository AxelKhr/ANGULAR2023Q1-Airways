import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthDialogService } from 'src/app/auth/services/auth-dialog.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IBookingStepModel } from 'src/app/booking/models/booking-step.model';
import { BOOKING_STEPS } from 'src/app/environment/constants/booking';
import { AppActions } from 'src/app/redux/actions';
import { AppSelectors } from 'src/app/redux/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn$ = this.store.select(AppSelectors.auth.selectIsLoggedIn);

  userName$ = this.store.select(AppSelectors.auth.selectUserName);

  bookingStep$:
  Observable<IBookingStepModel | null> = this.store.select(AppSelectors.booking.selectStep);

  bookingStepsList = BOOKING_STEPS;

  orderCount$ = this.store.select(AppSelectors.orders.selectOrdersCount);

  isDefStyle$: Observable<boolean> = this.store
    .select((AppSelectors.general.selectIsMainStyleInverse));

  dateFormat$: Observable<string> = this.store.select((AppSelectors.settings.selectDateFormat));

  currency$: Observable<string> = this.store.select((AppSelectors.settings.selectCurrency));

  constructor(
    private router: Router,
    private store: Store,
    private authService: AuthService,
    private authDialog: AuthDialogService,
  ) { }

  onClickLogo() {
    this.router.navigate(['/']);
  }

  onChangeFormat(value: string) {
    this.store.dispatch(AppActions.settings.setDateFormat({ dateFormat: value }));
  }

  onChangeCurrency(value: string) {
    this.store.dispatch(AppActions.settings.setCurrency({ currency: value }));
  }

  loginUser() {
    this.authDialog.open();
  }

  goToAccount() {
    this.router.navigate(['cart', 'transactions']);
  }

  logoutUser() {
    setTimeout(() => {
      this.authService.logoutUser();
    }, 0);
  }

  onClickCart() {
    this.router.navigate(['cart']);
  }
}
