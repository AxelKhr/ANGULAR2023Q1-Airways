import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { IContactModel } from 'src/app/shared/models/contact.model';
import { IPassengerModel } from 'src/app/shared/models/passenger.model';
import { AppActions } from 'src/app/redux/actions';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit, OnDestroy {
  @Output() formValidation = new EventEmitter(true);

  flightRequestSubscr!: Subscription;

  validationSubscr!: Subscription;

  request!: IFlightsRequestModel | null;

  passengers = { Adult: 1, Children: 0, Infant: 0 };

  passengersArray: string[] = [];

  passengersForm = new FormGroup({});

  bookingForm: FormGroup = new FormGroup({
    passengers: this.passengersForm,
  });

  contacts$ = this.store.select(AppSelectors.booking.selectContactDetails);

  savedPassengers$ = this.store.select(AppSelectors.booking.selectPassengers);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.flightRequestSubscr = this.store.select(AppSelectors.booking.selectFlightsRequest)
      // eslint-disable-next-line @ngrx/no-store-subscription
      .subscribe((value) => { this.request = value; });

    if (this.request) {
      this.passengers.Adult = this.request.countAdult;
      this.passengers.Children = this.request.countChildren;
      this.passengers.Infant = this.request.countInfant;

      this.passengersArray = Object.entries(this.passengers)
        .map((el) => new Array(el[1]).fill(el[0]))
        .flat();
    }

    // eslint-disable-next-line max-len
    this.validationSubscr = this.bookingForm.valueChanges.subscribe(() => this.formValidation.emit(this.bookingForm.valid));
  }

  ngOnDestroy(): void {
    if (this.flightRequestSubscr) {
      this.flightRequestSubscr.unsubscribe();
    }
    if (this.validationSubscr) {
      this.validationSubscr.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const contactDetails = this.bookingForm.get('contacts')?.value as IContactModel;
      if (contactDetails) {
        this.store.dispatch(AppActions.booking.setContactDetails({ contactDetails }));
      }
      const passengersObj = this.bookingForm.get('passengers')?.value;
      if (passengersObj) {
        const passengers = Object.values<IPassengerModel>(passengersObj);
        this.store.dispatch(AppActions.booking.setPassengers({ passengers }));
      }
    }
  }
}
