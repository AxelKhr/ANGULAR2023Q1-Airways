import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBookingStateModel } from 'src/app/booking/models/booking-state.model';

export const selectBookingState = createFeatureSelector<IBookingStateModel>('booking');

export const selectStep = createSelector(
  selectBookingState,
  (state) => state.step,
);

export const selectRoutes = createSelector(
  selectBookingState,
  (state) => state.routes,
);

export const selectFlightsRequest = createSelector(
  selectBookingState,
  (state) => state.flightsRequest,
);

export const selectOrderRouteTo = createSelector(
  selectBookingState,
  (state) => state.orderRouteTo,
);

export const selectOrderRouteFrom = createSelector(
  selectBookingState,
  (state) => state.orderRouteFrom,
);
