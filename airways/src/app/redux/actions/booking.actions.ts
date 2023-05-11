import { createAction, props } from '@ngrx/store';
import { IBookingStepModel } from 'src/app/booking/models/booking-step.model';

export enum BookingActionTypes {
  setStep = '[Booking] set step',
}

export const setStep = createAction(
  BookingActionTypes.setStep,
  props<{ step: IBookingStepModel | null }>(),
);
