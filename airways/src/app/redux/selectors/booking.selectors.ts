import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBookingStateModel } from 'src/app/booking/models/booking-state.model';
import { IRouteModel } from 'src/app/shared/models/route.model';

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

export const selectOrderRoutes = createSelector(
  selectBookingState,
  (state) => {
    const routes: IRouteModel[] = [];
    if (state.orderRouteFrom) {
      routes.push(state.orderRouteFrom);
    }
    if (state.orderRouteTo) {
      routes.push(state.orderRouteTo);
    }
    return routes;
  },
);

export const selectPassengers = createSelector(
  selectBookingState,
  (state) => state.passengers,
);
