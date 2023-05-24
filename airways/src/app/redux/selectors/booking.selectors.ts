import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBookingStateModel } from 'src/app/booking/models/booking-state.model';

export const selectBookingState = createFeatureSelector<IBookingStateModel>('booking');

export const selectStep = createSelector(
  selectBookingState,
  (state) => state.step,
);
