export interface IFlightsRequestModel {
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureDate: string;
  returnDate?: string;
  roundTrip?: number;
  countAdult: number;
  countChildren: number;
  countInfant: number;
  amountFlights?: number;
}

export interface IFlightsRequestOptionsModel {
  isNewData: boolean;
  isGoToBooking: boolean;
}
