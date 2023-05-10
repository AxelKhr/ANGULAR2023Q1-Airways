import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent {
  passengers = { adult: 1, child: 0, infant: 0 };

  passengersArray: string[] = [];

  passengersForm = new FormGroup({});

  bookingForm: FormGroup = new FormGroup({
    passengers: this.passengersForm,
  });

  constructor() {
    this.passengersArray = Object.entries(this.passengers)
      .map((el) => new Array(el[1]).fill(el[0]))
      .flat();
  }

  onSubmit(): void {
    console.log(this.bookingForm.value);
  }
}
