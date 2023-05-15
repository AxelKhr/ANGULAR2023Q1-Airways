import { createAction, props } from '@ngrx/store';
import { IBookingStepModel } from 'src/app/booking/models/booking-step.model';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IFlightsResponseModel } from 'src/app/shared/models/flights-response.model';

export enum BookingActionTypes {
  setStep = '[Booking] set step',
  setFlightsRequest = '[Booking] set flights request',
  getFlights = '[Booking] get flights',
  getFlightsSuccess = '[Booking] get flights success',
  getFlightsFailed = '[Booking] get flights failed',
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
  props<{ request: IFlightsRequestModel }>(),
);

export const getFlightsSuccess = createAction(
  BookingActionTypes.getFlightsSuccess,
  props<{ response: IFlightsResponseModel }>(),
);

export const getFlightsFailed = createAction(
  BookingActionTypes.getFlightsFailed,
  props<{ message: string }>(),
);
