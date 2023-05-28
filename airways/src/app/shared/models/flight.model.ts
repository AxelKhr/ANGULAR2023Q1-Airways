import { IFlightSeatsModel } from './flight-seats.model';

export interface IFlightModel {
  departureAirportCode: string;
  departureDateTime: string;
  arrivalAirportCode: string;
  arrivalDateTime: string;
  numberRace: string;
  seatNumbers: string[];
  seats: IFlightSeatsModel;
  flightTime: number;
}
