import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { IBookingStateModel } from 'src/app/booking/models/booking-state.model';
import { BOOKING_STEPS } from 'src/app/environment/constants/booking';
import * as BookingActions from '../actions/booking.actions';

export const initialState: IBookingStateModel = {
  step: null,
};

function getStep(url: string) {
  const ind = BOOKING_STEPS.findIndex((value) => url.includes(value.route));
  return (ind < 0) ? null : BOOKING_STEPS[ind];
}

export const bookingReducer = createReducer(
  initialState,
  on(routerNavigatedAction, (state, { payload }): IBookingStateModel => ({
    ...state,
    step: getStep(payload.event.urlAfterRedirects),
  })),
  on(BookingActions.setStep, (state, { step }): IBookingStateModel => ({
    ...state,
    step,
  })),
);