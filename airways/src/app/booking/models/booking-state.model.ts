import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IRouteModel } from 'src/app/shared/models/route.model';
import { IBookingStepModel } from './booking-step.model';

export interface IBookingStateModel {
  step: IBookingStepModel | null;
  flightsRequest: IFlightsRequestModel | null;
  isFlightsNewData: boolean;
  routes: IRouteModel[];
}