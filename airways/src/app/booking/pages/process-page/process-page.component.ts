import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppSelectors } from 'src/app/redux/selectors';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { BookingFormComponent } from '../../components/booking-form/booking-form.component';

@Component({
  selector: 'app-process-page',
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.scss'],
})
export class ProcessPageComponent implements OnInit, OnDestroy {
  @ViewChild(BookingFormComponent) bookingFormCmp!: BookingFormComponent;

  flightRequestSubscr!: Subscription;

  request!: IFlightsRequestModel;

  isFormValid = false;

  bookingFormStatusSubscr!: Subscription;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.flightRequestSubscr = this.store
      .select(AppSelectors.booking.selectFlightsRequest)
      // eslint-disable-next-line @ngrx/no-store-subscription
      .subscribe({
        next: (value) => {
          if (value === null) {
            this.router.navigate(['/']);
          } else {
            this.request = value;
          }
        },
      });
  }

  ngOnDestroy(): void {
    if (this.flightRequestSubscr) {
      this.flightRequestSubscr.unsubscribe();
    }
    if (this.bookingFormStatusSubscr) {
      this.bookingFormStatusSubscr.unsubscribe();
    }
  }

  checkFormValidation(value: boolean) {
    this.isFormValid = value;
  }

  onClickBack() {
    this.router.navigate(['booking', 'select']);
  }

  onClickContinue() {
    if (this.isFormValid) {
      this.bookingFormCmp.onSubmit();
      this.router.navigate(['booking', 'summary']);
    }
  }
}
