import { IContactModel } from 'src/app/shared/models/contact.model';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IPassengerModel } from 'src/app/shared/models/passenger.model';
import { IRouteModel } from 'src/app/shared/models/route.model';
import { IBookingStepModel } from './booking-step.model';

export interface IBookingStateModel {
  step: IBookingStepModel | null;
  flightsRequest: IFlightsRequestModel | null;
  isFlightsNewData: boolean;
  routes: IRouteModel[];
  orderRouteTo: IRouteModel | null;
  orderRouteFrom: IRouteModel | null;
  passengers: IPassengerModel[];
  contactDetails: IContactModel | null;
}
