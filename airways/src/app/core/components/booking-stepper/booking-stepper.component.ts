import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-stepper',
  templateUrl: './booking-stepper.component.html',
  styleUrls: ['./booking-stepper.component.scss'],
})
export class BookingStepperComponent {
  @Input() steps: string[] = [];

  @Input()
  set current(value: string | null) {
    if (value !== null) {
      this.currentStep = value;
    }
  }

  get current() {
    return this.currentStep;
  }

  currentStep = '';

  getIconType(step: string): string {
    const currInd = this.steps.indexOf(this.currentStep);
    if (currInd < 0) {
      return '';
    }
    const ind = this.steps.indexOf(step);
    if (ind < currInd) {
      return 'step-complete';
    }
    if (ind === currInd) {
      return 'step-edit';
    }
    return '';
  }
}
