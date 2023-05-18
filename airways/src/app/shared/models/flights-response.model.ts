import { IRouteModel } from './route.model';

export interface IFlightsResponseModel {
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureDate: string;
  returnDate: string;
  roundTrip: number;
  routes: IRouteModel[];
}
