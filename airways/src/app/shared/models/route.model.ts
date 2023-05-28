import { IFlightModel } from './flight.model';
import { ITicketsCostModel } from './tickets-cost.model';

export interface IRouteModel {
  departureDate: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  flights: IFlightModel[];
  ticketsCost: ITicketsCostModel;
}
