import { Component, Input } from '@angular/core';
import { IBookingStepModel } from 'src/app/booking/models/booking-step.model';

@Component({
  selector: 'app-booking-stepper',
  templateUrl: './booking-stepper.component.html',
  styleUrls: ['./booking-stepper.component.scss'],
})
export class BookingStepperComponent {
  @Input() steps: IBookingStepModel[] = [];

  @Input()
  set current(value: IBookingStepModel | null) {
    this.currentStep = value;
  }

  get current() {
    return this.currentStep;
  }

  currentStep: IBookingStepModel | null = null;

  getIconType(step: IBookingStepModel): string {
    if (this.currentStep !== null) {
      const currInd = this.steps.findIndex((value) => value.name === this.currentStep?.name);
      if (currInd < 0) {
        return '';
      }
      const ind = this.steps.findIndex((value) => value.name === step.name);
      if (ind < currInd) {
        return 'step-complete';
      }
      if (ind === currInd) {
        return 'step-edit';
      }
    }
    return '';
  }
}
