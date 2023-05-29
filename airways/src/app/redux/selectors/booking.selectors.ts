import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBookingStateModel } from 'src/app/booking/models/booking-state.model';
import { IOrderSaveModel } from 'src/app/shared/models/order-save.model';
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

function getOrderRoutes(state: IBookingStateModel) {
  const routes: IRouteModel[] = [];
  if (state.orderRouteFrom) {
    routes.push(state.orderRouteFrom);
  }
  if (state.orderRouteTo) {
    routes.push(state.orderRouteTo);
  }
  return routes;
}

export const selectOrderRoutes = createSelector(
  selectBookingState,
  (state) => getOrderRoutes(state),
);

export const selectPassengers = createSelector(
  selectBookingState,
  (state) => state.passengers,
);

export const selectOrderForSave = createSelector(
  selectBookingState,
  (state) => {
    const orderRoutes = getOrderRoutes(state);
    if (state.flightsRequest && state.contactDetails) {
      const orderSave: IOrderSaveModel = {
        routes: orderRoutes,
        order: {
          _id: '',
          departureAirportCode: state.flightsRequest.departureAirportCode,
          arrivalAirportCode: state.flightsRequest.arrivalAirportCode,
          departureDate: state.flightsRequest.departureDate,
          returnDate: state.flightsRequest.returnDate || '',
          roundTrip: state.flightsRequest.roundTrip || 0,
          passengers: state.passengers,
          contactDetails: state.contactDetails,
          routes: orderRoutes,
        },
      };
      return orderSave;
    }
    return null;
  },
);
