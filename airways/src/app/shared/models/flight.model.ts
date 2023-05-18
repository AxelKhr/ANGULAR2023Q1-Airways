export interface IFlightModel {
  departureAirportCode: string;
  departureDateTime: string;
  arrivalAirportCode: string;
  arrivalDateTime: string;
  numberRace: string;
  seatNumbers: string[];
  freeSeats: number;
  flightTime: number;
}
