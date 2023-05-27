import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { IBookingStateModel } from 'src/app/booking/models/booking-state.model';
import { BOOKING_STEPS } from 'src/app/environment/constants/booking';
import * as BookingActions from '../actions/booking.actions';

export const initialState: IBookingStateModel = {
  step: null,
  flightsRequest: null,
  isFlightsNewData: false,
  routes: [],
  orderRouteTo: null,
  orderRouteFrom: null,
  passengers: [],
  contactDetails: null,
};

function getStep(url: string) {
  const ind = BOOKING_STEPS.findIndex((value) => url.includes(value.route));
  return (ind < 0) ? null : BOOKING_STEPS[ind];
}

export const bookingReducers = createReducer(
  initialState,
  on(routerNavigatedAction, (state, { payload }): IBookingStateModel => ({
    ...state,
    step: getStep(payload.event.urlAfterRedirects),
  })),
  on(BookingActions.setStep, (state, { step }): IBookingStateModel => ({
    ...state,
    step,
  })),
  on(BookingActions.setFlightsRequest, (state, { flightsRequest }): IBookingStateModel => ({
    ...state,
    flightsRequest: { ...flightsRequest },
  })),
  on(BookingActions.getFlights, (state, { request, options }): IBookingStateModel => ({
    ...state,
    flightsRequest: { ...request },
    isFlightsNewData: options.isNewData,
    routes: [],
  })),
  on(BookingActions.getFlightsSuccess, (state, { response }): IBookingStateModel => ({
    ...state,
    routes: [...response.routes],
  })),
  on(BookingActions.setOrderRouteTo, (state, { route }): IBookingStateModel => ({
    ...state,
    orderRouteTo: route,
  })),
  on(BookingActions.setOrderRouteFrom, (state, { route }): IBookingStateModel => ({
    ...state,
    orderRouteFrom: route,
  })),
  on(BookingActions.setPassengers, (state, { passengers }): IBookingStateModel => ({
    ...state,
    passengers: [...passengers],
  })),
  on(BookingActions.setContactDetails, (state, { contactDetails }): IBookingStateModel => ({
    ...state,
    contactDetails,
  })),
);
