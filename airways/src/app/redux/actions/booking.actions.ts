import { createAction, props } from '@ngrx/store';
import { IBookingStepModel } from 'src/app/booking/models/booking-step.model';
import { IContactModel } from 'src/app/shared/models/contact.model';
import {
  IFlightsRequestModel,
  IFlightsRequestOptionsModel,
} from 'src/app/shared/models/flights-request.model';
import { IFlightsResponseModel } from 'src/app/shared/models/flights-response.model';
import { IPassengerModel } from 'src/app/shared/models/passenger.model';
import { IRouteModel } from 'src/app/shared/models/route.model';

export enum BookingActionTypes {
  setStep = '[Booking] set step',
  setFlightsRequest = '[Booking] set flights request',
  getFlights = '[Booking] get flights',
  getFlightsSuccess = '[Booking] get flights success',
  getFlightsFailed = '[Booking] get flights failed',
  setOrderRouteTo = '[Booking] add order route to',
  setOrderRouteFrom = '[Booking] add order route from',
  setPassengers = '[Booking] set passengers',
  setContactDetails = '[Booking] set contact details',
  clearBookingData = '[Booking] clear booking data',
}

export const setStep = createAction(
  BookingActionTypes.setStep,
  props<{ step: IBookingStepModel | null }>(),
);

export const setFlightsRequest = createAction(
  BookingActionTypes.setFlightsRequest,
  props<{ flightsRequest: IFlightsRequestModel }>(),
);

export const getFlights = createAction(
  BookingActionTypes.getFlights,
  (request: IFlightsRequestModel, options: IFlightsRequestOptionsModel = {
    isNewData: false, isGoToBooking: false,
  }) => ({
    request,
    options,
  }),
);

export const getFlightsSuccess = createAction(
  BookingActionTypes.getFlightsSuccess,
  props<{ response: IFlightsResponseModel }>(),
);

export const getFlightsFailed = createAction(
  BookingActionTypes.getFlightsFailed,
  props<{ message: string }>(),
);

export const setOrderRouteTo = createAction(
  BookingActionTypes.setOrderRouteTo,
  props<{ route: IRouteModel | null }>(),
);

export const setOrderRouteFrom = createAction(
  BookingActionTypes.setOrderRouteFrom,
  props<{ route: IRouteModel | null }>(),
);

export const setPassengers = createAction(
  BookingActionTypes.setPassengers,
  props<{ passengers: IPassengerModel[] }>(),
);

export const setContactDetails = createAction(
  BookingActionTypes.setContactDetails,
  props<{ contactDetails: IContactModel }>(),
);

export const clearBookingData = createAction(
  BookingActionTypes.clearBookingData,
);
